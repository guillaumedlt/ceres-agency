"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Tennaxia : RevOps Part-Time sur 6 mois pour structurer la croissance ESG",
  description: "Comment Ceres a accompagne Tennaxia en RevOps Part-Time pendant 6 mois : audit CRM, automatisation, prospection CSRD et reporting pour structurer les operations revenue sans recruter.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-26",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "pourquoi-part-time", title: "Pourquoi le Part-Time" },
  { id: "phase-1", title: "Mois 1-2 : Audit et fondations" },
  { id: "phase-2", title: "Mois 3-4 : Automatisation" },
  { id: "phase-3", title: "Mois 5-6 : Reporting" },
  { id: "modele", title: "Le modele d\u2019accompagnement" },
  { id: "chantiers-esg", title: "Chantiers specifiques ESG" },
  { id: "stack", title: "Stack deployee" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Retour client" },
];

export default function TennaxiaCaseStudy() {
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
                <img src="https://www.google.com/s2/favicons?domain=tennaxia.com&sz=32" alt="Tennaxia" className="w-5 h-5" />
                <span className="text-[12px] font-semibold text-[#111]">Tennaxia</span>
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
              <span className="text-[#666]">Tennaxia</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">12 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=tennaxia.com&sz=64" alt="Tennaxia" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Tennaxia</h1>
                  <p className="text-[12px] text-[#999]">SaaS ESG / RSE | Reporting extra-financier | 100+ personnes | France</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                RevOps Part-Time sur 6 mois : comment Tennaxia a structure ses operations revenue pour accompagner sa croissance acceleree par la CSRD, avec un consultant Ceres dedie 2 jours par semaine. Audit CRM, automatisation, prospection ciblee et reporting.
              </p>

              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats sur 6 mois</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { value: "+50%", label: "Pipeline genere", color: "#22C55E" },
                    { value: "-55%", label: "Temps admin", color: "#4B5EFC" },
                    { value: "15", label: "Workflows crees", color: "#6C5CE7" },
                    { value: "Fiable", label: "Forecast", color: "#FF7A59" },
                    { value: "Scoring", label: "Operationnel", color: "#D4A27F" },
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
                    <p>Tennaxia est un editeur SaaS specialise dans le reporting extra-financier et la gestion RSE/ESG. La plateforme permet aux entreprises de collecter, piloter et publier leurs donnees de durabilite : bilan carbone, reporting CSRD, plan de vigilance, taxonomie europeenne. Plus de 100 collaborateurs, une position de leader sur le marche francais.</p>
                    <p>L&apos;entree en vigueur de la directive CSRD (Corporate Sustainability Reporting Directive) a provoque un afflux massif de demandes. Des milliers d&apos;entreprises europeennes doivent desormais publier un reporting extra-financier normalise. Pour Tennaxia, c&apos;est une opportunite historique : le marche adressable a ete multiplie par dix en deux ans.</p>
                    <p>Mais cette croissance soudaine a mis les operations commerciales sous tension. L&apos;equipe commerciale scalait rapidement, le pipeline explosait en volume, et personne ne structurait les process. Le CRM etait sous-exploite, le reporting manuel, la prospection artisanale. Le Head of Sales avait besoin de structurer sans recruter un poste a plein temps : les chantiers etaient urgents mais temporaires.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Equipe commerciale", value: "15+ sales" },
                      { label: "CRM en place", value: "HubSpot" },
                      { label: "Marche", value: "ESG / CSRD" },
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
                    <p>Tennaxia a evalue trois options : recruter un RevOps en interne, mandater un freelance, ou travailler avec une agence specialisee en mode part-time. Le format RevOps Part-Time de Ceres s&apos;est impose pour quatre raisons.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { num: "1", title: "6 mois de structuration, pas un poste permanent", desc: "Les chantiers a mener -- audit CRM, refonte pipeline, automatisation, prospection CSRD -- sont des projets bornes dans le temps. Recruter un CDI pour 6 mois de travail intensif puis du run legers, c\u2019est un mauvais calcul economique. Le part-time permet de concentrer l\u2019effort puis de reduire la charge.", color: "#6C5CE7" },
                      { num: "2", title: "Expertise immediate sur le CRM et la prospection", desc: "Tennaxia ne pouvait pas attendre 4 a 6 mois de recrutement puis 3 mois d\u2019onboarding. La fenetre de la CSRD est maintenant. Ceres apporte un consultant operationnel des la premiere semaine, avec une expertise HubSpot, data et automatisation deja eprouvee.", color: "#4B5EFC" },
                      { num: "3", title: "Consultant dedie 2 jours par semaine", desc: "Le meme consultant chaque semaine, integre a l\u2019equipe Tennaxia. Il connait le pipeline, les commerciaux, les enjeux du marche ESG. Pas de turnover, pas de re-briefing. La continuite d\u2019un interne, la flexibilite d\u2019un externe.", color: "#22C55E" },
                      { num: "4", title: "Flexibilite totale", desc: "Certaines semaines, il y a un gros chantier (migration de donnees, mise en place du scoring). D\u2019autres semaines, c\u2019est du run. Le part-time permet de passer de 2 a 3 jours sur un sprint puis de redescendre. Et l\u2019engagement est mensuel : arret possible a tout moment.", color: "#FF7A59" },
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
                        {i < 3 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8F5E9] bg-[#F1F8F1] p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Le calcul economique</p>
                    <p className="text-[11px] text-[#555] leading-[1.65]">Un RevOps en CDI : 65 a 85K de salaire brut, soit 90 a 115K charges annuelles, plus 4 a 6 mois de recrutement sur un marche tendu. Le RevOps Part-Time Ceres sur 6 mois : un investissement maitrise, un consultant operationnel des le jour 1, et la possibilite de prolonger ou d&apos;arreter chaque mois.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Phase 1 : Audit et fondations */}
              <section id="phase-1" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-semibold">Mois 1-2</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Audit et fondations</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les deux premiers mois sont consacres a l&apos;audit complet du CRM et a la mise en place des fondations. Avant d&apos;automatiser, il faut que la structure soit solide. Un pipeline mal defini avec des donnees degradees, c&apos;est de l&apos;automatisation qui amplifie le desordre.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Audit CRM complet", desc: "Revue de l\u2019architecture HubSpot : objets, proprietes, pipelines, workflows existants, integrations. Identification des points de friction, des champs inutilises, des doublons. Beaucoup de proprietes creees au fil de l\u2019eau sans convention de nommage. Score de sante CRM au depart : 38/100." },
                      { step: "02", title: "Restructuration du pipeline", desc: "Refonte des etapes du pipeline de vente pour refleter le cycle de vente long propre au marche ESG. Passage de 8 etapes vagues a 5 etapes claires avec des criteres d\u2019entree et de sortie documentes. Ajout de proprietes obligatoires a chaque etape : montant estime, date de decision, nombre de decideurs impliques." },
                      { step: "03", title: "Nettoyage des donnees", desc: "Suppression de 8 000 contacts obsoletes (anciens salons, leads froids de plus de 18 mois). Deduplication de 2 100 doublons. Normalisation des secteurs d\u2019activite, des tailles d\u2019entreprise et des fonctions des contacts. Les donnees passent d\u2019inexploitables a fiables." },
                      { step: "04", title: "Scoring leads et comptes", desc: "Mise en place d\u2019un lead scoring adapte au marche ESG : criteres demographiques (taille de l\u2019entreprise, secteur reglemente, obligation CSRD) et comportementaux (pages vues, telechargement de livre blanc, demande de demo). Seuil MQL calibre a 45 points." },
                      { step: "05", title: "Segmentation CSRD", desc: "Creation de listes dynamiques par vague d\u2019obligation CSRD : entreprises deja soumises (grandes entreprises cotees), entreprises soumises a partir de 2025 (grandes non-cotees), entreprises soumises a partir de 2026 (PME cotees). Chaque segment a sa strategie de prospection dediee." },
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
                      { label: "Score CRM avant", value: "38/100" },
                      { label: "Score CRM apres", value: "74/100" },
                      { label: "Doublons supprimes", value: "2 100" },
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

              {/* Phase 2 : Automatisation et outbound */}
              <section id="phase-2" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-semibold">Mois 3-4</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Automatisation et outbound</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les fondations sont en place. On passe a l&apos;automatisation des process et a la mise en place de sequences de prospection ciblees. L&apos;objectif : supprimer le travail manuel repetitif et lancer des campagnes outbound structurees autour de l&apos;obligation CSRD.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Workflows d\u2019automatisation", desc: "Creation de 10 workflows HubSpot : assignment automatique des leads par segment CSRD et par territoire, notifications d\u2019activite aux managers, alertes deal stagne (plus de 21 jours sans activite), mise a jour automatique des proprietes de lifecycle stage. Chaque workflow documente." },
                      { step: "02", title: "Sequences de prospection CSRD", desc: "Construction de 5 sequences outbound multicanal : email + appel + LinkedIn. Chaque sequence adaptee au segment CSRD du prospect. Les entreprises deja soumises recoivent un message d\u2019urgence reglementaire. Les prochaines vagues recoivent un message de preparation. Templates personnalises par secteur et par taille." },
                      { step: "03", title: "Nurturing automatise", desc: "Mise en place de 3 workflows de nurturing pour les leads non prets a acheter : envoi de contenu educatif sur la CSRD (guides, webinaires, etudes de cas), scoring progressif, alerte au commercial quand le lead atteint le seuil MQL. Le nurturing transforme les leads froids en leads qualifies sur 8 a 12 semaines." },
                      { step: "04", title: "Integration des outils d\u2019enrichissement", desc: "Connexion des outils d\u2019enrichissement de donnees a HubSpot : enrichissement automatique des fiches entreprises (effectif, chiffre d\u2019affaires, secteur, obligation CSRD). Chaque nouveau lead entrant est enrichi en temps reel. Plus de recherche manuelle pour les commerciaux." },
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

                  {/* Outbound mockup */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 border-b border-[#E8E8E8]">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /></div>
                      <span className="text-[10px] text-[#999] font-medium">Sequence outbound CSRD -- Exemple de ciblage</span>
                    </div>
                    <div className="bg-white p-4">
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { segment: "Vague 1 -- Cotees", message: "Obligation immediate", contacts: "1 200+" },
                          { segment: "Vague 2 -- Grandes", message: "Obligation 2025", contacts: "3 500+" },
                          { segment: "Vague 3 -- PME cotees", message: "Preparation 2026", contacts: "2 800+" },
                        ].map((seg) => (
                          <div key={seg.segment} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                            <p className="text-[10px] font-semibold text-[#111] mb-1">{seg.segment}</p>
                            <p className="text-[9px] text-[#4B5EFC] font-medium mb-1">{seg.message}</p>
                            <p className="text-[9px] text-[#999]">{seg.contacts} contacts</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {[
                          { label: "Sequences actives", value: "5" },
                          { label: "Taux d\u2019ouverture moyen", value: "42%" },
                          { label: "Taux de reponse", value: "12%" },
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

              {/* Phase 3 : Reporting et optimisation */}
              <section id="phase-3" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-semibold">Mois 5-6</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Reporting et optimisation</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les process sont en place, les sequences tournent, les donnees sont propres. On passe a l&apos;etape finale : construire les dashboards operationnels, mettre en place un forecast fiable, et coacher les commerciaux avec de la donnee pour optimiser chaque etape du funnel.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Dashboards operationnels", desc: "Creation de 4 dashboards HubSpot : pipeline en temps reel (par segment CSRD, par commercial, par montant), activite commerciale (appels, emails, rendez-vous), performance par representant (taux de conversion par etape), et funnel marketing-to-sales (MQL, SQL, opportunite, client). Chaque manager a sa vue. Plus de fichiers Excel.", color: "#22C55E" },
                      { step: "02", title: "Forecast structure", desc: "Mise en place d\u2019un modele de prevision des ventes base sur les donnees historiques du pipeline : taux de conversion par etape, velocity moyenne, saisonnalite du marche ESG (pics de demande avant les echeances CSRD). Le forecast passe d\u2019une estimation au feeling a une prevision chiffree partagee chaque semaine.", color: "#6C5CE7" },
                      { step: "03", title: "Coaching commercial data-driven", desc: "Tableaux de bord individuels par commercial : taux de conversion par etape, temps moyen par deal, nombre d\u2019activites, comparaison avec la moyenne de l\u2019equipe. Le Head of Sales utilise ces donnees dans les 1:1 hebdomadaires. Les feedbacks deviennent factuels, pas subjectifs.", color: "#4B5EFC" },
                      { step: "04", title: "Iteration sur le scoring", desc: "Apres 4 mois de donnees, recalibrage du scoring : ajustement des poids des criteres en fonction des taux de conversion reels. Le critere \"obligation CSRD imminente\" est passe de 10 a 20 points. Le critere \"taille entreprise > 500 salaries\" a ete reduit. Le scoring reflete desormais la realite terrain.", color: "#FF7A59" },
                      { step: "05", title: "Optimisation des sequences", desc: "A/B test sur les sujets d\u2019email, les horaires d\u2019envoi, le nombre de relances. Resultat : le sujet mentionnant explicitement \"CSRD\" performe 35% mieux que les sujets generiques. Les envois le mardi matin surperforment le reste de la semaine. Les sequences sont iterees tous les 15 jours.", color: "#D4A27F" },
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

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Dashboards crees", value: "4" },
                      { label: "Precision forecast", value: "Fiable" },
                      { label: "Iteration scoring", value: "2 cycles" },
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

              {/* Modele d'accompagnement */}
              <section id="modele" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Organisation</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Le modele d&apos;accompagnement</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Un consultant Ceres dedie, integre a l&apos;equipe Tennaxia comme un membre interne. Pas un prestataire qui livre un audit et disparait : quelqu&apos;un qui connait le produit, le marche ESG, les commerciaux et les enjeux de chaque deal.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Consultant dedie", desc: "Le meme consultant chaque semaine, 2 jours. Il connait le pipeline, les comptes strategiques, les cycles de decision longs du marche ESG. Pas de turnover.", icon: "C" },
                      { title: "Weekly Head of Sales", desc: "Chaque lundi, 30 minutes avec le Head of Sales. Revue du pipeline, priorisation des sujets de la semaine, alertes sur les deals a risque. Decisions rapides.", icon: "W" },
                      { title: "Monthly direction", desc: "Chaque mois, 1 heure avec la direction commerciale. Bilan des chantiers, analyse des resultats, ajustement de la roadmap ops. Transparence totale.", icon: "M" },
                      { title: "Slack channel dedie", desc: "Un channel Slack #ops-ceres pour les demandes ad hoc, les questions HubSpot, le partage des dashboards. Temps de reponse moyen : 2 heures.", icon: "S" },
                      { title: "Reporting mensuel", desc: "Chaque fin de mois, un rapport structure : chantiers realises, KPIs, recommandations pour le mois suivant. Document partage dans Notion, accessible a toute l\u2019equipe.", icon: "R" },
                      { title: "Documentation continue", desc: "Chaque process cree est documente dans Notion : playbooks, workflows, conventions de nommage, guides d\u2019utilisation HubSpot. Tennaxia reste autonome a la fin de l\u2019accompagnement.", icon: "D" },
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
                    <p className="text-[11px] text-white/50 leading-[1.65]">Le consultant Ceres n&apos;est pas un executant. Il propose, challenge et arbitre avec les stakeholders. Il a acces a HubSpot en admin, aux outils de prospection, au Slack de l&apos;equipe commerciale. Il participe aux meetings sales. C&apos;est un membre de l&apos;equipe, a temps partiel, avec la posture d&apos;un head of RevOps.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Chantiers specifiques ESG */}
              <section id="chantiers-esg" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les chantiers specifiques au marche ESG</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le marche du logiciel ESG/RSE a des specificites qui impactent directement les operations revenue. Le cycle de vente est long, les decideurs sont multiples, et la reglementation CSRD agit comme un declencheur d&apos;achat unique. Le RevOps doit s&apos;adapter a ces particularites.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { num: "1", title: "Cycle de vente long : 4 a 9 mois", desc: "Un logiciel de reporting ESG implique des budgets importants, une integration technique, et une validation par la direction RSE, la DSI et la direction financiere. Le pipeline a ete structure pour refleter cette realite : les etapes du funnel incluent des jalons specifiques (POC valide, comite d\u2019achat planifie, validation DSI). Les alertes de stagnation sont calibrees sur 21 jours, pas 7.", color: "#6C5CE7" },
                      { num: "2", title: "Multi-decideurs : 3 a 5 interlocuteurs par deal", desc: "Un deal ESG implique le directeur RSE/ESG, le DAF, le DSI, parfois le DG et le responsable conformite. Le CRM a ete configure pour tracker chaque interlocuteur et son role dans la decision. Les workflows de relance ciblent le bon contact selon l\u2019etape du deal. Le scoring de compte tient compte du nombre de decideurs engages.", color: "#4B5EFC" },
                      { num: "3", title: "La CSRD comme trigger d\u2019achat", desc: "La reglementation CSRD impose des echeances precises. Les sequences de prospection utilisent ces echeances comme levier d\u2019urgence : \"Votre entreprise est soumise a la CSRD des janvier 2026. Etes-vous pret ?\". Les listes dynamiques segmentent les prospects par vague d\u2019obligation. Le nurturing adapte le contenu au calendrier reglementaire du prospect.", color: "#22C55E" },
                      { num: "4", title: "Saisonnalite reglementaire", desc: "Le marche ESG est fortement saisonnier : les pics de demande surviennent 6 a 12 mois avant les echeances CSRD, puis a la publication des premiers rapports. Le forecast integre cette saisonnalite. Les sequences outbound sont intensifiees 9 mois avant chaque echeance. Les budgets marketing sont concentres sur ces periodes.", color: "#FF7A59" },
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
                        {i < 3 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8F5E9] bg-[#F1F8F1] p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">L&apos;avantage Ceres sur ce marche</p>
                    <p className="text-[11px] text-[#555] leading-[1.65]">Le consultant Ceres a rapidement maitrise les specificites du marche ESG : calendrier CSRD, taxonomie des decideurs, cycle de vente long. Cette expertise sectorielle, combinee a l&apos;expertise CRM et automatisation, a permis de deployer des process adaptes au marche plutot que des process generiques inadaptes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Stack deployee */}
              <section id="stack" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La stack deployee</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une stack volontairement simple et integree. Pas de proliferation d&apos;outils : chaque brique a un role precis et communique avec les autres. L&apos;objectif est de centraliser l&apos;information dans HubSpot et de limiter les silos.</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 border-b border-[#E8E8E8]">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /></div>
                      <span className="text-[10px] text-[#999] font-medium">Stack technique Tennaxia</span>
                    </div>
                    <div className="bg-white p-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { name: "HubSpot", role: "CRM, pipeline, workflows, sequences, dashboards", domain: "hubspot.com", primary: true },
                          { name: "Outils enrichissement", role: "Enrichissement donnees entreprises et contacts", domain: "clearbit.com", primary: false },
                          { name: "Slack", role: "Communication interne, channel dedie ops", domain: "slack.com", primary: false },
                          { name: "Notion", role: "Documentation, playbooks, reporting mensuel", domain: "notion.so", primary: false },
                        ].map((tool) => (
                          <div key={tool.name} className={`text-center p-3 rounded-xl border ${tool.primary ? "bg-[#6C5CE7]/5 border-[#6C5CE7]/20" : "bg-[#FAFAFA] border-[#F2F2F2]"}`}>
                            <img src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=32`} alt={tool.name} className="w-6 h-6 mx-auto mb-2" />
                            <p className="text-[11px] font-semibold text-[#111]">{tool.name}</p>
                            <p className="text-[9px] text-[#999] mt-1 leading-tight">{tool.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { label: "Source de verite", value: "HubSpot" },
                      { label: "Integrations", value: "4 outils" },
                      { label: "Sync automatique", value: "Temps reel" },
                      { label: "Documentation", value: "Notion" },
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
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats sur 6 mois</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "+50%", label: "Pipeline genere en 6 mois (croissance nette vs semestre precedent)", color: "#22C55E" },
                      { value: "-55%", label: "Temps administratif par commercial (saisie, reporting, recherche de donnees)", color: "#4B5EFC" },
                      { value: "15", label: "Workflows automatises en production dans HubSpot", color: "#6C5CE7" },
                      { value: "Fiable", label: "Forecast structure et partage chaque semaine avec la direction", color: "#FF7A59" },
                      { value: "Scoring", label: "Lead scoring operationnel, calibre sur les donnees reelles du marche ESG", color: "#22C55E" },
                      { value: "5", label: "Sequences outbound actives avec segmentation CSRD par vague", color: "#D4A27F" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Le pipeline a progresse de 50% grace a un CRM structure, des sequences outbound ciblees CSRD et un scoring operationnel",
                      "Les commerciaux passent 55% de temps en moins sur les taches administratives grace aux workflows et a l\u2019enrichissement automatique",
                      "15 workflows automatisent l\u2019assignment, le nurturing, les alertes de stagnation, le scoring et le reporting",
                      "Le forecast est passe d\u2019une estimation informelle a une prevision structuree partagee chaque semaine avec la direction",
                      "Le scoring a ete calibre puis recalibre apres 4 mois de donnees pour refleter les taux de conversion reels du marche ESG",
                      "Les 5 sequences outbound segmentees par vague CSRD generent un taux de reponse de 12%, trois fois superieur aux campagnes precedentes",
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
                    <div className="w-12 h-12 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[14px] font-bold shrink-0">AT</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;La CSRD a accelere notre marche du jour au lendemain. On avait besoin de structurer nos operations commerciales rapidement, sans passer par un recrutement long et couteux. Ceres a ete operationnel en une semaine. En 6 mois, le CRM est devenu un vrai outil de pilotage, les commerciaux ont retrouve du temps pour vendre, et la prospection ciblee par vague CSRD a transforme notre pipeline. Le format part-time etait exactement ce qu&apos;il nous fallait : l&apos;expertise d&apos;un RevOps senior, la flexibilite en plus, et la capacite de monter en charge quand c&apos;etait necessaire.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Arnaud Terrier</p>
                          <p className="text-[11px] text-[#999]">Head of Sales, Tennaxia</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=tennaxia.com&sz=32" alt="Tennaxia" className="w-5 h-5 ml-auto" />
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
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">Un consultant Ceres dedie, integre a votre equipe, 2 a 3 jours par semaine. CRM, data, automatisation, prospection. Operationnel en 1 semaine.</p>
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
