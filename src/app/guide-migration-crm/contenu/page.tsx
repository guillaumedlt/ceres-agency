"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

/* ──────────────────────── JSON-LD ──────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Guide Migration CRM : contenu complet des 10 chapitres",
  description:
    "Le guide migration CRM le plus complet en francais. Comparatif 7 CRM 2026, methodologie, mapping, nettoyage, tests et adoption. Cas clients TotalEnergies, Dougs, HiPay.",
  author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  publisher: {
    "@type": "Organization",
    name: "Ceres",
    url: "https://ceres.agency",
    logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" },
  },
  datePublished: "2026-03-15",
  dateModified: "2026-03-27",
  inLanguage: "fr",
  mainEntityOfPage: "https://ceres.agency/guide-migration-crm/contenu",
  wordCount: 9200,
  articleSection: "CRM",
  keywords:
    "migration CRM, comparatif CRM 2026, HubSpot, Salesforce, Attio, Folk, Pipedrive, Odoo, changer de CRM, mapping CRM, nettoyage donnees CRM",
};

/* ──────────────────────── Chapters sidebar data ──────────────────────── */
const chapters = [
  { id: "ch1", num: "01", title: "Quand faut-il changer de CRM" },
  { id: "ch2", num: "02", title: "Comparatif CRM 2026" },
  { id: "ch3", num: "03", title: "Comment choisir le bon CRM" },
  { id: "ch4", num: "04", title: "Preparer sa migration" },
  { id: "ch5", num: "05", title: "Nettoyage et enrichissement" },
  { id: "ch6", num: "06", title: "Mapping des champs" },
  { id: "ch7", num: "07", title: "Migration technique" },
  { id: "ch8", num: "08", title: "Tests et validation" },
  { id: "ch9", num: "09", title: "Formation et adoption" },
  { id: "ch10", num: "10", title: "Les 30 premiers jours" },
];

/* ──────────────────────── CRM Data ──────────────────────── */
const crmData = [
  {
    name: "HubSpot",
    domain: "hubspot.com",
    pricing: "Gratuit a 4 700 $/mois",
    ai: "Breeze AI (GPT-5 depuis janvier 2026)",
    description:
      "Plateforme tout-en-un couvrant CRM, marketing, ventes, service client et CMS. HubSpot est devenu le leader inconteste du mid-market en 2026 grace a Breeze AI, son moteur d\u2019intelligence artificielle integre qui genere des emails, resume les appels, score les leads et propose des next best actions en temps reel.",
    strengths: [
      "Interface intuitive, adoption rapide (3 a 5 jours en moyenne)",
      "All-in-one : CRM + Marketing Hub + Sales Hub + Service Hub + CMS",
      "Ecosysteme de plus de 1 700 integrations natives dans le Marketplace",
      "Breeze AI integre nativement (scoring, generation, resume)",
      "Reporting avance avec custom report builder et AI insights",
      "Communaute francophone active, HubSpot Academy gratuite",
    ],
    weaknesses: [
      "Couteux a l\u2019echelle : systeme de credits marketing, prix par siege",
      "Onboarding obligatoire ($3 000 a $8 000) sur les plans Pro et Enterprise",
      "Personnalisation limitee par rapport a Salesforce (custom objects restreints)",
      "Verrouillage contractuel annuel sans remboursement",
      "Limites sur les workflows en plan Starter (10 max)",
    ],
    idealFor: "PME et ETI de 15 a 500 personnes cherchant a aligner marketing et ventes sur une plateforme unique.",
    migrateTo: "Quand votre outil actuel ne couvre pas le marketing automation, quand vous voulez un CRM adopte rapidement sans profil technique, quand vous cherchez un ecosysteme tout-en-un.",
    migrateAway: "Quand vous depassez 500 utilisateurs avec des processus tres complexes, quand vous avez besoin de custom objects illimites, quand le budget devient prohibitif.",
    color: "#FF7A59",
  },
  {
    name: "Salesforce",
    domain: "salesforce.com",
    pricing: "$25 a $550/utilisateur/mois",
    ai: "Einstein AI / Agentforce",
    description:
      "Le CRM enterprise de reference avec la plus grande part de marche mondiale. Salesforce offre une personnalisation quasi infinie grace a son ecosysteme Apex, Flow Builder et AppExchange. En 2026, Agentforce transforme Salesforce en plateforme d\u2019agents IA autonomes capables de gerer des taches complexes sans intervention humaine.",
    strengths: [
      "Personnalisation infinie : custom objects, Apex, Lightning Components",
      "AppExchange : plus de 7 000 applications et integrations",
      "Reporting et analytics les plus puissants du marche",
      "Agentforce : agents IA autonomes pour service, ventes, marketing",
      "Scalabilite eprouvee : de 10 a 100 000+ utilisateurs",
      "Conformite enterprise : SOC 2, HIPAA, FedRAMP, RGPD",
    ],
    weaknesses: [
      "Cout total reel 3 a 5 fois le prix de licence (implementation $50K a $150K)",
      "Complexite : necessite un admin Salesforce dedie (ou une equipe)",
      "Courbe d\u2019apprentissage de 2 a 4 semaines pour les utilisateurs",
      "UX datee sur certains modules (Classic encore present)",
      "Dependance aux consultants et integrateurs certifies",
    ],
    idealFor: "Grandes entreprises et ETI de plus de 200 personnes avec des processus metier complexes et un budget consequent.",
    migrateTo: "Quand vos processus sont trop complexes pour HubSpot, quand vous avez besoin de custom objects illimites, quand vous avez une equipe ops dediee.",
    migrateAway: "Quand votre equipe n\u2019utilise pas 80% des fonctionnalites, quand le TCO explose sans ROI visible, quand l\u2019adoption est inferieure a 50%.",
    color: "#00A1E0",
  },
  {
    name: "Attio",
    domain: "attio.com",
    pricing: "Gratuit a environ $86/utilisateur/mois",
    ai: "AI natif (enrichissement, scoring)",
    description:
      "CRM de nouvelle generation, API-first, avec une interface inspiree de Notion. Attio a connu une croissance fulgurante en 2025-2026 aupres des startups tech et des fonds de venture capital. Son modele de donnees flexible permet de creer n\u2019importe quelle structure sans code. Note 9.4/10 sur G2 pour la personnalisation.",
    strengths: [
      "UX moderne et epuree, adoption immediate par les equipes tech",
      "Modele de donnees totalement flexible (custom objects, relations)",
      "API puissante et bien documentee, webhooks natifs",
      "Enrichissement automatique des contacts et entreprises",
      "Setup en moins d\u2019une heure pour une equipe de 10",
      "Tarification transparente sans couts caches",
    ],
    weaknesses: [
      "Produit jeune : certaines fonctionnalites encore en beta",
      "Ecosysteme d\u2019integrations limite (200 environ vs 1 700 HubSpot)",
      "Pas de Marketing Hub integre (email, landing pages, forms)",
      "Reporting moins avance que HubSpot ou Salesforce",
      "Support principalement en anglais",
    ],
    idealFor: "Startups et scale-ups tech de 10 a 100 personnes qui veulent un CRM moderne, flexible et rapide a deployer.",
    migrateTo: "Quand vous cherchez un CRM moderne avec une API solide, quand votre equipe est tech-savvy et veut un outil flexible, quand Notion ne suffit plus.",
    migrateAway: "Quand vous avez besoin de marketing automation integre, quand vous depassez 100 utilisateurs avec des besoins enterprise.",
    color: "#000000",
  },
  {
    name: "Folk",
    domain: "folk.app",
    pricing: "$20 a $80/utilisateur/mois",
    ai: "AI assist (templates, enrichissement)",
    description:
      "CRM francais pense pour la gestion de relations. Folk se distingue par son integration native avec LinkedIn, un setup en 20 minutes et une note parfaite de 5/5 sur G2. Ideal pour les equipes qui gerent des relations (agences, recruteurs, VCs, consultants) plutot que des pipelines de vente classiques.",
    strengths: [
      "Setup ultra-rapide : 20 minutes pour etre operationnel",
      "Import LinkedIn natif : un clic pour importer un profil",
      "Interface simple et elegante, courbe d\u2019apprentissage quasi nulle",
      "Note 5/5 sur G2, satisfaction client exceptionnelle",
      "Support francais reactif (equipe basee a Paris)",
      "Enrichissement de contacts integre (email finder)",
    ],
    weaknesses: [
      "Reporting limite : pas de dashboards avances ni de custom reports",
      "Peu d\u2019integrations natives (50 environ, principalement via Zapier)",
      "Pas adapte aux pipelines de vente complexes (multi-pipeline, weighted)",
      "Pas de marketing automation (pas d\u2019emails en masse, pas de workflows)",
      "Limites pour les equipes de plus de 30 personnes",
    ],
    idealFor: "Agences, cabinets de recrutement, consultants et petites equipes de 5 a 30 personnes qui gerent des relations.",
    migrateTo: "Quand vous gerez des relations plutot que des deals, quand LinkedIn est votre source principale, quand vous voulez un CRM simple et francais.",
    migrateAway: "Quand vous avez besoin de reporting avance, quand votre pipeline de vente devient complexe, quand vous depassez 30 utilisateurs.",
    color: "#6C5CE7",
  },
  {
    name: "Pipedrive",
    domain: "pipedrive.com",
    pricing: "$14 a $79/siege/mois (restructure fevrier 2026)",
    ai: "AI Sales Assistant",
    description:
      "CRM centre sur la vente avec le meilleur pipeline visuel du marche. Pipedrive a restructure ses plans en fevrier 2026 pour simplifier son offre. Tres populaire aupres des equipes commerciales pures qui veulent un outil simple pour suivre leurs deals sans fonctionnalites superflues.",
    strengths: [
      "Meilleur pipeline visuel du marche (drag-and-drop intuitif)",
      "Interface simple, adoption en 1 a 2 jours",
      "Prix d\u2019entree abordable ($14/siege/mois)",
      "AI Sales Assistant pertinent pour les suggestions de next steps",
      "Application mobile solide pour les commerciaux terrain",
      "Marketplace de plus de 400 integrations",
    ],
    weaknesses: [
      "Les add-ons font exploser la facture (LeadBooster, Campaigns, Projects : total pouvant depasser $250/mois)",
      "Marketing automation tres basique (Campaigns est un emailing simple)",
      "Reporting limite sur les plans Starter et Advanced",
      "Pas de Service Hub ni de ticketing integre",
      "Personnalisation limitee des objets et des champs",
    ],
    idealFor: "Equipes commerciales de 5 a 50 personnes qui veulent un CRM de vente simple, visuel et abordable.",
    migrateTo: "Quand vous avez juste besoin d\u2019un pipeline de vente visuel, quand votre equipe est 100% commerciale, quand le budget est serre.",
    migrateAway: "Quand vous avez besoin de marketing automation, quand les add-ons rendent le prix equivalent a HubSpot Pro, quand le reporting ne suffit plus.",
    color: "#017737",
  },
  {
    name: "Odoo",
    domain: "odoo.com",
    pricing: "Gratuit (open source) a $37,40/utilisateur/mois (Enterprise)",
    ai: "Odoo AI (integre 2025)",
    description:
      "Suite ERP complete avec plus de 80 applications couvrant CRM, comptabilite, inventaire, RH, fabrication et e-commerce. Odoo est le choix ideal pour les PME qui veulent un systeme unifie a un prix imbattable. La version Community est gratuite et open source.",
    strengths: [
      "Suite complete : CRM + comptabilite + inventaire + RH au prix d\u2019un seul CRM",
      "Version open source gratuite (Community) pour les budgets serres",
      "Plus de 80 modules couvrant tous les besoins d\u2019une entreprise",
      "Personnalisation possible via Python/XML (Odoo Studio pour le no-code)",
      "Communaute active de developpeurs et d\u2019integrateurs",
      "Hebergement au choix : cloud Odoo, on-premise, ou tiers",
    ],
    weaknesses: [
      "Interface utilisateur datee par rapport aux CRM modernes",
      "Courbe d\u2019apprentissage importante (2 a 4 semaines minimum)",
      "La personnalisation avancee necessite des competences techniques",
      "Support limite sur la version Community (forums uniquement)",
      "Mises a jour entre versions majeures parfois complexes",
    ],
    idealFor: "PME de 20 a 200 personnes qui ont besoin d\u2019un ERP complet (CRM + compta + stock) a un prix accessible.",
    migrateTo: "Quand vous avez besoin d\u2019un ERP complet en plus du CRM, quand le budget est une contrainte forte, quand vous avez des competences techniques en interne.",
    migrateAway: "Quand l\u2019UX freine l\u2019adoption, quand vous avez besoin d\u2019un marketing automation puissant, quand vous voulez un CRM moderne et rapide a deployer.",
    color: "#714B67",
  },
  {
    name: "Notion",
    domain: "notion.so",
    pricing: "$0 a $18/utilisateur/mois",
    ai: "Notion AI ($10/mois en supplement)",
    description:
      "Notion n\u2019est PAS un CRM. C\u2019est un outil de documentation et de gestion de projets que certaines equipes detournent pour gerer leurs contacts. Si vous avez moins de 200 contacts et aucune exigence d\u2019automatisation, Notion peut depanner. Au-dela, c\u2019est une impasse.",
    strengths: [
      "Flexible : bases de donnees, vues kanban, calendrier, formulaires",
      "Prix imbattable ($0 a $18/utilisateur/mois)",
      "Vos equipes l\u2019utilisent probablement deja",
      "Templates CRM gratuits disponibles en ligne",
      "Notion AI pour resumer des notes et generer du contenu",
      "Ideal comme complement d\u2019un vrai CRM (documentation, playbooks)",
    ],
    weaknesses: [
      "AUCUN tracking d\u2019emails (pas d\u2019ouverture, pas de clic)",
      "AUCUNE automation native (pas de workflows, pas de sequences)",
      "AUCUN enrichissement de donnees",
      "AUCUN reporting commercial (pas de pipeline, pas de forecast)",
      "AUCUNE gestion des activites de vente (appels, meetings, taches)",
      "Pas de gestion de pipeline avec probabilites et montants",
    ],
    idealFor: "Solopreneurs et freelances avec moins de 200 contacts et aucun besoin d\u2019automatisation.",
    migrateTo: "Quand vous n\u2019avez aucun budget et moins de 200 contacts a gerer. C\u2019est un depannage, pas une solution.",
    migrateAway: "Des que vous depassez 200 contacts, des que vous avez besoin d\u2019automatisation, de reporting ou de suivi d\u2019emails. Bref, des que vous commencez a vendre serieusement.",
    color: "#000000",
  },
];

