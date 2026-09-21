import { ProjectLinks } from './ProjectLinks'
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
    <header className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Logo panel */}
      <div className="relative order-2 flex min-h-[220px] items-center justify-center overflow-hidden rounded-xl border border-outline-variant/40 bg-gradient-to-br from-primary-container/20 via-surface-container-high to-secondary/10 p-8 lg:order-1 lg:col-span-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
          style={{
            background:
              'radial-gradient(circle at 30% 20%, rgba(207,188,255,0.18), transparent 60%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.10), transparent 55%)',
          }}
        />

        {project.logo ? (
          <img
            src={project.logo}
            alt={`${project.title} logo`}
            className="relative z-10 max-h-36 w-auto max-w-full object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
          />
        ) : (
          <span aria-hidden className="relative z-10 font-display text-6xl text-primary/30">
            ◇
          </span>
        )}
      </div>

      {/* Content */}
      <div className="order-1 lg:order-2 lg:col-span-7">
        {project.category && (
          <p className="badge-label mb-3 text-secondary capitalize">{project.category}</p>
        )}

        <h1 className="heading-section text-on-surface">{project.title}</h1>

        {project.subtitle && (
          <p className="mt-3 font-display text-xl font-semibold text-primary">
            {project.subtitle}
          </p>
        )}

        <p className="body-main mt-5 max-w-2xl text-pretty">{project.description}</p>

        {(project.year || project.duration || project.role) && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.year && <TagPill variant="secondary">{project.year}</TagPill>}
            {project.duration && <TagPill variant="secondary">{project.duration}</TagPill>}
            {project.role && <TagPill variant="secondary">{project.role}</TagPill>}
          </div>
        )}

        <ProjectLinks links={project.links} className="mt-8" />
      </div>
    </header>
  )
}
