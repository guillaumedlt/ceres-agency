"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Segmentation CRM en B2B : la methode complete",
  description: "Guide complet de segmentation CRM en B2B. Les 4 types de segmentation (firmographique, comportementale, intent, lifecycle), implementation dans HubSpot, erreurs courantes, lien avec le scoring et la personnalisation, et apport de l'IA dans la segmentation.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/segmentation-crm-b2b-methode" },
  articleSection: "Data & Reporting",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "fondement", title: "Le fondement de tout" },
  { id: "quatre-types", title: "Les 4 types de segmentation" },
  { id: "segmenter-hubspot", title: "Segmenter dans HubSpot" },
  { id: "erreurs", title: "Les erreurs qui faussent tout" },
  { id: "segmentation-scoring", title: "Segmentation et scoring" },
  { id: "segmentation-personnalisation", title: "Segmentation et personnalisation" },
  { id: "segmentation-ia", title: "Segmentation et IA" },
  { id: "template", title: "Template de segmentation" },
];

const relatedArticles = [
  { title: "Data quality CRM : guide d'audit et de nettoyage", slug: "data-quality-crm-audit-nettoyage", category: "Data & Reporting", color: "#22C55E" },
  { title: "Lead scoring : le guide complet", slug: "lead-scoring-guide-complet", category: "Data & Reporting", color: "#22C55E" },
  { title: "IA et scoring predictif : au-dela du lead scoring classique", slug: "ia-scoring-predictif-lead-scoring", category: "IA & Automatisation", color: "#6D00CC" },
];

