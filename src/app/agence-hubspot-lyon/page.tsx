import type { Metadata } from "next";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Agence HubSpot Lyon — Setup, Migration & Optimisation CRM | Ceres",
  description:
    "Agence HubSpot a Lyon. Configuration, migration, optimisation CRM pour startups et PME de la region Auvergne-Rhone-Alpes. Partenaire certifie.",
  keywords: [
    "agence hubspot lyon",
    "hubspot lyon",
    "consultant hubspot lyon",
    "crm lyon",
    "migration hubspot lyon",
  ],
  alternates: { canonical: "https://www.ceres-music.com/agence-hubspot-lyon" },
};

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const whyLyon = [
  { title: "Coeur d'Auvergne-Rhone-Alpes", desc: "Lyon est le centre economique de la deuxieme region de France. On connait le tissu industriel, biotech et SaaS local et on configure HubSpot pour repondre a vos specificites regionales.", color: "#FF7A59" },
  { title: "Ecosysteme tech dynamique", desc: "H7, Lyon French Tech, le campus Sanofi Pasteur, le corridor biotech/medtech : on travaille avec les acteurs de l'innovation lyonnaise et on comprend vos cycles de vente.", color: "#4B5EFC" },
  { title: "Proximite geographique", desc: "Paris-Lyon en 2h de TGV, ou directement dans vos locaux a Part-Dieu, Confluence ou Gerland. On se deplace pour les ateliers de cadrage, formations et go-live.", color: "#6D00CC" },
  { title: "Expertise du marche francais", desc: "RGPD, facturation a la francaise, cycles de vente B2B longs, double validation juridique : on connait les specificites du marche francais et on configure HubSpot en consequence.", color: "#22C55E" },
  { title: "Rayonnement regional", desc: "Depuis Lyon, on accompagne aussi vos equipes a Grenoble, Saint-Etienne, Clermont-Ferrand et Annecy. Un seul partenaire HubSpot pour toute la region.", color: "#6C5CE7" },
  { title: "Reactivite garantie", desc: "Meme fuseau horaire, Slack dedie, reponse sous 2h en jours ouvres. Pas de decalage horaire, pas de tickets perdus dans une file d'attente offshore.", color: "#D4A27F" },
];

const services = [
  { title: "Setup HubSpot complet", desc: "Configuration de votre instance HubSpot de zero. Pipelines, proprietes custom, vues par equipe, workflows d'automatisation, integrations stack et formation de vos utilisateurs. On configure HubSpot selon vos process, pas l'inverse.", items: ["Cadrage process avec vos equipes", "Config pipelines, proprietes, vues", "Workflows & automatisations", "Integrations stack (Slack, Pennylane, etc.)", "Formation utilisateurs sur site a Lyon"], color: "#FF7A59", duration: "3-4 sem", link: "/agence-hubspot" },
  { title: "Migration CRM vers HubSpot", desc: "Vous quittez Salesforce, Dynamics 365 ou Pipedrive. On migre tout proprement : contacts, entreprises, deals, historique, workflows. Periode de double-run incluse pour zero interruption.", items: ["Audit existant & mapping", "Migration contacts, entreprises, deals", "Historique complet conserve", "Reconstruction workflows", "Double-run securise"], color: "#4B5EFC", duration: "4-8 sem", link: "/agence-hubspot" },
  { title: "Optimisation HubSpot", desc: "Votre HubSpot est configure depuis 2-3 ans et personne n'a touche aux workflows. On restructure, on nettoie, on optimise. Quick wins immediats et roadmap a 6 mois.", items: ["Audit complet instance", "Nettoyage donnees & dedoublonnage", "Refonte workflows", "Nouveaux dashboards", "Roadmap d'evolution"], color: "#6D00CC", duration: "2-3 sem", link: "/agence-hubspot" },
  { title: "Formation HubSpot", desc: "Formation sur site dans vos locaux lyonnais ou en remote. Adaptee a vos process, pas un tuto generique. Par equipe : Sales, Marketing, CS, Ops, Direction.", items: ["Formation sur site a Lyon", "Sessions par equipe", "Exercices sur vos donnees", "Support post-formation", "Documentation personnalisee"], color: "#22C55E", duration: "1-2 jours", link: "/agence-hubspot" },
  { title: "Integration & API", desc: "Connexion de HubSpot avec votre stack : ERP, facturation, outils metier, data warehouse. Sync bi-directionnelle, webhooks, custom coded actions.", items: ["Mapping objets cross-outils", "Sync bi-directionnelle", "Custom coded workflows", "Webhooks & API", "Documentation technique"], color: "#6C5CE7", duration: "2-6 sem", link: "/integration-hubspot" },
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
  { client: "SaaS B2B Lyon Part-Dieu", result: "Setup HubSpot complet en 4 semaines. Integration ERP metier et formation de 15 commerciaux sur site.", metric: "4 semaines" },
  { client: "Biotech corridor Gerland", result: "Migration Pipedrive vers HubSpot. Pipeline adapte aux cycles longs du secteur pharma. Adoption a 92%.", metric: "92% adoption" },
  { client: "ETI industrielle Rhone-Alpes", result: "Unification de 3 CRM regionaux en une seule instance HubSpot. 35+ workflows automatises.", metric: "35+ workflows" },
];

