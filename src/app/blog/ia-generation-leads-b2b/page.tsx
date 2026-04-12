"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Generation de leads B2B avec l'IA : methodes et outils",
  description: "Guide complet sur la generation de leads B2B avec l'IA. Identification ICP, enrichissement automatique, scoring predictif, personnalisation des messages, chatbots IA et metriques de performance.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-generation-leads-b2b" },
  articleSection: "IA & Agents",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "ia-change-leadgen", title: "L'IA change la generation de leads" },
  { id: "identifier-icp", title: "Identifier son ICP avec l'IA" },
  { id: "enrichissement-automatique", title: "L'enrichissement automatique" },
  { id: "scoring-predictif", title: "Le scoring predictif" },
  { id: "personnalisation-messages", title: "La personnalisation des messages" },
  { id: "chatbots-ia", title: "Les chatbots IA" },
  { id: "metriques-generation", title: "Les metriques" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Comparatif outils de generation de leads et enrichissement B2B", slug: "comparatif-outils-generation-leads-enrichissement", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Lead scoring : le guide complet pour qualifier vos leads B2B", slug: "lead-scoring-guide-complet", category: "Process & Outils", color: "#4B5EFC" },
  { title: "IA et scoring predictif : le futur du lead scoring B2B", slug: "ia-scoring-predictif-lead-scoring", category: "IA & Agents", color: "#6D00CC" },
];

