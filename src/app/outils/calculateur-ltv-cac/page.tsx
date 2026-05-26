"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "SoftwareApplication", name: "Calculateur LTV / CAC ratio", description: "Outil gratuit pour calculer le ratio LTV/CAC d'un SaaS B2B. Formule + benchmark 2026.", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, url: "https://ceres.agency/outils/calculateur-ltv-cac", publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" } },
  { "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "C'est quoi le ratio LTV/CAC ?", acceptedAnswer: { "@type": "Answer", text: "Le ratio LTV/CAC compare la valeur totale qu'un client genere (LTV) au cout pour l'acquerir (CAC). Formule LTV = (ARPA x Gross margin %) / Churn % mensuel. Ratio = LTV / CAC. En SaaS B2B sain, le ratio doit etre superieur a 3. En-dessous de 1, vous perdez de l'argent sur chaque client." } },
    { "@type": "Question", name: "Quel est un bon ratio LTV/CAC ?", acceptedAnswer: { "@type": "Answer", text: "< 1 : critique, vous perdez de l'argent. 1-3 : marge faible, modele fragile. 3-5 : sain, c'est l'objectif standard. >5 : excellent mais peut indiquer sous-investissement acquisition. >8 : reinvestir le surplus en acquisition pour scaler plus vite." } },
    { "@type": "Question", name: "Comment ameliorer le ratio LTV/CAC ?", acceptedAnswer: { "@type": "Answer", text: "Augmenter la LTV : reduire le churn (onboarding, success), augmenter l'ARPA (upsell, expansion), ameliorer la gross margin (automation, self-service). Reduire le CAC : meilleur targeting, attribution, optimisation des canaux." } },
  ] },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Outils", item: "https://ceres.agency/outils" }, { "@type": "ListItem", position: 3, name: "Calculateur LTV/CAC", item: "https://ceres.agency/outils/calculateur-ltv-cac" }] },
]};

