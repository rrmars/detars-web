import type { HomeCopy } from "@/lib/home-copy";

export const homeJa: HomeCopy = {
  metaTitle: "DeTars | 自分自身を書き上げたAI",
  metaDescription:
    "DeTarsは、あなたが所有する専属のAIチーム。自分で考え、何時間も走り続け、障害から立ち直り、完了を偽れず、あなたのマシンの中で生きる。その117万行は、自らのエンジンが書き上げた。",
  heroEyebrow: "本当の仕事をこなす、あなた専用のAI",
  heroH1: "それは、<span class='grad'>自分自身を書き上げた。</span>",
  heroSub:
    "あなたのマシン上で動くDeTars——その<b>117万行</b>すべてを、DeTars自身のエンジンが書いた。頼りにならないAIに、動く自分自身は作れない。<b>だから、本当の仕事を任せられる。</b>",
  heroPrimary: "今すぐ始める →",
  heroSecondary: "どう働くかを見る",
  proof: [
    { n: "1,170,000", l: "行 · 自分自身で書いた" },
    { n: "~50", l: "の最前線モデル · いつでも切替" },
    { n: "100%", l: "記憶はあなたのディスクの中" }
  ],
  verify: "· ここにある数字はすべてコードベースで数えられる——スライドの修辞ではない",
  hookKicker: "なぜ、今なのか",
  hookH2: "今日のモデルは、優秀だが<span class='o'>頼りにならない</span>インターンだ。",
  hookP:
    "閃きは眩しい。だが、忘れ、完了を偽り、途中で落ちる。頼りにならないものに、本当の仕事を任せる人はいない。<b>DeTarsは、それを本物を託せるチームに変える。</b>",
  liveKicker: "それと暮らす",
  liveH2: "一行、放り込むだけ。<span class='o'>あとは、あなたの代わりに走り切る。</span>",
  steps: [
    { st: "どこからでも入力", sd: "Feishu / Slack / Telegram / WeChat——一行、または一枚の写真で" },
    { st: "バックグラウンドで走る", sd: "数時間、一晩中でも——付きっきりは不要" },
    { st: "向こうから戻ってくる", sd: "<b>あなたのために生きる——逆ではない。</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "ペットケア", via: "Telegram", meta: "pack: pet-care", input: "愛犬の写真を撮って、送っただけ", work: "編集 · キャプション作成", result: "✓ 面白いショート動画 + SNSキャプション完成" },
    { av: "💡", pack: "投資", via: "Slack", meta: "pack: equity · コードで売買を禁止", input: "ある銘柄の話を聞いて、ふと尋ねただけ", work: "監視 · 証拠チェック", result: "🔔 戻ってきた：異常な動き——話す？" },
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
      h3: "あなたのもの——誰にも奪えない",
      story:
        "それはあなた自身のマシンの中で生き、時間をかけてあなたを学ぶ。だが、あなたについて覚えることはすべて<b>まずあなたの了承が要る</b>。その記憶はあなたのディスク上のファイルであって、誰かのサーバー上のアカウントではない。RewindやHumaneのように、一通の通知で文鎮化させられることはない。",
      head: "~/detars/memory",
      lab: "local",
      body: [
        "<span class='dim'>./profile.mem</span>",
        "<span class='dim'>./projects/*.mem</span>",
        "new memory → <span class='hl'>awaiting your ok</span>",
        "<span class='ok'>✓ works offline · nothing uploaded</span>"
      ],
      foot: "<b>本物：</b>記憶と人格はあなたのディスク上のファイル——主権がアーキテクチャに焼き込まれている。"
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
  bombCap: "行の動くコード · 自らのエンジンが書いた",
  bombH2: "ハードな仕事をこなせると「言う」のではない——<span class='o'>それは、自分自身を生み出した。</span>",
  bombP:
    "頼りにならないAIに、117万行の動くコードは書けない。プロダクトそのものが、何ができるかの究極の証明だ——しかもその数字は、その場でコードベースから数えられる。",
  closeH2: "DeTarsは、あなたの永続的なサードパーティ端末。<br><span class='grad'>借り物ではなく、あなたのもの。</span>",
  closeP: "あなたが所有する専属のAIチーム。常時稼働し、どんなチャット画面からでも指揮でき、自ら戻ってくる。",
  closePrimary: "あなたのマシンで手に入れる →",
  closeSecondary: "技術的な物語を読む"
};
