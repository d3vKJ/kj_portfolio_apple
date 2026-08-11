import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { IPhone } from '../pages/IPhone/IPhone'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { nav_items } from '../data/nav'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iphone" element={<IPhone />} />
      {nav_items
        .filter((item) => item.path !== '/iphone')
        .map((item) => (
          <Route key={item.path} path={item.path} element={<PlaceholderPage />} />
        ))}
    </Routes>
  )
}
