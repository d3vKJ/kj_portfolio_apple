import logo_circle_blue from '../../assets/support/support-home-apple-logo-circle-blue.png'
import grid_iphone from '../../assets/support/image-grid-iphone-nav_2x.png'
import grid_mac from '../../assets/support/image-grid-mac-nav_2x.png'
import grid_ipad from '../../assets/support/image-grid-ipad-tn_2x.png'
import grid_watch from '../../assets/support/image-grid-watch_2x.png'
import grid_vision from '../../assets/support/image-grid-apple-vision-pro_2x.png'
import grid_airpods from '../../assets/support/image-grid-airpods_2x.png'
import icon_password from '../../assets/support/icon-apple-account-password-open.svg'
import icon_repair from '../../assets/support/icon-receipt-purchase-history.svg'
import icon_subscription from '../../assets/support/icon-calendar-subscription.svg'
import tile_applecare from '../../assets/support/tile-side-applecare.image.large_2x.png'
import tile_repair from '../../assets/support/tile-feature-repair-and-service.image.large_2x.png'
import tile_support_app from '../../assets/support/content-block-apple-support.png'
import tile_today_at_apple from '../../assets/support/tile-feature-round-todayatapple.png'

export const support_product_items = [
  { id: 'iphone', label: 'iPhone', image: grid_iphone, href: '/iphone' },
  { id: 'mac', label: 'Mac', image: grid_mac, href: '/mac' },
  { id: 'ipad', label: 'iPad', image: grid_ipad, href: '/ipad' },
  { id: 'watch', label: 'Watch', image: grid_watch, href: '/watch' },
  { id: 'vision', label: 'Vision', image: grid_vision, href: '/vision' },
  { id: 'airpods', label: 'AirPods', image: grid_airpods, href: '/airpods' },
]

export const support_quick_actions = [
  {
    id: 'password',
    label: 'Apple 계정 암호 재설정하기',
    icon: icon_password,
    href: '/support',
  },
  {
    id: 'repair',
    label: '청구 및 결제',
    icon: icon_repair,
    href: '/support',
  },
  {
    id: 'subscription',
    label: '구독 변경하기',
    icon: icon_subscription,
    href: '/support',
  },
]

export const support_features = [
  {
    id: 'applecare',
    title: 'AppleCare로 관리하기',
    description:
      'AppleCare+로 기기를 보호하고 우발적인 손상에 대한 수리 서비스를 받으세요. 전문가의 기술 지원도 이용할 수 있습니다.',
    link_label: '더 알아보기',
    link_href: '/support',
    image: tile_applecare,
    image_position: 'left' as const,
  },
  {
    id: 'repair-service',
    title: 'Apple 수리 및 서비스',
    description:
      'Apple Store 매장, Apple 공인 서비스 제공업체 또는 우편 수리 서비스를 통해 기기를 수리하세요. 수리 상태를 확인하고 예약할 수 있습니다.',
    link_label: '수리 시작하기',
    link_href: '/support',
    image: tile_repair,
    image_position: 'right' as const,
  },
]

export const support_explore_items = [
  {
    id: 'support-app',
    title: 'Apple 지원 앱',
    description:
      '맞춤형 솔루션을 받고, 수리를 예약하고, Apple 전문가와 채팅하세요. Apple 지원 앱을 다운로드하세요.',
    link_label: '다운로드',
    link_href: '/support',
    image: tile_support_app,
  },
  {
    id: 'today-at-apple',
    title: 'Today at Apple',
    description:
      'Apple Store에서 열리는 무료 세션에 참여하세요. 사진, 음악, 코딩 등 다양한 주제를 배울 수 있습니다.',
    link_label: '세션 참여하기',
    link_href: '/support',
    image: tile_today_at_apple,
  },
]

export type InfoTextSegment =
  | { type: 'text'; value: string }
  | { type: 'link'; label: string; href: string }

export type InfoParagraph = string | InfoTextSegment[]

export const support_info_blocks = [
  {
    id: 'durability',
    title: '내구성을 고려한 설계',
    paragraphs: [
      'Apple은 항상 고객에게 최고의 경험을 제공하기 위해 노력하고 있으며, 이를 위해 오래 사용할 수 있는 제품을 디자인하고 있습니다.\n내구성을 고려한 설계는 Apple의 전사적인 노력으로, 첫 번째 프로토타입을 제작하기 훨씬 전에 초기 결정을 내리고 과거 고객 사용 데이터와\n향후 사용 예측을 반영합니다. 안전, 보안, 개인 정보 보호에서 타협하지 않으면서 내구성과 수리 용이성 사이의 균형을 유지해야 합니다.',
      '안전하고 신뢰할 수 있는 수리를 비롯하여 내구성을 고려한 Apple의 설계 방식에 대해 자세히 알아보십시오.',
    ],
    link_label: '자세히 보기(PDF)',
    link_href: '/support',
  },
  {
    id: 'counterfeit',
    title: '유사/모조품 주의',
    paragraphs: [
      [
        {
          type: 'text' as const,
          value:
            '일부 유사/모조품과 타사 배터리 및 전원 어댑터는 제대로 설계되지 않아 안전 관련 문제를 초래할 수 있습니다. 배터리 교체 시 Apple 정품 배터리로 교체하기 위해서는 ',
        },
        { type: 'link' as const, label: 'Apple Store', href: '/support' },
        { type: 'text' as const, value: '또는' },
        {
          type: 'link' as const,
          label: 'Apple 공인 서비스 제공업체',
          href: '/support',
        },
        {
          type: 'text' as const,
          value:
            '를 방문하시는 것이 좋습니다. Apple 기기 충전용 어댑터를 교체해야 한다면 Apple 전원 어댑터로 교체하시는 것이 좋습니다.',
        },
      ],
      '정품이 아닌 교체용 디스플레이는 시각적 품질이 좋지 않거나 제대로 작동하지 않을 수 있습니다. 신뢰할 수 있는 전문가가 정품 Apple 부품만을 사용하여 Apple 인증 디스플레이 수리를 수행합니다.',
    ],
  },
]

export const support_service_programs = [
  { label: 'iPhone 14 Plus 후면 카메라 모듈 서비스 프로그램', href: '/support' },
  { label: 'MacBook Pro 배터리 리콜 프로그램', href: '/support' },
  { label: 'iPhone 12 및 iPhone 12 Pro 소리 문제 서비스 프로그램', href: '/support' },
  { label: '15인치 MacBook Pro 배터리 리콜 프로그램', href: '/support' },
  { label: 'iPhone 6s 예기치 않은 종료 문제 프로그램', href: '/support' },
]

export { logo_circle_blue }
