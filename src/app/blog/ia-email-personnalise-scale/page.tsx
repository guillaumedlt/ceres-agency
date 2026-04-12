"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Emails personnalises a grande echelle : comment l'IA change la donne",
  description: "Guide complet sur la personnalisation d'emails a grande echelle avec l'IA. Workflow CRM-enrichissement-IA-validation, resultats chiffres (3% vs 11% de taux de reponse), A/B testing IA et erreurs a eviter.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-email-personnalise-scale" },
  articleSection: "IA & Agents",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "dilemme-volume-perso", title: "Le dilemme volume vs personnalisation" },
  { id: "comment-ia-personnalise", title: "Comment l'IA personnalise" },
  { id: "workflow-complet", title: "Le workflow complet" },
  { id: "resultats-chiffres", title: "Les resultats" },
  { id: "erreurs-eviter", title: "Les erreurs a eviter" },
  { id: "ab-testing-ia", title: "A/B testing avec l'IA" },
  { id: "metriques-suivre", title: "Les metriques a suivre" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Cold email B2B : 15 templates de prospection qui convertissent", slug: "cold-email-b2b-templates", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Prompt engineering pour les equipes commerciales", slug: "prompt-engineering-equipes-commerciales", category: "IA & Agents", color: "#6D00CC" },
  { title: "Automatiser la prospection B2B avec l'IA", slug: "automatiser-prospection-b2b-ia", category: "IA & Agents", color: "#4B5EFC" },
];

export default function IaEmailPersonnaliseScaleArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("dilemme-volume-perso");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Emails%20personnalises%20a%20grande%20echelle%20avec%20l%27IA&url=https://ceres.agency/blog/ia-email-personnalise-scale" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/ia-email-personnalise-scale" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Emails personnalises avec l&apos;IA</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Agents</Badge>
                <span className="text-[11px] text-[#CCC]">13 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Emails personnalises a grande echelle : comment l&apos;IA change la donne
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le choix entre volume et personnalisation n&apos;existe plus. L&apos;IA permet d&apos;envoyer des emails qui font reference au contexte reel du prospect, a ses pain points specifiques et a des elements concrets de son entreprise, le tout a grande echelle. Les equipes qui adoptent cette approche passent de 3% a 11% de taux de reponse. Ce guide vous montre comment.
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
              <section id="dilemme-volume-perso" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le dilemme volume vs personnalisation</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pendant des annees, la prospection B2B etait un choix binaire. Soit vous personnalisiez chaque email a la main, avec 8 a 10 emails par heure et un excellent taux de reponse. Soit vous automatisiez avec du mail merge generique, 200 emails par heure et un taux de reponse miserable.</p>
                    <p>Les deux approches ont leurs limites. La personnalisation manuelle ne scale pas. Avec un SDR a 40 000 EUR/an qui produit 60 emails personnalises par jour, chaque email coute environ 3 EUR en temps. Pour 200 prospects par semaine, il faut plus de 3 SDR a temps plein. L&apos;automatisation generique, elle, scale mais ne fonctionne plus. Les boites de reception sont saturees. Les prospects detectent les emails automatises en 2 secondes. Le taux de reponse moyen est passe sous les 2%.</p>
                    <p>L&apos;IA supprime ce dilemme. Elle combine la pertinence de la personnalisation manuelle avec le volume de l&apos;automatisation. Un SDR assiste par l&apos;IA produit 40 a 60 emails personnalises par heure, soit 4 a 6 fois plus qu&apos;en manuel, avec une qualite de personnalisation equivalente ou superieure.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { method: "Manuel", volume: "8-10/h", reply: "8-12%", cost: "~3 EUR/email", color: "#4B5EFC" },
                      { method: "Automatise", volume: "200+/h", reply: "1-3%", cost: "~0,02 EUR/email", color: "#EF4444" },
                      { method: "IA + humain", volume: "40-60/h", reply: "8-15%", cost: "~0,30 EUR/email", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.method} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[11px] font-semibold mb-2" style={{ color: item.color }}>{item.method}</p>
                        <p className="text-[16px] font-bold text-[#111] mb-1">{item.volume}</p>
                        <p className="text-[10px] text-[#999] mb-1">Reply : {item.reply}</p>
                        <p className="text-[10px] text-[#BBB]">{item.cost}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="comment-ia-personnalise" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment l&apos;IA personnalise : contexte, pain point et reference concrete</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La personnalisation IA ne se limite pas a inserer le nom de l&apos;entreprise dans un template. Elle analyse le contexte complet du prospect et genere un message sur mesure. Voici les trois couches de personnalisation que l&apos;IA produit.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        layer: "Contexte entreprise",
                        desc: "L'IA analyse les donnees firmographiques et recentes de l'entreprise : taille, croissance, actualites, recrutements, technos utilisees. Elle en extrait un element pertinent pour ouvrir la conversation. 'J'ai vu que vous venez de recruter 3 SDR' ou 'Votre croissance de 40% cette annee doit mettre votre pipeline sous pression.'",
                        source: "Clay, Apollo, LinkedIn, Crunchbase",
                        color: "#D4A27F",
                      },
                      {
                        layer: "Pain point specifique",
                        desc: "A partir du contexte, l'IA identifie un probleme probable et le formule de facon specifique. Pas 'ameliorer votre efficacite commerciale' mais 'vos nouveaux SDR mettent probablement 3 mois avant d'atteindre leur quota, et la formation CRM est un goulet d'etranglement.'",
                        source: "Patterns ICP + donnees enrichies",
                        color: "#6D00CC",
                      },
                      {
                        layer: "Reference concrete",
                        desc: "L'IA ajoute un element qui prouve que l'email n'est pas generique : un post LinkedIn recent du prospect, un article qu'il a publie, une intervention en conference, un changement d'equipe visible publiquement. C'est cette couche qui fait la difference entre un email 'bien cible' et un email 'ecrit pour moi'.",
                        source: "LinkedIn posts, publications, events",
                        color: "#22C55E",
                      },
                    ].map((item) => (
                      <div key={item.layer} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.layer}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="rounded-lg bg-[#FAFAFA] p-2">
                          <p className="text-[10px] text-[#999]"><strong className="text-[#888]">Sources :</strong> {item.source}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le resultat : un email qui ressemble a un email ecrit par quelqu&apos;un qui a passe 15 minutes a faire des recherches sur le prospect. Sauf qu&apos;il a ete genere en 10 secondes. Le prospect ne sait pas si c&apos;est un humain ou une IA qui a ecrit. Et c&apos;est exactement le but : la pertinence compte, pas la methode.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="workflow-complet" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le workflow : CRM, enrichissement, IA, validation, envoi</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La personnalisation IA ne fonctionne pas en standalone. Elle fait partie d&apos;un workflow plus large qui va du CRM a l&apos;envoi, en passant par l&apos;enrichissement et la validation humaine. Voici les 5 etapes.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Workflow de personnalisation IA</p>
                    <div className="space-y-3">
                      {[
                        { step: "1", title: "CRM : selection de la liste", desc: "Le SDR ou le manager selectionne une liste de prospects dans HubSpot, filtree par ICP, segment ou campagne. 50 a 200 prospects par batch.", color: "#FF7A59", tool: "HubSpot" },
                        { step: "2", title: "Enrichissement automatique", desc: "Chaque prospect est enrichi avec les donnees firmographiques, technographiques et les signaux contextuels. L'enrichissement est automatique et prend 10 a 30 secondes par prospect.", color: "#4B5EFC", tool: "Clay / Apollo" },
                        { step: "3", title: "Generation IA des emails", desc: "L'IA recoit le contexte enrichi + le framework de l'email (structure, ton, CTA) et genere un draft personnalise pour chaque prospect. La generation prend 5 a 10 secondes par email.", color: "#D4A27F", tool: "Claude / GPT" },
                        { step: "4", title: "Validation humaine", desc: "Le SDR relit chaque email, corrige les erreurs factuelles, ajuste le ton si necessaire et valide. Temps moyen : 20 a 30 secondes par email. C'est l'etape non negociable.", color: "#22C55E", tool: "Humain" },
                        { step: "5", title: "Envoi et tracking", desc: "Les emails valides sont envoyes via la sequence HubSpot ou Lemlist. Le tracking est automatique : ouvertures, clics, reponses. Les reponses positives sont routees vers le commercial.", color: "#6C5CE7", tool: "HubSpot / Lemlist" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-3 rounded-lg bg-white border border-[#F2F2F2] p-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: item.color }}>{item.step}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                              <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#F2F2F2] text-[#999] font-medium">{item.tool}</span>
                            </div>
                            <p className="text-[11px] text-[#777] leading-[1.5]">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Temps total par prospect : 1 a 2 minutes (vs 10-15 minutes en manuel)</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le gain.</strong> Un SDR traite 200 prospects en une demi-journee au lieu de 3 jours. Et la qualite est au moins equivalente. L&apos;enrichissement est plus exhaustif (plus de sources), la personnalisation est plus consistante (pas de fatigue) et les erreurs factuelles sont corrigees a l&apos;etape 4.</p>
                    <p><strong className="text-[#111]">Le cout.</strong> Enrichissement : 0,10 EUR/prospect. Generation IA : 0,02 EUR/email. Total : environ 0,12 EUR par email personnalise, hors cout humain de validation. Pour comparaison, un email personnalise manuellement coute environ 3 EUR en temps SDR.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="resultats-chiffres" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les resultats : 3% vs 11% de taux de reponse</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Voici les resultats mesures sur 12 campagnes deployees chez nos clients entre janvier et mars 2026. Meme cible, meme offre, meme sequence. La seule variable : la personnalisation des emails.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Comparaison des performances</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Metrique</th>
                            <th className="text-center py-2 px-2 text-[#EF4444] font-semibold">Generique</th>
                            <th className="text-center py-2 px-2 text-[#D4A27F] font-semibold">IA personnalise</th>
                            <th className="text-center py-2 pl-2 text-[#22C55E] font-semibold">Delta</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { metric: "Open rate", generic: "52%", ai: "68%", delta: "+16pts" },
                            { metric: "Reply rate", generic: "3,2%", ai: "11,4%", delta: "+8,2pts" },
                            { metric: "Positive reply rate", generic: "1,1%", ai: "7,8%", delta: "+6,7pts" },
                            { metric: "Meeting booked rate", generic: "0,8%", ai: "4,2%", delta: "+3,4pts" },
                            { metric: "Unsubscribe rate", generic: "2,1%", ai: "0,4%", delta: "-1,7pts" },
                          ].map((row) => (
                            <tr key={row.metric} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.metric}</td>
                              <td className="py-2.5 px-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444] font-medium">{row.generic}</span></td>
                              <td className="py-2.5 px-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#D4A27F]/10 text-[#D4A27F] font-medium">{row.ai}</span></td>
                              <td className="py-2.5 pl-2 text-center"><span className="font-bold text-[#22C55E]">{row.delta}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Donnees sur 12 campagnes, 8 400 prospects, janvier-mars 2026</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le chiffre cle : 3,5x plus de meetings.</strong> Sur 1 000 prospects, l&apos;approche generique genere 8 meetings. L&apos;approche IA personnalisee en genere 42. Avec un taux de conversion meeting-to-deal de 30%, c&apos;est la difference entre 2,4 deals et 12,6 deals. Pour un deal moyen de 15 000 EUR, c&apos;est 153 000 EUR de pipeline supplementaire par campagne de 1 000 prospects.</p>
                    <p><strong className="text-[#111]">Le bonus delivrabilite.</strong> Les emails personnalises ont un taux de desabonnement 5 fois plus faible. Moins de signaux negatifs = meilleure delivrabilite = meilleur open rate sur les campagnes suivantes. C&apos;est un cercle vertueux.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="erreurs-eviter" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs a eviter</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La personnalisation IA a grande echelle est puissante, mais elle amplifie les erreurs autant que les bonnes pratiques. Voici les quatre erreurs les plus courantes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Sur-automatiser : supprimer la validation humaine",
                        desc: "C'est tentant. L'IA genere l'email, on l'envoie directement. Ca multiplie le volume par 10. Mais ca multiplie aussi les erreurs. L'IA invente parfois des faits ('j'ai vu votre levee de fonds' alors qu'il n'y en a pas eu). Elle se trompe de ton. Elle recycle des formulations. Sans validation humaine, un email sur 20 contient une erreur factuelle qui detruit votre credibilite.",
                        fix: "Toujours valider. 30 secondes par email, c'est non negociable.",
                        color: "#EF4444",
                      },
                      {
                        title: "Personnaliser sans framework",
                        desc: "Donner un contexte a l'IA sans lui dire quoi en faire produit des emails incoherents. L'IA a besoin d'un framework : quel probleme adresser, quel angle d'approche, quel ton, quel CTA. Sans ce cadre, chaque email est different mais aucun ne suit votre strategie commerciale.",
                        fix: "Creer un prompt structure avec : persona, problematique, ton, CTA, longueur max.",
                        color: "#FF7A59",
                      },
                      {
                        title: "Oublier le warm-up",
                        desc: "Envoyer 200 emails personnalises le premier jour depuis un domaine froid. Resultat : 80% en spam. La personnalisation ne compense pas un probleme de delivrabilite. Le domaine doit etre warm-up pendant 2 a 4 semaines avant d'envoyer a plein volume.",
                        fix: "Warm-up progressif : 10 emails/jour en semaine 1, 30 en semaine 2, 50 en semaine 3.",
                        color: "#6C5CE7",
                      },
                      {
                        title: "Ne pas segmenter les resultats",
                        desc: "Mesurer le taux de reponse global sans segmenter par persona, secteur ou taille d'entreprise. Un taux de reponse de 11% global peut masquer un 20% sur les PME tech et un 3% sur les grands groupes industriels. Sans segmentation, vous ne savez pas ce qui marche vraiment.",
                        fix: "Segmenter les resultats par persona, secteur et taille. Ajuster les prompts par segment.",
                        color: "#4B5EFC",
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

              {/* Section 6 */}
              <section id="ab-testing-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">A/B testing avec l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA rend l&apos;A/B testing beaucoup plus rapide et plus granulaire. Au lieu de tester 2 versions d&apos;un email, vous pouvez tester 5 angles d&apos;approche simultanement et avoir des resultats significatifs en quelques jours.</p>
                    <p><strong className="text-[#111]">Ce qu&apos;il faut tester.</strong> Ne testez pas la couleur du bouton ou la longueur du PS. Testez les elements qui ont un impact reel sur le taux de reponse :</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { element: "L'angle d'approche", desc: "Pain point produit vs pain point process vs pain point equipe. L'IA genere 3 versions du meme email avec un angle different. Testez sur 100 prospects par version.", color: "#D4A27F" },
                      { element: "Le niveau de personnalisation", desc: "Personnalisation segment vs company vs individu. Comparez les taux de reponse pour trouver le sweet spot entre effort et resultat.", color: "#6D00CC" },
                      { element: "Le ton", desc: "Formel vs conversationnel vs direct. Certains secteurs repondent mieux a un ton direct, d'autres a un ton plus formel. L'IA adapte le ton sans changer le fond.", color: "#4B5EFC" },
                      { element: "Le CTA", desc: "Question ouverte vs proposition de call vs partage de ressource. Le CTA determine le type de reponse que vous recevez. Testez pour trouver celui qui genere le plus de meetings.", color: "#22C55E" },
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
                    <p><strong className="text-[#111]">La methode.</strong> Chaque semaine, lancez un test sur un element. 200 prospects minimum par variante pour avoir une significativite statistique. Mesurez le reply rate et le meeting booked rate (pas juste l&apos;open rate). Gardez le gagnant, testez un nouvel element la semaine suivante. En 4 semaines, vous avez optimise les 4 leviers principaux.</p>
                    <p>L&apos;IA permet de generer les variantes en quelques minutes. La contrainte n&apos;est plus la creation des tests, c&apos;est le volume de prospects necessaire pour avoir des resultats significatifs.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="metriques-suivre" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les metriques a suivre</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avec la personnalisation IA, les metriques classiques restent pertinentes mais elles prennent un sens different. Voici les 5 metriques a suivre et les seuils a viser.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { metric: "Positive reply rate", desc: "Le pourcentage de reponses positives (interet, demande d'info, acceptation de call). C'est LA metrique. Un reply rate eleve avec 80% de 'non merci' n'est pas un succes.", target: "> 5%", color: "#22C55E" },
                      { metric: "Meeting booked per 100 prospects", desc: "Nombre de meetings obtenu pour 100 prospects contactes. Combine la qualite de la personnalisation, le ciblage et le CTA. C'est la metrique de productivite du SDR.", target: "> 3", color: "#D4A27F" },
                      { metric: "Taux de validation humaine", desc: "Pourcentage d'emails generes par l'IA qui sont envoyes sans modification majeure. Si le SDR modifie 80% des emails, le prompt est mauvais. Objectif : > 70% d'envoi sans modification.", target: "> 70%", color: "#4B5EFC" },
                      { metric: "Unsubscribe rate", desc: "Les emails personnalises doivent generer tres peu de desabonnements. Un taux eleve signifie que la personnalisation est percue comme fausse ou intrusive.", target: "< 0,5%", color: "#EF4444" },
                      { metric: "Cost per meeting", desc: "Cout total (outils + temps humain) divise par le nombre de meetings generes. La personnalisation IA doit reduire ce cout, pas l'augmenter.", target: "< 100 EUR", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.metric} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.metric}</span>
                          </div>
                          <span className="text-[10px] font-bold" style={{ color: item.color }}>Objectif : {item.target}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on deploie des workflows de personnalisation email IA pour les equipes commerciales B2B. Le systeme complet, du CRM a l&apos;envoi, configure et optimise pour votre contexte.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Pipeline d'enrichissement", desc: "Workflow Clay connecte a HubSpot. Chaque prospect est enrichi en temps reel avec les donnees firmographiques, technographiques et les signaux contextuels.", color: "#4B5EFC" },
                      { title: "Prompts sur mesure", desc: "On cree les prompts adaptes a votre offre, vos personas et votre ton. Pas des prompts generiques, des prompts testes et optimises sur vos donnees.", color: "#D4A27F" },
                      { title: "Integration sequence", desc: "Les emails personnalises sont integres directement dans vos sequences HubSpot ou Lemlist. Le SDR valide et envoie depuis son outil habituel.", color: "#22C55E" },
                      { title: "Optimisation continue", desc: "A/B testing hebdomadaire, analyse des resultats par segment, ajustement des prompts. Le systeme s'ameliore chaque semaine.", color: "#6C5CE7" },
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
                        { stat: "11%", label: "reply rate moyen", color: "#22C55E" },
                        { stat: "3,5x", label: "plus de meetings", color: "#D4A27F" },
                        { stat: "0,30 EUR", label: "cout par email", color: "#4B5EFC" },
                        { stat: "< 2 sem", label: "pour deployer", color: "#6C5CE7" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>La personnalisation IA n&apos;est pas un outil de plus. C&apos;est un changement de paradigme dans la facon de prospecter. Les equipes qui l&apos;adoptent ne reviennent pas en arriere. Pas parce que c&apos;est a la mode, mais parce que les resultats sont mesurables et incontestables. 3,5 fois plus de meetings avec le meme nombre de prospects, c&apos;est un avantage competitif difficile a ignorer.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Personnaliser vos emails a grande echelle ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on deploie des workflows de personnalisation email IA complets. Enrichissement, generation, validation et envoi depuis votre CRM. Commencez par un appel de 30 minutes.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#D4A27F] text-white rounded-lg text-[13px] font-medium hover:bg-[#C49370] transition-colors">
                  Deployer la personnalisation IA
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
