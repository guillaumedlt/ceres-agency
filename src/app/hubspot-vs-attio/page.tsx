"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const faqs = [
  { q: "Attio est-il vraiment plus simple que HubSpot ?", a: "Oui pour les premiers jours d'utilisation. Attio est nativement Notion-like, prise en main 10 minutes. HubSpot demande de l'onboarding mais permet de tout faire au meme endroit (marketing, sales, CS) sur le long terme." },
  { q: "Attio peut-il remplacer HubSpot ?", a: "Pour une equipe sales pure de moins de 20 personnes, oui. Pour une stack revenue alignee marketing-sales-CS avec automations, attribution et workflows multi-equipes, HubSpot reste plus complet." },
  { q: "Quel est le tarif d'Attio ?", a: "Gratuit jusqu'a 3 utilisateurs et 1000 contacts. Plus a partir de 29 USD/user/mois. Pro a 59 USD/user/mois. Enterprise sur devis." },
  { q: "Attio a-t-il de l'IA integree ?", a: "Oui. Attio AI fait de l'enrichissement automatique, de la generation de fields, de la recherche semantique. Plus moderne que Breeze HubSpot sur la flexibilite, moins puissant sur les use cases marketing." },
  { q: "Peut-on migrer de HubSpot vers Attio ?", a: "Oui via export/import CSV ou outils comme Merge.dev. Mais attention : les automations, sequences et listes intelligentes HubSpot ne se transferent pas directement." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "HubSpot vs Attio : quel CRM choisir en 2026 ?",
      description: "Comparatif HubSpot vs Attio. Prix, UX, automatisation, IA. Le verdict honnete pour startups et SaaS B2B.",
      author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
      publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      datePublished: "2026-05-26",
      dateModified: "2026-05-26",
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/hubspot-vs-attio" },
      articleSection: "Comparatif CRM",
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
        { "@type": "ListItem", position: 2, name: "Comparatifs CRM", item: "https://ceres.agency" },
        { "@type": "ListItem", position: 3, name: "HubSpot vs Attio", item: "https://ceres.agency/hubspot-vs-attio" },
      ],
    },
  ],
};

const sections = [
  { id: "introduction", title: "Le choix en 30 sec" },
  { id: "comparatif", title: "Tableau comparatif" },
  { id: "pour-qui-hubspot", title: "Pour qui HubSpot" },
  { id: "pour-qui-attio", title: "Pour qui Attio" },
  { id: "ia", title: "Et l'IA ?" },
  { id: "verdict", title: "Notre verdict" },
  { id: "faq", title: "FAQ" },
];

const comparisonTable = [
  { critere: "Prix entree", hubspot: "Gratuit (CRM complet), 15 EUR/mois Starter", attio: "Gratuit (3 users, 1000 contacts), 29 USD/user/mois Plus" },
  { critere: "UX / Interface", hubspot: "CRM complet, courbe d'apprentissage 1-2 semaines", attio: "Notion-like, prise en main 10 min" },
  { critere: "Personnalisation data model", hubspot: "Custom objects, properties, associations", attio: "Schema flexible, relations natives, type system riche" },
  { critere: "Automatisation", hubspot: "Workflows complets, sequences, branching, scoring", attio: "Automations basiques, en cours d'enrichissement" },
  { critere: "Reporting", hubspot: "Custom report builder, dashboards avances", attio: "Vues filtrees, rapports simples, pas de BI native" },
  { critere: "Marketing tools", hubspot: "Suite marketing complete (emails, landing pages, CMS)", attio: "Pas de suite marketing native" },
  { critere: "Scalabilite", hubspot: "1 a 5000+ users, plans Pro/Enterprise", attio: "1 a 100 users, plus limite au-dela" },
  { critere: "IA integree", hubspot: "Breeze : agents, copilot, scoring (inclus dans plans Pro+)", attio: "Attio AI : enrichissement, magic fields, recherche semantique" },
  { critere: "MCP support", hubspot: "GA avril 2026, server officiel mcp.hubspot.com", attio: "GA mars 2026, server officiel" },
  { critere: "Integrations", hubspot: "1 500+ integrations natives, App Marketplace", attio: "100+ integrations, syncs natifs Gmail/Outlook/LinkedIn" },
];

const relatedArticles = [
  { title: "HubSpot vs Pipedrive : comparatif complet", slug: "/hubspot-vs-pipedrive", category: "Comparatif CRM", color: "#FF7A59" },
  { title: "Attio vs Pipedrive : modern stack ou pipeline pur", slug: "/attio-vs-pipedrive", category: "Comparatif CRM", color: "#6D00CC" },
  { title: "Agence Attio : notre approche", slug: "/agence-attio", category: "Attio", color: "#4B5EFC" },
];

