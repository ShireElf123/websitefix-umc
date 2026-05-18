"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type Page = "home" | "principles" | "leadership" | "events" | "book"

interface NavigationProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "Manifesto" },
  { id: "principles", label: "Principles" },
  { id: "leadership", label: "Leadership" },
  { id: "events", label: "Events" },
  { id: "book", label: "The Publication" },
]

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when navigating
  const handleNavigate = (page: Page) => {
    setMobileMenuOpen(false)
    onNavigate(page)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed w-full z-[1000] px-6 lg:px-10 py-6 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/5"
            : ""
        }`}
      >
        <button
          onClick={() => handleNavigate("home")}
          className="flex items-center space-x-4 cursor-pointer group"
        >
          <Image
            src="https://res.cloudinary.com/dfuibw321/image/upload/v1770139996/logo_cksobm.jpg"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border border-white/10 group-hover:border-gold/50 transition-all duration-500"
            alt="UMC Logo"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-black font-[var(--font-cinzel)] tracking-tighter text-white">
              U.M.C
            </span>
            <span className="text-[7px] tracking-[0.4em] font-bold text-gradient-gold uppercase">
              Est. MMXXIV
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`nav-link ${currentPage === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button
          onClick={() => {
            const message = `Hello U.M.C, I would like to register for the "Money Like Roses" symposium on 14 March 2026 at Cedar Square, Fourways. Please provide me with more details.`
            const phone = "27696269925"
            const encodedMessage = encodeURIComponent(message)
            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank")
          }}
          className="hidden lg:block px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Secure Access
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-xl font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                currentPage === item.id
                  ? "text-gradient-gold"
                  : "text-white/60 hover:text-white"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 100}ms` : "0ms",
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile CTA Button */}
          <button
            onClick={() => {
              const message = `Hello U.M.C, I would like to register for the "Money Like Roses" symposium on 14 March 2026 at Cedar Square, Fourways. Please provide me with more details.`
              const phone = "27696269925"
              const encodedMessage = encodeURIComponent(message)
              window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank")
            }}
            className="mt-8 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            style={{
              transitionDelay: mobileMenuOpen ? `${navItems.length * 100}ms` : "0ms",
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Secure Access
          </button>
        </div>
      </div>
    </>
  )
}
