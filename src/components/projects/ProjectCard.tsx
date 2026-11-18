import { Link } from 'react-router'
import { buttonClasses } from '../common/buttonStyles'
import { TagPill } from '../TagPill'
import { getProjectPreview } from '../../data/projects'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

/**
 * Project card for the dedicated /projects page grid.
 *
 * - Internal navigation ("View Case Study") uses the router.
 * - External links (Live Demo / GitHub) render only when the URL exists.
 * - Cards without an available screenshot omit the image area rather than using
 *   a logo or placeholder as project evidence.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const preview = getProjectPreview(project)
  const visibleTechnologies = project.technologies.slice(0, 5)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container/90 transition-[transform,border-color,box-shadow] duration-300 ease-cinematic hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-glow">
      {preview && (
        <figure className="overflow-hidden border-b border-outline-variant/30 bg-surface-low">
          <img
            src={preview.src}
            alt={preview.alt}
            loading="lazy"
            decoding="async"
            className={`h-52 w-full object-contain transition-transform duration-500 group-hover:scale-[1.02] ${
              preview.orientation === 'portrait' ? 'bg-surface-container' : ''
            }`}
          />
        </figure>
      )}

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

        {project.role && (
          <p className="badge-label mt-2 text-secondary">Role: {project.role}</p>
        )}

        <p className="body-sm mb-5 mt-2 flex-1 text-pretty text-on-surface-variant">
          {project.problem || project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {visibleTechnologies.map((tech) => (
            <TagPill key={tech} variant="primary">
              {tech}
            </TagPill>
          ))}
          {project.technologies.length > visibleTechnologies.length && (
            <TagPill variant="secondary">
              +{project.technologies.length - visibleTechnologies.length}
            </TagPill>
          )}
        </div>

        {/* Actions — internal via router, external via real <a> elements */}
        <div className="mt-auto flex flex-wrap items-center gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className={buttonClasses('primary', 'sm')}
          >
            View Case Study
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
