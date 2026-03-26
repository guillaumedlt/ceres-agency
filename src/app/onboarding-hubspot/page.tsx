"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── DATA ─── */

const whyOnboardingMatters = [
  { title: "63% d\u2019echec sans onboarding", desc: "Selon Forrester, 63% des implementations CRM echouent faute d\u2019accompagnement structure. Le probleme n\u2019est jamais l\u2019outil : c\u2019est la maniere dont il est deploye, configure et adopte par les equipes.", color: "#EF4444" },
  { title: "Donnees mal structurees des le depart", desc: "Sans cadrage initial, les equipes importent des donnees sales, creent des proprietes en double, configurent des pipelines incoherents. Resultat : un CRM inexploitable en 6 mois, et un nettoyage qui coute plus cher que l\u2019onboarding lui-meme.", color: "#F59E0B" },
  { title: "Adoption inferieure a 40%", desc: "Un CRM deploye sans formation contextuelle est un CRM contourne. Les commerciaux reviennent a leurs tableurs, les managers n\u2019ont pas de visibilite, et l\u2019investissement est perdu. L\u2019onboarding est la difference entre un outil utilise et un outil abandonne.", color: "#4B5EFC" },
  { title: "Workflows absents ou mal configures", desc: "Pas de lead routing, pas de notifications, pas de sequences automatisees. Les leads tombent dans le vide, les relances sont manuelles, et le cycle de vente s\u2019allonge inutilement. Un onboarding structure met en place les automatisations des le premier mois.", color: "#6D00CC" },
  { title: "Reporting inexistant", desc: "Sans dashboards configures des le depart, les managers pilotent a l\u2019aveugle. Pas de visibilite sur le pipeline, pas de forecast fiable, pas de metriques d\u2019activite. Les decisions sont prises au feeling au lieu de s\u2019appuyer sur des donnees.", color: "#6C5CE7" },
  { title: "Cout d\u2019un mauvais setup", desc: "Un CRM mal configure coute entre 15 000 et 40 000 EUR a corriger apres 12 mois d\u2019utilisation. Proprietes a nettoyer, donnees a dedupliquer, workflows a reconstruire, equipes a reformer. L\u2019onboarding est un investissement, pas un cout.", color: "#22C55E" },
];

const weeklyProgram = [
  {
    week: "Semaine 1",
    title: "Fondations et structure du compte",
    desc: "On pose les bases. Chaque decision prise cette semaine conditionne la qualite de votre CRM pour les annees a venir. Pas de precipitation : on cadre, on structure, on valide avant d\u2019avancer.",
    details: [
      "Creation et configuration du compte HubSpot",
      "Parametrage du domaine, tracking code, RGPD",
      "Configuration des utilisateurs et permissions par role",
      "Design du pipeline deals (etapes, probabilites, proprietes obligatoires)",
      "Creation des proprietes custom alignees sur votre process commercial",
      "Configuration des lifecycle stages et lead statuses",
      "Parametrage des devises, fuseaux horaires, formats",
      "Integration email (Gmail, Outlook) pour chaque utilisateur",
    ],
    color: "#FF7A59",
  },
  {
    week: "Semaine 2",
    title: "Import, nettoyage et enrichissement des donnees",
    desc: "La qualite de vos donnees determine la qualite de votre CRM. On ne se contente pas d\u2019importer : on nettoie, on deduplique, on enrichit, on structure. Chaque contact, chaque entreprise, chaque deal est au bon endroit avec les bonnes informations.",
    details: [
      "Audit et nettoyage du fichier source (CSV, ancien CRM, tableurs)",
      "Deduplication des contacts et entreprises",
      "Standardisation des formats (telephones, adresses, noms)",
      "Mapping des champs source vers les proprietes HubSpot",
      "Import par lots avec validation a chaque etape",
      "Enrichissement des donnees via outils tiers (Clearbit, Apollo)",
      "Configuration des associations contacts-entreprises-deals",
      "Verification de l\u2019integrite des donnees post-import",
    ],
    color: "#4B5EFC",
  },
  {
    week: "Semaine 3",
    title: "Automatisations, sequences et scoring",
    desc: "C\u2019est la semaine ou HubSpot commence a travailler pour vous. On met en place les workflows qui automatisent les taches repetitives, les sequences qui structurent la prospection, et le scoring qui priorise les leads. Chaque automatisation est testee et validee avant mise en production.",
    details: [
      "Creation des workflows de lead routing (assignation automatique)",
      "Configuration des sequences de prospection (3-5 sequences)",
      "Mise en place du lead scoring (demographique + comportemental)",
      "Creation des templates d\u2019emails commerciaux (5-10 templates)",
      "Configuration des notifications internes (nouveau lead, deal stagne)",
      "Parametrage des taches automatiques (relances, follow-ups)",
      "Mise en place des SLA inter-equipes (temps de reponse lead)",
      "Configuration des snippets et documents commerciaux",
    ],
    color: "#6D00CC",
  },
  {
    week: "Semaine 4",
    title: "Dashboards, reporting et formation equipe",
    desc: "La derniere semaine est consacree a la visibilite et a l\u2019adoption. On construit les dashboards qui permettent de piloter l\u2019activite, on forme chaque membre de l\u2019equipe sur ses process specifiques, et on s\u2019assure que tout le monde est autonome avant de partir.",
    details: [
      "Creation du dashboard commercial (pipeline, forecast, activite)",
      "Creation du dashboard management (KPI equipe, conversion, velocity)",
      "Configuration des rapports personnalises (par rep, par source, par periode)",
      "Parametrage des goals individuels et collectifs",
      "Formation commerciaux : contacts, deals, sequences, taches (2h)",
      "Formation managers : dashboards, reporting, coaching (2h)",
      "Formation admin : configuration, proprietes, workflows (2h)",
      "Documentation interne personnalisee (playbook HubSpot)",
    ],
    color: "#22C55E",
  },
];

