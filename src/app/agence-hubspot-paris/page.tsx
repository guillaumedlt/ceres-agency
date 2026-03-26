"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const whyParis = [
  { title: "Proximit\u00e9 g\u00e9ographique", desc: "Nos bureaux sont situ\u00e9s rue La Bo\u00e9tie, dans le 8e arrondissement de Paris. On se d\u00e9place chez vous pour les ateliers de cadrage, les formations et les go-live. Rien ne remplace le pr\u00e9sentiel pour aligner vos \u00e9quipes.", color: "#FF7A59" },
  { title: "Expertise du march\u00e9 fran\u00e7ais", desc: "RGPD, facturation \u00e0 la fran\u00e7aise, cycles de vente B2B longs, double validation juridique : on conna\u00eet les sp\u00e9cificit\u00e9s du march\u00e9 fran\u00e7ais et on configure HubSpot en cons\u00e9quence.", color: "#4B5EFC" },
  { title: "R\u00e9activit\u00e9 garantie", desc: "M\u00eame fuseau horaire, Slack d\u00e9di\u00e9, r\u00e9ponse sous 2h en jours ouvr\u00e9s. Pas de d\u00e9calage horaire, pas de tickets perdus dans une file d\u2019attente offshore.", color: "#6D00CC" },
  { title: "Connaissance de l\u2019\u00e9cosyst\u00e8me", desc: "On travaille avec les startups et scale-ups parisiennes depuis 9 ans. On conna\u00eet vos outils (Pennylane, Qonto, Lemlist, Clay, Notion) et on sait les connecter \u00e0 HubSpot.", color: "#22C55E" },
  { title: "Accompagnement sur site", desc: "Formation dans vos locaux, workshops strat\u00e9giques, sessions de co-construction avec vos \u00e9quipes Sales, Marketing et CS. On s\u2019adapte \u00e0 votre rythme.", color: "#6C5CE7" },
  { title: "R\u00e9seau partenaire local", desc: "On collabore avec les meilleures agences SEO, Paid et Product parisiennes pour vous offrir un \u00e9cosyst\u00e8me complet autour de HubSpot.", color: "#D4A27F" },
];

const services = [
  { title: "Setup HubSpot complet", desc: "Configuration de votre instance HubSpot de z\u00e9ro. Pipelines, propri\u00e9t\u00e9s custom, vues par \u00e9quipe, workflows d\u2019automatisation, int\u00e9grations stack et formation de vos utilisateurs. On configure HubSpot selon vos process, pas l\u2019inverse.", items: ["Cadrage process avec vos \u00e9quipes", "Config pipelines, propri\u00e9t\u00e9s, vues", "Workflows & automatisations", "Int\u00e9grations stack (Slack, Pennylane, etc.)", "Formation utilisateurs sur site"], color: "#FF7A59", duration: "3-4 sem", link: "/agence-hubspot" },
  { title: "Migration CRM vers HubSpot", desc: "Vous quittez Salesforce, Dynamics 365 ou Pipedrive. On migre tout proprement : contacts, entreprises, deals, historique, workflows. P\u00e9riode de double-run incluse pour z\u00e9ro interruption.", items: ["Audit existant & mapping", "Migration contacts, entreprises, deals", "Historique complet conserv\u00e9", "Reconstruction workflows", "Double-run s\u00e9curis\u00e9"], color: "#4B5EFC", duration: "4-8 sem", link: "/agence-hubspot" },
  { title: "Optimisation HubSpot", desc: "Votre HubSpot est configur\u00e9 depuis 2-3 ans et personne n\u2019a touch\u00e9 aux workflows. On restructure, on nettoie, on optimise. Quick wins imm\u00e9diats et roadmap \u00e0 6 mois.", items: ["Audit complet instance", "Nettoyage donn\u00e9es & d\u00e9doublonnage", "Refonte workflows", "Nouveaux dashboards", "Roadmap d\u2019\u00e9volution"], color: "#6D00CC", duration: "2-3 sem", link: "/agence-hubspot" },
  { title: "Formation HubSpot", desc: "Formation sur site dans vos locaux parisiens ou en remote. Adapt\u00e9e \u00e0 vos process, pas un tuto g\u00e9n\u00e9rique. Par \u00e9quipe : Sales, Marketing, CS, Ops, Direction.", items: ["Formation sur site \u00e0 Paris", "Sessions par \u00e9quipe", "Exercices sur vos donn\u00e9es", "Support post-formation", "Documentation personnalis\u00e9e"], color: "#22C55E", duration: "1-2 jours", link: "/agence-hubspot" },
  { title: "Int\u00e9gration & API", desc: "Connexion de HubSpot avec votre stack : ERP, facturation, outils m\u00e9tier, data warehouse. Sync bi-directionnelle, webhooks, custom coded actions.", items: ["Mapping objets cross-outils", "Sync bi-directionnelle", "Custom coded workflows", "Webhooks & API", "Documentation technique"], color: "#6C5CE7", duration: "2-6 sem", link: "/integration-hubspot" },
];

