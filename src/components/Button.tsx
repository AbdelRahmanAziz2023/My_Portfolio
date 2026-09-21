import React, { useCallback, useRef, useState } from 'react'
import { buttonClasses, type ButtonSize, type ButtonVariant } from './common/buttonStyles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
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

  const button = (
    <button
      className={buttonClasses(variant, size, className)}
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
