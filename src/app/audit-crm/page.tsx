"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const whyAudit = [
  { title: "Votre CRM est sous-exploite", desc: "La plupart des entreprises utilisent moins de 30% des fonctionnalites de leur CRM. Les workflows sont desactives, les proprietes inutilisees, les dashboards ignores. Un audit CRM revele le potentiel inexploite.", color: "#FF7A59" },
  { title: "Vos donnees sont degradees", desc: "Doublons, champs vides, contacts obsoletes, entreprises sans activite. La data quality se degrade de 25% par an sans maintenance active. Un audit CRM mesure l\u2019etat reel de vos donnees.", color: "#EF4444" },
  { title: "Vos equipes ne font pas confiance au CRM", desc: "Quand les commerciaux preferent leur Excel a HubSpot, c\u2019est un symptome. Le diagnostic CRM identifie pourquoi l\u2019adoption est faible et comment la corriger.", color: "#4B5EFC" },
  { title: "Votre pipeline n\u2019est pas fiable", desc: "Le forecast repose sur des donnees approximatives. Les deal stages ne correspondent plus a votre cycle de vente. L\u2019audit CRM remet le pipeline en phase avec la realite.", color: "#6C5CE7" },
  { title: "Vos process sont informels", desc: "Pas de SLA entre Marketing et Sales. Pas de definition commune du MQL. Pas de regles de lead routing documentees. L\u2019audit CRM objective ces ecarts et propose un plan correctif.", color: "#D4A27F" },
  { title: "Vous ne savez pas par ou commencer", desc: "Tout semble a refaire mais les ressources sont limitees. Le diagnostic CRM priorise les chantiers par impact et effort, pour que chaque euro investi rapporte un maximum.", color: "#22C55E" },
];

const categories = [
  { title: "Data Quality", points: "12 points", desc: "Taux de remplissage par champ, doublons, contacts obsoletes, coherence inter-objets, donnees orphelines.", color: "#FF7A59", icon: "D" },
  { title: "Pipeline & Deals", points: "10 points", desc: "Pertinence des stages, taux de conversion par etape, velocite, ecart forecast vs reel, deals en stagnation.", color: "#4B5EFC", icon: "P" },
  { title: "Contacts & Segmentation", points: "10 points", desc: "Qualite des lifecycles, segmentation comportementale, listes actives vs statiques, gestion des opt-outs.", color: "#6C5CE7", icon: "C" },
  { title: "Automatisation", points: "10 points", desc: "Workflows actifs vs inactifs, sequences, lead scoring, lead routing, taches automatisees, erreurs detectees.", color: "#6D00CC", icon: "A" },
  { title: "Reporting & Dashboards", points: "10 points", desc: "Dashboards existants vs utilises, KPIs suivis par equipe, attribution, forecasting, custom reports.", color: "#22C55E", icon: "R" },
  { title: "Integrations & Stack", points: "10 points", desc: "Cartographie des outils, flux de donnees, connecteurs actifs, trous dans la chaine de donnees, outils redondants.", color: "#D4A27F", icon: "I" },
  { title: "Process & SLA", points: "10 points", desc: "Definition MQL/SQL, temps de reponse aux leads, handoff Sales-CS, SLA documentes vs realite terrain.", color: "#EAB308", icon: "S" },
  { title: "Adoption & Utilisation", points: "8 points", desc: "Taux de connexion par utilisateur, fiches completes, actions par jour, dernier login, formation recue.", color: "#EC4899", icon: "U" },
];

const maturityLevels = [
  { range: "0 - 25", label: "Critique", desc: "Le CRM est un tableur glorifie. Les donnees sont inutilisables, les process inexistants. Action urgente requise.", color: "#EF4444" },
  { range: "26 - 50", label: "Fragile", desc: "Les bases sont posees mais mal exploitees. Data quality insuffisante, automatisation quasi absente. Potentiel important.", color: "#F97316" },
  { range: "51 - 75", label: "En progression", desc: "Le CRM fonctionne mais sous-performe. Des quick wins sont possibles pour gagner 15-20 points rapidement.", color: "#EAB308" },
  { range: "76 - 100", label: "Performant", desc: "Le CRM est un vrai outil de pilotage. Optimisations fines possibles : IA, attribution avancee, forecasting predictif.", color: "#22C55E" },
];

