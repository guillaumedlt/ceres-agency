"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prompt engineering pour les equipes commerciales : le guide pratique",
  description: "Guide complet de prompt engineering pour les equipes de vente B2B : les 4 regles d'un bon prompt, 5 prompts prets a l'emploi pour la prospection, les calls, les propositions commerciales et l'analyse win/loss. Avec des exemples concrets et une methode pour creer sa bibliotheque de prompts.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/prompt-engineering-equipes-commerciales" },
  articleSection: "IA & Automatisation",
  wordCount: 3200,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-prompts-ne-marchent-pas", title: "Pourquoi vos prompts ne marchent pas" },
  { id: "4-regles", title: "Les 4 regles d'un bon prompt" },
  { id: "prompt-briefing-prospect", title: "Prompt 1 : Briefing prospect" },
  { id: "prompt-email-prospection", title: "Prompt 2 : Email personnalise" },
  { id: "prompt-resume-call", title: "Prompt 3 : Resume de call" },
  { id: "prompt-proposition", title: "Prompt 4 : Proposition commerciale" },
  { id: "prompt-win-loss", title: "Prompt 5 : Analyse win/loss" },
  { id: "prompts-vs-agents", title: "Prompts vs agents" },
  { id: "bibliotheque-prompts", title: "Bibliotheque de prompts" },
  { id: "aller-plus-loin", title: "Aller plus loin" },
];

const relatedArticles = [
  { title: "Claude vs ChatGPT pour les equipes commerciales : le comparatif complet", slug: "claude-vs-chatgpt-equipes-commerciales", category: "IA & Automatisation", color: "#D4A27F" },
  { title: "Comment l'IA transforme le processus commercial en vente B2B", slug: "ia-processus-commercial-vente-b2b", category: "IA & Vente", color: "#6D00CC" },
  { title: "Claude Code pour les equipes non-techniques : le guide complet", slug: "claude-code-equipes-non-techniques", category: "IA & Automatisation", color: "#D4A27F" },
];

