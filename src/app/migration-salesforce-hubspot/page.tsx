"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── DATA ─── */

const whyLeave = [
  { title: "Cout excessif", desc: "Licence Enterprise Salesforce : 165 EUR/utilisateur/mois minimum, sans compter les add-ons (CPQ, Pardot, Einstein). Le cout reel est souvent 2 a 3x le prix affiche une fois les consultants et la maintenance inclus.", color: "#EF4444" },
  { title: "Complexite inutile", desc: "Chaque modification necessite un admin certifie ou un integrateur externe a 1 500-2 000 EUR/jour. Un simple champ custom peut prendre une semaine a deployer avec les validations.", color: "#F59E0B" },
  { title: "Adoption faible", desc: "Le taux d'adoption moyen de Salesforce est de 40%. Vos commerciaux contournent le CRM avec des tableurs, des notes et des outils paralleles. Les donnees sont incompletes et inexploitables.", color: "#4B5EFC" },
  { title: "Silos entre equipes", desc: "Salesforce pour Sales, Pardot pour Marketing, un outil tiers pour le Service. Trois bases, trois logiques, trois budgets. Impossible d'avoir une vue unifiee du parcours client.", color: "#6D00CC" },
  { title: "IA payante et complexe", desc: "Einstein AI necessite des licences supplementaires et une configuration avancee. Chez HubSpot, l'IA (Breeze) est integree nativement dans chaque Hub sans surcout.", color: "#6C5CE7" },
  { title: "Plateforme tout-en-un", desc: "HubSpot reunit CRM, Marketing, Sales, Service et Operations dans une seule interface. Une seule facture, une seule base de donnees, une seule source de verite.", color: "#22C55E" },
];

const comparisonTable = [
  { critere: "Prix par utilisateur/mois", salesforce: "165 EUR+ (Enterprise)", hubspot: "A partir de 15 EUR (Pro)" },
  { critere: "Cout d'implementation", salesforce: "50 000-200 000 EUR", hubspot: "8 000-25 000 EUR" },
  { critere: "Admin necessaire", salesforce: "Admin certifie obligatoire", hubspot: "Configurable sans code" },
  { critere: "Temps de deploiement", salesforce: "3-12 mois", hubspot: "2-8 semaines" },
  { critere: "Taux d'adoption moyen", salesforce: "40%", hubspot: "90%+" },
  { critere: "Marketing automation", salesforce: "Pardot (licence separee)", hubspot: "Marketing Hub integre" },
  { critere: "Service client", salesforce: "Service Cloud (licence separee)", hubspot: "Service Hub integre" },
  { critere: "IA integree", salesforce: "Einstein (payant, complexe)", hubspot: "Breeze (natif, inclus)" },
  { critere: "Reporting", salesforce: "Puissant mais complexe", hubspot: "Intuitif et personnalisable" },
  { critere: "Integrations", salesforce: "AppExchange (souvent payant)", hubspot: "1 500+ integrations (beaucoup gratuites)" },
  { critere: "Formation utilisateurs", salesforce: "Trailhead + consultant", hubspot: "Academy + interface intuitive" },
  { critere: "Operations & data quality", salesforce: "Outils tiers requis", hubspot: "Operations Hub natif" },
  { critere: "Engagement commercial", salesforce: "High Velocity Sales", hubspot: "Sequences + Playbooks inclus" },
];

