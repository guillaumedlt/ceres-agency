"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Les metriques essentielles du RevOps SaaS en 2026",
  description: "Guide complet des metriques RevOps SaaS. MRR, ARR, NRR, GRR, CAC, LTV, CAC Payback, Magic Number, Pipeline Coverage, Win Rate par segment, cycle de vente et dashboard complet.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/revops-saas-metriques-essentielles" },
  articleSection: "RevOps",
  wordCount: 3000,
  inLanguage: "fr",
};

const sections = [
  { id: "metriques-differentes", title: "Pourquoi les metriques SaaS sont differentes" },
  { id: "mrr-arr", title: "MRR et ARR" },
  { id: "nrr-grr", title: "NRR et GRR" },
  { id: "cac-ltv", title: "CAC et LTV" },
  { id: "cac-payback", title: "CAC Payback Period" },
  { id: "magic-number", title: "Magic Number" },
  { id: "pipeline-coverage", title: "Pipeline Coverage Ratio" },
  { id: "win-rate-segment", title: "Win Rate par segment" },
  { id: "cycle-vente", title: "Cycle de vente par deal size" },
  { id: "dashboard-complet", title: "Dashboard SaaS complet" },
];

const relatedArticles = [
  { title: "Les metriques RevOps : 30 indicateurs pour piloter votre revenue engine", slug: "metriques-revops-indicateurs-performance", category: "RevOps", color: "#FF7A59" },
  { title: "KPI commerciaux : les 25 indicateurs de vente a suivre", slug: "kpi-commerciaux-indicateurs-vente", category: "Data & Reporting", color: "#22C55E" },
  { title: "Comment gerer votre MRR dans HubSpot", slug: "gerer-mrr-revenu-recurrent-hubspot", category: "Data & Reporting", color: "#22C55E" },
];

