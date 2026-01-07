"use client";
import { motion } from "framer-motion";
import { Wrench, Zap, Droplets, Paintbrush, ShieldCheck, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Electrical Infrastructure",
    description: "Certified master electricians for smart home integration and heavy-duty wiring.",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    className: "col-span-12 md:col-span-8 row-span-2 bg-blue-50/50",
    image: "/electrical.png", // The image we generated
  },
  {
    title: "Master Plumbing",
    description: "Expert leak detection and high-end fixture installation.",
    icon: <Droplets className="w-6 h-6 text-cyan-600" />,
    className: "col-span-12 md:col-span-4 row-span-1 bg-slate-50",
  },
  {
    title: "Vetted Security",
    description: "Every pro is 100% background checked.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    className: "col-span-12 md:col-span-4 row-span-1 border-2 border-dashed border-slate-200 bg-white",
  },
  {
    title: "Painting & Finishes",
    description: "Museum-grade wall finishes and custom color matching.",
    icon: <Paintbrush className="w-6 h-6 text-purple-600" />,
    className: "col-span-12 md:col-span-6 row-span-1 bg-purple-50/30",
  },
  {
    title: "General Maintenance",
    description: "The 'Everything Else' squad. Fast, efficient, flawless.",
    icon: <Wrench className="w-6 h-6 text-orange-600" />,
    className: "col-span-12 md:col-span-6 row-span-1 bg-orange-50/30",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-brand-paper">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="heading-statement text-5xl md:text-7xl text-brand-ink mb-6">
              Expertise <br />
              <span className="italic font-normal text-brand-muted/40">In Every Detail.</span>
            </h2>
          </div>
          <p className="text-brand-muted font-sans max-w-xs text-sm leading-relaxed">
            From emergency repairs to aesthetic upgrades, our hand-selected professionals treat your home like a masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 auto-rows-[240px]">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`group relative rounded-[32px] overflow-hidden p-8 transition-all duration-500 hover:shadow-statement border border-black/5 ${s.className}`}
            >
              {/* Background Image for the "Hero" tile */}
              {s.image && (
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale" />
                </div>
              )}

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-black/5">
                    {s.icon}
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-brand-ink text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed max-w-[280px]">
                    {s.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
