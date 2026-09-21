import { useCallback, useMemo, useState } from 'react'
import type { Project } from '../../types/project'

export type FeaturedPosition = 'active' | 'prev' | 'next' | 'hidden'

export const useFeaturedProjectsCarousel = (featuredProjects: Project[]) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const featuredCount = featuredProjects.length

  const activeProject = useMemo(() => {
    if (!featuredProjects.length) return undefined
    return featuredProjects[Math.min(activeIndex, featuredProjects.length - 1)]
  }, [activeIndex, featuredProjects])

  const goNext = useCallback(() => {
    if (!featuredCount) return
    setActiveIndex((prev) => (prev + 1) % featuredCount)
  }, [featuredCount])

  const goPrev = useCallback(() => {
    if (!featuredCount) return
    setActiveIndex((prev) => (prev - 1 + featuredCount) % featuredCount)
  }, [featuredCount])

  const getPosition = useCallback(
    (index: number): FeaturedPosition => {
      if (!featuredCount) return 'hidden'
      if (index === activeIndex) return 'active'

      const prev = (activeIndex - 1 + featuredCount) % featuredCount
      const next = (activeIndex + 1) % featuredCount

      if (index === prev) return 'prev'
      if (index === next) return 'next'
      return 'hidden'
    },
    [activeIndex, featuredCount],
  )

  return {
    featuredCount,
    activeIndex,
    setActiveIndex,
    activeProject,
    goNext,
    goPrev,
    getPosition,
  }
}

