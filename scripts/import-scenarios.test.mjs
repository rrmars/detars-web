import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import { parseArticle, transformBody, labels, plain, sanitize, siteLocales, segments, scenarioPath, text as importerText, sourcesAnchor } from './scenarios/content.mjs';
import { mapDomains, readJson, assignDomain } from './scenarios/domains.mjs';

const root = path.resolve(import.meta.dirname, '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const evidence = readJson(path.join(root, 'docs/scenarios-date-evidence.json'));
const audit = readJson(path.join(root, 'docs/scenarios-attachment-audit.json'));
const mapping = readJson(path.join(root, 'src/data/scenario-domains.json'));
const approved = readJson(path.join(root, 'scripts/scenarios/approved-domains.json'));
const digest = value => crypto.createHash('sha256').update(value).digest('hex');

test('approved 53 mappings preserved; future keyword assignments persist; unknowns fail closed', () => {
  assert.equal(approved.length, 53);
  assert.equal(mapping.domains.length, 10);
  assert.deepEqual(mapDomains([], mapping.guides, approved), mapping);
  assert.equal(assignDomain('singapore-first-rent-budget'), 'housing');
  assert.equal(assignDomain('local-speech-to-text-five-clip-test'), 'ai-tools');
  assert.equal(mapDomains(['future-unknown'], { 'future-unknown': 'travel' }).guides['future-unknown'], 'travel');
  assert.throws(() => assignDomain('unclassified-new-guide'), /Unmapped/);
});
test('local links, bare paths, publication copy and first H1 are transformed, caveats survive', () => {
  const source = '# Title\n\nNot legal advice.\n\n[Workbook](../run/model.xlsx) and [evidence](../run/sources.md).\n\n`/Volumes/T7/private/data.csv`\n\n## Keep this\n';
  const output = transformBody(source, { slug: 'sample', locale: 'en', workbooks: [{ source: 'run/model.xlsx', publicUrl: '/scenarios/sample/model.xlsx' }], sources: [] });
  assert.ok(!/^# /m.test(output.body));
  assert.ok(output.body.includes('Not legal advice.'));
  assert.ok(output.body.includes('## Keep this'));
  assert.ok(output.body.includes('[Workbook](/scenarios/sample/model.xlsx)'));
  assert.ok(!output.body.includes('/Volumes/'));
  assert.deepEqual(output.links.map(l => l.disposition), ['hosted-workbook', 'expanded-sources', 'rewritten-bare-local-path']);
  assert.deepEqual(sanitize({ reviewSchema: {}, provenance: { runFolders: ['/private'], originalRunModel: 'unknown' } }), { provenance: { originalRunModel: 'unknown' } });
  const external = '[报道](https://example.com/home/robot-vacuums/test-90)。2026年，17个测试。';
  assert.ok(transformBody(external, { locale: 'zh', sources: [] }).body.includes(external));
  const table = transformBody('| Meal | [Recipe](../run/recipe.html) |\n', { locale: 'en', sources: [] }).body;
  assert.ok(table.includes('Recipe (not published)'));
  assert.ok(!table.includes('original supporting file is not published'));
});

test('every generated record satisfies the shared contract; only actual locales; no local paths or ratings', () => {
  const perLocale = {};
  let pairs = 0;
  for (const [slug, guide] of Object.entries(audit.guides)) {
    const semanticText = read(`src/data/scenarios/${slug}.json`);
    const semantic = JSON.parse(semanticText);
    assert.equal(semantic.domain, mapping.guides[slug]);
    assert.ok(!/\/Users\/|\/Volumes\/|file:\/\/|"reviewSchema"|"AggregateRating"|"ratingValue"/.test(semanticText), slug);
    for (const locale of guide.locales) {
      assert.ok(siteLocales.includes(locale), `${slug}: unknown locale ${locale}`);
      perLocale[locale] = (perLocale[locale] || 0) + 1;
      const text = read(`src/content/scenarios/${locale}/${slug}.md`);
      const { metadata: m, body } = parseArticle(text);
      for (const field of ['title','description','locale','slug','translationKey','domain','publishedAt','updatedAt','researchDates','locales','producerDisplayLabel','sources','headlineFigures','audience','faq','draft']) assert.ok(Object.hasOwn(m, field), `${slug}: ${field}`);
      assert.equal(m.locale, locale); assert.equal(m.slug, slug); assert.equal(m.translationKey, slug);
      assert.equal(m.domain, mapping.guides[slug]); assert.equal(m.draft, false);
      assert.equal(m.producerDisplayLabel, labels[locale]); assert.deepEqual(m.locales, guide.locales);
      assert.deepEqual(m.researchDates, semantic.researchDates); assert.equal(m.publishedAt, semantic.publishedAt);
      assert.ok(m.publishedAt === null || /^\d{4}-\d{2}-\d{2}$/.test(m.publishedAt));
      assert.ok(!/^# /m.test(body)); assert.ok(!body.includes('provenance rendered from data'));
      assert.ok(!/\/Users\/|\/Volumes\/|file:\/\/|\.\.\//.test(body), `${slug}/${locale}: private locator`);
      assert.ok(!/application\/ld\+json|AggregateRating|ratingValue|schema.org\/Review/.test(body));
      assert.ok(!/draft package|本地草稿|approved hosting|新上线的公开下载/.test(body), `${slug}/${locale}: stale package notice`);
      assert.deepEqual(guide.locales.slice().sort(), siteLocales.filter(l => fs.existsSync(path.join(root, `src/content/scenarios/${l}/${slug}.md`))).sort(), `${slug}: declared locales must be the files that exist`);
      assert.ok(guide.locales[0] === 'en' && fs.existsSync(path.join(root, `src/content/scenarios/en/${slug}.md`)), `${slug}: English is required`);
      assert.ok(text.split('\n').length < 700, `${slug}/${locale}: length`);
      for (const source of m.sources) { assert.ok(/^https?:\/\//.test(source.url)); assert.ok(body.includes(source.url)); assert.ok(source.accessDate); }
      for (const match of body.matchAll(/\]\(([^)]+)\)/g)) if (!/^(?:https?:|#)/.test(match[1])) {
        assert.ok(/^\/scenarios\/[^/]+\/[^/]+\.xlsx$/.test(match[1]), `${slug}: ${match[1]}`);
        assert.ok(fs.existsSync(path.join(root, 'public', decodeURIComponent(match[1]))));
      }
      // The date-evidence inventory covers en/zh. A translation must carry the same number of FAQ pairs as
      // the English guide, from its own dedicated section (extra locales have no separate inventory).
      const inventoried = locale === 'en' || locale === 'zh';
      const sections = evidence.faqInventory.sectionsBySlug[slug]?.[inventoried ? locale : 'en'] || [];
      const expected = sections.flatMap(s => s.questions.map(q => ({ q: plain(q.question), a: plain(q.answerMarkdown) })));
      if (inventoried) assert.deepEqual(m.faq, expected, `${slug}/${locale}: FAQ must match original dedicated section`);
      else {
        assert.equal(m.faq.length, expected.length, `${slug}/${locale}: FAQ pair count must match English`);
        for (const pair of m.faq) assert.ok(pair.q.trim() && pair.a.trim(), `${slug}/${locale}: empty FAQ pair`);
      }
      pairs += m.faq.length;
      if (locale === 'en' && !guide.locales.includes('zh')) assert.ok(!fs.existsSync(path.join(root, `src/content/scenarios/zh/${slug}.md`)));
    }
  }
  assert.equal(perLocale.en, audit.counts.en); assert.equal(perLocale.zh || 0, audit.counts.zh); assert.equal(pairs, audit.counts.faqPairs);
  const others = Object.fromEntries(Object.entries(perLocale).filter(([l]) => l !== 'en' && l !== 'zh'));
  assert.deepEqual(others, audit.counts.otherLocales || {});
});

test('llms contains every actual scenario and primary site sections, no noncanonical extra indexes', () => {
  const text = read('public/llms.txt');
  for (const [slug, guide] of Object.entries(audit.guides)) for (const locale of guide.locales) {
    const { metadata } = parseArticle(read(`src/content/scenarios/${locale}/${slug}.md`));
    assert.ok(text.includes(`https://detars.xyz${scenarioPath(locale, slug)}`));
    assert.ok(text.includes(metadata.description.replace(/\s+/g, ' ')));
  }
  for (const section of ['how-it-works','reliable','packs','scenarios','research','download','faq']) assert.ok(text.includes(`https://detars.xyz/${section}/`));
  // No noncanonical extras: every scenario URL in llms.txt is a real imported page.
  const listed = [...text.matchAll(/https:\/\/detars\.xyz(\/(?:[a-z-]+\/)?scenarios\/[^/)]+\/)/g)].map(m => m[1]);
  const actual = Object.entries(audit.guides).flatMap(([slug, guide]) => guide.locales.map(locale => scenarioPath(locale, slug)));
  assert.deepEqual(listed.sort(), actual.sort());
});

test('optional current-package input snapshot and real source FAQs still match', { skip: !process.env.SCENARIOS_PACKAGE }, () => {
  const input = process.env.SCENARIOS_PACKAGE;
  const manifestText = fs.readFileSync(path.join(input, 'manifest.json'));
  assert.equal(digest(manifestText), audit.manifestSha256);
  const manifest = JSON.parse(manifestText);
  assert.deepEqual(Object.keys(manifest.pages).sort(), Object.keys(audit.guides).sort());
  for (const [slug, fallback] of Object.entries(evidence.dateEvidence)) for (const anchor of fallback.evidence) {
    const bytes = fs.readFileSync(path.resolve(input, '../..', anchor.file));
    assert.equal(digest(bytes), anchor.sha256, `${slug}: original date anchor hash`);
    assert.ok(bytes.toString().includes(anchor.excerpt), `${slug}: original date anchor excerpt`);
  }
  for (const [slug, page] of Object.entries(manifest.pages)) {
    const report = readJson(path.join(root, `docs/scenarios-attachment-audit/${slug}.json`));
    assert.equal(digest(fs.readFileSync(path.join(input, page.data))), report.sourceDataSha256);
    for (const locale of report.locales) {
      const sourceText = fs.readFileSync(path.join(input, page[locale].markdown), 'utf8');
      assert.equal(digest(sourceText), report.localePages[locale].sourceMarkdownSha256);
      const originalBody = parseArticle(sourceText).body.replace(/^# [^\n]*\n/m, '').replace(/<!--[\s\S]*?-->/g, '');
      const tail = new RegExp(`\\n## (?:${Object.values(importerText).flatMap(t => [t.downloads, t.sources]).map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\n`);
      const publishedBody = parseArticle(read(`src/content/scenarios/${locale}/${slug}.md`)).body.split(tail)[0];
      const numbers = body => body.replace(/\[[^\]]+\]:[^\n]+/g, '').replace(/\]\([^)]*\)/g, ']').replace(/https?:\/\/[^\s<>]+/g, '').replace(/`?(?:\.\.\/|\/(?:Volumes|Users)\/)[^\s`<>]+`?/g, '').replace(/\b[\w-]+\.(?:xlsx|html|md|csv|pdf)\b/g, '').match(/\d+(?:[.,]\d+)*/g)?.sort() || [];
      assert.deepEqual(numbers(publishedBody), numbers(originalBody), `${slug}/${locale}: visible numeric literals changed`);
      const externalUrls = body => [...body.matchAll(/https?:\/\/[^\s<>)]+/g)].map(m => m[0]).sort();
      assert.deepEqual(externalUrls(publishedBody), externalUrls(originalBody), `${slug}/${locale}: external citations changed`);
      for (const line of originalBody.split('\n').filter(line => line.trim() && !/draft.package|本地草稿|local files|local downloads|public downloads|public download|本地文件|配套文件|同级|公开下载|\]\((?!https?:|#)|(?:\.\.\/)|\/(?:Volumes|Users)\//i.test(line))) assert.ok(publishedBody.includes(line), `${slug}/${locale}: unrequested article change: ${line.slice(0, 100)}`);
      for (const section of (locale === 'en' || locale === 'zh') ? evidence.faqInventory.sectionsBySlug[slug]?.[locale] || [] : []) {
        for (const question of section.questions) assert.ok(sourceText.includes(question.sourceExcerpt), `${slug}/${locale}: evidence no longer matches source`);
      }
    }
  }
});

test('importer locale table mirrors src/lib/site.ts; every site locale has labels, text and a route segment', () => {
  const site = read('src/lib/site.ts');
  const list = name => [...site.match(new RegExp(`export const ${name} = \\[([^\\]]*)\\]`))[1].matchAll(/"([^"]+)"/g)].map(m => m[1]);
  const declared = [...list('locales'), ...list('scenarioOnlyLocales')];
  assert.deepEqual([...siteLocales].sort(), [...declared].sort());
  const segmentBlock = site.match(/export const localeSegment[^{]*\{([\s\S]*?)\n\};/)[1];
  for (const locale of declared) {
    const match = segmentBlock.match(new RegExp(`(?:^|\\n)\\s*"?${locale}"?: "([^"]*)"`));
    assert.equal(match?.[1], segments[locale], `${locale}: URL segment`);
    assert.ok(labels[locale] && importerText[locale], `${locale}: importer text`);
    for (const key of ['sources', 'sourcesIntro', 'access', 'downloads', 'downloadsIntro', 'unavailable', 'notPublished', 'bareLocal']) assert.ok(importerText[locale][key], `${locale}.${key}`);
  }
  assert.equal(scenarioPath('zh', 'a'), '/zh/scenarios/a/');
  assert.equal(scenarioPath('pt-BR', 'a'), '/pt-br/scenarios/a/');
  assert.equal(scenarioPath('en', 'a'), '/scenarios/a/');
});

