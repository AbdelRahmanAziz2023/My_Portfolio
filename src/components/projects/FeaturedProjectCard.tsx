import React from 'react'
import { Card } from '../Card'
import { Button } from '../Button'
import { TagPill } from '../TagPill'
import type { Project } from '../../types/portfolio'
import type { FeaturedPosition } from './useFeaturedProjectsCarousel'

type FeaturedProjectCardProps = {
  project: Project
  position: FeaturedPosition
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
  position,
}) => {
  const isActive = position === 'active'

  return (
    <Card
      elevation={isActive ? 'floating' : 'interactive'}
      className="group relative overflow-hidden p-0"
      hover={false}
    >
      {/* Background Effects */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          isActive ? 'opacity-40 animate-gradient-shift' : 'opacity-20'
        }`}
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(207,188,255,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.18), transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="relative grid lg:grid-cols-12">
        {/* Image Section */}
        <div className="relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-primary-container/30 via-surface-container-high to-secondary/10 p-8 lg:col-span-5">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(circle at 30% 20%, rgba(207,188,255,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.2), transparent 50%)',
            }}
          />

          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="relative z-10 max-h-40 w-full max-w-xs object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <span className="relative z-10 font-display text-6xl text-primary/40">
              ◇
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7">
          {/* Header */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant/40 pb-4">
            <div>
              <h3 className="heading-card text-on-surface">
                {project.title}
              </h3>
              <p className="body-sm mt-1 text-on-surface-variant">
                Case-study slice
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.meta?.role && (
                <TagPill variant="secondary">
                  {project.meta.role}
                </TagPill>
              )}

              {project.meta?.duration && (
                <TagPill variant="secondary">
                  {project.meta.duration}
                </TagPill>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="body-sm mb-6 text-pretty text-on-surface-variant">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-6 grid gap-3 md:grid-cols-3">
              {project.highlights.problem && (
                <div className="rounded-lg border border-outline-variant/35 bg-surface-container/60 p-3 backdrop-blur-sm">
                  <p className="badge-label mb-1 text-primary">Problem</p>
                  <p className="text-xs leading-relaxed text-on-surface-variant">
                    {project.highlights.problem}
                  </p>
                </div>
              )}

              {project.highlights.solution && (
                <div className="rounded-lg border border-outline-variant/35 bg-surface-container/60 p-3 backdrop-blur-sm">
                  <p className="badge-label mb-1 text-primary">Solution</p>
                  <p className="text-xs leading-relaxed text-on-surface-variant">
                    {project.highlights.solution}
                  </p>
                </div>
              )}

              {project.highlights.impact && (
                <div className="rounded-lg border border-outline-variant/35 bg-surface-container/60 p-3 backdrop-blur-sm">
                  <p className="badge-label mb-1 text-primary">Impact</p>
                  <p className="text-xs leading-relaxed text-on-surface-variant">
                    {project.highlights.impact}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TagPill key={tech} variant="primary">
                {tech}
              </TagPill>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.liveUrl, '_blank')
                }}
              >
                Live Demo
              </Button>
            )}

            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(project.githubUrl, '_blank')
                }}
              >
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}