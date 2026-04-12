"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HubSpot vs Notion comme CRM : le comparatif",
  description: "Peut-on utiliser Notion comme CRM ? Comparatif avec HubSpot : limites, cas ou Notion suffit, quand migrer vers un vrai CRM.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/hubspot-vs-notion-crm" },
  articleSection: "Comparatif CRM",
  wordCount: 3100,
  inLanguage: "fr",
};

const sections = [
  { id: "introduction", title: "Le choix" },
  { id: "comparatif-rapide", title: "Comparatif rapide" },
  { id: "pour-qui-hubspot", title: "Pour qui HubSpot" },
  { id: "pour-qui-notion", title: "Pour qui Notion" },
  { id: "limites-notion", title: "Limites de Notion" },
  { id: "quand-migrer", title: "Quand migrer" },
  { id: "verdict", title: "Notre verdict" },
  { id: "ia-dans-tout-ca", title: "Et l'IA ?" },
];

const relatedArticles = [
  { title: "HubSpot vs Folk CRM : quel CRM choisir ?", slug: "/hubspot-vs-folk", category: "Comparatif CRM", color: "#FF7A59" },
  { title: "HubSpot vs Axonaut : comparatif pour PME", slug: "/hubspot-vs-axonaut", category: "Comparatif CRM", color: "#6D00CC" },
  { title: "Agence HubSpot : notre approche", slug: "/agence-hubspot", category: "HubSpot", color: "#D4A27F" },
];

const comparisonTable = [
  { critere: "Prix", hubspot: "Gratuit (CRM complet), 15 EUR/mois (Starter)", notion: "Gratuit (usage personnel), 10 USD/user/mois (Plus)" },
  { critere: "Concu comme CRM", hubspot: "Oui, ADN CRM depuis 2014", notion: "Non, outil de documentation adapte en CRM" },
  { critere: "Automatisation", hubspot: "Workflows avances, sequences, scoring, branching", notion: "Automations basiques (boutons, templates), Zapier/Make requis" },
  { critere: "Reporting", hubspot: "Custom reports multi-objets, dashboards, attribution, forecasting", notion: "Formules dans les bases de donnees, pas de reporting CRM natif" },
  { critere: "Scalabilite", hubspot: "1 a 500+ users, pipelines multiples, permissions granulaires", notion: "Fonctionne a petite echelle, ralentit avec les gros volumes" },
  { critere: "IA integree", hubspot: "Breeze : agents, copilot, scoring, generation (inclus Pro+)", notion: "Notion AI : generation texte, resume, traduction (8 USD/user/mois)" },
  { critere: "Email integre", hubspot: "Email tracking, sequences, templates, log auto dans le CRM", notion: "Aucune integration email native, tout est manuel" },
  { critere: "Pipeline visuel", hubspot: "Kanban natif, pipeline multi-deals, vues personnalisables", notion: "Vue board Kanban, personnalisable mais sans logique CRM" },
];

