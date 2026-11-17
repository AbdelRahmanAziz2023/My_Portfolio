import React from 'react'
import { Link } from 'react-router'
import { Card } from '../components/Card'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { TagPill } from '../components/TagPill'
import { milestones, skills } from '../data/portfolio'

const SkillBadge: React.FC<{ text: string }> = ({ text }) => (
  <TagPill variant="primary" className="rounded-full px-3 py-1">
    {text}
  </TagPill>
)

export const AboutSection: React.FC = () => {
  const groupedSkills = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    mobile: skills.filter((s) => s.category === 'mobile'),
    integrations: skills.filter((s) => s.category === 'integrations'),
    tools: skills.filter((s) => s.category === 'tools'),
  }

  return (
    <section id="about" className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Profile"
            title="About & experience"
            subtitle="Experience across full-stack software development, with React Native as a complementary specialization."
          />
        </RevealOnScroll>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="stack-lg">
            <RevealOnScroll delayMs={40}>
              <Card elevation="floating">
                <h3 className="heading-card mb-4 text-on-surface">Professional background</h3>
                <p className="body-main mb-4">
                  I&apos;m a Full-Stack Software Engineer working on storefront customization, Node.js
                  backends, REST APIs, and mobile applications.
                </p>
                <p className="body-main">
                  My experience includes React Native development, third-party integrations, and
                  contributing to web and mobile project work.
                </p>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100}>
              <Card elevation="interactive">
                <h3 className="heading-card mb-4 text-on-surface">Experience highlights</h3>
                <ul className="space-y-3">
                  {[
                    'Customized Salla and Zid storefronts using HTML, CSS, and JavaScript',
                    'Developed Node.js REST and backend features with database, authentication, third-party, and MQTT integrations',
                    'Built React Native customer and vendor apps with Paymob payment integration',
                    'Worked on mobile UI, navigation, API integration, debugging, and deployment assistance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-secondary" aria-hidden>
                        ✦
                      </span>
                      <span className="body-sm text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </RevealOnScroll>
          </div>

          <div className="stack-lg">
            <RevealOnScroll delayMs={60}>
              <Card elevation="interactive">
                <h3 className="heading-card mb-6 text-on-surface">Timeline</h3>
                <ol className="relative space-y-8 border-l border-outline-variant/60 pl-6">
                  {milestones.map((m) => (
                    <li key={m.year} className="relative">
                      <span className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-surface shadow-[0_0_12px_rgba(207,188,255,0.5)]" />
                      <p className="badge-label text-primary">{m.year}</p>
                      <p className="mt-1 font-display text-lg font-semibold text-on-surface">{m.title}</p>
                      <p className="body-sm mt-1">{m.detail}</p>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 border-t border-outline-variant/40 pt-4">
                  <Link
                    to="/education"
                    className="text-sm font-medium text-primary transition-colors hover:text-secondary"
                  >
                    View Education &amp; Certifications
                  </Link>
                </div>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={140}>
              <div className="grid gap-6 sm:grid-cols-2">
                {(
                  [
                    ['Frontend', groupedSkills.frontend],
                    ['Backend', groupedSkills.backend],
                    ['Mobile', groupedSkills.mobile],
                    ['State & integrations', groupedSkills.integrations],
                    ['Tools', groupedSkills.tools],
                  ] as const
                ).map(([label, list]) => (
                  <Card key={label} elevation="base" hover={false} className="p-5 sm:p-6">
                    <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-secondary">
                      {label}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {list.map((skill) => (
                        <SkillBadge key={skill.name} text={skill.name} />
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
