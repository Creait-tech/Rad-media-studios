"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function FinalCTA() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section className="py-20 sm:py-24 md:py-[140px] lg:py-[180px] bg-cream text-black overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div
          ref={ref}
          className={cn(
            "max-w-[800px] mx-auto text-center",
            "opacity-0 translate-y-10 transition-all duration-1000 ease-out",
            isInView && "opacity-100 translate-y-0"
          )}
        >
          <h2 className="font-serif text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] mb-4 leading-[1.05]" style={{ color: 'rgb(26, 16, 40)' }}>
            You Were Made For More.
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-700 mb-10 sm:mb-12">
            The only question is whether you&apos;re ready to trust that.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center gap-3 bg-gold text-black py-5 px-10 sm:py-6 sm:px-14 text-[14px] sm:text-[15px] font-semibold tracking-[0.1em] uppercase transition-all duration-500 hover:bg-purple-brand hover:text-white hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(45,27,78,0.3)]"
          >
            Take The Assessment — It&apos;s Free
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <p className="text-gray-500 text-[13px] sm:text-[14px] mt-5">
            Free. 3 minutes. Life-changing.
          </p>
        </div>
      </div>
    </section>
  )
}
