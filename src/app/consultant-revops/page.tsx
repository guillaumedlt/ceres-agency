"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const definition = [
  { title: "Aligner les equipes", desc: "Le consultant RevOps cree un langage commun entre Marketing, Sales et Customer Success. Definitions partagees (MQL, SQL, PQL), SLA documentes, handoffs structures. Fini les silos.", color: "#4B5EFC" },
  { title: "Structurer les process", desc: "Du premier point de contact au renouvellement, chaque etape du cycle revenue est documentee, mesuree et optimisee. Pipeline, scoring, routing, escalation : tout est clarifie.", color: "#FF7A59" },
  { title: "Deployer la stack", desc: "CRM, outils d\u2019automatisation, enrichissement, IA. Le consultant RevOps choisit, configure et connecte les outils qui servent vraiment votre revenue. Pas d\u2019empilement inutile.", color: "#6D00CC" },
  { title: "Piloter par la donnee", desc: "Dashboards, metriques, forecasting. Le consultant RevOps transforme vos donnees brutes en decisions. Chaque equipe sait exactement ou elle en est et ce qu\u2019elle doit ameliorer.", color: "#22C55E" },
  { title: "Automatiser l\u2019operationnel", desc: "Les taches repetitives sont eliminees. Workflows CRM, sequences, notifications, enrichissement, scoring : ce qui peut etre automatise l\u2019est.", color: "#6C5CE7" },
  { title: "Deployer l\u2019IA", desc: "Agents IA connectes au CRM via MCP, scoring predictif, resume de conversations, enrichissement automatique. Le consultant RevOps amene l\u2019intelligence artificielle dans vos operations.", color: "#D4A27F" },
];

const vsRecrutement = [
  { criteria: "Disponibilite", consultant: "Immediat (1-2 semaines)", recrutement: "3 a 6 mois de process" },
  { criteria: "Cout annuel", consultant: "30 000 - 60 000 EUR", recrutement: "70 000 - 100 000 EUR + charges" },
  { criteria: "Profondeur expertise", consultant: "+250 clients, 10+ secteurs", recrutement: "1 entreprise, 1 contexte" },
  { criteria: "Flexibilite", consultant: "Ajustable chaque mois", recrutement: "CDI, engagement long" },
  { criteria: "Stack technique", consultant: "Multi-CRM, multi-outils", recrutement: "Formation necessaire" },
  { criteria: "IA & automation", consultant: "Deploiement immediat", recrutement: "Montee en competence longue" },
  { criteria: "Risque", consultant: "Arret a 30 jours", recrutement: "Rupture couteuse" },
  { criteria: "Vision externe", consultant: "Benchmarks, best practices", recrutement: "Vision interne uniquement" },
];

const domaines = [
  { title: "Audit & Diagnostic RevOps", desc: "Analyse complete de votre stack, vos process, votre data quality et votre alignement inter-equipes. Score de maturite, benchmark sectoriel et plan d\u2019action priorise.", items: ["Audit CRM 80 points", "Cartographie stack & flux", "Score de maturite /100", "Plan d\u2019action 90 jours"], color: "#FF7A59" },
  { title: "CRM & HubSpot", desc: "Configuration, migration, optimisation. Le CRM est le coeur du RevOps. On le configure pour qu\u2019il serve vraiment vos equipes, pas l\u2019inverse.", items: ["Setup HubSpot de zero", "Migration Dynamics/Salesforce", "Optimisation instance existante", "Administration recurrente"], color: "#4B5EFC" },
  { title: "Automatisation & Workflows", desc: "Chaque tache repetitive identifiee est automatisee. Lead routing, scoring, notifications, enrichissement, sequences : on elimine le travail manuel inutile.", items: ["Workflows CRM avances", "Lead scoring & routing", "Sequences outbound", "Integrations inter-outils"], color: "#6C5CE7" },
  { title: "IA & Agents", desc: "Agents Claude connectes a votre CRM via MCP. Qualification automatique, resume de calls, enrichissement, scoring predictif. L\u2019IA au service du revenue, pas du buzzword.", items: ["Agents IA sur-mesure", "Serveur MCP HubSpot", "Scoring predictif", "Resume et analyse de calls"], color: "#6D00CC" },
  { title: "Reporting & Forecasting", desc: "Des dashboards qui racontent une histoire, pas des tableaux illisibles. Chaque equipe a ses metriques, chaque manager a sa vision, chaque dirigeant a son forecast.", items: ["Dashboards par equipe", "Forecasting avance", "Attribution multi-touch", "Weekly review automatise"], color: "#22C55E" },
  { title: "Alignement & Process", desc: "Le travail invisible mais critique. Definitions communes, SLA, handoffs, documentation. Ce qui fait la difference entre une entreprise qui execute et une qui bricole.", items: ["Definition MQL/SQL/PQL", "SLA inter-equipes", "Lead handoff structure", "Documentation process"], color: "#D4A27F" },
];

