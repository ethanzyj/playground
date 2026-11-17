#!/usr/bin/env node
// Rewrites the ?v=<stamp> cache-busting suffix on every local module import,
// stylesheet link and script tag so browsers reload edited files.
// Usage: npm run bump-version [stamp]   (default: current UTC date-time)

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const stamp = process.argv[2] ?? new Date().toISOString().replace(/\D/g, "").slice(0, 12);

function* walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const importPattern = /((?:from|import)\s*\(?\s*["'])(\.{1,2}\/[^"'?]+\.mjs)(?:\?v=[^"']*)?(["'])/g;
const assetPattern = /(assets\/[^"'?]+\.(?:css|mjs))(?:\?v=[^"']*)?(["'])/g;

let changed = 0;
const targets = [join(root, "index.html"), ...[...walk(join(root, "assets"))].filter((path) => path.endsWith(".mjs"))];
for (const path of targets) {
  const before = readFileSync(path, "utf8");
  const after = path.endsWith(".html")
    ? before.replace(assetPattern, `$1?v=${stamp}$2`)
    : before.replace(importPattern, `$1$2?v=${stamp}$3`);
  if (after !== before) {
    writeFileSync(path, after);
    changed += 1;
  }
}
console.log(`Cache-busting stamp ${stamp} applied to ${changed} file(s).`);
