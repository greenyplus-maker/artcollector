export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white mb-3 sm:mb-4">ATELIER</h4>
            <p className="text-zinc-500 text-sm sm:text-base">Curated contemporary art for discerning collectors</p>
          </div>
          <div>
            <h5 className="text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">Explore</h5>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Today's Selection
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Archive
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Artists
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">Collect</h5>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Acquisition
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Appraisal
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-zinc-400 mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">Connect</h5>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-xs sm:text-sm text-zinc-600">
          <p>© 2025 ATELIER. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


