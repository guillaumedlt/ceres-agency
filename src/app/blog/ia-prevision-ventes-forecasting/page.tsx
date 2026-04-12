"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IA et prevision des ventes : forecasting predictif en B2B",
  description: "Guide complet du forecasting predictif en B2B avec l'IA. Biais humains, methodes classiques, signaux IA (engagement, timing, firmographie), precision attendue et mise en place. De 35% a 85%+ de precision.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-prevision-ventes-forecasting" },
  articleSection: "IA & Automatisation",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "forecast-faux", title: "Pourquoi votre forecast est faux" },
  { id: "methodes-classiques", title: "Les methodes classiques" },
  { id: "forecasting-ia", title: "Le forecasting IA" },
  { id: "signaux-ia", title: "Les signaux que l'IA utilise" },
  { id: "precision-attendue", title: "La precision attendue" },
  { id: "mise-en-place", title: "Comment le mettre en place" },
  { id: "limites", title: "Les limites" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Forecasting commercial : methodes, outils et bonnes pratiques", slug: "forecasting-commercial-methodes-outils", category: "Data & Reporting", color: "#22C55E" },
  { title: "Comment utiliser l'IA dans votre processus commercial B2B", slug: "ia-processus-commercial-vente-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "ROI de l'IA en B2B : comment le calculer (avec des vrais chiffres)", slug: "roi-ia-b2b-calculer", category: "Data & Reporting", color: "#22C55E" },
];

export default function IaPrevisionVentesArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("forecast-faux");

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
        <div className="h-full bg-[#6D00CC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#6D00CC", opacity: 0.06, filter: "blur(70px)" }} />

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
                        ? "border-[#6D00CC] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=IA%20et%20prevision%20des%20ventes%20%3A%20forecasting%20predictif%20B2B&url=https://ceres.agency/blog/ia-prevision-ventes-forecasting" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/ia-prevision-ventes-forecasting" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">IA et prevision des ventes</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                IA et prevision des ventes : forecasting predictif en B2B
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le forecast commercial est faux dans 65% des entreprises B2B. Pas par incompetence, mais parce que le cerveau humain est mal equipe pour predire. L&apos;IA change la donne en analysant des centaines de signaux que le commercial ne voit pas. Ce guide couvre les methodes classiques, ce que l&apos;IA change concretement, la precision attendue et comment le deployer. Avec des chiffres, pas des promesses.
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
              <section id="forecast-faux" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi votre forecast est faux : les biais humains</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Selon Gartner, 55% des directeurs commerciaux ne font pas confiance a leur propre forecast. Et ils ont raison : la precision moyenne d&apos;un forecast commercial base sur l&apos;intuition des commerciaux est de 35 a 45%. Autrement dit, moins fiable qu&apos;un pile ou face.</p>
                    <p>Le probleme n&apos;est pas la bonne volonte des commerciaux. C&apos;est la nature humaine. Quatre biais cognitifs faussent systematiquement les previsions :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Biais d&apos;optimisme.</strong> Le commercial surestime la probabilite de ses deals. Un deal a 50% dans le CRM est en realite a 25-30%. Ce biais est universel et inconscient. Meme les meilleurs commerciaux y sont sujets.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Biais d&apos;ancrage.</strong> Le montant initial du deal ancre la prevision. Un deal entre a 50 000 EUR reste a 50 000 EUR dans le forecast meme quand les signaux indiquent qu&apos;il va etre reduit a 30 000 EUR. Le commercial ne reajuste pas assez.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Biais de confirmation.</strong> Le commercial voit les signaux qui confirment que le deal va se faire et ignore ceux qui suggerent le contraire. Un email positif efface une semaine de silence. Un &ldquo;on va regarder&rdquo; devient &ldquo;ils sont tres interesses&rdquo;.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Pression du management.</strong> Quand le manager demande &ldquo;tu penses signer combien ce trimestre ?&rdquo;, la reponse est biaisee vers le haut. Personne ne veut annoncer un mauvais trimestre. Le forecast devient un outil politique, pas un outil de prediction.</li>
                    </ul>
                    <p>Ces biais ne se corrigent pas avec de la formation ou de la discipline. Ils sont structurels. La seule solution est de completer le jugement humain par des donnees objectives. C&apos;est exactement ce que fait le forecasting IA.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "35-45%", label: "Precision moyenne d'un forecast humain", color: "#EF4444" },
                      { stat: "55%", label: "Des DirCo ne font pas confiance a leur forecast", color: "#FF7A59" },
                      { stat: "85%+", label: "Precision possible avec le forecasting IA", color: "#22C55E" },
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
              <section id="methodes-classiques" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les methodes classiques de forecasting</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de parler d&apos;IA, il est important de comprendre les methodes classiques. Elles restent utiles et sont souvent le point de depart. L&apos;IA ne les remplace pas : elle les augmente.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        method: "Weighted Pipeline",
                        desc: "Chaque deal est pondere par sa probabilite de closing. Un deal a 50% de probabilite pour 100 000 EUR contribue 50 000 EUR au forecast. Simple et intuitif.",
                        precision: "40-50%",
                        force: "Facile a mettre en place, tout le monde comprend",
                        faiblesse: "Les probabilites sont fixees manuellement et rarement ajustees. Un deal a l'etape 'Negociation' a toujours 60% meme s'il est inactif depuis 3 semaines.",
                        color: "#FF7A59",
                      },
                      {
                        method: "Historique (Run Rate)",
                        desc: "On projette les resultats futurs a partir des resultats passes. Si vous avez signe 300 000 EUR le trimestre dernier, le forecast du prochain trimestre est autour de 300 000 EUR, ajuste de la saisonnalite.",
                        precision: "35-45%",
                        force: "Pas besoin de donnees de pipeline, fonctionne meme sans CRM",
                        faiblesse: "Ne tient pas compte des changements (nouvelle equipe, nouveau produit, perte d'un gros client). Le passe ne predit pas toujours le futur.",
                        color: "#4B5EFC",
                      },
                      {
                        method: "Bottom-up (commercial par commercial)",
                        desc: "Chaque commercial annonce ses previsions. Le manager compile. Le directeur consolide. C'est la methode la plus courante en B2B.",
                        precision: "30-40%",
                        force: "Implique l'equipe, donne une granularite par commercial",
                        faiblesse: "Maximum de biais humains. Chaque etape ajoute de l'optimisme. Le resultat final est souvent 30 a 40% au-dessus de la realite.",
                        color: "#6C5CE7",
                      },
                    ].map((item) => (
                      <div key={item.method} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.method}</span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444]">Precision : {item.precision}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="rounded-lg bg-[#22C55E]/5 p-2">
                            <span className="text-[10px] text-[#22C55E] font-semibold">Force : </span>
                            <span className="text-[10px] text-[#888]">{item.force}</span>
                          </div>
                          <div className="rounded-lg bg-[#EF4444]/5 p-2">
                            <span className="text-[10px] text-[#EF4444] font-semibold">Faiblesse : </span>
                            <span className="text-[10px] text-[#888]">{item.faiblesse}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le point commun de ces methodes : elles reposent sur des informations limitees (une probabilite figee, un historique, une intuition). L&apos;IA change la donne en analysant des centaines de variables en temps reel pour produire une prediction dynamique et objective.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="forecasting-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le forecasting IA : ce qui change concretement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le forecasting IA ne repose pas sur l&apos;intuition du commercial mais sur l&apos;analyse de signaux objectifs. Il ne demande pas &ldquo;a combien tu estimes ce deal ?&rdquo; mais &ldquo;que disent les donnees sur ce deal ?&rdquo;. Trois changements fondamentaux :</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { change: "Probabilites dynamiques", desc: "Au lieu d'une probabilite fixe par etape (30% en decouverte, 60% en negociation), l'IA calcule une probabilite unique par deal, mise a jour en temps reel. Un deal en negociation avec beaucoup d'engagement a 80%. Un deal en negociation inactif depuis 2 semaines a 15%. Meme etape, probabilites radicalement differentes.", color: "#6D00CC" },
                      { change: "Detection des deals a risque", desc: "L'IA identifie les deals qui risquent de glisser (reporter au trimestre suivant) ou de se perdre. Signaux : baisse d'engagement, delai de reponse qui s'allonge, absence du decision maker dans les echanges recents. Le manager est alerte avant que le commercial ne realise le probleme.", color: "#EF4444" },
                      { change: "Forecast par scenario", desc: "Au lieu d'un seul chiffre, l'IA produit trois scenarios : pessimiste, probable et optimiste. Le pessimiste inclut uniquement les deals a haute probabilite (>70%). Le probable inclut les deals a probabilite moyenne (>40%). L'optimiste inclut tout. Le management a une vision complete de l'eventail des possibles.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.change} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.change}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le resultat concret : le forecast passe d&apos;un exercice politique hebdomadaire (ou chacun negocie ses chiffres) a un outil de pilotage objectif. Le commercial se concentre sur vendre, pas sur estimer. Le manager se concentre sur coacher, pas sur challenger les chiffres. Le directeur prend des decisions basees sur des donnees, pas sur des espoirs.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="signaux-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les signaux que l&apos;IA utilise pour predire</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA analyse des dizaines de signaux que le commercial ne peut pas traiter mentalement. Quatre categories de signaux alimentent le modele predictif.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        category: "Engagement",
                        signals: "Nombre d'emails echanges, taux de reponse, delai de reponse moyen, nombre de meetings, participation du decision maker, ouverture des propositions, temps passe sur les documents",
                        impact: "Le signal le plus predictif. Un prospect qui repond en moins de 24h et implique son CFO a 3x plus de chances de signer qu'un prospect qui repond en 5 jours sans impliquer de decision maker.",
                        color: "#6D00CC",
                      },
                      {
                        category: "Timing et velocite",
                        signals: "Duree dans chaque etape vs moyenne historique, acceleration ou deceleration du cycle, delai depuis le dernier contact, proximite de la date de closing annoncee",
                        impact: "Un deal qui avance plus vite que la moyenne a une probabilite 2x superieure. Un deal qui stagne plus de 2 semaines sans activite a 70% de chances de se perdre.",
                        color: "#FF7A59",
                      },
                      {
                        category: "Firmographie",
                        signals: "Taille de l'entreprise, secteur, croissance, levees de fonds recentes, recrutements en cours, technos utilisees, budget historique pour des solutions similaires",
                        impact: "Certains profils d'entreprise ont des taux de conversion historiquement plus eleves. Une scale-up en croissance qui recrute des commerciaux signe 2x plus vite qu'une PME stable.",
                        color: "#4B5EFC",
                      },
                      {
                        category: "Comportement web",
                        signals: "Pages visitees sur le site (pricing, case studies, integration), frequence de visite, nombre de contacts de l'entreprise sur le site, telechargements de contenu, inscription webinaire",
                        impact: "Un prospect qui visite 3x la page pricing en une semaine est en phase de decision. Un prospect qui lit des case studies de son secteur se projette dans l'usage. Ces signaux, invisibles au commercial, sont tres predictifs.",
                        color: "#22C55E",
                      },
                    ].map((item) => (
                      <div key={item.category} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.category}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2"><strong className="text-[#555]">Signaux :</strong> {item.signals}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#FAFAFA] p-2 border border-[#F2F2F2]">
                          <span className="text-[10px] font-semibold shrink-0 mt-0.5" style={{ color: item.color }}>Impact :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA ne se contente pas d&apos;analyser chaque signal individuellement. Elle identifie les combinaisons de signaux. Un deal avec un engagement fort ET une velocite superieure a la moyenne ET un comportement web actif a une probabilite radicalement differente d&apos;un deal avec un seul de ces signaux. C&apos;est cette capacite d&apos;analyse multidimensionnelle qui fait la difference avec le jugement humain.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="precision-attendue" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La precision attendue : de 35% a 85%+</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La precision du forecasting IA depend de trois facteurs : la quantite de donnees historiques, la qualite du CRM et la complexite du cycle de vente. Voici ce qu&apos;on peut attendre de maniere realiste.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Precision attendue par maturite</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Maturite</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Donnees requises</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Precision</th>
                            <th className="text-left py-2 pl-2 text-[#999] font-semibold">Delai</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { level: "Baseline (sans IA)", data: "Aucune", precision: "35-45%", delai: "Immediat", color: "#EF4444" },
                            { level: "IA niveau 1 (regles + engagement)", data: "50+ deals", precision: "55-65%", delai: "2-4 semaines", color: "#FF7A59" },
                            { level: "IA niveau 2 (multi-signaux)", data: "150+ deals", precision: "70-80%", delai: "2-3 mois", color: "#4B5EFC" },
                            { level: "IA niveau 3 (predictif avance)", data: "300+ deals", precision: "80-90%", delai: "4-6 mois", color: "#22C55E" },
                          ].map((row) => (
                            <tr key={row.level} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.level}</td>
                              <td className="py-2.5 px-2 text-center text-[#777]">{row.data}</td>
                              <td className="py-2.5 px-2 text-center">
                                <span className="inline-block px-2 py-0.5 rounded font-medium" style={{ background: `${row.color}15`, color: row.color }}>{row.precision}</span>
                              </td>
                              <td className="py-2.5 pl-2 text-[#999]">{row.delai}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le gain marginal est enorme des le niveau 1.</strong> Passer de 40% a 60% de precision, ca veut dire que sur un pipeline de 500 000 EUR, votre prevision est erronee de 200 000 EUR au lieu de 300 000 EUR. En termes de decisions de recrutement, de budget et de tresorerie, c&apos;est un changement majeur.</p>
                    <p><strong className="text-[#111]">La precision n&apos;est pas le seul benefice.</strong> Meme a 60% de precision, le forecasting IA apporte deux avantages que les methodes classiques n&apos;ont pas : l&apos;identification des deals a risque (alerts precoces) et l&apos;objectivite (plus de debat politique sur les chiffres). Ces deux benefices valent autant que la precision elle-meme.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="mise-en-place" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment mettre en place le forecasting IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La mise en place se fait en 4 etapes sur 4 a 8 semaines. Le plus long n&apos;est pas la technologie, c&apos;est la preparation des donnees et l&apos;adoption par l&apos;equipe.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { step: "1. Audit des donnees CRM", desc: "Verifier la qualite des donnees historiques : deals documentes (montant, etapes, dates), activites loggees (emails, calls, meetings), contacts associes. Si les donnees sont incompletes, commencer par un nettoyage de 2 a 4 semaines. Sans donnees propres, le modele sera mauvais.", color: "#22C55E" },
                      { step: "2. Configuration du modele", desc: "Definir les signaux a analyser en fonction de votre cycle de vente. Configurer les connexions avec le CRM (HubSpot API), l'outil de calls (Claap), l'email tracking. Calibrer le modele sur les donnees historiques. Cette etape prend 1 a 2 semaines.", color: "#6D00CC" },
                      { step: "3. Phase de shadow (observation)", desc: "Faire tourner le modele IA en parallele du forecast humain pendant 4 a 6 semaines. Comparer les predictions. Identifier les ecarts et ajuster le modele. Cette phase est critique : elle permet de calibrer et de creer la confiance de l'equipe.", color: "#4B5EFC" },
                      { step: "4. Deploiement et adoption", desc: "Integrer le forecast IA dans le workflow hebdomadaire. Former les managers a lire les predictions et les alertes. Maintenir le forecast humain en complement pendant 2 mois, puis basculer progressivement vers le forecast IA comme source principale.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.step}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le facteur humain.</strong> La technologie est la partie facile. L&apos;adoption est la partie difficile. Un directeur commercial qui a passe 20 ans a faire du forecast bottom-up ne va pas basculer du jour au lendemain. Il faut demontrer la valeur progressivement, commencer par les alertes sur les deals a risque (valeur immediate, pas de changement de process), puis introduire le forecast global.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les limites du forecasting IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le forecasting IA n&apos;est pas une boule de cristal. Il a des limites structurelles qu&apos;il faut connaitre pour calibrer les attentes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Pas assez de donnees",
                        desc: "En dessous de 50 deals historiques, le modele n'a pas assez de matiere pour identifier des patterns fiables. Les startups en phase de lancement ou les entreprises qui viennent de changer de CRM n'ont souvent pas ce volume. Dans ce cas, commencer par un weighted pipeline ameliore (avec des probabilites ajustees par engagement).",
                        color: "#EF4444",
                        fix: "Attendre d'avoir 50+ deals ou utiliser un modele hybride (regles manuelles + quelques signaux IA) en attendant."
                      },
                      {
                        title: "Deals atypiques",
                        desc: "Un deal strategique avec un process de decision unique, un changement de direction chez le prospect, une acquisition en cours. Ces evenements sont par definition imprevisibles. L'IA prevoit bien les deals 'normaux' mais pas les anomalies. Et en B2B, chaque deal a sa part d'atypique.",
                        color: "#FF7A59",
                        fix: "Garder un overlay humain pour les deals strategiques (top 10% du pipeline). L'IA gere le volume, l'humain gere les exceptions."
                      },
                      {
                        title: "Donnees CRM sales",
                        desc: "L'IA est aussi bonne que les donnees en entree. Si les commerciaux ne loggent pas leurs activites, si les etapes du pipeline ne sont pas respectees, si les montants ne sont pas mis a jour, le modele sera mauvais. Le principe 'garbage in, garbage out' s'applique a la perfection.",
                        color: "#6C5CE7",
                        fix: "Investir dans la data quality avant le forecasting IA. Un audit CRM + des regles d'hygiene sont des prerequis, pas des options."
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#22C55E]/5 p-2">
                          <span className="text-[10px] text-[#22C55E] font-semibold shrink-0 mt-0.5">Solution :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.fix}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ces limites ne sont pas des raisons de ne rien faire. Elles sont des raisons de faire bien. Un forecasting IA deploye sur des donnees propres, avec un volume suffisant et un overlay humain pour les exceptions, sera systematiquement meilleur que le forecast intuitif. Pas parfait, mais meilleur. Et en prevision de ventes, &ldquo;meilleur&rdquo; suffit pour changer les decisions.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on deploie le forecasting IA comme un module de notre offre agents IA. Il s&apos;integre directement dans HubSpot et produit des previsions exploitables des la premiere semaine.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Audit data quality", desc: "Avant tout deploiement, on verifie que le CRM contient assez de donnees propres. Si ce n'est pas le cas, on commence par un nettoyage. Pas de forecasting IA sur des donnees sales.", color: "#22C55E" },
                      { title: "Modele adapte", desc: "On configure le modele sur vos donnees historiques et votre cycle de vente. Les signaux ponderes sont adaptes a votre business : un SaaS a cycle court n'a pas les memes predicteurs qu'un service a cycle long.", color: "#6D00CC" },
                      { title: "Alertes et reporting", desc: "Le forecast IA alimente un dashboard hebdomadaire avec les previsions par scenario, les deals a risque et les recommandations d'action. Le manager recoit une alerte quand un deal devie de la trajectoire attendue.", color: "#4B5EFC" },
                      { title: "Amelioration continue", desc: "Chaque mois, on compare les previsions aux resultats reels et on ajuste le modele. La precision augmente avec le temps et le volume de donnees. A M+3, la plupart de nos clients sont au-dessus de 75% de precision.", color: "#FF7A59" },
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

                  <div className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4 mb-6">
                    <p className="text-[12px] font-semibold text-white mb-3">Resultats moyens constates chez nos clients</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "78%", label: "Precision du forecast a M+3", color: "#22C55E" },
                        { stat: "+35pts", label: "Amelioration vs forecast humain", color: "#6D00CC" },
                        { stat: "3 sem", label: "Deploiement operationnel", color: "#4B5EFC" },
                        { stat: "92%", label: "Des deals a risque detectes", color: "#FF7A59" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le forecast est l&apos;un des cas d&apos;usage IA ou le ROI est le plus evident. Une meilleure prevision, c&apos;est de meilleures decisions de recrutement, de budget et de tresorerie. C&apos;est aussi moins de stress pour les equipes, parce que les objectifs sont fixes sur des bases realistes, pas sur des espoirs.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Deployer le forecasting IA chez vous ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on deploie le forecasting predictif en 3 semaines. Integre a HubSpot, calibre sur vos donnees, avec des alertes et un dashboard hebdomadaire. Commencez par un appel de 30 minutes pour evaluer la maturite de vos donnees.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6D00CC] text-white rounded-lg text-[13px] font-medium hover:bg-[#5A00B0] transition-colors">
                  Ameliorer votre forecast
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#6D00CC] transition-colors leading-[1.4]">{a.title}</p>
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
