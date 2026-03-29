"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sales enablement : le guide complet pour equipes B2B",
  description: "Guide complet du sales enablement B2B : definition, les 4 piliers (contenu, formation, outils, processus), mise en place, onboarding commercial, coaching, metriques et ROI. Avec exemples HubSpot, Seismic et Highspot.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-20",
  dateModified: "2026-03-20",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/sales-enablement-guide" },
  articleSection: "RevOps",
  wordCount: 3500,
  inLanguage: "fr",
};

const sections = [
  { id: "definition", title: "Definition" },
  { id: "quatre-piliers", title: "Les 4 piliers" },
  { id: "strategie-contenu", title: "Strategie de contenu" },
  { id: "outils-tech", title: "Outils et technologies" },
  { id: "onboarding", title: "Onboarding commercial" },
  { id: "coaching", title: "Framework de coaching" },
  { id: "metriques-kpis", title: "Metriques et KPIs" },
  { id: "hubspot-implementation", title: "Implementation HubSpot" },
  { id: "erreurs-courantes", title: "Erreurs courantes" },
  { id: "business-case", title: "Construire le business case" },
];

const relatedArticles = [
  { title: "Comment aligner marketing et sales en 30 jours avec le RevOps", slug: "aligner-marketing-sales-revops", category: "RevOps", color: "#FF7A59" },
  { title: "Lead scoring : le guide complet", slug: "lead-scoring-guide-complet", category: "RevOps", color: "#FF7A59" },
  { title: "9 actions commerciales a automatiser dans HubSpot", slug: "9-actions-commerciales-automatiser-hubspot", category: "CRM & HubSpot", color: "#4B5EFC" },
];

