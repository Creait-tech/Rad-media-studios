"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Clock, MapPin } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

/** All sessions are scheduled and advertised in Rhavynn's local time. */
const EVENT_TIME_ZONE = "America/New_York"

type TicketOption = {
  label: string
  price: string
  href: string
}

type Session = {
  /**
   * ISO date (YYYY-MM-DD) and the single source of truth for this session.
   * The weekday, month abbreviation and day number on the card are all derived
   * from it, so they can never drift out of sync the way hand-typed ones did.
   * A session drops off the page automatically once this date has passed.
   */
  date: string
  title: string
  time: string
  location: string
  href: string | null
  comingSoon?: boolean
  options?: TicketOption[]
}

/**
 * To add a workshop: add an entry here. Order doesn't matter — the list is
 * sorted and grouped into months automatically. Past sessions do NOT need to be
 * deleted; they stop rendering on their own the day after they happen.
 */
const SESSIONS: Session[] = [
  {
    date: "2026-09-16",
    title: "Virtual Audition Workshop",
    time: "7:00 PM – 10:00 PM EST",
    location: "Live via Zoom",
    href: "https://link.getcreait.com/payment-link/6a6a139ba655fa0b802a6d3e",
  },
  {
    date: "2026-10-03",
    title: "Performance Intensive",
    time: "10:00 AM – 4:00 PM EST",
    location: "Atlanta, GA (In Person)",
    href: "https://link.getcreait.com/payment-link/6a6a12e57b99151a5404121b",
  },
  {
    date: "2026-10-14",
    title: "Virtual Audition Workshop",
    time: "7:00 PM – 10:00 PM EST",
    location: "Live via Zoom",
    href: "https://link.getcreait.com/payment-link/6a6a13467b99151a5404121e",
  },
  {
    date: "2026-11-07",
    title: "Master the Audition: Beginner",
    time: "10:00 AM – 2:00 PM EST",
    location: "Atlanta, GA (In Person)",
    href: "https://link.getcreait.com/payment-link/6a6a1263a655fa0b802a6d38",
  },
  {
    date: "2026-12-05",
    title: "Special RAD Media Studios Event",
    time: "Details Coming Soon",
    location: "TBD",
    href: null,
    comingSoon: true,
  },
]

/** Parse YYYY-MM-DD as a fixed UTC instant so formatting never shifts a day. */
function parseEventDate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number)
  return new Date(Date.UTC(year, month - 1, day))
}

function formatEventDate(iso: string, options: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...options }).format(
    parseEventDate(iso)
  )
}

/** Today's date in the event time zone, as YYYY-MM-DD for direct string compare. */
function currentDateKey(instant: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: EVENT_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(instant)
  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? ""
  return `${part("year")}-${part("month")}-${part("day")}`
}

type MonthGroup = {
  key: string
  label: string
  sessions: Session[]
}

function groupByMonth(sessions: Session[]): MonthGroup[] {
  const groups: MonthGroup[] = []
  for (const session of sessions) {
    const key = session.date.slice(0, 7)
    const group = groups.find((g) => g.key === key)
    if (group) {
      group.sessions.push(session)
    } else {
      groups.push({
        key,
        label: formatEventDate(session.date, { month: "long" }),
        sessions: [session],
      })
    }
  }
  return groups
}

