"use client"

import Link from "next/link"
import { ArrowRight, Clock, MapPin } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

type Session = {
  title: string
  weekday: string
  month: string
  day: string
  date: string
  time: string
  location: string
  href: string | null
  comingSoon?: boolean
}

type MonthGroup = {
  month: string
  sessions: Session[]
}

const SCHEDULE: MonthGroup[] = [
  {
    month: "August",
    sessions: [
      {
        title: "Virtual Audition Workshop",
        weekday: "Friday",
        month: "AUG",
        day: "12",
        date: "Friday, August 12",
        time: "7:00 PM – 10:00 PM EST",
        location: "Live via Zoom",
        href: "https://link.getcreait.com/payment-link/69ea35ce7dd3512d92079003",
      },
      {
        title: "Performance Intensive",
        weekday: "Saturday",
        month: "AUG",
        day: "29",
        date: "Saturday, August 29",
        time: "10:00 AM – 4:00 PM EST",
        location: "Atlanta, GA (In Person)",
        href: "https://link.getcreait.com/payment-link/6a6a131f7b99151a5404121d",
      },
    ],
  },
  {
    month: "September",
    sessions: [
      {
        title: "Atlanta Competition Style Workshop",
        weekday: "Saturday",
        month: "SEP",
        day: "12",
        date: "Saturday, September 12",
        time: "10:00 AM – 3:00 PM EST",
        location: "Atlanta, GA (In Person)",
        href: "https://link.getcreait.com/payment-link/6a6a1291a655fa0b802a6d3a",
      },
      {
        title: "Virtual Audition Workshop",
        weekday: "Wednesday",
        month: "SEP",
        day: "16",
        date: "Wednesday, September 16",
        time: "7:00 PM – 10:00 PM EST",
        location: "Live via Zoom",
        href: "https://link.getcreait.com/payment-link/6a6a139ba655fa0b802a6d3e",
      },
    ],
  },
  {
    month: "October",
    sessions: [
      {
        title: "Performance Intensive",
        weekday: "Tuesday",
        month: "OCT",
        day: "3",
        date: "Tuesday, October 3",
        time: "10:00 AM – 4:00 PM EST",
        location: "Atlanta, GA (In Person)",
        href: "https://link.getcreait.com/payment-link/6a6a12e57b99151a5404121b",
      },
      {
        title: "Virtual Audition Workshop",
        weekday: "Wednesday",
        month: "OCT",
        day: "14",
        date: "Wednesday, October 14",
        time: "7:00 PM – 10:00 PM EST",
        location: "Live via Zoom",
        href: "https://link.getcreait.com/payment-link/6a6a13467b99151a5404121e",
      },
    ],
  },
  {
    month: "November",
    sessions: [
      {
        title: "Master the Audition: Beginner",
        weekday: "Saturday",
        month: "NOV",
        day: "7",
        date: "Saturday, November 7",
        time: "10:00 AM – 2:00 PM EST",
        location: "Atlanta, GA (In Person)",
        href: "https://link.getcreait.com/payment-link/6a6a1263a655fa0b802a6d38",
      },
    ],
  },
  {
    month: "December",
    sessions: [
      {
        title: "Special RAD Media Studios Event",
        weekday: "Saturday",
        month: "DEC",
        day: "5",
        date: "Saturday, December 5",
        time: "Details Coming Soon",
        location: "TBD",
        href: null,
        comingSoon: true,
      },
    ],
  },
]

function SessionCard({ session }: { session: Session }) {
  const { ref, isInView } = useInView(0.15)
  const isBookable = Boolean(session.href) && !session.comingSoon

  const content = (
    <div
      ref={ref}
      className={cn(
        "group relative flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 transition-all duration-500",
        "opacity-0 translate-y-6 transition-all duration-700 ease-out",
        isInView && "opacity-100 translate-y-0",
        isBookable && "hover:border-gold/40 hover:bg-[#121212] cursor-pointer"
      )}
    >
      {/* Calendar-style date marker */}
      <div className="flex-shrink-0 w-16 sm:w-20 text-center border-r border-white/10 pr-6 sm:pr-8">
        <span className="block text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-gold font-medium mb-1">
          {session.month}
        </span>
        <span className="block font-serif text-[36px] sm:text-[44px] leading-none text-white">
          {session.day}
        </span>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-[20px] sm:text-[24px] text-white mb-2 leading-tight">
          {session.title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-5 text-gray-400 text-[13px] sm:text-[14px]">
          <span className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
            {session.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
            {session.location}
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="flex-shrink-0">
        {isBookable ? (
          <span className="inline-flex items-center justify-center gap-2 bg-gold text-black py-3 px-6 sm:py-3.5 sm:px-7 text-[12px] sm:text-[13px] font-semibold tracking-[0.1em] uppercase transition-all duration-500 group-hover:bg-white whitespace-nowrap">
            Reserve Your Seat
            <ArrowRight className="w-4 h-4" />
          </span>
        ) : (
          <span className="inline-flex items-center justify-center gap-2 border border-white/15 text-gray-500 py-3 px-6 sm:py-3.5 sm:px-7 text-[12px] sm:text-[13px] font-semibold tracking-[0.1em] uppercase whitespace-nowrap">
            {session.comingSoon ? "Details Coming Soon" : "Registration Opening Soon"}
          </span>
        )}
      </div>
    </div>
  )

  if (isBookable && session.href) {
    return (
      <Link href={session.href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </Link>
    )
  }

  return content
}

export function WorkshopCalendar() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2)

  return (
    <section className="relative py-16 sm:py-20 md:py-[120px] lg:py-[160px] bg-black overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]"
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-14 sm:mb-16 md:mb-20 max-w-[720px] mx-auto",
            "opacity-0 translate-y-8 transition-all duration-1000 ease-out",
            headerInView && "opacity-100 translate-y-0"
          )}
        >
          <span className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gold block mb-4 sm:mb-5 font-medium">
            2026 Workshop Calendar
          </span>
          <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-none text-white mb-5">
            2026 Workshop Calendar
          </h1>
          <p className="text-gray-400 text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed">
            Train with Rhavynn Drummer through live workshops designed to strengthen
            your craft, sharpen your auditions, and build a sustainable acting career.
          </p>
        </div>

        <div className="max-w-[820px] mx-auto space-y-14 sm:space-y-16">
          {SCHEDULE.map((group) => (
            <div key={group.month}>
              <h2 className="font-serif text-[13px] sm:text-sm tracking-[0.3em] uppercase text-white/50 mb-5 sm:mb-6">
                {group.month}
              </h2>
              <div className="space-y-4 sm:space-y-5">
                {group.sessions.map((session) => (
                  <SessionCard key={`${session.title}-${session.date}`} session={session} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
