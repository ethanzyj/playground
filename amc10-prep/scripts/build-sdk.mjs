import { build } from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const result = await build({
  entryPoints: [join(root, "node_modules/@supabase/supabase-js/dist/module/index.js")],
  bundle: true, format: "esm", platform: "browser", minify: true, metafile: true,
  outfile: join(root, "assets/vendor/supabase.mjs")
});
const licenses = new Map();
for (const input of Object.keys(result.metafile.inputs)) {
  if (!input.includes("node_modules/")) continue;
  let directory = dirname(join(process.cwd(), input));
  while (directory.startsWith(join(root, "node_modules"))) {
    try {
      const pkg = JSON.parse(readFileSync(join(directory, "package.json"), "utf8"));
      let license = ["LICENSE", "LICENSE.md", "LICENSE.txt"].map((name) => {
        try { return readFileSync(join(directory, name), "utf8"); }
        catch (error) { if (error.code !== "ENOENT") throw error; return null; }
      }).find(Boolean);
      // Supabase's published packages omit the monorepo's MIT license file.
      if (!license && pkg.name.startsWith("@supabase/") && pkg.version === "2.80.0") {
        license = readFileSync(join(root, "scripts/supabase-LICENSE.txt"), "utf8");
      }
      if (!license) throw new Error(`Missing license for bundled dependency ${pkg.name}`);
      licenses.set(pkg.name, `${pkg.name} ${pkg.version}\n\n${license.replace(/\r\n/g, "\n")}`);
      break;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      directory = dirname(directory);
    }
  }
}
writeFileSync(join(root, "assets/vendor/THIRD_PARTY_LICENSES.txt"), [...licenses.values()].join("\n\n---\n\n"));
