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
  { titre: "Startups post-Station F", desc: "Station F produit des dizaines de startups par an qui doivent structurer leur revenue engine des la Serie A. Product-led growth, premiers sales hires, premier pipeline : on les accompagne depuis le premier deal jusqu'a la structuration d'equipe RevOps complete. On connait les VCs parisiens (Partech, Elaia, Breega) et leurs attentes en matiere de reporting.", color: "#FF7A59", link: "/revops-startup" },
  { titre: "Scale-ups du Sentier et de South Pigalle", desc: "Contentsquare, Spendesk, PayFit, Swile : les quartiers tech parisiens concentrent des scale-ups en hypercroissance. Leurs process artisanaux ne tiennent plus au-dela de 50 personnes. On restructure la chaine revenue, on automatise le handoff marketing-sales et on deploie le reporting dont le board a besoin pour les prochaines levees.", color: "#4B5EFC", link: "/revops-scaleup" },
  { titre: "PME et ETI franciliennes", desc: "Les PME et ETI d'Ile-de-France ont des enjeux specifiques : ERP Sage ou Cegid a connecter, equipes terrain et siege a aligner, cycles de vente longs avec double validation Direction + Achats. On configure des Revenue Operations adaptees a la realite francaise, pas un modele US copie-colle.", color: "#22C55E", link: "/revops-pme" },
  { titre: "Grands groupes parisiens", desc: "TotalEnergies a La Defense, Edenred a Malakoff, Alan a Paris 10e : on accompagne les grands groupes dans leur transformation RevOps. Multi-BU, multi-pays, gouvernance donnees, integrations SAP et Power BI. On travaille en direct avec les equipes HubSpot France basees a Paris.", color: "#6C5CE7", link: "/revops-grand-groupe" },
];

