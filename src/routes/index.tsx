import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { IPhone } from '../pages/IPhone/IPhone'
import { Support } from '../pages/Support/Support'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { nav_items } from '../data/nav'

const implemented_paths = new Set(['/store', '/iphone', '/support'])

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<IPhone />} />
      <Route path="/iphone" element={<IPhone />} />
      <Route path="/support" element={<Support />} />
      {nav_items
        .filter((item) => !implemented_paths.has(item.path))
        .map((item) => (
          <Route key={item.path} path={item.path} element={<PlaceholderPage />} />
        ))}
    </Routes>
  )
}
