"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function LPRevOps() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({ portalId: "2703445", formId: "c7a632d2-943b-4245-ac61-9b00953b63e0", region: "na1", target: "#hs-lp-form" });
      return;
    }
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => { if ((window as any).hbspt) (window as any).hbspt.forms.create({ portalId: "2703445", formId: "c7a632d2-943b-4245-ac61-9b00953b63e0", region: "na1", target: "#hs-lp-form" }); };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header minimal - pas de nav complete, juste le logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#F2F2F2]">
        <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-[18px] font-bold tracking-[-0.03em] text-[#111]">ceres</Link>
          <a href="tel:+33" className="text-[12px] text-[#999] hover:text-[#111] transition-colors">Appeler directement</a>
        </div>
      </header>

      {/* HERO + FORM - Above the fold */}
      <section className="pt-[72px] pb-12 relative">
        <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
        <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "20%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.06, filter: "blur(70px)" }} />

        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left: Value prop */}
            <div className="flex-1 pt-4 lg:pt-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF7A59]/10 text-[12px] font-medium text-[#FF7A59] mb-4">
                Audit gratuit en 48h
              </div>
              <h1 className="text-[30px] sm:text-[40px] lg:text-[46px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
                Votre CRM ne<br />genere pas de<br />revenue ?
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6 max-w-[440px]">
                On audite votre CRM, vos processus et votre stack en 48h. Vous recevez un plan d&apos;action concret pour aligner vos equipes et accelerer votre pipeline.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { value: "250+", label: "clients" },
                  { value: "9 ans", label: "d\u2019experience" },
                  { value: "48h", label: "pour l\u2019audit" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="text-[18px] font-bold text-[#111]">{s.value}</span>
                    <span className="text-[11px] text-[#999]">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Client logos */}
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { name: "TotalEnergies", domain: "totalenergies.com" },
                  { name: "Alan", domain: "alan.com" },
                  { name: "Ringover", domain: "ringover.com" },
                  { name: "Dougs", domain: "dougs.fr" },
                  { name: "Beedeez", domain: "beedeez.com" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-1.5">
                    <img src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=32`} alt={c.name} className="w-4 h-4 grayscale opacity-50" />
                    <span className="text-[10px] text-[#CCC] font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: FORM - visible above the fold */}
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span className="text-[13px] font-semibold text-[#111]">Demander votre audit gratuit</span>
                </div>
                <p className="text-[11px] text-[#999] mb-4">Reponse sous 24h. Sans engagement.</p>

                <div ref={formRef} id="hs-lp-form" className="min-h-[280px]">
                  <div className="flex items-center justify-center h-[280px] text-[#CCC]">
                    <div className="text-center">
                      <svg className="mx-auto mb-2 animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>
                      <p className="text-[11px]">Chargement...</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#F2F2F2]">
                  <div className="flex -space-x-1.5">
                    {["GD", "ST", "BT"].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-[#111] border-2 border-white flex items-center justify-center text-white text-[7px] font-bold">{i}</div>
                    ))}
                  </div>
                  <span className="text-[10px] text-[#999]">Guillaume, Simon ou Bruno vous repond</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-[#111] py-5">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "+45%", label: "Pipeline genere en moyenne", color: "#22C55E" },
              { value: "-60%", label: "Temps admin commercial", color: "#4B5EFC" },
              { value: "88%", label: "Fiabilite du forecast", color: "#6C5CE7" },
              { value: "0", label: "Perte de donnees en migration", color: "#FF7A59" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[22px] font-bold" style={{ color: s.color }}>{s.value}</div>
                <div className="text-[10px] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-14">
        <div className="max-w-[900px] mx-auto px-6">
          <p className="text-[11px] font-semibold text-[#FF7A59] uppercase tracking-wider text-center mb-3">Le probleme</p>
          <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] text-center tracking-[-0.02em] mb-10">Ca vous parle ?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
            {[
              { problem: "Votre CRM est rempli a moitie", desc: "Les commerciaux ne voient pas l\u2019interet. La donnee est incomplete, les deals ne sont pas a jour." },
              { problem: "Marketing et Sales ne se parlent pas", desc: "Les MQL ne sont pas suivis, les definitions sont floues, le reporting est contradictoire." },
              { problem: "Le forecast se fait sur Excel", desc: "Pas de visibilite temps reel sur le pipeline. Le directeur commercial compile un fichier le vendredi." },
              { problem: "Vous avez 10 outils non connectes", desc: "CRM, emails, enrichissement, reporting : chaque outil vit dans son coin. Personne n\u2019a la vue complete." },
            ].map((p) => (
              <div key={p.problem} className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FEF2F2] p-4">
                <p className="text-[13px] font-semibold text-[#111] mb-1">{p.problem}</p>
                <p className="text-[11px] text-[#777] leading-[1.6]">{p.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-semibold text-[#22C55E] uppercase tracking-wider text-center mb-3">La solution</p>
          <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] text-center tracking-[-0.02em] mb-10">Ce qu&apos;on fait en 3 etapes</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Diagnostic", desc: "On audite votre CRM, vos processus et votre stack avec notre framework 80 points. Rapport en 48h.", time: "48h", color: "#FF7A59" },
              { step: "02", title: "Build", desc: "Pipeline, scoring, workflows, dashboards, integrations. Tout est deploye, teste et documente.", time: "4-8 sem", color: "#4B5EFC" },
              { step: "03", title: "Accompagnement", desc: "On reste a vos cotes pour iterer, optimiser et deployer l\u2019IA. Rituels hebdomadaires.", time: "Continu", color: "#22C55E" },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-[#E8E8E8] p-5 text-center">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-white text-[13px] font-bold" style={{ background: s.color }}>{s.step}</div>
                <h3 className="text-[15px] font-semibold text-[#111] mb-2">{s.title}</h3>
                <p className="text-[11px] text-[#777] leading-[1.6] mb-3">{s.desc}</p>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#F5F5F5] text-[#999]">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-[#FAFAFA]">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[20px] font-semibold text-[#111] text-center tracking-[-0.02em] mb-8">Nos services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { title: "Audit RevOps", color: "#FF7A59", href: "/audit-revops" },
              { title: "RevOps Part-Time", color: "#4B5EFC", href: "/revops-part-time" },
              { title: "Agence HubSpot", color: "#FF7A59", href: "/agence-hubspot" },
              { title: "Agents IA", color: "#6D00CC", href: "/agents-ia" },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-[#E8E8E8] bg-white p-4 text-center">
                <div className="w-2.5 h-2.5 rounded-sm mx-auto mb-2" style={{ background: s.color }} />
                <p className="text-[12px] font-semibold text-[#111]">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[20px] font-semibold text-[#111] text-center tracking-[-0.02em] mb-8">Ce qu&apos;ils disent</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { quote: "Ceres a completement transforme notre facon de travailler. Le combo HubSpot + Claude + MCP est incroyable.", author: "Hamza", role: "Head of Sales", company: "Beedeez" },
              { quote: "Projet de migration complexe, zero perte de donnees, dans les delais. C\u2019est un avant/apres.", author: "Laisa L.", role: "CRM Manager", company: "TotalEnergies" },
              { quote: "On parle revenue, pas seulement CRM. Le meilleur investissement de l\u2019annee.", author: "Ludovic R.", role: "VP Sales", company: "Ringover" },
            ].map((t) => (
              <div key={t.author} className="rounded-xl border border-[#F2F2F2] p-4">
                <p className="text-[11px] text-[#555] leading-[1.7] mb-3 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[7px] font-bold">
                    {t.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-[#111]">{t.author}</p>
                    <p className="text-[9px] text-[#999]">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-8 border-t border-[#F2F2F2]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-[10px] text-[#CCC] uppercase tracking-wider font-semibold">Partenaires</span>
            {[
              { name: "HubSpot", domain: "hubspot.com" },
              { name: "Lemlist", domain: "lemlist.com" },
              { name: "Claude", domain: "claude.ai" },
              { name: "Clay", domain: "clay.com" },
              { name: "Attio", domain: "attio.com" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-1.5">
                <img src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=32`} alt={p.name} className="w-4 h-4 grayscale opacity-50" />
                <span className="text-[11px] text-[#999]">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - repeat form */}
      <section className="py-14 bg-[#111]">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-[24px] sm:text-[32px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a structurer votre RevOps ?</h2>
          <p className="text-[14px] text-white/50 mb-6 leading-[1.7]">Demandez votre audit gratuit. On vous repond sous 24h.</p>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF7A59] text-white text-[14px] font-medium hover:bg-[#E86D4F] transition-colors">
            <span className="w-2 h-2 rounded-full bg-white/30 animate-pulse" />
            Demander mon audit gratuit
          </a>
          <p className="text-[11px] text-white/20 mt-4">ceres.agency | 128 rue La Boetie, 75008 Paris</p>
        </div>
      </section>
    </div>
  );
}
