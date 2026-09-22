import type { ContactFormData } from '../types/contact'

/**
 * Why a submission did not go through. The UI maps each reason to a
 * visitor-facing message so raw endpoint/network details stay internal.
 */
export type ContactErrorReason = 'not-configured' | 'network' | 'server'

/**
 * Result of a submission attempt. A discriminated union is used instead of
 * throwing because every failure mode here is expected, not exceptional.
 */
export type ContactSubmitOutcome = { ok: true } | { ok: false; reason: ContactErrorReason }

/**
 * Public endpoint that accepts a JSON POST and answers 2xx on success
 * (e.g. Formspree, Web3Forms, Basin, or an own serverless function).
 *
 * Vite only exposes `VITE_`-prefixed values to the browser, so this value is
 * public by definition — never put a private credential here.
 * See `.env.example`.
 */
const ENDPOINT = (import.meta.env.VITE_CONTACT_FORM_ENDPOINT ?? '').trim()

/**
 * Whether a real sending service is configured. The form stays fully usable
 * when this is false, but it reports honestly instead of faking success.
 */
export const isContactFormConfigured = (): boolean => ENDPOINT.length > 0

/**
 * Send one contact message through the configured service.
 *
 * NOTE: when no endpoint is configured the message is NOT delivered anywhere.
 * The previous implementation logged to the console and returned as if the
 * message had been sent; this implementation never reports success unless the
 * service confirmed it.
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactSubmitOutcome> {
  if (!isContactFormConfigured()) {
    if (import.meta.env.DEV) {
      console.warn(
        '[contact] VITE_CONTACT_FORM_ENDPOINT is not set — the message was NOT sent.',
        data,
      )
    }
    return { ok: false, reason: 'not-configured' }
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ ...data, source: 'portfolio-contact-form' }),
    })

    if (!response.ok) {
      if (import.meta.env.DEV) {
        console.error(`[contact] Endpoint responded with HTTP ${response.status}.`)
      }
      return { ok: false, reason: 'server' }
    }

    return { ok: true }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('[contact] Request failed before a response was received.', error)
    }
    return { ok: false, reason: 'network' }
  }
}

/**
 * Spam protection is intentionally not implemented yet: the service is the
 * right place for it, and it should follow whatever the configured provider
 * supports (honeypot field, provider-side filtering, or a challenge). Adding a
 * client-only CAPTCHA here would not stop automated submissions.
 */
