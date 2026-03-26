"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const whyParis = [
  { title: "Proximit\u00e9 g\u00e9ographique", desc: "Nos bureaux sont situ\u00e9s rue La Bo\u00e9tie, dans le 8e arrondissement de Paris. On se d\u00e9place chez vous pour les ateliers de cadrage, les workshops RevOps et les go-live. Rien ne remplace le pr\u00e9sentiel pour aligner Marketing, Sales et Customer Success.", color: "#FF7A59" },
  { title: "Rendez-vous sur site", desc: "Cadrage strat\u00e9gique dans vos locaux, immersion dans vos \u00e9quipes, observation des process terrain. Un consultant RevOps \u00e0 Paris qui vient chez vous, c\u2019est un consultant qui comprend votre r\u00e9alit\u00e9 op\u00e9rationnelle, pas seulement vos dashboards.", color: "#4B5EFC" },
  { title: "\u00c9cosyst\u00e8me tech parisien", desc: "Paris concentre le plus grand \u00e9cosyst\u00e8me tech fran\u00e7ais : Station F, French Tech, des centaines de SaaS B2B. On conna\u00eet les stacks, les process et les enjeux sp\u00e9cifiques des entreprises parisiennes parce qu\u2019on y travaille depuis 9 ans.", color: "#6D00CC" },
  { title: "Connaissance du march\u00e9 fran\u00e7ais", desc: "RGPD, facturation \u00e0 la fran\u00e7aise, cycles de vente B2B longs, double validation juridique, process AO publics : on conna\u00eet les sp\u00e9cificit\u00e9s du march\u00e9 fran\u00e7ais et on configure vos Revenue Operations en cons\u00e9quence.", color: "#22C55E" },
  { title: "R\u00e9activit\u00e9 timezone", desc: "M\u00eame fuseau horaire, Slack d\u00e9di\u00e9, r\u00e9ponse sous 2h en jours ouvr\u00e9s. Pas de d\u00e9calage horaire, pas de tickets perdus dans une file d\u2019attente offshore. Quand votre pipeline a un probl\u00e8me le mardi matin, on est l\u00e0 dans l\u2019heure.", color: "#6C5CE7" },
  { title: "R\u00e9seau partenaire local", desc: "On collabore avec les agences SEO, Paid, Product et Data parisiennes pour vous offrir un \u00e9cosyst\u00e8me complet. Notre r\u00e9seau inclut aussi HubSpot France dont les bureaux sont \u00e0 Paris.", color: "#D4A27F" },
];

