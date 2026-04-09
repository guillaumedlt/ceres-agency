"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ROI de l'IA en B2B : comment le calculer (avec des vrais chiffres)",
  description: "Guide complet pour calculer le ROI de l'intelligence artificielle en B2B. Formule detaillee, gains en temps, impact revenue, couts reels et exemple chiffre pour une equipe de 15 commerciaux. ROI de 8x a 12x.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/roi-ia-b2b-calculer" },
  articleSection: "Data & Reporting",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "personne-ne-mesure", title: "Pourquoi personne ne mesure" },
  { id: "formule-simple", title: "La formule simple" },
  { id: "gains-temps", title: "Gains en temps" },
  { id: "impact-revenue", title: "Impact revenue" },
  { id: "cout-reel-ia", title: "Cout reel de l'IA" },
  { id: "exemple-chiffre", title: "Exemple chiffre" },
  { id: "roi-pas-au-rdv", title: "Quand le ROI n'est pas la" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Les metriques IA pour le RevOps : quels KPI suivre ?", slug: "metriques-ia-revops-kpi", category: "Data & Reporting", color: "#22C55E" },
  { title: "Donnees, process, IA : dans quel ordre faire son RevOps ?", slug: "process-data-ia-ordre-revops", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Agents IA deployes chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA & Agents", color: "#6D00CC" },
];

export default function RoiIaB2bCalculerArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("personne-ne-mesure");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=ROI%20de%20l%27IA%20en%20B2B%20%3A%20comment%20le%20calculer&url=https://ceres.agency/blog/roi-ia-b2b-calculer" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/roi-ia-b2b-calculer" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">ROI de l&apos;IA en B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Data &amp; Reporting</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                ROI de l&apos;IA en B2B : comment le calculer (avec des vrais chiffres)
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Tout le monde deploie de l&apos;IA. Personne ne calcule le retour sur investissement. Pas parce que c&apos;est impossible, mais parce que personne ne sait par ou commencer. Ce guide vous donne la formule, les metriques et un exemple chiffre complet pour mesurer concretement ce que l&apos;IA rapporte a votre equipe commerciale B2B. Avec des vrais chiffres, pas des promesses.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>9 avril 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 : Pourquoi personne ne mesure le ROI de l'IA */}
              <section id="personne-ne-mesure" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi personne ne mesure le ROI de l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En 2026, 78% des entreprises B2B declarent utiliser de l&apos;IA dans leurs processus commerciaux ou marketing. Mais quand on leur demande quel est le retour sur investissement concret, le silence est assourdissant. Moins de 15% savent repondre avec un chiffre.</p>
                    <p>Ce n&apos;est pas un probleme de volonte. C&apos;est un probleme de methode. Trois raisons principales expliquent cette absence de mesure :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">C&apos;est nouveau.</strong> L&apos;IA generative en B2B a moins de 3 ans. Les equipes n&apos;ont pas de baseline historique, pas de benchmark interne. On ne sait pas quoi comparer a quoi.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">On ne sait pas quoi mesurer.</strong> L&apos;IA n&apos;est pas un outil unique avec un input et un output. Elle intervient sur des dizaines de micro-taches. Enrichissement, scoring, redaction, analyse, qualification. Chaque usage a son propre impact, souvent indirect.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Les vendeurs d&apos;IA evitent le sujet.</strong> Plus facile de vendre du &ldquo;gain de productivite&rdquo; vague que de s&apos;engager sur des chiffres. Les demos impressionnent, mais personne ne vous montre le tableur avec le calcul du ROI a 6 mois.</li>
                    </ul>
                    <p>Resultat : les entreprises investissent entre 200 et 2 000 EUR par mois en outils IA sans savoir si ca rapporte plus que ca ne coute. C&apos;est comme investir en marketing sans tracker les conversions. Ca peut marcher, mais ca peut aussi bruler du budget sans aucun retour.</p>
                    <p>Ce guide est la pour changer ca. On va decomposer la formule du ROI de l&apos;IA en trois composantes mesurables : les gains en temps, l&apos;impact revenue et les couts reels. Avec des chiffres concrets, pas des fourchettes marketing.</p>
                  </div>

                  {/* Key stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "78%", label: "des entreprises B2B utilisent l'IA", color: "#22C55E" },
                      { stat: "<15%", label: "savent mesurer le ROI concret", color: "#EF4444" },
                      { stat: "200-2000 EUR", label: "investissement mensuel moyen en IA", color: "#4B5EFC" },
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

              {/* Section 2 : La formule simple */}
              <section id="formule-simple" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La formule simple</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le ROI de l&apos;IA se calcule avec une formule en trois termes. Rien de revolutionnaire, mais la discipline de decomposer chaque composante est ce qui fait la difference entre une intuition et une mesure.</p>
                  </div>

                  {/* Formula visual */}
                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-5 text-center">Formule du ROI de l&apos;IA</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6">
                      <div className="rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 px-4 py-3 text-center">
                        <p className="text-[18px] font-bold text-[#22C55E]">ROI</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">=</span>
                      <div className="rounded-lg bg-[#4B5EFC]/10 border border-[#4B5EFC]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#4B5EFC]">Gains en temps</p>
                        <p className="text-[9px] text-[#999]">x cout horaire</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">+</span>
                      <div className="rounded-lg bg-[#6C5CE7]/10 border border-[#6C5CE7]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#6C5CE7]">Impact revenue</p>
                        <p className="text-[9px] text-[#999]">win rate, cycle, pipeline</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">-</span>
                      <div className="rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#EF4444]">Cout IA</p>
                        <p className="text-[9px] text-[#999]">API + outils + setup</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center">Chaque terme se decompose en sous-metriques mesurables</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Terme 1 : Gains en temps x cout horaire.</strong> C&apos;est le plus facile a mesurer. Vous identifiez les taches automatisees par l&apos;IA, vous mesurez le temps gagne, vous multipliez par le cout horaire charge de la personne concernee. Un commercial a 55 000 EUR annuel brut charge revient a environ 30 EUR de l&apos;heure. Un SDR a 40 000 EUR, environ 22 EUR/h.</p>
                    <p><strong className="text-[#111]">Terme 2 : Impact revenue.</strong> Plus complexe, mais pas impossible. C&apos;est l&apos;effet de l&apos;IA sur vos indicateurs business : amelioration du win rate, reduction du cycle de vente, augmentation du pipeline couvert. On utilise des metriques proxy et une methode d&apos;attribution pour isoler l&apos;impact de l&apos;IA.</p>
                    <p><strong className="text-[#111]">Terme 3 : Cout IA.</strong> Tout compris : licences API, outils d&apos;orchestration, cout de setup initial (amorti sur 12 mois), maintenance mensuelle. C&apos;est le terme le plus simple a calculer, et c&apos;est souvent le plus petit des trois.</p>
                    <p>L&apos;erreur classique est de ne calculer que le terme 1 (les gains en temps) et d&apos;oublier l&apos;impact revenue. C&apos;est comme mesurer l&apos;efficacite d&apos;un commercial uniquement au nombre d&apos;appels passes, sans regarder les deals signes. Le terme 2 est souvent celui qui justifie l&apos;investissement a lui seul.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Calculer les gains en temps */}
              <section id="gains-temps" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Calculer les gains en temps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pour chaque tache automatisee par l&apos;IA, vous devez mesurer quatre variables : le temps passe avant l&apos;IA, le temps passe apres, la frequence de la tache et le nombre de personnes concernees. La formule par tache est simple :</p>
                    <p className="text-[12px] font-semibold text-[#111] bg-[#FAFAFA] rounded-lg p-3 border border-[#F2F2F2]">Gain = (Temps avant - Temps apres) x Frequence x Nombre de personnes x Cout horaire</p>
                    <p>Voici cinq taches couramment automatisees par l&apos;IA en B2B, avec des chiffres moyens constates chez nos clients :</p>
                  </div>

                  {/* ROI Calculator mockup - Before/After table */}
                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Calculateur de gains en temps -- 5 taches IA typiques</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Tache</th>
                            <th className="text-center py-2 px-2 text-[#EF4444] font-semibold">Avant IA</th>
                            <th className="text-center py-2 px-2 text-[#22C55E] font-semibold">Apres IA</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Frequence</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Personnes</th>
                            <th className="text-center py-2 pl-2 text-[#4B5EFC] font-semibold">Gain/sem</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { task: "Enrichissement leads", before: "20 min/lead", after: "2 min/lead", freq: "50 leads/sem", people: "2 SDR", gain: "10h", savings: "220 EUR" },
                            { task: "Reporting hebdo", before: "3h", after: "15 min", freq: "1x/sem", people: "1 manager", gain: "2h45", savings: "83 EUR" },
                            { task: "Qualification inbound", before: "15 min/lead", after: "3 min/lead", freq: "30 leads/sem", people: "2 SDR", gain: "6h", savings: "132 EUR" },
                            { task: "Resumes calls", before: "20 min/call", after: "0 min", freq: "40 calls/sem", people: "5 AE", gain: "13h20", savings: "400 EUR" },
                            { task: "Lead scoring", before: "10 min/lead", after: "1 min/lead", freq: "50 leads/sem", people: "1 ops", gain: "7h30", savings: "225 EUR" },
                          ].map((row) => (
                            <tr key={row.task} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.task}</td>
                              <td className="py-2.5 px-2 text-center">
                                <span className="inline-block px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444] font-medium">{row.before}</span>
                              </td>
                              <td className="py-2.5 px-2 text-center">
                                <span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">{row.after}</span>
                              </td>
                              <td className="py-2.5 px-2 text-center text-[#999]">{row.freq}</td>
                              <td className="py-2.5 px-2 text-center text-[#999]">{row.people}</td>
                              <td className="py-2.5 pl-2 text-center">
                                <div className="text-[#4B5EFC] font-bold">{row.gain}</div>
                                <div className="text-[9px] text-[#999]">{row.savings}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="border-t-2 border-[#E8E8E8]">
                            <td colSpan={5} className="py-3 pr-3 font-semibold text-[#111] text-[12px]">Total gains hebdomadaires</td>
                            <td className="py-3 pl-2 text-center">
                              <div className="text-[#22C55E] font-bold text-[14px]">39h35</div>
                              <div className="text-[10px] text-[#999] font-medium">1 060 EUR/sem</div>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Chiffres moyens constates -- Cout horaire charge moyen : 28 EUR/h</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Enrichissement leads.</strong> Avant l&apos;IA, un SDR passe 20 minutes par lead a chercher des informations sur LinkedIn, le site web de l&apos;entreprise, les actualites. Avec un agent IA connecte a Clay ou Apollo, l&apos;enrichissement est fait en 2 minutes, avec des donnees plus completes. Sur 50 leads par semaine et 2 SDR, le gain est de 10 heures.</p>
                    <p><strong className="text-[#111]">Reporting hebdomadaire.</strong> La creation du rapport commercial hebdomadaire prend en moyenne 3 heures : extraction des donnees, mise en forme, analyse des ecarts, commentaires. Un agent IA genere le rapport en 15 minutes, avec une analyse narrative des tendances et des alertes automatiques.</p>
                    <p><strong className="text-[#111]">Qualification inbound.</strong> Chaque lead entrant necessite une qualification manuelle : lecture du formulaire, recherche entreprise, verification du fit, notation. L&apos;IA le fait en temps reel, avec un scoring plus precis car elle croise plus de sources de donnees qu&apos;un humain.</p>
                    <p><strong className="text-[#111]">Resumes de calls.</strong> Apres chaque call, un commercial passe 15 a 20 minutes a rediger un resume dans le CRM. Des outils comme Claap, combines a un agent IA, produisent un resume structure automatiquement : points cles, objections, next steps, mise a jour du CRM. Gain net : 20 minutes par call, multiplie par 40 calls par semaine pour 5 commerciaux.</p>
                    <p><strong className="text-[#111]">Lead scoring.</strong> Le scoring manuel repose sur des regles statiques et prend du temps. Un modele IA analyse le comportement, l&apos;engagement, les signaux d&apos;intent et produit un score dynamique en temps reel. Plus rapide et plus precis.</p>
                    <p>Total des gains en temps : environ 40 heures par semaine pour une equipe de 15 personnes. Soit l&apos;equivalent d&apos;un poste a temps plein. A 28 EUR/h en moyenne, ca represente plus de 1 000 EUR par semaine, soit environ 4 500 EUR par mois en gains de productivite directe.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Calculer l'impact revenue */}
              <section id="impact-revenue" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Calculer l&apos;impact revenue</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;impact revenue est le terme le plus difficile a mesurer, mais c&apos;est souvent le plus important. L&apos;IA n&apos;agit pas directement sur le chiffre d&apos;affaires, mais elle influence des leviers intermediaires qui, eux, ont un impact mesurable sur le revenue. On utilise trois metriques proxy.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        metric: "Amelioration du win rate",
                        before: "22%",
                        after: "25-28%",
                        explanation: "Un meilleur scoring, une qualification plus precise, des resumes de calls qui alimentent la strategie de closing. Les commerciaux ciblent les bons deals et personnalisent mieux leur approche. Sur un pipeline de 500 000 EUR, passer de 22% a 26% de win rate, c'est 20 000 EUR de revenus supplementaires par mois.",
                        color: "#22C55E",
                        method: "Comparer le win rate 3 mois avant et 3 mois apres le deploiement. Controler les autres variables (saisonnalite, changement d'equipe, nouveau produit)."
                      },
                      {
                        metric: "Reduction du cycle de vente",
                        before: "45 jours",
                        after: "35-38 jours",
                        explanation: "Des leads mieux qualifies entrent dans le pipeline. Les commerciaux perdent moins de temps sur des deals mal qualifies. Les relances sont plus pertinentes et mieux timees. Un cycle raccourci de 7 a 10 jours, c'est plus de deals closes par trimestre a equipe constante.",
                        color: "#4B5EFC",
                        method: "Mesurer la duree moyenne du cycle de vente (creation deal → closed won) par cohorte mensuelle. Filtrer les outliers."
                      },
                      {
                        metric: "Augmentation du pipeline couvert",
                        before: "3x ARR target",
                        after: "4-5x ARR target",
                        explanation: "L'IA permet de traiter plus de leads, de mieux enrichir le pipeline, d'identifier des signaux d'intent plus tot. Le pipeline couvert augmente sans augmenter la taille de l'equipe. Un pipeline coverage ratio qui passe de 3x a 4x, c'est une previsibilite et une securite accrues.",
                        color: "#6C5CE7",
                        method: "Pipeline total value / Revenue target par trimestre. Comparer trimestre par trimestre."
                      },
                    ].map((item) => (
                      <div key={item.metric} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.metric}</span>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444] text-[10px] font-medium">Avant : {item.before}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-medium">Apres : {item.after}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.explanation}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#4B5EFC]/5 p-2">
                          <span className="text-[10px] text-[#4B5EFC] font-semibold shrink-0 mt-0.5">Methode :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.method}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La methode d&apos;attribution.</strong> L&apos;IA n&apos;est jamais le seul facteur. Pour isoler son impact, on recommande une approche avant/apres avec un groupe de controle quand c&apos;est possible. Par exemple, deployer l&apos;IA sur une partie de l&apos;equipe pendant un mois, puis comparer les resultats. Si le groupe avec IA a un win rate de 26% vs 22% pour le groupe sans, vous avez une estimation fiable de l&apos;impact.</p>
                    <p>Quand le groupe de controle n&apos;est pas possible, la methode la plus simple est de comparer les KPI sur des periodes equivalentes (meme mois de l&apos;annee precedente, ou moyenne des 3 mois precedents). Ce n&apos;est pas parfait, mais c&apos;est infiniment mieux que de ne rien mesurer.</p>
                    <p>En pratique, l&apos;impact revenue est generalement de l&apos;ordre de 10 000 a 30 000 EUR par mois supplementaires pour une equipe de 15 commerciaux avec un deal moyen de 15 000 EUR. Ce chiffre varie enormement selon le secteur, le cycle de vente et la maturite de l&apos;equipe.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Calculer le cout reel de l'IA */}
              <section id="cout-reel-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Calculer le cout reel de l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est le terme le plus simple a calculer, et aussi celui ou les surprises sont les plus rares. Le cout total de l&apos;IA pour une PME B2B se decompose en quatre postes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { poste: "API Claude (ou equivalent)", range: "50 - 200 EUR/mois", desc: "Le cout de l'API depend du volume d'utilisation. Pour un usage standard (enrichissement, scoring, resumes, reporting), comptez entre 50 et 200 EUR par mois. Les modeles les plus couteux (Opus) sont utilises pour les taches complexes, les modeles plus legers (Haiku, Sonnet) pour les taches repetitives.", icon: "Cl", iconBg: "#D4A27F" },
                      { poste: "Outils d'orchestration", range: "30 - 100 EUR/mois", desc: "Make, n8n ou Zapier pour orchestrer les workflows entre l'API IA, le CRM, les sources de donnees. Le cout depend du nombre d'operations. Pour une PME, 30 a 100 EUR couvre largement les besoins.", icon: "Mk", iconBg: "#6D00CC" },
                      { poste: "Setup initial (one-time)", range: "2 000 - 8 000 EUR", desc: "Configuration des agents, integration avec le CRM, tests, ajustements. C'est un cout unique, a amortir sur 12 mois. Soit 170 a 670 EUR/mois en amortissement.", icon: "St", iconBg: "#4B5EFC" },
                      { poste: "Maintenance mensuelle", range: "0 - 200 EUR/mois", desc: "Ajustements de prompts, monitoring des performances, corrections ponctuelles. Si le setup est bien fait, la maintenance est minimale. Si vous avez un RevOps en interne, c'est souvent integre a son temps.", icon: "Mn", iconBg: "#22C55E" },
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

                  {/* Total cost summary */}
                  <div className="rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[12px] font-semibold text-[#111]">Cout total mensuel pour une PME</p>
                      <p className="text-[18px] font-bold text-[#22C55E]">100 - 400 EUR</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]">Setup initial amorti sur 12 mois inclus. Ce chiffre couvre l&apos;ensemble des couts IA pour une equipe de 5 a 20 personnes avec un usage standard (enrichissement, scoring, reporting, resumes, qualification).</p>
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le point cle : le cout de l&apos;IA est lineaire au volume, mais avec des economies d&apos;echelle. Doubler le nombre de leads traites ne double pas le cout. Les couts fixes (setup, outils d&apos;orchestration) sont repartis sur un volume plus large. C&apos;est ce qui rend l&apos;IA particulierement rentable pour les equipes en croissance.</p>
                    <p>Attention aux couts caches : si vos donnees sont de mauvaise qualite, l&apos;IA produira des resultats mediocres et vous devrez investir plus en maintenance et en corrections. Le nettoyage des donnees en amont est un prerequis, pas une option.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Exemple chiffre */}
              <section id="exemple-chiffre" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Exemple chiffre : SaaS B2B de 15 commerciaux</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Prenons un cas concret. Une entreprise SaaS B2B avec 15 commerciaux (5 SDR, 8 AE, 2 managers), un deal moyen de 12 000 EUR, un cycle de vente de 45 jours et un pipeline mensuel de 600 000 EUR. Voici le calcul complet du ROI de l&apos;IA sur un mois.</p>
                  </div>

                  {/* Full ROI calculation */}
                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-5 text-center">Calcul du ROI -- Mois type</p>

                    {/* Gains en temps */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#4B5EFC]" />
                        <p className="text-[11px] font-semibold text-[#4B5EFC]">Gains en temps</p>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { label: "Enrichissement leads", hours: "40h/mois", value: "1 250 EUR" },
                          { label: "Reporting", hours: "11h/mois", value: "375 EUR" },
                          { label: "Qualification inbound", hours: "24h/mois", value: "670 EUR" },
                          { label: "Resumes calls", hours: "53h/mois", value: "1 600 EUR" },
                          { label: "Lead scoring", hours: "30h/mois", value: "840 EUR" },
                        ].map((g) => (
                          <div key={g.label} className="flex items-center justify-between text-[11px] py-1 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                            <span className="text-[#666]">{g.label}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-[#999]">{g.hours}</span>
                              <span className="font-semibold text-[#4B5EFC] w-[80px] text-right">{g.value}</span>
                            </div>
                          </div>
                        ))}
                        <div className="flex items-center justify-between text-[12px] py-2 px-3 rounded-lg bg-[#4B5EFC]/5 border border-[#4B5EFC]/20">
                          <span className="font-semibold text-[#111]">Sous-total gains en temps</span>
                          <span className="font-bold text-[#4B5EFC]">4 735 EUR/mois</span>
                        </div>
                      </div>
                    </div>

                    {/* Impact revenue */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#6C5CE7]" />
                        <p className="text-[11px] font-semibold text-[#6C5CE7]">Impact revenue</p>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { label: "Win rate : 22% → 26% (+4pts sur 600K pipeline)", value: "24 000 EUR" },
                          { label: "Cycle raccourci : +1 deal supplementaire/mois", value: "12 000 EUR" },
                        ].map((g) => (
                          <div key={g.label} className="flex items-center justify-between text-[11px] py-1 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                            <span className="text-[#666]">{g.label}</span>
                            <span className="font-semibold text-[#6C5CE7] w-[80px] text-right">{g.value}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-between text-[12px] py-2 px-3 rounded-lg bg-[#6C5CE7]/5 border border-[#6C5CE7]/20">
                          <span className="font-semibold text-[#111]">Sous-total impact revenue</span>
                          <span className="font-bold text-[#6C5CE7]">36 000 EUR/mois</span>
                        </div>
                      </div>
                    </div>

                    {/* Couts */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                        <p className="text-[11px] font-semibold text-[#EF4444]">Couts IA</p>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          { label: "API Claude", value: "-150 EUR" },
                          { label: "Make (orchestration)", value: "-60 EUR" },
                          { label: "Setup amorti (5 000 EUR / 12 mois)", value: "-417 EUR" },
                          { label: "Maintenance", value: "-100 EUR" },
                        ].map((c) => (
                          <div key={c.label} className="flex items-center justify-between text-[11px] py-1 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                            <span className="text-[#666]">{c.label}</span>
                            <span className="font-semibold text-[#EF4444] w-[80px] text-right">{c.value}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-between text-[12px] py-2 px-3 rounded-lg bg-[#EF4444]/5 border border-[#EF4444]/20">
                          <span className="font-semibold text-[#111]">Sous-total couts</span>
                          <span className="font-bold text-[#EF4444]">-727 EUR/mois</span>
                        </div>
                      </div>
                    </div>

                    {/* ROI Total */}
                    <div className="rounded-xl border-2 border-[#22C55E] bg-[#22C55E]/5 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[13px] font-semibold text-[#111]">Benefice net mensuel</p>
                        <p className="text-[22px] font-bold text-[#22C55E]">40 008 EUR</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[12px] text-[#666]">ROI mensuel (benefice / cout)</p>
                        <p className="text-[16px] font-bold text-[#22C55E]">55x</p>
                      </div>
                      <p className="text-[10px] text-[#999] mt-2">En ne comptant que les gains en temps (sans impact revenue) : ROI de 6,5x. En incluant l&apos;impact revenue (estimation conservatrice) : ROI de 55x.</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La fourchette realiste : ROI de 8x a 12x.</strong> Le calcul ci-dessus est un cas ideal. En pratique, l&apos;impact revenue est difficile a attribuer integralement a l&apos;IA. Si on prend une attribution conservatrice de 30% (le reste etant lie a l&apos;amelioration des process, la montee en competence des equipes, etc.), l&apos;impact revenue tombe a environ 10 800 EUR/mois. Ce qui donne un benefice net de 14 800 EUR pour 727 EUR de couts, soit un ROI de 8x a 12x selon les hypotheses.</p>
                    <p>Meme dans le scenario le plus conservateur (gains en temps uniquement, zero impact revenue), le ROI reste positif a 6,5x. L&apos;IA se rentabilise par les gains de productivite avant meme de considerer l&apos;impact sur le chiffre d&apos;affaires.</p>
                    <p>C&apos;est ce qui rend cet investissement atypique : le downside est limite (quelques centaines d&apos;euros par mois), et le upside est considerable. Le ratio risque/reward est tres favorable, a condition de bien executer.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Quand le ROI n'est pas au rendez-vous */}
              <section id="roi-pas-au-rdv" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Quand le ROI n&apos;est pas au rendez-vous</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Tout ne marche pas a tous les coups. Certaines implementations d&apos;IA ne produisent pas le ROI attendu. Dans notre experience, quatre causes reviennent systematiquement.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Donnees sales",
                        desc: "L'IA est aussi bonne que les donnees qu'on lui donne. Si votre CRM contient 40% de doublons, des champs vides, des emails invalides, l'IA va produire des resultats mediocres. L'enrichissement sera faux. Le scoring sera incoherent. Les resumes seront bases sur des fiches incompletes. Le nettoyage des donnees doit preceder le deploiement de l'IA, pas l'inverse.",
                        color: "#EF4444",
                        fix: "Faire un audit data quality avant tout deploiement IA. Viser un score de completude superieur a 70% sur les champs critiques."
                      },
                      {
                        title: "Pas de baseline",
                        desc: "Si vous ne mesurez pas vos KPI avant de deployer l'IA, vous ne pourrez jamais demontrer le ROI apres. C'est le piege le plus frequent. Les equipes deploient l'IA dans l'enthousiasme, sans prendre le temps de documenter l'etat initial : temps moyen par tache, win rate, cycle de vente, volume de pipeline.",
                        color: "#FF7A59",
                        fix: "Documenter les KPI de reference (baseline) sur les 3 derniers mois AVANT de deployer. Win rate, cycle, temps par tache, volume traite."
                      },
                      {
                        title: "Mauvaise priorisation",
                        desc: "Automatiser une tache qui prend 5 minutes par semaine ne changera rien. Le ROI vient des taches a fort volume et fort cout : enrichissement (des heures chaque semaine), reporting (regulier et chronophage), qualification (chaque lead, chaque jour). Commencer par les quick wins a fort impact, pas par les cas d'usage les plus impressionnants techniquement.",
                        color: "#6C5CE7",
                        fix: "Classer les cas d'usage par (temps gagne x frequence x nombre de personnes). Commencer par le top 3."
                      },
                      {
                        title: "Pas d'adoption",
                        desc: "Un outil que personne n'utilise a un ROI de zero. L'adoption est le facteur le plus sous-estime. Si les commerciaux trouvent l'outil complique, s'il ajoute une etape dans leur workflow au lieu d'en supprimer, s'ils ne font pas confiance aux resultats, ils ne l'utiliseront pas. L'IA doit s'integrer dans les outils existants (CRM, Slack, email), pas creer un outil de plus.",
                        color: "#4B5EFC",
                        fix: "Integrer l'IA directement dans le CRM et les outils quotidiens. Former l'equipe. Mesurer l'adoption a M+1 (taux d'utilisation)."
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
                    <p>Ces quatre problemes sont evitables. Ils ne tiennent pas a la technologie, mais a la methode de deploiement. Un bon audit prealable, une baseline documentee, une priorisation rigoureuse et un plan d&apos;adoption concret suffisent a eviter 90% des echecs.</p>
                    <p>Le ROI negatif de l&apos;IA n&apos;est jamais un probleme de technologie. C&apos;est un probleme de donnees, de process ou d&apos;execution.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Notre approche */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on ne deploie pas d&apos;IA sans mesurer. Chaque projet inclut un cadre de mesure du ROI, avec des KPI definis avant le deploiement et des points de controle systematiques.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Baseline a J0", desc: "Avant tout deploiement, on documente les KPI de reference : temps par tache, win rate, cycle de vente, pipeline coverage, taux de bounce. C'est la condition sine qua non pour demontrer le ROI ensuite.", color: "#22C55E" },
                      { title: "Mesure a M+1", desc: "Un mois apres le deploiement, premier bilan. Les gains en temps sont-ils reels ? Les agents IA sont-ils utilises ? Les metriques proxy evoluent-elles dans le bon sens ? On ajuste si necessaire.", color: "#4B5EFC" },
                      { title: "Bilan a M+3", desc: "Trois mois apres, bilan complet. Impact revenue mesurable (win rate, cycle, pipeline). ROI chiffre avec la formule complete. Rapport detaille avec les trois termes de l'equation.", color: "#6C5CE7" },
                      { title: "Pas de vanity metrics", desc: "On ne mesure pas le nombre de prompts envoyes ou le volume de tokens consommes. On mesure les heures gagnees, les euros economises, les deals supplementaires signes. Du mesurable, pas du decoratif.", color: "#FF7A59" },
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

                  {/* Results */}
                  <div className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4 mb-6">
                    <p className="text-[12px] font-semibold text-white mb-3">Resultats moyens constates chez nos clients</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "8-12x", label: "ROI moyen a M+3", color: "#22C55E" },
                        { stat: "35h/sem", label: "Temps gagne par equipe", color: "#4B5EFC" },
                        { stat: "+4pts", label: "Win rate moyen", color: "#6C5CE7" },
                        { stat: "<400 EUR", label: "Cout mensuel moyen", color: "#FF7A59" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>On est transparents sur ce qui marche et ce qui ne marche pas. Si les donnees ne sont pas pretes, on le dit. Si un cas d&apos;usage n&apos;a pas de ROI suffisant, on le deconseille. Notre objectif n&apos;est pas de deployer le maximum d&apos;IA, mais de deployer l&apos;IA qui a un impact mesurable et demontrable.</p>
                    <p>Le calcul du ROI n&apos;est pas optionnel. C&apos;est ce qui fait la difference entre un investissement et une depense.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Calculer le ROI de l&apos;IA chez vous ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on deploie l&apos;IA avec un cadre de mesure integre. Baseline a J0, bilan a M+1, ROI chiffre a M+3. Pas de promesses, des resultats mesurables. Commencez par un appel de 30 minutes pour evaluer le potentiel IA de votre equipe.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#22C55E] text-white rounded-lg text-[13px] font-medium hover:bg-[#1EAD50] transition-colors">
                  Calculer votre ROI IA
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
