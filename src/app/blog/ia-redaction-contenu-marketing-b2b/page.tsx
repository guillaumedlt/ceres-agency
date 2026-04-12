"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IA et redaction de contenu marketing B2B : le guide pratique",
  description: "Guide pratique pour utiliser l'IA dans la redaction de contenu marketing B2B. Workflow complet, ton de voix, articles de blog, posts LinkedIn, newsletters. Limites et bonnes pratiques.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-redaction-contenu-marketing-b2b" },
  articleSection: "IA & Agents",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "ia-ne-remplace-pas", title: "L'IA ne remplace pas" },
  { id: "ton-de-voix", title: "Definir son ton de voix" },
  { id: "workflow-contenu", title: "Le workflow contenu" },
  { id: "articles-blog", title: "Articles de blog" },
  { id: "posts-linkedin", title: "Posts LinkedIn" },
  { id: "newsletters", title: "Newsletters" },
  { id: "limites-ia", title: "Les limites" },
  { id: "contenu-ce-site", title: "Comment ce site a ete cree" },
];

const relatedArticles = [
  { title: "Prompt engineering pour les equipes commerciales", slug: "prompt-engineering-equipes-commerciales", category: "IA & Agents", color: "#6D00CC" },
  { title: "Claude Code pour les equipes non techniques", slug: "claude-code-equipes-non-techniques", category: "IA & Agents", color: "#D4A27F" },
  { title: "GEO : optimiser son site pour les LLM", slug: "geo-optimiser-site-llm", category: "IA & Agents", color: "#6D00CC" },
];

