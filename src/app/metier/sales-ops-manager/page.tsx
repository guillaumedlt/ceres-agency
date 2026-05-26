"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const faqs = [
  { q: "Quelle est la difference entre Sales Ops et RevOps Manager ?", a: "Le Sales Ops est focalise sur l'equipe Sales : pipeline, forecast, sales enablement, outils CRM cote sales. Le RevOps est plus large : il aligne Sales, Marketing et CS. Le RevOps Manager est souvent l'evolution du Sales Ops dans les boites qui maturent leur ops." },
  { q: "Quel salaire pour un Sales Ops Manager en France en 2026 ?", a: "Junior (1-3 ans) : 45-55k EUR. Confirme (3-5 ans) : 55-75k EUR. Senior (5+ ans) : 70-90k EUR. Lead Sales Ops dans une scale-up : 80-110k EUR. A Paris, ajouter 10-15% sur ces fourchettes." },
  { q: "Quels outils maitriser pour devenir Sales Ops Manager ?", a: "CRM (HubSpot, Salesforce, Pipedrive), outils de sales engagement (Lemlist, Outreach, Salesloft), Clay et outils d'enrichissement, BI (Looker, Tableau, BigQuery), Excel/Sheets avance, et idealement un peu de SQL et Python pour les analyses ad hoc." },
  { q: "Quelle formation pour devenir Sales Ops Manager ?", a: "Pas de cursus dedie. Les profils typiques viennent de l'ecole de commerce (audit, conseil, finance) ou d'ingenieur. Le plus important : 2-3 ans d'experience commerciale ou data analyst en B2B avant de basculer." },
  { q: "Le poste de Sales Ops va-t-il disparaitre avec l'IA ?", a: "Non. Au contraire, il evolue. Les taches operationnelles (reporting, data entry) sont automatisees, mais le Sales Ops devient le pilote des agents IA, la garante de la qualite data, et l'architecte du systeme RevOps. Plus strategique, plus complexe." },
];

const missions = [
  { title: "Pilotage du pipeline et du forecast", desc: "Garant de l'hygiene du pipeline, du forecasting accuracy et de la fiabilite des previsions au comite executif." },
  { title: "Administration et optimisation du CRM", desc: "Configuration HubSpot/Salesforce, workflows, automations, scoring leads, integrations avec la stack." },
  { title: "Sales enablement et productivite", desc: "Outils, playbooks, formations pour augmenter le ratio de temps vendeur en activite commerciale." },
  { title: "Reporting et analytics commerciaux", desc: "Dashboards par AE, par segment, par stage. Analyses de win rate, cycle de vente, taux de conversion." },
  { title: "Territoire, quotas et compensation", desc: "Decoupage des territoires, fixation des quotas, design des plans de variable et calcul des commissions." },
  { title: "Lead routing et SLA", desc: "Regles d'attribution des leads, gestion des SLA marketing-sales, alertes en cas de derive." },
];

const competences = [
  { title: "CRM avance (HubSpot/Salesforce)", level: "Expert" },
  { title: "Analytics et SQL", level: "Intermediaire+" },
  { title: "Process design et automation", level: "Expert" },
  { title: "Excel/Sheets avance", level: "Expert" },
  { title: "Communication commerciale", level: "Expert" },
  { title: "Project management", level: "Intermediaire+" },
  { title: "Comprehension business B2B", level: "Expert" },
  { title: "Initiation IA / Claude / agents", level: "Intermediaire (2026+)" },
];

const evolution = [
  { from: "Sales Operations Analyst", desc: "Point d'entree classique apres 2-3 ans d'experience data ou commerce." },
  { from: "Sales Ops Manager", desc: "Le poste decrit ici. Pilote l'ops Sales d'une equipe de 10 a 50 commerciaux." },
  { from: "Senior Sales Ops Manager / Head of Sales Ops", desc: "Encadre une equipe d'analystes et Ops, pilote l'ops Sales multi-equipes." },
  { from: "RevOps Manager / Head of RevOps", desc: "Elargit le perimetre a Marketing et CS. Cle pour les boites en serie B+." },
  { from: "VP RevOps / Chief Revenue Officer", desc: "Direction strategique du revenue engine. Profils a 10+ ans d'experience." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Occupation", name: "Sales Operations Manager", description: "Le Sales Ops Manager est le garant de l'efficacite operationnelle de l'equipe Sales en B2B. Il pilote le pipeline, le forecast, le CRM, le sales enablement et le reporting commercial.", occupationLocation: { "@type": "Country", name: "France" }, estimatedSalary: [
    { "@type": "MonetaryAmountDistribution", name: "Junior", currency: "EUR", duration: "P1Y", percentile10: 42000, median: 50000, percentile90: 58000 },
    { "@type": "MonetaryAmountDistribution", name: "Confirme", currency: "EUR", duration: "P1Y", percentile10: 55000, median: 65000, percentile90: 75000 },
    { "@type": "MonetaryAmountDistribution", name: "Senior", currency: "EUR", duration: "P1Y", percentile10: 70000, median: 80000, percentile90: 95000 },
  ], skills: competences.map((c) => c.title).join(", "), responsibilities: missions.map((m) => m.title).join("; "), educationRequirements: "Bac+5 ecole de commerce, ingenieur, ou equivalent. 2-3 ans d'experience en commercial, audit, conseil ou data analyst B2B." },
  { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Fiches metier", item: "https://ceres.agency/metier/sales-ops-manager" }, { "@type": "ListItem", position: 3, name: "Sales Ops Manager", item: "https://ceres.agency/metier/sales-ops-manager" }] },
]};

