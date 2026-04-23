"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function AssessmentCTA() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section className="py-16 sm:py-20 md:py-[100px] lg:py-[120px] bg-purple-deep overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div
          ref={ref}
          className={cn(
            "max-w-[800px] mx-auto text-center",
            "opacity-0 translate-y-10 transition-all duration-1000 ease-out",
            isInView && "opacity-100 translate-y-0"
          )}
        >
          <h2 className="font-serif text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] mb-4 text-white leading-[1.1]">
            Not Sure Where To Start?
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/80 mb-4">
            Take the free Self-Trust Assessment and discover exactly what&apos;s been holding you back.
          </p>
          <p className="text-gold text-[14px] sm:text-[15px] font-medium mb-10">
            8 honest questions. 3 minutes. Life-changing clarity.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center gap-3 bg-gold text-black py-4 px-8 sm:py-5 sm:px-12 text-[13px] sm:text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-500 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)]"
          >
            Take The Free Assessment
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
