"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Enrichissement de leads B2B : automatiser sans outil cher",
  description: "Guide complet pour automatiser l'enrichissement de leads B2B avec l'IA. Sources de donnees, workflow automatique, comparaison IA vs outils dedies, couts reels et limites. De 500 EUR/mois a 50 EUR/mois.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/enrichissement-leads-b2b-automatique" },
  articleSection: "IA & Automatisation",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "premier-quick-win", title: "Le premier quick win IA" },
  { id: "quoi-enrichir", title: "Ce qu'on enrichit" },
  { id: "sources-donnees", title: "Les sources de donnees" },
  { id: "workflow-automatique", title: "Le workflow automatique" },
  { id: "ia-vs-outils", title: "IA vs outils dedies" },
  { id: "cout-reel", title: "Le cout reel" },
  { id: "limites", title: "Les limites" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Comparatif outils de generation de leads et enrichissement", slug: "comparatif-outils-generation-leads-enrichissement", category: "Process & Silos", color: "#6C5CE7" },
  { title: "Clay : le guide complet de l'enrichissement de donnees B2B", slug: "clay-enrichissement-donnees-b2b-guide", category: "Process & Silos", color: "#6C5CE7" },
  { title: "5 agents IA deployes chez nos clients B2B (avec les resultats)", slug: "agents-ia-deployes-clients-b2b", category: "IA & Automatisation", color: "#6D00CC" },
];

