import { SUPPORT_EMAIL } from "@/lib/legal";
import { locales, withLocale, type AnyLocale, type Locale } from "@/lib/site";

export const mobileMenuLabel: Record<AnyLocale, string> = {
  en: "Menu", zh: "菜单", "zh-Hant": "選單", ja: "メニュー", fr: "Menu", es: "Menú",
  id: "Menu", "pt-BR": "Menu", vi: "Menu", th: "เมนู", ko: "메뉴"
, "de": "Menü" };

export type NavItem = { route: string; label: Record<Locale, string> };

/** Footer links: a site route (localized) or an absolute href such as mailto:. */
export type FooterItem = NavItem | { href: string; label: Record<Locale, string> };

const sameEverywhere = (label: string): Record<Locale, string> =>
  Object.fromEntries(locales.map(locale => [locale, label])) as Record<Locale, string>;

export const navItems: NavItem[] = [
  { route: "/how-it-works", label: { en: "How it works", zh: "怎么用", "zh-Hant": "怎麼用", ja: "使い方", fr: "Fonctionnement", es: "Cómo funciona" , "ko": "사용 방법", "pt-BR": "Como funciona", "de": "So funktioniert’s" } },
  { route: "/reliable", label: { en: "Why it's reliable", zh: "靠得住", "zh-Hant": "靠得住", ja: "信頼性", fr: "Fiabilité", es: "Fiabilidad" , "ko": "믿을 수 있는 이유", "pt-BR": "Por que é confiável", "de": "Warum es zuverlässig ist" } },
  { route: "/packs", label: { en: "Packs", zh: "应用", "zh-Hant": "應用", ja: "Pack", fr: "Packs", es: "Packs" , "ko": "팩", "pt-BR": "Packs", "de": "Packs" } },
  { route: "/scenarios", label: { en: "Scenarios", zh: "场景", "zh-Hant": "場景", ja: "活用シーン", fr: "Cas d’usage", es: "Escenarios" , "ko": "활용 사례", "pt-BR": "Cenários", "de": "Anwendungsfälle" } },
  { route: "/research", label: { en: "Research", zh: "研究", "zh-Hant": "研究", ja: "リサーチ", fr: "Recherche", es: "Investigación" , "ko": "리서치", "pt-BR": "Pesquisa", "de": "Recherche" } },
  { route: "/download", label: { en: "Download", zh: "下载", "zh-Hant": "下載", ja: "ダウンロード", fr: "Télécharger", es: "Descargar" , "ko": "다운로드", "pt-BR": "Download", "de": "Download" } }
];

export const ctaLabel: Record<Locale, string> = {
  en: "Get started",
  zh: "免费开始",
  "zh-Hant": "免費開始",
  ja: "無料で始める",
  fr: "Commencer",
  es: "Empezar"
, "ko": "시작하기", "pt-BR": "Começar", "de": "Loslegen" };

