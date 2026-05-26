"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import TrustStrip from "@/components/marketing/TrustStrip";
import StickyBottomCTA from "@/components/marketing/StickyBottomCTA";

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "SoftwareApplication", name: "Calculateur Pipeline Coverage", description: "Outil gratuit pour calculer le pipeline coverage requis pour atteindre vos objectifs commerciaux. Formule + benchmark 2026.", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, url: "https://ceres.agency/outils/calculateur-pipeline-coverage", publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" } },
  { "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "C'est quoi le Pipeline Coverage ratio ?", acceptedAnswer: { "@type": "Answer", text: "Le Pipeline Coverage est le ratio entre la valeur totale de votre pipeline en cours et votre objectif de revenu. Coverage = Pipeline / Objectif. Un coverage de 3x signifie que vous avez 3 fois votre objectif en pipeline. En SaaS B2B, le minimum recommande est 3x, l'ideal 4-5x pour avoir une marge de securite." } },
    { "@type": "Question", name: "Quel coverage est suffisant pour atteindre l'objectif ?", acceptedAnswer: { "@type": "Answer", text: "Cela depend de votre win rate. Coverage minimum requis = 1 / Win rate. Si vous fermez 25% de votre pipeline, coverage minimum = 4x. Si vous fermez 33%, coverage minimum = 3x. Mais ces coverages mathematiques laissent zero marge : visez 1.5x le minimum pour de la securite." } },
    { "@type": "Question", name: "Comment ameliorer le pipeline coverage ?", acceptedAnswer: { "@type": "Answer", text: "Trois leviers : (1) augmenter le volume entrant via marketing/outbound. (2) ameliorer le win rate via qualification, sales enablement, demos. (3) accelerer la velocity pour faire tourner plus de cycles." } },
  ] },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Outils", item: "https://ceres.agency/outils" }, { "@type": "ListItem", position: 3, name: "Pipeline Coverage", item: "https://ceres.agency/outils/calculateur-pipeline-coverage" }] },
]};

