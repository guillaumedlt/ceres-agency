"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MCP vs Zapier vs Make : qui gagne en RevOps en 2026 ?",
  description: "Comparatif MCP, Zapier et Make pour le RevOps : quand utiliser quoi, cas d'usage, couts, complementarite. Verdict honnete 2026.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/mcp-vs-zapier-vs-make-revops" },
  articleSection: "IA & Automatisation",
  wordCount: 2200,
  inLanguage: "fr",
};

const sections = [
  { id: "fausse-question", title: "La fausse question" },
  { id: "vraie-question", title: "La vraie question" },
  { id: "tableau", title: "Tableau comparatif" },
  { id: "mcp-quand", title: "Quand MCP" },
  { id: "zapier-quand", title: "Quand Zapier / Make" },
  { id: "stack-hybride", title: "Stack hybride recommandee" },
  { id: "couts", title: "Comparatif couts reels" },
];

const relatedArticles = [
  { title: "Le guide MCP pour le RevOps", slug: "../guide-mcp-revops", category: "Guide", color: "#FF7A59" },
  { title: "Top 10 MCP servers RevOps en 2026", slug: "top-mcp-servers-revops-2026", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Zapier vs Make vs n8n : quel outil RevOps ?", slug: "zapier-vs-make-vs-n8n-revops", category: "Comparatif outils", color: "#4B5EFC" },
];

const compTable = [
  { critere: "Type d'outil", mcp: "Protocole pour LLM agentique", zapier: "iPaaS no-code triggers/actions", make: "iPaaS visuel scenarios" },
  { critere: "Declenchement", mcp: "Demande utilisateur / agent", zapier: "Webhook / cron / event", make: "Webhook / cron / event" },
  { critere: "Logique", mcp: "Contextuelle (LLM decide)", zapier: "Deterministe (regles fixes)", make: "Deterministe + branching" },
  { critere: "Latence", mcp: "1-10 sec (selon prompt)", zapier: "1-15 min (free) ou 1 min (paid)", make: "Quasi temps reel" },
  { critere: "Multi-step complexe", mcp: "Excellent (agent peut iterer)", zapier: "Limite", make: "Excellent (visual)" },
  { critere: "Apprentissage", mcp: "Apprend du contexte", zapier: "Statique", make: "Statique" },
  { critere: "Setup time", mcp: "10 min par serveur", zapier: "5 min par Zap", make: "15 min par scenario" },
  { critere: "Cout (5000 ops/mois)", mcp: "Cout LLM ~30 EUR + serveurs gratuits", zapier: "~50 EUR Pro plan", make: "~16 EUR Core plan" },
  { critere: "Audit / Logs", mcp: "Logs LLM + audit MCP server", zapier: "History dans dashboard", make: "Execution history" },
  { critere: "Best for", mcp: "Decisions contextuelles, agents IA", zapier: "Flows simples non-critiques", make: "Workflows complexes deterministe" },
];

export default function McpVsZapierMakeArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("fausse-question");

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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "35%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "65%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#4B5EFC] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">MCP vs Zapier vs Make</span></nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>IA &amp; Automatisation</Badge><span className="text-[11px] text-[#CCC]">11 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">MCP vs Zapier vs Make : qui gagne en RevOps en 2026 ?</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Spoiler : ni l&apos;un ni l&apos;autre. Ce sont 3 outils pour 3 problemes differents. Voici comment on les fait travailler ensemble chez nos clients RevOps.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="fausse-question" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">La fausse question : &laquo; MCP va-t-il tuer Zapier ? &raquo;</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Depuis que MCP a explose (97M downloads/mois en mars 2026), on entend partout : &laquo; Zapier c&apos;est fini, MCP fait tout. &raquo; C&apos;est faux. Et tres mauvais conseil pour un RevOps qui veut deployer.</p>
                  <p>MCP et Zapier (ou Make, n8n) ne font pas la meme chose. Comparer les deux, c&apos;est comparer un cerveau et une horloge. L&apos;un decide, l&apos;autre execute a heure fixe. Vous avez besoin des deux.</p>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">La bonne question n&apos;est pas <em>quel outil remplace l&apos;autre</em>, mais <em>quel outil pour quel cas d&apos;usage</em>. La reponse change la maniere dont tu structures ta stack RevOps.</p></div>
              </div></section>
              <Connector />

              <section id="vraie-question" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">La vraie question : decision contextuelle ou flow deterministe ?</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Regle simple a appliquer :</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li><strong>Si tu sais a l&apos;avance quoi faire</strong> (quand X arrive, fais Y) &rarr; iPaaS (Zapier, Make, n8n). Plus rapide, plus fiable, moins cher.</li>
                    <li><strong>Si tu veux qu&apos;un agent decide quoi faire selon le contexte</strong> (analyse le contact, choisis l&apos;action appropriee) &rarr; MCP avec LLM.</li>
                  </ul>
                  <p>Les RevOps qui ont fait l&apos;erreur en 2025-2026 : remplacer 80 Zaps par 80 prompts MCP. Resultat : latence x10, cout LLM x20, et perte de fiabilite sur des operations qui devaient juste tourner.</p>
                </div>
              </div></section>
              <Connector />

              <section id="tableau" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">MCP</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Zapier</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Make</th></tr></thead>
                    <tbody className="text-[#555]">{compTable.map((row) => (<tr key={row.critere}><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">{row.critere}</td><td className="p-3 border-b border-[#F2F2F2]">{row.mcp}</td><td className="p-3 border-b border-[#F2F2F2]">{row.zapier}</td><td className="p-3 border-b border-[#F2F2F2]">{row.make}</td></tr>))}</tbody>
                  </table>
                </div>
              </div></section>
              <Connector />

              <section id="mcp-quand" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Cas d&apos;usage MCP (la decision contextuelle)</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Brief pre-call dynamique</p><p className="text-[12px] text-[#777] leading-[1.65]">L&apos;agent lit le CRM, LinkedIn, news, choisit les 3 angles les plus pertinents selon le contexte. Pas codable en flow.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Qualification semantique de form submissions</p><p className="text-[12px] text-[#777] leading-[1.65]">Lire un message free-text, comprendre le besoin, classer en hot/warm/cold, assigner au bon AE. Trop contextuel pour Zapier.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Account research deep</p><p className="text-[12px] text-[#777] leading-[1.65]">Analyser un compte sur 6 mois d&apos;historique CRM + news + LinkedIn pour preparer un Account Plan. Pas un flow lineaire.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Reporting narratif weekly</p><p className="text-[12px] text-[#777] leading-[1.65]">Generer un brief texte avec insights, pas juste un dashboard. L&apos;agent identifie ce qui vaut la peine d&apos;etre dit.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="zapier-quand" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Cas d&apos;usage Zapier / Make (le flow deterministe)</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Lead routing round-robin</p><p className="text-[12px] text-[#777] leading-[1.65]">Quand nouveau MQL &rarr; assign au prochain AE dispo selon territoire et charge. Logique simple, deterministe.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Sync billing &rarr; CRM</p><p className="text-[12px] text-[#777] leading-[1.65]">Quand facture payee dans Stripe &rarr; update deal stage + notifier CS. Mapping fixe, latence critique.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Slack notifications sur stage change</p><p className="text-[12px] text-[#777] leading-[1.65]">Quand deal passe en Closed Won &rarr; message dans #wins + GIF. Simple, frequent, latence faible.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Enrichissement nouvelle inscription</p><p className="text-[12px] text-[#777] leading-[1.65]">Quand form submission &rarr; Clay / Dropcontact enrichit le contact &rarr; update CRM. Deterministe.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="stack-hybride" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">La stack hybride qu&apos;on deploie</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Une stack RevOps moderne en 2026, c&apos;est :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Make (ou n8n)</strong> pour les workflows deterministe sales/marketing/ops : 30 a 80 scenarios actifs, 80% de l&apos;automation classique.</li>
                    <li><strong>MCP avec Claude</strong> pour les 5-15 cas d&apos;usage qui necessitent du jugement contextuel : briefs, qualification, analytics narratif.</li>
                    <li><strong>Zapier</strong> garde 5-10 Zaps simples qui marchent depuis longtemps. Pas besoin de tout migrer.</li>
                  </ul>
                  <p>Le mauvais reflexe : vouloir tout faire en MCP parce que c&apos;est sexy. Le bon : MCP la ou le LLM apporte de la valeur, Make la ou la deterministe est plus fiable et moins chere.</p>
                </div>
              </div></section>
              <Connector />

              <section id="couts" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Comparatif couts reels (scale-up Series B, 5000 ops/mois)</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Outil</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Cout mensuel</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Ce qu&apos;il fait</th></tr></thead>
                    <tbody className="text-[#555]">
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Make Core</td><td className="p-3 border-b border-[#F2F2F2]">~16 EUR</td><td className="p-3 border-b border-[#F2F2F2]">40-50 scenarios deterministe</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Zapier Pro</td><td className="p-3 border-b border-[#F2F2F2]">~50 EUR</td><td className="p-3 border-b border-[#F2F2F2]">10-15 Zaps simples</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Claude Pro (MCP)</td><td className="p-3 border-b border-[#F2F2F2]">~17 EUR/user</td><td className="p-3 border-b border-[#F2F2F2]">Acces Claude Desktop + MCP unlimited</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Claude API (server-side)</td><td className="p-3 border-b border-[#F2F2F2]">~30-100 EUR</td><td className="p-3 border-b border-[#F2F2F2]">5-15 prompts/jour pour agents prod</td></tr>
                      <tr><td className="p-3 font-medium text-[#111]"><strong>Total stack hybride</strong></td><td className="p-3 font-semibold">~150-250 EUR/mois</td><td className="p-3">Tout couvert pour 5 users</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] text-[#999] mt-4">A comparer : un outil de RPA enterprise (UiPath, Automation Anywhere) coute 5-15k EUR/mois pour le meme perimetre fonctionnel.</p>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Audit de votre stack d&apos;automation ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min pour cartographier vos Zaps/scenarios actuels et identifier ceux qui devraient passer en MCP (et ceux qui doivent rester).</p>
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