export const footerGroups: { title: Record<Locale, string>; items: FooterItem[] }[] = [
  {
    title: { en: "Product", zh: "产品", "zh-Hant": "產品", ja: "プロダクト", fr: "Produit", es: "Producto" , "ko": "제품", "pt-BR": "Produto", "de": "Produkt" },
    items: [
      { route: "/how-it-works", label: { en: "How it works", zh: "怎么用", "zh-Hant": "怎麼用", ja: "使い方", fr: "Fonctionnement", es: "Cómo funciona" , "ko": "사용 방법", "pt-BR": "Como funciona", "de": "So funktioniert’s" } },
      { route: "/packs", label: { en: "Packs", zh: "应用", "zh-Hant": "應用", ja: "Pack", fr: "Packs", es: "Packs" , "ko": "팩", "pt-BR": "Packs", "de": "Packs" } },
      { route: "/download", label: { en: "Download", zh: "下载", "zh-Hant": "下載", ja: "ダウンロード", fr: "Télécharger", es: "Descargar" , "ko": "다운로드", "pt-BR": "Download", "de": "Download" } }
    ]
  },
  {
    title: { en: "Why DeTars", zh: "为什么", "zh-Hant": "為什麼", ja: "DeTars とは", fr: "Pourquoi DeTars", es: "Por qué DeTars" , "ko": "왜 DeTars인가", "pt-BR": "Por que DeTars", "de": "Warum DeTars" },
    items: [
      { route: "/reliable", label: { en: "Why it's reliable", zh: "靠得住", "zh-Hant": "靠得住", ja: "信頼性", fr: "Fiabilité", es: "Fiabilidad" , "ko": "믿을 수 있는 이유", "pt-BR": "Por que é confiável", "de": "Warum es zuverlässig ist" } },
      { route: "/proof", label: { en: "It wrote itself", zh: "它写了自己", "zh-Hant": "它寫了自己", ja: "自分を書いた", fr: "Il s'est écrit", es: "Se escribió solo" , "ko": "스스로 작성한 제품", "pt-BR": "Ele escreveu a si mesmo", "de": "Es hat sich selbst geschrieben" } },
      { route: "/about", label: { en: "About", zh: "关于", "zh-Hant": "關於", ja: "DeTars について", fr: "À propos", es: "Acerca de" , "ko": "소개", "pt-BR": "Sobre", "de": "Über uns" } }
    ]
  },
  {
    title: { en: "Resources", zh: "资源", "zh-Hant": "資源", ja: "リソース", fr: "Ressources", es: "Recursos" , "ko": "자료", "pt-BR": "Recursos", "de": "Ressourcen" },
    items: [
      navItems.find((item) => item.route === "/scenarios")!,
      { route: "/research", label: { en: "Research", zh: "研究", "zh-Hant": "研究", ja: "リサーチ", fr: "Recherche", es: "Investigación" , "ko": "리서치", "pt-BR": "Pesquisa", "de": "Recherche" } },
      { route: "/faq", label: { en: "FAQ", zh: "常见问题", "zh-Hant": "常見問題", ja: "FAQ", fr: "FAQ", es: "Preguntas" , "ko": "자주 묻는 질문", "pt-BR": "Perguntas frequentes", "de": "Häufige Fragen" } },
      { route: "/updates", label: { en: "Updates", zh: "更新", "zh-Hant": "更新", ja: "アップデート", fr: "Nouveautés", es: "Novedades" , "ko": "업데이트", "pt-BR": "Atualizações", "de": "Updates" } }
    ]
  },
  {
    title: { en: "Legal", zh: "法律", "zh-Hant": "法律", ja: "法的情報", fr: "Mentions légales", es: "Legal" , "ko": "법적 고지", "pt-BR": "Informações legais", "de": "Rechtliches" },
    items: [
      { route: "/pricing", label: { en: "Pricing", zh: "价格", "zh-Hant": "價格", ja: "料金", fr: "Tarifs", es: "Precios" , "ko": "요금", "pt-BR": "Preços", "de": "Preise" } },
      { route: "/terms", label: { en: "Terms", zh: "服务条款", "zh-Hant": "服務條款", ja: "利用規約", fr: "Conditions", es: "Términos" , "ko": "이용약관", "pt-BR": "Termos", "de": "Nutzungsbedingungen" } },
      { route: "/privacy", label: { en: "Privacy", zh: "隐私政策", "zh-Hant": "隱私政策", ja: "プライバシー", fr: "Confidentialité", es: "Privacidad" , "ko": "개인정보 처리방침", "pt-BR": "Privacidade", "de": "Datenschutz" } },
      { route: "/refund", label: { en: "Refunds", zh: "退款政策", "zh-Hant": "退款政策", ja: "返金ポリシー", fr: "Remboursements", es: "Reembolsos" , "ko": "환불", "pt-BR": "Reembolsos", "de": "Erstattungen" } },
      { href: `mailto:${SUPPORT_EMAIL}`, label: sameEverywhere(SUPPORT_EMAIL) }
    ]
  }
];

export const footerHref = (locale: Locale, item: FooterItem): string =>
  "href" in item ? item.href : withLocale(locale, item.route);
