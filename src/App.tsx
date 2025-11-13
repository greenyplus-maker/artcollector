import { useState } from "react";

import { FeaturedArtwork } from "./components/FeaturedArtwork";
import { CuratorSection } from "./components/CuratorSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { PastRecommendations } from "./components/PastRecommendations";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { curatorProfile } from "./data/curator";
import { pastRecommendations, todayArtwork } from "./data/artworks";

export default function App() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <FeaturedArtwork artwork={todayArtwork} liked={liked} onToggleLike={() => setLiked((prev) => !prev)} />
      <CuratorSection profile={curatorProfile} />
      <PastRecommendations artworks={pastRecommendations} />
      <NewsletterSection />
      <SiteFooter />
    </div>
  );
}