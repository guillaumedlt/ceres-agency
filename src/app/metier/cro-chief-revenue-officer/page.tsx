"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const faqs = [
  { q: "Quelle est la difference entre CRO, VP Sales et VP Revenue ?", a: "Le VP Sales pilote uniquement la fonction commerciale. Le VP Revenue couvre Sales + RevOps mais reste un niveau VP. Le CRO est un titre executif qui inclut Sales + Marketing + souvent CS + RevOps, et siege au comite executif (comex) avec reporting direct au CEO." },
  { q: "Quand recruter un CRO ?", a: "Typiquement entre la Serie A et la Serie B, quand l'ARR depasse 5-10M EUR et que les fonctions Sales/Marketing/CS sont stabilisees mais pas encore alignees strategiquement. Trop tot, le CRO ne sert a rien. Trop tard, vous perdez 6-12 mois de croissance optimisable." },
  { q: "Quel parcours pour devenir CRO ?", a: "Trois chemins. (1) VP Sales evolue avec elargissement perimetre Marketing/CS. (2) Operateur SaaS B2B (Founder repenti, COO) qui se specialise revenue. (3) Senior partner en VC ou conseil strategique qui passe operationnel. Tous ont 12-20 ans d'experience B2B." },
  { q: "Le CRO va-t-il etre remplace par l'IA ?", a: "Non. Le CRO devient encore plus indispensable car il est le pilote strategique des agents IA, du build vs buy, et des decisions d'investissement RevOps. L'IA augmente sa productivite mais ne remplace pas son jugement strategique et politique." },
];

const missions = [
  { title: "Strategie revenue 18-36 mois", desc: "Definition de la North Star metric revenue, plan de croissance, sequencing des investissements Sales/Marketing/CS/RevOps." },
  { title: "Direction de l'organisation revenue", desc: "Pilotage de 30 a 500 personnes selon la taille (VP Sales, VP Marketing, VP CS, Head of RevOps et leurs equipes)." },
  { title: "Forecasting et reporting board", desc: "Forecast trimestriel, business reviews mensuelles, presentation au board et aux investisseurs." },
  { title: "Recrutement leadership revenue", desc: "Recrutement et retention des leaders Sales/Marketing/CS/RevOps. C&apos;est souvent le job #1 du CRO en hyper-croissance." },
  { title: "Strategie pricing et packaging", desc: "Co-pilote avec CFO et Product. Decisions sur les tiers, les unites d'usage, les contrats enterprise." },
  { title: "M&A et partenariats strategiques", desc: "Identification et closing des partenariats canaux, integrations strategiques, acquisitions revenue-driven." },
];

const competences = [
  { title: "Vision strategique revenue", level: "Expert" },
  { title: "Leadership executif", level: "Expert" },
  { title: "Comprehension SaaS metrics", level: "Expert" },
  { title: "Recrutement leadership", level: "Expert" },
  { title: "Forecasting & finance", level: "Expert" },
  { title: "Communication board / investisseurs", level: "Expert" },
  { title: "Architecture organisationnelle", level: "Expert" },
  { title: "Comprehension produit et marche", level: "Expert" },
];