const parisRevOpsLandscape = [
  { titre: "Le RevOps n'est plus optionnel a Paris", desc: "En 2024, 73% des scale-ups parisiennes ayant leve plus de 5M euros ont un poste RevOps ou un prestataire dedie. Les VCs parisiens (Partech, Eurazeo Growth, Bpifrance) exigent desormais un reporting revenue structure avant le Series B. Ne pas avoir de RevOps a Paris en 2025, c'est arriver en board meeting sans chiffres." },
  { titre: "L'ecosysteme d'outils SaaS est parisien", desc: "Lemlist (prospection), Clay (enrichissement), Pennylane (compta), Qonto (banque), Spendesk (depenses), La Growth Machine (outbound), Claap (call recording) : la moitie de votre stack est developpee a Paris. On connait ces outils personnellement, on travaille avec leurs equipes et on sait exactement comment les connecter a HubSpot." },
  { titre: "Les meetups RevOps se passent ici", desc: "RevOps Network Paris, les events HubSpot France, les afterworks SaaS du Sentier : la communaute RevOps francaise vit a Paris. Nos consultants y participent activement, ce qui nous permet de rester a la pointe des pratiques et de vous faire beneficier du retour d'experience de dizaines d'entreprises similaires a la votre." },
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
  { q: "Peut-on rencontrer un consultant RevOps a Paris ?", a: "Oui, c'est meme notre approche privilegiee. Nos consultants sont bases au 128 rue La Boetie (Paris 8e). On se deplace dans vos locaux pour les ateliers de cadrage, les immersions equipe et les formations. Le RevOps est un metier de terrain : il faut observer vos process en situation reelle pour les optimiser." },
  { q: "Combien coute un accompagnement RevOps a Paris ?", a: "Un audit RevOps (87 points de controle) demarre a 3 000 euros. Un consultant part-time (2 a 4 jours/semaine) coute entre 3 000 et 8 000 euros par mois. Un deploiement complet entre 10 000 et 30 000 euros. Le premier appel de cadrage est gratuit, venez nous voir rue La Boetie ou on se deplace chez vous." },
  { q: "Accompagnez-vous les startups post-Station F ?", a: "Oui, c'est un de nos segments cles. Les startups qui sortent d'incubateurs parisiens (Station F, The Family, Y Combinator Paris) doivent structurer leur revenue engine des la Serie A. On les aide a poser les fondations RevOps : premier CRM, premier pipeline, premiers dashboards pour le board et les VCs." },
  { q: "Travaillez-vous avec les scale-ups SaaS parisiennes ?", a: "C'est notre coeur de metier. On accompagne des scale-ups comme Beedeez, Kameleoon et d'autres. Leurs enjeux sont specifiques : passer de process artisanaux a une machine revenue structuree, deployer le reporting pour le board, automatiser le handoff marketing-sales a l'echelle." },
  { q: "Quelle est la difference entre RevOps et un admin CRM ?", a: "Un admin CRM gere l'outil. Un consultant RevOps aligne vos equipes Marketing, Sales et CS autour d'une meme infrastructure, de memes donnees et de memes objectifs. C'est la difference entre configurer des champs dans HubSpot et transformer votre chaine revenue. A Paris, la maturite RevOps est plus elevee et les entreprises comprennent cette distinction." },
  { q: "Connaissez-vous les outils SaaS de l'ecosysteme parisien ?", a: "On travaille quotidiennement avec Lemlist, Clay, Pennylane, Qonto, Spendesk, La Growth Machine, Claap, Modjo. La moitie de ces outils ont ete crees a Paris. On connait leurs equipes, leurs API et on sait exactement comment les connecter a HubSpot pour construire une stack RevOps complete." },
  { q: "Comment l'IA change le RevOps pour les entreprises parisiennes ?", a: "On deploie des agents IA (Claude + MCP) connectes directement a HubSpot. Qualification automatique des leads en 30 secondes, enrichissement continu des fiches, scoring predictif, generation de sequences personnalisees. Les scale-ups parisiennes qui adoptent l'IA RevOps reduisent de 60 a 80% le temps passe sur les taches admin CRM." },
  { q: "On a une equipe distribuee mais le siege est a Paris, ca marche ?", a: "C'est le scenario le plus frequent. 60% de nos missions sont hybrides : on demarre par 1-2 jours sur site a Paris pour le cadrage strategique et l'immersion. Ensuite, l'execution se fait en remote avec des points hebdomadaires. On revient sur site pour les formations, les go-live et les revues trimestrielles." },
  { q: "Quels resultats attendre d'un projet RevOps a Paris ?", a: "Sur nos 20 derniers projets parisiens : adoption CRM passee de 40% a 95%+, temps de reporting divise par 4, taux de conversion MQL-SQL ameliore de 25 a 40%, et une visibilite complete sur le pipeline pour le board. Les premiers quick wins sont visibles des la semaine 1." },
  { q: "Comment demarrer avec votre agence RevOps a Paris ?", a: "Reservez un appel de cadrage gratuit de 30 minutes ou passez nous voir au 128 rue La Boetie. On peut aussi venir dans vos locaux. Sous 48h, vous recevez un diagnostic initial avec nos recommandations et une proposition detaillee avec perimetre, planning et tarif." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Ceres - Consultants RevOps Paris 8e",
      description: "Consultants RevOps bases a Paris 8e. Ateliers sur site dans vos locaux. Expertise scale-ups parisiennes, Station F, ecosysteme SaaS. 250+ clients.",
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
      name: "Consultants RevOps Paris 8e",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Consultants Revenue Operations a Paris. Ateliers sur site, immersion dans vos equipes. Expertise scale-ups parisiennes, ecosystem SaaS B2B, agents IA.",
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
            Consultants RevOps &agrave; Paris : on vient dans vos locaux
          </h1>
          <p className="text-[17px] text-[#666] max-w-[620px] mx-auto leading-[1.7] mb-4">
            Nos consultants Revenue Operations sont bas&eacute;s &agrave; Paris 8e et se d&eacute;placent chez vous pour les ateliers strat&eacute;giques, les formations et les go-live. On conna&icirc;t l&apos;&eacute;cosyst&egrave;me tech parisien, de Station F aux scale-ups du Sentier.
          </p>
          <p className="text-[14px] text-[#999] mb-6">
            128 rue La Bo&eacute;tie, 75008 Paris. Ateliers sur site + ex&eacute;cution remote.
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

        {/* ── 4b. Le paysage RevOps parisien ───────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Paris</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Le paysage RevOps &agrave; Paris en 2025
            </h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">
              Paris est devenu l&apos;&eacute;picentre du RevOps en France. Les scale-ups parisiennes structurent leurs Revenue Operations plus t&ocirc;t et plus vite que partout ailleurs en Europe. Voici ce que nous observons sur le terrain.
            </p>
          </div>
          <div className="space-y-4">
            {parisRevOpsLandscape.map((item) => (
              <div key={item.titre} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <h3 className="text-[15px] font-semibold text-[#111] mb-2">{item.titre}</h3>
                <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
              </div>
            ))}
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