export default function HubSpotVsAttioPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "18%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "60%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <span className="text-[#666]">HubSpot vs Attio</span>
            </nav>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge>Comparatif CRM</Badge>
                <span className="text-[12px] text-[#999]">Mai 2026</span>
                <span className="text-[12px] text-[#999]">10 min de lecture</span>
              </div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">HubSpot vs Attio : quel CRM choisir en 2026 ?</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">Le verdict honnete d&apos;une agence qui deploie les deux. Prix, UX, automatisation, scalabilite, IA. Pour SaaS, startups et scale-ups B2B.</p>
            </div>

            <article>
              {/* Intro */}
              <section id="introduction" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le choix en 30 secondes</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong>HubSpot</strong> reste le choix par defaut quand vous voulez aligner marketing, sales et CS dans un seul outil, avec des automations puissantes, un reporting riche et une marketing suite native. Courbe d&apos;apprentissage 1-2 semaines.</p>
                    <p><strong>Attio</strong> est le CRM moderne, flexible, Notion-like. Parfait pour les startups et scale-ups qui veulent un schema custom, une UX rapide, et qui n&apos;ont pas besoin de la marketing suite. Prise en main 10 min.</p>
                  </div>
                  <div className="mt-6 rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">Regle simple : <strong className="text-white">moins de 20 personnes commerciales + pas besoin marketing automation = Attio</strong>. <strong className="text-white">Plus de 20 + alignement multi-equipes = HubSpot</strong>.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Comparatif */}
              <section id="comparatif" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif HubSpot vs Attio</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12px] border border-[#E8E8E8]">
                      <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">HubSpot</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Attio</th></tr></thead>
                      <tbody className="text-[#555]">
                        {comparisonTable.map((row) => (
                          <tr key={row.critere}><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">{row.critere}</td><td className="p-3 border-b border-[#F2F2F2]">{row.hubspot}</td><td className="p-3 border-b border-[#F2F2F2]">{row.attio}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Pour qui HubSpot */}
              <section id="pour-qui-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui HubSpot est le bon choix</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot s&apos;impose quand au moins l&apos;une de ces conditions est vraie :</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Vous voulez une marketing suite native (emails, landing pages, CMS, attribution) integree au CRM</li>
                      <li>Vous etes plus de 20 commerciaux et avez besoin d&apos;automations sophistiquees</li>
                      <li>Vous avez un cycle complexe Sales + Marketing + CS qui doit etre aligne sur un meme reporting</li>
                      <li>Vous voulez du forecasting, du scoring predictif et des dashboards avances sans BI tier</li>
                      <li>Vous valorisez l&apos;ecosysteme (1 500+ integrations, App Marketplace, partner network)</li>
                    </ul>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Pour qui Attio */}
              <section id="pour-qui-attio" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui Attio est le bon choix</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Attio devient le meilleur choix quand :</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Vous etes une startup ou scale-up &lt; 20 sales avec un modele de donnees specifique</li>
                      <li>Vous voulez modeliser des objets custom (deals + investors + partners + portfolio companies) sans bricoler</li>
                      <li>Votre marketing est outsource ou sur un outil dedie (Customer.io, Lemlist, Webflow)</li>
                      <li>Vos commerciaux ont besoin d&apos;un CRM rapide a saisir, pas d&apos;une suite riche</li>
                      <li>Vous valorisez la flexibilite du schema (le data model evolue chaque mois)</li>
                      <li>Vous etes une societe de gestion, VC, family office ou cabinet de conseil avec des entites complexes a relier</li>
                    </ul>
                  </div>
                </div>
              </section>
              <Connector />

              {/* IA */}
              <section id="ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">L&apos;IA cote HubSpot et cote Attio en 2026</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong>HubSpot Breeze</strong> regroupe l&apos;assistant copilot, des agents (content agent, social agent, prospecting agent), du scoring predictif et des generations IA dans les emails. Inclus a partir des plans Pro. Plus complet sur les workflows marketing.</p>
                    <p><strong>Attio AI</strong> mise sur la flexibilite : enrichissement automatique de fields via prompt, recherche semantique dans la base, generation de listes par intent. Plus moderne sur l&apos;approche &laquo; data first &raquo;.</p>
                    <p>Les deux ont un <strong>MCP server officiel en GA</strong> en 2026 (HubSpot avril, Attio mars). Vous pouvez brancher Claude, ChatGPT ou Gemini dessus pour faire des agents custom. Cf. notre <Link href="/guide-mcp-revops" className="text-[#4B5EFC] underline hover:text-[#3A4DE0]">guide MCP pour le RevOps</Link>.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Verdict */}
              <section id="verdict" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Notre verdict</h2>
                  <div className="space-y-4 text-[13px] text-white/70 leading-[1.75]">
                    <p>Sur les 250+ deploiements CRM qu&apos;on a faits chez Ceres, le partage est clair :</p>
                    <p><strong className="text-white">Attio</strong> gagne sur les startups B2B early-stage (Seed - Series A), les societes de gestion, les VCs et les agences avec des besoins de modelisation flexible. La rapidite d&apos;onboarding bat tout.</p>
                    <p><strong className="text-white">HubSpot</strong> gagne sur les scale-ups (Series B+), les SaaS B2B avec marketing inbound, les organisations multi-equipes alignees marketing-sales-CS. La profondeur fonctionnelle paye sur la duree.</p>
                    <p>Si vous hesitez : <strong className="text-white">Attio pour bouger vite maintenant, HubSpot pour scaler longtemps</strong>. Et oui, on accompagne sur les deux.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* FAQ */}
              <section id="faq" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ HubSpot vs Attio</h2>
                  <div className="space-y-4">
                    {faqs.map((f, i) => (
                      <div key={i} className="border-l-[3px] border-[#FF7A59] pl-4">
                        <p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p>
                        <p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* CTA */}
              <section className="mb-8">
                <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                  <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">HubSpot ou Attio ? On vous aide a decider.</h2>
                  <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 minutes d&apos;audit gratuit pour choisir le CRM qui correspond a votre stade et votre stack.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un diagnostic</Link>
                </div>
              </section>
              <Connector />

              {/* Related */}
              <section>
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedArticles.map((r) => (
                    <Link key={r.slug} href={r.slug} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div>
                      <h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3>
                    </Link>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
