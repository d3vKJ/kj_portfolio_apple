import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  footer_bottom_links,
  footer_columns,
  footer_legal,
} from '../../data/footer'
import './Footer.scss'

export function Footer() {
  const [open_index, set_open_index] = useState<number | null>(null)

  const handle_toggle = (index: number) => {
    set_open_index((prev) => (prev === index ? null : index))
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

        <div className="site-footer__columns">
          {footer_columns.map((column, index) => {
            const is_open = open_index === index

            return (
              <div
                key={column.title}
                className={`site-footer__column${is_open ? ' site-footer__column--open' : ''}`}
              >
                <button
                  type="button"
                  className="site-footer__column-title"
                  onClick={() => handle_toggle(index)}
                  aria-expanded={is_open}
                >
                  {column.title}
                </button>
                <ul className="site-footer__links">
                  {column.links.map((link) => (
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

        <p className="site-footer__shop-help">
          다양한 쇼핑 방법: Apple Store를 방문하거나, 리셀러를 찾아보거나,
          080-330-8877번으로 전화하세요.
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
      </div>
    </footer>
  )
}
