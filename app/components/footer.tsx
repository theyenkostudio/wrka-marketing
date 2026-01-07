export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-12 pb-24 border-b border-white/10">
          
          {/* Huge Conversion Block */}
          <div className="col-span-12 lg:col-span-8">
            <h2 className="heading-statement text-7xl md:text-[120px] leading-[0.85] tracking-tighter mb-12">
              READY TO <br />FIX IT?
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-brand-blue hover:text-white transition-all">
                APP STORE
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-all">
                PLAY STORE
              </button>
            </div>
          </div>

          {/* QR Code Area - Surgical Minimalism */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="p-4 bg-white rounded-3xl mb-6">
              <div className="w-32 h-32 bg-slate-100 flex items-center justify-center text-black/20 text-[10px] font-mono">
                [ QR CODE ]
              </div>
            </div>
            <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
              Scan to Download
            </p>
          </div>
        </div>

        {/* Legal & Brand */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter">
            Wrka<span className="text-brand-blue">.</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <p className="text-[10px] font-mono text-white/20">
            © 2026 WRKA TECH. LAGOS // ACCRA.
          </p>
        </div>
      </div>
    </footer>
  );
}
