"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

/* ───── DATA ───── */

const fonctionnalites = [
  {
    title: "Pipeline de ventes visuel",
    desc: "Chaque deal progresse dans un pipeline drag-and-drop personnalisable. Vous definissez vos etapes (qualification, proposition, negociation, closing), les proprietes obligatoires par stage, et les criteres de passage. Les commerciaux voient en un coup d\u2019oeil ou en est chaque opportunite. Les managers detectent les deals bloques. Le pipeline n\u2019est pas juste un tableau : c\u2019est un outil de pilotage qui force la rigueur sans la complexite.",
    color: "#FF7A59",
  },
  {
    title: "Gestion de contacts et entreprises",
    desc: "HubSpot centralise toutes les interactions : emails, appels, reunions, documents consultes, pages visitees. Chaque fiche contact est enrichie automatiquement (taille d\u2019entreprise, secteur, technos). Les associations contact-entreprise-deal sont natives. Fini les doublons, les fiches vides et les commerciaux qui cherchent 10 minutes avant chaque appel. La timeline d\u2019activite est le coeur du CRM.",
    color: "#4B5EFC",
  },
  {
    title: "Deals et previsions",
    desc: "Chaque deal a un montant, une date de closing prevue, une probabilite et un owner. HubSpot genere automatiquement des forecasts par rep, par equipe et par periode. Les managers voient le weighted pipeline, le gap vs objectif, et les deals a risque. Le forecasting n\u2019est plus un exercice Excel mensuel : c\u2019est un dashboard temps reel qui evolue avec chaque mise a jour de deal.",
    color: "#6D00CC",
  },
  {
    title: "Reporting et dashboards",
    desc: "HubSpot propose des dizaines de rapports preconfigures et un builder de rapports custom. Taux de conversion par etape, duree moyenne du cycle de vente, performance par commercial, attribution marketing, revenue par source. Les dashboards sont partageables et se mettent a jour en temps reel. Chaque equipe a sa vue. Les dirigeants ont la vue consolidee.",
    color: "#22C55E",
  },
  {
    title: "Workflows et automatisations",
    desc: "Les workflows HubSpot automatisent tout ce qui est repetitif : assignation de leads, notifications internes, changement de lifecycle stage, envoi d\u2019emails de nurturing, creation de taches, mise a jour de proprietes. On cree des workflows sans code via une interface visuelle. Les declencheurs sont multiples : soumission de formulaire, changement de propriete, score atteint, deal cree. C\u2019est le moteur invisible qui fait tourner vos operations.",
    color: "#6C5CE7",
  },
  {
    title: "Sequences de prospection",
    desc: "Les sequences permettent aux commerciaux d\u2019automatiser leurs suivis : enchainement d\u2019emails personnalises et de taches de relance. Chaque sequence s\u2019arrete automatiquement quand le prospect repond ou prend rendez-vous. Les metrics sont claires : taux d\u2019ouverture, taux de reponse, meetings bookes par sequence. C\u2019est la prospection industrialisee sans perdre la personnalisation.",
    color: "#D4A27F",
  },
  {
    title: "Lead scoring",
    desc: "HubSpot permet de scorer chaque contact selon des criteres demographiques (taille entreprise, secteur, poste) et comportementaux (pages visitees, emails ouverts, formulaires soumis). Le score determine la priorite de traitement. Au-dessus d\u2019un seuil, le lead est automatiquement assigne a un commercial. Le scoring elimine le subjectif et aligne marketing et sales sur une definition commune du lead qualifie.",
    color: "#FF5C35",
  },
  {
    title: "Tableaux de bord personnalises",
    desc: "Chaque utilisateur peut creer ses propres vues : mes deals, mes taches du jour, mes contacts a relancer. Les vues filtrees permettent de segmenter en temps reel. Les managers voient les performances de leur equipe. Les dirigeants ont le revenue dashboard. HubSpot s\u2019adapte a chaque role au lieu de forcer un affichage unique pour tous.",
    color: "#4B5EFC",
  },
];

