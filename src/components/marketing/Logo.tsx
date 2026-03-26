"use client";

export function LogoIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      {/* Stem */}
      <path d="M16 28 L16 14" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left leaf - small */}
      <path d="M16 22 C12 20 8 18 8 14 C12 14 15 17 16 22" fill="#22C55E" opacity="0.7" />

      {/* Right leaf - larger */}
      <path d="M16 18 C20 15 24 12 26 8 C22 9 18 13 16 18" fill="#22C55E" />

      {/* Top leaf bud */}
      <path d="M16 14 C14 10 12 6 14 3 C16 5 17 9 16 14" fill="#4B5EFC" opacity="0.6" />

      {/* Small dot - seed/root */}
      <circle cx="16" cy="29" r="1.2" fill="#111" />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoIcon />
      <span className="text-[17px] font-semibold tracking-[-0.02em] text-[#111]">ceres</span>
    </div>
  );
}

export function LogoIconLight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 28 L16 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <path d="M16 22 C12 20 8 18 8 14 C12 14 15 17 16 22" fill="#22C55E" opacity="0.5" />
      <path d="M16 18 C20 15 24 12 26 8 C22 9 18 13 16 18" fill="#22C55E" opacity="0.7" />
      <path d="M16 14 C14 10 12 6 14 3 C16 5 17 9 16 14" fill="#4B5EFC" opacity="0.4" />
      <circle cx="16" cy="29" r="1.2" fill="white" opacity="0.5" />
    </svg>
  );
}
