/** Real project screenshots used in cards and the project detail gallery. */
export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  type?: 'hero' | 'gallery' | 'screen'
  orientation?: 'portrait' | 'landscape'
}

export interface ProjectTechnicalDecision {
  decision: string
  rationale?: string
  tradeOff?: string
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

  technologies: string[]

  problem?: string
  goals?: string[]
  solution?: string
  impact?: string
  responsibilities?: string[]
  architecture?: string
  technicalDecisions?: ProjectTechnicalDecision[]

  challenges?: string[]
  features?: string[]

  images?: ProjectImage[]
  relatedProjectSlugs?: string[]
  availabilityNote?: string

  links?: {
    live?: string
    github?: string
    store?: {
      appStore?: string
      googlePlay?: string
    }
  }

  stats?: {
    label: string
    value: string
  }[]
}
