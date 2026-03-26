"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const features = [
  {
    title: "Data sync",
    desc: "La synchronisation bidirectionnelle native d\u2019Operations Hub connecte HubSpot \u00e0 plus de 100 applications tierces : ERP, facturation, support, marketing automation. Contrairement aux int\u00e9grations classiques qui poussent les donn\u00e9es dans un seul sens, data sync maintient les deux syst\u00e8mes \u00e0 jour en temps r\u00e9el. Vous d\u00e9finissez les r\u00e8gles de priorit\u00e9 (quel syst\u00e8me est ma\u00eetre), les filtres (quels enregistrements synchroniser) et les mappings de champs. Le r\u00e9sultat : une source de v\u00e9rit\u00e9 unique, sans import manuel ni doublon.",
    color: "#6C5CE7",
  },
  {
    title: "Data quality automation",
    desc: "Les workflows de qualit\u00e9 de donn\u00e9es corrigent automatiquement les probl\u00e8mes les plus courants : capitalisation des noms, formatage des num\u00e9ros de t\u00e9l\u00e9phone, nettoyage des donn\u00e9es en masse, correction des valeurs de propri\u00e9t\u00e9s. HubSpot d\u00e9tecte aussi les doublons et propose des fusions en un clic. Ces automatisations tournent en continu : chaque nouveau contact import\u00e9, chaque formulaire soumis passe par vos r\u00e8gles de qualit\u00e9 avant d\u2019entrer dans le CRM.",
    color: "#FF7A59",
  },
  {
    title: "Programmable automation",
    desc: "Les custom coded actions permettent d\u2019ex\u00e9cuter du code JavaScript ou Python directement dans les workflows HubSpot. Calculs complexes, appels API externes, transformations de donn\u00e9es, logique conditionnelle avanc\u00e9e : tout ce que les workflows standards ne peuvent pas faire. Par exemple : calculer un score custom bas\u00e9 sur 15 crit\u00e8res pond\u00e9r\u00e9s, enrichir un contact via une API tierce, ou g\u00e9n\u00e9rer un r\u00e9sum\u00e9 IA d\u2019un deal via Claude.",
    color: "#4B5EFC",
  },
  {
    title: "Datasets",
    desc: "Les datasets sont des tables de donn\u00e9es pr\u00e9-calcul\u00e9es qui alimentent vos rapports. Vous d\u00e9finissez les champs, les formules, les filtres et les jointures entre objets (contacts, deals, entreprises, custom objects). Le r\u00e9sultat : des rapports complexes qui se chargent instantan\u00e9ment, sans recalcul \u00e0 chaque ouverture. Indispensable pour les dashboards RevOps qui croisent donn\u00e9es marketing, sales et CS.",
    color: "#22C55E",
  },
  {
    title: "Custom code workflows",
    desc: "Au-del\u00e0 des custom coded actions, Operations Hub Enterprise permet de cr\u00e9er des webhooks, des actions de workflow enti\u00e8rement custom et des int\u00e9grations sur mesure. Vous pouvez d\u00e9clencher un workflow HubSpot depuis un \u00e9v\u00e9nement externe, ou inversement, envoyer des donn\u00e9es HubSpot vers n\u2019importe quel syst\u00e8me via API. C\u2019est le hub d\u2019orchestration de votre stack technologique.",
    color: "#D4A27F",
  },
];

const plans = [
  {
    name: "Starter",
    price: "20\u20AC/mois",
    features: [
      "Data sync (limit\u00e9 \u00e0 10 applications)",
      "D\u00e9doublonnage basique",
      "Propri\u00e9t\u00e9s par d\u00e9faut",
      "Mapping de champs standard",
      "Support email",
    ],
    color: "#6C5CE7",
    best: false,
  },
  {
    name: "Professional",
    price: "\u00e0 partir de 800\u20AC/mois",
    features: [
      "Tout Starter +",
      "Data quality automation",
      "Programmable automation",
      "Webhooks",
      "Datasets",
      "Rapports custom avanc\u00e9s",
      "Scheduled workflows",
      "Int\u00e9grations illimit\u00e9es",
    ],
    color: "#4B5EFC",
    best: true,
  },
  {
    name: "Enterprise",
    price: "\u00e0 partir de 2 000\u20AC/mois",
    features: [
      "Tout Professional +",
      "Custom objects avanc\u00e9s",
      "Datasets avanc\u00e9s (formules)",
      "Sandboxes",
      "Admin permissions granulaires",
      "Snowflake data share",
      "Custom coded actions illimit\u00e9es",
      "SSO & audit logs",
    ],
    color: "#6D00CC",
    best: false,
  },
];

