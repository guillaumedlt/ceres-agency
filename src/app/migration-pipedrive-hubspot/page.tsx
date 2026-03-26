"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── DATA ─── */

const whyLeave = [
  { title: "Reporting basique", desc: "Pipedrive offre des rapports corrects pour suivre un pipeline simple, mais des que vous avez besoin d\u2019attribution marketing, de reporting cross-objets ou de dashboards personnalises, vous atteignez les limites. Impossible de croiser les donnees deals avec les donnees marketing ou de construire des rapports multi-pipelines avances sans export CSV.", color: "#EF4444" },
  { title: "Pas de marketing automation", desc: "Pipedrive n\u2019est pas une plateforme marketing. Pas de landing pages, pas de workflows de nurturing, pas d\u2019email marketing avance, pas de scoring comportemental. Vous devez ajouter Mailchimp, ActiveCampaign ou un autre outil, avec les problemes de synchronisation que cela implique.", color: "#F59E0B" },
  { title: "Pas d\u2019operations", desc: "Aucune fonctionnalite native de data quality, de deduplication automatique, de normalisation des donnees ou de sync bi-directionnelle avec votre stack. Vos donnees se degradent au fil du temps et personne ne s\u2019en rend compte.", color: "#4B5EFC" },
  { title: "Automatisations limitees", desc: "Les automatisations Pipedrive sont basiques : changement de stage, creation de tache, envoi d\u2019email. Pas de logique conditionnelle avancee, pas de branches, pas de custom coded actions. Des que le process devient complexe, ca ne suit plus.", color: "#6D00CC" },
  { title: "Pas de service client", desc: "Pipedrive est un outil de vente pur. Pas de ticketing, pas de knowledge base, pas de chat en direct natif. Si vous avez une equipe support, vous avez besoin d\u2019un autre outil (Zendesk, Freshdesk), ce qui cree des silos.", color: "#6C5CE7" },
  { title: "IA limitee", desc: "L\u2019IA de Pipedrive se limite a quelques suggestions basiques. Pas d\u2019agents IA, pas de scoring predictif, pas de generation de contenu, pas de conversation intelligence. HubSpot Breeze offre tout cela nativement.", color: "#22C55E" },
  { title: "Scalabilite insuffisante", desc: "Pipedrive fonctionne bien pour 5-15 commerciaux avec un pipeline simple. Au-dela, les limites apparaissent : permissions granulaires insuffisantes, custom objects absents, hierarchies d\u2019equipes limitees, API moins riche.", color: "#D4A27F" },
];

const comparisonTable = [
  { critere: "Prix par utilisateur/mois", pipedrive: "49 EUR (Professional)", hubspot: "A partir de 15 EUR (Starter), 90 EUR (Pro)" },
  { critere: "CRM gratuit", pipedrive: "Non (essai 14 jours)", hubspot: "Oui, illimite" },
  { critere: "Marketing automation", pipedrive: "Non (add-on basique)", hubspot: "Marketing Hub complet" },
  { critere: "Service client", pipedrive: "Non", hubspot: "Service Hub integre" },
  { critere: "Reporting", pipedrive: "Rapports de base, pas de cross-objet", hubspot: "Custom report builder multi-objets" },
  { critere: "Operations & data quality", pipedrive: "Non", hubspot: "Operations Hub natif" },
  { critere: "IA integree", pipedrive: "Suggestions basiques", hubspot: "Breeze : agents IA, copilot, scoring predictif" },
  { critere: "Sequences email", pipedrive: "Basiques, pas de personnalisation avancee", hubspot: "Sequences avancees + tokens + A/B testing" },
  { critere: "Custom objects", pipedrive: "Non", hubspot: "Oui (Enterprise)" },
  { critere: "Workflows avances", pipedrive: "Logique lineaire uniquement", hubspot: "Branches, delais, code custom, webhooks" },
  { critere: "Scoring leads", pipedrive: "Non natif", hubspot: "Scoring demographique + comportemental + predictif" },
  { critere: "Attribution marketing", pipedrive: "Non", hubspot: "Attribution multi-touch native" },
  { critere: "Integrations", pipedrive: "350+", hubspot: "1 500+" },
  { critere: "API", pipedrive: "REST API correcte", hubspot: "REST API complete, webhooks, custom coded actions" },
  { critere: "Formation", pipedrive: "Documentation en ligne", hubspot: "HubSpot Academy + certifications gratuites" },
];

