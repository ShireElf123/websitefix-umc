"use client"

import Image from "next/image"
import { useRevealAnimation } from "@/hooks/use-reveal-animation"

interface LeadershipPageProps {
  onWhatsApp: (message: string) => void
}

const leaders = [
  {
    name: "Rohn Joachim",
    role: "Founder & CEO",
    image:
      "https://res.cloudinary.com/dfuibw321/image/upload/v1770139994/ceo_xvf8xq.jpg",
    bio: "A visionary entrepreneur, author, and mentor focused on simplified financial principles and generational stewardship. Through U.M.C, Rohn aims to restore the dignity of wealth within the community.",
  },
  {
    name: "Amelia Joachim",
    role: "President",
    image:
      "https://res.cloudinary.com/dfuibw321/image/upload/v1770139993/president_v4i8jo.jpg",
    bio: "Leading with clarity and heart, Amelia steers the strategic growth and cultural impact of the organization, ensuring the mission remains aligned with its spiritual core.",
  },
]

export function LeadershipPage({ onWhatsApp }: LeadershipPageProps) {
  useRevealAnimation()

  const handleConnectWithLeadership = () => {
    const message = `Hello U.M.C, I would like to connect with the leadership team to discuss potential collaborations, mentorship opportunities, or learn more about your vision for financial stewardship.`
    onWhatsApp(message)
  }

  return (
    <main className="pt-32 pb-40">
      <section className="container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-24 lg:mb-32 reveal-up">
          <span className="text-gradient-gold text-[11px] font-black tracking-[0.8em] uppercase mb-4 block">
            The Architects
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter">
            LEADERSHIP
          </h2>
        </div>

        {/* Leaders Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-40">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="reveal-up"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-12 group">
                <div className="relative gloss-card rounded-[60px] overflow-hidden aspect-[4/5]">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                    alt={leader.name}
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-gradient-gold font-black tracking-[0.5em] text-[10px] uppercase">
                    {leader.role}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="text-4xl lg:text-5xl italic text-white font-serif">
                  {leader.name}
                </h3>
                <p className="text-white/40 leading-relaxed font-light text-lg italic">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Connect CTA */}
        <div className="mt-24 lg:mt-32 text-center reveal-up">
          <button
            onClick={handleConnectWithLeadership}
            className="btn-luxury"
          >
            Connect With Leadership
          </button>
        </div>
      </section>
    </main>
  )
}
