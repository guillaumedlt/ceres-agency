"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const faqs = [
  { q: "Pipedrive est-il vraiment moins cher que HubSpot ?", a: "A l'entree oui : Pipedrive Essential a 14 EUR/user/mois vs HubSpot Sales Starter a 15 EUR/mois. Mais Pipedrive ajoute LeadBooster (32 EUR/mois) et Smart Docs (32 EUR/mois) en options, alors que HubSpot bundle plus de choses. Sur 12 mois, l'ecart se reduit." },
  { q: "Pipedrive convient-il aux equipes marketing ?", a: "Non. Pipedrive est un CRM Sales pur. Pas de marketing automation, pas de landing pages, pas de CMS, pas d'attribution. Si vous voulez un seul outil pour Sales + Marketing, HubSpot s'impose." },
  { q: "Lequel scale le mieux au-dela de 100 commerciaux ?", a: "HubSpot Enterprise. Pipedrive devient limite au-dela de 50-100 users pour les permissions complexes, le forecasting multi-equipes et la gouvernance." },
  { q: "Pipedrive a-t-il de l'IA en 2026 ?", a: "Oui, Pipedrive AI propose deal probability, email composition assistee, lead scoring. Moins complet que Breeze HubSpot mais plus simple d'usage." },
  { q: "Peut-on migrer facilement de Pipedrive vers HubSpot ?", a: "Oui. HubSpot a un import direct depuis Pipedrive. La migration prend 1-3 semaines selon la complexite du pipeline et les customisations. On l'a fait 30+ fois chez Ceres." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "HubSpot vs Pipedrive : quel CRM choisir en 2026 ?", author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" }, publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" }, datePublished: "2026-05-26", dateModified: "2026-05-26", mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/hubspot-vs-pipedrive" }, articleSection: "Comparatif CRM", inLanguage: "fr" },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
      { "@type": "ListItem", position: 2, name: "HubSpot vs Pipedrive", item: "https://ceres.agency/hubspot-vs-pipedrive" },
    ] },
  ],
};

const sections = [
  { id: "introduction", title: "Le choix en 30 sec" },
  { id: "comparatif", title: "Tableau comparatif" },
  { id: "pour-qui-hubspot", title: "Pour qui HubSpot" },
  { id: "pour-qui-pipedrive", title: "Pour qui Pipedrive" },
  { id: "ia", title: "Et l'IA ?" },
  { id: "verdict", title: "Notre verdict" },
  { id: "faq", title: "FAQ" },
];

const comparisonTable = [
  { critere: "Prix entree", hubspot: "Gratuit (CRM), 15 EUR/mois Starter, 100 EUR/user/mois Pro", pipedrive: "14 EUR/user/mois Essential, 49 EUR/user/mois Professional" },
  { critere: "UX / Interface", hubspot: "Complet et structure, courbe 1-2 semaines", pipedrive: "Pipeline visuel ultra simple, prise en main 1h" },
  { critere: "Pipeline management", hubspot: "Multi-pipelines, automatisations stage, criteria validation", pipedrive: "Le meilleur pipeline drag-drop du marche, multi-pipeline natif" },
  { critere: "Marketing automation", hubspot: "Suite complete : emails, landing pages, CMS, attribution", pipedrive: "Aucun outil marketing natif (add-on LeadBooster limite)" },
  { critere: "Workflows / Automations", hubspot: "Workflows avances, branching, scoring, multi-objets", pipedrive: "Workflows basiques, deal automation, simples" },
  { critere: "Reporting", hubspot: "Custom report builder, dashboards multi-equipes", pipedrive: "Insights reports, dashboards sales pipeline-centric" },
  { critere: "Forecasting", hubspot: "Forecasting predictif, multi-teams, AI-assisted", pipedrive: "Forecast basique par stage probability" },
  { critere: "Scalabilite", hubspot: "1 a 5 000+ users, plans Enterprise robustes", pipedrive: "1 a 100-200 users, limites au-dela" },
  { critere: "IA integree", hubspot: "Breeze : agents, copilot, scoring, generation (Pro+)", pipedrive: "Pipedrive AI : deal probability, email assist, scoring" },
  { critere: "Integrations", hubspot: "1 500+ integrations natives", pipedrive: "400+ integrations, Marketplace" },
  { critere: "MCP support", hubspot: "GA avril 2026 (mcp.hubspot.com)", pipedrive: "Beta officiel en 2026" },
];

const relatedArticles = [
  { title: "HubSpot vs Salesforce : comparatif complet", slug: "/hubspot-vs-salesforce", category: "Comparatif CRM", color: "#FF7A59" },
  { title: "HubSpot vs Attio : modern stack", slug: "/hubspot-vs-attio", category: "Comparatif CRM", color: "#6D00CC" },
  { title: "Attio vs Pipedrive : modern ou pipeline pur", slug: "/attio-vs-pipedrive", category: "Comparatif CRM", color: "#4B5EFC" },
];

