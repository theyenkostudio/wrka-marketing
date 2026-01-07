"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { Star } from "lucide-react";

const artisans = [
  { name: "Kofi Mensah", trade: "Master Electrician", text: "Instant MoMo payments changed everything for my business.", loc: "Kumasi" },
  { name: "Oluwaseun A.", trade: "Plumbing Specialist", text: "The vetting process builds real trust with high-end clients.", loc: "Lagos" },
  { name: "Yaw Boateng", trade: "Professional Carpenter", text: "I toggle 'Online' and jobs just start appearing. It's magic.", loc: "Accra" },
  { name: "Ibrahim Bello", trade: "HVAC Technician", text: "Finally, a platform that respects the artisan's craft.", loc: "Ikeja" },
  { name: "Musa Chenje", trade: "Professional Painter", text: "My ratings on Wrka got me my biggest contract this year.", loc: "Victoria Island" },
];

export default function ProMarquee() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
      
        <h2 className="heading-statement text-6xl text-brand-ink">
          The Professional <br />
          <span className="italic font-normal text-brand-muted/30">Standard.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* Track 01: Moving Left */}
        <MarqueeTrack items={artisans} direction="left" speed={0.5} />
        
        {/* Track 02: Moving Right */}
        <MarqueeTrack items={artisans} direction="right" speed={0.5} />
      </div>
    </section>
  );
}

function MarqueeTrack({ items, direction, speed }: { items: any[], direction: "left" | "right", speed: number }) {
  const [isPaused, setIsPaused] = useState(false);
  
  // Create a triple-length array to ensure there's always content visible during the loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div 
      className="flex overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-6 pr-6"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: 30, // Very slow, stately pace
          ease: "linear",
          repeat: Infinity,
          paused: isPaused,
        }}
      >
        {duplicatedItems.map((pro, i) => (
          <div 
            key={i} 
            className="w-[420px] flex-shrink-0 bg-white border border-black/[0.06] p-10 rounded-[40px] transition-all duration-500 group-hover:border-black/[0.12]"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-slate-100 border border-black/[0.05]" />
              <div>
                <p className="text-sm font-bold text-brand-ink">{pro.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted font-mono">{pro.trade} • {pro.loc}</p>
              </div>
            </div>
            <p className="text-xl text-brand-ink/80 leading-[1.4] italic font-serif mb-8">
              {pro.text}
            </p>
            <div className="flex gap-1 text-yellow-500/20">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
