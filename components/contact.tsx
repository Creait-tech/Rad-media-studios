"use client"

import React from "react"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { ref, isInView } = useInView(0.2)
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState("Join The Waitlist")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setButtonText("Joining...")

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/gjPoIOj7eeVxrvAnenGh/webhook-trigger/619a654a-9413-448f-8479-997d076d6d1a",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      )

      if (response.ok) {
        toast({
          description: "You're in! Welcome to the waitlist.",
        })
        setButtonText("You're In!")
        setEmail("")
      } else {
        throw new Error("Failed to submit")
      }
    } catch {
      toast({
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
      setButtonText("Try Again")
    }

    setTimeout(() => {
      setButtonText("Join The Waitlist")
      setIsSubmitting(false)
    }, 3000)
  }

  return (
    <section id="waitlist" className="py-16 sm:py-20 md:py-[120px] lg:py-[160px] text-white overflow-hidden" style={{ backgroundColor: 'rgb(26, 16, 40)' }}>
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div
          ref={ref}
          className={cn(
            "max-w-[750px] mx-auto text-center",
            "opacity-0 translate-y-10 transition-all duration-1000 ease-out",
            isInView && "opacity-100 translate-y-0"
          )}
        >
          <h2 className="font-serif text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] mb-4 sm:mb-5 text-white leading-[1.1]">
            Don&apos;t Miss What&apos;s Coming.
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/80 mb-6">
            Workshops sell out. Sessions fill fast. The waitlist is how you get first access — before anyone else.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/60 mb-10 sm:mb-12 max-w-[600px] mx-auto leading-relaxed">
            Join the waitlist and you&apos;ll be the first to know when new workshop dates drop, Freedom Sessions open up, and exclusive opportunities become available. This list is small, intentional, and the closest thing to having Rhavynn in your corner before you&apos;ve even booked a session.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-[600px] mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your best email address"
              required
              aria-label="Email Address"
              className="flex-1 py-4 sm:py-5 lg:py-[22px] px-5 sm:px-6 lg:px-7 border-2 border-white/20 text-[15px] sm:text-base font-sans transition-all duration-500 w-full bg-white/5 focus:outline-none focus:border-gold text-white placeholder:text-white/40 rounded-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gold text-black py-4 sm:py-5 lg:py-[22px] px-8 sm:px-10 lg:px-[50px] text-[13px] sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] border-none cursor-pointer transition-all duration-500 hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {buttonText}
            </button>
          </form>
          <p className="text-white/40 text-[12px] sm:text-[13px] mt-4">
            No spam. No fluff. Just first access to everything.
          </p>
        </div>
      </div>
    </section>
  )
}
