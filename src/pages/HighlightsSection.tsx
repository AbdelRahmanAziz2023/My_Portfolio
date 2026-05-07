import React from 'react'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { highlightCards, trustedLogos } from '../data/portfolio'

export const HighlightsSection: React.FC = () => {
  return (
    <section id="highlights" className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="What I do"
            title="Highlights"
            subtitle="Focused capabilities that map how I ship products end-to-end — from mobile surfaces to APIs and delivery discipline."
          />
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlightCards.map((card, i) => (
            <RevealOnScroll key={card.title} delayMs={i * 70}>
              <div className="group h-full rounded-xl border border-outline-variant/40 bg-gradient-to-br from-surface-container-high/70 to-surface-container/50 p-6 shadow-none backdrop-blur-md transition-all duration-300 hover:border-primary/35 hover:shadow-glow">
                <div className="flex h-full flex-col">
                  <span className="mb-4 text-3xl" aria-hidden>
                    {card.icon}
                  </span>
                  <h3 className="heading-card mb-2 text-on-surface">{card.title}</h3>
                  <p className="body-sm flex-grow">{card.body}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delayMs={120} className="mt-16">
          <p className="badge-label mb-6 text-center text-on-surface-variant">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {trustedLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex h-14 min-w-[120px] items-center justify-center rounded-lg border border-outline-variant/40 bg-surface-container/50 px-6 text-sm font-medium text-on-surface-variant backdrop-blur-sm transition-all hover:border-primary/30 hover:text-primary"
                title={logo.name}
              >
                {logo.imageUrl ? (
                  <img src={logo.imageUrl} alt="" className="max-h-8 object-contain opacity-80" />
                ) : (
                  <span className="font-display tracking-wide">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
