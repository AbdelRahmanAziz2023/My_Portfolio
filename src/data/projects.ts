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
  id: "examify-platform",
  slug: "examify",

  title: "ExamiFY",
  subtitle: "Secure Online Examination & Real-Time Automated Proctoring Platform",
  description: "A comprehensive full-stack examination platform (MERN) designed to safeguard academic integrity through real-time WebSocket proctoring, client-side event interception, and SHA-256 evidence hashing.",

  featured: true,
  category: "web",

  year: "2026",
  duration: "3 Months",
  role: "Full-Stack Web Engineer",

  logo: "/favicon.svg",
  heroImage: "/images/projects/examify/hero.jpg",

  technologies: [
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB / Mongoose",
    "WebSockets (WSS)",
    "Zustand",
    "Shadcn/UI",
    "AWS S3",
    "Vercel Serverless"
  ],

  problem: "Academic institutions struggle to prevent sophisticated online cheating methods like tab switching, unauthorized tools, or loss of window focus, while lacking tamper-proof digital evidence for post-exam review and adjudication.",
  
  solution: "ExamiFY provides a sandboxed examination environment connected via low-latency WebSockets to monitor student behavior, capture real-time violation evidence, hash logs via SHA-256 for cryptographic verification, and instantly alert proctors.",

  impact: "Delivered a reliable testing environment with high academic compliance, significantly reduced unauthorized attempt rates using a multi-tier strikes system, and provided detailed forensic audit reports for faculty review.",

  challenges: [
    "Maintaining stable WebSocket telemetry and heartbeat monitoring over Vercel Serverless Functions.",
    "Resolving TypeScript path alias mappings (@/*) during build execution for production deployment.",
    "Implementing browser event traps to block keyboard shortcuts and detect multi-monitor setups."
  ],

  features: [
    "Real-time breach detection (tab switches, window blur, display changes, and clipboard traps)",
    "Automated strike-assignment engine that terminates exams upon threshold violation",
    "Cryptographic audit trail with SHA-256 event chaining for tamper-proof logging",
    "Full Arabic and English internationalization (i18n) with native RTL and Dark Mode support",
    "Automated evidence snapshot capture uploaded securely to AWS S3 via presigned URLs",
    "Interactive instructor dashboard for live fleet telemetry and adjudication (Pardon / Escalate)"
  ],

  images: [
    // {
    //   url: "/images/projects/examify/dashboard.jpg",
    //   alt: "ExamiFY Instructor Command Center & Exam Analytics Dashboard",
    //   caption: "Instructor Command Center"
    // },
    // {
    //   url: "/images/projects/examify/active-exam.jpg",
    //   alt: "Student Active Exam Environment with Sticky Security Header and Timer",
    //   caption: "Active Student Workspace"
    // },
    // {
    //   url: "/images/projects/examify/violation-modal.jpg",
    //   alt: "Security Breach Warning Overlay Modal",
    //   caption: "Security Infraction Overlay"
    // }
  ],

  links: {
    live: "https://examify.vercel.app",
    github: "https://github.com/your-username/examify"
  },

  stats: [
    {
      label: "Academic Integrity Index",
      value: "98.4%"
    },
    {
      label: "Telemetry Latency",
      value: "< 50ms"
    },
    {
      label: "RTL & i18n Coverage",
      value: "100%"
    }
  ]
},
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
    logo: '/images/projects/order-together.webp',
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
    logo: '/images/projects/soundjoy.webp',
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
    logo: '/images/projects/food-delivery.webp',
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
    logo: '/images/projects/homehand.webp',
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

