import { useState } from 'react'
import type { ProjectImage } from '../../types/project'
import { ImageLightbox } from '../common/ImageLightbox'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

/**
 * Responsive, lazy-loaded project gallery sharing the site-wide lightbox.
 *
 * - 'hero' images render full-width and load eagerly (critical visual).
 * - 'gallery'/'screen' images lazy-load in a responsive grid.
 * - Captions render only when provided.
 * - Aspect-ratio containers preserve layout and prevent shift.
 * - The shared ImageLightbox handles focus, Escape and backdrop dismissal.
 */
export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeImage = activeIndex === null ? undefined : images[activeIndex]

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
        <ImageLightbox
          src={activeImage.src}
          alt={activeImage.alt}
          caption={activeImage.caption}
          closeLabel="Close enlarged image"
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  )
}
