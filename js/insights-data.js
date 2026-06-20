/**
 * Insights data (auto-generated from data/insights.json)
 * Do not edit by hand. Run scripts/generate-post.mjs or scripts/build-insights-data.mjs.
 */
window.INSIGHTS = [
  {
    "id": "2026-06-20-cognitive-inclusion-ux-research",
    "category": "design",
    "date": "2026-06-20",
    "title": "UX 리서치에 ‘인지 포용’을 더하라",
    "rawTitle": "The Benefits Of Cognitive Inclusion In UX Research",
    "summary": "인지장애 참가자를 UX 리서치에 함께 부르면 ‘숨은 마찰’이 드러납니다. 한 연구에선 일반 참가자보다 1.8배 많은 문제를 발견했습니다.",
    "bodyHtml": "<p>Smashing Magazine에 접근성 전문가 Kate Kalcevich가 ‘인지적 포용(cognitive inclusion)’을 UX 리서치의 기본값으로 삼자고 제안했습니다. 핵심은 기억·집중·학습에 어려움을 겪는 사용자를 ‘접근성 테스트’에만 부르지 말고, 일반 UX 리서치에 함께 참여시키라는 것입니다. 이들이 겪는 어려움이 사실은 모두의 사용성 문제를 비추는 거울이기 때문입니다.</p><blockquote>\"인지 사용자와의 2번의 세션이 200번처럼 느껴진다 — 그만큼 얻는 통찰의 양이 많기 때문이다.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>세 개 웹사이트를 대상으로 한 비교 연구에서, 인지장애 참가자는 일반 참가자보다 1.8배 많은 문제를 발견하고 1.8배 많은 개선 제안을 내놨습니다. 이들이 짚어내는 이슈는 소수만의 문제가 아닙니다. 노화로 인지 기능이 떨어지는 시니어, 주의력이 분산된 바쁜 성인, 집중에 어려움을 겪는 Z세대까지 — 결국 대다수 사용자에게 영향을 주는 ‘숨은 마찰’을 드러냅니다.</p><h3>실무 적용</h3><p>실무에서는 작게 시작하는 것이 좋습니다. 단 몇 번의 세션만으로도 인지 포용 리서치의 효용을 체감할 수 있습니다. 또 과업 완료율만 보지 말고 ‘감정적 부담’과 ‘정신적 에너지 소모’를 함께 기록하면, 화면이 만들어내는 인지 부하를 정량적으로 다룰 수 있습니다. 인지 사용성 문제는 부하가 임계점을 넘는 순간 접근성 장벽으로 바뀐다는 점을 기억해야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/inclusive-design/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Inclusive Design</a> — 능력·배경의 다양성을 설계로 끌어안는 인클루시브 디자인의 원리를 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/accessibility-inclusivity-study-guide/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Accessibility and Inclusivity Study Guide</a> — 접근성·포용성을 실무 체크리스트로 확장하는 학습 자료입니다.</li></ul><h3>Wemeet의 관점</h3><p>‘평균 사용자’를 위한 화면은 사실 누구에게도 꼭 맞지 않습니다. Wemeet은 가장 까다로운 조건의 사용자를 기준점으로 삼으면 결과적으로 모두의 경험이 쉬워진다고 봅니다. 인지 포용을 검수 단계의 옵션이 아니라 리서치의 출발점으로 끌어와, 더 적은 비용으로 더 많은 문제를 미리 잡는 방식을 우선합니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/06/benefits-cognitive-inclusion-ux-research/",
    "tags": [
      "UX",
      "Accessibility",
      "Research"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-20-gemini-managed-agents",
    "category": "ai",
    "date": "2026-06-20",
    "title": "구글, 호출 한 번에 도는 ‘매니지드 에이전트’",
    "rawTitle": "Introducing Managed Agents in the Gemini API",
    "summary": "구글이 Gemini API에 ‘매니지드 에이전트’를 도입했습니다. API 호출 한 번으로 추론·도구 사용·코드 실행을 하는 에이전트를 격리된 리눅스 환경에서 띄울 수 있습니다.",
    "bodyHtml": "<p>구글이 Gemini API에 ‘매니지드 에이전트(Managed Agents)’를 도입했습니다. 개발자가 복잡한 인프라를 직접 관리하지 않고도, API 호출 한 번으로 스스로 추론하고 도구를 쓰고 코드를 실행하는 에이전트를 띄울 수 있게 한 것이 핵심입니다. Gemini 3.5 Flash 기반의 Antigravity 에이전트가 이 경험을 떠받칩니다.</p><blockquote>\"With a single call, you can now spin up an agent that reasons, uses tools and executes code in an isolated, ephemeral Linux environment.\"<cite>Google Blog</cite></blockquote><h3>왜 중요한가</h3><p>그동안 ‘에이전트를 만든다’는 건 모델보다 인프라 싸움이었습니다. 안전한 실행 환경, 도구 연결, 파일·상태 관리, 웹 접근까지 직접 구축해야 했기 때문입니다. 매니지드 에이전트는 호출 한 번에 격리된 일회성(ephemeral) 리눅스 샌드박스를 띄우고, 그 안에서 에이전트가 계획·도구 호출·코드 실행·웹 브라우징을 수행한 뒤 후속 호출을 위해 파일과 상태를 유지합니다. 경쟁의 무게중심이 ‘모델 성능’에서 ‘에이전트를 얼마나 쉽게 운영하느냐’로 옮겨가고 있음을 보여줍니다.</p><h3>실무 적용</h3><p>팀은 자체 지시·스킬·데이터를 담은 커스텀 에이전트를 만들고, 이를 AGENTS.md·SKILL.md 같은 버전 관리 가능한 파일로 정의할 수 있습니다. 즉 에이전트의 행동 규칙을 코드처럼 리뷰하고 이력으로 남길 수 있다는 뜻입니다. 도입 시에는 샌드박스의 권한 범위, 실행 로그, 그리고 ‘사람이 검수할 지점’을 먼저 정의해 두면, 빠른 자동화와 통제 가능성을 동시에 확보할 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/sundar-pichai-io-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google Blog: Welcome to the agentic Gemini era</a> — 이번 발표가 올라탄 ‘에이전트 우선’ 전략의 큰 그림을 보여줍니다.</li><li><a href=\"https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google Blog: I/O 2026 developer highlights</a> — Antigravity·Gemini API·AI Studio가 어떻게 맞물리는지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>에이전트가 ‘데모’를 넘어 ‘실제로 일하는’ 단계로 가면, 차별화는 모델이 아니라 운영 설계에서 나옵니다. Wemeet은 에이전트의 권한·검수·롤백 기준을 먼저 설계해, 인프라 부담은 줄이되 결과물의 신뢰는 잃지 않는 자동화를 우선합니다.</p>",
    "source": "Google Blog",
    "sourceUrl": "https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/",
    "tags": [
      "Gemini",
      "Agents",
      "GoogleIO"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-19-design-system-ai-ready",
    "category": "design",
    "date": "2026-06-19",
    "title": "디자인 시스템을 ‘AI가 읽게’ 만들기",
    "rawTitle": "How To Make Your Design System AI-Ready",
    "summary": "AI가 일관된 결과를 내게 하려면, 디자인 결정을 기계가 읽을 수 있는 명세·토큰·감사 규칙으로 남겨야 합니다.",
    "bodyHtml": "<p>Smashing Magazine의 Vitaly Friedman이 ‘AI가 읽을 수 있는 디자인 시스템(AI-ready design system)’을 만드는 법을 정리했습니다. 핵심은 AI에게 ‘예쁘게 만들어 달라’고 부탁하는 게 아니라, 디자인 의사결정 자체를 기계가 참고할 수 있는 형태로 문서화해 두는 것입니다. 도구가 똑똑해져도 기준이 없으면 결과는 흔들립니다.</p><blockquote>\"AI cannot magically resolve technical debt or design debt without proper guidance.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>AI 프로토타이핑이 빨라질수록, 입력으로 주는 ‘맥락의 품질’이 결과물의 일관성을 좌우합니다. 하드코딩된 값, 빠진 상태(state), 분리된 인스턴스 같은 디자인 부채가 그대로 남아 있으면 AI는 그 혼란을 증폭해 재생산합니다. 즉 시스템을 정돈하는 일이 곧 AI 출력 품질을 설계하는 일이 됩니다.</p><h3>실무 적용</h3><p>글은 세 겹의 접근을 권합니다. ①마크다운 가이드라인 같은 ‘스펙 파일’로 결정을 문서화하고, ②색·간격·타이포를 미리 정의한 ‘토큰 레이어’를 두며, ③FigmaLint 같은 감사 도구로 불일치를 자동 점검하는 것입니다. Atlassian·Carbon·Nordhealth처럼 AI-ready 디자인 시스템을 공개한 사례를 참고해, 우리 팀의 규칙부터 ‘읽을 수 있게’ 적어 두는 것이 출발점입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/context-architecture/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Context Architecture</a> — 디자인 결정을 명세화하는 것이 AI ‘맥락 설계’와 어떻게 맞물리는지 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/design-jobs-ai-created/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Four Design Jobs AI Created (So Far)</a> — 시스템·기준을 다듬는 일이 새 디자인 직무로 부상하는 흐름을 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>AI가 화면을 빨리 그려줄수록, 사람이 할 일은 ‘무엇이 옳은가’를 명세로 남기는 쪽으로 이동합니다. Wemeet은 결과물을 양산하기 전에 토큰·상태·예외 규칙부터 문서화해, 도구가 바뀌어도 흔들리지 않는 일관성을 먼저 확보하는 방식을 우선합니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/06/how-make-design-system-ai-ready/",
    "tags": [
      "DesignSystem",
      "AI",
      "DesignOps"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-19-chatgpt-health-intelligence",
    "category": "ai",
    "date": "2026-06-19",
    "title": "ChatGPT, ‘건강 답변’ 정확도 끌어올렸다",
    "rawTitle": "Improving health intelligence in ChatGPT",
    "summary": "GPT-5.5 Instant이 건강 평가에서 프런티어 모델급 성능에 도달했습니다. 260여 명 의사 네트워크가 70만 건 답변을 검수했습니다.",
    "bodyHtml": "<p>OpenAI가 ChatGPT의 ‘건강 인텔리전스(health intelligence)’를 크게 끌어올렸다고 밝혔습니다. 일상 웰니스 질문부터 복잡한 임상 상황까지, 사람들이 실제로 건강을 물어보는 맥락에서 더 정확하고 신중하게 답하도록 기본 모델을 개선한 것이 핵심입니다.</p><blockquote>\"GPT-5.5 Instant은 HealthBench Professional을 비롯한 건강 평가 전반에서 최신 프런티어 모델에 준하는 성능에 도달했습니다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>OpenAI에 따르면 기본 모델인 GPT-5.5 Instant가 HealthBench Professional 등 건강 평가 묶음에서 직전 GPT-5.3 Instant보다 크게 향상돼, 최신 프런티어 모델에 준하는 수준에 올라섰습니다. 더 중요한 건 ‘사람의 검증’을 품질의 축으로 삼았다는 점입니다. 60개국·49개 언어·26개 진료과에 걸친 260여 명의 의사 네트워크가 70만 건 이상의 모델 응답을 검토해, 답변 방식 자체를 다듬었습니다.</p><h3>실무 적용</h3><p>건강처럼 위험이 큰 영역은 ‘빠른 답’보다 ‘틀리지 않는 답’과 ‘한계의 고지’가 핵심입니다. 업무에 AI를 붙일 때도 같은 원칙이 통합니다. 고위험 질의에는 전문가 검수 루프를 두고, 모델이 어디까지 책임지고 어디서 사람에게 넘길지 경계를 먼저 정의하면 신뢰를 지키면서 자동화 범위를 넓힐 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/gpt-5-5-instant/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: GPT-5.5 Instant</a> — 이번 건강 성능 향상이 올라탄 기본 모델 업데이트의 전반을 함께 보여줍니다.</li><li><a href=\"https://openai.com/index/introducing-openai-partner-network/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Introducing the OpenAI Partner Network</a> — AI를 산업 현장에 안전하게 ‘적용’하는 생태계 전략을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>모델 경쟁의 무게중심이 ‘얼마나 똑똑한가’에서 ‘얼마나 신뢰할 수 있게 검증됐는가’로 이동하고 있습니다. Wemeet은 AI를 도입할 때 전문가 검수 절차와 책임 경계를 먼저 설계해, 빠르면서도 신뢰를 잃지 않는 자동화를 만드는 접근을 택합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/improving-health-intelligence-in-chatgpt/",
    "tags": [
      "OpenAI",
      "ChatGPT",
      "Health"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-18-probabilistic-design",
    "category": "design",
    "date": "2026-06-18",
    "title": "불확실성을 설계하라: ‘확률적 디자인’",
    "rawTitle": "Designing With Uncertainty: How AI Supercharges Probabilistic Thinking",
    "summary": "AI는 ‘추정’을 내놓는데 인터페이스는 ‘확정’처럼 보여줍니다. 확률을 그대로 다루는 ‘확률적 디자인’이 새 기준으로 떠오릅니다.",
    "bodyHtml": "<p>Smashing Magazine에 HubSpot의 시니어 프로덕트 디자이너 Pratik Joglekar가 ‘확률적 디자인(probabilistic design)’을 제안했습니다. 핵심은 AI가 불확실성을 새로 만든 게 아니라, 늘 존재하던 불확실성을 더는 무시할 수 없게 만들었다는 인식의 전환입니다. 확률적으로 동작하는 시스템을 결정론적 인터페이스로 감싸는 순간 위험이 생깁니다.</p><blockquote>\"AI has not introduced uncertainty into our world; it has simply made the uncertainty that was always there impossible to ignore.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>AI는 ‘가능성 높은 답’을 제시하지만, 인터페이스가 이를 ‘사실’처럼 보여주면 사용자와 조직은 그 추정을 확정으로 받아들여 행동합니다. 확률을 확실성으로 둔갑시키는 이 간극이 바로 신뢰가 무너지는 지점입니다. 좋은 설계는 우연한 정답이 아니라, 가능한 결과의 범위를 가늠하고 가치가 가장 큰 경로를 고르는 일입니다.</p><h3>실무 적용</h3><p>인터페이스에 신뢰도(confidence)를 드러내고, 사람 지원으로 넘어가는 폴백 경로와 ‘AI 생성’ 라벨을 명시하면 추정이 확정으로 오인되는 일을 줄일 수 있습니다. ‘좋은 아이디어=성공, 익숙한 아이디어=실패’ 같은 이분법을 버리고 변형·신뢰구간·엣지 케이스를 함께 검토하며, 실험은 정답을 확인하는 절차가 아니라 ‘불확실성을 줄이는’ 도구로 재정의하는 것이 효과적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/ai-agents-as-users/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: AI Agents as Users</a> — 사람뿐 아니라 에이전트도 인터페이스를 쓰는 환경에서 불확실성 설계가 왜 더 중요해지는지 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/context-architecture/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Context Architecture</a> — 확률적 출력을 안정시키려면 맥락 구조 설계가 함께 가야 함을 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>AI를 화면에 얹을 때 가장 흔한 실수는 ‘그럴듯한 추정’을 ‘확정된 사실’처럼 보여주는 것입니다. Wemeet은 결과의 확신도와 한계를 사용자에게 정직하게 드러내고, 사람이 개입할 지점을 미리 설계해 ‘빠르되 오해를 만들지 않는’ 인터페이스를 우선합니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/06/designing-uncertainty-how-ai-supercharges-probabilistic-thinking/",
    "tags": [
      "UX",
      "AI",
      "ProbabilisticDesign"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-18-gpt-5-5-instant",
    "category": "ai",
    "date": "2026-06-18",
    "title": "OpenAI, 기본 모델 ‘GPT-5.5 Instant’ 공개",
    "rawTitle": "GPT-5.5 Instant: smarter, clearer, and more personalized",
    "summary": "ChatGPT 기본 모델이 더 똑똑·정확해지고 답변은 더 짧고 명료해졌습니다. 환각도 크게 줄고 메모리 사용 내역을 직접 확인·삭제할 수 있습니다.",
    "bodyHtml": "<p>OpenAI가 ChatGPT의 기본 모델을 ‘GPT-5.5 Instant’로 업데이트했습니다. 더 똑똑하고 정확해진 동시에 답변은 더 간결하고 명료해진 것이 특징으로, 일상적인 대화에서 곧바로 체감되는 ‘실사용 품질’에 초점을 맞췄습니다.</p><blockquote>\"ChatGPT의 기본 모델을 더 똑똑하고 정확하게, 답변은 더 명료하고 간결하게 만들었습니다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>OpenAI에 따르면 GPT-5.5 Instant는 이전보다 단어를 30.2%, 줄 수를 29.2% 줄여 군더더기 없이 답합니다. 특히 의료·법률·금융처럼 정확도가 중요한 고위험 프롬프트에서 환각(허위 주장)이 GPT-5.3 Instant 대비 52.5% 감소했다고 밝혔습니다. ‘많이 말하는 모델’이 아니라 ‘틀리지 않고 핵심만 말하는 모델’로 무게중심이 이동한 셈입니다.</p><h3>실무 적용</h3><p>기본 모델 교체라 별도 설정 없이도 답변의 길이·정확도 변화가 곧장 체감됩니다. 또한 이번 업데이트로 ‘메모리 소스(memory sources)’ 컨트롤이 모든 모델에 도입돼, 응답이 어떤 맥락(저장된 메모리·과거 대화 등)을 참고했는지 확인하고 낡은 정보를 직접 삭제·수정할 수 있습니다. 업무에 도입할 때는 이 가시성을 활용해 개인정보·맥락 거버넌스 기준을 함께 정해 두는 것이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/introducing-gpt-5-5/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Introducing GPT-5.5</a> — Instant 라인이 속한 GPT-5.5 제품군 전반의 방향을 함께 보여줍니다.</li><li><a href=\"https://openai.com/index/gpt-5-1/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: GPT-5.1 — A smarter, more conversational ChatGPT</a> — ‘대화 품질’ 개선이 이어져 온 흐름을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>모델 경쟁의 축이 ‘얼마나 많이 생성하나’에서 ‘얼마나 틀리지 않고 간결하게 답하나’로 옮겨가고 있습니다. Wemeet은 AI를 업무에 붙일 때 답변의 간결성·정확성과 함께 ‘무슨 맥락을 참고했는지’를 검증 가능한 형태로 남겨, 빠르면서도 신뢰할 수 있는 자동화를 설계하는 접근을 택합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/gpt-5-5-instant/",
    "tags": [
      "OpenAI",
      "ChatGPT",
      "GPT"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-17-context-architecture",
    "category": "design",
    "date": "2026-06-17",
    "title": "AI를 위한 정보설계 ‘컨텍스트 아키텍처’",
    "rawTitle": "Context Architecture",
    "summary": "AI 에이전트가 자율적으로 일하는 시대에는 ‘무엇을 말하는가’보다 ‘어떤 환경에서 사고하게 할 것인가’를 설계하는 정보설계가 핵심이 됩니다.",
    "bodyHtml": "<p>NN/g는 정보 아키텍처(IA)의 원리를 AI 시스템에 적용하는 ‘컨텍스트 아키텍처(context architecture)’라는 개념을 제시했습니다. 에이전트가 여러 단계를 거쳐 자율적으로 행동하는 환경에서는, 화면에 보이는 결과물보다 모델이 참고하는 지시·지식·도구·메모리를 어떻게 구조화하느냐가 품질을 좌우한다는 관점입니다.</p><blockquote>\"We are designing the environment in which it thinks and acts.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>프롬프트 한 줄을 잘 쓰는 것만으로는 자율 에이전트의 일관성을 보장할 수 없습니다. 모델이 어떤 정보를 권위 있는 출처로 삼고, 무엇을 기억하고 언제 꺼내 쓰는지를 설계하지 않으면 모호함이 누적돼 결과가 흔들립니다. 정보를 구조화하는 일이 곧 AI의 행동을 설계하는 일이 된 것입니다.</p><h3>실무 적용</h3><p>컨텍스트를 우선순위에 따라 위계적으로 정리하면(승인된 정책을 팀 메모 위에, 현행 워크플로를 폐기된 절차 위에) 모델이 신뢰할 출처를 더 잘 식별합니다. 또 도구·기능의 라벨을 ‘credential-recovery’ 같은 내부 용어가 아니라 ‘비밀번호 재설정’처럼 사용자의 언어로 맞추면 도구 선택 정확도가 올라가고, 무엇을 기억·인덱싱·회수할지 명시적 메모리 규칙을 두면 정보 과부하를 줄일 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/ai-era-critique/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Core Skill of Design in the AI Era — Critique</a> — 구조화된 컨텍스트를 ‘무엇으로 평가할지’의 비평 역량과 함께 봐야 합니다.</li><li><a href=\"https://www.nngroup.com/articles/design-jobs-ai-created/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Four Design Jobs AI Created (So Far)</a> — AI 시대에 디자이너 역할이 어떻게 분화하는지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>에이전트 기반 제작이 늘수록 경쟁력은 모델 자체가 아니라 ‘맥락 설계 능력’에서 갈립니다. Wemeet은 결과물을 만들기 전에 어떤 정보를 권위 있는 기준으로 둘지, 무엇을 기억하게 할지부터 구조화해 자동화의 일관성을 확보하는 방식을 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/context-architecture/",
    "tags": [
      "InformationArchitecture",
      "AI",
      "UX"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-17-openai-acquires-ona",
    "category": "ai",
    "date": "2026-06-17",
    "title": "OpenAI, 클라우드 에이전트 기업 ‘Ona’ 인수",
    "rawTitle": "OpenAI to acquire Ona",
    "summary": "OpenAI가 안전한 클라우드 실행·오케스트레이션 기술을 가진 Ona를 인수해, 단일 기기를 넘어 기업 클라우드에서 장시간 동작하는 에이전트로 Codex를 확장합니다.",
    "bodyHtml": "<p>OpenAI가 클라우드 실행·오케스트레이션 기술을 보유한 Ona를 인수한다고 발표했습니다. 핵심은 코드 에이전트 ‘Codex’를 단일 기기나 하나의 세션에 묶인 작업에서 벗어나게 해, 기업이 자사 클라우드 안에서 장시간 동작하는 에이전트를 안전하게 운영하도록 만드는 데 있습니다.</p><blockquote>\"Bringing Ona to OpenAI expands Codex beyond work tied to a single device or active session.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>이번 인수는 AI 경쟁의 무게중심이 모델 성능에서 ‘운영 인프라’로 이동하고 있음을 보여줍니다. Ona는 약 200만 명의 개발자가 안전하고 재현 가능한 클라우드 환경에서 일하도록 도와온 회사로, 고객이 통제하는(customer-controlled) 실행 모델을 통해 데이터·보안 경계를 조직이 쥔 채로 에이전트를 프로덕션에 투입할 수 있게 합니다.</p><h3>실무 적용</h3><p>실무에서는 ‘데모는 되는데 운영은 안 되는’ 간극을 메우는 것이 관건입니다. 에이전트가 조직 클라우드 안에서 돌고 지능과 오케스트레이션만 외부에서 제공되는 구조라면, 보안 검토를 통과하면서도 장시간 자동화를 돌릴 수 있습니다. 도입 시에는 실행 환경의 권한·로그·롤백 기준을 먼저 정의해 두는 것이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/dell-codex-enterprise-partnership/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Dell partnership to bring Codex to enterprise environments</a> — 온프레미스·하이브리드까지 Codex를 넓히는 흐름을 함께 보여줍니다.</li><li><a href=\"https://openai.com/index/agentic-ai-foundation/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Agentic AI Foundation under the Linux Foundation</a> — 에이전트 생태계의 표준·거버넌스 방향을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>에이전트가 ‘작업을 실제로 수행’하는 단계로 가면, 차별화는 모델이 아니라 안전한 도입·운영 설계에서 나옵니다. Wemeet은 자동화를 도입할 때 보안 경계와 검수 절차를 먼저 설계해, 빠르되 신뢰할 수 있는 결과물 운영 체계를 만드는 접근을 택합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/openai-to-acquire-ona/",
    "tags": [
      "OpenAI",
      "Codex",
      "Agents"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-16-ai-era-critique",
    "category": "design",
    "date": "2026-06-16",
    "title": "AI 시대 디자인의 핵심 역량은 ‘비평’",
    "rawTitle": "The Core Skill of Design in the AI Era: Critique",
    "summary": "AI는 같은 입력에도 결과가 달라집니다. 명세를 적는 대신 ‘무엇이 좋은가’를 정의하는 비평 능력이 디자이너의 핵심 역량으로 떠오릅니다.",
    "bodyHtml": "<p>NN/g는 AI 시대의 디자인 업무가 ‘정답 명세’보다 ‘품질 판단’ 중심으로 이동하고 있다고 짚습니다. 모델이 비결정적으로 출력을 내놓는 환경에서는 결과물을 어떻게 평가할지 먼저 합의하는 팀이 실제 품질을 가져갑니다.</p><blockquote>\"In an AI era, critique is becoming a core design skill.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>기존 UX 프로세스는 요구사항을 명확히 정의하면 유사한 결과가 반복된다는 전제에 기대 왔습니다. 하지만 생성형 AI는 같은 프롬프트에서도 결과 편차가 크기 때문에, 팀의 경쟁력은 구현 속도보다 평가 기준의 정교함에서 갈리게 됩니다.</p><h3>실무 적용</h3><p>디자인 리뷰에 ‘좋다/나쁘다’ 감상평만 남기지 말고, 브랜드 일치성·정보 전달력·접근성 같은 체크 항목을 명시적으로 운영하는 것이 효과적입니다. 또한 모델 변경 시 동일 과제를 재실행해 품질 회귀를 기록하면, 산출물 일관성을 훨씬 안정적으로 유지할 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026</a> — UX 성숙기에 필요한 전략 중심 설계를 함께 설명합니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/04/production-ready-becomes-design-deliverable-ux/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Production-ready Design Deliverable</a> — AI 도입 이후 디자인 역할 재정의 이슈를 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>AI 제작 파이프라인의 핵심은 프롬프트보다 평가 체계입니다. Wemeet은 제작 전에 품질 기준표를 먼저 합의하고, 결과물을 그 기준으로 검수해 ‘빠르게 만들되 흔들리지 않는’ 결과를 만드는 방식을 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/ai-era-critique/",
    "tags": [
      "AI",
      "Critique",
      "DesignProcess"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-16-gemini-omni-3-5-flash",
    "category": "ai",
    "date": "2026-06-16",
    "title": "구글, 멀티모달 생성 모델 ‘Gemini Omni’ 공개",
    "rawTitle": "Watch 9 Google videos of Gemini Omni and Gemini 3.5 Flash",
    "summary": "이미지·오디오·영상·텍스트를 한꺼번에 입력받아 영상을 만들고 대화로 편집하는 Gemini Omni와, 더 빠른 Gemini 3.5 Flash가 공개됐습니다.",
    "bodyHtml": "<p>구글은 I/O 2026에서 Gemini Omni와 Gemini 3.5 Flash를 함께 제시하며, 멀티모달 생성과 응답 속도를 동시에 끌어올리는 전략을 분명히 했습니다. 핵심은 ‘많이 생성하는 능력’이 아니라 생성-편집-반복을 대화형으로 연결하는 작업 경험의 전환입니다.</p><blockquote>\"Gemini Omni and Gemini 3.5 Flash bring faster multimodal creation and editing workflows.\"<cite>Google Blog</cite></blockquote><h3>왜 중요한가</h3><p>텍스트 기반 모델 경쟁에서 벗어나 이미지·오디오·영상이 한 흐름에서 결합되면, 콘텐츠 제작의 병목이 기획 단계로 이동합니다. 즉 기술 우위만으로는 차별화가 어렵고, 어떤 맥락과 메시지로 결과물을 엮는지가 성과를 좌우하게 됩니다.</p><h3>실무 적용</h3><p>실무에서는 초기 시안 제작, 짧은 프로모션 영상 생성, 피드백 반영까지를 한 세션에서 반복하는 워크플로를 설계하는 것이 중요합니다. Flash 계열의 속도 이점은 AB 테스트와 빠른 변형 제작에서 특히 유효하므로, 캠페인 운영팀과 디자인팀의 협업 속도를 크게 높일 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google Blog: 100 things announced at I/O 2026</a> — Omni/Flash 발표가 전체 AI 전략에서 어떤 위치인지 맥락을 제공합니다.</li><li><a href=\"https://openai.com/news/product-releases/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Product releases</a> — 경쟁사 업데이트와 비교해 멀티모달·속도 경쟁의 방향을 확인할 수 있습니다.</li></ul><h3>Wemeet의 관점</h3><p>도구가 고도화될수록 경쟁력은 ‘얼마나 잘 만들었는가’보다 ‘무엇을 만들기로 결정했는가’에서 나옵니다. Wemeet은 멀티모달 도구를 제작 가속 장치로 활용하되, 브랜드 맥락과 편집 기준을 선행 설계해 결과물의 밀도를 확보하는 접근을 택합니다.</p>",
    "source": "Google Blog",
    "sourceUrl": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/",
    "tags": [
      "Gemini",
      "Multimodal",
      "GoogleIO"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-15-state-of-ux-2026",
    "category": "design",
    "date": "2026-06-15",
    "title": "State of UX 2026: 더 깊게 설계해 차별화하라",
    "rawTitle": "State of UX 2026: Design Deeper to Differentiate",
    "summary": "해고·채용 동결·AI 과열을 지나 UX가 안정기에 접어들고 있습니다. 이제 관건은 차별화와 비즈니스 임팩트입니다.",
    "bodyHtml": "<p>NN/g의 State of UX 2026 리포트는 UX 조직이 불확실성 구간을 지나 다시 전략 중심으로 이동하고 있음을 보여줍니다. 단순 사용성 개선을 넘어, 제품 차별화와 비즈니스 결과를 동시에 설명하는 설계가 새 기준으로 부상하고 있습니다.</p><blockquote>\"Design deeper to differentiate.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>생성형 도구가 보편화되면서 표면적인 UI 완성도는 빠르게 평준화되고 있습니다. 결국 경쟁력은 화면의 미려함보다 문제 정의의 깊이, 사용자 맥락 해석, 그리고 비즈니스 목표와의 정렬에서 갈리게 됩니다.</p><h3>실무 적용</h3><p>실무에서는 기획 초기부터 핵심 지표(전환, 리텐션, 문의 전환율 등)를 명시하고, 디자인 의사결정이 어떤 지표를 개선하려는지 연결해 설명해야 합니다. 또한 사용자 세그먼트별 과업 흐름을 분리해 설계하면 ‘평균 사용자용 화면’의 한계를 줄일 수 있습니다.</p><h3>Wemeet의 관점</h3><p>Wemeet은 결과물이 예쁜지보다, 고객의 사업 목표에 어떤 변화를 만들지부터 검증합니다. 디자인 산출물을 전략 문서와 함께 제시해 의사결정의 근거를 명확히 만드는 것이 장기적으로 더 큰 성과를 만든다고 봅니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/state-of-ux-2026/",
    "tags": [
      "UX",
      "Strategy",
      "Trends"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-13-openai-product-updates",
    "category": "ai",
    "date": "2026-06-13",
    "title": "OpenAI 제품 업데이트: GPT-5.5·이미지 2.0·메모리 ‘Dreaming’",
    "rawTitle": "OpenAI Newsroom Product releases",
    "summary": "더 똑똑해진 GPT-5.5, 텍스트 렌더링·다국어가 개선된 ChatGPT Images 2.0, 맥락을 더 잘 유지하는 새 메모리 ‘Dreaming’이 공개됐습니다.",
    "bodyHtml": "<p>OpenAI의 최근 릴리스는 모델 성능 향상 자체보다, 실제 제작/운영 환경에서 바로 체감되는 기능 고도화에 초점을 맞추고 있습니다. 특히 텍스트 렌더링이 강화된 이미지 생성과 장기 맥락을 보존하는 메모리 개선은 실무 전환 속도를 크게 높이는 요소입니다.</p><blockquote>\"Our latest releases focus on making advanced AI more useful in real work.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>AI 도구의 경쟁은 이제 데모 품질을 넘어 운영 안정성과 재사용성으로 이동했습니다. 한 번 잘 만드는 것보다, 팀 전체가 반복 가능한 품질로 계속 만들 수 있는지가 서비스 경쟁력을 좌우하게 됩니다.</p><h3>실무 적용</h3><p>콘텐츠 팀은 이미지 텍스트 렌더링 개선을 활용해 배너/썸네일 제작 반복 비용을 줄일 수 있고, CS/세일즈 팀은 메모리 강화를 통해 맥락 단절을 줄인 응대 흐름을 설계할 수 있습니다. 동시에 모델 업데이트 시 프롬프트 템플릿과 검수 기준을 함께 관리해야 품질 변동을 최소화할 수 있습니다.</p><h3>Wemeet의 관점</h3><p>새 기능을 빠르게 도입하는 것만으로는 차별화가 어렵습니다. Wemeet은 도구 업데이트를 업무 프로세스 재설계와 함께 적용해, 체감 생산성과 결과물 일관성을 동시에 확보하는 방식으로 운영합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/news/product-releases/",
    "tags": [
      "OpenAI",
      "GPT",
      "ChatGPT"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-12-production-ready-deliverable",
    "category": "design",
    "date": "2026-06-12",
    "title": "‘프로덕션 레디’가 디자인 산출물이 될 때",
    "rawTitle": "The UX Designer’s Nightmare: When “Production-Ready” Becomes A Design Deliverable",
    "summary": "디자인과 엔지니어링의 경계가 흐려지며 디자이너에게 ‘바로 구현 가능한’ 산출물이 요구됩니다. 무엇을 얻고 무엇을 잃는가.",
    "bodyHtml": "<p>AI 도구의 확산으로 디자이너가 ‘바로 프로덕션에 올릴 수 있는’ 산출물까지 책임지는 사례가 늘고 있습니다. 디자인과 엔지니어링의 경계가 흐려지면서 역할의 정의 자체가 흔들리는 중입니다.</p><p>속도와 효율은 분명한 이득이지만, 디자이너가 ‘사용자 경험의 수호자’라는 본질을 놓칠 위험도 함께 커집니다. 무엇을 자동화하고 무엇을 끝까지 지킬지 선택이 중요해집니다.</p><p>Wemeet의 관점: 도구가 산출물을 빠르게 만들어줄수록, 사람은 ‘왜 이렇게 설계했는가’를 지키는 역할에 집중해야 합니다. 의도 없는 빠른 결과물은 오히려 부채가 됩니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/04/production-ready-becomes-design-deliverable-ux/",
    "tags": [
      "UX",
      "DesignOps",
      "AI"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-10-google-io-2026-recap",
    "category": "ai",
    "date": "2026-06-10",
    "title": "한눈에 보는 Google I/O 2026: AI 발표 총정리",
    "rawTitle": "100 things we announced at Google I/O 2026",
    "summary": "구글이 I/O 2026에서 발표한 100가지를 정리한 종합 글. 검색의 AI 에이전트화부터 개발 도구까지 올해 방향을 한 번에 볼 수 있습니다.",
    "bodyHtml": "<p>구글이 I/O 2026에서 공개한 발표를 100가지로 정리했습니다. 모델·검색·생산성 도구·개발 플랫폼까지 폭넓게 걸쳐 있어, 올해 구글 AI의 큰 그림을 빠르게 파악하기 좋은 자료입니다.</p><p>흐름의 공통점은 ‘에이전트’입니다. 검색이 단순 응답을 넘어 사용자를 대신해 행동하는 방향으로 이동하고, 개발 도구 역시 코드를 쓰는 보조에서 직접 작업을 수행하는 에이전트로 진화하고 있습니다.</p><p>Wemeet의 관점: 검색이 에이전트화되면 ‘노출’의 문법도 바뀝니다. 구조화된 데이터와 명확한 정보 설계가 곧 AI 검색 가시성으로 직결되므로, 사이트 설계 단계에서부터 대비할 가치가 있습니다.</p>",
    "source": "Google Blog",
    "sourceUrl": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
    "tags": [
      "GoogleIO",
      "AIAgents",
      "Search"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-09-ai-for-ux-getting-started",
    "category": "design",
    "date": "2026-06-09",
    "title": "UX 실무에 AI 들이기: 시작하는 법",
    "rawTitle": "AI for UX: Getting Started",
    "summary": "리서치 분석부터 아이디에이션까지, AI를 ‘생각의 파트너’로 활용하되 해석과 비판적 사고는 사람이 쥐는 균형을 제안합니다.",
    "bodyHtml": "<p>NN/g는 UX 업무에 AI를 도입하는 출발점을 정리했습니다. 리서치 분석, 아이디어 발산, 반복 작업 보조 등에서 AI가 유용하지만, ‘무엇을 맡기고 무엇을 사람이 쥘지’의 기준이 먼저라는 점을 강조합니다.</p><p>핵심은 AI를 ‘생각의 파트너’로 쓰되, 최종 해석과 판단·비판적 사고는 사람이 유지하는 것입니다. 자동화가 통찰을 대체하는 순간 결과의 신뢰가 무너지기 때문입니다.</p><p>Wemeet의 관점: AI는 리서치·기획의 ‘초안 속도’를 끌어올리는 데 특히 강합니다. 우리는 그 시간을 아껴 고객 맥락 해석과 의사결정에 더 쓰는 방식으로 활용합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/ai-ux-getting-started/",
    "tags": [
      "UX",
      "AI",
      "Research"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-06-google-antigravity-agents",
    "category": "ai",
    "date": "2026-06-06",
    "title": "코드를 쓰는 AI에서 ‘행동하는 에이전트’로 — 구글 Antigravity",
    "rawTitle": "I/O 2026 developer highlights: Antigravity, Gemini API, AI Studio",
    "summary": "구글이 에이전트-우선 개발 플랫폼 Antigravity를 고도화했습니다. 작성을 돕던 AI에서, 직접 작업을 수행하는 에이전트로의 전환이 핵심입니다.",
    "bodyHtml": "<p>구글이 에이전트-우선(agent-first) 개발 플랫폼 ‘Antigravity’의 고도화를 발표했습니다. Gemini 3.5 Flash가 이 위에서 동작하며, Gemini API·AI Studio·Android Studio를 통해 폭넓게 제공됩니다.</p><p>메시지는 분명합니다. AI가 ‘코드 작성 보조’를 넘어 ‘작업을 수행하는 에이전트’로 이동하고 있다는 것. 개발 워크플로 자체가 사람이 지시하고 에이전트가 실행하는 구조로 재편되는 중입니다.</p><p>Wemeet의 관점: 제작 생산성은 올라가지만, 품질·일관성·보안 검증은 더 중요해집니다. 에이전트가 만든 결과를 신뢰 가능하게 검수하는 프로세스를 갖춘 팀이 결국 앞섭니다.</p>",
    "source": "Google Blog",
    "sourceUrl": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/",
    "tags": [
      "Agents",
      "DevTools",
      "Gemini"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-05-persuasive-design-ten-years",
    "category": "design",
    "date": "2026-06-05",
    "title": "설득적 디자인, 10년 후",
    "rawTitle": "Persuasive Design: Ten Years Later",
    "summary": "사용자를 움직이는 설득적 디자인이 10년 사이 어떻게 변했는지 짚습니다. 다크패턴 논쟁과 윤리적 설계의 경계가 화두입니다.",
    "bodyHtml": "<p>Smashing Magazine이 ‘설득적 디자인(persuasive design)’의 지난 10년을 되짚었습니다. 사용자의 행동을 유도하는 기법들이 어떻게 정교해졌고, 동시에 어떤 윤리적 논쟁을 불러왔는지 정리합니다.</p><p>전환율을 높이는 설계와 사용자를 기만하는 ‘다크패턴’의 경계는 점점 더 민감해지고 있습니다. 단기 지표를 위한 압박이 장기 신뢰를 갉아먹는다는 인식이 확산되는 흐름입니다.</p><p>Wemeet의 관점: 좋은 설득은 속임이 아니라 ‘이해를 돕는 안내’입니다. 신뢰를 지키는 설계가 결국 재방문과 브랜드 가치를 만든다는 원칙을 우리는 우선합니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/03/persuasive-design-ten-years-later/",
    "tags": [
      "UX",
      "Ethics",
      "Conversion"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-03-openai-devday-2026",
    "category": "ai",
    "date": "2026-06-03",
    "title": "OpenAI, 개발자 컨퍼런스 ‘DevDay 2026’ 예고",
    "rawTitle": "Announcing OpenAI DevDay 2026",
    "summary": "OpenAI가 연례 개발자 행사 DevDay 2026을 9월 29일 샌프란시스코에서 연다고 발표했습니다. 올해 플랫폼 방향을 가늠할 자리입니다.",
    "bodyHtml": "<p>OpenAI가 연례 개발자 컨퍼런스 ‘DevDay 2026’을 9월 29일 샌프란시스코에서 개최한다고 예고했습니다. 매년 신규 API·모델·플랫폼 기능이 공개되는 자리라, 한 해의 개발 생태계 방향을 읽는 기준점이 됩니다.</p><p>최근 OpenAI가 기업용 배포와 에이전트, 메모리 등에 무게를 싣고 있는 만큼, 올해도 ‘실무 적용’과 ‘에이전트 워크플로’가 주요 화두가 될 가능성이 큽니다.</p><p>Wemeet의 관점: 플랫폼 발표 일정은 프로젝트 로드맵과 맞물립니다. 신기능 출시 시점을 미리 파악해 두면, 고객 제안에 ‘최신성’이라는 무기를 더할 수 있습니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/devday-2026/",
    "tags": [
      "OpenAI",
      "DevDay",
      "Platform"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-02-practical-guide-design-principles",
    "category": "design",
    "date": "2026-06-02",
    "title": "팀을 한 방향으로: 디자인 원칙 실전 가이드",
    "rawTitle": "A Practical Guide To Design Principles",
    "summary": "디자인 원칙은 장식이 아니라 팀을 공동의 목적으로 결집시키는 도구입니다. 참고·예시·방법을 함께 정리한 실전 가이드.",
    "bodyHtml": "<p>Smashing Magazine이 디자인 원칙을 실무에서 어떻게 세우고 쓰는지 정리한 가이드를 공개했습니다. 디자인 원칙은 멋진 문구가 아니라, 팀을 ‘공동의 목적’으로 모으고 조직의 가치를 문서화하는 도구라는 관점입니다.</p><p>참고 사례·예시·방법을 빠르게 찾아볼 수 있게 구성해, 원칙을 만들고 실제 의사결정에 적용하는 과정을 돕습니다. 추상적 슬로건을 넘어 ‘판단 기준’으로 작동하게 하는 것이 핵심입니다.</p><p>Wemeet의 관점: 협업하는 팀이 같은 단어로 같은 판단을 내릴 수 있을 때 결과물의 일관성이 생깁니다. 프로젝트 초기에 원칙을 합의하는 일은 가장 저렴한 품질 투자입니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/04/practical-guide-design-principles/",
    "tags": [
      "DesignPrinciples",
      "Team",
      "Process"
    ],
    "thumb": ""
  },
  {
    "id": "2026-05-30-openai-deployment-company",
    "category": "ai",
    "date": "2026-05-30",
    "title": "OpenAI, 기업 도입 전담 ‘Deployment Company’ 출범",
    "rawTitle": "OpenAI launches the OpenAI Deployment Company",
    "summary": "기업이 AI를 실제로 구축·도입하도록 돕는 전담 조직을 신설했습니다. 프런티어 모델을 현장에 심는 ‘적용’ 단계에 힘이 실립니다.",
    "bodyHtml": "<p>OpenAI가 기업의 AI 구축·도입을 전담하는 ‘OpenAI Deployment Company’를 출범했습니다. 프런티어 모델 배포에 특화된 ‘포워드 디플로이드 엔지니어’를 조직 내부에 투입해, 실제 업무에 AI를 심는 것을 돕는 구조입니다.</p><p>모델 성능 경쟁을 넘어 ‘어떻게 현장에 안착시키느냐’가 승부처가 되고 있음을 보여주는 행보입니다. 기술 자체보다 도입·운영·정착의 난이도가 더 큰 장벽이라는 인식이 깔려 있습니다.</p><p>Wemeet의 관점: 이 지점이 바로 에이전시·컨설팅의 기회입니다. 모델은 누구나 쓸 수 있어도, 비즈니스 맥락에 맞게 설계하고 정착시키는 일은 여전히 사람의 몫입니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/openai-launches-the-deployment-company/",
    "tags": [
      "OpenAI",
      "Enterprise",
      "AX"
    ],
    "thumb": ""
  },
  {
    "id": "2026-05-29-ux-product-career-paths-2026",
    "category": "design",
    "date": "2026-05-29",
    "title": "2026년 UX·프로덕트 디자이너의 커리어 경로",
    "rawTitle": "UX And Product Designer’s Career Paths In 2026",
    "summary": "전문화와 제너럴리스트 사이에서 디자이너의 길이 다시 그려지고 있습니다. AI 시대에 넓은 역량과 전략적 사고의 가치가 커집니다.",
    "bodyHtml": "<p>Smashing Magazine이 2026년 UX·프로덕트 디자이너의 커리어 경로를 짚었습니다. 깊은 전문성과 넓은 제너럴리스트 역량 사이에서, 디자이너의 성장 방향이 다시 그려지고 있다는 진단입니다.</p><p>AI가 반복 작업을 흡수하면서, 오히려 폭넓은 시야·적응력·전략적 사고를 갖춘 ‘제너럴리스트’의 가치가 부각되는 흐름입니다. 한 가지 도구의 숙련보다 문제를 정의하고 연결하는 능력이 중요해집니다.</p><p>Wemeet의 관점: 에이전시에서는 기획·디자인·비즈니스를 잇는 ‘연결형 인재’의 가치가 특히 큽니다. 도구는 빠르게 바뀌어도, 맥락을 읽고 의사결정하는 역량은 오래 갑니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/01/ux-product-designer-career-paths/",
    "tags": [
      "Career",
      "UX",
      "ProductDesign"
    ],
    "thumb": ""
  }
];
