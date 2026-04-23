"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function OriginStory() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2)
  const { ref: contentRef, isInView: contentInView } = useInView(0.2)
  const { ref: imageRef, isInView: imageInView } = useInView(0.2)

  return (
    <section id="origin" className="py-16 sm:py-20 md:py-[120px] lg:py-[160px] bg-cream text-black overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={cn(
              "relative order-2 lg:order-1",
              "opacity-0 -translate-x-8 transition-all duration-1000 ease-out",
              imageInView && "opacity-100 translate-x-0"
            )}
          >
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image00005%20%281%29.JPG-ThxjIyHPvTNxJqw302bZbWVXTOZUt3.jpeg"
                alt="Rhavynn Drummer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2
              ref={titleRef}
              className={cn(
                "font-serif text-[26px] sm:text-[32px] md:text-[42px] lg:text-[48px] xl:text-[56px] mb-8 sm:mb-10 text-purple-brand font-semibold leading-[1.1]",
                "opacity-0 translate-y-8 transition-all duration-1000 ease-out",
                titleInView && "opacity-100 translate-y-0"
              )}
            >
              I Know What It Costs To Hold Back. Because I Did It Too.
            </h2>

            <div
              ref={contentRef}
              className={cn(
                "space-y-5 sm:space-y-6",
                "opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200",
                contentInView && "opacity-100 translate-y-0"
              )}
            >
              <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-700 leading-relaxed">
                I spent 19 years inside the rooms where creative dreams get made or crushed. As a casting director I watched brilliantly talented people get passed over — not because they weren&apos;t good enough, but because they didn&apos;t trust themselves enough to fully show up.
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-700 leading-relaxed">
                I watched it happen to others. And quietly — I was doing it to myself.
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-700 leading-relaxed">
                It took nearly two decades to finally understand something that changed everything:
              </p>
              <p className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-purple-brand font-serif font-semibold italic leading-relaxed">
                I am so much bigger than a title. And God is my source — not any institution, any industry, or any person.
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-700 leading-relaxed">
                That moment of radical self-trust became the foundation of everything I build now.
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-gray-700 leading-relaxed">
                I&apos;m not just a casting director turned coach. I&apos;m someone who has sat on both sides of the table — and I know exactly what separates the people who step up from the people who shrink back.
              </p>
              <p className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-purple-brand font-semibold leading-relaxed">
                It&apos;s never talent. It&apos;s always self-trust.
              </p>

              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-3 bg-gold text-black py-4 px-6 sm:py-[18px] sm:px-8 md:py-5 md:px-12 text-[13px] sm:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-all duration-500 hover:bg-purple-brand hover:text-white hover:-translate-y-0.5 mt-4 sm:mt-6"
              >
                Take The Assessment and Find Out Where You Are
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
