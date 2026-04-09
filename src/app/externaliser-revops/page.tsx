"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const pourquoiExternaliser = [
  {
    title: "Acc\u00e8s imm\u00e9diat \u00e0 l\u2019expertise",
    desc: "Un RevOps senior co\u00fbte 70-90K\u20AC/an et met 3-6 mois \u00e0 \u00eatre op\u00e9rationnel. En externalisant, vous acc\u00e9dez d\u00e8s le jour 1 \u00e0 une \u00e9quipe qui a d\u00e9j\u00e0 configur\u00e9 100+ instances HubSpot, d\u00e9ploy\u00e9 des dizaines de stacks RevOps et r\u00e9solu les probl\u00e8mes que vous rencontrez aujourd\u2019hui.",
    color: "#FF7A59",
  },
  {
    title: "Flexibilit\u00e9 budg\u00e9taire",
    desc: "Pas de CDI, pas de charges, pas de management \u00e0 assurer. Vous ajustez le volume d\u2019heures selon vos besoins : 2 jours par semaine en phase de setup, 1 jour en maintenance, 0 quand tout roule. Vous payez pour le travail effectif, pas pour un salaire fixe.",
    color: "#4B5EFC",
  },
  {
    title: "Pas de risque de d\u00e9pendance",
    desc: "Quand votre unique RevOps interne part, il emporte ses connaissances. Avec une \u00e9quipe externalis\u00e9e, tout est document\u00e9, les process sont standardis\u00e9s et la continuit\u00e9 est assur\u00e9e. Si vous internalisez plus tard, on assure la transition.",
    color: "#6D00CC",
  },
  {
    title: "Vision multi-clients",
    desc: "Un RevOps interne conna\u00eet une seule entreprise. Un RevOps externalis\u00e9 a vu des dizaines d\u2019organisations, des centaines de cas d\u2019usage. Il identifie imm\u00e9diatement les patterns qui marchent et les pi\u00e8ges \u00e0 \u00e9viter dans votre secteur.",
    color: "#22C55E",
  },
  {
    title: "Rapidit\u00e9 d\u2019ex\u00e9cution",
    desc: "Pas de p\u00e9riode d\u2019essai, pas d\u2019onboarding de 3 mois. On audite votre stack en une semaine, on livre les premiers quick wins en deux semaines, et on a un impact mesurable d\u00e8s le premier mois.",
    color: "#6C5CE7",
  },
  {
    title: "Stack IA int\u00e9gr\u00e9e",
    desc: "L\u2019IA transforme le RevOps. Scoring pr\u00e9dictif, agents d\u2019enrichissement, automatisation intelligente. Un RevOps interne junior ne ma\u00eetrise pas ces outils. Notre \u00e9quipe les d\u00e9ploie au quotidien.",
    color: "#D4A27F",
  },
];

const comparaison = [
  { critere: "Co\u00fbt annuel", interne: "70-90K\u20AC (salaire + charges)", externe: "24-60K\u20AC (selon le mod\u00e8le)" },
  { critere: "D\u00e9lai op\u00e9rationnel", interne: "3-6 mois (recrutement + onboarding)", externe: "1-2 semaines" },
  { critere: "Expertise", interne: "1 profil, 1 vision", externe: "Equipe multi-comp\u00e9tences, 100+ cas" },
  { critere: "Outils ma\u00eetris\u00e9s", interne: "Ceux de l\u2019entreprise", externe: "HubSpot, Make, Clay, Claude, Apollo, etc." },
  { critere: "Risque de d\u00e9part", interne: "Perte de connaissance critique", externe: "Documentation + continuit\u00e9 assur\u00e9e" },
  { critere: "Scalabilit\u00e9", interne: "Limit\u00e9e \u00e0 1 personne", externe: "Volume ajustable chaque mois" },
  { critere: "Management", interne: "A votre charge (1:1, objectifs, \u00e9volution)", externe: "Autonome avec reporting r\u00e9gulier" },
  { critere: "Innovation IA", interne: "D\u00e9pend du profil recrut\u00e9", externe: "IA int\u00e9gr\u00e9e nativement (agents, scoring)" },
  { critere: "Disponibilit\u00e9", interne: "Cong\u00e9s, maladie, turnover", externe: "Continuit\u00e9 garantie (backup)" },
  { critere: "Vision march\u00e9", interne: "1 entreprise", externe: "Dizaines de clients, benchmarks sectoriels" },
];

