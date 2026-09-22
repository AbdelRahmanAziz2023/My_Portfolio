import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { setPageMetadata } from '../../utils/seo'

export interface SeoProps {
  /** Page title without the site suffix (or complete, when `absoluteTitle`). */
  title: string
  description?: string
  /** Social preview image path; defaults to the portfolio profile image. */
  image?: string
  type?: 'website' | 'article'
  absoluteTitle?: boolean
  /** Set `false` for non-indexable states (e.g. an unknown project slug). */
  index?: boolean
  /** Override the canonical path; defaults to the current route pathname. */
  path?: string
}

/**
 * Declarative page metadata. Renders nothing — it keeps the document head
 * (title, description, canonical, Open Graph, Twitter card) in sync with the
 * current route through the shared utilities in `src/utils/seo.ts`.
 */
export function Seo({
  title,
  description,
  image,
  type,
  absoluteTitle,
  index,
  path,
}: SeoProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    setPageMetadata({
      title,
      description,
      image,
      type,
      absoluteTitle,
      index,
      path: path ?? pathname,
    })
  }, [title, description, image, type, absoluteTitle, index, path, pathname])

  return null
}
