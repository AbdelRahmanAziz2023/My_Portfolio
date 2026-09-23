import type { Project } from "../types/project";

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
    subtitle:
      "Secure Online Examination & Real-Time Automated Proctoring Platform",
    description:
      "A comprehensive full-stack examination platform (MERN) designed to safeguard academic integrity through real-time WebSocket proctoring, client-side event interception, and SHA-256 evidence hashing.",

    featured: true,
    category: "web",

    year: "2026",
    duration: "3 Months",
    role: "Full-Stack Web Engineer",

    logo: "/images/projects/examify/examify-logo.svg",
    heroImage: "/images/projects/examify/examify-logo.svg",

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
      "Vercel Serverless",
    ],

    problem:
      "Academic institutions struggle to prevent sophisticated online cheating methods like tab switching, unauthorized tools, or loss of window focus, while lacking tamper-proof digital evidence for post-exam review and adjudication.",

    solution:
      "ExamiFY provides a sandboxed examination environment connected via low-latency WebSockets to monitor student behavior, capture real-time violation evidence, hash logs via SHA-256 for cryptographic verification, and instantly alert proctors.",

    impact:
      "Delivered a reliable testing environment with high academic compliance, significantly reduced unauthorized attempt rates using a multi-tier strikes system, and provided detailed forensic audit reports for faculty review.",

    challenges: [
      "Maintaining stable WebSocket telemetry and heartbeat monitoring over Vercel Serverless Functions.",
      "Resolving TypeScript path alias mappings (@/*) during build execution for production deployment.",
      "Implementing browser event traps to block keyboard shortcuts and detect multi-monitor setups.",
    ],

    features: [
      "Real-time breach detection (tab switches, window blur, display changes, and clipboard traps)",
      "Automated strike-assignment engine that terminates exams upon threshold violation",
      "Cryptographic audit trail with SHA-256 event chaining for tamper-proof logging",
      "Full Arabic and English internationalization (i18n) with native RTL and Dark Mode support",
      "Automated evidence snapshot capture uploaded securely to AWS S3 via presigned URLs",
      "Interactive instructor dashboard for live fleet telemetry and adjudication (Pardon / Escalate)",
    ],

    images: [],

    links: {
      live: "https://examify.vercel.app",
      // github: "https://github.com/your-username/examify"
    },

    stats: [
      {
        label: "Academic Integrity Index",
        value: "98.4%",
      },
      {
        label: "Telemetry Latency",
        value: "< 50ms",
      },
      {
        label: "RTL & i18n Coverage",
        value: "100%",
      },
    ],
  },
  {
    id: "link-land-archive",
    slug: "link-land-archive",
    title: "Link",
    subtitle: "Land Archive & Document Management System",

    description:
      "A private mobile application built for a real-estate and land documentation company, designed to help employees securely search, view, and access land-related records and documents.",

    featured: true,

    category: "mobile",

    year: "2026",

    role: "React Native Developer",

    logo: "/images/projects/link/link-icon.webp",

    // heroImage: "/images/projects/link/login.webp",

    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "REST API",
    ],

    problem:
      "The company needed a centralized and secure way for employees to search and access land records and their related documents instead of relying on scattered files and manual lookup processes.",

    solution:
      "Built a role-based mobile application with a Node.js backend and Supabase/PostgreSQL database, allowing administrators to manage users and land records while employees can search for land information and access the associated documents.",

    challenges: [
      "Designing role-based navigation and access control for Admin and Employee users.",
      "Handling land records where the same plot number can appear with different neighborhoods or addresses.",
      "Managing multiple document types associated with a land record.",
      "Building efficient land search and lookup functionality.",
      "Integrating secure authentication and protected API endpoints.",
      "Providing a consistent mobile experience for Arabic RTL users.",
    ],

    features: [
      "Role-based authentication",
      "Admin user management",
      "Admin land management",
      "Land search and lookup",
      "Land details",
      "Document access and download",
      "Multiple land-related document types",
      "Protected API access",
      "Arabic RTL interface",
      "Employee-specific access flow",
    ],

    images: [
      {
        src: "/images/projects/link/login.webp",
        alt: "لينك login screen",
      },
      {
        src: "/images/projects/link/land-list.webp",
        alt: "لينك lands screen",
      },
      {
        src: "/images/projects/link/land-details.webp",
        alt: "لينك land details screen",
      },
      {
        src: "/images/projects/link/land-search.webp",
        alt: "لينك land search screen",
      },
      {
        src: "/images/projects/link/admin-dash.webp",
        alt: "لينك admin dashboard screen",
      },
    ],

    links: {
      // github: "https://github.com/AbdelRahmanAziz2023",
    },

    stats: [
      {
        label: "Platform",
        value: "Mobile",
      },
      {
        label: "Frontend",
        value: "React Native",
      },
      {
        label: "Backend",
        value: "Node.js",
      },
      {
        label: "Database",
        value: "PostgreSQL",
      },
    ],
  },
  {
    id: "swnw-ecommerce-platform",
    slug: "swnw-ecommerce",

    title: "SWNW E-Commerce Ecosystem",
    subtitle: "Dual-App Mobile E-Commerce Solution for Customers & Vendors",
    description:
      "A complete mobile marketplace solution built with React Native and TypeScript, featuring a high-conversion customer shopping application integrated with Paymob, and a dedicated vendor store management mobile application.",

    featured: true,
    category: "mobile",

    year: "2026",
    duration: "1 Month",
    role: "Mobile Application Engineer",

    logo: "/images/projects/swnw/swnw-logo.webp",
    heroImage: "/images/projects/swnw/swnw-logo.webp",

    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit (RTK)",
      "RTK Query",
      "Paymob Payment Gateway",
      "React Navigation",
      "AsyncStorage",
    ],

    problem:
      "Merchants need a seamless way to manage inventory and sales statistics on the go, while customers require a fast, intuitive mobile shopping experience with secure local payment options.",

    solution:
      "Engineered a dual-app mobile ecosystem: a feature-packed customer marketplace app with Paymob payment integration, and a synchronized vendor app allowing real-time product CRUD management, store analytics, and order tracking.",

    impact:
      "Streamlined merchant operations by enabling mobile-first store management while providing end customers with a smooth checkout flow, real-time inventory updates, and instant digital payment capabilities.",

    challenges: [
      "Architecting a scalable, feature-based folder structure to share type definitions and RTK Query patterns across both applications.",
      "Integrating Paymob payment gateway SDK smoothly with custom checkout state transitions in React Native.",
      "Optimizing image uploading and client-side cache invalidation using RTK Query for vendor product updates.",
    ],

    features: [
      "Dual-App Architecture: Dedicated Customer Marketplace & Vendor Management applications",
      "Customer App: Advanced product browsing, multi-attribute filtering, search, and cart workflows",
      "Secure Payment Integration: Native payment processing using Paymob gateway",
      "Vendor App: Business statistics dashboard for real-time sales and performance tracking",
      "Inventory Management: Full Product & Category CRUD operations with image uploading",
      "In-App Communication: Direct vendor contact functionality for customer inquiries",
      "Optimized Networking: Data fetching, caching, and state synchronization powered by RTK Query",
    ],

    links: {
      // github: "https://github.com/your-username/swnw-ecommerce",
    },

    stats: [
      {
        label: "Applications Built",
        value: "2 (Customer & Vendor)",
      },
      {
        label: "Payment Gateway Integration",
        value: "Paymob Native",
      },
      {
        label: "Architecture Standard",
        value: "Feature-Based / RTK",
      },
    ],
  },
  {
    id: "1",
    slug: "order-together",
    title: "Order Together - Food Ordering App",
    description:
      "Cross-platform mobile food ordering application built with React Native and Expo. Features cart management, real-time order tracking, skeleton loading, secure session persistence, and receipt generation.",
    featured: true,
    category: "mobile",
    year: "2024",
    role: "Mobile Engineer",
    logo: "/images/projects/order-together.webp",
    heroImage: "/images/projects/orderTogether/order-together-1.webp",
    technologies: ["React Native", "Expo", "TypeScript", ".NET", "SQL"],
    problem:
      "Users needed a reliable group-ordering flow with clear state across sessions.",
    solution:
      "Built a typed RN/Expo client with persisted cart and skeleton-first loading states.",
    impact:
      "Production-ready flows for ordering, tracking, and receipts with maintainable architecture.",
    links: {
      github: "https://github.com/AbdelRahmanAziz2023/Order_Together",
    },
    images: [
      {
        src: "/images/projects/orderTogether/order-together-1.webp",
        alt: "Order Together home and restaurant browsing screen",
      },
      {
        src: "/images/projects/orderTogether/order-together-2.webp",
        alt: "Order Together restaurant menu screen",
      },
      {
        src: "/images/projects/orderTogether/order-together-3.webp",
        alt: "Order Together cart screen",
      },
      {
        src: "/images/projects/orderTogether/order-together-4.webp",
        alt: "Order Together checkout and payment screen",
      },
      {
        src: "/images/projects/orderTogether/order-together-5.webp",
        alt: "Order Together order tracking screen",
      },
      {
        src: "/images/projects/orderTogether/order-together-6.webp",
        alt: "Order Together order receipt screen",
      },
    ],
  },
  {
    id: "2",
    slug: "soundjoy",
    title: "SoundJoy - E-Commerce Platform",
    description:
      "Full-featured MEAN stack e-commerce platform for purchasing headphones. Features JWT authentication, Stripe payment integration, product comparison, order tracking, admin dashboard with analytics, and product management.",
    featured: false,
    category: "web",
    year: "2023",
    role: "Full-Stack Engineer",
    logo: "/images/projects/soundjoy.webp",
    heroImage: "/images/projects/soundjoy/soundjoy-4.webp",
    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
    ],
    problem:
      "Headphone storefront needed secure checkout and a scalable admin surface.",
    solution:
      "MEAN stack with JWT, Stripe, and a Tailwind-powered storefront plus analytics dashboard.",
    impact:
      "End-to-end commerce: auth, payments, orders, and product management in one codebase.",
    links: {
      live: "https://e-commerce-front-iti-vz36.vercel.app/",
      github: "https://github.com/AbdelRahmanAziz2023/E-commerce-Front-ITI",
    },
    images: [
      {
        src: "/images/projects/soundjoy/soundjoy-4.webp",
        alt: "SoundJoy storefront home page",
      },
      {
        src: "/images/projects/soundjoy/soundjoy-5.webp",
        alt: "SoundJoy product listing page",
      },
      {
        src: "/images/projects/soundjoy/soundjoy-6.webp",
        alt: "SoundJoy product details page",
      },
      {
        src: "/images/projects/soundjoy/soundjoy-7.webp",
        alt: "SoundJoy cart and checkout page",
      },
    ],
  },
  {
    id: "3",
    slug: "food-delivery",
    title: "Food Delivery App",
    description:
      "Production-ready React Native food ordering application with complete authentication flow, restaurant browsing, cart management, Stripe payments, and real-time order tracking. Built with TypeScript, Redux Toolkit, Firebase, Firestore, and Reactotron debugging.",
    featured: false,
    category: "mobile",
    year: "2024",
    role: "Mobile Engineer",
    logo: "/images/projects/food-delivery.webp",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Firestore",
      "Stripe SDK",
    ],
    problem:
      "Complex auth + payments + live order state on mobile with strong DX for debugging.",
    solution:
      "RTK + Firebase/Firestore, Stripe SDK, and Reactotron for a shippable RN experience.",
    impact:
      "Full purchase journey with real-time updates and hardened state management.",
    links: {
      github: "https://github.com/AbdelRahmanAziz2023/food_delivery_app",
    },
  },
  {
    id: "4",
    slug: "homehand",
    title: "HomeHand - Flutter Mobile App",
    description:
      "Cross-platform mobile application built with Flutter. Demonstrates expertise in native mobile development with support for Android, iOS, web, Linux, macOS, and Windows platforms.",
    featured: false,
    category: "mobile",
    year: "2023",
    role: "Mobile Engineer",
    logo: "/images/projects/homehand.webp",
    technologies: ["Flutter", "Dart", "Native Platforms"],
    problem:
      "Deliver one codebase across mobile and desktop targets without sacrificing structure.",
    solution:
      "Flutter architecture with platform-aware modules and shared domain logic.",
    impact:
      "Single Dart codebase spanning six platforms with clear separation of concerns.",
    links: {
      github: "https://github.com/AbdelRahmanAziz2023/HomeHand",
    },
  },
];

/** Projects marked as featured, in dataset order. */
export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

/** Lookup by the stable hand-assigned slug used by /projects/:slug. */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

/** Filter by category (e.g. 'mobile', 'web'), in dataset order. */
export const getProjectsByCategory = (category: string): Project[] =>
  projects.filter((p) => p.category === category);

/** Array-order index of a project, or -1 when not found. */
export const getProjectIndex = (id: string): number =>
  projects.findIndex((p) => p.id === id);

/** Project immediately before the given one in dataset order (non-circular). */
export const getPreviousProject = (id: string): Project | undefined => {
  const index = getProjectIndex(id);
  return index > 0 ? projects[index - 1] : undefined;
};

/** Project immediately after the given one in dataset order (non-circular). */
export const getNextProject = (id: string): Project | undefined => {
  const index = getProjectIndex(id);
  return index !== -1 && index < projects.length - 1
    ? projects[index + 1]
    : undefined;
};
