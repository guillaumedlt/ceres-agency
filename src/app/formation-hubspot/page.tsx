"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const programmes = [
  {
    role: "Admin HubSpot / RevOps",
    desc: "La formation la plus compl\u00e8te. On couvre l\u2019ensemble de l\u2019administration HubSpot : gestion des propri\u00e9t\u00e9s, pipelines, workflows, automatisations, int\u00e9grations, rapports custom et datasets. Apr\u00e8s cette formation, votre admin est autonome pour g\u00e9rer, faire \u00e9voluer et d\u00e9bugger votre instance HubSpot sans d\u00e9pendre d\u2019un consultant externe.",
    duree: "2-3 jours",
    items: ["Architecture CRM (objets, propri\u00e9t\u00e9s, associations)", "Pipelines et lifecycle stages", "Workflows et automatisations avanc\u00e9es", "Int\u00e9grations et API", "Rapports custom et datasets", "Data quality et d\u00e9doublonnage", "Gestion des utilisateurs et permissions"],
    color: "#6C5CE7",
  },
  {
    role: "Equipe commerciale (AE, SDR, BDR)",
    desc: "Formation orient\u00e9e productivit\u00e9 commerciale. On se concentre sur les outils du quotidien : gestion des deals, s\u00e9quences de prospection, planification de meetings, playbooks, devis. L\u2019objectif est que chaque commercial utilise HubSpot comme un acc\u00e9l\u00e9rateur de vente, pas comme une contrainte administrative.",
    duree: "1 jour",
    items: ["Navigation et interface commerciale", "Gestion des contacts et entreprises", "Pipeline de deals et \u00e9tapes", "S\u00e9quences de prospection", "Templates email et snippets", "Planification de meetings", "Playbooks et notes structur\u00e9es"],
    color: "#FF7A59",
  },
  {
    role: "Equipe marketing",
    desc: "Formation d\u00e9di\u00e9e aux marketeurs. On couvre la cr\u00e9ation d\u2019emails, les workflows de nurturing, les landing pages, la segmentation, le reporting marketing et l\u2019attribution. Votre \u00e9quipe marketing ma\u00eetrise Marketing Hub de bout en bout et peut lancer des campagnes sans aide technique.",
    duree: "1-2 jours",
    items: ["Cr\u00e9ation d\u2019emails et templates", "Workflows de nurturing", "Landing pages et formulaires", "Segmentation et listes", "Scoring et lifecycle stages", "Reporting et attribution", "Social media et ads"],
    color: "#4B5EFC",
  },
  {
    role: "Managers et direction",
    desc: "Formation strat\u00e9gique pour les managers et C-level. On se concentre sur le pilotage : dashboards de performance, forecasting, rapports d\u2019activit\u00e9 par \u00e9quipe, KPIs cl\u00e9s et interpr\u00e9tation des donn\u00e9es. Votre direction prend des d\u00e9cisions bas\u00e9es sur les donn\u00e9es CRM, pas sur l\u2019intuition.",
    duree: "0.5-1 jour",
    items: ["Dashboards de pilotage", "Forecasting et pr\u00e9visions", "Rapports d\u2019activit\u00e9 commerciale", "Attribution marketing", "KPIs RevOps", "Interpr\u00e9tation et prise de d\u00e9cision"],
    color: "#22C55E",
  },
];

const formats = [
  {
    title: "Sur site \u00e0 Paris",
    desc: "Formation dans vos locaux parisiens. Nos formateurs se d\u00e9placent avec tout le mat\u00e9riel n\u00e9cessaire. Le format le plus efficace pour les \u00e9quipes de 5+ personnes : interaction directe, exercices sur vos donn\u00e9es, r\u00e9ponses imm\u00e9diates aux questions. On recommande des sessions de 9h \u00e0 17h avec une pause d\u00e9jeuner.",
    avantages: ["Interaction directe avec le formateur", "Exercices sur votre instance r\u00e9elle", "Dynamique de groupe", "Questions trait\u00e9es en temps r\u00e9el", "Adaptation au rythme de l\u2019\u00e9quipe"],
    color: "#FF7A59",
  },
  {
    title: "Remote (visio)",
    desc: "Formation en visioconf\u00e9rence via Google Meet ou Zoom. Adapt\u00e9e aux \u00e9quipes distribu\u00e9es ou aux entreprises hors Paris. Sessions de 3h maximum pour maintenir l\u2019attention, r\u00e9parties sur plusieurs jours. Partage d\u2019\u00e9cran, exercices en direct et enregistrement des sessions fourni.",
    avantages: ["Pas de d\u00e9placement", "Sessions courtes (3h)", "Enregistrement fourni", "Adapt\u00e9 aux \u00e9quipes distribu\u00e9es", "Replay disponible 30 jours"],
    color: "#4B5EFC",
  },
  {
    title: "Hybride",
    desc: "Combinaison du pr\u00e9sentiel et du remote. Par exemple : une journ\u00e9e sur site pour le kickoff et les fondamentaux, puis des sessions remote de 2h pour approfondir. Id\u00e9al pour les formations longues (3 jours+) ou les \u00e9quipes avec des niveaux h\u00e9t\u00e9rog\u00e8nes.",
    avantages: ["Le meilleur des deux formats", "Flexibilit\u00e9 de planning", "Kickoff en pr\u00e9sentiel", "Approfondissement en remote", "Suivi personnalis\u00e9"],
    color: "#6D00CC",
  },
];

