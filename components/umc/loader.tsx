"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start progress animation
    const progressTimer = setTimeout(() => {
      setProgress(true)
    }, 100)

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 1500)

    // Complete loading
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 2500)

    return () => {
      clearTimeout(progressTimer)
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-black flex flex-col justify-center items-center transition-all duration-1000 ${
        fadeOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      <div className="relative mb-8">
        <Image
          src="https://res.cloudinary.com/dfuibw321/image/upload/v1770139996/logo_cksobm.jpg"
          width={96}
          height={96}
          className="w-24 h-24 rounded-full border border-gold/40 object-cover shadow-[0_0_50px_rgba(191,149,63,0.3)]"
          alt="UMC Logo"
        />
        <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping-slow" />
      </div>
      <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden">
        <div
          className={`absolute h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent w-full transition-transform duration-1000 ${
            progress ? "translate-x-0" : "-translate-x-full"
          }`}
        />
      </div>
      <p className="mt-8 font-[var(--font-cinzel)] text-[10px] tracking-[1em] text-gradient-gold uppercase">
        Uplifting Money Connections
      </p>
    </div>
  )
}
