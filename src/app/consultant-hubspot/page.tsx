"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ---------- data ---------- */

const definitionPoints = [
  { title: "Audit de votre instance", desc: "Le consultant HubSpot analyse votre portail en profondeur : proprietes, pipelines, workflows, integrations, data quality. Il identifie les blocages et les opportunites d\u2019optimisation que vous ne voyez plus.", color: "#FF7A59" },
  { title: "Implementation sur-mesure", desc: "Il configure HubSpot selon vos process metier, pas l\u2019inverse. Chaque pipeline, chaque automatisation, chaque vue est pensee pour vos equipes et votre cycle de vente.", color: "#4B5EFC" },
  { title: "Migration CRM", desc: "Vous quittez Salesforce, Pipedrive ou Dynamics ? Le consultant HubSpot pilote la migration de A a Z : mapping des donnees, reconstruction des workflows, formation des equipes, double-run securise.", color: "#6D00CC" },
  { title: "Formation et adoption", desc: "Un CRM qui n\u2019est pas adopte est un CRM inutile. Le consultant HubSpot forme vos equipes sur VOS process, pas sur un tutoriel generique. L\u2019objectif : une adoption superieure a 90%.", color: "#22C55E" },
  { title: "Optimisation continue", desc: "HubSpot evolue constamment. Un consultant HubSpot experimente surveille les nouvelles fonctionnalites, ajuste vos workflows et s\u2019assure que votre instance reste performante dans le temps.", color: "#6C5CE7" },
  { title: "Strategie RevOps", desc: "Au-dela de la technique, un bon consultant HubSpot aligne Marketing, Sales et Customer Success autour d\u2019une source de verite unique. Il structure vos operations revenue de bout en bout.", color: "#D4A27F" },
];

const comparisonRows = [
  { critere: "Expertise HubSpot", consultant: "Tres profonde, specialisee", agence: "Variable selon le consultant assigne", freelance: "Variable, souvent autodidacte" },
  { critere: "Disponibilite", consultant: "Dedie a votre projet", agence: "Partage entre plusieurs clients", freelance: "Depend de son planning" },
  { critere: "Cout", consultant: "Intermediaire, previsible", agence: "Eleve (structure + marge)", freelance: "Bas, mais risque qualite" },
  { critere: "Suivi long terme", consultant: "Accompagnement continu possible", agence: "Contrat reconduit ou non", freelance: "Aleatoire" },
  { critere: "Equipe derriere", consultant: "Backed par +10 experts chez Ceres", agence: "Equipe interne", freelance: "Seul" },
  { critere: "IA et innovation", consultant: "Deploiement Claude, MCP, agents IA", agence: "Rare, en phase d\u2019exploration", freelance: "Rarement" },
  { critere: "Connaissance metier", consultant: "Immersion dans votre business", agence: "Vue externe, cadrage rapide", freelance: "Depends du profil" },
];

