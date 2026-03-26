"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Opendatasoft : HubSpot Admin externalis\u00e9 avec Ceres",
  description: "Comment Opendatasoft a externalis\u00e9 l\u2019administration de HubSpot pour maintenir un CRM propre, cr\u00e9er 40+ workflows en 12 mois et garantir un temps de r\u00e9solution inf\u00e9rieur \u00e0 4 heures.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-26",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "besoin", title: "Le besoin" },
  { id: "admin-externalise", title: "HubSpot Admin externalis\u00e9" },
  { id: "maintenance", title: "Maintenance et hygi\u00e8ne CRM" },
  { id: "workflows", title: "Workflows et automatisations" },
  { id: "support", title: "Support \u00e9quipe" },
  { id: "reporting", title: "Reporting et dashboards" },
  { id: "optimisation", title: "Optimisation continue" },
  { id: "resultats", title: "Les r\u00e9sultats" },
  { id: "temoignage", title: "T\u00e9moignage" },
];

const stack = [
  { name: "HubSpot", domain: "hubspot.com", role: "CRM, Marketing Hub, Sales Hub, Ops Hub", color: "#FF7A59" },
  { name: "Slack", domain: "slack.com", role: "Communication, alertes, support", color: "#E01E5A" },
  { name: "Notion", domain: "notion.so", role: "Documentation, playbooks, changelog", color: "#111" },
  { name: "Make", domain: "make.com", role: "Automatisation, int\u00e9grations", color: "#6D00CC" },
  { name: "Google Sheets", domain: "google.com", role: "Data quality tracking, audits", color: "#0F9D58" },
  { name: "Datadog", domain: "datadoghq.com", role: "Monitoring int\u00e9grations", color: "#632CA6" },
];

const maintenanceTasks = [
  { title: "D\u00e9duplication mensuelle", desc: "Chaque mois, on lance un audit de d\u00e9duplication sur l\u2019ensemble de la base contacts et entreprises. Les doublons sont identifi\u00e9s selon des r\u00e8gles multi-crit\u00e8res (email, nom + domaine, t\u00e9l\u00e9phone), fusionn\u00e9s automatiquement quand la confiance est sup\u00e9rieure \u00e0 95%, et revus manuellement dans les cas ambigus. En moyenne, on traite 200 \u00e0 400 doublons par mois.", color: "#FF7A59" },
  { title: "Archivage contacts inactifs", desc: "Les contacts sans aucune activit\u00e9 depuis 18 mois (pas d\u2019ouverture email, pas de visite site, pas d\u2019interaction commerciale) sont archiv\u00e9s trimestriellement. Avant chaque archivage, on envoie une campagne de r\u00e9engagement. Les contacts qui ne r\u00e9agissent pas sont d\u00e9plac\u00e9s dans une liste d\u2019archive et exclus des envois marketing. Cela permet de maintenir des taux de d\u00e9livrabilit\u00e9 sains.", color: "#4B5EFC" },
  { title: "Nettoyage des propri\u00e9t\u00e9s", desc: "Audit trimestriel des propri\u00e9t\u00e9s HubSpot : identification des champs non utilis\u00e9s, suppression des propri\u00e9t\u00e9s obsol\u00e8tes, normalisation des valeurs (pays, secteurs, sources). On est pass\u00e9 de 280 propri\u00e9t\u00e9s \u00e0 l\u2019arriv\u00e9e de Ceres \u00e0 160 propri\u00e9t\u00e9s actives et document\u00e9es. Chaque propri\u00e9t\u00e9 a un owner, une description et une convention de nommage.", color: "#6C5CE7" },
  { title: "Monitoring des int\u00e9grations", desc: "Surveillance continue des flux entre HubSpot et les outils connect\u00e9s : v\u00e9rification quotidienne des syncs, alertes automatiques en cas d\u2019erreur, r\u00e9solution proactive des probl\u00e8mes avant qu\u2019ils n\u2019impactent les \u00e9quipes. Le taux de disponibilit\u00e9 des int\u00e9grations est maintenu au-dessus de 95% depuis le d\u00e9but de la mission.", color: "#6D00CC" },
  { title: "Gestion des utilisateurs", desc: "Onboarding des nouveaux utilisateurs HubSpot (cr\u00e9ation de compte, permissions, \u00e9quipes, vues personnalis\u00e9es), offboarding des d\u00e9parts (transfert des contacts et deals, d\u00e9sactivation), et mise \u00e0 jour r\u00e9guli\u00e8re des r\u00f4les et permissions. En moyenne 2 \u00e0 3 mouvements d\u2019\u00e9quipe par mois.", color: "#22C55E" },
];

