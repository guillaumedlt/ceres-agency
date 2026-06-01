"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top 10 MCP servers RevOps en 2026",
  description: "Les 10 MCP servers indispensables pour le RevOps en 2026 : HubSpot, Salesforce, Attio, Pipedrive, Notion, Slack, BigQuery, Linear, Merge.dev, GitHub.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/top-mcp-servers-revops-2026" },
  articleSection: "IA & Automatisation",
  wordCount: 2100,
  inLanguage: "fr",
};

const servers = [
  { rank: 1, name: "HubSpot MCP", url: "mcp.hubspot.com", maintainer: "HubSpot (officiel)", status: "GA avril 2026", color: "#FF7A59",
    why: "Le CRM #1 du SaaS B2B. Lecture/ecriture CRM objects, engagements, segments, campaigns. Le must-have si tu tournes sur HubSpot.",
    cas: "Lead scoring, brief pre-call, pipeline hygiene, forecast review." },
  { rank: 2, name: "Salesforce MCP", url: "via Mulesoft + officiel", maintainer: "Salesforce (officiel)", status: "GA Q1 2026", color: "#00A1E0",
    why: "Le CRM enterprise. Couverture Sales Cloud + Service Cloud + Industries. Plus complexe a setup que HubSpot, plus puissant.",
    cas: "Forecast multi-pays, account research deep, pipeline executive review." },
  { rank: 3, name: "Attio MCP", url: "via Attio API", maintainer: "Attio (officiel)", status: "GA mars 2026", color: "#6D00CC",
    why: "Le CRM moderne flexible. Schema custom, data model riche. Parfait pour startups Seed-Series A et societes de gestion / VCs.",
    cas: "Modeliser des entites complexes (deals + investors + portfolio), enrichissement IA natif." },
  { rank: 4, name: "Notion MCP", url: "via Notion API", maintainer: "Notion (officiel)", status: "GA 2025", color: "#000000",
    why: "Single source of truth pour la doc. Tres complementaire au CRM : agent IA peut lire les playbooks, les battle cards, les notes account.",
    cas: "Cherche dans la doc interne pendant un call, redige des notes de meeting." },
  { rank: 5, name: "Slack MCP", url: "via Slack API", maintainer: "Slack (officiel)", status: "GA fin 2025", color: "#4A154B",
    why: "Action layer principal. L&apos;agent peut notifier les owners, poster dans des canaux, lire l&apos;historique d&apos;une thread.",
    cas: "Alertes deals at risk dans #sales, notifications churn signal, recap weekly." },
  { rank: 6, name: "BigQuery MCP", url: "via Google", maintainer: "Google (officiel)", status: "GA mars 2026", color: "#4B5EFC",
    why: "Data warehouse query layer. L&apos;agent ecrit du SQL et execute. Critique pour les analytics qui ne sont pas dans le CRM.",
    cas: "Analyse usage produit, cohort retention, attribution multi-touch." },
  { rank: 7, name: "Linear MCP", url: "via Linear API", maintainer: "Linear (officiel)", status: "GA 2025", color: "#5E6AD2",
    why: "Si ton equipe Ops pilote sa backlog dans Linear, le serveur permet a l&apos;agent de creer des issues, lire les cycles, prioriser.",
    cas: "Creer un ticket Linear automatiquement quand un signal churn est detecte." },
  { rank: 8, name: "Pipedrive MCP", url: "via Pipedrive API", maintainer: "Pipedrive (officiel, beta)", status: "Beta 2026", color: "#22C55E",
    why: "Encore en beta en mai 2026. Pour les PME sur Pipedrive. Fonctionnel pour les usages basiques (lecture deals, contacts).",
    cas: "Mise a jour stage deals, ajout d&apos;activites, lecture du pipeline." },
  { rank: 9, name: "Merge.dev MCP", url: "via Merge.dev", maintainer: "Merge.dev (officiel)", status: "GA Q4 2025", color: "#FF7A59",
    why: "Gateway multi-CRM. UN seul MCP server qui parle a 40+ CRMs (HubSpot, Salesforce, Pipedrive, Zendesk...). Genial en multi-stack.",
    cas: "Agent unifie qui jongle entre plusieurs CRMs sans complexite." },
  { rank: 10, name: "GitHub MCP", url: "via GitHub API", maintainer: "GitHub (officiel)", status: "GA 2025", color: "#000000",
    why: "Pour les RevOps tech qui ont des scripts MCP custom hostes sur GitHub. Lecture/ecriture code, issues, PRs, GitHub Actions.",
    cas: "Versioner les workflows MCP, deployer des scripts custom, auditer les changements." },
];

const sections = [
  { id: "contexte", title: "Pourquoi cette liste" },
  { id: "top", title: "Le top 10 detaille" },
  { id: "comment-choisir", title: "Comment choisir vos servers" },
  { id: "stack-type", title: "3 stacks types par taille" },
];

