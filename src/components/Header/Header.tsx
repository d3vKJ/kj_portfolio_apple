import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { get_mega_menu, nav_items, type MegaMenu } from '../../data/nav'
import apple_logo from '../../../assets/apple_header_logo.png'
import './Header.scss'

const SWITCH_OUT_MS = 120
const CLOSE_DELAY_MS = 40
const CLOSE_HEIGHT_MS = 820
const SETTLE_MS = 110

export function Header() {
  const [active_path, set_active_path] = useState<string | null>(null)
  const [display_menu, set_display_menu] = useState<MegaMenu | null>(null)
  const [panel_state, set_panel_state] = useState<'closed' | 'out' | 'in'>(
    'closed',
  )
  const [flyout_height, set_flyout_height] = useState(0)
  const [use_drop, set_use_drop] = useState(false)
  const [is_closing, set_is_closing] = useState(false)
  const [is_mobile_menu_open, set_is_mobile_menu_open] = useState(false)

  const close_timer_ref = useRef<ReturnType<typeof setTimeout> | null>(null)
  const switch_timer_ref = useRef<ReturnType<typeof setTimeout> | null>(null)
  const settle_timer_ref = useRef<ReturnType<typeof setTimeout> | null>(null)
  const measure_ref = useRef<HTMLDivElement>(null)
  const active_path_ref = useRef<string | null>(null)
  const display_path_ref = useRef<string | null>(null)
  const pending_path_ref = useRef<string | null>(null)

  const is_open = active_path !== null

  active_path_ref.current = active_path

  const clear_close_timer = () => {
    if (close_timer_ref.current) {
      clearTimeout(close_timer_ref.current)
      close_timer_ref.current = null
    }
  }

  const clear_switch_timer = () => {
    if (switch_timer_ref.current) {
      clearTimeout(switch_timer_ref.current)
      switch_timer_ref.current = null
    }
  }

  const clear_settle_timer = () => {
    if (settle_timer_ref.current) {
      clearTimeout(settle_timer_ref.current)
      settle_timer_ref.current = null
    }
  }

  const measure_height = () => {
    const el = measure_ref.current
    if (!el) return 0
    return el.scrollHeight
  }

  const show_menu = (menu: MegaMenu, drop = false) => {
    display_path_ref.current = menu.path
    set_active_path(menu.path)
    set_display_menu(menu)
    set_is_closing(false)
    set_use_drop(drop)
    set_panel_state('in')
  }

  const restore_current_panel = () => {
    if (display_path_ref.current) {
      set_active_path(display_path_ref.current)
      set_panel_state('in')
    }
  }

  const apply_menu = (path: string) => {
    const menu = get_mega_menu(path)
    if (!menu) return

    // 이미 같은 메뉴가 보이면 유지
    if (display_path_ref.current === path) {
      set_active_path(path)
      set_panel_state('in')
      return
    }

    // 최초 오픈
    if (!display_path_ref.current) {
      clear_switch_timer()
      show_menu(menu, true)
      return
    }

    // 전환: 현재 내용 페이드아웃 → 교체 → 페이드인
    clear_switch_timer()
    set_active_path(path)
    set_panel_state('out')

    switch_timer_ref.current = setTimeout(() => {
      // 아직 이 메뉴에 멈춰 있을 때만 교체
      if (pending_path_ref.current !== path) {
        restore_current_panel()
        return
      }
      show_menu(menu)
    }, SWITCH_OUT_MS)
  }

  // 마우스가 한 항목에 멈춘 뒤에만 메뉴 변경
  const request_menu = (path: string) => {
    clear_close_timer()
    clear_settle_timer()
    pending_path_ref.current = path

    if (!get_mega_menu(path)) {
      settle_timer_ref.current = setTimeout(() => {
        if (pending_path_ref.current === path) close_menu()
      }, SETTLE_MS)
      return
    }

    if (display_path_ref.current === path) {
      set_active_path(path)
      set_panel_state('in')
      return
    }

    settle_timer_ref.current = setTimeout(() => {
      if (pending_path_ref.current !== path) return
      apply_menu(path)
    }, SETTLE_MS)
  }

  const schedule_close = () => {
    clear_close_timer()
    clear_settle_timer()
    pending_path_ref.current = null
    close_timer_ref.current = setTimeout(() => {
      close_menu()
    }, CLOSE_DELAY_MS)
  }

  const close_menu = () => {
    clear_close_timer()
    clear_switch_timer()
    clear_settle_timer()
    pending_path_ref.current = null
    display_path_ref.current = null
    set_is_closing(true)
    set_use_drop(false)
    set_active_path(null)
    set_panel_state('out')
    set_flyout_height(0)

    switch_timer_ref.current = setTimeout(() => {
      set_display_menu(null)
      set_panel_state('closed')
      set_is_closing(false)
    }, CLOSE_HEIGHT_MS)
  }

  const close_mobile_menu = () => {
    set_is_mobile_menu_open(false)
  }

  const toggle_mobile_menu = () => {
    close_menu()
    set_is_mobile_menu_open((open) => !open)
  }

  useLayoutEffect(() => {
    if (is_closing) return

    if (panel_state === 'closed' || !display_menu) {
      if (panel_state === 'closed') set_flyout_height(0)
      return
    }

    set_flyout_height(measure_height())
  }, [display_menu, panel_state, is_closing])

  useEffect(() => {
    return () => {
      clear_close_timer()
      clear_switch_timer()
      clear_settle_timer()
    }
  }, [])

  useEffect(() => {
    if (!is_open && !is_mobile_menu_open) return

    const on_key_down = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (is_mobile_menu_open) close_mobile_menu()
        else close_menu()
      }
    }

    const prevent_scroll = (event: Event) => {
      event.preventDefault()
    }

    const prevent_key_scroll = (event: KeyboardEvent) => {
      if (
        ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(
          event.key,
        )
      ) {
        event.preventDefault()
      }
    }

    document.addEventListener('keydown', on_key_down)
    document.addEventListener('keydown', prevent_key_scroll)
    document.addEventListener('wheel', prevent_scroll, { passive: false })
    document.addEventListener('touchmove', prevent_scroll, { passive: false })

    return () => {
      document.removeEventListener('keydown', on_key_down)
      document.removeEventListener('keydown', prevent_key_scroll)
      document.removeEventListener('wheel', prevent_scroll)
      document.removeEventListener('touchmove', prevent_scroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [is_open, is_mobile_menu_open])

  useEffect(() => {
    const on_resize = () => {
      if (window.innerWidth > 1068) close_mobile_menu()
    }

    window.addEventListener('resize', on_resize)
    return () => window.removeEventListener('resize', on_resize)
  }, [])

  return (
    <>
      <header
        className={[
          'global-nav',
          is_open ? 'is-open' : '',
          is_mobile_menu_open ? 'is-mobile-open' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        onMouseLeave={schedule_close}
        onMouseEnter={clear_close_timer}
      >
        <nav className="global-nav__content" aria-label="글로벌">
          <Link
            to="/"
            className="global-nav__item global-nav__logo"
            aria-label="Apple"
            onMouseEnter={close_menu}
          >
            <img
              className="global-nav__logo-icon"
              src={apple_logo}
              alt=""
              width={14}
              height={44}
            />
          </Link>

          {nav_items.map((item) => {
            const has_menu = Boolean(get_mega_menu(item.path))

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'global-nav__item',
                    'global-nav__link',
                    isActive || active_path === item.path
                      ? 'global-nav__link--active'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
                onMouseEnter={() => request_menu(item.path)}
                onFocus={() => request_menu(item.path)}
                aria-expanded={has_menu ? active_path === item.path : undefined}
                aria-haspopup={has_menu ? 'true' : undefined}
              >
                {item.label}
              </NavLink>
            )
          })}

          <button
            type="button"
            className="global-nav__item global-nav__action"
            aria-label="검색"
            onMouseEnter={close_menu}
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
            onMouseEnter={close_menu}
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

          <button
            type="button"
            className="global-nav__item global-nav__action global-nav__menu-toggle"
            aria-label={is_mobile_menu_open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={is_mobile_menu_open}
            aria-controls="global-nav-mobile-menu"
            onClick={toggle_mobile_menu}
          >
            <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
              {is_mobile_menu_open ? (
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  d="M4.2 4.2 13.8 13.8M13.8 4.2 4.2 13.8"
                />
              ) : (
                <>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    d="M1 4.5h16"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    d="M1 9h16"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    d="M1 13.5h16"
                  />
                </>
              )}
            </svg>
          </button>
        </nav>

        <div
          id="global-nav-mobile-menu"
          className={`global-nav__mobile-menu${is_mobile_menu_open ? ' is-open' : ''}`}
          aria-hidden={!is_mobile_menu_open}
        >
          <ul className="global-nav__mobile-list">
            {nav_items.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="global-nav__mobile-link"
                  onClick={close_mobile_menu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`global-nav__flyout${is_open || panel_state !== 'closed' ? ' is-visible' : ''}${use_drop ? ' is-opening' : ''}${is_closing ? ' is-closing' : ''}`}
          style={{ height: `${flyout_height}px` }}
          aria-hidden={!is_open}
        >
          <div className="global-nav__flyout-shell" ref={measure_ref}>
            <div className="global-nav__flyout-frame">
              <div
                className={`global-nav__flyout-panel global-nav__flyout-panel--${is_closing ? 'in' : panel_state}${use_drop ? ' global-nav__flyout-panel--drop' : ''}${is_closing ? ' global-nav__flyout-panel--drop-out' : ''}`}
              >
                {display_menu
                  ? display_menu.columns.map((column) => (
                      <div
                        key={`${display_menu.path}-${column.title}`}
                        className="global-nav__mega-column"
                      >
                        <p className="global-nav__mega-title">{column.title}</p>
                        <ul
                          className={`global-nav__mega-list global-nav__mega-list--${column.variant}`}
                        >
                          {column.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                to={link.to}
                                className={`global-nav__mega-link global-nav__mega-link--${column.variant}`}
                                onClick={close_menu}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        className={`global-nav__curtain${is_open || is_mobile_menu_open ? ' is-visible' : ''}`}
        aria-label="메뉴 닫기"
        tabIndex={is_open || is_mobile_menu_open ? 0 : -1}
        onClick={() => {
          if (is_mobile_menu_open) close_mobile_menu()
          else close_menu()
        }}
      />
    </>
  )
}
