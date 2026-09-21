import type { Project } from '../types/project'

/**
 * Authoritative project dataset — the single source of truth consumed by
 * every project-related UI (home carousel, grid, /projects, /projects/:slug).
 *
 * Content is migrated from the original portfolio data; missing information
 * stays optional. Ordering matches the original data.
 */
export const projects: Project[] = [
  {
    id: '1',
    slug: 'order-together',
    title: 'Order Together - Food Ordering App',
    description:
      'Cross-platform mobile food ordering application built with React Native and Expo. Features cart management, real-time order tracking, skeleton loading, secure session persistence, and receipt generation.',
    featured: true,
    category: 'mobile',
    year: '2024',
    role: 'Mobile Engineer',
    logo: '/projects/OrderTogetherLogo.png',
    technologies: ['React Native', 'Expo', 'TypeScript', '.NET', 'SQL'],
    problem: 'Users needed a reliable group-ordering flow with clear state across sessions.',
    solution: 'Built a typed RN/Expo client with persisted cart and skeleton-first loading states.',
    impact: 'Production-ready flows for ordering, tracking, and receipts with maintainable architecture.',
    links: {
      github: 'https://github.com/AbdelRahmanAziz2023/Order_Together',
    },
  },
  {
    id: '2',
    slug: 'soundjoy',
    title: 'SoundJoy - E-Commerce Platform',
    description:
      'Full-featured MEAN stack e-commerce platform for purchasing headphones. Features JWT authentication, Stripe payment integration, product comparison, order tracking, admin dashboard with analytics, and product management.',
    featured: true,
    category: 'web',
    year: '2023',
    role: 'Full-Stack Engineer',
    logo: '/projects/SoundJoyLogo.png',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    problem: 'Headphone storefront needed secure checkout and a scalable admin surface.',
    solution: 'MEAN stack with JWT, Stripe, and a Tailwind-powered storefront plus analytics dashboard.',
    impact: 'End-to-end commerce: auth, payments, orders, and product management in one codebase.',
    links: {
      live: 'https://e-commerce-front-iti-vz36.vercel.app/',
      github: 'https://github.com/AbdelRahmanAziz2023/E-commerce-Front-ITI',
    },
  },
  {
    id: '3',
    slug: 'food-delivery',
    title: 'Food Delivery App',
    description:
      'Production-ready React Native food ordering application with complete authentication flow, restaurant browsing, cart management, Stripe payments, and real-time order tracking. Built with TypeScript, Redux Toolkit, Firebase, Firestore, and Reactotron debugging.',
    featured: true,
    category: 'mobile',
    year: '2024',
    role: 'Mobile Engineer',
    logo: '/projects/FoodDeliveryLogo.png',
    technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Firestore', 'Stripe SDK'],
    problem: 'Complex auth + payments + live order state on mobile with strong DX for debugging.',
    solution: 'RTK + Firebase/Firestore, Stripe SDK, and Reactotron for a shippable RN experience.',
    impact: 'Full purchase journey with real-time updates and hardened state management.',
    links: {
      github: 'https://github.com/AbdelRahmanAziz2023/food_delivery_app',
    },
  },
  {
    id: '4',
    slug: 'homehand',
    title: 'HomeHand - Flutter Mobile App',
    description:
      'Cross-platform mobile application built with Flutter. Demonstrates expertise in native mobile development with support for Android, iOS, web, Linux, macOS, and Windows platforms.',
    featured: true,
    category: 'mobile',
    year: '2023',
    role: 'Mobile Engineer',
    logo: '/projects/HomeHandLogo.png',
    technologies: ['Flutter', 'Dart', 'Native Platforms'],
    problem: 'Deliver one codebase across mobile and desktop targets without sacrificing structure.',
    solution: 'Flutter architecture with platform-aware modules and shared domain logic.',
    impact: 'Single Dart codebase spanning six platforms with clear separation of concerns.',
    links: {
      github: 'https://github.com/AbdelRahmanAziz2023/HomeHand',
    },
  },
]

/** Projects marked as featured, in dataset order. */
export const getFeaturedProjects = (): Project[] => projects.filter((p) => p.featured)

/** Lookup by the stable hand-assigned slug used by /projects/:slug. */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)

/** Filter by category (e.g. 'mobile', 'web'), in dataset order. */
export const getProjectsByCategory = (category: string): Project[] =>
  projects.filter((p) => p.category === category)

/** Array-order index of a project, or -1 when not found. */
export const getProjectIndex = (id: string): number =>
  projects.findIndex((p) => p.id === id)

/** Project immediately before the given one in dataset order (non-circular). */
export const getPreviousProject = (id: string): Project | undefined => {
  const index = getProjectIndex(id)
  return index > 0 ? projects[index - 1] : undefined
}

/** Project immediately after the given one in dataset order (non-circular). */
export const getNextProject = (id: string): Project | undefined => {
  const index = getProjectIndex(id)
  return index !== -1 && index < projects.length - 1 ? projects[index + 1] : undefined
}

