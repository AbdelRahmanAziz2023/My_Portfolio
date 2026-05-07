import React from 'react'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { highlightCards } from '../data/portfolio'

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
      </div>
    </section>
  )
}
