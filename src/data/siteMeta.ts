/**
 * Site-level identity and SEO copy.
 *
 * This is the single source of truth shared by:
 *   - the client metadata layer (`src/utils/seo.ts`),
 *   - the structured-data builders (`src/utils/structuredData.ts`),
 *   - the build-time generator (`scripts/generate-seo.mjs`).
 *
 * It is intentionally free of runtime imports (only erasable type syntax) so
 * the build scripts can import it directly through Node's type stripping.
 *
 * `index.html` carries a static copy of the title/description for crawlers
 * that do not execute JavaScript; `scripts/generate-seo.mjs` warns when the
 * two drift apart.
 */
export interface SiteMeta {
  /** Person / site name. */
  name: string
  /** Public professional specialization (mirrors the hero specialization line). */
  role: string
  /** Default document title (already contains the site name). */
  title: string
  /** Default meta description. */
  description: string
  /** Default social preview image — must be an existing file under /public. */
  ogImage: string
  ogImageWidth: number
  ogImageHeight: number
  /** BCP-47 language tag of the site content. */
  locale: string
}

export const siteMeta: SiteMeta = {
  name: 'Abdelrahman Aziz',
  role: 'Full-Stack Software Engineer',
  title: 'Abdelrahman Aziz | Full-Stack Software Engineer',
  description:
    'Portfolio of Abdelrahman Aziz, Full-Stack Software Engineer working with React, Node.js, REST APIs, and React Native mobile development.',
  /**
   * Default social preview image — an existing file under /public.
   *
   * Known limitation: only WebP profile renders exist, so this is a 640×960
   * portrait rather than the 1200×630 JPEG/PNG that some social crawlers
   * prefer. Replace this path (and the dimensions) when a dedicated social
   * banner asset is available; nothing else has to change.
   */
  ogImage: '/images/profile/profile-640.webp',
  ogImageWidth: 640,
  ogImageHeight: 960,
  locale: 'en',
}

/** Per-route title/description copy, reused by pages and structured data. */
export interface PageMetaCopy {
  title: string
  description: string
}

export interface SitePagesMeta {
  home: PageMetaCopy
  projects: PageMetaCopy
  education: PageMetaCopy
}

export const pageMeta: SitePagesMeta = {
  home: {
    title: siteMeta.title,
    description: siteMeta.description,
  },
  projects: {
    title: 'Projects',
    description:
      'Full-stack web and React Native mobile projects using technologies including React, Node.js, and TypeScript.',
  },
  education: {
    title: 'Education & Certifications',
    description:
      'Formal education, professional training, and certifications — including the Information Technology Institute (ITI) Mobile Development (PTP) program — expanded as entries become available.',
  },
}
