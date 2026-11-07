export const locales = ["en", "zh", "zh-Hant", "ja", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

// Locales that only have the Scenarios section (localized scenario pages, index and a minimal
// header/footer). Every other site page stays English-only, so these never appear in the language
// switcher or hreflang of non-scenario pages. Keep in sync with scripts/scenarios/content.mjs.
export const scenarioOnlyLocales = ["id", "pt-BR", "vi", "th", "ko"] as const;
export type ScenarioOnlyLocale = (typeof scenarioOnlyLocales)[number];

/** Every locale a scenario guide can be published in (full-chrome locales first). */
export const scenarioLocales = [...locales, ...scenarioOnlyLocales] as const;
export type AnyLocale = Locale | ScenarioOnlyLocale;

export const isScenarioOnly = (locale: AnyLocale): locale is ScenarioOnlyLocale =>
  (scenarioOnlyLocales as readonly string[]).includes(locale);

export const defaultLocale: Locale = "en";

// URL path segment per locale (English lives at the root).
export const localeSegment: Record<AnyLocale, string> = {
  en: "",
  zh: "zh",
  "zh-Hant": "zh-hant",
  ja: "ja",
  fr: "fr",
  es: "es",
  id: "id",
  "pt-BR": "pt-br",
  vi: "vi",
  th: "th",
  ko: "ko"
};

// Full names shown in the language switcher.
export const localeLabels: Record<AnyLocale, string> = {
  en: "English",
  zh: "简体中文",
  "zh-Hant": "繁體中文",
  ja: "日本語",
  fr: "Français",
  es: "Español",
  id: "Bahasa Indonesia",
  "pt-BR": "Português (Brasil)",
  vi: "Tiếng Việt",
  th: "ไทย",
  ko: "한국어"
};

export const localeHtmlLang: Record<AnyLocale, string> = {
  en: "en",
  zh: "zh-Hans",
  "zh-Hant": "zh-Hant",
  ja: "ja",
  fr: "fr",
  es: "es",
  id: "id",
  "pt-BR": "pt-BR",
  vi: "vi",
  th: "th",
  ko: "ko"
};

export const hreflangMap: Record<AnyLocale, string> = {
  en: "en",
  zh: "zh-Hans",
  "zh-Hant": "zh-Hant",
  ja: "ja",
  fr: "fr",
  es: "es",
  id: "id",
  "pt-BR": "pt-BR",
  vi: "vi",
  th: "th",
  ko: "ko"
};

export const ogLocaleMap: Record<AnyLocale, string> = {
  en: "en_US",
  zh: "zh_CN",
  "zh-Hant": "zh_TW",
  ja: "ja_JP",
  fr: "fr_FR",
  es: "es_ES",
  id: "id_ID",
  "pt-BR": "pt_BR",
  vi: "vi_VN",
  th: "th_TH",
  ko: "ko_KR"
};

// Non-English full-chrome locales, used for [locale] dynamic getStaticPaths of ordinary pages.
export const nonDefaultLocales = locales.filter((l) => l !== "en");
// Non-English locales that have scenario pages (full-chrome plus scenario-only).
export const scenarioNonDefaultLocales = scenarioLocales.filter((l) => l !== "en");

export const siteName = "DeTars";

export function withLocale(locale: AnyLocale, route: string): string {
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