const agendaType = [
  { heure: "9h00 - 9h30", contenu: "Introduction et objectifs de la journ\u00e9e. Tour de table des attentes. Pr\u00e9sentation de l\u2019architecture de votre instance HubSpot." },
  { heure: "9h30 - 10h30", contenu: "Module 1 : navigation, interface et personnalisation. Chaque participant configure ses vues, ses filtres et ses tableaux de bord favoris sur son propre compte." },
  { heure: "10h30 - 10h45", contenu: "Pause." },
  { heure: "10h45 - 12h00", contenu: "Module 2 : gestion des contacts, entreprises et deals. Exercices pratiques sur vos donn\u00e9es r\u00e9elles : cr\u00e9ation de fiches, association, mise \u00e0 jour en masse." },
  { heure: "12h00 - 13h00", contenu: "Pause d\u00e9jeuner." },
  { heure: "13h00 - 14h30", contenu: "Module 3 : outils sp\u00e9cifiques au r\u00f4le (s\u00e9quences pour les commerciaux, workflows pour le marketing, dashboards pour les managers). Exercices guid\u00e9s." },
  { heure: "14h30 - 14h45", contenu: "Pause." },
  { heure: "14h45 - 16h00", contenu: "Module 4 : automatisations et bonnes pratiques. Cr\u00e9ation d\u2019un workflow complet en live. Tips et raccourcis pour gagner du temps au quotidien." },
  { heure: "16h00 - 17h00", contenu: "Q&A ouverte. R\u00e9ponse aux questions sp\u00e9cifiques de chaque participant. D\u00e9finition des prochaines \u00e9tapes et du support post-formation." },
];

const comparaison = [
  { critere: "Contenu", ceres: "Adapt\u00e9 \u00e0 votre instance, vos process, vos donn\u00e9es", academy: "G\u00e9n\u00e9rique, couvre les fonctionnalit\u00e9s standard" },
  { critere: "Format", ceres: "Pr\u00e9sentiel ou remote, avec formateur d\u00e9di\u00e9", academy: "Vid\u00e9os en ligne \u00e0 suivre seul" },
  { critere: "Exercices", ceres: "Sur votre instance HubSpot r\u00e9elle", academy: "Sur un portail de d\u00e9monstration" },
  { critere: "Interaction", ceres: "Questions en temps r\u00e9el, coaching", academy: "Forum communautaire" },
  { critere: "Dur\u00e9e", ceres: "1 \u00e0 3 jours intensifs", academy: "4 \u00e0 8 heures de vid\u00e9o \u00e9tal\u00e9es" },
  { critere: "Certification", ceres: "Attestation de formation Ceres", academy: "Certification HubSpot officielle" },
  { critere: "Prix", ceres: "Forfait par session", academy: "Gratuit" },
  { critere: "Valeur ajout\u00e9e", ceres: "Conseils process + best practices terrain", academy: "Connaissance produit th\u00e9orique" },
];

const tarifs = [
  {
    name: "Formation 1 journ\u00e9e",
    price: "1 500\u20AC HT",
    desc: "Session d\u2019une journ\u00e9e compl\u00e8te (7h) pour un r\u00f4le sp\u00e9cifique. Id\u00e9al pour les \u00e9quipes commerciales ou marketing qui ont besoin de ma\u00eetriser les bases rapidement.",
    includes: ["Pr\u00e9paration sur-mesure", "Journ\u00e9e de formation compl\u00e8te", "Exercices sur votre instance", "Support email 15 jours", "Documentation personnalis\u00e9e"],
    color: "#FF7A59",
  },
  {
    name: "Formation 3 jours",
    price: "3 500\u20AC HT",
    desc: "Programme complet sur 3 jours pour former plusieurs r\u00f4les ou approfondir un r\u00f4le cl\u00e9 (admin/RevOps). Inclut des sessions de pratique avanc\u00e9e.",
    includes: ["Audit pr\u00e9-formation", "3 journ\u00e9es de formation", "Exercices avanc\u00e9s", "Support email 30 jours", "Documentation compl\u00e8te", "Session de suivi \u00e0 J+30"],
    color: "#4B5EFC",
  },
  {
    name: "Programme sur mesure",
    price: "Sur devis",
    desc: "Programme adapt\u00e9 \u00e0 vos besoins sp\u00e9cifiques. Multi-\u00e9quipes, multi-sites, formation continue. On construit le programme ensemble.",
    includes: ["Cadrage avec vos managers", "Programme multi-\u00e9quipes", "Sessions \u00e9tal\u00e9es dans le temps", "Coaching individuel possible", "Support continu", "KPIs de formation"],
    color: "#6D00CC",
  },
];

