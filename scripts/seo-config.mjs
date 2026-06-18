// Single source of truth for Wemeet SEO/AEO facts. Override domain via SITE_URL env if needed.
export const SITE_URL = (process.env.SITE_URL || 'https://wemeet.co.kr').replace(/\/+$/, '');

// Indexable main pages (insight.html shell and any test pages are excluded).
export const MAIN_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about.html', changefreq: 'monthly', priority: '0.9' },
  { path: '/portfolio.html', changefreq: 'monthly', priority: '0.8' },
  { path: '/consulting.html', changefreq: 'monthly', priority: '0.7' },
  { path: '/insights.html', changefreq: 'daily', priority: '0.7' },
];

// Wemeet = 디지털 크리에이티브 스튜디오 (회사). 값은 index/about/footer 실제 내용 기반.
export const ORG = {
  name: 'Wemeet',
  legalName: '(주)위밋',
  alternateName: 'Wemeet Studio',
  url: SITE_URL,
  logo: '/image/common/logo.svg',
  image: '/image/main/service_01.jpg',
  email: 'kenny@wemeet.co.kr',
  telephone: '+82-10-9962-1282',
  founder: 'Kenny Kim',
  description:
    '분야별 10년+ 전문가 그룹이 AI를 활용해 브랜드의 온라인 사업 구조를 설계·실행하는 디지털 크리에이티브 스튜디오. 기획·디자인·개발·브랜딩을 원스톱으로 제공한다.',
  // 서비스 = knowsAbout (index keywords + about 기반)
  knowsAbout: [
    '웹사이트 구축', '랜딩페이지 제작', '앱 구축', '쇼핑몰 UI', '브랜드 디자인',
    'AI 웹구축', '반응형 웹', '모바일 웹', 'UI/UX', '웹 퍼블리싱', '온라인 비즈니스 컨설팅',
  ],
};

export const WEBSITE = {
  name: 'Wemeet — AI 기반 온라인 비즈니스 구축 스튜디오',
  url: SITE_URL + '/',
  inLanguage: 'ko',
};

// IndexNow public key (hosted at https://wemeet.co.kr/<key>.txt for ownership verification).
// Distinct from other sites' keys.
export const INDEXNOW_KEY = '593979ec810549dce5886aadf4a0af73';
