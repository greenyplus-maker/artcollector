import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterSection() {
  return (
    <section className="border-t border-zinc-900">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-white mb-3 sm:mb-4 text-xl sm:text-2xl">Stay Informed</h3>
          <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">매일 아침 엄선된 작품과 전문적인 아트 인사이트를 받아보세요</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-zinc-700 h-11"
            />
            <Button className="bg-white !text-black hover:bg-zinc-200 hover:!text-black h-11 px-8">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
}


