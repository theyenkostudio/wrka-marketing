import { Wallet, ShieldCheck, TrendingUp, Clock } from "lucide-react";

const proBenefits = [
  {
    title: "Instant Digital Payments",
    desc: "Get paid via MoMo or Bank Transfer immediately after job completion. No more debt chasing.",
    icon: <Wallet className="w-5 h-5" />,
    className: "col-span-12 md:col-span-7 bg-black/[0.02] border border-black/[0.05]"
  },
  {
    title: "Verified Reputation",
    desc: "Every job builds your rating. Let your work speak for itself with a digital profile clients trust.",
    icon: <ShieldCheck className="w-5 h-5" />,
    className: "col-span-12 md:col-span-5 bg-white border border-black/[0.05]"
  },
  {
    title: "Set Your Own Hours",
    desc: "Toggle your availability. Work when you want, where you want. You are the boss.",
    icon: <Clock className="w-5 h-5" />,
    className: "col-span-12 md:col-span-5 bg-white border border-black/[0.05]"
  },
  {
    title: "Premium Contracts",
    desc: "Access corporate and high-end residential jobs that were previously out of reach.",
    icon: <TrendingUp className="w-5 h-5" />,
    className: "col-span-12 md:col-span-7 bg-brand-ink text-white"
  }
];

export function ProBento() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-4 auto-rows-[280px]">
          {proBenefits.map((b, i) => (
            <div key={i} className={`rounded-[40px] p-10 flex flex-col justify-between ${b.className}`}>
              <div className="w-12 h-12 rounded-2xl border border-current opacity-20 flex items-center justify-center">
                {b.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{b.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed font-sans">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
