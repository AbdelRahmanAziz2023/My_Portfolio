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
    id: "iken-certification",
    title: "IKEN Internship Certification",
    issuer: "IKEN Technology",
    issueDate: "2025/12",
    certificateImage: "/images/certifications/iken.webp",
  },
]
