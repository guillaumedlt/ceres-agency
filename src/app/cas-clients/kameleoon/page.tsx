"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Kameleoon : Audit RevOps & Migration HubSpot avec Ceres",
  description: "Comment Kameleoon a transforme ses operations commerciales grace a un audit RevOps complet et une migration vers HubSpot. Score audit 25 a 78, +55% pipeline visibility, 90%+ adoption CRM.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-26",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "defis", title: "Les defis" },
  { id: "audit", title: "L\u2019audit RevOps" },
  { id: "processus", title: "Restructuration des processus" },
  { id: "migration", title: "Migration vers HubSpot" },
  { id: "configuration", title: "Configuration HubSpot" },
  { id: "reporting", title: "Reporting et dashboards" },
  { id: "formation", title: "Formation et adoption" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Temoignage" },
];

const stack = [
  { name: "HubSpot", domain: "hubspot.com", role: "CRM, Marketing Hub, Sales Hub, Ops Hub", color: "#FF7A59" },
  { name: "Notion", domain: "notion.so", role: "Playbooks, documentation, SLA", color: "#111" },
  { name: "Slack", domain: "slack.com", role: "Notifications, alertes pipeline", color: "#E01E5A" },
  { name: "Make", domain: "make.com", role: "Automatisation, migration, sync", color: "#6D00CC" },
  { name: "Google Sheets", domain: "google.com", role: "Data mapping, audit scoring", color: "#0F9D58" },
  { name: "Salesforce", domain: "salesforce.com", role: "CRM source (migration)", color: "#00A1E0" },
];

const timeline = [
  { phase: "Phase 1", weeks: "Semaines 1-3", title: "Audit & Diagnostic", items: ["Audit RevOps 80 points", "Interviews equipes marketing, sales, CS", "Cartographie des processus existants", "Score initial et recommandations"], color: "#FF7A59" },
  { phase: "Phase 2", weeks: "Semaines 4-7", title: "Processus & Migration", items: ["Definition MQL/SQL et SLA", "Lead scoring fit + engagement", "Migration CRM vers HubSpot", "Nettoyage et mapping des donnees"], color: "#4B5EFC" },
  { phase: "Phase 3", weeks: "Semaines 8-11", title: "Configuration & Automatisation", items: ["Pipelines par BU et region", "20+ workflows automatises", "Sequences de prospection", "Integrations stack existante"], color: "#6D00CC" },
  { phase: "Phase 4", weeks: "Semaines 12-14", title: "Reporting & Adoption", items: ["5 dashboards operationnels", "Formation par vagues", "Playbooks et documentation", "Change management et suivi"], color: "#22C55E" },
];

const auditCategories = [
  { category: "CRM & Data", score: 18, max: 100, details: "Donnees non structurees, doublons massifs, pas de naming convention, proprietes inutilisees", color: "#FF7A59" },
  { category: "Processus Sales", score: 22, max: 100, details: "Pas de pipeline defini, qualification orale, pas de criteres de passage de stage", color: "#4B5EFC" },
  { category: "Marketing Ops", score: 30, max: 100, details: "Lead gen en place mais pas de scoring, pas de lifecycle stages, attribution manuelle", color: "#6C5CE7" },
  { category: "Alignement Rev", score: 15, max: 100, details: "Aucun SLA, pas de definition commune MQL/SQL, meetings ad hoc, pas de revue pipeline", color: "#6D00CC" },
  { category: "Reporting", score: 20, max: 100, details: "Reporting 100% manuel sur spreadsheets, pas de dashboards, forecast au doigt mouille", color: "#22C55E" },
  { category: "Tech & Integrations", score: 35, max: 100, details: "Outils en silo, pas de sync CRM-marketing, integrations manuelles via export CSV", color: "#D4A27F" },
];

