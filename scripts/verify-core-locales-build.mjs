// Build first. Check real output rather than assuming dictionary registration created pages.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const dist = path.join(root, 'dist');
const read = route => fs.readFileSync(path.join(dist, route, 'index.html'), 'utf8');
const exists = href => {
  const p = decodeURI(href.split(/[?#]/)[0]);
  return fs.existsSync(path.join(dist, p, 'index.html')) || fs.existsSync(path.join(dist, p));
};
const links = html => [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m => m[1]);
const switchLinks = html => links(html.match(/<div class="lang-pop"[\s\S]*?<\/div>/)?.[0] || '');
const canonical = html => html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]?.replace(/\/$/, '');
const sitemap = fs.readdirSync(dist).filter(f => /^sitemap.*\.xml$/.test(f)).map(f => fs.readFileSync(path.join(dist, f), 'utf8')).join('\n');
const packSlugs = ['summon', 'destiny', 'ai-video', 'investing', 'research', 'coding', 'data-studio', 'talking-head', 'pet-care'];
const pages = ['', 'how-it-works', 'reliable', 'proof', 'download', 'faq', 'about', 'updates', 'research', 'packs', 'privacy', ...packSlugs.map(s => `packs/${s}`)];
const englishResearch = read('research');
const englishReportLinks = links(englishResearch).filter(href => /^\/research\/[^/#]+\/?$/.test(href));
assert.ok(englishReportLinks.length > 0, 'real English research articles exist');
let pagesChecked = 0;
for (const locale of ['ko', 'pt-br', 'de']) {
  const lang = locale === 'pt-br' ? 'pt-BR' : locale;
  for (const page of pages) {
    const route = `/${locale}${page ? '/' + page : ''}`;
    const html = read(route);
    assert.ok(html.includes(`<html lang="${lang}"`), `${route}: content language`);
    assert.equal(canonical(html), 'https://detars.xyz' + route, `${route}: self canonical`);
    assert.ok(sitemap.includes('https://detars.xyz' + route), `${route}: sitemap`);
    assert.ok(!html.includes('undefined'), `${route}: no missing copy`);
    assert.ok(/<h1\b/.test(html), `${route}: real content`);
    for (const href of links(html).filter(h => h.startsWith('/') && !h.startsWith('//'))) assert.ok(exists(href), `${route}: broken link ${href}`);
    for (const href of switchLinks(html)) assert.ok(exists(href), `${route}: broken language switch ${href}`);
    const alternates = [...html.matchAll(/<link rel="alternate"[^>]*href="([^"]+)"/g)].map(m => m[1]);
    for (const href of alternates) assert.ok(exists(new URL(href).pathname), `${route}: nonexistent alternate ${href}`);
    if (page === '') assert.ok(html.includes('id="future"'), `${route}: future direction preserved`);
    if (page === 'privacy') {
      assert.ok(/OpenRouter/.test(html) && /Paddle/.test(html), `${route}: provider and payments disclosures`);
      assert.ok(html.includes('hreflang="en"') && html.includes(`hreflang="${lang}"`), `${route}: translated privacy alternate`);
    }
    if (page === 'research') {
      const reportLinks = links(html).filter(href => /^\/research\/[^/#]+\/?$/.test(href));
      assert.equal(new Set(reportLinks).size, new Set(englishReportLinks).size, `${route}: complete English fallback list`);
      assert.ok(!links(html).some(h => h.startsWith(`/${locale}/research/`)), `${route}: no fabricated translated article`);
    }
    pagesChecked++;
  }
  for (const page of ['pricing', 'terms', 'refund']) {
    const route = `/${locale}/${page}`;
    const html = read(route);
    assert.equal(canonical(html), `https://detars.xyz/${page}`, `${route}: English fallback canonical`);
    assert.ok(html.includes('<html lang="en"'), `${route}: honest English content language`);
    assert.ok(!sitemap.includes(`<loc>https://detars.xyz${route}</loc>`) && !sitemap.includes(`<loc>https://detars.xyz${route}/</loc>`), `${route}: English duplicate excluded from sitemap`);
    assert.ok(![...html.matchAll(/<link rel="alternate"[^>]*>/g)].some(m => m[0].includes(`hreflang="${lang}"`)), `${route}: no false legal translation alternate`);
    pagesChecked++;
  }
}
for (const href of englishReportLinks) {
  const html = read(href);
  for (const link of switchLinks(html)) assert.ok(exists(link), `${href}: report switch points only to real translations`);
  assert.ok(!switchLinks(html).some(h => /^\/(ko|pt-br|de)\/research\//.test(h)), `${href}: no invented report locale`);
}
console.log(JSON.stringify({status:'passed', locales:['ko','pt-BR','de'], pagesChecked, researchArticles:englishReportLinks.length}));
