import { useEffect, useState } from 'react'
import type { ProjectImage } from '../../types/project'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

/**
 * Responsive, lazy-loaded project gallery with a dependency-free lightbox.
 *
 * - 'hero' images render full-width and load eagerly (critical visual).
 * - 'gallery'/'screen' images lazy-load in a responsive grid.
 * - Captions render only when provided.
 * - Aspect-ratio containers preserve layout and prevent shift.
 * - The lightbox is a minimal internal solution (Escape / backdrop click).
 */
export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeImage = activeIndex === null ? undefined : images[activeIndex]

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  const renderImage = (image: ProjectImage, eager: boolean) => (
    <img
      src={image.src}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className="h-full w-full object-cover"
    />
  )

  const galleryButton = (image: ProjectImage, index: number, aspect: string, eager: boolean) => (
    <button
      type="button"
      onClick={() => setActiveIndex(index)}
      aria-label={`View larger: ${image.alt}`}
      className="block w-full overflow-hidden rounded-xl border border-outline-variant/40 transition-all duration-300 hover:border-primary/35"
    >
      <span className={`block ${aspect}`}>{renderImage(image, eager)}</span>
    </button>
  )

  return (
    <>
      <div className="space-y-6">
        {images
          .map((image, index) => ({ image, index }))
          .filter(({ image }) => image.type === 'hero')
          .map(({ image, index }) => (
            <figure key={`${image.src}-${index}`}>
              {galleryButton(image, index, 'aspect-[16/9]', true)}
              {image.caption && (
                <figcaption className="body-sm mt-2 text-on-surface-variant">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}

        <div className="grid gap-4 sm:grid-cols-2">
          {images
            .map((image, index) => ({ image, index }))
            .filter(({ image }) => image.type !== 'hero')
            .map(({ image, index }) => (
              <figure key={`${image.src}-${index}`}>
                {galleryButton(image, index, 'aspect-[4/3]', false)}
                {image.caption && (
                  <figcaption className="body-sm mt-2 text-on-surface-variant">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
        </div>
      </div>

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged image: ${activeImage.alt}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-lowest/95 p-4 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <figure>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
            {activeImage.caption && (
              <figcaption className="body-sm mt-3 text-center text-on-surface-variant">
                {activeImage.caption}
              </figcaption>
            )}
          </figure>
          <button
            type="button"
            autoFocus
            onClick={() => setActiveIndex(null)}
            aria-label="Close enlarged image"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container/80 text-2xl text-on-surface backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
          >
            <span aria-hidden>×</span>
          </button>
        </div>
      )}
    </>
  )
}
