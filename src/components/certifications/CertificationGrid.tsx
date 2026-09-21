import { useState } from 'react'
import { CertificationCard } from './CertificationCard'
import { CertificateViewer } from './CertificateViewer'
import type { Certification } from '../../types/certification'

interface CertificationGridProps {
  items: Certification[]
}

/**
 * Certifications grid with empty state and on-demand certificate viewing.
 * Desktop: 3 columns · Tablet: 2 · Mobile: 1 (no horizontal overflow).
 */
export function CertificationGrid({ items }: CertificationGridProps) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)

  if (items.length === 0) {
    return (
      <p className="rounded-xl border border-outline-variant/40 bg-surface-container/60 p-6 text-center backdrop-blur-md">
        <span className="body-sm text-on-surface-variant">
          No certifications have been added yet.
        </span>
      </p>
    )
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
            onViewCertificate={setActiveImage}
          />
        ))}
      </div>

      {activeImage && (
        <CertificateViewer image={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </>
  )
}