const hubs = [
  {
    title: "Sales Hub",
    subtitle: "Pour les equipes commerciales",
    desc: "Le coeur du CRM. Pipeline de deals, sequences de prospection, playbooks, devis, e-signatures, forecasting. Sales Hub transforme un tableur en machine de vente structuree. Les commerciaux passent moins de temps sur l\u2019administratif et plus de temps a vendre.",
    who: "Toute equipe commerciale B2B, de 2 a 200 reps.",
    price: "Gratuit | Starter 20\u20AC/mois/utilisateur | Pro 100\u20AC/mois/utilisateur | Enterprise 150\u20AC/mois/utilisateur",
    color: "#FF7A59",
    features: ["Pipeline deals personnalisable", "Sequences email et appels", "Playbooks par etape du deal", "Forecasting et quotas", "Devis et e-signatures", "Enregistrement d\u2019appels"],
  },
  {
    title: "Marketing Hub",
    subtitle: "Pour les equipes marketing",
    desc: "Emails, landing pages, formulaires, workflows de nurturing, segmentation comportementale, attribution multi-touch, gestion des reseaux sociaux et de la publicite. Marketing Hub alimente le pipeline en leads qualifies et mesure chaque action marketing jusqu\u2019au revenu genere.",
    who: "Equipes marketing B2B qui veulent prouver leur ROI.",
    price: "Gratuit | Starter 20\u20AC/mois | Pro 880\u20AC/mois | Enterprise 3 300\u20AC/mois",
    color: "#FF5C35",
    features: ["Workflows de nurturing", "Segmentation comportementale", "Landing pages et CTAs", "Attribution multi-touch", "Social media et ads", "A/B testing"],
  },
  {
    title: "Service Hub",
    subtitle: "Pour le support et le customer success",
    desc: "Systeme de tickets, knowledge base, portail client, enquetes NPS et CSAT, SLA automatises, chatbot. Service Hub structure votre support et donne de la visibilite sur la satisfaction client. Les equipes CS arretent de gerer les tickets par email et passent a un systeme tracable.",
    who: "Equipes support, customer success, account management.",
    price: "Gratuit | Starter 20\u20AC/mois/utilisateur | Pro 100\u20AC/mois/utilisateur | Enterprise 150\u20AC/mois/utilisateur",
    color: "#00BDA5",
    features: ["Systeme de tickets", "Knowledge base", "Enquetes NPS et CSAT", "SLA et escalation automatique", "Portail client", "Chatbot et live chat"],
  },
  {
    title: "Content Hub (ex-CMS Hub)",
    subtitle: "Pour les sites web",
    desc: "Hebergement de site web integre au CRM. Le contenu s\u2019adapte au visiteur selon son lifecycle stage, son secteur ou ses interactions precedentes. Les marketeurs publient sans dependre des devs. Le SEO est integre. Les performances du site alimentent directement le CRM.",
    who: "Entreprises qui veulent un site web connecte a leur CRM.",
    price: "Starter 25\u20AC/mois | Pro 500\u20AC/mois | Enterprise 1 500\u20AC/mois",
    color: "#F5C26B",
    features: ["Editeur drag-and-drop", "Contenu personnalise", "SEO integre", "Blog et landing pages", "Multi-langue", "CDN et SSL inclus"],
  },
  {
    title: "Operations Hub",
    subtitle: "Pour les equipes RevOps et data",
    desc: "Sync bidirectionnelle avec vos outils, nettoyage automatique des donnees, custom coded workflows. Operations Hub est le hub technique qui garantit la qualite des donnees et l\u2019interoperabilite de votre stack. C\u2019est le hub le moins connu et le plus strategique.",
    who: "Equipes RevOps, data, IT qui gerent la stack.",
    price: "Gratuit | Starter 20\u20AC/mois | Pro 800\u20AC/mois | Enterprise 2 000\u20AC/mois",
    color: "#6C5CE7",
    features: ["Sync bi-directionnelle", "Data quality automation", "Custom coded workflows", "Datasets et reporting avance", "Webhooks et API", "Jeux de donnees calcules"],
  },
];

