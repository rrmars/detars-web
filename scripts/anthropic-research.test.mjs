import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import YAML from 'yaml';

const root = new URL('../', import.meta.url);
const slug = 'anthropic-ipo-ai-bubble-2026-11-11';
const read = file => readFileSync(new URL(file, root));

for (const locale of ['en', 'zh']) {
  test(`Anthropic ${locale}: complete public report, citations and downloadable assets`, () => {
    const markdown = read(`src/content/research/${locale}/${slug}.md`).toString();
    const [, frontmatter, body] = markdown.split(/^---\s*$/m);
    const data = YAML.parse(frontmatter);
    assert.equal(data.locale, locale);
    assert.equal(data.draft, false);
    assert.equal(data.generatedBy, 'pack:content-research');
    assert.equal(data.reviewed.peerReview, true);
    assert.equal(data.reviewed.sealedCitations, false);
    assert.equal(data.reviewed.humanCheck, undefined);
    assert.ok(!/humanCheckNote|\/Users\/|\/Volumes\/|file:\/\//.test(markdown));
    assert.ok(!/^# /m.test(body), 'the template owns the single H1');
    assert.ok((body.match(/^\| ---/gm) ?? []).length >= 12, 'full financial tables survive');
    for (const keyFigure of ['33.242', '900.9', '1.333', '195', '104.039']) assert.ok(body.includes(keyFigure));
    assert.ok(data.sources.length >= 20, 'full source list survives');
    for (const source of data.sources) {
      assert.equal(new URL(source.url).protocol, 'https:');
      assert.ok(body.includes(`](${source.url})`), `${source.title}: detailed source coverage retained`);
    }
    for (const id of ['s1', 's2', 's3', 's4a', 's4b', 's4c', 's5', 's6', 's7', 's8', 's9', 's10a', 's10b', 's11a', 's11b', 's12', 's13', 's14', 's15', 's16']) {
      assert.ok(body.includes(`id="${id}"`), `citation anchor ${id}`);
    }
    const pdf = `/research/assets/${slug}-${locale}.pdf`;
    const svg = `/research/assets/${slug}-revenue-${locale}.svg`;
    assert.ok(body.includes(`](${pdf})`));
    assert.ok(body.includes(`](${svg})`));
    assert.equal(read(`public${pdf}`).subarray(0, 5).toString(), '%PDF-');
    const chart = read(`public${svg}`).toString();
    assert.ok(chart.includes('<svg') && chart.includes('16.956'));
    assert.ok(!/<script|<foreignObject|(?:href|src)=["'](?:https?:|file:)/i.test(chart));
    assert.ok(body.includes('overflow-x: auto'), 'tables remain usable on narrow screens');
  });
}
