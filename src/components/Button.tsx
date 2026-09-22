import React, { useCallback, useEffect, useRef } from 'react'
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
  const buttonRef = useRef<HTMLButtonElement>(null)
  const frameRef = useRef<number | null>(null)

  // The magnetic effect is pointer-only decoration: it is bypassed on touch
  // devices (coarse pointers) and for reduced-motion users, and the transform
  // is written straight to the DOM node inside a rAF — zero React state
  // updates and zero re-renders while the pointer moves.
  const motionAllowed =
    magnetic &&
    !window.matchMedia('(pointer: coarse)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const applyTransform = useCallback((x: number, y: number) => {
    if (buttonRef.current) {
      buttonRef.current.style.transform =
        x === 0 && y === 0 ? '' : `translate(${x}px, ${y}px)`
    }
  }, [])

  const schedule = useCallback(
    (x: number, y: number) => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null
        applyTransform(x, y)
      })
    },
    [applyTransform],
  )

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!motionAllowed || !wrapRef.current) return
      const rect = wrapRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const max = 10
      const x = Math.max(-max, Math.min(max, ((e.clientX - cx) / rect.width) * max * 2))
      const y = Math.max(-max, Math.min(max, ((e.clientY - cy) / rect.height) * max * 2))
      schedule(x, y)
    },
    [motionAllowed, schedule],
  )

  const onLeave = useCallback(() => {
    if (motionAllowed) schedule(0, 0)
  }, [motionAllowed, schedule])

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const button = (
    <button ref={buttonRef} className={buttonClasses(variant, size, className)} {...props}>
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
