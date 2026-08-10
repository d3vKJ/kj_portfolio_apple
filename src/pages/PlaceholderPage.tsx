import { useLocation } from 'react-router-dom'
import { nav_items } from '../data/nav'
import './PlaceholderPage.scss'

export function PlaceholderPage() {
  const location = useLocation()
  const current = nav_items.find((item) => item.path === location.pathname)
  const title = current?.label ?? '페이지'

  return (
    <main className="placeholder-page">
      <h1 className="placeholder-page__title">{title}</h1>
      <p className="placeholder-page__text">
        이 페이지는 라우팅 골격용 placeholder입니다.
      </p>
    </main>
  )
}
