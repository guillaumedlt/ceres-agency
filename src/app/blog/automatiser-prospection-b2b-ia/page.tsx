"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Automatiser sa prospection B2B avec l'IA : le guide complet",
  description: "Guide complet pour automatiser la prospection B2B avec l'intelligence artificielle. De l'ICP a l'enrichissement, de la personnalisation aux sequences automatisees. Methode, outils et metriques.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/automatiser-prospection-b2b-ia" },
  articleSection: "IA & Agents",
  wordCount: 3000,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-automatiser", title: "Pourquoi automatiser" },
  { id: "quatre-etapes", title: "Les 4 etapes" },
  { id: "ia-enrichissement", title: "IA pour l'enrichissement" },
  { id: "ia-personnalisation", title: "IA pour la personnalisation" },
  { id: "sequences-automatisees", title: "Sequences automatisees" },
  { id: "metriques-suivre", title: "Metriques a suivre" },
  { id: "pieges-eviter", title: "Les pieges a eviter" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Cold email B2B : templates et bonnes pratiques", slug: "cold-email-b2b-templates", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Comparatif outils de generation de leads et enrichissement", slug: "comparatif-outils-generation-leads-enrichissement", category: "Process & Outils", color: "#6C5CE7" },
  { title: "IA et processus commercial : transformer la vente B2B", slug: "ia-processus-commercial-vente-b2b", category: "IA & Agents", color: "#6D00CC" },
];

