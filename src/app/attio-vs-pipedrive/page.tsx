"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const faqs = [
  { q: "Attio ou Pipedrive pour une startup pre-Series A ?", a: "Attio. Le free plan a 3 users et 1000 contacts est plus genereux que Pipedrive. La flexibilite du data model est imbattable pour une boite qui pivote encore. Pipedrive devient meilleur des que le pipeline sales devient l'unique focus." },
  { q: "Pipedrive a-t-il un avantage clair sur Attio ?", a: "Oui : la maturite. 15 ans d'experience pipeline. L'integration LinkedIn Sales Navigator, le forecasting natif et les sequences emails sont plus rodes. Attio est plus jeune (lance en 2020)." },
  { q: "Lequel a la meilleure IA ?", a: "Attio AI est plus moderne (recherche semantique, enrichissement par prompt, magic fields). Pipedrive AI est plus pratique (deal probability scoring, email drafting). Attio mise sur la flexibilite, Pipedrive sur la productivite immediate." },
  { q: "Combien coute chacun pour 10 utilisateurs ?", a: "Attio Plus : 290 USD/mois (29 USD x 10). Pipedrive Professional : 490 USD/mois (49 USD x 10). Attio reste moins cher mais offre moins de features sales out-of-the-box." },
  { q: "Lequel choisir pour un VC ou un fonds d'investissement ?", a: "Attio sans hesitation. Le data model flexible (deals + investors + portfolio companies + LPs) est exactement ce que Pipedrive ne sait pas faire elegamment." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", headline: "Attio vs Pipedrive : quel CRM choisir en 2026 ?", author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" }, publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" }, datePublished: "2026-05-26", dateModified: "2026-05-26", mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/attio-vs-pipedrive" }, articleSection: "Comparatif CRM", inLanguage: "fr" },
  { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Attio vs Pipedrive", item: "https://ceres.agency/attio-vs-pipedrive" }] },
]};

const sections = [
  { id: "introduction", title: "Le choix en 30 sec" },
  { id: "comparatif", title: "Tableau comparatif" },
  { id: "pour-qui-attio", title: "Pour qui Attio" },
  { id: "pour-qui-pipedrive", title: "Pour qui Pipedrive" },
  { id: "verdict", title: "Notre verdict" },
  { id: "faq", title: "FAQ" },
];

const comparisonTable = [
  { critere: "Prix entree", attio: "Gratuit (3 users, 1000 contacts), 29 USD/user/mois Plus", pipedrive: "14 EUR/user/mois Essential, 49 EUR/user/mois Professional" },
  { critere: "UX / Interface", attio: "Notion-like, ultra moderne, prise en main 10 min", pipedrive: "Pipeline visuel drag-drop, prise en main 1h" },
  { critere: "Data model", attio: "Schema flexible, objets custom natifs, relations riches", pipedrive: "Schema rigide centre sur deals/contacts/companies/activities" },
  { critere: "Pipeline management", attio: "Vues kanban, listes, calendrier, customisable", pipedrive: "Le meilleur pipeline drag-drop du marche" },
  { critere: "Marketing tools", attio: "Aucun outil marketing natif", pipedrive: "Aucun outil marketing natif (add-on LeadBooster limite)" },
  { critere: "Automation", attio: "Automations basiques, en enrichissement", pipedrive: "Workflows, deal automation, sequences" },
  { critere: "IA", attio: "Recherche semantique, enrichissement prompt, magic fields", pipedrive: "Deal probability, email assistance, scoring" },
  { critere: "Scalabilite", attio: "1 a 100 users, limite au-dela", pipedrive: "1 a 200 users, plus limite ensuite" },
  { critere: "MCP", attio: "GA mars 2026, server officiel", pipedrive: "Beta officiel en 2026" },
  { critere: "Integrations", attio: "100+ integrations, sync natif Gmail/Outlook/LinkedIn", pipedrive: "400+ integrations, Marketplace mature" },
];

const relatedArticles = [
  { title: "HubSpot vs Attio : comparatif complet", slug: "/hubspot-vs-attio", category: "Comparatif CRM", color: "#FF7A59" },
  { title: "HubSpot vs Pipedrive : comparatif complet", slug: "/hubspot-vs-pipedrive", category: "Comparatif CRM", color: "#6D00CC" },
  { title: "Agence Attio : notre approche", slug: "/agence-attio", category: "Attio", color: "#4B5EFC" },
];

