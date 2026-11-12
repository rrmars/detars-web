import type { Locale } from "@/lib/site";

type L = Record<Locale, string>;

export const ui: Record<string, L> = {
  researchEnglishNotice: {"en":"Articles without a translation open in English.","zh":"尚无本语言译文的文章会以英文打开。","zh-Hant":"尚無本語言譯文的文章會以英文開啟。","ja":"未翻訳の記事は英語で開きます。","fr":"Les articles non traduits s’ouvrent en anglais.","es":"Los artículos sin traducción se abren en inglés.","ko":"번역이 없는 글은 영어로 열립니다.","pt-BR":"Artigos sem tradução abrem em inglês.","de":"Artikel ohne Übersetzung werden auf Englisch geöffnet."},
  answerShort: { en: "In short", zh: "一句话", "zh-Hant": "一句話", ja: "要点", fr: "En bref", es: "En resumen" , "ko": "요약", "pt-BR": "Em resumo", "de": "Kurz gesagt" },
  footerTagline: {
    en: "AI on your side.",
    zh: "站在你这边的 AI。",
    "zh-Hant": "站在你這邊的 AI。",
    ja: "あなたの味方になるAI。",
    fr: "L’IA de votre côté.",
    es: "IA de tu lado."
  , "ko": "당신의 편에 서는 AI.", "pt-BR": "IA do seu lado.", "de": "KI auf deiner Seite." },
  footerSub: {
    en: "Your permanent third-party terminal.",
    zh: "永久的第三方终端伙伴。",
    "zh-Hant": "永久的第三方終端夥伴。",
    ja: "あなただけの、永続的なサードパーティ端末。",
    fr: "Votre terminal tiers, pour toujours.",
    es: "Tu terminal independiente, para siempre."
  , "ko": "당신의 영구적인 서드파티 터미널.", "pt-BR": "Seu terminal independente permanente.", "de": "Dein dauerhaftes, unabhängiges Terminal." },
  reports: { en: "Reports", zh: "报告", "zh-Hant": "報告", ja: "レポート", fr: "Rapports", es: "Informes" , "ko": "보고서", "pt-BR": "Relatórios", "de": "Berichte" },
  sources: { en: "Sources", zh: "来源", "zh-Hant": "來源", ja: "出典", fr: "Sources", es: "Fuentes" , "ko": "출처", "pt-BR": "Fontes", "de": "Quellen" },
  questions: { en: "Questions", zh: "常见问题", "zh-Hant": "常見問題", ja: "よくある質問", fr: "Questions", es: "Preguntas" , "ko": "질문", "pt-BR": "Perguntas", "de": "Fragen" },
  tldr: { en: "TL;DR", zh: "摘要", "zh-Hant": "摘要", ja: "要約", fr: "Résumé", es: "Resumen" , "ko": "핵심 요약", "pt-BR": "Resumo", "de": "Kurzfassung" },
  sealed: {
    en: "Evidence-sealed · peer-reviewed",
    zh: "证据封印 · 独立复审",
    "zh-Hant": "證據封印 · 獨立複審",
    ja: "証拠シール済み · 独立レビュー済み",
    fr: "Preuves scellées · relu par des pairs",
    es: "Evidencia sellada · revisado por pares"
  , "ko": "근거 봉인 · 동료 검토 완료", "pt-BR": "Evidências seladas · revisão por pares", "de": "Belege versiegelt · unabhängig geprüft" },
  byPack: {
    en: "Produced by the DeTars research pack, evidence-sealed and peer-reviewed.",
    zh: "由 DeTars 内容调研 pack 生成,并经其证据封印与独立复审。",
    "zh-Hant": "由 DeTars 內容調研 pack 生成,並經其證據封印與獨立複審。",
    ja: "DeTars のリサーチ pack が生成し、証拠シールと独立レビューを経たものです。",
    fr: "Produit par le pack de recherche DeTars, preuves scellées et relu par des pairs.",
    es: "Producido por el pack de investigación de DeTars, con evidencia sellada y revisión por pares."
  , "ko": "DeTars 리서치 팩이 작성하고 근거 봉인과 동료 검토를 거쳤습니다.", "pt-BR": "Produzido pelo pack de pesquisa do DeTars, com evidências seladas e revisão por pares.", "de": "Erstellt vom DeTars-Recherche-Pack, mit versiegelten Belegen und unabhängiger Prüfung." },
  byContentResearch: {
    en: "Produced by DeTars content research. Sources and review boundaries are documented in the report.",
    zh: "由 DeTars 内容调研生成；来源与核查边界见正文。",
    "zh-Hant": "由 DeTars 內容調研生成；來源與核查邊界見正文。",
    ja: "DeTars のコンテンツリサーチで作成。出典と確認範囲は本文に記載しています。",
    fr: "Produit par la recherche de contenu DeTars. Les sources et les limites de vérification figurent dans le rapport.",
    es: "Producido mediante la investigación de contenido de DeTars. Las fuentes y los límites de verificación figuran en el informe.",
    ko: "DeTars 콘텐츠 리서치로 작성되었습니다. 출처와 검토 범위는 본문에 명시되어 있습니다.",
    "pt-BR": "Produzido pela pesquisa de conteúdo DeTars. As fontes e os limites de verificação estão documentados no relatório.",
    de: "Erstellt mit der Inhaltsrecherche von DeTars. Quellen und Prüfungsgrenzen sind im Bericht dokumentiert."
  },
  byEditorial: {
    en: "Written and fact-checked by the DeTars team. Sources below.",
    zh: "由 DeTars 团队撰写并核实;来源见下。",
    "zh-Hant": "由 DeTars 團隊撰寫並查證;來源見下。",
    ja: "DeTars チームが執筆・事実確認しました。出典は以下のとおりです。",
    fr: "Rédigé et vérifié par l'équipe DeTars. Sources ci-dessous.",
    es: "Escrito y verificado por el equipo de DeTars. Fuentes abajo."
  , "ko": "DeTars 팀이 작성하고 사실을 확인했습니다. 출처는 아래에 있습니다.", "pt-BR": "Escrito e verificado pela equipe DeTars. Fontes abaixo.", "de": "Vom DeTars-Team geschrieben und auf Fakten geprüft. Quellen unten." },
  researchKicker: { en: "Research", zh: "研究", "zh-Hant": "研究", ja: "リサーチ", fr: "Recherche", es: "Investigación" , "ko": "리서치", "pt-BR": "Pesquisa", "de": "Recherche" },
  notFoundTitle: { en: "Nothing here", zh: "这里什么都没有", "zh-Hant": "這裡什麼都沒有", ja: "ここには何もありません", fr: "Rien par ici", es: "Aquí no hay nada" , "ko": "여기에는 아무것도 없습니다", "pt-BR": "Nada por aqui", "de": "Hier ist nichts" },
  notFoundBody: {
    en: "The page you were looking for moved or never existed.",
    zh: "你找的页面被移动了,或从未存在。",
    "zh-Hant": "你找的頁面被移動了,或從未存在。",
    ja: "お探しのページは移動したか、存在しません。",
    fr: "La page que vous cherchiez a été déplacée ou n'a jamais existé.",
    es: "La página que buscabas se movió o nunca existió."
  , "ko": "찾으시는 페이지가 이동했거나 처음부터 존재하지 않았습니다.", "pt-BR": "A página que você procurava foi movida ou nunca existiu.", "de": "Die gesuchte Seite wurde verschoben oder hat nie existiert." },
  legalNote: {
    en: "The investing pack provides information and records, not investment advice. The pet pack does not diagnose and is not a substitute for a licensed vet.",
    zh: "投资陪伴提供的是信息与记录,不构成投资建议。宠物管家不提供诊断,不能替代执业兽医。",
    "zh-Hant": "投資陪伴提供的是資訊與記錄,不構成投資建議。寵物管家不提供診斷,不能替代執業獸醫。",
    ja: "投資packが提供するのは情報と記録であり、投資助言ではありません。ペットpackは診断を行わず、獣医師の代わりにはなりません。",
    fr: "Le pack Investissement fournit de l'information et des archives, pas des conseils en investissement. Le pack animalier ne pose pas de diagnostic et ne remplace pas un vétérinaire.",
    es: "El pack de inversión ofrece información y registros, no asesoramiento financiero. El pack de mascotas no diagnostica ni sustituye a un veterinario."
  , "ko": "투자 팩은 정보와 기록을 제공하며 투자 자문을 제공하지 않습니다. 반려동물 팩은 진단하지 않으며 면허를 가진 수의사를 대신할 수 없습니다.", "pt-BR": "O pack de investimentos fornece informações e registros, não aconselhamento de investimentos. O pack de pets não faz diagnósticos nem substitui um veterinário habilitado.", "de": "Das Investment-Pack bietet Informationen und Aufzeichnungen, keine Anlageberatung. Das Tier-Pack stellt keine Diagnosen und ersetzt keinen zugelassenen Tierarzt." },
  backHome: { en: "Back home →", zh: "回首页 →", "zh-Hant": "回首頁 →", ja: "ホームへ →", fr: "Accueil →", es: "Inicio →" , "ko": "홈으로 →", "pt-BR": "Voltar ao início →", "de": "Zur Startseite →" }
};

export const t = (key: string, locale: Locale): string => ui[key]?.[locale] ?? ui[key]?.en ?? "";