const services = [
  {
    title: "Audit RevOps complet",
    desc: "87 points de contr\u00f4le sur l\u2019ensemble de votre cha\u00eene revenue : acquisition, conversion, expansion, r\u00e9tention. On audite vos process, vos outils, vos donn\u00e9es et votre alignement \u00e9quipes. Livrable : rapport d\u00e9taill\u00e9 + roadmap prioris\u00e9e avec estimation ROI par chantier.",
    items: ["Cartographie process Marketing, Sales, CS", "Audit qualit\u00e9 de donn\u00e9es CRM", "Analyse stack et int\u00e9grations", "Score d\u2019adoption par \u00e9quipe", "Roadmap prioris\u00e9e avec ROI estim\u00e9"],
    color: "#D4A27F",
    duration: "2-3 sem",
    link: "/audit-revops",
  },
  {
    title: "RevOps part-time",
    desc: "Un consultant RevOps d\u00e9di\u00e9 int\u00e9gr\u00e9 \u00e0 votre \u00e9quipe 2 \u00e0 4 jours par semaine. Il g\u00e8re votre CRM, optimise vos workflows, construit vos dashboards, forme vos \u00e9quipes et pilote l\u2019am\u00e9lioration continue. Le mod\u00e8le le plus populaire chez nos clients parisiens.",
    items: ["Consultant d\u00e9di\u00e9 2-4j/semaine", "Administration CRM quotidienne", "Cr\u00e9ation et maintenance workflows", "Dashboards et reporting", "Formation continue des \u00e9quipes"],
    color: "#4B5EFC",
    duration: "Engagement 3-12 mois",
    link: "/revops-part-time",
  },
  {
    title: "D\u00e9ploiement HubSpot RevOps",
    desc: "Configuration compl\u00e8te de HubSpot en mode Revenue Operations. On ne configure pas juste un CRM, on d\u00e9ploie une infrastructure revenue compl\u00e8te : pipelines, lifecycle stages, lead scoring, attribution, reporting unifi\u00e9 Marketing + Sales + CS.",
    items: ["Setup CRM et pipelines personnalis\u00e9s", "Lifecycle stages et lead scoring", "Automatisation cross-\u00e9quipes", "Dashboards RevOps unifi\u00e9s", "Int\u00e9grations stack compl\u00e8te"],
    color: "#FF7A59",
    duration: "4-8 sem",
    link: "/agence-hubspot",
  },
  {
    title: "RevOps + IA (agents intelligents)",
    desc: "D\u00e9ploiement d\u2019agents IA connect\u00e9s \u00e0 votre CRM via Claude et le protocole MCP. Qualification automatique des leads, enrichissement de donn\u00e9es, r\u00e9daction de s\u00e9quences, scoring pr\u00e9dictif. L\u2019IA au service de vos Revenue Operations, pas l\u2019inverse.",
    items: ["Agents IA connect\u00e9s \u00e0 HubSpot (MCP)", "Qualification et scoring automatique", "Enrichissement de donn\u00e9es en continu", "G\u00e9n\u00e9ration de s\u00e9quences personnalis\u00e9es", "Reporting assist\u00e9 par IA"],
    color: "#6D00CC",
    duration: "3-6 sem",
    link: "/agents-ia",
  },
];

const ecosysteme = [
  { titre: "Startups", desc: "Station F, incubateurs, lev\u00e9es de fonds : Paris est le premier hub startup europ\u00e9en. Ces entreprises ont besoin de structurer leurs Revenue Operations d\u00e8s la s\u00e9rie A pour scaler proprement. On les accompagne depuis le premier pipeline jusqu\u2019\u00e0 la structuration \u00e9quipe.", color: "#FF7A59", link: "/revops-startup" },
  { titre: "Scale-ups", desc: "De 50 \u00e0 500 collaborateurs, les scale-ups parisiennes affrontent le m\u00eame d\u00e9fi : leurs process artisanaux ne tiennent plus. On restructure l\u2019ensemble de la cha\u00eene revenue, on automatise ce qui peut l\u2019\u00eatre et on d\u00e9ploie le reporting dont le board a besoin.", color: "#4B5EFC", link: "/revops-scaleup" },
  { titre: "PME et ETI", desc: "Les PME et ETI fran\u00e7aises sont le c\u0153ur de notre client\u00e8le. Elles ont des enjeux sp\u00e9cifiques : ERP \u00e0 connecter, \u00e9quipes terrain, cycles de vente longs, double validation. On configure des Revenue Operations adapt\u00e9es \u00e0 leur r\u00e9alit\u00e9, pas un mod\u00e8le US copi\u00e9-coll\u00e9.", color: "#22C55E", link: "/revops-pme" },
  { titre: "Grands groupes", desc: "TotalEnergies, Edenred, Alan : on accompagne aussi les grands groupes dans leur transformation RevOps. Multi-BU, multi-pays, gouvernance donn\u00e9es, int\u00e9grations ERP et BI. HubSpot France est \u00e0 Paris, on travaille en direct avec leurs \u00e9quipes.", color: "#6C5CE7", link: "/revops-grand-groupe" },
];

