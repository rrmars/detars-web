// Generate social share cards (OG images) as 1200x630 PNGs.
// Rasterizes a brand SVG with sharp. Run locally: `node scripts/make-og.mjs`
// (not part of the CI build — the PNGs are committed under public/og/).
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const W = 1200;
const H = 630;

// One card per locale. Headline kept short; English fallback tagline.
const cards = [
  { file: "og.png", eyebrow: "YOUR OWN AI THAT GETS REAL WORK DONE", head1: "It ", head2: "wrote itself.", sub: "A private AI team you own — it reasons, runs for hours, and can’t fake completion." },
  { file: "og-zh.png", eyebrow: "会自己干活的私人 AI", head1: "它,", head2: "亲手写出了自己。", sub: "一支你拥有的私人 AI 团队 —— 会自己想、能挂着跑、不能假装做完。", cjk: "sc" },
  { file: "og-zh-hant.png", eyebrow: "會自己幹活的私人 AI", head1: "它,", head2: "親手寫出了自己。", sub: "一支你擁有的私人 AI 團隊 —— 會自己想、能掛著跑、不能假裝做完。", cjk: "tc" },
  { file: "og-ja.png", eyebrow: "本当の仕事をこなす、あなた専用の AI", head1: "それは、", head2: "自分自身を書いた。", sub: "あなたが所有する AI チーム。自分で考え、長時間走り、完了を偽れない。", cjk: "jp", headSize: 88 },
  { file: "og-fr.png", eyebrow: "VOTRE IA QUI ABAT DU VRAI TRAVAIL", head1: "Elle s’est ", head2: "écrite elle-même.", sub: "Une équipe d’IA qui vous appartient — elle raisonne, tourne des heures, ne triche pas.", headSize: 84 },
  { file: "og-es.png", eyebrow: "TU PROPIA IA QUE HACE TRABAJO REAL", head1: "Se escribió ", head2: "a sí misma.", sub: "Un equipo de IA que es tuyo — razona, trabaja horas y no finge haber terminado.", headSize: 92 }
];

const latin = "'Helvetica Neue', Arial, sans-serif";
const sc = "'PingFang SC','Hiragino Sans GB','Heiti SC', sans-serif";
const tc = "'PingFang TC','Hiragino Sans CNS', sans-serif";
const jp = "'Hiragino Sans','Hiragino Kaku Gothic ProN', sans-serif";
const fontFor = (cjk) => (cjk === "sc" ? sc : cjk === "tc" ? tc : cjk === "jp" ? jp : latin);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg(c) {
  const ff = fontFor(c.cjk);
  const hs = c.headSize ?? 104;
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glowA" cx="78%" cy="6%" r="62%">
      <stop offset="0%" stop-color="#ff6a3d" stop-opacity="0.55"/>
      <stop offset="42%" stop-color="#ff6a3d" stop-opacity="0.12"/>
      <stop offset="70%" stop-color="#ff6a3d" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="-6%" cy="104%" r="55%">
      <stop offset="0%" stop-color="#ff6a3d" stop-opacity="0.22"/>
      <stop offset="60%" stop-color="#ff6a3d" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="head" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="6%" stop-color="#ff6a3d"/>
      <stop offset="58%" stop-color="#ffffff"/>
      <stop offset="98%" stop-color="#ffb27a"/>
    </linearGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff6a3d"/>
      <stop offset="100%" stop-color="#ffb27a"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#070504"/>
  <rect width="${W}" height="${H}" fill="url(#glowA)"/>
  <rect width="${W}" height="${H}" fill="url(#glowB)"/>
  <rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="2"/>

  <g transform="translate(80,76)">
    <rect width="46" height="46" rx="13" fill="#1c2230" stroke="rgba(255,255,255,0.12)"/>
    <rect x="16" y="16" width="18" height="18" rx="5" fill="url(#mark)"/>
    <text x="62" y="33" font-family="${latin}" font-size="30" font-weight="700" fill="#f7f1ec">De<tspan fill="#ff6a3d">Tars</tspan></text>
  </g>

  <text x="80" y="290" font-family="${latin}" font-size="22" letter-spacing="4" font-weight="700" fill="#ffb27a">${esc(c.eyebrow)}</text>

  <text x="76" y="392" font-family="${ff}" font-size="${hs}" font-weight="800" fill="#f7f1ec">${esc(c.head1)}<tspan fill="url(#head)">${esc(c.head2)}</tspan></text>

  <text x="80" y="470" font-family="${ff}" font-size="30" font-weight="400" fill="#cdc6bf">${esc(c.sub)}</text>

  <text x="80" y="582" font-family="${latin}" font-size="24" letter-spacing="1" font-weight="600" fill="rgba(247,241,236,0.6)">detars.xyz</text>
</svg>`;
}

mkdirSync("public/og", { recursive: true });
for (const c of cards) {
  await sharp(Buffer.from(svg(c))).png().toFile(`public/og/${c.file}`);
  console.log("wrote public/og/" + c.file);
}
