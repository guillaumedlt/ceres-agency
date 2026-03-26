"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client TotalEnergies : migration HubSpot multi-regions & Microsoft Dynamics",
  description: "Comment Ceres a accompagne TotalEnergies dans la migration de Microsoft Dynamics vers HubSpot et l\u2019unification de leurs instances HubSpot PAK US vers une instance europeenne unique.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-20",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "defis", title: "Les defis" },
  { id: "migration-dynamics", title: "Migration Dynamics vers HubSpot" },
  { id: "migration-pak", title: "Unification PAK US vers EU" },
  { id: "architecture", title: "Architecture HubSpot cible" },
  { id: "data", title: "Migration des donnees" },
  { id: "deploiement", title: "Deploiement et adoption" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Le mot de Laisa" },
];

const timeline = [
  { phase: "Phase 1", weeks: "Semaines 1-4", title: "Audit & Cadrage", items: ["Audit de l\u2019instance Dynamics 365 (objets, champs, workflows, donnees)", "Audit de l\u2019instance HubSpot PAK US (configuration, integrations, users)", "Cartographie des processus metier par BU", "Definition de l\u2019architecture HubSpot cible (instance EU unique)", "Plan de migration detaille et matrice de risques"], color: "#FF7A59" },
  { phase: "Phase 2", weeks: "Semaines 5-10", title: "Migration Dynamics vers HubSpot", items: ["Mapping des champs Dynamics vers HubSpot (320+ proprietes)", "Nettoyage et deduplication des donnees Dynamics", "Migration par lots : contacts, companies, deals, activites", "Recreation des workflows et automatisations", "Tests d\u2019integrite et validation par BU"], color: "#4B5EFC" },
  { phase: "Phase 3", weeks: "Semaines 11-14", title: "Unification PAK US vers EU", items: ["Export complet de l\u2019instance PAK US", "Mapping des proprietes PAK US vers le schema EU", "Migration des contacts, deals et historique d\u2019activites", "Reconciliation des doublons cross-instances", "Configuration des permissions par region/BU"], color: "#6D00CC" },
  { phase: "Phase 4", weeks: "Semaines 15-18", title: "Configuration & Automatisation", items: ["Pipeline par BU avec stages personnalises", "15+ workflows HubSpot (attribution, lifecycle, notifications)", "Dashboards par region et par BU", "Integrations (ERP, outils internes, reporting)", "Lead scoring adapte par marche (EU vs US)"], color: "#22C55E" },
  { phase: "Phase 5", weeks: "Semaines 19-22", title: "Formation & Go-Live", items: ["Formation par vagues : admins, managers, commerciaux", "Playbooks et documentation Notion", "Go-live progressif par BU (pas de big bang)", "Support post-migration pendant 4 semaines", "Optimisation continue et ajustements"], color: "#D4A27F" },
];

const migrationStats = [
  { value: "45K+", label: "Contacts migres" },
  { value: "12K+", label: "Entreprises" },
  { value: "8K+", label: "Deals avec historique" },
  { value: "320+", label: "Proprietes mappees" },
  { value: "150K+", label: "Activites (emails, calls, notes)" },
  { value: "2", label: "Systemes sources (Dynamics + HubSpot US)" },
];

