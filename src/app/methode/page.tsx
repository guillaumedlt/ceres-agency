"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const sections = [
  { id: "these", title: "La these" },
  { id: "equation", title: "L'equation RevOps" },
  { id: "phase-1", title: "Phase 1 : Audit" },
  { id: "phase-2", title: "Phase 2 : Design" },
  { id: "phase-3", title: "Phase 3 : Build" },
  { id: "phase-4", title: "Phase 4 : Run" },
  { id: "non-faits", title: "Ce qu'on ne fait pas" },
  { id: "delegation", title: "Notre engagement" },
  { id: "impact", title: "L'impact mesure" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Notre methode RevOps : Audit, Design, Build, Run",
      description:
        "La methodologie Ceres pour transformer votre revenue engine en 4 phases. Audit (72h), Design (2 sem), Build (4-8 sem), Run (continu). 250+ missions SaaS B2B.",
      url: "https://ceres.agency/methode",
      publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      author: { "@type": "Person", name: "Guillaume Delachet" },
      inLanguage: "fr",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
        { "@type": "ListItem", position: 2, name: "Methode", item: "https://ceres.agency/methode" },
      ],
    },
    {
      "@type": "Service",
      name: "Methode RevOps Ceres",
      serviceType: "Revenue Operations Consulting",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      areaServed: "FR",
      description:
        "Methodologie en 4 phases pour aligner Sales, Marketing et CS autour d'une stack, d'une donnee et de process partages.",
    },
  ],
};

