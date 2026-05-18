"use client"

import { useState, useCallback } from "react"
import { Loader } from "@/components/umc/loader"
import { Navigation } from "@/components/umc/navigation"
import { Footer } from "@/components/umc/footer"
import { HomePage } from "@/components/umc/pages/home-page"
import { PrinciplesPage } from "@/components/umc/pages/principles-page"
import { LeadershipPage } from "@/components/umc/pages/leadership-page"
import { EventsPage } from "@/components/umc/pages/events-page"
import { BookPage } from "@/components/umc/pages/book-page"

type Page = "home" | "principles" | "leadership" | "events" | "book"

export default function UMCWebsite() {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState<Page>("home")
  const [transitioning, setTransitioning] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  const navigateTo = useCallback((page: Page) => {
    if (page === currentPage || transitioning) return

    setTransitioning(true)

    // Wait for transition animation
    setTimeout(() => {
      setCurrentPage(page)
      window.scrollTo(0, 0)

      setTimeout(() => {
        setTransitioning(false)
      }, 400)
    }, 800)
  }, [currentPage, transitioning])

  const openWhatsApp = useCallback((message: string) => {
    const phone = "27696269925"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank")
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={navigateTo} onWhatsApp={openWhatsApp} />
      case "principles":
        return <PrinciplesPage onWhatsApp={openWhatsApp} />
      case "leadership":
        return <LeadershipPage onWhatsApp={openWhatsApp} />
      case "events":
        return <EventsPage onWhatsApp={openWhatsApp} />
      case "book":
        return <BookPage onWhatsApp={openWhatsApp} />
      default:
        return <HomePage onNavigate={navigateTo} onWhatsApp={openWhatsApp} />
    }
  }

  return (
    <>
      {/* Texture Grain Overlay */}
      <div className="texture-grain" />

      {/* Page Transition Overlay */}
      <div
        className={`page-transition-overlay ${transitioning ? "active" : ""}`}
      />

      {/* Loader */}
      {loading && <Loader onComplete={handleLoadComplete} />}

      {/* Main Content */}
      {!loading && (
        <>
          <Navigation currentPage={currentPage} onNavigate={navigateTo} />
          {renderPage()}
          <Footer onNavigate={navigateTo} />
        </>
      )}
    </>
  )
}
