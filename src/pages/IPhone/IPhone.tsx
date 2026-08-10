import { Link } from 'react-router-dom'
import { Reveal } from '../../components/Reveal/Reveal'
import { ShelfCarousel } from '../../components/ShelfCarousel/ShelfCarousel'
import {
  iphone_essentials,
  iphone_friends,
  iphone_know_items,
  iphone_lineup_items,
  iphone_more,
  iphone_nav_items,
  iphone_privacy,
  iphone_shopping_items,
} from '../../data/iphonePage'
import './IPhone.scss'

export function IPhone() {
  return (
    <main className="iphone-page">
      <div className="iphone-page__ribbon">
        <p className="iphone-page__ribbon-text">
          이제 최소 결제 금액 조건 충족 시 제휴 신용카드로 최대 18개월 무이자 할부
          결제 가능합니다.{' '}
          <Link to="/store" className="iphone-page__ribbon-link">
            더 알아보기
          </Link>
        </p>
      </div>

      <Reveal className="iphone-page__hero">
        <div className="iphone-page__hero-inner">
          <h1 className="iphone-page__hero-title">iPhone</h1>
          <nav className="iphone-page__product-nav" aria-label="iPhone 제품">
            {iphone_nav_items.map((item) => {
              const is_bold =
                item.label.includes('iPhone') ||
                item.id === 'compare' ||
                item.id === 'accessories' ||
                item.id === 'ios'
              const subtitle = 'badge' in item ? item.badge : undefined

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="iphone-page__product-nav-item"
                >
                  <span className="iphone-page__product-nav-thumb-wrap">
                    <img
                      className="iphone-page__product-nav-thumb"
                      src={item.image}
                      alt=""
                    />
                  </span>
                  <span
                    className={[
                      'iphone-page__product-nav-label',
                      is_bold ? 'iphone-page__product-nav-label--bold' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {item.label}
                  </span>
                  {subtitle ? (
                    <span className="iphone-page__product-nav-sub">{subtitle}</span>
                  ) : null}
                </a>
              )
            })}
          </nav>
        </div>
      </Reveal>

      <Reveal className="iphone-page__section iphone-page__section--lineup" delay_ms={40}>
        <div className="iphone-page__section-inner">
          <div className="iphone-page__section-heading">
            <h2 id="lineup" className="iphone-page__section-title">
              라인업 살펴보기.
            </h2>
            <Link to="/iphone" className="iphone-page__section-link">
              모든 모델 비교하기
            </Link>
          </div>
          <ShelfCarousel label="iPhone 라인업">
            {iphone_lineup_items.map((item) => (
              <article
                key={item.id}
                className="iphone-page__lineup-card"
                data-shelf-item
              >
                <div className="iphone-page__lineup-media">
                  <img
                    className="iphone-page__media iphone-page__media--tall"
                    src={item.image}
                    alt={item.name}
                  />
                </div>  <ul className="iphone-page__color-dots" aria-label={`${item.name} 색상`}>
                  {item.colors.map((color) => (
                    <li
                      key={color}
                      className="iphone-page__color-dot"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </ul>
                <h3 className="iphone-page__lineup-name">{item.name}</h3>
                <p className="iphone-page__lineup-desc">{item.desc}</p>
                <p className="iphone-page__lineup-price">{item.price}</p>
                <div className="iphone-page__card-actions iphone-page__card-actions--center">
                  <Link to="/iphone" className="iphone-page__btn iphone-page__btn--primary">
                    더 알아보기
                  </Link>
                  <Link to="/store" className="iphone-page__btn iphone-page__btn--link">
                    구입하기
                  </Link>
                </div>
              </article>
            ))}
          </ShelfCarousel>
        </div>
      </Reveal>

      <Reveal className="iphone-page__section">
        <div className="iphone-page__section-inner">
          <h2 className="iphone-page__section-title">보다 자세히 들여다보기.</h2>
          <div className="iphone-page__feature-banner">
            <img
              className="iphone-page__media iphone-page__media--banner"
              src={iphone_more.image}
              alt=""
            />
            <div className="iphone-page__feature-copy">
              <p className="iphone-page__feature-headline">
                <span className="iphone-page__feature-line">
                  {iphone_more.title_line_1}
                </span>
                <span className="iphone-page__feature-line">
                  {iphone_more.title_line_2}
                </span>
              </p>
              <Link to="/iphone" className="iphone-page__btn iphone-page__btn--dark">
                {iphone_more.cta}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="iphone-page__section iphone-page__section--muted">
        <div className="iphone-page__section-inner">
          <h2 id="shopping" className="iphone-page__section-title">
            iPhone, Apple에서 사면
            <br />
            가장 좋은 이유.
          </h2>
          <ShelfCarousel label="Apple에서 구매하는 이유">
            {iphone_shopping_items.map((card) => (
              <article
                key={card.id}
                className="iphone-page__reason-card"
                data-shelf-item
              >
                <h3 className="iphone-page__card-title">{card.title}</h3>
                <p className="iphone-page__card-text">{card.text}</p>
                <img
                  className="iphone-page__media iphone-page__media--shop"
                  src={card.image}
                  alt=""
                />
              </article>
            ))}
          </ShelfCarousel>
        </div>
      </Reveal>

      <Reveal className="iphone-page__section">
        <div className="iphone-page__section-inner">
          <h2 id="know" className="iphone-page__section-title">
            알면 알수록, iPhone.
          </h2>
          <ShelfCarousel label="알면 알수록 iPhone">
            {iphone_know_items.map((card) => (
              <article
                key={card.id}
                className="iphone-page__know-card"
                data-shelf-item
              >
                <img
                  className="iphone-page__media iphone-page__media--know"
                  src={card.image}
                  alt={card.title}
                />
                <p className="iphone-page__know-label">{card.title}</p>
              </article>
            ))}
          </ShelfCarousel>
        </div>
      </Reveal>

      <Reveal className="iphone-page__section">
        <div className="iphone-page__section-inner">
          <div className="iphone-page__privacy-banner">
            <img
              className="iphone-page__media iphone-page__media--privacy"
              src={iphone_privacy.image}
              alt=""
            />
            <div className="iphone-page__privacy-copy">
              <h2 className="iphone-page__privacy-title">
                {iphone_privacy.title_line_1}
                <br />
                {iphone_privacy.title_line_2}
              </h2>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="iphone-page__section iphone-page__section--muted">
        <div className="iphone-page__section-inner">
          <h2 id="essentials" className="iphone-page__section-title">
            iPhone 필수품.
          </h2>
          <div className="iphone-page__essentials">
            {iphone_essentials.map((card, index) => (
              <Reveal
                key={card.id}
                className="iphone-page__essential-card"
                delay_ms={40 + index * 60}
              >
                <img
                  className="iphone-page__media iphone-page__media--half"
                  src={card.image}
                  alt={card.title}
                />
                <h3 className="iphone-page__card-title">{card.title}</h3>
                <p className="iphone-page__card-text">{card.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="iphone-page__section">
        <div className="iphone-page__section-inner">
          <h2 className="iphone-page__section-title">절친 목록에 iPhone 추가하기.</h2>
          <div className="iphone-page__friends">
            {iphone_friends.map((card, index) => (
              <Reveal
                key={card.id}
                className="iphone-page__friend-card"
                delay_ms={50 + index * 60}
              >
                <img
                  className="iphone-page__media iphone-page__media--friend"
                  src={card.image}
                  alt={card.title}
                />
                <h3 className="iphone-page__card-title">{card.title}</h3>
                <p className="iphone-page__card-text">{card.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </main>
  )
}
