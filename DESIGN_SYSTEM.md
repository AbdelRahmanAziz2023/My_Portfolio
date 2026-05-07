# Cinematic design system (Stitch-aligned)

This portfolio mirrors the **Cinematic Mobile Engineer Portfolio** Stitch project: **Neo-Noir** dark surfaces, **violet** primary (`#cfbcff` / `#6750a4`), **cyan** secondary accents (`#22d3ee`), and **Space Grotesk + Inter** typography.

## Where tokens live

| Layer | File |
|--------|------|
| Source-of-truth constants (docs + reuse) | [`src/design/theme.ts`](src/design/theme.ts) |
| Tailwind semantic colors, fonts, shadows, keyframes | [`tailwind.config.js`](tailwind.config.js) |
| Global base styles, typography utilities, glass helpers | [`src/index.css`](src/index.css) |

When you change a brand color, update **`theme.ts`** and **`tailwind.config.js`** together so they stay aligned.

## Semantic colors (Tailwind)

- **Surfaces**: `surface`, `surface-low`, `surface-container`, `surface-container-high`, `surface-container-highest`, `surface-bright`, …
- **Content**: `on-surface`, `on-surface-variant`
- **Brand**: `primary`, `on-primary`, `primary-container`, `on-primary-container`, `secondary`, `tertiary`
- **Lines**: `outline`, `outline-variant`

Prefer these over raw hex in components.

## Typography utilities (`index.css`)

- `.heading-hero` — hero display (Space Grotesk)
- `.heading-section` — section titles
- `.heading-card` — card titles
- `.body-main` / `.body-sm` — body copy
- `.badge-label` — uppercase micro-labels (wide tracking)
- `.gradient-text` — primary → secondary → tertiary gradient clip

## Layout utilities

- `.container-custom` — max width + horizontal padding
- `.section-padding` — vertical rhythm between major sections
- `.glass-panel` — blurred translucent panel (CSS variables in `:root`)

## Motion

- **Scroll reveals**: [`src/components/RevealOnScroll.tsx`](src/components/RevealOnScroll.tsx) toggles `.reveal-hidden` → `.reveal-visible`.
- **Background**: `animate-float-slow`, `animate-pulse-glow` in Tailwind config.
- **Reduced motion**: `prefers-reduced-motion` short-circuits animations in `index.css`.

## Primitives

- **Button** — gradient primary, cyan secondary, outline/ghost; optional magnetic hover (`magnetic` prop).
- **Card** — `elevation`: `base` | `interactive` | `floating` (glass + hover lift).
- **TagPill / Badge / StatBlock** — chips and metrics consistent with the system.

## Extending

1. Add tokens to `tailwind.config.js` under `theme.extend`.
2. Document in `src/design/theme.ts`.
3. Use semantic class names in JSX (`bg-surface-container`, `text-on-surface-variant`, …).
