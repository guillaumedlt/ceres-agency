"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Attribution marketing multi-touch : le guide pour equipes B2B",
  description: "Guide complet de l'attribution marketing multi-touch en B2B. Modeles (first touch, last touch, linear, U-shaped, W-shaped), configuration HubSpot, UTM, erreurs courantes, IA et dashboard attribution.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/attribution-marketing-multi-touch" },
  articleSection: "Data & Reporting",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "difficulte-attribution", title: "Pourquoi c'est si difficile" },
  { id: "modeles-attribution", title: "Les modeles d'attribution" },
  { id: "attribution-hubspot", title: "Attribution dans HubSpot" },
  { id: "utm-tracking", title: "UTM et tracking" },
  { id: "erreurs-faussent", title: "Les erreurs qui faussent tout" },
  { id: "attribution-ia", title: "Attribution et IA" },
  { id: "dashboard-attribution", title: "Dashboard attribution" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Tracking des conversions HubSpot : le guide complet", slug: "tracking-conversions-hubspot-guide-complet", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "KPI commerciaux : les 25 indicateurs de vente a suivre", slug: "kpi-commerciaux-indicateurs-vente", category: "Data & Reporting", color: "#22C55E" },
  { title: "Les metriques RevOps : 30 indicateurs pour piloter votre revenue engine", slug: "metriques-revops-indicateurs-performance", category: "RevOps", color: "#FF7A59" },
];

