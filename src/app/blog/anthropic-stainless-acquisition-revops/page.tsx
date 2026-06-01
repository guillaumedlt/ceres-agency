"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Anthropic rachete Stainless : ce que ca change pour le RevOps",
  description: "Le 18 mai 2026, Anthropic a annonce l'acquisition de Stainless, la societe specialisee dans la generation de SDK et MCP servers. Analyse de l'impact pour les equipes RevOps.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/anthropic-stainless-acquisition-revops" },
  articleSection: "Actualite IA & RevOps",
  wordCount: 1800,
  inLanguage: "fr",
};

const sections = [
  { id: "faits", title: "Les faits" },
  { id: "stainless", title: "C'est qui Stainless" },
  { id: "pourquoi", title: "Pourquoi cette acquisition" },
  { id: "impact-revops", title: "Impact pour le RevOps" },
  { id: "actions", title: "3 actions a prendre" },
];

const relatedArticles = [
  { title: "Le guide MCP pour le RevOps", slug: "../guide-mcp-revops", category: "Guide", color: "#FF7A59" },
  { title: "Top 10 MCP servers RevOps en 2026", slug: "top-mcp-servers-revops-2026", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "MCP : connecter Claude a votre CRM", slug: "mcp-connecter-claude-crm-outils", category: "IA & Automatisation", color: "#4B5EFC" },
];

