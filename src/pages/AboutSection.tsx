import React from 'react'
import { Card } from '../components/Card'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { TagPill } from '../components/TagPill'
import { skills } from '../data/portfolio'

const SkillBadge: React.FC<{ text: string }> = ({ text }) => (
  <TagPill variant="primary" className="rounded-full px-3 py-1">
    {text}
  </TagPill>
)

const milestones = [
  { year: '2024', title: 'Mobile & product delivery', detail: 'Shipped RN/Expo flows with persistence, skeleton UX, and production rigor.' },
  { year: '2023', title: 'Full-stack commerce', detail: 'MEAN e-commerce with Stripe, JWT, and admin analytics surfaces.' },
  { year: 'Ongoing', title: 'Craft & performance', detail: 'Profiling real UX wins — fewer spinners, faster paths to value.' },
]

export const AboutSection: React.FC = () => {
  const groupedSkills = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    mobile: skills.filter((s) => s.category === 'mobile'),
    tools: skills.filter((s) => s.category === 'tools'),
  }

  return (
    <section id="about" className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Profile"
            title="About & experience"
            subtitle="Background, milestones, and the stack I reach for when building serious software."
          />
        </RevealOnScroll>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="stack-lg">
            <RevealOnScroll delayMs={40}>
              <Card elevation="floating">
                <h3 className="heading-card mb-4 text-on-surface">Professional background</h3>
                <p className="body-main mb-4">
                  I&apos;m a full-stack software engineer with 2+ years of experience building scalable
                  applications. My expertise spans mobile development, modern frontend frameworks, and
                  backend services.
                </p>
                <p className="body-main">
                  I care about maintainable code, measurable UX, and clear collaboration across design and
                  product. When I&apos;m not coding, I&apos;m exploring new tooling or refining systems that
                  make teams faster.
                </p>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100}>
              <Card elevation="interactive">
                <h3 className="heading-card mb-4 text-on-surface">Experience highlights</h3>
                <ul className="space-y-3">
                  {[
                    'Led development of 2+ production applications',
                    'Improved application performance with measurable UX impact',
                    'Comfortable owning features from API to polished UI',
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
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={140}>
              <div className="grid gap-6 sm:grid-cols-2">
                {(
                  [
                    ['Frontend', groupedSkills.frontend],
                    ['Backend', groupedSkills.backend],
                    ['Mobile', groupedSkills.mobile],
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
