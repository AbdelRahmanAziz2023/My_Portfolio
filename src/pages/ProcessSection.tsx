import React from 'react'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { processSteps } from '../data/portfolio'

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="How I work"
            title="Process"
            subtitle="A repeatable loop from discovery to shipping — optimized for clarity, velocity, and maintainable systems."
          />
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <RevealOnScroll key={step.title} delayMs={i * 80}>
              <div className="relative h-full overflow-hidden rounded-xl border border-outline-variant/45 bg-surface-container/70 p-6 backdrop-blur-lg transition-all duration-300 hover:border-secondary/40 hover:shadow-glow">
                <span className="font-display text-5xl font-bold text-primary/20">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="heading-card mt-2 text-on-surface">{step.title}</h3>
                <p className="body-sm mt-3">{step.body}</p>
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary/10 blur-2xl"
                  aria-hidden
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
