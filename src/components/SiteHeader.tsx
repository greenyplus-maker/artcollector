import { Calendar } from "lucide-react";

import { Button } from "./ui/button";

export function SiteHeader() {
  return (
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
  );
}


