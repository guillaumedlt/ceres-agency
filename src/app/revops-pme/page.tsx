import Connector from "@/components/marketing/Connector";
import type { Metadata } from "next";
import Badge from "@/components/marketing/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RevOps pour PME (50-200 personnes) — Alignez vos equipes | Ceres",
  description:
    "Consultant RevOps specialise PME. Audit CRM, restructuration pipeline, SLA marketing-sales, lead scoring, automatisation. Accelerez votre croissance sans recruter.",
  keywords: [
    "revops pme",
    "crm pme",
    "operations commerciales pme",
    "consultant revops pme",
    "revops externalisé pme",
    "crm hubspot pme",
    "alignement marketing sales pme",
    "audit crm pme",
  ],
};

const symptoms = [
  { title: "CRM rempli a moitie", desc: "Vos commerciaux remplissent le CRM quand ils y pensent. Les deals avancent sans notes, sans next steps, sans montants. Votre pipe est un mirage.", color: "#EF4444" },
  { title: "Marketing et Sales desalignes", desc: "Le marketing genere des leads que les Sales ne rappellent pas. Les Sales reprochent la qualite. Personne n&apos;est d&apos;accord sur ce qu&apos;est un MQL.", color: "#F59E0B" },
  { title: "Reporting 100% manuel", desc: "Chaque lundi, quelqu&apos;un passe 2h a compiler un Excel pour le COMEX. Les chiffres changent selon qui les sort.", color: "#8B5CF6" },
  { title: "Turnover commercial = perte de process", desc: "Quand un commercial part, ses deals, ses contacts et ses methodes partent avec lui. Zero documentation, zero continuite.", color: "#EC4899" },
  { title: "Zero forecast fiable", desc: "Votre previsionnel est base sur l&apos;intuition du directeur commercial. Impossible de projeter le trimestre avec confiance.", color: "#3B82F6" },
];

const apports = [
  { title: "Audit 80 points", desc: "On passe votre CRM, vos process et votre stack au crible. 80 criteres couvrant la donnee, les workflows, le reporting et l&apos;alignement equipes.", color: "#4B5EFC" },
  { title: "Restructuration pipeline", desc: "On redefinit vos etapes de vente, vos proprietes obligatoires et vos criteres de qualification. Un pipeline qui reflete la realite.", color: "#FF7A59" },
  { title: "SLA Marketing-Sales", desc: "On formalise qui fait quoi, quand et comment. Delai de traitement des leads, criteres de qualification, process de handoff documentes.", color: "#6D00CC" },
  { title: "Lead scoring operationnel", desc: "On construit un scoring base sur le comportement et le firmographique. Vos Sales savent exactement qui appeler en premier.", color: "#22C55E" },
  { title: "Dashboards actionables", desc: "Plus de reporting manuel. Des dashboards qui se mettent a jour en temps reel : pipeline, conversion, activite, forecast.", color: "#6C5CE7" },
  { title: "Automatisation des taches repetitives", desc: "Relances, assignation de leads, mise a jour de deals, notifications. On elimine le travail manuel qui ralentit vos equipes.", color: "#D4A27F" },
  { title: "Formation equipes", desc: "On forme vos commerciaux, vos marketeurs et vos managers sur VOS process, dans VOS outils. Pas un tuto generique.", color: "#3B82F6" },
];

const offres = [
  { title: "RevOps Part-Time", subtitle: "2 a 3 jours par semaine", desc: "Un ops dedie integre a votre equipe. Il gere votre CRM, automatise vos process et pilote votre roadmap revenue au quotidien.", items: ["Channel Slack dedie", "Call hebdo de priorisation", "Review mensuelle de roadmap", "Acces a l&apos;equipe d&apos;experts Ceres"], color: "#4B5EFC" },
  { title: "Audit + Implementation", subtitle: "Mission de 4 a 8 semaines", desc: "On audite, on restructure, on implemente. Un projet cadre avec des livrables clairs et un transfert de competences a vos equipes.", items: ["Audit 80 points complet", "Restructuration pipeline et process", "Configuration workflows et dashboards", "Formation equipes incluse"], color: "#FF7A59" },
  { title: "Accompagnement continu", subtitle: "Apres implementation", desc: "On reste disponible pour maintenir, optimiser et faire evoluer votre stack. Support, iterations et nouvelles automatisations chaque mois.", items: ["Support prioritaire", "Optimisations mensuelles", "Veille outils et process", "Quarterly business review"], color: "#22C55E" },
];

