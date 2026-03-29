"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Scoring predictif IA : remplacer le lead scoring manuel",
  description: "Lead scoring classique vs scoring predictif par IA : comment le machine learning analyse vos deals CRM pour generer un score predictif. Implementation, outils, resultats concrets.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-scoring-predictif-lead-scoring" },
  articleSection: "IA & RevOps",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "scoring-classique", title: "Le scoring classique" },
  { id: "limites", title: "Ses limites" },
  { id: "scoring-predictif", title: "Le scoring predictif" },
  { id: "comment-ca-marche", title: "Comment ca marche" },
  { id: "hubspot-predictive", title: "HubSpot predictive" },
  { id: "claude-alternative", title: "Claude comme alternative" },
  { id: "implementation", title: "Implementation" },
  { id: "resultats", title: "Resultats concrets" },
  { id: "erreurs", title: "Erreurs a eviter" },
  { id: "approche-ceres", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Lead Scoring : le guide complet", slug: "lead-scoring-guide-complet", category: "CRM & HubSpot", color: "#FF7A59" },
  { title: "CRM et IA : intelligence artificielle au service du commercial", slug: "crm-ia-intelligence-artificielle", category: "IA", color: "#4B5EFC" },
  { title: "IA dans le processus commercial et la vente B2B", slug: "ia-processus-commercial-vente-b2b", category: "IA & Vente", color: "#6C5CE7" },
];

