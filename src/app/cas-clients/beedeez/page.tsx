"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Beedeez : RevOps & IA avec Ceres",
  description: "Comment Beedeez a structure son RevOps et deploye l\u2019IA sur tout son cycle de vente avec Ceres. HubSpot, Claude, MCP, Lemlist, Claap, Clay.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-25",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "defis", title: "Les defis" },
  { id: "solution", title: "La solution Ceres" },
  { id: "hubspot", title: "HubSpot : le socle CRM" },
  { id: "ia", title: "IA Claude & serveurs MCP" },
  { id: "outbound", title: "Outbound : Lemlist + Clay" },
  { id: "intelligence", title: "Claap : intelligence commerciale" },
  { id: "revops", title: "RevOps & GTM" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Le mot de Hamza" },
];

const stack = [
  { name: "HubSpot", domain: "hubspot.com", role: "CRM, Marketing Hub, Sales Hub", color: "#FF7A59" },
  { name: "Claude", domain: "claude.ai", role: "IA generative, agents, enrichissement", color: "#D4A27F" },
  { name: "Lemlist", domain: "lemlist.com", role: "Cold email multicanal, sequences", color: "#6C5CE7" },
  { name: "Clay", domain: "clay.com", role: "Enrichissement waterfall, listes", color: "#4B5EFC" },
  { name: "Claap", domain: "claap.io", role: "Enregistrement calls, intelligence", color: "#22C55E" },
  { name: "Make", domain: "make.com", role: "Automatisation, workflows, MCP", color: "#6D00CC" },
  { name: "Notion", domain: "notion.so", role: "Documentation, playbooks, SLA", color: "#111" },
  { name: "Slack", domain: "slack.com", role: "Notifications, alertes pipeline", color: "#E01E5A" },
];

const timeline = [
  { phase: "Phase 1", weeks: "Semaines 1-3", title: "Audit & Fondations", items: ["Audit RevOps 80 points", "Migration et nettoyage CRM HubSpot", "Configuration pipeline et proprietes", "Setup des integrations"], color: "#FF7A59" },
  { phase: "Phase 2", weeks: "Semaines 4-6", title: "Automatisation & Outbound", items: ["Deploy Lemlist + warm-up 5 boites", "Enrichissement Clay + Claude", "3 sequences multicanal lancees", "Workflows HubSpot automatises"], color: "#4B5EFC" },
  { phase: "Phase 3", weeks: "Semaines 7-9", title: "IA & Intelligence", items: ["Serveurs MCP Claude connectes au CRM", "Agents IA : qualification + enrichissement", "Claap deploye pour les calls", "Resume automatique des calls dans HubSpot"], color: "#6D00CC" },
  { phase: "Phase 4", weeks: "Semaines 10-12", title: "RevOps & Scaling", items: ["SLA marketing-sales en place", "Lead scoring fit + engagement", "Dashboards pipeline et revenue", "Formation equipe + playbooks"], color: "#22C55E" },
];

