import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * Scrolls the window back to the top on client-side navigation.
 * Hash locations (e.g. /#about) are skipped so in-page anchor
 * navigation keeps working.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
