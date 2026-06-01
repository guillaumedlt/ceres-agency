"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "MEDDIC vs MEDDPICC vs BANT : quel framework de qualification en 2026",
  description: "Comparatif des 3 frameworks majeurs de qualification commerciale B2B. MEDDIC, MEDDPICC et BANT decortiques avec cas d'usage 2026.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/meddic-vs-meddpicc-vs-bant-qualification" },
  articleSection: "Strategie RevOps", wordCount: 2200, inLanguage: "fr",
};

const sections = [
  { id: "intro", title: "Pourquoi qualifier" },
  { id: "bant", title: "BANT en detail" },
  { id: "meddic", title: "MEDDIC en detail" },
  { id: "meddpicc", title: "MEDDPICC en detail" },
  { id: "tableau", title: "Tableau comparatif" },
  { id: "choisir", title: "Comment choisir" },
];

const relatedArticles = [
  { title: "Forecast accuracy : framework 35 -> 88%", slug: "forecast-accuracy-35-vers-88-framework", category: "Strategie RevOps", color: "#FF7A59" },
  { title: "Pipeline hygiene : 12 automations CRM", slug: "pipeline-hygiene-12-automations-crm", category: "Strategie RevOps", color: "#4B5EFC" },
  { title: "Sales enablement : guide complet", slug: "sales-enablement-guide", category: "Sales Ops", color: "#6D00CC" },
];

