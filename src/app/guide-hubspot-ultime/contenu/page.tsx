"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Le Guide HubSpot Ultime 2026 : 80 pages pour tout maitriser",
  description:
    "Le guide HubSpot le plus complet en francais. 12 chapitres : choix d'edition, setup, automations, Marketing/Sales/Service Hub, Breeze AI, MCP, migration, plan 90 jours. Diamond Partner, 250+ missions.",
  author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  publisher: {
    "@type": "Organization",
    name: "Ceres",
    url: "https://ceres.agency",
    logo: { "@type": "ImageObject", url: "https://ceres.agency/favicon.svg" },
  },
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/guide-hubspot-ultime/contenu" },
  articleSection: "HubSpot",
  wordCount: 18000,
  inLanguage: "fr",
  keywords: [
    "Guide HubSpot",
    "HubSpot ultime",
    "HubSpot 2026",
    "Breeze AI",
    "HubSpot MCP",
    "Sales Hub",
    "Marketing Hub",
    "Service Hub",
    "Migration HubSpot",
  ],
};

const chapters = [
  { id: "chapitre-1", num: "01", title: "HubSpot en 2026" },
  { id: "chapitre-2", num: "02", title: "Choisir Hub & edition" },
  { id: "chapitre-3", num: "03", title: "Setup initial" },
  { id: "chapitre-4", num: "04", title: "Lead routing & scoring" },
  { id: "chapitre-5", num: "05", title: "Marketing Hub" },
  { id: "chapitre-6", num: "06", title: "Sales Hub" },
  { id: "chapitre-7", num: "07", title: "Service Hub" },
  { id: "chapitre-8", num: "08", title: "Breeze AI" },
  { id: "chapitre-9", num: "09", title: "MCP server" },
  { id: "chapitre-10", num: "10", title: "Reporting" },
  { id: "chapitre-11", num: "11", title: "Integrations" },
  { id: "chapitre-12", num: "12", title: "Migration & plan 90j" },
];

const relatedReads = [
  { title: "Le guide MCP pour le RevOps", slug: "/guide-mcp-revops", category: "Guide", color: "#6D00CC" },
  { title: "Framework SCORE Ceres", slug: "/framework-score-revops", category: "Framework", color: "#FF7A59" },
  { title: "Notre methode RevOps en 4 phases", slug: "/methode", category: "Methode", color: "#4B5EFC" },
];

export default function GuideHubSpotUltimeContenuPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("chapitre-1");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100;
      setProgress(Math.min(100, pct));
      const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) {
        const el = els[i];
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(chapters[i].id);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "4%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "12%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "25%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "38%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "52%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "65%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "78%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "90%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[220px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Chapitres</p>
              <nav className="space-y-1">
                {chapters.map((c) => (
                  <a key={c.id} href={`#${c.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === c.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    <span className="text-[#BBB] mr-1.5">{c.num}</span>{c.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-[#F2F2F2]">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Partager</p>
                <div className="flex gap-2">
                  <a href="https://twitter.com/intent/tweet?text=Le%20Guide%20HubSpot%20Ultime%202026%20par%20Ceres&url=https://ceres.agency/guide-hubspot-ultime/contenu" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/guide-hubspot-ultime/contenu" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/guide-hubspot-ultime" className="text-[11px] text-[#FF7A59] hover:underline font-medium">
                  Telecharger le PDF
                </Link>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/guides" className="hover:text-[#111] transition-colors">Guides</Link><span>/</span>
              <Link href="/guide-hubspot-ultime" className="hover:text-[#111] transition-colors">Guide HubSpot Ultime</Link><span>/</span>
              <span className="text-[#666]">Contenu complet</span>
            </nav>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF7A59]/10 text-[12px] font-medium text-[#FF7A59]">HubSpot</span>
                <span className="text-[12px] text-[#999]">3 juin 2026</span>
                <span className="text-[12px] text-[#999]">Temps de lecture : 50 min</span>
              </div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">
                Le Guide HubSpot Ultime 2026
              </h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-2">
                80 pages pour maitriser HubSpot en 2026 : choix d&apos;edition, setup, automations, Marketing/Sales/Service Hub, Breeze AI, MCP server, migration. Le playbook condense de 250+ deploiements Ceres.
              </p>
              <p className="text-[13px] text-[#999]">
                Par <span className="text-[#111] font-medium">Ceres</span> &mdash; Diamond Partner HubSpot depuis 2021.
              </p>
            </div>

            <article>

              {/* ───── CHAPITRE 1 ───── */}
              <section id="chapitre-1" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">01</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">HubSpot en 2026 : positionnement et qui doit choisir</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot est ne en 2006 comme outil inbound marketing. En 2026, c&apos;est une plateforme RevOps complete qui couvre Marketing, Sales, Service, CMS, Operations et Commerce. Plus de 247 000 clients dans 135 pays, dont 25 000+ en France. Croissance ARR : +21 % en 2025.</p>
                    <p>Mais HubSpot n&apos;est pas le bon choix pour tout le monde. Ce chapitre vous donne la grille de decision honnete.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Le positionnement HubSpot vs concurrents</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12px] border border-[#E8E8E8]">
                      <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Concurrent</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Force vs HubSpot</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Faiblesse vs HubSpot</th></tr></thead>
                      <tbody className="text-[#555]">
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Salesforce</td><td className="p-3 border-b border-[#F2F2F2]">Profondeur enterprise + verticalisation</td><td className="p-3 border-b border-[#F2F2F2]">Complexite, prix, courbe d&apos;apprentissage</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Pipedrive</td><td className="p-3 border-b border-[#F2F2F2]">Pipeline visuel imbattable, prix bas</td><td className="p-3 border-b border-[#F2F2F2]">Pas de marketing, pas de service</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Attio</td><td className="p-3 border-b border-[#F2F2F2]">UX moderne, schema flexible</td><td className="p-3 border-b border-[#F2F2F2]">Pas de suite marketing, plus jeune</td></tr>
                        <tr><td className="p-3 font-medium text-[#111]">Folk / Notion CRM</td><td className="p-3">Ultra simple, prix faible</td><td className="p-3">Plafonne vite, pas d&apos;automation avancee</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">L&apos;ICP de HubSpot en 2026</h3>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot brille particulierement quand :</p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Vous voulez Sales + Marketing + Service alignes dans un seul outil</li>
                      <li>Votre cycle de vente est inbound-friendly (du contenu attire des leads qualifies)</li>
                      <li>Vous avez entre 10 et 500 commerciaux (sweet spot)</li>
                      <li>Vous voulez du lift quick sans 6 mois de setup</li>
                      <li>Vous valorisez l&apos;ecosysteme (1 500+ integrations natives)</li>
                    </ul>
                    <p>HubSpot devient moins pertinent quand :</p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Vous etes 500+ commerciaux avec besoin de verticalisation industrie (banking, healthcare, defense)</li>
                      <li>Vous avez un cycle uniquement transactionnel SMB (Pipedrive plus rapide a deployer)</li>
                      <li>Vous etes startup pre-seed sans process commercial defini (HubSpot devient un cauchemar sans structure)</li>
                    </ul>
                  </div>

                  <div className="mt-6 rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">L&apos;erreur la plus frequente qu&apos;on voit : acheter HubSpot Enterprise &laquo; par anticipation &raquo; quand on est 8 commerciaux. Resultat : usine a gaz, adoption faible, ROI invisible. La regle : commencer par l&apos;edition juste au-dessus de votre besoin actuel, jamais 2 crans plus haut.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 2 ───── */}
              <section id="chapitre-2" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">02</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Choisir le bon Hub et la bonne edition</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot c&apos;est 6 Hubs et 3 editions par Hub. Soit theoriquement 18 combinaisons. La realite : on en utilise 5-6 chez la plupart des clients.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Les 6 Hubs en 1 phrase</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Marketing Hub</p><p className="text-[12px] text-[#777]">Lead generation : emails, landing pages, formulaires, workflows, CMS, ads, attribution.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Sales Hub</p><p className="text-[12px] text-[#777]">Pipeline + forecast + sequences + meetings + signatures electroniques + playbooks.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Service Hub</p><p className="text-[12px] text-[#777]">Support ticketing + knowledge base + chat + customer feedback + SLA management.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">CMS Hub</p><p className="text-[12px] text-[#777]">Hosting + builder site web + blog + personnalisation + SEO. Vraie alternative a Webflow / WordPress.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#D4A27F] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Operations Hub</p><p className="text-[12px] text-[#777]">Sync data, data quality, custom code workflows, programmable automation. Pour les RevOps.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Commerce Hub</p><p className="text-[12px] text-[#777]">Quotes, invoices, paiements, abonnements. Lance fin 2024, encore en croissance.</p></div>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Comparatif editions : Starter vs Pro vs Enterprise</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12px] border border-[#E8E8E8]">
                      <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Feature</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Starter</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Pro</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Enterprise</th></tr></thead>
                      <tbody className="text-[#555]">
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Prix Marketing Hub (EUR/mois)</td><td className="p-3 border-b border-[#F2F2F2]">15</td><td className="p-3 border-b border-[#F2F2F2]">800</td><td className="p-3 border-b border-[#F2F2F2]">3 600</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Prix Sales Hub (EUR/user/mois)</td><td className="p-3 border-b border-[#F2F2F2]">15</td><td className="p-3 border-b border-[#F2F2F2]">100</td><td className="p-3 border-b border-[#F2F2F2]">150</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Workflows</td><td className="p-3 border-b border-[#F2F2F2]">Limites (3-10)</td><td className="p-3 border-b border-[#F2F2F2]">Illimites</td><td className="p-3 border-b border-[#F2F2F2]">Illimites + custom code</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Custom objects</td><td className="p-3 border-b border-[#F2F2F2]">Non</td><td className="p-3 border-b border-[#F2F2F2]">Non</td><td className="p-3 border-b border-[#F2F2F2]">Oui (10 objects)</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Pipelines</td><td className="p-3 border-b border-[#F2F2F2]">2</td><td className="p-3 border-b border-[#F2F2F2]">15</td><td className="p-3 border-b border-[#F2F2F2]">50</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Reporting custom</td><td className="p-3 border-b border-[#F2F2F2]">Tres limite</td><td className="p-3 border-b border-[#F2F2F2]">Custom builder</td><td className="p-3 border-b border-[#F2F2F2]">Multi-objets + datasets</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Breeze AI agents</td><td className="p-3 border-b border-[#F2F2F2]">Limite</td><td className="p-3 border-b border-[#F2F2F2]">Inclus</td><td className="p-3 border-b border-[#F2F2F2]">Inclus + custom</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Permissions granulaires</td><td className="p-3 border-b border-[#F2F2F2]">Non</td><td className="p-3 border-b border-[#F2F2F2]">Standard</td><td className="p-3 border-b border-[#F2F2F2]">Field-level + teams</td></tr>
                        <tr><td className="p-3 font-medium text-[#111]">SSO + audit log</td><td className="p-3">Non</td><td className="p-3">Limite</td><td className="p-3">Complet</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Reco par taille de boite</h3>
                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Startup &lt; 20 personnes</p><p className="text-[12px] text-[#777] leading-[1.65]">CRM Free + Sales Hub Starter (15 EUR/user). Marketing Hub Free pour les emails simples. Total &lt; 200 EUR/mois pour 10 personnes.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">PME 20-100 personnes</p><p className="text-[12px] text-[#777] leading-[1.65]">Sales Hub Pro (100 EUR/user) + Marketing Hub Pro (800 EUR) + Service Hub Starter. Total 2-5k EUR/mois. C&apos;est le sweet spot HubSpot.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Scale-up 100-500 personnes</p><p className="text-[12px] text-[#777] leading-[1.65]">Sales Hub Enterprise + Marketing Hub Enterprise + Service Hub Pro + Operations Hub Pro. Total 8-15k EUR/mois.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Enterprise 500+ personnes</p><p className="text-[12px] text-[#777] leading-[1.65]">Tous les Hubs Enterprise + Operations Hub Enterprise pour le data sync avance. Total 25-50k EUR/mois. A negocier directement avec HubSpot pour discount enterprise.</p></div>
                  </div>

                  <div className="mt-6 rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">Pour eviter de surpayer : commencez par Sales Hub Pro + Marketing Hub Starter. Vous upgradez Marketing Hub vers Pro quand vous depassez 1 000 contacts marketing. Vous passez en Enterprise quand vous touchez aux limites (custom objects, permissions granulaires, multi-currency).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 3 ───── */}
              <section id="chapitre-3" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">03</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Setup initial : portails, proprietes, gouvernance</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>80 % des projets HubSpot ratent leur setup initial. Pas parce que l&apos;outil est complique, mais parce que personne ne prend le temps de poser les fondations data. Resultat : 6 mois plus tard, le CRM est un chaos qu&apos;il faut refondre.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Le checklist setup en 5 etapes</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FAFAFA] p-4">
                      <p className="text-[13px] font-semibold text-[#111] mb-1">1. Architecture data : objects + relations</p>
                      <p className="text-[12px] text-[#777] leading-[1.65]">HubSpot a 4 objects standards : Contacts, Companies, Deals, Tickets. Vous pouvez ajouter jusqu&apos;a 10 custom objects en Enterprise (ex : Subscriptions, Properties pour immobilier, Patients pour healthtech). Dessinez d&apos;abord le schema cible sur papier avant de creer quoi que ce soit.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4">
                      <p className="text-[13px] font-semibold text-[#111] mb-1">2. Proprietes : standards vs custom</p>
                      <p className="text-[12px] text-[#777] leading-[1.65]">HubSpot fournit 300+ proprietes standards. N&apos;en creez pas de doublon. Pour vos custom properties : nommez en english snake_case (ex: industry_vertical) pour eviter les bugs API. Documentez chaque proprietry custom avec son owner, sa source de donnees, sa frequence de mise a jour.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                      <p className="text-[13px] font-semibold text-[#111] mb-1">3. Lifecycle stages : aligner avec votre funnel</p>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Par defaut : Subscriber, Lead, MQL, SQL, Opportunity, Customer, Evangelist. Adaptez aux 2-3 stages dont vous avez vraiment besoin. Documentez les criteres de passage entre chaque stage. Automatisez les transitions via workflows.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4">
                      <p className="text-[13px] font-semibold text-[#111] mb-1">4. Permissions et teams</p>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Creez des teams (Sales France, Marketing, CS, Admin). Restreignez la visibilite des deals/contacts par team. Donnez 1 admin maximum (single source of truth). Tous les autres en user avec permissions ciblees.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#D4A27F] bg-[#FAFAFA] p-4">
                      <p className="text-[13px] font-semibold text-[#111] mb-1">5. Gouvernance : qui modifie quoi, quand</p>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Document une &laquo; HubSpot Bible &raquo; (Notion ou Confluence) : qui peut creer des proprietes, modifier des workflows, supprimer des donnees. Revue trimestrielle. Sans gouvernance, le portail derive en 6 mois.</p>
                    </div>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Les 5 erreurs classiques de setup</h3>
                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Creer 50 custom properties direct</p><p className="text-[12px] text-[#777] leading-[1.65]">Demarrez avec 10 max. Vous en ajoutez au besoin reel, pas par anticipation. 90 % des custom properties creees au setup ne sont jamais utilisees.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Importer la base sale</p><p className="text-[12px] text-[#777] leading-[1.65]">Nettoyez l&apos;export avant l&apos;import (dedup, format pays ISO, format tel E.164, lifecycle stage coherent). Sinon vous polluez HubSpot des le J1.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Aucun champ obligatoire</p><p className="text-[12px] text-[#777] leading-[1.65]">Definissez 5-7 champs obligatoires par stage (ex : industry en Discovery, decision_makers en Proposal). Sinon les commerciaux laissent tout vide.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Tout le monde admin</p><p className="text-[12px] text-[#777] leading-[1.65]">5 admins = 5 facons de configurer, conflits permanents, audit impossible. 1 admin technique + 1-2 super users metier suffisent.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Pas de documentation</p><p className="text-[12px] text-[#777] leading-[1.65]">Si rien n&apos;est documente, le portail devient un mystere quand le RevOps Manager part. Notion + screenshots, faites simple.</p></div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 4 ───── */}
              <section id="chapitre-4" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">04</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Lead routing, scoring et lifecycle automation</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>La fonction qui distingue un HubSpot &laquo; setup &raquo; d&apos;un HubSpot &laquo; mature &raquo; : l&apos;automation des leads. Routing en moins de 5 minutes, scoring objectif, lifecycle automatique.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Le lead routing : 3 strategies</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">A. Round-robin simple</p><p className="text-[12px] text-[#777] leading-[1.65]">Attribution a tour de role aux AEs disponibles. Bon pour les premiers temps, mauvais quand les AEs ont des specialites.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">B. Territory-based</p><p className="text-[12px] text-[#777] leading-[1.65]">Par geographie ou par industrie. Permet la specialisation. Le mieux pour les equipes 10+ AEs avec verticalisation.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">C. Account-based + load balancing</p><p className="text-[12px] text-[#777] leading-[1.65]">Pour ABM. L&apos;AE proprio de l&apos;account recoit. Si aucun proprio, round-robin selon charge actuelle. Le plus sophistique.</p></div>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">SLA marketing-sales : la regle des 5 minutes</h3>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les SDRs/AEs ont 21x plus de chance de qualifier un lead s&apos;ils repondent en moins de 5 minutes vs 30 minutes (etude Inside Sales). HubSpot permet de monitorer ca via les rapports SLA.</p>
                    <p>Setup recommande :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Notification Slack instantanee sur lead MQL (workflow + integration Slack)</li>
                      <li>Email + mobile push a l&apos;AE assigne</li>
                      <li>Dashboard manager : nombre de MQL avec response time &gt; 5 min</li>
                      <li>Escalade manager si pas de touch dans les 2h</li>
                    </ul>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Lead scoring : fit + engagement</h3>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scoring HubSpot fonctionne sur 2 dimensions :</p>
                    <p><strong>Fit score</strong> : correspondance avec votre ICP. Industry, taille, geographie, technologie utilisee. Note de 0 a 100.</p>
                    <p><strong>Engagement score</strong> : comportement du contact. Pages visitees, emails ouverts/cliques, formulaires soumis, demos demandees. Note de 0 a 100.</p>
                    <p>Le MQL est declenche quand <strong>fit &gt; 50 ET engagement &gt; 30</strong>. Vous ajustez les seuils en analysant la conversion MQL &rarr; Customer historique.</p>
                  </div>

                  <pre className="bg-[#0A0A0A] text-[#E5E7EB] rounded-lg p-4 text-[11px] leading-[1.55] overflow-x-auto mt-4"><code>{`# Exemple fit score formule HubSpot
+30 si industry IN ["SaaS B2B", "Fintech", "Healthtech"]
+20 si num_employees BETWEEN 50 AND 500
+15 si country = "France"
+10 si annual_revenue > 10M EUR
+10 si uses_competitor IN ["Mailchimp", "Pipedrive"]
-20 si lifecyclestage = "Customer" (ne pas reservir aux clients)
-50 si is_competitor_email = true`}</code></pre>

                  <div className="mt-6 rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">Le scoring HubSpot standard est OK mais limite. Pour scoring predictif (modele ML qui apprend de vos won/lost historiques), il faut passer en Marketing Hub Enterprise + Breeze AI (chapitre 8). C&apos;est generalement 30-40 % plus precis que le scoring base regles.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 5 ───── */}
              <section id="chapitre-5" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">05</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Marketing Hub : workflows, sequences, lifecycle</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Marketing Hub est ce qui a fait la reputation de HubSpot. Inbound marketing complete : SEO blog, landing pages, formulaires, emails, automations, attribution. Tout dans un seul outil.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Workflows vs Sequences : la confusion classique</h3>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-[12px] border border-[#E8E8E8]">
                      <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Aspect</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Workflow</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Sequence</th></tr></thead>
                      <tbody className="text-[#555]">
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Volume</td><td className="p-3 border-b border-[#F2F2F2]">1-to-many (milliers)</td><td className="p-3 border-b border-[#F2F2F2]">1-to-1 (personnel)</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Hub</td><td className="p-3 border-b border-[#F2F2F2]">Marketing</td><td className="p-3 border-b border-[#F2F2F2]">Sales</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Duree</td><td className="p-3 border-b border-[#F2F2F2]">Permanent (tant que criteria true)</td><td className="p-3 border-b border-[#F2F2F2]">Termine apres N emails</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Pause sur reponse</td><td className="p-3 border-b border-[#F2F2F2]">Optionnel</td><td className="p-3 border-b border-[#F2F2F2]">Automatique</td></tr>
                        <tr><td className="p-3 font-medium text-[#111]">Use case typique</td><td className="p-3">Nurturing, lifecycle</td><td className="p-3">Cold outbound AE</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Les 7 workflows essentiels a deployer</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">1. Welcome new contact</p><p className="text-[12px] text-[#777] leading-[1.65]">Email de bienvenue 5 min apres signup, double opt-in si requis. Set lifecycle stage = Lead.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">2. MQL alert sales</p><p className="text-[12px] text-[#777] leading-[1.65]">Quand score atteint seuil MQL : notification Slack + email AE assigne + creation task + lifecycle update.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">3. Lead nurturing (cold leads)</p><p className="text-[12px] text-[#777] leading-[1.65]">3-5 emails sur 30 jours avec contenu thematique. Si engagement, re-score. Si toujours froid, mettre en sleep.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">4. Demo request follow-up</p><p className="text-[12px] text-[#777] leading-[1.65]">Confirmation + agenda + brief sender prep. Apres demo : reminder, suivi, NPS.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">5. Re-engagement (sleeping leads)</p><p className="text-[12px] text-[#777] leading-[1.65]">Tous les 60 jours, sequence breakup vers les leads dormants. Re-active ou unsubscribe definitivement.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">6. Customer onboarding</p><p className="text-[12px] text-[#777] leading-[1.65]">Apres deal Won : email bienvenue + sequence onboarding 14-30j + activation milestones. Set lifecycle = Customer.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">7. Internal notifications (data quality)</p><p className="text-[12px] text-[#777] leading-[1.65]">Quand contact manque champs critiques (industry, country) : notification admin. Quand doublon detecte : merge proposal.</p></div>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Landing pages et formulaires : les bonnes pratiques</h3>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong>3-5 champs max</strong> sur les formulaires haut-de-funnel. Email + nom + entreprise suffit souvent.</li>
                      <li><strong>Smart forms</strong> : si le contact existe, ne redemandez pas les infos deja connues. Demandez du progressif (industry au 2e formulaire, role au 3e).</li>
                      <li><strong>Thank you pages</strong> : redirigez vers du contenu ou un Calendly direct. Pas vers la page d&apos;accueil.</li>
                      <li><strong>A/B testing</strong> : testez les CTA, les visuels, les sujets d&apos;email. HubSpot fait ca nativement en Pro+.</li>
                    </ul>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 6 ───── */}
              <section id="chapitre-6" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">06</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Sales Hub : pipeline, forecasting, deal automation</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Sales Hub est le coeur operationnel pour les equipes commerciales. Pipeline visuel, forecast, sequences, meetings, signatures.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Designer un pipeline qui tient</h3>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pipeline minimal pour SaaS B2B :</p>
                    <ol className="list-decimal pl-5 space-y-1.5">
                      <li><strong>Discovery</strong> — Premier call effectue, besoin compris</li>
                      <li><strong>Demo</strong> — Demo realisee, stakeholders identifies</li>
                      <li><strong>Proposal</strong> — Devis envoye</li>
                      <li><strong>Negotiation</strong> — Retour devis, derniere ronde</li>
                      <li><strong>Closed Won / Lost</strong> — Issue finale</li>
                    </ol>
                    <p>Pour les cycles plus complexes (enterprise), ajoutez : Qualification, Technical Eval, Procurement.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Stage criteria : la regle d&apos;or</h3>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque stage doit avoir des criteres exit objectifs. Un deal ne progresse pas tant que les criteres ne sont pas remplis. Exemple :</p>
                  </div>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-[12px] border border-[#E8E8E8]">
                      <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Stage</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Criteria pour passer</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Champ obligatoire</th></tr></thead>
                      <tbody className="text-[#555]">
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Discovery</td><td className="p-3 border-b border-[#F2F2F2]">Pain identifie, budget range, decision process</td><td className="p-3 border-b border-[#F2F2F2]">pain_point</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Demo</td><td className="p-3 border-b border-[#F2F2F2]">Demo faite avec decideur economic</td><td className="p-3 border-b border-[#F2F2F2]">economic_buyer</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Proposal</td><td className="p-3 border-b border-[#F2F2F2]">Devis envoye + close date confirmee</td><td className="p-3 border-b border-[#F2F2F2]">proposal_sent_date</td></tr>
                        <tr><td className="p-3 font-medium text-[#111]">Negotiation</td><td className="p-3">Procurement engage, contract terms en review</td><td className="p-3">procurement_started</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Forecasting HubSpot : 3 modes</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Mode 1 : Manual</p><p className="text-[12px] text-[#777] leading-[1.65]">Chaque AE renseigne sa categorie (commit / best case / pipe) sur ses deals. Le manager voit le rollup.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Mode 2 : Weighted pipeline</p><p className="text-[12px] text-[#777] leading-[1.65]">HubSpot multiplie le montant par la probabilite du stage (ex Proposal = 50%). Plus simple, moins precis.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Mode 3 : AI Forecasting (Breeze)</p><p className="text-[12px] text-[#777] leading-[1.65]">Modele ML qui apprend de votre historique deals won/lost. Disponible Enterprise + Breeze. 30-40% plus precis typiquement.</p></div>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Deal automation : les 5 essentielles</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Stale deal alert</p><p className="text-[12px] text-[#777] leading-[1.65]">Si deal n&apos;a pas d&apos;activite depuis 14 jours : alerte AE + manager. Si toujours rien apres 30 jours : auto-close lost.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Closed date past due</p><p className="text-[12px] text-[#777] leading-[1.65]">Quand close_date depasse de 7+ jours : alerte. Force update du AE.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Stage change &gt; Win/Lost</p><p className="text-[12px] text-[#777] leading-[1.65]">Quand deal passe Won : trigger onboarding CS, invoice creation, Slack #wins. Quand Lost : sequence post-mortem feedback.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Probability auto-update</p><p className="text-[12px] text-[#777] leading-[1.65]">Quand stage change, mise a jour automatique du probability % selon la table standard.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Required fields enforcement</p><p className="text-[12px] text-[#777] leading-[1.65]">Bloque le passage en Proposal sans economic_buyer renseigne. Bloque Won sans contract_signed_date.</p></div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 7 ───── */}
              <section id="chapitre-7" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">07</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Service Hub : tickets, knowledge base, SLA</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Service Hub est plus discret que Sales/Marketing mais devient critique a partir de 100 clients actifs. Tickets, knowledge base, customer feedback, SLA, et maintenant agents IA.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Setup ticketing en 4 etapes</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                    <li><strong>Definir les types de tickets</strong> (bug, feature request, billing, onboarding, etc.) avec couleurs et icons distincts</li>
                    <li><strong>Pipeline ticket</strong> : New &rarr; In Progress &rarr; Waiting Customer &rarr; Resolved &rarr; Closed. Eviter d&apos;avoir 10 stages.</li>
                    <li><strong>Routing rules</strong> : par type, par produit, par client tier. Round-robin entre CS Managers.</li>
                    <li><strong>SLA :</strong> response time (ex 2h business hours pour P1) + resolution time (ex 24h pour P1). Alertes automatiques sur les breaches.</li>
                  </ol>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Knowledge base : structurer pour le self-service</h3>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une bonne KB reduit le volume de tickets de 30-50%. Structure recommandee :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Top 10 articles &laquo; getting started &raquo;</strong> (onboarding new customers)</li>
                      <li><strong>Top 20 articles &laquo; how to &raquo;</strong> (les questions les plus frequentes en support)</li>
                      <li><strong>Top 10 troubleshooting</strong> (erreurs courantes et solutions)</li>
                      <li><strong>FAQ produit par categorie</strong> (pricing, contracts, security, integrations)</li>
                      <li><strong>Changelog</strong> (toutes les nouvelles features lancees)</li>
                    </ul>
                    <p>Pour chaque article : titre clair (la question telle qu&apos;un user la poserait), reponse en 50-200 mots max, screenshot, liens connexes.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Customer feedback : NPS, CSAT, CES</h3>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-[12px] border border-[#E8E8E8]">
                      <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Metric</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Quand l&apos;envoyer</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Cible</th></tr></thead>
                      <tbody className="text-[#555]">
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">NPS</td><td className="p-3 border-b border-[#F2F2F2]">Tous les 90 jours, par batch</td><td className="p-3 border-b border-[#F2F2F2]">&gt; 30 (B2B SaaS)</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">CSAT (post-ticket)</td><td className="p-3 border-b border-[#F2F2F2]">Apres chaque ticket resolu</td><td className="p-3 border-b border-[#F2F2F2]">&gt; 4.5 / 5</td></tr>
                        <tr><td className="p-3 font-medium text-[#111]">CES (customer effort)</td><td className="p-3">Apres onboarding completes</td><td className="p-3">&lt; 2 (1-5 echelle, plus bas mieux)</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 8 ───── */}
              <section id="chapitre-8" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">08</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Breeze AI : agents, copilot, scoring predictif</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Breeze est la couche IA de HubSpot, lancee en GA septembre 2024. En 2026, c&apos;est mature, integre dans tous les Hubs, et inclus dans les plans Pro et Enterprise. Quatre composants principaux.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Les 4 composants Breeze</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">1. Breeze Copilot</p><p className="text-[12px] text-[#777] leading-[1.65]">Assistant chat embarque dans toute la plateforme. Posez des questions sur vos donnees (&laquo; combien de deals fermes en Q4 ? &raquo;), generez du contenu (emails, descriptions), interrogez la knowledge base.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">2. Breeze Agents</p><p className="text-[12px] text-[#777] leading-[1.65]">4 agents specialises : Content Agent (genere des articles blog), Prospecting Agent (recherche prospects ICP), Social Agent (planifie LinkedIn/Twitter), Customer Agent (repond aux tickets simples).</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">3. Breeze Intelligence</p><p className="text-[12px] text-[#777] leading-[1.65]">Enrichissement automatique des contacts/companies (industry, taille, technologie, news). Buyer intent signals (qui visite votre site, qui cherche votre solution sur Google).</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">4. Predictive AI</p><p className="text-[12px] text-[#777] leading-[1.65]">Lead scoring predictif, forecast accuracy, deal probability. Modeles ML qui apprennent de votre historique propre.</p></div>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Activation : par ou commencer</h3>
                  <ol className="list-decimal pl-5 space-y-2 mt-3 text-[13px] text-[#555] leading-[1.75]">
                    <li><strong>Semaine 1 :</strong> activer Breeze Copilot, former l&apos;equipe via 1 session 30 min. Faible risque, valeur immediate.</li>
                    <li><strong>Semaine 2-3 :</strong> activer Predictive Lead Scoring sur Marketing Hub Enterprise. Comparer aux scores actuels pendant 30 jours.</li>
                    <li><strong>Semaine 4-6 :</strong> deployer Content Agent pour generer des drafts blog. Restez en mode validation humaine.</li>
                    <li><strong>Semaine 7-12 :</strong> Prospecting Agent + Customer Agent pour les usages les plus mateurs.</li>
                  </ol>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Limites a connaitre</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Credits consommables</p><p className="text-[12px] text-[#777] leading-[1.65]">Pro inclut X credits/mois, Enterprise plus. Au-dela, c&apos;est facture en credits supplementaires. Monitorez les usages.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Pas de modele custom</p><p className="text-[12px] text-[#777] leading-[1.65]">Vous utilisez les modeles HubSpot, pas les votres. Pour du custom (vos prompts proprietaires, votre RAG sur votre data), passez par MCP + Claude (chapitre 9).</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Donnees envoyees au modele</p><p className="text-[12px] text-[#777] leading-[1.65]">Bien que HubSpot ait des accords de confidentialite, certaines donnees PII sont envoyees aux LLM partenaires. Verifiez le DPA si compliance forte.</p></div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 9 ───── */}
              <section id="chapitre-9" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">09</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">HubSpot MCP server : tutoriel + 12 cas d&apos;usage</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le HubSpot MCP server officiel est passe en GA le 13 avril 2026. C&apos;est ce qui permet de connecter Claude, ChatGPT ou tout autre client MCP-compatible directement a votre HubSpot. Lecture/ecriture CRM via natural language.</p>
                    <p>Pourquoi c&apos;est game-changer : vous depassez les limites de Breeze (qui est limite aux modeles HubSpot) et vous pouvez batir des agents IA custom avec vos propres prompts, vos propres modeles, vos propres logiques metier.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Setup en 4 etapes (30 min)</h3>
                  <ol className="list-decimal pl-5 space-y-2 mt-3 text-[13px] text-[#555] leading-[1.75]">
                    <li><strong>HubSpot &raquo; Settings &raquo; Integrations &raquo; MCP server</strong> : activer le server. Recupere ton portal ID.</li>
                    <li><strong>Private app</strong> : creer une private app avec les scopes <code className="text-[#6D00CC]">crm.objects.contacts.read</code>, <code className="text-[#6D00CC]">crm.objects.deals.read</code>, etc. Recupere le token.</li>
                    <li><strong>Claude Desktop config</strong> : modifie <code className="text-[#6D00CC]">~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
                    <li><strong>Relance Claude Desktop</strong>, test avec un prompt simple : &laquo; combien de contacts crees ce mois ? &raquo;</li>
                  </ol>

                  <pre className="bg-[#0A0A0A] text-[#E5E7EB] rounded-lg p-4 text-[11px] leading-[1.55] overflow-x-auto mt-4"><code>{`{
  "mcpServers": {
    "hubspot": {
      "url": "https://mcp.hubspot.com/v1/{YOUR_PORTAL_ID}",
      "headers": {
        "Authorization": "Bearer {YOUR_PRIVATE_APP_TOKEN}"
      }
    }
  }
}`}</code></pre>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">12 cas d&apos;usage RevOps avec prompts prets a coller</h3>

                  <div className="mt-5 space-y-4">
                    {[
                      { n: 1, title: "Enrichissement et scoring lead a l'arrivee", prompt: "Quand un nouveau contact arrive avec lifecyclestage=lead, recupere via hubspot_get_contact. Si industry/job_title vides, enrichis. Update via hubspot_update_contact. Calcule score 0-100 base sur ICP fit. Si score > 70, set lifecyclestage=MQL et notifie Slack." },
                      { n: 2, title: "Brief pre-call en 60 sec", prompt: "Genere brief de 200 mots pour mon call avec {{contact_email}} dans 1h : historique HubSpot (deals, notes, emails), profil LinkedIn, news entreprise 30 derniers jours, 3 angles de discussion. Format puces." },
                      { n: 3, title: "Qualification automatique form submission", prompt: "Trigger : form submission demo-request. Lis contact + company. Verifie taille entreprise via enrichissement. Classe hot/warm/cold selon ICP. Hot = cree deal stage Discovery + assign AE. Warm = ajoute sequence nurturing. Cold = liste reciblage." },
                      { n: 4, title: "Pipeline hygiene daily", prompt: "Pour chaque deal pipeline > 0 EUR : si pas d'activite 14j flag stale. Si close_date depassee, demande update au owner Slack DM. Si Proposal > 30j sans next step, alerte VP Sales. Genere resume markdown des 10 deals les plus a risque." },
                      { n: 5, title: "Detection churn signals", prompt: "Daily run sur portfolio CS. Pour chaque compte MRR > 2k EUR : query actions_last_30d, logins_last_30d. Si -50% activite + pas de support ticket : signal churn faible. Si -70% + stage stable : signal fort. Cree task CS + notifie owner." },
                      { n: 6, title: "Forecast accuracy review hebdo", prompt: "Vendredi 16h pour VP Sales : analyse deals close_date < fin Q. Calcule % conformite stage criteria. Compare predictions agent IA vs predictions AE. Identifie deals commit sans next step concret. Genere brief 1 page pour forecast call lundi." },
                      { n: 7, title: "Account research deep avant Account Plan", prompt: "Trigger : AE demande 'Prepare account plan pour {{account}}'. Lis historique HubSpot complet. Mappe org chart via LinkedIn. Scrape news/funding 6 mois. Cherche notes Notion. Genere plan structure : opportunites, risques, stakeholders, next step. Sauve draft Notion." },
                      { n: 8, title: "CS health score automatise", prompt: "Recalcule chaque nuit tous comptes. Score base sur : product usage (-40% pondere), support tickets sentiment (-20%), NPS recent (+20%), expansion conversations (-20%), renewal date proximity (+/- 20%). Met a jour cs_health_score + color (red/amber/green)." },
                      { n: 9, title: "Marketing campaign analysis", prompt: "Lundi matin pour CMO : top 3 sources MQL converties en deals. Bottom 3 campagnes (cost-per-MQL > 3x median). Suggestions pause / scale-up. Format markdown 1 page + table comparative vs semaine -1." },
                      { n: 10, title: "Renewal risk alerts a J-90", prompt: "Daily check pour chaque renewal dans 90 prochains jours. Verifie cs_health_score, activite, sentiment. Si red : cree task urgente + notifie Head of CS. Si amber : ajoute weekly CS standup. Si green : summary mensuel." },
                      { n: 11, title: "Compete intel chaque deal Negotiation", prompt: "Trigger : deal passe Negotiation. Lis notes deal pour identifier concurrents. Recupere battle card depuis Notion. Cherche news/release concurrents recentes. Genere brief 'positioning vs ces concurrents en 2026'. Attache note au deal." },
                      { n: 12, title: "Reporting cross-equipe weekly", prompt: "Lundi 7h post automatique #revenue-weekly : Marketing (MQLs, top sources, CPA), Sales (deals crees/closes, pipeline coverage), CS (NRR, health rouges, renewals 30j), Finance (MRR, CAC payback), 3 alertes prioritaires (changement > 20% metrique cle)." },
                    ].map((c) => (
                      <div key={c.n} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#111] mb-2">{c.n}. {c.title}</p>
                        <pre className="text-[11px] text-[#555] leading-[1.6] whitespace-pre-wrap font-mono bg-[#FAFAFA] p-3 rounded">{c.prompt}</pre>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">Tutoriel complet et plus de cas d&apos;usage dans notre <Link href="/guide-mcp-revops" className="text-white underline hover:text-white/80">Guide MCP pour le RevOps</Link> (65 pages dediees).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 10 ───── */}
              <section id="chapitre-10" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">10</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Reporting, dashboards et attribution</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le custom report builder HubSpot est tres puissant en Pro+ (et tres limite en Starter). Multi-objets, datasets, filters complexes.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Les 10 reports essentiels par persona</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Pour VP Sales</p><p className="text-[12px] text-[#777] leading-[1.65]">1) Pipeline coverage Q en cours / cible. 2) Forecast vs actual rolling 4Q. 3) Win rate par AE + segment.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Pour CMO</p><p className="text-[12px] text-[#777] leading-[1.65]">4) MQL volume + qualite par source. 5) CAC par canal. 6) Attribution multi-touch deals Won.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Pour Head of CS</p><p className="text-[12px] text-[#777] leading-[1.65]">7) NRR/GRR rolling 12 mois. 8) Health score distribution. 9) Renewal pipeline next 90j.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Pour CEO/board</p><p className="text-[12px] text-[#777] leading-[1.65]">10) Revenue waterfall + key SaaS metrics (ARR, NRR, CAC payback, LTV/CAC).</p></div>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Attribution multi-touch : les 3 modeles</h3>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-[12px] border border-[#E8E8E8]">
                      <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Modele</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Logique</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Best for</th></tr></thead>
                      <tbody className="text-[#555]">
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">First touch</td><td className="p-3 border-b border-[#F2F2F2]">100% attribution premier point de contact</td><td className="p-3 border-b border-[#F2F2F2]">Awareness marketing (SEO, ads)</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Last touch</td><td className="p-3 border-b border-[#F2F2F2]">100% attribution dernier point</td><td className="p-3 border-b border-[#F2F2F2]">Decision attribution (demo request)</td></tr>
                        <tr><td className="p-3 font-medium text-[#111]">Linear / W-shaped</td><td className="p-3">Repartition pondere sur tous touches</td><td className="p-3">Vue equilibre (modele recommande)</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 11 ───── */}
              <section id="chapitre-11" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">11</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Integrations : Salesforce, billing, data warehouse</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot offre 1 500+ integrations natives. Pour les sync critiques, vous avez 3 options : natif, iPaaS, ou custom.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Integrations natives a connecter en S1</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Email + Calendar</p><p className="text-[12px] text-[#777] leading-[1.65]">Gmail ou Outlook. Sync emails 2-way, calendar sync, meeting scheduler embedded. Obligatoire J1.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Slack</p><p className="text-[12px] text-[#777] leading-[1.65]">Notifications deals/leads, search HubSpot depuis Slack, channel #revenue avec posts auto.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">LinkedIn Sales Navigator</p><p className="text-[12px] text-[#777] leading-[1.65]">Voir profil LinkedIn directement dans HubSpot, sync InMails, save leads from LinkedIn.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Zoom / Google Meet</p><p className="text-[12px] text-[#777] leading-[1.65]">Meeting recordings dans engagement HubSpot. Si en plus Otter/Fireflies : transcripts auto.</p></div>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Sync HubSpot &harr; Salesforce</h3>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Cas typique : marketing sur HubSpot, sales operations sur Salesforce. L&apos;integration officielle est mature mais piegeuse a configurer.</p>
                    <p>Best practices :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Definir la source of truth par objet (contacts = HubSpot, deals = Salesforce typiquement)</li>
                      <li>Mapping field-by-field documente</li>
                      <li>Sync rules : 2-way pour les contacts, 1-way pour les deals (HS &rarr; SF)</li>
                      <li>Monitoring quotidien des sync errors (alerte Slack)</li>
                      <li>Operations Hub Pro pour le data sync avance</li>
                    </ul>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Data warehouse (BigQuery, Snowflake)</h3>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pour le reporting analytique avance, exportez HubSpot vers votre data warehouse :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>HubSpot Operations Hub</strong> : connexion native vers BigQuery/Snowflake (Enterprise)</li>
                      <li><strong>Fivetran / Stitch</strong> : ELT du HubSpot vers le DWH, refresh chaque heure</li>
                      <li><strong>Looker / Tableau / Hex</strong> : visualisation par-dessus le DWH</li>
                    </ul>
                    <p>Quand passer au DWH : des que vous avez besoin de joindre HubSpot avec d&apos;autres data (product usage, billing, support tickets) ou des metrics qui ne sont pas natives HubSpot (cohort retention, expansion par segment fin).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CHAPITRE 12 ───── */}
              <section id="chapitre-12" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">12</div>
                    <div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Migration vers HubSpot + plan 90 jours</h2></div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Migrer vers HubSpot est plus complexe qu&apos;un simple import CSV. 30-40 % des migrations ratent leur deadline ou leur qualite. Voici la methode qui marche.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Migration depuis Salesforce, Pipedrive, Excel : la methode</h3>
                  <ol className="list-decimal pl-5 space-y-2 mt-3 text-[13px] text-[#555] leading-[1.75]">
                    <li><strong>Audit data source (S1-2)</strong> : export complet, mesure qualite (doublons, champs manquants, lifecycle inconsistencies). Documente le schema actuel.</li>
                    <li><strong>Design schema cible HubSpot (S3-4)</strong> : objects, properties, lifecycle stages, pipelines. Field mapping doc.</li>
                    <li><strong>Sandbox HubSpot (S5)</strong> : creer portal sandbox gratuit (free 90j). Import test sur 10 % des donnees.</li>
                    <li><strong>Nettoyage data (S6-7)</strong> : dedup, standardisation, enrichissement manquants. C&apos;est 50 % du travail migration.</li>
                    <li><strong>Workflows + automations (S8-9)</strong> : reconstruire les workflows essentiels avant le go-live (lead routing, scoring, lifecycle automation).</li>
                    <li><strong>Tests et validation (S10)</strong> : tests end-to-end avec 3-5 power users. Comparaison rapport HubSpot vs source pour 10 KPIs cles.</li>
                    <li><strong>Formation equipes (S11)</strong> : 2 sessions par persona (Sales, Marketing, CS), 1h chacune. Documentation Notion.</li>
                    <li><strong>Go-live et hypercare (S12+)</strong> : migration finale weekend, support intense les 2 premieres semaines, retro a J+30.</li>
                  </ol>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Plan 30/60/90 jours d&apos;implementation</h3>
                  <div className="space-y-3 mt-3">
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">J0-J30 : Foundations</p><p className="text-[12px] text-[#777] leading-[1.65]">Setup portail, custom objects, properties, lifecycle stages, permissions. Import data clean. Workflows 1-7 essentiels. <strong>KPI :</strong> 80 % adoption commerciaux quotidienne.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">J31-J60 : Optimisation</p><p className="text-[12px] text-[#777] leading-[1.65]">Lead scoring fin tune, custom reports par persona, automations Sales/CS deployees. Premieres iterations sur les KPIs. <strong>KPI :</strong> forecast accuracy &gt; 70 %.</p></div>
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">J61-J90 : Intelligence</p><p className="text-[12px] text-[#777] leading-[1.65]">Activation Breeze AI, deploiement MCP server, integrations data warehouse, attribution multi-touch. <strong>KPI :</strong> NPS interne utilisateurs HubSpot &gt; 50.</p></div>
                  </div>

                  <div className="mt-6 rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">Le piege fatal : vouloir tout activer en S1. Resultat : usine a gaz incomprehensible, adoption catastrophique, projet abandonne. Sequencez : foundations &rarr; optimisation &rarr; intelligence. Chaque palier doit etre stable avant de passer au suivant.</p>
                  </div>

                  <h3 className="mt-7 mb-3 text-[16px] font-semibold text-[#111]">Combien ca coute (avec Ceres)</h3>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-[12px] border border-[#E8E8E8]">
                      <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Profil</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Setup initial</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Run continu</th></tr></thead>
                      <tbody className="text-[#555]">
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Startup &lt; 30 personnes</td><td className="p-3 border-b border-[#F2F2F2]">8-15 k EUR</td><td className="p-3 border-b border-[#F2F2F2]">2-4 k EUR/mois</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">PME 30-100 personnes</td><td className="p-3 border-b border-[#F2F2F2]">25-40 k EUR</td><td className="p-3 border-b border-[#F2F2F2]">4-7 k EUR/mois</td></tr>
                        <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Scale-up 100-500</td><td className="p-3 border-b border-[#F2F2F2]">50-100 k EUR</td><td className="p-3 border-b border-[#F2F2F2]">7-12 k EUR/mois</td></tr>
                        <tr><td className="p-3 font-medium text-[#111]">Enterprise 500+</td><td className="p-3">100-300 k EUR</td><td className="p-3">12-25 k EUR/mois</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[12px] text-[#999] mt-4">Les couts incluent l&apos;accompagnement methodologique + setup technique + formation. Le cout licence HubSpot est a ajouter (voir chapitre 2).</p>
                </div>
              </section>
              <Connector />

              {/* ───── CTA ───── */}
              <section className="mb-8">
                <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                  <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a deployer ou refondre votre HubSpot ?</h2>
                  <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">On accompagne les scale-ups B2B sur HubSpot depuis 2017. Diamond Partner depuis 2021. 250+ deploiements. Diagnostic gratuit en 30 min.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                    Reserver un diagnostic
                  </Link>
                </div>
              </section>
              <Connector />

              {/* ───── Related ───── */}
              <section>
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedReads.map((r) => (
                    <Link key={r.slug} href={r.slug} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-sm" style={{ background: r.color }} />
                        <span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span>
                      </div>
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
