# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no automated tests in this project.

## Architecture

Next.js 14 App Router project (TypeScript + Tailwind CSS). All source code lives under `src/app/`.

### Page structure

Each route is a folder under `src/app/` with a `page.tsx` file that imports and composes components from `src/app/components/`. Pages are Server Components by default; add `'use client'` only when `useState`, `useEffect`, or browser APIs are needed.

Key pages: `/` (home), `/about`, `/dev`, `/iniciativas`, `/eventos`, `/sorteios`, `/publicidade`, `/devs40mais`, `/newsletter`.

### Layout & Header

`layout.tsx` is the root layout — it wraps every page with `<Header />` and `<SimpleFooter />`, injects schema.org structured data (Person + WebSite), and loads the RD Station marketing script. The `<Header>` is **absolutely positioned** (`absolute inset-x-0 top-0 z-50`) and transparent — it overlays the page hero. **Never add a background color to header.tsx**, as it affects all pages. If a specific page needs the nav to be readable over a dark hero, fix it in that page's component (e.g. use a lighter hero background or add a spacer).

### Components

All reusable UI blocks are in `src/app/components/`. Notable ones:

- `header.tsx` — global nav with mobile dialog (HeadlessUI). Navigation links are hardcoded in a `navigation` array at the top of the file.
- `hero.tsx` — home page hero with badge, headline and CTA buttons.
- `featured.tsx` — home page "about" section with scroll-triggered Intersection Observer animations.
- `HomeHighlights.tsx` — home page highlights grid: upcoming event banner, community cards (Orgulho Tech, Devs 40+), content cards (Substack, Medium, Alura).
- `Events.tsx` — full events page (`'use client'`). Upcoming and past events are hardcoded arrays inside the component. Past events use `useState` + slice for "Carregar Mais" pagination. To add/edit events, update the `upcomingEvents` or `pastEvents` arrays directly. Keep `upcomingEvents` sorted ascending by date.

### API Route

`src/app/api/sorteios/route.ts` — POST endpoint that writes raffle registrations to a Google Sheets spreadsheet via the Google Sheets API (service account auth). Requires 7 environment variables (see below).

### Environment Variables

Copy `env.example` to `.env.local` and fill in:

```
GOOGLE_PROJECT_ID
GOOGLE_PRIVATE_KEY_ID
GOOGLE_PRIVATE_KEY
GOOGLE_CLIENT_EMAIL
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_X509_CERT_URL
GOOGLE_SPREADSHEET_ID
```

See `GOOGLE_SHEETS_SETUP.md` for setup instructions and `DEPLOY.md` for Vercel deployment.

### Styling conventions

- Tailwind utility classes only — no separate CSS files beyond `globals.css`.
- Custom animations defined in Tailwind config: `animate-fade-in-down`, `animate-fade-in-up`, `animate-pulse-slow`, `animation-delay-*`.
- Use `transition-all duration-300` for hover effects; `hover:scale-105` for interactive lift.

### Branching

Active feature branch: `eventos` (events page work). `main` is production.