/* ──────────────────────── Big comparison table data ──────────────────────── */
const comparisonCriteria = [
  { label: "Prix d\u2019entree (par utilisateur/mois)", values: ["Gratuit", "$25", "Gratuit", "$20", "$14", "Gratuit", "$0"] },
  { label: "Prix plan complet", values: ["$4 700/mois", "$550/user", "~$86/user", "$80/user", "$79/siege", "$37,40/user", "$18/user"] },
  { label: "Cout total reel (TCO)", values: ["$$$", "$$$$$", "$$", "$$", "$$ a $$$", "$$", "$"] },
  { label: "Facilite de prise en main", values: ["A", "C", "A", "A+", "A", "C+", "A"] },
  { label: "Personnalisation", values: ["B+", "A+", "A", "B", "B", "A (dev)", "B+"] },
  { label: "Marketing automation", values: ["A", "A (Pardot)", "C", "D", "C", "B", "F"] },
  { label: "Reporting et dashboards", values: ["A", "A+", "B", "C", "B", "B", "D"] },
  { label: "Intelligence artificielle", values: ["A (Breeze)", "A (Agentforce)", "B+", "B", "B", "B", "B (Notion AI)"] },
  { label: "Integrations natives", values: ["1 700+", "7 000+", "~200", "~50", "400+", "80+ modules", "~100"] },
  { label: "API et webhooks", values: ["A", "A+", "A+", "B", "B+", "A", "B"] },
  { label: "Application mobile", values: ["A", "A", "B+", "B", "A", "B", "B+"] },
  { label: "Support en francais", values: ["Oui", "Oui", "Non", "Oui", "Oui", "Oui", "Non"] },
  { label: "Scalabilite (plus de 500 users)", values: ["B+", "A+", "C", "D", "C", "B", "D"] },
  { label: "Onboarding obligatoire", values: ["Oui ($3-8K)", "Non (mais $50K+ reco)", "Non", "Non", "Non", "Non", "Non"] },
  { label: "Open source", values: ["Non", "Non", "Non", "Non", "Non", "Oui", "Non"] },
  { label: "Ideal pour", values: ["15-500 pers.", "200+ pers.", "10-100 pers.", "5-30 pers.", "5-50 pers.", "20-200 pers.", "1-5 pers."] },
];

const crmHeaders = ["HubSpot", "Salesforce", "Attio", "Folk", "Pipedrive", "Odoo", "Notion"];

/* ──────────────────────── Mapping table data ──────────────────────── */
const mappingFields = [
  { source: "Account Name", sourceType: "Text", target: "Company Name", targetType: "Text", notes: "Mapping direct" },
  { source: "Account Owner", sourceType: "Lookup (User)", target: "Company Owner", targetType: "HubSpot Owner", notes: "Mapper les IDs utilisateurs" },
  { source: "Industry", sourceType: "Picklist", target: "Industry", targetType: "Dropdown", notes: "Verifier les valeurs du dropdown" },
  { source: "Annual Revenue", sourceType: "Currency", target: "Annual Revenue", targetType: "Number", notes: "Conversion devise si necessaire" },
  { source: "Website", sourceType: "URL", target: "Website URL", targetType: "Text", notes: "Mapping direct" },
  { source: "Phone", sourceType: "Phone", target: "Phone Number", targetType: "Phone number", notes: "Normaliser format E.164" },
  { source: "Billing Address", sourceType: "Address", target: "Address", targetType: "Text (multiple)", notes: "Eclater en rue, ville, CP, pays" },
  { source: "Contact.FirstName", sourceType: "Text", target: "First Name", targetType: "Text", notes: "Mapping direct" },
  { source: "Contact.LastName", sourceType: "Text", target: "Last Name", targetType: "Text", notes: "Mapping direct" },
  { source: "Contact.Email", sourceType: "Email", target: "Email", targetType: "Text", notes: "Deduplication sur ce champ" },
  { source: "Contact.Title", sourceType: "Text", target: "Job Title", targetType: "Text", notes: "Mapping direct" },
  { source: "Opportunity.Name", sourceType: "Text", target: "Deal Name", targetType: "Text", notes: "Mapping direct" },
  { source: "Opportunity.Amount", sourceType: "Currency", target: "Amount", targetType: "Number", notes: "Verifier la devise" },
  { source: "Opportunity.Stage", sourceType: "Picklist", target: "Deal Stage", targetType: "Dropdown", notes: "Mapper chaque etape individuellement" },
  { source: "Opportunity.CloseDate", sourceType: "Date", target: "Close Date", targetType: "Date picker", notes: "Format YYYY-MM-DD" },
  { source: "Task.Subject", sourceType: "Text", target: "Task Title", targetType: "Text", notes: "Mapping direct" },
  { source: "Task.ActivityDate", sourceType: "Date", target: "Due Date", targetType: "Date picker", notes: "Format YYYY-MM-DD" },
];

