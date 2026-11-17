import { build } from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";

const result = await build({
  stdin: { contents: 'export { jsPDF } from "jspdf"; export { default as html2canvas } from "html2canvas";', resolveDir: process.cwd() },
  bundle: true, format: "esm", platform: "browser", minify: true, metafile: true,
  outfile: "assets/vendor/quest-pdf.mjs",
  external: ["canvg", "dompurify"]
});
const directories = [...new Set(Object.keys(result.metafile.inputs)
  .map((input) => input.match(/^node_modules\/(?:@[^/]+\/)?[^/]+/)?.[0]).filter(Boolean))].sort();
const licenses = directories.map((directory) => {
  const pkg = JSON.parse(readFileSync(`${directory}/package.json`, "utf8"));
  const license = ["LICENSE", "LICENSE.md", "LICENSE.txt"].map((file) => {
    try { return readFileSync(`${directory}/${file}`, "utf8"); }
    catch (error) { if (error.code !== "ENOENT") throw error; return null; }
  }).find(Boolean);
  if (!license) throw new Error(`Missing license for ${pkg.name}`);
  return `${pkg.name} ${pkg.version}\n\n${license}`;
});
writeFileSync("assets/vendor/PDF_LICENSES.txt", licenses.join("\n\n---\n\n"));
