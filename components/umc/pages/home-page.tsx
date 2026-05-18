"use client"

import Image from "next/image"
import { useRevealAnimation } from "@/hooks/use-reveal-animation"

interface HomePageProps {
  onNavigate: (page: "book" | "principles") => void
  onWhatsApp: (message: string) => void
}

export function HomePage({ onNavigate, onWhatsApp }: HomePageProps) {
  useRevealAnimation()

  const handleContactUs = () => {
    const message = `Hello U.M.C, I am interested in learning more about your organization and how I can be part of the journey towards financial enlightenment and generational stewardship.`
    onWhatsApp(message)
  }

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-900/20 blur-[120px] rounded-full animate-pulse" />
          <div
            className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-up">
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-12 h-px bg-gold/40" />
              <span className="text-gradient-gold text-[11px] tracking-[0.6em] font-black uppercase">
                Kingdom Economics
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.85] mb-8 text-white uppercase tracking-tighter">
              ROHN <br />
              <span className="text-gradient-gold italic font-normal font-serif">
                JOACHIM
              </span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light italic border-l-2 border-gold/20 pl-8">
              &ldquo;The blueprint for those who seek not just success, but the{" "}
              <span className="text-white font-bold underline decoration-gold/30">
                dominion
              </span>{" "}
              that follows it.&rdquo;
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button
                onClick={() => onNavigate("book")}
                className="btn-luxury"
              >
                The Publication
              </button>
              <button
                onClick={() => onNavigate("principles")}
                className="group flex items-center space-x-4"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-all">
                  Core Principles
                </span>
                <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-all">
                  <svg
                    className="w-3 h-3 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="relative reveal-up" style={{ transitionDelay: "0.3s" }}>
            <div className="absolute -inset-10 border border-white/5 rounded-full animate-spin-slow" />
            <div className="relative z-10 float">
              <Image
                src="https://res.cloudinary.com/dfuibw321/image/upload/v1770140000/banner_wop2et.jpg"
                width={600}
                height={650}
                className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10"
                alt="The Visionary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 lg:py-40 relative bg-black">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            <div className="reveal-up space-y-10">
              <div className="gloss-card p-1 items-center justify-center inline-flex px-6 rounded-full">
                <span className="text-gradient-gold text-[9px] font-black uppercase tracking-[0.4em]">
                  The Vision
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-white font-bold font-serif italic">
                Legacy over <span className="text-gradient-gold">Liquidity.</span>
              </h2>
              <p className="text-white/50 text-lg lg:text-xl leading-relaxed font-light text-justify">
                Uplifting Money Connections (U.M.C) envisions a world where
                individuals are financially enlightened, purpose-driven, and
                connected to opportunities that create lasting impact. We believe
                wealth is a tool for stewardship, not just a goal for consumption.
              </p>
            </div>
            <div
              className="reveal-up space-y-10"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="gloss-card p-1 items-center justify-center inline-flex px-6 rounded-full">
                <span className="text-gradient-gold text-[9px] font-black uppercase tracking-[0.4em]">
                  The Mission
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-white font-bold font-serif italic">
                Empowerment via{" "}
                <span className="text-gradient-gold">Enlightenment.</span>
              </h2>
              <p className="text-white/50 text-lg lg:text-xl leading-relaxed font-light text-justify">
                To educate, connect, and empower. Through financial education,
                mentorship, and faith-based principles, we equip the chosen to
                rise beyond limitation and create generational change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
