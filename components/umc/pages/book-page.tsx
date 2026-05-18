"use client"

import Image from "next/image"
import { useRevealAnimation } from "@/hooks/use-reveal-animation"

interface BookPageProps {
  onWhatsApp: (message: string) => void
}

const bookChapters = [
  "The Seeds of Mindset",
  "The Thorns of Integrity",
  "Blooming Assets",
  "Seasonal Stewardship",
]

export function BookPage({ onWhatsApp }: BookPageProps) {
  useRevealAnimation()

  const handleOrderBook = () => {
    const message = `Hello U.M.C, I would like to order a copy of "Money Like A Rose" by Rohn Joachim. Please provide me with pricing and delivery details.`
    onWhatsApp(message)
  }

  return (
    <main className="pt-32 pb-40">
      <section className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Book Image */}
          <div className="reveal-up">
            <div className="relative float">
              <Image
                src="https://res.cloudinary.com/dfuibw321/image/upload/v1770139997/book_mqkaar.jpg"
                width={500}
                height={700}
                className="w-full max-w-md mx-auto rounded-lg shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/5"
                alt="Money Like A Rose Book"
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="reveal-up">
            <span className="text-gradient-gold text-[12px] font-black tracking-[0.8em] uppercase mb-6 block">
              The Sacred Manuscript
            </span>
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight uppercase mb-8">
              Money Like <br />
              <span className="text-gradient-gold italic font-serif font-normal">
                A Rose
              </span>
            </h2>
            <p className="text-white/60 text-lg lg:text-xl leading-loose font-light mb-12 italic border-l-2 border-gold/40 pl-8">
              &ldquo;Money is like a rose—it requires the right soil to grow, careful
              hands to prune, and the strength of thorns to protect its
              beauty.&rdquo;
            </p>
            <div className="gloss-card p-8 lg:p-12 rounded-[40px] mb-12">
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-6">
                Inside the pages
              </h4>
              <div className="grid grid-cols-2 gap-4 text-white/40 text-sm italic">
                {bookChapters.map((chapter) => (
                  <p key={chapter}>• {chapter}</p>
                ))}
              </div>
            </div>
            <button onClick={handleOrderBook} className="btn-luxury w-full">
              Order Your Copy
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