export default function IaRedactionContenuMarketingB2bArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("ia-ne-remplace-pas");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#D4A27F", opacity: 0.06, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=IA%20et%20redaction%20de%20contenu%20marketing%20B2B&url=https://ceres.agency/blog/ia-redaction-contenu-marketing-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/ia-redaction-contenu-marketing-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">IA et redaction contenu B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Agents</Badge>
                <span className="text-[11px] text-[#CCC]">15 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                IA et redaction de contenu marketing B2B : le guide pratique
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                L&apos;IA ne va pas remplacer votre equipe contenu. Mais elle va multiplier sa productivite par 3 a 5 si elle est bien utilisee. Le probleme : la plupart des equipes utilisent l&apos;IA comme un generateur de texte generique au lieu de l&apos;integrer dans un workflow structure. Ce guide vous donne la methode complete, du brief a la publication.
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
              <section id="ia-ne-remplace-pas" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;IA ne remplace pas le redacteur</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Soyons clairs des le depart : l&apos;IA generative ne produit pas du bon contenu toute seule. Elle produit du contenu moyen, rapidement. Et du contenu moyen, personne n&apos;en veut. Les boites mail debordent, les feeds LinkedIn sont satures, et les lecteurs B2B sont devenus experts pour detecter le contenu generique en 3 secondes.</p>
                    <p>Ce que l&apos;IA fait bien :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Generer un premier draft a partir d&apos;un brief structure.</strong> L&apos;IA transforme vos idees en texte organise en quelques secondes. Ca elimine la page blanche et vous donne une base a travailler.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Decliner un contenu en plusieurs formats.</strong> Un article de blog peut devenir 5 posts LinkedIn, une newsletter et un thread Twitter en 10 minutes. C&apos;est du repurposing automatise.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Structurer et organiser des idees.</strong> Vous avez des notes eparses, des idees en vrac, des transcriptions de calls. L&apos;IA les organise en plan editorial, en sections structurees, en arguments ordonnes.</li>
                    </ul>
                    <p>Ce que l&apos;IA ne fait pas bien : avoir une opinion, raconter une experience vecue, faire une analogie originale, ecrire avec un style reconnaissable. Tout ce qui fait qu&apos;un contenu est memorable. Le role de l&apos;humain : l&apos;expertise, le point de vue, l&apos;experience. Le role de l&apos;IA : la production, la structure, la declinaison.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="ton-de-voix" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment definir son ton de voix pour l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Si vous ne donnez pas de directives precises a l&apos;IA sur votre ton de voix, elle ecrira dans un style generique, corporate et ennuyeux. Le document de ton de voix est le fichier le plus important de votre stack contenu IA. Il definit comment l&apos;IA doit ecrire pour vous.</p>
                    <p>Voici les elements a inclure dans votre document de ton de voix :</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { element: "Niveau de langue", desc: "Professionnel mais accessible ? Technique et precis ? Conversationnel ? Definissez le registre. Exemple : 'On vouvoie le lecteur. On utilise des phrases courtes. On evite le jargon sauf quand il est necessaire.'", color: "#D4A27F" },
                      { element: "Ce qu'on fait / Ce qu'on ne fait pas", desc: "Liste concrete d'interdictions et de preferences. Exemple : 'Pas d'emojis. Pas de superlatifs. Pas de promesses vagues. Des chiffres concrets. Des exemples reels.' C'est ce qui differencie votre ton de celui de tout le monde.", color: "#6D00CC" },
                      { element: "Exemples de bons contenus", desc: "Incluez 3-5 exemples de contenus existants que vous considerez comme reference. L'IA s'en inspirera pour le style, la longueur des phrases, le niveau de detail, la structure.", color: "#4B5EFC" },
                      { element: "Mots et expressions interdits", desc: "Les mots que l'IA utilise trop : 'leverager', 'disruptif', 'game-changer', 'seamless', 'cutting-edge'. Listez-les et demandez a l'IA de les eviter. Ajoutez vos propres anti-patterns.", color: "#EF4444" },
                      { element: "Structure type", desc: "Longueur des paragraphes, usage des listes, format des titres, frequence des exemples. Plus la structure est definie, plus le contenu genere sera coherent avec votre style existant.", color: "#22C55E" },
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

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ce document devient le &ldquo;system prompt&rdquo; de toutes vos generations de contenu. Il est inclus dans chaque prompt et garantit la coherence du ton sur tous vos canaux. Investissez 2 heures pour le creer, il vous fera gagner des dizaines d&apos;heures ensuite.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="workflow-contenu" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le workflow contenu avec l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le workflow de creation de contenu avec l&apos;IA suit 4 etapes sequentielles. Chacune a un role precis et un ratio humain/IA different. L&apos;erreur est de laisser l&apos;IA faire les 4 etapes sans intervention humaine.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        step: "01",
                        title: "Brief (90% humain, 10% IA)",
                        desc: "L'humain definit le sujet, l'angle, l'audience cible, les points cles a couvrir et les sources. L'IA peut aider a structurer le brief en plan detaille, suggerer des angles complementaires ou identifier des questions frequentes sur le sujet.",
                        time: "30 min",
                        color: "#D4A27F",
                      },
                      {
                        step: "02",
                        title: "Generation (10% humain, 90% IA)",
                        desc: "L'IA genere le premier draft a partir du brief, du document de ton de voix et des exemples de reference. Le resultat est un texte structure, dans le bon ton, avec les bons arguments. C'est une base de travail, pas un produit fini.",
                        time: "5 min",
                        color: "#6D00CC",
                      },
                      {
                        step: "03",
                        title: "Edition (80% humain, 20% IA)",
                        desc: "L'humain relit, corrige, ajoute des exemples personnels, des donnees specifiques, des opinions. L'IA peut aider a reformuler des passages, verifier la coherence, suggerer des transitions. C'est l'etape ou le contenu passe de 'correct' a 'bon'.",
                        time: "45 min",
                        color: "#4B5EFC",
                      },
                      {
                        step: "04",
                        title: "Publication (50% humain, 50% IA)",
                        desc: "L'IA genere les metadonnees (title, description, alt text), les declinaisons (posts LinkedIn, newsletter), le schema markup. L'humain valide, programme et distribue. L'IA peut aussi generer les visuels d'accompagnement.",
                        time: "15 min",
                        color: "#22C55E",
                      },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: item.color }}>{item.step}</div>
                            <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                          </div>
                          <span className="text-[10px] font-medium text-[#999]">{item.time}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[12px] font-semibold text-[#111]">Temps total par article</p>
                      <p className="text-[18px] font-bold text-[#22C55E]">~1h30</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]">Contre 4 a 6 heures sans IA. Le gain est de 3 a 4x, pas de 10x. L&apos;IA accelere la production, pas la reflexion.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="articles-blog" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Articles de blog avec l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les articles de blog B2B sont le format ou l&apos;IA a le plus d&apos;impact en termes de productivite. Un article de 2 500 mots qui prenait une journee complete peut etre produit en 2 heures avec le bon workflow.</p>
                    <p><strong className="text-[#111]">Le brief structure.</strong> C&apos;est la cle. Un brief d&apos;article doit inclure : le mot-cle cible (pour le SEO), l&apos;intention de recherche (informationnelle, transactionnelle), le plan en 6-8 sections avec les points cles de chaque section, les donnees et exemples a inclure, et les articles concurrents a depasser.</p>
                    <p><strong className="text-[#111]">La generation par section.</strong> Ne generez pas l&apos;article entier en une seule fois. Generez section par section, en donnant le contexte des sections precedentes. Ca produit un texte plus coherent, plus detaille et plus facile a editer. Pour un article de 8 sections, ca fait 8 generations de 300-400 mots chacune.</p>
                    <p><strong className="text-[#111]">L&apos;edition est non negociable.</strong> Chaque section generee doit etre relue et enrichie. Ajoutez vos exemples clients (anonymises), vos chiffres internes, vos opinions. C&apos;est ce contenu humain qui donne de la valeur a l&apos;article. Un article 100% IA se lit comme un article 100% IA : correct mais sans substance.</p>
                    <p><strong className="text-[#111]">Le SEO technique.</strong> L&apos;IA genere les metadonnees (title tag, meta description), les alt text des images, le schema markup (Article, FAQ, HowTo). Ca represente 30 minutes de travail economisees par article. Validez toujours le title tag et la meta description manuellement.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="posts-linkedin" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Posts LinkedIn avec l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>LinkedIn est le canal B2B numero 1 en France. Publier 3 a 5 posts par semaine est devenu la norme pour les fondateurs et les equipes marketing. L&apos;IA rend ce rythme tenable.</p>
                    <p><strong className="text-[#111]">Le format qui fonctionne.</strong> Un post LinkedIn B2B performant suit une structure previsible : accroche (1 ligne choc), contexte (2-3 lignes), developpement (5-8 lignes avec des retours a la ligne), conclusion (1-2 lignes avec un CTA ou une question). L&apos;IA respecte cette structure si vous la specifiez dans le prompt.</p>
                    <p><strong className="text-[#111]">Le repurposing.</strong> Chaque article de blog peut generer 3 a 5 posts LinkedIn. L&apos;IA extrait les points cles, les reformule pour le format LinkedIn et adapte le ton (plus conversationnel, plus direct). En 10 minutes, vous avez une semaine de contenu LinkedIn a partir d&apos;un seul article.</p>
                    <p><strong className="text-[#111]">L&apos;authenticite.</strong> Les posts LinkedIn qui performent le mieux sont ceux qui racontent une experience personnelle, partagent un echec ou donnent un avis tranche. L&apos;IA ne peut pas inventer ces experiences. Le workflow ideal : l&apos;humain donne l&apos;idee et l&apos;angle (en 2 phrases), l&apos;IA redige le post, l&apos;humain ajoute les details personnels et ajuste le ton.</p>
                    <p><strong className="text-[#111]">La frequence.</strong> 3 posts par semaine minimum pour maintenir la visibilite. Avec l&apos;IA, la production de 5 posts prend environ 1 heure par semaine (generation + edition). Sans l&apos;IA, comptez 3 a 4 heures pour le meme volume.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="newsletters" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Newsletters avec l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La newsletter B2B est le format le plus intime. Vos abonnes vous ont donne leur email, ils attendent de la valeur. Le taux d&apos;ouverture moyen en B2B est de 25-35%. C&apos;est le canal avec le meilleur ROI en content marketing.</p>
                    <p><strong className="text-[#111]">La curation assistee.</strong> L&apos;IA peut scanner vos sources (blogs, news, LinkedIn) et vous proposer une selection d&apos;articles pertinents pour votre audience. Vous choisissez, l&apos;IA redige les resumes et les commentaires. Ce qui prenait 2 heures (lire, selectionner, resumer) prend 30 minutes.</p>
                    <p><strong className="text-[#111]">Le contenu original.</strong> La partie la plus precieuse de votre newsletter est votre point de vue. L&apos;edito, l&apos;analyse, le retour d&apos;experience. Ca doit rester humain. L&apos;IA peut vous aider a structurer vos idees, mais le fond doit venir de vous.</p>
                    <p><strong className="text-[#111]">La personnalisation.</strong> Avec l&apos;IA, vous pouvez personnaliser des sections de la newsletter en fonction du segment (secteur, taille d&apos;entreprise, interet). Un bloc &ldquo;cas client&rdquo; adapte au secteur du lecteur, une recommandation d&apos;article en fonction de ses lectures precedentes. C&apos;est du contenu dynamique genere par l&apos;IA.</p>
                    <p><strong className="text-[#111]">La frequence ideale.</strong> Bi-mensuelle ou hebdomadaire. Pas plus. La qualite prime sur la frequence. Avec l&apos;IA, la production d&apos;une newsletter hebdomadaire de qualite prend 1 heure. Sans l&apos;IA, comptez 3 heures.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="limites-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les limites (hallucinations, genericite)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA n&apos;est pas parfaite. Deux problemes majeurs persistent en 2026 et necessitent des garde-fous systematiques.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Les hallucinations",
                        desc: "L'IA invente des chiffres, des citations, des etudes. Elle le fait avec confiance, ce qui rend la detection difficile. En B2B, publier un chiffre faux detruit votre credibilite. La regle : tout chiffre, toute statistique, toute reference generee par l'IA doit etre verifiee manuellement. Pas d'exception.",
                        color: "#EF4444",
                        fix: "Systematiser la verification des donnees. Demander a l'IA de citer ses sources. Ne jamais publier un chiffre sans l'avoir verifie."
                      },
                      {
                        title: "La genericite",
                        desc: "L'IA ecrit bien, mais elle ecrit comme tout le monde. Les memes structures, les memes transitions, les memes formules. Le contenu genere par l'IA est correct mais interchangeable. Deux entreprises concurrentes utilisant l'IA avec le meme prompt produiront le meme contenu.",
                        color: "#FF7A59",
                        fix: "Toujours ajouter votre experience, vos donnees, vos exemples. C'est ce qui rend le contenu unique. L'IA fournit le squelette, l'humain apporte la chair."
                      },
                      {
                        title: "Le manque de nuance",
                        desc: "L'IA a tendance a etre binaire : c'est bien ou c'est mal, ca marche ou ca ne marche pas. En B2B, la realite est nuancee. 'Ca depend du contexte' est souvent la bonne reponse. L'IA n'est pas a l'aise avec la nuance et les cas limites.",
                        color: "#6C5CE7",
                        fix: "Demander explicitement a l'IA d'inclure les nuances, les exceptions et les cas ou la recommandation ne s'applique pas."
                      },
                      {
                        title: "Le biais de recence",
                        desc: "L'IA ne connait pas les dernieres actualites de votre secteur. Ses connaissances ont une date de coupure. Pour du contenu d'actualite (tendances, evolutions reglementaires, nouveaux outils), l'humain doit fournir les informations recentes.",
                        color: "#4B5EFC",
                        fix: "Inclure les sources recentes dans le prompt. Utiliser des outils de web browsing pour alimenter l'IA en informations a jour."
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
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="contenu-ce-site" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Comment l&apos;IA a cree le contenu de ce site</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Ce site (ceres.agency) est un cas pratique de tout ce qu&apos;on vient de decrire. 83 pages, 43 articles de blog, 13 cas clients, 80 definitions de glossaire. Le tout cree avec Claude, l&apos;IA d&apos;Anthropic, en utilisant exactement le workflow decrit dans cet article.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Le design system comme prompt", desc: "On a cree un fichier DESIGN-SYSTEM.txt qui definit les couleurs, les composants, le ton de voix et la structure de chaque type de page. C'est le system prompt de toute la generation. Chaque page generee respecte les memes regles visuelles et editoriales.", color: "#D4A27F" },
                      { title: "La generation page par page", desc: "Chaque page a ete generee individuellement avec un brief specifique : sujet, structure, mots-cles, liens internes. Pas de generation en masse. Chaque page a ete relue, editee et enrichie avec des exemples reels.", color: "#6D00CC" },
                      { title: "L'iteration continue", desc: "Le site n'a pas ete cree en une fois. Il a ete itere sur plusieurs semaines. Chaque retour, chaque ajustement alimente les generations suivantes. Le design system evolue avec les pages.", color: "#4B5EFC" },
                      { title: "Le code aussi", desc: "Le site est en Next.js. Le code des composants, des pages et des configurations a ete genere par Claude Code. Le meme outil pour le contenu et le code. Un seul workflow, de l'idee a la page deployee.", color: "#22C55E" },
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
                    <p className="text-[12px] font-semibold text-white mb-3">Le site en chiffres</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "83", label: "Pages statiques", color: "#D4A27F" },
                        { stat: "43+", label: "Articles de blog", color: "#6D00CC" },
                        { stat: "80+", label: "Termes de glossaire", color: "#4B5EFC" },
                        { stat: "100%", label: "Genere avec Claude", color: "#22C55E" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le fait que vous lisiez cet article prouve que le systeme fonctionne. Vous etes arrive ici par un moteur de recherche ou un partage. Vous avez lu jusqu&apos;ici. Le contenu vous a apporte de la valeur. Et il a ete cree avec le workflow exact decrit dans les sections precedentes.</p>
                    <p>L&apos;IA n&apos;a pas remplace le redacteur. Elle a permis a un redacteur de produire 10x plus de contenu, sans sacrifier la qualite. C&apos;est la promesse, et c&apos;est la realite.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Mettre l&apos;IA au service de votre contenu ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on aide les equipes B2B a integrer l&apos;IA dans leur workflow de creation de contenu. Du document de ton de voix aux workflows de production. Productivite x3, qualite maintenue.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#D4A27F] text-white rounded-lg text-[13px] font-medium hover:bg-[#C4926F] transition-colors">
                  Accelerer ma production de contenu
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