const modeles = [
  {
    title: "RevOps part-time",
    desc: "Un RevOps d\u00e9di\u00e9 \u00e0 votre entreprise, 1 \u00e0 3 jours par semaine. Il fait partie de votre \u00e9quipe, participe \u00e0 vos meetings hebdo, conna\u00eet vos enjeux. La diff\u00e9rence avec un CDI : il apporte l\u2019expertise de 10 ans et de 100 clients. Id\u00e9al pour les entreprises de 20 \u00e0 200 personnes qui n\u2019ont pas encore le volume pour un RevOps full-time.",
    pour: "Scale-ups 20-200 pers.",
    tarif: "\u00e0 partir de 2 000\u20AC/mois",
    color: "#FF7A59",
  },
  {
    title: "RevOps projet",
    desc: "Mission ponctuelle avec un livrable d\u00e9fini : audit RevOps, d\u00e9ploiement HubSpot, migration CRM, refonte du scoring, mise en place du reporting. P\u00e9rim\u00e8tre cadré, dur\u00e9e fix\u00e9e, prix au forfait. Id\u00e9al pour des projets sp\u00e9cifiques qui ne justifient pas un accompagnement r\u00e9current.",
    pour: "Toutes tailles",
    tarif: "Forfait projet (3-15K\u20AC)",
    color: "#4B5EFC",
  },
  {
    title: "Admin HubSpot externalis\u00e9",
    desc: "On g\u00e8re votre instance HubSpot au quotidien comme votre \u00e9quipe Ops interne. Support utilisateurs, cr\u00e9ation de vues et rapports, maintenance des workflows, gestion des int\u00e9grations, \u00e9volutions continues. Canal Slack d\u00e9di\u00e9 avec r\u00e9ponse sous 2h en jours ouvr\u00e9s.",
    pour: "Entreprises avec HubSpot sans admin d\u00e9di\u00e9",
    tarif: "\u00e0 partir de 1 500\u20AC/mois",
    color: "#6D00CC",
  },
  {
    title: "RevOps full externalis\u00e9",
    desc: "L\u2019\u00e9quipe RevOps compl\u00e8te externalis\u00e9e. Strat\u00e9gie, ex\u00e9cution, outils, reporting, IA. On pilote l\u2019alignement Sales-Marketing-CS, on g\u00e8re le CRM, on d\u00e9ploie les automatisations et on mesure la performance. Comit\u00e9 de pilotage mensuel avec votre direction.",
    pour: "Scale-ups 50+ pers. sans \u00e9quipe Ops",
    tarif: "\u00e0 partir de 5 000\u20AC/mois",
    color: "#22C55E",
  },
];

const processus = [
  { step: "Semaine 1 : Audit", desc: "On audite votre CRM, vos process, vos outils, vos KPIs et vos pain points. On produit un rapport d\u2019audit avec des recommandations prioris\u00e9es et un plan d\u2019action \u00e0 90 jours." },
  { step: "Semaine 2-3 : Quick wins", desc: "On traite les probl\u00e8mes imm\u00e9diats : nettoyage donn\u00e9es, fix des workflows cass\u00e9s, cr\u00e9ation des dashboards manquants, correction des int\u00e9grations. R\u00e9sultats visibles d\u00e8s la deuxi\u00e8me semaine." },
  { step: "Mois 1-2 : Structuration", desc: "On restructure vos process : pipelines, lifecycle stages, scoring, automatisations, reporting unifi\u00e9. On forme vos \u00e9quipes sur les nouveaux process." },
  { step: "Mois 3+ : Optimisation continue", desc: "Maintenance r\u00e9currente, \u00e9volutions, nouveaux dashboards, int\u00e9grations de nouveaux outils, d\u00e9ploiement IA. Comit\u00e9 de pilotage mensuel avec KPIs." },
];

