"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const features = [
  {
    title: "Email marketing",
    desc: "Cr\u00e9ation d\u2019emails par drag-and-drop, personnalisation dynamique avec des tokens de personnalisation, A/B testing natif, d\u00e9livrabilit\u00e9 surveill\u00e9e. Vous segmentez vos listes par comportement, lifecycle stage ou propri\u00e9t\u00e9 custom, et vous envoyez le bon message au bon moment. Les rapports d\u2019engagement (ouverture, clic, d\u00e9sinscription) se mettent \u00e0 jour en temps r\u00e9el.",
    color: "#FF7A59",
  },
  {
    title: "Formulaires et pop-ups",
    desc: "Formulaires embarqu\u00e9s, pop-ups contextuels, formulaires multi-\u00e9tapes. Chaque soumission alimente directement le CRM : cr\u00e9ation de contact, assignation au propri\u00e9taire, d\u00e9clenchement de workflow. Le progressive profiling \u00e9vite de redemander les m\u00eames informations et augmente le taux de conversion de vos landing pages.",
    color: "#4B5EFC",
  },
  {
    title: "Landing pages",
    desc: "Constructeur de landing pages sans code avec templates responsives. Smart content pour adapter le contenu au visiteur (industrie, lifecycle stage, source). Chaque page int\u00e8gre un formulaire HubSpot natif et un suivi de conversion automatique. Vous publiez, testez et it\u00e9rez sans d\u00e9pendre de votre \u00e9quipe technique.",
    color: "#6D00CC",
  },
  {
    title: "Workflows d\u2019automatisation",
    desc: "Le moteur d\u2019automatisation de Marketing Hub permet de cr\u00e9er des s\u00e9quences de nurturing multi-canaux : emails, SMS, t\u00e2ches internes, d\u00e9lais, branchements conditionnels. Un lead t\u00e9l\u00e9charge un livre blanc ? Il entre dans un workflow qui envoie 5 emails sur 3 semaines, puis notifie le commercial si le lead scoring d\u00e9passe un seuil.",
    color: "#22C55E",
  },
  {
    title: "Reporting et attribution",
    desc: "Tableaux de bord marketing avec attribution multi-touch : premier contact, dernier contact, lin\u00e9aire, en U, en W. Vous voyez exactement quels canaux g\u00e9n\u00e8rent des MQL, des opportunit\u00e9s et du revenu. Les rapports custom croisent donn\u00e9es marketing et CRM pour un ROI pr\u00e9cis par campagne.",
    color: "#6C5CE7",
  },
  {
    title: "SEO et content strategy",
    desc: "L\u2019outil SEO int\u00e9gr\u00e9 analyse vos pages, sugg\u00e8re des optimisations on-page et organise votre strat\u00e9gie de contenu en topic clusters. Vous suivez vos positions, identifiez les opportunit\u00e9s de mots-cl\u00e9s et mesurez le trafic organique directement dans HubSpot, sans outil tiers.",
    color: "#D4A27F",
  },
  {
    title: "Social media",
    desc: "Publication et planification sur LinkedIn, Facebook, Instagram et X depuis HubSpot. Monitoring des mentions, analyse de performance par r\u00e9seau. Les interactions sociales alimentent la timeline du contact dans le CRM, ce qui donne \u00e0 vos commerciaux un contexte suppl\u00e9mentaire avant chaque appel.",
    color: "#FF5C35",
  },
  {
    title: "Ads management",
    desc: "Gestion de vos campagnes Google Ads, Facebook Ads et LinkedIn Ads depuis HubSpot. Cr\u00e9ation d\u2019audiences bas\u00e9es sur vos listes CRM, retargeting automatis\u00e9 et attribution des conversions dans le CRM. Vous voyez le co\u00fbt par lead et le ROI r\u00e9el de chaque campagne paid, pas juste les clics.",
    color: "#00BDA5",
  },
];