export default function HubSpotVsPipedrivePage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) {
        const el = els[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "18%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "62%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
              <nav className="space-y-1">
                {sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><span className="text-[#666]">HubSpot vs Pipedrive</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Comparatif CRM</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">10 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">HubSpot vs Pipedrive : quel CRM choisir en 2026 ?</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">Comparatif honnete des deux CRM les plus deployes en France pour les PME B2B. Prix reel, fonctionnalites cle, IA, scalabilite.</p>
            </div>

            <article>
              <section id="introduction" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le choix en 30 secondes</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong>Pipedrive</strong> est le CRM Sales le plus simple a prendre en main du marche. Pipeline visuel, drag-drop, idee originale parfaite pour les equipes de vente pure qui veulent juste tracker les deals et envoyer des emails. Pas de marketing, pas de CMS.</p>
                    <p><strong>HubSpot</strong> est un CRM + marketing + service en un. Plus complet, plus puissant, mais plus de surface a apprivoiser. Le choix par defaut quand vous voulez aligner Sales + Marketing + CS sur un seul outil.</p>
                  </div>
                  <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">Regle simple : <strong className="text-white">Sales-only &lt; 30 personnes = Pipedrive</strong>. <strong className="text-white">Sales + Marketing + CS aligne = HubSpot</strong>.</p></div>
                </div>
              </section>
              <Connector />

              <section id="comparatif" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif HubSpot vs Pipedrive</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12px] border border-[#E8E8E8]">
                      <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">HubSpot</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Pipedrive</th></tr></thead>
                      <tbody className="text-[#555]">{comparisonTable.map((row) => (<tr key={row.critere}><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">{row.critere}</td><td className="p-3 border-b border-[#F2F2F2]">{row.hubspot}</td><td className="p-3 border-b border-[#F2F2F2]">{row.pipedrive}</td></tr>))}</tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              <section id="pour-qui-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui HubSpot</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                    <li>Vous voulez Sales + Marketing + CS dans un seul outil</li>
                    <li>Vous avez besoin d&apos;une suite marketing native (emails, landing pages, CMS, attribution)</li>
                    <li>Vous etes plus de 30 commerciaux et avez besoin de gouvernance avancee</li>
                    <li>Vous voulez du scoring predictif et des dashboards multi-equipes</li>
                    <li>Vous valorisez l&apos;ecosysteme : 1 500+ integrations, App Marketplace, partner network</li>
                  </ul>
                </div>
              </section>
              <Connector />

              <section id="pour-qui-pipedrive" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui Pipedrive</h2>
                  <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                    <li>Vous etes une PME ou TPE avec une equipe sales pure (&lt; 30 commerciaux)</li>
                    <li>Vos commerciaux ont besoin d&apos;un pipeline visuel ultra simple, prise en main 1h max</li>
                    <li>Vous n&apos;avez pas de strategie marketing inbound integree au CRM</li>
                    <li>Vous voulez le prix d&apos;entree le plus bas, sans surcharger les commerciaux</li>
                    <li>Votre cycle de vente est court, transactionnel, peu de signaux marketing avant le deal</li>
                  </ul>
                </div>
              </section>
              <Connector />

              <section id="ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">L&apos;IA en 2026</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong>HubSpot Breeze</strong> = copilot, agents (content, prospecting, social), scoring predictif, generation IA dans les emails. Inclus Pro+, plus complet sur les workflows marketing-sales.</p>
                    <p><strong>Pipedrive AI</strong> = deal probability, email composition assistee, lead scoring. Plus simple, plus accessible aux PME non-tech.</p>
                    <p>Cote MCP : HubSpot a passe son serveur officiel en GA en avril 2026. Pipedrive est encore en beta. Cf. <Link href="/guide-mcp-revops" className="text-[#4B5EFC] underline hover:text-[#3A4DE0]">guide MCP RevOps</Link>.</p>
                  </div>
                </div>
              </section>
              <Connector />

              <section id="verdict" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Notre verdict</h2>
                  <div className="space-y-4 text-[13px] text-white/70 leading-[1.75]">
                    <p><strong className="text-white">Pipedrive</strong> est imbattable pour une PME sales-only qui veut un CRM operationnel en 2 semaines, avec un cout maitrise et un pipeline drag-drop que les commerciaux adoptent immediatement.</p>
                    <p><strong className="text-white">HubSpot</strong> gagne des que la stack revenue se complexifie : marketing inbound, alignement multi-equipes, attribution, scoring, agents IA. Le ROI long-terme est meilleur en SaaS B2B au-dela de 30 personnes.</p>
                    <p>On vous accompagne sur les deux. La bonne question n&apos;est pas <em>quel CRM</em> mais <em>quelle organisation vous voulez avoir dans 18 mois</em>.</p>
                  </div>
                </div>
              </section>
              <Connector />

              <section id="faq" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ HubSpot vs Pipedrive</h2>
                  <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#FF7A59] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
                </div>
              </section>
              <Connector />

              <section className="mb-8">
                <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                  <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">HubSpot ou Pipedrive ? On vous aide a decider.</h2>
                  <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 minutes d&apos;audit gratuit pour choisir le CRM adapte a votre stade.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un diagnostic</Link>
                </div>
              </section>
              <Connector />

              <section>
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