const hubs = [
  {
    title: "Sales Hub",
    desc: "Le coeur de votre machine commerciale. Un consultant HubSpot Sales Hub configure vos pipelines, sequences de prospection, playbooks, devis et forecasting pour que chaque commercial ait une vue claire de son activite et de ses objectifs.",
    color: "#FF7A59",
    features: ["Pipeline deals multi-devises sur-mesure", "Sequences email + calls automatisees", "Playbooks par etape du cycle de vente", "Forecasting predictif et quotas", "Devis, e-signatures et CPQ", "Lead scoring comportemental et predictif", "Rapports d\u2019activite par rep et par equipe"],
  },
  {
    title: "Marketing Hub",
    desc: "De l\u2019acquisition a la conversion. Le consultant HubSpot Marketing Hub deploie vos workflows de nurturing, segmente vos audiences, construit vos landing pages et met en place l\u2019attribution multi-touch pour mesurer le vrai ROI de chaque canal.",
    color: "#FF5C35",
    features: ["Workflows de nurturing multi-etapes", "Segmentation comportementale avancee", "Landing pages et CTAs dynamiques", "Attribution multi-touch (first, last, linear, custom)", "Gestion social media et ads", "A/B testing emails et pages", "Reporting campagnes et ROI par canal"],
  },
  {
    title: "Service Hub",
    desc: "La retention client commence ici. Un consultant HubSpot Service Hub structure votre support avec des tickets, une knowledge base, des enquetes NPS et des SLA automatises. L\u2019objectif : transformer vos clients en promoteurs.",
    color: "#00BDA5",
    features: ["Systeme de tickets avec routage automatique", "Knowledge base multilingue", "Enquetes NPS, CSAT et CES", "SLA et escalation automatises", "Portail client self-service", "Chatbots et live chat", "Reporting satisfaction et temps de resolution"],
  },
  {
    title: "Operations Hub",
    desc: "L\u2019arme secrete du consultant HubSpot avance. Ops Hub permet la synchronisation bi-directionnelle avec vos outils, le nettoyage automatique des donnees et les custom coded actions pour des automatisations impossibles autrement.",
    color: "#6C5CE7",
    features: ["Sync bi-directionnelle (Salesforce, ERP, outils internes)", "Data quality automation (formatage, deduplication)", "Custom coded workflows (JavaScript/Python)", "Datasets et reporting avance", "Webhooks et API pour integrations sur-mesure", "Programmable automation", "Snowflake data share pour BI avancee"],
  },
  {
    title: "CMS Hub",
    desc: "Un site web directement connecte a votre CRM. Le consultant HubSpot CMS Hub construit des pages performantes, personnalisees selon le visiteur, avec un SEO technique optimise et des smart content qui s\u2019adaptent au lifecycle stage.",
    color: "#F5C26B",
    features: ["Pages web drag-and-drop", "Smart content personnalise par segment", "SEO technique integre", "Modules custom reutilisables", "Staging et previews multi-devices", "CDN global et securite SSL", "A/B testing de pages"],
  },
];

const methode = [
  { num: "01", title: "Diagnostic complet", desc: "On audite votre instance HubSpot (ou votre CRM actuel si vous migrez), vos process, votre stack et vos objectifs. Livrable : un rapport d\u2019audit avec les quick wins et la roadmap priorisee. Duree : 1 a 2 semaines.", color: "#FF7A59" },
  { num: "02", title: "Implementation ou optimisation", desc: "On configure ou restructure votre HubSpot selon les priorites identifiees. Pipelines, proprietes, workflows, integrations, dashboards. Chaque element est documente et teste avec vos equipes. Duree : 2 a 6 semaines.", color: "#4B5EFC" },
  { num: "03", title: "Formation sur-mesure", desc: "On forme vos equipes sur LEURS process dans LEUR HubSpot. Pas de formation generique. Chaque role a sa session dediee : commerciaux, marketeurs, managers, admins. Support inclus pendant 30 jours. Duree : 1 a 2 semaines.", color: "#6D00CC" },
  { num: "04", title: "Accompagnement continu", desc: "Le consultant HubSpot reste disponible pour les ajustements, les nouvelles fonctionnalites, le support utilisateurs et l\u2019evolution de votre instance. En mode part-time ou ponctuel selon vos besoins.", color: "#22C55E" },
];

const casClients = [
  { name: "Beedeez", slug: "beedeez", desc: "Structuration RevOps complete et deploiement IA sur tout le cycle de vente. +45% de pipeline genere.", color: "#4B5EFC", tag: "SaaS EdTech" },
  { name: "TotalEnergies", slug: "totalenergies", desc: "Migration Dynamics vers HubSpot Enterprise, unification multi-instances. 45K+ contacts migres, zero perte.", color: "#FF7A59", tag: "Energie" },
  { name: "Alan", slug: "alan", desc: "Tracking marketing multi-touch et attribution dans HubSpot. 100% des leads traces.", color: "#6C5CE7", tag: "AssurTech" },
  { name: "Kameleoon", slug: "kameleoon", desc: "Audit HubSpot complet et restructuration de l\u2019instance pour supporter la croissance.", color: "#6D00CC", tag: "SaaS A/B Testing" },
  { name: "Dougs", slug: "dougs", desc: "RevOps Part-Time : consultant HubSpot dedie chaque mois pour gerer et faire evoluer le CRM.", color: "#22C55E", tag: "FinTech" },
];

