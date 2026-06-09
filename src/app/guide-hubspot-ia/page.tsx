"use client";

import Link from "next/link";
import { useEffect } from "react";
import Badge from "@/components/marketing/Badge";

const ACCENT = "#FF7A59"; // HubSpot orange
const ACCENT_2 = "#6D00CC"; // IA purple
const COVER_GRADIENT = `linear-gradient(135deg, ${ACCENT} 0%, #FF5733 35%, #B83280 65%, ${ACCENT_2} 100%)`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Le Guide HubSpot + IA 2026",
  alternateName: "Breeze AI, Claude, MCP, agents autonomes",
  description:
    "Le guide le plus complet en francais sur HubSpot + IA en 2026. Breeze Agents, Studio, Marketplace, HubSpot MCP server, integration Claude, Smart Deal Progression, AEO HubSpot, 15 cas d'usage avec prompts, plan 90 jours d'adoption.",
  url: "https://ceres.agency/guide-hubspot-ia",
  inLanguage: "fr-FR",
  bookFormat: "https://schema.org/EBook",
  numberOfPages: 75,
  author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  isAccessibleForFree: true,
  datePublished: "2026-06-03",
  about: [
    { "@type": "Thing", name: "HubSpot" },
    { "@type": "Thing", name: "Breeze AI" },
    { "@type": "Thing", name: "Model Context Protocol" },
    { "@type": "Thing", name: "Claude" },
    { "@type": "Thing", name: "Intelligence artificielle" },
    { "@type": "Thing", name: "Revenue Operations" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "RevOps Managers, Marketing Ops, Sales Ops, Founders, CRO",
  },
};

const chapters = [
  { n: 1, t: "L'etat de HubSpot et de l'IA en juin 2026", d: "Breeze, MCP, AEO, agents, GPT-5 par defaut, Smart Deal Progression : tout ce qui a change depuis le Spring Spotlight 2026." },
  { n: 2, t: "Breeze AI vs Claude vs ChatGPT vs Gemini", d: "Quand utiliser quoi : Breeze pour l'in-platform, Claude pour la profondeur d'analyse, ChatGPT pour les operations transverses. La stack hybride optimale." },
  { n: 3, t: "Breeze Assistant : le copilot HubSpot", d: "Le copilot integre partout dans HubSpot : prompts efficaces, customisation, integration Loop Marketing, generation de campaign briefs et brand guides." },
  { n: 4, t: "Les 20+ Breeze Agents : panorama complet", d: "Customer, Prospecting, Content, Data, plus 16 nouveaux agents post-INBOUND 2025. Matrice par fonction (Marketing / Sales / CS) avec criteres de priorisation." },
  { n: 5, t: "Customer Agent : -39% temps de resolution", d: "L'agent chat IA d'HubSpot : 9 canaux (chat, email, WhatsApp, SMS, voice beta), 65% resolution moyenne, $0.50 par conversation resolue. Setup + KB best practices." },
  { n: 6, t: "Prospecting Agent : SDR autonome a $1 par lead", d: "Outcome-based pricing depuis avril 2026, qualification + recherche + sequencing automatiques. Limites, garde-fous et co-pilotage avec votre equipe SDR." },
  { n: 7, t: "Content Agent + Loop Marketing : content remix", d: "Generation, remix multi-format (LinkedIn, blog, email, podcast script), publication, mesure. Pourquoi Loop Marketing change la donne pour le content B2B." },
  { n: 8, t: "Breeze Studio + Marketplace : votre agent custom", d: "Le no-code agent builder d'HubSpot. Templates, instructions, tools, evaluation. Marketplace : 30+ agents pre-built par editeurs (Clay, Apollo, Outreach...)." },
  { n: 9, t: "HubSpot MCP server : connecter Claude/ChatGPT", d: "Architecture MCP, installation (npm package, private app token, Claude Desktop), scopes OAuth 2.1, lecture/ecriture securisee dans HubSpot depuis n'importe quel LLM." },
  { n: 10, t: "15 cas d'usage Claude + HubSpot avec prompts", d: "Meeting prep en 30s, deal review hebdo, ICP analysis, lead enrichment, ticket triage, forecast review, dashboard generation, content distribution, etc." },
  { n: 11, t: "Spring 2026 : AEO, Smart Deal Progression, Audit Cards", d: "Les nouveautes structurantes : optimisation pour LLMs (AEO HubSpot), progression automatique de deals, Audit Cards (tracabilite IA), Run Agent workflow action." },
  { n: 12, t: "Gouvernance, securite, ROI + plan 90 jours", d: "RGPD et HubSpot AI, gouvernance des prompts, monitoring des couts (outcome pricing), calcul du ROI agent par agent, plan 30/60/90 jours d'adoption." },
];

