export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'tools'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface ProjectHighlights {
  problem?: string
  solution?: string
  impact?: string
}

export interface ProjectMeta {
  role?: string
  duration?: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  highlights?: ProjectHighlights
  meta?: ProjectMeta
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