export default function KameleoonCaseStudy() {
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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "88%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <img src="https://www.google.com/s2/favicons?domain=kameleoon.com&sz=32" alt="Kameleoon" className="w-5 h-5 rounded" />
                <span className="text-[12px] font-semibold text-[#111]">Kameleoon</span>
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
              <span className="text-[#666]">Kameleoon</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">14 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=kameleoon.com&sz=64" alt="Kameleoon" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Kameleoon</h1>
                  <p className="text-[12px] text-[#999]">SaaS A/B Testing & Personnalisation | 200+ personnes | International</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Comment Kameleoon a restructure l&apos;ensemble de ses operations commerciales grace a un audit RevOps complet et une migration vers HubSpot. De l&apos;analyse des dysfonctionnements a la mise en production d&apos;un CRM adopte par 90% des equipes en 14 semaines.
              </p>

              {/* Results banner */}
              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "25\u219278", label: "Score audit RevOps", color: "#22C55E" },
                    { value: "+55%", label: "Pipeline visibility", color: "#4B5EFC" },
                    { value: "90%+", label: "Adoption CRM", color: "#6C5CE7" },
                    { value: "14 sem", label: "Time to value", color: "#FF7A59" },
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
              {/* Contexte */}
              <section id="contexte" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le contexte</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Kameleoon est une plateforme SaaS d&apos;A/B testing et de personnalisation web qui permet aux entreprises d&apos;optimiser l&apos;experience utilisateur de leurs sites et applications. Fondee en France, l&apos;entreprise compte plus de 200 collaborateurs et opere a l&apos;international avec des bureaux en Europe et en Amerique du Nord. Ses clients sont des grands comptes et des ETI dans le e-commerce, la finance, les medias et le travel.</p>
                    <p>Quand Kameleoon a fait appel a Ceres, l&apos;entreprise etait en pleine phase de croissance. L&apos;equipe commerciale avait triple en deux ans, mais les processus n&apos;avaient pas suivi. Le CRM en place etait sous-exploite, utilise de maniere heterogene selon les equipes et les regions. Il n&apos;existait aucune couche RevOps pour structurer les operations et aligner les equipes marketing, sales et customer success.</p>
                    <p>L&apos;objectif etait double : realiser un audit complet des operations revenue pour identifier les dysfonctionnements, puis migrer vers HubSpot en mettant en place les processus, les automatisations et le reporting necessaires pour supporter la croissance de Kameleoon.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Secteur", value: "SaaS MarTech" },
                      { label: "Equipe revenue", value: "40+ personnes" },
                      { label: "Presence", value: "Europe & Amerique du Nord" },
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

              {/* Defis */}
              <section id="defis" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les defis identifies</h2>
                  <div className="space-y-3">
                    {[
                      { title: "Silos marketing-sales", desc: "Le marketing et les sales fonctionnaient en silo complet. Pas de definition commune de ce qu\u2019est un lead qualifie, pas de processus de handoff, pas de feedback loop. Le marketing generait des leads que les sales ne traitaient pas ou trop tard. Chaque equipe avait ses propres metriques et ses propres outils, sans aucune visibilite croisee.", color: "#FF7A59" },
                      { title: "CRM sous-exploite et mal structure", desc: "Le CRM existant avait ete deploye sans strategie. Des centaines de proprietes inutilisees, des pipelines differents selon les equipes, pas de naming convention, des doublons massifs dans la base de contacts. Certains commerciaux n\u2019utilisaient meme plus le CRM et geaient leurs deals sur des spreadsheets personnels.", color: "#4B5EFC" },
                      { title: "Pas de lead scoring", desc: "Tous les leads etaient traites de la meme maniere, qu\u2019il s\u2019agisse d\u2019un stagiaire qui telecharge un livre blanc ou d\u2019un VP Marketing d\u2019un grand compte qui demande une demo. Aucun mecanisme pour prioriser les leads selon leur profil (fit) ou leur niveau d\u2019engagement.", color: "#6C5CE7" },
                      { title: "Reporting 100% manuel", desc: "Chaque lundi matin, le directeur commercial passait 2 heures a compiler des donnees depuis le CRM, des spreadsheets et des emails pour construire un reporting pipeline. Les chiffres etaient souvent incoherents d\u2019une semaine a l\u2019autre. Le forecast etait une estimation au doigt mouille.", color: "#6D00CC" },
                      { title: "Pas de processus de qualification", desc: "Il n\u2019existait aucun framework de qualification standardise. Chaque commercial avait sa propre methode pour evaluer un prospect. Les criteres de passage d\u2019un stage a l\u2019autre dans le pipeline n\u2019etaient pas definis. Resultat : des deals qui stagnaient pendant des mois sans que personne ne sache pourquoi.", color: "#22C55E" },
                      { title: "Croissance internationale non supportee", desc: "Kameleoon operait en France, en Allemagne, au UK et aux US, mais le CRM ne refletait pas cette realite. Pas de segmentation par region, pas de pipeline par business unit, pas de reporting par marche. Impossible de comparer les performances entre les equipes.", color: "#D4A27F" },
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

              {/* Audit RevOps */}
              <section id="audit" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;audit RevOps : framework 80 points</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a commence par un audit RevOps complet base sur notre framework proprietaire de 80 points d&apos;evaluation. Ce framework couvre 6 dimensions cles des operations revenue : CRM et data, processus sales, marketing ops, alignement revenue, reporting, et tech stack. Chaque dimension est evaluee sur 100 points avec des criteres objectifs et mesurables.</p>
                    <p>L&apos;audit a dure 2 semaines et a inclus des interviews individuelles avec 15 membres des equipes marketing, sales et customer success, une analyse technique du CRM existant, un audit de la stack d&apos;outils et un benchmark des processus par rapport aux meilleures pratiques du secteur SaaS.</p>
                  </div>

                  {/* Score global */}
                  <div className="mt-5 mb-5 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-4 text-center">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2">Score global initial</p>
                    <div className="text-[36px] font-bold text-[#FF7A59]">25<span className="text-[16px] text-[#999] font-normal">/100</span></div>
                    <p className="text-[11px] text-[#999] mt-1">Moyenne des 6 dimensions evaluees</p>
                  </div>

                  {/* Scores par categorie */}
                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider">Diagnostic par categorie</p>
                    {auditCategories.map((cat) => (
                      <div key={cat.category} className="rounded-xl border border-[#F2F2F2] p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{cat.category}</p>
                          <span className="text-[12px] font-bold" style={{ color: cat.color }}>{cat.score}/100</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#F2F2F2] mb-2">
                          <div className="h-full rounded-full transition-all" style={{ width: `${cat.score}%`, background: cat.color }} />
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{cat.details}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] p-4">
                    <p className="text-[12px] font-semibold text-[#9A3412] mb-1">Conclusion de l&apos;audit</p>
                    <p className="text-[11px] text-[#C2410C] leading-[1.65]">Le score de 25/100 revelait une organisation en forte croissance dont les operations n&apos;avaient pas ete structurees pour accompagner cette montee en charge. Les fondations etaient insuffisantes sur chaque dimension, mais le potentiel d&apos;amelioration etait considerable. Les recommandations couvraient 42 actions prioritaires reparties sur 14 semaines.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Restructuration des processus */}
              <section id="processus" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Restructuration des processus</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de toucher aux outils, on a redefini les processus fondamentaux. C&apos;est la couche invisible mais indispensable : sans processus clairs, meme le meilleur CRM du monde ne sert a rien.</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { title: "Definition MQL / SQL", desc: "On a travaille avec les equipes marketing et sales pour definir des criteres objectifs et mesurables. Un MQL chez Kameleoon, c\u2019est un contact qui correspond a l\u2019ICP (taille entreprise, secteur, poste) ET qui a montre un engagement significatif (demande de demo, participation a un webinar, visite pricing page). Un SQL, c\u2019est un MQL qui a ete qualifie par un SDR via un appel de decouverte avec les criteres BANT valides.", color: "#4B5EFC" },
                      { title: "SLA marketing-sales", desc: "Marketing s\u2019engage a livrer un volume minimum de MQL par mois et par region, avec un score de qualite minimum. Sales s\u2019engage a contacter chaque MQL en moins de 4 heures ouvrees et a effectuer au minimum 5 tentatives de contact avant de disqualifier. Chaque SLA est mesure automatiquement dans HubSpot et revu en hebdomadaire.", color: "#FF7A59" },
                      { title: "Lead scoring fit + engagement", desc: "Scoring sur 100 points divise en deux dimensions. Fit (50 points) : taille d\u2019entreprise, secteur d\u2019activite, poste du contact, region, stack techno actuelle. Engagement (50 points) : pages visitees, contenus telecharges, emails ouverts, participation events, interactions avec les ads. Seuil MQL fixe a 50 points, seuil prioritaire a 75 points.", color: "#6C5CE7" },
                      { title: "Framework de qualification", desc: "Adoption d\u2019un framework MEDDPICC adapte au cycle de vente de Kameleoon. Chaque deal doit documenter : Metrics (impact mesurable attendu), Economic Buyer (decideur identifie), Decision Process (processus et timeline), Decision Criteria (criteres de choix), Paper Process (processus achat), Identified Pain (douleur identifiee), Champion (sponsor interne), Competition (concurrents en lice).", color: "#6D00CC" },
                      { title: "Processus de revue pipeline", desc: "Mise en place d\u2019une revue pipeline hebdomadaire structuree. Chaque deal au-dessus de 15K euros est revue individuellement. Le format est standardise : etat actuel, prochaine etape, risques, besoin d\u2019aide. Les deals sans activite depuis 14 jours sont automatiquement flagges.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border-l-[3px] bg-[#FAFAFA] p-4" style={{ borderColor: item.color }}>
                        <p className="text-[13px] font-semibold text-[#111] mb-2">{item.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.65]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Migration vers HubSpot */}
              <section id="migration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Migration vers HubSpot</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La migration du CRM existant vers HubSpot a ete le chantier le plus technique du projet. Avec plus de 200 000 contacts, 8 000 entreprises et 3 ans d&apos;historique, il etait essentiel de structurer la migration methodiquement pour ne perdre aucune donnee critique tout en profitant de l&apos;occasion pour nettoyer la base.</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { step: "01", title: "Audit de la base existante", desc: "Analyse complete de la base de donnees source. Identification de 45 000 doublons (22% de la base), 120 proprietes inutilisees sur 180, et 30% de contacts sans adresse email valide. Cartographie des objets, des associations et des champs custom a migrer." },
                      { step: "02", title: "Data mapping et nettoyage", desc: "Definition d\u2019un mapping precis entre les proprietes source et les proprietes cibles dans HubSpot. Nettoyage en amont : deduplication, normalisation des donnees (format telephone, pays, secteur), suppression des contacts invalides. La base est passee de 200 000 a 132 000 contacts qualifies." },
                      { step: "03", title: "Restructuration du pipeline", desc: "Passage de 4 pipelines non standardises a 2 pipelines clairs : New Business et Expansion. Chaque pipeline a des stages definis avec des criteres de passage objectifs, des probabilites calibrees et des champs obligatoires. Les deals historiques ont ete reclassifies selon la nouvelle nomenclature." },
                      { step: "04", title: "Migration des donnees", desc: "Migration par lots via Make et l\u2019API HubSpot. Contacts et entreprises d\u2019abord, puis deals et activites. Chaque lot a ete valide manuellement par echantillonnage (5% des enregistrements verifies). Les associations entre objets ont ete preservees. L\u2019historique des emails et des notes a ete migre en totalite." },
                      { step: "05", title: "Validation et reconciliation", desc: "Post-migration, on a compare les chiffres source et cible pour chaque objet. Taux de reconciliation de 99.7%. Les 0.3% restants etaient des enregistrements corrompus dans la source. Validation fonctionnelle avec 5 utilisateurs pilotes pendant 1 semaine avant le go-live general." },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-[#FF7A59]/10 flex items-center justify-center text-[#FF7A59] text-[11px] font-bold shrink-0">{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { value: "132K", label: "Contacts migres (nettoyes)", color: "#FF7A59" },
                      { value: "99.7%", label: "Taux de reconciliation", color: "#22C55E" },
                      { value: "3 sem", label: "Duree de la migration", color: "#4B5EFC" },
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

              {/* Configuration HubSpot */}
              <section id="configuration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Configuration HubSpot : le socle operationnel</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une fois les donnees migrees, on a configure HubSpot pour supporter les processus definis en amont. L&apos;objectif etait de creer un socle operationnel complet qui couvre les besoins de chaque equipe tout en garantissant la coherence des donnees a l&apos;echelle de l&apos;organisation.</p>
                  </div>

                  {/* Stack */}
                  <div className="mt-5 mb-5">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">La stack deployee</p>
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

                  <div className="space-y-3">
                    {[
                      { title: "Pipelines par BU et region", desc: "2 pipelines principaux (New Business et Expansion) avec des vues filtrees par region (France, DACH, UK, US) et par business unit. Chaque pipeline a 6 stages avec des criteres de passage objectifs, des champs obligatoires par stage et des probabilites calibrees sur les donnees historiques." },
                      { title: "20+ workflows automatises", desc: "Attribution round-robin par region et par segment, notification Slack sur changement de stage, mise a jour automatique des lifecycle stages, creation de taches post-call, relance automatique devis a J+7 et J+14, scoring automatique, alerte manager sur deal a risque, sync bidirectionnel avec les outils marketing." },
                      { title: "Sequences de prospection", desc: "6 sequences de prospection adaptees par persona (Marketing Director, Product Manager, CTO) et par region. Chaque sequence comprend 5 a 7 etapes combinant email, LinkedIn et appel. Les templates sont personnalises par secteur d\u2019activite du prospect et par use case Kameleoon." },
                      { title: "Integrations", desc: "Connexion native avec l\u2019outil de marketing automation existant, sync Slack pour les alertes temps reel, integration calendrier pour la prise de RDV automatisee, connexion avec l\u2019outil de facturation pour le suivi du revenue, et webhook vers le data warehouse pour le reporting avance." },
                      { title: "Proprietes et objets custom", desc: "Creation de 25 proprietes custom alignees sur l\u2019ICP de Kameleoon : stack techno du prospect, volume de trafic web, outil d\u2019A/B testing actuel, maturite CRO, nombre de sites a optimiser. Mise en place d\u2019un objet custom pour tracker les POC (Proof of Concept) avec leur statut et leurs KPIs." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[13px] font-semibold text-[#111] mb-1">{item.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Plan de deploiement</p>
                    <div className="space-y-3">
                      {timeline.map((p) => (
                        <div key={p.phase} className="rounded-xl border-l-[3px] bg-[#FAFAFA] p-4" style={{ borderColor: p.color }}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold text-white px-1.5 py-0.5 rounded" style={{ background: p.color }}>{p.phase}</span>
                            <span className="text-[10px] text-[#999]">{p.weeks}</span>
                          </div>
                          <p className="text-[13px] font-semibold text-[#111] mb-2">{p.title}</p>
                          <div className="grid grid-cols-2 gap-1">
                            {p.items.map((item) => (
                              <p key={item} className="text-[11px] text-[#777] flex items-start gap-1.5">
                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" style={{ color: p.color }}><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Reporting et dashboards */}
              <section id="reporting" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Reporting et dashboards</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le reporting etait le point le plus douloureux avant l&apos;intervention de Ceres. Chaque metrique devait etre calculee manuellement, et les chiffres variaient selon qui les produisait. On a mis en place 5 dashboards HubSpot qui couvrent l&apos;ensemble des besoins operationnels et strategiques de Kameleoon.</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { title: "Dashboard Pipeline", desc: "Vue temps reel du pipeline par region, par BU et par commercial. Valeur totale, nombre de deals par stage, vitesse de progression, taux de conversion inter-stages, deals a risque (sans activite depuis 14j). Filtrable par periode, par segment et par taille de deal. C\u2019est le dashboard ouvert en permanence par le management.", color: "#4B5EFC" },
                      { title: "Dashboard Activite Commerciale", desc: "Suivi de l\u2019activite quotidienne de chaque commercial : nombre d\u2019appels, d\u2019emails envoyes, de meetings tenus, de deals crees et de deals gagnes. Comparaison par rapport aux objectifs individuels et aux moyennes de l\u2019equipe. Permet d\u2019identifier rapidement les ecarts de performance.", color: "#FF7A59" },
                      { title: "Dashboard Revenue", desc: "Suivi du revenue reconnu, du MRR, de l\u2019ARR et du churn par region et par segment. Evolution mois par mois avec comparaison N-1. Forecast base sur les probabilites par stage et sur la vitesse historique de closing. Le CFO l\u2019utilise pour le reporting au board.", color: "#22C55E" },
                      { title: "Dashboard Marketing Attribution", desc: "Attribution multi-touch des deals aux campagnes marketing. First touch, last touch et modele lineaire. Performance par canal (organic, paid, events, outbound), par campagne et par contenu. Permet au marketing de comprendre quel investissement genere du pipeline et du revenue.", color: "#6C5CE7" },
                      { title: "Dashboard Data Quality", desc: "Monitoring de la qualite des donnees en continu. Taux de completude des proprietes obligatoires, nombre de doublons detectes, contacts sans proprietaire, deals sans montant ou sans date de cloture. Score de qualite global avec alertes automatiques quand le score descend sous le seuil.", color: "#D4A27F" },
                    ].map((d) => (
                      <div key={d.title} className="rounded-xl border-l-[3px] bg-[#FAFAFA] p-4" style={{ borderColor: d.color }}>
                        <p className="text-[13px] font-semibold text-[#111] mb-2">{d.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.65]">{d.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Formation et adoption */}
              <section id="formation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Formation et adoption</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un CRM n&apos;a de valeur que si les equipes l&apos;utilisent correctement. L&apos;adoption est le facteur numero un d&apos;echec des projets CRM. Chez Kameleoon, on a mis en place une strategie d&apos;adoption progressive en 3 vagues, accompagnee de playbooks documentes et d&apos;un programme de change management.</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Vague 1 : Pilotes", desc: "5 utilisateurs pilotes (2 SDR, 2 AE, 1 manager) formes en premier pendant 1 semaine. Ils ont teste les processus, remonte les frictions et valide les workflows. Leurs retours ont permis d\u2019ajuster 12 points avant le deploiement general." },
                      { title: "Vague 2 : Equipe sales France", desc: "Formation de l\u2019ensemble de l\u2019equipe sales France (15 personnes) en 3 sessions de 2 heures. Session 1 : navigation et pipeline. Session 2 : workflows et sequences. Session 3 : reporting et dashboards. Support quotidien pendant 2 semaines apres le deploiement." },
                      { title: "Vague 3 : International", desc: "Deploiement aupres des equipes DACH, UK et US (25 personnes). Sessions adaptees aux specificites de chaque region (pipeline, sequences, proprietes). Formation asynchrone via des videos Loom enregistrees pour les fuseaux horaires decales." },
                      { title: "Playbooks Notion", desc: "Documentation complete dans Notion : playbook de qualification MEDDPICC, playbook de demo, guide d\u2019utilisation du CRM par role (SDR, AE, Manager, Marketing), procedures de saisie des donnees, FAQ. Mis a jour en continu par l\u2019equipe RevOps interne." },
                      { title: "Change management", desc: "Identification des champions dans chaque equipe. Communication reguliere sur les quick wins et les benefices concrets. Gamification de l\u2019adoption les 4 premieres semaines (classement de completude CRM). Accompagnement individuel des profils resistants au changement." },
                      { title: "Suivi post-deploiement", desc: "Monitoring de l\u2019adoption via le dashboard Data Quality : taux de connexion quotidien, completude des deals, respect des champs obligatoires. Points hebdomadaires avec les managers pendant 1 mois. Ajustements iteratifs basees sur les retours terrain." },
                    ].map((f) => (
                      <div key={f.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{f.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats apres 14 semaines</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "25\u219278", label: "Score audit RevOps (sur 100)", color: "#22C55E" },
                      { value: "+55%", label: "Pipeline visibility vs avant", color: "#4B5EFC" },
                      { value: "90%+", label: "Adoption CRM par les equipes", color: "#6C5CE7" },
                      { value: "20+", label: "Workflows actifs dans HubSpot", color: "#FF7A59" },
                      { value: "5", label: "Dashboards operationnels", color: "#D4A27F" },
                      { value: "132K", label: "Contacts migres et nettoyes", color: "#22C55E" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Le CRM est devenu la source unique de verite pour toutes les equipes revenue",
                      "L\u2019alignement marketing-sales est en place avec des SLA mesures et respectes",
                      "Le forecast est fiable et base sur des donnees reelles, plus sur des estimations",
                      "Le management a une visibilite temps reel sur le pipeline par region et par BU",
                      "Le reporting est 100% automatise, plus aucun spreadsheet manuel",
                      "Les processus sont documentes et reproductibles, independamment des personnes",
                      "La qualite des donnees est monitoree en continu avec des alertes proactives",
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

              {/* Temoignage */}
              <section id="temoignage" className="mb-8">
                <div className="rounded-2xl border-2 border-[#4B5EFC]/20 bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(75,94,252,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[14px] font-bold shrink-0">S</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;On savait qu&apos;on avait un probleme d&apos;operations, mais on ne mesurait pas l&apos;ampleur du chantier avant l&apos;audit de Ceres. Le score de 25/100 a ete un electrochoc pour toute l&apos;equipe de direction. En 14 semaines, Ceres a repris les fondations de A a Z : les processus, la migration CRM, les automatisations et le reporting. Aujourd&apos;hui, chaque commercial sait exactement ou il en est dans son pipeline, le marketing a de la visibilite sur la conversion de ses leads et le management prend des decisions basees sur des donnees fiables. Le taux d&apos;adoption de 90% des la premiere semaine post-deploiement montre que le travail sur le change management a paye. C&apos;est probablement le projet le plus structurant qu&apos;on ait mene ces deux dernieres annees.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Sarah</p>
                          <p className="text-[11px] text-[#999]">VP Revenue Operations, Kameleoon</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=kameleoon.com&sz=32" alt="Kameleoon" className="w-5 h-5 rounded ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous voulez les memes resultats ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">Reservez un appel decouverte de 30 minutes. On analyse votre situation et on vous dit si on peut vous aider.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/audit-revops" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Demander un audit
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
