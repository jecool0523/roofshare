import { Room, Review, Amenity, MediaItem } from './types';

// Asset Management
// NOTE: Ensure these files exist in public/assets/ folder
export const ASSETS = {
  hero: [
    {
      id: 1,
      type: 'video',
      src: '/assets/room_tour.mp4',
      poster: '/assets/houseimg.jpeg', // Using galaxy image as placeholder poster
      alt: 'House Tour Video'
    },
    {
      id: 2,
      type: 'image',
      src: '/assets/logo.png',
      alt: 'Kyung Hee University Sharehouse Logo'
    },
    {
      id: 3,
      type: 'image',
      src: '/assets/houseimg.jpeg',
      alt: 'Night View'
    },
    {
      id: 4,
      type: 'image',
      src: '/assets/fox.png',
      alt: 'Study Character'
    }
  ] as MediaItem[],
  manager: {
    avatar: "https://picsum.photos/200/200?random=2",
    header: "https://picsum.photos/800/400?random=1",
  },
  mapBg: "https://picsum.photos/600/300?grayscale&blur=2",
  thumb: "https://picsum.photos/100/100?random=1",
  spots: [
      "https://picsum.photos/150/150?random=10",
      "https://picsum.photos/150/150?random=11"
  ]
};

// House Information
export const HOUSE_INFO = {
  name: "경희대국캠 쉐어하우스",
  address: "경기도 용인시 기흥구 서그내로 31 서천효성해링턴플레이스",
  updateDate: "1일 전",
  tags: {
      primary: "여성전용",
      secondary: "인원 모집중"
  },
  price: {
      rent: "45 ~ 62",
      deposit: "300",
      maintenance: "5"
  },
  stats: [
      { icon: 'home_work', label: '형태', value: '아파트' },
      { icon: 'meeting_room', label: '총 방수', value: '4개' },
      { icon: 'group', label: '정원', value: '6명' }
  ],
  features: [
      '아파트형 쉐어하우스',
      '신축 아파트로 깨끗하고 안전한 보안 시스템',
      '경희대 전용연결도로 보유 (5분내 이동)',
      '아파트 내 커뮤니티 시설 이용 가능'
  ]
};

// Amenities List
export const AMENITIES: Amenity[] = [
  { icon: 'wifi', label: 'WIFI' },
  { icon: 'ac_unit', label: '에어컨' },
  { icon: 'local_laundry_service', label: '세탁기' },
  { icon: 'kitchen', label: '냉장고' },
  { icon: 'tv', label: 'TV' },
  { icon: 'microwave', label: '전자렌지' },
  { icon: 'desk', label: '책상' },
  { icon: 'more_horiz', label: '더보기' },
];

// Manager Profile Data
export const MANAGER_PROFILE = {
    name: "제정호",
    phoneNumber: "010-3460-6375",
    title: "경희대국캠 쉐어하우스 매니저",
    shortDesc: "안녕하세요! 함께 사는 즐거움을 추구하는 경희대국캠 쉐어하우스 매니저 매니저입니다.",
    fullDesc: `안녕하세요! 함께 사는 즐거움을 추구하는 경희대국캠 쉐어하우스 매니저 매니저입니다.
    
깨끗하고 안전한 공간에서 여러분이 편안하게 지낼 수 있도록 최선을 다하고 있어요.
입주자분들이 내 집처럼 편안함을 느낄 수 있도록 항상 노력하겠습니다.`,
    stats: {
        responseRate: "98%",
        responseTime: "30분 이내"
    },
    rules: [
        { icon: "🙂", text: "서로 배려하고 존중해요." },
        { icon: "🧹", text: "공동 공간은 함께 깨끗하게 유지해요." },
        { icon: "🤫", text: "늦은 시간에는 정숙을 부탁드려요." }
    ],
    spots: [
        { name: "거실", desc: "함께 영화를 보며 이야기를 나눠요.", img: ASSETS.spots[0] },
        { name: "테라스", desc: "주말 아침, 커피 한 잔의 여유.", img: ASSETS.spots[1] }
    ]
};

// Rooms Data
export const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Room A (1인실)',
    type: 'Premium',
    price: 55,
    deposit: 300,
    features: ['남향', '큰 창문', '개별 에어컨'],
    status: 'available',
    image: 'https://picsum.photos/200/200?random=3'
  },
  {
    id: '2',
    name: 'Room B (1인실)',
    type: 'Standard',
    price: 50,
    deposit: 300,
    features: ['서향', '붙박이장'],
    status: 'full',
    image: 'https://picsum.photos/200/200?random=4'
  },
  {
    id: '3',
    name: 'Room C (2인실)',
    type: 'Twin',
    price: 42,
    deposit: 80,
    features: ['넓은 공간', '친구와 함께'],
    status: 'soon',
    dateAvailable: '2024.12.30 입주가능',
    image: 'https://picsum.photos/200/200?random=5'
  }
];

// Reviews Data
export const REVIEW_DATA = {
    summary: {
        score: 4.8,
        count: 340,
        details: [
            { label: '청결도', val: '95%' },
            { label: '위치', val: '98%' },
            { label: '소통', val: '92%' },
        ]
    },
    list: [
        {
            id: '1',
            user: '지은',
            date: '2024.05.12',
            rating: 5,
            content: '학교랑 정말 가까워서 좋았어요! 관리비도 합리적이고 방도 깨끗했습니다.',
            images: ['https://picsum.photos/100/100?random=10', 'https://picsum.photos/100/100?random=11', 'https://picsum.photos/100/100?random=12'],
            avatar: 'https://picsum.photos/50/50?random=20'
        },
        {
            id: '2',
            user: '와웁',
            date: '2024.05.10',
            rating: 5,
            content: '다른 쉐어하우스보다 확실히 관리가 잘 되는 느낌이에요. 매니저님이 피드백이 빨라서 좋아요.',
            images: [],
            avatar: 'https://picsum.photos/50/50?random=21'
        }
    ] as Review[]
};

// Location Data
export const LOCATION_INFO = {
    mapLink: 'https://www.google.com/maps/search/경기도 용인시 기흥구 서그내로 31 서천효성해링턴플레이스',
    tags: [
        { icon: 'directions_subway', text: '경희대 본관 5분' },
        { icon: 'school', text: '경희대 정문 10분' },
        { icon: 'local_convenience_store', text: '커뮤니티센터 1분' }
    ]
};