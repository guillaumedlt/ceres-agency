"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HubSpot vs Axonaut : comparatif pour PME",
  description: "Comparatif HubSpot vs Axonaut. CRM, facturation, devis, automatisation. Le guide pour choisir entre les deux pour votre PME.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/hubspot-vs-axonaut" },
  articleSection: "Comparatif CRM",
  wordCount: 3100,
  inLanguage: "fr",
};

const sections = [
  { id: "introduction", title: "Le choix" },
  { id: "comparatif-rapide", title: "Comparatif rapide" },
  { id: "pour-qui-hubspot", title: "Pour qui HubSpot" },
  { id: "pour-qui-axonaut", title: "Pour qui Axonaut" },
  { id: "prix-facturation", title: "Prix & facturation" },
  { id: "automatisation-crm", title: "Automatisation CRM" },
  { id: "verdict", title: "Notre verdict" },
  { id: "ia-dans-tout-ca", title: "Et l'IA ?" },
];

const relatedArticles = [
  { title: "HubSpot vs Salesforce : comparatif complet 2026", slug: "/hubspot-vs-salesforce", category: "Comparatif CRM", color: "#FF7A59" },
  { title: "HubSpot vs Notion comme CRM : le comparatif", slug: "/hubspot-vs-notion-crm", category: "Comparatif CRM", color: "#6D00CC" },
  { title: "Agence HubSpot : notre approche", slug: "/agence-hubspot", category: "HubSpot", color: "#D4A27F" },
];

const comparisonTable = [
  { critere: "Prix", hubspot: "Gratuit (CRM), 15 EUR/mois (Starter), 90 EUR/mois (Pro)", axonaut: "A partir de 34,99 EUR/mois (tout inclus), degressif sur engagement" },
  { critere: "UX / Interface", hubspot: "Interface CRM moderne, riche en fonctionnalites", axonaut: "Interface simple, pensee PME francaise, moins sophistiquee" },
  { critere: "Automatisation", hubspot: "Workflows avances, sequences, scoring, branching logique", axonaut: "Automatisations limitees, rappels, relances simples" },
  { critere: "Reporting", hubspot: "Custom report builder, dashboards multi-objets, attribution", axonaut: "Rapports de base, CA previsionnel, tableau de bord simple" },
  { critere: "Scalabilite", hubspot: "1 a 500+ users, plateforme qui evolue avec l'entreprise", axonaut: "1 a 20 users, optimise pour les TPE/PME" },
  { critere: "IA integree", hubspot: "Breeze : agents, copilot, scoring, generation (inclus Pro+)", axonaut: "Pas d'IA native significative" },
  { critere: "Integrations", hubspot: "1 500+ integrations, API complete, Operations Hub", axonaut: "50+ integrations, API basique, connecteurs comptables" },
  { critere: "Facturation / Devis", hubspot: "Devis natifs (Pro+), pas de facturation complete sans tiers", axonaut: "Devis, factures, bons de commande, avoirs, relances -- tout integre" },
];

