// Derive the site's brand assets from the official DeTars artwork.
// Run locally: `node scripts/make-brand-assets.mjs`
// (not part of the CI build — the PNGs are committed under public/).
//
// Sources are read-only and live in the product repo, not here:
//   apps/desktop/assets/detars-icon-1024.png  — the shipped desktop app icon
//   docs/pitch-assets/detars-logo.png         — the same mark at 256px
// Override the product repo location with DETARS_SRC if it is not a sibling dir.
//
// Two derived marks, no new artwork:
//   public/brand/detars-mark.png  — head crop of the official icon; stays legible
//                                   at nav (32px) and favicon (16px) sizes.
//   public/apple-touch-icon.png   — the full official mark, tightened to the
//                                   figure's bounding box (home-screen sizes fit it).
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const SRC = process.env.DETARS_SRC || "../momoclaw";
const ICON = `${SRC}/apps/desktop/assets/detars-icon-1024.png`;

// Flat backdrop of the official icon; reused as the tile ground so the crops
// stay seamless with the source artwork.
const GROUND = { r: 250, g: 249, b: 249, alpha: 1 };

// Bounding box of the figure inside the 1024px icon, measured once.
const FIGURE = { left: 255, top: 119, width: 604, height: 818 };
// The head block (face + orange flag) — the part that survives downscaling.
const HEAD = { left: 255, top: 119, width: 604, height: 470 };

/** Center a crop of the icon on a square tile of the icon's own ground color. */
async function tile(crop, fill, size) {
  const side = Math.round(Math.max(crop.width, crop.height) / fill);
  const cut = await sharp(ICON).extract(crop).png().toBuffer();
  // sharp resizes before it composites, so the tile is built and then rescaled.
  const full = await sharp({ create: { width: side, height: side, channels: 4, background: GROUND } })
    .composite([
      { input: cut, left: Math.round((side - crop.width) / 2), top: Math.round((side - crop.height) / 2) }
    ])
    .png()
    .toBuffer();
  return sharp(full).resize(size, size).png().toBuffer();
}

mkdirSync("public/brand", { recursive: true });

const mark = await tile(HEAD, 0.9, 256);
await sharp(mark).toFile("public/brand/detars-mark.png");
await sharp(mark).resize(32, 32).toFile("public/favicon-32.png");
await sharp(mark).resize(16, 16).toFile("public/favicon-16.png");
await sharp(await tile(FIGURE, 0.86, 180)).toFile("public/apple-touch-icon.png");

for (const f of ["brand/detars-mark.png", "favicon-32.png", "favicon-16.png", "apple-touch-icon.png"]) {
  console.log("wrote public/" + f);
}