const methodologySteps = [
  { num: "01", title: "Audit de l'instance Salesforce", desc: "Cartographie complete de votre instance : objets standards et custom, champs, workflows, process builders, validation rules, reports, dashboards, integrations tierces. On identifie ce qui est reellement utilise vs ce qui est obsolete.", details: ["Inventaire des objets et champs utilises", "Mapping des automatisations actives", "Recensement des integrations", "Analyse de la qualite des donnees", "Identification des doublons"], color: "#FF7A59" },
  { num: "02", title: "Mapping Salesforce vers HubSpot", desc: "Traduction de votre architecture Salesforce vers la logique HubSpot. Chaque objet, chaque champ, chaque relation trouve son equivalent. Les specificites Salesforce (Record Types, Page Layouts) sont repensees pour HubSpot.", details: ["Mapping objets : Leads/Contacts vers Contacts", "Mapping Accounts vers Companies", "Mapping Opportunities vers Deals", "Traduction des picklists et Record Types", "Redesign des relations et associations"], color: "#4B5EFC" },
  { num: "03", title: "Nettoyage et preparation des donnees", desc: "Avant de migrer, on nettoie. Deduplication, standardisation des formats, suppression des donnees obsoletes. Migrer des donnees sales dans un CRM neuf est le meilleur moyen de reproduire les memes problemes.", details: ["Deduplication contacts et entreprises", "Standardisation des formats (tel, adresses)", "Suppression des enregistrements obsoletes", "Normalisation des valeurs de picklists", "Validation de l'integrite referentielle"], color: "#6D00CC" },
  { num: "04", title: "Configuration de HubSpot", desc: "On configure votre instance HubSpot avant la migration : pipelines, proprietes custom, vues, permissions, workflows. L'objectif est que HubSpot soit pret a recevoir les donnees avec la bonne structure.", details: ["Creation des pipelines deals", "Configuration des proprietes custom", "Mise en place des permissions par equipe", "Design des vues et filtres", "Parametrage des lifecycle stages"], color: "#22C55E" },
  { num: "05", title: "Migration des donnees", desc: "Migration par lots, dans l'ordre : entreprises, contacts, deals, activites, notes, fichiers. Chaque lot est valide avant de passer au suivant. On conserve l'historique complet des interactions.", details: ["Migration des Companies avec hierarchies", "Migration des Contacts avec associations", "Migration des Deals et historique de pipeline", "Import des activites (emails, calls, meetings)", "Migration des notes, taches et fichiers joints"], color: "#6C5CE7" },
  { num: "06", title: "Reconstruction des automatisations", desc: "Vos workflows Salesforce (Process Builder, Flow, Apex triggers) sont reconstruits dans HubSpot avec des workflows natifs ou des custom coded actions. Souvent, c'est l'occasion de simplifier et d'optimiser.", details: ["Traduction des Process Builders en workflows", "Recreation des regles d'assignation", "Mise en place des sequences commerciales", "Configuration des notifications et SLA", "Integration des agents IA si pertinent"], color: "#D4A27F" },
  { num: "07", title: "Formation, double-run et bascule", desc: "Periode de double-run (2-4 semaines) ou Salesforce et HubSpot fonctionnent en parallele. Formation de chaque equipe sur leurs process dans HubSpot. Bascule definitive uniquement quand tout est valide.", details: ["Formation Sales sur pipelines et sequences", "Formation Marketing sur workflows et reporting", "Formation managers sur dashboards", "Double-run avec validation croisee", "Bascule definitive et desactivation Salesforce"], color: "#FF7A59" },
];

const migrationObjects = [
  { title: "Contacts & Leads", desc: "Tous vos Leads et Contacts Salesforce sont fusionnes en Contacts HubSpot. Historique des conversions, scores, sources d'acquisition. Pas de perte d'information.", icon: "contact", color: "#FF7A59" },
  { title: "Accounts / Companies", desc: "Comptes Salesforce vers Companies HubSpot. Hierarchies parent-enfant, secteurs, tailles, champs custom. Associations automatiques.", icon: "company", color: "#4B5EFC" },
  { title: "Opportunities / Deals", desc: "Chaque Opportunity devient un Deal avec son pipeline, son montant, sa date de closing, ses line items. L'historique des changements de stage est conserve.", icon: "deal", color: "#22C55E" },
  { title: "Activites", desc: "Emails envoyes, appels logues, meetings, taches. Tout l'historique d'activite est migre et rattache aux bons contacts et deals.", icon: "activity", color: "#6D00CC" },
  { title: "Reports & Dashboards", desc: "Vos rapports Salesforce sont recrees dans HubSpot avec le custom report builder. Souvent plus lisibles et plus faciles a maintenir.", icon: "report", color: "#6C5CE7" },
  { title: "Workflows & Automations", desc: "Process Builders, Flows, et Apex triggers traduits en workflows HubSpot natifs. Plus simples, plus maintenables, plus visibles.", icon: "workflow", color: "#D4A27F" },
  { title: "Custom Objects", desc: "Les objets custom Salesforce sont recrees via les Custom Objects HubSpot (disponibles en Enterprise) ou repenses en proprietes et associations.", icon: "custom", color: "#F59E0B" },
];