const migrations = [
  { from: "Salesforce", desc: "Le cas le plus frequent. Salesforce est devenu trop complexe, trop cher, mal adopte. On migre l'integralite de vos donnees, workflows et reporting vers HubSpot. Periode de double-run systematique.", color: "#FF7A59", link: "/migration-salesforce-hubspot" },
  { from: "Dynamics 365", desc: "Microsoft Dynamics est puissant mais son interface freine l'adoption. On extrait vos donnees, on reconstruit vos process dans HubSpot et on forme vos equipes.", color: "#4B5EFC", link: "/migration-dynamics-hubspot" },
  { from: "Pipedrive", desc: "Pipedrive est un bon CRM de demarrage mais il atteint vite ses limites en termes de reporting, d'automatisation et de marketing. On vous fait passer a l'echelle avec HubSpot.", color: "#22C55E", link: "/migration-pipedrive-hubspot" },
];

const tarifs = [
  { service: "Audit & recommandations", prix: "A partir de 2 500\u00a0\u20ac", desc: "Audit complet de votre instance HubSpot ou de votre stack CRM actuelle. Livrable : rapport detaille + roadmap priorisee.", color: "#D4A27F" },
  { service: "Setup HubSpot", prix: "5 000 \u2013 15 000\u00a0\u20ac", desc: "Configuration complete selon le nombre de Hubs, le volume de donnees et la complexite des process. Inclut formation.", color: "#FF7A59" },
  { service: "Migration CRM", prix: "8 000 \u2013 25 000\u00a0\u20ac", desc: "Depend du CRM source, du volume de donnees et du nombre de workflows a reconstruire. Double-run inclus.", color: "#4B5EFC" },
  { service: "Administration recurrente", prix: "A partir de 2 000\u00a0\u20ac/mois", desc: "Un consultant dedie a temps partiel. Support users, maintenance workflows, evolutions continues, Slack dedie.", color: "#22C55E" },
];

