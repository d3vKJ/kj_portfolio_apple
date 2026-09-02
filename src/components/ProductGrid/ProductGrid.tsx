import type { TileSection } from '../../data/homeSections'
import { ProductTile } from '../ProductTile/ProductTile'
import './ProductGrid.scss'

type ProductGridProps = {
  tiles: TileSection[]
}

export function ProductGrid({ tiles }: ProductGridProps) {
  return (
    <section className="product-grid">
      {tiles.map((tile) => (
        <div key={tile.id} className="product-grid__item">
          <ProductTile
            id={tile.id}
            theme={tile.theme}
            title={tile.title}
            subtitle={tile.subtitle}
            ctas={tile.ctas}
            image={tile.image}
            background_color={tile.background_color}
            show_watch_mark={tile.id === 'watch-series-11'}
          />
        </div>
      ))}
    </section>
  )
}
