"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Edenred : optimisation de la connexion HubSpot-Salesforce",
  description: "Comment Ceres a optimise l\u2019integration HubSpot-Salesforce pour une filiale d\u2019Edenred : sync fiabilisee, 0 doublon, attribution cross-platform, visibilite unifiee marketing-sales.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-26",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "probleme", title: "Le probleme" },
  { id: "audit", title: "Audit de la connexion" },
  { id: "mapping", title: "Restructuration du mapping" },
  { id: "flux-leads", title: "Flux de leads" },
  { id: "attribution", title: "Attribution cross-platform" },
  { id: "automatisation", title: "Automatisation" },
  { id: "dashboards", title: "Dashboards et reporting" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Retour client" },
];

export default function EdenredCaseStudy() {
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
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
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
                <img src="https://www.google.com/s2/favicons?domain=edenred.com&sz=32" alt="Edenred" className="w-5 h-5" />
                <span className="text-[12px] font-semibold text-[#111]">Edenred</span>
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
              <span className="text-[#666]">Edenred</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">12 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=edenred.com&sz=64" alt="Edenred" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Edenred</h1>
                  <p className="text-[12px] text-[#999]">Solutions de paiement entreprises | Ticket Restaurant | 12 000+ collaborateurs | International</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Optimisation de la connexion HubSpot-Salesforce pour une filiale d&apos;Edenred. Sync fiabilisee, mapping restructure, attribution cross-platform, visibilite unifiee entre marketing et sales.
              </p>

              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { value: "100%", label: "Leads synces", color: "#22C55E" },
                    { value: "0", label: "Doublon", color: "#4B5EFC" },
                    { value: "-80%", label: "Erreurs de sync", color: "#6C5CE7" },
                    { value: "100%", label: "Attribution preservee", color: "#FF7A59" },
                    { value: "1", label: "Vue unifiee", color: "#22C55E" },
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
              {/* Le contexte */}
              <section id="contexte" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le contexte</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Edenred est le leader mondial des solutions de paiement a usage specifique pour les entreprises. Avec des produits comme Ticket Restaurant, Ticket Kadeos et une gamme de cartes de paiement corporate, le groupe opere dans 45 pays, emploie plus de 12 000 collaborateurs et gere un volume de transactions de plusieurs milliards d&apos;euros par an.</p>
                    <p>Le projet que nous avons mene concerne l&apos;une des filiales du groupe. Cote organisation, cette filiale utilise deux outils complementaires : HubSpot Marketing Hub pour l&apos;equipe marketing (campagnes, nurturing, lead generation, formulaires, landing pages) et Salesforce CRM pour l&apos;equipe commerciale (pipeline, gestion des comptes, forecasting, suivi des deals).</p>
                    <p>Sur le papier, cette architecture bipartite fait sens. Le marketing genere des leads dans HubSpot, les qualifie en MQL, puis les transmet a Salesforce ou les commerciaux prennent le relais. C&apos;est un schema classique dans les organisations B2B. Mais pour que ca fonctionne, la connexion entre les deux systemes doit etre irreprochable. Et c&apos;etait loin d&apos;etre le cas.</p>
                    <p>La filiale avait active le connecteur natif HubSpot-Salesforce il y a plusieurs annees, mais sans veritable configuration initiale. Le setup avait ete fait a la va-vite, avec les reglages par defaut, et n&apos;avait jamais ete revise depuis. Les equipes avaient evolue, les champs s&apos;etaient multiplies, les process avaient change, mais la connexion, elle, etait restee figee.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Collaborateurs groupe", value: "12 000+" },
                      { label: "Pays d\u2019operation", value: "45" },
                      { label: "Outils connectes", value: "2" },
                      { label: "Annees sans audit", value: "3+" },
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
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le probleme</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Quand la filiale nous a contactes, le constat etait sans appel : la connexion HubSpot-Salesforce ne fonctionnait plus correctement. Les symptomes etaient multiples, et chacun avait des consequences business directes.</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-5">
                    <p className="text-[12px] font-semibold text-[#EF4444] mb-4">Les dysfonctionnements identifies</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { stat: "30%", desc: "des leads generes par le marketing ne passaient jamais dans Salesforce. Ils restaient bloques dans HubSpot sans que personne ne s\u2019en rende compte." },
                        { stat: "850+", desc: "doublons detectes entre les deux systemes. Le meme contact existait dans HubSpot et Salesforce avec des informations differentes, sans association." },
                        { stat: "0%", desc: "d\u2019attribution fiable. Les UTM et sources marketing capturees dans HubSpot ne remontaient pas dans Salesforce. Impossible de savoir quelle campagne generait du pipeline." },
                        { stat: "60%", desc: "des champs HubSpot n\u2019etaient pas mappes vers Salesforce. Les informations remplies par le marketing (secteur, taille entreprise, interest) ne traversaient pas la connexion." },
                        { stat: "5+", desc: "lifecycle stages desynchronises. Un contact pouvait etre \"Customer\" dans HubSpot et \"Lead\" dans Salesforce, rendant tout reporting impossible." },
                        { stat: "100%", desc: "de l\u2019equipe marketing aveugle. Apres le passage en MQL, le marketing n\u2019avait aucune visibilite sur ce qui se passait cote sales. Pas de feedback loop." },
                      ].map((p) => (
                        <div key={p.desc} className="flex gap-3 items-start">
                          <span className="text-[18px] font-bold text-[#EF4444] shrink-0 w-12 text-right">{p.stat}</span>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le resultat concret : l&apos;equipe marketing investissait du budget dans des campagnes d&apos;acquisition sans pouvoir mesurer leur impact reel sur le pipeline. Et l&apos;equipe commerciale travaillait avec des donnees incompletes sur les leads qu&apos;elle recevait, quand elle les recevait. Deux equipes qui operaient en silo, avec un connecteur cense les relier mais qui, dans les faits, creait plus de problemes qu&apos;il n&apos;en resolvait.</p>
                    <p>Le probleme n&apos;etait pas HubSpot. Ce n&apos;etait pas Salesforce non plus. C&apos;etait la connexion entre les deux : mal configuree, jamais auditee, et qui avait derive silencieusement pendant des annees.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Audit de la connexion existante */}
              <section id="audit" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Audit de la connexion existante</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de toucher a quoi que ce soit, on a mene un audit exhaustif de la connexion HubSpot-Salesforce en place. L&apos;objectif : comprendre exactement ce qui fonctionnait, ce qui ne fonctionnait pas, et pourquoi. Pas de suppositions, que des faits.</p>
                  </div>

                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Analyse du connecteur natif", desc: "On a commence par examiner la configuration du connecteur HubSpot-Salesforce natif. Version du connecteur, parametres de sync, regles d\u2019inclusion et d\u2019exclusion, frequence de synchronisation. Premier constat : le connecteur etait dans sa configuration par defaut, sans aucune personnalisation. Les regles d\u2019inclusion etaient trop larges (tous les contacts synces, meme les desabonnes) et les regles d\u2019exclusion inexistantes.", color: "#6C5CE7" },
                      { num: "2", title: "Inventaire des erreurs de sync", desc: "On a exporte le journal des erreurs de synchronisation des 90 derniers jours. Resultat : 2 300+ erreurs non resolues. Les principales causes : champs obligatoires dans Salesforce non remplis dans HubSpot, valeurs de picklist non concordantes, limites d\u2019API atteintes aux heures de pointe, et conflits de mise a jour quand le meme champ etait modifie dans les deux systemes simultanement.", color: "#4B5EFC" },
                      { num: "3", title: "Cartographie du mapping existant", desc: "On a documente chaque champ mappe entre HubSpot et Salesforce. Sur les 180 proprietes actives dans HubSpot, seulement 72 etaient mappees vers Salesforce. Les 108 restantes, dont certaines critiques (source originale, UTM parameters, score marketing, date de MQL), n\u2019etaient tout simplement pas synchronisees.", color: "#22C55E" },
                      { num: "4", title: "Analyse des regles de priorite", desc: "Le connecteur HubSpot-Salesforce permet de definir quelle plateforme a la priorite en cas de conflit. On a decouvert que les regles de priorite etaient incoherentes : certains champs donnaient la priorite a HubSpot, d\u2019autres a Salesforce, sans logique apparente. Le lifecycle stage, par exemple, etait en priorite HubSpot alors que les commerciaux le mettaient a jour dans Salesforce.", color: "#FF7A59" },
                      { num: "5", title: "Audit des objets synchronises", desc: "On a verifie quels objets etaient synchronises et comment. Les contacts et les entreprises etaient synces, mais les deals ne l\u2019etaient pas. Resultat : le marketing n\u2019avait aucune visibilite sur le pipeline Salesforce. Les taches et les activites n\u2019etaient pas synchronisees non plus, privant chaque equipe du contexte de l\u2019autre.", color: "#6C5CE7" },
                      { num: "6", title: "Document d\u2019audit et recommandations", desc: "On a produit un document d\u2019audit de 35 pages detaillant chaque probleme identifie, son impact business, et la solution recommandee. Le document a ete presente a la direction marketing et au responsable CRM lors d\u2019un atelier de 2 heures. Chaque recommandation a ete validee avant de passer a l\u2019implementation.", color: "#4B5EFC" },
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
                        {i < 5 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Erreurs de sync", value: "2 300+" },
                      { label: "Champs non mappes", value: "108" },
                      { label: "Pages d\u2019audit", value: "35" },
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

              {/* Restructuration du mapping */}
              <section id="mapping" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Restructuration du mapping</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le mapping des champs est le coeur de toute integration HubSpot-Salesforce. Si un champ n&apos;est pas mappe, l&apos;information ne traverse pas. Si un champ est mal mappe, l&apos;information est corrompue. On a repris le mapping de zero, champ par champ.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Remapping complet des proprietes standard", desc: "On a reconfigure le mapping de toutes les proprietes standard HubSpot vers leurs equivalents Salesforce : nom, email, telephone, entreprise, poste, adresse. Chaque mapping a ete verifie pour s\u2019assurer que le format etait compatible (par exemple, le format de telephone HubSpot vs Salesforce, les codes pays, les formats de date)." },
                      { title: "Mapping des proprietes custom", desc: "Les 108 proprietes non mappees ont ete analysees une par une. 67 d\u2019entre elles ont ete mappees vers des champs Salesforce existants ou nouvellement crees. 28 ont ete jugees non pertinentes pour la synchronisation (proprietes internes au marketing). 13 ont ete fusionnees ou supprimees car redondantes." },
                      { title: "Gestion des objets custom Salesforce", desc: "La filiale utilisait 4 objets custom dans Salesforce (Product Interest, Partner Relationship, Contract Details, Implementation Status). On a configure des proprietes HubSpot correspondantes et mis en place des workflows pour maintenir la coherence entre les deux systemes, car le connecteur natif ne gere pas les objets custom de maniere bidirectionnelle." },
                      { title: "Regles de sync bidirectionnelle", desc: "Pour chaque champ mappe, on a defini une regle de priorite claire basee sur la logique metier. Les champs marketing (source, UTM, score, engagement) : priorite HubSpot. Les champs sales (stage du deal, owner, montant, date de closing) : priorite Salesforce. Les champs partages (lifecycle stage, adresse, telephone) : toujours la mise a jour la plus recente qui gagne." },
                      { title: "Gestion des conflits et des picklists", desc: "On a harmonise toutes les valeurs de picklist entre les deux systemes. Chaque dropdown dans HubSpot devait avoir exactement les memes valeurs que son equivalent Salesforce. On a cree un document de reference listant chaque correspondance de valeur pour les 23 picklists synchronisees." },
                      { title: "Validation et tests", desc: "Chaque mapping a ete teste individuellement : creation d\u2019un contact test dans HubSpot, verification de la synchronisation dans Salesforce, modification dans Salesforce, verification du retour dans HubSpot. 180 tests executes, 12 anomalies detectees et corrigees avant la mise en production." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Champs remappes", value: "180" },
                      { label: "Objets custom geres", value: "4" },
                      { label: "Picklists harmonisees", value: "23" },
                      { label: "Tests executes", value: "180" },
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

              {/* Optimisation du flux de leads */}
              <section id="flux-leads" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Lead flow</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Optimisation du flux de leads</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le flux de leads entre HubSpot et Salesforce est le nerf de la guerre. Quand un contact devient MQL dans HubSpot, il doit arriver dans Salesforce au bon moment, avec les bonnes informations, assigne au bon commercial, dans le bon format. On a reconstruit ce flux de A a Z.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Definition du MQL revisitee", desc: "On a redefini les criteres de MQL en collaboration avec les equipes marketing et sales. Un lead devient MQL quand il atteint un score de 70 points (engagement + fit demographique) ET qu\u2019il a realise au moins une action a forte intention (demande de demo, telechargement de cas client, visite page pricing). Plus de MQL \"accidentels\" qui polluent le pipeline sales.", color: "#6C5CE7" },
                      { title: "Creation automatique dans Salesforce", desc: "Quand un contact atteint le statut MQL dans HubSpot, un Lead est automatiquement cree dans Salesforce via le connecteur. On a configure les regles pour que le Lead soit cree (et non un Contact direct) pour respecter le process de qualification Salesforce. Si le contact existe deja dans Salesforce, il est mis a jour plutot que duplique.", color: "#4B5EFC" },
                      { title: "Assignment rules intelligentes", desc: "L\u2019attribution du lead au bon commercial est automatisee. Les regles de routing tiennent compte du pays, du secteur d\u2019activite, de la taille de l\u2019entreprise et de la source du lead. Un round-robin par equipe assure une repartition equitable. Le lead est assigne en moins de 5 minutes apres le passage en MQL.", color: "#22C55E" },
                      { title: "Donnees transmises au handoff", desc: "Au moment du passage, le commercial recoit une fiche complete : source originale, pages visitees, contenus telecharges, score marketing detaille, historique des interactions email, et un resume des centres d\u2019interet du prospect. Le commercial sait exactement a qui il parle avant de decrocher le telephone.", color: "#FF7A59" },
                    ].map((m) => (
                      <div key={m.title} className="rounded-xl bg-white/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: m.color }} />
                          <p className="text-[13px] font-semibold text-white">{m.title}</p>
                        </div>
                        <p className="text-[11px] text-white/40 leading-[1.6]">{m.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-white/5 p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Le parcours du lead optimise</p>
                    <div className="space-y-2">
                      {[
                        { step: "01", label: "Visiteur anonyme arrive sur le site via une campagne marketing (SEA, SEO, LinkedIn Ads)" },
                        { step: "02", label: "Conversion : le visiteur remplit un formulaire HubSpot et devient un contact avec source trackee" },
                        { step: "03", label: "Nurturing : le contact recoit des emails cibles, visite des pages, accumule des points de scoring" },
                        { step: "04", label: "MQL : le score atteint 70 points + action a forte intention detectee dans HubSpot" },
                        { step: "05", label: "Sync : le contact est automatiquement cree comme Lead dans Salesforce avec toutes ses proprietes" },
                        { step: "06", label: "Assignment : le Lead est attribue au bon commercial selon les regles de routing configurees" },
                        { step: "07", label: "Notification : le commercial recoit une alerte avec la fiche complete du prospect" },
                        { step: "08", label: "Feedback : le statut Salesforce (SQL, Opportunity, Won/Lost) remonte dans HubSpot pour le reporting" },
                      ].map((t) => (
                        <div key={t.step} className="flex items-center gap-3">
                          <span className="text-[10px] font-mono text-[#6C5CE7] w-8 shrink-0">{t.step}</span>
                          <div className="flex-1 h-px bg-white/10" />
                          <span className="text-[10px] text-white/50">{t.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Attribution cross-platform */}
              <section id="attribution" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Attribution cross-platform</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;un des problemes les plus douloureux pour l&apos;equipe marketing : impossible de prouver le ROI de leurs campagnes. Les UTM et les sources marketing capturees dans HubSpot ne remontaient pas dans Salesforce. Quand un deal etait gagne dans Salesforce, personne ne pouvait dire quelle campagne l&apos;avait genere.</p>
                    <p>On a mis en place une architecture d&apos;attribution qui traverse les deux systemes, de la premiere visite sur le site jusqu&apos;au deal signe dans Salesforce.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Capture des UTM dans HubSpot", desc: "On a configure le tracking HubSpot pour capturer systematiquement les 5 parametres UTM (source, medium, campaign, term, content) sur chaque formulaire et chaque page du site. Les UTM sont stockes dans des proprietes dediees sur le contact, avec un historique : first touch (premier UTM) et last touch (dernier UTM avant conversion).", color: "#6C5CE7" },
                      { title: "Sync des donnees d\u2019attribution vers Salesforce", desc: "On a cree les champs correspondants dans Salesforce (Original Source, Original Medium, Original Campaign, Latest Source, Latest Medium, Latest Campaign) et configure le mapping bidirectionnel. Chaque lead cree dans Salesforce porte desormais ses donnees d\u2019attribution marketing.", color: "#4B5EFC" },
                      { title: "Attribution sur les deals Salesforce", desc: "On a configure des formules Salesforce pour que les deals heritent automatiquement des donnees d\u2019attribution du contact principal. Quand un deal est gagne, on sait exactement quelle campagne a genere le premier contact et quelle campagne a declenche la derniere conversion.", color: "#22C55E" },
                      { title: "Reporting d\u2019attribution unifie", desc: "On a construit un rapport d\u2019attribution qui combine les donnees des deux systemes : nombre de leads par source (HubSpot), taux de conversion par source (Salesforce), revenue genere par campagne (Salesforce), cout par lead par canal (HubSpot + donnees publicitaires). Le marketing peut enfin dire : \"La campagne LinkedIn Q3 a genere 45 leads, dont 12 sont devenus des deals, pour un revenu de 180K euros\".", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 items-start rounded-xl border border-[#F2F2F2] p-3">
                        <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={{ background: item.color }} />
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /></div>
                      <span className="text-[10px] text-white/50 font-mono">Modele d&apos;attribution</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[11px] text-[#E0E0E0] leading-[1.8] whitespace-pre-wrap font-mono">
{`First Touch (HubSpot)          Last Touch (HubSpot)
  utm_source: linkedin             utm_source: google
  utm_medium: paid                 utm_medium: cpc
  utm_campaign: q3-awareness       utm_campaign: brand-search
         |                                |
         v                                v
  [Contact cree]  -->  [Nurturing]  -->  [MQL]
         |                                |
         +------> Sync vers Salesforce <--+
                         |
                         v
                  Lead Salesforce
                  Original Source: linkedin / paid
                  Latest Source: google / cpc
                         |
                         v
                  Opportunity --> Deal Won
                  Attribution: linkedin / paid (first touch)
                               google / cpc (last touch)
                  Revenue: associe aux deux sources`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Automatisation et workflows */}
              <section id="automatisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Automatisation et workflows</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une fois le mapping et le flux de leads en place, on a construit une couche d&apos;automatisation pour que les deux systemes communiquent en temps reel, sans intervention manuelle. L&apos;objectif : chaque evenement significatif dans un systeme declenche la bonne action dans l&apos;autre.</p>
                  </div>

                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Workflow MQL : HubSpot vers Salesforce", desc: "Quand un contact atteint le statut MQL dans HubSpot, un workflow declenche automatiquement : creation du Lead dans Salesforce, attribution au bon commercial, notification Slack dans le channel #new-mqls, et envoi d\u2019un email interne au commercial avec la fiche du prospect. Temps de reaction moyen passe de 48h a 15 minutes.", color: "#6C5CE7" },
                      { num: "2", title: "Workflow SQL : Salesforce vers HubSpot", desc: "Quand un commercial qualifie un lead en SQL dans Salesforce, l\u2019information remonte automatiquement dans HubSpot. Le lifecycle stage est mis a jour, le contact est retire des sequences de nurturing marketing, et une propriete \"Date SQL\" est renseignee pour le reporting du funnel.", color: "#4B5EFC" },
                      { num: "3", title: "Workflow Deal Won : notification cross-platform", desc: "Quand un deal est marque comme gagne dans Salesforce, un workflow HubSpot met a jour le lifecycle stage en \"Customer\", declenche un workflow d\u2019onboarding, notifie l\u2019equipe marketing dans #wins avec le detail du deal (montant, source, duree du cycle), et enregistre l\u2019attribution pour le reporting.", color: "#22C55E" },
                      { num: "4", title: "Workflow Deal Lost : feedback loop", desc: "Quand un deal est perdu dans Salesforce, la raison de la perte est synchronisee dans HubSpot. Le contact est reintegre dans une sequence de nurturing long-terme adaptee a la raison de perte (\"budget\" : contenu ROI, \"timing\" : rappel dans 6 mois, \"concurrent\" : contenu differentiation). Le marketing recoit une analyse mensuelle des raisons de perte.", color: "#FF7A59" },
                      { num: "5", title: "Mises a jour croisees en temps reel", desc: "Au-dela des grands evenements, on a configure des mises a jour continues : changement de owner dans Salesforce replique dans HubSpot, mise a jour de l\u2019adresse dans HubSpot repliquee dans Salesforce, ajout d\u2019une note dans Salesforce visible dans la timeline HubSpot. Les deux systemes restent synchronises en permanence.", color: "#6C5CE7" },
                      { num: "6", title: "Alertes et garde-fous", desc: "On a mis en place des workflows de surveillance : alerte si un MQL n\u2019est pas contacte dans les 24h, alerte si un deal stagne plus de 30 jours sans activite, alerte si une erreur de sync est detectee. Un rapport hebdomadaire automatique liste les anomalies de synchronisation pour l\u2019administrateur CRM.", color: "#4B5EFC" },
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
                        {i < 5 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Workflows crees", value: "14" },
                      { label: "Notifications auto", value: "8" },
                      { label: "Alertes configurees", value: "6" },
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

              {/* Dashboards et reporting unifie */}
              <section id="dashboards" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Dashboards et reporting unifie</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avoir des donnees synchronisees ne sert a rien si personne ne les regarde. On a construit une couche de reporting qui donne a chaque equipe exactement les metriques dont elle a besoin, dans l&apos;outil qu&apos;elle utilise au quotidien, avec une vue consolidee pour le management.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Dashboard Marketing (HubSpot)", desc: "L\u2019equipe marketing accede a son dashboard dans HubSpot : volume de leads par source, taux de conversion par campagne, evolution du MQL, performance des emails et landing pages. Mais surtout, pour la premiere fois, le dashboard inclut les donnees Salesforce : combien de MQLs sont devenus SQL, combien ont genere des deals, et pour quel montant. Le marketing voit enfin l\u2019impact de son travail jusqu\u2019au revenu.", count: "12 rapports" },
                      { title: "Rapports Sales (Salesforce)", desc: "Les commerciaux gardent leurs rapports dans Salesforce : pipeline par etape, forecast, activite par commercial, taux de conversion par segment. On a enrichi ces rapports avec les donnees marketing syncees depuis HubSpot : source du lead, score marketing, contenus consommes, nombre d\u2019interactions avant le premier appel. Le commercial comprend le contexte de chaque prospect.", count: "8 rapports" },
                      { title: "Vue Management consolidee", desc: "Pour la direction, on a cree un dashboard de synthese qui combine les deux : cout d\u2019acquisition par canal (depenses marketing HubSpot + pipeline Salesforce), cycle de vente moyen par source, ROI par campagne, et un funnel complet du visiteur au client. Ce dashboard est envoye automatiquement chaque lundi matin par email au comite de direction.", count: "1 dashboard" },
                      { title: "Rapport d\u2019alignement marketing-sales", desc: "Un rapport mensuel automatise qui mesure la sante de la collaboration entre les deux equipes : temps de prise en charge des MQLs, taux d\u2019acceptation des leads par les sales, taux de feedback sur les leads rejetes, et couverture du pipeline par le marketing. Ce rapport alimente les reunions mensuelles d\u2019alignement.", count: "Mensuel" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-[#111]">{item.title}</p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-medium">{item.count}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /></div>
                      <span className="text-[10px] text-white/50 font-mono">Architecture du reporting</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[11px] text-[#E0E0E0] leading-[1.8] whitespace-pre-wrap font-mono">
{`HubSpot (Marketing)              Salesforce (Sales)
  - Leads par source               - Pipeline par etape
  - Taux conversion landing pages   - Forecast par commercial
  - Performance email/nurturing     - Activite et productivite
  - Score marketing moyen           - Taux de conversion SQL>Deal
         |                                   |
         +------ Donnees synchronisees ------+
                         |
                         v
              Vue Management consolidee
              - Funnel complet visiteur > client
              - CAC par canal
              - ROI par campagne
              - Cycle de vente par source
              - Rapport d'alignement mensuel`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats apres optimisation</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "100%", label: "Des leads sont desormais synchronises entre HubSpot et Salesforce, sans exception", color: "#22C55E" },
                      { value: "0", label: "Doublon entre les deux systemes grace aux regles de deduplication", color: "#4B5EFC" },
                      { value: "-80%", label: "D\u2019erreurs de synchronisation (de 2 300+ a moins de 50 par trimestre)", color: "#6C5CE7" },
                      { value: "100%", label: "De l\u2019attribution marketing preservee de la premiere visite au deal signe", color: "#FF7A59" },
                      { value: "15 min", label: "Temps moyen de prise en charge d\u2019un MQL (vs 48h avant le projet)", color: "#22C55E" },
                      { value: "1", label: "Vue unifiee du funnel pour le management, du visiteur au client", color: "#D4A27F" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Le marketing peut enfin mesurer l\u2019impact de ses campagnes jusqu\u2019au revenu genere dans Salesforce",
                      "Les commerciaux recoivent des leads qualifies avec un contexte marketing complet avant chaque appel",
                      "Les lifecycle stages sont synchronises en temps reel entre les deux plateformes",
                      "Les workflows cross-platform automatisent le handoff marketing-sales et le feedback loop",
                      "Le rapport d\u2019alignement mensuel a transforme la relation entre les deux equipes",
                      "L\u2019administrateur CRM passe 2 heures par semaine sur la maintenance de la connexion au lieu de 2 jours",
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
                    <div className="w-12 h-12 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[14px] font-bold shrink-0">E</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;On savait que notre connexion HubSpot-Salesforce ne fonctionnait pas bien, mais on ne mesurait pas l&apos;ampleur du probleme. 30% de nos leads qui ne passaient jamais dans Salesforce, c&apos;est enorme quand on y pense. Ceres a fait un audit complet, nous a montre exactement ou ca cassait, et a tout reconstruit proprement. Aujourd&apos;hui, chaque lead est synchronise, chaque campagne est tracee jusqu&apos;au deal, et pour la premiere fois, le marketing et les sales travaillent avec les memes donnees. Le rapport d&apos;alignement mensuel a change la dynamique entre les deux equipes. On ne se dispute plus sur les chiffres, on avance ensemble.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Directrice Marketing</p>
                          <p className="text-[11px] text-[#999]">Edenred (filiale)</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=edenred.com&sz=32" alt="Edenred" className="w-5 h-5 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Votre connexion HubSpot-Salesforce ne fonctionne pas comme elle devrait ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On audite, on reconfigure et on fiabilise votre integration HubSpot-Salesforce. Leads synces, attribution preservee, visibilite unifiee.</p>
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
