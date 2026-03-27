"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Guide Data Quality CRM : contenu complet des 10 chapitres",
  description: "Le guide data quality CRM le plus complet en francais. Audit 5 dimensions, deduplication, enrichissement Clay + Lemlist AI + Claude Code, maintenance automatisee.",
  author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/guide-data-quality-crm/contenu" },
  articleSection: "Data Quality",
  wordCount: 8500,
  inLanguage: "fr",
};

const chapters = [
  { id: "chapitre-1", num: "01", title: "Le vrai cout des donnees sales" },
  { id: "chapitre-2", num: "02", title: "Les 5 dimensions de la qualite" },
  { id: "chapitre-3", num: "03", title: "Auditer votre base" },
  { id: "chapitre-4", num: "04", title: "Deduplication" },
  { id: "chapitre-5", num: "05", title: "Standardisation" },
  { id: "chapitre-6", num: "06", title: "Enrichissement IA" },
  { id: "chapitre-7", num: "07", title: "Claude Code scripts" },
  { id: "chapitre-8", num: "08", title: "Automatiser la maintenance" },
  { id: "chapitre-9", num: "09", title: "Mesurer la qualite" },
  { id: "chapitre-10", num: "10", title: "Methode Ceres et cas clients" },
];

const relatedGuides = [
  { title: "Le Guide RevOps Ultime", slug: "/guide-revops-ultime/contenu", category: "RevOps", color: "#FF7A59" },
  { title: "Le Guide Outbound B2B", slug: "/guide-outbound-b2b/contenu", category: "Outbound", color: "#4B5EFC" },
  { title: "Le Guide IA Commercial", slug: "/guide-ia-commercial/contenu", category: "IA", color: "#6C5CE7" },
];

export default function GuideDataQualityCRMContenuPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("chapitre-1");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));

      const sectionEls = chapters.map((c) => document.getElementById(c.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(chapters[i].id);
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

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-[220px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Chapitres</p>
              <nav className="space-y-1">
                {chapters.map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${
                      activeSection === c.id
                        ? "border-[#22C55E] text-[#111] font-medium"
                        : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"
                    }`}
                  >
                    <span className="text-[#BBB] mr-1.5">{c.num}</span>{c.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-[#F2F2F2]">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Partager</p>
                <div className="flex gap-2">
                  <a href="https://twitter.com/intent/tweet?text=Guide%20Data%20Quality%20CRM%20par%20Ceres&url=https://ceres.agency/guide-data-quality-crm/contenu" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/guide-data-quality-crm/contenu" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/guide-data-quality-crm" className="text-[11px] text-[#22C55E] hover:underline font-medium">
                  Telecharger le PDF
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-[750px]">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/guides" className="hover:text-[#111] transition-colors">Guides</Link><span>/</span>
              <Link href="/guide-data-quality-crm" className="hover:text-[#111] transition-colors">Guide Data Quality CRM</Link><span>/</span>
              <span className="text-[#666]">Contenu complet</span>
            </nav>

            {/* Hero */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#22C55E]/10 text-[12px] font-medium text-[#22C55E]">Data Quality</span>
                <span className="text-[12px] text-[#999]">27 mars 2026</span>
                <span className="text-[12px] text-[#999]">Temps de lecture : 45 min</span>
              </div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">
                Guide Data Quality CRM
              </h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-2">
                55 pages pour auditer, nettoyer, enrichir et automatiser la qualite de vos donnees CRM. Le guide le plus complet en francais : 10 chapitres, 5 dimensions, 50 points d&apos;audit, scripts Claude Code, et cas clients detailles.
              </p>
              <p className="text-[13px] text-[#999]">
                Par <span className="text-[#111] font-medium">Ceres</span> -- La methode que nous appliquons pour transformer des bases CRM chaotiques en actifs strategiques.
              </p>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 1 ==================== */}
            <div id="chapitre-1" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">01</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Le vrai cout des donnees sales</h2>
                  <p className="text-[12px] text-[#999]">Pages 4-8 -- Pourquoi la data quality est un enjeu a six chiffres</p>
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Les chiffres qui font mal</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Les donnees sales ne sont pas un probleme technique mineur. C&apos;est un gouffre financier mesurable. Selon Gartner, les entreprises perdent en moyenne 15 millions de dollars par an a cause de donnees de mauvaise qualite. Pour les PME et ETI B2B, les etudes convergent : les donnees corrompues coutent entre 15% et 25% du chiffre d&apos;affaires en opportunites manquees, en temps gaspille et en decisions erronees.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                Le probleme est d&apos;autant plus insidieux qu&apos;il est progressif. 30% des donnees CRM se degradent chaque annee : les contacts changent de poste, les entreprises demenagent, les numeros de telephone deviennent obsoletes. En trois ans sans maintenance, c&apos;est potentiellement 90% de votre base qui est impactee. Et contrairement a un bug logiciel visible, les donnees sales ne declenchent pas d&apos;alerte : elles corrompent silencieusement chaque decision prise a partir du CRM.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { stat: "15-25%", label: "du CA perdu a cause de donnees sales" },
                  { stat: "30%", label: "de degradation annuelle des donnees CRM" },
                  { stat: "2h/jour", label: "gaspillees par commercial a gerer la data" },
                  { stat: "27%", label: "des emails bounced dans un CRM non maintenu" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-4 text-center">
                    <p className="text-[22px] font-bold text-[#22C55E]">{s.stat}</p>
                    <p className="text-[11px] text-[#888] leading-[1.4] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Impact sur la productivite commerciale</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Un commercial passe en moyenne 2 heures par jour a des taches liees a la qualite des donnees : chercher le bon contact, verifier un numero de telephone, corriger une adresse email, fusionner des doublons, completer des fiches vides. Sur une equipe de 10 commerciaux, cela represente 20 heures par jour, soit l&apos;equivalent de 2,5 postes a temps plein entierement consacres a la maintenance de la base. Les entreprises qui investissent dans la data quality reduisent ce temps de 60% a 80%, liberant leurs commerciaux pour ce qui compte reellement : vendre.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Impact sur le reporting et les previsions</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Des donnees sales produisent des rapports faux. Un pipeline gonfle par des doublons donne une vision optimiste trompeuse. Des deals mal categorises faussent le forecast. Des contacts sans secteur d&apos;activite rendent l&apos;analyse de la segmentation impossible. Le resultat : les equipes de direction prennent des decisions strategiques basees sur des chiffres errones. Le cout d&apos;un mauvais forecast peut se chiffrer en centaines de milliers d&apos;euros en sur-recrutement, en sur-investissement marketing, ou en sous-estimation des besoins en production.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Impact sur le marketing et l&apos;experience client</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Le marketing automatise repose entierement sur la qualite des donnees. Un email envoye a la mauvaise personne, une campagne qui cible le mauvais segment, un scoring qui ne reflete pas la realite : chaque erreur de donnee se traduit par un gaspillage de budget et une degradation de l&apos;experience client. Les clients qui recoivent des communications hors sujet se desengagent. Les prospects contactes avec les mauvaises informations perdent confiance. Le cout indirect en reputation et en churn est souvent sous-estime.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">La dette de donnees</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Comme la dette technique en developpement logiciel, la dette de donnees s&apos;accumule silencieusement. Chaque import non nettoye, chaque formulaire sans validation, chaque integration mal configuree ajoute une couche de desordre. Et comme la dette technique, elle s&apos;aggrave exponentiellement : plus la base est sale, plus il est difficile de la nettoyer, plus les equipes prennent des raccourcis, et plus la base se degrade. La difference majeure avec la dette technique : la dette de donnees impacte directement le revenu, pas seulement la vitesse de developpement.
              </p>

              {/* Dark section - Client metrics */}
              <div className="rounded-xl bg-[#111] p-5 mb-2">
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-4">Chiffres reels : avant/apres chez nos clients</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { metric: "Taux de bounce email", before: "18%", after: "2.1%", improvement: "-88%" },
                    { metric: "Doublons dans la base", before: "42%", after: "3%", improvement: "-93%" },
                    { metric: "Fiches completes", before: "23%", after: "81%", improvement: "+252%" },
                    { metric: "Temps de recherche par commercial", before: "2h/jour", after: "15 min/jour", improvement: "-87%" },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                      <div>
                        <p className="text-[12px] text-white/50">{m.metric}</p>
                        <p className="text-[13px] text-white/80 mt-0.5"><span className="text-[#FF6B6B]">{m.before}</span> <span className="text-white/30 mx-1">vers</span> <span className="text-[#22C55E]">{m.after}</span></p>
                      </div>
                      <span className="text-[14px] font-bold text-[#22C55E]">{m.improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 2 ==================== */}
            <div id="chapitre-2" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">02</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Les 5 dimensions de la qualite</h2>
                  <p className="text-[12px] text-[#999]">Pages 9-13 -- Le framework pour evaluer votre base de donnees</p>
                </div>
              </div>

              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                La qualite des donnees ne se resume pas a un ressenti. C&apos;est un concept mesurable, structure autour de cinq dimensions complementaires. Chaque dimension capture un aspect specifique de la qualite. Une base peut etre tres complete mais pleine de doublons, ou tres exacte mais vide a 60%. L&apos;objectif est d&apos;atteindre un niveau acceptable sur les cinq dimensions simultanement. Nous detaillons ici chacune d&apos;entre elles avec des seuils concrets et des methodes de mesure.
              </p>

              {/* Radar chart concept */}
              <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-6 mb-6">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4 text-center">Les 5 dimensions de la data quality</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                  {[
                    { name: "Completude", color: "#22C55E", pct: "80%+" },
                    { name: "Exactitude", color: "#4B5EFC", pct: "95%+" },
                    { name: "Coherence", color: "#FF7A59", pct: "90%+" },
                    { name: "Fraicheur", color: "#6C5CE7", pct: "85%+" },
                    { name: "Unicite", color: "#F59E0B", pct: "97%+" },
                  ].map((d, i) => (
                    <div key={i} className="w-full md:w-[130px] rounded-lg border p-4 text-center" style={{ borderColor: `${d.color}30`, background: `${d.color}08` }}>
                      <p className="text-[13px] font-semibold" style={{ color: d.color }}>{d.name}</p>
                      <p className="text-[18px] font-bold mt-1" style={{ color: d.color }}>{d.pct}</p>
                      <p className="text-[10px] text-[#888] mt-0.5">Objectif cible</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">1. Completude (Completeness)</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                La completude mesure le pourcentage de champs remplis dans votre CRM par rapport aux champs attendus. Un contact avec un nom mais sans email, sans telephone, sans entreprise et sans poste est incomplet a 80%. L&apos;objectif n&apos;est pas de remplir 100% des champs existants (beaucoup sont inutiles), mais de garantir que les champs critiques pour vos processus sont remplis a plus de 80%.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                <strong className="text-[#111]">Comment mesurer :</strong> exportez vos contacts HubSpot, comptez le nombre de valeurs non vides pour vos 8 a 12 champs critiques (email, prenom, nom, entreprise, poste, telephone, secteur, taille entreprise, pays, source, lifecycle stage, owner). Divisez par le nombre total de cellules attendues. Un score en dessous de 50% est critique.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                <strong className="text-[#111]">Ce que ca donne quand c&apos;est mauvais :</strong> des campagnes email sans personnalisation (pas de prenom), des commerciaux qui appellent sans contexte (pas de poste, pas de secteur), des segments vides (pas de lifecycle stage), des rapports inutilisables (pas de source d&apos;acquisition).
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">2. Exactitude (Accuracy)</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                L&apos;exactitude verifie que les donnees presentes sont correctes et a jour. Un champ peut etre rempli mais faux : un ancien numero de telephone, un poste que le contact n&apos;occupe plus, une entreprise qui a ete rachetee. L&apos;exactitude est la dimension la plus difficile a mesurer car elle necessite une comparaison avec la realite.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                <strong className="text-[#111]">Comment mesurer :</strong> le taux de bounce email est le proxy le plus fiable. Un taux superieur a 3% indique un probleme d&apos;exactitude serieux. Pour les numeros de telephone, mesurez le taux de numeros invalides lors des campagnes d&apos;appels. Pour les postes et entreprises, faites un echantillonnage aleatoire de 100 contacts et verifiez manuellement sur LinkedIn.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                <strong className="text-[#111]">Ce que ca donne quand c&apos;est mauvais :</strong> des emails qui bouncent et degradent votre reputation d&apos;expediteur, des appels vers des mauvais numeros, des commerciaux qui abordent un prospect avec le mauvais poste (rien de pire que de dire &quot;En tant que Directeur Commercial...&quot; a quelqu&apos;un qui est devenu CEO).
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">3. Coherence (Consistency)</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                La coherence garantit que les memes informations sont representees de la meme maniere partout dans le CRM. Le meme pays peut apparaitre sous cinq formes differentes : &quot;France&quot;, &quot;FR&quot;, &quot;france&quot;, &quot;FRANCE&quot;, &quot;FRA&quot;. Le meme secteur peut etre &quot;SaaS&quot;, &quot;Software&quot;, &quot;Logiciel&quot;, &quot;Tech&quot;. Sans coherence, la segmentation et le reporting deviennent impossibles.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                <strong className="text-[#111]">Comment mesurer :</strong> analysez les valeurs uniques de chaque champ texte libre. Si le champ &quot;Pays&quot; contient 47 valeurs differentes pour designer la France, le score de coherence est catastrophique. Comptez le nombre de variantes par champ et divisez par le nombre de valeurs canoniques attendues. Un ratio superieur a 3 indique un probleme serieux.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                <strong className="text-[#111]">Ce que ca donne quand c&apos;est mauvais :</strong> des segments qui n&apos;incluent qu&apos;une fraction des contacts concernes (parce que &quot;France&quot; n&apos;inclut pas &quot;FR&quot;), des rapports avec 200 lignes au lieu de 20, des workflows qui ne se declenchent pas pour les bonnes personnes.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">4. Fraicheur (Timeliness)</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                La fraicheur mesure si les donnees sont a jour. Un contact qui n&apos;a pas ete mis a jour depuis 18 mois a probablement change de poste, d&apos;entreprise, voire de numero de telephone. La fraicheur est directement liee a la degradation naturelle des bases B2B : en moyenne, 25% des contacts changent de poste chaque annee.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                <strong className="text-[#111]">Comment mesurer :</strong> dans HubSpot, analysez la propriete &quot;Last Modified Date&quot;. Comptez le pourcentage de contacts modifies dans les 6 derniers mois (bon), entre 6 et 12 mois (acceptable), et au-dela de 12 mois (problematique). Un CRM sain devrait avoir moins de 20% de contacts non modifies depuis plus d&apos;un an.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                <strong className="text-[#111]">Ce que ca donne quand c&apos;est mauvais :</strong> des sequences de prospection vers des personnes qui ont quitte l&apos;entreprise il y a deux ans, des forecasts bases sur des deals morts depuis des mois, des segments &quot;clients actifs&quot; qui incluent des entreprises churned.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">5. Unicite (Uniqueness)</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                L&apos;unicite garantit que chaque entite du monde reel n&apos;est representee qu&apos;une seule fois dans votre CRM. Les doublons sont le probleme de data quality le plus visible et le plus couteux. Un contact en double recoit deux emails, est contacte par deux commerciaux differents, et ses activites sont dispersees entre deux fiches. Le pipeline est artificiellement gonfle.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-3">
                <strong className="text-[#111]">Comment mesurer :</strong> HubSpot propose un outil natif de detection des doublons. Exportez vos contacts et cherchez les emails identiques, les noms similaires (avec fuzzy matching), et les combinaisons nom+entreprise en double. Un taux de doublons superieur a 5% necessite une intervention urgente.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                <strong className="text-[#111]">Ce que ca donne quand c&apos;est mauvais :</strong> des prospects contactes deux ou trois fois par des commerciaux differents (image desastreuse), un pipeline qui affiche 2x le montant reel, des rapports d&apos;attribution faux car les conversions sont comptees en double, des listes marketing gonflees qui faussent les taux de conversion.
              </p>

              {/* Benchmark table */}
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-[#E8E8E8]">
                      <th className="text-left py-3 pr-4 text-[#999] font-semibold">Dimension</th>
                      <th className="text-left py-3 pr-4 text-[#FF6B6B] font-semibold">Critique</th>
                      <th className="text-left py-3 pr-4 text-[#F59E0B] font-semibold">Fragile</th>
                      <th className="text-left py-3 pr-4 text-[#4B5EFC] font-semibold">Correct</th>
                      <th className="text-left py-3 text-[#22C55E] font-semibold">Excellent</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555]">
                    {[
                      { dim: "Completude", c: "Moins de 30%", f: "30-60%", co: "60-80%", e: "Plus de 80%" },
                      { dim: "Exactitude", c: "Bounce 10%+", f: "Bounce 5-10%", co: "Bounce 2-5%", e: "Bounce moins de 2%" },
                      { dim: "Coherence", c: "50+ variantes", f: "20-50 variantes", co: "5-20 variantes", e: "Moins de 5 variantes" },
                      { dim: "Fraicheur", c: "60%+ stale", f: "40-60% stale", co: "20-40% stale", e: "Moins de 20% stale" },
                      { dim: "Unicite", c: "20%+ doublons", f: "10-20% doublons", co: "3-10% doublons", e: "Moins de 3% doublons" },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-[#F5F5F5]">
                        <td className="py-2.5 pr-4 font-medium text-[#111]">{r.dim}</td>
                        <td className="py-2.5 pr-4">{r.c}</td>
                        <td className="py-2.5 pr-4">{r.f}</td>
                        <td className="py-2.5 pr-4">{r.co}</td>
                        <td className="py-2.5">{r.e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 3 ==================== */}
            <div id="chapitre-3" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">03</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Auditer votre base</h2>
                  <p className="text-[12px] text-[#999]">Pages 14-18 -- La checklist 50 points et la methodologie de scoring</p>
                </div>
              </div>

              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                Avant de nettoyer quoi que ce soit, il faut mesurer. Un audit data quality rigoureux permet de quantifier le probleme, de prioriser les actions et de mesurer les progres. Nous avons developpe une checklist de 50 points repartis en 8 categories, avec un systeme de scoring de 0 a 100. Chaque point est evalue de maniere binaire (conforme ou non-conforme) et pondere selon son impact sur le business.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Comment lancer l&apos;audit</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                L&apos;audit se deroule en trois phases. Phase 1 : exportation des donnees depuis HubSpot (contacts, entreprises, deals) en CSV. Phase 2 : analyse quantitative avec des formules ou des scripts (comptage des valeurs vides, detection des doublons, mesure des variantes). Phase 3 : verification qualitative par echantillonnage aleatoire de 100 fiches pour evaluer l&apos;exactitude. L&apos;ensemble prend entre 4 heures (petite base de moins de 5 000 contacts) et 2 jours (base de plus de 50 000 contacts).
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">La checklist 50 points</h3>

              {/* Audit categories table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-[#E8E8E8]">
                      <th className="text-left py-3 pr-4 text-[#999] font-semibold">Categorie</th>
                      <th className="text-left py-3 pr-4 text-[#999] font-semibold">Nb points</th>
                      <th className="text-left py-3 text-[#999] font-semibold">Exemples de criteres</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555]">
                    {[
                      { cat: "Completude contacts", pts: "8", ex: "Email, prenom, nom, entreprise, poste, telephone, lifecycle stage, owner" },
                      { cat: "Completude entreprises", pts: "6", ex: "Nom, domaine, secteur, taille, CA, pays" },
                      { cat: "Completude deals", pts: "5", ex: "Montant, close date, stage, contact associe, owner" },
                      { cat: "Exactitude", pts: "7", ex: "Taux bounce, emails invalides, telephones hors service, postes obsoletes" },
                      { cat: "Coherence formats", pts: "8", ex: "Telephones E.164, noms Title Case, pays ISO, secteurs normalises, dates ISO" },
                      { cat: "Unicite", pts: "5", ex: "Doublons contacts, doublons entreprises, doublons cross-objet" },
                      { cat: "Fraicheur", pts: "5", ex: "Contacts stale 12m+, deals stale 6m+, enrichissement recent" },
                      { cat: "Gouvernance", pts: "6", ex: "Proprietes obligatoires, validation formulaires, process import, documentation" },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-[#F5F5F5]">
                        <td className="py-2.5 pr-4 font-medium text-[#111]">{r.cat}</td>
                        <td className="py-2.5 pr-4 text-center font-semibold text-[#22C55E]">{r.pts}</td>
                        <td className="py-2.5 text-[11px]">{r.ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Les 4 niveaux de maturite</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Le score obtenu sur 100 points determine votre niveau de maturite data quality. Chaque niveau correspond a un profil type et a des actions prioritaires differentes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  { level: "Critique", range: "0-25", color: "#FF6B6B", desc: "La base est inutilisable en l\u2019etat. Les equipes ne font pas confiance au CRM et utilisent des fichiers Excel en parallele. Priorite : stabiliser en nettoyant les champs critiques et en supprimant les doublons flagrants." },
                  { level: "Fragile", range: "25-50", color: "#F59E0B", desc: "La base est partiellement utilisable mais genere des erreurs frequentes. Les rapports sont approximatifs. Priorite : standardiser les formats, enrichir les champs manquants, mettre en place des regles de validation." },
                  { level: "Correct", range: "50-75", color: "#4B5EFC", desc: "La base est fonctionnelle pour la plupart des usages. Les problemes sont isoles. Priorite : automatiser la maintenance, mettre en place un monitoring continu, affiner le scoring et la segmentation." },
                  { level: "Excellent", range: "75-100", color: "#22C55E", desc: "La base est un actif strategique. Les equipes ont confiance dans les donnees. L\u2019enrichissement est automatise. Priorite : maintenir le niveau, optimiser les processus, exploiter les donnees pour des cas d\u2019usage avances (IA, predictif)." },
                ].map((l, i) => (
                  <div key={i} className="rounded-xl border p-5" style={{ borderColor: `${l.color}30` }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full" style={{ background: l.color }} />
                      <span className="text-[13px] font-semibold text-[#111]">{l.level}</span>
                      <span className="text-[11px] text-[#999] ml-auto">{l.range}/100</span>
                    </div>
                    <p className="text-[12px] text-[#666] leading-[1.6]">{l.desc}</p>
                  </div>
                ))}
              </div>

              {/* Case study */}
              <div className="rounded-xl bg-[#111] p-5">
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">Cas reel : Elax Energie</p>
                <p className="text-[13px] text-white/70 leading-[1.7] mb-3">
                  Lors de notre premier audit, Elax Energie a obtenu un score de 17/100. La base contenait 12 400 contacts dont 42% de doublons, 67% sans numero de telephone, 78% sans secteur d&apos;activite, et un taux de bounce email de 18%. Les deals n&apos;avaient pas de montant dans 55% des cas. L&apos;equipe commerciale avait abandonne HubSpot pour des fichiers Excel personnels.
                </p>
                <p className="text-[13px] text-white/70 leading-[1.7]">
                  En 8 semaines d&apos;intervention Ceres, le score est passe a 76/100. Nous detaillons le plan d&apos;action complet au chapitre 10.
                </p>
              </div>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 4 ==================== */}
            <div id="chapitre-4" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">04</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Deduplication</h2>
                  <p className="text-[12px] text-[#999]">Pages 19-23 -- Eliminer les doublons sans perdre de donnees</p>
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Pourquoi les doublons apparaissent</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Les doublons sont inevitables dans tout CRM qui vit. Ils proviennent de quatre sources principales. Premierement, la saisie manuelle : un commercial cree une fiche sans verifier si le contact existe deja. Deuxiemement, les imports CSV : chaque import de liste (salon, webinar, achat de base) ajoute des contacts qui existent peut-etre deja. Troisiemement, les formulaires web : un visiteur remplit un formulaire avec une adresse email differente de celle deja en base. Quatriemement, les integrations : la synchronisation entre outils (Salesforce, Intercom, Calendly) cree des doublons si le mapping n&apos;est pas parfait.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Les trois types de doublons</h3>
              <div className="space-y-3 mb-6">
                {[
                  { type: "Doublons exacts", desc: "Meme adresse email sur deux fiches differentes. Les plus faciles a detecter et a fusionner. HubSpot les repere nativement.", example: "jean.dupont@acme.fr apparait sur 2 fiches contacts" },
                  { type: "Doublons flous (fuzzy)", desc: "Meme personne avec des variantes mineures. Necessitent du fuzzy matching pour etre detectes.", example: "Jean Dupont / J. Dupont / Jean DUPONT chez la meme entreprise" },
                  { type: "Doublons cross-objet", desc: "Un contact et une entreprise qui referent a la meme entite sans etre lies, ou deux entreprises pour la meme societe.", example: "\"Acme SAS\" et \"ACME\" et \"Acme (Paris)\" comme trois fiches entreprise" },
                ].map((t, i) => (
                  <div key={i} className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">{t.type}</p>
                    <p className="text-[12px] text-[#666] leading-[1.6] mb-2">{t.desc}</p>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] px-3 py-2">
                      <p className="text-[11px] text-[#999]">Exemple : <span className="text-[#111] font-medium">{t.example}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">L&apos;outil HubSpot natif de deduplication</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                HubSpot propose un outil de gestion des doublons integre (Settings, puis Data Management, puis Duplicates). Il detecte les doublons potentiels en comparant les emails, les noms et les domaines d&apos;entreprise. Ses avantages : gratuit, integre, facile a utiliser. Ses limites : il ne detecte que les doublons les plus evidents, ne gere pas le fuzzy matching avance, et ne permet pas de definir des regles de fusion personnalisees. Pour une base de plus de 10 000 contacts, il est insuffisant.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Outils tiers specialises</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl border border-[#E8E8E8] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="https://www.google.com/s2/favicons?domain=insycle.com&sz=32" alt="Insycle" className="w-5 h-5" />
                    <p className="text-[13px] font-semibold text-[#111]">Insycle</p>
                  </div>
                  <p className="text-[12px] text-[#666] leading-[1.6]">L&apos;outil de reference pour la deduplication HubSpot. Fuzzy matching avance, regles de fusion personnalisables, bulk merge, preview avant fusion. Integration native HubSpot. A partir de 200$/mois pour la deduplication avancee. Ideal pour les bases de 10 000 a 500 000 contacts.</p>
                </div>
                <div className="rounded-xl border border-[#E8E8E8] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="https://www.google.com/s2/favicons?domain=dedupely.com&sz=32" alt="Dedupely" className="w-5 h-5" />
                    <p className="text-[13px] font-semibold text-[#111]">Dedupely</p>
                  </div>
                  <p className="text-[12px] text-[#666] leading-[1.6]">Alternative plus abordable a Insycle. Detection par email, nom, telephone et champs custom. Interface simple. A partir de 49$/mois. Moins de fonctionnalites avancees mais suffisant pour les bases de moins de 20 000 contacts.</p>
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Regles de fusion : quel enregistrement gagne</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                La fusion de doublons n&apos;est pas triviale. Il faut definir des regles claires : quel enregistrement est le &quot;maitre&quot; (celui qui survit) et quel est l&apos;esclave (celui qui est absorbe). Nos regles par defaut : conserver l&apos;enregistrement le plus ancien (il a plus d&apos;historique d&apos;activites), prendre la valeur la plus recente pour chaque champ, cumuler les activites (emails, appels, notes) des deux fiches, et conserver toutes les associations (deals, tickets, entreprises). Toujours previsualiser la fusion avant de l&apos;executer. Toujours faire une sauvegarde CSV avant une deduplication massive.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Prevention : empecher les doublons a la source</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                La deduplication reactive est necessaire mais insuffisante. Il faut aussi agir en prevention. Activez la deduplication automatique sur l&apos;email dans HubSpot (Settings, puis Contacts, puis Creating contacts). Rendez le champ email obligatoire dans tous les formulaires. Avant chaque import CSV, comparez les emails avec ceux existants en base et supprimez les doublons du fichier. Configurez les integrations pour utiliser l&apos;email comme cle de rapprochement. Formez les commerciaux a chercher un contact avant de le creer.
              </p>

              {/* Claude prompt */}
              <div className="rounded-xl bg-[#111] p-5">
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">Prompt Claude : detecter les doublons dans un export CSV</p>
                <div className="rounded-lg bg-white/5 px-4 py-3">
                  <p className="text-[12px] text-white/70 leading-[1.7] font-mono">
                    Analyse ce fichier CSV de contacts CRM. Identifie tous les doublons potentiels en comparant :<br />
                    1. Les adresses email exactes<br />
                    2. Les combinaisons prenom+nom similaires (fuzzy match, tolerance 2 caracteres)<br />
                    3. Les combinaisons nom+entreprise identiques avec des emails differents<br />
                    Pour chaque groupe de doublons, recommande quel enregistrement conserver (le plus complet) et quelles valeurs fusionner. Presente les resultats dans un tableau avec les colonnes : Groupe, ID1, ID2, Type de doublon, Confiance (%), Action recommandee.
                  </p>
                </div>
              </div>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 5 ==================== */}
            <div id="chapitre-5" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">05</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Standardisation</h2>
                  <p className="text-[12px] text-[#999]">Pages 24-28 -- Uniformiser chaque champ pour une base exploitable</p>
                </div>
              </div>

              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                La standardisation est le processus qui consiste a appliquer des formats uniformes a chaque type de donnee dans votre CRM. C&apos;est le fondement de la coherence. Sans standardisation, meme des donnees completes et exactes deviennent inexploitables pour la segmentation, le reporting et l&apos;automatisation. Voici les regles a appliquer pour chaque type de champ, avec des exemples avant/apres.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Numeros de telephone : format E.164</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Le format E.164 est la norme internationale pour les numeros de telephone : indicatif pays + numero sans espaces ni caracteres speciaux. Exemples : +33612345678 (France), +44207123456 (UK), +14155551234 (US). Ce format est necessaire pour les integrations avec les outils de calling (Aircall, Ringover) et les campagnes SMS. HubSpot peut reformater automatiquement les numeros si la propriete est configuree en type &quot;Phone number&quot;.
              </p>
              <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-4 mb-6">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Avant / Apres</p>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  {[
                    { before: "06 12 34 56 78", after: "+33612345678" },
                    { before: "0033 6 12 34 56 78", after: "+33612345678" },
                    { before: "+33 (0)6 12 34 56 78", after: "+33612345678" },
                    { before: "06.12.34.56.78", after: "+33612345678" },
                  ].map((e, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#FF6B6B] line-through">{e.before}</span>
                      <span className="text-[#999]">vers</span>
                      <span className="text-[#22C55E] font-medium">{e.after}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Noms : Title Case</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Les noms de personnes doivent suivre le format Title Case : premiere lettre en majuscule, le reste en minuscule. JEAN DUPONT devient Jean Dupont. jean dupont devient Jean Dupont. Les noms composes conservent la majuscule apres le tiret : Jean-Pierre Dupont. Les particules restent en minuscule : Charles de Gaulle, Arnaud van der Berg. Ce format garantit une personalisation correcte dans les emails et les sequences.
              </p>
              <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-4 mb-6">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Avant / Apres</p>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  {[
                    { before: "JEAN DUPONT", after: "Jean Dupont" },
                    { before: "jean dupont", after: "Jean Dupont" },
                    { before: "MARIE-CLAIRE LEFEVRE", after: "Marie-Claire Lefevre" },
                    { before: "pierre DE LA FONTAINE", after: "Pierre de la Fontaine" },
                  ].map((e, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#FF6B6B] line-through">{e.before}</span>
                      <span className="text-[#999]">vers</span>
                      <span className="text-[#22C55E] font-medium">{e.after}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Pays : codes ISO 3166</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Les pays doivent utiliser les codes ISO 3166-1 alpha-2 (FR, DE, US, GB) ou a defaut les noms standardises en anglais (France, Germany, United States, United Kingdom). Jamais de texte libre. Dans HubSpot, utilisez une propriete dropdown avec la liste officielle des pays. Cela garantit la fiabilite des segments geographiques et des rapports par region.
              </p>
              <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-4 mb-6">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Avant / Apres</p>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  {[
                    { before: "france", after: "FR" },
                    { before: "FRANCE", after: "FR" },
                    { before: "La France", after: "FR" },
                    { before: "Allemagne", after: "DE" },
                  ].map((e, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#FF6B6B] line-through">{e.before}</span>
                      <span className="text-[#999]">vers</span>
                      <span className="text-[#22C55E] font-medium">{e.after}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Secteurs d&apos;activite : vocabulaire controle</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Le champ secteur d&apos;activite (industry) est l&apos;un des plus chaotiques si laisse en texte libre. &quot;SaaS&quot;, &quot;Software&quot;, &quot;Logiciel&quot;, &quot;Technologie&quot;, &quot;IT&quot;, &quot;Informatique&quot; peuvent designer la meme chose. La solution : definir un vocabulaire controle de 15 a 25 secteurs maximum et utiliser une propriete dropdown dans HubSpot. Pour les entreprises qui ne rentrent pas dans une categorie, ajoutez &quot;Autre&quot; avec un champ texte libre complementaire.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Dates, montants et URLs</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Les dates doivent suivre le format ISO 8601 (YYYY-MM-DD). HubSpot gere cela nativement pour les proprietes de type &quot;Date&quot;, mais attention aux imports CSV ou le format peut varier (DD/MM/YYYY vs MM/DD/YYYY). Les montants doivent etre dans une seule devise (EUR pour les entreprises francaises) sans symbole ni espace. Les URLs doivent inclure le protocole (https://) et ne pas avoir de slash final pour eviter les doublons de domaine.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Proprietes HubSpot : dropdown vs texte libre</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Regle d&apos;or : si un champ peut avoir moins de 50 valeurs possibles, utilisez un dropdown. Si le champ est critique pour la segmentation ou le reporting, utilisez un dropdown. Le texte libre ne devrait etre utilise que pour les champs veritablement ouverts (notes, descriptions, commentaires). Chaque champ texte libre est une source potentielle d&apos;incoherence. Migrez progressivement vos champs texte les plus utilises vers des dropdowns en analysant les valeurs existantes et en definissant les categories.
              </p>

              {/* Claude Code script */}
              <div className="rounded-xl bg-[#111] p-5">
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">Script Claude Code : standardisation batch d&apos;un CSV</p>
                <div className="rounded-lg bg-white/5 px-4 py-3">
                  <p className="text-[12px] text-white/70 leading-[1.7] font-mono">
                    import pandas as pd<br />
                    import re<br />
                    <br />
                    df = pd.read_csv(&quot;contacts_export.csv&quot;)<br />
                    <br />
                    # Telephones E.164<br />
                    def to_e164(phone, country=&quot;FR&quot;):<br />
                    &nbsp;&nbsp;if pd.isna(phone): return None<br />
                    &nbsp;&nbsp;digits = re.sub(r&quot;\D&quot;, &quot;&quot;, str(phone))<br />
                    &nbsp;&nbsp;if digits.startswith(&quot;0&quot;) and country == &quot;FR&quot;:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;digits = &quot;33&quot; + digits[1:]<br />
                    &nbsp;&nbsp;return &quot;+&quot; + digits<br />
                    <br />
                    # Noms Title Case<br />
                    def title_name(name):<br />
                    &nbsp;&nbsp;if pd.isna(name): return None<br />
                    &nbsp;&nbsp;particles = [&quot;de&quot;, &quot;du&quot;, &quot;la&quot;, &quot;le&quot;, &quot;van&quot;, &quot;von&quot;, &quot;der&quot;]<br />
                    &nbsp;&nbsp;words = name.strip().lower().split()<br />
                    &nbsp;&nbsp;return &quot; &quot;.join(<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;w if w in particles else w.capitalize()<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;for w in words<br />
                    &nbsp;&nbsp;)<br />
                    <br />
                    df[&quot;phone&quot;] = df[&quot;phone&quot;].apply(to_e164)<br />
                    df[&quot;firstname&quot;] = df[&quot;firstname&quot;].apply(title_name)<br />
                    df[&quot;lastname&quot;] = df[&quot;lastname&quot;].apply(title_name)<br />
                    df.to_csv(&quot;contacts_standardized.csv&quot;, index=False)
                  </p>
                </div>
              </div>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 6 ==================== */}
            <div id="chapitre-6" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">06</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Enrichissement IA</h2>
                  <p className="text-[12px] text-[#999]">Pages 29-36 -- Le chapitre premium : tous les outils pour enrichir vos donnees</p>
                </div>
              </div>

              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                L&apos;enrichissement est l&apos;etape qui transforme une base propre mais maigre en un actif strategique riche et exploitable. L&apos;objectif : ajouter des informations manquantes (email, telephone, poste, secteur, taille d&apos;entreprise, technologie utilisee) sans saisie manuelle, en utilisant des outils specialises et l&apos;intelligence artificielle. Ce chapitre couvre en profondeur les quatre outils majeurs du marche et les techniques d&apos;enrichissement par Claude et Claude Code.
              </p>

              {/* 6.1 Lemlist */}
              <div className="border-l-2 border-[#22C55E] pl-5 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <img src="https://www.google.com/s2/favicons?domain=lemlist.com&sz=32" alt="Lemlist" className="w-5 h-5" />
                  <h3 className="text-[17px] font-semibold text-[#111]">6.1 Lemlist AI Enrichment</h3>
                </div>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Lemlist a lance en 2025 une fonctionnalite d&apos;enrichissement par colonnes IA directement integree a sa plateforme de prospection. Le principe est simple : vous ajoutez une colonne IA a votre liste de leads, vous ecrivez un prompt, et Lemlist genere le contenu pour chaque contact en utilisant le modele IA de votre choix (Claude, GPT-4, Mistral).
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Comment ca marche :</strong> dans Lemlist, ouvrez une campagne et accedez a la liste de leads. Cliquez sur &quot;Add column&quot; puis &quot;AI column&quot;. Redigez votre prompt en utilisant les variables disponibles (nom, entreprise, poste, site web). Choisissez votre fournisseur IA. Lancez la generation. Lemlist enrichit chaque ligne en quelques secondes.
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Cas d&apos;usage principaux :</strong> generation d&apos;icebreakers personnalises (premiere phrase d&apos;email basee sur l&apos;actualite de l&apos;entreprise), analyse du site web pour identifier les pain points, extraction de la proposition de valeur de l&apos;entreprise cible, personalisation des objets d&apos;email, identification de la stack technologique depuis le site web.
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Quand Lemlist remplace Clay :</strong> pour des enrichissements simples qui ne necessitent qu&apos;un seul fournisseur IA et qui sont directement lies a une campagne de prospection. Si votre objectif est de generer des icebreakers pour une campagne email, Lemlist est plus simple et plus rapide que Clay car tout est integre dans le meme outil. Pas besoin de synchroniser les donnees entre deux plateformes.
                </p>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-4">
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2">Setup en 4 etapes</p>
                  <div className="space-y-2">
                    {[
                      "Importez votre liste de leads dans Lemlist (CSV ou integration CRM)",
                      "Ajoutez une colonne IA : cliquez \"Add column\" puis selectionnez \"AI column\"",
                      "Redigez votre prompt avec les variables : {{firstName}}, {{companyName}}, {{jobTitle}}, {{website}}",
                      "Choisissez Claude comme fournisseur IA, lancez la generation et exportez les resultats enrichis",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-[12px] font-bold text-[#22C55E] mt-0.5 shrink-0">{i + 1}.</span>
                        <p className="text-[12px] text-[#666] leading-[1.6]">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 6.2 Clay */}
              <div className="border-l-2 border-[#4B5EFC] pl-5 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <img src="https://www.google.com/s2/favicons?domain=clay.com&sz=32" alt="Clay" className="w-5 h-5" />
                  <h3 className="text-[17px] font-semibold text-[#111]">6.2 Clay Waterfall Enrichment</h3>
                </div>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Clay est la plateforme de reference pour l&apos;enrichissement de donnees B2B a grande echelle. Sa force principale : le waterfall enrichment. Au lieu de dependre d&apos;un seul fournisseur de donnees, Clay interroge sequentiellement plusieurs sources jusqu&apos;a trouver l&apos;information. Si le fournisseur A ne trouve pas l&apos;email, Clay essaie le fournisseur B, puis C, etc. Ce mecanisme augmente significativement le taux de couverture.
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Les 75+ fournisseurs de donnees :</strong> Clay integre plus de 75 sources de donnees, dont Apollo, ZoomInfo, Clearbit, Hunter, Dropcontact, People Data Labs, et bien d&apos;autres. Pour un email professionnel, Clay peut tester jusqu&apos;a 8 fournisseurs differents. Le taux de couverture passe de 40-60% (un seul fournisseur) a 85-95% (waterfall).
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Colonnes IA :</strong> comme Lemlist, Clay propose des colonnes IA pour generer des donnees custom avec Claude ou GPT. La difference : Clay permet des workflows multi-etapes complexes. Exemple : etape 1 scraper le site web, etape 2 extraire la proposition de valeur avec Claude, etape 3 identifier les pain points, etape 4 generer un email personnalise. Cette capacite de chaining rend Clay plus puissant que Lemlist pour des enrichissements complexes.
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Quand Clay est meilleur que Lemlist :</strong> pour des enrichissements complexes multi-etapes, des datasets de plus de 1 000 contacts, des cas ou vous avez besoin de croiser plusieurs sources de donnees, et des workflows d&apos;enrichissement recurrents (Clay se connecte a HubSpot pour enrichir automatiquement les nouveaux contacts).
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Pricing :</strong> Clay fonctionne par credits. Chaque enrichissement consomme un certain nombre de credits selon le fournisseur utilise. Le plan Starter a 149$/mois inclut 2 000 credits. Le plan Professional a 349$/mois inclut 10 000 credits. Pour les volumes importants, le plan Enterprise est sur devis. Un credit correspond generalement a une recherche d&apos;email ou un appel API.
                </p>
              </div>

              {/* 6.3 Dropcontact */}
              <div className="border-l-2 border-[#FF7A59] pl-5 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <img src="https://www.google.com/s2/favicons?domain=dropcontact.com&sz=32" alt="Dropcontact" className="w-5 h-5" />
                  <h3 className="text-[17px] font-semibold text-[#111]">6.3 Dropcontact</h3>
                </div>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Dropcontact est l&apos;outil d&apos;enrichissement francais de reference, avec une particularite majeure : il est 100% RGPD-compliant. Contrairement a la plupart des outils americains qui s&apos;appuient sur des bases de donnees achetees, Dropcontact utilise des algorithmes proprietaires pour generer les adresses email a partir du prenom, du nom et du nom de domaine de l&apos;entreprise. Aucune base de donnees tierce, donc aucun probleme de consentement.
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Specialite France :</strong> Dropcontact excelle sur le marche francais. Il connait les conventions de nommage des emails des entreprises francaises (prenom.nom@, p.nom@, prenom-nom@, etc.) et teste chaque email genere pour verifier sa validite. Le taux de deliverabilite est superieur a 98% sur les emails generes.
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Integration HubSpot native :</strong> Dropcontact propose une integration native HubSpot qui enrichit automatiquement les nouveaux contacts. Des qu&apos;un contact est cree dans HubSpot, Dropcontact complete l&apos;email, le numero de telephone, le poste, le profil LinkedIn, la civilite, et les informations entreprise (SIREN, code NAF, effectif, CA). L&apos;enrichissement se fait en temps reel.
                </p>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  <strong className="text-[#111]">Pricing :</strong> a partir de 24 euros/mois pour 1 000 recherches. Le plan Business a 48 euros/mois inclut 5 000 recherches et l&apos;integration HubSpot. Le plan Enterprise est sur devis pour les volumes importants.
                </p>
              </div>

              {/* 6.4 Claude for enrichment */}
              <div className="border-l-2 border-[#6C5CE7] pl-5 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <img src="https://www.google.com/s2/favicons?domain=claude.ai&sz=32" alt="Claude" className="w-5 h-5" />
                  <h3 className="text-[17px] font-semibold text-[#111]">6.4 Claude pour l&apos;enrichissement</h3>
                </div>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Claude d&apos;Anthropic est un outil d&apos;enrichissement extremement polyvalent. Contrairement aux outils specialises qui font une seule chose (trouver un email, trouver un telephone), Claude peut analyser, categoriser, corriger, reformater et generer des donnees a partir de n&apos;importe quel input textuel. Voici 10 prompts concrets pour l&apos;enrichissement et la qualite des donnees.
                </p>

                <div className="space-y-4 mb-4">
                  {[
                    { num: "1", title: "Valider et corriger les noms d\u2019entreprise", prompt: "Voici une liste de noms d\u2019entreprises extraits d\u2019un CRM. Pour chaque nom, corrige les fautes de frappe, normalise la forme juridique (SAS, SARL, SA) et identifie le nom officiel. Format de sortie : nom original | nom corrige | confiance (%)." },
                    { num: "2", title: "Inferer le secteur d\u2019activite", prompt: "Pour chaque entreprise ci-dessous, determine le secteur d\u2019activite le plus probable en te basant sur le nom, le domaine web et la description fournie. Utilise cette liste de 20 secteurs : [SaaS, E-commerce, Finance, Sante, Industrie, Energie, Immobilier, Education, Media, Transport, Agroalimentaire, Telecom, Conseil, RH, Juridique, Construction, Retail, Luxe, Assurance, Autre]." },
                    { num: "3", title: "Normaliser les postes (job titles)", prompt: "Standardise ces intitules de poste en les classant dans les categories suivantes : C-Level, VP, Directeur, Manager, Responsable, Contributeur individuel, Stagiaire/Alternant. Pour chaque poste, fournis : poste original | poste standardise | departement (Sales, Marketing, Tech, Finance, RH, Operations, Direction) | seniorite." },
                    { num: "4", title: "Detecter les doublons potentiels", prompt: "Analyse cette liste de contacts et identifie les groupes de doublons potentiels. Compare les prenoms (tolerance pour les diminutifs : Jean/J., Alexandre/Alex), les noms de famille (tolerance orthographique de 2 caracteres), et les entreprises. Pour chaque groupe, indique le score de confiance et recommande la fusion." },
                    { num: "5", title: "Generer les descriptions d\u2019entreprise manquantes", prompt: "Pour chaque entreprise ci-dessous (nom + domaine web), genere une description professionnelle de 2-3 phrases en francais. La description doit inclure : le secteur d\u2019activite, les produits/services principaux, le marche cible, et un element differenciateur. Ton factuel et concis." },
                    { num: "6", title: "Valider les formats d\u2019email et domaines", prompt: "Verifie chaque adresse email de cette liste. Pour chacune, identifie : format valide (oui/non), domaine existant (oui/non si le domaine semble obsolete ou mal orthographie), email generique (info@, contact@, hello@) vs email professionnel. Signale les emails suspects." },
                    { num: "7", title: "Enrichir depuis un resume LinkedIn", prompt: "A partir de ce resume de profil LinkedIn, extrais les informations suivantes en format structure : poste actuel, entreprise actuelle, secteur, nombre d\u2019annees d\u2019experience, competences cles (max 5), formation, localisation. Si une information n\u2019est pas disponible, indique \"N/A\"." },
                    { num: "8", title: "Identifier le decision-maker", prompt: "Pour chaque entreprise ci-dessous (nom + taille + secteur), identifie le profil type du decision-maker pour l\u2019achat d\u2019un outil [CRM/Marketing/RH/etc.]. Fournis : poste probable, departement, arguments cles pour ce persona, objections probables. Adapte ta reponse a la taille de l\u2019entreprise." },
                    { num: "9", title: "Scorer la completude par enregistrement", prompt: "Pour chaque contact de cette liste, calcule un score de completude sur 100 en fonction des champs remplis. Ponderation : email (20 pts), prenom+nom (15 pts), entreprise (15 pts), poste (15 pts), telephone (10 pts), secteur (10 pts), pays (5 pts), source (5 pts), lifecycle (5 pts). Classe les resultats du moins complet au plus complet." },
                    { num: "10", title: "Generer un rapport de qualite", prompt: "Analyse ce fichier CSV de contacts CRM et genere un rapport de qualite couvrant : nombre total de contacts, taux de completude par champ, nombre de doublons detectes, top 10 des anomalies (valeurs aberrantes, formats incorrects), score global sur 100, et 5 recommandations prioritaires classees par impact." },
                  ].map((p, i) => (
                    <div key={i} className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-4">
                      <p className="text-[13px] font-semibold text-[#111] mb-2">Prompt {p.num} : {p.title}</p>
                      <div className="rounded-lg bg-white border border-[#E8E8E8] px-3 py-2">
                        <p className="text-[11px] text-[#666] leading-[1.6] font-mono">{p.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6.5 Claude Code */}
              <div className="border-l-2 border-[#111] pl-5 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <img src="https://www.google.com/s2/favicons?domain=claude.ai&sz=32" alt="Claude Code" className="w-5 h-5" />
                  <h3 className="text-[17px] font-semibold text-[#111]">6.5 Claude Code pour l&apos;enrichissement batch</h3>
                </div>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Claude Code est l&apos;outil ideal pour creer des scripts d&apos;enrichissement personnalises. Contrairement aux interfaces graphiques (Clay, Lemlist), Claude Code permet de traiter des fichiers CSV de n&apos;importe quelle taille, d&apos;appliquer des logiques de transformation complexes, et d&apos;automatiser des pipelines complets de nettoyage et d&apos;enrichissement. Voici trois cas d&apos;usage concrets.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl bg-[#111] p-5">
                    <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">Script 1 : nettoyage et standardisation CSV</p>
                    <p className="text-[12px] text-white/50 mb-3">Demandez a Claude Code de creer un script Python qui lit votre export CSV, standardise les telephones en E.164, applique le Title Case aux noms, normalise les pays en ISO 3166, supprime les lignes vides et exporte le resultat nettoye.</p>
                  </div>
                  <div className="rounded-xl bg-[#111] p-5">
                    <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">Script 2 : enrichissement batch via API Claude</p>
                    <p className="text-[12px] text-white/50 mb-3">Claude Code peut creer un script qui lit un CSV, envoie chaque ligne a l&apos;API Claude pour enrichissement (secteur, description, scoring), gere les rate limits, et ecrit les resultats dans un nouveau CSV. Ideal pour enrichir 500 a 10 000 contacts a cout maitrise.</p>
                  </div>
                  <div className="rounded-xl bg-[#111] p-5">
                    <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">Script 3 : deduplication et fusion intelligente</p>
                    <p className="text-[12px] text-white/50 mb-3">Un script de deduplication avance qui utilise le fuzzy matching (librairie thefuzz en Python) pour identifier les doublons, puis applique des regles de fusion automatiques : conserver l&apos;enregistrement le plus complet, prendre les valeurs les plus recentes, et generer un rapport de fusion.</p>
                  </div>
                </div>

                <p className="text-[14px] text-[#555] leading-[1.8] mt-4">
                  <strong className="text-[#111]">Quand utiliser Claude Code vs les outils GUI :</strong> utilisez Claude Code quand vous avez besoin d&apos;une logique de transformation sur mesure, quand les volumes depassent les limites des outils GUI, quand vous voulez un controle total sur le processus, ou quand vous devez integrer l&apos;enrichissement dans un pipeline existant. Utilisez Clay ou Lemlist quand la rapidite de mise en oeuvre prime, quand vous avez besoin d&apos;acces a des fournisseurs de donnees tiers, ou quand l&apos;equipe n&apos;a pas de competence technique.
                </p>
              </div>

              {/* 6.6 Comparison table */}
              <h3 className="text-[17px] font-semibold text-[#111] mb-3">6.6 Tableau comparatif des outils d&apos;enrichissement</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-[#E8E8E8]">
                      <th className="text-left py-3 pr-3 text-[#999] font-semibold">Critere</th>
                      <th className="text-left py-3 pr-3 text-[#999] font-semibold">
                        <span className="flex items-center gap-1"><img src="https://www.google.com/s2/favicons?domain=lemlist.com&sz=32" alt="Lemlist" className="w-4 h-4" /> Lemlist AI</span>
                      </th>
                      <th className="text-left py-3 pr-3 text-[#999] font-semibold">
                        <span className="flex items-center gap-1"><img src="https://www.google.com/s2/favicons?domain=clay.com&sz=32" alt="Clay" className="w-4 h-4" /> Clay</span>
                      </th>
                      <th className="text-left py-3 pr-3 text-[#999] font-semibold">
                        <span className="flex items-center gap-1"><img src="https://www.google.com/s2/favicons?domain=dropcontact.com&sz=32" alt="Dropcontact" className="w-4 h-4" /> Dropcontact</span>
                      </th>
                      <th className="text-left py-3 text-[#999] font-semibold">
                        <span className="flex items-center gap-1"><img src="https://www.google.com/s2/favicons?domain=claude.ai&sz=32" alt="Claude" className="w-4 h-4" /> Claude</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555]">
                    {[
                      { critere: "Prix", lemlist: "Inclus dans Lemlist", clay: "A partir de 149$/mois", drop: "A partir de 24 euros/mois", claude: "API : 3-15$/1M tokens" },
                      { critere: "Vitesse", lemlist: "Rapide (secondes)", clay: "Rapide (secondes)", drop: "Temps reel", claude: "Variable (batch)" },
                      { critere: "Qualite des donnees", lemlist: "Bonne (IA generative)", clay: "Excellente (multi-sources)", drop: "Excellente (emails)", claude: "Tres bonne (analyse)" },
                      { critere: "Conformite RGPD", lemlist: "Partielle", clay: "Partielle", drop: "100% conforme", claude: "Conforme (pas de DB)" },
                      { critere: "Integration HubSpot", lemlist: "Via export/import", clay: "Native (bidirectionnelle)", drop: "Native (temps reel)", claude: "Via API custom" },
                      { critere: "IA generative", lemlist: "Oui (multi-modeles)", clay: "Oui (Claude, GPT)", drop: "Non", claude: "Oui (natif)" },
                      { critere: "Volume max", lemlist: "Listes de campagne", clay: "100 000+ contacts", drop: "Illimite", claude: "Illimite (batch)" },
                      { critere: "Specialite France", lemlist: "Correcte", clay: "Correcte", drop: "Excellente", claude: "Bonne" },
                      { critere: "Acces API", lemlist: "Oui", clay: "Oui", drop: "Oui", claude: "Oui" },
                      { critere: "Ideal pour", lemlist: "Prospection + icebreakers", clay: "Enrichissement multi-sources", drop: "Emails FR + compliance", claude: "Transformation sur mesure" },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-[#F5F5F5]">
                        <td className="py-2.5 pr-3 font-medium text-[#111]">{r.critere}</td>
                        <td className="py-2.5 pr-3">{r.lemlist}</td>
                        <td className="py-2.5 pr-3">{r.clay}</td>
                        <td className="py-2.5 pr-3">{r.drop}</td>
                        <td className="py-2.5">{r.claude}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 7 ==================== */}
            <div id="chapitre-7" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">07</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Claude Code scripts</h2>
                  <p className="text-[12px] text-[#999]">Pages 37-41 -- 4 scripts Python complets pour automatiser la data quality</p>
                </div>
              </div>

              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                Les scripts suivants sont prets a etre executes avec Claude Code. Chacun traite un aspect specifique de la data quality. Demandez simplement a Claude Code de creer et executer ces scripts sur vos fichiers CSV exportes depuis HubSpot. Les scripts utilisent des librairies Python standard (pandas, thefuzz, re, csv) et l&apos;API Anthropic pour l&apos;enrichissement IA.
              </p>

              {/* Script 1 */}
              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Script 1 : CSV Cleaner</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Ce script prend un export CSV de contacts HubSpot et applique toutes les regles de standardisation en un seul passage : telephone en E.164, noms en Title Case, dates en ISO 8601, suppression des lignes entierement vides, trim des espaces superflus, et normalisation des valeurs nulles.
              </p>
              <div className="rounded-xl bg-[#111] p-5 mb-6">
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">csv_cleaner.py</p>
                <div className="rounded-lg bg-white/5 px-4 py-3 overflow-x-auto">
                  <pre className="text-[11px] text-white/70 leading-[1.7] font-mono whitespace-pre">{`import pandas as pd
import re
from datetime import datetime

def clean_phone(phone, default_country="33"):
    if pd.isna(phone) or str(phone).strip() == "":
        return None
    digits = re.sub(r"\\D", "", str(phone))
    if digits.startswith("0") and len(digits) == 10:
        digits = default_country + digits[1:]
    if not digits.startswith(default_country) and len(digits) < 11:
        digits = default_country + digits
    return "+" + digits

def clean_name(name):
    if pd.isna(name) or str(name).strip() == "":
        return None
    particles = {"de", "du", "la", "le", "des", "van", "von", "der"}
    words = str(name).strip().split()
    result = []
    for i, w in enumerate(words):
        if w.lower() in particles and i > 0:
            result.append(w.lower())
        else:
            result.append(w.capitalize())
    return " ".join(result)

def clean_date(date_val):
    if pd.isna(date_val):
        return None
    for fmt in ["%d/%m/%Y", "%m/%d/%Y", "%Y-%m-%d", "%d-%m-%Y"]:
        try:
            return datetime.strptime(str(date_val).strip(), fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue
    return str(date_val)

df = pd.read_csv("contacts_export.csv")

# Supprimer les lignes entierement vides
df = df.dropna(how="all")

# Trim les espaces
df = df.apply(lambda col: col.str.strip() if col.dtype == "object" else col)

# Standardiser
if "phone" in df.columns:
    df["phone"] = df["phone"].apply(clean_phone)
for col in ["firstname", "lastname"]:
    if col in df.columns:
        df[col] = df[col].apply(clean_name)
for col in df.columns:
    if "date" in col.lower():
        df[col] = df[col].apply(clean_date)

# Remplacer les valeurs nulles courantes
df = df.replace(["N/A", "n/a", "NA", "-", ".", "none", "None"], pd.NA)

df.to_csv("contacts_cleaned.csv", index=False)
print(f"Nettoyage termine : {len(df)} contacts traites")`}</pre>
                </div>
              </div>

              {/* Script 2 */}
              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Script 2 : Duplicate Finder</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Ce script identifie les doublons potentiels en utilisant trois methodes : correspondance exacte sur l&apos;email, fuzzy matching sur le nom complet (seuil de similarite de 85%), et correspondance nom + entreprise. Il genere un rapport avec le niveau de confiance pour chaque paire de doublons detectee.
              </p>
              <div className="rounded-xl bg-[#111] p-5 mb-6">
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">duplicate_finder.py</p>
                <div className="rounded-lg bg-white/5 px-4 py-3 overflow-x-auto">
                  <pre className="text-[11px] text-white/70 leading-[1.7] font-mono whitespace-pre">{`import pandas as pd
from thefuzz import fuzz
from itertools import combinations

df = pd.read_csv("contacts_cleaned.csv")
duplicates = []

# 1. Doublons exacts par email
if "email" in df.columns:
    email_groups = df.dropna(subset=["email"]).groupby("email")
    for email, group in email_groups:
        if len(group) > 1:
            ids = group.index.tolist()
            for a, b in combinations(ids, 2):
                duplicates.append({
                    "id_1": a, "id_2": b,
                    "type": "Email exact",
                    "confiance": 100,
                    "detail": email
                })

# 2. Fuzzy matching sur nom complet
df["full_name"] = (df.get("firstname", "").fillna("") + " " + df.get("lastname", "").fillna("")).str.strip()
names = df["full_name"].tolist()
for i, j in combinations(range(len(names)), 2):
    if names[i] and names[j] and len(names[i]) > 2:
        score = fuzz.ratio(names[i].lower(), names[j].lower())
        if score >= 85:
            duplicates.append({
                "id_1": i, "id_2": j,
                "type": "Nom similaire",
                "confiance": score,
                "detail": f"{names[i]} / {names[j]}"
            })

# 3. Nom + entreprise
if "company" in df.columns:
    df["name_company"] = df["full_name"] + " @ " + df["company"].fillna("")
    nc = df["name_company"].tolist()
    seen = {}
    for idx, val in enumerate(nc):
        key = val.lower().strip()
        if key in seen and len(key) > 5:
            duplicates.append({
                "id_1": seen[key], "id_2": idx,
                "type": "Nom+Entreprise",
                "confiance": 95,
                "detail": val
            })
        else:
            seen[key] = idx

result = pd.DataFrame(duplicates)
result.to_csv("duplicates_report.csv", index=False)
print(f"Doublons detectes : {len(result)} paires")`}</pre>
                </div>
              </div>

              {/* Script 3 */}
              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Script 3 : Enrichment Pipeline</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Ce script lit un CSV de contacts, envoie chaque enregistrement a l&apos;API Claude pour enrichissement (secteur d&apos;activite, description de l&apos;entreprise, score de qualite), gere les rate limits avec un delai entre chaque appel, et ecrit les resultats dans un nouveau fichier CSV enrichi.
              </p>
              <div className="rounded-xl bg-[#111] p-5 mb-6">
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">enrichment_pipeline.py</p>
                <div className="rounded-lg bg-white/5 px-4 py-3 overflow-x-auto">
                  <pre className="text-[11px] text-white/70 leading-[1.7] font-mono whitespace-pre">{`import pandas as pd
import anthropic
import time
import json

client = anthropic.Anthropic()
df = pd.read_csv("contacts_cleaned.csv")

def enrich_contact(row):
    prompt = f"""Analyse ce contact CRM et fournis un enrichissement JSON :
Nom : {row.get('firstname', '')} {row.get('lastname', '')}
Entreprise : {row.get('company', '')}
Poste : {row.get('jobtitle', '')}
Email : {row.get('email', '')}

Retourne UNIQUEMENT un JSON avec :
- "industry": secteur d'activite (parmi: SaaS, E-commerce, Finance,
  Sante, Industrie, Energie, Conseil, Media, Autre)
- "company_description": description 1 phrase
- "seniority": niveau (C-Level, VP, Director, Manager, IC)
- "department": departement (Sales, Marketing, Tech, Finance, RH, Ops)
- "quality_score": score de completude 0-100"""

    try:
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=300,
            messages=[{"role": "user", "content": prompt}]
        )
        return json.loads(response.content[0].text)
    except Exception as e:
        return {"error": str(e)}

enriched = []
for idx, row in df.iterrows():
    print(f"Enrichissement {idx+1}/{len(df)}...")
    result = enrich_contact(row)
    enriched.append(result)
    time.sleep(0.5)  # Rate limiting

enriched_df = pd.DataFrame(enriched)
final = pd.concat([df, enriched_df], axis=1)
final.to_csv("contacts_enriched.csv", index=False)
print(f"Enrichissement termine : {len(final)} contacts")`}</pre>
                </div>
              </div>

              {/* Script 4 */}
              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Script 4 : Data Quality Scorer</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Ce script calcule un score de qualite pour chaque enregistrement et pour l&apos;ensemble de la base. Il mesure la completude (champs remplis), detecte les anomalies de format (emails invalides, telephones mal formates), et genere un rapport synthetique avec le score global et les recommandations.
              </p>
              <div className="rounded-xl bg-[#111] p-5">
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">quality_scorer.py</p>
                <div className="rounded-lg bg-white/5 px-4 py-3 overflow-x-auto">
                  <pre className="text-[11px] text-white/70 leading-[1.7] font-mono whitespace-pre">{`import pandas as pd
import re

df = pd.read_csv("contacts_cleaned.csv")

# Ponderation des champs
weights = {
    "email": 20, "firstname": 10, "lastname": 10,
    "company": 15, "jobtitle": 15, "phone": 10,
    "industry": 10, "country": 5, "lifecyclestage": 5
}

def score_record(row):
    total, earned = 0, 0
    for field, w in weights.items():
        total += w
        val = row.get(field)
        if pd.notna(val) and str(val).strip() != "":
            earned += w
            # Bonus de format
            if field == "email" and not re.match(
                r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                str(val)
            ):
                earned -= w * 0.5  # Penalite format
            if field == "phone" and not str(val).startswith("+"):
                earned -= w * 0.3
    return round((earned / total) * 100, 1) if total > 0 else 0

df["quality_score"] = df.apply(score_record, axis=1)

# Rapport global
report = {
    "total_contacts": len(df),
    "score_moyen": round(df["quality_score"].mean(), 1),
    "score_median": round(df["quality_score"].median(), 1),
    "contacts_critiques": len(df[df["quality_score"] < 25]),
    "contacts_fragiles": len(df[(df["quality_score"] >= 25) & (df["quality_score"] < 50)]),
    "contacts_corrects": len(df[(df["quality_score"] >= 50) & (df["quality_score"] < 75)]),
    "contacts_excellents": len(df[df["quality_score"] >= 75]),
}

# Completude par champ
for field in weights:
    if field in df.columns:
        filled = df[field].notna().sum()
        report[f"completude_{field}"] = f"{round(filled/len(df)*100, 1)}%"

print("=== RAPPORT DATA QUALITY ===")
for k, v in report.items():
    print(f"  {k}: {v}")

df.to_csv("contacts_scored.csv", index=False)
print(f"\\nScoring exporte : contacts_scored.csv")`}</pre>
                </div>
              </div>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 8 ==================== */}
            <div id="chapitre-8" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">08</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Automatiser la maintenance</h2>
                  <p className="text-[12px] text-[#999]">Pages 42-46 -- Workflows et outils pour une base qui reste propre</p>
                </div>
              </div>

              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                Nettoyer une base une fois ne suffit pas. Sans automatisation, la qualite se degrade a nouveau en quelques mois. L&apos;objectif de ce chapitre est de mettre en place des garde-fous automatiques qui maintiennent la qualite dans la duree. Nous utilisons trois piliers : HubSpot Operations Hub, des workflows personnalises, et des integrations avec Make (ex-Integromat).
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">HubSpot Operations Hub</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Operations Hub est le hub HubSpot dedie a la qualite des donnees. Il propose trois fonctionnalites cles. Le Data Sync permet de synchroniser les donnees entre HubSpot et d&apos;autres outils (Salesforce, NetSuite, Mailchimp) de maniere bidirectionnelle avec des regles de mapping et de priorite. Le Data Quality Automation permet de creer des regles qui corrigent automatiquement les donnees (formatter les noms en Title Case, standardiser les pays, nettoyer les telephones). La Programmable Automation permet d&apos;executer du code JavaScript custom dans les workflows pour des logiques complexes.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Les 4 workflows essentiels</h3>

              <div className="space-y-4 mb-6">
                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[11px] font-bold text-[#22C55E]">1</span>
                    <p className="text-[13px] font-semibold text-[#111]">Auto-archivage des contacts inactifs (12 mois et plus)</p>
                  </div>
                  <p className="text-[12px] text-[#666] leading-[1.6] mb-3">
                    Declencheur : contact dont la derniere activite (email, visite, formulaire) date de plus de 12 mois. Action : setter le lifecycle stage a &quot;Non-marketing contact&quot;, ajouter le label &quot;Inactive - Archivable&quot;, retirer de toutes les listes actives. Frequence : execution quotidienne. Impact : reduit la taille de la base active de 15 a 30%, ameliore les taux d&apos;engagement, reduit les couts de contacts marketing HubSpot.
                  </p>
                  <div className="rounded-lg bg-white border border-[#E8E8E8] px-3 py-2">
                    <p className="text-[11px] text-[#999]">Configuration HubSpot : Workflows, puis Contact-based, puis Trigger = &quot;Last activity date is more than 12 months ago&quot;</p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[11px] font-bold text-[#22C55E]">2</span>
                    <p className="text-[13px] font-semibold text-[#111]">Alerte bounce rate superieur a 3%</p>
                  </div>
                  <p className="text-[12px] text-[#666] leading-[1.6] mb-3">
                    Declencheur : rapport hebdomadaire qui calcule le taux de bounce des 7 derniers jours. Si le taux depasse 3%, une notification Slack est envoyee au responsable CRM avec la liste des emails en hard bounce. Action complementaire : les contacts en hard bounce sont automatiquement passes en &quot;Non-marketing contact&quot; et leur email est marque comme invalide.
                  </p>
                  <div className="rounded-lg bg-white border border-[#E8E8E8] px-3 py-2">
                    <p className="text-[11px] text-[#999]">Configuration : combiner un workflow HubSpot (trigger sur bounce) et une integration Make pour l&apos;alerte Slack</p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[11px] font-bold text-[#22C55E]">3</span>
                    <p className="text-[13px] font-semibold text-[#111]">Auto-enrichissement des nouveaux contacts via Dropcontact</p>
                  </div>
                  <p className="text-[12px] text-[#666] leading-[1.6] mb-3">
                    Declencheur : creation d&apos;un nouveau contact dans HubSpot. Action : Dropcontact enrichit automatiquement l&apos;email, le telephone, le poste, le profil LinkedIn, la civilite, et les informations legales de l&apos;entreprise (SIREN, effectif, CA). L&apos;enrichissement se fait en temps reel (moins de 30 secondes). Aucune intervention manuelle necessaire.
                  </p>
                  <div className="rounded-lg bg-white border border-[#E8E8E8] px-3 py-2">
                    <p className="text-[11px] text-[#999]">Configuration : activer l&apos;integration Dropcontact dans la Marketplace HubSpot, configurer les champs a enrichir</p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[11px] font-bold text-[#22C55E]">4</span>
                    <p className="text-[13px] font-semibold text-[#111]">Rapport data quality hebdomadaire via Make</p>
                  </div>
                  <p className="text-[12px] text-[#666] leading-[1.6] mb-3">
                    Un scenario Make programme chaque lundi matin : extraction des metriques de qualite depuis HubSpot (taux de completude, nombre de doublons, bounce rate, contacts stale), calcul du score global, et envoi d&apos;un rapport synthetique par email ou Slack au responsable CRM. Ce rapport permet de detecter les degradations avant qu&apos;elles deviennent critiques.
                  </p>
                  <div className="rounded-lg bg-white border border-[#E8E8E8] px-3 py-2">
                    <p className="text-[11px] text-[#999]">Configuration Make : scenario schedule (lundi 8h) vers HubSpot API vers module de calcul vers Slack/Email</p>
                  </div>
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Pipeline d&apos;enrichissement recurrent Clay vers HubSpot</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Pour les equipes qui utilisent Clay, un pipeline recurrent peut etre configure : chaque semaine, Make extrait les contacts crees dans les 7 derniers jours depuis HubSpot, les envoie a Clay pour enrichissement waterfall (email, telephone, donnees entreprise), puis reecrit les donnees enrichies dans HubSpot. Ce pipeline fonctionne en tache de fond et garantit que chaque nouveau contact est enrichi dans les 7 jours suivant sa creation.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Routine de maintenance mensuelle</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Au-dela de l&apos;automatisation, une revue mensuelle manuelle reste necessaire. Voici la checklist a suivre chaque premier lundi du mois.
              </p>
              <div className="space-y-2 mb-2">
                {[
                  "Lancer l\u2019outil de detection des doublons HubSpot et fusionner les doublons detectes",
                  "Verifier le rapport de bounce des 30 derniers jours et supprimer les hard bounces",
                  "Analyser les 100 contacts les plus recemment crees pour verifier la qualite des imports",
                  "Verifier que les workflows d\u2019automatisation fonctionnent (pas d\u2019erreurs, pas de files d\u2019attente bloquees)",
                  "Mettre a jour les proprietes dropdown si de nouvelles valeurs sont necessaires",
                  "Exporter un echantillon de 50 contacts et verifier manuellement l\u2019exactitude sur LinkedIn",
                  "Calculer le score data quality global et le comparer au mois precedent",
                  "Documenter les anomalies detectees et les actions correctives prises",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#22C55E] text-[12px] mt-0.5 shrink-0">--</span>
                    <p className="text-[12px] text-[#666] leading-[1.6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 9 ==================== */}
            <div id="chapitre-9" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">09</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Mesurer la qualite</h2>
                  <p className="text-[12px] text-[#999]">Pages 47-50 -- Dashboard, KPIs et tracking dans la duree</p>
                </div>
              </div>

              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                Ce qui ne se mesure pas ne s&apos;ameliore pas. Un dashboard de data quality doit etre aussi important que votre dashboard de pipeline ou de marketing. Il doit etre consulte chaque semaine par le responsable CRM et chaque mois par la direction. Voici les 8 rapports essentiels, les KPIs a suivre, et un template de scorecard mensuelle.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Les 8 rapports du dashboard data quality</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  { num: "1", title: "Completude par champ critique", desc: "Pourcentage de contacts avec email, prenom, nom, entreprise, poste, telephone remplis. Objectif : 80% pour chaque champ." },
                  { num: "2", title: "Taux de doublons", desc: "Nombre de doublons detectes / nombre total de contacts. Objectif : moins de 3%. Suivi hebdomadaire." },
                  { num: "3", title: "Taux de bounce email", desc: "Hard bounces + soft bounces sur les 30 derniers jours. Objectif : moins de 2%. Seuil d\u2019alerte : 3%." },
                  { num: "4", title: "Fraicheur de la base", desc: "Distribution des contacts par date de derniere modification : moins de 3 mois, 3-6 mois, 6-12 mois, plus de 12 mois." },
                  { num: "5", title: "Score de qualite moyen", desc: "Score calcule par le script quality_scorer.py. Evolution mensuelle. Objectif : 70+ sur 100." },
                  { num: "6", title: "Couverture d\u2019enrichissement", desc: "Pourcentage de contacts enrichis par Dropcontact/Clay dans les 7 derniers jours apres creation." },
                  { num: "7", title: "Contacts sans owner", desc: "Nombre de contacts et deals sans responsable attribue. Objectif : 0. Indicateur de gouvernance." },
                  { num: "8", title: "Deals sans montant", desc: "Pourcentage de deals ouverts sans montant renseigne. Objectif : moins de 5%. Impact direct sur le forecast." },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-[#E8E8E8] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded bg-[#22C55E]/10 flex items-center justify-center text-[10px] font-bold text-[#22C55E]">{r.num}</span>
                      <p className="text-[13px] font-semibold text-[#111]">{r.title}</p>
                    </div>
                    <p className="text-[12px] text-[#666] leading-[1.6]">{r.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">KPIs et objectifs</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-[#E8E8E8]">
                      <th className="text-left py-3 pr-4 text-[#999] font-semibold">KPI</th>
                      <th className="text-left py-3 pr-4 text-[#999] font-semibold">Formule</th>
                      <th className="text-left py-3 pr-4 text-[#999] font-semibold">Objectif</th>
                      <th className="text-left py-3 text-[#999] font-semibold">Frequence</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555]">
                    {[
                      { kpi: "Taux de completude", formule: "Champs remplis / champs attendus", objectif: "Plus de 80%", freq: "Mensuel" },
                      { kpi: "Taux de doublons", formule: "Doublons / total contacts", objectif: "Moins de 3%", freq: "Hebdomadaire" },
                      { kpi: "Taux de bounce", formule: "Hard bounces / emails envoyes", objectif: "Moins de 2%", freq: "Hebdomadaire" },
                      { kpi: "Taux de stale", formule: "Contacts 12m+ sans activite / total", objectif: "Moins de 20%", freq: "Mensuel" },
                      { kpi: "Couverture enrichissement", formule: "Contacts enrichis / nouveaux contacts", objectif: "Plus de 90%", freq: "Hebdomadaire" },
                      { kpi: "Score qualite global", formule: "Moyenne des scores individuels", objectif: "Plus de 70/100", freq: "Mensuel" },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-[#F5F5F5]">
                        <td className="py-2.5 pr-4 font-medium text-[#111]">{r.kpi}</td>
                        <td className="py-2.5 pr-4">{r.formule}</td>
                        <td className="py-2.5 pr-4 font-medium text-[#22C55E]">{r.objectif}</td>
                        <td className="py-2.5">{r.freq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Scorecard mensuelle</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Chaque mois, remplissez une scorecard avec les valeurs actuelles de chaque KPI, la tendance par rapport au mois precedent (amelioration, stable, degradation), et les actions correctives planifiees. Partagez cette scorecard avec la direction pour maintenir la visibilite sur la qualite des donnees. Un template Google Sheets est disponible : il suffit de dupliquer notre modele et de l&apos;alimenter chaque mois avec les donnees exportees de HubSpot.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Alertes et seuils</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Configurez des alertes automatiques pour ne pas attendre la revue mensuelle quand un probleme surgit. Seuils recommandes : alerte si le taux de bounce depasse 3% sur 7 jours glissants, alerte si plus de 100 doublons sont crees en une semaine (signe d&apos;un import non controle), alerte si le score de completude des nouveaux contacts chute en dessous de 50% (signe d&apos;un formulaire mal configure ou d&apos;une integration defaillante). Ces alertes peuvent etre envoyees par Slack via Make ou directement par les workflows HubSpot.
              </p>
            </div>

            <Connector />

            {/* ==================== CHAPITRE 10 ==================== */}
            <div id="chapitre-10" className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">10</span>
                <div>
                  <h2 className="text-[22px] font-semibold text-[#111] leading-tight">Methode Ceres et cas clients</h2>
                  <p className="text-[12px] text-[#999]">Pages 51-55 -- Notre methodologie en 5 etapes et les resultats obtenus</p>
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">La methode Ceres en 5 etapes</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                Notre methodologie Data Quality a ete affinee sur des dizaines de projets. Elle repose sur cinq etapes sequentielles, chacune s&apos;appuyant sur les resultats de la precedente. Le cycle complet prend entre 6 et 12 semaines selon la taille et l&apos;etat de la base.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
                {[
                  { step: "1", name: "Audit", desc: "Checklist 50 points, scoring 0-100, identification des priorites", color: "#FF6B6B", duration: "Semaine 1" },
                  { step: "2", name: "Clean", desc: "Deduplication, standardisation, suppression des donnees obsoletes", color: "#F59E0B", duration: "Semaines 2-3" },
                  { step: "3", name: "Enrich", desc: "Enrichissement via Dropcontact, Clay, Claude Code selon les besoins", color: "#4B5EFC", duration: "Semaines 4-5" },
                  { step: "4", name: "Automate", desc: "Workflows HubSpot, integration Make, pipeline enrichissement recurrent", color: "#6C5CE7", duration: "Semaines 6-7" },
                  { step: "5", name: "Monitor", desc: "Dashboard, KPIs, alertes, scorecard mensuelle, routine de maintenance", color: "#22C55E", duration: "Semaine 8+" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl border p-4 text-center" style={{ borderColor: `${s.color}30` }}>
                    <div className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center text-[12px] font-bold text-white" style={{ background: s.color }}>{s.step}</div>
                    <p className="text-[13px] font-semibold text-[#111]">{s.name}</p>
                    <p className="text-[11px] text-[#888] leading-[1.4] mt-1">{s.desc}</p>
                    <p className="text-[10px] font-medium mt-2" style={{ color: s.color }}>{s.duration}</p>
                  </div>
                ))}
              </div>

              {/* Case study Elax */}
              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Cas client : Elax Energie (17 vers 76 en 8 semaines)</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Elax Energie est un fournisseur d&apos;energie renouvelable B2B avec une equipe de 12 commerciaux. Leur CRM HubSpot contenait 12 400 contacts accumules sur 4 ans sans aucune politique de data quality. Les commerciaux avaient abandonne HubSpot au profit de fichiers Excel personnels. L&apos;equipe marketing envoyait des campagnes sur l&apos;ensemble de la base, avec un taux de bounce de 18% et un taux d&apos;ouverture de 8%.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-[#E8E8E8]">
                      <th className="text-left py-3 pr-4 text-[#999] font-semibold">Dimension</th>
                      <th className="text-left py-3 pr-4 text-[#FF6B6B] font-semibold">Avant (score)</th>
                      <th className="text-left py-3 pr-4 text-[#22C55E] font-semibold">Apres (score)</th>
                      <th className="text-left py-3 text-[#999] font-semibold">Actions realisees</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#555]">
                    {[
                      { dim: "Completude", before: "23%", after: "81%", actions: "Enrichissement Dropcontact + Clay pour 8 400 contacts. Champs obligatoires configures." },
                      { dim: "Exactitude", before: "Bounce 18%", after: "Bounce 1.8%", actions: "Suppression de 2 100 hard bounces, verification LinkedIn sur 500 contacts cles." },
                      { dim: "Coherence", before: "47 variantes pays", after: "ISO 3166", actions: "Migration vers dropdowns, standardisation batch via Claude Code." },
                      { dim: "Fraicheur", before: "72% stale", after: "18% stale", actions: "Archivage de 3 200 contacts inactifs 24m+, enrichissement des contacts actifs." },
                      { dim: "Unicite", before: "42% doublons", after: "2.8% doublons", actions: "Insycle pour la deduplication, 5 200 doublons fusionnes, regles de prevention." },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-[#F5F5F5]">
                        <td className="py-2.5 pr-4 font-medium text-[#111]">{r.dim}</td>
                        <td className="py-2.5 pr-4 text-[#FF6B6B] font-medium">{r.before}</td>
                        <td className="py-2.5 pr-4 text-[#22C55E] font-medium">{r.after}</td>
                        <td className="py-2.5 text-[11px]">{r.actions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                Resultat business : 6 mois apres l&apos;intervention, le taux d&apos;ouverture des campagnes est passe de 8% a 32%, le temps de recherche par commercial est passe de 2h/jour a 15 min/jour, et le pipeline CRM reflete la realite pour la premiere fois. L&apos;equipe commerciale a readopte HubSpot comme outil central.
              </p>

              {/* Case study Kameleoon */}
              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Cas client : Kameleoon (25 vers 78 en 10 semaines)</h3>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                Kameleoon, editeur de solution d&apos;A/B testing et de personalisation, avait une base de 34 000 contacts avec un probleme massif de doublons (42% de la base) lie a des imports multiples depuis des salons, webinars et listes achetees. La segmentation etait impossible : les memes contacts recevaient 3 a 4 emails par semaine sans le savoir, generant des plaintes et des desinscriptions en cascade.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                Intervention Ceres : deduplication massive avec Insycle (14 300 doublons fusionnes), standardisation des 28 champs custom, enrichissement Clay pour les 8 000 contacts cles, mise en place de 6 workflows de maintenance automatique. Score passe de 25 a 78 en 10 semaines. Le taux de desinscription est passe de 2.4% a 0.3% par campagne. La segmentation est devenue fiable et l&apos;equipe marketing a pu lancer des campagnes ABM pour la premiere fois.
              </p>

              <h3 className="text-[17px] font-semibold text-[#111] mb-3">Ce que ca donne a 3, 6 et 12 mois</h3>
              <div className="space-y-3 mb-6">
                {[
                  { period: "3 mois", items: "Base nettoyee et enrichie. Score de 65 a 80. Les equipes utilisent le CRM au quotidien. Les premiers workflows de maintenance sont en place. Les rapports sont fiables." },
                  { period: "6 mois", items: "Score stabilise entre 75 et 85. L\u2019enrichissement automatique fonctionne en tache de fond. Les campagnes marketing ont des taux d\u2019engagement 2x a 3x superieurs. Les commerciaux gagnent 1h30 par jour. Le forecast est precis a plus ou moins 15%." },
                  { period: "12 mois", items: "Score maintenu au-dessus de 80. La data quality est ancree dans la culture de l\u2019entreprise. Les nouveaux outils (scoring predictif, ABM, intent data) deviennent possibles grace a des donnees fiables. Le ROI de l\u2019investissement data quality est mesurable en revenu additionnel." },
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-[80px] shrink-0 text-right">
                      <span className="text-[12px] font-semibold text-[#22C55E]">{p.period}</span>
                    </div>
                    <div className="w-px bg-[#E8E8E8] self-stretch" />
                    <div className="flex-1">
                      <p className="text-[13px] text-[#666] leading-[1.7]">{p.items}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final dark CTA */}
              <div className="rounded-xl bg-[#111] p-5">
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">Ce que vous obtenez avec Ceres</p>
                <div className="space-y-2">
                  {[
                    "Un audit complet de votre base CRM avec scoring sur 50 points",
                    "Un plan d\u2019action priorise avec estimation du temps et des couts",
                    "L\u2019execution complete : deduplication, standardisation, enrichissement",
                    "La mise en place des workflows de maintenance automatique",
                    "Un dashboard de monitoring et une scorecard mensuelle",
                    "Un accompagnement de 3 mois pour maintenir le niveau de qualite",
                    "La formation de votre equipe aux bonnes pratiques data quality",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#22C55E] text-[12px] mt-0.5 shrink-0">--</span>
                      <p className="text-[12px] text-white/70 leading-[1.6]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Connector />

            {/* ==================== CTA FINAL ==================== */}
            <div className="rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#16A34A] p-6 md:p-10 text-center mb-8">
              <h2 className="text-[22px] md:text-[28px] font-semibold text-white leading-tight mb-3">
                Pret a transformer vos donnees CRM en actif strategique ?
              </h2>
              <p className="text-[14px] text-white/80 max-w-[500px] mx-auto leading-[1.7] mb-6">
                Nos experts data quality auditent votre base CRM et deployent la methode Ceres en 8 semaines. Meme methodologie, adaptee a votre contexte.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#22C55E] text-[14px] font-semibold hover:bg-white/90 transition-colors">
                  Reserver un audit data quality gratuit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
                <Link href="/guide-data-quality-crm" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white text-[14px] font-medium hover:bg-white/20 transition-colors border border-white/20">
                  Telecharger le PDF gratuit
                </Link>
              </div>
            </div>

            {/* Related guides */}
            <div className="mb-8">
              <h3 className="text-[17px] font-semibold text-[#111] mb-4">Guides et articles complementaires</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedGuides.map((g, i) => (
                  <Link key={i} href={g.slug} className="group rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] transition-all">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-medium mb-3" style={{ background: `${g.color}15`, color: g.color }}>{g.category}</span>
                    <p className="text-[13px] font-semibold text-[#111] group-hover:text-[#22C55E] transition-colors leading-tight">{g.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Back link */}
            <div className="text-center">
              <Link href="/guide-data-quality-crm" className="text-[13px] text-[#999] hover:text-[#22C55E] transition-colors">
                Retour a la page du Guide Data Quality CRM
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
