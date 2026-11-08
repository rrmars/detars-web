import { getCollection, type CollectionEntry } from "astro:content";
import domainMap from "@/data/scenario-domains.json";
import { intlTag, scenarioCopy, scenarioDomainNames } from "@/lib/scenario-i18n";
import { scenarioLocales, toAbsoluteUrl, withLocale, type AnyLocale } from "@/lib/site";

export type Scenario = CollectionEntry<"scenarios">;
export type ScenarioLocale = AnyLocale;
export const scenarioDomains: readonly { id: string; en: string; zh: string }[] = domainMap.domains;
export const scenarioSlug = (entry: Scenario): string => entry.data.slug;
export const scenarioUrl = (entry: Scenario): string => withLocale(entry.data.locale, `/scenarios/${scenarioSlug(entry)}`);

export async function getScenarios(): Promise<Scenario[]> {
  return getCollection("scenarios", (entry) => import.meta.env.DEV || !entry.data.draft);
}

/**
 * Index cards for one locale: the locale's own translation where it exists, otherwise the English guide
 * (clearly marked, linked to the English URL). English is required for every guide, so every card resolves.
 */
export async function getScenarioCards(locale: AnyLocale): Promise<Scenario[]> {
  const all = await getScenarios();
  const chosen = new Map<string, Scenario>();
  for (const entry of all) {
    if (entry.data.locale !== "en" && entry.data.locale !== locale) continue;
    const previous = chosen.get(entry.data.translationKey);
    if (!previous || entry.data.locale === locale) chosen.set(entry.data.translationKey, entry);
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
  return scenarioLocales.filter((locale) => all.some((other) =>
    other.data.translationKey === entry.data.translationKey && other.data.locale === locale
  ));
}

/** Locales whose scenario index is a real, indexable page: English, Chinese (the original pair) and any locale with a translated guide. */
export async function getIndexableScenarioLocales(): Promise<ScenarioLocale[]> {
  const all = await getScenarios();
  return scenarioLocales.filter((locale) => locale === "en" || locale === "zh" || all.some((entry) => entry.data.locale === locale));
}

export function scenarioDate(date: Date | null, locale: AnyLocale): string {
  if (!date) return scenarioCopy(locale).dateUnknown;
  return new Intl.DateTimeFormat(intlTag[locale], {
    year: "numeric", month: "short", day: "numeric", timeZone: "UTC"
  }).format(date);
}

export function scenarioDomainName(id: string, locale: AnyLocale): string {
  const domain = scenarioDomains.find((item) => item.id === id);
  if (locale === "en" || locale === "zh") return domain?.[locale] ?? id;
  return scenarioDomainNames[locale]?.[id] ?? domain?.en ?? id;
}

export const scenarioDomain = (entry: Scenario, locale: AnyLocale): string => scenarioDomainName(entry.data.domain, locale);

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

export const scenarioIndexCopy = scenarioCopy;
