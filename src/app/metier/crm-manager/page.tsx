"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const faqs = [
  { q: "Quelle est la difference entre CRM Manager et Sales Ops ?", a: "Le CRM Manager est focalise sur l'outil : configuration, integrations, qualite data, administration. Le Sales Ops est plus large : il utilise le CRM comme moyen, mais pilote aussi le pipeline, le forecast, les quotas. Le CRM Manager est parfois rattache au Sales Ops Manager dans les grosses structures." },
  { q: "Quelles certifications obtenir ?", a: "Pour HubSpot : HubSpot Marketing Hub, Sales Hub, Service Hub, Solutions Architect Design (toutes gratuites). Pour Salesforce : Salesforce Administrator (ADM-201), Advanced Administrator, Platform App Builder. Ces certifs ouvrent 80% des opportunites." },
  { q: "Faut-il savoir coder pour etre CRM Manager ?", a: "Pas en entree de poste. Mais des le niveau Confirme, savoir lire/ecrire du JavaScript pour HubSpot custom code workflows, du Apex pour Salesforce, et du SQL pour les analyses devient un plus tres differenciant en remuneration." },
  { q: "Le metier de CRM Manager va-t-il disparaitre avec l'IA ?", a: "Non, il evolue. Les agents IA et MCP servers necessitent encore plus de gouvernance CRM : qualite data, gestion des permissions, audit des actions. Le CRM Manager devient le gardien du systeme dans lequel les agents tournent." },
];

const missions = [
  { title: "Administration du CRM", desc: "Configuration, custom fields, workflows, automations, integrations, gouvernance des permissions." },
  { title: "Qualite et hygiene des donnees", desc: "Deduplication, standardisation, enrichissement, audits mensuels, monitoring data quality." },
  { title: "Integrations avec la stack", desc: "Marketing automation, billing, support, data warehouse. Maintenance des connecteurs et resolution des incidents sync." },
  { title: "Formation et support utilisateurs", desc: "Onboarding nouveaux commerciaux, documentation, support quotidien sur l'utilisation du CRM." },
  { title: "Roadmap d'evolution CRM", desc: "Identifier les nouvelles features a deployer, prioriser les chantiers, gerer le change management." },
  { title: "Gouvernance et compliance", desc: "RGPD, retention des donnees, audit trails, gestion des acces a la demission/depart." },
];

const competences = [
  { title: "Maitrise CRM (HubSpot/Salesforce)", level: "Expert" },
  { title: "Workflows et automations", level: "Expert" },
  { title: "Data modeling et integrations", level: "Confirme" },
  { title: "SQL et reporting", level: "Confirme" },
  { title: "JavaScript / Apex (avance)", level: "Plus differenciant" },
  { title: "Project management", level: "Intermediaire+" },
  { title: "RGPD et gouvernance data", level: "Confirme" },
  { title: "Communication transverse", level: "Confirme" },
];

