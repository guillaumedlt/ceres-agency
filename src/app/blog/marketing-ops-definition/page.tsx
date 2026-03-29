"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marketing Ops : definition, missions et mise en place",
  description: "Guide complet du Marketing Ops : definition, difference avec marketing manager et RevOps, les 6 missions cles, competences requises, stack marketing ops (HubSpot, GA4, Looker Studio, Make, UTM) et quand recruter.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/marketing-ops-definition" },
  articleSection: "RevOps",
  wordCount: 3400,
  inLanguage: "fr",
};

const sections = [
  { id: "definition", title: "Qu&apos;est-ce que le Marketing Ops" },
  { id: "difference", title: "Marketing Ops vs Marketing Manager" },
  { id: "six-missions", title: "Les 6 missions cles" },
  { id: "mission-stack", title: "Mission 1 : Stack technologique" },
  { id: "mission-data", title: "Mission 2 : Data et qualite" },
  { id: "mission-automation", title: "Mission 3 : Automation" },
  { id: "mission-reporting", title: "Mission 4 : Reporting" },
  { id: "mission-leads", title: "Mission 5 : Lead management" },
  { id: "mission-attribution", title: "Mission 6 : Attribution" },
  { id: "competences", title: "Competences requises" },
  { id: "stack-outils", title: "La stack Marketing Ops" },
  { id: "quand-recruter", title: "Quand recruter" },
  { id: "revops-lien", title: "Marketing Ops dans le RevOps" },
];

const relatedArticles = [
  { title: "RevOps vs Sales Ops vs Marketing Ops", slug: "revops-vs-sales-ops-marketing-ops", category: "RevOps", color: "#6C5CE7" },
  { title: "Marketing automation : 7 workflows HubSpot", slug: "marketing-automation-7-workflows-hubspot", category: "Automatisation", color: "#FF7A59" },
  { title: "Stack technologique RevOps 2026", slug: "stack-technologique-revops-2026", category: "Process & Outils", color: "#4B5EFC" },
];

export default function MarketingOpsDefinitionPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("definition");

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
        <div className="h-full bg-[#6C5CE7] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

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
                        ? "border-[#6C5CE7] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Marketing Ops</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">17 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Marketing Ops : definition, missions et mise en place
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le Marketing Ops est la discipline qui structure et optimise l&apos;infrastructure marketing : stack technologique, data, automation, reporting, lead management et attribution. Ce guide couvre la definition, les 6 missions cles, les competences requises, la stack d&apos;outils et le lien avec le RevOps. Tout ce qu&apos;il faut savoir pour recruter ou structurer la fonction.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>29 mars 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 -- Definition */}
              <section id="definition" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">C&apos;est quoi le Marketing Ops</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Marketing Ops (Marketing Operations) est la fonction qui gere l&apos;infrastructure technique et operationnelle du marketing. Quand le marketing manager decide de lancer une campagne, c&apos;est le Marketing Ops qui s&apos;assure que les outils fonctionnent, que les donnees sont propres, que les workflows sont en place, que le tracking est configure et que les resultats sont mesurables.</p>
                    <p>L&apos;analogie la plus simple : si le marketing est le pilote de course, le Marketing Ops est l&apos;equipe de mecaniciens. Le pilote decide de la strategie de course. Les mecaniciens s&apos;assurent que la voiture est en parfait etat, que les pneus sont adaptes, que le moteur tourne a plein regime. Sans mecaniciens, meme le meilleur pilote ne peut pas gagner.</p>
                    <p>Le Marketing Ops est ne de la complexification de l&apos;ecosysteme marketing. Il y a 15 ans, un marketeur avait besoin d&apos;un site web et d&apos;un outil d&apos;emailing. Aujourd&apos;hui, la stack marketing moyenne d&apos;une entreprise B2B comprend 12 a 20 outils : CRM, automation, analytics, CMS, social media, ads, enrichissement, ABM, intent data, chatbot, attribution, reporting. Gerer cette complexite est devenu un metier a part entiere.</p>
                    <p>En France, la fonction Marketing Ops est encore jeune. Beaucoup d&apos;entreprises n&apos;ont pas de Marketing Ops dedie. La charge est repartie entre le marketing manager (qui fait un peu de tout), un stagiaire (qui configure les workflows) et le CTO (qui intervient quand quelque chose casse). Le resultat : une stack sous-utilisee, des donnees en mauvais etat, et un marketing qui ne peut pas mesurer son impact reel.</p>
                    <p>Le Marketing Ops n&apos;est pas un role technique pur. C&apos;est un role hybride qui combine competences techniques (configuration d&apos;outils, APIs, data) et comprehension business (strategie marketing, funnel de conversion, metriques de performance). Les meilleurs Marketing Ops sont ceux qui comprennent pourquoi une campagne est lancee, pas juste comment la configurer.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 -- Difference */}
              <section id="difference" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Marketing Ops vs Marketing Manager vs RevOps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La confusion entre ces trois roles est frequente. Clarifions. Le marketing manager definit la strategie marketing : quel message, a quel audience, sur quel canal, avec quel budget. Il decide du quoi et du pourquoi. Le Marketing Ops met en oeuvre l&apos;infrastructure qui permet d&apos;executer cette strategie efficacement. Il gere le comment.</p>
                    <p>Le RevOps (Revenue Operations) est un cran au-dessus. Il aligne les operations de toute la chaine de revenu : marketing, ventes et customer success. Le Marketing Ops est la composante marketing du RevOps. Dans les grandes entreprises, le Marketing Ops reporte au VP RevOps. Dans les plus petites, le Marketing Ops est souvent la premiere brique du RevOps avant que le role ne s&apos;elargisse.</p>
                    <p>Un exemple concret. Le marketing manager decide de lancer une campagne de nurturing pour les leads qui ont telecharge un ebook. Le Marketing Ops configure le workflow d&apos;automation dans HubSpot, s&apos;assure que les UTM de tracking sont en place, verifie que le scoring est correctement parametrer, et met en place le dashboard de suivi. Le RevOps s&apos;assure que les leads nurtures qui deviennent SQL sont bien transmis aux ventes avec le bon contexte.</p>
                  </div>

                  {/* Comparison visual */}
                  <div className="mt-6 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4">Les 3 roles compares</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { title: "Marketing Manager", focus: "Strategie et execution", scope: "Campagnes, contenu, acquisition, branding", kpi: "MQL, CPL, trafic, engagement", color: "#FF7A59" },
                        { title: "Marketing Ops", focus: "Infrastructure et data", scope: "Stack, automation, reporting, data quality, attribution", kpi: "Deliverabilite, data quality score, adoption outils", color: "#6C5CE7" },
                        { title: "RevOps", focus: "Alignement revenus", scope: "Marketing + Sales + CS Ops, stack globale, data unifiee", kpi: "CAC, LTV, NRR, pipeline velocity, funnel complet", color: "#4B5EFC" },
                      ].map((item) => (
                        <div key={item.title} className="p-4 rounded-lg bg-white border border-[#E8E8E8]">
                          <div className="text-[13px] font-semibold mb-2" style={{ color: item.color }}>{item.title}</div>
                          <div className="space-y-2 text-[11px] text-[#777]">
                            <div><span className="text-[#999] font-medium">Focus :</span> {item.focus}</div>
                            <div><span className="text-[#999] font-medium">Perimetre :</span> {item.scope}</div>
                            <div><span className="text-[#999] font-medium">KPI cles :</span> {item.kpi}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 -- 6 missions */}
              <section id="six-missions" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 6 missions cles du Marketing Ops</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le perimetre du Marketing Ops est vaste. Pour y voir clair, nous le decoupons en 6 missions fondamentales. Chaque mission est un domaine d&apos;expertise a part entiere. Un Marketing Ops senior maitrise les 6. Un Marketing Ops junior se specialise d&apos;abord sur 2 ou 3 avant d&apos;elargir.</p>
                  </div>

                  {/* 6 missions grid */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { num: "01", title: "Stack technologique", desc: "Selection, configuration et maintenance des outils", color: "#6C5CE7" },
                      { num: "02", title: "Data et qualite", desc: "Nettoyage, enrichissement, gouvernance des donnees", color: "#FF7A59" },
                      { num: "03", title: "Automation", desc: "Workflows, sequences, emails, nurturing", color: "#4B5EFC" },
                      { num: "04", title: "Reporting", desc: "Dashboards, metriques, analyses de performance", color: "#22C55E" },
                      { num: "05", title: "Lead management", desc: "Scoring, routing, lifecycle stages, SLA", color: "#FF7A59" },
                      { num: "06", title: "Attribution", desc: "Modeles d\u2019attribution, tracking, UTM, ROI par canal", color: "#6C5CE7" },
                    ].map((m) => (
                      <div key={m.num} className="text-center p-4 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[20px] font-bold" style={{ color: m.color }}>{m.num}</div>
                        <div className="text-[12px] font-semibold text-[#111] mt-1">{m.title}</div>
                        <div className="text-[10px] text-[#999] mt-1">{m.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- Mission 1 Stack */}
              <section id="mission-stack" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mission 1 : gerer la stack technologique</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La stack marketing est l&apos;ensemble des outils utilises par l&apos;equipe marketing. Le Marketing Ops en est le gardien. Il selectionne les outils, les configure, les integre entre eux, forme les utilisateurs, et s&apos;assure qu&apos;ils sont utilises et qu&apos;ils generent de la valeur.</p>
                    <p>La premiere responsabilite est la selection. Chaque nouvel outil doit repondre a un besoin clairement identifie, s&apos;integrer avec l&apos;existant (notamment le CRM), et avoir un cout justifiable. Le Marketing Ops evalue les options, conduit les POC (proof of concept), negocie les contrats et gere le deploiement. Sans ce filtre, les equipes marketing accumulent des outils redondants et sous-utilises.</p>
                    <p>La deuxieme responsabilite est l&apos;integration. Les outils doivent communiquer entre eux. Les leads generes par les ads doivent arriver dans le CRM. Les donnees d&apos;engagement email doivent alimenter le scoring. Les conversions doivent remonter vers les plateformes ads pour optimiser les campagnes. Le Marketing Ops construit ces ponts, via des integrations natives, des APIs, ou des outils d&apos;iPaaS comme Make ou Zapier.</p>
                    <p>La troisieme responsabilite est l&apos;adoption. Un outil achete mais non utilise est un gaspillage pur. Le Marketing Ops suit les metriques d&apos;adoption (qui utilise quoi, a quelle frequence), identifie les blocages (l&apos;outil est-il trop complexe ? pas assez forme ? pas adapte au besoin ?) et prend les mesures correctives (formation supplementaire, simplification des workflows, remplacement de l&apos;outil si necessaire).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Mission 2 Data */}
              <section id="mission-data" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mission 2 : garantir la qualite des donnees</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les donnees sont le carburant du marketing moderne. Des donnees propres permettent un ciblage precis, une personnalisation efficace et un reporting fiable. Des donnees sales produisent l&apos;inverse : des emails qui partent aux mauvaises personnes, des leads mal qualifies, et des dashboards qui racontent n&apos;importe quoi.</p>
                    <p>Le Marketing Ops est responsable de la qualite des donnees marketing. Cela inclut le nettoyage regulier de la base (suppression des doublons, correction des donnees erronees, archivage des contacts inactifs), l&apos;enrichissement des donnees manquantes (via des outils comme Dropcontact ou Breeze Intelligence), et la gouvernance (regles de saisie, proprietes obligatoires, conventions de nommage).</p>
                    <p>La gouvernance des donnees est souvent le point le plus neglige. Sans regles claires, chaque utilisateur du CRM saisit les donnees a sa maniere. L&apos;un ecrit &ldquo;SaaS&rdquo;, l&apos;autre &ldquo;saas&rdquo;, le troisieme &ldquo;Software as a Service&rdquo;. Le resultat est un CRM impossible a segmenter et a analyser. Le Marketing Ops definit les regles, les fait appliquer (via des validations dans le CRM) et controle regulierement la conformite.</p>
                    <p>En 2026, l&apos;IA facilite considerablement le nettoyage de donnees. HubSpot Breeze detecte automatiquement les doublons, corrige les erreurs de format, et enrichit les fiches. Mais l&apos;IA ne remplace pas la gouvernance. Elle l&apos;accelere. Les regles doivent etre definies par l&apos;humain. L&apos;IA les execute a echelle.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Mission 3 Automation */}
              <section id="mission-automation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mission 3 : construire l&apos;automation marketing</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;automation marketing est le coeur du metier du Marketing Ops. C&apos;est la capacite a automatiser les actions marketing repetitives : envoyer le bon email a la bonne personne au bon moment, scorer un lead en temps reel, router un MQL vers le bon commercial, declencher un workflow de nurturing apres un telechargement.</p>
                    <p>Le Marketing Ops conçoit les workflows d&apos;automation dans l&apos;outil de marketing automation (HubSpot, Marketo, Pardot, ActiveCampaign). Il definit les triggers (quel evenement declenche le workflow), les conditions (quels criteres le contact doit remplir), les actions (quel email envoyer, quelle propriete mettre a jour, quelle tache creer), et les delais (combien de temps attendre entre chaque etape).</p>
                    <p>Les workflows les plus courants en B2B sont : le nurturing post-telechargement (une serie de 4 a 6 emails envoyes sur 2 a 4 semaines apres un telechargement de contenu), le scoring automatique (mise a jour du score a chaque action), le lifecycle stage update (passage automatique de Subscriber a Lead a MQL en fonction du score), le routing MQL (attribution du MQL au bon commercial en fonction du territoire, du secteur ou de la taille de l&apos;entreprise), et le re-engagement (reactivation des contacts inactifs depuis X jours).</p>
                    <p>La regle d&apos;or de l&apos;automation : chaque workflow doit avoir un objectif mesurable et une condition de sortie. Un workflow sans objectif est une usine a gaz. Un workflow sans condition de sortie est un piege a spam. Le Marketing Ops documente chaque workflow, le teste avant deploiement, et le revoit trimestriellement pour verifier sa pertinence et son efficacite.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- Mission 4 Reporting */}
              <section id="mission-reporting" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mission 4 : construire le reporting marketing</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le reporting est la mission qui rend le marketing accountable. Sans reporting fiable, le marketing est un centre de couts. Avec un reporting precis, le marketing est un levier de croissance mesurable. Le Marketing Ops construit les dashboards qui permettent de suivre la performance, identifier les leviers et prendre des decisions basees sur les donnees.</p>
                    <p>Un bon reporting marketing couvre trois niveaux. Le niveau operationnel : metriques d&apos;execution au quotidien (emails envoyes, taux d&apos;ouverture, taux de clic, landing page conversions, formulaires remplis). Le niveau tactique : metriques de performance par campagne et par canal (MQL generes, cout par lead, taux de conversion par etape du funnel). Le niveau strategique : metriques business (pipeline marketing genere, contribution au revenu, CAC, LTV, ROI marketing global).</p>
                    <p>Les outils de reporting du Marketing Ops varient selon la complexite. HubSpot Analytics pour le reporting natif CRM et marketing. Google Analytics 4 pour le tracking web et le comportement utilisateur. Looker Studio (ex Google Data Studio) pour les dashboards personnalises qui combinent plusieurs sources de donnees. Et dans les organisations plus avancees, un data warehouse (BigQuery, Snowflake) pour centraliser toutes les donnees et un outil de BI (Metabase, Tableau) pour les analyses complexes.</p>
                    <p>L&apos;erreur la plus courante en reporting marketing est de mesurer l&apos;activite plutot que l&apos;impact. Le nombre d&apos;emails envoyes n&apos;a pas de valeur en soi. Ce qui compte, c&apos;est le nombre d&apos;emails qui ont genere un MQL, puis un SQL, puis un deal, puis du revenu. Le Marketing Ops doit construire des dashboards qui racontent cette histoire complete, pas des tableaux de metriques de vanite.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- Mission 5 Lead management */}
              <section id="mission-leads" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mission 5 : gerer le cycle de vie des leads</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le lead management est le processus qui gere un lead de son entree dans le CRM jusqu&apos;a sa conversion en client (ou son archivage). Le Marketing Ops definit les etapes du cycle de vie (Subscriber, Lead, MQL, SQL, Opportunity, Customer), les criteres de passage d&apos;une etape a l&apos;autre, et les actions declenchees a chaque transition.</p>
                    <p>Le lead scoring est la pierre angulaire du lead management. Le Marketing Ops configure le scoring (criteres demographiques et comportementaux), definit les seuils (a quel score un Lead devient MQL, a quel score un MQL devient SQL), et calibre regulierement le modele en analysant les taux de conversion par tranche de score.</p>
                    <p>Le lead routing est tout aussi critique. Quand un lead atteint le seuil MQL, il doit etre attribue au bon commercial en quelques minutes, pas en quelques jours. Le Marketing Ops configure les regles de routing : par territoire geographique, par secteur d&apos;activite, par taille d&apos;entreprise, ou par round-robin equitable. Le routing doit etre automatique, instantane et traçable.</p>
                    <p>Le SLA (Service Level Agreement) marketing-ventes est le contrat qui formalise les engagements reciproques. Le marketing s&apos;engage a livrer X MQL par mois repondant a des criteres definis. Les ventes s&apos;engagent a contacter chaque MQL dans les 4 heures et a fournir un feedback (accepte ou rejete avec raison). Le Marketing Ops monitore le respect du SLA et alerte quand il est viole.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 -- Mission 6 Attribution */}
              <section id="mission-attribution" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mission 6 : maitriser l&apos;attribution marketing</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;attribution marketing est la discipline qui repond a la question : quel canal ou quelle campagne a contribue a la conversion d&apos;un client ? C&apos;est la mission la plus complexe du Marketing Ops et celle qui a le plus d&apos;impact strategique. Sans attribution fiable, les budgets marketing sont alloues au feeling, pas aux resultats.</p>
                    <p>Il existe plusieurs modeles d&apos;attribution. Le first-touch attribue 100% du credit au premier point de contact (utile pour comprendre ce qui genere de la notoriete). Le last-touch attribue 100% au dernier point de contact avant la conversion (utile pour comprendre ce qui declenche l&apos;action). Le multi-touch repartit le credit entre tous les points de contact du parcours (plus realiste mais plus complexe a implementer).</p>
                    <p>La mise en place technique repose sur un systeme de tracking robuste. Les UTM (Urchin Tracking Module) sont la base : chaque lien marketing doit etre tagger avec les parametres source, medium et campaign. Le Marketing Ops definit la convention de nommage des UTM, fournit un outil de generation aux equipes, et controle la coherence. Sans conventions, les UTM sont inutilisables (utm_source=google vs utm_source=Google vs utm_source=google-ads).</p>
                    <p>En 2026, l&apos;attribution est compliquee par la disparition progressive des cookies tiers, les regulations RGPD et le dark funnel (les interactions non tracables comme les conversations LinkedIn, les recommandations verbales, les podcasts). Le Marketing Ops doit combiner l&apos;attribution technique (basee sur les donnees) et l&apos;attribution declarative (demander au lead &ldquo;comment avez-vous entendu parler de nous ?&rdquo;) pour avoir une vision realiste.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 -- Competences */}
              <section id="competences" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Profil</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Competences requises pour un Marketing Ops</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le profil ideal d&apos;un Marketing Ops combine des competences techniques et business. Cote technique : maitrise d&apos;au moins un outil de marketing automation (HubSpot est le plus demande en France), comprehension des APIs et des integrations, capacite a manipuler des donnees (CSV, formules, logique conditionnelle), notions de HTML/CSS pour les emails et landing pages, et idealement des bases en SQL pour le reporting avance.</p>
                    <p>Cote business : comprehension du funnel B2B (de la generation de leads a la conversion), connaissance des metriques marketing et de leur signification, capacite a dialoguer avec les equipes marketing, ventes et direction, et un sens de la rigueur operationnelle. Un Marketing Ops qui configure des workflows sans comprendre le funnel est un technicien. Un Marketing Ops qui comprend le business est un partenaire strategique.</p>
                    <p>Les soft skills sont souvent decisives. Le Marketing Ops est un role transversal qui interagit avec le marketing (pour les campagnes), les ventes (pour le lead management), la direction (pour le reporting), et parfois l&apos;IT (pour les integrations complexes). La capacite a communiquer clairement, a prioriser les demandes, et a dire non aux projets sans valeur ajoutee est essentielle.</p>
                    <p>En termes de salaire en France en 2026, un Marketing Ops junior (0-2 ans) se situe entre 35K et 45K EUR brut annuel. Un Marketing Ops confirme (3-5 ans) entre 45K et 60K EUR. Un Marketing Ops senior ou Lead (5+ ans) entre 60K et 80K EUR. A Paris, ajoutez 10 a 15% a ces fourchettes. La demande depasse largement l&apos;offre, ce qui tire les salaires vers le haut.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 11 -- Stack outils */}
              <section id="stack-outils" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La stack Marketing Ops en 2026</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Voici la stack que nous recommandons chez Ceres pour un Marketing Ops en contexte B2B. Chaque outil a un role precis et s&apos;integre avec les autres.</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      { name: "HubSpot Marketing Hub", domain: "hubspot.com", desc: "Le coeur de la stack : CRM, marketing automation, email, landing pages, formulaires, workflows, lead scoring, reporting. Tout-en-un et parfaitement integre. Notre recommendation numero un pour les PME et scale-ups B2B.", color: "#FF7A59", tag: "Coeur de stack" },
                      { name: "Google Analytics 4", domain: "analytics.google.com", desc: "Tracking web et comportement utilisateur. Indispensable pour comprendre le trafic, les sources, les conversions et le parcours utilisateur sur le site. Integration native avec HubSpot et Google Ads.", color: "#22C55E", tag: "Analytics web" },
                      { name: "Looker Studio", domain: "lookerstudio.google.com", desc: "Dashboards personnalises qui combinent les donnees de HubSpot, GA4, Google Ads, LinkedIn Ads et d\u2019autres sources. Gratuit et flexible. Ideal pour le reporting tactique et strategique.", color: "#4B5EFC", tag: "Reporting" },
                      { name: "Make", domain: "make.com", desc: "Outil d\u2019automatisation inter-applications. Connecte HubSpot a GA4, Slack, Google Sheets, et des dizaines d\u2019autres outils. Remplace les integrations manuelles et les CSV. Plus puissant et moins cher que Zapier pour les scenarios complexes.", color: "#6C5CE7", tag: "Integration" },
                      { name: "UTM.io", domain: "utm.io", desc: "Outil de gestion des UTM. Genere des liens trackes avec une convention de nommage coherente. Evite le chaos des UTM manuels. Essentiel pour une attribution fiable.", color: "#FF7A59", tag: "Tracking" },
                    ].map((tool) => (
                      <div key={tool.name} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <img src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=32`} alt={tool.name} className="w-6 h-6 shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[13px] font-semibold text-[#111]">{tool.name}</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: `${tool.color}15`, color: tool.color }}>{tool.tag}</span>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 12 -- Quand recruter */}
              <section id="quand-recruter" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Quand recruter un Marketing Ops</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La question revient systematiquement : a partir de quand faut-il un Marketing Ops dedie ? La reponse depend de la complexite de votre stack et de votre volume d&apos;activite. Voici les signaux qui indiquent que le moment est venu.</p>
                    <p>Signal 1 : votre equipe marketing passe plus de temps a configurer des outils qu&apos;a creer des campagnes. Si votre marketing manager passe 50% de son temps sur HubSpot au lieu de penser strategie, vous avez besoin d&apos;un Marketing Ops. Le marketing manager doit se concentrer sur le quoi, pas sur le comment.</p>
                    <p>Signal 2 : vos donnees sont en mauvais etat et personne ne s&apos;en occupe. Des doublons partout, des proprietes mal remplies, des workflows qui tournent dans le vide, des dashboards qui affichent des chiffres incoherents. La dette technique s&apos;accumule et aucun membre de l&apos;equipe actuelle n&apos;a le temps ni les competences pour la traiter.</p>
                    <p>Signal 3 : vous generez plus de 200 leads par mois et le traitement est manuel. Le scoring est fait a la main, le routing depend d&apos;un tableur Excel, les leads restent des jours avant d&apos;etre contactes. A ce volume, l&apos;automatisation n&apos;est plus un luxe, c&apos;est une necessite operationnelle.</p>
                    <p>Signal 4 : vous ne pouvez pas repondre a la question &ldquo;quel est le ROI de notre marketing ?&rdquo;. Si votre CEO vous demande combien le marketing a contribue au pipeline et que vous ne pouvez pas repondre avec des chiffres fiables, le reporting est defaillant. Un Marketing Ops construit les dashboards qui rendent le marketing accountable.</p>
                    <p>Alternative au recrutement : externaliser la fonction a une agence RevOps comme Ceres. C&apos;est souvent la meilleure option pour les entreprises de 20 a 100 personnes qui n&apos;ont pas encore le volume pour justifier un temps plein mais qui ont besoin de structurer leur ops marketing.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 13 -- RevOps lien */}
              <section id="revops-lien" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Ceres</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Marketing Ops dans le RevOps : la vision Ceres</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, nous ne separons jamais le Marketing Ops du reste de la chaine RevOps. Un Marketing Ops qui travaille en silo optimise les metriques marketing sans se soucier de l&apos;impact sur les ventes et la retention. C&apos;est contre-productif. Le Marketing Ops doit etre integre dans un systeme RevOps ou les donnees, les processus et les objectifs sont alignes de bout en bout.</p>
                    <p>Concretement, cela signifie que le scoring defini par le Marketing Ops est valide par les ventes. Que le reporting marketing inclut la contribution au pipeline et au revenu, pas seulement les MQL. Que l&apos;automation marketing s&apos;integre aux processus de vente (le nurturing ne s&apos;arrete pas quand le lead devient SQL). Et que la stack marketing est une composante de la stack RevOps globale, pas un silo technologique.</p>
                    <p>Notre accompagnement couvre l&apos;ensemble du spectre : audit de la maturite marketing ops, structuration de la stack, configuration de l&apos;automation et du scoring, mise en place du reporting et de l&apos;attribution, formation des equipes, et integration dans le modele RevOps global. Que vous recrutiez un Marketing Ops ou que vous externalisiez la fonction, nous vous accompagnons.</p>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {[
                      "Audit de votre maturite Marketing Ops et identification des lacunes",
                      "Selection et configuration de la stack marketing (HubSpot, GA4, Make)",
                      "Mise en place de l\u2019automation (workflows, scoring, routing, nurturing)",
                      "Construction des dashboards de reporting marketing et RevOps",
                      "Configuration de l\u2019attribution (UTM, multi-touch, declaratif)",
                      "Formation de l\u2019equipe et documentation des processus",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[12px] text-white/50">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Related articles */}
              <section className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[14px] font-semibold text-[#111] mb-4">Articles lies</h2>
                  <div className="space-y-2">
                    {relatedArticles.map((a) => (
                      <Link key={a.slug} href={`/blog/${a.slug}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAFA] transition-colors group">
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
                <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin de structurer votre Marketing Ops ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On audite votre stack, on configure l&apos;automation et on met en place le reporting. Premiers resultats en 4 semaines.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel decouverte
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