export default function ScoringPredictifIAPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("scoring-classique");

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
        <div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

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
                        ? "border-[#FF7A59] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Scoring predictif IA</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA</Badge>
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">15 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Scoring predictif IA : remplacer le lead scoring manuel
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le lead scoring manuel (regles if/then) a atteint ses limites. Le scoring predictif IA analyse les patterns de vos deals gagnes et perdus pour generer un score automatique, plus precis et qui s&apos;ameliore dans le temps. Ce guide couvre la theorie, les outils et l&apos;implementation pas a pas.
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
              {/* Section 1 — Scoring classique */}
              <section id="scoring-classique" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le lead scoring classique : regles manuelles</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le lead scoring classique repose sur des regles definies manuellement par les equipes marketing et sales. Le principe : chaque action ou attribut d&apos;un contact recoit un nombre de points. Quand le total atteint un seuil, le contact est considere comme qualifie (MQL) et passe aux commerciaux.</p>
                    <p>Les criteres sont generalement divises en deux categories. Le <strong className="text-[#111]">fit</strong> mesure la correspondance du lead avec votre ICP (Ideal Customer Profile). Il inclut des attributs statiques : secteur d&apos;activite (+10 si SaaS B2B), taille d&apos;entreprise (+15 si 50-200 employes), poste du contact (+20 si VP Sales ou CEO), localisation (+5 si France), budget declare (+10 si superieur a 50K euros). Le fit repond a la question : ce lead correspond-il au type de client que nous signons habituellement ?</p>
                    <p>L&apos;<strong className="text-[#111]">engagement</strong> mesure l&apos;interet manifeste du lead pour votre solution. Il inclut des actions comportementales : visite de la page pricing (+15), telechargement d&apos;un livre blanc (+10), ouverture d&apos;un email BOFU (+5), participation a un webinar (+20), demande de demo (+30), visite repetee du site (+3 par visite). L&apos;engagement repond a la question : ce lead est-il activement interesse par notre solution ?</p>
                    <p>Un lead avec un fit eleve mais un engagement faible est un &ldquo;bon profil endormi&rdquo; : il faut le nourrir avec du contenu. Un lead avec un engagement eleve mais un fit faible est un &ldquo;curieux non qualifie&rdquo; : il ne sera probablement pas un bon client. Le scoring idéal combine les deux dimensions pour identifier les leads qui sont a la fois bien profiles et activement engages.</p>
                    <p>Ce modele a fonctionne pendant des annees et reste la base de la majorite des implementations de lead scoring en 2026. Il a le merite d&apos;etre simple, transparent et facile a expliquer aux equipes. Mais il a des limites fondamentales qui deviennent de plus en plus visibles a mesure que les volumes de leads augmentent et que les parcours d&apos;achat se complexifient.</p>
                  </div>

                  {/* CSS Mockup: scoring classique */}
                  <div className="mt-6 p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Scoring classique - Exemple de grille</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-2">Fit (attributs)</p>
                        <div className="space-y-1.5">
                          {[
                            { criteria: "Secteur SaaS B2B", points: "+10" },
                            { criteria: "50-200 employes", points: "+15" },
                            { criteria: "VP Sales / CEO", points: "+20" },
                            { criteria: "Budget superieur a 50K", points: "+10" },
                            { criteria: "Localisation France", points: "+5" },
                          ].map((c) => (
                            <div key={c.criteria} className="flex items-center justify-between text-[11px]">
                              <span className="text-[#555]">{c.criteria}</span>
                              <span className="font-semibold text-[#FF7A59]">{c.points}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-2">Engagement (actions)</p>
                        <div className="space-y-1.5">
                          {[
                            { criteria: "Visite page pricing", points: "+15" },
                            { criteria: "Telechargement livre blanc", points: "+10" },
                            { criteria: "Participation webinar", points: "+20" },
                            { criteria: "Demande de demo", points: "+30" },
                            { criteria: "Ouverture email BOFU", points: "+5" },
                          ].map((c) => (
                            <div key={c.criteria} className="flex items-center justify-between text-[11px]">
                              <span className="text-[#555]">{c.criteria}</span>
                              <span className="font-semibold text-[#4B5EFC]">{c.points}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-center">
                      <p className="text-[11px] text-[#999]">Seuil MQL : <span className="font-semibold text-[#22C55E]">50 points</span> (fit minimum 20 + engagement minimum 30)</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 — Limites */}
              <section id="limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les limites du scoring manuel</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scoring manuel a cinq limites structurelles qui deviennent critiques a mesure que votre volume de leads augmente.</p>
                    <p><strong className="text-[#111]">Limite 1 : les biais humains.</strong> Les regles de scoring sont definies par les equipes, basees sur leur intuition et leur experience. Le VP Sales est convaincu que les leads du secteur fintech convertissent mieux. Le marketing pense que les telechargeurs de livres blancs sont les meilleurs leads. Ces hypotheses ne sont pas toujours verifiees par les donnees. L&apos;IA, elle, analyse les patterns reels dans les donnees sans biais preconcu.</p>
                    <p><strong className="text-[#111]">Limite 2 : l&apos;incapacite a detecter les patterns complexes.</strong> Le scoring manuel fonctionne avec des regles lineaires : +10 pour tel critere, +15 pour tel autre. Mais les patterns de conversion sont rarement lineaires. Un lead du secteur fintech qui visite la page pricing ET qui a ete refere par un client existant a peut-etre 5 fois plus de chances de convertir que la somme de ses points individuels. Le scoring manuel ne capture pas ces interactions entre variables.</p>
                    <p><strong className="text-[#111]">Limite 3 : la maintenance permanente.</strong> Les patterns de conversion evoluent. Ce qui fonctionnait il y a 6 mois ne fonctionne plus aujourd&apos;hui. Le scoring manuel doit etre recalibre regulierement, ce qui demande du temps et des ressources. En pratique, la plupart des equipes definissent le scoring une fois et ne le mettent jamais a jour. Le modele devient obsolete en quelques mois.</p>
                    <p><strong className="text-[#111]">Limite 4 : le volume de donnees inexploite.</strong> Le scoring manuel utilise typiquement 5 a 15 criteres. Mais votre CRM contient des centaines de donnees par contact : historique des interactions, proprietes de l&apos;entreprise, donnees d&apos;intent, signaux sociaux, sequences d&apos;emails, tickets de support. Le scoring manuel ne peut pas exploiter cette richesse de donnees. L&apos;IA peut analyser des centaines de variables simultanement.</p>
                    <p><strong className="text-[#111]">Limite 5 : pas d&apos;apprentissage automatique.</strong> Quand un lead score 80 mais ne convertit pas, le scoring manuel ne s&apos;ajuste pas. L&apos;equipe doit manuellement analyser pourquoi et modifier les regles. Le scoring predictif IA, lui, apprend de chaque deal gagne ou perdu et recalibre automatiquement le modele.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 — Le scoring predictif */}
              <section id="scoring-predictif" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">IA</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Le scoring predictif : l&apos;IA analyse vos deals</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le scoring predictif inverse la logique. Au lieu de definir des regles manuellement, on donne a un algorithme de machine learning l&apos;ensemble des donnees historiques de votre CRM : tous les deals gagnes, tous les deals perdus, toutes les proprietes des contacts et entreprises associes, toutes les interactions (emails, appels, reunions, pages visitees). L&apos;algorithme identifie les patterns qui differencient les deals gagnes des deals perdus et genere un score de probabilite de conversion pour chaque nouveau lead.</p>
                    <p>Concretement, l&apos;IA decouvre des correlations que l&apos;humain ne voit pas. Par exemple : les leads qui visitent la page &ldquo;integrations&rdquo; avant la page pricing ont un taux de conversion 3 fois superieur. Ou : les entreprises entre 80 et 150 employes dans le secteur e-commerce qui ont un CTO dans le comite de decision signent 65% du temps. Ces patterns sont trop complexes et trop nombreux pour etre detectes manuellement, mais l&apos;IA les identifie en analysant des milliers de deals.</p>
                    <p>Le resultat est un score de 0 a 100 pour chaque lead, representant la probabilite de conversion en client. Un lead a 85 signifie que, parmi les leads historiques avec un profil et un comportement similaires, 85% sont devenus clients. Ce score est recalcule en temps reel a chaque nouvelle interaction du lead, et le modele se recalibre periodiquement en integrant les nouveaux deals gagnes et perdus.</p>
                    <p>L&apos;avantage principal est la precision. Les etudes montrent que le scoring predictif augmente le taux de conversion des MQLs de 25 a 40% par rapport au scoring manuel, car il envoie aux commerciaux des leads reellement susceptibles de convertir, pas juste des leads qui ont coche les bonnes cases dans une grille arbitraire.</p>
                  </div>

                  {/* Comparison mockup: classique vs predictif */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-[12px] font-semibold text-[#999] mb-3">Scoring classique</p>
                      <ul className="space-y-2">
                        {[
                          "Regles definies manuellement",
                          "5-15 criteres utilises",
                          "Pas d\u2019apprentissage automatique",
                          "Maintenance manuelle requise",
                          "Biais humains integres",
                          "Score lineaire (somme de points)",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[11px] text-white/40">
                            <span className="w-1 h-1 rounded-full mt-1.5 shrink-0 bg-[#999]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-[#FF7A59]/30">
                      <p className="text-[12px] font-semibold text-[#FF7A59] mb-3">Scoring predictif IA</p>
                      <ul className="space-y-2">
                        {[
                          "Patterns detectes automatiquement",
                          "Centaines de variables analysees",
                          "Auto-apprentissage continu",
                          "Recalibrage automatique",
                          "Pas de biais humain",
                          "Score probabiliste (0-100%)",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[11px] text-white/60">
                            <span className="w-1 h-1 rounded-full mt-1.5 shrink-0 bg-[#FF7A59]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 — Comment ca marche */}
              <section id="comment-ca-marche" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment fonctionne le scoring predictif</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scoring predictif repose sur des algorithmes de machine learning supervise. Le terme &ldquo;supervise&rdquo; signifie que l&apos;algorithme apprend a partir d&apos;exemples etiquetes : des deals avec un resultat connu (gagne ou perdu). Voici le processus technique simplifie.</p>
                    <p><strong className="text-[#111]">Etape 1 : collecte des donnees.</strong> On extrait du CRM l&apos;ensemble des deals clos (gagnes et perdus) avec toutes les proprietes associees : attributs du contact (poste, departement, anciennete), attributs de l&apos;entreprise (secteur, taille, revenu, technologie utilisee), historique des interactions (emails envoyes/ouverts, pages visitees, contenus telecharges, appels, reunions), donnees de deal (montant, duree du cycle, nombre de decisionnaires, source du lead).</p>
                    <p><strong className="text-[#111]">Etape 2 : preparation des donnees.</strong> Les donnees sont nettoyees (valeurs manquantes traitees, doublons supprimes, formats normalises) et transformees en features (variables) exploitables par l&apos;algorithme. Par exemple, la date du premier email ouverte est transformee en &ldquo;nombre de jours entre le premier contact et l&apos;ouverture du premier email&rdquo;. Les donnees textuelles (notes, descriptions) peuvent etre vectorisees pour capturer des patterns semantiques.</p>
                    <p><strong className="text-[#111]">Etape 3 : entrainement du modele.</strong> L&apos;algorithme (typiquement un Random Forest, un Gradient Boosting ou un reseau de neurones) est entraine sur les donnees historiques. Il apprend les correlations entre les features et le resultat (gagne/perdu). Le jeu de donnees est divise en un ensemble d&apos;entrainement (70-80%) et un ensemble de test (20-30%) pour evaluer la performance du modele sur des donnees qu&apos;il n&apos;a jamais vues.</p>
                    <p><strong className="text-[#111]">Etape 4 : generation des scores.</strong> Le modele entraine est applique a chaque nouveau lead dans le CRM. Il genere un score de 0 a 100 representant la probabilite de conversion. Le score est mis a jour en temps reel (ou quotidiennement) a chaque nouvelle interaction du lead. Les leads avec les scores les plus eleves sont priorises par les commerciaux.</p>
                    <p><strong className="text-[#111]">Etape 5 : recalibrage.</strong> A mesure que de nouveaux deals se closent (gagnes ou perdus), le modele est reentrainer periodiquement (mensuellement ou trimestriellement) pour integrer les nouveaux patterns. C&apos;est la boucle d&apos;apprentissage continu qui rend le scoring predictif de plus en plus precis dans le temps.</p>
                  </div>

                  {/* Process flow */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-2 items-stretch">
                    {[
                      { step: "1", label: "Collecte", desc: "Export CRM", color: "#FF7A59" },
                      { step: "2", label: "Preparation", desc: "Nettoyage et features", color: "#FF7A59" },
                      { step: "3", label: "Entrainement", desc: "ML supervise", color: "#4B5EFC" },
                      { step: "4", label: "Scores", desc: "0-100 par lead", color: "#22C55E" },
                      { step: "5", label: "Recalibrage", desc: "Mensuel", color: "#6C5CE7" },
                    ].map((s, i) => (
                      <div key={s.step} className="flex-1 p-3 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] text-center relative">
                        <div className="w-6 h-6 rounded-full mx-auto mb-2 flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: s.color }}>{s.step}</div>
                        <p className="text-[11px] font-semibold text-[#111]">{s.label}</p>
                        <p className="text-[10px] text-[#999] mt-0.5">{s.desc}</p>
                        {i < 4 && <div className="hidden sm:block absolute right-[-8px] top-1/2 -translate-y-1/2 text-[#DDD] text-[14px] z-10">&rarr;</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 — HubSpot predictive */}
              <section id="hubspot-predictive" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">HubSpot Predictive Lead Scoring : possibilites et limites</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot propose depuis 2024 un scoring predictif natif dans ses plans Enterprise. Le systeme analyse automatiquement les donnees du CRM (proprietes de contact, interactions, deals clos) pour generer deux scores : la probabilite de conversion (Likelihood to close) et la priorite de contact (Contact priority). Le score est mis a jour quotidiennement et visible directement sur la fiche contact.</p>
                    <p>Les <strong className="text-[#111]">avantages</strong> du scoring predictif HubSpot sont la simplicite de mise en oeuvre (zero configuration, il s&apos;active en un clic), l&apos;integration native avec le CRM (le score est utilisable dans les workflows, les listes et les vues) et la transparence partielle (HubSpot affiche les facteurs qui contribuent positivement ou negativement au score).</p>
                    <p>Les <strong className="text-[#111]">limites</strong> sont reelles. Premierement, le modele est une boite noire : vous ne controlez pas les variables utilisees ni les poids attribues. Deuxiemement, il necessite un volume minimum de donnees (environ 300 deals clos sur les 12 derniers mois) pour fonctionner correctement. En dessous, le modele n&apos;a pas assez d&apos;exemples pour apprendre des patterns fiables. Troisiemement, il ne prend en compte que les donnees presentes dans HubSpot. Si des informations critiques sont stockees dans d&apos;autres outils (ERP, outil d&apos;intent, base de donnees externe), elles ne sont pas integrees au modele. Quatriemement, il ne permet pas de personnaliser le modele : vous ne pouvez pas ajouter des features custom ou exclure certaines variables.</p>
                    <p>Pour les PME avec un CRM HubSpot Enterprise et un volume suffisant de deals, le scoring predictif natif est un excellent point de depart. Il donne de meilleurs resultats que le scoring manuel dans la grande majorite des cas. Mais pour les entreprises avec des besoins plus avances (donnees multi-sources, modeles custom, explicabilite complete), il faut aller plus loin.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 — Claude comme alternative */}
              <section id="claude-alternative" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">IA generative</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Claude comme alternative au scoring predictif classique</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>L&apos;approche la plus innovante en 2026 est d&apos;utiliser un LLM (Large Language Model) comme Claude pour analyser les donnees CRM et generer un scoring predictif contextuel. Cette approche est differente du machine learning classique : au lieu d&apos;entrainer un modele statistique, on utilise la capacite de raisonnement du LLM pour analyser chaque deal individuellement.</p>
                    <p><strong className="text-white/80">Comment ca fonctionne.</strong> On exporte les donnees des deals clos (gagnes et perdus) sous forme structuree. On les fournit a Claude avec un prompt systeme qui lui demande d&apos;identifier les patterns de succes : quels attributs, comportements et sequences d&apos;interactions sont associes aux deals gagnes versus perdus. Claude genere une analyse des patterns, une grille de scoring ponderee et un score pour chaque nouveau lead.</p>
                    <p><strong className="text-white/80">L&apos;avantage majeur</strong> est l&apos;explicabilite. Contrairement a un modele ML classique qui donne un score sans explication claire, Claude peut expliquer en langage naturel pourquoi un lead a un score eleve ou faible : &ldquo;Ce lead a un score de 82 parce qu&apos;il correspond au profil des deals gagnes dans le secteur SaaS B2B (50-200 employes), qu&apos;il a visite la page integrations avant la page pricing (pattern associe a un taux de conversion 3x superieur) et que le cycle de decision implique un CTO (facteur positif identifie dans 67% des deals gagnes).&rdquo;</p>
                    <p><strong className="text-white/80">Les limites</strong> sont la scalabilite (analyser 10 000 leads un par un avec Claude est lent et couteux) et la reproductibilite (le LLM peut donner des scores legerement differents pour le meme lead a des moments differents). La meilleure approche est hybride : utiliser Claude pour l&apos;analyse des patterns et la generation de la grille de scoring, puis implementer cette grille dans HubSpot ou un outil d&apos;automatisation pour le scoring en temps reel.</p>
                    <p>Chez Ceres, nous utilisons Claude pour analyser les 100 a 200 derniers deals d&apos;un client, identifier les patterns de win/loss, et generer une grille de scoring personnalisee que nous implementons ensuite dans HubSpot. Le resultat est un scoring plus precis que le scoring manuel, plus transparent que le ML classique et adapte au contexte specifique de chaque entreprise.</p>
                  </div>

                  {/* Claude scoring example */}
                  <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] font-semibold text-[#FF7A59] mb-3">Exemple d&apos;analyse Claude</p>
                    <div className="text-[11px] text-white/50 font-mono leading-[1.8] space-y-2">
                      <p className="text-white/30">// Patterns identifies sur 187 deals clos</p>
                      <p><span className="text-[#22C55E]">Pattern 1 :</span> Secteur SaaS + 50-200 employes = win rate 72%</p>
                      <p><span className="text-[#22C55E]">Pattern 2 :</span> Visite integrations avant pricing = conversion x3.2</p>
                      <p><span className="text-[#22C55E]">Pattern 3 :</span> CTO dans le comite = +28% win rate</p>
                      <p><span className="text-[#FF7A59]">Pattern 4 :</span> Cycle superieur a 45j sans demo = -40% win rate</p>
                      <p><span className="text-[#FF7A59]">Pattern 5 :</span> Source cold email seul = win rate 12%</p>
                      <p className="text-white/30 pt-2">// Score genere pour le lead #4521</p>
                      <p><span className="text-[#4B5EFC]">Score :</span> <span className="text-white/80 font-semibold">82/100</span> (haute probabilite)</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 — Implementation */}
              <section id="implementation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Implementation pas a pas</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Voici le processus d&apos;implementation du scoring predictif, de l&apos;audit initial a la mise en production. Le timeline typique est de 4 a 6 semaines pour une premiere version fonctionnelle.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { num: "01", title: "Audit des donnees CRM", desc: "Verifier la qualite et le volume des donnees. Minimum 200 deals clos (gagnes + perdus) sur les 12 derniers mois. Identifier les proprietes disponibles et leur taux de remplissage. Nettoyer les doublons et les valeurs incoherentes.", timing: "Semaine 1" },
                      { num: "02", title: "Export et preparation", desc: "Exporter les deals avec toutes les proprietes associees (contact, entreprise, interactions). Transformer les donnees en features exploitables. Creer les variables derivees (duree du cycle, nombre d\u2019interactions, sequences de pages visitees).", timing: "Semaine 1-2" },
                      { num: "03", title: "Analyse des patterns", desc: "Utiliser Claude pour analyser les patterns de win/loss. Identifier les 10 a 20 facteurs les plus predictifs. Valider les patterns avec l\u2019equipe sales (est-ce coherent avec leur experience terrain ?).", timing: "Semaine 2" },
                      { num: "04", title: "Construction du modele", desc: "Definir la grille de scoring ponderee basee sur les patterns identifies. Attribuer des poids a chaque facteur en fonction de son impact sur le win rate. Tester le modele sur les deals historiques pour valider la precision.", timing: "Semaine 3" },
                      { num: "05", title: "Implementation dans HubSpot", desc: "Configurer les proprietes de scoring dans HubSpot. Creer les workflows qui calculent et mettent a jour le score. Definir les seuils de qualification (MQL, SQL). Connecter le score aux notifications et aux vues commerciales.", timing: "Semaine 3-4" },
                      { num: "06", title: "Test et calibrage", desc: "Lancer le scoring en parallele du systeme existant pendant 2 semaines. Comparer les predictions du nouveau scoring avec les resultats reels. Ajuster les poids si necessaire. Former l\u2019equipe sales a l\u2019utilisation du nouveau score.", timing: "Semaine 4-5" },
                      { num: "07", title: "Mise en production et suivi", desc: "Basculer sur le nouveau scoring comme systeme principal. Mettre en place un dashboard de suivi de la precision (taux de conversion par tranche de score). Planifier le recalibrage trimestriel.", timing: "Semaine 5-6" },
                    ].map((step) => (
                      <div key={step.num} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <span className="text-[18px] font-bold text-[#E8E8E8] shrink-0">{step.num}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-[12px] font-semibold text-[#111]">{step.title}</p>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F5F5F5] text-[#999]">{step.timing}</span>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 — Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Resultats concrets du scoring predictif</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les resultats du passage au scoring predictif sont mesurables et significatifs. Voici les benchmarks observes sur nos implementations et dans les etudes du marche.</p>
                    <p>Le taux de conversion MQL-vers-client augmente de 25 a 40%. La raison est simple : les commerciaux passent leur temps sur des leads reellement susceptibles de convertir, au lieu de traiter indifferemment tous les leads qui ont atteint un seuil de points arbitraire. Le scoring predictif concentre l&apos;effort commercial sur les opportunites les plus prometteuses.</p>
                    <p>Le cycle de vente se reduit de 15 a 25%. Les leads a fort score predictif sont generalement plus avances dans leur reflexion et plus proches de la decision. En les identifiant plus tot et en les priorisant, les commerciaux engagent la conversation au bon moment, ce qui accelere le cycle.</p>
                    <p>Le pipeline genere augmente de 20 a 35%. Meilleure priorisation signifie que les commerciaux ont plus de temps pour traiter les vrais bons leads, ce qui augmente le volume de deals qualifies dans le pipeline. C&apos;est un effet mecanique : meme nombre de commerciaux, mais mieux deployes.</p>
                    <p>Le taux de satisfaction des sales augmente significativement. La premiere raison de friction entre marketing et sales est la qualite des leads. Quand le scoring predictif envoie des leads plus qualifies, les sales reprennent confiance dans le systeme et traitent les leads plus rapidement. Le cercle vertueux s&apos;installe.</p>
                  </div>

                  {/* Results stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "+25-40%", label: "Conversion MQL vers client", color: "#22C55E" },
                      { value: "-15-25%", label: "Reduction du cycle de vente", color: "#4B5EFC" },
                      { value: "+20-35%", label: "Pipeline genere", color: "#FF7A59" },
                      { value: "4-6 sem.", label: "Delai d\u2019implementation", color: "#6C5CE7" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[22px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 — Erreurs */}
              <section id="erreurs" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Erreurs a eviter avec le scoring predictif</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scoring predictif n&apos;est pas une baguette magique. Voici les erreurs les plus courantes qui reduisent ou annulent les benefices attendus.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { num: "01", title: "Pas assez de donnees", desc: "Lancer un scoring predictif avec 50 deals clos est voue a l\u2019echec. Le minimum viable est 200 deals, idealement 500+. En dessous, le modele n\u2019a pas assez d\u2019exemples pour detecter des patterns fiables. Si vous n\u2019avez pas le volume, commencez par un scoring manuel bien calibre." },
                      { num: "02", title: "Donnees de mauvaise qualite", desc: "Garbage in, garbage out. Si vos proprietes CRM sont mal renseignees (secteur manquant dans 40% des fiches, montant du deal absent, source du lead incorrecte), le modele apprendra des patterns errones. La qualite des donnees est le prerequis absolu." },
                      { num: "03", title: "Ignorer le feedback des sales", desc: "Le scoring predictif doit etre valide par les commerciaux. Si le modele attribue un score eleve a un profil que les sales savent non qualifie, il y a un probleme dans les donnees ou le modele. L\u2019expertise terrain reste indispensable." },
                      { num: "04", title: "Ne jamais recalibrer", desc: "Un modele entraine une fois et jamais mis a jour perd en precision au fil du temps. Les patterns de conversion evoluent (nouveau produit, nouveau marche, changement de ICP). Recalibrez au minimum trimestriellement." },
                      { num: "05", title: "Traiter le score comme une verite absolue", desc: "Un score de 80 ne garantit pas la conversion. C\u2019est une probabilite, pas une certitude. Les commerciaux doivent continuer a qualifier humainement. Le score est un outil de priorisation, pas un substitut au jugement commercial." },
                    ].map((err) => (
                      <div key={err.num} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <span className="text-[18px] font-bold text-[#E8E8E8] shrink-0">{err.num}</span>
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{err.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{err.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 — Approche Ceres */}
              <section id="approche-ceres" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Notre methode</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche du scoring predictif chez Ceres</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, nous combinons l&apos;analyse IA (Claude) et l&apos;implementation HubSpot pour deployer un scoring predictif adapte a votre contexte. Notre approche hybride offre la precision du machine learning et la transparence de l&apos;IA generative.</p>
                    <p>Nous commencons par un audit de la qualite de vos donnees CRM et du volume de deals disponible. Si les prerequis sont remplis, nous exportons les donnees, analysons les patterns avec Claude, validons les resultats avec votre equipe sales, et implementons la grille de scoring dans HubSpot. Le tout en 4 a 6 semaines, avec des resultats mesurables des le premier mois.</p>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {[
                      "Audit qualite des donnees CRM et volume de deals",
                      "Export et preparation des donnees historiques",
                      "Analyse des patterns win/loss avec Claude",
                      "Validation des patterns avec l\u2019equipe sales",
                      "Construction et test de la grille de scoring",
                      "Implementation dans HubSpot (workflows, vues, notifications)",
                      "Formation de l\u2019equipe et recalibrage trimestriel",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[12px] text-white/50">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Related articles */}
              <section className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[14px] font-semibold text-[#111] mb-4">Articles lies</h2>
                  <div className="space-y-2">
                    {relatedArticles.map((a) => (
                      <Link key={a.slug} href={`/blog/${a.slug}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAFA] transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: a.color }} />
                          <span className="text-[13px] font-medium text-[#111] group-hover:text-[#444] transition-colors">{a.title}</span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-[#DDD] group-hover:text-[#999] group-hover:translate-x-0.5 transition-all"><path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section>
                <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a passer au scoring predictif ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On analyse vos donnees CRM, on identifie les patterns de conversion et on deploie un scoring predictif dans HubSpot. Premiers resultats en 4 semaines.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel decouverte
                  </a>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
