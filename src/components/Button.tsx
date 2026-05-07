import React, { useCallback, useRef, useState } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  magnetic?: boolean
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  magnetic = true,
  className = '',
  children,
  ...props
}) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [shift, setShift] = useState({ x: 0, y: 0 })

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!magnetic || !wrapRef.current) return
      const rect = wrapRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const max = 10
      const x = Math.max(-max, Math.min(max, ((e.clientX - cx) / rect.width) * max * 2))
      const y = Math.max(-max, Math.min(max, ((e.clientY - cy) / rect.height) * max * 2))
      setShift({ x, y })
    },
    [magnetic]
  )

  const onLeave = useCallback(() => setShift({ x: 0, y: 0 }), [])

  const base =
    'relative z-0 inline-flex items-center justify-center overflow-hidden rounded-lg font-sans font-semibold transition-all duration-300 ease-cinematic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:pointer-events-none disabled:opacity-50'

    const variants: Record<string, string> = {
      primary:
        'border border-primary/30 bg-gradient-to-br from-primary-container to-[#564496] text-white shadow-sm hover:border-primary/50 hover:shadow-[0_0_14px_rgba(207,188,255,0.12)]',
    
      secondary:
        'border border-secondary/30 bg-secondary/10 text-secondary hover:border-secondary/50 hover:bg-secondary/15 hover:shadow-[0_0_12px_rgba(34,211,238,0.12)]',
    
      outline:
        'border border-primary/30 bg-transparent text-primary hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_12px_rgba(207,188,255,0.08)]',
    
      ghost:
        'border border-transparent bg-transparent text-on-surface-variant hover:border-outline-variant/40 hover:text-primary hover:shadow-none',
    }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  const button = (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{
        transform:
          magnetic && (shift.x !== 0 || shift.y !== 0)
            ? `translate(${shift.x}px, ${shift.y}px)`
            : undefined,
      }}
      {...props}
    >
      {children}
    </button>
  )

  if (!magnetic) {
    return <span className="inline-flex">{button}</span>
  }

  return (
    <div
      ref={wrapRef}
      className="inline-flex"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {button}
    </div>
  )
}
