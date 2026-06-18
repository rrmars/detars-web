import type { Locale } from "@/lib/site";
import { pagesEn } from "@/lib/pages.en";
import { pagesZh } from "@/lib/pages.zh";

export type Block =
  | { type: "p"; html: string }
  | { type: "list"; items: string[] }
  | { type: "cards"; items: { title: string; body: string; tag?: string }[] }
  | { type: "tiles"; items: { title: string; sub: string; note?: string; href?: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] };

export type Section = { h2: string; intro?: string; blocks: Block[] };

export type PageContent = {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  answer: string;
  sections: Section[];
  cta?: { label: string; route: string };
};

export const pageRoutes = [
  "how-it-works",
  "reliable",
  "packs",
  "proof",
  "download",
  "faq",
  "about",
  "updates",
  "research"
] as const;

export type PageKey = (typeof pageRoutes)[number];

const data: Record<Locale, Record<PageKey, PageContent>> = { en: pagesEn, zh: pagesZh };

export function getPage(locale: Locale, key: PageKey): PageContent {
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