const howWeWork = [
  { num: "01", title: "Appel de cadrage (30 min)", desc: "On comprend votre situation, vos enjeux, votre stack et vos objectifs. Pas de pitch commercial, on ecoute et on diagnostique.", color: "#FF7A59" },
  { num: "02", title: "Proposition sur-mesure", desc: "On definit le perimetre, le format (mission ponctuelle ou part-time), le planning et le budget. Tout est clair avant de demarrer.", color: "#4B5EFC" },
  { num: "03", title: "Audit flash (semaine 1)", desc: "On prend en main votre stack. Audit CRM, process, data quality. Premiers quick wins identifies et deployes.", color: "#6C5CE7" },
  { num: "04", title: "Execution & livrables", desc: "Chaque semaine, des livrables concrets dans vos outils. Pas de slides, pas de recommandations theoriques. De l\u2019execution.", color: "#22C55E" },
  { num: "05", title: "Revue & iteration", desc: "Point hebdomadaire pour mesurer l\u2019avancement, ajuster les priorites et planifier la suite. Transparence totale.", color: "#D4A27F" },
];

const casClients = [
  {
    name: "Ringover",
    desc: "Scale-up telecom, 200 collaborateurs. On a restructure le pipeline commercial, deploye le lead scoring et connecte HubSpot avec leur produit via API.",
    metrics: [
      { label: "Taux de conversion", value: "+35%" },
      { label: "Cycle de vente", value: "-20 jours" },
      { label: "Adoption CRM", value: "95%" },
    ],
    color: "#4B5EFC",
    link: "/cas-clients/ringover",
  },
  {
    name: "Tennaxia",
    desc: "Editeur SaaS ESG, 100 collaborateurs. Mise en place d\u2019un framework RevOps complet : audit, CRM, scoring, automatisation et reporting cross-equipes.",
    metrics: [
      { label: "Pipeline visible", value: "100%" },
      { label: "Workflows actifs", value: "45+" },
      { label: "Temps reporting", value: "-80%" },
    ],
    color: "#FF7A59",
    link: "/cas-clients/tennaxia",
  },
];

const partTimeOffer = [
  { title: "2 jours / mois", desc: "Pour les startups qui demarrent le RevOps. Quick wins, maintenance CRM, support equipes.", price: "A partir de 2 000 EUR/mois", color: "#22C55E" },
  { title: "1 jour / semaine", desc: "Pour les scale-ups qui structurent. Audit, automatisation, reporting, deploiement IA.", price: "A partir de 3 500 EUR/mois", color: "#4B5EFC" },
  { title: "2-3 jours / semaine", desc: "Pour les entreprises qui transforment. Projet CRM complet, migration, refonte process.", price: "A partir de 6 000 EUR/mois", color: "#FF7A59" },
  { title: "Mission ponctuelle", desc: "Audit, migration CRM, deploiement IA. Perimetre defini, budget au forfait, livraison a date.", price: "Sur devis", color: "#6C5CE7" },
];

