import { useState } from 'react'
import { CertificateViewer } from '../certifications/CertificateViewer'
import { buttonClasses } from '../common/buttonStyles'
import type { TrainingItem } from '../../types/education'

interface TrainingSectionProps {
  items: TrainingItem[]
}

/**
 * Professional training cards. Only existing fields render — the
 * certificate viewer opens on demand, verification links are real
 * external <a> elements (never window.open).
 */
export function TrainingSection({ items }: TrainingSectionProps) {
  const [viewerImage, setViewerImage] = useState<{ src: string; alt: string } | null>(null)

  const openCertificate = (item: TrainingItem) => {
    if (!item.certificateImage) return
    setViewerImage({ src: item.certificateImage, alt: `${item.title} certificate` })
  }

  if (items.length === 0) {
    return (
      <p className="rounded-xl border border-outline-variant/40 bg-surface-container/60 p-6 text-center backdrop-blur-md">
        <span className="body-sm text-on-surface-variant">
          No professional training has been added yet.
        </span>
      </p>
    )
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-xl border border-outline-variant/40 bg-surface-container/80 p-6 backdrop-blur-md"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="heading-card text-on-surface">{item.title}</h3>
              {(item.startDate || item.endDate) && (
                <p className="badge-label text-primary">
                  {item.startDate}
                  {item.startDate && item.endDate ? ' — ' : ''}
                  {item.endDate}
                </p>
              )}
            </div>

            <p className="body-sm mt-1 font-medium text-secondary">{item.provider}</p>

            {item.description && (
              <p className="body-main mt-3 text-pretty">{item.description}</p>
            )}

            {(item.certificateImage || item.verificationUrl) && (
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {item.certificateImage && (
                  <button
                    type="button"
                    onClick={() => openCertificate(item)}
                    className={buttonClasses('primary', 'sm')}
                  >
                    View Certificate
                  </button>
                )}
                {item.verificationUrl && (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses('outline', 'sm')}
                  >
                    Verify Credential
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      {viewerImage && (
        <CertificateViewer image={viewerImage} onClose={() => setViewerImage(null)} />
      )}
    </>
  )
}
