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

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}
