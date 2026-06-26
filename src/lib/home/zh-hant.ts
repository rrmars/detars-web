import type { HomeCopy } from "@/lib/home-copy";

export const homeZhHant: HomeCopy = {
  metaTitle: "DeTars | 自己寫出了自己的 AI",
  metaDescription:
    "DeTars 是一支你擁有的私人 AI 團隊——會自己拆解、能掛著跑一整夜、出錯能復原、不能假裝做完、就住在你電腦裡。它這 117 萬行程式碼,是它自己的引擎寫出來的。",
  heroEyebrow: "會自己幹活的私人 AI",
  heroH1: "它,<span class='grad'>親手寫出了自己。</span>",
  heroSub:
    "DeTars 這 <b>117 萬行</b>、能在你電腦上跑的軟體,出自它自己的引擎。一個靠不住的 AI,寫不出能跑的自己——<b>所以你敢把真正的活交給它。</b>",
  heroPrimary: "免費開始 →",
  heroSecondary: "看它怎麼陪你做事",
  proof: [
    { n: "1,170,000", l: "行程式碼 · 由它自己寫成" },
    { n: "~50", l: "個前沿模型 · 隨用隨切" },
    { n: "100%", l: "記憶在你自己的硬碟上" }
  ],
  verify: "· 這些數字都能當場在程式碼庫裡數出來,不是簡報上的修辭",
  hookKicker: "為什麼是現在",
  hookH2: "今天的模型,像個聰明但<span class='o'>靠不住</span>的實習生。",
  hookP:
    "靈光一閃很驚豔,但它會忘事、會假裝做完、會半路當掉。沒人敢把真正的活交給靠不住的東西。<b>DeTars 把它變成一支你敢把真正的活交出去的團隊。</b>",
  liveKicker: "怎麼和它一起生活",
  liveH2: "一句話甩給它,剩下的<span class='o'>它替你跑完。</span>",
  steps: [
    { st: "輸入來自任何地方", sd: "飛書 / Slack / Telegram / 微信,一句話或一張圖" },
    { st: "它在後台替你長跑", sd: "幾小時、甚至一整夜,不用你盯著" },
    { st: "做完主動回來找你", sd: "<b>替你活著,不是等你伺候它。</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "寵物管家", via: "Telegram", meta: "pack: pet-care", input: "出門拍了張狗狗的照片,丟給它", work: "後台剪輯 · 配文案", result: "✓ 搞笑短影片 + 社群貼文文案已生成" },
    { av: "💡", pack: "投資助手", via: "Slack", meta: "pack: equity · 程式碼層硬禁下單", input: "聽人提了一支股票,隨口問了一句", work: "持續盯盤 · 證據巡檢", result: "🔔 主動回來:有異動,要不要聊聊?" },
    { av: "🎙️", pack: "口播數位人", via: "飛書", meta: "pack: talking-head", input: "在外拍了段口播,傳給它", work: "自動剪輯 · 配字幕", result: "✓ 成片已匯出,真人原聲沒被替換" },
    { av: "🔍", pack: "內容調研", via: "微信", meta: "pack: research", input: "路上聽到件有意思的事,一句話甩過去", work: "深挖幾小時 · 交叉核對", result: "✓ 帶出處的報告 + 後續持續追蹤" }
  ],
  phoneFoot: "同一個母題:輸入 → 後台長跑 → 主動回來",
  corridorKicker: "它憑什麼靠得住",
  scenes: [
    {
      idx: "01",
      h3: "它自己會想,不用你一步步教",
      story:
        "給它一個目標——「把三個競品這一季的動向研究清楚,出一份帶出處的報告」。它自己拆解、當場召集幾個專員分頭查、自己盯進度、最後交一份成稿。<b>怎麼幹是它當場想出來的,不是你提前焊死的流程。</b>",
      head: "orchestrator.log",
      lab: "即時",
      body: [
        "<span class='hl'>規劃</span> 拆解目標 → 3 個子任務",
        "<span class='ok'>↳</span> 專員 A · 查財報",
        "<span class='ok'>↳</span> 專員 B · 查新聞",
        "<span class='ok'>↳</span> 專員 C · 交叉核對",
        "<span class='dim'>暫停 · 等 A/B 完成 → 彙整</span>"
      ],
      foot: "<b>底氣:</b>自己組隊、分工、暫停續跑——真實運行,不是腳本假裝。"
    },
    {
      idx: "02",
      h3: "它打不垮,能掛著跑一整夜",
      story:
        "真正的活要跑好幾個小時:網路抽風、服務商限流、電腦休眠。一般工具碰一次卡頓,幾小時白費。DeTars 把「出狀況」當成事實——退一步、重試、接著幹;電腦當掉重開能續上。<b>你可以讓它通宵跑,早上來看結果。</b>",
      head: "runtime.recovery",
      lab: "03:14",
      body: [
        "<span class='dim'>限流</span> provider 429 → 退避重試",
        "<span class='ok'>✓ 已復原,繼續第 7 步</span>",
        "<span class='dim'>休眠</span> 斷點已存檔",
        "<span class='ok'>✓ 重開後從斷點續上</span>"
      ],
      foot: "<b>底氣:</b>把出錯當成可繞過去的事實,而不是一碰就死。"
    },
    {
      idx: "03",
      h3: "它不能騙你,而且證據齊全",
      story:
        "AI 最坑的一點:信誓旦旦說「做完了」,其實沒做;引用一份根本不存在的資料。DeTars 把「完成」變成一張<b>必須兌現的收據</b>——交付了沒、有沒有真憑實據,湊不齊就過不了關。每份引用都被封印,改一個字立刻失效。",
      head: "completion.receipt",
      lab: "已核驗",
      body: [
        "交付物 ........... <span class='ok'>✓ 存在</span>",
        "證據鏈 ........... <span class='ok'>✓ 完整</span>",
        "<span class='dim'>sha256: 9f4c…a1e</span>",
        "獨立複審 ......... <span class='ok'>✓ 簽字</span>",
        "<span class='hl'>引用被改 → <span class='dim'>當場拒絕</span></span>"
      ],
      foot: "<b>底氣:</b>「做完了」是可核驗的收據,不是一句感覺。"
    },
    {
      idx: "04",
      h3: "它是你的,記得你,誰也拿不走",
      story:
        "它住在你自己的電腦裡,用得越久越懂你。但它學到的每一條,都要<b>你點頭才記住</b>;記憶是你硬碟上的檔案,不是某家公司伺服器上的帳號。沒有誰能像 Rewind、Humane 那樣,一紙通知就把它變磚塊。",
      head: "~/detars/memory",
      lab: "本機",
      body: [
        "<span class='dim'>./profile.mem</span>",
        "<span class='dim'>./projects/*.mem</span>",
        "新記憶 → <span class='hl'>等你確認</span>",
        "<span class='ok'>✓ 離線可用 · 一字不上傳</span>"
      ],
      foot: "<b>底氣:</b>記憶與身分是你磁碟上的檔案,主權寫死在架構裡。"
    },
    {
      idx: "05",
      h3: "它會自我進化",
      story:
        "它把自己的 bug 抓成永久回歸覆蓋,自我重組記憶;當任務需要它沒有的能力時,自動生成、安裝、管理自己的 Tool 和 Skill。<b>每個版本都比上一版更難被打敗。</b>",
      head: "evolution.log",
      lab: "自動",
      body: [
        "<span class='hl'>回歸</span> 新增 1 例,已封印",
        "<span class='ok'>↳</span> 記憶已重建索引",
        "<span class='hl'>技能</span> 需要:pdf-extract",
        "<span class='ok'>↳ 已生成 · 已安裝 · ✓</span>",
        "<span class='dim'>每個版本更難被難倒</span>"
      ],
      foot: "<b>底氣:</b>可靠性會複利,能力它自己長。"
    },
    {
      idx: "06",
      h3: "它不燒你的錢",
      story:
        "長時間無人值守的任務,通常意味著天價帳單。DeTars 透過路由讓模型的 KV / 提示快取保持高命中,重複的脈絡不重複計費——<b>每個任務少燒很多 token,模型越降價越便宜。</b>掛著跑一整夜,也不用盯著帳單。",
      head: "routing.cache",
      lab: "即時",
      body: [
        "<span class='dim'>脈絡</span> 18.4 萬 tokens",
        "<span class='ok'>↳ 提示快取 · 命中</span>",
        "計費 → 僅新增 token",
        "<span class='dim'>重複脈絡:不重複計費</span>"
      ],
      foot: "<b>底氣:</b>快取感知路由——少計費,不會失控燒錢。"
    }
  ],
  bombCap: "行能跑的程式碼 · 出自它自己的引擎",
  bombH2: "我們不是「說」它能幹硬活——<span class='o'>它幹出了它自己。</span>",
  bombP:
    "一個靠不住的 AI,寫不出 117 萬行能跑的程式碼。產品本身,就是產品能力最極致的證明——這個數字,你可以當場讓工程師在程式碼庫裡數出來。",
  closeH2: "DeTars 是永久的第三方終端夥伴。<br><span class='grad'>你擁有的,不是租的。</span>",
  closeP: "一支你擁有的、永遠在線、隨時能在任何聊天視窗指揮、還會主動回來找你的私人 AI 團隊。",
  closePrimary: "在你的電腦上擁有它 →",
  closeSecondary: "讀它的技術故事"
};
