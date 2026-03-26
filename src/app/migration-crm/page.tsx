"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── DATA ─── */

const signaux = [
  { title: "Votre taux d\u2019adoption est inferieur a 60%", desc: "Si plus de 40% de vos equipes contournent le CRM (tableurs, notes, outils paralleles), le probleme n\u2019est pas les equipes. C\u2019est le CRM. Un outil trop complexe, trop lent ou mal configure ne sera jamais adopte. Changer de CRM est souvent plus efficace que de forcer l\u2019adoption d\u2019un outil inadapte.", color: "#EF4444" },
  { title: "Votre cout CRM depasse 20% de votre budget tech", desc: "Licences, consultants, maintenance, formation, add-ons : si le cout total de votre CRM depasse 20% de votre budget technologique, vous payez trop cher. C\u2019est frequemment le cas avec Salesforce ou Dynamics, ou le TCO reel est 3 a 5x le prix affiche des licences.", color: "#F59E0B" },
  { title: "Vous empilez les outils pour compenser", desc: "Un outil de marketing automation ici, un helpdesk la, un outil d\u2019enrichissement ailleurs. Quand votre CRM ne couvre pas les besoins fondamentaux et que vous avez 5+ outils pour compenser, il est temps de passer a une plateforme unifiee.", color: "#4B5EFC" },
  { title: "Votre reporting est inexploitable", desc: "Si obtenir un rapport fiable prend 2 semaines et un consultant externe, votre CRM ne remplit pas sa mission. Les decisions commerciales doivent etre basees sur des donnees accessibles en temps reel, pas sur des exports CSV manipules dans Excel.", color: "#6D00CC" },
  { title: "Chaque modification coute une fortune", desc: "Ajouter un champ, modifier un workflow, creer un rapport : si chaque changement necessite un consultant externe a 1 500 EUR/jour et un delai de 3 semaines, votre CRM est devenu un frein, pas un accelerateur. Un CRM moderne doit etre configurable par vos equipes.", color: "#6C5CE7" },
];

const migrations = [
  {
    title: "Migration Salesforce vers HubSpot",
    desc: "La migration la plus frequente. Salesforce est puissant mais trop complexe et trop cher pour 85% des entreprises. Cout divise par 2 a 5, adoption multipliee par 2, deploiement en semaines au lieu de mois. Nous avons migre plus de 30 000 contacts depuis Salesforce.",
    budget: "8 000 - 25 000 EUR",
    duree: "8-16 semaines",
    link: "/migration-salesforce-hubspot",
    color: "#00A1E0",
    highlights: ["30 000+ contacts migres", "Workflows Apex traduits", "Double-run 2-4 semaines", "Cas clients : Dougs, HiPay"],
  },
  {
    title: "Migration Dynamics vers HubSpot",
    desc: "Microsoft Dynamics 365 est souvent choisi par defaut dans les entreprises Microsoft. Mais l\u2019interface est lourde, l\u2019integration marketing faible, et le cout total eleve. La migration vers HubSpot simplifie tout : une seule plateforme, une seule interface, une seule source de verite.",
    budget: "10 000 - 20 000 EUR",
    duree: "8-14 semaines",
    link: "/migration-dynamics-hubspot",
    color: "#D83B01",
    highlights: ["Entites Dynamics vers objets HubSpot", "Power Automate vers Workflows", "Integration Office 365 preservee", "Formation equipes Microsoft"],
  },
  {
    title: "Migration Pipedrive vers HubSpot",
    desc: "Pipedrive est un excellent outil de vente pour les petites equipes, mais il ne couvre pas le marketing, le service client, ni les operations. La migration vers HubSpot est la plus rapide et la moins couteuse car les concepts sont proches.",
    budget: "5 000 - 12 000 EUR",
    duree: "4-8 semaines",
    link: "/migration-pipedrive-hubspot",
    color: "#017737",
    highlights: ["Migration la plus rapide", "Concepts tres proches", "Marketing Hub en bonus", "Formation en 2-3 heures"],
  },
];

