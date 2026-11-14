#!/usr/bin/env node
// Build public scenario replay data from reviewed replay configs and the run skeletons
// extracted from the original DeTars runs.
//
//   node scripts/scenarios/build-replays.mjs <configs-dir> <skeleton-base-dir>
//
// <configs-dir> holds one <slug>.json per scenario (schema v2, see validate_config.py next to it);
// each config names its skeleton relative to <skeleton-base-dir>.
// Writes src/data/scenario-replays/<slug>.json (public: no workspace names, colleague ids or
// evidence quotes) and docs/scenario-replays-audit.json (repository evidence: which run each
// replay came from and the quote behind every key judgment). Only slugs that exist as
// published scenarios in that locale are written.
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const outDir = join(repo, "src/data/scenario-replays");
const auditPath = join(repo, "docs/scenario-replays-audit.json");
const articles = join(repo, "src/content/scenarios");

const sec = (v) => Math.max(0, Math.round(Number(v) || 0));
const activeStart = (x) => sec(x.startActiveSec ?? x.startSec);
const activeEnd = (x) => sec(x.endActiveSec ?? x.endSec);

export function buildReplay(config, skeleton) {
  // Number colleagues in reading order: by the phase they are shown in, then by start time.
  const order = new Map(skeleton.phases.map((p, i) => [p.index, i]));
  const workers = [...skeleton.workers].sort((a, b) =>
    (order.get(a.phaseIndex) ?? 99) - (order.get(b.phaseIndex) ?? 99) || activeStart(a) - activeStart(b));
  const ordinal = new Map(workers.map((w, i) => [w.id, i + 1]));
  // A phase the run planned but never timed (rewritten or left pending) is shown only when it
  // carries a key judgment or colleagues; it then sits at the end of the phase before it.
  const timed = (p) => (p.startActiveSec ?? p.startSec) != null && (p.endActiveSec ?? p.endSec) != null;
  const judged = (i) => Object.values(config.i18n).some((t) => t.phases[i]?.judgment);
  const keep = skeleton.phases.map((p, i) => timed(p) || judged(i) || workers.some((w) => w.phaseIndex === p.index));
  let lastEnd = 0;
  const phases = skeleton.phases.flatMap((p, i) => {
    if (!keep[i]) return [];
    const start = timed(p) ? activeStart(p) : lastEnd;
    const end = timed(p) ? activeEnd(p) : lastEnd;
    lastEnd = Math.max(lastEnd, end);
    return [{ start, end, index: p.index }];
  }).map(({ start, end, index }) => ({
    start,
    end,
    index,
    chips: config.chips?.[String(index)] ?? [],
    workers: workers.filter((w) => w.phaseIndex === index).map((w) => ({
      n: ordinal.get(w.id),
      minutes: Math.max(1, Math.round((activeEnd(w) - activeStart(w)) / 60)),
      parallel: (w.parallelWith ?? []).length > 0,
      review: w.role === "reviewer",
    })),
  }));
  const text = {};
  for (const [locale, t] of Object.entries(config.i18n)) {
    const lines = Object.fromEntries(t.workers.map((w) => [ordinal.get(w.id), w.line]));
    text[locale] = {
      askTitle: t.askTitle,
      runTitle: t.runTitle,
      fields: t.fields.map(({ key, label, value, placeholder }) => ({ key, label, value: value ?? "", ...(placeholder ? { placeholder } : {}) })),
      template: t.template,
      phases: t.phases.filter((_, i) => keep[i]).map(({ title, note, judgment }) => ({ title, ...(note ? { note } : {}), ...(judgment ? { judgment } : {}) })),
      workers: workers.map((w) => lines[ordinal.get(w.id)] ?? ""),
      chipNames: t.chipNames ?? {},
    };
  }
  // The one-line summary is computed here, not written per page, so every page counts the same way.
  // Searches and pages are only trustworthy when the run kept a full tool ledger; transcript-only runs
  // cannot see provider-side searches and undercount pages, so those counts are left out.
  const fullLedger = skeleton.run.ledger === "zst";
  const uniq = (kind, key) => new Set(skeleton.sources.filter((s) => s.kind === kind && s[key]).map((s) => s[key])).size;
  const stats = {
    searches: fullLedger ? uniq("search", "query") : null,
    pages: fullLedger ? uniq("read", "url") : null,
    colleagues: workers.length,
    parallel: workers.filter((w) => (w.parallelWith ?? []).length > 0 && w.role !== "reviewer").length,
    reviewer: workers.some((w) => w.role === "reviewer"),
  };
  return {
    slug: config.slug,
    startedAt: String(skeleton.run.startedAt ?? "").slice(0, 10),
    activeSec: sec(skeleton.run.activeSec ?? skeleton.run.durationSec),
    stats,
    phases: phases.map(({ index, ...rest }) => rest),
    text,
  };
}

function main() {
  const [configsArg, baseArg] = process.argv.slice(2);
  if (!configsArg || !baseArg) {
    console.error("usage: build-replays.mjs <configs-dir> <skeleton-base-dir>");
    process.exit(2);
  }
  const configsDir = resolve(configsArg);
  const base = resolve(baseArg);
  const files = readdirSync(configsDir).filter((f) => f.endsWith(".json") && !f.startsWith("_"));
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  const audit = {};
  let written = 0;
  for (const file of files.sort()) {
    const config = JSON.parse(readFileSync(join(configsDir, file), "utf8"));
    const skPath = isAbsolute(config.skeleton) ? config.skeleton : join(base, config.skeleton);
    const skeleton = JSON.parse(readFileSync(skPath, "utf8"));
    const replay = buildReplay(config, skeleton);
    for (const locale of Object.keys(replay.text)) {
      if (!existsSync(join(articles, locale, `${replay.slug}.md`))) delete replay.text[locale];
    }
    if (!Object.keys(replay.text).length) continue;
    writeFileSync(join(outDir, `${replay.slug}.json`), `${JSON.stringify(replay, null, 1)}\n`);
    audit[replay.slug] = {
      workspace: config.workspace,
      skeleton: basename(skPath),
      startedAt: skeleton.run.startedAt,
      judgmentEvidence: config.judgmentEvidence ?? {},
    };
    written += 1;
  }
  writeFileSync(auditPath, `${JSON.stringify(audit, null, 1)}\n`);
  console.log(`wrote ${written} replays to ${outDir}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
