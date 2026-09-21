import React, { useCallback, useEffect, useRef, useState } from 'react'
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
  const frameRef = useRef<number | null>(null)
  const [shift, setShift] = useState({ x: 0, y: 0 })

  // The magnetic effect is pointer-driven decoration: it is skipped entirely
  // for reduced-motion users, and pointer updates are batched to at most one
  // state update per animation frame (instead of one per mousemove event).
  const motionAllowed =
    magnetic && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!motionAllowed || !wrapRef.current) return
      if (frameRef.current !== null) return

      const { clientX, clientY } = e
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null
        const rect = wrapRef.current?.getBoundingClientRect()
        if (!rect) return
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const max = 10
        const x = Math.max(-max, Math.min(max, ((clientX - cx) / rect.width) * max * 2))
        const y = Math.max(-max, Math.min(max, ((clientY - cy) / rect.height) * max * 2))
        setShift({ x, y })
      })
    },
    [motionAllowed],
  )

  const onLeave = useCallback(() => setShift({ x: 0, y: 0 }), [])

  const button = (
    <button
      className={buttonClasses(variant, size, className)}
      style={{
        transform:
          shift.x !== 0 || shift.y !== 0
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