export default function IaGenerationLeadsB2bArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("ia-change-leadgen");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Generation%20de%20leads%20B2B%20avec%20l%27IA&url=https://ceres.agency/blog/ia-generation-leads-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/ia-generation-leads-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Generation de leads B2B avec l&apos;IA</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Agents</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Generation de leads B2B avec l&apos;IA : methodes et outils
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                L&apos;IA ne change pas seulement le volume de leads que vous pouvez generer. Elle change fondamentalement la qualite. Identifier votre ICP a partir des patterns de vos clients gagnes, enrichir automatiquement chaque lead, scorer avec un modele predictif et personnaliser vos messages a grande echelle. Ce guide couvre les methodes concretes et les outils qui fonctionnent en 2026.
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
              <section id="ia-change-leadgen" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;IA change la generation de leads : pas juste le volume, la qualite</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pendant des annees, la generation de leads B2B etait un jeu de volume. Plus de contacts dans la base, plus d&apos;emails envoyes, plus de calls passes. Les outils d&apos;automatisation ont permis d&apos;envoyer des milliers d&apos;emails par jour. Le resultat : des taux de reponse qui s&apos;effondrent et des prospects qui en ont assez.</p>
                    <p>L&apos;IA change la donne, mais pas comme la plupart le pensent. Le vrai changement n&apos;est pas d&apos;envoyer encore plus d&apos;emails. C&apos;est de cibler les bons prospects, avec le bon message, au bon moment. C&apos;est un changement de paradigme : de la quantite a la precision.</p>
                    <p>Trois evolutions concretes marquent ce changement :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">L&apos;ICP data-driven.</strong> Au lieu de definir votre ICP (Ideal Customer Profile) sur des intuitions, l&apos;IA analyse vos clients gagnes et identifie les patterns communs : taille, secteur, technos utilisees, signaux d&apos;achat. L&apos;ICP devient un modele statistique, pas une liste de criteres subjectifs.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">L&apos;enrichissement en temps reel.</strong> Chaque lead est enrichi automatiquement avec des donnees firmographiques, technographiques et des signaux d&apos;intent. Le commercial n&apos;a plus besoin de passer 20 minutes a chercher des informations. Il a tout dans le CRM.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">La personnalisation pertinente.</strong> L&apos;IA genere des messages qui font reference a des elements concrets du prospect : son actualite, ses defis, son contexte. Ce n&apos;est plus du mail merge avec un prenom. C&apos;est un email qui ressemble a un email ecrit par un humain qui a fait ses recherches.</li>
                    </ul>
                    <p>Le resultat mesurable : les equipes qui passent a la generation de leads assistee par IA constatent en moyenne une augmentation de 40% du taux de conversion lead-to-meeting et une reduction de 60% du temps passe par lead.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "+40%", label: "taux de conversion lead-to-meeting", color: "#22C55E" },
                      { stat: "-60%", label: "temps passe par lead", color: "#4B5EFC" },
                      { stat: "3x", label: "meilleur ratio qualite/volume", color: "#6D00CC" },
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
              <section id="identifier-icp" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Identifier son ICP avec l&apos;IA : les patterns des clients gagnes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La plupart des entreprises definissent leur ICP dans un Google Doc. &ldquo;PME de 50 a 200 employes, secteur tech, basees en France.&rdquo; C&apos;est un point de depart, mais c&apos;est trop vague pour etre actionnable. L&apos;IA permet d&apos;aller beaucoup plus loin en analysant vos donnees CRM.</p>
                    <p><strong className="text-[#111]">La methode.</strong> Exportez les 50 a 100 derniers clients gagnes avec toutes les donnees disponibles : taille, secteur, localisation, revenu, technos utilisees, source du lead, cycle de vente, deal size, persona decision maker. L&apos;IA analyse ces donnees et identifie les clusters, les correlations et les patterns que l&apos;humain ne voit pas.</p>
                    <p><strong className="text-[#111]">Ce que l&apos;IA decouvre.</strong> Des correlations non evidentes. Par exemple : vos meilleurs clients ne sont pas les plus gros, mais ceux qui utilisent deja un outil specifique (Salesforce, HubSpot, Slack). Ou bien : les deals gagnes les plus rapidement viennent d&apos;entreprises qui ont recrute un VP Sales dans les 6 derniers mois. Ces insights sont invisibles a l&apos;oeil nu mais transforment votre ciblage.</p>
                    <p><strong className="text-[#111]">L&apos;anti-ICP.</strong> Aussi important que l&apos;ICP : identifier les profils a eviter. Les entreprises qui signent puis churnent en 3 mois. Les deals qui prennent 6 mois a closer pour un ACV faible. Les prospects qui consomment du temps commercial sans jamais signer. L&apos;IA identifie aussi ces patterns negatifs.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#6D00CC]/20 bg-[#6D00CC]/5 p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-3">Exemple de decouverte IA sur un ICP</p>
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 shrink-0" /><span className="text-[#666]"><strong className="text-[#111]">Pattern 1 :</strong> 78% des clients gagnes utilisent deja HubSpot (vs 30% du marche)</span></div>
                      <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 shrink-0" /><span className="text-[#666]"><strong className="text-[#111]">Pattern 2 :</strong> Le cycle moyen est 2x plus court quand le VP Sales a moins de 12 mois dans le poste</span></div>
                      <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 shrink-0" /><span className="text-[#666]"><strong className="text-[#111]">Anti-pattern :</strong> Les entreprises de moins de 20 employes churnent a 45% en 6 mois</span></div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="enrichissement-automatique" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;enrichissement automatique : donnees firmographiques et intent</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un lead avec un nom et un email, ca ne vaut rien. Un lead avec la taille de l&apos;entreprise, les technos utilisees, le dernier recrutement, les levees de fonds recentes et les sujets recherches en ligne, ca vaut de l&apos;or. L&apos;enrichissement automatique transforme un contact brut en un profil actionnable.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { type: "Firmographiques", desc: "Taille, revenu, secteur, localisation, date de creation, nombre d'employes, croissance. Ces donnees permettent de verifier le fit avec votre ICP. Sources : Apollo, Clearbit, Clay.", color: "#4B5EFC", examples: "50-200 employes, SaaS, Paris, 12M EUR ARR, +30% croissance" },
                      { type: "Technographiques", desc: "Outils et technologies utilisees par l'entreprise. CRM, marketing automation, stack technique. Permet d'identifier les entreprises avec un besoin lie a votre offre. Sources : BuiltWith, Wappalyzer, Clay.", color: "#6D00CC", examples: "HubSpot, Salesforce, Marketo, AWS, Stripe" },
                      { type: "Intent data", desc: "Signaux d'intention d'achat. Recherches en ligne sur des sujets lies a votre offre, visites sur des sites concurrents, contenus telecharges. Les signaux d'intent sont le Saint Graal du ciblage. Sources : Bombora, G2, 6sense.", color: "#22C55E", examples: "Recherche 'CRM migration', visite page pricing concurrent" },
                      { type: "Signaux contextuels", desc: "Recrutements recents (recrutent un VP Sales = besoin de structurer), levees de fonds (budget disponible), changements de direction, fusions-acquisitions. Sources : LinkedIn, Crunchbase, press releases.", color: "#FF7A59", examples: "Recrute 3 SDR, levee Serie A de 5M EUR, nouveau CEO" },
                    ].map((item) => (
                      <div key={item.type} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.type}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="rounded-lg bg-[#FAFAFA] p-2">
                          <p className="text-[10px] text-[#999]"><strong className="text-[#888]">Exemples :</strong> {item.examples}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le workflow d&apos;enrichissement.</strong> Un nouveau lead entre dans le CRM (formulaire, import, API). Un workflow automatique declenche l&apos;enrichissement via Clay ou Apollo : donnees firmographiques, technographiques et signaux contextuels sont ajoutes au contact et a la company en moins de 30 secondes. Le lead est ensuite automatiquement score et route vers le bon commercial.</p>
                    <p>Cout moyen de l&apos;enrichissement : 0,05 a 0,20 EUR par lead. Sur 1 000 leads par mois, ca represente 50 a 200 EUR. Pour comparaison, un SDR qui enrichit manuellement 1 000 leads passe 80 heures. A 22 EUR/h, ca coute 1 760 EUR. L&apos;IA est 10x moins chere et plus exhaustive.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="scoring-predictif" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le scoring predictif : au-dela des regles manuelles</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le lead scoring traditionnel repose sur des regles manuelles : +10 points si CEO, +5 points si ouvert un email, +20 points si demande de demo. Ces regles sont definies par l&apos;equipe marketing, souvent sur des intuitions, et rarement mises a jour. Resultat : des scores qui ne predisent rien.</p>
                    <p>Le scoring predictif par IA est fondamentalement different. Au lieu de regles manuelles, le modele apprend des donnees historiques. Il analyse les leads qui sont devenus clients et ceux qui ne l&apos;ont pas fait, et il identifie les facteurs les plus predictifs. Le score produit n&apos;est plus un chiffre arbitraire, c&apos;est une probabilite de conversion.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Scoring manuel", items: ["Regles definies par l'equipe", "10-15 criteres maximum", "Poids des criteres subjectifs", "Rarement mis a jour", "Precision : 30-40%"], color: "#EF4444" },
                      { title: "Scoring IA", items: ["Modele appris sur les donnees", "50+ variables analysees", "Poids determines par les patterns reels", "Mis a jour en continu", "Precision : 65-80%"], color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <div className="space-y-1.5">
                          {item.items.map((line) => (
                            <div key={line} className="flex items-start gap-2 text-[10px]">
                              <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
                              <span className="text-[#777]">{line}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les pre-requis.</strong> Le scoring predictif necessite des donnees. Au minimum 200 deals fermes (gagnes et perdus) sur les 12 derniers mois, avec les donnees d&apos;enrichissement associees. En dessous de ce seuil, le modele n&apos;a pas assez de donnees pour apprendre. Commencez par le scoring manuel et passez au predictif quand vous avez le volume de donnees necessaire.</p>
                    <p><strong className="text-[#111]">L&apos;implementation.</strong> Deux options. HubSpot Predictive Lead Scoring (natif dans Enterprise) : simple a activer, limitee aux donnees dans HubSpot. Custom avec Claude + Clay : plus flexible, integre des donnees externes (intent, technographiques), necessite un setup initial plus lourd mais produit des resultats superieurs.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="personnalisation-messages" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La personnalisation des messages : pertinence &gt; volume</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La generation de leads ne s&apos;arrete pas a l&apos;identification et a l&apos;enrichissement. Le moment de verite, c&apos;est le premier contact. Et c&apos;est la que l&apos;IA fait la plus grande difference : transformer des donnees brutes en messages pertinents.</p>
                    <p><strong className="text-[#111]">Les trois niveaux de personnalisation.</strong></p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { level: "Niveau 1 : Segment", desc: "Personnalisation par segment (secteur, taille, persona). Le meme message pour toutes les PME SaaS. Mieux que rien, mais les prospects le voient. Taux de reponse : 2-4%.", color: "#FF7A59", effort: "Faible", result: "2-4%" },
                      { level: "Niveau 2 : Company", desc: "Personnalisation au niveau entreprise. Reference a un element specifique de l'entreprise : actualite, recrutement, techno, resultat. L'IA genere cette personnalisation a partir des donnees d'enrichissement. Taux de reponse : 5-8%.", color: "#4B5EFC", effort: "Moyen (IA)", result: "5-8%" },
                      { level: "Niveau 3 : Individu", desc: "Personnalisation au niveau de la personne. Reference a un post LinkedIn, une intervention en conference, un article publie. L'IA scrape le profil individuel et trouve l'angle le plus pertinent. Taux de reponse : 10-15%.", color: "#22C55E", effort: "Eleve (IA + validation)", result: "10-15%" },
                    ].map((item) => (
                      <div key={item.level} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.level}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] text-[#999]">Effort : {item.effort}</span>
                            <span className="text-[10px] font-bold" style={{ color: item.color }}>Reply : {item.result}</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La strategie optimale.</strong> Niveau 3 pour les comptes strategiques (top 50 prospects). Niveau 2 pour le volume standard. Niveau 1 uniquement pour les tests de marche ou les segments non valides. L&apos;IA rend le niveau 2 aussi rapide que le niveau 1, ce qui en fait le standard minimum pour toute prospection serieuse.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="chatbots-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les chatbots IA : qualification en temps reel</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le chatbot IA n&apos;est plus le widget basique qui pose des questions en arbre de decision. En 2026, un chatbot IA peut tenir une conversation naturelle, qualifier un lead en posant les bonnes questions, repondre aux objections et booker un meeting directement dans l&apos;agenda du commercial.</p>
                    <p><strong className="text-[#111]">Comment ca fonctionne.</strong> Le chatbot est entraine sur votre base de connaissances : documentation produit, FAQ, cas clients, grille tarifaire, criteres de qualification. Quand un visiteur engage la conversation, le chatbot identifie son besoin, qualifie son profil (taille, secteur, budget, timeline) et decide en temps reel s&apos;il faut proposer un meeting, envoyer une ressource ou rediriger vers le bon contenu.</p>
                    <p><strong className="text-[#111]">Les resultats.</strong> Les entreprises qui deploient un chatbot IA sur leur site constatent en moyenne une augmentation de 30 a 50% des leads qualifies generes par le site web. Le taux de conversion visiteur-to-lead passe de 1-2% a 3-5%. Et les leads sont deja qualifies quand ils arrivent dans le CRM.</p>
                    <p><strong className="text-[#111]">Les limites.</strong> Le chatbot ne remplace pas un commercial pour les deals complexes. Il qualifie et route. Il repond aux questions simples. Il ne negocie pas, il ne gere pas les objections profondes, il ne comprend pas les nuances politiques d&apos;un achat B2B. Son role est de filtrer et d&apos;accelerer, pas de vendre.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[12px] font-semibold text-[#111]">Impact moyen d&apos;un chatbot IA</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { stat: "+35%", label: "leads qualifies", color: "#22C55E" },
                        { stat: "24/7", label: "disponibilite", color: "#4B5EFC" },
                        { stat: "< 30s", label: "temps de reponse", color: "#6D00CC" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[16px] font-bold" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#999]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="metriques-generation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les metriques de generation de leads IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les metriques classiques (nombre de leads, cout par lead) ne suffisent plus quand on passe a la generation IA. Il faut mesurer la qualite, pas seulement la quantite. Voici les 6 metriques qui comptent.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { metric: "ICP match rate", desc: "Pourcentage de leads generes qui correspondent a votre ICP. Objectif : > 70%. Si vous generez beaucoup de leads mais que 80% sont hors ICP, votre ciblage est mauvais.", color: "#6D00CC", target: "> 70%" },
                      { metric: "Enrichment completion", desc: "Pourcentage de leads pour lesquels l'enrichissement est complet (> 80% des champs remplis). Un lead non enrichi ne peut pas etre correctement score ni personalise.", color: "#4B5EFC", target: "> 85%" },
                      { metric: "Score-to-meeting conversion", desc: "Taux de conversion des leads a score eleve (top 20%) en meeting. Mesure la precision de votre scoring. Objectif : les top 20% de scores doivent representer > 60% des meetings.", color: "#22C55E", target: "> 60% des meetings" },
                      { metric: "Time-to-first-touch", desc: "Temps entre l'entree du lead dans le CRM et le premier contact commercial. L'IA doit reduire ce temps sous 5 minutes pour les leads inbound chauds.", color: "#FF7A59", target: "< 5 min" },
                      { metric: "Cost per qualified lead", desc: "Cout total (outils IA + enrichissement + temps humain) divise par le nombre de leads qualifies. Pas le nombre total de leads. Un lead non qualifie a un cout mais pas de valeur.", color: "#EF4444", target: "< 30 EUR" },
                      { metric: "Lead-to-revenue ratio", desc: "Revenu genere divise par le nombre de leads traites. La metrique ultime. Un bon ratio signifie que vous generez les bons leads, pas juste beaucoup de leads.", color: "#6C5CE7", target: "> 50 EUR/lead" },
                    ].map((item) => (
                      <div key={item.metric} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.metric}</span>
                          </div>
                          <span className="text-[10px] font-bold" style={{ color: item.color }}>{item.target}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La metrique a eviter : le nombre brut de leads. Generer 10 000 leads dont 200 sont qualifies n&apos;est pas mieux que generer 500 leads dont 200 sont qualifies. C&apos;est meme pire, parce que les 9 800 leads non qualifies ont consomme du budget et du temps.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on deploie des systemes de generation de leads IA qui privilegient la qualite sur le volume. Chaque lead genere est enrichi, score et personnalise avant d&apos;atteindre un commercial.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "ICP data-driven", desc: "Analyse de vos clients gagnes pour definir un ICP statistique. Criteres ponderes, anti-ICP, scoring des comptes cibles.", color: "#6D00CC" },
                      { title: "Enrichissement automatique", desc: "Pipeline Clay connecte au CRM. Chaque lead est enrichi en temps reel avec des donnees firmographiques, technographiques et des signaux d'intent.", color: "#4B5EFC" },
                      { title: "Scoring predictif", desc: "Modele de scoring base sur vos donnees historiques. Score de probabilite de conversion, mis a jour en continu.", color: "#22C55E" },
                      { title: "Personnalisation IA", desc: "Generation de messages personnalises via Claude, integree dans vos sequences HubSpot ou Lemlist. Validation humaine obligatoire.", color: "#FF7A59" },
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
                        { stat: "+40%", label: "leads qualifies", color: "#22C55E" },
                        { stat: "-60%", label: "temps par lead", color: "#4B5EFC" },
                        { stat: "3x", label: "taux de conversion", color: "#6D00CC" },
                        { stat: "< 0,20 EUR", label: "cout par enrichissement", color: "#FF7A59" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>La generation de leads IA n&apos;est pas un outil qu&apos;on branche et qu&apos;on oublie. C&apos;est un systeme qui s&apos;ameliore en continu a mesure que les donnees s&apos;accumulent et que le modele apprend. On accompagne nos clients dans la mise en place et dans l&apos;optimisation continue.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Passer a la generation de leads IA ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on deploie des systemes de generation de leads bases sur l&apos;IA. ICP data-driven, enrichissement automatique, scoring predictif et personnalisation a grande echelle. Commencez par un appel de 30 minutes.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6D00CC] text-white rounded-lg text-[13px] font-medium hover:bg-[#5C00B3] transition-colors">
                  Deployer la generation IA
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
