import { TagPill } from '../TagPill'
import type { Project } from '../../types/project'

interface ProjectHeroProps {
  project: Project
}

/**
 * Editorial hero for the Project Details page.
 * Only renders fields that exist in the data — no empty labels,
 * no empty containers, no invented values.
 */
export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="max-w-4xl">
      <div className="flex items-start gap-4">
        {project.logo && (
          <img
            src={project.logo}
            alt=""
            aria-hidden="true"
            className="mt-1 h-10 w-10 shrink-0 object-contain"
          />
        )}

        <div>
          {project.category && (
            <p className="badge-label mb-3 text-secondary capitalize">{project.category}</p>
          )}

          <h1 className="heading-section text-on-surface">{project.title}</h1>
        </div>
      </div>

      {project.subtitle && (
        <p className="mt-4 font-display text-xl font-semibold text-primary">
          {project.subtitle}
        </p>
      )}

      <p className="body-main mt-4 max-w-3xl text-pretty">{project.description}</p>

      {(project.year || project.duration || project.role) && (
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.year && <TagPill variant="secondary">{project.year}</TagPill>}
          {project.duration && <TagPill variant="secondary">{project.duration}</TagPill>}
          {project.role && <TagPill variant="secondary">{project.role}</TagPill>}
        </div>
      )}
    </header>
  )
}
