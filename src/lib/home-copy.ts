import { homeEs } from "@/lib/home/es";
import { homeFr } from "@/lib/home/fr";
import { homeJa } from "@/lib/home/ja";
import { homeZhHant } from "@/lib/home/zh-hant";
import { homeKo } from "@/lib/home/ko";
import { homePtBr } from "@/lib/home/pt-br";
import { homeDe } from "@/lib/home/de";
import type { Locale } from "@/lib/site";

export type Scenario = {
  av: string;
  pack: string;
  via: string;
  meta: string;
  input: string;
  work: string;
  /** May carry <b> and <br>. */
  result: string;
  /** Left-column story for this scenario; may carry <b>. */
  story: string;
  /** Full, already-localized path. */
  link?: { href: string; label: string };
  /** Destiny only: three drawn cards, flipped in the phone. */
  tarot?: { pos: string; name: string }[];
};
export type FutureViz = { device: string; privacy: string; local: string; cloud: string; wire: string };
export type Scene = { idx: string; h3: string; story: string; head: string; lab: string; body: string[]; foot: string };

export type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroH1: string;
  heroSub: string;
  heroPrimary: string;
  heroSecondary: string;
  futureKicker: string;
  futureH2: string;
  futureP: string;
  futureViz: FutureViz;
  proof: { n: string; l: string }[];
  verify: string;
  hookKicker: string;
  hookH2: string;
  hookP: string;
  liveKicker: string;
  liveH2: string;
  steps: { st: string; sd: string }[];
  scenarios: Scenario[];
  phoneFoot: string;
  corridorKicker: string;
  scenes: Scene[];
  bombCap: string;
  bombH2: string;
  bombP: string;
  closeH2: string;
  closeP: string;
  closePrimary: string;
  closeSecondary: string;
};