const certifications = [
  { hub: "Sales Hub", level: "Implementation", color: "#FF7A59" },
  { hub: "Marketing Hub", level: "Implementation", color: "#FF5C35" },
  { hub: "Service Hub", level: "Implementation", color: "#00BDA5" },
  { hub: "Operations Hub", level: "Implementation", color: "#6C5CE7" },
  { hub: "CRM", level: "Platform", color: "#4B5EFC" },
  { hub: "Data Integrations", level: "Accreditation", color: "#D4A27F" },
];

const clients = [
  { name: "TotalEnergies", domain: "totalenergies.com" },
  { name: "Alan", domain: "alan.com" },
  { name: "Edenred", domain: "edenred.com" },
  { name: "Dougs", domain: "dougs.fr" },
  { name: "Kameleoon", domain: "kameleoon.com" },
  { name: "Beedeez", domain: "beedeez.com" },
];

const clientResults = [
  { client: "Scale-up SaaS Paris", result: "Migration Salesforce vers HubSpot en 6 semaines. Adoption \u00e0 95% d\u00e8s le premier mois.", metric: "95% adoption" },
  { client: "ETI industrielle Ile-de-France", result: "Unification de 3 outils en HubSpot. 40+ workflows automatis\u00e9s, reporting unifi\u00e9.", metric: "40+ workflows" },
  { client: "Startup fintech Paris", result: "Setup HubSpot from scratch. Pipeline, s\u00e9quences, int\u00e9grations Slack + Pennylane en 3 semaines.", metric: "3 semaines" },
];

const migrations = [
  { from: "Salesforce", desc: "Le cas le plus fr\u00e9quent. Salesforce est devenu trop complexe, trop cher, mal adopt\u00e9. On migre l\u2019int\u00e9gralit\u00e9 de vos donn\u00e9es, workflows et reporting vers HubSpot. P\u00e9riode de double-run syst\u00e9matique.", color: "#FF7A59", link: "/migration-salesforce-hubspot" },
  { from: "Dynamics 365", desc: "Microsoft Dynamics est puissant mais son interface freine l\u2019adoption. On extrait vos donn\u00e9es, on reconstruit vos process dans HubSpot et on forme vos \u00e9quipes.", color: "#4B5EFC", link: "/migration-dynamics-hubspot" },
  { from: "Pipedrive", desc: "Pipedrive est un bon CRM de d\u00e9marrage mais il atteint vite ses limites en termes de reporting, d\u2019automatisation et de marketing. On vous fait passer \u00e0 l\u2019\u00e9chelle avec HubSpot.", color: "#22C55E", link: "/migration-pipedrive-hubspot" },
];

const tarifs = [
  { service: "Audit & recommandations", prix: "\u00c0 partir de 2 500\u00a0\u20ac", desc: "Audit complet de votre instance HubSpot ou de votre stack CRM actuelle. Livrable : rapport d\u00e9taill\u00e9 + roadmap prioris\u00e9e.", color: "#D4A27F" },
  { service: "Setup HubSpot", prix: "5 000 \u2013 15 000\u00a0\u20ac", desc: "Configuration compl\u00e8te selon le nombre de Hubs, le volume de donn\u00e9es et la complexit\u00e9 des process. Inclut formation.", color: "#FF7A59" },
  { service: "Migration CRM", prix: "8 000 \u2013 25 000\u00a0\u20ac", desc: "D\u00e9pend du CRM source, du volume de donn\u00e9es et du nombre de workflows \u00e0 reconstruire. Double-run inclus.", color: "#4B5EFC" },
  { service: "Administration r\u00e9currente", prix: "\u00c0 partir de 2 000\u00a0\u20ac/mois", desc: "Un consultant d\u00e9di\u00e9 \u00e0 temps partiel. Support users, maintenance workflows, \u00e9volutions continues, Slack d\u00e9di\u00e9.", color: "#22C55E" },
];

