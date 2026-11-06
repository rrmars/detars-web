#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
const root = path.resolve(import.meta.dirname, '../..');
const packageDir = process.argv[2];
if (!packageDir) throw new Error('Usage: node scripts/scenarios/verify-import.mjs /path/to/i18n');
const digest = data => crypto.createHash('sha256').update(data).digest('hex');
const run = (command, args, env = process.env) => {
  const result = spawnSync(command, args, { cwd: root, env, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
  process.stdout.write(result.stdout || ''); process.stderr.write(result.stderr || '');
  if (result.status !== 0) throw new Error(`Verification command failed: ${command} ${args.join(' ')}`);
  return result.stdout;
};
const inventory = () => {
  const files = {};
  const walk = relative => {
    const absolute = path.join(root, relative);
    if (!fs.existsSync(absolute)) return;
    if (fs.statSync(absolute).isDirectory()) for (const name of fs.readdirSync(absolute).sort()) walk(path.join(relative, name));
    else files[relative] = digest(fs.readFileSync(absolute));
  };
  for (const target of ['src/content/scenarios', 'src/data/scenarios', 'src/data/scenario-domains.json', 'public/scenarios', 'public/llms.txt', 'docs/scenarios-attachment-audit', 'docs/scenarios-attachment-audit.json', 'docs/scenarios-workbook-privacy.json']) walk(target);
  return files;
};
const manifestBefore = digest(fs.readFileSync(path.join(packageDir, 'manifest.json')));
run(process.env.PYTHON || 'python3', ['scripts/scenarios/workbooks.py', '--self-test']);
run(process.execPath, ['scripts/import-scenarios.mjs', '--package', packageDir]);
const first = inventory();
run(process.execPath, ['scripts/import-scenarios.mjs', '--package', packageDir]);
const second = inventory();
const differences = [...new Set([...Object.keys(first), ...Object.keys(second)])].filter(file => first[file] !== second[file]);
if (differences.length) throw new Error(`Non-idempotent output: ${differences.join(', ')}`);
const testOutput = run(process.execPath, ['--test', 'scripts/import-scenarios.test.mjs'], { ...process.env, SCENARIOS_PACKAGE: packageDir });
const manifestAfter = digest(fs.readFileSync(path.join(packageDir, 'manifest.json')));
if (manifestBefore !== manifestAfter) throw new Error('Manifest changed across verification');
const report = {
  schemaVersion: 1, status: 'passed', manifestSha256: manifestAfter,
  counts: JSON.parse(fs.readFileSync(path.join(root, 'docs/scenarios-attachment-audit.json'))).counts,
  fullImporterRuns: 2, comparedFiles: Object.keys(first).length, differences,
  firstOutputTreeSha256: digest(JSON.stringify(first)), secondOutputTreeSha256: digest(JSON.stringify(second)),
  inputSnapshotAndArticlePreservation: 'passed: source hashes, visible numeric literals, exact external citations, unchanged nonpublication prose, dedicated FAQ source excerpts',
  regressionTestOutputSha256: digest(testOutput),
  noExternalResearchRefresh: true, noSourceWorkbookRecalculation: true,
  outputHashes: second,
};
fs.writeFileSync(path.join(root, 'docs/scenarios-import-verification.json'), JSON.stringify(report) + '\n');
console.log(JSON.stringify({ status: report.status, comparedFiles: report.comparedFiles, outputTreeSha256: report.secondOutputTreeSha256, counts: report.counts }));
