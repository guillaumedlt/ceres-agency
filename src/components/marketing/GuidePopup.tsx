"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const guides = [
  {
    title: "Guide RevOps Ultime",
    desc: "62 pages de frameworks, templates et checklists pour structurer vos operations commerciales.",
    href: "/guide-revops-ultime",
    badge: "62 pages",
    color: "#FF7A59",
    cover: "RevOps",
    coverSub: "Ultime",
  },
  {
    title: "Guide Claude & Marketing B2B",
    desc: "55 pages pour maitriser Claude et Claude Code. Prompts, scripts MCP, workflows Make.",
    href: "/guide-claude-marketing",
    badge: "55 pages",
    color: "#D4A27F",
    cover: "Claude",
    coverSub: "Marketing",
  },
  {
    title: "Guide IA Commercial",
    desc: "42 pages, 25 prompts prouves et 3 workflows Make prets a importer.",
    href: "/guide-ia-commercial",
    badge: "42 pages",
    color: "#6D00CC",
    cover: "IA",
    coverSub: "Commercial",
  },
  {
    title: "Guide Data Quality CRM",
    desc: "Audit, nettoyage et gouvernance de votre base CRM. La fondation pour l'IA.",
    href: "/guide-data-quality-crm",
    badge: "Playbook",
    color: "#22C55E",
    cover: "Data",
    coverSub: "Quality",
  },
  {
    title: "Guide Migration CRM",
    desc: "Comment changer de CRM sans tout casser. Audit, mapping, dedup, tests, formation.",
    href: "/guide-migration-crm",
    badge: "Guide",
    color: "#4B5EFC",
    cover: "Migration",
    coverSub: "CRM",
  },
  {
    title: "Guide Outbound B2B",
    desc: "Strategie outbound complete : ICP, sequences, scoring, mesure des resultats.",
    href: "/guide-outbound-b2b",
    badge: "Guide",
    color: "#6C5CE7",
    cover: "Outbound",
    coverSub: "B2B",
  },
];

export default function GuidePopup() {
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

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

  const active = guides[activeIdx];

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[340px] max-w-[calc(100vw-24px)] rounded-2xl bg-white border border-[#E8E8E8] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden animate-[fadeSlideIn_0.4s_ease-out]">
      {/* Header */}
      <div className="bg-[#111] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70 font-semibold uppercase tracking-wider">Gratuit</span>
          <span className="text-[11px] text-white/70 font-medium">{guides.length} guides disponibles</span>
        </div>
        <button onClick={dismiss} className="text-white/30 hover:text-white/60 transition-colors" aria-label="Fermer">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Cover + info */}
        <div className="flex items-start gap-3 mb-3">
          {/* Mini cover */}
          <div
            className="w-[64px] h-[88px] rounded-md shrink-0 relative overflow-hidden flex flex-col justify-end p-2"
            style={{
              background: `linear-gradient(135deg, ${active.color} 0%, ${active.color}CC 100%)`,
              boxShadow: `0 4px 12px -2px ${active.color}40`,
            }}
          >
            <div className="absolute top-1.5 right-1.5">
              <div className="w-1.5 h-1.5 rounded-sm bg-white/40" />
            </div>
            <p className="text-[10px] font-bold text-white leading-none tracking-tight">{active.cover}</p>
            <p className="text-[8px] text-white/70 leading-none mt-0.5">{active.coverSub}</p>
            <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "rgba(255,255,255,0.3)" }} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-[#111] leading-tight mb-1">{active.title}</p>
            <p className="text-[10px] text-[#999] leading-[1.5] mb-2">{active.desc}</p>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F5F5F5] text-[#999]">{active.badge}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={active.href}
          onClick={dismiss}
          className="block w-full py-2 rounded-lg bg-[#111] text-white text-[12px] font-medium text-center hover:bg-[#222] transition-colors mb-3"
        >
          Telecharger ce guide
        </Link>

        {/* Dots navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {guides.map((g, i) => (
              <button
                key={g.href}
                type="button"
                onClick={() => setActiveIdx(i)}
                className="transition-all"
                aria-label={`Voir ${g.title}`}
                style={{
                  width: i === activeIdx ? 16 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === activeIdx ? g.color : "#E8E8E8",
                }}
              />
            ))}
          </div>
          <Link href="/guides" onClick={dismiss} className="text-[10px] text-[#666] hover:text-[#111] font-medium transition-colors">
            Voir tous &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
