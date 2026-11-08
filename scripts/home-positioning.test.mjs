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