const includedItems = [
  { category: "Configuration technique", items: ["1 pipeline deals entierement configure", "Jusqu\u2019a 50 proprietes custom creees et documentees", "Permissions et roles pour l\u2019ensemble de l\u2019equipe", "Integration email pour chaque utilisateur", "Tracking code et parametrage RGPD"], color: "#FF7A59" },
  { category: "Donnees", items: ["Import jusqu\u2019a 50 000 contacts", "Deduplication et nettoyage complet", "Mapping et validation des champs", "Enrichissement de base (secteur, taille)", "Associations contacts-entreprises-deals"], color: "#4B5EFC" },
  { category: "Automatisations", items: ["5 a 10 workflows cles configures", "3 a 5 sequences de prospection", "Lead scoring demographique + comportemental", "Lead routing automatique", "Notifications et alertes internes"], color: "#6D00CC" },
  { category: "Templates et contenu", items: ["5 a 10 templates d\u2019emails personnalises", "Snippets pour les reponses frequentes", "Documents commerciaux centralises", "Playbook de prospection dans HubSpot", "Modeles de taches et rappels"], color: "#6C5CE7" },
  { category: "Dashboards et reporting", items: ["2 a 3 dashboards personnalises", "10+ rapports custom", "Goals individuels et collectifs configures", "Rapport de forecast pipeline", "Vue activite par commercial"], color: "#22C55E" },
  { category: "Formation et support", items: ["6 heures de formation en direct (visio)", "3 sessions distinctes (commerciaux, managers, admin)", "Documentation interne personnalisee (20+ pages)", "Enregistrement video des sessions", "Support post-onboarding 30 jours inclus"], color: "#D4A27F" },
];

