import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { nav_items } from '../data/nav'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {nav_items.map((item) => (
        <Route key={item.path} path={item.path} element={<PlaceholderPage />} />
      ))}
    </Routes>
  )
}
