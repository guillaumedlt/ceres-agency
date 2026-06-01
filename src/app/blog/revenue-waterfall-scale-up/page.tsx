"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Le revenue waterfall : modeliser la croissance de votre scale-up",
  description: "Framework pour decomposer et modeliser la croissance ARR d'une scale-up SaaS B2B. New ARR, expansion, contraction, churn.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/revenue-waterfall-scale-up" },
  articleSection: "Strategie RevOps", wordCount: 2000, inLanguage: "fr",
};

const sections = [
  { id: "definition", title: "Definition du waterfall" },
  { id: "5-composantes", title: "Les 5 composantes" },
  { id: "exemple", title: "Exemple chiffre" },
  { id: "piloter", title: "Comment piloter chaque levier" },
  { id: "vc", title: "Ce que regardent les VCs" },
];

const relatedArticles = [
  { title: "NRR : guide complet", slug: "nrr-net-revenue-retention-guide", category: "Strategie RevOps", color: "#FF7A59" },
  { title: "Calculateur LTV / CAC", slug: "../outils/calculateur-ltv-cac", category: "Outil", color: "#4B5EFC" },
  { title: "ROI du RevOps : calculer et defendre", slug: "roi-revops-calculer-defendre-board", category: "Strategie RevOps", color: "#6D00CC" },
];