const tiers = [
  {
    name: "Free",
    price: "0\u20AC",
    desc: "Pour demarrer. Contacts illimites, pipeline basique, formulaires, email.",
    features: ["Contacts et entreprises illimites", "1 pipeline de deals", "Formulaires simples", "Email 1-to-1 trackable", "Tableau de bord basique", "Chat en direct", "Pas de workflows", "Pas de sequences", "Branding HubSpot"],
    reco: "Solopreneurs, freelances, test avant achat.",
  },
  {
    name: "Starter",
    price: "A partir de 20\u20AC/mois",
    desc: "Les fonctionnalites essentielles sans le branding HubSpot.",
    features: ["Tout le Free sans branding", "Stripe et paiements integres", "Automatisations simples", "Goals (objectifs)", "Conversations routees", "Jusqu\u2019a 2 pipelines", "Support par email et chat", "Sequences limitees", "Rapports personnalises basiques"],
    reco: "TPE et startups early-stage avec 1-5 commerciaux.",
  },
  {
    name: "Pro",
    price: "A partir de 100\u20AC/mois/utilisateur",
    desc: "La version la plus utilisee. Workflows, sequences, reporting avance.",
    features: ["Workflows illimites", "Sequences de prospection", "Lead scoring", "Forecasting", "Rapports personnalises avances", "Playbooks", "ABM (account-based marketing)", "Attribution multi-touch", "Equipes et permissions"],
    reco: "PME et scale-ups B2B avec 5-50 commerciaux. C\u2019est le tier qu\u2019on recommande le plus souvent.",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "A partir de 150\u20AC/mois/utilisateur",
    desc: "Pour les organisations complexes. Custom objects, hierarchies, sandbox.",
    features: ["Custom objects", "Hierarchies d\u2019equipes", "Environnement sandbox", "Single sign-on (SSO)", "Predictive lead scoring (IA)", "Revenue intelligence", "Conversation intelligence", "Admin notifications avancees", "Quotas par equipe et par rep"],
    reco: "ETI et grands comptes avec des process complexes, plusieurs BU et des besoins de gouvernance.",
  },
];

const comparisons = [
  {
    name: "HubSpot vs Salesforce",
    desc: "Salesforce est le leader historique. Plus puissant en personnalisation brute, mais beaucoup plus complexe, plus cher et avec une adoption utilisateur souvent mediocre. HubSpot gagne sur l\u2019experience utilisateur, la rapidite de deploiement et le cout total de possession. Pour 80% des PME et scale-ups B2B, HubSpot fait tout ce qu\u2019il faut sans la complexite de Salesforce.",
    hubspotWins: "UX, vitesse de deploy, cout, adoption, all-in-one natif",
    otherWins: "Personnalisation extreme, ecosysteme AppExchange, presence grands comptes",
    verdict: "HubSpot si vous avez moins de 200 commerciaux et que l\u2019adoption est un enjeu. Salesforce si vous avez des process tres specifiques et une equipe admin dediee.",
    color: "#00A1E0",
  },
  {
    name: "HubSpot vs Pipedrive",
    desc: "Pipedrive est un excellent CRM de vente, simple et abordable. Mais il reste un outil mono-equipe : pas de marketing automation, pas de service, pas d\u2019operations. Des que vous avez besoin d\u2019aligner marketing et sales ou de scaler, Pipedrive atteint ses limites. HubSpot coute un peu plus cher mais offre une plateforme complete.",
    hubspotWins: "Plateforme all-in-one, marketing automation, reporting, scalabilite",
    otherWins: "Simplicite, prix d\u2019entree, rapidite de prise en main pour les petites equipes sales",
    verdict: "Pipedrive si vous etes une equipe sales de 2-5 personnes sans marketing. HubSpot des que vous voulez aligner marketing et sales.",
    color: "#22C55E",
  },
  {
    name: "HubSpot vs Zoho CRM",
    desc: "Zoho CRM est tres abordable et propose beaucoup de fonctionnalites. Mais l\u2019interface est datee, l\u2019experience utilisateur est en retrait et l\u2019ecosysteme d\u2019integrations est moins riche. Zoho est un bon choix pour les TPE sensibles au prix. HubSpot est un meilleur choix des que l\u2019adoption par les equipes et la qualite de l\u2019experience comptent.",
    hubspotWins: "UX, integrations, communaute, support, IA native, ecosysteme",
    otherWins: "Prix, suite d\u2019outils bureautiques integree, flexibilite pour les marches asiatiques",
    verdict: "Zoho si le budget est la contrainte numero un et que vous etes pret a accepter une UX moins polie. HubSpot pour tout le reste.",
    color: "#D4A27F",
  },
];

const deploymentErrors = [
  "Configurer HubSpot comme un tableur au lieu de penser processus",
  "Creer 200 proprietes custom des le jour 1 au lieu de commencer simple",
  "Ne pas definir les lifecycle stages avant de commencer",
  "Importer des donnees sales sans les nettoyer d\u2019abord",
  "Deployer sans former les utilisateurs",
  "Configurer les workflows sans avoir valide les process avec les equipes",
  "Ne pas documenter les conventions de nommage",
  "Lancer tous les Hubs en meme temps au lieu de prioriser",
];