const methodologySteps = [
  { num: "01", title: "Audit de l\u2019instance Pipedrive", desc: "Cartographie de votre Pipedrive : pipelines, champs custom, activites, automations, integrations. On identifie ce qui est reellement utilise et ce qu\u2019on peut simplifier pendant la migration. Pipedrive etant moins complexe que Salesforce, cet audit est plus rapide (1-2 jours).", details: ["Inventaire des pipelines et stages", "Liste des champs custom utilises", "Recensement des automations actives", "Audit de la qualite des donnees", "Identification des integrations tierces"], color: "#FF7A59" },
  { num: "02", title: "Mapping Pipedrive vers HubSpot", desc: "Traduction de votre architecture Pipedrive vers HubSpot. La bonne nouvelle : les concepts sont proches (Deals, Contacts, Organizations). Le mapping est plus direct qu\u2019une migration Salesforce. Les champs custom sont recrees un par un.", details: ["Persons vers Contacts HubSpot", "Organizations vers Companies HubSpot", "Deals vers Deals HubSpot (pipeline par pipeline)", "Mapping des champs custom", "Traduction des labels et statuts"], color: "#4B5EFC" },
  { num: "03", title: "Configuration de HubSpot", desc: "On configure HubSpot avant la migration : pipelines recrees avec les memes stages (ou optimises), proprietes custom, vues, permissions, workflows. L\u2019objectif est que HubSpot soit pret a recevoir les donnees.", details: ["Recreation des pipelines deals", "Configuration des proprietes custom", "Mise en place des vues et filtres", "Parametrage des permissions", "Configuration du Marketing Hub si pertinent"], color: "#6D00CC" },
  { num: "04", title: "Nettoyage et export des donnees", desc: "Export des donnees depuis Pipedrive via l\u2019API ou les exports CSV. Nettoyage prealable : deduplication, standardisation des formats, suppression des enregistrements obsoletes. La qualite des donnees importees determine la qualite du nouveau CRM.", details: ["Export via API Pipedrive (plus fiable que CSV)", "Deduplication des contacts et organisations", "Standardisation des formats (tel, email)", "Suppression des deals perdus anciens", "Verification de l\u2019integrite des associations"], color: "#22C55E" },
  { num: "05", title: "Migration et validation", desc: "Import dans HubSpot par lots : d\u2019abord les companies, puis les contacts (avec associations), puis les deals, puis les activites. Chaque lot est valide avant de passer au suivant. L\u2019historique des notes et activites est conserve.", details: ["Import des Companies avec secteur et taille", "Import des Contacts avec associations", "Import des Deals avec stages et montants", "Migration des notes et activites", "Validation croisee des compteurs"], color: "#6C5CE7" },
  { num: "06", title: "Formation et bascule", desc: "Formation de vos equipes sur HubSpot : navigation, creation de deals, utilisation des sequences, lecture des dashboards. La courbe d\u2019apprentissage est courte car HubSpot est plus intuitif que Pipedrive sur beaucoup d\u2019aspects. Bascule en 1-2 jours.", details: ["Formation commerciaux (2-3h)", "Formation managers sur reporting (2h)", "Configuration des dashboards personnels", "Test en conditions reelles", "Bascule definitive + desactivation Pipedrive"], color: "#D4A27F" },
];

const migrationObjects = [
  { title: "Contacts (Persons)", desc: "Toutes vos fiches contacts Pipedrive sont migrees vers HubSpot Contacts. Emails, telephones, champs custom, notes, historique d\u2019activite. Les associations avec les organisations sont preservees.", color: "#FF7A59" },
  { title: "Entreprises (Organizations)", desc: "Les organisations Pipedrive deviennent des Companies HubSpot. Secteur, taille, adresse, champs custom. Les associations contacts-companies sont recrees automatiquement.", color: "#4B5EFC" },
  { title: "Deals", desc: "Chaque deal est migre avec son pipeline, son stage, son montant, sa date de closing previsionnelle. L\u2019historique des changements de stage est conserve pour le reporting.", color: "#22C55E" },
  { title: "Activites & Notes", desc: "Appels, emails, meetings, notes : tout l\u2019historique d\u2019interactions est migre et rattache aux bons contacts et deals. Aucune perte d\u2019historique.", color: "#6D00CC" },
  { title: "Fichiers joints", desc: "Les documents attaches aux deals et contacts (devis, contrats, presentations) sont migres vers HubSpot et rattaches aux bons enregistrements.", color: "#6C5CE7" },
  { title: "Automations", desc: "Les automatisations Pipedrive sont reconstruites dans HubSpot avec des workflows plus puissants. C\u2019est l\u2019occasion d\u2019ajouter des logiques impossibles dans Pipedrive (branches, scoring, nurturing).", color: "#D4A27F" },
];

