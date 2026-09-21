import { Link } from 'react-router'
import type { Project } from '../../types/project'

interface ProjectNavigationProps {
  previous?: Project
  next?: Project
}

/**
 * Previous / next project navigation based on the centralized array order.
 * Missing sides are hidden (non-circular); the whole component hides when
 * there is nothing to navigate to.
 */
export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  if (!previous && !next) return null

  const linkClasses =
    'group block rounded-xl border border-outline-variant/40 bg-surface-container/60 p-5 no-underline backdrop-blur-md transition-all duration-300 hover:border-primary/35 hover:shadow-glow'

  return (
    <nav aria-label="More projects" className="grid gap-4 border-t border-outline-variant/40 pt-10 sm:grid-cols-2">
      {previous && (
        <Link to={`/projects/${previous.slug}`} className={linkClasses}>
          <span className="badge-label text-on-surface-variant">← Previous Project</span>
          <span className="mt-1 block font-display text-lg font-semibold text-primary transition-colors group-hover:text-secondary">
            {previous.title}
          </span>
        </Link>
      )}

      {next && (
        <Link
          to={`/projects/${next.slug}`}
          className={`${linkClasses} ${previous ? '' : 'sm:col-start-2'}`}
        >
          <span className="badge-label text-on-surface-variant sm:text-right">
            Next Project →
          </span>
          <span className="mt-1 block text-right font-display text-lg font-semibold text-primary transition-colors group-hover:text-secondary">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  )
}
