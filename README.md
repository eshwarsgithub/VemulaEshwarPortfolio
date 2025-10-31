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
- License & contact

## Features

- Responsive, accessible portfolio layout
- Animated hero background (canvas) with green particles & connection lines
- Decorative SVG orb with subtle pulse animation
- Dark theme using CSS variables in `src/index.css`, easy to adjust
- Inline SVG favicon in `index.html` and `public/favicon.svg` included for future rasterization

## Local development

### Prerequisites

- Node.js (LTS recommended, e.g., 18+)
- npm (or use pnpm/yarn if you prefer)

### Install dependencies:

```bash
# from repo root (macOS / zsh)
npm install
```

### Run the dev server:

```bash
npm run dev
```

Open the Vite URL (typically `http://localhost:5173`) and verify the theme and favicon.

## Build & preview

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Favicons — generate PNG and ICO files

An SVG favicon is included at `public/favicon.svg`. If you want raster PNG and `.ico` variants (recommended for legacy support), there is a helper Node script:

1. Install rasterization dependencies:

```bash
npm install --save-dev sharp png-to-ico
```

2. Run the generator:

```bash
node scripts/generate-favicons.js
```

This will create:
- `public/favicon-512.png`
- `public/favicon-64.png`
- `public/favicon-32.png`
- `public/favicon-16.png`
- `public/favicon.ico`
- and copy `public/favicon-32.png` to `public/favicon.png` (used by `index.html`)

> Note: On macOS you may need to install native build tools for `sharp`. If installation fails, follow the platform-specific instructions in the `sharp` docs or install dependencies via Homebrew.

## Deployment

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
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a9c818ac-b8aa-4bf8-88e1-549c37a69588

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a9c818ac-b8aa-4bf8-88e1-549c37a69588) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a9c818ac-b8aa-4bf8-88e1-549c37a69588) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