export default function EnrichissementLeadsArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("premier-quick-win");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Enrichissement%20de%20leads%20B2B%20%3A%20automatiser%20sans%20outil%20cher&url=https://ceres.agency/blog/enrichissement-leads-b2b-automatique" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/enrichissement-leads-b2b-automatique" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Enrichissement de leads B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">13 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Enrichissement de leads B2B : automatiser sans outil cher
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                L&apos;enrichissement de leads est le premier cas d&apos;usage IA qui rapporte de l&apos;argent concretement. Pourtant, beaucoup d&apos;equipes paient 500 EUR/mois pour des outils dedies alors qu&apos;un agent IA fait le meme travail pour 50 EUR. Ce guide detaille les sources, le workflow, la comparaison IA vs outils et les limites. Avec des couts reels, pas des estimations marketing.
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
              <section id="premier-quick-win" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi l&apos;enrichissement est le premier quick win IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Quand une equipe commerciale B2B veut deployer l&apos;IA, la question est toujours la meme : par ou commencer ? La reponse est simple : l&apos;enrichissement de leads. Et pour trois raisons.</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">C&apos;est repetitif et chronophage.</strong> Un SDR passe en moyenne 15 a 25 minutes par lead a chercher des informations : taille de l&apos;entreprise, secteur, technos utilisees, decision makers, actualites recentes. Sur 50 leads par semaine, c&apos;est entre 12 et 20 heures perdues.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Le ROI est immediat et mesurable.</strong> Pas besoin d&apos;attendre 3 mois pour voir un resultat. Des la premiere semaine, les leads sont mieux qualifies, les commerciaux passent plus de temps a vendre, et le pipeline gagne en qualite.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Le risque est quasi nul.</strong> Si l&apos;enrichissement IA ne fonctionne pas bien, le commercial fait comme avant. Pas de process casse, pas de donnees corrompues, pas de disruption de l&apos;equipe. C&apos;est le cas d&apos;usage ideal pour tester l&apos;IA sans risque.</li>
                    </ul>
                    <p>En pratique, l&apos;enrichissement IA est le cas d&apos;usage avec le meilleur ratio effort/impact. Il se deploie en quelques jours, produit des resultats mesurables des la premiere semaine et cree la confiance necessaire pour deployer d&apos;autres cas d&apos;usage IA ensuite.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "15-25 min", label: "Par lead en recherche manuelle", color: "#EF4444" },
                      { stat: "2-3 min", label: "Par lead avec l'IA", color: "#22C55E" },
                      { stat: "10x", label: "Plus rapide en moyenne", color: "#6D00CC" },
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
              <section id="quoi-enrichir" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Ce qu&apos;on enrichit : les 5 dimensions cles</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;enrichissement ne se limite pas a trouver un numero de telephone. Un lead bien enrichi comporte 5 dimensions d&apos;information qui permettent au commercial de qualifier, prioriser et personnaliser son approche avant meme le premier contact.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { dim: "Taille et structure", fields: "Nombre d'employes, chiffre d'affaires, croissance, nombre de bureaux, levees de fonds", why: "Pour qualifier le fit avec votre ICP et adapter le discours (startup vs enterprise)", color: "#6D00CC" },
                      { dim: "Secteur et marche", fields: "Secteur d'activite, sous-secteur, clients cibles, positionnement marche, reglementation", why: "Pour personnaliser la proposition de valeur et identifier les cas d'usage pertinents", color: "#FF7A59" },
                      { dim: "Stack technologique", fields: "CRM utilise, outils marketing, ERP, technologies web (BuiltWith, Wappalyzer)", why: "Pour identifier les integrations possibles et les douleurs liees aux outils actuels", color: "#4B5EFC" },
                      { dim: "Decision makers", fields: "Nom, titre, seniorite, anciennete dans le poste, parcours LinkedIn, publications recentes", why: "Pour savoir a qui parler, comment l'aborder et quel angle utiliser", color: "#22C55E" },
                      { dim: "Actualites et signaux", fields: "Recrutements recents, levees de fonds, acquisitions, changements de direction, actualites presse", why: "Pour timer l'approche et personnaliser le message avec un element d'actualite", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.dim} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.dim}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2"><strong className="text-[#555]">Champs :</strong> {item.fields}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#FAFAFA] p-2 border border-[#F2F2F2]">
                          <span className="text-[10px] font-semibold shrink-0 mt-0.5" style={{ color: item.color }}>Pourquoi :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.why}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La regle d&apos;or : n&apos;enrichissez que ce qui change une decision. Si une donnee n&apos;influence pas la qualification, la priorisation ou la personnalisation, elle ne vaut pas le cout d&apos;etre collectee. Chaque champ enrichi doit repondre a la question &ldquo;qu&apos;est-ce que je fais differemment avec cette information ?&rdquo;</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="sources-donnees" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les sources de donnees : LinkedIn, sites web, registres</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;enrichissement repose sur des donnees publiques. L&apos;IA ne fait pas de magie : elle va chercher, agreger et structurer des informations qui existent deja sur le web. Trois categories de sources couvrent 90% des besoins.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Sources d&apos;enrichissement par type</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Source</th>
                            <th className="text-left py-2 px-2 text-[#999] font-semibold">Donnees disponibles</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Fiabilite</th>
                            <th className="text-center py-2 pl-2 text-[#999] font-semibold">Acces</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { source: "LinkedIn", data: "Titre, seniorite, anciennete, parcours, publications", reliability: "Elevee", access: "API / scraping" },
                            { source: "Site web entreprise", data: "Produits, equipe, actualites, techno, positionnement", reliability: "Elevee", access: "Scraping IA" },
                            { source: "Registres (Pappers, Societe.com)", data: "CA, effectif, date creation, dirigeants, adresse", reliability: "Tres elevee", access: "API gratuite / payante" },
                            { source: "Presse et actualites", data: "Levees, recrutements, acquisitions, partenariats", reliability: "Variable", access: "Google News / RSS" },
                            { source: "BuiltWith / Wappalyzer", data: "Stack technique du site web (CRM, analytics, CMS)", reliability: "Elevee", access: "API payante" },
                            { source: "Offres d'emploi", data: "Postes ouverts (signaux de croissance, besoins)", reliability: "Elevee", access: "Scraping Indeed, WTTJ" },
                          ].map((row) => (
                            <tr key={row.source} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.source}</td>
                              <td className="py-2.5 px-2 text-[#777]">{row.data}</td>
                              <td className="py-2.5 px-2 text-center">
                                <span className={`inline-block px-2 py-0.5 rounded font-medium ${row.reliability === "Tres elevee" ? "bg-[#22C55E]/10 text-[#22C55E]" : row.reliability === "Elevee" ? "bg-[#4B5EFC]/10 text-[#4B5EFC]" : "bg-[#FF7A59]/10 text-[#FF7A59]"}`}>{row.reliability}</span>
                              </td>
                              <td className="py-2.5 pl-2 text-center text-[#999]">{row.access}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La strategie waterfall.</strong> Au lieu de dependre d&apos;une seule source, l&apos;IA utilise une strategie en cascade. Elle commence par la source la plus fiable et la moins chere. Si l&apos;information manque, elle passe a la suivante. C&apos;est exactement ce que fait Clay avec ses 75+ providers, mais un agent IA peut reproduire cette logique pour une fraction du prix.</p>
                    <p><strong className="text-[#111]">RGPD et legalite.</strong> Toutes ces sources sont publiques. L&apos;enrichissement a partir de donnees publiques est legal en B2B sous reserve de respecter le RGPD (base legale : interet legitime, droit d&apos;opposition, pas de collecte excessive). En pratique, on enrichit des contacts professionnels avec des donnees professionnelles. Pas de donnees personnelles sensibles.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="workflow-automatique" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le workflow automatique : du lead entrant au CRM enrichi</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le workflow d&apos;enrichissement automatique se decompose en 5 etapes. Du moment ou un lead entre dans le systeme (formulaire, import, prospection) jusqu&apos;a sa fiche CRM completement enrichie, tout est automatise. Le commercial recoit un lead pret a contacter, pas une ligne vide dans un tableau.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { step: "1. Declencheur", desc: "Un nouveau contact est cree dans le CRM (formulaire rempli, import CSV, creation manuelle, integration). Le workflow se declenche automatiquement via un webhook ou un trigger CRM.", color: "#6D00CC" },
                      { step: "2. Identification", desc: "L'agent IA identifie l'entreprise a partir du domaine email ou du nom. Il croise avec les registres (Pappers, Societe.com) pour valider le SIREN, le CA et l'effectif. Si le domaine est generique (gmail, outlook), il cherche via le nom + LinkedIn.", color: "#4B5EFC" },
                      { step: "3. Enrichissement multi-source", desc: "L'IA interroge les sources en cascade : site web (scraping), LinkedIn (profil du contact + page entreprise), registres, actualites, techno stack. Chaque source complete les champs manquants.", color: "#22C55E" },
                      { step: "4. Structuration et scoring", desc: "Les donnees brutes sont structurees dans un format CRM-compatible. L'IA genere un score de fit ICP (de 0 a 100) base sur les criteres de qualification definis. Elle redige aussi un resume en une phrase de la pertinence du lead.", color: "#FF7A59" },
                      { step: "5. Mise a jour CRM", desc: "Les champs enrichis sont pousses dans le CRM via l'API. Le lead est assigne au bon commercial selon le scoring et les regles de routing. Une notification Slack informe le commercial qu'un nouveau lead enrichi l'attend.", color: "#6C5CE7" },
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
                    <p><strong className="text-[#111]">Le temps total.</strong> Du declencheur a la fiche CRM enrichie, le workflow prend entre 30 secondes et 3 minutes selon le nombre de sources interrogees. Le commercial ne voit rien de tout ca. Il recoit simplement une notification avec un lead pret, enrichi, score et assigne.</p>
                    <p><strong className="text-[#111]">L&apos;orchestration.</strong> Le workflow est orchestre par Make ou n8n, qui gere les appels API, les conditions et les erreurs. L&apos;IA (Claude ou equivalent) est appelee pour le scraping intelligent, la structuration des donnees et le scoring. Le CRM (HubSpot) recoit les donnees via son API.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="ia-vs-outils" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Enrichissement via l&apos;IA vs via des outils dedies</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le marche de l&apos;enrichissement B2B est domine par des outils dedies : Clay, Apollo, Clearbit, Lusha, Kaspr. Ces outils sont bons, parfois excellents. Mais ils ont un cout qui devient vite prohibitif pour une PME. L&apos;IA offre une alternative credible pour 80% des besoins.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Comparaison IA vs outils dedies</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Critere</th>
                            <th className="text-center py-2 px-2 text-[#6D00CC] font-semibold">Agent IA custom</th>
                            <th className="text-center py-2 pl-2 text-[#4B5EFC] font-semibold">Outil dedie (Clay, Apollo)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { critere: "Cout mensuel", ia: "30-80 EUR", outil: "200-800 EUR" },
                            { critere: "Donnees firmographiques", ia: "Bon (registres + scraping)", outil: "Excellent (bases propres)" },
                            { critere: "Emails / telephones", ia: "Limite (pas de base proprioceptive)", outil: "Excellent (bases enrichies)" },
                            { critere: "Stack technologique", ia: "Bon (scraping + APIs gratuites)", outil: "Excellent (BuiltWith integre)" },
                            { critere: "Personnalisation", ia: "Total (on definit les regles)", outil: "Limite aux champs disponibles" },
                            { critere: "Intelligence contextuelle", ia: "Excellent (resume, scoring, analyse)", outil: "Faible (donnees brutes)" },
                            { critere: "Setup", ia: "3-5 jours", outil: "1 jour" },
                            { critere: "Maintenance", ia: "Faible (prompts + monitoring)", outil: "Tres faible (SaaS)" },
                          ].map((row) => (
                            <tr key={row.critere} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.critere}</td>
                              <td className="py-2.5 px-2 text-center text-[#777]">{row.ia}</td>
                              <td className="py-2.5 pl-2 text-center text-[#777]">{row.outil}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le verdict.</strong> L&apos;IA est superieure sur trois points : le cout, la personnalisation et l&apos;intelligence contextuelle. Les outils dedies sont superieurs sur deux points : les donnees de contact (emails/telephones) et la facilite de setup. Pour une PME avec un budget serre, l&apos;IA couvre 80% des besoins. Pour une equipe qui a besoin de volumes massifs d&apos;emails verifies, un outil dedie reste necessaire.</p>
                    <p><strong className="text-[#111]">L&apos;approche hybride.</strong> En pratique, la meilleure strategie est souvent hybride. L&apos;IA pour l&apos;enrichissement contextuel (taille, secteur, actualites, scoring) et un outil dedie en complement pour les donnees de contact. Ca permet de diviser le cout par 3 tout en gardant une couverture quasi complete.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="cout-reel" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le cout reel : IA a 50 EUR/mois vs outils a 500 EUR/mois</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Decomposons le cout reel de chaque approche pour un volume de 200 leads enrichis par mois, soit environ 50 par semaine. C&apos;est le volume typique d&apos;une equipe de 3 a 5 commerciaux.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { poste: "API Claude (enrichissement IA)", range: "30 - 60 EUR/mois", desc: "Chaque lead consomme environ 5 000 a 10 000 tokens (scraping + structuration + scoring). Sur 200 leads, ca represente 1 a 2 millions de tokens. Avec les prix actuels de Claude Sonnet, le cout est de 30 a 60 EUR.", icon: "Cl", iconBg: "#D4A27F" },
                      { poste: "Orchestration (Make / n8n)", range: "10 - 30 EUR/mois", desc: "Le workflow d'enrichissement consomme entre 500 et 1 000 operations par mois dans Make. Le plan gratuit suffit souvent. Sinon, le plan Pro a 10 EUR couvre largement les besoins.", icon: "Mk", iconBg: "#6D00CC" },
                      { poste: "APIs complementaires", range: "0 - 20 EUR/mois", desc: "Pappers (registres) offre un plan gratuit genereux. BuiltWith a un tier gratuit. La majorite des sources sont accessibles sans cout supplementaire pour 200 leads/mois.", icon: "AP", iconBg: "#4B5EFC" },
                      { poste: "Setup initial (one-time)", range: "1 500 - 3 000 EUR", desc: "Configuration de l'agent IA, integration CRM, tests, ajustements des prompts. Amorti sur 12 mois : 125 a 250 EUR/mois. Ce cout disparait a partir de l'annee 2.", icon: "St", iconBg: "#22C55E" },
                    ].map((item) => (
                      <div key={item.poste} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[9px] font-bold" style={{ background: item.iconBg }}>{item.icon}</div>
                          <div className="flex-1">
                            <p className="text-[12px] font-semibold text-[#111]">{item.poste}</p>
                          </div>
                          <span className="text-[12px] font-bold text-[#22C55E]">{item.range}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[12px] font-semibold text-[#111]">Cout total enrichissement IA</p>
                      <p className="text-[18px] font-bold text-[#22C55E]">50 - 100 EUR/mois</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]">Setup amorti inclus la premiere annee. A comparer avec 200 a 800 EUR/mois pour un outil dedie equivalent. Economie : 150 a 700 EUR par mois, soit 1 800 a 8 400 EUR par an.</p>
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le calcul est sans appel pour les PME. A 200 leads par mois, l&apos;enrichissement IA coute 5 a 10 fois moins cher qu&apos;un outil dedie. L&apos;ecart se reduit a mesure que le volume augmente (les outils dedies ont des forfaits degressifs), mais pour des volumes de PME (100 a 500 leads/mois), l&apos;IA reste nettement plus economique.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les limites : donnees publiques et precision</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;enrichissement IA n&apos;est pas parfait. Il a des limites structurelles qu&apos;il faut connaitre pour eviter les deceptions et calibrer les attentes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Pas d'acces aux donnees privees",
                        desc: "L'IA enrichit a partir de donnees publiques. Les numeros de telephone direct, les emails personnels, les organigrammes internes ne sont pas accessibles sans base de donnees proprietaire. Pour ces donnees, un outil comme Apollo ou Lusha reste necessaire.",
                        color: "#EF4444",
                        fix: "Utiliser l'IA pour l'enrichissement contextuel et un outil dedie pour les donnees de contact. Budget : +50 EUR/mois pour un plan de base Apollo."
                      },
                      {
                        title: "Precision variable",
                        desc: "Le scraping IA depend de la structure des sites web. Un site bien structure donne des resultats precis. Un site mal concu ou un PDF donne des resultats approximatifs. En moyenne, la precision est de 85 a 90% sur les donnees firmographiques et 70 a 80% sur les donnees de contact.",
                        color: "#FF7A59",
                        fix: "Mettre en place un processus de validation. Le commercial verifie les donnees critiques (taille, secteur) au premier contact. L'IA flagge les enrichissements a faible confiance."
                      },
                      {
                        title: "Fraicheur des donnees",
                        desc: "Les donnees publiques ne sont pas toujours a jour. Un profil LinkedIn modifie il y a 2 ans ne reflete pas le poste actuel. Les registres ont un decalage de 3 a 12 mois sur le chiffre d'affaires. Les actualites de plus de 6 mois perdent en pertinence.",
                        color: "#6C5CE7",
                        fix: "Dater chaque enrichissement et re-enrichir automatiquement les leads qui n'ont pas ete contactes depuis 3 mois."
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
                    <p>Ces limites sont reelles mais ne sont pas bloquantes. Elles signifient que l&apos;enrichissement IA est excellent pour 80% des besoins (firmographie, contexte, scoring) et insuffisant pour 20% (donnees de contact directes). La bonne approche est de connaitre ces limites et de les adresser avec des solutions complementaires, pas de les ignorer.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, l&apos;enrichissement automatique est le premier agent IA qu&apos;on deploie chez nos clients. C&apos;est le quick win qui cree la confiance et qui finance les projets suivants par les economies generees.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Agent sur mesure", desc: "On configure un agent d'enrichissement adapte a votre ICP, vos criteres de qualification et votre CRM. Pas un template generique : un agent qui enrichit les champs qui comptent pour votre equipe.", color: "#6D00CC" },
                      { title: "Integration CRM native", desc: "L'agent est connecte directement a HubSpot (ou votre CRM). Les leads sont enrichis en temps reel, sans intervention manuelle. Le commercial recoit un lead pret a contacter, pas un tableau a remplir.", color: "#4B5EFC" },
                      { title: "Scoring ICP integre", desc: "Chaque lead enrichi recoit un score de fit ICP calcule par l'IA. Le commercial sait immediatement quels leads prioriser. Le scoring est base sur vos criteres, pas sur un algorithme generique.", color: "#22C55E" },
                      { title: "Cout transparent", desc: "On facture le setup et un accompagnement mensuel. Le cout API est supporte directement par le client, en toute transparence. Pas de markup cache sur les tokens. Le client voit exactement ce que l'IA lui coute.", color: "#FF7A59" },
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
                        { stat: "90%", label: "Taux de completude des fiches", color: "#22C55E" },
                        { stat: "-85%", label: "Temps d'enrichissement", color: "#6D00CC" },
                        { stat: "50 EUR", label: "Cout moyen mensuel", color: "#4B5EFC" },
                        { stat: "J+3", label: "Deploiement operationnel", color: "#FF7A59" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>L&apos;enrichissement est le point d&apos;entree. Une fois que l&apos;agent est en place et que l&apos;equipe voit les resultats, on deploie les cas d&apos;usage suivants : scoring predictif, resumes de calls, reporting automatique. Chaque agent construit sur les donnees enrichies par le precedent. C&apos;est une approche incrementale, pas un big bang.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Automatiser votre enrichissement de leads ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on deploie des agents d&apos;enrichissement IA en 3 jours. Connectes a votre CRM, adaptes a votre ICP, pour une fraction du cout des outils dedies. Commencez par un appel de 30 minutes pour evaluer votre potentiel d&apos;automatisation.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6D00CC] text-white rounded-lg text-[13px] font-medium hover:bg-[#5A00B0] transition-colors">
                  Automatiser l&apos;enrichissement
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
