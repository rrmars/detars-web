// Shape of the pack copy. One object per locale in ./copy.<locale>.ts.
//
// Every pack page answers the same four questions in the same order, because a
// store of nine experts is only legible if the cards are comparable:
//   1. what is it            → h1 + answer + stats
//   2. what do I hand it     → youSend / youGet
//   3. what is actually in it→ features
//   4. why should I believe  → proof panel + proofNote
//
// There is deliberately no "where it stops" column. A marketing page is not an
// acceptance report: development status, coverage gaps and setup steps only
// make a reader doubt the thing works. The genuinely load-bearing lines — it
// cannot touch your money, you press the last button, it never publishes for
// you — are stated POSITIVELY inside `features`, where they read as reasons to
// trust us rather than as disclaimers. The two lines legal requires live in the
// site footer, once, instead of on every page.
//
// And `stats` are the reader's payoff, never an internal metric: "an afternoon,
// where it used to be three days", not "76 searches down to 27".
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
  /** 6–7 capability cards. Each one says what the reader gets, not how it works. */
  features: PackFeature[];
  proof: PackProof;
  proofNote: string;
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
