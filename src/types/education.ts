export interface EducationItem {
  id: string
  institution: string
  degree: string
  field?: string

  /** Display dates, e.g. '2024/10'. */
  startDate?: string
  endDate?: string

  description?: string
  logo?: string
}

export interface TrainingItem {
  id: string
  title: string
  provider: string

  startDate?: string
  endDate?: string

  description?: string
  certificateImage?: string
  verificationUrl?: string
}
