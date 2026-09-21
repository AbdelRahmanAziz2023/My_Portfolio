import { buttonClasses } from '../common/buttonStyles'
import type { Project } from '../../types/project'

interface ProjectLinksProps {
  links?: Project['links']
  className?: string
}

/**
 * External project actions: Live Demo, GitHub, App Store, Google Play.
 *
 * Only renders an action when its URL exists — never a fake/disabled
 * button. Semantic <a> elements, opened safely. Normal links never use
 * window.open.
 */
export function ProjectLinks({ links, className = '' }: ProjectLinksProps) {
  if (!links) return null

  const hasAny =
    links.live || links.github || links.store?.appStore || links.store?.googlePlay
  if (!hasAny) return null

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses('primary', 'md')}
        >
          Live Demo
        </a>
      )}

      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses('outline', 'md')}
        >
          GitHub
        </a>
      )}

      {links.store?.appStore && (
        <a
          href={links.store.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses('secondary', 'md')}
        >
          App Store
        </a>
      )}

      {links.store?.googlePlay && (
        <a
          href={links.store.googlePlay}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses('secondary', 'md')}
        >
          Google Play
        </a>
      )}
    </div>
  )
}
