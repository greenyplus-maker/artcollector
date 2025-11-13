import { Heart, Share2 } from "lucide-react";

import type { Artwork } from "../types/artwork";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FeaturedArtworkProps {
  artwork: Artwork;
  liked: boolean;
  onToggleLike: () => void;
}

export function FeaturedArtwork({ artwork, liked, onToggleLike }: FeaturedArtworkProps) {
  const specs: Array<{ label: string; value?: string }> = [
    { label: "Medium", value: artwork.medium },
    { label: "Dimensions", value: artwork.dimensions },
    { label: "Edition", value: artwork.edition },
    { label: "Price", value: artwork.price },
  ].filter((spec) => Boolean(spec.value));

  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-24">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8 sm:mb-12">
        <Badge variant="secondary" className="px-4 sm:px-6 py-1.5 sm:py-2 bg-zinc-900 text-zinc-100 border border-zinc-800">
          Featured Today
        </Badge>
        <span className="text-zinc-500 uppercase tracking-wider text-sm">{artwork.date}</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start">
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] bg-zinc-900 overflow-hidden">
            <ImageWithFallback src={artwork.imageUrl} alt={artwork.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-5 xl:col-span-4 lg:pt-4">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-white mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">{artwork.title}</h2>
              <p className="text-zinc-300 text-lg sm:text-xl">{artwork.artist}</p>
              <p className="text-zinc-500 mt-1">{artwork.year}</p>
            </div>

            <div className="h-px bg-zinc-800" />

            {specs.length > 0 && (
              <div className="space-y-4">
                {specs.map(({ label, value }) => (
                  <div key={label} className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 text-sm sm:text-base">
                    <span className="text-zinc-500 uppercase tracking-wider text-xs sm:text-sm">{label}</span>
                    <span className="text-zinc-200">{value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="h-px bg-zinc-800" />

            <div>
              <h3 className="text-zinc-400 uppercase tracking-wider mb-4 text-xs sm:text-sm">Curator's Note</h3>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{artwork.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                variant={liked ? "default" : "outline"}
                className={`gap-2 flex-1 sm:flex-none ${
                  liked
                    ? "bg-white !text-black hover:bg-zinc-200 hover:!text-black [&_svg]:!text-black"
                    : "border-zinc-700 !text-white hover:bg-zinc-900 hover:!text-white"
                }`}
                onClick={onToggleLike}
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
  );
}


