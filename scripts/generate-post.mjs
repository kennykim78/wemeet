// =====================================================
// Daily Insights generator
// - Pulls headlines from curated design/AI RSS feeds
// - Asks Claude to write ORIGINAL Korean deep-curation posts
// - Generates two posts by default (design 1 + ai 1)
// - Appends new posts to data/insights.json and rebuilds js/insights-data.js
//
// Usage:  ANTHROPIC_API_KEY=sk-... node scripts/generate-post.mjs
// Env:
//   ANTHROPIC_API_KEY  (required)
//   INSIGHTS_MODEL     (optional, default claude-sonnet-4-6)
//   INSIGHTS_CATEGORY  (optional: "design" | "ai" to generate only one)
// Exit code 0 with no changes if nothing new is found.
// =====================================================
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildInsightsData } from './build-insights-data.mjs';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const DATA_PATH = join(projectRoot, 'data', 'insights.json');

// ---- Curated, summary-friendly sources. Edit freely. ----
const FEEDS = {
  design: [
    { source: 'Smashing Magazine', url: 'https://www.smashingmagazine.com/feed/' },
    { source: 'Nielsen Norman Group', url: 'https://www.nngroup.com/feed/rss/' },
    { source: 'A List Apart', url: 'https://alistapart.com/main/feed/' },
  ],
  ai: [
    { source: 'Hugging Face', url: 'https://huggingface.co/blog/feed.xml' },
    { source: 'Google AI Blog', url: 'https://blog.google/technology/ai/rss/' },
    { source: 'OpenAI', url: 'https://openai.com/news/rss.xml' },
  ],
};

const MODEL = process.env.INSIGHTS_MODEL || 'claude-sonnet-4-6';
const API_KEY = process.env.ANTHROPIC_API_KEY;
const TITLE_MAX = 36;
const SUMMARY_MAX = 110;

const FALLBACK_TAGS = {
  design: ['Design', 'UX', 'Product'],
  ai: ['AI', 'Model', 'Workflow'],
};

// ---------- tiny RSS/Atom parser (zero deps) ----------
function decodeEntities(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function tag(block, name) {
  const m = new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, 'i').exec(block);
  return m ? m[1] : '';
}

