#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import YAML from 'yaml';
import { mapDomains, readJson } from './scenarios/domains.mjs';
import { parseArticle, transformBody, sanitize, labels } from './scenarios/content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const packageArg = args.includes('--package') ? args[args.indexOf('--package') + 1] : args.find(arg => !arg.startsWith('--'));
if (!packageArg || packageArg.startsWith('--')) throw new Error('Usage: node scripts/import-scenarios.mjs <package-dir> [--skip-workbooks]');
const packageDir = path.resolve(packageArg);
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const manifestBytes = fs.readFileSync(path.join(packageDir, 'manifest.json'));
const manifest = JSON.parse(manifestBytes);
const slugs = Object.keys(manifest.pages).sort();
const write = (relative, bytes) => {
  const file = path.join(root, relative);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (!fs.existsSync(file) || !fs.readFileSync(file).equals(Buffer.from(bytes))) fs.writeFileSync(file, bytes);
};
// Compact top-level records: audits and semantic JSON stay below 700 physical lines.
const json = value => JSON.stringify(value, null, 2).split('\n').length < 700 ? JSON.stringify(value, null, 2) + '\n' : JSON.stringify(value) + '\n';
const evidence = readJson(path.join(root, 'docs/scenarios-date-evidence.json'));
const mappingFile = path.join(root, 'src/data/scenario-domains.json');
const existing = fs.existsSync(mappingFile) ? readJson(mappingFile).guides : {};
const approvedFile = path.join(root, 'scripts/scenarios/approved-domains.json');
const approved = readJson(approvedFile);
const mapping = mapDomains(slugs, existing, approved);
write('src/data/scenario-domains.json', json(mapping));
if (!args.includes('--skip-workbooks')) {
  const gate = spawnSync(process.env.PYTHON || 'python3', [path.join(root, 'scripts/scenarios/workbooks.py'), '--package', packageDir, '--output', root], { encoding: 'utf8' });
  if (gate.status !== 0) throw new Error(`Workbook privacy gate failed:\n${gate.stderr}\n${gate.stdout}`);
  process.stdout.write(gate.stdout);
}
const privacy = readJson(path.join(root, 'docs/scenarios-workbook-privacy.json'));
if (privacy.manifestSha256 !== hash(manifestBytes) || slugs.some(slug => !privacy.guides[slug])) throw new Error('Workbook privacy report does not match the current manifest. Run full importer without --skip-workbooks.');
const audit = { schemaVersion: 1, manifestSha256: hash(manifestBytes), policy: 'Only approved XLSX; saved HTML/evidence stay private. Sources expanded per locale. No research refresh.', guides: {} };
const pages = [];
const inputSnapshots = [];
for (const slug of slugs) {
  const declaration = manifest.pages[slug];
  const dataBytes = fs.readFileSync(path.join(packageDir, declaration.data));
  inputSnapshots.push([declaration.data, hash(dataBytes)]);
  const data = JSON.parse(dataBytes);
  if (data.slug !== slug || data.translationKey !== slug) throw new Error(`Identity mismatch: ${slug}`);
  const locales = ['en', 'zh'].filter(locale => declaration[locale]);
  if (!locales.includes('en') || JSON.stringify(locales) !== JSON.stringify(data.locales)) throw new Error(`Locale mismatch: ${slug}`);
  const researchDates = [...new Set(data.provenance.researchDates.length ? data.provenance.researchDates : evidence.dates[slug] || [])].sort();
  if (researchDates.some(date => !/^\d{4}-\d{2}-\d{2}$/.test(date))) throw new Error(`Invalid research date: ${slug}`);
  const publishedAt = researchDates[0] ?? null;
  const updatedAt = data.provenance.articleVerificationDate || researchDates.at(-1) || null;
  const sources = data.sources.map(source => ({ title: source.title, url: source.url, accessDate: source.accessDate || 'unknown' }));
  for (const source of sources) if (!/^https?:\/\//.test(source.url)) throw new Error(`Non-public source URL: ${slug}: ${source.url}`);
  const workbooks = (privacy.guides[slug]?.workbooks || []).filter(row => row.publicUrl && row.decision?.startsWith('approved'));
  const guideAudit = { locales, sourceDataSha256: hash(dataBytes), sourceListLink: data.sourceListLink, footerDisposition: 'expanded-external-sources', dateBasis: data.provenance.researchDates.length ? 'provenance.researchDates' : evidence.dateEvidence[slug]?.rationale || 'unresolvable: no original research date recorded', publishedAt, updatedAt, workbooks: workbooks.map(w => w.publicUrl), localePages: {} };
  const semantic = sanitize(data);
  Object.assign(semantic, { domain: mapping.guides[slug], researchDates, publishedAt, updatedAt, sourceListLink: '#sources-and-access-dates', sources });
  delete semantic.provenance.localizationDate;
  for (const locale of locales) {
    const articleBytes = fs.readFileSync(path.join(packageDir, declaration[locale].markdown));
    inputSnapshots.push([declaration[locale].markdown, hash(articleBytes)]);
    const article = parseArticle(articleBytes.toString());
    const sections = evidence.faqInventory.sectionsBySlug[slug]?.[locale] || [];
    if (sections.length > 1) throw new Error(`Multiple FAQ sections need explicit support: ${slug}/${locale}`);
    const transformed = transformBody(article.body, { slug, locale, workbooks, sources, faqHeading: sections[0]?.heading });
    const expected = sections[0]?.questions.length || 0;
    if (transformed.faq.length !== expected) throw new Error(`FAQ pair count changed: ${slug}/${locale}: ${transformed.faq.length}/${expected}`);
    const metadata = { title: article.metadata.title, description: article.metadata.description, locale, slug, translationKey: slug, domain: mapping.guides[slug], publishedAt, updatedAt, researchDates, locales, producerDisplayLabel: labels[locale], sources, headlineFigures: sanitize(data.headlineFigures), audience: data.audience, faq: transformed.faq, draft: false };
    write(`src/content/scenarios/${locale}/${slug}.md`, '---\n' + YAML.stringify(metadata, { lineWidth: 0, defaultStringType: 'QUOTE_DOUBLE', defaultKeyType: 'PLAIN' }) + '---\n\n' + transformed.body);
    pages.push(metadata);
    guideAudit.localePages[locale] = { sourceMarkdownSha256: hash(articleBytes), faqPairs: transformed.faq.length, links: transformed.links };
  }
  write(`src/data/scenarios/${slug}.json`, json(semantic));
  write(`docs/scenarios-attachment-audit/${slug}.json`, json(guideAudit));
  audit.guides[slug] = { domain: mapping.guides[slug], locales, hostedWorkbooks: workbooks.length, localLinkOccurrences: Object.values(guideAudit.localePages).reduce((n, p) => n + p.links.length, 0), report: `scenarios-attachment-audit/${slug}.json` };
}
// Never silently consume only half of a concurrently updated package.
if (!manifestBytes.equals(fs.readFileSync(path.join(packageDir, 'manifest.json')))) throw new Error('Package manifest changed during import. Re-run on a stable snapshot.');
for (const [file, sha256] of inputSnapshots) if (hash(fs.readFileSync(path.join(packageDir, file))) !== sha256) throw new Error(`Package input changed during import: ${file}. Re-run on a stable snapshot.`);
// Prune only importer-owned generated content absent from the current inventory.
for (const [relative, suffix] of [['src/content/scenarios/en', '.md'], ['src/content/scenarios/zh', '.md'], ['src/data/scenarios', '.json'], ['docs/scenarios-attachment-audit', '.json']]) {
  if (!fs.existsSync(path.join(root, relative))) continue;
  for (const name of fs.readdirSync(path.join(root, relative))) {
    const slug = name.slice(0, -suffix.length);
    if (!slugs.includes(slug) || (relative.endsWith('/zh') && !manifest.pages[slug].zh)) fs.unlinkSync(path.join(root, relative, name));
  }
}
audit.counts = { guides: slugs.length, en: pages.filter(p => p.locale === 'en').length, zh: pages.filter(p => p.locale === 'zh').length, faqPairs: pages.reduce((n, p) => n + p.faq.length, 0), hostedWorkbooks: Object.values(audit.guides).reduce((n, g) => n + g.hostedWorkbooks, 0) };
write('docs/scenarios-attachment-audit.json', json(audit));
const sections = [['/', 'DeTars — AI coworkers that finish the work'], ['/how-it-works/', 'How DeTars works'], ['/reliable/', 'Reliability and verification'], ['/packs/', 'Reusable task packs'], ['/scenarios/', 'Practical scenarios and decision guides'], ['/research/', 'Research'], ['/download/', 'Download DeTars'], ['/faq/', 'Frequently asked questions']];
const llms = '# DeTars\n\n> AI coworkers for practical, verified work.\n\n## Main sections\n\n' + sections.map(([url, title]) => `- [${title}](https://detars.xyz${url})`).join('\n') + '\n\n## Scenarios\n\n' + pages.map(p => `- [${p.title.replace(/[\[\]\n]/g, '')}](https://detars.xyz${p.locale === 'zh' ? '/zh' : ''}/scenarios/${p.slug}/): ${p.description.replace(/\s+/g, ' ')}`).join('\n') + '\n';
write('public/llms.txt', llms);
console.log(JSON.stringify(audit.counts));
