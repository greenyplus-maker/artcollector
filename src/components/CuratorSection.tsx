import type { CuratorProfile } from "../types/curator";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CuratorSectionProps {
  profile: CuratorProfile;
}

export function CuratorSection({ profile }: CuratorSectionProps) {
  return (
    <section className="border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0">
              <ImageWithFallback src={profile.imageUrl} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <h3 className="text-white text-lg sm:text-xl">{profile.name}</h3>
                <span className="text-zinc-500 text-sm">·</span>
                <p className="text-zinc-400 text-sm sm:text-base">{profile.title}</p>
              </div>
              <p className="text-zinc-500 mb-4 sm:mb-6 text-sm">{profile.subtitle}</p>
              <div className="text-zinc-300 leading-relaxed text-sm sm:text-base max-w-2xl space-y-2">
                {profile.bio.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