export default function CalculateurPipelineCoveragePage() {
  const [objectif, setObjectif] = useState<number>(1000000);
  const [pipeline, setPipeline] = useState<number>(2500000);
  const [winRate, setWinRate] = useState<number>(25);

  const coverage = useMemo(() => {
    if (!objectif || !pipeline) return 0;
    return pipeline / objectif;
  }, [pipeline, objectif]);

  const coverageMinimum = useMemo(() => {
    if (!winRate) return 0;
    return 1 / (winRate / 100);
  }, [winRate]);

  const projetteVente = useMemo(() => {
    if (!pipeline || !winRate) return 0;
    return pipeline * (winRate / 100);
  }, [pipeline, winRate]);

  const benchmark = useMemo(() => {
    const ratioVsMin = coverage / coverageMinimum;
    if (ratioVsMin < 1) return { label: "Insuffisant", color: "#EF4444", desc: "Coverage en dessous du minimum mathematique. Vous n'atteindrez pas l'objectif sans miracle." };
    if (ratioVsMin < 1.3) return { label: "Tres juste", color: "#F59E0B", desc: "Aucune marge de securite. Tout slippage de deal va vous couter l'objectif." };
    if (ratioVsMin < 1.7) return { label: "Confortable", color: "#22C55E", desc: "Bonne marge. Objectif probable a +/- 10 %." };
    return { label: "Excellent", color: "#6D00CC", desc: "Tres bonne marge. Risque de sur-coverage : verifier la qualite des deals avant de freiner l'outbound." };
  }, [coverage, coverageMinimum]);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 320, height: 320, borderRadius: "50%", background: "#22C55E", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "35%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "65%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/outils" className="hover:text-[#111] transition-colors">Outils</Link><span>/</span><span className="text-[#666]">Pipeline Coverage</span></nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4"><Badge>Calculateur gratuit</Badge><span className="text-[12px] text-[#999]">Mai 2026</span></div>
          <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Calculateur Pipeline Coverage</h1>
          <p className="text-[17px] text-[#666] leading-[1.7]">Avez-vous assez de pipeline pour atteindre vos objectifs trimestriels ? Coverage actuel, minimum requis, projection.</p>
        </div>

        <section className="mb-8">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-[16px] font-semibold text-[#111] mb-5">Vos chiffres</h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">Objectif revenue Q (EUR)</label>
                    <input type="number" value={objectif} onChange={(e) => setObjectif(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#22C55E]" />
                    <p className="text-[11px] text-[#999] mt-1">Quota commercial pour le trimestre</p>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">Pipeline actuel (EUR)</label>
                    <input type="number" value={pipeline} onChange={(e) => setPipeline(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#22C55E]" />
                    <p className="text-[11px] text-[#999] mt-1">Somme des deals ouverts dans le pipeline</p>
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#555] mb-2">Win rate moyen (%)</label>
                    <input type="number" step="1" value={winRate} onChange={(e) => setWinRate(Number(e.target.value))} className="w-full px-4 py-2.5 rounded-lg border border-[#E8E8E8] bg-white text-[14px] text-[#111] focus:outline-none focus:border-[#22C55E]" />
                    <p className="text-[11px] text-[#999] mt-1">Win rate historique de l&apos;equipe Sales</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[16px] font-semibold text-[#111]">Resultats</h2>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] p-5">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">Coverage actuel</p>
                  <div className="text-[40px] font-bold text-[#111] leading-none tracking-[-0.02em]">{coverage.toFixed(1)}x</div>
                  <p className="text-[11px] text-[#666] mt-1">Pipeline / Objectif</p>
                </div>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] p-5">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">Minimum requis</p>
                  <div className="text-[32px] font-bold text-[#111] leading-none tracking-[-0.02em]">{coverageMinimum.toFixed(1)}x</div>
                  <p className="text-[11px] text-[#666] mt-1">1 / Win rate</p>
                </div>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] p-5">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">Projection vente</p>
                  <div className="text-[24px] font-bold text-[#111] leading-none tracking-[-0.02em]">{projetteVente.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} EUR</div>
                  <p className="text-[11px] text-[#666] mt-1">Pipeline × Win rate</p>
                </div>
                <div className="rounded-xl p-5" style={{ background: `${benchmark.color}10`, border: `1px solid ${benchmark.color}40` }}>
                  <p className="text-[13px] font-semibold mb-1" style={{ color: benchmark.color }}>{benchmark.label}</p>
                  <p className="text-[11px] text-[#666] leading-[1.5]">{benchmark.desc}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#F2F2F2]">
              <p className="text-[11px] font-mono text-[#999] text-center">Coverage = Pipeline / Objectif = {pipeline.toLocaleString("fr-FR")} / {objectif.toLocaleString("fr-FR")} = {coverage.toFixed(2)}x | Minimum requis = 1 / {(winRate / 100).toFixed(2)} = {coverageMinimum.toFixed(2)}x</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <h2 className="text-[20px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Benchmarks Pipeline Coverage SaaS B2B</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px] border border-[#E8E8E8]">
                <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Win rate</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Coverage minimum</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Coverage confortable</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Profil typique</th></tr></thead>
                <tbody className="text-[#555]">
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">15 %</td><td className="p-3 border-b border-[#F2F2F2]">6.7x</td><td className="p-3 border-b border-[#F2F2F2]">9-10x</td><td className="p-3 border-b border-[#F2F2F2]">Outbound froid, deal long</td></tr>
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">25 %</td><td className="p-3 border-b border-[#F2F2F2]">4x</td><td className="p-3 border-b border-[#F2F2F2]">5-6x</td><td className="p-3 border-b border-[#F2F2F2]">SMB SaaS classique</td></tr>
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">33 %</td><td className="p-3 border-b border-[#F2F2F2]">3x</td><td className="p-3 border-b border-[#F2F2F2]">4-5x</td><td className="p-3 border-b border-[#F2F2F2]">Mid-market avec ICP precis</td></tr>
                  <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">50 %</td><td className="p-3 border-b border-[#F2F2F2]">2x</td><td className="p-3 border-b border-[#F2F2F2]">3x</td><td className="p-3 border-b border-[#F2F2F2]">Inbound qualifie, PLG</td></tr>
                  <tr><td className="p-3 font-medium text-[#111]">&gt; 50 %</td><td className="p-3">2x</td><td className="p-3">3x</td><td className="p-3">Tres rare. Verifier qualif</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[#999] mt-4">Le coverage confortable = minimum × 1.3 a 1.5 pour absorber les slippages, dropouts et delais imprevus.</p>
          </div>
        </section>

        <section className="mb-8">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <h2 className="text-[20px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Comment ameliorer votre Pipeline Coverage</h2>
            <div className="space-y-3">
              <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><h3 className="text-[13px] font-semibold text-[#111] mb-1">Augmenter le volume entrant</h3><p className="text-[12px] text-[#777] leading-[1.65]">Outbound plus agressif, SDR additionnels, paid media, content marketing, programmes referral. Levier le plus rapide mais coute en CAC.</p></div>
              <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FAFAFA] p-4"><h3 className="text-[13px] font-semibold text-[#111] mb-1">Ameliorer le win rate</h3><p className="text-[12px] text-[#777] leading-[1.65]">Meilleure qualification BANT/MEDDIC, sales enablement, demos personnalisees, battle cards concurrents, scoring leads.</p></div>
              <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4"><h3 className="text-[13px] font-semibold text-[#111] mb-1">Accelerer la velocity</h3><p className="text-[12px] text-[#777] leading-[1.65]">Reduire le sales cycle : automations de relance, signature electronique, deals plus simples, packaging clair, pricing transparent.</p></div>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="mb-8">
          <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
            <h2 className="text-[22px] font-semibold text-white tracking-[-0.02em] mb-3">Coverage insuffisant pour atteindre vos objectifs ?</h2>
            <p className="text-[14px] text-white/70 mb-5 max-w-[460px] mx-auto">30 minutes avec Guillaume Delachet (co-fondateur) pour diagnostiquer votre pipeline et identifier les leviers prioritaires. Sans engagement.</p>
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

        <section>
          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Autres calculateurs</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/outils/calculateur-cac-payback" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#FF7A59]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Calculateur</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">CAC Payback Period</h3></Link>
            <Link href="/outils/calculateur-ltv-cac" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#4B5EFC]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Calculateur</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">LTV / CAC ratio</h3></Link>
            <Link href="/framework-score-revops" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#6D00CC]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Framework</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">SCORE : audit RevOps 5 piliers</h3></Link>
          </div>
        </section>
      </div>

      <StickyBottomCTA
        message="Discuter de votre pipeline coverage avec Guillaume Delachet"
        ctaLabel="Reserver"
        ctaHref="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9"
        storageKey="calc-pipeline"
      />
    </div>
  );
}