const risks = [
  { title: "Perte de donnees", desc: "Le risque numero un. Des champs oublies, des associations cassees, des historiques perdus. Notre reponse : audit exhaustif pre-migration, migration par lots avec validation, double verification systematique.", mitigation: "Audit pre-migration + validation lot par lot + rollback possible", color: "#EF4444" },
  { title: "Downtime operationnel", desc: "Vos equipes ne peuvent pas arreter de vendre pendant la migration. Notre reponse : periode de double-run ou les deux systemes fonctionnent en parallele. Aucune interruption d'activite.", mitigation: "Double-run 2-4 semaines + bascule programmee", color: "#F59E0B" },
  { title: "Resistance au changement", desc: "Vos equipes ont leurs habitudes sur Salesforce. Notre reponse : formation personnalisee sur VOS process (pas un tuto generique), accompagnement individuel des power users, quick wins immediats.", mitigation: "Formation contextuelle + accompagnement + quick wins", color: "#4B5EFC" },
  { title: "Integrations cassees", desc: "Votre Salesforce est connecte a d'autres outils (ERP, facturation, enrichissement). Notre reponse : inventaire complet des integrations, reconfiguration dans HubSpot ou Operations Hub, tests de bout en bout.", mitigation: "Inventaire integrations + reconfiguration + tests E2E", color: "#6D00CC" },
  { title: "Logique metier perdue", desc: "Les regles de gestion enfouies dans des Apex triggers ou des Process Builders complexes. Notre reponse : documentation de chaque regle avant migration, reconstruction dans HubSpot avec simplification.", mitigation: "Documentation + reconstruction + simplification", color: "#6C5CE7" },
];

const caseStudies = [
  { client: "Dougs", sector: "Fintech / Comptabilite", challenge: "Migration de Salesforce vers HubSpot pour 30 000+ contacts. Salesforce etait devenu trop couteux et sous-utilise par les equipes commerciales.", results: ["-45% de cout CRM annuel", "30 000+ contacts migres sans perte", "Adoption passee de 35% a 92%", "50+ workflows reconstruits et simplifies"], link: "/cas-clients/dougs", color: "#FF7A59" },
  { client: "HiPay", sector: "Fintech / Paiement", challenge: "Double migration : depuis un CRM legacy vers Salesforce, puis de Salesforce vers HubSpot. Besoin de consolider les donnees de plusieurs entites internationales.", results: ["Migration multi-entites reussie", "Donnees consolidees sur une seule instance", "Reporting unifie cross-pays", "Time-to-value divise par 3"], link: "/cas-clients/hipay", color: "#4B5EFC" },
];

const timelineBudget = [
  { titre: "Migration Standard", duration: "8-10 semaines", budget: "8 000 - 12 000 EUR", desc: "PME avec moins de 10 000 contacts, pipelines simples, peu de custom objects. 2-3 utilisateurs principaux.", items: ["Audit & mapping", "Migration contacts, companies, deals", "5-10 workflows reconstruits", "Formation equipe", "1 semaine de double-run"], color: "#22C55E" },
  { titre: "Migration Avancee", duration: "10-14 semaines", budget: "12 000 - 18 000 EUR", desc: "Scale-up avec 10 000-50 000 contacts, custom objects, integrations tierces, plusieurs pipelines.", items: ["Audit approfondi", "Migration complete avec custom objects", "15-30 workflows reconstruits", "Integrations reconfigurees", "2 semaines de double-run", "Formation multi-equipes"], color: "#4B5EFC" },
  { titre: "Migration Complexe", duration: "14-16 semaines", budget: "18 000 - 25 000 EUR", desc: "ETI/Grand groupe avec 50 000+ contacts, multi-entites, Apex custom, integrations ERP, compliance.", items: ["Audit multi-instance", "Migration avec hierarchies complexes", "30+ workflows + custom coded actions", "Integrations ERP & BI", "3-4 semaines de double-run", "Formation & coaching individuel", "Support post-migration 1 mois"], color: "#6D00CC" },
];

