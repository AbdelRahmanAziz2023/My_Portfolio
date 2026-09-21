import { useEffect } from 'react'

interface PageMeta {
  title: string
  description?: string
}

const SITE_NAME = 'Abdelrahman Aziz'

/**
 * Lightweight per-page document metadata (title + meta description).
 *
 * Establishes the SEO foundation for routed pages without a full SEO
 * system: every routed page can set its own title/description, and the
 * previous values are restored on unmount so client-side navigation
 * never leaks one page's metadata into another.
 */
export function usePageMeta({ title, description }: PageMeta): void {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | ${SITE_NAME}`

    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const previousDescription = metaDescription?.getAttribute('content') ?? null
    if (description && metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    return () => {
      document.title = previousTitle
      if (metaDescription && previousDescription !== null) {
        metaDescription.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}
