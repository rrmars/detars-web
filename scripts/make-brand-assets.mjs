// Derive the site's brand assets from the official DeTars artwork.
// Run locally: `node scripts/make-brand-assets.mjs`
// (not part of the CI build — the PNGs are committed under public/).
//
// Sources are read-only and live in the product repo, not here:
//   apps/desktop/assets/detars-icon-1024.png  — the shipped desktop app icon
// Override the product repo location with DETARS_SRC if it is not a sibling dir.
//
// One mark, at four sizes. Earlier revisions cropped the icon down to the head
// so the face would survive a 16px favicon; on the site that read as a picture
// with its bottom cut off, and it no longer matched the icon in the user's dock.
// Fidelity to the app wins: every mark here is the WHOLE figure — head, body,
// legs, orange flag — on the icon's own ground, so the nav mark, the browser
// tab and the installed app are visibly the same object.
//
// The only liberty taken is zoom. The 1024px source leaves a wide margin
// because macOS expects it inside its icon grid; a 32px nav tile cannot afford
// it, so the marks are a tighter square crop of the same artwork.
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const SRC = process.env.DETARS_SRC || "../momoclaw";
const ICON = `${SRC}/apps/desktop/assets/detars-icon-1024.png`;

// The icon is 1024x1024 with the figure's bounding box measured against the
// flat ground: the body is centred horizontally at 512 and the orange flag
// pokes out to the right of it. Zooming means taking a smaller square out of
// the same artwork — never re-centring the bounding box, which would shift the
// body off-centre and break the composition the icon was drawn with.
const CANVAS = 1024;
const BODY_CENTER_X = CANVAS / 2;
const FIGURE = { top: 118, height: 820 };
const FIGURE_CENTER_Y = FIGURE.top + FIGURE.height / 2;

/** Square crop of the icon in which the figure occupies `fill` of the height. */
async function tile(fill, size) {
  const side = Math.min(CANVAS, Math.round(FIGURE.height / fill));
  const clamp = (v) => Math.max(0, Math.min(CANVAS - side, Math.round(v - side / 2)));
  return sharp(ICON)
    .extract({ left: clamp(BODY_CENTER_X), top: clamp(FIGURE_CENTER_Y), width: side, height: side })
    .resize(size, size)
    .png()
    .toBuffer();
}

mkdirSync("public/brand", { recursive: true });

// Nav + favicon: tight, because 32px and 16px have no pixels to spare.
const mark = await tile(0.88, 256);
await sharp(mark).toFile("public/brand/detars-mark.png");
await sharp(mark).resize(32, 32).toFile("public/favicon-32.png");
await sharp(mark).resize(16, 16).toFile("public/favicon-16.png");
// Home-screen icon: the untouched artwork, since iOS masks and rounds it itself.
await sharp(await tile(0.8, 180)).toFile("public/apple-touch-icon.png");

for (const f of ["brand/detars-mark.png", "favicon-32.png", "favicon-16.png", "apple-touch-icon.png"]) {
  console.log("wrote public/" + f);
}
