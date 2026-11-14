import assert from 'node:assert/strict';
import test from 'node:test';
import { availability, anyAvailable, assets, dl } from '../src/lib/download.ts';

test('Apple silicon download is open and follows the stable release alias', () => {
  assert.equal(availability.macArm, true);
  assert.equal(anyAvailable, true);
  assert.equal(dl(assets.macArm), 'https://github.com/rrmars/detars-releases/releases/latest/download/DeTars-mac-arm64.dmg');
});

test('platforms without published installers stay unavailable', () => {
  assert.equal(availability.macIntel, false);
  assert.equal(availability.win, false);
});
