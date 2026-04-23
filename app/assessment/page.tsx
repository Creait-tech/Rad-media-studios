"use client"

import { useState, useCallback, useEffect } from "react"
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from "next/font/google"
import { ArrowRight, ArrowLeft, Download, Send, Copy, Loader2, Check } from "lucide-react"

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"] })
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

// Archetype data
const archetypes = {
  performer: {
    name: "The Performer",
    icon: "🎭",
    tagline: `"You're not holding back because you're not ready. You're holding back because ready feels safer than real."`,
    description: "Your excellence has become your cage. You've confused being good with being free.",
    cta: "Book a Freedom Session",
    ctaDesc: 'A focused session to break through your perfectionism pattern and finally move from "ready" to "real."',
    price: "$397",
    link: "#freedom-session",
  },
  provider: {
    name: "The Provider",
    icon: "💝",
    tagline: `"You've been so busy being everything to everyone that you forgot you're someone too."`,
    description: "Self-abandonment is not love. It's a slow disappearing act dressed up as responsibility.",
    cta: "The Unlock Virtual Intensive",
    ctaDesc: "A deep-dive session to reclaim yourself and stop disappearing into everyone else's needs.",
    price: "$97",
    link: "#unlock-intensive",
  },
  prisoner: {
    name: "The Prisoner",
    icon: "🔐",
    tagline: `"You're not stuck because of where you are. You're stuck because you keep asking permission to leave."`,
    description: "The permission you're waiting for was never coming from them. It was always yours to give.",
    cta: "The Unlock Virtual Intensive",
    ctaDesc: "A breakthrough session to stop waiting for permission and start moving with your own authority.",
    price: "$97",
    link: "#unlock-intensive",
  },
  pretender: {
    name: "The Pretender",
    icon: "🪞",
    tagline: `"You're not a fraud. But you've been faking confidence for so long you've forgotten what the real thing feels like."`,
    description: "Imposter syndrome isn't about your competence. It's about your disconnection from yourself.",
    cta: "Book a Freedom Session",
    ctaDesc: "A focused session to reconnect with your authentic self and release the mask you've been wearing.",
    price: "$397",
    link: "#freedom-session",
  },
}

type ArchetypeKey = keyof typeof archetypes

