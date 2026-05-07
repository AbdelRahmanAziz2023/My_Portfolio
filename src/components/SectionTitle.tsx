import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  eyebrow?: string
  centered?: boolean
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  eyebrow,
  centered = true,
}) => {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p className={`badge-label mb-3 text-secondary ${centered ? '' : ''}`}>{eyebrow}</p>
      )}
      <h2 className={`heading-section mb-4 ${centered ? 'mx-auto max-w-4xl' : ''}`}>
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p
          className={`body-main max-w-2xl text-on-surface-variant ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
