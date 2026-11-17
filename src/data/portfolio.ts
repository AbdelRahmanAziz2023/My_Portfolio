import type { ExperienceMilestone, Skill, SocialLink, TrustedLogo } from '../types/portfolio'

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'Salla & Zid customization', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'MQTT', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'React Native', category: 'mobile' },
  { name: 'Flutter (training)', category: 'mobile' },
  { name: 'Redux Toolkit', category: 'integrations' },
  { name: 'RTK Query', category: 'integrations' },
  { name: 'Zustand', category: 'integrations' },
  { name: 'Firebase', category: 'integrations' },
  { name: 'Paymob', category: 'integrations' },
  { name: 'Authentication', category: 'integrations' },
  { name: 'Third-party integrations', category: 'integrations' },
  { name: 'Git', category: 'tools' },
  { name: 'Agile', category: 'tools' },
  { name: 'Android & iOS builds', category: 'tools' },
]

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/AbdelRahmanAziz2023', icon: 'github' },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abdelrahman-aziz-169aaa403/',
    icon: 'linkedin',
  },
  { platform: 'Email', url: 'mailto:abdelrahmanaziz23@gmail.com', icon: 'email' },
]

export const about = {
  name: 'Abdelrahman Aziz',
  title: 'Full-Stack Software Engineer',
  bio: 'I work across React interfaces, Node.js services, and REST APIs, with React Native mobile development as a complementary specialization.',
  email: 'abdelrahmanaziz23@gmail.com',
  profileImage: '/images/profile/profile-640.webp',
}

export const resumeUrl = '/assets/Abdelrahman Aziz CV.pdf'

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
    body: 'React Native customer and vendor apps using TypeScript, Redux Toolkit, RTK Query, REST APIs, authentication, and Paymob.',
    icon: '📱',
  },
  {
    title: 'Full-Stack Delivery',
    body: 'Salla and Zid storefront customization with HTML, CSS, and JavaScript, alongside Node.js REST APIs, databases, authentication, and third-party integrations.',
    icon: '⚡',
  },
  {
    title: 'Backend & Integrations',
    body: 'Node.js backend work with database and authentication integrations, third-party services, and MQTT.',
    icon: '🔌',
  },
  {
    title: 'Mobile Delivery',
    body: 'React Native interface and navigation work, API integration, debugging, and Android/iOS deployment assistance.',
    icon: '📦',
  },
] as const

/**
 * Career timeline shown in the About section (migrated from the component
 * so content lives in the data layer, not in UI).
 */
export const milestones: ExperienceMilestone[] = [
  {
    year: '02/2026 – Present',
    title: 'Full Stack Developer – AMB',
    detail:
      'Customized Salla and Zid storefronts with HTML, CSS, and JavaScript. Worked on Node.js REST APIs and backend features, including databases, authentication, third-party integrations, and MQTT. Contributed to ProTek.',
  },

  {
    year: '01/2026 – 02/2026',
    title: 'React Native Developer (Freelance)',
    detail:
      'Built customer and vendor apps with React Native and TypeScript. Used Redux Toolkit and RTK Query, integrated REST APIs, authentication, and Paymob, and prepared Android and iOS builds.',
  },

  {
    year: '10/2025 – 12/2025',
    title: 'React Native Intern – IKEN Technology',
    detail:
      'Worked on UI, navigation, API integration, Firebase, and state management. Assisted with debugging, performance optimization, and Android/iOS deployment; collaborated using Git and Agile practices.',
  },
]
