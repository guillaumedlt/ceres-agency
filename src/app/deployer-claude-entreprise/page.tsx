"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const sections = [
  { id: "pourquoi-claude", title: "Pourquoi Claude" },
  { id: "prerequis", title: "Les prerequis" },
  { id: "claude-code", title: "Claude Code" },
  { id: "mcp", title: "MCP : la connexion" },
  { id: "cas-usage-sales", title: "Cas d'usage Sales" },
  { id: "cas-usage-marketing", title: "Cas d'usage Marketing" },
  { id: "cas-usage-cs", title: "Cas d'usage CS" },
  { id: "cas-usage-ops", title: "Cas d'usage Ops" },
  { id: "couts", title: "Les couts reels" },
  { id: "securite", title: "Securite" },
  { id: "pieges", title: "Les pieges a eviter" },
  { id: "demarrer", title: "Par ou commencer" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Comment deployer Claude en entreprise : le guide complet 2026",
      description: "Guide complet pour deployer Claude et Claude Code dans votre entreprise B2B. Prerequis, cas d'usage par departement, MCP, couts, securite, pieges a eviter.",
      url: "https://ceres.agency/deployer-claude-entreprise",
      publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      author: { "@type": "Person", name: "Guillaume Delachet" },
      inLanguage: "fr",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
        { "@type": "ListItem", position: 2, name: "Deployer Claude en entreprise", item: "https://ceres.agency/deployer-claude-entreprise" },
      ],
    },
  ],
};

