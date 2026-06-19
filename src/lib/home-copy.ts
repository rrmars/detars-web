import type { Locale } from "@/lib/site";

export type Scenario = { av: string; pack: string; via: string; meta: string; input: string; work: string; result: string };
export type Scene = { idx: string; h3: string; story: string; head: string; lab: string; body: string[]; foot: string };

export type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroH1: string;
  heroSub: string;
  heroPrimary: string;
  heroSecondary: string;
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
  metaTitle: "DeTars | The AI that wrote itself",
  metaDescription:
    "DeTars is a private AI team you own — it reasons, runs for hours, recovers from failure, can't fake completion, and lives on your machine. Its 1.17M lines were written by its own engine.",
  heroEyebrow: "Your own AI that gets real work done",
  heroH1: "It <span class='grad'>wrote itself.</span>",
  heroSub:
    "All <b>1.17 million lines</b> of DeTars — running on your own machine — were written by its own engine. An unreliable AI can't build a working copy of itself. <b>That's why you can trust it with real work.</b>",
  heroPrimary: "Get started →",
  heroSecondary: "See it work for you",
  proof: [
    { n: "1,170,000", l: "lines · written by itself" },
    { n: "~50", l: "frontier models · switch anytime" },
    { n: "100%", l: "memory stays on your disk" }
  ],
  verify: "· Every number here is countable in the codebase — not slide-deck rhetoric",
  hookKicker: "Why now",
  hookH2: "Today's model is a brilliant but <span class='o'>unreliable</span> intern.",
  hookP:
    "Dazzling in flashes — but it forgets, fakes completion, and crashes halfway. Nobody hands real work to something unreliable. <b>DeTars turns it into a team you trust with the real thing.</b>",
  liveKicker: "Living with it",
  liveH2: "Toss it one line. <span class='o'>It runs the rest for you.</span>",
  steps: [
    { st: "Input from anywhere", sd: "Feishu / Slack / Telegram / WeChat — one line or one photo" },
    { st: "It runs in the background", sd: "Hours, even all night — you don't babysit it" },
    { st: "It comes back to you", sd: "<b>It lives for you — not the other way around.</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "Pet Care", via: "Telegram", meta: "pack: pet-care", input: "Snapped a photo of my dog and sent it over", work: "editing · writing captions", result: "✓ Funny short video + social captions ready" },
    { av: "💡", pack: "Investing", via: "Slack", meta: "pack: equity · code-locked, no trading", input: "Heard a stock tip and just asked offhand", work: "tracking · checking evidence", result: "🔔 Came back: unusual move — want to talk?" },
    { av: "🎙️", pack: "Voiceover", via: "Feishu", meta: "pack: talking-head", input: "Filmed a talking-head clip on the go", work: "auto-editing · subtitles", result: "✓ Final cut exported — your real voice kept" },
    { av: "🔍", pack: "Research", via: "WeChat", meta: "pack: research", input: "Heard something interesting, fired off one line", work: "digging for hours · cross-checking", result: "✓ Sourced report + ongoing tracking" }
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
      h3: "It's yours — and no one can take it",
      story:
        "It lives on your own machine and learns you over time. But everything it remembers about you <b>needs your nod first</b>; that memory is a file on your disk, not an account on someone's server. No one can brick it with a notice the way Rewind or Humane did.",
      head: "~/detars/memory",
      lab: "local",
      body: [
        "<span class='dim'>./profile.mem</span>",
        "<span class='dim'>./projects/*.mem</span>",
        "new memory → <span class='hl'>awaiting your ok</span>",
        "<span class='ok'>✓ works offline · nothing uploaded</span>"
      ],
      foot: "<b>Real:</b> memory and identity are files on your disk — sovereignty baked into the architecture."
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
  bombCap: "lines of working code · written by its own engine",
  bombH2: "We don't just say it can do hard work — <span class='o'>it produced itself.</span>",
  bombP:
    "An unreliable AI can't write 1.17M lines of working code. The product itself is the ultimate proof of what it can do — and the number is countable in the codebase, on the spot.",
  closeH2: "DeTars is your permanent third-party terminal.<br><span class='grad'>Yours, not rented.</span>",
  closeP: "A private AI team you own — always on, commandable from any chat window, and one that comes back to you on its own.",
  closePrimary: "Own it on your machine →",
  closeSecondary: "Read the technical story"
};

const zh: HomeCopy = {
  metaTitle: "DeTars | 自己写出了自己的 AI",
  metaDescription:
    "DeTars 是一支你拥有的私人 AI 团队——会自己拆解、能挂着跑一整夜、出错能恢复、不能假装做完、住在你电脑里。它这 117 万行代码,是它自己的引擎写出来的。",
  heroEyebrow: "会自己干活的私人 AI",
  heroH1: "它,<span class='grad'>亲手写出了自己。</span>",
  heroSub:
    "DeTars 这 <b>117 万行</b>、能在你电脑上跑的应用,出自它自己的引擎。一个靠不住的 AI,写不出能跑的自己——<b>所以你敢把真活交给它。</b>",
  heroPrimary: "免费开始 →",
  heroSecondary: "看它怎么陪你做事",
  proof: [
    { n: "1,170,000", l: "行代码 · 由它自己写成" },
    { n: "~50", l: "个前沿模型 · 随用随切" },
    { n: "100%", l: "记忆在你自己的硬盘上" }
  ],
  verify: "· 这些数字都能当场在代码库里数出来,不是 PPT 上的修辞",
  hookKicker: "为什么是现在",
  hookH2: "今天的模型,像个聪明但<span class='o'>靠不住</span>的实习生。",
  hookP:
    "灵光一闪很惊艳,但它会忘事、会假装做完、会半路崩掉。没人敢把真活交给靠不住的东西。<b>DeTars 把它变成一支你敢把真活交出去的团队。</b>",
  liveKicker: "怎么和它一起生活",
  liveH2: "一句话甩给它,剩下的<span class='o'>它替你跑完。</span>",
  steps: [
    { st: "输入来自任何地方", sd: "飞书 / Slack / Telegram / 微信,一句话或一张图" },
    { st: "它在后台替你长跑", sd: "几小时、甚至一整夜,不用你盯着" },
    { st: "做完主动回来找你", sd: "<b>替你活着,不是等你伺候它。</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "宠物管家", via: "Telegram", meta: "pack: pet-care", input: "出门拍了张狗子的照片,丢给它", work: "后台剪辑 · 配文案", result: "✓ 搞笑短视频 + 小红书 / Ins 文案已生成" },
    { av: "💡", pack: "投资助手", via: "Slack", meta: "pack: equity · 代码层硬禁下单", input: "听人提了一支股票,随口问了一句", work: "持续盯盘 · 证据巡检", result: "🔔 主动回来:有异动,要不要聊聊?" },
    { av: "🎙️", pack: "口播数字人", via: "飞书", meta: "pack: talking-head", input: "在外拍了段口播,发给它", work: "自动剪辑 · 配字幕", result: "✓ 成片已导出,真人原声没被替换" },
    { av: "🔍", pack: "内容调研", via: "微信", meta: "pack: research", input: "路上听到个有意思的事,一句话甩过去", work: "深挖几小时 · 交叉核对", result: "✓ 带出处的报告 + 后续持续追踪" }
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
      h3: "它是你的,记得你,谁也拿不走",
      story:
        "它住在你自己的电脑里,用得越久越懂你。但它学到的每一条,都要<b>你点头才记住</b>;记忆是你硬盘上的文件,不是某家公司服务器上的账号。没有谁能像 Rewind、Humane 那样,一纸通知就把它砖掉。",
      head: "~/detars/memory",
      lab: "本地",
      body: [
        "<span class='dim'>./profile.mem</span>",
        "<span class='dim'>./projects/*.mem</span>",
        "新记忆 → <span class='hl'>等你确认</span>",
        "<span class='ok'>✓ 离线可用 · 一字不上传</span>"
      ],
      foot: "<b>底气:</b>记忆与身份是你磁盘上的文件,主权写死在架构里。"
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
  bombCap: "行能跑的代码 · 出自它自己的引擎",
  bombH2: "我们不是“说”它能干硬活——<span class='o'>它干出了它自己。</span>",
  bombP:
    "一个靠不住的 AI,写不出 117 万行能跑的代码。产品本身,就是产品能力最极致的证明——这个数字,你可以当场让工程师在代码库里数出来。",
  closeH2: "DeTars 是永久的第三方终端伙伴。<br><span class='grad'>你拥有的,不是租的。</span>",
  closeP: "一支你拥有的、永远在线、随时能在任何聊天窗口指挥、还会主动回来找你的私人 AI 团队。",
  closePrimary: "在你的电脑上拥有它 →",
  closeSecondary: "读它的技术故事"
};

export const homeCopy: Record<Locale, HomeCopy> = { en, zh };