const revopsRaisons = [
  {
    title: "Une source de v\u00e9rit\u00e9 unique",
    desc: "Le RevOps repose sur un principe fondamental : toutes les \u00e9quipes (Marketing, Sales, CS, Finance) travaillent sur les m\u00eames donn\u00e9es. Operations Hub est l\u2019outil qui rend cela possible en synchronisant, nettoyant et structurant vos donn\u00e9es en continu.",
    color: "#6C5CE7",
  },
  {
    title: "Automatisation cross-fonctionnelle",
    desc: "Les workflows standards de HubSpot fonctionnent en silo par Hub. Operations Hub casse ces silos avec des automatisations qui traversent les \u00e9quipes : un deal sign\u00e9 d\u00e9clenche une t\u00e2che CS, met \u00e0 jour la facturation et notifie le marketing pour le case study.",
    color: "#FF7A59",
  },
  {
    title: "Reporting unifi\u00e9",
    desc: "Avec les datasets et les rapports custom d\u2019Operations Hub, vous construisez des dashboards RevOps qui couvrent l\u2019ensemble du funnel : du premier contact marketing au renouvellement, en passant par le closing et l\u2019onboarding client.",
    color: "#4B5EFC",
  },
  {
    title: "Gouvernance des donn\u00e9es",
    desc: "Data quality automation garantit que les donn\u00e9es restent propres dans le temps. Plus de \u00ab garbage in, garbage out \u00bb. Vos rapports sont fiables, vos segments sont pr\u00e9cis, et vos automatisations se d\u00e9clenchent sur les bons crit\u00e8res.",
    color: "#22C55E",
  },
  {
    title: "Extensibilit\u00e9 illimit\u00e9e",
    desc: "Les custom coded actions et les webhooks permettent de connecter HubSpot \u00e0 n\u2019importe quel syst\u00e8me. ERP, data warehouse, outils m\u00e9tier : Operations Hub est le ciment qui tient votre stack ensemble.",
    color: "#D4A27F",
  },
];

const deploiement = [
  { step: "1. Audit de la qualit\u00e9 de donn\u00e9es", desc: "On analyse vos donn\u00e9es actuelles dans HubSpot et vos outils connect\u00e9s. Doublons, champs vides, incoh\u00e9rences, formatage. On produit un rapport de qualit\u00e9 avec des recommandations actionables." },
  { step: "2. Mapping des flux de donn\u00e9es", desc: "On cartographie tous les flux de donn\u00e9es entre vos syst\u00e8mes : quel outil est ma\u00eetre sur quel champ, dans quel sens vont les syncs, quelles sont les r\u00e8gles de priorit\u00e9." },
  { step: "3. Configuration data sync", desc: "Mise en place des syncs bidirectionnelles avec vos outils cl\u00e9s. Mapping de champs, filtres, r\u00e8gles de r\u00e9solution de conflits. Tests sur un \u00e9chantillon avant d\u00e9ploiement complet." },
  { step: "4. Automatisation qualit\u00e9 de donn\u00e9es", desc: "Cr\u00e9ation des workflows de data quality : formatage automatique, d\u00e9doublonnage, enrichissement, validation des donn\u00e9es \u00e0 l\u2019entr\u00e9e." },
  { step: "5. Custom coded actions", desc: "D\u00e9veloppement des automatisations avanc\u00e9es : scoring custom, appels API, calculs complexes, int\u00e9grations sur mesure." },
  { step: "6. Datasets et reporting RevOps", desc: "Construction des datasets cross-objets et des dashboards RevOps unifi\u00e9s. Formation de l\u2019\u00e9quipe Ops sur la maintenance." },
];

