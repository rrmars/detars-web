import { getCollection, type CollectionEntry } from "astro:content";
import domainMap from "@/data/scenario-domains.json";
import { toAbsoluteUrl, withLocale, type Locale } from "@/lib/site";

export type Scenario = CollectionEntry<"scenarios">;
export type ScenarioLocale = "en" | "zh";
export const scenarioDomains: readonly { id: string; en: string; zh: string }[] = domainMap.domains;
export const scenarioContentLocale = (locale: Locale): ScenarioLocale => locale === "zh" ? "zh" : "en";
export const scenarioSlug = (entry: Scenario): string => entry.data.slug;
export const scenarioUrl = (entry: Scenario): string => withLocale(entry.data.locale, `/scenarios/${scenarioSlug(entry)}`);

export async function getScenarios(): Promise<Scenario[]> {
  return getCollection("scenarios", (entry) => import.meta.env.DEV || !entry.data.draft);
}

/** Select real translations; English-only guides stay visible on the Chinese index. */
export async function getScenarioCards(locale: Locale): Promise<Scenario[]> {
  const all = await getScenarios();
  const desired = scenarioContentLocale(locale);
  const chosen = new Map<string, Scenario>();
  for (const entry of all) {
    const previous = chosen.get(entry.data.translationKey);
    if (!previous || entry.data.locale === desired) chosen.set(entry.data.translationKey, entry);
  }
  return [...chosen.values()].sort((a, b) => {
    const featuredA = /manchester.*first|first.*home.*manchester/.test(a.data.slug);
    const featuredB = /manchester.*first|first.*home.*manchester/.test(b.data.slug);
    return Number(featuredB) - Number(featuredA) || a.data.slug.localeCompare(b.data.slug, "en");
  });
}

/** Derive switches from published entries, not a speculative locale list. */
export async function getScenarioLocales(entry: Scenario): Promise<ScenarioLocale[]> {
  const all = await getScenarios();
  return (["en", "zh"] as const).filter((locale) => all.some((other) =>
    other.data.translationKey === entry.data.translationKey && other.data.locale === locale
  ));
}

export function scenarioDate(date: Date | null, locale: Locale): string {
  if (!date) return locale === "zh" ? "日期未知" : "Date unknown";
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
    year: "numeric", month: "short", day: "numeric", timeZone: "UTC"
  }).format(date);
}

export function scenarioDomain(entry: Scenario, locale: Locale): string {
  const domain = scenarioDomains.find((item) => item.id === entry.data.domain);
  return domain?.[scenarioContentLocale(locale)] ?? entry.data.domain;
}

export function scenarioJsonLd(entry: Scenario): Record<string, unknown>[] {
  const d = entry.data;
  const url = toAbsoluteUrl(scenarioUrl(entry));
  const result: Record<string, unknown>[] = [{
    "@context": "https://schema.org", "@type": "Article",
    headline: d.title, description: d.description, inLanguage: d.locale,
    url, mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(d.publishedAt ? { datePublished: d.publishedAt.toISOString() } : {}),
    ...(d.updatedAt ? { dateModified: d.updatedAt.toISOString() } : {}),
    author: { "@type": "Organization", name: "DeTars", url: toAbsoluteUrl("/") },
    citation: d.sources.map((source) => ({ "@type": "CreativeWork", name: source.title, url: source.url }))
  }];
  if (d.faq.length) result.push({
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: d.faq.map(({ q, a }) => ({ "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a } }))
  });
  return result;
}

export const scenarioIndexCopy = (locale: Locale) => locale === "zh" ? {
  title: "场景 · DeTars", description: "从旅行、住房和家庭预算到工作与小生意，看看 DeTars 如何把一个真实问题变成有来源、有下一步的实用答案。",
  kicker: "场景", heading: "一个真实问题，\n一条可走的路。", intro: "想安排一次旅行，算清第一次租房的开销，或理顺小店的现金流？这些是交给 DeTars 的真实任务，保留完整答案、原始假设和重要限制。",
  invitation: "随便看看，也许就有你的起点。", quiet: "不是功能清单。是真实的工作，有调研日期，也有来源。",
  action: "把你的问题交给 DeTars ↗", all: "全部", count: "个真实任务", read: "阅读全文 →",
  languages: "已有语言", researched: "调研", producer: "通用 Cowork 任务", note: "每篇答案对应原任务的具体条件。价格、规则与可用性会变化，请按你的情况重新核实。"
} : {
  title: "Scenarios · DeTars", description: "Real tasks, useful answers: explore DeTars scenarios for travel, home budgets, work, family life and small business, with dates, sources and practical next steps.",
  kicker: "Scenarios", heading: "A real question.\nA useful way forward.", intro: "A trip to plan. A first home to budget for. A small shop’s cash to untangle. These are real tasks people asked DeTars to do, with complete answers, original assumptions and important limits.",
  invitation: "Have a look. You might find a place to start.", quiet: "Not a feature list. Real work, with research dates and sources.",
  action: "Bring your own question to DeTars ↗", all: "All", count: "real tasks", read: "Read the guide →",
  languages: "Available languages", researched: "Researched", producer: "General Cowork task", note: "Each answer belongs to its original task and assumptions. Prices, rules and availability can change; recheck them for your situation."
};
