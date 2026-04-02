"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 agents IA qu'on deploie chez nos clients B2B (avec les resultats)",
  description: "5 agents IA concrets deployes chez des clients B2B : enrichissement leads, analyse calls, scoring predictif, reporting automatise, detection churn. Architecture technique, couts reels et resultats mesures.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/agents-ia-deployes-clients-b2b" },
  articleSection: "IA & Automatisation",
  wordCount: 3500,
  inLanguage: "fr",
};

const sections = [
  { id: "agent-vs-chatbot", title: "Agent vs chatbot" },
  { id: "agent-enrichissement", title: "Agent 1 : Enrichissement" },
  { id: "agent-calls", title: "Agent 2 : Analyse calls" },
  { id: "agent-scoring", title: "Agent 3 : Scoring predictif" },
  { id: "agent-reporting", title: "Agent 4 : Reporting" },
  { id: "agent-churn", title: "Agent 5 : Detection churn" },
  { id: "architecture-technique", title: "Architecture technique" },
  { id: "couts-reels", title: "Combien ca coute" },
  { id: "prerequis", title: "Les prerequis" },
  { id: "deploiement-ceres", title: "Comment on deploie" },
];

const relatedArticles = [
  { title: "MCP : connecter Claude a votre CRM, Slack et tous vos outils", slug: "mcp-connecter-claude-crm-outils", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Claude Code pour les equipes non-techniques : ce que ca change", slug: "claude-code-equipes-non-techniques", category: "IA & Automatisation", color: "#D4A27F" },
  { title: "Process, Data, IA : pourquoi l'ordre compte en RevOps", slug: "process-data-ia-ordre-revops", category: "RevOps", color: "#FF7A59" },
];

export default function AgentsIaDeployesClientsB2bPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("agent-vs-chatbot");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "14%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "26%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "38%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "50%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "62%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "74%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "86%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.06, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=5%20agents%20IA%20deploy%C3%A9s%20chez%20des%20clients%20B2B&url=https://ceres.agency/blog/agents-ia-deployes-clients-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/agents-ia-deployes-clients-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Agents IA deployes clients B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">20 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                5 agents IA qu&apos;on deploie chez nos clients B2B (avec les resultats)
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Pas de theorie, pas de &ldquo;l&apos;IA va revolutionner le monde&rdquo;. Cinq agents concrets, deployes chez de vrais clients, avec des resultats mesures. Enrichissement de leads, analyse de calls, scoring predictif, reporting automatise, detection du churn. On vous montre exactement comment ils fonctionnent, ce qu&apos;ils coutent, et ce qu&apos;ils rapportent. Le tout base sur Claude, MCP et Make.
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
              {/* ============================================ */}
              {/* Section 1 : Un agent IA, ce n'est pas un chatbot */}
              {/* ============================================ */}
              <section id="agent-vs-chatbot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Un agent IA, ce n&apos;est pas un chatbot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de parler des 5 agents qu&apos;on deploie, clarifions un point fondamental. Un chatbot repond a des questions. Vous lui posez une question, il genere une reponse. C&apos;est reactif, c&apos;est ponctuel, et ca necessite une intervention humaine a chaque interaction. Un agent IA, c&apos;est completement different.</p>
                    <p>Un agent IA agit. Il se connecte a vos outils (CRM, Slack, outils de transcription, bases de donnees), il analyse vos donnees en continu, il execute des taches, et il produit des resultats tangibles. Pas besoin de le prompter a chaque fois. On le configure une fois, on definit ses declencheurs, et il tourne. Quand un nouveau lead arrive dans HubSpot, l&apos;agent le detecte et agit. Quand un call se termine, l&apos;agent analyse la transcription automatiquement. Quand c&apos;est lundi matin, l&apos;agent genere le reporting de la semaine.</p>
                    <p>La stack technique derriere ces agents est plus simple que ce que la plupart des gens imaginent. Claude fait le raisonnement, l&apos;analyse et la generation de contenu. MCP (Model Context Protocol) permet a Claude de se connecter directement a vos outils : HubSpot, Slack, bases de donnees, API tierces. Make gere l&apos;orchestration et le scheduling : quand l&apos;agent se declenche, dans quel ordre les etapes s&apos;executent, et comment les erreurs sont gerees. Claude Code permet de prototyper, tester et iterer rapidement sur la logique de l&apos;agent.</p>
                    <p>Le resultat : des agents qui fonctionnent 24h/24, qui ne font pas d&apos;erreurs de copier-coller, qui ne sont jamais malades, et qui coutent une fraction du prix d&apos;un collaborateur supplementaire. Pas pour remplacer les equipes, mais pour leur liberer du temps sur les taches a faible valeur ajoutee et leur permettre de se concentrer sur ce qui compte : la relation client, la strategie, la negociation.</p>
                  </div>

                  {/* Chatbot vs Agent comparison */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded bg-[#E8E8E8]" />
                        <span className="text-[10px] font-semibold text-[#999]">Chatbot classique</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { trait: "Reactif : attend une question", active: true },
                          { trait: "Une reponse a la fois", active: true },
                          { trait: "Deconnecte des outils", active: true },
                          { trait: "Necessite un humain a chaque usage", active: true },
                        ].map((r) => (
                          <div key={r.trait} className="flex items-center gap-2 text-[9px] py-1 border-b border-[#F2F2F2]">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#CCC]"><path d="M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                            <span className="text-[#999]">{r.trait}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#6D00CC] bg-[#FAFBFF] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded bg-[#6D00CC]" />
                        <span className="text-[10px] font-semibold text-[#6D00CC]">Agent IA (Claude + MCP)</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { trait: "Proactif : se declenche automatiquement", color: "#6D00CC" },
                          { trait: "Execute des workflows complets", color: "#4B5EFC" },
                          { trait: "Connecte a vos outils (CRM, Slack, etc.)", color: "#22C55E" },
                          { trait: "Tourne en autonomie 24h/24", color: "#FF7A59" },
                        ].map((s) => (
                          <div key={s.trait} className="flex items-center gap-2 text-[9px] py-1 border-b border-[#F0EBFF]">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0" style={{ color: s.color }}><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span className="text-[#555]">{s.trait}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech stack summary */}
                  <div className="mt-4 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-4">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-3">Stack technique des agents</p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#D4A27F] mx-auto mb-2 flex items-center justify-center text-white text-[9px] font-bold">Cl</div>
                        <p className="text-[10px] font-semibold text-[#111]">Claude</p>
                        <p className="text-[9px] text-[#999]">Raisonnement et analyse</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#6D00CC] mx-auto mb-2 flex items-center justify-center text-white text-[9px] font-bold">MCP</div>
                        <p className="text-[10px] font-semibold text-[#111]">MCP</p>
                        <p className="text-[9px] text-[#999]">Connexion aux outils</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#6D00CC] mx-auto mb-2 flex items-center justify-center text-white text-[9px] font-bold">Mk</div>
                        <p className="text-[10px] font-semibold text-[#111]">Make</p>
                        <p className="text-[9px] text-[#999]">Orchestration et scheduling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 2 : Agent 1 - Enrichissement leads */}
              {/* ============================================ */}
              <section id="agent-enrichissement" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">1</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Agent 1 : Enrichissement automatique des leads</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le premier agent qu&apos;on deploie chez la plupart de nos clients, et souvent celui qui genere le ROI le plus immediat. Le principe : chaque nouveau lead qui entre dans HubSpot declenche automatiquement l&apos;agent. Sans intervention humaine, sans delai.</p>
                    <p>Claude analyse le profil LinkedIn du prospect, les actualites recentes de son entreprise, les technologies utilisees (en s&apos;appuyant sur Clay comme source de donnees), le secteur, la taille, les signaux d&apos;achat. Il genere ensuite un brief contextuel structure directement dans la fiche CRM. Le commercial ouvre la fiche HubSpot et trouve tout ce dont il a besoin pour personnaliser son approche : contexte business, enjeux potentiels, angle d&apos;attaque recommande.</p>
                    <p>Clay intervient ici comme source de donnees, pas comme outil central. C&apos;est Claude qui fait le travail d&apos;analyse et de synthese. Clay fournit les donnees brutes (technographies, signaux, informations entreprise), Claude les transforme en intelligence actionnable. La difference est importante : un enrichissement Clay classique vous donne des champs remplis. Un agent Claude vous donne un brief strategique.</p>
                    <p>Avant, un commercial passait 10 a 15 minutes a googler un prospect avant chaque appel. Multiplie par 15 a 20 calls par jour pour une equipe de 8 commerciaux, ca fait un volume considerable de temps perdu sur une tache que l&apos;IA fait mieux et plus vite. L&apos;agent ne se fatigue pas, ne rate pas d&apos;information, et ne prend pas de raccourcis quand il est en retard.</p>
                  </div>

                  {/* Workflow diagram */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Workflow de l&apos;agent enrichissement</p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#FF7A59] mx-auto mb-2 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Nouveau lead</p>
                        <p className="text-[9px] text-[#999]">Entre dans HubSpot</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#4B5EFC] mx-auto mb-2 flex items-center justify-center text-white text-[9px] font-bold">Cy</div>
                        <p className="text-[10px] font-semibold text-[#111]">Clay</p>
                        <p className="text-[9px] text-[#999]">Donnees brutes</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#6D00CC] mx-auto mb-2 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Claude + MCP</p>
                        <p className="text-[9px] text-[#999]">Analyse et synthese</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#22C55E] mx-auto mb-2 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Fiche CRM enrichie</p>
                        <p className="text-[9px] text-[#999]">Brief contextuel pret</p>
                      </div>
                    </div>

                    {/* Enrichment result mockup */}
                    <div className="mt-4 rounded-lg border border-[#E8E8E8] bg-white p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded bg-[#6D00CC] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 2v10l7-4" /></svg>
                        </div>
                        <span className="text-[10px] font-semibold text-[#111]">Resultat de l&apos;enrichissement IA</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="rounded bg-[#F8F8F8] p-2">
                          <span className="text-[#999]">Entreprise</span>
                          <p className="font-medium text-[#111]">DataPulse SAS</p>
                        </div>
                        <div className="rounded bg-[#F8F8F8] p-2">
                          <span className="text-[#999]">Taille</span>
                          <p className="font-medium text-[#111]">62 employes</p>
                        </div>
                        <div className="rounded bg-[#F8F8F8] p-2">
                          <span className="text-[#999]">Technos detectees</span>
                          <p className="font-medium text-[#111]">HubSpot, Segment, Snowflake</p>
                        </div>
                        <div className="rounded bg-[#F8F8F8] p-2">
                          <span className="text-[#999]">Signal d&apos;achat</span>
                          <p className="font-medium text-[#111]">Recrutement Head of Sales</p>
                        </div>
                      </div>
                      <div className="mt-2 rounded bg-[#F0EBFF] border border-[#E0D4FF] p-2">
                        <p className="text-[9px] font-semibold text-[#6D00CC] mb-1">Brief IA genere par Claude</p>
                        <p className="text-[9px] text-[#555] leading-[1.5]">&ldquo;DataPulse est un SaaS B2B en croissance, segment data analytics. Le CEO a publie sur LinkedIn le 25 mars sur les difficultes a scaler les operations commerciales. Ils recrutent un Head of Sales, ce qui indique une structuration en cours. Angle recommande : positionner Ceres comme accelerateur de la montee en puissance commerciale. Mentionner notre experience avec des stacks HubSpot + Snowflake.&rdquo;</p>
                      </div>
                    </div>
                  </div>

                  {/* Results stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "2 min", label: "temps de recherche pre-appel (vs 15 min avant)", color: "#6D00CC" },
                      { value: "10h", label: "gagnees par semaine pour 8 commerciaux", color: "#FF7A59" },
                      { value: "< 30s", label: "pour enrichir un lead complet", color: "#22C55E" },
                      { value: "+28%", label: "de taux de reponse sur le premier contact", color: "#4B5EFC" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] text-center">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 3 : Agent 2 - Analyse des calls */}
              {/* ============================================ */}
              <section id="agent-calls" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[10px] font-bold">2</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Agent 2 : Resume et analyse des calls commerciaux</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les calls commerciaux sont une mine d&apos;or d&apos;information. Le probleme : personne n&apos;a le temps de les ecouter. Un sales manager avec 8 commerciaux a en moyenne 15 a 20 calls par jour dans son equipe. A 30-45 minutes par call, c&apos;est physiquement impossible de tout suivre. Resultat : les insights restent enfermes dans la tete du commercial, les objections ne remontent pas, et les managers pilotent a l&apos;aveugle.</p>
                    <p>L&apos;agent d&apos;analyse de calls change completement cette dynamique. Apres chaque call (enregistre via Claap, Gong, ou tout outil de transcription), Claude recoit la transcription et produit une analyse structuree en moins de 2 minutes. Pas un simple resume. Une vraie analyse.</p>
                    <p>Le livrable de l&apos;agent contient cinq elements. Un resume executif en 3-4 phrases. Les objections soulevees par le prospect, classees par importance. Les next steps identifies (avec les engagements pris de chaque cote). Le sentiment global du prospect (enthousiaste, hesitant, sceptique, bloque). Et une mise a jour automatique de la fiche deal dans HubSpot avec les notes structurees, le changement de stage si necessaire, et les taches creees pour le suivi.</p>
                    <p>Le manager ouvre son dashboard le matin et voit en 5 minutes l&apos;etat de tous les deals de son equipe, sans avoir ecoute un seul call. Il sait quels deals avancent, lesquels sont bloques, quelles objections reviennent, et ou il doit intervenir. Les weekly reviews deviennent 3 fois plus efficaces parce que tout le monde part des memes donnees.</p>
                  </div>

                  {/* Workflow diagram */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Workflow de l&apos;agent analyse calls</p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#22C55E] mx-auto mb-2 flex items-center justify-center text-white text-[9px] font-bold">Cp</div>
                        <p className="text-[10px] font-semibold text-[#111]">Call enregistre</p>
                        <p className="text-[9px] text-[#999]">Claap / Gong</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#6D00CC] mx-auto mb-2 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Claude</p>
                        <p className="text-[9px] text-[#999]">Analyse transcription</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#FF7A59] mx-auto mb-2 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">HubSpot + Slack</p>
                        <p className="text-[9px] text-[#999]">MAJ fiche deal + alerte</p>
                      </div>
                    </div>

                    {/* Call analysis mockup */}
                    <div className="mt-4 rounded-lg border border-[#E8E8E8] bg-white p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded bg-[#FF7A59] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <span className="text-[10px] font-semibold text-[#111]">Analyse du call -- Deal &ldquo;DataPulse / Ceres&rdquo;</span>
                      </div>
                      <div className="space-y-2">
                        <div className="rounded bg-[#F8F8F8] p-2">
                          <span className="text-[9px] font-semibold text-[#999]">Resume</span>
                          <p className="text-[9px] text-[#555] leading-[1.5] mt-0.5">Call de 35 min avec le CEO et le VP Sales. Interet confirme pour l&apos;offre RevOps Part-Time. Budget valide en interne. Besoin de voir un cas client SaaS similaire avant de signer.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded bg-[#FFF3E0] border border-[#FFE0B2] p-2">
                            <span className="text-[9px] font-semibold text-[#FF7A59]">Objections</span>
                            <ul className="text-[8px] text-[#666] mt-1 space-y-0.5">
                              <li>- Timing : migration CRM prevue en Q3</li>
                              <li>- Concurrence : ont aussi parle a un freelance</li>
                            </ul>
                          </div>
                          <div className="rounded bg-[#E8F5E9] border border-[#C8E6C9] p-2">
                            <span className="text-[9px] font-semibold text-[#22C55E]">Next steps</span>
                            <ul className="text-[8px] text-[#666] mt-1 space-y-0.5">
                              <li>- Envoyer cas client SaaS (avant vendredi)</li>
                              <li>- Call de closing prevu le 10/04</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="rounded bg-[#F0EBFF] border border-[#E0D4FF] p-2 flex-1">
                            <span className="text-[9px] font-semibold text-[#6D00CC]">Sentiment</span>
                            <p className="text-[9px] text-[#555] mt-0.5">Positif. Le CEO est convaincu, le VP Sales veut des preuves supplementaires.</p>
                          </div>
                          <div className="rounded bg-[#F8F8F8] border border-[#E8E8E8] p-2 flex-1">
                            <span className="text-[9px] font-semibold text-[#999]">Stage HubSpot</span>
                            <p className="text-[9px] text-[#555] mt-0.5">Negociation (mis a jour auto)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "2 min", label: "par call analyse (vs 30-45 min d'ecoute)", color: "#FF7A59" },
                      { value: "0h", label: "d'ecoute de calls pour les managers", color: "#6D00CC" },
                      { value: "100%", label: "des calls documentes dans le CRM", color: "#22C55E" },
                      { value: "x3", label: "efficacite des weekly reviews", color: "#4B5EFC" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] text-center">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 4 : Agent 3 - Scoring predictif */}
              {/* ============================================ */}
              <section id="agent-scoring" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#22C55E] flex items-center justify-center text-white text-[10px] font-bold">3</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Agent 3 : Scoring predictif des deals</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scoring classique dans HubSpot, base sur des regles manuelles (&ldquo;si le prospect a plus de 50 employes, +20 points ; s&apos;il a visite la page pricing, +15 points&rdquo;), a un defaut fondamental : il mesure ce que vous avez decide de mesurer, pas ce qui predit reellement la conversion. C&apos;est un miroir de vos hypotheses, pas de la realite.</p>
                    <p>L&apos;agent de scoring predictif fonctionne differemment. Claude analyse l&apos;ensemble du contexte d&apos;un deal : l&apos;engagement reel du prospect (pas juste les ouvertures d&apos;email, mais le contenu des echanges), la frequence et la qualite des interactions, le profil firmographique compare aux clients existants qui ont ferme, les objections exprimees dans les calls, le timing dans le cycle d&apos;achat. Il produit un score dynamique qui evolue a chaque nouvelle interaction.</p>
                    <p>La difference avec le scoring par regles est fondamentale. L&apos;agent decouvre des patterns que vous n&apos;auriez pas identifies. Par exemple, chez un de nos clients SaaS, l&apos;agent a decouvert que les prospects qui posaient des questions techniques dans les 72 premieres heures avaient un taux de closing 3.5x superieur a la moyenne. Aucune regle manuelle n&apos;aurait capture ca. L&apos;agent a aussi identifie que la presence du CFO au deuxieme meeting etait le signal le plus predictif d&apos;un deal gagne.</p>
                    <p>Concretement, chaque lundi matin, le sales manager recoit un classement des deals par probabilite reelle de closing, avec les raisons detaillees de chaque score. Il sait exactement ou concentrer l&apos;energie de son equipe. Les deals a haute probabilite recoivent une attention maximale, les deals a faible probabilite sont soit relances avec une strategie differente, soit disqualifies pour arreter de perdre du temps.</p>
                  </div>

                  {/* Scoring comparison mockup */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Rule-based */}
                    <div className="rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded bg-[#E8E8E8]" />
                        <span className="text-[10px] font-semibold text-[#999]">Scoring par regles (avant)</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { rule: "Taille > 50 employes", pts: "+20 pts" },
                          { rule: "Page pricing visitee", pts: "+15 pts" },
                          { rule: "Email ouvert 3x", pts: "+10 pts" },
                          { rule: "Formulaire soumis", pts: "+25 pts" },
                        ].map((r) => (
                          <div key={r.rule} className="flex items-center justify-between text-[9px] py-1 border-b border-[#F2F2F2]">
                            <span className="text-[#999]">{r.rule}</span>
                            <span className="font-mono text-[#999]">{r.pts}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[9px] text-[#999]">Score total</span>
                        <span className="text-[14px] font-bold text-[#999]">70/100</span>
                      </div>
                      <div className="mt-2 rounded bg-[#FFF3E0] p-2">
                        <p className="text-[8px] text-[#E65100]">Precision du forecast : 35%. 1 deal sur 3 prevu comme &ldquo;gagne&rdquo; se concretise reellement.</p>
                      </div>
                    </div>
                    {/* AI-based */}
                    <div className="rounded-xl border border-[#6D00CC] bg-[#FAFBFF] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded bg-[#6D00CC]" />
                        <span className="text-[10px] font-semibold text-[#6D00CC]">Scoring IA Claude (apres)</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { signal: "Similarite clients fermes", weight: "94%", color: "#6D00CC" },
                          { signal: "Contenu echanges (sentiment)", weight: "89%", color: "#4B5EFC" },
                          { signal: "CFO present au 2e meeting", weight: "4.2x close", color: "#22C55E" },
                          { signal: "Question technique < 72h", weight: "3.5x close", color: "#FF7A59" },
                        ].map((s) => (
                          <div key={s.signal} className="flex items-center justify-between text-[9px] py-1 border-b border-[#F0EBFF]">
                            <span className="text-[#555]">{s.signal}</span>
                            <span className="font-mono font-medium" style={{ color: s.color }}>{s.weight}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[9px] text-[#6D00CC]">Score dynamique</span>
                        <span className="text-[14px] font-bold text-[#6D00CC]">87/100</span>
                      </div>
                      <div className="mt-2 rounded bg-[#F0EBFF] p-2">
                        <p className="text-[8px] text-[#6D00CC]">Precision du forecast : 88%. Le score evolue a chaque interaction, pas juste a chaque remplissage de formulaire.</p>
                      </div>
                    </div>
                  </div>

                  {/* Results stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { value: "88%", label: "precision du forecast (vs 35% avant)", color: "#22C55E" },
                      { value: "12%", label: "de marge d'erreur sur les previsions", color: "#6D00CC" },
                      { value: "+22%", label: "de win rate en concentrant l'effort sur les bons deals", color: "#FF7A59" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] text-center">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 5 : Agent 4 - Reporting automatise */}
              {/* ============================================ */}
              <section id="agent-reporting" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#4B5EFC] flex items-center justify-center text-white text-[10px] font-bold">4</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Agent 4 : Reporting automatise</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque lundi matin, dans des dizaines d&apos;entreprises B2B, un manager passe 2 a 3 heures a faire la meme chose : ouvrir HubSpot, exporter les chiffres de la semaine, les coller dans un Google Slides, calculer les variations, rediger un commentaire, et envoyer le tout par email ou le poster dans Slack. C&apos;est 3 heures de travail a zero valeur ajoutee. Et pourtant, c&apos;est indispensable pour piloter l&apos;activite.</p>
                    <p>L&apos;agent de reporting supprime entierement cette corvee. Chaque lundi a 8h, il se connecte a HubSpot via MCP, tire les KPIs de la semaine ecoulee : pipeline total, nouveaux deals crees, deals fermes (gagnes et perdus), montant total signe, activites par commercial (calls, emails, meetings), taux de conversion par etape. Il calcule les variations par rapport a la semaine precedente et au mois en cours.</p>
                    <p>Mais l&apos;agent ne se contente pas de sortir des chiffres. Claude analyse les donnees et produit un commentaire qualitatif. &ldquo;Le pipeline a augmente de 18% cette semaine, principalement grace a 3 deals entrants dans le segment PME. Attention : le taux de conversion Demo-to-Proposal a baisse de 8 points, ce qui pourrait indiquer un probleme de qualification en amont. Le deal Acme Corp (45K) n&apos;a eu aucune activite depuis 12 jours, il necessite une relance prioritaire.&rdquo;</p>
                    <p>Le rapport formate est poste automatiquement dans le channel Slack dedie. Les managers arrivent le lundi matin, ouvrent Slack, et ont toute la visibilite necessaire pour la weekly. Plus de copier-coller, plus de slides manuels, plus de 3h perdues. Le temps recupere est reinvesti en coaching, en strategie, en accompagnement des deals complexes.</p>
                  </div>

                  {/* Workflow diagram */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Workflow de l&apos;agent reporting</p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#6D00CC] mx-auto mb-2 flex items-center justify-center text-white text-[9px] font-bold">Mk</div>
                        <p className="text-[10px] font-semibold text-[#111]">Make trigger</p>
                        <p className="text-[9px] text-[#999]">Lundi 8h00</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#FF7A59] mx-auto mb-2 flex items-center justify-center text-white text-[9px] font-bold">Hs</div>
                        <p className="text-[10px] font-semibold text-[#111]">HubSpot</p>
                        <p className="text-[9px] text-[#999]">Extraction KPIs</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#D4A27F] mx-auto mb-2 flex items-center justify-center text-white text-[9px] font-bold">Cl</div>
                        <p className="text-[10px] font-semibold text-[#111]">Claude</p>
                        <p className="text-[9px] text-[#999]">Analyse et redaction</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#4B5EFC] mx-auto mb-2 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Slack</p>
                        <p className="text-[9px] text-[#999]">Rapport poste</p>
                      </div>
                    </div>

                    {/* Report mockup */}
                    <div className="mt-4 rounded-lg border border-[#E8E8E8] bg-white p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded bg-[#4B5EFC] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </div>
                        <span className="text-[10px] font-semibold text-[#111]">#sales-reporting -- Lundi 8h02</span>
                      </div>
                      <div className="rounded bg-[#F8F8F8] p-3 text-[9px] text-[#555] leading-[1.6] space-y-2">
                        <p className="font-semibold text-[#111]">Reporting hebdo -- Semaine du 24 au 30 mars 2026</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2">
                          {[
                            { kpi: "Pipeline total", val: "487K EUR", delta: "+18%", color: "#22C55E" },
                            { kpi: "Deals signes", val: "3 deals / 67K", delta: "+12%", color: "#22C55E" },
                            { kpi: "Nouveaux deals", val: "11 deals", delta: "+38%", color: "#22C55E" },
                            { kpi: "Conv. Demo>Proposal", val: "42%", delta: "-8pts", color: "#FF7A59" },
                          ].map((k) => (
                            <div key={k.kpi} className="rounded bg-white border border-[#F0F0F0] p-2 text-center">
                              <p className="text-[8px] text-[#999]">{k.kpi}</p>
                              <p className="text-[11px] font-bold text-[#111]">{k.val}</p>
                              <p className="text-[8px] font-semibold" style={{ color: k.color }}>{k.delta}</p>
                            </div>
                          ))}
                        </div>
                        <p><span className="font-semibold text-[#6D00CC]">Analyse Claude :</span> Pipeline en forte hausse grace au segment PME (+3 deals qualifies). Attention au taux Demo-to-Proposal en baisse : verifier la qualification BANT en amont. Deal Acme Corp (45K) inactif depuis 12 jours, relance prioritaire recommandee.</p>
                      </div>
                    </div>
                  </div>

                  {/* Results stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { value: "0h", label: "de reporting manuel par semaine (vs 3h avant)", color: "#4B5EFC" },
                      { value: "8h02", label: "rapport disponible chaque lundi", color: "#6D00CC" },
                      { value: "100%", label: "des KPIs couverts sans intervention humaine", color: "#22C55E" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] text-center">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 6 : Agent 5 - Detection du churn */}
              {/* ============================================ */}
              <section id="agent-churn" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">5</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Agent 5 : Detection du churn</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Dans un modele SaaS, perdre un client coute 5 a 7 fois plus cher que d&apos;en acquerir un nouveau. Pourtant, la majorite des entreprises B2B detectent le risque de churn trop tard, souvent quand le client annonce qu&apos;il ne renouvelle pas. A ce stade, il est generalement trop tard pour agir. Le client a deja pris sa decision.</p>
                    <p>L&apos;agent de detection du churn surveille en continu les signaux faibles qui precedent un depart. Il analyse quotidiennement plusieurs indicateurs : la baisse d&apos;utilisation du produit (connexions, features utilisees, volume d&apos;activite), l&apos;evolution des tickets support (hausse du nombre, ton des echanges, sujets recurrents), l&apos;absence de contact avec le CSM depuis X jours, l&apos;approche d&apos;une date de renouvellement sans interaction recente, le changement d&apos;interlocuteur (le champion quitte l&apos;entreprise).</p>
                    <p>Quand l&apos;agent detecte une combinaison de signaux a risque, il alerte le CSM dans Slack avec un brief contextuel complet. Pas juste &ldquo;attention, risque de churn&rdquo;. Un brief detaille : quels signaux ont ete detectes, depuis quand, quelle est la gravite estimee, et surtout quelles actions sont recommandees. &ldquo;Le client Acme a reduit son usage de 40% sur les 3 dernieres semaines. 3 tickets support non resolus depuis 8 jours. Renouvellement dans 45 jours. Action recommandee : call CSM + CEO cette semaine pour comprendre la situation et proposer un plan d&apos;action.&rdquo;</p>
                    <p>Le changement est radical. Sans l&apos;agent, le CSM detectait le risque en moyenne 10 jours avant le renouvellement, souvent trop tard. Avec l&apos;agent, la detection se fait 45 jours avant, ce qui laisse le temps de comprendre le probleme, de le resoudre, et de reconquerir le client. Chez un de nos clients SaaS de 200 comptes, l&apos;agent a identifie 12 comptes a risque au premier trimestre. Sur les 12, 9 ont ete sauves grace a une intervention precoce. Ca represente 340K EUR d&apos;ARR preserve.</p>
                  </div>

                  {/* Workflow diagram */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Workflow de l&apos;agent detection churn</p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#FF7A59] mx-auto mb-2 flex items-center justify-center text-white text-[9px] font-bold">Hs</div>
                        <p className="text-[10px] font-semibold text-[#111]">HubSpot + Produit</p>
                        <p className="text-[9px] text-[#999]">Donnees usage et support</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#6D00CC] mx-auto mb-2 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Claude</p>
                        <p className="text-[9px] text-[#999]">Analyse signaux faibles</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#FF7A59] mx-auto mb-2 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Alerte CSM</p>
                        <p className="text-[9px] text-[#999]">Brief + actions recommandees</p>
                      </div>
                    </div>

                    {/* Churn alert mockup */}
                    <div className="mt-4 rounded-lg border border-[#FF7A59] bg-white p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded bg-[#FF7A59] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </div>
                        <span className="text-[10px] font-semibold text-[#FF7A59]">Alerte churn -- Compte &ldquo;NovaTech&rdquo; (ARR : 38K EUR)</span>
                      </div>
                      <div className="space-y-2">
                        <div className="rounded bg-[#FFF3E0] border border-[#FFE0B2] p-2">
                          <span className="text-[9px] font-semibold text-[#FF7A59]">Signaux detectes</span>
                          <ul className="text-[8px] text-[#666] mt-1 space-y-0.5">
                            <li>- Usage en baisse de 40% sur 3 semaines</li>
                            <li>- 3 tickets support non resolus (8 jours)</li>
                            <li>- Aucun contact CSM depuis 28 jours</li>
                            <li>- Renouvellement dans 47 jours</li>
                          </ul>
                        </div>
                        <div className="rounded bg-[#F0EBFF] border border-[#E0D4FF] p-2">
                          <span className="text-[9px] font-semibold text-[#6D00CC]">Actions recommandees par Claude</span>
                          <ul className="text-[8px] text-[#555] mt-1 space-y-0.5">
                            <li>1. Call CSM + CEO cette semaine (priorite haute)</li>
                            <li>2. Resoudre les 3 tickets support en 48h</li>
                            <li>3. Proposer une session de re-onboarding sur les features sous-utilisees</li>
                            <li>4. Preparer une offre de renouvellement avec valeur ajoutee</li>
                          </ul>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#FF7A59]" />
                          <span className="text-[9px] font-semibold text-[#FF7A59]">Risque estime : eleve</span>
                          <span className="text-[8px] text-[#999] ml-2">Score de risque : 78/100</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "45j", label: "de detection anticipee (vs 10j sans agent)", color: "#6D00CC" },
                      { value: "75%", label: "des comptes a risque sauves", color: "#22C55E" },
                      { value: "340K", label: "EUR d'ARR preserve sur un trimestre", color: "#FF7A59" },
                      { value: "24h", label: "delai d'intervention apres alerte", color: "#4B5EFC" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] text-center">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 7 : Architecture technique */}
              {/* ============================================ */}
              <section id="architecture-technique" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;architecture technique (simplifiee)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La question qu&apos;on recoit systematiquement : &ldquo;Il faut une equipe data science pour deployer ca ?&rdquo; Non. L&apos;architecture est volontairement simple. Pas de modele custom a entrainer, pas de GPU a louer, pas de pipeline de donnees complexe. Quatre briques, c&apos;est tout.</p>
                    <p>Claude fait le raisonnement. C&apos;est le cerveau de l&apos;agent. Il analyse les donnees, comprend le contexte, genere les outputs (briefs, rapports, scores, alertes). On utilise l&apos;API Claude, pas un modele custom. Ca signifie qu&apos;on beneficie automatiquement des ameliorations d&apos;Anthropic sans rien faire. Quand Claude devient meilleur, tous les agents deviennent meilleurs.</p>
                    <p>MCP (Model Context Protocol) fait la connexion. C&apos;est le protocole qui permet a Claude de se connecter directement a vos outils : lire et ecrire dans HubSpot, envoyer des messages Slack, interroger des bases de donnees, appeler des API tierces. Sans MCP, il faudrait construire des integrations custom pour chaque outil. Avec MCP, Claude parle nativement a votre stack.</p>
                    <p>Make fait l&apos;orchestration. C&apos;est le chef d&apos;orchestre qui decide quand l&apos;agent se declenche (nouveau lead, fin de call, lundi 8h, quotidiennement), dans quel ordre les etapes s&apos;executent, et comment les erreurs sont gerees. Make est un outil no-code, ce qui signifie que la configuration et la maintenance ne necessitent pas de developpeur.</p>
                    <p>HubSpot est la source de verite. Toutes les donnees passent par le CRM, toutes les mises a jour reviennent dans le CRM. Les agents ne creent pas un silo de donnees parallele. Ils enrichissent et exploitent ce qui existe deja dans votre stack.</p>
                  </div>

                  {/* Architecture diagram */}
                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#111] px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#6D00CC]" />
                        <span className="text-[12px] font-semibold text-white">Architecture agent IA -- Vue simplifiee</span>
                      </div>
                    </div>
                    <div className="bg-white p-5">
                      {/* Central layout */}
                      <div className="space-y-4">
                        {/* Layer 1: Triggers */}
                        <div>
                          <p className="text-[9px] font-semibold text-[#999] uppercase tracking-wider mb-2">Declencheurs</p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              { label: "Nouveau lead", trigger: "Webhook HubSpot", color: "#FF7A59" },
                              { label: "Fin de call", trigger: "Webhook Claap", color: "#22C55E" },
                              { label: "Lundi 8h", trigger: "Cron Make", color: "#4B5EFC" },
                              { label: "Quotidien", trigger: "Cron Make", color: "#6D00CC" },
                            ].map((t) => (
                              <div key={t.label} className="rounded-lg border border-[#F0F0F0] bg-[#FAFAFA] p-2 text-center">
                                <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ backgroundColor: t.color }} />
                                <p className="text-[9px] font-semibold text-[#111]">{t.label}</p>
                                <p className="text-[8px] text-[#BBB]">{t.trigger}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Arrow down */}
                        <div className="flex justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#DDD]"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>

                        {/* Layer 2: Make orchestration */}
                        <div className="rounded-xl border border-[#6D00CC] bg-[#FAFBFF] p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded bg-[#6D00CC] flex items-center justify-center text-white text-[8px] font-bold">Mk</div>
                            <span className="text-[10px] font-semibold text-[#6D00CC]">Make -- Orchestration</span>
                          </div>
                          <p className="text-[9px] text-[#777]">Routing, sequencing, gestion d&apos;erreurs, retry, logs</p>
                        </div>

                        {/* Arrow down */}
                        <div className="flex justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#DDD]"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>

                        {/* Layer 3: Claude + MCP */}
                        <div className="rounded-xl border border-[#D4A27F] bg-[#FDF8F4] p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded bg-[#D4A27F] flex items-center justify-center text-white text-[8px] font-bold">Cl</div>
                            <span className="text-[10px] font-semibold text-[#D4A27F]">Claude (API) + MCP</span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                            {[
                              { action: "Analyse", desc: "Comprend les donnees" },
                              { action: "Raisonnement", desc: "Tire des conclusions" },
                              { action: "Generation", desc: "Produit les outputs" },
                              { action: "Connexion", desc: "Lit/ecrit dans les outils" },
                            ].map((a) => (
                              <div key={a.action} className="rounded bg-white border border-[#F0E8E0] p-2 text-center">
                                <p className="text-[9px] font-semibold text-[#111]">{a.action}</p>
                                <p className="text-[8px] text-[#999]">{a.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Arrow down */}
                        <div className="flex justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#DDD]"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>

                        {/* Layer 4: Outputs */}
                        <div>
                          <p className="text-[9px] font-semibold text-[#999] uppercase tracking-wider mb-2">Outputs</p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              { label: "HubSpot", desc: "MAJ fiches CRM", color: "#FF7A59" },
                              { label: "Slack", desc: "Rapports et alertes", color: "#4B5EFC" },
                              { label: "Email", desc: "Notifications CSM", color: "#22C55E" },
                              { label: "Dashboard", desc: "Scores et KPIs", color: "#6D00CC" },
                            ].map((o) => (
                              <div key={o.label} className="rounded-lg border border-[#F0F0F0] bg-[#FAFAFA] p-2 text-center">
                                <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ backgroundColor: o.color }} />
                                <p className="text-[9px] font-semibold text-[#111]">{o.label}</p>
                                <p className="text-[8px] text-[#BBB]">{o.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key point */}
                  <div className="mt-5 p-4 rounded-xl bg-[#F0EBFF] border border-[#E0D4FF]">
                    <p className="text-[11px] font-semibold text-[#6D00CC] mb-2">Ce qu&apos;on n&apos;utilise pas</p>
                    <div className="space-y-1 text-[11px] text-[#555]">
                      <p>Pas de modele custom a entrainer. Pas de GPU a louer. Pas de data scientist necessaire. Pas de pipeline ETL complexe. Claude est un modele general qui sait deja analyser, raisonner et generer. On le connecte a vos outils, on lui donne un contexte precis, et il produit des resultats. Le plus dur dans le deploiement, ce n&apos;est pas la technique. C&apos;est de definir clairement ce que l&apos;agent doit faire et avec quelles donnees.</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 8 : Combien ca coute */}
              {/* ============================================ */}
              <section id="couts-reels" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Combien ca coute, vraiment</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On va etre transparents parce que c&apos;est la question que tout le monde pose et que personne ne repond clairement. Les agents IA qu&apos;on deploie ont des couts d&apos;infrastructure tres faibles. Pas de licence a 50K EUR/an, pas de contrat SaaS supplementaire. Les briques sont simples et les prix sont publics.</p>
                    <p>L&apos;API Claude represente le cout principal. Il depend du volume d&apos;utilisation : nombre de leads enrichis, nombre de calls analyses, frequence du reporting. Pour un client typique avec 200-300 leads par mois, 80-100 calls par semaine, et un reporting hebdomadaire, le cout de l&apos;API Claude se situe entre 50 et 200 EUR par mois. Plus le volume augmente, plus le cout augmente, mais de maniere lineaire et previsible.</p>
                    <p>Make coute entre 30 et 100 EUR par mois selon le nombre de scenarios et la frequence d&apos;execution. Pour 5 agents avec des declenchements quotidiens, on est generalement sur le plan Teams a environ 80 EUR/mois. HubSpot, votre client l&apos;a deja. Pas de licence supplementaire. Clay, si utilise pour l&apos;enrichissement, ajoute 50 a 150 EUR/mois selon le volume de credits.</p>
                    <p>Au total, le cout d&apos;infrastructure mensuel se situe entre 150 et 500 EUR pour les 5 agents. C&apos;est le prix d&apos;un diner d&apos;equipe. Comparez ca au cout d&apos;un recrutement pour absorber la meme charge de travail : 45 a 55K EUR/an de salaire brut, plus les charges, plus l&apos;onboarding, plus le management. Les agents ne demandent pas de conges, ne sont pas malades, et ne partent pas chez la concurrence.</p>
                    <p>Le ROI typique : le cout de l&apos;agent est amorti en 2 a 3 semaines par le temps gagne. A partir de la, c&apos;est du benefice net.</p>
                  </div>

                  {/* Cost breakdown */}
                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#111] px-5 py-3">
                      <span className="text-[12px] font-semibold text-white">Cout mensuel -- 5 agents IA (estimation typique)</span>
                    </div>
                    <div className="bg-white p-5">
                      <div className="space-y-3">
                        {[
                          { item: "API Claude (Anthropic)", range: "50 - 200 EUR/mois", desc: "Selon volume de leads, calls, reporting", color: "#D4A27F" },
                          { item: "Make (orchestration)", range: "30 - 100 EUR/mois", desc: "Plan Teams, 5 scenarios actifs", color: "#6D00CC" },
                          { item: "Clay (enrichissement)", range: "50 - 150 EUR/mois", desc: "Credits d'enrichissement, optionnel", color: "#4B5EFC" },
                          { item: "HubSpot", range: "0 EUR", desc: "Deja en place chez le client", color: "#FF7A59" },
                        ].map((c) => (
                          <div key={c.item} className="flex items-center justify-between py-2 border-b border-[#F8F8F8] last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: c.color }} />
                              <div>
                                <span className="text-[11px] font-medium text-[#111]">{c.item}</span>
                                <p className="text-[9px] text-[#BBB]">{c.desc}</p>
                              </div>
                            </div>
                            <span className="text-[12px] font-bold" style={{ color: c.color }}>{c.range}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-[#E8E8E8] pt-3 mt-3 flex items-center justify-between">
                        <span className="text-[12px] font-semibold text-[#111]">Total mensuel</span>
                        <span className="text-[16px] font-bold text-[#6D00CC]">150 - 500 EUR/mois</span>
                      </div>
                    </div>
                  </div>

                  {/* ROI comparison */}
                  <div className="mt-5 p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Comparaison : agents IA vs recrutement</p>
                    <div className="space-y-2 text-[11px] text-[#666]">
                      <div className="flex justify-between"><span>5 agents IA (cout annuel infrastructure)</span><span className="font-semibold text-[#6D00CC]">1 800 - 6 000 EUR</span></div>
                      <div className="flex justify-between"><span>1 profil ops junior (salaire + charges annuel)</span><span className="font-semibold text-[#FF7A59]">45 000 - 55 000 EUR</span></div>
                      <div className="flex justify-between"><span>Delai de mise en place agents</span><span className="font-semibold text-[#22C55E]">2 - 4 semaines</span></div>
                      <div className="flex justify-between"><span>Delai recrutement + onboarding</span><span className="font-semibold text-[#999]">3 - 6 mois</span></div>
                      <div className="border-t border-[#E8E8E8] pt-2 mt-2 flex justify-between">
                        <span className="font-semibold text-[#111]">ROI amorti en</span>
                        <span className="font-bold text-[#22C55E] text-[13px]">2 - 3 semaines</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 9 : Les prerequis */}
              {/* ============================================ */}
              <section id="prerequis" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les prerequis pour que ca marche</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On serait malhonnetes si on disait que les agents IA fonctionnent partout, tout le temps, sans condition. Ils ne fonctionnent pas. Il y a trois prerequis non negociables, et ils suivent un ordre precis : Process, Data, IA. C&apos;est toujours dans cet ordre, jamais l&apos;inverse.</p>
                    <p>Premier prerequis : des processus clairs. Si votre pipeline de vente n&apos;a pas d&apos;etapes definies, si vos commerciaux vendent chacun a leur maniere, si personne ne sait ce qu&apos;est un MQL vs un SQL, l&apos;agent IA va automatiser le chaos. Et automatiser le chaos, c&apos;est juste faire des erreurs plus vite. Le processus doit etre defini et adopte par l&apos;equipe avant de deployer un agent. Ca ne veut pas dire parfait. Ca veut dire clair.</p>
                    <p>Deuxieme prerequis : des donnees propres. Garbage in, garbage out. Si votre CRM est rempli de fiches en double, de champs vides, de stages de deal incoherents, l&apos;agent va produire des resultats faux. L&apos;enrichissement sera biaise, le scoring sera imprecis, le reporting sera trompe. Un nettoyage de donnees est souvent necessaire avant le deploiement. Ca prend generalement 1 a 2 semaines.</p>
                    <p>Troisieme prerequis : une equipe formee. L&apos;agent produit des outputs, mais c&apos;est l&apos;equipe qui agit dessus. Si le commercial ne lit pas le brief d&apos;enrichissement, si le manager ne consulte pas le scoring, si le CSM ignore les alertes de churn, l&apos;agent ne sert a rien. La formation et l&apos;adoption sont aussi importantes que la configuration technique.</p>
                  </div>

                  {/* Process > Data > IA sequence */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">La sequence non negociable</p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex-1 w-full rounded-lg border border-[#FF7A59] bg-white p-4 text-center">
                        <div className="w-10 h-10 rounded-full bg-[#FF7A59] mx-auto mb-2 flex items-center justify-center text-white text-[12px] font-bold">1</div>
                        <p className="text-[12px] font-semibold text-[#111]">Process</p>
                        <p className="text-[9px] text-[#999] mt-1">Pipeline defini, etapes claires, roles attribues</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#4B5EFC] bg-white p-4 text-center">
                        <div className="w-10 h-10 rounded-full bg-[#4B5EFC] mx-auto mb-2 flex items-center justify-center text-white text-[12px] font-bold">2</div>
                        <p className="text-[12px] font-semibold text-[#111]">Data</p>
                        <p className="text-[9px] text-[#999] mt-1">CRM propre, pas de doublons, champs remplis</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      <div className="sm:hidden w-px h-4 bg-[#E8E8E8]" />
                      <div className="flex-1 w-full rounded-lg border border-[#6D00CC] bg-white p-4 text-center">
                        <div className="w-10 h-10 rounded-full bg-[#6D00CC] mx-auto mb-2 flex items-center justify-center text-white text-[12px] font-bold">3</div>
                        <p className="text-[12px] font-semibold text-[#111]">IA</p>
                        <p className="text-[9px] text-[#999] mt-1">Agents deployes sur des fondations solides</p>
                      </div>
                    </div>
                  </div>

                  {/* Warning cards */}
                  <div className="mt-5 space-y-3">
                    {[
                      { num: "01", title: "Sans process clair", consequence: "L'agent automatise le chaos. Les erreurs vont plus vite, pas les resultats.", color: "#FF7A59" },
                      { num: "02", title: "Sans donnees propres", consequence: "L'agent produit des analyses fausses. Garbage in, garbage out.", color: "#4B5EFC" },
                      { num: "03", title: "Sans equipe formee", consequence: "L'agent travaille dans le vide. Personne n'utilise les outputs.", color: "#6D00CC" },
                    ].map((w) => (
                      <div key={w.num} className="p-4 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA]">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold" style={{ backgroundColor: w.color }}>{w.num}</div>
                          <span className="text-[12px] font-semibold text-[#111]">{w.title}</span>
                        </div>
                        <p className="text-[11px] text-[#666] pl-10">{w.consequence}</p>
                      </div>
                    ))}
                  </div>

                  {/* Link to Process Data IA article */}
                  <div className="mt-5 p-4 rounded-xl bg-[#F0EBFF] border border-[#E0D4FF]">
                    <p className="text-[11px] text-[#555]">
                      On a ecrit un article complet sur cette sequence :
                      <Link href="/blog/process-data-ia-ordre-revops" className="text-[#6D00CC] font-semibold hover:underline ml-1">
                        Process, Data, IA : pourquoi l&apos;ordre compte en RevOps
                      </Link>
                    </p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 10 : Comment on deploie (dark) */}
              {/* ============================================ */}
              <section id="deploiement-ceres" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#222]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[12px] font-bold">C</div>
                    <h2 className="text-[17px] font-semibold text-white">Comment on les deploie chez Ceres</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>On ne deploie pas 5 agents d&apos;un coup. On commence toujours par celui qui a le ROI le plus immediat pour votre situation specifique. Chez un client avec un gros volume de leads, c&apos;est l&apos;enrichissement. Chez un client avec une equipe de CSM, c&apos;est la detection du churn. Chez un client qui perd des heures en reporting, c&apos;est l&apos;agent 4. Le point de depart depend de votre contexte, pas d&apos;un modele generique.</p>
                    <p>Le processus de deploiement suit 4 etapes. L&apos;audit de stack (1-2 jours) : on cartographie vos outils, vos donnees, vos processus, et on identifie les opportunites d&apos;automatisation par agent IA. On evalue la qualite des donnees et on definit les prerequis eventuels. L&apos;identification du premier agent (inclus dans l&apos;audit) : on priorise par ROI immediat et facilite de deploiement. L&apos;objectif est d&apos;avoir un premier resultat mesurable en moins de 4 semaines.</p>
                    <p>La configuration et le deploiement (2-4 semaines par agent) : on construit l&apos;agent, on le connecte a votre stack, on le teste sur des cas reels, et on l&apos;active en production. La formation (incluse) : on forme les utilisateurs (commerciaux, managers, CSM) a exploiter les outputs de l&apos;agent. Un agent qui n&apos;est pas utilise est un agent inutile.</p>
                    <p>A M+1, on mesure les resultats. Temps gagne, precision amelioree, deals sauves, churn evite. Si les resultats sont la, on passe a l&apos;agent suivant. Sinon, on ajuste. Pas de contrat longue duree, pas d&apos;engagement de 12 mois. Si ca ne marche pas, on se quitte. C&apos;est aussi simple que ca.</p>
                  </div>

                  {/* Deployment timeline */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {[
                      { step: "Semaine 1-2", title: "Audit de stack", desc: "Cartographie outils, donnees, process. Identification du premier agent.", color: "#FF7A59", icon: "S1" },
                      { step: "Semaine 2-3", title: "Configuration", desc: "Construction de l'agent, connexion a la stack, tests sur cas reels.", color: "#4B5EFC", icon: "S2" },
                      { step: "Semaine 3-4", title: "Deploiement", desc: "Activation en production, formation des equipes, monitoring.", color: "#22C55E", icon: "S3" },
                      { step: "M+1", title: "Mesure", desc: "Resultats mesures, ajustements, decision sur le prochain agent.", color: "#6D00CC", icon: "M1" },
                    ].map((s) => (
                      <div key={s.icon} className="rounded-xl p-4 border border-white/10 bg-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[9px] font-bold" style={{ backgroundColor: s.color }}>{s.icon}</div>
                          <span className="text-[10px] text-white/30">{s.step}</span>
                        </div>
                        <p className="text-[12px] font-semibold text-white mb-1">{s.title}</p>
                        <p className="text-[10px] text-white/40 leading-[1.5]">{s.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Key numbers */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "2-4 sem", label: "par agent deploye", color: "#FF7A59" },
                      { value: "M+1", label: "premiers resultats mesurables", color: "#22C55E" },
                      { value: "0", label: "engagement longue duree", color: "#4B5EFC" },
                      { value: "250+", label: "clients accompagnes", color: "#6D00CC" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-[1.4]">{stat.label}</div>
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
                <div className="rounded-2xl p-6 md:p-10 text-center" style={{ background: "linear-gradient(135deg, #6D00CC, #4B0E8A)" }}>
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-3">Quel agent IA deployer en premier chez vous ?</h2>
                  <p className="text-[13px] text-white/60 mb-6 max-w-[420px] mx-auto">On identifie l&apos;agent au ROI le plus immediat pour votre situation. Audit de stack, configuration en 2-4 semaines, resultats mesurables a M+1. Pas de contrat longue duree.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[#6D00CC] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#6D00CC]" />Reserver un audit gratuit
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
