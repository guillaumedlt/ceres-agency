"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const offers = [
  {
    name: "Diagnostic",
    color: "#FF7A59",
    price: "A partir de 2 500 EUR HT",
    duration: "1 a 2 semaines",
    subtitle: "Le point de depart. On audite votre CRM, vos process et vos donnees.",
    features: [
      "Audit CRM complet (80 points de controle)",
      "Score de maturite RevOps et data quality",
      "Cartographie de la stack et des flux de donnees",
      "Identification des quick wins",
      "Plan d\u2019action a 90 jours",
      "Restitution live 1h avec votre equipe",
    ],
    note: "Le prix varie selon la taille de votre instance CRM et le nombre d\u2019outils connectes.",
    cta: "En savoir plus",
    href: "/audit-revops",
    popular: false,
  },
  {
    name: "Fondation Data",
    color: "#22C55E",
    price: "A partir de 5 000 EUR HT",
    duration: "4 a 6 semaines",
    subtitle: "On nettoie votre base, standardise vos donnees et met en place la gouvernance.",
    features: [
      "Deduplication et nettoyage complet de la base",
      "Standardisation des champs (pays, industrie, source)",
      "Enrichissement IA des fiches contacts et entreprises",
      "Definition des KPIs par silo",
      "Gouvernance automatisee (champs obligatoires, validations)",
      "Formation equipe 0.5 jour",
    ],
    note: "Le prix depend du volume de contacts et du nombre de sources de donnees.",
    cta: "En savoir plus",
    href: "/fondation-data",
    popular: false,
  },
  {
    name: "Deploiement IA",
    color: "#6D00CC",
    price: "A partir de 3 000 EUR HT",
    duration: "2 a 4 semaines par agent",
    subtitle: "On deploie des agents IA connectes a votre CRM, silo par silo.",
    features: [
      "Audit des taches remplacables par silo",
      "Configuration et deploiement du premier agent IA",
      "Connexion au CRM et aux outils existants",
      "Test en conditions reelles, mesure vs baseline",
      "Formation des equipes a l\u2019utilisation",
      "Documentation complete",
    ],
    note: "Chaque agent supplementaire : 2 000 a 4 000 EUR HT selon la complexite.",
    cta: "En savoir plus",
    href: "/agents-ia",
    popular: false,
  },
  {
    name: "Accompagnement",
    color: "#4B5EFC",
    price: "A partir de 2 000 EUR HT / mois",
    duration: "Sans engagement",
    subtitle: "Un expert RevOps & IA integre a votre equipe chaque mois.",
    features: [
      "Expert dedie (meme personne chaque mois)",
      "Channel Slack pour le quotidien",
      "Gestion CRM et data quality continue",
      "Deploiement et optimisation des agents IA",
      "Reporting et dashboards",
      "Iterations hebdomadaires + review mensuelle",
    ],
    note: "Le tarif depend du nombre de jours par mois (2 a 5 jours/semaine).",
    cta: "En savoir plus",
    href: "/revops-part-time",
    popular: true,
  },
];

const packages = [
  {
    name: "Starter",
    desc: "Diagnostic + Fondation Data",
    price: "A partir de 6 500 EUR HT | 6 a 8 semaines",
    detail: "Ideal pour les entreprises qui veulent commencer avec une base propre et un plan clair.",
  },
  {
    name: "Growth",
    desc: "Fondation Data + Deploiement IA (2 agents)",
    price: "A partir de 9 000 EUR HT | 8 a 12 semaines",
    detail: "Pour les entreprises qui veulent aller vite : base propre + premiers agents en production.",
  },
  {
    name: "Scale",
    desc: "Diagnostic + Fondation Data + Deploiement IA + Accompagnement 3 mois",
    price: "Sur devis | 3 a 6 mois",
    detail: "Le programme complet. De la donnee brute a l\u2019intelligence operationnelle.",
  },
];

const inclus = [
  { title: "Pas de frais caches", desc: "Le devis est le prix final. Pas de surprise." },
  { title: "Documentation complete", desc: "Tout est documente. Vous pouvez reprendre la main a tout moment." },
  { title: "Formation equipe", desc: "On forme vos equipes a utiliser ce qu\u2019on a deploye." },
  { title: "Support post-livraison", desc: "30 jours de support inclus apres chaque livraison." },
  { title: "Sans engagement", desc: "L\u2019accompagnement mensuel s\u2019arrete quand vous voulez, preavis 30 jours." },
  { title: "Resultats mesures", desc: "On mesure l\u2019impact a M+1 et M+3. Pas de vanity metrics." },
];

const facteurs = [
  { title: "Taille de la base", desc: "5 000 contacts vs 100 000, ce n\u2019est pas le meme volume de travail.", color: "#FF7A59" },
  { title: "Nombre d\u2019outils", desc: "2 outils connectes vs 8, la complexite change.", color: "#22C55E" },
  { title: "Complexite des process", desc: "Des process simples vs multi-BU internationaux.", color: "#6D00CC" },
  { title: "Nombre d\u2019agents IA", desc: "1 agent vs 5, le deploiement s\u2019adapte.", color: "#4B5EFC" },
];

