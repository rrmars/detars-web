import type { HomeCopy } from "@/lib/home-copy";

export const homeJa: HomeCopy = {
  metaTitle: "DeTars | みんなのためのAI？ これは、あなたのために。",
  metaDescription:
    "あなたの目標、プロジェクト、毎日の暮らし。 一緒に前へ進めるAIパートナー。",
  heroEyebrow: "あなたのAIパートナー",
  heroH1: "みんなのためのAI？<br><span class='grad'>これは、あなたのために。</span>",
  heroSub: "あなたの目標、プロジェクト、毎日の暮らし。<br>一緒に前へ進めるAIパートナー。",
  heroPrimary: "目標をひとつ渡す →",
  heroSecondary: "どう働くかを見る",
  futureKicker: "私たちがつくる未来",
  futureH2: "あなたのデバイスで、もっと。<br>あなたの可能性を、もっと。",
  futureP: "モデルの能力が高まり、計算資源がより身近になるにつれて、DeTarsがあなたのデバイス上でできることを増やしていきたいと考えています。ローカルとクラウドのAIが協力し、プライバシーをその中心に据える未来へ。",
  proof: [
    { n: "数時間", l: "付きっきり不要 · 一晩中でも" },
    { n: "すべての", l: "主要モデル · いつでも切替" },
    { n: "あなたのデバイス", l: "AIパートナーの居場所" }
  ],
  verify: "· ここにあるものはすべて、あなたのマシンで確かめられる——スライドの修辞ではない",
  hookKicker: "なぜ、今なのか",
  hookH2: "今日のモデルは、優秀だが<span class='o'>頼りにならない</span>インターンだ。",
  hookP:
    "閃きは眩しい。だが、忘れ、完了を偽り、途中で落ちる。頼りにならないものに、本当の仕事を任せる人はいない。<b>DeTarsは、それを本物を託せるチームに変える。</b>",
  liveKicker: "それと暮らす",
  liveH2: "一行を送る。<span class='o'>仕上げて戻ってくる。</span>",
  steps: [
    { st: "どこからでも入力", sd: "Telegram / Slack / Feishu——一行、または一枚の写真で(WeChatはテキストのみ)" },
    { st: "バックグラウンドで走る", sd: "数時間、一晩中でも——付きっきりは不要" },
    { st: "向こうから戻ってくる", sd: "<b>あなたのために生きる——逆ではない。</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "ペットケア", via: "Telegram", meta: "pack: pet-care", input: "愛犬の写真を撮って、送っただけ", work: "編集 · キャプション作成", result: "✓ 面白いショート動画 + SNSキャプション完成" },
    { av: "💡", pack: "投資", via: "Slack", meta: "pack: equity · 証券会社未接続・発注機能なし", input: "ある銘柄の話を聞いて、ふと尋ねただけ", work: "監視 · 証拠チェック", result: "🔔 戻ってきた：異常な動き——話す？" },
    { av: "🎙️", pack: "ナレーション", via: "Feishu", meta: "pack: talking-head", input: "出先でトーク動画を撮影", work: "自動編集 · 字幕付け", result: "✓ 完成版を書き出し——あなたの本物の声のまま" },
    { av: "🔍", pack: "リサーチ", via: "WeChat", meta: "pack: research", input: "気になる話を耳にして、一行投げた", work: "数時間かけて深掘り · 相互検証", result: "✓ 出典付きレポート + 継続追跡" }
  ],
  phoneFoot: "同じ一つのかたち：入力 → バックグラウンドで走る → 戻ってくる",
  corridorKicker: "なぜ、信頼できるのか",
  scenes: [
    {
      idx: "01",
      h3: "自分で考える",
      story:
        "ゴールを与える——&lsquo;今四半期に競合3社を調べ、出典付きレポートを出して&rsquo;。仕事を分解し、専門家を立ち上げ、進捗を追い、仕上がった原稿を返す。<b>やり方はその場で考え抜く。あらかじめ焼き付けたスクリプトではない。</b>",
      head: "orchestrator.log",
      lab: "live",
      body: [
        "<span class='hl'>plan</span> goal → 3 subtasks",
        "<span class='ok'>↳</span> agent A · filings",
        "<span class='ok'>↳</span> agent B · news",
        "<span class='ok'>↳</span> agent C · cross-check",
        "<span class='dim'>pause · await A/B → merge</span>"
      ],
      foot: "<b>本物：</b>チームを組み、分業し、止めて再開する——本当に動いている。芝居ではない。"
    },
    {
      idx: "02",
      h3: "倒れない",
      story:
        "本当の仕事は何時間も走る：不安定なネットワーク、レート制限、眠るノートPC。多くのツールは一度のつまずきで何時間も失う。DeTarsはトラブルを事実として扱う——退いて、再試行し、続ける。再起動しても再開する。<b>一晩走らせて、朝に結果を見ればいい。</b>",
      head: "runtime.recovery",
      lab: "03:14",
      body: [
        "<span class='dim'>429</span> rate limited → backoff",
        "<span class='ok'>✓ recovered, resuming step 7</span>",
        "<span class='dim'>sleep</span> checkpoint saved",
        "<span class='ok'>✓ resumed from checkpoint</span>"
      ],
      foot: "<b>本物：</b>エラーは即死ではなく、迂回すべき事実だ。"
    },
    {
      idx: "03",
      h3: "ごまかせない",
      story:
        "AI最悪の手口：やっていないのに&lsquo;できた&rsquo;と言い張る。存在しない出典を引く。DeTarsは&lsquo;完了&rsquo;を<b>必ず履行すべきレシート</b>に変える——納品されたか否か、証拠に裏打ちされているか否か。すべての引用は封印され、一文字でも変えれば即座に無効になる。",
      head: "completion.receipt",
      lab: "verified",
      body: [
        "deliverable ....... <span class='ok'>✓ present</span>",
        "evidence chain .... <span class='ok'>✓ complete</span>",
        "<span class='dim'>sha256: 9f4c…a1e</span>",
        "peer review ....... <span class='ok'>✓ signed</span>",
        "<span class='hl'>citation altered → <span class='dim'>rejected</span></span>"
      ],
      foot: "<b>本物：</b>&lsquo;完了&rsquo;は検証できるレシートであって、気分ではない。"
    },
    {
      idx: "04",
      h3: "あなたのAI。プライバシーを中心に。",
      story: "ローカル保存は、すべてのタスクがオフラインで動くという意味ではありません。クラウドモデルを使う場合、関連するタスク入力はその提供元に送られます。<b>私たちは、ローカルとクラウドのAIを連携させながら、あなたのデバイスでできることを増やす方向を目指しています。</b>",
      head: "local + cloud",
      lab: "デバイス上",
      body: [
        "<span class='dim'>DeTars</span>",
        "クラウドタスク → 関連する入力を送信",
        "目指す方向 → ローカル能力の拡充"
      ],
      foot: "<b>目指す方向：</b>ローカル能力の拡充。全タスクのオフライン実行を約束するものではありません。"
    },
    {
      idx: "05",
      h3: "自分で進化する",
      story:
        "自分のバグを狩り、それを永久的な回帰カバレッジに変え、自分の記憶を再編成する。そして——タスクに足りない能力が必要になれば、自分のToolやSkillを自分で生成し、インストールし、管理する。<b>どのバージョンも、前のバージョンより打ち破りにくい。</b>",
      head: "evolution.log",
      lab: "auto",
      body: [
        "<span class='hl'>regression</span> +1 case sealed",
        "<span class='ok'>↳</span> memory reindexed",
        "<span class='hl'>skill</span> needed: pdf-extract",
        "<span class='ok'>↳ generated · installed · ✓</span>",
        "<span class='dim'>every version harder to break</span>"
      ],
      foot: "<b>本物：</b>複利で積み上がる信頼性——そして、自ら育てる新たな能力。"
    },
    {
      idx: "06",
      h3: "予算を燃やさない",
      story:
        "長時間の無人タスクは、たいてい巨額の請求を意味する。DeTarsはモデルのKV / prompt cacheを熱いまま保つようルーティングするので、繰り返す文脈に二重で支払うことはない——<b>タスクあたりのtokenがはるかに少なく、モデルの値下がりとともに安くなる。</b>メーターを気にせず、一晩中走らせていい。",
      head: "routing.cache",
      lab: "live",
      body: [
        "<span class='dim'>context</span> 184k tokens",
        "<span class='ok'>↳ prompt cache · hit</span>",
        "billed → new tokens only",
        "<span class='dim'>repeat context: not re-billed</span>"
      ],
      foot: "<b>本物：</b>キャッシュを意識したルーティング——請求されるtokenは少なく、暴走する請求もない。"
    }
  ],
  bombCap: "行のコード · 6か月で書かれた",
  bombH2: "ハードな仕事をこなせると「言う」のではない——<span class='o'>それは、自分自身を生み出した。</span>",
  bombP:
    "数百万行のコード。<b>その半分は、この製品自身が書いた</b>。<b>これはアプリであり、同時にその土台でもある。</b>あなたが今年この上に積み上げたものは、来年べつの会社が勝ったからといって、無駄にはならない。",
  closeH2: "DeTarsは、あなたの永続的なサードパーティ端末。<br><span class='grad'>あなたの味方になるAI。</span>",
  closeP: "やりたいことを形にし、毎日をよりよくするお手伝い。<br>バックグラウンドで働き、いつものチャットアプリから指示を受け、自らフォローアップする、あなた専属のAIチーム。",
  closePrimary: "あなたのマシンで手に入れる →",
  closeSecondary: "技術的な物語を読む"
};
