# Prince Yvon — Portfolio

A deployable React 19 + Vite + Tailwind portfolio site with an editorial visual system, responsive navigation, light/dark theme switching, case-study modals, CV experience sections, AI works links, and screenshot galleries for internal operations systems.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open the local Vite URL shown in the terminal.

## Verify and build

```bash
pnpm check
pnpm build
```

## Content locations

- Main page: `client/src/pages/Home.tsx`
- Design system and responsive styles: `client/src/index.css`
- Page metadata: `client/index.html`
- Product screenshots: `client/public/screenshots/`
- Favicon: `client/public/favicon.svg`

The AI works section contains public links for Rugmosiac, Volta10, Kigali Rentals, and Ijuru. Internal or in-progress systems use email-based access and preview requests. The supplied product screenshots are included in the public assets so the ZIP is self-contained.
