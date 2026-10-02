import { legalEn } from "@/lib/legal.en";
import { legalZh } from "@/lib/legal.zh";
import { legalFallbackNotice, legalLocales, legalRoutes, type LegalFallbackLocale, type LegalKey } from "@/lib/legal";
import { withLocale, type Locale } from "@/lib/site";
import { pagesEn } from "@/lib/pages.en";
import { pagesEs } from "@/lib/pages.es";
import { pagesFr } from "@/lib/pages.fr";
import { pagesJa } from "@/lib/pages.ja";
import { pagesZh } from "@/lib/pages.zh";
import { pagesZhHant } from "@/lib/pages.zh-hant";

export type Block =
  | { type: "p"; html: string }
  | { type: "list"; items: string[] }
  | { type: "cards"; items: { title: string; body: string; tag?: string }[] }
  | { type: "tiles"; items: { title: string; sub: string; note?: string; href?: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string };

export type Section = { h2: string; id?: string; intro?: string; blocks: Block[] };

export type PageContent = {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  answer: string;
  sections: Section[];
  cta?: { label: string; route: string };
  /** Long-form document (legal pages): quieter section headings. */
  doc?: boolean;
  /** e.g. "Last updated: …", shown under the title. */
  updated?: string;
  /** Short note shown under the title (translation status). HTML. */
  notice?: string;
  /** Language of the copy when it differs from the page locale. */
  lang?: string;
  /** Canonical locale when this copy duplicates another locale's page. */
  canonicalLocale?: Locale;
  /** Restricts hreflang alternates to the locales that have their own copy. */
  alternateLocales?: readonly Locale[];
};

export const pageRoutes = [
  "how-it-works",
  "reliable",
  "proof",
  "download",
  "faq",
  "about",
  "updates",
  "research"
] as const;

export type PageKey = (typeof pageRoutes)[number];

export { legalRoutes, type LegalKey };

/** Every route rendered by [page].astro and [locale]/[page].astro. */
export const allPageRoutes = [...pageRoutes, ...legalRoutes] as const;
export type AnyPageKey = PageKey | LegalKey;

const data: Record<Locale, Record<PageKey, PageContent>> = {
  en: pagesEn,
  zh: pagesZh,
  "zh-Hant": pagesZhHant,
  ja: pagesJa,
  fr: pagesFr,
  es: pagesEs
};

const isLegalKey = (key: AnyPageKey): key is LegalKey => (legalRoutes as readonly string[]).includes(key);

function getLegalPage(locale: Locale, key: LegalKey): PageContent {
  const href = (route: string) => withLocale(locale, route);
  const seo = { alternateLocales: legalLocales };
  if (locale === "en") return { ...legalEn(href)[key], ...seo };
  if (locale === "zh") return { ...legalZh(href)[key], ...seo };
  // No translation: English text under this locale's chrome, canonical to English.
  const notice = legalFallbackNotice[locale as LegalFallbackLocale](withLocale("zh", `/${key}`));
  return { ...legalEn(href)[key], ...seo, notice, lang: "en", canonicalLocale: "en" };
}

export function getPage(locale: Locale, key: AnyPageKey): PageContent {
  if (isLegalKey(key)) return getLegalPage(locale, key);
  return data[locale][key];
}

export function faqJsonLd(content: PageContent) {
  const faq = content.sections.flatMap((s) => s.blocks).find((b) => b.type === "faq");
  if (!faq || faq.type !== "faq") return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a.replace(/<[^>]+>/g, "") }
    }))
  };
}