const casClients = [
  {
    name: "Elax Energie",
    desc: "Start-up cleantech, 40 collaborateurs. HubSpot installe depuis 2 ans mais jamais correctement configure. Audit complet suivi d\u2019un plan de restructuration execute en 6 semaines.",
    scoreBefore: 17,
    scoreAfter: 76,
    highlights: ["Data quality passee de 23% a 91%", "Pipeline restructure en 5 stages pertinents", "25 workflows deployes post-audit", "Adoption CRM passee de 30% a 92%"],
    color: "#22C55E",
    link: "/cas-clients/elax-energie",
  },
  {
    name: "Kameleoon",
    desc: "Editeur SaaS A/B testing, 200 collaborateurs. Instance HubSpot complexe avec 150 workflows et 800 proprietes custom. Audit pour identifier les optimisations prioritaires.",
    scoreBefore: 25,
    scoreAfter: 78,
    highlights: ["300 proprietes inutiles supprimees", "50 workflows redondants desactives", "Reporting centralise en 5 dashboards", "Cycle de vente reduit de 15 jours"],
    color: "#6C5CE7",
    link: "/cas-clients/kameleoon",
  },
];

const deliverables = [
  { title: "Rapport d\u2019audit complet", desc: "Document de 40 a 60 pages. Chaque categorie analysee avec captures d\u2019ecran, donnees chiffrees, diagnostic et recommandations specifiques a votre instance.", color: "#FF7A59" },
  { title: "Score de maturite CRM", desc: "Note globale sur 100 avec detail par categorie. Benchmark par rapport a votre secteur et votre taille d\u2019entreprise. Evolution mesurable dans le temps.", color: "#4B5EFC" },
  { title: "Cartographie de la stack", desc: "Schema visuel de tous vos outils et des flux de donnees entre eux. Identification des trous, des redondances et des opportunites d\u2019integration.", color: "#6C5CE7" },
  { title: "Liste de quick wins", desc: "5 a 10 actions a impact immediat que vous pouvez executer cette semaine sans investissement supplementaire. Resultat visible en quelques jours.", color: "#6D00CC" },
  { title: "Plan d\u2019action 90 jours", desc: "Roadmap priorisee par impact et effort. Chaque chantier est estime en temps, en cout et en resultat attendu. Vous savez exactement quoi faire et dans quel ordre.", color: "#22C55E" },
  { title: "Restitution live", desc: "Presentation de 1h avec votre equipe. On parcourt les resultats, on repond aux questions, on ajuste les priorites ensemble. Enregistrement fourni.", color: "#D4A27F" },
];

