# Abdelrahman Aziz — Portfolio

Personal portfolio single-page app: dark "cinematic neo-noir" theme, React 19 + TypeScript, built with Vite (rolldown-vite) and styled with Tailwind CSS v3.

## Stack

- **Framework:** React 19 (`react-router` v8 for routing)
- **Language:** TypeScript (strict, project references)
- **Styling:** Tailwind CSS v3 — semantic token palette in `tailwind.config.js`, component classes in `src/index.css` (see [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md))
- **Build:** `rolldown-vite` (pinned via `overrides` in `package.json`), route-level lazy splitting
- **Package manager:** npm (requires Node 20.19+ or 22.12+)

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server (http://localhost:5173)
npm run build     # SEO prebuild → tsc -b → vite build → SEO postbuild
npm run preview   # serve the production build locally
npm run lint      # ESLint (flat config, react-hooks + react-refresh)
```

## Routes

| Route | Page | Contents |
|---|---|---|
| `/` | Home | Hero → Featured projects → About → Contact |
| `/projects` | Projects | All projects, data-derived category filter |
| `/projects/:slug` | Project case study | Overview, gallery, tech stack, prev/next navigation |
| `/education` | Education & Certifications | Formal education, training, certifications |

Unknown routes redirect to `/`; an unknown project slug renders a no-index 404 inside the project layout.

## Architecture

```
src/
├── components/          # Shared UI (Header, Button, Card, common/ for dialog + SEO + ScrollToTop)
│   ├── common/          # useModalDialog/ImageLightbox (focus-trapped dialogs), Seo, JsonLd, ScrollToTop
│   ├── projects/        # Project cards, hero, gallery, links, navigation, grid
│   ├── certifications/  # Certification card/grid, certificate viewer
│   └── education/       # Timeline, education cards, training section
├── pages/               # Route compositions (Home, Projects, ProjectDetails, Education) + Home sections
├── data/                # Single sources of truth for all content (below)
├── types/               # TypeScript interfaces mirroring the data layer
├── services/            # contactService — posts the contact form to an endpoint
├── utils/               # seo.ts (runtime metadata), structuredData.ts (JSON-LD), contactValidation.ts
└── index.css            # Tailwind layers: tokens, typography helpers, focus/reduced-motion rules
```

### Data sources

| Content | Source of truth |
|---|---|
| Projects | `src/data/projects.ts` (+ helpers `getProjectBySlug`, `getFeaturedProjects`) |
| Education | `src/data/education.ts` |
| Certifications | `src/data/certifications.ts` |
| About / social links / skills | `src/data/portfolio.ts` |
| Site-wide SEO copy | `src/data/siteMeta.ts` |

Routes, cards, galleries, sitemap, and JSON-LD are all derived from these files — there is no second list to keep in sync.

## Adding a project

1. **Add the data** to `src/data/projects.ts`. Required fields: `id`, `slug`, `title`, `description`, `featured`, `technologies`, and the image/link fields you actually have. Optional fields (`category`, `year`, `duration`, `role`, `logo`, `heroImage`, `problem`, `solution`, `impact`, `challenges`, `features`, `images`, `links.live`, `links.github`, `links.store`, `stats`) are rendered only when present — never invent content to fill them.
2. **Add assets** under `public/images/projects/` (WebP preferred) and reference them by path.
3. **Pick a stable, URL-safe `slug`** — it becomes `/projects/<slug>` and feeds prev/next navigation and the sitemap.
4. **Build:** `npm run build` (the prebuild step regenerates `public/sitemap.xml` from the dataset).
5. **Verify** `/projects` (card + category filter) and `/projects/<slug>` (case study, navigation).

No component changes should be needed for a content-only addition.

## Adding education / training / certification entries

Append to `src/data/education.ts` or `src/data/certifications.ts`. Dates, certificate images, and verification URLs are optional; entries without images simply don't render the certificate viewer.

## Environment variables

Copy `.env.example` to `.env` (git-ignored). Both variables are optional and non-secret:

| Variable | Purpose |
|---|---|
| `VITE_CONTACT_FORM_ENDPOINT` | Public endpoint accepting a JSON POST of `{ name, email, message, source }`. Unset → the form validates normally but reports honestly that sending is unavailable and shows the direct email. It never claims a message was delivered. |
| `VITE_SITE_URL` | Production origin (no trailing slash). Used for canonical URLs, Open Graph, JSON-LD ids, `public/sitemap.xml`, and the `Sitemap:` line in `robots.txt`. Unset → the build skips absolute-URL artefacts with a warning; on Vercel/Netlify the provider's URL variable is used automatically. |

Never put secrets in `VITE_`-prefixed variables — they are embedded in the public bundle.

## SEO

- **Runtime:** `utils/seo.ts` + `Seo.tsx` per route (title, description, canonical, OG/Twitter), `utils/structuredData.ts` + `JsonLd.tsx` (Person/WebSite/CollectionPage/CreativeWork/Breadcrumb).
- **Build time:** `scripts/generate-seo.mjs` (`pre`/`post`) generates the sitemap from the project data, injects absolute canonical/OG tags into `dist/index.html`, and writes the production `robots.txt`. `index.html` carries a static copy of the global title/description for non-JS crawlers, kept in sync with `siteMeta` by a build check.
- `public/sitemap.xml` is generated, not hand-maintained, and is git-ignored.

## Deployment

Any static host works; the router is client-side, so the host must serve `index.html` for unknown paths (SPA fallback — Vercel/Netlify do this by default; bare static/nginx setups need a rewrite). Set `VITE_SITE_URL` to the production origin so canonical/OG/sitemap URLs are absolute. Output is plain `dist/` — no server runtime required.

