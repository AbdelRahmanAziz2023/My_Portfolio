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
  /**
   * Public production origin used for canonical, Open Graph, sitemap, and
   * robots URLs (e.g. `https://example.com`). Build-time only — it never
   * appears in the bundle unless it is set during the build.
   */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
