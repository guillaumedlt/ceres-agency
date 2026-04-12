"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Migration CRM : comment migrer sans perdre de donnees",
  description: "Guide complet de la migration CRM sans perte de donnees. Audit pre-migration, mapping des champs, nettoyage avant migration, migration technique, tests, go-live et timeline type avec budget.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/migration-crm-sans-perdre-donnees" },
  articleSection: "CRM & HubSpot",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-echouent", title: "Pourquoi les migrations echouent" },
  { id: "audit-pre-migration", title: "L'audit pre-migration" },
  { id: "mapping-champs", title: "Le mapping des champs" },
  { id: "nettoyage-avant", title: "Le nettoyage AVANT la migration" },
  { id: "migration-technique", title: "La migration technique" },
  { id: "tests-validation", title: "Les tests et la validation" },
  { id: "go-live", title: "Le go-live" },
  { id: "timeline-budget", title: "Timeline type et budget" },
];

const relatedArticles = [
  { title: "Migration CRM : comment changer de CRM sans tout casser", slug: "migration-crm-guide-complet", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Data quality CRM : audit et nettoyage en 5 etapes", slug: "data-quality-crm-audit-nettoyage", category: "Data & Reporting", color: "#22C55E" },
  { title: "Data cleaning avant l'IA : la checklist en 30 points", slug: "data-cleaning-checklist-avant-ia", category: "Data & Reporting", color: "#22C55E" },
];

export default function MigrationCrmSansPerdreDonneesArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-echouent");

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
        <div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#FF7A59", opacity: 0.06, filter: "blur(70px)" }} />

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
                        ? "border-[#4B5EFC] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Migration%20CRM%20%3A%20comment%20migrer%20sans%20perdre%20de%20donnees&url=https://ceres.agency/blog/migration-crm-sans-perdre-donnees" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/migration-crm-sans-perdre-donnees" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Migration CRM sans perdre de donnees</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM &amp; HubSpot</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Migration CRM : comment migrer sans perdre de donnees
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Changer de CRM est un projet a haut risque. 30% des migrations se passent mal : donnees perdues, historique efface, equipes qui n&apos;adoptent pas le nouvel outil. Ce guide detaille les 7 etapes pour migrer proprement, du premier audit au support J+30, avec les pieges a eviter et une timeline realiste.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>12 avril 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 */}
              <section id="pourquoi-echouent" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi les migrations echouent</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En 9 ans et 120 000+ contacts migres, on a vu les memes erreurs revenir a chaque migration ratee. Les causes ne sont jamais techniques. Un import CSV qui echoue, ca se relance. La vraie casse vient de trois facteurs humains et organisationnels.</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /><strong className="text-[#111]">Migrer les dechets.</strong> L&apos;erreur numero un est de migrer toute la base sans tri. On prend les 50 000 contacts de l&apos;ancien CRM et on les deverse dans le nouveau. Resultat : le nouveau CRM demarre avec les memes problemes que l&apos;ancien. 40% de doublons, 30% d&apos;emails invalides, des champs vides partout. Vous avez change d&apos;outil, pas de qualite de donnees.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Sous-estimer le mapping.</strong> Chaque CRM a sa propre logique de champs, d&apos;objets et de relations. Un &ldquo;deal stage&rdquo; dans Pipedrive ne correspond pas forcement a un &ldquo;deal stage&rdquo; dans HubSpot. Les champs custom de l&apos;ancien CRM n&apos;ont pas d&apos;equivalent automatique. Si le mapping est bacle, les donnees arrivent au mauvais endroit ou ne sont pas exploitables.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Oublier l&apos;adoption.</strong> Le CRM est migre, les donnees sont la. Mais les equipes ne savent pas utiliser le nouvel outil. Les process ne sont pas documentes. Les automatisations de l&apos;ancien CRM n&apos;ont pas ete recreees. Pendant 3 mois, l&apos;equipe utilise le nouveau CRM comme l&apos;ancien, sans exploiter ses fonctionnalites. La promesse du changement s&apos;evapore.</li>
                    </ul>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "30%", label: "des migrations se passent mal", color: "#EF4444" },
                      { stat: "120K+", label: "contacts migres chez Ceres", color: "#22C55E" },
                      { stat: "4-8 sem", label: "duree moyenne d'une migration PME", color: "#4B5EFC" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[20px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="audit-pre-migration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;audit pre-migration : que garder, que jeter</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de migrer quoi que ce soit, vous devez savoir ce que vous avez. L&apos;audit pre-migration est une radiographie de votre base actuelle. Il repond a trois questions : combien de donnees avez-vous, dans quel etat sont-elles, et lesquelles meritent d&apos;etre migrees ?</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Inventaire des objets et des champs",
                        desc: "Listez tous les objets (contacts, entreprises, deals, tickets, custom objects) avec le nombre de fiches par objet. Pour chaque objet, listez les champs custom et leur taux de remplissage. Un champ rempli a moins de 20% ne merite probablement pas d'etre migre.",
                        color: "#4B5EFC"
                      },
                      {
                        title: "Qualite des donnees",
                        desc: "Mesurez les indicateurs de qualite : taux de doublons, taux de completude sur les champs critiques (email, nom, entreprise), taux d'emails invalides (bounce), fiches sans activite depuis 12 mois. Ce diagnostic determine l'ampleur du nettoyage a faire AVANT la migration.",
                        color: "#22C55E"
                      },
                      {
                        title: "Decision garder/jeter",
                        desc: "Appliquez la regle des 3 criteres. Un contact est migre si : (1) email valide, (2) au moins un champ d'identification (nom OU entreprise), (3) activite dans les 24 derniers mois OU deal associe. Tout le reste est archive, pas migre. En moyenne, 30 a 40% de la base ne merite pas d'etre migree.",
                        color: "#FF7A59"
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;audit pre-migration prend entre 2 et 5 jours selon la taille de la base. C&apos;est un investissement qui fait gagner des semaines pendant la migration elle-meme. Migrer 30 000 contacts propres est plus rapide et plus fiable que migrer 50 000 contacts sales.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="mapping-champs" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le mapping des champs : source &gt; destination</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le mapping est le document le plus important de la migration. Il definit, pour chaque champ de l&apos;ancien CRM, ou il atterrit dans le nouveau. C&apos;est une matrice source &gt; destination, champ par champ.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Exemple de mapping Pipedrive &gt; HubSpot</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Pipedrive (source)</th>
                            <th className="text-left py-2 px-2 text-[#999] font-semibold">HubSpot (destination)</th>
                            <th className="text-left py-2 px-2 text-[#999] font-semibold">Type</th>
                            <th className="text-left py-2 pl-2 text-[#999] font-semibold">Transformation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { source: "Person name", dest: "First Name + Last Name", type: "Split", transform: "Separer au premier espace" },
                            { source: "Organization", dest: "Company Name", type: "Direct", transform: "Aucune" },
                            { source: "Deal value", dest: "Amount", type: "Direct", transform: "Verifier la devise" },
                            { source: "Deal stage", dest: "Deal Stage", type: "Mapping", transform: "Table de correspondance" },
                            { source: "Custom field: NB Employees", dest: "Number of Employees", type: "Mapping", transform: "Convertir texte > nombre" },
                            { source: "Notes", dest: "Notes", type: "Direct", transform: "Fusionner si multiples" },
                            { source: "Activities (calls, emails)", dest: "Engagements", type: "API", transform: "Recreer via API engagements" },
                          ].map((row) => (
                            <tr key={row.source} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.source}</td>
                              <td className="py-2.5 px-2 text-[#4B5EFC] font-medium">{row.dest}</td>
                              <td className="py-2.5 px-2 text-[#999]">{row.type}</td>
                              <td className="py-2.5 pl-2 text-[#777]">{row.transform}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Le mapping complet inclut chaque champ de chaque objet, avec les regles de transformation.</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les 4 types de mapping.</strong> Direct (champ A va dans champ A&apos;, sans transformation). Split (un champ est eclate en plusieurs). Merge (plusieurs champs sont fusionnes en un). Mapping (les valeurs sont converties selon une table de correspondance). Les deal stages sont presque toujours un mapping : les etapes de l&apos;ancien pipeline ne correspondent pas a celles du nouveau.</p>
                    <p><strong className="text-[#111]">N&apos;oubliez pas les relations.</strong> Les contacts sont associes a des entreprises, les deals sont associes a des contacts, les tickets a des deals. Ces associations doivent etre migrees dans le bon ordre : d&apos;abord les entreprises, puis les contacts (avec association entreprise), puis les deals (avec associations contacts et entreprises).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="nettoyage-avant" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le nettoyage AVANT la migration (pas apres)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La regle d&apos;or de la migration : nettoyez avant, pas apres. Nettoyer dans l&apos;ancien CRM, avant l&apos;export, est 3 a 5 fois plus rapide que nettoyer dans le nouveau CRM apres l&apos;import. L&apos;ancien CRM a les outils, les filtres, les automatisations que vous connaissez. Le nouveau, vous ne le maitrisez pas encore.</p>
                  </div>

                  <div className="my-6 space-y-2">
                    {[
                      { step: "01", title: "Deduplication", desc: "Fusionnez les doublons dans l'ancien CRM. Email comme cle primaire, puis combinaison nom + entreprise + telephone pour les cas sans email. Objectif : 0% de doublons dans l'export.", color: "#22C55E" },
                      { step: "02", title: "Suppression des inactifs", desc: "Archivez ou supprimez les contacts sans activite depuis 24 mois, sans deal associe et sans email valide. Ils n'ont pas de valeur dans le nouveau CRM non plus.", color: "#4B5EFC" },
                      { step: "03", title: "Standardisation", desc: "Uniformisez les formats : noms en Title Case, telephones au format international, secteurs dans des valeurs standardisees. C'est plus facile a faire en masse dans l'ancien CRM.", color: "#6C5CE7" },
                      { step: "04", title: "Validation emails", desc: "Passez la base dans un outil de verification d'emails (Neverbounce, ZeroBounce). Supprimez les emails invalides et les hard bounces. Un taux de bounce superieur a 5% impactera votre deliverabilite dans le nouveau CRM.", color: "#FF7A59" },
                      { step: "05", title: "Enrichissement", desc: "Completez les champs manquants critiques avant la migration. C'est le moment d'enrichir via Clay, Apollo ou Societe.com. Migrer une base enrichie, c'est demarrer avec un avantage.", color: "#D4A27F" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-4">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: item.color }}>{item.step}</div>
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le nettoyage pre-migration prend entre 3 et 10 jours selon la taille et l&apos;etat de la base. C&apos;est la phase que les entreprises veulent toujours raccourcir, et c&apos;est la phase qui determine le succes de toute la migration. Ne la bachez pas.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="migration-technique" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La migration technique : import, API, middleware</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Trois methodes pour migrer les donnees, du plus simple au plus complexe. Le choix depend du volume, de la complexite des donnees et du budget.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        method: "Import CSV",
                        ideal: "< 10 000 contacts, donnees simples, pas d'historique d'activites",
                        pros: "Gratuit, simple, controlable. Export de l'ancien CRM en CSV, transformation dans un spreadsheet, import dans le nouveau.",
                        cons: "Pas d'historique d'activites (calls, emails, meetings). Pas d'associations complexes. Limites sur les volumes.",
                        cost: "0 EUR (hors temps)",
                        color: "#22C55E"
                      },
                      {
                        method: "API directe",
                        ideal: "10 000 - 100 000 contacts, historique a migrer, associations complexes",
                        pros: "Migration complete avec historique. Controle total sur le mapping et les transformations. Peut migrer les activites, les notes, les fichiers.",
                        cons: "Necessite un developpeur. Temps de developpement : 3 a 10 jours selon la complexite. Limites de rate sur les APIs.",
                        cost: "2 000 - 8 000 EUR",
                        color: "#4B5EFC"
                      },
                      {
                        method: "Middleware (Trujay, Import2, custom)",
                        ideal: "> 100 000 contacts, migration complexe multi-objets, constraints de temps",
                        pros: "Outils specialises dans la migration CRM. Interface visuelle pour le mapping. Gestion automatique des rate limits et des erreurs.",
                        cons: "Cout eleve. Moins de controle sur les transformations. Dependance a un outil tiers.",
                        cost: "3 000 - 15 000 EUR",
                        color: "#6C5CE7"
                      },
                    ].map((item) => (
                      <div key={item.method} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.method}</span>
                          <span className="text-[10px] font-medium ml-auto" style={{ color: item.color }}>{item.cost}</span>
                        </div>
                        <p className="text-[10px] text-[#999] mb-2">Ideal pour : {item.ideal}</p>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-1"><strong className="text-[#111]">+</strong> {item.pros}</p>
                        <p className="text-[11px] text-[#777] leading-[1.7]"><strong className="text-[#111]">-</strong> {item.cons}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Notre recommandation.</strong> Pour la plupart des PME (10 000 a 50 000 contacts), l&apos;API directe est le meilleur rapport qualite/prix. On developpe un script custom qui gere le mapping, les transformations, les associations et l&apos;historique. Le script est reutilisable pour les tests, les dry runs et la migration finale.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="tests-validation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les tests : dry run, validation, rollback</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Vous ne migrez jamais directement en production. Jamais. La migration passe d&apos;abord par un environnement de test, avec une methodologie rigoureuse de validation.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        phase: "Dry run 1 : echantillon",
                        desc: "Migrez 100 contacts, 50 entreprises, 30 deals. Verifiez champ par champ que les donnees sont au bon endroit, dans le bon format, avec les bonnes associations. Ce premier test revele 80% des problemes de mapping.",
                        color: "#22C55E"
                      },
                      {
                        phase: "Dry run 2 : volume",
                        desc: "Migrez 10% de la base complete. Testez les performances (temps d'import, rate limits), verifiez les cas limites (caracteres speciaux, champs tres longs, valeurs nulles). Mesurez le taux d'erreur. Objectif : moins de 1% d'erreurs.",
                        color: "#4B5EFC"
                      },
                      {
                        phase: "Validation metier",
                        desc: "Un representant de chaque equipe (sales, marketing, CS) verifie 20 fiches aleatoires dans le nouveau CRM. Les deals sont-ils au bon stade ? Les contacts sont-ils associes aux bonnes entreprises ? Les notes sont-elles lisibles ? Cette validation metier est indispensable.",
                        color: "#6C5CE7"
                      },
                      {
                        phase: "Plan de rollback",
                        desc: "Avant la migration finale, documentez le plan de rollback : comment revenir a l'etat precedent si la migration echoue. Sauvegardez l'ancien CRM (export complet). Gardez les acces a l'ancien CRM pendant 30 jours apres la migration. Definissez les criteres de go/no-go.",
                        color: "#FF7A59"
                      },
                    ].map((item) => (
                      <div key={item.phase} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.phase}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les tests representent environ 30% du temps total de la migration. C&apos;est beaucoup, mais c&apos;est ce qui fait la difference entre une migration qui se passe bien et une migration qui detruit de la valeur. Chaque heure investie en tests fait gagner une journee de correction post-migration.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="go-live" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le go-live : formation, adoption, support J+30</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La migration technique est terminee. Les donnees sont dans le nouveau CRM. Mais le travail n&apos;est pas fini. Le go-live est le moment le plus critique : c&apos;est la que l&apos;adoption se joue. Si les equipes ne sont pas preparees, le nouveau CRM devient un outil de plus que personne n&apos;utilise correctement.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { action: "Formation par role", desc: "Pas une formation generique de 2h pour tout le monde. Une session de 45 min par role : SDR (prospection, sequences), AE (pipeline, deals, forecasting), Marketing (listes, workflows, reporting), CS (tickets, satisfaction). Chaque role utilise le CRM differemment.", color: "#22C55E" },
                      { action: "Documentation interne", desc: "Un guide de 5 pages maximum avec les process critiques : comment creer un contact, comment deplacer un deal, comment logger un call, ou trouver les rapports. Format : captures d'ecran + etapes numerotees. Accessible depuis le CRM (lien dans la sidebar).", color: "#4B5EFC" },
                      { action: "Support J+30", desc: "Un canal Slack dedie aux questions CRM pendant 30 jours. Un referent interne (Data Steward) qui repond aux questions quotidiennes. Un point hebdomadaire de 15 minutes pour traiter les problemes remontes. Apres 30 jours, la majorite des questions auront ete posees et repondues.", color: "#6C5CE7" },
                      { action: "Mesure de l'adoption", desc: "A J+7, J+14 et J+30, mesurez : nombre de connexions quotidiennes, nombre de fiches creees/modifiees, nombre de deals mis a jour, utilisation des automatisations. Si l'adoption est inferieure a 80% a J+30, il y a un probleme a traiter (formation, UX, process).", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.action} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.action}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="timeline-budget" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Timeline type et budget</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Voici la timeline realiste pour une migration CRM de PME (5 000 a 50 000 contacts, 3 a 5 objets, historique a migrer). Comptez 4 a 8 semaines au total.</p>
                  </div>

                  <div className="my-6 space-y-2">
                    {[
                      { week: "S1", phase: "Audit pre-migration", tasks: "Inventaire, qualite, decision garder/jeter", color: "#22C55E" },
                      { week: "S2", phase: "Mapping + Nettoyage", tasks: "Matrice source/destination + dedup, standardisation", color: "#4B5EFC" },
                      { week: "S3", phase: "Nettoyage + Enrichissement", tasks: "Validation emails, enrichissement, preparation export", color: "#6C5CE7" },
                      { week: "S4", phase: "Migration technique", tasks: "Dry run 1 + Dry run 2 + corrections", color: "#FF7A59" },
                      { week: "S5", phase: "Tests + Validation metier", tasks: "Verification par les equipes, ajustements finaux", color: "#D4A27F" },
                      { week: "S6", phase: "Migration finale + Go-live", tasks: "Migration production, formation, documentation", color: "#22C55E" },
                      { week: "S7-8", phase: "Support post-migration", tasks: "Canal support, mesure adoption, corrections", color: "#4B5EFC" },
                    ].map((item) => (
                      <div key={item.week} className="flex items-center gap-3 rounded-xl border border-[#333] bg-[#1A1A1A] p-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: item.color }}>{item.week}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-semibold text-white">{item.phase}</p>
                          <p className="text-[10px] text-[#777]">{item.tasks}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="my-6 rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                    <p className="text-[12px] font-semibold text-white mb-3">Budget type</p>
                    <div className="space-y-1.5">
                      {[
                        { poste: "Audit + Nettoyage", range: "2 000 - 4 000 EUR", pct: "25%" },
                        { poste: "Mapping + Migration technique", range: "3 000 - 8 000 EUR", pct: "40%" },
                        { poste: "Tests + Validation", range: "1 000 - 3 000 EUR", pct: "15%" },
                        { poste: "Formation + Support J+30", range: "1 500 - 3 000 EUR", pct: "20%" },
                      ].map((item) => (
                        <div key={item.poste} className="flex items-center justify-between text-[11px] py-1.5 px-3 rounded-lg bg-[#222] border border-[#333]">
                          <span className="text-[#999]">{item.poste}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-[#666]">{item.pct}</span>
                            <span className="text-white font-medium w-[120px] text-right">{item.range}</span>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center justify-between text-[12px] py-2 px-3 rounded-lg bg-[#4B5EFC]/10 border border-[#4B5EFC]/30">
                        <span className="font-semibold text-white">Budget total PME</span>
                        <span className="font-bold text-[#4B5EFC]">7 500 - 18 000 EUR</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on a realise plus de 50 migrations CRM. La plus petite faisait 2 000 contacts (Pipedrive vers HubSpot, 3 semaines, 4 000 EUR). La plus grosse faisait 120 000 contacts (Salesforce vers HubSpot, 12 semaines, 25 000 EUR). Chaque migration est differente, mais la methode est toujours la meme : audit, nettoyage, mapping, tests, go-live, support.</p>
                    <p>On ne fait pas de migration sans nettoyage prealable. Si les donnees ne sont pas pretes, on le dit, et on prend le temps de les preparer. C&apos;est la condition pour que la migration soit un succes, pas juste un deplacement de problemes d&apos;un outil a un autre.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Planifier votre migration CRM ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">On realise un audit gratuit de votre base actuelle. En 30 minutes, on identifie le volume a migrer, l&apos;etat des donnees et le budget estimatif. Plus de 120 000 contacts migres sans perte de donnees.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4B5EFC] text-white rounded-lg text-[13px] font-medium hover:bg-[#3A4DE0] transition-colors">
                  Planifier la migration
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#4B5EFC] transition-colors leading-[1.4]">{a.title}</p>
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