test('per-locale importer text: local paths, source links and anchors are localized and never leak', () => {
  for (const locale of siteLocales) {
    const source = '# T\n\nSee [sources](../run/sources.md), [file](../run/model.html) and `/Volumes/T7/private/a.csv`.\n\n| A | [x](../r/y.html) |\n';
    const out = transformBody(source, { slug: 's', locale, workbooks: [], sources: [{ title: 'Source one', url: 'https://example.com/a', accessDate: '2026-11-07' }] });
    assert.ok(!/\/Volumes\/|\.\.\//.test(out.body), `${locale}: private locator`);
    assert.ok(out.body.includes(`](#${sourcesAnchor(locale)})`), `${locale}: sources link`);
    assert.ok(out.body.includes(`\n## ${importerText[locale].sources}\n`), `${locale}: sources heading`);
    assert.ok(out.body.includes(`${importerText[locale].access}: 2026-11-07`), `${locale}: access date label`);
    assert.ok(out.body.includes(importerText[locale].bareLocal) && out.body.includes(importerText[locale].notPublished), `${locale}: unavailable copy`);
    assert.deepEqual(out.links.map(l => l.disposition), ['expanded-sources', 'rewritten-unavailable', 'rewritten-unavailable', 'rewritten-bare-local-path'], locale);
  }
  assert.equal(sourcesAnchor('en'), 'sources-and-access-dates');
  assert.equal(sourcesAnchor('zh'), '来源与查阅日期');
  assert.equal(sourcesAnchor('pt-BR'), 'fontes-e-datas-de-acesso');
});

test('every sources link points at a heading id that exists in the built page (when dist is present)', { skip: !fs.existsSync(path.join(root, 'dist')) }, () => {
  let checked = 0;
  for (const [slug, guide] of Object.entries(audit.guides)) for (const locale of guide.locales) {
    if (locale === 'en' || locale === 'zh') continue;
    const html = read(`dist${scenarioPath(locale, slug)}index.html`);
    assert.ok(html.includes(`href="#${sourcesAnchor(locale)}"`) || !html.includes('href="#'), `${slug}/${locale}: sources link`);
    assert.ok(html.includes(`id="${sourcesAnchor(locale)}"`), `${slug}/${locale}: heading id ${sourcesAnchor(locale)}`);
    checked++;
  }
  assert.ok(checked >= 0);
});

// Importer behaviour in a scratch site: any declared locale is accepted, English is required, labels must match.
const pilots = { 'zh-Hant': 'taipei-move-hong-kong-family-residence-budget', id: 'indonesia-cook-japan-ssw-food-service-pause', 'pt-BR': 'lisbon-first-apartment-brazilian-couple' };
function scratchImport(mutate, { only = 'id' } = {}) {
  const input = process.env.SCENARIOS_PACKAGE;
  const slug = pilots[only];
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'detars-import-'));
  try {
    const site = path.join(dir, 'site'); const pkg = path.join(dir, 'pkg');
    for (const file of ['scripts/scenarios/approved-domains.json', 'docs/scenarios-date-evidence.json', 'src/data/scenario-domains.json']) { fs.mkdirSync(path.dirname(path.join(site, file)), { recursive: true }); fs.copyFileSync(path.join(root, file), path.join(site, file)); }
    const manifest = JSON.parse(fs.readFileSync(path.join(input, 'manifest.json')));
    const entry = manifest.pages[slug];
    const pages = { [slug]: entry };
    const files = [entry.data, ...Object.values(entry).filter(v => v?.markdown).map(v => v.markdown)];
    for (const file of files) { fs.mkdirSync(path.dirname(path.join(pkg, file)), { recursive: true }); fs.copyFileSync(path.join(input, file), path.join(pkg, file)); }
    const state = { manifest: { ...manifest, pages }, pkg, slug, only };
    mutate?.(state);
    fs.writeFileSync(path.join(pkg, 'manifest.json'), JSON.stringify(state.manifest));
    const hash = crypto.createHash('sha256').update(fs.readFileSync(path.join(pkg, 'manifest.json'))).digest('hex');
    fs.writeFileSync(path.join(site, 'docs/scenarios-workbook-privacy.json'), JSON.stringify({ manifestSha256: hash, guides: { [state.slug]: { workbooks: [] } } }));
    const result = spawnSync(process.execPath, [path.join(root, 'scripts/import-scenarios.mjs'), pkg, '--skip-workbooks'], { env: { ...process.env, SCENARIOS_SITE_ROOT: site }, encoding: 'utf8' });
    return { result, site, slug, read: relative => fs.readFileSync(path.join(site, relative), 'utf8'), exists: relative => fs.existsSync(path.join(site, relative)) };
  } finally { setTimeout(() => fs.rmSync(dir, { recursive: true, force: true }), 0); }
}
const withPackage = { skip: !process.env.SCENARIOS_PACKAGE };

