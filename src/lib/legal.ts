// Pricing and legal pages (/pricing, /terms, /privacy, /refund).
//
// English is the governing text and Simplified Chinese is a full translation.
// The other locales serve the English text with localized page chrome and a
// short localized notice; those copies point their canonical URL at the
// English page and are left out of the sitemap (see astro.config.mjs).
//
// Copy lives in legal.en.ts / legal.zh.ts. Both are functions of `href` so
// cross-links between these pages stay inside the visitor's locale.

import type { Locale } from "@/lib/site";

export const legalRoutes = ["pricing", "terms", "privacy", "refund"] as const;

export type LegalKey = (typeof legalRoutes)[number];

/** Locales with their own translation of the legal pages. */
export const legalLocales = ["en", "zh"] as const satisfies readonly Locale[];

/** Locales that serve the English text under localized chrome. */
export const legalFallbackLocales = ["zh-Hant", "ja", "fr", "es"] as const satisfies readonly Locale[];
export type LegalFallbackLocale = (typeof legalFallbackLocales)[number];

export const LEGAL_UPDATED = { en: "Last updated: October 2, 2026", zh: "最后更新:2026 年 10 月 2 日" } as const;

export const SUPPORT_EMAIL = "support@detars.xyz";
export const PADDLE_BUYER_TERMS_URL = "https://www.paddle.com/legal/checkout-buyer-terms";

export const CREDITS_PER_USD = 100;

/** Credit packs sold through Paddle. Prices are in USD and include sales tax / VAT. */
export const creditPacks = [10, 25, 50, 100].map((usd) => ({ usd, credits: usd * CREDITS_PER_USD }));

export type Href = (route: string) => string;

export const mailto = `<a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>`;

/** Wraps an ALL-CAPS legal paragraph (disclaimers) so Page.astro can set it for readability. */
export const caps = (html: string) => `<span class="caps">${html}</span>`;

/** Shown above the English text on the locales that have no translation. */
export const legalFallbackNotice: Record<LegalFallbackLocale, (zhHref: string) => string> = {
  "zh-Hant": (zhHref) =>
    `本頁目前只提供英文版,以英文版為準。另有<a href="${zhHref}" hreflang="zh-Hans">簡體中文譯本</a>可供參考。`,
  ja: () => "このページは現在、英語版のみです。英語版が正式な文面となります。",
  fr: () => "Cette page n’existe pour l’instant qu’en anglais. La version anglaise fait foi.",
  es: () => "Por ahora esta página solo está disponible en inglés. La versión en inglés es la que prevalece."
};
