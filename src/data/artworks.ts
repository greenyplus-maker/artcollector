import type { Artwork } from "../types/artwork";

export const todayArtwork: Artwork = {
  id: 1,
  title: "Chromatic Resonance",
  artist: "Elena Rodriguez",
  year: 2024,
  medium: "Acrylic on Canvas",
  dimensions: "180 × 140 cm",
  description:
    "추상적 형태와 생동감 넘치는 색채가 조화를 이루는 작품입니다. 작가는 현대 도시의 에너지와 자연의 유기적 흐름을 결합하여, 보는 이로 하여금 내면의 리듬을 발견하게 합니다. 이 작품은 Rodriguez의 'Urban Nature' 시리즈 중 가장 주목받는 작품으로, 2024년 베니스 비엔날레에서 호평을 받았습니다.",
  imageUrl:
    "https://images.unsplash.com/photo-1530100914167-73e7602b004c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vZGVybiUyMGFydHxlbnwxfHx8fDE3NjMwMTEzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  date: "2025.11.13",
  price: "가격 문의",
  edition: "Unique piece",
};

export const pastRecommendations: Artwork[] = [
  {
    id: 2,
    title: "Urban Palette",
    artist: "Marcus Chen",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "120 × 100 cm",
    description: "도시의 색채를 재해석한 현대 회화",
    imageUrl:
      "https://images.unsplash.com/photo-1643756511497-b3e4701ea792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBwYWludGluZ3xlbnwxfHx8fDE3NjMwMTgxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2025.11.12",
  },
  {
    id: 3,
    title: "Eternal Form",
    artist: "Yuki Tanaka",
    year: 2024,
    medium: "Bronze Sculpture",
    dimensions: "95 × 60 × 45 cm",
    description: "시간의 흐름을 담은 조각",
    imageUrl:
      "https://images.unsplash.com/photo-1720303429758-92e2123800cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBhcnR8ZW58MXx8fHwxNzYyOTM4NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2025.11.11",
  },
  {
    id: 4,
    title: "Silent Spaces",
    artist: "Anna Bergström",
    year: 2023,
    medium: "Mixed Media",
    dimensions: "150 × 120 cm",
    description: "미니멀리즘의 본질을 탐구하다",
    imageUrl:
      "https://images.unsplash.com/photo-1649513137940-daacab3ee11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJ0d29ya3xlbnwxfHx8fDE3NjI5OTgyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2025.11.10",
  },
  {
    id: 5,
    title: "Dialogue in Light",
    artist: "James Wilson",
    year: 2024,
    medium: "Installation",
    dimensions: "Variable dimensions",
    description: "빛과 공간의 대화",
    imageUrl:
      "https://images.unsplash.com/photo-1719935115623-4857df23f3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NjMwMTgxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2025.11.09",
  },
];