export default function AutomatiserProspectionB2bIaArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-automatiser");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Automatiser%20sa%20prospection%20B2B%20avec%20l%27IA&url=https://ceres.agency/blog/automatiser-prospection-b2b-ia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/automatiser-prospection-b2b-ia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Automatiser la prospection B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Agents</Badge>
                <span className="text-[11px] text-[#CCC]">16 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Automatiser sa prospection B2B avec l&apos;IA : le guide complet
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                La prospection manuelle a atteint ses limites. Les SDR passent 70% de leur temps sur des taches repetitives : recherche de contacts, enrichissement, redaction de messages generiques. L&apos;IA change la donne en automatisant ces taches tout en augmentant la personnalisation. Ce guide detaille chaque etape, de la definition de l&apos;ICP aux sequences automatisees.
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
              <section id="pourquoi-automatiser" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi automatiser la prospection</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un SDR B2B moyen envoie 50 a 80 emails de prospection par jour. Sur ces 80 emails, 60 sont des copiés-colles avec le prenom qui change. Le taux de reponse moyen : 2 a 3%. Soit 1 a 2 reponses par jour pour 6 heures de travail. Le calcul est simple : la prospection manuelle et generique ne fonctionne plus.</p>
                    <p>Les raisons sont structurelles, pas conjoncturelles :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Le volume de cold emails a explose.</strong> Chaque decision-maker recoit 30 a 50 cold emails par semaine. La barre de qualite pour se demarquer est beaucoup plus haute qu&apos;il y a 3 ans. Un email generique est ignore dans la seconde.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">La personnalisation manuelle ne scale pas.</strong> Ecrire un email vraiment personnalise prend 15 a 20 minutes : lire le profil LinkedIn, consulter le site web, trouver un angle pertinent. A ce rythme, un SDR envoie 25 emails personnalises par jour maximum. Pas assez pour generer un pipeline suffisant.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Les donnees d&apos;enrichissement sont accessibles.</strong> Avec des outils comme Clay, Apollo ou Clearbit, vous avez acces a des centaines de data points sur chaque prospect : taille de l&apos;equipe, technologies utilisees, recrutements en cours, levees de fonds, actualites. L&apos;IA peut exploiter ces donnees pour personnaliser a grande echelle.</li>
                    </ul>
                    <p>L&apos;automatisation intelligente de la prospection ne remplace pas les SDR. Elle leur permet de se concentrer sur ce qui a de la valeur : les conversations, la qualification et le closing. Les taches repetitives (recherche, enrichissement, premier message) sont delegues a l&apos;IA.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "2-3%", label: "Taux de reponse moyen en cold email", color: "#EF4444" },
                      { stat: "70%", label: "Temps SDR sur taches repetitives", color: "#FF7A59" },
                      { stat: "8-15%", label: "Taux de reponse avec IA + personnalisation", color: "#22C55E" },
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
              <section id="quatre-etapes" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 4 etapes de la prospection automatisee</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La prospection automatisee par l&apos;IA suit un workflow en quatre etapes sequentielles. Chacune alimente la suivante. Si une etape est mal executee, tout le reste s&apos;effondre.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        step: "01",
                        title: "Definir l'ICP (Ideal Customer Profile)",
                        desc: "C'est la fondation. Qui sont vos meilleurs clients ? Quelle taille d'entreprise, quel secteur, quel titre de poste, quels signaux d'achat ? L'ICP n'est pas une intuition, c'est une analyse de vos 20 meilleurs clients existants. Secteur, taille, persona, cycle de vente, deal moyen. Sans ICP precis, vous automatisez du bruit.",
                        color: "#6D00CC",
                      },
                      {
                        step: "02",
                        title: "Enrichir les donnees",
                        desc: "Une fois l'ICP defini, vous construisez des listes de prospects correspondants. Puis vous enrichissez chaque contact avec des donnees contextuelles : technologie utilisee, recrutements en cours, actualites recentes, contenu publie sur LinkedIn. Plus l'enrichissement est riche, plus la personnalisation sera pertinente.",
                        color: "#4B5EFC",
                      },
                      {
                        step: "03",
                        title: "Personnaliser les messages",
                        desc: "L'IA genere un message unique pour chaque prospect en exploitant les donnees d'enrichissement. Pas un template avec des variables, mais un message qui demontre que vous comprenez le contexte du prospect. L'angle, l'accroche, le pain point evoque sont specifiques a chaque destinataire.",
                        color: "#FF7A59",
                      },
                      {
                        step: "04",
                        title: "Sequencer et suivre",
                        desc: "Les messages sont integres dans des sequences multi-canal (email, LinkedIn, telephone) avec des relances automatisees. L'IA ajuste le timing et le contenu des relances en fonction du comportement du prospect (ouverture, clic, visite site). Le suivi est automatise, les alertes sont intelligentes.",
                        color: "#22C55E",
                      },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: item.color }}>{item.step}</div>
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;erreur la plus frequente est de commencer par l&apos;etape 3 (la personnalisation) sans avoir fait correctement les etapes 1 et 2. Vous obtenez des messages personnalises envoyes aux mauvaises personnes. Le resultat est pire que de la prospection manuelle car vous consumez votre quota d&apos;envoi sur des contacts hors cible.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="ia-enrichissement" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;IA pour l&apos;enrichissement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;enrichissement est l&apos;etape ou l&apos;IA a le plus d&apos;impact immediat. Un SDR passe en moyenne 20 minutes a enrichir manuellement un contact : lecture du profil LinkedIn, visite du site web, recherche d&apos;actualites. Un agent IA fait le meme travail en 30 secondes, avec plus de sources et plus de donnees.</p>
                    <p>Voici les sources de donnees exploitees par un agent d&apos;enrichissement IA :</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Stack d&apos;enrichissement IA</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Source</th>
                            <th className="text-left py-2 px-2 text-[#999] font-semibold">Donnees</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Outil</th>
                            <th className="text-center py-2 pl-2 text-[#999] font-semibold">Fiabilite</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { source: "LinkedIn", data: "Poste, anciennete, parcours, contenu publie", tool: "Clay / Apollo", reliability: "Haute" },
                            { source: "Site web", data: "Technologie, offres, positionnement, taille", tool: "Clay / BuiltWith", reliability: "Haute" },
                            { source: "Actualites", data: "Levees de fonds, recrutements, partenariats", tool: "Clay / Google News", reliability: "Moyenne" },
                            { source: "Offres d'emploi", data: "Stack tech, croissance, priorites", tool: "Apollo / Indeed API", reliability: "Haute" },
                            { source: "Reseaux sociaux", data: "Ton, centres d'interet, engagement", tool: "Clay / IA", reliability: "Moyenne" },
                            { source: "Donnees firmographiques", data: "CA, effectif, secteur, localisation", tool: "Apollo / Societeinfo", reliability: "Haute" },
                          ].map((row) => (
                            <tr key={row.source} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.source}</td>
                              <td className="py-2.5 px-2 text-[#666]">{row.data}</td>
                              <td className="py-2.5 px-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">{row.tool}</span></td>
                              <td className="py-2.5 pl-2 text-center text-[#999]">{row.reliability}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le role de l&apos;IA dans l&apos;enrichissement.</strong> Les outils comme Clay ou Apollo fournissent les donnees brutes. L&apos;IA (Claude, GPT) les synthetise et les interprete. Par exemple, l&apos;IA peut analyser les offres d&apos;emploi d&apos;une entreprise pour deduire ses priorites strategiques, ou croiser l&apos;anciennete d&apos;un contact avec la taille de l&apos;equipe pour estimer son pouvoir de decision.</p>
                    <p><strong className="text-[#111]">Le resultat.</strong> Au lieu d&apos;un contact avec un nom, un email et un titre de poste, vous obtenez un profil complet avec des signaux d&apos;achat, un contexte d&apos;approche et des angles de personnalisation. C&apos;est la matiere premiere de l&apos;etape suivante.</p>
                    <p><strong className="text-[#111]">Le cout.</strong> L&apos;enrichissement par Clay coute entre 0,10 EUR et 0,50 EUR par contact selon les sources utilisees. A 1 000 contacts par mois, le budget enrichissement est de 100 a 500 EUR. Compare au temps SDR economise (20 min/contact x 1 000 contacts = 333 heures), le ROI est de 30x a 50x.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="ia-personnalisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;IA pour la personnalisation a grande echelle</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La personnalisation est le coeur du systeme. C&apos;est ce qui differencie un cold email ignore d&apos;un cold email qui obtient une reponse. L&apos;IA permet une personnalisation qui etait impossible manuellement a volume.</p>
                    <p>Il y a trois niveaux de personnalisation, et chacun a un impact mesurable sur le taux de reponse :</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        level: "Niveau 1 : Variables",
                        desc: "Prenom, entreprise, secteur. C'est ce que fait tout le monde. L'impact sur le taux de reponse est quasi nul en 2026 car tous les outils le font. Ce n'est plus de la personnalisation, c'est le minimum.",
                        impact: "+0.5%",
                        color: "#EF4444",
                      },
                      {
                        level: "Niveau 2 : Contexte",
                        desc: "Reference a une actualite recente, au contenu publie par le prospect, a un recrutement en cours. Ca montre que vous avez fait vos recherches. L'IA genere ces references automatiquement a partir des donnees d'enrichissement.",
                        impact: "+3-5%",
                        color: "#FF7A59",
                      },
                      {
                        level: "Niveau 3 : Insight",
                        desc: "Identification d'un probleme specifique au prospect et proposition d'une solution adaptee. L'IA croise les donnees firmographiques, les signaux d'achat et votre proposition de valeur pour generer un angle unique. C'est le niveau qui transforme un cold email en conversation.",
                        impact: "+8-12%",
                        color: "#22C55E",
                      },
                    ].map((item) => (
                      <div key={item.level} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.level}</span>
                          </div>
                          <span className="text-[12px] font-bold" style={{ color: item.color }}>{item.impact}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Comment ca marche concretement.</strong> L&apos;agent IA recoit les donnees enrichies du prospect et un prompt structure qui contient votre proposition de valeur, vos cas clients par secteur et votre ton de voix. Il genere un email de 4-6 lignes avec une accroche contextuelle, un pain point identifie et un CTA clair. Le tout en 5 secondes par contact.</p>
                    <p><strong className="text-[#111]">La cle : le prompt engineering.</strong> La qualite du message genere depend a 80% de la qualite du prompt. Un bon prompt inclut : le contexte de l&apos;entreprise du prospect, les donnees d&apos;enrichissement pertinentes, votre proposition de valeur pour ce segment, des exemples de messages qui ont fonctionne et des contraintes (longueur, ton, CTA). Sans prompt structure, l&apos;IA produit des messages generiques qui ne performent pas mieux que des templates.</p>
                    <p><strong className="text-[#111]">Le controle qualite.</strong> On recommande toujours une validation humaine sur un echantillon de 10-20% des messages generes. L&apos;IA fait 95% du travail, l&apos;humain valide et ajuste. Ce n&apos;est pas un processus 100% automatise, c&apos;est un processus augmente.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="sequences-automatisees" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les sequences automatisees</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un seul email ne suffit jamais. Il faut en moyenne 5 a 7 points de contact pour obtenir une reponse en B2B. Les sequences automatisees orchestrent ces touchpoints sur plusieurs canaux avec un timing optimise.</p>
                    <p>Voici la structure de sequence qui produit les meilleurs resultats chez nos clients :</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Sequence type -- 14 jours, multi-canal</p>
                    <div className="space-y-2">
                      {[
                        { day: "J0", action: "Email 1 : accroche personnalisee + proposition de valeur", channel: "Email", color: "#6D00CC" },
                        { day: "J1", action: "Connexion LinkedIn avec note personnalisee", channel: "LinkedIn", color: "#4B5EFC" },
                        { day: "J3", action: "Email 2 : cas client du meme secteur", channel: "Email", color: "#6D00CC" },
                        { day: "J5", action: "Interaction LinkedIn (like/commentaire sur un post)", channel: "LinkedIn", color: "#4B5EFC" },
                        { day: "J7", action: "Email 3 : contenu de valeur (article, etude)", channel: "Email", color: "#6D00CC" },
                        { day: "J10", action: "Appel telephonique (si profil prioritaire)", channel: "Telephone", color: "#FF7A59" },
                        { day: "J14", action: "Email 4 : breakup email (dernier contact)", channel: "Email", color: "#6D00CC" },
                      ].map((item) => (
                        <div key={item.day} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <span className="text-[11px] font-bold w-8 shrink-0" style={{ color: item.color }}>{item.day}</span>
                          <span className="inline-block px-2 py-0.5 rounded text-[9px] font-medium text-white shrink-0" style={{ background: item.color }}>{item.channel}</span>
                          <span className="text-[11px] text-[#666]">{item.action}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Les timings s&apos;ajustent automatiquement en fonction du comportement du prospect</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;outil de reference : Lemlist.</strong> Lemlist permet de creer des sequences multi-canal (email, LinkedIn, telephone) avec un suivi automatise. L&apos;integration avec Clay pour l&apos;enrichissement et Claude pour la personnalisation cree un workflow complet. Le tout se connecte au CRM (HubSpot, Pipedrive) pour alimenter le pipeline.</p>
                    <p><strong className="text-[#111]">L&apos;IA dans les relances.</strong> Les relances sont souvent negligees. L&apos;IA peut adapter le contenu de chaque relance en fonction du comportement du prospect : s&apos;il a ouvert l&apos;email sans repondre, le follow-up insiste sur le CTA. S&apos;il a clique sur le lien du cas client, le follow-up approfondit ce sujet. S&apos;il n&apos;a rien ouvert, le follow-up change completement d&apos;angle.</p>
                    <p><strong className="text-[#111]">Le volume optimal.</strong> Pour un SDR utilisant ce systeme, le volume optimal est de 50 a 80 nouveaux prospects par semaine dans la sequence. Au-dela, la qualite baisse. En dessous, le pipeline ne se remplit pas assez vite. A 80 prospects/semaine sur 4 semaines, vous avez en permanence 300 a 350 prospects actifs dans vos sequences.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="metriques-suivre" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les metriques a suivre</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Automatiser sans mesurer, c&apos;est conduire sans tableau de bord. Voici les 6 metriques qui comptent vraiment pour evaluer la performance de votre prospection automatisee.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { metric: "Taux d'ouverture", benchmark: "50-70%", desc: "En dessous de 50%, votre objet est mauvais ou vos emails tombent en spam. Au-dessus de 70%, vous etes dans le vert. Un taux d'ouverture qui chute progressivement signale un probleme de delivrabilite.", color: "#6D00CC" },
                      { metric: "Taux de reponse", benchmark: "8-15%", desc: "C'est la metrique reine. Un taux de reponse a 8% est bon, a 15% c'est excellent. En dessous de 5%, revisez votre ICP, votre enrichissement ou votre personnalisation. Le taux de reponse mesure la qualite globale du systeme.", color: "#22C55E" },
                      { metric: "Taux de reponse positive", benchmark: "30-50% des reponses", desc: "Toutes les reponses ne sont pas bonnes. Le ratio reponses positives / reponses totales indique la qualite du ciblage. Si vous avez beaucoup de 'non merci', votre ICP est peut-etre trop large.", color: "#4B5EFC" },
                      { metric: "Taux de meeting booke", benchmark: "3-5%", desc: "Le pourcentage de prospects contactes qui bookent un meeting. C'est la metrique de conversion finale de la prospection. En dessous de 2%, le systeme ne genere pas assez de pipeline.", color: "#FF7A59" },
                      { metric: "Cout par meeting", benchmark: "50-150 EUR", desc: "Le cout total (outils + temps SDR) divise par le nombre de meetings bookes. Permet de comparer avec d'autres canaux d'acquisition. En dessous de 100 EUR, votre systeme est performant.", color: "#6C5CE7" },
                      { metric: "Pipeline genere", benchmark: "5-10x le cout", desc: "La valeur du pipeline cree par la prospection automatisee, rapportee au cout total. Un ratio de 5x est le minimum pour justifier l'investissement. A 10x, le systeme est mature et performant.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.metric} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.metric}</span>
                          </div>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-medium">Benchmark : {item.benchmark}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Mesurez ces metriques chaque semaine et comparez-les par segment (secteur, persona, taille d&apos;entreprise). Vous decouvrirez rapidement quels segments repondent le mieux et pourrez concentrer vos efforts dessus. La prospection automatisee n&apos;est pas un systeme &ldquo;set and forget&rdquo;. C&apos;est un systeme qui s&apos;ameliore par iteration.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="pieges-eviter" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les pieges a eviter</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;automatisation de la prospection peut se retourner contre vous si elle est mal executee. Voici les quatre pieges les plus courants et comment les eviter.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Le spam industriel",
                        desc: "Automatiser l'envoi de 500 emails generiques par jour, c'est du spam. Google et Outlook detectent ces patterns et vos emails finissent en spam. Votre domaine est brule. Reparer une reputation de domaine prend 3 a 6 mois. Le volume ideal est de 50-80 emails personnalises par jour par adresse d'envoi, avec un warm-up progressif.",
                        color: "#EF4444",
                        fix: "Limiter le volume a 50-80 emails/jour/adresse. Utiliser le warm-up email (Lemlist, Mailreach). Monitorer le taux de rebond (< 3%)."
                      },
                      {
                        title: "La depersonnalisation",
                        desc: "L'IA peut generer des messages qui semblent personnalises mais qui sonnent faux. Un compliment generique sur un post LinkedIn que le prospect n'a pas ecrit, une reference a une actualite qui date de 6 mois. La fausse personnalisation est pire que pas de personnalisation : elle detruit la confiance.",
                        color: "#FF7A59",
                        fix: "Valider un echantillon de 10-20% des messages avant envoi. Former l'IA avec des exemples de bons et mauvais messages. Verifier les donnees d'enrichissement."
                      },
                      {
                        title: "L'absence de segmentation",
                        desc: "Envoyer le meme message a un CEO de startup et a un directeur commercial de grand groupe est une erreur. Les pain points, le langage, les references ne sont pas les memes. L'IA doit avoir des prompts differents par segment, avec des cas clients et des propositions de valeur adaptes.",
                        color: "#6C5CE7",
                        fix: "Creer 3-5 segments max avec des prompts et des sequences dedies. Un message, un persona."
                      },
                      {
                        title: "Le manque de suivi humain",
                        desc: "Quand un prospect repond, l'IA s'arrete. C'est un humain qui prend le relais pour la conversation. Si le SDR met 24 heures a repondre a un prospect chaud, le taux de conversion chute de 40%. L'automatisation genere des opportunities, l'humain les convertit. Le handoff doit etre instantane.",
                        color: "#4B5EFC",
                        fix: "Alertes Slack en temps reel sur les reponses. SLA de 2 heures maximum pour repondre a un prospect qualifie."
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
                    <p>Le point commun de ces pieges : ils viennent d&apos;une execution precipitee. L&apos;automatisation demande plus de preparation en amont (ICP, segmentation, prompts, process de validation) mais moins de travail quotidien une fois en place. C&apos;est un investissement initial qui paie sur la duree.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on deploie des systemes de prospection automatisee pour des equipes B2B de 3 a 30 commerciaux. Pas des outils isoles, des systemes complets qui integrent enrichissement, personnalisation et sequences dans un workflow fluide.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Stack integree", desc: "Clay pour l'enrichissement, Claude pour la personnalisation, Lemlist pour les sequences, HubSpot pour le pipeline. Chaque outil fait ce qu'il fait de mieux. Le tout connecte par Make pour un workflow automatise de bout en bout.", color: "#6D00CC" },
                      { title: "ICP data-driven", desc: "On ne devine pas votre ICP. On analyse vos 20 meilleurs clients (cycle de vente, deal size, taux de retention) pour identifier les patterns communs. L'ICP est quantifie, pas intuitif.", color: "#4B5EFC" },
                      { title: "Personnalisation niveau 3", desc: "Nos prompts sont calibres sur votre ton de voix, vos cas clients et vos differenciateurs. Chaque message genere par l'IA est unique, contextuel et pertinent. Pas de templates avec des variables.", color: "#FF7A59" },
                      { title: "Iteration continue", desc: "On mesure chaque semaine, on ajuste les prompts, on affine les segments. Le taux de reponse s'ameliore de 2 a 5 points entre le premier mois et le troisieme. L'automatisation est un systeme vivant.", color: "#22C55E" },
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
                    <p className="text-[12px] font-semibold text-white mb-3">Resultats moyens a M+3</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "12%", label: "Taux de reponse moyen", color: "#22C55E" },
                        { stat: "85 EUR", label: "Cout par meeting", color: "#4B5EFC" },
                        { stat: "8x", label: "Pipeline / cout", color: "#6D00CC" },
                        { stat: "40%", label: "Reponses positives", color: "#FF7A59" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>L&apos;automatisation de la prospection n&apos;est pas un projet IT. C&apos;est un projet commercial. On travaille avec vos SDR, pas a cote d&apos;eux. Le systeme est concu pour etre utilise et ameliore par votre equipe, pas pour creer une dependance a un prestataire.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Automatiser votre prospection B2B ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on deploie des systemes de prospection IA complets : enrichissement, personnalisation, sequences, suivi. Un appel de 30 minutes pour evaluer le potentiel d&apos;automatisation de votre equipe.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6D00CC] text-white rounded-lg text-[13px] font-medium hover:bg-[#5A00AA] transition-colors">
                  Automatiser ma prospection
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