export default function PromptEngineeringArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-prompts-ne-marchent-pas");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#D4A27F", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "18%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "35%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "52%", width: 300, height: 300, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "85%", width: 240, height: 240, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Prompt%20engineering%20pour%20les%20equipes%20commerciales&url=https://ceres.agency/blog/prompt-engineering-equipes-commerciales" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/prompt-engineering-equipes-commerciales" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Prompt engineering commercial</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">18 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Prompt engineering pour les equipes commerciales : le guide pratique
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                90% des commerciaux ecrivent des prompts generiques et obtiennent des resultats generiques. Le probleme n&apos;est pas l&apos;IA, c&apos;est le prompt. Ce guide vous donne les 4 regles fondamentales et 5 prompts prets a l&apos;emploi pour transformer votre quotidien commercial : briefing prospect, emails de prospection, resume de calls, propositions, analyse win/loss.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>9 avril 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 : Pourquoi vos prompts ne marchent pas */}
              <section id="pourquoi-prompts-ne-marchent-pas" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi vos prompts ne marchent pas</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Voici ce que 90% des commerciaux ecrivent quand ils utilisent Claude ou ChatGPT pour la premiere fois :</p>
                  </div>

                  <div className="mt-4 rounded-xl bg-[#1a1a2e] p-4 font-mono text-[12px] text-[#e0e0e0] leading-[1.7] overflow-x-auto">
                    <p className="text-[#D4A27F]"># Ce que tout le monde fait</p>
                    <p className="mt-2">Redige un email de prospection pour l&apos;entreprise Acme Corp.</p>
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le resultat est un email generique, bourre de formules marketing creuses, que le prospect supprimera en deux secondes. Et le commercial conclut : &ldquo;l&apos;IA, ca ne marche pas pour la vente&rdquo;.</p>
                    <p>Le probleme n&apos;est pas l&apos;IA. C&apos;est le prompt. Un prompt sans contexte, sans contrainte, sans exemple et sans role defini produit systematiquement un resultat mediocre. L&apos;IA ne lit pas dans vos pensees. Elle n&apos;a aucune idee de qui est votre prospect, de ce que vous vendez, du ton que vous voulez, ni du format attendu.</p>
                    <p>C&apos;est comme demander a un stagiaire : &ldquo;Fais-moi un truc pour Acme&rdquo;. Meme le meilleur stagiaire du monde produira un resultat decevant avec une instruction aussi vague.</p>
                    <p>La bonne nouvelle : il suffit d&apos;apprendre 4 regles pour passer de prompts mediocres a des prompts qui produisent des resultats utilisables en l&apos;etat. Et ces 4 regles s&apos;appliquent a tous les cas d&apos;usage commerciaux, de l&apos;email de prospection a l&apos;analyse win/loss.</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">Ce que cet article couvre</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Les 4 regles d'un bon prompt commercial",
                        "5 prompts prets a l'emploi avec exemples",
                        "Briefing prospect, emails, resume de calls",
                        "Propositions commerciales et analyse win/loss",
                        "La difference entre prompts et agents IA",
                        "Comment creer sa bibliotheque de prompts",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] shrink-0" />
                          <span className="text-[11px] text-[#777]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 : Les 4 regles d'un bon prompt commercial */}
              <section id="4-regles" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] flex items-center justify-center text-white text-[10px] font-bold">C</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Les 4 regles d&apos;un bon prompt commercial</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Tous les bons prompts commerciaux suivent le meme schema. On l&apos;appelle CCER : Contexte, Contrainte, Exemple, Role. L&apos;ordre peut varier, mais les 4 elements doivent etre presents.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { lettre: "C", titre: "Contexte", desc: "Qui est le prospect ? Quel est son secteur, sa taille, son poste ? Quels sont ses enjeux ? Plus le contexte est precis, plus le resultat est pertinent.", color: "#D4A27F" },
                      { lettre: "C", titre: "Contrainte", desc: "Quel format ? Quelle longueur ? Quel ton ? Combien de paragraphes ? Ces limites forcent l'IA a etre concise et precise au lieu de produire un pave generique.", color: "#4B5EFC" },
                      { lettre: "E", titre: "Exemple", desc: "Montrez a l'IA ce que vous voulez. Un email de reference, une structure type, un extrait qui a fonctionne. L'IA reproduit les patterns qu'on lui montre.", color: "#6D00CC" },
                      { lettre: "R", titre: "Role", desc: "Dites a l'IA qui elle est. \"Tu es un SDR senior specialise SaaS B2B\". Le role cadre le vocabulaire, le niveau de detail et l'angle d'approche.", color: "#22C55E" },
                    ].map((r) => (
                      <div key={r.titre} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[10px] font-bold" style={{ background: r.color }}>{r.lettre}</span>
                          <span className="text-[13px] font-semibold text-[#111]">{r.titre}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{r.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Concretement, voici la difference entre un prompt sans CCER et un prompt avec :</p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#E8E8E8] overflow-hidden">
                      <div className="bg-[#FEF2F2] px-3 py-2 border-b border-[#E8E8E8]">
                        <span className="text-[10px] font-semibold text-[#DC2626]">Avant (sans CCER)</span>
                      </div>
                      <div className="p-3 bg-white">
                        <p className="text-[11px] text-[#555] leading-[1.6] font-mono">Redige un email de prospection pour Acme Corp.</p>
                        <div className="mt-2">
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#DC2626]/10 text-[#DC2626] font-medium">Resultat generique</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#E8E8E8] overflow-hidden">
                      <div className="bg-[#F0FDF4] px-3 py-2 border-b border-[#E8E8E8]">
                        <span className="text-[10px] font-semibold text-[#22C55E]">Apres (avec CCER)</span>
                      </div>
                      <div className="p-3 bg-white">
                        <p className="text-[11px] text-[#555] leading-[1.6] font-mono">Role + Contexte prospect + Contraintes format + Exemple de reference</p>
                        <div className="mt-2">
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">Resultat personnalise, utilisable</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La suite de cet article est une mise en pratique de ces 4 regles, sur 5 cas d&apos;usage commerciaux concrets. Chaque prompt est complet, pret a copier-coller, et explique.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Prompt 1 - Briefing prospect pre-call */}
              <section id="prompt-briefing-prospect" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] flex items-center justify-center text-white text-[10px] font-bold">1</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Prompt 1 : Briefing prospect pre-call</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant chaque call de decouverte, un commercial devrait passer 15 a 20 minutes a rechercher le prospect. En pratique, ca n&apos;arrive presque jamais. L&apos;IA peut faire ce travail en 30 secondes, a condition de lui fournir les bonnes donnees.</p>
                    <p><strong className="text-[#111]">Les donnees a fournir :</strong> le profil LinkedIn du prospect (copier-coller du texte), les dernieres actualites de l&apos;entreprise (levee de fonds, recrutement, lancement produit), et l&apos;historique CRM si disponible (deals precedents, interactions passees).</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#1a1a2e] p-4 font-mono text-[12px] text-[#e0e0e0] leading-[1.7] overflow-x-auto">
                    <p className="text-[#D4A27F] mb-3"># Prompt : Briefing prospect pre-call</p>
                    <p className="text-[#7ec8e3]">Role :</p>
                    <p>Tu es un analyste commercial senior specialise en vente B2B SaaS.</p>
                    <p>Tu prepares un briefing pour un Account Executive avant un</p>
                    <p>call de decouverte.</p>
                    <p className="mt-3 text-[#7ec8e3]">Contexte prospect :</p>
                    <p>- Nom : [Prenom Nom]</p>
                    <p>- Poste : [Titre exact depuis LinkedIn]</p>
                    <p>- Entreprise : [Nom], [secteur], [taille equipe], [CA estime]</p>
                    <p>- Profil LinkedIn : [coller le texte du profil]</p>
                    <p>- Actualites recentes : [coller 2-3 news]</p>
                    <p>- Historique CRM : [notes des interactions precedentes]</p>
                    <p className="mt-3 text-[#7ec8e3]">Contraintes :</p>
                    <p>- Format : 5 sections (Contexte, Enjeux probables, Questions</p>
                    <p>&nbsp;&nbsp;a poser, Risques/Objections, Angle d&apos;approche recommande)</p>
                    <p>- Longueur : 300 mots maximum</p>
                    <p>- Ton : factuel, pas de suppositions non fondees</p>
                    <p>- Chaque enjeu doit etre lie a un element concret du profil</p>
                    <p>&nbsp;&nbsp;ou des actualites</p>
                    <p className="mt-3 text-[#7ec8e3]">Exemple de sortie attendue :</p>
                    <p>## Contexte</p>
                    <p>Marie Dupont est VP Sales chez DataFlow (SaaS, 80 salaries).</p>
                    <p>Elle a rejoint l&apos;entreprise il y a 8 mois apres 5 ans chez</p>
                    <p>Salesforce. L&apos;entreprise vient de lever 12M en Serie B.</p>
                    <p>## Enjeux probables</p>
                    <p>1. Structurer le process commercial post-levee (scaling)</p>
                    <p>2. ...</p>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Pourquoi ca fonctionne.</strong> Le prompt donne un role precis (analyste commercial senior), un contexte riche (toutes les donnees du prospect), des contraintes strictes (5 sections, 300 mots, factuel), et un exemple de la structure attendue. L&apos;IA n&apos;a aucune ambiguite sur ce qu&apos;on attend d&apos;elle.</p>
                    <p><strong className="text-[#111]">Resultat reel vs resultat attendu.</strong> Sur nos tests, le briefing genere est pertinent dans 85% des cas sans retouche. Les 15% restants concernent les enjeux supposes : l&apos;IA peut parfois inferer des enjeux qui ne correspondent pas a la realite du prospect. La solution est de verifier les enjeux proposes et d&apos;ajuster avant le call.</p>
                    <p><strong className="text-[#111]">Gain de temps mesure :</strong> 15-20 minutes de recherche manuelle reduites a 2 minutes (30 secondes de generation + 90 secondes de relecture).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Prompt 2 - Email de prospection personnalise */}
              <section id="prompt-email-prospection" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] flex items-center justify-center text-white text-[10px] font-bold">2</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Prompt 2 : Email de prospection personnalise</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La cle d&apos;un email de prospection non-generique tient en 3 elements : le contexte du prospect (qui il est, ce qu&apos;il fait), le pain point specifique (un probleme concret et actuel), et une reference concrete (un chiffre, un evenement, une actualite). Sans ces 3 elements, l&apos;IA produira un email generique, quel que soit le modele utilise.</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#1a1a2e] p-4 font-mono text-[12px] text-[#e0e0e0] leading-[1.7] overflow-x-auto">
                    <p className="text-[#D4A27F] mb-3"># Prompt : Email de prospection personnalise</p>
                    <p className="text-[#7ec8e3]">Role :</p>
                    <p>Tu es un SDR senior dans une agence RevOps. Tu rediges des</p>
                    <p>emails de cold outreach qui obtiennent des taux de reponse</p>
                    <p>de 15-20%. Ton style est direct, humain, zero jargon marketing.</p>
                    <p className="mt-3 text-[#7ec8e3]">Contexte prospect :</p>
                    <p>- Nom : [Prenom Nom], [Poste] chez [Entreprise]</p>
                    <p>- Secteur : [SaaS B2B / Services / Industrie...]</p>
                    <p>- Taille : [nombre de salaries]</p>
                    <p>- Pain point identifie : [ex: vient de recruter 5 commerciaux</p>
                    <p>&nbsp;&nbsp;en 3 mois, scaling probable sans process structure]</p>
                    <p>- Reference concrete : [ex: post LinkedIn du 12 mars sur les</p>
                    <p>&nbsp;&nbsp;difficultes de recrutement commercial]</p>
                    <p className="mt-3 text-[#7ec8e3]">Notre offre (a integrer subtilement) :</p>
                    <p>[description en 1-2 phrases de ce que vous vendez]</p>
                    <p className="mt-3 text-[#7ec8e3]">Contraintes :</p>
                    <p>- Maximum 80 mots (corps de l&apos;email, hors objet et signature)</p>
                    <p>- Objet : maximum 6 mots, pas de majuscules sauf premiere lettre</p>
                    <p>- Pas de &ldquo;j&apos;espere que vous allez bien&rdquo;</p>
                    <p>- Pas de &ldquo;je me permets de&rdquo;</p>
                    <p>- Pas de superlatifs (&ldquo;revolutionnaire&rdquo;, &ldquo;unique&rdquo;, &ldquo;incontournable&rdquo;)</p>
                    <p>- Terminer par une question ouverte (pas &ldquo;etes-vous disponible&rdquo;)</p>
                    <p>- Ton : comme un message qu&apos;on enverrait a un ancien collegue</p>
                    <p className="mt-3 text-[#7ec8e3]">Exemple de bon email (a utiliser comme reference de ton) :</p>
                    <p>Objet : question sur votre onboarding commercial</p>
                    <p>Salut Thomas,</p>
                    <p>J&apos;ai vu que vous venez de recruter 3 AE chez [Entreprise].</p>
                    <p>Quand on scale aussi vite, le premier probleme c&apos;est que le</p>
                    <p>process commercial n&apos;est pas documente et chaque AE fait</p>
                    <p>differemment. On aide les equipes dans cette situation a</p>
                    <p>structurer leur pipe dans HubSpot pour que les nouveaux</p>
                    <p>soient operationnels en 2 semaines au lieu de 2 mois.</p>
                    <p>C&apos;est un sujet pour vous en ce moment ?</p>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La difference avec un prompt generique.</strong> Sans la reference concrete (le recrutement de 3 AE), l&apos;IA ne peut pas personnaliser. Sans les contraintes negatives (pas de &ldquo;j&apos;espere que&rdquo;, pas de superlatifs), l&apos;IA retombe dans ses reflexes de copywriting generique. Sans l&apos;exemple, elle ne sait pas quel ton adopter.</p>
                    <p><strong className="text-[#111]">Astuce.</strong> Gardez 3 a 5 emails qui ont genere des reponses positives. Utilisez-les comme exemples dans vos prompts. L&apos;IA reproduira le pattern qui fonctionne, adapte au nouveau prospect. C&apos;est le levier le plus puissant du prompt engineering commercial.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Prompt 3 - Resume de call structure */}
              <section id="prompt-resume-call" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] flex items-center justify-center text-white text-[10px] font-bold">3</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Prompt 3 : Resume de call structure</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres chaque call de decouverte ou de suivi, le commercial doit mettre a jour le CRM. En pratique, 60% des notes de calls sont incompletes ou absentes. L&apos;IA peut transformer une transcription brute en un resume structure avec les informations critiques pour le pipeline.</p>
                    <p><strong className="text-[#111]">Pre-requis :</strong> utiliser un outil de transcription (Claap, Gong, Fireflies, ou la transcription native de Teams/Zoom) pour obtenir le texte du call. Ensuite, collez la transcription dans le prompt.</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#1a1a2e] p-4 font-mono text-[12px] text-[#e0e0e0] leading-[1.7] overflow-x-auto">
                    <p className="text-[#D4A27F] mb-3"># Prompt : Resume de call structure</p>
                    <p className="text-[#7ec8e3]">Role :</p>
                    <p>Tu es un sales manager qui analyse les calls de son equipe.</p>
                    <p>Tu produis des resumes structures et actionnables.</p>
                    <p className="mt-3 text-[#7ec8e3]">Transcription du call :</p>
                    <p>[coller la transcription complete ici]</p>
                    <p className="mt-3 text-[#7ec8e3]">Contraintes :</p>
                    <p>- Genere un resume structure en 6 sections exactement :</p>
                    <p>&nbsp;&nbsp;1. Resume executif (3 phrases max)</p>
                    <p>&nbsp;&nbsp;2. Besoins identifies (liste a puces)</p>
                    <p>&nbsp;&nbsp;3. Objections soulevees (avec la reponse donnee ou a preparer)</p>
                    <p>&nbsp;&nbsp;4. Next steps convenus (avec dates si mentionnees)</p>
                    <p>&nbsp;&nbsp;5. Sentiment general (1 mot : Positif / Neutre / Negatif)</p>
                    <p>&nbsp;&nbsp;6. Mise a jour CRM suggeree (champs a mettre a jour dans</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HubSpot : etape du deal, montant, date de closing prevue,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;notes)</p>
                    <p>- Ne pas inventer d&apos;informations absentes de la transcription</p>
                    <p>- Si une information n&apos;est pas mentionnee, ecrire &ldquo;Non mentionne&rdquo;</p>
                    <p>- Longueur totale : 250 mots maximum</p>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Pourquoi la contrainte &ldquo;ne pas inventer&rdquo; est cruciale.</strong> Sans cette instruction explicite, l&apos;IA a tendance a completer les trous avec des suppositions plausibles. Un montant de deal &ldquo;estime&rdquo; par l&apos;IA qui se retrouve dans votre CRM, c&apos;est un forecast fausse. Forcez l&apos;IA a ecrire &ldquo;Non mentionne&rdquo; pour chaque information absente.</p>
                    <p><strong className="text-[#111]">La section &ldquo;Mise a jour CRM&rdquo; est le vrai gain de temps.</strong> Au lieu de se demander quels champs mettre a jour dans HubSpot apres un call, le commercial a une liste precise de ce qui a change. Etape du deal a avancer ? Montant a ajuster ? Date de closing a decaler ? Tout est la, il suffit de reporter.</p>
                    <p><strong className="text-[#111]">Gain de temps mesure :</strong> 10-15 minutes de prise de notes et mise a jour CRM reduites a 3 minutes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Prompt 4 - Proposition commerciale */}
              <section id="prompt-proposition" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] flex items-center justify-center text-white text-[10px] font-bold">4</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Prompt 4 : Proposition commerciale</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La proposition commerciale est le document le plus chronophage du cycle de vente. Chaque proposition doit etre personnalisee au contexte du prospect, reprendre ses enjeux specifiques, et presenter une solution adaptee avec des chiffres credibles. L&apos;IA peut generer un premier jet structure a partir de vos notes de discovery.</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#1a1a2e] p-4 font-mono text-[12px] text-[#e0e0e0] leading-[1.7] overflow-x-auto">
                    <p className="text-[#D4A27F] mb-3"># Prompt : Proposition commerciale</p>
                    <p className="text-[#7ec8e3]">Role :</p>
                    <p>Tu es un consultant RevOps senior qui redige des propositions</p>
                    <p>commerciales pour des clients B2B. Tes propositions sont</p>
                    <p>concises, centrees sur les resultats, et personnalisees.</p>
                    <p className="mt-3 text-[#7ec8e3]">Notes de discovery :</p>
                    <p>[coller le resume du call de decouverte ici]</p>
                    <p className="mt-3 text-[#7ec8e3]">Informations complementaires :</p>
                    <p>- Notre offre : [description du service/produit]</p>
                    <p>- Tarification : [grille tarifaire applicable]</p>
                    <p>- Cas client similaire : [nom du client, resultats obtenus]</p>
                    <p>- Duree de mise en place : [timeline estimee]</p>
                    <p className="mt-3 text-[#7ec8e3]">Contraintes :</p>
                    <p>- Structure obligatoire en 6 sections :</p>
                    <p>&nbsp;&nbsp;1. Contexte et enjeux du client (repris de la discovery)</p>
                    <p>&nbsp;&nbsp;2. Approche recommandee (ce qu&apos;on va faire, etape par etape)</p>
                    <p>&nbsp;&nbsp;3. Resultats attendus (chiffres concrets, timeline)</p>
                    <p>&nbsp;&nbsp;4. Cas client comparable (preuves sociales)</p>
                    <p>&nbsp;&nbsp;5. Investissement (prix, options, conditions)</p>
                    <p>&nbsp;&nbsp;6. Prochaines etapes</p>
                    <p>- Ton : professionnel, direct, pas de jargon creux</p>
                    <p>- Les resultats attendus doivent etre realistes et lies aux</p>
                    <p>&nbsp;&nbsp;donnees de la discovery, pas des promesses generiques</p>
                    <p>- Longueur : 600-800 mots (une page et demie en PDF)</p>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le piege a eviter.</strong> L&apos;IA va naturellement gonfler les resultats attendus. &ldquo;Augmentation de 300% du taux de conversion&rdquo;, &ldquo;ROI de 10x en 3 mois&rdquo;. C&apos;est pour ca que la contrainte &ldquo;resultats realistes lies aux donnees de la discovery&rdquo; est essentielle. Si le prospect a mentionne un taux de conversion actuel de 5%, proposez un objectif de 8-10%, pas de 25%.</p>
                    <p><strong className="text-[#111]">L&apos;importance du cas client comparable.</strong> C&apos;est la section qui fait la difference entre une proposition generique et une proposition qui convertit. Si vous avez aide une entreprise similaire (meme secteur, meme taille, meme problematique) et que vous pouvez citer des resultats concrets, l&apos;IA integrera cette preuve sociale de facon naturelle dans la proposition.</p>
                    <p><strong className="text-[#111]">Gain de temps mesure :</strong> 2-3 heures de redaction reduites a 30 minutes (generation + relecture + personnalisation fine).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Prompt 5 - Analyse win/loss */}
              <section id="prompt-win-loss" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] flex items-center justify-center text-white text-[10px] font-bold">5</span>
                    <h2 className="text-[17px] font-semibold text-[#111]">Prompt 5 : Analyse win/loss</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;analyse win/loss est l&apos;exercice strategique le plus sous-estime en B2B. Comprendre pourquoi on gagne et pourquoi on perd, c&apos;est la base pour ameliorer son process commercial. Le probleme : personne n&apos;a le temps de le faire manuellement sur 20 deals. L&apos;IA le fait en 2 minutes.</p>
                    <p><strong className="text-[#111]">Les donnees a fournir :</strong> exportez 20 deals fermes de votre CRM (10 gagnes, 10 perdus) avec les champs suivants : nom du deal, montant, duree du cycle, nombre d&apos;interactions, raison de perte (si perdu), source du lead, secteur, taille de l&apos;entreprise.</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#1a1a2e] p-4 font-mono text-[12px] text-[#e0e0e0] leading-[1.7] overflow-x-auto">
                    <p className="text-[#D4A27F] mb-3"># Prompt : Analyse win/loss</p>
                    <p className="text-[#7ec8e3]">Role :</p>
                    <p>Tu es un VP Sales qui analyse les performances de son equipe</p>
                    <p>pour identifier les patterns de succes et d&apos;echec.</p>
                    <p className="mt-3 text-[#7ec8e3]">Donnees :</p>
                    <p>[coller le tableau de 20 deals ici - format CSV ou tableau]</p>
                    <p className="mt-3 text-[#7ec8e3]">Contraintes :</p>
                    <p>- Analyse en 5 sections :</p>
                    <p>&nbsp;&nbsp;1. Patterns des deals gagnes (points communs : secteur,</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taille, source, duree du cycle, nombre d&apos;interactions)</p>
                    <p>&nbsp;&nbsp;2. Patterns des deals perdus (points communs + raisons</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de perte recurrentes)</p>
                    <p>&nbsp;&nbsp;3. Correlations cles (ex: &ldquo;les deals gagnes ont en moyenne</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2 interactions vs 2.1 pour les deals perdus&rdquo;)</p>
                    <p>&nbsp;&nbsp;4. ICP affine (profil du client ideal base sur les wins)</p>
                    <p>&nbsp;&nbsp;5. Recommandations actionnables (3 actions concretes)</p>
                    <p>- Chaque observation doit etre appuyee par les donnees</p>
                    <p>- Pas de generalites : citer les chiffres exacts</p>
                    <p>- Si l&apos;echantillon est trop petit pour conclure, le signaler</p>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Ce que l&apos;IA identifie en 2 minutes.</strong> Sur nos tests avec des donnees reelles, l&apos;IA a systematiquement identifie des patterns que les equipes n&apos;avaient pas vus. Exemples : les deals avec plus de 3 interactions avant la proposition ont un taux de closing 2x superieur. Les deals provenant d&apos;inbound convertissent 40% mieux que l&apos;outbound, mais avec un panier moyen 30% inferieur. Les deals perdus pour &ldquo;prix trop eleve&rdquo; avaient en realite un cycle de vente plus court (signe qu&apos;on n&apos;a pas assez qualifie).</p>
                    <p><strong className="text-[#111]">La limite.</strong> 20 deals, c&apos;est un echantillon petit. L&apos;IA le sait et le signalera si vous ajoutez la contrainte correspondante. L&apos;ideal est de travailler sur 50+ deals pour des conclusions statistiquement fiables. Mais meme sur 20 deals, les patterns identifies donnent des pistes d&apos;amelioration concretes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : La difference entre prompts et agents */}
              <section id="prompts-vs-agents" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-[#111] p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">La difference entre prompts et agents</h2>
                  <div className="space-y-3 text-[13px] text-white/70 leading-[1.75]">
                    <p>Tout ce qu&apos;on a vu jusqu&apos;ici, ce sont des <strong className="text-white">prompts</strong>. Un prompt, c&apos;est ponctuel : vous le copiez-collez, vous ajoutez vos donnees, vous obtenez un resultat. C&apos;est manuel. Ca demande votre intervention a chaque fois.</p>
                    <p>Un <strong className="text-white">agent IA</strong>, c&apos;est different. Un agent tourne tout seul. Il se declenche automatiquement (quand un deal change d&apos;etape, quand un call est enregistre, quand un lead entre dans le CRM), il execute le prompt de facon autonome, et il ecrit le resultat directement dans votre outil (HubSpot, Slack, Notion).</p>
                    <p>Concretement, la progression est la suivante :</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { etape: "Etape 1 : le prompt manuel", desc: "Vous copiez le prompt, collez les donnees du prospect, obtenez le resultat, et le reportez manuellement dans votre CRM. C'est deja un gain de temps enorme.", color: "#D4A27F" },
                      { etape: "Etape 2 : le prompt template", desc: "Vous creez un template avec des variables ([Prenom], [Entreprise], [Pain point]). Vous remplissez les variables, le reste est pre-ecrit. Plus rapide, moins d'erreurs.", color: "#4B5EFC" },
                      { etape: "Etape 3 : l'agent automatise", desc: "Un agent se connecte a votre CRM, recupere les donnees du prospect automatiquement, execute le prompt, et ecrit le resultat dans le bon champ HubSpot. Zero intervention humaine.", color: "#6D00CC" },
                    ].map((e) => (
                      <div key={e.etape} className="flex gap-3 rounded-xl bg-white/5 p-4">
                        <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: e.color }} />
                        <div>
                          <p className="text-[12px] font-semibold text-white mb-0.5">{e.etape}</p>
                          <p className="text-[11px] text-white/50 leading-[1.6]">{e.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-white/70 leading-[1.75]">
                    <p>Le prompt est le debut. L&apos;agent est la suite. Mais il faut commencer par le prompt : c&apos;est en testant et en affinant vos prompts manuellement que vous comprendrez ce qui fonctionne. Un agent construit sur un mauvais prompt produira des mauvais resultats, mais a l&apos;echelle et automatiquement, ce qui est pire.</p>
                    <p><strong className="text-white">Notre recommandation :</strong> passez 2 a 4 semaines a utiliser vos prompts manuellement, iterer, ajuster. Quand un prompt produit des resultats fiables dans 90%+ des cas, c&apos;est le moment de l&apos;automatiser en agent.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 : Comment creer sa bibliotheque de prompts */}
              <section id="bibliotheque-prompts" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment creer sa bibliotheque de prompts</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les 5 prompts de cet article sont un point de depart. Mais chaque equipe commerciale a ses propres cas d&apos;usage, son propre vocabulaire, ses propres templates. L&apos;objectif est de construire une bibliotheque de prompts interne, partagee par toute l&apos;equipe, versionee et amelioree en continu.</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-3">Structure recommandee (Notion ou Google Docs)</p>
                    <div className="space-y-2">
                      {[
                        { champ: "Nom du prompt", exemple: "Email de prospection - SDR outbound" },
                        { champ: "Cas d'usage", exemple: "Premier contact cold outreach" },
                        { champ: "Variables a remplir", exemple: "[Prenom], [Entreprise], [Pain point], [Reference]" },
                        { champ: "Le prompt complet", exemple: "Role + Contexte + Contraintes + Exemple" },
                        { champ: "Version", exemple: "v3.2 (mise a jour le 15/03/2026)" },
                        { champ: "Taux de succes", exemple: "85% utilisable sans retouche" },
                        { champ: "Notes d'amelioration", exemple: "Ajouter une contrainte sur la longueur de l'objet" },
                      ].map((c) => (
                        <div key={c.champ} className="flex gap-3 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-1.5 shrink-0" />
                          <div>
                            <span className="text-[11px] font-semibold text-[#111]">{c.champ}</span>
                            <span className="text-[11px] text-[#999]"> : {c.exemple}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Versionner.</strong> Un prompt evolue. Quand vous trouvez une contrainte qui ameliore le resultat, mettez a jour le prompt et incrementez la version. Gardez un historique : ca permet de revenir en arriere si une modification degrade la qualite.</p>
                    <p><strong className="text-[#111]">Tester.</strong> Chaque nouveau prompt ou chaque modification doit etre testee sur 5 a 10 cas reels avant d&apos;etre validee. Ne vous fiez pas a un seul test. Un prompt qui fonctionne sur un prospect SaaS peut echouer sur un prospect industriel.</p>
                    <p><strong className="text-[#111]">Iterer.</strong> La meilleure bibliotheque de prompts est celle qui est utilisee et amelioree chaque semaine. Mettez en place une routine : chaque vendredi, 15 minutes pour revoir les prompts utilises dans la semaine et noter les ameliorations possibles.</p>
                    <p><strong className="text-[#111]">Partager.</strong> Un prompt qui fonctionne pour un commercial doit etre accessible a toute l&apos;equipe. C&apos;est le meme principe que les playbooks commerciaux : documentez, partagez, standardisez.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 : Aller plus loin avec Claude Code */}
              <section id="aller-plus-loin" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Aller plus loin avec Claude Code</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les prompts sont le premier niveau. Ils vous font gagner du temps sur des taches ponctuelles. Mais il arrive un moment ou le copier-coller atteint ses limites : quand vous avez 50 prospects a briefer, 30 calls a resumer, ou 100 deals a analyser chaque semaine.</p>
                    <p>C&apos;est la que <strong className="text-[#111]">Claude Code</strong> entre en jeu. Claude Code permet de transformer vos prompts en outils automatises qui se connectent a votre CRM, a vos outils de transcription, a vos bases de donnees, et qui tournent tout seuls.</p>
                    <p>Quelques exemples concrets de ce que nos clients ont automatise :</p>
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      { action: "Briefing prospect automatique", desc: "Quand un meeting est cree dans HubSpot, un agent recupere le profil LinkedIn du contact, les news de l'entreprise, et genere un briefing envoye par Slack 1h avant le call." },
                      { action: "Resume de call dans le CRM", desc: "Quand un call est enregistre dans Claap, un agent genere le resume structure et met a jour les champs du deal dans HubSpot automatiquement." },
                      { action: "Score de qualification enrichi", desc: "A chaque nouveau lead, un agent analyse le profil, l'entreprise, et le comportement sur le site pour generer un score de qualification avec une justification textuelle." },
                      { action: "Rapport win/loss hebdomadaire", desc: "Chaque lundi, un agent analyse les deals fermes de la semaine precedente et envoie un rapport avec les patterns identifies dans Slack." },
                    ].map((a) => (
                      <div key={a.action} className="flex gap-3 rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors">
                        <span className="w-2 h-2 rounded-sm bg-[#D4A27F] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-[12px] font-semibold text-[#111]">{a.action}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6] mt-0.5">{a.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La transition entre prompts manuels et agents automatises est naturelle. Vous commencez par tester un prompt, vous l&apos;affinez jusqu&apos;a obtenir des resultats fiables, puis vous le transformez en agent. Les prompts de cet article sont concus pour cette progression.</p>
                    <p>Pour un guide complet sur Claude Code et comment les equipes non-techniques peuvent l&apos;utiliser, consultez notre article dedie : <Link href="/blog/claude-code-equipes-non-techniques" className="text-[#D4A27F] underline underline-offset-2 hover:text-[#111] transition-colors">Claude Code pour les equipes non-techniques</Link>.</p>
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
                    <p className="text-[12px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#D4A27F] transition-colors">{a.title}</p>
                    <p className="text-[10px] text-[#999] mt-2">{a.category}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl border border-[#E8E8E8] p-6 md:p-10 text-center" style={{ background: "linear-gradient(135deg, #D4A27F08 0%, #D4A27F15 100%)" }}>
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Former votre equipe au prompt engineering ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On forme les equipes commerciales B2B au prompt engineering et a l&apos;utilisation de l&apos;IA dans leur quotidien. Prompts personnalises, bibliotheque sur mesure, et transition vers les agents automatises.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#D4A27F]" />Reserver un appel
                  </a>
                  <Link href="/agents-ia" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Nos services IA
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