const faqItems = [
  { q: "Combien co\u00fbte une agence HubSpot \u00e0 Paris ?", a: "Le co\u00fbt d\u00e9pend du p\u00e9rim\u00e8tre : un audit d\u00e9marre \u00e0 2 500\u00a0\u20ac, un setup complet entre 5 000 et 15 000\u00a0\u20ac, une migration entre 8 000 et 25 000\u00a0\u20ac. L\u2019appel de cadrage est gratuit et sans engagement." },
  { q: "Pourquoi choisir HubSpot plut\u00f4t que Salesforce ?", a: "HubSpot offre une interface plus intuitive, une adoption plus rapide par les \u00e9quipes, un co\u00fbt total de possession inf\u00e9rieur et une IA native int\u00e9gr\u00e9e (Breeze). Salesforce reste pertinent pour les tr\u00e8s grandes organisations avec des process ultra-complexes." },
  { q: "Combien de temps pour migrer de Salesforce vers HubSpot ?", a: "Entre 4 et 8 semaines en moyenne, selon le volume de donn\u00e9es et la complexit\u00e9 des workflows. On inclut syst\u00e9matiquement une p\u00e9riode de double-run pour z\u00e9ro interruption." },
  { q: "\u00cates-vous partenaire officiel HubSpot ?", a: "Oui. Nous sommes partenaire certifi\u00e9 HubSpot avec plus de 250 clients accompagn\u00e9s et 9 ans d\u2019exp\u00e9rience. Nos consultants sont certifi\u00e9s sur l\u2019ensemble des Hubs : Sales, Marketing, Service et Operations." },
  { q: "Proposez-vous des formations HubSpot sur site \u00e0 Paris ?", a: "Oui, nous nous d\u00e9pla\u00e7ons dans vos locaux parisiens pour des formations adapt\u00e9es \u00e0 vos process. Formations par \u00e9quipe (Sales, Marketing, CS) avec exercices sur vos propres donn\u00e9es." },
  { q: "Peut-on garder Salesforce et ajouter HubSpot Marketing ?", a: "Absolument. C\u2019est un sc\u00e9nario fr\u00e9quent : Salesforce c\u00f4t\u00e9 Sales, HubSpot c\u00f4t\u00e9 Marketing. On configure la sync bi-directionnelle entre les deux plateformes." },
  { q: "Quel est votre d\u00e9lai de r\u00e9ponse ?", a: "Nous r\u00e9pondons sous 2h en jours ouvr\u00e9s via Slack d\u00e9di\u00e9. Nous sommes bas\u00e9s \u00e0 Paris, m\u00eame fuseau horaire, pas de d\u00e9calage." },
  { q: "Travaillez-vous avec des entreprises hors de Paris ?", a: "Oui, nous accompagnons des clients dans toute la France et en Europe. Le travail se fait en remote avec des sessions sur site ponctuelles si n\u00e9cessaire." },
  { q: "HubSpot est-il adapt\u00e9 aux PME et ETI fran\u00e7aises ?", a: "HubSpot est particuli\u00e8rement adapt\u00e9 aux PME et ETI. L\u2019adoption est imm\u00e9diate, le co\u00fbt ma\u00eetris\u00e9 et la plateforme \u00e9volue avec vous sans n\u00e9cessiter de d\u00e9veloppeurs d\u00e9di\u00e9s." },
  { q: "Comment se passe un projet type avec votre agence ?", a: "1) Appel de cadrage gratuit. 2) Proposition d\u00e9taill\u00e9e avec p\u00e9rim\u00e8tre et tarif. 3) Ateliers de cadrage process. 4) Configuration / migration. 5) Formation. 6) Go-live et support post-lancement." },
];

