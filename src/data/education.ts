import type { EducationItem, TrainingItem } from "../types/education";

/**
 * Formal education entries.
 *
 * Empty by design — no degree-level education data exists in the current
 * portfolio content. Add entries here as they become available; the UI
 * picks them up automatically.
 */
export const education: EducationItem[] = [
  {
    id: "fcaai",
    institution:
      "Faculty of Computers and Artificial Intelligence, Fayoum University",
    degree: "Bachelor of Science in Computer Science",
    field: "Computer Science",
    startDate: "2020/09",
    endDate: "2024/06",
    description: "Bachelor's degree program focused on computer science fundamentals, software development, and artificial intelligence, providing a strong foundation for a career in technology.",
    logo: "/images/logo/fci-fayoum-logo.webp",
  },
  {
    id: "iti-mobile-development-ptp",
    institution: "Information Technology Institute (ITI)",
    degree: "Diploma in Mobile Development (PTP)",
    field: "Mobile Application Development(Cross-Platform)",
    startDate: "2024/10",
    endDate: "2025/06",
    description:
      "9-month professional training program focused on cross-platform mobile application development using modern industry practices.",
    logo: "/images/logo/iti-logo.webp",
  },
];

/**
 * Professional training programs.
 *
 * Migrated verbatim from the About timeline (ITI entry); no fields were
 * invented — dates, provider, and description come from the existing data.
 */
export const training: TrainingItem[] = [
  {
    id: "employability-skills-aspire",
    title: "Employability Skills Training",
    provider: "Aspire & USAID (Fayoum University)",
    startDate: "2024/04",
    // endDate: "2024",
    description: "Professional workplace skills training focused on career readiness, interpersonal communication, problem-solving, and professional development conducted by Aspire in collaboration with USAID and Fayoum University.",
    certificateImage: "",
    verificationUrl: ""
  },
  {
    id: "flutter-mobile-development-iti",
    title: "Mobile Development using Flutter",
    provider: "Information Technology Institute (ITI)",
    startDate: "2022/09",
    // endDate: "2024",
    description: "Intensive 60-hour summer training course covering cross-platform mobile application development using Flutter and Dart, building responsive UIs, state management, and API integration.",
    certificateImage: "/images/certifications/iti-summer.webp",
    verificationUrl: ""
  }
];