const comparisonTable = [
  { critere: "Duree de deploiement", seul: "3 a 6 mois", ceres: "4 semaines" },
  { critere: "Qualite de la configuration", seul: "Approximative (tutoriels YouTube)", ceres: "Best practices, validees sur 250+ projets" },
  { critere: "Taux d\u2019adoption equipe", seul: "30-40%", ceres: "90%+" },
  { critere: "Donnees propres et structurees", seul: "Doublons, champs vides, formats inconstants", ceres: "Nettoyees, dedupl., enrichies" },
  { critere: "Workflows et automatisations", seul: "0 a 2, souvent mal configures", ceres: "5 a 10, testes et documentes" },
  { critere: "Dashboards exploitables", seul: "Dashboard par defaut inutilise", ceres: "2-3 dashboards custom + 10 rapports" },
  { critere: "Formation equipe", seul: "Auto-formation (Academy)", ceres: "6h+ de formation contextuelle sur VOS process" },
  { critere: "Documentation interne", seul: "Inexistante", ceres: "Playbook personnalise 20+ pages" },
  { critere: "Support post-lancement", seul: "Forum communautaire", ceres: "30 jours de support reactif inclus" },
  { critere: "Couts caches", seul: "Consultant a appeler en urgence, formation a refaire, nettoyage donnees", ceres: "Prix forfaitaire, tout inclus" },
  { critere: "Time-to-value", seul: "6-12 mois avant ROI", ceres: "ROI mesurable des le mois 2" },
];

const hubOnboarding = [
  {
    hub: "Sales Hub",
    title: "Onboarding Sales Hub",
    desc: "Le Sales Hub est le coeur de votre machine commerciale. L\u2019onboarding Sales Hub couvre tout ce dont vos commerciaux ont besoin pour prospecter, suivre leurs deals et atteindre leurs objectifs. On configure le pipeline, on met en place les sequences, on cree les templates, on forme l\u2019equipe sur les outils qu\u2019ils utiliseront chaque jour.",
    items: ["Pipeline deals avec etapes, probabilites et proprietes obligatoires", "Sequences de prospection multicanal (email + taches)", "Templates d\u2019emails personnalises et snippets", "Lead scoring et lead routing automatique", "Playbooks de vente et guides conversationnels", "Forecast et objectifs individuels", "Integration calendrier pour la prise de rendez-vous", "Formation commerciaux sur leur workflow quotidien"],
    color: "#FF7A59",
  },
  {
    hub: "Marketing Hub",
    title: "Onboarding Marketing Hub",
    desc: "Le Marketing Hub transforme votre generation de leads. L\u2019onboarding Marketing Hub couvre la configuration des formulaires, des landing pages, des workflows de nurturing et du reporting marketing. On connecte chaque point de contact a votre CRM pour une attribution complete et une collaboration fluide avec les Sales.",
    items: ["Formulaires de capture connectes au CRM", "Landing pages optimisees conversion", "Workflows de nurturing automatises (lead nurturing, onboarding)", "Configuration de l\u2019email marketing (templates, listes, segmentation)", "Attribution marketing multi-touch", "Integration avec les ads (Google, LinkedIn, Facebook)", "Dashboards marketing (trafic, leads, MQL, SQL)", "Scoring marketing et criteres de passage MQL vers SQL"],
    color: "#4B5EFC",
  },
  {
    hub: "Service Hub",
    title: "Onboarding Service Hub",
    desc: "Le Service Hub structure votre support client et votre satisfaction. L\u2019onboarding Service Hub couvre la mise en place du pipeline de tickets, de la base de connaissances, des SLA et du reporting satisfaction. Vos equipes support gagnent en efficacite et vos clients en experience.",
    items: ["Pipeline de tickets avec statuts et priorites", "Boite de reception partagee et assignation automatique", "Base de connaissances (FAQ, guides, tutoriels)", "SLA de reponse et de resolution configurees", "Workflows de routage et d\u2019escalade", "Enquetes de satisfaction (NPS, CSAT, CES)", "Dashboards support (temps de reponse, resolution, satisfaction)", "Formation equipe support sur les process HubSpot"],
    color: "#6C5CE7",
  },
];