// Questions data
const questions = [
  {
    question: "When you imagine doing the thing you really want to do, what stops you first?",
    options: [
      { letter: "A", text: "I worry what people will think", value: "pretender" },
      { letter: "B", text: "I tell myself I'm not ready yet", value: "performer" },
      { letter: "C", text: "I don't have the support or resources around me", value: "prisoner" },
      { letter: "D", text: "I don't actually believe I deserve it", value: "provider" },
    ],
  },
  {
    question: "How do you typically show up for others vs. yourself?",
    options: [
      { letter: "A", text: "I give everyone else my best and save my leftovers for me", value: "provider" },
      { letter: "B", text: "I show up great publicly but fall apart privately", value: "pretender" },
      { letter: "C", text: "I'm ready for everyone else's dreams but stuck on my own", value: "prisoner" },
      { letter: "D", text: "I perform confidence but feel like a fraud inside", value: "pretender" },
    ],
  },
  {
    question: "When was the last time you fully trusted yourself?",
    options: [
      { letter: "A", text: "Honestly? I'm not sure I ever have", value: "prisoner" },
      { letter: "B", text: "I used to, but something happened", value: "provider" },
      { letter: "C", text: "I trust myself for others, never for me", value: "provider" },
      { letter: "D", text: "I trust my skills but not my worth", value: "performer" },
    ],
  },
  {
    question: "When opportunity shows up, what's your first instinct?",
    options: [
      { letter: "A", text: "I shrink back and let it pass", value: "prisoner" },
      { letter: "B", text: "I say yes but secretly hope it falls through", value: "pretender" },
      { letter: "C", text: "I look around to see if anyone else thinks I deserve it", value: "performer" },
      { letter: "D", text: "I go for it but spend the whole time waiting to be exposed", value: "pretender" },
    ],
  },
  {
    question: "What does your inner voice sound like most days?",
    options: [
      { letter: "A", text: "A strict parent who needs everything perfect before moving", value: "performer" },
      { letter: "B", text: "A martyr who reminds me how much I've sacrificed for others", value: "provider" },
      { letter: "C", text: 'A prisoner who says "people like me don\'t get to do that"', value: "prisoner" },
      { letter: "D", text: 'An imposter who says "they\'re going to find out you\'re faking"', value: "pretender" },
    ],
  },
  {
    question: "When someone gives you a genuine compliment, you:",
    options: [
      { letter: "A", text: "Deflect it immediately and redirect to someone else", value: "provider" },
      { letter: "B", text: "Accept it graciously but privately don't believe it", value: "pretender" },
      { letter: "C", text: "Feel guilty like you don't deserve it yet", value: "performer" },
      { letter: "D", text: "Wonder what they want from you", value: "prisoner" },
    ],
  },
  {
    question: "Your dream is sitting right in front of you. What's the most honest reason you haven't grabbed it?",
    options: [
      { letter: "A", text: "I'm waiting until I'm more prepared", value: "performer" },
      { letter: "B", text: "I'm waiting until my family is taken care of first", value: "provider" },
      { letter: "C", text: "I'm waiting for someone with authority to tell me I'm ready", value: "prisoner" },
      { letter: "D", text: "I'm waiting to feel like I actually belong there", value: "pretender" },
    ],
  },
  {
    question: "What would trusting yourself fully actually cost you?",
    options: [
      { letter: "A", text: "The version of me everyone depends on", value: "provider" },
      { letter: "B", text: "My excuse for why I haven't done it yet", value: "performer" },
      { letter: "C", text: "The comfort of staying invisible", value: "prisoner" },
      { letter: "D", text: "The story I've been telling myself about why I can't", value: "pretender" },
    ],
  },
]

interface Result {
  primary: ArchetypeKey
  secondary: ArchetypeKey | null
  counts: Record<ArchetypeKey, number>
  isBlend: boolean
}

