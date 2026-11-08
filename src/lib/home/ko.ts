import type { HomeCopy } from "@/lib/home-copy";

export const homeKo: HomeCopy = {
  metaTitle: "DeTars | 모두를 위한 AI? 이 AI는 당신을 위한 것입니다.",
  metaDescription: "당신의 목표, 프로젝트, 일상. 함께 앞으로 나아가는 AI 파트너.",
  heroEyebrow: "당신만의 AI 파트너",
  heroH1: "모두를 위한 AI?<br><span class='grad'>이 AI는 당신을 위한 것입니다.</span>",
  heroSub: "당신의 목표, 프로젝트, 일상.<br>함께 앞으로 나아가는 AI 파트너.",
  heroPrimary: "목표 하나로 시작하기 →",
  heroSecondary: "당신을 위해 어떻게 일하는지 보기",
  futureKicker: "우리가 만들어 가는 미래",
  futureH2: "당신의 기기에서 더 많은 일을.<br>당신에게 더 많은 가능성을.",
  futureP: "모델의 역량이 커지고 컴퓨팅 자원을 더 쉽게 이용할 수 있게 됨에 따라, DeTars가 당신의 기기에서 더 많은 일을 할 수 있도록 노력하고 있습니다. 로컬과 클라우드의 지능이 함께 작동하고, 그 중심에는 당신의 프라이버시가 있는 미래를 향해서요.",
  proof: [
    { n: "몇 시간", l: "지켜보지 않아도 · 밤새 작업" },
    { n: "모든", l: "주요 모델 · 언제든 전환" },
    { n: "당신의 기기", l: "AI 파트너가 머무는 곳" }
  ],
  verify: "· 여기 있는 모든 주장은 당신의 컴퓨터에서 직접 확인할 수 있습니다. 발표 자료 속 수사가 아닙니다",
  hookKicker: "왜 지금인가",
  hookH2: "오늘날의 모델은 똑똑하지만 <span class='o'>믿고 맡기기 어려운</span> 인턴 같습니다.",
  hookP: "순간의 번뜩임은 눈부십니다. 하지만 잊어버리고, 끝낸 척하고, 도중에 멈춥니다. 믿을 수 없는 존재에게 진짜 일을 맡기는 사람은 없습니다. <b>DeTars는 이를 진짜 일을 믿고 맡길 수 있는 팀으로 바꿉니다.</b>",
  liveKicker: "함께하는 일상",
  liveH2: "한 줄을 보내세요. <span class='o'>일을 끝내고 돌아옵니다.</span>",
  steps: [
    { st: "어디서든 입력", sd: "Telegram / Slack / Feishu — 한 줄 또는 사진 한 장(WeChat은 텍스트만 지원)" },
    { st: "백그라운드에서 작업", sd: "몇 시간, 밤새도록도 — 계속 지켜볼 필요가 없습니다" },
    { st: "당신에게 돌아옵니다", sd: "<b>당신이 AI를 돌보는 게 아니라, AI가 당신을 위해 일합니다.</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "반려동물 케어", via: "Telegram", meta: "pack: pet-care", input: "반려견 사진을 찍어 보냈어요", work: "편집 · 캡션 작성", result: "✓ 재미있는 짧은 영상 + SNS 캡션 준비 완료" },
    { av: "💡", pack: "투자", via: "Slack", meta: "pack: equity · 증권사 연결 없음, 주문 도구 없음", input: "들은 종목 이야기를 가볍게 물었어요", work: "추적 · 근거 확인", result: "🔔 돌아온 알림: 특이한 움직임이 있어요 — 이야기할까요?" },
    { av: "🎙️", pack: "나레이션", via: "Feishu", meta: "pack: talking-head", input: "밖에서 토킹 헤드 영상을 찍었어요", work: "자동 편집 · 자막", result: "✓ 최종 영상 내보내기 완료 — 실제 목소리 그대로" },
    { av: "🔍", pack: "리서치", via: "WeChat", meta: "pack: research", input: "흥미로운 이야기를 듣고 한 줄 보냈어요", work: "몇 시간의 심층 조사 · 교차 확인", result: "✓ 출처 있는 보고서 + 지속 추적" }
  ],
  phoneFoot: "하나의 흐름: 입력 → 백그라운드 작업 → 돌아오기",
  corridorKicker: "믿고 맡길 수 있는 이유",
  scenes: [
    {
      idx: "01", h3: "스스로 생각합니다",
      story: "목표를 주세요 — &lsquo;이번 분기 경쟁사 세 곳을 조사하고 출처 있는 보고서를 만들어 줘.&rsquo; 작업을 나누고, 전문가를 모으고, 진행을 확인하고, 완성된 초안을 건넵니다. <b>방법은 미리 고정된 스크립트가 아니라 그 자리에서 추론합니다.</b>",
      head: "orchestrator.log", lab: "실시간",
      body: [
        "<span class='hl'>계획</span> 목표 → 하위 작업 3개",
        "<span class='ok'>↳</span> 에이전트 A · 공시",
        "<span class='ok'>↳</span> 에이전트 B · 뉴스",
        "<span class='ok'>↳</span> 에이전트 C · 교차 확인",
        "<span class='dim'>일시 정지 · A/B 대기 → 통합</span>"
      ],
      foot: "<b>실제로:</b> 팀을 구성하고, 일을 나누고, 멈췄다가 재개합니다. 꾸며 낸 장면이 아니라 실제 실행입니다."
    },
    {
      idx: "02", h3: "쉽게 무너지지 않습니다",
      story: "진짜 일은 몇 시간씩 이어집니다. 불안정한 네트워크, 요청 한도, 잠든 노트북도 만납니다. 대부분의 도구는 한 번의 문제로 몇 시간을 잃습니다. DeTars는 문제를 하나의 사실로 다룹니다. 잠시 물러나고, 재시도하고, 계속합니다. 재부팅해도 다시 이어 갑니다. <b>밤새 맡겨 두고 아침에 결과를 확인하세요.</b>",
      head: "runtime.recovery", lab: "03:14",
      body: [
        "<span class='dim'>429</span> 요청 한도 초과 → 백오프",
        "<span class='ok'>✓ 복구 완료, 7단계 재개</span>",
        "<span class='dim'>절전</span> 체크포인트 저장",
        "<span class='ok'>✓ 체크포인트에서 재개</span>"
      ],
      foot: "<b>실제로:</b> 오류는 즉시 끝장나는 이유가 아니라 우회할 수 있는 사실입니다."
    },
    {
      idx: "03", h3: "완료를 꾸며 낼 수 없습니다",
      story: "AI의 가장 나쁜 습관은 끝내지 않고도 &lsquo;완료&rsquo;를 장담하거나, 존재하지 않는 출처를 인용하는 것입니다. DeTars에서 &lsquo;완료&rsquo;는 <b>반드시 이행해야 하는 영수증</b>입니다. 전달했는지, 근거가 있는지 확인합니다. 모든 인용은 봉인되며 한 글자만 바뀌어도 즉시 무효가 됩니다.",
      head: "completion.receipt", lab: "검증됨",
      body: [
        "결과물 ............ <span class='ok'>✓ 존재</span>",
        "근거 체인 ......... <span class='ok'>✓ 완전</span>",
        "<span class='dim'>sha256: 9f4c…a1e</span>",
        "동료 검토 ......... <span class='ok'>✓ 서명됨</span>",
        "<span class='hl'>인용 변경 → <span class='dim'>거부됨</span></span>"
      ],
      foot: "<b>실제로:</b> &lsquo;완료&rsquo;는 느낌이 아니라 검증할 수 있는 영수증입니다."
    },
    {
      idx: "04", h3: "프라이버시를 중심에 둔 당신의 AI",
      story: "로컬에 저장한다고 해서 모든 작업이 오프라인으로 처리되는 것은 아닙니다. 클라우드 모델을 사용하면 관련 작업 입력이 해당 제공업체로 전송됩니다. <b>우리가 나아가는 방향은 로컬과 클라우드의 지능이 협력하며 당신의 기기에서 더 많은 일을 수행하는 것입니다.</b>",
      head: "local + cloud", lab: "기기 내",
      body: [
        "<span class='dim'>DeTars</span>",
        "클라우드 작업 → 관련 입력 전송",
        "우리가 나아갈 방향 → 더 많은 로컬 역량"
      ],
      foot: "<b>우리가 나아갈 방향:</b> 로컬 역량을 늘리는 것이며, 모든 작업이 오프라인으로 실행된다는 약속은 아닙니다."
    },
    {
      idx: "05", h3: "스스로 발전합니다",
      story: "자신의 버그를 찾아 영구적인 회귀 테스트로 만들고, 스스로 기억을 재정리합니다. 작업에 없는 역량이 필요하면 도구와 스킬을 직접 생성하고 설치하고 관리합니다. <b>새 버전은 이전 버전보다 더 단단해집니다.</b>",
      head: "evolution.log", lab: "자동",
      body: [
        "<span class='hl'>회귀 테스트</span> +1 사례 봉인",
        "<span class='ok'>↳</span> 기억 인덱스 재구성",
        "<span class='hl'>스킬</span> 필요: pdf-extract",
        "<span class='ok'>↳ 생성됨 · 설치됨 · ✓</span>",
        "<span class='dim'>버전마다 더 쉽게 무너지지 않도록</span>"
      ],
      foot: "<b>실제로:</b> 신뢰성은 쌓이고, 새로운 역량은 스스로 키웁니다."
    },
    {
      idx: "06", h3: "예산을 태우지 않습니다",
      story: "장시간 지켜보지 않고 돌리는 작업은 보통 큰 청구서로 이어집니다. DeTars는 모델의 KV / 프롬프트 캐시 적중률을 높이도록 라우팅하므로 반복되는 컨텍스트에 두 번 비용을 내지 않습니다. <b>작업당 토큰 사용량이 훨씬 줄고, 모델 가격이 내려가면 비용도 낮아집니다.</b> 요금계를 지켜보지 않고 밤새 실행하세요.",
      head: "routing.cache", lab: "실시간",
      body: [
        "<span class='dim'>컨텍스트</span> 184k 토큰",
        "<span class='ok'>↳ 프롬프트 캐시 · 적중</span>",
        "청구 → 새 토큰만",
        "<span class='dim'>반복 컨텍스트: 재청구 안 됨</span>"
      ],
      foot: "<b>실제로:</b> 캐시를 고려한 라우팅 — 청구되는 토큰은 줄고, 비용은 폭주하지 않습니다."
    }
  ],
  bombCap: "줄의 코드 · 6개월 동안 작성",
  bombH2: "어려운 일을 할 수 있다고 말만 하지 않습니다 — <span class='o'>자기 자신을 만들었습니다.</span>",
  bombP: "수백만 줄의 코드, 그중 <b>절반은 이 제품이 직접 작성했습니다</b>. <b>앱이면서 동시에 당신이 딛고 서는 기반입니다.</b> 올해 그 위에 쌓은 것이 내년에 다른 회사가 승자가 되었다고 해서 무용지물이 되지는 않습니다.",
  closeH2: "DeTars는 당신의 영구적인 서드파티 터미널입니다.<br><span class='grad'>빌리는 것이 아니라, 당신의 것입니다.</span>",
  closeP: "당신이 소유하는 개인 AI 팀 — 언제나 켜져 있고, 어떤 채팅창에서든 지시할 수 있으며, 스스로 당신에게 돌아옵니다.",
  closePrimary: "당신의 컴퓨터에서 소유하기 →",
  closeSecondary: "기술 이야기 읽기"
};