const bonus = [
  "15 prompts Claude prets a coller (meeting prep, deal review, ICP, dashboard, forecast...)",
  "Matrice de decision : Breeze vs Claude vs ChatGPT pour 12 cas d'usage RevOps",
  "Checklist setup Customer Agent (12 etapes : KB, escalation, ton, brand voice)",
  "Modele de calcul ROI agent par agent (Sheets : breakeven, marge, scale-up)",
  "Plan 30/60/90 jours d'adoption HubSpot AI par persona (Sales, Marketing, CS, Ops)",
  "Tableau des tarifs outcome-based 2026 (Customer, Prospecting, Data Agent)",
  "Comparatif Breeze Studio vs LangGraph vs CrewAI pour agents internes",
  "Bonus : 12 questions a poser a votre CSM HubSpot avant d'activer un agent",
];

const forWho = [
  { role: "RevOps Manager / Head of Ops", desc: "Vous arbitrez la stack IA + HubSpot et devez prioriser Breeze vs externe vs internalise. Le guide vous donne une matrice de decision claire." },
  { role: "Marketing Ops / Sales Ops", desc: "Vous deployez les agents (Customer, Prospecting, Content) au quotidien. Cas d'usage, prompts, garde-fous et plan d'adoption sont actionnables immediatement." },
  { role: "Founder / CRO scale-up", desc: "Vous voulez comprendre le bon investissement IA + HubSpot pour les 12 prochains mois. ROI, outcome pricing, build vs buy : tout est cadre." },
  { role: "Equipes Sales, CS, Marketing", desc: "Vous etes utilisateurs finaux des agents et de Breeze Assistant. Le guide vous donne les meilleurs prompts pour chaque fonction." },
];

const clients = [
  "Beedeez", "TotalEnergies", "Alan", "Kameleoon", "Dougs",
  "HiPay", "Ringover", "Elax Energie", "Edenred", "Tennaxia",
  "OpenDataSoft", "Iroko",
];

