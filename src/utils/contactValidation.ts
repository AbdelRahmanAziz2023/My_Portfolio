import type { ContactFormData, ContactFormErrors } from '../types/contact'

/**
 * Generous upper bounds: they exist to stop accidental/abusive payloads, not
 * to police how a visitor writes. No minimums are enforced beyond "not empty"
 * so short but legitimate messages are never rejected.
 */
export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  message: 2000,
} as const

/**
 * Deliberately permissive: one `@`, a dot in the domain, no whitespace.
 * Stricter patterns reject real addresses, which is worse than accepting a
 * rare typo (the visitor can be replied to by email anyway).
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Trim values before validating or sending them. */
export const normalizeContactForm = (data: ContactFormData): ContactFormData => ({
  name: data.name.trim(),
  email: data.email.trim(),
  message: data.message.trim(),
})

/**
 * Pure validation: returns an empty object when the form can be submitted.
 * Messages are written to be read out of context by a screen reader.
 */
export const validateContactForm = (data: ContactFormData): ContactFormErrors => {
  const values = normalizeContactForm(data)
  const errors: ContactFormErrors = {}

  if (!values.name) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Please enter a valid email address (for example you@domain.com).'
  }

  if (!values.message) {
    errors.message = 'Please enter a message.'
  }

  return errors
}
