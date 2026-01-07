"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-paper">
      {/* Background Decorative Element - Soft Gradient Orb */}
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-6 grid grid-cols-12 gap-8 items-center z-10">
        
        {/* LEFT: The Typography Statement */}
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-sans text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue mb-6 block">
              The Gold Standard
            </span>
            
            <h1 className="heading-statement text-5xl sm:text-7xl md:text-[110px] text-brand-ink mb-8">
              Reliability <br />
              <span className="italic font-normal text-brand-muted/40">Redefined.</span>
            </h1>

            <p className="max-w-md text-lg text-brand-muted leading-relaxed mb-10 font-sans">
              Wrka isn't just an app; it's your private concierge for home excellence. We connect you with the top 1% of local craftsmen.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="bg-brand-ink text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-sm tracking-wide hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                BOOK A SERVICE
              </button>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-paper bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
                </div>
                <div className="pl-4 text-xs font-bold text-brand-muted">
                  +2k Happy Homeowners
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: The "Product" Statement */}
        <div className="col-span-12 lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20"
          >
            {/* Main Image "Frame" */}
            <div className="glass-card p-4 rounded-[40px] rotate-2 transition-transform hover:rotate-0 duration-700">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
                <Image 
                  src="/hero-handyman.png" // Use the image we discussed
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Floating UI Card inside the image */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-2xl bg-white/80 border-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-bold text-brand-blue uppercase">Confirmed Pro</p>
                      <p className="text-sm font-bold text-brand-ink">Emmanuel K. — Electrician</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative "Stat" Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white shadow-statement p-6 rounded-3xl z-30 hidden md:block"
            >
              <p className="text-3xl font-serif text-brand-ink italic">4.9/5</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Average Rating</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