const methodologySteps = [
  { num: "01", title: "Audit de l\u2019existant", desc: "Cartographie complete de votre CRM actuel : objets, champs, workflows, integrations, qualite des donnees. On identifie ce qui est reellement utilise (souvent 30-40% de la configuration) et ce qui peut etre simplifie ou supprime. Cet audit est la fondation de toute migration reussie.", details: ["Inventaire des objets et champs", "Cartographie des automatisations", "Audit de la qualite des donnees", "Recensement des integrations", "Analyse du taux d\u2019adoption reel"], color: "#FF7A59" },
  { num: "02", title: "Mapping et architecture cible", desc: "Traduction de votre architecture actuelle vers HubSpot. Chaque objet, chaque champ, chaque relation trouve son equivalent. C\u2019est l\u2019occasion de simplifier : les CRM accumulent de la dette technique au fil des annees. On repart sur une architecture propre.", details: ["Mapping objet par objet", "Redesign des pipelines", "Simplification des champs custom", "Architecture des associations", "Definition des lifecycle stages"], color: "#4B5EFC" },
  { num: "03", title: "Nettoyage des donnees", desc: "Avant de migrer, on nettoie. Deduplication, standardisation des formats, suppression des enregistrements obsoletes. Migrer des donnees sales dans un CRM neuf reproduit les memes problemes. Cette etape est souvent negligee et c\u2019est la cause numero un d\u2019echec.", details: ["Deduplication contacts et entreprises", "Standardisation des formats", "Suppression des donnees obsoletes", "Normalisation des picklists", "Validation de l\u2019integrite referentielle"], color: "#6D00CC" },
  { num: "04", title: "Configuration de HubSpot", desc: "On configure votre instance HubSpot avant la migration : pipelines, proprietes custom, vues, permissions, workflows. L\u2019objectif est que HubSpot soit pret a recevoir les donnees avec la bonne structure, les bonnes permissions et les bons workflows.", details: ["Creation des pipelines", "Configuration des proprietes", "Mise en place des permissions", "Design des vues et filtres", "Parametrage des lifecycle stages"], color: "#22C55E" },
  { num: "05", title: "Migration des donnees", desc: "Migration par lots, dans l\u2019ordre : entreprises, contacts, deals, activites, notes, fichiers. Chaque lot est valide avant de passer au suivant. On conserve l\u2019historique complet des interactions. Pas de big bang, pas de surprises.", details: ["Migration Companies avec hierarchies", "Migration Contacts avec associations", "Migration Deals et historique pipeline", "Import des activites et notes", "Migration des fichiers joints"], color: "#6C5CE7" },
  { num: "06", title: "Reconstruction des automatisations", desc: "Vos workflows sont reconstruits dans HubSpot. C\u2019est souvent l\u2019occasion de simplifier et d\u2019optimiser : la logique metier enfouie dans du code proprietaire (Apex, Power Automate) est traduite en workflows visuels maintenables par vos equipes.", details: ["Traduction des workflows existants", "Simplification et optimisation", "Ajout de nouvelles automatisations", "Configuration des notifications", "Mise en place des sequences commerciales"], color: "#D4A27F" },
  { num: "07", title: "Formation, double-run et bascule", desc: "Periode de double-run ou les deux systemes fonctionnent en parallele. Formation de chaque equipe sur ses process dans HubSpot. Bascule definitive uniquement quand tout est valide. Support post-migration inclus.", details: ["Formation Sales sur pipelines", "Formation Marketing sur workflows", "Formation managers sur dashboards", "Double-run avec validation croisee", "Bascule et support post-migration"], color: "#FF7A59" },
];

