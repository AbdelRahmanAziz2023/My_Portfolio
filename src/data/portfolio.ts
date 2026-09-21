import type { Skill, SocialLink, TrustedLogo } from '../types/portfolio'

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 'advanced' },
  { name: 'Angular', category: 'frontend', level: 'intermediate' },
  { name: 'TypeScript', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
  { name: 'Node.js', category: 'backend', level: 'intermediate' },
  { name: 'Express.js', category: 'backend', level: 'intermediate' },
  { name: 'MongoDB', category: 'backend', level: 'intermediate' },
  { name: 'React Native', category: 'mobile', level: 'advanced' },
  { name: 'Flutter', category: 'mobile', level: 'intermediate' },
  { name: 'Git', category: 'tools', level: 'expert' },
  { name: 'Agile Methods', category: 'tools', level: 'intermediate' },
]

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/AbdelRahmanAziz2023', icon: 'github' },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abdelrahman-aziz-169aaa403/',
    icon: 'linkedin',
  },
  { platform: 'Twitter', url: '#', icon: 'twitter' },
  { platform: 'Email', url: 'mailto:abdelrahmanaziz23@gmail.com', icon: 'email' },
]

export const about = {
  name: 'Abdelrahman Aziz',
  title: 'Full Stack Software Engineer',
  bio: 'Passionate software engineer with expertise in building scalable applications across mobile, frontend, and backend technologies.',
  email: 'abdelrahmanaziz23@gmail.com',
  profileImage: '/MyPhoto.png',
}

/** Placeholder-friendly logos row — swap `imageUrl` when you have assets */
export const trustedLogos: TrustedLogo[] = [
  { id: '1', name: 'Partner A' },
  { id: '2', name: 'Partner B' },
  { id: '3', name: 'Partner C' },
  { id: '4', name: 'Partner D' },
]

export const processSteps = [
  {
    title: 'Discover',
    body: 'Align on goals, users, and constraints. Map risks early and define measurable outcomes.',
  },
  {
    title: 'Design',
    body: 'Shape flows, APIs, and UI contracts. Prefer thin vertical slices over big-bang handoffs.',
  },
  {
    title: 'Build',
    body: 'Implement with tests, telemetry, and performance budgets. Iterate in tight feedback loops.',
  },
  {
    title: 'Ship',
    body: 'Release confidently, monitor, and refine. Document decisions so the next iteration is faster.',
  },
] as const

export const highlightCards = [
  {
    title: 'Mobile Engineering',
    body: 'React Native & Flutter apps with polished UX, offline-aware flows, and store-ready builds.',
    icon: '📱',
  },
  {
    title: 'Full-Stack Delivery',
    body: 'Angular/React frontends paired with Node/Express services and pragmatic data modeling.',
    icon: '⚡',
  },
  {
    title: 'Performance Mindset',
    body: 'Skeleton states, lazy boundaries, and measurable improvements where users feel them.',
    icon: '🎯',
  },
  {
    title: 'Collaboration',
    body: 'Clear interfaces with design and product; PRs that tell a story and keep CI green.',
    icon: '🤝',
  },
] as const
