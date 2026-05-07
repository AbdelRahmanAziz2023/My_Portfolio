import React from 'react'

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => (
  <span
    className={`badge-label inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-[0.65rem] text-primary ${className}`}
  >
    {children}
  </span>
)
