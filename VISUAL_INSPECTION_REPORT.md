# Phase 0 — Environment Setup & Visual Inspection

**Inspection date:** 2026-11-17  
**Scope:** Existing React + TypeScript portfolio; no application-source changes made.

## 1. Environment and verification

- `package.json` defines `dev`, `build` (TypeScript plus Vite, with SEO pre/post steps), `lint`, and `preview`. Runtime dependencies are React 19, React DOM 19, and React Router 8.4.0; development dependencies include TypeScript, Tailwind CSS 3, Vite/Rolldown, ESLint, and Sharp.
- Initial state had no `node_modules`. `npm ci` installed 253 packages from the existing lockfile. The `package.json` and `package-lock.json` hashes remained unchanged.
- Environment: Node `v22.20.0`, npm `10.9.3`. `react-router@8.4.0` declares Node `>=22.22.0`; npm warned that the current Node version is below that requirement. The dev server and build nevertheless ran successfully here. Use a supported Node version before relying on CI or deployment behavior.
- `npm run build` passed, including `tsc -b` and Vite production bundling. Build output was 139 transformed modules; the main JavaScript chunk was 314.43 kB (98.91 kB gzip). Since no production site URL was configured, the SEO scripts intentionally skipped the sitemap and absolute canonical/social metadata.
- `npm run lint` passed. Both commands emitted stale browser-data notices; Browserslist data was reported as 12 months old.
- `npm ci` reported 16 dependency advisories (1 low, 4 moderate, 11 high). This installation output does not identify their production impact; review the dependency audit separately before release.

## 2. Route and viewport matrix

All four routes were loaded at CSS viewport widths **1440, 1280, 768, 390, and 360 px**, at a 900 px test height for the route sweep. No horizontal document overflow was detected at any tested route/width. No failed local images were detected in the route sweep; lazy gallery images loaded when scrolled into view.

| Route | Content observed | Responsive behavior |
|---|---|---|
| `/` | Hero, four featured projects, About/Experience, Contact, footer | Two-column hero at desktop; stacked layout at mobile. At 390 px, the hero is about 1,254 px tall: the portrait starts around y=989, below the initial 844 px viewport. |
| `/projects` | Seven project cards and All/Web/Mobile filters | Three columns at desktop, two at the 768 px `md` breakpoint, one at mobile. At mobile, cards initially remain invisible until the tall grid is scrolled further; see findings. |
| `/projects/:slug` | Representative detail inspected: `/projects/link-land-archive`; also checked `/projects/examify` in the route sweep | Detail hero becomes a vertical stack at mobile; long-form sections and gallery remain single-column without horizontal overflow. |
| `/education` | Education timeline, professional training cards, certificate cards | Training/certificate grids collapse to one column on mobile; education entries remain on a vertical timeline. The page title/eyebrow is very close to the fixed mobile header. |

### Actual visual descriptions

- **Home, desktop:** dark violet/near-black screen with a fixed navigation bar, wordmark, centered links, and a violet résumé button. The hero is a two-column composition with a large gradient name/title on the left and a circular headshot on the right. CTAs, experience/project counts, and a stack chip panel sit below the summary. Featured work follows the full-height hero.
- **Home, mobile:** header reduces to the circular “AA” mark and hamburger. Hero content is stacked; the role wraps to two lines and the CTAs stack vertically. Counts fit on one row, but the stack panel and portrait fall below the first screen. There is no horizontal overflow at 390 or 360 px.
- **Projects, desktop:** centered page title and category chips precede a three-column set of dark cards. Each card has a large gradient-backed image area, metadata chips, description, technology pills, and actions. The ExamiFY image is a tiny icon in that large panel; Link uses an actual app screen; SWNW displays a square logo with a tooth mark. This makes the visual treatment inconsistent and leaves the ExamiFY panel largely empty.
- **Projects, mobile:** title and filter chips fit the viewport, but after the filters there is a large blank region where the cards should appear. This is not just spacing: the 4,175 px-tall grid wrapper has the `reveal-hidden` class at the initial position. Scrolling the wrapper toward the center triggers its reveal and makes the cards appear. At the 360 px width, the same reveal threshold remains a risk; no horizontal overflow was found.
- **Project detail, desktop:** Link has a back link, a two-column hero with brand image and title/role/summary, followed by a narrower editorial column for overview, technologies, features, challenges, gallery, key numbers, and next/previous navigation. The style is consistent with the rest of the site. The visual sections are clear, but the very long feature/challenge lists make the page lengthy.
- **Project detail, mobile:** the summary and logo stack vertically; section text, tags, and gallery fit the viewport. Gallery images are lazy-loaded, then display as a single column. No horizontal overflow was found at 390/360 px.
- **Education, mobile:** dark single-column page with a vertical education rail, training cards, and certificate cards. Long institution names wrap naturally. In the screenshot, the “Background” eyebrow begins almost directly under—and appears partly clipped by—the fixed header. No horizontal overflow was found.

## 3. Interactions and links tested

