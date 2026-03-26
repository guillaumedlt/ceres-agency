"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── DATA ─── */

const philosophies = [
  {
    name: "HubSpot",
    subtitle: "La plateforme unifiee",
    desc: "HubSpot est ne en 2006 avec une conviction : le marketing, les ventes et le service client doivent fonctionner sur une seule plateforme. Le CRM gratuit est arrive en 2014, et depuis, chaque Hub (Marketing, Sales, Service, Operations, Content) partage la meme base de donnees, la meme interface, la meme logique. L\u2019objectif : que chaque equipe puisse etre autonome sans dependre d\u2019un admin technique. L\u2019IA (Breeze) est integree nativement dans chaque Hub, sans surcout. Le modele economique repose sur la croissance des fonctionnalites utilisees, pas sur la complexite.",
    principles: ["Plateforme tout-en-un, une seule base de donnees", "Interface intuitive, configurable sans code", "IA native (Breeze) incluse dans chaque Hub", "Tarification transparente, pas de couts caches", "Adoption rapide : 90%+ en moyenne"],
    color: "#FF7A59",
  },
  {
    name: "Salesforce",
    subtitle: "L\u2019ecosysteme modulaire",
    desc: "Salesforce est ne en 1999 comme le premier CRM cloud. Sa force : une flexibilite quasi illimitee. Chaque brique (Sales Cloud, Service Cloud, Marketing Cloud, Pardot, Einstein, MuleSoft, Tableau) est un produit independant avec sa propre licence, sa propre interface et souvent sa propre base de donnees. La personnalisation passe par Apex (code proprietaire), Visualforce et Lightning. L\u2019ecosysteme AppExchange offre des milliers d\u2019add-ons. Le revers : chaque ajout de fonctionnalite necessite un consultant certifie, et le cout total de possession (TCO) explose rapidement.",
    principles: ["Flexibilite technique quasi illimitee (Apex, LWC)", "Ecosysteme modulaire : chaque Cloud est un produit", "AppExchange : milliers d\u2019add-ons (souvent payants)", "Necessite des admins et developpeurs certifies", "TCO eleve : licences + consultants + maintenance"],
    color: "#00A1E0",
  },
];

const comparisonTable = [
  { critere: "CRM gratuit", hubspot: "Oui, illimite (contacts, deals, taches)", salesforce: "Non. Essai 30 jours uniquement" },
  { critere: "Prix entree (par user/mois)", hubspot: "15 EUR (Starter)", salesforce: "25 EUR (Essentials) - fonctionnalites tres limitees" },
  { critere: "Prix Pro (par user/mois)", hubspot: "90 EUR (Pro)", salesforce: "80 EUR (Professional) - sans automation ni API" },
  { critere: "Prix Enterprise (par user/mois)", hubspot: "150 EUR (Enterprise)", salesforce: "165 EUR (Enterprise) - minimum recommande" },
  { critere: "Marketing automation", hubspot: "Marketing Hub integre (meme base)", salesforce: "Marketing Cloud ou Pardot (base separee, licence separee)" },
  { critere: "Service client", hubspot: "Service Hub integre (meme base)", salesforce: "Service Cloud (licence separee)" },
  { critere: "Operations & data quality", hubspot: "Operations Hub natif (data sync, code custom, data quality)", salesforce: "Pas de solution native, outils tiers requis" },
  { critere: "IA integree", hubspot: "Breeze : AI agents, copilot, contenu, scoring (inclus)", salesforce: "Einstein : licences supplementaires, setup complexe" },
  { critere: "Interface utilisateur", hubspot: "Unifiee, intuitive, meme UX partout", salesforce: "Variable selon les Clouds, courbe d\u2019apprentissage elevee" },
  { critere: "Personnalisation sans code", hubspot: "Oui : workflows, proprietes, vues, dashboards", salesforce: "Limitee sans Flow/Apex pour les cas avances" },
  { critere: "Personnalisation avec code", hubspot: "Custom coded actions (JS/Python), custom objects, API", salesforce: "Apex, LWC, Visualforce, SOQL (flexibilite maximale)" },
  { critere: "Taux d\u2019adoption moyen", hubspot: "90%+", salesforce: "40% (source : Salesforce Ben, 2024)" },
  { critere: "Temps de deploiement", hubspot: "2-8 semaines (Pro/Enterprise)", salesforce: "3-12 mois (Enterprise)" },
  { critere: "Cout d\u2019implementation", hubspot: "5 000-25 000 EUR", salesforce: "50 000-200 000 EUR" },
  { critere: "Admin necessaire", hubspot: "Non obligatoire (interface self-service)", salesforce: "Admin certifie obligatoire" },
  { critere: "Integrations natives", hubspot: "1 500+ (beaucoup gratuites)", salesforce: "AppExchange : 4 000+ (souvent payantes)" },
  { critere: "Reporting", hubspot: "Custom report builder intuitif, dashboards drag-and-drop", salesforce: "Reports & Dashboards puissants mais complexes" },
  { critere: "Custom objects", hubspot: "Oui (Enterprise), interface no-code", salesforce: "Oui (toutes editions), tres flexible" },
  { critere: "Multi-devise", hubspot: "Oui (Enterprise), jusqu\u2019a 200 devises", salesforce: "Oui (Enterprise), tres avance" },
  { critere: "Sequences commerciales", hubspot: "Sequences + Playbooks inclus (Pro+)", salesforce: "High Velocity Sales (licence supplementaire)" },
];