const risks = [
  { title: "Perte de donnees", desc: "Le risque numero un de toute migration CRM. Des champs oublies, des associations cassees, des historiques perdus. Notre reponse : audit exhaustif pre-migration, migration par lots avec validation a chaque etape, double verification systematique, rollback possible a tout moment.", mitigation: "Audit exhaustif + migration par lots + validation + rollback", color: "#EF4444" },
  { title: "Downtime operationnel", desc: "Vos equipes ne peuvent pas arreter de vendre pendant la migration. Notre reponse : periode de double-run (2-4 semaines) ou les deux systemes fonctionnent en parallele. Aucune interruption d\u2019activite, aucune perte de productivite.", mitigation: "Double-run 2-4 semaines + zero interruption", color: "#F59E0B" },
  { title: "Resistance au changement", desc: "Vos equipes ont leurs habitudes. Changer d\u2019outil genere de la resistance. Notre reponse : formation personnalisee sur VOS process (pas un tuto generique), accompagnement individuel des power users, quick wins immediats pour demontrer la valeur.", mitigation: "Formation contextuelle + quick wins + accompagnement", color: "#4B5EFC" },
  { title: "Integrations cassees", desc: "Votre CRM est connecte a d\u2019autres outils (ERP, facturation, enrichissement, marketing). Notre reponse : inventaire complet des integrations avant migration, reconfiguration dans HubSpot ou Operations Hub, tests de bout en bout avant bascule.", mitigation: "Inventaire + reconfiguration + tests E2E", color: "#6D00CC" },
  { title: "Logique metier perdue", desc: "Les regles de gestion enfouies dans du code proprietaire, des triggers complexes ou des configurations opaques. Notre reponse : documentation de chaque regle metier avant migration, reconstruction dans HubSpot avec simplification et documentation.", mitigation: "Documentation + reconstruction + simplification", color: "#6C5CE7" },
  { title: "Depassement de budget", desc: "Les migrations CRM sont connues pour leurs depassements. Notre reponse : cadrage precis avec forfait fixe (pas de regie), perimeter clairement defini, zero surprise. Le prix annonce est le prix paye.", mitigation: "Forfait fixe + perimetre defini + zero surprise", color: "#22C55E" },
];

const caseStudies = [
  { client: "TotalEnergies", sector: "Energie", challenge: "Migration et consolidation de plusieurs instances CRM vers HubSpot pour une division B2B. Besoin de reporting unifie et d\u2019automatisation des processus commerciaux.", results: ["Consolidation multi-instances reussie", "Reporting unifie cross-equipes", "Automatisations deployees en 6 semaines", "Adoption a 88% des le premier mois"], color: "#FF7A59" },
  { client: "Dougs", sector: "Fintech / Comptabilite", challenge: "Migration de Salesforce vers HubSpot pour 30 000+ contacts. Salesforce etait devenu trop couteux et sous-utilise par les equipes commerciales.", results: ["-45% de cout CRM annuel", "30 000+ contacts migres sans perte", "Adoption passee de 35% a 92%", "50+ workflows reconstruits et simplifies"], link: "/cas-clients/dougs", color: "#4B5EFC" },
  { client: "HiPay", sector: "Fintech / Paiement", challenge: "Double migration : depuis un CRM legacy vers Salesforce, puis de Salesforce vers HubSpot. Consolidation des donnees de plusieurs entites internationales.", results: ["Migration multi-entites reussie", "Donnees consolidees sur une seule instance", "Reporting unifie cross-pays", "Time-to-value divise par 3"], link: "/cas-clients/hipay", color: "#6D00CC" },
];

const budgetParType = [
  { source: "Salesforce", budget: "8 000 - 25 000 EUR", duree: "8-16 semaines", complexite: "Elevee (Apex, custom objects, multi-Cloud)", color: "#00A1E0" },
  { source: "Dynamics 365", budget: "10 000 - 20 000 EUR", duree: "8-14 semaines", complexite: "Moyenne-elevee (entites custom, Power Automate)", color: "#D83B01" },
  { source: "Pipedrive", budget: "5 000 - 12 000 EUR", duree: "4-8 semaines", complexite: "Faible-moyenne (structures proches)", color: "#017737" },
  { source: "Zoho CRM", budget: "5 000 - 10 000 EUR", duree: "4-8 semaines", complexite: "Faible-moyenne", color: "#C8202B" },
  { source: "Freshsales", budget: "4 000 - 8 000 EUR", duree: "3-6 semaines", complexite: "Faible", color: "#12A5ED" },
  { source: "CRM custom / Excel", budget: "6 000 - 15 000 EUR", duree: "6-12 semaines", complexite: "Variable (nettoyage donnees souvent important)", color: "#666666" },
];

