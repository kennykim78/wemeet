import test from 'node:test';
import assert from 'node:assert/strict';
import { SITE_URL, MAIN_PAGES, ORG, INDEXNOW_KEY, WEBSITE } from './seo-config.mjs';

test('SITE_URL is the canonical apex without trailing slash', () => {
  assert.equal(SITE_URL, 'https://wemeet.co.kr');
});

test('MAIN_PAGES lists the 5 indexable main pages with absolute paths', () => {
  const paths = MAIN_PAGES.map((p) => p.path);
  assert.deepEqual(paths, ['/', '/about.html', '/portfolio.html', '/consulting.html', '/insights.html']);
});

test('ORG facts are grounded and include core services', () => {
  assert.equal(ORG.name, 'Wemeet');
  assert.equal(ORG.legalName, '(주)위밋');
  assert.equal(ORG.founder, 'Kenny Kim');
  assert.ok(ORG.knowsAbout.includes('웹사이트 구축'));
  assert.ok(ORG.knowsAbout.includes('AI 웹구축'));
});

test('INDEXNOW_KEY is a valid IndexNow key (hex, 8-128 chars)', () => {
  assert.match(INDEXNOW_KEY, /^[a-zA-Z0-9-]{8,128}$/);
  assert.equal(INDEXNOW_KEY, '593979ec810549dce5886aadf4a0af73');
});

test('WEBSITE.url is the apex with a single trailing slash', () => {
  assert.equal(WEBSITE.url, 'https://wemeet.co.kr/');
});

import { esc, abs, jsonLd, articleJsonLd } from './build-seo.mjs';

test('esc escapes HTML-significant characters', () => {
  assert.equal(esc('<a>&"'), '&lt;a&gt;&amp;&quot;');
});

test('abs builds absolute URLs from root-relative paths', () => {
  assert.equal(abs('/about.html'), 'https://wemeet.co.kr/about.html');
  assert.equal(abs('https://x.com/y'), 'https://x.com/y');
});

test('jsonLd wraps an object and neutralizes </script> breakout', () => {
  const out = jsonLd({ '@type': 'Thing', name: 'a</script>b' });
  assert.match(out, /<script type="application\/ld\+json">/);
  assert.doesNotMatch(out, /<\/script>b/);
  assert.match(out, /\\u003c\/script>b/);
});