const tcoComparison = [
  {
    titre: "Equipe de 10 commerciaux - PME",
    hubspot: { licence: "10 800 EUR/an (Sales Hub Pro)", implementation: "8 000 EUR", maintenance: "0 EUR (pas d\u2019admin dedie)", formation: "2 000 EUR", total1an: "20 800 EUR", total3ans: "42 400 EUR" },
    salesforce: { licence: "19 800 EUR/an (Enterprise)", implementation: "60 000 EUR", maintenance: "24 000 EUR/an (admin mi-temps)", formation: "5 000 EUR", total1an: "108 800 EUR", total3ans: "240 400 EUR" },
    color: "#22C55E",
  },
  {
    titre: "Equipe de 30 users - Scale-up",
    hubspot: { licence: "54 000 EUR/an (Sales + Marketing Pro)", implementation: "15 000 EUR", maintenance: "12 000 EUR/an (ops mi-temps)", formation: "5 000 EUR", total1an: "86 000 EUR", total3ans: "218 000 EUR" },
    salesforce: { licence: "89 100 EUR/an (Enterprise + Pardot)", implementation: "120 000 EUR", maintenance: "60 000 EUR/an (admin + dev)", formation: "15 000 EUR", total1an: "284 100 EUR", total3ans: "731 400 EUR" },
    color: "#4B5EFC",
  },
  {
    titre: "Equipe de 80 users - ETI",
    hubspot: { licence: "144 000 EUR/an (Enterprise full stack)", implementation: "25 000 EUR", maintenance: "36 000 EUR/an (ops dedie)", formation: "10 000 EUR", total1an: "215 000 EUR", total3ans: "575 000 EUR" },
    salesforce: { licence: "237 600 EUR/an (Enterprise full stack)", implementation: "200 000 EUR", maintenance: "120 000 EUR/an (2 admins + dev)", formation: "30 000 EUR", total1an: "587 600 EUR", total3ans: "1 541 800 EUR" },
    color: "#6D00CC",
  },
];

const implementationComparison = [
  { critere: "Onboarding initial", hubspot: "1-2 semaines (interface intuitive)", salesforce: "4-8 semaines (setup technique)" },
  { critere: "Configuration pipelines", hubspot: "1-2 jours (drag-and-drop)", salesforce: "1-2 semaines (Page Layouts, Record Types)" },
  { critere: "Automatisations", hubspot: "Workflows visuels, pas de code requis", salesforce: "Flow Builder ou Apex (developpeur souvent necessaire)" },
  { critere: "Import de donnees", hubspot: "Import CSV natif + mapping assiste", salesforce: "Data Loader ou import wizard (limites)" },
  { critere: "Integrations", hubspot: "Connecteurs natifs one-click", salesforce: "MuleSoft ou connecteurs AppExchange (setup complexe)" },
  { critere: "Formation equipes", hubspot: "HubSpot Academy (gratuit) + 2-3 sessions custom", salesforce: "Trailhead + consultant externe (5-10 sessions)" },
  { critere: "Go-live", hubspot: "2-8 semaines apres kickoff", salesforce: "3-12 mois apres kickoff" },
];

