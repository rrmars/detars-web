import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { parseArticle, transformBody, labels, plain, sanitize } from './scenarios/content.mjs';
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
  let en = 0, zh = 0, pairs = 0;
  for (const [slug, guide] of Object.entries(audit.guides)) {
    const semanticText = read(`src/data/scenarios/${slug}.json`);
    const semantic = JSON.parse(semanticText);
    assert.equal(semantic.domain, mapping.guides[slug]);
    assert.ok(!/\/Users\/|\/Volumes\/|file:\/\/|"reviewSchema"|"AggregateRating"|"ratingValue"/.test(semanticText), slug);
    for (const locale of guide.locales) {
      locale === 'en' ? en++ : zh++;
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
      assert.ok(text.split('\n').length < 700, `${slug}/${locale}: length`);
      for (const source of m.sources) { assert.ok(/^https?:\/\//.test(source.url)); assert.ok(body.includes(source.url)); assert.ok(source.accessDate); }
      for (const match of body.matchAll(/\]\(([^)]+)\)/g)) if (!/^(?:https?:|#)/.test(match[1])) {
        assert.ok(/^\/scenarios\/[^/]+\/[^/]+\.xlsx$/.test(match[1]), `${slug}: ${match[1]}`);
        assert.ok(fs.existsSync(path.join(root, 'public', decodeURIComponent(match[1]))));
      }
      const sections = evidence.faqInventory.sectionsBySlug[slug]?.[locale] || [];
      const expected = sections.flatMap(s => s.questions.map(q => ({ q: plain(q.question), a: plain(q.answerMarkdown) })));
      assert.deepEqual(m.faq, expected, `${slug}/${locale}: FAQ must match original dedicated section`);
      pairs += m.faq.length;
      if (locale === 'en' && !guide.locales.includes('zh')) assert.ok(!fs.existsSync(path.join(root, `src/content/scenarios/zh/${slug}.md`)));
    }
  }
  assert.equal(en, audit.counts.en); assert.equal(zh, audit.counts.zh); assert.equal(pairs, audit.counts.faqPairs);
});

test('llms contains every actual scenario and primary site sections, no noncanonical extra indexes', () => {
  const text = read('public/llms.txt');
  for (const [slug, guide] of Object.entries(audit.guides)) for (const locale of guide.locales) {
    const { metadata } = parseArticle(read(`src/content/scenarios/${locale}/${slug}.md`));
    assert.ok(text.includes(`https://detars.xyz${locale === 'zh' ? '/zh' : ''}/scenarios/${slug}/`));
    assert.ok(text.includes(metadata.description.replace(/\s+/g, ' ')));
  }
  for (const section of ['how-it-works','reliable','packs','scenarios','research','download','faq']) assert.ok(text.includes(`https://detars.xyz/${section}/`));
  assert.ok(!/https:\/\/detars.xyz\/(?:ja|fr|de|ko)\/scenarios\//.test(text));
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
      const publishedBody = parseArticle(read(`src/content/scenarios/${locale}/${slug}.md`)).body.split(/\n## (?:Downloads|下载工作簿|Sources and access dates|来源与查阅日期)\n/)[0];
      const numbers = body => body.replace(/\[[^\]]+\]:[^\n]+/g, '').replace(/\]\([^)]*\)/g, ']').replace(/https?:\/\/[^\s<>]+/g, '').replace(/`?(?:\.\.\/|\/(?:Volumes|Users)\/)[^\s`<>]+`?/g, '').replace(/\b[\w-]+\.(?:xlsx|html|md|csv|pdf)\b/g, '').match(/\d+(?:[.,]\d+)*/g)?.sort() || [];
      assert.deepEqual(numbers(publishedBody), numbers(originalBody), `${slug}/${locale}: visible numeric literals changed`);
      const externalUrls = body => [...body.matchAll(/https?:\/\/[^\s<>)]+/g)].map(m => m[0]).sort();
      assert.deepEqual(externalUrls(publishedBody), externalUrls(originalBody), `${slug}/${locale}: external citations changed`);
      for (const line of originalBody.split('\n').filter(line => line.trim() && !/draft.package|本地草稿|local files|local downloads|public downloads|public download|本地文件|配套文件|同级|公开下载|\]\((?!https?:|#)|(?:\.\.\/)|\/(?:Volumes|Users)\//i.test(line))) assert.ok(publishedBody.includes(line), `${slug}/${locale}: unrequested article change: ${line.slice(0, 100)}`);
      for (const section of evidence.faqInventory.sectionsBySlug[slug]?.[locale] || []) {
        for (const question of section.questions) assert.ok(sourceText.includes(question.sourceExcerpt), `${slug}/${locale}: evidence no longer matches source`);
      }
    }
  }
});
