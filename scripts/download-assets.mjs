import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

const BASE = "https://cdn.prod.website-files.com/66a8e5ccd2c6460e01d4d385";

const assets = [
  // Logo images (partner companies)
  { url: `${BASE}/6878c3b63ec04e2623da275b_L%27Ore%CC%81al%20logo%20300x54.avif`, dest: "public/images/logos/loreal.avif" },
  { url: `${BASE}/684fef71b823c32638c5d54a_Ipsen%20-%20Colour%20logo%20small.avif`, dest: "public/images/logos/ipsen.avif" },
  { url: `${BASE}/69a581fb792500ce0c0dc892_bf749777a3577432287d345396cd25d5_Lupin%20logo%20-%20Colour%20small.png`, dest: "public/images/logos/lupin.png" },
  { url: `${BASE}/684fef71e377ecb5717d240c_Kyowa%20Kirin%20-%20Colour%20small.avif`, dest: "public/images/logos/kyowa-kirin.avif" },
  { url: `${BASE}/68c2a46e09086bfb97c69f3a_Teva%20Logo%20(Website)%20small%202.avif`, dest: "public/images/logos/teva.avif" },
  { url: `${BASE}/684fef7102e0f7ae239cee4a_UCB%20logo%20-%20Colour%20small.avif`, dest: "public/images/logos/ucb.avif" },
  { url: `${BASE}/684fef7178c76d8c3786a56f_Eisai%20logo%20-%20Colour%20small.avif`, dest: "public/images/logos/eisai.avif" },
  { url: `${BASE}/684fef718a8874042e55716b_ProQR%20logo%20-%20Colour%20small.avif`, dest: "public/images/logos/proqr.avif" },
  { url: `${BASE}/684fef71bea479834e3ce1bc_Scripps%20Research%20logo%20-%20Colour%20small.avif`, dest: "public/images/logos/scripps.avif" },

  // Platform tab images
  { url: `${BASE}/69ce5fb05768ba6da5c94cb8_Radar%20map.svg`, dest: "public/images/platform/radar-map.svg" },
  { url: `${BASE}/671a5f21dad8418359eeda62_Group%202072750237.avif`, dest: "public/images/platform/platform-screenshot.avif" },

  // Use case thumbnails
  { url: `${BASE}/6718b1f7fe53b70246be88ff_use-case-thumb.avif`, dest: "public/images/use-cases/target-identification.avif" },
  { url: `${BASE}/6718c2967f48cce2a618d569_Frame%201707479210.avif`, dest: "public/images/use-cases/novel-indications.avif" },
  { url: `${BASE}/6718c2967f48cce2a618d569_Frame%201707479210.avif`, dest: "public/images/use-cases/regulatory-filings.avif" },

  // Why Causaly icons
  { url: `${BASE}/671cb84fd7a4eaad68e5a9a3_continuity-icon.avif`, dest: "public/images/icons/continuity.avif" },

  // Favicon
  { url: `${BASE}/6717b58e9d72e44f9f95ccc8_Favicon%2032.png`, dest: "public/seo/favicon-32.png" },
  { url: `${BASE}/6717b5923036091af58ef843_Favicon%20256.png`, dest: "public/seo/favicon-256.png" },
];

async function downloadFile(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    const fileStream = fs.createWriteStream(dest);
    await pipeline(res.body, fileStream);
    console.log(`✓ ${dest}`);
  } catch (err) {
    console.error(`✗ ${dest}: ${err.message}`);
  }
}

async function main() {
  console.log(`Downloading ${assets.length} assets...`);
  // Download 4 at a time
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map(a => downloadFile(a.url, a.dest)));
  }
  console.log("Done!");
}

main();
