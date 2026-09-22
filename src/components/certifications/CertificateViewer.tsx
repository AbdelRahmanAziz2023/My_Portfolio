import { ImageLightbox } from '../common/ImageLightbox'

interface CertificateViewerProps {
  image: { src: string; alt: string }
  onClose: () => void
}

/**
 * Certificate modal — a thin wrapper over the shared ImageLightbox so the
 * certificate viewer and the project gallery use one dialog implementation:
 * labelled dialog, focus trapped inside, Escape/backdrop close, and focus
 * restored to the control that opened it.
 */
export function CertificateViewer({ image, onClose }: CertificateViewerProps) {
  return (
    <ImageLightbox
      src={image.src}
      alt={image.alt}
      closeLabel="Close certificate view"
      onClose={onClose}
    />
  )
}
