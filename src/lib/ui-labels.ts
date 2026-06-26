import type { Locale } from "@/lib/site";

type L = Record<Locale, string>;

export const ui: Record<string, L> = {
  answerShort: { en: "In short", zh: "一句话", "zh-Hant": "一句話", ja: "要点", fr: "En bref", es: "En resumen" },
  footerTagline: {
    en: "Yours, not rented",
    zh: "你拥有的,不是租的",
    "zh-Hant": "你擁有的,不是租的",
    ja: "借り物ではなく、あなたのもの",
    fr: "À vous, pas en location",
    es: "Tuyo, no alquilado"
  },
  footerSub: {
    en: "Your permanent third-party terminal.",
    zh: "永久的第三方终端伙伴。",
    "zh-Hant": "永久的第三方終端夥伴。",
    ja: "あなただけの、永続的なサードパーティ端末。",
    fr: "Votre terminal tiers, pour toujours.",
    es: "Tu terminal independiente, para siempre."
  },
  reports: { en: "Reports", zh: "报告", "zh-Hant": "報告", ja: "レポート", fr: "Rapports", es: "Informes" },
  sources: { en: "Sources", zh: "来源", "zh-Hant": "來源", ja: "出典", fr: "Sources", es: "Fuentes" },
  questions: { en: "Questions", zh: "常见问题", "zh-Hant": "常見問題", ja: "よくある質問", fr: "Questions", es: "Preguntas" },
  tldr: { en: "TL;DR", zh: "摘要", "zh-Hant": "摘要", ja: "要約", fr: "Résumé", es: "Resumen" },
  sealed: {
    en: "Evidence-sealed · peer-reviewed",
    zh: "证据封印 · 独立复审",
    "zh-Hant": "證據封印 · 獨立複審",
    ja: "証拠シール済み · 独立レビュー済み",
    fr: "Preuves scellées · relu par des pairs",
    es: "Evidencia sellada · revisado por pares"
  },
  byPack: {
    en: "Produced by the DeTars research pack, evidence-sealed and peer-reviewed.",
    zh: "由 DeTars 内容调研 pack 生成,并经其证据封印与独立复审。",
    "zh-Hant": "由 DeTars 內容調研 pack 生成,並經其證據封印與獨立複審。",
    ja: "DeTars のリサーチ pack が生成し、証拠シールと独立レビューを経たものです。",
    fr: "Produit par le pack de recherche DeTars, preuves scellées et relu par des pairs.",
    es: "Producido por el pack de investigación de DeTars, con evidencia sellada y revisión por pares."
  },
  byEditorial: {
    en: "Written and fact-checked by the DeTars team. Sources below.",
    zh: "由 DeTars 团队撰写并核实;来源见下。",
    "zh-Hant": "由 DeTars 團隊撰寫並查證;來源見下。",
    ja: "DeTars チームが執筆・事実確認しました。出典は以下のとおりです。",
    fr: "Rédigé et vérifié par l'équipe DeTars. Sources ci-dessous.",
    es: "Escrito y verificado por el equipo de DeTars. Fuentes abajo."
  },
  researchKicker: { en: "Research", zh: "研究", "zh-Hant": "研究", ja: "リサーチ", fr: "Recherche", es: "Investigación" },
  notFoundTitle: { en: "Nothing here", zh: "这里什么都没有", "zh-Hant": "這裡什麼都沒有", ja: "ここには何もありません", fr: "Rien par ici", es: "Aquí no hay nada" },
  notFoundBody: {
    en: "The page you were looking for moved or never existed.",
    zh: "你找的页面被移动了,或从未存在。",
    "zh-Hant": "你找的頁面被移動了,或從未存在。",
    ja: "お探しのページは移動したか、存在しません。",
    fr: "La page que vous cherchiez a été déplacée ou n'a jamais existé.",
    es: "La página que buscabas se movió o nunca existió."
  },
  backHome: { en: "Back home →", zh: "回首页 →", "zh-Hant": "回首頁 →", ja: "ホームへ →", fr: "Accueil →", es: "Inicio →" }
};

export const t = (key: string, locale: Locale): string => ui[key]?.[locale] ?? ui[key]?.en ?? "";
