"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 glass-nav shadow-[0_20px_40px_rgba(11,28,48,0.06)]">
      <div className="flex justify-between items-center px-6 md:px-16 w-full h-20 max-w-[1920px] mx-auto">
        <Logo />

        <div className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface border-b-2 border-gold pb-1 font-[family-name:var(--font-manrope)] font-semibold tracking-tight" href="/#services">
            Services
          </a>
          <a className="text-on-surface/60 font-medium hover:text-gold transition-all duration-300" href="/#insights">
            Insights
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-surface-container-highest/60 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-on-surface">
            EN / 繁中
          </button>
          <button
            className="md:hidden text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="flex flex-col gap-4 bg-white/95 glass-nav px-6 py-6 md:hidden">
          <a href="/#services" onClick={() => setMobileOpen(false)} className="text-on-surface font-semibold">Services</a>
          <a href="/#insights" onClick={() => setMobileOpen(false)} className="text-on-surface/60">Insights</a>
        </div>
      )}
    </nav>
  );
}