const reportingComparison = [
  { critere: "Report builder", hubspot: "Custom report builder drag-and-drop, multi-objets", salesforce: "Report Builder classique + CRM Analytics (Tableau)" },
  { critere: "Dashboards", hubspot: "Illimites (Pro+), drag-and-drop, partageables", salesforce: "Limites selon edition, configuration plus rigide" },
  { critere: "Attribution marketing", hubspot: "Attribution multi-touch native (Enterprise)", salesforce: "Necessite Pardot ou Einstein Attribution (payant)" },
  { critere: "Funnel reporting", hubspot: "Natif : deal stage velocity, conversion rates", salesforce: "Customisable mais requiert configuration" },
  { critere: "Revenue analytics", hubspot: "Forecasting natif + deal scoring IA", salesforce: "Einstein Forecasting (licence supplementaire)" },
  { critere: "Courbe d\u2019apprentissage", hubspot: "Faible : un commercial peut creer ses reports", salesforce: "Elevee : souvent delegue a l\u2019admin" },
];

const integrationComparison = [
  { critere: "Marketplace", hubspot: "1 500+ integrations, beaucoup gratuites", salesforce: "AppExchange 4 000+, souvent payantes (50-200 EUR/mois)" },
  { critere: "API", hubspot: "REST API complete, bien documentee, rate limits genereux", salesforce: "REST + SOAP API, tres puissante mais complexe" },
  { critere: "iPaaS natif", hubspot: "Operations Hub (data sync bi-directionnelle)", salesforce: "MuleSoft (licence separee, 30 000+ EUR/an)" },
  { critere: "Outils tiers (Make, Zapier)", hubspot: "Excellent support, declencheurs riches", salesforce: "Support correct mais moins de triggers natifs" },
  { critere: "ERP", hubspot: "Connecteurs NetSuite, SAP, Sage via Ops Hub", salesforce: "Connecteurs via MuleSoft ou middleware tiers" },
  { critere: "BI / Data warehouse", hubspot: "Export Snowflake natif, connecteurs BigQuery", salesforce: "Tableau natif (apres acquisition), connecteurs varies" },
];

const scalabiliteItems = [
  { critere: "De 5 a 50 users", hubspot: "Ideal : montee en charge fluide, pas de reconfiguration", salesforce: "Surdimensionne : cout et complexite injustifies" },
  { critere: "De 50 a 200 users", hubspot: "Tres adapte : Enterprise couvre 95% des besoins", salesforce: "Adapte : la puissance commence a se justifier" },
  { critere: "200+ users multi-entites", hubspot: "Possible mais limites sur le partitioning avance", salesforce: "Terrain de predilection : multi-org, sandbox, compliance" },
  { critere: "Objets custom complexes", hubspot: "Custom Objects (Enterprise) : suffisant pour la majorite", salesforce: "Flexibilite maximale : relations polymorphes, Apex triggers" },
  { critere: "Compliance (SOC2, HIPAA)", hubspot: "SOC2, GDPR natif. HIPAA en beta", salesforce: "SOC2, HIPAA, FedRAMP, Shield (chiffrement avance)" },
  { critere: "Multi-devises avance", hubspot: "200 devises, taux manuels ou automatiques", salesforce: "Multi-devise avance avec dated exchange rates" },
];

const verdictHubspot = [
  "PME et scale-ups de 5 a 200 utilisateurs",
  "Equipes qui veulent etre autonomes sans admin dedie",
  "Entreprises qui ont besoin de marketing + sales + service sur une seule plateforme",
  "Budget CRM inferieur a 150 000 EUR/an (licences + implementation + maintenance)",
  "Besoin de deploiement rapide (semaines, pas mois)",
  "Equipes commerciales qui n\u2019adoptent pas leur CRM actuel",
  "Entreprises qui veulent l\u2019IA integree sans surcout",
];

const verdictSalesforce = [
  "Grands groupes avec 200+ utilisateurs et des besoins de compliance avances (HIPAA, FedRAMP)",
  "Entreprises avec des process metier tres specifiques necessitant du code custom (Apex)",
  "Organisations avec un budget CRM superieur a 300 000 EUR/an et des equipes techniques dediees",
  "Secteurs tres reglementes avec des besoins de chiffrement au niveau champ (Shield)",
  "Entreprises deja fortement investies dans l\u2019ecosysteme Salesforce (CPQ, Vlocity, MuleSoft)",
];