export default function RevenueWaterfallArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("definition");
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) { const el = els[i]; if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; } }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#6D00CC] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#6D00CC] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">Revenue waterfall</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Strategie RevOps</Badge><span className="text-[11px] text-[#CCC]">10 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">Le revenue waterfall : modeliser la croissance de votre scale-up</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Le seul modele finance/RevOps qu&apos;un CRO de scale-up doit savoir presenter par coeur. Decomposition complete de votre ARR end-to-end.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="definition" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">C&apos;est quoi un revenue waterfall</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Un revenue waterfall (ou ARR waterfall) decompose le passage de l&apos;ARR de debut de periode a l&apos;ARR de fin de periode en blocs explicites : nouveaux clients, expansion, contraction, churn. Visuellement, ca ressemble a une cascade de barres qui montent et descendent.</p>
                  <p>L&apos;interet : ca permet de voir <strong>d&apos;ou vient la croissance</strong>. Une boite qui fait +30% ARR avec 100% du gain en new business est tres differente d&apos;une boite qui fait +30% avec moitie expansion. La premiere depend du marketing/sales, la seconde a une retention solide.</p>
                  <p>C&apos;est aussi le document #1 que regardent les VCs en due diligence. Si vous ne pouvez pas le presenter, vous ne savez pas piloter votre business.</p>
                </div>
              </div></section>
              <Connector />

              <section id="5-composantes" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 5 composantes du waterfall</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">1. ARR debut de periode</p><p className="text-[12px] text-[#777] leading-[1.65]">Point de depart. Toujours T-12 mois (en moyenne annee glissante). Eviter les snapshots ponctuels qui faussent.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">2. + New ARR (acquisition)</p><p className="text-[12px] text-[#777] leading-[1.65]">Nouveaux clients ferme durant la periode. Doit etre decoupe par segment (SMB / mid / enterprise) pour identifier les unit economics.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">3. + Expansion ARR</p><p className="text-[12px] text-[#777] leading-[1.65]">Upsell + cross-sell sur clients existants. Composante la plus rentable car CAC quasi nul. Si elle est faible, votre Customer Success ne fait pas son job.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">4. - Contraction ARR</p><p className="text-[12px] text-[#777] leading-[1.65]">Clients qui restent mais paient moins (downsell). Signal a creuser : feature manquante, perception de valeur baisse, contexte client (RH, restructuring).</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">5. - Churn ARR</p><p className="text-[12px] text-[#777] leading-[1.65]">Clients qui partent completement. A decomposer entre churn volontaire (clients deçus) vs involuntary (CB declined, CB renouvelle pas).</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">= ARR fin de periode</p><p className="text-[12px] text-[#777] leading-[1.65]">Resultante de tous les flux. La difference entre les deux ARR donne le net new ARR.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="exemple" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Exemple chiffre : scale-up SaaS 20M ARR</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Composante</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Montant</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">% ARR debut</th></tr></thead>
                    <tbody className="text-[#555]">
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">ARR debut periode</td><td className="p-3 border-b border-[#F2F2F2]">20.0 M EUR</td><td className="p-3 border-b border-[#F2F2F2]">100 %</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#22C55E]">+ New ARR</td><td className="p-3 border-b border-[#F2F2F2]">+ 6.5 M</td><td className="p-3 border-b border-[#F2F2F2]">+ 32.5 %</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#4B5EFC]">+ Expansion ARR</td><td className="p-3 border-b border-[#F2F2F2]">+ 2.8 M</td><td className="p-3 border-b border-[#F2F2F2]">+ 14 %</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#F59E0B]">- Contraction</td><td className="p-3 border-b border-[#F2F2F2]">- 0.8 M</td><td className="p-3 border-b border-[#F2F2F2]">- 4 %</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#EF4444]">- Churn</td><td className="p-3 border-b border-[#F2F2F2]">- 1.4 M</td><td className="p-3 border-b border-[#F2F2F2]">- 7 %</td></tr>
                      <tr><td className="p-3 font-medium text-[#111]"><strong>= ARR fin periode</strong></td><td className="p-3"><strong>27.1 M EUR</strong></td><td className="p-3"><strong>+35.5 %</strong></td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">Lecture rapide : <strong className="text-white">NRR = 100% + 14% - 4% - 7% = 103%</strong>. C&apos;est correct mais juste. Cible une scale-up Serie B+ devrait viser 110%+. La cible d&apos;optimisation est claire : reduire le churn de 7% a 4% via meilleur onboarding et detection precoce.</p></div>
              </div></section>
              <Connector />

              <section id="piloter" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Comment piloter chaque levier</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">New ARR : pilotee par Marketing + Sales</p><p className="text-[12px] text-[#777] leading-[1.65]">KPIs cles : MQL volume, MQL-&gt;SQL conversion, win rate, ACV moyen. Optimisation : pipeline coverage, ICP refinement, sales enablement.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Expansion : pilotee par Customer Success</p><p className="text-[12px] text-[#777] leading-[1.65]">KPIs cles : expansion rate, % comptes upsold, taille d&apos;expansion. Optimisation : segmentation comptes a potentiel, automation des signaux d&apos;intent.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Contraction : co-pilotee CS + Product</p><p className="text-[12px] text-[#777] leading-[1.65]">KPIs cles : taux de contraction, raisons documentees. Optimisation : feature gaps a fixer, repackaging, comms valeur.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Churn : pilote par CS + Product + Sales (qualif initiale)</p><p className="text-[12px] text-[#777] leading-[1.65]">KPIs cles : gross churn, voluntary vs involuntary, raisons. Optimisation : detection precoce, save desk, billing reliability.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="vc" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Ce que regardent les VCs dans votre waterfall</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Le ratio New ARR / Expansion ARR.</strong> Une boite Serie B saine vise un ratio entre 70/30 et 60/40. Une boite mature pre-IPO devrait avoir 40/60 voire 30/70 (signe de retention forte).</li>
                    <li><strong>L&apos;evolution du gross churn.</strong> Doit baisser dans le temps. Si stable ou augmente, signal de probleme produit ou marche.</li>
                    <li><strong>La NRR globale.</strong> &gt; 110% = excellent. 100-110% = OK. &lt; 100% = bouchon a 100M ARR.</li>
                    <li><strong>Le bridge entre les periodes.</strong> Coherence trimestre apres trimestre. Si le waterfall fluctue erratiquement, signal que le forecasting est faible.</li>
                  </ul>
                  <p>Tu dois pouvoir presenter ton waterfall a 5 trimestres glissants en 10 min sans hesitations. C&apos;est le test minimum d&apos;un bon CRO/CFO.</p>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Vous ne savez pas presenter votre waterfall ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour structurer votre revenue model et le rendre VC-ready.</p>
                <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un creneau</a>
              </div></section>
              <Connector />

              <section><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug.startsWith("..") ? r.slug.replace("../", "/") : `/blog/${r.slug}`} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
