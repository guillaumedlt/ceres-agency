"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const faqs = [
  { q: "Salesforce ou Pipedrive pour une PME 50 personnes ?", a: "Pipedrive sans hesiter. Salesforce a ce stade c'est un piege : 6 mois d'integration, 165 USD/user/mois minimum en Pro, complexite d'admin. Pipedrive opere en 2 semaines a 49 EUR/user/mois." },
  { q: "Quand passer de Pipedrive a Salesforce ?", a: "Au-dela de 100-150 commerciaux, ou quand vous touchez aux limites Pipedrive : multi-pipelines complexes, permissions fines par equipe, multi-pays avec multi-devises, compliance enterprise." },
  { q: "Pipedrive a-t-il les memes fonctionnalites IA que Salesforce ?", a: "Non. Salesforce Agentforce et Einstein Copilot sont les agents IA les plus matures du marche CRM en 2026. Pipedrive AI est correct (deal probability, email drafting) mais reste limite face a Salesforce." },
  { q: "Combien coute Salesforce vs Pipedrive pour 30 users ?", a: "Pipedrive Professional : 17 640 EUR/an (49 EUR x 30 x 12). Salesforce Sales Cloud Enterprise : 59 400 USD/an (165 USD x 30 x 12). Ratio 3.5x. Plus les couts d'integration Salesforce typiquement 50-150k EUR." },
  { q: "Peut-on migrer de Pipedrive vers Salesforce ?", a: "Oui. Compte 3-6 mois selon la complexite. Les contacts/companies migrent facilement, les workflows et automations doivent etre reconstruits avec Flow Builder/Apex." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", headline: "Salesforce vs Pipedrive : quel CRM choisir en 2026 ?", author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" }, publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" }, datePublished: "2026-05-26", dateModified: "2026-05-26", mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/salesforce-vs-pipedrive" }, articleSection: "Comparatif CRM", inLanguage: "fr" },
  { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Salesforce vs Pipedrive", item: "https://ceres.agency/salesforce-vs-pipedrive" }] },
]};

const sections = [
  { id: "introduction", title: "Le choix en 30 sec" },
  { id: "comparatif", title: "Tableau comparatif" },
  { id: "pour-qui-salesforce", title: "Pour qui Salesforce" },
  { id: "pour-qui-pipedrive", title: "Pour qui Pipedrive" },
  { id: "verdict", title: "Notre verdict" },
  { id: "faq", title: "FAQ" },
];

const comparisonTable = [
  { critere: "Prix entree", salesforce: "75 USD/user/mois Starter, 165 USD/user/mois Pro", pipedrive: "14 EUR/user/mois Essential, 49 EUR/user/mois Pro" },
  { critere: "Setup time", salesforce: "3 a 6 mois pour deploiement complet", pipedrive: "2 a 4 semaines pour mise en route" },
  { critere: "UX commerciale", salesforce: "Lightning Experience, riche mais lourde", pipedrive: "Pipeline visuel drag-drop, ultra adopte" },
  { critere: "Pipeline management", salesforce: "Multi-pipeline avance, stage criteria, validation rules", pipedrive: "Le meilleur pipeline drag-drop du marche" },
  { critere: "Customisation", salesforce: "Illimitee (objets custom, Apex, Lightning)", pipedrive: "Limitee : custom fields oui, workflows basiques" },
  { critere: "Marketing tools", salesforce: "Marketing Cloud separe (cher)", pipedrive: "Aucun, add-on LeadBooster" },
  { critere: "IA", salesforce: "Agentforce, Einstein Copilot, Einstein GPT", pipedrive: "Pipedrive AI : deal probability, email assist" },
  { critere: "Scalabilite", salesforce: "Illimitee, Fortune 500", pipedrive: "1 a 100-200 users, limite ensuite" },
  { critere: "Compliance", salesforce: "SOC 2, ISO 27001, HIPAA, FedRAMP", pipedrive: "SOC 2 Type II, RGPD" },
  { critere: "MCP support", salesforce: "GA Q1 2026 (officiel + Mulesoft)", pipedrive: "Beta officiel en 2026" },
  { critere: "Integrations", salesforce: "5 000+ apps AppExchange", pipedrive: "400+ integrations Marketplace" },
  { critere: "Cout admin annuel", salesforce: "1 admin certifie minimum (60-90k EUR)", pipedrive: "0 a 0.5 ETP admin (auto-gere)" },
];

