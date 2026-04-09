"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ClaudeBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem("claude-banner-dismissed");
    if (!wasDismissed) {
      setDismissed(false);
      const t = setTimeout(() => setVisible(true), 100);
      return () => clearTimeout(t);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(() => {
      setDismissed(true);
      sessionStorage.setItem("claude-banner-dismissed", "1");
    }, 300);
  };

  if (dismissed) return null;

  return (
    <div
      className="hidden lg:block fixed top-16 left-0 right-0 z-40 h-10 bg-[#F8F5F0] border-b border-[#E8E4DF] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="h-full flex items-center justify-center gap-2 px-4">
        <Link
          href="/claude-business"
          className="flex items-center gap-2 group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.google.com/s2/favicons?domain=claude.ai&sz=32"
            alt="Claude"
            width={14}
            height={14}
            className="rounded-sm"
          />
          <span className="text-[11px] text-[#8B7355] font-medium group-hover:text-[#6B5335] transition-colors">
            Decouvrez comment Claude accelere votre business B2B
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-[#8B7355] group-hover:text-[#6B5335] transition-colors"
          >
            <path
              d="M4.5 3L7.5 6L4.5 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <button
          onClick={handleDismiss}
          className="absolute right-4 text-[#8B7355]/50 hover:text-[#8B7355] transition-colors"
          aria-label="Fermer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M4 4L10 10M10 4L4 10"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
