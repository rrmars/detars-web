// Shape of the pack copy. One object per locale in ./copy.<locale>.ts.
//
// Every pack page answers the same five questions in the same order, because a
// store of eight experts is only legible if the cards are comparable:
//   1. what is it            → h1 + answer + stats
//   2. what do I hand it     → youSend / youGet
//   3. what is actually in it→ features
//   4. why should I believe  → proof panel + proofNote
//   5. where does it stop    → honest
//
// `honest` is not a disclaimer section bolted on at the end. It is the reason
// the other four are worth reading, so it is required, not optional.
import type { PackKey, PackStatus } from "@/lib/packs/catalog";

export type PackStat = { n: string; l: string };
export type PackFeature = { title: string; body: string };

/** Terminal-style panel; `body` lines may carry .hl / .ok / .dim spans. */
export type PackProof = { head: string; lab: string; body: string[] };

export type PackCopy = {
  name: string;
  /** One line, used on the index card and under the hero. No period. */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  /** May carry <span class='o'>. */
  h1: string;
  answer: string;
  /** Exactly 3. Shown as the hero stat row. */
  stats: PackStat[];
  /** Exactly 3 short chips for the index card. Plain text. */
  chips: string[];
  youSend: string;
  youGet: string;
  /** 4–6 capability cards. */
  features: PackFeature[];
  proof: PackProof;
  proofNote: string;
  /** 3–5 limits, stated in the product's own voice. */
  honest: string[];
};

export type PacksIndexCopy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  answer: string;
  gridH2: string;
  gridIntro: string;
  moatsH2: string;
  moats: string[];
  familyH2: string;
  familyIntro: string;
  family: PackFeature[];
  ctaLabel: string;
};

/** Section labels reused on every pack page. */
export type PackUiCopy = {
  statusLabels: Record<PackStatus, string>;
  backLabel: string;
  sendLabel: string;
  getLabel: string;
  insideH2: string;
  proofH2: string;
  honestH2: string;
  honestIntro: string;
  ctaLabel: string;
  nextLabel: string;
  /** Home-page rail. */
  homeKicker: string;
  homeH2: string;
  homeP: string;
  homeCta: string;
};

export type PacksCopy = {
  index: PacksIndexCopy;
  ui: PackUiCopy;
  packs: Record<PackKey, PackCopy>;
};