test('articleJsonLd is an Article authored by the Wemeet organization', () => {
  const post = { id: 'p1', title: '제목<', summary: '요약', date: '2026-06-18', tags: ['CSS'], sourceUrl: 'https://s.com' };
  const out = articleJsonLd(post, 'https://wemeet.co.kr/insight/p1/');
  assert.match(out, /"@type": "Article"/);
  assert.match(out, /"headline": "제목\\u003c"/);
  assert.match(out, /"author": \{[\s\S]*?"@type": "Organization"[\s\S]*?"name": "Wemeet"/);
  assert.match(out, /"mainEntityOfPage": "https:\/\/wemeet\.co\.kr\/insight\/p1\/"/);
});

import { articleInnerHtml, renderInsightPage } from './build-seo.mjs';

const SAMPLE = {
  id: '2026-06-18-x', category: 'design', date: '2026-06-18',
  title: '센터링', summary: '요약문', bodyHtml: '<p>본문</p>',
  source: 'CSS-Tricks', sourceUrl: 'https://css-tricks.com/x/', tags: ['CSS', 'Layout'],
};

const FAKE_TEMPLATE = [
  '<!doctype html><html lang="ko"><head>',
  '<meta charset="UTF-8" />',
  '<meta property="og:image" content="/image/og.png" />',
  '<link rel="canonical" href="https://wemeet.co.kr/insights.html" />',
  '<title>Insights — Wemeet</title>',
  '<meta property="og:title" content="Insights — Wemeet" />',
  '<meta',
  '  property="og:description"',
  '  content="디자인·AI 및 IT 트렌드를 큐레이션합니다."',
  '/>',
  '<link rel="stylesheet" href="css/insights.css" />',
  '</head><body>',
  '<article class="insight-article" id="insightArticle" aria-live="polite"><!-- x --></article>',
  '<script src="js/insights.js"></script>',
  '</body></html>',
].join('\n');

test('articleInnerHtml mirrors renderDetail structure with server-rendered body', () => {
  const html = articleInnerHtml(SAMPLE);
  assert.match(html, /<h1 class="insight-title">센터링<\/h1>/);
  assert.match(html, /<div class="insight-body"><p>본문<\/p><\/div>/);
  assert.match(html, /Wemeet이 한국어로/);
  assert.match(html, /#CSS/);
});

test('renderInsightPage injects base, single canonical, title, article and prerender flag', () => {
  const out = renderInsightPage(SAMPLE, FAKE_TEMPLATE);
  assert.match(out, /<base href="\/" \/>/);
  assert.match(out, /<title>센터링 — Wemeet Insights<\/title>/);
  assert.equal((out.match(/rel="canonical"/g) || []).length, 1);
  assert.match(out, /rel="canonical" href="https:\/\/wemeet\.co\.kr\/insight\/2026-06-18-x\/"/);
  assert.match(out, /property="og:type" content="article"/);
  assert.match(out, /property="og:description" content="요약문"/);
  assert.doesNotMatch(out, /큐레이션합니다/);
  assert.equal((out.match(/property="og:description"/g) || []).length, 1);
  assert.equal((out.match(/property="og:image"/g) || []).length, 1);
  assert.match(out, /window\.__INSIGHT_PRERENDERED__\s*=\s*true/);
  assert.match(out, /<h1 class="insight-title">센터링<\/h1>/);
  assert.doesNotMatch(out, /<!-- x -->/);
  assert.match(out, /"@type": "Article"/);
});

test('renderInsightPage throws if the article placeholder is missing', () => {
  assert.throws(
    () => renderInsightPage(SAMPLE, '<html><head></head><body></body></html>'),
    /insightArticle not found/
  );
});

import { renderSitemap, renderRobots, renderLlms } from './build-seo.mjs';

test('renderSitemap includes all main pages and one entry per post', () => {
  const posts = [{ id: 'a', date: '2026-06-18' }, { id: 'b', date: '2026-06-17' }];
  const xml = renderSitemap(posts);
  assert.match(xml, /^<\?xml/);
  assert.match(xml, /<loc>https:\/\/wemeet\.co\.kr\/<\/loc>/);
  assert.match(xml, /<loc>https:\/\/wemeet\.co\.kr\/about\.html<\/loc>/);
  assert.match(xml, /<loc>https:\/\/wemeet\.co\.kr\/insight\/a\/<\/loc>/);
  assert.match(xml, /<lastmod>2026-06-17<\/lastmod>/);
  assert.equal((xml.match(/<loc>/g) || []).length, 5 + 2);
  assert.doesNotMatch(xml, /insight\.html/);
});

test('renderRobots allows AI crawlers and points to sitemap', () => {
  const txt = renderRobots();
  assert.match(txt, /User-agent: \*/);
  for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'CCBot', 'Google-Extended']) {
    assert.match(txt, new RegExp('User-agent: ' + bot));
  }
  assert.match(txt, /Sitemap: https:\/\/wemeet\.co\.kr\/sitemap\.xml/);
});

test('renderLlms leads with Wemeet summary and lists recent posts', () => {
  const posts = Array.from({ length: 25 }, (_, i) => ({
    id: 'p' + i, title: 'T' + i, summary: 'S' + i, date: '2026-06-' + String((i % 28) + 1).padStart(2, '0'),
  }));
  const txt = renderLlms(posts);
  assert.match(txt, /# Wemeet/);
  assert.match(txt, /웹사이트 구축/);
  assert.match(txt, /https:\/\/wemeet\.co\.kr\/consulting\.html/);
  assert.equal((txt.match(/\/insight\/p\d+\//g) || []).length, 20);
});