const faqItems = [
  { q: "Operations Hub est-il indispensable si on a d\u00e9j\u00e0 Sales Hub et Marketing Hub ?", a: "Si vos donn\u00e9es sont propres, que vous n\u2019avez que HubSpot comme outil et que vos besoins en reporting sont basiques, non. Mais d\u00e8s que vous connectez des outils tiers (ERP, facturation, support), que vous avez des probl\u00e8mes de qualit\u00e9 de donn\u00e9es ou que vous avez besoin d\u2019automatisations avanc\u00e9es, Operations Hub devient indispensable." },
  { q: "Quelle diff\u00e9rence entre Operations Hub et Make/Zapier ?", a: "Make et Zapier connectent des outils via des sc\u00e9narios ponctuels. Operations Hub int\u00e8gre la sync, la qualit\u00e9 de donn\u00e9es et l\u2019automatisation directement dans HubSpot, avec une vision unifi\u00e9e. En pratique, on utilise souvent les deux : Operations Hub pour la sync et la data quality, Make pour les automatisations complexes multi-\u00e9tapes." },
  { q: "Les custom coded actions n\u00e9cessitent-elles un d\u00e9veloppeur ?", a: "Oui, les custom coded actions n\u00e9cessitent des comp\u00e9tences en JavaScript ou Python. C\u2019est l\u00e0 qu\u2019on intervient : on d\u00e9veloppe vos custom coded actions, on les documente et on vous forme \u00e0 les maintenir. Pour les modifications simples, un RevOps avec des bases de code peut se d\u00e9brouiller." },
  { q: "Data sync remplace-t-il un ETL comme Fivetran ?", a: "Pour des syncs simples entre HubSpot et vos outils SaaS (Salesforce, NetSuite, Mailchimp), oui. Pour des besoins de data warehouse, de transformation complexe ou de volumes massifs, un ETL reste n\u00e9cessaire. HubSpot Enterprise propose aussi un Snowflake data share pour alimenter votre data warehouse directement." },
  { q: "Combien de temps pour d\u00e9ployer Operations Hub ?", a: "Comptez 2 \u00e0 4 semaines pour un d\u00e9ploiement standard (data sync + data quality). Ajoutez 2 \u00e0 4 semaines pour les custom coded actions et les datasets avanc\u00e9s. La dur\u00e9e d\u00e9pend du nombre de syst\u00e8mes \u00e0 connecter et de la complexit\u00e9 de vos automatisations." },
  { q: "Operations Hub aide-t-il pour le RGPD ?", a: "Indirectement. Les workflows de data quality permettent d\u2019automatiser la suppression de donn\u00e9es apr\u00e8s une p\u00e9riode d\u00e9finie, de valider la base l\u00e9gale \u00e0 l\u2019entr\u00e9e et de maintenir la coh\u00e9rence du consentement entre syst\u00e8mes synchronis\u00e9s." },
  { q: "Peut-on connecter HubSpot \u00e0 notre ERP avec Operations Hub ?", a: "Oui. Si votre ERP a une sync native (NetSuite, Microsoft Dynamics), on utilise data sync. Sinon, on cr\u00e9e la connexion via custom coded actions et webhooks. On a d\u00e9j\u00e0 connect\u00e9 HubSpot \u00e0 SAP, Sage, Cegid et Odoo." },
  { q: "Pourquoi Ceres pour Operations Hub ?", a: "Operations Hub est le hub le plus technique de HubSpot. Custom coded actions, webhooks, datasets, API : \u00e7a demande des comp\u00e9tences RevOps ET d\u00e9veloppement. On a les deux. On a d\u00e9ploy\u00e9 Operations Hub pour des scale-ups avec 15+ outils connect\u00e9s et des flux de donn\u00e9es complexes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "D\u00e9ploiement HubSpot Operations Hub",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Configuration et d\u00e9ploiement de HubSpot Operations Hub. Data sync, data quality, programmable automation, datasets, custom code.",
      serviceType: "HubSpot Operations Hub Consulting",
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

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function HubSpotOperationsHubPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>HubSpot Operations Hub</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            HubSpot Operations Hub
          </h1>
          <p className="text-[17px] text-[#666] max-w-[580px] mx-auto leading-[1.7] mb-4">
            Le hub qui synchronise vos donn\u00e9es, automatise la qualit\u00e9 et donne au RevOps les outils pour orchestrer l&apos;ensemble de la stack. Data sync, data quality, programmable automation et datasets.
          </p>
          <p className="text-[13px] text-[#999] max-w-[500px] mx-auto mb-8">
            Operations Hub est le hub le plus sous-estim\u00e9 de HubSpot. Et pourtant, c&apos;est celui qui fait la diff\u00e9rence entre un CRM bien configur\u00e9 et un CRM qui fonctionne r\u00e9ellement.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
            <span className="w-2 h-2 rounded-sm bg-[#6C5CE7]" />Discuter de mon projet
          </Link>
        </section>
        <Connector />

        {/* ── C'est quoi Ops Hub ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pr\u00e9sentation</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              C&apos;est quoi HubSpot Operations Hub ?
            </h2>
            <p className="text-[15px] text-[#666] max-w-[600px] mx-auto leading-[1.7]">
              Operations Hub est le hub d\u00e9di\u00e9 aux \u00e9quipes RevOps et Ops. Il r\u00e9sout les trois probl\u00e8mes fondamentaux de toute stack technologique : la synchronisation des donn\u00e9es, la qualit\u00e9 des donn\u00e9es et l&apos;automatisation avanc\u00e9e.
            </p>
          </div>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-white">
            <p className="text-[15px] text-[#CCC] leading-[1.8] mb-4">
              Chaque entreprise utilise en moyenne 12 outils SaaS. Le probl\u00e8me : ces outils ne partagent pas les m\u00eames donn\u00e9es. Votre ERP a un nom de client diff\u00e9rent de votre CRM, votre outil de facturation ne sait pas qu&apos;un deal est sign\u00e9, et votre support ne voit pas l&apos;historique commercial. Operations Hub r\u00e9sout ce chaos en devenant le hub central de synchronisation.
            </p>
            <p className="text-[15px] text-[#CCC] leading-[1.8] mb-4">
              Au-del\u00e0 de la sync, Operations Hub apporte des automatisations que les autres hubs ne peuvent pas offrir. Les custom coded actions ex\u00e9cutent du code JavaScript ou Python directement dans les workflows HubSpot. Vous pouvez appeler des API externes, faire des calculs complexes, transformer des donn\u00e9es, le tout sans outil tiers.
            </p>
            <p className="text-[15px] text-[#CCC] leading-[1.8]">
              Operations Hub existe en trois plans (Starter, Professional, Enterprise). Le Starter suffit pour la data sync basique. Le Professional d\u00e9bloque la data quality automation et les custom coded actions. L&apos;Enterprise ajoute les datasets avanc\u00e9s, les sandboxes et le Snowflake data share.
            </p>
          </div>
        </section>
        <Connector />

        {/* ── Fonctionnalites ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Fonctionnalit\u00e9s</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Les 5 fonctionnalit\u00e9s cl\u00e9s d&apos;Operations Hub
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Chaque fonctionnalit\u00e9 r\u00e9pond \u00e0 un besoin concret des \u00e9quipes Ops et RevOps.
            </p>
          </div>
          <div className="grid gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: f.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{f.title}</h3>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.7]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── Plans et prix ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Tarifs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Plans et prix d&apos;Operations Hub
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Trois plans avec des fonctionnalit\u00e9s progressives. Le choix d\u00e9pend de la complexit\u00e9 de votre stack et de vos besoins en automatisation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl border p-5 md:p-6 ${p.best ? "border-[#4B5EFC] bg-[#FAFAFF]" : "border-[#E8E8E8] bg-white"} shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-sm" style={{ background: p.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{p.name}</h3>
                  {p.best && <span className="text-[10px] font-medium text-[#4B5EFC] border border-[#4B5EFC] rounded px-1.5 py-0.5">Populaire</span>}
                </div>
                <p className="text-[20px] font-semibold text-[#111] mb-4">{p.price}</p>
                <ul className="space-y-2">
                  {p.features.map((feat) => (
                    <li key={feat} className="text-[13px] text-[#666] flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#CCC] mt-2 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#999] text-center mt-4">
            Prix HubSpot mars 2025. Engagement annuel. Operations Hub est souvent bundle avec d&apos;autres hubs pour un meilleur tarif.
          </p>
        </section>
        <Connector />

        {/* ── Pourquoi essentiel pour le RevOps ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>RevOps</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Pourquoi Operations Hub est essentiel pour le RevOps
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Pas de RevOps sans donn\u00e9es fiables. Operations Hub est le socle technique qui rend le RevOps possible.
            </p>
          </div>
          <div className="grid gap-4">
            {revopsRaisons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: r.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{r.title}</h3>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.7]">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── Notre deploiement ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>D\u00e9ploiement</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Comment on d\u00e9ploie Operations Hub
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Un d\u00e9ploiement structur\u00e9 en 6 \u00e9tapes. De l&apos;audit qualit\u00e9 au reporting RevOps unifi\u00e9, comptez 4 \u00e0 8 semaines.
            </p>
          </div>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="space-y-6">
              {deploiement.map((d) => (
                <div key={d.step}>
                  <h3 className="text-[15px] font-semibold text-white mb-1">{d.step}</h3>
                  <p className="text-[14px] text-[#999] leading-[1.7]">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── FAQ ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>FAQ</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Questions fr\u00e9quentes sur Operations Hub
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((f) => (
              <div key={f.q} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <h3 className="text-[15px] font-semibold text-[#111] mb-2">{f.q}</h3>
                <p className="text-[14px] text-[#666] leading-[1.7]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── CTA ── */}
        <section className="text-center">
          <div className="rounded-2xl bg-[#111] p-8 md:p-14">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-4">
              Pr\u00eat \u00e0 structurer vos donn\u00e9es ?
            </h2>
            <p className="text-[15px] text-[#999] max-w-[480px] mx-auto leading-[1.7] mb-6">
              On audite votre qualit\u00e9 de donn\u00e9es, on cartographie vos flux et on d\u00e9ploie Operations Hub pour que votre RevOps repose sur des fondations solides. L&apos;appel de cadrage est gratuit.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[13px] text-[#111] font-medium hover:bg-[#F5F5F5] transition-all">
              <span className="w-2 h-2 rounded-sm bg-[#6C5CE7]" />R\u00e9server un appel
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
