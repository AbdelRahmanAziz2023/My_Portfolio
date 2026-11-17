import { Link } from 'react-router'
import { getRelatedProjects } from '../../data/projects'
import type { Project } from '../../types/project'
import { ProjectPlaceholder } from './ProjectPlaceholder'

interface RelatedProjectsProps {
  project: Project
}

export function RelatedProjects({ project }: RelatedProjectsProps) {
  const relatedProjects = getRelatedProjects(project)

  if (relatedProjects.length === 0) {
    return <ProjectPlaceholder label="Related projects" />
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {relatedProjects.map((related) => (
        <Link
          key={related.id}
          to={`/projects/${related.slug}`}
          className="group rounded-xl border border-outline-variant/40 bg-surface-container/60 p-5 transition-colors hover:border-primary/35"
        >
          {related.category && (
            <p className="badge-label text-secondary capitalize">{related.category}</p>
          )}
          <h3 className="mt-2 font-display text-lg font-semibold text-on-surface transition-colors group-hover:text-primary">
            {related.title}
          </h3>
          {related.role && (
            <p className="body-sm mt-1 text-on-surface-variant">{related.role}</p>
          )}
        </Link>
      ))}
    </div>
  )
}
