import { ProjectCard } from './ProjectCard'
import type { Project } from '../../types/project'

interface ProjectsGridProps {
  projects: Project[]
}

/**
 * Responsive grid of ProjectCards with an on-brand empty state.
 * Desktop: 3 columns · Tablet: 2 · Mobile: 1 (no horizontal overflow).
 */
export function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="mx-auto max-w-xl rounded-xl border border-outline-variant/40 bg-surface-container/60 p-10 text-center backdrop-blur-md">
        <p className="body-main text-on-surface-variant">
          Projects will be displayed here soon.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