const methodology = [
  { num: "01", title: "Cadrage et audit", desc: "On commence par comprendre vos process actuels, vos pain points et vos objectifs. Si vous avez deja un CRM, on l\u2019audite. On definit le perimetre, les Hubs necessaires, les integrations et le planning. Ce cadrage dure 1 semaine et il est gratuit.", weeks: "Semaine 1" },
  { num: "02", title: "Architecture et mapping", desc: "On designe l\u2019architecture HubSpot : objets, proprietes, pipelines, vues, permissions. Si c\u2019est une migration, on fait le mapping champ par champ entre l\u2019ancien CRM et HubSpot. Rien n\u2019est configure avant que l\u2019architecture soit validee par vos equipes.", weeks: "Semaine 2" },
  { num: "03", title: "Configuration et migration", desc: "On configure HubSpot selon l\u2019architecture validee. Pipelines, proprietes, vues, formulaires, workflows, integrations. Si migration : import par lots, verification d\u2019integrite, deduplication. On teste tout avant le go-live.", weeks: "Semaines 3-5" },
  { num: "04", title: "Formation et go-live", desc: "Formation adaptee a chaque role : commerciaux, managers, marketing, direction. Pas un tuto generique mais une formation sur VOS process dans VOTRE HubSpot. Go-live progressif avec support reactif pendant 2 semaines.", weeks: "Semaines 5-6" },
  { num: "05", title: "Optimisation continue", desc: "Apres le go-live, on itere : ajustement des workflows, nouveaux rapports, nouvelles automatisations. On reste disponible en support continu ou en part-time mensuel selon vos besoins.", weeks: "M2+" },
];

const iaFeatures = [
  { title: "Breeze Intelligence", desc: "HubSpot a integre Breeze, son IA native, dans toute la plateforme. Enrichissement automatique des contacts, resume d\u2019appels, redaction assistee d\u2019emails, scoring predictif. Breeze analyse vos donnees CRM pour identifier les patterns et suggerer les actions prioritaires.", color: "#FF7A59" },
  { title: "Claude connecte via MCP", desc: "On va plus loin que Breeze en connectant Claude (Anthropic) directement a votre HubSpot via le Model Context Protocol. Claude lit vos deals, vos contacts, vos activites et genere des analyses sur-mesure : scoring custom, resumes de pipeline, detection d\u2019anomalies, playbooks automatises.", color: "#6D00CC" },
  { title: "Agents IA operationnels", desc: "En 2026, l\u2019IA n\u2019est plus un gadget. On deploie des agents IA qui agissent dans votre CRM : qualification automatique des leads, enrichissement en temps reel, analyse win/loss, generation de rapports hebdomadaires. Chaque agent a un perimetre defini et des permissions controlees.", color: "#4B5EFC" },
  { title: "Ce que ca change concretement", desc: "Un commercial qui recoit un lead enrichi et score en 3 secondes au lieu de 30 minutes de recherche. Un manager qui a un resume de pipeline genere chaque lundi matin. Un dirigeant qui peut poser une question en langage naturel et obtenir la reponse depuis les donnees CRM. L\u2019IA elimine le travail a faible valeur ajoutee.", color: "#22C55E" },
];

const casClients = [
  { name: "TotalEnergies", desc: "Migration de Microsoft Dynamics vers HubSpot et unification de plusieurs instances multi-regions. 45 000+ contacts migres, 320+ proprietes mappees, zero perte de donnees. Deploiement en 22 semaines sur plusieurs business units.", metrics: ["45K+ contacts migres", "320+ proprietes", "22 semaines", "Multi-BU"], link: "/cas-clients/totalenergies", color: "#FF7A59" },
  { name: "Dougs", desc: "Migration complete de Salesforce et Pardot vers HubSpot CRM et Marketing Hub. 30 000 contacts, reconstruction de tous les workflows marketing, unification CRM et marketing sur une seule plateforme. Cout divise par 2.", metrics: ["30K contacts", "Salesforce + Pardot migres", "Cout /2", "100% donnees conservees"], link: "/cas-clients/dougs", color: "#4B5EFC" },
  { name: "Elax Energie", desc: "Audit HubSpot, remise a plat complete et structuration RevOps. Score d\u2019audit passe de 17/100 a 79/100. Pipeline restructure, workflows automatises, dashboards de pilotage mis en place.", metrics: ["Score 17 a 79", "Pipeline restructure", "15+ workflows", "Dashboards weekly"], link: "/cas-clients/elax-energie", color: "#22C55E" },
  { name: "Kameleoon", desc: "Audit RevOps complet et migration vers HubSpot. Alignement marketing-sales, lead scoring, attribution multi-touch. Adoption CRM passee de 40% a 90%+. Pipeline visibility augmentee de 55%.", metrics: ["Adoption 40% a 90%+", "+55% pipeline visibility", "Audit RevOps", "Scoring deploye"], link: "/cas-clients/kameleoon", color: "#6D00CC" },
];