interface UserData {
  firstName: string
  email: string
  phone: string | null
}

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationDirection, setAnimationDirection] = useState<"forward" | "backward">("forward")
  const [result, setResult] = useState<Result | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [sendSuccess, setSendSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
  })

  const totalSteps = 9 // 0=welcome, 1-8=questions, 9=email capture/results

  const calculateProgress = useCallback(() => {
    return (currentStep / totalSteps) * 100
  }, [currentStep])

  const calculateResult = useCallback((): Result => {
    const counts: Record<ArchetypeKey, number> = {
      performer: 0,
      provider: 0,
      prisoner: 0,
      pretender: 0,
    }

    Object.values(answers).forEach((value) => {
      if (value in counts) {
        counts[value as ArchetypeKey]++
      }
    })

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]) as [ArchetypeKey, number][]
    const primary = sorted[0]
    const secondary = sorted[1]
    const isBlend = secondary[1] >= primary[1] - 1 && secondary[1] > 0

    return {
      primary: primary[0],
      secondary: isBlend ? secondary[0] : null,
      counts,
      isBlend,
    }
  }, [answers])

  const goToStep = useCallback(
    (newStep: number, isReverse = false) => {
      if (isAnimating || newStep < 0 || newStep > totalSteps) return
      setIsAnimating(true)
      setAnimationDirection(isReverse ? "backward" : "forward")

      setTimeout(() => {
        setCurrentStep(newStep)
        setIsAnimating(false)
      }, 400)
    },
    [isAnimating]
  )

  const selectOption = useCallback(
    (questionIndex: number, value: string) => {
      setAnswers((prev) => ({
        ...prev,
        [`question_${questionIndex + 1}`]: value,
      }))

      setTimeout(() => {
        goToStep(currentStep + 1, false)
      }, 400)
    },
    [currentStep, goToStep]
  )

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const user: UserData = {
      firstName: formData.firstName,
      email: formData.email,
      phone: formData.phone || null,
    }
    setUserData(user)

    const calculatedResult = calculateResult()
    setResult(calculatedResult)

    const payload = {
      timestamp: new Date().toISOString(),
      user,
      assessment: {
        answers,
        result: {
          primaryArchetype: calculatedResult.primary,
          secondaryArchetype: calculatedResult.secondary,
          isBlend: calculatedResult.isBlend,
          counts: calculatedResult.counts,
        },
      },
      source: typeof window !== "undefined" ? window.location.href : "",
    }

    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/gjPoIOj7eeVxrvAnenGh/webhook-trigger/c83884e9-fb4b-4355-a7fb-b14e8715c4a9",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      )
    } catch (error) {
      console.error("Webhook error:", error)
    }

    setTimeout(() => {
      setIsSubmitting(false)
      setShowResults(true)
    }, 800)
  }

  const downloadResults = () => {
    if (!result || !userData) return

    const archetype = archetypes[result.primary]
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    let content = `
═══════════════════════════════════════════════════════════════
                    SELF-TRUST ASSESSMENT RESULTS
                           ${date}
═══════════════════════════════════════════════════════════════

Hello ${userData.firstName},

Your primary archetype is:

    ${archetype.icon} ${archetype.name.toUpperCase()}

───────────────────────────────────────────────────────────────

${archetype.tagline}

${archetype.description}

`

    if (result.isBlend && result.secondary) {
      const secondary = archetypes[result.secondary]
      content += `
───────────────────────────────────────────────────────────────
BLEND NOTE:
You also show strong ${secondary.name} tendencies.
───────────────────────────────────────────────────────────────

`
    }

    content += `
YOUR NEXT STEP:
${archetype.cta} - ${archetype.price}

${archetype.ctaDesc}

───────────────────────────────────────────────────────────────

YOUR ARCHETYPE BREAKDOWN:
• Performer: ${result.counts.performer} responses
• Provider: ${result.counts.provider} responses  
• Prisoner: ${result.counts.prisoner} responses
• Pretender: ${result.counts.pretender} responses

═══════════════════════════════════════════════════════════════
                    BIGGER THAN A TITLE
           The Self-Trust Assessment for People 
                  Who Were Made for More
═══════════════════════════════════════════════════════════════
`

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `Self-Trust-Assessment-${userData.firstName}-${result.primary}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const sendResultsEmail = async () => {
    if (!result || !userData) return
    setIsSending(true)

    const archetype = archetypes[result.primary]
    const payload = {
      action: "send_results_email",
      timestamp: new Date().toISOString(),
      user: userData,
      assessment: {
        primaryArchetype: result.primary,
        secondaryArchetype: result.secondary,
        isBlend: result.isBlend,
        archetypeName: archetype.name,
        archetypeTagline: archetype.tagline,
        archetypeDescription: archetype.description,
        cta: archetype.cta,
        ctaPrice: archetype.price,
        counts: result.counts,
      },
    }

    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/gjPoIOj7eeVxrvAnenGh/webhook-trigger/c83884e9-fb4b-4355-a7fb-b14e8715c4a9",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      )
      setSendSuccess(true)
      setTimeout(() => setSendSuccess(false), 3000)
    } catch (error) {
      console.error("Email webhook error:", error)
    }

    setIsSending(false)
  }

  const shareResults = (platform: string) => {
    if (!result) return
    const archetype = archetypes[result.primary]
    const shareText = `I just discovered I'm "${archetype.name}" in the Self-Trust Assessment. ${archetype.tagline.replace(/"/g, "")}`
    const shareUrl = typeof window !== "undefined" ? window.location.href : ""

    switch (platform) {
      case "copy":
        navigator.clipboard.writeText(shareUrl).then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        })
        break
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
          "_blank"
        )
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")
        break
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && currentStep > 0 && currentStep < 9 && !showResults) {
        goToStep(currentStep - 1, true)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentStep, showResults, goToStep])

  const getProgressText = () => {
    if (currentStep === 0) return "Begin"
    if (currentStep === 9) return "Complete"
    return `${currentStep} of 8`
  }

  return (
    <div
      className={`${dmSans.className} min-h-screen bg-gradient-to-b from-[#1E1433] to-[#2D1B4E] text-[#FBF9F7] relative overflow-hidden`}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 px-5 pt-6 pb-24 md:px-12 md:pt-10 md:pb-32 lg:px-20 lg:pt-16">
        {/* Progress Bar */}
        <div className="max-w-[600px] mx-auto mb-12 md:mb-16">
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-500 ease-out"
              style={{ width: `${calculateProgress()}%` }}
            />
            {calculateProgress() > 0 && (
              <div
                className="absolute top-[-2px] right-0 w-5 h-2 bg-gold blur-lg opacity-60"
                style={{ right: `${100 - calculateProgress()}%` }}
              />
            )}
          </div>
          <span className="block text-right mt-3 text-xs tracking-[0.1em] uppercase text-gold/80">
            {getProgressText()}
          </span>
        </div>

        {/* Steps Container */}
        <div className="max-w-[600px] lg:max-w-[700px] mx-auto">
          {/* Step 0: Welcome */}
          <div
            className={`transition-all duration-400 ease-out ${
              currentStep === 0
                ? isAnimating
                  ? animationDirection === "forward"
                    ? "opacity-0 -translate-x-10"
                    : "opacity-0 translate-x-10"
                  : "opacity-100 translate-x-0"
                : "hidden"
            }`}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              Self-Trust Assessment
            </span>
            <h1
              className={`${cormorant.className} text-[clamp(32px,8vw,56px)] font-medium leading-[1.15] mb-5 bg-gradient-to-br from-[#FBF9F7] to-[#E8D5A3] bg-clip-text text-transparent`}
            >
              Bigger Than a Title
            </h1>
            <p className={`${cormorant.className} text-[clamp(18px,4vw,22px)] italic text-gold-light mb-6 leading-relaxed`}>
              Discover the exact pattern that&apos;s been keeping you from the life you&apos;re capable of.
            </p>
            <p className="text-base leading-relaxed text-white/75 mb-8">
              This isn&apos;t a personality quiz. It&apos;s a mirror. 8 questions. 3 minutes. One truth you&apos;ve been avoiding.
            </p>
            <button
              onClick={() => goToStep(1)}
              className="inline-flex items-center gap-3 px-8 py-5 bg-gold text-[#1E1433] text-sm font-semibold tracking-[0.05em] uppercase rounded-lg hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <span>Begin Assessment</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Question Steps */}
          {questions.map((q, index) => (
            <div
              key={index}
              className={`transition-all duration-400 ease-out ${
                currentStep === index + 1
                  ? isAnimating
                    ? animationDirection === "forward"
                      ? "opacity-0 translate-x-10"
                      : "opacity-0 -translate-x-10"
                    : "opacity-100 translate-x-0"
                  : "hidden"
              }`}
            >
              <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-gold mb-5 px-4 py-2 bg-gold/10 rounded-full">
                Question {index + 1} of 8
              </span>
              <h2 className={`${cormorant.className} text-[clamp(24px,5.5vw,36px)] font-medium leading-[1.35] mb-9 text-[#FBF9F7]`}>
                {q.question}
              </h2>
              <div className="flex flex-col gap-3">
                {q.options.map((option) => (
                  <button
                    key={option.letter}
                    onClick={() => selectOption(index, option.value)}
                    className={`group flex items-start gap-4 w-full p-5 md:p-6 lg:p-7 bg-white/[0.03] border border-white/[0.08] rounded-xl text-left transition-all duration-300 hover:bg-white/[0.06] hover:border-gold/30 hover:translate-x-1 lg:hover:translate-x-2 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)] ${
                      answers[`question_${index + 1}`] === option.value ? "bg-gold/10 border-gold" : ""
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/[0.08] rounded-lg text-sm font-semibold text-gold transition-all duration-300 ${
                        answers[`question_${index + 1}`] === option.value ? "bg-gold text-[#1E1433]" : ""
                      }`}
                    >
                      {option.letter}
                    </span>
                    <span className="text-[15px] md:text-base leading-relaxed text-[#FBF9F7] pt-1">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Step 9: Email Capture / Results */}
          <div
            className={`transition-all duration-400 ease-out ${
              currentStep === 9
                ? isAnimating
                  ? animationDirection === "forward"
                    ? "opacity-0 translate-x-10"
                    : "opacity-0 -translate-x-10"
                  : "opacity-100 translate-x-0"
                : "hidden"
            }`}
          >
            {!showResults ? (
              <div className={`${isSubmitting ? "opacity-70 pointer-events-none" : ""}`}>
                <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                  Almost There
                </span>
                <h2 className={`${cormorant.className} text-[clamp(28px,6vw,36px)] font-medium leading-[1.15] mb-5 bg-gradient-to-br from-[#FBF9F7] to-[#E8D5A3] bg-clip-text text-transparent`}>
                  Where should we send your results?
                </h2>
                <p className="text-base leading-relaxed text-white/75 mb-8">
                  Your personalized archetype breakdown is ready. Enter your details below to unlock your full assessment.
                </p>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-medium tracking-[0.05em] uppercase text-gold-light">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      placeholder="Your first name"
                      required
                      className="px-5 py-4 bg-white/5 border border-white/[0.12] rounded-lg text-base text-[#FBF9F7] placeholder:text-gray-400 focus:outline-none focus:border-gold focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)] transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-medium tracking-[0.05em] uppercase text-gold-light">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="you@email.com"
                      required
                      className="px-5 py-4 bg-white/5 border border-white/[0.12] rounded-lg text-base text-[#FBF9F7] placeholder:text-gray-400 focus:outline-none focus:border-gold focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)] transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-medium tracking-[0.05em] uppercase text-gold-light">
                      Phone <span className="font-normal normal-case tracking-normal text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="(555) 555-5555"
                      className="px-5 py-4 bg-white/5 border border-white/[0.12] rounded-lg text-base text-[#FBF9F7] placeholder:text-gray-400 focus:outline-none focus:border-gold focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)] transition-all duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gold text-[#1E1433] text-sm font-semibold tracking-[0.05em] uppercase rounded-lg hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,175,55,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Revealing...</span>
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Reveal My Archetype</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-2">We respect your privacy. Unsubscribe anytime.</p>
                </form>
              </div>
            ) : (
              result && (
                <div className="text-center animate-fade-in-up">
                  {/* Archetype Badge */}
                  <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-4xl md:text-5xl">{archetypes[result.primary].icon}</span>
                  </div>

                  <h2
                    className={`${playfair.className} text-[clamp(36px,8vw,52px)] font-semibold mb-5 bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent`}
                  >
                    {archetypes[result.primary].name}
                  </h2>

                  <p className={`${cormorant.className} text-[clamp(18px,4vw,22px)] italic text-[#FBF9F7] leading-relaxed mb-5 max-w-[500px] mx-auto`}>
                    {archetypes[result.primary].tagline}
                  </p>

                  <p className="text-base leading-relaxed text-white/75 mb-10 max-w-[450px] mx-auto">
                    {archetypes[result.primary].description}
                  </p>

                  {/* Blend Note */}
                  {result.isBlend && result.secondary && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8">
                      <p className="text-sm leading-relaxed text-gold-light">
                        {result.primary === "provider" && result.secondary === "pretender"
                          ? "You're a Provider-Pretender blend — you sacrifice yourself AND perform confidence. That combination is exhausting and we need to talk immediately."
                          : `You're showing strong ${archetypes[result.primary].name} tendencies with ${archetypes[result.secondary].name} influence. Your primary pattern leads, but both are shaping your experience.`}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <button
                      onClick={downloadResults}
                      className="flex-1 flex items-center justify-center gap-3 px-5 py-4 bg-white/[0.06] border border-white/15 text-[#FBF9F7] text-[13px] font-semibold tracking-[0.05em] uppercase rounded-lg hover:bg-white/10 hover:border-gold hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Results</span>
                    </button>
                    <button
                      onClick={sendResultsEmail}
                      disabled={isSending}
                      className={`flex-1 flex items-center justify-center gap-3 px-5 py-4 border text-[13px] font-semibold tracking-[0.05em] uppercase rounded-lg transition-all duration-300 ${
                        sendSuccess
                          ? "bg-green-500/15 border-green-500/50 text-green-500"
                          : "bg-white/[0.06] border-white/15 text-[#FBF9F7] hover:bg-white/10 hover:border-gold hover:-translate-y-0.5"
                      }`}
                    >
                      {isSending ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : sendSuccess ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      <span>{sendSuccess ? "Sent!" : isSending ? "Sending..." : "Send to Email"}</span>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold whitespace-nowrap">
                      Your Next Step
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  </div>

                  {/* CTA Box */}
                  <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-2xl p-8 md:p-10 mt-4">
                    <h3 className={`${cormorant.className} text-[28px] font-medium text-[#FBF9F7] mb-2`}>
                      {archetypes[result.primary].cta}
                    </h3>
                    <p className="text-2xl font-semibold text-gold mb-3">{archetypes[result.primary].price}</p>
                    <p className="text-sm leading-relaxed text-white/70 mb-5">{archetypes[result.primary].ctaDesc}</p>
                    <a
                      href={archetypes[result.primary].link}
                      className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-br from-gold to-[#E5C158] text-[#1E1433] text-sm font-semibold tracking-[0.05em] uppercase rounded-lg hover:shadow-[0_12px_32px_rgba(212,175,55,0.4)] transition-all duration-300"
                    >
                      <span>Take Action Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Share Section */}
                  <div className="mt-8 pt-6 border-t border-white/[0.08] text-center">
                    <p className="text-[13px] text-gray-400 mb-4">Know someone who needs this?</p>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => shareResults("copy")}
                        className={`w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 ${
                          copied
                            ? "bg-green-500/15 border-green-500/50 text-green-500"
                            : "bg-white/[0.06] border-white/[0.12] text-[#FBF9F7] hover:bg-gold hover:border-gold hover:text-[#1E1433] hover:scale-110"
                        }`}
                        title="Copy link"
                      >
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={() => shareResults("twitter")}
                        className="w-11 h-11 flex items-center justify-center bg-white/[0.06] border border-white/[0.12] rounded-full text-[#FBF9F7] hover:bg-gold hover:border-gold hover:text-[#1E1433] hover:scale-110 transition-all duration-300"
                        title="Share on X"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => shareResults("facebook")}
                        className="w-11 h-11 flex items-center justify-center bg-white/[0.06] border border-white/[0.12] rounded-full text-[#FBF9F7] hover:bg-gold hover:border-gold hover:text-[#1E1433] hover:scale-110 transition-all duration-300"
                        title="Share on Facebook"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Back Button */}
        {currentStep > 0 && currentStep < 9 && !showResults && (
          <button
            onClick={() => goToStep(currentStep - 1, true)}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-white/[0.08] border border-white/[0.12] rounded-full text-[#FBF9F7] text-[13px] font-medium hover:bg-white/[0.12] hover:border-gold transition-all duration-300 z-50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        )}
      </div>
    </div>
  )
}
