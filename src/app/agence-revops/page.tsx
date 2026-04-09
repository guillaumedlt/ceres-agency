"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── DATA ─── */

const heroStats = [
  { value: "250+", label: "clients accompagn\u00e9s" },
  { value: "9 ans", label: "d\u2019exp\u00e9rience RevOps" },
  { value: "13", label: "cas clients publi\u00e9s" },
  { value: "120K", label: "contacts g\u00e9r\u00e9s dans nos CRM" },
];

const problems = [
  {
    title: "Silos entre marketing et sales",
    desc: "Le marketing g\u00e9n\u00e8re des leads que les commerciaux ne rappellent pas. Les MQL ne correspondent pas aux crit\u00e8res de qualification des sales. Chaque \u00e9quipe a ses propres m\u00e9triques, ses propres outils, sa propre d\u00e9finition du succ\u00e8s. R\u00e9sultat : 79% des leads marketing ne sont jamais convertis en opportunit\u00e9s. Le probl\u00e8me n\u2019est pas la g\u00e9n\u00e9ration de leads. C\u2019est l\u2019absence de process partag\u00e9 entre les \u00e9quipes.",
    stat: "79%",
    statLabel: "des leads non convertis",
    color: "#4B5EFC",
  },
  {
    title: "CRM sous-utilis\u00e9 ou mal configur\u00e9",
    desc: "Vous avez investi dans un CRM, mais personne ne le remplit correctement. Les commerciaux le voient comme une contrainte administrative, pas comme un outil de vente. Les pipelines ne refl\u00e8tent pas vos vrais process. Les propri\u00e9t\u00e9s sont dupliqu\u00e9es. Les workflows sont cass\u00e9s. Votre CRM est devenu un tableur glorifi\u00e9 au lieu d\u2019\u00eatre votre source de v\u00e9rit\u00e9.",
    stat: "40%",
    statLabel: "d\u2019adoption moyenne",
    color: "#FF7A59",
  },
  {
    title: "Reporting inexistant ou peu fiable",
    desc: "Chaque lundi matin, le CEO demande les chiffres. Le marketing envoie un export Google Analytics. Le sales manager copie-colle depuis le CRM. Le CS sort un tableau Excel. Les chiffres ne matchent jamais. Impossible de savoir combien co\u00fbte un client acquis, quelle est la vraie conversion par canal, ou quel est le forecast r\u00e9aliste du trimestre. Sans donn\u00e9e fiable, chaque d\u00e9cision strat\u00e9gique est un pari.",
    stat: "3h+",
    statLabel: "perdues chaque semaine en reporting manuel",
    color: "#6D00CC",
  },
  {
    title: "Aucun process formalis\u00e9",
    desc: "Le lead routing d\u00e9pend de qui est connect\u00e9 au CRM. Le handoff marketing-sales se fait par Slack ou par email. Le onboarding des nouveaux commerciaux dure 3 mois parce que rien n\u2019est document\u00e9. Les process vivent dans la t\u00eate de 2-3 personnes. Quand ils partent, tout s\u2019effondre. Ce manque de structuration co\u00fbte en moyenne 20% de revenus perdus.",
    stat: "20%",
    statLabel: "de revenus perdus",
    color: "#22C55E",
  },
  {
    title: "Stack technologique non connect\u00e9e",
    desc: "HubSpot pour le marketing. Pipedrive pour le sales. Intercom pour le CS. Notion pour la doc. Slack pour la communication. Aucun de ces outils ne se parle. Vos \u00e9quipes font du copier-coller entre 5 onglets. Les donn\u00e9es sont fragment\u00e9es, les automatisations impossibles, et personne n\u2019a la vue d\u2019ensemble. Une stack non connect\u00e9e cr\u00e9e plus de friction qu\u2019elle n\u2019en r\u00e9sout.",
    stat: "5+",
    statLabel: "outils non connect\u00e9s en moyenne",
    color: "#6C5CE7",
  },
];

const services = [
  {
    title: "Audit RevOps complet",
    desc: "On analyse votre machine revenue de A \u00e0 Z pour identifier les points de friction.",
    color: "#4B5EFC",
    link: "/audit-revops",
    linkLabel: "D\u00e9couvrir l\u2019audit RevOps",
    process: [
      { phase: "Jour 1", detail: "Kickoff avec vos responsables marketing, sales et CS. On cartographie vos process actuels, vos outils, vos m\u00e9triques et vos pain points." },
      { phase: "Semaine 1", detail: "Audit technique complet de votre CRM : propri\u00e9t\u00e9s, pipelines, workflows, int\u00e9grations, qualit\u00e9 des donn\u00e9es. Analyse de votre funnel et de vos taux de conversion \u00e0 chaque \u00e9tape." },
      { phase: "Mois 1", detail: "Livraison du diagnostic complet : rapport de 40+ pages avec quick wins, roadmap prioris\u00e9e et recommandations actionables. Score de maturit\u00e9 RevOps sur 100." },
    ],
  },
  {
    title: "RevOps Part-Time",
    desc: "Un expert RevOps senior int\u00e9gr\u00e9 \u00e0 votre \u00e9quipe, sans le co\u00fbt d\u2019un CDI.",
    color: "#FF7A59",
    link: "/revops-part-time",
    linkLabel: "D\u00e9couvrir le RevOps Part-Time",
    process: [
      { phase: "Jour 1", detail: "Onboarding dans vos outils : CRM, Slack, Notion, outils de visio. On rejoint vos rituels d\u2019\u00e9quipe comme un collaborateur interne." },
      { phase: "Semaine 1", detail: "Premiers quick wins : correction des workflows cass\u00e9s, nettoyage des donn\u00e9es critiques, cr\u00e9ation des premiers dashboards manquants." },
      { phase: "Mois 1", detail: "Roadmap trimestrielle d\u00e9finie, premiers process formalis\u00e9s, reporting automatis\u00e9 en place. Votre \u00e9quipe sent d\u00e9j\u00e0 la diff\u00e9rence." },
    ],
  },
  {
    title: "Int\u00e9gration HubSpot",
    desc: "Configuration, migration ou optimisation de votre HubSpot pour en faire un vrai outil RevOps.",
    color: "#6D00CC",
    link: "/agence-hubspot",
    linkLabel: "D\u00e9couvrir notre expertise HubSpot",
    process: [
      { phase: "Jour 1", detail: "Cadrage fonctionnel : vos pipelines, votre lifecycle, vos \u00e9quipes, vos int\u00e9grations. On d\u00e9finit l\u2019architecture cible ensemble." },
      { phase: "Semaine 1", detail: "Configuration des fondamentaux : pipelines, propri\u00e9t\u00e9s, vues, permissions. Import des donn\u00e9es existantes. Premiers workflows automatis\u00e9s." },
      { phase: "Mois 1", detail: "HubSpot op\u00e9rationnel avec dashboards, automatisations, int\u00e9grations connect\u00e9es, \u00e9quipes form\u00e9es. Adoption mesur\u00e9e et suivie." },
    ],
  },
  {
    title: "Agents IA & automatisation",
    desc: "On d\u00e9ploie des agents IA connect\u00e9s \u00e0 votre CRM pour automatiser les t\u00e2ches r\u00e9p\u00e9titives.",
    color: "#22C55E",
    link: "/agents-ia",
    linkLabel: "D\u00e9couvrir nos agents IA",
    process: [
      { phase: "Jour 1", detail: "Identification des t\u00e2ches manuelles \u00e0 forte valeur d\u2019automatisation : enrichissement, qualification, r\u00e9sum\u00e9s de calls, scoring." },
      { phase: "Semaine 1", detail: "D\u00e9ploiement du premier agent IA en production. Connexion au CRM via MCP (Model Context Protocol). Tests et calibrage." },
      { phase: "Mois 1", detail: "3 \u00e0 5 agents en production. M\u00e9triques d\u2019impact mesur\u00e9es : temps gagn\u00e9, pr\u00e9cision du scoring, taux de qualification automatis\u00e9e." },
    ],
  },
];