const clients = [
  { name: "TotalEnergies", domain: "totalenergies.com", result: "D\u00e9ploiement RevOps multi-BU sur HubSpot. Unification du reporting revenue, 60+ dashboards, gouvernance donn\u00e9es centralis\u00e9e.", metric: "60+ dashboards", link: "/cas-clients/totalenergies" },
  { name: "Alan", domain: "alan.com", result: "Structuration RevOps compl\u00e8te. Alignement Marketing-Sales-CS, lead scoring IA, pipeline automatis\u00e9.", metric: "Pipeline automatis\u00e9", link: "/cas-clients/alan" },
  { name: "Edenred", domain: "edenred.com", result: "Migration et d\u00e9ploiement HubSpot RevOps. Int\u00e9gration ERP, workflows cross-\u00e9quipes, formation 200+ utilisateurs.", metric: "200+ utilisateurs form\u00e9s", link: "/cas-clients/edenred" },
  { name: "Beedeez", domain: "beedeez.com", result: "RevOps from scratch pour scale-up SaaS. Pipeline, s\u00e9quences, reporting et int\u00e9grations en 4 semaines.", metric: "4 semaines", link: "/cas-clients/beedeez" },
  { name: "Kameleoon", domain: "kameleoon.com", result: "Optimisation RevOps et CRM. Refonte des process Sales, automatisation du handoff Marketing-Sales, dashboards unifi\u00e9s.", metric: "Handoff automatis\u00e9", link: "/cas-clients/kameleoon" },
];

const approche = [
  {
    mode: "Sur site \u00e0 Paris",
    desc: "On vient chez vous. Ateliers de cadrage dans vos locaux, immersion avec vos \u00e9quipes Sales, Marketing et CS, formation sur site, go-live accompagn\u00e9. C\u2019est le format id\u00e9al pour les projets de transformation RevOps qui n\u00e9cessitent un alignement fort entre \u00e9quipes.",
    avantages: [
      "Immersion dans vos process r\u00e9els",
      "Alignement direct avec toutes les \u00e9quipes",
      "Formation pratique dans vos locaux",
      "Go-live accompagn\u00e9 sur place",
      "Workshops collaboratifs plus efficaces",
    ],
    color: "#FF7A59",
  },
  {
    mode: "Remote dans toute la France",
    desc: "Pour les entreprises hors Paris ou les \u00e9quipes distribu\u00e9es, on travaille en remote avec la m\u00eame rigueur. Slack d\u00e9di\u00e9, sessions visio structur\u00e9es, documentation asynchrone, reporting hebdomadaire. 60% de nos missions sont hybrides : cadrage sur site, ex\u00e9cution en remote.",
    avantages: [
      "Slack d\u00e9di\u00e9 + r\u00e9ponse sous 2h",
      "Sessions visio structur\u00e9es",
      "Documentation asynchrone compl\u00e8te",
      "Reporting hebdomadaire",
      "D\u00e9placements ponctuels si n\u00e9cessaire",
    ],
    color: "#4B5EFC",
  },
];

const stackIA = [
  { outil: "Claude (Anthropic)", desc: "Notre IA principale pour la g\u00e9n\u00e9ration de contenu, l\u2019analyse de donn\u00e9es CRM, le scoring pr\u00e9dictif et la construction d\u2019agents intelligents. Claude comprend le contexte business et produit des outputs exploitables.", color: "#6D00CC" },
  { outil: "MCP (Model Context Protocol)", desc: "Le protocole qui permet \u00e0 Claude de se connecter directement \u00e0 HubSpot, Slack, Notion et votre stack. Pas de copier-coller, pas d\u2019export CSV : l\u2019IA acc\u00e8de \u00e0 vos donn\u00e9es en temps r\u00e9el et agit dessus.", color: "#4B5EFC" },
  { outil: "HubSpot comme socle", desc: "HubSpot reste la colonne vert\u00e9brale de vos Revenue Operations. L\u2019IA vient s\u2019y greffer pour augmenter les capacit\u00e9s : enrichissement automatique, scoring, workflows intelligents, reporting pr\u00e9dictif.", color: "#FF7A59" },
  { outil: "Agents IA sp\u00e9cialis\u00e9s", desc: "On d\u00e9ploie des agents IA sp\u00e9cialis\u00e9s par fonction : un agent de qualification, un agent d\u2019enrichissement, un agent de reporting, un agent de r\u00e9daction. Chacun fait une chose et la fait bien.", color: "#22C55E" },
];

