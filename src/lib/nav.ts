import type { Locale } from "@/lib/site";

export type NavItem = { route: string; label: Record<Locale, string> };

export const navItems: NavItem[] = [
  { route: "/how-it-works", label: { en: "How it works", zh: "怎么用" } },
  { route: "/reliable", label: { en: "Why it's reliable", zh: "靠得住" } },
  { route: "/packs", label: { en: "Packs", zh: "应用" } },
  { route: "/research", label: { en: "Research", zh: "研究" } },
  { route: "/download", label: { en: "Download", zh: "下载" } }
];

export const ctaLabel: Record<Locale, string> = { en: "Get started", zh: "免费开始" };

export const footerGroups: { title: Record<Locale, string>; items: NavItem[] }[] = [
  {
    title: { en: "Product", zh: "产品" },
    items: [
      { route: "/how-it-works", label: { en: "How it works", zh: "怎么用" } },
      { route: "/packs", label: { en: "Packs", zh: "应用" } },
      { route: "/download", label: { en: "Download", zh: "下载" } }
    ]
  },
  {
    title: { en: "Why DeTars", zh: "为什么" },
    items: [
      { route: "/reliable", label: { en: "Why it's reliable", zh: "靠得住" } },
      { route: "/proof", label: { en: "It wrote itself", zh: "它写了自己" } },
      { route: "/about", label: { en: "About", zh: "关于" } }
    ]
  },
  {
    title: { en: "Resources", zh: "资源" },
    items: [
      { route: "/research", label: { en: "Research", zh: "研究" } },
      { route: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { route: "/updates", label: { en: "Updates", zh: "更新" } }
    ]
  }
];
