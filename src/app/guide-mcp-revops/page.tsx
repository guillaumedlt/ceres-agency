"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Le Guide MCP pour le RevOps",
  description:
    "65 pages pour comprendre, deployer et industrialiser Model Context Protocol dans votre revenue engine. HubSpot MCP, securite, 12 cas d'usage, plan 90 jours.",
  author: { "@type": "Organization", name: "Ceres" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  numberOfPages: 65,
  inLanguage: "fr",
  datePublished: "2026-05-26",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
};

const chapters = [
  { num: "01", title: "MCP en 2026 : pourquoi c'est devenu le standard", desc: "Le probleme pre-MCP, la donation Linux Foundation, les chiffres d'adoption (97M downloads/mois, 78% des enterprises). Pourquoi 2026 est l'annee d'adoption.", pages: "p. 4-9" },
  { num: "02", title: "Architecture MCP : host, client, server, transport", desc: "Les 3 roles, les transports (stdio, HTTP/SSE, Streamable HTTP), les 6 capabilites (Tools, Resources, Prompts, Roots, Sampling, Elicitation).", pages: "p. 10-15" },
  { num: "03", title: "MCP vs API REST, Zapier, iPaaS", desc: "Comparaison honnete. Quand utiliser MCP, quand garder l'existant. Les couts caches du Zapier sprawl en RevOps.", pages: "p. 16-21" },
  { num: "04", title: "Le HubSpot MCP server (GA depuis avril 2026)", desc: "Configuration mcp.hubspot.com, OAuth, scopes, multi-portal. Tools exposes, limites actuelles, cas d'usage prets a l'emploi.", pages: "p. 22-28" },
  { num: "05", title: "Les 9 MCP servers RevOps indispensables", desc: "HubSpot, Salesforce, Attio, Pipedrive, Notion, Slack, BigQuery, Linear, Merge.dev. Officiel vs community vs gateway.", pages: "p. 29-35" },
  { num: "06", title: "12 cas d'usage RevOps avec extraits de code", desc: "Lead enrichment, pre-call briefing, churn signals, forecast, account research, CS health score, pipeline hygiene, renewal alerts...", pages: "p. 36-44" },
  { num: "07", title: "Securite, gouvernance, RGPD", desc: "OAuth 2.1, scoped tokens, audit trails, data residency. Les 5 pieges classiques en deploiement enterprise.", pages: "p. 45-50" },
  { num: "08", title: "Build vs Buy : votre MCP server ou celui de l'editeur", desc: "Tooling Stainless (rachat Anthropic mai 2026), FastMCP, SDK officiel. TCO compare. Quand build, quand buy.", pages: "p. 51-55" },
  { num: "09", title: "Multi-CRM : Salesforce + HubSpot, federation ou gateway", desc: "Pattern Merge.dev gateway vs federation custom. Architectures testees.", pages: "p. 56-58" },
  { num: "10", title: "MCP tunnels et sandboxes self-hosted", desc: "Connecter votre reseau prive, alternatives a l'infra Anthropic. Cas CRM on-premise et firewall stricts.", pages: "p. 59-61" },
  { num: "11", title: "Plan d'implementation 30/60/90 jours", desc: "Semaine par semaine. Quoi deployer, dans quel ordre, avec quels KPIs de validation. Pret a executer.", pages: "p. 62-65" },
];

const clients = [
  { name: "Iroko", domain: "iroko.eu" },
  { name: "Ringover", domain: "ringover.com" },
  { name: "TotalEnergies", domain: "totalenergies.com" },
  { name: "Beedeez", domain: "beedeez.com" },
  { name: "Kameleoon", domain: "kameleoon.com" },
  { name: "Dougs", domain: "dougs.fr" },
  { name: "Edenred", domain: "edenred.com" },
  { name: "Spendesk", domain: "spendesk.com" },
];

