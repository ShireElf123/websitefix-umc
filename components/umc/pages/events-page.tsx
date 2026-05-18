"use client"

import { useRevealAnimation } from "@/hooks/use-reveal-animation"
import Image from "next/image"

interface EventsPageProps {
  onWhatsApp: (message: string) => void
}

const eventHighlights = [
  "Deep conversation about money",
  "3 course meal",
  "Love soft music",
  "Red carpet spotlight",
]

const futureEvents = [
  {
    type: "Masterclass",
    title: "Generational Assets Summit",
    date: "Aug 2026",
    active: true,
  },
  {
    type: "Symposium",
    title: "The Steward's Ball",
    date: "Oct 2026",
    active: false,
  },
]

export function EventsPage({ onWhatsApp }: EventsPageProps) {
  useRevealAnimation()

  const handleRegistration = () => {
    const message = `Hello U.M.C, I would like to register for the "Love and Money Conversations" event on 14 June at Blueberry Hill Hotel. Registration fee is R550pp. Please provide me with payment and booking details.`
    onWhatsApp(message)
  }

  const handleFutureEventInquiry = (eventTitle: string, eventDate: string) => {
    const message = `Hello U.M.C, I am interested in the upcoming "${eventTitle}" event scheduled for ${eventDate}. Please notify me when registration opens and provide more details.`
    onWhatsApp(message)
  }

  return (
    <main className="pt-32 pb-40">
      <section className="container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 reveal-up">
          <span className="text-gradient-gold text-[11px] font-black tracking-[0.8em] uppercase mb-4 block">
            UMC Presents
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter">
            LOVE{" "}
            <span className="text-gradient-gold italic font-serif font-normal lowercase">
              and
            </span>{" "}
            MONEY
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif italic text-gradient-gold mt-2">
            Conversations
          </h3>
          <p className="text-white/50 mt-6 text-lg max-w-xl mx-auto">
            With Rohn and Amelia Joachim
          </p>
        </div>

        {/* Event Flyer & Details */}
        <div className="max-w-5xl mx-auto reveal-up">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Event Flyer */}
            <div className="gloss-card p-4 rounded-[40px] overflow-hidden">
              <div className="relative aspect-square rounded-[32px] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dfuibw321/image/upload/v1779134309/IMG-20260518-WA0034_k1lwiv.jpg"
                  alt="Love and Money Conversations Event Flyer - With Rohn and Amelia Joachim"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-6">
              {/* Tagline */}
              <div className="gloss-card p-6 lg:p-8 rounded-3xl">
                <p className="text-white/70 text-lg lg:text-xl leading-relaxed font-serif italic">
                  &ldquo;Most couples date but very few intentionally build together&rdquo;
                </p>
              </div>

              {/* Event Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="gloss-card p-6 rounded-3xl">
                  <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest mb-2">
                    Date
                  </p>
                  <p className="text-lg lg:text-xl font-[var(--font-cinzel)] text-white">
                    14 June
                  </p>
                </div>
                <div className="gloss-card p-6 rounded-3xl">
                  <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest mb-2">
                    Time
                  </p>
                  <p className="text-lg lg:text-xl font-[var(--font-cinzel)] text-white">
                    6pm
                  </p>
                </div>
                <div className="gloss-card p-6 rounded-3xl col-span-2">
                  <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest mb-2">
                    Venue
                  </p>
                  <p className="text-lg lg:text-xl font-[var(--font-cinzel)] text-white">
                    Blueberry Hill Hotel
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="gloss-card p-6 lg:p-8 rounded-3xl text-center">
                <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest mb-2">
                  Registration Fee
                </p>
                <p className="text-4xl lg:text-5xl font-[var(--font-cinzel)] text-gradient-gold font-bold">
                  R550
                  <span className="text-lg text-white/50 ml-1">pp</span>
                </p>
              </div>

              {/* What's Included */}
              <div className="gloss-card p-6 lg:p-8 rounded-3xl">
                <h4 className="text-white/30 text-[9px] font-bold uppercase tracking-widest mb-4">
                  What&apos;s Included
                </h4>
                <ul className="space-y-3">
                  {eventHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-white/70">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Registration Button */}
              <button
                onClick={handleRegistration}
                className="btn-luxury w-full"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Future Events */}
        <div className="mt-24 lg:mt-32 reveal-up">
          <h4 className="text-white text-2xl lg:text-3xl font-[var(--font-cinzel)] mb-8 lg:mb-12 border-b border-white/10 pb-6">
            Future Gatherings
          </h4>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {futureEvents.map((event) => (
              <button
                key={event.title}
                onClick={() => event.active && handleFutureEventInquiry(event.title, event.date)}
                disabled={!event.active}
                className={`flex justify-between items-center p-6 lg:p-10 gloss-card rounded-3xl text-left w-full ${
                  !event.active ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <div>
                  <p
                    className={`text-[10px] uppercase font-black tracking-widest mb-2 ${
                      event.active ? "text-gradient-gold" : "text-white/30"
                    }`}
                  >
                    {event.type}
                  </p>
                  <h5
                    className={`text-lg lg:text-xl font-[var(--font-cinzel)] ${
                      event.active ? "text-white" : "text-white/50"
                    }`}
                  >
                    {event.title}
                  </h5>
                </div>
                <span className="text-white/30 text-xs uppercase font-black">
                  {event.date}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
