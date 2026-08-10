import { Link, NavLink } from 'react-router-dom'
import { nav_items } from '../../data/nav'
import apple_logo from '../../../assets/apple_header_logo.png'
import './Header.scss'

export function Header() {
  return (
    <header className="global-nav">
      <nav className="global-nav__content" aria-label="글로벌">
        <Link to="/" className="global-nav__item global-nav__logo" aria-label="Apple">
          <img
            className="global-nav__logo-icon"
            src={apple_logo}
            alt=""
            width={14}
            height={44}
          />
        </Link>

        {nav_items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'global-nav__item global-nav__link global-nav__link--active'
                : 'global-nav__item global-nav__link'
            }
          >
            {item.label}
          </NavLink>
        ))}

        <button
          type="button"
          className="global-nav__item global-nav__action"
          aria-label="검색"
        >
          <svg viewBox="0 0 15 15" width="15" height="15" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              d="m14.2 14.2-3.4-3.4M6.4 11.6a5.2 5.2 0 1 1 0-10.4 5.2 5.2 0 0 1 0 10.4z"
            />
          </svg>
        </button>

        <button
          type="button"
          className="global-nav__item global-nav__action"
          aria-label="장바구니"
        >
          <svg viewBox="0 0 14 17" width="14" height="17" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              d="M1.3 6.2h11.4v8.6a1.2 1.2 0 0 1-1.2 1.2H2.5a1.2 1.2 0 0 1-1.2-1.2V6.2zM4.4 6.2V4.1a2.6 2.6 0 0 1 5.2 0v2.1"
            />
          </svg>
        </button>
      </nav>
    </header>
  )
}
