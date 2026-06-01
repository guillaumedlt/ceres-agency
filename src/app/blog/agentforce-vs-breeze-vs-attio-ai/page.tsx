"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "AgentForce vs Breeze vs Attio AI : quelle IA CRM choisir en 2026",
  description: "Comparatif honnete des 3 IA CRM majeures en 2026 : AgentForce (Salesforce), Breeze (HubSpot), Attio AI. Capacites, prix, integration MCP, deploiement.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/agentforce-vs-breeze-vs-attio-ai" },
  articleSection: "IA & RevOps", wordCount: 2200, inLanguage: "fr",
};

const sections = [
  { id: "context", title: "Le contexte 2026" },
  { id: "tableau", title: "Tableau comparatif" },
  { id: "agentforce", title: "AgentForce en detail" },
  { id: "breeze", title: "Breeze en detail" },
  { id: "attio-ai", title: "Attio AI en detail" },
  { id: "verdict", title: "Verdict par profil" },
];

const compTable = [
  { critere: "Editeur", agentforce: "Salesforce", breeze: "HubSpot", attio: "Attio" },
  { critere: "Lance", agentforce: "Oct 2024 (GA)", breeze: "Sept 2024 (GA)", attio: "2025 (rolling)" },
  { critere: "Type d'IA", agentforce: "Agents autonomes + Einstein Copilot", breeze: "Copilot + agents specialises", attio: "Recherche semantique + magic fields" },
  { critere: "Prix point d'entree", agentforce: "Inclus Enterprise (+ credits)", breeze: "Pro+ inclus, Enterprise illimite", attio: "Plus (29 USD/user/mois)" },
  { critere: "MCP support", agentforce: "GA Q1 2026 (officiel)", breeze: "GA avril 2026 (mcp.hubspot.com)", attio: "GA mars 2026" },
  { critere: "Use case fort", agentforce: "Service Cloud, agents complexes", breeze: "Content generation, scoring lead", attio: "Recherche, modeling, enrichissement" },
  { critere: "Setup time", agentforce: "Long (3-6 sem custom)", breeze: "Court (1-2 sem)", attio: "Tres court (1-3 jours)" },
  { critere: "Ecosysteme", agentforce: "Industries clouds, AppExchange", breeze: "App Marketplace 1500+ integrations", attio: "100+ integrations natives" },
  { critere: "Best for", agentforce: "Enterprise 500+ users", breeze: "Scale-up 50-500 users", attio: "Startup, modeling complexe" },
];