const services = [
  { title: "Audit CRM gratuit", desc: "On audite votre CRM actuel (HubSpot ou autre) et on vous livre un diagnostic avec les quick wins et le plan d\u2019action. 30 minutes, sans engagement.", link: "/audit-crm", color: "#FF7A59" },
  { title: "Onboarding HubSpot", desc: "Configuration complete de votre HubSpot : pipelines, proprietes, workflows, integrations, formation. De 3 a 6 semaines selon la complexite.", link: "/agence-hubspot", color: "#4B5EFC" },
  { title: "Migration CRM", desc: "Migration depuis Salesforce, Dynamics, Pipedrive ou tout autre CRM. Mapping, import, verification, formation. Zero perte de donnees.", link: "/migration-salesforce-hubspot", color: "#6D00CC" },
  { title: "RevOps Part-Time", desc: "Un expert RevOps dedie qui gere votre HubSpot au quotidien. Support, evolutions, reporting, optimisation continue. De 2 a 8 jours par mois.", link: "/revops-part-time", color: "#22C55E" },
];

const faqItems = [
  { q: "HubSpot CRM est-il gratuit ?", a: "Oui, HubSpot propose un CRM gratuit avec des fonctionnalites de base : contacts illimites, 1 pipeline de deals, formulaires, email tracking, chat en direct. C\u2019est suffisant pour demarrer mais limite des qu\u2019on a besoin de workflows, sequences ou reporting avance. La plupart des entreprises B2B serieuses passent au tier Pro assez rapidement." },
  { q: "HubSpot vs Salesforce : lequel choisir ?", a: "Pour 80% des PME et scale-ups B2B, HubSpot est le meilleur choix : plus simple, moins cher, meilleure adoption. Salesforce reste pertinent pour les grands comptes avec des process tres specifiques et une equipe admin dediee. Le critere cle est l\u2019adoption : un CRM que personne n\u2019utilise ne vaut rien, quel que soit son prix." },
  { q: "Combien coute HubSpot en 2026 ?", a: "HubSpot Free est gratuit. Starter commence a 20\u20AC/mois. Le tier Pro, le plus utilise, est a environ 100\u20AC/mois/utilisateur pour Sales Hub. Marketing Hub Pro est a 880\u20AC/mois (contacts inclus). Enterprise demarre a 150\u20AC/mois/utilisateur. Le cout reel depend du nombre d\u2019utilisateurs, de Hubs et du volume de contacts marketing." },
  { q: "Comment migrer vers HubSpot depuis Salesforce ?", a: "Une migration Salesforce vers HubSpot prend generalement 4 a 8 semaines. Les etapes cles : audit de l\u2019instance Salesforce, mapping des champs, nettoyage des donnees, import par lots (contacts, entreprises, deals, activites), reconstruction des workflows, formation. On recommande une periode de double-run de 2 semaines pour securiser la transition." },
  { q: "HubSpot est-il adapte aux grandes entreprises ?", a: "Oui. HubSpot Enterprise est utilise par des entreprises de plus de 1 000 salaries. Les fonctionnalites Enterprise (custom objects, hierarchies d\u2019equipes, SSO, sandbox, partitioning) repondent aux besoins des organisations complexes. TotalEnergies, par exemple, utilise HubSpot pour ses operations commerciales multi-regions." },
  { q: "Peut-on connecter HubSpot a nos autres outils ?", a: "HubSpot propose 1 600+ integrations natives (Slack, Google Workspace, Microsoft 365, Salesforce, Stripe, Zoom, etc.) et une API REST complete. Pour les integrations sur-mesure, Operations Hub permet des syncs bidirectionnelles et des custom coded workflows. On utilise aussi Make et n8n pour les scenarios complexes." },
  { q: "Quelle est la difference entre HubSpot CRM et les Hubs ?", a: "Le CRM est le socle gratuit : contacts, entreprises, deals, activites. Les Hubs sont des modules payants qui ajoutent des fonctionnalites specialisees : Sales Hub (prospection, sequences, forecasting), Marketing Hub (automation, attribution), Service Hub (tickets, knowledge base), Content Hub (site web), Operations Hub (data quality, sync)." },
  { q: "HubSpot est-il conforme au RGPD ?", a: "Oui. HubSpot propose des fonctionnalites RGPD natives : base legale par contact, double opt-in, droit a l\u2019oubli, consentement cookies, data processing agreement. Les donnees peuvent etre hebergees dans l\u2019UE (data center Francfort). HubSpot est certifie SOC 2 Type II et ISO 27001." },
  { q: "Combien de temps pour deployer HubSpot ?", a: "Un deploiement simple (Sales Hub Pro, 1 pipeline, 5-10 utilisateurs) prend 3-4 semaines. Un deploiement multi-Hub avec migration prend 6-10 semaines. Un projet complexe (multi-BU, integrations, 50+ utilisateurs) peut prendre 3-4 mois. La variable principale est la migration de donnees et la formation des equipes." },
  { q: "Faut-il un partenaire pour deployer HubSpot ?", a: "Vous pouvez deployer HubSpot seul pour un usage basique. Mais des que vous avez 5+ utilisateurs, des workflows, des integrations ou une migration, un partenaire specialise vous fait gagner des semaines et evite les erreurs de configuration qui coutent cher a corriger ensuite. Notre cadrage initial est gratuit." },
  { q: "HubSpot propose-t-il de l\u2019IA ?", a: "Oui. HubSpot a lance Breeze, son IA native, qui couvre la redaction d\u2019emails, le resume d\u2019appels, le scoring predictif, l\u2019enrichissement de contacts et les chatbots IA. En 2026, l\u2019IA est integree dans chaque Hub. On complemente avec Claude (Anthropic) connecte via MCP pour des use cases sur-mesure." },
  { q: "Quels sont les inconvenients de HubSpot ?", a: "HubSpot a des limites reelles : la personnalisation est moins poussee que Salesforce pour les cas complexes, le pricing marketing augmente vite avec le volume de contacts, certaines fonctionnalites avancees ne sont disponibles qu\u2019en Enterprise, et le reporting multi-objet peut etre limitant. C\u2019est pour ca qu\u2019on dit toujours quand HubSpot n\u2019est PAS le bon choix." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  {
    "@type": "SoftwareApplication",
    name: "HubSpot CRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Version gratuite disponible. Plans payants a partir de 20\u20AC/mois." },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", bestRating: "5", ratingCount: "12000", reviewCount: "12000" },
    description: "CRM tout-en-un pour les entreprises B2B. Gestion des contacts, pipeline de ventes, marketing automation, service client et operations.",
  },
  {
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
]};

