
import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', href: '#home' },
  { label: '제품소개', href: '#products' },
  { label: '회사소개', href: '#about' },
  { label: '문의하기', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'moving-head',
    name: '무빙 헤드 조명 (BEAM MOVING LIGHT)',
    category: 'Stage Lighting',
    description: '360도 회전과 초고휘도 광원을 통해 압도적인 무대 연출이 가능합니다. 대규모 콘서트 및 이벤트 필수 아이템입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
    features: ['360도 무한 회전', '동적 줌 기능', 'DMX512 제어', '고성능 쿨링 시스템']
  },
  {
    id: 'led-par',
    name: 'JGS LED PAR 라이트',
    category: 'LED Solution',
    description: 'RGBW 색상 혼합과 3200K~5600K 화이트 밸런스 조절이 가능한 다목적 조명입니다. 야외 및 실내 조명에 최적화되었습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    features: ['RGBW 멀티컬러', '줌 포커싱 기능', 'IP65 방수 등급', '에너지 효율 1등급']
  },
  {
    id: 'gobo-light',
    name: '아웃도어 고보 라이트 (AD GOBO LIGHT)',
    category: 'Outdoor Ad',
    description: '건물 외벽이나 바닥에 로고와 메시지를 선명하게 투사합니다. 야간 광고 및 안내에 강력한 효과를 발휘합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    features: ['고선명 광학 렌즈', '로고 회전 기능', '장거리 투사 능력', '내구성 높은 알루미늄 바디']
  },
  {
    id: 'ellipsoidal',
    name: 'LED 엘립소이달 (PROFILE SPOT)',
    category: 'Theater Lighting',
    description: '공연장 및 스튜디오용 정밀 스포트라이트입니다. 날카로운 빔 쉐이핑과 깨끗한 빛 패턴을 제공합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800',
    features: ['4중 셔터 블레이드', '부드러운 조광 처리', '고효율 LED 소스', '정숙한 팬 구동']
  }
];