export default function AttioVsPipedrivePage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) { const el = els[i]; if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; } }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28"><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p><nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav></div></aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><span className="text-[#666]">Attio vs Pipedrive</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Comparatif CRM</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">8 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Attio vs Pipedrive : quel CRM choisir en 2026 ?</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">Modern stack flexible vs pipeline drag-drop rode. Comparatif honnete par une agence qui deploie les deux.</p>
            </div>

            <article>
              <section id="introduction" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le choix en 30 secondes</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p><strong>Attio</strong> est le CRM moderne, Notion-like, avec un schema flexible qui s&apos;adapte a votre data model. Parfait pour startups, VCs, agences avec des entites complexes a modeliser.</p>
                  <p><strong>Pipedrive</strong> est le CRM Sales pipeline le plus mature du marche. Pipeline visuel imbattable, sequences emails, forecasting natif. Parfait pour les equipes sales pure qui veulent zero friction.</p>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">Regle : <strong className="text-white">data model complexe et flexible = Attio</strong>. <strong className="text-white">Pipeline sales transactionnel pur = Pipedrive</strong>.</p></div>
              </div></section>
              <Connector />

              <section id="comparatif" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif Attio vs Pipedrive</h2>
                <div className="overflow-x-auto"><table className="w-full text-[12px] border border-[#E8E8E8]"><thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Attio</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Pipedrive</th></tr></thead><tbody className="text-[#555]">{comparisonTable.map((row) => (<tr key={row.critere}><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">{row.critere}</td><td className="p-3 border-b border-[#F2F2F2]">{row.attio}</td><td className="p-3 border-b border-[#F2F2F2]">{row.pipedrive}</td></tr>))}</tbody></table></div>
              </div></section>
              <Connector />

              <section id="pour-qui-attio" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui Attio</h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <li>Startups B2B Seed - Series A qui modelisent des objets custom</li>
                  <li>VCs, fonds d&apos;investissement, family offices (deals + investors + LPs + portfolio)</li>
                  <li>Agences avec relations clients-prestataires-projets complexes</li>
                  <li>Equipes qui valorisent une UX moderne sur la profondeur fonctionnelle</li>
                  <li>Boites qui veulent une recherche semantique IA native</li>
                </ul>
              </div></section>
              <Connector />

              <section id="pour-qui-pipedrive" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui Pipedrive</h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <li>PME avec equipe sales pure (5-50 commerciaux) en B2B classique</li>
                  <li>Cycle de vente court, transactionnel, peu d&apos;objets custom necessaires</li>
                  <li>Equipes qui veulent un pipeline drag-drop visuel rapide</li>
                  <li>Budgets limites mais besoin de sequences emails et forecasting natifs</li>
                  <li>Integration LinkedIn Sales Navigator critique</li>
                </ul>
              </div></section>
              <Connector />

              <section id="verdict" className="mb-8"><div className="rounded-2xl bg-[#111] p-5 md:p-8">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Notre verdict</h2>
                <div className="space-y-4 text-[13px] text-white/70 leading-[1.75]">
                  <p><strong className="text-white">Attio</strong> est le pari modern stack. UX, flexibilite, IA, MCP en GA. Parfait sur startups early-stage, societes de gestion, scenarios non-standards.</p>
                  <p><strong className="text-white">Pipedrive</strong> est le pari pragmatique. 15 ans de maturite sur le pipeline sales pur. Imbattable quand votre besoin est <em>vendre vite sans complexite</em>.</p>
                  <p>Si vous etes en bascule entre les deux : choisissez Attio si votre data evolue souvent, Pipedrive si votre process commercial est stable.</p>
                </div>
              </div></section>
              <Connector />

              <section id="faq" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ Attio vs Pipedrive</h2>
                <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#FF7A59] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Attio ou Pipedrive ? On vous aide a decider.</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 minutes d&apos;audit gratuit pour choisir le CRM adapte.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un diagnostic</Link>
              </div></section>
              <Connector />

              <section><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
