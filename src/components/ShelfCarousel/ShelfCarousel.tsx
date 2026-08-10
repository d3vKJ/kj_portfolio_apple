import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import './ShelfCarousel.scss'

type ShelfCarouselProps = {
  children: ReactNode
  label: string
  class_name?: string
}

export function ShelfCarousel({
  children,
  label,
  class_name = '',
}: ShelfCarouselProps) {
  const track_ref = useRef<HTMLDivElement>(null)
  const raf_ref = useRef<number | null>(null)
  const [can_prev, set_can_prev] = useState(false)
  const [can_next, set_can_next] = useState(false)

  const update_arrows = useCallback(() => {
    const el = track_ref.current
    if (!el) return

    const max_scroll = el.scrollWidth - el.clientWidth
    set_can_prev(el.scrollLeft > 2)
    set_can_next(max_scroll > 2 && el.scrollLeft < max_scroll - 2)
  }, [])

  const schedule_update = useCallback(() => {
    if (raf_ref.current !== null) return
    raf_ref.current = requestAnimationFrame(() => {
      raf_ref.current = null
      update_arrows()
    })
  }, [update_arrows])

  useEffect(() => {
    const el = track_ref.current
    if (!el) return

    update_arrows()
    el.addEventListener('scroll', schedule_update, { passive: true })
    window.addEventListener('resize', schedule_update)

    const resize_observer =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(schedule_update)
        : null
    resize_observer?.observe(el)

    return () => {
      el.removeEventListener('scroll', schedule_update)
      window.removeEventListener('resize', schedule_update)
      resize_observer?.disconnect()
      if (raf_ref.current !== null) {
        cancelAnimationFrame(raf_ref.current)
      }
    }
  }, [schedule_update, update_arrows, children])

  const scroll_by_card = (direction: 1 | -1) => {
    const el = track_ref.current
    if (!el) return

    const item = el.querySelector(
      '[data-shelf-item]',
    ) as HTMLElement | null
    const styles = getComputedStyle(el)
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0
    const amount = item ? item.offsetWidth + gap : el.clientWidth * 0.75

    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <div className={`shelf-carousel ${class_name}`.trim()}>
      <div
        ref={track_ref}
        className="shelf-carousel__track"
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {children}
      </div>

      <div className="shelf-carousel__controls">
        <button
          type="button"
          className="shelf-carousel__btn"
          aria-label="이전"
          disabled={!can_prev}
          onClick={() => scroll_by_card(-1)}
        >
          <svg viewBox="0 0 36 36" aria-hidden="true">
            <path d="M21.7 25.3a1 1 0 0 1-1.4 1.4l-8-8a1 1 0 0 1 0-1.4l8-8a1 1 0 1 1 1.4 1.4L14.4 18l7.3 7.3z" />
          </svg>
        </button>
        <button
          type="button"
          className="shelf-carousel__btn"
          aria-label="다음"
          disabled={!can_next}
          onClick={() => scroll_by_card(1)}
        >
          <svg viewBox="0 0 36 36" aria-hidden="true">
            <path d="M14.3 10.7a1 1 0 0 1 1.4-1.4l8 8a1 1 0 0 1 0 1.4l-8 8a1 1 0 1 1-1.4-1.4L21.6 18l-7.3-7.3z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
