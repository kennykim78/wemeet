# 매일 인사이트 발행 루틴 (Claude Code용)

이 문서는 매일 오전 10시 자동 실행 시 Claude Code가 그대로 따라야 하는 절차입니다.
목표: **해외 디자인/AI 소식 1건을 한국어로 큐레이션해 사이트에 발행**하고, git에 커밋·푸시까지 완료한다.

## 작업 디렉터리
`C:\kenny_work\000._My_company\260515_wm_web`

## 절차 (반드시 순서대로)

1. **기존 글 확인**: `data/insights.json`을 읽어 이미 발행된 글의 `sourceUrl`과 `rawTitle` 목록을 파악한다. (중복 발행 금지)

2. **오늘 카테고리 결정**: 가장 최근 글의 `category`와 반대로 정한다. (ai ↔ design 번갈아) 직전이 ai면 오늘은 design.

3. **소식 1건 선택**: 아래 신뢰 소스에서 최근 글 1건을 고른다. 이미 쓴 URL은 제외.
   - 디자인: smashingmagazine.com, nngroup.com, alistapart.com
   - AI: blog.google, openai.com/news, huggingface.co/blog
   - WebSearch로 "site 최근 글"을 찾고, 정확한 제목과 URL을 확보한다. **URL이 실제 존재하는지 확인**하고 추정 URL은 쓰지 않는다.

4. **큐레이션 작성 (저작권 안전)**: 원문을 번역·전재하지 말 것. 제목/짧은 요약만 참고해 **한국어 원작 큐레이션**을 작성한다.
   - `title`: 자연스러운 한국어 의역 제목(30자 내외)
   - `summary`: 1~2문장 핵심 요약(80자 내외)
   - `bodyHtml`: `<p>...</p>` 3단락. 각 2~3문장. **마지막 단락은 반드시 "Wemeet의 관점: …"** 로 시작. 원문 문장 직접 인용 금지.
   - `tags`: 영문 태그 3개
   - `source`: 매체명, `sourceUrl`: 원문 URL

5. **데이터 추가**: `data/insights.json` 배열 **맨 앞**에 아래 형식으로 추가한다. 기존 항목 수정 금지.
   ```json
   {
     "id": "YYYY-MM-DD-영문-슬러그",
     "category": "ai 또는 design",
     "date": "오늘 날짜 YYYY-MM-DD",
     "title": "...", "rawTitle": "원문 제목",
     "summary": "...", "bodyHtml": "...",
     "source": "...", "sourceUrl": "https://...",
     "tags": ["...","...","..."], "thumb": ""
   }
   ```
   - `id`는 날짜 + 슬러그로 유일하게. 같은 날 중복이면 끝에 숫자 추가.

6. **데이터 빌드**: 다음을 실행한다.
   ```
   node scripts/build-insights-data.mjs
   ```
   → `js/insights-data.js`가 갱신된다.

7. **git 커밋·푸시** (Insights 관련 파일만):
   ```
   git add data/insights.json js/insights-data.js
   git commit -m "chore(insights): daily auto-post YYYY-MM-DD"
   git push origin main
   ```
   - 다른 변경 파일은 건드리지 말 것.
   - `.git/index.lock` 오류가 나면 그 파일을 삭제 후 재시도.

8. **완료 보고**: 발행한 글 제목·카테고리·URL을 한 줄로 출력한다.

## 주의
- 하루 1건만 발행한다.
- 사실 확인이 안 되는 URL/제목은 쓰지 않는다. 적절한 소식을 못 찾으면 발행하지 말고 그 사유를 출력한다.
- JSON 문법 오류가 없도록 추가 후 `node -e "require('./data/insights.json')"` 로 검증한다.
