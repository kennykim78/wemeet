// =====================================================
// Daily Insights generator
// - Pulls headlines from curated design/AI RSS feeds
// - Asks Claude to write an ORIGINAL Korean curation (summary + commentary),
//   never republishing/translating the source text in full
// - Appends one new post to data/insights.json and rebuilds js/insights-data.js
//
// Usage:  ANTHROPIC_API_KEY=sk-... node scripts/generate-post.mjs
// Env:
//   ANTHROPIC_API_KEY  (required)
//   INSIGHTS_MODEL     (optional, default claude-sonnet-4-6)
//   INSIGHTS_CATEGORY  (optional: "design" | "ai" — otherwise auto-balances)
// Exit code 0 with no changes if nothing new is found (CI then skips commit).
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
    if (title && link) items.push({ title, link, date, desc });
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
function today() {
  return new Date().toISOString().slice(0, 10);
}

// ---------- Claude call ----------
async function writeKoreanCuration(item, category) {
  const sys =
    '당신은 디지털 에이전시 Wemeet의 콘텐츠 에디터입니다. 해외 디자인/AI 소식의 제목과 요약을 보고, ' +
    '원문을 번역하거나 그대로 옮기지 말고 한국 독자를 위한 "큐레이션 글"을 새로 작성하세요. ' +
    '사실 전달 + Wemeet의 짧은 관점으로 구성하고, 반드시 원문 출처로 연결되는 글이어야 합니다. ' +
    '저작권 보호를 위해 원문 문장을 그대로 인용하지 마세요.';
  const user =
    `다음 해외 소식을 한국어 큐레이션으로 작성하세요.\n\n` +
    `원문 제목: ${item.title}\n원문 출처: ${item.source}\n원문 URL: ${item.link}\n` +
    `원문 요약(참고용): ${item.desc || '(없음)'}\n카테고리: ${category}\n\n` +
    `아래 JSON만 출력하세요(설명/마크다운 금지):\n` +
    `{\n  "title": "한국어 제목(원문 번역이 아닌 자연스러운 의역, 30자 내외)",\n` +
    `  "summary": "1~2문장 핵심 요약(80자 내외)",\n` +
    `  "bodyHtml": "<p>...</p><p>...</p><p>Wemeet의 관점: ...</p> 형태의 짧은 3단락. 각 단락 2~3문장. 원문 인용 금지.",\n` +
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

  // Decide category: env override, else whichever was used least recently.
  let category = process.env.INSIGHTS_CATEGORY;
  if (category !== 'design' && category !== 'ai') {
    const lastReal = posts.filter((p) => !p.isSample);
    category = lastReal[0] && lastReal[0].category === 'ai' ? 'design' : 'ai';
  }

  // Gather candidates, newest first, from the chosen category (fallback to the other).
  const order = category === 'ai' ? ['ai', 'design'] : ['design', 'ai'];
  let chosen = null;
  let chosenCat = category;
  for (const cat of order) {
    const all = (await Promise.all(FEEDS[cat].map(fetchFeed))).flat();
    all.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    const fresh = all.find(
      (it) => !usedUrls.has(it.link) && !usedTitles.has(it.title.toLowerCase())
    );
    if (fresh) { chosen = fresh; chosenCat = cat; break; }
  }

  if (!chosen) {
    console.log('No new items found across feeds. Nothing to publish today.');
    process.exit(0);
  }

  console.log(`Selected [${chosenCat}] ${chosen.source}: ${chosen.title}`);
  const c = await writeKoreanCuration(chosen, chosenCat);

  const date = today();
  const post = {
    id: `${date}-${slugify(c.title || chosen.title)}`,
    title: c.title || chosen.title,
    rawTitle: chosen.title,
    category: chosenCat,
    date,
    summary: c.summary || '',
    bodyHtml: c.bodyHtml || `<p>${c.summary || ''}</p>`,
    source: chosen.source,
    sourceUrl: chosen.link,
    tags: Array.isArray(c.tags) ? c.tags.slice(0, 4) : [],
    thumb: '',
  };

  // Avoid duplicate ids
  if (posts.some((p) => p.id === post.id)) post.id += '-' + Date.now().toString().slice(-4);

  posts.unshift(post);
  writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2) + '\n');
  const n = buildInsightsData(projectRoot);
  console.log(`Published "${post.title}" — total ${n} posts.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
