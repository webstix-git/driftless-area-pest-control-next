const sharp = require("sharp");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "images");
const bg2 = path.join(dir, "website bg 2.png");
const bg3 = path.join(dir, "website bg 3.png");
const out = path.join(dir, "website bg 2 clean.png");

async function main() {
  const { width: w, height: h } = await sharp(bg2).metadata();

  // Text lives in the lower portion. Replace that band with the matching
  // clean plate from website bg 3 (same dimensions / similar scene).
  const bandTop = Math.floor(h * 0.55);
  const bandHeight = h - bandTop;
  const fade = Math.floor(bandHeight * 0.35);

  const cleanBand = await sharp(bg3)
    .extract({ left: 0, top: bandTop, width: w, height: bandHeight })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = cleanBand;
  for (let y = 0; y < info.height; y++) {
    const a =
      y < fade ? Math.round(255 * (y / Math.max(1, fade - 1))) : 255;
    for (let x = 0; x < info.width; x++) {
      data[(y * info.width + x) * 4 + 3] = a;
    }
  }

  const maskedBand = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();

  await sharp(bg2)
    .composite([{ input: maskedBand, top: bandTop, left: 0 }])
    .png()
    .toFile(out);

  console.log("wrote", out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
