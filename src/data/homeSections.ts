import phoneImg from '../../assets/main/1_phone.jpg'
import macbookAirImg from '../../assets/main/2_macbook.jpg'
import ipadAirImg from '../../assets/main/3_ipad_air.jpg'
import macbookProImg from '../../assets/main/grid_macbook_pro.jpg'
import watchImg from '../../assets/main/grid_apple_watch.jpg'
import airpodsImg from '../../assets/main/grid_airpods_pro.jpg'
import ipadProImg from '../../assets/main/grid_ipad_pro.jpg'
import watchUltraImg from '../../assets/main/grid_apple_watch_ultra.jpg'
import tradeInImg from '../../assets/main/grid_tradein.jpg'

export type Cta = {
  label: string
  to: string
}

export type Theme = 'dark' | 'light'

export type HeroSection = {
  id: string
  type: 'hero'
  theme: Theme
  title: string
  title_image?: string
  subtitle: string
  ctas: Cta[]
  image: string
  background_color: string
}

export type TileSection = {
  id: string
  theme: Theme
  title: string
  subtitle: string
  ctas: Cta[]
  image: string
  background_color: string
}

export type GridSection = {
  id: string
  type: 'grid'
  tiles: TileSection[]
}

export type HomeSection = HeroSection | GridSection

export type TvSlide = {
  id: string
  title: string
  genre: string
  description: string
  placeholder_color: string
}

export const home_sections: HomeSection[] = [
  {
    id: 'iphone',
    type: 'hero',
    theme: 'light',
    title: 'iPhone',
    subtitle: '최신 세대 iPhone을 만나보세요.',
    ctas: [
      { label: '더 알아보기', to: '/iphone' },
      { label: 'iPhone 쇼핑하기', to: '/iphone' },
    ],
    image: phoneImg,
    background_color: '#f5f5f7',
  },
  {
    id: 'macbook-air',
    type: 'hero',
    theme: 'light',
    title: 'MacBook Air',
    subtitle: '이제 막강한 성능의 M5 탑재.',
    ctas: [
      { label: '더 알아보기', to: '/mac' },
      { label: '구입하기', to: '/mac' },
    ],
    image: macbookAirImg,
    background_color: '#e8f4fc',
  },
  {
    id: 'ipad-air',
    type: 'hero',
    theme: 'light',
    title: 'iPad Air',
    subtitle: '이제 막강한 성능의 M4 탑재.',
    ctas: [
      { label: '더 알아보기', to: '/ipad' },
      { label: '구입하기', to: '/ipad' },
    ],
    image: ipadAirImg,
    background_color: '#e8f1f8',
  },
  {
    id: 'grid-pro-watch',
    type: 'grid',
    tiles: [
      {
        id: 'macbook-pro',
        theme: 'dark',
        title: 'MacBook Pro',
        subtitle: '이제 M5, M5 Pro 또는 M5 Max 탑재.',
        ctas: [
          { label: '더 알아보기', to: '/mac' },
          { label: '구입하기', to: '/mac' },
        ],
        image: macbookProImg,
        background_color: '#000',
      },
      {
        id: 'watch-series-11',
        theme: 'light',
        title: 'WATCH SERIES 11',
        subtitle: '당신의 건강을 살피는 궁극의 방법.',
        ctas: [
          { label: '더 알아보기', to: '/watch' },
          { label: '구입하기', to: '/watch' },
        ],
        image: watchImg,
        background_color: '#f5f5f7',
      },
    ],
  },
  {
    id: 'grid-airpods-ipad',
    type: 'grid',
    tiles: [
      {
        id: 'airpods-pro-3',
        theme: 'light',
        title: 'AirPods Pro 3',
        subtitle: '세계 최고의 인이어 액티브 노이즈 캔슬링.',
        ctas: [
          { label: '더 알아보기', to: '/airpods' },
          { label: '구입하기', to: '/airpods' },
        ],
        image: airpodsImg,
        background_color: '#f5f5f7',
      },
      {
        id: 'ipad-pro',
        theme: 'dark',
        title: 'iPad Pro',
        subtitle: '첨단 AI 성능 및 판도를 바꾸는 역량.',
        ctas: [
          { label: '더 알아보기', to: '/ipad' },
          { label: '구입하기', to: '/ipad' },
        ],
        image: ipadProImg,
        background_color: '#000',
      },
    ],
  },
  {
    id: 'grid-ultra-tradein',
    type: 'grid',
    tiles: [
      {
        id: 'watch-ultra-3',
        theme: 'dark',
        title: 'Apple Watch Ultra 3',
        subtitle: '손목 위의 야수.',
        ctas: [
          { label: '더 알아보기', to: '/watch' },
          { label: '구입하기', to: '/watch' },
        ],
        image: watchUltraImg,
        background_color: '#000',
      },
      {
        id: 'trade-in',
        theme: 'light',
        title: 'Apple Trade In',
        subtitle:
          'iPhone 13 이상의 모델을 보상 판매하면 ₩270,000-₩1,260,000 상당의 크레딧이.',
        ctas: [{ label: '견적 확인하기', to: '/iphone' }],
        image: tradeInImg,
        background_color: '#f5f5f7',
      },
    ],
  },
]

export const tv_slides: TvSlide[] = [
  {
    id: 'friends-neighbors',
    title: '프렌즈 & 네이버스',
    genre: '드라마',
    description: '욕망은 무죄',
    placeholder_color: '#3d2b1f',
  },
  {
    id: 'boomerang',
    title: '부메랑',
    genre: '코미디',
    description: '조나 힐 감독, 키아누 리브스 주연의 새로운 블랙 코미디',
    placeholder_color: '#1a3a4a',
  },
  {
    id: 'eternity',
    title: '저세상 로맨스',
    genre: '로맨스',
    description: '저 너머에도 사랑은 존재할까?',
    placeholder_color: '#4a2c4a',
  },
  {
    id: 'monarch',
    title: '모나크: 레거시 오브 몬스터즈',
    genre: '어드벤처',
    description: '새로운 위협',
    placeholder_color: '#2a3a1a',
  },
  {
    id: 'for-all-mankind',
    title: '포 올 맨카인드',
    genre: '드라마',
    description: '화성을 향한 인류의 새로운 골드러시가 시작된다',
    placeholder_color: '#1a2a4a',
  },
  {
    id: 'f1',
    title: 'F1 더 무비',
    genre: '액션',
    description: '달릴 준비 됐나?',
    placeholder_color: '#4a1a1a',
  },
  {
    id: 'pachinko',
    title: '파친코',
    genre: '드라마',
    description: '우리 안에는 운명을 스스로 바꿀 용기가 있다',
    placeholder_color: '#3a2a1a',
  },
]
