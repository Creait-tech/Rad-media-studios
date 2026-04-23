"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const credentials = [
  "19 Years in Film & Television",
  "Heller Award — Best Regional Casting Director 2019",
  "ABFF & Bronzelens Winner",
  "Founder — RAD Media Studios",
]

export function Stats() {
  const { ref, isInView } = useInView(0.3)

  return (
    <section ref={ref} className="bg-purple-brand py-6 sm:py-8 md:py-10 lg:py-12 border-t border-b border-white/10">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className={cn(
                "text-center opacity-0 translate-y-4 transition-all duration-700 ease-out",
                isInView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.1em] sm:tracking-[0.15em] uppercase text-white/80 font-medium whitespace-nowrap">
                {credential}
              </span>
              {index < credentials.length - 1 && (
                <span className="hidden lg:inline-block text-gold/40 ml-8 lg:ml-12">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
