import { Link } from 'react-router-dom'
import type { Cta } from '../../data/homeSections'
import './EventHero.scss'

type EventHeroProps = {
  title: string
  subtitle: string
  cta: Cta
  image: string
  background_color: string
}

function render_lines(text: string) {
  return text.split('\n').map((line, index, lines) => (
    <span key={line}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ))
}

export function EventHero({
  title,
  subtitle,
  cta,
  image,
  background_color,
}: EventHeroProps) {
  return (
    <section className="event-hero" aria-labelledby="event-hero-title">
      <div className="event-hero__unit" style={{ backgroundColor: background_color }}>
        <img src={image} alt="" className="event-hero__image" />
        <div className="event-hero__copy">
          <h1 id="event-hero-title" className="event-hero__title">
            {title}
          </h1>
          <p className="event-hero__subtitle">{render_lines(subtitle)}</p>
          <Link to={cta.to} className="event-hero__cta">
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
