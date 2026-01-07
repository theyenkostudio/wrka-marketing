"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const proFaqs = [
  {
    question: "How much does it cost to join?",
    answer: "Joining the Wrka network is free. We only earn when you earn by taking a small, transparent service fee on completed jobs to maintain the platform and insurance."
  },
  {
    question: "How quickly do I get my money?",
    answer: "Instantly. Once the customer confirms the job is done, your funds are available for immediate withdrawal to your Mobile Money (MoMo) wallet or Bank Account."
  },
  {
    question: "Do I have to accept every job?",
    answer: "No. You have full control. You can toggle your availability 'Online' or 'Offline' and accept only the jobs that fit your schedule and location."
  },
  {
    question: "What if a customer refuses to pay?",
    answer: "Because we use an escrow system, the customer must fund the job before you start. This guarantees that the money is there and ready for you once the work is finished."
  }
];

export default function ProFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white border-t border-black/[0.05]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3">
            
            <h2 className="heading-statement text-5xl text-brand-ink">
              Expert <br />
              <span className="italic font-normal text-brand-muted/30">Guidance.</span>
            </h2>
            <p className="mt-6 text-sm text-brand-muted font-sans max-w-xs">
              Everything you need to know about scaling your craft with Wrka.
            </p>
          </div>

          <div className="w-full md:w-2/3 border-t border-black/[0.08]">
            {proFaqs.map((faq, i) => (
              <div key={i} className="border-b border-black/[0.08]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-bold text-brand-ink group-hover:text-brand-blue transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    className="text-brand-muted"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-brand-muted leading-relaxed font-sans max-w-xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