const faqItems = [
  { q: "Combien de temps dure un audit CRM ?", a: "Entre 1 et 2 semaines selon la taille de votre instance. On a besoin d\u2019acces a votre CRM (HubSpot, Salesforce ou autre) et de 2-3 interviews de 30 minutes avec vos equipes. Le livrable est presente lors d\u2019une restitution live." },
  { q: "Quel est le prix d\u2019un audit CRM ?", a: "A partir de 2 500 EUR pour une PME avec un CRM standard. Le tarif augmente avec la complexite de votre instance (nombre de workflows, integrations, utilisateurs). On cadre le perimetre et le budget lors d\u2019un appel gratuit de 30 minutes." },
  { q: "L\u2019audit CRM fonctionne avec quel CRM ?", a: "Principalement HubSpot et Salesforce, qui representent 90% de nos audits. On intervient aussi sur Pipedrive, Zoho et des CRM custom. Le framework de 80 points est adapte a chaque plateforme." },
  { q: "Qu\u2019est-ce que le score de maturite CRM ?", a: "C\u2019est une note sur 100 qui mesure la performance de votre CRM sur 8 categories (data quality, pipeline, automatisation, etc.). Il permet de comparer votre niveau a celui d\u2019entreprises similaires et de mesurer votre progression dans le temps." },
  { q: "On a deja fait un audit CRM il y a un an, c\u2019est utile d\u2019en refaire un ?", a: "Oui. La data quality se degrade de 25% par an. Vos process evoluent, vos equipes changent, de nouveaux outils sont ajoutes. Un audit annuel est recommande pour maintenir la performance de votre CRM." },
  { q: "Est-ce que l\u2019audit inclut la mise en oeuvre des recommandations ?", a: "L\u2019audit en lui-meme est un diagnostic. La mise en oeuvre est un projet separe qu\u2019on peut prendre en charge (migration, restructuration, automatisation). Beaucoup de clients enchainent audit + execution pour un impact maximal." },
  { q: "Combien de quick wins trouve-t-on en moyenne ?", a: "Entre 5 et 10 actions a impact immediat. Par exemple : supprimer les doublons, reactiver des workflows desactives par erreur, corriger les deal stages, ajouter des champs obligatoires. Ces quick wins peuvent etre deployes dans la semaine suivant l\u2019audit." },
  { q: "L\u2019audit perturbe-t-il l\u2019utilisation du CRM ?", a: "Non. L\u2019audit est une analyse en lecture seule. On ne modifie rien dans votre CRM pendant l\u2019audit. Les changements ne sont appliques que pendant la phase d\u2019execution, si vous le souhaitez." },
  { q: "Qui doit etre implique dans l\u2019audit CRM ?", a: "Idealement, un representant de chaque equipe qui utilise le CRM : Sales, Marketing, CS et le/la responsable ops. On prevoit 2-3 interviews de 30 minutes chacune. Le reste du travail est fait par notre equipe." },
  { q: "Comment se passe la restitution ?", a: "Presentation live de 1 heure avec votre equipe. On parcourt le score de maturite, les principales conclusions, les quick wins et le plan 90 jours. Questions et discussion incluses. L\u2019enregistrement et les slides sont fournis." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Audit CRM",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Audit CRM complet en 80 points. Diagnostic HubSpot, Salesforce ou Pipedrive. Score de maturite, plan d\u2019action priorise, quick wins. A partir de 2 500 EUR.",
      serviceType: "CRM Audit",
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

export default function AuditCRMPage() {
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
            <li className="text-[#111] font-medium">Audit CRM</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Diagnostic</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Audit CRM : le diagnostic complet de votre CRM
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            80 points de controle. 8 categories. Un score de maturite sur 100. L&apos;audit CRM qui vous dit exactement ou vous en etes et ce qu&apos;il faut corriger en priorite.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            Que vous soyez sur HubSpot, Salesforce ou un autre CRM, notre audit CRM analyse votre data quality, vos process, vos automatisations et votre adoption. Resultat : un plan d&apos;action priorise et des quick wins deployes des la premiere semaine.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">80</div>
              <p className="text-[11px] text-[#999]">points de controle</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">8</div>
              <p className="text-[11px] text-[#999]">categories evaluees</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">2 sem</div>
              <p className="text-[11px] text-[#999]">delai de livraison</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Lancer mon audit CRM
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Pourquoi faire un audit CRM ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pourquoi</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Pourquoi faire un audit CRM</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Un CRM non audite est un CRM qui se degrade silencieusement. Voici les signaux qui indiquent qu&apos;il est temps de faire un diagnostic CRM.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyAudit.map((item) => (
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

        {/* ───── 3. Framework 80 points ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Framework</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Notre framework d&apos;audit CRM en 80 points</h2>
              <p className="text-[13px] text-white/40">8 categories, 80 points de controle. Chaque element est evalue, note et accompagne d&apos;une recommandation actionnable.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((cat) => (
                <div key={cat.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-bold" style={{ backgroundColor: cat.color + "20", color: cat.color }}>{cat.icon}</div>
                      <h3 className="text-[14px] font-semibold text-white">{cat.title}</h3>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/10 text-white/50">{cat.points}</span>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65]">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. Score de maturite ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Score</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Score de maturite CRM : ou vous situez-vous ?</h2>
              <p className="text-[13px] text-[#999] mt-2">Votre score global sur 100 indique la sante de votre CRM. Voici comment interpreter votre resultat.</p>
            </div>
            {/* Visual gauge */}
            <div className="mb-8">
              <div className="relative h-4 rounded-full overflow-hidden bg-[#F5F5F5]">
                <div className="absolute inset-y-0 left-0 w-[25%] bg-[#EF4444] rounded-l-full" />
                <div className="absolute inset-y-0 left-[25%] w-[25%] bg-[#F97316]" />
                <div className="absolute inset-y-0 left-[50%] w-[25%] bg-[#EAB308]" />
                <div className="absolute inset-y-0 left-[75%] w-[25%] bg-[#22C55E] rounded-r-full" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-[#999]">0</span>
                <span className="text-[10px] text-[#999]">25</span>
                <span className="text-[10px] text-[#999]">50</span>
                <span className="text-[10px] text-[#999]">75</span>
                <span className="text-[10px] text-[#999]">100</span>
              </div>
            </div>
            <div className="space-y-3">
              {maturityLevels.map((level) => (
                <div key={level.range} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAFA]">
                  <span className="text-[12px] font-bold px-2.5 py-1 rounded shrink-0" style={{ backgroundColor: level.color + "15", color: level.color }}>{level.range}</span>
                  <div>
                    <h3 className="text-[13px] font-semibold text-[#111] mb-0.5">{level.label}</h3>
                    <p className="text-[12px] text-[#777] leading-[1.6]">{level.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 5. Cas clients ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Audits CRM en action</h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">Deux entreprises, deux contextes differents, des resultats mesurables.</p>
          </div>
          <div className="space-y-4">
            {casClients.map((c) => (
              <div key={c.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{c.name}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{c.desc}</p>
                {/* Score evolution */}
                <div className="flex items-center gap-4 mb-4 p-4 rounded-xl bg-[#FAFAFA]">
                  <div className="text-center">
                    <div className="text-[24px] font-bold text-[#EF4444]">{c.scoreBefore}</div>
                    <p className="text-[10px] text-[#999]">Score avant</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-[#999]"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div className="text-center">
                    <div className="text-[24px] font-bold" style={{ color: c.color }}>{c.scoreAfter}</div>
                    <p className="text-[10px] text-[#999]">Score apres</p>
                  </div>
                  <div className="ml-auto text-center">
                    <div className="text-[24px] font-bold text-[#22C55E]">+{c.scoreAfter - c.scoreBefore}</div>
                    <p className="text-[10px] text-[#999]">points gagnes</p>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link href={c.link} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC] hover:text-[#3B4EEC] transition-colors">
                  Voir le cas client complet
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 6. Livrables ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Livrables</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ce que vous recevez</h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">Chaque audit CRM produit 6 livrables concrets et actionnables.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {deliverables.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: d.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{d.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 7. Tarifs ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Tarifs</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Tarifs de l&apos;audit CRM</h2>
              <p className="text-[13px] text-[#999] mt-2">Prix au forfait, defini apres un appel de cadrage gratuit de 30 minutes.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4">Profil</th>
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4">Perimetre</th>
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4">Delai</th>
                    <th className="text-[12px] font-semibold text-[#111] pb-3">Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F5F5F5]">
                    <td className="text-[12px] text-[#555] py-3 pr-4">Startup / PME</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">CRM standard, &lt;10 utilisateurs</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">1 semaine</td>
                    <td className="text-[12px] font-medium text-[#111] py-3">A partir de 2 500 EUR</td>
                  </tr>
                  <tr className="border-b border-[#F5F5F5]">
                    <td className="text-[12px] text-[#555] py-3 pr-4">Scale-up / ETI</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">CRM complexe, 10-50 utilisateurs</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">1-2 semaines</td>
                    <td className="text-[12px] font-medium text-[#111] py-3">4 000 - 7 000 EUR</td>
                  </tr>
                  <tr>
                    <td className="text-[12px] text-[#555] py-3 pr-4">Grand Groupe</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">Multi-instances, 50+ utilisateurs</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">2 semaines</td>
                    <td className="text-[12px] font-medium text-[#111] py-3">Sur devis</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-[#FAFAFA]">
              <p className="text-[12px] text-[#777] leading-[1.6]">Tous les tarifs incluent : l&apos;audit complet 80 points, le score de maturite, la cartographie stack, les quick wins, le plan 90 jours et la restitution live. L&apos;appel de cadrage est gratuit et sans engagement.</p>
            </div>
            <div className="mt-4">
              <Link href="/audit-revops" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#4B5EFC] hover:text-[#3B4EEC] transition-colors">
                Decouvrir notre audit RevOps complet (CRM + process + stack)
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 8. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur l&apos;audit CRM</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a auditer votre CRM ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On cadre le perimetre en 30 minutes. Diagnostic gratuit, devis au forfait sous 48h.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Lancer mon audit CRM
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
