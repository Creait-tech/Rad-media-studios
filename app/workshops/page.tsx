import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { WorkshopCalendar } from "@/components/workshop-calendar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "2026 Workshop Calendar | Rhavynn Drummer",
  description:
    "Train with Rhavynn Drummer through live workshops designed to strengthen your craft, sharpen your auditions, and build a sustainable acting career.",
}

export default function WorkshopsPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkshopCalendar />
      </main>
      <Footer />
    </>
  )
}