export default function AnthropicStainlessArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("faits");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "35%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "65%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#6D00CC] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">Anthropic rachete Stainless</span></nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Actualite IA</Badge><span className="text-[11px] text-[#CCC]">8 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">Anthropic rachete Stainless : ce que ca change pour le RevOps</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Le 18 mai 2026, Anthropic a annonce l&apos;acquisition de Stainless, l&apos;editeur de la production-line MCP servers + SDK. Analyse de l&apos;impact pour les equipes RevOps qui deployent MCP.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="faits" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les faits, courts</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Date :</strong> Anthropic annonce le rachat de Stainless le 18 mai 2026.</li>
                    <li><strong>Cible :</strong> Stainless est une boite YC qui genere automatiquement SDKs (Python, TS, Go, Java) et MCP servers a partir de specs OpenAPI.</li>
                    <li><strong>Montant :</strong> non communique. Stainless avait leve 25M USD en Series B en 2025.</li>
                    <li><strong>Equipe :</strong> ~40 personnes integrees a la division Developer Experience d&apos;Anthropic.</li>
                    <li><strong>Continuite :</strong> Stainless reste utilisable par les editeurs tiers (OpenAI, Google) qui s&apos;en servent aussi.</li>
                  </ul>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">C&apos;est <strong className="text-white">la plus grosse acquisition Anthropic depuis le rachat de Brain Trust en 2024</strong>. Plus important : c&apos;est le premier signal fort qu&apos;Anthropic veut controler la production-line MCP plutot que de la laisser au marche.</p></div>
              </div></section>
              <Connector />

              <section id="stainless" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">C&apos;est qui Stainless</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Stainless est ne du constat que les SaaS qui exposent une API perdent un temps fou a maintenir leurs SDKs et leurs MCP servers. Resultat : la qualite varie, certaines langues sont negligees, et les retards entre la mise a jour API et la mise a jour SDK frustrent les developpeurs.</p>
                  <p>L&apos;approche Stainless : tu donnes ta spec OpenAPI, leur plateforme genere automatiquement les SDKs Python/TS/Go/Java + un MCP server. A chaque mise a jour de la spec, tout se regenere. La maintenance devient quasi-gratuite.</p>
                  <p>Clients historiques : OpenAI, Anthropic, Cloudflare, Lithic, Mintlify. La plupart des SDKs &laquo; modernes &raquo; en 2026 sont Stainless-generated.</p>
                </div>
              </div></section>
              <Connector />

              <section id="pourquoi" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pourquoi Anthropic fait ce rachat</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Trois raisons strategiques se superposent :</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li><strong>Controler la production-line MCP.</strong> MCP a explose (97M downloads/mois en mars 2026, 9 400+ serveurs publics). Si Anthropic veut que MCP reste le standard, il faut industrialiser sa generation. Stainless est l&apos;outil de reference.</li>
                    <li><strong>Reduire la dependance OpenAI.</strong> Stainless genere les SDKs OpenAI aussi. Anthropic preempte le risque qu&apos;OpenAI rachete Stainless en premier, ce qui aurait penalise les autres acteurs MCP.</li>
                    <li><strong>Capacite enterprise.</strong> Les grandes entreprises veulent generer leurs MCP servers en interne avec des contraintes specifiques (compliance, audit, custom logic). Stainless est l&apos;outil pour ca. Anthropic peut maintenant le vendre comme partie de son offre enterprise.</li>
                  </ol>
                </div>
              </div></section>
              <Connector />

              <section id="impact-revops" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Impact concret pour le RevOps</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>4 changements a anticiper sur 12-18 mois :</p>
                  <div className="space-y-3 mt-4">
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">+ Acceleration des MCP servers officiels</p><p className="text-[12px] text-[#777] leading-[1.65]">Beaucoup plus d&apos;editeurs SaaS vont produire un MCP officiel maintenant que la barre technique baisse. Attend 2-3x plus de servers RevOps disponibles d&apos;ici fin 2026.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">+ Qualite et coherence des SDKs</p><p className="text-[12px] text-[#777] leading-[1.65]">Plus de coherence cross-vendor : tous les MCP servers genres par Stainless auront la meme structure d&apos;auth, les memes patterns d&apos;erreur, le meme niveau de documentation.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">! Verrouillage Anthropic-friendly</p><p className="text-[12px] text-[#777] leading-[1.65]">Risque que les futures features Stainless soient prioritisees pour Claude (multi-agent coordination, sampling avance). OpenAI/Gemini garderont l&apos;essentiel mais possiblement avec 6 mois de retard.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">+ Stainless devient une option enterprise viable</p><p className="text-[12px] text-[#777] leading-[1.65]">Pour les RevOps qui veulent un MCP server custom interne (exposer des donnees BI, des regles metier specifiques), Stainless devient le tooling officiellement supporte par Anthropic. Comptez sur des nouvelles features enterprise dans 6-9 mois.</p></div>
                  </div>
                </div>
              </div></section>
              <Connector />

              <section id="actions" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">3 actions concretes a prendre cette semaine</h2>
                <ol className="list-decimal pl-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                  <li><strong>Si tu attendais pour deployer MCP :</strong> arrete d&apos;attendre. La stack est mature et l&apos;ecosysteme va s&apos;industrialiser, donc compter une plus grande couverture des outils tiers d&apos;ici 6 mois.</li>
                  <li><strong>Si tu prevoyais de build un MCP server custom :</strong> evalue Stainless en parallel du SDK Python officiel. Selon le rythme d&apos;evolution post-acquisition, ca pourrait devenir le plus rapide.</li>
                  <li><strong>Si tu pilotes une strategie multi-LLM :</strong> assure-toi que ton architecture MCP reste neutre. La donation a la Linux Foundation en dec 2025 reste le garde-fou principal. Verifie que tes MCP servers respectent la spec standard et pas des extensions Anthropic-only.</li>
                </ol>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]"><strong className="text-white">La grande question</strong> : est-ce que MCP va rester un standard ouvert ou Anthropic va le verrouiller progressivement ? La structure Linux Foundation suggere non, mais l&apos;acquisition Stainless rend Anthropic incontournable dans la production-line. A surveiller : la spec release de juin 2026 et le degre de feature-parity entre Claude et ChatGPT/Gemini sur les capabilities avancees.</p></div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Comment ces changements affectent VOTRE stack ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour discuter de votre roadmap MCP a 6-12 mois et des arbitrages techniques a faire.</p>
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
