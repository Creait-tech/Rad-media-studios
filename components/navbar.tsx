"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto"
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "px-4 py-4 sm:px-6 sm:py-5 md:px-8 lg:px-[60px] lg:py-8",
        isScrolled && "py-3 sm:py-3 lg:py-4 bg-[#080808]/95 backdrop-blur-[15px] border-b border-white/5"
      )}
    >
      <Link 
        href="/" 
        className="font-serif text-[16px] sm:text-lg md:text-xl lg:text-2xl text-white no-underline tracking-[0.08em] sm:tracking-[0.12em] font-semibold z-[1001]"
      >
        RHAVYNN<span className="text-gold">DRUMMER</span>
      </Link>

      <button
        className="flex lg:hidden flex-col gap-[6px] sm:gap-[7px] cursor-pointer z-[1001] p-2 sm:p-2.5 -mr-2"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
      >
        <span
          className={cn(
            "w-6 sm:w-7 h-0.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",
            isMenuOpen && "translate-y-[8px] sm:translate-y-[9px] rotate-45"
          )}
        />
        <span
          className={cn(
            "w-6 sm:w-7 h-0.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isMenuOpen && "opacity-0 scale-x-0"
          )}
        />
        <span
          className={cn(
            "w-6 sm:w-7 h-0.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center",
            isMenuOpen && "-translate-y-[8px] sm:-translate-y-[9px] -rotate-45"
          )}
        />
      </button>

      <div
        className={cn(
          "fixed inset-0 bg-purple-deep flex flex-col justify-center items-center gap-7 sm:gap-8 md:gap-10 z-[1000] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          "lg:static lg:flex-row lg:bg-transparent lg:gap-6 xl:gap-8",
          isMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-full pointer-events-none lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto"
        )}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className={cn(
            "text-white no-underline text-lg sm:text-xl lg:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.15em] font-medium opacity-90 hover:opacity-100 hover:text-gold transition-all duration-500",
            "transform",
            isMenuOpen ? "translate-y-0 opacity-90 transition-all duration-500 delay-100" : "translate-y-4 opacity-0 lg:translate-y-0 lg:opacity-80"
          )}
        >
          Home
        </Link>
        <Link
          href="#origin"
          onClick={closeMenu}
          className={cn(
            "text-white no-underline text-lg sm:text-xl lg:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.15em] font-medium opacity-90 hover:opacity-100 hover:text-gold transition-all duration-500",
            "transform",
            isMenuOpen ? "translate-y-0 opacity-90 transition-all duration-500 delay-150" : "translate-y-4 opacity-0 lg:translate-y-0 lg:opacity-80"
          )}
        >
          My Story
        </Link>
        <Link
          href="#services"
          onClick={closeMenu}
          className={cn(
            "text-white no-underline text-lg sm:text-xl lg:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.15em] font-medium opacity-90 hover:opacity-100 hover:text-gold transition-all duration-500",
            "transform",
            isMenuOpen ? "translate-y-0 opacity-90 transition-all duration-500 delay-200" : "translate-y-4 opacity-0 lg:translate-y-0 lg:opacity-80"
          )}
        >
          Work With Me
        </Link>
        <Link
          href="#projects"
          onClick={closeMenu}
          className={cn(
            "text-white no-underline text-lg sm:text-xl lg:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.15em] font-medium opacity-90 hover:opacity-100 hover:text-gold transition-all duration-500",
            "transform",
            isMenuOpen ? "translate-y-0 opacity-90 transition-all duration-500 delay-250" : "translate-y-4 opacity-0 lg:translate-y-0 lg:opacity-80"
          )}
        >
          My Projects
        </Link>
        <Link
          href="#podcast"
          onClick={closeMenu}
          className={cn(
            "text-white no-underline text-lg sm:text-xl lg:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.15em] font-medium opacity-90 hover:opacity-100 hover:text-gold transition-all duration-500",
            "transform",
            isMenuOpen ? "translate-y-0 opacity-90 transition-all duration-500 delay-300" : "translate-y-4 opacity-0 lg:translate-y-0 lg:opacity-80"
          )}
        >
          The Podcast
        </Link>
        <Link
          href="#waitlist"
          onClick={closeMenu}
          className={cn(
            "border-2 border-gold text-gold lg:bg-transparent py-4 px-8 sm:py-[18px] sm:px-10 lg:py-2.5 lg:px-6 uppercase tracking-[0.1em] sm:tracking-[0.15em] font-bold text-base sm:text-lg lg:text-xs transition-all duration-500 hover:bg-gold hover:text-black mt-4 lg:mt-0",
            "transform",
            isMenuOpen ? "translate-y-0 opacity-100 transition-all duration-500 delay-350" : "translate-y-4 opacity-0 lg:translate-y-0 lg:opacity-100"
          )}
        >
          Join The Waitlist
        </Link>
      </div>
    </nav>
  )
}
