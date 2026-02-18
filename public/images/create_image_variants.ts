import fs from "fs";
import path from "path";
import sharp from "sharp";

const images = ["wshu.png", "szakmabemutato.png", "osztv-szktv.png", "nak.png"].sort();

function getCombinations<T>(arr: T[]): T[][] {
  const result: T[][] = [];
  const f = (start: number, current: T[]) => {
    for (let i = start; i < arr.length; i++) {
      const next = [...current, arr[i]];
      if (next.length >= 2) {
        result.push(next);
      }
      f(i + 1, next);
    }
  };
  f(0, []);
  return result;
}

async function main() {
  // Determine the directory where images are located.
  // Try standard locations: relative to CWD, or assume CWD is the images dir if files exist there.
  let imagesDir = process.cwd();

  // Check if we are at project root and need to go into public/images
  if (fs.existsSync(path.join(process.cwd(), "public", "images", images[0]))) {
    imagesDir = path.join(process.cwd(), "public", "images");
  } else if (fs.existsSync(path.join(process.cwd(), images[0]))) {
    // current directory is correct
    imagesDir = process.cwd();
  } else {
    console.error(
      "Could not locate images. Please run this script from the project root or the public/images directory."
    );
    process.exit(1);
  }

  console.log(`Using images from: ${imagesDir}`);

  const combinations = getCombinations(images);
  console.log(`Generating ${combinations.length} combinations...`);

  for (const combo of combinations) {
    // Generate output filename
    // Filter out extensions for the name construction
    const baseNames = combo.map((img) => path.parse(img).name);
    const outputName = baseNames.join("_") + ".png";
    const outputPath = path.join(imagesDir, outputName);

    // Check if output file already exists (optional, but good to overwrite)

    const width = combo.length * 200;
    const height = 200;

    // Prepare composite operations
    const composites = combo.map((imgName, index) => ({
      input: path.join(imagesDir, imgName),
      left: index * 200,
      top: 0,
    }));

    try {
      await sharp({
        create: {
          width: width,
          height: height,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        },
      })
        .composite(composites)
        .toFile(outputPath);

      console.log(`Created: ${outputName}`);
    } catch (error) {
      console.error(`Error creating ${outputName}:`, error);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
