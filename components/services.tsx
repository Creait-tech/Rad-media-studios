"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, User, Users, Video, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const actorServices = [
  {
    icon: User,
    title: "The Insider Session",
    subtitle: "One-on-One",
    price: "$225 / 45 minutes",
    description:
      "Industry insight meets honest coaching. In this virtual session we work on your audition material, your headshots, your strategy, and the mindset keeping you from booking.",
    link: "https://link.getcreait.com/widget/bookings/1-on-1-coaching-with-rhavynn-d",
    linkText: "Book Your Session",
    image: "/images/insider-session.jpg",
  },
  {
    icon: Users,
    title: 'The "Audacity" Intensive',
    subtitle: "Live In Person Workshop",
    price: "$299",
    description:
      "A full day immersive experience for actors and creatives ready to stop playing small. Technique, mindset, and industry truth — all in one room.",
    link: "https://link.getcreait.com/payment-link/69b8e384942c7dd36efd0b21",
    linkText: "Secure Your Spot",
    note: "Audition Required",
  },
  {
    icon: Video,
    title: "Virtual Audition Workshop",
    subtitle: "",
    price: "$200 / 3 hours",
    description:
      "Can't get to Atlanta? This virtual experience brings the industry insight directly to you. Live coaching, real feedback, real breakthroughs.",
    link: "https://link.getcreait.com/payment-link/69ea35ce7dd3512d92079003",
    linkText: "Join The Next Session",
  },
]

const highAchieverService = {
  icon: Sparkles,
  title: "The Freedom Session",
  subtitle: "One-on-One with Rhavynn",
  price: "$349 / 45 minutes",
  description:
    "You don't need audition help. You need radical honesty about what's keeping you from your biggest life. This is for the nurse practitioner, the entrepreneur, the mother who stopped dreaming. Walk in holding back. Walk out knowing exactly what's next.",
  link: "https://link.getcreait.com/payment-link/69b8e369f35c540e14832e1a",
  linkText: "Book Your Freedom Session",
}

const unlockService = {
  title: "The Unlock",
  subtitle: "Virtual Self-Trust Intensive",
  price: "$97",
  link: "https://link.getcreait.com/payment-link/69b8e343f35c540e14832e19",
}

