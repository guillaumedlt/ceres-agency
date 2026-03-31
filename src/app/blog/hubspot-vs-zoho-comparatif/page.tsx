"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HubSpot vs Zoho CRM : comparatif honnete en 2026",
  description: "Comparaison detaillee HubSpot vs Zoho CRM en 2026 : prix, fonctionnalites, UX, automatisation, IA (Zia vs Breeze), integrations, support et verdict par taille d'entreprise.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/hubspot-vs-zoho-comparatif" },
  articleSection: "CRM & HubSpot",
  wordCount: 3800,
  inLanguage: "fr",
};

const sections = [
  { id: "intro", title: "Deux philosophies de CRM" },
  { id: "pricing", title: "Comparatif des prix" },
  { id: "fonctionnalites-crm", title: "Fonctionnalites CRM" },
  { id: "marketing", title: "Marketing automation" },
  { id: "automatisation", title: "Profondeur d'automatisation" },
  { id: "ia-capabilities", title: "IA : Zia vs Breeze" },
  { id: "integrations", title: "Integrations et ecosysteme" },
  { id: "ux-adoption", title: "UX et adoption" },
  { id: "support-communaute", title: "Support et communaute" },
  { id: "pour-startups", title: "Pour les startups" },
  { id: "pour-pme", title: "Pour les PME" },
  { id: "verdict", title: "Notre verdict" },
];

