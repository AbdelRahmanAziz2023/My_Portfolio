/**
 * Typed access to the Vite client-exposed environment variables this project
 * relies on. Only `VITE_`-prefixed values reach the browser bundle, so they are
 * public by definition — private credentials must stay server-side.
 *
 * See `.env.example` for the documented variables.
 */
interface ImportMetaEnv {
  /** Public contact-form endpoint. Empty means "no sending service configured". */
  readonly VITE_CONTACT_FORM_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
