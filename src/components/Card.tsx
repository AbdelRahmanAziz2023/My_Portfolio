import React from 'react'

export type CardElevation = 'base' | 'interactive' | 'floating'

interface CardProps {
  className?: string
  children: React.ReactNode
  hover?: boolean
  elevation?: CardElevation
}

const elevationClasses: Record<CardElevation, string> = {
  base: `
    border border-outline-variant/40 bg-surface-container/80
    backdrop-blur-md
  `,
  interactive: `
    border border-outline-variant/50 bg-surface-container-high/70
    backdrop-blur-lg
    hover:border-primary/35 hover:shadow-glow
    hover:bg-surface-container-high/85
  `,
  floating: `
    border border-primary/25 bg-surface-container-highest/75
    backdrop-blur-xl
    shadow-card hover:border-secondary/40 hover:shadow-glow
  `,
}

export const Card: React.FC<CardProps> = ({
  className = '',
  children,
  hover = true,
  elevation = 'interactive',
}) => {
  const motion = hover
    ? 'transition-all duration-300 ease-cinematic hover:-translate-y-0.5'
    : ''

  return (
    <div
      className={`
        rounded-xl p-6 sm:p-8
        ${elevationClasses[elevation]}
        ${motion}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
