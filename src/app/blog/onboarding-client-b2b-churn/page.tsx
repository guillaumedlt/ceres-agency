"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Onboarding client B2B : reduire le churn des les 30 premiers jours",
  description: "Guide complet pour structurer l&apos;onboarding client B2B : time to first value, milestones, health scoring, detection des red flags, automatisation HubSpot et mesure du succes.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/onboarding-client-b2b-churn" },
  articleSection: "RevOps",
  wordCount: 3200,
  inLanguage: "fr",
};

const sections = [
  { id: "why-onboarding", title: "Pourquoi l\u2019onboarding" },
  { id: "time-to-first-value", title: "Time to first value" },
  { id: "onboarding-framework", title: "Framework onboarding" },
  { id: "milestone-definition", title: "Definition des milestones" },
  { id: "automation-playbook", title: "Playbook automatise" },
  { id: "health-scoring", title: "Health scoring" },
  { id: "red-flag-detection", title: "Detection des red flags" },
  { id: "hubspot-implementation", title: "Implementation HubSpot" },
  { id: "measuring-success", title: "Mesurer le succes" },
  { id: "best-practices", title: "Bonnes pratiques" },
];

const relatedArticles = [
  { title: "Metriques RevOps : les indicateurs de performance", slug: "metriques-revops-indicateurs-performance", category: "RevOps", color: "#FF7A59" },
  { title: "SLA marketing-sales : template et methode", slug: "sla-marketing-sales-template", category: "RevOps", color: "#22C55E" },
  { title: "Marketing Automation : 7 workflows HubSpot indispensables", slug: "marketing-automation-7-workflows-hubspot", category: "Automatisation", color: "#6C5CE7" },
];

