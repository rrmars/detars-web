// The pack catalog: everything about a pack that does NOT change with language.
//
// A pack is a vertical app running on the shared DeTars engine and on the
// memory you own. This file is the single source of the set, the order, the
// URL, and the honest status badge; the words live in ./copy.<locale>.ts.
//
// STATUS IS A PROMISE, NOT A MOOD. Only move a pack up a rung when the product
// repo backs it up:
//   live      — shipped in the app, worked on continuously, real test + eval
//               evidence behind the capability claims on its page.
//   polishing — shipped and usable, but a load-bearing path is still being
//               converged and the page says which one.
//   new       — landed recently; the mechanism is real, the mileage is not.

export type PackStatus = "live" | "polishing" | "new";

export type PackKey =
  | "equity"
  | "metaphysics"
  | "content-research"
  | "programming"
  | "talking-head"
  | "aivideo"
  | "summon"
  | "pet-care";

export type PackMeta = {
  key: PackKey;
  slug: string;
  /** Card glyph. Deliberately one character so the cards stay a family. */
  glyph: string;
  /** Hue in degrees, used only to tint the glyph tile — the page stays brand-orange. */
  hue: number;
  status: PackStatus;
};

// Order is the order they appear everywhere: index grid, home rail, prev/next.
export const packs: PackMeta[] = [
  { key: "equity", slug: "investing", glyph: "◈", hue: 150, status: "live" },
  { key: "metaphysics", slug: "destiny", glyph: "✷", hue: 275, status: "live" },
  { key: "content-research", slug: "research", glyph: "◎", hue: 205, status: "live" },
  { key: "programming", slug: "coding", glyph: "⌘", hue: 22, status: "live" },
  { key: "talking-head", slug: "talking-head", glyph: "▤", hue: 340, status: "polishing" },
  { key: "aivideo", slug: "ai-video", glyph: "▶", hue: 45, status: "live" },
  { key: "summon", slug: "summon", glyph: "☾", hue: 250, status: "new" },
  { key: "pet-care", slug: "pet-care", glyph: "❥", hue: 95, status: "live" }
];

export const packBySlug = new Map(packs.map((p) => [p.slug, p]));
export const packByKey = new Map(packs.map((p) => [p.key, p]));

export const packsRoute = "/packs";

export function packRoute(slug: string): string {
  return `${packsRoute}/${slug}`;
}

/** The pack after `slug` in catalog order, wrapping around — powers the page-foot rail. */
export function nextPack(slug: string): PackMeta {
  const i = packs.findIndex((p) => p.slug === slug);
  return packs[(i + 1) % packs.length];
}
