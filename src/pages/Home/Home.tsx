import { home_sections, tv_slides } from '../../data/homeSections'
import { EventHero } from '../../components/EventHero/EventHero'
import { ProductGrid } from '../../components/ProductGrid/ProductGrid'
import { ProductHero } from '../../components/ProductHero/ProductHero'
import { TvCarousel } from '../../components/TvCarousel/TvCarousel'
import './Home.scss'

export function Home() {
  return (
    <main className="home">
      {home_sections.map((section) => {
        if (section.type === 'event') {
          return (
            <EventHero
              key={section.id}
              title={section.title}
              subtitle={section.subtitle}
              cta={section.cta}
              image={section.image}
              background_color={section.background_color}
            />
          )
        }

        if (section.type === 'hero') {
          return (
            <ProductHero
              key={section.id}
              theme={section.theme}
              title={section.title}
              title_image={section.title_image}
              subtitle={section.subtitle}
              ctas={section.ctas}
              image={section.image}
              mobile_image={section.mobile_image}
              background_color={section.background_color}
            />
          )
        }

        if (section.type === 'grid') {
          return <ProductGrid key={section.id} tiles={section.tiles} />
        }

        return null
      })}

      <TvCarousel slides={tv_slides} />
    </main>
  )
}
