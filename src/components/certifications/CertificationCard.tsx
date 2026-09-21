import { buttonClasses } from '../common/buttonStyles'
import type { Certification } from '../../types/certification'

interface CertificationCardProps {
  certification: Certification
  onViewCertificate: (image: { src: string; alt: string }) => void
}

/**
 * Single certification card. Only existing fields render — no fake
 * verification buttons, no empty labels. The certificate thumbnail is
 * lazy-loaded; the full-size image loads only when the viewer opens.
 */
export function CertificationCard({ certification, onViewCertificate }: CertificationCardProps) {
  const openCertificate = () => {
    if (!certification.certificateImage) return
    onViewCertificate({
      src: certification.certificateImage,
      alt: `${certification.title} certificate`,
    })
  }

  return (
    <article className="flex flex-col rounded-xl border border-outline-variant/40 bg-surface-container/80 p-6 backdrop-blur-md">
      <h3 className="heading-card text-on-surface">{certification.title}</h3>
      <p className="body-sm mt-1 font-medium text-secondary">{certification.issuer}</p>

      {(certification.issueDate || certification.expirationDate) && (
        <p className="body-sm mt-3 text-on-surface-variant">
          {certification.issueDate && <span>Issued: {certification.issueDate}</span>}
          {certification.issueDate && certification.expirationDate && (
            <span aria-hidden> · </span>
          )}
          {certification.expirationDate && <span>Expires: {certification.expirationDate}</span>}
        </p>
      )}

      {certification.credentialId && (
        <p className="body-sm mt-1 text-on-surface-variant">
          Credential ID: {certification.credentialId}
        </p>
      )}

      {certification.certificateImage && (
        <button
          type="button"
          onClick={openCertificate}
          aria-label={`View certificate: ${certification.title}`}
          className="group mt-5 overflow-hidden rounded-lg border border-outline-variant/40 transition-all duration-300 hover:border-primary/35"
        >
          <span className="block aspect-[4/3] overflow-hidden">
            <img
              src={certification.certificateImage}
              alt={`${certification.title} certificate`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </span>
        </button>
      )}

      {(certification.certificateImage || certification.verificationUrl) && (
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {certification.certificateImage && (
            <button
              type="button"
              onClick={openCertificate}
              className={buttonClasses('primary', 'sm')}
            >
              View Certificate
            </button>
          )}
          {certification.verificationUrl && (
            <a
              href={certification.verificationUrl}
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
  )
}
