# Vemula Eshwar — Portfolio

A personal portfolio built with Vite + React + TypeScript + Tailwind CSS.

This repository showcases projects, skills, experience, and contact information. The site was recently updated with a dark (near-black) theme and a green accent, a glowing hero orb, and a generated SVG favicon.

---

## Live demo

- (Add your deployed URL here, e.g., `https://yourdomain.com`)

## Highlights

- Tech: Vite, React, TypeScript, Tailwind CSS
- Theme: Dark black background with green accent (Deloitte-like green)
- Hero: Animated particles and a decorative glowing orb
- Favicon: Inline SVG favicon + `public/favicon.svg` included
- Scripts: helper script to generate PNG/ICO favicons from the SVG

## Table of contents

- Features
- Local development
- Build & preview
- Favicons (generate PNG/ICO)
- Deployment
- Project structure
- Contribution & workflow
- Troubleshooting

You can deploy this repo to Vercel, Netlify, or any static host that supports Vite builds. Example with Vercel:

- Import the repo in Vercel
- Build Command: `npm run build`
- Output Directory: `dist`

## Recommended workflow

- Create a feature branch for larger changes:

```bash
git checkout -b feat/describe-change
# make changes, test locally
git add -A
git commit -m "feat: short description"
git push -u origin feat/describe-change
```

- Open a Pull Request on GitHub and request a review.

## Project structure (important files)

- `index.html` — app entry, meta tags, inline SVG favicon added
- `src/main.tsx` — React entry
- `src/App.tsx` — router + providers
- `src/components/` — UI components (Hero, About, Projects, etc.)
- `src/components/Hero.tsx` — hero canvas + orb (updated for green theme)
- `src/index.css` — theme tokens (root variables) and global styles (updated for dark black + green)
- `public/favicon.svg` — generated vector favicon
- `scripts/generate-favicons.js` — generate PNG/ICO from SVG

## What changed in the recent update

- Theme variables in `src/index.css` switched to a dark black base and green accent.
- `Hero.tsx` updated: particles and connection lines switched to green, particle density increased, and a decorative glowing orb was added.
- `public/favicon.svg` added and `index.html` updated with an inline SVG data-URL favicon for immediate effect.
- Added `scripts/generate-favicons.js` to create raster images from the SVG.

## Accessibility & performance notes

- Canvas animations are decorative. If you want to reduce CPU usage, lower the particle count in `src/components/Hero.tsx` or adjust opacity.
- SVG favicon is vector and very small — good for crisp rendering. Rasterization helps older browsers.

## Troubleshooting

- If styles look broken in your editor/linter, ensure Tailwind CSS is enabled in your editor and PostCSS/Tailwind plugins are installed. The repository uses Tailwind directives (e.g., `@tailwind base`).
- If `sharp` fails to install, check for missing native dependencies (see platform-specific notes above).
- If the favicon doesn't update in the browser, do a hard refresh or open an incognito window to avoid cache.

## Contributing

Contributions are welcome. Please open issues for feature requests or bugs and submit pull requests for changes. Follow the standard flow:
1. Fork the repo
2. Create a branch
3. Open a PR with a description of changes and screenshots (if UI changes)

## License

Add your license here (example):

MIT License — see LICENSE file for details.

## Contact

- Eshwar Vemula — add your email or social links here

---
        
