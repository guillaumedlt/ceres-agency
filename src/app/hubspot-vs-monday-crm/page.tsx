"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HubSpot vs Monday CRM : comparatif complet",
  description: "Comparatif HubSpot vs Monday CRM. Fonctionnalites, prix, automatisation, reporting, IA. Verdict pour PME et scale-ups B2B.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/hubspot-vs-monday-crm" },
  articleSection: "Comparatif CRM",
  wordCount: 3200,
  inLanguage: "fr",
};

const sections = [
  { id: "introduction", title: "Le choix" },
  { id: "comparatif-rapide", title: "Comparatif rapide" },
  { id: "pour-qui-hubspot", title: "Pour qui HubSpot" },
  { id: "pour-qui-monday", title: "Pour qui Monday" },
  { id: "automatisation", title: "Automatisation" },
  { id: "reporting", title: "Reporting" },
  { id: "verdict", title: "Notre verdict" },
  { id: "ia-dans-tout-ca", title: "Et l'IA ?" },
];

const relatedArticles = [
  { title: "HubSpot vs Salesforce : comparatif complet 2026", slug: "/hubspot-vs-salesforce", category: "Comparatif CRM", color: "#FF7A59" },
  { title: "HubSpot vs Folk CRM : quel CRM choisir ?", slug: "/hubspot-vs-folk", category: "Comparatif CRM", color: "#6D00CC" },
  { title: "Agence HubSpot : notre approche", slug: "/agence-hubspot", category: "HubSpot", color: "#D4A27F" },
];

const comparisonTable = [
  { critere: "Prix entree", hubspot: "Gratuit (CRM), 15 EUR/mois (Starter)", monday: "12 EUR/user/mois (Basic)" },
  { critere: "UX / Interface", hubspot: "Interface CRM structuree, courbe d'apprentissage moderee", monday: "Interface Kanban intuitive, prise en main tres rapide" },
  { critere: "Automatisation", hubspot: "Workflows avances, sequences, branching logique", monday: "Automatisations simples, basees sur des declencheurs lineaires" },
  { critere: "Reporting", hubspot: "Custom report builder multi-objets, attribution", monday: "Dashboards visuels, widgets drag-and-drop, limites en cross-data" },
  { critere: "Scalabilite", hubspot: "De 1 a 500+ users, Pro/Enterprise pour les equipes structurees", monday: "Adapte jusqu'a 50-80 users, limites au-dela" },
  { critere: "IA integree", hubspot: "Breeze : agents IA, copilot, scoring predictif (inclus)", monday: "Monday AI : generation de texte, formules, resume (recent)" },
  { critere: "Integrations", hubspot: "1 500+ integrations natives, API complete", monday: "200+ integrations, API disponible mais moins riche" },
  { critere: "Support", hubspot: "Chat, email, telephone (Pro+), HubSpot Academy", monday: "Chat, email, base de connaissances" },
];

