import { Link, useLocation } from 'react-router-dom'
import { nav_items } from '../data/nav'
import './PlaceholderPage.scss'

const implemented_pages = [
  { label: '스토어', path: '/store' },
  { label: '고객지원', path: '/support' },
] as const

export function PlaceholderPage() {
  const location = useLocation()
  const current = nav_items.find((item) => item.path === location.pathname)
  const title = current?.label ?? '페이지'

  return (
    <main className="placeholder-page">
      <h1 className="placeholder-page__title">{title}</h1>
      <p className="placeholder-page__text">아직 구현되지 않은 페이지입니다.</p>
      <p className="placeholder-page__hint">아래에서 구현된 페이지로 이동할 수 있습니다.</p>
      <div className="placeholder-page__actions">
        {implemented_pages.map((page) => (
          <Link key={page.path} to={page.path} className="placeholder-page__button">
            {page.label}
          </Link>
        ))}
      </div>
    </main>
  )
}
