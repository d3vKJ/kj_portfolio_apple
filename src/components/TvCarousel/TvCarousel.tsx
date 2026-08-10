import type { TvSlide } from '../../data/homeSections'
import './TvCarousel.scss'

type TvCarouselProps = {
  slides: TvSlide[]
}

export function TvCarousel({ slides }: TvCarouselProps) {
  return (
    <section className="tv-carousel" aria-label="Apple TV+">
      <div className="tv-carousel__track">
        {slides.map((slide) => (
          <article key={slide.id} className="tv-carousel__card">
            <div
              className="tv-carousel__poster"
              style={{ backgroundColor: slide.placeholder_color }}
            >
              <span className="tv-carousel__badge">Stream now</span>
              <p className="tv-carousel__genre">{slide.genre}</p>
              <h3 className="tv-carousel__title">{slide.title}</h3>
              <p className="tv-carousel__desc">{slide.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
