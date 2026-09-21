import { Link, useParams } from 'react-router'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { TagPill } from '../components/TagPill'
import { getProjectBySlug } from '../data/projects'

/**
 * Project details route ("/projects/:slug") — architectural placeholder.
 * Renders a minimal summary from the data module; the full case-study
 * UI ships in a later phase.
 */
export function ProjectDetails() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  return (
    <section className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        {project ? (
          <RevealOnScroll>
            <SectionTitle
              eyebrow={project.role ?? 'Project'}
              title={project.title}
              subtitle={project.year}
            />

            <div className="mx-auto max-w-3xl">
              <p className="body-main text-pretty">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TagPill key={tech} variant="primary">
                    {tech}
                  </TagPill>
                ))}
              </div>

              <p className="body-sm mt-10 text-on-surface-variant/70">
                Full case study coming soon.
              </p>

              <Link
                to="/projects"
                className="body-sm mt-4 inline-block text-primary hover:text-secondary"
              >
                ← Back to projects
              </Link>
            </div>
          </RevealOnScroll>
        ) : (
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-section gradient-text">Project not found</h1>
            <p className="body-main mt-4">The project you are looking for does not exist.</p>
            <Link
              to="/projects"
              className="body-sm mt-6 inline-block text-primary hover:text-secondary"
            >
              ← Back to projects
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
