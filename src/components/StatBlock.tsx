import React from 'react'

type StatBlockProps = {
  value: string
  label: string
  className?: string
}

export const StatBlock: React.FC<StatBlockProps> = ({
  value,
  label,
  className = '',
}) => (
  <div className={`text-left ${className}`}>
    <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{value}</div>
    <div className="body-sm mt-1">{label}</div>
  </div>
)