const evolution = [
  { from: "CRM Administrator", desc: "Poste d'entree apres formation certifiante + 1-2 ans d'experience." },
  { from: "CRM Manager", desc: "Pilote 1 ou 2 CRM pour une organisation 50-300 personnes." },
  { from: "Senior CRM Manager / CRM Architect", desc: "Architecte des integrations complexes, multi-CRM, multi-pays." },
  { from: "Head of CRM / RevOps Manager", desc: "Elargit vers l'ops business : pipeline, forecast, alignement multi-equipes." },
  { from: "VP RevOps", desc: "Direction strategique du systeme revenue avec equipe pluridisciplinaire." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Occupation", name: "CRM Manager", description: "Le CRM Manager administre, configure et fait evoluer la plateforme CRM (HubSpot, Salesforce, Pipedrive, Attio). Garant de la qualite data, des integrations et de l'adoption.", occupationLocation: { "@type": "Country", name: "France" }, skills: competences.map((c) => c.title).join(", "), responsibilities: missions.map((m) => m.title).join("; ") },
  { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Fiches metier", item: "https://ceres.agency/metier/crm-manager" }, { "@type": "ListItem", position: 3, name: "CRM Manager", item: "https://ceres.agency/metier/crm-manager" }] },
]};

const sections = [
  { id: "definition", title: "Definition" },
  { id: "missions", title: "Missions cles" },
  { id: "competences", title: "Competences" },
  { id: "evolution", title: "Evolution carriere" },
  { id: "faq", title: "FAQ" },
];

const relatedArticles = [
  { title: "Sales Ops Manager : fiche metier", slug: "/metier/sales-ops-manager", category: "Fiche metier", color: "#FF7A59" },
  { title: "RevOps Director : fiche metier", slug: "/metier/revops-director", category: "Fiche metier", color: "#4B5EFC" },
  { title: "Consultant HubSpot : notre approche", slug: "/consultant-hubspot", category: "HubSpot", color: "#6D00CC" },
];

export default function CRMManagerPage() {
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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28"><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p><nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav></div></aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/metier/sales-ops-manager" className="hover:text-[#111] transition-colors">Fiches metier</Link><span>/</span><span className="text-[#666]">CRM Manager</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Fiche metier</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">9 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">CRM Manager : fiche metier 2026</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">Missions, competences, certifications, salaire et evolution. Le guide complet du metier CRM Manager en B2B en France.</p>
            </div>

            <article>
              <section id="definition" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Qu&apos;est-ce qu&apos;un CRM Manager ?</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le <strong>CRM Manager</strong> est l&apos;administrateur et l&apos;architecte de la plateforme CRM (HubSpot, Salesforce, Pipedrive, Attio). Il assure que l&apos;outil colle au modele business, que la donnee reste propre, et que les utilisateurs l&apos;adoptent.</p>
                  <p>Souvent confondu avec le Sales Ops Manager, le role est plus technique et plus focalise outil. Dans les grosses structures, le CRM Manager rapporte au Head of RevOps. Dans les PME, il est souvent seul a faire le job.</p>
                  <p>Le metier monte en valeur en 2026 avec l&apos;arrivee des agents IA (MCP, Claude, ChatGPT) qui necessitent une qualite data irreprochable et une gouvernance des permissions plus fine.</p>
                </div>
              </div></section>
              <Connector />

              <section id="missions" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 6 missions cles</h2>
                <div className="space-y-3">{missions.map((m) => (<div key={m.title} className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><h3 className="text-[13px] font-semibold text-[#111] mb-1">{m.title}</h3><p className="text-[12px] text-[#777] leading-[1.65]">{m.desc}</p></div>))}</div>
              </div></section>
              <Connector />

              <section id="competences" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Competences requises</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{competences.map((c) => (<div key={c.title} className="rounded-xl border border-[#F2F2F2] p-4 flex items-center justify-between gap-3"><p className="text-[13px] text-[#111] font-medium">{c.title}</p><span className="text-[10px] px-2 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-mono shrink-0">{c.level}</span></div>))}</div>
              </div></section>
              <Connector />

              <section id="evolution" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Evolution de carriere</h2>
                <div className="space-y-3">{evolution.map((e, i) => (<div key={e.from} className="flex gap-4"><div className="flex flex-col items-center"><div className="w-8 h-8 rounded-lg bg-[#4B5EFC] flex items-center justify-center text-white text-[11px] font-bold shrink-0">{String(i + 1).padStart(2, "0")}</div>{i < evolution.length - 1 && <div className="w-px flex-1 bg-[#E8E8E8] my-1" />}</div><div className="pb-4 flex-1"><p className="text-[13px] font-semibold text-[#111] mb-0.5">{e.from}</p><p className="text-[12px] text-[#777] leading-[1.6]">{e.desc}</p></div></div>))}</div>
              </div></section>
              <Connector />

              <section id="faq" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ CRM Manager</h2>
                <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#4B5EFC] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Besoin de renforcer votre fonction CRM ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">Audit, structuration et accompagnement RevOps part-time pour les scale-ups B2B.</p>
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
