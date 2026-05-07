import React from 'react'
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
        transform: 'translateX(-50%) translateY(-50%) scale(1)',
        opacity: 1,
        zIndex: 40,
        filter: 'blur(0px)',
        pointerEvents: 'auto' as const,
      }

    case 'prev':
      return {
        transform: 'translateX(-110%) translateY(-50%) scale(0.9)',
        opacity: 0.25,
        zIndex: 20,
        filter: 'blur(1px)',
        pointerEvents: 'none' as const,
      }

    case 'next':
      return {
        transform: 'translateX(10%) translateY(-50%) scale(0.9)',
        opacity: 0.25,
        zIndex: 20,
        filter: 'blur(1px)',
        pointerEvents: 'none' as const,
      }

    default:
      return {
        transform: 'translateX(-50%) translateY(-50%) scale(0.85)',
        opacity: 0,
        zIndex: 0,
        filter: 'blur(2px)',
        pointerEvents: 'none' as const,
      }
  }
}

export const FeaturedProjectsCarousel: React.FC<
  FeaturedProjectsCarouselProps
> = ({
  featuredProjects,
  getPosition,
  onSelectIndex,
  onPrev,
  onNext,
}) => {
  return (
    <div className="my-30 sm:my-35 lg:my-40">
      <div
        className="
          relative mx-auto flex items-center justify-center
          h-[clamp(380px,50vh,600px)]
          max-w-6xl overflow-visible
        "
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
              className="
                absolute left-1/2 top-1/2
                w-full max-w-4xl
                -translate-x-1/2 -translate-y-1/2
                px-2 sm:px-0
                transition-all duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
              "
              style={{
                transform: style.transform,
                opacity: style.opacity,
                zIndex: style.zIndex,
                filter: style.filter,
                pointerEvents: style.pointerEvents,
              }}
              onClick={() => onSelectIndex(index)}
            >
              <FeaturedProjectCard
                project={project}
                position={position}
              />
            </div>
          )
        })}

        {/* Navigation */}
        {featuredProjects.length > 1 && (
          <>
            {/* Prev */}
            <button
              onClick={onPrev}
              className="
                absolute left-1 sm:left-4 md:left-6
                flex h-11 w-11 sm:h-12 sm:w-12
                items-center justify-center
                rounded-full border border-outline-variant/30
                bg-surface-container/70
                text-lg text-on-surface
                transition-all
                hover:bg-surface-container-high
                active:scale-95
                backdrop-blur-md
              "
              aria-label="Previous project"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={onNext}
              className="
                absolute right-1 sm:right-4 md:right-6
                flex h-11 w-11 sm:h-12 sm:w-12
                items-center justify-center
                rounded-full border border-outline-variant/30
                bg-surface-container/70
                text-lg text-on-surface
                transition-all
                hover:bg-surface-container-high
                active:scale-95
                backdrop-blur-md
              "
              aria-label="Next project"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  )
}