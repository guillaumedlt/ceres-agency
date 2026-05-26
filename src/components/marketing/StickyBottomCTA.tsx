"use client";

import { useEffect, useState } from "react";

interface StickyBottomCTAProps {
  message: string;
  ctaLabel: string;
  ctaHref: string;
  storageKey?: string;
}

export default function StickyBottomCTA({
  message,
  ctaLabel,
  ctaHref,
  storageKey = "sticky-cta-default",
}: StickyBottomCTAProps) {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(`sticky-cta-closed-${storageKey}`) === "true") {
      setClosed(true);
      return;
    }
    setClosed(false);
    function onScroll() {
      const h = document.documentElement;
      const pct = h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1);
      if (pct > 0.25) setVisible(true);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [storageKey]);

  if (closed || !visible) return null;

  function handleClose() {
    sessionStorage.setItem(`sticky-cta-closed-${storageKey}`, "true");
    setClosed(true);
  }

  return (
    <div
      className="fixed bottom-3 left-3 right-3 z-40 md:left-auto md:right-6 md:bottom-6 md:max-w-[460px] animate-in fade-in slide-in-from-bottom-4 duration-300"
      role="complementary"
      aria-label="Suggestion : prendre rendez-vous"
    >
      <div className="rounded-2xl bg-[#111] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)] p-4 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[13px] text-white font-medium leading-tight">{message}</p>
          <p className="text-[10px] text-white/55 mt-1">30 min &middot; Gratuit &middot; Sans engagement</p>
        </div>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 py-2 rounded-md bg-[#FF7A59] text-white text-[12px] font-medium hover:bg-[#E86D4F] transition-colors"
        >
          {ctaLabel}
        </a>
        <button
          onClick={handleClose}
          className="shrink-0 text-white/40 hover:text-white/80 transition-colors p-1"
          aria-label="Fermer"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
