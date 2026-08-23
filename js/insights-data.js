/**
 * Insights data (auto-generated from data/insights.json)
 * Do not edit by hand. Run scripts/generate-post.mjs or scripts/build-insights-data.mjs.
 */
window.INSIGHTS = [
  {
    "id": "2026-08-23-ai-glossary-for-designers",
    "category": "design",
    "date": "2026-08-23",
    "title": "디자이너를 위한 AI 용어 사전",
    "rawTitle": "Artificial Intelligence: Glossary",
    "summary": "NN/G가 제품·디자인 실무에서 마주치는 AI 용어 80여 개를 쉬운 말로 정리했다. 필요할 때 찾고, 필요해지기 전에 어휘를 갖추라는 취지다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Caleb Sponheim이 제품·디자인 실무에서 마주치는 AI 용어를 쉬운 말로 정리한 사전을 냈습니다. AI·머신러닝·신경망 같은 기초 개념부터 LLM·파운데이션 모델·추론 모델, 프롬프트 엔지니어링·RAG·RLHF 같은 기법, 그리고 환각·편향·자동화 편향처럼 디자인 관점에서 신경 써야 할 문제까지 80여 개 항목을 담았습니다.</p><blockquote>\"이 용어 사전은 마주친 용어를 찾아볼 때도, 필요해지기 전에 작동하는 어휘를 갖출 때도 쓰라고 만든 것이다.\"<cite>Caleb Sponheim, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>AI 기능을 만드는 팀에서 가장 흔한 마찰은 기술이 아니라 언어입니다. 같은 단어를 디자이너·엔지니어·PM이 제각기 다르게 쓰면 요구사항이 어긋나고, 벤더와 연구자마다 정의가 달라 혼선은 더 커집니다. 이 사전은 '실제 제품과 UX에서 그 말이 어떻게 쓰이는가'를 기준으로 정의를 잡고, 각 항목에 관련 용어 링크와 심화 아티클을 연결해 팀의 공통 언어를 세울 발판을 제공합니다.</p><h3>실무 적용</h3><p>새 AI 기능을 논의하기 전에 팀이 핵심 용어의 정의부터 맞추세요 &mdash; 환각·자동화 편향·RAG 같은 말이 회의마다 다른 뜻으로 오가면 결정 자체가 흔들립니다. 디자이너라면 특히 환각·편향·자동화 편향처럼 사용자 경험에 직접 닿는 개념을 먼저 익히고, 스펙 문서에 용어 정의를 명시해 두는 것만으로도 리뷰 시간이 줄어듭니다. 필요할 때 찾아보는 사전이자, 신규 입사자 온보딩 자료로도 그대로 쓸 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/eval-ai-output/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: One AI Output Is an Example, Not an Evaluation</a> &mdash; AI 결과물 하나로 성능을 판단하지 말라는 관점이 용어 이해와 나란히 필요합니다.</li><li><a href=\"https://www.nngroup.com/articles/ai-generated-images/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: AI-Generated Images Can Perform as Well as Stock Photography</a> &mdash; 용어를 넘어 실제 UX 판단으로 이어지는 최신 실험 사례입니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI 리터러시의 첫걸음이 모델이 아니라 어휘라고 봅니다. 팀이 같은 단어를 같은 뜻으로 쓰는 순간 논의의 속도와 정확도가 함께 올라갑니다 &mdash; 화려한 도구보다, 공유된 용어집 한 장이 AI 협업의 진짜 병목을 먼저 풉니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/artificial-intelligence-glossary/",
    "tags": [
      "AI Literacy",
      "UX Vocabulary",
      "Design Ops"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-23-meta-muse-glimmer",
    "category": "ai",
    "date": "2026-08-23",
    "title": "로컬에서 도는 오픈 멀티모달, Muse Glimmer",
    "rawTitle": "Meta is back with Muse Glimmer: local, agentic, multimodal, and open source",
    "summary": "Meta가 30B 멀티모달 모델 Muse Glimmer를 Apache 2.0으로 공개했다. 더 큰 Muse에서 증류해 로컬·에이전트 용도를 정면으로 겨냥한다.",
    "bodyHtml": "<p>Meta가 멀티모달 모델 'Muse Glimmer'를 Apache 2.0 라이선스로 공개하고, Hugging Face가 그 출시를 정리했습니다. 더 큰 Muse 모델에서 증류한 30B 규모(2B 비전 인코더 + 28B 텍스트 디코더)로, 클라우드가 아니라 내 기기에서 로컬로 돌리는 프라이버시·비용 절감·에이전트 용도를 정면으로 겨냥합니다.</p><blockquote>\"Muse에서 30B로 증류하고 Apache 2.0으로 공개했다 &mdash; 프라이버시를 위한 로컬 배포, 비용 절감, 혹은 그냥 이것저것 만져보기에 이상적이다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>Muse Glimmer의 강점은 규모가 아니라 '열림과 통합'에 있습니다. 출시 첫날부터 transformers·llama.cpp·vLLM·Hugging Face Inference Endpoints에서 곧바로 돌아가고, 에이전트 과제·코딩·멀티모달 추론 벤치마크에서 경쟁력을 보였습니다 &mdash; MCP Atlas 75.5, SWE-Bench Pro 51.2 같은 지표에서 여러 상위 모델을 앞섰습니다. 여기에 DFlash 드래프터 기반 추측 디코딩, TRL 파인튜닝, 자기 양자화·자기 배포 같은 에이전트 기능까지 함께 제공됩니다.</p><h3>실무 적용</h3><p>온프레미스나 온디바이스 AI를 검토하는 팀에게 시사점은 분명합니다 &mdash; Apache 2.0이라 상업적 제약 없이 로컬 배포가 가능하고, 30B급이라 소비자·엣지 하드웨어에서도 현실적인 지연으로 멀티모달·에이전트 작업을 돌릴 수 있습니다. 모델을 고를 때 벤치마크 점수만이 아니라 '어떤 런타임에 바로 붙는가(day-zero 통합)'와 라이선스 조건을 함께 봐야 실제 배포 비용이 통제됩니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/state-of-open-models-summer-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Models Summer 2026</a> &mdash; 오픈 모델 생태계가 얼마나 빠르게 커지는지 수치로 보여줍니다.</li><li><a href=\"https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: One Year Since the DeepSeek Moment</a> &mdash; 오픈 가중치 경쟁이 판을 바꾼 지난 1년의 흐름을 되짚습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 공개가 '멀티모달의 무게중심도 손안으로 옮겨간다'는 신호라고 봅니다. 텍스트를 넘어 이미지·에이전트까지 로컬에서 무료로 돌기 시작하면, 승부는 가장 큰 모델이 아니라 '내 기기에 가장 잘 붙는 오픈 모델'에서 갈립니다 &mdash; 개방성과 통합성이 곧 채택률입니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/muse-glimmer",
    "tags": [
      "Open Models",
      "Multimodal AI",
      "Local AI"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-22-ai-images-vs-stock-photography",
    "category": "design",
    "date": "2026-08-22",
    "title": "AI 이미지, 스톡 사진만큼 통한다",
    "rawTitle": "AI-Generated Images Can Perform as Well as Stock Photography",
    "summary": "출처를 모를 때 AI 생성 이미지는 신뢰·전문성·진정성에서 스톡 사진과 대등했다. NN/G가 77명 실험으로 검증한 결과와 실무 기준을 정리했다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Rachel Banawa가 AI로 생성한 이미지가 실제 스톡 사진만큼 웹사이트에서 통하는지 실험으로 검증했습니다. 결론은 다소 뜻밖입니다 &mdash; 사용자가 이미지의 출처를 모를 때, AI 이미지는 신뢰·전문성·진정성이라는 세 지표 모두에서 스톡 사진과 대등하거나 오히려 근소하게 앞섰고, 회사 웹사이트에 대한 신뢰를 떨어뜨린다는 증거도 나오지 않았습니다.</p><blockquote>\"이미지의 출처보다, 그 이미지가 의도한 맥락에서 제대로 작동하는지가 더 중요하다 &mdash; 적어도 사용자가 출처가 AI임을 모를 때는.\"<cite>Rachel Banawa, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>연구진은 미국 참가자 77명을 모아 가상의 컨설팅 회사 웹페이지 6종을 평가하게 했습니다 &mdash; 히어로 이미지만 다르게 해서 3개는 AI 생성, 3개는 실제 스톡 사진을 넣었고, 10초간 노출한 뒤 7점 척도로 채점하고 자유 응답을 받았습니다. 결과적으로 AI 이미지가 신뢰·전문성에서 약 0.2점, 진정성에서 0.4점 더 높게 나왔으나 통계적으로 유의한 차이는 진정성뿐이었습니다. 중요한 반전은 따로 있습니다 &mdash; 참가자가 'AI가 개입했다'고 의심하는 순간, 같은 사이트를 더 낮게 평가했습니다. 즉 문제는 이미지의 품질이 아니라 AI라는 사실의 인지였습니다.</p><h3>실무 적용</h3><p>이 결과는 '이미지는 출처가 아니라 이미지 자체로 판단하라'는 원칙을 뒷받침합니다. 스톡이냐 AI냐를 먼저 따지기보다, 목적·대표성·진정성·맥락 적합성이라는 표준 기준으로 개별 이미지를 평가하세요. 참가자들이 자주 언급한 '표현과 다양성'은 특히 신경 써야 할 축이고, AI 이미지라면 손·텍스트·배경 같은 디테일의 생성 오류를 반드시 점검해야 합니다. 동시에 AI 사용을 공개할 의무가 있는지, 공개했을 때 사용자 반응이 어떻게 달라질지도 미리 계산에 넣어야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/artificial-intelligence-glossary/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Artificial Intelligence Glossary</a> &mdash; 생성 이미지·모델 관련 용어를 정리해 실무 논의의 공통 언어를 제공합니다.</li><li><a href=\"https://www.nngroup.com/articles/eval-ai-output/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: One AI Output Is an Example, Not an Evaluation</a> &mdash; AI 결과물 하나를 근거로 삼지 말라는 관점이 이미지 채택 기준과 맞닿아 있습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 실험이 'AI 이미지의 진짜 리스크는 품질이 아니라 신뢰'라는 점을 드러낸다고 봅니다. 사용자는 AI 그 자체를 싫어하는 게 아니라 '속았다'는 느낌을 싫어합니다 &mdash; 그래서 승부는 더 정교한 생성이 아니라, 언제·어떻게 밝힐지를 설계하는 투명성의 문제로 넘어갑니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/ai-generated-images/",
    "tags": [
      "AI Imagery",
      "Visual Design",
      "User Trust"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-22-gemini-robotics-er2",
    "category": "ai",
    "date": "2026-08-22",
    "title": "로봇의 '두뇌'가 된 Gemini Robotics ER 2",
    "rawTitle": "Introducing Gemini Robotics ER 2",
    "summary": "Google DeepMind이 로봇용 고차 추론 모델 Gemini Robotics ER 2를 공개했다. 실시간 공간 추론과 다단계 계획, 여러 로봇의 협업을 겨냥한다.",
    "bodyHtml": "<p>Google DeepMind이 로봇을 위한 '고차 두뇌' 모델 Gemini Robotics ER 2를 공개했습니다. 이 모델은 로봇이 눈앞의 장면을 실시간으로 공간적으로 추론하고, 여러 단계로 이뤄진 작업을 스스로 계획하며, 서로 다른 로봇끼리 협업하도록 조율하는 역할을 맡습니다. 직접 물건을 집는 저차 제어가 아니라, 무엇을 어떤 순서로 할지 판단하는 상위 오케스트레이션 계층에 초점을 둔 것이 특징입니다.</p><blockquote>\"Gemini Robotics ER 2는 영상 이해, 작업 오케스트레이션, 다중 로봇 협업으로 로봇에 힘을 싣는 단계적 도약이다.\"<cite>Google DeepMind</cite></blockquote><h3>왜 중요한가</h3><p>ER 2의 핵심 진전은 판단의 근거를 '정적 스냅샷'에서 '원시 영상 피드'로 옮긴 데 있습니다 &mdash; 덕분에 흘림·미끄러짐·오정렬 같은 실행 중 실패를 중간에 잡아낼 수 있습니다. 성능도 구체적입니다. 작업 완료를 다섯 단계로 추적하는 진행 분류에서 57.4% 정확도, 영상에서 결정적 순간을 짚어내는 과제에서 91.3% 정확도(평균 절대 오차 0.96초)를 기록했고, 더 큰 모델군보다 4배 빠른 1초 미만 지연을 냅니다. 로봇이 '봤다'가 아니라 '지금 잘 되고 있는가'를 스스로 평가하기 시작했다는 뜻입니다.</p><h3>실무 적용</h3><p>ER 2는 Gemini API와 Google AI Studio로 접근할 수 있고, Gemini Enterprise Agent Platform에서는 프라이빗 프리뷰로 제공됩니다. 물리 세계와 맞닿은 에이전트를 설계하는 팀에게 시사점은 분명합니다 &mdash; 저지연 성공/실패 판정과 다단계 계획을 상위 모델이 담당하면, 하위 제어기는 단순해지고 전체 시스템은 실패에 더 강해집니다. 로봇이 아니더라도, '실행 중 자기 점검'이라는 발상은 장시간 도는 소프트웨어 에이전트 설계에도 그대로 옮겨올 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/products/gemini/how-we-built-gemini-robotics/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: How we built the new family of Gemini Robotics models</a> &mdash; 다수 과제 학습과 다중 로봇 대응이라는 설계 철학을 확인할 수 있습니다.</li><li><a href=\"https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-1-6/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google DeepMind: Gemini Robotics ER 1.6</a> &mdash; 안전성과 공간 추론을 강화한 직전 세대와 비교해 개선점을 가늠할 수 있습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 발표의 진짜 의미가 '로봇'이 아니라 '자기 점검하는 에이전트'에 있다고 봅니다. 결과를 낸 뒤가 아니라 실행 중간에 실패를 감지하는 능력 &mdash; 이것이야말로 자율 시스템을 데모에서 제품으로 넘기는 분기점입니다. 앞으로의 경쟁은 '더 잘하는 에이전트'가 아니라 '틀렸을 때 스스로 아는 에이전트'에서 갈릴 것입니다.</p>",
    "source": "Google DeepMind",
    "sourceUrl": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/",
    "tags": [
      "Robotics",
      "AI Agents",
      "Spatial Reasoning"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-21-smil-timing-charts",
    "category": "design",
    "date": "2026-08-21",
    "title": "SMIL 애니메이션, 타이밍 차트로 설계하라",
    "rawTitle": "Timing Charts: A Blueprint For SMIL Animations",
    "summary": "SMIL은 태그 하나가 속성 하나만 제어해 금세 복잡해진다. Smashing Magazine이 언제 시작·끝나는지 그려두는 타이밍 차트로 애니메이션을 설계하는 법을 정리했다.",
    "bodyHtml": "<p>Smashing Magazine의 Johan Grobler가 자바스크립트 없이 SVG를 움직이는 SMIL 애니메이션을 '타이밍 차트'로 설계하는 법을 정리했습니다. SMIL은 태그 하나가 한 요소의 한 속성만 제어하기 때문에, 여러 동작이 얽히기 시작하면 순식간에 복잡해집니다. Grobler는 각 동작이 언제 시작하고 끝나는지를 선으로 그려 미리 매핑해두면, 조율도 이후 유지보수도 훨씬 수월해진다고 말합니다.</p><blockquote>\"타이밍 차트는 이후의 수정과 유지보수를 한결 견딜 만하게 만들어주는, 큰 그림을 미리 그려두는 전략이다.\"<cite>Johan Grobler, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>SMIL의 매력은 <code>&lt;img&gt;</code> 태그 안 정적 이미지에서도 자바스크립트 없이 동작한다는 점입니다 — 의존성과 성능 부담이 낮습니다. 하지만 태그마다 속성 하나씩만 움직이다 보니, 다단계 시퀀스는 syncbase 값(다른 애니메이션의 <code>.begin</code>·<code>.end</code>에 오프셋을 더해 상대 시점을 잡는 방식)으로 서로 물려야 합니다. 명명 규칙과 타이밍 지도가 없으면 어느 태그가 언제 도는지 추적이 불가능해지고, 애니메이션 조율은 순전히 시행착오가 됩니다.</p><h3>실무 적용</h3><p>복잡한 로더·아이콘·인터랙션 애니메이션을 만들 때는 코드보다 차트를 먼저 그리세요. 선분으로 각 동작의 시작·지속·종료를 한눈에 배치하고, 애니메이션 ID에 일관된 명명 규칙을 부여해 다중 요소·속성을 추적합니다. 그리고 <code>prefers-reduced-motion</code>을 반드시 존중해, 모션 최소화를 설정한 사용자에게는 과한 움직임을 걷어내야 합니다. 차트 한 장이 결국 코드 리뷰와 인수인계 문서를 대신합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MDN: SVG animation with SMIL</a> — animate·animateTransform·animateMotion 등 SMIL의 실제 문법을 확인할 수 있습니다.</li><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MDN: prefers-reduced-motion</a> — 모션 최소화 사용자를 배려하는 접근성 미디어 쿼리를 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 좋은 애니메이션이 '멋진 이징 곡선'이 아니라 '읽을 수 있는 타임라인'에서 나온다고 봅니다. 화면 위 움직임이 복잡할수록, 그것을 종이 위에 먼저 그려 팀 전체가 같은 그림을 보게 하는 규율이 유지보수 비용을 좌우합니다 — 애니메이션도 설계 문서가 필요한 엔지니어링입니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/08/timing-charts-blueprint-smil-animations/",
    "tags": [
      "SVG Animation",
      "SMIL",
      "Web Motion"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-21-nemotron-3-nano",
    "category": "ai",
    "date": "2026-08-21",
    "title": "작아도 깊게 추론하는 Nemotron 3 Nano",
    "rawTitle": "Nemotron 3 Nano - A new Standard for Efficient, Open, and Intelligent Agentic Models",
    "summary": "NVIDIA가 다중 에이전트를 겨냥한 경량 추론 모델 Nemotron 3 Nano를 공개했다. 희소 MoE로 총 31.6B 중 토큰당 3.6B만 켜서 속도와 추론 깊이를 동시에 노린다.",
    "bodyHtml": "<p>NVIDIA가 Hugging Face에 경량 추론 모델 'Nemotron 3 Nano'를 공개했습니다. 여러 에이전트를 동시에 돌리는 다중 에이전트 시스템을 겨냥한 모델로, 가중치뿐 아니라 학습 레시피·데이터셋과 강화학습 프레임워크 'NeMo Gym'까지 함께 오픈했습니다. 핵심 아이디어는 '작아서 빠른 모델'과 '커서 똑똑한 모델' 사이의 오랜 절충을, 필요한 부분만 켜는 구조로 푸는 것입니다.</p><blockquote>\"작은 모델은 빠르고 저렴하지만 고급 다중 에이전트에 필요한 추론 깊이가 부족하고, 큰 모델은 많은 에이전트를 동시에 돌릴 때 너무 느리고 비싸다.\"<cite>NVIDIA, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>Nemotron 3 Nano는 총 31.6B 파라미터지만, 희소 전문가 혼합(MoE) 라우팅으로 토큰당 약 3.6B만 활성화합니다 — 큰 모델의 지식을 담되 매 추론에서 켜는 계산은 소형 모델 수준으로 눌렀다는 뜻입니다. 여기에 1M 토큰 컨텍스트를 지원하고, 처리량은 Qwen3-30B 대비 최대 3.3배, GPT-OSS-20B 대비 2.2배, 이전 세대 Nemotron Nano 2 대비 4배 빠르다고 NVIDIA는 밝혔습니다. 여러 에이전트가 병렬로 도는 환경에서 '속도 × 비용 × 추론 깊이'라는 삼각 절충을 구조로 완화하려는 시도입니다.</p><h3>실무 적용</h3><p>이 모델은 에이전트 워크플로, 다단계 도구 사용, 긴 컨텍스트 추론, 코딩·수학, 멀티턴 대화를 겨냥합니다. 에이전트를 여러 개 병렬로 운영하는 팀이라면, 총 파라미터가 아니라 '토큰당 활성 파라미터'와 실제 처리량을 기준으로 모델을 골라야 비용이 통제됩니다. NeMo Gym까지 함께 공개돼, 강화학습 기반 후처리를 직접 재현하며 자사 과제에 맞춰 튜닝할 여지도 열렸습니다 — 오픈 라이선스라 온프레미스 배치도 가능합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/state-of-open-models-summer-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Models Summer 2026</a> — 실무 다운로드의 대부분이 작은 모델에서 나온다는 관측과 맞닿아 있습니다.</li><li><a href=\"https://huggingface.co/blog/ResterChed/deepseek-v4-flash-official-release\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: DeepSeek V4 Flash Official Release</a> — 효율형 오픈 가중치 모델을 즉시 공개하는 최근 흐름을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 발표가 '에이전트 시대의 경제학'을 드러낸다고 봅니다. 에이전트를 하나 잘 만드는 것보다, 수십 개를 동시에 싸게 굴리는 능력이 실제 제품의 승부처가 되고 있습니다 — MoE는 그 병렬 경제를 떠받치는 엔진이고, 앞으로의 경쟁은 '가장 똑똑한 모델'이 아니라 '가장 잘 나눠 쓰는 모델'에서 갈릴 것입니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/nvidia/nemotron-3-nano-efficient-open-intelligent-models",
    "tags": [
      "AI Agents",
      "Mixture of Experts",
      "Efficient Models"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-20-user-panels-governance",
    "category": "design",
    "date": "2026-08-20",
    "title": "사용자 패널, 방치하면 편향이 된다",
    "rawTitle": "User Panels: Maintenance and Governance",
    "summary": "리서치 패널은 관리하지 않으면 예측 가능하게 노후화돼 편향을 낳는다. NN/G가 거버넌스·모니터링·유지·진화 4축으로 패널을 살아있게 유지하는 법을 정리했다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Lola Famulegun이 리서치 패널을 '한 번 꾸리고 끝'이 아니라 계속 돌봐야 하는 살아있는 자산으로 다뤄야 한다고 짚었습니다. 패널은 방치하면 참여자가 이탈하고 응답이 굳어지며, 예측 가능한 방식으로 노후화돼 편향을 끌어들입니다. NN/G는 거버넌스·모니터링·유지·진화라는 네 축으로 패널을 건강하게 지키는 법을 정리했습니다.</p><blockquote>\"리서치 패널은 조직적이고, 참여도가 높으며, 신뢰할 수 있게 유지하라.\"<cite>Lola Famulegun, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>패널은 시간이 지날수록 특정 성향의 참여자만 남는 '자기 선택' 편향에 빠지기 쉽습니다. 오래 남은 열성 참여자는 제품에 익숙해져 더 이상 신규 사용자를 대표하지 못하고, 응답도 관성적으로 변합니다. 관리되지 않은 패널에서 나온 데이터를 신뢰하면, 리서치는 오히려 잘못된 확신을 심어 의사결정을 왜곡합니다. 패널의 가치는 규모가 아니라 대표성과 신선도에서 나옵니다.</p><h3>실무 적용</h3><p>패널을 운영한다면 명시적 거버넌스부터 세우세요 — 누가 참여자를 추가·제거하고 개인정보와 보상을 어떻게 관리하는지 규칙으로 정합니다. 참여율·응답 품질·인구통계 분포를 정기적으로 모니터링해 편향 신호를 조기에 잡고, 비활성 참여자를 정리하고 새 얼굴을 꾸준히 충원해 신선도를 유지합니다. 리서치 목표가 바뀌면 패널 구성도 함께 진화시켜야 하며, 이 모든 과정을 한 사람의 암묵지가 아니라 문서화된 절차로 남겨야 지속됩니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/topic/user-research/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: User Research 주제 모음</a> — 패널 운영을 포함한 리서치 방법론 전반을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/dogfooding/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Dogfooding vs. QA vs. User Research</a> — 내부 사용이 실제 사용자 리서치를 대체할 수 없다는 관점과 맞닿아 있습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 좋은 리서치 인프라가 '한 번 만든 명단'이 아니라 '계속 가꾸는 정원'이라고 봅니다. 화려한 리서치 기법보다, 누구에게 묻고 있는지를 꾸준히 점검하는 규율이 데이터의 신뢰도를 지킵니다 — 패널을 방치하는 순간, 리서치는 조용히 거짓말을 시작합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/videos/user-panels-maintenance-and-governance/",
    "tags": [
      "User Research",
      "Research Panels",
      "UX Ops"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-20-lfm25-quantization-aware-distillation",
    "category": "ai",
    "date": "2026-08-20",
    "title": "4비트로 줄여도 성능 97%, 양자화 증류",
    "rawTitle": "LFM2.5 Q4_0 Checkpoints from Quantization-Aware Distillation",
    "summary": "Liquid AI가 양자화 인지 증류(QAD)로 4비트 압축에서도 원본 성능의 97%를 지킨 소형 모델 4종을 공개했다. 라즈베리파이·스마트폰에서 바로 돌아간다.",
    "bodyHtml": "<p>Liquid AI가 '양자화 인지 증류(QAD, Quantization-Aware Distillation)'로 학습한 LFM2.5 소형 모델 4종의 4비트 체크포인트를 Hugging Face에 공개했습니다. 보통 모델을 4비트로 압축하면 성능이 눈에 띄게 떨어지지만, 이번 방식은 고정밀 교사 모델이 압축된 학생 모델에 지식을 그대로 전수하도록 학습 단계에서 양자화를 미리 반영합니다. 그 결과 4비트에서도 원본 성능의 97% 안팎을 지켜냈습니다.</p><blockquote>\"양자화 인지 증류 체크포인트는 BF16 기준 평균 정확도의 97%를 유지한다.\"<cite>Liquid AI, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>공개된 모델은 LFM2.5-230M·350M·1.2B-Instruct·2.6B 네 가지로, 모두 4비트(Q4_0)로 압축됐습니다. 추론·지시 수행·도구 사용 벤치마크에서 BF16 원본 대비 96.5~97.4%의 성능을 유지했고, 디코딩 처리량은 Q5_K_M·Q4_K_M 같은 상위 양자화보다 3~33% 빨랐습니다. 핵심은 '작게 만들면서 덜 잃는' 방법이 성숙했다는 점입니다 — 압축은 더 이상 성능을 포기하는 타협이 아니라, 설계 단계에서 관리하는 변수로 바뀌고 있습니다.</p><h3>실무 적용</h3><p>이 모델들은 라즈베리파이 5, 갤럭시 S26 울트라, 미니 PC 같은 소비자·엣지 하드웨어에서 곧바로 돌아가도록 겨냥됐습니다. 온디바이스 AI를 검토하는 팀에게 시사점은 분명합니다 — 클라우드 API 대신 기기 안에서 추론을 돌리면 지연·비용·프라이버시를 동시에 잡을 수 있고, QAD 덕분에 그 대가로 치르던 정확도 손실도 크게 줄었습니다. 모델을 고를 때 파라미터 규모뿐 아니라 '어떤 양자화로 어디까지 성능을 지켰는가'를 함께 봐야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/state-of-open-models-summer-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Models Summer 2026</a> — 실무 다운로드의 대부분이 작은 모델에서 나온다는 관측과 맞닿아 있습니다.</li><li><a href=\"https://huggingface.co/blog/daya-shankar/open-source-llms\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Best Open-Source LLM Models in 2026</a> — 로컬·에이전트 용도의 오픈 모델 선택 기준을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 발표가 'AI의 무게중심이 데이터센터에서 손안으로 옮겨가는 신호'라고 봅니다. 더 큰 모델을 향한 경쟁 옆에서, 더 작고 더 싸게 같은 일을 해내는 압축 기술이 조용히 판을 바꾸고 있습니다 — 진짜 보급은 가장 똑똑한 모델이 아니라, 내 기기에서 무료로 돌아가는 모델에서 시작됩니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/LiquidAI/qad",
    "tags": [
      "On-Device AI",
      "Quantization",
      "Edge Models"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-19-cta-3-step-formula",
    "category": "design",
    "date": "2026-08-19",
    "title": "전환을 부르는 CTA, 3단계 공식",
    "rawTitle": "The 3-Step CTAs Formula for Conversion",
    "summary": "행동 동사로 시작하고, 다음에 무슨 일이 일어날지 알려주고, 얻게 될 가치를 전하라. NN/G가 전환을 끌어올리는 CTA 설계 공식을 정리했다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Taylor Dykes가 전환율을 좌우하는 가장 작지만 결정적인 요소, 바로 콜투액션(CTA) 문구 설계를 3단계 공식으로 정리했습니다. 버튼 하나의 표현이 클릭 여부를 가르는데도, 실무에서는 '자세히 보기'나 '시작하기' 같은 관성적인 문구를 습관처럼 붙입니다. Dykes의 제안은 단순하지만 강력합니다 — 행동 동사로 시작하고(무엇을 하는지), 기대를 세우고(다음에 무슨 일이 일어나는지), 가치를 전하라(왜 눌러야 하는지).</p><blockquote>\"효과적인 콜투액션은 전환의 필수 조건이다.\"<cite>Taylor Dykes, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>사용자는 버튼을 누르기 직전 무의식적으로 '이걸 누르면 뭐가 되지?'를 계산합니다. '시작하기'처럼 모호한 문구는 정보 향(information scent)이 약해서, 클릭을 유도하는 듯 보여도 오히려 다음 단계를 예측하지 못하게 만들어 이탈을 부릅니다. 반대로 동사·기대·가치가 담긴 문구는 클릭 이후의 그림을 미리 그려주기 때문에, 사용자가 안심하고 다음 행동으로 넘어가게 합니다. CTA는 장식이 아니라 사용자의 다음 한 걸음에 대한 약속입니다.</p><h3>실무 적용</h3><p>모든 주요 버튼을 이 3단계로 점검해 보세요. '제출' 대신 '무료 견적 받기', '더 알아보기' 대신 '3분 데모 예약하기'처럼, 동사로 행동을 명시하고 소요·결과에 대한 기대를 심고 사용자가 얻을 이득을 담습니다. 특히 랜딩 페이지의 1차 CTA는 페이지 어디서 읽어도 문맥 없이 이해되도록 자립적으로 써야 하며, A/B 테스트로 문구 한 줄의 전환 차이를 반복 측정하는 것이 좋습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/get-started/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: \"Get Started\" Stops Users</a> — 모호한 '시작하기' 문구가 오히려 사용자를 막는 이유를 짚습니다.</li><li><a href=\"https://www.nngroup.com/articles/link-promise/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: A Link is a Promise</a> — 링크·버튼 문구가 곧 사용자와의 약속이라는 관점을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 CTA 카피가 '디자인의 마지막 1픽셀이 아니라 첫 번째 전략'이라고 봅니다. 화려한 애니메이션보다 '누르면 무엇을 얻는가'를 정확히 말해주는 한 줄이 전환을 만듭니다 — 버튼 문구를 마감 직전 채워 넣는 습관만 바꿔도 성과가 달라집니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/videos/3-step-ctas-formula-for-conversion/",
    "tags": [
      "CTA Design",
      "Conversion",
      "UX Writing"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-19-agent-memory-dosage",
    "category": "ai",
    "date": "2026-08-19",
    "title": "에이전트 메모리는 켜는 게 아니라 '조절'하는 것",
    "rawTitle": "How Much Memory Does Your Agent Actually Need?",
    "summary": "메모리는 많을수록 좋은 게 아니다. IBM 리서치는 모델 역량 등급에 맞춰 지식 주입량을 '투여량'처럼 조절하라고 말한다.",
    "bodyHtml": "<p>IBM Research 팀이 Hugging Face 블로그에서, AI 에이전트에게 '스스로 축적한 메모리(자가 증류된 가이드라인)'를 얼마나 넣어야 성능이 좋아지는지를 실험으로 파헤쳤습니다. 결론은 통념을 뒤집습니다 — 메모리는 '많이 넣을수록 좋다'가 아니라, 모델의 역량 수준에 맞춰 정밀하게 조절해야 하는 대상이라는 것입니다. 같은 메모리라도 약한 모델에겐 약이 되고 강한 모델에겐 다른 처방이 필요합니다.</p><blockquote>\"에이전트 메모리는 켜고 끄는 기능이 아니라, 모델에 맞춰 조절하는 투여량이다.\"<cite>IBM Research, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>실험은 모델을 세 부류로 나눠 결과를 드러냈습니다. 약한 모델(gpt-oss-120b)은 필요한 지식만 골라 넣는 '선별 검색'이 최적으로, 토큰을 5%만 더 쓰고도 과제 완수율이 16.1%포인트 뛰었습니다. 강한 모델(DeepSeek-V3.2)은 전체 가이드라인을 통째로 넣을 때 9.5%포인트 향상돼, 모든 교훈을 흡수할 여력이 있음을 보였습니다. 반면 이미 포화된 모델(GLM-5)은 메모리를 어떻게 구성하든 유의미한 개선이 없었습니다. '더 많은 맥락'이 늘 정답은 아니라는 뜻입니다.</p><h3>실무 적용</h3><p>에이전트를 만들 때 컨텍스트 창을 무작정 지식으로 채우는 것은 비용만 늘리고 성능은 정체시킬 수 있습니다. 대신 사용하는 모델의 역량 등급을 먼저 가늠하고, 약한 모델에는 상황에 맞는 소수의 가이드라인만 검색해 주입하고(더 싸고 더 정확), 강한 모델에는 전체 세트를 넣되 프롬프트 캐싱으로 운영 비용을 눌러야 합니다. 메모리 설계는 '얼마나 넣을까'가 아니라 '이 모델에 맞는 투여량은 얼마인가'라는 질문에서 출발해야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/multi-vector-encoder\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Multi-Vector (Late Interaction) Embedding Models</a> — 필요한 지식을 정확히 골라 검색하는 임베딩 기법을 배경으로 보완합니다.</li><li><a href=\"https://huggingface.co/blog/state-of-open-models-summer-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Models Summer 2026</a> — 실무에서 실제로 쓰이는 모델은 작고 안정적이라는 관측과 맞닿아 있습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 연구가 'AI 엔지니어링의 성숙 신호'라고 봅니다. 컨텍스트를 무한정 늘려 밀어 넣던 시대에서, 모델의 소화 능력에 맞춰 지식을 처방하는 시대로 넘어가는 것입니다 — 좋은 에이전트는 많이 아는 게 아니라, 지금 필요한 만큼만 정확히 아는 에이전트입니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/ibm-research/altk-evolve-hmm",
    "tags": [
      "AI Agents",
      "Agent Memory",
      "LLM Engineering"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-18-own-the-right-things",
    "category": "design",
    "date": "2026-08-18",
    "title": "소유감은 '통제 가능한 것'에만 붙여라",
    "rawTitle": "Psychological Ownership: Own the Right Things",
    "summary": "심리적 소유감은 동기를 높이지만, 통제할 수 없는 산출물·결정에 붙으면 번아웃이 된다. NN/G는 '내 것'을 재배치하라고 조언한다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Evan Sunwall이 실무자들이 잘 인식하지 못하는 감정의 함정을 짚었습니다. 바로 '심리적 소유감(psychological ownership)' — 내 산출물, 역할, 프로젝트, 조직을 실제 소유 여부와 무관하게 '내 것'처럼 느끼는 애착입니다. 이 감정은 헌신과 성과를 끌어올리는 연료가 되지만, 정작 내가 통제할 수 없는 대상에 달라붙으면 방향을 잃고 좌절과 번아웃으로 되돌아옵니다.</p><blockquote>\"당신의 판단, 행동, 커리어 성장, 가치관, 경계, 그리고 관계를 소유하라.\"<cite>Evan Sunwall, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>디자이너는 특히 소유감을 '엉뚱한 곳'에 붙이기 쉽습니다. 여러 이해관계자가 함께 결정하는 디자인 산출물, 최종 채택 여부, 조직이 부여한 권한 같은 것들은 애초에 나 혼자 통제할 수 있는 대상이 아닙니다. 그런데 여기에 '내 것'이라는 감정을 강하게 실으면, 피드백은 공격처럼 느껴지고 협업은 영역 다툼이 됩니다. 통제할 수 없는 것을 통제하려는 시도가 만성적인 스트레스의 근원이 되는 것입니다.</p><h3>실무 적용</h3><p>해법은 소유감을 없애는 것이 아니라 '온전히 내가 통제하는 것'으로 재배치하는 것입니다. 특정 시안이 채택됐는지가 아니라 내 판단의 근거와 문제 해결 과정, 피드백에 반응하는 태도, 꾸준한 역량 개발, 지키는 원칙과 경계, 동료와의 신뢰 관계 — 이것들은 결과와 무관하게 언제나 내 몫입니다. 팀은 '이 결정은 우리 공동의 것, 이 성장은 내 것'이라는 경계를 명시적으로 나눌 때 더 건강하게 협업합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/videos/personal-growth/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Personal Growth in UX — 5 Signs</a> — 통제 가능한 '성장'에 소유감을 두는 관점을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/ux-career-advice/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: What a UX Career Looks Like Today</a> — 커리어 주도권을 스스로 쥐는 태도와 맞닿아 있습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 조언이 '프로다움의 정의'를 다시 짚어준다고 봅니다. 좋은 협업자는 자기 시안에 매달리는 사람이 아니라, 결과는 팀에 내어주고 자기 판단과 성장에는 끝까지 책임지는 사람입니다 — 소유감의 방향만 바꿔도 같은 열정이 번아웃 대신 신뢰를 만듭니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/psychological-ownership/",
    "tags": [
      "UX Careers",
      "Team Collaboration",
      "Design Leadership"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-18-openai-critical-cyber-capabilities",
    "category": "ai",
    "date": "2026-08-18",
    "title": "OpenAI, '크리티컬' 사이버 역량에 대응하다",
    "rawTitle": "Responding to the Next Frontier of Critical Cyber Capabilities",
    "summary": "곧 나올 모델 Astra의 예비 평가에서 '크리티컬' 사이버 역량을 배제할 수 없다고 판단, OpenAI가 상시 모니터링 등 선제 안전장치를 가동했다.",
    "bodyHtml": "<p>OpenAI가 자사 Preparedness Framework(대비 프레임워크)의 사이버보안 위험 등급이 새로운 국면에 접어들었다고 밝혔습니다. 곧 출시될 모델 'Astra'의 예비 평가에서 성능이 충분히 강력해, 현시점에서 최고 위험 등급인 '크리티컬(Critical)'을 배제할 수 없다는 결론에 이른 것입니다. 이는 특정 모델이 실제로 악용됐다는 사고 보고가 아니라, 역량 자체가 임계선에 근접했다는 선제적 위험 신고에 가깝습니다.</p><blockquote>\"예비 평가 결과가 충분히 강력해, 현시점에서 우리는 '크리티컬' 역량 수준을 배제할 수 없다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>OpenAI가 정의한 '크리티컬' 사이버 임계값은 구체적입니다 — 사람의 개입 없이 다수의 하드닝된 실제 핵심 시스템에서 모든 심각도의 제로데이 취약점을 스스로 식별·개발하거나, 높은 수준의 목표만 주어져도 하드닝된 표적을 상대로 새로운 종단간 공격 전략을 고안·실행할 수 있는 수준입니다. Astra는 아직 배포되지 않은 모델이며, 앞서 알려진 Hugging Face 침해 사건과는 무관하다고 OpenAI는 선을 그었습니다. 핵심은 '악용됐다'가 아니라 '악용될 능력의 문턱을 넘고 있다'는 점입니다.</p><h3>실무 적용</h3><p>OpenAI는 대응책으로 Astra의 모든 에이전트형 활용에 — 학습과 평가 단계까지 포함해 — 위험 행동과 오정렬을 감시하는 상시 모니터링을 도입했습니다. 모니터는 모델의 사고 흐름(Chain of Thought)을 평가해 고위험 활동을 감지하면 보안 대응을 발동해 검토·중단합니다. AI를 도입하는 조직에도 시사점이 분명합니다 — 에이전트에 실제 시스템 접근 권한을 줄수록, 결과물뿐 아니라 '추론 과정 자체'를 감사·차단하는 통제 계층이 필요해진다는 것입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/strengthening-cyber-resilience/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Strengthening Cyber Resilience as AI Capabilities Advance</a> — AI 역량 상승에 맞춘 방어 강화 흐름을 배경으로 보완합니다.</li><li><a href=\"https://openai.com/index/updating-our-preparedness-framework/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Our Updated Preparedness Framework</a> — 역량 등급과 임계값을 규정한 프레임워크 원문을 확인할 수 있습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 발표가 'AI 안전이 사후 대응에서 사전 예고로 이동한 신호'라고 봅니다. 사고가 터진 뒤 막는 것이 아니라, 능력이 위험선에 닿기 전에 스스로 등급을 상향하고 감시를 켜는 태도 — 능력 경쟁만큼이나 이 절제된 투명성이 신뢰의 진짜 척도가 됩니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/",
    "tags": [
      "AI Safety",
      "Cybersecurity",
      "Frontier Models"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-17-one-ai-output-not-evaluation",
    "category": "design",
    "date": "2026-08-17",
    "title": "AI 결과 하나는 '평가'가 아니다",
    "rawTitle": "One AI Output Is an Example, Not an Evaluation",
    "summary": "출력 하나가 그럴듯하다고 AI 기능을 채택하지 마라. NN/G는 다양한 입력·반복 실행·신뢰구간이 필요하다고 짚는다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Raluca Budiu가 팀들이 AI를 도입할 때 저지르는 가장 흔한 착각을 짚었습니다. 데모에서 나온 그럴듯한 결과물 하나를 보고 '이 도구는 쓸 만하다'고 판단하는 것입니다. 언어 모델은 토큰마다 확률을 매기는 비결정적 시스템이라, 같은 입력에도 실행할 때마다 다른 답을 내놓습니다. 성공한 출력 하나는 그 시스템이 '해낼 수 있다'는 가능성만 보여줄 뿐, 실제로 얼마나 자주·안정적으로 해내는지는 말해주지 않습니다.</p><blockquote>\"좋은 출력 하나는 시스템이 그 일을 할 수 있다는 것만 보여줄 뿐, 얼마나 자주 또는 얼마나 안정적으로 해내는지는 말해주지 않는다.\"<cite>Raluca Budiu, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>같은 성공률이라도 실패의 '양상'이 전혀 다를 수 있다는 점이 핵심입니다. 어떤 시스템은 특정 질문에서 늘 틀리는 '예측 가능한 실패'를 하고, 다른 시스템은 아무 질문에서나 가끔 틀리는 '산발적 실패'를 합니다. 두 경우의 대응 전략은 완전히 달라야 합니다. 그래서 제대로 된 평가는 난이도와 상황이 다른 여러 대표 입력을 쓰고, 같은 입력을 여러 번 반복 실행하며, 결과를 평균과 신뢰구간으로 요약하는 정량 UX 연구의 방법을 따라야 합니다.</p><h3>실무 적용</h3><p>제품팀은 '멋진 데모 한 번'을 채택 근거로 삼는 습관을 버려야 합니다. 쉬운 시나리오만 골라 테스트하면 실제 성능을 과대평가하게 되므로, 테스트 세트에는 복잡하고 까다로운 사례를 의도적으로 섞어야 합니다. 또한 '입력 종류에 따른 편차'와 '같은 입력의 실행 간 편차'라는 두 가지 변동성을 분리해 측정해야, 어디를 개선할지가 보입니다. AI 기능의 신뢰성은 인상이 아니라 반복 측정으로 증명하는 것입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026</a> — 정량적 깊이로 차별화하라는 올해 UX 흐름과 맞닿아 있습니다.</li><li><a href=\"https://www.nngroup.com/topic/ai/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: AI 주제 모음</a> — AI를 UX 관점에서 평가·설계하는 자료를 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI 도입의 진짜 실력이 '얼마나 좋은 출력을 뽑았나'가 아니라 '그 성능을 어떻게 증명했나'에서 갈린다고 봅니다. 화면에 띄운 결과 하나는 마케팅이지 근거가 아닙니다 — 반복 가능한 측정과 신뢰구간을 요구하는 팀만이 AI 위에 안심하고 제품을 올릴 수 있습니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/eval-ai-output/",
    "tags": [
      "AI Evaluation",
      "UX Research",
      "Quantitative UX"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-17-state-of-open-models-summer-2026",
    "category": "ai",
    "date": "2026-08-17",
    "title": "오픈 모델 지형도, 2026년 여름 관측",
    "rawTitle": "State of Open Models: Summer 2026 Observations",
    "summary": "허깅페이스 허브 모델이 296만 개로 늘었지만, 다운로드의 99.2%는 상위 1.5% 저장소에 몰렸다. 규모 경쟁과 실제 사용은 다르다.",
    "bodyHtml": "<p>Hugging Face가 2026년 1월부터 8월까지의 허브 데이터를 바탕으로 오픈 모델 생태계의 지형도를 정리했습니다. 공개 모델 저장소는 243만 개에서 296만 개로, 데이터셋은 71.1만 개에서 100만 개로, Spaces는 100만 개에서 144만 개로 불어났습니다. 겉으로는 폭발적 성장이지만, 그 이면의 분포는 훨씬 냉정합니다 — 다운로드는 극소수 저장소에 극단적으로 쏠려 있습니다.</p><blockquote>\"좋아요는 어떤 릴리스가 중요하다는 신호이고, 다운로드는 그것이 정기적으로 돌아가는 파이프라인에 실제로 연결됐다는 신호다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>숫자가 '규모 경쟁'과 '실제 사용'의 간극을 드러냅니다. 전체 모델의 85.6%는 누적 다운로드가 200회에도 못 미치고, 상위 1.5% 저장소가 전체 다운로드의 99.2%를 차지합니다. 프론티어 규모는 중국 랩이 주도해 거의 매달 미국 랩(대개 130B 미만)보다 큰 754B~2.78T급 모델을 냈지만, 정작 실무 다운로드의 83%는 1B 미만 소형 모델에서 나옵니다. Qwen 계열 파생 모델은 15만 개를 넘어 Meta의 2.6배에 달했습니다.</p><h3>실무 적용</h3><p>'가장 큰 모델'을 좇는 헤드라인과 '실제로 배포되는 모델'은 다릅니다. 양자화(llama.cpp 변환)로 조 단위 파라미터 모델까지 소비자 하드웨어에서 돌릴 수 있게 됐지만, 파이프라인에 실제로 꽂히는 것은 여전히 작고 안정적인 모델입니다. 또한 에이전트가 새로운 주 사용자로 부상해 7월 에이전트 트래픽의 44.4%를 Claude Code가 차지했다는 점은, 모델을 '사람이 아니라 자동화가 소비한다'는 전환을 시사합니다. 모델 선택은 벤치마크 크기가 아니라 배포 현실에 맞춰야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: One Year Since the DeepSeek Moment</a> — 중국 오픈 랩의 부상이라는 흐름을 배경으로 보완합니다.</li><li><a href=\"https://huggingface.co/blog/ResterChed/deepseek-v4-flash-official-release\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: DeepSeek V4 Flash Official Release</a> — 프론티어 규모를 주도하는 대표 사례를 함께 봅니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 데이터가 'AI 성숙도의 척도가 바뀌었다'는 증거라고 봅니다. 모델 개수와 파라미터 크기는 더 이상 승부처가 아닙니다 — 진짜 신호는 다운로드, 즉 무엇이 매일 돌아가는 파이프라인에 실제로 연결됐는가입니다. 화려한 릴리스보다 조용히 반복 사용되는 작은 모델이 생태계를 떠받칩니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/state-of-open-models-summer-2026",
    "tags": [
      "Open Models",
      "AI Ecosystem",
      "Hugging Face"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-14-eu-ai-labelling-rules",
    "category": "design",
    "date": "2026-08-14",
    "title": "'AI 스파클'로는 부족하다, EU 라벨링 규칙",
    "rawTitle": "New EU Guidelines For AI Labelling",
    "summary": "8월 2일 발효된 EU AI법 50조는 딥페이크·챗봇·AI 생성 콘텐츠에 '명확하고 구분되는' 라벨을 의무화한다. 반짝이 아이콘 하나론 안 된다.",
    "bodyHtml": "<p>Smashing Magazine의 Vitaly Friedman이 8월 2일 발효된 EU AI법 제50조의 투명성 조항을 실무자 눈높이로 정리했습니다. '막대한 벌금'과 '전면적 AI 규제'라는 공포가 돌았지만, 실제 내용은 훨씬 좁고 상식적입니다 — 딥페이크, 사람과 대화하는 것처럼 보이는 챗봇·AI 에이전트, 사람 편집 없이 공적 사안에 쓰인 AI 작성 텍스트, 감정 인식 도구에 한해 '이건 AI'라고 밝히라는 것입니다. 규칙은 위치와 무관하게 EU 시민을 상대하는 모든 서비스에 적용됩니다.</p><blockquote>\"AI 콘텐츠가 사람이 만든 것으로 오인될 수 있다면, 제작자는 명확하고 분명하며 모호하지 않은 방식으로 그 사실을 밝혀야 한다.\"<cite>Vitaly Friedman, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>핵심은 그동안 관행처럼 쓰던 ✨ 스파클 아이콘이 규정을 충족하지 못한다는 점입니다. 반짝이는 대개 'AI 기능이 있다'는 신호일 뿐, '이 콘텐츠가 AI로 생성됐다'는 구체적 고지가 아니기 때문입니다. EU는 라벨이 '명확하고 구분 가능'해야 한다고 못 박으며, 아이콘을 'AI 생성'처럼 사람이 읽을 수 있는 평문과 함께 쓰라고 요구합니다. 반대로 이름이 명시된 편집자가 실질적으로 검토·수정한 콘텐츠, 맞춤법·번역 같은 보조적 편집, 닫힌 B2B 환경은 표기 의무에서 빠집니다.</p><h3>실무 적용</h3><p>제품팀은 먼저 '어떤 콘텐츠가 고지 대상이고 어떤 것이 편집 예외인지' 감사해야 합니다. 라벨은 리셰어·다운로드 후에도 살아남도록 지속적이고 눈에 보이게 심어야 하며, 콘텐츠가 노출되는 모든 접점에서 일관돼야 합니다. AI 제공자와 배포자 양쪽이 법적 책임을 지므로, 디자인 시스템 차원에서 공식 라벨 컴포넌트와 접근성 있는 텍스트 대체를 표준화해 두는 편이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://artificialintelligenceact.eu/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">The EU Artificial Intelligence Act</a> — 제50조 투명성 의무의 원문 조항을 직접 확인할 수 있습니다.</li><li><a href=\"https://www.nngroup.com/articles/crafting-ai-explanations/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Crafting AI Explanations</a> — AI를 사용자에게 어떻게 설명·고지할지의 UX 원칙을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이번 규칙을 '규제 부담'이 아니라 '신뢰 설계'의 계기로 봅니다. AI 라벨은 감추면 리스크지만, 명확히 드러내면 오히려 브랜드 정직성의 신호가 됩니다 — 반짝이 대신 평문 고지를 기본값으로 삼는 팀이 규제와 사용자 신뢰를 동시에 얻습니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/08/eu-guidelines-ai-labelling/",
    "tags": [
      "AI Regulation",
      "Content Labeling",
      "UX Trust"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-14-icml-reproduce-2200-papers",
    "category": "ai",
    "date": "2026-08-14",
    "title": "AI 에이전트로 ICML 논문 2,200편 재현하기",
    "rawTitle": "What We Learned by Reproducing 2,200 papers from ICML",
    "summary": "허깅페이스 커뮤니티가 AI 코딩 에이전트로 ICML 2026 논문 2,226편을 검증—51%는 주장 하나 이상을 확인했고 23%는 오류·반박이 드러났다.",
    "bodyHtml": "<p>Hugging Face가 커뮤니티 해커톤(7월 15일~8월 2일)에서 AI 코딩 에이전트로 ICML 2026 채택 논문의 재현성을 대규모로 검증한 결과를 공개했습니다. 참가자 1,221명이 학회 채택작 6,352편의 약 3분의 1인 2,226편을 다뤄, 6,816개의 재현 로그북과 35,908개의 판정된 주장(claim)을 만들어냈습니다. '리뷰어 한 명이 주말을 다 써야 하던 검증'을 에이전트가 병렬로, 수천 번 시도한 셈입니다.</p><blockquote>\"논문을 꼼꼼히 검증하는 데 예전엔 리뷰어의 주말이 통째로 들었지만, 에이전트는 오후 한나절에, 병렬로, 수천 번을 시도할 수 있다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>숫자가 재현성의 민낯을 보여줍니다. 검증된 논문의 51%는 주장 하나 이상이 확인됐고 266편은 완전히 재현됐지만, 23%에서는 반박되거나 다툼의 여지가 있는 주장이 나왔습니다. 49편은 모든 주장이 반증됐고, 242편은 독립적으로 작업한 팀들 사이에서 상반된 판정이 나왔습니다. 잘못된 수학 증명, 이론과 구현 사이의 손실 함수 불일치, 패딩 토큰으로 부풀려진 평가 지표 같은 확인된 오류도 드러났고, 일부는 저자가 인정해 arXiv 정정으로 이어졌습니다.</p><h3>실무 적용</h3><p>에이전트만으로는 한계가 분명했다는 점이 중요합니다. 국소적 루프나 규모에 따라 달라지는 동작 앞에서 자동 재현은 벽에 부딪혔고, 사람의 감독이 필수였습니다. AI로 연구·코드를 검증하려는 팀이라면 '에이전트가 초벌 재현을 대량으로 돌리고, 사람이 상충하는 판정과 미묘한 실패를 가려내는' 이중 구조가 현실적입니다. 판정이 팀마다 갈릴 수 있으므로 독립 재현과 상호 대조는 선택이 아니라 기본값으로 두어야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://icml.cc/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">ICML — International Conference on Machine Learning</a> — 재현 대상이 된 학회의 공식 사이트입니다.</li><li><a href=\"https://huggingface.co/blog/nielsr/paperswithcode-launch\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Relaunching PapersWithCode</a> — 코드·결과 추적으로 재현성을 높이려는 흐름을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이 실험이 '연구 신뢰의 비용 구조'를 바꾼다고 봅니다. 검증이 값싸지면 발표된 수치를 그대로 믿는 문화도 흔들립니다 — AI가 재현을 대량으로 대신하는 시대에, 진짜 실력은 '무엇을 만들었나'가 아니라 '그 주장이 재현되는가'로 판가름납니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/icml-2026-open-reproductions",
    "tags": [
      "AI Agents",
      "Reproducibility",
      "AI Research"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-12-lottie-tactile-ux",
    "category": "design",
    "date": "2026-08-12",
    "title": "물리 엔진 대신 Lottie, 의도된 촉각 UX",
    "rawTitle": "Building Tactile UX: Honoring Intentional Design With Lottie",
    "summary": "물리 시뮬레이션은 애니메이터의 의도를 흩뜨린다. Lottie의 결정론적 타임라인으로 프레임 단위 연출을 지키며 촉각적 경험을 만든 사례.",
    "bodyHtml": "<p>Smashing Magazine의 Alexey Kopytin이 인터랙티브 웹 경험을 만들 때 '물리 엔진'을 버리고 Lottie를 택한 이유를 풀어놨습니다. 애니메이터가 181프레임짜리 '메가 스퀴즈' 같은 시퀀스를 프레임 단위로 정교하게 만들어 놓았는데, 물리 시뮬레이션은 그 의도를 매번 다르게 흩뜨려 버린다는 것이 출발점입니다. 해법은 결과를 '시뮬레이션'하지 않고 정확히 만든 애니메이션을 '재생'하는 것이었습니다.</p><blockquote>\"Lottie의 네이티브 타임라인 기능을 DOM에 매핑하면, 아트 디렉션을 완벽히 통제하면서도 대단히 풍부한 촉각적 사용자 경험을 전달할 수 있다.\"<cite>Alexey Kopytin, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>핵심은 '알고리즘적 모션'이 아니라 '의도된 모션'입니다. 클릭 좌표를 캐릭터 중심 기준으로 피타고라스 정리로 환산해 동심원 점수 구역을 만들고, 폭발 애니메이션이 정확히 클릭한 자리에서 튀어나오게 합니다. 캐릭터는 자유 변형 대신 idle·squeeze1·squeeze2·squeeze3처럼 정의된 프레임 구간을 순환하며 내러티브 통제를 유지합니다. 무작위로 흔들리는 물리보다, 손끝에 닿는 반응이 '설계된 대로' 돌아올 때 사용자는 더 정교한 촉감을 느낍니다.</p><h3>실무 적용</h3><p>모든 인터랙션에 물리 엔진을 얹는 것이 능사가 아닙니다. 정해진 연출을 정확히 재생해야 하는 마이크로 인터랙션이라면 Lottie 타임라인을 코드로 트리거하는 편이 예측 가능하고 가볍습니다. 성능도 설계 대상입니다 — 순차 에셋 로딩, 진열 상태에선 품질 50%·집중 플레이 땐 100%로 동적 조절, 공격적인 메모리 관리로 모바일에서도 부드러움을 지켰습니다. '리치함'과 '통제'는 트레이드오프가 아니라 함께 설계할 대상입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/animation-purpose-ux/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Role of Animation and Motion in UX</a> — 모션은 절제된 피드백일 때 가장 강하다는 원칙을 함께 봅니다.</li><li><a href=\"https://lottiefiles.com/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">LottieFiles</a> — Lottie 포맷과 웹 재생 도구의 공식 생태계를 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 좋은 모션이 '더 사실적인가'가 아니라 '얼마나 의도대로 전달되는가'로 갈린다고 봅니다. 물리 엔진의 자유도는 화려하지만, 브랜드의 손끝 감각은 프레임 단위로 다듬은 연출에서 나옵니다 — 통제할 수 있는 도구를 고르는 것 자체가 디자인 결정입니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/08/building-tactile-ux-honoring-intentional-design-lottie/",
    "tags": [
      "Motion Design",
      "Lottie",
      "Interaction Design"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-12-altk-evolve-fewer-tokens",
    "category": "ai",
    "date": "2026-08-12",
    "title": "'플레이북' 다 넣지 마라, 토큰 7분의 1로",
    "rawTitle": "Thinking of ACE? We Can Do It with Fewer Tokens",
    "summary": "IBM 리서치의 ALTK-Evolve는 ACE처럼 경험을 요약하지 않되, 모델이 실제 쓸 만큼만 골라 넣어 최대 7분의 1 토큰으로 동급 정확도를 낸다.",
    "bodyHtml": "<p>Hugging Face 블로그에서 IBM Research가 에이전트 학습법 'ALTK-Evolve'를 공개하며, 스탠퍼드·SambaNova의 화제작 ACE(Agentic Context Engineering)와 정면 비교했습니다. 두 방법 모두 에이전트가 자신의 실패에서 얻은 교훈을 '플레이북(playbook)'으로 쌓되, 그것을 뭉뚱그린 요약으로 압축하지 않는다는 철학은 같습니다. 갈리는 지점은 '언제 얼마나 꺼내 쓰느냐'입니다.</p><blockquote>\"ACE는 매 단계 플레이북 전체를 보내지만, 우리는 주어진 모델이 실제로 쓸 수 있는 만큼만 보낸다.\"<cite>IBM Research, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>수치가 방법의 차이를 증명합니다. ACE는 매 스텝마다 플레이북 전체를 주입하는 반면, ALTK-Evolve는 과제와 모델 용량에 맞춰 가이드라인을 '선택적으로' 검색해 넣습니다. DeepSeek-V3.2에서 ALTK-Evolve는 과제당 26.3만 토큰으로 목표 달성률 89.3%를 냈는데, 이는 ACE(63.4만 토큰, 80.4%)의 40% 비용으로 더 높은 정확도입니다. gpt-oss-120b에서는 정확도를 비등하게(56.0% 대 54.8%) 유지하면서 토큰은 약 7분의 1(11.6만 대 77.7만)로 줄였습니다.</p><h3>실무 적용</h3><p>에이전트 메모리를 '전부 문맥에 붓는' 설계는 비용과 지연을 폭증시킵니다. 학습된 경험은 요약해 뭉개지 말되, 매 스텝 통째로 밀어넣는 대신 '지금 이 과제·이 모델에 필요한 조각만' 검색해 주입하는 것이 현실적입니다. 문맥창이 길어질수록 관련 없는 가이드라인은 노이즈가 되므로, 선택적 검색은 비용 절감을 넘어 정확도에도 유리할 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://arxiv.org/abs/2510.04618\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">arXiv: Agentic Context Engineering — Evolving Contexts for Self-Improving Language Models</a> — 비교 기준이 된 ACE 원 논문을 함께 봅니다.</li><li><a href=\"https://venturebeat.com/ai/ace-prevents-context-collapse-with-evolving-playbooks-for-self-improving-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">VentureBeat: ACE prevents context collapse with evolving playbooks</a> — 플레이북 방식이 왜 주목받았는지 맥락을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 에이전트 경쟁의 승부가 '무엇을 아느냐'에서 '필요한 것만 언제 꺼내느냐'로 옮겨간다고 봅니다. 모든 지식을 매번 문맥에 쏟아붓는 것은 값비싼 낭비입니다 — 요약으로 뭉개지도, 통째로 밀어넣지도 않는 '선택적 주입'이야말로 실전 에이전트의 절제된 실력입니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/ibm-research/altk-evolve-sldd",
    "tags": [
      "AI Agents",
      "Context Engineering",
      "Efficient AI"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-11-ux-theatre",
    "category": "design",
    "date": "2026-08-11",
    "title": "'UX 연극'을 멈춰라: 흉내만 낸 리서치의 함정",
    "rawTitle": "How to Avoid Doing UX Theatre",
    "summary": "리서치 프레임워크를 겉으로만 흉내 내고 임팩트는 없는 'UX 연극'. NN/G는 그 다섯 가지 원인을 짚는다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Therese Fessenden이 'UX 연극(UX Theatre)'이라는 개념을 꺼냈습니다. 인터뷰를 하고 여정 지도를 그리고 페르소나를 만드는 등 UX의 '동작'은 다 하지만, 정작 제품을 바꾸는 임팩트로는 이어지지 않는 겉치레 리서치를 가리킵니다. 바쁘게 움직였는데 아무것도 달라지지 않았다면 의심해 볼 신호입니다.</p><blockquote>\"UX 연극은 임팩트를 내지 못한 채 UX 프레임워크를 겉으로만 흉내 내는 행위다.\"<cite>Therese Fessenden, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>Fessenden은 UX 연극이 벌어지는 다섯 가지 원인을 짚습니다 — 불분명한 목표, 신뢰할 수 없는 방법, 빈약한 근거, 인사이트를 실제로 반영하지 않음, 그리고 테스트 자체를 건너뜀. 문제는 이 활동들이 '리서치를 했다'는 안도감을 준다는 데 있습니다. 산출물은 쌓이지만 의사결정은 여전히 직감으로 내려지고, 조직은 리서치가 값어치가 없다는 잘못된 결론에 이르기 쉽습니다.</p><h3>실무 적용</h3><p>모든 리서치 활동 앞에 한 문장을 붙이세요 — '이 결과로 어떤 결정을 바꿀 것인가?' 답이 없다면 그 활동은 연극일 가능성이 큽니다. 목표를 먼저 못 박고, 표본과 방법이 그 질문에 답할 만큼 튼튼한지 점검하고, 나온 인사이트가 실제 백로그와 디자인에 반영되는 경로까지 미리 설계해야 합니다. 예쁜 산출물이 아니라 '바뀐 결정'이 리서치의 진짜 결과물입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/dogfooding/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Dogfooding vs. QA vs. User Research</a> — 내부 사용을 리서치로 착각하는 또 다른 함정을 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/prove-framework/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: How to Decide When an AI Tool Is Worth Keeping</a> — 활동이 아니라 증거로 결정을 내리는 평가 틀을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 리서치의 성패가 '얼마나 했느냐'가 아니라 '무엇을 바꿨느냐'로 갈린다고 봅니다. 바쁨은 임팩트가 아닙니다 — 결정을 바꾸지 못하는 리서치는 조직의 시간을 태우는 무대 장치일 뿐입니다. 처음부터 '이 결과가 바꿀 결정'을 정해 두는 팀만이 연극에서 벗어납니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/videos/how-to-avoid-doing-ux-theatre/",
    "tags": [
      "UX Research",
      "Research Ops",
      "UX Strategy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-11-muse-glimmer-local",
    "category": "ai",
    "date": "2026-08-11",
    "title": "메타의 Muse Glimmer: 30B로 줄인 온디바이스 멀티모달",
    "rawTitle": "Meta is back with Muse Glimmer: local, agentic, multimodal, and open source",
    "summary": "메타가 대형 Muse를 300억 파라미터로 증류해 Apache 2.0으로 공개했다. 로컬에서 돌리는 에이전트형 멀티모달 모델이다.",
    "bodyHtml": "<p>Hugging Face 블로그에서 메타가 'Muse Glimmer'를 공개했습니다. 더 큰 Muse 모델을 300억(30B) 파라미터로 증류(distill)해, 텍스트·이미지·영상을 다루면서도 개인 기기에서 돌릴 만큼 가볍게 만든 오픈 모델입니다. 라이선스는 상업적으로 자유로운 Apache 2.0이고, 공개 첫날부터 transformers·llama.cpp·vLLM을 지원합니다.</p><blockquote>\"Muse를 300억 파라미터로 증류하고 Apache 2.0으로 공개한 이 모델은, 프라이버시를 위한 로컬 배포·비용 절감·그리고 그냥 이것저것 만져보기에 안성맞춤이다.\"<cite>Hugging Face Blog</cite></blockquote><h3>왜 중요한가</h3><p>구성을 보면 방향이 읽힙니다 — 20억 파라미터 비전 인코더와 280억 텍스트 디코더를 결합한 52층 하이브리드 어텐션 구조로, 슬라이딩 윈도와 전역 어텐션을 섞고 게이티드 GQA로 KV 캐시를 16분의 1로 줄였습니다. 128K 토큰까지 문맥을 받고, 선택적 DFlash 스펙큘러티브 디코딩으로 생성 속도를 높입니다. 즉 '작지만 도구를 부리고, 로컬에서 도는' 에이전트형 모델을 정조준한 설계입니다.</p><h3>실무 적용</h3><p>모든 걸 클라우드 대형 모델에 맡기는 대신, 프라이버시가 중요하거나 지연·비용이 부담인 워크로드를 온디바이스로 내리는 선택지가 넓어집니다. Apache 2.0에 멀티 백엔드 day-0 지원이라 프로토타이핑 진입 장벽이 낮고, 도구 호출에 최적화돼 있어 로컬 에이전트·문서/이미지 처리 파이프라인의 1차 후보로 실험해 볼 만합니다. 다만 30B는 여전히 상당한 메모리를 요구하므로 양자화·타깃 기기 검증은 필수입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Deploy local agents everywhere with LFM2.5-2.6B</a> — 더 작은 몸집으로 로컬 에이전트를 노리는 다른 접근을 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Making Knowledge Distillation Cheap Enough to Run at Scale</a> — 대형 모델을 값싸게 증류하는 최신 흐름을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI 경쟁의 다음 무대가 '가장 큰 모델'이 아니라 '내 기기에서 도는 충분히 좋은 모델'이라고 봅니다. 프라이버시·비용·지연이 진짜 제품 제약이 되는 순간, 클라우드에 종속되지 않는 오픈·로컬 멀티모달은 강력한 무기입니다 — 증류로 몸집을 줄인 Muse Glimmer는 그 흐름을 상징합니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/muse-glimmer",
    "tags": [
      "Multimodal AI",
      "On-Device AI",
      "Open Source"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-10-dogfooding-vs-user-research",
    "category": "design",
    "date": "2026-08-10",
    "title": "도그푸딩은 유저 리서치가 아니다",
    "rawTitle": "Dogfooding vs. QA vs. User Research",
    "summary": "자사 제품을 직접 써보는 도그푸딩은 버그를 잡아내지만, '지식의 저주' 탓에 진짜 사용자를 대신할 수는 없다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Therese Fessenden이 자주 뒤엉키는 세 가지 검증 방법 — 도그푸딩(dogfooding), QA 테스트, 사용자 리서치 — 의 역할을 또렷하게 갈라놓았습니다. 팀이 자사 제품을 직접 써보는 도그푸딩은 유용하지만, 그것을 '사용자 리서치를 했다'로 착각하는 순간 진짜 사용자의 목소리는 사라진다는 것이 핵심입니다.</p><blockquote>\"무언가가 어떻게 작동하는지 일단 알고 나면, 모르는 상태를 신뢰성 있게 흉내 낼 수 없다.\"<cite>Therese Fessenden, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>세 방법은 묻는 질문이 다릅니다. 도그푸딩은 '반쯤 현실적인' 맥락에서 버그·깨진 플로·명백한 공백을 잡아내고, 특히 결과가 확률적으로 흔들리는 AI 기능을 반복 사용하며 감을 잡는 데 강합니다. QA는 '의도대로 동작하고 신뢰할 수 있는가'를 체계적으로 검증하되 사용자가 즐거운지는 따지지 않습니다. 사용자 리서치만이 '실제 사용자가 이걸로 목표를 이룰 수 있는가'를 답합니다. 문제는 '지식의 저주' — 만드는 사람은 너무 많이 알아서 초심자의 혼란을 재현하지 못한다는 점입니다.</p><h3>실무 적용</h3><p>어떤 피드백 활동이든 시작 전에 한 문장을 물으세요 — '지금 우리가 얻는 건 누구의 관점이고, 그게 우리에게 필요한 관점인가?' 도그푸딩은 리서치를 대체하는 게 아니라 보완합니다. AI 기능처럼 동작이 매번 달라지는 제품이라면 내부 사용으로 이상 징후를 넓게 훑되, 진짜 사용자로 목표 달성 여부를 반드시 별도로 검증해야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/human-led-research-still-matters/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Don't Outsource the Learning — Why Human-Led Research Still Matters in the Age of AI</a> — 사람이 직접 배우는 리서치가 왜 여전히 중요한지 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/prove-framework/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: How to Decide When an AI Tool Is Worth Keeping</a> — 내부에서 써본 결과를 증거로 바꾸는 평가 틀을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 '우리가 써보니 괜찮더라'가 가장 흔하고 위험한 리서치 착각이라고 봅니다. 만든 사람의 편안함은 사용자의 편안함이 아닙니다 — 도그푸딩으로 버그를 잡고, QA로 신뢰성을 지키되, '되는가'의 최종 판정만은 반드시 바깥의 진짜 사용자에게 맡겨야 합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/dogfooding/",
    "tags": [
      "Dogfooding",
      "User Research",
      "UX Process"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-10-tutormoments-ai-tutors",
    "category": "ai",
    "date": "2026-08-10",
    "title": "AI 튜터는 '언제 안 도와줄지'를 모른다",
    "rawTitle": "TutorMoments: Do AI tutors know when to help and when to hold back?",
    "summary": "Ai2의 평가 틀 TutorMoments는 AI가 학생을 과도하게 도와 스스로 사고할 기회를 빼앗는 경향을 드러낸다.",
    "bodyHtml": "<p>Allen Institute for AI(Ai2)가 Hugging Face 블로그에서 AI 튜터의 미묘한 실패를 재는 평가 틀 'TutorMoments'를 공개했습니다. 좋은 가르침은 '도와주기'와 '스스로 하게 두기' 사이의 긴장에 있는데, LLM이 이 균형을 잡을 줄 아는지를 실제 수업 기록으로 되짚어 측정한 것이 핵심입니다.</p><blockquote>\"곧바로 도움을 내주는 것은 학생에게서 배움을 만드는 지적 노동을 빼앗는 일이다.\"<cite>Allen Institute for AI, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>수치가 방법을 말해 줍니다. TutorMoments는 초등~중1(2~7학년) 실제 1:1 수학 튜터링 기록 462건과 교사가 표시한 1,500개 이상의 '결정적 순간'(스캐폴딩 738개, 엄격히 밀어붙이기 260개)을 토대로 합니다. 대화를 그 순간에서 멈추고 LLM이 튜터를 이어받아 다섯 턴을 진행하게 한 뒤, 적절한 도움·적절한 밀어붙이기·과잉 도움 회피 세 축으로 채점합니다. 결과는 분명했습니다 — 모델들은 학생을 지나치게 떠먹여 스스로 추론할 기회를 빼앗는 쪽으로 기울었고, 여전히 인간 튜터에 못 미쳤습니다.</p><h3>실무 적용</h3><p>흥미로운 단서는 '평가를 의식하게 하는 프롬프트'를 주면 모든 모델의 점수가 올랐다는 점입니다. 즉 '언제 참을지'는 가르칠 수 있는 행동입니다. 교육용 AI만의 얘기가 아닙니다 — 코딩 어시스턴트나 업무 보조도 답을 즉시 다 주는 것이 늘 최선은 아니며, 때로는 '도움을 아끼는 것'이 곧 기능입니다. 어시스턴트를 설계한다면 '과잉 도움'을 하나의 실패 지표로 측정해 볼 만합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/real-world-voiceeq\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Introducing Real World VoiceEQ — Measuring the Human Quality of Voice AI</a> — AI의 '사람다운 질'을 정량화하려는 다른 시도를 함께 봅니다.</li><li><a href=\"https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: How Enabling Two Settings Tripled Our ARC-AGI-3 Scores</a> — 설정·프롬프트가 벤치마크 점수를 좌우하는 현상을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 유능한 AI일수록 '무엇을 해줄까'만큼 '무엇을 참을까'가 중요해진다고 봅니다. 학습이든 업무든 사람의 성장은 스스로 씨름하는 순간에 일어납니다 — 답을 다 떠먹이는 조력자는 친절해 보여도 실은 성장을 가로막습니다. 절제할 줄 아는 AI가 결국 더 좋은 AI입니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/allenai/tutormoments",
    "tags": [
      "AI in Education",
      "LLM Evaluation",
      "Tutoring"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-09-baseline-ship-less-javascript",
    "category": "design",
    "date": "2026-08-09",
    "title": "브라우저가 다 한다, Baseline으로 짐 덜기",
    "rawTitle": "How Baseline Can Help You Ship Less JavaScript",
    "summary": "무심코 쌓인 npm 의존성 상당수는 이제 브라우저 네이티브 기능으로 대체된다. Baseline 기준으로 감사하면 60~90KB를 걷어낼 수 있다.",
    "bodyHtml": "<p>Smashing Magazine의 Jad Joubran이 '무심코 쌓인 npm 의존성'을 다시 들여다보자고 제안했습니다. 한때 라이브러리 없이는 어려웠던 기능들이 지금은 대부분 브라우저에 네이티브로 들어와 있어서, 웹 표준의 브라우저 지원 현황을 정리한 'Baseline'을 기준으로 의존성을 감사하면 기능 손실 없이 60~90KB(gzip)를 걷어낼 수 있다는 것입니다.</p><blockquote>\"'이건 라이브러리가 필요해'와 '브라우저가 알아서 한다' 사이의 간극은 계속 좁혀지고 있다.\"<cite>Jad Joubran, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>Baseline은 WebDX 커뮤니티 그룹이 웹 기능을 '제한적 지원 → 새로 안정화(Newly available) → 널리 안정화(Widely available, 30개월 이상)'로 분류해, 폴리필 없이 써도 되는지를 한눈에 알려주는 신호등입니다. 번들이 커질수록 내려받기·파싱 비용이 쌓이는데, '이 기능은 이제 모든 엔진에 있다'는 근거가 명확해지면 감으로 미루던 의존성 제거를 자신 있게 결정할 수 있습니다.</p><h3>실무 적용</h3><p>저자는 구체적 교체 목록을 제시합니다 — 국제화는 timeago·numeral 대신 Intl 계열(RelativeTimeFormat·NumberFormat·DurationFormat)로 약 14KB, HTTP는 axios 대신 fetch+AbortSignal.timeout()으로 약 17KB, 모달·툴팁 같은 UI는 &lt;dialog&gt;·Popover API로 약 24KB, lodash.clonedeep은 structuredClone()으로 절감할 수 있습니다. 다만 무조건 걷어내면 안 됩니다 — fetch는 인터셉터·자동 재시도가 없고, 새 Temporal API는 아직 Safari 미지원이라 44KB 폴리필이 붙어 오히려 dayjs보다 무거워지므로 Baseline 진입을 기다리는 편이 낫습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://web.dev/baseline\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">web.dev: Baseline</a> — 브라우저 지원 현황을 명료하게 정리하는 Baseline의 공식 설명을 함께 봅니다.</li><li><a href=\"https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MDN: Baseline (compatibility)</a> — 개별 기능이 '널리/새로' 안정화됐는지 확인하는 기준을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 '무엇을 더 넣을까'보다 '무엇을 이제 뺄 수 있나'를 묻는 감사가 성능의 진짜 지렛대라고 봅니다. 라이브러리는 한번 들이면 관성으로 남지만, 플랫폼은 조용히 앞서갑니다 — Baseline은 그 격차를 근거 있게 좁혀, 더 가벼운 웹을 자신 있게 배포하게 해줍니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/08/how-baseline-can-help-ship-less-javascript/",
    "tags": [
      "Baseline",
      "Web Performance",
      "JavaScript"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-09-lattice-static-retriever",
    "category": "ai",
    "date": "2026-08-09",
    "title": "8MB 검색 모델, 위키피디아 7분에 임베딩",
    "rawTitle": "Lattice: an 8 MB static retriever that embeds Wikipedia in 7 minutes",
    "summary": "트랜스포머 대신 정적 임베딩으로 8MB도 안 되는 검색 모델을 만들었다. 위키피디아 640만 문서를 7분 26초에 임베딩한다.",
    "bodyHtml": "<p>Hugging Face 블로그에서 Erik Kaunismäki가 '정적 임베딩(static embedding)' 검색 모델 'Lattice'를 공개했습니다. 트랜스포머의 문맥 이해를 포기하는 대신 토큰화 → 어휘 조회 → 평균 풀링이라는 단순한 세 단계로만 동작하는데, 놀랍게도 8MB도 안 되는 크기로 실용적인 검색 성능을 낸다는 것이 핵심입니다.</p><blockquote>\"이 시스템은 강력한 트랜스포머 검색기를 대체하지 않는다 — 거의 어디에나 실을 수 있는, 작고 매우 빠른 1차 검색 모델이다.\"<cite>Erik Kaunismäki, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>수치가 흐름을 말해 줍니다. int4 양자화로 약 7.94MB까지 줄인 모델이 애플 M2 맥북에어에서 초당 950만 토큰을 처리하며, 영어 위키피디아 640만 문서 전체를 7분 26초 만에 임베딩합니다. 성능도 장난이 아닙니다 — 오염을 걸러낸 BEIR 벤치마크에서 하드 네거티브 미세조정 후 NDCG@10 0.4749를 기록했는데, 이는 참조 모델의 8배인 6.6억 쌍으로 학습해 얻은 결과입니다. '정적 모델은 현대 학습 기법의 이득을 못 본다'는 통념을 데이터 규모로 뒤집은 셈입니다.</p><h3>실무 적용</h3><p>검색·RAG를 붙일 때 무조건 무거운 트랜스포머 임베더부터 떠올리지 마세요. Lattice 같은 정적 모델을 1차 후보 선별(first-stage retrieval)에 두어 값싸고 빠르게 후보를 좁힌 뒤, 정말 정밀도가 필요한 구간에서만 강력한 리랭커를 호출하는 2단 구조가 비용·지연 측면에서 합리적입니다. 어텐션이 없어 CPU·엣지·브라우저 어디서든 돌릴 수 있다는 점도 온디바이스 검색에 매력적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/jinaai/jina-reranker-v3-5-faster-listwise-reranking\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: jina-reranker-v3.5 — Faster Listwise Reranking</a> — 1차 검색 뒤에 붙는 리랭킹 단계의 최신 흐름을 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/lightonai/mdenseon-mlateon\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: mDenseOn with the mLateOn — Open Multilingual Retrieval Models</a> — 다국어·긴 문맥 검색 모델이라는 다른 축의 접근을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI 인프라의 승부가 '가장 똑똑한 모델'이 아니라 '적재적소의 모델 조합'에서 갈린다고 봅니다. 8MB 모델이 위키피디아를 몇 분에 삼키는 시대라면, 모든 걸 대형 모델에 맡기는 설계는 낭비입니다 — 값싼 1차 검색과 정밀 리랭킹을 나눠 쓰는 절제된 파이프라인이 진짜 실력입니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/erikkaum/lattice-blog",
    "tags": [
      "Embeddings",
      "Retrieval",
      "Efficient AI"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-08-prove-framework-ai-tools",
    "category": "design",
    "date": "2026-08-08",
    "title": "AI 도구, 계속 쓸지 'PROVE'로 판단하라",
    "rawTitle": "How to Decide When an AI Tool Is Worth Keeping",
    "summary": "'AI를 쓰라'는 압박은 증거가 아니다. NN/G는 도구 하나를 업무 하나에 맞대어 재는 경량 평가 틀 'PROVE'를 제안한다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Caleb Sponheim이 'AI 도구를 계속 쓸지'를 감이 아니라 증거로 판단하는 경량 평가 틀 'PROVE'를 제안했습니다. 조직이 'AI를 쓰라'고 밀어붙일수록, 정작 그 도구가 특정 업무를 실제로 개선하는지는 검증되지 않은 채 도입되기 쉽다는 문제의식에서 출발합니다.</p><blockquote>\"AI를 써야 한다는 압박은 실재하지만, 압박은 증거가 아니다.\"<cite>Caleb Sponheim, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>PROVE는 다섯 축 — 문제 적합성(Problem Alignment), 위험(Risk), 산출물 품질(Output Quality), 속도(Velocity), 경험(Experience) — 으로 도구 하나를 업무 하나에 맞대어 봅니다. 핵심은 '생성에 걸린 시간'이 아니라 검수·재작업까지 포함한 '총 소요 시간'을 재고, 데이터 취급의 책임성까지 함께 따진다는 점입니다. AI 열풍 속에서도 나중에 방어할 수 있는 '잠정 결론'을 내리게 해주는 장치인 셈입니다.</p><h3>실무 적용</h3><p>저자는 구글 Gemini Notebooks로 주간 리서치 다이제스트를 초안하는 실제 사례에 PROVE를 적용해, 품질 향상과 시간 절감이 확인되자 워크플로가 다소 쪼개지는 단점에도 '한 달 시범 사용'을 권했습니다. 팀에 새 AI 도구를 들일 때 전면 도입/전면 거부의 이분법 대신, '하나의 도구 × 하나의 업무 × 한 달 시범'으로 범위를 좁혀 증거를 모으는 방식이 현실적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/dogfooding/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Dogfooding vs. QA vs. User Research</a> — 내부 사용(도그푸딩)이 사용자 리서치를 대체할 수 없는 이유를 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026 — Design Deeper to Differentiate</a> — AI 시대 UX 실무의 큰 흐름을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 'AI를 쓰느냐'가 아니라 '이 업무에서 이 도구가 값을 하느냐'가 유일하게 중요한 질문이라고 봅니다. 유행이나 상부의 압박이 아니라, 좁게 재고 짧게 시범한 증거로 결정할 때 도구는 비로소 부담이 아닌 자산이 됩니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/prove-framework/",
    "tags": [
      "AI Tools",
      "UX Process",
      "Decision Framework"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-08-openai-astra-math-proofs",
    "category": "ai",
    "date": "2026-08-08",
    "title": "AI가 수학 난제 10개 풀었다, 단돈 $2,000에",
    "rawTitle": "Ten advances in mathematics and theoretical computer science",
    "summary": "OpenAI가 미공개 모델 'Astra'로 10년 넘게 막혀 있던 난제 10개에서 진전을 냈다. 결과 전부를 Lean 인증서로 공개해 기계 검증까지 가능하게 했다.",
    "bodyHtml": "<p>OpenAI가 수학과 이론 컴퓨터과학의 오랜 난제 10개에서 진전을 냈다고 8월 1일 공개했습니다. 이 결과들은 아직 공개되지 않은 내부 모델 'Astra'가 만들어낸 것으로, OpenAI는 Astra를 '우리의 다음 주요 모델(next major model)'이라 소개했습니다. 다룬 문제들은 대부분 최소 10년, 길게는 수십 년간 핵심 결과에서 별다른 진전이 없던 것들입니다.</p><blockquote>\"이 문제들은 최소 10년 동안 핵심 결과에서 아무런 진전이 없었다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>대상 분야는 고차원 기하, 부호 이론, 산술 회로 복잡도, 군론, 양자 복잡도, 격자 암호, 극단 조합론 등으로 넓습니다. 특히 검증 방식이 눈에 띕니다 — OpenAI는 249쪽 분량의 원고와 모델의 추론 과정, 그리고 10개 결과 전부에 대한 Lean 증명 인증서를 GitHub에 공개했습니다. 사람이 일일이 검토하는 전통적 동료평가 대신, 누구나 즉시·무신뢰(trustless)로 기계 검증할 수 있게 한 것입니다. 비용도 상징적입니다 — 10개 증명을 합쳐 약 2,000달러어치의 GPT-5.6 Sol API 토큰이 들었다고 합니다.</p><h3>실무 적용</h3><p>정답을 '기계가 검증 가능한 형식(Lean 등)'으로 강제하면, LLM의 그럴듯한 오류(할루시네이션)를 원천에서 걸러낼 수 있습니다. AI가 만든 산출물을 신뢰해야 하는 워크플로라면 '사람이 나중에 검수'가 아니라 '형식 검증을 파이프라인에 내장'하는 설계를 검토할 만합니다. 다만 형식 증명이 '맞다'는 것과 그 문제 설정·해석이 '의미 있다'는 것은 다른 문제이므로, 정식 동료평가는 아직 진행 중이라는 점은 유의해야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://simonwillison.net/2026/Aug/1/ten-advances-in-mathematics/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Simon Willison: Ten advances in mathematics and theoretical computer science</a> — 결과와 Lean 검증이 갖는 의미를 정리한 관점을 함께 봅니다.</li><li><a href=\"https://www.bleepingcomputer.com/news/artificial-intelligence/openai-teases-astra-its-next-major-ai-model-after-it-solves-10-long-standing-math-problems/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">BleepingComputer: OpenAI teases Astra after it solves 10 long-standing math problems</a> — 미공개 모델 'Astra'의 위치와 맥락을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 이번 발표의 진짜 뉴스가 '난제를 풀었다'가 아니라 '기계가 검증할 수 있게 풀었다'는 데 있다고 봅니다. AI의 주장을 사람이 믿어주던 시대에서, AI의 주장을 기계가 증명하는 시대로 넘어가는 신호입니다 — 신뢰의 근거가 '누가 말했나'에서 '검증 가능한가'로 옮겨갈 때, AI는 비로소 연구의 동료가 됩니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/ten-advances-in-mathematics/",
    "tags": [
      "AI for Math",
      "Automated Reasoning",
      "Lean Proofs"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-07-ai-generated-ui-inaccessible",
    "category": "design",
    "date": "2026-08-07",
    "title": "AI가 만든 UI, 기본값은 '접근 불가'다",
    "rawTitle": "AI-Generated UI Is Inaccessible by Default",
    "summary": "AI 코드 생성기는 버튼처럼 '보이는' div를 쏟아낸다. 화면에선 멀쩡해도 보조기술엔 빈 껍데기다 — 시맨틱을 강제하는 5겹 방어가 해법이다.",
    "bodyHtml": "<p>프런트엔드 개발자 Durgesh Pawar가 AI 코드 생성 도구의 불편한 진실을 해부했습니다. LLM에게 사이드바 내비게이션을 요청하면 몇 초 만에 그럴듯한 React 컴포넌트가 나오지만, 그 안을 들여다보면 &lt;nav&gt; 랜드마크가 없고 'Settings'는 제목이 아닌 스타일만 입힌 &lt;div&gt;이며, 목록은 &lt;ul&gt;·&lt;li&gt;가 아니고, 클릭 요소는 &lt;button&gt;이 아니라 &lt;div onClick&gt;인 경우가 흔하다는 것입니다. 화면에는 멀쩡히 보여도, 스크린 리더가 실제로 읽는 접근성 트리에는 아무 의미도 남지 않습니다.</p><blockquote>\"CSS는 &lt;div&gt;를 버튼처럼 '보이게' 만들 수 있지만, 그것을 실제 버튼으로 '만드는' 것은 오직 HTML 시맨틱뿐이다.\"<cite>Durgesh Pawar, Frontend Masters</cite></blockquote><h3>왜 중요한가</h3><p>모델이 접근성을 빠뜨리는 건 우연이 아니라 구조적입니다. LLM은 시각적 결과물에 최적화돼 있고, 학습 데이터에서 시맨틱 HTML은 과소 대표되며, 평가는 '보기에 그럴듯한가'에 쏠려 있고, 토큰 경제학은 더 짧은 코드를 선호합니다. 대가는 비용으로도 드러납니다 — 생성 단계에서 접근성 제약을 넣으면 컴포넌트당 3~8분이면 되지만, 배포 후에 찾아 고치면 45~90분이 든다고 저자는 말합니다.</p><h3>실무 적용</h3><p>해법은 '사람이 나중에 검수'가 아니라 파이프라인으로 시맨틱을 강제하는 5겹 방어입니다. ① 프롬프트 제약, ② 정적 분석(ESLint), ③ 런타임 테스트(axe-core), ④ CI 통합, ⑤ 접근성이 내장된 컴포넌트 추상화(Radix·Headless UI)를 겹겹이 쌓으세요. 다만 자동 도구가 잡아내는 건 실제 문제의 70~85%뿐이므로, 보조기술로 직접 만져보는 수동 테스트는 끝까지 남겨둬야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/06/why-accessibility-operational-capability-not-feature/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Why Accessibility Is An Operational Capability, Not A Feature</a> — 접근성이 '기능'이 아니라 팀의 운영 성숙도임을 함께 봅니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/06/how-make-design-system-ai-ready/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: How To Make Your Design System AI-Ready</a> — AI가 올바른 컴포넌트를 뽑도록 디자인 시스템을 준비하는 관점을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI가 만든 화면일수록 '보이는 것'과 '읽히는 것'의 간극을 먼저 의심해야 한다고 봅니다. 접근성은 출시 직전의 영웅적 스프린트가 아니라 시스템에서 나옵니다 — 사람이 감당할 수 없는 속도로 코드가 쏟아지는 시대라면, 시맨틱을 강제하는 장치를 파이프라인에 심어두는 편이 유일하게 지속 가능한 길입니다.</p>",
    "source": "Frontend Masters",
    "sourceUrl": "https://master.dev/blog/ai-generated-ui-is-inaccessible-by-default/",
    "tags": [
      "Accessibility",
      "AI-Generated UI",
      "Semantic HTML"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-07-weathernext2-cyclones",
    "category": "ai",
    "date": "2026-08-07",
    "title": "AI 기상 모델, 태풍 예측 '10년치' 도약",
    "rawTitle": "Our WeatherNext 2 AI model demonstrated a massive leap forward in predicting cyclones",
    "summary": "구글 딥마인드 WeatherNext 2가 태풍의 경로·강도·바람 구조 예측에서 최고 정확도를 냈다. 하루 더 이른 경보, 그리고 모델을 연구자에게 오픈소스로 공개했다.",
    "bodyHtml": "<p>구글 딥마인드와 구글 리서치가 기상 예측 AI 'WeatherNext 2'로 태풍(사이클론) 예측에서 큰 진전을 냈다고 공개했습니다. 태풍의 경로뿐 아니라 강도와 바람 구조까지 최고 수준의 정확도로 예측하며, 결과는 학술지 Nature에 실렸습니다. 실질적으로는 경보를 하루가량 앞당길 수 있고, 구글은 WeatherNext 2와 사이클론 전용 모델을 전 세계 연구자에게 오픈소스로 공개해 기후 대응 역량을 넓히려 합니다.</p><blockquote>\"이것은 거대한 도약이다 — 하나의 모델에 약 10년치 기상학 진보가 담겼다.\"<cite>Google DeepMind</cite></blockquote><h3>왜 중요한가</h3><p>수치가 흐름을 말해 줍니다. WeatherNext 2는 하나의 출발점에서 수백 가지 가능한 기상 시나리오를 뽑아내는데, 각 예측은 슈퍼컴퓨터로 몇 시간 걸리던 물리 기반 계산과 달리 단일 TPU에서 1분도 걸리지 않습니다. 이전 모델보다 약 8배 빠르고, 변수·예측 시점의 99.9%에서 앞선 모델을 능가한다고 합니다. 태풍처럼 몇 시간의 경보 차이가 대피와 생존을 가르는 재난에서, '더 빠르고 더 이른 예측'은 곧 사람을 살리는 능력입니다.</p><h3>실무 적용</h3><p>거대한 물리 시뮬레이션에 의존하던 예측 문제라면, 학습된 생성 모델로 '앙상블(여러 시나리오)'을 값싸게 대량 생성하는 접근을 검토할 만합니다. WeatherNext 데이터는 이미 Earth Engine·BigQuery로 제공되고 Vertex AI 조기 접근도 열려 있어, 자체 기상 모델을 처음부터 학습하기보다 공개 모델을 자기 도메인에 붙여 쓰는 편이 현실적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/models-and-research/google-deepmind/weathernext-2/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: WeatherNext 2 — Google DeepMind's Most Advanced Forecasting Model</a> — 이번 태풍 성과의 토대가 된 모델의 속도·정확도 개선을 함께 봅니다.</li><li><a href=\"https://deepmind.google/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google DeepMind: GraphCast</a> — AI 기상 예측이 어디서 출발했는지 그 계보를 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI의 가장 값진 쓸모가 '더 그럴듯한 콘텐츠'가 아니라 '재난을 하루 먼저 아는 능력'에 있다고 봅니다. 성능을 소수의 슈퍼컴퓨터에 가두지 않고 오픈소스로 푼 결정이 특히 중요합니다 — 예측이 가장 필요한 곳이 가장 쉽게 쓸 수 있을 때, 기술은 비로소 생명을 구합니다.</p>",
    "source": "Google DeepMind",
    "sourceUrl": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/weathernext-2-cyclones/",
    "tags": [
      "Weather AI",
      "Google DeepMind",
      "Climate Resilience"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-05-presenting-ux-maps",
    "category": "design",
    "date": "2026-08-05",
    "title": "복잡한 UX 맵, 문제는 '발표'다",
    "rawTitle": "4 Mistakes to Avoid When Presenting Complex UX Maps",
    "summary": "정교하게 그린 UX 맵도 발표가 서툴면 '복잡하다'는 인상만 남긴다. NN/G는 맵을 산출물이 아니라 대화의 도구로 다루라고 짚는다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Therese Fessenden이 UX 실무에서 자주 어긋나는 지점 — 복잡한 UX 맵(여정 지도·서비스 블루프린트 등)을 이해관계자에게 '발표'하는 순간 — 을 다시 짚었습니다. 정교하게 그린 맵일수록 화면에 그대로 띄우는 것만으로 청중을 압도하기 쉽고, 결국 '복잡하다'는 인상만 남긴 채 정작 필요한 의사결정으로 이어지지 못한다는 지적입니다.</p><blockquote>\"UX 맵은 복잡성을 명료하게 만들지만, 정작 발표는 서툴게 이뤄지는 경우가 많다.\"<cite>Therese Fessenden, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>맵은 최종 산출물이 아니라 '대화의 도구'입니다. 미리 맥락을 공유하지 않고, 전문 용어로 뒤덮고, 완성된 결과를 일방적으로 펼쳐 보이는 방식은 청중을 수동적 관찰자로 밀어냅니다. NN/G는 반대로 발표 전에 목적을 미리 알리고, 쉬운 말로 풀고, 복잡성 자체가 아니라 그 복잡성이 가리키는 '함께 풀 문제'에 초점을 맞추라고 권합니다. AI가 리서치와 시각화를 빠르게 대신할수록, 그 결과를 사람에게 설득력 있게 전하는 커뮤니케이션 역량이 오히려 차별점이 됩니다.</p><h3>실무 적용</h3><p>맵을 공유하기 전에 '이 발표로 무엇을 결정하려는가'를 한 문장으로 정하고, 핵심 이해관계자에게는 회의 전에 미리 맥락을 귀띔해 두세요. 발표장에서는 전체를 한 번에 펼치기보다 결정에 필요한 구간부터 좁혀 보여주고, 청중에게 질문을 던져 '해석을 함께 하는' 자리로 만드는 편이 효과적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/reporting-ux-business-outcomes/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Reporting UX Work in Terms of Business Outcomes</a> — 리서치 결과를 비즈니스 언어로 전달하는 관점을 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/human-led-research-still-matters/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Don't Outsource the Learning — Why Human-Led Research Still Matters</a> — 결과의 해석과 소통에서 사람의 역할이 왜 중요한지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 좋은 맵의 가치가 '얼마나 정교하게 그렸는가'가 아니라 '청중을 어떤 결정으로 데려가는가'에서 완성된다고 봅니다. 복잡성을 자랑하는 발표는 오히려 신뢰를 잃습니다 — 진짜 전문성은 복잡한 것을 단순한 대화로 바꿔내는 데 있습니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/videos/mistakes-to-avoid-presenting-complex-ux-maps/",
    "tags": [
      "UX Maps",
      "Stakeholder Communication",
      "Design Facilitation"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-05-lfm25-on-device-agents",
    "category": "ai",
    "date": "2026-08-05",
    "title": "26억 파라미터로 '기기 위' 에이전트를",
    "rawTitle": "Deploy local agents everywhere with LFM2.5-2.6B",
    "summary": "Liquid AI가 4배 큰 모델과 견줄 26억 파라미터 모델을 공개했다. 노트북 CPU에서 초당 220토큰, 메모리 2.5GB 미만으로 온디바이스 에이전트를 노린다.",
    "bodyHtml": "<p>Liquid AI가 Hugging Face 블로그에서 온디바이스 에이전트를 겨냥한 소형 모델 'LFM2.5-2.6B'를 공개했습니다. 26억 파라미터에 불과하지만 약 4배 큰 모델과 견줄 성능을 내며, 명령 수행(instruction-following) 벤치마크에서 선두를 차지하고 도구 사용 과제에서도 대형 모델과 대등하다는 것이 핵심입니다. 무엇보다 클라우드가 아니라 노트북·휴대폰 위에서 직접 돌아가는 것을 목표로 설계됐습니다.</p><blockquote>\"이 모델들은 유능한 에이전트를 온전히 기기 위에서 구동하도록 설계됐다.\"<cite>Liquid AI, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>수치가 흐름을 말해 줍니다. Apple M5 Max CPU에서 초당 약 220토큰, AMD Ryzen에서 약 113토큰을 생성하면서 메모리는 2.5GB 미만만 씁니다. 지도학습·교사 특화·다중 도메인 증류·에이전트 강화학습으로 이어지는 4단계 후처리를 거쳐, 작은 몸집으로도 실제 에이전트 하네스 안에서 도구를 다루도록 훈련됐습니다. 성능이 '모델 크기'가 아니라 '얼마나 잘 압축하고 정렬했는가'에서 나온다는 신호이자, 프라이버시와 비용 측면에서 클라우드 추론을 걷어낼 수 있다는 뜻입니다.</p><h3>실무 적용</h3><p>에이전트를 붙일 때 무조건 대형 클라우드 모델부터 떠올리지 말고, 기기에서 도는 소형 모델로 처리 가능한 구간을 먼저 가려내세요. 민감한 데이터를 다루거나 지연·비용이 중요한 기능이라면, 온디바이스 모델을 1차로 두고 정말 필요한 순간에만 대형 모델을 호출하는 하이브리드 설계가 합리적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/LiquidAI/lfm2-5-encoders\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: LFM2.5-Encoders for Fast Long-Context Inference on CPU</a> — 같은 계열의 CPU 효율 추론 흐름을 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/Dharma-AI/gpu-management\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: GPU Management</a> — 값비싼 가속기 의존을 줄이는 인프라 관점을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI의 다음 승부처가 '가장 큰 모델'이 아니라 '내 기기에서 조용히 도는 충분히 좋은 모델'이라고 봅니다. 성능을 클라우드에만 의존하면 비용·프라이버시·지연이 발목을 잡습니다 — 진짜 실용적인 에이전트는 사용자 손안에서 완결될 때 비로소 일상이 됩니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b",
    "tags": [
      "On-Device AI",
      "Small Language Models",
      "AI Agents"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-04-scope-research-study",
    "category": "design",
    "date": "2026-08-04",
    "title": "리서치, '범위'부터 좁혀야 산다",
    "rawTitle": "3 Steps to Scope Your Broad Research Study",
    "summary": "넓고 모호한 리서치 질문을 그대로 두면 일정도 결과의 쓸모도 흔들린다. NN/G는 스코핑이 리서치의 성패를 가른다고 짚는다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Lola Famulegun이 UX 리서치에서 가장 과소평가되는 단계인 '스코핑(scoping)'을 다시 꺼냈습니다. 넓고 모호한 질문을 그대로 안고 스터디를 시작하면 일정이 늘어지고, 데이터는 많아 보여도 정작 의사결정에 쓸 수 있는 결론은 잘 나오지 않는다는 지적입니다. NN/G는 이를 세 단계로 좁혀 나가라고 권합니다.</p><blockquote>\"제대로 된 스코핑은 일정과 리서치 효율, 그리고 결과물의 유용성과 직결된다.\"<cite>Lola Famulegun, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>광범위한 스터디는 '많이 알아낸 것 같은' 착시를 주지만, 초점이 흩어지면 어느 결정에도 붙일 수 없는 관찰만 쌓입니다. 특히 AI로 리서치 실행 속도가 빨라질수록 병목은 '얼마나 빨리 돌리느냐'가 아니라 '무엇을 물을지 정하느냐'로 옮겨갑니다. 스코핑은 그 질문의 경계를 먼저 긋는 일이라 오히려 그 가치가 커집니다.</p><h3>실무 적용</h3><p>리서치를 시작하기 전에 질문을 이해관계자의 '실제 결정'에 연결하고, 대상·방법·산출물의 범위를 미리 좁혀 한 스터디가 감당할 수 있는 크기로 잘라내세요. '이번 스터디로 무엇을 결정할 것인가'에 한 문장으로 답할 수 없다면, 범위가 아직 너무 넓다는 신호입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/human-led-research-still-matters/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Don't Outsource the Learning — Why Human-Led Research Still Matters</a> — AI 시대에도 사람이 질문을 설계해야 하는 이유를 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/establishing-baselines/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Establishing Baselines</a> — 무엇을 측정할지 먼저 정하는 리서치 기획 관점을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 좋은 리서치가 '더 많이 묻는 것'이 아니라 '덜, 그러나 정확히 묻는 것'에서 나온다고 봅니다. 도구가 답을 값싸게 만들수록, 무엇을 물을지 좁혀 두는 사람의 판단이 결과의 질을 가릅니다 — 스코핑은 그 판단을 앞단에서 설계하는 일입니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/videos/scope-your-broad-research-study/",
    "tags": [
      "UX Research",
      "Research Scoping",
      "Study Design"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-04-arc-agi3-two-settings",
    "category": "ai",
    "date": "2026-08-04",
    "title": "설정 두 개로 AI 추론 점수 3배",
    "rawTitle": "How enabling two settings tripled our scores on the ARC-AGI-3 benchmark",
    "summary": "OpenAI가 모델을 그대로 두고 '유지된 추론'과 '압축' 두 설정만 켜서 ARC-AGI-3 점수를 13.3%→38.3%로 끌어올리고 토큰은 6분의 1로 줄였다.",
    "bodyHtml": "<p>OpenAI가 에이전트의 추론 능력을 재는 벤치마크 'ARC-AGI-3'에서 흥미로운 실험을 공개했습니다. ARC-AGI-3는 에이전트가 설명 없이 처음 보는 2D 게임을 탐험하며 규칙을 스스로 추론하게 하는 과제인데, 모델을 바꾸지 않고 API 설정 두 개 — '유지된 추론(retained reasoning)'과 '압축(compaction)' — 만 켰더니 GPT-5.6 Sol의 공개 세트 점수가 13.3%에서 38.3%로 약 세 배가 되고, 출력 토큰은 6분의 1로 줄었습니다.</p><blockquote>\"두 개의 설정 — 유지된 추론과 압축 — 을 켜는 것만으로 점수는 세 배가 되고 출력 토큰은 6분의 1로 줄었다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>인간 평균 48%에 비하면 여전히 낮은 수치지만, 핵심은 '같은 모델·같은 문제'에서 결과가 크게 달라졌다는 점입니다. 여러 스텝에 걸쳐 시행착오하는 에이전트 과제에서는 앞선 추론을 버리지 않고 이어가고(유지), 불어나는 문맥을 압축해 재사용하는 것만으로 더 오래·더 싸게 사고할 수 있습니다. 성능이 '더 큰 모델'이 아니라 '추론을 어떻게 운영하느냐'에서 나온다는 신호입니다.</p><h3>실무 적용</h3><p>에이전트를 붙일 때 모델 업그레이드에만 기대지 말고, 추론 상태 유지와 문맥 압축 같은 런타임 설정부터 튜닝하세요. 토큰을 6배 아끼면서 정확도가 오르는 구간이 실제로 존재하므로, 설정 조합을 자체 벤치마크로 실측해 비용과 성능을 동시에 최적화하는 편이 합리적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/gpt-5-6/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Advancing the price-performance frontier with GPT-5.6</a> — 이번 실험에 쓰인 모델의 가격·성능 개선 흐름을 함께 봅니다.</li><li><a href=\"https://openai.com/index/ten-advances-in-mathematics/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Ten advances in mathematics and theoretical computer science</a> — 모델의 추론 능력이 어디까지 확장되는지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI의 다음 경쟁이 '모델 크기'가 아니라 '추론을 운영하는 방식'에서 갈린다고 봅니다. 같은 엔진이라도 문맥을 어떻게 이어가고 압축하느냐에 따라 결과가 세 배로 벌어진다면, 진짜 실력은 프롬프트 한 줄이 아니라 추론 파이프라인 설계에서 나옵니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores/",
    "tags": [
      "AI Agents",
      "Reasoning",
      "LLM Benchmark"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-03-react-flight-protocol-security",
    "category": "design",
    "date": "2026-08-03",
    "title": "React 서버 컴포넌트가 연 새 공격면",
    "rawTitle": "Weaponizing And Defending The React Flight Protocol: Deserialization Sinks In RSCs",
    "summary": "React Flight 직렬화의 설계 특성이 CVSS 10.0 원격 실행으로 이어졌다. Smashing은 프레임워크 패치를 넘는 다층 방어를 촉구한다.",
    "bodyHtml": "<p>Smashing Magazine의 Durgesh Pawar가 React 서버 컴포넌트(RSC)가 UI를 스트리밍할 때 쓰는 직렬화 포맷 'Flight 프로토콜'의 보안 위험을 해부했습니다. Flight는 정당한 기술 문제를 풀지만, 임의 속성 탐색($: 접두사)과 프레임워크 내부 상태 노출($@ 접두사) 같은 설계가 위험한 역직렬화 공격면을 만든다는 지적입니다. 실제로 CVE-2025-55182('React2Shell')는 검증되지 않은 속성 탐색을 통해 자바스크립트 Function 생성자에 도달해 CVSS 10.0의 원격 코드 실행을 달성했습니다.</p><blockquote>\"Flight는 일회성 파싱 버그가 아니라 하나의 증상이었다.\"<cite>Durgesh Pawar, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>단일 취약점이 아니라 설계에서 비롯된 계열 취약점이라는 점이 핵심입니다. 최초 공개 이후 DoS와 소스 코드 노출 등 여섯 건의 CVE가 잇따랐고, 국가 배후로 추정되는 공격자는 공개 몇 시간 만에 파일리스 임플란트를 배포해 이더리움 블록체인을 명령·제어 채널로 활용했다고 합니다. 프레임워크 패치만 기다려서는 이런 계열 위협을 막기 어렵다는 뜻입니다.</p><h3>실무 적용</h3><p>RSC를 도입한 팀이라면 최신 패치 적용은 기본이고, 신뢰할 수 없는 입력이 직렬화 경계를 넘지 못하도록 다층 방어를 설계하세요. 서버 액션의 입력 검증, 의존성 감사, 런타임 격리(WAF·CSP)를 함께 걸어 '프레임워크가 알아서 안전하겠지'라는 가정을 걷어내는 편이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/agent-intrusion-technical-timeline\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Anatomy of a Frontier Lab Agent Intrusion</a> — 공개 직후 실제 침해가 어떻게 전개되는지 타임라인으로 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/security-incident-july-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Security Incident Disclosure — July 2026</a> — 오픈 생태계의 공급망·보안 대응 흐름을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 편리한 추상화일수록 그 안에 숨은 신뢰 가정을 의심해야 한다고 봅니다. 프레임워크가 제공하는 마법 같은 기능은 그만큼 넓은 공격면을 동반합니다 — 진짜 안전한 제품은 '기본값을 믿지 않는' 설계에서 나옵니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/weaponizing-defending-react-flight-protocol/",
    "tags": [
      "Web Security",
      "React",
      "Frontend"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-03-cosmos-h-dreams-surgical-sim",
    "category": "ai",
    "date": "2026-08-03",
    "title": "수술 로봇을 '실시간 시뮬레이션'으로 훈련하다",
    "rawTitle": "NVIDIA Cosmos-H-Dreams: Bringing Real-Time Generative Simulation to Surgical Robotics",
    "summary": "NVIDIA가 대형 수술 월드 모델을 증류해 단일 GPU에서 약 160fps 실시간 시뮬레이션을 구현했다. 물리 로봇 없이 상호작용 훈련이 가능해진다.",
    "bodyHtml": "<p>NVIDIA가 Hugging Face 블로그에서 수술 로봇을 위한 실시간 생성형 시뮬레이터 'Cosmos-H-Dreams'를 공개했습니다. 대형 수술 월드 모델(Cosmos-H-Surgical-Simulator)을 인과적이고 소수 스텝으로 동작하는 '학생 모델'로 증류하고, FlashDreams 추론 라이브러리로 최적화해 물리 로봇 없이도 상호작용형 훈련·평가를 가능하게 한 것이 핵심입니다. 단일 RTX PRO 6000 GPU에서 약 160fps로 동작하는데, 이는 전체 교사 모델(약 10fps) 대비 실시간 상호작용을 처음으로 실용화한 수준입니다.</p><blockquote>\"Cosmos-H-Dreams는 Cosmos-H-Surgical-Simulator의 능력을 인과적이고 소수 스텝으로 동작하는 학생 모델로 증류한다.\"<cite>NVIDIA, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>수술 로봇 학습의 병목은 비용과 안전이었습니다. 실제 로봇과 환자로 시행착오를 반복할 수 없기 때문이죠. Cosmos-H-Dreams는 여러 로봇 플랫폼을 아우르는 Open-H-Embodiment 데이터셋으로 학습하고, 학생 모델이 배포 중 자신의 불완전한 출력에 대비하도록 '자기 강제(self-forcing) 증류'를 사용합니다. 성능을 유지하면서 속도를 약 16배 끌어올려, 상호작용형 시뮬레이션이 소수 연구실의 전유물에서 벗어나게 만든다는 신호입니다.</p><h3>실무 적용</h3><p>실시간성이 필요한 AI를 만드는 팀이라면 거대한 교사 모델을 그대로 배포하기보다, 인과적 소수 스텝 학생 모델로 증류해 지연을 줄이는 접근을 검토하세요. 특히 학습 단계에서 모델이 자신의 누적 오차에 노출되도록 설계하면, 실제 배포 환경의 분포 이동에 훨씬 강건해집니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Cosmos 3 for Physical AI</a> — 물리 AI를 떠받치는 파운데이션 월드 모델의 큰 그림을 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/nvidia/state-of-simulation-for-physical-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: The State of Simulation for Physical AI</a> — 시뮬레이션이 로봇 학습을 어떻게 민주화하는지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 로보틱스의 다음 도약이 '더 정교한 하드웨어'가 아니라 '값싸게 반복할 수 있는 시뮬레이션'에서 온다고 봅니다. 안전이 걸린 분야일수록 실패를 가상에서 대량으로 겪어봐야 합니다 — 실시간 월드 모델은 그 시행착오의 비용을 극적으로 낮추는 지렛대입니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/nvidia/cosmos-h-dreams",
    "tags": [
      "Physical AI",
      "Robotics Simulation",
      "Model Distillation"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-02-mentorship-ux-career",
    "category": "design",
    "date": "2026-08-02",
    "title": "멘토십, 제대로 써야 커리어가 큰다",
    "rawTitle": "Why You Need Mentorship and How to Get It Right",
    "summary": "멘토십은 잡담이 아니라 승진·보상·만족도를 끌어올리는 성장 도구다. NN/G는 대상 선정과 실행이 성패를 가른다고 짚는다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Evan Sunwall이 UX 커리어에서 과소평가되는 도구로 '멘토십'을 다시 꺼냈습니다. 멘토십은 코칭·보호·노출 같은 커리어 기능과 역할 모델·공감 같은 정서적 지지를 동시에 제공하며, 연구에 따르면 멘티는 더 많은 승진과 높은 보상, 더 큰 직무 만족과 낮은 번아웃을 경험한다는 것입니다. 문제는 '한다/안 한다'가 아니라 '어떻게 하느냐'에 있습니다.</p><blockquote>\"멘토십은 그저 잡담이 아니며, 경험이 부족한 사람만을 위한 것도 아니다.\"<cite>Evan Sunwall, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>많은 멘토십이 실패하는 이유는 잘못된 멘토 선정, 드문 만남, 조언을 실행하지 않는 태도, 서투른 소통에 있습니다. 조직 차원에서도 효과는 분명합니다 — 멘토십 프로그램을 갖춘 조직은 소외 집단의 승진·유지·관리자 비중을 최대 24%까지 끌어올린다고 합니다. AI가 실행 업무를 빠르게 대체하는 시대일수록, 사람에게서 사람으로 전해지는 판단과 맥락의 가치는 오히려 커집니다.</p><h3>실무 적용</h3><p>멘티가 수동적으로 조언을 '받는' 관계로는 성과가 나지 않습니다. 만남마다 의제를 준비하고, 받은 조언을 실제로 실행한 뒤, 그 결과를 다시 보고하는 루프를 돌리세요. 멘토를 고를 때는 직함이 아니라 신뢰할 만한 지혜·솔직함·공감, 그리고 가치관의 공유를 기준으로 삼는 편이 좋습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/videos/transitioning-from-graphic-design-to-ux/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Transitioning from Graphic Design to UX</a> — 커리어 전환기에 멘토십이 왜 지렛대가 되는지 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/design-jobs-ai-created/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Design Jobs AI Created</a> — 역할이 재편되는 시대에 배움의 경로를 어떻게 설계할지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 멘토십의 진짜 가치가 '조언의 양'이 아니라 '실행과 피드백의 루프'에 있다고 봅니다. AI가 답을 값싸게 만들수록, 무엇을 물어야 하고 무엇을 실행할지 함께 가늠해 줄 사람의 자리는 더 귀해집니다 — 멘토십은 그 자리를 설계하는 일입니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/mentorship/",
    "tags": [
      "Mentorship",
      "Design Career",
      "UX Growth"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-02-olmoearth-planetary-inference",
    "category": "ai",
    "date": "2026-08-02",
    "title": "위성 AI를 '행성 규모'로 민주화하다",
    "rawTitle": "The OlmoEarth Platform: Geospatial inference at planetary scale",
    "summary": "Ai2의 OlmoEarth는 엔지니어링 팀 없는 기관도 대륙 규모 위성 분석을 돌리게 한다. 4,737시간 연산을 30.5시간으로 압축했다.",
    "bodyHtml": "<p>Allen Institute for AI(Ai2)가 Hugging Face 블로그에서 위성 이미지를 행성 규모로 분석하는 'OlmoEarth 플랫폼'을 공개했습니다. 데이터 수집(CPU)·모델 추론(GPU)·후처리(CPU) 세 단계로 작업을 쪼개 하드웨어를 최적으로 배분하는 것이 핵심입니다. 실제로 북미 산불 위험 지도를 만들 때 CPU 19,600개와 GPU 994개를 병렬로 돌려, 직렬로는 약 4,737시간 걸릴 연산을 30.5시간으로 줄였습니다 — 약 155배의 가속입니다.</p><blockquote>\"환경 분야의 대다수 조직은 모델의 전체 생애주기를 스스로 관리할 인프라나 엔지니어링 팀이 없다.\"<cite>Kyle Wiggers, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>가장 절실한 곳에 기술이 가장 없다는 역설을 겨냥한 플랫폼입니다. 보전·식량 안보·기후 대응 기관들은 파운데이션 모델을 실제 규모로 운영할 여력이 부족하죠. OlmoEarth는 km²당 1페니의 몇 분의 일 수준으로 처리 비용을 낮추고, 파이프라인을 표준화해 진입 장벽 자체를 허뭅니다. 모델의 성능만큼이나 '누가 그 성능을 실제로 쓸 수 있느냐'가 임팩트를 가른다는 신호입니다.</p><h3>실무 적용</h3><p>대규모 AI를 도입하려는 팀이라면 워크로드를 성격(CPU 대 GPU)에 따라 분리하고, 각 단계를 병렬화해 값비싼 가속기의 유휴 시간을 줄이는 설계를 우선하세요. 자체 인프라가 없다면 이런 관리형 플랫폼이나 종량제를 활용해, 모델 학습보다 '문제 정의와 데이터 준비'에 자원을 집중하는 편이 합리적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/nvidia/state-of-simulation-for-physical-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: The State of Simulation for Physical AI — An Overview</a> — GPU 가속 인프라가 어떻게 물리 AI 학습을 민주화하는지 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/LiquidAI/lfm2-5-encoders\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: LFM2.5-Encoders for Fast Long-Context Inference on CPU</a> — 값비싼 GPU 없이 효율을 끌어올리는 흐름을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI의 다음 경쟁이 '더 큰 모델'이 아니라 '누구나 돌릴 수 있는 인프라'에서 벌어진다고 봅니다. 성능을 소수만 감당할 수 있다면 그 성능은 반쪽입니다 — 진짜 혁신은 가장 필요한 곳이 가장 쉽게 쓸 수 있을 때 완성됩니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/allenai/olmoearth-infrastructure",
    "tags": [
      "Geospatial AI",
      "AI Infrastructure",
      "Open Models"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-01-no-new-name-ux",
    "category": "design",
    "date": "2026-08-01",
    "title": "'UX'를 대체할 새 이름은 없었다",
    "rawTitle": "No New Name Has Replaced \"UX\"",
    "summary": "이름 논쟁은 뜨겁지만, 전문가 604명 설문에서 70%가 여전히 UX 계열 용어를 썼다. NN/G는 지금 리브랜딩은 불필요하다고 본다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Rachel Banawa가 'UX'라는 이름을 둘러싼 리브랜딩 논쟁에 데이터로 답했습니다. 전문가 604명을 설문한 결과 응답의 70%가 여전히 UX 계열 용어를 사용했고, 'UX' 단독 표현만 47.8%에 달했습니다. 대안으로 거론되던 '경험 디자인'이나 '인간 중심 디자인'은 놀라울 만큼 드물게 등장했습니다.</p><blockquote>\"지금 시점에서 이 분야에 새로운 포괄 용어를 채택하는 것은 정당해 보이지 않는다.\"<cite>Rachel Banawa, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>이름 논쟁은 정체성 불안의 신호처럼 보이지만, 데이터는 시장이 이미 'UX'로 수렴했음을 보여줍니다. 흥미롭게도 직무에 따라 선호 용어가 갈렸습니다 — 프로덕트 매니저는 'product'를, 고객 인사이트 담당자는 'customer'를 앞세웠죠. 새 우산 용어를 찾는 노력보다, 각자 조직 안에서 자기 일을 어떤 언어로 설명하느냐가 더 실질적인 문제라는 뜻입니다.</p><h3>실무 적용</h3><p>팀 소개나 개인 브랜딩에서 그럴듯한 새 직함을 발명하는 데 에너지를 쏟기보다, UX 작업이 조직의 성과·의사결정·리스크 감소·품질 향상에 어떻게 기여하는지를 언어로 연결하세요. 이해관계자가 이미 중요하게 여기는 지표에 자신의 일을 붙일 때, 이름이 무엇이든 영향력은 커집니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/reporting-ux-business-outcomes/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Reporting UX in Terms of Business Outcomes</a> — 이름 대신 '성과'로 가치를 증명하는 방법을 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/design-jobs-ai-created/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Design Jobs AI Created</a> — 역할과 명칭이 어떻게 재편되는지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 직함을 바꾼다고 신뢰가 생기지는 않는다고 봅니다. 중요한 건 라벨이 아니라, 그 일이 어떤 문제를 풀고 어떤 결과를 냈는지입니다 — 새 이름을 찾기 전에, 지금 이름으로 증명할 결과부터 만드는 편이 빠릅니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/no-new-name-ux/",
    "tags": [
      "UX Strategy",
      "Design Career",
      "Terminology"
    ],
    "thumb": ""
  },
  {
    "id": "2026-08-01-gemini-managed-agents-hooks",
    "category": "ai",
    "date": "2026-08-01",
    "title": "AI 에이전트에 '가드레일'이 기본이 된다",
    "rawTitle": "Gemini API Managed Agents: 3.6 Flash, hooks, and more",
    "summary": "Gemini API의 관리형 에이전트가 3.6 Flash를 기본으로 삼고, 도구 호출을 사전·사후 검증하는 훅과 토큰 예산 상한을 더했다.",
    "bodyHtml": "<p>Google이 Gemini API의 '관리형 에이전트(Managed Agents)'를 크게 손봤습니다. 기본 모델을 Gemini 3.6 Flash로 올리고, 에이전트가 도구를 호출하기 전과 후에 개입하는 '환경 훅(hooks)'을 새로 넣었습니다. 여기에 토큰 예산 상한, 예약 실행(cron), 무료 등급 지원까지 더해졌습니다.</p><blockquote>\"Gemini API의 관리형 에이전트는 이제 Gemini 3.6 Flash를 기본으로 하며, 새로운 환경 훅으로 샌드박스 안에서 도구 호출을 차단하거나 점검·감사할 수 있다.\"<cite>Google, Gemini API 팀</cite></blockquote><h3>왜 중요한가</h3><p>에이전트가 스스로 도구를 부르고 행동하는 시대에, 가장 큰 불안은 '통제 불능'입니다. 훅은 pre_tool_execution·post_tool_execution 이벤트에 정규식 매처를 걸어, 위험한 호출을 실행 전에 막고 결과를 사후 검사하게 해줍니다. max_total_tokens로 토큰 소비 상한을 두고, 미완 작업은 상태를 보존해 이어서 재개하죠. 자율성을 키우는 게 아니라, 자율성에 '가드레일'을 채우는 방향의 업데이트입니다.</p><h3>실무 적용</h3><p>에이전트를 실서비스에 붙이려는 팀이라면 '무엇을 할 수 있나'보다 '무엇을 못 하게 막을까'를 먼저 설계해야 합니다. 도구 호출을 정책으로 검증하고, 토큰 예산으로 비용 폭주를 막고, 예약 실행으로 반복 작업을 자동화하세요. 무료 등급이 열린 만큼, 프로토타입 단계부터 이런 안전장치를 습관처럼 넣어두는 편이 좋습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/sundar-pichai-io-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: I/O 2026 — Welcome to the agentic Gemini era</a> — 에이전트 중심으로 재편되는 Gemini 생태계의 큰 그림을 함께 봅니다.</li><li><a href=\"https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: Diffusion Gemma for Faster Text Generation</a> — 에이전트를 떠받치는 모델 효율화 흐름을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 에이전트의 경쟁력이 '얼마나 똑똑한가'만큼 '얼마나 안전하게 제어되는가'에서 갈린다고 봅니다. 사용자에게 진짜 신뢰를 주는 건 화려한 자율성이 아니라 예측 가능한 경계입니다 — 잘 채운 가드레일이 결국 더 대담한 자동화를 가능하게 합니다.</p>",
    "source": "Google",
    "sourceUrl": "https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/",
    "tags": [
      "AI Agents",
      "Gemini API",
      "Guardrails"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-31-bull-bear-design-ai",
    "category": "design",
    "date": "2026-07-31",
    "title": "AI 시대 디자인의 낙관과 비관",
    "rawTitle": "The Bull And Bear Case For Digital Design In The Age Of AI",
    "summary": "AI는 디자이너를 승인만 기다리던 자리에서 결정하는 자리로 끌어올릴 수도, 지적만 하는 약점을 드러낼 수도 있다. Smashing Magazine의 두 갈래 전망.",
    "bodyHtml": "<p>Smashing Magazine에 Andy Budd가 AI 시대 디지털 디자인의 미래를 낙관론(bull)과 비관론(bear) 두 갈래로 나눠 짚었습니다. 낙관론은 디자이너가 AI로 직접 프로토타입을 만들고 테스트·배포까지 해내며, 승인만 기다리던 '내부 비평가'에서 제품을 이끄는 주체로 올라선다는 그림입니다. 비관론은 그 자율성이 오히려 '무엇이 잘못됐는지'만 지적하던 디자이너의 약점을 드러낸다는 경고입니다.</p><blockquote>\"많은 디자이너가 무엇이 잘못됐는지는 잘 알아챈다. 하지만 대신 무엇을 해야 하는지 결정하는 데 능한 이는 드물다.\"<cite>Andy Budd, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>AI가 '그럴듯한 디자인(plausible design)'을 대량으로 뽑아내면, 제품·엔지니어링 팀이 디자인 단계를 통째로 건너뛸 수 있습니다. 겉보기엔 멀쩡하지만 전략적 판단이 빠진 결과물이죠. 도구가 실행의 문턱을 낮출수록, 디자이너의 가치는 '화면을 잘 그리는 능력'이 아니라 '무엇을 만들지 결정하는 판단'으로 무게중심이 옮겨갑니다.</p><h3>실무 적용</h3><p>비판만 하는 역할에서 벗어나 구체적인 대안을 함께 내미는 습관을 들이세요. AI로 여러 방향을 빠르게 시제품화하되, 각 안이 어떤 사용자 문제를 어떻게 푸는지 근거를 붙여 '결정'으로 연결해야 합니다. 승인 절차에 기대 오던 디자이너일수록, 스스로 만들어 검증하는 근육을 지금부터 길러야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026 — Design Deeper to Differentiate</a> — 도구가 평준화될수록 더 깊은 판단으로 차별화해야 한다는 흐름을 함께 봅니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/07/digital-design-ai-era/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Thinking Outside The Box — Digital Design In The AI Era</a> — AI가 대신 못 하는 '사람의 몫'을 보완적으로 봅니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI가 실행을 값싸게 만들수록, 디자이너의 진짜 일은 '결정'으로 이동한다고 봅니다. 무엇이 틀렸는지 지적하는 눈보다, 그래서 무엇을 만들지 정하는 판단이 더 귀해집니다 — 낙관과 비관을 가르는 건 도구가 아니라, 결정을 책임지는 태도입니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/bull-and-bear-case-digital-design-age-ai/",
    "tags": [
      "AI Design",
      "Product Design",
      "Design Strategy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-31-idle-gpu-utilization",
    "category": "ai",
    "date": "2026-07-31",
    "title": "놀고 있는 GPU가 곧 손실이다",
    "rawTitle": "GPU Management: Why Idle GPUs Are the New Grounded Aircraft",
    "summary": "기업 AI의 진짜 병목은 모델 성능이 아니라 GPU 가동률이다. 멈춰 선 GPU는 멈춰 선 항공기처럼 가만히 있어도 돈을 태운다.",
    "bodyHtml": "<p>Hugging Face 블로그에 Dharma-AI 팀이 기업 AI의 진짜 병목은 모델 성능이 아니라 'GPU 가동률'이라고 짚었습니다. 놀고 있는 GPU를 이착륙 없이 멈춰 선 항공기에 빗댔죠. 값비싼 GPU를 사들이는 순간부터 경쟁의 초점은 하드웨어 확보가 아니라, 그 하드웨어를 얼마나 쉼 없이 돌리느냐로 옮겨간다는 것입니다.</p><blockquote>\"GPU 역시 금융비용·감가상각·전력·냉각을 통해 시간 단위로 비용을 쌓는다 — 쓸모 있는 일을 하든 안 하든 상관없이.\"<cite>Dharma-AI, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>2020년 Microsoft가 OpenAI에 지어준 1만 개 규모 GPU 슈퍼컴퓨터는 당시엔 엄청났지만, 2026년 기준으로는 작은 축입니다. 이제 주요 AI 랩들은 자본이 넉넉해도 컴퓨트 접근 자체를 전략적 제약으로 다룹니다. Anthropic은 서로 다른 네 곳의 하드웨어 벤더에 걸쳐 기가와트급 계약을 동시에 운영할 정도죠. GPU 비용은 가동률과 무관하게 달력 시간으로 발생하지만 매출은 실제 연산이 돌 때만 생깁니다 — 이 간극이 곧 손실입니다.</p><h3>실무 적용</h3><p>AI를 도입하는 팀이라면 '어떤 모델을 살까'만큼 '가진 자원을 얼마나 채워 쓰는가'를 관리해야 합니다. 워크로드를 몰아 배치해 유휴 시간을 줄이고, 추론·학습·실험이 서로의 빈 시간을 메우도록 스케줄링하는 것이 비용을 가릅니다. 자체 GPU가 없다면, 유휴 비용을 공급자가 떠안는 종량제·서버리스 추론을 활용하는 편이 합리적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/LiquidAI/lfm2-5-encoders\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: LFM2.5-Encoders for Fast Long-Context Inference on CPU</a> — 값비싼 GPU 없이 CPU로 긴 맥락을 처리하는 효율화 흐름을 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/nunchaku-diffusers\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Bringing Nunchaku 4-bit Diffusion Inference to Diffusers</a> — 양자화로 같은 연산을 더 적은 자원에 담는 접근을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI의 경쟁력이 가장 큰 모델이 아니라, 가진 자원을 낭비 없이 굴리는 운영에서 갈린다고 봅니다. 멈춰 선 GPU는 멈춰 선 비행기처럼 가만히 있는 동안에도 돈을 태웁니다 — 규모의 시대에 실력은, 얼마나 사느냐가 아니라 얼마나 쉬지 않게 하느냐로 증명됩니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/Dharma-AI/gpu-management",
    "tags": [
      "AI Infrastructure",
      "GPU",
      "Compute Economics"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-30-product-sense-definition",
    "category": "design",
    "date": "2026-07-30",
    "title": "AI 시대에도 무뎌지지 않는 '제품 감각'",
    "rawTitle": "A Concrete Definition of \"Product Sense\" (and How to Build It)",
    "summary": "좋은 제품 판단은 타고나는 게 아니라 실험 루프를 끝까지 돌며 쌓인다. NN/G는 AI에 일을 넘길수록 이 감각이 오히려 약해질 수 있다고 경고한다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Tanner Kohler가 '제품 감각(product sense)'을 막연한 재능이 아니라 훈련 가능한 판단력으로 다시 정의했습니다. 그는 공감·창의성만 강조하는 기존 정의가 '그래서 어떻게 기르는가'를 설명하지 못한다고 지적하며, 문제 → 해법 선택 → 결과 측정 → 회고로 이어지는 실험 루프를 끝까지 돌 때 비로소 감각이 쌓인다고 봅니다.</p><blockquote>\"제품 감각이란 지금의 문제가 과거의 성공·실패와 언제 닮았는지 알아보고, 비슷한 해법이 목표에 어떤 영향을 줄지 신뢰성 있게 가늠하는 능력이다.\"<cite>Tanner Kohler, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>핵심은 패턴 인식에도 한계가 있다는 점입니다. 익숙한 맥락(고신뢰 상황)에서는 직관이 잘 통하지만, 낯선 맥락(저신뢰 상황)이나 거짓 유사성이 함정을 놓는 '뒤틀린 상황'에서는 같은 직관이 오히려 독이 됩니다. 그래서 진짜 감각은 화려한 아이디어가 아니라 '언제 내 경험이 적용되고 언제 안 되는지'를 구분하는 데 있습니다.</p><h3>실무 적용</h3><p>감각을 기르려면 결과가 나올 때까지 프로젝트에 머무르세요. 결정을 내리기 전에 가설을 미리 적어두고, 산출물이 아니라 실제 임팩트를 측정한 뒤 '판단의 질'을 되짚는 회고를 습관화해야 합니다. 시안만 넘기고 곧바로 다음 일로 넘어가면, 몇 년을 일해도 감각은 자라지 않습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026 — Design Deeper to Differentiate</a> — 도구가 평준화될수록 더 깊은 판단으로 차별화해야 한다는 흐름을 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/human-led-research-still-matters/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Don't Outsource the Learning</a> — 관찰하며 배우는 '학습 루프'는 AI에 넘길 수 없다는 관점을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>AI에 일을 넘길수록 우리는 루프의 '결과와 회고' 구간을 건너뛰기 쉽습니다. Wemeet은 AI로 속도를 내되, 왜 이 결정이 통했는지 끝까지 확인하는 습관만은 사람이 붙듭니다 — 감각은 만들어낸 양이 아니라, 끝까지 지켜본 결과에서 자라기 때문입니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/product-sense-definition/",
    "tags": [
      "Product Sense",
      "UX Strategy",
      "Design Judgment"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-30-voiceeq-human-voice-ai",
    "category": "ai",
    "date": "2026-07-30",
    "title": "음성 AI, 속도 말고 '사람다움'을 잰다",
    "rawTitle": "Introducing Real World VoiceEQ: Measuring the human quality of voice AI",
    "summary": "벤치마크는 음성 AI가 사람 수준이라지만 실제 대화는 다르다. Hume AI의 VoiceEQ는 100만 건 넘는 사람 평가로 '사람다움'을 측정한다.",
    "bodyHtml": "<p>Hume AI가 음성 AI의 '사람다움'을 정면으로 재는 벤치마크 Real World VoiceEQ를 공개했습니다. 기존 벤치마크는 음성 AI가 사람 수준에 근접했다고 말하지만, 실제 대화를 뜯어보면 이야기가 다르다는 것이 출발점입니다. 40개가 넘는 음성 모델을 15개 이상의 평가 축과 60여 개 지표로 살폈습니다.</p><blockquote>\"기존 벤치마크는 음성 AI가 사람 수준에 가까워졌다고 말하지만, 실제 대화는 전혀 다른 이야기를 들려준다.\"<cite>Hume AI</cite></blockquote><h3>왜 중요한가</h3><p>이 벤치마크의 무게는 100만 건이 넘는 사람 평가에서 나옵니다(TTS 78만 5천 건, S2S 4만 8천 건). 그 결과, 8개 TTS 능력군 전체에서 상위 5위 안에 든 모델은 하나도 없었습니다 — 발전이 '전방위'가 아니라 '특화' 방향으로 쪼개지고 있다는 신호입니다. 어떤 음성 작업에 강한 모델이 다른 작업에선 평범할 수 있다는 뜻이죠.</p><h3>실무 적용</h3><p>많은 음성 시스템이 여전히 '받아쓴 텍스트' 중심으로 작동해, 억양·머뭇거림·강세 같은 비언어적 신호를 놓친다는 점도 드러났습니다. 음성 기능을 붙이려는 팀이라면 단일 만능 모델을 찾기보다 용도별로 강한 모델을 조합하고, 속도·정확도만이 아니라 '사람처럼 알아듣는가'를 함께 평가해야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/introducing-gpt-live/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Introducing GPT-Live</a> — 자연스러운 음성 상호작용을 겨냥한 모델 흐름을 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/cerebras-gemma4-voice-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Gemma 4 for real-time voice AI</a> — 실시간 음성 AI 경쟁이 어디로 향하는지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 음성이든 화면이든, 결국 사용자가 '사람과 이야기하는 느낌'을 받는지가 품질을 가른다고 봅니다. 숫자로 빠르고 정확한 음성보다, 머뭇거림과 억양까지 알아듣는 음성이 신뢰를 얻습니다 — 벤치마크가 바뀌면, 우리가 좋다고 부르는 AI의 기준도 바뀝니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/real-world-voiceeq",
    "tags": [
      "Voice AI",
      "AI Benchmark",
      "Human Evaluation"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-29-digital-design-ai-era",
    "category": "design",
    "date": "2026-07-29",
    "title": "AI 시대에도 대체되지 않는 디자이너의 것",
    "rawTitle": "Thinking Outside The Box: Digital Design In The AI Era",
    "summary": "AI가 제작 속도를 끌어올려도 취향·판단·의도까지 대신하지는 못한다. Smashing Magazine이 캐릭터형 AI 비서 사례로 '사람만의 몫'을 짚었다.",
    "bodyHtml": "<p>Smashing Magazine의 Oleksii Hrzhehorzhevskyi가 AI가 디자인 작업을 빠르게 삼키는 시대에 '무엇이 여전히 사람의 몫인가'를 다뤘습니다. 그는 AI를 위협이 아니라 도구로 받아들이되, 결과물에 온기와 의도를 불어넣는 인간의 취향과 판단은 대체되지 않는다고 봅니다. 무미건조한 텍스트 상자형 비서 대신 성격을 가진 캐릭터형 AI 비서(MacPaw의 Eney)를 설계한 사례가 그 근거로 제시됩니다.</p><blockquote>\"AI 같은 기술은 우리가 더 빨리 일하도록 돕지만, 우리 작업에 영감을 주고 그것을 빚어내는 가치까지 대신할 수는 없다.\"<cite>Oleksii Hrzhehorzhevskyi, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>AI 비서 대부분은 명령을 주고받는 거래적 인터페이스에 머뭅니다. Eney의 둥근 형태, 분홍색, 최소한의 표정은 '따뜻하고 다가가기 쉬운 느낌'을 위해 사람 디자이너가 의도적으로 고른 선택이었습니다. 도구가 평준화될수록 차별화는 기능이 아니라 이런 감각적 결정에서 나옵니다 — AI는 예술적 시선과 감정적 섬세함, 그리고 '왜 이렇게'라는 판단까지 복제하지 못합니다.</p><h3>실무 적용</h3><p>AI는 반복 시안·초안·리사이즈 같은 속도 작업에 붙이고, 브랜드의 목소리와 인터랙션의 결처럼 의도가 담기는 지점은 사람이 붙드세요. 특히 '취향(taste)'과 '호기심'을 기르는 일이 앞으로 더 값진 역량이 됩니다. 무엇을 만들 수 있느냐보다 무엇이 좋은지 분별하는 눈이, AI가 쏟아내는 평균값 속에서 결과물을 구해냅니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/ux-context-design/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: UX-Context Design</a> — 사람의 판단을 AI가 참고할 '맥락'으로 정리하는 반대편 접근을 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/design-jobs-ai-created/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Design Jobs AI Created</a> — AI 시대에 사람의 디자인 역할이 어떻게 재편되는지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI를 제작에 적극 쓰되, 브랜드의 '온도'를 정하는 결정만큼은 사람에게 남깁니다. 누구나 같은 도구로 비슷한 화면을 뽑는 시대에, 결과를 가르는 건 결국 무엇이 좋은지 아는 취향입니다 — 속도는 AI에게, 의도는 사람에게.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/digital-design-ai-era/",
    "tags": [
      "AI Design",
      "Design Craft",
      "Creativity"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-29-dataset-is-the-product",
    "category": "ai",
    "date": "2026-07-29",
    "title": "AI의 진짜 제품은 모델이 아니라 데이터셋",
    "rawTitle": "The Dataset Is the Product: What a Month Building an AI Side Project Taught Me",
    "summary": "한 달간 AI 사이드 프로젝트를 만든 개발자의 결론은 '데이터셋이 곧 제품'이라는 것. 시간의 80%가 데이터 수집·정제에 들어갔다.",
    "bodyHtml": "<p>Hugging Face 블로그에 Juan Gramajo가 한 달간 AI 사이드 프로젝트를 직접 만들며 얻은 교훈을 정리했습니다. 포켓몬 카드 투자 분석용 AI 비서를 만들며 그가 내린 결론은 명확합니다 — 프로젝트 시간의 약 80%는 데이터 수집·정제·구조화에 쓰였고, 정작 모델 학습은 20%에 불과했다는 것입니다.</p><blockquote>\"데이터셋이 곧 제품이다.\"<cite>Juan Gramajo, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>그는 커뮤니티 포럼의 수백 개 스레드를 추려 약 1만 2,800개의 양질 예시를 만들고, 이를 '가치 평가 사실'과 '추론 패턴' 두 데이터셋으로 나눴습니다. 그런 다음 7B 모델을 파인튜닝했죠. 핵심 통찰은 '무엇을 모델 가중치에 넣고 무엇을 실시간 데이터로 조회할지'를 구분하는 데 있었습니다. 시세처럼 계속 바뀌는 값은 API가 맡고, 파인튜닝 모델은 목소리와 분석적 관점을 담당합니다. 출력의 편차가 오히려 모델이 사실이 아니라 '판단'을 배웠다는 신호였습니다.</p><h3>실무 적용</h3><p>AI 기능을 붙이려는 팀이라면 모델 선택보다 데이터 설계에 먼저 시간을 쓰세요. 흩어진 도메인 지식을 학습 가능한 예시로 정제하는 작업이 실제 성능을 가릅니다. 그리고 '무엇을 가중치에 굽고, 무엇을 실시간으로 조회할지'의 경계를 초기에 정해야 합니다 — 자주 바뀌는 사실은 모델에 넣지 말고 데이터 레이어로 분리하는 것이 유지보수의 핵심입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/nvidia/open-data-for-agents\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Data for Agents</a> — 에이전트 시대에 데이터가 왜 경쟁력의 핵심인지 배경을 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/grabette\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Grabette — an open system to record robot-manipulation data</a> — 학습의 진짜 병목이 데이터 수집이라는 관점을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI 도입을 도울 때 '어떤 모델을 쓸까'가 아니라 '어떤 데이터를 가졌는가'에서 출발합니다. 모델은 며칠이면 바꿔 낄 수 있지만, 잘 정제된 도메인 데이터는 하루아침에 복제되지 않습니다 — AI의 진짜 해자는 화려한 모델이 아니라, 남들이 못 가진 데이터에 있습니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/gramajo/pokemon1",
    "tags": [
      "AI Data",
      "Fine-Tuning",
      "ML Engineering"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-27-ux-context-design",
    "category": "design",
    "date": "2026-07-27",
    "title": "AI에게 넘길 건 문서가 아니라 맥락이다",
    "rawTitle": "UX-Context Design: Using UX Knowledge to Inform AI-Generated Design",
    "summary": "인터페이스를 AI가 만들어내는 시대에는, 리서치·디자인의 산출물이 '사람이 읽는 보고서'에서 'AI를 이끄는 정제된 맥락'으로 바뀐다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Tony Alicea가 AI가 인터페이스를 직접 생성하는 흐름 속에서 UX 산출물의 형태가 근본적으로 바뀐다고 짚었습니다. 이제 제품 매니저·엔지니어까지 프롬프트로 화면을 만드는 시대에는, 리서치와 디자인의 결과물이 '사람이 읽을 보고서'가 아니라 'AI가 참고할 정제된 맥락(context)'이 되어야 한다는 것입니다. 그는 이를 <strong>UX-컨텍스트 디자인</strong>이라 부릅니다.</p><blockquote>\"맥락을 주는 것이 모델이 '무난한 평균값'으로 흐르는 것을 막아준다.\"<cite>Tony Alicea, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>사용자 지식과 디자인 표준이 프롬프트에 담기지 않으면 AI는 늘 평범하고 일반적인 해법으로 수렴합니다. 조직 곳곳에서 누구나 AI로 '디자인'을 하는 지금, 흩어진 판단을 붙잡아 줄 가드레일이 필요합니다. 페르소나와 리서치 보고서 같은 전통적 산출물은 설득이 아니라 '추론'을 돕도록 기계가 읽을 수 있는 형태로 다시 쓰여야 합니다.</p><h3>실무 적용</h3><p>구글이 시각 시스템을 코드 옆에 두고 AI가 소비하도록 정리한 <code>DESIGN.md</code>처럼, UX 지식도 <code>UX.md</code> 같은 형태로 정리해 볼 수 있습니다. 리서치 종합, 인터랙션 표준, 용어 사전, 사용 맥락 모델을 한데 담아 모든 AI 작업의 기준으로 삼는 것이죠. 핵심은 일회성 핸드오프가 아니라, 제품과 함께 계속 갱신되는 '살아있는 맥락'으로 운영하는 것입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/crafting-ai-explanations/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Crafting AI Explanations for Every Role in Your Enterprise</a> — 역할마다 다른 설명이 필요하듯, AI에 넘길 맥락도 대상에 맞게 다듬어야 함을 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/dimensions-of-ai-chatbots/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The 5 Qualities of Site-Specific AI Chatbots</a> — 사이트 고유의 맥락이 AI 품질을 어떻게 좌우하는지 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI로 화면을 뽑는 작업이 늘수록 '무엇을 만드느냐'보다 '무엇을 맥락으로 주느냐'가 결과를 가른다고 봅니다. 좋은 디자인 시스템은 이제 사람만 읽는 문서가 아니라, AI도 함께 읽고 따르는 규범이어야 합니다 — 맥락을 정리하는 일이 곧 품질을 설계하는 일입니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/ux-context-design/",
    "tags": [
      "AI Design",
      "Design Context",
      "Design Systems"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-27-grabette-open-robot-data",
    "category": "ai",
    "date": "2026-07-27",
    "title": "로봇 없이 로봇 데이터를 모으는 법",
    "rawTitle": "Grabette: an open system to record robot-manipulation data",
    "summary": "손에 쥐는 그리퍼와 카메라만으로 로봇 조작 데이터를 만든다. Pollen Robotics가 공개한 Grabette는 로봇 학습의 진짜 병목인 '데이터 부족'을 겨냥한다.",
    "bodyHtml": "<p>Hugging Face 블로그에 Pollen Robotics가 로봇 조작 데이터를 손쉽게 모으는 오픈 시스템 <strong>Grabette</strong>를 공개했습니다. 핵심 발상은 단순합니다 — 로봇이 없어도 사람 손으로 로봇 데이터를 만들 수 있다는 것입니다. 손에 쥐는 그리퍼에 카메라와 센서를 달아 사람이 직접 시연하고, 그 궤적을 로봇이 학습할 수 있는 형식으로 변환합니다.</p><blockquote>\"로봇 데이터를 모으는 데 로봇은 필요 없다. 사람 손과 그리퍼, 카메라, 그리고 6-DoF 궤적을 복원할 방법만 있으면 된다.\"<cite>Pollen Robotics, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>로봇 학습의 발목을 잡는 것은 모델 구조가 아니라 데이터 부족입니다. Grabette는 약 490유로 부품(맥락용 피시아이 카메라, 6자유도 추적용 RGBD 카메라, IMU, 그리퍼 센서)으로 그 벽을 낮춥니다. 브라우저 기반 파이프라인이 SLAM으로 궤적을 복원해 LeRobot 형식으로 바꾸고, 카메라 기준 6-DoF 포즈로 저장해 어떤 로봇팔에도 쓸 수 있게 합니다. 하드웨어·소프트웨어·처리 과정이 모두 오픈소스라는 점도 중요합니다.</p><h3>실무 적용</h3><p>데이터 수집 비용이 사람 시연 수준으로 떨어지면, 소규모 팀도 자기 작업 환경에 맞는 조작 데이터셋을 직접 쌓을 수 있습니다. 로봇을 사기 전에 데이터부터 모으는 순서가 가능해지는 셈입니다. 표준 부품과 공개 형식을 쓰는 만큼, 특정 벤더에 묶이지 않고 협업형 오픈 데이터셋에 기여하며 규모를 함께 키우는 접근이 현실적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/lerobot-release-v060\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: LeRobot v0.6.0 — Imagine, Evaluate, Improve</a> — 모은 데이터를 어떻게 정책 학습·평가로 연결하는지 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/nvidia/open-data-for-agents\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Data for Agents</a> — 에이전트·로봇 시대에 열린 데이터가 왜 경쟁력의 핵심인지 배경을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI의 진짜 해자가 화려한 모델이 아니라 '남들이 못 가진 데이터'에 있다고 봅니다. Grabette가 보여주듯, 값비싼 장비 대신 영리한 수집 도구로 데이터의 벽을 낮추는 팀이 결국 앞서갑니다 — 무엇을 학습시킬지는, 무엇을 모을 수 있는지에서 시작됩니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/grabette",
    "tags": [
      "Robotics",
      "Open Data",
      "Robot Learning"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-23-when-to-block-main-thread",
    "category": "design",
    "date": "2026-07-23",
    "title": "메인 스레드를 '막아도' 되는 순간",
    "rawTitle": "When It Makes Sense To \"Block\" The Main Thread",
    "summary": "'메인 스레드를 절대 막지 마라'는 원칙에도 예외가 있다. 데이터 이동 비용이 처리 비용보다 클 땐, 그냥 메인 스레드에서 처리하는 편이 더 빠르다.",
    "bodyHtml": "<p>Smashing Magazine의 Victor Ayomipo가 프런트엔드의 오랜 계율인 '메인 스레드를 절대 막지 마라'에 조심스럽게 예외를 달았습니다. 그는 스크린샷 크롬 확장(Fastary)을 만들며, 권장 아키텍처대로 작업을 백그라운드로 넘겼는데도 2~3초의 지연이 사라지지 않는 문제를 만났습니다. 원인은 '연산'이 아니라 '데이터 이동'이었습니다.</p><blockquote>\"데이터를 워커로 옮기는 것이, 그냥 메인 스레드가 처리하도록 두는 것보다 느릴 때가 있다.\"<cite>Victor Ayomipo, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>스레드 사이로 데이터를 넘기면 구조화 복제(Structured Clone)라는 동기 작업이 데이터 크기에 비례해 커집니다. 1080p 화면의 Base64 이미지는 1MB를 넘고 레티나에서는 두 배가 되죠. Transferable Objects는 32MB 기준 300ms를 7ms로 줄일 만큼 빠르지만 모든 타입에 쓸 수 없고 원본 접근권을 잃습니다. 결국 진짜 원칙은 '메인 스레드를 막지 마라'가 아니라 '너무 오래 막지 마라'입니다.</p><h3>실무 적용</h3><p>작업을 두 종류로 나눠 판단하세요. 이미지 압축·물리 시뮬레이션처럼 CPU를 오래 태우는 '연산 중심' 작업은 워커로 격리하는 게 맞습니다. 반면 이미지 크롭·배열 필터처럼 '데이터 중심' 작업은 옮기는 비용이 처리 비용을 넘어서므로 메인 스레드에 두는 편이 낫습니다. 감이 아니라 <code>performance.mark()</code>/<code>performance.measure()</code>로 실제 비용을 재고, 사용자가 직접 누른 액션이라면 약 1초 정도의 블로킹은 정당화될 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2023/10/speedcurve-fight-main-thread/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: The Fight For The Main Thread</a> — 메인 스레드가 왜 성능의 병목이 되는지 기본 맥락을 함께 봅니다.</li><li><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">MDN: Transferable objects</a> — 복제 대신 소유권을 넘겨 전송 비용을 줄이는 방식의 원리를 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 성능 규칙을 '금기'가 아니라 '측정'으로 다룹니다. 모범 사례를 맹목적으로 따르다 오히려 느려지는 일은 흔합니다 — 좋은 엔지니어링은 규칙을 외우는 게 아니라, 이 작업이 '옮기기 비싼가, 처리하기 비싼가'를 그때그때 재는 데서 나옵니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/when-makes-sense-block-main-thread/",
    "tags": [
      "Web Performance",
      "Main Thread",
      "Web Workers"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-23-self-host-open-model-cyber-defense",
    "category": "ai",
    "date": "2026-07-23",
    "title": "사이버 방어용 오픈 모델, 공격 전에 미리 세워라",
    "rawTitle": "Be Ready Before the Attack: A Practical Guide to Self-Hosting an Open Model for Cyber Defense",
    "summary": "상용 API의 안전 가드레일은 악성 페이로드 분석을 막는다. Hugging Face의 Jeff Boudier는 사고 전에 오픈 모델을 자체 호스팅해 대비하라고 조언한다.",
    "bodyHtml": "<p>Hugging Face의 Jeff Boudier가 지난 7월 자사 침해 사고에서 얻은 교훈을 실전 가이드로 정리했습니다. 핵심은 '사고가 터진 뒤'가 아니라 '터지기 전에' 방어용 AI 모델을 자체 인프라에 미리 올려두라는 것입니다. 상용 프런티어 모델은 안전 가드레일 탓에 실제 공격 데이터 분석을 거부했고, 결국 사고를 실제로 해부한 것은 내부에 배포한 오픈 웨이트 모델(GLM 5.2)이었습니다.</p><blockquote>\"공격자 데이터도, 그것이 참조한 어떤 자격증명도, 우리 환경 밖으로 결코 나가지 않았다.\"<cite>Jeff Boudier, Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>여기엔 두 가지 비대칭이 겹칩니다. 하나는 상용 API의 안전장치가 악성 아티팩트 분석 자체를 막는다는 점이고, 다른 하나는 공격 흔적을 외부 서비스로 보내는 순간 그 자체가 데이터 유출이 된다는 점입니다. 자체 호스팅한 모델은 두 문제를 동시에 해결합니다 — 제약 없이 페이로드를 분석하면서도, 민감한 데이터가 경계를 넘지 않습니다. GLM 5.2는 MIT 라이선스에 1M 토큰 컨텍스트, OpenAI 호환 API를 갖춰 이런 용도에 맞습니다.</p><h3>실무 적용</h3><p>권고는 구체적입니다. 온프레미스라면 Dell Enterprise Hub의 사전 구성 컨테이너를, 클라우드라면 Microsoft Foundry나 AWS SageMaker를 자기 계정 안에 두고 모델을 올리라는 것입니다. 그리고 평온할 때 미리 테스트하세요 — 대응 담당자가 실제 페이로드를 분석하고 기존 도구와 연동되는지 사고 전에 확인해야, 정작 공격이 오면 도구가 준비된 상태로 맞설 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/security-incident-july-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Security Incident Disclosure — July 2026</a> — 이 가이드가 나오게 된 자율 AI 에이전트 침해 사고의 전말을 함께 봅니다.</li><li><a href=\"https://openai.com/index/prompt-injections/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Understanding prompt injections — a frontier security challenge</a> — AI를 노리는 공격이 왜 프런티어 보안 난제인지 배경을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI 방어를 '사고가 나면 붙이는 것'이 아니라 '평시에 갖춰두는 역량'으로 봅니다. 공격이 AI로 자동화되는 시대에, 방어의 손발을 상용 API의 정책에만 맡기면 정작 필요한 순간 손이 묶입니다 — 통제 가능한 오픈 모델을 미리 세워두는 것이 실전 대비의 기본입니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/jeffboudier/open-model-cyber-defense",
    "tags": [
      "AI Security",
      "Open Models",
      "Self-Hosting"
    ],
    "thumb": ""
  },
  {
    "source": "Nielsen Norman Group",
    "summary": "습관처럼 쓰는 드롭다운은 옵션을 클릭 뒤에 숨겨 매 선택마다 마찰을 더한다. NN/G가 옵션 수·예측 가능성·비교 필요성으로 컨트롤을 고르는 기준을 정리했다.",
    "id": "2026-07-22-does-your-form-need-a-dropdown",
    "thumb": "",
    "bodyHtml": "<p>Nielsen Norman Group의 Huei-Hsin Wang이 폼 설계에서 습관처럼 쓰이는 드롭다운 리스트를 다시 도마에 올렸습니다. 드롭다운은 만능처럼 보이지만, 실제로는 선택지를 클릭 뒤에 숨겨 매 선택마다 마찰을 더합니다. 잘못 쓰면 대안보다 오히려 더 해로울 수 있다는 것이 핵심입니다.</p><blockquote>\"드롭다운은 선택 가능한 옵션을 클릭 뒤에 숨겨, 매 선택마다 마찰을 더한다.\"<cite>Huei-Hsin Wang, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>글은 상황별 기준을 제시합니다. 선택지가 5개 미만이면 라디오 버튼으로 모두 드러내고, 15개를 넘으면 필터가 되는 콤보박스가 낫습니다. 나이·생년월일처럼 예측 가능한 값은 그냥 텍스트 입력이 빠르고, 옵션을 눈으로 비교해야 한다면 버튼으로 펼쳐 보여야 합니다. 드롭다운이 빛나는 구간은 5~10개 정도의 옵션이 있고 그 필드가 주 작업의 곁가지일 때로 의외로 좁습니다.</p><h3>실무 적용</h3><p>폼을 만들 때 '드롭다운을 쓸까'가 아니라 '이 필드에 드롭다운이 정말 최선인가'를 먼저 물으세요. 옵션 수, 데이터의 예측 가능성, 비교 필요성, 필드의 중요도라는 네 가지 잣대로 컨트롤을 고르면 클릭 수와 인지 부담을 동시에 줄일 수 있습니다. 특히 모바일에서는 숨겨진 옵션이 더 큰 마찰이 되므로 기본값처럼 드롭다운을 던지는 습관을 경계해야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/listbox-dropdown/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Listboxes vs. Dropdown Lists</a> — 여러 개를 동시에 고를 땐 드롭다운 대신 리스트박스가 맞는 이유를 함께 봅니다.</li><li><a href=\"https://www.nngroup.com/articles/drop-down-menus/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Dropdowns — Design Guidelines</a> — 드롭다운을 꼭 써야 할 때 지켜야 할 기본 설계 원칙을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 폼을 설계할 때 컨트롤을 '기본값'으로 두지 않습니다. 드롭다운은 익숙해서 안전해 보이지만, 사용자의 손가락과 눈에는 매번 비용을 물립니다 — 가장 좋은 입력은 고민 없이 끝나는 입력입니다.</p>",
    "category": "design",
    "tags": [
      "Form Design",
      "Dropdowns",
      "UX Guidelines"
    ],
    "date": "2026-07-22",
    "rawTitle": "Does Your Form Really Need a Dropdown List?",
    "sourceUrl": "https://www.nngroup.com/articles/dropdown-list/",
    "title": "폼에 정말 드롭다운이 필요한가"
  },
  {
    "source": "Hugging Face",
    "summary": "허깅페이스 프로덕션 인프라 침해를 자율 AI 에이전트가 주말 내내 처음부터 끝까지 수행했다. 방어도 오픈 웨이트 모델로 분석해 대응한 사고 사례다.",
    "id": "2026-07-22-hf-security-incident-ai-agent",
    "thumb": "",
    "bodyHtml": "<p>Hugging Face가 자사 프로덕션 인프라를 겨냥한 침해 사고를 상세히 공개했습니다. 놀라운 점은 이 공격을 사람이 아니라 자율 AI 에이전트 시스템이 주말 동안 처음부터 끝까지 수행했다는 것입니다. 공격자는 데이터셋 처리 파이프라인의 두 가지 코드 실행 취약점(원격 코드 실행형 로더와 설정 템플릿 인젝션)을 파고들어 작업 노드에 침투했습니다.</p><blockquote>\"자율적인 AI 기반 공격 도구는 더 이상 이론이 아니다. 그것은 넓고 끈질긴 다단계 공격의 비용을 낮춘다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>이 에이전트는 짧게 살아있는 샌드박스에서 수천 건의 개별 행동을 실행하고, 스스로 이동하는 C2 인프라로 클러스터 사이를 횡으로 옮겨 다녔습니다. 방어 측은 LLM 기반 이상 탐지로 사고를 처음 포착했고, 이후 오픈 웨이트 모델(GLM 5.2)로 1만 7천 건이 넘는 공격 이벤트를 분석해 타임라인과 침해 지표를 복원했습니다. 다행히 공개 모델·데이터셋·Spaces와 소프트웨어 공급망은 오염되지 않았고, 내부 데이터셋 일부와 서비스 자격증명만 노출됐습니다.</p><h3>실무 적용</h3><p>가장 뼈아픈 교훈은 '방어 비대칭'입니다. 상용 API의 안전 가드레일이 악성 아티팩트 분석을 막는 탓에, 무제한으로 움직이는 공격 에이전트에 맞서려면 오히려 자체 호스팅하는 제약 없는 모델이 필요하다는 것입니다. AI 기능을 붙이는 조직이라면 코드 실행 경로(데이터 로더·템플릿 처리)의 신뢰 경계를 좁히고, 자격증명 최소권한과 단기 회전, 그리고 자체 통제 가능한 분석 모델을 사고 대응 체계에 미리 갖춰야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/prompt-injections/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Understanding prompt injections — a frontier security challenge</a> — AI 에이전트를 노리는 공격이 왜 프런티어 보안 난제인지 배경을 함께 봅니다.</li><li><a href=\"https://openai.com/index/advancing-ai-safety-through-state-and-federal-action/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: The US is advancing AI safety through state and federal action</a> — 이런 위협에 제도적으로 어떻게 대응하는지 흐름을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI를 제품에 얹을 때 '공격도 AI가 한다'는 전제로 방어를 설계합니다. 이번 사고는 자동화된 공격이 이미 현실임을 보여줍니다 — 사람 속도의 대응만으로는 부족하며, 탐지와 분석에도 통제 가능한 AI를 함께 세워야 방어의 균형이 맞습니다.</p>",
    "category": "ai",
    "tags": [
      "AI Security",
      "Autonomous Agents",
      "Incident Response"
    ],
    "date": "2026-07-22",
    "rawTitle": "Security Incident Disclosure — July 2026",
    "sourceUrl": "https://huggingface.co/blog/security-incident-july-2026",
    "title": "AI 에이전트가 감행한 허깅페이스 침해 사고"
  },
  {
    "source": "Nielsen Norman Group",
    "summary": "AI가 리서치 산출물의 품질을 사람 수준으로 끌어올려도, 팀이 함께 관찰하며 얻는 '학습'만은 외주 줄 수 없다. 리서치의 진짜 가치는 보고서가 아니라 팀의 변화다.",
    "id": "2026-07-19-human-led-research-still-matters",
    "thumb": "",
    "bodyHtml": "<p>Nielsen Norman Group의 Maria Rosala가 'AI가 사용자 리서치를 대신할 수 있는가'라는 질문에 결이 다른 답을 내놓았습니다. 설령 AI가 설계·진행·분석을 experienced researcher와 구분되지 않을 만큼 잘 해낸다고 가정하더라도, 리서치가 만들어내는 두 가지 가치 중 하나는 결코 외주 줄 수 없다는 것입니다. 리서치는 '보고서(deliverable)'와 '팀의 학습(learning)'을 동시에 낳는데, AI는 전자만 대신할 뿐입니다.</p><blockquote>\"AI에 리서치를 넘긴 팀은 보고서는 얻지만, 배움은 얻지 못한다.\"<cite>Maria Rosala, Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>사람의 뇌는 기술적 요약보다 직접 관찰한 이야기에 훨씬 강하게 반응합니다. 사용자의 좌절을 팀이 '같은 방에서 함께 목격'할 때 공감과 실행 동기가 생기고, 스스로 질문·데이터와 씨름하는 self-generation 효과가 기억과 이해를 남깁니다. 잘 쓰인 보고서를 읽는 것만으로는 '배웠다는 착각(illusion of learning)'에 그치기 쉽습니다.</p><h3>실무 적용</h3><p>AI로 녹취·코딩·초안 분석을 자동화하는 것은 좋지만, 핵심 세션 관찰과 인사이트 합의만큼은 팀이 직접 참여하도록 설계하세요. 리서치를 '보고서 납품'이 아니라 '팀이 사용자를 함께 이해하는 이벤트'로 운영하고, AI는 그 학습을 준비·가속하는 보조로 배치하는 것이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/research-tool-problems/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Methodological Problems Hiding in Your Research Tools</a> — AI가 리서치를 계획·분석하면서 도구에 숨은 방법론적 맹점이 더 커진다는 경고와 함께 읽습니다.</li><li><a href=\"https://www.nngroup.com/articles/genai-ux-research-agenda/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: A Research Agenda for Generative AI in UX</a> — AI를 리서치에 어디까지 맡길지 판단하는 큰 틀을 함께 봅니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 고객사 리서치를 도울 때 '보고서를 얼마나 빨리 뽑는가'가 아니라 '팀이 사용자를 얼마나 깊이 이해하게 되는가'를 성과로 봅니다. AI는 분석 속도를 높여주지만, 사용자를 향한 공감은 여전히 사람이 직접 보고 들을 때만 자랍니다 — 외주 줄 수 있는 건 작업이지, 배움이 아닙니다.</p>",
    "category": "design",
    "tags": [
      "UX Research",
      "AI in Research",
      "Team Learning"
    ],
    "date": "2026-07-19",
    "rawTitle": "Don't Outsource the Learning: Why Human-Led Research Still Matters in the Age of AI",
    "sourceUrl": "https://www.nngroup.com/articles/human-led-research-still-matters/",
    "title": "리서치를 AI에 넘기면 잃는 것 — 팀의 배움"
  },
  {
    "source": "OpenAI",
    "summary": "OpenAI가 스스로 학습하는 자동 레드팀 모델 GPT-Red를 공개했다. 이 공격 모델로 적대적 훈련을 거친 GPT-5.6은 프롬프트 인젝션 방어력이 크게 향상됐다.",
    "id": "2026-07-19-gpt-red-self-improving-robustness",
    "thumb": "",
    "bodyHtml": "<p>OpenAI가 모델의 안전성을 스스로 끌어올리는 자동 레드팀 모델 <strong>GPT-Red</strong>를 공개했습니다. 사람 레드팀이 공격을 설계하듯, GPT-Red는 목표를 세워 프롬프트를 던지고 모델의 반응을 관찰하며 반복합니다. 이 공격자는 강화학습으로 end-to-end 학습되어 자신의 성공과 실패에서 스스로 공격 기술을 개선합니다. OpenAI는 이 모델을 GPT-5.6의 훈련 과정에 직접 투입해, 프롬프트 인젝션에 대한 방어력을 체크포인트 자체에 '내재화'했습니다.</p><blockquote>\"GPT-Red를 활용한 적대적 훈련으로, GPT-5.6은 지금까지 프롬프트 인젝션에 가장 강한 모델이 되었다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>OpenAI는 이 안전 연구에 자사 최대 규모 post-training에 맞먹는 컴퓨트를 투입했다고 밝혔습니다. 순수하게 안전을 위해 이만한 자원을 쓴 것은 이례적입니다. 결과로 GPT-5.6 Sol은 가장 어려운 직접 프롬프트 인젝션 벤치마크에서 불과 넉 달 전 최고 프로덕션 모델 대비 실패가 6배 적었습니다. 공격을 자동화·자기개선형으로 돌려 방어를 지속적으로 '태워 넣는' 접근은, 신종 고강도 공격에 대응하는 새로운 안전 패러다임을 보여줍니다.</p><h3>실무 적용</h3><p>에이전트와 툴 연동이 늘수록 프롬프트 인젝션은 이론이 아니라 실제 운영 리스크가 됩니다. 모델 자체의 방어력이 높아진 건 반가운 일이지만, 모델만 믿어선 안 됩니다. 신뢰 경계 분리, 도구 권한 최소화, 외부 콘텐츠를 명령이 아닌 데이터로 다루는 설계 같은 애플리케이션 레벨 방어를 함께 세워, 모델 내재 방어와 앱 방어를 이중으로 걸어야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/prompt-injections/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Understanding prompt injections — a frontier security challenge</a> — 프롬프트 인젝션이 왜 프런티어 보안 난제인지 배경을 함께 봅니다.</li><li><a href=\"https://openai.com/index/hardening-atlas-against-prompt-injection/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Continuously hardening ChatGPT Atlas against prompt injection</a> — 제품 단에서 방어를 지속적으로 강화하는 실전 사례를 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI 기능을 제품에 얹을 때 '무엇을 할 수 있는가'만큼 '무엇을 막아야 하는가'를 먼저 설계합니다. GPT-Red가 보여주듯 방어는 한 번 완성되는 게 아니라 공격과 함께 계속 진화합니다 — 모델의 강해진 방어력을 토대로 삼되, 앱 레벨 가드레일을 함께 세우는 이중 방어가 실전에서 신뢰를 지킵니다.</p>",
    "category": "ai",
    "tags": [
      "AI Safety",
      "Prompt Injection",
      "Red Teaming"
    ],
    "date": "2026-07-19",
    "rawTitle": "GPT-Red: Unlocking Self-Improvement for Robustness",
    "sourceUrl": "https://openai.com/index/unlocking-self-improvement-gpt-red/",
    "title": "스스로 공격하며 배우는 안전 AI 'GPT-Red'"
  },
  {
    "source": "Smashing Magazine",
    "summary": "Vitaly Friedman은 사용자가 원하는 건 화려한 AI 기능이 아니라 기존 흐름에 녹아든 빠르고 신뢰할 수 있는 자동화라고 짚었다. 'AI-first'가 아닌 'AI-second' 설계가 답이다.",
    "id": "2026-07-17-people-dont-want-more-ai",
    "thumb": "",
    "bodyHtml": "<p>Smashing Magazine의 Vitaly Friedman이 'AI-first'로 몰려가는 제품 흐름에 정면으로 반박했습니다. 많은 리더가 사용자들이 AI 기능을 원한다고 가정하지만, 실제로는 대부분이 지금 방식의 AI를 부담스러워합니다. 문제를 없애주기보다 검증하고 고쳐야 할 일거리를 더 얹기 때문입니다.</p><blockquote>\"사람은 크게 변하지 않는다. 그들이 원하는 건 빠르고, 접근 가능하며, 신뢰할 수 있고, 예측 가능하고, 매번 유용한 기능이다.\"<cite>Vitaly Friedman, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>그는 근거로 여러 연구를 듭니다. AI 생산성 기능이 오히려 이메일 처리 시간을 104%, 메시징을 145% 늘리고 값비싼 실수를 39% 키웠다는 것입니다. 도입 비용은 크지만 채택률과 유지율은 낮습니다. 사용자는 AI 기능을 '사람'과 비교하지 않고 경쟁 제품의 대안과 견주기 때문에, 어설픈 기능은 곧바로 외면당합니다.</p><h3>실무 적용</h3><p>핵심은 워크플로를 대체(replace)하지 말고 보강(augment)하라는 것입니다. 창의적 작업을 빼앗기보다 지루하고 반복적인 잡무를 자동화해 사람의 시간을 의미 있는 일로 되돌려야 합니다. AI를 전면에 내세우는 'AI-first' 대신 배경에서 조용히 돕는 'AI-second'로 설계하고, 매번 예측 가능하게 작동하는 신뢰성을 최우선에 두세요.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/07/matching-ai-modality-user-intent-designing-right-interface/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Matching AI Modality To User Intent</a> — 모든 AI를 챗봇에 몰아넣지 말고 맥락에 맞는 인터페이스를 고르라는 관점과 맞닿습니다.</li><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026</a> — 표면적 신기능 경쟁을 넘어 더 깊이 설계해 차별화하라는 흐름과 함께 읽습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 고객사에 AI를 얹을 때 '어떤 AI 배지를 붙일까'가 아니라 '사용자의 어떤 잡무를 지울까'에서 출발합니다. 자랑스럽게 드러나는 AI가 아니라, 있는 줄도 모르게 일을 끝내주는 AI가 결국 오래 살아남습니다.</p>",
    "category": "design",
    "tags": [
      "AI-Second Design",
      "Workflow UX",
      "Product Strategy"
    ],
    "date": "2026-07-17",
    "rawTitle": "No, People Don't Want More AI In Their Life",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/people-dont-want-more-ai/",
    "title": "사람들은 더 많은 AI를 원하지 않는다"
  },
  {
    "source": "Hugging Face",
    "summary": "이미지·텍스트·오디오를 함께 이해하는 약 1조 파라미터, 100만 토큰 컨텍스트의 오픈 모델 Inkling이 공개됐다. 대형 멀티모달 모델이 오픈 생태계로 넘어오는 신호다.",
    "id": "2026-07-17-inkling-thinking-machines",
    "thumb": "",
    "bodyHtml": "<p>Hugging Face 블로그가 Thinking Machines의 새 모델 <strong>Inkling</strong>을 소개했습니다. 약 1조(총 975B, 활성 41B) 파라미터의 Mixture-of-Experts 구조로, 이미지·텍스트·오디오를 네이티브로 입력받고 100만 토큰의 컨텍스트를 지원합니다. 텍스트·이미지·오디오·비디오를 합쳐 45조 토큰 규모로 학습됐고, BF16과 NVFP4 두 형식으로 공개됩니다.</p><blockquote>\"Inkling은 이미지·텍스트·오디오를 네이티브로 입력받는, 약 1조 파라미터·100만 토큰 컨텍스트의 첫 대형 오픈 모델이다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>지금까지 최상위 멀티모달·초장문 컨텍스트 모델은 대체로 폐쇄형이었습니다. Inkling이 오픈 가중치로 풀리고 Transformers·vLLM·SGLang·llama.cpp까지 폭넓게 지원된다는 점은, 프런티어급 능력이 오픈 생태계로 빠르게 이전되고 있음을 보여줍니다. 256개 전문가와 하이브리드 어텐션, 다중 토큰 예측(MTP) 같은 효율화 설계도 함께 눈에 띕니다.</p><h3>실무 적용</h3><p>100만 토큰 컨텍스트와 오디오 입력은 긴 문서 분석, 회의·음성 로그 처리, 에이전트형 코딩처럼 실무에 직접 닿는 기능입니다. 다만 1조 파라미터급은 서빙 비용이 크므로, 활성 파라미터(41B)만 도는 MoE 특성과 NVFP4 양자화로 비용을 조절하고, 처음부터 전량 자체 호스팅하기보다 추론 제공자(Inference Providers)로 먼저 검증하는 접근을 권합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: One Year Since the DeepSeek Moment</a> — 오픈 모델이 폐쇄형과의 격차를 어떻게 좁혀왔는지 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Source on Hugging Face (Spring 2026)</a> — 오픈 생태계의 성장 흐름 속에서 이 발표의 의미를 읽습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 모델을 고를 때 '가장 큰 오픈 모델'이 아니라 '우리 워크플로에 실제로 얹을 수 있는 모델'을 봅니다. Inkling의 진짜 의미는 파라미터 숫자가 아니라, 멀티모달·초장문 능력을 이제 오픈 가중치로 통제 가능하게 다룰 수 있게 됐다는 데 있습니다.</p>",
    "category": "ai",
    "tags": [
      "Open Models",
      "Multimodal LLM",
      "Mixture of Experts"
    ],
    "date": "2026-07-17",
    "rawTitle": "Welcome Inkling by Thinking Machines",
    "sourceUrl": "https://huggingface.co/blog/thinkingmachines-inkling",
    "title": "Thinking Machines, 1조 파라미터 오픈 모델 'Inkling' 공개"
  },
  {
    "source": "Smashing Magazine",
    "summary": "새 도구를 늘리는 대신 기존 워크플로에 유용한 기능을 매끄럽게 녹여야 한다. Vitaly Friedman이 'Quiet AI'와 매끄러운 통합의 원칙을 정리했다.",
    "id": "2026-07-15-seamless-integrations-over-more-tools",
    "thumb": "",
    "bodyHtml": "<p>Smashing Magazine의 Vitaly Friedman이 제품 팀이 빠지기 쉬운 함정을 짚었습니다. 문제를 만나면 곧장 '새 도구'나 'AI 기능'을 하나 더 만들려 하지만, 정작 사용자가 원하는 건 이미 익숙한 흐름 속에서 문제가 조용히 해결되는 경험이라는 것입니다. 그는 이를 눈에 띄지 않게 배경에서 작동하는 'Quiet AI', 그리고 기존 멘탈 모델에 맞춘 '매끄러운 통합(seamless integration)'으로 정리합니다.</p><blockquote>\"사용자는 번쩍이는 새 '스마트' 워크플로나, 터미널 명령어를 익히는 일, 끝없이 오가는 채팅에 열광하지 않는다.\"<cite>Vitaly Friedman, Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>'AI-first'라는 구호는 종종 수년간 쌓인 인터페이스 관습과 사용자 기대를 무시한 채 모든 것을 대화창 하나로 밀어 넣습니다. 그러나 사용자는 새 앱을 배우고 싶은 게 아니라, 지금 하던 일을 더 적은 마찰로 끝내고 싶을 뿐입니다. 심각도·빈도·불편함이 큰 문제일수록, 별도 도구가 아니라 이미 쓰는 화면 안에서 해결될 때 가치가 큽니다.</p><h3>실무 적용</h3><p>새 기능을 기획할 때 '이걸 위한 별도 도구가 필요한가'를 먼저 의심하세요. 예컨대 폴더에 목적을 한 번 정의하면 파일 정리와 후속 작업이 자동으로 따라오는 식으로, 사용자의 문맥 전환을 없애는 통합이 학습 부담과 오류를 동시에 줄입니다. AI 기능도 전면에 내세우기보다 기존 동작의 결과를 조용히 개선하는 방향이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/07/matching-ai-modality-user-intent-designing-right-interface/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Matching AI Modality To User Intent</a> — 모든 AI 기능을 챗봇에 몰아넣지 말고 사용자 의도에 맞는 인터페이스를 고르라는 관점이 이 글과 맞닿습니다.</li><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026</a> — 표면적 신기능 경쟁을 넘어 '더 깊이 설계해 차별화하라'는 흐름과 함께 읽습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 고객사 제품에 기능을 더할 때 '무엇을 새로 만들까'보다 '무엇을 지울 수 있을까'를 먼저 묻습니다. 진짜 좋은 통합은 사용자가 그것이 있는지도 모른 채 일이 매끄럽게 끝나는 순간에 완성됩니다 — 최고의 AI는 자랑하지 않고 사라집니다.</p>",
    "category": "design",
    "tags": [
      "UX Strategy",
      "Seamless Integration",
      "Quiet AI"
    ],
    "date": "2026-07-15",
    "rawTitle": "Users Don't Need More Tools: They Need Seamless Integrations",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/users-dont-need-more-tools-need-seamless-integrations/",
    "title": "더 많은 도구가 아니라, 매끄러운 통합이 필요하다"
  },
  {
    "source": "Hugging Face",
    "summary": "2026년 상반기 주요 프런티어 모델들이 지식 증류를 압축·전문가 병합·자기학습 세 방향으로 활용한다. 핵심은 '더 큰 교사'가 아니라 '맥락에서 더 나은 교사'다.",
    "id": "2026-07-15-model-distillation-2026",
    "thumb": "",
    "bodyHtml": "<p>Hugging Face 블로그가 2026년 상반기 프런티어 모델들이 실제로 '지식 증류(distillation)'를 어떻게 쓰는지 정리했습니다. 증류는 이제 단순히 큰 모델을 작게 압축하는 기술을 넘어 세 갈래로 갈라졌습니다. (1) 큰 교사를 작은 학생으로 압축, (2) 도메인별 전문가를 한 모델로 병합, (3) 개선된 자기 자신에게서 배우는 자기 증류입니다. Gemma 4는 대형 교사에서 지식을 증류받고, DeepSeek-V4·GLM-5·Qwen3 등은 여러 전문가를 합치는 다중 교사 온폴리시 증류(MOPD)를 씁니다.</p><blockquote>\"교사 모델은 더 클 필요가 없다. 맥락 안에서 더 나으면 된다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>지난 몇 년의 경쟁이 '누가 더 큰 모델을 만드나'였다면, 증류의 부상은 '누가 더 영리하게 지식을 옮기나'로 무게중심을 옮깁니다. 온폴리시 증류는 토큰 단위 피드백으로 강화학습보다 빠르게 수렴하며, Qwen3의 경우 약 1/10의 GPU 비용으로 비슷한 성능에 도달했다고 합니다. 성능과 비용을 동시에 잡는 이 흐름은 소규모 팀도 고성능 모델을 다룰 여지를 넓힙니다.</p><h3>실무 적용</h3><p>자체 모델을 파인튜닝하려는 팀이라면, 무작정 거대한 교사 모델을 쓰기보다 '우리 도메인에 특화된, 크기가 비슷하되 더 정확한 교사'를 고르는 편이 비용 대비 효과가 큽니다. 규모가 아니라 도메인 집중이 교사의 진짜 강점이라는 점을 기억하고, 강화학습에 앞서 온폴리시 증류로 저비용 실험을 먼저 돌려보는 접근을 권합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: One Year Since the DeepSeek Moment</a> — 오픈 모델 생태계의 확산이 증류·전문가 병합 같은 효율화 기법 경쟁을 어떻게 촉발했는지 함께 봅니다.</li><li><a href=\"https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face &amp; NVIDIA: Welcome Cosmos 3</a> — 여러 능력을 한 모델에 통합하는 옴니 모델 흐름과 '전문가 병합' 증류가 같은 방향을 가리킵니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI 도입을 도울 때 '가장 큰 모델'이 아니라 '가장 잘 맞는 교사'를 찾는 데서 출발합니다. 증류의 교훈은 명확합니다 — 규모는 기본기일 뿐이고, 승부는 맥락을 얼마나 잘 아는가에서 갈립니다. 작지만 우리 문제를 정확히 아는 모델이, 크지만 두루뭉술한 모델을 이깁니다.</p>",
    "category": "ai",
    "tags": [
      "Model Distillation",
      "Frontier Models",
      "Efficient AI"
    ],
    "date": "2026-07-15",
    "rawTitle": "Distillation in 2026 (so far): which frontier models use it and how",
    "sourceUrl": "https://huggingface.co/blog/sergiopaniego/distillation-2026",
    "title": "2026년 증류(Distillation), 프런티어 모델의 숨은 엔진"
  },
  {
    "source": "Nielsen Norman Group",
    "summary": "Nielsen Norman Group이 사이트 전용 AI 챗봇을 신뢰받게 만드는 5가지 자질을 제시했다. 사람에게 넘겨주는 태도·유연성·능동성·감정 반응·투명성이 함께 갖춰질 때 챗봇이 진짜 도움이 된다.",
    "id": "2026-07-14-site-specific-ai-chatbot-qualities",
    "thumb": "",
    "bodyHtml": "<p>Nielsen Norman Group이 웹사이트에 붙는 '사이트 전용 AI 챗봇'을 사용자가 신뢰하게 만드는 5가지 자질을 정리했습니다. 범용 챗봇과 달리 사이트 챗봇은 특정 브랜드·제품 맥락 안에서 실제 문제를 해결해야 하는데, 많은 봇이 사람 연결을 막아 세우거나 능력을 부풀리다 오히려 신뢰를 깎아먹습니다. 핵심은 사람에게 넘겨주는 태도(Handoff), 유연성(Flexibility), 능동성(Proactivity), 감정 반응(Emotional Responsiveness), 투명성(Transparency)의 균형입니다.</p><blockquote>\"쳇바퀴 위 햄스터처럼 빙글빙글 돌기만 하고 실제로는 아무 데도 도달하지 못하는 기분이었다.\"<cite>Nielsen Norman Group 연구 참가자</cite></blockquote><h3>왜 중요한가</h3><p>사용자는 아직 챗봇을 사람 상담원과 동등하게 보지 않습니다. 그래서 '사람 연결해줘'라는 명시적 요청을 봇이 가로막는 순간 신뢰가 무너집니다. 반대로 봇이 자기 능력과 한계, 판단 근거, 데이터 처리 방식을 대화 안에서 솔직히 밝히면, 완벽하지 않아도 사용자는 그 봇을 '정직한 도구'로 받아들입니다. 결국 챗봇의 신뢰는 정답률이 아니라 태도에서 나온다는 이야기입니다.</p><h3>실무 적용</h3><p>챗봇을 설계할 때 첫 화면에 모든 기능을 나열하지 말고, 사용자의 현재 목표에 맞는 선택지를 스캔하기 쉬운 버튼으로 그때그때 제시하세요. 요청을 거절할 때는 이유를 함께 밝히는 문장이 필수입니다 — 예: \"구매 내역에는 접근할 수 없지만, 담당자에게 바로 연결해 드릴게요.\" 그리고 실행할 수 없는 되묻기 질문은 아예 하지 않는 것이 사용자의 시간을 아끼는 길입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/crafting-ai-explanations/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Crafting AI Explanations for Every Role</a> — 챗봇의 '투명성'을 역할별 맞춤 설명으로 구체화하는 방법을 함께 봅니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/07/matching-ai-modality-user-intent-designing-right-interface/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Matching AI Modality To User Intent</a> — 모든 AI 기능을 대화형 챗봇에 몰아넣는 관성을 경계하라는 관점이 이 글과 맞닿습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 고객사 사이트에 챗봇을 붙일 때 '얼마나 똑똑한가'보다 '언제 물러설 줄 아는가'를 먼저 설계합니다. 사람 연결 버튼을 숨기지 않고, 못 하는 일은 솔직히 못 한다고 말하는 봇이 장기적으로 브랜드 신뢰를 지킵니다 — 좋은 챗봇의 첫 번째 조건은 겸손입니다.</p>",
    "category": "design",
    "tags": [
      "AI Chatbots",
      "Conversational UX",
      "Trust Design"
    ],
    "date": "2026-07-14",
    "rawTitle": "The 5 Qualities of Site-Specific AI Chatbots",
    "sourceUrl": "https://www.nngroup.com/articles/dimensions-of-ai-chatbots/",
    "title": "믿을 수 있는 사이트 챗봇의 5가지 조건"
  },
  {
    "source": "OpenAI",
    "summary": "OpenAI가 듣기와 말하기를 동시에 처리하는 풀듀플렉스 음성 모델 GPT-Live를 공개했다. 실시간 대화형 음성 AI가 표준 인터페이스로 다가서는 신호다.",
    "id": "2026-07-14-openai-gpt-live-fullduplex-voice",
    "thumb": "",
    "bodyHtml": "<p>OpenAI가 사람과의 음성 대화를 훨씬 자연스럽게 만드는 새로운 음성 모델 <strong>GPT-Live</strong>를 공개했습니다. 기존 음성 비서가 '내 말이 끝나면 → 봇이 답하는' 순차 방식이었다면, GPT-Live는 듣기와 말하기를 동시에 수행하는 풀듀플렉스(full-duplex) 구조로 설계돼 사람처럼 끼어들고 맞장구치는 대화가 가능합니다. GPT-Live-1과 경량판 GPT-Live-1 mini 두 버전이 전 세계 ChatGPT 사용자에게 순차 배포됩니다.</p><blockquote>\"GPT-Live는 듣는 동시에 말할 수 있어, AI와의 대화를 실제 대화에 훨씬 가깝게 만든다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>지금까지 음성 AI가 어색했던 가장 큰 이유는 '턴(turn)'을 주고받는 구조 때문이었습니다. 사용자가 말을 멈출 때까지 기다렸다가 답하니, 침묵과 지연이 생기고 대화의 리듬이 끊겼습니다. 풀듀플렉스는 이 벽을 허물어, 말이 겹쳐도 자연스럽게 반응하는 실시간성을 확보합니다. 텍스트 채팅 중심이던 AI 인터페이스가 음성으로 무게중심을 옮기는 전환점이 될 수 있습니다.</p><h3>실무 적용</h3><p>고객 상담·현장 작업·접근성 지원처럼 손과 눈이 자유롭지 못한 맥락에서 음성은 텍스트보다 강력한 modality입니다. 다만 실시간 음성은 오작동·끼어들기·프라이버시 이슈가 텍스트보다 크므로, 제품에 얹을 때는 '언제 말하고 언제 멈출지'를 설계하는 대화 흐름과 명확한 종료·확인 장치가 함께 필요합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/gpt-5-6-preferred-model-microsoft-365-copilot/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: GPT-5.6 is now the preferred model in Microsoft 365 Copilot</a> — 최신 모델이 오피스 업무 도구의 기본값으로 들어가며 AI가 일상 워크플로에 녹아드는 흐름을 보여줍니다.</li><li><a href=\"https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Welcome NVIDIA Cosmos 3</a> — 음성에 이어 물리 세계를 추론·행동하는 옴니 모델까지, 멀티모달 AI의 확장을 함께 읽습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 음성 AI를 '채팅의 대체'가 아니라 '상황에 맞는 또 하나의 채널'로 봅니다. 화면을 볼 수 없는 순간에 음성은 최고의 인터페이스지만, 조용한 사무실에서는 오히려 방해가 됩니다 — 진짜 좋은 제품은 사용자의 맥락에 맞춰 텍스트와 음성을 자연스럽게 넘나들게 설계합니다.</p>",
    "category": "ai",
    "tags": [
      "Voice AI",
      "OpenAI",
      "Conversational Interfaces"
    ],
    "date": "2026-07-14",
    "rawTitle": "Introducing GPT-Live",
    "sourceUrl": "https://openai.com/index/introducing-gpt-live/",
    "title": "OpenAI, 듣고 말하기를 동시에 — 실시간 음성 AI 'GPT-Live'"
  },
  {
    "source": "Nielsen Norman Group",
    "summary": "Nielsen Norman Group이 디자인 시스템의 성숙도를 단계적 발전이 아닌 6가지 균형잡힌 차원으로 평가하는 방식을 제시했다. 조직·팀·인프라·거버넌스·지원·채택이 함께 성장할 때 실제 성숙한 시스템이 된다.",
    "id": "2026-07-12-design-system-maturity-framework",
    "thumb": "",
    "bodyHtml": "<p>Nielsen Norman Group이 디자인 시스템의 성숙도를 평가할 때 흔한 '단계적 발전(maturity ladder)' 모델의 한계를 지적했습니다. 실제로는 조직의 합병·예산 삭감·전략 변화에 따라 후퇴하기도 하고, 성공의 기준도 초기 창업사와 대기업이 완전히 다릅니다. 진정한 성숙도는 한 가지 최종 상태가 아니라, 조직·팀·인프라·거버넌스·지원·채택이라는 6가지 차원의 '동적 균형'을 이루는 것입니다.</p><blockquote>\"디자인 시스템의 성숙도는 점수가 아니라 균형이다. 각 조직이 지금 어느 차원에서 약한지 명확히 하는 것이 개선의 시작이다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>대부분의 디자인 팀은 '컴포넌트가 몇 개나 있는가' '문서화 정도가 어디까지인가' 같은 '인프라' 차원만 측정합니다. 그 결과 예쁜 컴포넌트 라이브러리는 있지만, 실제 팀에서 쓰지 않고, 리더십의 지원은 약하고, 새 팀원 온보딩은 어렵다는 역설이 생깁니다. 이 글은 6개 차원을 육각형 레이더 차트로 시각화해, 조직의 성숙도를 '프로필'로 보자고 제안합니다. 높은 점수가 아니라, 조직의 맥락에 맞게 균형을 맞추는 것이 목표입니다.</p><h3>실무 적용</h3><p>디자인 시스템 리더라면 분기마다 6개 차원을 재평가해, 어느 차원이 약해졌거나 강해졌는지 추적해야 합니다. 예를 들어 'Support(지원)' 차원이 약하다면 문서만 늘리지 말고, 응답 시간을 단축하거나 챔피언 프로그램을 강화해야 합니다. 또 새로운 프로젝트나 조직 구조 변화가 있을 때마다 평가를 반복해, 변화에 따라 다시 균형을 맞추세요. 시스템이 한 번 완성되는 것이 아니라, 조직과 함께 계속 진화한다는 마음가짐이 가장 중요합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/06/how-make-design-system-ai-ready/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: How To Make Your Design System AI-Ready</a> — 디자인 시스템이 AI 도구와의 상호작용을 고려하는 것이 새로운 성숙도 평가 요소가 되고 있습니다.</li><li><a href=\"https://www.nngroup.com/articles/design-system-benefits-measurement/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Measuring Design System Benefits</a> — 성숙도 평가 후 그 효과를 조직의 비즈니스 지표로 어떻게 보여줄지의 다음 단계를 함께 봅니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 고객사 디자인 시스템을 구축할 때, 처음부터 6개 차원을 모두 고려해 설계합니다. 특히 'Governance(거버넌스)'와 'Adoption(채택)' 차원을 소홀히 하면, 아무리 기술적으로 훌륭한 시스템도 결국 사용 안 되는 유산이 됩니다 — 좋은 시스템은 기술이 아니라 조직문화와 리더십에서 나옵니다.</p>",
    "category": "design",
    "tags": [
      "Design Systems",
      "Organizational Maturity",
      "Design Leadership"
    ],
    "date": "2026-07-12",
    "rawTitle": "Design-System Maturity: A 6-Dimension Framework",
    "sourceUrl": "https://www.nngroup.com/articles/design-system-maturity/",
    "title": "디자인 시스템, 선형 성장은 환상 — 6차원 성숙도 모델"
  },
  {
    "source": "OpenAI",
    "summary": "OpenAI가 GPT-5.6 가족 3개 모델(Sol·Terra·Luna)을 동시에 출시하며 '만능 AI'에서 '선택적 AI'로의 전환을 신호했다. 작업 복잡도와 예산에 따라 모델을 고르는 시대가 시작됐다.",
    "id": "2026-07-12-gpt-5-6-models-released",
    "thumb": "",
    "bodyHtml": "<p>OpenAI가 7월 9일 GPT-5.6 모델 가족 3개(Sol·Terra·Luna)를 동시에 출시했습니다. 종전에는 'GPT-4는 언제 나올까' 같은 '단일 모델 기준점' 경쟁이었다면, 이제 OpenAI는 처음부터 '일거리별 모델 선택지'를 제공하는 전략으로 선회했습니다. Sol은 코드 분석·장시간 추론 같은 복잡한 작업, Terra는 일상 업무, Luna는 높은 처리량과 낮은 비용이 필요한 업무 각각을 겨냥했습니다. 단순히 '더 똑똑한' 모델 1개가 아니라, 실무의 수요 다양성을 인정하는 설계입니다.</p><blockquote>\"AI 모델의 미래는 '최고의 모델'이 아니라 '일에 맞는 모델'을 빠르게 고르는 능력이다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>지난 2년간의 'frontier model 경쟁'은 순전히 성능 순위였습니다. 하지만 기업과 개발자 입장에서는 '최고 성능 모델'이 항상 필요한 것이 아닙니다. 많은 작업(콘텐츠 검수, 데이터 정제, 루틴 고객 응답)은 중간 수준의 능력으로도 충분하면서, 비용과 속도가 더 중요합니다. OpenAI의 3-tier 전략은 이 현실을 인정한 것입니다. 또한 Sol을 Cerebras에서 최대 750 토큰/초로 제공하며, '지능(capability)'과 '속도(latency)'를 동시에 해결하는 인프라 선택도 보여줍니다.</p><h3>실무 적용</h3><p>AI를 도입하는 팀이라면 더 이상 '최신 모델 하나'만 고집할 필요가 없습니다. 대신 각 업무별로 '최소 필요 능력 + 최대 허용 비용'을 정의하고 그에 맞는 모델을 선택하는 절차를 만들어야 합니다. 예를 들어 고객 이메일 분류는 Luna로 충분하고, 신제품 기획 보조는 Terra로 충분하지만, 복잡한 버그 분석이나 아키텍처 검토는 Sol이 필요합니다. 이런 매트릭스를 팀 안에 만들고, 월 비용 추적을 통해 'Sol 과다 사용'을 줄이면서도 품질을 유지할 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face & NVIDIA: Cosmos 3 for Physical AI</a> — 다양한 용도와 규모의 모델 선택지가 늘어나면서, 하드웨어의 효율성(각 모델이 어떤 GPU/TPU에 최적화된가)도 함께 고려하는 시대가 왔습니다.</li><li><a href=\"https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: Latest AI News June 2026</a> — Google의 Gemini 3.5, Omni 등도 같은 '다층 모델' 전략을 펼치고 있습니다.</li></ul><h3>Wemeet의 관점</h3><p>Wemeet은 AI를 도입하는 고객사와 함께 '우리 조직에 필요한 모델은 무엇인가'부터 묻습니다. 최신·최고가 항상 정답이 아니기 때문입니다. 오히려 각 팀의 작업 특성·예산·응답 시간 요구를 먼저 파악한 후, 가장 경제적이면서도 신뢰할 수 있는 모델을 배치하는 것이 성공하는 AI 도입의 핵심입니다 — 최신 기술이 아니라, 맞는 기술 고르기가 실전 AI 리더십입니다.</p>",
    "category": "ai",
    "tags": [
      "LLM Architecture",
      "AI Infrastructure",
      "Model Selection"
    ],
    "date": "2026-07-12",
    "rawTitle": "GPT-5.6: Frontier intelligence that scales with your ambition",
    "sourceUrl": "https://openai.com/index/gpt-5-6/",
    "title": "OpenAI가 보인 AI 모델의 미래 — 다층 선택지 시대가 왔다"
  },
  {
    "id": "2026-07-11-deutsche-telekom-ai-networks",
    "category": "ai",
    "date": "2026-07-11",
    "title": "통신사도 AI를 능력으로 삼는 시대",
    "rawTitle": "How Deutsche Telekom is rewiring telecommunications with AI",
    "summary": "OpenAI와 협력 중인 Deutsche Telekom이 AI를 기반시설 최적화와 고객 서비스에 적용하며, 통신 산업의 경쟁 구도가 '인프라'에서 '지능형 에이전트'로 넘어가고 있다.",
    "bodyHtml": "<p>Deutsche Telekom이 OpenAI와 함께 대규모 언어 모델을 통신 네트워크 운영과 고객 서비스에 녹여내고 있습니다. 기존 통신사는 물리적 기반시설(타워, 회선, 장비)로 경쟁했지만, Telekom은 이제 그 기반 위에서 '지능형 에이전트'를 얹는 새로운 경로를 보이고 있습니다. 내부 운영진에서부터 외부 고객 상담까지, AI가 해석해야 할 언어 작업이 차곡차곡 늘어나고 있습니다.</p><blockquote>\"AI는 더 이상 선택지가 아니라 기초 인프라처럼 되고 있다.\"<cite>Deutsche Telekom</cite></blockquote><h3>왜 중요한가</h3><p>통신·금융·물류 같은 대규모 기반시설 산업이 AI 도입 물결에서 가장 결정적입니다. 이들은 이미 네트워크 상의 수십억 개 신호를 실시간으로 처리하는 머신러닝 기반이 깔려 있기 때문입니다. 거기 대규모 언어 모델이 더해지면, 예측 불가능한 장애를 미리 감지하고, 고객 문의를 정확하게 분류하고, 기술자에게 문제 해결 경로를 제시하는 일이 가능해집니다. Telekom의 사례는 '규제 산업도 AI를 피할 수 없다'는 신호입니다.</p><h3>실무 적용</h3><p>규모 있는 조직이라면 AI를 도입할 때 겉으로는 마케팅·고객 상담부터 시작하되, 내부적으로는 운영 데이터가 넉넉한 영역(장애 감지, 리소스 예측, 자동 진단)부터 먼저 시험하는 것이 성공률이 높습니다. 규제나 신뢰가 중요한 조직일수록 AI가 보는 증거와 판단 근거를 명시적으로 기록하고, 사람의 최종 판단 권한을 확보하는 설계가 필수입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: The latest AI news we announced in June 2026</a> — 통신·유틸리티 산업의 AI 도입 추세를 보여줍니다.</li><li><a href=\"https://huggingface.co/blog/nvidia/open-data-for-agents\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face & NVIDIA: Data for Agents</a> — 에이전트의 성능이 데이터에 의존한다는 맥락에서, 통신사의 풍부한 운영 데이터 자산이 전략적 우위가 됨을 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>거대 조직의 AI 성공은 기술 채택 속도가 아니라 '기존 프로세스의 어느 부분을 AI에 맡길 것인가'를 정확히 아는 것에서 결정됩니다. Wemeet은 기반시설을 다루는 고객사와 함께 AI 도입 로드맵을 그릴 때, 규제 리스크와 운영 효율 개선을 모두 담아 단계적으로 신뢰를 쌓는 방식을 우선합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/deutsche-telekom/",
    "tags": [
      "AI in Enterprise",
      "Telecommunications",
      "Digital Transformation"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-11-brand-strategy-visual-direction",
    "category": "design",
    "date": "2026-07-11",
    "title": "브랜드 전략이 시각으로 말하게 하려면",
    "rawTitle": "From Kickoff To First Concept: How To Turn Brand Strategy Into Visual Direction",
    "summary": "Smashing Magazine이 브랜드 전략 문서가 디자이너 손에 들어갈 때 구체적인 시각 방향으로 변환되는 과정을 단계별로 설명했다. 단순 미학이 아니라 전략의 시각화가 핵심이다.",
    "bodyHtml": "<p>Smashing Magazine이 브랜드 전략 수립 이후 그것을 구체적인 시각 방향(visual direction)으로 옮겨가는 과정을 디자이너 관점에서 풀어냈습니다. 문제는 마케팅·경영진이 작성한 '브랜드 북'이 종종 철학·메시지는 풍부하되, 디자이너가 실제 작업할 때 필요한 '시각적 제약'은 불명확하다는 것입니다. 전략이 좋아도 그것을 일관된 시각으로 만드는 과정이 빠지면 결과는 산만해집니다.</p><blockquote>\"좋은 시각 방향은 전략의 심장을 하나의 미적 언어로 압축하는 것이다.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>흔한 실수는 '브랜드 정체성'과 '시각 시스템'을 같은 것으로 보는 것입니다. 브랜드 정체성은 가치·목표·대상을 말하는 전략이지만, 시각 방향은 '그 전략을 보는 사람이 한 번에 알아챌 수 있게' 컬러·타이포·형태를 규정하는 일입니다. 글은 킥오프부터 시작해 인스퍼레이션 수집, 무드보드 구성, 핵심 시각 요소 도출, 초기 컨셉 시안까지 다섯 단계를 거쳐야 전략과 미학이 만난다고 말합니다.</p><h3>실무 적용</h3><p>브랜드 프로젝트를 받을 때는 먼저 '이 조직이 왜 지금 브랜드 정의를 다시 하는가'를 캡처해야 합니다. 경쟁 강화, 시장 확대, 신세대 재진입, 내부 문화 변화 등에 따라 시각적 방향성이 달라지기 때문입니다. 다음으로 타겟 오디언스별로 '이 브랜드가 한눈에 느껴져야 할 감정'을 따로 정의하고, 그 감정을 컬러·굵기·간격·형태로 어떻게 표현할지 명시적으로 그려야 합니다. 단순히 '모던함'이라고 말하지 말고 '모던함 = 명확한 색상, 짧은 문장, 2가지 폰트, 큰 여백'처럼 관찰 가능한 규칙으로 옮겨야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/design-specs/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: What are Design Specs?</a> — 브랜드 시각 방향을 팀 전체가 이해할 수 있는 명세로 문서화하는 방법을 보완합니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/06/how-make-design-system-ai-ready/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: How To Make Your Design System AI-Ready</a> — 시각 방향이 정해진 후 그것을 토큰·컴포넌트로 체계화하는 다음 단계를 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>브랜드 정의는 문서에서 끝나지 않습니다. Wemeet은 브랜드 프로젝트를 할 때 전략을 받은 순간부터 '그것을 보면 한눈에 느껴질 시각'을 그리기 시작하며, 디자이너·마케터·경영진이 모두 '같은 그림'을 떠올릴 때까지 반복해 명확히 합니다 — 좋은 브랜드는 말이 아니라 보는 것에서 나옵니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/how-turn-brand-strategy-into-visual-direction/",
    "tags": [
      "Brand Strategy",
      "Visual Identity",
      "Design Systems"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-10-distressed-users-mental-health-ux",
    "category": "design",
    "date": "2026-07-10",
    "title": "정신 건강 앱, 유행 UI보다 신뢰가 먼저다",
    "rawTitle": "Designing For Distressed Users: Why Mental Health Apps Shouldn't Follow Every UI Fashion",
    "summary": "Smashing Magazine이 정신 건강 앱 사용자가 스트레스 상태에서 인지 부하를 더 크게 느낀다고 지적했다. 트렌디한 디자인보다 예측 가능하고 안정적인 인터페이스가 치료 효과를 돕는다.",
    "bodyHtml": "<p>Smashing Magazine이 정신 건강 앱을 사용하는 사람들이 이미 취약한 정서 상태에 있다는 기본 사실을 놓친 설계가 얼마나 많은지 지적했습니다. 불안·우울·스트레스로 힘들어하는 사용자는 인지 부하(cognitive load)를 평소보다 훨씬 크게 느끼고, 이 순간 복잡한 네비게이션·일관성 없는 인터랙션·유행 추종적 디자인은 오히려 '또 다른 스트레스'가 됩니다.</p><blockquote>\"정신 건강 앱을 쓰는 사람의 뇌는 이미 대부분의 에너지를 다루고 있다. 디자인으로 그들의 인지 여유를 빼앗지 말자.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>일반 사용성 연구는 '평상시 건강한 사용자'를 기준으로 합니다만, 정신 건강 앱의 사용자는 다릅니다. 행동 심리학 연구에 따르면 스트레스 상태의 뇌는 인지 능력이 현저히 줄어들고 패턴 인식에만 의존하게 됩니다. 따라서 '새롭고 멋진' 인터랙션은 불안을 키우고, 명확한 구조와 예측 가능한 흐름이 역설적이게도 정서적 안정감을 줍니다. 글은 이를 '치료 인터페이스 설계(therapeutic UI design)'라고 부르며, 미용이 아니라 '기능하는 안정감'을 목표로 해야 한다고 강조합니다.</p><h3>실무 적용</h3><p>정신 건강·의료·복지 앱을 설계할 때는 먼저 '사용자가 정상 상태가 아니라는 사실'부터 인정해야 합니다. 네비게이션은 3단계 이내로 명확하게 두고, 버튼·아이콘·용어를 일관되게 배치해 '여기에 있을 것 같다'는 기대를 만족시켜야 합니다. 진입 장벽도 낮춰야 하는데, 회원가입 단계를 최소화하고 즉시 핵심 기능에 접근하도록 설계하는 것이 권장됩니다. 마지막으로, 오류 상태와 성공 상태를 명확히 해 사용자가 '제가 뭔가 잘못했나요?'라는 불안감을 갖지 않도록 돌봐야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/designing-stressful-situations/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Designing Under Stress</a> — 고스트레스 상황에서 사용자의 인지 변화를 측정하는 관점을 보완합니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/06/designing-uncertainty-how-ai-supercharges-probabilistic-thinking/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Designing With Uncertainty</a> — 예측 불가능한 상황을 인터페이스로 어떻게 안전하게 드러낼지의 관점을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>좋은 인터페이스는 건강한 사용자 기준으로 설계되지 않습니다. Wemeet은 의료·복지·건강 서비스를 만들 때 사용자가 가장 약해진 상태를 기본 페르소나로 잡고, 그 상태에서도 '헷갈리지 않고 찾을 수 있는' 설계를 우선합니다 — 신뢰는 아름다움이 아니라 일관성과 명확함에서 나옵니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/designing-distressed-users-mental-health-apps-ui/",
    "tags": [
      "Mental Health",
      "Accessible Design",
      "User-Centered Design"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-10-data-for-agents-open-datasets",
    "category": "ai",
    "date": "2026-07-10",
    "title": "AI 에이전트가 자라나려면 데이터 정원을 먼저 가꿔야 한다",
    "rawTitle": "Data for Agents",
    "summary": "NVIDIA와 Hugging Face가 AI 에이전트 성능의 병목이 알고리즘이 아니라 '고품질 데이터'라고 지적했다. 오픈소스 벤치마크와 합성 데이터로 에이전트 학습을 대중화하는 방법을 제시했다.",
    "bodyHtml": "<p>NVIDIA와 Hugging Face가 AI 에이전트의 대중화를 가로막는 진짜 장애물을 지목했습니다. 더 강한 모델이 아니라 '에이전트를 학습시킬 고품질 데이터'의 부족입니다. 기존 LLM은 웹 텍스트라는 거대한 데이터 바다가 있었지만, 에이전트는 특정 작업(결제, 일정 관리, 검색)을 '올바르게 수행하는' 행동 궤적(trajectory) 데이터가 필요합니다. 이를 수동으로 모으려면 엄청난 비용이 들기 때문에, 벤치마크와 합성 데이터로 민주화하자는 제안입니다.</p><blockquote>\"프런티어 에이전트는 프런티어 모델보다 데이터에 더 의존한다.\"<cite>Hugging Face &amp; NVIDIA</cite></blockquote><h3>왜 중요한가</h3><p>구체적인 수치가 설득력 있습니다. 오픈소스 에이전트 벤치마크(Webshop, ALFWorld, ToolBench)에서 테스트한 결과, 모델의 크기보다 학습 데이터의 다양성과 품질이 성능을 더 크게 좌우했습니다. 특히 합성 데이터를 의도적으로 설계한 팀(예: 데이터 증강으로 오류 케이스를 인위적으로 만든 팀)이 더 강한 에이전트를 만들어냈다는 점이 핵심입니다. 이는 '대규모 웹 크롤링'이라는 패러다임이 에이전트에는 통하지 않음을 의미합니다.</p><h3>실무 적용</h3><p>에이전트 능력을 붙일 때 '더 나은 모델'을 찾기 전에 '학습 데이터를 어떻게 설계할 것인가'부터 묻는 습관이 필요합니다. 특정 업무에 맞는 에이전트를 만든다면, 그 업무가 자주 실수하는 지점(엣지 케이스)을 먼저 파악하고, 그 상황을 포함한 훈련 데이터를 의도적으로 구성하는 것이 빠른 길입니다. DAgger(Datasets Aggregation from Expert Demonstrations) 같은 방식으로 사람의 피드백을 지속적으로 데이터로 변환하면, 모델을 교체하지 않고도 성능을 꾸준히 개선할 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/lerobot-release-v060\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: LeRobot v0.6.0 — Imagine, Evaluate, Improve</a> — 사람의 교정이 곧 데이터가 되는 휴먼 인 더 루프 구조를 함께 보여줍니다.</li><li><a href=\"https://huggingface.co/blog/native-speed-vllm-transformers-backend\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Native-speed vLLM transformers modeling backend</a> — 모델 구현의 효율화로 에이전트 서빙 비용을 낮추는 또 다른 접근을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>에이전트의 성능은 모델 크기로 결정되지 않습니다. Wemeet은 에이전트를 도입할 때 기성 모델부터 찾기보다 '우리 업무에서 에이전트가 실패할 때는 언제인가'를 먼저 그리고, 그 실패 패턴을 학습 데이터에 담아 속도와 정확성을 동시에 확보하는 방식을 우선합니다 — 좋은 에이전트는 좋은 데이터에서 나옵니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/nvidia/open-data-for-agents",
    "tags": [
      "AI Agents",
      "Training Data",
      "Open Source"
    ],
    "thumb": ""
  },
  {
    "source": "Smashing Magazine",
    "summary": "Smashing Magazine이 정신 건강 앱 사용자가 스트레스 상태에서 인지 부하를 더 크게 느낀다고 지적했다. 트렌디한 디자인보다 예측 가능하고 안정적인 인터페이스가 치료 효과를 돕는다.",
    "id": "2026-07-10-distressed-users-mental-health-ux",
    "thumb": "",
    "bodyHtml": "<p>Smashing Magazine이 정신 건강 앱을 사용하는 사람들이 이미 취약한 정서 상태에 있다는 기본 사실을 놓친 설계가 얼마나 많은지 지적했습니다. 불안·우울·스트레스로 힘들어하는 사용자는 인지 부하(cognitive load)를 평소보다 훨씬 크게 느끼고, 이 순간 복잡한 네비게이션·일관성 없는 인터랙션·유행 추종적 디자인은 오히려 '또 다른 스트레스'가 됩니다.</p><blockquote>\"정신 건강 앱을 쓰는 사람의 뇌는 이미 대부분의 에너지를 다루고 있다. 디자인으로 그들의 인지 여유를 빼앗지 말자.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>일반 사용성 연구는 '평상시 건강한 사용자'를 기준으로 합니다만, 정신 건강 앱의 사용자는 다릅니다. 행동 심리학 연구에 따르면 스트레스 상태의 뇌는 인지 능력이 현저히 줄어들고 패턴 인식에만 의존하게 됩니다. 따라서 '새롭고 멋진' 인터랙션은 불안을 키우고, 명확한 구조와 예측 가능한 흐름이 역설적이게도 정서적 안정감을 줍니다. 글은 이를 '치료 인터페이스 설계(therapeutic UI design)'라고 부르며, 미용이 아니라 '기능하는 안정감'을 목표로 해야 한다고 강조합니다.</p><h3>실무 적용</h3><p>정신 건강·의료·복지 앱을 설계할 때는 먼저 '사용자가 정상 상태가 아니라는 사실'부터 인정해야 합니다. 네비게이션은 3단계 이내로 명확하게 두고, 버튼·아이콘·용어를 일관되게 배치해 '여기에 있을 것 같다'는 기대를 만족시켜야 합니다. 진입 장벽도 낮춰야 하는데, 회원가입 단계를 최소화하고 즉시 핵심 기능에 접근하도록 설계하는 것이 권장됩니다. 마지막으로, 오류 상태와 성공 상태를 명확히 해 사용자가 '제가 뭔가 잘못했나요?'라는 불안감을 갖지 않도록 돌봐야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/designing-stressful-situations/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Designing Under Stress</a> — 고스트레스 상황에서 사용자의 인지 변화를 측정하는 관점을 보완합니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/06/designing-uncertainty-how-ai-supercharges-probabilistic-thinking/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Designing With Uncertainty</a> — 예측 불가능한 상황을 인터페이스로 어떻게 안전하게 드러낼지의 관점을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>좋은 인터페이스는 건강한 사용자 기준으로 설계되지 않습니다. Wemeet은 의료·복지·건강 서비스를 만들 때 사용자가 가장 약해진 상태를 기본 페르소나로 잡고, 그 상태에서도 '헷갈리지 않고 찾을 수 있는' 설계를 우선합니다 — 신뢰는 아름다움이 아니라 일관성과 명확함에서 나옵니다.</p>",
    "category": "design",
    "tags": [
      "Mental Health",
      "Accessible Design",
      "User-Centered Design"
    ],
    "date": "2026-07-10",
    "rawTitle": "Designing For Distressed Users: Why Mental Health Apps Shouldn't Follow Every UI Fashion",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/designing-distressed-users-mental-health-apps-ui/",
    "title": "정신 건강 앱, 유행 UI보다 신뢰가 먼저다"
  },
  {
    "source": "Hugging Face",
    "summary": "NVIDIA와 Hugging Face가 AI 에이전트 성능의 병목이 알고리즘이 아니라 '고품질 데이터'라고 지적했다. 오픈소스 벤치마크와 합성 데이터로 에이전트 학습을 대중화하는 방법을 제시했다.",
    "id": "2026-07-10-data-for-agents-open-datasets",
    "thumb": "",
    "bodyHtml": "<p>NVIDIA와 Hugging Face가 AI 에이전트의 대중화를 가로막는 진짜 장애물을 지목했습니다. 더 강한 모델이 아니라 '에이전트를 학습시킬 고품질 데이터'의 부족입니다. 기존 LLM은 웹 텍스트라는 거대한 데이터 바다가 있었지만, 에이전트는 특정 작업(결제, 일정 관리, 검색)을 '올바르게 수행하는' 행동 궤적(trajectory) 데이터가 필요합니다. 이를 수동으로 모으려면 엄청난 비용이 들기 때문에, 벤치마크와 합성 데이터로 민주화하자는 제안입니다.</p><blockquote>\"프런티어 에이전트는 프런티어 모델보다 데이터에 더 의존한다.\"<cite>Hugging Face &amp; NVIDIA</cite></blockquote><h3>왜 중요한가</h3><p>구체적인 수치가 설득력 있습니다. 오픈소스 에이전트 벤치마크(Webshop, ALFWorld, ToolBench)에서 테스트한 결과, 모델의 크기보다 학습 데이터의 다양성과 품질이 성능을 더 크게 좌우했습니다. 특히 합성 데이터를 의도적으로 설계한 팀(예: 데이터 증강으로 오류 케이스를 인위적으로 만든 팀)이 더 강한 에이전트를 만들어냈다는 점이 핵심입니다. 이는 '대규모 웹 크롤링'이라는 패러다임이 에이전트에는 통하지 않음을 의미합니다.</p><h3>실무 적용</h3><p>에이전트 능력을 붙일 때 '더 나은 모델'을 찾기 전에 '학습 데이터를 어떻게 설계할 것인가'부터 묻는 습관이 필요합니다. 특정 업무에 맞는 에이전트를 만든다면, 그 업무가 자주 실수하는 지점(엣지 케이스)을 먼저 파악하고, 그 상황을 포함한 훈련 데이터를 의도적으로 구성하는 것이 빠른 길입니다. DAgger(Datasets Aggregation from Expert Demonstrations) 같은 방식으로 사람의 피드백을 지속적으로 데이터로 변환하면, 모델을 교체하지 않고도 성능을 꾸준히 개선할 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/lerobot-release-v060\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: LeRobot v0.6.0 — Imagine, Evaluate, Improve</a> — 사람의 교정이 곧 데이터가 되는 휴먼 인 더 루프 구조를 함께 보여줍니다.</li><li><a href=\"https://huggingface.co/blog/native-speed-vllm-transformers-backend\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Native-speed vLLM transformers modeling backend</a> — 모델 구현의 효율화로 에이전트 서빙 비용을 낮추는 또 다른 접근을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>에이전트의 성능은 모델 크기로 결정되지 않습니다. Wemeet은 에이전트를 도입할 때 기성 모델부터 찾기보다 '우리 업무에서 에이전트가 실패할 때는 언제인가'를 먼저 그리고, 그 실패 패턴을 학습 데이터에 담아 속도와 정확성을 동시에 확보하는 방식을 우선합니다 — 좋은 에이전트는 좋은 데이터에서 나옵니다.</p>",
    "category": "ai",
    "tags": [
      "AI Agents",
      "Training Data",
      "Open Source"
    ],
    "date": "2026-07-10",
    "rawTitle": "Data for Agents",
    "sourceUrl": "https://huggingface.co/blog/nvidia/open-data-for-agents",
    "title": "AI 에이전트가 자라나려면 데이터 정원을 먼저 가꿔야 한다"
  },
  {
    "id": "2026-07-09-kirki-infinite-canvas-builder",
    "category": "design",
    "date": "2026-07-09",
    "title": "자유와 구조 사이, 무한 캔버스 빌더 Kirki",
    "rawTitle": "Meet Kirki: WordPress's First Visual Builder With An Infinite Canvas",
    "summary": "Smashing Magazine이 워드프레스 최초의 무한 캔버스 빌더 Kirki를 소개했다. 행·열 격자 대신 자유 배치를 허용하면서 클래스·CSS 변수로 일관성도 지키려 한다.",
    "bodyHtml": "<p>Smashing Magazine의 Zareen Tasnim이 워드프레스 최초의 ‘무한 캔버스(infinite canvas)’ 비주얼 빌더 Kirki를 소개했습니다. 기존 페이지 빌더가 행·열 격자에 요소를 끼워 맞추게 했다면, Kirki는 Figma나 Webflow처럼 캔버스 위에 요소를 자유롭게 놓고 확대·이동·겹치기까지 허용합니다. 게다가 서드파티 플러그인 없이 동적 콘텐츠 관리까지 기본 제공한다고 내세웁니다.</p><blockquote>\"Kirki에서는 보이는 그대로가 결과물이며, 첫날부터 모든 것이 포함돼 있다.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>이 소식의 핵심은 ‘자유’와 ‘구조’의 오래된 긴장입니다. 무한 캔버스는 창작의 자유를 극대화하지만, 자칫 일관성 없는 화면과 유지보수 지옥으로 이어지기 쉽습니다. Kirki는 클래스 기반 스타일링과 CSS 변수로 이 둘을 함께 잡으려 합니다 — 픽셀 단위 자유를 주되, 반복되는 스타일은 토큰으로 묶어 일관성을 지키는 방식입니다. 성능 테스트에서 Elementor보다 래퍼(wrapper) div가 훨씬 적은 깔끔한 DOM을 만들어 로딩이 빨랐다는 점도, ‘자유가 곧 난잡함’이라는 통념을 반박하려는 대목입니다.</p><h3>실무 적용</h3><p>도구가 자유로울수록 팀에는 오히려 더 강한 규칙이 필요합니다. 무한 캔버스형 빌더를 도입한다면 시작 전에 스페이싱·타이포·컬러 토큰과 컴포넌트 규칙을 먼저 정의해, 자유로운 배치가 ‘제멋대로’가 아니라 ‘의도된 변주’가 되도록 가드레일을 세워야 합니다. 또한 빌더가 뽑아내는 마크업의 청결도(불필요한 래퍼, 시맨틱 태그 여부)를 도입 기준에 넣으면, 겉보기 편의 때문에 성능·접근성을 잃는 함정을 피할 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/06/how-make-design-system-ai-ready/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: How To Make Your Design System AI-Ready</a> — 자유로운 도구에 일관성을 부여하는 토큰·컴포넌트 문서화 관점을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026</a> — 도구가 아니라 실행 품질과 완성도로 차별화해야 한다는 큰 흐름을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>더 자유로운 캔버스가 더 나은 디자인을 보장하지는 않습니다. Wemeet은 자유도가 높은 도구를 쓸수록 토큰·컴포넌트·마크업 기준을 먼저 세워, 창작의 자유가 일관성과 성능을 해치지 않도록 설계합니다 — 좋은 빌더의 가치는 ‘무엇이든 할 수 있음’이 아니라 ‘옳은 것을 쉽게 하도록 이끎’에 있습니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/kirki-wordpress-visual-builder-infinite-canvas/",
    "tags": [
      "Web Design",
      "No-Code",
      "Design Systems"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-09-vllm-transformers-native-speed",
    "category": "ai",
    "date": "2026-07-09",
    "title": "transformers가 vLLM 네이티브 속도를 따라잡다",
    "rawTitle": "Native-speed vLLM transformers modeling backend",
    "summary": "Hugging Face가 vLLM의 transformers 백엔드가 커스텀 구현과 동급 이상의 추론 속도를 낸다고 밝혔다. 별도 최적화 코드 없이 다양한 아키텍처에서 처리량이 대등해졌다.",
    "bodyHtml": "<p>Hugging Face가 vLLM의 ‘transformers 모델링 백엔드’가 이제 커스텀 vLLM 구현과 대등하거나 더 빠른 추론 속도를 낸다고 발표했습니다. 그동안 새 모델을 vLLM에서 최고 속도로 돌리려면 아키텍처마다 별도의 최적화 코드를 손으로 작성해야 했는데, 이 백엔드는 transformers에 정의된 모델을 그대로 쓰면서도 그 성능 격차를 지웠다는 것이 핵심입니다.</p><blockquote>\"transformers 모델링 백엔드는 이제 테스트한 모든 모델에서 네이티브 처리량과 같거나 그 이상을 낸다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>방법이 구체적입니다. torch.fx로 모델 그래프를 정적으로 분석해 최적화 지점을 찾고, 추상 구문 트리(AST)를 그 자리에서 다시 써서 연산을 vLLM의 최적화 커널로 바꿔 끼웁니다. 이 과정에서 연산 융합(fused ops), Mixture-of-Experts용 전문가 병렬화, 텐서 병렬화가 자동으로 적용되고 torch.compile·CUDA Graphs와도 완전히 호환됩니다. 벤치마크도 단일 GPU의 Qwen3-4B, GPU 2장 텐서 병렬의 Qwen3-32B, H100 8장에 데이터·전문가 병렬을 건 Qwen3-235B-A22B-FP8까지 아우르며, 모든 경우에서 네이티브 처리량을 ‘맞추거나 앞섰다’고 밝혔습니다.</p><h3>실무 적용</h3><p>실무 시사점은 ‘새 모델을 빠르게 서빙하기까지의 시간’이 크게 줄어든다는 점입니다. 지금까지는 새 오픈 모델이 나와도 vLLM에 맞는 최적화 코드가 포팅될 때까지 기다리거나 직접 짜야 했지만, 이제 transformers에 모델 정의만 있으면 곧바로 네이티브급 속도로 배포할 수 있습니다. 자체 인프라에 오픈 모델을 얹는 팀이라면, 커스텀 커널 유지보수 부담을 덜고 최신 아키텍처를 더 빠르게 도입하는 경로가 열린 셈입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Source on Hugging Face, Spring 2026</a> — 오픈 모델을 실제로 굴리는 서빙·추론 생태계의 큰 그림을 보완합니다.</li><li><a href=\"https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: DiffusionGemma, 4x faster text generation</a> — 추론 속도를 끌어올리는 또 다른 접근(생성 방식 자체의 변경)을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>모델 경쟁의 무게추가 성능에서 ‘얼마나 빨리·싸게 서빙하느냐’로 옮겨가고 있습니다. Wemeet은 오픈 모델을 도입할 때 벤치마크 점수뿐 아니라 서빙 스택의 성숙도와 배포까지의 시간을 함께 따져, 최신 모델을 실제 서비스 속도로 옮기는 실효를 우선합니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/native-speed-vllm-transformers-backend",
    "tags": [
      "LLM Inference",
      "vLLM",
      "Open Source"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-08-designed-for-dead-language",
    "category": "design",
    "date": "2026-07-08",
    "title": "언어 앱은 아직도 죽은 언어를 가르친다",
    "rawTitle": "Designed for a Dead Language",
    "summary": "A List Apart의 Shrey Shah가 언어 학습 앱이 라틴어용 문법·번역 교수법을 물려받아, 유창함이 아니라 ‘측정하기 쉬운 지표’를 최적화한다고 짚었다.",
    "bodyHtml": "<p>A List Apart의 Shrey Shah가 오늘날의 언어 학습 앱들이 정작 ‘죽은 언어’를 가르치던 방식을 그대로 물려받았다고 지적했습니다. 1788년 프로이센은 제한된 자원으로 살아 있는 언어를 대규모로 가르쳐야 했고, 그래서 읽기·해석만 필요했던 라틴어 교육의 문법·번역식(Grammar-Translation) 방법을 빌려 왔습니다. 제약이 낳은 이 선택이 시간이 지나며 ‘교육의 진리’로 굳어졌고, 지금의 앱들도 같은 가정을 반복한다는 것입니다.</p><blockquote>\"측정할 수 있는 것에 손을 뻗기 전에, 사용자가 실제로 무엇을 해야 하는지, 그리고 지금까지 무엇이 그것을 가로막았는지를 먼저 물어야 한다.\"<cite>A List Apart</cite></blockquote><h3>왜 중요한가</h3><p>글은 언어학자 Stephen Krashen이 1982년에 나눈 ‘습득(acquisition)’과 ‘학습(learning)’의 구분을 끌어옵니다. 무의식적 습득은 유창함을 낳지만, 의식적인 문법 학습은 시험 점수를 낳을 뿐이라는 것입니다. 문제는 앱들이 정답률·연속 학습일(streak)처럼 ‘측정하기 쉬운 것’을 최적화하면서, 정작 사용자가 원하는 ‘말이 통하는 경험’과는 멀어진다는 데 있습니다. 인터페이스는 새로워도, 언어를 ‘살아가는 환경’이 아니라 ‘공부하는 대상’으로 보는 낡은 전제는 그대로 남아 있다는 진단입니다.</p><h3>실무 적용</h3><p>이는 언어 앱만의 이야기가 아닙니다. 제품을 만들 때 ‘측정하기 쉬운 지표’를 목표로 착각하면, 숫자는 오르는데 사용자가 원래 하려던 일은 여전히 안 되는 함정에 빠집니다. 지표를 정하기 전에 ‘사용자가 실제로 달성하려는 것은 무엇이고, 무엇이 그것을 막고 있었나’를 먼저 물어야 합니다. 실제로 글이 인용한 2025년 메타분석에서는 AI 대화 도구가 플래시카드 최적화보다 나은 성과를 냈는데, 이는 ‘연습 문제 최적화’가 아니라 ‘실사용 맥락 재현’이 목표에 더 가까웠기 때문입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/establishing-baselines/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Establishing Baselines for Impact</a> — ‘무엇을 측정할 것인가’를 신중히 고르는 관점으로 이 논의를 보완합니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/07/matching-ai-modality-user-intent-designing-right-interface/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Matching AI Modality To User Intent</a> — AI 대화형 인터페이스가 사용자 의도에 맞을 때 힘을 낸다는 관점을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>측정하기 쉬운 것과 사용자가 원하는 것은 자주 어긋납니다. Wemeet은 제품을 설계할 때 지표부터 세우지 않고, ‘사용자가 실제로 끝내려는 일’과 ‘그것을 막던 마찰’을 먼저 정의합니다 — 숫자는 그 목표를 향할 때만 의미가 있습니다.</p>",
    "source": "A List Apart",
    "sourceUrl": "https://alistapart.com/article/designed-for-a-dead-language/",
    "tags": [
      "UX Design",
      "Product Metrics",
      "Language Learning"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-08-lerobot-v060",
    "category": "ai",
    "date": "2026-07-08",
    "title": "로봇 학습의 고리를 닫다, LeRobot 0.6",
    "rawTitle": "LeRobot v0.6.0: Imagine, Evaluate, Improve",
    "summary": "허깅페이스가 LeRobot 0.6.0을 공개했다. 정책이 미래를 예측(Imagine)하고, 성공을 자동 판정(Evaluate)하며, 사람 교정으로 개선(Improve)하는 학습 순환을 CLI로 닫았다.",
    "bodyHtml": "<p>Hugging Face가 로봇 학습 프레임워크 <strong>LeRobot 0.6.0</strong>을 공개했습니다. 핵심은 로봇이 스스로 배우는 순환 고리를 세 단계로 닫았다는 점입니다 — 행동하기 전에 미래를 예측하고(Imagine), 그 결과가 성공인지 자동으로 판정하며(Evaluate), 사람이 개입해 교정한 내용이 다시 학습 데이터가 되는(Improve) 흐름입니다. 40명이 넘는 기여자가 참여한 대형 릴리스입니다.</p><blockquote>\"배포하고, 교정을 모으고, 미세조정하고, 반복한다 — 로봇 학습 플라이휠이 이제 CLI 플래그 하나가 됐다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>세 기둥이 구체적입니다. ‘Imagine’은 행동 전 미래 상태를 예측하는 월드 모델 정책(VLA-JEPA 등), ‘Evaluate’는 별도 학습 없이 과제 성공을 판정하는 보상 모델과 6종의 새 시뮬레이션 벤치마크, ‘Improve’는 사람의 교정을 자동으로 학습 데이터로 바꾸는 DAgger 방식의 <code>lerobot-rollout</code> CLI입니다. 다섯 종의 새 VLA 통합, 최대 2배 빨라진 데이터 로딩, 40% 가벼워진 기본 설치까지 더해져, 물리 AI(physical AI)의 진입 장벽을 실무 수준으로 낮췄습니다.</p><h3>실무 적용</h3><p>가장 큰 시사점은 ‘사람이 개입하는 순간이 곧 데이터가 된다’는 설계입니다. 로봇이 틀릴 때 사람이 바로잡으면 그 교정이 다음 학습에 자동 반영되므로, 배포–수집–미세조정–반복의 순환이 별도 파이프라인 없이 돌아갑니다. 로보틱스가 아니어도 이 구조는 유효합니다. AI 기능을 서비스에 넣을 때, 사용자·검수자의 교정을 흘려보내지 않고 학습 루프로 되먹이는 ‘휴먼 인 더 루프’ 설계를 처음부터 넣으면 모델이 시간이 갈수록 좋아집니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">NVIDIA: Cosmos-3 for Physical AI</a> — 로봇이 행동 전 세계를 시뮬레이션하는 ‘월드 모델’ 흐름을 보완합니다.</li><li><a href=\"https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Source, Spring 2026</a> — 오픈 로보틱스·모델 생태계가 어디로 가는지 큰 그림을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>좋은 AI 시스템은 배포 순간이 끝이 아니라 시작입니다. Wemeet은 AI 기능을 설계할 때 사용자의 교정과 피드백이 자동으로 다음 개선에 되먹여지는 학습 고리를 함께 설계해, 쓸수록 똑똑해지는 제품을 우선합니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/lerobot-release-v060",
    "tags": [
      "Robotics",
      "Human-in-the-Loop",
      "Open Source"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-07-what-are-design-specs",
    "category": "design",
    "date": "2026-07-07",
    "title": "개발 리뷰에서 반려되는 진짜 이유, 스펙",
    "rawTitle": "What are Design Specs?",
    "summary": "NN/g의 Kelley Gordon이 디자인이 개발 리뷰에서 반려되는 흔한 원인으로 ‘빠진 스펙’을 지목했다. 레이아웃·인터랙션·요구사항·범위를 문서로 남겨야 의도대로 구현된다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Kelley Gordon이 디자인이 개발 리뷰에서 반려되는 흔한 원인으로 ‘빠진 스펙(design specs)’을 지목했습니다. 화면은 멀쩡해 보여도 레이아웃 규칙·인터랙션 동작·요구사항·범위가 문서로 명시되지 않으면, 개발자는 추측으로 구현하게 되고 결국 의도와 어긋난 결과가 나온다는 것입니다.</p><blockquote>\"개발 리뷰에서 디자인이 반려될 때, 그 원인은 대개 빠진 스펙이다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>디자인 스펙은 부가 문서가 아니라 디자이너와 개발자를 잇는 계약서에 가깝습니다. Gordon은 좋은 스펙이 담아야 할 요소로 레이아웃 규격, 인터랙션 세부 동작, 프로젝트 요구사항, 작업 범위를 꼽습니다. 이 네 가지가 빠지면 핸드오프는 곧바로 ‘구두 합의’와 ‘기억’에 의존하게 되고, 어긋남은 리뷰 단계에서야 드러나 재작업과 일정 지연을 부릅니다.</p><h3>실무 적용</h3><p>실무에서는 예쁜 시안을 넘기는 것으로 핸드오프를 끝내지 말고, 상태별 동작(빈 값·오류·로딩), 반응형 분기, 여백·타이포 토큰, 엣지 케이스까지 문서로 명시해야 합니다. 특히 인터랙션은 ‘어떻게 움직이는가’를 글이나 예시로 남겨야 개발자가 추측하지 않습니다. 반복되는 규격은 디자인 시스템의 토큰·컴포넌트 문서로 연결해 재사용하면, 매번 스펙을 새로 쓰는 부담도 줄일 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/06/how-make-design-system-ai-ready/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: How To Make Your Design System AI-Ready</a> — 스펙과 토큰을 사람과 기계가 함께 읽도록 문서화하는 관점을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026</a> — 실행 품질과 완성도로 차별화해야 한다는 큰 흐름을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>디자인은 시안에서 끝나지 않고 ‘구현되어야’ 완성됩니다. Wemeet은 핸드오프 단계에서 상태·인터랙션·범위를 명세로 남겨, ‘예쁘게 그렸다’가 아니라 ‘그대로 구현된다’를 기준으로 디자인 품질을 관리합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/videos/what-are-design-specs/",
    "tags": [
      "Design Specs",
      "Design Handoff",
      "Dev Collaboration"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-07-cerebras-gemma4-voice-ai",
    "category": "ai",
    "date": "2026-07-07",
    "title": "실시간 음성 AI, 관건은 ‘지연’을 지우는 것",
    "rawTitle": "Hugging Face and Cerebras bring Gemma 4 to real-time voice AI",
    "summary": "Hugging Face와 Cerebras가 개방형 부품을 조립한 실시간 음성 AI 파이프라인을 공개했다. Cerebras가 LLM 응답 병목을 줄여, 자연스러운 speech-to-speech 대화를 노린다.",
    "bodyHtml": "<p>Hugging Face가 Cerebras와 함께, 개방형 부품을 조립해 만든 실시간 음성 AI 파이프라인을 공개했습니다. 사람 말을 알아듣고(음성 인식) → 생각하고(언어 모델) → 다시 말하는(음성 합성) 세 단계를, 각 단계를 자유롭게 갈아 끼울 수 있는 모듈형 구조로 묶은 speech-to-speech 데모입니다. 핵심 메시지는 분명합니다. 대화가 자연스럽게 느껴지려면 무엇보다 ‘지연’을 지워야 한다는 것입니다.</p><blockquote>\"음성 AI에서 지연 시간은 결정적인 변수다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>파이프라인은 NVIDIA의 Parakeet(음성 인식), Cerebras에서 도는 Gemma 4 31B(언어 모델), 알리바바의 Qwen3TTS(음성 합성)로 구성됩니다. 이 조합에서 병목은 대개 언어 모델의 응답 시간인데, Cerebras 하드웨어가 이 구간을 훨씬 빠르고 안정적으로 만들어 준다는 것이 발표의 요지입니다. 저자는 ‘중앙값 지연은 그럴듯한데 P95에서 몇 초씩 튀어 대화를 망치는’ 흔한 문제를 짚으며, 평균이 아니라 꼬리 지연(tail latency)을 잡는 것이 관건이라고 말합니다.</p><h3>실무 적용</h3><p>이 구조의 미덕은 ‘열려 있고 갈아 끼울 수 있다’는 점입니다. 모든 계층을 검사·수정·확장할 수 있어 특정 벤더에 묶이지 않고 언어를 바꾸거나 더 나은 모델로 교체하기 쉽습니다. 실제로 이 파이프라인은 이미 시중에 9,000대 넘게 풀린 Reachy Mini 로봇에서 쓰이고 있습니다. 음성 기능을 붙일 때는 평균 응답 속도만 보지 말고 P95·P99 지연까지 측정하고, 병목 구간(대개 LLM 추론)을 따로 최적화하는 접근이 필요합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: DiffusionGemma, 4x faster text generation</a> — 생성 속도를 끌어올려 응답 지연을 줄이는 또 다른 접근을 보완합니다.</li><li><a href=\"https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Source on Hugging Face, Spring 2026</a> — 부품을 갈아 끼우는 개방형 생태계의 큰 그림을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>음성 인터페이스의 성패는 정확도보다 ‘반응 속도’에서 먼저 갈립니다. 0.5초의 지연도 대화에서는 어색함으로 체감되기 때문입니다. Wemeet은 음성·실시간 기능을 설계할 때 평균이 아니라 최악의 지연을 기준선으로 잡고, 모듈을 교체 가능한 구조로 두어 성능과 유연성을 동시에 확보하는 방식을 우선합니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/cerebras-gemma4-voice-ai",
    "tags": [
      "Voice AI",
      "Latency",
      "Open Source"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-06-crafting-ai-explanations",
    "category": "design",
    "date": "2026-07-06",
    "title": "AI 설명은 역할마다 달라야 한다",
    "rawTitle": "Crafting AI Explanations for Every Role in Your Enterprise",
    "summary": "NN/g가 기업 내 AI 도입의 관건으로 ‘설명’을 지목했다. 거버넌스·개발자·현업 전문가는 각기 다른 설명을 필요로 하며, 역할에 맞춰 설계해야 신뢰가 생긴다.",
    "bodyHtml": "<p>Nielsen Norman Group이 기업에서 AI 도입이 겉도는 진짜 이유로 ‘설명(explanation)’을 지목했습니다. Katie Schmidt 등 연구진은 같은 AI 출력이라도 거버넌스 책임자, 이를 만드는 개발자, 실제로 쓰는 현업 전문가가 각기 다른 설명을 필요로 한다고 말합니다. 하나의 설명 화면을 모두에게 똑같이 들이미는 방식으로는 누구의 신뢰도 얻지 못한다는 것입니다.</p><blockquote>\"최선의 설명은 하나로 정해져 있지 않다 — 오직 적절한 사용자에게, 적절한 순간에 맞는 설명이 있을 뿐이다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>글은 역할을 세 층으로 나눕니다. 거버넌스 리더에게는 개별 판단이 아니라 배포 전반의 추세·예외·규제 준비 상태를 보여주는 시스템 수준의 설명이 필요합니다. 개발자에게는 입력과 출력의 관계, 설정 변경이 미치는 영향을 실시간으로 파고들 수 있는 인터랙티브한 디버깅 도구가 필요합니다. 현업 전문가에게는 전문 용어를 걷어내고 익숙한 업무 흐름과 과거 선례에 빗댄 평이한 설명이 필요합니다.</p><h3>실무 적용</h3><p>AI 기능을 붙일 때 ‘설명 화면 하나’로 끝내지 말고, 보는 사람의 역할부터 물어야 합니다. 관리자용 화면에는 집계·이상치·감사 로그를, 개발자용 화면에는 프롬프트·임계값이 결과를 어떻게 바꾸는지 보여주는 도구를, 현업용 화면에는 ‘왜 이 결과인가’를 선례와 함께 풀어 주는 설명과 가벼운 피드백 버튼을 둡니다. 신뢰는 투명성의 ‘양’이 아니라 역할에 맞춘 ‘정확도’에서 나온다는 것이 핵심입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/06/designing-uncertainty-how-ai-supercharges-probabilistic-thinking/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Designing With Uncertainty</a> — AI의 확률적 판단을 사용자에게 이해시키는 설계 관점을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/context-architecture/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Context Architecture</a> — 시스템이 맥락을 해석해 사용자와 어긋나지 않는 출력을 내도록 정보를 설계하는 관점을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>AI를 신뢰하게 만드는 것은 더 많은 설명이 아니라 ‘그 사람에게 맞는’ 설명입니다. Wemeet은 AI 기능을 설계할 때 화면을 보는 사람이 누구인지부터 나누고, 관리자·개발자·사용자가 각자 판단에 필요한 만큼만 보도록 설명의 깊이와 언어를 달리 설계합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/crafting-ai-explanations/",
    "tags": [
      "AI Explainability",
      "Enterprise UX",
      "Trust"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-06-pulpie-web-cleaning",
    "category": "ai",
    "date": "2026-07-06",
    "title": "웹 본문만 20배 싸게 추리는 AI",
    "rawTitle": "Pulpie: Pareto-Optimal Models for Cleaning the Web",
    "summary": "Hugging Face에 공개된 Pulpie는 HTML에서 광고·메뉴 같은 군더더기를 걷어내고 본문만 추출하는 인코더 모델로, 최상급 품질을 유지하며 비용을 20분의 1로 줄인다.",
    "bodyHtml": "<p>Hugging Face 블로그에 웹 페이지에서 본문만 골라내는 인코더 모델 <strong>Pulpie</strong>가 공개됐습니다. 웹 문서의 약 70%는 내비게이션·광고·사이드바·푸터 같은 군더더기(boilerplate)인데, 이 잡음은 언어 모델의 사전학습과 추론 품질을 모두 갉아먹습니다. Pulpie는 이 껍데기를 걷어내 깨끗한 본문만 남기는 일을, 기존 최상급 도구에 맞먹는 품질로 훨씬 싸고 빠르게 해냅니다.</p><blockquote>\"Pulpie는 20분의 1 비용으로 최상급 추출 품질에 근접한다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>수치가 인상적입니다. 2억 1천만 파라미터의 Pulpie Orange Small은 ROUGE-5 F1 0.862로, 6억 파라미터 경쟁 모델(0.864)과 사실상 동률입니다. 그러면서 L4 GPU에서 초당 13.7페이지를 처리해 경쟁 모델(0.68페이지)보다 약 20배 빠릅니다. 10억 페이지를 정제하는 비용이 약 15만 9천 달러에서 7,900달러 안팎으로 떨어집니다. 토큰을 하나씩 뱉는 디코더 대신, 블록을 한 번에 분류하는 인코더 구조를 택한 결과입니다.</p><h3>실무 적용</h3><p>‘더 큰 모델’이 늘 답은 아닙니다. 문서에서 본문 추출·분류·정제처럼 구조가 분명한 작업은 값비싼 생성형 모델보다 목적에 맞게 작게 설계한 인코더가 품질은 지키면서 비용을 한 자릿수로 줄일 수 있습니다. RAG나 데이터 파이프라인을 만들 때, 크롤링한 HTML을 통째로 LLM에 넣기 전에 이런 경량 정제 단계를 앞에 두면 토큰 비용과 잡음을 동시에 줄일 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Source on Hugging Face, Spring 2026</a> — 오픈소스 모델·데이터 생태계가 어디로 가는지 큰 그림을 보완합니다.</li><li><a href=\"https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: DiffusionGemma, 4x faster text generation</a> — 속도·비용을 앞세운 효율 우선 아키텍처의 또 다른 사례를 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>AI 비용의 절반은 모델을 부르기 ‘전’에 결정됩니다. Wemeet은 AI 파이프라인을 설계할 때 값비싼 생성 모델에 모든 것을 맡기지 않고, 정제·분류 같은 정형 작업은 작고 빠른 전용 모델에 맡겨 품질과 비용을 동시에 잡는 구조를 우선합니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/feyninc/pulpie",
    "tags": [
      "Data Quality",
      "Efficient AI",
      "Open Source"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-05-report-business-outcomes",
    "category": "design",
    "date": "2026-07-05",
    "title": "UX 보고, 활동이 아니라 성과로 말하라",
    "rawTitle": "Stop Reporting UX Activity and Report Business Outcomes",
    "summary": "NN/g의 Lola Famulegun이 UX 팀이 예산 논의에서 밀리는 진짜 이유로 ‘보고 방식’을 지목했다. 활동량·UX 지표 대신 매출·비용 같은 비즈니스 성과로 번역해 보고해야 한다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Lola Famulegun이 UX 팀이 예산 논의에서 밀리는 진짜 이유를 짚었습니다. 작업의 가치가 부족해서가 아니라, 그 가치를 경영진의 언어로 번역하지 못하는 ‘보고 방식’이 문제라는 것입니다. 저자는 흔한 실수 두 가지를 듭니다. “사용자 인터뷰 24건을 진행했다”처럼 성과 대신 노력을 보고하는 것, 그리고 CFO에게는 아무 의미가 없는 SUS 점수 같은 UX 지표로만 말하는 것입니다.</p><blockquote>\"UX 팀이 예산 논의에서 지는 일은 작업이 가치 없어서가 아니라, 그 작업이 보고되는 방식 때문에 일어난다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>글은 리더가 투자를 평가하는 다섯 가지 질문 — 매출 기여, 비용 절감, 리스크 완화, 출시 속도, 리텐션·만족 — 을 프레임으로 제시합니다. 결제 흐름의 마찰, 지원 문의량, 설계 오류로 인한 컴플라이언스 리스크처럼 UX 작업은 이미 이 다섯 축에 닿아 있습니다. 문제는 그것을 과업 성공률·오류율 같은 ‘업스트림 지표’에서 멈추지 않고, 전환율·지원 문의 감소 같은 ‘다운스트림 지표’까지 연결해 보여주느냐입니다.</p><h3>실무 적용</h3><p>다음 보고서부터 ‘무엇을 했는가’ 항목을 ‘무엇이 달라졌는가’로 바꿔 쓰는 연습이 필요합니다. 사용성 테스트 결과는 과업 성공률이 아니라 그로 인해 줄어들 CS 문의량·이탈률의 언어로 번역하고, 개선 전 기준선(baseline)을 미리 잡아 전후 비교가 가능하게 만들어야 합니다. 경영진 대상 문서에서는 UX 전문 용어를 다섯 가지 비즈니스 질문 중 하나에 대한 답으로 다시 쓰는 것이 출발점입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/videos/storytelling-in-user-research/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Storytelling in User Research</a> — 조사 결과를 조직을 움직이는 이야기로 전달하는 방법을 보완합니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/06/why-accessibility-operational-capability-not-feature/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Why Accessibility Is An Operational Capability, Not A Feature</a> — 디자인 품질을 일회성 기능이 아닌 운영 역량으로 다뤄야 한다는 같은 맥락의 관점입니다.</li></ul><h3>Wemeet의 관점</h3><p>좋은 디자인은 스스로 말하지 않습니다 — 숫자로 통역해 줘야 합니다. Wemeet은 프로젝트 시작 단계에서 전환율·문의량 같은 비즈니스 기준선을 함께 정의해, 작업이 끝났을 때 ‘예쁘게 바뀌었다’가 아니라 ‘무엇이 얼마나 좋아졌다’로 보고할 수 있는 구조를 먼저 설계합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/reporting-ux-business-outcomes/",
    "tags": [
      "UX Strategy",
      "Business Impact",
      "UX Metrics"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-05-llm-metacognition-benchmark",
    "category": "ai",
    "date": "2026-07-05",
    "title": "LLM은 자기가 틀릴 순간을 아는가",
    "rawTitle": "Does Your LLM Know *When It's About to Be Wrong*?",
    "summary": "Hugging Face에 LLM의 ‘메타인지’를 측정하는 벤치마크가 공개됐다. 함정 문제 300개와 24개 모델 리더보드로, 모델이 자기 오류를 감지하는 능력을 정확도와 별개로 평가한다.",
    "bodyHtml": "<p>Hugging Face 블로그에 LLM의 <strong>메타인지(metacognition)</strong> — 모델이 자신이 틀릴 수 있는 순간을 스스로 아는 능력 — 를 측정하는 벤치마크가 공개됐습니다. 메타인지 함정 문제 300개(FINAL-Bench 100문항을 더해 총 400문항)와 24개 모델을 줄 세운 리더보드, 그리고 원본 모델을 수정하지 않고 오류 임박 신호를 감지하는 ‘frozen-base 어댑터’를 오픈소스로 함께 내놓았습니다. 정확도만 겨루는 기존 리더보드가 놓치던 축을 정면으로 다룬 시도입니다.</p><blockquote>\"모델이 답을 아는지가 아니라 — 자신이 틀릴 수 있는 순간을 알고, 스스로 고칠 수 있는지가 문제다.\"<cite>Hugging Face</cite></blockquote><h3>왜 중요한가</h3><p>결과가 흥미롭습니다. 가장 강한 모델조차 객관식에서는 거의 완벽하지만, 자유 서술형에서 자기 오류를 감지하는 능력은 AUROC 0.5 — 사실상 동전 던지기 수준이었습니다. 반면 어댑터를 붙이면 특정 모델에서 AUROC가 +0.800까지 개선됐습니다. 배포의 진짜 병목은 원시 성능이 아니라 ‘신뢰’라는 저자의 진단이 수치로 확인된 셈입니다.</p><h3>실무 적용</h3><p>AI 기능을 서비스에 넣을 때 ‘얼마나 잘 맞히는가’만큼 ‘틀릴 때 이를 알리는가’를 평가 항목에 넣어야 합니다. 챗봇·요약·검색 같은 자유 서술형 출력일수록 모델의 자기 확신을 믿지 말고, 별도의 오류 감지 레이어나 확신도 기반 폴백(사람 검토, 재질의)을 설계에 포함하는 것이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: The latest AI news we announced in June 2026</a> — 16GB 노트북에서 로컬로 도는 Gemma 4 12B 등, 모델이 일상 기기로 내려오는 흐름을 함께 보여줍니다.</li><li><a href=\"https://www.nngroup.com/articles/crafting-ai-explanations/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Crafting AI Explanations for Every Role in Your Enterprise</a> — AI의 판단을 역할별로 설명해 신뢰를 만드는 UX 관점을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>AI 도입의 성패는 모델이 맞힐 때가 아니라 틀릴 때 드러납니다. Wemeet은 AI 기능을 설계할 때 ‘오답 시나리오’를 먼저 그리고, 확신이 낮은 출력을 감추지 않고 드러내는 UI — 출처 표시, 확인 유도, 사람 폴백 — 를 함께 설계하는 것을 원칙으로 합니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/ginigen-ai/metacognition",
    "tags": [
      "LLM Evaluation",
      "AI Reliability",
      "Metacognition"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-04-seamless-integrations-not-tools",
    "category": "design",
    "date": "2026-07-04",
    "title": "도구를 늘리지 말고, 매끄럽게 통합하라",
    "rawTitle": "Users Don't Need More Tools: They Need Seamless Integrations",
    "summary": "Smashing Magazine의 Vitaly Friedman이 ‘AI 우선’ 제품이 오히려 사용자를 지치게 한다고 지적했다. 필요한 건 새 도구가 아니라 익숙한 흐름에 녹아든 통합이다.",
    "bodyHtml": "<p>Smashing Magazine의 Vitaly Friedman이 ‘AI 우선(AI-first)’을 앞세운 제품들이 오히려 사용자를 더 지치게 만든다고 지적했습니다. 새 기능을 별도 도구·별도 화면으로 계속 쏟아내면서, 사용자는 학습 곡선과 맥락 전환의 부담만 떠안는다는 것입니다. 저자의 결론은 명확합니다. 사람들이 원하는 건 ‘더 많은 도구’가 아니라, 이미 익숙한 흐름 속에 자연스럽게 녹아든 ‘더 나은 통합’이라는 것입니다.</p><blockquote>\"사용자가 정말로 필요로 하는 것은, 이미 자리 잡은 사고 모델에 자연스럽게 들어맞는 유용한 기능들의 더 나은 통합이다.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>‘AI 우선’ 제품은 수년간 쌓아 온 설계 결정과 사용자 기대를 무시한 채, 화려하지만 낯선 인터페이스를 새로 배우라고 요구하기 쉽습니다. 저자는 그 대안으로 눈에 띄지 않게 배경에서 돕는 <strong>조용한 AI(quiet AI)</strong>를 제시합니다. 가치는 여러 앱을 저글링하는 데서가 아니라, 마찰과 실수를 줄이는 데서 나온다는 관점입니다.</p><h3>실무 적용</h3><p>글은 규칙을 한 번만 정의해 두면 시스템이 반복 작업을 알아서 처리하는 ‘폴더 인스트럭션(Folder Instructions)’ 같은 패턴을 예로 듭니다. 새 능력을 독립된 도구로 떼어내기보다 기존 워크플로 안에 심어 기본 동작 자체를 개선하는 편이 낫다는 뜻입니다. 기능을 추가하기 전에 ‘이걸 새 화면으로 낼까, 지금 흐름에 녹일까’를 먼저 묻는 습관이 필요합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/07/matching-ai-modality-user-intent-designing-right-interface/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Matching AI Modality To User Intent</a> — AI 기능을 사용자 맥락에 맞춰 설계해야 한다는 관점을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/context-architecture/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Context Architecture</a> — 기능을 맥락에 맞게 배치하는 정보 설계 관점을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>기능을 늘리는 것과 경험을 좋게 하는 것은 전혀 다른 일입니다. Wemeet은 새 기능을 별도 도구로 내보내기 전에, 사용자가 이미 갖고 있는 사고 모델과 흐름에 어떻게 녹일지를 먼저 설계합니다 — 가장 좋은 AI는 존재를 뽐내지 않고 마찰을 지웁니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/users-dont-need-more-tools-need-seamless-integrations/",
    "tags": [
      "UX Design",
      "AI Integration",
      "Product Design"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-04-openai-patch-the-planet",
    "category": "ai",
    "date": "2026-07-04",
    "title": "AI로 오픈소스 보안 구멍 메우기, ‘패치 더 플래닛’",
    "rawTitle": "Patch the Planet: a Daybreak initiative to support open source maintainers",
    "summary": "OpenAI가 사이버보안 이니셔티브 Daybreak의 새 프로그램 ‘패치 더 플래닛’을 공개했다. AI가 오픈소스 취약점을 찾고 사람이 검증해 패치하며, cURL·Go·Python 등 30여 프로젝트가 참여한다.",
    "bodyHtml": "<p>OpenAI가 사이버보안 이니셔티브 Daybreak의 새 프로그램 <strong>패치 더 플래닛(Patch the Planet)</strong>을 공개했습니다. 보안 기업 Trail of Bits와 함께, 세상이 의존하는 핵심 오픈소스 소프트웨어의 취약점을 AI로 찾아내고 사람이 검증해 패치까지 돕는 프로그램입니다. cURL, Go, Python, Sigstore, pyca/cryptography 등 30개가 넘는 오픈소스 프로젝트가 참여 의사를 밝혔습니다.</p><blockquote>\"패치 더 플래닛은 세상이 의존하는 핵심 오픈소스 소프트웨어를 유지보수자들이 더 튼튼하게 다질 수 있도록 돕는, Trail of Bits와 함께 만든 Daybreak 이니셔티브다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>프런티어 모델은 취약점을 잘 찾아내지만, 동시에 방대한 오탐(false positive)을 쏟아내 이미 과부하인 유지보수자들의 백로그를 더 늘린다는 역설이 있습니다. 이 프로그램은 전담 연구자가 증거를 직접 재현하고, 프로젝트별 위협 모델에 비춰 중복을 제거하며, 심각도를 재평가해 ‘확인된’ 취약점만 우선순위를 매겨 전달합니다. ‘AI가 찾고 사람이 거른다’는 구조가 핵심입니다.</p><h3>실무 적용</h3><p>OpenAI는 HackerOne 등과 협업해 취약점 분류와 조율된 공개(coordinated disclosure)를 진행하고, 첫 패치 이후에도 팀이 보안을 이어 개선하도록 재사용 가능한 워크플로를 함께 만든다고 밝혔습니다. 실무 시사점은 분명합니다. AI 보안 스캐너를 도입할 때 오탐을 걸러낼 ‘사람 검증 레이어’를 함께 두지 않으면, 자동화가 오히려 부담을 키울 수 있다는 것입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/accelerating-cyber-defense-ecosystem/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Accelerating the cyber defense ecosystem that protects us all</a> — 방어 생태계 전반을 강화하려는 Daybreak의 큰 그림을 보완합니다.</li><li><a href=\"https://openai.com/index/safety-bug-bounty/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Introducing the OpenAI Safety Bug Bounty program</a> — 취약점 발굴에 외부 연구자를 참여시키는 또 다른 접근을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>AI 보안의 승부처는 ‘얼마나 많이 찾느냐’가 아니라 ‘찾은 것을 얼마나 신뢰할 수 있게 거르느냐’로 옮겨가고 있습니다. Wemeet은 AI 자동화를 도입할 때 오탐을 줄이는 사람 검증 단계를 함께 설계해, 속도와 신뢰를 동시에 확보하는 방식을 우선합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/patch-the-planet/",
    "tags": [
      "AI Security",
      "Open Source",
      "OpenAI"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-03-ai-modality-user-intent",
    "category": "design",
    "date": "2026-07-03",
    "title": "채팅만이 답은 아니다, AI 모달리티 설계",
    "rawTitle": "Matching AI Modality To User Intent: Designing The Right Interface",
    "summary": "Smashing Magazine이 ‘AI = 챗봇’이라는 관성을 비판했다. 사용자 의도와 상황에 맞춰 음성·대시보드·폼 등 모달리티를 근거 있게 골라야 한다는 제안.",
    "bodyHtml": "<p>Smashing Magazine의 Victor Yocco가 AI 인터페이스 설계의 고질적 관성, 이른바 ‘대화형 터널 비전(conversational tunnel vision)’을 정면으로 비판했습니다. LLM이 대화 데이터로 학습됐다는 이유만으로 모든 AI 기능에 채팅창을 붙이는 관행이 문제라는 것입니다. 글은 사용자의 신체적 제약, 인지 부하, 환경적 맥락에 근거해 입력·출력 모달리티를 선택해야 하며, 관례가 아니라 증거가 인터페이스를 결정해야 한다고 주장합니다.</p><blockquote>\"올바른 모달리티 조합은 상호작용이 일어나는 순간 사용자의 신체적·인지적 상태를 존중한다.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>지금 업계는 AI 기능이 들어가는 자리마다 반사적으로 채팅 UI를 배치하고 있습니다. 하지만 채팅은 만능이 아니라 여러 선택지 중 하나일 뿐입니다. 글이 정리한 대로 손이 바쁜 상황에는 음성이, 여러 항목을 비교·분석할 때는 시각 대시보드가, 정형 데이터 입력에는 폼이, 주변 상황 인지에는 오디오 알림이 더 맞습니다. ‘AI답게 보이는 것’과 ‘사용자에게 맞는 것’이 다르다는 사실을 상기시키는 글입니다.</p><h3>실무 적용</h3><p>저자는 설계에 들어가기 전 ‘태스크 오디트(Task Audit)’를 먼저 하라고 권합니다. 맥락적 조사와 인터뷰, 워크숍으로 사용자의 물리적·사회적·인지적 제약을 파악한 뒤, 입력/출력 정렬 매트릭스로 사용자 의도를 구체적인 모달리티 조합에 매핑하는 방식입니다. 함께 제공되는 ‘모달리티 태스크 오디트 필드 템플릿’을 내려받아 개발 착수 전에 환경적 장벽을 문서화해 두면 팀 차원의 근거 자료로 쓸 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/06/why-accessibility-operational-capability-not-feature/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Why Accessibility Is An Operational Capability, Not A Feature</a> — 접근성을 개별 기능이 아닌 조직의 운영 역량으로 다루자는 관점으로, 사용자 제약을 존중하는 설계 논의를 보완합니다.</li><li><a href=\"https://www.nngroup.com/videos/storytelling-in-user-research/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Storytelling in User Research</a> — 리서치에서 발견한 사용자 맥락을 조직에 설득력 있게 전달하는 방법을 다룹니다.</li></ul><h3>Wemeet의 관점</h3><p>채팅창은 만들기 쉬워서 선택되는 경우가 많지, 사용자에게 맞아서 선택되는 경우는 생각보다 드뭅니다. Wemeet은 AI 기능을 설계할 때 ‘어떤 모달리티로 보여줄 것인가’를 기획 초기 질문으로 앞당겨, 대화형 UI가 정말 최선일 때만 채팅을 씁니다. 인터페이스의 형태는 유행이 아니라 사용 맥락이 결정해야 합니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/07/matching-ai-modality-user-intent-designing-right-interface/",
    "tags": [
      "AI UX",
      "Multimodal Design",
      "Interaction Design"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-03-diffusiongemma-4x-text-generation",
    "category": "ai",
    "date": "2026-07-03",
    "title": "디퓨전으로 4배 빨라진 DiffusionGemma",
    "rawTitle": "DiffusionGemma: 4x faster text generation",
    "summary": "Google이 텍스트 디퓨전 기반 오픈 모델 DiffusionGemma를 공개했다. 256토큰을 병렬 생성해 GPU에서 최대 4배 빠르고, Apache 2.0으로 풀렸다.",
    "bodyHtml": "<p>Google이 텍스트 디퓨전(text diffusion) 방식으로 생성 속도를 끌어올린 실험적 오픈 모델 DiffusionGemma를 공개했습니다. 단어를 하나씩 이어 붙이는 기존 자기회귀 방식과 달리 256토큰 블록을 한 번의 순전파로 병렬 생성해, GPU 기준 최대 4배 빠른 속도를 냅니다. 총 26B 파라미터의 Mixture-of-Experts 구조로 추론 시에는 3.8B만 활성화되며, 라이선스는 상업 활용이 자유로운 Apache 2.0입니다.</p><blockquote>\"단어를 순차적으로 예측하는 대신, 256토큰 분량의 문단 전체를 동시에 초안으로 그려낸다.\"<cite>Google</cite></blockquote><h3>왜 중요한가</h3><p>수치가 구체적입니다. NVIDIA H100에서 초당 1,000토큰 이상, 소비자용 RTX 5090에서도 초당 700토큰 이상을 기록했고, 양자화하면 18GB VRAM에 올라갑니다. 고급 소비자 GPU에서 돌아가는 디퓨전 LM이 정식 오픈 모델로 나왔다는 뜻입니다. 또 양방향 어텐션 덕분에 코드 인필링(infilling)이나 문장 중간 편집처럼 앞뒤 맥락을 동시에 보는 비선형 텍스트 작업이 가능해, 자기회귀 모델과는 다른 사용처가 열립니다.</p><h3>실무 적용</h3><p>주의할 트레이드오프도 분명합니다. 출력 품질은 표준 Gemma 4보다 낮아, 최종 문서 생성보다는 속도가 체감 품질을 좌우하는 자동완성·초안 작성·실시간 인라인 편집 같은 인터랙티브 워크플로에 맞습니다. 반복적 자기수정(refinement) 특성을 활용해 빠른 초안은 DiffusionGemma로, 최종 다듬기는 고품질 자기회귀 모델로 나누는 이원 구성이 현실적인 도입 경로입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/technology/developers-tools/interactions-api-general-availability/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: Interactions API — our primary interface for Gemini models and agents</a> — Gemini 모델과 에이전트를 아우르는 기본 인터페이스의 정식 출시(GA) 소식입니다.</li><li><a href=\"https://huggingface.co/blog/ginigen-ai/metacognition\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Does Your LLM Know When It's About to Be Wrong?</a> — LLM이 스스로 오류 가능성을 감지할 수 있는지 다룬 메타인지 실험 글입니다.</li></ul><h3>Wemeet의 관점</h3><p>생성 속도는 성능 지표가 아니라 UX 재료입니다. 초당 1,000토큰이면 ‘타이핑되듯 흐르는 스트리밍’ 대신 ‘즉시 완성되는 화면’이라는 다른 인터페이스 문법이 가능해집니다. Wemeet은 모델을 고를 때 벤치마크 품질과 함께 응답 지연이 사용 경험을 어떻게 바꾸는지를 같은 무게로 평가합니다.</p>",
    "source": "Google",
    "sourceUrl": "https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/",
    "tags": [
      "Diffusion LM",
      "Open Models",
      "Inference Speed"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-01-genai-ux-research-agenda",
    "category": "design",
    "date": "2026-07-01",
    "title": "생성형 AI 시대, UX 리서치의 숙제",
    "rawTitle": "A Research Agenda for Generative AI in UX",
    "summary": "NN/g가 생성형 AI가 UX 리서치에 던진 과제를 네 갈래로 정리했다. 합성 사용자·디지털 트윈은 매력적이지만, 검증 없는 도입은 값비싼 설계 실수로 이어진다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Raluca Budiu가 생성형 AI가 UX 리서치에 남긴 미해결 과제를 하나의 ‘연구 의제’로 묶어 제시했습니다. 요지는 단순합니다. AI는 리서치의 대상이자 도구로 동시에 밀려들어 왔지만, ‘무엇이 실제로 통하는가’는 아직 충분히 검증되지 않았다는 것입니다. 글은 이 공백을 네 갈래 — ①생성형 AI 인터페이스 자체에 대한 연구, ②새롭게 등장하는 UI 유형, ③기존 리서치 방법의 보강, ④완전히 새로운 평가 방식 — 로 나눕니다.</p><blockquote>\"UX 리서치의 목적은 더 나은 제품을 만드는 일을 돕는 데 있다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>특히 눈길을 끄는 대목은 인간 행동을 흉내 내는 두 기법입니다. 특정 사용자 집단을 모사하는 ‘합성 사용자(synthetic users)’와, 개인의 방대한 데이터로 빚어낸 가상 복제본 ‘디지털 트윈’입니다. 리서치 예산이 빠듯한 조직에는 비용을 줄일 유혹적인 지름길이지만, 글은 분명한 경고를 답니다. AI가 만든 부실한 결과는 잘못된 설계 결정으로 이어져 오히려 더 큰 비용을 부른다는 것입니다.</p><h3>실무 적용</h3><p>합성 사용자나 AI 보조 분석을 도입할 때는 ‘사람 대상 검증’을 기준선으로 함께 돌려 결과가 실제 사용자와 얼마나 어긋나는지 상시 대조하는 편이 안전합니다. NN/g는 기반 연구의 책임이 자원을 갖춘 선도 조직·학계·성숙한 UX 팀에 있다고 봤는데, 대다수 팀은 그 결과를 ‘그대로 신뢰’하기보다 자기 맥락에서 소규모로 재검증하는 태도가 필요합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/ai-ux-getting-started/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Getting Started with AI for UX</a> — AI를 리서치 실무에 처음 들일 때의 출발점을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/storytelling-study-guide/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Storytelling in UX Work — Study Guide</a> — AI가 뽑아낸 데이터를 사람에게 전달·설득하는 방법의 맥락을 더합니다.</li></ul><h3>Wemeet의 관점</h3><p>합성 사용자는 ‘리서치를 없애는 도구’가 아니라 ‘가설을 값싸게 넓히는 도구’로 볼 때 값어치가 큽니다. Wemeet은 AI 리서치를 실제 사용자 검증과 짝지어, 속도는 취하되 결론의 책임은 사람이 지는 구조를 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/genai-ux-research-agenda/",
    "tags": [
      "UX Research",
      "Generative AI",
      "Research Methods"
    ],
    "thumb": ""
  },
  {
    "id": "2026-07-01-glm-5-frontier-open-model",
    "category": "ai",
    "date": "2026-07-01",
    "title": "GLM-5, 오픈 웨이트가 프런티어에 닿다",
    "rawTitle": "GLM-5: China's First Public AI Company Ships a Frontier Model",
    "summary": "Z.ai의 GLM-5가 Artificial Analysis 오픈 웨이트 1위에 올랐다. 744B MoE, MIT 라이선스, 그리고 엔비디아 없이 화웨이 칩만으로 학습했다는 점이 핵심.",
    "bodyHtml": "<p>중국 Z.ai가 공개한 GLM-5가 Artificial Analysis 기준 오픈 웨이트 모델 1위에 오르며 화제를 모았습니다. 총 744B 파라미터에 토큰당 40B만 활성화하는 Mixture-of-Experts(MoE) 구조로, ‘DeepSeek Sparse Attention’을 얹어 28.5조(28.5T) 토큰으로 학습했습니다. 컨텍스트 창은 200K, 라이선스는 상업적 활용에 관대한 MIT입니다. 벤치마크에서도 SWE-bench Verified 77.8%, AIME 2026 92.7%, GPQA-Diamond 86.0%로 상위 프런티어급 성능을 보였습니다.</p><blockquote>\"이런 제약 속에서도 프런티어급 모델을 만들어낸다는 사실은, 대규모로 굴러가는 중국 자체 컴퓨트 스택의 실현 가능성에 대해 중요한 무언가를 말해준다.\"<cite>Hugging Face (mlabonne)</cite></blockquote><h3>왜 중요한가</h3><p>가장 주목할 대목은 성능 수치가 아니라 ‘어떻게 만들었는가’입니다. GLM-5는 엔비디아 하드웨어 없이 화웨이 어센드(Ascend) 칩만으로 학습된 것으로 전해졌습니다. 이는 최고 성능 GPU 접근이 제한된 환경에서도 프런티어급 모델이 나올 수 있음을 보여주는 신호이자, MIT 라이선스로 풀려 누구나 내려받아 상업적으로 쓸 수 있다는 점에서 오픈 생태계의 무게중심을 다시 흔듭니다.</p><h3>실무 적용</h3><p>MIT 라이선스 + 오픈 웨이트라는 조합은 자체 인프라에 모델을 얹어 데이터 유출 없이 코딩·에이전트 워크로드를 돌리려는 팀에 실질적 선택지를 넓혀줍니다. 다만 벤치마크 점수는 ‘상한선’일 뿐이므로, 도입 전 자사 과제(사내 코드베이스·도메인 질의)로 소규모 파일럿을 돌려 실제 체감 성능과 추론 비용을 함께 재보는 편이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: One Year Since the “DeepSeek Moment”</a> — 중국발 오픈 모델이 만든 흐름의 1년을 되짚는 맥락을 보완합니다.</li><li><a href=\"https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: State of Open Source — Spring 2026</a> — 오픈 웨이트 생태계 전반의 판도를 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>모델 경쟁의 무게추가 ‘가장 큰 모델’에서 ‘가장 열려 있고 옮기기 쉬운 모델’로 이동하고 있습니다. Wemeet은 오픈 웨이트를 도입할 때 라이선스·배포 자유도와 함께 자사 과제 기준의 실측을 먼저 확인해, 화제성이 아니라 실효로 채택 여부를 가릅니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/mlabonne/glm-5",
    "tags": [
      "Open Source LLM",
      "MoE",
      "Benchmarks"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-29-survey-bots-data-cleaning",
    "category": "design",
    "date": "2026-06-29",
    "title": "설문 데이터에서 ‘봇’을 걷어내라",
    "rawTitle": "Kick the Bots Out of Your Survey Data",
    "summary": "공개 설문에 섞여 드는 봇 응답이 결과를 왜곡한다. NN/g가 봇을 솎아내는 데이터 정제 절차를 정리했다. 의심 신호는 ‘여럿이 겹칠 때’만 제거한다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Rachel Banawa가 누구나 참여할 수 있는 ‘공개 채널(open-channel)’ 설문에 자동 응답 봇이 섞여 들어와 데이터를 오염시키는 문제를 짚고, 봇을 걸러내는 일을 데이터 정제의 정식 단계로 삼으라고 권했습니다. 보상을 노린 자동화 응답이 늘면서, 이제 ‘응답을 모으는 일’만큼 ‘가짜 응답을 솎아내는 일’이 중요해졌습니다.</p><blockquote>\"봇 응답은 하나씩이 아니라 무더기로 도착하는 경향이 있다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>봇이 섞인 데이터로 분석하면 ‘진짜 사용자’의 목소리가 통계 뒤로 묻힙니다. 글은 의심 신호로 ①비정상적으로 빠르거나 특정 시간대에 몰린 완료 시간, ②지나치게 매끄럽고 일반적인 AI 말투의 주관식 답변, ③같은 IP에서 짧은 시간에 쏟아진 응답, ④중복·일회용 이메일 패턴, ⑤문항 무작위화에 어긋난 답변을 듭니다. 핵심 원칙은 ‘하나의 의심 신호만으로 곧장 가짜로 단정하지 말 것’ — 여러 신호가 함께 겹칠 때 비로소 제거를 검토해야 합니다.</p><h3>실무 적용</h3><p>설문을 돌리기 전에 봇 차단 장치(주의 확인 문항, 시간 기록, 중복 이메일 차단)를 먼저 심고, 수거 후에는 ‘완료 시간 → 주관식 품질 → IP·이메일 → 무작위화 정합성’ 순서로 교차 점검하는 정제 루틴을 두는 편이 안전합니다. 무엇을 ‘의심’으로 표시하고 ‘무엇을 왜 제거했는지’를 기록으로 남기면, 분석의 신뢰성과 이해관계자 설득력을 함께 지킬 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/diary-study-incentives/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Incentive Structures for Diary Studies</a> — 보상 설계가 응답의 ‘질’을 어떻게 좌우하는지의 맥락을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/establishing-baselines/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Your New UX Habit — Establishing Baselines for Impact</a> — 신뢰할 수 있는 데이터가 있어야 ‘기준선’도 의미를 갖는다는 점을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>데이터는 ‘많이 모았다’가 아니라 ‘믿을 수 있다’에서 가치가 갈립니다. Wemeet은 설문·리서치를 설계할 때 봇 차단 장치와 정제 기준을 먼저 세우고, 무엇을 왜 걸러냈는지 기록으로 남겨 결론의 신뢰를 확보하는 방식을 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/survey-bots/",
    "tags": [
      "UX Research",
      "Survey",
      "Data Quality"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-29-chatgpt-dreaming-memory",
    "category": "ai",
    "date": "2026-06-29",
    "title": "챗GPT, 대화 사이에 기억을 ‘다듬는’ 드리밍",
    "rawTitle": "Dreaming: Better memory for a more helpful ChatGPT",
    "summary": "오픈AI가 챗GPT의 기억을 백그라운드에서 자동 정리·갱신하는 ‘드리밍’을 공개했다. ‘저장해 달라’는 요청 없이도 맥락이 쌓이고, 지난 일은 과거형으로 바뀐다.",
    "bodyHtml": "<p>OpenAI가 ChatGPT의 기억을 백그라운드에서 스스로 정리·갱신하는 방식 ‘드리밍(Dreaming)’을 소개했습니다. 사용자가 ‘이걸 기억해 둬’라고 명시적으로 요청하지 않아도, 여러 대화에서 자연스럽게 드러난 맥락을 모델이 종합해 가장 신선하고 관련 있는 기억 상태로 유지한다는 것이 핵심입니다.</p><blockquote>\"드리밍은 챗GPT가 수많은 대화로부터 배우고 기억 상태를 종합해, 늘 가장 신선하고 관련 있는 맥락을 제공하게 한다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>기존의 ‘저장된 기억(saved memories)’은 시간이 지나면 낡는다는 한계가 있었습니다. 드리밍은 이를 보완해, 예컨대 ‘7월에 싱가포르에 갈 예정’이라는 기억을 여행이 끝난 뒤 ‘2026년 7월에 싱가포르에 다녀옴’처럼 과거형으로 자동 수정합니다. 명시적 요청에 기대지 않고 대화 속 맥락을 흡수하므로, 개인화의 정확도가 한 단계 올라가고 오래된 정보가 주는 ‘어긋남’이 줄어듭니다. 종합된 기억은 메모리 요약 페이지에서 검토·수정할 수 있습니다.</p><h3>실무 적용</h3><p>‘알아서 기억하는’ AI는 편리하지만, 무엇을 기억하고 언제 꺼낼지에 대한 통제권이 함께 가야 안전합니다. 사용자는 요약 페이지에서 기억을 추가·수정하고 ‘어떤 주제를 언제 꺼낼지’ 지시할 수 있습니다. 제품에 자동 메모리를 붙일 때는 민감 정보의 보존 범위, 사용자 검토·삭제 경로, 그리고 ‘틀린 기억’을 바로잡는 흐름을 처음부터 설계하는 것이 핵심입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/context-architecture/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Context Architecture</a> — 모델이 맥락을 해석하도록 정보를 설계하는 관점에서 ‘기억’ 개선을 보완합니다.</li><li><a href=\"https://openai.com/index/previewing-gpt-5-6-sol/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Previewing GPT-5.6 Sol</a> — 모델 세대 갱신과 맞물려 ChatGPT의 개인화가 어떻게 강화되는지 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>AI의 ‘기억’은 편의와 통제 사이의 줄타기입니다. Wemeet은 자동 메모리의 개인화 이점을 취하되, 사용자가 무엇이 기억됐는지 보고 고치고 지울 수 있는 경로를 먼저 설계해 ‘똑똑하면서도 믿을 수 있는’ 개인화를 우선합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/chatgpt-memory-dreaming/",
    "tags": [
      "OpenAI",
      "ChatGPT",
      "Memory"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-28-ux-baselines-impact",
    "category": "design",
    "date": "2026-06-28",
    "title": "UX 성과는 ‘시작 전 측정’에서 갈린다",
    "rawTitle": "Your New UX Habit: Establishing Baselines for Impact",
    "summary": "NN/g가 일을 시작하기 전 ‘기준선(baseline)’을 먼저 재 두라고 권한다. 개선 효과는 늦게 측정하면 증명할 수 없다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Taylor Dykes와 Pavel Samsonov가 UX 팀이 자기 가치를 증명하지 못하는 진짜 이유는 ‘일을 못해서’가 아니라 ‘너무 늦게 측정해서’라고 짚었습니다. 핵심은 작업을 시작하기 전에 현재 상태를 먼저 재 두는 습관, 즉 <strong>기준선(baseline)</strong>을 세우는 것입니다.</p><blockquote>\"기준선이 없으면 작업 후의 측정값은 무엇이든 의미할 수 있다. 기준선이 관련성을 만든다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>기준선은 개선 전 제품의 상태를 담은 초기 벤치마크로, ‘이전과 이후’를 나란히 비교할 수 있게 해 줍니다. 비교 대상이 없으면 개선 후의 완료율·오류율이 좋은 수치인지조차 판단할 수 없습니다. 글은 ‘느낌이 어땠나(태도형)’보다 ‘무엇이 일어났나(행동형)’ 지표가 조직을 설득하는 데 더 강력하고, 모으기 쉬운 지표보다 의미 있는 한 가지 지표를 고르는 편이 사후 ‘체리피킹’을 막는다고 말합니다.</p><h3>실무 적용</h3><p>프로젝트에 들어가기 전 ①현재 경험을 측정하고, ②측정 방법을 결과와 함께 기록하며, ③이를 이해관계자와 먼저 공유하는 3단계를 권합니다. 완료율·오류율처럼 행동을 드러내는 지표 하나를 신중히 골라 ‘출발선’을 박아두면, 나중에 개선 효과를 두고 벌어지는 소모적 논쟁을 근거 한 줄로 정리할 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/behavioral-economics-for-ux/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Hidden Why — Behavioral Economics for UX</a> — 행동형 지표 뒤에 숨은 ‘왜’를 읽는 틀을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/state-of-ux-2026/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: State of UX 2026 — Design Deeper to Differentiate</a> — 성과 증명이 UX의 생존 과제가 된 2026년의 흐름을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>증명되지 않은 개선은 ‘했다’는 주장에 그칩니다. Wemeet은 프로젝트 첫날 핵심 행동 지표의 기준선을 먼저 측정해 두고, 모든 개선을 ‘이전 대비 얼마나’로 말할 수 있게 설계하는 방식을 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/establishing-baselines/",
    "tags": [
      "UX Metrics",
      "Baselines",
      "UX Research"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-28-gpt-5-6-sol-terra-luna",
    "category": "ai",
    "date": "2026-06-28",
    "title": "오픈AI, GPT-5.6 ‘솔·테라·루나’ 미리보기",
    "rawTitle": "Previewing GPT-5.6 Sol: a next-generation model",
    "summary": "오픈AI가 차세대 GPT-5.6을 솔·테라·루나 3종으로 공개했다. 플래그십 솔, 값을 절반으로 낮춘 테라, 가장 저렴한 루나로 갈라 내놓았다.",
    "bodyHtml": "<p>OpenAI가 차세대 모델 GPT-5.6을 세 갈래로 나눠 제한 미리보기로 공개했습니다. 프런티어 성능의 플래그십 <strong>솔(Sol)</strong>, 균형형 저비용 <strong>테라(Terra)</strong>, 가장 빠르고 저렴한 <strong>루나(Luna)</strong>로, 같은 세대를 용도와 예산에 맞춰 고르도록 한 점이 핵심입니다.</p><blockquote>\"솔은 프런티어 추론과 장기 호흡의 에이전트 작업을 위해 설계됐다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>세 모델은 이렇게 갈립니다. <strong>솔</strong>은 소프트웨어 엔지니어링·컴퓨터 조작·전문 지식 노동·과학 연구·사이버보안에서 한계를 끌어올린 최상위 모델, <strong>테라</strong>는 GPT-5.5에 필적하는 성능을 약 2배 낮은 비용으로 내는 일상형, <strong>루나</strong>는 가장 빠르고 비용 효율이 높은 막내입니다. 토큰 100만 개당 가격도 솔 $5/$30, 테라 $2.50/$15, 루나 $1/$6로 단계가 분명합니다. 모델을 하나로 통일하지 않고 ‘성능·비용 스펙트럼’으로 펼친 것이 이번 발표의 방향입니다.</p><h3>실무 적용</h3><p>미리보기 동안 솔·테라·루나는 OpenAI API와 Codex를 통해 신뢰 파트너·조직에만 제공되며, ChatGPT에서는 아직 쓸 수 없습니다(정식 출시는 향후 예정). 실무에서는 모든 작업에 최상위 모델을 쓰기보다, 난도 높은 추론·에이전트 작업엔 솔, 대량의 일상 작업엔 테라, 단순·고빈도 호출엔 루나를 배분하는 ‘모델 라우팅’이 비용을 좌우합니다. 솔은 고위험·민감 요청에 대한 가장 강력한 안전 스택과 함께 출시된다는 점도 도입 시 고려할 변수입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/chatgpt-memory-dreaming/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Dreaming — Better memory for a more helpful ChatGPT</a> — 모델 세대 갱신과 맞물린 ChatGPT의 메모리 개선 흐름을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/context-architecture/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Context Architecture</a> — 더 강해진 모델을 제품에 붙일 때 맥락을 설계하는 관점을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>모델이 한 종에서 ‘라인업’으로 갈라지면, 경쟁력은 ‘가장 센 모델을 쓰는가’가 아니라 ‘작업마다 맞는 모델을 고르는가’로 옮겨갑니다. Wemeet은 기능별 난도와 호출 빈도를 먼저 분류해 솔·테라·루나급을 의도적으로 배분하고, 성능 대비 비용을 기획 단계의 변수로 다루는 방식을 우선합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/previewing-gpt-5-6-sol/",
    "tags": [
      "OpenAI",
      "GPT-5.6",
      "LLM"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-27-ux-copy-three-sizes",
    "category": "design",
    "date": "2026-06-27",
    "title": "UX 문구는 ‘하나의 크기’가 아니다",
    "rawTitle": "UX Copy Sizes: Long, Short, and Micro",
    "summary": "NN/g가 UX 문구를 롱폼·숏폼·마이크로카피 세 크기로 나눴다. 같은 화면도 어느 크기를 쓰느냐에 따라 읽고 행동하는 방식이 달라진다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Taylor Dykes가 ‘UX 문구’는 하나의 덩어리가 아니라 길이에 따라 <strong>롱폼(long-form)·숏폼(short-form)·마이크로카피(microcopy)</strong> 세 가지 크기로 나뉘며, 각 크기를 용도에 맞게 골라 써야 한다고 정리했습니다. 세 용어는 자주 뒤섞여 쓰이지만 목적이 서로 다릅니다.</p><blockquote>\"롱폼은 복잡하고 정보가 풍부한 내용을 전달할 수 있는 유일한 문구 유형이다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>세 크기는 이렇게 갈립니다. <strong>롱폼(3문단 이상)</strong>은 문서·도움말·정책 설명처럼 깊은 이해가 필요하고 검색 노출에도 유리한 글, <strong>숏폼(2~3문단)</strong>은 제품 설명·온보딩처럼 한 가지 핵심 생각을 스캔 가능하게 전하는 글, <strong>마이크로카피(3문장 미만)</strong>는 버튼 라벨·오류 메시지·입력 안내처럼 행동을 즉시 유도하는 가장 작은 단위입니다. 같은 화면이라도 어느 크기를 고르느냐에 따라 사용자가 정보를 읽고 행동하는 방식이 달라집니다.</p><h3>실무 적용</h3><p>화면을 설계할 때 ‘문구를 얼마나 쓸까’가 아니라 ‘이 정보는 어느 크기가 맞나’를 먼저 정하는 편이 낫습니다. 긴 안내문은 마이크로카피와 소제목으로 끊어 스캔성을 살리고, 버튼·오류 메시지 같은 마이크로카피는 가장 자주 읽히는 만큼 단어 하나까지 따로 다듬을 가치가 있습니다. 한 크기로 모든 것을 해결하려 들면 길면 외면받고 짧으면 정보가 빈다는 점을 기억해야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/3-is-of-microcopy/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The 3 I’s of Microcopy — Inform, Influence, and Interact</a> — 가장 작은 단위인 마이크로카피가 하는 세 가지 역할을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/3-cs-microcopy/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The 3 C’s of Informational Microcopy</a> — 정보형 마이크로카피를 명확하게 쓰는 기준을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>좋은 카피는 ‘많이 쓰는 것’이 아니라 ‘맞는 크기로 쓰는 것’입니다. Wemeet은 화면마다 정보의 무게를 먼저 가늠해 롱폼·숏폼·마이크로카피를 의도적으로 배분하고, 가장 자주 읽히는 마이크로카피부터 정교하게 다듬는 방식을 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/ux-copy-sizes/",
    "tags": [
      "UX Writing",
      "Microcopy",
      "Content Design"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-27-gemini-flash-computer-use",
    "category": "ai",
    "date": "2026-06-27",
    "title": "제미나이 3.5 플래시, ‘컴퓨터 조작’을 내장하다",
    "rawTitle": "Introducing computer use in Gemini 3.5 Flash",
    "summary": "구글이 브라우저·모바일·데스크톱을 직접 조작하는 ‘컴퓨터 유즈’ 기능을 제미나이 3.5 플래시에 기본 내장했다. 별도 모델이 아니라 주력 모델로 통합됐다.",
    "bodyHtml": "<p>Google이 화면을 보고 추론해 직접 조작하는 ‘컴퓨터 유즈(computer use)’ 기능을 주력 모델 <strong>Gemini 3.5 Flash</strong>에 기본 도구로 내장했다고 밝혔습니다. 이전에는 Gemini 2.5 기반의 별도 모델로만 제공되던 능력이, 이제 메인 Flash 모델 안으로 들어온 것이 핵심입니다.</p><blockquote>\"컴퓨터 유즈는 이제 Gemini 3.5 Flash에 내장된 도구로, 지금까지 중 최고 성능을 낸다.\"<cite>Google</cite></blockquote><h3>왜 중요한가</h3><p>컴퓨터 유즈는 에이전트가 브라우저·모바일·데스크톱 환경을 가로질러 ‘보고(see)·판단하고(reason)·실행(action)’하게 해 줍니다. 단발성 명령이 아니라 긴 호흡의 작업(long-horizon)을 처리하도록 설계돼, 기업 업무 자동화·지속적 소프트웨어 테스트·접근성 점검 같은 실제 노동에 쓸 수 있습니다. 별도 모델을 따로 부르지 않고 주력 모델 하나로 추론과 화면 조작을 함께 처리한다는 점에서, ‘말하는 AI’에서 ‘일하는 AI’로의 통합이 한 단계 더 진행된 신호입니다.</p><h3>실무 적용</h3><p>개발자·기업은 Gemini API와 Gemini Enterprise Agent Platform을 통해 컴퓨터 유즈를 쓸 수 있고, Browserbase로 데모 환경도 체험할 수 있습니다. 다만 화면을 직접 조작하는 에이전트는 권한·오작동·되돌리기(rollback) 설계가 함께 가야 안전합니다. 지금은 반복적이고 검증 가능한 작업(테스트, 데이터 정리, 문서 점검)부터 좁게 적용해 신뢰 구간을 넓혀가는 접근이 현실적입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google: Watch 9 Google videos of Gemini Omni and Gemini 3.5 Flash</a> — 3.5 Flash 계열의 멀티모달·실행 능력을 영상으로 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/ai-agents-as-users/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: AI Agents as Users</a> — 화면을 ‘쓰는’ 주체가 사람만이 아니게 될 때의 UX 함의를 함께 짚습니다.</li></ul><h3>Wemeet의 관점</h3><p>에이전트가 직접 화면을 조작하는 시대에는, 제품이 ‘사람이 보는 UI’만이 아니라 ‘에이전트가 다루는 인터페이스’까지 고려해야 합니다. Wemeet은 자동화하기 좋은 반복 업무부터 컴퓨터 유즈를 좁게 도입하고, 권한·되돌리기 설계를 함께 갖춘 뒤 적용 범위를 넓히는 방식을 우선합니다.</p>",
    "source": "Google",
    "sourceUrl": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/",
    "tags": [
      "Gemini",
      "AI Agents",
      "Computer Use"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-26-quantity-yields-quality-ux",
    "category": "design",
    "date": "2026-06-26",
    "title": "좋은 UX는 ‘하나’가 아니라 ‘여럿’에서 나온다",
    "rawTitle": "Quantity Yields Quality in UX: Iterative vs. Parallel vs. Competitive Design",
    "summary": "완벽한 한 안을 다듬기보다 여러 안을 견주는 편이 낫다. NN/g가 반복·병렬·경쟁 테스트의 결합을 정리했다. 병렬 설계는 사용성을 70%까지 끌어올렸다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Therese Fessenden이 좋은 UX란 ‘단번에 완벽한 설계’가 아니라 ‘여러 안을 많이 만들어 견주는 과정’에서 나온다고 정리했습니다. 핵심은 반복(iterative)·병렬(parallel)·경쟁 테스트(competitive testing) 세 방법을 따로가 아니라 함께 쓰는 데 있습니다.</p><blockquote>\"반복, 병렬 설계, 경쟁 테스트를 결합하면 팀은 빠르게 움직이고, 폭넓게 탐색하며, 근거에 기반한 확신 있는 결정을 내릴 수 있다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>세 방법은 이렇게 갈립니다. <strong>반복 설계</strong>는 한 방향을 사용성 테스트로 다듬어 최소 2~3회 개선하는 방식, <strong>병렬 설계</strong>는 여러 디자이너가 서로 독립적으로 안을 낸 뒤 장점을 하나로 합치는 방식, <strong>경쟁 테스트</strong>는 자사 안과 경쟁사 3~4개 안을 나란히 두고 사용성을 평가하는 방식입니다. NN/g의 사례 연구에서 같은 디자인을 v1에서 v2로 개선했을 때, 전통적 반복 설계는 사용성이 18% 좋아진 데 그쳤지만 병렬 설계는 70%까지 향상됐습니다. ‘하나를 완벽히’보다 ‘여럿을 견주기’가 더 큰 도약을 만든다는 뜻입니다.</p><h3>실무 적용</h3><p>초기에 한 안을 붙들고 다듬기보다, 거친 시안 여러 개를 동시에 만들어 비교하는 데 시간을 쓰는 편이 비용 대비 효과가 큽니다. 자원이 적다면 ‘병렬로 여러 안 발산 → 추려서 반복으로 다듬기 → 출시 전 경쟁사 디자인과 나란히 테스트해 근거 확보’ 순서가 현실적입니다. 세 방법은 양자택일이 아니라 단계별로 이어 붙이는 도구입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/parallel-and-iterative-design/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Parallel &amp; Iterative Design + Competitive Testing = High Usability</a> — 세 방법을 결합하는 구체적 절차와 비용 효과를 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/parallel-design/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Parallel Design and Testing</a> — 병렬 설계가 사용성을 크게 끌어올리는 원리와 사례를 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>완성도는 한 사람이 한 안을 오래 붙드는 데서 나오지 않습니다. Wemeet은 초기에 의도적으로 여러 시안을 펼쳐 견주고, 사용자·경쟁사 기준으로 빠르게 추려가는 방식을 우선합니다 — 적은 비용으로 더 큰 사용성 도약을 노립니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/videos/quantity-yields-quality-in-ux-iterative-vs-parallel-vs-competitive-design/",
    "tags": [
      "UX",
      "Design",
      "Usability"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-26-openai-broadcom-jalapeno",
    "category": "ai",
    "date": "2026-06-26",
    "title": "오픈AI·브로드컴, 추론 전용 칩 ‘할라피뇨’ 공개",
    "rawTitle": "OpenAI and Broadcom unveil LLM-optimized inference chip",
    "summary": "오픈AI가 브로드컴과 LLM 추론 전용 칩 ‘할라피뇨’를 공개했다. 범용 가속기가 아니라 백지에서 설계했고, 와트당 성능이 현존 최고를 앞선다고 밝혔다.",
    "bodyHtml": "<p>OpenAI가 Broadcom과 함께 대규모 언어모델(LLM)의 ‘추론(inference)’ 전용으로 설계한 맞춤형 AI 칩 ‘할라피뇨(Jalapeño)’를 공개했습니다. 기존 범용 가속기를 AI에 맞춰 손본 것이 아니라, LLM 추론만을 겨냥해 백지에서 새로 설계했다는 점이 핵심입니다.</p><blockquote>\"할라피뇨는 과거 AI 워크로드용 범용 가속기를 손본 것이 아니라, 현대 LLM 추론을 위해 백지에서 설계한 칩이다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>OpenAI는 자사 모델·커널·서빙 시스템·제품 요구를 꿰뚫는 이해를 바탕으로, 파트너 Broadcom·Celestica와 함께 칩을 처음부터 설계했다고 밝혔습니다. 현재 엔지니어링 샘플이 실험실에서 목표 생산 주파수·전력으로 실제 ML 워크로드(예: GPT-5.3-Codex-Spark)를 돌리고 있고, 초기 테스트에서 ‘와트당 성능’이 현존 최고 수준을 크게 앞선다고 합니다. 모델을 만드는 회사가 그 모델을 가장 잘 돌릴 칩까지 직접 설계하는 ‘수직 통합’의 신호입니다.</p><h3>실무 적용</h3><p>할라피뇨는 2026년 말 초기 배치를 시작해 여러 세대에 걸쳐 기가와트 규모로 확장될 다세대 컴퓨팅 플랫폼의 첫 단계입니다. 추론의 전력 효율이 좋아지면 같은 예산으로 더 많은 추론을 돌릴 수 있어, AI 기능을 제품에 넣는 쪽의 단가·지연이 점차 낮아질 여지가 생깁니다. 다만 실제 가용성은 배치 일정에 달려 있으므로, 지금은 ‘추론 비용 구조가 바뀔 수 있다’는 방향성으로 받아들이는 것이 적절합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/openai-and-broadcom-announce-strategic-collaboration/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: OpenAI and Broadcom announce strategic collaboration</a> — 10기가와트 규모 ‘OpenAI 설계 가속기’ 합의 등 이번 칩이 올라탄 대형 인프라 맥락을 보완합니다.</li><li><a href=\"https://openai.com/index/openai-nvidia-systems-partnership/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: OpenAI and NVIDIA announce strategic partnership</a> — 자체 칩과 외부 GPU(엔비디아)를 함께 쓰는 멀티 공급 전략을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>AI 경쟁의 무게중심이 ‘모델 성능’에서 ‘그 모델을 얼마나 싸고 효율적으로 돌리느냐’로 내려가고 있습니다. Wemeet은 추론 비용·전력의 구조 변화를 제품 기획의 변수로 미리 읽어, 기능 단가가 낮아질 흐름에 맞춰 AI 도입의 우선순위를 설계하는 방식을 우선합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/openai-broadcom-jalapeno-inference-chip/",
    "tags": [
      "OpenAI",
      "Broadcom",
      "Chips"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-25-four-design-jobs-ai",
    "category": "design",
    "date": "2026-06-25",
    "title": "AI가 만든 디자인 직무, 네 갈래로 쪼개졌다",
    "rawTitle": "The Four Design Jobs AI Created (So Far)",
    "summary": "‘AI 디자인’은 하나가 아니다. NN/g가 AI와 함께·AI 제품·AI 에이전트용·AI 자체를 다루는 네 직무로 갈라졌다고 정리했다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Sarah Gibbons가 한 덩어리로 뭉뚱그려지던 ‘AI 디자인’이 실제로는 서로 다른 네 갈래의 일로 쪼개졌다고 정리했습니다. 같은 ‘AI 디자이너’라는 이름 아래 필요한 역량도, 성공의 기준도 전혀 다른 직무들이 섞여 있다는 진단입니다.</p><blockquote>\"한때 하나의 주제였던 것이 이제 적어도 네 가지 서로 다른 지향으로 갈라졌다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>글은 네 직무를 이렇게 나눕니다. ①<strong>AI와 함께 디자인하기</strong>(AI 도구로 작업 흐름을 가속), ②<strong>AI 제품 디자인</strong>(챗봇처럼 AI 기능을 사용자에게 전달하는 화면 설계), ③<strong>AI 에이전트를 위한 디자인</strong>(사람이 아니라 에이전트가 읽고 행동할 데이터·콘텐츠 구조 설계), ④<strong>AI 자체를 디자인하기</strong>(엔지니어와 함께 모델의 행동·평가 기준·원칙을 정의). 오늘날 대다수는 ①에 머물지만, ③·④의 수요는 그 일을 해낼 디자이너의 공급보다 훨씬 빠르게 늘고 있습니다.</p><h3>실무 적용</h3><p>조직은 ‘AI 디자이너 한 명’으로 뭉뚱그리지 말고, 네 직무 중 어디에 사람이 필요한지부터 구분해 팀을 짜야 합니다. 특히 ④는 모델 출력이 품질 기준을 충족하는지 검증할 ‘평가 기준(evaluation criteria)’을 설계하고, 파인튜닝 데이터와 적대적 테스트 원칙을 함께 만드는 일로, 그동안 순수 엔지니어링으로 치부됐지만 본질은 디자인 판단입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/ai-era-critique/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Core Skill of Design in the AI Era — Critique</a> — ‘평가 기준을 세우고 비평하는 힘’이 왜 AI 시대 디자이너의 핵심 역량인지 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/vibe-architects/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Vibe Architects — Agentic Vibe Coders</a> — 비개발자가 에이전트 시스템을 직접 만드는 흐름과 맞물려, 디자이너의 일이 어떻게 확장되는지 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>‘AI를 다룬다’는 한 문장 안에 전혀 다른 직무가 숨어 있습니다. Wemeet은 프로젝트마다 필요한 AI 디자인의 ‘종류’를 먼저 구분하고, 화면을 그리는 일과 모델의 기준을 정의하는 일을 분리해 각기 다른 전문성으로 접근하는 방식을 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/design-jobs-ai-created/",
    "tags": [
      "UX",
      "AI",
      "Design"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-25-gpt5-immunology-mystery",
    "category": "ai",
    "date": "2026-06-25",
    "title": "GPT-5, 3년 묵은 면역학 수수께끼를 풀다",
    "rawTitle": "How GPT-5 helped immunologist Derya Unutmaz solve a 3-year-old mystery",
    "summary": "면역학자 Unutmaz가 GPT-5 Pro의 도움으로 3년간 막혔던 실험을 풀었다. 모델은 다른 실험의 결과까지 정확히 예측했다.",
    "bodyHtml": "<p>면역학자 Derya Unutmaz 교수가 3년 동안 풀지 못했던 실험 결과의 수수께끼를 GPT-5 Pro의 도움으로 풀어냈습니다. 사람을 암·질병과 싸우게 하는 특정 면역세포를 둘러싼 의문이었는데, 묵혀 둔 데이터를 모델에 올려 분석을 맡기자 막혔던 고리가 풀렸습니다.</p><blockquote>\"GPT-5 Pro는 데옥시글루코스가 IL-2라는 단백질의 생성을 방해한다고 제시했다.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>핵심은 모델이 ‘왜 그런 결과가 나왔는지’의 메커니즘을 제안했다는 점입니다. 데옥시글루코스가 IL-2 단백질 합성을 방해하고, 이 IL-2가 T세포를 염증 반응 세포인 Th17로 바뀌지 못하게 막는다는 설명이었습니다. 더 나아가 Unutmaz가 이미 끝낸 다른 실험 — 림프종을 표적하는 CD8+ T세포가 암세포를 죽이는 능력이 강화된 사례 — 을 두고 결과를 ‘예측’해 보라고 하자, GPT-5 Pro는 그 향상을 정확히 맞혔습니다.</p><h3>실무 적용</h3><p>이는 AI가 단순 요약을 넘어 ‘가설을 세우고 실험 결과를 예측하는 연구 파트너’로 쓰일 수 있음을 보여줍니다. 다만 모델의 제안은 출발점일 뿐, 실제 검증은 연구실의 실험으로 닫아야 합니다. 데이터·맥락을 충분히 입력하고, 제안된 메커니즘을 반드시 사람이 재현·반증하는 절차를 함께 두는 것이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/gpt-5-mathematical-discovery/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: How GPT-5 helped mathematician Ernest Ryu solve a 40-year-old open problem</a> — 같은 모델이 수학의 오랜 난제에서도 돌파구를 도운 사례를 함께 보여줍니다.</li><li><a href=\"https://openai.com/index/accelerating-science-gpt-5/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Early experiments in accelerating science with GPT-5</a> — AI로 과학 연구를 가속하는 초기 실험들의 맥락을 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>AI의 쓸모가 ‘글을 다루는 일’에서 ‘발견을 돕는 일’로 넘어가고 있습니다. Wemeet은 AI를 가설 생성·데이터 해석의 파트너로 적극 활용하되, 사람이 결과를 검증·재현하는 단계를 반드시 끼워 ‘빠른 통찰’과 ‘신뢰할 결론’을 함께 확보하는 방식을 우선합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/gpt-5-immunology-mystery/",
    "tags": [
      "OpenAI",
      "GPT-5",
      "Science"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-24-diary-study-incentives",
    "category": "design",
    "date": "2026-06-24",
    "title": "다이어리 연구, 보상 설계가 데이터 질을 가른다",
    "rawTitle": "Incentive Structures for Diary Studies",
    "summary": "참가자가 중도 이탈하거나 자격만 채우는 부실 기록을 내는 문제를 보상 구조로 푼다. NN/g가 세 가지 보상 설계를 비교했다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Maria Rosala가 ‘다이어리 연구(diary study)’의 성패를 가르는 숨은 변수로 ‘보상 구조(incentive structure)’를 짚었습니다. 며칠~몇 주에 걸쳐 사용자가 스스로 일상을 기록하게 하는 이 방법은 풍부한 맥락을 주지만, 참가자가 중도에 멈추거나 성의 없는 기록만 내면 데이터가 통째로 흔들립니다.</p><blockquote>\"잘못 설계된 보상 구조는 참가자가 제출을 미루거나, 성의 없는 기록을 내거나, 보상 자격만 채울 만큼만 보고하도록 유도한다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>다이어리 연구의 진짜 적은 ‘참여 이탈(attrition)’과 ‘형식적 응답’입니다. 보상을 어떻게 주느냐가 곧 어떤 행동을 강화하느냐로 직결됩니다. 글은 세 구조를 비교합니다. ①최소 제출 보상(짧은 연구에 적합하나 막판 몰아쓰기·최소 노력 위험), ②건당 지급(길고 품이 드는 연구에 동기 부여, 단 저품질·허위 기록 위험), ③계층형 건당 지급(가치 있는 행동에 차등 보상해 제출의 ‘구성’을 통제). 예컨대 ‘첫 4주 주간 기록은 건당 15달러, 추가 제출은 5달러’처럼 설계해 핵심 데이터부터 확실히 확보하는 식입니다.</p><h3>실무 적용</h3><p>보상은 ‘참여를 사는’ 게 아니라 ‘원하는 행동을 설계하는’ 도구로 봐야 합니다. 일관성·완결성·응답성에 보너스를 얹고, 긴 연구에서는 한 번에 몰아주기보다 일정 간격으로 나눠 지급해 몰입을 유지하며, 보상 규칙을 처음부터 명확히 고지해 ‘자격만 채우는’ 최소 응답을 줄이는 것이 핵심입니다. 건당 보상은 적게는 몇 달러에서 많게는 15달러까지 폭이 넓으므로, 과업의 부담과 데이터의 가치에 맞춰 단가를 정해야 합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/behavioral-economics-for-ux/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Hidden Why — Behavioral Economics for UX</a> — 인센티브가 실제 행동을 어떻게 바꾸는지의 행동경제학 토대를 보완합니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/06/benefits-cognitive-inclusion-ux-research/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: The Benefits Of Cognitive Inclusion In UX Research</a> — 참가자 구성·설계가 리서치 결과의 질을 어떻게 좌우하는지 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>리서치의 품질은 질문지가 아니라 ‘참가자가 끝까지, 성의껏 응할 이유’를 설계했는지에서 갈립니다. Wemeet은 사용자 연구를 설계할 때 보상·일정·고지 규칙을 먼저 정해, 적은 비용으로도 신뢰할 수 있는 데이터를 확보하는 방식을 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/diary-study-incentives/",
    "tags": [
      "UX",
      "Research",
      "DiaryStudy"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-24-openai-daybreak-cyber",
    "category": "ai",
    "date": "2026-06-24",
    "title": "오픈AI ‘데이브레이크’, 방어로 돌아선 보안 AI",
    "rawTitle": "Daybreak: Tools for securing every organization in the world",
    "summary": "오픈AI가 취약점을 찾아 검증·수정까지 잇는 사이버 방어 도구 모음 ‘데이브레이크’를 공개했다. Codex 보안은 이미 3000만 건 넘는 커밋을 점검했다.",
    "bodyHtml": "<p>OpenAI가 조직의 사이버 보안을 겨냥한 도구 모음 ‘데이브레이크(Daybreak)’를 공개했습니다. 핵심은 AI를 공격이 아니라 ‘방어’ 쪽에 세워, 소프트웨어의 취약점을 찾고(identify) 검증하고(validate) 고치는(remediate) 전 과정을 가속하는 데 있습니다.</p><blockquote>\"Daybreak enables organizations across the public and private sectors to identify, validate, and remediate vulnerabilities across the software they build and rely on.\"<cite>OpenAI</cite></blockquote><h3>왜 중요한가</h3><p>그동안 ‘공격용 AI’의 위협은 자주 회자됐지만, 정작 방어자의 손에 쥐어진 실전 도구는 드물었습니다. 데이브레이크의 ‘Codex 보안(Codex Security)’은 3월 리서치 프리뷰 이후 3만여 개 코드베이스에서 3000만 건이 넘는 커밋을 스캔했고, 사람이 직접 ‘수정됨’으로 표시한 발견이 7만 건, 자동으로 수정 확인된 발견이 50만 건을 넘었습니다. 발견에서 그치지 않고 ‘고침(fix)’까지 닫는 루프를 노린다는 점이 차별점입니다.</p><h3>실무 적용</h3><p>데이브레이크는 거버넌스 모델 ‘Trusted Access for Cyber’로 정당한 보안 업무에 한해 모델을 더 정밀하게 열어 주고, 파트너 프로그램을 통해 보안 기업이 자사 제품 안에서 GPT-5.5의 방어 역량을 쓰도록 합니다. 또 Trail of Bits·HackerOne과 함께 시작한 ‘Patch the Planet’은 cURL·Go·Python·Sigstore 등 30여 개 오픈소스 프로젝트의 취약점을 ‘발견에서 패치까지’ 잇습니다. 도입 시에는 AI에 맡길 범위와 사람이 검수·승인할 지점, 권한 경계를 먼저 정해 두는 것이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://openai.com/index/trusted-access-for-cyber/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Introducing Trusted Access for Cyber</a> — 보안 작업에 모델을 ‘정당한 범위로만’ 여는 거버넌스 설계를 보완합니다.</li><li><a href=\"https://openai.com/index/patch-the-planet/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">OpenAI: Patch the Planet</a> — 오픈소스 취약점을 발견에서 패치까지 잇는 공동 이니셔티브를 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>AI 보안의 무게중심이 ‘공격을 막는 공포’에서 ‘방어를 자동화하는 실무’로 옮겨가고 있습니다. Wemeet은 자동화된 취약점 점검의 속도를 취하되, 사람이 검증·승인하는 단계와 권한 기록을 먼저 설계해 ‘빠르면서도 책임 있는’ 보안 자동화를 우선합니다.</p>",
    "source": "OpenAI",
    "sourceUrl": "https://openai.com/index/daybreak-securing-the-world/",
    "tags": [
      "OpenAI",
      "Cybersecurity",
      "Daybreak"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-23-behavioral-economics-ux",
    "category": "design",
    "date": "2026-06-23",
    "title": "사용자의 ‘숨은 왜’, 행동경제학으로 읽기",
    "rawTitle": "The Hidden Why: Behavioral Economics for UX",
    "summary": "사용자가 의도대로 행동하지 않는 이유를 행동경제학으로 진단합니다. 잘 적용한 기업은 매출 성장에서 85% 앞섰습니다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Sarah Thompson이 ‘행동경제학(behavioral economics)’을 UX의 기본 도구로 끌어들이자고 제안했습니다. 사용성만으로는 설명되지 않는 질문 — 왜 사용자는 ‘하겠다’고 해놓고 끝까지 하지 않는가 — 에 답하려면, 동기·주의·의사결정의 심리를 함께 봐야 한다는 것입니다.</p><blockquote>\"감정, 습관, 불확실성, 사회적 신호, 인지된 위험과 노력, 그리고 정보가 제시되는 방식 — 이 모두가 사람의 행동을 좌우한다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>사용성 테스트는 ‘할 수 있는가’를 보지만, 정작 전환을 막는 건 ‘하고 싶지 않거나 망설이는’ 심리적 장벽인 경우가 많습니다. 글은 Irrational Labs의 ‘3B 프레임워크’ — 원하는 행동(Behavior), 가로막는 장벽(Barriers), 동기가 되는 이득(Benefits) — 로 이 간극을 구조화합니다. 행동경제학을 잘 적용한 기업이 동종 대비 매출 성장 85%, 매출총이익률 25% 더 높았다는 점도 짚습니다.</p><h3>실무 적용</h3><p>실제 사용자 단계를 그대로 지도화하고, 인지 편향 목록을 렌즈 삼아 마찰 지점을 찾은 뒤, 표적화된 개입을 설계해 측정 가능한 가설로 검증하는 흐름을 권합니다. ‘버튼을 더 눈에 띄게’ 같은 표면 처방 대신, 주의·인지 부하·약속 불안 같은 진짜 장벽을 먼저 규명하는 것이 핵심입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/03/persuasive-design-ten-years-later/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Persuasive Design — Ten Years Later</a> — 설득·영향의 설계 원칙이 10년 뒤 어떻게 진화했는지 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/diary-study-incentives/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: Incentive Structures for Diary Studies</a> — 동기·인센티브 설계가 실제 사용자 행동을 어떻게 바꾸는지 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>화면을 더 쉽게 만든다고 사람이 곧장 움직이지는 않습니다. Wemeet은 ‘무엇을 못 하는가’보다 ‘왜 안 하는가’를 먼저 묻고, 동기·장벽·이득을 함께 설계해 의도와 행동 사이의 간극을 좁히는 방식을 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/behavioral-economics-for-ux/",
    "tags": [
      "UX",
      "BehavioralEconomics",
      "Research"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-23-holo31-local-agents",
    "category": "ai",
    "date": "2026-06-23",
    "title": "내 PC에서 도는 ‘컴퓨터 사용’ 에이전트",
    "rawTitle": "Holo3.1: Fast & Local Computer Use Agents",
    "summary": "H Company가 로컬·온디바이스로 화면을 직접 조작하는 에이전트 ‘Holo3.1’을 공개했습니다. 모바일 정확도가 67%에서 79%로 뛰었습니다.",
    "bodyHtml": "<p>프랑스 스타트업 H Company가 컴퓨터를 직접 조작하는 ‘컴퓨터 사용 에이전트(computer-use agent)’ 신모델군 Holo3.1을 공개했습니다. 핵심은 클라우드뿐 아니라 일반 PC·모바일에서 ‘로컬로’ 돌면서도 웹·데스크톱·모바일을 가리지 않고 화면을 보고 클릭·입력하는 자동화를 수행한다는 점입니다.</p><blockquote>\"어디서든 동작하고, 어떤 에이전트 스택에도 통합되며, 워크플로가 있는 곳에서 그대로 실행되는 ‘보편 컴퓨터 사용 에이전트’.\"<cite>Hugging Face (H Company)</cite></blockquote><h3>왜 중요한가</h3><p>지금까지 화면을 조작하는 에이전트는 대개 클라우드의 큰 모델에 의존했습니다. 데이터가 외부로 나가고 비용·지연도 컸습니다. Holo3.1은 0.8B·4B·9B·35B 네 가지 크기와 FP8·Q4·NVFP4 양자화 체크포인트로, 성능 손실을 최소화하며 소비자 하드웨어에서 돌아갑니다. 모바일 벤치마크(AndroidWorld)에서 35B 모델은 67%에서 79.3%로, 소형(4B·9B)은 58%에서 72%로 뛰었고, NVFP4는 처리량 1.74배·평균 단계 시간 6.8초에서 3.3초로 빨라졌습니다.</p><h3>실무 적용</h3><p>온디바이스 실행은 ‘프라이버시가 곧 경쟁력’인 영역 — 사내 시스템 자동화, 민감 데이터 처리, 오프라인 현장 — 에서 특히 의미가 큽니다. 함수 호출(function calling) 프로토콜이 JSON 출력과 거의 같은 정확도에 도달해 기존 에이전트 프레임워크에 끼워 넣기도 쉬워졌습니다. 도입 시에는 에이전트가 접근하는 화면·권한 범위와 사람이 끼어들 검수 지점을 먼저 정해 두는 것이 안전합니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: NVIDIA Cosmos 3</a> — ‘세계를 이해하는’ 모델과 짝을 이루는, 실제로 ‘행동하는’ 에이전트의 진화를 함께 보여줍니다.</li><li><a href=\"https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google Blog: Managed Agents in the Gemini API</a> — 클라우드 샌드박스 기반 에이전트와 로컬 실행 노선을 대비해 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>에이전트 경쟁의 한 축이 ‘더 큰 모델’에서 ‘어디서 어떻게 돌리느냐’로 옮겨가고 있습니다. Wemeet은 빠르고 저렴한 로컬 자동화의 이점을 취하되, 권한·검수·기록 기준을 먼저 세워 ‘내 손 안에서 도는’ 자동화의 신뢰를 함께 확보하는 방식을 우선합니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/Hcompany/holo31",
    "tags": [
      "Agents",
      "OnDevice",
      "ComputerUse"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-22-vibe-architects",
    "category": "design",
    "date": "2026-06-22",
    "title": "‘바이브 아키텍트’: 비전공자의 에이전트 설계",
    "rawTitle": "Vibe Architects: Agentic Vibe Coders",
    "summary": "비전공자가 직관과 실험만으로 복잡한 AI 에이전트를 만들고 있습니다. 빠르지만 이해 없는 시스템은 쉽게 무너집니다.",
    "bodyHtml": "<p>Nielsen Norman Group의 Kate Moran과 Sarah Gibbons가 ‘바이브 아키텍트(vibe architects)’라는 새 부류를 짚었습니다. 개발자가 아닌 운영 담당자·디자이너·창업자가 정식 기술 교육 없이 Claude Code 같은 도구로 복잡하고 능동적인 AI 에이전트 시스템을 직접 만들어 쓰는 흐름입니다. 직관과 실험으로 빠르게 만들지만, 작동 원리를 모른 채 쌓인 시스템은 쉽게 무너집니다.</p><blockquote>\"바이브 아키텍트는 종종 기술 지식이나 작동 원리에 대한 이해 없이, AI 도구로 복잡하고 능동적인 에이전트 시스템을 만든다.\"<cite>Nielsen Norman Group</cite></blockquote><h3>왜 중요한가</h3><p>‘바이브 코딩’이 한 단계 더 나아가, 이제는 비전공자가 여러 단계를 스스로 수행하는 에이전트까지 조립합니다. 이들은 Reddit·YouTube·커뮤니티에서 익힌 반(半)직관적 패턴으로 결과를 내지만, 왜 동작하는지 설명하지 못하는 경우가 많습니다. 그 결과 시스템은 유지보수가 어렵고 시간이 지나며 서서히 망가지는(decay) 문제를 안습니다. 생성형 도구가 ‘만드는 장벽’을 없앤 만큼, ‘제대로 만드는’ 역량의 격차는 오히려 커집니다.</p><h3>실무 적용</h3><p>핵심은 속도를 살리되 ‘이해와 검증’을 보강하는 것입니다. 에이전트가 무엇을 할 수 있고 어디서 멈추는지, 어떤 데이터·권한에 접근하는지 명시하고, 출력에 대한 검수와 롤백 절차를 함께 두면 직관으로 만든 시스템도 운영 가능한 자산이 됩니다. 또 만든 사람만 아는 ‘암묵적 규칙’을 문서로 남겨 두면 시스템이 시간에 따라 무너지는 것을 늦출 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.nngroup.com/articles/design-jobs-ai-created/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: The Four Design Jobs AI Created (So Far)</a> — 비전공자의 AI 제작이 디자인 직무를 어떻게 재편하는지 보완합니다.</li><li><a href=\"https://www.smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Designing For Agentic AI</a> — 자율 에이전트에 통제·동의·책임을 설계하는 실전 UX 패턴을 제시합니다.</li></ul><h3>Wemeet의 관점</h3><p>만드는 일이 쉬워질수록 차별화는 ‘이해하고 책임지는’ 쪽에서 갈립니다. Wemeet은 빠른 실험을 환영하되, 에이전트의 권한·검수·문서화 기준을 먼저 세워 직관으로 만든 결과물을 신뢰할 수 있는 시스템으로 다듬는 방식을 우선합니다.</p>",
    "source": "Nielsen Norman Group",
    "sourceUrl": "https://www.nngroup.com/articles/vibe-architects/",
    "tags": [
      "AI",
      "Agents",
      "NoCode"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-22-nvidia-cosmos-3",
    "category": "ai",
    "date": "2026-06-22",
    "title": "엔비디아 ‘코스모스 3’, 물리 AI의 토대",
    "rawTitle": "Welcome NVIDIA Cosmos 3: The First Open Omni-model for Physical AI Reasoning and Action",
    "summary": "엔비디아가 세계 생성·물리 추론·행동 생성을 하나로 묶은 오픈 옴니 모델 ‘코스모스 3’를 공개했습니다. 로봇·자율주행의 토대를 노립니다.",
    "bodyHtml": "<p>엔비디아가 Hugging Face를 통해 오픈 옴니 모델 ‘코스모스 3(Cosmos 3)’를 공개했습니다. 세계 생성, 물리 추론, 행동 생성을 하나의 모델에 통합한 ‘세계 기초 모델(world foundation model)’로, 로봇·자율주행·스마트 공간 같은 ‘물리 AI(physical AI)’의 토대를 노린 것이 핵심입니다.</p><blockquote>\"Cosmos 3 gives you the foundation to simulate and understand the physical world.\"<cite>NVIDIA</cite></blockquote><h3>왜 중요한가</h3><p>지금까지 생성형 AI는 주로 텍스트·이미지 같은 ‘디지털 결과물’에 강했습니다. 코스모스 3는 무게중심을 ‘물리 세계의 이해와 시뮬레이션’으로 옮깁니다. Mixture-of-Transformers 구조로 텍스트·이미지·영상·오디오·행동(action)을 함께 처리해, 물리적으로 그럴듯한 영상을 만들고 다음에 일어날 일을 예측합니다. 효율형 Nano(160억 파라미터)와 대규모 연구용 Super(640억 파라미터) 두 종으로 제공돼, 로봇·자율주행 같은 현실 시스템의 ‘학습용 가상 세계’를 만드는 데 쓰입니다.</p><h3>실무 적용</h3><p>현실에서 데이터를 모으기 어렵거나 위험한 상황(공장 사고, 도로 위 돌발 상황)을 모델이 시뮬레이션으로 생성해, 로봇·자율주행 시스템을 더 싸고 안전하게 훈련시킬 수 있습니다. Hugging Face Diffusers에 통합돼 접근성도 높습니다. 다만 ‘물리적으로 그럴듯하다’가 ‘정확하다’는 아니므로, 도입 시에는 실제 환경 검증과 안전 경계를 함께 설계하는 것이 전제입니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://huggingface.co/blog/Hcompany/holo31\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Hugging Face: Holo3.1 — Fast &amp; Local Computer Use Agents</a> — ‘세계를 이해하는’ 모델과 짝을 이루는, 실제로 ‘행동하는’ 에이전트의 진화를 보완합니다.</li><li><a href=\"https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google Blog: Gemini Omni</a> — 멀티모달 ‘세계 이해’ 경쟁의 또 다른 축을 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>AI의 다음 전장은 화면 속 결과물을 넘어 ‘물리 세계의 이해’로 확장되고 있습니다. Wemeet은 이런 흐름이 디지털 제작에 주는 함의를 먼저 읽고, 시뮬레이션·예측이 ‘그럴듯함’에 그치지 않도록 검증과 책임 경계를 함께 설계하는 접근을 우선합니다.</p>",
    "source": "Hugging Face",
    "sourceUrl": "https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai",
    "tags": [
      "NVIDIA",
      "PhysicalAI",
      "WorldModel"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-21-humanoid-robots-humanity",
    "category": "design",
    "date": "2026-06-21",
    "title": "공장에 들어온 휴머노이드, 인간성을 묻다",
    "rawTitle": "The Impact Of Humanoid Robots On Humanity",
    "summary": "휴머노이드 로봇이 데모를 넘어 공장에 투입됐습니다. 더 사람을 닮을수록 일자리·고립·기만 같은 윤리·설계 질문이 함께 커집니다.",
    "bodyHtml": "<p>Smashing Magazine에 Carrie Webster가 휴머노이드 로봇이 ‘신기한 데모’를 넘어 산업 현장에 실제 투입되는 단계로 들어섰다고 짚었습니다. Figure·Tesla 같은 기업이 이미 공장에서 로봇을 가동하기 시작했고, 합성 피부와 AI의 발전으로 점점 더 사람을 닮아가면서 사회·심리·경제적 질문이 동시에 커지고 있습니다.</p><blockquote>\"로봇 혁명의 목표는 결코 인간을 대체하는 것이 아니라, 우리에게 인간다움을 되돌려주는 것이어야 한다.\"<cite>Smashing Magazine</cite></blockquote><h3>왜 중요한가</h3><p>이미 현실입니다. Figure의 Figure 02는 BMW 스파턴버그 공장에 수개월간 배치돼 3만 대가 넘는 차량 생산에 기여했고, Realbotix의 ‘Aria’ 같은 고가(약 17.5만 달러) 휴먼라이크 로봇도 등장했습니다. 위험한 노동을 대신하고 고령화에 대응한다는 이점이 분명한 만큼, 대규모 일자리 대체와 인간의 고립, 감시·기만 목적의 악용이라는 위험도 함께 커집니다. 사람과 기계를 눈으로 구분하기 어려워질수록 ‘언캐니 밸리’와 신뢰의 문제가 설계의 한복판으로 들어옵니다.</p><h3>실무 적용</h3><p>디자인·제품 관점의 핵심은 ‘정직한 정체 표시’입니다. 사용자가 지금 상대하는 것이 사람인지 기계인지 분명히 알 수 있게 하고, 동의·책임·통제의 경계를 인터페이스와 운영 규칙에 먼저 설계해야 합니다. 로봇·에이전트가 어떤 행동을 할 수 있고 어디서 사람에게 넘기는지, 무엇을 기록·고지하는지를 명시하면, 자동화의 효율을 취하면서도 기만과 책임 공백을 줄일 수 있습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://www.smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Smashing Magazine: Designing For Agentic AI</a> — 자율 행위자에게 통제·동의·책임을 설계하는 실전 UX 패턴을 보완합니다.</li><li><a href=\"https://www.nngroup.com/articles/ai-agents-as-users/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Nielsen Norman Group: AI Agents as Users</a> — 사람이 아닌 행위자가 인터페이스를 쓰는 환경의 함의를 함께 보여줍니다.</li></ul><h3>Wemeet의 관점</h3><p>기술의 진보는 멈출 수 없으니, 관건은 ‘무엇을 위해 쓰느냐’를 설계하는 일입니다. Wemeet은 자동화와 로봇이 사람을 밀어내는 도구가 아니라 사람의 시간을 돌려주는 도구가 되도록, 정체 표시와 책임 경계부터 먼저 설계하는 방식을 우선합니다.</p>",
    "source": "Smashing Magazine",
    "sourceUrl": "https://www.smashingmagazine.com/2026/06/impact-humanoid-robots-humanity/",
    "tags": [
      "Robotics",
      "Ethics",
      "AI"
    ],
    "thumb": ""
  },
  {
    "id": "2026-06-21-google-pics-nano-banana",
    "category": "ai",
    "date": "2026-06-21",
    "title": "구글 ‘Pics’, AI 이미지 편집을 ‘연출’로",
    "rawTitle": "Google Pics: a new image creation and editing tool built on Nano Banana",
    "summary": "구글이 Nano Banana 기반 이미지 생성·편집 도구 ‘Pics’를 공개했습니다. 객체 분리·이미지 속 텍스트 편집·협업 캔버스로 정밀한 ‘창작 연출’을 노립니다.",
    "bodyHtml": "<p>구글이 자사 최신 이미지 모델 ‘Nano Banana’를 기반으로 한 이미지 생성·편집 도구 ‘Pics’를 공개했습니다. 빈 캔버스에서 새로 만들든 기존 사진을 고치든, 복잡한 이미지 생성의 번거로움을 줄이고 ‘원하는 대로 정밀하게’ 통제할 수 있게 하는 것이 핵심입니다.</p><blockquote>\"AI로 만드는 일은 주사위 굴리기가 아니라 ‘창작 연출(creative direction)’처럼 느껴져야 한다.\"<cite>Google</cite></blockquote><h3>왜 중요한가</h3><p>생성형 이미지의 가장 큰 약점은 ‘우연성’입니다. 그럴듯한 결과는 나오지만, 원하는 한 부분만 정확히 바꾸기는 어려웠습니다. Pics는 객체 분리(특정 요소만 선택해 이동·크기 조절·변형), 이미지 안 텍스트의 편집·번역(원본 폰트와 디자인 유지), 슬라이드 등 Workspace 통합, 여러 사람이 동시에 작업하는 공유 캔버스를 제공합니다. 무게중심이 ‘한 번에 뽑기’에서 ‘의도대로 다듬기’로 이동하고 있음을 보여줍니다.</p><h3>실무 적용</h3><p>디자인·콘텐츠 팀은 배너·인포그래픽·초기 시안을 한 도구에서 만들고, 텍스트와 객체 단위로 정밀하게 수정할 수 있습니다. 이미지 속 다국어 텍스트 편집은 글로벌 캠페인의 현지화 비용을 크게 줄여 줍니다. 현재 Trusted Tester로 시작해 올여름 Google AI Pro·Ultra 구독자와 Workspace 비즈니스 고객에게 확대될 예정이므로, 도입 전 브랜드 자산·폰트·승인 흐름을 먼저 정리해 두면 전환이 매끄럽습니다.</p><h3>교차 참고</h3><ul><li><a href=\"https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google Blog: 100 things announced at I/O 2026</a> — Pics가 올라탄 올해 구글 AI 발표의 큰 맥락을 보여줍니다.</li><li><a href=\"https://blog.google/products/gemini/updated-image-editing-model/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">Google Blog: Nano Banana image editing upgrade</a> — Pics를 떠받치는 이미지 편집 모델의 진화를 보완합니다.</li></ul><h3>Wemeet의 관점</h3><p>도구가 ‘무작위 생성’에서 ‘연출 가능한 통제’로 갈수록, 사람의 일은 더 명확한 의도와 기준을 정하는 쪽으로 이동합니다. Wemeet은 AI 이미지도 브랜드 가이드와 편집 기준을 먼저 정한 뒤 정밀 통제 도구로 다듬어, 빠르면서도 흔들리지 않는 일관성을 확보하는 방식을 우선합니다.</p>",
    "source": "Google Workspace Blog",
    "sourceUrl": "https://blog.google/products-and-platforms/products/workspace/workspace-updates/",
    "tags": [
      "GoogleAI",
      "ImageEditing",
      "NanoBanana"
    ],
    "thumb": ""
  },
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
