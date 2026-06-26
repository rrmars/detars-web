// Generate social share cards (OG images) as 1200x630 PNGs.
// Rasterizes a brand SVG with sharp. Run locally: `node scripts/make-og.mjs`
// (not part of the CI build — the PNGs are committed under public/og/).
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const W = 1200;
const H = 630;

// User-benefit framing: one line in → it runs the rest → comes back done.
const cards = [
  { file: "og.png", eyebrow: "AN AI THAT ACTUALLY DOES THE WORK", a: "Toss it one line.", b: "It does the rest.", sub: "Hand it a task from any chat app — it works for hours, then comes back done." },
  { file: "og-zh.png", cjk: "sc", eyebrow: "会替你把活干完的私人 AI", a: "一句话甩给它,", b: "剩下的它替你跑完。", sub: "从任意聊天软件丢个任务给它,它后台跑几小时,做完回来找你。" },
  { file: "og-zh-hant.png", cjk: "tc", eyebrow: "會替你把活幹完的私人 AI", a: "一句話丟給它,", b: "剩下的它替你跑完。", sub: "從任意聊天軟體丟個任務給它,它後台跑幾小時,做完回來找你。" },
  { file: "og-ja.png", cjk: "jp", headSize: 80, eyebrow: "あなたの代わりに仕事を片づける AI", a: "一言投げるだけ。", b: "あとは任せられる。", sub: "どのチャットアプリからでも。数時間動いて、終わったら知らせに来る。" },
  { file: "og-fr.png", headSize: 76, eyebrow: "L’IA QUI FAIT VRAIMENT LE TRAVAIL", a: "Une phrase suffit.", b: "Elle fait le reste.", sub: "Confiez-lui une tâche depuis n’importe quel chat — elle revient une fois fini." },
  { file: "og-es.png", headSize: 82, eyebrow: "UNA IA QUE SÍ HACE EL TRABAJO", a: "Una frase y listo.", b: "Ella hace el resto.", sub: "Dale una tarea desde cualquier chat. Trabaja horas y vuelve cuando termina." }
];

const latin = "'Helvetica Neue', Arial, sans-serif";
const sc = "'PingFang SC','Hiragino Sans GB','Heiti SC', sans-serif";
const tc = "'PingFang TC','Hiragino Sans CNS', sans-serif";
const jp = "'Hiragino Sans','Hiragino Kaku Gothic ProN', sans-serif";
const fontFor = (cjk) => (cjk === "sc" ? sc : cjk === "tc" ? tc : cjk === "jp" ? jp : latin);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg(c) {
  const ff = fontFor(c.cjk);
  const hs = c.headSize ?? 86;
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

  <g transform="translate(80,70)">
    <rect width="46" height="46" rx="13" fill="#1c2230" stroke="rgba(255,255,255,0.12)"/>
    <rect x="16" y="16" width="18" height="18" rx="5" fill="url(#mark)"/>
    <text x="62" y="33" font-family="${latin}" font-size="30" font-weight="700" fill="#f7f1ec">De<tspan fill="#ff6a3d">Tars</tspan></text>
  </g>

  <text x="80" y="250" font-family="${latin}" font-size="22" letter-spacing="4" font-weight="700" fill="#ffb27a">${esc(c.eyebrow)}</text>

  <text x="76" y="350" font-family="${ff}" font-size="${hs}" font-weight="800" fill="#f7f1ec">${esc(c.a)}</text>
  <text x="76" y="${350 + Math.round(hs * 1.18)}" font-family="${ff}" font-size="${hs}" font-weight="800" fill="url(#head)">${esc(c.b)}</text>

  <text x="80" y="540" font-family="${ff}" font-size="29" font-weight="400" fill="#cdc6bf">${esc(c.sub)}</text>

  <text x="80" y="592" font-family="${latin}" font-size="22" letter-spacing="1" font-weight="600" fill="rgba(247,241,236,0.55)">detars.xyz</text>
</svg>`;
}

mkdirSync("public/og", { recursive: true });
for (const c of cards) {
  await sharp(Buffer.from(svg(c))).png().toFile(`public/og/${c.file}`);
  console.log("wrote public/og/" + c.file);
}
