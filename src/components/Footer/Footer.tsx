import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  footer_bottom_links,
  footer_columns,
  footer_corporate,
  footer_legal,
} from '../../data/footer'
import './Footer.scss'

export function Footer() {
  const [open_key, set_open_key] = useState<string | null>(null)

  const handle_toggle = (key: string) => {
    set_open_key((prev) => (prev === key ? null : key))
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__legal">
          {footer_legal.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="site-footer__legal-text">
              {paragraph}
            </p>
          ))}
        </div>

        <nav className="site-footer__directory" aria-label="Apple 디렉토리">
          <div className="site-footer__columns">
            {footer_columns.map((column, column_index) => (
              <div key={`column-${column_index}`} className="site-footer__column">
                {column.groups.map((group) => {
                  const group_key = `${column_index}-${group.title}`
                  const is_open = open_key === group_key

                  return (
                    <div
                      key={group_key}
                      className={`site-footer__group${
                        is_open ? ' site-footer__group--open' : ''
                      }`}
                    >
                      <button
                        type="button"
                        className="site-footer__group-title"
                        onClick={() => handle_toggle(group_key)}
                        aria-expanded={is_open}
                      >
                        {group.title}
                      </button>
                      <ul className="site-footer__links">
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <Link to={link.to} className="site-footer__link">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </nav>

        <p className="site-footer__shop-help">
          다양한 쇼핑 방법:{' '}
          <Link to="/store" className="site-footer__shop-link">
            Apple Store
          </Link>
          를 방문하거나,{' '}
          <Link to="/store" className="site-footer__shop-link">
            리셀러
          </Link>
          를 찾아보거나, 080-330-8877번으로 전화하세요.
        </p>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            Copyright © 2026 Apple Inc. 모든 권리 보유.
          </p>
          <ul className="site-footer__bottom-links">
            {footer_bottom_links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="site-footer__bottom-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="site-footer__locale">대한민국</p>
        </div>

        <div className="site-footer__corporate">
          {footer_corporate.map((line) => (
            <p key={line} className="site-footer__corporate-line">
              {line}
            </p>
          ))}
        </div>
      </div>
    </footer>
  )
}
