"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import TrustStrip from "@/components/marketing/TrustStrip";
import StickyBottomCTA from "@/components/marketing/StickyBottomCTA";
import LeadMagnetInline from "@/components/marketing/LeadMagnetInline";

const faqs = [
  { q: "Qu'est-ce que le framework SCORE de Ceres ?", a: "SCORE est un framework propriete Ceres pour evaluer la maturite d'un revenue engine B2B en 5 piliers : Strategie revenue, CRM et data, Operations et process, Reporting et KPIs, Equipes alignees. Chaque pilier est note de 0 a 4. Le score total sur 20 donne une lecture immediate de la maturite RevOps." },
  { q: "Comment utiliser SCORE pour auto-diagnostiquer ma boite ?", a: "Reponse a 15 questions (3 par pilier), chacune notee 0-4. Total /20. < 8 = revenue engine immature, gros chantiers structurants. 8-12 = fondations posees mais inegales. 13-16 = maturite avancee, optimisation continue. 17-20 = best-in-class, peu de boites y arrivent. Notre audit RevOps utilise SCORE comme grille." },
  { q: "Pourquoi 5 piliers et pas 7 ou 3 ?", a: "Apres 250+ missions Ceres, on a teste plusieurs decoupages. 3 piliers est trop reducteur (rate l'humain ou la data). 7+ piliers cree de l'overlap et noie le diagnostic. 5 piliers couvrent les 5 dimensions independantes qui composent un revenue engine. C'est aussi un format scanable en une vue." },
  { q: "Est-ce que SCORE remplace une vraie methodologie RevOps ?", a: "Non. SCORE est l'outil de diagnostic. Notre methode RevOps en 4 phases (Audit / Design / Build / Run) est ce qui transforme un score initial en un score cible. SCORE mesure, la methode transforme." },
  { q: "Puis-je utiliser SCORE gratuitement dans mon entreprise ?", a: "Oui. Le framework est documente publiquement sur cette page. Utilisez-le librement en interne ou en mission. Si vous le republiez ou citez, mentionnez Ceres comme source." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", headline: "Le framework SCORE de Ceres : evaluer un revenue engine en 5 piliers", description: "SCORE est le framework Ceres pour evaluer la maturite d'un revenue engine B2B : Strategie, CRM, Ops, Reporting, Equipes.", author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" }, publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" }, datePublished: "2026-05-26", dateModified: "2026-05-26", mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/framework-score-revops" }, articleSection: "RevOps", inLanguage: "fr" },
  { "@type": "DefinedTerm", name: "SCORE Framework", description: "Framework propriete Ceres pour evaluer la maturite d'un revenue engine B2B selon 5 piliers : Strategie revenue, CRM et data, Operations et process, Reporting et KPIs, Equipes alignees.", inDefinedTermSet: { "@type": "DefinedTermSet", name: "Frameworks RevOps Ceres" }, url: "https://ceres.agency/framework-score-revops" },
  { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Framework SCORE", item: "https://ceres.agency/framework-score-revops" }] },
]};

const sections = [
  { id: "definition", title: "Definition de SCORE" },
  { id: "piliers", title: "Les 5 piliers" },
  { id: "scoring", title: "Grille de notation" },
  { id: "interpretation", title: "Interpretation des scores" },
  { id: "usage", title: "Comment l'utiliser" },
  { id: "faq", title: "FAQ" },
];

const piliers = [
  {
    letter: "S",
    title: "Strategie revenue",
    color: "#FF7A59",
    desc: "La clarte de votre go-to-market : ICP precis, positionnement, segmentation, pricing, objectifs revenue documentes et partages.",
    questions: [
      "Notre ICP est-il documente avec criteres firmographiques + comportementaux ?",
      "Avons-nous un plan revenue trimestriel chiffre par segment et par equipe ?",
      "Le pricing et le packaging sont-ils valides avec data win/loss reels ?",
    ],
  },
  {
    letter: "C",
    title: "CRM et data",
    color: "#4B5EFC",
    desc: "La fondation : qualite des donnees CRM, integrations, gouvernance, single source of truth.",
    questions: [
      "Le CRM est-il single source of truth (vs 5 Excel paralleles) ?",
      "La data quality est-elle mesuree et auditee mensuellement (deduplication, completude, fraicheur) ?",
      "Les integrations critiques (marketing, billing, support) fonctionnent sans saisie manuelle ?",
    ],
  },
  {
    letter: "O",
    title: "Operations et process",
    color: "#22C55E",
    desc: "Les workflows : lead routing, qualification, sequences, scoring, automations cross-equipes documentees.",
    questions: [
      "Les leads sont-ils routes automatiquement avec SLA mesure (< 5 min) ?",
      "Les stage criteria pipeline sont-ils documentes et appliques uniformement ?",
      "Les workflows critiques (lifecycle, scoring, alerts) sont-ils versionnes et monitores ?",
    ],
  },
  {
    letter: "R",
    title: "Reporting et KPIs",
    color: "#6D00CC",
    desc: "Le pilotage : dashboards par silo, KPIs alignes, forecasting, attribution, alertes sur seuils.",
    questions: [
      "Chaque equipe (Sales, Marketing, CS) a-t-elle son dashboard cible avec KPIs definis ?",
      "Le forecast revenue est-il calcule (vs devine) avec accuracy &gt; 75% a 90 jours ?",
      "Les alertes anomalies (drop de conversion, pipeline coverage) declenchent automatiquement ?",
    ],
  },
  {
    letter: "E",
    title: "Equipes alignees",
    color: "#D4A27F",
    desc: "L'humain : SLA marketing-sales, rituels d'alignement, gouvernance des decisions, formation continue.",
    questions: [
      "Un SLA Marketing-Sales explicite est-il signe et tracke mensuellement ?",
      "Les rituels (weekly pipeline, monthly business review) sont-ils tenus et productifs ?",
      "Les equipes savent-elles utiliser les outils a 80% de leur capacite (pas 20%) ?",
    ],
  },
];

const interpretations = [
  { range: "0-7", label: "Revenue engine immature", color: "#EF4444", desc: "Plusieurs piliers sont en deficit critique. Chantiers structurants de 3 a 6 mois. Risque eleve de perdre la traction commerciale en hyper-croissance." },
  { range: "8-12", label: "Fondations posees mais inegales", color: "#F59E0B", desc: "Certains piliers sont matures, d'autres a la traine. Pattern typique des scale-ups Serie A/B qui ont privilegie Sales sans investir Ops. Optimisation ciblee en 60-90 jours." },
  { range: "13-16", label: "Maturite avancee, optimisation continue", color: "#22C55E", desc: "Les 5 piliers tiennent la route. L'enjeu est l'iteration : detection des fines failles, adoption agents IA, scale international." },
  { range: "17-20", label: "Best-in-class RevOps", color: "#6D00CC", desc: "Moins de 5% des scale-ups B2B y arrivent. Le revenue engine est un avantage competitif. Focus : maintenance et innovation continue (agents IA, MCP, multi-marche)." },
];

const relatedArticles = [
  { title: "Notre methode RevOps en 4 phases", slug: "/methode", category: "Methode", color: "#FF7A59" },
  { title: "Audit RevOps : notre offre 72h", slug: "/audit-revops", category: "Service", color: "#4B5EFC" },
  { title: "Guide MCP pour le RevOps", slug: "/guide-mcp-revops", category: "Guide", color: "#6D00CC" },
];

export default function FrameworkScorePage() {
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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "45%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "65%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "82%", width: 260, height: 260, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28"><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p><nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav></div></aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><span className="text-[#666]">Framework SCORE</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Framework</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">10 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Le framework SCORE de Ceres</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">5 piliers, 15 questions, un score sur 20. La grille d&apos;evaluation qu&apos;on utilise sur chaque audit RevOps Ceres depuis 2021. Maintenant publique et gratuite.</p>
            </div>

            <article>
              <section id="definition" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Qu&apos;est-ce que le framework SCORE ?</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p><strong>SCORE</strong> est un framework propriete Ceres pour evaluer la maturite d&apos;un revenue engine B2B. Cinq piliers, chacun note de 0 a 4. Score total sur 20. Un acronyme simple :</p>
                  <ul className="space-y-1.5 pl-5">
                    <li><strong className="text-[#FF7A59]">S</strong> — Strategie revenue (ICP, positionnement, pricing)</li>
                    <li><strong className="text-[#4B5EFC]">C</strong> — CRM et data (single source of truth, qualite)</li>
                    <li><strong className="text-[#22C55E]">O</strong> — Operations et process (workflows, automation)</li>
                    <li><strong className="text-[#6D00CC]">R</strong> — Reporting et KPIs (dashboards, forecast)</li>
                    <li><strong className="text-[#D4A27F]">E</strong> — Equipes alignees (SLA, rituels, formation)</li>
                  </ul>
                  <p>Apres 250+ missions Ceres, on a teste plusieurs decoupages. SCORE est ce qui marche : assez simple pour etre memorisable, assez complet pour ne rien rater de critique.</p>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">SCORE est gratuit, public, librement utilisable. Si vous le republiez, mentionnez Ceres comme source. C&apos;est le framework qu&apos;on utilise en interne sur chaque audit — partager le diagnostic n&apos;enleve rien a la valeur de la transformation.</p></div>
              </div></section>
              <Connector />

              <section id="piliers" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 5 piliers en detail</h2>
                <div className="space-y-5">
                  {piliers.map((p) => (
                    <div key={p.letter} className="rounded-xl border border-[#F2F2F2] p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-[20px] font-bold shrink-0" style={{ background: p.color }}>{p.letter}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[15px] font-semibold text-[#111] mb-1">{p.title}</h3>
                          <p className="text-[12px] text-[#777] leading-[1.6] mb-3">{p.desc}</p>
                          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2">3 questions de diagnostic</p>
                          <ul className="space-y-1.5">
                            {p.questions.map((q, i) => (
                              <li key={i} className="flex items-start gap-2 text-[12px] text-[#555] leading-[1.55]">
                                <span className="font-mono text-[10px] text-[#999] shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                                <span>{q}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div></section>
              <Connector />

              <section id="scoring" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Grille de notation 0-4 par question</h2>
                <p className="text-[13px] text-[#555] leading-[1.75] mb-5">Pour chaque question (15 au total), notez de 0 a 4. Total maximal par pilier : 12 / 12 (mais on ramene a /4 pour la moyenne). Total general : sur 20.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Note</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Etat</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th></tr></thead>
                    <tbody className="text-[#555]">
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-bold text-[#EF4444]">0</td><td className="p-3 border-b border-[#F2F2F2]">Absent</td><td className="p-3 border-b border-[#F2F2F2]">Rien en place, pas de tentative documentee</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-bold text-[#F59E0B]">1</td><td className="p-3 border-b border-[#F2F2F2]">Embryonnaire</td><td className="p-3 border-b border-[#F2F2F2]">Tentative ad hoc, non documentee, non partagee</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-bold text-[#F59E0B]">2</td><td className="p-3 border-b border-[#F2F2F2]">Partiel</td><td className="p-3 border-b border-[#F2F2F2]">Documente mais inegal selon equipes/segments</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-bold text-[#22C55E]">3</td><td className="p-3 border-b border-[#F2F2F2]">Mature</td><td className="p-3 border-b border-[#F2F2F2]">Documente, applique, mesure, revu trimestriellement</td></tr>
                      <tr><td className="p-3 font-bold text-[#22C55E]">4</td><td className="p-3">Best-in-class</td><td className="p-3">Mature + automatise + benchmarke vs marche</td></tr>
                    </tbody>
                  </table>
                </div>
              </div></section>
              <Connector />

              <section id="interpretation" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Interpretation de votre score total</h2>
                <div className="space-y-3">
                  {interpretations.map((i) => (
                    <div key={i.range} className="rounded-xl border-l-[3px] bg-[#FAFAFA] p-4" style={{ borderColor: i.color }}>
                      <div className="flex items-center gap-3 mb-2"><span className="font-bold text-[15px]" style={{ color: i.color }}>{i.range}/20</span><span className="text-[13px] font-semibold text-[#111]">{i.label}</span></div>
                      <p className="text-[12px] text-[#555] leading-[1.65]">{i.desc}</p>
                    </div>
                  ))}
                </div>
              </div></section>
              <Connector />

              <section id="usage" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Comment utiliser SCORE en interne</h2>
                <ol className="list-decimal pl-5 space-y-2.5 text-[13px] text-[#555] leading-[1.75]">
                  <li><strong>Bloquez 90 minutes</strong> avec les representants Sales / Marketing / CS / RevOps / Finance de votre boite.</li>
                  <li><strong>Repondez aux 15 questions ensemble</strong> sans vous mettre d&apos;accord trop vite. Les desaccords sont les insights les plus precieux.</li>
                  <li><strong>Calculez le score par pilier</strong> (somme des 3 notes / 3) puis le score total / 20.</li>
                  <li><strong>Identifiez le pilier le plus faible</strong> comme priorite 1. Le reflexe naturel d&apos;ameliorer le plus fort est faux : on doit pousser le plus faible en premier.</li>
                  <li><strong>Refaites SCORE tous les 6 mois</strong> pour mesurer la progression et reidentifier les nouvelles priorites.</li>
                </ol>
                <div className="mt-5 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">Pour aller plus loin, notre <Link href="/audit-revops" className="text-white underline hover:text-white/80">audit RevOps de 72h</Link> applique SCORE de maniere structuree, avec interviews, observation directe du CRM et benchmark vs nos 250+ missions. Score initial + score cible a 6 et 12 mois.</p></div>
              </div></section>
              <Connector />

              <section id="faq" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ Framework SCORE</h2>
                <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#FF7A59] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
              </div></section>
              <Connector />

              <LeadMagnetInline
                title="Recevez le framework SCORE en PDF + Excel"
                subtitle="Le framework documente sur 12 pages + la grille de notation Excel pour faire tourner l'evaluation en interne avec votre equipe."
                bullets={[
                  "Framework SCORE complet (12 pages PDF)",
                  "Grille Excel : 15 questions + scoring automatique",
                  "Benchmarks par stade (Serie A, B, C, enterprise)",
                  "Templates d'action plan par pilier",
                ]}
                ctaLabel="Recevoir le pack SCORE"
                sourcePage="framework-score-revops"
                color="#22C55E"
              />

              <TrustStrip />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Audit RevOps avec le framework SCORE</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">72h d&apos;audit avec notation SCORE complete sur les 5 piliers + roadmap chiffree. Ou 30 min avec Guillaume pour pre-qualifier votre besoin.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                    Reserver 30 min avec Guillaume
                  </a>
                  <Link href="/audit-revops" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/10 text-white text-[13px] font-medium hover:bg-white/20 transition-colors">
                    Voir l&apos;offre audit RevOps
                  </Link>
                </div>
              </div></section>
              <Connector />

              <section><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>

      <StickyBottomCTA
        message="Notez votre revenue engine avec Guillaume Delachet"
        ctaLabel="Reserver"
        ctaHref="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9"
        storageKey="framework-score"
      />
    </div>
  );
}