function normalizeImageUrl(url) {
  const s = String(url || '').trim();
  if (!s) return '';
  if (s.startsWith('//')) return `https:${s}`;
  return s;
}

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function extractImageFromBlock(block) {
  const candidates = [
    /<media:content[^>]*url=["']([^"']+)["'][^>]*>/i,
    /<media:thumbnail[^>]*url=["']([^"']+)["'][^>]*>/i,
    /<enclosure[^>]*type=["']image\/[^"]*["'][^>]*url=["']([^"']+)["'][^>]*>/i,
    /<enclosure[^>]*url=["']([^"']+)["'][^>]*type=["']image\/[^"]*["'][^>]*>/i,
    /<(?:description|content|content:encoded|summary)[^>]*>[\s\S]*?<img[^>]*src=["']([^"']+)["'][^>]*>/i,
  ];

  for (const re of candidates) {
    const m = re.exec(block);
    if (m && m[1]) {
      const normalized = normalizeImageUrl(m[1]);
      if (/^https?:\/\//i.test(normalized)) return normalized;
    }
  }
  return '';
}

function parseFeed(xml) {
  const items = [];
  const blocks = xml.split(/<item[\s>]/i).slice(1).concat(xml.split(/<entry[\s>]/i).slice(1));
  for (const raw of blocks) {
    const block = raw;
    const title = decodeEntities(tag(block, 'title'));
    let link = decodeEntities(tag(block, 'link'));
    if (!link) {
      const m = /<link[^>]*href=["']([^"']+)["']/i.exec(block);
      if (m) link = m[1];
    }
    const date = decodeEntities(tag(block, 'pubDate') || tag(block, 'updated') || tag(block, 'published'));
    const desc = decodeEntities(tag(block, 'description') || tag(block, 'summary') || tag(block, 'content')).slice(0, 600);
    const thumb = extractImageFromBlock(block);
    if (title && link) items.push({ title, link, date, desc, thumb });
  }
  return items;
}

async function fetchFeed(feed) {
  try {
    const res = await fetch(feed.url, { headers: { 'User-Agent': 'WemeetInsightsBot/1.0' } });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseFeed(xml).map((it) => ({ ...it, source: feed.source }));
  } catch {
    return [];
  }
}

function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'insight';
}

function normalizeWhitespace(s) {
  return String(s || '').replace(/\s+/g, ' ').trim();
}

function clampText(s, max) {
  const chars = [...normalizeWhitespace(s)];
  if (chars.length <= max) return chars.join('');
  if (max <= 3) return chars.slice(0, max).join('');
  return chars.slice(0, max - 3).join('') + '...';
}

function normalizeTitle(title, fallback) {
  const base = normalizeWhitespace(title) || normalizeWhitespace(fallback) || '인사이트 업데이트';
  return clampText(base, TITLE_MAX);
}

function normalizeSummary(summary, fallback) {
  const base = normalizeWhitespace(summary) || normalizeWhitespace(fallback) || '해외 인사이트를 한국어로 정리했습니다.';
  return clampText(base, SUMMARY_MAX);
}

function normalizeTags(tags, category) {
  const raw = Array.isArray(tags) ? tags : [];
  const cleaned = raw
    .map((t) => normalizeWhitespace(t).replace(/[^A-Za-z0-9]+/g, ''))
    .filter((t) => t.length >= 2);
  const withFallback = cleaned.length > 0 ? cleaned : (FALLBACK_TAGS[category] || ['Insight', 'Trend', 'Update']);
  return [...new Set(withFallback)].slice(0, 3);
}

function pickFreshItems(all, usedUrls, usedTitles, runUrls, runTitles, limit = 3) {
  const out = [];
  for (const it of all) {
    const t = String(it.title || '').toLowerCase();
    if (!it.link || !it.title) continue;
    if (usedUrls.has(it.link) || usedTitles.has(t)) continue;
    if (runUrls.has(it.link) || runTitles.has(t)) continue;
    out.push(it);
    if (out.length >= limit) break;
  }
  return out;
}

function buildCrossSourceSection(relatedItems) {
  if (!Array.isArray(relatedItems) || relatedItems.length === 0) return '';
  const lines = relatedItems.slice(0, 2).map((it) => {
    const source = escapeHtml(it.source || 'Source');
    const title = escapeHtml(it.title || '관련 글');
    const link = escapeHtml(it.link || '#');
    return `<li><a href="${link}" target="_blank" rel="noopener noreferrer nofollow">${source}: ${title}</a> — 같은 주제 맥락을 보완하는 참고 소스.</li>`;
  }).join('');
  return `<h3>교차 참고</h3><ul>${lines}</ul>`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function countSentences(text) {
  return String(text || '')
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter(Boolean).length;
}

function validateCuration(curation) {
  const body = String(curation?.bodyHtml || '');
  const requiredHeaders = ['왜 중요한가', '실무 적용', 'Wemeet의 관점', '교차 참고'];
  if (!body.includes('<blockquote>') || !body.includes('<cite>')) {
    throw new Error('Generated bodyHtml is missing blockquote/cite.');
  }
  for (const h of requiredHeaders) {
    if (!body.includes(`<h3>${h}</h3>`)) {
      throw new Error(`Generated bodyHtml is missing required heading: ${h}`);
    }
  }

  const quoteMatch = body.match(/<blockquote>([\s\S]*?)<cite>/i);
  if (!quoteMatch) {
    throw new Error('Could not parse quote text from blockquote.');
  }
  const quoteText = quoteMatch[1].replace(/<[^>]+>/g, ' ').trim();
  if (countSentences(quoteText) > 1) {
    throw new Error('Quote guardrail violated: quote must be one sentence or shorter.');
  }
  if (!/<a\s+href=/i.test(body)) {
    throw new Error('Generated bodyHtml is missing link(s) for cross references.');
  }
}

// ---------- Claude call ----------
async function writeKoreanCuration(item, category, relatedItems = []) {
  const relatedText = relatedItems.length > 0
    ? relatedItems.map((it, idx) => `${idx + 1}) ${it.source} | ${it.title} | ${it.link}`).join('\n')
    : '없음';

  const sys =
    '당신은 디지털 에이전시 Wemeet의 콘텐츠 에디터입니다. 해외 디자인/AI 소식의 제목과 요약을 보고, ' +
    '원문을 번역하거나 그대로 옮기지 말고 한국 독자를 위한 "구조화된 심층 큐레이션 글"을 새로 작성하세요. ' +
    '저작권 보호를 위해 인용은 핵심 1문장 이내로 제한하고, 본문의 주된 분량은 직접 쓴 분석이어야 합니다. ' +
    '주요 소스 1개 + 보조 소스 1~2개를 교차해 맥락을 풍부하게 설명하세요.';
  const user =
    `다음 해외 소식을 한국어 큐레이션으로 작성하세요.\n\n` +
    `주요 원문 제목: ${item.title}\n주요 원문 출처: ${item.source}\n주요 원문 URL: ${item.link}\n` +
    `주요 원문 요약(참고용): ${item.desc || '(없음)'}\n카테고리: ${category}\n\n` +
    `교차 참고 소스(1~2개 사용 권장):\n${relatedText}\n\n` +
    `아래 JSON만 출력하세요(설명/마크다운 금지):\n` +
    `{\n  "title": "한국어 제목(원문 번역이 아닌 자연스러운 의역, 30자 내외)",\n` +
    `  "summary": "1~2문장 핵심 요약(80자 내외)",\n` +
    `  "bodyHtml": "반드시 아래 구조를 그대로 따르는 HTML 문자열: ` +
    `<p>리드 2~3문장</p>` +
    `<blockquote>\"원문 핵심 한 문장\"<cite>출처명</cite></blockquote>` +
    `<h3>왜 중요한가</h3><p>2~3문장</p>` +
    `<h3>실무 적용</h3><p>2~3문장</p>` +
    `<h3>교차 참고</h3><ul><li><a href=\"https://...\">출처명: 제목</a> — 한 줄 요약</li></ul>` +
    `<h3>Wemeet의 관점</h3><p>2~3문장</p>. ` +
    `인용은 1문장 이내/따옴표/출처 필수.",\n` +
    `  "tags": ["영문태그", "영문태그", "영문태그"]\n}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1200,
      system: sys,
      messages: [{ role: 'user', content: user }],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = (data.content || []).map((c) => c.text || '').join('');
  const jsonStr = text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1);
  return JSON.parse(jsonStr);
}

// ---------- main ----------
async function main() {
  if (!API_KEY) {
    console.error('ERROR: ANTHROPIC_API_KEY is not set. Aborting.');
    process.exit(1);
  }

  const posts = JSON.parse(readFileSync(DATA_PATH, 'utf8'));
  const usedUrls = new Set(posts.map((p) => p.sourceUrl));
  const usedTitles = new Set(posts.map((p) => (p.rawTitle || '').toLowerCase()));

  const forcedCategory = process.env.INSIGHTS_CATEGORY;
  const targetCategories = (forcedCategory === 'design' || forcedCategory === 'ai')
    ? [forcedCategory]
    : ['design', 'ai'];

  const selected = [];
  const runUrls = new Set();
  const runTitles = new Set();
  for (const cat of targetCategories) {
    const all = (await Promise.all(FEEDS[cat].map(fetchFeed))).flat();
    all.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    const freshItems = pickFreshItems(all, usedUrls, usedTitles, runUrls, runTitles, 3);
    if (freshItems.length > 0) {
      selected.push({
        item: freshItems[0],
        related: freshItems.slice(1),
        category: cat,
      });
      for (const it of freshItems) {
        runUrls.add(it.link);
        runTitles.add(String(it.title || '').toLowerCase());
      }
    } else {
      console.log(`No fresh source found for category: ${cat}`);
    }
  }

  if (selected.length === 0) {
    console.log('No new items found across feeds. Nothing to publish today.');
    process.exit(0);
  }

  const date = today();
  const newPosts = [];
  for (const picked of selected) {
    console.log(`Selected [${picked.category}] ${picked.item.source}: ${picked.item.title}`);
    if (picked.related.length > 0) {
      console.log(`Cross refs [${picked.category}]: ${picked.related.map((it) => it.source).join(', ')}`);
    }
    const c = await writeKoreanCuration(picked.item, picked.category, picked.related);
    const normalizedTitle = normalizeTitle(c.title, picked.item.title);
    const normalizedSummary = normalizeSummary(c.summary, picked.item.desc || picked.item.title);
    const normalizedTags = normalizeTags(c.tags, picked.category);
    let normalizedBodyHtml = normalizeWhitespace(c.bodyHtml) || `<p>${normalizedSummary}</p>`;
    if (!normalizedBodyHtml.includes('<h3>교차 참고</h3>')) {
      normalizedBodyHtml += buildCrossSourceSection(picked.related);
    }
    validateCuration({ bodyHtml: normalizedBodyHtml });

    if (normalizeWhitespace(c.title) !== normalizedTitle) {
      console.log(`Normalized title length/format: ${normalizedTitle}`);
    }
    if (normalizeWhitespace(c.summary) !== normalizedSummary) {
      console.log('Normalized summary length/format.');
    }

    const post = {
      id: `${date}-${slugify(normalizedTitle)}`,
      title: normalizedTitle,
      rawTitle: picked.item.title,
      category: picked.category,
      date,
      summary: normalizedSummary,
      bodyHtml: normalizedBodyHtml,
      source: picked.item.source,
      sourceUrl: picked.item.link,
      tags: normalizedTags,
      thumb: picked.item.thumb || '',
    };

    if (posts.some((p) => p.id === post.id) || newPosts.some((p) => p.id === post.id)) {
      post.id += '-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    }
    newPosts.push(post);
  }

  posts.unshift(...newPosts.reverse());
  writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2) + '\n');
  const n = buildInsightsData(projectRoot);
  for (const p of newPosts) {
    console.log(`Published [${p.category}] "${p.title}"`);
  }
  console.log(`Done. Total ${newPosts.length} new post(s), dataset now ${n}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
