"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const features = [
  {
    title: "Pipeline de deals",
    desc: "Le pipeline visuel de Sales Hub est le centre n\u00e9vralgique de votre \u00e9quipe commerciale. Cr\u00e9ez autant de pipelines que n\u00e9cessaire (new business, upsell, partenaires), personnalisez les \u00e9tapes avec des propri\u00e9t\u00e9s obligatoires, et d\u00e9finissez des probabilit\u00e9s de closing par \u00e9tape. Les deals avancent par drag-and-drop et chaque mouvement est historis\u00e9. Les managers voient en un coup d\u2019\u0153il le pipeline total, par rep, par segment.",
    color: "#FF7A59",
  },
  {
    title: "S\u00e9quences de prospection",
    desc: "Les s\u00e9quences automatisent vos cadences de prospection : enchainement d\u2019emails, appels, t\u00e2ches LinkedIn, avec des d\u00e9lais personnalis\u00e9s entre chaque \u00e9tape. Un prospect r\u00e9pond ? La s\u00e9quence s\u2019arr\u00eate automatiquement. Vous cr\u00e9ez des templates partag\u00e9s, A/B testez vos objets, et suivez les taux d\u2019ouverture et de r\u00e9ponse par s\u00e9quence et par commercial.",
    color: "#4B5EFC",
  },
  {
    title: "Planification de meetings",
    desc: "Le lien de meeting HubSpot \u00e9limine les allers-retours par email pour trouver un cr\u00e9neau. Synchronisation native avec Google Calendar et Outlook, configuration par dur\u00e9e (15, 30, 60 min), round-robin pour distribuer les rendez-vous entre commerciaux. Le meeting cr\u00e9\u00e9 alimente directement la fiche contact dans le CRM avec la date, l\u2019heure et le lien visio.",
    color: "#6D00CC",
  },
  {
    title: "Devis et e-signatures",
    desc: "Cr\u00e9ez des devis professionnels directement depuis un deal. Les produits, prix et remises sont calcul\u00e9s automatiquement. Le prospect re\u00e7oit un lien de devis brandé, signe \u00e9lectroniquement et peut m\u00eame payer en ligne (int\u00e9gration Stripe). Le deal passe automatiquement \u00e0 l\u2019\u00e9tape suivante quand le devis est sign\u00e9.",
    color: "#22C55E",
  },
  {
    title: "Playbooks",
    desc: "Les playbooks guident vos commerciaux pendant leurs appels. Scripts de d\u00e9couverte, questions de qualification (BANT, MEDDIC, SPICED), objections fr\u00e9quentes et r\u00e9ponses recommand\u00e9es. Les notes prises dans le playbook sont enregistr\u00e9es dans la fiche contact. Un outil essentiel pour onboarder les nouveaux commerciaux et standardiser votre process de vente.",
    color: "#6C5CE7",
  },
  {
    title: "Forecasting",
    desc: "Le module de forecasting agr\u00e8ge les pr\u00e9visions de vente par pipeline, par commercial, par p\u00e9riode. Chaque rep soumet sa pr\u00e9vision, le manager ajuste, et la direction a une vue consolid\u00e9e. Les cat\u00e9gories (commit, best case, pipeline) sont personnalisables. Le forecasting IA de HubSpot (Breeze) ajoute une pr\u00e9diction bas\u00e9e sur l\u2019historique pour challenger les pr\u00e9visions humaines.",
    color: "#D4A27F",
  },
];

const plans = [
  {
    name: "Starter",
    price: "20\u20AC/mois",
    users: "2 utilisateurs inclus",
    features: [
      "Pipeline de deals",
      "Devis basiques",
      "Planification de meetings",
      "Suivi des emails",
      "Chat en direct",
      "Suppression du branding HubSpot",
    ],
    color: "#FF7A59",
    best: false,
  },
  {
    name: "Professional",
    price: "\u00e0 partir de 100\u20AC/mois/utilisateur",
    users: "5 utilisateurs inclus",
    features: [
      "Tout Starter +",
      "S\u00e9quences de prospection",
      "Playbooks",
      "Forecasting",
      "Devis avec e-signatures",
      "Automatisation des ventes",
      "Rapports custom",
      "ABM (Account-Based Marketing)",
      "Scoring pr\u00e9dictif (Breeze)",
    ],
    color: "#4B5EFC",
    best: true,
  },
  {
    name: "Enterprise",
    price: "\u00e0 partir de 150\u20AC/mois/utilisateur",
    users: "10 utilisateurs inclus",
    features: [
      "Tout Professional +",
      "Custom objects",
      "Predictive lead scoring",
      "Conversation intelligence",
      "Recurring revenue tracking",
      "Hierarchical teams",
      "Sandboxes",
      "Admin avancée",
    ],
    color: "#6D00CC",
    best: false,
  },
];

