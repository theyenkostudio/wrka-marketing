"use client";
import { motion } from "framer-motion";

export default function ProHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 bg-brand-paper">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="heading-statement text-7xl md:text-[120px] text-brand-ink mb-8">
            Your Craft. <br />
            <span className="italic font-normal text-brand-muted/30">Our Platform.</span>
          </h1>
          <p className="max-w-xl text-xl text-brand-muted leading-relaxed mb-10">
            Join the elite network of artisans in Ghana and Nigeria. Stop chasing clients and start receiving high-value jobs directly on your phone.
          </p>
          <button className="bg-brand-ink text-white px-10 py-5 rounded-2xl font-bold hover:bg-brand-blue transition-all">
            APPLY TO JOIN
          </button>
        </div>
      </div>
    </section>
  );
}
