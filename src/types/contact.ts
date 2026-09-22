/**
 * Contact form types.
 *
 * The shape here mirrors the fields that actually exist in the Contact
 * section — no extra fields are asked of the visitor.
 */
export interface ContactFormData {
  name: string
  email: string
  message: string
}

/** Field keys of the form, used to associate validation errors to inputs. */
export type ContactField = keyof ContactFormData

/** Validation errors keyed by field — a field with no error is absent. */
export type ContactFormErrors = Partial<Record<ContactField, string>>

/** Submission lifecycle of the form. */
export type ContactStatus = 'idle' | 'submitting' | 'success' | 'error'