const faqItems = [
  { q: "Combien coute une agence HubSpot a Lyon ?", a: "Le cout depend du perimetre : un audit demarre a 2 500\u00a0\u20ac, un setup complet entre 5 000 et 15 000\u00a0\u20ac, une migration entre 8 000 et 25 000\u00a0\u20ac. L'appel de cadrage est gratuit et sans engagement." },
  { q: "Pourquoi choisir une agence HubSpot basee a Lyon ?", a: "Proximite geographique pour les ateliers sur site, connaissance de l'ecosysteme Auvergne-Rhone-Alpes (biotech, industrie, SaaS) et reactivite garantie dans le meme fuseau horaire." },
  { q: "Combien de temps pour migrer de Salesforce vers HubSpot ?", a: "Entre 4 et 8 semaines en moyenne, selon le volume de donnees et la complexite des workflows. On inclut systematiquement une periode de double-run pour zero interruption." },
  { q: "Etes-vous partenaire officiel HubSpot ?", a: "Oui. Nous sommes partenaire certifie HubSpot avec plus de 250 clients accompagnes et 9 ans d'experience. Nos consultants sont certifies sur l'ensemble des Hubs : Sales, Marketing, Service et Operations." },
  { q: "Proposez-vous des formations HubSpot sur site a Lyon ?", a: "Oui, nous nous deplacons dans vos locaux lyonnais pour des formations adaptees a vos process. Formations par equipe (Sales, Marketing, CS) avec exercices sur vos propres donnees." },
  { q: "Accompagnez-vous des entreprises a Grenoble et Saint-Etienne ?", a: "Oui. Depuis Lyon, nous intervenons sur toute la region Auvergne-Rhone-Alpes : Grenoble, Saint-Etienne, Clermont-Ferrand, Annecy. Ateliers sur site et support remote." },
  { q: "HubSpot est-il adapte aux entreprises industrielles et biotech ?", a: "Absolument. HubSpot gere parfaitement les cycles de vente longs, les multiples interlocuteurs et le suivi de projets complexes propres aux secteurs industriels et biotech de la region lyonnaise." },
];

