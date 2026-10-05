import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validateKnowledge } from "./validate-knowledge.mjs";
const value = JSON.parse(await readFile(new URL("../public/knowledge.json", import.meta.url), "utf8"));
test("public bundle is bounded and valid", () => {
  assert.equal(validateKnowledge(value), value);
  assert.equal(value.documents.length, 2);
});
test("reject unsafe, missing, duplicate, malformed Unicode, oversized and unknown-link bundles", () => {
  for (const bad of [
    null, [], { ...value, schemaVersion: 2 }, { ...value, scope: [] },
    { ...value, documents: [{...value.documents[0], key:"../escape"}] },
    { ...value, documents: [...value.documents, ...value.documents] },
    { ...value, summaries: [{...value.summaries[0], key:"unknown"}] },
    { ...value, summaries: [{...value.summaries[0], priority:0.5}] },
    { ...value, indexMarkdown:"{{doc:unknown}}" }, { ...value, indexMarkdown:"{{wrong}}" },
    { ...value, scope:["bad\ud800"] },
    { ...value, documents:[{...value.documents[0], sourceUrl:"file:///bad"}] },
    { ...value, documents:[{...value.documents[0], markdown:"x".repeat(65 * 1024)}] },
  ]) assert.throws(() => validateKnowledge(bad));
  assert.throws(() => validateKnowledge(value, 256 * 1024 + 1));
});
