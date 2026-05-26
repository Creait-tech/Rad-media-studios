"use client"

import Link from "next/link"
import { ArrowRight, Check, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const actorServices = [
  {
    tag: "ONE-ON-ONE · VIRTUAL",
    title: "The Insider Session",
    price: "$225",
    priceSuffix: "/ 45 min",
    description: "Honest, focused coaching on your audition material, headshots, strategy, and mindset.",
    checklist: [
      "Audition material review",
      "Headshot & brand critique",
      "Custom booking strategy",
      "Mindset coaching"
    ],
    link: "https://link.getcreait.com/widget/bookings/1-on-1-coaching-with-rhavynn-d",
    linkText: "Book Your Session",
    variant: "light" as const,
  },
  {
    tag: "VIRTUAL · 3 HOURS LIVE",
    title: "Virtual Audition Workshop",
    price: "$200",
    priceSuffix: "/ 3 hrs",
    description: "Can't make it to Atlanta? Live coaching and real feedback brought directly to you.",
    checklist: [
      "Small group live coaching",
      "Real-time feedback",
      "On-camera presence",
      "Self-tape strategy"
    ],
    link: "https://link.getcreait.com/payment-link/69ea35ce7dd3512d92079003",
    linkText: "Join The Next Session",
    variant: "outline" as const,
  },
]

export function Services() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2)
  const { ref: freedomRef, isInView: freedomInView } = useInView(0.2)

  return (
    <>
      {/* Section 1 - For Actors & Creatives */}
      <section 
        id="services" 
        className="py-20 md:py-[100px] overflow-hidden"
        style={{ backgroundColor: '#F8F5EF' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8">
          {/* Header */}
          <div
            ref={headerRef}
            className={cn(
              "text-center mb-12 md:mb-16",
              "opacity-0 translate-y-8 transition-all duration-1000 ease-out",
              headerInView && "opacity-100 translate-y-0"
            )}
          >
            {/* Eyebrow with lines */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-6 h-px" style={{ backgroundColor: '#B8922A' }} />
              <span 
                className="text-[10px] tracking-[0.22em] uppercase font-medium"
                style={{ color: '#B8922A' }}
              >
                For Actors & Creatives
              </span>
              <div className="w-6 h-px" style={{ backgroundColor: '#B8922A' }} />
            </div>
            
            {/* Title */}
            <h2 
              className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] leading-none mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: 'rgb(26, 16, 40)' }}
            >
              Ready to Stop{' '}
              <em style={{ color: '#B8922A', fontStyle: 'italic' }}>Holding Back?</em>
            </h2>
            
            {/* Subtitle */}
            <p 
              className="text-[0.95rem] max-w-[380px] mx-auto"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, color: '#402e58' }}
            >
              Choose the experience built for where you are right now.
            </p>
          </div>

          {/* Centered 2-Column Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            {actorServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - The Freedom Session */}
      <section 
        id="waitlist"
        className="relative py-20 md:py-[100px] overflow-hidden"
        style={{ backgroundColor: 'rgb(26, 16, 40)' }}
      >
        {/* Radial gradient glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ 
            background: 'radial-gradient(ellipse at center top, rgba(184,146,42,0.12) 0%, transparent 70%)'
          }}
        />
        
        {/* Decorative circle */}
        <div 
          className="absolute -bottom-48 -right-48 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ border: '1px solid rgba(184,146,42,0.08)' }}
        />

        <div 
          ref={freedomRef}
          className="relative max-w-[760px] mx-auto px-5 sm:px-6 text-center"
        >
          {/* Eyebrow */}
          <div 
            className={cn(
              "flex items-center justify-center gap-3 mb-6",
              "opacity-0 translate-y-6 transition-all duration-700 ease-out",
              freedomInView && "opacity-100 translate-y-0"
            )}
          >
            <div className="w-4 h-px" style={{ backgroundColor: 'rgba(212,174,90,0.7)' }} />
            <span 
              className="text-[10px] tracking-[0.22em] uppercase"
              style={{ color: 'rgba(212,174,90,0.7)' }}
            >
              For High Achievers & Creatives Beyond The Stage
            </span>
            <div className="w-4 h-px" style={{ backgroundColor: 'rgba(212,174,90,0.7)' }} />
          </div>

          {/* Sparkle Icon */}
          <div 
            className={cn(
              "flex justify-center mb-6",
              "opacity-0 translate-y-6 transition-all duration-700 ease-out delay-[80ms]",
              freedomInView && "opacity-100 translate-y-0"
            )}
          >
            <div className="w-11 h-11 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#D4AE5A" strokeWidth="1.2">
                <circle cx="16" cy="16" r="2" />
                <line x1="16" y1="4" x2="16" y2="10" />
                <line x1="16" y1="22" x2="16" y2="28" />
                <line x1="4" y1="16" x2="10" y2="16" />
                <line x1="22" y1="16" x2="28" y2="16" />
                <line x1="7.5" y1="7.5" x2="11.5" y2="11.5" />
                <line x1="20.5" y1="20.5" x2="24.5" y2="24.5" />
                <line x1="24.5" y1="7.5" x2="20.5" y2="11.5" />
                <line x1="11.5" y1="20.5" x2="7.5" y2="24.5" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 
            className={cn(
              "text-[2.8rem] sm:text-[3.5rem] md:text-[4.8rem] leading-[1.08] mb-4",
              "opacity-0 translate-y-6 transition-all duration-700 ease-out delay-[160ms]",
              freedomInView && "opacity-100 translate-y-0"
            )}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            <span style={{ color: '#ffffff' }}>The </span>
            <em style={{ color: '#D4AE5A', fontStyle: 'italic' }}>Freedom</em>
            <span style={{ color: '#ffffff' }}> Session</span>
          </h2>

          {/* Sub-meta */}
          <p 
            className={cn(
              "text-[10px] tracking-[0.2em] uppercase mb-3",
              "opacity-0 translate-y-6 transition-all duration-700 ease-out delay-[240ms]",
              freedomInView && "opacity-100 translate-y-0"
            )}
            style={{ color: 'rgba(184,146,42,0.5)' }}
          >
            One-on-One with Rhavynn
          </p>

          {/* Price */}
          <p 
            className={cn(
              "mb-5",
              "opacity-0 translate-y-6 transition-all duration-700 ease-out delay-[320ms]",
              freedomInView && "opacity-100 translate-y-0"
            )}
          >
            <span 
              className="text-[1.3rem]"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, color: '#D4AE5A' }}
            >
              $349
            </span>
            <span 
              className="text-[0.8rem] ml-1"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, color: 'rgba(255,255,255,0.35)' }}
            >
              / 45 min
            </span>
          </p>

          {/* Decorative rule */}
          <div 
            className={cn(
              "w-10 h-px mx-auto mb-6",
              "opacity-0 scale-x-0 transition-all duration-700 ease-out delay-[400ms]",
              freedomInView && "opacity-100 scale-x-100"
            )}
            style={{ backgroundColor: 'rgba(184,146,42,0.3)' }}
          />

          {/* Description */}
          <p 
            className={cn(
              "text-[1.05rem] leading-[1.78] max-w-[560px] mx-auto mb-8",
              "opacity-0 translate-y-6 transition-all duration-700 ease-out delay-[480ms]",
              freedomInView && "opacity-100 translate-y-0"
            )}
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}
          >
            You don&apos;t need audition help. You need{' '}
            <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>radical honesty about what&apos;s keeping you from your biggest life.</strong>{' '}
            For the nurse practitioner, the entrepreneur, the mother who stopped dreaming.{' '}
            <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>Walk in holding back. Walk out knowing exactly what&apos;s next.</strong>
          </p>

          {/* CTA Button */}
          <div 
            className={cn(
              "opacity-0 translate-y-6 transition-all duration-700 ease-out delay-[560ms]",
              freedomInView && "opacity-100 translate-y-0"
            )}
          >
            <Link
              href="https://link.getcreait.com/payment-link/69b8e369f35c540e14832e1a"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 py-[17px] px-10 rounded-xl text-[0.82rem] tracking-[0.1em] uppercase transition-all duration-300 hover:scale-[1.03]"
              style={{ 
                fontFamily: "'Outfit', sans-serif", 
                fontWeight: 500, 
                backgroundColor: '#B8922A', 
                color: 'rgb(26, 16, 40)',
                boxShadow: '0 12px 36px rgba(184,146,42,0.28)'
              }}
            >
              Book Your Freedom Session
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Social Proof */}
          <div 
            className={cn(
              "flex items-center justify-center gap-2 mt-8",
              "opacity-0 translate-y-6 transition-all duration-700 ease-out delay-[640ms]",
              freedomInView && "opacity-100 translate-y-0"
            )}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-[13px] h-[13px] fill-[#D4AE5A] stroke-[#D4AE5A]" />
              ))}
            </div>
            <span 
              className="text-[0.78rem]"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              &quot;This session changed everything for me.&quot; — LaTonya H.
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof actorServices)[0]
  index: number
}) {
  const { ref, isInView } = useInView(0.2)
  const delays = [50, 140, 230]

  const isFeatured = service.variant === "featured"
  const isOutline = service.variant === "outline"

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col rounded-[20px] transition-all duration-500 h-full",
        "opacity-0 translate-y-6",
        isInView && "opacity-100 translate-y-0",
        "hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(18,16,43,0.1)]"
      )}
      style={{ 
        transitionDelay: `${delays[index]}ms`,
        backgroundColor: isFeatured ? 'rgb(26, 16, 40)' : '#ffffff',
        border: isFeatured ? 'none' : '1px solid rgba(184,146,42,0.15)',
      }}
    >
      {/* Gold gradient bar for featured card */}
      {isFeatured && (
        <div 
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
          style={{ background: 'linear-gradient(to right, #B8922A, #D4AE5A)' }}
        />
      )}

      {/* Badge for featured card */}
      {service.badge && (
        <div 
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[9px] uppercase tracking-wide"
          style={{ 
            backgroundColor: 'rgb(26, 16, 40)', 
            color: '#EDD896',
            border: '1px solid rgba(184,146,42,0.3)'
          }}
        >
          {service.badge}
        </div>
      )}

      <div className="p-7 sm:p-8 flex flex-col flex-grow">
        {/* Tag */}
        <span 
          className="text-[9px] uppercase tracking-wider mb-3"
          style={{ 
            color: isFeatured ? 'rgba(184,146,42,0.55)' : '#7B748E'
          }}
        >
          {service.tag}
        </span>

        {/* Title */}
        <h3 
          className="text-[1.45rem] mb-2"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontWeight: 600,
            color: isFeatured ? '#ffffff' : 'rgb(26, 16, 40)'
          }}
        >
          {service.title}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-3">
          <span 
            className="text-[1.2rem]"
            style={{ color: isFeatured ? '#D4AE5A' : '#B8922A' }}
          >
            {service.price}
          </span>
          <span 
            className="text-[0.75rem]"
            style={{ color: isFeatured ? 'rgba(255,255,255,0.35)' : '#7B748E' }}
          >
            {service.priceSuffix}
          </span>
        </div>

        {/* Description */}
        <p 
          className="text-[0.84rem] leading-[1.65] mb-5"
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontWeight: 300,
            color: isFeatured ? 'rgba(255,255,255,0.5)' : '#7B748E'
          }}
        >
          {service.description}
        </p>

        {/* Checklist */}
        <ul className="space-y-2.5 mb-6 flex-grow">
          {service.checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div 
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ 
                  border: `1.5px solid ${isFeatured ? '#D4AE5A' : '#B8922A'}`,
                }}
              >
                <Check 
                  className="w-2.5 h-2.5" 
                  style={{ color: isFeatured ? '#D4AE5A' : '#B8922A' }}
                  strokeWidth={2.5}
                />
              </div>
              <span 
                className="text-[0.84rem]"
                style={{ 
                  fontFamily: "'Outfit', sans-serif",
                  color: isFeatured ? 'rgba(255,255,255,0.72)' : '#7B748E'
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group w-full inline-flex items-center justify-center gap-2 py-[13px] px-6 rounded-[10px] text-[0.77rem] tracking-[0.08em] uppercase transition-all duration-300",
            isFeatured && "hover:bg-[#D4AE5A]",
            isOutline && "hover:bg-[rgb(26, 16, 40)] hover:text-[#D4AE5A]",
            !isFeatured && !isOutline && "hover:opacity-90 hover:scale-[1.015]"
          )}
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontWeight: 500,
            backgroundColor: isFeatured ? '#B8922A' : isOutline ? 'transparent' : 'rgb(26, 16, 40)',
            color: isFeatured ? 'rgb(26, 16, 40)' : isOutline ? 'rgb(26, 16, 40)' : '#D4AE5A',
            border: isOutline ? '1.5px solid rgba(18,16,43,0.25)' : 'none',
          }}
        >
          {service.linkText}
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>

        {/* Fine print */}
        {service.finePrint && (
          <p 
            className="text-center text-[0.7rem] italic mt-3"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            {service.finePrint}
          </p>
        )}
      </div>
    </div>
  )
}
