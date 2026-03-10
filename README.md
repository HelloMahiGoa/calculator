# Calculators.digital

Mobile-first calculator website with a **real calculator look and feel**.

## Live calculators

- **Basic** (`/basic`): Real keypad, step-by-step and expression (PEMDAS) modes, backspace, percent, memory (MC/MR/M+/M-), repeat equals, history tape (localStorage), copy/share, haptics and sound toggles, rounding controls.

## Dev

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Home is the hub (search + favorites); `/basic` is the full calculator with bottom nav.

## Build

```bash
npm run build
npm start
```

## SEO & ads

- **Sitemap** and **robots** are generated (`/sitemap.xml`, `/robots.txt`). JSON-LD: WebSite (root), SoftwareApplication + BreadcrumbList on calculator pages.
- **Ads**: Consent-ready placeholder in `src/components/ads/AdSlot.tsx`. Set `NEXT_PUBLIC_ADS_ENABLED=1` and `NEXT_PUBLIC_ADSENSE_CLIENT_ID` to enable; integrate with your CMP for consent.

## Performance

- Mobile-first layout, large touch targets, safe-area padding. Result announced to screen readers on equals only. For Core Web Vitals, run Lighthouse on `/basic`; keep dependencies minimal and avoid layout thrash in the calculator reducer.

## Project structure

- `src/app/page.tsx` – Hub (search, calculator tiles, favorites).
- `src/app/basic/page.tsx` – Basic calculator page + BottomNav.
- `src/app/layout.tsx` – Root layout, metadata, WebSite JSON-LD.
- `src/components/calculator/BasicCalculator.tsx` – Calculator UI and logic.
- `src/components/layout/Header.tsx`, `BottomNav.tsx`, `HubCards.tsx`.
- `src/lib/favorites.ts` – Favorites (localStorage).
- `src/app/globals.css` – Theme and calculator shell styles.
