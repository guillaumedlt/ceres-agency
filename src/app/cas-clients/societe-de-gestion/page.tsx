"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client : IA Claude & Claude Code pour une societe de gestion de portefeuille",
  description: "Comment Ceres a deploye Claude et Claude Code pour automatiser les rapports reglementaires, le reporting client et la gestion de portefeuille d\u2019une societe de gestion connectee a SIX Financial.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-26",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "defis", title: "Les defis" },
  { id: "pourquoi-claude", title: "Pourquoi Claude et Claude Code" },
  { id: "rapports-reglementaires", title: "Rapports reglementaires" },
  { id: "reporting-client", title: "Reporting client" },
  { id: "gestion-portefeuille", title: "Gestion de portefeuille" },
  { id: "outils-internes", title: "Outils internes" },
  { id: "architecture-securite", title: "Architecture et securite" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Retour client" },
];

export default function SocieteDeGestionCaseStudy() {
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
    <div className="relative pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#6C5CE7] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#6C5CE7", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "22%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "58%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "90%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.05, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded bg-[#1B2A4A] flex items-center justify-center text-white text-[8px] font-bold">SG</div>
                <span className="text-[12px] font-semibold text-[#111]">Societe de gestion</span>
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
              <span className="text-[#666]">Societe de gestion</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">12 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B2A4A] flex items-center justify-center text-white text-[14px] font-bold">SG</div>
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Societe de gestion</h1>
                  <p className="text-[12px] text-[#999]">Gestion de portefeuille | Asset management | 30 personnes</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Deploiement de Claude et Claude Code pour automatiser les processus internes d&apos;une societe de gestion de portefeuille : rapports reglementaires, reporting client, assistance a la gestion et developpement d&apos;outils internes, le tout connecte aux flux de donnees SIX Financial.
              </p>

              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { value: "-70%", label: "Temps rapports AMF", color: "#22C55E" },
                    { value: "-80%", label: "Temps reporting clients", color: "#4B5EFC" },
                    { value: "5", label: "Outils internes crees", color: "#6C5CE7" },
                    { value: "3 sem.", label: "Time-to-delivery", color: "#FF7A59" },
                    { value: "2 mois", label: "ROI atteint", color: "#22C55E" },
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
                    <p>Notre client est une societe de gestion de portefeuille basee a Paris, agreee par l&apos;AMF (Autorite des marches financiers). Avec une trentaine de collaborateurs, elle gere plusieurs milliards d&apos;euros d&apos;actifs sous gestion pour le compte d&apos;investisseurs institutionnels et de clients prives fortunes. Pour des raisons de confidentialite, le nom de la societe n&apos;est pas communique.</p>
                    <p>L&apos;equipe se repartit entre les gerants de portefeuille, les analystes financiers, le middle office (operations et reporting), le compliance officer et l&apos;equipe administrative. Chaque jour, ces equipes manipulent des volumes importants de donnees financieres issues de multiples sources : cours de marche, positions, transactions, valorisations, benchmarks.</p>
                    <p>La societe est connectee a SIX Financial Information (groupe SIX, operateur de la bourse suisse) pour l&apos;ensemble de ses flux de donnees de marche : cours en temps reel, donnees de reference, indices, devises et taux. SIX fournit le socle de donnees sur lequel reposent toutes les operations de gestion.</p>
                    <p>Quand Ceres intervient, la direction constate que de nombreux processus internes restent largement manuels. Les gerants passent un temps considerable a compiler des donnees, les analystes produisent des rapports a la main dans Excel, et l&apos;equipe compliance prepare les reportings reglementaires de maniere artisanale. La direction souhaite explorer le potentiel de l&apos;IA pour optimiser ces processus, sans jamais compromettre la securite et la confidentialite des donnees financieres.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Collaborateurs", value: "~30" },
                      { label: "Actifs sous gestion", value: "Mds EUR" },
                      { label: "Source de donnees", value: "SIX Financial" },
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
                    <p>Avant de deployer la moindre solution IA, il fallait cartographier les points de friction. L&apos;audit initial a revele des processus manuels chronophages a tous les etages de l&apos;organisation.</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-5">
                    <p className="text-[12px] font-semibold text-[#EF4444] mb-4">Les problemes identifies</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { stat: "3 jours", desc: "Pour produire un rapport reglementaire AMF complet, entre extraction des donnees, calculs et mise en forme" },
                        { stat: "2 jours", desc: "Pour generer les reportings clients trimestriels personnalises, un par un, dans Excel puis Word" },
                        { stat: "60%", desc: "Du temps des analystes passe a compiler des donnees plutot qu\u2019a les analyser" },
                        { stat: "0", desc: "Outil interne sur mesure : tout repose sur Excel, des macros VBA vieillissantes et des copier-coller manuels" },
                        { stat: "5h/sem.", desc: "Passees par le compliance officer a verifier manuellement les limites de risque et les ratios reglementaires" },
                        { stat: "Manuel", desc: "Le rapprochement entre les positions internes et les donnees SIX se fait a la main, source d\u2019erreurs" },
                      ].map((p) => (
                        <div key={p.desc} className="flex gap-3 items-start">
                          <span className="text-[18px] font-bold text-[#EF4444] shrink-0 w-14 text-right">{p.stat}</span>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Au-dela de l&apos;inefficacite operationnelle, un enjeu majeur s&apos;est impose des le depart : la securite des donnees. Une societe de gestion manipule des informations extremement sensibles : positions des portefeuilles, strategies d&apos;investissement, donnees personnelles des clients. Toute solution d&apos;IA devait garantir que ces donnees ne sortent jamais du perimetre controle par la societe.</p>
                    <p>L&apos;autre contrainte technique : l&apos;integration avec SIX Financial. Les donnees de marche arrivent par des flux specifiques (API REST et fichiers batch), dans des formats proprietaires. Toute automatisation devait s&apos;integrer a ces flux sans perturber la chaine de traitement existante.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Pourquoi Claude et Claude Code */}
              <section id="pourquoi-claude" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi Claude et Claude Code</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres evaluation de plusieurs solutions d&apos;IA generative (GPT-4, Gemini, Mistral, Claude), le choix s&apos;est porte sur Claude d&apos;Anthropic. Voici les criteres qui ont fait la difference pour une societe de gestion soumise aux exigences les plus strictes en matiere de conformite.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Qualite du raisonnement sur les donnees financieres", desc: "Claude excelle dans l\u2019analyse de donnees structurees, les calculs financiers et la comprehension de documents reglementaires complexes. Les tests comparatifs ont montre un taux d\u2019erreur significativement plus bas que les alternatives sur les taches de calcul de ratios, d\u2019analyse de portefeuille et de generation de commentaires de gestion.", color: "#6C5CE7" },
                      { title: "Politique de confidentialite zero data retention", desc: "Anthropic propose une option de zero data retention sur l\u2019API Claude : les donnees envoyees ne sont ni stockees ni utilisees pour l\u2019entrainement du modele. C\u2019etait un prerequis non negociable pour le compliance officer. Aucune donnee de portefeuille, aucune information client ne reste chez le fournisseur d\u2019IA.", color: "#4B5EFC" },
                      { title: "Fenetre de contexte etendue", desc: "Avec 200K tokens de contexte, Claude peut traiter un rapport reglementaire complet, un portefeuille de plusieurs centaines de lignes ou un historique de performance sur plusieurs annees en une seule requete. Pas besoin de decouper les donnees en morceaux, ce qui reduit les erreurs et simplifie l\u2019architecture.", color: "#22C55E" },
                      { title: "Claude Code pour le developpement rapide", desc: "Claude Code a permis de developper les outils internes a une vitesse sans precedent. Au lieu de recruter des developpeurs et de planifier des sprints sur plusieurs mois, l\u2019equipe a pu construire des scripts, des connecteurs API et des dashboards en quelques jours. Le time-to-value est passe de mois a semaines.", color: "#FF7A59" },
                      { title: "Fiabilite et consistance des outputs", desc: "Dans un contexte reglementaire, la consistance des reponses est critique. Claude produit des outputs structures et previsibles quand on le guide avec des prompts bien concus. Les rapports generes suivent le meme format a chaque execution, ce qui est indispensable pour des documents destines a l\u2019AMF ou aux clients.", color: "#D4A27F" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 items-start rounded-xl border border-[#F2F2F2] p-4">
                        <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={{ background: item.color }} />
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{item.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 border-b border-[#E8E8E8]">
                      <span className="text-[10px] text-[#999] font-medium">Comparatif : criteres de selection</span>
                    </div>
                    <div className="bg-white p-4">
                      <div className="space-y-3">
                        {[
                          { label: "Zero data retention (API)", value: "Claude (Anthropic)", pct: 100, color: "#22C55E" },
                          { label: "Qualite raisonnement financier", value: "Claude > GPT-4 > Gemini", pct: 90, color: "#6C5CE7" },
                          { label: "Fenetre de contexte", value: "200K tokens", pct: 85, color: "#4B5EFC" },
                          { label: "Vitesse de dev avec Claude Code", value: "10x vs traditionnel", pct: 95, color: "#FF7A59" },
                        ].map((row) => (
                          <div key={row.label}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[11px] text-[#555]">{row.label}</span>
                              <span className="text-[11px] font-semibold text-[#111]">{row.value}</span>
                            </div>
                            <div className="h-3 bg-[#F5F5F5] rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: row.color }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Cas d'usage 1 : Rapports reglementaires */}
              <section id="rapports-reglementaires" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Cas d&apos;usage 1</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Automatisation des rapports reglementaires</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Les societes de gestion agreees AMF doivent produire regulierement des rapports reglementaires : reporting AIFM, rapports de gestion, fiches de suivi des risques, declarations de franchissements de seuils, rapports de conformite. Chacun de ces documents suit un format precis, exige des calculs specifiques et doit etre parfaitement exact.</p>
                    <p>Avant l&apos;intervention de Ceres, la production d&apos;un rapport reglementaire complet prenait en moyenne 3 jours de travail. Le compliance officer extrayait manuellement les donnees de portefeuille, effectuait les calculs de ratios dans Excel, verifiait chaque chiffre, puis mettait en forme le document final dans Word.</p>
                  </div>

                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Extraction automatique des donnees", desc: "Un script Python developpe avec Claude Code extrait automatiquement les positions du portefeuille, les valorisations et les transactions depuis le systeme de gestion interne. Les donnees de marche (cours, indices, devises) sont tirees en parallele des flux SIX Financial via leur API REST.", color: "#6C5CE7" },
                      { num: "2", title: "Calcul des ratios reglementaires", desc: "Claude recoit les donnees anonymisees (codes ISIN, quantites, valorisations, sans identification des clients) et calcule l\u2019ensemble des ratios exiges par l\u2019AMF : ratio d\u2019emprise, ratio de diversification, respect des limites de concentration, exposition par classe d\u2019actifs, levier, ratios de liquidite.", color: "#4B5EFC" },
                      { num: "3", title: "Detection des depassements", desc: "Claude compare automatiquement chaque ratio calcule aux seuils reglementaires et aux limites internes definies dans le prospectus du fonds. En cas de depassement ou de proximite de seuil (alerte a 90%), un rapport d\u2019alerte est genere avec la nature du depassement, le ratio concerne et la correction suggeree.", color: "#22C55E" },
                      { num: "4", title: "Generation du rapport au format AMF", desc: "Claude genere le rapport complet au format attendu par l\u2019AMF : structure normee, tableaux de ratios, commentaires de gestion, annexes. Le document sort pret a etre relu et signe par le RCCI (Responsable de la conformite et du controle interne).", color: "#FF7A59" },
                      { num: "5", title: "Relecture et validation humaine", desc: "Le compliance officer relit le rapport genere, verifie les points critiques et valide. Le temps de relecture est passe de 3 jours de production complete a 2 heures de verification ciblee. Le taux d\u2019erreur a chute car Claude ne fait pas de fautes de copier-coller.", color: "#D4A27F" },
                    ].map((point, i) => (
                      <div key={point.num}>
                        <div className="flex gap-3 items-start py-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: point.color }}>
                            {point.num}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-white mb-1">{point.title}</p>
                            <p className="text-[12px] text-white/40 leading-[1.65]">{point.desc}</p>
                          </div>
                        </div>
                        {i < 4 && <div className="ml-4 w-px h-4 bg-white/10" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "3 jours", label: "Avant (production manuelle)", color: "#EF4444" },
                      { value: "4 heures", label: "Apres (generation + relecture)", color: "#22C55E" },
                      { value: "-70%", label: "Temps de production", color: "#4B5EFC" },
                      { value: "0", label: "Erreurs de calcul", color: "#6C5CE7" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/5 p-3 text-center">
                        <div className="text-[18px] font-bold" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-[10px] text-white/30 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Cas d'usage 2 : Reporting client */}
              <section id="reporting-client" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Cas d&apos;usage 2 : Reporting client automatise</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque trimestre, la societe de gestion produit des rapports de performance personnalises pour chacun de ses clients. Ces rapports incluent la performance du portefeuille, la comparaison avec le benchmark, l&apos;attribution de performance par classe d&apos;actifs, les mouvements du trimestre et un commentaire de gestion contextualise.</p>
                    <p>Avec plusieurs dizaines de clients et des mandats tous differents, la production de ces rapports etait un cauchemar logistique. L&apos;equipe middle office passait 2 jours complets chaque trimestre a generer ces documents un par un, en adaptant manuellement les donnees, les graphiques et les commentaires.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Extraction des donnees de performance", desc: "Le script connecte au systeme de gestion extrait automatiquement les performances par portefeuille : rendement brut, rendement net de frais, volatilite, Sharpe ratio, max drawdown. Les donnees de benchmark correspondantes sont tirees des flux SIX Financial (indices MSCI, STOXX, obligations souveraines).", count: "Auto" },
                      { title: "Attribution de performance", desc: "Claude analyse la decomposition de la performance par classe d\u2019actifs (actions, obligations, monetaire, alternatif), par zone geographique et par secteur. Il identifie les principaux contributeurs et detracteurs de performance sur le trimestre, avec les chiffres exacts.", count: "Par fonds" },
                      { title: "Commentaire de gestion personnalise", desc: "Claude genere un commentaire de gestion adapte a chaque mandat : contexte macroeconomique, decisions d\u2019allocation prises pendant le trimestre, justification des arbitrages, perspectives. Le ton est adapte au profil du client (institutionnel vs prive) et le commentaire reprend les elements specifiques du mandat.", count: "Sur mesure" },
                      { title: "Mise en forme et export", desc: "Le rapport est genere au format PDF avec la charte graphique de la societe : page de garde, tableaux de performance, graphiques d\u2019evolution, attribution, commentaire, annexes. Chaque rapport est pret a etre envoye au client apres une relecture rapide par le gerant.", count: "PDF" },
                      { title: "Envoi et archivage", desc: "Les rapports valides sont automatiquement archives dans le systeme documentaire interne et un email de transmission est prepare pour chaque client avec le rapport en piece jointe. Le gerant n\u2019a plus qu\u2019a relire et cliquer sur envoyer.", count: "Automatise" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-[#111]">{item.title}</p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-medium">{item.count}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.65]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 border-b border-[#E8E8E8]">
                      <span className="text-[10px] text-[#999] font-medium">Avant vs Apres : production des reportings clients</span>
                    </div>
                    <div className="bg-white p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-4">
                          <p className="text-[11px] font-semibold text-[#EF4444] mb-3">Avant (processus manuel)</p>
                          <div className="space-y-2">
                            {[
                              "Extraction manuelle des donnees depuis 3 systemes",
                              "Calculs de performance dans des feuilles Excel",
                              "Commentaires de gestion rediges a la main",
                              "Mise en forme dans Word, un rapport a la fois",
                              "2 jours complets par trimestre",
                              "Risque d\u2019erreurs de copier-coller entre rapports",
                            ].map((item) => (
                              <p key={item} className="text-[10px] text-[#777] flex items-start gap-2">
                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#EF4444] shrink-0 mt-0.5"><path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-xl border border-[#E8F5E9] bg-[#F1F8E9] p-4">
                          <p className="text-[11px] font-semibold text-[#22C55E] mb-3">Apres (avec Claude)</p>
                          <div className="space-y-2">
                            {[
                              "Extraction automatique depuis SIX et le systeme interne",
                              "Calculs de performance automatises et verifies",
                              "Commentaires generes par Claude, adaptes au client",
                              "Export PDF automatique avec la charte graphique",
                              "4 heures par trimestre (generation + relecture)",
                              "Consistance garantie entre tous les rapports",
                            ].map((item) => (
                              <p key={item} className="text-[10px] text-[#555] flex items-start gap-2">
                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Cas d'usage 3 : Gestion de portefeuille */}
              <section id="gestion-portefeuille" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Cas d&apos;usage 3 : Assistant de gestion de portefeuille</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le troisieme cas d&apos;usage est le plus strategique. Claude a ete deploye comme assistant intelligent pour les gerants de portefeuille, connecte en temps reel aux donnees de marche via SIX Financial. L&apos;objectif : donner aux gerants un copilote capable d&apos;analyser les positions, de detecter les desequilibres et de suggerer des ajustements.</p>
                    <p>Il ne s&apos;agit pas d&apos;un robot de trading. Claude ne prend aucune decision d&apos;investissement et n&apos;execute aucun ordre. Il assiste le gerant en lui fournissant des analyses, des alertes et des suggestions qu&apos;il reste libre d&apos;accepter ou de refuser. La decision finale est toujours humaine.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Analyse des positions en temps reel", desc: "Claude recoit en continu les positions du portefeuille et les cours de marche SIX. Il peut a tout moment produire une vue synthetique : repartition par classe d\u2019actifs, par geographie, par secteur, par devise. Le gerant pose ses questions en langage naturel : \"Quelle est mon exposition aux actions US en dollar ?\" et obtient une reponse immediate et precise." },
                      { step: "02", title: "Detection des desequilibres", desc: "A chaque mise a jour des cours, Claude compare l\u2019allocation reelle du portefeuille a l\u2019allocation cible definie dans le mandat de gestion. Si une classe d\u2019actifs devie de plus de 2% de sa cible (seuil parametrable), une alerte est generee avec le detail de l\u2019ecart et la direction du rebalancing necessaire." },
                      { step: "03", title: "Suggestions de rebalancing", desc: "Quand un desequilibre est detecte, Claude propose des operations concretes pour ramener le portefeuille vers sa cible : \"Vendre 50K EUR d\u2019obligations souveraines zone euro pour acheter des actions emergentes, afin de ramener l\u2019allocation a la cible de 8% sur les emergents.\" Le gerant valide, ajuste ou refuse." },
                      { step: "04", title: "Analyse de scenarii", desc: "Le gerant peut demander a Claude de simuler l\u2019impact d\u2019un mouvement de marche sur le portefeuille : \"Quel serait l\u2019impact d\u2019une hausse de 100bps des taux euro sur mon portefeuille obligataire ?\" Claude calcule la sensibilite du portefeuille et estime l\u2019impact en valeur absolue et en pourcentage." },
                      { step: "05", title: "Veille et alertes marche", desc: "Claude surveille les flux d\u2019information SIX et genere des alertes contextualisees quand un evenement de marche concerne directement le portefeuille : publication de resultats d\u2019un titre en portefeuille, mouvement anormal de cours, changement de notation, annonce de dividende." },
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

                  <div className="mt-6 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <span className="text-[10px] text-white/50 font-mono">Exemple d&apos;interaction avec l&apos;assistant</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[10px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">
{`Gerant : "Quelle est la deviation de mon portefeuille
par rapport a la cible sur les actions Europe ?"

Claude : "Le portefeuille est actuellement a 34.2%
en actions Europe, contre une cible de 30%.
Deviation : +4.2 points, au-dela du seuil de 2%.

Suggestion : reduire l'exposition de 4.2 points,
soit environ 420K EUR, en allegerant les positions
suivantes (plus fortes surponderations vs benchmark) :
  - ASML Holding : 3.8% vs 2.5% cible (-130K EUR)
  - TotalEnergies : 2.9% vs 2.0% cible (-90K EUR)
  - Schneider Electric : 2.1% vs 1.5% cible (-60K EUR)

Les 140K EUR restants a repartir sur les lignes
les plus surponderees selon votre preference.

Souhaitez-vous que je prepare le detail des ordres ?"

Gerant : "Oui, prepare les ordres, mais garde ASML,
je veux renforcer sur un repli."

Claude : "Compris. Je recalcule en excluant ASML.
Nouvelles suggestions de reduction (290K EUR)..."
`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Cas d'usage 4 : Outils internes */}
              <section id="outils-internes" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Cas d&apos;usage 4</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Outils internes developpes avec Claude Code</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Au-dela des cas d&apos;usage IA directement lies a Claude, c&apos;est Claude Code qui a transforme la capacite de la societe a developper des outils internes. Sans equipe de developpement dediee, la societe dependait de prestataires externes pour le moindre outil custom, avec des delais de plusieurs mois et des couts disproportionnes.</p>
                    <p>Avec Claude Code, l&apos;equipe a pu construire 5 outils internes en 3 semaines, soit un rythme environ 10 fois plus rapide qu&apos;en developpement traditionnel. Voici les outils crees.</p>
                  </div>

                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Dashboard de suivi des portefeuilles", desc: "Application web interne affichant en temps reel les positions, performances, allocations et alertes de chaque fonds gere. Connecte aux flux SIX pour les cours et au systeme de gestion pour les positions. Interface responsive consultable sur tablette lors des comites d\u2019investissement.", color: "#6C5CE7" },
                      { num: "2", title: "Connecteur API SIX Financial", desc: "Module Python robuste d\u2019integration avec l\u2019API SIX Financial : recuperation des cours en temps reel, donnees de reference (ISIN, devises, secteurs), historiques de cours, donnees d\u2019indices. Gestion du rate limiting, du cache et des erreurs. Utilise par tous les autres outils.", color: "#4B5EFC" },
                      { num: "3", title: "Generateur de rapports PDF", desc: "Pipeline de generation automatique de documents PDF avec la charte graphique de la societe. Templates parametrables pour les rapports clients, les rapports reglementaires et les notes internes. Export en PDF haute qualite avec graphiques, tableaux et mise en page professionnelle.", color: "#22C55E" },
                      { num: "4", title: "Outil de rapprochement automatique", desc: "Script de reconciliation automatique entre les positions internes et les donnees SIX. Compare les valorisations, detecte les ecarts superieurs au seuil de tolerance et genere un rapport d\u2019anomalies. Remplace un processus manuel qui prenait 2 heures par jour.", color: "#FF7A59" },
                      { num: "5", title: "Bot d\u2019alertes compliance", desc: "Systeme de surveillance continue des ratios reglementaires et des limites de risque. Calcule les ratios en temps reel a partir des positions et des cours SIX, compare aux seuils definis dans les prospectus et envoie des alertes par email et sur un canal Teams dedie en cas de depassement ou de proximite de seuil.", color: "#D4A27F" },
                    ].map((point, i) => (
                      <div key={point.num}>
                        <div className="flex gap-3 items-start py-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: point.color }}>
                            {point.num}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-white mb-1">{point.title}</p>
                            <p className="text-[12px] text-white/40 leading-[1.65]">{point.desc}</p>
                          </div>
                        </div>
                        {i < 4 && <div className="ml-4 w-px h-4 bg-white/10" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { value: "5", label: "Outils developpes", color: "#22C55E" },
                      { value: "3 sem.", label: "Temps de developpement total", color: "#4B5EFC" },
                      { value: "10x", label: "Plus rapide qu\u2019en dev traditionnel", color: "#6C5CE7" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/5 p-3 text-center">
                        <div className="text-[18px] font-bold" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-[10px] text-white/30 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Architecture et securite */}
              <section id="architecture-securite" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Architecture et securite</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La securite des donnees n&apos;est pas un sujet accessoire dans une societe de gestion : c&apos;est une obligation reglementaire et une responsabilite fiduciaire envers les clients. L&apos;architecture deployee a ete concue pour garantir qu&apos;aucune donnee sensible ne quitte le perimetre controle par la societe.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Donnees on-premise, IA dans le cloud", desc: "Les donnees de portefeuille, les informations clients et les donnees proprietaires restent sur les serveurs internes de la societe. Seules des donnees anonymisees et aggregees sont envoyees a l\u2019API Claude pour les taches de generation de texte et d\u2019analyse. Les codes ISIN et les montants passent, mais jamais les noms des clients ni les identifiants de comptes." },
                      { step: "02", title: "API Claude avec zero data retention", desc: "L\u2019API Claude est configuree en mode zero data retention. Anthropic ne stocke pas les requetes, ne les utilise pas pour l\u2019entrainement et ne les conserve pas dans ses logs. Chaque appel API est ephemere : une fois la reponse retournee, plus aucune trace cote Anthropic." },
                      { step: "03", title: "Anonymisation systematique des donnees", desc: "Avant chaque appel a Claude, un module d\u2019anonymisation remplace les informations identifiantes par des placeholders. Les noms de clients deviennent \"Client_001\", les numeros de comptes sont masques. Le module de re-identification fonctionne uniquement en interne pour reconstituer les rapports finaux." },
                      { step: "04", title: "Chiffrement de bout en bout", desc: "Toutes les communications avec l\u2019API Claude transitent en HTTPS/TLS 1.3. Les donnees au repos sur les serveurs internes sont chiffrees en AES-256. Les cles de chiffrement sont gerees par le responsable informatique et stockees dans un coffre-fort materiel (HSM)." },
                      { step: "05", title: "Journalisation et audit trail", desc: "Chaque appel a l\u2019API Claude est journalise avec un identifiant unique, le timestamp, le type de requete et un hash du contenu. Le compliance officer peut a tout moment auditer quelles donnees ont ete envoyees, quand et par qui. Les logs sont conserves 5 ans conformement aux exigences AMF." },
                      { step: "06", title: "Conformite AMF validee", desc: "L\u2019architecture a ete validee par le RCCI de la societe et presentee a l\u2019AMF dans le cadre du controle annuel. Le regulateur a confirme que le dispositif respecte les exigences en matiere de sous-traitance informatique et de protection des donnees clients." },
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

                  <div className="mt-6 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <span className="text-[10px] text-white/50 font-mono">Architecture simplifiee du flux de donnees</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[10px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">
{`Serveurs internes (on-premise)
  |
  |-- Systeme de gestion (positions, transactions)
  |-- Donnees clients (noms, comptes) --> JAMAIS envoyees
  |
  v
Module d'anonymisation
  |
  |-- Remplace noms clients par "Client_XXX"
  |-- Masque numeros de comptes
  |-- Conserve : codes ISIN, montants, dates
  |
  v
API Claude (zero data retention)
  |
  |-- Analyse des donnees anonymisees
  |-- Generation de rapports et commentaires
  |-- Calculs de ratios et alertes
  |
  v
Module de re-identification (interne)
  |
  |-- Reconstitue les rapports avec les vrais noms
  |-- Export PDF final
  |-- Archivage sur serveurs internes

Flux SIX Financial (API REST)
  |
  |-- Cours en temps reel
  |-- Donnees de reference (ISIN, devises)
  |-- Indices et benchmarks
  --> Donnees publiques, pas de contrainte de confidentialite`}
                      </pre>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8F5E9] bg-[#F1F8E9] p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Validation reglementaire</p>
                    <p className="text-[11px] text-[#555] leading-[1.65]">L&apos;ensemble du dispositif a ete documente dans une politique interne de recours a l&apos;IA, validee par le RCCI et integree au programme d&apos;activite annuel de la societe. Le commissaire aux comptes a egalement ete informe du recours a l&apos;IA dans les processus de reporting. L&apos;AMF a ete informee dans le cadre du reporting annuel AIFM.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats apres 3 mois</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "-70%", label: "Temps de production des rapports reglementaires (de 3 jours a 4 heures)", color: "#22C55E" },
                      { value: "-80%", label: "Temps de production des reportings clients (de 2 jours a 4 heures)", color: "#4B5EFC" },
                      { value: "5", label: "Outils internes crees en 3 semaines avec Claude Code", color: "#6C5CE7" },
                      { value: "2h/jour", label: "Gagnes par le compliance officer sur la surveillance des ratios", color: "#FF7A59" },
                      { value: "2 mois", label: "Pour atteindre le retour sur investissement complet", color: "#22C55E" },
                      { value: "0", label: "Incident de securite ou fuite de donnees depuis le deploiement", color: "#D4A27F" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Les gerants passent leur temps a analyser et decider, plus a compiler des donnees dans Excel",
                      "Le compliance officer se concentre sur les sujets de fond au lieu de verifier des chiffres a la main",
                      "Les reportings clients sont envoyes dans les 48 heures suivant la cloture du trimestre, contre 2 semaines avant",
                      "L\u2019equipe middle office a ete redeployee sur des taches a plus forte valeur ajoutee",
                      "La societe est desormais autonome pour creer de nouveaux outils internes sans recourir a des prestataires",
                      "La conformite AMF est renforcee grace a la surveillance continue et automatisee des ratios",
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
                    <div className="w-12 h-12 rounded-full bg-[#1B2A4A]/10 flex items-center justify-center text-[#1B2A4A] text-[14px] font-bold shrink-0">DO</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;On etait sceptiques au depart. Dans notre metier, la confidentialite des donnees est sacree, et l&apos;idee d&apos;utiliser de l&apos;IA generative nous semblait incompatible avec nos obligations reglementaires. Ceres nous a montre que c&apos;etait non seulement possible, mais que l&apos;architecture pouvait etre plus securisee que nos processus manuels existants. Aujourd&apos;hui, Claude est devenu un outil du quotidien pour nos equipes. Les gerants l&apos;utilisent comme un copilote, le compliance officer ne pourrait plus s&apos;en passer pour la surveillance des ratios, et le middle office a gagne des jours entiers sur le reporting. Le plus impressionnant, c&apos;est la vitesse a laquelle Claude Code nous a permis de construire des outils internes que nous aurions mis des mois a faire developper en externe. En 3 semaines, nous avions 5 outils en production. Le ROI a ete atteint en 2 mois. Je recommande sans hesitation a toute societe de gestion qui hesite encore.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Directeur des Operations</p>
                          <p className="text-[11px] text-[#999]">Societe de gestion de portefeuille</p>
                        </div>
                        <div className="w-5 h-5 rounded bg-[#1B2A4A] flex items-center justify-center text-white text-[7px] font-bold ml-auto">SG</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous souhaitez deployer l&apos;IA dans votre entreprise ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On vous accompagne dans le deploiement de Claude et Claude Code : audit, architecture securisee, cas d&apos;usage, developpement d&apos;outils internes et formation des equipes.</p>
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