const methodologyPhases = [
  {
    phase: "Phase 1 : Diagnostic",
    duration: "2-3 semaines",
    color: "#4B5EFC",
    desc: "On ne touche \u00e0 rien avant de tout comprendre. Pas de recommandation g\u00e9n\u00e9rique : on creuse dans votre r\u00e9alit\u00e9 op\u00e9rationnelle.",
    steps: [
      "Interviews structur\u00e9es avec chaque \u00e9quipe (marketing, sales, CS, direction)",
      "Audit technique du CRM : propri\u00e9t\u00e9s, pipelines, workflows, qualit\u00e9 des donn\u00e9es",
      "Cartographie du funnel et analyse des taux de conversion par \u00e9tape",
      "Benchmark de votre stack vs. best practices du march\u00e9",
      "Identification des 10 quick wins \u00e0 impact imm\u00e9diat",
    ],
    deliverables: "Rapport de diagnostic (40+ pages), score de maturit\u00e9 RevOps, roadmap prioris\u00e9e",
    kpi: "Score de maturit\u00e9 RevOps mesur\u00e9, baseline des m\u00e9triques cl\u00e9s \u00e9tablie",
  },
  {
    phase: "Phase 2 : Build",
    duration: "4-8 semaines",
    color: "#FF7A59",
    desc: "On construit votre revenue engine brique par brique. Chaque sprint de 2 semaines livre un livrable concret et mesurable.",
    steps: [
      "Configuration ou refonte du CRM selon l\u2019architecture cible",
      "Mise en place du lead scoring et du lead routing automatis\u00e9s",
      "Cr\u00e9ation des SLA marketing-sales avec alertes automatiques",
      "D\u00e9ploiement des dashboards : pipeline, forecasting, performance par rep",
      "Int\u00e9gration de la stack : CRM + enrichissement + prospection + IA",
      "Formation de chaque \u00e9quipe sur ses process sp\u00e9cifiques",
    ],
    deliverables: "CRM reconfigur\u00e9, automatisations en production, dashboards live, \u00e9quipes form\u00e9es",
    kpi: "Adoption CRM > 90%, temps de r\u00e9ponse lead < 5 min, forecast accuracy > 80%",
  },
  {
    phase: "Phase 3 : Scale",
    duration: "Continu",
    color: "#22C55E",
    desc: "Le RevOps n\u2019est pas un projet one-shot. On reste avec vous pour optimiser, it\u00e9rer et anticiper les probl\u00e8mes avant qu\u2019ils apparaissent.",
    steps: [
      "Revue mensuelle des KPIs et ajustement des process",
      "D\u00e9ploiement progressif d\u2019agents IA pour automatiser les t\u00e2ches r\u00e9p\u00e9titives",
      "Optimisation continue du scoring et du routing selon les donn\u00e9es r\u00e9elles",
      "Accompagnement des \u00e9volutions : nouveaux produits, nouveaux march\u00e9s, nouvelles \u00e9quipes",
      "Veille technologique et int\u00e9gration des nouveaux outils pertinents",
    ],
    deliverables: "Rapports mensuels d\u2019impact, recommandations d\u2019\u00e9volution, support ops continu",
    kpi: "Am\u00e9lioration continue des taux de conversion, r\u00e9duction du CAC, augmentation du LTV",
  },
];

