"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Ringover : RevOps Part-Time, un accompagnement continu sans recruter",
  description: "Comment Ceres accompagne Ringover en RevOps Part-Time : CRM, data, automation et IA pour structurer les ops sans recruter un RevOps senior a temps plein.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-20",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "pourquoi-part-time", title: "Pourquoi le Part-Time" },
  { id: "modele", title: "Le modele d\u2019accompagnement" },
  { id: "phase-1", title: "Phase 1 : fondations" },
  { id: "phase-2", title: "Phase 2 : automatisation" },
  { id: "phase-3", title: "Phase 3 : IA et scale" },
  { id: "quotidien", title: "Le quotidien" },
  { id: "comparaison", title: "Part-Time vs recrutement" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Retour client" },
];

export default function RingoverCaseStudy() {
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
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#6C5CE7] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#6C5CE7", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "20%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "35%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "50%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "65%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "80%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <img src="https://www.google.com/s2/favicons?domain=ringover.com&sz=32" alt="Ringover" className="w-5 h-5" />
                <span className="text-[12px] font-semibold text-[#111]">Ringover</span>
              </div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#6C5CE7] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/cas-clients" className="hover:text-[#111] transition-colors">Cas clients</Link><span>/</span>
              <span className="text-[#666]">Ringover</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">12 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=ringover.com&sz=64" alt="Ringover" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Ringover</h1>
                  <p className="text-[12px] text-[#999]">SaaS Telecom / VoIP | Scale-up | 200+ personnes | International</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                RevOps Part-Time : comment Ringover a structure ses operations revenue sans recruter, avec un consultant Ceres dedie 2-3 jours par semaine pendant 12 mois. CRM, data, automatisation, IA.
              </p>

              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats sur 12 mois</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { value: "+65%", label: "Pipeline genere", color: "#22C55E" },
                    { value: "-50%", label: "Temps admin", color: "#4B5EFC" },
                    { value: "88%", label: "Forecast accuracy", color: "#6C5CE7" },
                    { value: "40+", label: "Workflows crees", color: "#FF7A59" },
                    { value: "40%", label: "Du cout d\u2019un recrutement", color: "#D4A27F" },
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
                    <p>Ringover est un editeur SaaS de telephonie cloud et de communication unifiee. La plateforme combine appels, visio, SMS et messaging dans une interface unique integree aux CRM et outils business. Plus de 200 personnes, une presence internationale, une croissance soutenue.</p>
                    <p>L&apos;equipe commerciale s&apos;appuie sur HubSpot comme CRM central. Mais avec la croissance rapide, les processus ops se sont complexifies sans personne pour les structurer. Le pipeline s&apos;epaissit, les donnees se degradent, les workflows sont artisanaux, le reporting est manuel.</p>
                    <p>Le constat du VP Sales : il faut structurer les operations revenue. Mais recruter un RevOps senior a 80K+ fixe pour une mission qui ne necessite pas un temps plein, c&apos;est un investissement lourd avec un risque de sous-utilisation. Et le marche du recrutement RevOps est tendu : 4 a 6 mois pour trouver le bon profil.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Equipe commerciale", value: "30+ sales" },
                      { label: "CRM en place", value: "HubSpot" },
                      { label: "Presence", value: "International" },
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

              {/* Pourquoi le Part-Time */}
              <section id="pourquoi-part-time" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi le RevOps Part-Time</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ringover a explore trois options : recruter un RevOps senior en interne, prendre un freelance, ou travailler avec une agence specialisee en mode part-time. Le choix s&apos;est porte sur le RevOps Part-Time de Ceres pour trois raisons.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { num: "1", title: "Pas assez de volume pour un temps plein", desc: "Les chantiers RevOps chez Ringover representent 2 a 3 jours de travail par semaine, pas 5. Recruter un senior a 80K+ charges pour l\u2019occuper a mi-temps, c\u2019est bruler du cash. Le part-time permet de payer uniquement le temps effectif.", color: "#6C5CE7" },
                      { num: "2", title: "Besoin d\u2019expertise variee, pas d\u2019un profil unique", desc: "Les sujets couvrent le CRM, la data, l\u2019automatisation, l\u2019IA, le reporting, l\u2019alignement marketing-sales. Un seul profil maitrise rarement tous ces domaines. Ceres apporte une equipe avec des expertises complementaires, pas une seule personne.", color: "#4B5EFC" },
                      { num: "3", title: "Flexibilite : monter et descendre en charge", desc: "Certains mois, il y a un gros chantier (migration, refonte pipeline, mise en place IA). D\u2019autres mois, c\u2019est du run et de la maintenance. Le part-time permet d\u2019ajuster : passer de 2 a 4 jours/semaine sur un sprint, puis redescendre a 1 jour/semaine en phase calme.", color: "#22C55E" },
                    ].map((item, i) => (
                      <div key={item.num}>
                        <div className="flex gap-3 items-start py-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: item.color }}>
                            {item.num}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-[#111] mb-1">{item.title}</p>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                          </div>
                        </div>
                        {i < 2 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8F5E9] bg-[#F1F8F1] p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Le calcul economique</p>
                    <p className="text-[11px] text-[#555] leading-[1.65]">Un RevOps senior en CDI : 80 a 95K de salaire brut, soit 110 a 130K charges annuelles, plus 4 a 6 mois de recrutement, plus le risque d&apos;erreur de casting. Le RevOps Part-Time Ceres : l&apos;equivalent de 40% du cout annuel, operationnel des le premier jour, avec la possibilite d&apos;arreter a tout moment.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Modele d'accompagnement */}
              <section id="modele" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Organisation</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Le modele d&apos;accompagnement</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Un consultant Ceres dedie, integre a l&apos;equipe Ringover comme un membre interne. Pas un prestataire qui livre un rapport et disparait : quelqu&apos;un qui connait le business, les equipes, les outils, et qui fait avancer les sujets au quotidien.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Consultant dedie", desc: "Le meme consultant chaque semaine, 2 a 3 jours. Il connait le pipeline, les equipes, les enjeux. Pas de turnover, pas de re-briefing.", icon: "C" },
                      { title: "Weekly VP Sales", desc: "Chaque lundi, 30 minutes avec le VP Sales. Revue des KPIs, priorisation des sujets de la semaine, alertes pipeline. Decisions rapides.", icon: "W" },
                      { title: "Monthly CMO", desc: "Chaque mois, 1 heure avec le CMO. Alignement marketing-sales, revue des SLAs, analyse des campagnes, planning du mois suivant.", icon: "M" },
                      { title: "Quarterly Business Review", desc: "Chaque trimestre, une QBR complete : bilan des chantiers, ROI mesure, benchmarks, roadmap du trimestre suivant. Presentation au COMEX.", icon: "Q" },
                      { title: "Slack channel dedie", desc: "Un channel Slack #ops-ceres pour les demandes ad hoc, les questions rapides, le partage de dashboards. Temps de reponse moyen : 2 heures.", icon: "S" },
                      { title: "Documentation continue", desc: "Chaque process cree est documente dans Notion. Playbooks, workflows, conventions de nommage, guides. Ringover reste autonome si le partenariat s\u2019arrete.", icon: "D" },
                    ].map((r) => (
                      <div key={r.title} className="rounded-xl bg-white/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-md bg-[#6C5CE7]/30 flex items-center justify-center text-[#6C5CE7] text-[10px] font-bold">{r.icon}</div>
                          <p className="text-[13px] font-semibold text-white">{r.title}</p>
                        </div>
                        <p className="text-[11px] text-white/40 leading-[1.6]">{r.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-white/5 p-4">
                    <p className="text-[12px] font-semibold text-[#6C5CE7] mb-2">Le principe cle</p>
                    <p className="text-[11px] text-white/50 leading-[1.65]">Le consultant Ceres n&apos;est pas un executant. Il propose, challenge et arbitre avec les stakeholders. Il a acces a HubSpot en admin, aux outils data, aux Slack internes. Il participe aux meetings sales. C&apos;est un membre de l&apos;equipe a part entiere, a temps partiel.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Phase 1 */}
              <section id="phase-1" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-semibold">Mois 1-3</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Phase 1 : poser les fondations</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les trois premiers mois sont consacres a l&apos;audit, au nettoyage et a la restructuration. Avant d&apos;automatiser quoi que ce soit, il faut que les bases soient solides. Un CRM mal structure, c&apos;est de l&apos;automatisation qui amplifie le chaos.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Audit CRM complet", desc: "Revue de l\u2019architecture HubSpot : objets, proprietes, pipelines, workflows existants, integrations. Identification des points de friction, des doublons, des donnees mortes. Score de sante CRM : 42/100 au depart." },
                      { step: "02", title: "Restructuration du pipeline", desc: "Refonte des etapes du pipeline de vente : passage de 9 etapes floues a 6 etapes claires avec des criteres d\u2019entree/sortie documentes. Ajout de proprietes obligatoires a chaque etape pour forcer la discipline." },
                      { step: "03", title: "Nettoyage des donnees", desc: "Suppression de 12 000 contacts obsoletes, deduplication de 3 400 doublons, normalisation des noms d\u2019entreprises et des secteurs d\u2019activite. Les donnees passent de \"inutilisables\" a \"exploitables\"." },
                      { step: "04", title: "Scoring leads et comptes", desc: "Mise en place d\u2019un lead scoring comportemental et demographique dans HubSpot. Score base sur le titre du contact, la taille de l\u2019entreprise, les interactions (emails ouverts, pages vues, demo demandee). Seuil MQL a 50 points." },
                      { step: "05", title: "SLA marketing-sales", desc: "Definition formelle du handoff marketing vers sales : un MQL doit etre traite par un commercial dans les 4 heures. Workflow d\u2019alerte si le SLA est depasse. Reporting mensuel du taux de respect du SLA." },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[11px] font-bold shrink-0">{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Score CRM avant", value: "42/100" },
                      { label: "Score CRM apres Phase 1", value: "78/100" },
                      { label: "Doublons supprimes", value: "3 400" },
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

              {/* Phase 2 */}
              <section id="phase-2" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-semibold">Mois 4-6</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Phase 2 : automatiser et accelerer</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les fondations sont solides. On passe a l&apos;automatisation : workflows, sequences, integrations et dashboards. L&apos;objectif est de supprimer le travail manuel repetitif et de donner de la visibilite en temps reel aux managers.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Automatisation des workflows", desc: "Creation de 25 workflows HubSpot : assignment automatique des leads, notifications d\u2019activite, nurturing sequences, relances deal stagne, alertes pipeline, mise a jour des proprietes. Chaque workflow documente avec trigger, condition et action." },
                      { step: "02", title: "Sequences outbound", desc: "Construction de 8 sequences de prospection multicanal : email + appel + LinkedIn. Templates personnalises par persona, par verticale et par taille d\u2019entreprise. A/B test systematique sur les sujets d\u2019email." },
                      { step: "03", title: "Integration Ringover x HubSpot native", desc: "Configuration de l\u2019integration native entre Ringover et HubSpot : chaque appel est automatiquement logue dans le CRM avec duree, enregistrement et notes. Les commerciaux n\u2019ont plus a saisir manuellement leurs appels. Gain : 45 minutes par commercial par jour." },
                      { step: "04", title: "Dashboards operationnels", desc: "Creation de 5 dashboards HubSpot : pipeline en temps reel, activite commerciale, performance par rep, forecast, et funnel marketing-to-sales. Chaque manager a sa vue personnalisee. Plus de fichiers Excel." },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[11px] font-bold shrink-0">{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Integration mockup */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 border-b border-[#E8E8E8]">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /></div>
                      <span className="text-[10px] text-[#999] font-medium">Integration Ringover x HubSpot</span>
                    </div>
                    <div className="bg-white p-4">
                      <div className="grid grid-cols-3 gap-3 items-center">
                        <div className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                          <img src="https://www.google.com/s2/favicons?domain=ringover.com&sz=32" alt="Ringover" className="w-6 h-6 mx-auto mb-1" />
                          <p className="text-[10px] font-semibold text-[#111]">Ringover</p>
                          <p className="text-[9px] text-[#999]">Appels, SMS, Visio</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <div className="h-px w-6 bg-[#E8E8E8]" />
                            <span className="text-[9px] text-[#999] font-medium px-2 py-0.5 rounded bg-[#FAFAFA] border border-[#F2F2F2]">sync auto</span>
                            <div className="h-px w-6 bg-[#E8E8E8]" />
                          </div>
                        </div>
                        <div className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                          <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-6 h-6 mx-auto mb-1" />
                          <p className="text-[10px] font-semibold text-[#111]">HubSpot CRM</p>
                          <p className="text-[9px] text-[#999]">Contacts, Deals, Timeline</p>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {[
                          { label: "Appels logues/jour", value: "350+" },
                          { label: "Temps saisie economise", value: "45 min/rep" },
                          { label: "Taux de log", value: "100%" },
                        ].map((m) => (
                          <div key={m.label} className="text-center p-2 rounded-lg border border-[#F2F2F2]">
                            <p className="text-[12px] font-bold text-[#111]">{m.value}</p>
                            <p className="text-[9px] text-[#999]">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Phase 3 */}
              <section id="phase-3" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-semibold">Mois 7-12</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Phase 3 : IA, scale et intelligence</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les process sont en place, les donnees sont propres, les workflows tournent. On passe a l&apos;etape suivante : utiliser l&apos;IA pour enrichir les donnees, ameliorer le forecasting et coacher les commerciaux avec de la data.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "IA Claude pour enrichissement", desc: "Deploiement d\u2019agents Claude pour enrichir automatiquement les fiches prospects : scraping du site web, extraction du secteur d\u2019activite, de la taille, des technologies utilisees. Chaque nouveau lead est enrichi en moins de 30 secondes sans intervention humaine.", color: "#22C55E" },
                      { step: "02", title: "Agents MCP connectes au CRM", desc: "Mise en place d\u2019agents MCP (Model Context Protocol) qui interagissent directement avec HubSpot. Les commerciaux peuvent interroger le CRM en langage naturel : \"Quels deals sont en risk cette semaine ?\", \"Donne-moi les entreprises SaaS de plus de 100 personnes sans activite depuis 30 jours\".", color: "#6C5CE7" },
                      { step: "03", title: "Forecasting avance", desc: "Modele de prevision des ventes base sur les donnees historiques : taux de conversion par etape, velocity du pipeline, saisonnalite. Le forecast passe d\u2019une estimation \"au feeling\" a une prediction data-driven avec un intervalle de confiance. Precision atteinte : 88%.", color: "#4B5EFC" },
                      { step: "04", title: "Coaching commercial data-driven", desc: "Tableaux de bord individuels par commercial : taux de conversion par etape, temps moyen par deal, nombre d\u2019activites, comparaison avec la moyenne de l\u2019equipe. Le manager utilise ces donnees pour des 1:1 factuels, pas des impressions.", color: "#FF7A59" },
                      { step: "05", title: "ABM sur comptes strategiques", desc: "Identification des 50 comptes strategiques avec un scoring multi-criteres. Mise en place de workflows ABM dedies : contenu personnalise, sequences sur mesure, alertes d\u2019engagement, suivi multi-interlocuteurs. Pipeline ABM : +120% vs pipeline standard.", color: "#D4A27F" },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: s.color }}>{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI mockup */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /></div>
                      <span className="text-[10px] text-white/50 font-mono">Agent MCP -- Requete en langage naturel</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[11px] text-[#E0E0E0] leading-[1.8] whitespace-pre-wrap font-mono">
{`> "Quels deals de plus de 10K sont en risk cette semaine ?"

Analyse du pipeline en cours...

3 deals identifies en risk :
- Acme Corp (25K) -- Pas d'activite depuis 14 jours, decision repoussee 2x
- DataFlow (18K) -- Champion en conge, pas de backup identifie
- TechVision (12K) -- Concurrent mentionne lors du dernier call

Actions recommandees generees et envoyees aux owners.`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Le quotidien */}
              <section id="quotidien" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le fonctionnement au quotidien</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Au-dela des grands chantiers, le RevOps Part-Time c&apos;est surtout un travail continu de maintenance, d&apos;amelioration et de support. Voici ce que fait concretement le consultant Ceres chaque semaine chez Ringover.</p>
                  </div>

                  {/* Weekly breakdown */}
                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 border-b border-[#E8E8E8]">
                      <span className="text-[10px] text-[#999] font-medium">Semaine type du consultant Ceres</span>
                    </div>
                    <div className="bg-white p-4 space-y-3">
                      {[
                        { jour: "Lundi", taches: "Weekly VP Sales (30 min). Revue pipeline : deals stagnes, forecast, alertes. Priorisation de la semaine.", pct: 15 },
                        { jour: "Mardi", taches: "Maintenance CRM : data quality checks, corrections, deduplication. Traitement des demandes ad hoc de l\u2019equipe commerciale.", pct: 20 },
                        { jour: "Mercredi", taches: "Travail de fond sur les chantiers en cours : nouveaux workflows, amelioration des sequences, configuration des dashboards.", pct: 30 },
                        { jour: "Jeudi", taches: "Support equipe : formation ponctuelle, reponse aux questions HubSpot, debug des workflows. Reporting hebdomadaire.", pct: 20 },
                        { jour: "Vendredi", taches: "Veille outils et best practices. Documentation des process de la semaine. Preparation du weekly suivant.", pct: 15 },
                      ].map((j) => (
                        <div key={j.jour} className="flex items-start gap-3">
                          <span className="text-[11px] font-semibold text-[#111] w-[70px] shrink-0">{j.jour}</span>
                          <div className="flex-1">
                            <p className="text-[11px] text-[#777] leading-[1.6]">{j.taches}</p>
                            <div className="mt-1 h-1.5 bg-[#F5F5F5] rounded-full overflow-hidden">
                              <div className="h-full rounded-full bg-[#6C5CE7]/40" style={{ width: `${j.pct}%` }} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { label: "Data quality checks", value: "Hebdomadaire" },
                      { label: "Nouveaux workflows/mois", value: "3-5" },
                      { label: "Temps de reponse Slack", value: "< 2h" },
                      { label: "Process documentes", value: "100%" },
                      { label: "Formations equipe", value: "2/mois" },
                      { label: "Rapports automatises", value: "12" },
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

              {/* Comparaison Part-Time vs Recrutement */}
              <section id="comparaison" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;avantage du RevOps Part-Time vs recrutement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le debat revient souvent : faut-il recruter ou externaliser ? Voici la comparaison factuelle basee sur l&apos;experience Ringover.</p>
                  </div>

                  {/* Comparison table */}
                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
                          <th className="text-left p-3 font-semibold text-[#111]">Critere</th>
                          <th className="text-center p-3 font-semibold text-[#999]">Recrutement CDI</th>
                          <th className="text-center p-3 font-semibold text-[#6C5CE7]">RevOps Part-Time Ceres</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { critere: "Cout annuel", cdi: "110-130K charges", ceres: "~45-55K", advantage: true },
                          { critere: "Time-to-value", cdi: "4-6 mois (recrutement + onboarding)", ceres: "1 semaine", advantage: true },
                          { critere: "Expertise", cdi: "1 profil, 1 set de competences", ceres: "Equipe multi-expertises (CRM, data, IA, automation)", advantage: true },
                          { critere: "Flexibilite", cdi: "Fixe (CDI, preavis 3 mois)", ceres: "Variable (2 a 4 jours/semaine, ajustable)", advantage: true },
                          { critere: "Risque", cdi: "Erreur de casting, turnover, periode d\u2019essai", ceres: "Engagement mensuel, arret possible a tout moment", advantage: true },
                          { critere: "Veille et innovation", cdi: "Depend du profil recrute", ceres: "Capitalisation sur les projets multi-clients", advantage: true },
                          { critere: "Continuite", cdi: "Conges, maladie, depart = rupture", ceres: "Backup equipe, continuite garantie", advantage: true },
                        ].map((row, i) => (
                          <tr key={row.critere} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]/50"}>
                            <td className="p-3 font-medium text-[#111] border-b border-[#F5F5F5]">{row.critere}</td>
                            <td className="p-3 text-center text-[#999] border-b border-[#F5F5F5]">{row.cdi}</td>
                            <td className="p-3 text-center text-[#111] font-medium border-b border-[#F5F5F5]">
                              <span className="inline-flex items-center gap-1">
                                {row.advantage && <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                                {row.ceres}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8F5E9] bg-[#F1F8F1] p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Le verdict apres 12 mois</p>
                    <p className="text-[11px] text-[#555] leading-[1.65]">Ringover a obtenu l&apos;equivalent du travail d&apos;un RevOps senior a temps plein, avec une expertise plus large, une flexibilite totale et un cout annuel de 40% inferieur a un recrutement. Et zero mois perdu en processus de recrutement.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats sur 12 mois</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "+65%", label: "Pipeline genere en 12 mois (croissance nette vs annee precedente)", color: "#22C55E" },
                      { value: "-50%", label: "Temps administratif par commercial (saisie, reporting, recherche)", color: "#4B5EFC" },
                      { value: "88%", label: "Precision du forecast (vs 55% avant l\u2019accompagnement)", color: "#6C5CE7" },
                      { value: "40+", label: "Workflows automatises en production dans HubSpot", color: "#FF7A59" },
                      { value: "0", label: "Recrutement necessaire pour les operations revenue", color: "#22C55E" },
                      { value: "40%", label: "Du cout d\u2019un RevOps senior recrute en CDI", color: "#D4A27F" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Le pipeline a progresse de 65% grace a un CRM structure, des process clairs et des sequences automatisees",
                      "Les commerciaux passent 50% de temps en moins sur les taches admin grace a l\u2019integration Ringover-HubSpot et aux workflows",
                      "Le forecast est passe de 55% a 88% de precision grace au modele data-driven et aux criteres de pipeline rigoureux",
                      "Plus de 40 workflows automatisent l\u2019assignment, le nurturing, les alertes, le scoring et le reporting",
                      "Les agents IA enrichissent les leads en 30 secondes et permettent d\u2019interroger le CRM en langage naturel",
                      "Le scoring ABM sur les 50 comptes strategiques genere un pipeline 120% superieur au pipeline standard",
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
                <div className="rounded-2xl border-2 border-[#6C5CE7]/20 bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(108,92,231,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[14px] font-bold shrink-0">LR</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;On avait besoin de structurer nos ops sans passer 6 mois a recruter. Ceres est devenu notre equipe RevOps externe : meme consultant chaque semaine, il connait nos deals, nos equipes, nos enjeux. En 12 mois, on est passe d&apos;un CRM en desordre a une machine bien huilee. Le pipeline a progresse de 65%, le forecast est fiable, les commerciaux ont retrouve du temps pour vendre. Et tout ca pour une fraction du cout d&apos;un recrutement. Le RevOps Part-Time, c&apos;est exactement le bon format pour une boite comme la notre.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Ludovic Rateau</p>
                          <p className="text-[11px] text-[#999]">VP Sales, Ringover</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=ringover.com&sz=32" alt="Ringover" className="w-5 h-5 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;un RevOps sans recruter ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">Un consultant Ceres dedie, integre a votre equipe, 2 a 3 jours par semaine. CRM, data, automatisation, IA. Operationnel en 1 semaine.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
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
