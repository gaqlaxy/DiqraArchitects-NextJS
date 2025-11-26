/**
 * optimize.js
 *
 * Converts raw JPG images into:
 *  - Optimized WebP images for production
 *  - Small blurred JPGs for Next.js placeholder usage
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";

const RAW_DIR = "./public/raw/gallery";
const OUT_MAIN = "./public/images/gallery";
const OUT_BLUR = "./public/blur/gallery";

// settings
const MAX_WIDTH = 1920; // resize large images
const WEBP_QUALITY = 70; // webp compression quality
const BLUR_WIDTH = 40; // blur thumbnail width

// ensure folders exist
function ensure(pathStr) {
  if (!fs.existsSync(pathStr)) fs.mkdirSync(pathStr, { recursive: true });
}

ensure(OUT_MAIN);
ensure(OUT_BLUR);

// run
async function optimizeImages() {
  const files = fs
    .readdirSync(RAW_DIR)
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`\n📦 Found ${files.length} images. Processing...\n`);

  for (const file of files) {
    const input = path.join(RAW_DIR, file);
    const baseName = file.replace(/\.[^/.]+$/, ""); // remove ext

    const outputWebp = path.join(OUT_MAIN, `${baseName}.webp`);
    const outputBlur = path.join(OUT_BLUR, `${baseName}.jpg`);

    // Create optimized WebP version
    await sharp(input)
      .resize({ width: MAX_WIDTH })
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputWebp);

    // Create blur preview
    await sharp(input)
      .resize({ width: BLUR_WIDTH })
      .jpeg({ quality: 30 })
      .toFile(outputBlur);

    console.log(`✔ Optimized: ${file} → ${baseName}.webp + blur.jpg`);
  }

  console.log("\n🎉 Done! Your gallery is optimized.\n");
}

optimizeImages();
