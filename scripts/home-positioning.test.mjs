import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = file => readFileSync(new URL(file, root), 'utf8');
const files = ['src/lib/home-copy.ts', ...['zh-hant', 'ja', 'fr', 'es', 'ko', 'pt-br', 'de'].map(l => `src/lib/home/${l}.ts`)];

test('all nine home translations carry explicit future-direction copy without all-local privacy promises', () => {
  let count = 0;
  for (const file of files) {
    const source = read(file);
    const entries = file.endsWith('home-copy.ts') ? 2 : 1;
    for (const key of ['futureKicker', 'futureH2', 'futureP']) {
      assert.equal([...source.matchAll(new RegExp(`^  ${key}: "`, 'gm'))].length, entries, `${file}: ${key}`);
    }
    assert.ok(!source.includes('n: "100%"'), `${file}: absolute privacy proof removed`);
    assert.ok(!/nothing uploaded|一字不上传|一字不上傳|rien d'envoyé|nada se sube/.test(source), `${file}: offline guarantee removed`);
    count += entries;
  }
  assert.equal(count, 9);
  const component = read('src/components/Home.astro');
  assert.ok(component.indexOf('id="future"') > component.indexOf('<!-- HERO -->'));
  assert.ok(component.indexOf('id="future"') < component.indexOf('<!-- HOOK -->'));
  for (const key of ['futureKicker', 'futureH2', 'futureP']) assert.ok(component.includes(`t.${key}`));
  const en = read('src/lib/home-copy.ts');
  assert.ok(en.includes('AI for everyone?<br>'));
  assert.ok(en.includes('This one’s for you.'));
  assert.ok(en.includes('we’re working toward a DeTars'));
  assert.ok(en.includes('relevant task inputs are sent to its provider'));
});

test('home closing and footers are on your side while permanent-terminal positioning stays', () => {
  const homes = files.flatMap(file => [...read(file).matchAll(/^  closeH2: "([^"]+)",$/gm)].map(m => m[1]));
  const firstLines = [
    'DeTars is your permanent third-party terminal.', 'DeTars 是永久的第三方终端伙伴。',
    'DeTars 是永久的第三方終端夥伴。', 'DeTarsは、あなたの永続的なサードパーティ端末。',
    'DeTars est votre terminal tiers permanent.', 'DeTars es tu terminal de terceros permanente.',
    'DeTars는 당신의 영구적인 서드파티 터미널입니다.', 'O DeTars é seu terminal independente permanente.',
    'DeTars ist dein dauerhaftes, unabhängiges Terminal.'
  ];
  const taglines = ['AI on your side.', '站在你这边的 AI。', '站在你這邊的 AI。', 'あなたの味方になるAI。',
    'L’IA de votre côté.', 'IA de tu lado.', '당신의 편에 서는 AI.', 'IA do seu lado.', 'KI auf deiner Seite.'];
  assert.equal(homes.length, 9);
  const ui = read('src/lib/ui-labels.ts');
  const footer = ui.split('footerTagline: {')[1].split('footerSub: {')[0];
  for (let i = 0; i < homes.length; i++) {
    assert.equal(homes[i], `${firstLines[i]}<br><span class='grad'>${taglines[i]}</span>`);
    assert.ok(footer.includes(JSON.stringify(taglines[i])));
  }
  assert.ok(ui.includes('en: "Your permanent third-party terminal."'));
  const en = read('src/lib/home-copy.ts');
  assert.ok(en.includes('Helping you get things done—and live better.'));
  assert.ok(en.includes('帮你把事做成，也把日子过好。'));
  assert.ok(en.includes('closePrimary: "Own it on your machine →"'));
  const scenario = read('src/lib/scenario-i18n.ts');
  for (const text of ['AI di pihak Anda.', 'AI luôn đứng về phía bạn.', 'AI ที่อยู่ข้างคุณ']) {
    assert.ok(scenario.includes(`tagline: ${JSON.stringify(text)}`));
  }
});
