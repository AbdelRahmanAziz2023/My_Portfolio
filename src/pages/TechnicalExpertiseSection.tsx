import React from 'react'
import { Link } from 'react-router'
import { Card } from '../components/Card'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { TagPill } from '../components/TagPill'
import { getProjectBySlug } from '../data/projects'
import { skills } from '../data/portfolio'
import type { Skill } from '../types/portfolio'
import type { Project } from '../types/project'

const expertiseGroups: {
  title: string
  categories: Skill['category'][]
  projectSlugs: string[]
}[] = [
  { title: 'Frontend', categories: ['frontend'], projectSlugs: ['soundjoy'] },
  {
    title: 'Backend & APIs',
    categories: ['backend'],
    projectSlugs: ['link-land-archive', 'soundjoy'],
  },
  {
    title: 'Mobile',
    categories: ['mobile'],
    projectSlugs: ['link-land-archive', 'order-together', 'swnw-ecommerce'],
  },
  {
    title: 'Engineering & integrations',
    categories: ['integrations', 'tools'],
    projectSlugs: ['link-land-archive', 'swnw-ecommerce', 'order-together'],
  },
]

const resolveProjects = (slugs: string[]): Project[] =>
  slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== undefined)

export const TechnicalExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="section-padding scroll-mt-24 bg-surface-container/30">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Capabilities"
            title="Technical expertise"
            subtitle="Skills grouped by their role in web, backend, mobile, and application delivery."
          />
        </RevealOnScroll>

        <div className="grid gap-5 md:grid-cols-2">
          {expertiseGroups.map((group, index) => {
            const groupSkills = skills.filter((skill) => group.categories.includes(skill.category))
            const examples = resolveProjects(group.projectSlugs)

            return (
              <RevealOnScroll key={group.title} delayMs={index * 40}>
                <Card elevation="base" hover={false} className="h-full">
                  <h3 className="heading-card mb-4 text-on-surface">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {groupSkills.map((skill) => (
                      <TagPill key={skill.name} variant="primary">
                        {skill.name}
                      </TagPill>
                    ))}
                  </div>
                  {examples.length > 0 && (
                    <div className="mt-6 border-t border-outline-variant/40 pt-4">
                      <p className="badge-label mb-3 text-on-surface-variant">
                        Related projects
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {examples.map((project) => (
                          <Link
                            key={project.id}
                            to={`/projects/${project.slug}`}
                            className="text-sm font-medium text-secondary underline-offset-4 hover:underline"
                          >
                            {project.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
