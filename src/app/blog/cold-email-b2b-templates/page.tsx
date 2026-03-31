"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cold email B2B : 15 templates de prospection qui convertissent",
  description: "15 templates de cold email B2B classes par cas d'usage avec objets, corps, explications et conseils de personnalisation. Outils, delivrabilite et mesure des resultats.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/cold-email-b2b-templates" },
  articleSection: "Process & Outils",
  wordCount: 4200,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-cold-email", title: "Pourquoi le cold email fonctionne" },
  { id: "anatomie-bon-email", title: "Anatomie d'un bon cold email" },
  { id: "templates-intro", title: "Templates d'introduction" },
  { id: "templates-followup", title: "Templates de follow-up" },
  { id: "templates-referral", title: "Templates de referral" },
  { id: "templates-pain-point", title: "Templates pain point" },
  { id: "templates-social-proof", title: "Templates social proof" },
  { id: "templates-breakup", title: "Templates de break-up" },
  { id: "objets-email", title: "Formules d'objets qui convertissent" },
  { id: "personnalisation-scale", title: "Personnalisation a grande echelle" },
  { id: "delivrabilite", title: "Checklist delivrabilite" },
  { id: "outils", title: "Comparatif des outils" },
  { id: "mesurer-resultats", title: "Mesurer les resultats" },
  { id: "erreurs-courantes", title: "Erreurs courantes" },
  { id: "methodologie", title: "Notre methodologie" },
];