export default function AttributionMarketingArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("difficulte-attribution");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Attribution%20marketing%20multi-touch%20B2B&url=https://ceres.agency/blog/attribution-marketing-multi-touch" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/attribution-marketing-multi-touch" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Attribution marketing multi-touch</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Data &amp; Reporting</Badge>
                <span className="text-[11px] text-[#CCC]">15 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Attribution marketing multi-touch : le guide pour equipes B2B
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                En B2B, un deal passe par 7 a 15 points de contact avant de se conclure. Mais la plupart des equipes n&apos;attribuent le merite qu&apos;au premier ou au dernier. Ce guide couvre les modeles d&apos;attribution, la configuration dans HubSpot, le tracking UTM, les erreurs courantes et comment l&apos;IA identifie les vrais patterns. Avec des methodes applicables, pas de la theorie academique.
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
              <section id="difficulte-attribution" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi l&apos;attribution est si difficile en B2B</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;attribution marketing en B2C est relativement simple : un prospect voit une pub, clique, achete. Le parcours est court, souvent lineaire, et les outils de tracking le captent bien. En B2B, tout est different.</p>
                    <p>Quatre facteurs rendent l&apos;attribution B2B structurellement complexe :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Cycles longs.</strong> Un deal B2B prend 30 a 180 jours entre le premier contact et la signature. Pendant ce temps, le prospect interagit avec des dizaines de contenus, emails, appels, demos et evenements. Attribuer le merite a un seul touchpoint est absurde.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Multi-stakeholders.</strong> La decision n&apos;est pas prise par une personne mais par 3 a 7 parties prenantes. Le marketing touche le champion, mais le CFO qui valide le budget n&apos;a peut-etre jamais visite votre site. Comment attribuer un deal quand les touchpoints sont repartis sur plusieurs individus ?</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Canaux offline.</strong> Les conferences, les dejeuners, les recommandations par bouche-a-oreille, les appels a froid. Ces interactions n&apos;ont pas d&apos;UTM. Elles ne laissent pas de trace digitale. Pourtant, elles influencent enormement la decision en B2B.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Dark funnel.</strong> Le prospect lit un post LinkedIn, en parle a un collegue, google votre nom 3 semaines plus tard, lit 4 articles de blog sans se convertir, puis remplit un formulaire. Les 5 premieres interactions sont invisibles pour votre tracking. C&apos;est le dark funnel, et il represente jusqu&apos;a 70% du parcours reel.</li>
                    </ul>
                    <p>Resultat : la plupart des equipes B2B operent a l&apos;aveugle. Elles savent combien elles depensent en marketing, mais elles ne savent pas quel canal genere reellement du pipeline et du revenue. Ce guide est la pour changer ca, avec des methodes praticables, pas un modele theoriquement parfait mais inapplicable.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "7-15", label: "Touchpoints avant signature en B2B", color: "#22C55E" },
                      { stat: "3-7", label: "Decision makers par deal", color: "#4B5EFC" },
                      { stat: "70%", label: "Du parcours est 'dark funnel'", color: "#6C5CE7" },
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
              <section id="modeles-attribution" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les modeles d&apos;attribution : du simple au complexe</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un modele d&apos;attribution definit comment le credit d&apos;une conversion (lead, deal, revenue) est reparti entre les differents touchpoints. Il n&apos;existe pas de modele parfait. Chacun a ses forces et ses biais. L&apos;important est de choisir en connaissance de cause.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        model: "First Touch",
                        credit: "100% au premier contact",
                        force: "Simple. Mesure l'efficacite de la generation de demande et de l'acquisition.",
                        faiblesse: "Ignore tout ce qui se passe apres le premier contact. Sur un cycle de 90 jours, c'est 89 jours d'interactions non comptabilises.",
                        usecase: "Equipes qui veulent optimiser le haut du funnel (TOFU).",
                        color: "#22C55E",
                      },
                      {
                        model: "Last Touch",
                        credit: "100% au dernier contact avant conversion",
                        force: "Simple. Mesure ce qui declenche la conversion concrete.",
                        faiblesse: "Ignore tout le travail de nurturing et de generation de demande. Surevalu les actions de closing.",
                        usecase: "Equipes qui veulent optimiser la conversion (BOFU).",
                        color: "#FF7A59",
                      },
                      {
                        model: "Linear",
                        credit: "Reparti egalement entre tous les touchpoints",
                        force: "Reconnait que chaque interaction contribue. Pas de biais vers un moment du parcours.",
                        faiblesse: "Traite un clic email et une demo de 45 minutes comme egaux. Ne reflete pas l'impact reel de chaque interaction.",
                        usecase: "Premier pas vers le multi-touch. Mieux que first/last touch.",
                        color: "#4B5EFC",
                      },
                      {
                        model: "U-shaped (Position-based)",
                        credit: "40% first touch, 40% conversion, 20% reparti au milieu",
                        force: "Reconnait l'importance du premier contact ET de la conversion. Le milieu du funnel est pris en compte mais sans le surévaluer.",
                        faiblesse: "Les poids sont arbitraires (40/40/20). Ne s'adapte pas a la realite de chaque deal.",
                        usecase: "Le modele le plus equilibre pour les equipes B2B de taille moyenne.",
                        color: "#6C5CE7",
                      },
                      {
                        model: "W-shaped",
                        credit: "30% first touch, 30% creation de lead, 30% creation d'opportunite, 10% reparti",
                        force: "Ajoute un troisieme moment cle : la creation de l'opportunite. Reflete mieux le parcours B2B.",
                        faiblesse: "Plus complexe a configurer. Necessite un CRM bien structure avec des etapes clairement definies.",
                        usecase: "Equipes avec un process de vente mature et un CRM bien configure.",
                        color: "#6D00CC",
                      },
                      {
                        model: "Custom / Data-driven",
                        credit: "Poids calcules par les donnees (IA ou regression)",
                        force: "Le modele le plus precis. Les poids refletent l'impact reel de chaque touchpoint base sur les donnees historiques.",
                        faiblesse: "Necessite beaucoup de donnees (200+ deals) et des outils avances. Complexe a maintenir et a expliquer.",
                        usecase: "Equipes matures avec un volume de deals suffisant et une equipe data.",
                        color: "#111",
                      },
                    ].map((item) => (
                      <div key={item.model} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.model}</span>
                          <span className="text-[10px] text-[#999] ml-auto">{item.credit}</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2 mb-2">
                          <div className="rounded-lg bg-[#22C55E]/5 p-2">
                            <span className="text-[10px] text-[#22C55E] font-semibold">Force : </span>
                            <span className="text-[10px] text-[#888]">{item.force}</span>
                          </div>
                          <div className="rounded-lg bg-[#EF4444]/5 p-2">
                            <span className="text-[10px] text-[#EF4444] font-semibold">Faiblesse : </span>
                            <span className="text-[10px] text-[#888]">{item.faiblesse}</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-[#999]"><strong className="text-[#777]">Quand l&apos;utiliser :</strong> {item.usecase}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Notre recommandation.</strong> Si vous ne faites rien aujourd&apos;hui, commencez par le U-shaped. Il est le meilleur compromis entre simplicite et precision pour une equipe B2B de 5 a 50 personnes. Vous pourrez evoluer vers un modele data-driven quand vous aurez 6 mois de donnees propres et 100+ deals closes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="attribution-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment configurer l&apos;attribution dans HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot propose un reporting d&apos;attribution natif dans ses plans Marketing Hub Professional et Enterprise. Mais l&apos;outil brut ne suffit pas. Il faut le configurer correctement pour obtenir des donnees exploitables.</p>
                    <p>Voici les 5 etapes de configuration :</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { step: "1. Definir les interactions trackees", desc: "Dans HubSpot, les interactions incluent : visites de pages, soumissions de formulaires, ouvertures d'emails, clics, reunions, appels. Definissez quelles interactions sont pertinentes pour votre modele. Un clic email a-t-il le meme poids qu'une demo ? Probablement pas.", color: "#22C55E" },
                      { step: "2. Configurer les campagnes", desc: "Chaque initiative marketing doit etre associee a une campagne HubSpot. Pas de campagne = pas d'attribution. Creez une campagne par canal/initiative majeure : campagne SEO blog, campagne LinkedIn Ads Q2, campagne webinaire mars, campagne outbound SDR.", color: "#4B5EFC" },
                      { step: "3. Creer les rapports d'attribution", desc: "Dans Rapports > Attribution, creez des rapports par modele. Commencez par un rapport de contact creation (attribution du lead) et un rapport de deal creation (attribution du deal). Utilisez au minimum le modele U-shaped.", color: "#FF7A59" },
                      { step: "4. Lier deals et contacts", desc: "L'attribution HubSpot repose sur le lien entre contacts et deals. Si vos deals ne sont pas associes aux bons contacts (ceux qui ont interagi avec le marketing), l'attribution sera fausse. Verifiez que chaque deal a au minimum le contact champion associe.", color: "#6C5CE7" },
                      { step: "5. Analyser par cohorte", desc: "Ne regardez pas l'attribution en continu. Analysez par cohorte mensuelle ou trimestrielle. 'Sur les deals fermes en mars, quels canaux ont le plus contribue ?' C'est la question qui guide les decisions budgetaires.", color: "#6D00CC" },
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
                    <p><strong className="text-[#111]">Attention au plan HubSpot.</strong> L&apos;attribution multi-touch native necessite Marketing Hub Professional (800 EUR/mois). Si vous etes sur un plan Starter ou gratuit, vous pouvez reproduire une attribution basique avec des proprietes custom et des workflows, mais ce sera plus manuel et moins precis.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="utm-tracking" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">UTM et tracking : la base indispensable</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Sans UTM, pas d&apos;attribution. Les parametres UTM sont le fondement de tout systeme de tracking. Ils permettent d&apos;identifier la source, le medium, la campagne et le contenu de chaque visite. Pourtant, 60% des equipes B2B que l&apos;on audite n&apos;ont pas de convention UTM coherente.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Convention UTM recommandee pour le B2B</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Parametre</th>
                            <th className="text-left py-2 px-2 text-[#999] font-semibold">Valeurs standards</th>
                            <th className="text-left py-2 pl-2 text-[#999] font-semibold">Exemple</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { param: "utm_source", values: "linkedin, google, email, referral, direct", example: "utm_source=linkedin" },
                            { param: "utm_medium", values: "paid, organic, social, email, cpc, cpm", example: "utm_medium=paid" },
                            { param: "utm_campaign", values: "Nom de la campagne (snake_case)", example: "utm_campaign=webinar_revops_q2" },
                            { param: "utm_content", values: "Variante (A/B test, CTA, format)", example: "utm_content=cta_header_v2" },
                            { param: "utm_term", values: "Mot-cle (pour le paid search)", example: "utm_term=revops_agence" },
                          ].map((row) => (
                            <tr key={row.param} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111] font-mono text-[10px]">{row.param}</td>
                              <td className="py-2.5 px-2 text-[#777]">{row.values}</td>
                              <td className="py-2.5 pl-2 text-[#999] font-mono text-[10px]">{row.example}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les regles d&apos;or.</strong> Toujours en minuscule (linkedin, pas LinkedIn). Toujours en snake_case pour les campagnes. Jamais d&apos;espaces. Un document partage avec toute l&apos;equipe marketing qui reference les valeurs autorisees. Un template de generateur UTM accessible en un clic.</p>
                    <p><strong className="text-[#111]">Les UTM ne suffisent pas.</strong> Les UTM trackent les interactions digitales trackables. Mais en B2B, beaucoup d&apos;interactions echappent au tracking : appels telephoniques, conversations Slack, recommandations. Pour ces interactions, ajoutez un champ &ldquo;Comment avez-vous entendu parler de nous ?&rdquo; dans vos formulaires. Ce n&apos;est pas parfait, mais c&apos;est mieux que rien.</p>
                    <p><strong className="text-[#111]">HubSpot et les UTM.</strong> HubSpot capture automatiquement les UTM a la premiere visite et les stocke dans les proprietes du contact (Original Source). Mais attention : si le prospect revient sans UTM (en tapant directement l&apos;URL), les visites suivantes sont classees en &ldquo;Direct Traffic&rdquo;. D&apos;ou l&apos;importance du modele multi-touch qui regarde l&apos;ensemble du parcours, pas un seul point.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="erreurs-faussent" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs qui faussent tout</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avoir un modele d&apos;attribution ne sert a rien si les donnees en entree sont fausses. Voici les erreurs les plus frequentes qui corrompent silencieusement votre attribution.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "UTM incoherents",
                        desc: "LinkedIn, linkedin, Linkedin, linked-in. Quatre variantes pour la meme source. Resultat : dans vos rapports, le trafic LinkedIn est eclate en 4 lignes. L'attribution est fausse parce que les donnees sont sales.",
                        color: "#EF4444",
                        fix: "Creer un document de reference UTM partage et utiliser un generateur UTM qui force les conventions. Auditer les UTM existants et nettoyer."
                      },
                      {
                        title: "Deals non lies aux contacts",
                        desc: "Dans HubSpot, si un deal n'est pas associe au contact qui a interagi avec le marketing, l'attribution est impossible. C'est le cas de 30 a 50% des deals dans les CRM que l'on audite. Le commercial cree le deal sans associer le bon contact.",
                        color: "#FF7A59",
                        fix: "Rendre l'association contact-deal obligatoire dans le CRM (propriete required). Automatiser l'association quand c'est possible."
                      },
                      {
                        title: "Pas de tracking sur les pages cles",
                        desc: "Le script de tracking HubSpot n'est pas installe sur toutes les pages (landing pages externes, sous-domaines, pages partner). Les visites sur ces pages ne sont pas comptabilisees dans l'attribution.",
                        color: "#6C5CE7",
                        fix: "Verifier que le tracking code est installe sur 100% des pages. Tester regulierement avec l'extension HubSpot."
                      },
                      {
                        title: "Ignorer les interactions offline",
                        desc: "La conference a 15 000 EUR qui a genere 20 leads n'apparait nulle part dans l'attribution parce qu'il n'y a pas de campagne HubSpot associee. Le budget est coupe l'annee suivante. Erreur.",
                        color: "#4B5EFC",
                        fix: "Creer une campagne HubSpot pour chaque evenement offline. Logger les interactions manuellement ou via import. Associer les contacts a la campagne."
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
                    <p>La regle : avant de choisir un modele d&apos;attribution sophistique, assurez-vous que vos donnees sont propres. Un modele simple sur des donnees propres donnera de meilleurs resultats qu&apos;un modele complexe sur des donnees sales. Toujours.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="attribution-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Attribution et IA : identifier les vrais patterns</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les modeles d&apos;attribution classiques utilisent des regles fixes (40/40/20 pour le U-shaped, par exemple). L&apos;IA apporte une dimension supplementaire : elle analyse les donnees historiques pour identifier les patterns reels, pas les patterns supposes.</p>
                    <p>Trois cas d&apos;usage concrets de l&apos;IA pour l&apos;attribution :</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { usage: "Attribution data-driven", desc: "L'IA analyse les parcours des deals gagnes et perdus pour calculer le poids reel de chaque touchpoint. Au lieu de supposer que le first touch vaut 40%, elle peut decouvrir que dans votre cas, le webinaire a un impact 3x superieur a l'ebook. Les poids sont calcules, pas devines.", color: "#6D00CC" },
                      { usage: "Detection des parcours gagnants", desc: "L'IA identifie les sequences d'interactions qui precedent le plus souvent un deal gagne. Par exemple : article de blog > webinaire > demo dans les 14 jours = 4x plus de chances de closing. Ces patterns permettent d'optimiser le nurturing et de reproduire les parcours les plus efficaces.", color: "#22C55E" },
                      { usage: "Analyse du dark funnel", desc: "En croisant les donnees CRM, les signaux d'intent et le comportement web, l'IA infere les interactions invisibles. Un prospect qui arrive avec un formulaire tres detaille et mentionne un use case specifique a probablement ete influence par un contenu ou une recommandation non trackee. L'IA peut estimer cette influence.", color: "#4B5EFC" },
                    ].map((item) => (
                      <div key={item.usage} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.usage}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le prerequis : des donnees.</strong> L&apos;attribution data-driven necessite un volume minimum de donnees : au moins 100 deals closes sur 6 mois, avec un tracking propre des interactions. En dessous, les patterns identifies ne sont pas statistiquement fiables. Commencez par un modele simple (U-shaped) et passez au data-driven quand le volume le permet.</p>
                    <p><strong className="text-[#111]">Ce que l&apos;IA ne fait pas.</strong> L&apos;IA ne remplace pas la reflexion strategique. Elle identifie des correlations, pas des causalites. Si vos meilleurs deals passent tous par un webinaire, c&apos;est peut-etre parce que le webinaire convertit bien, ou peut-etre parce que les prospects les plus engages assistent aux webinaires. L&apos;interpretation humaine reste necessaire.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="dashboard-attribution" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Dashboard attribution : les 6 vues essentielles</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un dashboard d&apos;attribution ne doit pas etre un mur de chiffres. Il doit repondre a une question strategique par vue. Voici les 6 vues que l&apos;on configure systematiquement chez nos clients.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Les 6 vues du dashboard attribution</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { vue: "Pipeline par canal", question: "Quel canal genere le plus de pipeline ?", kpi: "Pipeline attribue (EUR) par source/medium", color: "#22C55E" },
                        { vue: "Revenue par canal", question: "Quel canal genere le plus de revenue signe ?", kpi: "Revenue closed won attribue par source", color: "#FF7A59" },
                        { vue: "CAC par canal", question: "Quel canal est le plus rentable ?", kpi: "Cout total du canal / Nombre de clients acquis", color: "#4B5EFC" },
                        { vue: "Parcours type", question: "Quels sont les parcours les plus frequents ?", kpi: "Top 10 sequences de touchpoints (first > ... > conversion)", color: "#6C5CE7" },
                        { vue: "Time to conversion", question: "Combien de temps entre first touch et deal ?", kpi: "Duree moyenne par canal et par segment", color: "#6D00CC" },
                        { vue: "Touchpoints par deal", question: "Combien d'interactions avant la signature ?", kpi: "Nombre moyen de touchpoints par deal gagne", color: "#111" },
                      ].map((item) => (
                        <div key={item.vue} className="rounded-lg border border-[#E8E8E8] bg-white p-3">
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-2 h-2 rounded-sm" style={{ background: item.color }} />
                            <span className="text-[11px] font-semibold text-[#111]">{item.vue}</span>
                          </div>
                          <p className="text-[10px] text-[#777] leading-[1.5] mb-1"><strong className="text-[#555]">Question :</strong> {item.question}</p>
                          <p className="text-[10px] text-[#999] leading-[1.5]"><strong className="text-[#777]">KPI :</strong> {item.kpi}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La frequence d&apos;analyse.</strong> Le dashboard d&apos;attribution se lit une fois par mois pour les decisions operationnelles (ajuster les budgets, tester un nouveau canal) et une fois par trimestre pour les decisions strategiques (reallocation majeure, abandon d&apos;un canal). Ne le regardez pas tous les jours : les variations quotidiennes ne sont pas significatives en B2B.</p>
                    <p><strong className="text-[#111]">Le piege du dashboard parfait.</strong> Ne passez pas 3 mois a construire le dashboard ideal. Commencez avec les 2 premieres vues (pipeline et revenue par canal) et ajoutez les autres progressivement. Un dashboard imparfait regarde chaque mois vaut infiniment mieux qu&apos;un dashboard parfait livre dans 6 mois.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on ne configure pas l&apos;attribution en dernier. C&apos;est l&apos;un des premiers chantiers de chaque mission RevOps. Parce que sans attribution fiable, toute decision marketing est un pari.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Audit tracking", desc: "On commence par auditer votre tracking existant : UTM, pixels, script HubSpot, campagnes, association contacts-deals. En moyenne, on identifie 5 a 10 failles critiques qui faussent les donnees d'attribution.", color: "#22C55E" },
                      { title: "Convention UTM", desc: "On definit et documente une convention UTM adaptee a votre stack. Un generateur partage, des valeurs standardisees, une formation de l'equipe marketing. Simple mais fondamental.", color: "#4B5EFC" },
                      { title: "Dashboard HubSpot", desc: "On configure les 6 vues essentielles directement dans HubSpot. Pas d'outil externe necessaire. Le marketing et les sales ont acces aux memes donnees, dans le meme outil.", color: "#FF7A59" },
                      { title: "Attribution IA", desc: "Pour les clients avec assez de donnees, on deploie un agent IA qui analyse les parcours et identifie les patterns gagnants. L'attribution passe de 'on suppose' a 'on sait'.", color: "#6D00CC" },
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
                        { stat: "95%", label: "Couverture tracking post-audit", color: "#22C55E" },
                        { stat: "+25%", label: "Precision de l'attribution", color: "#4B5EFC" },
                        { stat: "-20%", label: "Budget gaspille identifie", color: "#FF7A59" },
                        { stat: "2 sem", label: "Deploiement complet", color: "#6C5CE7" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>L&apos;attribution n&apos;est pas un sujet technique reserve aux data analysts. C&apos;est un sujet strategique qui conditionne chaque euro depense en marketing. On le rend accessible a toute l&apos;equipe, pas seulement aux experts data. Parce que les meilleures decisions sont prises quand tout le monde comprend d&apos;ou vient le revenue.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Mettre en place l&apos;attribution multi-touch ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on configure l&apos;attribution marketing dans HubSpot en 2 semaines. Tracking, UTM, dashboards et analyse IA. Pour que chaque euro marketing soit mesurable. Commencez par un appel de 30 minutes pour auditer votre tracking actuel.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#22C55E] text-white rounded-lg text-[13px] font-medium hover:bg-[#1EAD50] transition-colors">
                  Auditer votre attribution
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