/* ──────────────────────── Component ──────────────────────── */
export default function GuideContenuPage() {
  const [activeChapter, setActiveChapter] = useState("ch1");
  const [progress, setProgress] = useState(0);
  const chapterRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight ? Math.min((scrollTop / docHeight) * 100, 100) : 0);

      let current = "ch1";
      for (const ch of chapters) {
        const el = chapterRefs.current[ch.id];
        if (el && el.getBoundingClientRect().top <= 160) {
          current = ch.id;
        }
      }
      setActiveChapter(current);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(id: string) {
    chapterRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setRef(id: string) {
    return (el: HTMLElement | null) => {
      chapterRefs.current[id] = el;
    };
  }

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Progress Bar ── */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#F0F0F0] z-50">
        <div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* ── Sticky Sidebar (desktop) ── */}
      <aside className="hidden xl:block fixed left-8 top-[140px] w-[220px] z-40">
        <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
        <nav className="space-y-1">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollTo(ch.id)}
              className={`block w-full text-left px-3 py-1.5 rounded-md text-[11px] transition-colors ${
                activeChapter === ch.id
                  ? "bg-[#4B5EFC]/10 text-[#4B5EFC] font-semibold"
                  : "text-[#999] hover:text-[#555]"
              }`}
            >
              <span className="font-mono mr-1.5">{ch.num}</span>
              {ch.title}
            </button>
          ))}
        </nav>
        <div className="mt-6 pt-4 border-t border-[#F0F0F0]">
          <Link
            href="/guide-migration-crm"
            className="text-[11px] text-[#4B5EFC] hover:underline"
          >
            Telecharger le guide PDF
          </Link>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 xl:ml-[300px] xl:mr-auto">

        {/* ── Breadcrumb ── */}
        <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/guide-migration-crm" className="hover:text-[#111] transition-colors">Guide Migration CRM</Link>
          <span>/</span>
          <span className="text-[#666]">Contenu complet</span>
        </nav>

        {/* ── Hero ── */}
        <header className="mb-16">
          <Badge>Guide complet - 10 chapitres</Badge>
          <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mt-4 mb-5">
            Guide Migration CRM : le contenu integral
          </h1>
          <p className="text-[16px] text-[#666] leading-[1.75] max-w-[600px] mb-6">
            Le guide le plus complet en francais pour reussir votre migration CRM en 2026. Comparatif de 7 CRM, methodologie pas a pas, cas clients reels (TotalEnergies, Dougs, HiPay), templates et checklists.
          </p>
          <div className="flex flex-wrap gap-4 text-[12px] text-[#999]">
            <span>Mis a jour : mars 2026</span>
            <span>Temps de lecture : 35 min</span>
            <span>10 chapitres</span>
          </div>
        </header>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 1 : Quand faut-il changer de CRM
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch1")} id="ch1" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">01</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Quand faut-il changer de CRM</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
            Changer de CRM est une decision structurante. C&apos;est un projet qui mobilise du temps, de l&apos;argent et de l&apos;energie. Mais rester sur un CRM inadapte coute souvent beaucoup plus cher que la migration elle-meme. Selon une etude Nucleus Research de 2025, les entreprises qui restent sur un CRM mal adapte perdent en moyenne 23% de productivite commerciale par an.
          </p>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Les 7 signaux d&apos;alerte</h3>

          <div className="space-y-3 mb-8">
            {[
              {
                signal: "Adoption inferieure a 40%",
                detail: "Moins de 4 commerciaux sur 10 utilisent le CRM quotidiennement. Les donnees sont saisies dans des Google Sheets paralleles. Le CRM devient un outil de reporting pour le management, pas un outil de travail pour les equipes. Chez Dougs, l\u2019adoption de Salesforce etait tombee a 32% avant leur migration vers HubSpot."
              },
              {
                signal: "Cout qui explose sans ROI visible",
                detail: "Votre facture CRM augmente chaque annee (add-ons, licences, consultants) mais le revenu par commercial stagne. Le ratio cout CRM / revenu genere devrait etre inferieur a 3%. Au-dela, il y a un probleme. Beaucoup d\u2019entreprises sur Salesforce paient $150-300K/an sans exploiter 60% des fonctionnalites."
              },
              {
                signal: "Reporting inexistant ou manuel",
                detail: "Vos managers exportent des CSV pour faire des rapports dans Excel. Aucun dashboard en temps reel. Les previsions de vente sont faites au doigt mouille. Un CRM moderne doit fournir des rapports exploitables sans effort supplementaire."
              },
              {
                signal: "Multiplication des outils (tool sprawl)",
                detail: "Vous utilisez 5 a 10 outils en parallele du CRM : un pour l\u2019emailing, un pour les formulaires, un pour le live chat, un pour les sequences. Chaque outil ajoute un cout, une integration a maintenir et un risque de donnees en silo. HubSpot, par exemple, remplace en moyenne 4,2 outils chez ses clients mid-market."
              },
              {
                signal: "Limites de scalabilite",
                detail: "Votre CRM rame au-dela de 50 000 contacts. Les workflows plantent. Les imports prennent des heures. L\u2019API est lente ou limitee. C\u2019est un signal clair que votre outil n\u2019a pas ete concu pour votre taille actuelle."
              },
              {
                signal: "Verrouillage fournisseur (vendor lock-in)",
                detail: "Impossible d\u2019exporter vos donnees proprement. Les formats proprietaires rendent la migration cauchemardesque. Votre fournisseur le sait et augmente les prix chaque annee. Verifiez toujours la portabilite de vos donnees avant de signer."
              },
              {
                signal: "Fonctionnalites manquantes critiques",
                detail: "Pas d\u2019IA integree, pas de scoring predictif, pas de sequences automatiques, pas de custom objects. Votre CRM n\u2019a pas evolue avec le marche. En 2026, l\u2019IA dans le CRM n\u2019est plus un luxe, c\u2019est un standard."
              },
            ].map((s) => (
              <div key={s.signal} className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#EF4444] mt-2 shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-[#111] mb-1">{s.signal}</p>
                    <p className="text-[13px] text-[#666] leading-[1.7]">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Le cout reel de rester sur le mauvais CRM</h3>

          <div className="rounded-2xl bg-[#111] p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "-23%", label: "Productivite commerciale", detail: "Temps perdu en saisie manuelle, recherche d\u2019info, export/import" },
                { value: "-18%", label: "Qualite des donnees par an", detail: "Donnees obsoletes, doublons, champs vides qui s\u2019accumulent" },
                { value: "15-30%", label: "Opportunites perdues", detail: "Leads non suivis, relances oubliees, pas de scoring" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl bg-white/5 p-4">
                  <p className="text-[24px] font-bold text-[#4B5EFC] mb-1">{m.value}</p>
                  <p className="text-[12px] font-semibold text-white mb-1">{m.label}</p>
                  <p className="text-[11px] text-white/40 leading-[1.5]">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Framework de decision : rester ou migrer</h3>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            La decision ne doit pas etre emotionnelle. Utilisez cette grille d&apos;evaluation simple. Attribuez un score de 1 a 5 a chaque critere. Si le total depasse 25, la migration est fortement recommandee.
          </p>

          <div className="rounded-xl border border-[#E8E8E8] bg-white overflow-hidden mb-6">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <th className="text-left p-3 text-[#999] font-medium">Critere</th>
                  <th className="text-center p-3 text-[#999] font-medium">1 (faible)</th>
                  <th className="text-center p-3 text-[#999] font-medium">5 (critique)</th>
                </tr>
              </thead>
              <tbody className="text-[#555]">
                {[
                  { critere: "Adoption des equipes", low: "Plus de 80% l\u2019utilisent", high: "Moins de 40% l\u2019utilisent" },
                  { critere: "Cout vs valeur", low: "ROI positif mesure", high: "Cout explose, ROI flou" },
                  { critere: "Fonctionnalites manquantes", low: "Rien de bloquant", high: "Blocages quotidiens" },
                  { critere: "Integrations", low: "Tout est connecte", high: "Silos partout" },
                  { critere: "Qualite des donnees", low: "Base propre a 90%+", high: "Doublons, champs vides" },
                  { critere: "Support fournisseur", low: "Reactif et utile", high: "Inexistant ou facture" },
                  { critere: "Evolution du produit", low: "Roadmap alignee", high: "Stagnation ou abandon" },
                ].map((r) => (
                  <tr key={r.critere} className="border-b border-[#F5F5F5]">
                    <td className="p-3 font-medium text-[#111]">{r.critere}</td>
                    <td className="p-3 text-center text-[#22C55E]">{r.low}</td>
                    <td className="p-3 text-center text-[#EF4444]">{r.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border-l-4 border-[#4B5EFC] bg-[#4B5EFC]/5 p-5 mb-6">
            <p className="text-[13px] text-[#555] leading-[1.7]">
              <strong className="text-[#111]">Score 7-15 :</strong> Votre CRM est correct. Optimisez-le avant de penser a migrer.
              <br /><strong className="text-[#111]">Score 16-25 :</strong> Des signaux faibles apparaissent. Commencez a evaluer les alternatives.
              <br /><strong className="text-[#111]">Score 26-35 :</strong> Migration fortement recommandee. Chaque mois d&apos;attente coute de l&apos;argent.
            </p>
          </div>
        </section>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 2 : Comparatif CRM 2026
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch2")} id="ch2" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">02</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Comparatif CRM 2026 : 7 solutions analysees</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            Ce comparatif est le plus complet disponible en francais. Nous avons teste, deploye et migre ces 7 CRM chez nos clients en 2025-2026. Chaque analyse est basee sur des donnees reelles : pricing verifie en mars 2026, fonctionnalites testees en production, retours d&apos;equipes de 10 a 500 personnes.
          </p>
          <p className="text-[15px] text-[#555] leading-[1.8] mb-8">
            Pour chaque CRM, vous trouverez : une description factuelle, le pricing reel (pas le prix marketing), les forces, les faiblesses, le profil ideal, et surtout les situations ou il faut migrer VERS cet outil et celles ou il faut migrer A PARTIR de cet outil.
          </p>

          {/* ── CRM Cards ── */}
          <div className="space-y-6 mb-12">
            {crmData.map((crm) => (
              <div key={crm.name} className="rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-3 p-5 border-b border-[#F5F5F5]">
                  <img src={`https://www.google.com/s2/favicons?domain=${crm.domain}&sz=32`} alt={crm.name} className="w-6 h-6" />
                  <div className="flex-1">
                    <p className="text-[16px] font-semibold text-[#111]">{crm.name}</p>
                    <p className="text-[11px] text-[#999]">{crm.pricing}</p>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-md font-medium" style={{ background: crm.color + "15", color: crm.color }}>
                    {crm.ai}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 space-y-5">
                  <p className="text-[13px] text-[#555] leading-[1.7]">{crm.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Strengths */}
                    <div className="rounded-xl bg-[#F0FDF4] p-4">
                      <p className="text-[11px] font-semibold text-[#22C55E] uppercase tracking-wider mb-2">Points forts</p>
                      {crm.strengths.map((s) => (
                        <p key={s} className="text-[12px] text-[#555] mb-1.5 flex items-start gap-2 leading-[1.6]">
                          <span className="text-[#22C55E] shrink-0 mt-0.5">+</span>{s}
                        </p>
                      ))}
                    </div>
                    {/* Weaknesses */}
                    <div className="rounded-xl bg-[#FEF2F2] p-4">
                      <p className="text-[11px] font-semibold text-[#EF4444] uppercase tracking-wider mb-2">Points faibles</p>
                      {crm.weaknesses.map((w) => (
                        <p key={w} className="text-[12px] text-[#555] mb-1.5 flex items-start gap-2 leading-[1.6]">
                          <span className="text-[#EF4444] shrink-0 mt-0.5">-</span>{w}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#FAFAFA] p-4">
                    <p className="text-[11px] font-semibold text-[#4B5EFC] uppercase tracking-wider mb-2">Ideal pour</p>
                    <p className="text-[12px] text-[#555] leading-[1.6]">{crm.idealFor}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-[#E8E8E8] p-4">
                      <p className="text-[11px] font-semibold text-[#111] mb-2">Migrer VERS {crm.name} quand...</p>
                      <p className="text-[12px] text-[#666] leading-[1.6]">{crm.migrateTo}</p>
                    </div>
                    <div className="rounded-xl border border-[#E8E8E8] p-4">
                      <p className="text-[11px] font-semibold text-[#111] mb-2">Migrer DEPUIS {crm.name} quand...</p>
                      <p className="text-[12px] text-[#666] leading-[1.6]">{crm.migrateAway}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Big Comparison Table ── */}
          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Tableau comparatif complet : 16 criteres, 7 CRM</h3>
          <p className="text-[13px] text-[#666] leading-[1.7] mb-4">
            Ce tableau synthetise l&apos;ensemble des criteres d&apos;evaluation. Scrollez horizontalement sur mobile pour voir tous les CRM.
          </p>

          <div className="rounded-xl border border-[#E8E8E8] bg-white overflow-x-auto mb-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <table className="w-full text-[11px] min-w-[900px]">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <th className="text-left p-3 text-[#999] font-medium sticky left-0 bg-[#FAFAFA] min-w-[180px]">Critere</th>
                  {crmHeaders.map((h) => (
                    <th key={h} className="text-center p-3 text-[#111] font-semibold min-w-[100px]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#555]">
                {comparisonCriteria.map((row) => (
                  <tr key={row.label} className="border-b border-[#F5F5F5]">
                    <td className="p-3 font-medium text-[#111] sticky left-0 bg-white">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="p-3 text-center">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Decision Tree ── */}
          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Arbre de decision : quel CRM choisir</h3>
          <p className="text-[13px] text-[#666] leading-[1.7] mb-6">
            Repondez a ces 4 questions dans l&apos;ordre pour identifier le CRM le plus adapte a votre situation.
          </p>

          <div className="space-y-4 mb-8">
            {/* Node 1 */}
            <div className="rounded-2xl bg-[#111] p-6">
              <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">Question 1</p>
              <p className="text-[15px] font-semibold text-white mb-4">Combien de personnes utiliseront le CRM ?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-[13px] font-semibold text-white mb-1">1 a 5 personnes</p>
                  <p className="text-[11px] text-white/50">Notion (si moins de 200 contacts), Folk ou Pipedrive</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-[13px] font-semibold text-white mb-1">5 a 30 personnes</p>
                  <p className="text-[11px] text-white/50">Folk, Attio ou HubSpot Starter</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-[13px] font-semibold text-white mb-1">30 a 200 personnes</p>
                  <p className="text-[11px] text-white/50">HubSpot Pro/Enterprise ou Odoo</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-[13px] font-semibold text-white mb-1">Plus de 200 personnes</p>
                  <p className="text-[11px] text-white/50">Salesforce ou HubSpot Enterprise</p>
                </div>
              </div>
            </div>

            {/* Node 2 */}
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
              <p className="text-[12px] font-semibold text-[#999] uppercase tracking-wider mb-3">Question 2</p>
              <p className="text-[15px] font-semibold text-[#111] mb-4">Avez-vous besoin de marketing automation ?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#F0FDF4] p-4">
                  <p className="text-[13px] font-semibold text-[#111] mb-1">Oui, c&apos;est critique</p>
                  <p className="text-[11px] text-[#666]">HubSpot (le meilleur marketing integre au CRM) ou Salesforce + Pardot</p>
                </div>
                <div className="rounded-xl bg-[#FAFAFA] p-4">
                  <p className="text-[13px] font-semibold text-[#111] mb-1">Non, juste le CRM</p>
                  <p className="text-[11px] text-[#666]">Attio, Pipedrive, Folk ou Odoo</p>
                </div>
              </div>
            </div>

            {/* Node 3 */}
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
              <p className="text-[12px] font-semibold text-[#999] uppercase tracking-wider mb-3">Question 3</p>
              <p className="text-[15px] font-semibold text-[#111] mb-4">Quel est votre budget mensuel CRM ?</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-[#FAFAFA] p-4">
                  <p className="text-[13px] font-semibold text-[#111] mb-1">Moins de $500/mois</p>
                  <p className="text-[11px] text-[#666]">Pipedrive, Folk, Attio, Odoo Community</p>
                </div>
                <div className="rounded-xl bg-[#FAFAFA] p-4">
                  <p className="text-[13px] font-semibold text-[#111] mb-1">$500 a $2 000/mois</p>
                  <p className="text-[11px] text-[#666]">HubSpot Pro, Odoo Enterprise, Attio Pro</p>
                </div>
                <div className="rounded-xl bg-[#FAFAFA] p-4">
                  <p className="text-[13px] font-semibold text-[#111] mb-1">Plus de $2 000/mois</p>
                  <p className="text-[11px] text-[#666]">HubSpot Enterprise, Salesforce</p>
                </div>
              </div>
            </div>

            {/* Node 4 */}
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
              <p className="text-[12px] font-semibold text-[#999] uppercase tracking-wider mb-3">Question 4</p>
              <p className="text-[15px] font-semibold text-[#111] mb-4">Avez-vous besoin d&apos;un ERP complet (compta, stock, RH) ?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#FAFAFA] p-4">
                  <p className="text-[13px] font-semibold text-[#111] mb-1">Oui, systeme unifie</p>
                  <p className="text-[11px] text-[#666]">Odoo est le seul a offrir CRM + ERP au meme prix. Salesforce le fait aussi via AppExchange mais a un cout bien superieur.</p>
                </div>
                <div className="rounded-xl bg-[#FAFAFA] p-4">
                  <p className="text-[13px] font-semibold text-[#111] mb-1">Non, juste le CRM (+marketing)</p>
                  <p className="text-[11px] text-[#666]">HubSpot, Attio, Pipedrive ou Folk. Connectez votre compta via Make ou Zapier.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 3 : Comment choisir le bon CRM
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch3")} id="ch3" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">03</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Comment choisir le bon CRM</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
            Apres avoir compare les 7 CRM du marche, il faut structurer votre decision. Le choix d&apos;un CRM ne se fait pas sur une demo de 30 minutes ni sur le prix affiche. Il se fait sur 8 criteres ponderes en fonction de votre contexte specifique.
          </p>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Les 8 criteres de selection</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { num: "1", title: "UX et adoption", detail: "Le meilleur CRM est celui que vos equipes utiliseront. Testez avec 3 profils differents (commercial, manager, ops) pendant 2 semaines. Mesurez le temps de prise en main. HubSpot et Folk excellent ici." },
              { num: "2", title: "Pricing reel (TCO)", detail: "Ne regardez jamais le prix affiche. Calculez le TCO sur 3 ans : licences + onboarding + integrations + formation + maintenance + ajout d\u2019utilisateurs. Un CRM a $25/mois peut couter $5 000/mois en realite." },
              { num: "3", title: "Integrations natives", detail: "Listez vos 10 outils critiques. Verifiez qu\u2019une integration native existe (pas juste via Zapier). Une integration native coute $0 de maintenance ; une integration custom coute $500 a $5 000/an." },
              { num: "4", title: "Marketing inclus", detail: "Si votre equipe marketing existe, un CRM avec marketing integre (HubSpot, Salesforce+Pardot) evitera des silos et des couts supplementaires. Sinon, un CRM de vente pur suffit." },
              { num: "5", title: "Reporting et analytics", detail: "Testez la creation d\u2019un rapport personnalise pendant votre evaluation. Si ca prend plus de 10 minutes, le reporting est trop complexe. HubSpot et Salesforce dominent ce critere." },
              { num: "6", title: "Application mobile", detail: "Indispensable pour les commerciaux terrain. Testez l\u2019app sur votre telephone pendant l\u2019evaluation. Pipedrive et HubSpot ont les meilleures apps mobiles." },
              { num: "7", title: "Scalabilite", detail: "Projetez-vous a 3 ans. Si vous etes 20 aujourd\u2019hui et visez 200, choisissez un outil qui supporte les deux tailles. Migrer a nouveau dans 2 ans serait un echec." },
              { num: "8", title: "Support et communaute", detail: "En francais ? Avec un SLA ? Avec une communaute active ? HubSpot, Folk et Odoo ont un support francophone. Attio et Notion sont en anglais uniquement." },
            ].map((c) => (
              <div key={c.num} className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-md bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[10px] font-bold">{c.num}</span>
                  <p className="text-[13px] font-semibold text-[#111]">{c.title}</p>
                </div>
                <p className="text-[12px] text-[#666] leading-[1.65]">{c.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Matrice de decision par profil d&apos;entreprise</h3>

          <div className="rounded-xl border border-[#E8E8E8] bg-white overflow-hidden mb-8">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <th className="text-left p-3 text-[#999] font-medium">Profil</th>
                  <th className="text-left p-3 text-[#999] font-medium">CRM recommande</th>
                  <th className="text-left p-3 text-[#999] font-medium">Alternative</th>
                  <th className="text-left p-3 text-[#999] font-medium">Budget mensuel type</th>
                </tr>
              </thead>
              <tbody className="text-[#555]">
                {[
                  { profil: "Startup early-stage (moins de 10 pers.)", reco: "Attio ou Folk", alt: "HubSpot Free", budget: "$0 - $200" },
                  { profil: "Startup en croissance (10-50 pers.)", reco: "HubSpot Starter/Pro", alt: "Attio Pro", budget: "$200 - $1 500" },
                  { profil: "PME (50-200 pers.)", reco: "HubSpot Pro", alt: "Odoo Enterprise", budget: "$800 - $3 000" },
                  { profil: "PME avec besoins ERP", reco: "Odoo Enterprise", alt: "Salesforce Essentials + compta externe", budget: "$500 - $2 000" },
                  { profil: "Scale-up tech (50-500 pers.)", reco: "HubSpot Enterprise", alt: "Salesforce", budget: "$2 000 - $5 000" },
                  { profil: "Grand groupe (plus de 500 pers.)", reco: "Salesforce Enterprise", alt: "HubSpot Enterprise", budget: "$5 000 - $50 000+" },
                  { profil: "Agence / cabinet (5-30 pers.)", reco: "Folk", alt: "HubSpot Starter", budget: "$100 - $800" },
                  { profil: "Sales-first team (5-50 pers.)", reco: "Pipedrive", alt: "HubSpot Starter", budget: "$100 - $500" },
                ].map((r) => (
                  <tr key={r.profil} className="border-b border-[#F5F5F5]">
                    <td className="p-3 font-medium text-[#111]">{r.profil}</td>
                    <td className="p-3 text-[#4B5EFC] font-medium">{r.reco}</td>
                    <td className="p-3">{r.alt}</td>
                    <td className="p-3">{r.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Pourquoi Ceres recommande HubSpot dans la majorite des cas</h3>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            Chez Ceres, 70% de nos migrations atterrissent sur HubSpot. Ce n&apos;est pas parce que nous sommes partenaires HubSpot (nous le sommes), c&apos;est parce que HubSpot offre le meilleur equilibre entre puissance, facilite d&apos;adoption et cout total pour le segment 15-500 personnes, qui represente 80% de nos clients.
          </p>
          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            Les 30% restants se repartissent entre Salesforce (quand la complexite des processus l&apos;impose), Attio (quand l&apos;equipe est tech-first et veut un CRM API-first), et Odoo (quand le besoin ERP est central).
          </p>

          <div className="rounded-xl border-l-4 border-[#FF7A59] bg-[#FF7A59]/5 p-5 mb-6">
            <p className="text-[13px] text-[#555] leading-[1.7]">
              <strong className="text-[#111]">Quand nous ne recommandons PAS HubSpot :</strong> plus de 500 utilisateurs avec des processus Apex complexes deja en place sur Salesforce, besoin d&apos;un ERP unifie (Odoo est plus pertinent), equipe de moins de 5 personnes sans budget (Folk ou Attio Free suffisent), besoin d&apos;un CRM 100% API-first (Attio est superieur).
            </p>
          </div>
        </section>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 4 : Preparer sa migration
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch4")} id="ch4" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">04</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Preparer sa migration : audit de l&apos;existant</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
            80% des echecs de migration viennent d&apos;une preparation insuffisante. Avant de toucher au moindre outil, vous devez cartographier exhaustivement ce que contient votre CRM actuel. Chaque objet, chaque champ, chaque workflow, chaque integration. C&apos;est le travail le plus ingrat mais le plus critique.
          </p>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Inventaire des donnees</h3>

          <p className="text-[13px] text-[#666] leading-[1.7] mb-4">
            Utilisez ce template d&apos;inventaire pour cartographier chaque objet de votre CRM. Pour chaque objet, documentez : le nombre d&apos;enregistrements, le nombre de proprietes (standard et custom), les associations, et le taux de remplissage des champs cles.
          </p>

          <div className="rounded-xl border border-[#E8E8E8] bg-white overflow-x-auto mb-8">
            <table className="w-full text-[12px] min-w-[700px]">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <th className="text-left p-3 text-[#999] font-medium">Objet</th>
                  <th className="text-center p-3 text-[#999] font-medium">Enregistrements</th>
                  <th className="text-center p-3 text-[#999] font-medium">Props standard</th>
                  <th className="text-center p-3 text-[#999] font-medium">Props custom</th>
                  <th className="text-center p-3 text-[#999] font-medium">Associations</th>
                  <th className="text-center p-3 text-[#999] font-medium">Taux remplissage</th>
                </tr>
              </thead>
              <tbody className="text-[#555]">
                {[
                  { obj: "Contacts", records: "45 200", standard: "32", custom: "18", assoc: "Company, Deal, Ticket", fill: "72%" },
                  { obj: "Companies", records: "8 300", standard: "28", custom: "12", assoc: "Contact, Deal", fill: "68%" },
                  { obj: "Deals", records: "12 400", standard: "22", custom: "15", assoc: "Contact, Company", fill: "81%" },
                  { obj: "Tickets", records: "3 100", standard: "18", custom: "6", assoc: "Contact, Company", fill: "65%" },
                  { obj: "Activities", records: "89 000", standard: "14", custom: "3", assoc: "Contact, Deal", fill: "54%" },
                  { obj: "Custom: Projects", records: "1 200", standard: "0", custom: "22", assoc: "Company, Deal", fill: "78%" },
                ].map((r) => (
                  <tr key={r.obj} className="border-b border-[#F5F5F5]">
                    <td className="p-3 font-medium text-[#111]">{r.obj}</td>
                    <td className="p-3 text-center">{r.records}</td>
                    <td className="p-3 text-center">{r.standard}</td>
                    <td className="p-3 text-center">{r.custom}</td>
                    <td className="p-3 text-center text-[11px]">{r.assoc}</td>
                    <td className="p-3 text-center">{r.fill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Inventaire des workflows et automations</h3>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            Chaque automation de votre ancien CRM doit etre documentee : declencheur, conditions, actions, et surtout son utilite reelle. C&apos;est l&apos;occasion de faire le menage. Chez TotalEnergies, sur 120 workflows Dynamics, seuls 45 ont ete recrees dans HubSpot apres audit. Les 75 autres etaient obsoletes, redondants ou inutilises.
          </p>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Cartographie des parties prenantes</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { role: "Sponsor executif", desc: "Valide le budget, arbitre les conflits. Generalement le VP Sales, le COO ou le CRO. Doit etre implique des le jour 1.", freq: "Bi-mensuel" },
              { role: "Chef de projet migration", desc: "Coordonne le projet au quotidien. Profil RevOps, CRM Manager ou Ops. C\u2019est le pivot de la migration.", freq: "Quotidien" },
              { role: "Key users (champions)", desc: "1 a 3 utilisateurs par equipe qui testent, valident et evangelisent. Essentiels pour l\u2019adoption.", freq: "Hebdomadaire" },
              { role: "Equipe technique", desc: "Admin CRM, dev si besoin d\u2019API/scripts. Gere la migration technique et les integrations.", freq: "Quotidien en phase migration" },
              { role: "Direction commerciale", desc: "Valide les pipelines, les etapes, les rapports. Doit voir la valeur ajoutee rapidement.", freq: "Hebdomadaire" },
              { role: "Equipe marketing", desc: "Si migration du marketing automation en parallele. Valide les templates, workflows, listes.", freq: "Hebdomadaire" },
            ].map((s) => (
              <div key={s.role} className="rounded-xl border border-[#E8E8E8] bg-white p-4">
                <p className="text-[13px] font-semibold text-[#111] mb-1">{s.role}</p>
                <p className="text-[12px] text-[#666] leading-[1.6] mb-2">{s.desc}</p>
                <p className="text-[10px] text-[#4B5EFC] font-medium">Implication : {s.freq}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Planning type : les 4 phases d&apos;une migration</h3>

          <div className="space-y-3 mb-8">
            {[
              { phase: "Phase 1 : Preparation", duree: "Semaines 1-2", tasks: "Audit de l\u2019existant, inventaire donnees, choix du CRM cible, constitution de l\u2019equipe projet, go/no-go." },
              { phase: "Phase 2 : Configuration", duree: "Semaines 3-4", tasks: "Configuration du nouveau CRM (pipelines, proprietes, users, droits), mapping des champs, nettoyage des donnees, mise en place des integrations." },
              { phase: "Phase 3 : Migration", duree: "Semaines 5-6", tasks: "Migration par lots (companies, contacts, deals, activities), tests de validation, correction des anomalies, recette utilisateur." },
              { phase: "Phase 4 : Adoption", duree: "Semaines 7-8", tasks: "Formation par role, go-live, support intensif J+1 a J+15, mesure d\u2019adoption, optimisation, premier bilan J+30." },
            ].map((p) => (
              <div key={p.phase} className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[14px] font-semibold text-[#111]">{p.phase}</p>
                  <span className="text-[10px] px-2 py-1 rounded-md bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">{p.duree}</span>
                </div>
                <p className="text-[12px] text-[#666] leading-[1.65]">{p.tasks}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Matrice des risques</h3>

          <div className="rounded-xl border border-[#E8E8E8] bg-white overflow-hidden mb-6">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <th className="text-left p-3 text-[#999] font-medium">Risque</th>
                  <th className="text-center p-3 text-[#999] font-medium">Probabilite</th>
                  <th className="text-center p-3 text-[#999] font-medium">Impact</th>
                  <th className="text-left p-3 text-[#999] font-medium">Mitigation</th>
                </tr>
              </thead>
              <tbody className="text-[#555]">
                {[
                  { risk: "Perte de donnees pendant la migration", prob: "Moyenne", impact: "Critique", mitigation: "Backup complet avant migration, migration par lots, validation a chaque etape" },
                  { risk: "Resistance au changement des equipes", prob: "Elevee", impact: "Eleve", mitigation: "Programme champions, formation par role, communication en amont, quick wins" },
                  { risk: "Depassement de budget", prob: "Elevee", impact: "Moyen", mitigation: "Budget tampon de 20%, scope clairement defini, phases go/no-go" },
                  { risk: "Integrations cassees", prob: "Moyenne", impact: "Eleve", mitigation: "Inventaire exhaustif, test en sandbox, migration des integrations une par une" },
                  { risk: "Retard de planning", prob: "Elevee", impact: "Moyen", mitigation: "Buffer de 2 semaines, priorisation stricte des fonctionnalites critiques" },
                  { risk: "Mapping incorrect des champs", prob: "Moyenne", impact: "Eleve", mitigation: "Double validation du mapping, migration pilote sur 500 contacts, recette metier" },
                ].map((r) => (
                  <tr key={r.risk} className="border-b border-[#F5F5F5]">
                    <td className="p-3 font-medium text-[#111]">{r.risk}</td>
                    <td className="p-3 text-center">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${r.prob === "Elevee" ? "bg-[#FEF2F2] text-[#EF4444]" : "bg-[#FFF7ED] text-[#F59E0B]"}`}>{r.prob}</span>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${r.impact === "Critique" ? "bg-[#FEF2F2] text-[#EF4444]" : r.impact === "Eleve" ? "bg-[#FFF7ED] text-[#F59E0B]" : "bg-[#F0FDF4] text-[#22C55E]"}`}>{r.impact}</span>
                    </td>
                    <td className="p-3 text-[11px]">{r.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 5 : Nettoyage et enrichissement
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch5")} id="ch5" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">05</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Nettoyage et enrichissement pre-migration</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
            La regle d&apos;or : ne migrez jamais des donnees sales. Une migration est l&apos;opportunite parfaite pour repartir sur une base propre. Chez Dougs, le nettoyage pre-migration a reduit la base de 30 000 a 22 000 contacts (26% de doublons et de contacts morts), ce qui a ameliore le taux de delivrabilite email de 14 points.
          </p>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Strategies de deduplication</h3>

          <div className="space-y-3 mb-8">
            {[
              {
                method: "Deduplication par email",
                detail: "La methode la plus fiable. L\u2019email est un identifiant quasi unique. Regroupez les doublons par email identique. Pour les contacts sans email, passez a la methode suivante.",
                precision: "95%+",
                use: "Premier passage obligatoire"
              },
              {
                method: "Deduplication par nom + entreprise",
                detail: "Combinez prenom + nom + nom d\u2019entreprise (normalisee). Gerez les variations (Jean-Pierre vs JP, SARL XYZ vs XYZ). Utilisez un algorithme de fuzzy matching (Levenshtein distance inferieure a 2).",
                precision: "80-90%",
                use: "Deuxieme passage pour les contacts sans email"
              },
              {
                method: "Deduplication par telephone",
                detail: "Normalisez d\u2019abord en format E.164 (+33612345678). Puis comparez. Attention aux numeros de standard qui apparaissent sur des dizaines de contacts.",
                precision: "75-85%",
                use: "Troisieme passage complementaire"
              },
            ].map((m) => (
              <div key={m.method} className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[14px] font-semibold text-[#111]">{m.method}</p>
                  <span className="text-[10px] px-2 py-1 rounded-md bg-[#22C55E]/10 text-[#22C55E] font-medium">Precision : {m.precision}</span>
                </div>
                <p className="text-[12px] text-[#666] leading-[1.65] mb-2">{m.detail}</p>
                <p className="text-[11px] text-[#4B5EFC] font-medium">{m.use}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Standardisation des donnees</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { champ: "Pays", avant: "France, FR, france, FRANCE, FRA", apres: "France (dropdown standardise)", action: "Convertir en dropdown avec valeurs ISO" },
              { champ: "Telephone", avant: "06 12 34 56 78, +336.12.34.56.78", apres: "+33612345678 (format E.164)", action: "Script de normalisation automatique" },
              { champ: "Secteur d\u2019activite", avant: "SaaS, saas, Software, Logiciel", apres: "SaaS (dropdown)", action: "Mapper toutes les variantes vers des valeurs standard" },
              { champ: "Source du lead", avant: "web, Website, site web, formulaire", apres: "Website (dropdown)", action: "Definir 8-12 sources standard maximum" },
            ].map((s) => (
              <div key={s.champ} className="rounded-xl border border-[#E8E8E8] bg-white p-4">
                <p className="text-[13px] font-semibold text-[#111] mb-2">{s.champ}</p>
                <div className="space-y-1.5">
                  <p className="text-[11px]"><span className="text-[#EF4444] font-medium">Avant :</span> <span className="text-[#666]">{s.avant}</span></p>
                  <p className="text-[11px]"><span className="text-[#22C55E] font-medium">Apres :</span> <span className="text-[#666]">{s.apres}</span></p>
                  <p className="text-[11px] text-[#4B5EFC] font-medium">{s.action}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Outils d&apos;enrichissement</h3>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            Enrichir avant de migrer permet de demarrer avec des donnees completes dans le nouveau CRM. Trois outils dominent le marche en 2026 :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { tool: "Dropcontact", domain: "dropcontact.com", desc: "Solution francaise RGPD-friendly. Enrichissement email, telephone, LinkedIn, poste, entreprise. Integration native HubSpot. A partir de 24$/mois.", strengths: "RGPD natif, integration HubSpot, donnees francaises fiables" },
              { tool: "Clay", domain: "clay.com", desc: "Plateforme d\u2019enrichissement multi-sources. Combine plus de 75 providers (Clearbit, Apollo, LinkedIn, etc.) pour un enrichissement maximal. A partir de $149/mois.", strengths: "Multi-sources (75+), waterfall enrichment, workflows puissants" },
              { tool: "Apollo", domain: "apollo.io", desc: "Base de donnees B2B de 270M+ contacts. Enrichissement + sequences email + phone. Plan gratuit genereux (1000 credits/mois). A partir de $49/mois.", strengths: "Base B2B massive, sequences integrees, plan gratuit genereux" },
            ].map((t) => (
              <div key={t.tool} className="rounded-xl border border-[#E8E8E8] bg-white p-4">
                <div className="flex items-center gap-2 mb-3">
                  <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`} alt={t.tool} className="w-4 h-4" />
                  <p className="text-[13px] font-semibold text-[#111]">{t.tool}</p>
                </div>
                <p className="text-[12px] text-[#666] leading-[1.6] mb-2">{t.desc}</p>
                <p className="text-[11px] text-[#22C55E] font-medium">{t.strengths}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Metriques de qualite avant/apres</h3>

          <div className="rounded-2xl bg-[#111] p-6 md:p-8 mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { metric: "Taux de remplissage email", before: "64%", after: "92%", delta: "+28pts" },
                { metric: "Doublons", before: "18%", after: "0.3%", delta: "-17.7pts" },
                { metric: "Contacts sans entreprise", before: "31%", after: "4%", delta: "-27pts" },
                { metric: "Telephones valides", before: "42%", after: "78%", delta: "+36pts" },
              ].map((m) => (
                <div key={m.metric} className="text-center">
                  <p className="text-[10px] text-white/40 mb-2">{m.metric}</p>
                  <p className="text-[11px] text-white/30 line-through mb-0.5">{m.before}</p>
                  <p className="text-[20px] font-bold text-white mb-0.5">{m.after}</p>
                  <p className="text-[10px] text-[#22C55E] font-medium">{m.delta}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/20 text-center mt-4">Donnees reelles : migration Dougs, 30 000 contacts, Salesforce vers HubSpot (2025)</p>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Strategie d&apos;archivage</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="rounded-xl bg-[#F0FDF4] p-4">
              <p className="text-[11px] font-semibold text-[#22C55E] uppercase tracking-wider mb-2">A migrer</p>
              {[
                "Contacts avec activite dans les 24 derniers mois",
                "Deals ouverts ou clos-gagnes (historique)",
                "Companies avec au moins un contact actif",
                "Notes et activites liees aux deals en cours",
                "Templates et sequences activement utilisees",
              ].map((i) => (
                <p key={i} className="text-[12px] text-[#555] mb-1.5 flex items-start gap-2 leading-[1.6]">
                  <span className="text-[#22C55E] shrink-0">+</span>{i}
                </p>
              ))}
            </div>
            <div className="rounded-xl bg-[#FEF2F2] p-4">
              <p className="text-[11px] font-semibold text-[#EF4444] uppercase tracking-wider mb-2">A archiver (ne pas migrer)</p>
              {[
                "Contacts sans activite depuis plus de 24 mois",
                "Emails bounced ou desabonnes",
                "Deals clos-perdus de plus de 12 mois (sauf analyse)",
                "Doublons identifies",
                "Contacts test et donnees de sandbox",
              ].map((i) => (
                <p key={i} className="text-[12px] text-[#555] mb-1.5 flex items-start gap-2 leading-[1.6]">
                  <span className="text-[#EF4444] shrink-0">-</span>{i}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-xl border-l-4 border-[#F59E0B] bg-[#FFF7ED] p-5">
            <p className="text-[13px] text-[#555] leading-[1.7]">
              <strong className="text-[#111]">Important :</strong> ne supprimez rien definitivement avant la migration. Archivez dans un export CSV/Excel date et stocke dans un drive partage. Vous pourriez avoir besoin de ces donnees pour des audits ou des analyses futures.
            </p>
          </div>
        </section>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 6 : Mapping des champs
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch6")} id="ch6" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">06</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Mapping des champs et structure</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
            Le mapping est le coeur technique de la migration. C&apos;est la correspondance entre chaque champ de votre ancien CRM et le champ equivalent dans le nouveau. Un mapping mal fait = des donnees perdues ou mal placees. Chez HiPay, le mapping de leur double migration (Pardot + Salesforce vers HubSpot) a necessite 3 semaines de travail sur plus de 200 champs.
          </p>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Methodologie de mapping</h3>

          <div className="space-y-3 mb-8">
            {[
              { step: "1. Exporter tous les champs du CRM source", detail: "Exportez la liste complete des proprietes par objet (Contact, Company, Deal, etc.) avec leur type, leur nom interne et un echantillon de valeurs." },
              { step: "2. Lister les champs du CRM cible", detail: "Documentez les champs standard du CRM cible. Ne creez des custom properties que si aucun champ standard ne correspond." },
              { step: "3. Mapper un par un", detail: "Pour chaque champ source, identifiez le champ cible correspondant. Documentez les transformations necessaires (type, format, valeurs)." },
              { step: "4. Identifier les champs orphelins", detail: "Les champs source sans equivalent cible. Decidez : creer un custom field, fusionner avec un autre, ou abandonner." },
              { step: "5. Valider avec le metier", detail: "Le mapping technique doit etre valide par les key users. Ils connaissent la signification metier de chaque champ." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-[#E8E8E8] bg-white p-4">
                <p className="text-[13px] font-semibold text-[#111] mb-1">{s.step}</p>
                <p className="text-[12px] text-[#666] leading-[1.6]">{s.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Exemple de mapping : Salesforce vers HubSpot</h3>

          <p className="text-[13px] text-[#666] leading-[1.7] mb-4">
            Voici un extrait du mapping reel utilise pour la migration TotalEnergies (45 000 contacts, Dynamics/Salesforce vers HubSpot). 17 champs principaux sur les 76 mappes au total.
          </p>

          <div className="rounded-xl border border-[#E8E8E8] bg-white overflow-x-auto mb-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <table className="w-full text-[11px] min-w-[800px]">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <th className="text-left p-3 text-[#999] font-medium">Champ source (Salesforce)</th>
                  <th className="text-left p-3 text-[#999] font-medium">Type source</th>
                  <th className="text-center p-3 text-[#999] font-medium">&rarr;</th>
                  <th className="text-left p-3 text-[#999] font-medium">Champ cible (HubSpot)</th>
                  <th className="text-left p-3 text-[#999] font-medium">Type cible</th>
                  <th className="text-left p-3 text-[#999] font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="text-[#555]">
                {mappingFields.map((f) => (
                  <tr key={f.source} className="border-b border-[#F5F5F5]">
                    <td className="p-3 font-medium text-[#111]">{f.source}</td>
                    <td className="p-3"><span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F5F5F5] text-[#999] font-medium">{f.sourceType}</span></td>
                    <td className="p-3 text-center text-[#4B5EFC]">&rarr;</td>
                    <td className="p-3 font-medium text-[#4B5EFC]">{f.target}</td>
                    <td className="p-3"><span className="text-[10px] px-1.5 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">{f.targetType}</span></td>
                    <td className="p-3 text-[10px] text-[#999]">{f.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Gestion des cas particuliers</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { cas: "Custom objects", detail: "Salesforce permet des custom objects illimites. HubSpot les supporte depuis 2023 mais avec des limites (10 en Pro, 100 en Enterprise). Evaluez si chaque custom object doit devenir un objet HubSpot, une propriete custom, ou etre abandonne." },
              { cas: "Picklists / Dropdowns", detail: "Chaque valeur de picklist doit etre mappee individuellement. Les valeurs du CRM source qui n\u2019existent pas dans le cible doivent etre creees ou mergees. Attention : les valeurs vides ou obsoletes doivent etre nettoyees avant le mapping." },
              { cas: "Champs formule", detail: "Les champs calcules (formules Salesforce, rollup summaries) n\u2019existent pas dans HubSpot de la meme maniere. Options : propriete calculee HubSpot, workflow de calcul, ou Operations Hub." },
              { cas: "Multi-currency", detail: "Si votre CRM source gere plusieurs devises et votre cible une seule, convertissez tout dans la devise principale avant migration. Documentez le taux de change utilise." },
            ].map((c) => (
              <div key={c.cas} className="rounded-xl border border-[#E8E8E8] bg-white p-4">
                <p className="text-[13px] font-semibold text-[#111] mb-2">{c.cas}</p>
                <p className="text-[12px] text-[#666] leading-[1.6]">{c.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Les erreurs de mapping les plus frequentes</h3>

          <div className="rounded-xl border-l-4 border-[#EF4444] bg-[#FEF2F2] p-5 mb-6">
            <div className="space-y-2">
              {[
                "Mapper un champ texte libre vers un dropdown sans nettoyer les valeurs d\u2019abord",
                "Oublier de mapper les associations (contact vers company, deal vers contact)",
                "Ignorer les champs obligatoires du CRM cible (ex: Last Name dans HubSpot)",
                "Ne pas gerer les fuseaux horaires sur les dates (UTC vs local)",
                "Mapper le Owner vers un utilisateur qui n\u2019existe pas dans le CRM cible",
                "Oublier de mapper les etapes de pipeline (chaque stage doit avoir son equivalent)",
              ].map((e) => (
                <p key={e} className="text-[12px] text-[#555] flex items-start gap-2 leading-[1.6]">
                  <span className="text-[#EF4444] shrink-0 mt-0.5">!</span>{e}
                </p>
              ))}
            </div>
          </div>
        </section>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 7 : Migration technique
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch7")} id="ch7" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">07</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Migration technique pas a pas</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
            Le moment est venu de migrer concretement les donnees. Cette phase est la plus technique mais aussi la plus structuree. Si votre preparation (chapitres 4-6) est solide, la migration technique se deroule sans surprise.
          </p>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Les outils de migration</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { tool: "Import CSV natif", desc: "Gratuit, integre a tous les CRM. Ideal pour les petites migrations (moins de 50K contacts). Limitation : pas de gestion des associations complexes, pas d\u2019historique d\u2019activites.", price: "Gratuit", best: "Moins de 50K contacts, migration simple" },
              { tool: "Import2 / Trujay", desc: "Outil specialise de migration CRM-to-CRM. Migration automatique avec mapping integre. Supporte 20+ CRM. Gere les associations et l\u2019historique.", price: "$50 a $2 000 selon volume", best: "Migration standard entre CRM majeurs" },
              { tool: "Scripts custom (Python/Node)", desc: "Migration sur mesure via les APIs des deux CRM. Controle total sur le mapping, les transformations et la gestion des erreurs. Necessite un developpeur.", price: "$2 000 a $15 000 en dev", best: "Migrations complexes, custom objects, gros volumes" },
              { tool: "Make / n8n", desc: "Plateformes d\u2019automatisation no-code. Creez des scenarios de migration avec des modules pre-construits pour chaque CRM. Bon compromis entre flexibilite et simplicite.", price: "$0 a $300/mois", best: "Migration incrementale, synchronisation bi-directionnelle" },
            ].map((t) => (
              <div key={t.tool} className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[14px] font-semibold text-[#111] mb-1">{t.tool}</p>
                <p className="text-[12px] text-[#666] leading-[1.6] mb-3">{t.desc}</p>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] px-2 py-1 rounded-md bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">{t.price}</span>
                  <span className="text-[10px] text-[#999]">{t.best}</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Ordre de migration : la sequence critique</h3>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            L&apos;ordre de migration n&apos;est pas negociable. Les objets parents doivent etre migres avant les objets enfants pour que les associations fonctionnent. Voici la sequence que nous utilisons chez Ceres sur 100% de nos migrations :
          </p>

          {/* Migration sequence */}
          <div className="space-y-2 mb-8">
            {[
              { step: "Etape 1", obj: "Users et equipes", detail: "Creez tous les utilisateurs dans le CRM cible. Mappez les IDs pour l\u2019attribution des owners.", color: "#4B5EFC" },
              { step: "Etape 2", obj: "Companies (entreprises)", detail: "Migrez d\u2019abord les entreprises car les contacts et deals y seront associes. Verifiez le deduplication sur le domaine.", color: "#22C55E" },
              { step: "Etape 3", obj: "Contacts", detail: "Migrez les contacts et associez-les aux companies via l\u2019email du domaine ou un ID d\u2019association. Validez le mapping des owners.", color: "#F59E0B" },
              { step: "Etape 4", obj: "Deals (opportunites)", detail: "Migrez les deals avec leurs montants, etapes, dates de fermeture. Associez aux contacts et companies. Mappez chaque pipeline stage.", color: "#EF4444" },
              { step: "Etape 5", obj: "Activities (notes, appels, emails)", detail: "Migrez les activites et associez-les aux contacts/deals correspondants. C\u2019est souvent le plus volumineux (80%+ des enregistrements).", color: "#6C5CE7" },
              { step: "Etape 6", obj: "Tickets et custom objects", detail: "Migrez les objets restants. Testez les associations apres chaque batch. Verifiez les champs custom.", color: "#D4A27F" },
              { step: "Etape 7", obj: "Documents, pieces jointes", detail: "Dernier batch : les fichiers attaches. Souvent volumineux, parfois sacrifie au profit d\u2019un lien vers l\u2019ancien systeme.", color: "#999" },
            ].map((s, i) => (
              <div key={s.step} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold" style={{ background: s.color }}>{i + 1}</div>
                  {i < 6 && <div className="w-px h-8 bg-[#E8E8E8]" />}
                </div>
                <div className="flex-1 rounded-xl border border-[#E8E8E8] bg-white p-4 mb-0.5">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[11px] text-[#999] font-medium">{s.step}</p>
                    <p className="text-[13px] font-semibold text-[#111]">{s.obj}</p>
                  </div>
                  <p className="text-[12px] text-[#666] leading-[1.6]">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Gestion des associations</h3>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            Les associations entre objets sont le point le plus delicat de toute migration. Un contact doit etre associe a sa company, un deal a ses contacts et a sa company. Si une association est cassee, le CRM perd sa valeur. Trois methodes pour maintenir les associations :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { method: "Par ID source", detail: "Exportez les IDs des deux objets avec l\u2019association. Creez une table de correspondance ID source vers ID cible. Utilisez cette table pour recreer les associations. Methode la plus fiable." },
              { method: "Par email / domaine", detail: "Associez les contacts aux companies par le domaine de l\u2019email. Fonctionne bien pour contact vers company mais pas pour deal vers contact." },
              { method: "Par lookup field", detail: "Utilisez un champ temporaire dans le CRM cible pour stocker l\u2019ID source. Lancez ensuite un script d\u2019association par lot. Nettoyez les champs temporaires apres validation." },
            ].map((m) => (
              <div key={m.method} className="rounded-xl border border-[#E8E8E8] bg-white p-4">
                <p className="text-[13px] font-semibold text-[#111] mb-2">{m.method}</p>
                <p className="text-[12px] text-[#666] leading-[1.6]">{m.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Guides specifiques de migration</h3>

          <div className="space-y-4 mb-8">
            {/* Salesforce to HubSpot */}
            <div className="rounded-2xl bg-[#111] p-6">
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=salesforce.com&sz=32" alt="Salesforce" className="w-5 h-5" />
                <span className="text-white/30">&rarr;</span>
                <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                <p className="text-[15px] font-semibold text-white">Salesforce vers HubSpot</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Accounts = Companies, Opportunities = Deals, Leads = Contacts",
                  "Les Campaigns Salesforce deviennent des Lists ou Campaigns HubSpot",
                  "Les champs Formula deviennent des calculated properties ou des workflows",
                  "L\u2019historique des emails (EmailMessage) migre via l\u2019API Engagements",
                  "Les Reports Salesforce doivent etre recrees manuellement dans HubSpot",
                  "Activez l\u2019integration native HubSpot-Salesforce pour une migration progressive si besoin",
                ].map((p) => (
                  <div key={p} className="rounded-xl bg-white/5 p-3">
                    <p className="text-[11px] text-white/70 leading-[1.6]">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pipedrive to HubSpot */}
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=pipedrive.com&sz=32" alt="Pipedrive" className="w-5 h-5" />
                <span className="text-[#CCC]">&rarr;</span>
                <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                <p className="text-[15px] font-semibold text-[#111]">Pipedrive vers HubSpot</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Organizations = Companies, Persons = Contacts, Deals = Deals (mapping quasi direct)",
                  "Les Activities Pipedrive deviennent des Tasks et Notes HubSpot",
                  "Les Products deviennent des Line Items dans les Deals HubSpot",
                  "L\u2019import CSV natif suffit souvent (Pipedrive exporte proprement)",
                  "Les Automations Pipedrive doivent etre recreees en Workflows HubSpot",
                  "Migration generalement plus simple que Salesforce (2-3 semaines vs 4-6)",
                ].map((p) => (
                  <div key={p} className="rounded-xl bg-[#FAFAFA] p-3">
                    <p className="text-[11px] text-[#555] leading-[1.6]">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamics to HubSpot */}
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=microsoft.com&sz=32" alt="Dynamics" className="w-5 h-5" />
                <span className="text-[#CCC]">&rarr;</span>
                <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                <p className="text-[15px] font-semibold text-[#111]">Dynamics 365 vers HubSpot</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Accounts = Companies, Contacts = Contacts, Opportunities = Deals",
                  "Les Business Process Flows deviennent des Pipeline stages HubSpot",
                  "Les Power Automate flows migrent en Workflows HubSpot (pas de 1:1)",
                  "L\u2019export Dynamics est moins propre : prevoyez un nettoyage supplementaire",
                  "Les champs OptionSet (dropdowns) necessitent un mapping valeur par valeur",
                  "Cas client : TotalEnergies, 45K contacts, 120 workflows, 6 semaines",
                ].map((p) => (
                  <div key={p} className="rounded-xl bg-[#FAFAFA] p-3">
                    <p className="text-[11px] text-[#555] leading-[1.6]">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 8 : Tests et validation
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch8")} id="ch8" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">08</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Tests, validation et rollback</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
            Tester n&apos;est pas optionnel. Chez Ceres, nous testons a trois moments distincts : avant la migration (validation du mapping), pendant (monitoring des imports), et apres (validation de l&apos;integrite). C&apos;est ce protocole qui nous permet de garantir zero perte de donnees a nos clients.
          </p>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Phase 1 : Tests pre-migration</h3>

          <div className="rounded-xl border border-[#E8E8E8] bg-white p-5 mb-6">
            <div className="space-y-2">
              {[
                "Migration pilote sur 500 contacts dans un environnement sandbox",
                "Verification du mapping sur 20 enregistrements selectionnees manuellement (couvrant tous les cas de figure)",
                "Test des associations : chaque contact est bien lie a sa company et ses deals",
                "Test des picklists : chaque valeur source a bien ete convertie dans le CRM cible",
                "Test des owners : chaque enregistrement est attribue au bon utilisateur",
                "Test des dates : les formats sont corrects, pas de decalage de fuseau horaire",
                "Test des montants : pas d\u2019erreur de devise ou de decimales",
              ].map((t) => (
                <p key={t} className="text-[12px] text-[#555] flex items-start gap-2 leading-[1.6]">
                  <span className="w-4 h-4 rounded border border-[#E8E8E8] shrink-0 mt-0.5 flex items-center justify-center text-[8px] text-[#CCC]">&nbsp;</span>
                  {t}
                </p>
              ))}
            </div>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Phase 2 : Monitoring pendant la migration</h3>

          <div className="rounded-xl border border-[#E8E8E8] bg-white p-5 mb-6">
            <div className="space-y-2">
              {[
                "Suivi en temps reel du nombre d\u2019enregistrements migres par objet",
                "Monitoring des erreurs d\u2019import (lignes rejetees, champs invalides)",
                "Verification des taux de reussite par batch (objectif : plus de 99%)",
                "Alerte si plus de 1% d\u2019erreurs sur un batch (arreter et investiguer)",
                "Log detaille de chaque batch : heure, volume, taux de succes, erreurs",
              ].map((t) => (
                <p key={t} className="text-[12px] text-[#555] flex items-start gap-2 leading-[1.6]">
                  <span className="w-4 h-4 rounded border border-[#E8E8E8] shrink-0 mt-0.5 flex items-center justify-center text-[8px] text-[#CCC]">&nbsp;</span>
                  {t}
                </p>
              ))}
            </div>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Phase 3 : Validation post-migration</h3>

          <h4 className="text-[15px] font-semibold text-[#111] mb-3">Checklist d&apos;integrite des donnees</h4>

          <div className="rounded-xl border border-[#E8E8E8] bg-white overflow-hidden mb-8">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <th className="text-left p-3 text-[#999] font-medium">Verification</th>
                  <th className="text-center p-3 text-[#999] font-medium">Methode</th>
                  <th className="text-center p-3 text-[#999] font-medium">Seuil acceptable</th>
                </tr>
              </thead>
              <tbody className="text-[#555]">
                {[
                  { check: "Nombre total d\u2019enregistrements par objet", method: "Comparer source vs cible", seuil: "100% (0 perte)" },
                  { check: "Taux de remplissage des champs cles", method: "Rapport sur les champs vides", seuil: "Identique ou superieur a la source" },
                  { check: "Associations contact-company", method: "Echantillon de 100 contacts", seuil: "Plus de 99% correct" },
                  { check: "Associations deal-contact", method: "Echantillon de 50 deals", seuil: "Plus de 99% correct" },
                  { check: "Valeurs des picklists", method: "Rapport des valeurs par dropdown", seuil: "0 valeur non mappee" },
                  { check: "Owners attribues correctement", method: "Rapport par owner", seuil: "100% correct" },
                  { check: "Montants des deals", method: "Somme totale source vs cible", seuil: "Ecart de moins de 0.1%" },
                  { check: "Historique d\u2019activites", method: "Echantillon de 20 contacts", seuil: "Notes et emails presents" },
                ].map((r) => (
                  <tr key={r.check} className="border-b border-[#F5F5F5]">
                    <td className="p-3 font-medium text-[#111]">{r.check}</td>
                    <td className="p-3 text-center">{r.method}</td>
                    <td className="p-3 text-center text-[#22C55E] font-medium">{r.seuil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">User Acceptance Testing (UAT)</h3>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            La validation technique ne suffit pas. Vos key users doivent tester le nouveau CRM avec leurs propres scenarios metier. Demandez a chaque champion de realiser 5 taches courantes et de valider que les donnees sont presentes et correctes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Rechercher un contact connu et verifier ses informations",
              "Ouvrir un deal en cours et verifier le montant, l\u2019etape, les contacts associes",
              "Creer une nouvelle activite (note, appel) sur un contact migre",
              "Lancer un rapport de pipeline et comparer avec l\u2019ancien CRM",
              "Envoyer un email de test via le CRM a un contact migre",
              "Verifier qu\u2019une automation fonctionne (ex: lead scoring, notification)",
            ].map((t) => (
              <div key={t} className="rounded-xl bg-[#FAFAFA] p-3">
                <p className="text-[12px] text-[#555] flex items-start gap-2 leading-[1.6]">
                  <span className="w-4 h-4 rounded border border-[#E8E8E8] shrink-0 mt-0.5 flex items-center justify-center text-[8px] text-[#CCC]">&nbsp;</span>
                  {t}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Plan de rollback</h3>

          <div className="rounded-xl border-l-4 border-[#EF4444] bg-[#FEF2F2] p-5 mb-6">
            <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
              <strong className="text-[#111]">Quand declencher le rollback :</strong>
            </p>
            <div className="space-y-1.5">
              {[
                "Plus de 5% de perte de donnees apres migration complete",
                "Associations cassees de maniere systematique (pas juste quelques cas)",
                "Bug bloquant dans le CRM cible qui empeche le travail des equipes",
                "Rejet massif par les utilisateurs apres le go-live (moins de 20% d\u2019adoption a J+3)",
              ].map((r) => (
                <p key={r} className="text-[12px] text-[#555] flex items-start gap-2">
                  <span className="text-[#EF4444] shrink-0 mt-0.5">!</span>{r}
                </p>
              ))}
            </div>
            <p className="text-[13px] text-[#555] leading-[1.7] mt-3">
              <strong className="text-[#111]">Comment rollback :</strong> Restaurez le backup de l&apos;ancien CRM (fait avant la migration). Reactivez les integrations. Communiquez aux equipes. Analysez les causes d&apos;echec avant de relancer.
            </p>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Criteres Go / No-go</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="rounded-xl bg-[#F0FDF4] p-4">
              <p className="text-[11px] font-semibold text-[#22C55E] uppercase tracking-wider mb-2">Go (on lance le go-live)</p>
              {[
                "100% des enregistrements migres sans perte",
                "Associations verifiees sur un echantillon",
                "Key users ont valide leurs scenarios",
                "Integrations critiques testees en production",
                "Plan de formation pret et planifie",
                "Support intensif organise pour J+1 a J+5",
              ].map((i) => (
                <p key={i} className="text-[12px] text-[#555] mb-1.5 flex items-start gap-2 leading-[1.6]">
                  <span className="text-[#22C55E] shrink-0">+</span>{i}
                </p>
              ))}
            </div>
            <div className="rounded-xl bg-[#FEF2F2] p-4">
              <p className="text-[11px] font-semibold text-[#EF4444] uppercase tracking-wider mb-2">No-go (on reporte)</p>
              {[
                "Des donnees manquantes ou corrompues detectees",
                "Associations systematiquement cassees",
                "Integration critique non fonctionnelle",
                "Key users ont identifie des bloquants",
                "Equipe de support non disponible",
                "Formation non dispensee aux utilisateurs",
              ].map((i) => (
                <p key={i} className="text-[12px] text-[#555] mb-1.5 flex items-start gap-2 leading-[1.6]">
                  <span className="text-[#EF4444] shrink-0">-</span>{i}
                </p>
              ))}
            </div>
          </div>
        </section>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 9 : Formation et adoption
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch9")} id="ch9" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">09</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Formation et adoption</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
            Une migration techniquement parfaite echoue si les equipes n&apos;adoptent pas le nouveau CRM. L&apos;adoption est le vrai KPI de succes d&apos;une migration. Chez TotalEnergies, l&apos;adoption a atteint 94% en 3 semaines grace a un programme structure de formation par role et un reseau de champions internes.
          </p>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Formation par role</h3>

          <div className="space-y-3 mb-8">
            {[
              {
                role: "Administrateurs CRM",
                duree: "2 jours (16h)",
                contenu: "Configuration avancee, gestion des proprietes, workflows, droits et permissions, integrations, reporting custom, maintenance. Certification HubSpot Admin recommandee.",
                format: "Formation individuelle ou petit groupe (2-3 admins)"
              },
              {
                role: "Commerciaux (sales)",
                duree: "1 jour (8h) + 2h de rappel a J+15",
                contenu: "Navigation dans le CRM, gestion des contacts et deals, pipeline management, sequences email, logging d\u2019activites, app mobile. Focus sur les 5 actions quotidiennes.",
                format: "Formation en groupe (8-12 personnes max), hands-on avec leurs vrais contacts"
              },
              {
                role: "Equipe marketing",
                duree: "1.5 jours (12h)",
                contenu: "Listes et segmentation, email marketing, workflows d\u2019automatisation, formulaires, landing pages, reporting marketing, integration avec les ads. Si Marketing Hub inclus.",
                format: "Formation en groupe (4-8 personnes), exercices pratiques sur leurs campagnes"
              },
              {
                role: "Managers et direction",
                duree: "0.5 jour (4h)",
                contenu: "Dashboards et reporting, forecasting, suivi d\u2019equipe, KPIs de performance. Les managers doivent comprendre la valeur du CRM pour eux, pas juste pour leurs equipes.",
                format: "Presentation executive + demo interactive de leurs dashboards personnalises"
              },
            ].map((r) => (
              <div key={r.role} className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[14px] font-semibold text-[#111]">{r.role}</p>
                  <span className="text-[10px] px-2 py-1 rounded-md bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">{r.duree}</span>
                </div>
                <p className="text-[12px] text-[#666] leading-[1.65] mb-2">{r.contenu}</p>
                <p className="text-[11px] text-[#999]"><strong className="text-[#555]">Format :</strong> {r.format}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Change management : les cles du succes</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { cle: "Communication en amont (J-30)", detail: "Annoncez la migration 1 mois avant. Expliquez le pourquoi (pas juste le comment). Partagez un calendrier clair. Repondez aux inquietudes. Les equipes qui comprennent le pourquoi adoptent 2x plus vite." },
              { cle: "Programme champions", detail: "Identifiez 1 champion par equipe de 10 personnes. Formez-les en avance (J-15). Ils deviennent le premier point de support pour leurs collegues. Recompensez-les visiblement (badge, prime, reconnaissance)." },
              { cle: "Quick wins visibles", detail: "Montrez la valeur du nouveau CRM des la premiere semaine. Un dashboard que l\u2019ancien CRM ne pouvait pas faire, une automation qui economise 30 min/jour, un rapport en 1 clic au lieu de 2h d\u2019export." },
              { cle: "Feedback loop", detail: "Creez un canal Slack ou Teams dedie au nouveau CRM. Recueillez les retours quotidiennement pendant les 2 premieres semaines. Corrigez les irritants rapidement. Les equipes qui se sentent ecoutees adoptent plus facilement." },
            ].map((c) => (
              <div key={c.cle} className="rounded-xl border border-[#E8E8E8] bg-white p-4">
                <p className="text-[13px] font-semibold text-[#111] mb-2">{c.cle}</p>
                <p className="text-[12px] text-[#666] leading-[1.6]">{c.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Mesurer l&apos;adoption : les KPIs a suivre</h3>

          <div className="rounded-xl border border-[#E8E8E8] bg-white overflow-hidden mb-8">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
                  <th className="text-left p-3 text-[#999] font-medium">KPI</th>
                  <th className="text-center p-3 text-[#999] font-medium">Cible J+7</th>
                  <th className="text-center p-3 text-[#999] font-medium">Cible J+30</th>
                  <th className="text-center p-3 text-[#999] font-medium">Cible J+90</th>
                </tr>
              </thead>
              <tbody className="text-[#555]">
                {[
                  { kpi: "Taux de connexion quotidien", j7: "60%", j30: "80%", j90: "90%+" },
                  { kpi: "Contacts crees/mis a jour par semaine", j7: "50%+ de la baseline", j30: "100% de la baseline", j90: "120%+ de la baseline" },
                  { kpi: "Deals mis a jour regulierement", j7: "40%", j30: "75%", j90: "90%+" },
                  { kpi: "Activites loguees (appels, notes)", j7: "30%", j30: "70%", j90: "85%+" },
                  { kpi: "Emails envoyes depuis le CRM", j7: "20%", j30: "60%", j90: "80%+" },
                  { kpi: "Tickets support CRM ouverts", j7: "Normal (pic)", j30: "En baisse", j90: "Minimal" },
                ].map((r) => (
                  <tr key={r.kpi} className="border-b border-[#F5F5F5]">
                    <td className="p-3 font-medium text-[#111]">{r.kpi}</td>
                    <td className="p-3 text-center">{r.j7}</td>
                    <td className="p-3 text-center">{r.j30}</td>
                    <td className="p-3 text-center text-[#22C55E] font-medium">{r.j90}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Le plan 30-60-90 jours d&apos;adoption</h3>

          <div className="space-y-3 mb-6">
            {[
              {
                period: "Jours 1-30 : Apprentissage",
                actions: "Formation initiale, support intensif, correction des bugs, quick wins. Objectif : chaque utilisateur maitrise les 5 actions quotidiennes. Benchmark : 80% de connexion quotidienne.",
                color: "#4B5EFC"
              },
              {
                period: "Jours 31-60 : Autonomie",
                actions: "Reduction du support, introduction des fonctionnalites avancees (sequences, workflows), creation de rapports personnalises, optimisation des processus. Benchmark : 100% de la baseline de productivite.",
                color: "#22C55E"
              },
              {
                period: "Jours 61-90 : Optimisation",
                actions: "Automatisation avancee, dashboards de pilotage, integration des outils complementaires, premier bilan ROI, formation continue sur les nouvelles features. Benchmark : productivite superieure a l\u2019ancien CRM.",
                color: "#F59E0B"
              },
            ].map((p) => (
              <div key={p.period} className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: p.color }} />
                  <p className="text-[14px] font-semibold text-[#111]">{p.period}</p>
                </div>
                <p className="text-[12px] text-[#666] leading-[1.65]">{p.actions}</p>
              </div>
            ))}
          </div>
        </section>

        <Connector />

        {/* ════════════════════════════════════════════════════════════
            CHAPITRE 10 : Les 30 premiers jours post-migration
        ════════════════════════════════════════════════════════════ */}
        <section ref={setRef("ch10")} id="ch10" className="scroll-mt-[120px] mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">10</div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Les 30 premiers jours post-migration</h2>
          </div>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
            Les 30 premiers jours sont critiques. C&apos;est la periode ou la migration se transforme en succes ou en echec. Votre objectif : stabiliser, supporter et optimiser. Voici le plan semaine par semaine que nous appliquons chez Ceres sur chaque migration.
          </p>

          {/* Timeline */}
          <div className="mb-10">
            {/* Week 1 */}
            <div className="relative pl-8 pb-8 border-l-2 border-[#4B5EFC]">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#4B5EFC]" />
              <div className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[11px] font-semibold text-[#4B5EFC] uppercase tracking-wider mb-1">Semaine 1</p>
                <p className="text-[16px] font-semibold text-[#111] mb-3">Stabiliser et supporter</p>
                <div className="space-y-2">
                  {[
                    "Support en temps reel : canal Slack/Teams dedie avec temps de reponse de moins de 30 min",
                    "Stand-up quotidien de 15 min avec l\u2019equipe projet pour traiter les remontees",
                    "Correction des bugs et anomalies signales (objectif : 0 bug bloquant a J+5)",
                    "Verification quotidienne des integrations (emails, calendrier, telephonie)",
                    "Suivi des KPIs d\u2019adoption : taux de connexion, activites loguees",
                    "Communication quotidienne : tips du jour par email ou Slack",
                    "Sessions de support individuel pour les utilisateurs en difficulte",
                  ].map((t) => (
                    <p key={t} className="text-[12px] text-[#555] flex items-start gap-2 leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] shrink-0 mt-1.5" />{t}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Week 2-3 */}
            <div className="relative pl-8 pb-8 border-l-2 border-[#22C55E]">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#22C55E]" />
              <div className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[11px] font-semibold text-[#22C55E] uppercase tracking-wider mb-1">Semaines 2-3</p>
                <p className="text-[16px] font-semibold text-[#111] mb-3">Optimiser les workflows et dashboards</p>
                <div className="space-y-2">
                  {[
                    "Deployer les workflows automatises (lead scoring, assignation, notifications)",
                    "Creer les dashboards de pilotage pour chaque role (sales, marketing, management)",
                    "Mettre en place les sequences de vente (follow-up, nurturing, reactivation)",
                    "Optimiser les vues et filtres pour chaque equipe",
                    "Configurer les rapports automatiques hebdomadaires",
                    "Former les champions sur les fonctionnalites avancees",
                    "Deuxieme session de formation pour les utilisateurs qui en ont besoin",
                  ].map((t) => (
                    <p key={t} className="text-[12px] text-[#555] flex items-start gap-2 leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0 mt-1.5" />{t}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Week 4 */}
            <div className="relative pl-8">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#F59E0B]" />
              <div className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[11px] font-semibold text-[#F59E0B] uppercase tracking-wider mb-1">Semaine 4</p>
                <p className="text-[16px] font-semibold text-[#111] mb-3">Premier bilan et prochaines etapes</p>
                <div className="space-y-2">
                  {[
                    "Bilan de migration complet : donnees, adoption, bugs, retours utilisateurs",
                    "Revue des KPIs d\u2019adoption vs objectifs (connexion, activites, deals mis a jour)",
                    "Identification des optimisations prioritaires pour les 60 prochains jours",
                    "Desactivation de l\u2019ancien CRM (apres validation finale et archivage)",
                    "Celebration de la reussite avec les equipes (ne sous-estimez pas ce point)",
                    "Planification de la phase 2 : fonctionnalites avancees, integrations supplementaires",
                    "Redaction du document de lessons learned pour les futures migrations",
                  ].map((t) => (
                    <p key={t} className="text-[12px] text-[#555] flex items-start gap-2 leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0 mt-1.5" />{t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Checklist post-migration complete</h3>

          <div className="rounded-2xl bg-[#111] p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { cat: "Donnees", items: "Integrite des enregistrements validee, Doublons post-migration nettoyes, Associations verifiees, Owners corrects" },
                { cat: "Integrations", items: "Email sync active et fonctionnelle, Calendrier connecte, Telephonie integree, Outils tiers reconnectes" },
                { cat: "Automations", items: "Workflows de lead scoring actifs, Sequences de vente deployees, Notifications configurees, Taches automatiques en place" },
                { cat: "Reporting", items: "Dashboards sales operationnels, Dashboards marketing operationnels, Rapports automatiques programmes, Forecast configure" },
                { cat: "Utilisateurs", items: "Tous les users ont acces, Droits et permissions valides, App mobile installee, Signature email configuree" },
                { cat: "Documentation", items: "Playbook CRM finalise, Processus documentes dans Notion, FAQ des questions frequentes, Contacts support identifies" },
              ].map((c) => (
                <div key={c.cat} className="rounded-xl bg-white/5 p-4">
                  <p className="text-[11px] font-semibold text-[#4B5EFC] uppercase tracking-wider mb-2">{c.cat}</p>
                  {c.items.split(", ").map((item) => (
                    <p key={item} className="text-[11px] text-white/60 mb-1 flex items-start gap-2 leading-[1.5]">
                      <span className="text-white/20 shrink-0">-</span>{item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Cas clients</h3>

          <div className="space-y-3 mb-8">
            {[
              {
                company: "TotalEnergies",
                contacts: "45 000 contacts",
                migration: "Dynamics 365 vers HubSpot",
                duree: "6 semaines",
                result: "Zero perte de donnees, adoption a 94% en 3 semaines, 120 workflows reconstruits (sur 45 pertinents), gain de $180K/an en licences et maintenance.",
                initial: "L"
              },
              {
                company: "Dougs",
                contacts: "30 000 contacts",
                migration: "Salesforce vers HubSpot",
                duree: "4 semaines",
                result: "26% de doublons supprimes au nettoyage, adoption a 88% en 2 semaines, delivrabilite email +14 points, economie de $95K/an.",
                initial: "D"
              },
              {
                company: "HiPay",
                contacts: "Double migration",
                migration: "Pardot + Salesforce vers HubSpot",
                duree: "8 semaines",
                result: "Migration la plus complexe : 2 systemes a fusionner. 200+ champs mappes, alignement marketing-sales pour la premiere fois, pipeline unifie. ROI visible en 60 jours.",
                initial: "H"
              },
            ].map((c) => (
              <div key={c.company} className="rounded-xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[12px] font-bold shrink-0">{c.initial}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-[14px] font-semibold text-[#111]">{c.company}</p>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">{c.contacts}</span>
                    </div>
                    <p className="text-[12px] text-[#999] mb-2">{c.migration} - {c.duree}</p>
                    <p className="text-[12px] text-[#555] leading-[1.65]">{c.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-[18px] font-semibold text-[#111] mb-4">Quand faire appel a Ceres</h3>

          <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
            Ce guide vous donne toute la methodologie pour mener votre migration en autonomie. Mais certaines situations justifient un accompagnement professionnel :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Plus de 20 000 contacts a migrer",
              "Migration depuis Salesforce avec custom Apex",
              "Double migration (2 systemes a fusionner)",
              "Equipe sans profil RevOps ou CRM Manager",
              "Timeline serree (moins de 4 semaines)",
              "Besoins d\u2019integrations complexes (ERP, BI, custom API)",
            ].map((s) => (
              <div key={s} className="rounded-xl bg-[#4B5EFC]/5 p-3">
                <p className="text-[12px] text-[#555] flex items-start gap-2 leading-[1.6]">
                  <span className="text-[#4B5EFC] shrink-0 mt-0.5">+</span>{s}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Connector />

        {/* ── CTA Section ── */}
        <section className="mb-10">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-center">
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a migrer votre CRM ?</h2>
            <p className="text-[14px] text-white/50 mb-6 max-w-[480px] mx-auto leading-[1.7]">
              Telechargez le guide PDF complet avec les templates et checklists, ou reservez un appel avec notre equipe pour un accompagnement sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/guide-migration-crm"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4B5EFC] text-white text-[13px] font-medium hover:bg-[#3A4DE0] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 2v8M4 7l4 4 4-4M2 13h12" /></svg>
                Telecharger le guide PDF
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white text-[13px] font-medium hover:bg-white/5 transition-colors"
              >
                <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                Reserver un appel
              </Link>
            </div>
            <p className="text-[11px] text-white/20 mt-4">Reponse sous 24h. Migration en 4 a 8 semaines.</p>
          </div>
        </section>

        {/* ── Footer note ── */}
        <div className="text-center text-[11px] text-[#CCC]">
          <p>Guide mis a jour en mars 2026. Donnees verifiees. Tarifs susceptibles d&apos;evoluer.</p>
          <p className="mt-1">
            <Link href="/guide-migration-crm" className="text-[#4B5EFC] hover:underline">Telecharger le guide</Link>
            {" "} | {" "}
            <Link href="/contact" className="text-[#4B5EFC] hover:underline">Contacter Ceres</Link>
            {" "} | {" "}
            <Link href="/" className="hover:text-[#999] transition-colors">Accueil</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
