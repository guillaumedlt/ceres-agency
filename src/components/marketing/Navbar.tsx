"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
  { label: "Diagnostic", href: "/audit-revops", desc: "Audit CRM, RevOps et data quality", color: "#FF7A59",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
  { label: "Fondation Data", href: "/audit-crm", desc: "CRM propre, KPIs alignes", color: "#22C55E",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg> },
  { label: "Deploiement IA", href: "/agents-ia", desc: "Agents IA par silo RevOps", color: "#6D00CC",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg> },
  { label: "Accompagnement", href: "/revops-part-time", desc: "Expert RevOps & IA chaque mois", color: "#4B5EFC",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg> },
];

const solutions = [
  { label: "Startups", href: "/revops-startup", desc: "5 a 50 personnes", color: "#22C55E",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
  { label: "PME", href: "/revops-pme", desc: "50 a 200 personnes", color: "#4B5EFC",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg> },
  { label: "Scale-ups", href: "/revops-scaleup", desc: "200 a 1 000 personnes", color: "#6C5CE7",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg> },
  { label: "Grands Groupes", href: "/revops-grand-groupe", desc: "1 000+ personnes", color: "#FF7A59",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg> },
];

const resources = [
  { label: "Qu'est-ce que le RevOps ?", href: "/revops", desc: "Le guide complet", color: "#FF7A59",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
  { label: "Blog", href: "/blog", desc: "Articles & analyses", color: "#4B5EFC",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg> },
  { label: "Guides", href: "/guides", desc: "Playbooks & frameworks", color: "#6C5CE7",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" /></svg> },
  { label: "Glossaire RevOps", href: "/glossaire", desc: "80+ termes expliques", color: "#22C55E",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg> },
  { label: "Outils", href: "/outils", desc: "173 outils B2B notes", color: "#FF7A59",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" /></svg> },
];

function Dropdown({ label, items, open, onOpen, onClose }: {
  label: string; items: typeof services; open: boolean; onOpen: () => void; onClose: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button type="button" className="flex items-center gap-1 text-[14px] text-[#666] hover:text-[#111] transition-colors">
        {label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={"transition-transform " + (open ? "rotate-180" : "")}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
          <div className="w-[340px] rounded-2xl border border-[#E8E8E8] bg-white p-2 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)]">
            {items.map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F7F7F7] transition-colors group">
                <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center" style={{ backgroundColor: s.color + "10", color: s.color }}>
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-semibold text-[#111] block">{s.label}</span>
                  <span className="text-[11px] text-[#999]">{s.desc}</span>
                </div>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 text-[#DDD] group-hover:text-[#999] group-hover:translate-x-0.5 transition-all">
                  <path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#F2F2F2]">
      <nav className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-[18px] font-bold tracking-[-0.03em] text-[#111]">
          ceres
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Dropdown label="Services" items={services} open={openMenu === "services"} onOpen={() => setOpenMenu("services")} onClose={() => setOpenMenu(null)} />
          <Dropdown label="Solutions" items={solutions} open={openMenu === "solutions"} onOpen={() => setOpenMenu("solutions")} onClose={() => setOpenMenu(null)} />
          <Dropdown label="Ressources" items={resources} open={openMenu === "resources"} onOpen={() => setOpenMenu("resources")} onClose={() => setOpenMenu(null)} />
          <Link href="/cas-clients" className="text-[14px] text-[#666] hover:text-[#111] transition-colors">Cas clients</Link>
          <Link href="/a-propos" className="text-[14px] text-[#666] hover:text-[#111] transition-colors">L&apos;agence</Link>
        </div>

        <a href="/contact" className="hidden md:inline-flex px-4 h-9 items-center rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#333] transition-colors">
          Prendre RDV
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" aria-label="Menu">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#666" strokeWidth={2}>
            {mobileOpen ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-20 pt-2 border-t border-[#F2F2F2] max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: "touch" }}>
          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2 mt-2">Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2">
              <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center" style={{ backgroundColor: s.color + "10", color: s.color }}>
                {s.icon}
              </div>
              <div>
                <span className="text-[14px] text-[#111] font-medium block leading-tight">{s.label}</span>
                <span className="text-[11px] text-[#999]">{s.desc}</span>
              </div>
            </Link>
          ))}

          <div className="border-t border-[#F2F2F2] mt-3 pt-3">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2">Ressources</p>
            <div className="grid grid-cols-2 gap-1">
              {resources.map((r) => (
                <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)} className="text-[14px] text-[#666] py-1.5">{r.label}</Link>
              ))}
            </div>
          </div>

          <div className="border-t border-[#F2F2F2] mt-3 pt-3">
            <div className="grid grid-cols-2 gap-1">
              <Link href="/cas-clients" onClick={() => setMobileOpen(false)} className="text-[14px] text-[#666] py-1.5">Cas clients</Link>
              <Link href="/a-propos" onClick={() => setMobileOpen(false)} className="text-[14px] text-[#666] py-1.5">L&apos;agence</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-[14px] text-[#666] py-1.5">Contact</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="text-[14px] text-[#666] py-1.5">Blog</Link>
            </div>
          </div>

          <a href="/contact" onClick={() => setMobileOpen(false)} className="block text-center h-10 leading-[40px] rounded-md bg-[#111] text-white text-[14px] font-medium mt-4">Prendre RDV</a>
        </div>
      )}
    </header>
  );
}
