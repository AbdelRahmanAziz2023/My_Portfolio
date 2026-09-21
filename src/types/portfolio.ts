export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'tools'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
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