const faqItems = [
  { q: "Combien coute une migration CRM vers HubSpot ?", a: "De 4 000 a 25 000 EUR selon le CRM source et la complexite. Pipedrive : 5 000-12 000 EUR. Dynamics : 10 000-20 000 EUR. Salesforce : 8 000-25 000 EUR. L\u2019appel de cadrage est gratuit et permet d\u2019estimer precisement." },
  { q: "Combien de temps dure un changement de CRM ?", a: "De 3 a 16 semaines. Pipedrive : 4-8 semaines. Dynamics : 8-14 semaines. Salesforce : 8-16 semaines. La duree depend du volume de donnees, du nombre d\u2019automatisations et des integrations a reconfigurer." },
  { q: "Est-ce risque de changer de CRM ?", a: "Oui, si c\u2019est mal fait. Non, avec la bonne methodologie. Les risques (perte de donnees, downtime, resistance au changement) sont tous maitrisables avec un audit pre-migration, un double-run et une formation adaptee. Nous n\u2019avons jamais eu de perte de donnees sur une migration." },
  { q: "Peut-on migrer sans interrompre l\u2019activite commerciale ?", a: "Absolument. Notre methodologie inclut une periode de double-run (2-4 semaines) ou les deux CRM fonctionnent en parallele. Vos commerciaux continuent de travailler normalement. La bascule definitive n\u2019a lieu que quand tout est valide." },
  { q: "Quelles donnees peut-on migrer vers HubSpot ?", a: "Toutes : contacts, entreprises, deals, activites, notes, fichiers, historique de pipeline, emails logues, meetings. Nous conservons l\u2019integrite des associations et l\u2019historique complet. Rien n\u2019est perdu." },
  { q: "Nos automatisations seront-elles recrees dans HubSpot ?", a: "Oui. Les workflows, triggers et automatisations de votre CRM actuel sont reconstruits dans HubSpot. C\u2019est souvent l\u2019occasion de simplifier et d\u2019optimiser : beaucoup d\u2019entreprises ont accumule des automatisations obsoletes au fil du temps." },
  { q: "Faut-il former toutes les equipes ?", a: "Oui, et c\u2019est inclus dans notre accompagnement. Chaque equipe est formee sur SES process dans HubSpot (pas un tuto generique). La formation est courte (2-4h par equipe) car HubSpot est intuitif. Le taux d\u2019adoption moyen est de 90%+." },
  { q: "HubSpot est-il assez puissant pour remplacer Salesforce ?", a: "Pour 85% des entreprises, oui. HubSpot Enterprise offre custom objects, calculated properties, advanced permissions, custom coded workflows, predictive scoring. Le 15% restant concerne des cas tres specifiques (compliance HIPAA/FedRAMP, CPQ complexe, multi-org avance)." },
  { q: "Que se passe-t-il si la migration ne se passe pas bien ?", a: "Notre methodologie inclut un rollback possible a tout moment. Les donnees dans votre CRM source ne sont jamais modifiees ni supprimees avant la validation complete. Si un probleme survient, on revient en arriere sans perte." },
  { q: "Peut-on migrer depuis un CRM custom ou des fichiers Excel ?", a: "Oui. C\u2019est meme un cas frequent. La complexite principale est le nettoyage des donnees (doublons, formats inconsistants, donnees incompletes). Notre phase de preparation inclut ce nettoyage." },
  { q: "Peut-on migrer progressivement (par equipe) ?", a: "Oui, c\u2019est une approche que nous recommandons pour les grandes organisations. On commence par une equipe pilote, on valide, puis on etend. Cela reduit le risque et facilite le change management." },
  { q: "Comment choisir entre HubSpot et rester sur notre CRM actuel ?", a: "L\u2019appel de cadrage de 30 min permet d\u2019evaluer objectivement. Si votre CRM actuel est le bon choix, nous vous le dirons. Nous sommes la pour trouver la meilleure solution, pas pour vendre une migration a tout prix." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Migration CRM vers HubSpot", provider: { "@type": "Organization", name: "Ceres" }, description: "Changez de CRM sans perte de donnees ni interruption d\u2019activite. Migrations Salesforce, Dynamics, Pipedrive vers HubSpot. Methodologie eprouvee, cas clients concrets.", serviceType: "CRM Migration", areaServed: { "@type": "Country", name: "France" } },
  { "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
]};

/* ─── CHECKMARK SVG ─── */
const Check = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
    <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── PAGE ─── */

export default function MigrationCRMPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── HERO ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Migration CRM</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Migration CRM : changer de CRM sans tout casser
          </h1>
          <p className="text-[17px] text-[#666] max-w-[620px] mx-auto leading-[1.7] mb-4">
            Votre CRM vous freine au lieu de vous accelerer ? Nous migrons vos donnees, vos workflows et vos equipes vers HubSpot. Sans perte de donnees, sans interruption d&apos;activite, sans surprise sur le budget.
          </p>
          <p className="text-[13px] text-[#999] mb-8">Migrations Salesforce, Dynamics 365, Pipedrive et autres CRM vers HubSpot.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Evaluer ma migration
          </Link>
        </section>
        <Connector />

        {/* ── QUAND CHANGER DE CRM ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Diagnostic</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">5 signaux qu&apos;il est temps de changer de CRM</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Changer de CRM est un projet structurant. Voici les signaux qui indiquent que le moment est venu.</p>
          </div>
          <div className="space-y-3">
            {signaux.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: s.color + "15", color: s.color }}>0{i + 1}</span>
                  <h3 className="text-[15px] font-semibold text-[#111]">{s.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── LES MIGRATIONS QU'ON FAIT ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Nos migrations</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les migrations CRM qu&apos;on realise</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Trois CRM sources principaux, une destination : HubSpot. Chaque migration a sa specificite.</p>
          </div>
          <div className="space-y-4">
            {migrations.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: m.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{m.title}</h3>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded" style={{ backgroundColor: m.color + "15", color: m.color }}>{m.duree}</span>
                  <span className="text-[12px] font-bold text-[#111]">{m.budget}</span>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{m.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <Check />{h}
                    </li>
                  ))}
                </ul>
                <Link href={m.link} className="inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#666] transition-colors">
                  Voir le guide complet
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── METHODOLOGIE ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Methodologie</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Notre methodologie de migration en 7 etapes</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Quel que soit le CRM source, notre methodologie est la meme. Eprouvee sur des dizaines de migrations.</p>
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

        {/* ── RISQUES ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Risques</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Les risques d&apos;un changement de CRM et comment on les gere</h2>
              <p className="text-[13px] text-white/40">Changer de CRM n&apos;est pas anodin. Voici les 6 risques reels et nos reponses concretes pour chacun.</p>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Migrations CRM reussies</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Des entreprises qui ont change de CRM avec notre accompagnement. Resultats concrets et mesurables.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                {cs.link && (
                  <Link href={cs.link} className="inline-flex items-center gap-2 text-[12px] font-medium text-[#111] hover:text-[#666] transition-colors">
                    Voir le cas client
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── BUDGET PAR TYPE ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Budget</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Budget indicatif par CRM source</h2>
              <p className="text-[13px] text-white/40">Prix au forfait. L\u2019appel de cadrage de 30 min est gratuit et permet d\u2019obtenir une estimation precise.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4">CRM source</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4">Budget</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4">Duree</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3">Complexite</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetParType.map((b) => (
                    <tr key={b.source} className="border-b border-white/5">
                      <td className="text-[12px] font-medium text-white/80 py-3 pr-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: b.color }} />
                          {b.source}
                        </div>
                      </td>
                      <td className="text-[11px] text-[#22C55E]/80 py-3 pr-4">{b.budget}</td>
                      <td className="text-[11px] text-white/40 py-3 pr-4">{b.duree}</td>
                      <td className="text-[11px] text-white/40 py-3">{b.complexite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── FAQ ── */}
        <section className="mb-0">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur le changement de CRM</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a changer de CRM ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">On evalue votre migration en 30 min : CRM source, perimetre, timeline, budget. Appel gratuit et sans engagement.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Planifier mon appel de cadrage
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
