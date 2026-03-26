"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function GuidePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("guide-popup-dismissed");
    if (dismissed) return;

    // Show after 5 seconds
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem("guide-popup-dismissed", "1");
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[300px] rounded-2xl bg-white border border-[#E8E8E8] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden animate-[fadeSlideIn_0.4s_ease-out]">
      {/* Header */}
      <div className="bg-[#111] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#FF7A59]/20 text-[#FF7A59] font-semibold uppercase tracking-wider">Gratuit</span>
          <span className="text-[11px] text-white/70 font-medium">Guide RevOps</span>
        </div>
        <button onClick={dismiss} className="text-white/30 hover:text-white/60 transition-colors" aria-label="Fermer">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-[14px] font-semibold text-[#111] leading-tight mb-1">Le Guide RevOps Ultime</p>
        <p className="text-[11px] text-[#999] leading-[1.5] mb-3">62 pages de frameworks, templates et checklists pour structurer vos operations commerciales.</p>
        <div className="flex items-center gap-2 mb-3">
          {["62 pages", "9 chapitres", "7 templates"].map((t) => (
            <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-[#F5F5F5] text-[#999]">{t}</span>
          ))}
        </div>
        <Link
          href="/guide-revops-ultime"
          onClick={dismiss}
          className="block w-full py-2 rounded-lg bg-[#FF7A59] text-white text-[12px] font-medium text-center hover:bg-[#E86D4F] transition-colors"
        >
          Telecharger gratuitement
        </Link>
      </div>
    </div>
  );
}
