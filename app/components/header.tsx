"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

 const menuVariants: Variants = {
    closed: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.2 } 
    },
    open: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4 md:py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card py-3 md:py-4 px-6 md:px-8 rounded-2xl border border-black/[0.05] relative bg-white/80 backdrop-blur-xl">
        
        {/* LOGO */}
        <div className="text-2xl font-bold tracking-tighter z-[110]">
          <Link href={'/'} onClick={() => setIsOpen(false)}>
            Wrka<span className="text-brand-blue">.</span>
          </Link>
        </div>
        
        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-brand-muted">
          <a href="#" className="hover:text-brand-ink transition-colors">Find a Pro</a>
          <Link href="/professionals" className="hover:text-brand-ink transition-colors">For Professionals</Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-brand-ink text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/5">
            Get the App
          </button>
          
          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-ink z-[110]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute top-full left-0 right-0 mt-2 p-4 md:hidden"
            >
              <div className="bg-white rounded-3xl border border-black/[0.05] p-8 shadow-2xl flex flex-col gap-8">
                <div className="flex flex-col gap-6 text-lg font-bold text-brand-ink">
                  <a href="#" onClick={() => setIsOpen(false)}>Find a Pro</a>
                  <Link href="/professionals" onClick={() => setIsOpen(false)}>For Professionals</Link>
                </div>
                
                <div className="pt-6 border-t border-black/[0.05]">
                  <button className="w-full bg-brand-ink text-white py-4 rounded-2xl font-bold">
                    Download App
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
