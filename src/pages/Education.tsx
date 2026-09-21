import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'

/**
 * Education route ("/education") — architectural placeholder.
 * Education and certification content/models are wired in a later phase.
 */
export function Education() {
  return (
    <section className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Background"
            title="Education & Certifications"
            subtitle="Formal training and certifications — content coming soon."
          />
        </RevealOnScroll>
      </div>
    </section>
  )
}
