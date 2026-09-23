/**
 * One-off asset pipeline: converts every non-webp raster image under
 * public/images to .webp (quality 80, alpha preserved), normalizes file
 * names to kebab-case, and deletes the original when conversion succeeds.
 *
 * Usage: node scripts/convert-images.mjs
 */
import sharp from "sharp";
import { readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const ROOT = new URL("../public/images", import.meta.url).pathname;

const toKebab = (name) =>
  name
    .replace(/\.[^.]+$/, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const files = walk(ROOT).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const outName = `${toKebab(file.split("/").pop())}.webp`;
  const outPath = join(file, "..", outName);
  const input = readFileSync(file);
  await sharp(input).webp({ quality: 80, alphaQuality: 90 }).toFile(outPath);
  unlinkSync(file);
  console.log(`${file.replace(ROOT, "")} -> ${outName}`);
}

console.log(`Done: ${files.length} file(s) converted.`);
