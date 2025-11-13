import { ChevronRight } from "lucide-react";

import type { Artwork } from "../types/artwork";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PastRecommendationsProps {
  artworks: Artwork[];
}

export function PastRecommendations({ artworks }: PastRecommendationsProps) {
  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4 sm:gap-0">
        <h3 className="text-white text-xl sm:text-2xl">Previous Selections</h3>
        <Button variant="ghost" className="gap-2 text-zinc-400 hover:text-white hover:bg-zinc-900 self-start sm:self-auto">
          View Archive
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {artworks.map((artwork) => (
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
                <p className="text-white group-hover:text-zinc-300 transition-colors text-sm sm:text-base">{artwork.title}</p>
                <p className="text-zinc-400 text-sm">{artwork.artist}</p>
                <p className="text-zinc-600 uppercase tracking-wider text-xs">{artwork.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


