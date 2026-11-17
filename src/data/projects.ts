import type { Project, ProjectImage } from "../types/project";

/**
 * Authoritative project dataset — the single source of truth consumed by
 * every project-related UI (homepage, project listing, /projects/:slug).
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
      "Full-stack examination platform using WebSockets for proctoring, browser event monitoring, and SHA-256 event hashing.",

    featured: false,
    category: "web",

    year: "2026",
    role: "Full-Stack Web Engineer",

    logo: "/images/projects/examify/examify-logo.svg",

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
      "Online exams need tools for monitoring browser events and reviewing recorded exam activity.",

    solution:
      "The platform combines an examination interface, WebSocket event monitoring, strike assignment, and SHA-256 event records.",

    challenges: [
      "WebSocket telemetry and heartbeat monitoring with Vercel Serverless Functions.",
      "Resolving TypeScript path alias mappings (@/*) during builds.",
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
      live: "https://exami-fy.vercel.app",
      // github: "https://github.com/your-username/examify"
    },

  },
  {
    id: "link-land-archive",
    slug: "link-land-archive",
    title: "Link",
    subtitle: "Land Archive & Document Management System",

    description:
      "Mobile application for searching land records and accessing related documents.",

    featured: true,

    category: "mobile",

    year: "2026",

    role: "React Native Developer",

    logo: "/images/projects/link/link-icon.webp",

    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "REST API",
    ],

    problem:
      "Land records and related documents can be searched and viewed through a mobile interface.",

    solution:
      "The mobile app uses a Node.js backend with Supabase/PostgreSQL, role-based access, land search, and document access.",

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
        alt: "Link login screen",
        orientation: "portrait",
      },
      {
        src: "/images/projects/link/land-list.webp",
        alt: "Link land records list screen",
        type: "hero",
        orientation: "portrait",
      },
      {
        src: "/images/projects/link/land-details.webp",
        alt: "Link land record details screen",
        orientation: "portrait",
      },
      {
        src: "/images/projects/link/land-search.webp",
        alt: "Link land record search screen",
        orientation: "portrait",
      },
      {
        src: "/images/projects/link/admin-dash.webp",
        alt: "Link administrator dashboard screen",
        orientation: "portrait",
      },
    ],

    links: {
      // github: "https://github.com/AbdelRahmanAziz2023",
    },

  },
  {
    id: "swnw-ecommerce-platform",
    slug: "swnw-ecommerce",

    title: "SWNW E-Commerce Ecosystem",
    subtitle: "Dual-App Mobile E-Commerce Solution for Customers & Vendors",
    description:
      "Customer shopping and vendor store management apps built with React Native and TypeScript, with Paymob integration.",

    featured: false,
    category: "mobile",

    year: "2026",
    role: "Mobile Application Engineer",

    logo: "/images/projects/swnw/swnw-logo.webp",

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
      "The two apps provide mobile shopping and vendor store management, including payment, product, and order workflows.",

    solution:
      "The customer app includes shopping and Paymob payment flows; the vendor app includes product management and order tracking.",

    challenges: [
      "Organizing shared type definitions and RTK Query patterns across both applications.",
      "Integrating Paymob payment gateway SDK smoothly with custom checkout state transitions in React Native.",
      "Image uploads and RTK Query cache invalidation for vendor product updates.",
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
      "Food ordering application built with React Native and Expo, with cart management, order tracking, session persistence, and receipt generation.",
    featured: true,
    category: "mobile",
    year: "2025",
    role: "Mobile Engineer",
    logo: "/images/projects/order-together.webp",
    technologies: ["React Native", "Expo", "TypeScript", ".NET", "SQL"],
    problem:
      "The app supports group ordering with cart state retained across sessions.",

    solution:
      "React Native and Expo client with a persisted cart, loading states, order tracking, and receipt screens.",
    links: {
      github: "https://github.com/AbdelRahmanAziz2023/Order_Together",
    },
    images: [
      {
        src: "/images/projects/orderTogether/order-together-2.webp",
        alt: "Order Together restaurant menu screen",
        type: "hero",
        orientation: "landscape",
      },
      {
        src: "/images/projects/orderTogether/order-together-4.webp",
        alt: "Order Together menu and item customization preview",
        orientation: "landscape",
      },
    ],
  },
  {
    id: "2",
    slug: "soundjoy",
    title: "SoundJoy - E-Commerce Platform",
    description:
      "MEAN stack e-commerce platform for headphones, with JWT authentication, Stripe payment integration, product comparison, order tracking, an admin dashboard, and product management.",
    featured: true,
    category: "web",
    year: "2025",
    role: "Full-Stack Engineer",
    logo: "/images/projects/soundjoy.webp",
    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
    ],
    problem:
      "The project brings headphone shopping, checkout, order tracking, and product administration into one platform.",

    solution:
      "MEAN stack implementation with JWT authentication, Stripe integration, a Tailwind CSS storefront, and an admin dashboard.",
    links: {
      live: "https://e-commerce-front-iti-vz36.vercel.app/",
      github: "https://github.com/AbdelRahmanAziz2023/E-commerce-Front-ITI",
    },
    images: [
      {
        src: "/images/projects/soundjoy/soundjoy-4.webp",
        alt: "SoundJoy storefront home page",
        type: "hero",
        orientation: "landscape",
      },
      {
        src: "/images/projects/soundjoy/soundjoy-5.webp",
        alt: "SoundJoy product listing page",
        orientation: "landscape",
      },
      {
        src: "/images/projects/soundjoy/soundjoy-6.webp",
        alt: "SoundJoy product details page",
        orientation: "landscape",
      },
      {
        src: "/images/projects/soundjoy/soundjoy-7.webp",
        alt: "SoundJoy cart and checkout page",
        orientation: "landscape",
      },
    ],
  },
  {
    id: "3",
    slug: "food-delivery",
    title: "Food Delivery App",
    description:
      "React Native food ordering application with authentication, restaurant browsing, cart management, Stripe payments, and order tracking. Built with TypeScript, Redux Toolkit, Firebase, Firestore, and Reactotron.",
    featured: false,
    category: "mobile",
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
      "React Native app using Redux Toolkit, Firebase/Firestore, Stripe SDK, and Reactotron.",
    links: {
      github: "https://github.com/AbdelRahmanAziz2023/food_delivery_app",
    },
  },
  {
    id: "4",
    slug: "homehand",
    title: "HomeHand - Flutter Mobile App",
    description:
      "Flutter mobile application.",
    featured: false,
    category: "mobile",
    role: "Mobile Engineer",
    logo: "/images/projects/homehand.webp",
    technologies: ["Flutter", "Dart"],
    links: {
      github: "https://github.com/AbdelRahmanAziz2023/HomeHand",
    },
  },
];

/** Projects marked as featured, in dataset order. */
export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

/** First real project image used for cards and case-study previews. */
export const getProjectPreview = (project: Project): ProjectImage | undefined =>
  project.images?.find((image) => image.type === "hero") ?? project.images?.[0];

/** Lookup by the stable hand-assigned slug used by /projects/:slug. */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

/** Related projects resolved from the slugs declared in the project data. */
export const getRelatedProjects = (project: Project): Project[] =>
  (project.relatedProjectSlugs ?? [])
    .map((slug) => getProjectBySlug(slug))
    .filter(
      (related): related is Project =>
        related !== undefined && related.id !== project.id,
    );

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
