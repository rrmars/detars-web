#!/usr/bin/env node
// Open a research-report PR. The research pack writes its report file(s) into
// src/content/research/<locale>/<slug>.md (see site-pack 17 for the frontmatter
// contract), then calls this script. It branches, commits, pushes, and opens a
// PR with the review-gate checklist — it never merges. Human + review-council
// approve at the PR gate.
//
// Usage:
//   node scripts/open-report-pr.mjs --slug own-your-ai --title "After Rewind…" [--locale en,zh]
//
// Auth: relies on the machine's git + gh credentials. For an autonomous loop,
// use a fine-grained PAT scoped to this repo (Contents + Pull requests: write)
// exported as GH_TOKEN / GITHUB_TOKEN, not a full personal login.
import { execFileSync } from "node:child_process";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]?.startsWith("--") ? "true" : arr[i + 1]]);
    return acc;
  }, [])
);

const slug = args.slug;
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error("error: --slug <kebab-case> is required");
  process.exit(2);
}
const title = args.title || `report: ${slug}`;
const locales = (args.locale || "en,zh").split(",").map((s) => s.trim()).filter(Boolean);

const git = (...a) => execFileSync("git", a, { encoding: "utf8" }).trim();
const gh = (...a) => execFileSync("gh", a, { encoding: "utf8" }).trim();

// Refuse to run unless there are staged-able research changes.
const status = git("status", "--porcelain", "src/content/research");
if (!status) {
  console.error("error: no changes under src/content/research — write the report file first");
  process.exit(1);
}

const branch = `report/${slug}`;
const base = "main";

git("checkout", "-B", branch);
git("add", "src/content/research");
git("commit", "-m", title, "-m", "Opened by the DeTars research pack. Review gate: see PR checklist.");
git("push", "-u", "origin", branch, "--force-with-lease");

const body = [
  `## Report`,
  ``,
  `- Slug: \`${slug}\``,
  `- Locale(s): ${locales.join(" / ")}`,
  `- Title: ${title}`,
  ``,
  `_Opened automatically by the research pack. Do not merge until the review gate below passes._`,
  ``,
  `## Review gate (all required before merge)`,
  ``,
  `- [ ] Completion receipt — deliverable present, claims backed`,
  `- [ ] Citations sealed — every source content-hashed`,
  `- [ ] Peer review — review-council pass recorded`,
  `- [ ] Human check — a person read it end to end`,
  `- [ ] Original value — not a duplicate of an existing report`,
  `- [ ] Honest boundaries respected`,
  `- [ ] \`draft: false\` only when all the above are true`
].join("\n");

const url = gh("pr", "create", "--base", base, "--head", branch, "--title", title, "--body", body);
console.log(`PR opened: ${url}`);
