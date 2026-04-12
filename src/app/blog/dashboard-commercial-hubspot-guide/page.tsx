"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dashboard commercial HubSpot : le guide pour piloter vos ventes",
  description: "Guide complet pour creer des dashboards commerciaux HubSpot efficaces. Les 5 dashboards essentiels (pipeline, activite, forecast, conversion, performance rep), widgets cles, erreurs de configuration, dashboard vs reporting IA et template pret a copier.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/dashboard-commercial-hubspot-guide" },
  articleSection: "CRM & HubSpot",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "constat", title: "Le constat" },
  { id: "cinq-dashboards", title: "Les 5 dashboards" },
  { id: "widgets-configuration", title: "Widgets et configuration" },
  { id: "erreurs-configuration", title: "Les erreurs" },
  { id: "dashboard-vs-reporting-ia", title: "Dashboard vs reporting IA" },
  { id: "automatiser-partage", title: "Automatiser le partage" },
  { id: "metriques-manquantes", title: "Les metriques manquantes" },
  { id: "template", title: "Template dashboard" },
];

const relatedArticles = [
  { title: "KPI commerciaux : les indicateurs de vente a suivre", slug: "kpi-commerciaux-indicateurs-vente", category: "Data & Reporting", color: "#22C55E" },
  { title: "Les metriques RevOps : indicateurs de performance", slug: "metriques-revops-indicateurs-performance", category: "Data & Reporting", color: "#22C55E" },
  { title: "Claude et le reporting automatise en RevOps", slug: "claude-reporting-automatise-revops", category: "IA & Automatisation", color: "#6D00CC" },
];

export default function DashboardCommercialHubspotGuideArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("constat");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#4B5EFC", opacity: 0.06, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Dashboard%20commercial%20HubSpot%20%3A%20le%20guide%20complet&url=https://ceres.agency/blog/dashboard-commercial-hubspot-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/dashboard-commercial-hubspot-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Dashboard commercial HubSpot</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM &amp; HubSpot</Badge>
                <span className="text-[11px] text-[#CCC]">15 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Dashboard commercial HubSpot : le guide pour piloter vos ventes
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                90% des dashboards HubSpot ne servent a rien. Trop de widgets, pas de hierarchie, des metriques decoratives et personne ne les consulte. Ce guide vous montre comment creer les 5 dashboards qui comptent vraiment, avec les bons widgets, la bonne configuration et une methode pour que vos equipes les utilisent au quotidien.
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
              {/* Section 1 : Le constat */}
              <section id="constat" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi vos dashboards ne servent a rien</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ouvrez votre portail HubSpot. Allez dans Reports &gt; Dashboards. Comptez. Vous avez probablement 15 a 30 dashboards. Demandez a vos commerciaux lesquels ils consultent regulierement. La reponse : zero. Peut-etre un, le lundi matin pendant 30 secondes.</p>
                    <p>Quatre problemes expliquent cette situation :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /><strong className="text-[#111]">Trop de widgets.</strong> Un dashboard avec 20 graphiques n&apos;est pas un dashboard, c&apos;est un mur de donnees. L&apos;oeil humain ne peut traiter que 5 a 7 informations simultanement. Au-dela, tout se melange.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Pas de hierarchie.</strong> Le chiffre le plus important est au meme niveau que le detail le moins pertinent. Pas de KPI principal en haut, pas de drill-down logique. Le manager cherche l&apos;information au lieu de la voir immediatement.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Metriques decoratives.</strong> &ldquo;Nombre total de contacts&rdquo;. Ca monte tout le temps. C&apos;est satisfaisant visuellement. C&apos;est completement inutile. Un dashboard doit montrer des metriques actionnables : celles qui declenchent une decision ou une action.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Pas de contexte temporel.</strong> Un pipeline de 500K, c&apos;est bien ou pas ? Impossible de savoir sans comparaison. Le meme chiffre par rapport au mois dernier, au trimestre dernier, a l&apos;objectif. Le contexte transforme une donnee en information.</li>
                    </ul>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4 text-center">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">La regle des 5 dashboards</p>
                    <p className="text-[11px] text-[#777] leading-[1.6]">Vous n&apos;avez besoin que de 5 dashboards pour piloter une equipe commerciale B2B. Chacun repond a une question specifique et est consulte a un rythme precis. Au-dela de 5, vous diluez l&apos;attention.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 : Les 5 dashboards */}
              <section id="cinq-dashboards" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 5 dashboards qui comptent</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque dashboard a un objectif unique, un public cible et un rythme de consultation.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        num: "1",
                        name: "Pipeline",
                        question: "Combien de revenue est en jeu et ou en est-il ?",
                        audience: "VP Sales, managers",
                        rythme: "Quotidien",
                        kpis: "Pipeline total, pipeline par stage, pipeline cree vs ferme cette semaine, age moyen des deals, deals stales (>21 jours meme stage)",
                        color: "#4B5EFC"
                      },
                      {
                        num: "2",
                        name: "Activite",
                        question: "L'equipe fait-elle le volume d'activite necessaire ?",
                        audience: "Managers, team leads",
                        rythme: "Quotidien",
                        kpis: "Calls passes, emails envoyes, meetings realises, taches completees. Par commercial et par semaine. Avec objectif vs realise.",
                        color: "#FF7A59"
                      },
                      {
                        num: "3",
                        name: "Forecast",
                        question: "Va-t-on atteindre l'objectif du mois/trimestre ?",
                        audience: "VP Sales, CEO",
                        rythme: "Hebdomadaire",
                        kpis: "Revenue ferme vs objectif, pipeline pondere (par probabilite de closing), gap a combler, projection basee sur le run rate actuel, comparaison avec le meme mois N-1.",
                        color: "#22C55E"
                      },
                      {
                        num: "4",
                        name: "Conversion",
                        question: "Le funnel est-il sain ? Ou perd-on les deals ?",
                        audience: "RevOps, managers",
                        rythme: "Hebdomadaire",
                        kpis: "Taux de conversion par stage (lead>MQL>SQL>opportunity>won), cycle de vente moyen, raisons de perte par stage, win rate par segment.",
                        color: "#6C5CE7"
                      },
                      {
                        num: "5",
                        name: "Performance rep",
                        question: "Qui performe, qui a besoin de coaching ?",
                        audience: "Managers, chaque commercial (sa propre perf)",
                        rythme: "Hebdomadaire",
                        kpis: "Revenue ferme par rep, pipeline cree par rep, win rate par rep, activite par rep, deal velocity par rep. Avec classement et objectifs individuels.",
                        color: "#6D00CC"
                      },
                    ].map((item) => (
                      <div key={item.num} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold" style={{ background: item.color }}>{item.num}</div>
                          <div className="flex-1">
                            <p className="text-[12px] font-semibold text-[#111]">{item.name}</p>
                            <p className="text-[10px] text-[#999] italic">{item.question}</p>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-2 text-[10px] mb-2">
                          <div className="rounded-lg bg-[#FAFAFA] p-2">
                            <p className="text-[#999] font-semibold mb-0.5">Audience</p>
                            <p className="text-[#666]">{item.audience}</p>
                          </div>
                          <div className="rounded-lg bg-[#FAFAFA] p-2">
                            <p className="text-[#999] font-semibold mb-0.5">Rythme</p>
                            <p className="text-[#666]">{item.rythme}</p>
                          </div>
                          <div className="rounded-lg bg-[#FAFAFA] p-2 sm:col-span-1">
                            <p className="text-[#999] font-semibold mb-0.5">KPI cles</p>
                            <p className="text-[#666] leading-[1.4]">{item.kpis}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Widgets et configuration */}
              <section id="widgets-configuration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pour chaque dashboard : les widgets essentiels</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un bon dashboard HubSpot contient 5 a 8 widgets maximum. Chaque widget doit repondre a une sous-question du dashboard. Voici la configuration recommandee pour les deux dashboards les plus critiques.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#4B5EFC]/20 bg-[#4B5EFC]/5 p-5">
                    <p className="text-[12px] font-semibold text-[#4B5EFC] mb-4">Dashboard Pipeline - 6 widgets</p>
                    <div className="space-y-2">
                      {[
                        { widget: "Nombre unique - Pipeline total", config: "Somme des montants deals open. Filtre : close date = ce trimestre. Comparaison : meme periode mois precedent.", position: "En haut, grande taille" },
                        { widget: "Funnel - Deals par stage", config: "Type funnel horizontal. Source : deal stage. Filtre : create date = ce trimestre. Affiche le nombre ET le montant par stage.", position: "Sous le total" },
                        { widget: "Bar chart - Pipeline cree vs ferme", config: "Deux series : deals crees (montant) et deals fermes (won + lost). Axe X : semaine. Periode : 8 dernieres semaines.", position: "Milieu gauche" },
                        { widget: "Table - Top 10 deals en cours", config: "Colonnes : nom deal, montant, stage, owner, age. Tri : montant desc. Filtre : deals open.", position: "Milieu droit" },
                        { widget: "Nombre unique - Deals stales", config: "Compteur de deals dont le stage n'a pas change depuis 21+ jours. Code couleur : vert (<5), orange (5-10), rouge (>10).", position: "Bas gauche" },
                        { widget: "Bar chart - Age moyen par stage", config: "Axe X : stage. Axe Y : jours moyens dans le stage. Aide a identifier les goulets d'etranglement.", position: "Bas droit" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-lg bg-white p-3 border border-[#F2F2F2]">
                          <span className="text-[10px] font-bold text-[#4B5EFC] bg-[#4B5EFC]/10 rounded px-1.5 py-0.5 shrink-0">{i + 1}</span>
                          <div>
                            <p className="text-[11px] font-semibold text-[#111] mb-1">{item.widget}</p>
                            <p className="text-[10px] text-[#777] leading-[1.5]">{item.config}</p>
                            <p className="text-[9px] text-[#BBB] mt-1">{item.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="my-6 rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-5">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-4">Dashboard Forecast - 5 widgets</p>
                    <div className="space-y-2">
                      {[
                        { widget: "Nombre unique - Revenue ferme ce mois", config: "Somme des montants deals Closed Won. Close date = ce mois. Comparaison avec objectif mensuel (afficher % atteint).", position: "En haut, grande taille" },
                        { widget: "Gauge - Progression vs objectif", config: "Jauge circulaire. Valeur : revenue ferme. Objectif : target mensuel. Seuils : vert (>80%), orange (50-80%), rouge (<50%).", position: "A cote du total" },
                        { widget: "Bar chart stacked - Forecast par categorie", config: "Trois series : Commit (>80% proba), Best case (50-80%), Pipeline (20-50%). Par semaine restante dans le mois.", position: "Milieu" },
                        { widget: "Nombre unique - Gap a combler", config: "Objectif - Revenue ferme - Pipeline pondere. Si negatif : montant de pipeline supplementaire a generer pour atteindre l'objectif.", position: "Bas gauche" },
                        { widget: "Line chart - Run rate vs objectif", config: "Ligne : revenue cumule jour par jour ce mois. Ligne pointillee : trajectoire lineaire vers l'objectif. Ecart visible.", position: "Bas droit" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-lg bg-white p-3 border border-[#F2F2F2]">
                          <span className="text-[10px] font-bold text-[#22C55E] bg-[#22C55E]/10 rounded px-1.5 py-0.5 shrink-0">{i + 1}</span>
                          <div>
                            <p className="text-[11px] font-semibold text-[#111] mb-1">{item.widget}</p>
                            <p className="text-[10px] text-[#777] leading-[1.5]">{item.config}</p>
                            <p className="text-[9px] text-[#BBB] mt-1">{item.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Erreurs de configuration */}
              <section id="erreurs-configuration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs de configuration</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La configuration technique d&apos;un dashboard HubSpot est truffee de pieges. Voici les 5 erreurs les plus courantes et comment les eviter.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { erreur: "Filtres de date incoherents", desc: "Le widget 1 montre 'ce mois', le widget 2 montre 'ce trimestre', le widget 3 montre 'les 30 derniers jours'. Le dashboard raconte trois histoires differentes. Solution : definir une periode de reference unique par dashboard et l'appliquer a tous les widgets.", fix: "Utilisez les filtres de dashboard globaux (niveau dashboard, pas widget).", color: "#EF4444" },
                      { erreur: "Pipeline count vs amount", desc: "Vous regardez le nombre de deals au lieu du montant. 50 deals a 2K ne valent pas la meme chose que 5 deals a 50K. Les deux situations montrent le meme 'nombre'. Solution : toujours afficher le montant en metrique primaire, le nombre en secondaire.", fix: "Default a 'Sum of amount' au lieu de 'Count of deals' sur les widgets pipeline.", color: "#FF7A59" },
                      { erreur: "Pas de filtre par owner", desc: "Le dashboard montre les chiffres globaux. Le manager ne peut pas filtrer par commercial. Le commercial ne peut pas voir ses propres chiffres. Solution : ajouter un filtre owner sur chaque dashboard commercial.", fix: "HubSpot permet d'ajouter un filtre dashboard-level par deal owner ou contact owner.", color: "#6C5CE7" },
                      { erreur: "Widgets en doublon", desc: "Le meme pipeline est montre en camembert, en barre, en tableau et en nombre. Quatre widgets pour la meme information. Solution : un widget par question. Si le funnel montre le pipeline par stage, le tableau n'a pas besoin de le repeter.", fix: "Pour chaque widget, demandez : 'quelle question specifique ce widget repond-il ?'", color: "#4B5EFC" },
                      { erreur: "Pas de comparaison", desc: "Pipeline : 500K. C'est bien ? C'est mal ? Impossible de savoir sans comparaison. Solution : activer les comparaisons temporelles ('vs meme periode le mois dernier') sur chaque widget de type nombre.", fix: "Option 'Compare' dans chaque widget HubSpot. Activez 'Previous period' au minimum.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.erreur} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.erreur}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#22C55E]/5 p-2">
                          <span className="text-[10px] text-[#22C55E] font-semibold shrink-0 mt-0.5">Fix :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.fix}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Dashboard vs reporting IA */}
              <section id="dashboard-vs-reporting-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Dashboard vs reporting IA : la difference</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un dashboard montre des chiffres. Un reporting IA les interprete. Les deux sont complementaires, pas substituables.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#4B5EFC]/20 bg-[#4B5EFC]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#4B5EFC] mb-3">Dashboard HubSpot</p>
                      <ul className="space-y-2 text-[11px] text-[#777]">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Affiche des donnees en temps reel</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Necessite une interpretation humaine</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Repond a &ldquo;combien ?&rdquo; et &ldquo;ou ?&rdquo;</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Accessible dans HubSpot</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Pull : le manager doit aller le consulter</li>
                      </ul>
                    </div>
                    <div className="rounded-xl border border-[#6D00CC]/20 bg-[#6D00CC]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#6D00CC] mb-3">Reporting IA</p>
                      <ul className="space-y-2 text-[11px] text-[#777]">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-1.5 shrink-0" />Analyse et interprete les donnees</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-1.5 shrink-0" />Produit des insights narratifs</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-1.5 shrink-0" />Repond a &ldquo;pourquoi ?&rdquo; et &ldquo;que faire ?&rdquo;</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-1.5 shrink-0" />Livre sur Slack, email, Notion</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-1.5 shrink-0" />Push : le rapport vient a vous</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Exemple concret.</strong> Le dashboard montre : &ldquo;Pipeline : 450K (vs 520K le mois dernier).&rdquo; Le reporting IA dit : &ldquo;Pipeline en baisse de 13%. Cause principale : 3 deals &gt; 50K passes en lost cette semaine (raisons : budget gele x2, concurrent x1). Le pipeline genere cette semaine (180K) compense partiellement. Recommandation : focus sur les 4 deals en negotiation (&gt; 120K) pour securiser le mois.&rdquo;</p>
                    <p>Le dashboard est la couche de monitoring. Le reporting IA est la couche d&apos;intelligence. Les deux ensemble, c&apos;est un systeme de pilotage complet.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Automatiser le partage */}
              <section id="automatiser-partage" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment automatiser le partage</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un dashboard que personne ne consulte est un dashboard inutile. L&apos;astuce : ne pas attendre que les gens viennent au dashboard, mais amener le dashboard aux gens.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { canal: "Slack", methode: "Envoi automatique via Make ou n8n. Chaque lundi a 8h, extraction des KPI cles via API HubSpot et formatage en message Slack avec les highlights de la semaine. Le dashboard complet est lie en un clic.", frequence: "Hebdomadaire", color: "#4B5EFC" },
                      { canal: "Email HubSpot", methode: "Fonctionnalite native HubSpot : envoi recurrent d'un dashboard par email. Configuration : destinataires, frequence, jour et heure. Limitation : pas de personnalisation du message, juste le screenshot du dashboard.", frequence: "Hebdomadaire ou mensuel", color: "#FF7A59" },
                      { canal: "Notion", methode: "Archivage automatique du rapport dans une page Notion dediee. Historique consultable semaine par semaine. Utile pour les revues trimestrielles et les tendances long terme.", frequence: "Automatique", color: "#111" },
                      { canal: "Meeting standup", methode: "Ouvrir le dashboard Pipeline en debut de standup quotidien. 5 minutes de revue : pipeline total, deals critiques, deals stales. Le dashboard remplace le tour de table ou chacun recite ses chiffres.", frequence: "Quotidien", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.canal} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.canal}</span>
                          </div>
                          <span className="text-[10px] font-medium text-[#999]">{item.frequence}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.methode}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La meilleure combinaison</strong> : Slack pour le push hebdomadaire (tout le monde voit les chiffres sans effort), le dashboard HubSpot pour le drill-down a la demande (quand le manager veut creuser un point) et le standup quotidien pour l&apos;alignement equipe (5 minutes, dashboard en ecran partage).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Metriques manquantes */}
              <section id="metriques-manquantes" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les metriques qui manquent souvent</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot offre des dizaines de metriques out-of-the-box. Mais certaines metriques essentielles ne sont pas disponibles nativement et doivent etre calculees via des proprietes custom ou des rapports personnalises.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { metrique: "Pipeline velocity", formule: "(Nbre deals x Win rate x Deal moyen) / Cycle de vente", why: "La seule metrique qui combine les 4 leviers du pipeline. Si elle baisse, un des 4 leviers a bouge. C'est l'indicateur de sante le plus complet.", color: "#4B5EFC" },
                      { metrique: "Sales cycle par segment", formule: "Duree moyenne create>closed won, filtre par segment", why: "Le cycle global est une moyenne trompeuse. Un cycle de 30 jours pour les PME et 90 jours pour les grands groupes donnent une moyenne de 60 jours qui ne correspond a la realite d'aucun segment.", color: "#6C5CE7" },
                      { metrique: "Win rate par source", formule: "Deals won / deals totaux, filtre par original source", why: "Certaines sources convertissent 2x mieux que d'autres. Inbound vs outbound, referral vs paid. Cette metrique guide l'allocation du budget marketing.", color: "#22C55E" },
                      { metrique: "Pipeline coverage ratio", formule: "Pipeline total / objectif de revenue restant", why: "Combien de pipeline avez-vous par euro d'objectif ? En dessous de 3x, vous n'atteindrez probablement pas l'objectif. Au-dessus de 5x, votre qualification est probablement trop large.", color: "#FF7A59" },
                      { metrique: "Time to first touch", formule: "Duree entre creation du lead et premiere activite commerciale", why: "La vitesse de prise en charge des leads est directement correlee au taux de conversion. Si le time to first touch depasse 24h, vous perdez des deals.", color: "#6D00CC" },
                    ].map((item) => (
                      <div key={item.metrique} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.metrique}</span>
                        </div>
                        <p className="text-[10px] font-mono bg-[#FAFAFA] rounded px-2 py-1 mb-2 text-[#666]">{item.formule}</p>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Template */}
              <section id="template" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Template dashboard pret a copier</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Voici le template exact du dashboard Pipeline, le plus important des 5. Creez-le dans HubSpot en suivant ces instructions etape par etape.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { step: "1", action: "Creer le dashboard", detail: "Reports > Dashboards > Create dashboard > Blank. Nom : '[Sales] Pipeline - Q2 2026'. Acces : equipe sales + managers.", color: "#4B5EFC" },
                      { step: "2", action: "Widget KPI : Pipeline total", detail: "Add report > Single object > Deals. Metric : Sum of Amount. Filter : deal stage != Closed Won/Lost. Date : Close date = this quarter. Ajouter comparison 'Previous quarter'.", color: "#22C55E" },
                      { step: "3", action: "Widget Funnel : Deals par stage", detail: "Add report > Funnel. Source : Deal stage. Metric : Sum of Amount. Filter : Create date = this quarter. Afficher les taux de conversion entre stages.", color: "#6C5CE7" },
                      { step: "4", action: "Widget Bar : Pipeline cree vs ferme", detail: "Add report > Deals. Two data series : 1) deals crees (create date), 2) deals fermes (close date). Metric : Sum of amount. Group by : Week. Periode : 8 dernieres semaines.", color: "#FF7A59" },
                      { step: "5", action: "Widget Table : Top deals", detail: "Add report > Table. Colonnes : Deal name, Amount, Deal stage, Deal owner, Days since last stage change. Sort : Amount desc. Limit : 10. Filter : open deals only.", color: "#6D00CC" },
                      { step: "6", action: "Filtre global", detail: "Dashboard settings > Add filter > Deal owner. Permet a chaque manager de filtrer par son equipe et a chaque commercial de voir ses propres chiffres.", color: "#4B5EFC" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3 rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: item.color }}>{item.step}</div>
                        <div>
                          <p className="text-[12px] font-semibold text-white mb-1">{item.action}</p>
                          <p className="text-[10px] text-[#777] leading-[1.6]">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Ce template prend 30 minutes a configurer. Il couvre 80% des besoins de pilotage pipeline. Les 20% restants sont specifiques a votre cycle de vente et a votre organisation, et se configurent en iterant sur le template de base.</p>
                    <p>Un dernier conseil : ne configurez pas vos dashboards seul. Faites-le avec le VP Sales ou le manager commercial. Demandez-lui : &ldquo;quand tu ouvres ce dashboard, qu&apos;est-ce que tu veux voir en premier ?&rdquo; La reponse determine le widget en haut a gauche. C&apos;est aussi simple que ca.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Configurer vos dashboards HubSpot ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">On configure les 5 dashboards essentiels dans votre portail HubSpot, avec les bons widgets, les bonnes metriques et le partage automatise. En 1 semaine, votre equipe pilote ses ventes avec des donnees, pas des intuitions.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4B5EFC] text-white rounded-lg text-[13px] font-medium hover:bg-[#3D4FE0] transition-colors">
                  Configurer vos dashboards
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
