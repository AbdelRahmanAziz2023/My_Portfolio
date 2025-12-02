import type { Skill, Project, SocialLink } from "../types/portfolio";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "advanced" },
  { name: "Angular", category: "frontend", level: "intermediate" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  //   { name: "Next.js", category: "frontend", level: "beginner" },

  // Backend
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "Express.js", category: "backend", level: "intermediate" },
  //   { name: "PostgreSQL", category: "backend", level: "beginner" },
  { name: "MongoDB", category: "backend", level: "intermediate" },

  // Mobile
  { name: "React Native", category: "mobile", level: "advanced" },
  { name: "Flutter", category: "mobile", level: "intermediate" },

  // Tools
  { name: "Git", category: "tools", level: "expert" },
  //   { name: "Docker", category: "tools", level: "intermediate" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Order Together - Food Ordering App",
    description:
      "Cross-platform mobile food ordering application built with React Native and Expo. Features cart management, real-time order tracking, skeleton loading, secure session persistence, and receipt generation.",
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase"],
    featured: true,
    imageUrl: "/projects/OrderTogetherLogo.png",
    githubUrl: "https://github.com/AbdelRahmanAziz2023/Order_Together",
  },
  {
    id: "2",
    title: "SoundJoy - E-Commerce Platform",
    description:
      "Full-featured MEAN stack e-commerce platform for purchasing headphones. Features JWT authentication, Stripe payment integration, product comparison, order tracking, admin dashboard with analytics, and product management.",
    technologies: [
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
    ],
    featured: true,
    imageUrl: "/projects/SoundJoyLogo.png",
    liveUrl: "https://e-commerce-front-iti-vz36.vercel.app/",
    githubUrl: "https://github.com/AbdelRahmanAziz2023/E-commerce-Front-ITI",
  },
  {
    id: "3",
    title: "Food Delivery App",
    description:
      "Production-ready React Native food ordering application with complete authentication flow, restaurant browsing, cart management, Stripe payments, and real-time order tracking. Built with TypeScript, Redux Toolkit, Firebase, Firestore, and Reactotron debugging.",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Firestore",
      "Stripe SDK",
    ],
    featured: true,
    imageUrl: "/projects/FoodDeliveryLogo.png",
    githubUrl: "https://github.com/AbdelRahmanAziz2023/food_delivery_app",
  },
  {
    id: "4",
    title: "HomeHand - Flutter Mobile App",
    description:
      "Cross-platform mobile application built with Flutter. Demonstrates expertise in native mobile development with support for Android, iOS, web, Linux, macOS, and Windows platforms.",
    technologies: ["Flutter", "Dart", "Native Platforms"],
    featured: true,
    imageUrl: "/projects/HomeHandLogo.png",
    githubUrl: "https://github.com/AbdelRahmanAziz2023/HomeHand",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/AbdelRahmanAziz2023",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/abdelrahman-aziz-7473b437b/",
    icon: "linkedin",
  },
  { platform: "Twitter", url: "#", icon: "twitter" },
  {
    platform: "Email",
    url: "mailto:abdelrahmanaziz23@gmail.com",
    icon: "email",
  },
];

export const about = {
  name: "Abdelrahman Aziz",
  title: "Full Stack Software Engineer",
  bio: "Passionate software engineer with expertise in building scalable applications across mobile, frontend, and backend technologies.",
  email: "abdelrahmanaziz23@gmail.com",
  profileImage: "/MyPhoto.png",
};