export default function MethodePage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("these");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "3%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "12%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "24%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "36%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "48%", width: 260, height: 260, borderRadius: "50%", background: "#D4A27F", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "60%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "72%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "85%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Notre%20methode%20RevOps%20%E2%80%93%20Audit%2C%20Design%2C%20Build%2C%20Run&url=https://ceres.agency/methode" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/methode" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-[700px]">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <span className="text-[#666]">Methode</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Notre methode</Badge>
                <span className="text-[11px] text-[#CCC]">15 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Notre methode RevOps en 4 phases
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Audit, Design, Build, Run. Notre methodologie pour transformer votre revenue engine — eprouvee sur 250+ missions SaaS B2B. Pas de slide deck, pas de tunnel, pas de surprise. Vous voyez ce que vous payez, a chaque etape.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>Mai 2026</span>
              </div>
            </header>

            <article>
              {/* ───── Section 1 : La these ───── */}
              <section id="these" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">80% des problemes RevOps ne sont pas des problemes d&apos;outil</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>La plupart des dirigeants qu&apos;on rencontre pensent qu&apos;ils ont besoin de changer de CRM. De passer a Salesforce. De brancher un outil d&apos;IA. De racheter un module. Dans 4 cas sur 5, le probleme n&apos;est pas la.</p>
                    <p>Le probleme, c&apos;est que la donnee est sale. Que les process Sales, Marketing et CS ne se parlent pas. Que les KPIs ne sont pas alignes. Que personne ne sait qui est le proprietaire d&apos;un deal apres la signature. Que le forecast est devine, pas calcule. Que la qualification d&apos;un lead prend 15 minutes parce que la fiche est vide.</p>
                    <p>Le RevOps, ce n&apos;est pas un outil. C&apos;est une discipline qui aligne Sales, Marketing et CS autour d&apos;une stack partagee, d&apos;une donnee fiable et de process documentes. Le but : que la donnee circule sans rupture du premier touch jusqu&apos;au renouvellement.</p>
                    <p>Notre methode part toujours de la. On regarde votre revenue engine comme un systeme — pas comme une collection d&apos;outils. Et on commence par 72h d&apos;audit. Toujours.</p>
                  </div>
                  {/* Insight box */}
                  <div className="mt-6 rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">Un outil sans process amplifie le chaos. Un process sans donnee fiable produit du forecast au doigt. Une donnee fiable sans alignement Sales-Marketing-CS reste cloisonnee. Le RevOps, c&apos;est ce qui fait que les trois tiennent ensemble.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 2 : L'equation ───── */}
              <section id="equation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">L&apos;equation qui explique tout</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Votre revenue engine se comporte comme un produit : Process &times; Data &times; Outils = Revenue. Si l&apos;un des trois est faible, le tout s&apos;effondre. Trois scenarios qu&apos;on voit chaque semaine :</p>
                  </div>

                  {/* 3 scenario cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 mb-6">
                    <div className="rounded-xl border border-[#22C55E]/30 bg-[#22C55E]/5 p-4 text-center">
                      <div className="text-[20px] font-bold text-[#22C55E] tracking-[-0.02em] mb-1">9 &times; 9 &times; 9</div>
                      <p className="text-[11px] text-[#22C55E] font-medium mb-2">Stack alignee</p>
                      <p className="text-[11px] text-[#777] leading-[1.5]">Process clairs, data fiable, outils integres. Pipeline previsible, NRR &gt; 110%.</p>
                    </div>
                    <div className="rounded-xl border border-[#F59E0B]/30 bg-[#F59E0B]/5 p-4 text-center">
                      <div className="text-[20px] font-bold text-[#F59E0B] tracking-[-0.02em] mb-1">9 &times; 4 &times; 9</div>
                      <p className="text-[11px] text-[#F59E0B] font-medium mb-2">Donnee sale</p>
                      <p className="text-[11px] text-[#777] leading-[1.5]">Pipeline correct mais forecast au doigt, marketing aveugle, churn detecte trop tard.</p>
                    </div>
                    <div className="rounded-xl border border-[#EF4444]/30 bg-[#EF4444]/5 p-4 text-center">
                      <div className="text-[20px] font-bold text-[#EF4444] tracking-[-0.02em] mb-1">3 &times; 3 &times; 9</div>
                      <p className="text-[11px] text-[#EF4444] font-medium mb-2">Stack tech-driven</p>
                      <p className="text-[11px] text-[#777] leading-[1.5]">Outils premium achetes, jamais adoptes, equipes en Excel paralleles. Le pire ROI qu&apos;on rencontre.</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;ordre d&apos;intervention compte. Acheter HubSpot Enterprise quand votre process Sales n&apos;est pas documente, c&apos;est multiplier le chaos par un coefficient plus eleve. C&apos;est pour ca qu&apos;on commence par l&apos;audit.</p>
                    <p className="font-semibold text-[#111]">Le vrai investissement RevOps, ce n&apos;est pas l&apos;outil. C&apos;est ce qui le rend utile.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Phase 1 : Audit ───── */}
              <section id="phase-1" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">01</div>
                    <div>
                      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Audit &mdash; 72h pour cartographier votre revenue engine</h2>
                      <p className="mt-1 text-[12px] text-[#999] uppercase tracking-wider font-medium">Duree : 72h &middot; Forfait fixe</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Stack actuelle, qualite de la donnee, process Sales / Marketing / CS, alignement des equipes, dette technique CRM. Trois jours pour cartographier ce qui marche, ce qui fuit, et ce qui merite d&apos;etre detruit.</p>
                    <p>On parle a vos commerciaux, vos marketers, vos CS. On regarde votre CRM en direct. On cherche les ruptures de donnees, les doublons, les workflows casses, les KPIs qui ne sont mesures par personne.</p>
                  </div>

                  {/* 4 livrables cards */}
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mt-7 mb-3">Livrables</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#FF7A59]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Carte de la stack revenue</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Data flow, integrations, points de friction. Vous voyez votre stack comme un schema, pas comme une liste d&apos;outils.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#6D00CC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Score de sante RevOps</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Quatre dimensions notees : data, process, outils, equipes. Benchmark contre nos 250+ missions.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#22C55E]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Liste priorisee de chantiers</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Quick wins (&lt;2 sem) et chantiers structurants (4-8 sem), chiffres, classes par ROI estime.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#4B5EFC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Recommandation budgetaire</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Allocation suggeree sur 6 mois entre stack, build et formation. Hypotheses explicites.</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/audit-revops" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#4B5EFC] hover:text-[#3A4DE0] transition-colors">
                      En savoir plus sur l&apos;Audit RevOps
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Phase 2 : Design ───── */}
              <section id="phase-2" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">02</div>
                    <div>
                      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Design &mdash; On concoit la cible avant de toucher au CRM</h2>
                      <p className="mt-1 text-[12px] text-[#999] uppercase tracking-wider font-medium">Duree : 2 semaines</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Vous validez l&apos;architecture avant qu&apos;on construise une seule ligne de workflow. Schema de donnees cible, refonte du pipeline, automations, integrations, KPIs. Chaque decision documentee, chaque trade-off explicite.</p>
                    <p>C&apos;est plus lent au depart. C&apos;est ce qui evite les refontes a 6 mois et les budgets qui doublent. La phase Design est la moins glamour de la methode. C&apos;est aussi celle qui paye le plus.</p>
                  </div>

                  {/* 5 livrables cards */}
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mt-7 mb-3">Livrables</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#6D00CC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Schema de donnees cible</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Objects, properties, relations. Le langage commun a Sales, Marketing, CS et Finance.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#4B5EFC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Architecture des automations</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Triggers, conditions, actions. Document avant code. Chaque flow validable a la lecture.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#22C55E]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Plan d&apos;integration</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">CRM &harr; outils marketing, billing, support, data warehouse. Mapping et SLA des syncs.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#FF7A59]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Roadmap par sprints</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Decoupage hebdo, livrable par sprint, validation par votre equipe avant passage au suivant.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all sm:col-span-2">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#D4A27F]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">KPIs cibles et seuils d&apos;alerte</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Marketing, Sales, CS, Finance. Indicateurs alignes, seuils chiffres, frequence de revue. Si une metrique n&apos;a pas de proprietaire, on la jette.</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/fondation-data" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#4B5EFC] hover:text-[#3A4DE0] transition-colors">
                      Notre approche Fondation Data
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Phase 3 : Build ───── */}
              <section id="phase-3" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">03</div>
                    <div>
                      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Build &mdash; On construit. Vous validez a chaque sprint.</h2>
                      <p className="mt-1 text-[12px] text-[#999] uppercase tracking-wider font-medium">Duree : 4 a 8 semaines</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Implementation hands-on : nettoyage CRM, automations Sales / Marketing / CS, data layer, integrations, dashboards, alertes. Sprints d&apos;une semaine, demos hebdomadaires, vous validez avant qu&apos;on passe au sprint suivant.</p>
                    <p>L&apos;IA intervient ici, mais comme outil de levier &mdash; pas comme posture marketing. Scoring, enrichissement, qualification, brief contextuel : la ou elle a un ROI mesurable. Pas pour l&apos;effet de manche.</p>
                  </div>

                  {/* 5 livrables cards */}
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mt-7 mb-3">Livrables</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#FF7A59]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">CRM nettoye et structure</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">HubSpot, Salesforce, Pipedrive, Attio. Doublons fusionnes, champs standardises, gouvernance en place.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#4B5EFC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Automations live</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Lead routing, lifecycle, retention, churn signals, expansion triggers. Documentees et monitorees.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#6D00CC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Couche IA ciblee</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Scoring, enrichissement, qualification, brief pre-call. Chaque agent mesure : input, output, ROI.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#22C55E]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Dashboards par silo</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Sales, Marketing, CS, Finance. Source unique, KPIs alignes, alertes sur seuils critiques.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all sm:col-span-2">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#D4A27F]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Documentation + runbooks</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Chaque automation, chaque dashboard, chaque integration documente. Vos equipes peuvent maintenir sans nous.</p>
                    </div>
                  </div>

                  {/* Result box */}
                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[13px] text-[#555] leading-[1.75] text-center">Temps de qualification d&apos;un lead : <strong className="text-[#111]">15 min &rarr; 2 min</strong>. Reporting hebdo : <strong className="text-[#111]">12h &rarr; 30 min</strong>. Forecast accuracy : <strong className="text-[#111]">35% &rarr; 88%</strong>.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Phase 4 : Run ───── */}
              <section id="phase-4" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">04</div>
                    <div>
                      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Run &mdash; On reste, mais on degage quand vous le decidez</h2>
                      <p className="mt-1 text-[12px] text-[#999] uppercase tracking-wider font-medium">Duree : continu &middot; Mensualise &middot; Sans engagement</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>RevOps part-time mensualise : maintenance, monitoring data quality, optimisation continue, formation continue de votre equipe RevOps interne. Le but : que dans 12 mois vous ayez le choix entre internaliser ou continuer avec nous, sans rupture si vous internalisez.</p>
                    <p>Notre meilleure mission, c&apos;est celle qui prepare votre autonomie. Si vous nous gardez par captivite technique, on a echoue.</p>
                  </div>

                  {/* 5 livrables cards */}
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mt-7 mb-3">Livrables</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#FF7A59]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Presence dediee</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">1 a 2 jours par semaine sur votre stack. Pas de fragmentation entre 10 clients, pas de delai de reponse.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#4B5EFC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Monitoring data quality</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Detection automatique des incidents : doublons, champs manquants, ruptures de sync. Alertes sur Slack ou email.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#22C55E]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Roadmap quarterly</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Priorisee avec vos equipes Sales / Marketing / CS chaque trimestre. Pas decidee en silo.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#6D00CC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Formation continue</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Sessions hebdo avec votre RevOps interne. Pair-programming sur les nouveaux chantiers.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all sm:col-span-2">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#D4A27F]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Reporting mensuel ROI</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Chantiers livres, KPIs impactes, prochain quarter. Pas de vanity metrics. Du mesurable.</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/externaliser-revops" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#4B5EFC] hover:text-[#3A4DE0] transition-colors">
                      Voir l&apos;offre RevOps externalise
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section : Ce qu'on ne fait pas ───── */}
              <section id="non-faits" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Ce qu&apos;on ne fait pas</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Une methode, c&apos;est aussi ce qu&apos;elle exclut. Voilà nos quatre lignes rouges &mdash; explicites des la premiere conversation.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">Slides sans implementation</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Si vous cherchez un cabinet qui livre 80 pages PowerPoint et disparait, on n&apos;est pas le bon partenaire. On code, on deploie, on documente.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">Projets &gt; 6 mois sans livrable intermediaire</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Toute mission Ceres delivre de la valeur en production toutes les 1 a 4 semaines. Si on ne sait pas decouper, c&apos;est qu&apos;on n&apos;a pas compris le probleme.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">Tech stack imposee</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">On s&apos;adapte a votre CRM (HubSpot, Salesforce, Pipedrive, Attio...), pas l&apos;inverse. Pas de revente deguisee, pas d&apos;agency-lock-in technique. Aucun interessement editeur.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">Le mythe &laquo; l&apos;IA remplace votre equipe RevOps &raquo;</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">L&apos;IA est un multiplicateur de leviers. Sans data propre et process structure, elle amplifie le chaos. On l&apos;integre la ou elle paye, pas comme posture commerciale.</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section : Notre engagement ───── */}
              <section id="delegation" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-2">Quand on intervient, quand vos equipes pilotent</h2>
                  <p className="text-[12px] text-white/40 mb-6">La methode RevOps Ceres n&apos;est pas un &laquo; on prend le pouvoir &raquo;. C&apos;est une repartition explicite des roles.</p>

                  <div className="space-y-3">
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-white/5 p-4">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-[11px] font-bold text-[#22C55E] uppercase tracking-wider">Ceres execute</span>
                      </div>
                      <p className="text-[13px] text-white/70 leading-[1.65] mb-1.5">Ce qui demande de l&apos;expertise technique RevOps qu&apos;on ne recrute pas en interne.</p>
                      <p className="text-[12px] text-white/40 leading-[1.5]">Refonte schema CRM, integrations multi-outils, data layer, automations cross-equipes, deploiement IA cible.</p>
                    </div>

                    <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-white/5 p-4">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-[11px] font-bold text-[#4B5EFC] uppercase tracking-wider">On co-construit</span>
                      </div>
                      <p className="text-[13px] text-white/70 leading-[1.65] mb-1.5">Ce qui exige votre connaissance metier que personne d&apos;externe ne peut avoir.</p>
                      <p className="text-[12px] text-white/40 leading-[1.5]">Definition des KPIs, segmentation prospects, scoring rules, criteres de qualification, playbook commercial.</p>
                    </div>

                    <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-white/5 p-4">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-[11px] font-bold text-[#FF7A59] uppercase tracking-wider">Vous pilotez</span>
                      </div>
                      <p className="text-[13px] text-white/70 leading-[1.65] mb-1.5">Ce qui touche a votre revenue, vos clients, votre culture.</p>
                      <p className="text-[12px] text-white/40 leading-[1.5]">Strategie commerciale, decisions pricing, choix des comptes strategiques, gestion de crise, embauches.</p>
                    </div>
                  </div>

                  {/* Rule box */}
                  <div className="mt-6 rounded-xl border border-dashed border-[#333] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">Regle : si on commence a prendre des decisions qui devraient etre votres, on a derive. Notre job, c&apos;est de vous donner les outils, la donnee et la methode pour decider mieux &mdash; pas de decider a votre place.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section : L'impact mesure ───── */}
              <section id="impact" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ce que la methode produit</h2>
                  <p className="text-[12px] text-[#999] mb-6">Medianes observees sur des missions Ceres comparables &mdash; scale-ups SaaS B2B entre 30 et 300 personnes. Mesure en production, pas modelise.</p>

                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Pipeline qualifie en sortie de marketing", before: "100%", after: "+38%", note: "Apres refonte scoring + lead routing" },
                      { label: "Temps de qualification d'un lead", before: "15 min", after: "2 min", note: "Data layer + enrichissement automatique" },
                      { label: "Forecast accuracy a 90 jours", before: "35%", after: "88%", note: "Stage criteria stricts + suivi data quality" },
                      { label: "Reporting hebdo par silo", before: "12h", after: "30 min", note: "Dashboards automatises + source unique" },
                      { label: "Detection signaux de churn", before: "J-10", after: "J-45", note: "Health score + alertes triggers CS" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <p className="text-[13px] font-medium text-[#111] flex-1">{item.label}</p>
                          <div className="flex items-center gap-3 shrink-0">
                            <div className="text-right">
                              <div className="text-[14px] font-bold text-[#999]">{item.before}</div>
                              <p className="text-[9px] text-[#999]">Avant</p>
                            </div>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#999]"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <div>
                              <div className="text-[14px] font-bold text-[#22C55E]">{item.after}</div>
                              <p className="text-[9px] text-[#999]">Apres</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.5]">{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p className="font-semibold text-[#111]">Un revenue engine bien structure ne fait pas seulement gagner du temps. Il rend votre equipe previsible. Une previsibilite qui se traduit en confiance des investisseurs, en pricing power, en capacite a recruter sans paniquer sur le runway.</p>
                    <p>C&apos;est ce que produit le RevOps. Pas une optimisation locale, mais un changement de regime de votre revenue.</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-[12px] text-[#999]">+250 missions livrees depuis 2019.</p>
                    <Link href="/cas-clients" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#4B5EFC] hover:text-[#3A4DE0] transition-colors">
                      Voir les cas clients detailles
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CTA ───── */}
              <section className="mb-8">
                <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                  <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a transformer votre revenue engine ?</h2>
                  <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 minutes pour identifier vos quick wins RevOps. Pas de slide deck, pas de bullshit &mdash; juste des recommandations actionnables.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                    Reserver un diagnostic
                  </Link>
                </div>
              </section>
              <Connector />

              {/* ───── Related links ───── */}
              <section>
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link href="/audit-revops" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-sm bg-[#FF7A59]" />
                      <h3 className="text-[12px] font-semibold text-[#111]">Audit RevOps</h3>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">Diagnostic stack + data + process en 72h</p>
                  </Link>
                  <Link href="/externaliser-revops" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                      <h3 className="text-[12px] font-semibold text-[#111]">RevOps externalise</h3>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">RevOps part-time mensualise</p>
                  </Link>
                  <Link href="/cas-clients" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                      <h3 className="text-[12px] font-semibold text-[#111]">Cas clients</h3>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">250+ missions SaaS B2B</p>
                  </Link>
                </div>
              </section>

            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
