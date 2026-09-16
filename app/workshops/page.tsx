import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { WorkshopCalendar } from "@/components/workshop-calendar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Workshop Calendar | Rhavynn Drummer",
  description:
    "Train with Rhavynn Drummer through live workshops designed to strengthen your craft, sharpen your auditions, and build a sustainable acting career.",
}

/**
 * Re-render hourly so sessions drop off the calendar the day after they happen,
 * without waiting for someone to push a new deploy.
 */
export const revalidate = 3600

export default function WorkshopsPage() {
  // Resolved on the server and handed to the client component so both sides
  // agree on "today" and hydration stays clean.
  const now = new Date().toISOString()

  return (
    <>
      <Navbar />
      <main>
        <WorkshopCalendar now={now} />
      </main>
      <Footer />
    </>
  )
}