const tarifs = [
  { title: "Audit HubSpot", desc: "Diagnostic complet de votre instance, rapport avec quick wins et roadmap priorisee.", prix: "A partir de 2 500 \u20ac", color: "#FF7A59", inclus: ["Audit proprietes, pipelines, workflows", "Analyse data quality", "Rapport + recommandations", "Call de restitution 1h"] },
  { title: "Implementation", desc: "Configuration complete de HubSpot selon vos process. Cle en main.", prix: "A partir de 5 000 \u20ac", color: "#4B5EFC", inclus: ["Cadrage process avec vos equipes", "Config pipelines, proprietes, vues", "Workflows et automatisations", "Integrations stack", "Formation utilisateurs"] },
  { title: "Migration CRM", desc: "Migration Salesforce, Pipedrive ou Dynamics vers HubSpot. Donnees, workflows, historique.", prix: "A partir de 8 000 \u20ac", color: "#6D00CC", inclus: ["Audit existant et mapping", "Migration donnees complete", "Reconstruction workflows", "Double-run securise", "Formation equipes"] },
  { title: "Consultant Part-Time", desc: "Un consultant HubSpot dedie chaque mois, integre a votre equipe.", prix: "A partir de 2 000 \u20ac / mois", color: "#22C55E", inclus: ["2 a 5 jours par semaine", "Support users quotidien", "Maintenance et evolutions", "Deploiement IA", "Reporting et dashboards"] },
];