const relatedArticles = [
  { title: "Lemlist : notre test complet de l'outil de prospection multicanal", slug: "lemlist-test-complet-outil-prospection", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Emelia : notre test complet de l'outil de cold emailing", slug: "emelia-test-outil-cold-emailing", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Sequences HubSpot : les meilleures pratiques", slug: "meilleures-pratiques-sequences-hubspot", category: "CRM & HubSpot", color: "#4B5EFC" },
];

export default function ColdEmailB2BTemplatesArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-cold-email");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "4%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "14%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "55%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Cold%20email%20B2B%2015%20templates&url=https://ceres.agency/blog/cold-email-b2b-templates" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/cold-email-b2b-templates" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Cold email B2B templates</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Process &amp; Outils</Badge>
                <span className="text-[11px] text-[#CCC]">20 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Cold email B2B : 15 templates de prospection qui convertissent
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le cold email reste le canal d&apos;acquisition B2B le plus rentable quand il est bien execute. Nous avons envoye plus de 50 000 cold emails pour nos clients en 2025. Voici les 15 templates qui ont genere les meilleurs taux de reponse, organises par cas d&apos;usage, avec les objets, les corps et les explications de pourquoi chaque template fonctionne. Pas de theorie : du terrain.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>31 mars 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 */}
              <section id="pourquoi-cold-email" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi le cold email fonctionne encore en 2026</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque annee, on entend la meme prediction : &ldquo;le cold email est mort&rdquo;. Et chaque annee, les entreprises qui le font bien continuent de generer des pipelines a 6 et 7 chiffres avec ce canal. La realite est plus nuancee que le discours ambiant. Le cold email generique et non personnalise est effectivement mort. Le cold email pertinent, cible et bien execute n&apos;a jamais aussi bien fonctionne.</p>
                    <p>Pourquoi ? Parce que la boite de reception reste l&apos;endroit ou les decideurs B2B passent le plus de temps professionnel. Un email bien ecrit, envoye au bon moment, a la bonne personne, avec un message qui resonne avec un probleme reel, obtient des taux de reponse de 5 a 15%. Comparez cela au taux de conversion moyen d&apos;une campagne LinkedIn Ads (0.5-2%) ou d&apos;un formulaire de contact inbound (2-4%). Le ratio cout/resultat du cold email est imbattable.</p>
                    <p>La cle, c&apos;est que le marche s&apos;est professionnalise. Les outils d&apos;enrichissement comme Clay permettent de personnaliser a grande echelle. Les plateformes comme Lemlist et La Growth Machine gerent le multi-canal. Les sequences HubSpot integrent le suivi CRM. Le cold email en 2026, ce n&apos;est plus du spam : c&apos;est du marketing one-to-one automatise intelligemment.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "8.5%", label: "taux de reponse moyen de nos campagnes", color: "#6C5CE7" },
                      { stat: "50K+", label: "cold emails envoyes en 2025 pour nos clients", color: "#FF7A59" },
                      { stat: "32 EUR", label: "cout moyen par lead qualifie obtenu", color: "#22C55E" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[22px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="anatomie-bon-email" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Anatomie d&apos;un cold email qui convertit</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de plonger dans les templates, il faut comprendre les 5 composants qui font la difference entre un email ignore et un email qui obtient une reponse. Chaque template ci-dessous respecte ces principes fondamentaux.</p>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      { num: "01", title: "L'objet (subject line)", desc: "40 caracteres maximum, pas de majuscules excessives, pas de ponctuation agressive. L'objet doit creer de la curiosite sans clickbait. Les meilleurs objets ressemblent a un email interne." },
                      { num: "02", title: "La premiere ligne (opener)", desc: "Personnalisee obligatoirement. Reference au prospect : son poste, son entreprise, une actualite, un post LinkedIn. Jamais de 'Je me permets de vous contacter' ou 'J'espere que vous allez bien'." },
                      { num: "03", title: "La proposition de valeur", desc: "Une ou deux phrases maximum. Quel probleme vous resolvez, quel resultat vous obtenez. Chiffres concrets quand possible. Pas de liste de fonctionnalites." },
                      { num: "04", title: "La preuve sociale (optionnel)", desc: "Un client similaire, un chiffre de resultat, une reference sectorielle. Court et factuel. 'Nous avons aide [entreprise similaire] a atteindre [resultat]'." },
                      { num: "05", title: "Le CTA (call-to-action)", desc: "Une seule question, facile a repondre. Pas de 'Seriez-vous disponible pour un call de 30 minutes'. Plutot 'Est-ce un sujet chez vous en ce moment ?' ou '15 minutes cette semaine ?'." },
                    ].map((item) => (
                      <div key={item.num} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start gap-3">
                          <span className="text-[11px] font-bold text-[#6C5CE7] bg-[#6C5CE7]/10 px-2 py-1 rounded">{item.num}</span>
                          <div>
                            <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                            <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La regle des 80 mots.</strong> Un cold email efficace fait entre 50 et 120 mots. Nos donnees montrent que les emails de 60 a 90 mots obtiennent les meilleurs taux de reponse. Au-dela de 150 mots, le taux de reponse chute de 40%. Le prospect ne vous connait pas : il ne lira pas un roman.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 - Templates intro */}
              <section id="templates-intro" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Templates d&apos;introduction (premier contact)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>L&apos;email d&apos;introduction est le plus difficile a reussir. Vous n&apos;avez aucune relation prealable, le prospect ne vous connait pas, et vous avez 3 secondes pour capter son attention. Voici nos 4 meilleurs templates de premier contact.</p>
                  </div>

                  {/* Template 1 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#1</span>
                      <span className="text-[12px] font-semibold text-[#111]">L&apos;approche directe par le probleme</span>
                      <span className="text-[9px] text-[#6C5CE7] bg-[#6C5CE7]/10 px-1.5 py-0.5 rounded ml-auto">Taux de reponse : 11%</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">&#123;&#123;prenom&#125;&#125;, question rapide sur &#123;&#123;sujet&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />Je vois que &#123;&#123;entreprise&#125;&#125; &#123;&#123;observation_specifique&#125;&#125;. D&apos;experience, les equipes dans votre situation rencontrent souvent &#123;&#123;probleme_precis&#125;&#125;.<br /><br />Nous avons aide &#123;&#123;client_similaire&#125;&#125; a &#123;&#123;resultat_chiffre&#125;&#125; en &#123;&#123;delai&#125;&#125;.<br /><br />Est-ce un sujet chez vous en ce moment ?</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> L&apos;email commence par une observation sur le prospect (pas sur vous). Il identifie un probleme reel et propose une preuve que vous savez le resoudre. Le CTA est une simple question oui/non, zero friction.</p>
                  </div>

                  {/* Template 2 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#2</span>
                      <span className="text-[12px] font-semibold text-[#111]">L&apos;approche par le contenu partage</span>
                      <span className="text-[9px] text-[#6C5CE7] bg-[#6C5CE7]/10 px-1.5 py-0.5 rounded ml-auto">Taux de reponse : 9%</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Ressource sur &#123;&#123;sujet&#125;&#125; pour &#123;&#123;entreprise&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />J&apos;ai vu votre &#123;&#123;post_linkedin / intervention / article&#125;&#125; sur &#123;&#123;sujet&#125;&#125;. On a justement publie &#123;&#123;ressource&#125;&#125; qui creuse ce sujet avec des donnees terrain.<br /><br />Je pense que ca pourrait vous etre utile vu &#123;&#123;contexte_prospect&#125;&#125;.<br /><br />Je vous l&apos;envoie ?</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> Vous donnez avant de demander. La reference a un contenu du prospect montre que l&apos;email n&apos;est pas generique. Le CTA demande la permission plutot que d&apos;imposer un call.</p>
                  </div>

                  {/* Template 3 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#3</span>
                      <span className="text-[12px] font-semibold text-[#111]">L&apos;approche evenementielle</span>
                      <span className="text-[9px] text-[#6C5CE7] bg-[#6C5CE7]/10 px-1.5 py-0.5 rounded ml-auto">Taux de reponse : 14%</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Felicitations pour &#123;&#123;evenement&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />J&apos;ai vu que &#123;&#123;entreprise&#125;&#125; vient de &#123;&#123;levee_de_fonds / recrutement / lancement / expansion&#125;&#125;. Felicitations.<br /><br />Generalement, apres ce type d&apos;etape, les equipes &#123;&#123;role&#125;&#125; font face a &#123;&#123;defi_lie_a_evenement&#125;&#125;. C&apos;est exactement la que nous intervenons chez &#123;&#123;votre_entreprise&#125;&#125;.<br /><br />Ca vaut le coup d&apos;en discuter 15 minutes ?</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> Le trigger evenementiel est le meilleur moment pour contacter un prospect. Apres une levee de fonds, les budgets s&apos;ouvrent. Apres un recrutement massif, les besoins d&apos;outillage augmentent. Le timing est parfait.</p>
                  </div>

                  {/* Template 4 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#4</span>
                      <span className="text-[12px] font-semibold text-[#111]">L&apos;approche par la question ouverte</span>
                      <span className="text-[9px] text-[#6C5CE7] bg-[#6C5CE7]/10 px-1.5 py-0.5 rounded ml-auto">Taux de reponse : 8%</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">&#123;&#123;sujet&#125;&#125; chez &#123;&#123;entreprise&#125;&#125; ?</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />Curieux de savoir comment &#123;&#123;entreprise&#125;&#125; gere &#123;&#123;processus_specifique&#125;&#125; aujourd&apos;hui. La plupart des &#123;&#123;titre_du_prospect&#125;&#125; que je rencontre galere avec &#123;&#123;probleme_commun&#125;&#125;.<br /><br />C&apos;est votre cas aussi ?</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> L&apos;email est ultra-court (moins de 50 mots). La question ouverte invite a repondre. Vous ne vendez rien, vous ouvrez une conversation. Ideal pour les C-level qui n&apos;ont pas le temps de lire.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 - Follow-up */}
              <section id="templates-followup" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Templates de follow-up</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>80% des ventes se font entre le 3e et le 8e point de contact. Un seul email ne suffit jamais. Le follow-up est ou la majorite des commerciaux abandonnent et ou les meilleurs convertissent. La cle : chaque relance doit apporter une nouvelle information ou un nouvel angle.</p>
                  </div>

                  {/* Template 5 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#5</span>
                      <span className="text-[12px] font-semibold text-[#111]">Follow-up J+3 - La valeur ajoutee</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Re: &#123;&#123;objet_email_1&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">&#123;&#123;prenom&#125;&#125;,<br /><br />Suite a mon email de lundi. J&apos;ai pense a vous en lisant &#123;&#123;article/etude/stat&#125;&#125;. Les entreprises de votre secteur qui &#123;&#123;action&#125;&#125; voient en moyenne &#123;&#123;resultat&#125;&#125;.<br /><br />Je serais ravi de vous montrer comment en 15 min.</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Principe :</strong> Ne jamais relancer avec &ldquo;Je me permets de revenir vers vous&rdquo;. Apportez une donnee, un insight, une ressource que le prospect n&apos;a pas.</p>
                  </div>

                  {/* Template 6 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#6</span>
                      <span className="text-[12px] font-semibold text-[#111]">Follow-up J+7 - Le cas client</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Comment &#123;&#123;client_similaire&#125;&#125; a resolu &#123;&#123;probleme&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />&#123;&#123;client_similaire&#125;&#125; avait exactement le meme defi que &#123;&#123;entreprise&#125;&#125; : &#123;&#123;probleme&#125;&#125;. En &#123;&#123;delai&#125;&#125;, ils ont &#123;&#123;resultat_mesurable&#125;&#125;.<br /><br />Je peux vous envoyer l&apos;etude de cas ?</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Principe :</strong> Le social proof par un cas client similaire est le meilleur argument de relance. Le prospect se projette dans le resultat.</p>
                  </div>

                  {/* Template 7 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#7</span>
                      <span className="text-[12px] font-semibold text-[#111]">Follow-up J+14 - Le voicemail combo</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Message vocal + petit complement</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">&#123;&#123;prenom&#125;&#125;,<br /><br />Je viens de vous laisser un court message vocal. En complement, voici &#123;&#123;lien_ressource&#125;&#125; qui detaille comment nous aidons les &#123;&#123;secteur/role&#125;&#125; a &#123;&#123;benefice&#125;&#125;.<br /><br />Pas de pression, dites-moi simplement si c&apos;est pertinent pour &#123;&#123;entreprise&#125;&#125;.</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Principe :</strong> Le combo voicemail + email multiplie par 2.5x le taux de reponse vs email seul. Le prospect a entendu votre voix, l&apos;email arrive dans la foulee.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 - Referral */}
              <section id="templates-referral" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Templates de referral (recommandation interne)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Quand vous n&apos;arrivez pas a joindre le bon interlocuteur, passez par un collegue. Le referral interne est l&apos;un des hacks les plus sous-utilises en prospection B2B.</p>
                  </div>

                  {/* Template 8 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#8</span>
                      <span className="text-[12px] font-semibold text-[#111]">Le referral ascendant</span>
                      <span className="text-[9px] text-[#6C5CE7] bg-[#6C5CE7]/10 px-1.5 py-0.5 rounded ml-auto">Taux de reponse : 18%</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Qui gere &#123;&#123;sujet&#125;&#125; chez &#123;&#123;entreprise&#125;&#125; ?</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />Je cherche la personne chez &#123;&#123;entreprise&#125;&#125; qui gere &#123;&#123;sujet&#125;&#125;. Est-ce vous ou pourriez-vous m&apos;orienter vers la bonne personne ?<br /><br />Merci d&apos;avance.</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> Cet email a le taux de reponse le plus eleve de toute la liste. Pourquoi ? Parce que repondre &ldquo;c&apos;est moi&rdquo; ou &ldquo;contactez X&rdquo; demande zero effort. Les gens aiment aider quand c&apos;est facile.</p>
                  </div>

                  {/* Template 9 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#9</span>
                      <span className="text-[12px] font-semibold text-[#111]">Le referral par le CEO</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">&#123;&#123;prenom_ceo&#125;&#125;, question rapide</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom_ceo&#125;&#125;,<br /><br />Je sais que &#123;&#123;sujet&#125;&#125; n&apos;est probablement pas votre responsabilite directe chez &#123;&#123;entreprise&#125;&#125;. Qui me recommanderiez-vous de contacter dans votre equipe pour echanger sur &#123;&#123;proposition_valeur_courte&#125;&#125; ?<br /><br />Merci.</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> Quand le CEO transfere votre email a un manager, ce manager repond quasi-systematiquement. L&apos;email vient &ldquo;d&apos;en haut&rdquo;. C&apos;est le top-down referral et c&apos;est extremement efficace.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 - Pain point */}
              <section id="templates-pain-point" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Templates pain point (approche par la douleur)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Ces templates fonctionnent quand vous connaissez bien le probleme specifique de votre ICP. Ils sont plus agressifs mais aussi plus efficaces quand le pain point est reel.</p>
                  </div>

                  {/* Template 10 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#10</span>
                      <span className="text-[12px] font-semibold text-[#111]">Le calcul du cout de l&apos;inaction</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">&#123;&#123;entreprise&#125;&#125; perd &#123;&#123;montant&#125;&#125;/mois sur &#123;&#123;sujet&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />Les entreprises comme &#123;&#123;entreprise&#125;&#125; (&#123;&#123;taille&#125;&#125; commerciaux, secteur &#123;&#123;secteur&#125;&#125;) perdent en moyenne &#123;&#123;montant&#125;&#125; par mois a cause de &#123;&#123;probleme&#125;&#125;. C&apos;est &#123;&#123;montant_annuel&#125;&#125; sur un an.<br /><br />On a reduit ce chiffre de &#123;&#123;pourcentage&#125;&#125; chez &#123;&#123;client&#125;&#125;. 15 minutes pour voir si c&apos;est replicable chez vous ?</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> Le chiffrage du probleme rend la douleur tangible. Perdre 5 000 EUR/mois est abstrait. Perdre 60 000 EUR/an fait reagir.</p>
                  </div>

                  {/* Template 11 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#11</span>
                      <span className="text-[12px] font-semibold text-[#111]">Le benchmark sectoriel</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">&#123;&#123;entreprise&#125;&#125; vs benchmarks &#123;&#123;secteur&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />En travaillant avec &#123;&#123;nombre&#125;&#125; entreprises du secteur &#123;&#123;secteur&#125;&#125;, on constate que les meilleurs atteignent &#123;&#123;benchmark&#125;&#125; sur &#123;&#123;kpi&#125;&#125;. La moyenne est a &#123;&#123;moyenne&#125;&#125;.<br /><br />Ou se situe &#123;&#123;entreprise&#125;&#125; sur ce point ? Je peux vous envoyer notre benchmark complet si ca vous interesse.</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> Personne ne veut etre en-dessous de la moyenne de son secteur. Le benchmark cree un sentiment d&apos;urgence naturel et positionne votre expertise.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 - Social proof */}
              <section id="templates-social-proof" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Templates social proof</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>La preuve sociale est le levier psychologique le plus puissant en B2B. Si un concurrent ou une entreprise similaire utilise votre solution, le prospect se dit &ldquo;je devrais regarder aussi&rdquo;.</p>
                  </div>

                  {/* Template 12 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#12</span>
                      <span className="text-[12px] font-semibold text-[#111]">Le concurrent qui utilise deja votre solution</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Comment &#123;&#123;concurrent&#125;&#125; a ameliore &#123;&#123;kpi&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />Nous travaillons actuellement avec &#123;&#123;concurrent_ou_pair&#125;&#125; sur &#123;&#123;sujet&#125;&#125;. Depuis qu&apos;ils ont mis en place &#123;&#123;solution&#125;&#125;, ils ont &#123;&#123;resultat&#125;&#125;.<br /><br />&#123;&#123;entreprise&#125;&#125; etant dans le meme secteur, je me suis dit que ca pourrait vous interesser. Ouvert a un echange ?</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Attention :</strong> Ne mentionnez un concurrent que si c&apos;est vrai et que vous avez le droit de le faire (verifiez vos NDA). Sinon, utilisez &ldquo;une entreprise de votre secteur&rdquo;.</p>
                  </div>

                  {/* Template 13 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#13</span>
                      <span className="text-[12px] font-semibold text-[#111]">Le temoignage client</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Ce que dit &#123;&#123;nom_client&#125;&#125; (&#123;&#123;titre_client&#125;&#125;) sur &#123;&#123;sujet&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">Bonjour &#123;&#123;prenom&#125;&#125;,<br /><br />&#123;&#123;nom_client&#125;&#125;, &#123;&#123;titre&#125;&#125; chez &#123;&#123;entreprise_client&#125;&#125;, nous a dit : &ldquo;&#123;&#123;citation_courte&#125;&#125;&rdquo;.<br /><br />Il a atteint &#123;&#123;resultat&#125;&#125; en &#123;&#123;delai&#125;&#125;. &#123;&#123;entreprise&#125;&#125; ayant un profil similaire, ca vaut peut-etre le coup d&apos;en parler ?</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> Une citation reelle d&apos;un client reel est 10x plus convaincante que votre propre discours. Le prospect fait confiance a un pair, pas a un vendeur.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 - Break-up */}
              <section id="templates-breakup" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Templates de break-up (dernier email)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Le break-up email est votre derniere chance. Paradoxalement, c&apos;est souvent celui qui obtient le meilleur taux de reponse de la sequence. La psychologie de la rarete fonctionne : quand on sait que l&apos;opportunite disparait, on reagit.</p>
                  </div>

                  {/* Template 14 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#14</span>
                      <span className="text-[12px] font-semibold text-[#111]">Le break-up honnete</span>
                      <span className="text-[9px] text-[#6C5CE7] bg-[#6C5CE7]/10 px-1.5 py-0.5 rounded ml-auto">Taux de reponse : 12%</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Dernier message, &#123;&#123;prenom&#125;&#125;</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">&#123;&#123;prenom&#125;&#125;,<br /><br />Je vous ai contacte &#123;&#123;X&#125;&#125; fois sans reponse. Je comprends parfaitement, le timing n&apos;est peut-etre pas le bon.<br /><br />Je ferme ce dossier de mon cote. Si &#123;&#123;sujet&#125;&#125; devient un sujet chez &#123;&#123;entreprise&#125;&#125;, mon email est toujours la.<br /><br />Bonne continuation.</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> L&apos;honnetete et le respect desament le prospect. Beaucoup repondent a ce stade avec &ldquo;desole, j&apos;etais sous l&apos;eau, on peut en parler la semaine prochaine&rdquo;.</p>
                  </div>

                  {/* Template 15 */}
                  <div className="rounded-xl border border-[#6C5CE7]/20 bg-[#6C5CE7]/5 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white bg-[#6C5CE7] px-2 py-0.5 rounded">#15</span>
                      <span className="text-[12px] font-semibold text-[#111]">Le break-up avec humour</span>
                    </div>
                    <div className="rounded-lg bg-white border border-[#E8E8E8] p-4 mb-3">
                      <p className="text-[11px] text-[#999] mb-1">Objet :</p>
                      <p className="text-[12px] font-medium text-[#111] mb-3">Dois-je abandonner ?</p>
                      <p className="text-[11px] text-[#999] mb-1">Corps :</p>
                      <p className="text-[12px] text-[#555] leading-[1.7]">&#123;&#123;prenom&#125;&#125;,<br /><br />Je commence a me sentir comme ce commercial persistant que personne ne veut etre. Alors je vous propose un deal : repondez-moi un chiffre, et je m&apos;adapte.<br /><br />1 = Interessant, mais pas maintenant. Recontactez-moi dans 3 mois.<br />2 = Pas le bon interlocuteur. Contactez plutot &#123;&#123;nom&#125;&#125;.<br />3 = Plus jamais. Supprimez mon contact.<br /><br />Un seul chiffre suffit.</p>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.6]"><strong className="text-[#111]">Pourquoi ca fonctionne :</strong> Le format a choix multiples rend la reponse ultra-facile. L&apos;humour desamine et humanise. Nos donnees montrent que 60% des repondants choisissent le &ldquo;1&rdquo;.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 - Objets */}
              <section id="objets-email" className="mb-8">
                <div className="rounded-2xl bg-[#111] text-white p-5 md:p-8 rounded-2xl">
                  <h2 className="text-[17px] font-semibold mb-4">Formules d&apos;objets qui convertissent</h2>
                  <div className="space-y-3 text-[13px] text-[#CCC] leading-[1.75] mb-5">
                    <p>L&apos;objet est le facteur numero 1 du taux d&apos;ouverture. Voici les 8 formules d&apos;objets qui fonctionnent le mieux dans nos campagnes, classees par taux d&apos;ouverture decroissant.</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { formula: "{{prenom}}, question rapide sur {{sujet}}", open: "67%", why: "Court, personnel, intrigue" },
                      { formula: "Qui gere {{sujet}} chez {{entreprise}} ?", open: "64%", why: "Ressemble a un email interne" },
                      { formula: "{{mutual_connection}} m'a suggere de vous contacter", open: "61%", why: "Referral implicite" },
                      { formula: "Felicitations pour {{evenement}}", open: "58%", why: "Positif, non commercial" },
                      { formula: "Idee pour {{entreprise}} sur {{sujet}}", open: "55%", why: "Valeur promise, specifique" },
                      { formula: "Re: {{sujet}} (pour follow-up)", open: "52%", why: "Simule une conversation en cours" },
                      { formula: "{{entreprise}} vs benchmarks {{secteur}}", open: "49%", why: "Curiosite competitive" },
                      { formula: "Dernier message, {{prenom}}", open: "47%", why: "Urgence, rarete" },
                    ].map((item) => (
                      <div key={item.formula} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                        <span className="text-[14px] font-bold text-[#6C5CE7] w-[40px] shrink-0 text-right">{item.open}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] text-white font-medium truncate">{item.formula}</p>
                          <p className="text-[10px] text-[#888]">{item.why}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 text-[13px] text-[#CCC] leading-[1.75]">
                    <p><strong className="text-white">Regles d&apos;or :</strong> Moins de 40 caracteres. Pas de majuscules excessives (URGENT, OFFRE). Pas de ponctuation multiple (!!!). Pas de mots spam (gratuit, promotion, exceptionnel). Tester systematiquement 2 objets en A/B sur chaque campagne.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 - Personnalisation */}
              <section id="personnalisation-scale" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Personnalisation a grande echelle</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La personnalisation est ce qui separe un cold email performant d&apos;un spam. Mais personnaliser manuellement chaque email n&apos;est pas scalable au-dela de 20 emails par jour. Voici notre framework pour personnaliser a grande echelle sans sacrifier la qualite.</p>
                    <p><strong className="text-[#111]">Niveau 1 - Personnalisation par segment.</strong> Regroupez vos prospects par secteur, taille d&apos;entreprise et role. Creez un template par segment avec des references specifiques au contexte du segment. C&apos;est le minimum viable. Temps additionnel : 0 (automatise).</p>
                    <p><strong className="text-[#111]">Niveau 2 - Personnalisation par donnees enrichies.</strong> Utilisez Clay pour enrichir chaque prospect avec des donnees specifiques : technologies utilisees, recrutements recents, levees de fonds, croissance LinkedIn. Integrez ces variables dans vos templates. Temps additionnel : 2 minutes par prospect.</p>
                    <p><strong className="text-[#111]">Niveau 3 - Personnalisation par IA.</strong> Utilisez les colonnes IA de Clay ou ChatGPT pour generer une premiere ligne personnalisee par prospect, basee sur son profil LinkedIn ou le site de son entreprise. Temps additionnel : 30 secondes par prospect (automatise).</p>
                  </div>
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { tool: "Clay", domain: "clay.com", desc: "Enrichissement waterfall + colonnes IA pour personnalisation auto", best: "Personnalisation a grande echelle" },
                      { tool: "Lemlist", domain: "lemlist.com", desc: "Variables custom, images dynamiques, liquid syntax", best: "Templates multi-canal" },
                      { tool: "La Growth Machine", domain: "lagrowthmachine.com", desc: "Scraping LinkedIn + enrichissement + personnalisation", best: "Workflows LinkedIn + email" },
                    ].map((t) => (
                      <div key={t.tool} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`} alt={t.tool} className="w-4 h-4" />
                          <span className="text-[12px] font-semibold text-[#111]">{t.tool}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.5] mb-2">{t.desc}</p>
                        <p className="text-[10px] text-[#6C5CE7] font-medium">{t.best}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 11 - Delivrabilite */}
              <section id="delivrabilite" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Checklist delivrabilite (15 points)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Un email qui n&apos;arrive pas en inbox est un email qui n&apos;existe pas. La delivrabilite est le fondement invisible de toute strategie outbound. Voici notre checklist complete.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { cat: "Domaine et DNS", items: ["Domaine secondaire dedie (pas votre domaine principal)", "SPF configure et valide", "DKIM signe correctement", "DMARC en mode quarantine minimum", "Enregistrement MX correct"] },
                      { cat: "Warm-up et reputation", items: ["Warm-up progressif sur 3-4 semaines", "Volume de depart : 5 emails/jour", "Montee en charge : +5/jour par semaine", "Outil de warm-up actif (Lemwarm, Mailreach)", "Monitoring du score d'expediteur"] },
                      { cat: "Contenu et technique", items: ["Pas de HTML complexe, texte brut prefere", "Un seul lien maximum par email", "Pas de tracking pixel (desactiver si possible)", "Pas de mots spam dans l'objet ou le corps", "Ratio texte/lien eleve"] },
                    ].map((group) => (
                      <div key={group.cat} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#111] mb-3">{group.cat}</p>
                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li key={item} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 12 - Outils */}
              <section id="outils" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comparatif des outils de cold email</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Le choix de l&apos;outil impacte directement vos resultats. Voici notre comparatif des principales plateformes apres les avoir toutes utilisees en production.</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { tool: "Lemlist", domain: "lemlist.com", price: "A partir de 59 EUR/mois", pros: "Multi-canal (email + LinkedIn + calls), base B2B integree, warm-up inclus, images personnalisees, liquid syntax", cons: "Interface perfectible, reporting basique, pas d'enrichissement avance", verdict: "Le plus complet pour la prospection multi-canal B2B" },
                      { tool: "La Growth Machine", domain: "lagrowthmachine.com", price: "A partir de 60 EUR/mois", pros: "Scraping LinkedIn natif, enrichissement email, workflows visuels, multi-canal, synchronisation CRM", cons: "Plus cher que Lemlist, courbe d'apprentissage, support en francais variable", verdict: "Ideal pour les workflows LinkedIn-first" },
                      { tool: "HubSpot Sequences", domain: "hubspot.com", price: "Inclus dans Sales Hub Pro (90 EUR/mois/user)", pros: "Integration CRM native, tracking complet, tokens de personnalisation, meeting booking integre", cons: "Pas de warm-up, pas de multi-canal LinkedIn, delivrabilite basique, volume limite", verdict: "Pour les equipes deja sur HubSpot Sales Hub" },
                      { tool: "Emelia", domain: "emelia.io", price: "A partir de 37 EUR/mois", pros: "Prix agressif, warm-up inclus, scraping LinkedIn, interface simple, support reactif", cons: "Moins de fonctionnalites que Lemlist, pas de multi-canal avance, communaute plus petite", verdict: "Meilleur rapport qualite-prix pour debuter" },
                    ].map((t) => (
                      <div key={t.tool} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`} alt={t.tool} className="w-5 h-5" />
                          <span className="text-[13px] font-semibold text-[#111]">{t.tool}</span>
                          <span className="text-[10px] text-[#999] ml-auto">{t.price}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                          <div>
                            <p className="text-[10px] font-semibold text-[#22C55E] uppercase mb-1">Points forts</p>
                            <p className="text-[11px] text-[#777] leading-[1.5]">{t.pros}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-[#EF4444] uppercase mb-1">Limites</p>
                            <p className="text-[11px] text-[#777] leading-[1.5]">{t.cons}</p>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#6C5CE7] font-medium">{t.verdict}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 13 - Mesurer */}
              <section id="mesurer-resultats" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mesurer les resultats de vos campagnes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Envoyer des cold emails sans mesurer les resultats, c&apos;est conduire les yeux fermes. Voici les 6 metriques a suivre et les benchmarks a viser.</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { kpi: "Taux d'ouverture", benchmark: "50-70%", bad: "Moins de 40%", action: "Revoir vos objets, verifier la delivrabilite" },
                      { kpi: "Taux de reponse", benchmark: "5-15%", bad: "Moins de 3%", action: "Revoir la personnalisation et la proposition de valeur" },
                      { kpi: "Taux de reponse positive", benchmark: "30-50% des reponses", bad: "Moins de 20%", action: "Revoir le ciblage ICP et le message" },
                      { kpi: "Taux de bounce", benchmark: "Moins de 3%", bad: "Plus de 5%", action: "Nettoyer la base, verifier les emails avant envoi" },
                      { kpi: "Taux de desabonnement", benchmark: "Moins de 1%", bad: "Plus de 2%", action: "Affiner le ciblage, reduire le volume" },
                      { kpi: "Meetings bookes / 100 emails", benchmark: "2-5 meetings", bad: "Moins de 1", action: "Revoir l'ensemble de la sequence" },
                    ].map((m) => (
                      <div key={m.kpi} className="rounded-xl border border-[#F2F2F2] p-3 flex items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-semibold text-[#111]">{m.kpi}</p>
                          <p className="text-[10px] text-[#999]">{m.action}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-[12px] font-bold text-[#22C55E]">{m.benchmark}</p>
                          <p className="text-[9px] text-[#EF4444]">Alerte : {m.bad}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 14 - Erreurs */}
              <section id="erreurs-courantes" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 8 erreurs qui tuent vos campagnes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres avoir audite des centaines de campagnes outbound, voici les erreurs les plus frequentes et les plus couteuses.</p>
                  </div>
                  <div className="mt-5 space-y-2">
                    {[
                      { err: "Envoyer depuis votre domaine principal", fix: "Utilisez un domaine secondaire (ex : team-votreentreprise.com) pour proteger la reputation de votre domaine principal." },
                      { err: "Pas de warm-up avant envoi", fix: "3-4 semaines de warm-up minimum. Commencez a 5 emails/jour et montez progressivement." },
                      { err: "Emails trop longs", fix: "Restez sous 100 mots. Chaque phrase doit meriter sa place. Si elle n'apporte pas de valeur, supprimez-la." },
                      { err: "CTA trop engageant", fix: "Remplacez 'Reservez un call de 30 minutes' par 'Est-ce un sujet chez vous ?'. Moins de friction = plus de reponses." },
                      { err: "Zero personnalisation", fix: "Minimum : prenom + entreprise + une reference specifique au prospect. Idealement : une observation pertinente sur leur activite." },
                      { err: "Pas de sequence multi-touchpoint", fix: "Un seul email ne suffit jamais. Planifiez 4-6 touchpoints sur 3-4 semaines avec des angles differents." },
                      { err: "Ciblage trop large", fix: "Mieux vaut 200 prospects ultra-cibles que 2 000 prospects generiques. Definissez votre ICP precisement avant d'envoyer." },
                      { err: "Ne pas A/B tester", fix: "Testez systematiquement 2 objets et 2 versions de corps sur chaque campagne. Les donnees battent l'intuition." },
                    ].map((item) => (
                      <div key={item.err} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#EF4444] mb-1">{item.err}</p>
                        <p className="text-[11px] text-[#777] leading-[1.5]">{item.fix}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 15 - Methodologie */}
              <section id="methodologie" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Notre methodologie chez Ceres</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chez Ceres, nous deploions des campagnes outbound pour des startups et PME B2B depuis 2022. Voici la methodologie que nous appliquons systematiquement et qui genere en moyenne 8.5% de taux de reponse.</p>
                    <p><strong className="text-[#111]">Etape 1 : Definition de l&apos;ICP.</strong> Nous analysons vos 20 meilleurs clients pour identifier les patterns communs : secteur, taille, role du decideur, stack technologique, signaux d&apos;achat. Cela donne un ICP precis, pas un persona theorique.</p>
                    <p><strong className="text-[#111]">Etape 2 : Construction de la liste.</strong> Clay pour l&apos;enrichissement waterfall, LinkedIn Sales Navigator pour l&apos;identification, Dropcontact ou Kaspr pour la verification email. Chaque liste passe un triple controle qualite.</p>
                    <p><strong className="text-[#111]">Etape 3 : Redaction des sequences.</strong> 4 a 6 touchpoints par sequence, chaque email avec un angle different. Template de base + variables de personnalisation Clay. A/B test systematique sur les objets et les CTA.</p>
                    <p><strong className="text-[#111]">Etape 4 : Setup technique.</strong> Domaine secondaire, DNS complet (SPF, DKIM, DMARC), warm-up de 3 semaines, test de delivrabilite avant lancement. Zero compromis sur l&apos;infrastructure.</p>
                    <p><strong className="text-[#111]">Etape 5 : Lancement et iteration.</strong> Envoi progressif, monitoring quotidien des metriques, ajustements en continu. Reporting hebdomadaire avec taux d&apos;ouverture, taux de reponse, meetings bookes et pipeline genere.</p>
                  </div>
                  <div className="mt-5 rounded-xl border border-[#F2F2F2] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-[#111] flex items-center justify-center text-white text-[8px] font-bold">C</div>
                      <span className="text-[12px] font-semibold text-[#111]">Resultats moyens de nos campagnes (2025)</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "8.5%", label: "taux de reponse" },
                        { stat: "62%", label: "taux d'ouverture" },
                        { stat: "3.2", label: "meetings / 100 emails" },
                        { stat: "32 EUR", label: "cout par lead qualifie" },
                      ].map((s) => (
                        <div key={s.label} className="text-center">
                          <p className="text-[18px] font-bold text-[#6C5CE7]">{s.stat}</p>
                          <p className="text-[10px] text-[#999]">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* Related articles */}
            <section className="mt-12 mb-8">
              <p className="text-[13px] font-semibold text-[#111] mb-4">Articles similaires</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedArticles.map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors group">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white mb-3" style={{ background: a.color }}>
                      {a.category[0]}
                    </div>
                    <p className="text-[12px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#6C5CE7] transition-colors">{a.title}</p>
                    <p className="text-[10px] text-[#999] mt-2">{a.category}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;aide pour lancer vos campagnes outbound ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On construit vos sequences de prospection, on configure votre stack technique et on optimise vos taux de reponse. Du setup a l&apos;iteration.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Voir tous les articles
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