export default function DeployerClaudeEntreprisePage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-claude");

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
        <div className="h-full bg-[#D4A27F] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "3%", width: 320, height: 320, borderRadius: "50%", background: "#D4A27F", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "10%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "20%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "42%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "54%", width: 300, height: 300, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "66%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "78%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "88%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.06, filter: "blur(70px)" }} />

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
                        ? "border-[#D4A27F] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Comment%20d%C3%A9ployer%20Claude%20en%20entreprise%20%E2%80%93%20Guide%20complet&url=https://ceres.agency/deployer-claude-entreprise" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/deployer-claude-entreprise" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-[700px]">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <span className="text-[#666]">Deployer Claude en entreprise</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Guide complet</Badge>
                <span className="text-[11px] text-[#CCC]">25 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Comment deployer Claude en entreprise
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le guide le plus complet en francais pour deployer Claude et Claude Code dans vos operations B2B. Prerequis, cas d&apos;usage par departement, MCP, couts, securite, pieges a eviter. Base sur notre experience chez 250+ clients.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>Avril 2026</span>
              </div>
            </header>

            <article>
              {/* ───── Section 1 : Pourquoi Claude ───── */}
              <section id="pourquoi-claude" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pourquoi Claude pour les entreprises B2B</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Claude (Anthropic) s&apos;est impose comme le LLM de reference pour les operations B2B. Pas parce qu&apos;il est a la mode. Parce que trois avantages structurels le distinguent pour un usage professionnel.</p>
                  </div>

                  {/* 3 advantage cards */}
                  <div className="grid grid-cols-1 gap-3 mt-6 mb-6">
                    {[
                      { title: "Raisonnement sur les donnees structurees", desc: "Analyse de pipelines, tableaux CRM, donnees financieres. Claude produit des analyses fiables la ou d'autres LLMs hallucinent.", color: "#D4A27F" },
                      { title: "Fenetre de contexte massive", desc: "200K tokens. Donnez-lui votre pipeline entier, vos transcriptions de calls, votre base produits. Il garde le contexte.", color: "#4B5EFC" },
                      { title: "Claude Code + MCP", desc: "Un ecosysteme d'execution sans equivalent. Claude ne repond pas, il agit dans vos outils.", color: "#6D00CC" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                        <div className="flex items-start gap-3">
                          <div className="shrink-0 mt-1.5 w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                          <div>
                            <h3 className="text-[13px] font-semibold text-[#111] mb-1">{item.title}</h3>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Insight box */}
                  <div className="rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">L&apos;IA generique repond a des questions. Claude deploye en entreprise execute des taches, analyse vos donnees en temps reel, et produit des resultats directement dans vos outils.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 2 : Les prerequis ───── */}
              <section id="prerequis" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les prerequis avant de deployer</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Deployer Claude sans preparation, c&apos;est comme deployer un ERP sans nettoyer la data. Ca amplifie le chaos au lieu de le resoudre.</p>
                  </div>

                  {/* 4 prerequis cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 mb-6">
                    {[
                      { title: "Donnees propres", desc: "Base CRM sans doublons, champs standardises, enrichis. Claude sur des donnees sales = resultats sales.", color: "#22C55E" },
                      { title: "Process documentes", desc: "Si vos deal stages n'ont pas de definition claire, Claude ne pourra pas scorer vos deals correctement.", color: "#4B5EFC" },
                      { title: "Stack connectee", desc: "Les outils doivent avoir des APIs accessibles. HubSpot, Salesforce, Pipedrive : OK. Un Excel partage sur un drive : pas OK.", color: "#FF7A59" },
                      { title: "Sponsor interne", desc: "Quelqu'un qui porte le projet. L'adoption IA echoue quand personne n'est responsable.", color: "#6D00CC" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                        <div className="flex items-start gap-3">
                          <div className="shrink-0 mt-1.5 w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                          <div>
                            <h3 className="text-[13px] font-semibold text-[#111] mb-1">{item.title}</h3>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-[13px] text-[#555] leading-[1.75]">
                    <Link href="/fondation-data" className="text-[#D4A27F] font-medium hover:underline">En savoir plus sur la Fondation Data</Link>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 3 : Claude Code ───── */}
              <section id="claude-code" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Claude Code : comprendre la difference</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>La confusion la plus frequente : confondre Claude (le chatbot) et Claude Code (l&apos;environnement d&apos;execution).</p>
                  </div>

                  {/* Comparison grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {/* Claude */}
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#999]" />
                        <h3 className="text-[14px] font-semibold text-[#111]">Claude (claude.ai)</h3>
                      </div>
                      <div className="space-y-2.5">
                        {[
                          "Conversation par prompt",
                          "Repond a des questions",
                          "Pas de connexion a vos outils",
                          "Limite a une fenetre de chat",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <div className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#CCC]" />
                            <p className="text-[12px] text-[#777] leading-[1.5]">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#E8E8E8]">
                        <p className="text-[11px] text-[#999]"><span className="font-medium text-[#666]">Ideal pour :</span> brainstorming, redaction ponctuelle, analyse de texte</p>
                      </div>
                    </div>

                    {/* Claude Code */}
                    <div className="rounded-xl border border-[#D4A27F]/30 bg-[#D4A27F]/5 p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#D4A27F]" />
                        <h3 className="text-[14px] font-semibold text-[#111]">Claude Code</h3>
                      </div>
                      <div className="space-y-2.5">
                        {[
                          "Environnement d'execution",
                          "Lit vos fichiers, execute du code",
                          "Se connecte a vos outils via MCP",
                          "Cree des outils, des rapports, des agents",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <div className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#D4A27F]" />
                            <p className="text-[12px] text-[#777] leading-[1.5]">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#D4A27F]/20">
                        <p className="text-[11px] text-[#999]"><span className="font-medium text-[#666]">Ideal pour :</span> automatisation, reporting, agents IA, outils internes</p>
                      </div>
                    </div>
                  </div>

                  {/* Insight box */}
                  <div className="rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">Claude Code est ce qui fait la difference entre &quot;utiliser l&apos;IA&quot; et &quot;deployer l&apos;IA&quot;. C&apos;est le passage de l&apos;experimentation a la production.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 4 : MCP ───── */}
              <section id="mcp" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">MCP : connecter Claude a vos outils</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Le Model Context Protocol (MCP) est le standard cree par Anthropic pour connecter Claude a n&apos;importe quel outil externe.</p>
                  </div>

                  {/* MCP servers list */}
                  <div className="rounded-xl bg-[#111] p-5 mb-6">
                    <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-4">Serveurs MCP disponibles</p>
                    <div className="space-y-3">
                      {[
                        { name: "HubSpot", desc: "Contacts, deals, proprietes, workflows", color: "#FF7A59" },
                        { name: "Slack", desc: "Messages, channels, notifications", color: "#4B5EFC" },
                        { name: "Google Calendar", desc: "Meetings, disponibilites", color: "#22C55E" },
                        { name: "Gmail", desc: "Emails, drafts", color: "#EF4444" },
                        { name: "Notion", desc: "Pages, bases de donnees", color: "#111", border: true },
                        { name: "GitHub", desc: "Code, issues, pull requests", color: "#6C5CE7" },
                        { name: "PostgreSQL", desc: "Requetes directes sur vos bases", color: "#4B5EFC" },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center gap-3">
                          <div className="shrink-0 w-2 h-2 rounded-sm" style={{ backgroundColor: item.color, border: item.border ? "1px solid rgba(255,255,255,0.3)" : "none" }} />
                          <p className="text-[12px] text-white/50 leading-[1.5]"><span className="text-white/70 font-medium">{item.name}</span> : {item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p><span className="font-semibold text-[#111]">Configuration : 15 minutes</span> pour connecter un premier outil. On edite un fichier de configuration, on ajoute les credentials, Claude a acces.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 5 : Cas d'usage Sales ───── */}
              <section id="cas-usage-sales" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#FF7A59]" />
                    <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Cas d&apos;usage Sales</h2>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>5 cas d&apos;usage Sales qu&apos;on deploie le plus souvent :</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "Briefing prospect pre-call", desc: "Agregation automatique des donnees prospect depuis le CRM, LinkedIn, site web. Le commercial arrive prepare sans effort.", before: "15 min", after: "2 min" },
                      { title: "Redaction d'emails de prospection personnalises", desc: "Emails adaptes au contexte du prospect, son secteur, ses enjeux. Ton de voix de la marque respecte.", before: "10 min", after: "45 sec" },
                      { title: "Resume et analyse de calls", desc: "Transcription, resume structure, extraction des objections, next steps. Envoye automatiquement dans le CRM.", before: "15 min", after: "Automatique" },
                      { title: "Generation de propositions commerciales", desc: "PDF personnalise avec pricing, cas clients pertinents, scope adapte. Le commercial ajuste, il ne cree plus de zero.", before: "3h", after: "30 min" },
                      { title: "Scoring predictif des deals", desc: "Score dynamique base sur l'activite reelle du deal, pas sur une intuition. Mis a jour a chaque interaction.", before: "Inexistant", after: "Score dynamique" },
                    ].map((item, i) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-[13px] font-semibold text-[#111] mb-1">{i + 1}. {item.title}</h3>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                          </div>
                          <div className="shrink-0 flex items-center gap-2">
                            <div className="text-right">
                              <div className="text-[13px] font-bold text-[#EF4444]">{item.before}</div>
                              <p className="text-[9px] text-[#999]">Avant</p>
                            </div>
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-[#999]"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <div>
                              <div className="text-[13px] font-bold text-[#22C55E]">{item.after}</div>
                              <p className="text-[9px] text-[#999]">Apres</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 6 : Cas d'usage Marketing ───── */}
              <section id="cas-usage-marketing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#6C5CE7]" />
                    <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Cas d&apos;usage Marketing</h2>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "Production de contenu dans le ton de voix de la marque", desc: "Claude apprend votre ton, vos expressions, votre style. Le contenu produit est coherent avec votre identite, pas generique.", color: "#6C5CE7" },
                      { title: "Declinaison par persona, canal et langue", desc: "Un meme message adapte pour le CEO, le CTO, le VP Sales. LinkedIn, email, landing page. Francais, anglais, espagnol.", color: "#4B5EFC" },
                      { title: "Analyse de campagnes et generation d'insights", desc: "Claude analyse les performances, identifie les patterns, et propose des optimisations concretes. Pas des vanity metrics.", color: "#22C55E" },
                      { title: "Creation de sequences email personnalisees", desc: "Sequences de nurturing adaptees au comportement reel du prospect. Chaque email tient compte des interactions precedentes.", color: "#FF7A59" },
                      { title: "Reporting marketing automatise", desc: "Dashboard hebdomadaire genere automatiquement. KPIs, tendances, alertes. Envoye dans Slack ou par email.", color: "#D4A27F" },
                    ].map((item, i) => (
                      <div key={item.title} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                        <div className="shrink-0 mt-1.5 w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                        <div>
                          <h3 className="text-[13px] font-semibold text-[#111] mb-1">{i + 1}. {item.title}</h3>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 7 : Cas d'usage CS ───── */}
              <section id="cas-usage-cs" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#22C55E]" />
                    <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Cas d&apos;usage Customer Success</h2>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "Detection du churn (45 jours avant)", desc: "Analyse des signaux faibles : baisse d'usage, tickets ouverts, absence de login. Alerte automatique au CSM.", color: "#EF4444" },
                      { title: "Health scoring objectif", desc: "Score de sante base sur des donnees reelles, pas sur l'intuition du CSM. Mis a jour quotidiennement.", color: "#22C55E" },
                      { title: "Comptes rendus de QBR automatises", desc: "Resume de la periode, KPIs du client, recommandations. Le CSM ajuste, il ne redige plus de zero.", color: "#4B5EFC" },
                      { title: "Plans d'expansion personnalises", desc: "Identification automatique des opportunites d'upsell basees sur l'usage reel et le profil du compte.", color: "#D4A27F" },
                      { title: "Automatisation des renouvellements simples", desc: "Les renouvellements sans enjeu sont traites automatiquement. Le CSM se concentre sur les comptes strategiques.", color: "#6C5CE7" },
                    ].map((item, i) => (
                      <div key={item.title} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                        <div className="shrink-0 mt-1.5 w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                        <div>
                          <h3 className="text-[13px] font-semibold text-[#111] mb-1">{i + 1}. {item.title}</h3>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 8 : Cas d'usage Ops ───── */}
              <section id="cas-usage-ops" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-[#4B5EFC]" />
                    <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Cas d&apos;usage Ops</h2>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "Reporting hebdomadaire automatique", desc: "Claude genere le rapport de la semaine, l'envoie dans Slack, met a jour le dashboard. Zero intervention humaine.", color: "#4B5EFC" },
                      { title: "Reconciliation des donnees entre outils", desc: "Les donnees entre HubSpot, Stripe, et votre outil de facturation ne matchent plus ? Claude detecte et corrige les ecarts.", color: "#FF7A59" },
                      { title: "Nettoyage et enrichissement CRM continu", desc: "Deduplication, normalisation des champs, enrichissement automatique. Le CRM reste propre sans effort humain.", color: "#22C55E" },
                      { title: "Creation d'outils internes", desc: "Calculateurs de pricing, dashboards custom, outils de simulation. Claude Code les construit en quelques heures.", color: "#6D00CC" },
                      { title: "Gestion documentaire", desc: "Factures, contrats, devis. Claude extrait les informations, les classe, et les injecte dans le bon outil.", color: "#D4A27F" },
                    ].map((item, i) => (
                      <div key={item.title} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                        <div className="shrink-0 mt-1.5 w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                        <div>
                          <h3 className="text-[13px] font-semibold text-[#111] mb-1">{i + 1}. {item.title}</h3>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 9 : Les couts reels ───── */}
              <section id="couts" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les couts reels</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Parlons argent. Deployer Claude en entreprise coute beaucoup moins cher que ce que la plupart des gens imaginent.</p>
                  </div>

                  {/* Cost breakdown */}
                  <div className="space-y-2 mb-6">
                    {[
                      { label: "API Claude (Anthropic)", cost: "50 a 200 EUR/mois", note: "selon le volume" },
                      { label: "Claude Code", cost: "Gratuit", note: "inclus dans l'abonnement Claude" },
                      { label: "Serveurs MCP", cost: "Gratuits", note: "open source" },
                      { label: "Infrastructure", cost: "Zero", note: "tout tourne dans le cloud Anthropic ou en local" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[13px] font-medium text-[#111]">{item.label}</p>
                          <p className="text-[11px] text-[#999]">{item.note}</p>
                        </div>
                        <div className="text-[14px] font-bold text-[#22C55E] shrink-0">{item.cost}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p><span className="font-semibold text-[#111]">Total : entre 50 et 200 EUR par mois.</span> C&apos;est le cout d&apos;un dejeuner d&apos;equipe.</p>
                  </div>

                  {/* Comparison box */}
                  <div className="rounded-xl border border-dashed border-[#D4A27F]/40 bg-[#D4A27F]/5 p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-[24px] font-bold text-[#EF4444] tracking-[-0.02em]">15 000 EUR/an</div>
                        <p className="text-[11px] text-[#999] mt-1">Cout d&apos;un commercial a 50K/an qui passe 30% de son temps sur des taches automatisables</p>
                      </div>
                      <div>
                        <div className="text-[24px] font-bold text-[#22C55E] tracking-[-0.02em]">2 400 EUR/an max</div>
                        <p className="text-[11px] text-[#999] mt-1">Cout de Claude pour eliminer ces taches</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 10 : Securite ───── */}
              <section id="securite" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-2">Securite</h2>
                  <p className="text-[12px] text-white/40 mb-6">Les 5 questions que chaque DSI pose.</p>

                  <div className="space-y-3">
                    {[
                      { q: "Les donnees sont-elles utilisees pour l'entrainement ?", a: "Non. Anthropic ne reutilise pas les donnees API pour l'entrainement." },
                      { q: "Ou sont stockees les donnees ?", a: "Cloud Anthropic (US) ou deploiement on-premise possible." },
                      { q: "Qui a acces a quoi ?", a: "Les agents MCP n'accedent qu'aux donnees autorisees. Permissions granulaires." },
                      { q: "Y a-t-il un risque d'hallucination ?", a: "Oui. C'est pour ca que les actions destructives requierent une validation humaine. L'IA propose, l'humain valide." },
                      { q: "Est-on conforme RGPD ?", a: "Anthropic a un DPA. Les donnees personnelles sont traitees conformement au RGPD." },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                        <p className="text-[13px] text-white/70 font-medium mb-1.5">{item.q}</p>
                        <p className="text-[12px] text-white/50 leading-[1.65]">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 11 : Les pieges a eviter ───── */}
              <section id="pieges" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 5 pieges a eviter</h2>

                  <div className="space-y-3">
                    {[
                      { title: "Deployer sans donnees propres", desc: "L'IA amplifie le chaos. Fondation Data d'abord.", color: "#EF4444" },
                      { title: "Vouloir tout automatiser d'un coup", desc: "Commencer par 1 agent, mesurer, iterer.", color: "#FF7A59" },
                      { title: "Ignorer le change management", desc: "L'outil est la, les habitudes n'ont pas change.", color: "#F59E0B" },
                      { title: "Ne pas mesurer le ROI", desc: "Sans KPIs, impossible de justifier l'investissement.", color: "#6C5CE7" },
                      { title: "Rester sur le prompt", desc: "Le vrai potentiel est dans Claude Code + MCP, pas dans le copier-coller.", color: "#4B5EFC" },
                    ].map((item, i) => (
                      <div key={item.title} className="rounded-xl border-l-[3px] p-4" style={{ borderLeftColor: item.color, backgroundColor: `${item.color}08` }}>
                        <h3 className="text-[13px] font-semibold text-[#111] mb-1">{i + 1}. {item.title}</h3>
                        <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 12 : Par ou commencer ───── */}
              <section id="demarrer" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Par ou commencer</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>3 etapes pour demarrer :</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { step: "01", title: "Identifier les 3 taches les plus chronophages par departement", desc: "Listez ce qui prend du temps et ne requiert pas de jugement humain. C'est la que Claude a le plus d'impact immediat.", color: "#D4A27F" },
                      { step: "02", title: "Commencer par la plus simple a automatiser", desc: "Enrichissement ou reporting. Un premier agent en production en moins d'une semaine. Le reste suit.", color: "#4B5EFC" },
                      { step: "03", title: "Mesurer le temps gagne a la premiere semaine", desc: "Concret, mesurable. Heures economisees, taches eliminees. C'est ce qui justifie la suite.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start gap-4">
                          <div className="text-[32px] font-bold leading-none select-none" style={{ color: `${item.color}30` }}>{item.step}</div>
                          <div>
                            <h3 className="text-[13px] font-semibold text-[#111] mb-1">{item.title}</h3>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Si vous voulez un accompagnement, on fait ca en 30 minutes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CTA ───── */}
              <section className="mb-8">
                <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #D4A27F, #B8876A)" }}>
                  <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a deployer Claude dans votre entreprise ?</h2>
                  <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 minutes pour comprendre ou vous en etes et par ou commencer.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                    Reserver un appel
                  </Link>
                </div>
              </section>
              <Connector />

              {/* ───── Related links ───── */}
              <section>
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link href="/agence-claude" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-sm bg-[#D4A27F]" />
                      <h3 className="text-[12px] font-semibold text-[#111]">Agence Claude</h3>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">Premiere agence Claude en France</p>
                  </Link>
                  <Link href="/formation-claude" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-sm bg-[#6D00CC]" />
                      <h3 className="text-[12px] font-semibold text-[#111]">Formation Claude</h3>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">Former vos equipes a Claude</p>
                  </Link>
                  <Link href="/fondation-data" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-sm bg-[#FF7A59]" />
                      <h3 className="text-[12px] font-semibold text-[#111]">Fondation Data</h3>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">CRM propre, KPIs alignes</p>
                  </Link>
                </div>
              </section>

            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
