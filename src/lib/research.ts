import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "@/lib/site";

export type Report = CollectionEntry<"research">;

export const reportSlug = (entry: Report): string => entry.id.split("/").pop() as string;

export async function getReports(locale: Locale): Promise<Report[]> {
  const all = await getCollection(
    "research",
    (entry) => entry.data.locale === locale && (import.meta.env.DEV || !entry.data.draft)
  );
  return all.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

/** Index-only fallback: do not generate nonexistent translated article routes. */
export async function getReportsForIndex(locale: Locale): Promise<Report[]> {
  const localized = await getReports(locale);
  if (locale === "en") return localized;
  const translatedSlugs = new Set(localized.map(reportSlug));
  const english = await getReports("en");
  return [...localized, ...english.filter(entry => !translatedSlugs.has(reportSlug(entry)))]
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export async function getReportLocales(slug: string): Promise<Locale[]> {
  const reports = await getCollection("research", entry =>
    reportSlug(entry) === slug && (import.meta.env.DEV || !entry.data.draft));
  return [...new Set(reports.map(entry => entry.data.locale))];
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}
