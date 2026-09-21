/** Gallery/screen imagery for the Project Details page (not yet designed). */
export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  type?: 'hero' | 'gallery' | 'screen'
}

/**
 * Single source of truth for project data.
 *
 * All content comes from the existing portfolio data; missing information
 * stays optional — no invented technologies, metrics, dates, roles, or links.
 */
export interface Project {
  id: string
  /** Stable, URL-safe, hand-assigned identifier used by /projects/:slug. */
  slug: string

  title: string
  subtitle?: string
  description: string

  featured: boolean
  /** e.g. 'mobile' | 'web' — derived from existing content, no new claims. */
  category?: string

  year?: string
  duration?: string
  role?: string

  logo?: string
  heroImage?: string

  technologies: string[]

  problem?: string
  solution?: string
  impact?: string

  challenges?: string[]
  features?: string[]

  images?: ProjectImage[]

  links?: {
    live?: string
    github?: string
    store?: string
  }

  stats?: {
    label: string
    value: string
  }[]
}