const iaFeatures = [
  {
    title: "Enrichissement automatique des contacts",
    desc: "Chaque lead qui entre dans votre CRM est automatiquement enrichi : firmographie, technographie, donn\u00e9es LinkedIn, signaux d\u2019intention. On connecte Clay et Claude via MCP pour que vos commerciaux re\u00e7oivent des fiches compl\u00e8tes, pas des lignes vides. Fini le temps o\u00f9 un SDR passait 15 minutes \u00e0 googler une entreprise avant d\u2019appeler.",
    color: "#4B5EFC",
  },
  {
    title: "Scoring pr\u00e9dictif bas\u00e9 sur vos donn\u00e9es",
    desc: "On ne fait pas du lead scoring \u00e0 base de r\u00e8gles arbitraires (50 points si le lead a ouvert un email). On construit des mod\u00e8les de scoring bas\u00e9s sur vos donn\u00e9es de conversion r\u00e9elles. L\u2019IA analyse les caract\u00e9ristiques de vos clients gagn\u00e9s et identifie les patterns pr\u00e9dictifs. Vos commerciaux priorisent les bons comptes, pas les plus bruyants.",
    color: "#FF7A59",
  },
  {
    title: "R\u00e9sum\u00e9s automatiques de calls et meetings",
    desc: "Chaque appel commercial et chaque meeting est automatiquement transcrit, r\u00e9sum\u00e9 et inject\u00e9 dans le CRM. Les prochaines \u00e9tapes sont extraites, les objections identifi\u00e9es, le sentiment du prospect analys\u00e9. Plus besoin de remplir le CRM manuellement apr\u00e8s chaque appel. Le manager a une visibilit\u00e9 en temps r\u00e9el sur la qualit\u00e9 des conversations.",
    color: "#6D00CC",
  },
  {
    title: "Agents autonomes connect\u00e9s \u00e0 votre CRM",
    desc: "On d\u00e9ploie des agents IA qui ex\u00e9cutent des t\u00e2ches complexes en autonomie : qualification de leads entrants, relances personnalis\u00e9es, mise \u00e0 jour des propri\u00e9t\u00e9s CRM, g\u00e9n\u00e9ration de propositions commerciales. Ces agents sont connect\u00e9s directement \u00e0 votre HubSpot via le Model Context Protocol (MCP) et fonctionnent 24/7 sans intervention humaine.",
    color: "#22C55E",
  },
];

const clientResults = [
  {
    name: "Alan",
    sector: "Assurtech",
    mission: "Restructuration compl\u00e8te de l\u2019architecture RevOps multi-pays. D\u00e9finition des lifecycle stages, refonte du lead routing pour 5 march\u00e9s, d\u00e9ploiement d\u2019agents IA pour le scoring pr\u00e9dictif.",
    result: "Temps de r\u00e9ponse lead pass\u00e9 de 4h \u00e0 12 min. Forecast accuracy \u00e0 87%.",
    color: "#4B5EFC",
    link: "/cas-clients/alan",
  },
  {
    name: "Dougs",
    sector: "Fintech / Comptabilit\u00e9",
    mission: "Automatisation du lead routing et mise en place du forecasting pr\u00e9dictif. Int\u00e9gration de Clay pour l\u2019enrichissement automatique de 50K+ contacts.",
    result: "30% de leads qualifi\u00e9s en plus avec le m\u00eame volume de trafic.",
    color: "#FF7A59",
    link: "/cas-clients/dougs",
  },
  {
    name: "TotalEnergies",
    sector: "Energie",
    mission: "D\u00e9ploiement HubSpot pour une division B2B. Migration depuis un CRM legacy, configuration sur-mesure des pipelines, formation de 40+ utilisateurs.",
    result: "CRM op\u00e9rationnel en 6 semaines. Adoption \u00e0 94% d\u00e8s le mois 2.",
    color: "#6D00CC",
    link: "/cas-clients/totalenergies",
  },
  {
    name: "Ringover",
    sector: "SaaS / T\u00e9l\u00e9coms",
    mission: "Migration CRM et unification de 3 pipelines en une architecture scalable. D\u00e9ploiement du reporting cross-\u00e9quipes et des SLA marketing-sales.",
    result: "Pipeline visibility pass\u00e9e de 30% \u00e0 95%. Cycle de vente r\u00e9duit de 22%.",
    color: "#22C55E",
    link: "/cas-clients/ringover",
  },
  {
    name: "HiPay",
    sector: "Fintech / Paiement",
    mission: "D\u00e9ploiement RevOps Part-Time senior. Refonte compl\u00e8te du reporting, mise en place du lead scoring et optimisation du handoff marketing-sales.",
    result: "CAC r\u00e9duit de 35%. Reporting automatis\u00e9, z\u00e9ro Excel.",
    color: "#6C5CE7",
    link: "/cas-clients/hipay",
  },
  {
    name: "Iroko",
    sector: "Immobilier / SCPI",
    mission: "Configuration HubSpot from scratch pour un mod\u00e8le B2C \u00e0 volume. Workflows de nurturing, segmentation comportementale, attribution multi-touch.",
    result: "100% du funnel automatis\u00e9. 120K contacts g\u00e9r\u00e9s sans ajout d\u2019effectif.",
    color: "#D4A27F",
    link: "/cas-clients/iroko",
  },
];

const segments = [
  {
    title: "Startups (5-50 personnes)",
    desc: "Vous structurez votre premier process commercial. Il faut aller vite, avec un budget limit\u00e9. On met en place les fondations : CRM propre, pipeline clair, premier reporting, lead scoring basique. L\u2019objectif n\u2019est pas la perfection, c\u2019est d\u2019avoir un syst\u00e8me qui grandit avec vous sans cr\u00e9er de dette technique.",
    color: "#4B5EFC",
    link: "/revops-startup",
    linkLabel: "RevOps pour startups",
  },
  {
    title: "PME (50-200 personnes)",
    desc: "Votre \u00e9quipe commerciale grandit, les process informels ne tiennent plus. On formalise votre machine revenue : SLA marketing-sales, lead routing automatis\u00e9, dashboards par \u00e9quipe, onboarding structur\u00e9 des nouveaux commerciaux. C\u2019est le moment o\u00f9 investir dans le RevOps g\u00e9n\u00e8re le meilleur ROI.",
    color: "#FF7A59",
    link: "/revops-pme",
    linkLabel: "RevOps pour PME",
  },
  {
    title: "Scale-ups (200-1000 personnes)",
    desc: "Vous op\u00e9rez sur plusieurs march\u00e9s, avec plusieurs \u00e9quipes, et votre stack s\u2019est complexifi\u00e9e. On restructure votre architecture RevOps pour supporter la croissance sans multiplier vos effectifs ops. Migration CRM, gouvernance des donn\u00e9es, forecasting pr\u00e9dictif, agents IA pour automatiser \u00e0 l\u2019\u00e9chelle.",
    color: "#6D00CC",
    link: "/revops-scaleup",
    linkLabel: "RevOps pour scale-ups",
  },
  {
    title: "Grands groupes (1000+ personnes)",
    desc: "La complexit\u00e9 est votre quotidien : multi-BU, multi-pays, multi-CRM. On intervient pour unifier votre revenue engine, connecter les syst\u00e8mes, cr\u00e9er la gouvernance des donn\u00e9es et donner \u00e0 la direction la visibilit\u00e9 qu\u2019elle attend. On a travaill\u00e9 avec TotalEnergies, Edenred, Kameleoon.",
    color: "#22C55E",
    link: "/revops-grand-groupe",
    linkLabel: "RevOps pour grands groupes",
  },
];