const workflowExamples = [
  { title: "Attribution et routage des leads", desc: "Workflow de routage intelligent qui attribue chaque nouveau lead au bon commercial selon la r\u00e9gion, la taille d\u2019entreprise et le segment. Les leads enterprise vont directement aux AE seniors, les mid-market sont rout\u00e9s en round-robin par territoire. Le workflow g\u00e8re aussi les exceptions : leads existants r\u00e9attribu\u00e9s \u00e0 leur owner historique, leads sans correspondance rout\u00e9s vers une file d\u2019attente manag\u00e9e par le team lead.", color: "#4B5EFC" },
  { title: "Nurturing post-d\u00e9mo", desc: "S\u00e9quence automatis\u00e9e d\u00e9clench\u00e9e apr\u00e8s chaque d\u00e9mo produit. Le workflow adapte le contenu envoy\u00e9 selon le use case discut\u00e9 en d\u00e9mo (open data, smart city, data visualisation, data sharing interne). 5 emails espac\u00e9s sur 3 semaines, avec du contenu \u00e9ducatif, des cas clients similaires et une relance pour planifier l\u2019\u00e9tape suivante.", color: "#FF7A59" },
  { title: "Alertes pipeline", desc: "Notifications Slack automatiques sur les \u00e9v\u00e9nements cl\u00e9s du pipeline : nouveau deal cr\u00e9\u00e9 au-dessus de 20K euros, deal qui change de stage, deal sans activit\u00e9 depuis 10 jours, deal gagn\u00e9 ou perdu. Les managers re\u00e7oivent un r\u00e9sum\u00e9 quotidien de l\u2019activit\u00e9 pipeline de leur \u00e9quipe.", color: "#22C55E" },
  { title: "Lifecycle stage automation", desc: "Mise \u00e0 jour automatique des lifecycle stages selon les actions des contacts : un contact qui remplit un formulaire de d\u00e9mo passe automatiquement en MQL, un contact accept\u00e9 par le commercial passe en SQL, un contact associ\u00e9 \u00e0 un deal passe en Opportunity. Les r\u00e8gles sont document\u00e9es et audit\u00e9es mensuellement.", color: "#6C5CE7" },
  { title: "Onboarding client automatis\u00e9", desc: "D\u00e8s qu\u2019un deal passe en Closed Won, un workflow cr\u00e9e automatiquement un ticket d\u2019onboarding, notifie l\u2019\u00e9quipe Customer Success, envoie un email de bienvenue personnalis\u00e9 au client, et cr\u00e9e les t\u00e2ches de setup dans le pipeline d\u2019onboarding. Le commercial n\u2019a plus besoin de faire de handoff manuel.", color: "#6D00CC" },
];