const relatedArticles = [
  { title: "HubSpot vs Salesforce : le comparatif honnete en 2026", slug: "hubspot-vs-salesforce-comparatif", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "HubSpot vs Pipedrive : comparatif complet", slug: "hubspot-vs-pipedrive-comparatif-prix-fonctionnalites", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Le meilleur CRM B2B en France en 2026", slug: "meilleur-crm-b2b-france", category: "CRM & HubSpot", color: "#4B5EFC" },
];

export default function HubSpotVsZohoArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");

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
        <div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "4%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "14%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#DC4A2A", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "55%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

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
                        ? "border-[#4B5EFC] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=HubSpot%20vs%20Zoho%20CRM%20comparatif%202026&url=https://ceres.agency/blog/hubspot-vs-zoho-comparatif" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/hubspot-vs-zoho-comparatif" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">HubSpot vs Zoho</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM &amp; HubSpot</Badge>
                <span className="text-[11px] text-[#CCC]">16 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                HubSpot vs Zoho CRM : comparatif honnete en 2026
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                HubSpot et Zoho CRM sont deux des CRM les plus populaires pour les PME, mais avec des positionnements tres differents. Zoho mise sur le rapport qualite-prix imbattable et l&apos;ecosysteme complet a moindre cout. HubSpot mise sur l&apos;experience utilisateur et la puissance marketing. Nous avons deploye les deux. Voici notre comparatif sans concession.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>31 mars 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 - Intro */}
              <section id="intro" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <img src="https://www.google.com/s2/favicons?domain=zoho.com&sz=32" alt="Zoho" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Deux philosophies de CRM pour PME</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Zoho</strong> est une entreprise indienne fondee en 1996 par Sridhar Vembu. L&apos;ecosysteme Zoho compte plus de 55 applications business (CRM, mail, projects, books, desk, analytics, etc.) qui rivalisent avec les solutions occidentales a une fraction du prix. Zoho CRM est utilise par plus de 250 000 entreprises dans 180 pays. Sa philosophie : offrir 80% des fonctionnalites des leaders du marche a 20% du prix.</p>
                    <p><strong className="text-[#111]">HubSpot</strong> est la reference en CRM all-in-one pour les PME B2B. Sa plateforme unifiee (Marketing Hub, Sales Hub, Service Hub, CMS Hub, Operations Hub, Commerce Hub) offre une experience utilisateur superieure et des fonctionnalites marketing inegalees. HubSpot est plus cher que Zoho, mais la difference de prix se justifie-t-elle par une difference de valeur proportionnelle ? C&apos;est la question centrale de ce comparatif.</p>
                    <p>Transparence : nous sommes partenaires HubSpot. Mais nous avons deploye Zoho chez des clients ou c&apos;etait le bon choix, notamment pour les startups early-stage avec un budget CRM inferieur a 500 EUR/mois. Notre objectif est que vous fassiez le bon choix, pas le choix le plus cher.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 - Pricing (dark section) */}
              <section id="pricing" className="mb-8">
                <div className="rounded-2xl bg-[#111] text-white p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold mb-4">Comparatif des prix : l&apos;avantage Zoho</h2>
                  <div className="space-y-3 text-[13px] text-[#CCC] leading-[1.75] mb-5">
                    <p>C&apos;est le point fort numero 1 de Zoho : le prix. A fonctionnalites comparables, Zoho est 2 a 5 fois moins cher que HubSpot. C&apos;est un fait, pas une opinion.</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "CRM gratuit", hs: "Gratuit (illimite contacts, fonctionnalites limitees)", zo: "Gratuit (3 users max)", note: "HubSpot gratuit est plus genereux en fonctionnalites. Zoho gratuit est tres limite." },
                      { label: "CRM Sales - 10 users/mois", hs: "900 EUR (Sales Hub Pro)", zo: "230 EUR (Professional)", note: "Zoho est 4x moins cher. Mais HubSpot Pro inclut sequences, forecasting avance et reporting superieur." },
                      { label: "Marketing automation", hs: "800 EUR/mois (Marketing Hub Pro, 2K contacts)", zo: "Inclus dans Zoho CRM Plus (57 EUR/user/mois)", note: "L'ecart de prix est massif. Mais HubSpot Marketing Hub est significativement plus puissant." },
                      { label: "Suite complete - 10 users", hs: "1 700+ EUR/mois (CRM Suite Pro)", zo: "570 EUR/mois (CRM Plus)", note: "HubSpot coute 3x plus cher pour la suite complete. La question : en avez-vous 3x plus pour votre argent ?" },
                    ].map((row) => (
                      <div key={row.label} className="rounded-xl bg-white/5 p-4">
                        <p className="text-[12px] font-semibold text-white mb-2">{row.label}</p>
                        <div className="flex gap-4 mb-2">
                          <div className="flex-1">
                            <p className="text-[10px] text-[#FF7A59] font-medium mb-0.5">HubSpot</p>
                            <p className="text-[11px] text-[#DDD]">{row.hs}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-[10px] text-[#DC4A2A] font-medium mb-0.5">Zoho</p>
                            <p className="text-[11px] text-[#DDD]">{row.zo}</p>
                          </div>
                        </div>
                        <p className="text-[10px] text-[#888] leading-[1.5]">{row.note}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 text-[13px] text-[#CCC] leading-[1.75]">
                    <p><strong className="text-white">Point important :</strong> Zoho propose aussi Zoho One, un bundle de 45+ applications Zoho pour 37 EUR/user/mois. C&apos;est probablement l&apos;offre la plus agressive du marche SaaS. Pour une PME de 10 personnes, c&apos;est 370 EUR/mois pour CRM + email + projets + comptabilite + desk + analytics + 40 autres apps.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 - CRM features */}
              <section id="fonctionnalites-crm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Fonctionnalites CRM</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Sur les fonctionnalites CRM pures, les deux plateformes sont remarquablement proches. Les ecarts se situent dans l&apos;execution et les details.</p>
                    <p><strong className="text-[#111]">Gestion des contacts.</strong> Les deux offrent des fiches contact riches avec timeline d&apos;activite, proprietes custom, segmentation et filtres avances. HubSpot a un leger avantage sur la lisibilite de la timeline et la deduplication automatique. Zoho propose Canvas, un builder de fiches contact personnalisables, qui est unique et tres apprecie.</p>
                    <p><strong className="text-[#111]">Pipeline de ventes.</strong> HubSpot offre des pipelines kanban visuels, du deal scoring et du forecasting natif. Zoho propose des pipelines similaires avec Blueprint (guide de processus), des regles de validation et un forecasting avance. Les deux sont excellents. Avantage leger a Zoho sur Blueprint qui est plus puissant que les Process Guides HubSpot.</p>
                    <p><strong className="text-[#111]">Reporting.</strong> HubSpot propose un builder de rapports drag-and-drop intuitif avec des dashboards partageables. Zoho offre Zoho Analytics (en add-on ou inclus dans CRM Plus), un outil de BI complet avec SQL, tableaux croises et rapports avances. Pour le reporting avance, Zoho Analytics est superieur au reporting natif HubSpot. Mais HubSpot est plus rapide a prendre en main pour les rapports standards.</p>
                  </div>
                  <div className="mt-5 rounded-xl border border-[#F2F2F2] overflow-hidden">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="bg-[#FAFAFA]">
                          <th className="text-left p-3 font-semibold text-[#111]">Critere</th>
                          <th className="text-center p-3 font-semibold text-[#FF7A59]">HubSpot</th>
                          <th className="text-center p-3 font-semibold text-[#DC4A2A]">Zoho</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { f: "Contacts et entreprises", hs: "9/10", zo: "8/10" },
                          { f: "Pipeline de ventes", hs: "9/10", zo: "8.5/10" },
                          { f: "Sequences email", hs: "9/10", zo: "7/10" },
                          { f: "Reporting natif", hs: "8/10", zo: "7/10" },
                          { f: "Reporting avance (BI)", hs: "7/10", zo: "9/10" },
                          { f: "Personnalisation", hs: "7/10", zo: "9/10" },
                          { f: "Mobile app", hs: "8/10", zo: "8/10" },
                          { f: "Forecasting", hs: "8/10", zo: "8/10" },
                        ].map((row) => (
                          <tr key={row.f} className="border-t border-[#F2F2F2]">
                            <td className="p-3 text-[#555]">{row.f}</td>
                            <td className="p-3 text-center text-[#FF7A59] font-medium">{row.hs}</td>
                            <td className="p-3 text-center text-[#DC4A2A] font-medium">{row.zo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 - Marketing */}
              <section id="marketing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Marketing automation</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est ici que l&apos;ecart entre les deux plateformes est le plus significatif, et c&apos;est souvent la raison pour laquelle les entreprises choisissent HubSpot malgre le prix superieur.</p>
                    <p><strong className="text-[#111]">HubSpot Marketing Hub</strong> est l&apos;un des meilleurs outils de marketing automation B2B du marche. Workflows visuels avances, lead scoring multi-criteres, email marketing avec A/B testing, landing pages, blog, SEO, social media, formulaires intelligents, attribution multi-touch, reporting detaille. Tout est natif, tout communique, tout se mesure. C&apos;est la reference.</p>
                    <p><strong className="text-[#111]">Zoho Marketing Automation</strong> (ou Zoho Campaigns pour l&apos;email) est correct mais en retrait. Les workflows sont moins intuitifs, le builder d&apos;emails moins sophistique, le A/B testing plus basique, et il n&apos;y a pas de blog ni de SEO natif. Zoho Social existe en tant qu&apos;application separee mais n&apos;est pas au niveau des fonctionnalites social media de HubSpot. L&apos;attribution est basique.</p>
                    <p><strong className="text-[#111]">Notre constat :</strong> si le marketing automation est au coeur de votre strategie, HubSpot justifie son prix superieur. Si vous faites du marketing basique (newsletters, formulaires, nurturing simple), Zoho suffit et vous economiserez significativement.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 - Automatisation */}
              <section id="automatisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Profondeur d&apos;automatisation</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les deux plateformes offrent des capacites d&apos;automatisation solides, mais avec des approches differentes.</p>
                    <p><strong className="text-[#111]">HubSpot Workflows</strong> est un builder visuel intuitif qui couvre la majorite des cas d&apos;usage : attribution de leads, nurturing, changement de proprietes, creation de taches, notifications, integration avec des outils tiers. Les Workflows HubSpot sont plus faciles a creer et a maintenir, mais moins flexibles que les automatisations Zoho pour les cas complexes.</p>
                    <p><strong className="text-[#111]">Zoho CRM</strong> propose trois niveaux d&apos;automatisation. Les Workflow Rules (basiques mais efficaces), Blueprint (guide de processus, equivalent aux Process Guides HubSpot en plus puissant), et Deluge (un langage de scripting propriétaire qui permet de coder des automatisations custom). Deluge est extremement puissant pour les organisations avec des developpeurs, mais ajoute de la complexite.</p>
                    <p><strong className="text-[#111]">Zoho Flow</strong> est l&apos;equivalent de Zapier/Make mais natif a l&apos;ecosysteme Zoho. Il connecte les 55+ apps Zoho entre elles et avec des outils tiers. C&apos;est un avantage reel quand vous utilisez plusieurs produits Zoho.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "300+", label: "templates de workflows HubSpot", color: "#FF7A59" },
                      { stat: "Deluge", label: "langage de scripting Zoho (unique)", color: "#DC4A2A" },
                      { stat: "55+", label: "applications dans l'ecosysteme Zoho", color: "#4B5EFC" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[22px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 - IA */}
              <section id="ia-capabilities" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">IA : Zia vs Breeze</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Les deux plateformes ont integre l&apos;IA de maniere significative, mais avec des niveaux de maturite differents.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=zoho.com&sz=32" alt="Zoho" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-[#111]">Zia (Zoho)</span>
                      </div>
                      <ul className="space-y-1.5">
                        {[
                          "Scoring predictif des leads et deals",
                          "Meilleur moment pour contacter (best time to call)",
                          "Detection d'anomalies dans les donnees",
                          "Suggestions de macros et automatisations",
                          "Analyse de sentiments dans les emails",
                          "Predictions de closing des deals",
                          "Enrichissement de donnees",
                          "Assistant conversationnel",
                        ].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DC4A2A] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-[#111]">Breeze (HubSpot)</span>
                      </div>
                      <ul className="space-y-1.5">
                        {[
                          "Breeze Copilot (assistant contextuel CRM)",
                          "Breeze Agents (prospection, contenu, social, CS)",
                          "Scoring predictif des leads",
                          "Generation d'emails et de contenu",
                          "Resume de conversations",
                          "Breeze Intelligence (enrichissement)",
                          "Workflows IA (branches conditionnelles)",
                          "ChatSpot (requetes langage naturel)",
                        ].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Notre analyse :</strong> Zia etait pionniere en IA CRM (lancee en 2017, bien avant ChatGPT). Ses fonctions de prediction et d&apos;anomalie detection sont solides. Mais Breeze a rattrape et depasse Zia en 2025-2026, notamment sur la generation de contenu, les agents autonomes et l&apos;enrichissement de donnees. L&apos;avantage Breeze est que l&apos;IA est integree dans chaque ecran du CRM de maniere contextuelle, pas comme un module separe.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 - Integrations */}
              <section id="integrations" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Integrations et ecosysteme</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;ecosysteme Zoho</strong> est impressionnant par sa largeur. 55+ applications qui couvrent quasiment tous les besoins business : CRM, email (Zoho Mail), projets (Zoho Projects), comptabilite (Zoho Books), support (Zoho Desk), analytics (Zoho Analytics), RH (Zoho People), et bien d&apos;autres. Si vous restez dans l&apos;ecosysteme Zoho, tout communique nativement. Le probleme : les integrations avec des outils tiers populaires (Slack, Notion, Stripe, Webflow) sont moins nombreuses et moins profondes que chez HubSpot.</p>
                    <p><strong className="text-[#111]">HubSpot Marketplace</strong> propose 1 700+ integrations natives avec l&apos;ecosysteme SaaS moderne. Slack, Zoom, Gmail, Google Workspace, Stripe, Shopify, WordPress, Salesforce, LinkedIn, et des centaines d&apos;outils specialises. Les integrations HubSpot sont generalement plus profondes et mieux maintenues que les integrations Zoho equivalentes.</p>
                    <p><strong className="text-[#111]">La question cle :</strong> utilisez-vous deja des outils SaaS modernes (Slack, Notion, Stripe) ? HubSpot s&apos;integrera mieux. Voulez-vous remplacer tous vos outils par un ecosysteme unique a moindre cout ? Zoho One est imbattable.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 - UX */}
              <section id="ux-adoption" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">UX et adoption</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;experience utilisateur est le deuxieme plus grand ecart entre les deux plateformes (apres le prix). Et paradoxalement, c&apos;est souvent la raison pour laquelle les entreprises paient plus cher pour HubSpot.</p>
                    <p><strong className="text-[#111]">HubSpot</strong> a investi massivement dans le design. L&apos;interface est coherente, epuree, intuitive. Un commercial non technique peut etre autonome en 2-3 jours. La navigation est logique entre les differents hubs. Les formulaires de creation sont guides. Le onboarding in-app est excellent. Resultat : les taux d&apos;adoption chez nos clients HubSpot depassent systematiquement 80% dans le premier mois.</p>
                    <p><strong className="text-[#111]">Zoho CRM</strong> a fait des progres significatifs en UX avec Canvas (personnalisation visuelle des fiches) et la refonte de l&apos;interface en 2024-2025. Mais l&apos;experience reste en retrait par rapport a HubSpot. L&apos;interface peut sembler chargee, la navigation entre les modules est moins fluide, et certaines fonctionnalites sont difficiles a trouver sans formation. Le taux d&apos;adoption moyen que nous constatons chez les clients Zoho : 55-70% dans le premier mois.</p>
                    <p><strong className="text-[#111]">L&apos;impact reel :</strong> un CRM que personne n&apos;utilise ne vaut rien, meme s&apos;il est gratuit. Le cout d&apos;un CRM mal adopte n&apos;est pas le prix de la licence : c&apos;est le cout des donnees non saisies, des opportunites non suivies et des clients non relances. Si votre equipe refuse d&apos;utiliser le CRM, le CRM le moins cher du marche vous coutera plus cher qu&apos;un CRM bien adopte.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { label: "Taux d'adoption a 30 jours", hs: "80-90%", zo: "55-70%" },
                      { label: "Temps de formation", hs: "2-3 jours", zo: "3-7 jours" },
                      { label: "Note UX (G2, 2026)", hs: "8.8/10", zo: "7.5/10" },
                      { label: "Note facilite de setup (G2)", hs: "8.5/10", zo: "7.8/10" },
                    ].map((row) => (
                      <div key={row.label} className="rounded-xl border border-[#F2F2F2] p-3 text-center">
                        <p className="text-[10px] text-[#999] mb-2">{row.label}</p>
                        <div className="flex justify-center gap-4">
                          <div>
                            <p className="text-[13px] font-bold text-[#FF7A59]">{row.hs}</p>
                            <p className="text-[9px] text-[#999]">HubSpot</p>
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-[#DC4A2A]">{row.zo}</p>
                            <p className="text-[9px] text-[#999]">Zoho</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 - Support */}
              <section id="support-communaute" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Support et communaute</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">HubSpot</strong> excelle ici. Support par chat et email en francais, HubSpot Academy (certifications gratuites de qualite), communaute active, base de connaissances exhaustive, ecosysteme de partenaires certifies dense en France (plus de 50 agences). Quand vous etes bloque, vous trouvez de l&apos;aide facilement.</p>
                    <p><strong className="text-[#111]">Zoho</strong> propose un support correct mais en retrait. Le support en francais est limite (principalement en anglais). La documentation est vaste mais parfois desorganisee. La communaute est plus petite et moins active, surtout en France. L&apos;ecosysteme de partenaires Zoho en France est significativement plus reduit que celui de HubSpot.</p>
                    <p><strong className="text-[#111]">Point critique pour les PME francaises :</strong> si vous avez besoin d&apos;un partenaire francophone pour vous accompagner dans la mise en place et l&apos;optimisation continue de votre CRM, HubSpot offre un ecosysteme beaucoup plus riche. Trouver un expert Zoho certifie en France est possible mais plus difficile.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 - Startups */}
              <section id="pour-startups" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pour les startups</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les startups ont des besoins specifiques : budget serre, equipe reduite, croissance rapide, besoin de flexibilite.</p>
                    <p><strong className="text-[#111]">Si votre budget CRM est inferieur a 300 EUR/mois</strong>, Zoho est le choix rationnel. Zoho CRM Standard (14 EUR/user/mois) ou Zoho One (37 EUR/user/mois pour 45+ apps) offrent un rapport fonctionnalites/prix imbattable. Vous aurez un CRM fonctionnel, de l&apos;automatisation basique et l&apos;essentiel pour demarrer. L&apos;economie realisee peut etre investie dans l&apos;acquisition client.</p>
                    <p><strong className="text-[#111]">Si votre budget CRM depasse 500 EUR/mois</strong> et que le marketing automation est central, HubSpot devient le meilleur choix. Le programme HubSpot for Startups offre 30 a 90% de reduction sur les hubs pendant la premiere annee (selon le stade de la startup). Un HubSpot CRM Suite Starter a 50 EUR/mois apres reduction est competitif avec Zoho et offre une meilleure UX et un meilleur ecosysteme.</p>
                    <p><strong className="text-[#111]">Notre recommandation :</strong> demarrez sur Zoho si vous etes en pre-seed/seed avec un budget serre. Migrez vers HubSpot quand vous levez votre Serie A et que vous avez les moyens d&apos;investir dans le marketing automation et la scalabilite. La migration Zoho vers HubSpot est relativement simple.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border-2 border-[#DC4A2A]/20 bg-[#DC4A2A]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#DC4A2A] mb-2">Zoho pour startups early-stage</p>
                      <ul className="space-y-1.5">
                        {["Pre-seed / Seed (budget serre)", "Equipe de 2-10 personnes", "Besoins CRM basiques + email", "Budget CRM : 0-300 EUR/mois", "Priorite : economiser le cash"].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DC4A2A] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border-2 border-[#FF7A59]/20 bg-[#FF7A59]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#FF7A59] mb-2">HubSpot pour startups en croissance</p>
                      <ul className="space-y-1.5">
                        {["Serie A+ (budget marketing dispo)", "Equipe de 10-50 personnes", "Marketing automation central", "Budget CRM : 500+ EUR/mois", "Priorite : scaler l'acquisition"].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 11 - PME */}
              <section id="pour-pme" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pour les PME</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les PME (20-200 personnes) ont des besoins plus matures : marketing automation, reporting avance, integrations multiples, accompagnement par un partenaire.</p>
                    <p><strong className="text-[#111]">Zoho convient aux PME qui :</strong> ont un budget IT serre, n&apos;ont pas de strategie marketing automation avancee, ont des developpeurs capables d&apos;utiliser Deluge, veulent un ecosysteme unifie (CRM + comptabilite + projets + support) a moindre cout, et ne dependent pas d&apos;un ecosysteme de partenaires pour l&apos;accompagnement.</p>
                    <p><strong className="text-[#111]">HubSpot convient aux PME qui :</strong> investissent dans le marketing automation et l&apos;inbound, ont besoin d&apos;un CRM que les commerciaux vont reellement utiliser, veulent un ecosysteme de partenaires dense en France, privilegient l&apos;UX et l&apos;adoption rapide, et ont un budget CRM de 1 000+ EUR/mois.</p>
                    <p><strong className="text-[#111]">Le critere decisif pour les PME :</strong> est-ce que le marketing automation est un besoin central ? Si oui, HubSpot. Si non, evaluez serieusement Zoho. L&apos;ecart de prix (2 a 5x) n&apos;est pas negligeable sur un budget PME, et Zoho CRM est un outil solide pour la gestion commerciale pure.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 12 - Verdict */}
              <section id="verdict" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Notre verdict</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ce comparatif n&apos;a pas de gagnant absolu. Le bon choix depend de votre contexte, pas d&apos;un classement generique.</p>
                    <p><strong className="text-[#111]">Choisissez Zoho si :</strong> votre priorite est le rapport qualite-prix. Si vous cherchez un CRM fonctionnel, un ecosysteme d&apos;applications complet et que vous etes pret a investir du temps dans la configuration plutot que de l&apos;argent dans les licences. Zoho est particulierement pertinent pour les startups early-stage, les PME avec un budget IT serre, et les organisations qui veulent un ecosysteme unifie a moindre cout.</p>
                    <p><strong className="text-[#111]">Choisissez HubSpot si :</strong> l&apos;experience utilisateur, le marketing automation et l&apos;adoption rapide sont vos priorites. Si vous voulez que vos commerciaux utilisent reellement le CRM sans formation longue, que votre equipe marketing dispose d&apos;outils best-in-class, et que vous avez acces a un ecosysteme de partenaires dense en France. HubSpot est le meilleur choix pour les PME et ETI B2B qui investissent serieusement dans le marketing et la vente.</p>
                    <p><strong className="text-[#111]">Le facteur souvent oublie :</strong> le cout reel d&apos;un CRM n&apos;est pas la licence. C&apos;est la licence + l&apos;implementation + la formation + le temps d&apos;administration + le cout de non-adoption. Un Zoho a 300 EUR/mois que personne n&apos;utilise coute plus cher qu&apos;un HubSpot a 1 000 EUR/mois que tout le monde utilise. Evaluez le TCO complet, pas seulement le prix affiche.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border-2 border-[#DC4A2A]/20 bg-[#DC4A2A]/5 p-4 text-center">
                      <img src="https://www.google.com/s2/favicons?domain=zoho.com&sz=32" alt="Zoho" className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-[12px] font-semibold text-[#111] mb-1">Zoho CRM</p>
                      <p className="text-[10px] text-[#DC4A2A] font-medium">Meilleur rapport qualite-prix</p>
                    </div>
                    <div className="rounded-xl border-2 border-[#FF7A59]/20 bg-[#FF7A59]/5 p-4 text-center">
                      <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-[12px] font-semibold text-[#111] mb-1">HubSpot</p>
                      <p className="text-[10px] text-[#FF7A59] font-medium">Meilleure UX et marketing</p>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* Related articles */}
            <section className="mt-12 mb-8">
              <p className="text-[13px] font-semibold text-[#111] mb-4">Articles similaires</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedArticles.map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors group">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white mb-3" style={{ background: a.color }}>
                      {a.category[0]}
                    </div>
                    <p className="text-[12px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#4B5EFC] transition-colors">{a.title}</p>
                    <p className="text-[10px] text-[#999] mt-2">{a.category}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;aide pour choisir votre CRM ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On vous aide a evaluer vos besoins, a comparer les options et a deployer le CRM qui correspond a votre contexte. Pas de parti pris.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/blog/crm-pme-2026" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Guide CRM pour PME
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
