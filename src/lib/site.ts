export const locales = ["en", "zh", "zh-Hant", "ja", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// URL path segment per locale (English lives at the root).
export const localeSegment: Record<Locale, string> = {
  en: "",
  zh: "zh",
  "zh-Hant": "zh-hant",
  ja: "ja",
  fr: "fr",
  es: "es"
};

// Full names shown in the language switcher.
export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  "zh-Hant": "繁體中文",
  ja: "日本語",
  fr: "Français",
  es: "Español"
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
  "zh-Hant": "zh-Hant",
  ja: "ja",
  fr: "fr",
  es: "es"
};

export const hreflangMap: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
  "zh-Hant": "zh-Hant",
  ja: "ja",
  fr: "fr",
  es: "es"
};

export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
  "zh-Hant": "zh_TW",
  ja: "ja_JP",
  fr: "fr_FR",
  es: "es_ES"
};

// Non-English locales, used for [locale] dynamic getStaticPaths.
export const nonDefaultLocales = locales.filter((l) => l !== "en");

export const siteName = "DeTars";

export function withLocale(locale: Locale, route: string): string {
  const seg = localeSegment[locale];
  const clean = route === "/" ? "" : route;
  if (!seg) {
    return clean || "/";
  }
  return `/${seg}${clean}`;
}

export function getSiteUrl(): URL {
  return new URL(import.meta.env.SITE_URL || "https://detars.xyz");
}

export function toAbsoluteUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString();
}
