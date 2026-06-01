"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Customer Success Ops : la nouvelle frontiere du RevOps en 2026",
  description: "Customer Success Ops devient la 4e sous-fonction RevOps en 2026. Missions, KPIs, stack technologique, profil a recruter. Pourquoi c'est strategique.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/customer-success-ops-nouvelle-frontiere" },
  articleSection: "Strategie RevOps", wordCount: 2000, inLanguage: "fr",
};

const sections = [
  { id: "emergence", title: "Pourquoi maintenant" },
  { id: "missions", title: "Missions cles" },
  { id: "kpis", title: "KPIs CS Ops" },
  { id: "stack", title: "Stack technologique" },
  { id: "recruter", title: "Profil a recruter" },
  { id: "quand", title: "Quand creer le poste" },
];

const relatedArticles = [
  { title: "NRR : guide complet", slug: "nrr-net-revenue-retention-guide", category: "Strategie RevOps", color: "#FF7A59" },
  { title: "Customer Success x RevOps", slug: "customer-success-revops", category: "Customer Success", color: "#4B5EFC" },
  { title: "IA detection churn customer success", slug: "ia-customer-success-detection-churn", category: "IA & RevOps", color: "#6D00CC" },
];

export default function CSOpsArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("emergence");
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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#22C55E] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#22C55E] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">Customer Success Ops</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Strategie RevOps</Badge><span className="text-[11px] text-[#CCC]">10 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">Customer Success Ops : la nouvelle frontiere du RevOps en 2026</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Sales Ops, Marketing Ops, RevOps generaliste... et maintenant Customer Success Ops. C&apos;est la sous-fonction qui emerge le plus rapidement dans les scale-ups SaaS B2B en 2026.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="emergence" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pourquoi le CS Ops emerge maintenant</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Trois mouvements parallel rendent le CS Ops indispensable en 2026 :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>La pression sur la NRR</strong> : les VCs scrutent la NRR comme jamais. Cible 110%+ pour les boites valorisees a 20x ARR. Sans CS Ops, atteindre ces niveaux est impossible a scaler.</li>
                    <li><strong>L&apos;explosion des CS Managers (CSM)</strong> : les scale-ups passent de 2 CSMs a 15+ CSMs en 18 mois. Sans ops dediee, le pilotage devient impossible.</li>
                    <li><strong>L&apos;IA appliquee a la retention</strong> : detection churn precoce, expansion automatisee, health scoring predictif. Tout ca demande une infra ops dediee.</li>
                  </ul>
                  <p>Resultat : le titre &laquo; Customer Success Operations Manager &raquo; a cru de <strong>+180%</strong> sur LinkedIn entre 2024 et 2026.</p>
                </div>
              </div></section>
              <Connector />

              <section id="missions" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 6 missions cles du CS Ops</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">1. Health scoring predictif</p><p className="text-[12px] text-[#777] leading-[1.65]">Modele qui synthetise usage produit, support tickets, NPS, engagement comm. Categorise les comptes en green/amber/red. Mise a jour automatique.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">2. Detection churn precoce</p><p className="text-[12px] text-[#777] leading-[1.65]">Signaux faibles (drop usage, sentiment ticket, changement contact) declenchent alertes CSM. Cible : detecter J-90 avant le renew, pas J-10.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">3. Expansion playbook automatise</p><p className="text-[12px] text-[#777] leading-[1.65]">Detecter signaux d&apos;intent expansion (usage growth, nouveaux users, feature requests payantes) et declencher sequence CSM ou self-serve upsell.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">4. Onboarding pilotage</p><p className="text-[12px] text-[#777] leading-[1.65]">Time-to-value tracking, milestones automatises, alertes si client en retard. Objectif : reduire le time-to-value de 30%.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">5. CSM territory et capacity planning</p><p className="text-[12px] text-[#777] leading-[1.65]">Repartition equitable des comptes par CSM selon revenue + complexite. Capacity planning quarterly + alertes overload.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">6. Reporting NRR / GRR executif</p><p className="text-[12px] text-[#777] leading-[1.65]">Tableau de bord NRR, GRR, churn voluntary/involuntary, expansion par segment. Le CS Ops fournit les chiffres credibles au board.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="kpis" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">KPIs pilotes par le CS Ops</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">KPI</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Cible saine</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Cible excellence</th></tr></thead>
                    <tbody className="text-[#555]">
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">NRR (Net Revenue Retention)</td><td className="p-3 border-b border-[#F2F2F2]">&gt; 100 %</td><td className="p-3 border-b border-[#F2F2F2]">&gt; 115 %</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">GRR (Gross Revenue Retention)</td><td className="p-3 border-b border-[#F2F2F2]">&gt; 90 %</td><td className="p-3 border-b border-[#F2F2F2]">&gt; 95 %</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Time-to-value</td><td className="p-3 border-b border-[#F2F2F2]">&lt; 30 j</td><td className="p-3 border-b border-[#F2F2F2]">&lt; 14 j</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Detection churn (avance)</td><td className="p-3 border-b border-[#F2F2F2]">J-30 avant renew</td><td className="p-3 border-b border-[#F2F2F2]">J-60+</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Expansion rate</td><td className="p-3 border-b border-[#F2F2F2]">10-15 % ARR</td><td className="p-3 border-b border-[#F2F2F2]">20 %+</td></tr>
                      <tr><td className="p-3 font-medium text-[#111]">Save desk success rate</td><td className="p-3">&gt; 40 %</td><td className="p-3">&gt; 60 %</td></tr>
                    </tbody>
                  </table>
                </div>
              </div></section>
              <Connector />

              <section id="stack" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Stack technologique CS Ops 2026</h2>
                <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le stack typique d&apos;un CS Ops mature :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>CSP (Customer Success Platform)</strong> : Gainsight, ChurnZero, ou Vitally. Le coeur du systeme.</li>
                    <li><strong>Product Analytics</strong> : Mixpanel, Amplitude, Pendo. Mesurer l&apos;usage reel.</li>
                    <li><strong>CRM</strong> : HubSpot, Salesforce, Attio. Source de verite client + deals.</li>
                    <li><strong>Support</strong> : Zendesk, Intercom, Crisp. Tickets + sentiment.</li>
                    <li><strong>NPS / Survey</strong> : Hotjar, Typeform, Survicate. Voix du client.</li>
                    <li><strong>Data warehouse</strong> : BigQuery, Snowflake. Modeling avance health score.</li>
                    <li><strong>IA</strong> : Claude via MCP pour analyse semantique des tickets, health scoring predictif.</li>
                  </ul>
                </div>
              </div></section>
              <Connector />

              <section id="recruter" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Profil a recruter</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le CS Ops est un profil hybride entre RevOps generaliste et Customer Success Manager. Background typique :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>2-4 ans d&apos;experience CSM (avoir gere des comptes, pas juste les ops)</li>
                    <li>OU 3-5 ans Sales Ops / RevOps avec mutation vers CS</li>
                    <li>Maitrise CSP (Gainsight, ChurnZero, Vitally) ou capacite a apprendre vite</li>
                    <li>Data-driven : SQL, dashboards, modeling churn</li>
                    <li>Comprehension business : sait expliquer NRR a un CFO</li>
                  </ul>
                  <p>Salaire 2026 : confirme 55-75k EUR + variable. Senior 75-100k EUR + variable + equity.</p>
                </div>
              </div></section>
              <Connector />

              <section id="quand" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Quand creer ce poste</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>3 signaux qui indiquent qu&apos;il est temps :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Tu as <strong>5+ CSMs</strong> et leur pilotage devient chaotique</li>
                    <li>Ton <strong>NRR stagne ou baisse</strong> alors que ton produit ne baisse pas en qualite</li>
                    <li>Le <strong>renouvellement est devine plus que pilote</strong> - tu decouvres les churns J-30, pas J-90</li>
                  </ul>
                  <p>Avant cela, c&apos;est generalement le RevOps generaliste ou le Head of CS qui s&apos;en occupe. Apres : CS Ops dedie.</p>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Structurer votre CS Ops ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour evaluer ton stade et identifier les 2-3 chantiers CS Ops prioritaires.</p>
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
