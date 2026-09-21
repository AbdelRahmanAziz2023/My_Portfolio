export interface Certification {
  id: string
  title: string
  /** Issuing organization, e.g. 'Meta', 'Google'. */
  issuer: string
  /** Issue date as displayed, e.g. '2025-06'. */
  date?: string
  credentialId?: string
  /** Verification or credential URL. */
  url?: string
  skills?: string[]
}
