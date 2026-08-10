export type NavItem = {
  label: string
  path: string
}

export type MegaLink = {
  label: string
  to: string
}

export type MegaColumn = {
  title: string
  variant: 'primary' | 'secondary'
  links: MegaLink[]
}

export type MegaMenu = {
  path: string
  columns: MegaColumn[]
}

export const nav_items: NavItem[] = [
  { label: '스토어', path: '/store' },
  { label: 'Mac', path: '/mac' },
  { label: 'iPad', path: '/ipad' },
  { label: 'iPhone', path: '/iphone' },
  { label: 'Watch', path: '/watch' },
  { label: 'Vision', path: '/vision' },
  { label: 'AirPods', path: '/airpods' },
  { label: 'TV 및 홈', path: '/tv-home' },
  { label: '엔터테인먼트', path: '/entertainment' },
  { label: '액세서리', path: '/accessories' },
  { label: '고객지원', path: '/support' },
]

export const mega_menus: MegaMenu[] = [
  {
    path: '/store',
    columns: [
      {
        title: '쇼핑하기',
        variant: 'primary',
        links: [
          { label: '최신 제품 쇼핑하기', to: '/store' },
          { label: 'Mac', to: '/mac' },
          { label: 'iPad', to: '/ipad' },
          { label: 'iPhone', to: '/iphone' },
          { label: 'Apple Watch', to: '/watch' },
          { label: 'Apple Vision Pro', to: '/vision' },
          { label: 'AirPods', to: '/airpods' },
          { label: '액세서리', to: '/accessories' },
        ],
      },
      {
        title: '빠른 링크',
        variant: 'secondary',
        links: [
          { label: '매장 찾기', to: '/store' },
          { label: '주문 상태', to: '/store' },
          { label: 'Apple Trade In', to: '/iphone' },
          { label: '할부 방식', to: '/store' },
          { label: '개인 맞춤 설정', to: '/store' },
        ],
      },
      {
        title: '특별 할인 쇼핑하기',
        variant: 'secondary',
        links: [
          { label: '인증 리퍼비쉬 제품', to: '/store' },
          { label: '교육', to: '/store' },
          { label: '비즈니스', to: '/store' },
        ],
      },
    ],
  },
  {
    path: '/mac',
    columns: [
      {
        title: 'Mac 살펴보기',
        variant: 'primary',
        links: [
          { label: 'Mac 모두 살펴보기', to: '/mac' },
          { label: 'MacBook Air', to: '/mac' },
          { label: 'MacBook Pro', to: '/mac' },
          { label: 'iMac', to: '/mac' },
          { label: 'Mac mini', to: '/mac' },
          { label: 'Mac Studio', to: '/mac' },
          { label: 'Mac Pro', to: '/mac' },
          { label: '디스플레이', to: '/mac' },
        ],
      },
      {
        title: 'Mac 쇼핑하기',
        variant: 'secondary',
        links: [
          { label: 'Mac 쇼핑하기', to: '/mac' },
          { label: 'Mac 액세서리', to: '/accessories' },
          { label: 'Apple Trade In', to: '/mac' },
          { label: '할부 방식', to: '/mac' },
        ],
      },
      {
        title: '그 외 Mac 관련 쇼핑',
        variant: 'secondary',
        links: [
          { label: 'Mac 지원', to: '/support' },
          { label: 'AppleCare', to: '/support' },
          { label: 'macOS Sequoia', to: '/mac' },
          { label: 'Apps by Apple', to: '/mac' },
        ],
      },
    ],
  },
  {
    path: '/ipad',
    columns: [
      {
        title: 'iPad 살펴보기',
        variant: 'primary',
        links: [
          { label: 'iPad 모두 살펴보기', to: '/ipad' },
          { label: 'iPad Pro', to: '/ipad' },
          { label: 'iPad Air', to: '/ipad' },
          { label: 'iPad', to: '/ipad' },
          { label: 'iPad mini', to: '/ipad' },
          { label: 'Apple Pencil', to: '/ipad' },
          { label: '키보드', to: '/ipad' },
        ],
      },
      {
        title: 'iPad 쇼핑하기',
        variant: 'secondary',
        links: [
          { label: 'iPad 쇼핑하기', to: '/ipad' },
          { label: 'iPad 액세서리', to: '/accessories' },
          { label: 'Apple Trade In', to: '/ipad' },
          { label: '할부 방식', to: '/ipad' },
        ],
      },
      {
        title: '그 외 iPad 관련 쇼핑',
        variant: 'secondary',
        links: [
          { label: 'iPad 지원', to: '/support' },
          { label: 'AppleCare', to: '/support' },
          { label: 'iPadOS', to: '/ipad' },
          { label: 'Apps by Apple', to: '/ipad' },
        ],
      },
    ],
  },
  {
    path: '/iphone',
    columns: [
      {
        title: 'iPhone 살펴보기',
        variant: 'primary',
        links: [
          { label: 'iPhone 모두 살펴보기', to: '/iphone' },
          { label: 'iPhone 16 Pro', to: '/iphone' },
          { label: 'iPhone 16', to: '/iphone' },
          { label: 'iPhone 16e', to: '/iphone' },
          { label: 'iPhone 비교하기', to: '/iphone' },
          { label: '다른 기기에서 갈아타기', to: '/iphone' },
        ],
      },
      {
        title: 'iPhone 쇼핑하기',
        variant: 'secondary',
        links: [
          { label: 'iPhone 쇼핑하기', to: '/iphone' },
          { label: 'iPhone 액세서리', to: '/accessories' },
          { label: 'Apple Trade In', to: '/iphone' },
          { label: '할부 방식', to: '/iphone' },
        ],
      },
      {
        title: '그 외 iPhone 관련 쇼핑',
        variant: 'secondary',
        links: [
          { label: 'iPhone 지원', to: '/support' },
          { label: 'AppleCare', to: '/support' },
          { label: 'iOS', to: '/iphone' },
          { label: 'Apple Intelligence', to: '/iphone' },
        ],
      },
    ],
  },
  {
    path: '/watch',
    columns: [
      {
        title: 'Watch 살펴보기',
        variant: 'primary',
        links: [
          { label: 'Apple Watch 모두 살펴보기', to: '/watch' },
          { label: 'Apple Watch Series 11', to: '/watch' },
          { label: 'Apple Watch Ultra 3', to: '/watch' },
          { label: 'Apple Watch SE', to: '/watch' },
          { label: 'Apple Watch 비교하기', to: '/watch' },
          { label: '스트랩', to: '/watch' },
        ],
      },
      {
        title: 'Watch 쇼핑하기',
        variant: 'secondary',
        links: [
          { label: 'Apple Watch 쇼핑하기', to: '/watch' },
          { label: 'Apple Watch 스트랩', to: '/accessories' },
          { label: 'Apple Watch 액세서리', to: '/accessories' },
          { label: 'Apple Trade In', to: '/watch' },
        ],
      },
      {
        title: '그 외 Watch 관련 쇼핑',
        variant: 'secondary',
        links: [
          { label: 'Apple Watch 지원', to: '/support' },
          { label: 'AppleCare', to: '/support' },
          { label: 'watchOS', to: '/watch' },
        ],
      },
    ],
  },
  {
    path: '/vision',
    columns: [
      {
        title: 'Vision 살펴보기',
        variant: 'primary',
        links: [
          { label: 'Apple Vision Pro', to: '/vision' },
          { label: '주요 기능', to: '/vision' },
          { label: '기술 사양', to: '/vision' },
        ],
      },
      {
        title: 'Vision 쇼핑하기',
        variant: 'secondary',
        links: [
          { label: 'Apple Vision Pro 쇼핑하기', to: '/vision' },
          { label: '액세서리', to: '/accessories' },
          { label: '데모 예약하기', to: '/vision' },
        ],
      },
      {
        title: '그 외 Vision 관련 쇼핑',
        variant: 'secondary',
        links: [
          { label: 'visionOS', to: '/vision' },
          { label: '지원', to: '/support' },
        ],
      },
    ],
  },
  {
    path: '/airpods',
    columns: [
      {
        title: 'AirPods 살펴보기',
        variant: 'primary',
        links: [
          { label: 'AirPods 모두 살펴보기', to: '/airpods' },
          { label: 'AirPods Pro 3', to: '/airpods' },
          { label: 'AirPods 4', to: '/airpods' },
          { label: 'AirPods Max', to: '/airpods' },
          { label: 'AirPods 비교하기', to: '/airpods' },
        ],
      },
      {
        title: 'AirPods 쇼핑하기',
        variant: 'secondary',
        links: [
          { label: 'AirPods 쇼핑하기', to: '/airpods' },
          { label: 'AirPods 액세서리', to: '/accessories' },
        ],
      },
      {
        title: '그 외 AirPods 관련 쇼핑',
        variant: 'secondary',
        links: [
          { label: 'AirPods 지원', to: '/support' },
          { label: 'AppleCare', to: '/support' },
        ],
      },
    ],
  },
  {
    path: '/tv-home',
    columns: [
      {
        title: 'TV 및 홈 살펴보기',
        variant: 'primary',
        links: [
          { label: 'TV 및 홈 모두 살펴보기', to: '/tv-home' },
          { label: 'Apple TV 4K', to: '/tv-home' },
          { label: 'HomePod', to: '/tv-home' },
          { label: 'HomePod mini', to: '/tv-home' },
        ],
      },
      {
        title: 'TV 및 홈 쇼핑하기',
        variant: 'secondary',
        links: [
          { label: 'Apple TV 4K 쇼핑하기', to: '/tv-home' },
          { label: 'HomePod 쇼핑하기', to: '/tv-home' },
          { label: 'Siri Remote', to: '/accessories' },
          { label: 'TV 및 홈 액세서리', to: '/accessories' },
        ],
      },
      {
        title: '그 외 TV 및 홈 관련 쇼핑',
        variant: 'secondary',
        links: [
          { label: 'Apple TV 앱', to: '/entertainment' },
          { label: 'Home 앱', to: '/tv-home' },
          { label: '지원', to: '/support' },
        ],
      },
    ],
  },
  {
    path: '/entertainment',
    columns: [
      {
        title: '엔터테인먼트 살펴보기',
        variant: 'primary',
        links: [
          { label: '엔터테인먼트 모두 살펴보기', to: '/entertainment' },
          { label: 'Apple One', to: '/entertainment' },
          { label: 'Apple TV+', to: '/entertainment' },
          { label: 'Apple Music', to: '/entertainment' },
          { label: 'Apple Arcade', to: '/entertainment' },
          { label: 'Apple 팟캐스트', to: '/entertainment' },
          { label: 'Apple Books', to: '/entertainment' },
          { label: 'App Store', to: '/store' },
        ],
      },
      {
        title: '지원',
        variant: 'secondary',
        links: [
          { label: 'Apple TV+ 지원', to: '/support' },
          { label: 'Apple Music 지원', to: '/support' },
        ],
      },
    ],
  },
  {
    path: '/accessories',
    columns: [
      {
        title: '액세서리 쇼핑하기',
        variant: 'primary',
        links: [
          { label: '액세서리 모두 살펴보기', to: '/accessories' },
          { label: 'Mac', to: '/accessories' },
          { label: 'iPad', to: '/accessories' },
          { label: 'iPhone', to: '/accessories' },
          { label: 'Apple Watch', to: '/accessories' },
          { label: 'AirPods', to: '/accessories' },
          { label: 'TV 및 홈', to: '/accessories' },
        ],
      },
      {
        title: '액세서리 살펴보기',
        variant: 'secondary',
        links: [
          { label: 'Made by Apple', to: '/accessories' },
          { label: 'Beats', to: '/accessories' },
          { label: 'AirTag', to: '/accessories' },
        ],
      },
    ],
  },
  {
    path: '/support',
    columns: [
      {
        title: '지원 살펴보기',
        variant: 'primary',
        links: [
          { label: 'iPhone', to: '/support' },
          { label: 'Mac', to: '/support' },
          { label: 'iPad', to: '/support' },
          { label: 'Watch', to: '/support' },
          { label: 'AirPods', to: '/support' },
          { label: 'Music', to: '/support' },
          { label: 'TV', to: '/support' },
        ],
      },
      {
        title: '도움 받기',
        variant: 'secondary',
        links: [
          { label: '커뮤니티', to: '/support' },
          { label: '지원 확인하기', to: '/support' },
          { label: '수리 안내', to: '/support' },
        ],
      },
      {
        title: '유용한 주제',
        variant: 'secondary',
        links: [
          { label: 'AppleCare+', to: '/support' },
          { label: 'Apple 계정 및 암호', to: '/support' },
          { label: '청구 및 구독', to: '/support' },
          { label: '손쉬운 사용', to: '/support' },
        ],
      },
    ],
  },
]

export function get_mega_menu(path: string): MegaMenu | undefined {
  return mega_menus.find((menu) => menu.path === path)
}