const faqItems = [
  { q: "Peut-on commencer par un diagnostic avant de s\u2019engager ?", a: "Oui. C\u2019est meme ce qu\u2019on recommande. Le diagnostic est independant, vous repartez avec un plan clair meme si on ne travaille pas ensemble apres." },
  { q: "Le diagnostic est-il deduit si on enchaine sur un projet ?", a: "Oui. Si vous enchainez Diagnostic + Fondation Data ou Deploiement IA dans les 30 jours, le montant du diagnostic est deduit du projet." },
  { q: "Y a-t-il un engagement minimum pour l\u2019accompagnement ?", a: "Non. Preavis de 30 jours, c\u2019est tout. On travaille ensemble tant que ca cree de la valeur." },
  { q: "Peut-on changer de formule en cours de route ?", a: "Oui. Beaucoup de clients commencent par un diagnostic, enchainent sur la Fondation Data, puis passent en accompagnement mensuel." },
  { q: "Acceptez-vous le paiement en plusieurs fois ?", a: "Oui, pour les projets > 5 000 EUR. On peut etaler sur 2-3 mensualites." },
  { q: "Combien coute l\u2019IA elle-meme (hors prestation) ?", a: "L\u2019API IA coute entre 50 et 200 EUR/mois selon le volume. C\u2019est a votre charge mais c\u2019est marginal par rapport au temps gagne." },
  { q: "C\u2019est quoi un \u2018agent IA\u2019 concretement ?", a: "Un programme qui execute une tache automatiquement dans votre CRM. Enrichissement, scoring, reporting, resumes de calls. On le configure, il tourne." },
  { q: "Comment obtenir un devis ?", a: "Un appel de 30 minutes. On cadre le perimetre, le budget, la timeline. Devis envoye sous 48h." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Services RevOps & IA - Tarifs",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Tarifs transparents pour les services RevOps et IA : Diagnostic a partir de 2 500 EUR, Fondation Data a partir de 5 000 EUR, Deploiement IA a partir de 3 000 EUR, Accompagnement a partir de 2 000 EUR/mois.",
      serviceType: "RevOps & IA Consulting",
      areaServed: "FR",
      offers: [
        { "@type": "Offer", name: "Diagnostic RevOps", price: "2500", priceCurrency: "EUR", description: "Audit CRM complet, score de maturite, plan d\u2019action a 90 jours." },
        { "@type": "Offer", name: "Fondation Data", price: "5000", priceCurrency: "EUR", description: "Nettoyage CRM, deduplication, standardisation, enrichissement IA, gouvernance." },
        { "@type": "Offer", name: "Deploiement IA", price: "3000", priceCurrency: "EUR", description: "Deploiement d\u2019agents IA connectes au CRM, silo par silo." },
        { "@type": "Offer", name: "Accompagnement RevOps", price: "2000", priceCurrency: "EUR", unitCode: "MON", description: "Expert RevOps & IA dedie, integration mensuelle." },
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

export default function TarifsPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 text-[12px] text-[#999]" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link></li>
            <li>/</li>
            <li className="text-[#111] font-medium">Tarifs</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Tarifs</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Des tarifs transparents, un accompagnement sur mesure
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Chaque projet est different. Les fourchettes ci-dessous vous donnent un ordre de grandeur. Le devis final est adapte a votre stack, votre base, et vos objectifs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Demander un devis sur mesure
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Les 4 offres ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Nos offres</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Choisissez votre point d&apos;entree</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {offers.map((offer) => (
              <div key={offer.name} className="relative rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="h-[3px]" style={{ backgroundColor: offer.color }} />
                <div className="p-5">
                  {offer.popular && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#4B5EFC]/10 text-[11px] font-medium text-[#4B5EFC] mb-3">Le plus populaire</span>
                  )}
                  <h3 className="text-[16px] font-semibold text-[#111] mb-1">{offer.name}</h3>
                  <div className="text-[22px] font-bold text-[#111] tracking-[-0.02em] mb-0.5">{offer.price}</div>
                  <p className="text-[11px] text-[#999] mb-3">{offer.duration}</p>
                  <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{offer.subtitle}</p>
                  <ul className="space-y-2 mb-4">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[12px] text-[#555]">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" style={{ color: offer.color }}><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-[#999] leading-[1.5] mb-4">{offer.note}</p>
                  <Link href={offer.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#E8E8E8] text-[12px] font-medium text-[#111] hover:bg-[#FAFAFA] transition-colors">
                    {offer.cta}
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 3. Formules combinees (dark) ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Packages</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Les combinaisons les plus courantes</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {packages.map((pkg) => (
                <div key={pkg.name} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <h3 className="text-[15px] font-semibold text-white mb-1">{pkg.name}</h3>
                  <p className="text-[12px] text-white/60 font-medium mb-2">{pkg.desc}</p>
                  <p className="text-[11px] text-white/40 mb-3">{pkg.price}</p>
                  <p className="text-[12px] text-white/50 leading-[1.65]">{pkg.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. Ce qui est toujours inclus ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Inclus</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Dans toutes nos offres</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {inclus.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <h3 className="text-[14px] font-semibold text-[#111]">{item.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 5. Ce qui fait varier le prix ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Transparence</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ce qui fait varier le prix</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {facteurs.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: f.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{f.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-8">
            <p className="text-[13px] text-[#555] leading-[1.75] text-center max-w-[600px] mx-auto">
              C&apos;est pour ca que chaque devis est sur mesure. Un appel de 30 minutes suffit pour cadrer le perimetre et le budget.
            </p>
          </div>
        </section>
        <Connector />

        {/* ───── 6. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur nos tarifs</h2>
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

        {/* ───── 7. CTA final ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-8 md:p-12 text-center">
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Chaque projet est unique. Parlons du votre.</h2>
            <p className="text-[14px] text-white/50 mb-6 max-w-[460px] mx-auto leading-[1.7]">30 minutes pour cadrer le perimetre et le budget. Devis sous 48h.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />
                France &amp; International
              </a>
              <a href="https://meetings.hubspot.com/simon156" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white text-[13px] font-medium hover:bg-white/20 transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                Canada
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