export default function TotalEnergiesCaseStudy() {
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
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "22%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "58%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "78%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <img src="https://www.google.com/s2/favicons?domain=totalenergies.com&sz=32" alt="TotalEnergies" className="w-5 h-5" />
                <span className="text-[12px] font-semibold text-[#111]">TotalEnergies</span>
              </div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/cas-clients" className="hover:text-[#111] transition-colors">Cas clients</Link><span>/</span>
              <span className="text-[#666]">TotalEnergies</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">15 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=totalenergies.com&sz=64" alt="TotalEnergies" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">TotalEnergies</h1>
                  <p className="text-[12px] text-[#999]">Energie | Grand Groupe | International</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Migration Microsoft Dynamics vers HubSpot et unification de l&apos;instance HubSpot PAK US sur une instance europeenne unique. Un projet de transformation CRM a grande echelle sur 22 semaines.
              </p>

              {/* Results banner */}
              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "1", label: "Instance HubSpot unifiee", color: "#22C55E" },
                    { value: "45K+", label: "Contacts migres", color: "#4B5EFC" },
                    { value: "22 sem", label: "Projet complet", color: "#FF7A59" },
                    { value: "0", label: "Perte de donnees", color: "#6D00CC" },
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
                    <p>TotalEnergies, l&apos;un des leaders mondiaux de l&apos;energie, operait avec deux systemes CRM distincts au sein de ses divisions B2B. Une partie des equipes utilisait Microsoft Dynamics 365, heritee d&apos;une organisation historique. En parallele, la division PAK (Pack) aux Etats-Unis avait deploye sa propre instance HubSpot de facon autonome.</p>
                    <p>Cette situation creait des silos de donnees majeurs. Les equipes europeennes et americaines n&apos;avaient aucune visibilite partagee sur les comptes, les contacts et les opportunites. Le reporting consolide etait impossible. Et la conformite RGPD de l&apos;instance US posait des questions reglementaires pour les contacts europeens.</p>
                    <p>La direction a pris la decision de tout unifier : migrer Dynamics vers HubSpot, rapatrier l&apos;instance PAK US sur une instance HubSpot europeenne, et configurer un CRM unique qui couvre l&apos;ensemble des business units avec des permissions granulaires par region.</p>
                  </div>

                  {/* Architecture avant/apres */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-4">
                      <p className="text-[11px] font-semibold text-[#EF4444] mb-3">Avant : 2 systemes isoles</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 rounded-lg bg-white/80 p-2">
                          <img src="https://www.google.com/s2/favicons?domain=microsoft.com&sz=32" alt="Dynamics" className="w-4 h-4" />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">Microsoft Dynamics 365</p>
                            <p className="text-[9px] text-[#999]">Europe | 25K contacts | Equipes historiques</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg bg-white/80 p-2">
                          <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">HubSpot PAK US</p>
                            <p className="text-[9px] text-[#999]">Etats-Unis | 20K contacts | Division PAK</p>
                          </div>
                        </div>
                        <div className="mt-2 space-y-1">
                          {["Pas de visibilite cross-region", "Reporting impossible a consolider", "RGPD non conforme sur l\u2019instance US", "Doublons entre les 2 systemes"].map((p) => (
                            <p key={p} className="text-[10px] text-[#EF4444]/70 flex items-start gap-1.5">
                              <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] p-4">
                      <p className="text-[11px] font-semibold text-[#22C55E] mb-3">Apres : 1 instance unifiee</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 rounded-lg bg-white/80 p-2">
                          <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">HubSpot Enterprise EU</p>
                            <p className="text-[9px] text-[#999]">Instance unique | 45K+ contacts | Toutes BU</p>
                          </div>
                        </div>
                        <div className="mt-2 space-y-1">
                          {["Visibilite 360 sur tous les comptes", "Reporting consolide en temps reel", "Hebergement EU conforme RGPD", "Permissions granulaires par BU/region", "Source de verite unique"].map((p) => (
                            <p key={p} className="text-[10px] text-[#22C55E]/70 flex items-start gap-1.5">
                              <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13.3 4.3L6 11.6L2.7 8.3" /></svg>
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Defis */}
              <section id="defis" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les defis du projet</h2>
                  <div className="space-y-3">
                    {[
                      { title: "Complexite des donnees Dynamics", desc: "Dynamics 365 etait en place depuis plusieurs annees avec des customisations lourdes : 320+ proprietes, des workflows complexes, des vues personnalisees par equipe, et des integrations avec l\u2019ERP interne. Le mapping vers HubSpot necessitait une analyse champ par champ.", color: "#FF7A59" },
                      { title: "Deux schemas de donnees differents", desc: "L\u2019instance Dynamics et l\u2019instance HubSpot PAK US avaient des structures completement differentes : noms de proprietes, types de champs, pipeline stages, lifecycle definitions. Reconcilier les deux dans un schema unique a ete le defi central.", color: "#4B5EFC" },
                      { title: "Conformite RGPD", desc: "Les contacts europeens etaient partiellement stockes sur l\u2019instance HubSpot US (data center americain). La migration vers une instance EU etait une obligation reglementaire, pas seulement une preference.", color: "#6D00CC" },
                      { title: "Continuite d\u2019activite", desc: "Les equipes commerciales ne pouvaient pas arreter de travailler pendant la migration. Le projet devait se faire en parallele des operations, sans interruption de service, avec un plan de rollback en cas de probleme.", color: "#22C55E" },
                      { title: "Adoption multi-culturelle", desc: "Les equipes US etaient habituees a HubSpot, les equipes EU a Dynamics. Former tout le monde sur un systeme unique tout en respectant les specificites de chaque marche necessitait une approche de change management structuree.", color: "#D4A27F" },
                      { title: "Historique des interactions", desc: "Il ne suffisait pas de migrer les contacts. L\u2019historique complet des activites (emails, calls, meetings, notes) devait etre preserve pour que les commerciaux ne perdent pas le contexte de leurs relations.", color: "#FF7A59" },
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

              {/* Migration Dynamics */}
              <section id="migration-dynamics" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=microsoft.com&sz=32" alt="Dynamics" className="w-5 h-5" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Migration Dynamics 365 vers HubSpot</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La migration de Dynamics vers HubSpot a ete le chantier le plus lourd du projet. Dynamics etait profondement customise, avec des entites et des relations complexes qui n&apos;ont pas d&apos;equivalent direct dans HubSpot.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Cartographie complete de Dynamics", desc: "On a documente chaque objet, chaque propriete, chaque workflow, chaque vue, chaque rapport. 320+ proprietes au total, dont 180 reellement utilisees. Les 140 restantes ont ete archivees apres validation avec les equipes." },
                      { step: "02", title: "Mapping des champs", desc: "Chaque propriete Dynamics a ete mappee vers une propriete HubSpot equivalente. Pour les cas sans equivalent (entites custom Dynamics), on a cree des objets custom HubSpot ou utilise des proprietes calculees." },
                      { step: "03", title: "Nettoyage pre-migration", desc: "Avant de migrer, on a deduplique la base Dynamics (8% de doublons), standardise les formats (noms, pays, secteurs), et archive les contacts inactifs depuis plus de 24 mois. La base est passee de 32K a 25K contacts propres." },
                      { step: "04", title: "Migration par lots", desc: "La migration a ete faite par lots pour limiter les risques : d\u2019abord les companies (5K), puis les contacts (25K), puis les deals (4K), et enfin les activites (80K emails, calls, notes). Chaque lot a ete valide avant de passer au suivant." },
                      { step: "05", title: "Recreation des workflows", desc: "Les 28 workflows Dynamics ont ete recrees dans HubSpot. Certains ont ete simplifies, d\u2019autres fusionnes. On est passe de 28 a 15 workflows, plus lisibles et plus maintenables." },
                      { step: "06", title: "Validation et recette", desc: "Chaque BU a valide ses donnees : 10 contacts verifies manuellement par equipe, rapports compares Dynamics vs HubSpot, workflows testes en staging. Zero perte de donnees confirmee." },
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

                  {/* Field mapping mockup */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F5F5F5] px-4 py-2 flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-[#999]">Extrait du mapping des champs (320+ proprietes)</span>
                    </div>
                    <div className="bg-white p-3 overflow-x-auto">
                      <table className="w-full text-[10px]">
                        <thead>
                          <tr className="border-b border-[#F2F2F2]">
                            <th className="text-left py-2 px-2 text-[#999] font-medium">Dynamics 365</th>
                            <th className="text-left py-2 px-2 text-[#999] font-medium">Type</th>
                            <th className="text-center py-2 px-2 text-[#999]"></th>
                            <th className="text-left py-2 px-2 text-[#4B5EFC] font-medium">HubSpot</th>
                            <th className="text-left py-2 px-2 text-[#4B5EFC] font-medium">Type</th>
                            <th className="text-left py-2 px-2 text-[#999] font-medium">Transformation</th>
                          </tr>
                        </thead>
                        <tbody className="text-[#555]">
                          {[
                            { dyn: "account.name", dynType: "String", hs: "company.name", hsType: "String", transform: "Direct" },
                            { dyn: "account.revenue", dynType: "Currency", hs: "company.annualrevenue", hsType: "Number", transform: "USD vers EUR" },
                            { dyn: "contact.jobtitle", dynType: "String", hs: "contact.jobtitle", hsType: "String", transform: "Normalisation titres" },
                            { dyn: "opportunity.estimatedvalue", dynType: "Currency", hs: "deal.amount", hsType: "Number", transform: "Conversion devise" },
                            { dyn: "opportunity.salesstage", dynType: "OptionSet", hs: "deal.dealstage", hsType: "Enumeration", transform: "Mapping 12 vers 6 stages" },
                            { dyn: "activitypointer.subject", dynType: "String", hs: "engagement.title", hsType: "String", transform: "Direct" },
                          ].map((row) => (
                            <tr key={row.dyn} className="border-b border-[#F9F9F9]">
                              <td className="py-1.5 px-2 font-mono text-[#111]">{row.dyn}</td>
                              <td className="py-1.5 px-2 text-[#999]">{row.dynType}</td>
                              <td className="py-1.5 px-2 text-center text-[#CCC]">
                                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                              </td>
                              <td className="py-1.5 px-2 font-mono text-[#4B5EFC]">{row.hs}</td>
                              <td className="py-1.5 px-2 text-[#999]">{row.hsType}</td>
                              <td className="py-1.5 px-2"><span className="px-1.5 py-0.5 rounded bg-[#F5F5F5] text-[#777]">{row.transform}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Migration PAK US */}
              <section id="migration-pak" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Unification HubSpot PAK US vers l&apos;instance EU</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La division PAK aux Etats-Unis avait sa propre instance HubSpot, configuree independamment. Le defi etait de rapatrier toutes les donnees sur l&apos;instance europeenne sans perturber les equipes US qui continuaient a travailler.</p>
                    <p>Ce n&apos;etait pas une simple migration de donnees : les deux instances avaient des pipelines differents, des proprietes differentes, des workflows differents et des integrations differentes. Il a fallu reconcilier les schemas avant de fusionner.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Reconciliation des schemas", desc: "Les equipes US avaient cree 85 proprietes custom, dont 30 n\u2019existaient pas cote EU. On a cree un schema unifie qui couvre les besoins des deux regions sans redondance." },
                      { title: "Gestion des doublons cross-instance", desc: "12% des contacts existaient dans les deux instances (comptes internationaux). On a defini des regles de priorite : la fiche la plus recente et la plus complete l\u2019emporte, avec merge des activites." },
                      { title: "Pipeline unique multi-region", desc: "Au lieu de 2 pipelines separes, on a cree un pipeline unique avec des vues filtrees par region. Chaque commercial voit ses deals, le management voit tout." },
                      { title: "Permissions par BU", desc: "HubSpot Enterprise permet des permissions granulaires par equipe. Les commerciaux US voient uniquement les contacts US, l\u2019equipe EU voit l\u2019EU, et le management global voit tout." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Architecture cible */}
              <section id="architecture" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Architecture</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">L&apos;architecture HubSpot cible</h2>

                  {/* Architecture diagram */}
                  <div className="rounded-xl bg-white/5 p-5">
                    <div className="flex flex-col items-center gap-4">
                      {/* Top: HubSpot Enterprise EU */}
                      <div className="w-full max-w-[400px] rounded-xl border border-[#FF7A59]/30 bg-[#FF7A59]/10 p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                          <p className="text-[13px] font-bold text-white">HubSpot Enterprise EU</p>
                        </div>
                        <p className="text-[10px] text-white/40">Instance unique | Data center EU | RGPD compliant</p>
                      </div>

                      {/* Arrow */}
                      <div className="w-px h-4 bg-white/20" />

                      {/* Middle: Hubs */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
                        {[
                          { name: "Sales Hub", desc: "Pipeline, deals, sequences", color: "#FF7A59" },
                          { name: "Marketing Hub", desc: "Emails, forms, workflows", color: "#4B5EFC" },
                          { name: "Service Hub", desc: "Tickets, knowledge base", color: "#22C55E" },
                          { name: "Ops Hub", desc: "Data sync, quality, code", color: "#6D00CC" },
                        ].map((hub) => (
                          <div key={hub.name} className="rounded-lg bg-white/5 p-2.5 text-center border border-white/5">
                            <p className="text-[10px] font-semibold text-white mb-0.5">{hub.name}</p>
                            <p className="text-[8px] text-white/30">{hub.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Arrow */}
                      <div className="w-px h-4 bg-white/20" />

                      {/* Bottom: Regions */}
                      <div className="grid grid-cols-3 gap-2 w-full">
                        {[
                          { region: "Europe", contacts: "25K contacts", teams: "Equipes FR, UK, DE" },
                          { region: "US (ex-PAK)", contacts: "20K contacts", teams: "Equipe US" },
                          { region: "International", contacts: "5K contacts", teams: "Equipes APAC, ME" },
                        ].map((r) => (
                          <div key={r.region} className="rounded-lg bg-white/5 p-2.5 text-center border border-white/5">
                            <p className="text-[10px] font-semibold text-white mb-0.5">{r.region}</p>
                            <p className="text-[8px] text-white/30">{r.contacts}</p>
                            <p className="text-[8px] text-white/20">{r.teams}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Data migration */}
              <section id="data" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La migration en chiffres</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {migrationStats.map((s) => (
                      <div key={s.label} className="text-center p-4 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[20px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">Methodologie de validation</p>
                    <p className="text-[11px] text-[#777] leading-[1.65]">Chaque lot de migration a ete valide en 3 etapes : controle automatise (comptage, integrite referentielle), verification manuelle par echantillon (10 fiches par BU), et validation metier par les responsables d&apos;equipe. Le taux d&apos;erreur final est de 0.02% (8 fiches sur 45 000), corrigees manuellement.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Deploiement */}
              <section id="deploiement" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Deploiement en 5 phases sur 22 semaines</h2>
                  <div className="space-y-3">
                    {timeline.map((p) => (
                      <div key={p.phase} className="rounded-xl border-l-[3px] bg-[#FAFAFA] p-4" style={{ borderColor: p.color }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-white px-1.5 py-0.5 rounded" style={{ background: p.color }}>{p.phase}</span>
                          <span className="text-[10px] text-[#999]">{p.weeks}</span>
                        </div>
                        <p className="text-[13px] font-semibold text-[#111] mb-2">{p.title}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
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
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats apres 22 semaines</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "1 CRM", label: "Instance HubSpot unifiee pour toutes les BU", color: "#22C55E" },
                      { value: "0", label: "Perte de donnees sur 45K+ contacts migres", color: "#4B5EFC" },
                      { value: "100%", label: "Historique preserve (emails, calls, notes)", color: "#6C5CE7" },
                      { value: "88%", label: "Adoption utilisateur a J+30", color: "#FF7A59" },
                      { value: "-70%", label: "Temps de generation des rapports", color: "#22C55E" },
                      { value: "RGPD", label: "Conformite totale (data center EU)", color: "#6D00CC" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "La direction a une visibilite temps reel sur le pipeline global pour la premiere fois",
                      "Les equipes US et EU collaborent sur les comptes internationaux sans friction",
                      "Le forecast consolide a remplace les spreadsheets regionaux",
                      "Les 15 workflows automatisent ce qui etait fait manuellement dans Dynamics",
                      "Le cout total CRM a baisse de 35% (1 licence HubSpot vs Dynamics + HubSpot)",
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

              {/* Temoignage Laisa */}
              <section id="temoignage" className="mb-8">
                <div className="rounded-2xl border-2 border-[#FF7A59]/20 bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(255,122,89,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF7A59]/10 flex items-center justify-center text-[#FF7A59] text-[14px] font-bold shrink-0">LL</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;Ce projet etait un defi enorme : migrer deux systemes CRM distincts vers une instance unique, sans perturber les equipes et sans perdre une seule donnee. Ceres a gere ca avec une rigueur impressionnante. Le mapping des 320 proprietes Dynamics, la reconciliation des doublons cross-instances, la formation des equipes US et EU en parallele. Tout a ete execute dans les delais. Aujourd&apos;hui, on a enfin une source de verite unique pour tout le groupe. C&apos;est un avant/apres.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Laisa Lopes</p>
                          <p className="text-[11px] text-[#999]">CRM Manager, TotalEnergies</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=totalenergies.com&sz=32" alt="TotalEnergies" className="w-5 h-5 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Un projet de migration CRM ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">Dynamics vers HubSpot, Salesforce vers HubSpot, ou unification multi-instances. On a l&apos;experience des projets complexes.</p>
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
