import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { SplitSection } from "@/components/split-section"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { AssessmentCTA } from "@/components/assessment-cta"
import { OriginStory } from "@/components/origin-story"
import { Contact } from "@/components/contact"
import { Podcast } from "@/components/podcast"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Loader } from "@/components/loader"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <Hero />
        
        {/* CREDIBILITY BAR */}
        <Stats />
        
        {/* SECTION 2: WHO YOU ARE */}
        <SplitSection />
        
        {/* SECTION 3: MY PROJECTS */}
        <Projects />
        
        {/* SECTION 4: WORK WITH ME */}
        <Services />
        
        {/* SECTION 5: THE ASSESSMENT */}
        <AssessmentCTA />
        
        {/* SECTION 6: ORIGIN STORY */}
        <OriginStory />
        
        {/* SECTION 7: JOIN THE WAITLIST */}
        <Contact />
        
        {/* SECTION 8: THE PODCAST */}
        <Podcast />
        
        {/* SECTION 9: FINAL CTA */}
        <FinalCTA />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}
