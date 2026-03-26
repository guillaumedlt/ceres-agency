"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client HiPay : double migration Pardot + Salesforce vers HubSpot",
  description: "Comment Ceres a pilote la double migration de HiPay : Pardot vers HubSpot Marketing Hub et Salesforce CRM vers HubSpot Sales Hub. 35K contacts, 0 downtime, 20 semaines.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-20",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "defis", title: "Les defis" },
  { id: "migration-marketing", title: "Migration Marketing" },
  { id: "migration-crm", title: "Migration CRM" },
  { id: "double-migration", title: "Le defi technique" },
  { id: "configuration", title: "Configuration unifiee" },
  { id: "integrations", title: "Integrations" },
  { id: "formation", title: "Formation et go-live" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Retour client" },
];

export default function HiPayCaseStudy() {
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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "45%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "65%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "82%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded bg-[#6D00CC] flex items-center justify-center text-white text-[8px] font-bold">Hi</div>
                <span className="text-[12px] font-semibold text-[#111]">HiPay</span>
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
              <span className="text-[#666]">HiPay</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">14 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#6D00CC] flex items-center justify-center text-white text-[14px] font-bold">Hi</div>
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">HiPay</h1>
                  <p className="text-[12px] text-[#999]">FinTech | Solutions de paiement | 200+ personnes | International</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Double migration Pardot vers HubSpot Marketing Hub et Salesforce CRM vers HubSpot Sales Hub. Deux systemes critiques remplaces en 20 semaines, zero downtime, 35 000 contacts migres.
              </p>

              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { value: "-50%", label: "Cout de la stack", color: "#22C55E" },
                    { value: "0", label: "Downtime", color: "#4B5EFC" },
                    { value: "35K", label: "Contacts migres", color: "#6C5CE7" },
                    { value: "20 sem.", label: "Duree totale", color: "#FF7A59" },
                    { value: "+70%", label: "Adoption equipes", color: "#22C55E" },
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
                    <p>HiPay est un acteur majeur du paiement en ligne en Europe. La societe fournit des solutions de paiement omnicanal a des marchands de toutes tailles, avec une presence internationale et plus de 200 collaborateurs repartis entre Paris, Lisbonne, Bruxelles et Milan.</p>
                    <p>Cote outils, HiPay operait sur deux plateformes Salesforce : Pardot pour le marketing automation (nurturing, scoring, email campaigns) et Salesforce CRM pour la gestion commerciale (pipeline, deals, forecasting). Deux systemes puissants, mais qui entrainaient une complexite operationnelle considerable et des couts de licence eleves.</p>
                    <p>Le constat de la direction etait clair : deux outils differents avec deux logiques differentes, des equipes qui passaient plus de temps a maintenir la stack qu&apos;a l&apos;exploiter, et une facture annuelle qui ne refletait pas la valeur tiree des outils. Il etait temps de tout reunir dans un seul ecosysteme.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Collaborateurs", value: "200+" },
                      { label: "Pays d\u2019operation", value: "4" },
                      { label: "Contacts dans Pardot", value: "35K" },
                      { label: "Champs Salesforce", value: "280+" },
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

              {/* Les defis */}
              <section id="defis" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les defis</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une migration simple est deja un projet complexe. Une double migration simultanee, c&apos;est un defi d&apos;un autre ordre. Voici ce qu&apos;on devait gerer :</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-5">
                    <p className="text-[12px] font-semibold text-[#EF4444] mb-4">Les risques identifies</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { stat: "2x", desc: "la complexite d\u2019une migration standard : deux systemes a auditer, deux bases a migrer, deux equipes a former" },
                        { stat: "47", desc: "workflows Pardot critiques (automation rules, engagement programs) qui generaient du pipeline chaque semaine" },
                        { stat: "280+", desc: "champs custom dans Salesforce, avec des Apex triggers et des objets personalises interconnectes" },
                        { stat: "200+", desc: "utilisateurs habitues a Salesforce et Pardot depuis des annees, avec leurs reflexes et leurs process" },
                        { stat: "RGPD", desc: "donnees de paiement sensibles soumises a des contraintes reglementaires strictes pour une FinTech" },
                        { stat: "0", desc: "downtime acceptable : les equipes commerciales et marketing ne pouvaient pas s\u2019arreter, meme une journee" },
                      ].map((p) => (
                        <div key={p.desc} className="flex gap-3 items-start">
                          <span className="text-[18px] font-bold text-[#EF4444] shrink-0 w-12 text-right">{p.stat}</span>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le risque principal etait la periode de transition. Pendant la migration, les deux systemes devaient coexister sans perte de donnees ni interruption du business. Chaque lead entrant devait etre traite, chaque deal en cours devait avancer, chaque campagne marketing devait continuer a tourner.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Migration Marketing : Pardot vers HubSpot Marketing Hub */}
              <section id="migration-marketing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Migration Marketing : Pardot vers HubSpot Marketing Hub</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La premiere phase du projet a ete la migration marketing. On a commence par la car le marketing automation est le moteur d&apos;acquisition : si les leads arretent de rentrer, le pipeline se tarit en quelques semaines.</p>
                  </div>

                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Audit complet de Pardot", desc: "On a cartographie l\u2019ensemble de l\u2019ecosysteme Pardot : 47 automation rules, 12 engagement programs, 85 email templates, 23 formulaires, 18 landing pages, et un modele de scoring avec 34 criteres. Chaque element a ete classe : a migrer tel quel, a optimiser, ou a supprimer.", color: "#6C5CE7" },
                      { num: "2", title: "Recreation des workflows dans HubSpot", desc: "Les 47 automation rules ont ete reconstruites dans HubSpot Workflows avec la logique equivalente, mais en profitant des capacites natives de HubSpot (branches if/then plus flexibles, tokens de personnalisation, A/B testing integre). 15 workflows ont ete fusionnes ou simplifies.", color: "#4B5EFC" },
                      { num: "3", title: "Migration des email templates", desc: "Les 85 templates Pardot ont ete recrees dans l\u2019editeur drag-and-drop HubSpot. On en a profite pour harmoniser le design system : header, footer, CTA et typographie uniformises. 30 templates obsoletes ont ete supprimes.", color: "#22C55E" },
                      { num: "4", title: "Migration des formulaires et landing pages", desc: "Les 23 formulaires ont ete recrees dans HubSpot avec les memes champs, validations et logiques conditionnelles. Les 18 landing pages ont ete reconstruites avec les modules HubSpot, en gardant les memes URLs pour preserver le SEO.", color: "#FF7A59" },
                      { num: "5", title: "Scoring marketing unifie", desc: "Le modele de scoring Pardot (34 criteres) a ete reconstruit dans HubSpot avec des scores positifs et negatifs. On a ajoute le score d\u2019engagement (ouvertures, clics, visites) et le score demographique (taille entreprise, secteur, poste).", color: "#6C5CE7" },
                      { num: "6", title: "Migration de l\u2019historique d\u2019engagement", desc: "On a migre l\u2019historique des interactions : ouvertures d\u2019emails, clics, soumissions de formulaires, visites de pages. Chaque contact a conserve son historique d\u2019engagement pour que le scoring et le nurturing restent pertinents des le jour 1.", color: "#4B5EFC" },
                    ].map((point, i) => (
                      <div key={point.num}>
                        <div className="flex gap-3 items-start py-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: point.color }}>
                            {point.num}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-[#111] mb-1">{point.title}</p>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{point.desc}</p>
                          </div>
                        </div>
                        {i < 5 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Workflows migres", value: "47" },
                      { label: "Templates recrees", value: "55" },
                      { label: "Listes mappees", value: "120+" },
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

              {/* Migration CRM : Salesforce vers HubSpot Sales Hub */}
              <section id="migration-crm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Migration CRM : Salesforce vers HubSpot Sales Hub</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La deuxieme phase etait la migration du CRM. Plus technique, plus risquee, car c&apos;est l&apos;outil quotidien des commerciaux. Un CRM qui ne fonctionne pas, ce sont des deals qui se perdent.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Audit Salesforce approfondi", desc: "On a documente l\u2019architecture Salesforce : 280+ champs custom, 14 objets personnalises, 8 Apex triggers, 35 rapports actifs, 12 dashboards, 6 validation rules et 3 process builders. Chaque element a ete evalue pour sa pertinence dans HubSpot." },
                      { title: "Mapping des 280+ champs", desc: "Chaque champ Salesforce a ete mappe vers son equivalent HubSpot. Les proprietes standard ont ete mappees nativement. Les proprietes custom ont ete creees dans HubSpot avec le meme type de donnees (texte, nombre, date, dropdown, checkbox). Un document de mapping de 45 pages a ete produit et valide par HiPay." },
                      { title: "Data cleaning pre-migration", desc: "Avant de migrer, on a nettoye la base : suppression des doublons (1 200 contacts en double), normalisation des formats (telephone, pays, adresse), enrichissement des champs manquants, et suppression des contacts inactifs depuis plus de 24 mois." },
                      { title: "Migration par lots", desc: "La migration a ete executee par lots de 5 000 contacts pour limiter le risque. Chaque lot etait valide manuellement avant de passer au suivant : verification des associations (contact-entreprise-deal), des proprietes, des notes et des activites. 7 lots au total." },
                      { title: "Objets custom et associations", desc: "Les 14 objets personnalises Salesforce ont ete recrees dans HubSpot avec les memes champs et associations. Les relations many-to-many ont ete gerees via des association labels custom. Les lookups Salesforce ont ete remplaces par des proprietes calculees." },
                      { title: "Rapports et dashboards", desc: "Les 35 rapports actifs ont ete recrees dans HubSpot avec les memes filtres et metriques. Les 12 dashboards ont ete reconstruits avec une structure plus claire : un dashboard par equipe (Sales France, Sales International, Management, CS)." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Champs mappes", value: "280+" },
                      { label: "Objets custom", value: "14" },
                      { label: "Doublons supprimes", value: "1 200" },
                      { label: "Rapports recrees", value: "35" },
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

              {/* Le defi technique de la double migration */}
              <section id="double-migration" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Architecture</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Le defi technique de la double migration</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le vrai defi n&apos;etait pas de migrer Pardot ou Salesforce individuellement. C&apos;etait de synchroniser les deux migrations pour que les donnees restent coherentes a chaque etape, sans jamais interrompre le business.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Migration sequentielle", desc: "On a choisi de migrer le marketing en premier (semaines 1-10), puis le CRM (semaines 8-20). Les 2 semaines de chevauchement ont permis de synchroniser les bases avant le switch CRM.", color: "#6C5CE7" },
                      { title: "Sync bidirectionnelle temporaire", desc: "Pendant la transition, on a mis en place une synchronisation bidirectionnelle entre Pardot/Salesforce et HubSpot. Chaque nouveau lead, chaque mise a jour de deal etait replique dans les deux systemes.", color: "#4B5EFC" },
                      { title: "Periode de double-run", desc: "Pendant 3 semaines, les equipes ont travaille dans les deux systemes en parallele. Ca a permis de valider que HubSpot produisait les memes resultats que Salesforce avant de couper l\u2019ancien systeme.", color: "#22C55E" },
                      { title: "Rollback plan detaille", desc: "A chaque etape, un plan de retour arriere etait documente et teste. Si un probleme critique etait detecte, on pouvait revenir a l\u2019etat precedent en moins de 4 heures. Le rollback n\u2019a jamais ete active.", color: "#FF7A59" },
                    ].map((m) => (
                      <div key={m.title} className="rounded-xl bg-white/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: m.color }} />
                          <p className="text-[13px] font-semibold text-white">{m.title}</p>
                        </div>
                        <p className="text-[11px] text-white/40 leading-[1.6]">{m.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-white/5 p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Timeline de la migration</p>
                    <div className="space-y-2">
                      {[
                        { week: "S1-S3", label: "Audit Pardot + Salesforce, document de mapping" },
                        { week: "S4-S6", label: "Recreation des workflows et templates marketing" },
                        { week: "S7-S8", label: "Migration des contacts et historique d\u2019engagement" },
                        { week: "S9-S10", label: "Go-live marketing, formation equipe marketing" },
                        { week: "S8-S12", label: "Mapping CRM, data cleaning, creation des objets" },
                        { week: "S13-S16", label: "Migration CRM par lots, validation croisee" },
                        { week: "S17-S18", label: "Double-run, formation equipes commerciales" },
                        { week: "S19-S20", label: "Go-live CRM, decommission Salesforce" },
                      ].map((t) => (
                        <div key={t.week} className="flex items-center gap-3">
                          <span className="text-[10px] font-mono text-[#6C5CE7] w-14 shrink-0">{t.week}</span>
                          <div className="flex-1 h-px bg-white/10" />
                          <span className="text-[10px] text-white/50">{t.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Configuration HubSpot unifiee */}
              <section id="configuration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Configuration HubSpot unifiee</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;un des avantages majeurs de cette migration : tout reunir dans un seul outil. Plus de synchronisation Pardot-Salesforce a maintenir, plus de desyncs entre marketing et sales, plus de double saisie. Un seul ecosysteme, une seule source de verite.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Pipeline par segment", desc: "3 pipelines configures dans HubSpot : Enterprise (grands comptes, cycle long, multi-interlocuteurs), Mid-Market (PME, cycle moyen, qualification rapide) et Partnerships (revendeurs et integrateurs). Chaque pipeline a ses propres etapes, probabilites et SLAs.", color: "#6C5CE7" },
                      { title: "Workflows marketing ameliores", desc: "Les 47 workflows Pardot ont ete recrees, mais on en a profite pour les ameliorer. Les engagement programs lineaires sont devenus des workflows branches avec des chemins personnalises selon le comportement. Le nurturing est passe de 5 emails generiques a 12 emails segmentes par persona et industrie.", color: "#4B5EFC" },
                      { title: "Scoring unifie marketing + sales", desc: "Un seul score combine les signaux marketing (ouvertures, clics, visites, telechargements) et les signaux sales (reponses emails, meetings, proposals). Le MQL threshold est dynamique : 80 points pour les Enterprise, 50 pour les Mid-Market. Le score se degrade automatiquement apres 30 jours d\u2019inactivite.", color: "#22C55E" },
                      { title: "Lifecycle stages alignes", desc: "Les lifecycle stages HubSpot ont ete configures pour refleter le funnel HiPay : Subscriber, Lead, MQL, SQL, Opportunity, Customer, Evangelist. Le passage d\u2019un stage a l\u2019autre est automatique via des workflows, avec des notifications aux bonnes equipes a chaque transition.", color: "#FF7A59" },
                      { title: "Proprietes et vues par equipe", desc: "Chaque equipe a ses propres vues personnalisees : les marketeurs voient les proprietes d\u2019engagement, les commerciaux voient le pipeline et l\u2019historique, le management voit les KPIs. Moins de bruit, plus de pertinence.", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 items-start rounded-xl border border-[#F2F2F2] p-3">
                        <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={{ background: item.color }} />
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Integrations et connecteurs */}
              <section id="integrations" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Integrations et connecteurs</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HiPay ne vit pas dans un silo. Le CRM doit communiquer avec l&apos;ecosysteme technique de la FinTech. On a configure 5 integrations cles pour que HubSpot devienne le hub central de l&apos;information client.</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /></div>
                      <span className="text-[10px] text-white/50 font-mono">Architecture des integrations</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[11px] text-[#E0E0E0] leading-[1.8] whitespace-pre-wrap font-mono">
{`HiPay Payment API  <-->  HubSpot (via API privee)
  - Statut des transactions synce sur le deal
  - Volume de paiement affiche sur la fiche entreprise
  - Alertes automatiques en cas d'incident paiement

ERP (comptabilite)  <-->  HubSpot (via middleware)
  - Facturation automatique a la cloture du deal
  - Suivi des encaissements sur la timeline

Outils internes     <-->  HubSpot (via webhooks)
  - Onboarding technique trace dans le CRM
  - Tickets support remontes sur la fiche contact

Slack               <-->  HubSpot (natif)
  - Notification nouveau MQL dans #sales-alerts
  - Notification deal gagne dans #wins
  - Resume hebdomadaire pipeline dans #management

BI / Data warehouse <-->  HubSpot (via export API)
  - Donnees CRM exportees quotidiennement
  - Reporting cross-platform dans Looker`}
                      </pre>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "API paiement HiPay", desc: "L\u2019integration la plus critique. Les donnees de transaction (volume, statut, incidents) sont synchronisees en temps reel sur les fiches deals et entreprises. Les commerciaux voient l\u2019activite de paiement sans quitter HubSpot.", count: "Temps reel" },
                      { title: "ERP et facturation", desc: "A la cloture d\u2019un deal dans HubSpot, la facture est automatiquement generee dans l\u2019ERP. Le suivi des encaissements est remonte dans le CRM pour que le CS ait une vue complete.", count: "Automatise" },
                      { title: "Slack notifications", desc: "Chaque evenement cle declenche une notification Slack ciblee : nouveau MQL pour les sales, deal gagne pour toute l\u2019equipe, incident paiement pour le support. Les channels sont segmentes par equipe.", count: "5 channels" },
                      { title: "BI et reporting", desc: "Les donnees HubSpot sont exportees quotidiennement vers le data warehouse pour alimenter les dashboards Looker. Le management a une vue unifiee qui combine donnees CRM, paiement et financieres.", count: "Quotidien" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-[#111]">{item.title}</p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-medium">{item.count}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Formation et go-live */}
              <section id="formation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Formation et go-live</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La reussite d&apos;une migration ne se joue pas seulement sur la technique. Si les equipes ne sont pas formees et accompagnees, le meilleur outil du monde sera sous-utilise. On a structure la formation en 3 phases, alignees sur la migration sequentielle.</p>
                  </div>

                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Formation equipe marketing (semaine 9)", desc: "4 sessions de 2 heures pour les 15 marketeurs : navigation HubSpot, creation de workflows, gestion des listes, email builder, reporting marketing. Chaque participant a recree son propre workflow sous supervision avant le go-live.", color: "#6C5CE7" },
                      { num: "2", title: "Formation equipes commerciales (semaine 17)", desc: "6 sessions de 90 minutes pour les 45 commerciaux, segmentees par equipe (France, International, Partnerships). Focus sur les taches quotidiennes : gestion des deals, prise de notes, sequences d\u2019emails, utilisation des playbooks et des templates.", color: "#4B5EFC" },
                      { num: "3", title: "Formation management (semaine 18)", desc: "2 sessions dediees pour les 8 managers : dashboards, forecasting, rapports d\u2019activite, et configuration des objectifs par equipe. Le management devait etre autonome sur le reporting des le go-live CRM.", color: "#22C55E" },
                      { num: "4", title: "Go-live progressif", desc: "Le go-live marketing a eu lieu en semaine 10. Le go-live CRM en semaine 19. A chaque fois, on a fait un soft launch avec une equipe pilote (5 personnes) pendant 3 jours avant d\u2019ouvrir a tout le monde. Ca a permis de detecter et corriger les derniers ajustements.", color: "#FF7A59" },
                      { num: "5", title: "Support post-migration : 6 semaines", desc: "Apres chaque go-live, l\u2019equipe Ceres est restee disponible pendant 6 semaines en support reactif. Un channel Slack dedie avec un SLA de reponse de 2 heures. 127 tickets traites, principalement des questions d\u2019utilisation et des ajustements de workflows.", color: "#6C5CE7" },
                    ].map((point, i) => (
                      <div key={point.num}>
                        <div className="flex gap-3 items-start py-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: point.color }}>
                            {point.num}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-[#111] mb-1">{point.title}</p>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{point.desc}</p>
                          </div>
                        </div>
                        {i < 4 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Personnes formees", value: "68" },
                      { label: "Heures de formation", value: "32h" },
                      { label: "Tickets post-migration", value: "127" },
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

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats apres 20 semaines</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "-50%", label: "Cout annuel de la stack (licences Salesforce + Pardot vs HubSpot)", color: "#22C55E" },
                      { value: "0", label: "Downtime pendant la migration : aucune interruption de service", color: "#4B5EFC" },
                      { value: "35K", label: "Contacts migres avec leur historique complet d\u2019engagement", color: "#6C5CE7" },
                      { value: "100%", label: "Des automations marketing recreees et operationnelles", color: "#FF7A59" },
                      { value: "+70%", label: "Taux d\u2019adoption par les equipes (vs objectif de 60%)", color: "#22C55E" },
                      { value: "20 sem.", label: "Duree totale pour les deux migrations combinees", color: "#D4A27F" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Les equipes marketing et sales travaillent dans le meme outil pour la premiere fois",
                      "Le scoring unifie a augmente le taux de conversion MQL vers SQL de 25%",
                      "Les commerciaux voient l\u2019historique marketing complet avant chaque appel",
                      "Le reporting est consolide dans un seul systeme, plus de reconciliation manuelle",
                      "La maintenance de la stack est passee de 2 personnes a temps partiel a 0,5 ETP",
                      "Le ROI du projet a ete atteint en 8 mois grace aux economies de licences",
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
                    <div className="w-12 h-12 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[14px] font-bold shrink-0">H</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;On avait reporte cette migration pendant deux ans parce qu&apos;on avait peur de la complexite. Migrer Pardot ET Salesforce en meme temps, c&apos;etait le scenario que tout le monde redoutait. Ceres a transforme ce projet en quelque chose de structure et de maitrise. La migration sequentielle, d&apos;abord le marketing puis le CRM, a ete la bonne approche : on n&apos;a jamais eu l&apos;impression de perdre le controle. Aujourd&apos;hui, toutes les equipes travaillent dans HubSpot, le cout de notre stack a ete divise par deux, et l&apos;adoption est bien au-dela de nos attentes. On aurait du le faire plus tot.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Head of Marketing</p>
                          <p className="text-[11px] text-[#999]">HiPay</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=hipay.com&sz=32" alt="HiPay" className="w-5 h-5 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous envisagez une migration vers HubSpot ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On migre vos donnees, vos workflows et vos equipes depuis Salesforce, Pardot, ou n&apos;importe quel CRM. Zero downtime, adoption garantie.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/agence-hubspot" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Nos services HubSpot
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
