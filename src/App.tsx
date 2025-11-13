import { Calendar, Heart, Share2, ChevronRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useState } from "react";

interface Artwork {
  id: number;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  date: string;
  price?: string;
  edition?: string;
}

export default function App() {
  const [liked, setLiked] = useState(false);

  const todayArtwork: Artwork = {
    id: 1,
    title: "Chromatic Resonance",
    artist: "Elena Rodriguez",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: "180 × 140 cm",
    description: "추상적 형태와 생동감 넘치는 색채가 조화를 이루는 작품입니다. 작가는 현대 도시의 에너지와 자연의 유기적 흐름을 결합하여, 보는 이로 하여금 내면의 리듬을 발견하게 합니다. 이 작품은 Rodriguez의 'Urban Nature' 시리즈 중 가장 주목받는 작품으로, 2024년 베니스 비엔날레에서 호평을 받았습니다.",
    imageUrl: "https://images.unsplash.com/photo-1530100914167-73e7602b004c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vZGVybiUyMGFydHxlbnwxfHx8fDE3NjMwMTEzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "2025.11.13",
    price: "가격 문의",
    edition: "Unique piece"
  };

  const pastRecommendations: Artwork[] = [
    {
      id: 2,
      title: "Urban Palette",
      artist: "Marcus Chen",
      year: 2023,
      medium: "Oil on Canvas",
      dimensions: "120 × 100 cm",
      description: "도시의 색채를 재해석한 현대 회화",
      imageUrl: "https://images.unsplash.com/photo-1643756511497-b3e4701ea792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBwYWludGluZ3xlbnwxfHx8fDE3NjMwMTgxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025.11.12"
    },
    {
      id: 3,
      title: "Eternal Form",
      artist: "Yuki Tanaka",
      year: 2024,
      medium: "Bronze Sculpture",
      dimensions: "95 × 60 × 45 cm",
      description: "시간의 흐름을 담은 조각",
      imageUrl: "https://images.unsplash.com/photo-1720303429758-92e2123800cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBhcnR8ZW58MXx8fHwxNzYyOTM4NzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025.11.11"
    },
    {
      id: 4,
      title: "Silent Spaces",
      artist: "Anna Bergström",
      year: 2023,
      medium: "Mixed Media",
      dimensions: "150 × 120 cm",
      description: "미니멀리즘의 본질을 탐구하다",
      imageUrl: "https://images.unsplash.com/photo-1649513137940-daacab3ee11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJ0d29ya3xlbnwxfHx8fDE3NjI5OTgyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025.11.10"
    },
    {
      id: 5,
      title: "Dialogue in Light",
      artist: "James Wilson",
      year: 2024,
      medium: "Installation",
      dimensions: "Variable dimensions",
      description: "빛과 공간의 대화",
      imageUrl: "https://images.unsplash.com/photo-1719935115623-4857df23f3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NjMwMTgxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025.11.09"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 sm:py-8 gap-4 sm:gap-0">
            <div>
              <h1 className="tracking-tight text-white">ATELIER</h1>
              <p className="text-zinc-400 mt-1 text-sm sm:text-base">Curated Contemporary Art</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Button variant="ghost" size="sm" className="text-zinc-300 hover:text-white hover:bg-zinc-900 [&]:text-zinc-300 hover:[&]:text-white">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Archive</span>
                <span className="sm:hidden">Archive</span>
              </Button>
              <Button variant="outline" size="sm" className="border-zinc-700 !text-white hover:bg-zinc-900 hover:!text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Today's Featured Artwork */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Badge variant="secondary" className="px-4 sm:px-6 py-1.5 sm:py-2 bg-zinc-900 text-zinc-100 border border-zinc-800">
            Featured Today
          </Badge>
          <span className="text-zinc-500 uppercase tracking-wider text-sm">{todayArtwork.date}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start">
          {/* Image */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] bg-zinc-900 overflow-hidden">
              <ImageWithFallback
                src={todayArtwork.imageUrl}
                alt={todayArtwork.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 xl:col-span-4 lg:pt-4">
            <div className="space-y-6 sm:space-y-8">
              {/* Title and Artist */}
              <div>
                <h2 className="text-white mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">{todayArtwork.title}</h2>
                <p className="text-zinc-300 text-lg sm:text-xl">
                  {todayArtwork.artist}
                </p>
                <p className="text-zinc-500 mt-1">
                  {todayArtwork.year}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-800" />

              {/* Specifications */}
              <div className="space-y-4">
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 text-sm sm:text-base">
                  <span className="text-zinc-500 uppercase tracking-wider text-xs sm:text-sm">Medium</span>
                  <span className="text-zinc-200">{todayArtwork.medium}</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 text-sm sm:text-base">
                  <span className="text-zinc-500 uppercase tracking-wider text-xs sm:text-sm">Dimensions</span>
                  <span className="text-zinc-200">{todayArtwork.dimensions}</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 text-sm sm:text-base">
                  <span className="text-zinc-500 uppercase tracking-wider text-xs sm:text-sm">Edition</span>
                  <span className="text-zinc-200">{todayArtwork.edition}</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 text-sm sm:text-base">
                  <span className="text-zinc-500 uppercase tracking-wider text-xs sm:text-sm">Price</span>
                  <span className="text-zinc-200">{todayArtwork.price}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-800" />

              {/* Description */}
              <div>
                <h3 className="text-zinc-400 uppercase tracking-wider mb-4 text-xs sm:text-sm">Curator's Note</h3>
                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                  {todayArtwork.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  variant={liked ? "default" : "outline"} 
                  className={`gap-2 flex-1 sm:flex-none ${
                    liked 
                      ? "bg-white !text-black hover:bg-zinc-200 hover:!text-black [&_svg]:!text-black" 
                      : "border-zinc-700 !text-white hover:bg-zinc-900 hover:!text-white"
                  }`}
                  onClick={() => setLiked(!liked)}
                >
                  <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                  {liked ? "Saved" : "Save"}
                </Button>
                <Button variant="outline" size="icon" className="border-zinc-700 !text-white hover:bg-zinc-900 hover:!text-white w-full sm:w-auto">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curator Section */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760321120036-9492e0df1170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjb2xsZWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMwMTgxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Curator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="text-white text-lg sm:text-xl">Sophia Laurent</h3>
                  <span className="text-zinc-500 text-sm">·</span>
                  <p className="text-zinc-400 text-sm sm:text-base">Chief Curator</p>
                </div>
                <p className="text-zinc-500 mb-4 sm:mb-6 text-sm">Contemporary Art Specialist</p>
                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base max-w-2xl">
                  15년간 세계 주요 갤러리와 미술관에서 현대 미술 큐레이팅을 담당했습니다. 
                  매일 엄선된 작품을 통해 예술적 가치와 시장 통찰력을 함께 제공합니다. 
                  각 작품의 역사적 맥락과 투자 가치를 전문적으로 분석하여 소개합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Recommendations */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4 sm:gap-0">
          <h3 className="text-white text-xl sm:text-2xl">Previous Selections</h3>
          <Button variant="ghost" className="gap-2 text-zinc-400 hover:text-white hover:bg-zinc-900 self-start sm:self-auto">
            View Archive
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {pastRecommendations.map((artwork) => (
            <Card key={artwork.id} className="group cursor-pointer border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden mb-4 sm:mb-5">
                  <ImageWithFallback
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
                <div className="space-y-2">
                  <p className="text-white group-hover:text-zinc-300 transition-colors text-sm sm:text-base">
                    {artwork.title}
                  </p>
                  <p className="text-zinc-400 text-sm">{artwork.artist}</p>
                  <p className="text-zinc-600 uppercase tracking-wider text-xs">{artwork.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-zinc-900">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-3 sm:mb-4 text-xl sm:text-2xl">Stay Informed</h3>
            <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">
              매일 아침 엄선된 작품과 전문적인 아트 인사이트를 받아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-zinc-700 h-11"
              />
              <Button className="bg-white !text-black hover:bg-zinc-200 hover:!text-black h-11 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-white mb-3 sm:mb-4">ATELIER</h4>
              <p className="text-zinc-500 text-sm sm:text-base">
                Curated contemporary art for discerning collectors
              </p>
            </div>
            <div>
              <h5 className="text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">Explore</h5>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Today's Selection</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Archive</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Artists</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">Collect</h5>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Acquisition</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Appraisal</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">Connect</h5>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-xs sm:text-sm text-zinc-600">
            <p>© 2025 ATELIER. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}