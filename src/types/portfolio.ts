export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'integrations' | 'tools'
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface TrustedLogo {
  id: string
  name: string
  /** Optional image path under /public */
  imageUrl?: string
}

/** Work/education timeline entry shown in the About section. */
export interface ExperienceMilestone {
  year: string
  title: string
  detail: string
}