const comparisonRows = [
  { criteria: "Co\u00fbt annuel", interne: "70-90K EUR brut + charges (120-150K EUR co\u00fbt total)", agence: "2 000-6 000 EUR/mois (24-72K EUR/an)" },
  { criteria: "Expertise", interne: "Une personne, un seul point de vue, apprentissage en poste", agence: "Une \u00e9quipe pluridisciplinaire, 250+ missions r\u00e9alis\u00e9es" },
  { criteria: "Flexibilit\u00e9", interne: "CDI rigide, difficult\u00e9 \u00e0 ajuster la charge", agence: "Volume ajustable chaque mois selon vos besoins" },
  { criteria: "Time-to-value", interne: "3-6 mois de recrutement + 3 mois d\u2019onboarding", agence: "Op\u00e9rationnel en 1 semaine, premiers r\u00e9sultats en 2 semaines" },
  { criteria: "Risque", interne: "Si la personne part, tout repart \u00e0 z\u00e9ro", agence: "Process document\u00e9s, connaissances transf\u00e9r\u00e9es, pas de d\u00e9pendance individuelle" },
  { criteria: "Stack & outils", interne: "Exp\u00e9rience limit\u00e9e \u00e0 1-2 CRM", agence: "Ma\u00eetrise de HubSpot, Salesforce, Pipedrive, Clay, Make, Claude, et 20+ outils" },
  { criteria: "IA & innovation", interne: "Veille limit\u00e9e, peu de temps pour exp\u00e9rimenter", agence: "D\u00e9ploiement d\u2019agents IA, MCP, scoring pr\u00e9dictif d\u00e8s le mois 1" },
];

const stackTools = [
  { name: "HubSpot", role: "CRM et marketing automation", detail: "Notre CRM de r\u00e9f\u00e9rence. On le conna\u00eet en profondeur : Sales Hub, Marketing Hub, Service Hub, Operations Hub. 100+ instances d\u00e9ploy\u00e9es. C\u2019est le seul CRM qui permet d\u2019aligner marketing, sales et CS nativement sans d\u00e9veloppement custom.", color: "#FF7A59" },
  { name: "Clay", role: "Enrichissement et workflows data", detail: "L\u2019outil de data enrichment le plus puissant du march\u00e9. On l\u2019utilise pour enrichir chaque lead entrant en temps r\u00e9el : firmographie, technographie, intent data, donn\u00e9es LinkedIn. Connect\u00e9 \u00e0 HubSpot via des workflows automatis\u00e9s.", color: "#4B5EFC" },
  { name: "Claude (Anthropic)", role: "IA g\u00e9n\u00e9rative et agents", detail: "Le mod\u00e8le de langage le plus fiable pour les cas d\u2019usage business. On l\u2019utilise via le Model Context Protocol (MCP) pour cr\u00e9er des agents autonomes connect\u00e9s directement \u00e0 votre CRM. Scoring, r\u00e9sum\u00e9s de calls, qualification automatique.", color: "#D4A27F" },
  { name: "Make (ex-Integromat)", role: "Orchestration et automatisation", detail: "Le chef d\u2019orchestre de votre stack. On cr\u00e9e des sc\u00e9narios qui connectent tous vos outils sans code : CRM, enrichissement, prospection, notifications. Plus flexible et moins cher que Zapier pour les workflows complexes.", color: "#6D00CC" },
  { name: "Lemlist", role: "Prospection outbound", detail: "L\u2019outil fran\u00e7ais de r\u00e9f\u00e9rence pour la prospection multi-canal. Emails personnalis\u00e9s \u00e0 l\u2019\u00e9chelle, s\u00e9quences LinkedIn, int\u00e9gration CRM native. On configure les s\u00e9quences, les templates et les variables de personnalisation.", color: "#6C5CE7" },
  { name: "Claap", role: "Coaching commercial vid\u00e9o", detail: "Enregistrement et analyse des calls de vente. Transcription automatique, identification des objections, coaching par l\u2019IA. On l\u2019int\u00e8gre au CRM pour que chaque r\u00e9sum\u00e9 de call soit automatiquement inject\u00e9 dans la fiche contact.", color: "#22C55E" },
  { name: "Notion", role: "Documentation et playbooks", detail: "Toute notre documentation RevOps est dans Notion : playbooks de vente, process de qualification, guides d\u2019onboarding, templates de SLA. On livre \u00e0 nos clients un workspace Notion cl\u00e9 en main avec tous leurs process document\u00e9s.", color: "#111" },
  { name: "Slack", role: "Communication et alertes", detail: "Le hub de communication op\u00e9rationnelle. On configure des alertes automatiques depuis le CRM : nouveau deal au-dessus de X euros, SLA d\u00e9pass\u00e9, lead non rappel\u00e9 depuis 24h. Chaque alerte d\u00e9clenche une action, pas juste une notification.", color: "#E01E5A" },
];