const tarifs = [
  { service: "Audit RevOps (87 points)", prix: "\u00c0 partir de 3 000\u00a0\u20ac", desc: "Audit complet de votre cha\u00eene revenue : process, donn\u00e9es, outils, alignement \u00e9quipes. Livrable : rapport d\u00e9taill\u00e9 avec 87 points de contr\u00f4le + roadmap prioris\u00e9e.", color: "#D4A27F" },
  { service: "RevOps part-time", prix: "3 000 \u2013 8 000\u00a0\u20ac/mois", desc: "Consultant RevOps d\u00e9di\u00e9 2 \u00e0 4 jours par semaine. Administration CRM, workflows, dashboards, formation, am\u00e9lioration continue. Engagement 3 \u00e0 12 mois.", color: "#4B5EFC" },
  { service: "Migration CRM + RevOps", prix: "10 000 \u2013 30 000\u00a0\u20ac", desc: "Migration compl\u00e8te vers HubSpot avec restructuration RevOps. Inclut audit, mapping, migration, reconfiguration process et formation. Double-run inclus.", color: "#FF7A59" },
  { service: "Agents IA RevOps", prix: "5 000 \u2013 15 000\u00a0\u20ac", desc: "D\u00e9ploiement d\u2019agents IA connect\u00e9s \u00e0 votre CRM. Qualification, enrichissement, scoring, g\u00e9n\u00e9ration de contenu. Setup + formation + 3 mois de support.", color: "#6D00CC" },
];