const formationDetails = [
  { title: "Formation contextuelle, pas generique", desc: "On ne fait pas de formation HubSpot generique. Chaque session est construite autour de VOS donnees, VOS pipelines, VOS workflows. Les commerciaux apprennent a utiliser HubSpot sur leurs vrais contacts, leurs vrais deals, leurs vrais emails. La retention est 3x superieure a une formation standard.", color: "#FF7A59" },
  { title: "3 sessions adaptees par role", desc: "Session commerciaux (2h) : navigation contacts, gestion deals, sequences, taches quotidiennes. Session managers (2h) : dashboards, reporting, coaching, forecast. Session admin (2h) : configuration proprietes, workflows, permissions, maintenance. Chaque role apprend exactement ce dont il a besoin.", color: "#4B5EFC" },
  { title: "Playbook et documentation interne", desc: "On produit un document de 20+ pages qui decrit chaque process dans HubSpot : comment creer un contact, comment faire avancer un deal, comment lancer une sequence, comment lire un dashboard. Ce document est votre reference interne pour former les futurs collaborateurs.", color: "#6D00CC" },
  { title: "Videos des sessions", desc: "Chaque session de formation est enregistree et livree en video. Vos equipes peuvent revoir les formations a leur rythme. Les nouveaux arrivants ont acces aux memes contenus. Pas besoin de reprogrammer une formation a chaque recrutement.", color: "#22C55E" },
  { title: "Support post-onboarding 30 jours", desc: "Apres la formation, on reste disponible pendant 30 jours pour repondre aux questions, ajuster les configurations, debloquer les situations. Par email ou visio, temps de reponse sous 24h. C\u2019est la periode ou les equipes ont le plus de questions : on est la.", color: "#6C5CE7" },
];

const caseStudies = [
  { client: "Elax Energie", sector: "Energie / Cleantech", challenge: "Score d\u2019adoption HubSpot a 17/100 apres un deploiement interne bacle. Donnees mal structurees, aucun workflow, dashboards vides. Equipe commerciale retournee aux tableurs.", results: ["Score d\u2019adoption passe de 17 a 76 en 8 semaines", "Pipeline structure avec 5 etapes et proprietes obligatoires", "12 workflows mis en production", "3 dashboards custom pour le management", "Adoption equipe a 85%+ en 2 mois"], link: "/cas-clients/elax-energie", color: "#FF7A59" },
  { client: "Kameleoon", sector: "SaaS / A/B Testing", challenge: "Onboarding complet lors du passage a HubSpot. Besoin de deployer Sales Hub + Marketing Hub pour 40+ utilisateurs avec des process complexes de qualification et de routing.", results: ["Adoption superieure a 90% des le premier mois", "25+ workflows deployes (routing, scoring, nurturing)", "Sequences de prospection structurees par segment", "Reporting unifie marketing-sales", "Autonomie complete de l\u2019equipe apres 4 semaines"], link: "/cas-clients/kameleoon", color: "#4B5EFC" },
];

const pricingTiers = [
  {
    titre: "Setup Basique",
    budget: "5 000 - 8 000 EUR",
    desc: "Ideal pour les petites equipes (2-5 utilisateurs) qui demarrent sur HubSpot avec des besoins simples. Un Hub, un pipeline, des fondations solides.",
    items: [
      "1 Hub configure (Sales ou Marketing)",
      "1 pipeline deals",
      "Jusqu\u2019a 20 proprietes custom",
      "Import jusqu\u2019a 10 000 contacts",
      "3 workflows de base",
      "2 templates d\u2019emails",
      "1 dashboard + 5 rapports",
      "3 heures de formation",
      "Documentation de base",
    ],
    color: "#22C55E",
  },
  {
    titre: "Setup Complet",
    budget: "8 000 - 15 000 EUR",
    desc: "Pour les equipes de 5-20 utilisateurs qui veulent un CRM entierement operationnel avec automatisations, scoring et reporting avance. Notre formule la plus populaire.",
    popular: true,
    items: [
      "2 Hubs configures (Sales + Marketing ou Service)",
      "1-2 pipelines deals",
      "Jusqu\u2019a 50 proprietes custom",
      "Import jusqu\u2019a 50 000 contacts avec nettoyage",
      "5-10 workflows",
      "3-5 sequences de prospection",
      "Lead scoring configure",
      "5-10 templates d\u2019emails",
      "2-3 dashboards + 10 rapports",
      "6 heures de formation (3 sessions)",
      "Playbook personnalise",
      "Support 30 jours post-onboarding",
    ],
    color: "#4B5EFC",
  },
  {
    titre: "Setup avec Migration",
    budget: "10 000 - 25 000 EUR",
    desc: "Pour les entreprises qui migrent depuis un autre CRM (Salesforce, Pipedrive, Dynamics, etc.) et veulent un deploiement complet avec transfert de donnees et reconstruction des automatisations.",
    items: [
      "Tout le Setup Complet inclus",
      "Audit de l\u2019ancien CRM",
      "Migration complete des donnees",
      "Reconstruction des workflows existants",
      "Custom objects si necessaire",
      "Integrations tierces (jusqu\u2019a 3)",
      "Double-run 2-4 semaines",
      "8+ heures de formation",
      "Support 30 jours post-migration",
    ],
    color: "#6D00CC",
  },
];

