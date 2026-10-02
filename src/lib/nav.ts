import { SUPPORT_EMAIL } from "@/lib/legal";
import { withLocale, type Locale } from "@/lib/site";

export type NavItem = { route: string; label: Record<Locale, string> };

/** Footer links: a site route (localized) or an absolute href such as mailto:. */
export type FooterItem = NavItem | { href: string; label: Record<Locale, string> };

const sameEverywhere = (label: string): Record<Locale, string> => ({
  en: label,
  zh: label,
  "zh-Hant": label,
  ja: label,
  fr: label,
  es: label
});

export const navItems: NavItem[] = [
  { route: "/how-it-works", label: { en: "How it works", zh: "怎么用", "zh-Hant": "怎麼用", ja: "使い方", fr: "Fonctionnement", es: "Cómo funciona" } },
  { route: "/reliable", label: { en: "Why it's reliable", zh: "靠得住", "zh-Hant": "靠得住", ja: "信頼性", fr: "Fiabilité", es: "Fiabilidad" } },
  { route: "/packs", label: { en: "Packs", zh: "应用", "zh-Hant": "應用", ja: "Pack", fr: "Packs", es: "Packs" } },
  { route: "/research", label: { en: "Research", zh: "研究", "zh-Hant": "研究", ja: "リサーチ", fr: "Recherche", es: "Investigación" } },
  { route: "/download", label: { en: "Download", zh: "下载", "zh-Hant": "下載", ja: "ダウンロード", fr: "Télécharger", es: "Descargar" } }
];

export const ctaLabel: Record<Locale, string> = {
  en: "Get started",
  zh: "免费开始",
  "zh-Hant": "免費開始",
  ja: "無料で始める",
  fr: "Commencer",
  es: "Empezar"
};

export const footerGroups: { title: Record<Locale, string>; items: FooterItem[] }[] = [
  {
    title: { en: "Product", zh: "产品", "zh-Hant": "產品", ja: "プロダクト", fr: "Produit", es: "Producto" },
    items: [
      { route: "/how-it-works", label: { en: "How it works", zh: "怎么用", "zh-Hant": "怎麼用", ja: "使い方", fr: "Fonctionnement", es: "Cómo funciona" } },
      { route: "/packs", label: { en: "Packs", zh: "应用", "zh-Hant": "應用", ja: "Pack", fr: "Packs", es: "Packs" } },
      { route: "/download", label: { en: "Download", zh: "下载", "zh-Hant": "下載", ja: "ダウンロード", fr: "Télécharger", es: "Descargar" } }
    ]
  },
  {
    title: { en: "Why DeTars", zh: "为什么", "zh-Hant": "為什麼", ja: "DeTars とは", fr: "Pourquoi DeTars", es: "Por qué DeTars" },
    items: [
      { route: "/reliable", label: { en: "Why it's reliable", zh: "靠得住", "zh-Hant": "靠得住", ja: "信頼性", fr: "Fiabilité", es: "Fiabilidad" } },
      { route: "/proof", label: { en: "It wrote itself", zh: "它写了自己", "zh-Hant": "它寫了自己", ja: "自分を書いた", fr: "Il s'est écrit", es: "Se escribió solo" } },
      { route: "/about", label: { en: "About", zh: "关于", "zh-Hant": "關於", ja: "DeTars について", fr: "À propos", es: "Acerca de" } }
    ]
  },
  {
    title: { en: "Resources", zh: "资源", "zh-Hant": "資源", ja: "リソース", fr: "Ressources", es: "Recursos" },
    items: [
      { route: "/research", label: { en: "Research", zh: "研究", "zh-Hant": "研究", ja: "リサーチ", fr: "Recherche", es: "Investigación" } },
      { route: "/faq", label: { en: "FAQ", zh: "常见问题", "zh-Hant": "常見問題", ja: "FAQ", fr: "FAQ", es: "Preguntas" } },
      { route: "/updates", label: { en: "Updates", zh: "更新", "zh-Hant": "更新", ja: "アップデート", fr: "Nouveautés", es: "Novedades" } }
    ]
  },
  {
    title: { en: "Legal", zh: "法律", "zh-Hant": "法律", ja: "法的情報", fr: "Mentions légales", es: "Legal" },
    items: [
      { route: "/pricing", label: { en: "Pricing", zh: "价格", "zh-Hant": "價格", ja: "料金", fr: "Tarifs", es: "Precios" } },
      { route: "/terms", label: { en: "Terms", zh: "服务条款", "zh-Hant": "服務條款", ja: "利用規約", fr: "Conditions", es: "Términos" } },
      { route: "/privacy", label: { en: "Privacy", zh: "隐私政策", "zh-Hant": "隱私政策", ja: "プライバシー", fr: "Confidentialité", es: "Privacidad" } },
      { route: "/refund", label: { en: "Refunds", zh: "退款政策", "zh-Hant": "退款政策", ja: "返金ポリシー", fr: "Remboursements", es: "Reembolsos" } },
      { href: `mailto:${SUPPORT_EMAIL}`, label: sameEverywhere(SUPPORT_EMAIL) }
    ]
  }
];

export const footerHref = (locale: Locale, item: FooterItem): string =>
  "href" in item ? item.href : withLocale(locale, item.route);