export default function HubSpotVsNotionCRMPage() {
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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "18%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "32%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "48%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "64%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "80%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-[#F2F2F2]">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Partager</p>
                <div className="flex gap-2">
                  <a href="https://twitter.com/intent/tweet?text=HubSpot%20vs%20Notion%20comme%20CRM&url=https://ceres.agency/hubspot-vs-notion-crm" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/hubspot-vs-notion-crm" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <span className="text-[#666]">HubSpot vs Notion CRM</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Comparatif CRM</Badge>
                <span className="text-[11px] text-[#CCC]">11 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                HubSpot vs Notion comme CRM : peut-on vraiment utiliser Notion ?
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                &laquo; On utilise Notion comme CRM &raquo;. On entend ca de plus en plus chez les startups. C&apos;est gratuit, flexible, et toute l&apos;equipe est deja dessus. Mais est-ce vraiment un CRM ? Comparatif honnete avec HubSpot, avec les cas ou Notion suffit et ceux ou il faut migrer.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>2 avril 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 -- Introduction */}
              <section id="introduction" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Introduction : le faux debat</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Soyons directs : Notion n&apos;est pas un CRM. C&apos;est un outil de documentation et de gestion de connaissances exceptionnellement flexible, que certaines equipes detournent pour gerer leurs contacts et leurs deals. La distinction est importante, parce qu&apos;elle explique a la fois pourquoi ca marche (au debut) et pourquoi ca casse (tres vite).</p>
                    <p>Le charme de Notion-comme-CRM est comprehensible. L&apos;equipe utilise deja Notion pour tout : wiki interne, specs produit, meeting notes, roadmap. Ajouter une base de donnees &laquo; Prospects &raquo; avec une vue Kanban semble naturel. Pas de nouvel outil a adopter, pas de nouveau login, pas de nouveau cout. C&apos;est seduisant.</p>
                    <p>Le probleme arrive quand les besoins evoluent. Et en commercial, ils evoluent vite. Vous voulez envoyer des emails directement depuis votre CRM. Suivre qui a ouvert quoi. Automatiser les relances. Scorer les leads. Generer un rapport sur le pipeline. Notion ne fait rien de tout ca. Pas parce qu&apos;il est mauvais. Parce que ce n&apos;est tout simplement pas ce pour quoi il a ete concu.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 -- Comparatif rapide */}
              <section id="comparatif-rapide" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#222]">
                  <h2 className="text-[17px] font-semibold text-white mb-2">Comparatif rapide : 8 criteres essentiels</h2>
                  <p className="text-[11px] text-white/40 mb-6">Un CRM vs un outil de documentation detourne en CRM.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-[11px] font-semibold text-white/60 pb-3 pr-4 w-[22%]">Critere</th>
                          <th className="text-[11px] font-semibold text-[#FF7A59] pb-3 pr-4 w-[39%]">HubSpot</th>
                          <th className="text-[11px] font-semibold text-[#999] pb-3 w-[39%]">Notion (comme CRM)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonTable.map((row, i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="text-[11px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                            <td className="text-[10px] text-white/50 py-3 pr-4">{row.hubspot}</td>
                            <td className="text-[10px] text-white/50 py-3">{row.notion}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 -- Pour qui HubSpot */}
              <section id="pour-qui-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[12px] font-bold">H</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Pour qui HubSpot est le meilleur choix</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Des que vous avez un process commercial, meme simple, HubSpot est le bon outil. Un process commercial, c&apos;est : des leads entrants a qualifier, des deals a suivre dans un pipeline, des emails a envoyer et tracker, des relances a ne pas oublier, et des resultats a mesurer. Notion ne peut faire aucune de ces choses nativement.</p>
                    <p>Si l&apos;email est votre canal principal de communication avec les prospects (et en B2B, c&apos;est presque toujours le cas), HubSpot est indispensable. L&apos;email tracking natif vous dit qui ouvre vos emails et quand. Les sequences automatisent les relances. Les templates accelerent la redaction. Tout est logge dans le CRM automatiquement. Avec Notion, chaque email est un copier-coller manuel, sans tracking, sans historique centralise.</p>
                    <p>Pour toute equipe au-dela d&apos;une personne, la question ne se pose plus. HubSpot gere les permissions, les assignations, les pipelines par equipe, le reporting par commercial. Notion est un espace collaboratif ou tout le monde voit tout. Pas de notion de propriete de deal, pas de visibilite sur qui fait quoi, pas de metriques individuelles.</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "Vous avez un process commercial, meme basique (leads, pipeline, closing)",
                      "L'email est votre canal principal (tracking, sequences, templates)",
                      "Equipe de 2+ personnes avec besoin de visibilite et coordination",
                      "Besoin de mesurer : conversion, velocity, forecast, performance",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#FFF7ED] border border-[#FED7AA]">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#FF7A59]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="text-[11px] text-[#555]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- Pour qui Notion */}
              <section id="pour-qui-notion" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center text-white text-[12px] font-bold">N</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Pour qui Notion (comme CRM) peut suffire</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Reconnaissons-le : Notion comme CRM peut fonctionner dans des cas tres precis. Un freelance qui gere 10-15 clients actifs et qui veut simplement une vue d&apos;ensemble de ses projets en cours. Pas besoin de pipeline commercial, pas d&apos;emails automatises, pas de scoring. Juste une base de donnees propre avec le nom du client, le statut du projet, et le montant. Notion fait ca tres bien.</p>
                    <p>Pour un fondateur en pre-seed qui fait du networking et veut suivre ses 30-50 contacts investisseurs ou partenaires, Notion est parfait. C&apos;est un rolodex digital. Pas un CRM. Mais a ce stade, un rolodex suffit. La flexibilite de Notion (champs personnalises, vues multiples, liens entre bases) permet de construire exactement le systeme dont vous avez besoin, sans contrainte.</p>
                    <p>Le point commun de ces cas : pas de vente au sens propre. Pas de cycle de vente, pas de qualification, pas de closing, pas de forecast. Si votre &laquo; CRM &raquo; est en realite un carnet d&apos;adresses ameliore, Notion convient. Si c&apos;est un outil pour vendre, non.</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "Freelance avec 10-15 clients actifs, pas de vente active",
                      "Fondateur en networking (investisseurs, partenaires) : carnet d'adresses avance",
                      "Suivi de projets clients (pas de pipeline commercial)",
                      "Equipe de 1 personne sans process de vente structure",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F5F5F5] border border-[#E8E8E8]">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#999]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="text-[11px] text-[#555]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Limites de Notion comme CRM */}
              <section id="limites-notion" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#EF4444] flex items-center justify-center text-white text-[12px] font-bold">01</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Les limites de Notion comme CRM : la liste complete</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ce n&apos;est pas une question de &laquo; Notion pourrait mieux faire &raquo;. C&apos;est une liste de fonctionnalites fondamentales pour un CRM que Notion ne propose tout simplement pas, et ne proposera probablement jamais, parce que ce n&apos;est pas son metier.</p>
                    <p>L&apos;email est le trou beant. Pas de tracking (qui ouvre, qui clique), pas de sequences automatisees, pas de templates avec personnalisation, pas de log automatique des conversations. Chaque interaction email est invisible dans votre &laquo; CRM &raquo; Notion. Vous perdez la moitie de l&apos;historique client.</p>
                    <p>L&apos;automatisation est quasi inexistante. Notion permet de creer des boutons et des templates, mais pas de workflows conditionnels. Quand un deal passe en &laquo; qualifie &raquo;, vous ne pouvez pas declencher automatiquement un email, une tache, ou un changement de propriete. Tout est manuel. A 10 deals, c&apos;est geerable. A 50, c&apos;est un cauchemar operationnel.</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      { limite: "Zero email tracking", impact: "Impossible de savoir qui ouvre vos emails, quand, combien de fois", severity: "Critique" },
                      { limite: "Pas de sequences email", impact: "Chaque relance est manuelle, chaque follow-up oubliable", severity: "Critique" },
                      { limite: "Pas de scoring", impact: "Aucune priorisation automatique des leads", severity: "Critique" },
                      { limite: "Pas de reporting CRM", impact: "Pas de conversion rate, pas de forecast, pas de velocity", severity: "Eleve" },
                      { limite: "Pas de log d'activite", impact: "Pas d'historique des appels, meetings, emails par contact", severity: "Eleve" },
                      { limite: "Pas d'integration telephonie", impact: "Impossible de logger un appel ou d'enregistrer un meeting", severity: "Moyen" },
                      { limite: "Performance a l'echelle", impact: "Les bases Notion ralentissent au-dela de 500-1000 entrees", severity: "Moyen" },
                      { limite: "Pas de permissions granulaires", impact: "Impossible de restreindre les deals par equipe ou par role", severity: "Moyen" },
                    ].map((item) => (
                      <div key={item.limite} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[12px] font-semibold text-[#111]">{item.limite}</span>
                          <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${item.severity === "Critique" ? "bg-[#FEE2E2] text-[#EF4444]" : item.severity === "Eleve" ? "bg-[#FFF7ED] text-[#F59E0B]" : "bg-[#F5F5F5] text-[#999]"}`}>{item.severity}</span>
                        </div>
                        <p className="text-[10px] text-[#777] leading-[1.6]">{item.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Quand migrer */}
              <section id="quand-migrer" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[12px] font-bold">02</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Quand migrer de Notion vers un vrai CRM</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Voici les signaux d&apos;alerte. Si vous cochez 2+ de ces cases, il est temps de migrer. Plus vous attendez, plus la migration sera douloureuse parce que les donnees seront plus dispersees et les habitudes plus ancrees.</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      "Vous oubliez regulierement de relancer des prospects",
                      "Vous ne savez pas combien de deals sont en cours et a quel stade",
                      "Vous n'avez aucune visibilite sur le taux de conversion de votre pipeline",
                      "Votre equipe a grossi et personne ne sait qui gere quel deal",
                      "Vous passez plus de 30 min/jour a mettre a jour votre base Notion",
                      "Un prospect vous a demande 'ou en est notre dossier ?' et vous ne saviez pas",
                      "Vous ne pouvez pas repondre a la question 'quel est votre forecast ce trimestre ?'",
                    ].map((signal, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="w-5 h-5 rounded border border-[#DDD] flex items-center justify-center shrink-0">
                          <span className="text-[9px] text-[#BBB]">{i + 1}</span>
                        </div>
                        <span className="text-[11px] text-[#555]">{signal}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 p-4 rounded-xl bg-[#FFF7ED] border border-[#FED7AA]">
                    <p className="text-[11px] text-[#555] leading-[1.7]"><strong className="text-[#111]">La bonne nouvelle :</strong> la migration de Notion vers HubSpot est simple. Exportez votre base en CSV, importez dans HubSpot avec le mapping de champs, et vous etes operationnel en une journee. Le CRM gratuit HubSpot couvre deja plus de fonctionnalites CRM que Notion. C&apos;est un upgrade sans douleur.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- Verdict */}
              <section id="verdict" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#222]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre verdict</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Ce n&apos;est pas un vrai match. Notion est un outil de documentation extraordinaire. HubSpot est un CRM. Les comparer, c&apos;est comme comparer Excel et Salesforce : oui, on peut faire un &laquo; CRM &raquo; sur Excel, mais ca ne veut pas dire qu&apos;on devrait.</p>
                    <p>Si vous utilisez actuellement Notion comme CRM et que ca fonctionne, posez-vous deux questions. Premiere : est-ce que je fais vraiment de la vente, ou est-ce que je gere un carnet d&apos;adresses ? Si c&apos;est un carnet d&apos;adresses, gardez Notion. Deuxieme : est-ce que je prevois de structurer mes ventes dans les 6 prochains mois ? Si oui, passez a HubSpot maintenant, avant que la migration devienne complexe.</p>
                    <p>Notre recommandation : gardez Notion pour ce qu&apos;il fait le mieux (documentation, wiki, specs, notes de reunions). Utilisez HubSpot CRM gratuit pour ce qu&apos;il fait le mieux (gerer vos prospects, suivre votre pipeline, automatiser vos relances). Les deux se complementent parfaitement. Pas besoin de choisir l&apos;un ou l&apos;autre.</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF7A59]" />
                        <span className="text-[12px] font-semibold text-white">HubSpot pour</span>
                      </div>
                      <p className="text-[10px] text-white/40 leading-[1.5]">Tout ce qui est vente : pipeline, email tracking, sequences, scoring, reporting, automatisation.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-white/40" />
                        <span className="text-[12px] font-semibold text-white">Notion pour</span>
                      </div>
                      <p className="text-[10px] text-white/40 leading-[1.5]">Documentation, wiki, specs, meeting notes, roadmap. Et carnet d&apos;adresses si vous ne vendez pas activement.</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- Et l'IA dans tout ca ? */}
              <section id="ia-dans-tout-ca" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Et l&apos;IA dans tout ca ?</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Notion AI est excellent pour ce que fait Notion : generer du texte, resumer des documents, traduire, remplir des champs automatiquement. A 8 USD/user/mois, c&apos;est un complement utile. Mais Notion AI ne fait pas de scoring predictif, ne genere pas de sequences email, et ne peut pas analyser votre pipeline. Ce n&apos;est pas de l&apos;IA CRM. C&apos;est de l&apos;IA documentaire.</p>
                    <p>HubSpot Breeze est de l&apos;IA construite pour le CRM. Scoring predictif base sur les signaux comportementaux et firmographiques. Agents IA qui traitent les leads entrants en autonomie. Copilot qui redige vos emails de prospection en connaissant l&apos;historique du contact. Conversation intelligence qui analyse vos appels. C&apos;est une autre dimension.</p>
                    <p>La vraie question en 2026 : un CRM sans IA integree peut-il rester competitif ? La reponse est non. L&apos;IA dans le CRM, c&apos;est ce qui permet a vos commerciaux de se concentrer sur la relation humaine en automatisant tout le reste. Notion ne vous offre pas cette possibilite. HubSpot si.</p>
                  </div>
                  <div className="mt-5 p-4 rounded-xl bg-[#F5F0FF] border border-[#E8DEFF]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[12px] font-semibold text-[#111] mb-1">Migrer de Notion vers un vrai CRM ?</p>
                        <p className="text-[10px] text-[#666]">On vous accompagne dans la migration Notion vers HubSpot. Import, configuration, formation. Operationnel en une semaine.</p>
                      </div>
                      <Link href="/agents-ia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#6D00CC] text-white text-[11px] font-medium hover:bg-[#5A00AA] transition-colors shrink-0">
                        Agents IA
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related articles */}
              <section className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[14px] font-semibold text-[#111] mb-4">Articles lies</h2>
                  <div className="space-y-2">
                    {relatedArticles.map((a) => (
                      <Link key={a.slug} href={a.slug} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAFA] transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: a.color }} />
                          <span className="text-[13px] font-medium text-[#111] group-hover:text-[#444] transition-colors">{a.title}</span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-[#DDD] group-hover:text-[#999] group-hover:translate-x-0.5 transition-all"><path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section>
                <div className="rounded-2xl p-6 md:p-10 text-center" style={{ background: "linear-gradient(135deg, #FF7A59 0%, #FF9A7A 100%)" }}>
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-3">Besoin d&apos;aide pour choisir ?</h2>
                  <p className="text-[13px] text-white/80 mb-6 max-w-[420px] mx-auto">Vous utilisez Notion comme CRM et vous sentez les limites ? On vous aide a evaluer si c&apos;est le moment de migrer. 30 minutes, gratuit.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />Prendre rendez-vous
                  </a>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