export default function HubSpotVsMondayCRMPage() {
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
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "18%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "32%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "48%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "64%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "80%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          {/* Sticky sidebar */}
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
                  <a href="https://twitter.com/intent/tweet?text=HubSpot%20vs%20Monday%20CRM%20%3A%20comparatif%20complet&url=https://ceres.agency/hubspot-vs-monday-crm" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/hubspot-vs-monday-crm" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">HubSpot vs Monday CRM</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Comparatif CRM</Badge>
                <span className="text-[11px] text-[#CCC]">12 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                HubSpot vs Monday CRM : le comparatif complet pour choisir
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Monday CRM monte en puissance. HubSpot reste la reference. Si vous hesitez entre les deux, ce comparatif est fait pour vous. On compare tout : prix reels, automatisation, reporting, IA, scalabilite. Avec un verdict honnete.
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
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Introduction : le choix qui revient sans cesse</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Monday.com a fait un pari audacieux : prendre son outil de gestion de projets, deja adopte par des millions d&apos;equipes, et le transformer en CRM. Le resultat, Monday CRM, seduit par sa simplicite. L&apos;interface est belle, la prise en main est immediate, et pour une equipe qui utilise deja Monday pour ses projets, ajouter le CRM semble logique. Pourquoi payer pour un autre outil ?</p>
                    <p>De l&apos;autre cote, HubSpot est ne comme CRM. C&apos;est son ADN. Depuis 2014, chaque fonctionnalite a ete pensee pour les equipes commerciales, marketing et service client. La plateforme a grandi autour de cette colonne vertebrale. Ce n&apos;est pas un outil de gestion de projets qui fait aussi du CRM. C&apos;est un CRM qui fait tout le reste.</p>
                    <p>La question n&apos;est pas &laquo; lequel est meilleur &raquo; dans l&apos;absolu. C&apos;est &laquo; lequel est meilleur pour vous &raquo;. Et la reponse depend de votre stade de croissance, de la complexite de votre cycle de vente et de vos ambitions en matiere d&apos;automatisation. Monday CRM est un excellent outil pour certains profils. Mais il atteint ses limites la ou HubSpot commence a briller. On vous explique ou se situe exactement cette frontiere.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 -- Comparatif rapide */}
              <section id="comparatif-rapide" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#222]">
                  <h2 className="text-[17px] font-semibold text-white mb-2">Comparatif rapide : 8 criteres essentiels</h2>
                  <p className="text-[11px] text-white/40 mb-6">Base sur notre experience d&apos;integration des deux plateformes, pas sur les pages marketing.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-[11px] font-semibold text-white/60 pb-3 pr-4 w-[22%]">Critere</th>
                          <th className="text-[11px] font-semibold text-[#FF7A59] pb-3 pr-4 w-[39%]">HubSpot</th>
                          <th className="text-[11px] font-semibold text-[#6C3CE1] pb-3 w-[39%]">Monday CRM</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonTable.map((row, i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="text-[11px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                            <td className="text-[10px] text-white/50 py-3 pr-4">{row.hubspot}</td>
                            <td className="text-[10px] text-white/50 py-3">{row.monday}</td>
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
                    <p>HubSpot s&apos;impose quand le cycle de vente devient serieux. Si vos deals durent plus de 2 semaines, impliquent plusieurs interlocuteurs et necessitent un suivi structure, HubSpot est dans son element. Les sequences automatisees, le scoring predictif, les workflows multi-etapes : tout est concu pour des ventes complexes.</p>
                    <p>Si vous avez besoin d&apos;aligner marketing et vente sur la meme plateforme, HubSpot n&apos;a pas d&apos;equivalent dans cette gamme de prix. Le Marketing Hub partage la meme base de contacts que le Sales Hub. Un lead qui telecharge un livre blanc est automatiquement enrichi, score et assigne au bon commercial. Essayez de faire ca avec Monday : vous aurez besoin de 3 outils tiers et de duct tape.</p>
                    <p>Pour les equipes qui grandissent, HubSpot absorbe la croissance sans friction. Un pipeline simple a 5 etapes aujourd&apos;hui peut devenir un systeme multi-pipeline avec des workflows complexes demain. Vous n&apos;aurez pas besoin de changer d&apos;outil. C&apos;est la promesse de la plateforme unifiee, et elle est tenue.</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "Cycle de vente B2B complexe (2+ semaines, plusieurs interlocuteurs)",
                      "Besoin d'aligner marketing et ventes sur une seule plateforme",
                      "Equipe commerciale de 5+ personnes avec des process structures",
                      "Ambition de scaler sans changer d'outil tous les 18 mois",
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

              {/* Section 4 -- Pour qui Monday */}
              <section id="pour-qui-monday" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6C3CE1] flex items-center justify-center text-white text-[12px] font-bold">M</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Pour qui Monday CRM est le meilleur choix</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Soyons honnetes : Monday CRM fait tres bien certaines choses. L&apos;interface est l&apos;une des plus agreables du marche. La vue Kanban est native, fluide, et personnalisable sans aucune competence technique. Pour une petite equipe qui vient de Trello ou d&apos;un tableur, la transition est douce.</p>
                    <p>Si votre cycle de vente est court et transactionnel (devis en 48h, decision rapide), Monday suffit amplement. Vous n&apos;avez pas besoin de workflows a 15 etapes pour vendre un service a 2 000 euros. Un pipeline visuel propre et des rappels automatiques font le travail. C&apos;est simple, et parfois simple est exactement ce qu&apos;il faut.</p>
                    <p>L&apos;autre force de Monday, c&apos;est l&apos;unification projet + CRM. Si votre equipe gere a la fois la vente et le delivery (typique des agences et des cabinets de conseil), avoir le deal et le projet qui en decoule dans le meme outil est un vrai avantage. Pas de sync a maintenir, pas de double saisie.</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "Petite equipe (2-10 personnes) avec un cycle de vente court",
                      "Entreprise qui utilise deja Monday pour la gestion de projets",
                      "Besoin de combiner CRM et delivery dans un seul outil",
                      "Budget serre et besoin de demarrer vite sans configuration complexe",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F5F0FF] border border-[#E8DEFF]">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#6C3CE1]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="text-[11px] text-[#555]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Automatisation */}
              <section id="automatisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#4B5EFC] flex items-center justify-center text-white text-[12px] font-bold">01</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Automatisation : la ou tout se joue</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est le critere qui separe le plus les deux outils. L&apos;automatisation de Monday CRM fonctionne sur un modele &laquo; quand X arrive, fais Y &raquo;. C&apos;est intuitif, rapide a configurer, et ca couvre 80% des besoins simples. Quand un deal passe en &laquo; Gagne &raquo;, envoie un email. Quand un contact est cree, assigne-le a un commercial. Simple et efficace.</p>
                    <p>HubSpot joue dans une autre categorie. Les workflows HubSpot supportent le branching conditionnel (if/then/else), les delais calcules, les rotations d&apos;assignation, les actions custom codees, les integrations webhook, et les enchainements multi-etapes. Un workflow peut scorer un lead, l&apos;assigner au bon commercial, declencher une sequence email personnalisee, creer une tache de suivi et mettre a jour une propriete, le tout sans intervention humaine.</p>
                    <p>La difference se voit surtout a l&apos;echelle. Quand vous avez 50 leads par jour et 3 pipelines, les automatisations simples de Monday deviennent un goulot d&apos;etranglement. Vous avez besoin de logique conditionnelle, pas juste de declencheurs lineaires. C&apos;est la que HubSpot prend une longueur d&apos;avance considerable.</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                      <p className="text-[11px] font-semibold text-[#FF7A59] mb-2">HubSpot Workflows</p>
                      <ul className="space-y-1.5 text-[10px] text-[#666]">
                        <li>Branching conditionnel if/then/else</li>
                        <li>Delais dynamiques et fenetres horaires</li>
                        <li>Rotation round-robin avancee</li>
                        <li>Custom coded actions (JS/Python)</li>
                        <li>Webhooks et integrations API</li>
                        <li>Sequences email multi-etapes</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                      <p className="text-[11px] font-semibold text-[#6C3CE1] mb-2">Monday Automations</p>
                      <ul className="space-y-1.5 text-[10px] text-[#666]">
                        <li>Declencheurs &laquo; quand/alors &raquo;</li>
                        <li>Notifications automatiques</li>
                        <li>Changement de statut automatise</li>
                        <li>Creation d&apos;elements liee</li>
                        <li>Integrations Zapier/Make</li>
                        <li>Templates d&apos;automations preconfigures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Reporting */}
              <section id="reporting" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[12px] font-bold">02</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Reporting : donnees vs visuels</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Monday brille par ses dashboards visuels. Les widgets sont beaux, les graphiques sont lisibles, et la configuration est un jeu d&apos;enfant. Pour un CEO qui veut voir en un coup d&apos;oeil ou en est le pipeline, c&apos;est seduisant. Mais creusez un peu, et vous trouvez les limites. Impossible de croiser les donnees de deux boards differents sans passer par des formules complexes. Pas d&apos;attribution marketing. Pas de funnel analysis multi-etapes.</p>
                    <p>Le custom report builder de HubSpot est moins sexy au premier abord, mais incomparablement plus puissant. Vous pouvez croiser n&apos;importe quels objets (contacts, deals, entreprises, tickets, custom objects), creer des rapports d&apos;attribution multi-touch, analyser la velocity du pipeline par etape, et suivre les performances par commercial avec des dizaines de metriques. Le tout sans tableur, sans export CSV, sans manipulation manuelle.</p>
                    <p>Concretement : si votre directeur commercial vous demande &laquo; quel est notre taux de conversion par source de lead, segmente par taille d&apos;entreprise, sur les 6 derniers mois &raquo;, HubSpot repond en 2 minutes. Monday ne peut pas repondre a cette question sans une extraction manuelle et un tableur.</p>
                  </div>
                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#111] px-5 py-3">
                      <span className="text-[12px] font-semibold text-white">Capacites de reporting comparees</span>
                    </div>
                    <div className="bg-white p-5 space-y-3">
                      {[
                        { feature: "Dashboards visuels", hubspot: true, monday: true },
                        { feature: "Reports multi-objets", hubspot: true, monday: false },
                        { feature: "Attribution marketing", hubspot: true, monday: false },
                        { feature: "Funnel analysis", hubspot: true, monday: false },
                        { feature: "Pipeline velocity", hubspot: true, monday: false },
                        { feature: "Revenue forecasting", hubspot: true, monday: false },
                        { feature: "Reports partageables", hubspot: true, monday: true },
                        { feature: "Export API", hubspot: true, monday: true },
                      ].map((row) => (
                        <div key={row.feature} className="flex items-center justify-between py-2 border-b border-[#F5F5F5] last:border-0">
                          <span className="text-[11px] text-[#555]">{row.feature}</span>
                          <div className="flex items-center gap-6">
                            <span className="text-[11px] w-16 text-center">{row.hubspot ? <span className="text-[#22C55E] font-semibold">Oui</span> : <span className="text-[#DDD]">Non</span>}</span>
                            <span className="text-[11px] w-16 text-center">{row.monday ? <span className="text-[#22C55E] font-semibold">Oui</span> : <span className="text-[#DDD]">Non</span>}</span>
                          </div>
                        </div>
                      ))}
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
                    <p>Monday CRM est un bon outil pour les petites equipes avec des cycles de vente courts et un besoin de combiner gestion de projets et CRM. Si vous etes une agence de 5 personnes, que vos deals se closent en une semaine, et que vous gerez deja vos projets sur Monday, c&apos;est un choix sense. Vous resterez dans un seul ecosysteme et vos equipes seront operationnelles en 2 jours.</p>
                    <p>Mais des que vous depassez ce cadre, des que le cycle de vente s&apos;allonge, des que vous avez besoin de vraies automatisations, d&apos;attribution marketing, de reporting avance ou d&apos;IA integree, HubSpot n&apos;a pas d&apos;equivalent dans cette gamme de prix. La plateforme est pensee pour les equipes qui grandissent. Vous ne buterez pas contre un plafond a 20 utilisateurs.</p>
                    <p>Notre recommandation : si vous hesitez, commencez par le CRM gratuit de HubSpot. Il est plus complet que Monday Basic a 12 euros/user/mois. Vous verrez rapidement si la profondeur de l&apos;outil vous convient. Et quand votre equipe grandira, vous n&apos;aurez pas a tout recommencer.</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF7A59]" />
                        <span className="text-[12px] font-semibold text-white">HubSpot gagne pour</span>
                      </div>
                      <p className="text-[10px] text-white/40 leading-[1.5]">PME et scale-ups B2B, cycles de vente complexes, equipes 5+, alignement marketing-ventes, automatisation avancee, reporting.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#6C3CE1]" />
                        <span className="text-[12px] font-semibold text-white">Monday gagne pour</span>
                      </div>
                      <p className="text-[10px] text-white/40 leading-[1.5]">Petites equipes, ventes transactionnelles, besoin CRM + gestion de projets, budget serre, prise en main immediate.</p>
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
                    <p>L&apos;IA change la donne dans cette comparaison. HubSpot a lance Breeze, sa suite IA integree nativement : agents IA autonomes, copilot conversationnel, scoring predictif, generation de contenu, conversation intelligence. Tout est inclus dans les licences Pro et Enterprise, sans surcout. L&apos;IA n&apos;est pas un add-on chez HubSpot, c&apos;est une couche qui traverse toute la plateforme.</p>
                    <p>Monday a lance Monday AI, qui permet de generer du texte, des formules et des resumes. C&apos;est utile, mais c&apos;est de l&apos;IA generative de surface. Pas de scoring predictif, pas d&apos;agents autonomes, pas de conversation intelligence. L&apos;ecart se creuse rapidement, et il va continuer a se creuser dans les mois qui viennent.</p>
                    <p>Au-dela des outils natifs, la vraie question c&apos;est : quel CRM est le mieux positionne pour integrer des agents IA externes ? Un CRM avec une API riche, des webhooks, des custom coded actions et un ecosysteme d&apos;integrations mature sera toujours plus facile a connecter a des agents IA sur-mesure. Sur ce terrain, HubSpot a une avance nette.</p>
                  </div>
                  <div className="mt-5 p-4 rounded-xl bg-[#F5F0FF] border border-[#E8DEFF]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[12px] font-semibold text-[#111] mb-1">Decouvrir nos agents IA pour CRM</p>
                        <p className="text-[10px] text-[#666]">On deploie des agents IA qui se connectent nativement a HubSpot pour automatiser prospection, scoring et reporting.</p>
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
                  <p className="text-[13px] text-white/80 mb-6 max-w-[420px] mx-auto">On vous aide a evaluer votre besoin CRM en 30 minutes. Gratuit, sans engagement, avec un avis objectif sur le bon outil pour votre situation.</p>
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
