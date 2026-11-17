#!/usr/bin/env node
// Usage: node tests/check-content-file.mjs assets/content/<file>.mjs [more files...]
// Validates the named exports of a content module against the shared schema and
// prints a summary. Exit code 1 means the file still has errors.

import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import {
  validateTopic,
  validateConcept,
  validateGlossaryEntry,
  validatePassage,
  validateProblem,
  validateEssayPrompt
} from "./lib/schema.mjs";
import { CONCEPT_TAXONOMY_BY_ID } from "../assets/taxonomy.mjs";

const files = process.argv.slice(2);
if (!files.length) {
  console.error("Usage: node tests/check-content-file.mjs assets/content/<file>.mjs");
  process.exit(2);
}

const KNOWN = new Set(["TOPIC", "CONCEPTS", "GLOSSARY_ENTRIES", "PASSAGES", "PROBLEMS", "ESSAY_PROMPTS"]);
let failed = false;

function tally(items, key) {
  const counts = {};
  for (const item of items) counts[item[key]] = (counts[item[key]] ?? 0) + 1;
  return Object.entries(counts).map(([name, count]) => `${name}:${count}`).join("  ");
}

for (const file of files) {
  const errors = [];
  let module;
  try {
    module = await import(pathToFileURL(resolve(file)).href);
  } catch (error) {
    console.error(`FAILED to import ${file}:\n  ${error.message}`);
    failed = true;
    continue;
  }
  for (const name of Object.keys(module)) {
    if (!KNOWN.has(name)) errors.push(`unexpected export "${name}" (allowed: ${[...KNOWN].join(", ")}).`);
  }
  const summary = [];

  if (module.TOPIC) {
    errors.push(...validateTopic(module.TOPIC));
    summary.push(`topic ${module.TOPIC.id}: ${module.TOPIC.concepts?.length ?? 0} concepts`);
  }
  if (module.CONCEPTS) {
    // A partial topic: concepts are validated against the taxonomy topic they belong to.
    const seen = new Set();
    for (const concept of module.CONCEPTS) {
      const meta = CONCEPT_TAXONOMY_BY_ID.get(concept?.id);
      errors.push(...validateConcept(concept, meta?.topicId));
      if (seen.has(concept?.id)) errors.push(`concept ${concept?.id}: duplicate in this file.`);
      seen.add(concept?.id);
    }
    summary.push(`concepts: ${module.CONCEPTS.length} (${module.CONCEPTS.map((concept) => concept?.id).join(", ")})`);
  }
  if (module.GLOSSARY_ENTRIES) {
    const seen = new Set();
    for (const entry of module.GLOSSARY_ENTRIES) {
      errors.push(...validateGlossaryEntry(entry));
      const key = String(entry?.en).toLowerCase();
      if (seen.has(key)) errors.push(`glossary "${entry?.en}": duplicate entry in this file.`);
      seen.add(key);
    }
    summary.push(`glossary: ${module.GLOSSARY_ENTRIES.length} entries (${tally(module.GLOSSARY_ENTRIES, "kind")})`);
    const vocab = module.GLOSSARY_ENTRIES.filter((entry) => entry.kind === "vocab");
    if (vocab.length) summary.push(`vocab levels: ${tally(vocab, "level")}`);
  }
  const passagesById = new Map();
  if (module.PASSAGES) {
    for (const passage of module.PASSAGES) {
      errors.push(...validatePassage(passage));
      if (passagesById.has(passage.id)) errors.push(`passage ${passage.id}: duplicate id.`);
      passagesById.set(passage.id, passage);
    }
    summary.push(`passages: ${module.PASSAGES.length} (${tally(module.PASSAGES, "level")})`);
  }
  if (module.PROBLEMS) {
    const seen = new Set();
    for (const problem of module.PROBLEMS) {
      errors.push(...validateProblem(problem, { passagesById }));
      if (seen.has(problem.id)) errors.push(`problem ${problem.id}: duplicate id.`);
      seen.add(problem.id);
    }
    const answers = [0, 1, 2, 3].map((index) => module.PROBLEMS.filter((problem) => problem.answer === index).length);
    summary.push(`problems: ${module.PROBLEMS.length}`);
    summary.push(`  by level: ${tally(module.PROBLEMS, "level")}`);
    summary.push(`  by difficulty: ${tally(module.PROBLEMS, "difficulty")}`);
    summary.push(`  by type: ${tally(module.PROBLEMS, "type")}`);
    summary.push(`  answer positions A/B/C/D: ${answers.join("/")}`);
    const figures = module.PROBLEMS.filter((problem) => problem.figure).length;
    if (figures) summary.push(`  with figures: ${figures}`);
    const concepts = {};
    for (const problem of module.PROBLEMS) for (const id of problem.conceptIds ?? []) concepts[id] = (concepts[id] ?? 0) + 1;
    summary.push(`  concept tags: ${Object.entries(concepts).map(([id, count]) => `${id}:${count}`).join(" ")}`);
    if (module.PASSAGES) {
      for (const passage of module.PASSAGES) {
        const count = module.PROBLEMS.filter((problem) => problem.passageId === passage.id).length;
        if (count < 4 || count > 7) errors.push(`passage ${passage.id}: has ${count} questions (expected 5-6).`);
      }
    }
  }
  if (module.ESSAY_PROMPTS) {
    const seen = new Set();
    for (const prompt of module.ESSAY_PROMPTS) {
      errors.push(...validateEssayPrompt(prompt));
      if (seen.has(prompt.id)) errors.push(`essay prompt ${prompt.id}: duplicate id.`);
      seen.add(prompt.id);
    }
    summary.push(`essay prompts: ${module.ESSAY_PROMPTS.length} (${tally(module.ESSAY_PROMPTS, "level")})`);
  }
  if (!Object.keys(module).some((name) => KNOWN.has(name))) errors.push("no recognised exports found.");

  console.log(`\n${file}`);
  for (const line of summary) console.log(`  ${line}`);
  if (errors.length) {
    failed = true;
    console.log(`  ${errors.length} error(s):`);
    for (const error of errors.slice(0, 80)) console.log(`   - ${error}`);
    if (errors.length > 80) console.log(`   ... and ${errors.length - 80} more`);
  } else {
    console.log("  OK - no schema errors.");
  }
}

process.exit(failed ? 1 : 0);
