import type { EducationItem, TrainingItem } from "../types/education";

/**
 * Formal education entries.
 */
export const education: EducationItem[] = [
  {
    id: "fcaai",
    institution:
      "Faculty of Computers and Artificial Intelligence, Fayoum University",
    degree: "Bachelor of Science in Computer Science",
    field: "Computer Science",
    startDate: "2020/09",
    endDate: "2024/07",
    description: "Bachelor's degree program focused on computer science fundamentals, software development, and artificial intelligence, providing a strong foundation for a career in technology.",
    logo: "/images/logo/fci-fayoum-logo.webp",
  },
];

/**
 * Professional training programs and courses.
 */
export const training: TrainingItem[] = [
  {
    id: "iti-mobile-development-ptp",
    title: "Mobile Development (PTP)",
    provider: "Information Technology Institute (ITI)",
    startDate: "2024/10",
    endDate: "2025/06",
    description:
      "Nine-month professional training program in cross-platform mobile application development.",
    certificateImage: "/images/certifications/iti.webp",
  },
  {
    id: "employability-skills-aspire",
    title: "Employability Skills Training",
    provider: "Aspire & USAID (Fayoum University)",
    startDate: "2024/04",
    description: "Professional workplace skills training focused on career readiness, interpersonal communication, problem-solving, and professional development conducted by Aspire in collaboration with USAID and Fayoum University.",
    certificateImage: "",
    verificationUrl: "",
  },
  {
    id: "flutter-mobile-development-iti",
    title: "Mobile Development using Flutter",
    provider: "Information Technology Institute (ITI)",
    startDate: "2022/09",
    description: "Intensive 60-hour summer training course covering cross-platform mobile application development using Flutter and Dart, building responsive UIs, state management, and API integration.",
    certificateImage: "/images/certifications/iti-summer.webp",
    verificationUrl: "",
  }
];