const faqItems = [
  { q: "HubSpot est-il vraiment gratuit ?", a: "Le CRM HubSpot est gratuit et illimite : contacts, deals, taches, reporting de base. Les fonctionnalites avancees (automation, sequences, custom reporting) sont dans les Hubs payants a partir de 15 EUR/mois/utilisateur." },
  { q: "Salesforce est-il meilleur que HubSpot pour les grandes entreprises ?", a: "Pour les organisations de 200+ utilisateurs avec des besoins de compliance avances (HIPAA, FedRAMP) et des process metier tres specifiques, Salesforce reste pertinent. Pour les autres, HubSpot Enterprise couvre 95% des besoins a un cout 2 a 3x inferieur." },
  { q: "Peut-on migrer de Salesforce vers HubSpot facilement ?", a: "Oui. Nous avons migre plus de 30 000 contacts depuis Salesforce vers HubSpot. Le processus prend 8 a 16 semaines selon la complexite. Contacts, deals, activites, workflows : tout est migre sans perte de donnees." },
  { q: "HubSpot peut-il gerer des custom objects comme Salesforce ?", a: "Oui, depuis HubSpot Enterprise. Vous pouvez creer des objets custom avec des proprietes, des associations et des workflows dedies. L\u2019interface est no-code, contrairement a Salesforce qui necessite souvent un developpeur." },
  { q: "Quel est le vrai cout de Salesforce vs HubSpot sur 3 ans ?", a: "Pour une equipe de 10 commerciaux : HubSpot revient a environ 42 000 EUR sur 3 ans (tout compris). Salesforce : environ 240 000 EUR (licences + implementation + admin + formation). Le rapport est de 1 a 5,7." },
  { q: "HubSpot a-t-il une IA aussi puissante qu\u2019Einstein ?", a: "HubSpot Breeze offre des AI agents, un copilot, du content generation, du predictive scoring et de la conversation intelligence, le tout inclus dans les licences Pro et Enterprise. Einstein necessite des licences supplementaires et une configuration plus complexe." },
  { q: "Peut-on utiliser HubSpot et Salesforce ensemble ?", a: "Oui, via l\u2019integration native HubSpot-Salesforce. Mais ce setup cree de la complexite (sync bi-directionnelle, conflits de donnees). La plupart des entreprises qui testent les deux finissent par consolider sur HubSpot." },
  { q: "Le reporting HubSpot est-il aussi puissant que Salesforce ?", a: "Pour 90% des cas d\u2019usage, oui. Le custom report builder HubSpot est intuitif, multi-objets, et ne necessite pas d\u2019admin. Salesforce a l\u2019avantage avec CRM Analytics (Tableau) pour le BI avance, mais c\u2019est une licence supplementaire." },
  { q: "HubSpot gere-t-il le multi-entites / multi-marques ?", a: "HubSpot supporte les business units (Enterprise), le partitioning de contenu et les equipes avec permissions granulaires. Pour les setups multi-org vraiment complexes (10+ entites, compliance cross-border), Salesforce est plus mature." },
  { q: "Quel CRM choisir pour une startup en croissance ?", a: "HubSpot, sans hesitation. CRM gratuit pour demarrer, montee en charge fluide vers Pro puis Enterprise, deploiement en semaines, pas besoin d\u2019admin dedie. Salesforce est surdimensionne et trop couteux pour une startup." },
  { q: "Comment Ceres peut nous aider a choisir ?", a: "Nous sommes partenaires HubSpot mais nous conseillons objectivement. Si Salesforce est le bon choix pour votre situation, nous vous le dirons. L\u2019appel de cadrage de 30 min est gratuit et permet d\u2019evaluer votre besoin sans engagement." },
  { q: "Peut-on connecter HubSpot a un ERP comme SAP ou NetSuite ?", a: "Oui. HubSpot Operations Hub offre des syncs bi-directionnelles avec les principaux ERP. Des connecteurs natifs existent pour NetSuite, et des integrations via Make ou des custom coded actions pour SAP, Sage, etc." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Comparatif HubSpot vs Salesforce", provider: { "@type": "Organization", name: "Ceres" }, description: "Comparatif complet HubSpot vs Salesforce 2026 : fonctionnalites, prix, implementation, reporting, integrations, scalabilite. Analyse objective pour choisir le bon CRM.", serviceType: "CRM Consulting", areaServed: { "@type": "Country", name: "France" } },
  { "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
]};

/* ─── CHECKMARK SVG ─── */
const Check = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
    <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── PAGE ─── */

export default function HubSpotVsSalesforcePage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── HERO ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Comparatif CRM 2026</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            HubSpot vs Salesforce : le comparatif complet pour choisir en 2026
          </h1>
          <p className="text-[17px] text-[#666] max-w-[620px] mx-auto leading-[1.7] mb-4">
            Deux CRM leaders, deux philosophies radicalement differentes. On compare tout : fonctionnalites, prix reels, implementation, reporting, integrations, scalabilite. Sans parti pris, avec des chiffres.
          </p>
          <p className="text-[13px] text-[#999] mb-8">Mis a jour en mars 2026. Base sur notre experience d&apos;integration des deux plateformes.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Besoin d&apos;aide pour choisir ?
          </Link>
        </section>
        <Connector />

        {/* ── LES 2 PHILOSOPHIES ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Philosophies</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Deux philosophies fondamentalement differentes</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Avant de comparer les fonctionnalites, il faut comprendre la vision de chaque plateforme. C&apos;est la que tout se joue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {philosophies.map((p) => (
              <div key={p.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: p.color }} />
                  <h3 className="text-[18px] font-semibold text-[#111]">{p.name}</h3>
                </div>
                <p className="text-[12px] font-medium text-[#999] mb-4">{p.subtitle}</p>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-5">{p.desc}</p>
                <ul className="space-y-1.5">
                  {p.principles.map((pr) => (
                    <li key={pr} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <Check />{pr}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[14px] font-semibold text-[#111] mb-3">Ce que ca veut dire concretement</h3>
            <p className="text-[12px] text-[#777] leading-[1.65] mb-3">La philosophie de HubSpot (plateforme unifiee) signifie que vos equipes marketing, commerciales et service client travaillent sur la meme interface, voient les memes donnees, et peuvent etre autonomes sans competences techniques. Le cout total est previsible.</p>
            <p className="text-[12px] text-[#777] leading-[1.65]">La philosophie de Salesforce (ecosysteme modulaire) signifie une flexibilite technique quasi illimitee, mais au prix d&apos;une complexite structurelle. Chaque ajout de fonctionnalite necessite un consultant, chaque nouvelle equipe necessite une nouvelle licence, et le cout total de possession est souvent 3 a 5 fois le prix affiche.</p>
          </div>
        </section>
        <Connector />

        {/* ── COMPARAISON FONCTIONNALITES ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Fonctionnalites</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Comparaison fonctionnalites : 20 criteres passes au crible</h2>
              <p className="text-[13px] text-white/40">Chaque critere est evalue sur la base de notre experience d&apos;integration des deux plateformes, pas sur des brochures marketing.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[25%]">Critere</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[37.5%]">HubSpot</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 w-[37.5%]">Salesforce</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="text-[12px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-[#22C55E]/80 py-3 pr-4">{row.hubspot}</td>
                      <td className="text-[11px] text-white/30 py-3">{row.salesforce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── PRIX (TCO REEL) ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Prix & TCO</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Le vrai cout : TCO sur 3 ans</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">Le prix affiche ne veut rien dire. Ce qui compte, c&apos;est le cout total de possession (TCO) : licences + implementation + maintenance + formation. Voici 3 scenarios reels.</p>
          </div>
          <div className="space-y-4">
            {tcoComparison.map((scenario) => (
              <div key={scenario.titre} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: scenario.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{scenario.titre}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[12px] font-semibold text-[#FF7A59] mb-3">HubSpot</p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px]"><span className="text-[#777]">Licences/an</span><span className="text-[#111] font-medium">{scenario.hubspot.licence}</span></div>
                      <div className="flex justify-between text-[11px]"><span className="text-[#777]">Implementation</span><span className="text-[#111] font-medium">{scenario.hubspot.implementation}</span></div>
                      <div className="flex justify-between text-[11px]"><span className="text-[#777]">Maintenance/an</span><span className="text-[#111] font-medium">{scenario.hubspot.maintenance}</span></div>
                      <div className="flex justify-between text-[11px]"><span className="text-[#777]">Formation</span><span className="text-[#111] font-medium">{scenario.hubspot.formation}</span></div>
                      <div className="flex justify-between text-[12px] font-bold pt-2 border-t border-[#F2F2F2]"><span className="text-[#111]">Total annee 1</span><span className="text-[#22C55E]">{scenario.hubspot.total1an}</span></div>
                      <div className="flex justify-between text-[12px] font-bold"><span className="text-[#111]">Total 3 ans</span><span className="text-[#22C55E]">{scenario.hubspot.total3ans}</span></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#00A1E0] mb-3">Salesforce</p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px]"><span className="text-[#777]">Licences/an</span><span className="text-[#111] font-medium">{scenario.salesforce.licence}</span></div>
                      <div className="flex justify-between text-[11px]"><span className="text-[#777]">Implementation</span><span className="text-[#111] font-medium">{scenario.salesforce.implementation}</span></div>
                      <div className="flex justify-between text-[11px]"><span className="text-[#777]">Maintenance/an</span><span className="text-[#111] font-medium">{scenario.salesforce.maintenance}</span></div>
                      <div className="flex justify-between text-[11px]"><span className="text-[#777]">Formation</span><span className="text-[#111] font-medium">{scenario.salesforce.formation}</span></div>
                      <div className="flex justify-between text-[12px] font-bold pt-2 border-t border-[#F2F2F2]"><span className="text-[#111]">Total annee 1</span><span className="text-[#EF4444]">{scenario.salesforce.total1an}</span></div>
                      <div className="flex justify-between text-[12px] font-bold"><span className="text-[#111]">Total 3 ans</span><span className="text-[#EF4444]">{scenario.salesforce.total3ans}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── IMPLEMENTATION ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Implementation</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Implementation : semaines vs mois</h2>
              <p className="text-[13px] text-white/40">Le temps de deploiement est un facteur decisif. Chaque semaine sans CRM fonctionnel est une semaine de donnees perdues.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[25%]">Etape</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[37.5%]">HubSpot</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 w-[37.5%]">Salesforce</th>
                  </tr>
                </thead>
                <tbody>
                  {implementationComparison.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="text-[12px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-[#22C55E]/80 py-3 pr-4">{row.hubspot}</td>
                      <td className="text-[11px] text-white/30 py-3">{row.salesforce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── REPORTING ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Reporting</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Reporting et analytics</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Un CRM sans reporting exploitable est un CRM inutile. Voici comment les deux plateformes se comparent sur l&apos;analyse de donnees.</p>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4 w-[25%]">Critere</th>
                    <th className="text-[12px] font-semibold text-[#FF7A59] pb-3 pr-4 w-[37.5%]">HubSpot</th>
                    <th className="text-[12px] font-semibold text-[#00A1E0] pb-3 w-[37.5%]">Salesforce</th>
                  </tr>
                </thead>
                <tbody>
                  {reportingComparison.map((row, i) => (
                    <tr key={i} className="border-b border-[#F2F2F2]">
                      <td className="text-[12px] font-medium text-[#111] py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-[#777] py-3 pr-4">{row.hubspot}</td>
                      <td className="text-[11px] text-[#777] py-3">{row.salesforce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-[#F9F9F9]">
              <p className="text-[12px] text-[#777] leading-[1.65]"><span className="font-semibold text-[#111]">Notre constat terrain :</span> 80% des entreprises que nous accompagnons n&apos;utilisent pas le reporting de leur CRM. Avec HubSpot, les commerciaux creent eux-memes leurs dashboards en 5 minutes. Avec Salesforce, ils demandent a l&apos;admin et attendent 2 semaines. La difference d&apos;adoption du reporting est massive.</p>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── INTEGRATIONS ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Integrations</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Integrations et ecosysteme</h2>
              <p className="text-[13px] text-white/40">Un CRM isole ne sert a rien. Ce qui compte, c&apos;est la capacite a se connecter a votre stack existant.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[25%]">Critere</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[37.5%]">HubSpot</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 w-[37.5%]">Salesforce</th>
                  </tr>
                </thead>
                <tbody>
                  {integrationComparison.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="text-[12px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-[#22C55E]/80 py-3 pr-4">{row.hubspot}</td>
                      <td className="text-[11px] text-white/30 py-3">{row.salesforce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── SCALABILITE ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Scalabilite</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Scalabilite : quel CRM pour quelle taille ?</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">Le meilleur CRM est celui qui correspond a votre taille actuelle ET a votre taille dans 3 ans. Pas celui qui promet de tout faire.</p>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4 w-[25%]">Scenario</th>
                    <th className="text-[12px] font-semibold text-[#FF7A59] pb-3 pr-4 w-[37.5%]">HubSpot</th>
                    <th className="text-[12px] font-semibold text-[#00A1E0] pb-3 w-[37.5%]">Salesforce</th>
                  </tr>
                </thead>
                <tbody>
                  {scalabiliteItems.map((row, i) => (
                    <tr key={i} className="border-b border-[#F2F2F2]">
                      <td className="text-[12px] font-medium text-[#111] py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-[#777] py-3 pr-4">{row.hubspot}</td>
                      <td className="text-[11px] text-[#777] py-3">{row.salesforce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── VERDICT ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Verdict</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Notre verdict : quand choisir HubSpot, quand choisir Salesforce</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">Il n&apos;y a pas de CRM universellement meilleur. Il y a le CRM adapte a votre contexte. Voici notre grille de decision basee sur des centaines de projets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-3 h-3 rounded-sm bg-[#FF7A59]" />
                <h3 className="text-[16px] font-semibold text-[#111]">Choisissez HubSpot si...</h3>
              </div>
              <ul className="space-y-2">
                {verdictHubspot.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] text-[#666] leading-[1.6]">
                    <Check /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-3 h-3 rounded-sm bg-[#00A1E0]" />
                <h3 className="text-[16px] font-semibold text-[#111]">Choisissez Salesforce si...</h3>
              </div>
              <ul className="space-y-2">
                {verdictSalesforce.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] text-[#666] leading-[1.6]">
                    <Check /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[14px] font-semibold text-[#111] mb-3">En resume</h3>
            <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Pour 85% des entreprises que nous accompagnons (PME, scale-ups, ETI jusqu&apos;a 200 utilisateurs), HubSpot est le choix optimal. Le rapport fonctionnalites/cout/adoption est imbattable. Le TCO est 2 a 5x inferieur a Salesforce, le deploiement 5 a 10x plus rapide, et le taux d&apos;adoption 2x superieur.</p>
            <p className="text-[12px] text-[#777] leading-[1.65]">Salesforce reste pertinent pour les grands groupes avec des besoins de compliance avances, des process metier ultra-specifiques necesitant du code custom (Apex), ou des organisations deja profondement ancrages dans l&apos;ecosysteme Salesforce (CPQ, Vlocity, MuleSoft). Mais meme dans ces cas, la question merite d&apos;etre posee : cette complexite est-elle vraiment necessaire ?</p>
          </div>
        </section>
        <Connector />

        {/* ── MIGRATION POSSIBLE ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Migration</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Vous etes sur Salesforce ? La migration est possible</h2>
              <p className="text-[13px] text-white/40 max-w-[520px]">Si vous avez fait le choix de HubSpot, nous vous accompagnons dans la migration. Contacts, deals, workflows, integrations : tout est migre sans perte de donnees ni interruption d&apos;activite.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
                <p className="text-[24px] font-bold text-white mb-1">30 000+</p>
                <p className="text-[11px] text-white/40">contacts migres depuis Salesforce</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
                <p className="text-[24px] font-bold text-white mb-1">8-16 sem.</p>
                <p className="text-[11px] text-white/40">duree moyenne de migration</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
                <p className="text-[24px] font-bold text-white mb-1">0%</p>
                <p className="text-[11px] text-white/40">perte de donnees</p>
              </div>
            </div>
            <Link href="/migration-salesforce-hubspot" className="inline-flex items-center gap-2 text-[13px] font-medium text-white hover:text-white/70 transition-colors">
              Voir notre guide migration Salesforce vers HubSpot
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ── FAQ ── */}
        <section className="mb-0">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes : HubSpot vs Salesforce</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;aide pour choisir votre CRM ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">Appel de 30 min pour analyser votre contexte et vous recommander la plateforme adaptee. Objectif, gratuit, sans engagement.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Planifier mon appel de cadrage
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