export default function MeddicVsBantArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");
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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#4B5EFC] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">MEDDIC vs MEDDPICC vs BANT</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Strategie RevOps</Badge><span className="text-[11px] text-[#CCC]">11 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">MEDDIC vs MEDDPICC vs BANT : quel framework de qualification en 2026 ?</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Le choix du framework de qualification structure 80% de ton process Sales. Mauvais framework = mauvais deals dans le pipeline = forecast cuit.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="intro" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pourquoi tu DOIS choisir un framework</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Sans framework de qualification, chaque AE qualifie a sa sauce. Resultat : pipeline incoherent, forecast au doigt, deals zombies a la pelle.</p>
                  <p>Un framework t&apos;impose 4 a 9 questions standardisees a chaque deal. C&apos;est : (1) plus dur a faire au depart (les AEs vont raler), (2) immensement plus puissant en pilotage (le manager peut diagnostiquer ou ca coince), (3) la base d&apos;un forecast fiable.</p>
                </div>
              </div></section>
              <Connector />

              <section id="bant" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">BANT (cree par IBM 1960)</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>4 criteres : <strong>Budget, Authority, Need, Timeline</strong>. Le framework le plus ancien, le plus simple, le plus repandu.</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Budget :</strong> le prospect a-t-il les fonds ?</li>
                    <li><strong>Authority :</strong> est-il decideur ?</li>
                    <li><strong>Need :</strong> a-t-il un besoin reel ?</li>
                    <li><strong>Timeline :</strong> quand veut-il acheter ?</li>
                  </ul>
                  <p><strong>Force :</strong> simple a appliquer, comprehensible en 5 min, accessible aux SDR juniors.</p>
                  <p><strong>Faiblesse :</strong> trop binaire pour les ventes complexes 2026. Manque l&apos;aspect technique, le ROI, le competitive context.</p>
                  <p><strong>Best for :</strong> SMB / transactionnel, cycle &lt; 3 mois, ACV &lt; 30k EUR.</p>
                </div>
              </div></section>
              <Connector />

              <section id="meddic" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">MEDDIC (PTC, annees 1990)</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>6 criteres : <strong>Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion</strong>. Plus rigoureux, conçu pour les ventes enterprise.</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Metrics :</strong> quels KPIs le prospect cherche a impacter ?</li>
                    <li><strong>Economic buyer :</strong> qui signe le cheque (pas forcement decideur fonctionnel) ?</li>
                    <li><strong>Decision criteria :</strong> sur quoi base-t-il sa decision ?</li>
                    <li><strong>Decision process :</strong> comment se deroule l&apos;achat (steps, stakeholders) ?</li>
                    <li><strong>Identify pain :</strong> quelle douleur on resout ?</li>
                    <li><strong>Champion :</strong> qui dans l&apos;org pousse pour nous ?</li>
                  </ul>
                  <p><strong>Force :</strong> oblige le AE a comprendre profondement le contexte. Meilleur pour la qualif d&apos;opportunites complexes.</p>
                  <p><strong>Faiblesse :</strong> overkill pour deals courts/petits. Adoption demande du training.</p>
                  <p><strong>Best for :</strong> Mid-market a enterprise, cycle 3-12 mois, ACV 30k-300k EUR.</p>
                </div>
              </div></section>
              <Connector />

              <section id="meddpicc" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">MEDDPICC (extension MEDDIC)</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>MEDDIC + 2 criteres : <strong>Paper process</strong> (procurement, legal, security) et <strong>Competition</strong>. Conçu pour les ventes enterprise avec procurement complexe.</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Paper process :</strong> a quoi ressemble le processus contractuel ? Procurement involved ? Security review ? Legal ?</li>
                    <li><strong>Competition :</strong> qui sont nos concurrents perçus ou actuels sur ce deal ?</li>
                  </ul>
                  <p><strong>Force :</strong> reflete la realite enterprise 2026 ou un deal de 200k+ implique 8-15 stakeholders, 3-6 mois de procurement, et plusieurs vendors en parallel.</p>
                  <p><strong>Faiblesse :</strong> tres lourd, demande discipline forte. Inutilement complexe pour SMB.</p>
                  <p><strong>Best for :</strong> Enterprise, cycle &gt; 6 mois, ACV &gt; 100k EUR, deals strategiques.</p>
                </div>
              </div></section>
              <Connector />

              <section id="tableau" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">BANT</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">MEDDIC</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">MEDDPICC</th></tr></thead>
                    <tbody className="text-[#555]">
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Nb criteres</td><td className="p-3 border-b border-[#F2F2F2]">4</td><td className="p-3 border-b border-[#F2F2F2]">6</td><td className="p-3 border-b border-[#F2F2F2]">8</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Complexite</td><td className="p-3 border-b border-[#F2F2F2]">Simple</td><td className="p-3 border-b border-[#F2F2F2]">Moyenne</td><td className="p-3 border-b border-[#F2F2F2]">Elevee</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Time to onboard AE</td><td className="p-3 border-b border-[#F2F2F2]">1 jour</td><td className="p-3 border-b border-[#F2F2F2]">1 semaine</td><td className="p-3 border-b border-[#F2F2F2]">2-3 semaines</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">ACV ideal</td><td className="p-3 border-b border-[#F2F2F2]">&lt; 30k EUR</td><td className="p-3 border-b border-[#F2F2F2]">30k-300k EUR</td><td className="p-3 border-b border-[#F2F2F2]">&gt; 100k EUR</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Cycle ideal</td><td className="p-3 border-b border-[#F2F2F2]">&lt; 3 mois</td><td className="p-3 border-b border-[#F2F2F2]">3-12 mois</td><td className="p-3 border-b border-[#F2F2F2]">&gt; 6 mois</td></tr>
                      <tr><td className="p-3 font-medium text-[#111]">Profil equipe</td><td className="p-3">SDR + AE Junior</td><td className="p-3">AE Senior</td><td className="p-3">AE Senior + AE Strategique</td></tr>
                    </tbody>
                  </table>
                </div>
              </div></section>
              <Connector />

              <section id="choisir" className="mb-8"><div className="rounded-2xl bg-[#111] p-5 md:p-8">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Notre recommandation par profil</h2>
                <div className="space-y-3 text-[13px] text-white/70 leading-[1.75]">
                  <p><strong className="text-white">Startup Seed - Series A, ACV &lt; 30k :</strong> BANT. Pas la peine de surcompliquer, BANT bien applique vaut mieux que MEDDIC mal applique.</p>
                  <p><strong className="text-white">Scale-up Serie B/C, ACV 30k-300k :</strong> MEDDIC. C&apos;est le sweet spot pour la plupart des SaaS B2B francais qu&apos;on accompagne.</p>
                  <p><strong className="text-white">Scale-up late / Enterprise, ACV &gt; 100k avec procurement :</strong> MEDDPICC. Indispensable des qu&apos;on touche aux deals 6 mois+ avec security review.</p>
                  <p><strong className="text-white">Hybride :</strong> certaines boites utilisent BANT pour SMB et MEDDIC pour mid-market en parallele. Possible mais demande discipline.</p>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Deployer le framework adapte ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour identifier le framework adapte a ton stade + plan de deploiement.</p>
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
