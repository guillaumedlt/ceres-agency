"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Data cleaning avant l'IA : la checklist en 30 points",
  description: "Checklist complete en 30 points pour nettoyer vos donnees CRM avant de deployer l'IA. Contacts, entreprises, pipeline : les verifications indispensables, les seuils acceptables et les outils pour automatiser le nettoyage avec HubSpot et Claude Code.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/data-cleaning-checklist-avant-ia" },
  articleSection: "Data & Reporting",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-nettoyer", title: "Pourquoi nettoyer avant l'IA" },
  { id: "checklist-contacts", title: "Checklist contacts (10)" },
  { id: "checklist-entreprises", title: "Checklist entreprises (10)" },
  { id: "checklist-deals", title: "Checklist deals (10)" },
  { id: "automatiser-claude-code", title: "Automatiser avec Claude Code" },
  { id: "outils-cleaning", title: "Les outils" },
  { id: "gouvernance", title: "Gouvernance" },
  { id: "approche-ceres", title: "Notre approche Ceres" },
];

const relatedArticles = [
  { title: "Data quality CRM : audit et nettoyage en 5 etapes", slug: "data-quality-crm-audit-nettoyage", category: "Data & Reporting", color: "#22C55E" },
  { title: "Process, Data, IA : pourquoi l'ordre compte en RevOps", slug: "process-data-ia-ordre-revops", category: "RevOps", color: "#FF7A59" },
  { title: "5 agents IA qu'on deploie chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA & Automatisation", color: "#6D00CC" },
];

const contactChecklist = [
  { label: "Taux de completude email", how: "Contacts > Lists > Filtre : email is unknown. Comparer au total.", seuil: "95%+", color: "#22C55E" },
  { label: "Doublons identifies et fusionnes", how: "Contacts > Actions > Manage duplicates. Exporter la liste et traiter par lots.", seuil: "< 3%", color: "#22C55E" },
  { label: "Formats telephone standardises (E.164)", how: "Export CSV > Verifier les formats avec une regex. Workflow Operations Hub pour reformater.", seuil: "100% E.164", color: "#22C55E" },
  { label: "Pays en ISO 3166-1 alpha-2", how: "Property settings > Country > Convertir en dropdown avec codes ISO (FR, DE, US).", seuil: "100% ISO", color: "#22C55E" },
  { label: "Lifecycle stage renseigne", how: "Contacts > Lists > Filtre : lifecycle stage is unknown. Workflow pour assigner par defaut.", seuil: "100%", color: "#4B5EFC" },
  { label: "Owner assigne sur chaque contact actif", how: "Contacts > Lists > Filtre : contact owner is unknown AND last activity < 12 mois.", seuil: "100% actifs", color: "#4B5EFC" },
  { label: "Derniere activite < 12 mois", how: "Contacts > Lists > Filtre : last activity date is more than 12 months ago. Archiver ou re-engager.", seuil: "Archiver si > 12 mois", color: "#FF7A59" },
  { label: "Source d'acquisition renseignee et coherente", how: "Contacts > Lists > Filtre : original source is unknown. Verifier la coherence des valeurs.", seuil: "95%+", color: "#FF7A59" },
  { label: "Job title renseigne", how: "Contacts > Lists > Filtre : job title is unknown. Enrichir via Dropcontact ou Clay.", seuil: "80%+ (scoring)", color: "#4B5EFC" },
  { label: "Emails generiques flagges et separes", how: "Contacts > Lists > Filtre : email contains info@, contact@, hello@. Taguer et isoler.", seuil: "0% dans les sequences", color: "#FF7A59" },
];

const companyChecklist = [
  { label: "Nom standardise (pas de variantes)", how: "Export CSV > Trier par nom > Reperer les variantes (ACME, Acme SAS, acme). Fusionner.", seuil: "0 variante", color: "#4B5EFC" },
  { label: "Domaine web renseigne et valide", how: "Companies > Lists > Filtre : website URL is unknown. Enrichir via Dropcontact.", seuil: "95%+", color: "#4B5EFC" },
  { label: "Industrie dans une liste fermee", how: "Property settings > Industry > Convertir en dropdown. Mapper les valeurs existantes.", seuil: "100% dropdown", color: "#22C55E" },
  { label: "Nombre d'employes renseigne", how: "Companies > Lists > Filtre : number of employees is unknown. Enrichir ou estimer.", seuil: "80%+", color: "#22C55E" },
  { label: "Chiffre d'affaires renseigne ou estime", how: "Companies > Lists > Filtre : annual revenue is unknown. Enrichir via Clearbit/Clay.", seuil: "70%+", color: "#FF7A59" },
  { label: "Pays en ISO", how: "Meme logique que pour les contacts. Dropdown avec codes ISO.", seuil: "100% ISO", color: "#22C55E" },
  { label: "Association contact-entreprise verifiee", how: "Contacts > Lists > Filtre : associated company is unknown. Associer par domaine email.", seuil: "0 orphelin actif", color: "#FF7A59" },
  { label: "Doublons entreprises fusionnes", how: "Companies > Manage duplicates. Critere principal : meme domaine web.", seuil: "< 2%", color: "#4B5EFC" },
  { label: "Proprietaire assigne", how: "Companies > Lists > Filtre : company owner is unknown AND associated contacts actifs.", seuil: "100% actives", color: "#4B5EFC" },
  { label: "ICP score calcule", how: "Propriete calculee ou workflow : score base sur industrie + taille + CA + pays.", seuil: "100% scores", color: "#22C55E" },
];