const faqItems = [
  { q: "O\u00f9 trouver une agence RevOps \u00e0 Paris ?", a: "Ceres est une agence RevOps bas\u00e9e au 128 rue La Bo\u00e9tie, dans le 8e arrondissement de Paris. Nous accompagnons les entreprises fran\u00e7aises dans la structuration de leurs Revenue Operations depuis 9 ans. Vous pouvez nous rencontrer sur site ou d\u00e9marrer en remote." },
  { q: "Combien co\u00fbte un consultant RevOps \u00e0 Paris ?", a: "Un consultant RevOps \u00e0 Paris co\u00fbte entre 3 000 et 8 000 euros par mois en mode part-time (2 \u00e0 4 jours par semaine). Un audit RevOps d\u00e9marre \u00e0 3 000 euros. L\u2019appel de cadrage est gratuit et sans engagement." },
  { q: "Quelle est la diff\u00e9rence entre RevOps et Sales Ops ?", a: "Sales Ops se concentre uniquement sur l\u2019\u00e9quipe commerciale. RevOps aligne les trois \u00e9quipes revenue (Marketing, Sales, Customer Success) autour d\u2019un m\u00eame stack, des m\u00eames donn\u00e9es et des m\u00eames objectifs. C\u2019est une vision holistique de la cha\u00eene revenue." },
  { q: "Pourquoi choisir une agence RevOps locale \u00e0 Paris ?", a: "Une agence RevOps locale \u00e0 Paris vous offre la proximit\u00e9 g\u00e9ographique pour les ateliers sur site, la connaissance de l\u2019\u00e9cosyst\u00e8me tech fran\u00e7ais, la r\u00e9activit\u00e9 dans le m\u00eame fuseau horaire et la compr\u00e9hension des sp\u00e9cificit\u00e9s du march\u00e9 fran\u00e7ais (RGPD, facturation, cycles de vente)." },
  { q: "Combien de temps pour d\u00e9ployer le RevOps dans mon entreprise ?", a: "Un audit RevOps prend 2 \u00e0 3 semaines. Un d\u00e9ploiement complet (CRM, process, automatisations, reporting) prend 4 \u00e0 8 semaines. Un accompagnement part-time s\u2019\u00e9tale sur 3 \u00e0 12 mois avec des r\u00e9sultats visibles d\u00e8s le premier mois." },
  { q: "Travaillez-vous avec des entreprises hors de Paris ?", a: "Oui, nous accompagnons des clients dans toute la France et en Europe en remote. 60% de nos missions sont hybrides : cadrage sur site \u00e0 Paris puis ex\u00e9cution en remote. Nous nous d\u00e9pla\u00e7ons aussi ponctuellement en r\u00e9gion pour les go-live et formations." },
  { q: "Quel CRM utilisez-vous pour le RevOps ?", a: "Nous sommes partenaires certifi\u00e9s HubSpot. HubSpot est la plateforme id\u00e9ale pour le RevOps car elle unifie Marketing, Sales et Service sur une seule base de donn\u00e9es. On travaille aussi avec des clients sur Salesforce pour des audits et des optimisations." },
  { q: "Comment l\u2019IA am\u00e9liore le RevOps \u00e0 Paris ?", a: "L\u2019IA transform RevOps en automatisant la qualification des leads, l\u2019enrichissement de donn\u00e9es, le scoring pr\u00e9dictif et la g\u00e9n\u00e9ration de contenu personnalis\u00e9. Nous d\u00e9ployons des agents IA connect\u00e9s directement \u00e0 HubSpot via le protocole MCP pour des r\u00e9sultats concrets." },
  { q: "Proposez-vous des formations RevOps sur site \u00e0 Paris ?", a: "Oui, nous nous d\u00e9pla\u00e7ons dans vos locaux parisiens pour des formations adapt\u00e9es \u00e0 vos process. Formations par \u00e9quipe (Sales, Marketing, CS, Ops, Direction) avec exercices pratiques sur vos propres donn\u00e9es et votre CRM." },
  { q: "Comment se passe un projet RevOps avec votre agence \u00e0 Paris ?", a: "1) Appel de cadrage gratuit de 30 minutes. 2) Audit RevOps avec nos 87 points de contr\u00f4le. 3) Proposition d\u00e9taill\u00e9e avec p\u00e9rim\u00e8tre, planning et tarif. 4) Ateliers de cadrage process sur site. 5) D\u00e9ploiement it\u00e9ratif avec validation \u00e0 chaque \u00e9tape. 6) Formation et go-live. 7) Support post-lancement et am\u00e9lioration continue." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Ceres - Agence RevOps Paris",
      description: "Agence RevOps \u00e0 Paris, 8e arrondissement. Audit, accompagnement et d\u00e9ploiement Revenue Operations + IA. 250+ clients, partenaire HubSpot certifi\u00e9.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "128 rue La Bo\u00e9tie",
        addressLocality: "Paris",
        postalCode: "75008",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 48.8738, longitude: 2.3071 },
      url: "https://www.ceres-music.com/agence-revops-paris",
      telephone: "+33-1-00-00-00-00",
      areaServed: { "@type": "City", name: "Paris" },
      priceRange: "\u20ac\u20ac\u20ac",
    },
    {
      "@type": "Service",
      name: "Agence RevOps Paris",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Agence Revenue Operations \u00e0 Paris sp\u00e9cialis\u00e9e RevOps, HubSpot & IA. Audit, accompagnement part-time, d\u00e9ploiement CRM et agents IA.",
      serviceType: "Revenue Operations Consulting",
      areaServed: [
        { "@type": "City", name: "Paris" },
        { "@type": "Country", name: "France" },
      ],
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

/* ─── Component ─────────────────────────────────────────────────────────────── */

export default function AgenceRevOpsParisPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-[12px] text-[#999]">
            <li><Link href="/" className="hover:text-[#666] transition-colors">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/revops" className="hover:text-[#666] transition-colors">RevOps</Link></li>
            <li>/</li>
            <li className="text-[#111] font-medium">Agence RevOps Paris</li>
          </ol>
        </nav>

        {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Agence RevOps Paris</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Agence RevOps &agrave; Paris : votre partenaire revenue operations
          </h1>
          <p className="text-[17px] text-[#666] max-w-[620px] mx-auto leading-[1.7] mb-4">
            Audit, accompagnement part-time et d&eacute;ploiement RevOps + IA. Nous alignons vos &eacute;quipes Marketing, Sales et Customer Success sur une m&ecirc;me infrastructure revenue pour acc&eacute;l&eacute;rer votre croissance.
          </p>
          <p className="text-[14px] text-[#999] mb-6">
            Bas&eacute;s au 128 rue La Bo&eacute;tie, 75008 Paris. Sur site ou remote dans toute la France.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <p className="text-[28px] font-bold text-[#111]">250+</p>
              <p className="text-[12px] text-[#999]">Clients accompagn&eacute;s</p>
            </div>
            <div className="w-px h-8 bg-[#E8E8E8] hidden sm:block" />
            <div className="text-center">
              <p className="text-[28px] font-bold text-[#111]">87</p>
              <p className="text-[12px] text-[#999]">Points d&apos;audit RevOps</p>
            </div>
            <div className="w-px h-8 bg-[#E8E8E8] hidden sm:block" />
            <div className="text-center">
              <p className="text-[28px] font-bold text-[#111]">9 ans</p>
              <p className="text-[12px] text-[#999]">D&apos;exp&eacute;rience RevOps</p>
            </div>
            <div className="w-px h-8 bg-[#E8E8E8] hidden sm:block" />
            <div className="text-center">
              <p className="text-[28px] font-bold text-[#111]">Paris 8e</p>
              <p className="text-[12px] text-[#999]">128 rue La Bo&eacute;tie</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors"
          >
            <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />
            Prendre rendez-vous avec un consultant RevOps
          </Link>
        </section>
        <Connector />

        {/* ── 2. Pourquoi une agence RevOps a Paris ─────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Proximit&eacute;</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Pourquoi choisir une agence RevOps &agrave; Paris
            </h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">
              Le RevOps est un m&eacute;tier de terrain. Travailler avec une agence RevOps locale &agrave; Paris, c&apos;est gagner en compr&eacute;hension de vos enjeux, en r&eacute;activit&eacute; et en efficacit&eacute; op&eacute;rationnelle. Voici pourquoi nos clients parisiens nous choisissent.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyParis.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
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

        {/* ── 3. Ce qu'on fait (services detailles) ─────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Services</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Ce que fait notre agence RevOps &agrave; Paris
            </h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">
              De l&apos;audit initial au d&eacute;ploiement d&apos;agents IA, en passant par l&apos;accompagnement part-time et la configuration HubSpot. Chaque mission est calibr&eacute;e sur vos enjeux sp&eacute;cifiques.
            </p>
          </div>
          <div className="space-y-4">
            {services.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{item.title}</h3>
                  <span
                    className="text-[10px] font-medium px-2 py-0.5 rounded"
                    style={{ backgroundColor: item.color + "20", color: item.color }}
                  >
                    {item.duration}
                  </span>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{item.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {item.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
                        <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {i}
                    </li>
                  ))}
                </ul>
                <Link href={item.link} className="text-[12px] text-[#4B5EFC] font-medium hover:underline">
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 4. L'ecosysteme tech parisien ─────────────────────────────────── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">
                &Eacute;cosyst&egrave;me
              </span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">
                Paris, capital du RevOps en France
              </h2>
              <p className="text-[13px] text-white/40 max-w-[560px]">
                Paris concentre la majorit&eacute; des entreprises tech fran&ccedil;aises, les bureaux de HubSpot France, les meilleures &eacute;quipes Revenue Operations et un &eacute;cosyst&egrave;me d&apos;outils SaaS B2B parmi les plus dynamiques d&apos;Europe. C&apos;est ici que le RevOps se construit en France. Et c&apos;est ici que nous op&eacute;rons depuis 9 ans.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ecosysteme.map((item) => (
                <div key={item.titre} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{item.titre}</h3>
                  </div>
                  <p className="text-[12px] text-white/50 leading-[1.65] mb-3">{item.desc}</p>
                  <Link href={item.link} className="text-[11px] text-[#4B5EFC] font-medium hover:underline">
                    D&eacute;couvrir notre offre →
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-[14px] font-semibold text-white mb-3">Pourquoi Paris est le hub RevOps fran&ccedil;ais</h3>
              <ul className="space-y-2">
                {[
                  "HubSpot France a ses bureaux \u00e0 Paris : on travaille en direct avec leurs \u00e9quipes",
                  "Station F et les incubateurs parisiens produisent des dizaines de scale-ups chaque ann\u00e9e",
                  "Les plus grandes ETI et grands groupes fran\u00e7ais ont leur si\u00e8ge \u00e0 Paris ou en Ile-de-France",
                  "L\u2019\u00e9cosyst\u00e8me SaaS B2B parisien (Lemlist, Clay, Pennylane, Qonto, Spendesk) est le plus dense d\u2019Europe",
                  "Les meilleures \u00e9quipes RevOps fran\u00e7aises recrutent et op\u00e8rent depuis Paris",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[12px] text-white/50">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
                      <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 5. Nos clients parisiens et francais ──────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="text-center mb-8">
              <div className="mb-4"><Badge>Clients</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
                Nos clients parisiens et fran&ccedil;ais
              </h2>
              <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">
                Startups, scale-ups, PME, ETI et grands groupes. Nous accompagnons des entreprises de toutes tailles dans la structuration et l&apos;optimisation de leurs Revenue Operations.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              {clients.map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=64`}
                    alt={c.name}
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <span className="text-[13px] text-[#666] font-medium">{c.name}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {clients.slice(0, 3).map((c) => (
                <div key={c.name} className="rounded-xl border border-[#F2F2F2] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=64`}
                      alt={c.name}
                      width={16}
                      height={16}
                      className="rounded-sm"
                    />
                    <p className="text-[12px] font-semibold text-[#111]">{c.name}</p>
                  </div>
                  <p className="text-[12px] text-[#666] leading-[1.6] mb-2">{c.result}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#22C55E]">{c.metric}</span>
                    <Link href={c.link} className="text-[11px] text-[#4B5EFC] font-medium hover:underline">
                      Voir le cas →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {clients.slice(3).map((c) => (
                <div key={c.name} className="rounded-xl border border-[#F2F2F2] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=64`}
                      alt={c.name}
                      width={16}
                      height={16}
                      className="rounded-sm"
                    />
                    <p className="text-[12px] font-semibold text-[#111]">{c.name}</p>
                  </div>
                  <p className="text-[12px] text-[#666] leading-[1.6] mb-2">{c.result}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#22C55E]">{c.metric}</span>
                    <Link href={c.link} className="text-[11px] text-[#4B5EFC] font-medium hover:underline">
                      Voir le cas →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 6. Notre approche sur site vs remote ──────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>M&eacute;thode</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Sur site &agrave; Paris ou remote dans toute la France
            </h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">
              Notre agence RevOps s&apos;adapte &agrave; votre mode de fonctionnement. On peut venir chez vous &agrave; Paris pour les ateliers strat&eacute;giques, ou travailler en remote avec la m&ecirc;me rigueur. La plupart de nos missions combinent les deux.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {approche.map((item) => (
              <div key={item.mode} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{item.mode}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{item.desc}</p>
                <ul className="space-y-1.5">
                  {item.avantages.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
                        <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5 mt-4">
            <h3 className="text-[13px] font-semibold text-[#111] mb-2">Le format hybride, notre recommandation</h3>
            <p className="text-[12px] text-[#777] leading-[1.65]">
              60% de nos missions RevOps sont hybrides. On d&eacute;marre par 1 &agrave; 2 jours sur site &agrave; Paris pour le cadrage strat&eacute;gique et l&apos;immersion dans vos &eacute;quipes. Ensuite, l&apos;ex&eacute;cution se fait en remote avec des points hebdomadaires structur&eacute;s. On revient sur site pour les formations, les go-live et les revues trimestrielles. Ce format combine l&apos;efficacit&eacute; du pr&eacute;sentiel pour les moments cl&eacute;s avec la flexibilit&eacute; du remote pour l&apos;ex&eacute;cution quotidienne.
            </p>
          </div>
        </section>
        <Connector />

        {/* ── 7. RevOps + IA a Paris ────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">
                IA
              </span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">
                RevOps + IA : notre stack &agrave; Paris
              </h2>
              <p className="text-[13px] text-white/40 max-w-[560px]">
                L&apos;intelligence artificielle transforme les Revenue Operations. Nous d&eacute;ployons des agents IA connect&eacute;s directement &agrave; votre CRM pour automatiser la qualification, l&apos;enrichissement, le scoring et la g&eacute;n&eacute;ration de contenu. Ce n&apos;est pas un POC, c&apos;est de la production.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stackIA.map((item) => (
                <div key={item.outil} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{item.outil}</h3>
                  </div>
                  <p className="text-[12px] text-white/50 leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-[14px] font-semibold text-white mb-3">Ce que l&apos;IA change concr&egrave;tement dans vos Revenue Operations</h3>
              <ul className="space-y-2">
                {[
                  "Qualification automatique des leads entrants en moins de 30 secondes",
                  "Enrichissement continu des fiches contacts et entreprises sans intervention manuelle",
                  "Scoring pr\u00e9dictif bas\u00e9 sur les donn\u00e9es r\u00e9elles de votre pipeline, pas sur des r\u00e8gles statiques",
                  "G\u00e9n\u00e9ration de s\u00e9quences de prospection personnalis\u00e9es par segment et persona",
                  "Reporting automatis\u00e9 avec analyse et recommandations int\u00e9gr\u00e9es",
                  "R\u00e9duction de 60 \u00e0 80% du temps pass\u00e9 sur les t\u00e2ches administratives CRM",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[12px] text-white/50">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
                      <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <Link
                href="/agents-ia"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white text-[12px] font-medium hover:bg-white/15 transition-colors"
              >
                <span className="w-2 h-2 rounded-sm bg-[#6D00CC]" />
                D&eacute;couvrir nos agents IA RevOps →
              </Link>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 8. Tarifs indicatifs ──────────────────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Tarifs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Tarifs indicatifs de notre agence RevOps &agrave; Paris
            </h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">
              Tous nos projets RevOps sont au forfait, apr&egrave;s un appel de cadrage gratuit de 30 minutes. Voici les fourchettes de prix pour vous donner un ordre de grandeur. Chaque proposition est sur mesure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tarifs.map((t) => (
              <div key={t.service} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: t.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{t.service}</h3>
                </div>
                <p className="text-[20px] font-bold text-[#111] mb-2">{t.prix}</p>
                <p className="text-[12px] text-[#777] leading-[1.65]">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#999] text-center mt-4">
            * Tarifs HT indicatifs. Chaque projet fait l&apos;objet d&apos;une proposition d&eacute;taill&eacute;e apr&egrave;s cadrage. L&apos;appel de cadrage est gratuit et sans engagement.
          </p>
        </section>
        <Connector />

        {/* ── 9. FAQ ────────────────────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">
                Questions fr&eacute;quentes sur le RevOps &agrave; Paris
              </h2>
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

        {/* ── 10. CTA ───────────────────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Un projet RevOps &agrave; Paris ?
            </h2>
            <p className="text-[14px] text-[#999] mb-3 max-w-[520px] mx-auto">
              Audit RevOps, accompagnement part-time, d&eacute;ploiement HubSpot ou agents IA. Notre agence RevOps parisienne vous accompagne de l&apos;audit initial au d&eacute;ploiement complet. L&apos;appel de cadrage est gratuit et sans engagement.
            </p>
            <p className="text-[12px] text-[#999] mb-6">128 rue La Bo&eacute;tie, 75008 Paris</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors"
              >
                <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                R&eacute;server un appel de cadrage gratuit
              </Link>
              <Link
                href="/audit-revops"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E8E8E8] text-[#111] text-[13px] font-medium hover:bg-[#F5F5F5] transition-colors"
              >
                D&eacute;couvrir notre audit RevOps
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
