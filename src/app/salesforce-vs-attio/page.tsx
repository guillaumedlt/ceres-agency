"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const faqs = [
  { q: "Attio peut-il vraiment remplacer Salesforce ?", a: "Pour les startups et scale-ups jusqu'a 200-300 personnes : oui. Au-dela ou pour les enterprises regulees (banque, sante, defense) avec besoins compliance Salesforce Industries, non. Salesforce reste imbattable sur la verticalisation enterprise." },
  { q: "Quelle est la difference de cout sur 12 mois ?", a: "Pour 20 users : Attio Plus = 6 960 USD/an. Salesforce Sales Cloud Enterprise = 36 000 USD/an. Ratio 5x. Mais Salesforce inclut beaucoup plus de features prets a l'emploi." },
  { q: "Salesforce a-t-il une UX moderne en 2026 ?", a: "Lightning Experience s'est ameliore mais reste lourd vs Attio Notion-like. Pour adoption commerciale, Attio gagne sur la satisfaction utilisateur. Pour la profondeur fonctionnelle, Salesforce reste devant." },
  { q: "Lequel pour un VC ou un fonds d'investissement ?", a: "Attio. Le data model flexible (deals + investors + portfolio + LPs) est plus adapte que Salesforce Financial Services Cloud (overkill et cher). Sauf si le fonds gere >50 milliards et a besoin de compliance ISO 27001 enterprise." },
  { q: "Migration de Salesforce vers Attio : c'est faisable ?", a: "Oui, via export CSV ou via Merge.dev. Compte 3-8 semaines selon la complexite Salesforce. Les workflows Lightning, Apex et Process Builder doivent etre redocumentes pour reconstruction Attio." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", headline: "Salesforce vs Attio : quel CRM choisir en 2026 ?", author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" }, publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" }, datePublished: "2026-05-26", dateModified: "2026-05-26", mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/salesforce-vs-attio" }, articleSection: "Comparatif CRM", inLanguage: "fr" },
  { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Salesforce vs Attio", item: "https://ceres.agency/salesforce-vs-attio" }] },
]};

const sections = [
  { id: "introduction", title: "Le choix en 30 sec" },
  { id: "comparatif", title: "Tableau comparatif" },
  { id: "pour-qui-salesforce", title: "Pour qui Salesforce" },
  { id: "pour-qui-attio", title: "Pour qui Attio" },
  { id: "verdict", title: "Notre verdict" },
  { id: "faq", title: "FAQ" },
];

const comparisonTable = [
  { critere: "Prix entree", salesforce: "75 USD/user/mois Starter, 165 USD/user/mois Pro", attio: "Gratuit (3 users), 29 USD/user/mois Plus" },
  { critere: "UX / Interface", salesforce: "Lightning Experience, riche mais lourde", attio: "Notion-like, ultra moderne, prise en main 10 min" },
  { critere: "Customisation", salesforce: "Tout est customisable (objets, workflows, Apex, Lightning)", attio: "Schema flexible mais limites custom code" },
  { critere: "Marketing tools", salesforce: "Marketing Cloud separe (cher, complexe)", attio: "Aucun outil marketing natif" },
  { critere: "Automatisation", salesforce: "Flow Builder, Process Builder, Apex (illimite)", attio: "Automations basiques, en developpement" },
  { critere: "IA", salesforce: "Agentforce (agents IA), Einstein Copilot, Einstein GPT", attio: "Attio AI : recherche semantique, magic fields, enrichissement" },
  { critere: "MCP support", salesforce: "GA Q1 2026 (officiel + Mulesoft)", attio: "GA mars 2026, server officiel" },
  { critere: "Scalabilite", salesforce: "Illimitee, deploye chez Fortune 500", attio: "1 a 100 users, moins adapte au-dela" },
  { critere: "Verticalisation", salesforce: "Sales/Service/Marketing Cloud + 12 Industries (Banking, Health...)", attio: "Generaliste flexible" },
  { critere: "Integrations", salesforce: "5 000+ apps AppExchange", attio: "100+ integrations natives" },
  { critere: "Compliance enterprise", salesforce: "SOC 2, ISO 27001, HIPAA, FedRAMP", attio: "SOC 2 Type II, RGPD compliant" },
];

const relatedArticles = [
  { title: "HubSpot vs Salesforce : comparatif complet", slug: "/hubspot-vs-salesforce", category: "Comparatif CRM", color: "#FF7A59" },
  { title: "HubSpot vs Attio : comparatif complet", slug: "/hubspot-vs-attio", category: "Comparatif CRM", color: "#6D00CC" },
  { title: "Salesforce vs Pipedrive : comparatif", slug: "/salesforce-vs-pipedrive", category: "Comparatif CRM", color: "#4B5EFC" },
];