test('importer accepts a non-zh extra locale alongside English and publishes both', withPackage, () => {
  for (const only of Object.keys(pilots)) {
    const run = scratchImport(undefined, { only });
    assert.equal(run.result.status, 0, run.result.stderr);
    const page = locale => parseArticle(run.read(`src/content/scenarios/${locale}/${run.slug}.md`));
    assert.equal(page(only).metadata.locale, only);
    assert.equal(page(only).metadata.locales[0], 'en');
    assert.ok(page(only).metadata.locales.includes(only));
    assert.equal(page(only).metadata.producerDisplayLabel, labels[only]);
    assert.equal(page(only).metadata.faq.length, page('en').metadata.faq.length);
    // Existing-locale output is byte-identical to what the repository already publishes for that guide.
    assert.equal(run.read(`src/content/scenarios/en/${run.slug}.md`), read(`src/content/scenarios/en/${run.slug}.md`));
    assert.ok(run.read('public/llms.txt').includes(`https://detars.xyz${scenarioPath(only, run.slug)}`));
    assert.equal(run.exists(`src/content/scenarios/zh/${run.slug}.md`), only === 'zh-Hant');
  }
});
test('importer: an unsupported locale, a missing English page, a wrong label and a changed section structure fail closed', withPackage, () => {
  const bad = (mutate, pattern, only) => { const run = scratchImport(mutate, { only }); assert.notEqual(run.result.status, 0); assert.match(run.result.stderr, pattern); };
  bad(({ manifest, slug, pkg, only }) => { const e = manifest.pages[slug]; e.xx = { markdown: e[only].markdown, html: 'x' }; }, /Unsupported locale/);
  bad(({ manifest, slug }) => { delete manifest.pages[slug].en; }, /Locale mismatch/);
  bad(({ manifest, slug, pkg }) => { const file = path.join(pkg, manifest.pages[slug].data); const d = JSON.parse(fs.readFileSync(file)); d.producerDisplayLabel.id = 'other'; fs.writeFileSync(file, JSON.stringify(d)); }, /Producer label mismatch/);
  bad(({ manifest, slug, pkg, only }) => { const file = path.join(pkg, manifest.pages[slug][only].markdown); fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace(/\n## /, '\n### ')); }, /section structure differs|FAQ pair count/);
});