export default function GuideHubspotIaPage() {
  useEffect(() => {
    const w = window as any;
    function createForm() {
      if (w.hbspt) {
        w.hbspt.forms.create({
          region: "na1",
          portalId: "2703445",
          formId: "401f2967-9b95-4a6e-b816-a5b11024eb2a",
          target: "#hubspot-form-guide-hubspot-ia",
        });
      }
    }
    if (w.hbspt) {
      createForm();
      return;
    }
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = createForm;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
        <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: ACCENT, opacity: 0.16, filter: "blur(70px)" }} />
        <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "20%", width: 300, height: 300, borderRadius: "50%", background: ACCENT_2, opacity: 0.14, filter: "blur(70px)" }} />
        <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 280, height: 280, borderRadius: "50%", background: "#6366F1", opacity: 0.10, filter: "blur(70px)" }} />
        <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "75%", width: 300, height: 300, borderRadius: "50%", background: "#F59E0B", opacity: 0.08, filter: "blur(70px)" }} />

        <div className="relative z-10 max-w-[1000px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
            <Link href="/guides" className="hover:text-[#111] transition-colors">Guides</Link><span>/</span>
            <span className="text-[#666]">Guide HubSpot + IA</span>
          </nav>

          {/* Hero */}
          <section className="mb-16 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 items-start">
            <div>
              <div className="mb-4"><Badge>Guide premium &middot; A jour juin 2026</Badge></div>
              <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
                Le Guide HubSpot + IA 2026
              </h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-6 max-w-[640px]">
                75 pages denses pour tout comprendre de HubSpot a l&apos;ere de l&apos;IA agentique : <strong className="text-[#111]">Breeze AI (20+ agents), Breeze Studio &amp; Marketplace, HubSpot MCP server, integration Claude / ChatGPT, Smart Deal Progression, AEO HubSpot et outcome-based pricing</strong>. 15 cas d&apos;usage avec prompts prets a coller et plan 90 jours d&apos;adoption.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#FFF1ED] text-[#FF7A59] font-medium">75 pages</span>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#F3EBFF] text-[#6D00CC] font-medium">12 chapitres</span>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#EEF2FF] text-[#6366F1] font-medium">15 prompts</span>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#F0FDF4] text-[#22C55E] font-medium">Plan 90j</span>
                <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#FAFAFA] text-[#666] border border-[#EFEFEF]">A jour juin 2026</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a href="#telecharger" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[13px] font-medium transition-opacity hover:opacity-90" style={{ background: ACCENT }}>
                  Telecharger le guide
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </a>
                <Link href="/guide-hubspot-ia/contenu" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                  Lire en ligne
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 3h7v7M13 3L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </Link>
              </div>
            </div>

            {/* Book cover */}
            <div className="hidden lg:flex justify-center">
              <div
                className="rounded-2xl shadow-[12px_16px_50px_-20px_rgba(0,0,0,0.35)] relative overflow-hidden flex flex-col justify-between p-5"
                style={{ width: 220, height: 290, background: COVER_GRADIENT }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-black/15" />
                <div>
                  <p className="text-white/70 text-[10px] font-medium uppercase tracking-wider mb-2">Ceres &middot; Guide</p>
                  <p className="text-white text-[20px] font-bold leading-tight">HubSpot + IA</p>
                  <p className="text-white/80 text-[11px] mt-1">Breeze, Claude, MCP, agents autonomes</p>
                </div>
                <div>
                  <div className="w-8 h-[1px] bg-white/30 mb-2" />
                  <p className="text-white/60 text-[9px]">Edition juin 2026</p>
                  <p className="text-white text-[10px] font-medium">75 pages</p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats bar */}
          <section className="mb-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { v: "20+", l: "Breeze Agents", c: ACCENT },
                { v: "65%", l: "Resolution Customer Agent", c: ACCENT_2 },
                { v: "$0.50", l: "Par conversation resolue", c: "#22C55E" },
                { v: "15", l: "Prompts Claude inclus", c: "#6366F1" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-[#F2F2F2] bg-white p-4 text-center">
                  <div className="text-[26px] font-semibold" style={{ color: s.c }}>{s.v}</div>
                  <div className="text-[11px] text-[#999] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Sommaire */}
          <section className="mb-14">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Sommaire</p>
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mb-6">
              12 chapitres denses pour passer de HubSpot classique a HubSpot agentique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {chapters.map((c) => (
                <div key={c.n} className="rounded-xl border border-[#F2F2F2] bg-white p-4 hover:border-[#E5E5E5] transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-white text-[11px] font-semibold" style={{ background: c.n <= 4 ? ACCENT : c.n <= 8 ? ACCENT_2 : "#6366F1" }}>
                      {c.n}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-[#111] mb-1">{c.t}</p>
                      <p className="text-[11px] text-[#777] leading-[1.6]">{c.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bonus */}
          <section className="mb-14">
            <div className="rounded-2xl p-6 md:p-8" style={{ background: `linear-gradient(135deg, ${ACCENT}10, ${ACCENT_2}10)`, border: `1px solid ${ACCENT}30` }}>
              <p className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Bonus inclus</p>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">
                Templates, prompts, calculs ROI : tout pour passer a l&apos;action
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {bonus.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[12px] text-[#333] leading-[1.6]">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" style={{ color: ACCENT }}>
                      <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Pour qui */}
          <section className="mb-14">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Pour qui</p>
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mb-6">
              Pour les equipes qui veulent vraiment exploiter l&apos;IA dans HubSpot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {forWho.map((f) => (
                <div key={f.role} className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                  <p className="text-[13px] font-semibold text-[#111] mb-2">{f.role}</p>
                  <p className="text-[12px] text-[#666] leading-[1.65]">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Clients */}
          <section className="mb-14">
            <p className="text-center text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Ils utilisent nos guides en interne</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-70">
              {clients.map((c) => (
                <span key={c} className="text-[13px] font-medium text-[#999]">{c}</span>
              ))}
            </div>
          </section>

          {/* Download form */}
          <section id="telecharger" className="mb-14">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-8 items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: ACCENT }}>Telecharger gratuitement</p>
                  <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#111] tracking-[-0.02em] mb-4">
                    Recevez le guide complet (PDF + Sheets)
                  </h2>
                  <p className="text-[13px] text-[#666] leading-[1.7] mb-4">
                    75 pages a jour juin 2026, avec les bonus : prompts Claude, matrices de decision, calculateur ROI agent, plan 90 jours. Pas de spam, on vous envoie le guide et c&apos;est tout.
                  </p>
                  <ul className="space-y-2 text-[12px] text-[#555]">
                    {[
                      "Le PDF du guide (75 pages, mis a jour 2 fois par an)",
                      "Les 15 prompts Claude pour HubSpot dans un Google Doc",
                      "Le calculateur ROI agent (Sheets)",
                      "Acces a la prochaine mise a jour automatiquement",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" style={{ color: "#22C55E" }}>
                          <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div id="hubspot-form-guide-hubspot-ia" />
                </div>
              </div>
            </div>
          </section>

          {/* Read online CTA */}
          <section className="mb-12">
            <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Lecture en ligne</span>
              <h2 className="text-[22px] sm:text-[26px] font-semibold text-white tracking-[-0.02em] mb-3">
                Pas envie de remplir un formulaire ? Lisez le guide directement.
              </h2>
              <p className="text-[13px] text-white/60 mb-6 max-w-[480px] mx-auto leading-[1.7]">
                Les 12 chapitres sont disponibles en lecture libre sur cette URL. Aucun email demande.
              </p>
              <Link href="/guide-hubspot-ia/contenu" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#111] text-[13px] font-medium hover:opacity-90 transition-opacity">
                Lire les 12 chapitres
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </section>

          {/* Related guides */}
          <section>
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Pour aller plus loin</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { slug: "guide-hubspot-ultime", title: "Le Guide HubSpot Ultime 2026", desc: "80 pages, tout HubSpot : Hubs, editions, setup, Marketing/Sales/Service, reporting, migrations.", color: ACCENT },
                { slug: "guide-mcp-revops", title: "Le Guide MCP pour le RevOps", desc: "65 pages : Model Context Protocol, 9 serveurs MCP, 12 cas d'usage, plan d'implementation.", color: "#6366F1" },
                { slug: "guide-claude-marketing", title: "Guide Claude & Claude Code", desc: "55 pages : Claude pour le marketing B2B, prompts, scripts, MCP, workflows Make.", color: "#D4A27F" },
              ].map((g) => (
                <Link key={g.slug} href={`/${g.slug}`} className="rounded-xl border border-[#F2F2F2] bg-white p-4 hover:border-[#E5E5E5] transition-colors group">
                  <span className="text-[10px] px-2 py-0.5 rounded-md font-medium text-white inline-block mb-2" style={{ background: g.color }}>Guide</span>
                  <p className="text-[13px] font-semibold text-[#111] mb-1 group-hover:opacity-80 transition-opacity">{g.title}</p>
                  <p className="text-[11px] text-[#777] leading-[1.6]">{g.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
