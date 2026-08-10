export type FooterLink = {
  label: string
  to: string
}

export type FooterColumn = {
  title: string
  links: FooterLink[]
}

export const footer_legal: string[] = [
  '1. 최대 보상 판매 금액은 양호한 상태의 iPhone 16 Pro Max 1TB 모델을 대상으로 산정한 금액입니다. 보상 판매 서비스는 Apple의 보상 판매 파트너사를 통해 제공됩니다. Apple 및 Apple의 계열사는 고객과 보상 판매 파트너사 간 계약의 당사자가 아닙니다. 보상 판매 견적은 예상 금액이며 실제 보상 판매 금액은 예상 금액보다 낮을 수 있습니다. 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 모델, 그리고 보상 판매 대상이 되는 제품이 최초 판매된 국가/지역에 따라 달라집니다. 일부 기기는 보상 판매 대상이 아닙니다. 기기를 보상 판매하려면 민법상 성년이어야 합니다. 보상 판매 금액은 적용 가능한 새 기기 구입 시 적용하거나 Apple Store Gift Card로 받을 수 있습니다. 최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한 기기의 설명과 일치하는지 비교 검수 후 정해집니다. 부가세는 새로 구입한 기기의 총액을 바탕으로 부과됩니다. 일부 매장에서는 보상 판매를 제공하지 않으며, 매장 내 보상 판매와 온라인 보상 판매 프로그램 간 내용에 차이가 있을 수 있습니다. 일부 매장은 추가 요구 사항이 있을 수 있습니다. Apple의 보상 판매 파트너사는 보상 판매 거래를 거부, 취소하거나 보상 판매 수량을 제한할 권리를 보유합니다. 적용 가능 기기의 보상 판매 및 재활용에 대한 자세한 내용은 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. 규제 및 제한이 적용될 수 있습니다.',
  'Apple TV 이용을 위해서는 구독이 필요합니다.',
  '기능은 변경될 수 있습니다. 일부 기능, 애플리케이션 및 서비스를 이용할 수 없는 국가나 언어도 있습니다.',
]

export const footer_columns: FooterColumn[] = [
  {
    title: '쇼핑 및 알아보기',
    links: [
      { label: '스토어', to: '/store' },
      { label: 'Mac', to: '/mac' },
      { label: 'iPad', to: '/ipad' },
      { label: 'iPhone', to: '/iphone' },
      { label: 'Watch', to: '/watch' },
      { label: 'Vision', to: '/vision' },
      { label: 'AirPods', to: '/airpods' },
      { label: 'TV 및 홈', to: '/tv-home' },
      { label: '액세서리', to: '/accessories' },
    ],
  },
  {
    title: '계정',
    links: [
      { label: 'Apple 계정 관리', to: '/support' },
      { label: 'Apple Store 계정', to: '/store' },
    ],
  },
  {
    title: '엔터테인먼트',
    links: [
      { label: 'Apple TV', to: '/entertainment' },
      { label: 'Apple Music', to: '/entertainment' },
      { label: 'Apple Arcade', to: '/entertainment' },
    ],
  },
  {
    title: 'Apple Store',
    links: [
      { label: '매장 찾기', to: '/store' },
      { label: 'Genius Bar', to: '/support' },
      { label: 'Today at Apple', to: '/store' },
      { label: 'Apple Trade In', to: '/iphone' },
      { label: '쇼핑 도움말', to: '/support' },
    ],
  },
  {
    title: 'Apple 정보',
    links: [
      { label: 'Newsroom', to: '/support' },
      { label: '채용 안내', to: '/support' },
      { label: '이벤트', to: '/support' },
      { label: 'Apple 연락처', to: '/support' },
    ],
  },
]

export const footer_bottom_links: FooterLink[] = [
  { label: '개인정보 처리방침', to: '/support' },
  { label: '웹 사이트 이용 약관', to: '/support' },
  { label: '판매 및 환불', to: '/support' },
  { label: '법적 고지', to: '/support' },
  { label: '사이트 맵', to: '/support' },
]
