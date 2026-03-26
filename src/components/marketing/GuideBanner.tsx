"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function GuideBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("guide-banner-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem("guide-banner-dismissed", "1");
  }

  if (!visible) return null;

  return (
    <div className="relative z-40 bg-[#111] border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-center gap-3">
        <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#FF7A59]/20 text-[10px] font-semibold text-[#FF7A59]">Nouveau</span>
        <p className="text-[12px] text-white/70">
          Le Guide RevOps Ultime : 62 pages de frameworks et templates.
        </p>
        <Link
          href="/guide-revops-ultime"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF7A59] text-white text-[11px] font-medium hover:bg-[#E86D4F] transition-colors shrink-0"
        >
          Telecharger gratuitement
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
        </Link>
        <button
          onClick={dismiss}
          className="ml-2 text-white/30 hover:text-white/60 transition-colors shrink-0"
          aria-label="Fermer"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>
        </button>
      </div>
    </div>
  );
}