const en: HomeCopy = {
  metaTitle: "DeTars | AI for everyone? This one’s for you.",
  metaDescription: "A whole AI team, working for one person: you. A chief of staff, an assistant, a director and a filmmaker — every one of them on your side.",
  heroEyebrow: "Your personal AI team",
  heroH1: "AI for everyone?<br><span class='grad'>This one’s for you.</span>",
  heroSub: "A whole AI team, working for one person: you.<br>A chief of staff to coordinate, an assistant to talk to, a director to run your day-to-day work, a filmmaker for your videos — every one of them wants you to succeed, and to be happy.",
  heroPrimary: "Start with a goal →",
  heroSecondary: "See it work for you",
  futureKicker: "The future we’re building",
  futureH2: "More on your device.<br>More possibilities for you.",
  futureP: "We trained our own privacy model, and it runs on your device: with Auto Privacy on, names, phone numbers, IDs and other sensitive details become placeholders on your machine before anything reaches a cloud model, and are restored locally when results come back. A local model also does real work on your device — and it keeps getting stronger as models improve. As compute becomes more accessible, we’re working toward a DeTars that does more on your own device, with local and cloud intelligence each doing what they do best, and your privacy at the heart of it.",
  futureViz: { device: "Your device", privacy: "Privacy model · redacts on your machine", local: "Local model · does the work, getting stronger", cloud: "Cloud models · any you choose", wire: "only placeholders leave ⟦PERSON_1⟧" },
  proof: [
    { n: "Days", l: "one task can run for days · projects keep going" },
    { n: "All", l: "the major models · switch anytime" },
    { n: "Your device", l: "A home for your AI team" }
  ],
  verify: "· Every claim here is one you can check on your own machine — not slide-deck rhetoric",
  hookKicker: "Why now",
  hookH2: "Today's model is a brilliant but <span class='o'>unreliable</span> intern.",
  hookP:
    "Dazzling in flashes — but it forgets, fakes completion, and crashes halfway. Nobody hands real work to something unreliable. <b>DeTars turns it into a team you trust with the real thing.</b>",
  liveKicker: "Living with it",
  liveH2: "You send one line. <span class='o'>It comes back done.</span>",
  steps: [
    { st: "Input from anywhere", sd: "Telegram / Slack / Feishu — one line or one photo (WeChat: text only)" },
    { st: "It runs in the background", sd: "One task can run for days; long-term projects keep moving and report back" },
    { st: "It comes back to you", sd: "<b>It lives for you — not the other way around.</b>" }
  ],
  scenarios: [
    {
      av: "🧭",
      pack: "Chief of Staff",
      via: "Slack",
      meta: "chief of staff · watching every task",
      input: "Keep an eye on these projects for me. Bundle anything that needs me.",
      work: "minding 4 tasks · syncing dependencies · checking deliverables",
      result: "<b>Today's digest</b><br>✓ Research report delivered, sources checked<br>⟳ Short film on cut 2, due tonight<br>⚑ Investing review: 1 call needs you",
      story: "The more projects you run, the more tiring it is to keep track. <b>Your chief of staff coordinates the whole team</b>: passes on new requests, sorts out dependencies, checks what comes back — and brings you only the results and the decisions that are really yours. Other AIs wait to be asked; this one keeps the big picture for you."
    },
    {
      av: "💬",
      pack: "Chat",
      via: "Telegram",
      meta: "chat · remembers your notes and past decisions",
      input: "Why didn't we go with that supplier last time?",
      work: "searching your notes and history · instant",
      result: "Their March delivery slipped two weeks, and you wrote “don't renew” — here's the note.<br>Want 20 procurement, legal and finance experts to brainstorm alternatives?",
      story: "<b>It lives right inside Telegram, Slack or Feishu</b> — no extra app to open. It answers fast, and it remembers you: your notes, your projects, the calls you've made. Want other perspectives? Bring in experts from the Agent Marketplace, <b>hundreds of roles</b>, to brainstorm with you. Anything bigger, it hands to the team."
    },
    {
      av: "🔍",
      pack: "Research",
      via: "WhatsApp",
      meta: "pack: research · every claim sourced",
      input: "A friend says Anthropic is going public. Is AI a bubble?",
      work: "reading the S-1 itself · cross-checking roadshow and forecasts",
      result: "✓ An insightful research report:<br><b>the demand is real; the returns haven't closed the loop yet</b>",
      story: "From one line you overheard, it follows the trail to the filing, the roadshow and the raw numbers, lays out the evidence and the disagreements, and hands back a report you can question source by source. <b>This one was really made that way</b> — read it:",
      link: { href: "/research/anthropic-ipo-ai-bubble-2026-11-11", label: "Read: Anthropic's IPO and the AI bubble →" }
    },
    {
      av: "☾",
      pack: "Summon",
      via: "DeTars",
      meta: "pack: summon · held at the moment you choose",
      input: "Holmes, what do you make of my new neighbour?",
      work: "Sherlock Holmes · Baker Street, 1891",
      result: "“You noticed the mud on his boots but not that it's chalk — he walks the downs every morning. A man that early has either a dog or a secret. Since you've heard no barking, I'd keep watching.”",
      story: "Bring someone from a story — or from history — right to you. <b>They stay at the moment you choose</b>, with their past, their voice and their temper. Puzzle a case out with Sherlock Holmes today; talk about hard times with Su Dongpo tomorrow.",
      link: { href: "/packs/summon", label: "Meet Summon →" }
    },
    {
      av: "✷",
      pack: "Destiny",
      via: "DeTars",
      meta: "pack: destiny · the observatory",
      input: "I'm torn about switching jobs. Draw three cards for me?",
      work: "shuffling · past / present / future",
      result: "Eight of Swords → Knight of Wands → The Star<br>The box holding you is mostly your own. List the real trade-offs, then move.",
      story: "Say where you are right now. With cards, charts and symbols it helps you put the confusion into words, then brings the insight back to real life. <b>Tap a card in the observatory to keep asking within the same reading.</b>",
      link: { href: "/packs/destiny", label: "Visit the observatory →" },
      tarot: [{ pos: "Past", name: "Eight of Swords" }, { pos: "Present", name: "Knight of Wands" }, { pos: "Future", name: "The Star" }]
    },
    {
      av: "▶",
      pack: "AI Video",
      via: "Telegram",
      meta: "pack: ai-video · budget confirmed before generating",
      input: "Make a 15-second space adventure starring my cat",
      work: "pitching two visual directions · shot by shot",
      result: "✓ Two directions to choose from: <b>retro sci-fi</b> / <b>hand-drawn fairy tale</b><br>Pick one and it renders shot by shot, delivered as MP4",
      story: "That picture in your head: the director pitches clearly different visual directions first, and <b>you only spend money once you've picked one</b>. “Keep this mood,” “same character, new move” — one line and it's changed.",
      link: { href: "/packs/ai-video", label: "See AI Video →" }
    },
    {
      av: "◈",
      pack: "Investing",
      via: "Slack",
      meta: "pack: equity · no broker, no order tool",
      input: "Someone mentioned a stock — I asked in passing",
      work: "unpacking your thesis · watching the evidence",
      result: "🔔 Came back on its own: the earnings changed your reason #2. Want to talk?",
      story: "Your reasons, the counter-arguments and the checkpoints, all in one place. <b>When news lands, it asks first: which of your reasons does this change?</b> It helps you think clearly and never touches your account.",
      link: { href: "/packs/investing", label: "See Investing →" }
    },
    {
      av: "▦",
      pack: "Data Studio",
      via: "Feishu",
      meta: "pack: data-studio",
      input: "(drops in a sales sheet) Where did margin fall the most this year?",
      work: "checking fields and definitions · splitting by region and product",
      result: "✓ East region · hardware line −18%<br>Dashboard ready — click a region to ask why",
      story: "Drop in a spreadsheet, ask one question, get back a dashboard you can click. <b>From the overview to the detail, from the number to the reason</b> — the analysis moves like a conversation.",
      link: { href: "/packs/data-studio", label: "See Data Studio →" }
    },
    {
      av: "⌘",
      pack: "Coding",
      via: "Slack",
      meta: "pack: coding",
      input: "Help me understand this project's login flow. What's most worth fixing?",
      work: "locating key files · tracing calls",
      result: "✓ The login path spans 3 files<br>The one fix most worth making, and what it touches",
      story: "A huge unfamiliar codebase? <b>It understands before it touches anything</b>: finds the key files, traces definitions and calls, explains the impact and the options — then changes and verifies with you.",
      link: { href: "/packs/coding", label: "See Coding →" }
    },
    {
      av: "🎙️",
      pack: "Talking Head",
      via: "Feishu",
      meta: "pack: talking-head · your real voice kept",
      input: "Filmed a talking-head clip on the go — it's about cost changes",
      work: "cutting repetition · fixing subtitles · building data cards",
      result: "✓ Full preview ready, your voice kept, key numbers turned into data cards",
      story: "You have something to say; you shouldn't lose three days to editing. <b>It restructures the story, fixes subtitles, adds charts</b> — you just point: “this pause is too long,” “this line matters.”",
      link: { href: "/packs/talking-head", label: "See Talking Head →" }
    }
  ],
  phoneFoot: "One motif: input → runs in background → comes back",
  corridorKicker: "Why you can trust it",
  scenes: [
    {
      idx: "01",
      h3: "It thinks for itself",
      story:
        "Give it a goal — &lsquo;research three competitors this quarter, deliver a sourced report.&rsquo; It breaks the work down, spins up specialists, tracks their progress, and hands back a finished draft. <b>The how is reasoned on the spot, not a hard-wired script.</b>",
      head: "orchestrator.log",
      lab: "live",
      body: [
        "<span class='hl'>plan</span> goal → 3 subtasks",
        "<span class='ok'>↳</span> agent A · filings",
        "<span class='ok'>↳</span> agent B · news",
        "<span class='ok'>↳</span> agent C · cross-check",
        "<span class='dim'>pause · await A/B → merge</span>"
      ],
      foot: "<b>Real:</b> it forms teams, splits work, pauses and resumes — actually running, not faked."
    },
    {
      idx: "02",
      h3: "It doesn't fall over",
      story:
        "Real work runs for hours: flaky networks, rate limits, sleeping laptops. Most tools lose hours to a single hiccup. DeTars treats trouble as a fact — back off, retry, continue; reboot and it resumes. <b>Let it run overnight; check results in the morning.</b>",
      head: "runtime.recovery",
      lab: "03:14",
      body: [
        "<span class='dim'>429</span> rate limited → backoff",
        "<span class='ok'>✓ recovered, resuming step 7</span>",
        "<span class='dim'>sleep</span> checkpoint saved",
        "<span class='ok'>✓ resumed from checkpoint</span>"
      ],
      foot: "<b>Real:</b> errors are facts to route around, not instant death."
    },
    {
      idx: "03",
      h3: "It can't fake it",
      story:
        "AI's worst trick: swearing it's &lsquo;done&rsquo; when it isn't; citing a source that never existed. DeTars makes &lsquo;done&rsquo; a <b>receipt it must honor</b> — delivered or not, backed by evidence or not. Every citation is sealed; change one character and it's instantly void.",
      head: "completion.receipt",
      lab: "verified",
      body: [
        "deliverable ....... <span class='ok'>✓ present</span>",
        "evidence chain .... <span class='ok'>✓ complete</span>",
        "<span class='dim'>sha256: 9f4c…a1e</span>",
        "peer review ....... <span class='ok'>✓ signed</span>",
        "<span class='hl'>citation altered → <span class='dim'>rejected</span></span>"
      ],
      foot: "<b>Real:</b> &lsquo;done&rsquo; is a verifiable receipt, not a feeling."
    },
    {
      idx: "04",
      h3: "Your AI, with privacy at the heart of it",
      story: "Local storage does not mean every task stays offline: when you use a cloud model, relevant task inputs are sent to its provider. <b>Our direction is more work on your own device, with local and cloud intelligence working together.</b>",
      head: "local + cloud",
      lab: "On-device",
      body: [
        "<span class='dim'>DeTars</span>",
        "Cloud tasks → relevant inputs sent",
        "Our direction → more local capability"
      ],
      foot: "<b>Our direction:</b> more local capability, not a promise that every task runs offline."
    },
    {
      idx: "05",
      h3: "It evolves itself",
      story:
        "It hunts its own bugs into permanent regression coverage, reorganizes its own memory, and — when a task needs a capability it lacks — generates, installs, and manages its own tools and skills. <b>Every version is harder to beat than the last.</b>",
      head: "evolution.log",
      lab: "auto",
      body: [
        "<span class='hl'>regression</span> +1 case sealed",
        "<span class='ok'>↳</span> memory reindexed",
        "<span class='hl'>skill</span> needed: pdf-extract",
        "<span class='ok'>↳ generated · installed · ✓</span>",
        "<span class='dim'>every version harder to break</span>"
      ],
      foot: "<b>Real:</b> reliability that compounds — and new abilities it grows on its own."
    },
    {
      idx: "06",
      h3: "It doesn't burn your budget",
      story:
        "Long unattended tasks usually mean huge bills. DeTars routes to keep the model's KV / prompt cache hot, so repeated context isn't paid for twice — <b>far fewer tokens per task, and cheaper as model prices fall.</b> Let it run all night without watching the meter.",
      head: "routing.cache",
      lab: "live",
      body: [
        "<span class='dim'>context</span> 184k tokens",
        "<span class='ok'>↳ prompt cache · hit</span>",
        "billed → new tokens only",
        "<span class='dim'>repeat context: not re-billed</span>"
      ],
      foot: "<b>Real:</b> caching-aware routing — fewer tokens billed, no runaway bills."
    }
  ],
  bombCap: "lines of code · half written by DeTars itself",
  bombH2: "<span class='o'>DeTars was built with DeTars.</span>",
  bombP: "Over 3.4 million lines of code — and <b>half of them written by DeTars itself</b>. Few jobs you'll ever hand it are harder than building itself. <b>It's an app, and it's the ground you build on</b>: the knowledge, methods and work you gather here stay yours, whichever model wins next year.",
  closeH2: "DeTars is your permanent third-party terminal.<br><span class='grad'>AI on your side.</span>",
  closeP: "Helping you get things done—and live better.<br>A personal AI team that works in the background, takes direction through the chat apps you use, and follows up with you.",
  closePrimary: "Own it on your machine →",
  closeSecondary: "Read the technical story"
};

