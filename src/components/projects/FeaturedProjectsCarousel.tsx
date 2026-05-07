import React from 'react'
import { Button } from '../Button'
import { FeaturedProjectCard } from './FeaturedProjectCard'
import type { FeaturedPosition } from './useFeaturedProjectsCarousel'
import type { Project } from '../../types/portfolio'

type FeaturedProjectsCarouselProps = {
  featuredProjects: Project[]
  activeIndex: number
  getPosition: (index: number) => FeaturedPosition
  onSelectIndex: (index: number) => void
  onPrev: () => void
  onNext: () => void
}

const getStyle = (position: FeaturedPosition) => {
  switch (position) {
    case 'active':
      return {
        transform: 'translateX(-50%) scale(1)',
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto' as const,
      }

    case 'prev':
      return {
        transform: 'translateX(-118%) scale(0.9)',
        opacity: 0.45,
        zIndex: 20,
        pointerEvents: 'auto' as const,
      }

    case 'next':
      return {
        transform: 'translateX(18%) scale(0.9)',
        opacity: 0.45,
        zIndex: 20,
        pointerEvents: 'auto' as const,
      }

    default:
      return {
        transform: 'translateX(-50%) scale(0.82)',
        opacity: 0,
        zIndex: 10,
        pointerEvents: 'none' as const,
      }
  }
}

export const FeaturedProjectsCarousel: React.FC<
  FeaturedProjectsCarouselProps
> = ({
  featuredProjects,
  activeIndex,
  getPosition,
  onSelectIndex,
  onPrev,
  onNext,
}) => {
  const featuredCount = featuredProjects.length

  return (
    <div className="mb-20">
        <div
          className="relative mx-auto h-[clamp(420px,52vh,620px)] max-w-6xl"
          tabIndex={0}
          role="region"
          aria-label="Featured projects carousel"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') onPrev()
            if (e.key === 'ArrowRight') onNext()
          }}
        >
          {/* Slides */}
          {featuredProjects.map((project, index) => {
            const position = getPosition(index)
            const style = getStyle(position)

            return (
              <div
                key={project.id}
                role="button"
                tabIndex={position === 'active' ? 0 : -1}
                className="absolute inset-y-2 left-1/2 w-full max-w-4xl -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  pointerEvents: style.pointerEvents,
                }}
                onClick={() => onSelectIndex(index)}
                aria-label={`Select featured project: ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onSelectIndex(index)
                  }
                }}
              >
                <div className="h-full">
                  <FeaturedProjectCard
                    project={project}
                    position={position}
                  />
                </div>
              </div>
            )
          })}

          {/* Controls */}
          {featuredCount > 1 && (
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-2 pb-2 sm:px-6">
              {/* Prev */}
              <Button
                variant="ghost"
                size="sm"
                className="h-11 w-11 rounded-full border border-outline-variant/30 bg-surface-container/70 p-0 backdrop-blur-md"
                magnetic={false}
                type="button"
                onClick={onPrev}
              >
                ‹
              </Button>

              {/* Indicators */}
              <div
                className="flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container/70 px-4 py-2 backdrop-blur-md"
                aria-label="Carousel positions"
              >
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => onSelectIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'h-2 w-10 bg-primary'
                        : 'h-2 w-2 bg-outline-variant hover:bg-primary/60'
                    }`}
                    aria-label={`Go to ${project.title}`}
                  />
                ))}
              </div>

              {/* Next */}
              <Button
                variant="ghost"
                size="sm"
                className="h-11 w-11 rounded-full border border-outline-variant/30 bg-surface-container/70 p-0 backdrop-blur-md"
                magnetic={false}
                type="button"
                onClick={onNext}
              >
                ›
              </Button>
            </div>
          )}
        </div>
    </div>
  )
}