export default function OnboardingClientB2BChurnPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("why-onboarding");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));

      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#22C55E] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Decorative blobs */}
      <div className="hidden lg:block absolute top-[120px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#22C55E]/5 blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[600px] right-[-250px] w-[400px] h-[400px] rounded-full bg-[#4B5EFC]/5 blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[1200px] left-[-150px] w-[350px] h-[350px] rounded-full bg-[#FF7A59]/5 blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[1800px] right-[-200px] w-[450px] h-[450px] rounded-full bg-[#22C55E]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${
                      activeSection === s.id
                        ? "border-[#22C55E] text-[#111] font-medium"
                        : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-[#F2F2F2]">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Partager</p>
                <div className="flex gap-2">
                  <a href="https://twitter.com/intent/tweet?text=Onboarding%20client%20B2B%20reduire%20churn&url=https://ceres.agency/blog/onboarding-client-b2b-churn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/onboarding-client-b2b-churn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Article */}
          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span>
              <span className="text-[#666]">Onboarding client B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">22 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Onboarding client B2B : reduire le churn des les 30 premiers jours
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                En B2B SaaS, 67% du churn se decide pendant les 90 premiers jours. L&apos;onboarding n&apos;est pas une formalite administrative mais le moment ou vous prouvez la valeur de votre produit. Ce guide couvre le framework complet : du time to first value aux health scores, en passant par les playbooks automatises, la detection des red flags et l&apos;implementation concrete dans HubSpot.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>29 mars 2026</span>
              </div>
            </header>

            <article>
              {/* ================================================================ */}
              {/* Section 1 : Pourquoi l'onboarding */}
              {/* ================================================================ */}
              <section id="why-onboarding" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi l&apos;onboarding determine le churn</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;onboarding client B2B est la periode qui s&apos;etend de la signature du contrat au moment ou le client utilise activement votre produit et en tire une valeur concrete. C&apos;est la phase la plus critique de la relation client car elle conditionne tout ce qui suit : adoption, satisfaction, expansion et retention.</p>
                    <p><strong className="text-[#111]">Les chiffres du churn lie a l&apos;onboarding.</strong> Selon une etude de Gainsight portant sur 500 entreprises SaaS B2B, 23% des clients qui churnent le font dans les 90 premiers jours. Plus revelateur encore, 67% des clients qui finissent par churner montrent des signes de desengagement des les 30 premiers jours. En d&apos;autres termes, si vous n&apos;avez pas reussi a prouver la valeur de votre produit dans le premier mois, la probabilite de retention chute drastiquement.</p>
                    <p><strong className="text-[#111]">Le cout du churn evitable.</strong> Pour une entreprise SaaS B2B avec un ACV (Annual Contract Value) de 15 000 EUR et un taux de churn de 12%, chaque point de churn evite represente un gain direct de 180 000 EUR de revenu annuel recurrent pour 100 clients. Quand on sait qu&apos;un onboarding structure peut reduire le churn de 3 a 5 points, l&apos;investissement dans un programme d&apos;onboarding se rentabilise en quelques mois.</p>
                    <p><strong className="text-[#111]">L&apos;onboarding comme levier d&apos;expansion.</strong> Un client bien onboarde n&apos;est pas seulement un client retenu. C&apos;est un client qui adopte plus de fonctionnalites, qui achete des modules additionnels et qui recommande votre solution. Les donnees de Totango montrent que les clients qui atteignent leur premiere valeur en moins de 14 jours ont un taux d&apos;expansion 2,3 fois superieur a ceux qui mettent plus de 30 jours.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 2 : Time to first value */}
              {/* ================================================================ */}
              <section id="time-to-first-value" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Time to first value : la metrique qui change tout</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Time to First Value (TTFV) mesure le temps entre le moment ou un client signe et le moment ou il obtient son premier resultat concret avec votre produit. Ce n&apos;est pas le moment ou il se connecte pour la premiere fois, ni le moment ou il termine la configuration. C&apos;est le moment ou il se dit : &ldquo;ca fonctionne, j&apos;en tire de la valeur.&rdquo;</p>
                    <p><strong className="text-[#111]">Definir le &ldquo;first value&rdquo; pour votre produit.</strong> La premiere valeur depend de votre produit. Pour un CRM, c&apos;est le moment ou le commercial gere son premier deal dans le pipeline. Pour un outil d&apos;emailing, c&apos;est l&apos;envoi de la premiere campagne avec des resultats. Pour un outil d&apos;analytics, c&apos;est la generation du premier rapport actionnable. Vous devez definir clairement ce moment pour pouvoir le mesurer et l&apos;optimiser.</p>
                    <p><strong className="text-[#111]">Benchmarks par segment.</strong> En SaaS B2B self-service, le TTFV cible est inferieur a 24 heures. Pour les produits mid-market avec onboarding assiste, il est de 7 a 14 jours. Pour les solutions enterprise avec implementation complexe, il peut atteindre 30 a 60 jours. Quel que soit votre segment, l&apos;objectif est de reduire ce delai au maximum car chaque jour supplementaire augmente le risque de desengagement.</p>
                    <p><strong className="text-[#111]">Strategies pour reduire le TTFV.</strong> Premierement, simplifiez la configuration initiale en pre-remplissant les parametres par defaut et en proposant des templates preconfigures. Deuxiemement, concentrez l&apos;onboarding sur un seul use case plutot que de presenter toutes les fonctionnalites. Troisiemement, assignez un CSM dedie qui guide le client pas a pas vers sa premiere victoire. Quatriemement, automatisez les etapes techniques (import de donnees, integrations) pour eliminer les frictions.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "14j", label: "TTFV cible pour le mid-market B2B", color: "#22C55E" },
                      { stat: "2.3x", label: "taux d\u2019expansion si TTFV inf. a 14 jours", color: "#4B5EFC" },
                      { stat: "-67%", label: "de risque de churn avec un TTFV maitrise", color: "#FF7A59" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[22px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 3 : Framework onboarding */}
              {/* ================================================================ */}
              <section id="onboarding-framework" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le framework d&apos;onboarding en 4 phases</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un onboarding efficace suit un framework structure en 4 phases. Chaque phase a des objectifs clairs, des actions specifiques et des criteres de succes mesurables. Ce framework est adaptable a tout produit B2B, qu&apos;il soit self-service ou enterprise.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { phase: "Phase 1", nom: "Kickoff (Jour 0-3)", desc: "Appel de bienvenue, presentation de l\u2019equipe CS, definition des objectifs client, planification du calendrier d\u2019onboarding. Le client doit repartir avec une vision claire de ce qui va se passer et quand.", color: "#22C55E" },
                      { phase: "Phase 2", nom: "Setup (Jour 3-10)", desc: "Configuration technique du produit, import des donnees, integration avec les outils existants (CRM, email, ERP). L\u2019objectif est d\u2019avoir un environnement fonctionnel pret a l\u2019usage.", color: "#4B5EFC" },
                      { phase: "Phase 3", nom: "Activation (Jour 10-21)", desc: "Formation des utilisateurs cles, premier use case en production, accompagnement vers la premiere valeur. Le client doit obtenir son premier resultat concret pendant cette phase.", color: "#FF7A59" },
                      { phase: "Phase 4", nom: "Adoption (Jour 21-30)", desc: "Elargissement aux utilisateurs secondaires, exploration des fonctionnalites avancees, mise en place des automatisations. Le client est autonome et utilise le produit au quotidien.", color: "#6D00CC" },
                    ].map((p) => (
                      <div key={p.phase} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: p.color }}>{p.phase}</span>
                          <span className="text-[12px] font-semibold text-[#111]">{p.nom}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{p.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Adapter le framework a la complexite.</strong> Pour un produit self-service, compressez les 4 phases sur 7 jours avec une automatisation maximale. Pour un produit mid-market, suivez le calendrier de 30 jours ci-dessus. Pour un produit enterprise, etendez a 60-90 jours mais conservez les 4 phases dans le meme ordre. Le principe fondamental reste le meme : guider le client vers sa premiere valeur le plus rapidement possible.</p>
                    <p><strong className="text-[#111]">Le role du CSM.</strong> Le Customer Success Manager est le chef d&apos;orchestre de l&apos;onboarding. Il planifie les sessions, coordonne les equipes techniques, suit l&apos;avancement des milestones et anticipe les blocages. Un ratio CSM/clients adapte est essentiel : 1:20 en enterprise, 1:50 en mid-market, et un modele tech-touch au-dela. Surcharger les CSM est la premiere cause d&apos;echec des programmes d&apos;onboarding.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 4 : Definition des milestones */}
              {/* ================================================================ */}
              <section id="milestone-definition" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Definir les milestones d&apos;onboarding</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les milestones sont les etapes cles que le client doit franchir pour considerer l&apos;onboarding comme reussi. Ils servent a la fois de guide pour le CSM, de checklist pour le client et de metriques pour l&apos;equipe RevOps. Chaque milestone doit etre binaire (atteint ou non), mesurable automatiquement si possible, et aligne avec la perception de valeur du client.</p>
                    <p><strong className="text-[#111]">Exemple de milestones pour un CRM B2B.</strong></p>
                  </div>

                  <div className="mt-4 space-y-2">
                    {[
                      { milestone: "Compte cree et parametrage initial termine", jour: "J+1", critique: true },
                      { milestone: "Import des contacts et entreprises existantes", jour: "J+3", critique: true },
                      { milestone: "Integration email connectee (Gmail ou Outlook)", jour: "J+5", critique: true },
                      { milestone: "Premier pipeline commercial configure", jour: "J+7", critique: true },
                      { milestone: "3 utilisateurs actifs avec connexion quotidienne", jour: "J+10", critique: false },
                      { milestone: "Premier deal deplace dans le pipeline", jour: "J+14", critique: true },
                      { milestone: "Premier rapport commercial genere", jour: "J+18", critique: false },
                      { milestone: "Premiere automatisation activee (email de suivi)", jour: "J+21", critique: false },
                      { milestone: "Formation de l\u2019equipe complete terminee", jour: "J+25", critique: true },
                      { milestone: "Premier deal ferme (closed-won) dans le CRM", jour: "J+30", critique: true },
                    ].map((m) => (
                      <div key={m.milestone} className="flex items-center gap-3 rounded-xl border border-[#F2F2F2] p-3">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${m.critique ? "bg-[#22C55E]" : "bg-[#DDD]"}`} />
                        <span className="text-[11px] font-semibold text-[#22C55E] w-10 shrink-0">{m.jour}</span>
                        <span className="text-[11px] text-[#555] flex-1">{m.milestone}</span>
                        {m.critique && <span className="text-[9px] font-bold text-[#FF7A59] uppercase">Critique</span>}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Milestones critiques vs optionnels.</strong> Identifiez les milestones qui sont des prerequis absolus pour la premiere valeur (critiques) et ceux qui enrichissent l&apos;experience mais ne sont pas bloquants (optionnels). Si un client bloque sur un milestone critique pendant plus de 48 heures, c&apos;est un red flag qui declenche une intervention du CSM. Les milestones optionnels sont des objectifs d&apos;adoption progressive qui se traitent apres les 30 premiers jours.</p>
                    <p><strong className="text-[#111]">Personnaliser les milestones par segment.</strong> Un client enterprise avec 50 utilisateurs n&apos;a pas les memes milestones qu&apos;une PME avec 3 utilisateurs. Creez des templates de milestones par taille de client, par secteur ou par use case principal. Dans HubSpot, utilisez des playbooks differents pour chaque segment avec des milestones adaptes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 5 : Playbook automatise */}
              {/* ================================================================ */}
              <section id="automation-playbook" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le playbook d&apos;onboarding automatise</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un playbook d&apos;onboarding est une sequence structuree d&apos;actions, de communications et de verifications qui guide le client du jour 0 au jour 30. L&apos;automatisation permet de scaler ce processus sans sacrifier la qualite de l&apos;experience. L&apos;objectif n&apos;est pas de remplacer le CSM mais de l&apos;assister en automatisant les taches repetitives et en declenchant les bonnes actions au bon moment.</p>
                    <p><strong className="text-[#111]">Structure du playbook automatise.</strong> Le playbook combine trois types d&apos;actions : les communications automatiques (emails, notifications in-app), les taches manuelles assignees au CSM (appels, formations), et les verifications automatiques (le client a-t-il atteint le milestone ?). Chaque action est declenchee soit par une date (J+3, J+7) soit par un evenement (milestone atteint, absence d&apos;activite).</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#F9FAFB] border border-[#F2F2F2] p-4">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Exemple de playbook automatise (30 jours)</p>
                    <div className="space-y-2">
                      {[
                        { jour: "J+0", type: "Auto", action: "Email de bienvenue avec lien vers le guide de demarrage" },
                        { jour: "J+1", type: "CSM", action: "Appel de kickoff (30 min) : objectifs, planning, contacts cles" },
                        { jour: "J+3", type: "Auto", action: "Verification : parametrage initial complete ? Si non, email de relance" },
                        { jour: "J+5", type: "Auto", action: "Email avec tutoriel video pour l\u2019import de donnees" },
                        { jour: "J+7", type: "CSM", action: "Session de formation utilisateur (1h) : fonctionnalites cles" },
                        { jour: "J+10", type: "Auto", action: "Verification : 3 utilisateurs actifs ? Si non, alerte CSM" },
                        { jour: "J+14", type: "CSM", action: "Point d\u2019etape : premier deal dans le pipeline ?" },
                        { jour: "J+18", type: "Auto", action: "Email avec conseils avances et lien vers webinaire" },
                        { jour: "J+21", type: "Auto", action: "Enquete NPS in-app (1 question)" },
                        { jour: "J+25", type: "CSM", action: "Appel de bilan (30 min) : resultats, prochaines etapes" },
                        { jour: "J+30", type: "Auto", action: "Email de cloture onboarding + transition vers le support standard" },
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3 text-[11px]">
                          <span className="w-10 shrink-0 font-semibold text-[#22C55E]">{step.jour}</span>
                          <span className={`w-10 shrink-0 font-bold text-[10px] uppercase ${step.type === "Auto" ? "text-[#4B5EFC]" : "text-[#FF7A59]"}`}>{step.type}</span>
                          <span className="flex-1 text-[#555]">{step.action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les regles d&apos;or de l&apos;automatisation.</strong> Automatisez les taches a faible valeur ajoutee (envoi d&apos;emails, creation de taches, rappels) mais gardez un toucher humain pour les moments critiques (kickoff, formation, bilan). Ne surchargez pas le client avec des communications : 2 a 3 touchpoints par semaine sont suffisants. Et surtout, arretez le playbook des qu&apos;un red flag est detecte pour basculer en mode intervention manuelle.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 6 : Health scoring */}
              {/* ================================================================ */}
              <section id="health-scoring" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Health scoring : mesurer la sante de l&apos;onboarding en temps reel</h2>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p>Le health score est un indicateur composite qui mesure la sante de la relation client a un instant T. Pendant l&apos;onboarding, il permet de detecter les clients a risque avant qu&apos;ils ne churnent. Un bon health score combine des donnees d&apos;usage produit, d&apos;engagement relationnel et de progression dans les milestones.</p>
                    <p><strong className="text-white">Composantes du health score onboarding.</strong></p>
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      { composante: "Progression milestones", poids: "30%", desc: "Pourcentage de milestones critiques atteints dans les delais prevus", color: "#22C55E" },
                      { composante: "Activite produit", poids: "25%", desc: "Nombre de connexions, actions realisees, fonctionnalites utilisees", color: "#4B5EFC" },
                      { composante: "Adoption utilisateurs", poids: "20%", desc: "Ratio d\u2019utilisateurs actifs par rapport aux licences achetees", color: "#FF7A59" },
                      { composante: "Engagement relationnel", poids: "15%", desc: "Participation aux sessions de formation, reactivite aux emails", color: "#6D00CC" },
                      { composante: "Sentiment client", poids: "10%", desc: "Score NPS, feedback qualitatif, tonalite des echanges", color: "#F59E0B" },
                    ].map((c) => (
                      <div key={c.composante} className="flex items-start gap-3 rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
                          <span className="text-[12px] font-bold w-10" style={{ color: c.color }}>{c.poids}</span>
                        </div>
                        <div>
                          <p className="text-[12px] font-semibold text-white mb-0.5">{c.composante}</p>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "80-100", label: "Sain : client on track, continuer le playbook standard", color: "#22C55E" },
                      { stat: "50-79", label: "Attention : retard sur 1-2 milestones, intervention CSM", color: "#F59E0B" },
                      { stat: "0-49", label: "Critique : risque de churn eleve, escalade immediate", color: "#FF3B30" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4 text-center">
                        <p className="text-[22px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#888] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p><strong className="text-white">Frequence de calcul.</strong> Le health score doit etre recalcule quotidiennement pendant l&apos;onboarding. En phase d&apos;adoption (apres J+30), un calcul hebdomadaire est suffisant. Affichez le score dans le CRM sur la fiche client et dans un dashboard CS dedie pour que les CSM puissent prioriser leurs interventions sur les clients a risque.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 7 : Detection des red flags */}
              {/* ================================================================ */}
              <section id="red-flag-detection" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Detection des red flags : anticiper le churn avant qu&apos;il ne se produise</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un red flag est un signal comportemental ou situationnel qui indique un risque de desengagement ou de churn. La detection precoce des red flags permet d&apos;intervenir avant que la situation ne devienne irreversible. En onboarding, les red flags sont plus faciles a identifier car le comportement attendu est clairement defini par le playbook.</p>
                    <p><strong className="text-[#111]">Les 8 red flags critiques en onboarding B2B.</strong></p>
                  </div>

                  <div className="mt-4 space-y-2">
                    {[
                      { flag: "Aucune connexion dans les 48h suivant la creation du compte", gravite: "Haute", action: "Appel immediat du CSM + email de relance avec guide simplifie" },
                      { flag: "Le sponsor interne (champion) ne repond plus aux emails", gravite: "Haute", action: "Escalade vers le manager du sponsor + identification d\u2019un contact alternatif" },
                      { flag: "Moins de 2 utilisateurs actifs apres J+10", gravite: "Moyenne", action: "Proposer une session de formation supplementaire + identifier les freins a l\u2019adoption" },
                      { flag: "Aucun milestone critique atteint apres J+14", gravite: "Haute", action: "Reunion d\u2019urgence : redefinir le planning, simplifier les objectifs, assigner des ressources" },
                      { flag: "Le client reporte les sessions de formation a repetition", gravite: "Moyenne", action: "Proposer des formats alternatifs (video, documentation, session plus courte)" },
                      { flag: "Feedback negatif sur la complexite du produit", gravite: "Moyenne", action: "Simplifier le use case initial, proposer un accompagnement plus rapproche" },
                      { flag: "Le decision maker demande un point de situation premature", gravite: "Haute", action: "Preparer un bilan detaille avec les resultats obtenus et le plan d\u2019action restant" },
                      { flag: "Demande de remboursement ou mention de periode d\u2019essai", gravite: "Critique", action: "Escalade direction CS + appel avec le commercial d\u2019origine + plan de sauvetage" },
                    ].map((f, i) => (
                      <div key={i} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${f.gravite === "Critique" ? "bg-[#FF3B30]" : f.gravite === "Haute" ? "bg-[#FF7A59]" : "bg-[#F59E0B]"}`} />
                          <span className={`text-[10px] font-bold uppercase ${f.gravite === "Critique" ? "text-[#FF3B30]" : f.gravite === "Haute" ? "text-[#FF7A59]" : "text-[#F59E0B]"}`}>{f.gravite}</span>
                        </div>
                        <p className="text-[11px] font-semibold text-[#111] mb-1">{f.flag}</p>
                        <p className="text-[10px] text-[#999] leading-[1.5]">{f.action}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Automatiser la detection.</strong> Dans HubSpot, configurez des workflows qui surveillent ces signaux et declenchent automatiquement des alertes. Par exemple : si un client n&apos;a pas de connexion produit depuis 5 jours et que son health score est inferieur a 60, envoyez une notification Slack au CSM avec le contexte complet et creez une tache prioritaire dans son pipeline.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 8 : Implementation HubSpot */}
              {/* ================================================================ */}
              <section id="hubspot-implementation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Implementation dans HubSpot : ticketing, pipelines et automatisation</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot Service Hub offre tous les outils necessaires pour structurer et automatiser l&apos;onboarding. Voici la configuration que nous deploeons pour nos clients.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { titre: "Pipeline d\u2019onboarding dedie", desc: "Creez un pipeline de tickets specifique a l\u2019onboarding avec les etapes : Kickoff planifie, Setup en cours, Activation, Adoption, Onboarding termine. Chaque ticket represente un client en onboarding. Les proprietes personnalisees incluent le TTFV cible, les milestones atteints, et le health score." },
                      { titre: "Proprietes personnalisees", desc: "Ajoutez des proprietes sur l\u2019objet Company : onboarding_status (en cours, termine, a risque), onboarding_start_date, ttfv_date, health_score, milestones_completed (pourcentage), csm_assigne. Ces proprietes alimentent les dashboards et les automatisations." },
                      { titre: "Workflows de suivi", desc: "Configurez des workflows declenches par la creation d\u2019un ticket onboarding. Le workflow envoie les emails automatiques du playbook, cree les taches CSM aux dates prevues, et surveille les milestones. Si un milestone n\u2019est pas atteint dans le delai prevu, le workflow declenche une alerte." },
                      { titre: "Playbooks HubSpot", desc: "Utilisez les playbooks de Service Hub pour guider les CSM pendant les appels de kickoff, de formation et de bilan. Chaque playbook contient les questions a poser, les informations a collecter et les actions a realiser. Les reponses sont enregistrees automatiquement dans le CRM." },
                      { titre: "Dashboard onboarding", desc: "Creez un dashboard dedie avec les KPIs : nombre de clients en onboarding, TTFV moyen, taux de completion des milestones, health score moyen, nombre de red flags actifs, NPS onboarding. Ce dashboard est revu en reunion CS hebdomadaire." },
                    ].map((step) => (
                      <div key={step.titre} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#111] mb-1.5">{step.titre}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 9 : Mesurer le succes */}
              {/* ================================================================ */}
              <section id="measuring-success" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mesurer le succes de l&apos;onboarding</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un programme d&apos;onboarding sans metriques est un programme en aveugle. Voici les KPIs essentiels pour evaluer et optimiser votre onboarding B2B.</p>
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      { kpi: "Time to First Value (TTFV)", benchmark: "Inf. a 14 jours", desc: "Temps median entre la signature et la premiere valeur percue par le client" },
                      { kpi: "Taux de completion des milestones a J+30", benchmark: "85% ou plus", desc: "Pourcentage de milestones critiques atteints dans les 30 jours" },
                      { kpi: "Taux d\u2019adoption utilisateur", benchmark: "70% ou plus", desc: "Pourcentage d\u2019utilisateurs prevus qui sont actifs a J+30" },
                      { kpi: "NPS onboarding", benchmark: "50 ou plus", desc: "Net Promoter Score mesure a la fin de l\u2019onboarding" },
                      { kpi: "Taux de churn a 90 jours", benchmark: "Inf. a 5%", desc: "Pourcentage de clients qui churnent dans les 90 jours suivant la signature" },
                      { kpi: "Time to Expand", benchmark: "Inf. a 6 mois", desc: "Temps median entre la fin de l\u2019onboarding et le premier upsell" },
                    ].map((m) => (
                      <div key={m.kpi} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 shrink-0" />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-[11px] font-semibold text-[#111]">{m.kpi}</p>
                            <span className="text-[10px] text-[#22C55E] font-medium">{m.benchmark}</span>
                          </div>
                          <p className="text-[10px] text-[#999]">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Analyse de cohorte.</strong> Comparez les cohortes de clients onboardes chaque mois pour mesurer l&apos;amelioration de votre programme. La cohorte de mars doit avoir de meilleurs KPIs que celle de janvier si votre programme s&apos;ameliore. Segmentez aussi par taille de client, secteur et CSM pour identifier les poches d&apos;excellence et les zones d&apos;amelioration.</p>
                    <p><strong className="text-[#111]">Correlation avec la retention.</strong> Mesurez la correlation entre vos KPIs d&apos;onboarding et le taux de renouvellement a 12 mois. Si les clients avec un TTFV inferieur a 14 jours ont un taux de renouvellement de 95% contre 78% pour ceux avec un TTFV superieur a 30 jours, vous avez la preuve quantitative que l&apos;investissement dans l&apos;onboarding se rentabilise directement en retention.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 10 : Bonnes pratiques */}
              {/* ================================================================ */}
              <section id="best-practices" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">10 bonnes pratiques pour un onboarding B2B d&apos;excellence</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres avoir deploye des programmes d&apos;onboarding pour des dizaines d&apos;entreprises B2B, voici les 10 principes qui font la difference entre un onboarding correct et un onboarding excellent.</p>
                  </div>

                  <div className="mt-4 space-y-2">
                    {[
                      { num: "01", titre: "Commencer l\u2019onboarding avant la signature", desc: "Partagez du contenu de preparation des la phase de negociation. Un client qui arrive avec une vision claire du processus d\u2019implementation demarre plus vite." },
                      { num: "02", titre: "Definir un seul objectif pour les 14 premiers jours", desc: "Ne surchargez pas le client avec 10 fonctionnalites. Identifiez LE use case qui delivre de la valeur et concentrez-vous dessus." },
                      { num: "03", titre: "Impliquer le decision maker dans le kickoff", desc: "Le sponsor executif doit valider les objectifs et le planning. Son engagement visible legitimise le projet en interne." },
                      { num: "04", titre: "Celebrer les petites victoires", desc: "Envoyez un email de felicitation quand un milestone est atteint. Les micro-celebrations renforcent l\u2019engagement et la motivation de l\u2019equipe cliente." },
                      { num: "05", titre: "Creer une communaute de pairs", desc: "Connectez les nouveaux clients avec des clients existants qui ont reussi leur onboarding. Le temoignage d\u2019un pair est plus convaincant que tout discours commercial." },
                      { num: "06", titre: "Documenter tout dans le CRM", desc: "Chaque interaction, chaque feedback, chaque milestone doit etre trace dans HubSpot. Cette historisation permet d\u2019optimiser le processus et de gerer les transitions de CSM sans perte d\u2019information." },
                      { num: "07", titre: "Anticiper les objections techniques", desc: "Preparez des FAQ et des guides de resolution pour les problemes les plus frequents (import de donnees, integration, formation utilisateur). Reduisez le temps de resolution a quelques heures plutot que quelques jours." },
                      { num: "08", titre: "Prevoir un plan de sauvetage", desc: "Definissez a l\u2019avance le processus d\u2019escalade quand un onboarding deraille. Qui intervient ? Quelles actions sont prises ? Quel est le delai ? Un plan de sauvetage documente evite la panique et les decisions ad hoc." },
                      { num: "09", titre: "Mesurer et iterer chaque mois", desc: "Analysez les donnees d\u2019onboarding mensuellement. Identifiez les etapes ou les clients bloquent, les milestones les plus difficiles a atteindre, et les segments qui performent le moins bien. Ajustez le playbook en consequence." },
                      { num: "10", titre: "Assurer une transition fluide vers le support", desc: "La fin de l\u2019onboarding ne doit pas etre une falaise. Presentez l\u2019equipe support, expliquez les canaux disponibles, et programmez un premier check-in a J+60 pour s\u2019assurer que le client reste sur la bonne trajectoire." },
                    ].map((bp) => (
                      <div key={bp.num} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-3">
                        <span className="text-[14px] font-bold text-[#22C55E] w-8 shrink-0">{bp.num}</span>
                        <div>
                          <p className="text-[11px] font-semibold text-[#111] mb-0.5">{bp.titre}</p>
                          <p className="text-[10px] text-[#999] leading-[1.5]">{bp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </article>

            {/* Related articles */}
            <section className="mt-12 mb-8">
              <p className="text-[13px] font-semibold text-[#111] mb-4">Articles similaires</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedArticles.map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors group">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white mb-3" style={{ background: a.color }}>
                      {a.category[0]}
                    </div>
                    <p className="text-[12px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#22C55E] transition-colors">{a.title}</p>
                    <p className="text-[10px] text-[#999] mt-2">{a.category}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous voulez reduire le churn avec un onboarding structure ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On deploie votre programme d&apos;onboarding B2B complet : playbooks, health scoring, automatisation HubSpot et mesure du TTFV. Premiers resultats sous 30 jours.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Structurer mon onboarding
                  </a>
                  <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Tous les articles
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
