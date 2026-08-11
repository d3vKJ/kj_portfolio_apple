import nav_iphone_17_pro from '../../assets/iphone/iphones/iphone_17_pro.png'
import nav_iphone_17 from '../../assets/iphone/iphones/iphone_17.png'
import nav_iphone_air from '../../assets/iphone/iphones/iphone_air.png'
import nav_iphone_17e from '../../assets/iphone/iphones/iphone_17e.png'
import nav_iphone_16 from '../../assets/iphone/iphones/iphone_16.png'
import nav_compare from '../../assets/iphone/iphones/compare.png'
import nav_accessories from '../../assets/iphone/iphones/accessories.png'
import nav_shop from '../../assets/iphone/iphones/shop.png'
import nav_ios from '../../assets/iphone/iphones/ios.png'

import lineup_17_pro from '../../assets/iphone/lineup/iphone_17pro.jpg'
import lineup_17 from '../../assets/iphone/lineup/iphone_17.jpg'
import lineup_air from '../../assets/iphone/lineup/iphone_air.jpg'
import lineup_17e from '../../assets/iphone/lineup/iphone_17e.jpg'
import lineup_16 from '../../assets/iphone/lineup/iphone_16.jpg'

import more_guided from '../../assets/iphone/more/guided_tour.jpg'

import shop_trade_in from '../../assets/iphone/shoping/trade_in.jpg'
import shop_buy from '../../assets/iphone/shoping/buy.jpg'
import shop_deliver from '../../assets/iphone/shoping/deliver.jpg'
import shop_setup from '../../assets/iphone/shoping/setup.jpg'
import shop_specialist from '../../assets/iphone/shoping/specialist.jpg'
import shop_app from '../../assets/iphone/shoping/app.jpg'

import know_camera from '../../assets/iphone/know/camera.jpg'
import know_chip from '../../assets/iphone/know/chip.jpg'
import know_ios from '../../assets/iphone/know/ios.jpg'
import know_innovation from '../../assets/iphone/know/innovation.jpg'
import know_environment from '../../assets/iphone/know/environment.jpg'
import know_privacy from '../../assets/iphone/know/privacy.jpg'
import know_safety from '../../assets/iphone/know/safety.jpg'

import privacy_img from '../../assets/iphone/privacy/privacy.jpg'

import essentials_accessories from '../../assets/iphone/essentials/accessories.jpg'
import essentials_airtag from '../../assets/iphone/essentials/airtag.jpg'

import friends_mac from '../../assets/iphone/friends/mac.jpg'
import friends_watch from '../../assets/iphone/friends/watch.jpg'
import friends_airpods from '../../assets/iphone/friends/airpods.jpg'

export const iphone_nav_items = [
  { id: '17-pro', label: 'iPhone 17 Pro', image: nav_iphone_17_pro, href: '#lineup' },
  { id: 'air', label: 'iPhone Air', image: nav_iphone_air, href: '#lineup' },
  { id: '17', label: 'iPhone 17', image: nav_iphone_17, href: '#lineup' },
  { id: '17e', label: 'iPhone 17e', image: nav_iphone_17e, href: '#lineup' },
  { id: '16', label: 'iPhone 16', image: nav_iphone_16, href: '#lineup' },
  { id: 'compare', label: '비교하기', image: nav_compare, href: '#lineup' },
  { id: 'accessories', label: '액세서리', image: nav_accessories, href: '#essentials' },
  { id: 'shop', label: 'iPhone 쇼핑하기', image: nav_shop, href: '#shopping' },
  { id: 'ios', label: 'iOS', image: nav_ios, href: '#know', badge: '미리보기' },
]