export default function SalesforceVsAttioPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) { const el = els[i]; if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; } }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#00A1E0", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28"><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p><nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav></div></aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><span className="text-[#666]">Salesforce vs Attio</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Comparatif CRM</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">10 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Salesforce vs Attio : quel CRM choisir en 2026 ?</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">Enterprise grade vs modern stack. Comparatif honnete par une agence qui a deploye les deux pour scale-ups et grands groupes.</p>
            </div>

            <article>
              <section id="introduction" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le choix en 30 secondes</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p><strong>Salesforce</strong> est l&apos;enterprise CRM par excellence. Profondeur fonctionnelle illimitee, verticalisation par industrie, compliance enterprise, Agentforce IA. Coute cher et complexe a deployer (3-6 mois typique).</p>
                  <p><strong>Attio</strong> est le challenger moderne. UX Notion-like, schema flexible, prix accessible, MCP en GA. Parfait pour les startups et scale-ups qui ne veulent pas d&apos;usine a gaz.</p>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">Regle : <strong className="text-white">enterprise 300+ users, compliance forte = Salesforce</strong>. <strong className="text-white">Startup/scale-up &lt; 200 users, modernite = Attio</strong>.</p></div>
              </div></section>
              <Connector />

              <section id="comparatif" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif Salesforce vs Attio</h2>
                <div className="overflow-x-auto"><table className="w-full text-[12px] border border-[#E8E8E8]"><thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Salesforce</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Attio</th></tr></thead><tbody className="text-[#555]">{comparisonTable.map((row) => (<tr key={row.critere}><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">{row.critere}</td><td className="p-3 border-b border-[#F2F2F2]">{row.salesforce}</td><td className="p-3 border-b border-[#F2F2F2]">{row.attio}</td></tr>))}</tbody></table></div>
              </div></section>
              <Connector />

              <section id="pour-qui-salesforce" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui Salesforce</h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <li>Enterprises 300+ users avec gouvernance complexe et multi-pays</li>
                  <li>Industries regulees (banque, assurance, sante, defense) necessitant Industries Clouds</li>
                  <li>Equipes RevOps avec besoin Apex custom et workflows complexes</li>
                  <li>Compliance enterprise critique (SOC 2, HIPAA, ISO 27001, FedRAMP)</li>
                  <li>Stack avec Marketing Cloud + Service Cloud + Sales Cloud integres</li>
                </ul>
              </div></section>
              <Connector />

              <section id="pour-qui-attio" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui Attio</h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <li>Startups B2B et scale-ups (Seed - Series B) avec data model evolutif</li>
                  <li>VCs, fonds d&apos;investissement, family offices avec entites complexes</li>
                  <li>Equipes qui valorisent l&apos;adoption commerciale rapide</li>
                  <li>Budgets contraints (5x moins cher que Salesforce a fonctionnalites equivalentes pour CRM Sales pur)</li>
                  <li>Boites qui veulent profiter du modern stack IA + MCP natif</li>
                </ul>
              </div></section>
              <Connector />

              <section id="verdict" className="mb-8"><div className="rounded-2xl bg-[#111] p-5 md:p-8">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Notre verdict</h2>
                <div className="space-y-4 text-[13px] text-white/70 leading-[1.75]">
                  <p><strong className="text-white">Salesforce</strong> reste imbattable sur l&apos;enterprise. Pas de discussion possible : si vous etes Total, BNP Paribas, ou une SaaS au-dela de 500 personnes avec multi-pays, vous serez sur Salesforce.</p>
                  <p><strong className="text-white">Attio</strong> est le bon choix sur 90% des startups et scale-ups B2B en 2026. UX, prix, modernite, MCP natif. La plupart de nos nouveaux clients en early/mid-stage choisissent Attio.</p>
                  <p>La vraie question n&apos;est pas <em>quel CRM</em> mais <em>quelle taille atteindrez-vous dans 5 ans</em>. Si scale-up modeste, Attio. Si vision enterprise, demarrez Salesforce.</p>
                </div>
              </div></section>
              <Connector />

              <section id="faq" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ Salesforce vs Attio</h2>
                <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#FF7A59] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Salesforce ou Attio ? On vous aide a decider.</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 minutes d&apos;audit gratuit pour choisir l&apos;outil adapte a votre stade.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un diagnostic</Link>
              </div></section>
              <Connector />

              <section><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
