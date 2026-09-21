import { useEffect, useRef } from 'react'

interface CertificateViewerProps {
  image: { src: string; alt: string }
  onClose: () => void
}

/**
 * Dependency-free certificate viewer.
 *
 * Accessible dialog: labelled, modal, Escape closes, backdrop click
 * closes, the close button receives focus on open, and focus is restored
 * to the previously focused element on close.
 */
export function CertificateViewer({ image, onClose }: CertificateViewerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      previouslyFocused?.focus()
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-surface-lowest/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <figure>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
        />
      </figure>

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close certificate view"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container/80 text-2xl text-on-surface backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
      >
        <span aria-hidden>×</span>
      </button>
    </div>
  )
}
