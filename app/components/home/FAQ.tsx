"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How do I know the artisan is skilled?",
    answer: "Every artisan on Wrka undergoes a multi-stage vetting process including a practical trade test and historical work verification before they can accept their first job."
  },
  {
    question: "Is my payment secure?",
    answer: "Yes. Payments are held in escrow and only released to the artisan once you confirm the job has been completed to your satisfaction through the app."
  },
  {
    question: "What happens if something is damaged?",
    answer: "Wrka provides a service guarantee. If an artisan causes accidental damage during a project, our support team will mediate and ensure the issue is resolved or compensated."
  },
  {
    question: "Can I book for my family in Ghana while I'm abroad?",
    answer: "Absolutely. You can set the service location to any supported neighborhood in Ghana or Nigeria, pay with your international card, and track the progress in real-time."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white border-t border-black/[0.03]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-12">
          
          {/* Left Side: Static Header */}
          <div className="col-span-12 lg:col-span-4">
            {/* <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-4 block">
              Support // FAQ
            </span> */}
            <h2 className="heading-statement text-5xl text-brand-ink">
              Common <br />
              <span className="italic font-normal text-brand-muted/30">Questions.</span>
            </h2>
          </div>

          {/* Right Side: Accordions */}
          <div className="col-span-12 lg:col-span-8">
            <div className="border-t border-black/[0.08]">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-black/[0.08]">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className="text-xl font-bold text-brand-ink group-hover:text-brand-blue transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      className="text-brand-muted"
                    >
                      <Plus className="w-6 h-6" />
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
                        <p className="pb-8 text-brand-muted leading-relaxed max-w-2xl font-sans">
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
      </div>
    </section>
  );
}
