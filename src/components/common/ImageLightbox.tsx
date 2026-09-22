import { useRef } from 'react'
import { useModalDialog } from './useModalDialog'

interface ImageLightboxProps {
  src: string
  /** Alt text for the enlarged image, reused as the dialog's accessible name. */
  alt: string
  caption?: string
  /** Accessible name for the close control (e.g. "Close certificate view"). */
  closeLabel: string
  onClose: () => void
}

/**
 * Dependency-free modal image viewer shared by the project gallery and the
 * certificate viewer.
 *
 * Accessibility behaviour lives in `useModalDialog`: labelled dialog, focus
 * moved inside and trapped while open, Escape closes, and focus returns to the
 * control that opened it. A backdrop click also closes; clicking the image
 * itself does not.
 */
export function ImageLightbox({ src, alt, caption, closeLabel, onClose }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  useModalDialog(dialogRef, onClose)

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-surface-lowest/95 p-4 backdrop-blur-sm"
      onClick={(event) => {
        // Backdrop-only dismissal: interacting with the image never closes it.
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <figure className="flex max-h-full max-w-full flex-col items-center">
        <img
          src={src}
          alt={alt}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
        />
        {caption && (
          <figcaption className="body-sm mt-3 text-center text-on-surface-variant">
            {caption}
          </figcaption>
        )}
      </figure>

      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container/80 text-2xl text-on-surface backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
      >
        <span aria-hidden>×</span>
      </button>
    </div>
  )
}
