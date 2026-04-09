"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Claude et le reporting automatise : zero copier-coller, zero slide manuelle",
  description: "Comment automatiser votre reporting RevOps avec Claude et MCP. Connexion CRM, generation de rapports en langage naturel, analyse intelligente, recommandations automatiques. Guide complet avec exemples concrets pour les equipes B2B.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/claude-reporting-automatise-revops" },
  articleSection: "IA & Automatisation",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "pain-reporting", title: "3h de reporting chaque lundi" },
  { id: "ce-que-claude-fait", title: "Ce que Claude fait concretement" },
  { id: "rapport-qui-pense", title: "Un rapport qui pense" },
  { id: "cas-concret", title: "Cas concret SaaS B2B" },
  { id: "mise-en-place", title: "Comment le mettre en place" },
  { id: "kpis-par-silo", title: "KPIs par silo" },
  { id: "limites", title: "Les limites a connaitre" },
  { id: "approche-ceres", title: "Notre approche Ceres" },
];

const relatedArticles = [
  { title: "Process, data, IA : dans quel ordre structurer son RevOps", slug: "process-data-ia-ordre-revops", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Les agents IA deployes chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "MCP : connecter Claude a votre CRM et a vos outils", slug: "mcp-connecter-claude-crm-outils", category: "IA & Automatisation", color: "#6D00CC" },
];

export default function ClaudeReportingAutomatiseArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pain-reporting");

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
        <div className="h-full bg-[#6D00CC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "4%", width: 320, height: 320, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "12%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "24%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "36%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "50%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "64%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "78%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "90%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />

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
                        ? "border-[#6D00CC] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Claude%20et%20le%20reporting%20automatise%20%3A%20zero%20copier-coller&url=https://ceres.agency/blog/claude-reporting-automatise-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/claude-reporting-automatise-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Claude et le reporting automatise</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Claude et le reporting automatise : zero copier-coller, zero slide manuelle
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Chaque lundi, des managers passent 3 a 5 heures a copier-coller des chiffres depuis leur CRM dans des slides. C&apos;est du temps perdu, des erreurs garanties, et un rapport que personne ne lit vraiment. Avec Claude et le protocole MCP, on genere un rapport complet en 30 secondes, avec analyse, tendances et recommandations. Ce guide explique comment mettre ca en place concretement.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>9 avril 2026</span>
              </div>
            </header>

            <article>
              {/* ============================================ */}
              {/* Section 1 : 3h de reporting chaque lundi */}
              {/* ============================================ */}
              <section id="pain-reporting" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">3h de reporting chaque lundi. Et si c&apos;etait 0 ?</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scenario est le meme dans presque toutes les entreprises B2B. Le lundi matin, le Head of Sales ouvre HubSpot, exporte les chiffres de la semaine dans un CSV, les colle dans un Google Sheet, reformate les tableaux, copie les graphiques dans un deck Google Slides, ajoute du contexte a la main, et envoie le tout avant le comite de direction de 11h. Temps total : entre 3 et 5 heures.</p>
                    <p>Multipliez ca par le nombre de managers dans l&apos;entreprise. Le VP Marketing fait la meme chose pour ses KPIs. Le Customer Success Manager pour ses metriques de retention. Le CFO pour le forecast. On parle de 10 a 20 heures par semaine, a l&apos;echelle d&apos;une scale-up de 50 personnes, consacrees a de la compilation manuelle de donnees.</p>
                    <p>Le probleme n&apos;est pas seulement le temps perdu. C&apos;est aussi la qualite. Les chiffres copies a la main contiennent des erreurs. Les slides de la semaine derniere sont reutilisees avec des donnees partiellement mises a jour. Et surtout, personne n&apos;a le temps d&apos;analyser ce que les chiffres disent vraiment, parce que tout le temps est consomme par la mise en forme.</p>
                    <p>L&apos;IA generative, et plus precisement Claude connecte a votre CRM via le protocole MCP, change radicalement la donne. Le rapport complet, avec analyse et recommandations, est genere en 30 secondes. Sans copier-coller. Sans slide manuelle. Sans erreur de saisie.</p>
                  </div>

                  {/* Time comparison mockup */}
                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Temps consacre au reporting hebdomadaire</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-medium text-[#999]">Methode manuelle</span>
                          <span className="text-[10px] font-bold text-[#999]">3-5h</span>
                        </div>
                        <div className="h-3 rounded-full bg-[#E8E8E8] overflow-hidden">
                          <div className="h-full rounded-full bg-[#CCC]" style={{ width: "85%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-medium text-[#6D00CC]">Avec Claude + MCP</span>
                          <span className="text-[10px] font-bold text-[#6D00CC]">30 sec</span>
                        </div>
                        <div className="h-3 rounded-full bg-[#E8E8E8] overflow-hidden">
                          <div className="h-full rounded-full bg-[#6D00CC]" style={{ width: "2%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pain points */}
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { stat: "3-5h", label: "perdues chaque lundi par manager", color: "#999" },
                      { stat: "15-20h", label: "par semaine a l'echelle d'une scale-up", color: "#999" },
                      { stat: "30 sec", label: "avec un rapport IA automatise", color: "#6D00CC" },
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

              {/* ============================================ */}
              {/* Section 2 : Ce que Claude fait concretement */}
              {/* ============================================ */}
              <section id="ce-que-claude-fait" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">1</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Ce que Claude fait concretement</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Claude n&apos;est pas un outil de BI. Ce n&apos;est pas un dashboard. C&apos;est un modele de langage capable de se connecter directement a votre CRM via le protocole MCP (Model Context Protocol), de lire vos donnees en temps reel, et de generer un rapport en langage naturel.</p>
                    <p>Concretement, voici ce qui se passe quand vous demandez un rapport hebdomadaire a Claude. L&apos;IA se connecte a HubSpot (ou Salesforce, ou Attio) via un serveur MCP. Elle interroge les deals crees, les deals fermes, le pipeline, les activites commerciales, les contacts engages. Elle tire les metriques que vous avez definies en amont : MRR, win rate, cycle de vente moyen, deals a risque.</p>
                    <p>Puis elle ne se contente pas de lister des chiffres. Elle les analyse. Elle compare avec la semaine precedente. Elle identifie les tendances. Elle detecte les anomalies. Et elle redige un rapport structure, en francais, avec des recommandations actionnables. Le tout en moins d&apos;une minute.</p>
                    <p>La difference fondamentale avec un dashboard Looker ou un rapport HubSpot classique : Claude ne vous montre pas des graphiques que vous devez interpreter. Il vous dit ce que les donnees signifient, ce qui a change, et ce que vous devriez faire.</p>
                  </div>

                  {/* MCP workflow mockup */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Comment Claude se connecte a votre CRM</p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#FF7A59] mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-[9px] font-bold">CRM</span>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">HubSpot / Salesforce</p>
                        <p className="text-[9px] text-[#999]">Donnees en temps reel</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#6D00CC] bg-[#FAFBFF] p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#6D00CC] mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-[9px] font-bold">MCP</span>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Serveur MCP</p>
                        <p className="text-[9px] text-[#999]">Protocole de connexion</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#D4A27F] mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-[9px] font-bold">Cl</span>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Claude</p>
                        <p className="text-[9px] text-[#999]">Analyse et rapport</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 3 : Un rapport qui pense */}
              {/* ============================================ */}
              <section id="rapport-qui-pense" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">2</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Un rapport qui pense, pas qui compile</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La difference entre un dashboard et un rapport IA est fondamentale. Un dashboard vous montre des chiffres. Un rapport IA vous dit ce que ces chiffres signifient.</p>
                    <p>Un dashboard classique affiche : &ldquo;Pipeline : 450K EUR. Win rate : 28%. Cycle moyen : 34 jours.&rdquo; C&apos;est factuel, mais ca ne dit rien. Est-ce que 450K c&apos;est bien ? Le win rate est-il en hausse ou en baisse ? Le cycle s&apos;allonge-t-il ? Et surtout, qu&apos;est-ce qu&apos;on devrait faire ?</p>
                    <p>Un rapport Claude dit : &ldquo;Le pipeline a augmente de 12% cette semaine (+48K EUR), principalement grace a 3 deals entrants dans le segment Mid-Market. Le win rate a baisse de 2 points par rapport au mois dernier, lie a un allongement du cycle sur les deals Enterprise (42 jours vs 34 en moyenne). Deux deals a risque necessitent une attention immediate : Acme Corp (pas de contact depuis 15 jours) et TechFlow (le champion interne a change de poste). Recommandation : prioriser la relance sur ces deux comptes avant la fin de semaine.&rdquo;</p>
                    <p>Ce n&apos;est pas juste une question de format. C&apos;est un changement de paradigme. Le manager ne passe plus son temps a interpreter des graphiques. Il recoit directement les insights et les actions a mener.</p>
                  </div>

                  {/* Comparison mockup */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Dashboard classique */}
                    <div className="rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded bg-[#E8E8E8]" />
                        <span className="text-[10px] font-semibold text-[#999]">Dashboard classique</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { metric: "Pipeline", value: "450K EUR" },
                          { metric: "Win rate", value: "28%" },
                          { metric: "Cycle moyen", value: "34 jours" },
                          { metric: "Deals crees", value: "12" },
                        ].map((m) => (
                          <div key={m.metric} className="flex items-center justify-between text-[9px] py-1 border-b border-[#F2F2F2]">
                            <span className="text-[#999]">{m.metric}</span>
                            <span className="font-mono text-[#555]">{m.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 rounded bg-[#FFF3E0] p-2">
                        <p className="text-[8px] text-[#E65100]">Chiffres bruts. Aucune analyse. Le manager doit interpreter seul et preparer ses slides.</p>
                      </div>
                    </div>
                    {/* Rapport IA */}
                    <div className="rounded-xl border border-[#6D00CC] bg-[#FAFBFF] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded bg-[#6D00CC]" />
                        <span className="text-[10px] font-semibold text-[#6D00CC]">Rapport Claude</span>
                      </div>
                      <div className="space-y-2 text-[9px] text-[#555] leading-[1.5]">
                        <p>Pipeline en hausse de 12% cette semaine (+48K EUR), tire par le segment Mid-Market.</p>
                        <p>Win rate en recul de 2 points, correle a un allongement du cycle Enterprise.</p>
                        <p className="text-[#E65100] font-medium">2 deals a risque : Acme Corp (silence 15j) et TechFlow (changement de champion).</p>
                        <p className="text-[#22C55E] font-medium">Action : prioriser la relance sur ces 2 comptes avant vendredi.</p>
                      </div>
                      <div className="mt-3 rounded bg-[#F0EBFF] border border-[#E0D4FF] p-2">
                        <p className="text-[8px] text-[#6D00CC]">Analyse contextuelle. Tendances. Alertes. Recommandations actionnables. Pret a envoyer.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 4 : Cas concret SaaS B2B */}
              {/* ============================================ */}
              <section id="cas-concret" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-[#111] p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">3</span>
                    <h2 className="text-[17px] font-semibold text-white">Cas concret : le rapport hebdo d&apos;un SaaS B2B</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Voici un exemple reel de rapport genere par Claude pour un de nos clients SaaS B2B (donnees anonymisees). Ce rapport est produit automatiquement chaque lundi a 8h et envoye sur Slack dans le canal #revenue-team.</p>
                    <p>Le prompt a ete configure une seule fois. Il se connecte a HubSpot via MCP, tire les donnees de la semaine ecoulee, et genere le rapport complet en moins de 40 secondes.</p>
                  </div>

                  {/* Report mockup */}
                  <div className="mt-6 rounded-xl bg-[#1A1A1A] border border-[#333] p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-5 h-5 rounded bg-[#6D00CC] flex items-center justify-center">
                        <span className="text-white text-[8px] font-bold">Cl</span>
                      </div>
                      <span className="text-[10px] font-semibold text-white">Rapport hebdomadaire - Semaine du 31 mars au 6 avril 2026</span>
                    </div>

                    {/* Pipeline */}
                    <div className="rounded bg-[#222] p-3 mb-3">
                      <p className="text-[9px] font-semibold text-[#6D00CC] mb-2">Pipeline cette semaine</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded bg-[#1A1A1A] p-2 text-center">
                          <p className="text-[8px] text-[#666]">Pipeline total</p>
                          <p className="text-[14px] font-bold text-white">487K EUR</p>
                          <p className="text-[8px] text-[#22C55E]">+12% vs semaine derniere</p>
                        </div>
                        <div className="rounded bg-[#1A1A1A] p-2 text-center">
                          <p className="text-[8px] text-[#666]">Deals crees</p>
                          <p className="text-[14px] font-bold text-white">7</p>
                          <p className="text-[8px] text-[#22C55E]">+3 vs semaine derniere</p>
                        </div>
                        <div className="rounded bg-[#1A1A1A] p-2 text-center">
                          <p className="text-[8px] text-[#666]">Deals fermes (won)</p>
                          <p className="text-[14px] font-bold text-[#22C55E]">3 (42K EUR)</p>
                          <p className="text-[8px] text-[#999]">Win rate : 31%</p>
                        </div>
                        <div className="rounded bg-[#1A1A1A] p-2 text-center">
                          <p className="text-[8px] text-[#666]">Cycle moyen</p>
                          <p className="text-[14px] font-bold text-white">32 jours</p>
                          <p className="text-[8px] text-[#999]">Stable vs M-1</p>
                        </div>
                      </div>
                    </div>

                    {/* Deals a risque */}
                    <div className="rounded bg-[#2E1A1A] border border-[#402525] p-3 mb-3">
                      <p className="text-[9px] font-semibold text-[#FF7A59] mb-2">Deals a risque (2)</p>
                      <div className="space-y-2">
                        <div className="rounded bg-[#1A1A1A] p-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] font-medium text-white">Acme Corp - 35K EUR</span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#FF7A59]/20 text-[#FF7A59]">Risque eleve</span>
                          </div>
                          <p className="text-[8px] text-[#999]">Aucun contact depuis 15 jours. Le champion interne (Marie Dupont, VP Ops) n&apos;a pas ouvert les 2 derniers emails. Le deal est en phase de negociation depuis 22 jours.</p>
                        </div>
                        <div className="rounded bg-[#1A1A1A] p-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[9px] font-medium text-white">TechFlow - 28K EUR</span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#FF7A59]/20 text-[#FF7A59]">Risque moyen</span>
                          </div>
                          <p className="text-[8px] text-[#999]">Le champion interne (Thomas Martin, CTO) a change de poste la semaine derniere. Nouveau CTO non identifie. Le deal etait prevu pour cloturer fin mars.</p>
                        </div>
                      </div>
                    </div>

                    {/* Signaux et contacts chauds */}
                    <div className="rounded bg-[#1A2E1A] border border-[#254025] p-3 mb-3">
                      <p className="text-[9px] font-semibold text-[#22C55E] mb-2">Signaux positifs detectes</p>
                      <ul className="text-[8px] text-[#999] space-y-1">
                        <li>- DataPulse a consulte la page pricing 4 fois cette semaine (nouveau contact, pas encore dans le pipeline)</li>
                        <li>- Meridian Solutions a ouvert la proposition commerciale 6 fois, dont 2 fois depuis un mobile (signal de partage interne)</li>
                        <li>- Le CEO de NovaTech a accepte la connexion LinkedIn du commercial (engagement positif post-demo)</li>
                      </ul>
                    </div>

                    {/* Recommandations */}
                    <div className="rounded bg-[#1F1A2E] border border-[#2D2540] p-3">
                      <p className="text-[9px] font-semibold text-[#6D00CC] mb-2">Actions recommandees pour cette semaine</p>
                      <ol className="text-[8px] text-[#999] space-y-1">
                        <li>1. Relancer Acme Corp avec un case study sectoriel. Tenter un contact via un autre interlocuteur (CFO identifie dans le CRM).</li>
                        <li>2. Identifier le nouveau CTO chez TechFlow et planifier un call de presentation. Reactiver le deal avec un nouvel angle.</li>
                        <li>3. Creer un deal pour DataPulse et assigner au commercial du territoire. Signal d&apos;intent fort.</li>
                        <li>4. Accelerer la proposition Meridian Solutions : le niveau d&apos;engagement indique une decision imminente.</li>
                        <li>5. Envoyer un recap personnalise a NovaTech suite a la demo, en capitalisant sur l&apos;engagement du CEO.</li>
                      </ol>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Ce rapport est genere automatiquement. Le manager n&apos;a rien a preparer. Il le recoit sur Slack, le lit en 3 minutes, et sait exactement quoi prioriser cette semaine. Le temps gagne est reinvesti dans du coaching commercial et de la strategie, pas dans du copier-coller.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 5 : Comment le mettre en place */}
              {/* ============================================ */}
              <section id="mise-en-place" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">4</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Comment le mettre en place</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La mise en place d&apos;un reporting automatise via Claude prend environ 30 minutes de configuration, une fois que les prerequis sont en place. Voici les 4 etapes.</p>
                  </div>

                  {/* 4 steps */}
                  <div className="mt-6 space-y-3">
                    {[
                      { step: "1", title: "Connecter le CRM", desc: "Deployer un serveur MCP qui pointe vers votre instance HubSpot, Salesforce ou Attio. Le serveur expose les objets CRM (deals, contacts, companies, activities) comme des outils que Claude peut appeler. Installation en 10 minutes avec la documentation officielle.", color: "#FF7A59" },
                      { step: "2", title: "Definir les KPIs", desc: "Lister les metriques que le rapport doit couvrir. Par equipe : pipeline, win rate, cycle pour les Sales. CAC, MQL, attribution pour le Marketing. NRR, churn, health score pour le CS. Pas besoin de tout couvrir au debut, commencez par les 5 metriques les plus critiques.", color: "#4B5EFC" },
                      { step: "3", title: "Configurer le prompt", desc: "Rediger le prompt systeme qui definit le format du rapport, le ton, les comparaisons (semaine vs semaine, mois vs mois), et le type de recommandations attendues. C'est la partie la plus importante : un bon prompt produit un rapport que le CEO peut lire directement.", color: "#6D00CC" },
                      { step: "4", title: "Planifier l'envoi", desc: "Connecter la generation du rapport a un declencheur temporel via Make ou un cron job. Le rapport est genere automatiquement et envoye sur Slack, par email, ou dans Notion. Le lundi a 8h, avant le comite de direction.", color: "#22C55E" },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-4">
                        <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-white text-[10px] font-bold" style={{ background: s.color }}>
                          {s.step}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[11px] text-[#666] leading-[1.6]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-[#F0EBFF] border border-[#E0D4FF] p-4">
                    <p className="text-[10px] font-semibold text-[#6D00CC] mb-1">Temps total de setup</p>
                    <p className="text-[11px] text-[#555] leading-[1.6]">30 minutes pour un premier rapport fonctionnel. 2 a 3 iterations sur le prompt pour affiner le format et la qualite des recommandations. Le rapport est operationnel des la premiere semaine.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 6 : KPIs par silo */}
              {/* ============================================ */}
              <section id="kpis-par-silo" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">5</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Les KPIs qu&apos;on inclut par silo</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le reporting IA n&apos;a de valeur que s&apos;il couvre les bonnes metriques. Voici les KPIs que l&apos;on inclut systematiquement dans les rapports de nos clients, organises par equipe.</p>
                  </div>

                  {/* KPI grid */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        silo: "Marketing",
                        color: "#FF7A59",
                        kpis: ["CAC (cout d'acquisition client)", "MQL > SQL (taux de conversion)", "Attribution par canal", "Pipeline genere par le marketing", "Cout par MQL"],
                      },
                      {
                        silo: "Sales",
                        color: "#4B5EFC",
                        kpis: ["Pipeline total et variation", "Win rate par segment", "Cycle de vente moyen", "Activites par commercial", "Forecast vs objectif"],
                      },
                      {
                        silo: "Customer Success",
                        color: "#22C55E",
                        kpis: ["NRR (Net Revenue Retention)", "Taux de churn", "Health score moyen", "Comptes a risque", "Upsell/cross-sell pipeline"],
                      },
                      {
                        silo: "Finance",
                        color: "#6D00CC",
                        kpis: ["MRR et variation", "ARR et projection", "Forecast de revenus", "LTV/CAC ratio", "Burn rate et runway"],
                      },
                    ].map((s) => (
                      <div key={s.silo} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 rounded-sm" style={{ background: s.color }} />
                          <span className="text-[11px] font-semibold text-[#111]">{s.silo}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {s.kpis.map((kpi) => (
                            <li key={kpi} className="flex items-start gap-2 text-[10px] text-[#666] leading-[1.5]">
                              <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: s.color }} />
                              {kpi}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;avantage du rapport IA : il ne se contente pas d&apos;afficher ces KPIs de maniere cloisonnee. Claude croise les donnees entre les silos. Si le marketing genere 30% de MQLs en plus mais que le win rate baisse, le rapport le signale et propose une hypothese : qualite des leads en baisse, mauvais alignement ICP, ou probleme dans le processus de qualification.</p>
                    <p>Ce type d&apos;analyse cross-silo est extremement difficile a faire manuellement. Il faut croiser des dashboards differents, dans des outils differents, et avoir la disponibilite cognitive pour identifier les correlations. Claude le fait en quelques secondes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 7 : Les limites a connaitre */}
              {/* ============================================ */}
              <section id="limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">6</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Les limites a connaitre</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le reporting IA n&apos;est pas magique. Il y a des limites reelles qu&apos;il faut connaitre avant de deployer, pour eviter les deceptions et les erreurs de decision.</p>
                    <p><strong className="text-[#111]">Les hallucinations sur les chiffres.</strong> Claude est un modele de langage, pas une calculatrice. Il peut arrondir differemment, interpreter une donnee CRM de maniere incorrecte, ou inferer un pourcentage d&apos;evolution a partir de donnees incompletes. Les premiers rapports doivent etre verifies manuellement, ligne par ligne, pendant 2 a 3 semaines. Une fois le prompt calibre et les cas limites geres, la fiabilite est excellente, mais la phase de validation initiale est non-negociable.</p>
                    <p><strong className="text-[#111]">La dependance a la qualite des donnees.</strong> Si votre CRM est mal renseigne, le rapport sera mauvais. C&apos;est la regle numero un. Des deals sans montant, des contacts sans owner, des activites non loguees : Claude ne peut pas inventer des donnees qui n&apos;existent pas. Le reporting IA est un revelateur impitoyable de la qualite de votre data. C&apos;est d&apos;ailleurs souvent un declencheur pour nettoyer le CRM.</p>
                    <p><strong className="text-[#111]">Le besoin de donnees structurees.</strong> Claude via MCP lit les champs du CRM. Si vos informations critiques sont dans des notes en texte libre, dans des emails, ou dans la tete des commerciaux, le rapport passera a cote. La premiere etape est souvent de structurer les donnees : creer les bons champs custom, mettre en place des proprietes obligatoires, et former l&apos;equipe au data hygiene.</p>
                    <p><strong className="text-[#111]">L&apos;interpretation vs la decision.</strong> Claude recommande, il ne decide pas. Le rapport peut suggerer de relancer un deal a risque, mais c&apos;est le commercial qui connait la relation et qui prend la decision. L&apos;IA est un copilote, pas un pilote automatique. Les equipes qui l&apos;utilisent le mieux sont celles qui lisent les recommandations comme des suggestions informees, pas comme des ordres.</p>
                  </div>

                  {/* Limits visual */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { title: "Verification requise", desc: "2-3 semaines de validation manuelle au demarrage pour calibrer la precision des chiffres.", color: "#FF7A59", icon: "!" },
                      { title: "Data quality", desc: "Le rapport ne sera jamais meilleur que les donnees dans votre CRM. Nettoyez avant d'automatiser.", color: "#4B5EFC", icon: "D" },
                      { title: "Humain in the loop", desc: "Claude recommande, le manager decide. L'IA augmente le jugement, elle ne le remplace pas.", color: "#22C55E", icon: "H" },
                    ].map((l) => (
                      <div key={l.title} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <div className="w-8 h-8 rounded-lg mx-auto mb-3 flex items-center justify-center text-white text-[10px] font-bold" style={{ background: l.color }}>
                          {l.icon}
                        </div>
                        <p className="text-[11px] font-semibold text-[#111] mb-1">{l.title}</p>
                        <p className="text-[9px] text-[#999] leading-[1.5]">{l.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 8 : Notre approche chez Ceres */}
              {/* ============================================ */}
              <section id="approche-ceres" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">7</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Notre approche chez Ceres</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le reporting automatise fait partie de ce qu&apos;on deploie chez nos clients dans la Phase 3 de notre accompagnement RevOps, la phase d&apos;Activation. Apres l&apos;audit (Phase 1) et la structuration des process et de la data (Phase 2), on active les cas d&apos;usage IA qui generent un ROI immediat. Le reporting est souvent le premier.</p>
                    <p>Pourquoi ? Parce que c&apos;est le cas d&apos;usage le plus visible et le plus rapide a deployer. En 30 minutes, le CEO recoit son premier rapport automatique. L&apos;impact est immediat : plus de slides a preparer, plus de temps perdu, et surtout une qualite d&apos;analyse que le copier-coller ne permettait pas.</p>
                    <p>On configure tout : la connexion MCP au CRM, le prompt systeme adapte a votre contexte (secteur, terminologie, objectifs), le format du rapport (executive summary, rapport detaille par equipe, flash report quotidien), et le canal de distribution (Slack, email, Notion). Le manager n&apos;a plus qu&apos;a lire.</p>
                    <p>On accompagne ensuite la phase de calibration pendant 2 a 3 semaines, en ajustant le prompt en fonction des retours. L&apos;objectif est que le rapport soit suffisamment fiable et pertinent pour remplacer completement le processus manuel, sans supervision.</p>
                    <p>Le reporting n&apos;est que le debut. Une fois que Claude est connecte au CRM, les possibilites s&apos;etendent : alertes en temps reel sur les deals a risque, coaching commercial personnalise, prevision de revenus, analyse win/loss automatique. Mais ca, c&apos;est pour les articles suivants.</p>
                  </div>

                  {/* Phase diagram */}
                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Accompagnement Ceres - le reporting dans le parcours</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {[
                        { phase: "Phase 1", title: "Audit", desc: "Diagnostic RevOps, etat de la data, process existants", color: "#FF7A59", active: false },
                        { phase: "Phase 2", title: "Structuration", desc: "Process, data quality, CRM propre, fondations solides", color: "#4B5EFC", active: false },
                        { phase: "Phase 3", title: "Activation", desc: "Reporting IA, alertes, agents, automatisation", color: "#6D00CC", active: true },
                      ].map((p) => (
                        <div key={p.phase} className={`flex-1 rounded-lg border p-3 ${p.active ? "border-[#6D00CC] bg-[#FAFBFF]" : "border-[#E8E8E8] bg-white"}`}>
                          <span className="text-[8px] font-semibold uppercase tracking-wider" style={{ color: p.color }}>{p.phase}</span>
                          <p className={`text-[11px] font-semibold mt-1 ${p.active ? "text-[#6D00CC]" : "text-[#111]"}`}>{p.title}</p>
                          <p className="text-[9px] text-[#999] mt-1 leading-[1.4]">{p.desc}</p>
                          {p.active && (
                            <div className="mt-2 px-2 py-1 rounded bg-[#6D00CC] text-white text-[8px] font-medium inline-block">Reporting automatise</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#6D00CC] to-[#4B0E8A] p-6 md:p-8 text-center">
                <h3 className="text-[17px] font-semibold text-white mb-3">Automatiser votre reporting ?</h3>
                <p className="text-[13px] text-white/70 leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on configure le reporting IA pour les equipes RevOps B2B. Claude connecte a votre CRM, rapport hebdomadaire automatique, zero copier-coller. Un call de 30 minutes pour evaluer votre cas.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#6D00CC] rounded-lg text-[13px] font-medium hover:bg-[#F5F5F5] transition-colors">
                  Prendre rendez-vous
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Related articles */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#111] mb-4">Articles complementaires</h3>
                <div className="grid gap-3">
                  {relatedArticles.map((a) => (
                    <Link key={a.slug} href={`/blog/${a.slug}`} className="group flex items-center gap-4 rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors">
                      <div className="w-1 h-10 rounded-full" style={{ background: a.color }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-medium mb-1" style={{ color: a.color }}>{a.category}</p>
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#6D00CC] transition-colors leading-[1.4]">{a.title}</p>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m9 18 6-6-6-6" /></svg>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