const timelineBudget = [
  { titre: "Migration Simple", duration: "4-5 semaines", budget: "5 000 - 7 000 EUR", desc: "PME avec 1-2 pipelines, moins de 5 000 contacts, peu de champs custom. Equipe de 3-8 commerciaux.", items: ["Audit rapide (1 jour)", "Mapping et configuration HubSpot", "Migration contacts, companies, deals", "3-5 automations reconstruites", "Formation equipe (demi-journee)"], color: "#22C55E" },
  { titre: "Migration Standard", duration: "5-7 semaines", budget: "7 000 - 10 000 EUR", desc: "Scale-up avec 2-4 pipelines, 5 000-20 000 contacts, champs custom et integrations tierces.", items: ["Audit complet (2 jours)", "Migration complete avec activites et fichiers", "10-15 workflows reconstruits + ameliores", "Integrations reconfigurees", "Formation multi-equipes"], color: "#4B5EFC" },
  { titre: "Migration Complete", duration: "6-8 semaines", budget: "10 000 - 12 000 EUR", desc: "Entreprise avec pipelines multiples, 20 000+ contacts, integrations complexes, besoin de Marketing Hub.", items: ["Audit approfondi", "Migration complete + nettoyage avance", "15+ workflows + Marketing Hub setup", "Integrations avancees (ERP, BI)", "Formation + coaching 1 mois", "Dashboards sur mesure"], color: "#6D00CC" },
];

