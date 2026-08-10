import { useEffect, useRef, useState, type ReactNode } from 'react'
import './Reveal.scss'

type RevealProps = {
  children: ReactNode
  className?: string
  delay_ms?: number
}

export function Reveal({ children, className = '', delay_ms = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [is_visible, set_is_visible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        set_is_visible(true)
        observer.disconnect()
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${is_visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay_ms ? { transitionDelay: `${delay_ms}ms` } : undefined}
    >
      {children}
    </div>
  )
}
