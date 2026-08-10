import { Link } from 'react-router-dom'
import type { Cta, Theme } from '../../data/homeSections'
import './ProductHero.scss'

type ProductHeroProps = {
  theme: Theme
  title: string
  title_image?: string
  subtitle: string
  ctas: Cta[]
  image: string
  background_color: string
}

export function ProductHero({
  theme,
  title,
  title_image,
  subtitle,
  ctas,
  image,
  background_color,
}: ProductHeroProps) {
  return (
    <section
      className={`product-hero product-hero--${theme}`}
      style={{ backgroundColor: background_color }}
    >
      <div className="product-hero__copy">
        {title_image ? (
          <h2 className="product-hero__title product-hero__title--logo">
            <img src={title_image} alt={title} className="product-hero__title-img" />
          </h2>
        ) : (
          <h2 className="product-hero__title">{title}</h2>
        )}
        <p className="product-hero__subtitle">{subtitle}</p>
        <div className="cta-group product-hero__ctas">
          {ctas.map((cta, index) => (
            <Link
              key={cta.label}
              to={cta.to}
              className={`cta-button ${index === 0 ? 'cta-button--primary' : 'cta-button--secondary'}`}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="product-hero__visual">
        <img src={image} alt="" className="product-hero__image" />
      </div>
    </section>
  )
}