const faqItems = [
  {
    q: "C\u2019est quoi une agence RevOps exactement ?",
    a: "Une agence RevOps (Revenue Operations) est une \u00e9quipe externe sp\u00e9cialis\u00e9e dans l\u2019alignement des \u00e9quipes marketing, sales et customer success autour d\u2019un objectif commun : g\u00e9n\u00e9rer du revenu de fa\u00e7on pr\u00e9visible et scalable. Contrairement \u00e0 un cabinet de conseil qui produit des recommandations, une agence RevOps ex\u00e9cute concr\u00e8tement : elle configure votre CRM, automatise vos process, cr\u00e9e vos dashboards et forme vos \u00e9quipes. Chez Ceres, on va encore plus loin en int\u00e9grant l\u2019intelligence artificielle dans chaque brique de votre revenue engine.",
  },
  {
    q: "Combien co\u00fbte une agence RevOps ?",
    a: "Le co\u00fbt d\u2019une agence RevOps varie selon le format d\u2019intervention. Un audit RevOps complet co\u00fbte entre 3 000 et 8 000 EUR. Un accompagnement RevOps Part-Time (le format le plus courant) se situe entre 2 000 et 6 000 EUR par mois. Un projet de transformation compl\u00e8te (refonte CRM, automatisations, IA) co\u00fbte entre 15 000 et 50 000 EUR au forfait. C\u2019est 2 \u00e0 5 fois moins cher qu\u2019un recrutement interne quand on int\u00e8gre les charges, le recrutement et le temps d\u2019onboarding.",
  },
  {
    q: "Quand faire appel \u00e0 une agence RevOps ?",
    a: "Cinq signaux indiquent que vous avez besoin d\u2019une agence RevOps : vos \u00e9quipes marketing et sales ne partagent pas la m\u00eame d\u00e9finition d\u2019un lead qualifi\u00e9, votre CRM n\u2019est pas \u00e0 jour ou personne ne le remplit, vous n\u2019avez pas de reporting fiable ou c\u2019est fait manuellement dans Excel, vos outils ne sont pas connect\u00e9s entre eux, ou votre co\u00fbt d\u2019acquisition client augmente sans que vous compreniez pourquoi. En g\u00e9n\u00e9ral, les entreprises de 10 \u00e0 500 personnes tirent le plus de valeur d\u2019un accompagnement RevOps externe.",
  },
  {
    q: "Quelle diff\u00e9rence entre RevOps et Sales Ops ?",
    a: "Le Sales Ops se concentre uniquement sur l\u2019efficacit\u00e9 de l\u2019\u00e9quipe commerciale : CRM, pipeline, forecasting, quotas. Le RevOps (Revenue Operations) a une vision plus large : il aligne marketing, sales ET customer success autour du revenu global. Le RevOps g\u00e8re le funnel de bout en bout, de l\u2019acquisition au renouvellement. Il pilote la stack technologique transverse, les donn\u00e9es partag\u00e9es et les process inter-\u00e9quipes. Le Sales Ops est une composante du RevOps, mais le RevOps va beaucoup plus loin en cassant les silos organisationnels.",
  },
  {
    q: "Quelle diff\u00e9rence entre une agence RevOps et un cabinet de conseil ?",
    a: "Un cabinet de conseil produit des slides, des recommandations et des frameworks. Une agence RevOps les ex\u00e9cute. Concr\u00e8tement, chez Ceres, on est dans votre CRM, dans votre Slack, dans vos outils. On configure les pipelines, on cr\u00e9e les workflows, on d\u00e9ploie les automatisations, on forme vos \u00e9quipes. On ne livre pas un PowerPoint de 80 pages et on ne s\u2019en va pas. Chaque semaine, on livre du concret : un dashboard, un workflow, un agent IA, un process document\u00e9.",
  },
  {
    q: "Vous travaillez uniquement avec HubSpot ?",
    a: "HubSpot est notre CRM de r\u00e9f\u00e9rence et celui sur lequel nous avons le plus d\u2019expertise (100+ instances d\u00e9ploy\u00e9es). Mais nous accompagnons aussi les entreprises sur Salesforce, Pipedrive et d\u2019autres CRM. Nous g\u00e9rons \u00e9galement les migrations CRM, notamment de Salesforce vers HubSpot. Notre approche RevOps est CRM-agnostique : les process, les donn\u00e9es et l\u2019alignement des \u00e9quipes sont les m\u00eames quel que soit l\u2019outil.",
  },
  {
    q: "Combien de temps dure un projet RevOps ?",
    a: "Un audit prend 2 \u00e0 3 semaines. Un projet de transformation compl\u00e8te (refonte CRM, automatisations, int\u00e9grations, formation) prend 2 \u00e0 4 mois. Un accompagnement RevOps Part-Time est continu, avec un engagement minimum de 3 mois. Les premiers quick wins sont visibles d\u00e8s la semaine 2 : dashboards cr\u00e9\u00e9s, workflows corrig\u00e9s, donn\u00e9es nettoy\u00e9es. Les r\u00e9sultats structurels (am\u00e9lioration des taux de conversion, r\u00e9duction du CAC) se mesurent \u00e0 partir du mois 3.",
  },
  {
    q: "Comment mesurez-vous le ROI du RevOps ?",
    a: "On mesure le ROI du RevOps sur des m\u00e9triques concr\u00e8tes, pas des vanity metrics. Les KPIs principaux : taux de conversion MQL vers opportunit\u00e9, taux de conversion opportunit\u00e9 vers client, co\u00fbt d\u2019acquisition client (CAC), temps de r\u00e9ponse aux leads, adoption du CRM, forecast accuracy et temps \u00e9conomis\u00e9 par les \u00e9quipes gr\u00e2ce aux automatisations. En moyenne, nos clients voient un ROI positif d\u00e8s le mois 3 et un ROI de 5x \u00e0 10x sur 12 mois.",
  },
  {
    q: "Est-ce que le RevOps concerne aussi le customer success ?",
    a: "Absolument. Le RevOps couvre l\u2019int\u00e9gralit\u00e9 du cycle de revenu, y compris la r\u00e9tention et l\u2019expansion. On met en place le suivi du NPS, les alertes de churn, les workflows d\u2019onboarding client, les m\u00e9triques de sant\u00e9 client et les process d\u2019upsell/cross-sell. Un client qui renouvelle co\u00fbte 5 \u00e0 7 fois moins cher \u00e0 g\u00e9n\u00e9rer qu\u2019un client neuf. Le RevOps optimise aussi cette partie du funnel.",
  },
  {
    q: "Vous intervenez \u00e0 distance ou sur site ?",
    a: "La grande majorit\u00e9 de nos missions se font \u00e0 distance, avec des outils collaboratifs (Slack, Notion, Claap, visio). C\u2019est plus efficace et moins co\u00fbteux pour nos clients. On est disponible dans votre Slack comme un collaborateur interne. Pour les kickoffs et les formations, on peut se d\u00e9placer en France si c\u2019est pertinent. Notre si\u00e8ge est \u00e0 Paris mais nous accompagnons des clients dans toute la France et en Europe.",
  },
];

