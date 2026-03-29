"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Facturation electronique 2026 : comment preparer votre CRM",
  description: "Guide complet pour preparer votre CRM a la facturation electronique obligatoire en 2026. Chorus Pro, PDP, HubSpot, workflows et checklist de mise en conformite.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/facturation-electronique-crm-2026" },
  articleSection: "Data & Reporting",
  wordCount: 3600,
  inLanguage: "fr",
};

const sections = [
  { id: "contexte", title: "Contexte de la reforme" },
  { id: "calendrier", title: "Calendrier des obligations" },
  { id: "impact-crm", title: "Impact sur votre CRM" },
  { id: "data-quality", title: "Qualite des donnees" },
  { id: "hubspot-config", title: "Configuration HubSpot" },
  { id: "outils-facturation", title: "Connecter les outils" },
  { id: "chorus-pro", title: "Chorus Pro et PDP" },
  { id: "workflows", title: "Automatiser les workflows" },
  { id: "checklist", title: "Checklist de preparation" },
  { id: "recommandations", title: "Nos recommandations" },
];

const relatedArticles = [
  { title: "Sellsy vs HubSpot : comparatif complet", slug: "sellsy-vs-hubspot", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Data quality CRM : audit et nettoyage", slug: "data-quality-crm-audit-nettoyage", category: "Data & Reporting", color: "#22C55E" },
  { title: "Migration CRM : guide complet", slug: "migration-crm-guide-complet", category: "CRM & HubSpot", color: "#FF7A59" },
];

export default function FacturationElectroniqueCrm2026Article() {
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

      {/* Decorative blobs */}
      <div className="hidden lg:block absolute top-[120px] left-[-180px] w-[400px] h-[400px] rounded-full bg-[#22C55E]/[0.03] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-[600px] right-[-200px] w-[350px] h-[350px] rounded-full bg-[#4B5EFC]/[0.03] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-[1200px] left-[-150px] w-[300px] h-[300px] rounded-full bg-[#FF7A59]/[0.03] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-[1800px] right-[-180px] w-[350px] h-[350px] rounded-full bg-[#22C55E]/[0.03] blur-3xl pointer-events-none" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Facturation%20electronique%202026%20preparer%20CRM&url=https://ceres.agency/blog/facturation-electronique-crm-2026" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/facturation-electronique-crm-2026" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Facturation electronique 2026</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Data &amp; Reporting</Badge>
                <span className="text-[11px] text-[#CCC]">20 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Facturation electronique 2026 : comment preparer votre CRM
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                La facturation electronique devient obligatoire en France a partir de septembre 2026. Cette reforme impacte directement votre CRM : qualite des donnees, workflows devis-facture, integrations avec les plateformes de dematerialisation. Ce guide pratique detaille les actions concretes pour preparer votre CRM, que vous utilisiez HubSpot, Sellsy, Salesforce ou un autre outil.
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
              {/* Section 1 : Contexte de la reforme */}
              {/* ================================================================ */}
              <section id="contexte" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La reforme de la facturation electronique : ce qui change</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La facturation electronique obligatoire est une reforme majeure introduite par la loi de finances 2024 (initialement 2022, reportee a 2026). Elle impose a toutes les entreprises assujetties a la TVA en France d&apos;emettre et de recevoir des factures dans un format electronique structure. Ce n&apos;est pas simplement envoyer un PDF par email : c&apos;est emettre une facture dans un format normalise (Factur-X, UBL ou CII) via une plateforme certifiee.</p>
                    <p><strong className="text-[#111]">Les trois piliers de la reforme.</strong> Premierement, le e-invoicing : l&apos;obligation d&apos;emettre et recevoir des factures electroniques structurees pour toutes les transactions B2B domestiques. Deuxiemement, le e-reporting : la transmission a l&apos;administration fiscale des donnees de transactions B2C et internationales. Troisiemement, l&apos;annuaire : un repertoire centralise des entreprises avec leurs plateformes de reception.</p>
                    <p><strong className="text-[#111]">Pourquoi cette reforme ?</strong> L&apos;objectif principal est la lutte contre la fraude a la TVA, estimee a 20 milliards d&apos;euros par an en France. En standardisant les factures et en centralisant les donnees, l&apos;administration fiscale pourra croiser automatiquement les declarations de TVA avec les factures reelles. Secondairement, la reforme vise a reduire les delais de paiement, a ameliorer la connaissance en temps reel de l&apos;activite economique et a simplifier les obligations declaratives des entreprises.</p>
                    <p><strong className="text-[#111]">L&apos;impact est massif.</strong> Toutes les entreprises francaises sont concernees, de l&apos;autoentrepreneur au grand groupe. Cela represente environ 4 millions d&apos;entreprises et 2,5 milliards de factures par an. Et cela impacte directement la maniere dont votre CRM gere les donnees, les devis et les factures.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "4M", label: "d&apos;entreprises concernees en France", color: "#22C55E" },
                      { stat: "2.5 Mds", label: "de factures par an a dematerialiser", color: "#4B5EFC" },
                      { stat: "20 Mds", label: "de fraude TVA a combattre", color: "#FF7A59" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[22px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]" dangerouslySetInnerHTML={{ __html: s.label }} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 2 : Calendrier des obligations */}
              {/* ================================================================ */}
              <section id="calendrier" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Calendrier des obligations : les dates cles</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le calendrier de la reforme a ete modifie plusieurs fois. Voici les dates en vigueur a mars 2026, telles que confirmees par la DGFIP (Direction generale des finances publiques).</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { date: "1er sept. 2026", titre: "Obligation de reception pour toutes les entreprises", desc: "Toutes les entreprises doivent etre capables de recevoir des factures electroniques. Cela signifie que votre outil de facturation ou votre PDP doit etre connecte au PPF. Cette etape concerne toutes les tailles d&apos;entreprise.", color: "#22C55E" },
                      { date: "1er sept. 2026", titre: "Obligation d&apos;emission pour les grandes entreprises et ETI", desc: "Les grandes entreprises (plus de 5 000 salaries) et les ETI (250 a 5 000 salaries) doivent emettre leurs factures au format electronique structure via une PDP ou le PPF.", color: "#4B5EFC" },
                      { date: "1er sept. 2027", titre: "Obligation d&apos;emission pour les PME et micro-entreprises", desc: "Les PME (10 a 250 salaries) et les micro-entreprises (moins de 10 salaries) doivent emettre au format electronique. C&apos;est la phase finale qui concerne la majorite des entreprises francaises.", color: "#FF7A59" },
                    ].map((e) => (
                      <div key={e.date} className="rounded-xl border border-[#F2F2F2] p-4 flex items-start gap-3">
                        <div className="w-20 shrink-0 text-center">
                          <p className="text-[11px] font-bold" style={{ color: e.color }}>{e.date}</p>
                        </div>
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{e.titre}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{e.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Ce que cela signifie concretement.</strong> Meme si vous etes une PME et que l&apos;obligation d&apos;emission ne s&apos;applique qu&apos;en septembre 2027, vous devez etre pret a recevoir des factures electroniques des septembre 2026. Et la preparation technique (choix de la PDP, configuration du CRM, nettoyage des donnees) prend plusieurs mois. C&apos;est maintenant qu&apos;il faut agir.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 3 : Impact sur votre CRM */}
              {/* ================================================================ */}
              <section id="impact-crm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Impact direct sur votre CRM</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La facturation electronique impacte votre CRM de maniere significative, meme si votre CRM n&apos;est pas un outil de facturation. Voici les cinq impacts principaux que nous observons chez nos clients.</p>
                    <p><strong className="text-[#111]">1. Les donnees entreprise doivent etre irremprochables.</strong> Chaque facture electronique doit contenir le SIREN/SIRET exact du client, l&apos;adresse complete, le code NAF, le numero de TVA intracommunautaire. Si ces informations sont fausses ou manquantes dans votre CRM, vos factures seront rejetees par la plateforme de dematerialisation. C&apos;est la fin des fiches client approximatives avec &ldquo;SAS Truc&rdquo; au lieu de la raison sociale exacte.</p>
                    <p><strong className="text-[#111]">2. Le circuit devis-facture doit etre trace.</strong> Les plateformes de dematerialisation exigent une tracabilite complete : devis, bon de commande, facture, avoir. Si votre CRM gere les devis (comme Sellsy ou HubSpot avec un connecteur), le passage devis-facture doit etre automatise et sans rupture. Les saisies manuelles qui introduisent des erreurs ne seront plus tolerees.</p>
                    <p><strong className="text-[#111]">3. Les statuts de facturation doivent etre synchronises.</strong> La reforme introduit des statuts de cycle de vie de la facture : emise, recue, acceptee, refusee, payee. Ces statuts doivent etre refletes dans votre CRM pour que vos equipes commerciales et financieres aient une vision en temps reel. Cela necessite une integration bidirectionnelle entre votre CRM et votre outil de facturation.</p>
                    <p><strong className="text-[#111]">4. Les formats de facture changent.</strong> Fini le PDF libre. Les factures doivent etre au format Factur-X (PDF enrichi de donnees XML), UBL (Universal Business Language) ou CII (Cross Industry Invoice). Votre outil de facturation doit generer ces formats. Votre CRM doit etre capable de stocker et afficher les factures dans ces formats.</p>
                    <p><strong className="text-[#111]">5. Le e-reporting ajoute des obligations.</strong> Pour les transactions B2C et internationales, vous devez transmettre les donnees a l&apos;administration. Cela signifie que votre CRM doit correctement identifier le type de client (B2B France, B2B UE, B2B hors UE, B2C) et appliquer les regles de TVA correspondantes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 4 : Qualite des donnees */}
              {/* ================================================================ */}
              <section id="data-quality" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Qualite des donnees : le prerequis numero un</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La qualite des donnees dans votre CRM est le prerequis absolu de la facturation electronique. Une facture electronique avec un SIRET errone sera rejetee. Une facture avec une adresse incomplete sera rejetee. Une facture sans numero de TVA intracommunautaire pour un client UE sera rejetee. Il n&apos;y a plus de tolerance pour les approximations.</p>
                    <p><strong className="text-[#111]">Les champs obligatoires a verifier.</strong> Pour chaque fiche entreprise dans votre CRM, les champs suivants doivent etre renseignes et exacts :</p>
                  </div>

                  <div className="mt-4 space-y-2">
                    {[
                      { champ: "Raison sociale exacte", desc: "Telle qu&apos;enregistree au RCS, pas un nom commercial", criticite: "Obligatoire" },
                      { champ: "SIREN / SIRET", desc: "9 ou 14 chiffres, verifie sur societe.com ou annuaire-entreprises.data.gouv.fr", criticite: "Obligatoire" },
                      { champ: "Adresse complete", desc: "Numero, rue, code postal, ville, pays. Format normalise.", criticite: "Obligatoire" },
                      { champ: "Numero de TVA intracommunautaire", desc: "Format FR + 11 chiffres. Obligatoire pour les clients UE.", criticite: "Obligatoire si UE" },
                      { champ: "Code NAF / APE", desc: "Code d&apos;activite de l&apos;entreprise. Utile pour le e-reporting.", criticite: "Recommande" },
                      { champ: "Type de client", desc: "B2B France, B2B UE, B2B hors UE, B2C. Determine les regles de TVA et de e-reporting.", criticite: "Obligatoire" },
                      { champ: "Contact facturation", desc: "Nom et email du contact qui recevra les factures electroniques.", criticite: "Obligatoire" },
                      { champ: "Plateforme de reception", desc: "PDP ou PPF du client. Necessaire pour l&apos;acheminement de la facture.", criticite: "Obligatoire (2026)" },
                    ].map((c) => (
                      <div key={c.champ} className="rounded-lg border border-[#F2F2F2] p-3 flex items-start gap-3">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium shrink-0 mt-0.5 ${c.criticite === "Obligatoire" ? "bg-[#EF4444]/10 text-[#EF4444]" : c.criticite.startsWith("Obligatoire") ? "bg-[#F59E0B]/10 text-[#F59E0B]" : "bg-[#22C55E]/10 text-[#22C55E]"}`}>{c.criticite}</span>
                        <div>
                          <p className="text-[11px] font-semibold text-[#111]" dangerouslySetInnerHTML={{ __html: c.champ }} />
                          <p className="text-[10px] text-[#777] leading-[1.5]" dangerouslySetInnerHTML={{ __html: c.desc }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Action immediate : audit de data quality.</strong> Exportez vos fiches entreprises depuis votre CRM et verifiez le taux de completude de chaque champ obligatoire. Chez nos clients, le taux moyen de completude du SIRET est de 35% et celui du numero de TVA de 20%. C&apos;est insuffisant. Lancez un chantier de nettoyage et d&apos;enrichissement maintenant, pas dans 6 mois.</p>
                    <p><strong className="text-[#111]">Outils d&apos;enrichissement.</strong> Pour enrichir automatiquement les fiches entreprises, utilisez des outils comme Societeinfo, Pappers ou l&apos;API de l&apos;INSEE (base SIRENE). Ces outils permettent de recuperer automatiquement le SIRET, l&apos;adresse officielle et le code NAF a partir du nom de l&apos;entreprise. Certains se connectent directement a HubSpot ou Salesforce via des workflows.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 5 : Configuration HubSpot */}
              {/* ================================================================ */}
              <section id="hubspot-config" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Configuration HubSpot pour la facturation electronique</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot n&apos;est pas un outil de facturation et ne genere pas de factures au format Factur-X ou UBL. Cependant, HubSpot est au coeur du processus commercial de milliers d&apos;entreprises francaises. Voici comment le configurer pour etre pret.</p>
                    <p><strong className="text-[#111]">Etape 1 : creer les proprietes obligatoires.</strong> Ajoutez les proprietes personnalisees suivantes sur l&apos;objet Company dans HubSpot : SIRET (texte, 14 caracteres), Numero TVA intracommunautaire (texte), Type de client facturation (enumeration : B2B France, B2B UE, B2B Hors UE, B2C), Plateforme de reception factures (texte), Contact facturation email (texte). Rendez ces proprietes obligatoires dans vos formulaires de creation d&apos;entreprise.</p>
                    <p><strong className="text-[#111]">Etape 2 : configurer la validation des donnees.</strong> Utilisez les workflows HubSpot pour valider automatiquement les donnees. Par exemple : si le SIRET contient moins de 14 caracteres, creer une tache pour le commercial. Si le numero de TVA est vide et le type de client est B2B UE, bloquer la creation du devis. Si l&apos;adresse est incomplete, envoyer une notification au responsable commercial.</p>
                    <p><strong className="text-[#111]">Etape 3 : integrer avec l&apos;outil de facturation.</strong> Connectez HubSpot a votre outil de facturation (Pennylane, Sellsy, QuickBooks, Sage) via une integration native ou Zapier/Make. L&apos;objectif est que lorsqu&apos;un deal est marque comme &ldquo;Clos gagne&rdquo; dans HubSpot, les donnees necessaires a la facturation soient automatiquement transmises a l&apos;outil de facturation, sans ressaisie manuelle.</p>
                    <p><strong className="text-[#111]">Etape 4 : synchroniser les statuts de facture.</strong> Configurez une synchronisation bidirectionnelle pour que le statut de la facture (emise, payee, en retard) soit visible dans HubSpot. Cela permet aux commerciaux de voir en un coup d&apos;oeil si un client a des factures impayees avant de proposer un nouveau devis.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 6 : Connecter les outils de facturation */}
              {/* ================================================================ */}
              <section id="outils-facturation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Connecter votre CRM aux outils de facturation</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Le choix de l&apos;outil de facturation compatible avec la reforme est une decision critique. Voici les principaux outils du marche francais et leur niveau de compatibilite avec les CRM.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { nom: "Pennylane", domain: "pennylane.com", desc: "Solution de comptabilite et facturation francaise tres populaire. Integration native avec HubSpot via une app marketplace. Genere les factures au format Factur-X. Certifiee PDP. Synchronisation des contacts, devis et factures avec HubSpot.", compatibilite: "Excellent" },
                      { nom: "Sellsy", domain: "sellsy.com", desc: "CRM et facturation integres. Si vous utilisez deja Sellsy comme CRM, la facturation electronique est native. Si vous utilisez HubSpot comme CRM, Sellsy peut servir uniquement pour la facturation avec une synchronisation via Zapier.", compatibilite: "Excellent" },
                      { nom: "Sage", domain: "sage.com", desc: "ERP et comptabilite pour les PME et ETI. Integration avec HubSpot via des connecteurs tiers. Compatible facturation electronique. Plus adapte aux entreprises avec des besoins comptables complexes (multi-societes, consolidation).", compatibilite: "Bon" },
                      { nom: "Axonaut", domain: "axonaut.com", desc: "Solution francaise tout-en-un pour TPE et PME. CRM, devis, factures, comptabilite. Pas d&apos;integration native avec HubSpot mais fonctionne via Zapier. En cours de certification PDP.", compatibilite: "Moyen" },
                      { nom: "QuickBooks", domain: "quickbooks.intuit.com", desc: "Solution de comptabilite internationale. Bonne integration avec HubSpot. Factur-X en cours de deploiement pour le marche francais. Plus adapte aux entreprises internationales.", compatibilite: "Bon" },
                    ].map((outil) => (
                      <div key={outil.nom} className="rounded-xl border border-[#F2F2F2] p-4 flex items-start gap-3">
                        <img src={`https://www.google.com/s2/favicons?domain=${outil.domain}&sz=32`} alt={outil.nom} className="w-5 h-5 mt-0.5" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-[12px] font-semibold text-[#111]">{outil.nom}</p>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${outil.compatibilite === "Excellent" ? "bg-[#22C55E]/10 text-[#22C55E]" : outil.compatibilite === "Bon" ? "bg-[#4B5EFC]/10 text-[#4B5EFC]" : "bg-[#F59E0B]/10 text-[#F59E0B]"}`}>{outil.compatibilite}</span>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{outil.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 7 : Chorus Pro et PDP */}
              {/* ================================================================ */}
              <section id="chorus-pro" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Chorus Pro, PPF et PDP : comprendre l&apos;architecture</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le Portail Public de Facturation (PPF).</strong> C&apos;est la plateforme operee par l&apos;AIFE (Agence pour l&apos;Informatique Financiere de l&apos;Etat), basee sur Chorus Pro. Le PPF est gratuit et permet d&apos;emettre et recevoir des factures electroniques. Il sert aussi de concentrateur pour acheminer les factures entre les entreprises et d&apos;annuaire pour connaitre la plateforme de reception de chaque entreprise.</p>
                    <p><strong className="text-[#111]">Les Plateformes de Dematerialisation Partenaires (PDP).</strong> Ce sont des plateformes privees certifiees par l&apos;administration pour emettre, recevoir et acheminer des factures electroniques. Les PDP offrent des fonctionnalites supplementaires par rapport au PPF : integration avec les ERP et CRM, workflows de validation, archivage, reporting. Les editeurs comme Pennylane, Sellsy et Sage sont en cours de certification PDP.</p>
                    <p><strong className="text-[#111]">PPF ou PDP : que choisir ?</strong> Le PPF est gratuit mais basique. Si vous etes une TPE avec peu de factures, le PPF peut suffire. Si vous etes une PME avec un volume de factures significatif et des besoins d&apos;integration avec votre CRM, une PDP est recommandee. La PDP se connecte a votre outil de facturation et gere l&apos;acheminement automatique vers le PPF et les PDP de vos clients.</p>
                    <p><strong className="text-[#111]">L&apos;annuaire et le routage.</strong> Chaque entreprise devra s&apos;inscrire dans l&apos;annuaire du PPF en indiquant sa plateforme de reception (PPF ou PDP specifique). Quand vous emettez une facture, votre plateforme consultera l&apos;annuaire pour savoir ou acheminer la facture. C&apos;est pour cela que la propriete &ldquo;Plateforme de reception&rdquo; doit etre renseignee dans votre CRM pour chaque client.</p>
                  </div>

                  <div className="mt-6 rounded-xl bg-[#F9FAFB] border border-[#F2F2F2] p-4">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Circuit d&apos;une facture electronique</p>
                    <div className="flex flex-col sm:flex-row items-stretch gap-2">
                      {[
                        { step: "1", label: "Deal gagne dans le CRM", desc: "Declenchement du workflow", color: "#4B5EFC" },
                        { step: "2", label: "Generation de la facture", desc: "Format Factur-X / UBL", color: "#22C55E" },
                        { step: "3", label: "Emission via PDP", desc: "Ou directement via PPF", color: "#FF7A59" },
                        { step: "4", label: "Acheminement", desc: "Vers la PDP / PPF du client", color: "#F59E0B" },
                        { step: "5", label: "Statut synchronise", desc: "Retour dans le CRM", color: "#8B5CF6" },
                      ].map((s) => (
                        <div key={s.step} className="flex-1 rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                          <div className="w-6 h-6 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-[10px] font-bold" style={{ background: s.color }}>{s.step}</div>
                          <p className="text-[10px] font-semibold text-[#111] mb-0.5">{s.label}</p>
                          <p className="text-[9px] text-[#999]">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 8 : Automatiser les workflows */}
              {/* ================================================================ */}
              <section id="workflows" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Workflows a automatiser dans votre CRM</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>La facturation electronique impose une rigueur qui ne peut pas reposer sur des processus manuels. Voici les workflows que nous recommandons de mettre en place dans votre CRM.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { num: "01", titre: "Validation des donnees a la creation", desc: "Quand une fiche entreprise est creee, verifier automatiquement que le SIRET est renseigne et valide (14 chiffres). Si non, creer une tache pour le commercial avec un delai de 48h." },
                      { num: "02", titre: "Enrichissement automatique", desc: "A la creation d&apos;une fiche entreprise, lancer un enrichissement automatique via l&apos;API SIRENE ou un outil tiers pour recuperer l&apos;adresse officielle, le code NAF et la forme juridique." },
                      { num: "03", titre: "Verification TVA intracommunautaire", desc: "Pour les entreprises avec un pays UE (hors France), verifier automatiquement le numero de TVA via le systeme VIES de la Commission europeenne. Bloquer le passage en deal si le numero est invalide." },
                      { num: "04", titre: "Generation automatique du devis", desc: "Quand un deal atteint l&apos;etape &ldquo;Proposition&rdquo;, generer automatiquement un devis dans l&apos;outil de facturation avec les donnees du CRM. Eliminer la ressaisie manuelle." },
                      { num: "05", titre: "Passage devis-facture", desc: "Quand le deal est marque &ldquo;Clos gagne&rdquo;, transformer automatiquement le devis en facture dans l&apos;outil de facturation et declencher l&apos;emission via la PDP." },
                      { num: "06", titre: "Synchronisation des statuts", desc: "Quand la facture change de statut dans l&apos;outil de facturation (emise, payee, en retard), mettre a jour automatiquement la propriete correspondante dans le CRM." },
                      { num: "07", titre: "Alerte impaye", desc: "Quand une facture est en retard de paiement de plus de 30 jours, notifier le commercial proprietaire du deal et creer une tache de relance." },
                    ].map((w) => (
                      <div key={w.num} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start gap-3">
                          <span className="text-[20px] font-bold text-[#22C55E]/20 leading-none">{w.num}</span>
                          <div>
                            <p className="text-[12px] font-semibold text-[#111] mb-1">{w.titre}</p>
                            <p className="text-[11px] text-[#777] leading-[1.6]">{w.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 9 : Checklist de preparation */}
              {/* ================================================================ */}
              <section id="checklist" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Checklist de preparation : 15 actions avant septembre 2026</h2>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75] mb-6">
                    <p>Voici la checklist complete que nous utilisons chez Ceres pour preparer nos clients a la facturation electronique. Cochez chaque element au fur et a mesure.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Auditer le taux de completude des SIRET dans le CRM",
                      "Enrichir les fiches entreprises manquantes (API SIRENE)",
                      "Verifier les numeros de TVA intracommunautaire",
                      "Choisir une PDP ou confirmer l&apos;utilisation du PPF",
                      "S&apos;inscrire dans l&apos;annuaire du PPF",
                      "Configurer l&apos;integration CRM-outil de facturation",
                      "Creer les proprietes obligatoires dans le CRM",
                      "Mettre en place les workflows de validation",
                      "Tester le circuit complet devis-facture-emission",
                      "Former les equipes commerciales aux nouveaux processus",
                      "Former l&apos;equipe comptable aux formats Factur-X / UBL",
                      "Definir les regles de TVA par type de client",
                      "Configurer la synchronisation bidirectionnelle des statuts",
                      "Mettre en place les alertes impayes",
                      "Documenter les processus et les responsabilites",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[11px] text-[#888] leading-[1.6]">
                        <span className="w-3 h-3 rounded border border-[#555] shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 10 : Nos recommandations */}
              {/* ================================================================ */}
              <section id="recommandations" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Nos recommandations par profil</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Vous utilisez HubSpot comme CRM.</strong> Connectez Pennylane pour la facturation. C&apos;est l&apos;integration la plus mature pour le marche francais. Pennylane genere les factures Factur-X, gere la PDP et synchronise les statuts avec HubSpot. Creez les proprietes obligatoires dans HubSpot et mettez en place les workflows de validation. Budget : 50 a 100 EUR/mois pour Pennylane + 2 a 5 jours de configuration.</p>
                    <p><strong className="text-[#111]">Vous utilisez Sellsy comme CRM.</strong> Vous etes en bonne position. Sellsy integre nativement la facturation et sera conforme a la reforme. Concentrez vos efforts sur la qualite des donnees : nettoyez les SIRET manquants, verifiez les adresses, ajoutez les numeros de TVA. Sellsy gere le reste nativement.</p>
                    <p><strong className="text-[#111]">Vous utilisez Salesforce.</strong> Connectez Sage ou un ERP compatible PDP. Salesforce a des connecteurs natifs avec les principaux ERP. La configuration est plus complexe mais Salesforce est assez flexible pour gerer les proprietes et workflows necessaires.</p>
                    <p><strong className="text-[#111]">Vous n&apos;avez pas encore de CRM.</strong> C&apos;est le moment ideal pour en adopter un. Si la facturation est votre priorite, Sellsy est le choix le plus pragmatique. Si le marketing et les ventes sont votre priorite, HubSpot + Pennylane est la combinaison recommandee.</p>
                    <p><strong className="text-[#111]">Ne sous-estimez pas le chantier.</strong> La preparation a la facturation electronique prend 2 a 6 mois selon la maturite de vos donnees et la complexite de votre stack. Commencez maintenant. Les entreprises qui attendront le dernier moment se retrouveront dans une situation de stress avec des prestataires surcharges et des delais rallonges.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { profil: "HubSpot + Pennylane", desc: "La combinaison la plus recommandee pour les PME B2B en France. CRM puissant + facturation conforme.", color: "#FF7A59" },
                      { profil: "Sellsy tout-en-un", desc: "Le choix le plus simple pour les TPE/PME qui veulent CRM et facturation dans un seul outil.", color: "#4B5EFC" },
                      { profil: "Salesforce + Sage", desc: "Pour les ETI avec des besoins comptables complexes et un ERP existant a connecter.", color: "#22C55E" },
                      { profil: "Odoo all-in-one", desc: "Alternative open-source complete avec CRM, facturation, comptabilite et inventaire integres.", color: "#8B5CF6" },
                    ].map((r) => (
                      <div key={r.profil} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: r.color }} />
                          <p className="text-[12px] font-semibold text-[#111]">{r.profil}</p>
                        </div>
                        <p className="text-[10px] text-[#777] leading-[1.5]">{r.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les erreurs a eviter absolument.</strong> Premiere erreur : attendre que la reforme soit effective pour commencer la preparation. Le nettoyage des donnees prend du temps et ne peut pas etre bacle. Deuxieme erreur : choisir un outil de facturation uniquement sur le prix sans verifier la compatibilite PDP et les integrations avec votre CRM. Troisieme erreur : ne pas impliquer l&apos;equipe commerciale dans le projet. Ce sont eux qui creent les fiches client et les devis au quotidien. Sans leur adhesion, la qualite des donnees ne s&apos;ameliorera pas.</p>
                    <p><strong className="text-[#111]">Ce que Ceres propose.</strong> Nous accompagnons les PME francaises dans la preparation de leur CRM a la facturation electronique. Notre prestation inclut : audit de la qualite des donnees existantes, configuration des proprietes et workflows dans HubSpot, choix et integration de l&apos;outil de facturation, formation des equipes et support post-implementation. Delai moyen : 4 a 8 semaines pour une mise en conformite complete.</p>
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
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;aide pour preparer votre CRM ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On audite vos donnees, on configure les integrations et on forme vos equipes. Pret avant septembre 2026, garanti.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un audit
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