export default function BeedeezCaseStudy() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("contexte");

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
    <div className="relative pt-[100px] pb-16 overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#4B5EFC", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "45%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "65%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "82%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <img src="https://www.google.com/s2/favicons?domain=beedeez.com&sz=32" alt="Beedeez" className="w-5 h-5 rounded" />
                <span className="text-[12px] font-semibold text-[#111]">Beedeez</span>
              </div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#4B5EFC] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 max-w-[750px]">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/cas-clients" className="hover:text-[#111] transition-colors">Cas clients</Link><span>/</span>
              <span className="text-[#666]">Beedeez</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">12 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=beedeez.com&sz=64" alt="Beedeez" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Beedeez</h1>
                  <p className="text-[12px] text-[#999]">SaaS EdTech | 50-100 personnes | Paris</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Comment Beedeez a structure son RevOps de A a Z et deploye l&apos;IA sur tout son cycle de vente en 12 semaines avec Ceres. HubSpot, Claude, serveurs MCP, Lemlist, Claap, Clay.
              </p>

              {/* Results banner */}
              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "+45%", label: "Pipeline genere", color: "#22C55E" },
                    { value: "-60%", label: "Temps admin commercial", color: "#4B5EFC" },
                    { value: "3x", label: "Taux reponse outbound", color: "#6C5CE7" },
                    { value: "12 sem", label: "Time to value", color: "#FF7A59" },
                  ].map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-[24px] font-bold" style={{ color: r.color }}>{r.value}</div>
                      <div className="text-[10px] text-white/40">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </header>

            <article>
              {/* Contexte */}
              <section id="contexte" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le contexte</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Beedeez est une plateforme SaaS de mobile learning qui permet aux entreprises de former leurs collaborateurs via des micro-contenus interactifs sur smartphone. Basee a Paris, l&apos;entreprise compte entre 50 et 100 collaborateurs et cible les grands comptes et ETI en France et a l&apos;international.</p>
                    <p>Quand Beedeez a fait appel a Ceres, l&apos;equipe commerciale fonctionnait avec un CRM sous-utilise, des processus manuels chronophages et aucune strategie outbound structuree. Le marketing generait des leads via l&apos;inbound, mais le passage de relai aux sales etait flou, le suivi des deals inconsistant, et personne n&apos;avait de visibilite fiable sur le pipeline.</p>
                    <p>L&apos;objectif etait clair : structurer les operations commerciales de bout en bout, lancer un canal outbound performant et integrer l&apos;IA pour accelerer chaque etape du cycle de vente.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Secteur", value: "SaaS EdTech" },
                      { label: "Equipe sales", value: "8 personnes" },
                      { label: "Cible", value: "Grands comptes & ETI" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Defis */}
              <section id="defis" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les defis identifies</h2>
                  <div className="space-y-3">
                    {[
                      { title: "CRM sous-exploite", desc: "HubSpot etait en place mais mal configure. Pipeline non structure, proprietes manquantes, pas de lifecycle stages definis, reporting inexistant. Les commerciaux utilisaient le CRM comme un carnet d\u2019adresses, pas comme un outil de pilotage.", color: "#FF7A59" },
                      { title: "Pas d\u2019outbound structure", desc: "L\u2019acquisition reposait a 100% sur l\u2019inbound (contenu, SEO, events). Aucune strategie de cold email ou de prospection LinkedIn. Le pipe dependait entierement du marketing.", color: "#4B5EFC" },
                      { title: "Silos marketing-sales", desc: "Pas de definition commune de MQL/SQL, pas de SLA, pas de meeting d\u2019alignement. Le marketing generait des leads que les sales ne traitaient pas, et les sales se plaignaient de la qualite des leads.", color: "#6C5CE7" },
                      { title: "Taches manuelles chronophages", desc: "Les commerciaux passaient plus de 2 heures par jour sur des taches admin : saisie CRM, recherche d\u2019informations sur les prospects, redaction d\u2019emails, comptes-rendus de calls.", color: "#6D00CC" },
                      { title: "Pas de visibilite pipeline", desc: "Aucun dashboard fiable. Le forecast etait fait sur un spreadsheet mis a jour manuellement chaque vendredi. La direction n\u2019avait pas de visibilite temps reel sur le revenue.", color: "#22C55E" },
                    ].map((d) => (
                      <div key={d.title} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={{ background: d.color }} />
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{d.title}</p>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Solution overview */}
              <section id="solution" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La solution Ceres : RevOps + IA en 12 semaines</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a deploye notre methodologie complete sur 12 semaines, en 4 phases progressives. Chaque phase est independante et livre de la valeur des la fin de la premiere semaine.</p>
                  </div>

                  {/* Stack */}
                  <div className="mt-5 mb-5">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">La stack deployee</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {stack.map((t) => (
                        <div key={t.name} className="flex items-center gap-2 rounded-xl border border-[#F2F2F2] p-2.5">
                          <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`} alt={t.name} className="w-4 h-4" />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">{t.name}</p>
                            <p className="text-[9px] text-[#999] leading-tight">{t.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3">
                    {timeline.map((p, i) => (
                      <div key={p.phase} className="rounded-xl border-l-[3px] bg-[#FAFAFA] p-4" style={{ borderColor: p.color }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-white px-1.5 py-0.5 rounded" style={{ background: p.color }}>{p.phase}</span>
                          <span className="text-[10px] text-[#999]">{p.weeks}</span>
                        </div>
                        <p className="text-[13px] font-semibold text-[#111] mb-2">{p.title}</p>
                        <div className="grid grid-cols-2 gap-1">
                          {p.items.map((item) => (
                            <p key={item} className="text-[11px] text-[#777] flex items-start gap-1.5">
                              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" style={{ color: p.color }}><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* HubSpot */}
              <section id="hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">HubSpot : le socle CRM</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La premiere etape a ete de reconfigurer HubSpot proprement. On est parti de zero sur la structure du pipeline, les proprietes et les automatisations.</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { title: "Pipeline restructure", desc: "6 stages avec criteres de passage objectifs, probabilites calibrees et champs obligatoires par stage. Chaque deal a maintenant un montant, une date de cloture et un proprietaire." },
                      { title: "Proprietes nettoyees", desc: "Suppression de 80+ proprietes inutiles. Creation de 15 proprietes custom alignees sur l\u2019ICP Beedeez (taille d\u2019entreprise, nombre de collaborateurs a former, outil LMS actuel, budget formation)." },
                      { title: "Lifecycle stages definis", desc: "Subscriber, Lead, MQL, SQL, Opportunity, Customer, Evangelist. Chaque transition est automatisee par un workflow HubSpot." },
                      { title: "12 workflows automatises", desc: "Attribution round-robin, notification Slack sur changement de stage, relance automatique devis 7j, update lifecycle stage, creation de tache post-call, scoring automatique." },
                      { title: "5 dashboards crees", desc: "Pipeline overview, activite commerciale, performance par rep, forecast et qualite des donnees. Accessibles a toute l\u2019equipe en temps reel." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[13px] font-semibold text-[#111] mb-1">{item.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* IA Claude & MCP */}
              <section id="ia" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=claude.ai&sz=32" alt="Claude" className="w-5 h-5" />
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60">IA & MCP</span>
                  </div>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Claude + serveurs MCP : l&apos;IA au coeur du CRM</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>C&apos;est la ou Ceres fait la difference. On a connecte Claude directement au CRM de Beedeez via le protocole MCP (Model Context Protocol). Concretement, Claude peut lire et ecrire dans HubSpot en temps reel : consulter les deals, enrichir les fiches, generer des analyses et executer des actions.</p>
                    <p>Les serveurs MCP deployes :</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "MCP HubSpot", desc: "Claude accede aux contacts, deals, companies, activites. Il peut rechercher, creer et mettre a jour des enregistrements directement.", icon: "hubspot.com" },
                      { title: "MCP Enrichissement", desc: "Claude enrichit les fiches contacts avec des donnees contextuelles : resume LinkedIn, actualite entreprise, stack techno, signaux d\u2019achat.", icon: "clay.com" },
                      { title: "MCP Slack", desc: "Claude envoie des alertes intelligentes : deal a risque, opportunite d\u2019upsell detectee, meeting de suivi oublie.", icon: "slack.com" },
                      { title: "MCP Notion", desc: "Claude genere des comptes-rendus structures dans Notion apres chaque call, accessibles a toute l\u2019equipe.", icon: "notion.so" },
                    ].map((mcp) => (
                      <div key={mcp.title} className="rounded-xl bg-white/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <img src={`https://www.google.com/s2/favicons?domain=${mcp.icon}&sz=32`} alt="icon" className="w-4 h-4" />
                          <p className="text-[12px] font-semibold text-white">{mcp.title}</p>
                        </div>
                        <p className="text-[11px] text-white/40 leading-[1.6]">{mcp.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl bg-white/5 p-4">
                    <p className="text-[12px] font-semibold text-[#D4A27F] mb-2">Exemple concret</p>
                    <p className="text-[11px] text-white/50 leading-[1.65]">Chaque matin, Claude analyse les deals en cours, identifie ceux qui n&apos;ont pas eu d&apos;activite depuis 5 jours, enrichit le contexte (actualite de l&apos;entreprise, changement de poste du contact) et envoie un brief personnalise a chaque commercial sur Slack avec des suggestions d&apos;actions. Ce qui prenait 45 minutes de recherche manuelle prend maintenant 0 seconde.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Outbound */}
              <section id="outbound" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=lemlist.com&sz=32" alt="Lemlist" className="w-5 h-5" />
                    <img src="https://www.google.com/s2/favicons?domain=clay.com&sz=32" alt="Clay" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Outbound : Lemlist + Clay + Claude</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Beedeez n&apos;avait jamais fait d&apos;outbound. On a lance le canal de zero en 3 semaines.</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { step: "01", title: "Sourcing avec Clay", desc: "Construction de listes de DRH et responsables formation dans les entreprises de 500+ salaries. Enrichissement waterfall : LinkedIn, Dropcontact, Apollo. 2 500 contacts qualifies en 1 semaine." },
                      { step: "02", title: "Enrichissement IA avec Claude", desc: "Pour chaque prospect, Claude genere un icebreaker personnalise base sur l\u2019actualite RH de l\u2019entreprise (recrutements, restructuration, projets de formation annonces). Taux de personnalisation : 100% des emails." },
                      { step: "03", title: "Sequences Lemlist", desc: "3 sequences multicanal (email + LinkedIn) de 5 etapes chacune. A/B testing sur les sujets et les angles. Warm-up de 5 boites email pendant 3 semaines avant le lancement." },
                      { step: "04", title: "Sync HubSpot via Make", desc: "Chaque reponse positive dans Lemlist cree automatiquement un deal dans HubSpot avec les donnees enrichies, le thread de conversation et un score de qualification initial." },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[11px] font-bold shrink-0">{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { value: "62%", label: "Taux d\u2019ouverture", color: "#22C55E" },
                      { value: "11.8%", label: "Taux de reponse", color: "#4B5EFC" },
                      { value: "34", label: "RDV generes en 8 sem", color: "#6C5CE7" },
                    ].map((m) => (
                      <div key={m.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[18px] font-bold" style={{ color: m.color }}>{m.value}</div>
                        <div className="text-[10px] text-[#999]">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Claap */}
              <section id="intelligence" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=claap.io&sz=32" alt="Claap" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Claap : intelligence commerciale</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Claap enregistre et transcrit automatiquement chaque call de l&apos;equipe commerciale. On a connecte Claap a Claude via Make pour generer des analyses automatiques.</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Resume automatique", desc: "Apres chaque call, Claude genere un resume structure : contexte, besoins identifies, objections, prochaines etapes, score de qualification. Pousse automatiquement dans HubSpot en note." },
                      { title: "Extraction d\u2019objections", desc: "Claude identifie les objections recurrentes et les classe par type (prix, timing, concurrence, interne). L\u2019equipe a maintenant une base d\u2019objections documentee et des reponses types." },
                      { title: "Coaching data-driven", desc: "Analyse du ratio talk/listen, du nombre de questions posees, de la gestion des silences. Chaque commercial recoit un feedback hebdomadaire automatise." },
                      { title: "Signaux d\u2019achat", desc: "Claude detecte les signaux d\u2019intention dans les calls (mention de budget, timeline, decision-maker implique) et alerte le manager quand un deal est chaud." },
                    ].map((f) => (
                      <div key={f.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{f.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* RevOps GTM */}
              <section id="revops" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">RevOps et GTM : la structure qui tient</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Au-dela des outils, on a mis en place la couche RevOps qui fait que tout fonctionne ensemble et que les resultats sont durables.</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "SLA marketing-sales", desc: "Marketing s\u2019engage sur 80 MQL/mois avec un score minimum de 50. Sales s\u2019engage a contacter chaque MQL en moins de 4h et a faire 5 tentatives minimum." },
                      { title: "Lead scoring", desc: "Scoring fit + engagement sur 100 points. Fit : taille entreprise, secteur, poste, budget. Engagement : pages visitees, contenus telecharges, emails ouverts, events." },
                      { title: "Playbooks documentes", desc: "Playbook de qualification (BANT adapte), playbook de demo, playbook de negociation, playbook de closing. Tout dans Notion, accessible a l\u2019equipe." },
                      { title: "Meeting hebdomadaire", desc: "Revue pipeline chaque lundi. Forecast, deals bloques, alertes, actions. 30 minutes, structure, data-driven. Plus de spreadsheet du vendredi." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats apres 12 semaines</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "+45%", label: "Pipeline genere vs trimestre precedent", color: "#22C55E" },
                      { value: "-60%", label: "Temps admin par commercial par jour", color: "#4B5EFC" },
                      { value: "3x", label: "Taux de reponse outbound vs benchmark", color: "#6C5CE7" },
                      { value: "34", label: "RDV generes par l\u2019outbound en 8 semaines", color: "#FF7A59" },
                      { value: "92%", label: "Adoption CRM par l\u2019equipe commerciale", color: "#22C55E" },
                      { value: "4h", label: "Temps moyen de contact apres MQL (vs 48h avant)", color: "#D4A27F" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Le CRM est devenu l\u2019outil central de pilotage, utilise quotidiennement par toute l\u2019equipe",
                      "L\u2019outbound est devenu le 2eme canal d\u2019acquisition apres l\u2019inbound",
                      "Les commerciaux ont recupere 2h par jour grace a l\u2019automatisation et l\u2019IA",
                      "Le forecast est fiable a 85% (vs 40% avant)",
                      "Le management a une visibilite temps reel sur le pipeline et le revenue",
                    ].map((r) => (
                      <p key={r} className="text-[11px] text-white/50 flex items-start gap-2">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {r}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Temoignage Hamza */}
              <section id="temoignage" className="mb-8">
                <div className="rounded-2xl border-2 border-[#4B5EFC]/20 bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(75,94,252,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[14px] font-bold shrink-0">H</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;Ceres a completement transforme notre facon de travailler. Avant, on naviguait a vue. Aujourd&apos;hui, chaque commercial sait exactement quoi faire, dans quel ordre, et pourquoi. Le combo HubSpot + Claude + MCP est incroyable : l&apos;IA nous prepare des briefs personnalises chaque matin, resume nos calls automatiquement et enrichit nos fiches en continu. On a gagne un temps fou et notre pipeline n&apos;a jamais ete aussi sain. L&apos;equipe Ceres est ultra reactive, ils comprennent nos enjeux business, pas juste la technique. C&apos;est le meilleur investissement qu&apos;on ait fait cette annee.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Hamza</p>
                          <p className="text-[11px] text-[#999]">Head of Sales, Beedeez</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=beedeez.com&sz=32" alt="Beedeez" className="w-5 h-5 rounded ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous voulez les memes resultats ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">Reservez un appel decouverte de 30 minutes. On analyse votre situation et on vous dit si on peut vous aider.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/audit-revops" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Demander un audit
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
