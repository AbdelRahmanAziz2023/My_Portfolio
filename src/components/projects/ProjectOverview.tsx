import type { Project } from '../../types/project'

interface ProjectOverviewProps {
  project: Project
}

/**
 * Case-study overview: Problem / Solution / Impact rendered as distinct
 * visual sections (never merged into one paragraph). Fields that do not
 * exist in the data are simply omitted.
 */
export function ProjectOverview({ project }: ProjectOverviewProps) {
  const parts = [
    ['Problem', project.problem],
    ['Solution', project.solution],
    ['Impact', project.impact],
  ] as const

  return (
    <div className="space-y-8">
      {parts.map(([label, value]) =>
        value ? (
          <div key={label} className="border-l-2 border-primary/40 pl-5 sm:pl-6">
            <p className="badge-label mb-2 text-primary">{label}</p>
            <p className="body-main text-pretty">{value}</p>
          </div>
        ) : null,
      )}
    </div>
  )
}
