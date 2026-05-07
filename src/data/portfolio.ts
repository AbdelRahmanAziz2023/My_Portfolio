import type { Project, Skill, SocialLink, TrustedLogo } from '../types/portfolio'

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

export const projects: Project[] = [
  {
    id: '1',
    title: 'Order Together - Food Ordering App',
    description:
      'Cross-platform mobile food ordering application built with React Native and Expo. Features cart management, real-time order tracking, skeleton loading, secure session persistence, and receipt generation.',
    technologies: ['React Native', 'Expo', 'TypeScript', '.NET', 'SQL'],
    featured: true,
    imageUrl: '/projects/OrderTogetherLogo.png',
    githubUrl: 'https://github.com/AbdelRahmanAziz2023/Order_Together',
    meta: { role: 'Mobile Engineer', duration: '2024' },
    highlights: {
      problem: 'Users needed a reliable group-ordering flow with clear state across sessions.',
      solution: 'Built a typed RN/Expo client with persisted cart and skeleton-first loading states.',
      impact: 'Production-ready flows for ordering, tracking, and receipts with maintainable architecture.',
    },
  },
  {
    id: '2',
    title: 'SoundJoy - E-Commerce Platform',
    description:
      'Full-featured MEAN stack e-commerce platform for purchasing headphones. Features JWT authentication, Stripe payment integration, product comparison, order tracking, admin dashboard with analytics, and product management.',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    featured: true,
    imageUrl: '/projects/SoundJoyLogo.png',
    liveUrl: 'https://e-commerce-front-iti-vz36.vercel.app/',
    githubUrl: 'https://github.com/AbdelRahmanAziz2023/E-commerce-Front-ITI',
    meta: { role: 'Full-Stack Engineer', duration: '2023' },
    highlights: {
      problem: 'Headphone storefront needed secure checkout and a scalable admin surface.',
      solution: 'MEAN stack with JWT, Stripe, and a Tailwind-powered storefront plus analytics dashboard.',
      impact: 'End-to-end commerce: auth, payments, orders, and product management in one codebase.',
    },
  },
  {
    id: '3',
    title: 'Food Delivery App',
    description:
      'Production-ready React Native food ordering application with complete authentication flow, restaurant browsing, cart management, Stripe payments, and real-time order tracking. Built with TypeScript, Redux Toolkit, Firebase, Firestore, and Reactotron debugging.',
    technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Firestore', 'Stripe SDK'],
    featured: true,
    imageUrl: '/projects/FoodDeliveryLogo.png',
    githubUrl: 'https://github.com/AbdelRahmanAziz2023/food_delivery_app',
    meta: { role: 'Mobile Engineer', duration: '2024' },
    highlights: {
      problem: 'Complex auth + payments + live order state on mobile with strong DX for debugging.',
      solution: 'RTK + Firebase/Firestore, Stripe SDK, and Reactotron for a shippable RN experience.',
      impact: 'Full purchase journey with real-time updates and hardened state management.',
    },
  },
  {
    id: '4',
    title: 'HomeHand - Flutter Mobile App',
    description:
      'Cross-platform mobile application built with Flutter. Demonstrates expertise in native mobile development with support for Android, iOS, web, Linux, macOS, and Windows platforms.',
    technologies: ['Flutter', 'Dart', 'Native Platforms'],
    featured: true,
    imageUrl: '/projects/HomeHandLogo.png',
    githubUrl: 'https://github.com/AbdelRahmanAziz2023/HomeHand',
    meta: { role: 'Mobile Engineer', duration: '2023' },
    highlights: {
      problem: 'Deliver one codebase across mobile and desktop targets without sacrificing structure.',
      solution: 'Flutter architecture with platform-aware modules and shared domain logic.',
      impact: 'Single Dart codebase spanning six platforms with clear separation of concerns.',
    },
  },
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
