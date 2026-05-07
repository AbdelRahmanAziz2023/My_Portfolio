import React from 'react'

type TagPillProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export const TagPill: React.FC<TagPillProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const styles =
    variant === 'primary'
      ? 'border-primary/30 bg-primary/10 text-primary'
      : 'border-secondary/35 bg-secondary/10 text-secondary'
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-0.5 font-sans text-xs font-medium ${styles} ${className}`}
    >
      {children}
    </span>
  )
}