const temoignages = [
  { citation: "Ceres a configure notre HubSpot en 4 semaines. L'equipe a ete formee sur site a Part-Dieu, tout le monde utilise le CRM correctement des le premier mois.", auteur: "Directeur Commercial", entreprise: "SaaS B2B, Lyon 3e" },
  { citation: "La migration depuis Pipedrive s'est faite sans aucune interruption. Le double-run nous a rassures et l'adoption a ete immediate.", auteur: "CEO", entreprise: "Biotech, Lyon Gerland" },
  { citation: "On avait un HubSpot mal configure depuis 2 ans. L'audit a revele des dizaines de workflows casses. En 3 semaines, tout etait propre et optimise.", auteur: "Head of Ops", entreprise: "ETI industrielle, Villeurbanne" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Ceres - Agence HubSpot Lyon",
      description: "Agence HubSpot a Lyon. Setup, migration, optimisation et formation HubSpot pour entreprises d'Auvergne-Rhone-Alpes. Partenaire certifie, 250+ clients.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressRegion: "Auvergne-Rhone-Alpes",
        addressCountry: "FR",
      },
      url: "https://www.ceres-music.com/agence-hubspot-lyon",
      areaServed: { "@type": "City", name: "Lyon" },
      priceRange: "\u20ac\u20ac\u20ac",
    },
    {
      "@type": "Service",
      name: "Agence HubSpot Lyon",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Agence HubSpot a Lyon specialisee RevOps & IA. Configuration, migration Salesforce, optimisation, formation sur site.",
      serviceType: "HubSpot Consulting",
      areaServed: [
        { "@type": "City", name: "Lyon" },
        { "@type": "AdministrativeArea", name: "Auvergne-Rhone-Alpes" },
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

export default function AgenceHubSpotLyonPage() {
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
            <li className="text-[#111] font-medium">Lyon</li>
          </ol>
        </nav>

        {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Agence HubSpot Lyon</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Agence HubSpot a Lyon : votre partenaire certifie
          </h1>
          <p className="text-[17px] text-[#666] max-w-[580px] mx-auto leading-[1.7] mb-6">
            Setup, migration, optimisation et formation HubSpot. Nous accompagnons les entreprises d&apos;Auvergne-Rhone-Alpes dans le deploiement et l&apos;exploitation de HubSpot depuis 9 ans.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <p className="text-[28px] font-bold text-[#111]">250+</p>
              <p className="text-[12px] text-[#999]">Clients accompagnes</p>
            </div>
            <div className="w-px h-8 bg-[#E8E8E8] hidden sm:block" />
            <div className="text-center">
              <p className="text-[28px] font-bold text-[#111]">9 ans</p>
              <p className="text-[12px] text-[#999]">D&apos;experience HubSpot</p>
            </div>
            <div className="w-px h-8 bg-[#E8E8E8] hidden sm:block" />
            <div className="text-center">
              <p className="text-[28px] font-bold text-[#111]">2h TGV</p>
              <p className="text-[12px] text-[#999]">Paris-Lyon Part-Dieu</p>
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

        {/* ── 2. Pourquoi choisir une agence HubSpot a Lyon ──────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Proximite</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Pourquoi choisir une agence HubSpot a Lyon
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">
              Travailler avec une agence HubSpot proche de Lyon, c&apos;est gagner en reactivite, en comprehension de votre ecosysteme regional et en efficacite sur le terrain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyLyon.map((item) => (
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
              Nos services HubSpot a Lyon
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">
              De l&apos;implementation from scratch a l&apos;administration recurrente, en passant par la migration et la formation sur site.
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
                Partenaire HubSpot certifie a Lyon
              </h2>
              <p className="text-[13px] text-white/40 max-w-[540px]">
                Etre partenaire certifie HubSpot signifie que nos consultants ont passe l&apos;ensemble des certifications officielles. Nous avons acces au support prioritaire HubSpot, aux betas privees et aux ressources partenaires exclusives.
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
              <h3 className="text-[14px] font-semibold text-white mb-3">Zones d&apos;intervention depuis Lyon</h3>
              <ul className="space-y-2">
                {[
                  "Lyon et agglom\u00e9ration (Part-Dieu, Confluence, Gerland, Villeurbanne)",
                  "Grenoble et le sillon alpin",
                  "Saint-Etienne et bassin st\u00e9phanois",
                  "Clermont-Ferrand et Auvergne",
                  "Annecy, Chamb\u00e9ry et Savoie",
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

        {/* ── 5. Nos clients ─────────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="text-center mb-8">
              <div className="mb-4"><Badge>Clients</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
                Ils nous font confiance
              </h2>
              <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">
                Startups, scale-ups, PME et ETI. Nous accompagnons des entreprises de toutes tailles dans leur deploiement HubSpot.
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
              Migration vers HubSpot depuis Lyon
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">
              Vous utilisez Salesforce, Dynamics 365 ou Pipedrive et vous envisagez HubSpot. Notre agence gere la migration de A a Z pour les entreprises lyonnaises.
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
                  Voir le detail →
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── 7. Tarifs indicatifs ─────────────────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Tarifs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Tarifs indicatifs de notre agence HubSpot
            </h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">
              Tous nos projets sont au forfait, apres un appel de cadrage gratuit. Voici les fourchettes de prix pour vous donner un ordre de grandeur.
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
            * Tarifs HT indicatifs. Chaque projet fait l&apos;objet d&apos;une proposition detaillee apres cadrage.
          </p>
        </section>
        <Connector />

        {/* ── 8. FAQ ───────────────────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">
                Questions frequentes sur notre agence HubSpot a Lyon
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

        {/* ── 9. Temoignages ──────────────────────────────────────────────── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Temoignages</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">
              Ce que disent nos clients lyonnais
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

        {/* ── 10. CTA ──────────────────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Un projet HubSpot a Lyon ?
            </h2>
            <p className="text-[14px] text-[#999] mb-3 max-w-[480px] mx-auto">
              Setup, migration, optimisation, formation ou administration recurrente. Notre agence HubSpot vous accompagne de A a Z sur toute la region Auvergne-Rhone-Alpes. L&apos;appel de cadrage est gratuit et sans engagement.
            </p>
            <p className="text-[12px] text-[#999] mb-6">Lyon Part-Dieu -- 2h de Paris en TGV</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors"
            >
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Reserver un appel de cadrage
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