- **Project filters:** All displays seven cards. Web correctly filters to ExamiFY and SoundJoy (two cards); category controls expose `aria-pressed`.
- **Mobile menu:** opens, exposes the résumé link, closes with Escape, and returns focus to the menu control.
- **Contact navigation:** confirmed broken from `/projects`: clicking the header’s Contact link leaves the user at `/projects#contact`, where no `#contact` target exists. The route remains on Projects at the top. The same relative-fragment construction is used for About/Contact footer links and the mobile menu.
- **Project gallery:** opening a Link screenshot shows a labelled dialog; Escape closes it and focus returns to the image trigger.
- **Certificate viewer:** opens a labelled dialog; Escape closes it and focus returns to its trigger.
- **Contact form:** empty submit focuses the Name field and gives inline validation. A valid test submission displays an honest “not connected” error and direct-email fallback; no success state is shown. The local checkout has no `.env`, so the form endpoint is not configured in this environment.
- **CV:** `GET /assets/Abdelrahman%20Aziz%20CV.pdf` returned `200 application/pdf` (157,242 bytes). The file is a two-page résumé. The header link carries both `download` and `target="_blank"`; verify that this combined behavior is intentional in target browsers.
- **External URLs:** the ExamiFY and SoundJoy demos, listed GitHub repositories, and GitHub profile returned HTTP 200 on HEAD requests. LinkedIn returned 405 for HEAD and 999 for GET in this inspection environment, so its availability could not be established; these responses may reflect anti-automation controls rather than a broken profile.

## 4. Issues to carry into later phases

### Must address

1. **Mobile project grid can appear blank until the user scrolls.** The `/projects` route wraps the entire tall grid in one `RevealOnScroll`; its 12% intersection threshold is difficult to meet on mobile. At 390 px the hidden wrapper measured 4,175 px tall. Fix the reveal strategy or reveal smaller children, then retest initial visibility at 360/390 px.
2. **Contact/About links do not navigate to home sections from secondary routes.** Header and footer use bare `#contact`/`#about` fragments. Clicking Contact on `/projects` was verified to produce `/projects#contact` with no target. Route these links to the correct page/section and test desktop and mobile navigation.
3. **Mobile page headings are too close to the fixed header.** Projects and Education section padding is 64 px at small widths while the fixed header measures about 73 px; the eyebrow text appears clipped/overlapped at the top. Add adequate scroll/top offset and verify screenshots at 360/390 px.
4. **The contact form cannot deliver in this checkout.** No endpoint is configured. Keep the existing honest fallback, but configure and verify the production endpoint or make email the clear primary action.

### Should address

5. **ExamiFY’s card image is visibly undersized.** Its asset is a 40×40 SVG placed in a 176 px-tall card image panel. Replace it with a real product preview or size the brand mark intentionally.
6. **Project visual evidence is uneven.** Link has five application screenshots and SoundJoy has a gallery, while SWNW uses a logo as its hero image and Food Delivery/HomeHand have no gallery assets. Prefer product screens; keep logos as secondary brand marks.
7. **Résumé link behavior should be confirmed.** It is reachable and returns a PDF, but uses `download` with `target="_blank"` simultaneously.
8. **LinkedIn availability remains unverified.** HEAD/GET responses were nonstandard; verify the destination manually in a normal browser.
9. **Node runtime does not meet the declared React Router engine.** Pin the development/CI runtime to Node 22.22 or later before release, even though dev/build succeeded on 22.20 in this environment.
10. **Resolve dependency advisories.** Installation reported 16 advisories, including 11 high; determine whether affected packages are production or development dependencies without changing versions as part of this phase.
11. **Design-system docs reference a missing token file.** [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) refers to `src/design/theme.ts`, which is absent from the inspected source tree. Correct the documentation or restore the intended file in a later scoped change.
12. **No production URL is configured for the build.** The build succeeds, but skips the sitemap and absolute canonical/social metadata; ensure the deployment environment provides `VITE_SITE_URL` or a supported hosting URL.

## 5. Design system to preserve

The current interface is a **dark cinematic/neo-noir system** rather than a generic light portfolio. Keep its distinguishing choices while addressing hierarchy and content:

- **Core colors** in [tailwind.config.js](./tailwind.config.js): surface `#141218`; layered dark surfaces `#1d1b20`, `#211f24`, `#2b292f`; primary violet `#cfbcff` with container `#6750a4`; secondary cyan `#22d3ee`; tertiary gold `#e7c365`; primary text `#e6e0e9`, secondary text `#cbc4d2`; outlines `#948e9c` and `#494551`.
- **Typography:** Space Grotesk for display/headings and Inter for body copy, loaded from Google Fonts in [index.html](./index.html). Shared classes in [index.css](./src/index.css) define hero/section/card headings, body sizes, uppercase labels, and gradient text.
- **Spacing/layout:** `.container-custom` uses max-width 7xl and responsive horizontal padding; `.section-padding` progresses from 4rem to 7rem; grids use Tailwind `sm`/`md`/`lg` breakpoints. Project cards are one/two/three columns; education/training grids also collapse for mobile.
- **Component patterns:** violet gradient primary buttons, cyan secondary actions, outlined buttons, dark layered cards, subtle glass blur, rounded-xl surfaces, semantic color tokens, and small badge/tag pills.
- **Motion/accessibility:** reveal-on-scroll, hover lift/glow, reduced-motion CSS, visible keyboard focus, and focus-managed dialogs. Preserve keyboard support and reduced-motion behavior while correcting the mobile reveal issue.

## 6. Inspection boundary

This report describes the local development build and the public URLs tested on 2026-11-17. External availability can change; the LinkedIn response was inconclusive. The production deployment, production environment variables, and behavior on physical devices were not inspected.
