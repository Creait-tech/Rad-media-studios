"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function SplitSection() {
  const { ref: imageRef, isInView: imageInView } = useInView(0.2)
  const { ref: contentRef, isInView: contentInView } = useInView(0.2)

  return (
    <section id="who" className="flex flex-col lg:flex-row lg:min-h-screen">
      <div 
        ref={imageRef}
        className={cn(
          "bg-purple-deep relative overflow-hidden h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto lg:flex-1",
          "opacity-0 scale-105",
          imageInView && "opacity-100 scale-100 transition-all duration-1000 ease-out"
        )}
      >
        <Image
          src="https://assets.cdn.filesafe.space/gjPoIOj7eeVxrvAnenGh/media/697ea8e366e7ca4e0b877791.jpg"
          alt="Rhavynn at work in casting"
          fill
          className="object-cover grayscale contrast-[1.1] brightness-[0.8] transition-all duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div 
        ref={contentRef}
        className={cn(
          "bg-cream text-black py-14 px-5 sm:py-16 sm:px-8 md:py-20 md:px-12 lg:py-[120px] lg:px-[80px] xl:px-[100px] flex flex-col justify-center lg:flex-[1.2]",
          "opacity-0 translate-x-8",
          contentInView && "opacity-100 translate-x-0 transition-all duration-1000 ease-out delay-200"
        )}
      >
        <h2 className="font-serif text-[26px] sm:text-[32px] md:text-[42px] lg:text-[48px] xl:text-[56px] leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 text-purple-brand font-semibold text-balance">
          I Create Bold Stories. And I Help Others Find The Courage To Do The Same.
        </h2>
        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-gray-700 mb-5 sm:mb-6 max-w-[600px] leading-relaxed">
          I spent 19 years inside Hollywood&apos;s casting rooms watching brilliant people hold back. I&apos;ve directed. I&apos;ve produced. I&apos;ve built a studio from scratch while everyone watched.
        </p>
        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-gray-700 mb-5 sm:mb-6 max-w-[600px] leading-relaxed">
          Now I do two things exceptionally well:
        </p>
        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-gray-700 mb-2 max-w-[600px] leading-relaxed font-medium">
          I make films and television that move people.
        </p>
        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-gray-700 mb-8 max-w-[600px] leading-relaxed font-medium">
          And I help high achievers stop holding back so they can do the same in their own lives.
        </p>
        <Link
          href="/assessment"
          className="inline-flex items-center justify-center gap-3 bg-gold text-black py-4 px-6 sm:py-[18px] sm:px-8 md:py-5 md:px-12 text-[13px] sm:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-all duration-500 hover:bg-purple-brand hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(45,27,78,0.3)] w-full sm:w-auto"
        >
          Find Out What&apos;s Holding You Back
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </section>
  )
}
