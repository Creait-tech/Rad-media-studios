"use client"

import { ArrowRight, Play, Film, Mic, GraduationCap } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

type Project = {
  icon: typeof Play
  title: string
  description: string
  role: string
  href?: string
}

const projects: Project[] = [
  {
    icon: Play,
    title: "My Boss Loves Me Too Much",
    description: "Micro-drama series | Crazy Maple Studios",
    role: "Director",
  },
  {
    icon: Film,
    title: "FOLLOWERS",
    description: "Dark comedy micro-drama series | RAD Media Studios",
    role: "Creator • Director • Producer",
  },
  {
    icon: Mic,
    title: "The Act Up Podcast",
    description: "Real conversations about creative power and self-trust",
    role: "Host • Producer",
  },
  {
    icon: GraduationCap,
    title: "Youth Filmmaking Workshop",
    description: "Hands-on program teaching the next generation of storytellers",
    role: "Founder • Lead Instructor",
    href: "https://workshop.rhavynndrummer.com/",
  },
]

export function Projects() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2)

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-[120px] lg:py-[160px] bg-black overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20",
            "opacity-0 translate-y-8 transition-all duration-1000 ease-out",
            headerInView && "opacity-100 translate-y-0"
          )}
        >
          <span className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gold block mb-4 sm:mb-5 font-medium">
            What I&apos;m Building
          </span>
          <h2 className="font-serif text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-none text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-[17px] md:text-[19px] max-w-[500px] mx-auto">
            This is what creative courage looks like in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className={cn(
          "text-center mt-12 sm:mt-14 md:mt-16",
          "opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-500",
          headerInView && "opacity-100 translate-y-0"
        )}>
          <a
            href="https://www.instagram.com/rhavynn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 text-gold text-[13px] sm:text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-500 hover:text-white"
          >
            Follow The Journey On Instagram
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const { ref: anchorRef, isInView: anchorInView } = useInView<HTMLAnchorElement>(0.2)
  const { ref: divRef, isInView: divInView } = useInView<HTMLDivElement>(0.2)
  const isInView = project.href ? anchorInView : divInView
  const Icon = project.icon

  const cardClassName = cn(
    "group relative border border-white/[0.08] p-8 sm:p-10 md:p-12 flex flex-col h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-[#121212]",
    "opacity-0 translate-y-10 transition-all duration-700 ease-out",
    isInView && "opacity-100 translate-y-0"
  )

  const cardStyle = {
    backgroundColor: index > 0 ? 'rgb(26, 16, 40)' : '#0d0d0d',
    transitionDelay: `${index * 150}ms`,
  }

  const cardInner = (
    <>
      <Icon
        className="w-10 h-10 sm:w-12 sm:h-12 mb-6 sm:mb-8 text-gold"
        strokeWidth={1.5}
      />
      <h3 className="font-serif text-[20px] sm:text-[24px] md:text-[28px] mb-3 leading-tight text-white">
        {project.title}
      </h3>
      <p className="text-gray-400 text-[14px] sm:text-[15px] mb-4 leading-relaxed">
        {project.description}
      </p>
      <p className="text-gold text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] mt-auto">
        {project.role}
      </p>
      {project.href && (
        <span className="mt-6 inline-flex items-center gap-2 text-gold text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-500 group-hover:gap-3">
          Visit Workshop
          <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </>
  )

  if (project.href) {
    return (
      <a
        ref={anchorRef}
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        style={cardStyle}
      >
        {cardInner}
      </a>
    )
  }

  return (
    <div
      ref={divRef}
      className={cardClassName}
      style={cardStyle}
    >
      {cardInner}
    </div>
  )
}
