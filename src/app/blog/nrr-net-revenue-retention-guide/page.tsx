"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NRR (Net Revenue Retention) : le KPI qui change tout en SaaS",
  description: "Guide complet sur le NRR (Net Revenue Retention) en SaaS. Formule de calcul, benchmarks par secteur, leviers d'amelioration, tracking HubSpot et detection IA des signaux de churn et d'expansion.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/nrr-net-revenue-retention-guide" },
  articleSection: "Data & Reporting",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-nrr-important", title: "Pourquoi le NRR est le KPI le plus important" },
  { id: "calculer-nrr", title: "Comment le calculer" },
  { id: "benchmark-secteur", title: "Benchmark par secteur" },
  { id: "leviers-nrr", title: "Les leviers du NRR" },
  { id: "tracker-hubspot", title: "Tracker dans HubSpot" },
  { id: "nrr-ia", title: "NRR et IA" },
  { id: "erreurs-calcul", title: "Les erreurs de calcul" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Comment gerer votre MRR dans HubSpot : le guide complet", slug: "gerer-mrr-revenu-recurrent-hubspot", category: "Data & Reporting", color: "#22C55E" },
  { title: "L'IA en Customer Success : detecter le churn 45 jours avant", slug: "ia-customer-success-detection-churn", category: "IA & Agents", color: "#6D00CC" },
  { title: "Customer Success et RevOps : aligner retention et revenue", slug: "customer-success-revops", category: "RevOps", color: "#FF7A59" },
];

export default function NrrNetRevenueRetentionGuideArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-nrr-important");

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
                  <a href="https://twitter.com/intent/tweet?text=NRR%20(Net%20Revenue%20Retention)%20%3A%20le%20KPI%20qui%20change%20tout%20en%20SaaS&url=https://ceres.agency/blog/nrr-net-revenue-retention-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/nrr-net-revenue-retention-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">NRR (Net Revenue Retention)</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Data &amp; Reporting</Badge>
                <span className="text-[11px] text-[#CCC]">13 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                NRR (Net Revenue Retention) : le KPI qui change tout en SaaS
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le NRR est le KPI que les investisseurs regardent en premier et que la plupart des SaaS calculent mal. Un NRR superieur a 110% signifie que votre base client grandit meme sans nouveau client. En dessous de 100%, vous perdez du revenu chaque mois. Ce guide vous donne la formule, les benchmarks, les leviers concrets et la methode pour le tracker dans HubSpot.
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
              <section id="pourquoi-nrr-important" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi le NRR est le KPI le plus important en SaaS</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Quand un investisseur regarde un SaaS B2B, le premier chiffre qu&apos;il demande n&apos;est pas le MRR. C&apos;est le NRR. Parce que le NRR repond a une question fondamentale : est-ce que vos clients existants generent plus de revenu au fil du temps, ou moins ?</p>
                    <p>Un NRR de 115% signifie que meme sans acquerir un seul nouveau client, votre revenu augmente de 15% par an grace a l&apos;expansion de vos comptes existants. A l&apos;inverse, un NRR de 85% signifie que vous perdez 15% de votre base de revenu chaque annee. Pour compenser, il faut acquerir 15% de nouveau revenu juste pour rester stable.</p>
                    <p>C&apos;est la difference entre une entreprise qui grandit naturellement et une entreprise qui court sur un tapis roulant. Les deux peuvent afficher le meme taux de croissance, mais la premiere est saine et la seconde est fragile.</p>
                    <p>Trois raisons font du NRR le KPI le plus strategique :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Il revele la qualite reelle du produit.</strong> Si les clients partent ou reduisent leur usage, aucun effort commercial ne compensera. Le NRR est le miroir non filtrable de la satisfaction client.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Il determine la valorisation.</strong> Les SaaS avec un NRR superieur a 120% sont valorises 2 a 3x plus que ceux sous 100%. C&apos;est le multiplicateur le plus puissant sur la valeur d&apos;une entreprise SaaS.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Il est predictif.</strong> Un NRR en baisse sur 3 mois consecutifs est le signal le plus fiable d&apos;un probleme a venir, bien avant que le churn ne devienne visible dans le MRR global.</li>
                    </ul>
                    <p>Pourtant, la majorite des SaaS B2B ne le calculent pas correctement. Certains confondent NRR et GRR. D&apos;autres excluent les downgrades de leur calcul. D&apos;autres encore utilisent des periodes inconsistantes. Ce guide clarifie tout ca.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "115%", label: "NRR median des SaaS B2B top quartile", color: "#22C55E" },
                      { stat: "2-3x", label: "multiplicateur de valorisation NRR > 120%", color: "#4B5EFC" },
                      { stat: "85%", label: "des SaaS ne calculent pas le NRR correctement", color: "#EF4444" },
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
              <section id="calculer-nrr" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment calculer le NRR</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le NRR mesure l&apos;evolution du revenu recurrent provenant de vos clients existants sur une periode donnee, generalement un mois ou un trimestre. Il inclut quatre composantes.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-5 text-center">Formule du NRR</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6">
                      <div className="rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 px-4 py-3 text-center">
                        <p className="text-[18px] font-bold text-[#22C55E]">NRR</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">=</span>
                      <div className="rounded-lg bg-[#4B5EFC]/10 border border-[#4B5EFC]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#4B5EFC]">MRR debut</p>
                        <p className="text-[9px] text-[#999]">revenu de debut de periode</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">+</span>
                      <div className="rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#22C55E]">Expansion</p>
                        <p className="text-[9px] text-[#999]">upsell + cross-sell</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">-</span>
                      <div className="rounded-lg bg-[#FF7A59]/10 border border-[#FF7A59]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#FF7A59]">Contraction</p>
                        <p className="text-[9px] text-[#999]">downgrades</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#999]">-</span>
                      <div className="rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20 px-3 py-2 text-center">
                        <p className="text-[11px] font-semibold text-[#EF4444]">Churn</p>
                        <p className="text-[9px] text-[#999]">clients perdus</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#111] text-center font-medium mb-2">NRR = (MRR debut + Expansion - Contraction - Churn) / MRR debut x 100</p>
                    <p className="text-[10px] text-[#BBB] text-center">Exprime en pourcentage. Calculer sur une base mensuelle puis annualiser.</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Exemple concret.</strong> Votre MRR debut de mois est de 100 000 EUR. Pendant le mois, vous generez 8 000 EUR d&apos;expansion (upsells et cross-sells), 2 000 EUR de contraction (downgrades) et 3 000 EUR de churn (clients qui partent). Votre NRR est de (100 000 + 8 000 - 2 000 - 3 000) / 100 000 = 103%. Votre base client genere 3% de revenu supplementaire chaque mois sans nouveau client.</p>
                    <p><strong className="text-[#111]">NRR vs GRR.</strong> Le GRR (Gross Revenue Retention) exclut l&apos;expansion. Il mesure uniquement la capacite a retenir le revenu existant. GRR = (MRR debut - Contraction - Churn) / MRR debut. Dans notre exemple : (100 000 - 2 000 - 3 000) / 100 000 = 95%. Le GRR est toujours inferieur ou egal a 100%. Le NRR peut depasser 100% grace a l&apos;expansion.</p>
                    <p><strong className="text-[#111]">Quelle periode ?</strong> Calculez le NRR mensuellement pour le suivi operationnel. Pour les investisseurs et les comparaisons sectorielles, annualisez : NRR annuel = NRR mensuel ^ 12. Un NRR mensuel de 101% donne un NRR annuel de 112,7%.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="benchmark-secteur" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Benchmark par secteur</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le NRR varie enormement selon le secteur, le segment de clientele et le modele de pricing. Voici les benchmarks constates en 2026 pour les SaaS B2B.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { level: "Excellent", range: "> 120%", desc: "Les meilleurs SaaS B2B. Forte capacite d'expansion. Typique des plateformes avec pricing a l'usage (Snowflake, Datadog, Twilio). Les clients augmentent naturellement leur consommation. Valorisation premium.", color: "#22C55E" },
                      { level: "Bon", range: "110% - 120%", desc: "La majorite des SaaS B2B performants. L'expansion compense largement le churn. Modele d'upsell structure. Equipe Customer Success active. C'est la cible pour la plupart des entreprises.", color: "#4B5EFC" },
                      { level: "Acceptable", range: "100% - 110%", desc: "Le revenu de la base client est stable ou en legere croissance. Le churn est compense par l'expansion, mais il n'y a pas de marge. Un trimestre difficile peut faire basculer sous 100%.", color: "#FF7A59" },
                      { level: "Danger", range: "< 100%", desc: "Vous perdez du revenu chaque mois. La base client se contracte. Chaque nouveau client acquis doit compenser la perte avant de contribuer a la croissance. Priorite absolue : comprendre pourquoi les clients partent.", color: "#EF4444" },
                    ].map((item) => (
                      <div key={item.level} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.level}</span>
                          </div>
                          <span className="text-[14px] font-bold" style={{ color: item.color }}>{item.range}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">NRR moyen par segment</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Segment</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">NRR median</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Top quartile</th>
                            <th className="text-center py-2 pl-2 text-[#999] font-semibold">Facteur cle</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { segment: "Enterprise (ACV > 100K)", median: "115%", top: "130%+", factor: "Expansion multi-produit" },
                            { segment: "Mid-market (ACV 20-100K)", median: "108%", top: "120%+", factor: "Upsell de sieges" },
                            { segment: "SMB (ACV < 20K)", median: "95%", top: "105%+", factor: "Churn eleve structurel" },
                            { segment: "Usage-based", median: "120%", top: "140%+", factor: "Croissance naturelle" },
                            { segment: "Seat-based", median: "105%", top: "115%+", factor: "Croissance equipes" },
                          ].map((row) => (
                            <tr key={row.segment} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.segment}</td>
                              <td className="py-2.5 px-2 text-center">
                                <span className="inline-block px-2 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">{row.median}</span>
                              </td>
                              <td className="py-2.5 px-2 text-center">
                                <span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">{row.top}</span>
                              </td>
                              <td className="py-2.5 pl-2 text-center text-[#999]">{row.factor}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Sources : OpenView 2025, Bessemer Cloud Index, donnees clients Ceres</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le segment SMB a structurellement un NRR plus faible parce que les petites entreprises ferment, changent d&apos;outil plus facilement et ont moins de potentiel d&apos;expansion. Ce n&apos;est pas un echec, c&apos;est une realite du modele. L&apos;enjeu est de compenser par un volume d&apos;acquisition superieur et un cout d&apos;acquisition plus faible.</p>
                    <p>Les modeles usage-based ont naturellement un NRR plus eleve parce que la croissance du client se traduit directement en revenu supplementaire. Mais attention : le NRR peut aussi chuter brutalement si l&apos;usage diminue. C&apos;est un avantage et un risque.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="leviers-nrr" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 4 leviers du NRR</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le NRR est une equation a quatre termes. Pour l&apos;ameliorer, vous pouvez agir sur chacun d&apos;eux independamment. Voici les leviers concrets pour chaque composante.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Reduire le churn (impact fort)",
                        desc: "Le churn est le levier le plus puissant. Perdre 1% de churn en moins a un impact compose sur 12 mois. Les causes principales : mauvais onboarding, pas de valeur percue dans les 30 premiers jours, absence de contact regulier, probleme produit non resolu. Pour chaque client perdu, documentez la raison exacte. Categorisez : produit, prix, support, fit initial.",
                        actions: ["Onboarding structure avec milestone a J7, J14, J30", "Health score base sur l'usage reel", "Alertes automatiques quand l'usage baisse", "QBR (Quarterly Business Review) pour les comptes cles"],
                        color: "#EF4444",
                      },
                      {
                        title: "Reduire la contraction (downgrades)",
                        desc: "La contraction est souvent un signal avance du churn. Un client qui downgrade a 6 mois avant de churner. Les causes : le client n'utilise pas toutes les fonctionnalites payantes, reduction de budget, equipe qui se reduit. Le downgrade n'est pas toujours evitable, mais il peut etre anticipe.",
                        actions: ["Identifier les features payantes non utilisees", "Former proactivement sur les fonctionnalites premium", "Proposer un plan adapte avant que le client ne demande"],
                        color: "#FF7A59",
                      },
                      {
                        title: "Augmenter l'expansion (upsell)",
                        desc: "L'expansion est le moteur de croissance du NRR au-dela de 100%. L'upsell consiste a faire monter un client sur un plan superieur. Les triggers : le client atteint les limites de son plan, il demande des fonctionnalites du plan superieur, son usage augmente regulierement.",
                        actions: ["Definir des seuils d'usage qui declenchent une conversation upsell", "Creer des feature gates visibles (le client sait ce qu'il rate)", "Former les CSM a identifier les signaux d'expansion", "Pricing structure qui recompense la croissance"],
                        color: "#22C55E",
                      },
                      {
                        title: "Developper le cross-sell",
                        desc: "Le cross-sell consiste a vendre des produits ou modules complementaires. C'est souvent le levier le plus sous-exploite. Les equipes CS se concentrent sur la retention et oublient que le client a d'autres besoins que votre produit principal peut adresser.",
                        actions: ["Mapper les cas d'usage non couverts de chaque client", "Identifier les modules complementaires pertinents par segment", "Creer des playbooks cross-sell par persona", "Integrer le cross-sell dans les QBR"],
                        color: "#6C5CE7",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-3">{item.desc}</p>
                        <div className="space-y-1">
                          {item.actions.map((a) => (
                            <div key={a} className="flex items-start gap-2 text-[10px]">
                              <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
                              <span className="text-[#888]">{a}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;ordre de priorite est important. Commencez toujours par reduire le churn avant de travailler l&apos;expansion. Un NRR de 90% avec 0% d&apos;expansion n&apos;a besoin que de reduire le churn. Un NRR de 90% avec 20% d&apos;expansion et 30% de churn a un probleme de retention, pas d&apos;expansion.</p>
                    <p>En pratique, les SaaS qui passent de 95% a 115% de NRR le font en 6 a 12 mois, en combinant une reduction du churn de 3 a 5 points et une augmentation de l&apos;expansion de 10 a 15 points.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="tracker-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment tracker le NRR dans HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot n&apos;a pas de champ NRR natif. Mais avec la bonne configuration, vous pouvez calculer et suivre votre NRR directement dans le CRM. Voici la methode que l&apos;on deploie chez nos clients.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { step: "1", title: "Creer les properties MRR", desc: "Sur l'objet Company : MRR actuel (currency), MRR M-1 (currency), date de debut d'abonnement (date), statut client (dropdown : actif, churne, downgrade). Sur l'objet Deal : type de mouvement (dropdown : new business, expansion, contraction, churn).", color: "#4B5EFC" },
                      { step: "2", title: "Categoriser les mouvements de revenu", desc: "Chaque changement de MRR doit etre trace par un deal avec le bon type de mouvement. Un upsell de 500 EUR = deal 'expansion' de 500 EUR. Un downgrade de 200 EUR = deal 'contraction' de -200 EUR. Un churn = deal 'churn' du montant du MRR perdu.", color: "#22C55E" },
                      { step: "3", title: "Construire le rapport NRR", desc: "Dans les rapports custom HubSpot : creer un rapport qui somme les deals par type de mouvement sur la periode choisie. MRR debut (somme des MRR actifs au 1er du mois) + Expansion - Contraction - Churn, divise par MRR debut. Automatiser avec un workflow mensuel.", color: "#6C5CE7" },
                      { step: "4", title: "Dashboard de suivi", desc: "Un dashboard dedie avec 4 KPI : NRR du mois, GRR du mois, evolution sur 6 mois (graphe), et decomposition par composante (expansion, contraction, churn). Ajouter un filtre par segment de client pour comparer Enterprise vs SMB.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold" style={{ background: item.color }}>{item.step}</div>
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le piege classique.</strong> Beaucoup d&apos;equipes ne tracent que les nouveaux deals et les churns. Les mouvements d&apos;expansion et de contraction ne sont pas documentes parce qu&apos;ils ne passent pas par le pipeline commercial classique. Resultat : le NRR calcule est faux, generalement sous-estime cote expansion et sur-estime cote retention.</p>
                    <p>La solution : creer un pipeline dedie &ldquo;Customer Movements&rdquo; dans HubSpot avec les etapes : identification, discussion, validation, actif. Chaque mouvement de revenu (positif ou negatif) passe par ce pipeline. C&apos;est la seule facon d&apos;avoir un NRR fiable.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="nrr-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">NRR et IA : detection churn et signaux d&apos;expansion</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA change la facon de piloter le NRR. Au lieu de reagir au churn quand il arrive, on le detecte 30 a 45 jours avant. Au lieu de decouvrir les opportunites d&apos;expansion par hasard, on les identifie systematiquement.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Detection des signaux de churn", desc: "L'IA analyse les patterns d'usage, la frequence de connexion, le volume de tickets support, le ton des emails et des calls. Un client qui se connecte 40% moins qu'il y a 3 mois, qui a ouvert 3 tickets en 2 semaines et dont le NPS a baisse, est un signal de churn a J-30. L'IA alerte le CSM avant que le client n'annonce sa decision.", color: "#EF4444" },
                      { title: "Scoring de risque automatique", desc: "Un health score IA qui combine 15+ signaux : usage produit, engagement email, sentiment des conversations, anciennete, evolution du MRR. Chaque client recoit un score de 0 a 100, mis a jour en temps reel. Les clients sous 40 sont en alerte rouge.", color: "#FF7A59" },
                      { title: "Identification des signaux d'expansion", desc: "L'IA detecte les signaux positifs : usage qui augmente, features premium consultees, equipe du client qui grandit (signal LinkedIn), demandes de fonctionnalites du plan superieur. Ces signaux declenchent une alerte pour le CSM avec un contexte complet.", color: "#22C55E" },
                      { title: "Timing optimal d'intervention", desc: "L'IA determine le meilleur moment pour contacter un client en risque ou en expansion. Pas trop tot (faux signal), pas trop tard (decision deja prise). Le timing optimal est generalement J-21 pour le churn et juste apres un pic d'usage pour l'expansion.", color: "#6C5CE7" },
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
                    <p><strong className="text-[#111]">Impact mesure.</strong> Les equipes qui deploient un health score IA constatent en moyenne une reduction du churn de 25 a 35% et une augmentation de l&apos;expansion de 15 a 20%. Sur un NRR de depart a 100%, ca represente un passage a 108-112% en 3 a 6 mois.</p>
                    <p>L&apos;IA ne remplace pas le CSM. Elle lui donne les bonnes informations au bon moment. Le CSM reste celui qui appelle le client, qui comprend le contexte et qui propose la solution. L&apos;IA est l&apos;intelligence, le CSM est l&apos;action.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="erreurs-calcul" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs de calcul du NRR</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le NRR parait simple a calculer. En pratique, la majorite des SaaS font au moins une des erreurs suivantes, ce qui rend leur NRR inutilisable pour les decisions strategiques.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Inclure les nouveaux clients dans le calcul",
                        desc: "Le NRR ne concerne QUE les clients qui existaient au debut de la periode. Si vous incluez les clients acquis pendant le mois, vous gonflez artificiellement votre NRR. C'est l'erreur la plus courante et la plus grave.",
                        fix: "Filtrer la cohorte de debut de mois. Seuls les clients actifs au 1er du mois sont pris en compte.",
                        color: "#EF4444",
                      },
                      {
                        title: "Ne pas compter les downgrades comme contraction",
                        desc: "Un client qui passe du plan Pro au plan Starter est une contraction, pas juste un 'changement de plan'. Si vous ne tracez pas les downgrades comme des mouvements negatifs, votre NRR est surestime.",
                        fix: "Tout changement de MRR a la baisse est une contraction, meme si le client reste.",
                        color: "#FF7A59",
                      },
                      {
                        title: "Periodes inconsistantes",
                        desc: "Calculer le NRR sur des periodes differentes (parfois 28 jours, parfois 31, parfois un trimestre) rend la comparaison impossible. Le NRR doit etre calcule sur une periode fixe, identique chaque mois.",
                        fix: "Toujours calculer du 1er au dernier jour du mois calendaire. Annualiser avec la formule NRR^12.",
                        color: "#6C5CE7",
                      },
                      {
                        title: "Ignorer les pauses et reactivations",
                        desc: "Un client qui pause son abonnement pendant 2 mois puis revient : est-ce du churn suivi d'un new business, ou une absence temporaire ? Si vous comptez la reactivation comme du new business, vous masquez un probleme de retention.",
                        fix: "Definir une regle claire : pause > 60 jours = churn. Reactivation = new business. Documenter et appliquer de facon consistante.",
                        color: "#4B5EFC",
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
                    <p>Le NRR n&apos;est fiable que si la methode de calcul est documentee, consistante et partagee avec toute l&apos;equipe. Creez un document de reference avec vos definitions exactes : qu&apos;est-ce qu&apos;un churn, quand une contraction est comptabilisee, comment les reactivations sont traitees. Sans ce document, chaque personne calculera un NRR different.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on aide les SaaS B2B a passer d&apos;un NRR approximatif a un NRR fiable, trackable et actionnable. Le NRR n&apos;est pas juste un chiffre a reporter, c&apos;est un levier de pilotage operationnel.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Audit NRR", desc: "On audite votre methode de calcul actuelle, on identifie les erreurs et les angles morts. On etablit une baseline fiable sur les 6 derniers mois.", color: "#22C55E" },
                      { title: "Setup HubSpot", desc: "On configure le tracking complet dans HubSpot : properties, pipeline Customer Movements, workflows automatiques, dashboard de suivi mensuel.", color: "#4B5EFC" },
                      { title: "Health score IA", desc: "On deploie un scoring de risque et d'expansion base sur l'IA. Alertes automatiques pour les CSM, integration directe dans HubSpot.", color: "#6D00CC" },
                      { title: "Playbooks retention", desc: "On cree les playbooks d'intervention pour chaque scenario : client en risque, opportunite d'expansion, renouvellement approchant. Avec les templates et les timings.", color: "#FF7A59" },
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
                    <p className="text-[12px] font-semibold text-white mb-3">Resultats constates chez nos clients SaaS</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "+12pts", label: "NRR moyen apres 6 mois", color: "#22C55E" },
                        { stat: "-30%", label: "Churn rate reduction", color: "#EF4444" },
                        { stat: "+18%", label: "Expansion revenue", color: "#6C5CE7" },
                        { stat: "J-30", label: "Detection anticipee du churn", color: "#4B5EFC" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le NRR est le KPI qui separe les SaaS qui grandissent de ceux qui survivent. Mais il ne suffit pas de le calculer, il faut le piloter. C&apos;est ce qu&apos;on fait : transformer un chiffre en leviers d&apos;action concrets pour vos equipes CS et commerciales.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Ameliorer votre NRR ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on aide les SaaS B2B a tracker, analyser et ameliorer leur NRR. Audit de votre methode actuelle, setup HubSpot complet et deploiement d&apos;un health score IA. Commencez par un appel de 30 minutes.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#22C55E] text-white rounded-lg text-[13px] font-medium hover:bg-[#1EAD50] transition-colors">
                  Auditer votre NRR
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