const dealChecklist = [
  { label: "Criteres de passage documentes par stage", how: "Pipeline settings > Definir des criteres clairs pour chaque stage. Former l'equipe.", seuil: "100% documentes", color: "#FF7A59" },
  { label: "Montant renseigne sur 100% des deals", how: "Deals > Lists > Filtre : amount is unknown. Rendre le champ obligatoire.", seuil: "100%", color: "#FF7A59" },
  { label: "Date de closing sur chaque deal ouvert", how: "Deals > Lists > Filtre : close date is unknown AND deal stage is not closed.", seuil: "100% ouverts", color: "#22C55E" },
  { label: "Deals ouverts > 2x cycle moyen identifies", how: "Calculer le cycle moyen. Filtre : create date > 2x ce delai AND still open. Alerter.", seuil: "0 deal zombie", color: "#4B5EFC" },
  { label: "Motif de perte en liste fermee", how: "Property settings > Closed lost reason > Dropdown obligatoire. Pas de texte libre.", seuil: "100% dropdown", color: "#FF7A59" },
  { label: "Associations contact + entreprise", how: "Deals > Lists > Filtre : associated contact is unknown OR associated company is unknown.", seuil: "100% associes", color: "#22C55E" },
  { label: "Close date coherente (pas dans le passe si ouvert)", how: "Deals > Lists > Filtre : close date is in the past AND deal stage is not closed.", seuil: "0 incoherence", color: "#4B5EFC" },
  { label: "Owner assigne", how: "Deals > Lists > Filtre : deal owner is unknown.", seuil: "100%", color: "#22C55E" },
  { label: "Source du deal tracee", how: "Propriete custom : deal source (Inbound, Outbound, Referral, Partner). Dropdown.", seuil: "95%+", color: "#FF7A59" },
  { label: "Activites recentes (pas de fantomes > 30j)", how: "Deals > Lists > Filtre : last activity > 30 jours AND deal stage is open. Alerter l'owner.", seuil: "0 fantome", color: "#4B5EFC" },
];

