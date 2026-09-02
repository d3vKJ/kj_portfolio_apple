import { Link } from 'react-router-dom'
import { Reveal } from '../../components/Reveal/Reveal'
import {
  logo_circle_blue,
  support_explore_items,
  support_features,
  support_info_blocks,
  support_product_items,
  support_quick_actions,
  support_service_programs,
  type InfoParagraph,
} from '../../data/supportPage'
import './Support.scss'

function render_lines(text: string) {
  return text.split('\n').map((line, index, lines) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ))
}

function render_paragraph_content(paragraph: InfoParagraph) {
  if (typeof paragraph === 'string') {
    return render_lines(paragraph)
  }

  return paragraph.map((segment, index) => {
    if (segment.type === 'text') {
      return <span key={index}>{render_lines(segment.value)}</span>
    }

    return (
      <Link
        key={index}
        to={segment.href}
        className="support-page__link support-page__link--inline"
      >
        {segment.label}
      </Link>
    )
  })
}

export function Support() {
  return (
    <main className="support-page">
      <Reveal className="support-page__hero">
        <div className="support-page__hero-inner">
          <img
            className="support-page__hero-logo"
            src={logo_circle_blue}
            alt=""
            width={159}
            height={159}
          />
          <h1 className="support-page__hero-title">Apple 지원</h1>
          <p className="support-page__hero-subtitle">
            도움이 필요하십니까? 여기에서 시작하세요.
          </p>

          <nav className="support-page__product-nav" aria-label="제품별 지원">
            {support_product_items.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={[
                  'support-page__product-nav-item',
                  `support-page__product-nav-item--${item.id}`,
                ].join(' ')}
              >
                <span className="support-page__product-nav-thumb-wrap">
                  <img
                    className="support-page__product-nav-thumb"
                    src={item.image}
                    alt=""
                  />
                </span>
                <span className="support-page__product-nav-label">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </Reveal>

      <div className="support-page__inner">
        <Reveal className="support-page__section support-page__section--quick" delay_ms={40}>
          <div className="support-page__quick-grid">
            {support_quick_actions.map((action) => (
              <Link
                key={action.id}
                to={action.href}
                className="support-page__quick-card"
              >
                <img
                  className="support-page__quick-icon"
                  src={action.icon}
                  alt=""
                  width={48}
                  height={48}
                />
                <span className="support-page__quick-label">{action.label}</span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal className="support-page__section support-page__section--search" delay_ms={60}>
          <section aria-labelledby="support-search-heading">
            <h2 id="support-search-heading" className="support-page__section-title">
              추가 주제 검색하기
            </h2>
            <div className="support-page__search" role="search">
              <svg
                className="support-page__search-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M10.5 3a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm6.78 11.22 3.5 3.5-1.41 1.41-3.5-3.5 1.41-1.41Z" />
              </svg>
              <input
                className="support-page__search-input"
                type="search"
                placeholder="지원 검색하기"
                aria-label="지원 검색하기"
              />
            </div>
          </section>
        </Reveal>
      </div>

      <div className="support-page__features-band">
        <div className="support-page__inner">
          <Reveal className="support-page__section support-page__section--features" delay_ms={80}>
            <div className="support-page__feature-list">
              {support_features.map((feature) => (
                <article
                  key={feature.id}
                  className={[
                    'support-page__feature-card',
                    feature.image_position === 'right'
                      ? 'support-page__feature-card--reverse'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="support-page__feature-media">
                    <img
                      className="support-page__feature-image"
                      src={feature.image}
                      alt=""
                    />
                  </div>
                  <div className="support-page__feature-copy">
                    <h2 className="support-page__feature-title">{feature.title}</h2>
                    <p className="support-page__feature-description">
                      {feature.description}
                    </p>
                    <Link to={feature.link_href} className="support-page__link">
                      {feature.link_label}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="support-page__content-band">
        <div className="support-page__inner">
          <Reveal className="support-page__section support-page__section--explore" delay_ms={100}>
            <h2 className="support-page__section-title">더 살펴보기</h2>
            <div className="support-page__explore-grid">
              {support_explore_items.map((item) => (
                <article
                  key={item.id}
                  className={[
                    'support-page__explore-card',
                    `support-page__explore-card--${item.id}`,
                  ].join(' ')}
                >
                  <div className="support-page__explore-media">
                    <img
                      className="support-page__explore-image"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="support-page__explore-copy">
                    <h3 className="support-page__explore-title">{item.title}</h3>
                    <p className="support-page__explore-description">{item.description}</p>
                    <Link to={item.link_href} className="support-page__link">
                      {item.link_label}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="support-page__section support-page__section--info" delay_ms={120}>
            <div className="support-page__info-list">
              {support_info_blocks.map((block) => {
                const has_link = 'link_label' in block && block.link_label
                const last_paragraph_index = block.paragraphs.length - 1

                return (
                  <article
                    key={block.id}
                    className={[
                      'support-page__info-block',
                      block.id === 'counterfeit'
                        ? 'support-page__info-block--left'
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <h2 className="support-page__info-title">{block.title}</h2>
                    {block.paragraphs.map((paragraph, index) => {
                      const is_link_paragraph =
                        has_link && index === last_paragraph_index

                      return (
                        <p
                          key={`${block.id}-${index}`}
                          className={[
                            'support-page__info-text',
                            is_link_paragraph
                              ? 'support-page__info-text--with-link'
                              : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          {render_paragraph_content(paragraph)}
                          {is_link_paragraph ? (
                            <>
                              {' '}
                              <Link
                                to={block.link_href ?? '/support'}
                                className="support-page__link"
                              >
                                {block.link_label}
                              </Link>
                            </>
                          ) : null}
                        </p>
                      )
                    })}
                  </article>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="support-page__inner">
        <Reveal className="support-page__section support-page__section--programs" delay_ms={140}>
          <section aria-labelledby="support-programs-heading">
            <h2 id="support-programs-heading" className="support-page__section-title">
              Apple 서비스 프로그램
            </h2>
            <ul className="support-page__program-list">
              {support_service_programs.map((program) => (
                <li key={program.label}>
                  <Link to={program.href} className="support-page__program-link">
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/support" className="support-page__link support-page__link--programs">
              모든 프로그램 보기
            </Link>
          </section>
        </Reveal>
      </div>
    </main>
  )
}
