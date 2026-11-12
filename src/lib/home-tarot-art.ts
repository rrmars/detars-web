/**
 * home-tarot-art.ts — static SVG strings for the homepage tarot spread.
 *
 * Ported from the desktop app so the site shows the product's real cards:
 * - faces: apps/desktop/src/renderer/shared/destiny-visuals/tarot-card-art.tsx
 *   (procedural gold line art on a 100×120 face; same paths, pip layout, glyphs)
 * - back:  .mtx-card-back in features/packs/pages/metaphysics-workbench/
 *   metaphysics-tarot.css (indigo gradient, gold sunburst, centre disc, inset
 *   frame), redrawn as SVG on a 62×100 card.
 *
 * No React, no external assets: plain markup strings, safe for `set:html`.
 */

const GOLD = "#f6d98a";
const DIM = "rgba(246,217,138,.45)";
const FILL = "rgba(246,217,138,.16)";

export type TarotFaceKey = "eight-of-swords" | "knight-of-wands" | "the-star";

const r = (n: number): string => String(Math.round(n * 100) / 100);

function svg(viewBox: string, body: string): string {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" stroke="${GOLD}" ` +
    `stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">` +
    body +
    `</svg>`
  );
}

/* ---- suit glyphs (SuitGlyph in tarot-card-art.tsx) ---- */

function swordGlyph(x: number, y: number, scale: number): string {
  return (
    `<g transform="translate(${x} ${y}) scale(${scale})">` +
    `<path d="M0 -11v17" stroke-width="1.6"/>` +
    `<path d="M-6 4h12M0 6v5"/>` +
    `</g>`
  );
}

function wandGlyph(x: number, y: number, scale: number): string {
  return (
    `<g transform="translate(${x} ${y}) scale(${scale})">` +
    `<path d="M-2 10L2 -10" stroke-width="1.6"/>` +
    `<path d="M1 -6c3-2 5 0 3 2M-1 2c-3-2-5 0-3 2" stroke="${DIM}"/>` +
    `</g>`
  );
}

/* ---- faces ---- */

/** Minor arcana, eight pips: PIP_LAYOUT[8] at scale 0.72 (count > 6). */
const EIGHT_PIPS: ReadonlyArray<readonly [number, number]> = [
  [32, 22], [68, 22], [32, 46], [68, 46], [32, 74], [68, 74], [32, 98], [68, 98],
];
const eightOfSwords = EIGHT_PIPS.map(([x, y]) => swordGlyph(x, y, 0.72)).join("");

/** Court card: the suit large, crowned by the knight's helm (CourtMark "knight"). */
const knightOfWands =
  wandGlyph(50, 70, 1.9) +
  `<path d="M36 34c0-14 8-20 18-20 8 0 12 6 10 12l-8 2 2 6z" fill="${FILL}"/>`;

/** Major 17, The Star: great star, seven small stars, water. */
const SMALL_STARS: ReadonlyArray<readonly [number, number]> = [
  [18, 20], [82, 22], [14, 50], [86, 52], [30, 72], [70, 74], [50, 66],
];
const theStar =
  `<path d="M50 12l5 17 17-6-12 13 14 10-18 0-6 17-6-17-18 0 14-10-12-13 17 6z" fill="${FILL}"/>` +
  SMALL_STARS.map(([x, y]) => `<path d="M${x} ${y - 4}v8M${x - 4} ${y}h8" stroke="${DIM}"/>`).join("") +
  `<path d="M8 102c12-5 22 5 34 0s22 5 34 0 14 3 18 1"/>`;

const FACES: Readonly<Record<TarotFaceKey, string>> = {
  "eight-of-swords": svg("0 0 100 120", eightOfSwords),
  "knight-of-wands": svg("0 0 100 120", knightOfWands),
  "the-star": svg("0 0 100 120", theStar),
};

/** Front art for one card (art only; the page renders names). */
export function tarotFaceSvg(key: TarotFaceKey): string {
  return FACES[key];
}

/* ---- back ---- */

/**
 * The CSS back is `repeating-conic-gradient(gold .1 0 6deg, transparent 6deg 15deg)`
 * over `linear-gradient(160deg, #2c2148, #17122a)`, a 12px gold disc, and an
 * inset frame 7px in. Same design scaled to 62×100: 24 wedges of 6°, every 15°.
 */
function sunburst(cx: number, cy: number, radius: number): string {
  let d = "";
  for (let i = 0; i < 24; i += 1) {
    // conic-gradient 0deg points up, clockwise.
    const a0 = ((i * 15 - 90) * Math.PI) / 180;
    const a1 = ((i * 15 + 6 - 90) * Math.PI) / 180;
    d +=
      `M${cx} ${cy}L${r(cx + radius * Math.cos(a0))} ${r(cy + radius * Math.sin(a0))}` +
      `L${r(cx + radius * Math.cos(a1))} ${r(cy + radius * Math.sin(a1))}Z`;
  }
  return `<path d="${d}" fill="rgba(246,217,138,.1)" stroke="none"/>`;
}

export const tarotBackSvg: string = svg(
  "0 0 62 100",
  `<defs><linearGradient id="home-tarot-back-bg" x1="0.33" y1="0" x2="0.67" y2="1">` +
    `<stop offset="0" stop-color="#2c2148"/><stop offset="1" stop-color="#17122a"/>` +
    `</linearGradient></defs>` +
    `<rect width="62" height="100" fill="url(#home-tarot-back-bg)" stroke="none"/>` +
    sunburst(31, 50, 70) +
    `<circle cx="31" cy="50" r="6.5" fill="rgba(246,217,138,.22)" stroke="none"/>` +
    `<rect x="4" y="4" width="54" height="92" rx="4" stroke="rgba(246,217,138,.26)" stroke-width="0.6"/>`,
);