const casClients = [
  {
    client: "Ringover",
    duree: "12 mois",
    secteur: "SaaS T\u00e9l\u00e9com",
    contexte: "Ringover avait recrut\u00e9 un RevOps junior qui \u00e9tait parti apr\u00e8s 8 mois, laissant un HubSpot mal document\u00e9 avec 200+ workflows dont la moiti\u00e9 ne fonctionnaient plus. L\u2019\u00e9quipe de 30 commerciaux n\u2019avait plus de support CRM et le reporting \u00e9tait en panne.",
    intervention: "On a repris l\u2019administration HubSpot en urgence. Audit complet en 5 jours, nettoyage des workflows en 2 semaines, reconstruction du reporting en 3 semaines. Puis accompagnement r\u00e9current part-time (2 jours/semaine) pendant 12 mois : support users, \u00e9volutions, int\u00e9grations, d\u00e9ploiement IA.",
    resultats: ["Workflows actifs : 200 vers 45 (nettoyage) puis 65 (reconstruction)", "Adoption CRM : 60% vers 94%", "Temps de g\u00e9n\u00e9ration rapport : 2h vers 5 min (dashboards automatis\u00e9s)", "0 interruption de service sur 12 mois"],
    color: "#FF7A59",
  },
  {
    client: "Tennaxia",
    duree: "6 mois",
    secteur: "SaaS RSE / ESG",
    contexte: "Tennaxia migrait de Salesforce vers HubSpot et avait besoin d\u2019un RevOps pour piloter la migration, reconstruire les process et former les \u00e9quipes. Pas de budget pour un recrutement CDI, deadline de migration en 3 mois.",
    intervention: "Mission projet de 6 mois : pilotage de la migration Salesforce vers HubSpot, reconstruction de 3 pipelines, mise en place du scoring, int\u00e9gration avec leur outil m\u00e9tier, formation de 25 utilisateurs. Puis transition vers un accompagnement admin r\u00e9current.",
    resultats: ["Migration compl\u00e8te en 10 semaines (objectif : 12)", "100% des donn\u00e9es migr\u00e9es sans perte", "25 utilisateurs form\u00e9s, adoption \u00e0 92% au bout d\u20191 mois", "Co\u00fbt total : 40% d\u2019un recrutement CDI \u00e9quivalent"],
    color: "#4B5EFC",
  },
];

const tarifs = [
  { modele: "Admin HubSpot", prix: "\u00e0 partir de 1 500\u20AC/mois", details: "Support users, maintenance, \u00e9volutions mineures. Slack d\u00e9di\u00e9." },
  { modele: "RevOps part-time (1j/sem)", prix: "\u00e0 partir de 2 000\u20AC/mois", details: "1 jour par semaine d\u00e9di\u00e9. Strat\u00e9gie + ex\u00e9cution." },
  { modele: "RevOps part-time (2j/sem)", prix: "\u00e0 partir de 3 500\u20AC/mois", details: "2 jours par semaine. Le mod\u00e8le le plus demand\u00e9." },
  { modele: "RevOps full externalis\u00e9", prix: "\u00e0 partir de 5 000\u20AC/mois", details: "Equipe compl\u00e8te. Strat\u00e9gie, outils, IA, reporting." },
  { modele: "Projet ponctuel", prix: "3 000 - 15 000\u20AC", details: "Audit, migration, d\u00e9ploiement. Forfait fix\u00e9 au cadrage." },
];