const testimonials = [
  {
    quote: "Ceres a compl\u00e8tement transform\u00e9 notre machine revenue. En 3 mois, on est pass\u00e9 d\u2019un CRM que personne ne remplissait \u00e0 un syst\u00e8me o\u00f9 chaque action est trac\u00e9e et automatis\u00e9e. Le plus impressionnant, c\u2019est la vitesse d\u2019ex\u00e9cution.",
    name: "Directeur Commercial",
    company: "Scale-up SaaS B2B, 150 personnes",
    color: "#4B5EFC",
  },
  {
    quote: "On cherchait un consultant HubSpot et on a trouv\u00e9 une \u00e9quipe RevOps compl\u00e8te. Ils ont restructur\u00e9 nos pipelines, automatis\u00e9 le lead routing et d\u00e9ploy\u00e9 des agents IA qui font gagner 2h par jour \u00e0 chaque commercial. Le ROI est clair d\u00e8s le premier mois.",
    name: "VP Sales",
    company: "Fintech, 80 personnes",
    color: "#FF7A59",
  },
  {
    quote: "La diff\u00e9rence avec les autres agences qu\u2019on a test\u00e9es, c\u2019est qu\u2019ils ex\u00e9cutent vraiment. Pas de slides, pas de th\u00e9orie. D\u00e8s la semaine 1, on avait des dashboards fonctionnels et des workflows en production. En 6 mois, notre CAC a baiss\u00e9 de 35%.",
    name: "COO",
    company: "PME tech, 60 personnes",
    color: "#22C55E",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Ceres - Agence RevOps",
      description: "Ceres est l\u2019agence RevOps de r\u00e9f\u00e9rence en France. Nous alignons marketing, sales et customer success pour cr\u00e9er un revenue engine pr\u00e9visible et scalable. 250+ clients accompagn\u00e9s, 9 ans d\u2019exp\u00e9rience.",
      url: "https://www.ceres.agency/agence-revops",
      serviceType: "Revenue Operations",
      areaServed: { "@type": "Country", name: "France" },
      provider: {
        "@type": "Organization",
        name: "Ceres",
        url: "https://www.ceres.agency",
        foundingDate: "2017",
        numberOfEmployees: { "@type": "QuantitativeValue", value: "10+" },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services RevOps",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit RevOps", description: "Diagnostic complet de votre machine revenue" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "RevOps Part-Time", description: "Un expert RevOps senior int\u00e9gr\u00e9 \u00e0 votre \u00e9quipe" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Int\u00e9gration HubSpot", description: "Configuration, migration et optimisation HubSpot" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agents IA", description: "D\u00e9ploiement d\u2019agents IA connect\u00e9s au CRM" } },
        ],
      },
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

/* ─── COMPONENT ─── */