const faqItems = [
  { q: "Combien coute une migration Salesforce vers HubSpot ?", a: "Entre 8 000 et 25 000 EUR selon la complexite : nombre de contacts, custom objects, integrations tierces, nombre d'equipes a former. L'appel de cadrage est gratuit et permet d'estimer precisement le budget." },
  { q: "Combien de temps dure une migration Salesforce vers HubSpot ?", a: "De 8 a 16 semaines selon la complexite. Une PME avec des pipelines simples : 8-10 semaines. Une scale-up avec des custom objects et des integrations : 10-14 semaines. Un grand groupe multi-entites : 14-16 semaines." },
  { q: "Peut-on garder Salesforce en partie pendant la migration ?", a: "Oui, c'est meme recommande. Nous mettons en place une periode de double-run (2-4 semaines) ou les deux systemes fonctionnent en parallele. La bascule definitive n'a lieu que quand tout est valide." },
  { q: "Est-ce qu'on perd des donnees pendant la migration ?", a: "Non. Notre methodologie inclut un audit exhaustif pre-migration, une migration par lots avec validation a chaque etape, et une double verification systematique. Chaque enregistrement est trace et verifie." },
  { q: "Qu'en est-il des custom objects Salesforce ?", a: "Les custom objects Salesforce sont recrees via les Custom Objects HubSpot (disponibles en Enterprise) ou repenses en proprietes et associations si c'est plus adapte. On analyse chaque cas pour trouver la meilleure approche." },
  { q: "Nos workflows Salesforce peuvent-ils etre recrees dans HubSpot ?", a: "Oui. Process Builders, Flows, et meme la logique des Apex triggers sont traduits en workflows HubSpot natifs ou en custom coded actions (JavaScript/Python). C'est souvent l'occasion de simplifier." },
  { q: "HubSpot est-il assez puissant pour remplacer Salesforce ?", a: "Pour 95% des entreprises, oui. HubSpot Enterprise offre des fonctionnalites equivalentes : custom objects, calculated properties, partitioning, custom coded workflows, advanced permissions. Le 5% restant concerne des cas tres specifiques (CPQ complexe, multi-currency avance)." },
  { q: "Comment gerer la resistance au changement des equipes ?", a: "Formation personnalisee sur VOS process (pas un tuto generique), accompagnement des power users, quick wins immediats (interface plus rapide, moins de clics, IA integree). Le taux d'adoption HubSpot est de 90%+ contre 40% sur Salesforce." },
  { q: "Peut-on connecter HubSpot a notre ERP apres migration ?", a: "Oui. HubSpot Operations Hub permet des syncs bi-directionnelles avec la plupart des ERP (SAP, NetSuite, Sage, etc.) via des connecteurs natifs ou des outils comme Make/Zapier." },
  { q: "Et si notre Salesforce est tres personnalise (Apex, Visualforce) ?", a: "C'est notre specialite. On audite chaque personnalisation, on identifie celles qui sont reellement utilisees, et on reconstruit la logique metier dans HubSpot de maniere plus simple et plus maintenable." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Migration Salesforce vers HubSpot", provider: { "@type": "Organization", name: "Ceres" }, description: "Accompagnement complet pour migrer de Salesforce vers HubSpot. Audit, mapping, migration des donnees, reconstruction des workflows, formation. 30 000+ contacts migres.", serviceType: "CRM Migration", areaServed: { "@type": "Country", name: "France" } },
  { "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
]};

/* ─── CHECKMARK SVG ─── */
const Check = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
    <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── PAGE ─── */

export default function MigrationSalesforceHubSpotPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── HERO ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Migration CRM</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Migration Salesforce vers HubSpot : guide complet et accompagnement
          </h1>
          <p className="text-[17px] text-[#666] max-w-[600px] mx-auto leading-[1.7] mb-4">
            Vous envisagez de quitter Salesforce pour HubSpot ? Cout divise par 2, adoption multipliee par 3, deploiement en semaines au lieu de mois. On vous accompagne de A a Z : audit, mapping, migration, formation.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=64" alt="HubSpot" width={22} height={22} className="rounded-sm" />
            <span className="text-[13px] text-[#999]">30 000+ contacts migres depuis Salesforce</span>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Estimer ma migration
          </Link>
        </section>
        <Connector />

        {/* ── POURQUOI QUITTER SALESFORCE ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pourquoi migrer</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Pourquoi quitter Salesforce pour HubSpot</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Salesforce est puissant. Mais pour la majorite des entreprises, cette puissance se traduit par de la complexite, du cout et une adoption faible.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyLeave.map((item) => (
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

        {/* ── TABLEAU COMPARATIF ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Comparatif</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Ce qui change : Salesforce vs HubSpot</h2>
              <p className="text-[13px] text-white/40">13 criteres pour comparer objectivement les deux plateformes.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[30%]">Critere</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[35%]">Salesforce</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 w-[35%]">HubSpot</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="text-[12px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-white/30 py-3 pr-4">{row.salesforce}</td>
                      <td className="text-[11px] text-[#22C55E]/80 py-3">{row.hubspot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── METHODOLOGIE ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Methodologie</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Notre methodologie de migration en 7 etapes</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Chaque migration Salesforce vers HubSpot suit un processus eprouve. Pas de raccourcis, pas de surprises.</p>
          </div>
          <div className="space-y-3">
            {methodologySteps.map((step) => (
              <div key={step.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: step.color + "15", color: step.color }}>{step.num}</span>
                  <h3 className="text-[15px] font-semibold text-[#111]">{step.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{step.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <Check />{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── CE QU'ON MIGRE ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Perimetre</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ce qu&apos;on migre depuis Salesforce</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Chaque objet, chaque champ, chaque relation. Rien n&apos;est laisse de cote.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {migrationObjects.map((obj) => (
              <div key={obj.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: obj.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{obj.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{obj.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── RISQUES ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Risques</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Les risques d&apos;une migration et comment on les gere</h2>
              <p className="text-[13px] text-white/40">Migrer un CRM n&apos;est pas anodin. Voici les risques reels et nos reponses concretes.</p>
            </div>
            <div className="space-y-3">
              {risks.map((risk) => (
                <div key={risk.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: risk.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{risk.title}</h3>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65] mb-3">{risk.desc}</p>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
                    <Check />
                    <span className="text-[11px] text-white/60">{risk.mitigation}</span>
                  </div>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Migrations Salesforce reussies</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Des entreprises qui ont fait le choix de quitter Salesforce pour HubSpot. Resultats concrets.</p>
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

        {/* ── TIMELINE & BUDGET ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Budget</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Timeline et budget</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">8 a 16 semaines, 8 000 a 25 000 EUR. Prix au forfait, pas de surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {timelineBudget.map((tier) => (
              <div key={tier.titre} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] flex flex-col">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: tier.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{tier.titre}</h3>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded" style={{ backgroundColor: tier.color + "15", color: tier.color }}>{tier.duration}</span>
                  <span className="text-[12px] font-bold text-[#111]">{tier.budget}</span>
                </div>
                <p className="text-[11px] text-[#777] leading-[1.65] mb-4">{tier.desc}</p>
                <ul className="space-y-1.5 mt-auto">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <Check />{item}
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
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur la migration Salesforce vers HubSpot</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a quitter Salesforce ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">On cadre votre migration en 30 min : perimetre, timeline, budget. Appel gratuit et sans engagement.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Planifier mon appel de cadrage
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
