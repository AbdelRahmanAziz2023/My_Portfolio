import { Link } from 'react-router'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/projects'

/**
 * Projects route ("/projects") — architectural placeholder.
 * The final Projects page design will be implemented separately; this
 * minimal listing keeps the route and data wiring functional.
 */
export function Projects() {
  return (
    <section className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Selected work"
            title="Projects"
            subtitle="Work across mobile and web. Full projects page design coming soon."
          />
        </RevealOnScroll>

        <div className="mx-auto max-w-3xl">
          <ul className="stack-lg">
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="block rounded-xl border border-outline-variant/40 bg-surface-container/80 p-6 no-underline backdrop-blur-md transition-all duration-300 hover:border-primary/35 hover:shadow-glow"
                >
                  <span className="heading-card gradient-text">{project.title}</span>
                  {project.role && (
                    <span className="body-sm mt-1 block">{project.role}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
