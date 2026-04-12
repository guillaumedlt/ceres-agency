"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sequence email B2B : comment structurer votre prospection",
  description: "Guide complet pour structurer vos sequences email de prospection B2B. Structure ideale, icebreaker, follow-ups, break-up email, personnalisation IA et 3 templates prets a copier.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/sequence-email-prospection-b2b" },
  articleSection: "Process & Outils",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-sequences-marchent-pas", title: "Pourquoi vos sequences ne marchent pas" },
  { id: "structure-ideale", title: "La structure ideale" },
  { id: "premier-email", title: "Le premier email" },
  { id: "follow-ups", title: "Les follow-ups" },
  { id: "dernier-email", title: "Le dernier email" },
  { id: "personnalisation-ia", title: "Personnalisation avec l'IA" },
  { id: "metriques", title: "Les metriques" },
  { id: "templates", title: "3 templates de sequences" },
];

const relatedArticles = [
  { title: "Cold email B2B : 15 templates de prospection qui convertissent", slug: "cold-email-b2b-templates", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Sequences HubSpot : les meilleures pratiques", slug: "meilleures-pratiques-sequences-hubspot", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Automatiser la prospection B2B avec l'IA", slug: "automatiser-prospection-b2b-ia", category: "IA & Agents", color: "#6D00CC" },
];

