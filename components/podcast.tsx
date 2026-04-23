"use client"

import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function Podcast() {
  const { ref: videoRef, isInView: videoInView } = useInView(0.2)
  const { ref: textRef, isInView: textInView } = useInView(0.2)

  return (
    <section
      id="podcast"
      className="py-16 sm:py-20 md:py-[120px] lg:py-[160px] relative overflow-hidden bg-black"
    >
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-[60px] lg:gap-[80px] xl:gap-[100px]">
          <div
            ref={videoRef}
            className={cn(
              "flex-1 relative aspect-video bg-black flex items-center justify-center overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] sm:shadow-[0_30px_60px_rgba(0,0,0,0.5)] lg:shadow-[0_40px_80px_rgba(0,0,0,0.6)] w-full",
              "opacity-0 -translate-x-8 transition-all duration-1000 ease-out",
              videoInView && "opacity-100 translate-x-0"
            )}
          >
            <iframe
              src="https://www.youtube.com/embed/arPyZlMmD3c?si=50ZAOLoLJ1ndZ1Dr"
              title="YouTube: Act UP! Podcast with Rhavynn Drummer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </div>
          <div
            ref={textRef}
            className={cn(
              "w-full lg:flex-[0.8]",
              "opacity-0 translate-x-8 transition-all duration-1000 ease-out delay-200",
              textInView && "opacity-100 translate-x-0"
            )}
          >
            <h2 className="font-serif text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] mb-4 sm:mb-5 leading-none text-white">
              The Act Up Podcast
            </h2>
            <p className="text-gold text-[14px] sm:text-[15px] md:text-[16px] mb-6 font-medium">
              Real talk about creative power, self-trust, and building a life bigger than your title.
            </p>
            <p className="mb-8 sm:mb-10 text-gray-400 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-[500px]">
              Every episode is designed to give you permission to go further than you thought possible. No fluff. No shortcuts. Just honest talk from people who are doing the work.
            </p>
            <a
              href="https://www.youtube.com/@RADMediaStudios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-black py-4 px-6 sm:py-[18px] sm:px-8 md:py-5 md:px-12 text-[13px] sm:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-all duration-500 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(212,175,55,0.2)] w-full sm:w-auto"
            >
              Listen Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
