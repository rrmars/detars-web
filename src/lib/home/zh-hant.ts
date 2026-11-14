import type { HomeCopy } from "@/lib/home-copy";

export const homeZhHant: HomeCopy = {
  metaTitle: "DeTars | AI 可以服務所有人。 這個，是為你的。",
  metaDescription: "一整支 AI 團隊，只為你一個人。幕僚長、助手、總監、導演，每一位都盼你成事，也盼你過得好。",
  heroEyebrow: "你的私人 AI 團隊",
  heroH1: "AI 可以服務所有人。<br><span class='grad'>這個，是為你的。</span>",
  heroSub: "一整支 AI 團隊，只為你一個人。<br>幕僚長替你統籌，助手陪你聊，總監推進日常，導演拍你的片——每一位都盼你成事，也盼你過得好。",
  heroPrimary: "從一個目標開始 →",
  heroSecondary: "看它怎麼陪你做事",
  futureKicker: "我們正在創造的未來",
  futureH2: "更多事情，在你的裝置上完成。<br>更多可能，為你打開。",
  futureP: "我們訓練了自己的隱私模型，就跑在你的裝置上：開啟自動隱私後，姓名、電話、證件這類敏感資訊會先在本機換成占位符，再送往雲端模型，結果回來後在本機還原。本機還有負責實際幹活的模型，會隨著模型進步越來越強。隨著算力日益普及，我們希望讓 DeTars 在你的裝置上完成更多事情：本機與雲端各展所長、協同配合，把保護你的隱私放在核心位置。",
  futureViz: { device: "你的裝置", privacy: "隱私模型 · 在本機去識別化", local: "本機模型 · 幹活，越來越強", cloud: "雲端模型 · 隨用隨切", wire: "送出去的只有占位符 ⟦人名_1⟧" },
  proof: [
    { n: "幾天", l: "單一任務連跑幾天 · 長期專案持續推進" },
    { n: "所有", l: "主流模型 · 隨用隨切" },
    { n: "你的裝置", l: "你的 AI 團隊在這裡安家" }
  ],
  verify: "· 這裡每一條,你都能在自己電腦上驗證,不是簡報上的修辭",
  hookKicker: "為什麼是現在",
  hookH2: "今天的模型,像個聰明但<span class='o'>靠不住</span>的實習生。",
  hookP:
    "靈光一閃很驚豔,但它會忘事、會假裝做完、會半路當掉。沒人敢把真正的活交給靠不住的東西。<b>DeTars 把它變成一支你敢把真正的活交出去的團隊。</b>",
  liveKicker: "怎麼和它一起生活",
  liveH2: "你甩過去一句話,<span class='o'>它做完回來找你。</span>",
  steps: [
    { st: "輸入來自任何地方", sd: "Telegram / Slack / 飛書,一句話或一張圖(微信為純文字)" },
    { st: "它在後台替你長跑", sd: "一個任務能連跑好幾天；長期專案持續推進，定期回來匯報" },
    { st: "做完主動回來找你", sd: "<b>替你活著,不是等你伺候它。</b>" }
  ],
  scenarios: [
    {
      av: "🧭",
      pack: "幕僚長",
      via: "Slack",
      meta: "幕僚長 · 統籌全部任務",
      input: "這幾個專案你幫我盯著，有事合在一起找我",
      work: "照看 4 個任務 · 協調相依 · 核對交付",
      result: "<b>今日彙整</b><br>✓ 調研報告已交付，出處已核對<br>⟳ 短片在出第 2 版，預計今晚<br>⚑ 投資複核：有 1 件要你拍板",
      story: "專案一多，最累的是盯進度。<b>幕僚長替你統籌整支團隊</b>：轉達新需求、協調相依關係、核對交付，只把成果和真正要你決定的事合在一起帶回來。別的 AI 等你來問，它替你看著全局。"
    },
    {
      av: "💬",
      pack: "Chat 助手",
      via: "LINE",
      meta: "chat · 記得你的筆記和過去的決定",
      input: "上次那家供應商，我們為什麼沒選？",
      work: "翻你的筆記和紀錄 · 秒回",
      result: "3 月那次交貨拖了兩週，你當時記了「不再續約」——原話在這。<br>要不要請 20 位採購、法務、財務專家，幫你腦力激盪一輪備選？",
      story: "<b>它就住在你的 LINE、Slack、Telegram 裡</b>，不用另開一個 App。反應快，還記得你：你的筆記、專案、以前做過的決定。想聽不同的聲音？從 Agent 市集請來<b>幾百種專家角色</b>，陪你一起腦力激盪。複雜的事，它直接轉給團隊去辦。"
    },
    {
      av: "🔍",
      pack: "深度內容調研",
      via: "Telegram",
      meta: "pack: research · 每個判斷附出處",
      input: "聽朋友說 Anthropic 要上市，想分析一下 AI 泡沫",
      work: "追到公開說明書原文 · 交叉核對路演與預測",
      result: "✓ 一份有洞見的研究報告：<br><b>需求有根基，回報尚未閉環</b>",
      story: "一句聽來的話，它順著線索追到公開說明書、路演和原始數據，把證據和分歧攤開講清楚，交回一份能逐條追問出處的報告。<b>這一篇就是這樣真實做出來的</b>，可以直接讀：",
      link: { href: "/research/anthropic-ipo-ai-bubble-2026-11-11", label: "讀《Anthropic IPO 與 AI 泡沫》（英文）→" }
    },
    {
      av: "☾",
      pack: "召喚",
      via: "DeTars",
      meta: "pack: summon · 人物停在你選的那一刻",
      input: "東坡先生，被貶黃州那年，您是怎麼熬過來的？",
      work: "蘇軾 · 元豐五年 · 黃州",
      result: "「熬？我在黃州學會了種地，城東那片坡地就叫它東坡；又琢磨出慢火燉豬肉，少著水，火候足時它自美。夜裡睡不著，就去赤壁看月亮。日子是苦，肉倒便宜——你今天吃什麼了？」",
      story: "把故事裡、歷史裡的那個人請到眼前。<b>人物停在你選的那一刻</b>，帶著他的經歷、口吻和脾氣跟你聊。今天陪蘇東坡聊落難，明天跟福爾摩斯一起推理。",
      link: { href: "/zh-hant/packs/summon", label: "看看召喚 →" }
    },
    {
      av: "✷",
      pack: "命運陪伴",
      via: "DeTars",
      meta: "pack: destiny · 觀星台",
      input: "在糾結要不要換工作，幫我抽三張牌",
      work: "洗牌 · 抽出過去 / 現在 / 未來",
      result: "寶劍八 → 權杖騎士 → 星星<br>困住你的多半是自己設的框。先把現實的取捨列清楚，再邁步。",
      story: "說出此刻的處境，它用牌、星盤和象徵幫你把困惑聊具體，再把行動啟發帶回現實。<b>在觀星台點一張牌，還能沿同一局繼續追問。</b>",
      link: { href: "/zh-hant/packs/destiny", label: "去觀星台 →" },
      tarot: [{ pos: "過去", name: "寶劍八" }, { pos: "現在", name: "權杖騎士" }, { pos: "未來", name: "星星" }]
    },
    {
      av: "▶",
      pack: "AI 影片",
      via: "Telegram",
      meta: "pack: ai-video · 生成前先確認預算",
      input: "幫我家的貓拍一支 15 秒的太空冒險短片",
      work: "構思兩個視覺方向 · 逐鏡生成",
      result: "✓ 兩個方向任你選：<b>復古科幻</b> / <b>手繪童話</b><br>選定後逐鏡出片，交付 MP4",
      story: "你腦中的那個畫面，先讓導演提出幾個差異明顯的視覺方向，<b>選中了才花錢逐鏡生成</b>。「沿著這張的氛圍繼續」「保留角色，換個動作」，一句話就改。",
      link: { href: "/zh-hant/packs/ai-video", label: "看看 AI 影片 →" }
    },
    {
      av: "◈",
      pack: "投資陪伴",
      via: "Slack",
      meta: "pack: equity · 沒接券商，沒有下單工具",
      input: "聽人提了一支股票，隨口問了一句",
      work: "拆解持有理由 · 持續巡檢證據",
      result: "🔔 主動回來：財報改變了你的第 2 條理由，要不要聊聊？",
      story: "把看好的理由、反方意見和驗證點放在一起。<b>新消息一來，它先問：這改變了你哪條理由？</b>只幫你想清楚，不碰你的帳戶。",
      link: { href: "/zh-hant/packs/investing", label: "看看投資陪伴 →" }
    },
    {
      av: "▦",
      pack: "數據工坊",
      via: "Telegram",
      meta: "pack: data-studio",
      input: "（拖進一張銷售表）今年毛利掉最多的是哪一塊？",
      work: "核對欄位口徑 · 按地區和產品拆開",
      result: "✓ 北區 · 硬體線 −18%<br>儀表板已生成，點一個地區接著追問原因",
      story: "表格拖進來，問一句話，拿回一張能點的儀表板。<b>從總覽到局部、從數字到原因</b>，分析像對話一樣往下走。",
      link: { href: "/zh-hant/packs/data-studio", label: "看看數據工坊 →" }
    },
    {
      av: "⌘",
      pack: "程式設計",
      via: "Slack",
      meta: "pack: coding",
      input: "幫我看懂這個專案的登入流程，最值得改哪裡？",
      work: "定位關鍵檔案 · 查呼叫關係",
      result: "✓ 登入鏈路涉及 3 個檔案<br>最值得改的一處，附影響範圍",
      story: "陌生的龐大程式碼，它<b>先看懂再動手</b>：定位關鍵檔案、查定義和呼叫關係，把影響和選項講清楚，再和你一起改、一起驗證。",
      link: { href: "/zh-hant/packs/coding", label: "看看程式設計 →" }
    },
    {
      av: "🎙️",
      pack: "口播剪輯",
      via: "LINE",
      meta: "pack: talking-head · 保留你的原聲",
      input: "在外面拍了段口播，主要講成本變化",
      work: "壓縮重複 · 修字幕 · 做數據卡",
      result: "✓ 完整預覽已出：原聲保留，關鍵數字做成了數據卡",
      story: "你有話想說，不該為了剪輯耗掉三天。<b>它整理敘事、修字幕、配圖表</b>，你只要指出「這裡停頓太長」「這句是重點」。",
      link: { href: "/zh-hant/packs/talking-head", label: "看看口播剪輯 →" }
    }
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
      h3: "你的 AI，把隱私放在心上",
      story: "本機儲存不等於所有任務都離線執行：使用雲端模型時，相關任務輸入會傳送給對應服務商。<b>我們的方向，是讓更多事情在你的裝置上完成，讓本機與雲端智慧協同配合。</b>",
      head: "local + cloud",
      lab: "本機裝置",
      body: [
        "<span class='dim'>DeTars</span>",
        "雲端模型任務 → 傳送相關輸入",
        "未來方向 → 更多本機能力"
      ],
      foot: "<b>我們的方向：</b>持續增強本機能力，不是承諾所有任務都能離線完成。"
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
  bombCap: "行程式碼 · 一半由 DeTars 自己寫成",
  bombH2: "DeTars，<span class='o'>是用 DeTars 造出來的。</span>",
  bombP: "340 多萬行程式碼，<b>一半出自它自己之手</b>。你交給它的活，很少會比「造出它自己」更難。<b>它既是應用，也是你的底座</b>——你在這裡攢下的知識、方法和成果，明年不管哪家模型勝出，都還是你的。",
  closeH2: "DeTars 是永久的第三方終端夥伴。<br><span class='grad'>站在你這邊的 AI。</span>",
  closeP: "幫你把事做成，也把日子過好。<br>一支為你服務的私人 AI 團隊：在背景推進工作，透過你常用的聊天應用接受指令，並主動跟進。",
  closePrimary: "在你的電腦上擁有它 →",
  closeSecondary: "看真實場景"
};
