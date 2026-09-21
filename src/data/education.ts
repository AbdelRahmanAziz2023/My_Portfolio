import type { EducationItem, TrainingItem } from '../types/education'

/**
 * Formal education entries.
 *
 * Empty by design — no degree-level education data exists in the current
 * portfolio content. Add entries here as they become available; the UI
 * picks them up automatically.
 */
export const education: EducationItem[] = []

/**
 * Professional training programs.
 *
 * Migrated verbatim from the About timeline (ITI entry); no fields were
 * invented — dates, provider, and description come from the existing data.
 */
export const training: TrainingItem[] = [
  {
    id: 'iti-mobile-development-ptp',
    title: 'Mobile Development (PTP)',
    provider: 'Information Technology Institute (ITI)',
    startDate: '2024/10',
    endDate: '2025/06',
    description:
      '9-month professional training program focused on cross-platform mobile application development using modern industry practices.',
  },
]
