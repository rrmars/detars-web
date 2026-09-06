import { packsEn } from "@/lib/packs/copy.en";
import { packsEs } from "@/lib/packs/copy.es";
import { packsFr } from "@/lib/packs/copy.fr";
import { packsJa } from "@/lib/packs/copy.ja";
import { packsZh } from "@/lib/packs/copy.zh";
import { packsZhHant } from "@/lib/packs/copy.zh-hant";
import type { PacksCopy } from "@/lib/packs/types";
import type { Locale } from "@/lib/site";

const data: Record<Locale, PacksCopy> = {
  en: packsEn,
  zh: packsZh,
  "zh-Hant": packsZhHant,
  ja: packsJa,
  fr: packsFr,
  es: packsEs
};

export function getPacksCopy(locale: Locale): PacksCopy {
  return data[locale];
}