const plans = [
  {
    name: "Starter",
    price: "20\u20AC/mois",
    contacts: "1 000 contacts marketing",
    features: [
      "Email marketing basique",
      "Formulaires natifs",
      "Landing pages (nombre limit\u00e9)",
      "Reporting standard",
      "Ads management (2 comptes)",
      "Suppression du branding HubSpot",
    ],
    color: "#FF7A59",
    best: false,
  },
  {
    name: "Professional",
    price: "\u00e0 partir de 880\u20AC/mois",
    contacts: "2 000 contacts marketing",
    features: [
      "Tout Starter +",
      "Workflows d\u2019automatisation",
      "Smart content",
      "A/B testing",
      "Attribution multi-touch",
      "SEO & content strategy",
      "Social media",
      "Rapports custom",
      "Scoring pr\u00e9dictif (Breeze)",
    ],
    color: "#4B5EFC",
    best: true,
  },
  {
    name: "Enterprise",
    price: "\u00e0 partir de 3 300\u20AC/mois",
    contacts: "10 000 contacts marketing",
    features: [
      "Tout Professional +",
      "Custom objects",
      "Adaptive testing",
      "Multi-touch revenue attribution",
      "Custom behavioral events",
      "Hierarchical teams",
      "Partitionnement",
      "Sandboxes",
    ],
    color: "#6D00CC",
    best: false,
  },
];

const pourQui = [
  { role: "Responsable marketing B2B", desc: "Vous g\u00e9rez des cycles de vente longs et vous avez besoin de nurturing automatis\u00e9, de scoring et d\u2019attribution pour prouver le ROI marketing \u00e0 votre direction.", color: "#FF7A59" },
  { role: "CMO / VP Marketing", desc: "Vous voulez une plateforme unifi\u00e9e qui aligne marketing et sales sur les m\u00eames donn\u00e9es, avec des dashboards de performance en temps r\u00e9el et une vision claire du funnel.", color: "#4B5EFC" },
  { role: "Growth / Demand Gen", desc: "Vous cherchez un outil qui centralise emails, landing pages, ads et SEO dans une seule plateforme, avec des workflows puissants et un CRM int\u00e9gr\u00e9 pour qualifier vos leads.", color: "#6D00CC" },
  { role: "Startup en scale", desc: "Vous passez de 10 \u00e0 50 personnes, votre stack marketing est fragment\u00e9e et vous avez besoin d\u2019un outil qui grandit avec vous sans exploser le budget.", color: "#22C55E" },
];

const deploiement = [
  { step: "1. Audit de votre stack actuelle", desc: "On analyse vos outils, vos flux de donn\u00e9es, vos process marketing et vos objectifs. On identifie les gaps et les quick wins." },
  { step: "2. Cadrage et architecture", desc: "D\u00e9finition des lifecycle stages, du scoring, des workflows cibles, de la strat\u00e9gie d\u2019attribution. Tout est document\u00e9 avant de toucher \u00e0 HubSpot." },
  { step: "3. Configuration Marketing Hub", desc: "Setup du domaine, DNS, templates email, formulaires, landing pages, listes, workflows de nurturing, int\u00e9grations ads et social." },
  { step: "4. Migration et import", desc: "Import de vos contacts, historique d\u2019engagement, listes de segmentation. D\u00e9doublonnage et enrichissement des donn\u00e9es." },
  { step: "5. Formation \u00e9quipe marketing", desc: "Formation hands-on sur VOS workflows, VOS templates, VOS dashboards. Pas un tuto g\u00e9n\u00e9rique, une formation sur votre instance." },
  { step: "6. Go-live et optimisation", desc: "Lancement en production, monitoring des 30 premiers jours, ajustements workflows et scoring, support continu." },
];

