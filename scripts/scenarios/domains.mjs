import fs from 'node:fs';

export const domains = [
  { id: 'housing', en: 'Renting & buying a home', zh: '租房买房' },
  { id: 'travel', en: 'Travel itineraries', zh: '旅行行程' },
  { id: 'buying', en: 'Buying decisions', zh: '买东西怎么选' },
  { id: 'visas', en: 'Visas & longer stays', zh: '签证长住' },
  { id: 'careers', en: 'Work & careers', zh: '工作职业' },
  { id: 'living', en: 'Cost of living', zh: '生活成本' },
  { id: 'family', en: 'Family & wellbeing', zh: '家庭与健康' },
  { id: 'study', en: 'Studying abroad', zh: '留学' },
  { id: 'ai-tools', en: 'AI tools, tested', zh: 'AI 工具实测' },
  { id: 'business', en: 'Small business & spreadsheets', zh: '小生意与表格' },
];
// First matching rule wins. Existing persisted choices always win on subsequent imports.
export const rules = [
  ['ai-tools', /(?:local-(?:speech|upscalers)|offline-ocr|background-remov|ai-.*(?:tools|slide)|hands-on-review)/],
  ['study', /(?:masters|study-abroad)/],
  ['careers', /(?:job-search|job-offer|backend-job|remote-design)/],
  ['visas', /(?:working-holiday|retirement|visa|entry-visa)/],
  ['housing', /(?:rent(?:al|ing)?(?:-|$)|home-buying|buying-(?:property|apartment))/],
  ['family', /(?:first-baby|meal-plan|wedding|home-gym|household-budget|family-move)/],
  ['business', /(?:jewellery|freelancer-income|cash-flow|cash-forecast|kiosk|candle-pricing)/],
  ['buying', /(?:laptop|phone|headphones|robot-vacuum|used-car|ebike|running-watch)/],
  ['living', /(?:cost-of-living|living-budget|monthly-budget|remote-work-budget|month-canadian)/],
  ['travel', /(?:itinerary|road-trip|days?|nights?|weekend|autumn|cherry-blossom)/],
];
export function assignDomain(slug) {
  const match = rules.find(([, expression]) => expression.test(slug));
  if (!match) throw new Error(`Unmapped scenario: ${slug}; add an explicit approved mapping or deterministic keyword rule`);
  return match[0];
}
export function mapDomains(slugs, persisted = {}, baseline = []) {
  const guides = { ...persisted };
  for (const row of baseline) {
    const approved = domains.find(d => d.en === row.domainEn && d.zh === row.domainZh);
    if (!approved) throw new Error(`Unrecognized approved domain: ${row.domainEn}`);
    if (guides[row.slug] && guides[row.slug] !== approved.id) throw new Error(`Approved mapping changed: ${row.slug}`);
    guides[row.slug] = approved.id;
  }
  for (const slug of slugs) guides[slug] ??= assignDomain(slug);
  for (const [slug, id] of Object.entries(guides)) if (!domains.some(d => d.id === id)) throw new Error(`Invalid domain ${slug}: ${id}`);
  return { domains, guides: Object.fromEntries(Object.entries(guides).sort(([a], [b]) => a.localeCompare(b, 'en'))) };
}
export function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
