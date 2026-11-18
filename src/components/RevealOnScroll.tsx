import React, { useEffect, useRef, useState } from 'react'

type RevealOnScrollProps = {
  children: React.ReactNode
  className?: string
  delayMs?: number
}

/**
 * Fade/slide-in when the element enters the viewport (cinematic section reveals).
 */
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delayMs = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(() => {
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true

    return typeof IntersectionObserver === 'undefined' || reducedMotion
  })

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) setVisible(true)
    }
    reducedMotionQuery.addEventListener?.('change', onMotionPreferenceChange)

    let timeoutId: number | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => {
            setVisible(true)
            observer.unobserve(el)
          }, delayMs)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      reducedMotionQuery.removeEventListener?.('change', onMotionPreferenceChange)
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [delayMs, visible])

  return (
    <div
      ref={ref}
      className={`${visible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
    >
      {children}
    </div>
  )
}