const relatedArticles = [
  { title: "Le guide MCP pour le RevOps", slug: "../guide-mcp-revops", category: "Guide", color: "#FF7A59" },
  { title: "MCP : connecter Claude a votre CRM", slug: "mcp-connecter-claude-crm-outils", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Tutoriel HubSpot MCP server : setup en 30 min", slug: "tutoriel-hubspot-mcp-server-setup", category: "Tutoriel", color: "#4B5EFC" },
];

export default function TopMcpServersRevopsArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("contexte");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) {
        const el = els[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#6D00CC] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "35%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "65%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#6D00CC] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">Top 10 MCP servers RevOps</span></nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>IA &amp; Automatisation</Badge><span className="text-[11px] text-[#CCC]">10 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">Top 10 MCP servers RevOps en 2026</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Le registre public MCP recense 9 400+ serveurs en avril 2026. Voici les 10 indispensables pour un RevOps B2B, classes par impact reel observe sur nos missions.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="contexte" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pourquoi cette liste, et comment elle est etablie</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>L&apos;explosion MCP en 2026 est telle qu&apos;il y a maintenant <strong>9 400+ serveurs MCP publics</strong> indexes (17 468 selon les registres independants). Pour un RevOps qui veut deployer maintenant, c&apos;est trop. Cette liste filtre sur 2 criteres :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Maintenu par l&apos;editeur officiel</strong> (pas community-only) ou alternative officielle valide</li>
                    <li><strong>Couvre un cas d&apos;usage RevOps reel</strong> (CRM, data, communication, action)</li>
                  </ul>
                  <p>L&apos;ordre reflete notre experience client : ce qu&apos;on deploie en premier, et quels serveurs reviennent le plus souvent dans les stacks Ceres.</p>
                </div>
              </div></section>
              <Connector />

              <section id="top" className="mb-8"><div className="space-y-5">
                {servers.map((s) => (
                  <div key={s.rank} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-7 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-[16px] shrink-0" style={{ background: s.color }}>{s.rank}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[18px] font-semibold text-[#111] mb-1">{s.name}</h3>
                        <div className="flex items-center gap-3 flex-wrap text-[11px]">
                          <span className="text-[#666]">{s.maintainer}</span>
                          <span className="text-[#999]">&middot;</span>
                          <span className="text-[#666] font-mono">{s.url}</span>
                          <span className="text-[#999]">&middot;</span>
                          <span className="px-2 py-0.5 rounded bg-[#FAFAFA] text-[#666] font-mono text-[10px]">{s.status}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[13px] text-[#555] leading-[1.7] mb-3"><strong className="text-[#111]">Pourquoi : </strong>{s.why}</p>
                    <p className="text-[12px] text-[#777] leading-[1.65] bg-[#FAFAFA] rounded-md p-3"><strong>Cas d&apos;usage type : </strong>{s.cas}</p>
                  </div>
                ))}
              </div></section>
              <Connector />

              <section id="comment-choisir" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Comment choisir vos premiers servers</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Ne pas tout brancher d&apos;un coup. Voici la sequence qu&apos;on applique chez Ceres pour un deploiement MCP RevOps :</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li><strong>Semaine 1-2 :</strong> ton CRM (HubSpot ou Salesforce). Lecture-seule au depart.</li>
                    <li><strong>Semaine 3-4 :</strong> ajoute Slack pour notifications + Notion pour la doc interne. Le triptyque CRM+Comms+Docs couvre 80% des cas d&apos;usage.</li>
                    <li><strong>Semaine 5-6 :</strong> active les ecritures CRM (scopes write). Premier agent en production.</li>
                    <li><strong>Semaine 7-8 :</strong> branche BigQuery ou ton DWH pour l&apos;analytics avance.</li>
                    <li><strong>Au-dela :</strong> serveurs specifiques selon besoin (Linear pour Ops, GitHub pour DevOps RevOps).</li>
                  </ol>
                </div>
              </div></section>
              <Connector />

              <section id="stack-type" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">3 stacks MCP types par taille de boite</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">Startup Seed-Series A (5-50 personnes)</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]"><strong>Stack :</strong> Attio MCP + Notion MCP + Slack MCP. <strong>Pourquoi :</strong> souplesse, prise en main rapide, cout minimal. 3 servers suffisent pour 90% des cas d&apos;usage.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">Scale-up Series B/C (100-500 personnes)</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]"><strong>Stack :</strong> HubSpot MCP + BigQuery MCP + Slack MCP + Notion MCP + Linear MCP. <strong>Pourquoi :</strong> stack mature, alignement multi-equipes (Sales/Marketing/CS), pilotage ops.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">Enterprise (500+ personnes)</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]"><strong>Stack :</strong> Salesforce MCP + BigQuery MCP + Merge.dev (gateway pour les autres CRMs filiales) + Slack MCP + GitHub MCP + serveur custom interne. <strong>Pourquoi :</strong> compliance, multi-entites, logique metier custom.</p>
                  </div>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Construire votre stack MCP RevOps ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour identifier les 3-5 serveurs prioritaires pour ton contexte.</p>
                <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un creneau</a>
              </div></section>
              <Connector />

              <section><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug.startsWith("..") ? r.slug.replace("../", "/") : `/blog/${r.slug}`} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
