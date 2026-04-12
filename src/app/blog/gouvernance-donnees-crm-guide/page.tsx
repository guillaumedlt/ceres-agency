"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gouvernance des donnees CRM : le guide pour ne plus jamais nettoyer",
  description: "Guide complet de la gouvernance des donnees CRM. Champs obligatoires, validation rules, workflows de standardisation, audits automatises. Comment configurer dans HubSpot, les roles, l'IA et le data quality score.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/gouvernance-donnees-crm-guide" },
  articleSection: "Data & Reporting",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "re-degradation", title: "Pourquoi la base se re-degrade" },
  { id: "quatre-piliers", title: "Les 4 piliers de la gouvernance" },
  { id: "configurer-hubspot", title: "Configurer dans HubSpot" },
  { id: "roles-responsabilites", title: "Roles et responsabilites" },
  { id: "gouvernance-ia", title: "Gouvernance et IA" },
  { id: "mesurer-qualite", title: "Mesurer la qualite" },
  { id: "erreurs-classiques", title: "Les erreurs classiques" },
  { id: "template-politique", title: "Template de politique" },
];

const relatedArticles = [
  { title: "Data quality CRM : audit et nettoyage en 5 etapes", slug: "data-quality-crm-audit-nettoyage", category: "Data & Reporting", color: "#22C55E" },
  { title: "Data cleaning avant l'IA : la checklist en 30 points", slug: "data-cleaning-checklist-avant-ia", category: "Data & Reporting", color: "#22C55E" },
  { title: "Fondation Data : CRM propre, KPIs alignes, pret pour l'IA", slug: "../fondation-data", category: "Services", color: "#22C55E" },
];

export default function GouvernanceDonneesCrmGuideArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("re-degradation");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Gouvernance%20des%20donnees%20CRM%20%3A%20le%20guide%20complet&url=https://ceres.agency/blog/gouvernance-donnees-crm-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/gouvernance-donnees-crm-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Gouvernance des donnees CRM</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Data &amp; Reporting</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Gouvernance des donnees CRM : le guide pour ne plus jamais nettoyer
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Vous venez de passer deux semaines a nettoyer votre CRM. Dans trois mois, la base sera de nouveau sale. Le probleme n&apos;est pas le nettoyage. C&apos;est l&apos;absence de gouvernance. Ce guide vous donne les 4 piliers, la configuration HubSpot pas a pas, les roles a definir et un template de politique de gouvernance pret a deployer.
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
              <section id="re-degradation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi la base se re-degrade en 3 mois</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un nettoyage CRM sans gouvernance, c&apos;est comme repeindre un mur sans traiter l&apos;humidite. Le resultat est visible pendant quelques semaines, puis les taches reviennent. En moyenne, une base CRM nettoyee se re-degrade en 90 jours si rien n&apos;est mis en place pour la proteger.</p>
                    <p>Les causes sont toujours les memes. Elles ne sont pas techniques, elles sont humaines et organisationnelles.</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /><strong className="text-[#111]">Pas de regles de saisie.</strong> Chaque commercial remplit les champs a sa maniere. Un met &ldquo;SAS&rdquo;, l&apos;autre &ldquo;S.A.S.&rdquo;, le troisieme rien du tout. Les champs libres sans validation sont la premiere source de degradation. En 3 mois, avec 5 commerciaux qui creent 20 contacts par semaine, vous avez 1 200 fiches avec des formats differents.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Pas de process de deduplication continue.</strong> Les imports marketing, les formulaires web, les integrations Zapier, les saisies manuelles : chaque source cree des doublons. Sans deduplication automatique, le volume de doublons croit de 5 a 10% par mois.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Pas de proprietaire des donnees.</strong> Si personne n&apos;est responsable de la qualite de la base, personne ne la surveille. Le nettoyage devient un projet ponctuel au lieu d&apos;un processus continu. Et un projet ponctuel, par definition, a une fin.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Pas de mesure de la qualite.</strong> Si vous ne mesurez pas la degradation, vous ne la voyez pas. Quand vous la voyez, il est deja trop tard. La base a deja 30% de fiches incompletes et 15% de doublons.</li>
                    </ul>
                    <p>La gouvernance des donnees, c&apos;est l&apos;ensemble des regles, des roles et des outils qui empechent cette degradation. Ce n&apos;est pas un projet. C&apos;est un systeme.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { stat: "90 jours", label: "pour re-degrader une base nettoyee", color: "#EF4444" },
                      { stat: "5-10%", label: "doublons crees par mois sans controle", color: "#FF7A59" },
                      { stat: "30%", label: "de fiches incompletes en moyenne", color: "#6C5CE7" },
                      { stat: "0", label: "entreprises avec un proprietaire data", color: "#4B5EFC" },
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
              <section id="quatre-piliers" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 4 piliers de la gouvernance</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La gouvernance CRM repose sur quatre piliers complementaires. Retirer un seul pilier et le systeme s&apos;effondre. Les quatre doivent fonctionner ensemble pour que la qualite se maintienne dans le temps.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Champs obligatoires",
                        desc: "Definir les champs qui doivent etre remplis a chaque etape du lifecycle. A la creation d'un contact : email, prenom, nom, entreprise. A la creation d'un deal : montant, date de closing, proprietaire. A la conversion MQL : secteur, taille d'entreprise, source. Pas de contact sans email valide. Pas de deal sans montant. C'est non negociable.",
                        color: "#22C55E",
                        number: "01"
                      },
                      {
                        title: "Validation rules",
                        desc: "Les champs obligatoires ne suffisent pas si on peut y mettre n'importe quoi. Les validation rules controlent le format : email valide, telephone au format international, code postal a 5 chiffres, URL avec https. Elles controlent aussi la coherence : un deal en 'Closed Won' doit avoir une date de closing, un montant et un contact associe.",
                        color: "#4B5EFC",
                        number: "02"
                      },
                      {
                        title: "Workflows de standardisation",
                        desc: "Les workflows automatiques corrigent ce que les regles ne peuvent pas empecher. Standardisation des noms d'entreprises (suppression de 'SAS', 'SARL', majuscules), normalisation des numeros de telephone, deduplication automatique sur l'email, enrichissement des champs manquants via API externe. Ces workflows tournent en continu, pas en one-shot.",
                        color: "#6C5CE7",
                        number: "03"
                      },
                      {
                        title: "Audits automatises",
                        desc: "Un rapport hebdomadaire automatique qui mesure la qualite de la base : taux de completude par champ critique, nombre de doublons detectes, fiches sans activite depuis 6 mois, emails invalides. Ce rapport est envoye au proprietaire des donnees. Si un indicateur passe sous le seuil, une alerte est declenchee.",
                        color: "#FF7A59",
                        number: "04"
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: item.color }}>{item.number}</div>
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les piliers 1 et 2 sont preventifs : ils empechent la saisie de donnees incorrectes. Les piliers 3 et 4 sont correctifs : ils detectent et corrigent les problemes qui passent entre les mailles. Ensemble, ils forment un systeme auto-regulateur qui maintient la qualite sans intervention manuelle.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="configurer-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment configurer dans HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot offre tous les outils natifs pour implementer ces 4 piliers. Voici la configuration pas a pas, sans code et sans integration tierce.</p>
                  </div>

                  <div className="my-6 space-y-4">
                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                      <p className="text-[12px] font-semibold text-[#22C55E] mb-3">Champs obligatoires</p>
                      <div className="space-y-2 text-[11px] text-[#777] leading-[1.7]">
                        <p><strong className="text-[#111]">Settings &gt; Objects &gt; Contacts &gt; Record Customization.</strong> Activez &ldquo;Require this property&rdquo; sur les champs critiques : Email, First Name, Last Name, Company Name. Faites de meme sur les Deals : Deal Name, Amount, Close Date, Pipeline, Deal Stage.</p>
                        <p><strong className="text-[#111]">Conditional properties.</strong> Utilisez les &ldquo;Required Properties by Pipeline Stage&rdquo; pour forcer le remplissage a chaque etape. Exemple : a l&apos;etape &ldquo;Qualification&rdquo;, exigez le Budget et le Decision Maker. A l&apos;etape &ldquo;Proposal&rdquo;, exigez la Date de decision et le Nombre d&apos;utilisateurs.</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                      <p className="text-[12px] font-semibold text-[#4B5EFC] mb-3">Validation rules</p>
                      <div className="space-y-2 text-[11px] text-[#777] leading-[1.7]">
                        <p><strong className="text-[#111]">Property validation.</strong> Pour chaque propriete, definissez le type (number, date, single select) plutot que des champs texte libres. Un champ &ldquo;Nombre de salaries&rdquo; doit etre un Number, pas un Single-line text. Un champ &ldquo;Secteur&rdquo; doit etre un Dropdown, pas un champ libre.</p>
                        <p><strong className="text-[#111]">Workflow validation.</strong> Creez un workflow qui detecte les incoherences : deal en &ldquo;Closed Won&rdquo; sans contact associe, contact avec un email generique (gmail, hotmail) en B2B, entreprise sans secteur apres 30 jours. Le workflow notifie le proprietaire de la fiche pour correction.</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                      <p className="text-[12px] font-semibold text-[#6C5CE7] mb-3">Workflows de standardisation</p>
                      <div className="space-y-2 text-[11px] text-[#777] leading-[1.7]">
                        <p><strong className="text-[#111]">Deduplication.</strong> Activez la deduplication automatique HubSpot dans Settings &gt; Objects &gt; Contacts &gt; Duplicates. Definissez les criteres : email exact, ou combinaison nom + entreprise + telephone. Planifiez une revue hebdomadaire des doublons detectes.</p>
                        <p><strong className="text-[#111]">Normalisation.</strong> Creez des workflows qui standardisent automatiquement : mise en majuscule de la premiere lettre du prenom, suppression des espaces en debut et fin de champ, conversion du domaine email en minuscules. Utilisez les Operations Hub pour les transformations de donnees plus complexes.</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                      <p className="text-[12px] font-semibold text-[#FF7A59] mb-3">Audits automatises</p>
                      <div className="space-y-2 text-[11px] text-[#777] leading-[1.7]">
                        <p><strong className="text-[#111]">Dashboard Data Quality.</strong> Creez un dashboard dedie avec les rapports suivants : completude des champs critiques (% de fiches avec email, telephone, secteur), volume de doublons en attente, contacts sans activite depuis 6 mois, deals sans next step.</p>
                        <p><strong className="text-[#111]">Rapport automatique.</strong> Planifiez l&apos;envoi hebdomadaire du dashboard au proprietaire data. Configurez des alertes : si le taux de completude passe sous 80%, notification immediate.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;ensemble de cette configuration prend entre 4 et 8 heures pour une PME standard. C&apos;est un investissement unique qui protege la base indefiniment. Sans cette configuration, vous investirez 2 a 3 jours de nettoyage tous les trimestres, soit 8 a 12 jours par an de travail reactif au lieu de 1 jour de travail preventif.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="roles-responsabilites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les roles et responsabilites</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La gouvernance sans proprietaire ne fonctionne pas. Chaque element de la donnee doit avoir un responsable identifie. Pas un comite, pas une equipe, une personne. Voici les trois roles essentiels.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        role: "Data Owner",
                        who: "RevOps Manager ou Operations Manager",
                        does: "Definit les regles de gouvernance, valide les demandes de nouveaux champs, supervise le data quality score, arbitre les conflits de donnees entre equipes. C'est le gardien de la politique de gouvernance.",
                        freq: "Revue hebdomadaire du dashboard + revue mensuelle des regles",
                        color: "#22C55E"
                      },
                      {
                        role: "Data Stewards",
                        who: "1 par equipe (Sales, Marketing, CS)",
                        does: "Verifient la qualite des donnees de leur equipe, forment les nouveaux arrivants, remontent les problemes au Data Owner. Chaque equipe a son referent qui connait les regles et les fait respecter au quotidien.",
                        freq: "10 min/jour de verification + formation des nouveaux",
                        color: "#4B5EFC"
                      },
                      {
                        role: "Data Users",
                        who: "Tous les utilisateurs du CRM",
                        does: "Respectent les regles de saisie, signalent les anomalies, ne contournent pas les champs obligatoires. Leur responsabilite est simple : remplir correctement. La gouvernance doit rendre cette tache la plus simple possible.",
                        freq: "A chaque interaction avec le CRM",
                        color: "#6C5CE7"
                      },
                    ].map((item) => (
                      <div key={item.role} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.role}</span>
                          <span className="text-[10px] text-[#999] ml-auto">{item.who}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.does}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#FAFAFA] p-2">
                          <span className="text-[10px] font-semibold shrink-0 mt-0.5" style={{ color: item.color }}>Frequence :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.freq}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;erreur la plus frequente est de nommer un Data Owner sans lui donner le temps ni l&apos;autorite. Si la gouvernance n&apos;est pas dans sa fiche de poste, si elle n&apos;est pas evaluee, elle ne sera pas faite. Le Data Owner doit consacrer au minimum 2 heures par semaine a cette mission. Dans une PME, c&apos;est souvent le RevOps Manager qui cumule ce role.</p>
                    <p>Le ratio ideal est de 1 Data Steward pour 10 utilisateurs CRM. En dessous, la charge est trop importante pour une seule personne.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="gouvernance-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La gouvernance et l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA change la donne en matiere de gouvernance. Elle ne remplace pas les regles, mais elle les rend plus intelligentes et plus automatiques. Trois apports concrets de l&apos;IA dans la gouvernance des donnees CRM.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Detection d'anomalies",
                        desc: "Un agent IA analyse la base en continu et detecte les patterns anormaux : un commercial qui cree 50 contacts en une heure (import sauvage ?), un deal a 1 000 000 EUR dans un pipeline PME (erreur de saisie ?), une adresse email avec un domaine inexistant. L'IA voit ce que les regles statiques ne voient pas.",
                        color: "#6D00CC"
                      },
                      {
                        title: "Enrichissement automatique",
                        desc: "L'IA enrichit les fiches incompletes en croisant des sources externes : site web de l'entreprise, LinkedIn, registre du commerce, actualites. Un contact avec juste un email peut etre complete avec le nom, l'entreprise, le poste, le secteur, la taille et le chiffre d'affaires. Le taux de completude passe de 60% a 90% sans intervention humaine.",
                        color: "#22C55E"
                      },
                      {
                        title: "Standardisation intelligente",
                        desc: "Au lieu de regles if/then rigides, l'IA comprend le contexte. Elle sait que 'TotalEnergies', 'Total Energies' et 'TOTAL ENERGIES' sont la meme entreprise. Que '+33 6 12 34 56 78' et '06 12 34 56 78' sont le meme numero. La standardisation est plus precise et couvre des cas que les regles classiques manquent.",
                        color: "#4B5EFC"
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
                    <p><strong className="text-[#111]">L&apos;IA ne remplace pas la gouvernance.</strong> Elle l&apos;augmente. Sans regles de base (champs obligatoires, validation), l&apos;IA corrige des erreurs qui n&apos;auraient pas du exister. C&apos;est du gaspillage. Avec une gouvernance solide, l&apos;IA traite les cas complexes que les regles seules ne peuvent pas gerer. C&apos;est de l&apos;optimisation.</p>
                    <p>L&apos;ordre est important : d&apos;abord les regles, ensuite l&apos;IA. Pas l&apos;inverse.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="mesurer-qualite" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mesurer la qualite dans le temps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ce qui ne se mesure pas ne s&apos;ameliore pas. Le data quality score est un indicateur composite qui synthetise la sante de votre base CRM en un seul chiffre. Voici comment le construire.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Composantes du Data Quality Score</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Composante</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Poids</th>
                            <th className="text-center py-2 px-2 text-[#22C55E] font-semibold">Seuil vert</th>
                            <th className="text-center py-2 px-2 text-[#FF7A59] font-semibold">Seuil orange</th>
                            <th className="text-center py-2 pl-2 text-[#EF4444] font-semibold">Seuil rouge</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { comp: "Completude champs critiques", poids: "30%", vert: "> 85%", orange: "70-85%", rouge: "< 70%" },
                            { comp: "Taux de doublons", poids: "25%", vert: "< 3%", orange: "3-8%", rouge: "> 8%" },
                            { comp: "Emails valides", poids: "20%", vert: "> 95%", orange: "85-95%", rouge: "< 85%" },
                            { comp: "Fiches avec activite < 6 mois", poids: "15%", vert: "> 70%", orange: "50-70%", rouge: "< 50%" },
                            { comp: "Deals avec next step", poids: "10%", vert: "> 90%", orange: "75-90%", rouge: "< 75%" },
                          ].map((row) => (
                            <tr key={row.comp} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.comp}</td>
                              <td className="py-2.5 px-2 text-center text-[#999]">{row.poids}</td>
                              <td className="py-2.5 px-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">{row.vert}</span></td>
                              <td className="py-2.5 px-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#FF7A59]/10 text-[#FF7A59] font-medium">{row.orange}</span></td>
                              <td className="py-2.5 pl-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444] font-medium">{row.rouge}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Score global = somme ponderee des composantes. Objectif : maintenir au-dessus de 80/100.</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Frequence de mesure.</strong> Le data quality score doit etre calcule chaque semaine. Pas chaque mois, pas chaque trimestre. La degradation est rapide, la detection doit l&apos;etre aussi. Un score qui baisse de 85 a 78 en une semaine indique un probleme systemique (import massif, integration defaillante) qui doit etre traite immediatement.</p>
                    <p><strong className="text-[#111]">Tendance vs valeur absolue.</strong> Le chiffre absolu compte, mais la tendance compte davantage. Un score de 75 qui monte est plus sain qu&apos;un score de 82 qui descend. Suivez la tendance sur 12 semaines glissantes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="erreurs-classiques" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs classiques</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En 9 ans d&apos;accompagnement CRM, on a vu les memes erreurs revenir chez presque tous nos clients. Six erreurs qui sabotent la gouvernance avant meme qu&apos;elle ne produise des resultats.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { err: "Trop de champs obligatoires d'un coup", fix: "Commencez par 5 champs critiques. Ajoutez progressivement. Si les commerciaux passent plus de temps a remplir des champs qu'a vendre, la gouvernance sera contournee.", color: "#EF4444" },
                      { err: "Pas de formation a la saisie", fix: "30 minutes de formation par nouveau collaborateur. Un guide de saisie d'une page. Des exemples concrets pour chaque champ. Sans ca, chacun interprete les regles a sa maniere.", color: "#FF7A59" },
                      { err: "Gouvernance sans sponsor dirigeant", fix: "Si le directeur commercial ne respecte pas les regles, personne ne les respectera. Le sponsor doit etre visible et exemplaire. La gouvernance est une decision de direction, pas d'operations.", color: "#6C5CE7" },
                      { err: "Nettoyer sans gouverner", fix: "Le nettoyage est necessaire, mais il n'est pas suffisant. Nettoyer sans mettre en place de gouvernance, c'est vider l'eau du bateau sans boucher la fuite. Vous nettoierez encore dans 3 mois.", color: "#4B5EFC" },
                      { err: "Ignorer les imports marketing", fix: "Les imports de listes (salons, webinars, bases achetees) sont la premiere source de pollution. Chaque import doit passer par un workflow de deduplication et de standardisation avant d'entrer dans la base.", color: "#22C55E" },
                      { err: "Mesurer la qualite une fois par an", fix: "La qualite se mesure chaque semaine. Un audit annuel ne detecte rien. Les 11 premiers mois, la base se degrade sans que personne ne le voie.", color: "#D4A27F" },
                    ].map((item) => (
                      <div key={item.err} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.err}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.fix}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="template-politique" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Template de politique de gouvernance</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Voici la structure d&apos;une politique de gouvernance CRM que vous pouvez adapter a votre entreprise. Ce document doit tenir sur 2 pages maximum. S&apos;il est plus long, personne ne le lira.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { section: "1. Objectif", content: "Maintenir un data quality score superieur a 80/100 en continu. Assurer que chaque fiche CRM est exploitable par les equipes sales, marketing et CS sans verification manuelle.", color: "#22C55E" },
                      { section: "2. Perimetre", content: "Contacts, Entreprises, Deals, Tickets. Toutes les equipes qui creent ou modifient des fiches : Sales, Marketing, CS, Operations.", color: "#4B5EFC" },
                      { section: "3. Regles de saisie", content: "Liste des champs obligatoires par objet et par etape du lifecycle. Format attendu pour chaque champ (email, telephone, montant). Interdictions : pas de champs libres pour les donnees structurees.", color: "#6C5CE7" },
                      { section: "4. Roles", content: "Data Owner : [nom]. Data Stewards : [1 par equipe]. Responsabilites detaillees et temps alloue.", color: "#FF7A59" },
                      { section: "5. Process", content: "Deduplication : automatique a la creation + revue hebdomadaire. Imports : validation obligatoire par le Data Owner. Nouveaux champs : demande formelle + validation.", color: "#D4A27F" },
                      { section: "6. Mesure", content: "Data quality score calcule chaque lundi. Dashboard accessible a tous. Alerte si score < 80. Revue trimestrielle de la politique.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.section} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-white">{item.section}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on met en place cette politique dans le cadre de chaque mission Fondation Data. La gouvernance n&apos;est pas un livrable optionnel, c&apos;est la raison pour laquelle le nettoyage tient dans le temps. Sans elle, vous nous rappellerez dans 6 mois pour nettoyer a nouveau. Avec elle, la base se maintient seule.</p>
                    <p>On vous accompagne sur la configuration HubSpot, la definition des roles, la formation des equipes et le suivi du data quality score pendant les 3 premiers mois. Ensuite, le systeme tourne en autonomie.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Mettre en place la gouvernance CRM ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">On configure les champs obligatoires, les validation rules, les workflows de standardisation et les audits automatises. En une semaine, votre base est protegee. En 3 mois, votre data quality score depasse 85.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#22C55E] text-white rounded-lg text-[13px] font-medium hover:bg-[#1EAD50] transition-colors">
                  Lancer la gouvernance
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
