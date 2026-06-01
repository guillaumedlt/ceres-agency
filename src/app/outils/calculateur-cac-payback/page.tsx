"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import TrustStrip from "@/components/marketing/TrustStrip";
import StickyBottomCTA from "@/components/marketing/StickyBottomCTA";
import LeadMagnetInline from "@/components/marketing/LeadMagnetInline";

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "SoftwareApplication", name: "Calculateur CAC Payback Period", description: "Outil gratuit pour calculer le CAC Payback Period d'un client SaaS B2B. Formule + benchmark 2026.", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, url: "https://ceres.agency/outils/calculateur-cac-payback", publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" } },
  { "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "C'est quoi le CAC Payback Period ?", acceptedAnswer: { "@type": "Answer", text: "Le CAC Payback Period est le nombre de mois necessaires pour rentabiliser le cout d'acquisition d'un client (CAC). Formule : CAC / (MRR par client x Gross margin %). En SaaS B2B, l'objectif est typiquement inferieur a 12 mois pour le SMB et 18-24 mois pour l'enterprise." } },
    { "@type": "Question", name: "Quel est un bon CAC Payback ?", acceptedAnswer: { "@type": "Answer", text: "Median industrie 2026 : 8.6 mois. Excellent : <6 mois. Bon : 6-12 mois. Acceptable : 12-18 mois. Alerte : >18 mois. Au-dela de 24 mois, le modele est fragile, surtout pour les startups sans funding long." } },
    { "@type": "Question", name: "Comment ameliorer le CAC Payback ?", acceptedAnswer: { "@type": "Answer", text: "Trois leviers : (1) reduire le CAC via lead scoring, attribution amelioree, sourcing organique. (2) augmenter le MRR par client via upsell, packaging premium, expansion. (3) ameliorer la gross margin via optimisation infra et reduction du churn early-stage." } },
  ] },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Outils", item: "https://ceres.agency/outils" }, { "@type": "ListItem", position: 3, name: "Calculateur CAC Payback", item: "https://ceres.agency/outils/calculateur-cac-payback" }] },
]};

