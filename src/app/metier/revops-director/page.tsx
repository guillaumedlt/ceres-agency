"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const faqs = [
  { q: "Quelle est la difference entre RevOps Director et VP RevOps ?", a: "Le RevOps Director pilote operationnellement le RevOps : equipe, roadmap, livrables, KPIs. Le VP RevOps a une dimension plus strategique et siege au comite executif. Dans les scale-ups jusqu'a 500 personnes, les deux roles se confondent souvent." },
  { q: "Combien de personnes dans une equipe RevOps ?", a: "PME (50-200 pers) : 1 a 3 personnes (souvent juste un Manager). Scale-up Serie B (200-500 pers) : 4 a 8 personnes (Manager + analystes + CRM). Enterprise (500+) : 10 a 25 personnes structurees en sous-fonctions (Sales Ops, Marketing Ops, CS Ops, Analytics)." },
  { q: "Quel parcours pour devenir RevOps Director ?", a: "Trois chemins typiques. (1) Sales Ops Manager senior qui monte. (2) Consultant strategie (McKinsey, Bain, BCG) qui passe industrie. (3) Operateur en SaaS B2B (Head of Ops, Head of CS) qui se specialise. Tous ont en commun 7-10 ans d'experience B2B." },
  { q: "Le RevOps Director rapporte a qui ?", a: "Le plus souvent au CRO (Chief Revenue Officer) ou directement au CEO dans les boites sans CRO. Dans les enterprises matures, peut rapporter au COO ou au CFO." },
];

const missions = [
  { title: "Strategie revenue engine", desc: "Definir la vision RevOps a 18-36 mois alignee avec la strategie produit et go-to-market." },
  { title: "Pilotage de l'equipe RevOps", desc: "Recrutement, structuration, gouvernance d'une equipe de 3 a 15 personnes (Sales Ops, Marketing Ops, CS Ops, Analytics)." },
  { title: "Gouvernance des KPIs revenue", desc: "Definition, mesure et amelioration continue des metriques cles : NRR, CAC, LTV, forecast accuracy, pipeline coverage." },
  { title: "Architecture de la stack", desc: "Choix strategiques CRM, marketing automation, BI, IA. Build vs Buy. Roadmap technologique a 18 mois." },
  { title: "Alignement cross-equipes", desc: "Mediation entre Sales, Marketing, CS, Finance et Product. Le RevOps Director est le pont entre les silos." },
  { title: "Reporting comite executif", desc: "Forecast trimestriel, business reviews mensuelles, presentation des KPIs au board." },
];

const competences = [
  { title: "Leadership et management equipe", level: "Expert" },
  { title: "Vision strategique revenue", level: "Expert" },
  { title: "Architecture systeme RevOps", level: "Expert" },
  { title: "Analytics et forecasting", level: "Expert" },
  { title: "Maitrise stack CRM / Marketing", level: "Confirme+" },
  { title: "Change management", level: "Expert" },
  { title: "Communication executive", level: "Expert" },
  { title: "Comprehension financiere SaaS", level: "Expert" },
];

const evolution = [
  { from: "Sales Ops / RevOps Manager", desc: "Position de depart classique : 5-7 ans d'experience operationnelle RevOps." },
  { from: "Head of RevOps / Senior RevOps Manager", desc: "Pilote une equipe de 3-5 personnes. Premier niveau de leadership." },
  { from: "RevOps Director", desc: "Le poste decrit ici. Equipe 5-15, dimension strategique." },
  { from: "VP RevOps", desc: "Siege au comite executif. Dimension strategique et politique. Equipe 10-30." },
  { from: "Chief Revenue Officer (CRO)", desc: "Direction de l'ensemble du revenue : Sales + Marketing + RevOps + parfois CS." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Occupation", name: "RevOps Director", description: "Le RevOps Director dirige la fonction Revenue Operations d'une entreprise B2B. Pilote l'equipe RevOps, l'architecture de la stack, la gouvernance des KPIs revenue et l'alignement cross-equipes.", occupationLocation: { "@type": "Country", name: "France" }, skills: competences.map((c) => c.title).join(", "), responsibilities: missions.map((m) => m.title).join("; ") },
  { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Fiches metier", item: "https://ceres.agency/metier/sales-ops-manager" }, { "@type": "ListItem", position: 3, name: "RevOps Director", item: "https://ceres.agency/metier/revops-director" }] },
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
  { title: "CRO Chief Revenue Officer : fiche metier", slug: "/metier/cro-chief-revenue-officer", category: "Fiche metier", color: "#6D00CC" },
  { title: "Externaliser le RevOps : notre offre", slug: "/externaliser-revops", category: "Service", color: "#4B5EFC" },
];

export default function RevOpsDirectorPage() {
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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28"><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p><nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav></div></aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/metier/sales-ops-manager" className="hover:text-[#111] transition-colors">Fiches metier</Link><span>/</span><span className="text-[#666]">RevOps Director</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Fiche metier</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">10 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">RevOps Director : fiche metier 2026</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">Le profil cle pour les scale-ups B2B en hyper-croissance. Missions, salaire, competences et evolution.</p>
            </div>

            <article>
              <section id="definition" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Qu&apos;est-ce qu&apos;un RevOps Director ?</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le <strong>RevOps Director</strong> dirige la fonction Revenue Operations d&apos;une entreprise B2B. C&apos;est l&apos;architecte et le pilote du systeme qui rend predictible et scalable la generation de revenue.</p>
                  <p>Il est responsable de l&apos;equipe RevOps (5 a 15 personnes typiquement), de la roadmap d&apos;evolution de la stack, de la gouvernance des KPIs revenue, et de l&apos;alignement entre Sales, Marketing, CS et Finance.</p>
                  <p>Le poste s&apos;est generalise en France a partir de 2023 dans les scale-ups SaaS B2B en Serie B+. En 2026, le titre &laquo; VP RevOps &raquo; a cru de +300% en 18 mois selon Pavilion, signal d&apos;une demande tres forte.</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{competences.map((c) => (<div key={c.title} className="rounded-xl border border-[#F2F2F2] p-4 flex items-center justify-between gap-3"><p className="text-[13px] text-[#111] font-medium">{c.title}</p><span className="text-[10px] px-2 py-0.5 rounded bg-[#6D00CC]/10 text-[#6D00CC] font-mono shrink-0">{c.level}</span></div>))}</div>
              </div></section>
              <Connector />

              <section id="evolution" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Evolution de carriere</h2>
                <div className="space-y-3">{evolution.map((e, i) => (<div key={e.from} className="flex gap-4"><div className="flex flex-col items-center"><div className="w-8 h-8 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[11px] font-bold shrink-0">{String(i + 1).padStart(2, "0")}</div>{i < evolution.length - 1 && <div className="w-px flex-1 bg-[#E8E8E8] my-1" />}</div><div className="pb-4 flex-1"><p className="text-[13px] font-semibold text-[#111] mb-0.5">{e.from}</p><p className="text-[12px] text-[#777] leading-[1.6]">{e.desc}</p></div></div>))}</div>
              </div></section>
              <Connector />

              <section id="faq" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ RevOps Director</h2>
                <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#6D00CC] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Besoin d&apos;un RevOps Director part-time ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">On accompagne en mode RevOps externalise le temps que vous recrutez votre permanent.</p>
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