const faqItems = [
  { q: "Quand faut-il externaliser le RevOps plut\u00f4t que recruter ?", a: "Quand vous n\u2019avez pas le volume pour un RevOps full-time (moins de 100-150 collaborateurs), quand vous avez besoin d\u2019expertise imm\u00e9diate sans les 3-6 mois d\u2019onboarding, ou quand votre budget ne permet pas un CDI \u00e0 70-90K\u20AC/an. L\u2019externalisation est aussi id\u00e9ale pour des projets ponctuels (migration, audit, d\u00e9ploiement)." },
  { q: "Comment s\u2019assurer que le RevOps externalis\u00e9 comprend notre business ?", a: "On commence toujours par un audit approfondi : vos process, vos \u00e9quipes, vos KPIs, vos enjeux. Notre RevOps d\u00e9di\u00e9 participe \u00e0 vos meetings hebdo, \u00e9change avec vos \u00e9quipes sur Slack et conna\u00eet votre contexte aussi bien qu\u2019un interne. La diff\u00e9rence : il apporte aussi la vision de dizaines d\u2019autres organisations." },
  { q: "Et si on veut internaliser ensuite ?", a: "C\u2019est pr\u00e9vu. Tout ce qu\u2019on fait est document\u00e9 : process, workflows, configurations, d\u00e9cisions. Quand vous recrutez un RevOps interne, on assure la transition sur 4 \u00e0 8 semaines : documentation, formation, passation compl\u00e8te. Certains clients recrutent et gardent un accompagnement l\u00e9ger en parall\u00e8le." },
  { q: "Quel est le mod\u00e8le le plus demand\u00e9 ?", a: "Le RevOps part-time \u00e0 2 jours par semaine. C\u2019est le sweet spot pour les scale-ups de 30 \u00e0 150 personnes : assez de volume pour structurer les process et g\u00e9rer le CRM, sans le co\u00fbt d\u2019un CDI full-time." },
  { q: "Comment mesurez-vous votre impact ?", a: "On d\u00e9finit des KPIs d\u00e8s le cadrage : adoption CRM, qualit\u00e9 de donn\u00e9es, vitesse du pipeline, taux de conversion par \u00e9tape, nombre d\u2019automatisations actives, temps de g\u00e9n\u00e9ration des rapports. Comit\u00e9 de pilotage mensuel avec un dashboard de performance." },
  { q: "Travaillez-vous uniquement avec HubSpot ?", a: "HubSpot est notre CRM principal, mais le RevOps ne se limite pas au CRM. On travaille aussi avec Make, Clay, Apollo, Lemlist, Notion, Slack et on d\u00e9ploie des agents IA avec Claude. On g\u00e8re l\u2019ensemble de votre stack RevOps, pas juste le CRM." },
  { q: "Quelle est la dur\u00e9e d\u2019engagement ?", a: "Pour les accompagnements r\u00e9currents, on recommande un engagement minimum de 3 mois pour voir des r\u00e9sultats significatifs. Apr\u00e8s la p\u00e9riode initiale, l\u2019engagement est mensuel avec 30 jours de pr\u00e9avis. Pour les projets, le p\u00e9rim\u00e8tre et la dur\u00e9e sont fix\u00e9s au cadrage." },
  { q: "On a d\u00e9j\u00e0 un RevOps junior en interne, pouvez-vous le compl\u00e9ter ?", a: "Absolument. C\u2019est un mod\u00e8le tr\u00e8s efficace : votre RevOps junior g\u00e8re le quotidien (support users, petites \u00e9volutions) et on intervient sur la strat\u00e9gie, les projets complexes et le mentorat. On fait monter votre RevOps en comp\u00e9tences tout en livrant les projets structurants." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Externalisation RevOps",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Externalisation du RevOps : part-time, projet, admin HubSpot, full. Accompagnement r\u00e9current, migration, d\u00e9ploiement CRM et IA.",
      serviceType: "Revenue Operations Outsourcing",
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

export default function ExternaliserRevOpsPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>RevOps externalis\u00e9</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Externaliser son RevOps
          </h1>
          <p className="text-[17px] text-[#666] max-w-[580px] mx-auto leading-[1.7] mb-4">
            L&apos;expertise RevOps sans le CDI. Part-time, projet ou full : on s&apos;adapte \u00e0 votre taille, votre budget et vos enjeux. CRM, automatisations, reporting, IA. Tout est couvert.
          </p>
          <p className="text-[13px] text-[#999] max-w-[500px] mx-auto mb-8">
            Utilis\u00e9 par des scale-ups comme Ringover, Tennaxia, Beedeez et Iroko. 100+ instances g\u00e9r\u00e9es, des startups early-stage aux ETI de 500 personnes.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Discuter de mon besoin
          </Link>
        </section>
        <Connector />

        {/* ── Pourquoi externaliser ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pourquoi</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Pourquoi externaliser le RevOps
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Le RevOps est devenu indispensable. Mais recruter un RevOps senior en CDI n&apos;est pas toujours la bonne option.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {pourquoiExternaliser.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: p.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{p.title}</h3>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.7]">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── Externaliser vs recruter ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Comparaison</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Externaliser vs recruter : 10 crit\u00e8res
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Une comparaison objective pour vous aider \u00e0 d\u00e9cider. Les deux options sont valables selon votre contexte.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="p-4 text-[13px] font-semibold text-[#111]">Crit\u00e8re</th>
                    <th className="p-4 text-[13px] font-semibold text-[#999]">Recrutement interne</th>
                    <th className="p-4 text-[13px] font-semibold text-[#22C55E]">Externalisation</th>
                  </tr>
                </thead>
                <tbody>
                  {comparaison.map((c) => (
                    <tr key={c.critere} className="border-b border-[#F5F5F5]">
                      <td className="p-4 text-[13px] font-medium text-[#111]">{c.critere}</td>
                      <td className="p-4 text-[13px] text-[#666]">{c.interne}</td>
                      <td className="p-4 text-[13px] text-[#666]">{c.externe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── Modeles d'externalisation ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Mod\u00e8les</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Les 4 mod\u00e8les d&apos;externalisation
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Du plus l\u00e9ger au plus complet. On s&apos;adapte \u00e0 votre taille et \u00e0 vos besoins.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {modeles.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: m.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{m.title}</h3>
                </div>
                <p className="text-[12px] text-[#999] mb-3">{m.pour} &middot; {m.tarif}</p>
                <p className="text-[14px] text-[#666] leading-[1.7]">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── Comment ca se passe avec Ceres ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Process</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Comment \u00e7a se passe avec Ceres
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Un processus rod\u00e9 : audit, quick wins, structuration, optimisation continue.
            </p>
          </div>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="space-y-6">
              {processus.map((p) => (
                <div key={p.step}>
                  <h3 className="text-[15px] font-semibold text-white mb-1">{p.step}</h3>
                  <p className="text-[14px] text-[#999] leading-[1.7]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── Cas clients ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Cas clients
            </h2>
          </div>
          <div className="grid gap-4">
            {casClients.map((c) => (
              <div key={c.client} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: c.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{c.client}</h3>
                  <span className="text-[12px] text-[#999]">{c.secteur} &middot; {c.duree}</span>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-3"><span className="font-medium text-[#111]">Contexte :</span> {c.contexte}</p>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-4"><span className="font-medium text-[#111]">Intervention :</span> {c.intervention}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {c.resultats.map((r) => (
                    <div key={r} className="text-[13px] text-[#111] font-medium bg-[#F9F9F9] rounded-lg px-3 py-2">{r}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── Tarifs ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Tarifs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Tarifs
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Tous les prix sont HT. L&apos;appel de cadrage est gratuit et sans engagement.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="p-4 text-[13px] font-semibold text-[#111]">Mod\u00e8le</th>
                    <th className="p-4 text-[13px] font-semibold text-[#111]">Prix</th>
                    <th className="p-4 text-[13px] font-semibold text-[#111]">D\u00e9tails</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifs.map((t) => (
                    <tr key={t.modele} className="border-b border-[#F5F5F5]">
                      <td className="p-4 text-[13px] font-medium text-[#111]">{t.modele}</td>
                      <td className="p-4 text-[13px] text-[#22C55E] font-semibold whitespace-nowrap">{t.prix}</td>
                      <td className="p-4 text-[13px] text-[#666]">{t.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* Liens */}
        <section className="mt-12 mb-8">
          <div className="mb-4"><Badge>A decouvrir</Badge></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/revops-part-time" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#FF7A59" }} />
                <h3 className="text-[14px] font-semibold text-[#111]">Accompagnement continu</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65]">Un expert RevOps & IA integre a votre equipe chaque mois.</p>
            </Link>
            <Link href="/methode" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#4B5EFC" }} />
                <h3 className="text-[14px] font-semibold text-[#111]">Notre methode</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65]">Data, IA et RevOps : notre methodologie.</p>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ── FAQ ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>FAQ</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Questions fr\u00e9quentes sur l&apos;externalisation RevOps
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
              Pr\u00eat \u00e0 externaliser votre RevOps ?
            </h2>
            <p className="text-[15px] text-[#999] max-w-[480px] mx-auto leading-[1.7] mb-6">
              On discute de votre contexte, on identifie le mod\u00e8le adapt\u00e9 et on vous propose un plan d&apos;action concret. L&apos;appel de cadrage est gratuit et sans engagement.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[13px] text-[#111] font-medium hover:bg-[#F5F5F5] transition-all">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />R\u00e9server un appel
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
