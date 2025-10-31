const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

async function generate() {
  const publicDir = path.join(__dirname, '..', 'public');
  const svgPath = path.join(publicDir, 'favicon.svg');

  if (!fs.existsSync(svgPath)) {
    console.error('favicon.svg not found at', svgPath);
    process.exit(2);
  }

  const sizes = [512, 192, 64, 32, 16];
  const pngPaths = [];

  const svgBuffer = fs.readFileSync(svgPath);

  for (const s of sizes) {
    const out = path.join(publicDir, `favicon-${s}.png`);
    await sharp(svgBuffer)
      .resize(s, s, { fit: 'contain' })
      .png({ quality: 90 })
      .toFile(out);
    console.log('Wrote', out);
    pngPaths.push(out);
  }

  // Copy 32 as the default favicon.png
  const defaultPng = path.join(publicDir, 'favicon.png');
  fs.copyFileSync(path.join(publicDir, 'favicon-32.png'), defaultPng);
  console.log('Copied', defaultPng);

  // Generate ICO using png-to-ico from 16,32,48 (use 16,32,64)
  const icoOut = path.join(publicDir, 'favicon.ico');
  const icoBuf = await pngToIco([path.join(publicDir, 'favicon-16.png'), path.join(publicDir, 'favicon-32.png'), path.join(publicDir, 'favicon-64.png')]);
  fs.writeFileSync(icoOut, icoBuf);
  console.log('Wrote', icoOut);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
