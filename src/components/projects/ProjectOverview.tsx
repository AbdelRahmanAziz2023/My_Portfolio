import type { Project } from '../../types/project'
import { ProjectPlaceholder } from './ProjectPlaceholder'

interface ProjectOverviewProps {
  project: Project
}

/**
 * Case-study overview: Problem and Solution rendered as distinct
 * visual sections (never merged into one paragraph). Missing fields use
 * placeholders so the data can be completed later.
 */
export function ProjectOverview({ project }: ProjectOverviewProps) {
  const parts = [
    ['Problem', project.problem],
    ['Solution', project.solution],
  ] as const

  return (
    <div className="space-y-8">
      {parts.map(([label, value]) => (
        <div key={label} className="border-l-2 border-primary/40 pl-5 sm:pl-6">
          <p className="badge-label mb-2 text-primary">{label}</p>
          {value ? (
            <p className="body-main text-pretty">{value}</p>
          ) : (
            <ProjectPlaceholder label={label} />
          )}
        </div>
      ))}
    </div>
  )
}
