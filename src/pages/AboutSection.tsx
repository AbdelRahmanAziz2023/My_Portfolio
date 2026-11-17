import React from 'react'
import { Card } from '../components/Card'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { milestones } from '../data/portfolio'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Profile"
            title="About & experience"
            subtitle="A concise overview of my professional background and experience."
          />
        </RevealOnScroll>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll delayMs={40}>
            <Card elevation="floating" className="h-full">
              <p className="badge-label mb-3 text-secondary">Professional summary</p>
              <h3 className="heading-card mb-4 text-on-surface">
                Full-stack and mobile experience
              </h3>
              <p className="body-main text-pretty">
                My experience spans Salla and Zid storefront customization, Node.js backend and
                REST API work, and contributions to React Native customer and vendor apps.
              </p>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delayMs={80}>
            <Card elevation="interactive" className="h-full">
              <p className="badge-label mb-3 text-secondary">Career timeline</p>
              <ol className="relative space-y-8 border-l border-outline-variant/60 pl-6">
                {milestones.map((milestone) => (
                  <li key={milestone.year} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-surface shadow-[0_0_12px_rgba(207,188,255,0.5)]"
                    />
                    <p className="badge-label text-primary">{milestone.year}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-on-surface">
                      {milestone.title}
                    </p>
                    <p className="body-sm mt-2 text-pretty">{milestone.detail}</p>
                  </li>
                ))}
              </ol>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