const evolution = [
  { from: "VP Sales", desc: "Le chemin classique : VP Sales avec extension progressive sur Marketing puis CS." },
  { from: "CRO d'une scale-up Serie A/B", desc: "Premier poste CRO typique : 5-15M ARR, equipe 30-80 personnes en revenue." },
  { from: "CRO d'une scale-up Serie C/D", desc: "Etape intermediaire : 30-100M ARR, equipe 80-250 personnes." },
  { from: "CRO d'une licorne ou pre-IPO", desc: "100M+ ARR, equipe 250-1000 personnes, dimension internationale." },
  { from: "CEO / Founder", desc: "Certains CRO basculent CEO dans leur prochaine boite, devenent operating partner VC ou angel investor." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Occupation", name: "Chief Revenue Officer", description: "Le CRO (Chief Revenue Officer) dirige strategiquement l'ensemble de la fonction revenue d'une entreprise B2B : Sales, Marketing, Customer Success et RevOps. Membre du comex avec reporting direct au CEO.", occupationLocation: { "@type": "Country", name: "France" }, skills: competences.map((c) => c.title).join(", "), responsibilities: missions.map((m) => m.title).join("; ") },
  { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Fiches metier", item: "https://ceres.agency/metier/sales-ops-manager" }, { "@type": "ListItem", position: 3, name: "CRO Chief Revenue Officer", item: "https://ceres.agency/metier/cro-chief-revenue-officer" }] },
]};

const sections = [
  { id: "definition", title: "Definition" },
  { id: "missions", title: "Missions cles" },
  { id: "competences", title: "Competences" },
  { id: "evolution", title: "Evolution carriere" },
  { id: "faq", title: "FAQ" },
];

const relatedArticles = [
  { title: "RevOps Director : fiche metier", slug: "/metier/revops-director", category: "Fiche metier", color: "#FF7A59" },
  { title: "Sales Ops Manager : fiche metier", slug: "/metier/sales-ops-manager", category: "Fiche metier", color: "#4B5EFC" },
  { title: "Externaliser le RevOps", slug: "/externaliser-revops", category: "Service", color: "#6D00CC" },
];

export default function CROPage() {
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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28"><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p><nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav></div></aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/metier/sales-ops-manager" className="hover:text-[#111] transition-colors">Fiches metier</Link><span>/</span><span className="text-[#666]">CRO</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Fiche metier</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">11 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Chief Revenue Officer (CRO) : fiche metier 2026</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">Le poste cle du comex en SaaS B2B. Missions, competences, parcours et evolution.</p>
            </div>

            <article>
              <section id="definition" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Qu&apos;est-ce qu&apos;un CRO ?</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le <strong>Chief Revenue Officer (CRO)</strong> est le directeur strategique de l&apos;ensemble de la fonction revenue d&apos;une entreprise B2B. Il pilote Sales, Marketing, Customer Success et souvent RevOps, avec un reporting direct au CEO.</p>
                  <p>Importe des Etats-Unis et generalise en France a partir de 2018, le poste s&apos;est impose comme indispensable dans les scale-ups SaaS qui depassent 5-10M ARR. C&apos;est le pendant strategique du CRO dans une boite mature.</p>
                  <p>Sa mission centrale : <em>aligner toutes les fonctions qui generent du revenue autour d&apos;une strategie commune, mesurable et previsible</em>. Pas juste vendre plus, mais construire la machine qui le permet.</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{competences.map((c) => (<div key={c.title} className="rounded-xl border border-[#F2F2F2] p-4 flex items-center justify-between gap-3"><p className="text-[13px] text-[#111] font-medium">{c.title}</p><span className="text-[10px] px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-mono shrink-0">{c.level}</span></div>))}</div>
              </div></section>
              <Connector />

              <section id="evolution" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Evolution de carriere</h2>
                <div className="space-y-3">{evolution.map((e, i) => (<div key={e.from} className="flex gap-4"><div className="flex flex-col items-center"><div className="w-8 h-8 rounded-lg bg-[#22C55E] flex items-center justify-center text-white text-[11px] font-bold shrink-0">{String(i + 1).padStart(2, "0")}</div>{i < evolution.length - 1 && <div className="w-px flex-1 bg-[#E8E8E8] my-1" />}</div><div className="pb-4 flex-1"><p className="text-[13px] font-semibold text-[#111] mb-0.5">{e.from}</p><p className="text-[12px] text-[#777] leading-[1.6]">{e.desc}</p></div></div>))}</div>
              </div></section>
              <Connector />

              <section id="faq" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ Chief Revenue Officer</h2>
                <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#22C55E] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">CRO ou en cours de recrutement ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">Ceres accompagne les CROs sur la structuration RevOps de leur revenue engine. Audit + roadmap en 30 jours.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un echange CRO</Link>
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
