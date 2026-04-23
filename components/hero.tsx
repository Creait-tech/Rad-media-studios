"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function Hero() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section className="min-h-svh relative flex items-center overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-0 lg:pb-0">
      {/* Background gradient - vertical on mobile, horizontal on desktop */}
      <div 
        className="absolute inset-0 z-[-1] hidden md:block"
        style={{
          background: "linear-gradient(90deg, #000000 0%, #2A1A2A 100%)",
        }}
      />
      <div 
        className="absolute inset-0 z-[-1] md:hidden"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #2A1A2A 100%)",
        }}
      />
      
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div 
          ref={ref}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16"
        >
          {/* Text Content - Left Side */}
          <div 
            className={cn(
              "max-w-[960px] lg:max-w-[55%] z-10",
              "opacity-0",
              isInView && "opacity-100"
            )}
          >
            <h1 
              className={cn(
                "font-serif text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[88px] leading-[1.05] sm:leading-[1] mb-5 sm:mb-6 tracking-[-0.02em] sm:tracking-[-0.03em] font-semibold text-white",
                "opacity-0 translate-y-5",
                isInView && "animate-fade-in-up"
              )}
            >
              <span className="text-balance">Stop Holding Back.</span>
              <span className="block font-normal italic text-gold">Start Trusting Yourself.</span>
            </h1>
            <p 
              className={cn(
                "text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] max-w-[580px] lg:max-w-[540px] text-gray-400 mb-4 sm:mb-5 font-light leading-relaxed",
                "opacity-0 translate-y-5",
                isInView && "animate-fade-in-up animation-delay-100"
              )}
            >
              Take the free assessment and discover what&apos;s really in your way.
            </p>
            
            {/* Name and Title under photo description */}
            <p 
              className={cn(
                "text-[13px] sm:text-[14px] tracking-[0.15em] uppercase text-gold mb-8 sm:mb-10 font-medium",
                "opacity-0 translate-y-5",
                isInView && "animate-fade-in-up animation-delay-200"
              )}
            >
              Filmmaker &bull; Coach &bull; Studio Founder
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row gap-4 sm:gap-5",
              "opacity-0 translate-y-5",
              isInView && "animate-fade-in-up animation-delay-300"
            )}>
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-3 bg-gold text-black py-4 px-6 sm:py-[18px] sm:px-8 md:py-5 md:px-12 text-[13px] sm:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-all duration-500 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(212,175,55,0.2)] w-full sm:w-auto"
              >
                Take The Free Assessment
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white py-4 px-6 sm:py-[18px] sm:px-8 md:py-5 md:px-12 text-[13px] sm:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-all duration-500 hover:border-white hover:bg-white hover:text-black w-full sm:w-auto"
              >
                Work With Me
              </Link>
            </div>
          </div>

          {/* Image Container - Right Side */}
          <div 
            className={cn(
              "w-full lg:w-[45%] flex justify-center lg:justify-end mt-10 lg:mt-0",
              "opacity-0 translate-y-5",
              isInView && "animate-fade-in-up animation-delay-400"
            )}
          >
            <div 
              className="relative w-[90vw] sm:w-[400px] md:w-[450px] lg:w-full max-w-[500px] h-auto rounded-[40px] overflow-hidden"
              style={{ backgroundColor: "#A0A0A0" }}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rhavynn-03txVWTPHUIuP022tepjHaqaipOSow.jpg"
                  alt="Rhavynn Drummer - Filmmaker, Coach, Studio Founder"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 400px, (max-width: 1024px) 450px, 500px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
