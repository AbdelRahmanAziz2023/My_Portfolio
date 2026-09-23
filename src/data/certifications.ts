import type { Certification } from '../types/certification'

/**
 * Certifications.
 *
 * Images live in public/images/certifications as .webp and open in the
 * shared certificate viewer. Add entries here as they become available;
 * the UI picks them up automatically.
 */
export const certifications: Certification[] = [
  {
    id: "iti-mobile-development-ptp",
    title: "Mobile Development Diploma (PTP)",
    issuer: "Information Technology Institute (ITI)",
    issueDate: "2025/06",
    certificateImage: "/images/certifications/iti.webp",
  },
  {
    id: "iti-flutter-summer-training",
    title: "Mobile Development using Flutter — Summer Training",
    issuer: "Information Technology Institute (ITI)",
    issueDate: "2022/09",
    certificateImage: "/images/certifications/iti-summer.webp",
  },
  {
    id: "iken-certification",
    title: "IKEN Internship Certification",
    issuer: "IKEN Technology",
    issueDate: "2025/12",
    certificateImage: "/images/certifications/iken.webp",
  },
]