export default function SegmentationCrmB2bMethodeArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("fondement");

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
                  <a href="https://twitter.com/intent/tweet?text=Segmentation%20CRM%20en%20B2B%20%3A%20la%20methode%20complete&url=https://ceres.agency/blog/segmentation-crm-b2b-methode" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/segmentation-crm-b2b-methode" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Segmentation CRM B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Data &amp; Reporting</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Segmentation CRM en B2B : la methode complete
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Votre CRM contient 5 000 contacts. Ils recoivent tous le meme email, le meme scoring et le meme traitement. Resultat : 3% de taux de reponse, un scoring incoherent et des commerciaux qui perdent du temps sur les mauvais leads. La segmentation est ce qui transforme une base de donnees en machine a revenue. Ce guide vous donne la methode complete pour segmenter efficacement en B2B.
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
              {/* Section 1 : Le fondement */}
              <section id="fondement" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi la segmentation est le fondement de tout</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Sans segmentation, chaque action RevOps est approximative. Le nurturing est generique. Le scoring est une boite noire. Le reporting est agrege au point de ne rien dire. Les commerciaux traitent un CEO de startup et un ops manager de grand groupe de la meme facon. Ca ne marche pas.</p>
                    <p>La segmentation est le prerequis de 4 piliers du RevOps :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Le scoring.</strong> Un CEO SaaS qui visite la page pricing n&apos;a pas le meme poids qu&apos;un stagiaire qui telecharge un guide. La segmentation permet de ponderer differemment les memes actions selon le segment.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Le nurturing.</strong> Un segment &ldquo;startup early-stage&rdquo; recoit du contenu sur les fondamentaux. Un segment &ldquo;scale-up&rdquo; recoit du contenu sur l&apos;optimisation. La segmentation determine le contenu.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Le reporting.</strong> &ldquo;Win rate global : 24%&rdquo; ne dit rien. &ldquo;Win rate PME SaaS : 35%, win rate grands groupes : 12%&rdquo; dit tout. La segmentation rend le reporting actionnable.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">L&apos;allocation des ressources.</strong> Si 80% de votre revenue vient de 2 segments, vos commerciaux doivent passer 80% de leur temps sur ces segments. Sans segmentation, cette decision est impossible a prendre.</li>
                    </ul>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 : Les 4 types */}
              <section id="quatre-types" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 4 types de segmentation en B2B</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque type de segmentation repond a une question differente et s&apos;utilise a un moment different du funnel.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        type: "Firmographique",
                        question: "Qui est cette entreprise ?",
                        criteres: "Taille (effectif, CA), secteur d'activite, localisation, technologie utilisee, stade de croissance",
                        usage: "Qualification initiale. Identifier si l'entreprise correspond a votre ICP (Ideal Customer Profile). Filtrer les leads non qualifies avant qu'ils consomment du temps commercial.",
                        exemple: "Segment 'PME SaaS 20-100 employes' vs 'Grand groupe +500 employes industriel'. Deux ICP differents, deux approches commerciales differentes, deux cycles de vente differents.",
                        color: "#22C55E"
                      },
                      {
                        type: "Comportementale",
                        question: "Que fait ce contact ?",
                        criteres: "Pages visitees, emails ouverts/cliques, formulaires soumis, contenus telecharges, frequence de connexion, derniere activite",
                        usage: "Mesurer l'engagement reel. Un contact qui visite la page pricing 3 fois en une semaine est plus engage qu'un contact qui a telecharge un guide il y a 6 mois. La segmentation comportementale alimente le scoring dynamique.",
                        exemple: "Segment 'haute activite' (5+ pages/semaine, 3+ emails ouverts) vs 'dormant' (aucune activite 60 jours). Le premier entre dans une sequence de conversion, le second dans une sequence de re-engagement.",
                        color: "#4B5EFC"
                      },
                      {
                        type: "Par intent",
                        question: "Que cherche ce contact ?",
                        criteres: "Mots-cles recherches, contenus consommes, signaux d'intent tiers (G2, Capterra, recherches Google), demandes entrantes",
                        usage: "Identifier les prospects en phase d'achat active. L'intent data revele ce que le comportement ne montre pas toujours : un prospect peut ne pas visiter votre site mais rechercher activement votre categorie de solution.",
                        exemple: "Segment 'intent CRM' (a recherche 'meilleur CRM B2B' sur G2 cette semaine) vs 'intent automation' (a recherche 'automatiser processus commercial'). Deux messages differents, deux propositions de valeur differentes.",
                        color: "#6C5CE7"
                      },
                      {
                        type: "Par lifecycle",
                        question: "Ou en est ce contact dans le parcours ?",
                        criteres: "Lifecycle stage (subscriber, lead, MQL, SQL, opportunity, customer, evangelist), date de dernier changement de stage",
                        usage: "Adapter le traitement a la maturite du contact. Un subscriber ne recoit pas la meme communication qu'un SQL. Un customer ne recoit pas les memes emails qu'un prospect.",
                        exemple: "Segment 'nouveaux MQL cette semaine' : notification immediate au sales. Segment 'customers 12+ mois' : campagne upsell. Segment 'churned clients' : campagne winback.",
                        color: "#FF7A59"
                      },
                    ].map((item) => (
                      <div key={item.type} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.type}</span>
                          <span className="text-[10px] text-[#999] italic ml-2">{item.question}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="text-[10px] font-semibold text-[#999] shrink-0 mt-0.5 w-16">Criteres</span>
                            <p className="text-[11px] text-[#777] leading-[1.6]">{item.criteres}</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[10px] font-semibold text-[#999] shrink-0 mt-0.5 w-16">Usage</span>
                            <p className="text-[11px] text-[#777] leading-[1.6]">{item.usage}</p>
                          </div>
                          <div className="flex items-start gap-2 rounded-lg bg-[#FAFAFA] p-2">
                            <span className="text-[10px] font-semibold shrink-0 mt-0.5" style={{ color: item.color }}>Exemple</span>
                            <p className="text-[10px] text-[#888] leading-[1.5]">{item.exemple}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les 4 types se combinent.</strong> Le segment le plus actionnable croise firmographique et comportemental : &ldquo;PME SaaS 20-100 employes avec haute activite cette semaine.&rdquo; C&apos;est la qu&apos;on trouve les leads les plus chauds avec le meilleur fit.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Segmenter dans HubSpot */}
              <section id="segmenter-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment segmenter dans HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot offre deux mecanismes de segmentation : les listes actives et les listes statiques. Le choix entre les deux n&apos;est pas anodin.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Listes actives</p>
                      <p className="text-[11px] text-[#777] leading-[1.6] mb-2">Se mettent a jour automatiquement quand un contact entre ou sort des criteres. Utilisez-les pour les segments dynamiques : &ldquo;MQL cette semaine&rdquo;, &ldquo;contacts actifs&rdquo;, &ldquo;clients a risque&rdquo;.</p>
                      <p className="text-[10px] text-[#22C55E] font-medium">Utilisation : 80% de vos segments</p>
                    </div>
                    <div className="rounded-xl border border-[#4B5EFC]/20 bg-[#4B5EFC]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#4B5EFC] mb-2">Listes statiques</p>
                      <p className="text-[11px] text-[#777] leading-[1.6] mb-2">Figees au moment de la creation. Les contacts ne sortent pas automatiquement. Utilisez-les pour des snapshots : &ldquo;participants webinar du 12 mars&rdquo;, &ldquo;import salon professionnel&rdquo;.</p>
                      <p className="text-[10px] text-[#4B5EFC] font-medium">Utilisation : 20% de vos segments</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les proprietes sont la fondation de la segmentation.</strong> Sans proprietes propres et completes, pas de segmentation fiable. Avant de creer des listes, verifiez que vos proprietes cles sont renseignees a plus de 70% : secteur d&apos;activite, taille entreprise, job title, lifecycle stage, source d&apos;acquisition.</p>
                    <p><strong className="text-[#111]">Convention de nommage des listes.</strong> Adoptez un format strict. Par exemple : <code className="text-[12px] bg-[#F2F2F2] px-1.5 py-0.5 rounded">[Type] - [Critere principal] - [Critere secondaire]</code>. Exemples : &ldquo;ACTIVE - PME SaaS - Haute activite&rdquo;, &ldquo;STATIC - Webinar RevOps Mars 2026&rdquo;. Sans convention, vous aurez 200 listes illisibles en 6 mois.</p>
                    <p><strong className="text-[#111]">Limite HubSpot a connaitre</strong> : les listes actives ont un impact sur la performance du portail. Au-dela de 1 000 listes actives, le temps de rafraichissement augmente. Nettoyez regulierement les listes obsoletes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Les erreurs */}
              <section id="erreurs" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs qui faussent tout</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une segmentation basee sur des donnees fausses produit des resultats faux. Voici les 5 erreurs les plus frequentes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { erreur: "Champs vides", desc: "45% de vos contacts n'ont pas de secteur d'activite renseigne. Votre segment 'SaaS' ne contient donc que 55% des contacts SaaS reels. Le reste est invisible. Solution : campagne d'enrichissement via Clay ou Apollo avant toute segmentation.", color: "#EF4444" },
                      { erreur: "Conventions inconsistantes", desc: "'SaaS', 'Saas', 'SAAS', 'Software as a Service', 'Logiciel SaaS'. Cinq valeurs pour la meme chose. Votre segment ne capte qu'une fraction. Solution : proprietes a choix multiples (dropdown) au lieu de champs texte libres. Nettoyage retroactif des valeurs existantes.", color: "#FF7A59" },
                      { erreur: "Segments trop larges", desc: "'Toutes les entreprises de plus de 50 employes'. Ce segment contient des milliers de contacts qui n'ont rien en commun. Trop large pour etre actionnable. Solution : croiser au minimum 2 criteres (taille + secteur, ou secteur + engagement).", color: "#6C5CE7" },
                      { erreur: "Segments jamais mis a jour", desc: "Un segment 'clients actifs' base sur des donnees d'il y a 6 mois. Depuis, 30% ont churne et ne sont plus dans le bon segment. Solution : listes actives pour tout segment dynamique. Revue trimestrielle de la pertinence des segments.", color: "#4B5EFC" },
                      { erreur: "Doublons non traites", desc: "Le meme contact existe 3 fois avec 3 emails differents. Il est dans 3 segments differents. Le scoring est fausse. Le nurturing envoie 3 emails. Solution : deduplication systematique avant segmentation. HubSpot detecte les doublons par email, mais pas par entreprise.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.erreur} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.erreur}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Segmentation et scoring */}
              <section id="segmentation-scoring" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Segmentation et scoring : le lien direct</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scoring sans segmentation, c&apos;est un score unique pour tous les contacts. Un CEO qui visite la page pricing vaut le meme nombre de points qu&apos;un stagiaire. Ca n&apos;a pas de sens.</p>
                    <p>La segmentation permet de ponderer le scoring differemment par segment :</p>
                  </div>

                  <div className="my-6 overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="border-b border-[#E8E8E8]">
                          <th className="text-left py-3 pr-3 text-[#999] font-semibold">Action</th>
                          <th className="text-center py-3 px-2 text-[#22C55E] font-semibold">Segment ICP</th>
                          <th className="text-center py-3 px-2 text-[#FF7A59] font-semibold">Segment hors ICP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { action: "Visite page pricing", icp: "+20 pts", hors: "+5 pts" },
                          { action: "Telechargement guide", icp: "+10 pts", hors: "+3 pts" },
                          { action: "Ouverture email", icp: "+5 pts", hors: "+1 pt" },
                          { action: "Demande de demo", icp: "+50 pts", hors: "+15 pts" },
                          { action: "Inactivite 30 jours", icp: "-15 pts", hors: "-5 pts" },
                        ].map((row) => (
                          <tr key={row.action} className="border-b border-[#F2F2F2]">
                            <td className="py-2.5 pr-3 font-medium text-[#111]">{row.action}</td>
                            <td className="py-2.5 px-2 text-center">
                              <span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">{row.icp}</span>
                            </td>
                            <td className="py-2.5 px-2 text-center">
                              <span className="inline-block px-2 py-0.5 rounded bg-[#FF7A59]/10 text-[#FF7A59] font-medium">{row.hors}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le scoring segmente est 2 a 3x plus precis</strong> que le scoring generique. Il reduit les faux positifs (contacts hors ICP avec un score eleve parce qu&apos;ils cliquent beaucoup) et les faux negatifs (contacts ICP avec un score bas parce qu&apos;ils sont passifs mais prets a acheter).</p>
                    <p>Dans HubSpot, vous pouvez creer plusieurs proprietes de score (un score par segment) ou utiliser un workflow qui applique des multiplicateurs differents selon le segment du contact.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Segmentation et personnalisation */}
              <section id="segmentation-personnalisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Segmentation et personnalisation</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La personnalisation ne se limite pas a &ldquo;Bonjour [prenom]&rdquo;. La vraie personnalisation est structurelle : le contenu, le canal, le timing et le message changent en fonction du segment.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { dimension: "Contenu", generique: "Meme guide pour tout le monde", segmente: "Guide startup pour les startups, cas client grand groupe pour les grands groupes", impact: "Taux d'ouverture +40%", color: "#22C55E" },
                      { dimension: "Canal", generique: "Email pour tout le monde", segmente: "Email pour les marketing, LinkedIn pour les C-level, Slack pour les ops", impact: "Taux de reponse +60%", color: "#4B5EFC" },
                      { dimension: "Timing", generique: "Meme sequence pour tous", segmente: "Cycle court (3 emails / 10 jours) pour les startups, cycle long (8 emails / 45 jours) pour les grands groupes", impact: "Taux de conversion +25%", color: "#6C5CE7" },
                      { dimension: "Message", generique: "Meme proposition de valeur", segmente: "'Gagnez du temps' pour les PME, 'Reduisez le risque' pour les grands groupes", impact: "Taux de clic +35%", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.dimension} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.dimension}</span>
                          </div>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E]">{item.impact}</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2 text-[10px]">
                          <div className="rounded-lg bg-[#EF4444]/5 p-2">
                            <p className="text-[#EF4444] font-semibold mb-1">Generique</p>
                            <p className="text-[#777]">{item.generique}</p>
                          </div>
                          <div className="rounded-lg bg-[#22C55E]/5 p-2">
                            <p className="text-[#22C55E] font-semibold mb-1">Segmente</p>
                            <p className="text-[#777]">{item.segmente}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Segmentation et IA */}
              <section id="segmentation-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment l&apos;IA segmente mieux</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La segmentation manuelle repose sur des regles explicites : &ldquo;si secteur = SaaS ET taille &gt; 20, alors segment A.&rdquo; L&apos;IA va plus loin en identifiant des patterns dans les donnees que les regles manuelles ne captent pas.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { capacite: "Clustering automatique", desc: "L'IA analyse les proprietes et les comportements de vos contacts et identifie des groupes naturels. Vous decouvrez par exemple que vos meilleurs clients partagent 3 caracteristiques que vous n'aviez pas identifiees : taille 30-80 employes, levee de fonds dans les 12 derniers mois et utilisation de HubSpot.", color: "#6D00CC" },
                      { capacite: "Segmentation predictive", desc: "L'IA identifie les contacts qui ressemblent le plus a vos clients signes. Le 'lookalike scoring' va au-dela du fit statique : il prend en compte les sequences comportementales (les contacts qui font X, Y puis Z dans cet ordre ont 4x plus de chances de signer).", color: "#4B5EFC" },
                      { capacite: "Detection d'anomalies", desc: "Un contact hors ICP avec un comportement atypique (visite pricing 5 fois, telecharge 3 guides, ouvre tous les emails). Les regles manuelles l'ignorent parce qu'il ne matche pas le firmographique. L'IA le detecte parce que son comportement ressemble a celui des contacts qui signent.", color: "#22C55E" },
                      { capacite: "Re-segmentation dynamique", desc: "Les segments evoluent en temps reel. Un contact passe d'un segment a un autre quand son profil ou son comportement change. L'IA recalcule en continu au lieu d'attendre une revue trimestrielle manuelle.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.capacite} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.capacite}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;IA ne remplace pas la segmentation manuelle.</strong> Elle l&apos;enrichit. Vous definissez les segments strategiques (ICP, lifecycle stages). L&apos;IA affine en identifiant des sous-segments et des patterns que vous n&apos;aviez pas vus. La combinaison des deux est ce qui produit les meilleurs resultats.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Template */}
              <section id="template" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Template de segmentation B2B</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Voici les 12 segments essentiels a creer dans votre CRM pour une entreprise B2B. Chaque segment est une liste active dans HubSpot avec des criteres explicites.</p>
                  </div>

                  <div className="my-6 space-y-2">
                    {[
                      { nom: "ICP Fit - Haute priorite", criteres: "Secteur in [SaaS, Tech, Services], Taille 20-200, Decision-maker", color: "#22C55E" },
                      { nom: "ICP Fit - Moyenne priorite", criteres: "Secteur in [SaaS, Tech, Services], Taille 10-20 ou 200-500", color: "#22C55E" },
                      { nom: "Hors ICP", criteres: "Ne matche aucun critere ICP", color: "#EF4444" },
                      { nom: "MQL actifs", criteres: "Lifecycle = MQL ET derniere activite < 7 jours", color: "#FF7A59" },
                      { nom: "MQL dormants", criteres: "Lifecycle = MQL ET derniere activite > 30 jours", color: "#FF7A59" },
                      { nom: "Haute activite", criteres: "5+ pages/semaine OU 3+ emails ouverts/semaine", color: "#4B5EFC" },
                      { nom: "Intent d'achat", criteres: "Visite pricing OU demande demo OU mention budget", color: "#6D00CC" },
                      { nom: "Nouveaux leads (7 jours)", criteres: "Date creation < 7 jours ET lifecycle = Lead", color: "#6C5CE7" },
                      { nom: "Clients actifs", criteres: "Lifecycle = Customer ET derniere activite < 30 jours", color: "#22C55E" },
                      { nom: "Clients a risque", criteres: "Lifecycle = Customer ET derniere activite > 60 jours", color: "#EF4444" },
                      { nom: "Contacts dormants", criteres: "Derniere activite > 90 jours ET lifecycle != Customer", color: "#999" },
                      { nom: "Contacts a nettoyer", criteres: "Email invalide OU doublon detecte OU champs critiques vides", color: "#999" },
                    ].map((item) => (
                      <div key={item.nom} className="flex items-center gap-3 rounded-xl border border-[#333] bg-[#1A1A1A] p-3">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color }} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-semibold text-white">{item.nom}</p>
                          <p className="text-[10px] text-[#666] leading-[1.4]">{item.criteres}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Ce template est un point de depart. Adaptez les criteres a votre ICP et a vos proprietes CRM. L&apos;objectif est qu&apos;au bout de 30 jours, chaque contact de votre base soit dans au moins un segment actionnable. Si un contact n&apos;est dans aucun segment, c&apos;est qu&apos;il manque des donnees, et c&apos;est la premiere chose a corriger.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Segmenter votre base CRM ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">On audite votre base, on identifie les segments prioritaires et on configure les listes actives dans HubSpot. En 2 semaines, votre segmentation est operationnelle et votre scoring est 2x plus precis. Commencez par un audit gratuit.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#22C55E] text-white rounded-lg text-[13px] font-medium hover:bg-[#1EAD50] transition-colors">
                  Auditer votre segmentation
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
