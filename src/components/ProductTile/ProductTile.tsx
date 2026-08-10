import { Link } from 'react-router-dom'
import type { Cta, Theme } from '../../data/homeSections'
import './ProductTile.scss'

type ProductTileProps = {
  theme: Theme
  title: string
  subtitle: string
  ctas: Cta[]
  image: string
  background_color: string
  show_watch_mark?: boolean
}

export function ProductTile({
  theme,
  title,
  subtitle,
  ctas,
  image,
  background_color,
  show_watch_mark = false,
}: ProductTileProps) {
  return (
    <article
      className={`product-tile product-tile--${theme}`}
      style={{ backgroundColor: background_color }}
    >
      <div className="product-tile__copy">
        <h3 className="product-tile__title">
          {show_watch_mark && (
            <span className="product-tile__watch-mark" aria-hidden="true">
              
            </span>
          )}
          {title}
        </h3>
        <p className="product-tile__subtitle">{subtitle}</p>
        <div className="cta-group product-tile__ctas">
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
      <div className="product-tile__visual">
        <img src={image} alt="" className="product-tile__image" />
      </div>
    </article>
  )
}
