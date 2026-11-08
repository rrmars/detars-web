import { packsEn } from "@/lib/packs/copy.en";
import { packsEs } from "@/lib/packs/copy.es";
import { packsFr } from "@/lib/packs/copy.fr";
import { packsJa } from "@/lib/packs/copy.ja";
import { packsZh } from "@/lib/packs/copy.zh";
import { packsZhHant } from "@/lib/packs/copy.zh-hant";
import { packsKo } from "@/lib/packs/copy.ko";
import { packsPtBr } from "@/lib/packs/copy.pt-br";
import { packsDe } from "@/lib/packs/copy.de";
import type { PacksCopy } from "@/lib/packs/types";
import type { Locale } from "@/lib/site";

const data: Record<Locale, PacksCopy> = {
  en: packsEn,
  zh: packsZh,
  "zh-Hant": packsZhHant,
  ja: packsJa,
  fr: packsFr,
  es: packsEs,
  ko: packsKo,
  "pt-BR": packsPtBr,
  de: packsDe
};

export function getPacksCopy(locale: Locale): PacksCopy {
  return data[locale];
}