const faqItems = [
  { q: "C\u2019est quoi exactement un consultant RevOps ?", a: "Un consultant RevOps est un expert qui aligne les operations de Marketing, Sales et Customer Success pour optimiser le cycle revenue. Il intervient sur la stack technique (CRM, automatisation, IA), les process (pipeline, scoring, SLA) et la donnee (reporting, forecasting). C\u2019est le profil qui fait le lien entre la strategie et l\u2019execution operationnelle." },
  { q: "Quelle est la difference entre un consultant RevOps et un consultant CRM ?", a: "Un consultant CRM configure un outil. Un consultant RevOps repense vos operations dans leur ensemble. Le CRM n\u2019est qu\u2019un des leviers. Le RevOps couvre aussi les process, l\u2019alignement inter-equipes, le reporting, l\u2019automatisation et l\u2019IA. C\u2019est une vision end-to-end, pas juste un setup technique." },
  { q: "Combien coute un consultant RevOps ?", a: "Chez Ceres, un consultant RevOps part-time coute entre 2 000 et 6 000 EUR par mois selon le volume. En comparaison, recruter un Head of RevOps en interne coute entre 70 000 et 100 000 EUR par an (charges incluses), sans compter le temps de recrutement et la montee en competence." },
  { q: "A quel moment fait-on appel a un consultant RevOps ?", a: "Des que votre croissance est freinee par vos operations. Signes typiques : CRM mal rempli, pas de visibilite sur le pipeline, equipes desalignees, reporting manuel, pas d\u2019automatisation. En general, c\u2019est pertinent des 10-15 commerciaux ou 2M EUR d\u2019ARR." },
  { q: "On a deja un CRM, on a quand meme besoin d\u2019un consultant RevOps ?", a: "Oui, souvent plus que jamais. Avoir un CRM et l\u2019utiliser correctement sont deux choses differentes. 80% des entreprises qu\u2019on accompagne ont deja un CRM. Le probleme, c\u2019est qu\u2019il est mal configure, sous-utilise ou deconnecte du reste de la stack." },
  { q: "Combien de temps dure une mission de consulting RevOps ?", a: "Une mission ponctuelle (audit, migration) dure 2 a 8 semaines. Un accompagnement part-time dure en general 6 a 12 mois, le temps de poser les fondations et de former vos equipes. Pas d\u2019engagement au-dela de 30 jours." },
  { q: "Est-ce que le consultant RevOps travaille dans nos outils ?", a: "Oui, exclusivement. On est dans votre HubSpot, votre Slack, vos outils du quotidien. On ne travaille pas dans des slides PowerPoint. Chaque livrable est deploye directement dans votre stack." },
  { q: "Quelle est la difference entre RevOps et Sales Ops ?", a: "Sales Ops se concentre sur l\u2019equipe commerciale. RevOps couvre l\u2019ensemble du cycle revenue : Marketing, Sales ET Customer Success. C\u2019est une vision unifiee qui elimine les silos et optimise le parcours complet, de la generation de leads au renouvellement." },
  { q: "On peut commencer petit et augmenter ?", a: "Absolument. La plupart de nos clients commencent a 2 jours par mois et augmentent progressivement quand ils voient les resultats. Pas d\u2019engagement long terme, pas de volume minimum impose." },
  { q: "Comment mesurez-vous les resultats ?", a: "On definit des KPIs concrets des le cadrage : taux de conversion, cycle de vente, data quality, adoption CRM, pipeline genere. Chaque mois, on mesure l\u2019evolution. Si les metriques ne bougent pas, on ajuste l\u2019approche." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Consultant RevOps",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Consultant RevOps specialise en Revenue Operations. Alignement Sales, Marketing, CS. Audit, CRM, automatisation, IA. +250 clients en France.",
      serviceType: "Revenue Operations Consulting",
      areaServed: "FR",
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

export default function ConsultantRevOpsPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 text-[12px] text-[#999]" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/revops" className="hover:text-[#111] transition-colors">RevOps</Link></li>
            <li>/</li>
            <li className="text-[#111] font-medium">Consultant RevOps</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Expert RevOps</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Consultant RevOps France
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Un expert Revenue Operations integre a votre equipe. Il aligne vos operations Marketing, Sales et CS, deploie votre stack et pilote votre croissance par la donnee.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            Le consultant RevOps est le profil le plus recherche et le plus difficile a recruter en France. Chez Ceres, on met a votre disposition un expert RevOps operationnel des la premiere semaine, adosse a une equipe de +10 specialistes.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">250+</div>
              <p className="text-[11px] text-[#999]">clients accompagnes</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">9 ans</div>
              <p className="text-[11px] text-[#999]">d&apos;experience RevOps</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">10+</div>
              <p className="text-[11px] text-[#999]">experts dans l&apos;equipe</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Parler a un expert RevOps
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Definition ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Definition</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">C&apos;est quoi un consultant RevOps ?</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Le Revenue Operations (RevOps) est la fonction qui unifie les operations de Marketing, Sales et Customer Success. Le consultant RevOps est celui qui met cette vision en pratique dans votre entreprise.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {definition.map((item) => (
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

        {/* ───── 3. Consultant vs Recruter ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Comparatif</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Consultant RevOps vs recruter un Head of RevOps</h2>
              <p className="text-[13px] text-[#999] mt-2">Les deux options ont du sens. Voici quand choisir l&apos;une ou l&apos;autre.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4 w-[25%]">Critere</th>
                    <th className="text-[12px] font-semibold text-[#4B5EFC] pb-3 pr-4 w-[37.5%]">Consultant RevOps</th>
                    <th className="text-[12px] font-semibold text-[#999] pb-3 w-[37.5%]">Recrutement interne</th>
                  </tr>
                </thead>
                <tbody>
                  {vsRecrutement.map((row) => (
                    <tr key={row.criteria} className="border-b border-[#F5F5F5]">
                      <td className="text-[12px] font-medium text-[#111] py-3 pr-4">{row.criteria}</td>
                      <td className="text-[11px] text-[#555] py-3 pr-4">{row.consultant}</td>
                      <td className="text-[11px] text-[#999] py-3">{row.recrutement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. Nos domaines ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Domaines d&apos;expertise</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Les 6 piliers de notre consulting RevOps</h2>
              <p className="text-[13px] text-white/40">Chaque domaine est couvert par des experts dedies au sein de notre equipe.</p>
            </div>
            <div className="space-y-3">
              {domaines.map((d) => (
                <div key={d.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: d.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{d.title}</h3>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.6] mb-3">{d.desc}</p>
                  <ul className="space-y-1.5">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11px] text-white/30">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/20"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 5. Comment on travaille ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Processus</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Comment on travaille avec vous</h2>
              <p className="text-[13px] text-[#999] mt-2">Un processus simple, transparent et oriente resultats. Pas de consulting theatre.</p>
            </div>
            <div className="space-y-3">
              {howWeWork.map((step) => (
                <div key={step.num} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAFA]">
                  <span className="text-[12px] font-bold px-2.5 py-1 rounded" style={{ backgroundColor: step.color + "15", color: step.color }}>{step.num}</span>
                  <div>
                    <h3 className="text-[13px] font-semibold text-[#111] mb-0.5">{step.title}</h3>
                    <p className="text-[12px] text-[#777] leading-[1.6]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 6. Cas clients ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ils ont fait appel a un consultant RevOps Ceres</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {casClients.map((c) => (
              <div key={c.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{c.name}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{c.desc}</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-lg bg-[#FAFAFA]">
                      <div className="text-[16px] font-bold" style={{ color: c.color }}>{m.value}</div>
                      <p className="text-[10px] text-[#999]">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link href={c.link} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC] hover:text-[#3B4EEC] transition-colors">
                  Voir le cas client
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 7. RevOps Part-Time ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Tarifs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Consultant RevOps Part-Time : nos formules</h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">Pas d&apos;engagement long terme. Vous ajustez le volume chaque mois selon vos besoins. Preavis de 30 jours, c&apos;est tout.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {partTimeOffer.map((offer) => (
              <div key={offer.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: offer.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{offer.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-3">{offer.desc}</p>
                <p className="text-[13px] font-semibold text-[#111]">{offer.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/revops-part-time" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#4B5EFC] hover:text-[#3B4EEC] transition-colors">
              Decouvrir le RevOps Part-Time en detail
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ───── 8. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur le consulting RevOps</h2>
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

        {/* ───── 9. CTA ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;un consultant RevOps ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On cadre vos besoins en 30 minutes. Diagnostic gratuit, proposition sur-mesure sous 48h.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Parler a un expert RevOps
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
