"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Claude Code pour les equipes non-techniques : ce que ca change",
  description: "Claude Code n'est pas reserve aux developpeurs. Decouvrez comment les equipes marketing, commerciales et CS l'utilisent au quotidien pour automatiser leurs rapports, nettoyer leur CRM, generer du contenu et construire des outils internes, sans ecrire une seule ligne de code.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/claude-code-equipes-non-techniques" },
  articleSection: "IA & Automatisation",
  wordCount: 3000,
  inLanguage: "fr",
};

const sections = [
  { id: "pas-un-outil-de-dev", title: "Pas un outil de dev" },
  { id: "claude-vs-claude-code", title: "Claude vs Claude Code" },
  { id: "rapport-hebdo", title: "Rapport hebdo automatique" },
  { id: "nettoyage-crm", title: "Nettoyage CRM" },
  { id: "contenu-grande-echelle", title: "Contenu a grande echelle" },
  { id: "analyse-calls", title: "Analyse des calls" },
  { id: "outils-internes", title: "Outils internes" },
  { id: "comment-demarrer", title: "Comment demarrer" },
  { id: "limites", title: "Les limites" },
  { id: "approche-ceres", title: "Notre approche" },
];

const relatedArticles = [
  { title: "MCP : connecter Claude a votre CRM, Slack et tous vos outils", slug: "mcp-connecter-claude-crm-outils", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Comment utiliser l'IA dans votre processus commercial B2B", slug: "ia-processus-commercial-vente-b2b", category: "IA & Automatisation", color: "#4B5EFC" },
  { title: "Data quality CRM : audit et nettoyage en 5 etapes", slug: "data-quality-crm-audit-nettoyage", category: "Data & Reporting", color: "#22C55E" },
];

export default function ClaudeCodeNonTechniquesArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pas-un-outil-de-dev");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "13%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "25%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "37%", width: 300, height: 300, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "50%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "63%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "76%", width: 240, height: 240, borderRadius: "50%", background: "#D4A27F", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "88%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.06, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Claude%20Code%20pour%20les%20equipes%20non-techniques&url=https://ceres.agency/blog/claude-code-equipes-non-techniques" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/claude-code-equipes-non-techniques" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Claude Code equipes non-techniques</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">16 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Claude Code pour les equipes non-techniques : ce que ca change
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Claude Code n&apos;est pas un outil reserve aux developpeurs. C&apos;est un environnement ou Claude peut agir sur vos fichiers, vos outils et vos donnees, pas seulement repondre a des questions. Un marketeur peut generer 50 emails personnalises a partir de son CRM. Un commercial peut obtenir un playbook base sur ses vrais calls. Un CSM peut automatiser ses rapports hebdomadaires. Ce guide montre concretement ce que Claude Code change pour les equipes non-techniques, avec des cas d&apos;usage reels et un plan pour demarrer.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>2 avril 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 : Claude Code n'est pas un outil de developpeur */}
              <section id="pas-un-outil-de-dev" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Claude Code n&apos;est pas un outil de developpeur</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;idee recue la plus repandue sur Claude Code, c&apos;est qu&apos;il s&apos;agit d&apos;un outil de programmation. Le nom contient &ldquo;Code&rdquo;, il s&apos;installe via un terminal, et Anthropic le presente comme un outil de developpement. Tout ca est vrai. Mais c&apos;est une vision reductrice de ce que Claude Code permet reellement.</p>
                    <p>Claude Code est un environnement d&apos;execution. C&apos;est un contexte dans lequel Claude peut agir, pas juste repondre. La difference est fondamentale. Quand vous utilisez Claude dans sa version classique (le chat sur claude.ai), vous posez une question, Claude repond. Vous demandez un template d&apos;email, il vous en propose un. Vous demandez une analyse, il vous donne des recommandations. Mais il ne fait rien. Il ne touche pas a vos fichiers, il ne se connecte pas a vos outils, il n&apos;execute rien.</p>
                    <p>Claude Code change cette equation. Dans cet environnement, Claude peut :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Lire vos fichiers.</strong> Votre charte editoriale, vos exports CSV, vos templates existants, vos donnees brutes.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Executer des scripts.</strong> Trier des donnees, formater des fichiers, calculer des metriques, transformer des formats.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Se connecter a vos outils.</strong> Via les serveurs MCP, Claude Code peut interagir directement avec HubSpot, Slack, Notion, Google Sheets et des dizaines d&apos;autres outils.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Creer des livrables.</strong> Des fichiers HTML, des rapports structures, des dashboards, des emails formates.</li>
                    </ul>
                    <p>Le marketeur qui veut analyser les performances de ses campagnes n&apos;a pas besoin de savoir coder. Le commercial qui veut un rapport hebdomadaire automatise non plus. Le CSM qui veut identifier les comptes a risque dans son CRM non plus. Claude Code est l&apos;interface qui leur donne acces a la puissance de Claude, appliquee a leurs vrais outils et leurs vraies donnees.</p>
                    <p>La vraie difference se resume en une phrase : <strong className="text-[#111]">Claude repond. Claude Code fait.</strong></p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 : Ce que Claude Code peut faire que Claude ne peut pas */}
              <section id="claude-vs-claude-code" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Ce que Claude Code peut faire que Claude ne peut pas</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Pour comprendre la difference, prenons un exemple concret. Vous etes responsable marketing et vous voulez creer des emails de prospection personnalises.</p>
                    <p>Avec Claude classique, voici ce qui se passe : vous ouvrez le chat, vous decrivez votre cible, vous demandez un template. Claude vous propose un email generique avec des placeholders du type [Prenom], [Entreprise], [Pain point]. C&apos;est utile, mais c&apos;est un point de depart. Vous devez ensuite aller chercher les donnees, personnaliser chaque email, adapter le ton, formater en HTML. Le travail reste a faire.</p>
                    <p>Avec Claude Code, voici ce qui se passe :</p>
                  </div>

                  {/* Comparison table */}
                  <div className="mb-6 rounded-xl border border-[#F2F2F2] overflow-hidden">
                    <div className="grid grid-cols-2">
                      <div className="p-4 bg-[#FAFAFA] border-b border-r border-[#F2F2F2]">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-[#999]" />
                          <p className="text-[12px] font-semibold text-[#111]">Claude (chat)</p>
                        </div>
                      </div>
                      <div className="p-4 bg-[#FAFAFA] border-b border-[#F2F2F2]">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-[#D4A27F]" />
                          <p className="text-[12px] font-semibold text-[#111]">Claude Code</p>
                        </div>
                      </div>
                    </div>
                    {[
                      { claude: "Propose un template d'email generique", code: "Lit vos 50 derniers deals fermes dans HubSpot" },
                      { claude: "Suggere des pain points theoriques", code: "Identifie les vrais patterns de vos deals gagnes" },
                      { claude: "Genere 1 email a la fois", code: "Genere 10, 50 ou 100 emails personnalises d'un coup" },
                      { claude: "Donne le texte brut", code: "Formate en HTML dans votre design system" },
                      { claude: "Vous laisse faire le travail", code: "Fait le travail, vous validez" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-2">
                        <div className="p-3 border-b border-r border-[#F2F2F2] text-[11px] text-[#777] leading-[1.6]">{row.claude}</div>
                        <div className="p-3 border-b border-[#F2F2F2] text-[11px] text-[#555] leading-[1.6] font-medium">{row.code}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est la difference entre un consultant qui donne des conseils et un consultant qui fait le travail. Claude Code lit votre CRM, analyse vos donnees reelles, identifie les patterns, genere les livrables et les formate. Vous n&apos;avez plus qu&apos;a valider et envoyer.</p>
                    <p>Cette capacite d&apos;execution change completement la proposition de valeur. Ce n&apos;est plus de l&apos;assistance, c&apos;est de la delegation. Et ca fonctionne pour tous les cas d&apos;usage decrits dans les sections suivantes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Rapport hebdo automatique */}
              <section id="rapport-hebdo" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#D4A27F]/10 flex items-center justify-center text-[14px] font-bold text-[#D4A27F]">1</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Cas d&apos;usage : creer un rapport hebdo automatique</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque lundi matin, un sales manager passe entre 1 et 3 heures a preparer son rapport hebdomadaire. Il ouvre HubSpot, exporte les donnees pipeline, compile les activites de la semaine, calcule les taux de conversion par etape, identifie les deals a risque, met tout ca en forme dans un Google Slides ou un email, et l&apos;envoie a sa direction. C&apos;est un rituel chronophage, repetitif et a faible valeur ajoutee.</p>
                    <p>Avec Claude Code et un serveur MCP connecte a HubSpot, ce processus disparait. Voici comment ca fonctionne :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Connexion au CRM.</strong> Claude Code se connecte a HubSpot via le serveur MCP et tire les donnees de la semaine ecoulee : nouveaux deals crees, deals avances, deals fermes (gagnes et perdus), activites (calls, emails, meetings).</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Analyse automatique.</strong> Claude calcule les metriques cles : pipeline total, delta semaine precedente, taux de conversion par etape, deals en retard de closing, activites par commercial, ratio meetings/deals crees.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Generation du rapport.</strong> Claude genere un rapport structure et formate, avec les chiffres cles en haut, les tendances, les alertes et les recommandations. Le format est adapte a votre contexte : HTML pour email, Markdown pour Notion, ou message structure pour Slack.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Distribution.</strong> Le rapport est envoye automatiquement sur le canal Slack de l&apos;equipe commerciale ou par email a la direction.</li>
                    </ul>
                  </div>

                  {/* Time saved stats */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { stat: "30 min", label: "de mise en place initiale", color: "#D4A27F" },
                      { stat: "3h/sem", label: "gagnees par manager", color: "#6D00CC" },
                      { stat: "0 erreur", label: "de calcul ou de copier-coller", color: "#22C55E" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[20px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le rapport est toujours a jour, toujours dans le meme format, et toujours envoye a l&apos;heure. Plus de retard parce que le manager est en rendez-vous le lundi matin. Plus d&apos;oubli d&apos;un deal important. Plus de tableur Excel intermediaire qui diverge des donnees du CRM.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Nettoyer et enrichir votre base CRM */}
              <section id="nettoyage-crm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC]/10 flex items-center justify-center text-[14px] font-bold text-[#6D00CC]">2</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Cas d&apos;usage : nettoyer et enrichir votre base CRM</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le nettoyage de base CRM est un des cas d&apos;usage les plus immediats et les plus impressionnants de Claude Code pour une equipe non-technique. La plupart des CRM que nous auditons chez nos clients contiennent entre 15% et 25% de donnees inutilisables : doublons, champs vides, formats incoherents, contacts obsoletes.</p>
                    <p>Traditionnellement, ce travail est delegue a un stagiaire ou a un ops junior, et prend entre 1 et 3 semaines. Avec Claude Code, voici ce qui se passe :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Lecture de la base.</strong> Claude Code se connecte a HubSpot via MCP et lit l&apos;ensemble des contacts, entreprises et deals. Il accede aux proprietes, aux valeurs, aux associations.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Detection des doublons.</strong> Claude identifie les contacts dupliques par email, par nom + entreprise, ou par numero de telephone. Il propose une strategie de fusion : quel enregistrement garder, quelles donnees conserver de chaque doublon.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Standardisation des formats.</strong> Pays (&ldquo;France&rdquo;, &ldquo;FR&rdquo;, &ldquo;fra&rdquo; deviennent &ldquo;France&rdquo;). Telephones (tous en format international). Industries (mapping des variantes vers une liste normalisee). Postes (CEO, PDG, Directeur General deviennent un format unique).</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Identification des champs vides.</strong> Claude repere les proprietes critiques non remplies et propose un plan de completude : quels champs prioriser, comment les enrichir, quels contacts archiver.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Execution des corrections.</strong> Apres votre validation, Claude Code execute les modifications directement dans le CRM. Pas d&apos;export CSV, pas d&apos;import retour, pas de manipulation manuelle.</li>
                    </ul>
                  </div>

                  {/* Before/after comparison */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <p className="text-[11px] font-semibold text-[#EF4444] mb-2">Avant</p>
                      <div className="space-y-1.5 text-[10px] text-[#777]">
                        <p>18% de doublons</p>
                        <p>42% de champs vides critiques</p>
                        <p>12 formats differents pour le pays</p>
                        <p>2 a 3 semaines de travail manuel</p>
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <p className="text-[11px] font-semibold text-[#22C55E] mb-2">Apres</p>
                      <div className="space-y-1.5 text-[10px] text-[#777]">
                        <p>0,5% de doublons residuels</p>
                        <p>12% de champs vides (non enrichissables)</p>
                        <p>1 format standardise par propriete</p>
                        <p>2 heures de travail avec Claude Code</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ce qui prenait 2 semaines a un stagiaire prend 2 heures. Et le resultat est plus fiable, parce que Claude ne fait pas d&apos;erreur de copier-coller et applique les regles de standardisation de maniere parfaitement coherente sur l&apos;ensemble de la base.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Generer du contenu a grande echelle */}
              <section id="contenu-grande-echelle" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[14px] font-bold text-[#22C55E]">3</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Cas d&apos;usage : generer du contenu a grande echelle</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La generation de contenu est probablement le cas d&apos;usage le plus connu de l&apos;IA generative. Mais la difference entre Claude classique et Claude Code dans ce domaine est considerable. Claude classique genere du contenu generique. Claude Code genere du contenu qui respecte votre identite, votre ton et votre strategie editoriale, parce qu&apos;il a acces a vos fichiers de reference.</p>
                    <p>Voici comment ca fonctionne en pratique :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Lecture de la charte editoriale.</strong> Claude Code lit votre guide de ton (vouvoiement, pas d&apos;emojis, chiffres plutot que mots), vos mots-cles a utiliser et a eviter, votre positionnement.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Analyse des contenus existants.</strong> Il lit vos 10 derniers articles de blog, vos posts LinkedIn les plus performants, vos emails de nurturing existants. Il comprend votre style, pas seulement vos consignes.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Production de contenu.</strong> Articles de blog, posts LinkedIn, emails de nurturing, pages de destination, scripts de webinars. Chaque piece de contenu respecte votre ton, vos formats et vos structures habituelles.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Formatage et livraison.</strong> Claude Code ne s&apos;arrete pas au texte brut. Il genere les templates HTML pour vos emails, le code pour vos articles de blog, les visuels textuels pour vos posts. Tout est pret a etre publie.</li>
                    </ul>
                    <p>C&apos;est exactement comme ca que les emails de cette campagne ont ete crees. Claude Code a lu la charte editoriale de Ceres, analyse les articles existants du blog, et produit des emails de prospection qui sont indistinguables de ceux ecrits manuellement. Le gain de temps est d&apos;un facteur 5 a 10 par rapport a une redaction manuelle, sans compromis sur la qualite.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Analyser vos calls commerciaux */}
              <section id="analyse-calls" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#D4A27F]/10 flex items-center justify-center text-[14px] font-bold text-[#D4A27F]">4</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Cas d&apos;usage : analyser vos calls commerciaux</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Vos calls commerciaux contiennent une mine d&apos;informations inexploitees. Les objections que vos prospects levent, les questions qu&apos;ils posent, les arguments qui font mouche, les signaux qui precedent un deal gagne ou perdu. Tout est dans les transcriptions. Mais personne n&apos;a le temps de les relire systematiquement.</p>
                    <p>Claude Code change cette donne. Voici le processus :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Import des transcriptions.</strong> Claude Code prend les transcriptions issues de Claap, Gong ou tout autre outil d&apos;enregistrement. Il peut traiter 10, 50 ou 100 transcriptions en une seule session.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Analyse croisee.</strong> Claude identifie les objections recurrentes, les questions les plus posees par les prospects, les sujets qui reviennent dans les deals gagnes vs perdus, les moments ou le prospect decroche.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Identification des patterns.</strong> Quels arguments sont correles aux deals gagnes ? Quelles objections non traitees sont correlees aux deals perdus ? A quel moment du call le prospect prend sa decision ? Claude Code fait apparaitre ces patterns a partir des donnees reelles.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Generation du playbook.</strong> Le livrable final est un playbook commercial structure : les 5 objections les plus frequentes avec les reponses qui fonctionnent, les questions a poser a chaque etape du cycle de vente, les red flags a detecter, les signaux d&apos;achat a identifier.</li>
                    </ul>
                  </div>

                  {/* Output example */}
                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-3">Exemple de livrable : Playbook commercial</p>
                    <div className="space-y-3">
                      {[
                        { title: "Top 5 objections", desc: "Prix trop eleve (34%), manque de temps pour implementer (22%), deja un outil en place (18%), besoin de valider en interne (15%), ROI pas clair (11%)", color: "#D4A27F" },
                        { title: "Arguments qui convertissent", desc: "Chiffrage du cout de l'inaction, temoignage client meme secteur, demonstration live sur leurs donnees, ROI calcule sur leur cas specifique", color: "#22C55E" },
                        { title: "Red flags", desc: "Prospect qui ne pose pas de question sur le prix, absence de decision-maker dans le call, pas de timeline definie, demande de 'juste un devis'", color: "#EF4444" },
                      ].map((item) => (
                        <div key={item.title} className="rounded-lg border border-[#F0F0F0] bg-white p-3">
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <p className="text-[11px] font-semibold text-[#111]">{item.title}</p>
                          </div>
                          <p className="text-[10px] text-[#777] leading-[1.6]">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ce playbook n&apos;est pas base sur l&apos;intuition d&apos;un manager ou sur les best practices generiques d&apos;un livre de vente. Il est base sur vos vrais calls, vos vrais prospects, votre vrai marche. C&apos;est du coaching commercial data-driven, accessible a toute equipe qui enregistre ses calls.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Construire des outils internes */}
              <section id="outils-internes" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC]/10 flex items-center justify-center text-[14px] font-bold text-[#6D00CC]">5</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Cas d&apos;usage : construire des outils internes</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque equipe a des besoins specifiques qui ne sont couverts par aucun logiciel du marche. Un calculateur de ROI adapte a votre offre. Un dashboard qui croise les donnees de HubSpot et de votre outil de facturation. Un formulaire de qualification avec un scoring personnalise. Un outil de simulation tarifaire pour les commerciaux.</p>
                    <p>Historiquement, ces outils necessitaient l&apos;intervention d&apos;un developpeur. Il fallait rediger un brief, attendre la disponibilite, iterer sur les specs, tester, deployer. Le delai moyen : 2 a 6 semaines. Le cout : plusieurs milliers d&apos;euros.</p>
                    <p>Avec Claude Code, le processus est radicalement different :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-2 shrink-0" /><strong className="text-[#111]">Vous decrivez le besoin en langage naturel.</strong> &ldquo;Je veux un calculateur qui prend en entree le nombre de commerciaux, le nombre de deals par mois et le taux de conversion actuel, et qui calcule le gain potentiel avec un CRM optimise.&rdquo;</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4A27F] mt-2 shrink-0" /><strong className="text-[#111]">Claude Code construit l&apos;outil.</strong> En quelques minutes, il cree une page web fonctionnelle avec les champs de saisie, la logique de calcul, le design et les interactions.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Vous iterez en temps reel.</strong> &ldquo;Ajoute un champ pour le panier moyen.&rdquo; &ldquo;Change la couleur du bouton.&rdquo; &ldquo;Ajoute un export PDF.&rdquo; Chaque modification prend quelques secondes.</li>
                    </ul>
                  </div>

                  {/* Examples grid */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { title: "Calculateur de ROI", desc: "Simulateur personnalise pour vos prospects, avec vos metriques et votre offre", color: "#D4A27F" },
                      { title: "Dashboard custom", desc: "Tableau de bord qui croise les donnees de vos differents outils en un seul ecran", color: "#6D00CC" },
                      { title: "Formulaire de qualification", desc: "Scoring automatique des leads entrants selon vos criteres metier", color: "#22C55E" },
                      { title: "Outil de simulation", desc: "Simulation tarifaire, prevision de pipeline, calcul de commission", color: "#D4A27F" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <p className="text-[11px] font-semibold text-[#111]">{item.title}</p>
                        </div>
                        <p className="text-[10px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pas besoin de Figma pour le design, pas besoin de React pour le code, pas besoin d&apos;un developpeur pour le deploiement. Vous decrivez, Claude Code construit. L&apos;outil est fonctionnel en quelques minutes et peut etre itere indefiniment par simple conversation.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Comment demarrer avec Claude Code */}
              <section id="comment-demarrer" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment demarrer avec Claude Code</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;installation de Claude Code prend moins de 5 minutes. Voici les etapes :</p>
                  </div>

                  {/* Steps */}
                  <div className="mt-4 space-y-3">
                    {[
                      { step: "1", title: "Installer Claude Code", desc: "Ouvrez votre terminal et lancez : npm install -g @anthropic-ai/claude-code. C'est une commande unique. Si vous n'avez pas Node.js installe, Claude Code vous guide pour l'installer.", color: "#D4A27F" },
                      { step: "2", title: "Lancer Claude Code", desc: "Tapez 'claude' dans votre terminal. Claude Code s'ouvre et vous demande de vous authentifier avec votre compte Anthropic. Une fois connecte, vous etes operationnel.", color: "#6D00CC" },
                      { step: "3", title: "Configurer vos serveurs MCP", desc: "Les serveurs MCP sont ce qui permet a Claude Code de se connecter a vos outils. Ajoutez un serveur HubSpot pour votre CRM, un serveur Slack pour la messagerie, un serveur Notion pour la documentation. Chaque serveur s'ajoute en une ligne de configuration.", color: "#22C55E" },
                      { step: "4", title: "Tester vos premieres commandes", desc: "Commencez simple. 'Lis le fichier export.csv et donne-moi un resume.' Puis 'Connecte-toi a HubSpot et dis-moi combien de deals sont en cours.' Puis 'Genere un rapport de la semaine.' Montez en complexite progressivement.", color: "#D4A27F" },
                      { step: "5", title: "Automatiser vos premiers workflows", desc: "Une fois a l'aise, creez vos premiers workflows reproductibles. Sauvegardez vos prompts dans des fichiers texte. Configurez des taches recurrentes. En 15 minutes, vous avez un Claude connecte a vos outils.", color: "#6D00CC" },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border border-[#F2F2F2] p-4 flex gap-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[14px] font-bold shrink-0" style={{ background: `${item.color}15`, color: item.color }}>{item.step}</div>
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;essentiel n&apos;est pas de maitriser l&apos;outil du premier coup, mais de commencer par un cas d&apos;usage concret. Choisissez la tache repetitive qui vous prend le plus de temps chaque semaine, et demandez a Claude Code de la faire. Le resultat est generalement convaincant en moins de 30 minutes.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 : Les limites a connaitre */}
              <section id="limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les limites a connaitre</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Claude Code est un outil puissant, mais il n&apos;est pas magique. Etre transparent sur ses limites est aussi important que de montrer ses capacites. Voici les points a garder en tete avant de deployer Claude Code dans votre equipe :</p>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      { title: "Cout de l'API Anthropic", desc: "Claude Code consomme des tokens API a chaque interaction. Pour un usage quotidien par une equipe de 5 personnes, comptez entre 100 et 500 EUR par mois selon l'intensite d'utilisation. C'est un investissement, pas un cout negligeable. Mais compare au temps gagne (plusieurs heures par semaine par personne), le ROI est generalement positif des le premier mois.", color: "#D4A27F", type: "warning" },
                      { title: "Courbe d'apprentissage", desc: "Savoir quoi demander a Claude Code est une competence. Les premiers jours, vous obtiendrez des resultats moyens parce que vos prompts seront trop vagues ou trop ambitieux. Il faut apprendre a decouper les taches, a etre precis dans ses instructions, a fournir le bon contexte. Comptez 1 a 2 semaines pour etre a l'aise.", color: "#6D00CC", type: "warning" },
                      { title: "Hallucinations sur les chiffres", desc: "Claude peut inventer des statistiques ou des donnees quand il n'a pas acces a la source. C'est un risque reel, surtout pour les rapports et les analyses. La parade : toujours connecter Claude Code a vos vraies sources de donnees via MCP, et verifier les chiffres cles avant de les partager.", color: "#EF4444", type: "critical" },
                      { title: "Validation humaine obligatoire", desc: "Pour toute action qui modifie des donnees (mise a jour CRM, envoi d'emails, modification de fichiers), une validation humaine est indispensable. Claude Code propose, vous validez. C'est une regle non negociable, surtout au debut.", color: "#22C55E", type: "info" },
                      { title: "Dependance a la qualite des donnees", desc: "Claude Code est aussi bon que les donnees auxquelles il a acces. Si votre CRM est un chaos de doublons et de champs vides, les analyses et les rapports generes seront approximatifs. Le nettoyage de la base est souvent un prerequis.", color: "#D4A27F", type: "warning" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-[#111]">{item.title}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ces limites ne sont pas des raisons de ne pas utiliser Claude Code. Ce sont des realites a integrer dans votre deploiement. Une equipe qui connait ces limites et qui met en place les bons garde-fous tirera beaucoup plus de valeur de l&apos;outil qu&apos;une equipe qui fonce tete baissee.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 : Notre approche chez Ceres */}
              <section id="approche-ceres" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche chez Ceres</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on ne fait pas de formation generique a l&apos;IA. On ne fait pas de workshop de 2 heures ou tout le monde repart avec un compte ChatGPT et des prompts copie-colles depuis un blog americain. Ce n&apos;est pas notre approche.</p>
                    <p>Ce qu&apos;on fait, c&apos;est deployer Claude Code dans le quotidien reel de vos equipes marketing, commerciales et customer success. Concretement, voici comment ca se passe :</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      { title: "Audit de votre stack", desc: "On commence par cartographier vos outils (CRM, emailing, messagerie, documentation, analytics) et identifier les connexions MCP a mettre en place. Chaque stack est differente, chaque configuration est specifique.", color: "#D4A27F" },
                      { title: "Configuration des serveurs MCP", desc: "On installe et configure les serveurs MCP pour connecter Claude Code a vos outils. HubSpot, Slack, Notion, Google Sheets, votre outil de facturation. On teste chaque connexion, on verifie les permissions, on securise les acces.", color: "#6D00CC" },
                      { title: "Creation des premiers workflows", desc: "On construit avec votre equipe les 3 a 5 premiers workflows automatises : rapport hebdomadaire, nettoyage CRM, generation de contenu, analyse de calls, ou tout autre cas d'usage prioritaire pour votre activite.", color: "#22C55E" },
                      { title: "Formation operationnelle", desc: "On forme chaque membre de l'equipe sur son cas d'usage specifique. Le marketeur apprend a generer du contenu. Le commercial apprend a automatiser ses rapports. Le CSM apprend a identifier les comptes a risque. Pas de theorie, que de la pratique.", color: "#D4A27F" },
                      { title: "Autonomie", desc: "A la fin de l'accompagnement, votre equipe est autonome. Elle sait utiliser Claude Code, elle sait creer de nouveaux workflows, elle sait iterer sur les existants. On reste disponible pour les cas complexes, mais le quotidien tourne sans nous.", color: "#6D00CC" },
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

                  <div className="mt-6 space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>L&apos;objectif n&apos;est pas de vous rendre dependant d&apos;un prestataire. C&apos;est de vous rendre autonome sur un outil qui va transformer votre productivite. Claude Code n&apos;est pas un gadget. C&apos;est un levier operationnel, a condition de savoir le deployer correctement.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl p-6 md:p-8 text-center border border-[#C4926F]" style={{ background: "linear-gradient(135deg, #D4A27F, #B8876A)" }}>
                <h3 className="text-[17px] font-semibold text-white mb-3">Pret a deployer Claude Code dans votre equipe ?</h3>
                <p className="text-[13px] text-white/80 leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on configure Claude Code pour votre stack, on cree vos premiers workflows automatises et on forme vos equipes a l&apos;utiliser au quotidien. Commencez par un appel de 30 minutes pour identifier vos cas d&apos;usage prioritaires.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#111] rounded-lg text-[13px] font-medium hover:bg-white/90 transition-colors">
                  Planifier un appel
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
