import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

/**
 * Keeps navigation predictable for keyboard and screen-reader users:
 *
 * - New route (no hash): scrolls to the top and moves focus to the page's
 *   `<main>` landmark, so the next Tab press starts inside the new page
 *   instead of continuing from the header.
 * - Hash target (e.g. `/#about`): scrolls that section into view instead of
 *   the top, honouring the section's own `scroll-mt-*` offset for the fixed
 *   header. React Router does not do this natively.
 *
 * The very first render is skipped so a fresh page load is not hijacked.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // A fresh load keeps the browser's own behaviour (scroll restoration and
    // native anchor scrolling for deep links).
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const frameId = window.requestAnimationFrame(() => {
      const main = document.getElementById('main')

      if (hash) {
        const target = document.getElementById(hash.slice(1))
        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'instant' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'instant' })
      main?.focus({ preventScroll: true })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [pathname, hash])

  return null
}