export default function CalculateurCACPaybackPage() {
  const [cac, setCac] = useState<number>(5000);
  const [mrr, setMrr] = useState<number>(500);
  const [margin, setMargin] = useState<number>(75);

  const payback = useMemo(() => {
    if (!cac || !mrr || !margin) return 0;
    return cac / (mrr * (margin / 100));
  }, [cac, mrr, margin]);

  const benchmark = useMemo(() => {
    if (payback < 6) return { label: "Excellent", color: "#22C55E", desc: "Modele tres efficient. Vous avez de la marge pour scaler agressivement." };
    if (payback < 12) return { label: "Bon", color: "#22C55E", desc: "Sain. La norme pour les SaaS SMB. Vous etes en mesure de scaler." };
    if (payback < 18) return { label: "Acceptable", color: "#F59E0B", desc: "OK pour l'enterprise. Pour le SMB, marge d'optimisation evidente." };
    if (payback < 24) return { label: "A surveiller", color: "#F59E0B", desc: "Modele acceptable mais fragile. Reduisez le CAC ou augmentez le pricing." };
    return { label: "Alerte", color: "#EF4444", desc: "Modele non viable a moyen terme sans changement majeur (pricing, segment, acquisition)." };
  }, [payback]);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "35%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "65%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/outils" className="hover:text-[#111] transition-colors">Outils</Link><span>/</span><span className="text-[#666]">CAC Payback</span></nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4"><Badge>Calculateur gratuit</Badge><span className="text-[12px] text-[#999]">Mai 2026</span></div>
          <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Calculateur CAC Payback Period</h1>
          <p className="text-[17px] text-[#666] leading-[1.7]">Combien de mois pour rentabiliser un client SaaS B2B ? Resultat instantane, formule expliquee, benchmark 2026.</p>
        </div>

        {/* Calculator */}
        <section className="mb-8">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div>
                <h2 className="text-[16px] font-semibold text-[#111] mb-5">Vos chiffres</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">CAC (cout d&apos;acquisition client) en EUR</label>
                    <input type="number" value={cac} onChange={(e) => setCac(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#FF7A59]" />
                    <p className="text-[11px] text-[#999] mt-1">Total depenses Sales+Marketing / nb nouveaux clients</p>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">MRR par client (EUR/mois)</label>
                    <input type="number" value={mrr} onChange={(e) => setMrr(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#FF7A59]" />
                    <p className="text-[11px] text-[#999] mt-1">Revenu mensuel moyen par client (ARPA)</p>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">Gross margin (%)</label>
                    <input type="number" value={margin} onChange={(e) => setMargin(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#FF7A59]" />
                    <p className="text-[11px] text-[#999] mt-1">Marge brute typique SaaS B2B : 70-85 %</p>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="flex flex-col">
                <h2 className="text-[16px] font-semibold text-[#111] mb-5">Resultat</h2>
                <div className="flex-1 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] p-6 flex flex-col justify-center items-center">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-2">Payback Period</p>
                  <div className="text-[56px] font-bold text-[#111] leading-none mb-1 tracking-[-0.02em]">{payback.toFixed(1)}</div>
                  <p className="text-[14px] text-[#666] mb-5">mois</p>
                  <div className="w-full rounded-lg p-3 text-center" style={{ background: `${benchmark.color}15`, border: `1px solid ${benchmark.color}40` }}>
                    <p className="text-[13px] font-semibold mb-1" style={{ color: benchmark.color }}>{benchmark.label}</p>
                    <p className="text-[11px] text-[#666] leading-[1.5]">{benchmark.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#F2F2F2]">
              <p className="text-[11px] font-mono text-[#999] text-center">Formule : CAC / (MRR par client × Gross margin %) = {cac} / ({mrr} × {(margin / 100).toFixed(2)}) = {payback.toFixed(1)} mois</p>
            </div>
          </div>
        </section>

        {/* Benchmarks */}
        <section className="mb-8">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <h2 className="text-[20px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Benchmarks CAC Payback SaaS B2B 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px] border border-[#E8E8E8]">
                <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Segment</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Objectif</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Median 2026</th></tr></thead>
                <tbody className="text-[#555]">
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">SMB (50-500 employes)</td><td className="p-3 border-b border-[#F2F2F2]">&lt; 12 mois</td><td className="p-3 border-b border-[#F2F2F2]">7-9 mois</td></tr>
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Mid-market (500-2000)</td><td className="p-3 border-b border-[#F2F2F2]">&lt; 18 mois</td><td className="p-3 border-b border-[#F2F2F2]">12-15 mois</td></tr>
                  <tr><td className="p-3 font-medium text-[#111]">Enterprise (2000+)</td><td className="p-3">&lt; 24 mois</td><td className="p-3">18-24 mois</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Explication */}
        <section className="mb-8">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <h2 className="text-[20px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Comment ameliorer votre CAC Payback</h2>
            <div className="space-y-3">
              <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FAFAFA] p-4"><h3 className="text-[13px] font-semibold text-[#111] mb-1">Reduire le CAC</h3><p className="text-[12px] text-[#777] leading-[1.65]">Lead scoring pour mieux qualifier, attribution pour eliminer les canaux non-rentables, sourcing organique (SEO, contenu), referral programs.</p></div>
              <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4"><h3 className="text-[13px] font-semibold text-[#111] mb-1">Augmenter le MRR par client</h3><p className="text-[12px] text-[#777] leading-[1.65]">Packaging premium, plans tiers, upsell, expansion revenue, optimisation pricing par segment.</p></div>
              <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><h3 className="text-[13px] font-semibold text-[#111] mb-1">Ameliorer la gross margin</h3><p className="text-[12px] text-[#777] leading-[1.65]">Optimisation infrastructure (cloud), reduction du churn early-stage, automation du support, self-service onboarding.</p></div>
            </div>
          </div>
        </section>

        <LeadMagnetInline
          title="Recevez le rapport benchmarks CAC Payback 2026 complet"
          subtitle="Medianes SaaS B2B France par segment (SMB / mid-market / enterprise), evolution 2024-2026, leviers concrets de reduction. PDF 14 pages."
          bullets={[
            "Benchmarks CAC payback par segment et par stade de funding",
            "Top 10 leviers reduction CAC vus chez nos clients",
            "Calculateur Excel avance avec sensibilites",
            "Mis a jour mai 2026",
          ]}
          ctaLabel="Recevoir le rapport"
          sourcePage="calculateur-cac-payback"
          color="#FF7A59"
        />

        {/* Trust strip */}
        <TrustStrip />

        {/* CTA Calendly direct */}
        <section className="mb-8">
          <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
            <h2 className="text-[22px] font-semibold text-white tracking-[-0.02em] mb-3">Votre CAC Payback est trop long ?</h2>
            <p className="text-[14px] text-white/70 mb-5 max-w-[460px] mx-auto">30 minutes avec Guillaume Delachet (co-fondateur) pour identifier les leviers concrets de reduction du CAC sur votre stack. Sans engagement.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                Reserver un creneau direct
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/10 text-white text-[13px] font-medium hover:bg-white/20 transition-colors">
                Ou nous ecrire
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Autres calculateurs</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/outils/calculateur-ltv-cac" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#4B5EFC]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Calculateur</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">LTV / CAC ratio</h3></Link>
            <Link href="/outils/calculateur-pipeline-coverage" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#22C55E]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Calculateur</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">Pipeline Coverage</h3></Link>
            <Link href="/framework-score-revops" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#FF7A59]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Framework</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">SCORE : audit RevOps 5 piliers</h3></Link>
          </div>
        </section>
      </div>

      <StickyBottomCTA
        message="Discuter de votre CAC Payback avec Guillaume Delachet"
        ctaLabel="Reserver"
        ctaHref="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9"
        storageKey="calc-cac"
      />
    </div>
  );
}