export default function OpendatasoftCaseStudy() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("contexte");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[100px] pb-16 overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 320, height: 320, borderRadius: "50%", background: "#4B5EFC", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "12%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "25%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "38%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "52%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "65%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "78%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "90%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <img src="https://www.google.com/s2/favicons?domain=opendatasoft.com&sz=32" alt="Opendatasoft" className="w-5 h-5 rounded" />
                <span className="text-[12px] font-semibold text-[#111]">Opendatasoft</span>
              </div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#4B5EFC] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 max-w-[750px]">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/cas-clients" className="hover:text-[#111] transition-colors">Cas clients</Link><span>/</span>
              <span className="text-[#666]">Opendatasoft</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">12 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=opendatasoft.com&sz=64" alt="Opendatasoft" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Opendatasoft</h1>
                  <p className="text-[12px] text-[#999]">SaaS Data Sharing Platform | 100+ personnes | International</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Comment Opendatasoft a externalis&eacute; l&apos;administration de HubSpot pour b&eacute;n&eacute;ficier d&apos;un CRM maintenu, optimis&eacute; et support&eacute; en continu, sans recruter en interne. 40+ workflows cr&eacute;&eacute;s en 12 mois, un temps de r&eacute;solution inf&eacute;rieur &agrave; 4 heures et un data quality score maintenu au-dessus de 85.
              </p>

              {/* Results banner */}
              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">R&eacute;sultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "95%", label: "Uptime int\u00e9grations", color: "#22C55E" },
                    { value: "40+", label: "Workflows cr\u00e9\u00e9s en 12 mois", color: "#4B5EFC" },
                    { value: "< 4h", label: "Temps de r\u00e9solution", color: "#6C5CE7" },
                    { value: "85+", label: "Data quality score", color: "#FF7A59" },
                  ].map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-[24px] font-bold" style={{ color: r.color }}>{r.value}</div>
                      <div className="text-[10px] text-white/40">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </header>

            <article>
              {/* Section 1 : Le contexte */}
              <section id="contexte" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le contexte</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Opendatasoft est une plateforme SaaS qui permet aux organisations de partager, visualiser et r&eacute;utiliser des donn&eacute;es ouvertes et internes. Fond&eacute;e en France, l&apos;entreprise compte plus de 100 collaborateurs et op&egrave;re &agrave; l&apos;international, avec des clients dans le secteur public, l&apos;&eacute;nergie, les transports et les t&eacute;l&eacute;communications. Leur plateforme est utilis&eacute;e par des centaines d&apos;organisations pour cr&eacute;er des portails de donn&eacute;es accessibles et exploitables.</p>
                    <p>Quand Opendatasoft a contact&eacute; Ceres, HubSpot &eacute;tait d&eacute;j&agrave; en place depuis plusieurs ann&eacute;es. Le CRM fonctionnait, les &eacute;quipes l&apos;utilisaient, mais il n&apos;y avait pas d&apos;administrateur d&eacute;di&eacute;. C&apos;&eacute;tait l&apos;&eacute;quipe marketing qui g&eacute;rait HubSpot en plus de ses missions principales, tant bien que mal. Les workflows &eacute;taient cr&eacute;&eacute;s &agrave; la vol&eacute;e sans documentation, les donn&eacute;es se d&eacute;gradaient lentement, et personne n&apos;avait le temps de s&apos;occuper de la maintenance, du nettoyage ou de l&apos;optimisation.</p>
                    <p>Le probl&egrave;me n&apos;&eacute;tait pas un CRM cass&eacute;. Le probl&egrave;me &eacute;tait un CRM sans pilote. Les int&eacute;grations tombaient en panne sans que personne ne s&apos;en rende compte avant que les commerciaux ne signalent des donn&eacute;es manquantes. Les nouveaux arrivants &eacute;taient form&eacute;s de mani&egrave;re informelle par leurs coll&egrave;gues, chacun d&eacute;veloppant ses propres habitudes. Les demandes de nouveaux workflows ou de rapports s&apos;accumulaient dans un backlog que personne n&apos;avait le temps de traiter.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Secteur", value: "SaaS Data" },
                      { label: "Equipe revenue", value: "30+ personnes" },
                      { label: "Pr\u00e9sence", value: "France & International" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 : Le besoin */}
              <section id="besoin" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le besoin</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Opendatasoft n&apos;avait pas besoin d&apos;un projet one-shot. Pas d&apos;un audit ponctuel, pas d&apos;une migration, pas d&apos;une refonte compl&egrave;te du CRM. Leur HubSpot fonctionnait. Ce qu&apos;il leur manquait, c&apos;&eacute;tait quelqu&apos;un pour s&apos;en occuper au quotidien.</p>
                    <p>Le besoin &eacute;tait clair : un HubSpot Admin externalis&eacute; qui assure la maintenance, cr&eacute;e les nouveaux workflows demand&eacute;s par les &eacute;quipes, r&eacute;pond aux questions des commerciaux et des marketeurs, surveille la qualit&eacute; des donn&eacute;es, et fait &eacute;voluer le CRM au rythme de l&apos;entreprise. Un partenaire qui conna&icirc;t leur instance comme s&apos;il &eacute;tait en interne, mais avec l&apos;expertise d&apos;un sp&eacute;cialiste HubSpot.</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { title: "Maintenance continue", desc: "Nettoyage des donn\u00e9es, d\u00e9duplication, archivage, monitoring des int\u00e9grations. Toutes les t\u00e2ches r\u00e9currentes qu\u2019aucune \u00e9quipe n\u2019a le temps de faire mais qui sont essentielles pour que le CRM reste fiable.", color: "#FF7A59" },
                      { title: "Nouveaux workflows \u00e0 la demande", desc: "Chaque mois, les \u00e9quipes marketing et sales ont besoin de 3 \u00e0 5 nouveaux workflows ou automatisations. Sans admin d\u00e9di\u00e9, ces demandes s\u2019accumulent pendant des semaines. Avec Ceres, elles sont impl\u00e9ment\u00e9es et document\u00e9es sous 48 heures.", color: "#4B5EFC" },
                      { title: "Support \u00e9quipe", desc: "Les commerciaux ont des questions sur HubSpot tous les jours. Comment cr\u00e9er une vue ? Pourquoi un contact n\u2019appara\u00eet pas dans ma liste ? Comment fonctionne cette s\u00e9quence ? Sans admin, ces questions restent sans r\u00e9ponse ou sont g\u00e9r\u00e9es par des non-sp\u00e9cialistes.", color: "#6C5CE7" },
                      { title: "Data quality", desc: "Les donn\u00e9es se d\u00e9gradent naturellement dans un CRM. Les doublons s\u2019accumulent, les propri\u00e9t\u00e9s deviennent incoh\u00e9rentes, les int\u00e9grations cr\u00e9ent des enregistrements incomplets. Sans surveillance active, la qualit\u00e9 des donn\u00e9es chute en quelques mois.", color: "#6D00CC" },
                      { title: "Reporting \u00e9volutif", desc: "Les besoins en reporting changent constamment. Nouveaux KPIs demand\u00e9s par le management, nouveaux segments \u00e0 suivre, nouvelles campagnes \u00e0 tracker. Les dashboards doivent \u00e9voluer avec l\u2019entreprise, pas rester fig\u00e9s apr\u00e8s un projet initial.", color: "#22C55E" },
                    ].map((d) => (
                      <div key={d.title} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={{ background: d.color }} />
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{d.title}</p>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Ce que fait un HubSpot Admin externalis\u00e9 */}
              <section id="admin-externalise" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Ce que fait un HubSpot Admin externalis&eacute;</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de d&eacute;tailler le travail r&eacute;alis&eacute; chez Opendatasoft, il est utile de comprendre pourquoi externaliser l&apos;administration HubSpot plut&ocirc;t que recruter un admin interne ou ne rien faire du tout. Les trois options ont des implications tr&egrave;s diff&eacute;rentes en termes de co&ucirc;t, de couverture et de qualit&eacute;.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Option 1 : Ne rien faire", desc: "C\u2019est ce que faisait Opendatasoft avant. Le CRM fonctionne, mais il se d\u00e9grade lentement. Les donn\u00e9es deviennent de moins en moins fiables, les workflows cassent sans que personne ne s\u2019en rende compte, les int\u00e9grations tombent en panne. Au bout de 12 \u00e0 18 mois, le CRM est tellement d\u00e9grad\u00e9 qu\u2019il faut un projet de refonte complet, bien plus co\u00fbteux qu\u2019une maintenance continue. Les \u00e9quipes perdent confiance dans l\u2019outil et reviennent aux spreadsheets.", color: "#EF4444", badge: "Risqu\u00e9" },
                      { title: "Option 2 : Recruter un admin interne", desc: "Un HubSpot Admin \u00e0 temps plein co\u00fbte entre 45K et 60K euros par an en France, charges comprises. C\u2019est une option viable pour les entreprises de plus de 200 personnes avec un HubSpot tr\u00e8s complexe. Mais pour une entreprise de la taille d\u2019Opendatasoft, c\u2019est un poste difficile \u00e0 pourvoir (profil rare), difficile \u00e0 manager (expertise tr\u00e8s sp\u00e9cifique), et difficile \u00e0 occuper \u00e0 temps plein (pas assez de volume pour justifier un CDI).", color: "#F59E0B", badge: "Co\u00fbteux" },
                      { title: "Option 3 : Externaliser avec Ceres", desc: "Un HubSpot Admin externalis\u00e9 co\u00fbte une fraction d\u2019un poste interne, avec une couverture plus large. L\u2019admin externe apporte l\u2019exp\u00e9rience accumul\u00e9e sur des dizaines d\u2019instances HubSpot diff\u00e9rentes, conna\u00eet les meilleures pratiques, les pi\u00e8ges \u00e0 \u00e9viter et les nouvelles fonctionnalit\u00e9s. Le volume est ajustable selon les besoins : certains mois n\u00e9cessitent plus de travail que d\u2019autres, et le contrat s\u2019adapte.", color: "#22C55E", badge: "Retenu" },
                    ].map((opt) => (
                      <div key={opt.title} className="rounded-xl border-l-[3px] bg-[#FAFAFA] p-4" style={{ borderColor: opt.color }}>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-[13px] font-semibold text-[#111]">{opt.title}</p>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white" style={{ background: opt.color }}>{opt.badge}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.65]">{opt.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] p-4">
                    <p className="text-[12px] font-semibold text-[#166534] mb-1">Le format retenu</p>
                    <p className="text-[11px] text-[#15803D] leading-[1.65]">Opendatasoft a opt&eacute; pour un contrat d&apos;administration HubSpot mensuel avec Ceres. Le p&eacute;rim&egrave;tre couvre la maintenance, les nouveaux workflows, le support &eacute;quipe, le reporting et l&apos;optimisation continue. Un canal Slack d&eacute;di&eacute; permet aux &eacute;quipes de soumettre leurs demandes en temps r&eacute;el, avec un engagement de r&eacute;ponse sous 4 heures ouvr&eacute;es.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Maintenance et hygi\u00e8ne CRM */}
              <section id="maintenance" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Maintenance et hygi&egrave;ne CRM</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La maintenance CRM est le travail invisible mais fondamental. C&apos;est ce qui fait la diff&eacute;rence entre un CRM dans lequel les &eacute;quipes ont confiance et un CRM que les commerciaux contournent parce que les donn&eacute;es ne sont pas fiables. Chez Opendatasoft, on a mis en place un programme de maintenance r&eacute;gulier qui couvre cinq dimensions cl&eacute;s.</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {maintenanceTasks.map((t) => (
                      <div key={t.title} className="rounded-xl border-l-[3px] bg-[#FAFAFA] p-4" style={{ borderColor: t.color }}>
                        <p className="text-[13px] font-semibold text-[#111] mb-2">{t.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.65]">{t.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { value: "3 200+", label: "Doublons trait\u00e9s en 12 mois", color: "#FF7A59" },
                      { value: "280\u2192160", label: "Propri\u00e9t\u00e9s (nettoy\u00e9es)", color: "#4B5EFC" },
                      { value: "95%", label: "Uptime int\u00e9grations", color: "#22C55E" },
                    ].map((m) => (
                      <div key={m.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[18px] font-bold" style={{ color: m.color }}>{m.value}</div>
                        <div className="text-[10px] text-[#999]">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Nouveaux workflows et automatisations */}
              <section id="workflows" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Nouveaux workflows et automatisations</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque mois, les &eacute;quipes d&apos;Opendatasoft soumettent en moyenne 3 &agrave; 5 demandes de nouveaux workflows ou d&apos;am&eacute;lioration de workflows existants. Les demandes arrivent via le canal Slack d&eacute;di&eacute;, sont prioris&eacute;es lors d&apos;un point hebdomadaire, et sont impl&eacute;ment&eacute;es sous 48 heures pour les demandes standards.</p>
                    <p>Chaque workflow cr&eacute;&eacute; est document&eacute; dans Notion avec sa logique, ses d&eacute;clencheurs, ses conditions et ses actions. Cela permet &agrave; n&apos;importe qui dans l&apos;&eacute;quipe de comprendre ce qui se passe et pourquoi, sans avoir &agrave; d&eacute;cortiquer la configuration HubSpot.</p>
                  </div>

                  <div className="mt-5 mb-5">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Exemples de workflows cr&eacute;&eacute;s</p>
                    <div className="space-y-3">
                      {workflowExamples.map((w) => (
                        <div key={w.title} className="rounded-xl border border-[#F2F2F2] p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: w.color }} />
                            <p className="text-[13px] font-semibold text-[#111]">{w.title}</p>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.6] ml-4">{w.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-4">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Processus de cr&eacute;ation</p>
                    <div className="space-y-2">
                      {[
                        { step: "01", title: "Demande", desc: "L\u2019\u00e9quipe soumet sa demande via Slack avec le contexte, l\u2019objectif et les crit\u00e8res de succ\u00e8s" },
                        { step: "02", title: "Sp\u00e9cification", desc: "Ceres r\u00e9dige une sp\u00e9cification technique avec la logique du workflow et la fait valider" },
                        { step: "03", title: "Impl\u00e9mentation", desc: "Le workflow est construit dans HubSpot, test\u00e9 sur un \u00e9chantillon r\u00e9duit et valid\u00e9" },
                        { step: "04", title: "Documentation", desc: "La documentation est cr\u00e9\u00e9e dans Notion : d\u00e9clencheurs, conditions, actions, cas limites" },
                        { step: "05", title: "Activation", desc: "Le workflow est activ\u00e9 en production et monitor\u00e9 pendant 48 heures pour valider le comportement" },
                      ].map((s) => (
                        <div key={s.step} className="flex gap-3 items-start">
                          <div className="w-7 h-7 rounded-lg bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[10px] font-bold shrink-0">{s.step}</div>
                          <div>
                            <p className="text-[12px] font-semibold text-[#111]">{s.title}</p>
                            <p className="text-[10px] text-[#777] leading-[1.6]">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { value: "40+", label: "Workflows cr\u00e9\u00e9s en 12 mois", color: "#4B5EFC" },
                      { value: "48h", label: "D\u00e9lai moyen d\u2019impl\u00e9mentation", color: "#FF7A59" },
                      { value: "100%", label: "Workflows document\u00e9s", color: "#22C55E" },
                    ].map((m) => (
                      <div key={m.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[18px] font-bold" style={{ color: m.color }}>{m.value}</div>
                        <div className="text-[10px] text-[#999]">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Support \u00e9quipe au quotidien */}
              <section id="support" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Support &eacute;quipe au quotidien</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;un des aspects les plus concrets du r&ocirc;le de HubSpot Admin externalis&eacute;, c&apos;est le support au quotidien. Les &eacute;quipes d&apos;Opendatasoft ont un canal Slack d&eacute;di&eacute; o&ugrave; elles peuvent poser n&apos;importe quelle question li&eacute;e &agrave; HubSpot et obtenir une r&eacute;ponse en moins de 4 heures ouvr&eacute;es.</p>
                    <p>Ce support couvre trois grands axes : r&eacute;pondre aux questions des utilisateurs, d&eacute;bloquer les probl&egrave;mes techniques, et former les nouveaux arrivants.</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Questions utilisateurs", desc: "Les commerciaux et les marketeurs posent en moyenne 15 \u00e0 20 questions par mois via Slack. Comment filtrer une vue ? Pourquoi un contact est dans cette liste ? Comment personnaliser un template ? Chaque r\u00e9ponse est une occasion de former l\u2019\u00e9quipe et d\u2019am\u00e9liorer les processus. Les questions r\u00e9currentes sont transform\u00e9es en articles de FAQ dans Notion." },
                      { title: "Probl\u00e8mes techniques", desc: "Une int\u00e9gration qui ne sync plus, un workflow qui se d\u00e9clenche de mani\u00e8re inattendue, un rapport qui affiche des chiffres incoh\u00e9rents. Ceres diagnostique le probl\u00e8me, le corrige et met en place des mesures pr\u00e9ventives pour qu\u2019il ne se reproduise pas. Le temps moyen de r\u00e9solution est inf\u00e9rieur \u00e0 4 heures." },
                      { title: "Onboarding nouveaux arrivants", desc: "Chaque nouveau collaborateur qui doit utiliser HubSpot b\u00e9n\u00e9ficie d\u2019une session d\u2019onboarding personnalis\u00e9e de 45 minutes. La session couvre les bases de la navigation, les processus sp\u00e9cifiques \u00e0 son r\u00f4le, et les bonnes pratiques de saisie des donn\u00e9es. Un guide de d\u00e9marrage rapide dans Notion compl\u00e8te la formation." },
                      { title: "Sessions de formation continues", desc: "Au-del\u00e0 de l\u2019onboarding, Ceres organise une session de formation mensuelle de 30 minutes sur un sujet sp\u00e9cifique : nouvelles fonctionnalit\u00e9s HubSpot, meilleures pratiques de prospection dans le CRM, utilisation avanc\u00e9e des filtres et des vues, ou rappels sur la qualit\u00e9 des donn\u00e9es. La participation est ouverte \u00e0 toute l\u2019\u00e9quipe." },
                      { title: "Escalade et coordination", desc: "Quand un probl\u00e8me d\u00e9passe le p\u00e9rim\u00e8tre d\u2019administration (bug HubSpot, limitation de l\u2019outil, besoin d\u2019un d\u00e9veloppement sp\u00e9cifique), Ceres prend en charge l\u2019escalade vers le support HubSpot ou coordonne avec les \u00e9quipes techniques d\u2019Opendatasoft pour trouver une solution." },
                      { title: "Changelog et communication", desc: "Chaque modification apport\u00e9e \u00e0 HubSpot est document\u00e9e dans un changelog partag\u00e9. Les changements importants font l\u2019objet d\u2019une communication Slack d\u00e9di\u00e9e pour que les \u00e9quipes soient inform\u00e9es. Pas de surprise : tout le monde sait ce qui a chang\u00e9 et pourquoi." },
                    ].map((f) => (
                      <div key={f.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{f.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{f.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { value: "< 4h", label: "Temps de r\u00e9ponse moyen", color: "#4B5EFC" },
                      { value: "200+", label: "Demandes trait\u00e9es en 12 mois", color: "#FF7A59" },
                      { value: "12", label: "Onboardings r\u00e9alis\u00e9s", color: "#22C55E" },
                    ].map((m) => (
                      <div key={m.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[18px] font-bold" style={{ color: m.color }}>{m.value}</div>
                        <div className="text-[10px] text-[#999]">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Reporting et dashboards */}
              <section id="reporting" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Reporting et dashboards</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le reporting est un chantier permanent. Chez Opendatasoft, les besoins en dashboards &eacute;voluent en continu : nouvelle campagne &agrave; tracker, nouveau segment &agrave; suivre, nouveau KPI demand&eacute; par le management. Ceres g&egrave;re la cr&eacute;ation et la maintenance de l&apos;ensemble des rapports et dashboards HubSpot, ainsi que le monitoring de la qualit&eacute; des donn&eacute;es qui les alimentent.</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { title: "Dashboard Pipeline", desc: "Vue temps r\u00e9el du pipeline commercial : valeur totale, nombre de deals par stage, taux de conversion inter-stages, deals \u00e0 risque (sans activit\u00e9 depuis 10 jours), forecast bas\u00e9 sur les probabilit\u00e9s par stage. Filtrable par commercial, par segment (public/priv\u00e9) et par r\u00e9gion. Le management l\u2019ouvre chaque matin.", color: "#4B5EFC" },
                      { title: "Dashboard Activit\u00e9 Commerciale", desc: "Suivi de l\u2019activit\u00e9 quotidienne de chaque commercial : appels pass\u00e9s, emails envoy\u00e9s, meetings planifi\u00e9s, deals cr\u00e9\u00e9s. Comparaison avec les objectifs individuels et la moyenne de l\u2019\u00e9quipe. Ce dashboard a permis d\u2019identifier des \u00e9carts d\u2019activit\u00e9 et de mettre en place un coaching cibl\u00e9.", color: "#FF7A59" },
                      { title: "Dashboard Marketing Performance", desc: "Attribution des leads et du pipeline aux campagnes marketing : performance par canal (organic, paid, events, outbound, partenaires), par contenu et par campagne. Taux de conversion MQL vers SQL et SQL vers Closed Won par source. Le marketing utilise ce dashboard pour arbitrer ses investissements.", color: "#6C5CE7" },
                      { title: "Dashboard Data Quality", desc: "Score de qualit\u00e9 global de la base de donn\u00e9es, calcul\u00e9 sur la compl\u00e9tude des propri\u00e9t\u00e9s cl\u00e9s, le taux de doublons, le nombre de contacts sans owner et de deals sans montant. Alerte automatique quand le score descend sous 80. Ce dashboard est la boussole de la maintenance : il d\u00e9termine les priorit\u00e9s de nettoyage chaque mois.", color: "#22C55E" },
                      { title: "Rapports ad hoc", desc: "En plus des dashboards permanents, Ceres cr\u00e9e des rapports \u00e0 la demande : analyse de cohorte pour le renouvellement, segmentation du parc client par taille et par verticale, \u00e9tude de la vitesse de closing par segment. En moyenne 2 \u00e0 3 rapports ad hoc par mois, livr\u00e9s sous 24 heures.", color: "#D4A27F" },
                    ].map((d) => (
                      <div key={d.title} className="rounded-xl border-l-[3px] bg-[#FAFAFA] p-4" style={{ borderColor: d.color }}>
                        <p className="text-[13px] font-semibold text-[#111] mb-2">{d.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.65]">{d.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">La stack utilis&eacute;e</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {stack.map((t) => (
                        <div key={t.name} className="flex items-center gap-2 rounded-xl border border-[#F2F2F2] p-2.5">
                          <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`} alt={t.name} className="w-4 h-4" />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">{t.name}</p>
                            <p className="text-[9px] text-[#999] leading-tight">{t.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Optimisation continue */}
              <section id="optimisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Optimisation continue</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Au-del&agrave; de la maintenance et du support, le r&ocirc;le d&apos;un HubSpot Admin externalis&eacute; inclut une dimension d&apos;am&eacute;lioration continue. HubSpot &eacute;volue constamment avec de nouvelles fonctionnalit&eacute;s, et les processus de l&apos;entreprise changent au fil du temps. L&apos;objectif est que le CRM reste toujours align&eacute; avec les besoins r&eacute;els des &eacute;quipes et exploite pleinement les capacit&eacute;s de la plateforme.</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { title: "Audit trimestriel", desc: "Tous les trois mois, Ceres r\u00e9alise un audit structur\u00e9 de l\u2019instance HubSpot : performance des workflows (taux d\u2019enr\u00f4lement, taux de compl\u00e9tion, erreurs), utilisation des fonctionnalit\u00e9s par les \u00e9quipes, \u00e9volution du data quality score, et benchmark par rapport aux meilleures pratiques. L\u2019audit produit un rapport avec des recommandations prioris\u00e9es, dont 80% sont impl\u00e9ment\u00e9es dans le trimestre suivant.", color: "#4B5EFC" },
                      { title: "Recommandations d\u2019am\u00e9lioration", desc: "Les recommandations couvrent des sujets vari\u00e9s : simplification de workflows trop complexes, consolidation de listes redondantes, ajout de propri\u00e9t\u00e9s manquantes pour am\u00e9liorer la segmentation, mise en place de nouvelles automatisations pour r\u00e9duire le travail manuel. Chaque recommandation est chiffr\u00e9e en impact et en effort pour faciliter la priorisation.", color: "#FF7A59" },
                      { title: "Veille fonctionnalit\u00e9s HubSpot", desc: "HubSpot lance des dizaines de nouvelles fonctionnalit\u00e9s chaque trimestre. Ceres fait le tri entre ce qui est pertinent pour Opendatasoft et ce qui ne l\u2019est pas. Quand une nouvelle fonctionnalit\u00e9 peut apporter de la valeur, Ceres la teste, la configure et la d\u00e9ploie. Par exemple, l\u2019adoption des Playbooks HubSpot pour standardiser les appels de qualification, ou l\u2019utilisation des Custom Objects pour tracker les POC clients.", color: "#6C5CE7" },
                      { title: "A/B testing workflows", desc: "Les workflows cl\u00e9s sont r\u00e9guli\u00e8rement test\u00e9s pour optimiser leur performance. On teste diff\u00e9rentes variantes de s\u00e9quences de nurturing (ordre des emails, d\u00e9lais, contenu), diff\u00e9rentes r\u00e8gles de routage des leads, ou diff\u00e9rents seuils de scoring. Chaque test est document\u00e9 avec l\u2019hypoth\u00e8se, la m\u00e9thodologie et les r\u00e9sultats. Les variantes gagnantes sont d\u00e9ploy\u00e9es en production.", color: "#6D00CC" },
                      { title: "Revue strat\u00e9gique mensuelle", desc: "Un point mensuel de 45 minutes avec le Head of Marketing et le Sales Director pour passer en revue les m\u00e9triques cl\u00e9s, les actions r\u00e9alis\u00e9es dans le mois, les probl\u00e8mes rencontr\u00e9s et les priorit\u00e9s du mois suivant. Ce rendez-vous garantit l\u2019alignement entre les besoins des \u00e9quipes et le travail d\u2019administration.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: item.color }} />
                          <p className="text-[13px] font-semibold text-[#111]">{item.title}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6] ml-4">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] p-4">
                    <p className="text-[12px] font-semibold text-[#1E40AF] mb-1">L&apos;effet compos&eacute;</p>
                    <p className="text-[11px] text-[#1D4ED8] leading-[1.65]">L&apos;optimisation continue produit un effet compos&eacute;. Chaque trimestre, les workflows sont un peu plus performants, les donn&eacute;es un peu plus propres, les processus un peu plus fluides. Apr&egrave;s 12 mois, le HubSpot d&apos;Opendatasoft n&apos;a plus rien &agrave; voir avec celui du d&eacute;but de la mission. Le CRM est devenu un outil que les &eacute;quipes aiment utiliser parce qu&apos;il fonctionne, qu&apos;il est fiable et qu&apos;il leur fait gagner du temps.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 : Les r\u00e9sultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">R&eacute;sultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les r&eacute;sultats apr&egrave;s 12 mois</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "95%", label: "Uptime des int\u00e9grations", color: "#22C55E" },
                      { value: "40+", label: "Workflows cr\u00e9\u00e9s et document\u00e9s", color: "#4B5EFC" },
                      { value: "< 4h", label: "Temps de r\u00e9solution moyen", color: "#6C5CE7" },
                      { value: "85+", label: "Data quality score (sur 100)", color: "#FF7A59" },
                      { value: "200+", label: "Demandes support trait\u00e9es", color: "#D4A27F" },
                      { value: "12", label: "Onboardings nouveaux arrivants", color: "#22C55E" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Le CRM est maintenu propre et fiable en continu, sans effort de la part des \u00e9quipes internes",
                      "Les \u00e9quipes obtiennent les workflows et rapports dont elles ont besoin sous 48 heures",
                      "Les nouveaux arrivants sont op\u00e9rationnels sur HubSpot d\u00e8s leur premi\u00e8re semaine",
                      "Les int\u00e9grations fonctionnent de mani\u00e8re stable avec un monitoring proactif",
                      "Le data quality score est pass\u00e9 de 62 \u00e0 85+ en 12 mois",
                      "Les doublons sont trait\u00e9s chaque mois au lieu de s\u2019accumuler pendant des trimestres",
                      "Le management a des dashboards fiables et \u00e0 jour pour piloter l\u2019activit\u00e9 commerciale",
                      "L\u2019\u00e9quipe marketing n\u2019a plus \u00e0 g\u00e9rer HubSpot et peut se concentrer sur ses missions principales",
                    ].map((r) => (
                      <p key={r} className="text-[11px] text-white/50 flex items-start gap-2">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {r}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 : T\u00e9moignage */}
              <section id="temoignage" className="mb-8">
                <div className="rounded-2xl border-2 border-[#4B5EFC]/20 bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(75,94,252,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[14px] font-bold shrink-0">M</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;Avant Ceres, on faisait tous un peu d&apos;admin HubSpot en plus de nos missions, et le r&eacute;sultat c&apos;&eacute;tait que personne ne le faisait vraiment bien. Les workflows cassaient, les donn&eacute;es se d&eacute;gradaient, et chaque demande de rapport prenait des semaines parce que personne n&apos;avait le temps. Depuis qu&apos;on a externalis&eacute; l&apos;administration avec Ceres, c&apos;est devenu transparent. On envoie une demande sur Slack, c&apos;est fait dans les 48 heures, document&eacute;. Quand un nouveau commercial arrive, il est form&eacute; d&egrave;s la premi&egrave;re semaine. Quand une int&eacute;gration plante, c&apos;est r&eacute;par&eacute; avant m&ecirc;me qu&apos;on s&apos;en rende compte. Le plus gros changement, c&apos;est la confiance. Aujourd&apos;hui, quand un commercial ouvre HubSpot, il sait que les donn&eacute;es sont &agrave; jour et fiables. Et moi, je peux enfin me concentrer sur le marketing au lieu de g&eacute;rer des probl&egrave;mes CRM.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Marine</p>
                          <p className="text-[11px] text-[#999]">Head of Marketing, Opendatasoft</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=opendatasoft.com&sz=32" alt="Opendatasoft" className="w-5 h-5 rounded ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;un HubSpot Admin externalis&eacute; ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">R&eacute;servez un appel d&eacute;couverte de 30 minutes. On analyse votre situation et on vous dit si on peut vous aider.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />R&eacute;server un appel
                  </a>
                  <Link href="/cas-clients" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Voir les autres cas clients
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