/* ───── COMPONENT ───── */

export default function CrmHubSpotPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── 1. HERO ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Guide complet</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            CRM HubSpot : le guide complet<br className="hidden sm:block" /> pour les entreprises B2B
          </h1>
          <p className="text-[17px] text-[#666] max-w-[600px] mx-auto leading-[1.7] mb-4">
            Fonctionnalites, prix, comparaison, deploiement et retours d&apos;experience. Tout ce qu&apos;il faut savoir sur le CRM HubSpot pour prendre la bonne decision.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=64" alt="HubSpot" width={22} height={22} className="rounded-sm" />
            <span className="text-[13px] text-[#999]">Partenaire certifie HubSpot &middot; 250+ clients accompagnes</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />Parler de mon projet
            </Link>
            <Link href="/audit-crm" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
              Audit CRM gratuit
            </Link>
          </div>
        </section>
        <Connector />

        {/* ── 2. C'EST QUOI HUBSPOT CRM ── */}
        <section className="mb-4">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Definition</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">C&apos;est quoi HubSpot CRM ?</h2>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <p className="text-[14px] text-[#444] leading-[1.8] mb-5">
              <strong>HubSpot CRM est une plateforme de gestion de la relation client (CRM) tout-en-un, editee par HubSpot Inc., qui centralise la gestion des contacts, des ventes, du marketing, du service client et des operations sur une interface unique.</strong> Fonde en 2006 par Brian Halligan et Dharmesh Shah au MIT, HubSpot a commence comme un outil de marketing inbound avant de lancer son CRM gratuit en 2014. Depuis, il est devenu le CRM numero un pour les PME et les scale-ups B2B dans le monde.
            </p>
            <p className="text-[14px] text-[#444] leading-[1.8] mb-5">
              En 2026, HubSpot est utilise par plus de 228 000 entreprises dans 135 pays. La plateforme a evolue d&apos;un simple outil de gestion de contacts vers un ecosysteme complet qui couvre l&apos;integralite du cycle de revenu : acquisition, conversion, closing, onboarding et retention. HubSpot est cote au NYSE (HUBS) et genere plus de 2,6 milliards de dollars de revenu annuel recurrent.
            </p>
            <p className="text-[14px] text-[#444] leading-[1.8] mb-5">
              Ce qui distingue HubSpot des autres CRM, c&apos;est son positionnement : une plateforme puissante mais accessible. La ou Salesforce necessite des administrateurs dedies et des consultants a 2 000 euros la journee, HubSpot peut etre configure et maintenu par des equipes operationnelles sans competences techniques avancees. Le CRM de base est gratuit, sans limite de temps ni de nombre de contacts, ce qui permet de demarrer sans risque financier.
            </p>
            <p className="text-[14px] text-[#444] leading-[1.8]">
              HubSpot structure son offre autour de cinq modules appeles Hubs (Sales, Marketing, Service, Content, Operations), chacun adressant un besoin specifique. Le CRM gratuit constitue le socle commun. Les Hubs payants ajoutent les fonctionnalites avancees. Cette architecture modulaire permet aux entreprises de commencer petit et de scaler progressivement sans changer de plateforme.
            </p>
          </div>
        </section>
        <Connector />

        {/* ── 3. FONCTIONNALITES CLES ── */}
        <section className="mb-4">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Fonctionnalites</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les fonctionnalites cles du CRM HubSpot</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Pas juste une liste. Ce que chaque fonctionnalite fait concretement et pourquoi elle compte.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fonctionnalites.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: f.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{f.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 4. LES 5 HUBS ── */}
        <section className="mb-4">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Les 5 Hubs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les 5 Hubs HubSpot expliques</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Chaque Hub adresse un besoin specifique. Voici ce que fait chacun, pour qui et a quel prix.</p>
          </div>
          <div className="space-y-4">
            {hubs.map((h) => (
              <div key={h.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: h.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{h.title}</h3>
                  <span className="text-[11px] text-[#999] ml-1">{h.subtitle}</span>
                </div>
                <p className="text-[13px] text-[#555] leading-[1.7] mb-4">{h.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-4">
                  {h.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-[11px] text-[#666] py-1">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {feat}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 text-[11px]">
                  <span className="text-[#999]"><strong className="text-[#666]">Pour qui :</strong> {h.who}</span>
                  <span className="text-[#999]"><strong className="text-[#666]">Prix :</strong> {h.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 5. COMPARAISON FREE / STARTER / PRO / ENTERPRISE ── */}
        <section className="mb-4">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Tarifs HubSpot</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Free vs Starter vs Pro vs Enterprise</h2>
              <p className="text-[13px] text-white/40">Quel tier choisir selon votre taille et vos besoins. Prix indicatifs 2026.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className={`rounded-xl border p-5 ${t.highlight ? "border-[#FF7A59] bg-[#FF7A59]/10" : "border-white/10 bg-white/5"}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[15px] font-semibold text-white">{t.name}</h3>
                    <span className={`text-[13px] font-bold ${t.highlight ? "text-[#FF7A59]" : "text-white/60"}`}>{t.price}</span>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.6] mb-3">{t.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {t.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-[11px] text-white/50">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/20"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className={`text-[11px] rounded-md px-3 py-2 ${t.highlight ? "bg-[#FF7A59]/20 text-[#FF7A59]" : "bg-white/5 text-white/30"}`}>
                    <strong>Notre recommandation :</strong> {t.reco}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 6. POURQUOI CHOISIR HUBSPOT ── */}
        <section className="mb-4">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Comparatif</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Pourquoi choisir HubSpot CRM</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Comparaison honnete. On dit aussi quand HubSpot n&apos;est pas le bon choix.</p>
          </div>
          <div className="space-y-4">
            {comparisons.map((c) => (
              <div key={c.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{c.name}</h3>
                </div>
                <p className="text-[13px] text-[#555] leading-[1.7] mb-4">{c.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="rounded-lg bg-[#F8F8F8] p-3">
                    <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">HubSpot gagne sur</p>
                    <p className="text-[11px] text-[#666] leading-[1.5]">{c.hubspotWins}</p>
                  </div>
                  <div className="rounded-lg bg-[#F8F8F8] p-3">
                    <p className="text-[11px] font-semibold text-[#666] mb-1">L&apos;autre gagne sur</p>
                    <p className="text-[11px] text-[#666] leading-[1.5]">{c.otherWins}</p>
                  </div>
                </div>
                <div className="rounded-lg border border-[#E8E8E8] p-3">
                  <p className="text-[11px] text-[#444] leading-[1.5]"><strong>Verdict :</strong> {c.verdict}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 7. COMMENT DEPLOYER HUBSPOT ── */}
        <section className="mb-4">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Deploiement</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Comment deployer HubSpot correctement</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Les erreurs qu&apos;on voit partout et notre methodologie pour les eviter.</p>
          </div>

          {/* Erreurs courantes */}
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
            <h3 className="text-[14px] font-semibold text-[#111] mb-4">Les 8 erreurs les plus courantes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {deploymentErrors.map((err, i) => (
                <div key={i} className="flex items-start gap-2 text-[12px] text-[#777] leading-[1.5]">
                  <span className="text-[#EF4444] mt-0.5 shrink-0">&#x2717;</span>
                  {err}
                </div>
              ))}
            </div>
          </div>

          {/* Methodologie */}
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[14px] font-semibold text-[#111] mb-5">Notre methodologie en 5 etapes</h3>
            <div className="space-y-4">
              {methodology.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[12px] font-bold text-[#FF7A59] bg-[#FF7A59]/10 w-8 h-8 rounded-lg flex items-center justify-center">{step.num}</span>
                    {step.num !== "05" && <div className="w-px h-full bg-[#E8E8E8] mt-2" />}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-[13px] font-semibold text-[#111]">{step.title}</h4>
                      <span className="text-[10px] text-[#999] px-2 py-0.5 rounded bg-[#F5F5F5]">{step.weeks}</span>
                    </div>
                    <p className="text-[12px] text-[#777] leading-[1.6]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[#F2F2F2] text-center">
              <Link href="/agence-hubspot" className="text-[12px] text-[#FF7A59] font-medium hover:underline">
                En savoir plus sur notre accompagnement HubSpot &rarr;
              </Link>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 8. HUBSPOT + IA EN 2026 ── */}
        <section className="mb-4">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">IA &amp; HubSpot</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">HubSpot et l&apos;IA en 2026</h2>
              <p className="text-[13px] text-white/40">Breeze, Claude, MCP : ce que l&apos;intelligence artificielle change concretement dans votre CRM.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {iaFeatures.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: f.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{f.title}</h3>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65]">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/agents-ia" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-white/20 text-[12px] text-white/60 font-medium hover:border-white/40 hover:text-white/80 transition-all">
                Decouvrir nos agents IA &rarr;
              </Link>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 9. NOS RESULTATS ── */}
        <section className="mb-4">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Nos resultats avec HubSpot</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Des chiffres reels, pas des promesses. Chaque cas est documente.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {casClients.map((c) => (
              <div key={c.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{c.name}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.metrics.map((m) => (
                    <span key={m} className="text-[10px] font-medium px-2 py-1 rounded-md bg-[#F5F5F5] text-[#666]">{m}</span>
                  ))}
                </div>
                <Link href={c.link} className="text-[11px] text-[#FF7A59] font-medium hover:underline">
                  Lire le cas complet &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 10. TARIFS ET ACCOMPAGNEMENT ── */}
        <section className="mb-4">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Accompagnement</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Tarifs et accompagnement Ceres</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">On intervient au forfait, apres cadrage. L&apos;appel initial est gratuit.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link key={s.title} href={s.link} className="group rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#CCC] hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: s.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111] group-hover:text-[#FF7A59] transition-colors">{s.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 11. FAQ ── */}
        <section className="mb-4">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur HubSpot CRM</h2>
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

        {/* ── 12. CTA FINAL ── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a passer sur HubSpot ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">
              Premiere implementation, migration ou optimisation. On cadre votre projet en 30 minutes. L&apos;appel est gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
              </Link>
              <Link href="/audit-crm" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
                Demander un audit CRM
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