const pourQui = [
  { role: "Directeur commercial / VP Sales", desc: "Vous avez besoin de visibilit\u00e9 sur le pipeline, de forecasting fiable et de dashboards par rep. Sales Hub vous donne tout cela sans d\u00e9pendre d\u2019un admin Salesforce.", color: "#FF7A59" },
  { role: "Sales Manager", desc: "Vous voulez standardiser le process de vente de votre \u00e9quipe, onboarder les nouveaux rapidement et suivre l\u2019activit\u00e9 commerciale au quotidien. Playbooks, s\u00e9quences et reporting sont vos outils cl\u00e9s.", color: "#4B5EFC" },
  { role: "Account Executive / SDR", desc: "Vous passez trop de temps sur des t\u00e2ches administratives (saisie CRM, relances manuelles, cr\u00e9ation de devis). Sales Hub automatise tout cela pour que vous passiez plus de temps \u00e0 vendre.", color: "#6D00CC" },
  { role: "CEO de scale-up", desc: "Vous avez recrut\u00e9 vos 5 premiers commerciaux et vous avez besoin d\u2019un CRM qui structure la vente sans la complexit\u00e9 de Salesforce. Sales Hub grandit avec vous, de 2 \u00e0 200 utilisateurs.", color: "#22C55E" },
];

const deploiement = [
  { step: "1. Audit du process de vente actuel", desc: "On cartographie votre cycle de vente, vos \u00e9tapes, vos crit\u00e8res de qualification, vos outils actuels et vos points de friction. On identifie ce qui doit changer et ce qu\u2019on garde." },
  { step: "2. Architecture du pipeline", desc: "D\u00e9finition des pipelines (new business, upsell, renouvellement), des \u00e9tapes, des propri\u00e9t\u00e9s obligatoires par \u00e9tape, des probabilit\u00e9s et des crit\u00e8res de passage. Document\u00e9 et valid\u00e9 avant configuration." },
  { step: "3. Configuration Sales Hub", desc: "Setup des pipelines, s\u00e9quences de prospection, templates email, playbooks, liens de meeting, devis, automatisations et int\u00e9grations (Slack, calendrier, signature \u00e9lectronique)." },
  { step: "4. Import et migration", desc: "Import de vos contacts, entreprises, deals. Si vous venez de Salesforce ou Pipedrive, on migre l\u2019historique complet : notes, activit\u00e9s, pi\u00e8ces jointes, montants." },
  { step: "5. Formation \u00e9quipe commerciale", desc: "Formation hands-on pour les SDR, AE et managers. Sur VOS pipelines, VOS s\u00e9quences, VOS playbooks. Exercices pratiques avec de vrais deals." },
  { step: "6. Go-live et coaching", desc: "Lancement en production, suivi de l\u2019adoption sur 30 jours. Coaching individuel si n\u00e9cessaire. Ajustements pipeline et workflows en temps r\u00e9el." },
];

