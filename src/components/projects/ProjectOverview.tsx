import type { Project } from '../../types/project'

interface ProjectOverviewProps {
  project: Project
}

/**
 * Case-study overview: Problem and Solution rendered as distinct
 * visual sections (never merged into one paragraph). Missing fields are omitted.
 */
export function ProjectOverview({ project }: ProjectOverviewProps) {
  const parts = [
    ['Problem', project.problem],
    ['Solution', project.solution],
  ] as const
  const availableParts = parts.filter(([, value]) => Boolean(value))

  if (availableParts.length === 0) return null

  return (
    <div className="space-y-8">
      {availableParts.map(([label, value]) => (
        <div key={label} className="border-l-2 border-primary/40 pl-5 sm:pl-6">
          <p className="badge-label mb-2 text-primary">{label}</p>
          <p className="body-main text-pretty">{value}</p>
        </div>
      ))}
    </div>
  )
}