const stats = [
  { value: "97M", label: "downloads MCP/mois (mars 2026)" },
  { value: "78%", label: "des enterprises AI ont un agent MCP en prod" },
  { value: "9 400+", label: "serveurs MCP publics (avril 2026)" },
  { value: "GA", label: "HubSpot MCP server (13 avril 2026)" },
];

export default function GuideMcpRevopsLandingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        portalId: "2703445",
        formId: "461a976f-66db-4946-9e3f-883c83d4a084",
        region: "na1",
        target: "#hs-guide-form",
      });
      return;
    }
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "2703445",
          formId: "461a976f-66db-4946-9e3f-883c83d4a084",
          region: "na1",
          target: "#hs-guide-form",
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  function scrollToForm() {
    document.getElementById("telecharger")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Blobs */}
      <div className="hidden lg:block fixed pointer-events-none" style={{ left: "2%", top: "10%", width: 340, height: 340, borderRadius: "50%", background: "#FF7A59", opacity: 0.14, filter: "blur(70px)" }} />
      <div className="hidden lg:block fixed pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block fixed pointer-events-none" style={{ left: "4%", top: "50%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block fixed pointer-events-none" style={{ right: "2%", top: "70%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Hero */}
        <section className="text-center mb-16">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
            <Link href="/guides" className="hover:text-[#111] transition-colors">Guides</Link><span>/</span>
            <span className="text-[#666]">Le Guide MCP pour le RevOps</span>
          </nav>
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF7A59]/10 text-[12px] font-medium text-[#FF7A59]">Guide gratuit</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#6D00CC]/10 text-[12px] font-medium text-[#6D00CC]">Mai 2026 — a jour</span>
          </div>
          <h1 className="text-[36px] sm:text-[52px] font-semibold text-[#111] leading-[1.08] tracking-[-0.03em] mb-5">
            Le Guide MCP pour le RevOps
          </h1>
          <p className="text-[18px] text-[#666] max-w-[600px] mx-auto leading-[1.7] mb-6">
            65 pages pour comprendre, deployer et industrialiser Model Context Protocol dans votre revenue engine. Le standard d&apos;integration de l&apos;IA que Claude, ChatGPT et Gemini utilisent tous en 2026.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[700px] mx-auto mb-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[22px] font-bold text-[#111] tracking-[-0.02em]">{s.value}</div>
                <div className="text-[10px] text-[#999] leading-[1.4] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF7A59] text-white text-[14px] font-medium hover:bg-[#E86D4F] transition-colors shadow-[0_4px_12px_-4px_rgba(255,122,89,0.4)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 2v8M4 7l4 4 4-4M2 13h12" /></svg>
            Telecharger gratuitement
          </button>
          <p className="text-[12px] text-[#999] mt-4">
            Ou <Link href="/guide-mcp-revops/contenu" className="text-[#FF7A59] hover:underline font-medium">lire en ligne</Link> sans inscription.
          </p>
        </section>

        {/* Pitch */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">
              Pourquoi ce guide, et pourquoi maintenant
            </h2>
            <div className="space-y-4 text-[14px] text-[#555] leading-[1.75]">
              <p>
                Entre le lancement de MCP par Anthropic en novembre 2024 et la donation a la Linux Foundation en decembre 2025, le protocole est passe d&apos;experiment de niche a standard industrie. OpenAI, Google et Microsoft sont co-sponsors. Claude, ChatGPT, Cursor, Windsurf, Zed, JetBrains, Vercel AI SDK : tous parlent MCP.
              </p>
              <p>
                Cote RevOps, la pression monte. Le <strong>HubSpot MCP server officiel est passe en GA le 13 avril 2026</strong>. Salesforce et Attio ont suivi. Les agents IA arretent d&apos;etre des demos pour devenir des outils en production qui touchent au CRM, aux donnees client, aux pipelines.
              </p>
              <p>
                Ce guide est la documentation manquante en francais. Pas un papier blanc theorique : 11 chapitres, 12 cas d&apos;usage avec extraits de code, le plan 30/60/90 jours qu&apos;on applique chez nos clients SaaS B2B.
              </p>
            </div>
          </div>
        </section>

        {/* Sommaire */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Badge>Sommaire</Badge>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4">11 chapitres, 65 pages</h2>
            <p className="text-[14px] text-[#666] mt-2">Du concept a l&apos;industrialisation. Lisez dans l&apos;ordre ou piochez ce qui vous interesse.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {chapters.map((c) => (
              <div key={c.num} className="rounded-xl border border-[#E8E8E8] bg-white p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-[28px] font-bold text-[#F2F2F2] leading-none select-none shrink-0">{c.num}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] font-semibold text-[#111] mb-1.5 leading-[1.3]">{c.title}</h3>
                    <p className="text-[12px] text-[#777] leading-[1.6] mb-1.5">{c.desc}</p>
                    <p className="text-[10px] text-[#BBB] font-mono">{c.pages}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ce qu'on inclut */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Badge>Bonus</Badge>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Ce qu&apos;on inclut</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "12 extraits de code prets a coller", desc: "Pour Claude Desktop, ChatGPT Apps SDK, Vercel AI SDK et l'API Anthropic directe.", color: "#FF7A59" },
              { title: "Checklist securite 25 points", desc: "OAuth 2.1, scoped tokens, audit trails, data residency. Conforme RGPD.", color: "#4B5EFC" },
              { title: "Templates de prompts agents", desc: "Pre-call briefing, churn detection, forecast review. Reutilisables sur HubSpot et Salesforce.", color: "#22C55E" },
              { title: "Plan 30/60/90 jours", desc: "Quoi deployer chaque semaine, qui pilote, quels KPIs de validation.", color: "#6D00CC" },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="w-2 h-2 rounded-sm mb-3" style={{ background: b.color }} />
                <h3 className="text-[14px] font-semibold text-[#111] mb-2">{b.title}</h3>
                <p className="text-[12px] text-[#777] leading-[1.65]">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pour qui */}
        <section className="mb-16">
          <div className="rounded-2xl bg-[#111] p-6 md:p-8">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Pour qui ce guide est ecrit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { role: "VP RevOps / Head of Ops", desc: "Pour savoir quoi prioriser et avec quels editeurs avancer en 2026." },
                { role: "Founder / CRO scale-up", desc: "Pour decider build vs buy et budgeter realistement l'integration IA." },
                { role: "RevOps Manager + IT", desc: "Pour deployer techniquement avec les bonnes pratiques securite." },
              ].map((p) => (
                <div key={p.role} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <h3 className="text-[14px] font-semibold text-white mb-2">{p.role}</h3>
                  <p className="text-[12px] text-white/60 leading-[1.6]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider">Approche eprouvee chez</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
            {clients.map((c) => (
              <div key={c.name} className="text-[13px] text-[#666] font-medium">{c.name}</div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section id="telecharger" className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="text-center mb-6">
              <Badge>Telechargement</Badge>
              <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Recevez le guide PDF</h2>
              <p className="text-[14px] text-[#666] mt-2">65 pages, format A4. Lien de telechargement par email immediatement apres soumission.</p>
            </div>
            <div ref={formRef} id="hs-guide-form" className="max-w-[480px] mx-auto" />
          </div>
        </section>

        {/* Read online CTA */}
        <section className="mb-8">
          <div className="rounded-2xl p-6 md:p-8 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
            <h2 className="text-[18px] sm:text-[22px] font-semibold text-white tracking-[-0.02em] mb-2">Pas envie de remplir un formulaire ?</h2>
            <p className="text-[13px] text-white/80 mb-5 max-w-[460px] mx-auto">Le guide est aussi disponible en ligne, gratuitement, sans inscription.</p>
            <Link href="/guide-mcp-revops/contenu" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
              Lire le guide complet en ligne
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
