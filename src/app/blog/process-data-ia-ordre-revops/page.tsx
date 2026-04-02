"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Process, Data, IA : pourquoi l'ordre compte en RevOps",
  description: "L'IA ne compense pas une fondation bancale. Pourquoi l'evolution naturelle des RevOps suit un chemin precis : structurer les process, normaliser les donnees, puis deployer l'IA. Avec des exemples concrets, un framework d'evaluation et une roadmap en 3 phases pour des RevOps augmentees.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/process-data-ia-ordre-revops" },
  articleSection: "RevOps",
  wordCount: 3200,
  inLanguage: "fr",
};

const sections = [
  { id: "illusion-ia", title: "L'illusion de l'IA magique" },
  { id: "cout-desordre", title: "Le cout du desordre" },
  { id: "phase-process", title: "Phase 1 : Process" },
  { id: "phase-data", title: "Phase 2 : Data" },
  { id: "phase-ia", title: "Phase 3 : IA" },
  { id: "diagnostic", title: "Ou en etes-vous ?" },
  { id: "erreurs", title: "Les 5 erreurs classiques" },
  { id: "roadmap", title: "La roadmap 90 jours" },
  { id: "multiplicateur", title: "L'IA comme multiplicateur" },
  { id: "approche-ceres", title: "Notre approche Ceres" },
];