const faqItems = [
  { q: "Quelle est la diff\u00e9rence entre contacts marketing et contacts non-marketing dans HubSpot ?", a: "Les contacts marketing sont ceux \u00e0 qui vous envoyez des emails marketing (newsletters, nurturing, campagnes). Les contacts non-marketing (leads froids, anciens clients) sont stock\u00e9s gratuitement dans le CRM sans compter dans votre facturation Marketing Hub. Vous pouvez basculer un contact de non-marketing \u00e0 marketing \u00e0 tout moment." },
  { q: "Marketing Hub remplace-t-il Mailchimp ou ActiveCampaign ?", a: "Oui. Marketing Hub int\u00e8gre l\u2019email marketing, les workflows d\u2019automatisation, le scoring et le CRM dans une seule plateforme. Vous \u00e9liminez les int\u00e9grations entre outils et vous avez une vue unifi\u00e9e du parcours client. La plupart de nos clients migrent depuis Mailchimp, Sendinblue ou ActiveCampaign." },
  { q: "Peut-on utiliser Marketing Hub sans Sales Hub ?", a: "Oui, Marketing Hub fonctionne de mani\u00e8re autonome avec le CRM gratuit de HubSpot. Cependant, la vraie puissance appara\u00eet quand Marketing Hub et Sales Hub travaillent ensemble : le lead scoring alimente les s\u00e9quences commerciales, les workflows notifient les commerciaux, et le reporting couvre tout le funnel." },
  { q: "Combien de temps pour d\u00e9ployer Marketing Hub ?", a: "Comptez 3 \u00e0 6 semaines pour un d\u00e9ploiement complet incluant configuration, migration de donn\u00e9es, cr\u00e9ation des premiers workflows et formation. Un setup basique (emails + formulaires) peut \u00eatre op\u00e9rationnel en une semaine." },
  { q: "L\u2019IA est-elle incluse dans Marketing Hub ?", a: "Oui, HubSpot a int\u00e9gr\u00e9 Breeze (son IA native) dans Marketing Hub. Vous b\u00e9n\u00e9ficiez de la g\u00e9n\u00e9ration de contenu pour les emails, du scoring pr\u00e9dictif, des recommandations SEO automatis\u00e9es et de l\u2019optimisation des heures d\u2019envoi. Les fonctionnalit\u00e9s IA varient selon le plan." },
  { q: "Marketing Hub est-il conforme RGPD ?", a: "Oui. HubSpot propose des fonctionnalit\u00e9s RGPD natives : banni\u00e8re de cookies, base l\u00e9gale par contact, double opt-in, gestion du consentement, suppression automatis\u00e9e. On configure tout cela lors du d\u00e9ploiement pour que votre instance soit conforme d\u00e8s le jour 1." },
  { q: "Peut-on connecter Marketing Hub \u00e0 notre CMS existant ?", a: "Absolument. Marketing Hub s\u2019int\u00e8gre avec WordPress, Webflow, et tout CMS via le tracking code HubSpot. Les formulaires s\u2019embarquent en une ligne de code. Vous n\u2019\u00eates pas oblig\u00e9 d\u2019utiliser le CMS Hub de HubSpot." },
  { q: "Quel est le co\u00fbt r\u00e9el de Marketing Hub une fois tout inclus ?", a: "Le prix de base d\u00e9pend du plan et du nombre de contacts marketing. Ajoutez l\u2019onboarding HubSpot obligatoire (3 000\u20AC pour Pro, 6 000\u20AC pour Enterprise) ou passez par un partenaire comme Ceres qui inclut l\u2019onboarding dans le d\u00e9ploiement. Les add-ons (contacts suppl\u00e9mentaires, API) sont en sus." },
  { q: "Pourquoi passer par Ceres plut\u00f4t que de configurer soi-m\u00eame ?", a: "Vous pouvez configurer Marketing Hub seul. Mais un d\u00e9ploiement mal structur\u00e9 (scoring approximatif, workflows en spaghetti, attribution mal configur\u00e9e) co\u00fbte cher \u00e0 corriger apr\u00e8s 6 mois. On apporte l\u2019exp\u00e9rience de 100+ d\u00e9ploiements pour \u00e9viter ces erreurs." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "D\u00e9ploiement HubSpot Marketing Hub",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Configuration, d\u00e9ploiement et optimisation de HubSpot Marketing Hub. Emails, workflows, landing pages, SEO, attribution multi-touch.",
      serviceType: "HubSpot Marketing Hub Consulting",
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

export default function HubSpotMarketingHubPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>HubSpot Marketing Hub</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            HubSpot Marketing Hub
          </h1>
          <p className="text-[17px] text-[#666] max-w-[580px] mx-auto leading-[1.7] mb-4">
            La plateforme marketing tout-en-un de HubSpot. Emails, workflows d&apos;automatisation, landing pages, SEO, social, ads et reporting avec attribution multi-touch. Tout est connect\u00e9 au CRM.
          </p>
          <p className="text-[13px] text-[#999] max-w-[500px] mx-auto mb-8">
            On d\u00e9ploie Marketing Hub depuis 2019. Plus de 100 instances configur\u00e9es, des startups aux ETI. On conna\u00eet chaque fonctionnalit\u00e9, chaque limite, chaque astuce.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
            <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />Discuter de mon projet
          </Link>
        </section>
        <Connector />

        {/* ── C'est quoi Marketing Hub ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pr\u00e9sentation</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              C&apos;est quoi HubSpot Marketing Hub ?
            </h2>
            <p className="text-[15px] text-[#666] max-w-[600px] mx-auto leading-[1.7]">
              Marketing Hub est le hub marketing de la plateforme HubSpot. Il centralise toutes vos op\u00e9rations marketing dans un seul outil connect\u00e9 au CRM : acquisition, nurturing, conversion et reporting.
            </p>
          </div>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-white">
            <p className="text-[15px] text-[#CCC] leading-[1.8] mb-4">
              Contrairement aux outils marketing standalone (Mailchimp, ActiveCampaign, Brevo), Marketing Hub est nativement connect\u00e9 au CRM HubSpot. Chaque email ouvert, chaque formulaire soumis, chaque page visit\u00e9e enrichit la fiche contact en temps r\u00e9el. Vos commerciaux voient l&apos;historique marketing complet avant chaque appel.
            </p>
            <p className="text-[15px] text-[#CCC] leading-[1.8] mb-4">
              Le mod\u00e8le de tarification repose sur les contacts marketing : seuls les contacts \u00e0 qui vous envoyez des emails marketing comptent dans votre facturation. Les milliers de contacts non-marketing (prospects froids, anciens clients, partenaires) sont stock\u00e9s gratuitement dans le CRM.
            </p>
            <p className="text-[15px] text-[#CCC] leading-[1.8]">
              Marketing Hub se d\u00e9cline en trois plans (Starter, Professional, Enterprise) avec des fonctionnalit\u00e9s progressives. Le choix du plan d\u00e9pend de votre volume de contacts, de votre besoin en automatisation et de la complexit\u00e9 de votre attribution marketing.
            </p>
          </div>
        </section>
        <Connector />

        {/* ── Fonctionnalites ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Fonctionnalit\u00e9s</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Les 8 fonctionnalit\u00e9s cl\u00e9s de Marketing Hub
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Tour d&apos;horizon complet des fonctionnalit\u00e9s qui font de Marketing Hub la plateforme marketing la plus utilis\u00e9e en B2B.
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
              Plans et prix de Marketing Hub
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Trois plans pour trois niveaux de maturit\u00e9 marketing. Les prix ci-dessous sont indicatifs et peuvent varier selon le nombre de contacts marketing.
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
                <p className="text-[12px] text-[#999] mb-4">{p.contacts}</p>
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
            Prix HubSpot mars 2025. Engagement annuel. Contacts marketing suppl\u00e9mentaires factur\u00e9s en sus. HubSpot impose un onboarding obligatoire pour les plans Pro et Enterprise.
          </p>
        </section>
        <Connector />

        {/* ── Pour qui ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pour qui</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Marketing Hub est fait pour vous si...
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
              Comment on d\u00e9ploie Marketing Hub
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Un processus en 6 \u00e9tapes rod\u00e9 sur 100+ d\u00e9ploiements. De l&apos;audit initial au go-live, comptez 3 \u00e0 6 semaines.
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
              Questions fr\u00e9quentes sur Marketing Hub
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
              Pr\u00eat \u00e0 d\u00e9ployer Marketing Hub ?
            </h2>
            <p className="text-[15px] text-[#999] max-w-[480px] mx-auto leading-[1.7] mb-6">
              On audite votre stack actuelle, on identifie les quick wins et on vous propose un plan de d\u00e9ploiement adapt\u00e9 \u00e0 vos objectifs. L&apos;appel de cadrage est gratuit.
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
