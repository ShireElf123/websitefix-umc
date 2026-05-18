"use client"

import { useRevealAnimation } from "@/hooks/use-reveal-animation"

interface PrinciplesPageProps {
  onWhatsApp: (message: string) => void
}

const principles = [
  {
    number: "01",
    title: "Divine Stewardship",
    description:
      "Wealth is entrusted, not owned. Our methodology focuses on managing resources with integrity to ensure they multiply for the benefit of generations.",
  },
  {
    number: "02",
    title: "Strategic Wisdom",
    description:
      "Financial literacy is the first step toward freedom. We simplify complex economic systems into actionable, biblical blueprints for success.",
  },
  {
    number: "03",
    title: "Generational Impact",
    description:
      "A good man leaves an inheritance. We focus on building businesses and assets that outlive the individual and sustain the family line.",
  },
]

const programs = [
  {
    title: "The Vanguard",
    description: "Exclusive 1-on-1 strategic consulting with Rohn Joachim.",
  },
  {
    title: "Legacy Circles",
    description: "Group-based financial enlightenment and network expansion.",
  },
  {
    title: "Kingdom Youth",
    description: "Planting seeds of economic power in the next generation.",
  },
]

export function PrinciplesPage({ onWhatsApp }: PrinciplesPageProps) {
  useRevealAnimation()

  const handleProgramInquiry = (programTitle: string) => {
    const message = `Hello U.M.C, I am interested in the "${programTitle}" mentorship program. Please provide me with more details about enrollment, pricing, and what the program entails.`
    onWhatsApp(message)
  }

  const handleProspectusRequest = () => {
    const message = `Hello U.M.C, I would like to request a prospectus for your mentorship programs. Please send me information about The Vanguard, Legacy Circles, and Kingdom Youth programs.`
    onWhatsApp(message)
  }

  return (
    <main className="pt-32 pb-40">
      <section className="container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-24 lg:mb-32 reveal-up">
          <span className="text-gradient-gold text-[11px] font-black tracking-[0.8em] uppercase mb-4 block">
            The UMC Ethos
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter">
            KINGDOM <br />
            <span className="text-gradient-gold italic font-normal font-serif">
              PRINCIPLES
            </span>
          </h2>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              className="gloss-card p-8 lg:p-12 rounded-[40px] reveal-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-gradient-gold text-3xl lg:text-4xl font-black mb-8 italic">
                {principle.number}.
              </div>
              <h4 className="text-white text-xl lg:text-2xl mb-6 font-[var(--font-cinzel)]">
                {principle.title}
              </h4>
              <p className="text-white/40 leading-relaxed text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mentorship Section */}
        <div className="mt-24 lg:mt-40 gloss-card rounded-[40px] lg:rounded-[60px] p-8 lg:p-20 reveal-up">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl text-white font-serif italic mb-8">
                Mentorship <br />
                <span className="text-gradient-gold">Programs</span>
              </h2>
              <ul className="space-y-6">
                {programs.map((program) => (
                  <li key={program.title} className="flex items-start space-x-4">
                    <button
                      onClick={() => handleProgramInquiry(program.title)}
                      className="w-6 h-6 rounded-full border border-gold flex-shrink-0 mt-1 hover:bg-gold/20 transition-colors cursor-pointer"
                    />
                    <button
                      onClick={() => handleProgramInquiry(program.title)}
                      className="text-white/60 text-left hover:text-white/80 transition-colors"
                    >
                      <strong className="text-white">{program.title}:</strong>{" "}
                      {program.description}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/50 p-8 lg:p-10 rounded-[40px] border border-white/5">
              <p className="text-white/40 italic mb-8">
                &ldquo;Education is the movement from darkness to light.&rdquo;
              </p>
              <button onClick={handleProspectusRequest} className="btn-luxury w-full">
                Request Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
