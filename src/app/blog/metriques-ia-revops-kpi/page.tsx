"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Les metriques de l'IA en RevOps : ce qu'il faut mesurer et comment",
  description: "Guide complet pour mesurer l'impact de l'IA en RevOps. Les 3 categories de metriques (efficacite, qualite, business), le dashboard recommande, la formule de ROI et les pieges a eviter. Avec des exemples chiffres et des formules de calcul.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/metriques-ia-revops-kpi" },
  articleSection: "Data & Reporting",
  wordCount: 3000,
  inLanguage: "fr",
};

const sections = [
  { id: "deployer-sans-mesurer", title: "Le probleme" },
  { id: "trois-categories", title: "Les 3 categories" },
  { id: "metriques-efficacite", title: "Efficacite" },
  { id: "metriques-qualite", title: "Qualite" },
  { id: "metriques-impact", title: "Impact business" },
  { id: "dashboard-ia", title: "Le dashboard IA" },
  { id: "roi-ia", title: "ROI de l'IA" },
  { id: "pieges-mesure", title: "Les pieges" },
  { id: "baseline", title: "La baseline" },
  { id: "approche-ceres", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Les KPIs commerciaux : indicateurs de vente a suivre", slug: "kpi-commerciaux-indicateurs-vente", category: "Data & Reporting", color: "#22C55E" },
  { title: "Process, data, IA : dans quel ordre deployer le RevOps", slug: "process-data-ia-ordre-revops", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Agents IA deployes chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA & Agents", color: "#6D00CC" },
];

export default function MetriquesIaRevopsKpiArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("deployer-sans-mesurer");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Les%20metriques%20de%20l%27IA%20en%20RevOps&url=https://ceres.agency/blog/metriques-ia-revops-kpi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/metriques-ia-revops-kpi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Metriques IA RevOps</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Data &amp; Reporting</Badge>
                <span className="text-[11px] text-[#CCC]">16 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Les metriques de l&apos;IA en RevOps : ce qu&apos;il faut mesurer et comment
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Tout le monde deploie des agents IA. Personne ne mesure le ROI. Sans KPIs clairs, impossible de justifier l&apos;investissement, d&apos;optimiser les modeles ou de convaincre les equipes. Ce guide couvre les 3 categories de metriques a suivre (efficacite, qualite, impact business), le dashboard recommande avec 10 KPIs, la formule de calcul du ROI et les pieges a eviter quand on mesure l&apos;impact de l&apos;IA en RevOps.
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
              {/* Section 1 : Deployer l'IA sans mesurer, c'est gaspiller */}
              <section id="deployer-sans-mesurer" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Deployer l&apos;IA sans mesurer, c&apos;est gaspiller</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En 2026, 78% des entreprises B2B declarent utiliser au moins un outil d&apos;IA dans leur stack commerciale. Scoring predictif, resume de calls, generation d&apos;emails, enrichissement automatique, chatbots de qualification. Les cas d&apos;usage se multiplient, les budgets augmentent, et les promesses des editeurs sont seduisantes. Mais quand on demande a ces memes entreprises de quantifier l&apos;impact reel de ces outils, le silence est assourdissant.</p>
                    <p>Le probleme n&apos;est pas l&apos;IA elle-meme. Le probleme, c&apos;est l&apos;absence de cadre de mesure. On deploie un agent de qualification, on constate subjectivement que &ldquo;ca va plus vite&rdquo;, et on passe au sujet suivant. Pas de chiffres. Pas de comparaison avant/apres. Pas de ROI calculable. Quand le CFO demande des comptes, on n&apos;a rien de solide a presenter.</p>
                    <p>Cette absence de mesure a trois consequences directes :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /><strong className="text-[#111]">Impossible de justifier l&apos;investissement.</strong> Un outil IA coute entre 500 et 5 000 EUR par mois. Sans metriques d&apos;impact, c&apos;est un poste de cout, pas un investissement. Et quand les budgets se resserrent, c&apos;est la premiere ligne supprimee.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Impossible d&apos;optimiser.</strong> Si vous ne mesurez pas la precision de votre scoring IA, vous ne savez pas s&apos;il faut ajuster les parametres, changer de modele ou revenir au scoring manuel. Vous volez a l&apos;aveugle.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Impossible de convaincre les equipes.</strong> L&apos;adoption est le plus grand defi de l&apos;IA en entreprise. Sans preuves chiffrees que l&apos;outil fait gagner du temps et ameliore les resultats, les commerciaux reviennent a leurs habitudes en quelques semaines.</li>
                    </ul>
                    <p>Cet article est un framework complet pour mesurer l&apos;impact de l&apos;IA en RevOps. Pas des metriques theoriques, mais les KPIs concrets que nous utilisons chez Ceres avec nos clients, avec les formules de calcul, les benchmarks et les pieges a eviter.</p>
                  </div>

                  {/* Key stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { stat: "78%", label: "des entreprises B2B utilisent l'IA dans leur stack sales", color: "#22C55E" },
                      { stat: "12%", label: "mesurent reellement le ROI de leurs outils IA", color: "#EF4444" },
                      { stat: "3,2x", label: "ROI moyen constate quand l'IA est correctement mesuree", color: "#4B5EFC" },
                      { stat: "67%", label: "d'abandon des outils IA a 6 mois sans suivi de metriques", color: "#FF7A59" },
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

              {/* Section 2 : Les 3 categories de metriques IA */}
              <section id="trois-categories" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 3 categories de metriques IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Mesurer l&apos;IA en RevOps ne se resume pas a un seul chiffre. L&apos;impact se decompose en trois niveaux distincts, chacun repondant a une question differente. L&apos;erreur la plus courante est de ne regarder qu&apos;une seule categorie, generalement l&apos;efficacite (le temps gagne), en ignorant la qualite des outputs et l&apos;impact reel sur le business.</p>
                    <p>Voici le framework que nous utilisons chez Ceres pour structurer la mesure de l&apos;IA chez nos clients. Chaque categorie a ses propres KPIs, ses propres methodes de collecte et ses propres benchmarks.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { title: "Efficacite", subtitle: "Temps gagne", desc: "L'IA fait-elle gagner du temps aux equipes ? Quelles taches sont accelerees et de combien ?", color: "#22C55E", icon: "1", examples: ["Temps de qualification", "Temps de reporting", "Taches automatisees/semaine"] },
                      { title: "Qualite", subtitle: "Precision des outputs", desc: "Les outputs de l'IA sont-ils fiables ? A quelle frequence faut-il corriger ?", color: "#4B5EFC", icon: "2", examples: ["Precision du scoring", "Taux d'erreur", "Taux de correction humaine"] },
                      { title: "Impact business", subtitle: "Revenue et conversion", desc: "L'IA a-t-elle un impact mesurable sur le chiffre d'affaires, les conversions, le cycle de vente ?", color: "#6D00CC", icon: "3", examples: ["Taux de conversion", "Win rate", "Cycle de vente"] },
                    ].map((cat) => (
                      <div key={cat.title} className="rounded-xl border border-[#F2F2F2] p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-bold text-white" style={{ background: cat.color }}>{cat.icon}</div>
                          <div>
                            <p className="text-[12px] font-semibold text-[#111]">{cat.title}</p>
                            <p className="text-[9px] text-[#999]">{cat.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-3">{cat.desc}</p>
                        <div className="space-y-1.5">
                          {cat.examples.map((ex) => (
                            <div key={ex} className="flex items-center gap-2 text-[10px] text-[#999]">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
                              {ex}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[11px] text-[#777] leading-[1.7]"><strong className="text-[#111]">Regle d&apos;or :</strong> ne deployer aucun outil IA sans avoir defini au moins un KPI dans chaque categorie. Un agent qui fait gagner du temps mais qui produit des outputs faux est pire que pas d&apos;agent du tout. Un agent precis mais que personne n&apos;utilise est un gaspillage. Les trois dimensions sont necessaires.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Metriques d'efficacite */}
              <section id="metriques-efficacite" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">1</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Metriques d&apos;efficacite : le temps gagne</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;efficacite est la categorie la plus intuitive et la plus facile a mesurer. Elle repond a la question : &ldquo;combien de temps l&apos;IA fait-elle gagner a l&apos;equipe ?&rdquo; C&apos;est aussi la categorie qui convainc le plus rapidement les equipes terrain, parce que le gain est immediat et tangible.</p>
                    <p>Pour chaque tache automatisee ou assistee par l&apos;IA, vous devez mesurer le temps avant et le temps apres. C&apos;est basique, mais tres peu d&apos;entreprises le font de maniere rigoureuse. Voici les 4 metriques d&apos;efficacite a suivre :</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { metric: "Temps de qualification par lead", before: "25 min", after: "8 min", gain: "-68%", desc: "Le temps moyen entre la reception d'un lead et sa qualification (MQL ou disqualifie). Inclut la recherche d'information, l'analyse du profil et la decision de routage. L'IA accelere ce processus en enrichissant automatiquement le lead et en pre-scorant le profil.", color: "#22C55E" },
                      { metric: "Temps de reporting", before: "4h/semaine", after: "45 min", gain: "-81%", desc: "Le temps passe chaque semaine a compiler les reportings commerciaux. Avant l'IA : export CSV, tableaux croises, mise en forme, envoi par email. Apres : un dashboard auto-genere avec des insights en langage naturel.", color: "#4B5EFC" },
                      { metric: "Temps de preparation call", before: "20 min", after: "5 min", gain: "-75%", desc: "Le temps de preparation avant un appel commercial ou un rendez-vous client. L'IA compile automatiquement l'historique des interactions, les informations cles de l'entreprise, les signaux d'achat recents et une suggestion d'approche.", color: "#6C5CE7" },
                      { metric: "Taches automatisees par semaine", before: "0", after: "47", gain: "+47/sem", desc: "Le nombre total de micro-taches gerees automatiquement par les agents IA chaque semaine : mises a jour CRM, envoi de sequences, enrichissement de fiches, creation de taches de suivi, notifications intelligentes.", color: "#FF7A59" },
                    ].map((m) => (
                      <div key={m.metric} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: m.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{m.metric}</span>
                          </div>
                          <span className="text-[12px] font-bold" style={{ color: m.color }}>{m.gain}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-3">{m.desc}</p>
                        <div className="flex gap-3">
                          <div className="flex-1 rounded-lg bg-[#FEF2F2] p-2.5 text-center">
                            <p className="text-[9px] text-[#999] mb-0.5">Avant IA</p>
                            <p className="text-[14px] font-bold text-[#EF4444]">{m.before}</p>
                          </div>
                          <div className="flex items-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                          </div>
                          <div className="flex-1 rounded-lg bg-[#F0FDF4] p-2.5 text-center">
                            <p className="text-[9px] text-[#999] mb-0.5">Apres IA</p>
                            <p className="text-[14px] font-bold text-[#22C55E]">{m.after}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[11px] text-[#777] leading-[1.7]"><strong className="text-[#111]">Comment mesurer :</strong> chronometrez 10 taches identiques avant le deploiement, puis 10 apres. Calculez la mediane (pas la moyenne, qui est sensible aux valeurs aberrantes). Repetez la mesure a M+1 et M+3 pour valider la tendance. Si le gain diminue dans le temps, c&apos;est un signal d&apos;alerte sur l&apos;adoption.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Metriques de qualite */}
              <section id="metriques-qualite" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#4B5EFC]/10 flex items-center justify-center text-[14px] font-bold text-[#4B5EFC]">2</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Metriques de qualite : la precision des outputs</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Gagner du temps n&apos;a aucune valeur si les outputs sont faux. Un scoring IA qui qualifie des leads non pertinents fait perdre plus de temps qu&apos;il n&apos;en fait gagner, parce que les commerciaux traitent des leads qui n&apos;auraient jamais du arriver dans leur pipeline. Les metriques de qualite mesurent la fiabilite de ce que l&apos;IA produit.</p>
                    <p>C&apos;est la categorie la plus souvent negligee, et pourtant la plus critique. Voici les 4 metriques de qualite a suivre :</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { metric: "Precision du scoring IA vs scoring manuel", target: "> 85%", desc: "Comparez les predictions du scoring IA avec les resultats reels. Sur 100 leads scores 'chaud' par l'IA, combien se sont effectivement convertis ? Faites le meme exercice avec le scoring manuel historique. Si l'IA est moins precise que l'humain, il y a un probleme de calibration du modele.", method: "Matrice de confusion (vrais positifs, faux positifs, vrais negatifs, faux negatifs)", color: "#4B5EFC" },
                      { metric: "Taux d'erreur des resumes de calls", target: "< 5%", desc: "Echantillonnez 20 resumes de calls generes par l'IA chaque mois. Verifiez manuellement : les points cles sont-ils tous presents ? Y a-t-il des informations inventees (hallucinations) ? Les actions a suivre sont-elles correctement identifiees ? Le taux d'erreur acceptable est inferieur a 5%.", method: "Audit manuel mensuel sur un echantillon de 20 resumes", color: "#6C5CE7" },
                      { metric: "Taux d'adoption par les equipes", target: "> 80%", desc: "Quel pourcentage de l'equipe utilise reellement l'outil IA au quotidien ? Un taux d'adoption inferieur a 60% signale un probleme de valeur percue ou d'UX. Mesurez a la fois l'adoption (qui l'utilise) et la frequence (combien de fois par semaine).", method: "Logs d'utilisation de l'outil, enquete mensuelle equipe", color: "#22C55E" },
                      { metric: "Taux de correction humaine necessaire", target: "< 15%", desc: "Sur 100 outputs generes par l'IA (emails, fiches, resumes, scores), combien necessitent une correction manuelle avant d'etre utilises ? Si ce taux depasse 30%, l'IA cree plus de travail de verification qu'elle n'en economise. L'objectif est de descendre sous les 15%.", method: "Tracking des modifications post-generation dans le CRM", color: "#FF7A59" },
                    ].map((m) => (
                      <div key={m.metric} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: m.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{m.metric}</span>
                          </div>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md" style={{ background: `${m.color}15`, color: m.color }}>Cible : {m.target}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{m.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#FAFAFA] p-2">
                          <span className="text-[10px] text-[#999] font-semibold shrink-0 mt-0.5">Methode :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{m.method}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Metriques d'impact business */}
              <section id="metriques-impact" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC]/10 flex items-center justify-center text-[14px] font-bold text-[#6D00CC]">3</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Metriques d&apos;impact business : le revenue</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;efficacite et la qualite sont des moyens. L&apos;impact business est la fin. C&apos;est la categorie qui interesse le CEO et le board. La question n&apos;est plus &ldquo;est-ce que l&apos;IA fait gagner du temps ?&rdquo; mais &ldquo;est-ce que l&apos;IA genere plus de revenus ?&rdquo;</p>
                    <p>Ces metriques sont plus difficiles a isoler parce que l&apos;IA n&apos;est jamais le seul facteur d&apos;un deal gagne. Mais en comparant les periodes avant et apres deploiement, et en controlant les autres variables (taille d&apos;equipe, budget marketing, saisonnalite), on peut mesurer la contribution de l&apos;IA avec un niveau de confiance raisonnable.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { metric: "Taux de conversion MQL > SQL", formula: "(SQL / MQL) x 100", benchmark: "25-35%", desc: "Le pourcentage de leads qualifies marketing qui deviennent des leads qualifies sales. L'IA ameliore ce taux en affinant le scoring, en enrichissant les profils et en accelerant le routage. Un gain de 5 points sur ce taux a un impact direct sur le pipeline.", color: "#22C55E" },
                      { metric: "Win rate", formula: "(Deals gagnes / Total deals) x 100", benchmark: "20-30%", desc: "Le pourcentage de deals en pipeline qui se concluent positivement. L'IA contribue via de meilleurs resumes de calls, des insights sur les signaux d'achat, et une preparation plus efficace des rendez-vous. Chaque point de win rate supplementaire est du revenue additionnel sans cout d'acquisition supplementaire.", color: "#4B5EFC" },
                      { metric: "Cycle de vente moyen", formula: "Somme(jours par deal) / Nombre de deals", benchmark: "30-90 jours", desc: "Le nombre moyen de jours entre la creation d'une opportunite et sa conclusion. L'IA reduit ce cycle en accelerant la qualification, en automatisant les relances et en identifiant les signaux de decision. Une reduction de 15% du cycle de vente equivaut a 15% de capacite commerciale supplementaire.", color: "#6C5CE7" },
                      { metric: "NRR (Net Revenue Retention)", formula: "(MRR fin - Churn + Expansion) / MRR debut x 100", benchmark: "> 110%", desc: "Le taux de retention net du revenu recurrent. L'IA contribue en identifiant les signaux de churn precoces, en suggerant des actions de retention et en detectant les opportunites d'upsell. Chaque point de NRR vaut plusieurs points de croissance.", color: "#6D00CC" },
                      { metric: "Forecast accuracy", formula: "|Forecast - Reel| / Reel x 100", benchmark: "< 10% d'ecart", desc: "La precision des previsions de chiffre d'affaires. L'IA ameliore la fiabilite du forecast en analysant les signaux objectifs (engagement, historique, timing) plutot que les impressions subjectives des commerciaux. Un forecast fiable permet une meilleure allocation des ressources.", color: "#FF7A59" },
                      { metric: "Pipeline genere", formula: "Valeur totale des nouvelles opportunites", benchmark: "3x l'objectif", desc: "La valeur totale des nouvelles opportunites creees sur la periode. L'IA contribue via l'identification de signaux d'achat, l'enrichissement de comptes cibles et la generation automatique d'opportunites a partir de l'intent data.", color: "#22C55E" },
                    ].map((m) => (
                      <div key={m.metric} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: m.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{m.metric}</span>
                          </div>
                          <span className="text-[10px] text-[#999]">Benchmark : <strong style={{ color: m.color }}>{m.benchmark}</strong></span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{m.desc}</p>
                        <div className="rounded-lg bg-[#111] p-2.5">
                          <p className="text-[10px] text-white/40 mb-0.5">Formule</p>
                          <p className="text-[11px] text-white/80 font-mono">{m.formula}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Le dashboard IA qu'on recommande */}
              <section id="dashboard-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le dashboard IA qu&apos;on recommande</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Trop de metriques tuent la mesure. Si votre dashboard IA contient 40 KPIs, personne ne le regarde. Nous recommandons un dashboard unique avec 10 KPIs, mis a jour automatiquement, revise chaque semaine en comite de pilotage. Voici les 10 que nous installons systematiquement chez nos clients.</p>
                  </div>

                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Dashboard IA RevOps -- 10 KPIs</p>
                    <div className="space-y-2">
                      {[
                        { num: "01", kpi: "Temps de qualification par lead", formule: "Mediane du temps entre creation et qualification", cat: "Efficacite", color: "#22C55E" },
                        { num: "02", kpi: "Temps de reporting hebdomadaire", formule: "Heures passees / semaine sur les reportings", cat: "Efficacite", color: "#22C55E" },
                        { num: "03", kpi: "Taches automatisees par semaine", formule: "Compteur d'actions IA executees / 7 jours", cat: "Efficacite", color: "#22C55E" },
                        { num: "04", kpi: "Precision du scoring IA", formule: "Vrais positifs / (Vrais positifs + Faux positifs) x 100", cat: "Qualite", color: "#4B5EFC" },
                        { num: "05", kpi: "Taux de correction humaine", formule: "Outputs modifies / Total outputs x 100", cat: "Qualite", color: "#4B5EFC" },
                        { num: "06", kpi: "Taux d'adoption equipe", formule: "Utilisateurs actifs / Total equipe x 100", cat: "Qualite", color: "#4B5EFC" },
                        { num: "07", kpi: "Taux de conversion MQL > SQL", formule: "SQL / MQL x 100", cat: "Business", color: "#6D00CC" },
                        { num: "08", kpi: "Win rate", formule: "Deals gagnes / Total deals x 100", cat: "Business", color: "#6D00CC" },
                        { num: "09", kpi: "Cycle de vente moyen", formule: "Somme(jours) / Nombre de deals clos", cat: "Business", color: "#6D00CC" },
                        { num: "10", kpi: "ROI global IA", formule: "(Gains temps + Impact revenue - Cout IA) / Cout IA", cat: "Business", color: "#6D00CC" },
                      ].map((k) => (
                        <div key={k.num} className="flex items-center gap-3 rounded-lg border border-[#F0F0F0] bg-white p-3">
                          <span className="text-[11px] font-bold text-[#CCC] w-5 shrink-0">{k.num}</span>
                          <div className="w-1.5 h-6 rounded-full shrink-0" style={{ background: k.color }} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <p className="text-[11px] font-semibold text-[#111]">{k.kpi}</p>
                              <span className="text-[8px] font-medium px-1.5 py-0.5 rounded" style={{ background: `${k.color}15`, color: k.color }}>{k.cat}</span>
                            </div>
                            <p className="text-[10px] text-[#999] font-mono">{k.formule}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Frequence de revue :</strong> les metriques d&apos;efficacite et de qualite sont revues chaque semaine. Les metriques business sont revues chaque mois. Le ROI global est calcule a M+1 et M+3 apres chaque deploiement.</p>
                    <p><strong className="text-[#111]">Outils recommandes :</strong> HubSpot Custom Reports pour les metriques CRM natives, un Google Sheet ou Notion pour les metriques collectees manuellement (temps de qualification, taux de correction), et un dashboard synthetique dans Looker Studio ou directement dans HubSpot.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Comment mesurer le ROI de l'IA */}
              <section id="roi-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment mesurer le ROI de l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le ROI de l&apos;IA se calcule avec une formule simple. Pas besoin de modeles econometriques complexes. L&apos;objectif est d&apos;avoir un chiffre clair, defensible, que vous pouvez presenter au CFO en 30 secondes.</p>
                  </div>

                  {/* ROI Formula */}
                  <div className="my-6 rounded-xl bg-[#111] p-6 text-center">
                    <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">Formule ROI IA</p>
                    <p className="text-[16px] sm:text-[18px] font-mono text-white/90 leading-[1.6]">
                      ROI = <span className="text-[#22C55E]">(Temps gagne x Cout horaire)</span><br />
                      + <span className="text-[#4B5EFC]">(Impact revenue incremental)</span><br />
                      - <span className="text-[#EF4444]">(Cout total IA)</span><br />
                      <span className="text-white/40">/ </span><span className="text-[#EF4444]">Cout total IA</span>
                    </p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Exemple chiffre pour une equipe de 5 commerciaux :</strong></p>
                  </div>

                  <div className="mt-4 space-y-3">
                    {/* Gain temps */}
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                        <span className="text-[12px] font-semibold text-[#22C55E]">Gain de temps</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-[#777] leading-[1.7]">
                        <p>Qualification : 17 min gagnes x 30 leads/semaine x 5 commerciaux = <strong className="text-[#111]">2 550 min/semaine = 42,5h</strong></p>
                        <p>Reporting : 3h15 gagnes x 5 commerciaux = <strong className="text-[#111]">16,25h/semaine</strong></p>
                        <p>Prep calls : 15 min gagnes x 20 calls/semaine x 5 = <strong className="text-[#111]">25h/semaine</strong></p>
                        <p>Total : 83,75h/semaine x 48 semaines x 45 EUR/h = <strong className="text-[#22C55E]">180 900 EUR/an</strong></p>
                      </div>
                    </div>

                    {/* Impact revenue */}
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#4B5EFC]" />
                        <span className="text-[12px] font-semibold text-[#4B5EFC]">Impact revenue</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-[#777] leading-[1.7]">
                        <p>Win rate passe de 22% a 27% (+5 pts) sur un pipeline de 2M EUR</p>
                        <p>Revenue additionnel : 2 000 000 x 5% = <strong className="text-[#4B5EFC]">100 000 EUR/an</strong></p>
                      </div>
                    </div>

                    {/* Cout IA */}
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                        <span className="text-[12px] font-semibold text-[#EF4444]">Cout IA</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-[#777] leading-[1.7]">
                        <p>Licences outils IA : 2 500 EUR/mois = 30 000 EUR/an</p>
                        <p>Integration et setup : 15 000 EUR (one-shot)</p>
                        <p>Maintenance : 500 EUR/mois = 6 000 EUR/an</p>
                        <p>Total annee 1 : <strong className="text-[#EF4444]">51 000 EUR</strong></p>
                      </div>
                    </div>
                  </div>

                  {/* ROI Result */}
                  <div className="mt-5 rounded-xl bg-gradient-to-r from-[#22C55E]/10 to-[#4B5EFC]/10 border border-[#22C55E]/20 p-5 text-center">
                    <p className="text-[10px] text-[#999] uppercase tracking-wider mb-2">ROI annee 1</p>
                    <p className="text-[32px] font-bold text-[#22C55E]">4,5x</p>
                    <p className="text-[11px] text-[#777] mt-1">(180 900 + 100 000 - 51 000) / 51 000 = 4,5</p>
                    <p className="text-[10px] text-[#999] mt-2">Soit 229 900 EUR de valeur nette generee la premiere annee</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[11px] text-[#777] leading-[1.7]"><strong className="text-[#111]">Note importante :</strong> ces chiffres sont des moyennes observees chez nos clients. Votre ROI dependra de la taille de votre equipe, de votre cycle de vente, de votre panier moyen et du niveau d&apos;automatisation existant avant le deploiement de l&apos;IA. C&apos;est pour cela que la baseline (section suivante) est indispensable.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Les pieges de la mesure */}
              <section id="pieges-mesure" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les pieges de la mesure</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Mesurer l&apos;impact de l&apos;IA est necessaire, mais mesurer mal est pire que ne pas mesurer du tout. Voici les trois pieges les plus frequents que nous observons, et comment les eviter.</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Piege 1 : Les vanity metrics",
                        desc: "Le nombre de requetes traitees par l'agent IA, le nombre de tokens consommes, le nombre de calls resumes. Ces metriques mesurent l'activite, pas la valeur. Un agent qui traite 500 requetes par jour mais dont les outputs sont ignores par l'equipe a un impact nul. Concentrez-vous sur les metriques de resultat (temps gagne, precision, revenue) et pas sur les metriques d'activite.",
                        solution: "Pour chaque metrique, posez-vous la question : si ce chiffre augmente de 50%, est-ce que le business s'ameliore concretement ? Si la reponse est non, c'est une vanity metric.",
                        color: "#EF4444",
                      },
                      {
                        title: "Piege 2 : Correlation vs causalite",
                        desc: "Le win rate a augmente de 5 points depuis le deploiement de l'IA. Mais pendant la meme periode, vous avez aussi recrute un commercial senior, lance une nouvelle campagne inbound et ajuste votre pricing. Comment savoir quelle part de l'amelioration est attribuable a l'IA ?",
                        solution: "Utilisez des groupes de controle quand c'est possible : deployez l'IA sur la moitie de l'equipe et comparez. Sinon, isolez les periodes : mesurez 3 mois avant, deployez, mesurez 3 mois apres, en gardant les autres variables constantes autant que possible.",
                        color: "#FF7A59",
                      },
                      {
                        title: "Piege 3 : L'effet Hawthorne",
                        desc: "Les gens performent mieux quand ils savent qu'on les observe. Quand vous annoncez que vous allez mesurer l'impact de l'IA, les equipes font naturellement plus attention, sont plus rigoureuses, utilisent davantage les outils. Les resultats des premieres semaines sont donc artificiellement bons. Puis l'effet retombe, et les metriques se degradent.",
                        solution: "Ne tirez jamais de conclusions sur les 2-3 premieres semaines. Attendez au minimum 4 a 6 semaines avant d'evaluer l'impact reel. C'est pour cela que chez Ceres, nous mesurons systematiquement a M+1 et M+3 : le M+1 confirme le deploiement, le M+3 confirme l'impact durable.",
                        color: "#6C5CE7",
                      },
                    ].map((p) => (
                      <div key={p.title} className="rounded-xl border border-[#F2F2F2] p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                          <h3 className="text-[13px] font-semibold text-[#111]">{p.title}</h3>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-3">{p.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#F0FDF4] p-3">
                          <span className="text-[10px] text-[#22C55E] font-semibold shrink-0 mt-0.5">Solution :</span>
                          <p className="text-[10px] text-[#666] leading-[1.6]">{p.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 : Baseline : mesurer avant de deployer */}
              <section id="baseline" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Baseline : mesurer avant de deployer</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est l&apos;erreur numero un. On deploie l&apos;IA, on constate que &ldquo;ca marche bien&rdquo;, mais on n&apos;a aucun point de comparaison. Sans baseline, vous ne pouvez pas calculer le gain. &ldquo;Le scoring IA est bon&rdquo; ne veut rien dire si vous ne savez pas quel etait le taux de conversion avec le scoring precedent.</p>
                    <p>Creer votre baseline ne prend qu&apos;une semaine. Voici le plan :</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { jour: "Jour 1-2", titre: "Collecter les metriques actuelles", actions: ["Exporter le temps moyen de qualification sur les 50 derniers leads", "Mesurer le temps de reporting de chaque commercial (auto-declaration + observation)", "Relever le win rate, le cycle de vente et le taux de conversion MQL>SQL des 3 derniers mois", "Documenter le processus actuel de preparation des calls"], color: "#22C55E" },
                      { jour: "Jour 3", titre: "Mesurer la qualite actuelle", actions: ["Evaluer la precision du scoring actuel (combien de leads 'chauds' se sont reellement convertis)", "Auditer 20 fiches contacts pour mesurer le taux de completude", "Compter le nombre de taches manuelles repetitives par semaine et par commercial"], color: "#4B5EFC" },
                      { jour: "Jour 4", titre: "Consolider les donnees business", actions: ["Compiler les metriques de pipeline des 3 derniers mois (avec saisonnalite si applicable)", "Calculer le NRR et le forecast accuracy sur le dernier trimestre", "Documenter les couts actuels (outils, temps humain)"], color: "#6C5CE7" },
                      { jour: "Jour 5", titre: "Creer le document de reference", actions: ["Compiler toutes les metriques dans un document unique (Google Sheet ou Notion)", "Definir les objectifs cibles pour chaque KPI a M+1 et M+3", "Faire valider par le management et l'equipe commerciale", "Archiver avec une date : ce sera votre point de reference pour les 12 prochains mois"], color: "#6D00CC" },
                    ].map((j) => (
                      <div key={j.jour} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white" style={{ background: j.color }}>{j.jour}</div>
                          <span className="text-[12px] font-semibold text-[#111]">{j.titre}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {j.actions.map((a, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[11px] text-[#777] leading-[1.7]">
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: j.color }} />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[11px] text-[#777] leading-[1.7]"><strong className="text-[#111]">Conseil :</strong> si vous avez deja deploye l&apos;IA sans baseline, tout n&apos;est pas perdu. Vous pouvez reconstituer une baseline approximative a partir des donnees historiques de votre CRM (periodes precedant le deploiement). C&apos;est moins precis, mais c&apos;est mieux que rien. Et a partir de maintenant, documentez chaque nouveau deploiement avec une baseline propre.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 : Notre approche Ceres */}
              <section id="approche-ceres" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Notre approche Ceres</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chez Ceres, la mesure n&apos;est pas une option. Elle fait partie integrante de chaque deploiement d&apos;IA que nous realisons. Nous avons systematise le processus en trois temps, parce que nous avons appris (parfois a nos depens) que sans mesure rigoureuse, il est impossible de demontrer la valeur de l&apos;IA aux equipes et au management.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { phase: "Avant", timing: "Semaine -1", desc: "On cree la baseline. On mesure les 10 KPIs de reference sur les donnees existantes du CRM. On documente les processus actuels. On definit les objectifs cibles avec l'equipe.", color: "#FF7A59", items: ["Audit des metriques actuelles", "Documentation des processus", "Definition des objectifs M+1 et M+3"] },
                      { phase: "M+1", timing: "1 mois apres", desc: "Premier point de mesure. On compare les 10 KPIs avec la baseline. On identifie les gains rapides et les points d'ajustement. On corrige la configuration des agents si necessaire.", color: "#22C55E", items: ["Comparaison avec la baseline", "Identification des ajustements", "Recalibrage si necessaire"] },
                      { phase: "M+3", timing: "3 mois apres", desc: "Mesure de confirmation. L'effet Hawthorne est passe. Les metriques a M+3 refletent l'impact reel et durable de l'IA. On calcule le ROI definitif et on presente les resultats au management.", color: "#4B5EFC", items: ["Mesure d'impact durable", "Calcul du ROI definitif", "Presentation au management"] },
                    ].map((p) => (
                      <div key={p.phase} className="rounded-xl border border-[#F2F2F2] p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-white" style={{ background: p.color }}>{p.phase}</div>
                          <span className="text-[10px] text-[#999]">{p.timing}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-3">{p.desc}</p>
                        <div className="space-y-1.5">
                          {p.items.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-[10px] text-[#999]">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Cette approche en trois temps nous permet de garantir des resultats mesurables a chacun de nos clients. Le ROI moyen que nous observons a M+3 est de 3,2x l&apos;investissement. Pas parce que l&apos;IA est magique, mais parce qu&apos;on mesure, on ajuste et on optimise en continu.</p>
                    <p>Le plus important : ces metriques ne sont pas reservees aux data analysts. Nous formons les equipes a lire et interpreter leur dashboard IA, pour qu&apos;elles deviennent autonomes dans le suivi de la performance. L&apos;objectif est que chaque commercial puisse dire : &ldquo;l&apos;IA me fait gagner 8 heures par semaine et mes deals se closent 20% plus vite&rdquo;, avec des chiffres pour le prouver.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Mesurer l&apos;impact de l&apos;IA ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, chaque deploiement d&apos;IA s&apos;accompagne d&apos;un framework de mesure complet : baseline, KPIs, dashboard et revue a M+1 et M+3. On vous montre les chiffres, pas des promesses. Commencez par un appel de 30 minutes pour evaluer votre situation.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#22C55E] text-white rounded-lg text-[13px] font-medium hover:bg-[#1EAD50] transition-colors">
                  Mesurer l&apos;impact de votre IA
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