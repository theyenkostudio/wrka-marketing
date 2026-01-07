export function ProProcess() {
  return (
    <section className="py-32 bg-brand-paper">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { num: "01", title: "Apply Online", text: "Submit your ID and trade certifications through our professional portal." },
            { num: "02", title: "Skill Assessment", text: "Pass our practical trade test and verify your past work quality." },
            { num: "03", title: "Launch Business", text: "Receive your Wrka kit and start accepting high-paying jobs." },
          ].map((step, i) => (
            <div key={i} className="relative">
              <span className="text-8xl font-serif italic text-brand-muted/10 absolute -top-10 -left-4 pointer-events-none">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-brand-ink mb-4 relative z-10">{step.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans relative z-10">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
