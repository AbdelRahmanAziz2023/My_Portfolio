export interface Certification {
  id: string
  title: string
  issuer: string

  issueDate?: string
  expirationDate?: string

  credentialId?: string

  certificateImage?: string
  verificationUrl?: string
}
