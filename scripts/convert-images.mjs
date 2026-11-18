/**
 * One-off asset pipeline: converts every non-webp raster image under
 * public/images to .webp (quality 80, alpha preserved), normalizes file
 * names to kebab-case, and deletes the original when conversion succeeds.
 *
 * Usage:
 *   node scripts/convert-images.mjs          # report planned conversions
 *   node scripts/convert-images.mjs --write  # write WebP copies
 *   node scripts/convert-images.mjs --delete-sources
 *
 * Source files are never deleted in the default mode. Deleting originals
 * requires an explicit opt-in flag and is intentionally excluded from normal
 * build and audit workflows.
 */
import sharp from "sharp";
import { existsSync, readdirSync, readFileSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../public/images", import.meta.url));
const writeEnabled = process.argv.includes("--write");
const deleteSources = process.argv.includes("--delete-sources");

if (deleteSources && !writeEnabled) {
  console.error("Refusing to delete sources without --write.");
  process.exit(1);
}

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
  const outName = `${toKebab(file.split(/[\\/]/).pop())}.webp`;
  const outDir = join(file, "..");
  const outPath = join(outDir, outName);

  if (!writeEnabled) {
    console.log(`Planned: ${file.replace(ROOT, "")} -> ${outName}`);
    continue;
  }
  if (existsSync(outPath)) {
    console.warn(`Skipped: ${outName} already exists.`);
    continue;
  }

  const input = readFileSync(file);
  await sharp(input).webp({ quality: 80, alphaQuality: 90 }).toFile(outPath);
  if (deleteSources) unlinkSync(file);
  console.log(`${file.replace(ROOT, "")} -> ${outName}`);
}

console.log(`Done: ${files.length} file(s) converted.`);
