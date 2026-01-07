"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Apple, Play } from "lucide-react";
import Image from "next/image";

export default function AppShowcase() {
  return (
    <section className="py-24 bg-brand-paper overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* THE STAGE: This is the "Family.co" style container */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-4/5 bg-black/2 border border-black/5 rounded-[48px] p-8 flex items-center justify-center overflow-hidden"
            >
              {/* Subtle background pattern for texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px]" />
              
              {/* YOUR IMAGE: Seated inside the stage */}
              <div className="relative w-full h-full rounded-4xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-700">
                <Image
                  src="/app-mockup-main.jpeg" // Replace with your high-res image
                  alt="Wrka App Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* COPY SECTION */}
          <div className="w-full lg:w-1/2">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-6 block">
              Experience // v1.0
            </span>
            <h2 className="heading-statement text-5xl md:text-6xl text-brand-ink mb-8">
              A Skilled Pro <br />
              <span className="italic font-normal text-brand-muted/40">
                In Your Pocket.
              </span>
            </h2>

            <p className="text-xl text-brand-muted mb-10 leading-relaxed max-w-lg">
              Stop asking for numbers on WhatsApp. Download Wrka to instantly
              connect with verified artisans in Kumasi and Lagos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
              {[
                "Book in under 60 seconds",
                "Verified background-checks",
                "Upfront pricing",
                "Secure escrow payments",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-ink w-5 h-5 opacity-20" />
                  <span className="text-sm font-bold text-brand-ink/80">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-black/[0.05]">
              {/* App Store */}
              <button className="bg-brand-ink text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-brand-blue transition-all duration-300 group">
                <Apple className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest opacity-60 font-mono">App Store</p>
                  <p className="text-lg font-bold leading-none">Download</p>
                </div>
              </button>

              {/* Play Store */}
              <button className="bg-transparent border-2 border-brand-ink text-brand-ink px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-brand-ink hover:text-white transition-all duration-300 group">
                <Play className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Google Play</p>
                  <p className="text-lg font-bold leading-none">Get it on</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
