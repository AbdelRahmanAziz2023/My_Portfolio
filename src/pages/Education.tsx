import { Seo } from '../components/common/Seo'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { CertificationGrid } from '../components/certifications/CertificationGrid'
import { EducationTimeline } from '../components/education/EducationTimeline'
import { TrainingSection } from '../components/education/TrainingSection'
import { certifications } from '../data/certifications'
import { education, training } from '../data/education'
import { pageMeta } from '../data/siteMeta'

/**
 * Education route ("/education").
 * Education, professional training, and certifications — all driven by the
 * centralized typed data in src/data/education.ts and src/data/certifications.ts.
 */
export function Education() {
  return (
    <section className="section-padding scroll-mt-24 bg-surface">
      <Seo title={pageMeta.education.title} description={pageMeta.education.description} />
      <div className="container-custom">
        {/* Page header */}
        <RevealOnScroll>
          <header className="mb-12 text-center sm:mb-16">
            <p className="badge-label mb-3 text-secondary">Background</p>
            <h1 className="heading-section mb-4">
              <span className="gradient-text">Education &amp; Certifications</span>
            </h1>
            <p className="body-main mx-auto max-w-2xl text-on-surface-variant">
              Formal education, professional training, and certifications.
            </p>
          </header>
        </RevealOnScroll>

        <div className="mx-auto max-w-4xl space-y-16">
          {/* Education */}
          <RevealOnScroll>
            <section>
              <p className="badge-label mb-2 text-secondary">01</p>
              <h2 className="heading-card mb-6 text-on-surface">Education</h2>
              <EducationTimeline items={education} />
            </section>
          </RevealOnScroll>

          {/* Professional Training */}
          <RevealOnScroll>
            <section>
              <p className="badge-label mb-2 text-secondary">02</p>
              <h2 className="heading-card mb-6 text-on-surface">Professional Training</h2>
              <TrainingSection items={training} />
            </section>
          </RevealOnScroll>

          {/* Certifications */}
          <RevealOnScroll>
            <section>
              <p className="badge-label mb-2 text-secondary">03</p>
              <h2 className="heading-card mb-6 text-on-surface">Certifications</h2>
              <CertificationGrid items={certifications} />
            </section>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