export default function CalculateurLTVCACPage() {
  const [arpa, setArpa] = useState<number>(500);
  const [margin, setMargin] = useState<number>(75);
  const [churn, setChurn] = useState<number>(2);
  const [cac, setCac] = useState<number>(5000);

  const ltv = useMemo(() => {
    if (!arpa || !margin || !churn) return 0;
    return (arpa * (margin / 100)) / (churn / 100);
  }, [arpa, margin, churn]);

  const ratio = useMemo(() => {
    if (!cac || !ltv) return 0;
    return ltv / cac;
  }, [ltv, cac]);

  const benchmark = useMemo(() => {
    if (ratio < 1) return { label: "Critique", color: "#EF4444", desc: "Vous perdez de l'argent sur chaque client. Pivot urgent : pricing, segment ou modele." };
    if (ratio < 3) return { label: "Fragile", color: "#F59E0B", desc: "Marge faible. Modele a optimiser avant de scaler l'acquisition." };
    if (ratio < 5) return { label: "Sain", color: "#22C55E", desc: "L'objectif standard SaaS B2B. Vous pouvez reinvestir en acquisition." };
    if (ratio < 8) return { label: "Excellent", color: "#22C55E", desc: "Tres bon mais peut indiquer un sous-investissement marketing/sales. Accelerez." };
    return { label: "Reinvestir massivement", color: "#6D00CC", desc: "Le ratio est tellement bon que vous laissez du revenu sur la table. Augmentez le CAC en accelerant l'acquisition." };
  }, [ratio]);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 320, height: 320, borderRadius: "50%", background: "#4B5EFC", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "35%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "65%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/outils" className="hover:text-[#111] transition-colors">Outils</Link><span>/</span><span className="text-[#666]">LTV / CAC</span></nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4"><Badge>Calculateur gratuit</Badge><span className="text-[12px] text-[#999]">Mai 2026</span></div>
          <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Calculateur LTV / CAC ratio</h1>
          <p className="text-[17px] text-[#666] leading-[1.7]">La metrique fondamentale pour mesurer la rentabilite unitaire d&apos;un SaaS B2B. LTV, CAC, ratio, benchmark, recommandations.</p>
        </div>

        <section className="mb-8">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-[16px] font-semibold text-[#111] mb-5">Vos chiffres</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">ARPA (EUR/mois par client)</label>
                    <input type="number" value={arpa} onChange={(e) => setArpa(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#4B5EFC]" />
                    <p className="text-[11px] text-[#999] mt-1">Average Revenue Per Account mensuel</p>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">Gross margin (%)</label>
                    <input type="number" value={margin} onChange={(e) => setMargin(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#4B5EFC]" />
                    <p className="text-[11px] text-[#999] mt-1">SaaS B2B typique : 70-85 %</p>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">Churn mensuel (%)</label>
                    <input type="number" step="0.1" value={churn} onChange={(e) => setChurn(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#4B5EFC]" />
                    <p className="text-[11px] text-[#999] mt-1">SaaS B2B sain : 0.5-2 % mensuel</p>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">CAC (EUR)</label>
                    <input type="number" value={cac} onChange={(e) => setCac(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#4B5EFC]" />
                    <p className="text-[11px] text-[#999] mt-1">Cout d&apos;acquisition par nouveau client</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[16px] font-semibold text-[#111]">Resultats</h2>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] p-5">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">LTV (Lifetime Value)</p>
                  <div className="text-[32px] font-bold text-[#111] leading-none tracking-[-0.02em]">{ltv.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} EUR</div>
                </div>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] p-5">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">CAC</p>
                  <div className="text-[32px] font-bold text-[#111] leading-none tracking-[-0.02em]">{cac.toLocaleString("fr-FR")} EUR</div>
                </div>
                <div className="rounded-xl p-5" style={{ background: `${benchmark.color}10`, border: `1px solid ${benchmark.color}40` }}>
                  <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: benchmark.color }}>Ratio LTV / CAC</p>
                  <div className="text-[40px] font-bold leading-none tracking-[-0.02em] mb-2" style={{ color: benchmark.color }}>{ratio.toFixed(1)}x</div>
                  <p className="text-[13px] font-semibold mb-1" style={{ color: benchmark.color }}>{benchmark.label}</p>
                  <p className="text-[11px] text-[#666] leading-[1.5]">{benchmark.desc}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#F2F2F2]">
              <p className="text-[11px] font-mono text-[#999] text-center">LTV = (ARPA × Gross margin %) / Churn % = ({arpa} × {(margin / 100).toFixed(2)}) / {(churn / 100).toFixed(3)} = {ltv.toFixed(0)} EUR | Ratio = LTV / CAC = {ratio.toFixed(2)}x</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <h2 className="text-[20px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Benchmarks ratio LTV/CAC SaaS B2B 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px] border border-[#E8E8E8]">
                <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Ratio</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Etat</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Action recommandee</th></tr></thead>
                <tbody className="text-[#555]">
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-bold text-[#EF4444]">&lt; 1x</td><td className="p-3 border-b border-[#F2F2F2]">Critique</td><td className="p-3 border-b border-[#F2F2F2]">Pivot urgent. Pricing, segment ou modele a revoir.</td></tr>
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-bold text-[#F59E0B]">1-3x</td><td className="p-3 border-b border-[#F2F2F2]">Fragile</td><td className="p-3 border-b border-[#F2F2F2]">Optimiser avant de scaler. Focus retention + pricing.</td></tr>
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-bold text-[#22C55E]">3-5x</td><td className="p-3 border-b border-[#F2F2F2]">Sain</td><td className="p-3 border-b border-[#F2F2F2]">Standard. Reinvestir en acquisition.</td></tr>
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-bold text-[#22C55E]">5-8x</td><td className="p-3 border-b border-[#F2F2F2]">Excellent</td><td className="p-3 border-b border-[#F2F2F2]">Accelerer l&apos;acquisition. Probable sous-investissement.</td></tr>
                  <tr><td className="p-3 font-bold text-[#6D00CC]">&gt; 8x</td><td className="p-3">Reinvestir</td><td className="p-3">Du revenu sur la table. Augmenter CAC pour scaler.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
            <h2 className="text-[22px] font-semibold text-white tracking-[-0.02em] mb-3">Ratio en dessous de 3 ?</h2>
            <p className="text-[14px] text-white/70 mb-5 max-w-[460px] mx-auto">Audit RevOps complet pour identifier les leviers : pricing, retention, expansion, acquisition.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un diagnostic</Link>
          </div>
        </section>

        <section>
          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Autres calculateurs</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/outils/calculateur-cac-payback" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#FF7A59]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Calculateur</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">CAC Payback Period</h3></Link>
            <Link href="/outils/calculateur-pipeline-coverage" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#22C55E]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Calculateur</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">Pipeline Coverage</h3></Link>
            <Link href="/framework-score-revops" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#6D00CC]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Framework</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">SCORE : audit RevOps 5 piliers</h3></Link>
          </div>
        </section>
      </div>
    </div>
  );
}