const temoignages = [
  { citation: "Ceres a migr\u00e9 notre Salesforce vers HubSpot en 5 semaines. L\u2019\u00e9quipe commerciale a adopt\u00e9 le CRM d\u00e8s le premier jour. On aurait d\u00fb faire \u00e7a il y a 2 ans.", auteur: "Directeur Commercial", entreprise: "Scale-up SaaS, Paris 9e" },
  { citation: "L\u2019audit de notre instance HubSpot a r\u00e9v\u00e9l\u00e9 15 workflows cass\u00e9s et 40% de donn\u00e9es en doublon. En 3 semaines, tout \u00e9tait propre. Le ROI est imm\u00e9diat.", auteur: "Head of Revenue Operations", entreprise: "Fintech, Paris 8e" },
  { citation: "La formation sur site a transform\u00e9 notre fa\u00e7on d\u2019utiliser HubSpot. Nos commerciaux remplissent enfin le CRM correctement parce qu\u2019ils comprennent pourquoi.", auteur: "VP Sales", entreprise: "SaaS B2B, Paris 2e" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Ceres - Agence HubSpot Paris",
      description: "Agence HubSpot \u00e0 Paris. Setup, migration, optimisation et formation HubSpot. Partenaire certifi\u00e9, 250+ clients, 9 ans d\u2019exp\u00e9rience.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "128 rue La Bo\u00e9tie",
        addressLocality: "Paris",
        postalCode: "75008",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 48.8738, longitude: 2.3071 },
      url: "https://www.ceres-music.com/agence-hubspot-paris",
      telephone: "+33-1-00-00-00-00",
      areaServed: { "@type": "City", name: "Paris" },
      priceRange: "\u20ac\u20ac\u20ac",
    },
    {
      "@type": "Service",
      name: "Agence HubSpot Paris",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Agence HubSpot \u00e0 Paris sp\u00e9cialis\u00e9e RevOps & IA. Configuration, migration Salesforce, optimisation, formation sur site.",
      serviceType: "HubSpot Consulting",
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

export default function AgenceHubSpotParisPage() {
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
            <li><Link href="/agence-hubspot" className="hover:text-[#666] transition-colors">Agence HubSpot</Link></li>
            <li>/</li>
            <li className="text-[#111] font-medium">Paris</li>
          </ol>
        </nav>

        {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Agence HubSpot Paris</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Agence HubSpot &agrave; Paris : votre partenaire certifi&eacute;
          </h1>
          <p className="text-[17px] text-[#666] max-w-[580px] mx-auto leading-[1.7] mb-6">
            Setup, migration, optimisation et formation HubSpot. Bas&eacute;s &agrave; Paris 8e, nous accompagnons les entreprises fran&ccedil;aises dans le d&eacute;ploiement et l&apos;exploitation de HubSpot depuis 9 ans.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <p className="text-[28px] font-bold text-[#111]">250+</p>
              <p className="text-[12px] text-[#999]">Clients accompagn&eacute;s</p>
            </div>
            <div className="w-px h-8 bg-[#E8E8E8] hidden sm:block" />
            <div className="text-center">
              <p className="text-[28px] font-bold text-[#111]">9 ans</p>
              <p className="text-[12px] text-[#999]">D&apos;exp&eacute;rience HubSpot</p>
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
            Demander un devis gratuit
          </Link>
        </section>
        <Connector />

        {/* ── 2. Pourquoi choisir une agence HubSpot a Paris ────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Proximit&eacute;</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Pourquoi choisir une agence HubSpot &agrave; Paris
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">
              Travailler avec une agence HubSpot locale &agrave; Paris, c&apos;est gagner en r&eacute;activit&eacute;, en compr&eacute;hension de vos enjeux et en efficacit&eacute; sur le terrain.
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

        {/* ── 3. Nos services HubSpot ──────────────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Services</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Nos services HubSpot &agrave; Paris
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">
              De l&apos;impl&eacute;mentation from scratch &agrave; l&apos;administration r&eacute;currente, en passant par la migration et la formation sur site.
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

        {/* ── 4. Partenaire HubSpot certifie ───────────────────────────────── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">
                Certifications
              </span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">
                Partenaire HubSpot certifi&eacute; &agrave; Paris
              </h2>
              <p className="text-[13px] text-white/40 max-w-[540px]">
                &Ecirc;tre partenaire certifi&eacute; HubSpot signifie que nos consultants ont pass&eacute; l&apos;ensemble des certifications officielles. Nous avons acc&egrave;s au support prioritaire HubSpot, aux b&ecirc;tas priv&eacute;es et aux ressources partenaires exclusives. C&apos;est la garantie d&apos;une expertise &agrave; jour et valid&eacute;e par HubSpot.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {certifications.map((cert) => (
                <div key={cert.hub} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: cert.color }} />
                    <h3 className="text-[13px] font-semibold text-white">{cert.hub}</h3>
                  </div>
                  <p className="text-[11px] text-white/40">{cert.level}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-[14px] font-semibold text-white mb-3">Ce que &ccedil;a signifie pour vous</h3>
              <ul className="space-y-2">
                {[
                  "Consultants form\u00e9s et certifi\u00e9s sur chaque Hub",
                  "Acc\u00e8s au support prioritaire HubSpot en cas de probl\u00e8me",
                  "Tarifs pr\u00e9f\u00e9rentiels n\u00e9goci\u00e9s pour nos clients",
                  "Acc\u00e8s aux b\u00eatas et nouvelles fonctionnalit\u00e9s en avant-premi\u00e8re",
                  "Expertise valid\u00e9e et mise \u00e0 jour chaque ann\u00e9e",
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

        {/* ── 5. Nos clients parisiens et francais ─────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="text-center mb-8">
              <div className="mb-4"><Badge>Clients</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
                Nos clients parisiens et fran&ccedil;ais
              </h2>
              <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">
                Startups, scale-ups, PME et ETI. Nous accompagnons des entreprises de toutes tailles dans leur d&eacute;ploiement HubSpot.
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {clientResults.map((r) => (
                <div key={r.client} className="rounded-xl border border-[#F2F2F2] p-4">
                  <p className="text-[11px] text-[#999] mb-1">{r.client}</p>
                  <p className="text-[12px] text-[#666] leading-[1.6] mb-2">{r.result}</p>
                  <span className="text-[13px] font-bold text-[#22C55E]">{r.metric}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 6. Migration vers HubSpot ────────────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Migration</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Migration vers HubSpot depuis Paris
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">
              Vous utilisez Salesforce, Dynamics 365 ou Pipedrive et vous envisagez HubSpot. Notre agence parisienne g&egrave;re la migration de A &agrave; Z.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {migrations.map((m) => (
              <div key={m.from} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: m.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{m.from} → HubSpot</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{m.desc}</p>
                <Link href={m.link} className="text-[12px] text-[#4B5EFC] font-medium hover:underline">
                  Voir le d&eacute;tail →
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 7. Formation HubSpot ─────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>Formation</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
                Formation HubSpot sur site &agrave; Paris
              </h2>
              <p className="text-[13px] text-[#999] max-w-[520px]">
                Nos consultants HubSpot se d&eacute;placent dans vos locaux parisiens pour former vos &eacute;quipes. Chaque session est adapt&eacute;e &agrave; vos process, vos donn&eacute;es et vos objectifs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Formation sur site", desc: "Dans vos locaux \u00e0 Paris. Id\u00e9al pour les \u00e9quipes de 5 \u00e0 20 personnes. Exercices pratiques sur vos propres donn\u00e9es et pipelines.", color: "#FF7A59" },
                { title: "Formation remote", desc: "En visio pour les \u00e9quipes distribu\u00e9es ou les collaborateurs en t\u00e9l\u00e9travail. Sessions de 2h maximum pour maintenir l\u2019attention.", color: "#4B5EFC" },
                { title: "Formation par \u00e9quipe", desc: "Contenu adapt\u00e9 par fonction : Sales (pipeline, s\u00e9quences), Marketing (workflows, segmentation), CS (tickets, knowledge base), Direction (reporting, forecasting).", color: "#22C55E" },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-[#F2F2F2] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: f.color }} />
                    <h3 className="text-[13px] font-semibold text-[#111]">{f.title}</h3>
                  </div>
                  <p className="text-[12px] text-[#777] leading-[1.65]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── 8. Tarifs indicatifs ─────────────────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Tarifs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Tarifs indicatifs de notre agence HubSpot
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">
              Tous nos projets sont au forfait, apr&egrave;s un appel de cadrage gratuit. Voici les fourchettes de prix pour vous donner un ordre de grandeur.
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
            * Tarifs HT indicatifs. Chaque projet fait l&apos;objet d&apos;une proposition d&eacute;taill&eacute;e apr&egrave;s cadrage.
          </p>
        </section>
        <Connector />

        {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">
                Questions fr&eacute;quentes sur notre agence HubSpot &agrave; Paris
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

        {/* ── 10. Temoignages ──────────────────────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>T&eacute;moignages</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">
              Ce que disent nos clients parisiens
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {temoignages.map((t, i) => (
              <div key={i} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] text-[#666] leading-[1.7] mb-4 italic">
                  &laquo; {t.citation} &raquo;
                </p>
                <div>
                  <p className="text-[13px] font-semibold text-[#111]">{t.auteur}</p>
                  <p className="text-[11px] text-[#999]">{t.entreprise}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 11. CTA ──────────────────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Un projet HubSpot &agrave; Paris ?
            </h2>
            <p className="text-[14px] text-[#999] mb-3 max-w-[480px] mx-auto">
              Setup, migration, optimisation, formation ou administration r&eacute;currente. Notre agence HubSpot parisienne vous accompagne de A &agrave; Z. L&apos;appel de cadrage est gratuit et sans engagement.
            </p>
            <p className="text-[12px] text-[#999] mb-6">128 rue La Bo&eacute;tie, 75008 Paris</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors"
            >
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              R&eacute;server un appel de cadrage
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
