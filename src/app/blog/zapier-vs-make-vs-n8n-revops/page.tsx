"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Zapier vs Make vs n8n : quel outil d'automatisation pour le RevOps",
  description: "Comparatif complet Zapier vs Make vs n8n pour le RevOps. Pricing, facilite d'usage, integration HubSpot, workflows complexes, gestion d'erreurs, self-hosted vs cloud, verdict par cas d'usage.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/zapier-vs-make-vs-n8n-revops" },
  articleSection: "Process & Outils",
  wordCount: 3500,
  inLanguage: "fr",
};

const sections = [
  { id: "intro-automatisation", title: "Pourquoi automatiser" },
  { id: "zapier-overview", title: "Zapier" },
  { id: "make-overview", title: "Make" },
  { id: "n8n-overview", title: "n8n" },
  { id: "pricing-comparaison", title: "Comparaison pricing" },
  { id: "hubspot-integration", title: "Integration HubSpot" },
  { id: "workflow-complexity", title: "Complexite des workflows" },
  { id: "error-handling", title: "Gestion des erreurs" },
  { id: "performance", title: "Performance et fiabilite" },
  { id: "quel-outil-pour-qui", title: "Pour qui quel outil" },
  { id: "recommandation", title: "Notre recommandation" },
];

const relatedArticles = [
  { title: "Stack technologique RevOps 2026", slug: "stack-technologique-revops-2026", category: "Process & Outils", color: "#6C5CE7" },
  { title: "9 actions commerciales a automatiser dans HubSpot", slug: "9-actions-commerciales-automatiser-hubspot", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Marketing automation : 7 workflows HubSpot essentiels", slug: "marketing-automation-7-workflows-hubspot", category: "CRM & HubSpot", color: "#4B5EFC" },
];

export default function ZapierVsMakeVsN8nRevOpsPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("intro-automatisation");

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
        <div className="h-full bg-[#6C5CE7] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "22%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "60%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />

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
                        ? "border-[#6C5CE7] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Zapier%20vs%20Make%20vs%20n8n%20pour%20le%20RevOps&url=https://ceres.agency/blog/zapier-vs-make-vs-n8n-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/zapier-vs-make-vs-n8n-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Zapier vs Make vs n8n</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Process &amp; Outils</Badge>
                <span className="text-[11px] text-[#CCC]">18 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Zapier vs Make vs n8n : quel outil d&apos;automatisation pour le RevOps
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Les outils d&apos;automatisation sont la colonne vertebrale du RevOps moderne. Zapier, Make (ex-Integromat) et n8n sont les trois options dominantes en 2026, chacune avec ses forces et ses limites. Ce guide les compare sur tous les criteres qui comptent pour une equipe RevOps : pricing, integrations HubSpot, complexite des workflows, gestion d&apos;erreurs, performance et cas d&apos;usage concrets. Avec un verdict clair par profil.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>26 mars 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 -- Intro */}
              <section id="intro-automatisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi l&apos;automatisation est indispensable en RevOps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le RevOps repose sur l&apos;interconnexion fluide entre le CRM, les outils marketing, les plateformes de communication, les systemes de facturation et des dizaines d&apos;autres applications. Sans automatisation, ces connexions necessitent des interventions manuelles repetitives, couteuses en temps et sujettes aux erreurs. Un seul lead qui n&apos;est pas route correctement, un seul deal qui n&apos;est pas synchronise avec la facturation, et c&apos;est du revenu perdu.</p>
                    <p>Les outils d&apos;automatisation no-code/low-code resolvent ce probleme en permettant de creer des &ldquo;workflows&rdquo; qui connectent les applications entre elles et executent des sequences d&apos;actions automatiquement. Quand un formulaire est soumis dans HubSpot, le lead est enrichi dans Clearbit, un message est envoye dans Slack, une tache est creee dans Asana, et un email de bienvenue est envoye. Le tout sans une seule ligne de code.</p>
                    <p>En 2026, trois plateformes dominent le marche : Zapier (le pionnier, le plus simple), Make (le challenger, le plus visuel et puissant), et n8n (l&apos;alternative open source, la plus flexible). Chacune a ete construite avec une philosophie differente, et le choix optimal depend de vos besoins specifiques en termes de complexite, budget, volume et competences techniques.</p>
                    <p>Nous utilisons les trois chez Ceres selon les contextes clients, et nous avons une vision pragmatique de leurs forces et faiblesses respectives. Ce guide partage notre experience de terrain, pas une compilation de fiches techniques. L&apos;objectif est de vous aider a faire le choix le plus adapte a votre situation, sans dogmatisme ni parti pris.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "7 000+", label: "applications supportees par Zapier, le plus large catalogue", color: "#FF7A59" },
                      { value: "2 000+", label: "integrations natives Make, le challenger en croissance rapide", color: "#6C5CE7" },
                      { value: "400+", label: "noeuds natifs n8n, compensees par HTTP et code custom", color: "#22C55E" },
                      { value: "3-5x", label: "difference de cout entre Zapier et Make a volume egal", color: "#4B5EFC" },
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

              {/* Section 2 -- Zapier */}
              <section id="zapier-overview" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Zapier : le pionnier accessible</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Zapier est le leader historique de l&apos;automatisation no-code, fonde en 2011. Avec 7 000 applications supportees, c&apos;est la plateforme qui offre le plus grand catalogue d&apos;integrations. Sa force principale est la simplicite : n&apos;importe qui dans l&apos;equipe peut creer un &ldquo;Zap&rdquo; (un workflow) en quelques minutes sans formation technique.</p>
                    <p>L&apos;architecture de Zapier est lineaire : un trigger (declencheur) suivi d&apos;une sequence d&apos;actions. Cette linearite est a la fois sa force (simplicite) et sa limite (difficulte a gerer les workflows complexes avec des branches conditionnelles, des boucles ou des transformations de donnees avancees). Zapier a ajoute les Paths (branches), les Filters et les Formatters, mais cela reste moins intuitif que chez Make.</p>
                    <p>Pour le RevOps, Zapier excelle sur les automatisations simples a moyennes : synchronisation de contacts entre HubSpot et un outil tiers, notification Slack quand un deal change d&apos;etape, creation de tache dans un project management quand un ticket est ouvert, envoi de donnees vers Google Sheets pour du reporting. C&apos;est l&apos;outil ideal pour les quick wins d&apos;automatisation qui ne necessitent pas de logique complexe.</p>
                    <p>Les limites de Zapier apparaissent sur les workflows avances. La gestion des erreurs est basique (retry automatique mais peu de controle). Les transformations de donnees sont limitees (le Formatter est correct mais pas comparable a un vrai ETL). Et surtout, le modele de pricing base sur les &ldquo;tasks&rdquo; (actions executees) peut devenir tres couteux a volume eleve. Un seul workflow qui s&apos;execute 1 000 fois par jour avec 5 etapes consomme 5 000 tasks par jour, soit 150 000 par mois.</p>
                    <p>En 2026, Zapier a ajoute des fonctionnalites IA (Zapier Central) qui permettent de creer des automatisations en langage naturel et d&apos;utiliser des modeles LLM dans les workflows. C&apos;est prometteur mais encore en maturation. L&apos;interface reste la plus accessible du marche, et c&apos;est ce qui fait la force de Zapier : la barriere d&apos;entree est quasi nulle.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "Plus de 7 000 applications supportees, le catalogue le plus large du marche",
                      "Interface drag-and-drop accessible a tout profil non technique en quelques minutes",
                      "Paths et Filters pour les branches conditionnelles basiques",
                      "Zapier Tables pour le stockage de donnees intermediaires sans outil tiers",
                      "Zapier Central (IA) pour creer des automations en langage naturel",
                      "Limite : pricing a la task qui peut exploser a volume eleve, logique lineaire restrictive",
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

              {/* Section 3 -- Make */}
              <section id="make-overview" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Make : la puissance visuelle</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Make (anciennement Integromat) est le challenger qui a conquis les equipes RevOps avancees grace a son interface visuelle et sa puissance de traitement. Fonde a Prague en 2012, il s&apos;est positionne comme l&apos;alternative plus puissante et plus abordable a Zapier, et il a largement reussi son pari.</p>
                    <p>L&apos;architecture de Make est fondamentalement differente de Zapier. Au lieu d&apos;une sequence lineaire, Make propose un canvas visuel ou les modules (actions) sont connectes par des liens, formant un graphe. Cela permet naturellement les branches, les boucles, les fusions de donnees, les traitements paralleles et les aggregations. Pour un workflow qui doit, par exemple, enrichir un contact, verifier s&apos;il existe deja dans le CRM, le creer ou le mettre a jour selon le cas, puis router vers differentes actions selon le segment, Make est nettement superieur a Zapier.</p>
                    <p>Le pricing de Make est base sur les &ldquo;operations&rdquo; (equivalent des tasks Zapier) mais avec un avantage majeur : les operations sont significativement moins cheres. Un plan a 9$/mois offre 10 000 operations, la ou Zapier demande 20$/mois pour 750 tasks. A volume equivalent, Make est typiquement 3 a 5 fois moins cher que Zapier.</p>
                    <p>Les capacites de transformation de donnees sont superieures. Make integre des fonctions JSON, des operations sur les tableaux, du mapping avance, des regex et des modules HTTP generiques qui permettent de se connecter a n&apos;importe quelle API, meme sans integration native. Pour les equipes RevOps qui manipulent des donnees complexes entre systemes, c&apos;est un avantage decisif.</p>
                    <p>La contrepartie est une courbe d&apos;apprentissage plus raide. L&apos;interface visuelle est puissante mais peut intimider les debutants. La documentation est complete mais technique. Il faut compter 1 a 2 semaines de prise en main pour un utilisateur non technique, contre quelques heures pour Zapier. C&apos;est un investissement qui se rentabilise rapidement pour quiconque cree regulierement des automatisations.</p>
                    <p>Make propose egalement des fonctionnalites avancees qui en font un outil de niveau professionnel : les Data Stores (bases de donnees internes pour stocker des etats entre executions), les aggregateurs et iterateurs pour traiter des listes, les modules de transformation JSON, les templates reutilisables, et un systeme de versions qui permet de revenir a un etat precedent du scenario. Pour les equipes RevOps, les Data Stores sont particulierement utiles pour gerer les etats de synchronisation entre CRM et outils tiers.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "Canvas visuel : workflows complexes avec branches, boucles et fusions lisibles d&apos;un coup d&apos;oeil",
                      "2 000+ integrations natives dont HubSpot avance (custom objects, associations, engagements)",
                      "Data Stores : bases de donnees internes pour gerer les etats et les caches entre executions",
                      "Pricing avantageux : 3 a 5 fois moins cher que Zapier a volume equivalent d&apos;operations",
                      "Gestion des erreurs granulaire : error handlers par module, routes alternatives, retry configurable",
                      "Limite : courbe d&apos;apprentissage de 1-2 semaines pour un profil non technique",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[12px] text-[#555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- n8n */}
              <section id="n8n-overview" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">n8n : la flexibilite open source</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>n8n (prononce &ldquo;nodemation&rdquo;) est la troisieme voie : un outil d&apos;automatisation open source qui peut etre self-hosted (heberge sur vos propres serveurs) ou utilise en cloud. Fonde en Allemagne en 2019, il a rapidement gagne une communaute passionnee grace a sa flexibilite technique et son modele gratuit en self-hosted.</p>
                    <p>La proposition de valeur de n8n est triple. Premierement, le self-hosting : vous pouvez installer n8n sur votre propre infrastructure (serveur, VPS, Docker) et l&apos;utiliser sans limite d&apos;executions ni de workflows. Les donnees ne quittent jamais vos serveurs, ce qui est un argument decisif pour les entreprises soumises a des contraintes de conformite ou de souverainete des donnees.</p>
                    <p>Deuxiemement, la flexibilite technique. n8n permet d&apos;executer du code JavaScript ou Python directement dans les workflows, ce qui ouvre des possibilites illimitees de transformation et de logique. Pour les equipes avec des developpeurs ou des profils techniques, c&apos;est un atout majeur. Vous n&apos;etes jamais limite par les fonctionnalites natives : si une integration n&apos;existe pas, vous la construisez via l&apos;API.</p>
                    <p>Troisiemement, le cout. En self-hosted, n8n est gratuit (seul le cout de l&apos;hebergement s&apos;applique, typiquement 5 a 20 euros par mois pour un VPS). En cloud, n8n propose des plans competitifs avec des limites d&apos;executions genereuses. C&apos;est l&apos;option la plus economique pour les equipes qui ont le volume et les competences techniques pour le deployer.</p>
                    <p>Les limites de n8n sont le revers de ses forces. Le self-hosting necessite des competences d&apos;administration systeme : deploiement Docker, mises a jour, monitoring, sauvegardes. L&apos;interface est fonctionnelle mais moins polie que Make. Le catalogue d&apos;integrations natives est plus restreint (400 vs 2 000 pour Make et 7 000 pour Zapier), compense par les modules HTTP et le code custom. Et le support communautaire est excellent mais le support professionnel est reserve aux plans cloud.</p>
                    <p>Un avantage souvent sous-estime de n8n est sa communaute open source. Les templates de workflows sont partages librement, les noeuds custom sont developpes par la communaute, et les problemes sont resolus rapidement sur le forum et Discord. Pour les entreprises europeennes soucieuses de la souverainete des donnees et du RGPD, le fait que n8n soit une societe allemande qui propose le self-hosting est un argument regulatoire fort que ni Zapier ni Make ne peuvent offrir.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Pricing comparison -- DARK SECTION */}
              <section id="pricing-comparaison" className="mb-8">
                <div className="rounded-2xl bg-[#111] text-white p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Comparaison pricing : le cout reel de l&apos;automatisation</h2>
                  <div className="space-y-3 text-[13px] text-white/70 leading-[1.75]">
                    <p>Le pricing est souvent le facteur determinant dans le choix d&apos;un outil d&apos;automatisation. Les modeles sont differents entre les trois plateformes, ce qui rend la comparaison directe complexe. Voici une analyse basee sur un cas d&apos;usage RevOps typique : 50 workflows actifs, 100 000 executions mensuelles, 3 utilisateurs.</p>
                    <p>Zapier facture par &ldquo;tasks&rdquo; (chaque action dans un workflow est une task). Le plan Professional a 49$/mois inclut 2 000 tasks. Pour 100 000 tasks mensuelles, vous etes sur le plan Team a 399$/mois (avec 50 000 tasks), voire le plan Company pour les volumes superieurs. Le cout peut rapidement exploser avec les workflows a etapes multiples.</p>
                    <p>Make facture par &ldquo;operations&rdquo;, concept similaire aux tasks mais moins cher. Le plan Pro a 16$/mois inclut 10 000 operations. Pour 100 000 operations, le plan Teams a 34$/mois est suffisant avec 10 000 operations par scenario. En realite, Make est 3 a 5 fois moins cher que Zapier a volume equivalent, ce qui est son argument commercial principal.</p>
                    <p>n8n en self-hosted est gratuit, sans limite d&apos;executions. Le seul cout est l&apos;hebergement (5-20 EUR/mois pour un VPS) et le temps d&apos;administration. En cloud, n8n propose un plan Starter a 20$/mois avec 2 500 executions, et un plan Pro a 50$/mois avec des limites plus genereuses. Pour les tres gros volumes, le self-hosted est imbattable economiquement.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { outil: "Zapier", cout: "399-799$/mois", detail: "100K tasks, plan Team/Company. Cout eleve mais simple a budgetiser.", color: "#FF7A59" },
                      { outil: "Make", cout: "34-99$/mois", detail: "100K operations, plan Teams. 3-5x moins cher que Zapier a volume egal.", color: "#6C5CE7" },
                      { outil: "n8n", cout: "5-20$/mois (self-hosted)", detail: "Illimite en self-hosted. Cout = hebergement + temps admin seulement.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.outil} className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-white">{item.outil}</p>
                          <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.cout}</span>
                        </div>
                        <p className="text-[11px] text-white/40 leading-[1.6]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- HubSpot integration */}
              <section id="hubspot-integration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Integration HubSpot : le comparatif</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pour une equipe RevOps qui utilise HubSpot comme CRM, la qualite de l&apos;integration est un critere majeur. Les trois plateformes supportent HubSpot, mais avec des niveaux de profondeur tres differents.</p>
                    <p>Zapier offre l&apos;integration HubSpot la plus basique des trois. Les triggers et actions couvrent les objets principaux (contacts, companies, deals, tickets) mais manquent de granularite sur les objets custom, les associations et les proprietes calculees. La synchronisation est en temps reel grace aux webhooks. Pour les automatisations simples (quand un deal passe en &ldquo;Closed Won&rdquo;, creer une tache dans Asana), Zapier fait le travail.</p>
                    <p>Make propose une integration HubSpot nettement plus riche. Elle couvre les objets custom, les associations, les pipelines, les workflows, les owners, les engagements (emails, notes, calls), les produits et les line items. La capacite a manipuler les associations entre objets et a acceder aux proprietes de maniere granulaire fait de Make le meilleur choix pour les automatisations HubSpot complexes.</p>
                    <p>n8n offre une integration HubSpot correcte mais moins complete que Make. Les objets standards sont bien couverts, mais l&apos;acces aux objets custom et aux fonctionnalites avancees necessite parfois de passer par des appels HTTP directs a l&apos;API HubSpot. Ce n&apos;est pas un obstacle pour les profils techniques, mais cela ajoute du temps de configuration.</p>
                    <p>Notre experience terrain : pour les equipes HubSpot qui font du RevOps avance (custom objects, scoring complexe, multi-pipeline), Make est clairement superieur. Pour les equipes qui ont des besoins simples, Zapier suffit. Pour les equipes avec un developpeur dedi, n8n offre la flexibilite maximale via l&apos;API directe.</p>
                    <p>Un point technique important : la gestion des associations HubSpot est critique en RevOps. Quand vous creez un deal, vous devez l&apos;associer a un contact et une entreprise. Quand vous ajoutez un line item, vous devez l&apos;associer au deal. Ces associations multi-niveaux sont gerees nativement dans Make, necessitent des etapes supplementaires dans Zapier, et fonctionnent via l&apos;API dans n8n. Pour les workflows qui manipulent le pipeline commercial, cette difference est determinante.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { outil: "Zapier", score: "6/10", detail: "Objets standards, triggers basiques, pas de custom objects natifs", color: "#FF7A59" },
                      { outil: "Make", score: "9/10", detail: "Custom objects, associations, engagements, produits, line items", color: "#6C5CE7" },
                      { outil: "n8n", score: "7/10", detail: "Standards corrects, custom via API HTTP, flexibilite code", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.outil} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.outil}</p>
                          <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.score}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- Workflow complexity */}
              <section id="workflow-complexity" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Complexite des workflows : ou chaque outil excelle</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les workflows RevOps ne sont pas tous egaux en complexite. Un simple &ldquo;quand un formulaire est soumis, envoyer un Slack&rdquo; est different d&apos;un workflow qui enrichit un contact, le score, le route vers le bon commercial selon le territoire, cree une opportunite si le score est suffisant, et envoie une sequence personnalisee. Le choix de l&apos;outil doit correspondre a la complexite de vos besoins.</p>
                    <p>Zapier excelle sur les workflows simples a moyens : 2 a 5 etapes, logique lineaire avec eventuellement un ou deux filtres. Des que vous avez besoin de branches multiples, de boucles sur des listes, ou de transformations de donnees complexes, Zapier devient maladroit. Les Paths permettent des branches mais la lisibilite se degrade rapidement au-dela de 3 niveaux.</p>
                    <p>Make est superieur sur les workflows moyens a complexes. Le canvas visuel rend les branches, les boucles et les aggregations naturelles et lisibles. Un workflow de 20 modules avec des routes conditionnelles, des iterateurs sur des listes, et des aggregations de resultats reste comprehensible visuellement dans Make. Dans Zapier, le meme workflow serait soit impossible soit illisible.</p>
                    <p>n8n est le champion des workflows techniques. La possibilite d&apos;executer du code JavaScript ou Python dans les noeuds ouvre des possibilites illimitees : parsing de données complexes, transformations custom, logique metier avancee, integration avec des APIs exotiques. Pour les equipes qui ont un profil technique dans l&apos;equipe RevOps, n8n offre le meilleur ratio flexibilite/complexite.</p>
                    <p>Un exemple concret de workflow RevOps complexe : quand un formulaire HubSpot est soumis, (1) verifier si le contact existe deja, (2) si oui le mettre a jour sinon le creer, (3) enrichir via Clearbit, (4) calculer un score base sur le firmographique et le comportemental, (5) si le score depasse 80 router vers le bon commercial via round-robin selon le territoire, (6) creer une opportunite, (7) envoyer un Slack au commercial, (8) demarrer une sequence HubSpot. Ce workflow est faisable dans les trois outils mais incomparablement plus simple et maintenable dans Make ou n8n.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "Synchronisation bi-directionnelle HubSpot-ERP : mapping de proprietes, gestion des conflits, batch vs temps reel",
                      "Enrichissement automatique a la creation : Clearbit + Dropcontact + verification email en cascade",
                      "Routage multi-criteres : territoire, taille d&apos;entreprise, langue, segment, round-robin pondere",
                      "Alerting multi-canal : Slack + email + SMS selon la priorite et le type de notification",
                      "Reporting automatise : extraction HubSpot, transformation, envoi dans Google Sheets ou Looker a J+1",
                      "Onboarding automatise : creation de projets, assignation de taches, envoi de sequences selon le plan achete",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[12px] text-[#555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- Error handling */}
              <section id="error-handling" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Gestion des erreurs : la fiabilite au quotidien</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La gestion des erreurs est un critere souvent neglige dans le choix d&apos;un outil d&apos;automatisation, mais c&apos;est probablement le plus important pour les operations quotidiennes. Un workflow qui echoue silencieusement est pire qu&apos;un workflow qui n&apos;existe pas : il cree une fausse impression de fonctionnement pendant que les donnees se desynchronisent.</p>
                    <p>Zapier offre une gestion des erreurs basique. En cas d&apos;echec, le Zap est automatiquement desactive apres 3 erreurs consecutives, et vous recevez un email. Le replay (re-execution) est possible manuellement. Il n&apos;y a pas de gestion conditionnelle des erreurs (faire A si erreur, B si succes). C&apos;est suffisant pour les automatisations simples mais insuffisant pour les workflows critiques.</p>
                    <p>Make propose une gestion des erreurs sophistiquee. Chaque module peut avoir un error handler dedie : ignorer l&apos;erreur, retenter, basculer vers un chemin alternatif, ou stopper le scenario. Les routes d&apos;erreur permettent de gerer gracieusement les cas d&apos;exception : si l&apos;enrichissement echoue, continuer avec les donnees existantes ; si la creation dans le CRM echoue, loguer l&apos;erreur dans un Google Sheet pour traitement manuel. Cette granularite est essentielle pour les workflows RevOps critiques.</p>
                    <p>n8n offre egalement une gestion des erreurs avancee. Les workflows peuvent inclure des noeuds d&apos;erreur, des try/catch via le code, et des notifications personnalisees. En self-hosted, vous avez un controle total sur les logs, le monitoring et les alertes. La combinaison avec des outils comme Sentry ou Datadog permet un monitoring de niveau production.</p>
                    <p>Notre recommandation : pour tout workflow qui impacte le revenu (routage de leads, synchronisation CRM-facturation, enrichissement de pipeline), la gestion des erreurs est non negociable. Make et n8n sont nettement superieurs a Zapier sur ce point. Le cout de quelques leads perdus a cause d&apos;un workflow qui echoue silencieusement depasse largement le cout de la plateforme.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { outil: "Zapier", score: "5/10", features: "Retry auto (3x), desactivation apres 3 echecs, email d&apos;alerte, replay manuel", color: "#FF7A59" },
                      { outil: "Make", score: "9/10", features: "Error handlers par module, routes d&apos;erreur, retry configurable, break/rollback, logs detailles", color: "#6C5CE7" },
                      { outil: "n8n", score: "8/10", features: "Try/catch en code, error triggers, retry configurable, logs custom, integration monitoring", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.outil} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.outil}</p>
                          <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.score}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.features}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 -- Performance */}
              <section id="performance" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Performance et fiabilite</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La performance d&apos;un outil d&apos;automatisation se mesure sur trois axes : le temps d&apos;execution des workflows, le throughput (nombre d&apos;executions paralleles) et l&apos;uptime (disponibilite du service).</p>
                    <p>Zapier a historiquement eu des problemes de latence sur les triggers. Les Zaps bases sur du polling (verification periodique) peuvent avoir un delai de 1 a 15 minutes entre le declencheur et l&apos;execution. Les webhooks instantanes sont disponibles pour certaines integrations mais pas toutes. L&apos;uptime est excellent (99.9%+), et les executions sont fiables une fois declenchees.</p>
                    <p>Make offre des performances superieures en termes de vitesse d&apos;execution. Les scenarios s&apos;executent generalement en quelques secondes, et les webhooks instantanes sont supportes nativement. Le throughput est ajustable selon le plan, avec la possibilite d&apos;executer plusieurs scenarios en parallele. L&apos;uptime est comparable a Zapier.</p>
                    <p>n8n en self-hosted depasse les deux sur la performance brute. Pas de limite de throughput autre que les ressources de votre serveur. Pas de latence liee a une infrastructure partagee. Les workflows complexes s&apos;executent plus rapidement car les donnees ne transitent pas par un tiers. La contrepartie est que la fiabilite depend de votre infrastructure : si votre serveur tombe, vos automatisations s&apos;arretent. Un monitoring serieux est indispensable.</p>
                    <p>Pour les equipes RevOps qui traitent des volumes importants (plusieurs milliers d&apos;executions par jour) ou qui ont des exigences de latence (routage de leads en temps reel), Make et n8n sont preferables a Zapier. Pour les volumes modestes avec des besoins de fiabilite sans maintenance, Zapier et Make cloud sont equivalents.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { critere: "Latence trigger", zapier: "1-15 min (polling)", make: "Instantane (webhook)", n8n: "Instantane (webhook)", winner: "Make / n8n" },
                      { critere: "Throughput", zapier: "Limite par plan", make: "Ajustable par plan", n8n: "Illimite (self-hosted)", winner: "n8n" },
                      { critere: "Uptime", zapier: "99.9%+", make: "99.9%+", n8n: "Depend de l&apos;infra", winner: "Zapier / Make" },
                    ].map((item) => (
                      <div key={item.critere} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <p className="text-[12px] font-semibold text-[#111] mb-2">{item.critere}</p>
                        <div className="space-y-1 text-[10px] text-[#777]">
                          <p>Zapier : {item.zapier}</p>
                          <p>Make : {item.make}</p>
                          <p>n8n : {item.n8n}</p>
                        </div>
                        <p className="text-[10px] font-semibold text-[#6C5CE7] mt-2">Avantage : {item.winner}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 -- Pour qui quel outil */}
              <section id="quel-outil-pour-qui" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pour qui quel outil : le verdict par profil</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres avoir utilise les trois outils sur des dizaines de projets RevOps, voici notre verdict par profil d&apos;entreprise.</p>
                    <p>Choisissez Zapier si : vous debutez l&apos;automatisation, votre equipe n&apos;a aucun profil technique, vos besoins sont simples (moins de 20 workflows), vous valorisez la rapidite de mise en place au-dessus de tout, et votre budget n&apos;est pas contraint. Zapier est le meilleur choix pour les equipes qui veulent des resultats immediats sans investissement d&apos;apprentissage.</p>
                    <p>Choisissez Make si : vous avez des workflows moyens a complexes, vous voulez le meilleur rapport qualite/prix, votre equipe a un minimum de sensibilite technique, vous utilisez HubSpot avec des objets custom, et vous avez besoin d&apos;une gestion des erreurs robuste. Make est notre recommandation par defaut pour les equipes RevOps B2B. Il offre le meilleur equilibre entre puissance, accessibilite et cout.</p>
                    <p>Choisissez n8n si : vous avez un developpeur dans l&apos;equipe ou des competences DevOps, vous avez des contraintes de souverainete des donnees (self-hosting), votre volume d&apos;executions est tres eleve, vous avez besoin de logique metier custom en code, ou vous voulez minimiser les couts a long terme. n8n est le meilleur choix pour les equipes techniques qui veulent un controle total.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { outil: "Zapier", profil: "Non technique, debutant", usages: "Quick wins, workflows simples, equipes petites, mise en place rapide", verdict: "Ideal pour commencer", color: "#FF7A59" },
                      { outil: "Make", profil: "RevOps structure", usages: "Workflows complexes, HubSpot avance, gestion d&apos;erreurs, rapport qualite/prix", verdict: "Notre recommandation", color: "#6C5CE7" },
                      { outil: "n8n", profil: "Technique, DevOps", usages: "Code custom, self-hosted, gros volumes, souverainete donnees", verdict: "Maximum de controle", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.outil} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.outil}</p>
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.profil}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{item.usages}</p>
                        <p className="text-[10px] font-semibold" style={{ color: item.color }}>{item.verdict}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 11 -- Recommandation */}
              <section id="recommandation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Notre recommandation pour les equipes RevOps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chez Ceres, nous avons deploye des centaines de workflows d&apos;automatisation pour nos clients RevOps. Notre outil par defaut est Make, pour trois raisons principales.</p>
                    <p>Premierement, le rapport puissance/accessibilite est imbattable. Make est suffisamment puissant pour gerer les workflows RevOps les plus complexes (enrichissement, scoring, routage multi-criteres, synchronisation CRM-facturation) tout en restant accessible a un profil Marketing Ops ou Sales Ops sans background developpeur. La courbe d&apos;apprentissage est raisonnable et l&apos;investissement se rentabilise des la premiere semaine.</p>
                    <p>Deuxiemement, l&apos;integration HubSpot est la meilleure du marche. Les equipes RevOps qui utilisent HubSpot avec des custom objects, des associations complexes et des multi-pipelines trouvent dans Make un partenaire qui parle le meme langage. Les scenarios que nous construisons pour nos clients tirent pleinement parti des capacites avancees de HubSpot, ce qui est rarement possible avec Zapier.</p>
                    <p>Troisiemement, le cout est significativement inferieur a Zapier pour un resultat superieur. Sur un perimetre RevOps typique (50-100 workflows, 100 000 executions mensuelles), Make coute 3 a 5 fois moins cher que Zapier. A l&apos;echelle d&apos;une annee, c&apos;est une economie de plusieurs milliers d&apos;euros qui peut etre reinvestie dans d&apos;autres initiatives.</p>
                    <p>Nous utilisons n8n pour les cas specifiques qui le justifient : clients avec des exigences de souverainete des donnees, volumes d&apos;executions extremement eleves, ou logique metier custom qui necessite du code. Et nous recommandons Zapier pour les equipes tres petites, non techniques, qui ont besoin de 5-10 automatisations simples et qui valorisent la mise en place instantanee.</p>
                    <p>Le conseil le plus important : ne choisissez pas votre outil d&apos;automatisation en fonction de la mode ou du marketing. Choisissez-le en fonction de vos besoins reels, de vos competences internes et de votre trajectoire de croissance. L&apos;outil que vous choisissez aujourd&apos;hui doit encore fonctionner quand votre volume aura triple dans 18 mois.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E8E8E8]">
                      <span className="text-[12px] font-semibold text-[#111]">Grille de decision rapide</span>
                    </div>
                    <div className="p-4 space-y-3">
                      {[
                        { critere: "Budget serre, gros volume", reponse: "n8n self-hosted : illimite pour le cout d&apos;un VPS", color: "#22C55E" },
                        { critere: "Equipe non technique, besoins simples", reponse: "Zapier : prise en main instantanee, catalogue immense", color: "#FF7A59" },
                        { critere: "Workflows complexes, HubSpot avance", reponse: "Make : meilleur rapport puissance/accessibilite du marche", color: "#6C5CE7" },
                        { critere: "Souverainete des donnees obligatoire", reponse: "n8n self-hosted : donnees sur vos serveurs, controle total", color: "#22C55E" },
                        { critere: "Equipe RevOps B2B standard", reponse: "Make : notre recommandation par defaut chez Ceres", color: "#6C5CE7" },
                      ].map((item) => (
                        <div key={item.critere} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: item.color }} />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">{item.critere}</p>
                            <p className="text-[10px] text-[#777] mt-0.5">{item.reponse}</p>
                          </div>
                        </div>
                      ))}
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
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;automatiser votre stack RevOps ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On vous accompagne dans le choix et le deploiement de vos automatisations : audit des processus, architecture des workflows, configuration Make/n8n et formation de l&apos;equipe.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#6C5CE7]" />Reserver un appel decouverte
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