const stack = [
  { name: "HubSpot Pro / Enterprise", role: "CRM central", desc: "La plateforme qui unifie Sales, Marketing et CS. Le coeur de votre stack.", cost: "800 - 1 500", color: "#FF7A59" },
  { name: "Clay", role: "Enrichissement", desc: "Enrichissement de donnees automatise. Firmographique, intent data, scoring.", cost: "150 - 300", color: "#4B5EFC" },
  { name: "Lemlist", role: "Prospection", desc: "Sequences multicanal personnalisees. Email, LinkedIn, calls.", cost: "100 - 200", color: "#6D00CC" },
  { name: "Make", role: "Automatisation", desc: "Orchestration de workflows entre vos outils. Le ciment de votre stack.", cost: "50 - 150", color: "#6C5CE7" },
  { name: "Claap", role: "Intelligence conversationnelle", desc: "Enregistrement et analyse de vos calls commerciaux. Coaching automatise.", cost: "50 - 100", color: "#22C55E" },
];

const casClients = [
  { name: "Kameleoon", sector: "SaaS B2B - A/B Testing", result: "+40% de taux de conversion pipeline", link: "/cas-clients/kameleoon", color: "#4B5EFC" },
  { name: "Tennaxia", sector: "SaaS B2B - ESG / RSE", result: "Pipeline restructure, forecast fiable a 90%", link: "/cas-clients/tennaxia", color: "#FF7A59" },
  { name: "Opendatasoft", sector: "SaaS B2B - Open Data", result: "SLA Marketing-Sales implemente, +35% MQL traites", link: "/cas-clients/opendatasoft", color: "#22C55E" },
];

const comparison = [
  { critere: "Cout annuel", partTime: "50 - 80K EUR", recrutement: "80 - 120K EUR (salaire + charges)", advantage: "parttime" },
  { critere: "Expertise", partTime: "Equipe de +10 experts multi-stack", recrutement: "1 profil, souvent generaliste", advantage: "parttime" },
  { critere: "Flexibilite", partTime: "Ajustable chaque mois, sans engagement", recrutement: "CDI, preavis, rigidite", advantage: "parttime" },
  { critere: "Time-to-value", partTime: "Operationnel en 1 semaine", recrutement: "3-6 mois (recrutement + onboarding)", advantage: "parttime" },
  { critere: "Risque", partTime: "Preavis 30 jours", recrutement: "Erreur de casting couteuse", advantage: "parttime" },
  { critere: "Continuite", partTime: "Equipe, pas une personne", recrutement: "Depart = tout a refaire", advantage: "parttime" },
];