export const iphone_lineup_items = [
  {
    id: '17-pro',
    name: 'iPhone 17 Pro',
    desc: '궁극의 성능 및 배터리 사용 시간을 위한\n혁신적인 디자인.',
    price: '₩1,790,000부터',
    colors: ['#C47A4A', '#5A5A5C', '#F5F5F0'],
    image: lineup_17_pro,
  },
  {
    id: 'air',
    name: 'iPhone Air',
    desc: '역대 가장 얇은 iPhone.\n역량은 프로급.',
    price: '₩1,350,000부터',
    colors: ['#F5F5F7', '#A8C5D4'],
    image: lineup_air,
  },
  {
    id: '17',
    name: 'iPhone 17',
    desc: '더욱더 경쾌하게.\n더욱더 견고하게.',
    price: '₩1,290,000부터',
    colors: ['#A8C9A0', '#C9B8D4', '#7BA3C9', '#F5F5F7', '#1d1d1f'],
    image: lineup_17,
  },
  {
    id: '17e',
    name: 'iPhone 17e',
    desc: '기능 가득.\n실속 가득.',
    price: '₩990,000부터',
    colors: ['#E8B4C4', '#F5F5F7', '#1d1d1f'],
    image: lineup_17e,
  },
  {
    id: '16',
    name: 'iPhone 16',
    desc: '놀라운 성능.\n견고한 디자인.',
    price: '₩1,150,000부터',
    colors: ['#5B7C9A', '#E8B4C4', '#F5F5F7', '#A8C9A0', '#1d1d1f'],
    image: lineup_16,
  },
]

export const iphone_more = {
  image: more_guided,
  title_line_1: 'iPhone 17 Pro, iPhone Air 및',
  title_line_2: 'iPhone 17 가이드 동영상',
  cta: '동영상 보기',
}

export const iphone_shopping_items = [
  {
    id: 'trade-in',
    title: 'Apple Trade In',
    text: '보상 판매로 새 iPhone을 더 알뜰하게.',
    image: shop_trade_in,
  },
  {
    id: 'buy',
    title: '할부 방식',
    text: '부담 없이 나누어 결제하세요.',
    image: shop_buy,
  },
  {
    id: 'deliver',
    title: '무료 배송',
    text: '원하는 곳으로 빠르게 받아보세요.',
    image: shop_deliver,
  },
  {
    id: 'setup',
    title: '쉬운 설정',
    text: '새 iPhone으로 간편하게 이전하세요.',
    image: shop_setup,
  },
  {
    id: 'specialist',
    title: '스페셜리스트',
    text: '전문가와 함께 개인 맞춤 상담.',
    image: shop_specialist,
  },
  {
    id: 'app',
    title: 'Apple Store 앱',
    text: '쇼핑부터 지원까지 한곳에서.',
    image: shop_app,
  },
]

export const iphone_know_items = [
  { id: 'camera', title: '카메라', image: know_camera },
  { id: 'chip', title: '칩', image: know_chip },
  { id: 'ios', title: 'iOS', image: know_ios },
  { id: 'innovation', title: '혁신', image: know_innovation },
  { id: 'environment', title: '환경', image: know_environment },
  { id: 'privacy', title: '개인정보 보호', image: know_privacy },
  { id: 'safety', title: '안전', image: know_safety },
]

export const iphone_privacy = {
  image: privacy_img,
  title_line_1: '개인정보 보호.',
  title_line_2: 'iPhone이니까.',
}

export const iphone_essentials = [
  {
    id: 'accessories',
    title: '액세서리',
    text: '스타일과 보호를 한 번에.',
    image: essentials_accessories,
  },
  {
    id: 'airtag',
    title: 'AirTag',
    text: '소중한 물건을 쉽게 찾아보세요.',
    image: essentials_airtag,
  },
]

export const iphone_friends = [
  {
    id: 'mac',
    title: 'Mac',
    text: 'iPhone 미러링으로 더 자연스럽게.',
    image: friends_mac,
  },
  {
    id: 'watch',
    title: 'Apple Watch',
    text: '손목 위에서 이어지는 일상.',
    image: friends_watch,
  },
  {
    id: 'airpods',
    title: 'AirPods',
    text: '한 번 페어링하면 어디서나.',
    image: friends_airpods,
  },
]