const faqItems = [
  { q: "Combien coute une migration Pipedrive vers HubSpot ?", a: "Entre 5 000 et 12 000 EUR selon la complexite. C\u2019est significativement moins cher qu\u2019une migration Salesforce car Pipedrive est plus simple a auditer et les concepts sont plus proches de HubSpot. L\u2019appel de cadrage est gratuit." },
  { q: "Combien de temps dure une migration Pipedrive vers HubSpot ?", a: "De 4 a 8 semaines. C\u2019est plus rapide qu\u2019une migration Salesforce car il n\u2019y a pas de custom objects, pas d\u2019Apex a traduire, et les structures de donnees sont plus simples. La plupart des migrations Pipedrive sont terminees en 5-6 semaines." },
  { q: "Est-ce qu\u2019on perd des donnees pendant la migration ?", a: "Non. Nous utilisons l\u2019API Pipedrive pour extraire toutes les donnees (plus fiable que les exports CSV). Chaque lot est valide avant import dans HubSpot, et nous faisons une verification croisee des compteurs a la fin." },
  { q: "Pipedrive et HubSpot ont des concepts similaires ?", a: "Oui, tres proches. Persons = Contacts, Organizations = Companies, Deals = Deals. Les champs custom et les pipelines se traduisent directement. C\u2019est ce qui rend la migration plus simple que depuis Salesforce ou Dynamics." },
  { q: "Pourquoi ne pas rester sur Pipedrive ?", a: "Pipedrive est un excellent outil de vente pour les petites equipes. Mais des que vous avez besoin de marketing automation, de service client, d\u2019operations ou de reporting avance, vous devez empiler des outils tiers. HubSpot unifie tout sur une seule plateforme." },
  { q: "HubSpot est-il plus cher que Pipedrive ?", a: "Le prix par utilisateur est similaire (Pipedrive Pro : 49 EUR/mois vs HubSpot Pro : 90 EUR/mois). Mais HubSpot inclut le marketing, le service client, et les operations. Si vous ajoutez Mailchimp + Zendesk + outils de data quality a Pipedrive, le cout total est souvent superieur a HubSpot." },
  { q: "Peut-on garder Pipedrive pendant la migration ?", a: "Oui. Nous recommandons une periode de transition de 1-2 semaines ou les deux outils fonctionnent en parallele. Mais comme la migration Pipedrive est rapide, le double-run est court." },
  { q: "Les automatisations Pipedrive peuvent-elles etre recrees dans HubSpot ?", a: "Oui, et ameliorees. Les automatisations Pipedrive sont lineaires. Dans HubSpot, vous pouvez ajouter des branches conditionnelles, du scoring, des delais intelligents, des webhooks, et des custom coded actions. C\u2019est l\u2019occasion d\u2019optimiser vos process." },
  { q: "Faut-il prendre HubSpot Pro ou Enterprise ?", a: "Pour la majorite des migrations Pipedrive, HubSpot Sales Hub Pro suffit. L\u2019Enterprise est recommande si vous avez besoin de custom objects, de predictive scoring, de hierarchies d\u2019equipes avancees ou de permissions granulaires." },
  { q: "Nos commerciaux vont-ils s\u2019adapter facilement ?", a: "Oui. HubSpot est plus intuitif que Pipedrive sur beaucoup d\u2019aspects : interface moderne, recherche globale, vues personnalisees, IA integree. La formation prend 2-3 heures et le taux d\u2019adoption est de 90%+." },
  { q: "Peut-on connecter HubSpot aux memes outils que Pipedrive ?", a: "HubSpot a 4x plus d\u2019integrations natives que Pipedrive (1 500+ vs 350+). La quasi-totalite des outils connectes a Pipedrive ont un connecteur HubSpot, souvent plus riche en fonctionnalites." },
  { q: "Et si on a des donnees mal formatees dans Pipedrive ?", a: "C\u2019est justement l\u2019occasion de nettoyer. Notre phase de preparation inclut la deduplication, la standardisation des formats (telephones, emails, adresses) et la suppression des enregistrements obsoletes. Vous repartez sur une base saine." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Migration Pipedrive vers HubSpot", provider: { "@type": "Organization", name: "Ceres" }, description: "Accompagnement complet pour migrer de Pipedrive vers HubSpot en 4 a 8 semaines. Contacts, deals, activites, automations. A partir de 5 000 EUR.", serviceType: "CRM Migration", areaServed: { "@type": "Country", name: "France" } },
  { "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
]};

/* ─── CHECKMARK SVG ─── */
const Check = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
    <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── PAGE ─── */

export default function MigrationPipedriveHubSpotPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── HERO ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Migration CRM</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Migration Pipedrive vers HubSpot : guide complet et accompagnement
          </h1>
          <p className="text-[17px] text-[#666] max-w-[600px] mx-auto leading-[1.7] mb-4">
            Pipedrive vous limite ? Passez a HubSpot en 4 a 8 semaines. Marketing, reporting, operations, IA : tout ce qui manque a Pipedrive, HubSpot l&apos;integre nativement. On vous accompagne de A a Z.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.google.com/s2/favicons?domain=pipedrive.com&sz=64" alt="Pipedrive" width={22} height={22} className="rounded-sm" />
            <span className="text-[11px] text-[#999]">Migration en 4-8 semaines, a partir de 5 000 EUR</span>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Estimer ma migration
          </Link>
        </section>
        <Connector />

        {/* ── POURQUOI QUITTER PIPEDRIVE ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pourquoi migrer</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Pourquoi quitter Pipedrive pour HubSpot</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Pipedrive est un excellent outil de vente. Mais c&apos;est un outil de vente, pas une plateforme CRM. Voici les limites qui poussent les equipes a migrer.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

        {/* ── CE QUI CHANGE ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Comparatif</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Ce qui change : Pipedrive vs HubSpot</h2>
              <p className="text-[13px] text-white/40">15 criteres pour comprendre ce que vous gagnez en passant a HubSpot.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[25%]">Critere</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[37.5%]">Pipedrive</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 w-[37.5%]">HubSpot</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="text-[12px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-white/30 py-3 pr-4">{row.pipedrive}</td>
                      <td className="text-[11px] text-[#22C55E]/80 py-3">{row.hubspot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── METHODOLOGIE 6 ETAPES ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Methodologie</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Notre methodologie de migration en 6 etapes</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Plus rapide qu&apos;une migration Salesforce, mais avec la meme rigueur. Chaque etape est validee avant de passer a la suivante.</p>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ce qu&apos;on migre depuis Pipedrive</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Contacts, deals, activites, fichiers : tout est transfere vers HubSpot sans perte de donnees.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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

        {/* ── TIMELINE & BUDGET ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Budget</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Timeline et budget</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">4 a 8 semaines, 5 000 a 12 000 EUR. Plus rapide et moins cher qu&apos;une migration Salesforce.</p>
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
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur la migration Pipedrive vers HubSpot</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a quitter Pipedrive ?</h2>
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
