"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MCP : connecter Claude a votre CRM, Slack et tous vos outils",
  description: "Guide complet sur le Model Context Protocol (MCP) d'Anthropic. Comment connecter Claude a HubSpot, Slack, Notion, Google Calendar et vos outils B2B. 3 cas d'usage concrets, guide technique simplifie, limites et approche Ceres pour deployer MCP en entreprise.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/mcp-connecter-claude-crm-outils" },
  articleSection: "IA & Automatisation",
  wordCount: 3200,
  inLanguage: "fr",
};

const sections = [
  { id: "ia-deconnectees", title: "Le probleme : des IA deconnectees" },
  { id: "mcp-definition", title: "MCP, c'est quoi exactement" },
  { id: "serveurs-disponibles", title: "Les serveurs MCP disponibles" },
  { id: "cas-crm-temps-reel", title: "Cas 1 : CRM en temps reel" },
  { id: "cas-automatisation", title: "Cas 2 : Automatiser les operations" },
  { id: "cas-analyste-cross", title: "Cas 3 : Analyste cross-outils" },
  { id: "claude-code-mcp", title: "Claude Code + MCP" },
  { id: "guide-technique", title: "Mise en place (guide technique)" },
  { id: "limites-precautions", title: "Limites et precautions" },
  { id: "approche-ceres", title: "Notre approche chez Ceres" },
];

const relatedArticles = [
  { title: "Comment utiliser l'IA dans votre processus commercial B2B", slug: "ia-processus-commercial-vente-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Claude vs ChatGPT pour les equipes commerciales", slug: "claude-vs-chatgpt-equipes-commerciales", category: "IA & Automatisation", color: "#4B5EFC" },
  { title: "CRM et IA : comment l'intelligence artificielle transforme votre CRM", slug: "crm-ia-intelligence-artificielle", category: "IA & Automatisation", color: "#FF7A59" },
];

export default function MCPConnecterClaudeCRMArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("ia-deconnectees");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "12%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "24%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "36%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "50%", width: 260, height: 260, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "64%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "78%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "90%", width: 260, height: 260, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=MCP%20%3A%20connecter%20Claude%20a%20votre%20CRM%2C%20Slack%20et%20tous%20vos%20outils&url=https://ceres.agency/blog/mcp-connecter-claude-crm-outils" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/mcp-connecter-claude-crm-outils" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">MCP : connecter Claude a vos outils</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">18 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                MCP : connecter Claude a votre CRM, Slack et tous vos outils
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Claude est l&apos;IA la plus capable du marche, mais tant qu&apos;elle reste isolee de vos outils, elle ne peut que repondre a des questions generiques. Le Model Context Protocol (MCP) change la donne : il permet a Claude d&apos;acceder a votre CRM, vos conversations Slack, votre calendrier et vos bases de donnees. Voici comment ca fonctionne, ce que ca change concretement, et comment le deployer dans votre equipe.
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
              {/* Section 1 : Le probleme, des IA deconnectees */}
              {/* ============================================ */}
              <section id="ia-deconnectees" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le probleme : des IA deconnectees de votre realite</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Claude est probablement l&apos;IA generative la plus avancee disponible aujourd&apos;hui. Elle raisonne, synthetise, redige, analyse. Mais posez-lui une question sur votre pipeline commercial, et elle ne pourra rien vous dire. Demandez-lui de verifier les notes de votre dernier call, et elle ne sait pas de quoi vous parlez. C&apos;est le paradoxe de 2026 : une IA capable de resoudre des problemes complexes, mais qui ne connait rien de votre entreprise.</p>
                    <p>Le probleme n&apos;est pas l&apos;intelligence de l&apos;IA. C&apos;est son isolement. Quand vous utilisez Claude dans un navigateur, vous travaillez dans un silo. Vous copiez-collez des donnees depuis HubSpot, vous resumez manuellement vos conversations Slack, vous retranscrivez ce que dit votre CRM. C&apos;est laborieux, et ca ne passe pas a l&apos;echelle.</p>
                    <p>Le vrai potentiel de l&apos;IA se deverrouille quand elle accede a votre contexte business en temps reel. Pas un contexte generique sur &ldquo;les bonnes pratiques de vente B2B&rdquo;, mais VOS donnees : vos contacts, vos deals, vos conversations, vos taches. C&apos;est exactement ce que permet le Model Context Protocol.</p>
                    <p>Jusqu&apos;a recemment, connecter une IA a des outils externes necessitait du developpement custom : des APIs, des middlewares, de l&apos;authentification. Chaque integration etait un projet a part entiere. MCP change cette equation de maniere fondamentale.</p>
                  </div>

                  {/* Illustration: silo vs connected */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded bg-[#E8E8E8]" />
                        <span className="text-[10px] font-semibold text-[#999]">Avant MCP</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { tool: "Claude", status: "Isole, pas d'acces aux donnees" },
                          { tool: "HubSpot", status: "Donnees en silo" },
                          { tool: "Slack", status: "Conversations non exploitees" },
                          { tool: "Calendrier", status: "Aucun lien avec l'IA" },
                        ].map((r) => (
                          <div key={r.tool} className="flex items-center justify-between text-[9px] py-1 border-b border-[#F2F2F2]">
                            <span className="text-[#555]">{r.tool}</span>
                            <span className="text-[#CCC]">{r.status}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 rounded bg-[#FFF3E0] p-2">
                        <p className="text-[8px] text-[#E65100]">Copier-coller permanent. Contexte perdu. Pas d&apos;automatisation possible.</p>
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#6D00CC] bg-[#FAFBFF] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-4 h-4 rounded bg-[#6D00CC]" />
                        <span className="text-[10px] font-semibold text-[#6D00CC]">Avec MCP</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { tool: "Claude + HubSpot", status: "Lecture/ecriture CRM", color: "#6D00CC" },
                          { tool: "Claude + Slack", status: "Analyse conversations", color: "#4B5EFC" },
                          { tool: "Claude + Calendar", status: "Contexte reunions", color: "#22C55E" },
                          { tool: "Claude + PostgreSQL", status: "Requetes sur vos data", color: "#6D00CC" },
                        ].map((s) => (
                          <div key={s.tool} className="flex items-center justify-between text-[9px] py-1 border-b border-[#F0EBFF]">
                            <span className="text-[#555]">{s.tool}</span>
                            <span className="font-medium" style={{ color: s.color }}>{s.status}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 rounded bg-[#F0EBFF] p-2">
                        <p className="text-[8px] text-[#6D00CC]">Claude accede a tout votre contexte. Analyse, actions et rapports en temps reel.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 2 : MCP, c'est quoi exactement */}
              {/* ============================================ */}
              <section id="mcp-definition" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">1</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">MCP, c&apos;est quoi exactement</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>MCP signifie Model Context Protocol. C&apos;est un standard ouvert cree par Anthropic, la societe derriere Claude. Son principe est simple : definir une maniere universelle pour qu&apos;une IA puisse interagir avec des outils externes, lire des donnees et executer des actions.</p>
                    <p>L&apos;analogie la plus juste, c&apos;est celle de l&apos;USB. Avant l&apos;USB, chaque peripherique avait son propre connecteur. Imprimantes, claviers, souris, scanners : chaque marque, chaque appareil, un cable different. L&apos;USB a cree un standard unique. Vous branchez, ca marche. MCP fait la meme chose pour l&apos;IA : un protocole unique pour connecter Claude a n&apos;importe quel outil.</p>
                    <p>Ce n&apos;est pas une API custom que vous devez developper. Ce n&apos;est pas un middleware a maintenir. Ce n&apos;est pas un plugin proprietaire comme ceux de ChatGPT. C&apos;est un protocole open-source, avec une specification publique, que n&apos;importe qui peut implementer. Un &ldquo;serveur MCP&rdquo; est un petit programme qui expose les fonctionnalites d&apos;un outil (lire des contacts dans HubSpot, envoyer un message sur Slack, creer un evenement dans Google Calendar) dans un format que Claude comprend nativement.</p>
                    <p>La difference avec les function calls classiques ou les plugins ChatGPT est fondamentale. Les function calls necessitent que le developpeur definisse chaque fonction manuellement, dans chaque application. Les plugins ChatGPT sont un ecosysteme ferme, controle par OpenAI. MCP est decentralise : n&apos;importe qui peut creer un serveur MCP pour n&apos;importe quel outil, et Claude peut les utiliser immediatement.</p>
                    <p>En pratique, MCP fonctionne en trois couches. Le client (Claude Desktop ou Claude Code) se connecte a un ou plusieurs serveurs MCP. Chaque serveur expose des &ldquo;tools&rdquo; (des actions que Claude peut appeler) et des &ldquo;resources&rdquo; (des donnees que Claude peut lire). Claude choisit automatiquement quel outil utiliser en fonction de votre demande.</p>
                  </div>

                  {/* Architecture MCP diagram */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Architecture MCP simplifiee</p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex-1 w-full rounded-lg border border-[#6D00CC] bg-white p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-[#D4A27F] mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">Cl</span>
                        </div>
                        <p className="text-[10px] font-semibold text-[#111]">Claude</p>
                        <p className="text-[9px] text-[#999]">Client MCP</p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6D00CC" strokeWidth="2" className="shrink-0 hidden sm:block"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                        <span className="text-[8px] text-[#6D00CC] font-medium hidden sm:block">MCP</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6D00CC" strokeWidth="2" className="shrink-0 hidden sm:block rotate-180"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      </div>
                      <div className="flex-1 w-full space-y-2">
                        {[
                          { name: "Serveur HubSpot", desc: "Contacts, deals, activites", color: "#FF7A59" },
                          { name: "Serveur Slack", desc: "Channels, messages, users", color: "#4B5EFC" },
                          { name: "Serveur Notion", desc: "Pages, databases, blocs", color: "#111" },
                        ].map((srv) => (
                          <div key={srv.name} className="rounded-lg border border-[#E8E8E8] bg-white p-2 flex items-center gap-2">
                            <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center" style={{ background: srv.color }}>
                              <span className="text-white text-[7px] font-bold">{srv.name.split(" ")[1]?.slice(0, 2)}</span>
                            </div>
                            <div>
                              <p className="text-[9px] font-semibold text-[#111]">{srv.name}</p>
                              <p className="text-[8px] text-[#999]">{srv.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comparison table */}
                  <div className="mt-4 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-3">MCP vs alternatives</p>
                    <div className="space-y-1">
                      {[
                        { feature: "Standard ouvert", mcp: true, plugins: false, functions: false },
                        { feature: "Decentralise", mcp: true, plugins: false, functions: true },
                        { feature: "Multi-outils simultanes", mcp: true, plugins: true, functions: true },
                        { feature: "Lecture + ecriture", mcp: true, plugins: true, functions: true },
                        { feature: "Zero code pour l'utilisateur", mcp: true, plugins: true, functions: false },
                        { feature: "Fonctionne en local", mcp: true, plugins: false, functions: false },
                      ].map((row) => (
                        <div key={row.feature} className="grid grid-cols-4 gap-2 text-[9px] py-1.5 border-b border-[#F2F2F2]">
                          <span className="text-[#555]">{row.feature}</span>
                          <span className="text-center font-medium" style={{ color: row.mcp ? "#22C55E" : "#CCC" }}>{row.mcp ? "Oui" : "Non"}</span>
                          <span className="text-center" style={{ color: row.plugins ? "#999" : "#CCC" }}>{row.plugins ? "Oui" : "Non"}</span>
                          <span className="text-center" style={{ color: row.functions ? "#999" : "#CCC" }}>{row.functions ? "Oui" : "Non"}</span>
                        </div>
                      ))}
                      <div className="grid grid-cols-4 gap-2 text-[8px] text-[#999] pt-1">
                        <span />
                        <span className="text-center font-semibold text-[#6D00CC]">MCP</span>
                        <span className="text-center">Plugins GPT</span>
                        <span className="text-center">Function calls</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 3 : Les serveurs MCP disponibles */}
              {/* ============================================ */}
              <section id="serveurs-disponibles" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#4B5EFC] flex items-center justify-center text-white text-[10px] font-bold">2</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Les serveurs MCP disponibles aujourd&apos;hui</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;ecosysteme MCP grandit rapidement. Plutot que de lister les centaines de serveurs existants, concentrons-nous sur ceux qui comptent vraiment pour une equipe B2B. Pour chacun, ce qui importe n&apos;est pas qu&apos;il &ldquo;se connecte&rdquo;, c&apos;est ce que Claude peut concretement faire avec.</p>
                  </div>

                  {/* Server cards */}
                  <div className="mt-5 space-y-3">
                    {[
                      {
                        name: "HubSpot",
                        badge: "Officiel",
                        color: "#FF7A59",
                        icon: "Hs",
                        actions: [
                          "Lire et rechercher des contacts, entreprises et deals",
                          "Analyser le pipeline (montants, etapes, probabilites)",
                          "Creer et mettre a jour des proprietes sur les fiches",
                          "Identifier des segments et des anomalies dans le CRM",
                        ],
                      },
                      {
                        name: "Slack",
                        badge: "Officiel",
                        color: "#4B5EFC",
                        icon: "Sl",
                        actions: [
                          "Lire les messages d'un channel ou d'un thread",
                          "Rechercher des conversations par mots-cles",
                          "Envoyer des messages ou des brouillons",
                          "Analyser le ton et les sujets recurents d'un channel",
                        ],
                      },
                      {
                        name: "Notion",
                        badge: "Officiel",
                        color: "#111111",
                        icon: "No",
                        actions: [
                          "Lire des pages et des bases de donnees",
                          "Creer et modifier des pages structurees",
                          "Chercher dans tout votre workspace",
                          "Generer des rapports depuis vos databases Notion",
                        ],
                      },
                      {
                        name: "Google Calendar",
                        badge: "Officiel",
                        color: "#22C55E",
                        icon: "GC",
                        actions: [
                          "Consulter les evenements de la semaine",
                          "Trouver des creneaux libres pour planifier",
                          "Croiser les reunions avec les donnees CRM",
                          "Creer des evenements avec contexte pre-rempli",
                        ],
                      },
                      {
                        name: "Gmail",
                        badge: "Officiel",
                        color: "#D4A27F",
                        icon: "Gm",
                        actions: [
                          "Lire et rechercher des emails par sujet ou contact",
                          "Analyser les echanges recents avec un prospect",
                          "Rediger des brouillons contextualises",
                          "Verifier l'historique de communication avant un call",
                        ],
                      },
                      {
                        name: "GitHub",
                        badge: "Officiel",
                        color: "#6C5CE7",
                        icon: "Gh",
                        actions: [
                          "Lire les issues, PRs et discussions",
                          "Analyser l'activite d'un repository",
                          "Creer des issues depuis une analyse",
                          "Suivre les deployments et les releases",
                        ],
                      },
                      {
                        name: "PostgreSQL",
                        badge: "Community",
                        color: "#4B5EFC",
                        icon: "PG",
                        actions: [
                          "Executer des requetes SQL en lecture",
                          "Explorer la structure de vos tables",
                          "Generer des analyses ad-hoc sur vos donnees",
                          "Croiser les donnees de votre base avec votre CRM",
                        ],
                      },
                      {
                        name: "Fichiers locaux",
                        badge: "Built-in",
                        color: "#6D00CC",
                        icon: "FS",
                        actions: [
                          "Lire et analyser des fichiers CSV, JSON, Markdown",
                          "Parcourir une arborescence de dossiers",
                          "Generer des fichiers de rapport",
                          "Traiter des exports CRM ou analytics en local",
                        ],
                      },
                    ].map((server) => (
                      <div key={server.name} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-white text-[9px] font-bold" style={{ background: server.color }}>
                            {server.icon}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[12px] font-semibold text-[#111]">{server.name}</span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded-md border border-[#E5E5E5] text-[#999]">{server.badge}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {server.actions.map((action) => (
                            <div key={action} className="flex items-start gap-1.5 text-[9px] text-[#666]">
                              <div className="w-1 h-1 rounded-full mt-1 shrink-0" style={{ background: server.color }} />
                              <span>{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le point important : ces serveurs ne sont pas des connecteurs passifs. Claude ne se contente pas de lire des donnees. Il les comprend, les analyse et peut agir dessus. La difference entre &ldquo;se connecter a HubSpot&rdquo; et &ldquo;demander a Claude d&apos;identifier les deals sans activite depuis 15 jours&rdquo; est la meme qu&apos;entre avoir une bibliotheque et avoir un analyste qui la connait par coeur.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 4 : Cas d'usage 1 - CRM temps reel */}
              {/* ============================================ */}
              <section id="cas-crm-temps-reel" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">3</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Cas d&apos;usage 1 : Claude lit votre CRM en temps reel</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le premier cas d&apos;usage, et le plus immediat, c&apos;est la connexion directe entre Claude et HubSpot via le serveur MCP officiel. Une fois configure, Claude peut lire vos contacts, vos deals, vos entreprises et toutes leurs proprietes, exactement comme un membre de votre equipe qui ouvrirait le CRM.</p>
                    <p>Mais Claude va plus loin que la simple consultation. Il peut analyser votre pipeline, identifier des patterns que vous ne voyez pas dans les dashboards standard, segmenter des contacts selon des criteres complexes, et trouver des anomalies. Le tout en langage naturel : vous posez une question, Claude interroge votre CRM et vous repond avec des donnees factuelles.</p>
                    <p>Exemple concret : chez l&apos;un de nos clients, on a demande a Claude &ldquo;Quels contacts ont telecharge notre guide RevOps mais n&apos;ont jamais ete contactes par un commercial ?&rdquo;. En une seule requete, Claude a identifie 130 contacts correspondants, avec leur nom, leur entreprise, la date de telechargement et leur score de lead. Cette recherche aurait necessite la creation d&apos;une liste active dans HubSpot, avec des filtres combines, et probablement 20 minutes de manipulation. Claude l&apos;a fait en 8 secondes.</p>
                    <p>Un autre exemple : &ldquo;Quels sont les deals en phase de negociation depuis plus de 30 jours sans aucune note ?&rdquo;. Claude identifie les deals endormis que personne ne suit. C&apos;est du revenue qui dort dans votre pipeline, et sans cette analyse, personne ne s&apos;en rend compte avant le forecast mensuel.</p>
                  </div>

                  {/* CRM query mockup */}
                  <div className="mt-6 rounded-xl bg-[#111] border border-[#333] p-5">
                    <p className="text-[10px] font-semibold text-[#666] uppercase tracking-wider mb-4">Conversation Claude + HubSpot MCP</p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#333] shrink-0 flex items-center justify-center text-[8px] text-[#999] font-bold mt-0.5">U</div>
                        <div className="rounded-lg bg-[#1A1A1A] border border-[#333] p-3 flex-1">
                          <p className="text-[10px] text-white/80">Combien de contacts ont telecharge le guide RevOps mais n&apos;ont jamais eu de call avec un commercial ?</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#D4A27F] shrink-0 flex items-center justify-center text-[8px] text-white font-bold mt-0.5">Cl</div>
                        <div className="rounded-lg bg-[#1A1A1A] border border-[#2D2540] p-3 flex-1">
                          <p className="text-[9px] text-[#666] mb-2 font-mono">Recherche dans HubSpot via MCP...</p>
                          <p className="text-[10px] text-white/80 mb-2">J&apos;ai identifie <strong className="text-[#6D00CC]">130 contacts</strong> qui correspondent a ces criteres. Voici la repartition :</p>
                          <div className="grid grid-cols-3 gap-2 mb-2">
                            <div className="rounded bg-[#222] p-2 text-center">
                              <p className="text-[14px] font-bold text-[#6D00CC]">130</p>
                              <p className="text-[8px] text-[#666]">Contacts identifies</p>
                            </div>
                            <div className="rounded bg-[#222] p-2 text-center">
                              <p className="text-[14px] font-bold text-[#4B5EFC]">67%</p>
                              <p className="text-[8px] text-[#666]">PME (50-200 emp.)</p>
                            </div>
                            <div className="rounded bg-[#222] p-2 text-center">
                              <p className="text-[14px] font-bold text-[#22C55E]">42j</p>
                              <p className="text-[8px] text-[#666]">Age moyen du lead</p>
                            </div>
                          </div>
                          <p className="text-[9px] text-white/60">Recommandation : ces leads sont qualifies (telechargement = intent signal) mais froids. Une sequence d&apos;emailing personnalisee basee sur le guide telecharge aurait un taux d&apos;ouverture estime entre 35-45%.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ce qui change fondamentalement, c&apos;est la vitesse d&apos;acces a l&apos;insight. Avant MCP, obtenir ce type d&apos;analyse necessitait soit un ops qui maitrise les filtres HubSpot, soit un reporting custom. Avec MCP, n&apos;importe quel membre de l&apos;equipe peut poser la question en francais et obtenir une reponse en quelques secondes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 5 : Cas d'usage 2 - Automatisation */}
              {/* ============================================ */}
              <section id="cas-automatisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#D4A27F] flex items-center justify-center text-white text-[10px] font-bold">4</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Cas d&apos;usage 2 : Claude automatise vos operations</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Lire des donnees, c&apos;est bien. Agir dessus, c&apos;est mieux. Le serveur MCP HubSpot ne se limite pas a la lecture : Claude peut creer des taches, mettre a jour des proprietes, enrichir des fiches et modifier des deal stages. C&apos;est la qu&apos;on passe de l&apos;analyse a l&apos;execution.</p>
                    <p>Prenons un cas concret. Chaque lundi, votre ops passe 2 a 3 heures a nettoyer le CRM : verifier que les deals ont un montant renseigne, que les contacts ont une propriete &ldquo;source&rdquo; remplie, que les entreprises en cours ont un owner assigne. Avec MCP, Claude fait cette verification en 2 minutes. Mieux : il peut corriger les problemes qu&apos;il identifie.</p>
                    <p>&ldquo;Trouve tous les deals en cours sans montant renseigne et assigne-leur un montant estime base sur la taille de l&apos;entreprise et notre panier moyen pour ce segment.&rdquo; Claude execute la requete, identifie 23 deals, calcule un montant estime pour chacun, et vous presente le resultat pour validation avant d&apos;ecrire dans le CRM.</p>
                    <p>Le mot cle ici, c&apos;est &ldquo;validation&rdquo;. On ne laisse pas Claude modifier le CRM en roue libre. Pour les actions de lecture et d&apos;analyse, Claude agit en autonomie. Pour les actions d&apos;ecriture (mise a jour, creation, suppression), il presente toujours le resultat a l&apos;utilisateur avant d&apos;executer. C&apos;est un filet de securite indispensable.</p>
                  </div>

                  {/* Operations workflow */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Taches automatisables via MCP</p>
                    <div className="space-y-2">
                      {[
                        { task: "Verification des deals sans montant", before: "45 min / semaine", after: "2 min", saving: "95%", color: "#6D00CC" },
                        { task: "Enrichissement proprietes contacts", before: "1h30 / semaine", after: "5 min", saving: "94%", color: "#4B5EFC" },
                        { task: "Assignation owner sur entreprises", before: "30 min / semaine", after: "1 min", saving: "97%", color: "#22C55E" },
                        { task: "Nettoyage doublons et donnees vides", before: "1h / semaine", after: "3 min", saving: "95%", color: "#D4A27F" },
                      ].map((t) => (
                        <div key={t.task} className="flex items-center gap-3 rounded-lg border border-[#E8E8E8] bg-white p-3">
                          <div className="w-1.5 h-10 rounded-full shrink-0" style={{ background: t.color }} />
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-medium text-[#111]">{t.task}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-[9px] text-[#999] line-through">{t.before}</span>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                              <span className="text-[9px] font-medium" style={{ color: t.color }}>{t.after}</span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-[14px] font-bold" style={{ color: t.color }}>-{t.saving}</p>
                            <p className="text-[8px] text-[#999]">de temps</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-lg bg-[#F0EBFF] border border-[#E0D4FF] p-3">
                      <p className="text-[9px] text-[#6D00CC] font-semibold mb-1">Total estime</p>
                      <p className="text-[9px] text-[#555]">3h45 d&apos;operations manuelles par semaine ramenees a 11 minutes. Soit 15 heures par mois rendues a votre equipe pour des taches a plus forte valeur ajoutee.</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un point important sur la securite : le serveur MCP HubSpot respecte les permissions de l&apos;utilisateur connecte. Si votre compte HubSpot n&apos;a pas le droit de supprimer des contacts, Claude ne pourra pas le faire non plus. C&apos;est la meme logique que quand vous donnez un acces CRM a un nouveau collaborateur : vous definissez son perimetre, et MCP s&apos;y conforme.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 6 : Cas d'usage 3 - Analyste cross-outils */}
              {/* ============================================ */}
              <section id="cas-analyste-cross" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#4B5EFC] flex items-center justify-center text-white text-[10px] font-bold">5</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Cas d&apos;usage 3 : Claude comme analyste cross-outils</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est la ou MCP devient veritablement unique. Claude peut etre connecte a plusieurs serveurs MCP en simultanee. HubSpot, Slack, Google Calendar, Gmail, le tout en meme temps. Et il peut croiser les informations entre ces sources pour repondre a des questions qu&apos;aucun outil individuel ne peut traiter.</p>
                    <p>&ldquo;Quels deals ont une reunion prevue cette semaine mais aucune activite email depuis 10 jours ?&rdquo; Pour repondre, Claude interroge Google Calendar (reunions de la semaine), HubSpot (deals associes aux contacts concernes) et Gmail (derniere activite email avec ces contacts). Il synthetise le tout en une reponse structuree avec des recommandations d&apos;action.</p>
                    <p>Essayez de faire cette analyse manuellement. Vous ouvrez votre calendrier, notez les reunions. Vous ouvrez HubSpot, cherchez le deal associe a chaque contact. Vous ouvrez Gmail, verifiez le dernier email echange. Pour 10 reunions, ca prend facilement 30 minutes. Claude le fait en moins de 15 secondes.</p>
                    <p>Autre exemple : &ldquo;Dans le channel #sales-team sur Slack, quels prospects ont ete mentionnes cette semaine, et quel est le statut de leur deal dans HubSpot ?&rdquo; Claude lit les messages Slack, identifie les noms de prospects, les croise avec les fiches HubSpot, et vous donne un tableau de synthese. C&apos;est le genre d&apos;intelligence operationnelle qui n&apos;existait pas avant MCP, parce que personne n&apos;avait le temps de le faire manuellement.</p>
                  </div>

                  {/* Cross-tool analysis mockup */}
                  <div className="mt-6 rounded-xl bg-[#111] border border-[#333] p-5">
                    <p className="text-[10px] font-semibold text-[#666] uppercase tracking-wider mb-4">Analyse cross-outils en temps reel</p>
                    <div className="flex gap-3 mb-4">
                      <div className="w-5 h-5 rounded-full bg-[#D4A27F] shrink-0 flex items-center justify-center text-[8px] text-white font-bold mt-0.5">Cl</div>
                      <div className="flex-1">
                        <p className="text-[9px] text-[#666] mb-2 font-mono">Sources interrogees : HubSpot + Google Calendar + Gmail</p>
                        <p className="text-[10px] text-white/80 mb-3">3 deals ont une reunion cette semaine sans activite email recente :</p>
                        <div className="space-y-2">
                          {[
                            { company: "DataFlow SAS", deal: "Migration CRM", amount: "24 000 EUR", meeting: "Jeudi 14h", lastEmail: "Il y a 12 jours", risk: "Elevee" },
                            { company: "NexTech", deal: "Audit RevOps", amount: "8 500 EUR", meeting: "Vendredi 10h", lastEmail: "Il y a 11 jours", risk: "Moyenne" },
                            { company: "CloudPeak", deal: "HubSpot Onboarding", amount: "15 000 EUR", meeting: "Mercredi 16h", lastEmail: "Il y a 14 jours", risk: "Elevee" },
                          ].map((d) => (
                            <div key={d.company} className="rounded-lg bg-[#1A1A1A] border border-[#333] p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-semibold text-white">{d.company}</span>
                                <span className={`text-[8px] px-1.5 py-0.5 rounded ${d.risk === "Elevee" ? "bg-[#3D1515] text-[#FF6B6B]" : "bg-[#3D3015] text-[#FFB86B]"}`}>{d.risk}</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-[8px]">
                                <div>
                                  <span className="text-[#666]">Deal</span>
                                  <p className="text-white/70">{d.deal} - {d.amount}</p>
                                </div>
                                <div>
                                  <span className="text-[#666]">Reunion</span>
                                  <p className="text-white/70">{d.meeting}</p>
                                </div>
                                <div className="col-span-2">
                                  <span className="text-[#666]">Dernier email</span>
                                  <p className="text-[#FF6B6B]">{d.lastEmail}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 rounded-lg bg-[#1A2E1A] border border-[#254025] p-2">
                          <p className="text-[8px] text-[#22C55E] font-semibold mb-1">Action recommandee</p>
                          <p className="text-[8px] text-[#999]">Envoyer un email de pre-reunion a chacun de ces contacts avant mercredi. Inclure un recap du dernier echange et l&apos;ordre du jour prevu. Les deals sans activite email avant une reunion ont 40% moins de chances de progresser.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 7 : Claude Code + MCP */}
              {/* ============================================ */}
              <section id="claude-code-mcp" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">6</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Claude Code + MCP : la combinaison qui change tout</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Claude Desktop est pratique pour les conversations ponctuelles. Mais Claude Code pousse le concept beaucoup plus loin. Claude Code est un environnement en ligne de commande ou Claude peut non seulement converser, mais aussi executer du code, lire et ecrire des fichiers, et utiliser tous les serveurs MCP configures. C&apos;est la difference entre un chatbot et un coworker.</p>
                    <p>Avec Claude Code + MCP, vous pouvez demander a Claude de generer un rapport hebdomadaire complet de votre pipeline : il interroge HubSpot, recupere les metriques cles, genere un fichier Markdown structure avec des tableaux et des analyses, et le sauvegarde dans votre dossier partage. Le tout en une seule commande.</p>
                    <p>Vous pouvez aussi lui demander de creer un script d&apos;analyse personnalise. &ldquo;Ecris un script qui, chaque lundi, recupere les deals crees la semaine precedente, les enrichit avec les donnees de LinkedIn via Clay, et genere un CSV avec les 20 plus prometteurs classes par score.&rdquo; Claude ecrit le code, le teste, et vous avez un workflow automatise en 15 minutes.</p>
                    <p>Un autre cas qu&apos;on utilise frequemment chez Ceres : l&apos;audit CRM automatise. On connecte Claude Code au HubSpot du client via MCP, et on lui demande d&apos;analyser la qualite des donnees, l&apos;utilisation des proprietes, les workflows actifs, les taux de completion des fiches. En 30 minutes, on obtient un rapport d&apos;audit detaille qui prenait auparavant 2 jours de travail manuel.</p>
                  </div>

                  {/* Claude Code mockup */}
                  <div className="mt-6 rounded-xl bg-[#111] border border-[#333] p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                      </div>
                      <span className="text-[9px] text-[#666] font-mono ml-2">Claude Code</span>
                    </div>
                    <div className="space-y-2 font-mono text-[9px]">
                      <p className="text-[#22C55E]">$ claude</p>
                      <p className="text-[#666]">Claude Code v1.0.35 | MCP: hubspot, slack, google-calendar</p>
                      <p className="text-white/60 mt-2">{'>'} Genere un rapport hebdomadaire de notre pipeline avec les metriques cles</p>
                      <div className="mt-2 rounded bg-[#1A1A1A] border border-[#333] p-3">
                        <p className="text-[#D4A27F] mb-2">Analyse en cours via MCP HubSpot...</p>
                        <p className="text-white/60 mb-1">- Deals actifs : 47 (valeur totale : 892 000 EUR)</p>
                        <p className="text-white/60 mb-1">- Nouveaux deals cette semaine : 8 (+23% vs semaine precedente)</p>
                        <p className="text-white/60 mb-1">- Deals sans activite depuis 7j : 12 (valeur a risque : 156 000 EUR)</p>
                        <p className="text-white/60 mb-1">- Taux de conversion qualification {'>'} proposition : 34%</p>
                        <p className="text-white/60 mb-1">- Closing prevu ce mois : 5 deals, 124 000 EUR</p>
                        <p className="text-[#22C55E] mt-3">Rapport sauvegarde dans ./reports/pipeline-2026-W14.md</p>
                      </div>
                    </div>
                  </div>

                  {/* Use cases grid */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { title: "Rapport hebdo", desc: "Pipeline, metriques, alertes. Genere en 2 min chaque lundi.", color: "#6D00CC" },
                      { title: "Audit CRM", desc: "Qualite des donnees, proprietes, workflows. 30 min au lieu de 2 jours.", color: "#4B5EFC" },
                      { title: "Scripts custom", desc: "Automatisations sur mesure. Claude ecrit, teste et livre le code.", color: "#D4A27F" },
                    ].map((uc) => (
                      <div key={uc.title} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <div className="w-2 h-2 rounded-sm mx-auto mb-2" style={{ background: uc.color }} />
                        <p className="text-[11px] font-semibold text-[#111] mb-1">{uc.title}</p>
                        <p className="text-[9px] text-[#999] leading-[1.4]">{uc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 8 : Guide technique simplifie */}
              {/* ============================================ */}
              <section id="guide-technique" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#D4A27F] flex items-center justify-center text-white text-[10px] font-bold">7</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Comment mettre en place MCP (guide technique simplifie)</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Bonne nouvelle : vous n&apos;avez pas besoin d&apos;etre developpeur pour configurer MCP. L&apos;installation prend entre 10 et 20 minutes selon le nombre de serveurs que vous voulez connecter. Voici les etapes.</p>
                  </div>

                  {/* Steps */}
                  <div className="mt-5 space-y-3">
                    {[
                      {
                        step: "1",
                        title: "Installer Claude Desktop ou Claude Code",
                        desc: "Claude Desktop est l'application de bureau (macOS, Windows). Claude Code est la version en ligne de commande, plus puissante. Les deux supportent MCP. Pour debuter, Claude Desktop est le plus accessible.",
                        color: "#6D00CC",
                      },
                      {
                        step: "2",
                        title: "Ouvrir le fichier de configuration",
                        desc: "Le fichier claude_desktop_config.json se trouve dans les parametres de Claude Desktop (Settings > Developer > Edit Config). C'est un fichier JSON ou vous declarez les serveurs MCP que vous voulez utiliser.",
                        color: "#4B5EFC",
                      },
                      {
                        step: "3",
                        title: "Ajouter un serveur MCP",
                        desc: "Pour chaque outil, vous ajoutez un bloc dans le fichier de configuration avec le nom du serveur et les informations de connexion. Les serveurs officiels (HubSpot, Slack, Notion) gerent l'authentification OAuth automatiquement.",
                        color: "#D4A27F",
                      },
                      {
                        step: "4",
                        title: "Redemarrer Claude et tester",
                        desc: "Apres avoir sauvegarde le fichier, redemarrez Claude. Les serveurs MCP apparaissent dans l'interface. Posez une question qui necessite l'acces a l'outil connecte pour verifier que tout fonctionne.",
                        color: "#22C55E",
                      },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-white text-[10px] font-bold" style={{ background: s.color }}>
                          {s.step}
                        </div>
                        <div className="flex-1 rounded-xl border border-[#F2F2F2] p-4">
                          <p className="text-[11px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[10px] text-[#666] leading-[1.6]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Config mockup */}
                  <div className="mt-5 rounded-xl bg-[#111] border border-[#333] p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] text-[#666] font-mono">claude_desktop_config.json</span>
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#222] text-[#666]">exemple simplifie</span>
                    </div>
                    <pre className="text-[9px] text-white/70 font-mono leading-[1.8] overflow-x-auto">
{`{
  "mcpServers": {
    "hubspot": {
      "command": "npx",
      "args": ["-y", "@hubspot/mcp-server"]
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@slack/mcp-server"]
    },
    "google-calendar": {
      "command": "npx",
      "args": ["-y", "@google/calendar-mcp"]
    }
  }
}`}
                    </pre>
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le point critique a retenir : une fois configure, MCP est transparent. Vous ne gerez pas les connexions, vous ne pensez pas aux APIs. Vous posez des questions a Claude, et il utilise les bons outils automatiquement. C&apos;est cette simplicite qui permet une adoption rapide par des equipes non-techniques.</p>
                    <p>Pour les equipes qui veulent aller plus loin, Claude Code offre encore plus de flexibilite : vous pouvez configurer les serveurs MCP dans un fichier de projet, ce qui permet a toute l&apos;equipe de partager la meme configuration. Mais pour la majorite des cas d&apos;usage, Claude Desktop avec 2 ou 3 serveurs MCP suffit largement.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 9 : Limites et precautions */}
              {/* ============================================ */}
              <section id="limites-precautions" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#4B5EFC] flex items-center justify-center text-white text-[10px] font-bold">8</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Les limites et precautions</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On serait malhonnetes de vous presenter MCP comme une solution magique sans limites. Il y a des points de vigilance reels, et les ignorer serait une erreur.</p>
                  </div>

                  {/* Limits cards */}
                  <div className="mt-5 space-y-3">
                    {[
                      {
                        title: "Securite et acces",
                        content: "Quand vous connectez Claude a votre CRM, vous lui donnez acces a des donnees sensibles. Il faut definir clairement qui dans l'equipe a le droit d'utiliser MCP, avec quels serveurs, et avec quels niveaux de permission. On recommande de commencer en lecture seule, et de n'activer l'ecriture qu'apres une phase de test.",
                        color: "#FF7A59",
                      },
                      {
                        title: "Couts d'utilisation",
                        content: "Chaque requete MCP consomme des tokens Claude. Une analyse complexe qui interroge HubSpot, Slack et Gmail peut utiliser 10 000 a 50 000 tokens. Avec le plan Claude Pro (20$/mois), vous avez un quota genereux mais pas illimite. Pour un usage intensif en equipe, le plan Team ou Enterprise est recommande.",
                        color: "#D4A27F",
                      },
                      {
                        title: "Fiabilite des chiffres",
                        content: "Claude peut halluciner des chiffres. Quand il vous dit 'votre pipeline represente 892 000 EUR', il faut verifier que ce chiffre vient bien des donnees HubSpot et pas d'une extrapolation. Les serveurs MCP bien implementes retournent des donnees brutes, mais l'interpretation par Claude peut parfois etre inexacte.",
                        color: "#4B5EFC",
                      },
                      {
                        title: "Gouvernance et validation",
                        content: "Qui a le droit de demander a Claude de modifier des deals dans le CRM ? Qui valide les actions d'ecriture ? Il faut definir un cadre clair avant le deploiement. On recommande une politique simple : lecture libre pour toute l'equipe, ecriture avec validation par un ops ou un manager.",
                        color: "#6D00CC",
                      },
                      {
                        title: "Disponibilite et dependance",
                        content: "MCP depend de la disponibilite de Claude et des APIs des outils connectes. Si l'API HubSpot est en maintenance, Claude ne peut plus acceder au CRM. Ce n'est pas un remplacement de vos outils : c'est une couche d'intelligence supplementaire. Vos processus doivent fonctionner sans MCP, MCP les accelere.",
                        color: "#6C5CE7",
                      },
                    ].map((limit) => (
                      <div key={limit.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-sm" style={{ background: limit.color }} />
                          <span className="text-[11px] font-semibold text-[#111]">{limit.title}</span>
                        </div>
                        <p className="text-[10px] text-[#666] leading-[1.6]">{limit.content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ces limites sont reelles mais geables. La cle, c&apos;est de deployer MCP progressivement : un serveur a la fois, avec un perimetre clair, et une phase de test avant de generaliser a toute l&apos;equipe. C&apos;est exactement l&apos;approche qu&apos;on suit chez Ceres.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 10 : Notre approche chez Ceres */}
              {/* ============================================ */}
              <section id="approche-ceres" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[10px] font-bold">9</span>
                    <h2 className="text-[17px] font-semibold text-white">Notre approche chez Ceres</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>On deploie MCP chez nos clients B2B depuis ses premieres versions. Ce n&apos;est pas un sujet theorique pour nous : c&apos;est notre quotidien. On utilise MCP en interne pour gerer nos propres operations, et on l&apos;implemente chez nos clients pour transformer leur maniere de travailler.</p>
                    <p>Notre methode suit quatre etapes. D&apos;abord, l&apos;audit de la stack : on cartographie les outils que votre equipe utilise au quotidien (CRM, messagerie, calendrier, gestion de projet, bases de donnees). Ensuite, l&apos;identification des serveurs MCP pertinents : tous les outils n&apos;ont pas besoin d&apos;etre connectes, on se concentre sur ceux qui generent le plus de valeur. Puis la configuration : on met en place les serveurs, on teste les connexions, on verifie les permissions. Enfin, la formation : on apprend a votre equipe a poser les bonnes questions a Claude pour exploiter pleinement MCP.</p>
                    <p>Le resultat : Claude devient un membre de l&apos;equipe qui a acces au meme contexte que tout le monde. Il lit le CRM, suit les conversations, connait le planning. La difference, c&apos;est qu&apos;il ne dort jamais, ne rate aucun detail, et peut analyser des volumes de donnees qu&apos;aucun humain ne pourrait traiter manuellement.</p>
                    <p>On ne vend pas de la technologie. On vend du temps recupere, des insights actionables, et des operations qui tournent sans friction. MCP est l&apos;outil, pas la fin. La fin, c&apos;est que votre equipe passe moins de temps a chercher de l&apos;information et plus de temps a prendre des decisions.</p>
                  </div>

                  {/* Ceres method */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { step: "01", label: "Audit stack", desc: "Cartographie outils", color: "#FF7A59" },
                      { step: "02", label: "Selection serveurs", desc: "Priorisation valeur", color: "#6D00CC" },
                      { step: "03", label: "Configuration", desc: "Setup + permissions", color: "#4B5EFC" },
                      { step: "04", label: "Formation", desc: "Adoption equipe", color: "#22C55E" },
                    ].map((s) => (
                      <div key={s.step} className="rounded-xl bg-[#1A1A1A] border border-[#333] p-3 text-center">
                        <p className="text-[18px] font-bold mb-1" style={{ color: s.color }}>{s.step}</p>
                        <p className="text-[10px] font-semibold text-white mb-0.5">{s.label}</p>
                        <p className="text-[8px] text-[#666]">{s.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Ce qui nous differencie, c&apos;est qu&apos;on pratique ce qu&apos;on recommande. Chaque outil qu&apos;on deploie chez un client, on l&apos;utilise nous-memes d&apos;abord. On connait les limites, les astuces, les patterns qui fonctionnent. Et on reste disponible apres le deploiement pour ajuster, former, et optimiser au fil du temps.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#6D00CC] to-[#4B0E8A] p-6 md:p-8 text-center">
                <h3 className="text-[17px] font-semibold text-white mb-3">Pret a connecter Claude a votre stack ?</h3>
                <p className="text-[13px] text-white/70 leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on deploie MCP chez les equipes B2B qui veulent passer de &ldquo;utiliser l&apos;IA&rdquo; a &ldquo;travailler avec l&apos;IA&rdquo;. Un audit gratuit de 30 minutes pour identifier les serveurs MCP les plus utiles pour votre stack.</p>
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