const zh: HomeCopy = {
  metaTitle: "DeTars | AI 可以服务所有人。 这个，是为你的。",
  metaDescription: "一整支 AI 团队，只为你一个人。幕僚长、助手、总监、导演，每一位都盼你成事，也盼你过得好。",
  heroEyebrow: "你的私人 AI 团队",
  heroH1: "AI 可以服务所有人。<br><span class='grad'>这个，是为你的。</span>",
  heroSub: "一整支 AI 团队，只为你一个人。<br>幕僚长替你统筹，助手陪你聊，总监推进日常，导演拍你的片——每一位都盼你成事，也盼你过得好。",
  heroPrimary: "从一个目标开始 →",
  heroSecondary: "看它怎么陪你做事",
  futureKicker: "我们正在创造的未来",
  futureH2: "更多事情，在你的设备上完成。<br>更多可能，为你打开。",
  futureP: "我们训练了自己的隐私模型，就跑在你的设备上：打开自动隐私后，人名、电话、证件这类敏感信息先在本机换成占位符，再发给云端模型，结果回来后在本机还原。本地还有负责干活的模型，会随着模型进步越来越强。随着算力日益普及，我们希望让 DeTars 在你的设备上完成更多事情：本地与云端各展所长、协同配合，把保护你的隐私放在核心位置。",
  futureViz: { device: "你的设备", privacy: "隐私模型 · 在本机脱敏", local: "本地模型 · 干活，越来越强", cloud: "云端模型 · 随用随切", wire: "发出去的只有占位符 ⟦人名_1⟧" },
  proof: [
    { n: "几天", l: "单个任务连跑几天 · 长期项目一直推进" },
    { n: "所有", l: "主流模型 · 随用随切" },
    { n: "你的设备", l: "你的 AI 团队在这里安家" }
  ],
  verify: "· 这里每一条,你都能在自己电脑上验证,不是 PPT 上的修辞",
  hookKicker: "为什么是现在",
  hookH2: "今天的模型,像个聪明但<span class='o'>靠不住</span>的实习生。",
  hookP:
    "灵光一闪很惊艳,但它会忘事、会假装做完、会半路崩掉。没人敢把真活交给靠不住的东西。<b>DeTars 把它变成一支你敢把真活交出去的团队。</b>",
  liveKicker: "怎么和它一起生活",
  liveH2: "你甩过去一句话,<span class='o'>它做完回来找你。</span>",
  steps: [
    { st: "输入来自任何地方", sd: "Telegram / Slack / 飞书,一句话或一张图(微信为纯文本)" },
    { st: "它在后台替你长跑", sd: "一个任务能连跑几天；长期项目一直推进，定期回来汇报" },
    { st: "做完主动回来找你", sd: "<b>替你活着,不是等你伺候它。</b>" }
  ],
  scenarios: [
    {
      av: "🧭",
      pack: "幕僚长",
      via: "飞书",
      meta: "幕僚长 · 统筹全部任务",
      input: "这几个项目你替我盯着，有事合在一起找我",
      work: "照看 4 个任务 · 协调依赖 · 核对交付",
      result: "<b>今日汇总</b><br>✓ 调研报告已交付，出处已核对<br>⟳ 短片在出第 2 版，预计今晚<br>⚑ 投资复核：有 1 件要你拍板",
      story: "项目一多，最累的是盯进度。<b>幕僚长替你统筹整支团队</b>：转达新要求、协调依赖、核对交付，只把成果和真正要你决定的事合在一起带回来。别的 AI 等你来问，它替你看着全局。"
    },
    {
      av: "💬",
      pack: "Chat 助手",
      via: "Telegram",
      meta: "chat · 记得你的笔记和过去的决定",
      input: "上次那家供应商，我们为什么没选？",
      work: "翻你的笔记和历史 · 秒回",
      result: "3 月那次交付拖了两周，你当时记了“不再续约”——原话在这。<br>要不要请 20 位采购、法务、财务专家，帮你脑暴一轮备选？",
      story: "<b>它就住在你的飞书、Telegram 里</b>，不用另开一个 App。反应快，还记得你：你的笔记、项目、以前做过的决定。想听不同的声音？从 Agent 集市请来<b>几百种专家角色</b>，陪你一起头脑风暴。复杂的事，它直接转给团队去办。"
    },
    {
      av: "🔍",
      pack: "内容调研",
      via: "微信",
      meta: "pack: research · 每个判断附出处",
      input: "听朋友说 Anthropic 要上市，想分析下 AI 泡沫",
      work: "追到招股书原文 · 交叉核对路演与预测",
      result: "✓ 一份有洞见的研究报告：<br><b>需求有根基，回报尚未闭环</b>",
      story: "一句听来的话，它顺着线索追到招股书、路演和原始数据，把证据和分歧摆清楚，交回一份能逐条追问出处的报告。<b>这一篇就是这样真实做出来的</b>，可以直接读：",
      link: { href: "/zh/research/anthropic-ipo-ai-bubble-2026-11-11", label: "读《Anthropic IPO 路演与 AI 泡沫》→" }
    },
    {
      av: "☾",
      pack: "召唤",
      via: "DeTars",
      meta: "pack: summon · 人物停在你选的那一刻",
      input: "东坡先生，被贬黄州那年，您是怎么熬过来的？",
      work: "苏轼 · 元丰五年 · 黄州",
      result: "“熬？我在黄州学会了种地，城东那片坡地就叫它东坡；又琢磨出慢火炖猪肉，少着水，火候足时它自美。夜里睡不着，就去赤壁看月亮。日子是苦，肉倒便宜——你今天吃什么了？”",
      story: "把故事里、历史里的那个人请到眼前。<b>人物停在你选的那一刻</b>，带着他的经历、口吻和脾气跟你聊。今天陪苏东坡聊落难，明天跟福尔摩斯一起推理。",
      link: { href: "/zh/packs/summon", label: "看看召唤 →" }
    },
    {
      av: "✷",
      pack: "命运陪伴",
      via: "DeTars",
      meta: "pack: destiny · 观星台",
      input: "在纠结要不要换工作，帮我抽三张牌",
      work: "洗牌 · 抽取过去 / 现在 / 将来",
      result: "宝剑八 → 权杖骑士 → 星星<br>困住你的多半是自己设的框。先把现实取舍列清楚，再迈步。",
      story: "说出此刻的处境，它用牌、星盘和象征帮你把困惑聊具体，再把行动启发带回现实。<b>在观星台点一张牌，还能沿同一局继续追问。</b>",
      link: { href: "/zh/packs/destiny", label: "去观星台 →" },
      tarot: [{ pos: "过去", name: "宝剑八" }, { pos: "现在", name: "权杖骑士" }, { pos: "将来", name: "星星" }]
    },
    {
      av: "▶",
      pack: "AI 视频",
      via: "Telegram",
      meta: "pack: ai-video · 生成前先确认预算",
      input: "给我家猫拍个 15 秒的太空冒险短片",
      work: "构思两个视觉方向 · 逐镜生成",
      result: "✓ 两个方向任你选：<b>复古科幻</b> / <b>手绘童话</b><br>选定后逐镜出片，交付 MP4",
      story: "你脑子里那个画面，先让导演提几个差别明显的视觉方向，<b>选中了再花钱逐镜生成</b>。“沿这张的气氛继续”“保留人物，换个动作”，一句话就改。",
      link: { href: "/zh/packs/ai-video", label: "看看 AI 视频 →" }
    },
    {
      av: "◈",
      pack: "投资陪伴",
      via: "Slack",
      meta: "pack: equity · 没接券商，没有下单工具",
      input: "听人提了一支股票，随口问了一句",
      work: "拆解持有理由 · 持续巡检证据",
      result: "🔔 主动回来：财报改变了你的第 2 条理由，要不要聊聊？",
      story: "把看好的理由、反方意见和验证点放在一起。<b>新消息一来，它先问：这改变了你哪条理由？</b>只帮你想清楚，不碰你的账户。",
      link: { href: "/zh/packs/investing", label: "看看投资陪伴 →" }
    },
    {
      av: "▦",
      pack: "数据工坊",
      via: "飞书",
      meta: "pack: data-studio",
      input: "（拖进来一张销售表）今年毛利掉得最多的是哪块？",
      work: "核对字段口径 · 按地区和产品拆开",
      result: "✓ 华东 · 硬件线 −18%<br>看板已生成，点一个地区接着追问原因",
      story: "表格拖进来，问一句话，拿回一张能点的看板。<b>从总览到局部、从数字到原因</b>，分析像对话一样往下走。",
      link: { href: "/zh/packs/data-studio", label: "看看数据工坊 →" }
    },
    {
      av: "⌘",
      pack: "编程",
      via: "Slack",
      meta: "pack: coding",
      input: "帮我看懂这个项目的登录流程，最值得改哪？",
      work: "定位关键文件 · 查调用关系",
      result: "✓ 登录链路涉及 3 个文件<br>最值得改的一处，附影响范围",
      story: "陌生的庞大代码，它<b>先看懂再动手</b>：定位关键文件、查定义和调用关系，把影响和选项讲清楚，再和你一起改、一起验证。",
      link: { href: "/zh/packs/coding", label: "看看编程 →" }
    },
    {
      av: "🎙️",
      pack: "口播剪辑",
      via: "飞书",
      meta: "pack: talking-head · 保留你的原声",
      input: "在外面拍了段口播，主要讲成本变化",
      work: "压缩重复 · 修字幕 · 做数据卡",
      result: "✓ 完整预览已出：原声保留，关键数字做成了数据卡",
      story: "你有话想说，不该为剪辑花掉三天。<b>它整理讲述、修字幕、配图表</b>，你只要指出“这里停顿太长”“这句是重点”。",
      link: { href: "/zh/packs/talking-head", label: "看看口播剪辑 →" }
    }
  ],
  phoneFoot: "同一个母题:输入 → 后台长跑 → 主动回来",
  corridorKicker: "它凭什么靠得住",
  scenes: [
    {
      idx: "01",
      h3: "它自己会想,不用你一步步教",
      story:
        "给它一个目标——“把三个竞品这季度的动向研究清楚,出一份带出处的报告”。它自己拆解、当场召集几个专员分头查、自己盯进度、最后交一份成稿。<b>怎么干是它当场想出来的,不是你提前焊死的流程。</b>",
      head: "orchestrator.log",
      lab: "实时",
      body: [
        "<span class='hl'>规划</span> 拆解目标 → 3 个子任务",
        "<span class='ok'>↳</span> 专员 A · 查财报",
        "<span class='ok'>↳</span> 专员 B · 查新闻",
        "<span class='ok'>↳</span> 专员 C · 交叉核对",
        "<span class='dim'>暂停 · 等 A/B 完成 → 汇总</span>"
      ],
      foot: "<b>底气:</b>自己组队、分工、暂停续跑——真实运行,不是脚本假装。"
    },
    {
      idx: "02",
      h3: "它打不垮,能挂着跑一整夜",
      story:
        "真活要跑几个小时:网络抽风、服务商限流、电脑休眠。普通工具碰一次卡顿,几小时白费。DeTars 把“出状况”当成事实——退一步、重试、接着干;电脑崩了重开能续上。<b>你可以让它通宵跑,早上来看结果。</b>",
      head: "runtime.recovery",
      lab: "03:14",
      body: [
        "<span class='dim'>限流</span> provider 429 → 退避重试",
        "<span class='ok'>✓ 已恢复,继续第 7 步</span>",
        "<span class='dim'>休眠</span> 断点已落盘",
        "<span class='ok'>✓ 重开后从断点续上</span>"
      ],
      foot: "<b>底气:</b>把出错当成可绕过去的事实,而不是一碰就死。"
    },
    {
      idx: "03",
      h3: "它不能骗你,而且证据齐全",
      story:
        "AI 最坑的一点:信誓旦旦说“做完了”,其实没做;引用一份根本不存在的资料。DeTars 把“完成”变成一张<b>必须兑现的收据</b>——交付了没、有没有真凭实据,凑不齐就过不了关。每份引用都被封印,改一个字立刻失效。",
      head: "completion.receipt",
      lab: "已核验",
      body: [
        "交付物 ........... <span class='ok'>✓ 存在</span>",
        "证据链 ........... <span class='ok'>✓ 完整</span>",
        "<span class='dim'>sha256: 9f4c…a1e</span>",
        "独立复审 ......... <span class='ok'>✓ 签字</span>",
        "<span class='hl'>引用被改 → <span class='dim'>当场拒绝</span></span>"
      ],
      foot: "<b>底气:</b>“做完了”是可核验的收据,不是一句感觉。"
    },
    {
      idx: "04",
      h3: "你的 AI，把隐私放在心上",
      story: "本地存储不等于所有任务都离线运行：使用云模型时，相关任务输入会发送给对应服务商。<b>我们的方向，是让更多事情在你的设备上完成，让本地与云端智能协同配合。</b>",
      head: "local + cloud",
      lab: "本地设备",
      body: [
        "<span class='dim'>DeTars</span>",
        "云模型任务 → 发送相关输入",
        "未来方向 → 更多本地能力"
      ],
      foot: "<b>我们的方向：</b>持续增强本地能力，不是承诺所有任务都能离线完成。"
    },
    {
      idx: "05",
      h3: "它会自我进化",
      story:
        "它把自己的 bug 抓成永久回归覆盖,自我重组记忆;当任务需要它没有的能力时,自动生成、安装、管理自己的 Tool 和 Skill。<b>每个版本都比上一版更难被打败。</b>",
      head: "evolution.log",
      lab: "自动",
      body: [
        "<span class='hl'>回归</span> 新增 1 例,已封印",
        "<span class='ok'>↳</span> 记忆已重建索引",
        "<span class='hl'>技能</span> 需要:pdf-extract",
        "<span class='ok'>↳ 已生成 · 已安装 · ✓</span>",
        "<span class='dim'>每个版本更难被难倒</span>"
      ],
      foot: "<b>底气:</b>可靠性会复利,能力它自己长。"
    },
    {
      idx: "06",
      h3: "它不烧你的钱",
      story:
        "长时间无人值守的任务,通常意味着天价账单。DeTars 通过路由让模型的 KV / 提示缓存保持高命中,重复上下文不重复计费——<b>每个任务少烧很多 token,模型越降价越便宜。</b>挂着跑一整夜,也不用盯着账单。",
      head: "routing.cache",
      lab: "实时",
      body: [
        "<span class='dim'>上下文</span> 18.4 万 tokens",
        "<span class='ok'>↳ 提示缓存 · 命中</span>",
        "计费 → 仅新增 token",
        "<span class='dim'>重复上下文:不重复计费</span>"
      ],
      foot: "<b>底气:</b>缓存感知路由——少计费,不会失控烧钱。"
    }
  ],
  bombCap: "行代码 · 一半由 DeTars 自己写成",
  bombH2: "DeTars，<span class='o'>是用 DeTars 造出来的。</span>",
  bombP: "340 多万行代码，<b>一半出自它自己之手</b>。你交给它的活，很少会比“造出它自己”更难。<b>它既是应用，也是你的底座</b>——你在这里攒下的知识、方法和成果，明年不管哪家模型胜出，都还是你的。",
  closeH2: "DeTars 是永久的第三方终端伙伴。<br><span class='grad'>站在你这边的 AI。</span>",
  closeP: "帮你把事做成，也把日子过好。<br>一支为你服务的私人 AI 团队：在后台推进工作，通过你常用的聊天应用接受指令，并主动跟进。",
  closePrimary: "在你的电脑上拥有它 →",
  closeSecondary: "读它的技术故事"
};

export const homeCopy: Record<Locale, HomeCopy> = { en, zh, "zh-Hant": homeZhHant, ja: homeJa, fr: homeFr, es: homeEs, ko: homeKo, "pt-BR": homePtBr, de: homeDe };
