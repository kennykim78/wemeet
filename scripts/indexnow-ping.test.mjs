import test from 'node:test';
import assert from 'node:assert/strict';
import { newestDatePosts, buildPayload } from './indexnow-ping.mjs';

test('newestDatePosts returns only posts on the latest date', () => {
  const posts = [
    { id: 'a', date: '2026-06-18' },
    { id: 'b', date: '2026-06-18' },
    { id: 'c', date: '2026-06-17' },
  ];
  const out = newestDatePosts(posts);
  assert.deepEqual(out.map((p) => p.id), ['a', 'b']);
});

test('buildPayload includes host, key, keyLocation and the right urlList', () => {
  const posts = [
    { id: 'a', date: '2026-06-18' },
    { id: 'b', date: '2026-06-18' },
    { id: 'c', date: '2026-06-17' },
  ];
  const p = buildPayload(posts, { siteUrl: 'https://wemeet.co.kr', key: 'KEY123' });
  assert.equal(p.host, 'wemeet.co.kr');
  assert.equal(p.key, 'KEY123');
  assert.equal(p.keyLocation, 'https://wemeet.co.kr/KEY123.txt');
  assert.deepEqual(p.urlList, [
    'https://wemeet.co.kr/',
    'https://wemeet.co.kr/insights.html',
    'https://wemeet.co.kr/insight/a/',
    'https://wemeet.co.kr/insight/b/',
  ]);
});

test('buildPayload with no posts still submits home and list', () => {
  const p = buildPayload([], { siteUrl: 'https://wemeet.co.kr', key: 'K' });
  assert.deepEqual(p.urlList, ['https://wemeet.co.kr/', 'https://wemeet.co.kr/insights.html']);
});
