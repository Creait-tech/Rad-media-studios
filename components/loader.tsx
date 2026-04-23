"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Loader() {
  const [isHidden, setIsHidden] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true)
      setTimeout(() => setShouldRender(false), 1000)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (!shouldRender) return null

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-[opacity,visibility] duration-1000",
        isHidden && "opacity-0 invisible"
      )}
    >
      <div className="text-center">
        <span className="font-serif text-[clamp(24px,5vw,40px)] text-gold tracking-[0.2em] uppercase block mb-4">
          Rhavynn Drummer
        </span>
        <div className="w-[100px] h-px bg-gold/10 mx-auto relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-[40%] bg-gold"
            style={{
              animation: "loading 1.8s infinite ease-in-out",
            }}
          />
        </div>
      </div>
    </div>
  )
}
