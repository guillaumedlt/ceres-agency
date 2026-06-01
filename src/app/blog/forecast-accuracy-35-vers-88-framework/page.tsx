"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Forecast accuracy : passer de 35% a 88% en 6 mois (framework)",
  description: "Framework concret pour transformer un forecast au doigt en forecast fiable. 7 leviers eprouves sur des scale-ups SaaS B2B.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/forecast-accuracy-35-vers-88-framework" },
  articleSection: "Strategie RevOps", wordCount: 2300, inLanguage: "fr",
};

const sections = [
  { id: "constat", title: "Le constat" },
  { id: "definir", title: "Definir le forecast accuracy" },
  { id: "7-leviers", title: "Les 7 leviers" },
  { id: "roadmap", title: "Roadmap 6 mois" },
  { id: "rituels", title: "Rituels du forecast" },
];

const relatedArticles = [
  { title: "Forecasting commercial : methodes et outils", slug: "forecasting-commercial-methodes-outils", category: "Methodologie", color: "#FF7A59" },
  { title: "Framework SCORE de Ceres", slug: "../framework-score-revops", category: "Framework", color: "#4B5EFC" },
  { title: "Calculateur Pipeline Coverage", slug: "../outils/calculateur-pipeline-coverage", category: "Outil", color: "#22C55E" },
];

export default function ForecastAccuracyArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("constat");
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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#22C55E] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#22C55E] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">Forecast accuracy framework</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Strategie RevOps</Badge><span className="text-[11px] text-[#CCC]">12 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">Forecast accuracy : passer de 35 % a 88 % en 6 mois</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">La mediane des scale-ups SaaS B2B en France a 35-50% de forecast accuracy a 90 jours. Les bonnes equipes sont a 75-88%. L&apos;ecart vient de 7 choses concretes.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="constat" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le constat brutal</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Sur 250+ missions Ceres, voici ce qu&apos;on observe au baseline :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Scale-up early (10-15M ARR) : forecast accuracy mediane <strong>32-40 %</strong> a 90 jours</li>
                    <li>Scale-up mid (30-80M ARR) : <strong>45-58 %</strong></li>
                    <li>Scale-up late / public (100M+) : <strong>70-85 %</strong></li>
                  </ul>
                  <p>Resultat : les VPs Sales atterrissent ou bien au-dessus, ou bien tres en-dessous des commits faits au board. Dans les deux cas, mauvais signal. Et les CROs vivent dans l&apos;anxiete tous les trois mois.</p>
                  <p>La bonne nouvelle : c&apos;est <strong>presque entierement systemique</strong>. Pas un probleme de qualite des commerciaux, mais un probleme d&apos;ingenierie du process.</p>
                </div>
              </div></section>
              <Connector />

              <section id="definir" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Comment definir et mesurer le forecast accuracy</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Definition pragmatique : <strong>accuracy = 1 - |actual - forecast| / actual</strong>.</p>
                  <p>Si on forecast 1M et on fait 950k, accuracy = 95 %. Si on forecast 1M et on fait 1.2M, accuracy = 80 % (l&apos;overshoot compte negativement).</p>
                  <p>On mesure typiquement a 3 horizons :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>30 jours</strong> : tres haute precision attendue (90-95% pour un bon process)</li>
                    <li><strong>90 jours</strong> : le KPI cle pour le board (objectif 80-88%)</li>
                    <li><strong>180 jours</strong> : moyenne precision (60-75%)</li>
                  </ul>
                  <p>Mesurer sur 3 trimestres glissants pour eviter la variance.</p>
                </div>
              </div></section>
              <Connector />

              <section id="7-leviers" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 7 leviers pour passer de 35 a 88 %</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">1. Stage criteria stricts et appliques</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">Chaque stage du pipeline a des criteres exit objectifs (ex. &laquo; Proposal &raquo; = devis envoye + decideur identifie). Aucun deal ne progresse sans validation. Impact : <strong>+12-15 pts</strong>.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">2. Categorisation commit / best case / pipe</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">Les AEs categorisent leurs deals en 3 buckets. Pondere : commit 90%, best case 50%, pipe 25%. Le forecast devient un calcul, pas une intuition. Impact : <strong>+8-12 pts</strong>.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">3. Pipeline coverage minimum impose</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">Si le coverage est &lt; 3x au debut du trimestre, le forecast est mecaniquement biaise. Imposer un minimum + alertes. Impact : <strong>+5-8 pts</strong>.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">4. Forecast IA en parallel de celui des AEs</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">Modele predictif (HubSpot Breeze, Salesforce Einstein, ou agent Claude via MCP) tourne en parallele. Quand les 2 sont d&apos;accord, la confiance monte. Quand divergent, deal a examiner. Impact : <strong>+6-10 pts</strong>.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">5. Detection des deals zombies</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">Tout deal sans activite depuis 14 jours sort du forecast automatiquement. Aujourd&apos;hui les AEs gardent leurs deals dans le pipeline trop longtemps. Impact : <strong>+5-7 pts</strong>.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">6. Accountability : forecast individuel publie</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">Chaque AE voit son accuracy historique. Les meilleurs sont reconnus, les autres ont du feedback. Effet conditionnement : on s&apos;ameliore quand on est mesure. Impact : <strong>+4-6 pts</strong>.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">7. Forecast weekly + drill-down par segment</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">Refreshed weekly (pas mensuel) avec drill-down par segment (SMB, mid, enterprise). Plus de granularite = decisions correctives plus tot. Impact : <strong>+3-5 pts</strong>.</p>
                  </div>
                </div>
              </div></section>
              <Connector />

              <section id="roadmap" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Roadmap 6 mois de deploiement</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">M1-M2 : Stabiliser la base</p><p className="text-[12px] text-[#777] leading-[1.65]">Definir stage criteria, nettoyer le pipeline existant, mettre en place la categorisation commit/best/pipe. Cible : 50-55%.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">M3-M4 : Detection et coverage</p><p className="text-[12px] text-[#777] leading-[1.65]">Automatisations detection deals zombies, alertes coverage, premiers dashboards individuels. Cible : 65-72%.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">M5-M6 : IA et rituels</p><p className="text-[12px] text-[#777] leading-[1.65]">Modele IA en parallel, forecast weekly avec drill-down, refinement des rituels. Cible : 80-88%.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="rituels" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les rituels qui font tenir le systeme</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Sans rituels, le forecast process derive en 4-6 semaines.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Forecast call weekly (vendredi 16h)</strong> : 45 min. AE par AE, deals commit + best case. Pas de defense, juste les faits.</li>
                    <li><strong>Pipeline review monthly</strong> : 90 min. Drill-down par segment, age des deals, conversion stages. Decisions correctives.</li>
                    <li><strong>Forecast retrospective quarterly</strong> : 2h. Comparer prediction vs actual. Identifier les patterns d&apos;erreur (AE specifiques, segments, deals types).</li>
                    <li><strong>Forecast accuracy review semi-annual avec CEO</strong> : presentation de l&apos;evolution + 1 levier prioritaire pour le H+1.</li>
                  </ul>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Votre forecast accuracy est sous 60 % ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour diagnostiquer ou ca casse et prioriser les 2-3 leviers a impact rapide.</p>
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