export default function AgenceRevOpsPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── 1. HERO ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Agence RevOps</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Agence RevOps : alignez vos {"\u00e9"}quipes et acc{"\u00e9"}l{"\u00e9"}rez votre croissance
          </h1>
          <p className="text-[17px] text-[#666] max-w-[600px] mx-auto leading-[1.7] mb-8">
            Ceres est l&apos;agence RevOps de r{"\u00e9"}f{"\u00e9"}rence en France. On aligne marketing, sales et customer success pour cr{"\u00e9"}er un revenue engine pr{"\u00e9"}visible, mesurable et scalable. Pas de slides. Pas de th{"\u00e9"}orie. On ex{"\u00e9"}cute.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">{s.value}</div>
                <p className="text-[11px] text-[#999] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
            Discuter de votre projet RevOps
          </Link>
        </section>
        <Connector />

        {/* ── 2. C'EST QUOI UNE AGENCE REVOPS ── */}
        <section className="mb-0">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-4"><Badge>D{"\u00e9"}finition</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-6">
              C&apos;est quoi une agence RevOps ?
            </h2>
            <div className="space-y-4 text-[14px] text-[#555] leading-[1.8]">
              <p>
                Une <strong className="text-[#111]">agence RevOps</strong> (agence Revenue Operations) est une {"\u00e9"}quipe externe sp{"\u00e9"}cialis{"\u00e9"}e dans l&apos;alignement des fonctions marketing, sales et customer success autour d&apos;un objectif commun : g{"\u00e9"}n{"\u00e9"}rer du revenu de fa{"\u00e7"}on pr{"\u00e9"}visible, mesurable et scalable. Le RevOps est une discipline n{"\u00e9"}e aux {"\u00c9"}tats-Unis au d{"\u00e9"}but des ann{"\u00e9"}es 2020, qui s&apos;est impos{"\u00e9"}e comme le standard d&apos;organisation des {"\u00e9"}quipes revenue dans les entreprises B2B les plus performantes. En 2026, selon Gartner, 75% des entreprises SaaS \u00e0 forte croissance ont adopt{"\u00e9"} une structure RevOps. En France, le march{"\u00e9"} est encore en pleine structuration, ce qui cr{"\u00e9"}e une opportunit{"\u00e9"} massive pour les entreprises qui s&apos;y mettent maintenant.
              </p>
              <p>
                Concr{"\u00e8"}tement, une agence RevOps intervient sur trois piliers fondamentaux. Le premier pilier est <strong className="text-[#111]">les process</strong> : elle formalise le parcours complet du prospect, depuis le premier point de contact marketing jusqu&apos;au renouvellement client. Elle d{"\u00e9"}finit les {"\u00e9"}tapes du funnel, les crit{"\u00e8"}res de qualification (MQL, SQL, opportunit{"\u00e9"}), les r{"\u00e8"}gles de handoff entre {"\u00e9"}quipes, les SLA (Service Level Agreements) et les process d&apos;escalade. Le deuxi{"\u00e8"}me pilier est <strong className="text-[#111]">la technologie</strong> : elle s{"\u00e9"}lectionne, configure et int{"\u00e8"}gre les outils qui supportent ces process. Le CRM en est la pi{"\u00e8"}ce centrale, mais la stack RevOps inclut aussi les outils d&apos;enrichissement de donn{"\u00e9"}es, d&apos;automatisation, de prospection, de reporting et d{"\u00e9"}sormais d&apos;intelligence artificielle. Le troisi{"\u00e8"}me pilier est <strong className="text-[#111]">la donn{"\u00e9"}e</strong> : elle cr{"\u00e9"}e une source de v{"\u00e9"}rit{"\u00e9"} unique partag{"\u00e9"}e par toutes les {"\u00e9"}quipes, avec des dashboards, des KPIs align{"\u00e9"}s et un reporting qui permet de piloter la croissance avec des faits, pas des intuitions.
              </p>
              <p>
                La diff{"\u00e9"}rence entre une <strong className="text-[#111]">agence RevOps</strong> et un cabinet de conseil classique est fondamentale. Un cabinet de conseil produit un diagnostic, des recommandations et un plan de transformation sous forme de slides. Une agence RevOps fait tout cela ET ex{"\u00e9"}cute. Elle est dans votre CRM, dans votre Slack, dans vos outils. Elle configure les pipelines, cr{"\u00e9"}e les workflows, d{"\u00e9"}ploie les automatisations, construit les dashboards et forme vos {"\u00e9"}quipes. Chez Ceres, notre sp{"\u00e9"}cificit{"\u00e9"} est d&apos;aller encore plus loin en int{"\u00e9"}grant l&apos;intelligence artificielle (agents IA, scoring pr{"\u00e9"}dictif, automatisation cognitive) dans chaque brique du revenue engine. C&apos;est ce qui fait de nous l&apos;agence RevOps la plus compl{"\u00e8"}te en France.
              </p>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 3. LES 5 PROBLEMES QU'UNE AGENCE REVOPS RESOUT ── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Diagnostic</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Les 5 probl{"\u00e8"}mes qu&apos;une agence RevOps r{"\u00e9"}sout
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto leading-[1.6]">
              Si vous vous reconnaissez dans au moins 2 de ces situations, vous avez besoin d&apos;un accompagnement RevOps.
            </p>
          </div>
          <div className="space-y-3">
            {problems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                      <h3 className="text-[15px] font-semibold text-[#111]">{item.title}</h3>
                    </div>
                    <p className="text-[12px] text-[#777] leading-[1.7]">{item.desc}</p>
                  </div>
                  <div className="shrink-0 text-center sm:text-right">
                    <div className="text-[24px] font-bold tracking-[-0.02em]" style={{ color: item.color }}>{item.stat}</div>
                    <p className="text-[10px] text-[#999] mt-0.5 max-w-[120px]">{item.statLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 4. CE QUE CERES FAIT CONCRETEMENT ── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Nos services</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Ce que Ceres fait concr{"\u00e8"}tement
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto leading-[1.6]">
              Pour chaque service, voici exactement ce qu&apos;on fait au jour 1, \u00e0 la semaine 1 et au mois 1. Z{"\u00e9"}ro flou.
            </p>
          </div>
          <div className="space-y-4">
            {services.map((svc) => (
              <div key={svc.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: svc.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{svc.title}</h3>
                </div>
                <p className="text-[13px] text-[#777] leading-[1.6] mb-5">{svc.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {svc.process.map((step) => (
                    <div key={step.phase} className="rounded-xl border border-[#F2F2F2] p-4">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: svc.color + "15", color: svc.color }}>{step.phase}</span>
                      <p className="text-[11px] text-[#777] leading-[1.6] mt-2.5">{step.detail}</p>
                    </div>
                  ))}
                </div>
                <Link href={svc.link} className="inline-flex items-center gap-1.5 text-[12px] font-medium hover:underline" style={{ color: svc.color }}>
                  {svc.linkLabel}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 5. METHODOLOGIE EN 3 PHASES ── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">M{"\u00e9"}thodologie</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">
                Notre m{"\u00e9"}thodologie en 3 phases
              </h2>
              <p className="text-[13px] text-white/40">Diagnostic, Build, Scale. Chaque phase a ses livrables, ses KPIs et sa timeline.</p>
            </div>
            <div className="space-y-4">
              {methodologyPhases.map((phase) => (
                <div key={phase.phase} className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: phase.color }} />
                    <h3 className="text-[15px] font-semibold text-white">{phase.phase}</h3>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded" style={{ backgroundColor: phase.color + "20", color: phase.color }}>{phase.duration}</span>
                  </div>
                  <p className="text-[12px] text-white/50 leading-[1.7] mb-4">{phase.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {phase.steps.map((step) => (
                      <li key={step} className="flex items-start gap-2 text-[11px] text-white/40">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-white/20"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="text-[10px] font-medium text-white/30 mb-1">Livrables</p>
                      <p className="text-[11px] text-white/50 leading-[1.5]">{phase.deliverables}</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3">
                      <p className="text-[10px] font-medium text-white/30 mb-1">KPIs de validation</p>
                      <p className="text-[11px] text-white/50 leading-[1.5]">{phase.kpi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 6. REVOPS + IA : NOTRE DIFFERENCIATEUR ── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>IA + RevOps</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              RevOps + IA : notre diff{"\u00e9"}renciateur
            </h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto leading-[1.6]">
              La plupart des agences RevOps configurent votre CRM et automatisent vos workflows. Nous, on va plus loin : on d{"\u00e9"}ploie de l&apos;intelligence artificielle dans chaque brique de votre revenue engine. Aucune autre agence RevOps en France ne combine cette double expertise.
            </p>
          </div>
          <div className="space-y-3">
            {iaFeatures.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{item.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 7. NOS CLIENTS ET RESULTATS ── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Nos clients et r{"\u00e9"}sultats
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto leading-[1.6]">
              Pas juste des logos. Pour chaque client, voici ce qu&apos;on a fait et le r{"\u00e9"}sultat mesur{"\u00e9"}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clientResults.map((client) => (
              <div key={client.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${client.color}15` }}>
                    <span className="text-[14px] font-bold" style={{ color: client.color }}>{client.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#111]">{client.name}</h3>
                    <p className="text-[10px] text-[#999]">{client.sector}</p>
                  </div>
                </div>
                <p className="text-[11px] text-[#777] leading-[1.6] mb-3">{client.mission}</p>
                <div className="rounded-lg bg-[#F8F9FA] p-3 mb-3">
                  <p className="text-[11px] font-semibold text-[#111] leading-[1.5]">{client.result}</p>
                </div>
                <Link href={client.link} className="inline-flex items-center gap-1.5 text-[11px] font-medium hover:underline" style={{ color: client.color }}>
                  Voir le cas client
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 8. POUR QUI ON TRAVAILLE ── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Segments</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Pour qui on travaille
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto leading-[1.6]">
              De la startup qui structure son premier process commercial au grand groupe qui unifie ses 5 CRM. Notre approche s&apos;adapte \u00e0 chaque contexte.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {segments.map((seg) => (
              <div key={seg.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: seg.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{seg.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.7] mb-4">{seg.desc}</p>
                <Link href={seg.link} className="inline-flex items-center gap-1.5 text-[11px] font-medium hover:underline" style={{ color: seg.color }}>
                  {seg.linkLabel}
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 9. POURQUOI PAS RECRUTER UN REVOPS INTERNE ── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Agence vs. interne</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">
                Pourquoi pas recruter un RevOps interne ?
              </h2>
              <p className="text-[13px] text-white/40 max-w-[560px]">
                Recruter un RevOps manager co{"\u00fb"}te cher, prend du temps et comporte un risque {"\u00e9"}lev{"\u00e9"}. Voici la comparaison d{"\u00e9"}taill{"\u00e9"}e.
              </p>
            </div>
            <div className="space-y-2">
              {comparisonRows.map((row) => (
                <div key={row.criteria} className="grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-xl bg-white/5 border border-white/10 p-4">
                  <div>
                    <p className="text-[11px] font-semibold text-white mb-0.5">{row.criteria}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-white/30 mb-0.5 sm:hidden">Recrutement interne</p>
                    <p className="text-[11px] text-white/40 leading-[1.5]">{row.interne}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-[#22C55E]/60 mb-0.5 sm:hidden">Agence RevOps (Ceres)</p>
                    <p className="text-[11px] text-[#22C55E]/70 leading-[1.5]">{row.agence}</p>
                  </div>
                </div>
              ))}
              <div className="hidden sm:grid grid-cols-3 gap-2 px-4 pt-2">
                <p className="text-[10px] font-medium text-white/20">Crit{"\u00e8"}re</p>
                <p className="text-[10px] font-medium text-white/20">Recrutement interne</p>
                <p className="text-[10px] font-medium text-[#22C55E]/40">Agence RevOps (Ceres)</p>
              </div>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 10. NOTRE STACK TECHNOLOGIQUE ── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>Stack technique</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Notre stack technologique</h2>
              <p className="text-[13px] text-[#777] leading-[1.6] max-w-[520px]">
                On n&apos;est pas des consultants qui recommandent des outils qu&apos;ils n&apos;ont jamais utilis{"\u00e9"}s. Voici les outils qu&apos;on d{"\u00e9"}ploie et qu&apos;on utilise au quotidien.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stackTools.map((tool) => (
                <div key={tool.name} className="rounded-xl border border-[#F2F2F2] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: tool.color }} />
                    <h3 className="text-[13px] font-semibold text-[#111]">{tool.name}</h3>
                    <span className="text-[10px] text-[#999] ml-auto">{tool.role}</span>
                  </div>
                  <p className="text-[11px] text-[#777] leading-[1.6]">{tool.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Liens */}
        <section className="mt-12 mb-8">
          <div className="mb-4"><Badge>A decouvrir</Badge></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/methode" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#4B5EFC" }} />
                <h3 className="text-[14px] font-semibold text-[#111]">Notre methode</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65]">La methodologie en 5 etapes qui guide chaque mission.</p>
            </Link>
            <Link href="/fondation-data" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#6D00CC" }} />
                <h3 className="text-[14px] font-semibold text-[#111]">Fondation Data</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65]">Le prerequis a toute initiative IA : des donnees propres.</p>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ── 11. FAQ ── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions fr{"\u00e9"}quentes sur les agences RevOps</h2>
            </div>
            <div className="space-y-0">
              {faqItems.map((f, i) => (
                <div key={i} className="border-b border-[#F2F2F2] py-5">
                  <h3 className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</h3>
                  <p className="text-[12px] text-[#777] leading-[1.7]">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 12. TEMOIGNAGES ── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>T{"\u00e9"}moignages</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">
              Ce que nos clients disent
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="w-6 h-1 rounded-full mb-4" style={{ backgroundColor: t.color }} />
                <p className="text-[12px] text-[#555] leading-[1.7] mb-4 italic">&laquo; {t.quote} &raquo;</p>
                <div>
                  <p className="text-[12px] font-semibold text-[#111]">{t.name}</p>
                  <p className="text-[11px] text-[#999]">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 13. CTA FINAL ── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-3">
              Pr{"\u00ea"}t \u00e0 structurer votre revenue engine ?
            </h2>
            <p className="text-[14px] text-white/40 mb-6 max-w-[480px] mx-auto leading-[1.7]">
              30 minutes pour comprendre vos enjeux, identifier vos quick wins et d{"\u00e9"}finir le bon format d&apos;accompagnement. Audit, projet ou RevOps Part-Time.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-[#F5F5F5] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              R{"\u00e9"}server un appel strat{"\u00e9"}gique
            </Link>
            <p className="text-[11px] text-white/20 mt-4">Gratuit, sans engagement, 100% actionable</p>
          </div>
        </section>

      </div>
    </div>
  );
}