const relatedArticles = [
  { title: "MCP vs Zapier vs Make en RevOps", slug: "mcp-vs-zapier-vs-make-revops", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Top 10 MCP servers RevOps 2026", slug: "top-mcp-servers-revops-2026", category: "IA & Automatisation", color: "#FF7A59" },
  { title: "Le guide MCP pour le RevOps", slug: "../guide-mcp-revops", category: "Guide", color: "#4B5EFC" },
];

export default function AgentForceVsBreezeArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("context");
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) { const el = els[i]; if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; } }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#6D00CC] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#00A1E0", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#6D00CC] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">AgentForce vs Breeze vs Attio AI</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>IA &amp; RevOps</Badge><span className="text-[11px] text-[#CCC]">11 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">AgentForce vs Breeze vs Attio AI : quelle IA CRM choisir en 2026 ?</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Les 3 grands editeurs CRM ont leur reponse IA en 2026. Voici la comparaison honnete d&apos;une agence qui les deploie tous les 3.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="context" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pourquoi cette question est cruciale en 2026</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Avant 2024, choisir un CRM = choisir entre fonctionnalites classiques + ergonomie + prix. Aujourd&apos;hui, la couche IA native est <strong>determinante</strong> dans la decision a moyen terme. Tu n&apos;achetes pas un CRM pour les 5 prochaines annees, tu achetes une plateforme IA.</p>
                  <p>Les 3 reponses des grands editeurs :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Salesforce AgentForce</strong> : la plus mature, plus complete, la plus chere</li>
                    <li><strong>HubSpot Breeze</strong> : la plus packagee, integree au flow d&apos;utilisation, prix raisonnable</li>
                    <li><strong>Attio AI</strong> : la plus moderne dans son approche, native data-first, parfaite pour les startups</li>
                  </ul>
                </div>
              </div></section>
              <Connector />

              <section id="tableau" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">AgentForce</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Breeze</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Attio AI</th></tr></thead>
                    <tbody className="text-[#555]">{compTable.map((row) => (<tr key={row.critere}><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">{row.critere}</td><td className="p-3 border-b border-[#F2F2F2]">{row.agentforce}</td><td className="p-3 border-b border-[#F2F2F2]">{row.breeze}</td><td className="p-3 border-b border-[#F2F2F2]">{row.attio}</td></tr>))}</tbody>
                  </table>
                </div>
              </div></section>
              <Connector />

              <section id="agentforce" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">AgentForce en detail</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p><strong>Concept :</strong> agents IA autonomes qui s&apos;executent en background. Service agent (support tickets), Sales agent (lead routing), Marketing agent (content). Plus &laquo; agents autonomes &raquo; que &laquo; copilot &raquo;.</p>
                  <p><strong>Force :</strong> profondeur fonctionnelle inegalee, integration Industries Clouds (Banking, Healthcare), Atlas Reasoning Engine pour decisions complexes multi-etapes.</p>
                  <p><strong>Faiblesse :</strong> cout (credits a consommer par appel + abonnement Enterprise), complexite de setup (typiquement 3-6 semaines avec un consultant Salesforce), pas adapte au SMB.</p>
                  <p><strong>Quand choisir :</strong> enterprise 500+ users, compliance forte, deja sur Salesforce, besoin d&apos;agents autonomes vs juste copilot.</p>
                </div>
              </div></section>
              <Connector />

              <section id="breeze" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">HubSpot Breeze en detail</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p><strong>Concept :</strong> assistant copilot integre dans tout HubSpot + agents specialises (Content agent, Prospecting agent, Social agent, Customer agent). Approche &laquo; HumAIn &raquo; - augmenter l&apos;humain, pas le remplacer.</p>
                  <p><strong>Force :</strong> integration parfaite au flow d&apos;utilisation HubSpot, pas de setup additionnel, inclus dans Pro et Enterprise. Tres bon sur content generation, email drafting, scoring lead.</p>
                  <p><strong>Faiblesse :</strong> moins puissant qu&apos;AgentForce sur l&apos;autonomie. Pas de raisonnement multi-etapes profond. Capabilities limitees au scope HubSpot.</p>
                  <p><strong>Quand choisir :</strong> scale-up B2B 50-500 users qui veulent activer l&apos;IA sans projet de 6 mois. Best fit pour 70 % des SaaS B2B francais en 2026.</p>
                </div>
              </div></section>
              <Connector />

              <section id="attio-ai" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Attio AI en detail</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p><strong>Concept :</strong> AI-first, embed dans tout le data model. Recherche semantique (&laquo; les comptes qui ressemblent a Spendesk &raquo;), magic fields (auto-remplit les fields), enrichissement contextuel.</p>
                  <p><strong>Force :</strong> approche modern stack, UX impeccable, MCP natif tres tot (mars 2026), setup time minime. Particulierement fort pour VCs, family offices, agences avec data model flexible.</p>
                  <p><strong>Faiblesse :</strong> moins de profondeur que les 2 autres sur les use cases marketing avances (attribution complexe, lead nurturing multi-touch). Ecosysteme integrations en construction.</p>
                  <p><strong>Quand choisir :</strong> startup Seed-Series A, equipe sales pure &lt; 30 personnes, data model evolutif, ou modelisation complexe (deals + investors + portfolio).</p>
                </div>
              </div></section>
              <Connector />

              <section id="verdict" className="mb-8"><div className="rounded-2xl bg-[#111] p-5 md:p-8">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Verdict par profil</h2>
                <div className="space-y-3 text-[13px] text-white/70 leading-[1.75]">
                  <p><strong className="text-white">Startup Seed - Series A (&lt; 30 sales) : Attio AI.</strong> Modern, abordable, MCP natif, setup en jours.</p>
                  <p><strong className="text-white">Scale-up Series B (50-200 sales) : Breeze.</strong> Le meilleur ratio profondeur / facilite / cout. C&apos;est ce qu&apos;on deploie le plus chez nos clients.</p>
                  <p><strong className="text-white">Scale-up late / public (500+ users) : AgentForce.</strong> La profondeur compte plus que la simplicite a ce stade. Compliance enterprise.</p>
                  <p><strong className="text-white">Multi-stack ou besoin custom : MCP avec Claude</strong> par-dessus n&apos;importe quel CRM. Plus de souplesse mais demande un dev RevOps competent.</p>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Hesitation sur quelle IA CRM ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour identifier l&apos;IA CRM adaptee a ton stade et ton stack.</p>
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
