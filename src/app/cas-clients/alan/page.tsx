"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Alan : tracking marketing multi-touch et attribution dans HubSpot",
  description: "Comment Ceres a mis en place un systeme de tracking marketing complet pour Alan : UTM, attribution multi-touch, suivi des conversions et reporting dans HubSpot.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-15",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "probleme", title: "Le probleme de tracking" },
  { id: "diagnostic", title: "Le diagnostic" },
  { id: "utm", title: "Systeme UTM structure" },
  { id: "attribution", title: "Attribution multi-touch" },
  { id: "implementation", title: "Implementation HubSpot" },
  { id: "conversions", title: "Tracking des conversions" },
  { id: "dashboards", title: "Dashboards marketing" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Retour client" },
];

export default function AlanCaseStudy() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("contexte");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#6C5CE7] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#6C5CE7", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "45%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "65%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "82%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <img src="https://www.google.com/s2/favicons?domain=alan.com&sz=32" alt="Alan" className="w-5 h-5" />
                <span className="text-[12px] font-semibold text-[#111]">Alan</span>
              </div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#6C5CE7] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/cas-clients" className="hover:text-[#111] transition-colors">Cas clients</Link><span>/</span>
              <span className="text-[#666]">Alan</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">12 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=alan.com&sz=64" alt="Alan" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Alan</h1>
                  <p className="text-[12px] text-[#999]">AssurTech | Scale-up | 500+ personnes</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Mise en place d&apos;un systeme de tracking marketing complet dans HubSpot : convention UTM, attribution multi-touch, suivi des conversions et dashboards pour enfin savoir quel canal genere du revenue.
              </p>

              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "100%", label: "Leads traces a la source", color: "#22C55E" },
                    { value: "+35%", label: "ROI marketing mesurable", color: "#4B5EFC" },
                    { value: "6", label: "Modeles d\u2019attribution", color: "#6C5CE7" },
                    { value: "< 1h", label: "Temps pour un rapport", color: "#FF7A59" },
                  ].map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-[24px] font-bold" style={{ color: r.color }}>{r.value}</div>
                      <div className="text-[10px] text-white/40">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </header>

            <article>
              {/* Contexte */}
              <section id="contexte" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le contexte</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Alan est l&apos;une des scale-ups les plus connues de la French Tech. Specialisee dans l&apos;assurance sante pour les entreprises, Alan a leve plus de 500 millions d&apos;euros et compte plusieurs centaines de milliers de membres.</p>
                    <p>Leur equipe marketing investit massivement sur de nombreux canaux : Google Ads, LinkedIn Ads, contenu SEO, webinars, events, partnerships, referral. Le budget marketing se chiffre en millions d&apos;euros par an.</p>
                    <p>Le probleme : malgre cet investissement, l&apos;equipe n&apos;avait aucune visibilite fiable sur quel canal generait reellement du business. Les leads entraient dans HubSpot sans source tracee, l&apos;attribution etait approximative, et le reporting marketing etait un exercice de divination plus que d&apos;analyse.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Budget marketing", value: "M+ EUR/an" },
                      { label: "Canaux actifs", value: "8+" },
                      { label: "Leads/mois", value: "2 000+" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Le probleme */}
              <section id="probleme" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le probleme de tracking</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Quand on a fait le diagnostic, la situation etait la suivante :</p>
                  </div>

                  {/* Probleme visual */}
                  <div className="mt-5 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-5">
                    <p className="text-[12px] font-semibold text-[#EF4444] mb-4">Ce qu&apos;on a trouve</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { stat: "67%", desc: "des leads n\u2019avaient pas de source d\u2019origine dans HubSpot" },
                        { stat: "0", desc: "convention UTM documentee (chacun faisait ses propres UTM)" },
                        { stat: "3", desc: "outils differents pour le reporting (HubSpot, GA4, Sheets) avec des chiffres qui ne matchaient jamais" },
                        { stat: "100%", desc: "de l\u2019attribution etait en \"last touch\" par defaut, masquant l\u2019impact du contenu et des events" },
                        { stat: "0", desc: "tracking des soumissions de formulaires HubSpot dans GA4" },
                        { stat: "4h", desc: "par semaine passees a compiler le reporting marketing manuellement" },
                      ].map((p) => (
                        <div key={p.desc} className="flex gap-3 items-start">
                          <span className="text-[18px] font-bold text-[#EF4444] shrink-0 w-10 text-right">{p.stat}</span>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Concretement, quand le CMO demandait &ldquo;quel est le ROI de notre campagne LinkedIn du mois dernier ?&rdquo;, personne ne pouvait repondre avec certitude. Les leads LinkedIn etaient melanges avec les leads organiques, les UTM etaient inconsistants, et le lien entre un lead marketing et un deal signe etait impossible a tracer.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Diagnostic */}
              <section id="diagnostic" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le diagnostic : ou ca cassait</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a identifie 4 points de rupture dans la chaine de tracking :</p>
                  </div>

                  {/* Tracking chain mockup */}
                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Acquisition : UTM absents ou inconsistants", desc: "Chaque membre de l\u2019equipe marketing creait ses propres UTM sans convention. \"linkedin-ads\", \"LinkedIn_Ads\", \"li_ads\", \"paid_linkedin\" pour la meme source. Impossible d\u2019agreger les donnees.", status: "broken", color: "#EF4444" },
                      { num: "2", title: "Capture : formulaires non traces", desc: "Les formulaires HubSpot embeddees sur le site ne remontaient aucun evenement dans GA4. Aucun tracking des conversions cote analytics. Seul HubSpot savait qu\u2019un formulaire avait ete soumis.", status: "broken", color: "#EF4444" },
                      { num: "3", title: "Attribution : last-touch uniquement", desc: "HubSpot etait configure en attribution last-touch par defaut. Un prospect qui decouvre Alan via un article SEO, revient via une pub LinkedIn, puis convertit via une demo direct etait attribue a 100% au \"direct\". Le SEO et LinkedIn n\u2019obtenaient aucun credit.", status: "broken", color: "#FF7A59" },
                      { num: "4", title: "Reporting : donnees fragmentees", desc: "Le marketing utilisait GA4 pour le trafic, HubSpot pour les leads, et un Google Sheets pour le pipeline. Les chiffres ne matchaient jamais. Personne ne faisait confiance au reporting.", status: "broken", color: "#FF7A59" },
                    ].map((point, i) => (
                      <div key={point.num}>
                        <div className="flex gap-3 items-start py-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: point.color }}>
                            {point.num}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-[#111] mb-1">{point.title}</p>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{point.desc}</p>
                          </div>
                        </div>
                        {i < 3 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* UTM */}
              <section id="utm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Systeme UTM structure</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La premiere brique : une convention UTM rigoureuse, documentee et appliquee par toute l&apos;equipe marketing.</p>
                  </div>

                  {/* UTM convention mockup */}
                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /></div>
                      <span className="text-[10px] text-white/50 font-mono">Convention UTM Alan</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[11px] text-[#E0E0E0] leading-[1.8] whitespace-pre-wrap font-mono">
{`utm_source   = plateforme (google, linkedin, facebook, email, partner)
utm_medium   = type de canal (cpc, social-paid, social-organic, email, referral, content)
utm_campaign = nom de campagne (format: YYYY-MM_nom-campagne)
utm_content  = variante creative (cta-header, banner-v2, carousel-3)
utm_term     = mot-cle ou audience (decision-makers, rh-pme, assurance-sante)

Exemple complet :
?utm_source=linkedin
&utm_medium=social-paid
&utm_campaign=2026-03_assurance-pme
&utm_content=carousel-temoignage
&utm_term=drh-50-200`}
                      </pre>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Convention documentee", desc: "Un document Notion partage avec toutes les valeurs possibles par parametre, des exemples par canal et une FAQ. Mis a jour a chaque nouveau canal." },
                      { title: "UTM builder interne", desc: "Un Google Sheet avec des dropdowns pour chaque parametre UTM. Les marketeurs selectionnent les valeurs au lieu de les taper a la main. Zero erreur de format." },
                      { title: "Validation automatique", desc: "Un workflow HubSpot verifie les UTM a l\u2019entree. Si un UTM non conforme est detecte (valeur inconnue dans utm_source), une alerte est envoyee a l\u2019equipe pour correction." },
                      { title: "Mapping HubSpot", desc: "Chaque parametre UTM est mappe sur une propriete HubSpot dediee : utm_source vers Original Source Drill-Down 1, utm_medium vers Original Source Drill-Down 2, utm_campaign vers une propriete custom." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Attribution multi-touch */}
              <section id="attribution" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Attribution</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Attribution multi-touch : 6 modeles configures</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>On a configure 6 modeles d&apos;attribution dans HubSpot pour qu&apos;Alan puisse analyser l&apos;impact de chaque canal sous differents angles. Plus de &ldquo;tout au last touch&rdquo;.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { model: "First Touch", desc: "100% du credit au premier point de contact. Repond a : quel canal nous fait decouvrir ?", use: "Evaluer l\u2019acquisition pure", pct: "100% / 0%" },
                      { model: "Last Touch", desc: "100% du credit au dernier point de contact avant conversion. Repond a : qu\u2019est-ce qui declenche la conversion ?", use: "Evaluer les canaux de conversion", pct: "0% / 100%" },
                      { model: "Lineaire", desc: "Credit reparti equitablement entre tous les touchpoints. Repond a : quelle est la contribution globale de chaque canal ?", use: "Vue equilibree", pct: "33% / 33% / 33%" },
                      { model: "En U (Position-Based)", desc: "40% au first touch, 40% au last touch, 20% repartis au milieu. Repond a : quels canaux ouvrent et ferment les deals ?", use: "Vue recommandee par Ceres", pct: "40% / 20% / 40%" },
                      { model: "En W", desc: "30% au first touch, 30% a la creation du lead, 30% a la creation du deal, 10% repartis. Repond a : quels canaux influencent chaque etape cle ?", use: "Funnel complet", pct: "30% / 30% / 30% / 10%" },
                      { model: "Time Decay", desc: "Plus de credit aux touchpoints recents, decroissance logarithmique. Repond a : qu\u2019est-ce qui a influence la decision recemment ?", use: "Cycles de vente longs", pct: "10% / 20% / 30% / 40%" },
                    ].map((m) => (
                      <div key={m.model} className="rounded-xl bg-white/5 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-white">{m.model}</p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6C5CE7]/30 text-[#6C5CE7] font-mono">{m.pct}</span>
                        </div>
                        <p className="text-[11px] text-white/40 leading-[1.6] mb-2">{m.desc}</p>
                        <p className="text-[10px] text-[#6C5CE7]">{m.use}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-white/5 p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Notre recommandation pour Alan</p>
                    <p className="text-[11px] text-white/50 leading-[1.65]">On a recommande le modele en U (Position-Based) comme modele par defaut. Il valorise les canaux qui font decouvrir Alan (SEO, contenu) ET ceux qui declenchent la conversion (retargeting, demo), sans ignorer les interactions intermediaires. C&apos;est le meilleur compromis pour une equipe marketing multi-canal.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Implementation HubSpot */}
              <section id="implementation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Implementation dans HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Tout le systeme de tracking a ete implemente nativement dans HubSpot, sans outil tiers. Voici les briques techniques.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Proprietes UTM custom", desc: "6 proprietes custom creees : utm_source_custom, utm_medium_custom, utm_campaign_custom, utm_content_custom, utm_term_custom, et original_landing_page. Remplies automatiquement via les hidden fields des formulaires HubSpot." },
                      { step: "02", title: "Hidden fields sur tous les formulaires", desc: "Chaque formulaire HubSpot a ete mis a jour avec des hidden fields qui capturent les parametres UTM de l\u2019URL. Le script JavaScript injecte dans le site lit les parametres et les passe au formulaire." },
                      { step: "03", title: "First touch vs last touch", desc: "On a cree 2 sets de proprietes : \"First touch\" (rempli uniquement a la premiere conversion, jamais ecrase) et \"Last touch\" (mis a jour a chaque nouvelle conversion). Ca permet de comparer les canaux d\u2019acquisition et de conversion." },
                      { step: "04", title: "Campaign object HubSpot", desc: "Chaque campagne marketing est creee comme un objet Campaign dans HubSpot avec budget, dates, canal et objectifs. Les contacts sont automatiquement associes a la campagne via l\u2019UTM campaign." },
                      { step: "05", title: "Contact timeline enrichie", desc: "Chaque interaction marketing est tracee dans la timeline du contact : page visitee, formulaire soumis, email ouvert, ad cliquee. Le commercial voit tout le parcours du prospect avant son premier call." },
                      { step: "06", title: "Link contact to deal", desc: "Quand un deal est cree, les proprietes d\u2019attribution du contact sont copiees sur le deal via un workflow. Ca permet de faire de l\u2019attribution au niveau revenue (pas seulement au niveau lead)." },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[11px] font-bold shrink-0">{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* GTM script mockup */}
                  <div className="mt-6 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <span className="text-[10px] text-white/50 font-mono">Script de capture UTM (inject dans le site)</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[10px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">
{`// Capture UTM params from URL and store in cookies
(function() {
  var params = new URLSearchParams(window.location.search);
  var utmKeys = ['utm_source','utm_medium','utm_campaign',
                 'utm_content','utm_term'];
  utmKeys.forEach(function(key) {
    var val = params.get(key);
    if (val) {
      document.cookie = key + '=' + val +
        ';path=/;max-age=2592000'; // 30 days
    }
  });
})();

// Inject UTM values into HubSpot form hidden fields
window.addEventListener('message', function(e) {
  if (e.data.type === 'hsFormCallback' &&
      e.data.eventName === 'onFormReady') {
    ['utm_source','utm_medium','utm_campaign',
     'utm_content','utm_term'].forEach(function(key) {
      var val = getCookie(key);
      if (val) {
        var input = document.querySelector(
          'input[name="' + key + '"]');
        if (input) input.value = val;
      }
    });
  }
});`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Tracking conversions */}
              <section id="conversions" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Tracking des conversions</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a configure le tracking de 5 types de conversions dans HubSpot, chacune avec son propre workflow et ses proprietes :</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      { type: "Soumission formulaire", desc: "Chaque formulaire HubSpot (contact, demo, devis, newsletter) est trace comme conversion avec l\u2019URL source, les UTM et le timestamp.", count: "12 formulaires", color: "#6C5CE7" },
                      { type: "Demande de demo", desc: "Conversion prioritaire. Declenche automatiquement : creation de deal, attribution au sales, notification Slack, email de confirmation avec lien Calendly.", count: "Conversion primaire", color: "#22C55E" },
                      { type: "Telechargement contenu", desc: "Chaque guide, ebook ou template telecharge est trace. Le contact recoit un score d\u2019engagement, le contenu est associe au parcours.", count: "8 contenus gates", color: "#4B5EFC" },
                      { type: "Inscription webinar", desc: "Les inscriptions via le formulaire webinar sont tracees avec la source d\u2019acquisition. Post-webinar, les participants recoivent un score supplementaire.", count: "2-3 webinars/mois", color: "#FF7A59" },
                      { type: "Events HubSpot dans GA4", desc: "Un listener JavaScript pousse un evenement \"hubspot_form_submit\" dans le dataLayer a chaque soumission. L\u2019evenement est marque comme conversion dans GA4 et Google Ads.", count: "Cross-platform", color: "#6D00CC" },
                    ].map((c) => (
                      <div key={c.type} className="flex gap-3 items-start rounded-xl border border-[#F2F2F2] p-3">
                        <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={{ background: c.color }} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-[12px] font-semibold text-[#111]">{c.type}</p>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F5F5F5] text-[#999]">{c.count}</span>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Dashboards */}
              <section id="dashboards" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Dashboards marketing : la verite en temps reel</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a cree 3 dashboards HubSpot qui remplacent le reporting Google Sheets :</p>
                  </div>

                  {/* Dashboard mockup */}
                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 border-b border-[#E8E8E8]">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /></div>
                      <span className="text-[10px] text-[#999] font-medium">Dashboard : Attribution Marketing</span>
                    </div>
                    <div className="bg-white p-4">
                      {/* KPI row */}
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {[
                          { label: "Leads ce mois", value: "2 147", change: "+12%", color: "#22C55E" },
                          { label: "MQLs", value: "486", change: "+8%", color: "#4B5EFC" },
                          { label: "SQLs", value: "142", change: "+22%", color: "#6C5CE7" },
                          { label: "Revenue attribue", value: "380K EUR", change: "+15%", color: "#FF7A59" },
                        ].map((kpi) => (
                          <div key={kpi.label} className="rounded-lg border border-[#F2F2F2] p-2.5 text-center">
                            <p className="text-[14px] font-bold text-[#111]">{kpi.value}</p>
                            <p className="text-[9px] text-[#999]">{kpi.label}</p>
                            <p className="text-[9px] font-medium" style={{ color: kpi.color }}>{kpi.change}</p>
                          </div>
                        ))}
                      </div>

                      {/* Channel breakdown */}
                      <p className="text-[9px] font-semibold text-[#999] uppercase tracking-wider mb-2">Leads par canal (attribution U-shaped)</p>
                      <div className="space-y-1.5">
                        {[
                          { channel: "Google Ads (CPC)", leads: 620, pct: 29, color: "#4285F4" },
                          { channel: "SEO (Organic)", leads: 510, pct: 24, color: "#22C55E" },
                          { channel: "LinkedIn Ads", leads: 380, pct: 18, color: "#0A66C2" },
                          { channel: "Referral / Partners", leads: 250, pct: 12, color: "#FF7A59" },
                          { channel: "Content (Blog, Guides)", leads: 200, pct: 9, color: "#6C5CE7" },
                          { channel: "Events / Webinars", leads: 120, pct: 6, color: "#D4A27F" },
                          { channel: "Direct", leads: 67, pct: 3, color: "#999" },
                        ].map((ch) => (
                          <div key={ch.channel} className="flex items-center gap-2">
                            <span className="text-[10px] text-[#777] w-[140px] shrink-0 truncate">{ch.channel}</span>
                            <div className="flex-1 h-4 bg-[#F5F5F5] rounded-full overflow-hidden">
                              <div className="h-full rounded-full flex items-center pl-2" style={{ width: `${pct(ch.pct)}%`, background: ch.color }}>
                                <span className="text-[8px] text-white font-medium">{ch.leads}</span>
                              </div>
                            </div>
                            <span className="text-[10px] text-[#999] w-8 text-right">{ch.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { title: "Attribution Marketing", desc: "Leads par canal, par campagne, par modele d\u2019attribution. Revenue attribue par source. Comparaison first touch vs last touch vs U-shaped.", reports: "12 rapports" },
                      { title: "Performance Campagnes", desc: "Budget vs leads vs MQLs vs SQLs vs revenue par campagne. ROI et ROAS par canal. Cout par lead et cout par acquisition.", reports: "8 rapports" },
                      { title: "Funnel Marketing", desc: "Conversion rate par etape du funnel (Lead, MQL, SQL, Opportunity, Customer). Time-to-convert par canal. Velocity du funnel.", reports: "6 rapports" },
                    ].map((d) => (
                      <div key={d.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-[#111]">{d.title}</p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-medium">{d.reports}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{d.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats apres 6 semaines</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "100%", label: "Des leads ont une source tracee (vs 33% avant)", color: "#22C55E" },
                      { value: "+35%", label: "ROI marketing mesurable grace a l\u2019attribution revenue", color: "#4B5EFC" },
                      { value: "6", label: "Modeles d\u2019attribution configurables en 1 clic", color: "#6C5CE7" },
                      { value: "0", label: "Fichier Google Sheets pour le reporting", color: "#FF7A59" },
                      { value: "< 1h", label: "Pour generer le rapport mensuel marketing (vs 4h avant)", color: "#22C55E" },
                      { value: "-40%", label: "Budget realloue des canaux inefficaces vers les performants", color: "#D4A27F" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Le CMO peut repondre en 30 secondes a \"quel est le ROI de cette campagne\"",
                      "L\u2019equipe a decouvert que le SEO generait 3x plus de SQLs que ce qu\u2019ils pensaient (masque par le last-touch)",
                      "Budget LinkedIn Ads realloue : -30% sur les campagnes awareness, +50% sur les campagnes conversion",
                      "Les sales voient le parcours complet du prospect avant le premier call",
                      "Le reporting mensuel est automatique, plus personne ne compile de Sheets",
                    ].map((r) => (
                      <p key={r} className="text-[11px] text-white/50 flex items-start gap-2">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {r}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Temoignage */}
              <section id="temoignage" className="mb-8">
                <div className="rounded-2xl border-2 border-[#6C5CE7]/20 bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(108,92,231,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[14px] font-bold shrink-0">A</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;Avant Ceres, on depensait des millions en marketing sans savoir ce qui marchait vraiment. On avait des intuitions, pas des donnees. En 6 semaines, ils ont mis en place un systeme de tracking complet dans HubSpot : UTM structures, attribution multi-touch, dashboards temps reel. La premiere decouverte a ete que notre SEO generait 3 fois plus de deals qu&apos;on ne le pensait. On a realloue 40% de notre budget sur la base de ces insights. C&apos;est le projet qui a eu le plus d&apos;impact sur notre efficacite marketing.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Equipe Marketing</p>
                          <p className="text-[11px] text-[#999]">Alan</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=alan.com&sz=32" alt="Alan" className="w-5 h-5 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous ne savez pas d&apos;ou viennent vos leads ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On met en place le tracking marketing complet dans HubSpot : UTM, attribution multi-touch, conversions et dashboards.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/agence-hubspot" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Nos services HubSpot
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function pct(val: number) { return Math.max(val, 5); }
