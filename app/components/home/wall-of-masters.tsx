"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const proPhotos = [
  { src: "/images/electrical.png", name: "Kofi", trade: "Electrician" },
  { src: "/images/hairdresser.png", name: "Rita", trade: "Hairdresser" },
  { src: "/images/carpenter.png", name: "Yaw", trade: "Carpenter" },
  { src: "/images/plumber.png", name: "Kwasi", trade: "Plumber" },
  { src: "/images/hvac-1.png", name: "Ibrahim", trade: "AC Tech" },
  { src: "/images/painter-1.png", name: "Musa", trade: "Painter" },
  { src: "/images/mechanic.webp", name: "Kwame", trade: "Mechanic" },
];

export default function ProGalleryMarquee() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-ink">
            Turn Your Skills Into <span className="italic font-normal text-brand-muted/30">Income.</span>
          </h2>
          <p className="text-brand-muted mt-3 max-w-md">
            Join Wrka as a verified professional. Set your own rates, choose your jobs, and earn on your terms.
          </p>
        </div>
        <div className="hidden md:block text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">5,000+ Professionals Earning</p>
            <p className="text-[10px] text-brand-muted/60">Ghana • Nigeria</p>
        </div>
      </div>

      {/* The Image Track */}
      <div className="flex pointer-events-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-4 pr-4"
        >
          {/* Duplicate for seamless loop */}
          {[...proPhotos, ...proPhotos].map((pro, i) => (
            <div 
              key={i} 
              className="relative w-70 h-95 md:w-87.5 md:h-120 rounded-4xl overflow-hidden border border-black/5 group"
            >
              {/* The Artisan Image */}
              <div className="absolute inset-0 bg-slate-200">
                 {/* Use high-res, professional shots of artisans 
                    in their branded Wrka. work gear 
                 */}
                 <Image 
                    src={pro.src} 
                    alt={pro.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>

              {/* Minimalist Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-sm font-bold text-brand-ink leading-none">{pro.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted mt-2 font-mono">{pro.trade}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
