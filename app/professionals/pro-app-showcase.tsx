"use client";
import { motion } from "framer-motion";
import { Apple, Play, Smartphone, Bell, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function ProAppShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          
          {/* THE PRO STAGE: Surgical containment for the Pro App mockup */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square bg-slate-50 border border-black/[0.05] rounded-[48px] p-12 flex items-center justify-center"
            >
              {/* This is where your Pro App screenshot goes */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.2)] bg-brand-ink">
                <Image
                  src="/pro-app-mockup.jpg" // High-res image of the Pro Dashboard
                  alt="Wrka Pro App Interface"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Status Label */}
              <div className="absolute top-20 -left-6 bg-white border border-black/[0.05] p-4 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ink">New Request Nearby</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* PRO APP COPY */}
          <div className="w-full lg:w-1/2">
           
            <h2 className="heading-statement text-5xl md:text-6xl text-brand-ink mb-8">
              The Command Center <br />
              <span className="italic font-normal text-brand-muted/40">
                For Your Trade.
              </span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 text-brand-blue"><Bell /></div>
                <div>
                  <h4 className="font-bold text-brand-ink mb-1">Real-time Job Alerts</h4>
                  <p className="text-sm text-brand-muted leading-relaxed">Get notified the moment a customer in your area needs your specific expertise.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 text-brand-blue"><BarChart3 /></div>
                <div>
                  <h4 className="font-bold text-brand-ink mb-1">Earnings Analytics</h4>
                  <p className="text-sm text-brand-muted leading-relaxed">Track your daily, weekly, and monthly revenue with transparent fee breakdowns.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-8 border-t border-black/[0.05]">
              {/* Pro App Stores */}
              <button className="bg-brand-ink text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-brand-blue transition-all group">
                <Apple className="w-7 h-7" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Wrka Pro</p>
                  <p className="text-lg font-bold leading-none">iOS</p>
                </div>
              </button>

              <button className="bg-transparent border-2 border-brand-ink text-brand-ink px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-brand-ink hover:text-white transition-all group">
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Wrka Pro</p>
                  <p className="text-lg font-bold leading-none">Android</p>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