const faqItems = [
  { q: "Qu\u2019est-ce qu\u2019un consultant HubSpot exactement ?", a: "Un consultant HubSpot est un expert certifie qui vous aide a tirer le maximum de la plateforme HubSpot. Il intervient sur la strategie CRM, la configuration technique, la migration depuis un autre outil, la formation de vos equipes et l\u2019optimisation continue de votre instance. Chez Ceres, nos consultants HubSpot combinent expertise CRM et competences en IA pour aller plus loin que la configuration standard." },
  { q: "Pourquoi faire appel a un consultant HubSpot plutot qu\u2019a un employe interne ?", a: "Un consultant HubSpot apporte une expertise immediate sans les couts de recrutement, de formation et de management. Il a vu des dizaines d\u2019instances differentes et sait ce qui fonctionne. Chez Ceres, votre consultant est backed par une equipe de +10 experts, ce qui garantit une profondeur d\u2019expertise qu\u2019un employe seul ne peut pas offrir." },
  { q: "Combien coute un consultant HubSpot en France ?", a: "Les tarifs varient selon le type de mission. Un audit demarre a 2 500 euros, une implementation complete a 5 000 euros, une migration CRM a 8 000 euros. Pour un accompagnement recurrent (consultant part-time), comptez a partir de 2 000 euros par mois. L\u2019appel de cadrage est gratuit et permet de definir le budget exact." },
  { q: "Vous etes certifies HubSpot ?", a: "Oui. Notre equipe cumule les certifications HubSpot sur Sales Hub, Marketing Hub, Service Hub, Operations Hub et CMS Hub. Nous travaillons avec HubSpot depuis 2019 et avons deploye plus de 100 instances. Nous sommes egalement experts en IA appliquee au CRM, une competence rare chez les consultants HubSpot." },
  { q: "Quelle est la difference entre un consultant HubSpot et une agence HubSpot ?", a: "Un consultant HubSpot travaille en immersion dans votre equipe. Il connait vos deals, vos reps, vos process. Une agence travaille en mode projet avec plusieurs clients en parallele. Chez Ceres, vous avez les deux : un consultant dedie backed par une equipe complete. Le meilleur des deux mondes." },
  { q: "Vous intervenez partout en France ?", a: "Oui. Nos consultants HubSpot interviennent a Paris, Lyon, Marseille, Bordeaux, Nantes, Lille, Toulouse et dans toute la France en remote. La majorite de nos missions se font en hybride : quelques jours sur site pour le cadrage et la formation, le reste en remote." },
  { q: "Combien de temps dure une mission typique avec un consultant HubSpot ?", a: "Un audit prend 1 a 2 semaines. Une implementation complete de 3 a 6 semaines. Une migration CRM de 4 a 8 semaines. Pour l\u2019accompagnement continu en mode part-time, la duree moyenne est de 6 a 12 mois. Il n\u2019y a pas d\u2019engagement long terme : preavis de 30 jours." },
  { q: "Vous pouvez deployer de l\u2019IA dans HubSpot ?", a: "Oui, c\u2019est notre specialite. Au-dela de Breeze (l\u2019IA native de HubSpot), nous deployons des agents Claude connectes a votre CRM via le protocole MCP. Qualification automatique des leads, resumes de calls, enrichissement de donnees, scoring predictif. L\u2019IA au service de vos equipes, directement dans HubSpot." },
  { q: "On a deja HubSpot mais c\u2019est mal configure. Vous reprenez ?", a: "C\u2019est notre cas le plus frequent. La plupart des entreprises sous-exploitent HubSpot. Notre consultant HubSpot audite votre instance, identifie les problemes, restructure les pipelines et workflows, nettoie les donnees et forme vos equipes. Sans perdre votre historique ni interrompre votre activite." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Consultant HubSpot",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Consultant HubSpot certifie en France. Setup, migration, optimisation CRM et formation. 250+ clients accompagnes, 9 ans d\u2019experience.",
      serviceType: "HubSpot Consulting",
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

/* ---------- page ---------- */

export default function ConsultantHubSpotPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/agence-hubspot" className="hover:text-[#111] transition-colors">Agence HubSpot</Link>
          <span>/</span>
          <span className="text-[#666]">Consultant HubSpot</span>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Expert HubSpot</Badge></div>
          <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Consultant HubSpot : l&apos;expertise sans le recrutement
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Un expert HubSpot certifie, dedie a votre projet. Il configure, migre, optimise et forme vos equipes. A Paris et partout en France.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { value: "250+", label: "Clients accompagnes" },
              { value: "100+", label: "Instances deployees" },
              { value: "9 ans", label: "D\u2019experience HubSpot" },
              { value: "95%", label: "Taux d\u2019adoption" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[22px] font-bold text-[#111] tracking-[-0.02em]">{s.value}</div>
                <p className="text-[11px] text-[#999] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />
            Parler a un consultant HubSpot
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Definition SEO ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>Definition</Badge></div>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Qu&apos;est-ce qu&apos;un consultant HubSpot ?</h2>
              <p className="text-[14px] text-[#666] leading-[1.7] max-w-[700px]">
                Un <strong>consultant HubSpot</strong> est un expert certifie de la plateforme HubSpot CRM. Son role : vous aider a tirer le maximum de l&apos;outil, que ce soit pour une premiere implementation, une migration depuis un autre CRM, l&apos;optimisation d&apos;une instance existante ou la formation de vos equipes. Contrairement a un administrateur CRM classique, le consultant HubSpot combine expertise technique et vision strategique. Il ne se contente pas de configurer des champs et des workflows : il aligne votre CRM sur vos objectifs de croissance et structure vos operations revenue (RevOps) pour que Marketing, Sales et Customer Success travaillent ensemble, sur la meme donnee, avec les memes objectifs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {definitionPoints.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[13px] font-semibold text-[#111]">{item.title}</h3>
                  </div>
                  <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 3. Consultant vs Agence vs Freelance ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Comparatif</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Consultant HubSpot vs agence vs freelance</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Trois options, des differences majeures. Voici pourquoi le modele consultant HubSpot chez Ceres combine le meilleur de chaque approche.</p>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#F2F2F2]">
                    <th className="px-5 py-3.5 text-[12px] font-semibold text-[#999] uppercase tracking-wider">Critere</th>
                    <th className="px-5 py-3.5 text-[12px] font-semibold text-[#FF7A59] uppercase tracking-wider">Consultant Ceres</th>
                    <th className="px-5 py-3.5 text-[12px] font-semibold text-[#999] uppercase tracking-wider">Agence classique</th>
                    <th className="px-5 py-3.5 text-[12px] font-semibold text-[#999] uppercase tracking-wider">Freelance</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-[#F8F8F8] last:border-b-0">
                      <td className="px-5 py-3 text-[12px] font-semibold text-[#111]">{row.critere}</td>
                      <td className="px-5 py-3 text-[12px] text-[#111] font-medium">{row.consultant}</td>
                      <td className="px-5 py-3 text-[12px] text-[#777]">{row.agence}</td>
                      <td className="px-5 py-3 text-[12px] text-[#777]">{row.freelance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. Domaines d'expertise — les 5 Hubs ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Expertise</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Nos domaines d&apos;expertise HubSpot</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Un consultant HubSpot Ceres maitrise les 5 Hubs. Chaque module est configure pour fonctionner ensemble, pas en silo.</p>
          </div>
          <div className="space-y-4">
            {hubs.map((h) => (
              <div key={h.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: h.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{h.title}</h3>
                </div>
                <p className="text-[13px] text-[#666] leading-[1.7] mb-4">{h.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {h.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 5. Comment on travaille ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Notre methode</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Comment travaille un consultant HubSpot Ceres</h2>
              <p className="text-[13px] text-white/40">4 etapes. De l&apos;audit initial a l&apos;accompagnement long terme.</p>
            </div>
            <div className="space-y-3">
              {methode.map((step) => (
                <div key={step.num} className="rounded-xl bg-white/5 border border-white/10 p-5 flex gap-5">
                  <span className="text-[24px] font-bold shrink-0" style={{ color: step.color }}>{step.num}</span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-[12px] text-white/40 leading-[1.6]">{step.desc}</p>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ils ont fait appel a un consultant HubSpot Ceres</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Startups, scale-ups et grands groupes. Chaque mission commence par un diagnostic et se termine par des resultats mesurables.</p>
          </div>
          <div className="space-y-3">
            {casClients.map((cas) => (
              <Link key={cas.slug} href={`/cas-clients/${cas.slug}`} className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#CCC] hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: cas.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{cas.name}</h3>
                  <span className="ml-auto text-[10px] font-medium px-2.5 py-0.5 rounded-md bg-[#F5F5F5] text-[#777]">{cas.tag}</span>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{cas.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/cas-clients" className="inline-flex items-center gap-2 text-[12px] text-[#999] hover:text-[#111] transition-colors">
              Voir tous nos cas clients
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ───── 7. Consultant HubSpot Part-Time ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Offre phare</Badge></div>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Consultant HubSpot Part-Time</h2>
              <p className="text-[14px] text-[#666] leading-[1.7] max-w-[700px]">
                Vous n&apos;avez pas besoin d&apos;un consultant HubSpot a plein temps, mais vous avez besoin d&apos;un expert disponible chaque semaine. Notre offre Part-Time vous donne acces a un consultant HubSpot dedie, integre a votre equipe, pour 2 a 5 jours par semaine. Il gere votre CRM, automatise vos process, deploie l&apos;IA et fait evoluer votre instance en continu. Sans engagement long terme.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                { title: "Dedie a votre equipe", desc: "Meme consultant chaque semaine, dans votre Slack, qui connait vos deals et vos reps.", color: "#4B5EFC" },
                { title: "Execution, pas conseil", desc: "On ne vous dit pas quoi faire. On le fait. Chaque semaine, des livrables concrets.", color: "#FF7A59" },
                { title: "IA deployee pour vous", desc: "Agents Claude connectes a votre CRM via MCP. Qualification, resumes, scoring.", color: "#6D00CC" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[12px] font-semibold text-[#111]">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/revops-part-time" className="inline-flex items-center gap-2 text-[12px] text-[#FF7A59] font-medium hover:text-[#E0684C] transition-colors">
              Decouvrir l&apos;offre Part-Time
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ───── 8. Tarifs indicatifs ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Tarifs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Tarifs indicatifs consultant HubSpot</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Au forfait, apres cadrage. Pas de taux journalier, pas de surprise. L&apos;appel de cadrage est gratuit.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tarifs.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: t.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{t.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-3">{t.desc}</p>
                <div className="text-[18px] font-bold text-[#111] tracking-[-0.02em] mb-4">{t.prix}</div>
                <ul className="space-y-1.5">
                  {t.inclus.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 9. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur le consultant HubSpot</h2>
            </div>
            <div className="space-y-0">
              {faqItems.map((f, i) => (
                <div key={i} className="border-b border-[#F2F2F2] py-4 last:border-b-0">
                  <h3 className="text-[13px] font-semibold text-[#111] mb-1.5">{f.q}</h3>
                  <p className="text-[12px] text-[#777] leading-[1.6]">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 10. CTA ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Besoin d&apos;un consultant HubSpot ?
            </h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">
              30 minutes pour comprendre votre situation, identifier les quick wins et definir les prochaines etapes. Sans engagement.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Reserver un appel gratuit
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
