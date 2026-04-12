"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IA en B2B : par ou commencer quand on n'a rien fait",
  description: "Guide pratique pour debuter avec l'IA en B2B. Les 3 prerequis, les 3 premiers use cases (enrichissement, reporting, emails), ce qu'il ne faut pas faire, le budget reel et notre methodologie en 5 etapes.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-b2b-par-ou-commencer" },
  articleSection: "IA & Automatisation",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "pas-en-retard", title: "Vous n'etes pas en retard" },
  { id: "trois-prerequis", title: "Les 3 prerequis" },
  { id: "premier-use-case", title: "Use case 1 : enrichissement" },
  { id: "deuxieme-use-case", title: "Use case 2 : reporting" },
  { id: "troisieme-use-case", title: "Use case 3 : emails" },
  { id: "ne-pas-faire", title: "Ce qu'il ne faut PAS faire" },
  { id: "budget-reel", title: "Le budget reel" },
  { id: "methodologie", title: "Notre methodologie" },
];

const relatedArticles = [
  { title: "Process, Data, IA : pourquoi l'ordre compte en RevOps", slug: "process-data-ia-ordre-revops", category: "RevOps", color: "#FF7A59" },
  { title: "5 agents IA deployes chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "ROI de l'IA en B2B : comment le calculer", slug: "roi-ia-b2b-calculer", category: "Data & Reporting", color: "#22C55E" },
];

export default function IaB2bParOuCommencerArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pas-en-retard");

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
        <div className="h-full bg-[#D4A27F] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#D4A27F", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#D4A27F", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />

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
                        ? "border-[#D4A27F] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=IA%20en%20B2B%20%3A%20par%20ou%20commencer&url=https://ceres.agency/blog/ia-b2b-par-ou-commencer" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/ia-b2b-par-ou-commencer" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">IA en B2B : par ou commencer</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">13 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                IA en B2B : par ou commencer quand on n&apos;a rien fait
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Tout le monde parle d&apos;IA. Vos concurrents annoncent des &ldquo;solutions AI-powered&rdquo;. Vos equipes veulent des outils. Mais vous n&apos;avez encore rien deploye. Pas de panique. Ce guide est fait pour vous. Les 3 prerequis, les 3 premiers use cases a deployer (dans le bon ordre), le budget reel et ce qu&apos;il ne faut surtout pas faire en premier.
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
              <section id="pas-en-retard" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Vous n&apos;etes pas en retard (mais il faut commencer)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA generative en B2B a moins de 3 ans. ChatGPT a ete lance fin 2022. Claude en 2023. Les premiers deployements serieux en entreprise datent de 2024. Nous sommes en 2026 et la majorite des PME B2B n&apos;ont toujours pas deploye d&apos;IA dans leurs operations commerciales. Vous n&apos;etes pas en retard. Vous etes dans la norme.</p>
                    <p>Ce qui serait une erreur, c&apos;est de ne pas commencer maintenant. Pas parce que vos concurrents le font (certains le font mal). Mais parce que les gains sont reels, mesurables et accessibles. L&apos;IA n&apos;est plus un sujet de R&amp;D. C&apos;est un outil operationnel qui fait gagner du temps et de l&apos;argent des le premier mois.</p>
                    <p>Mais il y a un mais. L&apos;IA ne fonctionne pas si les fondations ne sont pas la. Deployer de l&apos;IA sur un CRM sale, des process non documentes et sans sponsor interne, c&apos;est comme mettre un moteur de Formule 1 dans une voiture sans direction. Ca va vite, mais pas dans la bonne direction.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "< 3 ans", label: "d'age de l'IA generative en B2B", color: "#D4A27F" },
                      { stat: "70%", label: "des PME B2B n'ont pas deploye d'IA", color: "#FF7A59" },
                      { stat: "1 mois", label: "pour voir les premiers resultats", color: "#22C55E" },
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
              <section id="trois-prerequis" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 3 prerequis</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de deployer le moindre agent IA, verifiez que ces trois conditions sont reunies. Si l&apos;une manque, commencez par la. L&apos;IA est la derniere couche, pas la premiere.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        number: "01",
                        title: "Donnees propres",
                        desc: "Votre CRM doit avoir un minimum de qualite. Le seuil : 70% de completude sur les champs critiques (email, nom, entreprise), moins de 10% de doublons, emails valides a 90%+. Si vous etes en dessous, la priorite est le nettoyage, pas l'IA. L'IA amplifie la qualite des donnees, dans les deux sens : bonnes donnees = bons resultats, mauvaises donnees = mauvais resultats plus vite.",
                        check: "Exportez 100 contacts aleatoires. Comptez les champs vides, les doublons, les emails invalides. Si plus de 30% ont un probleme, nettoyez d'abord.",
                        color: "#22C55E"
                      },
                      {
                        number: "02",
                        title: "Process documentes",
                        desc: "L'IA automatise des process. Si vos process n'existent pas ou ne sont pas documentes, l'IA ne peut rien automatiser. Au minimum : un pipeline de vente defini avec des criteres de passage d'etape, un workflow de qualification des leads, un process de reporting.",
                        check: "Demandez a 3 commerciaux comment ils qualifient un lead. Si les 3 donnent des reponses differentes, documentez le process d'abord.",
                        color: "#4B5EFC"
                      },
                      {
                        number: "03",
                        title: "Sponsor interne",
                        desc: "L'IA necessite un champion en interne. Quelqu'un qui pousse le projet, forme les equipes, mesure les resultats et ajuste. Sans sponsor, le projet meurt a la premiere difficulte. Ce sponsor est generalement le RevOps Manager, le directeur commercial ou le fondateur.",
                        check: "Qui va consacrer 2h/semaine au projet IA pendant les 3 premiers mois ? Si personne, trouvez cette personne d'abord.",
                        color: "#6D00CC"
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: item.color }}>{item.number}</div>
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#FAFAFA] p-2">
                          <span className="text-[10px] font-semibold shrink-0 mt-0.5" style={{ color: item.color }}>Test :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.check}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Si les trois prerequis sont la, vous pouvez deployer votre premier use case IA en 2 a 3 semaines. Si un prerequis manque, comptez 4 a 8 semaines de preparation en amont. Ce n&apos;est pas du temps perdu, c&apos;est la fondation qui rend l&apos;IA efficace.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="premier-use-case" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le premier use case : l&apos;enrichissement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Si vous ne devez deployer qu&apos;un seul use case IA, c&apos;est celui-ci. L&apos;enrichissement automatique des fiches CRM. C&apos;est le use case avec le meilleur ratio effort/impact, le plus facile a mettre en place et le plus facile a mesurer.</p>
                    <p><strong className="text-[#111]">Ce que ca fait.</strong> Chaque fois qu&apos;un nouveau contact entre dans votre CRM (formulaire, import, creation manuelle), un agent IA enrichit automatiquement la fiche en quelques secondes. A partir d&apos;un email, il recupere : le nom complet, le poste, l&apos;entreprise, la taille, le secteur, le chiffre d&apos;affaires, les technologies utilisees, le profil LinkedIn, les actualites recentes.</p>
                    <p><strong className="text-[#111]">Pourquoi en premier.</strong> Trois raisons. D&apos;abord, ca ameliore immediatement la qualite de votre base, qui est le prerequis pour tous les autres use cases. Ensuite, le gain de temps est enorme et facile a mesurer (10 a 15 minutes par lead). Enfin, ca ne change rien aux process existants de vos equipes, donc l&apos;adoption est naturelle.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[12px] font-semibold text-[#111]">Resultats typiques a M+1</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { stat: "90%+", label: "taux de completude CRM", color: "#22C55E" },
                        { stat: "-85%", label: "temps d'enrichissement", color: "#4B5EFC" },
                        { stat: "50 EUR", label: "cout mensuel moyen", color: "#D4A27F" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[16px] font-bold mb-0.5" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[9px] text-[#999]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="deuxieme-use-case" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le deuxieme use case : le reporting</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une fois l&apos;enrichissement en place (et la base plus propre), le deuxieme use case est le reporting automatise. C&apos;est le use case qui convainc les dirigeants, parce qu&apos;il leur fait gagner du temps a eux.</p>
                    <p><strong className="text-[#111]">Ce que ca fait.</strong> Chaque lundi matin, un agent IA genere automatiquement le rapport commercial hebdomadaire. Pipeline cree vs objectif, deals avances vs bloques, win rate de la semaine, top deals a surveiller, alertes (deals inactifs, close date depassee). Le rapport est envoye par Slack ou email, avec une analyse narrative en langage naturel.</p>
                    <p><strong className="text-[#111]">Pourquoi en deuxieme.</strong> Le reporting necessite des donnees propres (d&apos;ou l&apos;enrichissement en premier). Il necessite aussi un pipeline structure avec des stages clairs et des deals a jour. Si les commerciaux ne mettent pas a jour leurs deals, le rapport sera faux. L&apos;enrichissement automatique ameliore la qualite des donnees, ce qui ameliore la fiabilite du reporting.</p>
                    <p><strong className="text-[#111]">Le gain.</strong> Un manager passe en moyenne 3 heures par semaine a compiler le reporting : extraire les chiffres, formater, analyser les ecarts, rediger les commentaires. L&apos;IA fait tout ca en 5 minutes. Le manager ne compile plus, il decide.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="troisieme-use-case" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le troisieme use case : les emails personnalises</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le troisieme use case est la redaction d&apos;emails de prospection personnalises par l&apos;IA. C&apos;est le use case le plus visible pour les equipes commerciales, celui qui change leur quotidien.</p>
                    <p><strong className="text-[#111]">Ce que ca fait.</strong> A partir de la fiche CRM enrichie (use case 1), l&apos;IA redige un premier email de prospection personnalise. Pas un template generique avec le prenom en variable. Un email qui mentionne l&apos;actualite de l&apos;entreprise, les enjeux de son secteur, un lien avec votre proposition de valeur. Le commercial relit, ajuste en 2 minutes et envoie.</p>
                    <p><strong className="text-[#111]">Pourquoi en troisieme.</strong> La personnalisation necessite des donnees riches (enrichissement en premier) et un historique d&apos;emails qui fonctionnent (quels sujets, quels angles, quels taux de reponse). Deployer la redaction IA sans donnees enrichies, c&apos;est ecrire des emails generiques plus vite. Ca n&apos;apporte rien.</p>
                    <p><strong className="text-[#111]">Les resultats.</strong> Les taux de reponse passent en moyenne de 3-5% (templates classiques) a 8-12% (emails personnalises IA). Sur 200 emails envoyes par semaine, ca represente 10 a 14 reponses supplementaires. Soit 2 a 3 meetings en plus par semaine, par SDR.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { stat: "3-5%", label: "taux de reponse classique", color: "#EF4444" },
                      { stat: "8-12%", label: "taux de reponse avec IA", color: "#22C55E" },
                      { stat: "+3 meetings", label: "par SDR par semaine", color: "#4B5EFC" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[16px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[9px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="ne-pas-faire" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Ce qu&apos;il ne faut PAS faire en premier</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le plus grand risque quand on debute avec l&apos;IA, c&apos;est de vouloir commencer par le use case le plus impressionnant au lieu du plus utile. Voici ce qu&apos;il ne faut pas faire en premier, et pourquoi.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Le scoring predictif",
                        why: "Le scoring IA necessite un historique de conversions suffisant (au moins 200 deals closes) et des donnees propres. Si votre base a 30% de champs vides, le modele apprendra sur du bruit. Resultat : des scores incoherents qui demoralisent les equipes et discreditent l'IA.",
                        when: "Apres 3 mois d'enrichissement et au moins 200 deals en historique propre.",
                        color: "#EF4444"
                      },
                      {
                        title: "Les agents conversationnels complexes",
                        why: "Un chatbot IA qui qualifie les leads en autonome, book des meetings et repond aux objections. Ca fait rever, mais ca necessite des mois de fine-tuning, une base de connaissances exhaustive et une tolerance zero pour les hallucinations. C'est un projet a 6 mois, pas un premier use case.",
                        when: "Apres avoir maitrise les use cases simples et constitue une base de connaissances fiable.",
                        color: "#FF7A59"
                      },
                      {
                        title: "L'automatisation complete du funnel",
                        why: "Vouloir automatiser tout d'un coup (qualification + scoring + emails + reporting + analyse win/loss) est la recette de l'echec. Trop de variables, trop de dependances, impossible a debugger. Chaque use case doit etre deploye, teste et valide avant de passer au suivant.",
                        when: "Apres 6+ mois de deploiement progressif, un use case a la fois.",
                        color: "#6C5CE7"
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.why}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#22C55E]/5 p-2">
                          <span className="text-[10px] text-[#22C55E] font-semibold shrink-0 mt-0.5">Quand :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.when}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La regle est simple : commencez par ce qui est simple, utile et mesurable. L&apos;enrichissement, le reporting, les emails. Ces trois use cases construisent la confiance des equipes envers l&apos;IA, ameliorent la qualite des donnees et generent un ROI mesurable. C&apos;est cette base qui rend les use cases avances possibles ensuite.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="budget-reel" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le budget reel : 50-200 EUR/mois d&apos;IA + setup</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA ne coute pas cher. C&apos;est l&apos;un des investissements les plus rentables en B2B. Voici le budget reel pour les 3 premiers use cases.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Budget pour les 3 premiers use cases</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-[11px] font-semibold text-[#111] mb-2">Couts recurrents mensuels</p>
                        <div className="space-y-1.5">
                          {[
                            { poste: "API Claude (enrichissement + emails)", range: "30 - 100 EUR/mois", color: "#D4A27F" },
                            { poste: "Make ou n8n (orchestration)", range: "20 - 60 EUR/mois", color: "#6D00CC" },
                            { poste: "Clay ou Apollo (donnees)", range: "0 - 50 EUR/mois", color: "#4B5EFC" },
                          ].map((item) => (
                            <div key={item.poste} className="flex items-center justify-between text-[11px] py-1.5 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                              <span className="text-[#666]">{item.poste}</span>
                              <span className="font-medium" style={{ color: item.color }}>{item.range}</span>
                            </div>
                          ))}
                          <div className="flex items-center justify-between text-[12px] py-2 px-3 rounded-lg bg-[#D4A27F]/10 border border-[#D4A27F]/20">
                            <span className="font-semibold text-[#111]">Total mensuel</span>
                            <span className="font-bold text-[#D4A27F]">50 - 200 EUR/mois</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-[#111] mb-2">Couts de setup (one-time)</p>
                        <div className="space-y-1.5">
                          {[
                            { poste: "Configuration enrichissement", range: "1 000 - 2 000 EUR" },
                            { poste: "Configuration reporting", range: "1 000 - 2 000 EUR" },
                            { poste: "Configuration emails IA", range: "500 - 1 500 EUR" },
                          ].map((item) => (
                            <div key={item.poste} className="flex items-center justify-between text-[11px] py-1.5 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                              <span className="text-[#666]">{item.poste}</span>
                              <span className="text-[#111] font-medium">{item.range}</span>
                            </div>
                          ))}
                          <div className="flex items-center justify-between text-[12px] py-2 px-3 rounded-lg bg-[#4B5EFC]/10 border border-[#4B5EFC]/20">
                            <span className="font-semibold text-[#111]">Total setup</span>
                            <span className="font-bold text-[#4B5EFC]">2 500 - 5 500 EUR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Setup amorti sur 12 mois = 200-460 EUR/mois supplementaires. Cout total all-in : 250 a 660 EUR/mois.</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le ROI.</strong> Pour un investissement de 300 a 500 EUR/mois (couts recurrents + setup amorti), les gains moyens constates sont de 4 000 a 8 000 EUR/mois (temps gagne + impact revenue). Soit un ROI de 8 a 16x. Les details du calcul sont dans notre article dedie au <Link href="/blog/roi-ia-b2b-calculer" className="text-[#D4A27F] hover:underline">ROI de l&apos;IA en B2B</Link>.</p>
                    <p>Ce n&apos;est pas un investissement a risque. Le downside est de quelques centaines d&apos;euros par mois. Le upside est un gain de productivite equivalent a un poste a temps partiel, plus un impact mesurable sur le pipeline et le win rate.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="methodologie" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre methodologie en 5 etapes</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on accompagne les PME B2B dans leur premier deploiement IA avec une methode eprouvee en 5 etapes. Chaque etape a un livrable concret et un critere de passage a l&apos;etape suivante.</p>
                  </div>

                  <div className="my-6 space-y-2">
                    {[
                      { step: "01", title: "Diagnostic", desc: "Audit de la base CRM, des process existants et de la maturite IA de l'equipe. Identification des 3 premiers use cases avec le meilleur ratio effort/impact. Livrable : plan de deploiement en 12 semaines.", duration: "1 semaine", color: "#22C55E" },
                      { step: "02", title: "Fondation Data", desc: "Nettoyage, deduplication, standardisation de la base CRM. Mise en place de la gouvernance pour que la base reste propre. Livrable : data quality score > 80.", duration: "2-3 semaines", color: "#4B5EFC" },
                      { step: "03", title: "Use case 1 : Enrichissement", desc: "Configuration de l'agent d'enrichissement automatique. Integration avec le CRM et les sources de donnees. Test et validation. Livrable : enrichissement automatique operationnel.", duration: "2 semaines", color: "#6C5CE7" },
                      { step: "04", title: "Use cases 2 et 3 : Reporting + Emails", desc: "Configuration du reporting automatise et de la redaction d'emails personnalises. Formation des equipes. Livrable : 2 agents IA operationnels.", duration: "3-4 semaines", color: "#FF7A59" },
                      { step: "05", title: "Mesure et optimisation", desc: "Bilan a M+3 : ROI chiffre, adoption par les equipes, ajustements. Definition de la roadmap IA pour les 6 prochains mois. Livrable : rapport ROI + roadmap.", duration: "1 semaine", color: "#D4A27F" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3 rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: item.color }}>{item.step}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-[12px] font-semibold text-white">{item.title}</p>
                            <span className="text-[9px] text-[#666] ml-auto">{item.duration}</span>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le programme complet prend 10 a 12 semaines. A la fin, vous avez 3 agents IA operationnels, une base CRM propre avec gouvernance, et un ROI mesurable. C&apos;est la fondation sur laquelle vous pouvez construire les use cases suivants : scoring predictif, analyse win/loss, agents conversationnels.</p>
                    <p>Decouvrez le detail de notre <Link href="/methode" className="text-[#D4A27F] hover:underline">methode sur la page dediee</Link>.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Commencer avec l&apos;IA en B2B ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">On commence par un diagnostic gratuit de 30 minutes. On evalue la qualite de votre base, vos process existants et le potentiel IA de votre equipe. Pas de pitch, pas d&apos;engagement. Juste un diagnostic honnete.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#D4A27F] text-white rounded-lg text-[13px] font-medium hover:bg-[#C49370] transition-colors">
                  Diagnostic IA gratuit
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#D4A27F] transition-colors leading-[1.4]">{a.title}</p>
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
