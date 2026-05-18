"use client"

import { useEffect } from "react"

export function useRevealAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-up")
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active")
        }
      })
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}