export default function RevopsSaasMetriquesEssentiellesArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("metriques-differentes");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));

      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#4B5EFC", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${
                      activeSection === s.id
                        ? "border-[#FF7A59] text-[#111] font-medium"
                        : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-[#F2F2F2]">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Partager</p>
                <div className="flex gap-2">
                  <a href="https://twitter.com/intent/tweet?text=Les%20metriques%20essentielles%20du%20RevOps%20SaaS%20en%202026&url=https://ceres.agency/blog/revops-saas-metriques-essentielles" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/revops-saas-metriques-essentielles" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Article */}
          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span>
              <span className="text-[#666]">Metriques RevOps SaaS</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">16 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Les metriques essentielles du RevOps SaaS en 2026
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                MRR, NRR, CAC Payback, Magic Number. Le SaaS B2B a ses propres metriques, differentes du commerce classique. Ce guide detaille les 10 metriques essentielles a suivre, avec les formules, les benchmarks 2026, les pieges de calcul et un template de dashboard complet. Pour les CFO, les VP Sales et les RevOps qui veulent piloter avec des vrais chiffres.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>12 avril 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 */}
              <section id="metriques-differentes" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi les metriques SaaS sont differentes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un SaaS ne fonctionne pas comme un commerce classique. Vous ne vendez pas un produit une fois, vous vendez un abonnement qui doit se renouveler chaque mois. Cette difference fondamentale change tout : la maniere de mesurer le revenue, l&apos;acquisition, la rentabilite et la croissance.</p>
                    <p>Dans un business transactionnel, le chiffre d&apos;affaires du mois correspond aux ventes du mois. Dans un SaaS, le revenue du mois est la somme de tous les abonnements actifs, moins les churns, plus les expansions. Un client signe une fois, mais genere du revenue pendant 24, 36 ou 60 mois. Le CAC se rentabilise sur la duree, pas immediatement.</p>
                    <p>Cette logique de recurrence implique des metriques specifiques que le commerce traditionnel ne connait pas. Le MRR, le NRR, le CAC Payback, le Magic Number. Ces indicateurs mesurent la sante du modele recurrent : est-ce que les clients restent ? Est-ce que le cout d&apos;acquisition se rentabilise ? Est-ce que la croissance est efficiente ?</p>
                    <p>Sans ces metriques, un SaaS peut donner l&apos;impression de croitre alors qu&apos;il brule du cash. Ou inversement, sembler stagner alors que la base installee genere une croissance nette positive. Ce guide passe en revue les 10 metriques essentielles, dans l&apos;ordre ou il faut les lire.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="mrr-arr" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">MRR et ARR : la base du revenue recurrent</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">MRR (Monthly Recurring Revenue)</strong> est le revenu mensuel recurrent. C&apos;est la somme de tous les abonnements actifs, normalises sur un mois. Un client a 12 000 EUR/an represente 1 000 EUR de MRR. Un client a 500 EUR/mois represente 500 EUR de MRR.</p>
                    <p><strong className="text-[#111]">ARR (Annual Recurring Revenue)</strong> = MRR x 12. C&apos;est la projection annualisee du MRR courant. L&apos;ARR est utilise par les investisseurs et dans la valorisation. Le MRR est utilise en operations, pour le pilotage mensuel.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Decomposition du MRR</p>
                    <div className="space-y-2">
                      {[
                        { label: "New MRR", desc: "Revenue des nouveaux clients signes ce mois", color: "#22C55E", sign: "+" },
                        { label: "Expansion MRR", desc: "Upsell, cross-sell, upgrade des clients existants", color: "#4B5EFC", sign: "+" },
                        { label: "Contraction MRR", desc: "Downgrades des clients existants", color: "#FF7A59", sign: "-" },
                        { label: "Churn MRR", desc: "Revenue perdu par les clients qui partent", color: "#EF4444", sign: "-" },
                        { label: "Reactivation MRR", desc: "Revenue des clients perdus qui reviennent", color: "#6C5CE7", sign: "+" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between text-[11px] py-2 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${item.color}15`, color: item.color }}>{item.sign}</span>
                            <span className="font-medium text-[#111]">{item.label}</span>
                          </div>
                          <span className="text-[#999]">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[12px] py-2 px-3 rounded-lg bg-[#22C55E]/5 border border-[#22C55E]/20">
                      <span className="font-semibold text-[#111]">Net New MRR</span>
                      <span className="font-bold text-[#22C55E]">= New + Expansion - Contraction - Churn + Reactivation</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le piege de la reconciliation.</strong> Le MRR doit correspondre a ce que vous facturez reellement. Pas a ce que le CRM dit. Les ecarts les plus frequents : deals multi-annuels comptes en totalite le premier mois, remises non deduites, clients en periode d&apos;essai gratuite comptes comme payants. Reconciliez le MRR CRM avec le MRR comptable chaque mois. Si l&apos;ecart depasse 5%, vous avez un probleme de data.</p>
                    <p><strong className="text-[#111]">Benchmark 2026.</strong> Croissance du Net New MRR saine pour un SaaS B2B en phase de croissance : 5 a 10% par mois en early stage, 3 a 5% en growth, 1 a 3% en scale. Si votre MRR stagne, ce n&apos;est pas forcement un probleme d&apos;acquisition : verifiez le churn et la contraction d&apos;abord.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="nrr-grr" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">NRR et GRR : retention brute vs nette</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La retention est la metrique la plus importante d&apos;un SaaS. Un SaaS avec un excellent taux de retention peut croitre meme sans nouveaux clients. Un SaaS avec une mauvaise retention doit acquerir constamment pour compenser les pertes. Deux metriques complementaires pour la mesurer.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <p className="text-[12px] font-semibold text-[#4B5EFC] mb-2">GRR (Gross Revenue Retention)</p>
                      <p className="text-[11px] text-[#777] leading-[1.7] mb-3">Mesure la retention brute, sans compter l&apos;expansion. C&apos;est le pourcentage de revenue que vous conservez de vos clients existants, en ne comptant que les pertes (churn + contraction).</p>
                      <div className="rounded-lg bg-[#4B5EFC]/5 p-3 mb-3">
                        <p className="text-[10px] font-semibold text-[#4B5EFC]">Formule</p>
                        <p className="text-[10px] text-[#888]">(MRR debut - Churn MRR - Contraction MRR) / MRR debut</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px]"><span className="text-[#999]">Excellent</span><span className="text-[#22C55E] font-medium">&gt; 95%</span></div>
                        <div className="flex justify-between text-[10px]"><span className="text-[#999]">Bon</span><span className="text-[#4B5EFC] font-medium">90-95%</span></div>
                        <div className="flex justify-between text-[10px]"><span className="text-[#999]">A risque</span><span className="text-[#EF4444] font-medium">&lt; 90%</span></div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <p className="text-[12px] font-semibold text-[#22C55E] mb-2">NRR (Net Revenue Retention)</p>
                      <p className="text-[11px] text-[#777] leading-[1.7] mb-3">Mesure la retention nette, en comptant l&apos;expansion. C&apos;est le revenue que vous generez de votre base existante, incluant upsell et cross-sell. Un NRR &gt; 100% signifie que votre base existante croit naturellement.</p>
                      <div className="rounded-lg bg-[#22C55E]/5 p-3 mb-3">
                        <p className="text-[10px] font-semibold text-[#22C55E]">Formule</p>
                        <p className="text-[10px] text-[#888]">(MRR debut + Expansion - Contraction - Churn) / MRR debut</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px]"><span className="text-[#999]">Excellent</span><span className="text-[#22C55E] font-medium">&gt; 120%</span></div>
                        <div className="flex justify-between text-[10px]"><span className="text-[#999]">Bon</span><span className="text-[#4B5EFC] font-medium">100-120%</span></div>
                        <div className="flex justify-between text-[10px]"><span className="text-[#999]">A risque</span><span className="text-[#EF4444] font-medium">&lt; 100%</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Pourquoi les deux comptent.</strong> Un GRR a 85% avec un NRR a 110%, ca signifie que vous perdez 15% de votre base chaque annee, mais que l&apos;expansion compense et depasse les pertes. C&apos;est une croissance fragile. Si l&apos;expansion ralentit, le churn devient visible. Le GRR revele la sante reelle de votre produit. Le NRR revele votre capacite d&apos;expansion.</p>
                    <p><strong className="text-[#111]">Benchmark 2026.</strong> Les meilleurs SaaS B2B mid-market affichent un GRR superieur a 92% et un NRR superieur a 115%. Chez les SaaS enterprise, le NRR depasse regulierement 130%, porte par des strategies de land-and-expand agressives.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="cac-ltv" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">CAC et LTV : cout d&apos;acquisition et valeur vie</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">CAC (Customer Acquisition Cost)</strong> = total des depenses sales + marketing / nombre de nouveaux clients. Incluez tout : salaires de l&apos;equipe commerciale, outils, publicite, contenu, evenements, agences. Un CAC qui exclut les salaires n&apos;est pas un CAC, c&apos;est une illusion.</p>
                    <p><strong className="text-[#111]">LTV (Lifetime Value)</strong> = ARPA (revenu moyen par client) x duree de vie moyenne du client. En SaaS, la duree de vie moyenne se calcule comme 1 / taux de churn mensuel. Si votre churn mensuel est de 2%, la duree de vie moyenne est de 50 mois.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Exemple de calcul CAC et LTV</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <p className="text-[11px] font-semibold text-[#EF4444] mb-2">CAC</p>
                        {[
                          { label: "Salaires sales (3 personnes)", value: "25 000 EUR/mois" },
                          { label: "Salaires marketing (2 personnes)", value: "14 000 EUR/mois" },
                          { label: "Outils et ads", value: "6 000 EUR/mois" },
                          { label: "Total mensuel", value: "45 000 EUR" },
                          { label: "Nouveaux clients/mois", value: "15" },
                        ].map((r) => (
                          <div key={r.label} className="flex items-center justify-between text-[10px] py-1 px-2 rounded bg-white border border-[#F2F2F2]">
                            <span className="text-[#777]">{r.label}</span>
                            <span className="text-[#111] font-medium">{r.value}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-between text-[11px] py-1.5 px-2 rounded bg-[#EF4444]/5 border border-[#EF4444]/20">
                          <span className="font-semibold text-[#111]">CAC</span>
                          <span className="font-bold text-[#EF4444]">3 000 EUR</span>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-2">LTV</p>
                        {[
                          { label: "ARPA", value: "800 EUR/mois" },
                          { label: "Marge brute", value: "75%" },
                          { label: "Churn mensuel", value: "2.5%" },
                          { label: "Duree de vie moyenne", value: "40 mois" },
                          { label: "Marge par client/mois", value: "600 EUR" },
                        ].map((r) => (
                          <div key={r.label} className="flex items-center justify-between text-[10px] py-1 px-2 rounded bg-white border border-[#F2F2F2]">
                            <span className="text-[#777]">{r.label}</span>
                            <span className="text-[#111] font-medium">{r.value}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-between text-[11px] py-1.5 px-2 rounded bg-[#22C55E]/5 border border-[#22C55E]/20">
                          <span className="font-semibold text-[#111]">LTV</span>
                          <span className="font-bold text-[#22C55E]">24 000 EUR</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-[12px] py-2 px-3 rounded-lg bg-[#4B5EFC]/5 border border-[#4B5EFC]/20">
                      <span className="font-semibold text-[#111]">Ratio LTV / CAC</span>
                      <span className="font-bold text-[#4B5EFC]">8x</span>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-2">Ratio sain &gt; 3x. En dessous, l&apos;acquisition coute trop cher. Au-dessus de 5x, vous sous-investissez peut-etre en acquisition.</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les pieges du calcul.</strong> Le CAC doit etre fully loaded : salaires charges, outils, freelances, agences, contenu, evenements. Un CAC &ldquo;marketing only&rdquo; qui exclut les couts sales est trompeur. L&apos;autre piege classique : calculer la LTV sur la marge brute, pas sur le revenue brut. La LTV doit refleter la marge, sinon un client a forte LTV peut etre deficitaire si les couts de delivery sont eleves.</p>
                    <p><strong className="text-[#111]">Segmentez.</strong> Le ratio LTV/CAC global est une moyenne qui cache des realites differentes. Calculez-le par segment (SMB, Mid-Market, Enterprise), par canal d&apos;acquisition (inbound, outbound, partners) et par cohorte. Un ratio global de 5x peut cacher un segment a 12x et un autre a 1.5x.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="cac-payback" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">CAC Payback Period</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le ratio LTV/CAC vous dit si l&apos;acquisition est rentable. Le CAC Payback vous dit quand. C&apos;est le nombre de mois necessaires pour recuperer le cout d&apos;acquisition d&apos;un client.</p>
                    <p className="text-[12px] font-semibold text-[#111] bg-[#FAFAFA] rounded-lg p-3 border border-[#F2F2F2]">CAC Payback = CAC / (ARPA x Marge brute)</p>
                    <p>Dans l&apos;exemple precedent : 3 000 EUR / (800 EUR x 75%) = 5 mois. Cela signifie qu&apos;un client devient rentable a partir du 6eme mois. Pendant les 5 premiers mois, vous financez l&apos;acquisition. C&apos;est du cash immobilise.</p>
                    <p><strong className="text-[#111]">Pourquoi c&apos;est critique.</strong> Un SaaS en croissance rapide avec un CAC Payback de 18 mois a un probleme de cash. Chaque nouveau client coute de l&apos;argent pendant 18 mois avant de rapporter. Plus vous croissez vite, plus vous brule de cash. C&apos;est le paradoxe du SaaS en croissance.</p>
                  </div>

                  <div className="my-6 grid grid-cols-3 gap-3">
                    {[
                      { range: "< 6 mois", verdict: "Excellent", desc: "Croissance auto-financee possible", color: "#22C55E" },
                      { range: "6-12 mois", verdict: "Bon", desc: "Standard pour le SaaS B2B mid-market", color: "#4B5EFC" },
                      { range: "> 12 mois", verdict: "A surveiller", desc: "Necessite du financement externe pour croitre", color: "#EF4444" },
                    ].map((item) => (
                      <div key={item.range} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[16px] font-bold mb-1" style={{ color: item.color }}>{item.range}</p>
                        <p className="text-[11px] font-semibold text-[#111] mb-1">{item.verdict}</p>
                        <p className="text-[9px] text-[#999] leading-[1.4]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Comment l&apos;ameliorer.</strong> Trois leviers : augmenter l&apos;ARPA (upsell au onboarding, pricing par paliers), ameliorer la marge brute (automatisation du delivery, self-service), ou reduire le CAC (meilleur ciblage, content marketing, inbound). Le levier le plus rapide est souvent l&apos;ARPA : un meilleur packaging peut augmenter le ticket moyen de 20 a 30% sans changer le produit.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="magic-number" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Magic Number</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Magic Number mesure l&apos;efficience de vos depenses sales et marketing. Pour chaque euro depense en S&amp;M, combien d&apos;euros de nouveau revenue recurrent generez-vous ?</p>
                    <p className="text-[12px] font-semibold text-[#111] bg-[#FAFAFA] rounded-lg p-3 border border-[#F2F2F2]">Magic Number = (Net New ARR du trimestre) / (Depenses S&amp;M du trimestre precedent)</p>
                    <p>On utilise le trimestre precedent pour les depenses S&amp;M car il y a un decalage entre l&apos;investissement et le resultat. Un lead genere en Q1 se convertit en client en Q2. Le Magic Number capte ce decalage.</p>
                  </div>

                  <div className="my-6 grid grid-cols-3 gap-3">
                    {[
                      { range: "> 0.75", verdict: "Accelerer", desc: "Chaque euro S&M genere plus de 0.75 EUR d'ARR. Investissez plus.", color: "#22C55E" },
                      { range: "0.5 - 0.75", verdict: "Optimiser", desc: "Efficience correcte. Optimisez avant d'augmenter le budget.", color: "#FF7A59" },
                      { range: "< 0.5", verdict: "Probleme", desc: "L'acquisition est inefficiente. Diagnostiquez avant de depenser plus.", color: "#EF4444" },
                    ].map((item) => (
                      <div key={item.range} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[16px] font-bold mb-1" style={{ color: item.color }}>{item.range}</p>
                        <p className="text-[11px] font-semibold text-[#111] mb-1">{item.verdict}</p>
                        <p className="text-[9px] text-[#999] leading-[1.4]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;interet du Magic Number par rapport au CAC.</strong> Le CAC mesure le cout par client. Le Magic Number mesure l&apos;efficience globale de la machine de revenus. Il prend en compte le volume et le panier moyen, pas seulement le nombre de clients. Un Magic Number en hausse signifie que votre machine de revenus devient plus efficiente, meme si le CAC reste stable.</p>
                    <p><strong className="text-[#111]">Piege.</strong> Le Magic Number peut etre artificiellement eleve en Q4 si vos clients signent des contrats annuels concentres en fin d&apos;annee. Lissez sur 2 trimestres pour avoir une vision plus fiable.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="pipeline-coverage" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pipeline Coverage Ratio</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Pipeline Coverage Ratio repond a une question simple : avez-vous assez de pipeline pour atteindre votre objectif de revenue ?</p>
                    <p className="text-[12px] font-semibold text-[#111] bg-[#FAFAFA] rounded-lg p-3 border border-[#F2F2F2]">Pipeline Coverage = Pipeline total ouvert / Objectif de revenue du trimestre</p>
                    <p>Si votre objectif trimestriel est de 300 000 EUR et que votre pipeline ouvert est de 900 000 EUR, votre coverage est de 3x. Est-ce suffisant ? Ca depend de votre win rate.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-3 text-center">Coverage requise selon le win rate</p>
                    <div className="space-y-1.5">
                      {[
                        { winRate: "15%", coverage: "6.7x", comment: "Pipeline tres large, qualification a ameliorer" },
                        { winRate: "20%", coverage: "5x", comment: "Standard SaaS B2B early stage" },
                        { winRate: "25%", coverage: "4x", comment: "Bon niveau, equipe structuree" },
                        { winRate: "30%", coverage: "3.3x", comment: "Excellent, process de vente mature" },
                        { winRate: "40%", coverage: "2.5x", comment: "Top tier, qualification tres selective" },
                      ].map((r) => (
                        <div key={r.winRate} className="flex items-center justify-between text-[11px] py-2 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <span className="text-[#111] font-medium w-[60px]">WR {r.winRate}</span>
                          <span className="text-[#4B5EFC] font-bold w-[60px] text-center">{r.coverage}</span>
                          <span className="text-[#999] flex-1 text-right">{r.comment}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Coverage minimale = 1 / Win Rate. Ajoutez 20% de marge de securite.</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Mesurez-le chaque semaine.</strong> Le pipeline coverage en debut de trimestre doit etre au moins 4x l&apos;objectif. En milieu de trimestre, 2.5x. En fin de trimestre, le pipeline restant doit couvrir au moins 1.5x le gap entre le revenue realise et l&apos;objectif. Si la coverage baisse trop vite, c&apos;est un signal d&apos;alerte pour le trimestre suivant.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="win-rate-segment" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Win Rate par segment</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le win rate global est une moyenne qui ment. Un SaaS avec un win rate global de 25% peut avoir un win rate de 40% sur le SMB, 20% sur le Mid-Market et 10% sur l&apos;Enterprise. Ces trois segments ont des dynamiques completement differentes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { segment: "SMB (< 50 salaries)", winRate: "30-40%", cycle: "15-30 jours", aov: "500-2 000 EUR/mois", notes: "Volume eleve, decision rapide, churn plus eleve. Le win rate depend surtout de la qualite du self-service et du pricing.", color: "#22C55E" },
                      { segment: "Mid-Market (50-500 salaries)", winRate: "20-30%", cycle: "30-60 jours", aov: "2 000-8 000 EUR/mois", notes: "Sweet spot pour la plupart des SaaS B2B. Decision collegiale, demo necessaire, ROI a demontrer.", color: "#4B5EFC" },
                      { segment: "Enterprise (500+ salaries)", winRate: "10-20%", cycle: "90-180 jours", aov: "8 000-50 000 EUR/mois", notes: "Cycle long, procurement, securite, compliance. Win rate plus faible mais ACV beaucoup plus eleve.", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.segment} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.segment}</span>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium" style={{ background: `${item.color}15`, color: item.color }}>Win Rate : {item.winRate}</span>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#FAFAFA] text-[10px] font-medium text-[#999]">Cycle : {item.cycle}</span>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#FAFAFA] text-[10px] font-medium text-[#999]">ACV : {item.aov}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.notes}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Analysez les pertes.</strong> Le win rate par segment doit etre complete par une analyse win/loss. Pourquoi perdez-vous les deals ? Pricing, fonctionnalites manquantes, concurrent, timing, inaction du prospect ? Chaque raison de perte est un levier d&apos;amelioration. Un SaaS qui perd 40% de ses deals sur le pricing a un probleme de packaging, pas de vente.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 */}
              <section id="cycle-vente" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Cycle de vente par deal size</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le cycle de vente moyen ne veut rien dire si vous ne le segmentez pas par taille de deal. Un deal a 500 EUR/mois se signe en 2 semaines. Un deal a 20 000 EUR/mois prend 4 a 6 mois. Melanger les deux dans une moyenne donne un chiffre inutile.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Benchmarks du cycle de vente SaaS B2B 2026</p>
                    <div className="space-y-1.5">
                      {[
                        { acv: "< 5K EUR/an", cycle: "14-21 jours", touches: "2-3 touchpoints", decision: "1 personne", color: "#22C55E" },
                        { acv: "5-20K EUR/an", cycle: "30-45 jours", touches: "4-6 touchpoints", decision: "2-3 personnes", color: "#4B5EFC" },
                        { acv: "20-50K EUR/an", cycle: "60-90 jours", touches: "7-10 touchpoints", decision: "3-5 personnes", color: "#6C5CE7" },
                        { acv: "50-100K EUR/an", cycle: "90-120 jours", touches: "10-15 touchpoints", decision: "5-8 personnes", color: "#FF7A59" },
                        { acv: "> 100K EUR/an", cycle: "120-180 jours", touches: "15+ touchpoints", decision: "8+ personnes", color: "#EF4444" },
                      ].map((r) => (
                        <div key={r.acv} className="flex items-center text-[11px] py-2 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <span className="text-[#111] font-medium w-[120px]">{r.acv}</span>
                          <span className="font-bold w-[100px] text-center" style={{ color: r.color }}>{r.cycle}</span>
                          <span className="text-[#999] w-[110px] text-center">{r.touches}</span>
                          <span className="text-[#999] flex-1 text-right">{r.decision}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Surveillez les anomalies.</strong> Un deal qui depasse de 50% le cycle moyen de sa tranche a de fortes chances de ne pas se conclure. C&apos;est un signal que le deal est bloque, que le champion interne a perdu l&apos;elan ou que le besoin n&apos;est plus prioritaire. Mettez en place des alertes automatiques dans le CRM : si un deal depasse 1.5x le cycle moyen de sa tranche, notification au manager pour review.</p>
                    <p><strong className="text-[#111]">L&apos;IA accelere le cycle.</strong> Un meilleur scoring reduit le temps de qualification. Des resumes de calls automatiques accelerent le passage d&apos;une etape a l&apos;autre. Des emails personnalises par l&apos;IA reduisent les temps de reponse. En moyenne, l&apos;IA reduit le cycle de vente de 15 a 20% sur les segments Mid-Market et Enterprise.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 */}
              <section id="dashboard-complet" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Dashboard SaaS complet</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Toutes ces metriques doivent vivre dans un dashboard unique, accessible a toute l&apos;equipe dirigeante. Pas un dashboard par equipe, un dashboard commun qui raconte la meme histoire a tout le monde. Voici la structure que l&apos;on recommande.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { bloc: "Revenue Health", metrics: "MRR, Net New MRR, ARR, MRR Growth Rate", freq: "Mis a jour quotidiennement", color: "#22C55E" },
                      { bloc: "Retention", metrics: "GRR, NRR, Logo Churn Rate, Revenue Churn Rate", freq: "Calcule mensuellement", color: "#4B5EFC" },
                      { bloc: "Efficiency", metrics: "CAC, LTV, LTV/CAC, CAC Payback, Magic Number", freq: "Calcule trimestriellement", color: "#6C5CE7" },
                      { bloc: "Pipeline", metrics: "Pipeline Coverage, Win Rate par segment, Cycle par deal size, Pipeline Velocity", freq: "Mis a jour hebdomadairement", color: "#FF7A59" },
                      { bloc: "Activity", metrics: "Meetings booked, Proposals sent, Demos completed, Leads generated", freq: "Mis a jour quotidiennement", color: "#D4A27F" },
                    ].map((item) => (
                      <div key={item.bloc} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-white">{item.bloc}</p>
                          <span className="text-[9px] text-[#666] ml-auto">{item.freq}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.metrics}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on configure ce dashboard dans HubSpot avec des rapports custom et des proprietes calculees. Pour les metriques complexes (NRR, Magic Number, CAC Payback), on utilise des agents IA qui calculent automatiquement les valeurs chaque mois et mettent a jour le dashboard. Le dirigeant ouvre son CRM le lundi matin et voit la sante de son business en un coup d&apos;oeil.</p>
                    <p>On accompagne les SaaS B2B de la definition des metriques a la mise en place du dashboard, en passant par la reconciliation des donnees. Pas de metriques approximatives. Des chiffres fiables, calcules de la meme maniere chaque mois.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Piloter vos metriques SaaS avec precision ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">On met en place le dashboard RevOps SaaS complet dans votre HubSpot. MRR, NRR, CAC Payback, Magic Number, Pipeline Coverage. Des vrais chiffres, reconcilies avec votre comptabilite, mis a jour automatiquement.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF7A59] text-white rounded-lg text-[13px] font-medium hover:bg-[#E8694D] transition-colors">
                  Configurer votre dashboard SaaS
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Related articles */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#111] mb-4">Articles complementaires</h3>
                <div className="grid gap-3">
                  {relatedArticles.map((a) => (
                    <Link key={a.slug} href={`/blog/${a.slug}`} className="group flex items-center gap-4 rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors">
                      <div className="w-1 h-10 rounded-full" style={{ background: a.color }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-medium mb-1" style={{ color: a.color }}>{a.category}</p>
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#FF7A59] transition-colors leading-[1.4]">{a.title}</p>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m9 18 6-6-6-6" /></svg>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
