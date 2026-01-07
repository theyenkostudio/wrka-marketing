"use client";
import { ShieldCheck, Fingerprint, Award, FileCheck } from "lucide-react";

const safetySteps = [
  {
    title: "Identity Verification",
    desc: "Every artisan must provide valid government-issued ID (Ghana Card or NIN) before joining the platform.",
    icon: <Fingerprint className="w-5 h-5" />,
  },
  {
    title: "Criminal Background Check",
    desc: "We partner with local authorities to ensure every pro has a clean record and no history of misconduct.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Vetting & Skill Testing",
    desc: "Artisans undergo a practical assessment of their craft to ensure they meet our 'Master' quality standards.",
    icon: <Award className="w-5 h-5" />,
  },
];

export default function SafetySection() {
  return (
    <section className="py-32 bg-white border-t border-black/[0.03]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-4 block">
            Protocol 01 // Security
          </span> */}
          <h2 className="heading-statement text-6xl text-brand-ink mb-16">
            Your Safety is <br />
            <span className="italic font-normal text-brand-muted/30">Non-Negotiable.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.05] border border-black/[0.05] rounded-[32px] overflow-hidden">
          {safetySteps.map((step, i) => (
            <div key={i} className="bg-white p-12 transition-colors hover:bg-slate-50/50">
              <div className="w-10 h-10 rounded-full border border-black/[0.08] flex items-center justify-center mb-8">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-ink mb-4">{step.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