export default function HubSpotVsAxonautPage() {
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
                  <a href="https://twitter.com/intent/tweet?text=HubSpot%20vs%20Axonaut%20%3A%20comparatif%20pour%20PME&url=https://ceres.agency/hubspot-vs-axonaut" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/hubspot-vs-axonaut" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <span className="text-[#666]">HubSpot vs Axonaut</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Comparatif CRM</Badge>
                <span className="text-[11px] text-[#CCC]">12 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                HubSpot vs Axonaut : quel outil pour votre PME ?
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Axonaut est le champion francais du tout-en-un pour TPE/PME. CRM, devis, factures, comptabilite, RH : tout dans un seul outil a prix fixe. Mais face a HubSpot, ou se situe la frontiere ? On compare sans langue de bois.
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
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Introduction : deux philosophies radicalement differentes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Axonaut et HubSpot ne jouent pas le meme match. Axonaut est un ERP leger pensé pour les TPE et petites PME francaises. Son argument massue : tout est integre. CRM, devis, factures, bons de commande, relances, comptabilite export, et meme une brique RH. Le tout a un prix fixe, sans mauvaise surprise. Pour un artisan, un cabinet de conseil de 5 personnes ou une agence qui veut un seul outil, c&apos;est seduisant.</p>
                    <p>HubSpot est un CRM pur, concu pour les equipes commerciales et marketing qui veulent structurer et scaler leurs operations. Pas de facturation native, pas de comptabilite. Mais une profondeur fonctionnelle sur le CRM, l&apos;automatisation, le reporting et le marketing qui est dans une autre galaxie. Ce sont deux visions du monde.</p>
                    <p>La question qui revient : &laquo; Pourquoi payer HubSpot alors qu&apos;Axonaut fait tout pour 35 euros/mois ? &raquo; La reponse est dans le detail. Axonaut fait beaucoup de choses, mais aucune en profondeur. HubSpot fait moins de choses, mais chacune est un produit complet. Le bon choix depend de ce dont vous avez vraiment besoin.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 -- Comparatif rapide */}
              <section id="comparatif-rapide" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#222]">
                  <h2 className="text-[17px] font-semibold text-white mb-2">Comparatif rapide : 8 criteres essentiels</h2>
                  <p className="text-[11px] text-white/40 mb-6">Prix et fonctionnalites en vigueur en avril 2026.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-[11px] font-semibold text-white/60 pb-3 pr-4 w-[22%]">Critere</th>
                          <th className="text-[11px] font-semibold text-[#FF7A59] pb-3 pr-4 w-[39%]">HubSpot</th>
                          <th className="text-[11px] font-semibold text-[#2D7FF9] pb-3 w-[39%]">Axonaut</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonTable.map((row, i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="text-[11px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                            <td className="text-[10px] text-white/50 py-3 pr-4">{row.hubspot}</td>
                            <td className="text-[10px] text-white/50 py-3">{row.axonaut}</td>
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
                    <p>Si votre priorite est le developpement commercial, pas la gestion administrative, HubSpot est fait pour vous. Les sequences email, le scoring, les workflows d&apos;automatisation, le pipeline management avance : ce sont des outils qui generent du chiffre d&apos;affaires. Axonaut ne peut pas rivaliser sur ce terrain.</p>
                    <p>Si vous faites du marketing digital (content, SEO, email, paid), HubSpot est le seul des deux a offrir une plateforme marketing integree au CRM. Landing pages, formulaires, email nurturing, attribution : tout dans le meme outil. Avec Axonaut, vous aurez besoin de Mailchimp, Brevo ou un equivalent a cote.</p>
                    <p>Pour les equipes de 5+ commerciaux, le reporting HubSpot est un game-changer. Pipeline par commercial, forecast, velocity par etape, taux de conversion par source. C&apos;est ce qui permet a un directeur commercial de piloter. Axonaut offre un tableau de bord basique qui ne repond pas aux questions d&apos;une equipe structuree.</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "Priorite au developpement commercial et au growth",
                      "Equipe commerciale de 5+ personnes a piloter",
                      "Strategie marketing digital (inbound, content, SEO)",
                      "Besoin de reporting avance pour le management",
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

              {/* Section 4 -- Pour qui Axonaut */}
              <section id="pour-qui-axonaut" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#2D7FF9] flex items-center justify-center text-white text-[12px] font-bold">A</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Pour qui Axonaut est le meilleur choix</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La force d&apos;Axonaut, c&apos;est la facturation integree. Si vous passez vos journees a faire des devis sur Word, des factures sur Excel et du suivi sur un tableur, Axonaut va vous changer la vie. Devis en 2 clics, transformation en facture automatique, relances impayees, export comptable. Pour une PME francaise qui facture 50 a 200 clients, c&apos;est un gain de temps enorme.</p>
                    <p>Le prix est un argument reel. A 35 euros/mois tout compris (CRM + devis + factures + comptabilite), Axonaut est imbattable. HubSpot est gratuit pour le CRM de base, mais des que vous ajoutez la facturation (via un outil tiers) et les fonctionnalites avancees, vous etes rapidement a 100+ euros/mois. Si le budget est votre premiere contrainte, Axonaut est le choix rationnel.</p>
                    <p>Pour les TPE qui cherchent un outil de gestion globale (et pas juste un CRM), Axonaut couvre un perimetre qu&apos;aucun CRM pur ne couvre. Suivi des depenses, tresorerie previsionnelle, gestion des tickets SAV, et meme une brique RH basique. C&apos;est un couteau suisse, pas un scalpel. Mais pour beaucoup de petites structures, le couteau suisse est exactement ce qu&apos;il faut.</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "TPE/PME avec un fort besoin de facturation (devis, factures, relances)",
                      "Budget serre : tout-en-un a 35 EUR/mois vs stack multi-outils",
                      "Besoin de gestion globale : CRM + facturation + comptabilite",
                      "Equipe de 1-10 personnes sans besoin d'automatisation complexe",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE]">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#2D7FF9]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="text-[11px] text-[#555]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Prix & facturation */}
              <section id="prix-facturation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#4B5EFC] flex items-center justify-center text-white text-[12px] font-bold">01</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Prix et facturation : le vrai comparatif</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Axonaut affiche un prix simple : a partir de 34,99 EUR/mois pour un utilisateur, tout inclus. Pas de surprises, pas d&apos;add-ons. Le prix baisse avec l&apos;engagement (mensuel, annuel, bisannuel). Pour 10 utilisateurs, comptez environ 150-200 EUR/mois selon l&apos;offre.</p>
                    <p>HubSpot est plus complexe a chiffrer. Le CRM est gratuit. Starter a 15 EUR/mois. Pro a 90 EUR/utilisateur/mois. Mais : la facturation n&apos;est pas native. Pour avoir devis + factures + relances, il faut connecter un outil tiers (Pennylane, QuickBooks, Sellsy). Le cout reel de la stack HubSpot + facturation est souvent 2 a 3x le prix d&apos;Axonaut pour une petite equipe.</p>
                    <p>Mais ce raisonnement par le prix seul est trompeur. Ce qui compte, c&apos;est le retour sur investissement. Un workflow HubSpot qui qualifie automatiquement vos leads et les assigne au bon commercial genere du chiffre d&apos;affaires. Axonaut ne peut pas faire ca. Si votre enjeu est de vendre plus (et pas juste de facturer mieux), l&apos;investissement HubSpot se rentabilise en 2-3 mois chez nos clients.</p>
                  </div>
                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#111] px-5 py-3">
                      <span className="text-[12px] font-semibold text-white">Comparaison de prix pour 5 utilisateurs</span>
                    </div>
                    <div className="bg-white p-5">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-[12px] font-semibold text-[#FF7A59] mb-3">HubSpot + facturation tiers</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-[11px]"><span className="text-[#777]">CRM HubSpot Starter</span><span className="text-[#111] font-medium">75 EUR/mois</span></div>
                            <div className="flex justify-between text-[11px]"><span className="text-[#777]">Outil facturation (Pennylane)</span><span className="text-[#111] font-medium">49 EUR/mois</span></div>
                            <div className="flex justify-between text-[11px]"><span className="text-[#777]">Total</span><span className="text-[#FF7A59] font-bold">124 EUR/mois</span></div>
                          </div>
                        </div>
                        <div>
                          <p className="text-[12px] font-semibold text-[#2D7FF9] mb-3">Axonaut tout-en-un</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-[11px]"><span className="text-[#777]">Axonaut (engagement annuel)</span><span className="text-[#111] font-medium">~100 EUR/mois</span></div>
                            <div className="flex justify-between text-[11px]"><span className="text-[#777]">Outils supplementaires</span><span className="text-[#111] font-medium">0 EUR</span></div>
                            <div className="flex justify-between text-[11px]"><span className="text-[#777]">Total</span><span className="text-[#2D7FF9] font-bold">~100 EUR/mois</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 rounded-lg bg-[#FAFAFA] border border-[#F0F0F0]">
                        <p className="text-[10px] text-[#999] leading-[1.6]">Note : avec HubSpot Pro (90 EUR/user/mois), l&apos;ecart se creuse nettement. Mais les fonctionnalites Pro (workflows, sequences, reporting avance) n&apos;ont aucun equivalent chez Axonaut. Comparer uniquement le prix sans comparer le ROI est une erreur.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Automatisation CRM */}
              <section id="automatisation-crm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[12px] font-bold">02</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Automatisation CRM : deux mondes differents</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Axonaut automatise la gestion : rappels de relance, passage automatique de devis en facture, alertes sur les impayes. C&apos;est de l&apos;automatisation administrative, et elle est bien faite pour son perimetre. Mais elle s&apos;arrete la. Pas de workflows commerciaux, pas de scoring, pas de sequences email multi-etapes, pas de logique conditionnelle.</p>
                    <p>HubSpot automatise la vente. Quand un prospect visite votre page pricing 3 fois, un workflow peut automatiquement le scorer comme &laquo; chaud &raquo;, l&apos;assigner au bon commercial, declencher une sequence email personnalisee et creer une tache de call. Tout ca sans intervention humaine. Pour un prospect parmi 500, c&apos;est la difference entre perdre un deal et le gagner.</p>
                    <p>L&apos;automatisation du marketing est absente chez Axonaut. Pas de lead nurturing, pas de segmentation dynamique, pas d&apos;email personnalise base sur le comportement. Si votre acquisition passe par le digital (et en 2026, c&apos;est le cas de la majorite des PME B2B), c&apos;est un handicap majeur. HubSpot Marketing Hub comble ce vide nativement.</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                      <p className="text-[11px] font-semibold text-[#FF7A59] mb-2">Automatisation HubSpot</p>
                      <ul className="space-y-1.5 text-[10px] text-[#666]">
                        <li>Workflows visuels multi-etapes</li>
                        <li>Sequences email personnalisees</li>
                        <li>Lead scoring predictif (IA)</li>
                        <li>Rotation et assignation automatique</li>
                        <li>Nurturing marketing integre</li>
                        <li>Custom coded actions</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                      <p className="text-[11px] font-semibold text-[#2D7FF9] mb-2">Automatisation Axonaut</p>
                      <ul className="space-y-1.5 text-[10px] text-[#666]">
                        <li>Rappels de relance automatiques</li>
                        <li>Devis vers facture en un clic</li>
                        <li>Alertes impayes</li>
                        <li>Emails de suivi basiques</li>
                        <li>Templates de documents</li>
                        <li>Export comptable automatise</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- Verdict */}
              <section id="verdict" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#222]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre verdict</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Axonaut et HubSpot ne repondent pas au meme besoin. Si votre priorite est de structurer la gestion de votre TPE/PME (devis, factures, relances, comptabilite) et que le commercial est secondaire, Axonaut est excellent. A 35 euros/mois, c&apos;est un des meilleurs rapports qualite-prix du marche francais pour la gestion d&apos;entreprise.</p>
                    <p>Si votre priorite est de developper votre chiffre d&apos;affaires, de structurer vos operations commerciales et de scaler votre equipe, HubSpot est le bon choix. C&apos;est un CRM, pas un outil de gestion. Il fait ce travail incomparablement mieux qu&apos;Axonaut. Et le CRM gratuit est plus complet que beaucoup d&apos;offres payantes du marche.</p>
                    <p>Le scenario ideal pour certaines PME : utiliser les deux. HubSpot pour le CRM et le marketing, Axonaut (ou Pennylane) pour la facturation. Les deux se connectent via des integrations ou Zapier/Make. Vous avez le meilleur des deux mondes sans compromis. C&apos;est ce qu&apos;on deploie chez plusieurs de nos clients PME.</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF7A59]" />
                        <span className="text-[12px] font-semibold text-white">HubSpot gagne pour</span>
                      </div>
                      <p className="text-[10px] text-white/40 leading-[1.5]">Developpement commercial, marketing digital, automatisation, reporting, equipes 5+, scalabilite.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#2D7FF9]" />
                        <span className="text-[12px] font-semibold text-white">Axonaut gagne pour</span>
                      </div>
                      <p className="text-[10px] text-white/40 leading-[1.5]">Facturation, gestion administrative, tout-en-un a prix fixe, TPE, simplicite, conformite francaise.</p>
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
                    <p>C&apos;est sur l&apos;IA que l&apos;ecart est le plus spectaculaire. Axonaut n&apos;a pas d&apos;IA native significative. Pas de scoring predictif, pas de generation de contenu, pas d&apos;agents autonomes. L&apos;outil reste dans une logique classique de gestion.</p>
                    <p>HubSpot Breeze transforme le CRM en plateforme intelligente. Le scoring IA analyse des centaines de signaux pour prioriser vos leads. Le copilot redige vos emails, resume vos appels, et suggere les prochaines actions. Les agents IA traitent les demandes entrantes en autonomie. Et tout est inclus dans les licences Pro/Enterprise, sans surcout.</p>
                    <p>Pour une PME B2B en 2026, l&apos;IA dans le CRM n&apos;est plus un luxe. C&apos;est ce qui permet a 3 commerciaux de produire l&apos;output de 8. C&apos;est ce qui detecte les prospects chauds avant qu&apos;ils ne refroidissent. C&apos;est ce qui personnalise chaque interaction a l&apos;echelle. Axonaut ne vous offre pas cet avantage competitif. HubSpot si.</p>
                  </div>
                  <div className="mt-5 p-4 rounded-xl bg-[#F5F0FF] border border-[#E8DEFF]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[12px] font-semibold text-[#111] mb-1">IA et CRM pour PME</p>
                        <p className="text-[10px] text-[#666]">On deploie des agents IA connectes a HubSpot pour automatiser la prospection et le scoring des PME B2B.</p>
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
                  <p className="text-[13px] text-white/80 mb-6 max-w-[420px] mx-auto">On vous aide a evaluer votre besoin CRM en 30 minutes. Gratuit, sans engagement. Si Axonaut est le bon choix pour vous, on vous le dira.</p>
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