const faqItems = [
  { q: "A partir de quelle taille une PME a besoin de RevOps ?", a: "Des 50 personnes, les problemes d&apos;alignement entre Marketing et Sales deviennent visibles. Le CRM commence a etre sous-exploite, les process ne suivent plus la croissance. C&apos;est le bon moment pour structurer." },
  { q: "On a deja un CRM, vous repartez de zero ?", a: "Non. On part de votre existant. L&apos;audit 80 points identifie ce qui fonctionne et ce qui doit etre restructure. On optimise, on ne detruit pas." },
  { q: "Combien de temps avant de voir des resultats ?", a: "Les premiers quick wins arrivent en 2 semaines : dashboards, workflows basiques, nettoyage de donnees. Les resultats structurels (adoption, forecast, SLA) se voient en 2 a 3 mois." },
  { q: "On n&apos;a pas HubSpot, c&apos;est un probleme ?", a: "On travaille principalement sur HubSpot mais on intervient aussi sur Salesforce, Pipedrive et d&apos;autres CRM. Si une migration vers HubSpot fait sens, on vous accompagne." },
  { q: "Quelle difference avec une agence CRM classique ?", a: "Une agence CRM configure un outil. Ceres aligne vos equipes, vos process et vos outils autour du revenue. Le CRM n&apos;est qu&apos;un element de l&apos;equation." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RevOps pour PME",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Accompagnement RevOps specialise pour les PME de 50 a 200 personnes. Audit CRM, restructuration pipeline, SLA marketing-sales, automatisation.",
      serviceType: "Revenue Operations Consulting",
      areaServed: { "@type": "Country", name: "France" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RevOpsPMEPage() {
  return (
    <div className="relative pt-[100px] pb-16 overflow-x-hidden">
      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "12%", width: 340, height: 340, borderRadius: "50%", background: "#4B5EFC", opacity: 0.16, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.16, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "55%", width: 320, height: 320, borderRadius: "50%", background: "#22C55E", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "85%", width: 320, height: 320, borderRadius: "50%", background: "#D4A27F", opacity: 0.14, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[12px] text-[#999] mb-10">
          <Link href="/" className="hover:text-[#666] transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-[#555]">RevOps pour PME</span>
        </nav>

        {/* Hero */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>PME 50-200 personnes</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            RevOps pour PME : alignez vos equipes, accelerez votre croissance
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-8">
            Votre CRM existe mais personne ne l&apos;utilise vraiment. Vos equipes grandissent mais les process ne suivent pas. On structure vos operations commerciales pour debloquer votre croissance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#111]">+100</div>
              <div className="text-[11px] text-[#999]">PME accompagnees</div>
            </div>
            <div className="w-px h-8 bg-[#E5E5E5]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#111]">87</div>
              <div className="text-[11px] text-[#999]">points d&apos;audit</div>
            </div>
            <div className="w-px h-8 bg-[#E5E5E5]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#111]">2 sem</div>
              <div className="text-[11px] text-[#999]">premiers resultats</div>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
            <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
            Diagnostiquer mes operations
          </Link>
        </section>
        <Connector />

        {/* Symptomes */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Le diagnostic</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les symptomes d&apos;une PME sans RevOps</h2>
              <p className="text-[13px] text-[#999]">Si vous cochez 3 de ces 5 points, vos operations freinent votre croissance.</p>
            </div>
            <div className="space-y-2.5">
              {symptoms.map((s) => (
                <div key={s.title} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA]">
                  <div className="w-3 h-3 rounded-sm shrink-0 mt-0.5" style={{ backgroundColor: s.color }} />
                  <div>
                    <h3 className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</h3>
                    <p className="text-[12px] text-[#777] leading-[1.6]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Ce que Ceres apporte */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Notre approche</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ce que Ceres apporte a votre PME</h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">On ne conseille pas. On structure, on implemente et on forme vos equipes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {apports.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{item.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* Offre PME — dark section */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Notre offre PME</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">3 formats pour s&apos;adapter a votre contexte</h2>
              <p className="text-[13px] text-white/40">Du ponctuel au recurrent, on s&apos;adapte a votre maturite et vos ressources.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {offres.map((o) => (
                <div key={o.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: o.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{o.title}</h3>
                  </div>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded mb-3 inline-block" style={{ backgroundColor: o.color + "20", color: o.color }}>{o.subtitle}</span>
                  <p className="text-[12px] text-white/40 leading-[1.6] mb-4">{o.desc}</p>
                  <ul className="space-y-1.5">
                    {o.items.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-white/30">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/20"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Stack recommandee */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>Stack recommandee</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les outils que l&apos;on deploie chez nos PME</h2>
              <p className="text-[13px] text-[#999]">Budget total : 500 a 2 000 EUR / mois selon votre configuration.</p>
            </div>
            <div className="space-y-2.5">
              {stack.map((s) => (
                <div key={s.name} className="flex items-center gap-4 p-4 rounded-xl border border-[#F2F2F2]">
                  <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: s.color }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-[13px] font-semibold text-[#111]">{s.name}</h3>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded" style={{ backgroundColor: s.color + "15", color: s.color }}>{s.role}</span>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">{s.desc}</p>
                  </div>
                  <span className="text-[12px] font-semibold text-[#111] shrink-0 whitespace-nowrap">{s.cost} EUR/m</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Cas clients */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients PME</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ils nous ont fait confiance</h2>
            <p className="text-[13px] text-[#999] max-w-[420px] mx-auto">Des PME B2B qui ont structure leurs operations pour accelerer.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {casClients.map((c) => (
              <Link key={c.name} href={c.link} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#CCC] hover:shadow-md transition-all group">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{c.name}</h3>
                </div>
                <p className="text-[11px] text-[#999] mb-3">{c.sector}</p>
                <p className="text-[12px] font-medium text-[#111] leading-[1.5]">{c.result}</p>
                <span className="text-[11px] text-[#4B5EFC] font-medium mt-3 inline-block group-hover:underline">Voir le cas complet</span>
              </Link>
            ))}
          </div>
        </section>
        <Connector />

        {/* RevOps Part-Time vs Recruter */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="text-center mb-8">
              <div className="mb-4"><Badge>Comparatif</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-2">RevOps Part-Time vs recruter un Head of RevOps</h2>
              <p className="text-[13px] text-[#999]">La comparaison que toute PME en croissance devrait faire.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#F2F2F2]">
                    <th className="text-[12px] font-semibold text-[#111] py-3 pr-4 w-[140px]">Critere</th>
                    <th className="text-[12px] font-semibold text-[#4B5EFC] py-3 px-4">RevOps Part-Time Ceres</th>
                    <th className="text-[12px] font-semibold text-[#999] py-3 pl-4">Recrutement interne</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.critere} className="border-b border-[#F8F8F8]">
                      <td className="text-[12px] font-medium text-[#111] py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-[#555] py-3 px-4 bg-[#F8FAFF]">{row.partTime}</td>
                      <td className="text-[11px] text-[#999] py-3 pl-4">{row.recrutement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* FAQ */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes des PME</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {faqItems.map((f, i) => (
                <div key={i} className="border-b border-[#F2F2F2] py-4">
                  <h3 className="text-[13px] font-semibold text-[#111] mb-1.5">{f.q}</h3>
                  <p className="text-[12px] text-[#777] leading-[1.6]">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* CTA */}
        <section id="contact">
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Votre PME merite des operations a la hauteur de son ambition</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">
              On diagnostique vos operations en 30 minutes. Audit gratuit, sans engagement, avec des recommandations actionnables.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Reserver mon diagnostic gratuit
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
