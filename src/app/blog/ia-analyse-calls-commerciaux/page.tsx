"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Analyser vos calls commerciaux avec l'IA : methode et resultats",
  description: "Guide complet pour analyser vos appels commerciaux avec l'IA. Workflow d'analyse (enregistrement, transcription, extraction), impact sur le coaching, patterns win vs loss, comparatif outils (Claap, Gong, Modjo) et limites a connaitre.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-analyse-calls-commerciaux" },
  articleSection: "IA & Automatisation",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "calls-non-exploites", title: "Des calls non exploites" },
  { id: "extraction-ia", title: "Ce que l'IA extrait" },
  { id: "workflow-complet", title: "Le workflow complet" },
  { id: "coaching-commercial", title: "Impact coaching" },
  { id: "patterns-win-loss", title: "Patterns win vs loss" },
  { id: "outils", title: "Les outils" },
  { id: "limites", title: "Les limites" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "L'IA dans le processus commercial : ou l'integrer pour vendre plus", slug: "ia-processus-commercial-vente-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Agents IA deployes chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Prompt engineering pour equipes commerciales", slug: "prompt-engineering-equipes-commerciales", category: "IA & Automatisation", color: "#6D00CC" },
];

export default function IaAnalyseCallsCommerciauxArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("calls-non-exploites");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Analyser%20vos%20calls%20commerciaux%20avec%20l%27IA&url=https://ceres.agency/blog/ia-analyse-calls-commerciaux" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/ia-analyse-calls-commerciaux" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">IA et calls commerciaux</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Analyser vos calls commerciaux avec l&apos;IA : methode et resultats
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Une equipe de 10 commerciaux passe 200 a 300 heures par mois en calls. C&apos;est la source d&apos;information la plus riche sur vos prospects : objections, besoins, signaux d&apos;achat, comparaisons concurrentielles. Et pourtant, 95% de ces donnees disparaissent. L&apos;IA change la donne. Ce guide explique comment exploiter chaque minute de call pour ameliorer le coaching, les process et les resultats.
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
              {/* Section 1 : Des centaines d'heures de calls non exploitees */}
              <section id="calls-non-exploites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Des centaines d&apos;heures de calls non exploitees</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le call commercial est le moment de verite. C&apos;est la que le prospect revele ses vrais besoins, ses objections reelles, son budget, son timeline, ses criteres de decision. Aucun formulaire, aucun email, aucune page visitee ne contient autant d&apos;information qualifiee.</p>
                    <p>Pourtant, apres le call, que se passe-t-il ? Le commercial redige un resume de 3 lignes dans le CRM. &ldquo;Call OK. Interesse. A rappeler dans 2 semaines.&rdquo; Les objections specifiques, les comparaisons avec des concurrents, les signaux d&apos;achat, le sentiment du prospect, tout ca disparait. Le manager n&apos;a aucune visibilite sur ce qui se passe reellement dans les calls.</p>
                    <p>Les chiffres sont parlants :</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "200-300h", label: "de calls par mois (equipe de 10)", color: "#6D00CC" },
                      { stat: "95%", label: "des insights de calls perdus", color: "#EF4444" },
                      { stat: "3 lignes", label: "resume CRM moyen apres un call", color: "#FF7A59" },
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

              {/* Section 2 : Ce que l'IA extrait d'un call */}
              <section id="extraction-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Ce que l&apos;IA extrait d&apos;un call</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA ne se contente pas de transcrire. Elle analyse, structure et extrait des donnees exploitables. Voici ce qu&apos;un agent IA produit a partir d&apos;un call de 30 minutes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { element: "Resume structure", desc: "Pas un verbatim. Un resume en 5-8 points avec les informations cles : contexte du prospect, besoin exprime, budget evoque, timeline, decision-makers identifies, prochaines etapes convenues. Le format est standardise pour tous les commerciaux, ce qui facilite le suivi.", color: "#6D00CC" },
                      { element: "Objections detectees", desc: "L'IA identifie chaque objection soulevee par le prospect : prix trop eleve, timing pas bon, fonctionnalite manquante, besoin de validation interne. Chaque objection est categorisee et liee a la reponse donnee par le commercial. Le manager voit en un coup d'oeil quelles objections reviennent le plus et comment l'equipe y repond.", color: "#EF4444" },
                      { element: "Next steps", desc: "Les actions convenues pendant le call sont extraites automatiquement : envoyer une proposition, planifier une demo technique, revenir dans 2 semaines. Ces next steps sont injectees dans le CRM comme taches avec deadline, sans intervention manuelle.", color: "#22C55E" },
                      { element: "Sentiment et engagement", desc: "L'IA analyse le ton, le rythme, les mots utilises pour evaluer le niveau d'engagement du prospect. Un prospect qui pose beaucoup de questions sur l'implementation est plus engage qu'un prospect qui ecoute passivement. Le score de sentiment est un indicateur precieux pour prioriser les follow-ups.", color: "#4B5EFC" },
                      { element: "Signaux d'achat", desc: "Questions sur les tarifs, demande de references, mention du budget, evocation d'un timeline precis, question sur les conditions contractuelles. Ces signaux sont detectes et remontes automatiquement pour alerter le manager et ajuster la strategie de closing.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.element} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.element}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Le workflow complet */}
              <section id="workflow-complet" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le workflow complet : du call au CRM</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;analyse de calls par IA fonctionne en 4 etapes, entierement automatisees. Le commercial ne fait rien de plus que son call habituel.</p>
                  </div>

                  <div className="my-6 space-y-4">
                    {[
                      { step: "1", title: "Enregistrement", desc: "Le call est enregistre automatiquement via l'outil de visio (Zoom, Google Meet, Teams) ou via un outil dedie (Claap, Gong, Modjo). Le prospect est informe conformement au RGPD. L'enregistrement se declenche automatiquement, aucune action du commercial.", color: "#6D00CC", time: "0 min" },
                      { step: "2", title: "Transcription", desc: "L'audio est transcrit en texte en quasi temps reel. Les modeles actuels (Whisper, Deepgram, AssemblyAI) atteignent 95-98% de precision en francais. La transcription est diarisee (chaque intervenant est identifie). Temps de traitement : quelques minutes apres le call.", color: "#4B5EFC", time: "2-5 min" },
                      { step: "3", title: "Analyse IA", desc: "Un agent IA (Claude, GPT-4) analyse la transcription selon un prompt structure : extraction du resume, des objections, des next steps, du sentiment, des signaux d'achat. Le prompt est calibre specifiquement pour votre contexte commercial (secteur, produit, cycle de vente).", color: "#22C55E", time: "30 sec" },
                      { step: "4", title: "Injection CRM", desc: "Les donnees extraites sont injectees automatiquement dans HubSpot (ou votre CRM) : note structuree sur le contact, taches pour les next steps, mise a jour des proprietes (budget evoque, timeline, objections). Le commercial retrouve tout dans le CRM sans avoir ecrit une seule ligne.", color: "#FF7A59", time: "10 sec" },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-bold" style={{ background: item.color }}>{item.step}</div>
                            <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                          </div>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#F2F2F2] text-[#999]">{item.time}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[12px] font-semibold text-[#111]">Temps total pour le commercial</p>
                      <p className="text-[18px] font-bold text-[#22C55E]">0 min</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]">Tout est automatique. Le commercial fait son call normalement. En 5 minutes apres le call, le CRM est mis a jour avec un resume structure, des taches et des proprietes enrichies. Avant l&apos;IA, ca prenait 15 a 20 minutes par call.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Impact coaching */}
              <section id="coaching-commercial" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;impact sur le coaching commercial</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le coaching commercial reposait historiquement sur le &ldquo;ride-along&rdquo; : le manager assiste a un call en live. C&apos;est chronophage (1h par call), biaise (le commercial se comporte differemment quand le manager ecoute) et non scalable (le manager ne peut ecouter que 2-3 calls par semaine).</p>
                    <p>Avec l&apos;analyse IA des calls, le coaching change completement de paradigme.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { before: "2-3 calls ecoutes par semaine", after: "100% des calls analyses", desc: "Le manager ne choisit plus quels calls ecouter. L'IA analyse tout et remonte les calls qui meritent attention : objections mal gerees, deals a risque, moments de coaching.", color: "#6D00CC" },
                      { before: "Feedback subjectif", after: "Feedback base sur les donnees", desc: "Au lieu de 'tu devrais poser plus de questions', le feedback devient 'sur tes 12 calls cette semaine, tu as pose en moyenne 4 questions de decouverte. Les top performers en posent 8. Voici les 3 calls ou c'est le plus visible.'", color: "#4B5EFC" },
                      { before: "Coaching reactif", after: "Coaching proactif", desc: "L'IA detecte les tendances avant que le manager les voie. Si un commercial mentionne de moins en moins la valeur differenciante, si les objections prix augmentent sur un segment, l'IA remonte l'alerte.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.before} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444] text-[10px] font-medium">{item.before}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-medium">{item.after}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Resultat mesurable chez nos clients</strong> : les equipes qui utilisent l&apos;analyse IA des calls voient leur win rate augmenter de 3 a 6 points en 3 mois. Pas parce que l&apos;IA vend a leur place, mais parce que le coaching est plus precis, plus frequent et base sur des donnees objectives.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Patterns win vs loss */}
              <section id="patterns-win-loss" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les patterns qu&apos;on decouvre : win vs loss</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Quand vous analysez 500+ calls avec l&apos;IA, des patterns emergent. Des differences systematiques entre les deals gagnes et les deals perdus. Ces patterns sont invisibles a l&apos;oeil nu, mais l&apos;IA les detecte en croisant les analyses de centaines de conversations.</p>
                  </div>

                  <div className="my-6 overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="border-b border-[#E8E8E8]">
                          <th className="text-left py-3 pr-3 text-[#999] font-semibold">Pattern</th>
                          <th className="text-center py-3 px-2 text-[#22C55E] font-semibold">Deals gagnes</th>
                          <th className="text-center py-3 px-2 text-[#EF4444] font-semibold">Deals perdus</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { pattern: "Questions de decouverte", win: "8-12 par call", loss: "3-5 par call" },
                          { pattern: "Ratio parole commercial/prospect", win: "40/60", loss: "65/35" },
                          { pattern: "Mention de la concurrence", win: "Abordee proactivement", loss: "Evitee ou subie" },
                          { pattern: "Next steps definis", win: "98% des calls", loss: "45% des calls" },
                          { pattern: "Multi-threading (plusieurs contacts)", win: "3+ contacts impliques", loss: "1 seul contact" },
                          { pattern: "Discussion budget", win: "Abordee au call 2", loss: "Jamais abordee ou au call 4+" },
                          { pattern: "Temps de reponse post-call", win: "<2h pour le follow-up", loss: ">24h pour le follow-up" },
                        ].map((row) => (
                          <tr key={row.pattern} className="border-b border-[#F2F2F2]">
                            <td className="py-2.5 pr-3 font-medium text-[#111]">{row.pattern}</td>
                            <td className="py-2.5 px-2 text-center">
                              <span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">{row.win}</span>
                            </td>
                            <td className="py-2.5 px-2 text-center">
                              <span className="inline-block px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444] font-medium">{row.loss}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le pattern le plus revelateur</strong> est souvent le ratio de parole. Les commerciaux qui parlent 65% du temps pensent maitriser le call. En realite, ils ne qualifient pas. Les meilleurs laissent le prospect parler 60% du temps parce qu&apos;ils posent les bonnes questions et ecoutent les reponses.</p>
                    <p>Ces patterns, une fois identifies, deviennent la base du playbook commercial. Ils transforment l&apos;intuition en methode reproductible.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Les outils */}
              <section id="outils" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les outils : specialises vs IA generique</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Deux approches coexistent pour l&apos;analyse de calls : les outils specialises (Claap, Gong, Modjo) et les solutions basees sur l&apos;IA generique (Whisper + Claude/GPT via Make ou n8n). Chaque approche a ses forces.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        tool: "Claap",
                        type: "Specialise",
                        price: "30-50 EUR/utilisateur/mois",
                        pros: "Interface pensee pour les sales. Bibliotheque de calls. Coaching integre. Bonne reconnaissance du francais.",
                        cons: "Cout eleve pour les grandes equipes. Personnalisation limitee des analyses.",
                        icon: "Cp", iconBg: "#22C55E"
                      },
                      {
                        tool: "Gong",
                        type: "Specialise",
                        price: "100-150 EUR/utilisateur/mois",
                        pros: "Le plus complet. Deal intelligence, forecast, coaching avance. Benchmark interne automatique.",
                        cons: "Prix eleve. Setup complexe. Mieux adapte aux equipes de 20+ commerciaux. Support francais limite.",
                        icon: "Go", iconBg: "#6C5CE7"
                      },
                      {
                        tool: "Modjo",
                        type: "Specialise",
                        price: "40-70 EUR/utilisateur/mois",
                        pros: "Francais natif. Bonne integration HubSpot et Salesforce. Interface claire. Support reactif.",
                        cons: "Moins de fonctionnalites avancees que Gong. Analyse IA moins profonde.",
                        icon: "Mo", iconBg: "#4B5EFC"
                      },
                      {
                        tool: "IA generique (Whisper + Claude + Make)",
                        type: "Custom",
                        price: "5-15 EUR/utilisateur/mois",
                        pros: "10x moins cher. Entierement personnalisable. Extraction sur mesure adaptee a votre contexte exact. Integration CRM profonde.",
                        cons: "Necessite un setup technique initial (4-8h). Pas d'interface dediee. Maintenance du prompt et du workflow.",
                        icon: "Cl", iconBg: "#D4A27F"
                      },
                    ].map((item) => (
                      <div key={item.tool} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[9px] font-bold" style={{ background: item.iconBg }}>{item.icon}</div>
                          <div className="flex-1">
                            <p className="text-[12px] font-semibold text-[#111]">{item.tool}</p>
                            <p className="text-[10px] text-[#999]">{item.type}</p>
                          </div>
                          <span className="text-[11px] font-medium text-[#6D00CC]">{item.price}</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="rounded-lg bg-[#22C55E]/5 p-2">
                            <p className="text-[10px] text-[#22C55E] font-semibold mb-1">Avantages</p>
                            <p className="text-[10px] text-[#777] leading-[1.5]">{item.pros}</p>
                          </div>
                          <div className="rounded-lg bg-[#EF4444]/5 p-2">
                            <p className="text-[10px] text-[#EF4444] font-semibold mb-1">Limites</p>
                            <p className="text-[10px] text-[#777] leading-[1.5]">{item.cons}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Notre recommandation</strong> : pour les equipes de moins de 10 commerciaux, la solution IA generique offre le meilleur rapport qualite/prix. Pour les equipes de 10 a 30, Claap ou Modjo sont de bons choix. Au-dela de 30, Gong devient rentable grace a ses fonctionnalites de deal intelligence et de forecast.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Les limites */}
              <section id="limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les limites : ce que l&apos;IA ne fait pas encore bien</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;analyse IA des calls est puissante, mais pas parfaite. Voici les limites reelles a connaitre avant de deployer.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { limite: "Bruit de fond et qualite audio", desc: "Les calls en environnement bruyant (open space, deplacement) produisent des transcriptions de mauvaise qualite. Un taux d'erreur de transcription superieur a 10% rend l'analyse IA peu fiable. Solution : casques avec microphone directionnel et outils de reduction de bruit (Krisp).", color: "#EF4444" },
                      { limite: "Accents et jargon technique", desc: "Les modeles de transcription progressent vite, mais les accents prononces et le jargon metier specifique restent des zones de faiblesse. Un commercial qui parle de 'MRR net retention cohort-based' en francais avec un accent du sud va generer des erreurs. Solution : enrichir le vocabulaire personnalise de l'outil de transcription.", color: "#FF7A59" },
                      { limite: "Contexte implicite", desc: "L'IA ne sait pas que le prospect a deja parle a un concurrent la semaine derniere, que son entreprise vient de lever des fonds ou qu'il est ami avec votre CEO. Le contexte implicite est perdu. Solution : enrichir l'analyse avec les donnees CRM (historique des interactions, proprietes du contact, notes precedentes).", color: "#6C5CE7" },
                      { limite: "RGPD et consentement", desc: "L'enregistrement des calls necessite le consentement explicite du prospect. En B2B francais, la pratique est de prevenir en debut de call ('cet appel est enregistre pour ameliorer notre service'). Mais certains prospects refusent, et vous devez respecter ce refus. Solution : prevoir un process clair et un fallback sans enregistrement.", color: "#4B5EFC" },
                    ].map((item) => (
                      <div key={item.limite} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.limite}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ces limites sont reelles mais geables. Elles ne doivent pas bloquer le deploiement. Meme avec un taux d&apos;erreur de 5-8% sur la transcription, l&apos;analyse IA produit des resultats 10x superieurs a ce que les commerciaux redigent manuellement. L&apos;ennemi du bien n&apos;est pas le parfait, c&apos;est le statu quo.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Notre approche */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on deploie l&apos;analyse IA des calls comme un composant integre du RevOps, pas comme un outil isole. L&apos;analyse de calls alimente le CRM, le coaching, le scoring et le reporting dans un systeme unifie.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Setup en 1 semaine", desc: "Connexion de l'outil d'enregistrement, configuration du pipeline de transcription, calibrage du prompt d'analyse sur vos 10 derniers calls, integration CRM. Operationnel en 5 jours.", color: "#6D00CC" },
                      { title: "Prompts calibres sur votre contexte", desc: "On ne prend pas un prompt generique. On analyse vos 20-30 derniers calls pour comprendre le vocabulaire, les objections recurrentes, la structure de vos conversations. Le prompt est ensuite calibre specifiquement.", color: "#4B5EFC" },
                      { title: "Integration CRM profonde", desc: "Pas juste une note dans le CRM. Les objections deviennent des proprietes. Les next steps deviennent des taches. Le sentiment alimente le scoring. Les signaux d'achat mettent a jour le deal stage.", color: "#22C55E" },
                      { title: "Dashboard coaching", desc: "Un dashboard dans HubSpot qui montre par commercial : nombre de questions posees, ratio de parole, objections les plus frequentes, score de sentiment moyen, taux de next steps definis. Le manager coach avec des donnees.", color: "#FF7A59" },
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
                    <p className="text-[12px] font-semibold text-white mb-3">Resultats moyens constates</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "+4pts", label: "Win rate a M+3", color: "#22C55E" },
                        { stat: "20 min", label: "Gagnes par call", color: "#6D00CC" },
                        { stat: "100%", label: "Des calls analyses", color: "#4B5EFC" },
                        { stat: "3x", label: "Plus de coaching sessions", color: "#FF7A59" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chaque minute de call contient des donnees qui peuvent ameliorer votre processus commercial. L&apos;IA les extrait. Le RevOps les transforme en actions. Les commerciaux en beneficient sans effort supplementaire. C&apos;est ca, l&apos;intelligence commerciale augmentee.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Analyser vos calls avec l&apos;IA ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">On deploie l&apos;analyse IA des calls en 1 semaine, integree a votre CRM et a votre process de coaching. 20 minutes gagnees par call, 100% des conversations analysees, coaching base sur les donnees. Commencez par un diagnostic gratuit.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6D00CC] text-white rounded-lg text-[13px] font-medium hover:bg-[#5C00AD] transition-colors">
                  Diagnostiquer vos calls
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