export default function SalesEnablementGuidePage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("definition");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "22%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "60%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Sales%20enablement%20:%20le%20guide%20complet%20pour%20equipes%20B2B&url=https://ceres.agency/blog/sales-enablement-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/sales-enablement-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Sales enablement</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">16 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Sales enablement : le guide complet pour equipes B2B
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le sales enablement est devenu un pilier strategique des organisations B2B performantes. Ce guide couvre tout : definition, les 4 piliers fondamentaux, strategie de contenu, outils et technologies, onboarding des commerciaux, framework de coaching, metriques cles et implementation concrete dans HubSpot. De la theorie a la pratique, avec des exemples reels et des templates actionables.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>20 mars 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 -- Definition */}
              <section id="definition" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Qu&apos;est-ce que le sales enablement ?</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le sales enablement est un processus strategique continu qui vise a equiper les equipes commerciales avec les ressources, contenus, outils et connaissances dont elles ont besoin pour engager efficacement les acheteurs a chaque etape du parcours d&apos;achat. Contrairement a une idee recue, il ne s&apos;agit pas simplement de creer des presentations commerciales ou de deployer un outil de plus dans le stack technologique.</p>
                    <p>La definition la plus precise vient de Gartner : le sales enablement est l&apos;ensemble des activites, systemes, processus et informations qui soutiennent et promeuvent les interactions commerciales basees sur la connaissance, avec les clients et prospects. En d&apos;autres termes, c&apos;est tout ce qui permet a un commercial d&apos;etre plus pertinent, plus rapide et plus efficace dans ses interactions avec les acheteurs.</p>
                    <p>Il est important de distinguer le sales enablement du sales operations (sales ops). Le sales ops se concentre sur l&apos;efficience operationnelle : gestion du CRM, territoires, quotas, compensation, reporting. Le sales enablement se concentre sur l&apos;efficacite commerciale : les bons contenus au bon moment, la formation continue, le coaching individualise, les playbooks de vente. Les deux fonctions sont complementaires mais distinctes.</p>
                    <p>Dans le cadre du RevOps, le sales enablement joue un role de pont entre le marketing et les ventes. C&apos;est la fonction qui s&apos;assure que les contenus produits par le marketing sont reellement utilises par les commerciaux, que les messages sont coherents a travers le funnel, et que les equipes terrain ont les armes pour repondre aux objections et raccourcir les cycles de vente.</p>
                    <p>Le sales enablement moderne va bien au-dela du simple &ldquo;donner des brochures aux commerciaux&rdquo;. Il englobe la formation initiale et continue, le coaching base sur les donnees, l&apos;optimisation des processus de vente, la gestion des connaissances produit et marche, et la mesure de l&apos;impact de chaque initiative sur le revenu. C&apos;est une discipline a part entiere qui necessite des competences specifiques et une gouvernance claire.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "76%", label: "des entreprises avec sales enablement depassent leurs objectifs de revenu", color: "#FF7A59" },
                      { value: "49%", label: "de taux de closing plus eleve avec un programme structure", color: "#4B5EFC" },
                      { value: "29%", label: "de reduction du temps de ramp-up des nouveaux commerciaux", color: "#6C5CE7" },
                      { value: "2.3x", label: "meilleur taux d&apos;adoption des contenus marketing par les sales", color: "#22C55E" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[22px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 -- Les 4 piliers */}
              <section id="quatre-piliers" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 4 piliers du sales enablement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un programme de sales enablement solide repose sur quatre piliers fondamentaux. Negliger l&apos;un d&apos;entre eux compromet l&apos;ensemble de la structure. Chaque pilier soutient les autres et contribue a une machine commerciale performante et previsible.</p>
                    <p>Le premier pilier est le contenu. Il s&apos;agit de tous les supports que les commerciaux utilisent dans leurs interactions avec les prospects : etudes de cas, fiches produit, presentations, comparatifs concurrentiels, calculateurs de ROI, guides d&apos;implementation, temoignages clients. Le contenu doit etre organise par persona, par etape du parcours d&apos;achat et par secteur d&apos;activite. Le probleme dans la plupart des entreprises n&apos;est pas le manque de contenu, mais le manque d&apos;organisation et d&apos;accessibilite.</p>
                    <p>Le deuxieme pilier est la formation. Les commerciaux doivent maitriser le produit, le marche, les personas, les processus internes et les techniques de vente. La formation ne se limite pas a l&apos;onboarding initial. Elle doit etre continue, avec des micro-formations regulieres sur les nouveautes produit, les evolutions du marche, les retours terrain et les meilleures pratiques. Le format doit etre adapte aux contraintes des commerciaux : court, actionable, facilement accessible sur mobile.</p>
                    <p>Le troisieme pilier concerne les outils et la technologie. Le stack technologique du sales enablement comprend des plateformes de gestion de contenu commercial, des outils de coaching video, des solutions d&apos;intelligence conversationnelle, des systemes de formation en ligne et bien sur le CRM comme socle. L&apos;enjeu n&apos;est pas d&apos;empiler les outils mais de creer un ecosysteme integre ou l&apos;information circule sans friction.</p>
                    <p>Le quatrieme pilier est le processus. Il definit comment le contenu est cree, valide, distribue et mesure. Comment les formations sont planifiees et delivrees. Comment le coaching est structure. Comment les retours terrain remontent au marketing. Sans processus clairs, meme le meilleur contenu et les meilleurs outils restent sous-utilises.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { pilier: "Contenu", desc: "Etudes de cas, fiches produit, battlecards, calculateurs ROI, presentations. Organises par persona et etape du funnel.", icon: "1", color: "#FF7A59" },
                      { pilier: "Formation", desc: "Onboarding, micro-formations continues, certifications produit, ateliers techniques de vente, roleplay.", icon: "2", color: "#4B5EFC" },
                      { pilier: "Outils", desc: "CRM, plateforme de contenu, intelligence conversationnelle, coaching video, automatisation des sequences.", icon: "3", color: "#6C5CE7" },
                      { pilier: "Processus", desc: "Workflows de creation de contenu, cadences de formation, cycles de coaching, feedback loops marketing-sales.", icon: "4", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.pilier} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold" style={{ backgroundColor: item.color }}>{item.icon}</div>
                          <p className="text-[13px] font-semibold text-[#111]">{item.pilier}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 -- Strategie de contenu */}
              <section id="strategie-contenu" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La strategie de contenu pour le sales enablement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La strategie de contenu du sales enablement est fondamentalement differente de la strategie de contenu marketing classique. Le contenu marketing attire et eduque. Le contenu de sales enablement aide le commercial a convaincre et a faire avancer le deal. Les deux sont necessaires mais ne repondent pas aux memes objectifs ni aux memes contraintes.</p>
                    <p>Le premier principe est l&apos;alignement avec le parcours d&apos;achat. Chaque etape du funnel necessite des contenus specifiques. En phase de decouverte, le commercial a besoin de contenus qui positionnent le probleme et demontrent l&apos;expertise : points de vue marche, diagnostics sectoriels, benchmarks. En phase d&apos;evaluation, il faut des comparatifs, des etudes de cas detaillees, des demonstrations de ROI. En phase de decision, les temoignages clients, les references sectorielles et les plans d&apos;implementation font la difference.</p>
                    <p>Le deuxieme principe est la personnalisation par persona. Un directeur financier ne reagit pas aux memes arguments qu&apos;un directeur commercial ou qu&apos;un DSI. Chaque persona a ses preoccupations, son vocabulaire, ses criteres de decision. Le contenu enablement doit etre decline par persona pour que le commercial puisse adapter son discours a chaque interlocuteur dans le comite d&apos;achat.</p>
                    <p>Le troisieme principe est l&apos;accessibilite. Un contenu qui existe mais que personne ne trouve est un contenu inutile. La plateforme de sales enablement doit permettre une recherche contextuelle : par secteur, par persona, par etape du deal, par objection. Le commercial doit pouvoir trouver le bon contenu en moins de 30 secondes, directement depuis son CRM.</p>
                    <p>Le quatrieme principe est la mesure. Chaque contenu doit etre tracke : combien de fois il est utilise, par qui, a quel moment du cycle de vente, et surtout quel est son impact sur le taux de conversion. Les contenus les plus performants sont amplifies, les contenus inutilises sont retires ou retravailles. Cette boucle de feedback entre usage et performance est ce qui rend la strategie de contenu enablement dynamique et toujours pertinente.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "Battlecards concurrentielles : comparatifs detailles avec les principaux concurrents, forces, faiblesses, objections types et reponses",
                      "Etudes de cas par secteur : resultats chiffres, contexte client, problematique, solution deployee, timeline et ROI mesure",
                      "Calculateurs de ROI interactifs : outils permettant au prospect de simuler l&apos;impact financier de la solution sur ses propres donnees",
                      "One-pagers par persona : synthese en une page adaptee a chaque decideur du comite d&apos;achat (CFO, CTO, VP Sales, CEO)",
                      "Sequences email templatisees : modeles d&apos;emails pour chaque etape du cycle, personnalisables selon le contexte du prospect",
                      "Guides d&apos;objections : les 20 objections les plus frequentes avec les reponses argumentees, les preuves et les redirections",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[12px] text-[#555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- Outils et technologies */}
              <section id="outils-tech" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les outils et technologies du sales enablement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le marche des outils de sales enablement a explose ces dernieres annees. En 2026, il existe des dizaines de solutions, chacune couvrant un ou plusieurs aspects de la discipline. L&apos;enjeu pour les equipes RevOps est de construire un stack coherent, integre et adopte par les commerciaux, plutot que d&apos;accumuler des outils sous-utilises.</p>
                    <p>La premiere categorie concerne les plateformes de gestion de contenu commercial. Seismic, Highspot et Showpad sont les leaders du marche. Ces outils centralisent tous les contenus sales, les organisent par contexte, mesurent leur usage et leur impact, et permettent aux commerciaux de les partager en un clic avec les prospects. Seismic excelle sur les entreprises de grande taille avec des besoins de personnalisation avances. Highspot est reconnu pour son interface intuitive et sa recherche par intelligence artificielle. Showpad combine contenu et formation dans une meme plateforme.</p>
                    <p>La deuxieme categorie couvre l&apos;intelligence conversationnelle. Gong, Chorus et Clari analysent les appels commerciaux en temps reel, identifient les patterns gagnants, detectent les signaux d&apos;achat et les risques, et alimentent les dashboards de coaching. Ces outils transforment les conversations commerciales en donnees exploitables pour ameliorer les performances de toute l&apos;equipe.</p>
                    <p>La troisieme categorie concerne les outils de formation et coaching. Mindtickle, Lessonly et Brainshark permettent de creer des parcours de formation, de simuler des situations de vente, de certifier les commerciaux et de suivre leur progression. Le coaching base sur les donnees remplace progressivement le coaching intuitif.</p>
                    <p>Enfin, HubSpot merite une mention speciale. Le Sales Hub integre nativement des fonctionnalites d&apos;enablement : playbooks, sequences, documents avec tracking, bibliotheque de snippets, guides de conversation. Pour les PME et mid-market, HubSpot offre une solution tout-en-un qui evite la complexite d&apos;un stack multi-outils.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { outil: "Seismic", type: "Contenu", desc: "Leader enterprise. Personnalisation avancee, analytics poussees, integrations CRM profondes.", prix: "Sur devis", color: "#FF7A59" },
                      { outil: "Highspot", type: "Contenu", desc: "Interface intuitive, recherche IA, coaching integre. Excellent rapport fonctionnalites/UX.", prix: "A partir de 600$/an/user", color: "#4B5EFC" },
                      { outil: "Gong", type: "Intelligence", desc: "Analyse conversationnelle, deal intelligence, forecasting base sur les interactions reelles.", prix: "A partir de 100$/mois/user", color: "#6C5CE7" },
                      { outil: "Mindtickle", type: "Formation", desc: "Readiness platform. Onboarding, certifications, coaching, roleplay IA, analytics de competences.", prix: "Sur devis", color: "#22C55E" },
                      { outil: "HubSpot Sales Hub", type: "Tout-en-un", desc: "Playbooks, sequences, documents tracking, snippets, guides de conversation. Natif dans le CRM.", prix: "A partir de 90EUR/mois", color: "#FF7A59" },
                      { outil: "Showpad", type: "Contenu + Formation", desc: "Combine gestion de contenu et learning experience. Fort sur le mid-market europeen.", prix: "Sur devis", color: "#4B5EFC" },
                    ].map((item) => (
                      <div key={item.outil} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.outil}</p>
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.type}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{item.desc}</p>
                        <p className="text-[10px] text-[#999]">{item.prix}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Onboarding commercial */}
              <section id="onboarding" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;onboarding des commerciaux : accelerer le time-to-productivity</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;onboarding des nouveaux commerciaux est le premier test concret d&apos;un programme de sales enablement. Un commercial B2B met en moyenne 6 a 9 mois pour atteindre sa pleine productivite. Avec un programme d&apos;enablement structure, ce delai peut etre reduit a 3-4 mois. L&apos;enjeu financier est considerable : chaque mois gagne represente des dizaines de milliers d&apos;euros de pipeline supplementaire.</p>
                    <p>Le programme d&apos;onboarding enablement se structure en phases. La premiere semaine est consacree a l&apos;immersion : culture d&apos;entreprise, vision produit, personas cibles, paysage concurrentiel, proposition de valeur. Le commercial doit comprendre pourquoi les clients achetent, pas seulement ce que le produit fait. Il observe des appels de commerciaux seniors, lit les etudes de cas cles et passe du temps avec le support client pour comprendre les problematiques terrain.</p>
                    <p>Les semaines deux et trois sont dedicees a la maitrise du processus de vente. Le commercial apprend le CRM, les etapes du pipeline, les criteres de qualification, les playbooks par scenario. Il s&apos;entraine sur des roleplays structures : premier appel de decouverte, demo produit, gestion des objections prix, negociation, closing. Chaque roleplay est enregistre et debrief avec le manager.</p>
                    <p>Le premier mois se termine par une certification. Le commercial doit demontrer sa maitrise du pitch, de la demo, du processus de qualification et des objections les plus frequentes. Cette certification n&apos;est pas un examen theorique mais une simulation pratique evaluee par le management commercial et le sales enablement. Seuls les commerciaux certifies sont laches sur les leads entrants.</p>
                    <p>Les mois deux et trois marquent la montee en charge progressive. Le commercial prend ses premiers deals en autonomie, avec un buddy senior assigne. Des points hebdomadaires avec le manager permettent d&apos;identifier les blocages et d&apos;ajuster la formation. Les appels sont revus dans Gong ou un outil equivalent pour du coaching cible. L&apos;objectif est d&apos;atteindre 50% du quota au deuxieme mois et 75% au troisieme.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E8E8E8]">
                      <span className="text-[12px] font-semibold text-[#111]">Plan d&apos;onboarding type -- 90 jours</span>
                    </div>
                    <div className="p-4 space-y-3">
                      {[
                        { phase: "Semaine 1", label: "Immersion", items: "Culture, produit, personas, concurrence, observation calls", color: "#FF7A59" },
                        { phase: "Semaines 2-3", label: "Processus", items: "CRM, pipeline, playbooks, roleplays, certification", color: "#4B5EFC" },
                        { phase: "Mois 2", label: "Montee en charge", items: "Premiers deals, buddy system, coaching hebdo, 50% quota", color: "#6C5CE7" },
                        { phase: "Mois 3", label: "Autonomie", items: "Full pipeline, review calls Gong, 75% quota, ajustements", color: "#22C55E" },
                      ].map((item) => (
                        <div key={item.phase} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: item.color }} />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">{item.phase} -- {item.label}</p>
                            <p className="text-[10px] text-[#777] mt-0.5">{item.items}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Coaching framework */}
              <section id="coaching" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le framework de coaching commercial</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le coaching est le levier le plus puissant et le plus sous-exploite du sales enablement. Selon CSO Insights, les entreprises avec un programme de coaching structure atteignent un taux de closing superieur de 28% par rapport a celles qui n&apos;en ont pas. Le coaching n&apos;est pas du management. Il ne s&apos;agit pas de suivre les chiffres en pipeline review. Il s&apos;agit de developper les competences individuelles de chaque commercial pour qu&apos;il atteigne son plein potentiel.</p>
                    <p>Un framework de coaching efficace repose sur trois niveaux. Le premier niveau est le coaching de deal. Il se fait en continu, au fil des opportunites. Le manager ou le coach analyse un deal specifique, identifie les risques, les parties prenantes manquantes, les etapes sautees, et aide le commercial a elaborer une strategie pour faire avancer le deal. Les outils de deal intelligence comme Gong ou Clari fournissent des donnees objectives pour alimenter ces sessions.</p>
                    <p>Le deuxieme niveau est le coaching de competences. Il est planifie, structure et mesure. Chaque mois, le coach identifie une competence a developper pour chaque commercial : decouverte, demo, negociation, multithreading, gestion du temps. Des exercices pratiques sont assignes, des appels reels sont revus, des roleplays sont organises. La progression est trackee sur plusieurs semaines.</p>
                    <p>Le troisieme niveau est le coaching strategique. Il concerne la gestion du territoire, la priorisation des comptes, la construction de pipeline, la planification de la montee en charge. Ce coaching est generalement mensuel et implique le head of sales ou le VP commercial. Il prend du recul par rapport aux deals individuels pour travailler sur la strategie globale du commercial.</p>
                    <p>L&apos;erreur la plus frequente est de confondre coaching et pipeline review. La pipeline review est un exercice de controle ou le manager passe en revue les deals pour verifier les forecasts. Le coaching est un exercice de developpement ou le coach aide le commercial a progresser. Les deux sont necessaires mais ne doivent jamais etre fusionnes dans la meme session, au risque de degrader les deux.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "Sessions de coaching deal : 15 minutes, 2 fois par semaine, focalisees sur les 3 deals prioritaires du commercial",
                      "Sessions de coaching competences : 45 minutes, bi-mensuel, centrees sur un axe de developpement identifie",
                      "Sessions strategiques : 1 heure, mensuel, gestion de territoire et planification pipeline",
                      "Call reviews dans Gong : analyse de 2 appels par semaine, identification des patterns gagnants et des axes d&apos;amelioration",
                      "Roleplays structures : simulation de scenarios reels avec debrief immediat et plan d&apos;action",
                      "Scorecards individuelles : suivi mensuel des metriques de competences, pas seulement des resultats",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[12px] text-[#555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- Metriques et KPIs -- DARK SECTION */}
              <section id="metriques-kpis" className="mb-8">
                <div className="rounded-2xl bg-[#111] text-white p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Les metriques et KPIs du sales enablement</h2>
                  <div className="space-y-3 text-[13px] text-white/70 leading-[1.75]">
                    <p>Mesurer le sales enablement est un exercice delicat. Contrairement au marketing ou les metriques d&apos;acquisition sont directes, l&apos;enablement impacte les resultats de maniere indirecte, a travers l&apos;amelioration des competences et des comportements des commerciaux. Il faut donc combiner des metriques d&apos;activite, des metriques de competence et des metriques de resultat pour avoir une vue complete de la performance du programme.</p>
                    <p>Les metriques d&apos;activite mesurent l&apos;adoption du programme. Quel pourcentage des commerciaux utilise effectivement les contenus enablement ? Quels contenus sont les plus utilises ? Quel est le taux de completion des formations ? Ces metriques sont des indicateurs avances : si l&apos;adoption est faible, les resultats suivront.</p>
                    <p>Les metriques de competence evaluent la progression des commerciaux. Le taux de certification apres onboarding, les scores de roleplay, l&apos;evolution des scores de call quality dans Gong, la maitrise des objections. Ces metriques mesurent la transformation reelle des competences, qui est l&apos;objectif intermediaire du sales enablement.</p>
                    <p>Les metriques de resultat mesurent l&apos;impact final sur le revenu. Le time-to-productivity des nouveaux commerciaux, le taux de closing global, la taille moyenne des deals, la duree du cycle de vente, le win rate contre les concurrents principaux. Ces metriques sont les plus importantes mais aussi les plus lentes a evoluer. Il faut generalement 2 a 3 trimestres pour observer un impact significatif d&apos;un programme d&apos;enablement sur les metriques de resultat.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "85%+", label: "taux d&apos;adoption des contenus enablement (cible)", color: "#FF7A59" },
                      { value: "-35%", label: "reduction du time-to-productivity en moyenne", color: "#4B5EFC" },
                      { value: "+22%", label: "amelioration du win rate apres 6 mois", color: "#22C55E" },
                      { value: "3-6 mois", label: "delai moyen pour observer un ROI mesurable", color: "#6C5CE7" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "Content usage rate : pourcentage de contenus utilises au moins une fois par mois par les commerciaux",
                      "Time-to-first-deal : nombre de jours entre l&apos;arrivee du commercial et son premier deal ferme",
                      "Win rate by stage : taux de conversion a chaque etape du pipeline, pour identifier les goulots d&apos;etranglement",
                      "Average deal size evolution : evolution de la taille moyenne des deals, indicateur d&apos;upsell et de positionnement valeur",
                      "Sales cycle length : duree moyenne du cycle, objectif de reduction par trimestre",
                      "Ramp time : nombre de mois pour atteindre 100% du quota pour les nouvelles recrues",
                      "Quota attainment distribution : pourcentage de commerciaux atteignant leur quota chaque trimestre",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[12px] text-white/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- HubSpot implementation */}
              <section id="hubspot-implementation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Implementer le sales enablement dans HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot Sales Hub offre un socle solide pour les equipes qui veulent lancer leur programme de sales enablement sans multiplier les outils. Les fonctionnalites natives couvrent les besoins essentiels des PME et mid-market, avec l&apos;avantage d&apos;etre nativement integrees au CRM.</p>
                    <p>La premiere brique est les Playbooks. Les playbooks HubSpot sont des guides interactifs que les commerciaux consultent directement depuis la fiche contact ou deal. Ils contiennent les questions de qualification, les scripts d&apos;appel, les objections et reponses, les etapes a suivre. L&apos;avantage par rapport a un document statique est que le commercial peut noter les reponses directement dans le playbook, et ces informations sont automatiquement enregistrees dans le CRM.</p>
                    <p>La deuxieme brique est le Documents tracking. HubSpot permet d&apos;uploader et partager des documents avec les prospects tout en mesurant leur engagement. Le commercial sait exactement quelles pages ont ete lues, combien de temps, et par qui. Cette intelligence permet d&apos;adapter le suivi en fonction de l&apos;interet reel du prospect. Un prospect qui passe 10 minutes sur la page pricing merite un appel different de celui qui n&apos;a pas ouvert le document.</p>
                    <p>La troisieme brique est les Sequences. Les sequences automatisent les cadences de suivi tout en maintenant une personnalisation individuelle. Le commercial inscrit un prospect dans une sequence d&apos;emails et taches, et HubSpot gere automatiquement les envois, les relances et les rappels. Les sequences les plus performantes sont celles qui combinent emails, appels et touchpoints LinkedIn dans une cadence multicanale.</p>
                    <p>La quatrieme brique concerne les Snippets et Templates. Les snippets sont des blocs de texte reutilisables que le commercial insere en quelques clics : descriptions produit, reponses aux objections frequentes, paragraphes de social proof. Les templates sont des emails complets pre-rediges et personalises. L&apos;objectif est d&apos;accelerer la redaction tout en maintenant la qualite et la coherence du message.</p>
                    <p>Enfin, les Conversation Intelligence de HubSpot (disponible en Enterprise) transcrivent et analysent automatiquement les appels commerciaux. Les managers peuvent rechercher par mots-cles, identifier les commerciaux qui parlent trop ou pas assez, mesurer le ratio talk/listen, et reperer les objections les plus frequentes. C&apos;est un outil de coaching extremement puissant directement integre au CRM.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 -- Erreurs courantes */}
              <section id="erreurs-courantes" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 8 erreurs les plus courantes en sales enablement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres avoir accompagne des dizaines d&apos;equipes B2B dans leur strategie d&apos;enablement, nous avons identifie des patterns recurrents d&apos;echec. Connaitre ces erreurs permet de les eviter et d&apos;accelerer la mise en place d&apos;un programme qui fonctionne reellement.</p>
                    <p>La premiere erreur est de confondre sales enablement et content factory. Produire des tonnes de contenus sans strategie ni feedback loop est inutile. Ce qui compte n&apos;est pas le volume mais la pertinence. Mieux vaut 20 contenus utilises quotidiennement que 200 contenus qui prennent la poussiere dans un drive.</p>
                    <p>La deuxieme erreur est d&apos;ignorer les commerciaux dans la creation du programme. Un programme construit en silo par le marketing ou le management sans impliquer les sales sera rejete. Les commerciaux doivent co-construire les playbooks, valider les contenus et participer aux choix d&apos;outils. Leur adhesion est la condition sine qua non du succes.</p>
                    <p>La troisieme erreur est de ne pas mesurer. Sans metriques, impossible de savoir ce qui fonctionne, ce qui doit etre ameliore, et surtout impossible de justifier l&apos;investissement aupres de la direction. Chaque initiative d&apos;enablement doit avoir un objectif mesurable et un timeline de mesure.</p>
                    <p>La quatrieme erreur est de sous-estimer le change management. Introduire de nouveaux outils, processus et contenus dans le quotidien des commerciaux est un changement significatif. Sans accompagnement, formation et communication, le taux d&apos;adoption sera faible. Les programmes les plus reussis prevoient un plan de change management aussi detaille que le plan d&apos;enablement lui-meme.</p>
                    <p>La cinquieme erreur est de lancer trop de choses en meme temps. Un nouveau CRM, une plateforme de contenu, un programme de coaching et un nouvel onboarding, le tout en simultanee, est une recette pour l&apos;echec. Il faut prioriser, commencer par les quick wins visibles, et etendre progressivement.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { erreur: "Content factory sans strategie", impact: "Critique", desc: "Produire du contenu en masse sans mesurer l&apos;usage ni l&apos;impact. Les commerciaux se noient et n&apos;utilisent rien.", color: "#FF7A59" },
                      { erreur: "Programme top-down sans les sales", impact: "Critique", desc: "Construire le programme en silo. Les commerciaux rejettent ce qu&apos;ils n&apos;ont pas co-construit.", color: "#FF7A59" },
                      { erreur: "Pas de metriques d&apos;impact", impact: "Eleve", desc: "Impossible de prouver le ROI. Le programme perd son budget au prochain cycle budgetaire.", color: "#6C5CE7" },
                      { erreur: "Ignorer le change management", impact: "Eleve", desc: "Les outils sont deployes mais pas adoptes. Les processus existent mais ne sont pas suivis.", color: "#6C5CE7" },
                      { erreur: "Big bang plutot que progressif", impact: "Modere", desc: "Tout lancer en meme temps surcharge les equipes. L&apos;adoption chute, la frustration monte.", color: "#4B5EFC" },
                      { erreur: "Confondre coaching et pipeline review", impact: "Modere", desc: "Les sessions de coaching deviennent des interrogatoires sur les deals. Le developpement est sacrifie.", color: "#4B5EFC" },
                      { erreur: "Ne pas impliquer le marketing", impact: "Eleve", desc: "Le contenu enablement est cree en doublon ou en contradiction avec le contenu marketing.", color: "#6C5CE7" },
                      { erreur: "Outils sans processus", impact: "Critique", desc: "Acheter Seismic ou Gong sans definir les workflows. Outil sous-utilise, ROI negatif.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.erreur} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.erreur}</p>
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.impact}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 -- Business case */}
              <section id="business-case" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Construire le business case du sales enablement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Convaincre la direction d&apos;investir dans le sales enablement necessite un business case solide, chiffre et realiste. Les arguments emotionnels (&ldquo;les commerciaux en ont besoin&rdquo;) ne suffisent pas. Il faut demontrer un impact financier clair et un retour sur investissement mesurable.</p>
                    <p>Le point de depart est de quantifier le cout du statu quo. Combien de temps les commerciaux passent a chercher du contenu au lieu de vendre ? Selon Forrester, un commercial passe en moyenne 30% de son temps a chercher ou creer du contenu. Sur un salaire charge de 80 000 euros, cela represente 24 000 euros par commercial et par an. Pour une equipe de 10 commerciaux, c&apos;est 240 000 euros de temps non productif.</p>
                    <p>Le deuxieme angle est le cout du ramp-up. Si vos nouveaux commerciaux mettent 9 mois a atteindre leur quota et qu&apos;un programme d&apos;enablement peut reduire ce delai a 5 mois, le gain est de 4 mois de productivite par recrue. Avec un quota annuel de 500 000 euros, 4 mois representent environ 167 000 euros de pipeline supplementaire par commercial recrute.</p>
                    <p>Le troisieme angle est l&apos;amelioration du win rate. Si votre taux de closing actuel est de 20% et qu&apos;un programme d&apos;enablement l&apos;ameliore de 5 points (un objectif conservateur), l&apos;impact sur le revenu est direct. Sur 100 opportunites a 50 000 euros de valeur moyenne, passer de 20% a 25% de win rate genere 250 000 euros de revenu supplementaire.</p>
                    <p>Le quatrieme angle est la retention des talents. Le turnover des commerciaux coute extremement cher : entre 150% et 200% du salaire annuel selon les etudes. Un programme d&apos;enablement qui integre du coaching, de la formation continue et un onboarding structure reduit le turnover de 15 a 20%. Sur une equipe de 20 commerciaux avec un turnover annuel de 25%, cela represente 1 a 2 departs evites par an, soit une economie de 120 000 a 160 000 euros.</p>
                    <p>Pour presenter le business case a la direction, structurez-le ainsi : investissement total (outils, personnel, formation), gains projetes (productivite, win rate, ramp-up, retention), timeline de ROI (generalement 6-9 mois pour le breakeven), et plan de mesure (quels KPIs seront suivis, a quelle frequence, par qui). Ajoutez des benchmarks sectoriels et des etudes de cas comparables pour credibiliser les projections.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E8E8E8]">
                      <span className="text-[12px] font-semibold text-[#111]">Simulation ROI -- Equipe de 10 commerciaux</span>
                    </div>
                    <div className="p-4 space-y-3">
                      {[
                        { ligne: "Temps recupere (recherche contenu)", calcul: "10 x 24 000 EUR", valeur: "240 000 EUR/an", color: "#FF7A59" },
                        { ligne: "Ramp-up accelere (2 recrues/an)", calcul: "2 x 167 000 EUR", valeur: "334 000 EUR/an", color: "#4B5EFC" },
                        { ligne: "Win rate +5 points", calcul: "100 deals x 50K x 5%", valeur: "250 000 EUR/an", color: "#6C5CE7" },
                        { ligne: "Retention (-1 depart/an)", calcul: "1 x 120 000 EUR", valeur: "120 000 EUR/an", color: "#22C55E" },
                      ].map((item) => (
                        <div key={item.ligne} className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                            <div>
                              <p className="text-[11px] font-semibold text-[#111]">{item.ligne}</p>
                              <p className="text-[10px] text-[#999]">{item.calcul}</p>
                            </div>
                          </div>
                          <span className="text-[12px] font-semibold" style={{ color: item.color }}>{item.valeur}</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-[#111] text-white">
                        <span className="text-[11px] font-semibold">Impact total estime</span>
                        <span className="text-[14px] font-bold text-[#FF7A59]">944 000 EUR/an</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related articles */}
              <section className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[14px] font-semibold text-[#111] mb-4">Articles lies</h2>
                  <div className="space-y-2">
                    {relatedArticles.map((a) => (
                      <Link key={a.slug} href={`/blog/${a.slug}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAFA] transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: a.color }} />
                          <span className="text-[13px] font-medium text-[#111] group-hover:text-[#444] transition-colors">{a.title}</span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-[#DDD] group-hover:text-[#999] group-hover:translate-x-0.5 transition-all"><path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section>
                <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a lancer votre programme de sales enablement ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On vous accompagne de la strategie a l&apos;implementation : audit, playbooks, configuration HubSpot, onboarding et coaching. Premiers resultats mesurables en 90 jours.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />Reserver un appel decouverte
                  </a>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
