import React from 'react'
import { Link } from 'react-router'
import { Card } from '../components/Card'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { TagPill } from '../components/TagPill'
import { getProjectBySlug } from '../data/projects'

const examples = [
  { title: 'Architecture & APIs', projectSlug: 'link-land-archive' },
  { title: 'Integrations & user workflows', projectSlug: 'swnw-ecommerce' },
  { title: 'Application state & flow', projectSlug: 'order-together' },
]

export const EngineeringApproachSection: React.FC = () => {
  return (
    <section className="section-padding bg-surface-container/30">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="How I build"
            title="Engineering approach"
            subtitle="Examples from project work show how I handle APIs, integrations, and application workflows."
          />
        </RevealOnScroll>

        <div className="grid gap-5 lg:grid-cols-3">
          {examples.map((example, index) => {
            const project = getProjectBySlug(example.projectSlug)
            if (!project) return null

            return (
              <RevealOnScroll key={example.projectSlug} delayMs={index * 50}>
                <Card elevation="base" hover={false} className="h-full">
                  <p className="badge-label mb-3 text-secondary">{example.title}</p>
                  <h3 className="heading-card text-on-surface">{project.title}</h3>
                  <p className="body-sm mt-3 text-pretty text-on-surface-variant">
                    {project.solution || project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <TagPill key={technology} variant="secondary">
                        {technology}
                      </TagPill>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:text-secondary hover:underline"
                  >
                    View case study
                  </Link>
                </Card>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
