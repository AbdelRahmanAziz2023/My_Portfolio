import { Link } from 'react-router'
import { buttonClasses } from '../common/buttonStyles'
import { TagPill } from '../TagPill'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

/**
 * Project card for the dedicated /projects page grid.
 *
 * - Internal navigation ("View Project") uses the router.
 * - External links (Live Demo / GitHub) render only when the URL exists.
 * - Optional fields (logo, category, year) are omitted when missing —
 *   no empty placeholders.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container/80 backdrop-blur-md transition-all duration-300 ease-cinematic hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-glow">
      {/* Logo / image */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-primary-container/20 via-surface-container-high to-secondary/10 p-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(207,188,255,0.22), transparent 55%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.14), transparent 50%)',
          }}
        />

        {project.logo ? (
          <img
            src={project.logo}
            alt={`${project.title} logo`}
            loading="lazy"
            decoding="async"
            className="relative z-10 max-h-28 w-auto max-w-full object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span aria-hidden className="relative z-10 font-display text-5xl text-primary/30">
            ◇
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Meta row — only rendered when at least one value exists */}
        {(project.featured || project.category || project.year) && (
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {project.featured && (
              <span className="rounded-md border border-tertiary/40 bg-tertiary/10 px-2 py-0.5 text-xs font-medium text-tertiary">
                Featured
              </span>
            )}
            {project.category && (
              <TagPill variant="secondary" className="capitalize">
                {project.category}
              </TagPill>
            )}
            {project.year && <TagPill variant="secondary">{project.year}</TagPill>}
          </div>
        )}

        <h3 className="heading-card text-on-surface">{project.title}</h3>

        <p className="body-sm mb-5 mt-2 flex-1 text-pretty text-on-surface-variant">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TagPill key={tech} variant="primary">
              {tech}
            </TagPill>
          ))}
        </div>

        {/* Actions — internal via router, external via real <a> elements */}
        <div className="mt-auto flex flex-wrap items-center gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className={buttonClasses('primary', 'sm')}
          >
            View Project
          </Link>

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses('secondary', 'sm')}
            >
              Live Demo
            </a>
          )}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses('outline', 'sm')}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