const relatedArticles = [
  { title: "HubSpot vs Pipedrive : comparatif", slug: "/hubspot-vs-pipedrive", category: "Comparatif CRM", color: "#FF7A59" },
  { title: "HubSpot vs Salesforce : comparatif", slug: "/hubspot-vs-salesforce", category: "Comparatif CRM", color: "#6D00CC" },
  { title: "Salesforce vs Attio : modern stack", slug: "/salesforce-vs-attio", category: "Comparatif CRM", color: "#4B5EFC" },
];

export default function SalesforceVsPipedrivePage() {
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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28"><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p><nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav></div></aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><span className="text-[#666]">Salesforce vs Pipedrive</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Comparatif CRM</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">10 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Salesforce vs Pipedrive : quel CRM choisir en 2026 ?</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">Enterprise grade vs PME simplicite. Comparatif honnete par une agence qui a deploye les deux dans plus de 100 missions.</p>
            </div>

            <article>
              <section id="introduction" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le choix en 30 secondes</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p><strong>Salesforce</strong> est le CRM enterprise par excellence. Customisation illimitee, verticalisation par industrie, Agentforce IA, compliance enterprise. Mais lourd, cher, complexe : pas adapte aux PME ou aux equipes &lt; 50 sales.</p>
                  <p><strong>Pipedrive</strong> est le CRM PME mature. Pipeline drag-drop imbattable, prise en main 1h, prix doux, 0 admin requise. Plafond a 100-200 commerciaux et pas de marketing automation native.</p>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">Regle simple : <strong className="text-white">moins de 100 sales = Pipedrive</strong>. <strong className="text-white">Plus de 100 + compliance = Salesforce</strong>. Au milieu, regardez aussi HubSpot.</p></div>
              </div></section>
              <Connector />

              <section id="comparatif" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif Salesforce vs Pipedrive</h2>
                <div className="overflow-x-auto"><table className="w-full text-[12px] border border-[#E8E8E8]"><thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Salesforce</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Pipedrive</th></tr></thead><tbody className="text-[#555]">{comparisonTable.map((row) => (<tr key={row.critere}><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">{row.critere}</td><td className="p-3 border-b border-[#F2F2F2]">{row.salesforce}</td><td className="p-3 border-b border-[#F2F2F2]">{row.pipedrive}</td></tr>))}</tbody></table></div>
              </div></section>
              <Connector />

              <section id="pour-qui-salesforce" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui Salesforce</h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <li>Enterprises 100+ commerciaux, multi-pays, multi-devises</li>
                  <li>Industries regulees : banque, assurance, sante, defense (Industries Clouds)</li>
                  <li>Equipes RevOps avec besoin Apex custom et flow complexes</li>
                  <li>Compliance enterprise critique (SOC 2, HIPAA, ISO 27001, FedRAMP)</li>
                  <li>Boites pretes a investir dans 1 admin certifie + 6 mois de setup</li>
                </ul>
              </div></section>
              <Connector />

              <section id="pour-qui-pipedrive" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pour qui Pipedrive</h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <li>PME et TPE avec equipe sales pure (5 a 100 commerciaux)</li>
                  <li>Cycle de vente transactionnel court, pas de complexite multi-equipes</li>
                  <li>Budget contraint : 49 EUR/user vs 165 USD/user en Salesforce Pro</li>
                  <li>Equipes qui veulent un CRM operationnel en 2 semaines, pas en 6 mois</li>
                  <li>Process commercial stable qui n&apos;a pas besoin de personnalisation avancee</li>
                </ul>
              </div></section>
              <Connector />

              <section id="verdict" className="mb-8"><div className="rounded-2xl bg-[#111] p-5 md:p-8">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Notre verdict</h2>
                <div className="space-y-4 text-[13px] text-white/70 leading-[1.75]">
                  <p>Sur ce match, il n&apos;y a pas vraiment de competition : ce sont deux outils pour deux marches differents.</p>
                  <p><strong className="text-white">Salesforce</strong> = enterprise, complexite, compliance. Si vous etes Total ou un assureur, vous n&apos;allez pas hesiter avec Pipedrive.</p>
                  <p><strong className="text-white">Pipedrive</strong> = PME pragmatique. Si vous etes une PME de 30 sales qui ferme des deals B2B simples, Salesforce serait un cauchemar.</p>
                  <p>Le piege : choisir Salesforce &laquo; par anticipation de la croissance &raquo; quand vous etes encore PME. Resultat typique : 12 mois d&apos;onboarding rate, abandon, switch vers Pipedrive ou HubSpot dans la frustration.</p>
                </div>
              </div></section>
              <Connector />

              <section id="faq" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ Salesforce vs Pipedrive</h2>
                <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#FF7A59] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Salesforce ou Pipedrive ? On vous aide a decider.</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 minutes d&apos;audit gratuit pour choisir le CRM adapte.</p>
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