const sections = [
  { id: "definition", title: "Definition" },
  { id: "missions", title: "Missions cles" },
  { id: "competences", title: "Competences" },
  { id: "salaire", title: "Salaire 2026" },
  { id: "evolution", title: "Evolution carriere" },
  { id: "faq", title: "FAQ" },
];

const relatedArticles = [
  { title: "RevOps Manager : fiche metier complete", slug: "/blog/revops-manager-fiche-poste-salaire-competences", category: "Fiche metier", color: "#FF7A59" },
  { title: "CRM Manager : fiche metier", slug: "/metier/crm-manager", category: "Fiche metier", color: "#4B5EFC" },
  { title: "RevOps vs Sales Ops vs Marketing Ops", slug: "/blog/revops-vs-sales-ops-marketing-ops", category: "Comparatif metiers", color: "#6D00CC" },
];

export default function SalesOpsManagerPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("definition");
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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28"><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p><nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav></div></aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/metier/sales-ops-manager" className="hover:text-[#111] transition-colors">Fiches metier</Link><span>/</span><span className="text-[#666]">Sales Ops Manager</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Fiche metier</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">10 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Sales Ops Manager : fiche metier 2026</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">Missions, competences, salaire, evolution. Le guide complet du metier Sales Operations Manager en B2B en France en 2026.</p>
            </div>

            <article>
              <section id="definition" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Qu&apos;est-ce qu&apos;un Sales Ops Manager ?</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le <strong>Sales Operations Manager</strong> est le garant de l&apos;efficacite operationnelle de l&apos;equipe commerciale en B2B. Il pilote la machine : pipeline, forecast, CRM, sales enablement, reporting.</p>
                  <p>Son role : <em>permettre aux commerciaux de vendre plus en vendant mieux</em>. Concretement, il maximise le ratio de temps que les AEs passent en activite commerciale (vs admin, vs recherche, vs reporting manuel) tout en augmentant la fiabilite des metriques pour le management.</p>
                  <p>Apparu dans les annees 2010 dans les SaaS US, le poste s&apos;est generalise en France a partir de 2020. En 2026, il est devenu indispensable des qu&apos;une equipe Sales depasse 10-15 commerciaux.</p>
                </div>
              </div></section>
              <Connector />

              <section id="missions" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 6 missions cles</h2>
                <div className="space-y-3">
                  {missions.map((m) => (
                    <div key={m.title} className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">{m.title}</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div></section>
              <Connector />

              <section id="competences" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Competences requises</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {competences.map((c) => (
                    <div key={c.title} className="rounded-xl border border-[#F2F2F2] p-4 flex items-center justify-between gap-3">
                      <p className="text-[13px] text-[#111] font-medium">{c.title}</p>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#FF7A59]/10 text-[#FF7A59] font-mono shrink-0">{c.level}</span>
                    </div>
                  ))}
                </div>
              </div></section>
              <Connector />

              <section id="salaire" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Salaire Sales Ops Manager en France 2026</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Seniorite</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Salaire fixe</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Variable typique</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Total OTE</th></tr></thead>
                    <tbody className="text-[#555]">
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Junior (1-3 ans)</td><td className="p-3 border-b border-[#F2F2F2]">42-55 k EUR</td><td className="p-3 border-b border-[#F2F2F2]">5-10 k EUR</td><td className="p-3 border-b border-[#F2F2F2]">47-65 k EUR</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Confirme (3-5 ans)</td><td className="p-3 border-b border-[#F2F2F2]">55-75 k EUR</td><td className="p-3 border-b border-[#F2F2F2]">10-15 k EUR</td><td className="p-3 border-b border-[#F2F2F2]">65-90 k EUR</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Senior (5+ ans)</td><td className="p-3 border-b border-[#F2F2F2]">70-90 k EUR</td><td className="p-3 border-b border-[#F2F2F2]">15-25 k EUR</td><td className="p-3 border-b border-[#F2F2F2]">85-115 k EUR</td></tr>
                      <tr><td className="p-3 font-medium text-[#111]">Lead Sales Ops scale-up</td><td className="p-3">80-110 k EUR</td><td className="p-3">15-30 k EUR + equity</td><td className="p-3">95-140 k EUR + equity</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] text-[#999] mt-4">A Paris, ajouter 10-15% sur ces fourchettes. En full remote depuis une grande ville europeenne ou la province, le delta tombe a 0-5%.</p>
              </div></section>
              <Connector />

              <section id="evolution" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Evolution de carriere</h2>
                <div className="space-y-3">
                  {evolution.map((e, i) => (
                    <div key={e.from} className="flex gap-4">
                      <div className="flex flex-col items-center"><div className="w-8 h-8 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold shrink-0">{String(i + 1).padStart(2, "0")}</div>{i < evolution.length - 1 && <div className="w-px flex-1 bg-[#E8E8E8] my-1" />}</div>
                      <div className="pb-4 flex-1"><p className="text-[13px] font-semibold text-[#111] mb-0.5">{e.from}</p><p className="text-[12px] text-[#777] leading-[1.6]">{e.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div></section>
              <Connector />

              <section id="faq" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ Sales Ops Manager</h2>
                <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#FF7A59] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Besoin de structurer votre Sales Ops ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">On accompagne les scale-ups B2B sur le recrutement, l&apos;onboarding et la structuration de leur fonction Sales Ops.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un echange</Link>
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