function SessionCard({ session }: { session: Session }) {
  const { ref, isInView } = useInView(0.15)
  const [showOptions, setShowOptions] = useState(false)
  const hasOptions = Boolean(session.options?.length)
  const isBookable = (Boolean(session.href) || hasOptions) && !session.comingSoon

  const monthAbbr = formatEventDate(session.date, { month: "short" }).toUpperCase()
  const dayNumber = formatEventDate(session.date, { day: "numeric" })
  const fullDate = formatEventDate(session.date, {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  const cardBody = (
    <div
      ref={ref}
      className={cn(
        "group relative flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 transition-all duration-500",
        "opacity-0 translate-y-6 transition-all duration-700 ease-out",
        isInView && "opacity-100 translate-y-0",
        isBookable && !hasOptions && "hover:border-gold/40 hover:bg-[#121212] cursor-pointer"
      )}
    >
      {/* Calendar-style date marker */}
      <div
        className="flex-shrink-0 w-16 sm:w-20 text-center border-r border-white/10 pr-6 sm:pr-8"
        title={fullDate}
      >
        <span className="block text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-gold font-medium mb-1">
          {monthAbbr}
        </span>
        <span className="block font-serif text-[36px] sm:text-[44px] leading-none text-white">
          {dayNumber}
        </span>
        <span className="sr-only">{fullDate}</span>
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
        {hasOptions ? (
          showOptions ? (
            <div className="flex flex-col gap-2 items-stretch sm:items-end">
              {session.options!.map((option) => (
                <Link
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 bg-gold text-black py-2.5 px-5 text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-500 hover:bg-white whitespace-nowrap"
                >
                  {option.label}
                  <span className="font-normal">{option.price}</span>
                </Link>
              ))}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowOptions(true)}
              className="inline-flex items-center justify-center gap-2 bg-gold text-black py-3 px-6 sm:py-3.5 sm:px-7 text-[12px] sm:text-[13px] font-semibold tracking-[0.1em] uppercase transition-all duration-500 hover:bg-white whitespace-nowrap"
            >
              Reserve Your Seat
              <ArrowRight className="w-4 h-4" />
            </button>
          )
        ) : isBookable ? (
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

  if (isBookable && session.href && !hasOptions) {
    return (
      <Link href={session.href} target="_blank" rel="noopener noreferrer" className="block">
        {cardBody}
      </Link>
    )
  }

  return cardBody
}

/**
 * `now` is an ISO instant supplied by the server component so the server and
 * client agree on what "today" is. Without it both sides would call their own
 * clock and React would flag a hydration mismatch.
 */
export function WorkshopCalendar({ now }: { now?: string }) {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2)

  const today = currentDateKey(now ? new Date(now) : new Date())
  const upcoming = SESSIONS.filter((session) => session.date >= today).sort((a, b) =>
    a.date.localeCompare(b.date)
  )
  const groups = groupByMonth(upcoming)

  const years = Array.from(new Set(upcoming.map((session) => session.date.slice(0, 4))))
  const heading = years.length === 1 ? `${years[0]} Workshop Calendar` : "Workshop Calendar"

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
            {heading}
          </span>
          <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-none text-white mb-5">
            {heading}
          </h1>
          <p className="text-gray-400 text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed">
            Train with Rhavynn Drummer through live workshops designed to strengthen
            your craft, sharpen your auditions, and build a sustainable acting career.
          </p>
        </div>

        {groups.length > 0 ? (
          <div className="max-w-[820px] mx-auto space-y-14 sm:space-y-16">
            {groups.map((group) => (
              <div key={group.key}>
                <h2 className="font-serif text-[13px] sm:text-sm tracking-[0.3em] uppercase text-white/50 mb-5 sm:mb-6">
                  {group.label}
                </h2>
                <div className="space-y-4 sm:space-y-5">
                  {group.sessions.map((session) => (
                    <SessionCard key={`${session.title}-${session.date}`} session={session} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-[560px] mx-auto text-center border border-white/10 bg-[#0d0d0d] p-10 sm:p-14">
            <h2 className="font-serif text-[24px] sm:text-[30px] text-white mb-4 leading-tight">
              New dates are on the way
            </h2>
            <p className="text-gray-400 text-[15px] sm:text-[16px] leading-relaxed mb-8">
              The next round of workshops is being scheduled now. Join the waitlist
              and you&apos;ll hear about new dates before they&apos;re announced anywhere else.
            </p>
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center gap-2 bg-gold text-black py-3 px-6 sm:py-3.5 sm:px-7 text-[12px] sm:text-[13px] font-semibold tracking-[0.1em] uppercase transition-all duration-500 hover:bg-white whitespace-nowrap"
            >
              Join The Waitlist
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
