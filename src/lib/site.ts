export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "中文"
};

export const localeToggleLabel: Record<Locale, string> = {
  en: "EN",
  zh: "中"
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans"
};

export const hreflangMap: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans"
};

export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN"
};

export const siteName = "DeTars";

export function withLocale(locale: Locale, route: string): string {
  const clean = route === "/" ? "" : route;
  if (locale === "en") {
    return clean || "/";
  }
  return `/zh${clean}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "zh" : "en";
}

export function getSiteUrl(): URL {
  return new URL(import.meta.env.SITE_URL || "https://detars.xyz");
}

export function toAbsoluteUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString();
}
