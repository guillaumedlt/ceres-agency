"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment structurer votre pipeline commercial dans HubSpot",
  description: "Guide pratique pour structurer un pipeline commercial performant dans HubSpot. Les 5-7 etapes qui fonctionnent, criteres de passage, proprietes obligatoires, workflows et mesure de la velocite.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/pipeline-commercial-structurer-hubspot" },
  articleSection: "CRM",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "pipeline-mal-structure", title: "Le probleme" },
  { id: "etapes-qui-fonctionnent", title: "Les 5-7 etapes" },
  { id: "criteres-passage", title: "Criteres de passage" },
  { id: "proprietes-obligatoires", title: "Proprietes par etape" },
  { id: "deal-vs-lifecycle", title: "Deal stage vs lifecycle" },
  { id: "workflows-pipeline", title: "Les workflows" },
  { id: "mesurer-velocite", title: "Mesurer la velocite" },
  { id: "template-pipeline", title: "Template pret a copier" },
];

const relatedArticles = [
  { title: "KPI commerciaux : les indicateurs de vente a suivre", slug: "kpi-commerciaux-indicateurs-vente", category: "Data & Reporting", color: "#22C55E" },
  { title: "Forecasting commercial : methodes et outils", slug: "forecasting-commercial-methodes-outils", category: "Data & Reporting", color: "#22C55E" },
  { title: "Lead scoring : le guide complet", slug: "lead-scoring-guide-complet", category: "Process & Outils", color: "#6C5CE7" },
];

export default function PipelineCommercialStructurerHubspotArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pipeline-mal-structure");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Comment%20structurer%20votre%20pipeline%20commercial%20dans%20HubSpot&url=https://ceres.agency/blog/pipeline-commercial-structurer-hubspot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/pipeline-commercial-structurer-hubspot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Pipeline commercial HubSpot</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Comment structurer votre pipeline commercial dans HubSpot
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Votre pipeline HubSpot a probablement 12 etapes, dont 3 que personne n&apos;utilise et 2 qui veulent dire la meme chose. Un pipeline mal structure tue votre forecasting, fausse vos metriques et ralentit vos commerciaux. Ce guide vous donne la methode pour construire un pipeline propre, avec les criteres de passage, les proprietes obligatoires et les workflows associes.
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
              <section id="pipeline-mal-structure" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi votre pipeline est probablement mal structure</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On audite en moyenne 3 pipelines HubSpot par semaine. Dans 80% des cas, les memes problemes reviennent. Le pipeline a ete cree en 10 minutes le jour de l&apos;onboarding, jamais revu depuis, et chaque commercial l&apos;utilise differemment.</p>
                    <p>Les symptomes d&apos;un pipeline mal structure :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /><strong className="text-[#111]">Trop d&apos;etapes.</strong> Au-dela de 7 etapes, les commerciaux ne savent plus ou placer un deal. Des etapes comme &ldquo;En discussion&rdquo;, &ldquo;En negociation&rdquo;, &ldquo;En cours&rdquo; sont redundantes. Chaque etape supplementaire ajoute de la friction et de la confusion.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Pas de criteres de passage.</strong> Qu&apos;est-ce qui fait passer un deal de &ldquo;Qualification&rdquo; a &ldquo;Proposition&rdquo; ? Si la reponse est &ldquo;le feeling du commercial&rdquo;, votre pipeline ne mesure rien. Chaque passage d&apos;etape doit etre declenche par un evenement verifiable.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Des deals qui ne bougent pas.</strong> 40% des deals dans un pipeline moyen sont en stagnation depuis plus de 30 jours. Ce sont des deals morts que personne ne veut closer en &ldquo;Lost&rdquo; parce que ca fait baisser le pipeline. Resultat : le forecasting est faux.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Pas de probabilites realistes.</strong> HubSpot permet d&apos;assigner une probabilite de closing a chaque etape. Si toutes vos etapes sont a 50%, votre weighted pipeline ne veut rien dire. Les probabilites doivent refleter vos taux de conversion reels.</li>
                    </ul>
                    <p>Un pipeline propre change tout : le forecasting devient fiable, les managers savent ou intervenir, les commerciaux savent quoi faire a chaque etape. C&apos;est la fondation de tout le RevOps.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="etapes-qui-fonctionnent" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 5-7 etapes qui fonctionnent vraiment</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres avoir structure des centaines de pipelines, on recommande 6 etapes pour un cycle de vente B2B standard de 30 a 90 jours. Voici le pipeline qui fonctionne, avec la probabilite de closing associee a chaque etape.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Pipeline B2B recommande -- 6 etapes</p>
                    <div className="space-y-2">
                      {[
                        { stage: "Nouveau lead", probability: "10%", desc: "Lead identifie, pas encore qualifie. Entrant (inbound) ou sortant (outbound).", color: "#FF7A59", width: "100%" },
                        { stage: "Qualifie", probability: "20%", desc: "Budget, autorite, besoin et timing (BANT) valides. Le prospect a un probleme reel.", color: "#FF7A59", width: "85%" },
                        { stage: "Demo / Discovery", probability: "40%", desc: "Call de decouverte ou demo realise. Le prospect a vu la solution et montre de l'interet.", color: "#4B5EFC", width: "65%" },
                        { stage: "Proposition", probability: "60%", desc: "Proposition commerciale envoyee. Le prospect a les elements pour decider.", color: "#6C5CE7", width: "50%" },
                        { stage: "Negociation", probability: "80%", desc: "Le prospect negocie les termes (prix, scope, timing). La decision d'achat est prise.", color: "#22C55E", width: "35%" },
                        { stage: "Closed Won / Lost", probability: "100% / 0%", desc: "Deal signe ou perdu. Chaque deal doit finir dans l'un de ces deux statuts.", color: "#22C55E", width: "20%" },
                      ].map((item) => (
                        <div key={item.stage} className="rounded-lg bg-white border border-[#F2F2F2] p-3">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                              <span className="text-[11px] font-semibold text-[#111]">{item.stage}</span>
                            </div>
                            <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.probability}</span>
                          </div>
                          <p className="text-[10px] text-[#999] leading-[1.5] mb-2">{item.desc}</p>
                          <div className="h-1 rounded-full bg-[#F2F2F2]">
                            <div className="h-full rounded-full" style={{ background: item.color, width: item.width, opacity: 0.6 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Pourquoi 6 etapes et pas 10.</strong> Chaque etape ajoutee dilue la precision de votre forecasting. Avec 6 etapes, chaque passage est significatif et verifiable. Avec 10 etapes, les commerciaux regroupent les etapes intermediaires et le pipeline perd sa granularite.</p>
                    <p><strong className="text-[#111]">L&apos;etape &ldquo;Nouveau lead&rdquo; est facultative.</strong> Certaines equipes gerent les leads non qualifies dans une vue separee (contacts avec lifecycle stage = Lead) et ne creent un deal qu&apos;a la qualification. C&apos;est plus propre si vous avez un volume important de leads non qualifies.</p>
                    <p><strong className="text-[#111]">Ajustez les probabilites a vos donnees.</strong> Les probabilites ci-dessus sont des moyennes B2B. Apres 3 mois d&apos;utilisation, remplacez-les par vos taux de conversion reels. Si votre taux de passage de &ldquo;Demo&rdquo; a &ldquo;Proposition&rdquo; est de 70%, votre probabilite a l&apos;etape &ldquo;Demo&rdquo; doit etre ajustee en consequence.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="criteres-passage" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Criteres de passage entre etapes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les criteres de passage sont ce qui transforme un pipeline subjectif en un pipeline objectif. Chaque passage d&apos;etape doit etre declenche par un evenement verifiable, pas par l&apos;optimisme du commercial.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        from: "Nouveau lead",
                        to: "Qualifie",
                        criteria: ["Budget identifie (fourchette min)", "Interlocuteur avec pouvoir de decision", "Besoin confirme par le prospect (pas par le commercial)", "Timeline d'achat dans les 6 prochains mois"],
                        color: "#FF7A59",
                      },
                      {
                        from: "Qualifie",
                        to: "Demo / Discovery",
                        criteria: ["Call de decouverte programme ou realise", "Le prospect a vu la solution en action", "Les parties prenantes cles sont identifiees", "Le process de decision interne est connu"],
                        color: "#4B5EFC",
                      },
                      {
                        from: "Demo / Discovery",
                        to: "Proposition",
                        criteria: ["Le scope du projet est defini", "Le budget est confirme (pas estime)", "Le champion interne est identifie", "La proposition a ete demandee par le prospect"],
                        color: "#6C5CE7",
                      },
                      {
                        from: "Proposition",
                        to: "Negociation",
                        criteria: ["La proposition a ete ouverte et lue", "Le prospect a revenu avec des questions ou ajustements", "La decision d'achat est prise (on negocie les termes)", "Le legal/procurement est implique"],
                        color: "#22C55E",
                      },
                    ].map((item) => (
                      <div key={item.from} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium text-white" style={{ background: item.color }}>{item.from}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium text-white" style={{ background: item.color }}>{item.to}</span>
                        </div>
                        <ul className="space-y-1">
                          {item.criteria.map((c) => (
                            <li key={c} className="flex items-start gap-2 text-[11px] text-[#777] leading-[1.6]">
                              <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: item.color }} />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La regle d&apos;or.</strong> Si le commercial ne peut pas justifier le passage d&apos;etape par un evenement concret (un call realise, un document envoye, une confirmation recue), le deal ne doit pas avancer. C&apos;est strict, mais c&apos;est ce qui rend le pipeline fiable.</p>
                    <p>Dans HubSpot, vous pouvez rendre certaines proprietes obligatoires lors du changement d&apos;etape. C&apos;est la meilleure facon de forcer la discipline sans micromanager.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="proprietes-obligatoires" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les proprietes obligatoires par etape</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot permet de rendre des proprietes obligatoires a chaque changement d&apos;etape. C&apos;est le mecanisme le plus efficace pour garantir la qualite des donnees dans votre pipeline. Voici les proprietes recommandees par etape.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Proprietes obligatoires par etape de pipeline</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Etape</th>
                            <th className="text-left py-2 px-2 text-[#999] font-semibold">Proprietes obligatoires</th>
                            <th className="text-center py-2 pl-2 text-[#999] font-semibold">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { stage: "Nouveau lead", props: "Source du lead, Nom entreprise, Contact associe", type: "Standard" },
                            { stage: "Qualifie", props: "Montant estime, Date de closing estimee, Decision maker identifie", type: "Standard + Custom" },
                            { stage: "Demo", props: "Date du call, Notes de decouverte, Nombre de parties prenantes", type: "Custom" },
                            { stage: "Proposition", props: "Montant de la proposition, Scope defini, Document de proposition", type: "Standard + Custom" },
                            { stage: "Negociation", props: "Points de negociation, Date de decision, Concurrent identifie", type: "Custom" },
                            { stage: "Closed Won", props: "Montant signe, Date de signature, Raison du gain", type: "Standard + Custom" },
                            { stage: "Closed Lost", props: "Raison de la perte (liste predefinie), Concurrent choisi, Feedback", type: "Custom" },
                          ].map((row) => (
                            <tr key={row.stage} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.stage}</td>
                              <td className="py-2.5 px-2 text-[#666]">{row.props}</td>
                              <td className="py-2.5 pl-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#FF7A59]/10 text-[#FF7A59] text-[9px] font-medium">{row.type}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La propriete la plus importante : la raison du loss.</strong> C&apos;est la donnee la plus negligee et la plus precieuse. Pourquoi avez-vous perdu ce deal ? Prix trop eleve, concurrent moins cher, pas de budget, timing mauvais, fonctionnalite manquante. Quand vous avez 50+ raisons de loss documentees, vous pouvez identifier les patterns et ajuster votre strategie commerciale.</p>
                    <p><strong className="text-[#111]">Ne sur-documentez pas.</strong> Chaque propriete obligatoire ajoute de la friction. Si remplir les champs prend 5 minutes a chaque changement d&apos;etape, les commerciaux ne le feront pas. Limitez-vous a 3-4 proprietes obligatoires par etape. Le reste en optionnel.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="deal-vs-lifecycle" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Deal stage vs lifecycle stage</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est la confusion la plus frequente dans HubSpot. Le deal stage et le lifecycle stage sont deux concepts differents qui servent des objectifs differents. Les melanger cree un chaos dans vos rapports.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#FF7A59]/20 bg-[#FF7A59]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#FF7A59] mb-3">Deal stage (objet Deal)</p>
                      <ul className="space-y-2">
                        {[
                          "Ou en est CE deal specifique",
                          "S'applique a un deal, pas a un contact",
                          "Un contact peut avoir plusieurs deals",
                          "Mesure la progression d'une opportunite",
                          "Utilise pour le pipeline et le forecasting",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[11px] text-[#777] leading-[1.5]">
                            <span className="w-1 h-1 rounded-full bg-[#FF7A59] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-[#4B5EFC]/20 bg-[#4B5EFC]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#4B5EFC] mb-3">Lifecycle stage (objet Contact)</p>
                      <ul className="space-y-2">
                        {[
                          "Ou en est CE contact dans votre funnel global",
                          "S'applique a un contact, pas a un deal",
                          "Un contact n'a qu'un seul lifecycle stage",
                          "Mesure la maturite d'une relation",
                          "Utilise pour le marketing et la segmentation",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[11px] text-[#777] leading-[1.5]">
                            <span className="w-1 h-1 rounded-full bg-[#4B5EFC] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La regle simple.</strong> Le lifecycle stage avance automatiquement quand un deal est cree ou gagne. Un contact passe de &ldquo;Lead&rdquo; a &ldquo;Opportunity&rdquo; quand un deal est cree, puis a &ldquo;Customer&rdquo; quand le deal est &ldquo;Closed Won&rdquo;. Ce mapping doit etre fait par un workflow, pas manuellement.</p>
                    <p><strong className="text-[#111]">L&apos;erreur classique.</strong> Utiliser le lifecycle stage comme un pipeline en creant des stages custom (&ldquo;En negociation&rdquo;, &ldquo;Proposition envoyee&rdquo;). Le lifecycle stage a des valeurs predefinies dans HubSpot (Subscriber, Lead, MQL, SQL, Opportunity, Customer, Evangelist). Ne les modifiez pas. Utilisez le deal stage pour la granularite commerciale.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="workflows-pipeline" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les workflows a mettre en place</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un pipeline sans workflows, c&apos;est un pipeline sans automatisation. Et un pipeline sans automatisation, c&apos;est un pipeline qui depend de la discipline manuelle des commerciaux. Spoiler : ca ne marche pas. Voici les 6 workflows essentiels.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { title: "Assignment automatique des leads", desc: "Quand un lead entre dans le pipeline (via formulaire, import ou API), il est automatiquement assigne a un commercial selon des regles predefinies : territoire, secteur, round-robin. Temps d'implementation : 30 minutes.", color: "#FF7A59" },
                      { title: "Notification de stagnation", desc: "Si un deal n'a pas change d'etape depuis X jours (10 jours en qualification, 15 en demo, 7 en proposition), une notification est envoyee au commercial et a son manager. Les deals stagnants sont le cancer du pipeline.", color: "#EF4444" },
                      { title: "Mise a jour du lifecycle stage", desc: "Quand un deal est cree, le contact passe automatiquement en 'Opportunity'. Quand le deal passe en 'Closed Won', le contact passe en 'Customer'. Quand un deal est perdu, le contact revient en 'SQL'. Automatique, sans intervention humaine.", color: "#4B5EFC" },
                      { title: "Creation de taches par etape", desc: "A chaque changement d'etape, une tache est creee automatiquement : appel de qualification pour 'Qualifie', preparation de demo pour 'Demo', envoi de proposition pour 'Proposition'. Le commercial sait quoi faire a chaque etape.", color: "#22C55E" },
                      { title: "Alerte de deal a forte valeur", desc: "Quand un deal depasse un certain montant (ex: 20 000 EUR), une notification est envoyee au manager. Les deals strategiques doivent etre suivis de pres des leur entree dans le pipeline.", color: "#6C5CE7" },
                      { title: "Nettoyage automatique", desc: "Les deals en 'Nouveau lead' depuis plus de 30 jours sans activite sont automatiquement passes en 'Closed Lost' avec la raison 'Pas de reponse'. Ca evite l'accumulation de deals fantomes qui polluent le pipeline.", color: "#FF7A59" },
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
                    <p>Ces 6 workflows couvrent 90% des besoins d&apos;automatisation d&apos;un pipeline B2B. Ils sont disponibles a partir du plan HubSpot Starter (15 EUR/mois par utilisateur). L&apos;implementation complete prend 2 a 4 heures.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="mesurer-velocite" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment mesurer la velocite du pipeline</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La velocite du pipeline est la metrique la plus sous-estimee du RevOps. Elle mesure la vitesse a laquelle les deals traversent votre pipeline et se transforment en revenue. C&apos;est la formule qui relie toutes vos metriques commerciales.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-5 text-center">Formule de la velocite du pipeline</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6">
                      <div className="rounded-lg bg-[#FF7A59]/10 border border-[#FF7A59]/20 px-4 py-3 text-center">
                        <p className="text-[14px] font-bold text-[#FF7A59]">Velocite</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">=</span>
                      <div className="rounded-lg bg-[#4B5EFC]/10 border border-[#4B5EFC]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#4B5EFC]">Nb deals</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">x</span>
                      <div className="rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#22C55E]">Deal moyen</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">x</span>
                      <div className="rounded-lg bg-[#6C5CE7]/10 border border-[#6C5CE7]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#6C5CE7]">Win rate</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">/</span>
                      <div className="rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#EF4444]">Cycle (jours)</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center">Resultat en EUR/jour -- Multipliez par 30 pour le mensuel</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Exemple concret.</strong> 40 deals dans le pipeline x 12 000 EUR de deal moyen x 25% de win rate / 40 jours de cycle = 3 000 EUR/jour, soit 90 000 EUR/mois de revenue previsible. Si vous voulez augmenter votre velocite, vous avez 4 leviers : plus de deals, des deals plus gros, un meilleur win rate ou un cycle plus court.</p>
                    <p><strong className="text-[#111]">Comment mesurer dans HubSpot.</strong> Le plan Pro inclut un rapport de velocite natif. En Starter, vous devez le calculer manuellement a partir des rapports de pipeline. Creez un dashboard dedie avec : nombre de deals crees par mois, montant moyen, win rate mensuel, duree moyenne du cycle.</p>
                    <p><strong className="text-[#111]">La frequence de mesure.</strong> Mesurez la velocite chaque mois et comparez avec les 3 mois precedents. Une velocite qui augmente de 10% par mois signifie que votre equipe accelere. Une velocite qui baisse pendant 2 mois consecutifs est un signal d&apos;alerte.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="template-pipeline" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Template pipeline pret a copier</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Voici le template complet du pipeline que l&apos;on deploie chez nos clients B2B. Il est teste sur plus de 100 portails HubSpot et fonctionne pour des cycles de vente de 30 a 120 jours.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { stage: "Nouveau lead", prob: "10%", props: "Source, Contact, Entreprise", delay: "7 jours max", action: "Qualifier dans les 48h ou disqualifier", color: "#FF7A59" },
                      { stage: "Qualifie (SQL)", prob: "20%", props: "Montant estime, Date closing, Decision maker", delay: "14 jours max", action: "Programmer un call de decouverte", color: "#FF7A59" },
                      { stage: "Demo / Discovery", prob: "40%", props: "Notes de call, Parties prenantes, Champion", delay: "21 jours max", action: "Preparer et envoyer la proposition", color: "#4B5EFC" },
                      { stage: "Proposition envoyee", prob: "60%", props: "Montant propose, Scope, Document", delay: "14 jours max", action: "Relancer si pas de retour a J+3", color: "#6C5CE7" },
                      { stage: "Negociation", prob: "80%", props: "Points de nego, Date decision, Concurrent", delay: "10 jours max", action: "Closer ou identifier le blocage", color: "#22C55E" },
                      { stage: "Closed Won", prob: "100%", props: "Montant signe, Date signature, Raison gain", delay: "-", action: "Handoff au Customer Success", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.stage} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <p className="text-[12px] font-semibold text-white">{item.stage}</p>
                          </div>
                          <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.prob}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[10px]">
                          <div>
                            <p className="text-[#666] mb-0.5">Proprietes</p>
                            <p className="text-[#999]">{item.props}</p>
                          </div>
                          <div>
                            <p className="text-[#666] mb-0.5">Delai max</p>
                            <p className="text-[#999]">{item.delay}</p>
                          </div>
                          <div>
                            <p className="text-[#666] mb-0.5">Action</p>
                            <p className="text-[#999]">{item.action}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Ce template est un point de depart. Adaptez-le a votre cycle de vente, votre equipe et votre secteur. L&apos;important n&apos;est pas d&apos;avoir le pipeline parfait du premier coup, c&apos;est d&apos;avoir un pipeline structure que vous iterez chaque trimestre.</p>
                    <p>Chez Ceres, on deploie ce pipeline en 2 heures, workflows inclus. En 2 semaines, l&apos;equipe est operationnelle et le forecasting est fiable.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Restructurer votre pipeline HubSpot ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on audite et restructure des pipelines HubSpot chaque semaine. En 2 heures, votre pipeline est propre, vos workflows sont en place et votre forecasting est fiable.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF7A59] text-white rounded-lg text-[13px] font-medium hover:bg-[#E8694D] transition-colors">
                  Restructurer mon pipeline
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