const faqItems = [
  { q: "Sales Hub remplace-t-il Salesforce ?", a: "Pour 90% des PME et scale-ups, oui. Sales Hub couvre les pipelines, s\u00e9quences, forecasting, devis et reporting. La diff\u00e9rence principale : HubSpot est plus simple \u00e0 utiliser et \u00e0 administrer. Salesforce reste pertinent pour les organisations tr\u00e8s complexes avec des process de vente multi-entit\u00e9s et des volumes massifs." },
  { q: "Combien co\u00fbte Sales Hub pour une \u00e9quipe de 10 commerciaux ?", a: "En plan Professional, comptez environ 1 000\u20AC/mois pour 10 utilisateurs (100\u20AC/mois/utilisateur). Ce prix inclut s\u00e9quences, playbooks, forecasting, devis avec e-signatures et rapports custom. Pas de co\u00fbt cach\u00e9 pour les int\u00e9grations natives." },
  { q: "Peut-on utiliser Sales Hub sans Marketing Hub ?", a: "Oui, Sales Hub fonctionne de mani\u00e8re autonome avec le CRM gratuit de HubSpot. Vos commerciaux g\u00e8rent leurs deals, s\u00e9quences et forecasting ind\u00e9pendamment. L\u2019ajout de Marketing Hub est recommand\u00e9 quand vous voulez aligner le marketing et les ventes sur le m\u00eame funnel." },
  { q: "Les s\u00e9quences HubSpot remplacent-elles Lemlist ou Apollo ?", a: "Pour de la prospection structur\u00e9e avec 100-500 prospects par mois, oui. Les s\u00e9quences HubSpot g\u00e8rent emails, appels et t\u00e2ches LinkedIn. Pour de la prospection \u00e0 tr\u00e8s haut volume (5 000+ contacts), un outil sp\u00e9cialis\u00e9 comme Lemlist ou Apollo reste plus adapt\u00e9, et on le connecte \u00e0 HubSpot." },
  { q: "Le forecasting HubSpot est-il fiable ?", a: "Le forecasting HubSpot combine les pr\u00e9visions manuelles des reps (commit, best case, pipeline) et un scoring IA pr\u00e9dictif bas\u00e9 sur l\u2019historique. La fiabilit\u00e9 d\u00e9pend de la discipline de votre \u00e9quipe : si les deals sont \u00e0 jour avec des montants et des dates de closing r\u00e9alistes, le forecast est pr\u00e9cis." },
  { q: "Combien de temps pour migrer de Salesforce \u00e0 Sales Hub ?", a: "Comptez 4 \u00e0 8 semaines pour une migration compl\u00e8te incluant contacts, entreprises, deals, historique, reconstruction des workflows et formation. On inclut une p\u00e9riode de double-run pour z\u00e9ro interruption de l\u2019activit\u00e9 commerciale." },
  { q: "Sales Hub g\u00e8re-t-il les devis et la facturation ?", a: "Sales Hub g\u00e8re les devis (cr\u00e9ation, personnalisation, e-signature, paiement en ligne via Stripe). Pour la facturation compl\u00e8te, HubSpot a lanc\u00e9 Commerce Hub qui g\u00e8re factures, abonnements et paiements r\u00e9currents. On le compl\u00e8te souvent avec Pennylane ou Sellsy pour la comptabilit\u00e9." },
  { q: "Comment mesurer le ROI de Sales Hub ?", a: "Les m\u00e9triques cl\u00e9s : temps moyen de closing (baisse de 20-30% en moyenne), taux de conversion par \u00e9tape, activit\u00e9 commerciale par rep, adoption CRM (taux de remplissage des deals). On configure ces dashboards d\u00e8s le d\u00e9ploiement pour que vous mesuriez le ROI d\u00e8s le premier mois." },
  { q: "Pourquoi passer par Ceres pour Sales Hub ?", a: "On a d\u00e9ploy\u00e9 Sales Hub pour plus de 80 \u00e9quipes commerciales. On conna\u00eet les pi\u00e8ges : pipelines mal structur\u00e9s, s\u00e9quences qui finissent en spam, playbooks que personne n\u2019utilise. On d\u00e9ploie un Sales Hub qui est r\u00e9ellement adopt\u00e9 par vos commerciaux, pas un CRM vide apr\u00e8s 3 mois." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "D\u00e9ploiement HubSpot Sales Hub",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Configuration, d\u00e9ploiement et optimisation de HubSpot Sales Hub. Pipeline, s\u00e9quences, forecasting, playbooks, devis.",
      serviceType: "HubSpot Sales Hub Consulting",
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

export default function HubSpotSalesHubPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>HubSpot Sales Hub</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            HubSpot Sales Hub
          </h1>
          <p className="text-[17px] text-[#666] max-w-[580px] mx-auto leading-[1.7] mb-4">
            Le CRM commercial de HubSpot. Pipeline visuel, s\u00e9quences de prospection, playbooks, devis avec e-signature et forecasting. Tout ce dont votre \u00e9quipe commerciale a besoin pour vendre plus efficacement.
          </p>
          <p className="text-[13px] text-[#999] max-w-[500px] mx-auto mb-8">
            On d\u00e9ploie Sales Hub pour des \u00e9quipes de 3 \u00e0 150 commerciaux. Startups, scale-ups, ETI. Le CRM qui est r\u00e9ellement utilis\u00e9 par vos commerciaux.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
            <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />Discuter de mon projet
          </Link>
        </section>
        <Connector />

        {/* ── C'est quoi Sales Hub ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pr\u00e9sentation</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              C&apos;est quoi HubSpot Sales Hub ?
            </h2>
            <p className="text-[15px] text-[#666] max-w-[600px] mx-auto leading-[1.7]">
              Sales Hub est le hub commercial de la plateforme HubSpot. Il couvre l&apos;int\u00e9gralit\u00e9 du cycle de vente, de la prospection \u00e0 la signature du contrat.
            </p>
          </div>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-white">
            <p className="text-[15px] text-[#CCC] leading-[1.8] mb-4">
              Sales Hub n&apos;est pas un CRM de plus. C&apos;est un outil pens\u00e9 pour les commerciaux, pas contre eux. L&apos;interface est intuitive, les actions courantes (log un appel, envoyer un email, avancer un deal) prennent 2 clics, et l&apos;IA Breeze automatise les t\u00e2ches r\u00e9p\u00e9titives.
            </p>
            <p className="text-[15px] text-[#CCC] leading-[1.8] mb-4">
              L&apos;\u00e9cosyst\u00e8me HubSpot est le vrai diff\u00e9renciateur : Sales Hub partage les m\u00eames donn\u00e9es que Marketing Hub, Service Hub et Operations Hub. Quand un lead est qualifi\u00e9 par le marketing, le commercial le voit imm\u00e9diatement dans son pipeline avec tout l&apos;historique d&apos;engagement. Quand un deal est sign\u00e9, le CS le voit sans ressaisie.
            </p>
            <p className="text-[15px] text-[#CCC] leading-[1.8]">
              Le probl\u00e8me num\u00e9ro 1 des CRM, c&apos;est l&apos;adoption. Salesforce tourne \u00e0 40-50% d&apos;adoption dans la plupart des PME. HubSpot Sales Hub atteint r\u00e9guli\u00e8rement 90%+ parce que l&apos;outil est con\u00e7u pour simplifier le quotidien du commercial, pas pour cr\u00e9er du travail administratif suppl\u00e9mentaire.
            </p>
          </div>
        </section>
        <Connector />

        {/* ── Fonctionnalites ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Fonctionnalit\u00e9s</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Les 6 fonctionnalit\u00e9s cl\u00e9s de Sales Hub
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Chaque fonctionnalit\u00e9 est pens\u00e9e pour r\u00e9duire le temps administratif et augmenter le temps de vente effectif.
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
              Plans et prix de Sales Hub
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Tarification par utilisateur. Chaque plan ajoute des fonctionnalit\u00e9s cl\u00e9s pour accompagner la croissance de votre \u00e9quipe commerciale.
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
                <p className="text-[20px] font-semibold text-[#111] mb-1">{p.price}</p>
                <p className="text-[12px] text-[#999] mb-4">{p.users}</p>
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
            Prix HubSpot mars 2025. Engagement annuel. Utilisateurs suppl\u00e9mentaires factur\u00e9s en sus. Onboarding obligatoire pour les plans Pro et Enterprise.
          </p>
        </section>
        <Connector />

        {/* ── Pour qui ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pour qui</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Sales Hub est fait pour vous si...
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {pourQui.map((p) => (
              <div key={p.role} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-sm" style={{ background: p.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{p.role}</h3>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.7]">{p.desc}</p>
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
              Comment on d\u00e9ploie Sales Hub
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Un process en 6 \u00e9tapes. De l&apos;audit du process de vente au coaching post-go-live. Comptez 3 \u00e0 6 semaines.
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
              Questions fr\u00e9quentes sur Sales Hub
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
              Pr\u00eat \u00e0 structurer votre process de vente ?
            </h2>
            <p className="text-[15px] text-[#999] max-w-[480px] mx-auto leading-[1.7] mb-6">
              On audite votre process commercial actuel, on identifie les gains rapides et on d\u00e9ploie un Sales Hub adapt\u00e9 \u00e0 votre \u00e9quipe. L&apos;appel de cadrage est gratuit.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[13px] text-[#111] font-medium hover:bg-[#F5F5F5] transition-all">
              <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />R\u00e9server un appel
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
