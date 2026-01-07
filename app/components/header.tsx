import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card py-4 px-8 rounded-2xl">
        <div className="text-2xl font-bold tracking-tighter">
          <Link href={'/'}>
            Wrka<span className="text-brand-blue">.</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
          <a href="#" className="hover:text-brand-ink transition-colors">Find a Pro</a>
          <Link href="/professionals" className="hover:text-brand-ink transition-colors">For Professionals</Link>
        </div>

        <button className="bg-brand-ink text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:scale-105 active:scale-95 transition-all">
          Download App
        </button>
      </div>
    </nav>
  );
}