export default function DataCleaningChecklistArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-nettoyer");
  const [openChecklist, setOpenChecklist] = useState<string | null>(null);

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

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#22C55E", opacity: 0.06, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Data%20cleaning%20avant%20l%27IA%20%3A%20la%20checklist%20en%2030%20points&url=https://ceres.agency/blog/data-cleaning-checklist-avant-ia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/data-cleaning-checklist-avant-ia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Data cleaning checklist avant IA</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Data &amp; Reporting</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Data cleaning avant l&apos;IA : la checklist en 30 points
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                L&apos;IA est un multiplicateur. Elle amplifie la qualite de ce que vous lui donnez, mais aussi la mediocrite. Si vos donnees CRM valent 8/10, l&apos;IA produit des resultats a 80. Si elles valent 2/10, elle produit du bruit a grande echelle. Ce guide vous donne une checklist actionnable en 30 points, repartis sur les trois objets fondamentaux de votre CRM : contacts, entreprises et deals. Pour chaque point, quoi verifier, comment le verifier dans HubSpot, et quel est le seuil acceptable.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>2 avril 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 : Pourquoi nettoyer avant de deployer l'IA */}
              <section id="pourquoi-nettoyer" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi nettoyer avant de deployer l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA generative et les agents autonomes sont partout. Chaque editeur SaaS promet des gains de productivite spectaculaires grace a l&apos;intelligence artificielle. Mais il y a un prerequis que personne ne mentionne dans les demos : la qualite des donnees sur lesquelles l&apos;IA va travailler.</p>
                    <p>L&apos;IA est un multiplicateur, pas un correcteur. Si vous lui donnez des donnees propres et structurees, elle produit des analyses pertinentes, des recommandations fiables et des automatisations qui fonctionnent. Si vous lui donnez des doublons, des champs vides et des formats incoherents, elle produit du bruit a grande echelle, avec l&apos;autorite et la vitesse d&apos;execution d&apos;une machine.</p>
                    <p>Les chiffres sont sans appel :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /><strong className="text-[#111]">40% des donnees CRM B2B sont obsoletes</strong> en moyenne. Changements de poste, fusions, emails desactives : la degradation est continue et mecanique.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">30% des donnees deviennent perimees chaque annee.</strong> Une base non maintenue perd un tiers de sa valeur tous les 12 mois.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">73% des projets IA echouent a cause des donnees,</strong> pas a cause de la technologie. Le modele n&apos;est pas le probleme. Les donnees le sont.</li>
                    </ul>
                    <p>Concretement, voici ce qui se passe quand vous deployez un agent IA sur un CRM non nettoye : le scoring IA attribue des scores aberrants parce que les champs d&apos;entree sont vides ou incoherents. L&apos;agent de prospection contacte des doublons et envoie des messages contradictoires au meme prospect. Le forecasting IA produit des previsions fausses parce que le pipeline contient des deals fantomes. L&apos;automatisation de routing assigne les leads au mauvais commercial parce que les criteres de territoire sont mal renseignes.</p>
                    <p>Nettoyer n&apos;est pas un luxe. C&apos;est un prerequis. Et c&apos;est exactement ce que cette checklist va vous aider a faire : 30 points de controle concrets, verifiables dans HubSpot, avec des seuils clairs pour chaque indicateur.</p>
                  </div>

                  {/* Key stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "40%", label: "des donnees CRM B2B sont obsoletes en moyenne", color: "#EF4444" },
                      { stat: "30%", label: "des donnees deviennent perimees chaque annee", color: "#FF7A59" },
                      { stat: "73%", label: "des projets IA echouent a cause des donnees", color: "#4B5EFC" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[20px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* IA multiplier visual */}
                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">L&apos;IA est un multiplicateur</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-[#22C55E]/30 bg-white p-4 text-center">
                        <p className="text-[10px] text-[#999] mb-2">Donnees propres (8/10)</p>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-[18px] font-bold text-[#111]">8</span>
                          <span className="text-[12px] text-[#999]">x</span>
                          <span className="text-[18px] font-bold text-[#111]">IA</span>
                          <span className="text-[12px] text-[#999]">=</span>
                          <span className="text-[22px] font-bold text-[#22C55E]">80</span>
                        </div>
                        <p className="text-[10px] text-[#22C55E] font-medium">Resultats exploitables</p>
                      </div>
                      <div className="rounded-xl border border-[#EF4444]/30 bg-white p-4 text-center">
                        <p className="text-[10px] text-[#999] mb-2">Donnees sales (2/10)</p>
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-[18px] font-bold text-[#111]">2</span>
                          <span className="text-[12px] text-[#999]">x</span>
                          <span className="text-[18px] font-bold text-[#111]">IA</span>
                          <span className="text-[12px] text-[#999]">=</span>
                          <span className="text-[22px] font-bold text-[#EF4444]">20</span>
                        </div>
                        <p className="text-[10px] text-[#EF4444] font-medium">Bruit a grande echelle</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">L&apos;IA amplifie tout, y compris les defauts de votre base</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 : Checklist contacts (10 points) */}
              <section id="checklist-contacts" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">1</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">La checklist contacts (10 points)</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Les fiches contacts sont le coeur de votre CRM. C&apos;est sur elles que reposent vos sequences de prospection, votre lead scoring, votre segmentation marketing et vos reportings commerciaux. Un contact mal renseigne, c&apos;est un lead mal qualifie, un email qui bounce, un commercial qui perd du temps.</p>
                    <p>Voici les 10 verifications indispensables avant de laisser un agent IA toucher a vos contacts. Pour chaque point : ce qu&apos;il faut verifier, comment le faire dans HubSpot, et le seuil acceptable.</p>
                  </div>

                  {/* Data Quality Score Gauge for contacts */}
                  <div className="mb-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Score qualite contacts -- Exemple avant nettoyage</p>
                    <div className="flex items-center justify-center gap-8 mb-4">
                      <div className="relative w-[160px] h-[100px]">
                        <svg viewBox="0 0 160 100" className="w-full h-full">
                          <path d="M 15 90 A 65 65 0 0 1 145 90" fill="none" stroke="#F2F2F2" strokeWidth="12" strokeLinecap="round" />
                          <path d="M 15 90 A 65 65 0 0 1 48 32" fill="none" stroke="#EF4444" strokeWidth="12" strokeLinecap="round" opacity="0.3" />
                          <path d="M 48 32 A 65 65 0 0 1 112 32" fill="none" stroke="#F59E0B" strokeWidth="12" strokeLinecap="round" opacity="0.3" />
                          <path d="M 112 32 A 65 65 0 0 1 145 90" fill="none" stroke="#22C55E" strokeWidth="12" strokeLinecap="round" opacity="0.3" />
                          <path d="M 15 90 A 65 65 0 0 1 62 28" fill="none" stroke="#FF7A59" strokeWidth="12" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                          <p className="text-[28px] font-bold text-[#111]">38<span className="text-[14px] text-[#999]">/100</span></p>
                          <p className="text-[9px] text-[#EF4444] font-medium">Critique</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        { label: "Email", score: 72, color: "#F59E0B" },
                        { label: "Doublons", score: 25, color: "#EF4444" },
                        { label: "Formats", score: 30, color: "#EF4444" },
                        { label: "Completude", score: 40, color: "#FF7A59" },
                        { label: "Fraicheur", score: 22, color: "#EF4444" },
                      ].map((s) => (
                        <div key={s.label} className="text-center">
                          <div className="w-full h-1.5 rounded-full bg-[#F2F2F2] mb-1.5">
                            <div className="h-full rounded-full" style={{ width: `${s.score}%`, background: s.color }} />
                          </div>
                          <p className="text-[9px] text-[#999]">{s.label}</p>
                          <p className="text-[11px] font-bold" style={{ color: s.color }}>{s.score}%</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Score typique constate lors de nos audits avant nettoyage</p>
                  </div>

                  {/* Checklist items */}
                  <div className="space-y-2">
                    {contactChecklist.map((item, idx) => (
                      <div key={idx} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded border-2 border-[#DDD] shrink-0 mt-0.5 flex items-center justify-center">
                            <span className="text-[8px] text-[#CCC] font-bold">{idx + 1}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1.5">
                              <p className="text-[12px] font-semibold text-[#111]">{item.label}</p>
                              <span className="text-[9px] px-2 py-0.5 rounded-full font-medium shrink-0 ml-2" style={{ background: `${item.color}15`, color: item.color }}>{item.seuil}</span>
                            </div>
                            <p className="text-[10px] text-[#888] leading-[1.6]"><strong className="text-[#666]">Comment verifier :</strong> {item.how}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Checklist entreprises (10 points) */}
              <section id="checklist-entreprises" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#4B5EFC]/10 flex items-center justify-center text-[14px] font-bold text-[#4B5EFC]">2</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">La checklist entreprises (10 points)</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Les fiches entreprises sont souvent le parent pauvre du CRM. Les commerciaux se concentrent sur les contacts et les deals, mais negligent les donnees entreprise. Pourtant, c&apos;est sur ces fiches que repose votre ICP scoring, votre segmentation ABM, et la capacite de l&apos;IA a identifier des patterns d&apos;achat pertinents.</p>
                    <p>Un agent IA qui doit qualifier un lead a besoin de savoir : dans quel secteur est cette entreprise ? Quelle est sa taille ? Son chiffre d&apos;affaires ? Son pays ? Si ces champs sont vides ou incoherents, la qualification IA est au mieux aleatoire, au pire trompeuse.</p>
                  </div>

                  <div className="space-y-2">
                    {companyChecklist.map((item, idx) => (
                      <div key={idx} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded border-2 border-[#DDD] shrink-0 mt-0.5 flex items-center justify-center">
                            <span className="text-[8px] text-[#CCC] font-bold">{idx + 11}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1.5">
                              <p className="text-[12px] font-semibold text-[#111]">{item.label}</p>
                              <span className="text-[9px] px-2 py-0.5 rounded-full font-medium shrink-0 ml-2" style={{ background: `${item.color}15`, color: item.color }}>{item.seuil}</span>
                            </div>
                            <p className="text-[10px] text-[#888] leading-[1.6]"><strong className="text-[#666]">Comment verifier :</strong> {item.how}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Before/After company name standardization */}
                  <div className="mt-5 rounded-xl border border-[#F2F2F2] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-4 py-2.5 border-b border-[#F2F2F2]">
                      <p className="text-[11px] font-semibold text-[#111]">Exemple : standardisation des noms d&apos;entreprise</p>
                    </div>
                    <div className="divide-y divide-[#F2F2F2]">
                      {[
                        { before: "ACME, Acme SAS, acme, Acme Corp", after: "Acme (nom unique, forme juridique separee)" },
                        { before: "total energies, TotalEnergies SE, TOTAL ENERGIES", after: "TotalEnergies (nom officiel)" },
                        { before: "hubspot, HubSpot Inc., Hub Spot", after: "HubSpot (capitalisation officielle)" },
                      ].map((r) => (
                        <div key={r.before} className="flex items-center gap-4 px-4 py-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-[#EF4444] line-through mb-0.5">{r.before}</p>
                            <p className="text-[10px] text-[#22C55E] font-medium">{r.after}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Checklist deals / pipeline (10 points) */}
              <section id="checklist-deals" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#FF7A59]/10 flex items-center justify-center text-[14px] font-bold text-[#FF7A59]">3</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">La checklist deals / pipeline (10 points)</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Le pipeline est la ou l&apos;IA a le plus d&apos;impact potentiel : forecasting, prioritisation des deals, detection des risques de churn, recommandations d&apos;actions. Mais c&apos;est aussi la ou les donnees sales font le plus de degats. Un pipeline gonfle artificiellement par des deals fantomes produit des previsions fausses. Un motif de perte en texte libre rend toute analyse de win/loss impossible.</p>
                    <p>Ces 10 points de controle garantissent que votre pipeline est exploitable par un agent IA de forecasting ou de coaching commercial.</p>
                  </div>

                  <div className="space-y-2">
                    {dealChecklist.map((item, idx) => (
                      <div key={idx} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded border-2 border-[#DDD] shrink-0 mt-0.5 flex items-center justify-center">
                            <span className="text-[8px] text-[#CCC] font-bold">{idx + 21}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1.5">
                              <p className="text-[12px] font-semibold text-[#111]">{item.label}</p>
                              <span className="text-[9px] px-2 py-0.5 rounded-full font-medium shrink-0 ml-2" style={{ background: `${item.color}15`, color: item.color }}>{item.seuil}</span>
                            </div>
                            <p className="text-[10px] text-[#888] leading-[1.6]"><strong className="text-[#666]">Comment verifier :</strong> {item.how}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deal stages criteria card */}
                  <div className="mt-5 rounded-xl bg-[#FFF7ED] border border-[#FFE4C4] p-4">
                    <p className="text-[12px] font-semibold text-[#FF7A59] mb-3">Exemple : criteres de passage par stage</p>
                    <div className="space-y-2">
                      {[
                        { stage: "Qualification", criteria: "Budget identifie, decision-maker identifie, timeline connue", color: "#FF7A59" },
                        { stage: "Proposition", criteria: "Besoin valide, champion interne confirme, proposition envoyee", color: "#F59E0B" },
                        { stage: "Negociation", criteria: "Proposition revue, objections traitees, accord de principe", color: "#4B5EFC" },
                        { stage: "Closing", criteria: "Contrat envoye, signataire identifie, date de signature fixee", color: "#22C55E" },
                      ].map((s) => (
                        <div key={s.stage} className="flex items-center gap-3 rounded-lg bg-white p-2.5 border border-[#F2F2F2]">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                          <div>
                            <p className="text-[11px] font-medium text-[#111]">{s.stage}</p>
                            <p className="text-[10px] text-[#999]">{s.criteria}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Automatiser le nettoyage avec Claude Code */}
              <section id="automatiser-claude-code" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#D4A27F]/20 flex items-center justify-center">
                      <span className="text-[11px] font-bold text-[#D4A27F]">Cl</span>
                    </div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Comment automatiser le nettoyage avec Claude Code</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Claude Code connecte a HubSpot via MCP (Model Context Protocol) peut faire 80% du travail de nettoyage. Pas en remplacement de votre jugement, mais en acceleration de l&apos;execution. Le principe : Claude analyse, propose, vous validez, il execute. Aucune action destructive sans votre accord explicite.</p>
                    <p><strong className="text-[#111]">Ce que Claude Code + MCP HubSpot peut faire :</strong></p>
                  </div>

                  <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Identifier les doublons", desc: "Claude interroge votre base HubSpot, detecte les paires de contacts/entreprises avec des emails identiques, des noms similaires ou des domaines en commun. Il presente les resultats avec un score de confiance.", color: "#22C55E" },
                      { title: "Reperer les champs vides", desc: "Analyse de completude champ par champ. Claude genere un rapport avec le pourcentage de remplissage de chaque propriete critique et identifie les contacts/entreprises les plus incomplets.", color: "#4B5EFC" },
                      { title: "Standardiser les formats", desc: "Detection automatique des incoherences de format (pays, telephone, secteur). Claude propose un mapping de standardisation et l'applique apres validation.", color: "#FF7A59" },
                      { title: "Proposer des corrections", desc: "Pour chaque anomalie detectee, Claude propose une correction argumentee. Vous validez ou rejetez chaque proposition. Les corrections validees sont appliquees en masse.", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-[#111]">{item.title}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le processus en 4 etapes :</strong></p>
                    <p>1. <strong className="text-[#111]">Connexion.</strong> Claude Code se connecte a votre portail HubSpot via le serveur MCP. Pas d&apos;export CSV, pas de copier-coller. L&apos;acces est en lecture et ecriture, avec des permissions granulaires.</p>
                    <p>2. <strong className="text-[#111]">Analyse.</strong> Vous demandez a Claude d&apos;auditer un objet (contacts, entreprises, deals) sur un ou plusieurs criteres de la checklist. Claude interroge les donnees et genere un rapport structure.</p>
                    <p>3. <strong className="text-[#111]">Proposition.</strong> Pour chaque probleme detecte, Claude propose une action corrective. Fusion de doublons, reformatage, enrichissement, archivage. Chaque proposition est argumentee et reversible.</p>
                    <p>4. <strong className="text-[#111]">Execution.</strong> Apres votre validation explicite, Claude applique les corrections directement dans HubSpot. Pas d&apos;action en masse sans accord. Pas de suppression sans confirmation.</p>
                    <p>L&apos;avantage de Claude Code par rapport a un script custom ou un outil tiers : il comprend le contexte. Il ne se contente pas de matcher des chaines de caracteres. Il peut comprendre que &ldquo;PDG&rdquo; et &ldquo;CEO&rdquo; designent la meme fonction, que &ldquo;TotalEnergies&rdquo; et &ldquo;TOTAL ENERGIES&rdquo; sont la meme entreprise, que &ldquo;+33 6&rdquo; et &ldquo;06&rdquo; sont le meme prefixe telephone.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Les outils de data cleaning */}
              <section id="outils-cleaning" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les outils de data cleaning</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Pas besoin de 10 outils pour nettoyer votre base. La combinaison HubSpot Operations Hub + Claude Code couvre 90% des besoins. Voici les trois outils que nous recommandons, et dans quel cas utiliser chacun.</p>
                  </div>

                  <div className="space-y-4">
                    {/* HubSpot Operations Hub */}
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF7A59]" />
                        <p className="text-[12px] font-semibold text-[#111]">HubSpot Operations Hub</p>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium bg-[#FF7A59]/10 text-[#FF7A59]">Fondation</span>
                      </div>
                      <p className="text-[11px] text-[#777] leading-[1.7] mb-3">La base de votre stack data quality. Deduplication native, reformatage automatique des proprietes, workflows de nettoyage. Le plan Starter (20 EUR/mois) suffit pour la plupart des PME. Le plan Pro ajoute les data quality automations et les jeux de donnees.</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["Deduplication native (contacts + entreprises)", "Reformatage automatique des proprietes", "Data quality automations (Pro)", "Synchronisation bidirectionnelle", "Workflows de nettoyage conditionnel", "Rapports data quality integres"].map((f) => (
                          <p key={f} className="text-[10px] text-[#555] flex items-start gap-1.5"><span className="text-[#FF7A59] shrink-0">+</span>{f}</p>
                        ))}
                      </div>
                    </div>

                    {/* Claude Code + MCP */}
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#D4A27F]" />
                        <p className="text-[12px] font-semibold text-[#111]">Claude Code + MCP HubSpot</p>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium bg-[#D4A27F]/10 text-[#D4A27F]">Intelligence</span>
                      </div>
                      <p className="text-[11px] text-[#777] leading-[1.7] mb-3">L&apos;intelligence qui manque aux outils classiques. Claude comprend le contexte, detecte les anomalies subtiles, propose des corrections argumentees. Connecte a HubSpot via MCP, il peut lire et ecrire directement dans votre portail. Ideal pour les analyses complexes et le nettoyage contextuel.</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["Detection intelligente de doublons (fuzzy + semantique)", "Audit de completude avec rapport structure", "Standardisation contextuelle (comprend les equivalences)", "Corrections en masse avec validation humaine", "Analyse de coherence cross-objets", "Automatisation personnalisee sans code"].map((f) => (
                          <p key={f} className="text-[10px] text-[#555] flex items-start gap-1.5"><span className="text-[#D4A27F] shrink-0">+</span>{f}</p>
                        ))}
                      </div>
                    </div>

                    {/* Insycle */}
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#4B5EFC]" />
                        <p className="text-[12px] font-semibold text-[#111]">Insycle</p>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium bg-[#4B5EFC]/10 text-[#4B5EFC]">Nettoyage en masse</span>
                      </div>
                      <p className="text-[11px] text-[#777] leading-[1.7] mb-3">Pour les bases de plus de 50 000 contacts qui ont besoin d&apos;un nettoyage massif avant le premier audit. Deduplication avancee avec fuzzy matching, nettoyage en masse avec regles personnalisees, planification de nettoyages recurrents. A partir de 200$/mois. A utiliser en complement, pas en remplacement.</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["Deduplication avancee (fuzzy matching)", "Nettoyage en masse par regles", "Standardisation automatique des champs", "Association automatique contacts-entreprises", "Planification de nettoyages recurrents", "Integration native HubSpot"].map((f) => (
                          <p key={f} className="text-[10px] text-[#555] flex items-start gap-1.5"><span className="text-[#4B5EFC] shrink-0">+</span>{f}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#F0FDF4] border border-[#D4EDDA] p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Notre stack recommandee</p>
                    <p className="text-[11px] text-[#777] leading-[1.7]">HubSpot Operations Hub Starter (reformatage, dedup native) + Claude Code via MCP (analyse intelligente, corrections contextuelles). Cout total : moins de 50 EUR/mois pour une base propre et exploitable. Ajoutez Insycle uniquement si votre base depasse 50 000 contacts et necessite un nettoyage massif initial.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Gouvernance */}
              <section id="gouvernance" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mettre en place la gouvernance</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Le nettoyage sans gouvernance, c&apos;est un regime sans changement d&apos;habitudes. Vous perdez 5 kilos en deux semaines, vous les reprenez en trois mois. La gouvernance des donnees, c&apos;est le systeme qui fait que votre base reste propre apres le nettoyage initial.</p>
                    <p>L&apos;objectif est clair : que la base ne se degrade plus. Pas qu&apos;elle ne se degrade jamais (c&apos;est impossible avec les changements naturels de poste, d&apos;entreprise, d&apos;email), mais que la degradation soit detectee et corrigee en continu, automatiquement.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                    {[
                      {
                        title: "Champs obligatoires",
                        desc: "Rendez les champs critiques obligatoires sur les formulaires et a la creation manuelle. Email, lifecycle stage, source d'acquisition, owner. Un contact qui entre sans ces champs est un contact inutilisable.",
                        color: "#22C55E",
                        examples: ["Formulaires : email + prenom + entreprise obligatoires", "Creation manuelle : email + lifecycle stage requis", "Import CSV : validation pre-import sur les champs cles"]
                      },
                      {
                        title: "Validation rules",
                        desc: "Definissez des regles de validation dans HubSpot pour empecher les donnees mal formatees d'entrer. Format email, format telephone, valeurs autorisees pour les dropdowns.",
                        color: "#4B5EFC",
                        examples: ["Email : regex de validation du format", "Telephone : format E.164 impose", "Pays : dropdown ISO, pas de texte libre"]
                      },
                      {
                        title: "Workflows de standardisation",
                        desc: "Des automatisations qui corrigent en continu. Capitalisation des noms, reformatage des telephones, association automatique contact-entreprise par domaine email.",
                        color: "#FF7A59",
                        examples: ["Workflow : capitalize first name, last name", "Workflow : format phone to E.164 on create/update", "Workflow : associate contact to company by email domain"]
                      },
                      {
                        title: "Audit mensuel automatise",
                        desc: "Un rapport genere automatiquement chaque mois avec les indicateurs data quality : taux de completude, nombre de doublons, taux de bounce, contacts inactifs. Alerte si un seuil est depasse.",
                        color: "#6C5CE7",
                        examples: ["Rapport mensuel : completude par objet et par champ", "Alerte Slack : bounce rate > 3%", "Alerte : doublons detectes > 50 paires"]
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-[#111]">{item.title}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6] mb-3">{item.desc}</p>
                        <div className="space-y-1">
                          {item.examples.map((e) => (
                            <p key={e} className="text-[10px] text-[#999] flex items-start gap-1.5">
                              <span className="shrink-0 mt-0.5" style={{ color: item.color }}>&#8226;</span>
                              {e}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le calendrier de gouvernance :</strong></p>
                    <p><strong className="text-[#111]">Chaque semaine (15 min) :</strong> verification du taux de bounce des dernieres campagnes. Revue rapide des doublons detectes automatiquement. Traitement des alertes.</p>
                    <p><strong className="text-[#111]">Chaque mois (1h) :</strong> rapport data quality automatise. Verification des contacts sans owner. Nettoyage des deals fantomes. Re-enrichissement des fiches incompletes prioritaires.</p>
                    <p><strong className="text-[#111]">Chaque trimestre (2-4h) :</strong> audit complet de la checklist 30 points. Archivage des contacts inactifs depuis plus de 12 mois. Revue des proprietes utilisees vs inutilisees. Mise a jour des regles de validation si necessaire.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Notre approche chez Ceres -- Dark section */}
              <section id="approche-ceres" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[#22C55E]/20 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <h2 className="text-[17px] font-semibold text-white">Notre approche chez Ceres</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75] mb-6">
                    <p>On audite votre CRM. On note chaque point de la checklist. On nettoie. On met en place la gouvernance. Ensuite seulement, on deploie l&apos;IA. C&apos;est moins glamour qu&apos;un agent IA qui repond a vos prospects en 30 secondes, mais c&apos;est ce qui fait la difference entre un projet qui marche et un projet qui finit en shelfware.</p>
                    <p>La realite que personne ne dit : 90% des echecs de projets IA en B2B ne viennent pas du modele, ni du prompt, ni de l&apos;outil. Ils viennent des donnees. Un agent de prospection brillant qui travaille sur une base pleine de doublons et d&apos;emails invalides ne produira que de la frustration. Un forecasting IA nourri par un pipeline gonfle de deals fantomes produira des previsions fausses.</p>
                    <p>Notre methode est deliberement sequentielle :</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {[
                      { title: "1. Audit de la base", desc: "On passe chaque point de la checklist. On mesure les taux de completude, les doublons, les incoherences, l'obsolescence. On produit un score data quality global et un score par objet (contacts, entreprises, deals).", color: "#22C55E" },
                      { title: "2. Nettoyage structure", desc: "On nettoie par priorite d'impact. D'abord les doublons (risque le plus eleve pour l'IA), puis les formats (prerequis pour la standardisation), puis la completude (enrichissement des champs vides critiques).", color: "#4B5EFC" },
                      { title: "3. Gouvernance", desc: "On met en place les champs obligatoires, les validation rules, les workflows de standardisation automatique et les alertes de degradation. La base ne se degrade plus.", color: "#FF7A59" },
                      { title: "4. Deploiement IA", desc: "Seulement maintenant, on deploie les agents IA. Scoring, prospection, forecasting, coaching. Sur des donnees propres, l'IA produit des resultats concrets et mesurables des la premiere semaine.", color: "#6D00CC" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-white">{item.title}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4 mb-6">
                    <p className="text-[12px] font-semibold text-white mb-3">Resultats moyens constates chez nos clients</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "38 → 91", label: "Score data quality /100", color: "#22C55E" },
                        { stat: "-72%", label: "Doublons supprimes", color: "#4B5EFC" },
                        { stat: "+45%", label: "Taux de completude", color: "#6C5CE7" },
                        { stat: "3 jours", label: "Pour deployer le premier agent IA", color: "#FF7A59" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p>L&apos;audit prend 3 a 5 jours. Le nettoyage, 1 a 2 semaines selon la taille de la base. La gouvernance est mise en place en parallele. Et le deploiement IA peut commencer des que le score data quality depasse 80/100. Pour la plupart de nos clients, c&apos;est un mois entre le premier appel et le premier agent IA en production.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl p-6 md:p-8 text-center border border-[#22C55E]/30" style={{ background: "linear-gradient(135deg, #22C55E, #16A34A)" }}>
                <h3 className="text-[17px] font-semibold text-white mb-3">Votre base est-elle prete pour l&apos;IA ?</h3>
                <p className="text-[13px] text-white/80 leading-[1.7] mb-5 max-w-[500px] mx-auto">On audite votre CRM sur les 30 points de cette checklist, on nettoie, on met en place la gouvernance. Ensuite seulement, on deploie l&apos;IA. Commencez par un appel de 30 minutes pour evaluer l&apos;etat de sante de vos donnees.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#16A34A] rounded-lg text-[13px] font-medium hover:bg-white/90 transition-colors">
                  Demander un audit gratuit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Related articles */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#111] mb-4">Articles complementaires</h3>
                <div className="grid gap-3">
                  {relatedArticles.map((a) => (
                    <Link key={a.slug} href={`/blog/${a.slug}`} className="group flex items-center gap-4 rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors">
                      <div className="w-1 h-10 rounded-full" style={{ background: a.color }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-medium mb-1" style={{ color: a.color }}>{a.category}</p>
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#22C55E] transition-colors leading-[1.4]">{a.title}</p>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m9 18 6-6-6-6" /></svg>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}