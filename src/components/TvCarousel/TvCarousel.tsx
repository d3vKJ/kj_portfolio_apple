import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { tvMobileLogo, type TvSlide } from '../../data/homeSections'
import './TvCarousel.scss'

const AUTO_MS = 10000

type TvCarouselProps = {
  slides: TvSlide[]
}

type LoopSlide = TvSlide & {
  loop_key: string
  real_index: number
}

export function TvCarousel({ slides }: TvCarouselProps) {
  const slide_count = slides.length
  const [track_index, set_track_index] = useState(slide_count)
  const [with_transition, set_with_transition] = useState(true)
  const [is_playing, set_is_playing] = useState(true)
  const [progress_key, set_progress_key] = useState(0)
  const timer_ref = useRef<ReturnType<typeof setTimeout> | null>(null)
  const remaining_ref = useRef(AUTO_MS)
  const started_at_ref = useRef(0)

  const loop_slides: LoopSlide[] =
    slide_count === 0
      ? []
      : [...slides, ...slides, ...slides].map((slide, index) => ({
          ...slide,
          loop_key: `${slide.id}-${index}`,
          real_index: index % slide_count,
        }))

  const active_real = slide_count === 0 ? 0 : track_index % slide_count

  const clear_timer = () => {
    if (timer_ref.current) {
      clearTimeout(timer_ref.current)
      timer_ref.current = null
    }
  }

  const reset_progress = () => {
    remaining_ref.current = AUTO_MS
    set_progress_key((key) => key + 1)
  }

  const go_next = () => {
    set_track_index((index) => index + 1)
    reset_progress()
  }

  const go_to_real = (real_index: number) => {
    const base = Math.floor(track_index / slide_count) * slide_count
    let next = base + real_index

    // 현재 트랙 위치와 같으면 중간 세트로 보정
    if (next === track_index) {
      next = slide_count + real_index
    }

    set_track_index(next)
    reset_progress()
  }

  const handle_transition_end = () => {
    if (slide_count === 0) return

    if (track_index >= slide_count * 2) {
      set_with_transition(false)
      set_track_index(track_index - slide_count)
      return
    }

    if (track_index < slide_count) {
      set_with_transition(false)
      set_track_index(track_index + slide_count)
    }
  }

  useEffect(() => {
    if (with_transition) return

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => set_with_transition(true))
    })

    return () => cancelAnimationFrame(id)
  }, [with_transition, track_index])

  useEffect(() => {
    if (!is_playing || slide_count === 0) {
      clear_timer()
      return
    }

    started_at_ref.current = Date.now()
    const delay = remaining_ref.current

    timer_ref.current = setTimeout(() => {
      remaining_ref.current = AUTO_MS
      go_next()
    }, delay)

    return clear_timer
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track_index, is_playing, slide_count, progress_key])

  const toggle_play = () => {
    if (is_playing) {
      const elapsed = Date.now() - started_at_ref.current
      remaining_ref.current = Math.max(0, remaining_ref.current - elapsed)
      clear_timer()
      set_is_playing(false)
      return
    }

    set_progress_key((key) => key + 1)
    set_is_playing(true)
  }

  if (slide_count === 0) return null

  return (
    <section className="tv-carousel" aria-label="Apple TV+">
      <div className="tv-carousel__viewport">
        <div
          className={`tv-carousel__track${with_transition ? '' : ' is-instant'}`}
          style={{
            transform: `translateX(calc((100% - var(--tv-card-width)) / 2 - ${track_index} * (var(--tv-card-width) + var(--tv-card-gap))))`,
          }}
          onTransitionEnd={(event) => {
            if (event.target !== event.currentTarget) return
            handle_transition_end()
          }}
        >
          {loop_slides.map((slide, index) => {
            const is_active = index === track_index

            return (
              <article
                key={slide.loop_key}
                className={`tv-carousel__card tv-carousel__card--${slide.theme}${
                  is_active ? ' is-active' : ''
                }`}
                aria-hidden={!is_active}
                onClick={() => {
                  if (!is_active) go_to_real(slide.real_index)
                }}
              >
                <div className="tv-carousel__desktop">
                  <img
                    src={slide.image}
                    alt=""
                    className="tv-carousel__image"
                    draggable={false}
                  />
                  <div className="tv-carousel__footer">
                    <Link to="/tv-home" className="tv-carousel__cta">
                      지금 시청하기
                    </Link>
                    <p className="tv-carousel__meta">
                      <span className="tv-carousel__genre">{slide.genre}</span>
                      <span className="tv-carousel__sep" aria-hidden="true">
                        •
                      </span>
                      <span className="tv-carousel__desc">{slide.description}</span>
                    </p>
                  </div>
                </div>

                <div className="tv-carousel__mobile">
                  <img
                    src={slide.mobile_image}
                    alt=""
                    className="tv-carousel__mobile-bg"
                    draggable={false}
                  />
                  <div className="tv-carousel__mobile-content">
                    <div className="tv-carousel__mobile-header">
                      <img
                        src={tvMobileLogo}
                        alt=""
                        className="tv-carousel__mobile-logo"
                      />
                      <img
                        src={slide.mobile_title_image}
                        alt={slide.title}
                        className="tv-carousel__mobile-title"
                      />
                    </div>
                    <div className="tv-carousel__mobile-footer">
                      <p className="tv-carousel__mobile-genre">{slide.genre}</p>
                      <p className="tv-carousel__mobile-desc">{slide.description}</p>
                      <Link to="/tv-home" className="tv-carousel__cta tv-carousel__cta--mobile">
                        지금 시청하기
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="tv-carousel__controls">
        <div className="tv-carousel__dots" role="tablist" aria-label="슬라이드">
          {slides.map((slide, index) => {
            const is_active = index === active_real

            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={is_active}
                aria-label={`${slide.title} 보기`}
                className={`tv-carousel__dot-btn${is_active ? ' is-active' : ''}`}
                onClick={() => go_to_real(index)}
              >
                {is_active ? (
                  <span
                    key={progress_key}
                    className={`tv-carousel__progress${
                      is_playing ? ' is-running' : ' is-paused'
                    }`}
                    style={
                      is_playing
                        ? {
                            animationDuration: `${AUTO_MS}ms`,
                            animationDelay: `-${AUTO_MS - remaining_ref.current}ms`,
                          }
                        : {
                            transform: `scaleX(${
                              1 - remaining_ref.current / AUTO_MS
                            })`,
                          }
                    }
                  />
                ) : null}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          className="tv-carousel__play"
          aria-label={is_playing ? '일시 정지' : '재생'}
          onClick={toggle_play}
        >
          {is_playing ? (
            <svg viewBox="0 0 12 14" aria-hidden="true">
              <rect x="1.5" y="1" width="3" height="12" rx="1" fill="currentColor" />
              <rect x="7.5" y="1" width="3" height="12" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 12 14" aria-hidden="true">
              <path d="M2.2 1.2v11.6L11 7 2.2 1.2z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </section>
  )
}