const faqItems = [
  { q: "Combien de temps faut-il pour deployer HubSpot ?", a: "4 semaines pour un onboarding complet : configuration, import, automatisations, dashboards et formation. Pour les projets avec migration depuis un autre CRM, comptez 8 a 16 semaines selon la complexite. L\u2019appel de cadrage permet d\u2019estimer precisement la duree pour votre cas." },
  { q: "Peut-on faire l\u2019onboarding HubSpot soi-meme ?", a: "Techniquement oui, avec HubSpot Academy et les tutoriels en ligne. En pratique, les entreprises qui font leur onboarding seules mettent 3 a 6 mois au lieu de 4 semaines, atteignent un taux d\u2019adoption de 30-40% au lieu de 90%, et finissent souvent par appeler un consultant pour corriger les erreurs. Le cout de correction depasse systematiquement le cout de l\u2019onboarding." },
  { q: "Que comprend exactement l\u2019onboarding HubSpot ?", a: "Configuration du compte (users, permissions, pipeline, proprietes), import et nettoyage des donnees, mise en place des automatisations (workflows, sequences, scoring), creation des dashboards et rapports, et formation de l\u2019equipe (6h en 3 sessions). Tout est detaille dans un document de cadrage avant le demarrage." },
  { q: "Est-ce que l\u2019onboarding est obligatoire avec HubSpot ?", a: "HubSpot impose un onboarding payant pour les licences Pro et Enterprise (a partir de 3 000 EUR pour le Pro). Vous pouvez choisir de le faire avec HubSpot directement ou avec un partenaire certifie comme Ceres. L\u2019avantage du partenaire : on configure pour vous au lieu de vous guider, et c\u2019est souvent moins cher." },
  { q: "Quelle est la difference entre l\u2019onboarding HubSpot et celui de Ceres ?", a: "L\u2019onboarding HubSpot est un accompagnement guide : on vous dit quoi faire, vous le faites. L\u2019onboarding Ceres est un deploiement complet : on configure, on importe, on automatise, on forme. Vous n\u2019avez rien a faire techniquement. A la fin, votre CRM est operationnel et vos equipes sont formees." },
  { q: "Combien de contacts peut-on importer pendant l\u2019onboarding ?", a: "Jusqu\u2019a 50 000 contacts pour le setup complet, davantage pour les projets avec migration. L\u2019import inclut le nettoyage (deduplication, standardisation des formats) et la validation (associations, champs obligatoires). On ne fait pas de simple copier-coller : chaque donnee est verifiee." },
  { q: "Est-ce que vous formez nos equipes ?", a: "Oui, 6 heures minimum reparties en 3 sessions : commerciaux (2h), managers (2h), admin (2h). La formation est contextuelle (sur VOS donnees, VOS process) et enregistree en video pour les futurs collaborateurs. On produit aussi un playbook interne de 20+ pages." },
  { q: "Que se passe-t-il apres l\u2019onboarding ?", a: "30 jours de support reactif inclus (reponse sous 24h). Apres, vous etes autonome grace a la formation et la documentation. Si vous souhaitez un accompagnement continu, on propose des formules RevOps Part-Time a partir de 2 000 EUR/mois." },
  { q: "On a deja HubSpot mais il est mal configure. Vous pouvez corriger ?", a: "Oui, c\u2019est un cas frequent. On fait d\u2019abord un audit de votre instance (gratuit dans le cadre d\u2019un projet), puis on propose un plan de remediation : nettoyage donnees, restructuration pipeline, creation workflows manquants, formation. Budget typique : 5 000-12 000 EUR selon l\u2019etat du CRM." },
  { q: "Quels Hubs HubSpot couvrez-vous ?", a: "Sales Hub, Marketing Hub et Service Hub. Chaque Hub a son propre scope d\u2019onboarding. Le plus frequent : Sales Hub seul ou Sales + Marketing. On peut aussi configurer Operations Hub et CMS Hub en complement." },
  { q: "Comment se passe le demarrage d\u2019un projet d\u2019onboarding ?", a: "Appel de cadrage gratuit (30 min) pour comprendre vos besoins, votre equipe, vos objectifs. On envoie une proposition detaillee avec le scope, le planning et le prix. Validation, signature, demarrage sous 1 semaine. Premiere semaine : configuration du compte. Quatrieme semaine : formation et mise en production." },
  { q: "Est-ce que l\u2019onboarding inclut les integrations tierces ?", a: "Le setup basique n\u2019inclut pas d\u2019integrations. Le setup complet inclut la configuration des integrations natives (email, calendrier, LinkedIn Sales Navigator). Le setup avec migration inclut jusqu\u2019a 3 integrations tierces (ERP, facturation, enrichissement). Au-dela, c\u2019est chiffre en complement." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Onboarding HubSpot", provider: { "@type": "Organization", name: "Ceres" }, description: "Deploiement et configuration HubSpot professionnels en 4 semaines. Import donnees, workflows, dashboards, formation equipe. Partenaire certifie, 250+ clients.", serviceType: "CRM Onboarding", areaServed: { "@type": "Country", name: "France" } },
  { "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
]};

/* ─── CHECKMARK SVG ─── */
const Check = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
    <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── PAGE ─── */

export default function OnboardingHubSpotPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── HERO ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Onboarding HubSpot</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Onboarding HubSpot : operationnel en 4 semaines
          </h1>
          <p className="text-[17px] text-[#666] max-w-[600px] mx-auto leading-[1.7] mb-4">
            Deploiement complet de votre HubSpot : configuration, import de donnees, workflows, dashboards et formation. Votre CRM est pret, vos equipes sont formees, vous pouvez vendre. En 4 semaines, pas en 6 mois.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=64" alt="HubSpot" width={22} height={22} className="rounded-sm" />
            <span className="text-[13px] text-[#999]">Partenaire certifie HubSpot | 250+ clients accompagnes</span>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Planifier mon onboarding
          </Link>
        </section>
        <Connector />

        {/* ── POURQUOI L'ONBOARDING EST CRITIQUE ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le probleme</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Pourquoi l&apos;onboarding HubSpot est critique</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Un CRM mal deploye coute plus cher qu&apos;un CRM bien deploye. L&apos;onboarding n&apos;est pas une option, c&apos;est la fondation de tout ce qui suit.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyOnboardingMatters.map((item) => (
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

        {/* ── PROGRAMME SEMAINE PAR SEMAINE ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Programme</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Notre programme d&apos;onboarding semaine par semaine</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">4 semaines, 4 phases. Chaque semaine a un objectif clair, des livrables definis, et un point de validation avant de passer a la suivante.</p>
          </div>
          {/* CSS Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#E8E8E8] hidden md:block" />
            <div className="space-y-4">
              {weeklyProgram.map((week, idx) => (
                <div key={week.week} className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] top-5 w-4 h-4 rounded-full border-2 border-white shadow-sm hidden md:block" style={{ backgroundColor: week.color }} />
                  <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: week.color + "15", color: week.color }}>{week.week}</span>
                      <h3 className="text-[15px] font-semibold text-[#111]">{week.title}</h3>
                    </div>
                    <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{week.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {week.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-[11px] text-[#666]">
                          <span className="mt-[3px]"><Check /></span>{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── CE QUI EST INCLUS ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Inclus</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Ce qui est inclus dans l&apos;onboarding</h2>
              <p className="text-[13px] text-white/40">Detail complet des livrables pour un onboarding Setup Complet. Pas de surprise, tout est liste et chiffre.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedItems.map((cat) => (
                <div key={cat.category} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: cat.color }} />
                    <h3 className="text-[13px] font-semibold text-white">{cat.category}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[11px] text-white/50">
                        <span className="mt-[3px]"><Check /></span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── ONBOARDING SEUL VS AVEC CERES ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Comparatif</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Onboarding seul vs avec Ceres</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">La question n&apos;est pas de savoir si vous etes capables de configurer HubSpot seuls. C&apos;est de savoir combien de temps et d&apos;argent vous etes prets a perdre en le faisant.</p>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-4 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#E8E8E8]">
                  <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4 w-[30%]">Critere</th>
                  <th className="text-[12px] font-semibold text-[#999] pb-3 pr-4 w-[35%]">En autonomie</th>
                  <th className="text-[12px] font-semibold text-[#111] pb-3 w-[35%]">Avec Ceres</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className="border-b border-[#F2F2F2]">
                    <td className="text-[12px] font-medium text-[#111] py-3 pr-4">{row.critere}</td>
                    <td className="text-[11px] text-[#999] py-3 pr-4">{row.seul}</td>
                    <td className="text-[11px] text-[#22C55E] py-3">{row.ceres}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <Connector />

        {/* ── ONBOARDING PAR HUB ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Par Hub</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Onboarding adapte a chaque Hub</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Chaque Hub HubSpot a ses specificites. L&apos;onboarding est different pour Sales, Marketing et Service. Voici ce que couvre chaque deploiement.</p>
          </div>
          <div className="space-y-4">
            {hubOnboarding.map((hub) => (
              <div key={hub.hub} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: hub.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{hub.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{hub.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {hub.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-[#666]">
                      <span className="mt-[3px]"><Check /></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── FORMATION ET ADOPTION ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Formation</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Formation et adoption : comment on fait en sorte que ca tienne</h2>
              <p className="text-[13px] text-white/40">L&apos;onboarding ne s&apos;arrete pas a la configuration. Un CRM bien configure mais mal adopte est un CRM inutile. Voici comment on s&apos;assure que vos equipes utilisent reellement HubSpot.</p>
            </div>
            <div className="space-y-3">
              {formationDetails.map((item) => (
                <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── CAS CLIENTS ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Onboardings reussis : resultats concrets</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Des entreprises qui ont choisi un onboarding HubSpot structure. Scores d&apos;adoption, metriques, resultats mesurables.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: cs.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{cs.client}</h3>
                </div>
                <p className="text-[11px] text-[#999] mb-3">{cs.sector}</p>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{cs.challenge}</p>
                <ul className="space-y-1.5 mb-4">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <Check />{r}
                    </li>
                  ))}
                </ul>
                <Link href={cs.link} className="inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#666] transition-colors">
                  Voir le cas client
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── TARIFS ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Tarifs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Tarifs d&apos;onboarding HubSpot</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Prix au forfait, pas de surprises. Chaque formule inclut un scope precis, un planning defini et des livrables documentes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricingTiers.map((tier) => (
              <div key={tier.titre} className={`rounded-2xl border bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col ${tier.popular ? "border-[#4B5EFC] ring-1 ring-[#4B5EFC]/20" : "border-[#E8E8E8]"}`}>
                {tier.popular && (
                  <span className="inline-flex self-start items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#4B5EFC]/10 text-[#4B5EFC] mb-3">Le plus populaire</span>
                )}
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: tier.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{tier.titre}</h3>
                </div>
                <div className="mb-3">
                  <span className="text-[16px] font-bold text-[#111]">{tier.budget}</span>
                </div>
                <p className="text-[11px] text-[#777] leading-[1.65] mb-4">{tier.desc}</p>
                <ul className="space-y-1.5 mt-auto">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-[#666]">
                      <span className="mt-[3px]"><Check /></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── FAQ ── */}
        <section className="mb-0">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur l&apos;onboarding HubSpot</h2>
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

        {/* ── CTA ── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a deployer HubSpot ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">On cadre votre onboarding en 30 min : scope, planning, budget. Appel gratuit et sans engagement. Demarrage sous 1 semaine.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Planifier mon appel de cadrage
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