const relatedArticles = [
  { title: "Data quality CRM : audit et nettoyage en 5 etapes", slug: "data-quality-crm-audit-nettoyage", category: "Data & Reporting", color: "#22C55E" },
  { title: "Comment utiliser l'IA dans votre processus commercial B2B", slug: "ia-processus-commercial-vente-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "RevOps pour startups : par ou commencer quand on est petit", slug: "revops-startups-par-ou-commencer", category: "RevOps", color: "#FF7A59" },
];

export default function ProcessDataIAArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("illusion-ia");
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

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

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "4%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "14%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "28%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "42%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "56%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "84%", width: 240, height: 240, borderRadius: "50%", background: "#22C55E", opacity: 0.06, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Process%2C%20Data%2C%20IA%20%3A%20pourquoi%20l%27ordre%20compte%20en%20RevOps&url=https://ceres.agency/blog/process-data-ia-ordre-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/process-data-ia-ordre-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Process, Data, IA</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">15 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Process, Data, IA : pourquoi l&apos;ordre compte en RevOps
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Tout le monde veut parler d&apos;IA. Personne ne veut parler des CRM ou 40% de la donnee est obsolete, ou les etapes de pipeline sont interpretees differemment par chaque commercial, ou le marketing tague les leads &ldquo;a la main&rdquo; avec des conventions qui changent tous les trimestres. On parle beaucoup d&apos;automatiser. Tres peu de structurer. Et pourtant, l&apos;ordre compte.
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
              {/* ============================================ */}
              {/* Section 1 : L'illusion de l'IA magique */}
              {/* ============================================ */}
              <section id="illusion-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;illusion de l&apos;IA magique</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;humain a des limites cognitives. L&apos;IA, non. Elle scale, elle ne fatigue pas, elle traite des volumes qu&apos;aucune equipe ne pourra jamais absorber. C&apos;est exactement ce qui rend la promesse si seduisante et la desillusion si brutale.</p>
                    <p>Parce qu&apos;un modele nourri avec des donnees incoherentes produit des resultats incoherents. Pas besoin de Claude pour ca. Une formule Excel suffit a vous le prouver.</p>
                    <p>Depuis 18 mois, on observe le meme schema chez la majorite des entreprises B2B qui viennent nous voir. Elles ont investi dans des outils d&apos;IA -- scoring predictif, enrichissement automatique, chatbots, resume de calls. Les demos etaient spectaculaires. Les resultats en production, decevants.</p>
                    <p>Le probleme n&apos;est presque jamais l&apos;outil. Le probleme, c&apos;est ce qu&apos;on lui donne a manger.</p>
                    <p>Un scoring IA entraine sur un pipeline ou &ldquo;Qualification&rdquo; signifie une chose differente pour chaque commercial va produire des scores incoherents. Un enrichissement automatique qui injecte des donnees dans un CRM ou les conventions de nommage changent tous les trimestres va creer plus de confusion qu&apos;il n&apos;en resout. Un modele de prediction de churn qui s&apos;appuie sur des dates de renouvellement saisies a la main (dont 30% sont fausses) va generer des alertes fantomes.</p>
                    <p>L&apos;IA a une dependance absolue : la qualite de ce qu&apos;on lui donne. Et cette qualite depend de deux choses qui la precedent : les process et la data.</p>
                  </div>

                  {/* Visual: The broken chain */}
                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Ce qui se passe quand on deploie l&apos;IA sans fondation</p>
                    <div className="space-y-3">
                      {[
                        { input: "Pipeline ou 'Qualification' = 5 definitions differentes", output: "Score predictif incoherent", icon: "?", inputColor: "#EF4444", outputColor: "#EF4444" },
                        { input: "Conventions de tagging qui changent chaque trimestre", output: "Segmentation IA inutilisable", icon: "!", inputColor: "#F59E0B", outputColor: "#EF4444" },
                        { input: "30% des dates de renouvellement saisies a la main sont fausses", output: "Alertes churn fantomes", icon: "x", inputColor: "#FF7A59", outputColor: "#EF4444" },
                      ].map((item) => (
                        <div key={item.input} className="flex items-center gap-2">
                          <div className="flex-1 rounded-lg border border-[#E8E8E8] bg-white p-2.5">
                            <p className="text-[9px] text-[#555] leading-[1.5]">{item.input}</p>
                          </div>
                          <div className="shrink-0 w-8 h-8 rounded-full bg-[#EF4444]/10 flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                          </div>
                          <div className="flex-1 rounded-lg border border-[#EF4444]/20 bg-[#FEF2F2] p-2.5">
                            <p className="text-[9px] text-[#EF4444] font-medium leading-[1.5]">{item.output}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[9px] text-[#BBB] mt-3 text-center">Garbage in, garbage out. Meme avec l&apos;IA la plus avancee du marche.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 2 : Le cout du desordre */}
              {/* ============================================ */}
              <section id="cout-desordre" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le cout reel du desordre operationnel</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de parler de solution, quantifions le probleme. Chez Ceres, on audite des stacks RevOps toutes les semaines. Voici ce qu&apos;on trouve systematiquement, quel que soit le secteur, la taille de l&apos;entreprise ou le CRM utilise.</p>
                    <p>Le desordre est rarement visible. Il ne genere pas d&apos;erreurs 500. Il ne fait pas planter le CRM. Il se manifeste en silence : des campagnes qui sous-performent, des forecasts qui ne se realisent pas, des equipes qui ne font pas confiance a leurs propres dashboards.</p>
                    <p>Et le plus insidieux : chaque silo -- Sales, Marketing, CS, Finance -- a developpe ses propres conventions, ses propres contournements, ses propres definitions. Quand on demande a un VP Sales et a un VP Marketing ce que signifie un &ldquo;MQL&rdquo;, on obtient deux reponses differentes dans 80% des cas. C&apos;est cette fragmentation silencieuse qui rend l&apos;IA inoperante.</p>
                  </div>

                  {/* Key stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { stat: "40%", label: "de donnees obsoletes en moyenne dans un CRM B2B", color: "#EF4444" },
                      { stat: "80%", label: "des entreprises n'ont pas de definition alignee du MQL", color: "#FF7A59" },
                      { stat: "30%", label: "du temps commercial perdu a compenser le desordre", color: "#6C5CE7" },
                      { stat: "3x", label: "plus de temps pour un reporting fiable sans process clair", color: "#F59E0B" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[20px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* The 4 silos problem */}
                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Chaque silo a son propre probleme</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { team: "Sales", problem: "Les etapes de pipeline sont interpretees differemment par chaque commercial. 'Demo planifiee' = 'j'ai envoye un lien Calendly' pour l'un, 'le prospect a confirme' pour l'autre.", color: "#FF7A59", icon: "S" },
                        { team: "Marketing", problem: "Les conventions de tagging changent tous les trimestres. UTM inconsistants, lifecycle stages manuels, lead sources qui melangent canal et campagne.", color: "#6D00CC", icon: "M" },
                        { team: "Customer Success", problem: "Les health scores sont bases sur des signaux subjectifs. 'Vert' parce que le client n'a pas appele depuis 3 mois -- ou parce qu'il a abandonne.", color: "#22C55E", icon: "C" },
                        { team: "Finance", problem: "Le MRR est calcule differemment selon le rapport. HubSpot dit 450K EUR, le fichier Excel du DAF dit 420K EUR, Stripe dit 462K EUR.", color: "#4B5EFC", icon: "F" },
                      ].map((s) => (
                        <div key={s.team} className="rounded-xl border border-[#E8E8E8] bg-white p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[9px] font-bold" style={{ background: s.color }}>{s.icon}</div>
                            <span className="text-[12px] font-semibold text-[#111]">{s.team}</span>
                          </div>
                          <p className="text-[10px] text-[#777] leading-[1.7]">{s.problem}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 3 : Phase 1 - Process */}
              {/* ============================================ */}
              <section id="phase-process" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#FF7A59]/10 flex items-center justify-center text-[14px] font-bold text-[#FF7A59]">1</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Phase 1 : Structurer les process</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de nettoyer la moindre donnee, il faut repondre a une question simple : <strong className="text-[#111]">est-ce que tout le monde parle le meme langage ?</strong></p>
                    <p>Un process, ce n&apos;est pas un workflow dans HubSpot. C&apos;est un accord explicite entre les equipes sur ce que signifie chaque etape du parcours revenue. Quand un deal passe de &ldquo;Decouverte&rdquo; a &ldquo;Proposition&rdquo;, qu&apos;est-ce que ca implique concretement ? Qui est responsable ? Quels champs doivent etre remplis ? Quels criteres objectifs valident le passage ?</p>
                    <p>Tant que ces questions n&apos;ont pas de reponse ecrite et partagee, toute automatisation est prematuree. Vous automatisez l&apos;ambiguite.</p>
                    <p>Voici les 6 process fondamentaux que chaque organisation Revenue doit formaliser avant toute initiative data ou IA :</p>
                  </div>

                  {/* Process checklist */}
                  <div className="mt-5 space-y-2">
                    {[
                      { title: "Definition des lifecycle stages", desc: "Subscriber, Lead, MQL, SQL, Opportunity, Customer, Evangelist. Chaque stage a une definition ecrite, des criteres d'entree mesurables, et un owner unique. Pas de zones grises.", color: "#FF7A59", example: "Exemple : un MQL = a telecharge au moins 2 contenus + correspond a l'ICP (industrie, taille, geo). Pas 'je pense que c'est un bon lead'." },
                      { title: "Criteres de passage des deal stages", desc: "Chaque etape du pipeline a des exit criteria objectifs. Pas 'je sens que ca avance' mais 'le budget est confirme, le decisionnaire est identifie, la timeline est definie'.", color: "#FF7A59", example: "Exemple : passage a 'Negociation' = proposition envoyee + feedback recu + decisionnaire implique dans au moins 1 call." },
                      { title: "Convention de nommage des proprietes", desc: "Un champ, un format, une convention. Partout. 'source_original', pas 'Source', 'OriginalSource', 'lead_source', et 'source d'acquisition'.", color: "#FF7A59", example: "Exemple : toutes les proprietes custom suivent le pattern [equipe]_[objet]_[attribut] : sales_deal_lost_reason, mkt_contact_lead_source." },
                      { title: "SLA marketing-sales", desc: "Quand le marketing genere un MQL, dans quel delai le sales doit-il le traiter ? Quel est le nombre minimum de tentatives de contact ? Quand le MQL est-il renvoye au marketing ?", color: "#FF7A59", example: "Exemple : MQL traite en moins de 4h ouvrees, minimum 3 tentatives en 5 jours, renvoi en nurturing apres 5 tentatives sans reponse." },
                      { title: "Taxonomie des motifs de perte", desc: "Pourquoi un deal est perdu. Pas un champ texte libre. Une liste fermee, mutuellement exclusive, exhaustive. C'est ce qui permettra a l'IA d'identifier des patterns.", color: "#FF7A59", example: "Exemple : Budget insuffisant | Timing | Concurrent choisi | Pas de besoin identifie | Injoignable | Champion parti. 6 raisons max." },
                      { title: "Process de handoff CS", desc: "Comment un deal ferme devient un client onboarde. Quelles informations sont transmises, par qui, dans quel delai. Le CS ne devrait jamais decouvrir le contexte en lisant les notes du commercial.", color: "#FF7A59", example: "Exemple : fiche de passation standardisee remplie par l'AE dans les 24h post-closing, incluant use case, stakeholders, risques identifies, engagements pris." },
                    ].map((p) => (
                      <div key={p.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{p.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{p.desc}</p>
                        <div className="rounded-lg bg-[#FFF7ED] border border-[#FFEDD5] p-2.5">
                          <p className="text-[10px] text-[#9A3412] leading-[1.5]">{p.example}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-[#111] p-4">
                    <p className="text-[11px] text-white/60 leading-[1.7]"><strong className="text-white">Le test ultime :</strong> prenez un nouveau commercial qui arrive lundi. Peut-il, en lisant un seul document, comprendre exactement comment traiter un lead, faire avancer un deal, et qualifier une opportunite ? Si la reponse est non, vos process ne sont pas formalises.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 4 : Phase 2 - Data */}
              {/* ============================================ */}
              <section id="phase-data" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">2</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Phase 2 : Normaliser les donnees</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une fois les process clairs, on peut enfin parler de donnees. Pas avant. Parce que nettoyer des donnees sans savoir quels process elles servent, c&apos;est comme ranger un appartement sans savoir qui y habite.</p>
                    <p>La normalisation des donnees a un objectif precis : <strong className="text-[#111]">rendre chaque information exploitable par une machine</strong>. Pas par un humain qui &ldquo;comprend ce que ca veut dire&rdquo;. Par une machine qui a besoin de coherence absolue.</p>
                    <p>C&apos;est la grande difference entre un CRM &ldquo;qui fonctionne&rdquo; et un CRM &ldquo;pret pour l&apos;IA&rdquo;. Votre equipe sait peut-etre que &ldquo;FR&rdquo;, &ldquo;France&rdquo; et &ldquo;fra&rdquo; designent le meme pays. Un modele d&apos;IA, lui, voit trois valeurs distinctes.</p>
                  </div>

                  {/* Before/After data table */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Before */}
                    <div className="rounded-xl border border-[#EF4444]/20 bg-[#FEF2F2] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                        <span className="text-[10px] font-semibold text-[#EF4444]">AVANT : ce que l&apos;IA recoit</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[9px]">
                        {[
                          { field: "pays", values: ["France", "FR", "fra", "FRANCE", ""] },
                          { field: "industrie", values: ["SaaS", "Software", "Tech", "saas", "IT/Software"] },
                          { field: "deal_stage", values: ["Demo OK", "Demo faite", "Demo planifiee", "En demo", "Demo done"] },
                          { field: "lead_source", values: ["Google", "Ads", "Google Ads", "SEA", "PPC"] },
                        ].map((row) => (
                          <div key={row.field} className="rounded bg-white p-2">
                            <span className="text-[#EF4444] font-semibold">{row.field}:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {row.values.map((v) => (
                                <span key={v} className="px-1.5 py-0.5 rounded bg-[#FEE2E2] text-[#991B1B]">{v || "(vide)"}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* After */}
                    <div className="rounded-xl border border-[#22C55E]/20 bg-[#F0FDF4] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                        <span className="text-[10px] font-semibold text-[#22C55E]">APRES : ce que l&apos;IA devrait recevoir</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[9px]">
                        {[
                          { field: "pays", value: "FR", rule: "ISO 3166-1 alpha-2" },
                          { field: "industrie", value: "saas", rule: "Liste fermee, lowercase" },
                          { field: "deal_stage", value: "demo_completed", rule: "Enum, snake_case, exit criteria valides" },
                          { field: "lead_source", value: "paid_search", rule: "Taxonomie canal/medium/campagne" },
                        ].map((row) => (
                          <div key={row.field} className="rounded bg-white p-2">
                            <span className="text-[#22C55E] font-semibold">{row.field}:</span>
                            <span className="ml-2 px-1.5 py-0.5 rounded bg-[#DCFCE7] text-[#166534]">{row.value}</span>
                            <p className="text-[8px] text-[#999] mt-0.5">{row.rule}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les 4 chantiers data essentiels :</strong></p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Deduplication.</strong> Identifier et fusionner les doublons. En moyenne, 15-25% de doublons dans un CRM B2B. Outils : Dedupely, Operations Hub, Insycle. Automatiser la detection continue, pas juste un nettoyage ponctuel.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Standardisation.</strong> Convertir chaque champ en format machine-readable. Pays en ISO, telephones en E.164, industries en liste fermee, deal stages en enums. Les workflows HubSpot peuvent faire 80% du travail via des copy-property + format rules.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Enrichissement.</strong> Combler les trous. Les champs vides ne sont pas neutres pour l&apos;IA, ils sont toxiques. Un contact sans industrie sera exclu de toute segmentation. Outils : Clay, Clearbit, Apollo. Automatiser l&apos;enrichissement au moment de la creation du contact.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Gouvernance.</strong> Mettre en place les garde-fous pour que la data ne se degrade pas a nouveau. Champs obligatoires, validations en temps reel, audits mensuels automatises, alerts sur les anomalies. La gouvernance n&apos;est pas un projet, c&apos;est un systeme permanent.</li>
                    </ul>
                  </div>

                  {/* Completeness score mockup */}
                  <div className="mt-5 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-3">Impact de la normalisation sur l&apos;exploitabilite IA</p>
                    <div className="space-y-3">
                      {[
                        { label: "Contacts exploitables pour le scoring IA", before: 34, after: 91, color: "#22C55E" },
                        { label: "Deals avec pipeline stage coherent", before: 48, after: 96, color: "#4B5EFC" },
                        { label: "Segmentations marketing fiables", before: 22, after: 88, color: "#6D00CC" },
                        { label: "Forecasts avec marge d'erreur < 15%", before: 15, after: 78, color: "#FF7A59" },
                      ].map((m) => (
                        <div key={m.label} className="flex items-center gap-3">
                          <p className="text-[10px] text-[#666] w-[200px] shrink-0 leading-[1.3]">{m.label}</p>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[9px] text-[#CCC] w-8">{m.before}%</span>
                              <div className="flex-1 h-2 rounded-full bg-[#F2F2F2] overflow-hidden">
                                <div className="h-full rounded-full bg-[#E8E8E8]" style={{ width: `${m.before}%` }} />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-bold w-8" style={{ color: m.color }}>{m.after}%</span>
                              <div className="flex-1 h-2 rounded-full bg-[#F2F2F2] overflow-hidden">
                                <div className="h-full rounded-full" style={{ width: `${m.after}%`, background: m.color }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-3 text-[9px] text-[#999]">
                      <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#E8E8E8]" /> Avant normalisation</div>
                      <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#22C55E]" /> Apres normalisation</div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 5 : Phase 3 - IA */}
              {/* ============================================ */}
              <section id="phase-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC]/10 flex items-center justify-center text-[14px] font-bold text-[#6D00CC]">3</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Phase 3 : Deployer l&apos;IA comme multiplicateur</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Maintenant, et seulement maintenant, l&apos;IA devient un multiplicateur de force. Pas parce qu&apos;elle est plus intelligente qu&apos;avant. Parce que ce qu&apos;on lui donne est enfin exploitable.</p>
                    <p>La difference entre deployer l&apos;IA sur une fondation propre et sur une fondation bancale est spectaculaire. Memes outils, memes modeles, meme budget. Mais des resultats radicalement differents.</p>
                  </div>

                  {/* IA use cases that work with clean foundation */}
                  <div className="mt-5 space-y-3">
                    {[
                      { useCase: "Scoring predictif des leads", prereq: "Pipeline stages coherents + historique de conversion propre", result: "Precision du scoring passe de 40% (rule-based) a 82% (IA sur donnees propres)", color: "#6D00CC", icon: "S" },
                      { useCase: "Prediction du churn", prereq: "Health scores standardises + dates de renouvellement fiables", result: "Detection du churn 45 jours avant (vs. 10 jours quand les donnees sont sales)", color: "#4B5EFC", icon: "C" },
                      { useCase: "Routing intelligent des leads", prereq: "Segmentation fiable + SLA marketing-sales formalise", result: "Temps de traitement du MQL passe de 12h a 47 minutes en moyenne", color: "#22C55E", icon: "R" },
                      { useCase: "Reporting et forecast automatises", prereq: "Conventions de nommage + donnees financieres reconciliees", result: "Forecast avec 12% de marge d'erreur (vs. 35% avec donnees non normalisees)", color: "#FF7A59", icon: "F" },
                      { useCase: "Enrichissement continu", prereq: "Conventions de format + gouvernance des champs", result: "90% des fiches enrichies automatiquement sans creer de bruit", color: "#6D00CC", icon: "E" },
                    ].map((u) => (
                      <div key={u.useCase} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[9px] font-bold" style={{ background: u.color }}>{u.icon}</div>
                          <span className="text-[12px] font-semibold text-[#111]">{u.useCase}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                          <div className="rounded-lg bg-[#F8F8F8] p-2.5">
                            <p className="text-[8px] font-semibold text-[#999] uppercase tracking-wider mb-1">Prerequis</p>
                            <p className="text-[10px] text-[#666] leading-[1.5]">{u.prereq}</p>
                          </div>
                          <div className="rounded-lg p-2.5" style={{ background: `${u.color}10` }}>
                            <p className="text-[8px] font-semibold uppercase tracking-wider mb-1" style={{ color: u.color }}>Resultat</p>
                            <p className="text-[10px] text-[#666] leading-[1.5]">{u.result}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 6 : Diagnostic - Ou en etes-vous ? */}
              {/* ============================================ */}
              <section id="diagnostic" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Ou en etes-vous ? Le test en 3 minutes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Avant de lancer un projet IA, un projet data, ou meme un projet process, il faut savoir ou vous en etes. Voici un diagnostic rapide. Cochez honnetement.</p>
                  </div>

                  {/* Interactive-looking diagnostic */}
                  <div className="space-y-4">
                    {[
                      {
                        phase: "Process",
                        color: "#FF7A59",
                        items: [
                          "Vos lifecycle stages ont une definition ecrite et partagee",
                          "Chaque deal stage a des criteres de passage objectifs",
                          "Le SLA marketing-sales est documente et mesure",
                          "Les motifs de perte sont une liste fermee (pas un champ texte)",
                          "Un nouveau commercial peut comprendre le process en lisant un seul document",
                        ],
                      },
                      {
                        phase: "Data",
                        color: "#22C55E",
                        items: [
                          "Le taux de doublons dans votre CRM est inferieur a 5%",
                          "Les champs pays, industrie et source suivent un format unique",
                          "Plus de 80% des fiches contacts ont les champs essentiels remplis",
                          "Vous avez un processus automatise de deduplication",
                          "Le meme KPI (ex: MRR) donne le meme chiffre dans tous les outils",
                        ],
                      },
                      {
                        phase: "IA-ready",
                        color: "#6D00CC",
                        items: [
                          "Votre scoring est base sur des donnees fiables et coherentes",
                          "Vos segmentations marketing produisent des listes exploitables",
                          "Votre forecast a moins de 20% de marge d'erreur",
                          "Vous faites confiance a vos dashboards pour prendre des decisions",
                          "Vos equipes utilisent le CRM comme source unique de verite",
                        ],
                      },
                    ].map((block) => (
                      <div key={block.phase} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 rounded-full" style={{ background: block.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{block.phase}</span>
                        </div>
                        <div className="space-y-2">
                          {block.items.map((item) => (
                            <div key={item} className="flex items-start gap-2.5 text-[11px] text-[#666] leading-[1.5]">
                              <div className="w-4 h-4 rounded border border-[#DDD] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-[#111] p-5">
                    <p className="text-[12px] font-semibold text-white mb-3">Comment lire votre score :</p>
                    <div className="space-y-2">
                      {[
                        { range: "0-5 coches", level: "Priorite absolue : process", desc: "Commencez par formaliser vos definitions et conventions. Aucun outil ne compensera un desalignement organisationnel.", color: "#EF4444" },
                        { range: "6-10 coches", level: "Focus data", desc: "Vos process sont en place mais la donnee ne suit pas. Lancez un chantier de normalisation et de gouvernance.", color: "#F59E0B" },
                        { range: "11-15 coches", level: "Pret pour l'IA", desc: "Votre fondation est solide. L'IA va devenir un vrai multiplicateur de force. Commencez par le cas d'usage avec le ROI le plus immediat.", color: "#22C55E" },
                      ].map((s) => (
                        <div key={s.range} className="flex items-start gap-3">
                          <div className="shrink-0 px-2 py-0.5 rounded text-[9px] font-bold text-white" style={{ background: s.color }}>{s.range}</div>
                          <div>
                            <p className="text-[11px] font-medium text-white">{s.level}</p>
                            <p className="text-[10px] text-[#999] leading-[1.5]">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 7 : Les 5 erreurs classiques */}
              {/* ============================================ */}
              <section id="erreurs" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 5 erreurs qui font echouer les projets IA en RevOps</h2>
                  <div className="space-y-3">
                    {[
                      { num: "1", title: "Acheter l'outil avant de definir le process", desc: "On souscrit a un outil de scoring IA, on le branche sur le CRM, on attend les miracles. Mais le scoring ne sait pas ce qu'est un 'bon lead' parce que personne dans l'entreprise ne le sait non plus. L'outil produit des chiffres, l'equipe les ignore, l'abonnement est resilie a N+1.", color: "#EF4444" },
                      { num: "2", title: "Faire un nettoyage ponctuel sans gouvernance", desc: "On paie un prestataire pour nettoyer la base. 3 mois plus tard, on est revenu au point de depart. Le nettoyage sans gouvernance, c'est un regime sans changement d'habitudes alimentaires. Le poids revient toujours.", color: "#FF7A59" },
                      { num: "3", title: "Deployer l'IA sur un seul silo", desc: "Le marketing deploy un scoring IA en silo. Les sales ne font pas confiance aux scores parce qu'ils ne comprennent pas les criteres. Le CS utilise son propre systeme. L'IA amplifie la fragmentation au lieu de la resoudre.", color: "#F59E0B" },
                      { num: "4", title: "Confondre automatisation et structuration", desc: "On automatise l'envoi de sequences, le routing de leads, la creation de taches. Mais on automatise des process bancals. Le resultat : les erreurs sont plus rapides, pas moins nombreuses. L'automatisation sans structuration est un accelerateur de chaos.", color: "#6C5CE7" },
                      { num: "5", title: "Ignorer le change management", desc: "On deploie la meilleure stack du monde, mais personne n'a forme les equipes. Le commercial continue de saisir 'Demo faite' comme avant. Le marketing continue de tagger 'a la main'. L'outil est la, les habitudes n'ont pas change.", color: "#4B5EFC" },
                    ].map((e) => (
                      <div key={e.num} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-white text-[11px] font-bold" style={{ background: e.color }}>{e.num}</div>
                          <div>
                            <p className="text-[12px] font-semibold text-[#111] mb-1">{e.title}</p>
                            <p className="text-[11px] text-[#777] leading-[1.7]">{e.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 8 : La roadmap 90 jours */}
              {/* ============================================ */}
              <section id="roadmap" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La roadmap 90 jours : de la fondation a l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Voici le chemin que nous suivons chez Ceres avec chaque client. Pas de raccourci. Chaque phase conditionne la suivante. Le resultat a J+90 : une stack RevOps ou l&apos;IA produit des resultats reels, pas des demos impressionnantes.</p>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-0">
                    {[
                      {
                        phase: "Semaines 1-3",
                        title: "Audit & Alignement",
                        focus: "PROCESS",
                        color: "#FF7A59",
                        tasks: [
                          "Audit complet de la stack RevOps existante",
                          "Interviews des equipes Sales, Marketing, CS et Finance",
                          "Cartographie des process reels (pas les process documentes)",
                          "Redaction du playbook : definitions, conventions, SLAs",
                          "Validation et adoption du playbook par toutes les equipes",
                        ],
                        deliverable: "Playbook RevOps valide + criteres de passage documentes",
                      },
                      {
                        phase: "Semaines 4-7",
                        title: "Nettoyage & Normalisation",
                        focus: "DATA",
                        color: "#22C55E",
                        tasks: [
                          "Deduplication complete (contacts, entreprises, deals)",
                          "Standardisation des champs critiques (pays, industrie, source, stage)",
                          "Enrichissement des fiches avec Clay + Apollo",
                          "Mise en place des validation rules et champs obligatoires",
                          "Configuration des workflows de gouvernance automatisee",
                        ],
                        deliverable: "Base CRM propre + systeme de gouvernance operationnel",
                      },
                      {
                        phase: "Semaines 8-12",
                        title: "Activation IA",
                        focus: "IA",
                        color: "#6D00CC",
                        tasks: [
                          "Deploiement du premier use case IA (scoring ou enrichissement auto)",
                          "Configuration des alertes et automations intelligentes",
                          "Formation des equipes sur les nouveaux outils",
                          "Mesure des resultats a M+1 vs. baseline pre-projet",
                          "Iteration et ajustement base sur les feedbacks terrain",
                        ],
                        deliverable: "IA operationnelle + premiers resultats mesurables",
                      },
                    ].map((p, idx) => (
                      <div key={p.phase}>
                        <div className="rounded-xl border-2 p-5" style={{ borderColor: p.color }}>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[9px] font-bold text-white" style={{ background: p.color }}>{p.focus}</span>
                              <span className="text-[11px] font-semibold text-[#111]">{p.phase} : {p.title}</span>
                            </div>
                          </div>
                          <div className="space-y-1.5 mb-3">
                            {p.tasks.map((t) => (
                              <div key={t} className="flex items-start gap-2 text-[10px] text-[#666] leading-[1.5]">
                                <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: p.color }} />
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                          <div className="rounded-lg p-2.5" style={{ background: `${p.color}10` }}>
                            <p className="text-[9px] font-semibold" style={{ color: p.color }}>Livrable : {p.deliverable}</p>
                          </div>
                        </div>
                        {idx < 2 && (
                          <div className="flex justify-center py-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DDD" strokeWidth="2"><path d="M12 5v14m-7-7 7 7 7-7" /></svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 9 : L'IA comme multiplicateur */}
              {/* ============================================ */}
              <section id="multiplicateur" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;IA multiplie ce que vous avez construit</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;equation est simple. L&apos;IA est un coefficient multiplicateur. Si votre fondation vaut 10, l&apos;IA vous amene a 100. Si votre fondation vaut 2, l&apos;IA vous amene a 20. Et si votre fondation vaut 0 -- process inexistants, donnees incoherentes -- l&apos;IA vous amene a 0. Quel que soit le budget.</p>
                    <p>C&apos;est la raison pour laquelle deux entreprises avec le meme CRM, les memes outils IA, et le meme budget peuvent avoir des resultats radicalement differents. La difference n&apos;est pas technologique. Elle est operationnelle.</p>
                  </div>

                  {/* Visual: The multiplier equation */}
                  <div className="mt-6 rounded-xl bg-[#111] p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                      <div className="text-center">
                        <p className="text-[10px] text-[#666] mb-1">Fondation</p>
                        <p className="text-[10px] text-[#999]">(Process + Data)</p>
                      </div>
                      <span className="text-[24px] font-light text-[#444]">&times;</span>
                      <div className="text-center">
                        <p className="text-[10px] text-[#666] mb-1">Coefficient IA</p>
                        <p className="text-[10px] text-[#999]">(Outils + Modeles)</p>
                      </div>
                      <span className="text-[24px] font-light text-[#444]">=</span>
                      <div className="text-center">
                        <p className="text-[10px] text-[#666] mb-1">Impact reel</p>
                        <p className="text-[10px] text-[#999]">(Resultats business)</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { fondation: "Fondation solide (8/10)", coeff: "x10", result: "= 80", resultLabel: "ROI majeur, adoption forte, resultats durables", color: "#22C55E" },
                        { fondation: "Fondation partielle (4/10)", coeff: "x10", result: "= 40", resultLabel: "Resultats mitiges, poches de valeur, frustrations", color: "#F59E0B" },
                        { fondation: "Fondation absente (1/10)", coeff: "x10", result: "= 10", resultLabel: "Budget brule, equipes sceptiques, outil desactive", color: "#EF4444" },
                      ].map((row) => (
                        <div key={row.fondation} className="flex items-center gap-2 rounded-lg bg-[#1A1A1A] p-3">
                          <span className="text-[10px] text-[#999] flex-1">{row.fondation}</span>
                          <span className="text-[10px] text-[#666] font-mono">{row.coeff}</span>
                          <span className="text-[12px] font-bold font-mono" style={{ color: row.color }}>{row.result}</span>
                          <span className="text-[9px] flex-1 text-right" style={{ color: row.color }}>{row.resultLabel}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;evolution naturelle des Ops, c&apos;est : <strong className="text-[#111]">Process &rarr; Data &rarr; IA</strong>. Pas l&apos;inverse. Pas en parallele. Dans cet ordre.</p>
                    <p>Les entreprises qui respectent cette sequence ne sont pas celles qui ont le plus de budget ou les meilleurs outils. Ce sont celles qui obtiennent les meilleurs resultats. Parce qu&apos;elles construisent sur du solide.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ============================================ */}
              {/* Section 10 : Notre approche Ceres */}
              {/* ============================================ */}
              <section id="approche-ceres" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Notre approche chez Ceres</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Quand une entreprise vient nous voir en disant &ldquo;on veut deployer l&apos;IA dans nos RevOps&rdquo;, la premiere chose qu&apos;on fait, c&apos;est un diagnostic. Pas un diagnostic IA. Un diagnostic operationnel.</p>
                    <p>On regarde les process. On regarde la data. On parle aux equipes. Et dans 80% des cas, la recommandation n&apos;est pas &ldquo;achetez cet outil IA&rdquo;. C&apos;est &ldquo;alignez-vous sur une definition du MQL&rdquo; ou &ldquo;nettoyez vos 12 000 doublons&rdquo; ou &ldquo;formalisez vos criteres de passage de deal stage&rdquo;.</p>
                    <p>Ce n&apos;est pas glamour. Ca ne fait pas une bonne demo. Mais c&apos;est ce qui fait la difference entre un projet IA qui genere du ROI et un projet IA qui finit en shelfware.</p>
                    <p>On accompagne nos clients sur les trois phases -- Process, Data, IA -- parce qu&apos;on sait que sauter une etape coute plus cher que de prendre le temps de la faire correctement. Notre job, c&apos;est de poser les fondations qui rendent l&apos;IA inevitable, pas de vendre de l&apos;IA prematuree.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#FF7A59] to-[#E8533F] p-6 md:p-8 text-center">
                <h3 className="text-[17px] font-semibold text-white mb-3">Votre fondation est-elle prete pour l&apos;IA ?</h3>
                <p className="text-[13px] text-white/70 leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on commence toujours par un diagnostic operationnel gratuit de 30 minutes. On regarde vos process, votre data, et on vous dit honnetement ou vous en etes sur le chemin Process &rarr; Data &rarr; IA.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#FF7A59] rounded-lg text-[13px] font-medium hover:bg-[#F5F5F5] transition-colors">
                  Demander un diagnostic gratuit
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#FF7A59] transition-colors leading-[1.4]">{a.title}</p>
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