export function Services() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2)
  const { ref: dividerRef, isInView: dividerInView } = useInView(0.2)
  const { ref: unlockRef, isInView: unlockInView } = useInView(0.2)

  return (
    <section id="services" className="py-16 sm:py-20 md:py-[120px] lg:py-[160px] bg-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20",
            "opacity-0 translate-y-8 transition-all duration-1000 ease-out",
            headerInView && "opacity-100 translate-y-0"
          )}
        >
          <h2 className="font-serif text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-none text-purple-brand mb-4">
            Ready To Stop Holding Back?
          </h2>
          <p className="text-gray-700 text-[15px] sm:text-[17px] md:text-[19px] max-w-[700px] mx-auto">
            Whether you&apos;re an actor ready to book or a high achiever ready to breakthrough — the work starts in the same place. You.
          </p>
        </div>

        {/* Actors Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h3 className="text-center text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-gold font-semibold mb-8 sm:mb-10">
            For Actors & Creatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {actorServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} variant="light" />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          ref={dividerRef}
          className={cn(
            "relative my-12 sm:my-16 md:my-20",
            "opacity-0 scale-x-0 transition-all duration-1000 ease-out",
            dividerInView && "opacity-100 scale-x-100"
          )}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-purple-brand/20"></div>
          </div>
        </div>

        {/* High Achievers Section */}
        <div className="bg-purple-brand p-8 sm:p-12 md:p-16 lg:p-20">
          <h3 className="text-center text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-gold font-semibold mb-8 sm:mb-10">
            For High Achievers & Creatives Beyond The Stage
          </h3>
          <HighAchieverCard service={highAchieverService} />
        </div>

        {/* The Unlock CTA */}
        <div
          ref={unlockRef}
          className={cn(
            "mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-purple-deep to-purple-brand p-8 sm:p-12 text-center",
            "opacity-0 translate-y-8 transition-all duration-1000 ease-out",
            unlockInView && "opacity-100 translate-y-0"
          )}
        >
          <p className="text-gold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase font-semibold mb-2">
            Not Ready for 1:1 Yet?
          </p>
          <h3 className="font-serif text-[24px] sm:text-[32px] md:text-[36px] text-white mb-2">
            {unlockService.title}
          </h3>
          <p className="text-white/70 text-[14px] sm:text-[15px] mb-1">
            {unlockService.subtitle}
          </p>
          <p className="text-gold text-[18px] sm:text-[20px] font-semibold mb-6">
            {unlockService.price}
          </p>
          <Link
            href={unlockService.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold text-black py-4 px-8 sm:py-5 sm:px-12 text-[13px] sm:text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-500 hover:bg-white"
          >
            Get The Unlock
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  variant,
}: {
  service: (typeof actorServices)[0]
  index: number
  variant: "light" | "dark"
}) {
  const { ref, isInView } = useInView(0.2)
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={cn(
        "relative border flex flex-col h-full overflow-hidden transition-all duration-500",
        variant === "light"
          ? "border-gray-200 bg-gray-50 hover:border-gold hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2"
          : "border-white/10 bg-white/5 hover:border-gold",
        "opacity-0 translate-y-10 transition-all duration-700 ease-out",
        isInView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {service.image && (
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-8 sm:p-10 flex flex-col flex-grow">
        <Icon
          className={cn(
            "w-9 h-9 sm:w-10 sm:h-10 mb-5 sm:mb-6",
            variant === "light" ? "text-purple-brand" : "text-gold"
          )}
          strokeWidth={1.5}
        />
        <h4 className={cn(
          "font-serif text-[20px] sm:text-[24px] md:text-[26px] mb-1 leading-tight",
          variant === "light" ? "text-purple-brand" : "text-white"
        )}>
          {service.title}
        </h4>
        {service.subtitle && (
          <p className={cn(
            "text-[12px] sm:text-[13px] uppercase tracking-[0.1em] mb-2",
            variant === "light" ? "text-gray-500" : "text-white/60"
          )}>
            {service.subtitle}
          </p>
        )}
        <p className="text-gold text-[14px] sm:text-[15px] font-semibold mb-4">
          {service.price}
        </p>
        <p className={cn(
          "mb-6 flex-grow text-[14px] sm:text-[15px] leading-relaxed",
          variant === "light" ? "text-gray-600" : "text-white/70"
        )}>
          {service.description}
        </p>
        <Link
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-purple-brand text-white py-3 px-6 sm:py-4 sm:px-8 text-[12px] sm:text-[13px] font-semibold tracking-[0.08em] uppercase transition-all duration-500 hover:bg-gold hover:text-black w-full"
        >
          {service.linkText}
          <ArrowRight className="w-4 h-4" />
        </Link>
        {service.note && (
          <p className="text-center text-[11px] text-gray-500 mt-3 italic">
            {service.note}
          </p>
        )}
      </div>
    </div>
  )
}

function HighAchieverCard({ service }: { service: typeof highAchieverService }) {
  const { ref, isInView } = useInView(0.2)
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-[800px] mx-auto text-center",
        "opacity-0 translate-y-10 transition-all duration-700 ease-out",
        isInView && "opacity-100 translate-y-0"
      )}
    >
      <Icon className="w-12 h-12 sm:w-14 sm:h-14 mb-6 text-gold mx-auto" strokeWidth={1.5} />
      <h4 className="font-serif text-[24px] sm:text-[32px] md:text-[40px] mb-2 text-white">
        {service.title}
      </h4>
      <p className="text-white/60 text-[13px] sm:text-[14px] uppercase tracking-[0.1em] mb-2">
        {service.subtitle}
      </p>
      <p className="text-gold text-[16px] sm:text-[18px] font-semibold mb-6">
        {service.price}
      </p>
      <p className="text-white/80 text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed mb-8 max-w-[650px] mx-auto">
        {service.description}
      </p>
      <Link
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 bg-gold text-black py-4 px-8 sm:py-5 sm:px-12 text-[13px] sm:text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-500 hover:bg-white"
      >
        {service.linkText}
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </Link>
    </div>
  )
}