const faqItems = [
  { q: "Vos formations sont-elles \u00e9ligibles au financement OPCO ?", a: "Oui, nos formations sont \u00e9ligibles au financement via votre OPCO (Op\u00e9rateur de Comp\u00e9tences). On vous fournit le programme d\u00e9taill\u00e9, la convention de formation et l\u2019attestation de fin de formation n\u00e9cessaires pour le dossier de prise en charge." },
  { q: "Combien de participants par session ?", a: "On recommande 4 \u00e0 10 participants par session pour garantir l\u2019interaction et le temps de pratique individuel. Au-del\u00e0 de 10, on d\u00e9double les sessions ou on ajoute un second formateur." },
  { q: "Les formations sont-elles adapt\u00e9es \u00e0 notre instance HubSpot ?", a: "Absolument. C\u2019est notre diff\u00e9renciateur principal. Avant chaque formation, on audite votre instance, on comprend vos process et on construit les exercices sur vos donn\u00e9es r\u00e9elles. Aucun contenu g\u00e9n\u00e9rique." },
  { q: "Quelle diff\u00e9rence avec les certifications HubSpot Academy ?", a: "HubSpot Academy est excellent pour comprendre le produit de mani\u00e8re th\u00e9orique. Nos formations vous apprennent \u00e0 utiliser HubSpot dans le contexte de VOS process. On recommande de faire les deux : Academy pour la th\u00e9orie, Ceres pour la pratique." },
  { q: "Faites-vous des formations pour les \u00e9quipes CS (Customer Success) ?", a: "Oui. On forme les \u00e9quipes CS sur Service Hub : gestion des tickets, knowledge base, enqu\u00eates NPS/CSAT, SLA et portail client. La formation CS suit le m\u00eame format que les formations Sales et Marketing." },
  { q: "Peut-on former une seule personne ?", a: "Oui, on propose du coaching individuel pour les admins HubSpot et les RevOps. Sessions de 2h, focus sur vos probl\u00e9matiques sp\u00e9cifiques. Tarif : 400\u20AC HT par session de 2h." },
  { q: "Combien de temps avant de voir les r\u00e9sultats ?", a: "Les r\u00e9sultats sont imm\u00e9diats sur l\u2019adoption. D\u00e8s le lendemain de la formation, vos \u00e9quipes utilisent HubSpot diff\u00e9remment. L\u2019impact sur les KPIs (taux de remplissage CRM, adoption des s\u00e9quences, reporting) se mesure sous 2 \u00e0 4 semaines." },
  { q: "Proposez-vous un support apr\u00e8s la formation ?", a: "Oui. Chaque formation inclut un support email de 15 \u00e0 30 jours (selon le format). Pour un accompagnement continu, on propose des forfaits d\u2019administration r\u00e9currente avec un canal Slack d\u00e9di\u00e9." },
  { q: "Formez-vous aussi sur les outils connect\u00e9s \u00e0 HubSpot ?", a: "On forme sur les outils qu\u2019on utilise au quotidien avec HubSpot : Make (automatisations), Clay (enrichissement), Lemlist (prospection), Notion (documentation). Si l\u2019outil fait partie de votre stack connect\u00e9e \u00e0 HubSpot, on peut l\u2019int\u00e9grer \u00e0 la formation." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Formation HubSpot",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Formation HubSpot sur mesure pour vos \u00e9quipes. Programmes par r\u00f4le : admin, commercial, marketing, manager. Sur site Paris, remote ou hybride.",
      serviceType: "HubSpot Training",
      areaServed: { "@type": "Place", name: "France" },
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

export default function FormationHubSpotPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Formation</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Formation HubSpot
          </h1>
          <p className="text-[17px] text-[#666] max-w-[580px] mx-auto leading-[1.7] mb-4">
            Des programmes de formation HubSpot sur mesure, adapt\u00e9s \u00e0 votre instance et \u00e0 vos process. Par r\u00f4le : admin, commercial, marketing, manager. Sur site \u00e0 Paris, en remote ou en hybride.
          </p>
          <p className="text-[13px] text-[#999] max-w-[500px] mx-auto mb-8">
            Pas un tuto g\u00e9n\u00e9rique. Une formation construite sur VOS donn\u00e9es, VOS workflows et VOS objectifs. Formateurs avec 6+ ans d&apos;exp\u00e9rience HubSpot terrain.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
            <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />Demander un programme
          </Link>
        </section>
        <Connector />

        {/* ── Nos programmes par role ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Programmes</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Nos programmes par r\u00f4le
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Chaque \u00e9quipe a des besoins diff\u00e9rents. On adapte le contenu, la profondeur et les exercices au r\u00f4le de chaque participant.
            </p>
          </div>
          <div className="grid gap-4">
            {programmes.map((p) => (
              <div key={p.role} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ background: p.color }} />
                    <h3 className="text-[16px] font-semibold text-[#111]">{p.role}</h3>
                  </div>
                  <span className="text-[12px] text-[#999] border border-[#E8E8E8] rounded px-2 py-0.5">{p.duree}</span>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-4">{p.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="text-[13px] text-[#666] flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#CCC] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── Formats ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Formats</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Trois formats de formation
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Pr\u00e9sentiel \u00e0 Paris, remote ou hybride. On s&apos;adapte \u00e0 vos contraintes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {formats.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-sm" style={{ background: f.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{f.title}</h3>
                </div>
                <p className="text-[13px] text-[#666] leading-[1.7] mb-4">{f.desc}</p>
                <ul className="space-y-1.5">
                  {f.avantages.map((a) => (
                    <li key={a} className="text-[12px] text-[#999] flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#CCC] mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── Contenu type d'une formation ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Agenda</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Contenu type d&apos;une journ\u00e9e de formation
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Exemple d&apos;agenda pour une formation d&apos;une journ\u00e9e. Chaque session est adapt\u00e9e \u00e0 votre \u00e9quipe et \u00e0 vos objectifs.
            </p>
          </div>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="space-y-4">
              {agendaType.map((a) => (
                <div key={a.heure} className="flex gap-4">
                  <span className="text-[13px] text-[#666] font-mono whitespace-nowrap min-w-[110px]">{a.heure}</span>
                  <p className="text-[14px] text-[#CCC] leading-[1.7]">{a.contenu}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── Formation vs HubSpot Academy ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Comparaison</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Formation Ceres vs HubSpot Academy
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Les deux sont compl\u00e9mentaires. HubSpot Academy pour la th\u00e9orie produit, Ceres pour la pratique sur votre instance.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="p-4 text-[13px] font-semibold text-[#111]">Crit\u00e8re</th>
                    <th className="p-4 text-[13px] font-semibold text-[#4B5EFC]">Formation Ceres</th>
                    <th className="p-4 text-[13px] font-semibold text-[#FF7A59]">HubSpot Academy</th>
                  </tr>
                </thead>
                <tbody>
                  {comparaison.map((c) => (
                    <tr key={c.critere} className="border-b border-[#F5F5F5]">
                      <td className="p-4 text-[13px] font-medium text-[#111]">{c.critere}</td>
                      <td className="p-4 text-[13px] text-[#666]">{c.ceres}</td>
                      <td className="p-4 text-[13px] text-[#666]">{c.academy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── Tarifs ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Tarifs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Tarifs de nos formations
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Forfait par session, pas par participant. Eligible au financement OPCO.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {tarifs.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-sm" style={{ background: t.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{t.name}</h3>
                </div>
                <p className="text-[20px] font-semibold text-[#111] mb-2">{t.price}</p>
                <p className="text-[13px] text-[#666] leading-[1.7] mb-4">{t.desc}</p>
                <ul className="space-y-1.5">
                  {t.includes.map((inc) => (
                    <li key={inc} className="text-[12px] text-[#999] flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#CCC] mt-1.5 shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── FAQ ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>FAQ</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Questions fr\u00e9quentes sur nos formations
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
              Pr\u00eat \u00e0 former vos \u00e9quipes ?
            </h2>
            <p className="text-[15px] text-[#999] max-w-[480px] mx-auto leading-[1.7] mb-6">
              On construit un programme adapt\u00e9 \u00e0 vos \u00e9quipes, vos process et votre instance HubSpot. L&apos;appel de cadrage est gratuit et sans engagement.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[13px] text-[#111] font-medium hover:bg-[#F5F5F5] transition-all">
              <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />Demander un programme
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