export default function SequenceEmailProspectionB2bArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-sequences-marchent-pas");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Sequence%20email%20B2B%20%3A%20comment%20structurer%20votre%20prospection&url=https://ceres.agency/blog/sequence-email-prospection-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/sequence-email-prospection-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Sequence email B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Process &amp; Outils</Badge>
                <span className="text-[11px] text-[#CCC]">15 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Sequence email B2B : comment structurer votre prospection
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                La plupart des sequences de prospection B2B ne generent aucun rendez-vous. Pas parce que le produit est mauvais, mais parce que la structure est mauvaise. Trop d&apos;emails, pas assez de valeur, zero personnalisation. Ce guide vous donne la structure ideale, les templates et la methode pour personnaliser a grande echelle avec l&apos;IA.
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
              <section id="pourquoi-sequences-marchent-pas" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi vos sequences ne marchent pas</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le taux de reponse moyen des sequences de cold email en B2B est de 1 a 3%. Pour une campagne de 1 000 prospects, ca represente 10 a 30 reponses, dont la moitie sont des &ldquo;non merci&rdquo;. Le probleme n&apos;est pas le canal. L&apos;email reste le canal le plus efficace en prospection B2B. Le probleme, c&apos;est la facon dont les sequences sont construites.</p>
                    <p>Cinq erreurs reviennent dans 90% des sequences qu&apos;on audite :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" /><strong className="text-[#111]">Trop de emails.</strong> 7, 8, parfois 10 emails dans une sequence. Au-dela de 5, le prospect vous a deja classe dans la categorie spam. Chaque email supplementaire degrade votre reputation, pas vos chances de reponse.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Pas de valeur dans les follow-ups.</strong> Le follow-up classique : &ldquo;Je me permets de revenir vers vous&rdquo;. Le prospect ne repond pas parce qu&apos;il n&apos;a aucune raison de repondre. Chaque email doit apporter un element nouveau : une donnee, un cas client, un insight sur leur secteur.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Zero personnalisation.</strong> Le meme email envoye a 500 personnes. Le prospect le voit immediatement. La personnalisation ne veut pas dire &ldquo;{'{'}prenom{'}'},&rdquo;. Ca veut dire une reference concrete a leur entreprise, leur actualite ou leur problematique specifique.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Mauvais timing.</strong> Tous les emails envoyes le lundi a 9h. Le prospect recoit 40 emails de prospection le lundi matin. Espacez vos envois, variez les jours, evitez les heures de pointe.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Pas de CTA clair.</strong> L&apos;email se termine par une question vague ou un pave de texte. Le prospect ne sait pas quoi faire. Un CTA unique, simple, sans friction : &ldquo;15 minutes cette semaine ?&rdquo;.</li>
                    </ul>
                    <p>La bonne nouvelle : ces erreurs sont facilement corrigeables. Une sequence bien structuree peut passer de 2% a 8-12% de taux de reponse. C&apos;est 4 a 6 fois plus de rendez-vous, avec le meme nombre de prospects.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "1-3%", label: "taux de reponse moyen des sequences B2B", color: "#EF4444" },
                      { stat: "8-12%", label: "taux de reponse d'une sequence bien structuree", color: "#22C55E" },
                      { stat: "5 emails", label: "nombre optimal dans une sequence", color: "#6C5CE7" },
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
              <section id="structure-ideale" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La structure ideale : 5 emails en 14 jours</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La structure optimale d&apos;une sequence de prospection B2B repose sur 3 a 5 emails espaces sur 10 a 14 jours. Chaque email a un role precis, un angle different et un CTA unique. Voici le framework que l&apos;on utilise chez nos clients.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Structure de la sequence ideale</p>
                    <div className="space-y-3">
                      {[
                        { day: "J0", title: "L'icebreaker", desc: "Reference personnalisee + problematique + CTA", color: "#6C5CE7", role: "Capter l'attention" },
                        { day: "J+3", title: "La valeur", desc: "Cas client ou donnee sectorielle + lien avec leur situation", color: "#4B5EFC", role: "Prouver la credibilite" },
                        { day: "J+6", title: "L'insight", desc: "Observation specifique sur leur entreprise ou secteur", color: "#22C55E", role: "Montrer l'expertise" },
                        { day: "J+10", title: "La preuve sociale", desc: "Resultat chiffre chez un client similaire", color: "#FF7A59", role: "Reduire le risque percu" },
                        { day: "J+14", title: "Le break-up", desc: "Dernier email, ton decontracte, porte ouverte", color: "#EF4444", role: "Creer l'urgence" },
                      ].map((step) => (
                        <div key={step.day} className="flex items-start gap-3 rounded-lg bg-white border border-[#F2F2F2] p-3">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: step.color }}>{step.day}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[12px] font-semibold text-[#111]">{step.title}</span>
                              <span className="text-[9px] px-2 py-0.5 rounded-full font-medium" style={{ background: `${step.color}15`, color: step.color }}>{step.role}</span>
                            </div>
                            <p className="text-[11px] text-[#777] leading-[1.5]">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;espacement est crucial.</strong> Trop rapproche (1 jour entre chaque), vous etes agressif. Trop espace (7 jours entre chaque), le prospect vous a oublie. L&apos;espacement ideal est de 2 a 4 jours entre les premiers emails, puis un espacement plus long avant le break-up.</p>
                    <p><strong className="text-[#111]">3 ou 5 emails ?</strong> Si votre cible est tres sollicitee (C-level, tech), 3 emails suffisent. Si votre cible est moins sollicitee (operations, middle management), 5 emails fonctionnent bien. Testez les deux et comparez les resultats sur 200+ prospects.</p>
                    <p><strong className="text-[#111]">Multicanal.</strong> La sequence email fonctionne encore mieux combinee avec LinkedIn. Ajouter une demande de connexion LinkedIn avant le premier email (+15% d&apos;open rate) et un message LinkedIn entre l&apos;email 3 et 4 (+8% de taux de reponse global).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="premier-email" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le premier email : l&apos;icebreaker</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le premier email determine tout. S&apos;il est ignore, la sequence entiere est compromise. L&apos;icebreaker doit faire trois choses en moins de 100 mots : prouver que vous connaissez le prospect, identifier un probleme reel et proposer une action simple.</p>
                    <p><strong className="text-[#111]">L&apos;objet.</strong> Court, specifique, sans majuscule marketing. Les objets qui fonctionnent le mieux : une question directe (&ldquo;votre [probleme specifique] ?&rdquo;), une reference a leur entreprise (&ldquo;[nom entreprise] + [sujet]&rdquo;) ou un chiffre (&ldquo;34% des [leur secteur] ont ce probleme&rdquo;). Evitez les objets generiques (&ldquo;Solution innovante pour votre entreprise&rdquo;).</p>
                    <p><strong className="text-[#111]">La premiere phrase.</strong> Pas de &ldquo;Je me presente, je suis...&rdquo;. Le prospect s&apos;en fiche. Commencez par eux. Une observation sur leur entreprise, un commentaire sur un post LinkedIn, une reference a une actualite de leur secteur. Le but : montrer que cet email est ecrit pour eux, pas pour 500 personnes.</p>
                    <p><strong className="text-[#111]">Le probleme.</strong> En 1 a 2 phrases, nommez un probleme que vous savez qu&apos;ils ont. Soyez specifique. Pas &ldquo;ameliorer votre productivite&rdquo;, mais &ldquo;vos SDR passent probablement 3 heures par jour a enrichir des leads manuellement&rdquo;. Plus c&apos;est specifique, plus ca resonne.</p>
                    <p><strong className="text-[#111]">Le CTA.</strong> Une seule question, une seule action. &ldquo;15 minutes cette semaine pour en discuter ?&rdquo;. Pas de lien vers une page, pas de piece jointe, pas de calendly dans le premier email. Juste une question qui appelle une reponse en un mot : oui.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-3">Anatomie d&apos;un bon icebreaker</p>
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-1.5 shrink-0" /><span className="text-[#666]"><strong className="text-[#111]">Objet :</strong> [Nom entreprise] + prospection outbound</span></div>
                      <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-1.5 shrink-0" /><span className="text-[#666]"><strong className="text-[#111]">Ligne 1 :</strong> Reference personnalisee (post LinkedIn, actualite, recrutement)</span></div>
                      <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-1.5 shrink-0" /><span className="text-[#666]"><strong className="text-[#111]">Ligne 2-3 :</strong> Probleme specifique + impact chiffre</span></div>
                      <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-1.5 shrink-0" /><span className="text-[#666]"><strong className="text-[#111]">Ligne 4 :</strong> CTA simple (&ldquo;15 min cette semaine ?&rdquo;)</span></div>
                      <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-1.5 shrink-0" /><span className="text-[#666]"><strong className="text-[#111]">Total :</strong> 60-100 mots maximum</span></div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="follow-ups" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les follow-ups : apporter de la valeur, pas juste relancer</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le follow-up n&apos;est pas une relance. C&apos;est un nouvel email avec un nouvel angle. Si votre follow-up commence par &ldquo;Je me permets de revenir vers vous&rdquo; ou &ldquo;Avez-vous eu le temps de lire mon email ?&rdquo;, vous n&apos;apportez rien. Le prospect n&apos;a aucune raison de repondre.</p>
                    <p>Chaque follow-up doit apporter un element nouveau que le prospect n&apos;avait pas avant. Voici les quatre types de follow-ups qui fonctionnent :</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Le cas client",
                        desc: "Partagez un resultat concret obtenu chez un client similaire. Pas un PDF de 20 pages. 2-3 phrases : qui etait le client, quel etait le probleme, quel resultat en combien de temps. 'On a aide [entreprise similaire] a passer de 2% a 9% de taux de reponse en restructurant leurs sequences. En 6 semaines.'",
                        color: "#22C55E",
                      },
                      {
                        title: "La donnee sectorielle",
                        desc: "Un chiffre, une tendance, un benchmark pertinent pour leur secteur. 'Les SaaS B2B avec un cycle de vente > 30 jours obtiennent 3x plus de rendez-vous avec des sequences multicanales qu'avec de l'email seul.' Cela positionne votre expertise sans etre promotionnel.",
                        color: "#4B5EFC",
                      },
                      {
                        title: "L'observation specifique",
                        desc: "Quelque chose que vous avez remarque sur leur entreprise : ils recrutent des SDR (signal de croissance outbound), ils ont lance un nouveau produit (besoin de pipeline), leur concurrent fait X (pression competitive). Cela montre que vous suivez leur actualite.",
                        color: "#6C5CE7",
                      },
                      {
                        title: "Le contenu utile",
                        desc: "Un article, un template, un outil gratuit pertinent pour leur problematique. Pas votre dernier article de blog generique. Un contenu specifiquement utile pour eux. 'J'ai cree un template de sequence pour les SaaS qui vendent aux DAF. Ca pourrait vous interesser.'",
                        color: "#FF7A59",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La regle d&apos;or :</strong> si vous supprimez le nom de votre entreprise du follow-up et qu&apos;il n&apos;a plus aucun interet pour le prospect, c&apos;est un mauvais follow-up. Chaque email doit avoir de la valeur intrinseque, independamment de votre offre.</p>
                    <p>Le ton doit rester conversationnel. Pas de formules corporate. Ecrivez comme si vous ecriviez a un collegue que vous ne connaissez pas encore. Court (60-80 mots), direct, un seul sujet par email.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="dernier-email" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le dernier email : le break-up</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le break-up email est souvent celui qui genere le plus de reponses. C&apos;est contre-intuitif, mais ca s&apos;explique par la psychologie de la perte : quand quelqu&apos;un annonce qu&apos;il arrete de vous contacter, vous vous demandez si vous ne ratez pas quelque chose.</p>
                    <p><strong className="text-[#111]">Le ton.</strong> Decontracte, pas offensif. Pas de culpabilisation (&ldquo;je n&apos;ai jamais eu de reponse&rdquo;). Pas de passif-agressif (&ldquo;je comprends que vous etes tres occupe&rdquo;). Un ton simple et direct : &ldquo;Je ne vais pas vous ecrire a nouveau. Si le sujet vous interesse un jour, ma porte est ouverte.&rdquo;</p>
                    <p><strong className="text-[#111]">La structure.</strong> 3 lignes maximum. Ligne 1 : annonce que c&apos;est le dernier email. Ligne 2 : rappel ultra-court de ce que vous faites. Ligne 3 : porte ouverte. C&apos;est tout. Pas de CTA force, pas de lien Calendly, pas de piece jointe.</p>
                    <p><strong className="text-[#111]">Pourquoi ca marche.</strong> Le break-up declenche trois mecanismes : le relief (le prospect est soulage que la sequence s&apos;arrete), la curiosite (il relit peut-etre les emails precedents) et la reciprocite (vous respectez son temps, il respecte le votre). En moyenne, le break-up genere 15 a 25% des reponses totales de la sequence.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-3">Exemple de break-up email</p>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 text-[11px] text-[#666] leading-[1.8] italic">
                      <p>Objet : je ferme le dossier</p>
                      <p className="mt-2">[Prenom],</p>
                      <p className="mt-1">Dernier email. Je ne vais pas vous relancer a nouveau sur ce sujet.</p>
                      <p className="mt-1">Si un jour la question de [problematique] revient sur la table, vous savez ou me trouver.</p>
                      <p className="mt-1">Bonne continuation.</p>
                    </div>
                    <p className="text-[10px] text-[#BBB] mt-2">15-25% des reponses d&apos;une sequence viennent du break-up email</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="personnalisation-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Personnalisation a grande echelle avec l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le dilemme historique de la prospection : personnaliser prend du temps, mais le volume est necessaire pour generer assez de pipeline. L&apos;IA resout ce dilemme. Elle permet de personnaliser chaque email avec des elements specifiques au prospect, a grande echelle.</p>
                    <p><strong className="text-[#111]">Le workflow.</strong> Pour chaque prospect, l&apos;IA recoit un contexte enrichi : donnees firmographiques (taille, secteur, levee de fonds), donnees individuelles (poste, anciennete, posts LinkedIn recents), signaux d&apos;intent (recrutement, technos utilisees, actualites). A partir de ce contexte, l&apos;IA genere la premiere phrase personnalisee et le lien avec la problematique.</p>
                    <p><strong className="text-[#111]">Ce que l&apos;IA fait bien.</strong> Identifier le bon angle d&apos;approche a partir de multiples sources de donnees. Ecrire une premiere phrase qui montre une connaissance reelle du prospect. Adapter le ton au secteur et au niveau hierarchique. Varier les formulations pour eviter que les emails se ressemblent.</p>
                    <p><strong className="text-[#111]">Ce que l&apos;IA ne fait pas.</strong> Remplacer la strategie. L&apos;IA a besoin d&apos;un framework clair : quelle problematique adresser, quel ton utiliser, quel CTA. Sans ce cadre, elle produit des emails generiques avec des phrases personnalisees. Ca se voit.</p>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Sans IA", stat: "8-10 emails/h", desc: "Un SDR personalise manuellement 8 a 10 emails par heure. Qualite variable selon la fatigue et l'experience.", color: "#EF4444" },
                      { title: "Avec IA", stat: "40-60 emails/h", desc: "L'IA genere les drafts personalises. Le SDR valide et ajuste en 30 secondes par email. Qualite constante.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[11px] font-semibold mb-1" style={{ color: item.color }}>{item.title}</p>
                        <p className="text-[22px] font-bold mb-1" style={{ color: item.color }}>{item.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La validation humaine est non negociable.</strong> Chaque email genere par l&apos;IA doit etre relu et valide par un humain avant envoi. L&apos;IA fait parfois des erreurs factuelles, utilise un ton inapproprie ou manque de subtilite. L&apos;humain est le filtre qualite. Supprimer ce filtre pour gagner du temps est le moyen le plus rapide de detruire votre reputation.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="metriques" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les metriques a suivre</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Trois metriques suffisent pour piloter vos sequences. Tout le reste est du bruit. Voici ce qu&apos;il faut mesurer, les benchmarks et les leviers d&apos;amelioration pour chacune.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Metrique</th>
                            <th className="text-center py-2 px-2 text-[#EF4444] font-semibold">Mauvais</th>
                            <th className="text-center py-2 px-2 text-[#FF7A59] font-semibold">Moyen</th>
                            <th className="text-center py-2 px-2 text-[#22C55E] font-semibold">Bon</th>
                            <th className="text-center py-2 pl-2 text-[#999] font-semibold">Levier principal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { metric: "Open rate", bad: "< 40%", avg: "40-60%", good: "> 60%", lever: "Objet + delivrabilite" },
                            { metric: "Reply rate", bad: "< 3%", avg: "3-8%", good: "> 8%", lever: "Personnalisation + valeur" },
                            { metric: "Meeting booked rate", bad: "< 1%", avg: "1-3%", good: "> 3%", lever: "Ciblage + CTA" },
                          ].map((row) => (
                            <tr key={row.metric} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.metric}</td>
                              <td className="py-2.5 px-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444] font-medium">{row.bad}</span></td>
                              <td className="py-2.5 px-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#FF7A59]/10 text-[#FF7A59] font-medium">{row.avg}</span></td>
                              <td className="py-2.5 px-2 text-center"><span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">{row.good}</span></td>
                              <td className="py-2.5 pl-2 text-center text-[#999]">{row.lever}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Open rate.</strong> Si votre open rate est sous 40%, le probleme est technique (delivrabilite, SPF/DKIM, domaine brule) ou vos objets ne donnent pas envie d&apos;ouvrir. Verifiez d&apos;abord la delivrabilite avec un outil comme Mail-tester, puis testez vos objets en A/B.</p>
                    <p><strong className="text-[#111]">Reply rate.</strong> C&apos;est la metrique qui compte vraiment. Un open rate de 80% avec un reply rate de 1% signifie que vos emails sont ouverts mais ininteressants. Le levier principal est la personnalisation et la pertinence du contenu.</p>
                    <p><strong className="text-[#111]">Meeting booked rate.</strong> Le ratio reply-to-meeting depend de la qualite du ciblage initial et de la clarte du CTA. Si vous avez beaucoup de reponses mais peu de meetings, votre ciblage est trop large ou votre proposition de valeur n&apos;est pas assez claire.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="templates" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">3 templates de sequences pretes a copier</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Voici trois sequences completes adaptees a des cas d&apos;usage differents. Chaque template est un point de depart a personnaliser avec votre proposition de valeur et votre ton.</p>
                  </div>

                  <div className="my-6 space-y-4">
                    {[
                      {
                        title: "Sequence pour decision maker (CEO, VP Sales)",
                        emails: [
                          "J0 : Reference a un post LinkedIn ou un resultat public + question sur un pain point specifique",
                          "J+3 : ROI chiffre d'un client dans leur secteur (2-3 lignes)",
                          "J+7 : Break-up direct et respectueux",
                        ],
                        note: "3 emails seulement. Les C-level n'ont pas le temps pour 5 emails.",
                        color: "#6C5CE7",
                      },
                      {
                        title: "Sequence pour operationnel (Head of Sales, RevOps)",
                        emails: [
                          "J0 : Observation specifique sur leur stack ou process + probleme que ca genere",
                          "J+3 : Cas client similaire avec resultats chiffres",
                          "J+6 : Contenu utile (template, benchmark, outil gratuit)",
                          "J+10 : Nouvelle donnee sectorielle",
                          "J+14 : Break-up avec porte ouverte",
                        ],
                        note: "5 emails. Les profils ops sont receptifs aux donnees et aux outils concrets.",
                        color: "#22C55E",
                      },
                      {
                        title: "Sequence post-evenement (salon, webinar)",
                        emails: [
                          "J0 : Reference a l'evenement + point commun discute",
                          "J+2 : Partage d'un insight lie au sujet de l'evenement",
                          "J+5 : Proposition de call pour approfondir un point specifique",
                          "J+10 : Break-up avec lien vers une ressource utile",
                        ],
                        note: "4 emails. Le contexte evenementiel rechauffe le contact.",
                        color: "#FF7A59",
                      },
                    ].map((tpl) => (
                      <div key={tpl.title} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full" style={{ background: tpl.color }} />
                          <p className="text-[12px] font-semibold text-white">{tpl.title}</p>
                        </div>
                        <div className="space-y-1.5 mb-3">
                          {tpl.emails.map((e, i) => (
                            <div key={i} className="flex items-start gap-2 text-[10px]">
                              <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: tpl.color }} />
                              <span className="text-[#888]">{e}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[10px] text-[#666] italic">{tpl.note}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Ces templates sont des structures, pas des textes a copier mot pour mot. L&apos;efficacite vient de la personnalisation que vous ajoutez par-dessus. Un template parfait envoye a la mauvaise personne ne genere rien. Un template moyen envoye au bon prospect avec la bonne personnalisation genere des meetings.</p>
                    <p>Chez Ceres, on configure ces sequences dans HubSpot ou Lemlist, avec l&apos;enrichissement automatique via Clay et la personnalisation IA via Claude. Le SDR valide les drafts en 30 secondes par prospect au lieu de 10 minutes. Meme qualite, 5x plus de volume.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Structurer vos sequences de prospection ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on configure vos sequences de prospection B2B dans HubSpot ou Lemlist. Structure, templates, personnalisation IA et reporting integre. Commencez par un appel de 30 minutes.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6C5CE7] text-white rounded-lg text-[13px] font-medium hover:bg-[#5B4ED6] transition-colors">
                  Optimiser vos sequences
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#6C5CE7] transition-colors leading-[1.4]">{a.title}</p>
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
