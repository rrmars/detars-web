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
  ['ai-tools', /(?:offline-translation|text-to-speech|local-(?:speech|upscalers|music-generation)|offline-ocr|background-remov|ai-.*(?:tools|slide)|hands-on-review|meeting-notes|ai-transcription)/],
  ['study', /(?:primary-one|masters|study-abroad|english-test|(?:^|-)mba(?:-|$)|international-school|korean-course|secondary-school)/],
  ['careers', /(?:analyst-switch|job-search|job-offer|backend-job|remote-design|germany-vs-canada|nurse|career-switch|(?:^|-)ssw-)/],
  ['visas', /(?:digital-nomad|working-holiday|retirement|visa|entry-visa|dtv|long-stay)/],
  ['housing', /(?:first-home|first-apartment|cash-purchase|rent(?:al|ing)?(?:-|$)|home-buying|buying-(?:property|apartment))/],
  ['family', /(?:care-options|rescue-dog|vegetarian-protein|health-insurance|first-baby|meal-plan|wedding|home-gym|household-budget|family-move|dental|infant-care|(?:^|-)dog-|aged-care)/],
  ['business', /(?:freelance-designer|candle-maker|estimated-tax|jewellery|freelancer-income|cash-flow|cash-forecast|kiosk|candle-pricing|home-bakery|cafe|sambal|home-tutoring|english-tutor|international-sales|usd-invoicing)/],
  ['buying', /(?:air-purifier|laptop|phone|headphones|robot-vacuum|used-car|ebike|running-watch|solar|family-car|home-internet)/],
  ['living', /(?:first-30-days|move-with|one-month|cost-of-living|living-budget|monthly-budget|remote-work-budget|month-canadian|city-month|taipei-move|one-year|retiree-social-security)/],
  ['travel', /(?:ski-week|safari|itinerary|road-trip|days?|nights?|weekend|autumn|cherry-blossom|without-driving|two-weeks|toddler-trip)/],
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
