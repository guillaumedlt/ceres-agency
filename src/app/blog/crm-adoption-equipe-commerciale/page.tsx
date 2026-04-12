"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Adoption CRM : comment faire utiliser HubSpot a vos commerciaux",
  description: "Guide complet pour ameliorer l'adoption CRM par vos equipes commerciales. Les 5 raisons reelles du rejet, simplification de l'interface, formation, automatisation de la saisie et mesure de l'adoption.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/crm-adoption-equipe-commerciale" },
  articleSection: "CRM & HubSpot",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-pas-utilise", title: "Pourquoi ils n'utilisent pas le CRM" },
  { id: "cinq-raisons", title: "Les 5 raisons reelles" },
  { id: "simplifier-interface", title: "Simplifier l'interface" },
  { id: "montrer-valeur", title: "Montrer la valeur" },
  { id: "former-correctement", title: "Former correctement" },
  { id: "automatiser-saisie", title: "Automatiser la saisie" },
  { id: "mesurer-adoption", title: "Mesurer l'adoption" },
  { id: "quick-wins", title: "Les quick wins" },
];

const relatedArticles = [
  { title: "Onboarding HubSpot : les 30 premiers jours", slug: "onboarding-hubspot-30-premiers-jours", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "9 actions commerciales a automatiser dans HubSpot", slug: "9-actions-commerciales-automatiser-hubspot", category: "Automatisation", color: "#FF7A59" },
  { title: "Pipeline commercial : structurer dans HubSpot", slug: "pipeline-commercial-structurer-hubspot", category: "CRM & HubSpot", color: "#6C5CE7" },
];

export default function CrmAdoptionEquipeCommercialeArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-pas-utilise");

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
        <div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#FF7A59", opacity: 0.06, filter: "blur(70px)" }} />

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
                        ? "border-[#FF7A59] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Adoption%20CRM%20%3A%20comment%20faire%20utiliser%20HubSpot%20a%20vos%20commerciaux&url=https://ceres.agency/blog/crm-adoption-equipe-commerciale" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/crm-adoption-equipe-commerciale" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Adoption CRM</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM &amp; HubSpot</Badge>
                <span className="text-[11px] text-[#CCC]">13 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Adoption CRM : comment faire utiliser HubSpot a vos commerciaux
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Vous avez investi dans HubSpot. Vous avez configure les pipelines, les properties et les dashboards. Et vos commerciaux ne l&apos;utilisent pas. Les fiches sont vides, les deals ne sont pas mis a jour, les calls ne sont pas logues. Ce n&apos;est pas un probleme de volonte, c&apos;est un probleme de design. Ce guide vous donne les methodes concretes pour passer de 30% a 90% d&apos;adoption.
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
              <section id="pourquoi-pas-utilise" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi vos commerciaux n&apos;utilisent pas le CRM</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En moyenne, 43% des commerciaux declarent ne pas remplir correctement leur CRM. Et le chiffre reel est probablement plus eleve. Ce n&apos;est pas de la mauvaise volonte. C&apos;est un probleme structurel que la plupart des managers refusent de voir.</p>
                    <p>Le CRM a ete concu pour le management, pas pour les commerciaux. C&apos;est un outil de reporting deguise en outil de vente. Le commercial le voit comme un travail administratif supplementaire qui ne l&apos;aide pas a vendre. Et dans beaucoup de cas, il a raison.</p>
                    <p>La consequence est brutale : des donnees incompletes, des previsions de vente fausses, des decisions prises a l&apos;aveugle. Un CRM mal adopte est pire qu&apos;un CRM inexistant, parce qu&apos;il donne l&apos;illusion d&apos;avoir des donnees fiables alors qu&apos;elles ne le sont pas.</p>
                    <p>La bonne nouvelle : l&apos;adoption est un probleme de design, pas de discipline. En changeant la facon dont le CRM est configure et presente, on peut faire passer l&apos;adoption de 30% a 90% en quelques semaines.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "43%", label: "des commerciaux ne remplissent pas le CRM", color: "#EF4444" },
                      { stat: "65%", label: "des entreprises ont des donnees CRM incompletes", color: "#FF7A59" },
                      { stat: "90%", label: "adoption possible avec la bonne configuration", color: "#22C55E" },
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
              <section id="cinq-raisons" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 5 raisons reelles du rejet</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Quand on interroge les commerciaux sur leur utilisation du CRM, ils repondent &ldquo;je n&apos;ai pas le temps&rdquo;. Mais le manque de temps est un symptome, pas une cause. Voici les 5 raisons reelles.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Trop de champs a remplir",
                        desc: "60 properties sur une fiche contact. 40 champs a remplir pour creer un deal. Le commercial ouvre le CRM, voit un formulaire interminable et le referme. Chaque champ supplementaire est une friction. La plupart de ces champs ne sont jamais utilises dans les rapports.",
                        impact: "Chaque champ ajoute reduit le taux de completion de 5 a 8%.",
                        color: "#EF4444",
                      },
                      {
                        title: "Pas de valeur percue",
                        desc: "Le commercial remplit le CRM pour que le manager puisse faire son reporting du lundi. Le CRM ne l'aide pas a vendre. Il ne lui dit pas qui appeler en priorite, quels deals sont en risque, quelle info manque pour closer. C'est un outil de surveillance, pas un assistant de vente.",
                        impact: "Si le CRM n'aide pas a vendre, il ne sera pas utilise.",
                        color: "#FF7A59",
                      },
                      {
                        title: "Interface trop compliquee",
                        desc: "Des dizaines d'onglets, des menus imbriques, des properties cachees dans des sections. Le commercial ne trouve pas l'information qu'il cherche. L'interface par defaut de HubSpot montre tout. Ce n'est pas un avantage, c'est un probleme.",
                        impact: "Un commercial qui met plus de 30 secondes a trouver une info arrete de chercher.",
                        color: "#6C5CE7",
                      },
                      {
                        title: "Pas de formation adaptee",
                        desc: "Une session de 3 heures le jour du lancement. 50 slides. Tout le monde hoche la tete. Le lendemain, personne ne sait comment creer un deal. La formation en bloc ne fonctionne pas. Le taux de retention est de 10% apres 48 heures.",
                        impact: "90% de la formation initiale est oubliee en 2 jours.",
                        color: "#4B5EFC",
                      },
                      {
                        title: "Pas de consequence",
                        desc: "Certains commerciaux remplissent le CRM. D'autres non. Les deux obtiennent le meme traitement. Pas de consequence positive pour ceux qui le font, pas de consequence negative pour ceux qui ne le font pas. L'adoption devient optionnelle.",
                        impact: "Sans mesure d'adoption visible, le CRM reste un outil facultatif.",
                        color: "#22C55E",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#FAFAFA] p-2">
                          <span className="text-[10px] text-[#999] font-semibold shrink-0 mt-0.5">Impact :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ces 5 problemes sont interconnectes. Trop de champs + pas de valeur + interface compliquee = un CRM que personne ne veut utiliser. La solution n&apos;est pas de menacer, c&apos;est de redesigner l&apos;experience pour que le CRM devienne un outil utile et simple.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="simplifier-interface" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Simplifier l&apos;interface : vues custom et champs minimum</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La premiere action, et souvent la plus impactante, est de simplifier radicalement ce que le commercial voit dans HubSpot. Moins de champs, moins d&apos;onglets, moins de bruit. Voici comment.</p>
                    <p><strong className="text-[#111]">Regles des champs obligatoires.</strong> Identifiez les 5 a 8 champs absolument necessaires pour faire fonctionner votre reporting et votre process. Tout le reste est optionnel ou automatise. Pour un deal : montant, date de closing estimee, etape, decision maker, next step. C&apos;est tout. Chaque champ supplementaire doit justifier sa presence.</p>
                    <p><strong className="text-[#111]">Vues personnalisees par role.</strong> Un SDR n&apos;a pas besoin de voir les memes champs qu&apos;un AE. Un manager n&apos;a pas besoin des memes vues qu&apos;un commercial. HubSpot permet de creer des vues differentes par equipe. Utilisez cette fonctionnalite. Le SDR voit uniquement : statut, dernier contact, prochaine action, score. L&apos;AE voit : montant, etape, decision maker, next step, date closing.</p>
                    <p><strong className="text-[#111]">Sidebar gauche.</strong> Reorganisez la sidebar des fiches contact et deal pour mettre en haut les informations les plus utilisees. Dans HubSpot, vous pouvez customiser l&apos;ordre des sections et masquer les sections inutilisees. Un commercial devrait trouver les 3 informations essentielles sans scroller.</p>
                    <p><strong className="text-[#111]">Supprimer le superflu.</strong> Faites un audit de toutes les properties. Combien sont remplies a plus de 50% ? Celles qui sont remplies a moins de 10% sont probablement inutiles. Archivez-les. Moins il y a de bruit visuel, plus le commercial se concentre sur ce qui compte.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#FF7A59]/20 bg-[#FF7A59]/5 p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-3">Avant / Apres simplification</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="rounded-lg bg-white border border-[#F2F2F2] p-3">
                        <p className="text-[10px] font-semibold text-[#EF4444] mb-2">Avant</p>
                        <div className="space-y-1 text-[10px] text-[#777]">
                          <p>42 properties sur la fiche deal</p>
                          <p>Toutes les sections visibles</p>
                          <p>Meme vue pour tous les roles</p>
                          <p>Taux de completion : 28%</p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-white border border-[#F2F2F2] p-3">
                        <p className="text-[10px] font-semibold text-[#22C55E] mb-2">Apres</p>
                        <div className="space-y-1 text-[10px] text-[#777]">
                          <p>7 properties obligatoires</p>
                          <p>Sections reorganisees par priorite</p>
                          <p>Vues custom par role (SDR, AE, manager)</p>
                          <p>Taux de completion : 87%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="montrer-valeur" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Montrer la valeur : le CRM aide a vendre, pas a reporter</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le plus grand echec d&apos;adoption vient quand le CRM est presente comme un outil de reporting. &ldquo;Remplissez vos fiches pour que je puisse faire mon forecast.&rdquo; Le commercial n&apos;y voit aucun benefice pour lui. L&apos;approche inverse fonctionne : montrer que le CRM est un outil qui aide a vendre.</p>
                    <p><strong className="text-[#111]">Les vues qui aident a vendre.</strong> Creez une vue &ldquo;Mes deals a risque&rdquo; qui montre automatiquement les deals sans activite depuis 7 jours. Une vue &ldquo;Mes next steps&rdquo; qui liste les actions a faire aujourd&apos;hui. Une vue &ldquo;Mes opportunites chaudes&rdquo; qui trie par score de propension. Le commercial ouvre HubSpot le matin et sait immediatement quoi faire.</p>
                    <p><strong className="text-[#111]">Les notifications utiles.</strong> Un prospect a visite la page pricing. Un decision maker a ouvert votre proposition 3 fois. Un lead inbound est arrive avec un score eleve. Ces notifications, envoyees dans Slack ou par email, donnent au commercial une raison d&apos;agir immediatement. C&apos;est le CRM qui vient a lui, pas l&apos;inverse.</p>
                    <p><strong className="text-[#111]">Le competitive advantage.</strong> Montrez aux commerciaux que ceux qui remplissent le CRM correctement closent plus de deals. Parce qu&apos;ils ont l&apos;historique des conversations, les objections precedentes, le contexte de chaque decision maker. Un commercial avec un CRM a jour a un avantage concurrentiel sur un commercial qui travaille de memoire.</p>
                    <p><strong className="text-[#111]">La donnee qui remonte.</strong> Quand le CRM est bien configure, il remonte des insights que le commercial n&apos;aurait pas vu seul. Le cycle moyen des deals qu&apos;il gagne est de 23 jours, mais celui des deals en cours est a 45 jours : signal d&apos;alerte. Son win rate est meilleur sur les deals de 10-20K que sur les deals de 5K : il devrait se concentrer sur le mid-market.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="former-correctement" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Former correctement : micro-formations, pas des sessions de 3 heures</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La formation CRM classique ne marche pas. 3 heures de presentation, 50 slides, un tour complet de toutes les fonctionnalites. Le commercial retient 10% le lendemain. La semaine d&apos;apres, il a tout oublie.</p>
                    <p><strong className="text-[#111]">Les micro-formations.</strong> Au lieu d&apos;une grosse session, faites 10 sessions de 15 minutes. Chaque session couvre un seul sujet : comment creer un deal, comment logger un call, comment utiliser les sequences, comment lire son dashboard. Une action, un resultat visible, 15 minutes.</p>
                    <p><strong className="text-[#111]">Le format video.</strong> Enregistrez chaque micro-formation en video de 3 a 5 minutes. Stockez-les dans un espace accessible (Notion, Loom, HubSpot Knowledge Base). Quand un commercial a une question, il regarde la video au lieu de demander au manager. C&apos;est instantane, disponible 24/7 et toujours a jour.</p>
                    <p><strong className="text-[#111]">Le buddy system.</strong> Identifiez dans l&apos;equipe le ou les commerciaux qui maitrisent le mieux le CRM. Designez-les comme &ldquo;CRM champions&rdquo;. Les nouveaux arrivants et les commerciaux en difficulte sont mis en binome avec eux pendant 2 semaines. L&apos;apprentissage par les pairs est 3x plus efficace que la formation top-down.</p>
                    <p><strong className="text-[#111]">La formation continue.</strong> Chaque semaine, pendant le meeting d&apos;equipe, un point de 5 minutes sur une fonctionnalite CRM. Pas une nouveaute, mais un rappel d&apos;un basique ou une astuce. &ldquo;Saviez-vous que vous pouvez filtrer vos deals par date de dernier contact ?&rdquo; Repetition espacee, pas formation ponctuelle.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-3">Plan de formation en 4 semaines</p>
                    <div className="space-y-2">
                      {[
                        { week: "Semaine 1", topics: "Creer un contact, creer un deal, deplacer dans le pipeline", color: "#FF7A59" },
                        { week: "Semaine 2", topics: "Logger un call, noter les next steps, mettre a jour le montant", color: "#4B5EFC" },
                        { week: "Semaine 3", topics: "Utiliser les sequences, envoyer un email depuis HubSpot, tracker les ouvertures", color: "#6C5CE7" },
                        { week: "Semaine 4", topics: "Lire son dashboard, identifier ses deals a risque, utiliser les filtres", color: "#22C55E" },
                      ].map((w) => (
                        <div key={w.week} className="flex items-start gap-3 rounded-lg bg-white border border-[#F2F2F2] p-3">
                          <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: w.color }} />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">{w.week}</p>
                            <p className="text-[10px] text-[#777]">{w.topics}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#BBB] mt-2">3 sessions de 15 min par semaine + 1 video de recap</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="automatiser-saisie" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Automatiser la saisie : moins de travail = plus d&apos;adoption</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La meilleure facon de faire remplir le CRM, c&apos;est de faire en sorte qu&apos;il se remplisse tout seul. Chaque champ que vous automatisez est un champ que le commercial n&apos;a pas a remplir. Voici les automatisations les plus impactantes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { title: "Enrichissement automatique des contacts", desc: "Quand un contact est cree, un workflow enrichit automatiquement les champs : poste, entreprise, taille, secteur, LinkedIn. Via Clay ou Apollo, connectes a HubSpot. Le commercial cree le contact avec juste un email, le reste se remplit en 30 secondes.", savings: "5 min/contact", color: "#4B5EFC" },
                      { title: "Log automatique des emails et calls", desc: "HubSpot tracke automatiquement les emails envoyes depuis Gmail/Outlook et les calls passes depuis l'app mobile. Le commercial n'a rien a faire. L'historique se construit tout seul. Activez le tracking email et la telephonie HubSpot.", savings: "10 min/jour", color: "#22C55E" },
                      { title: "Resume IA des calls", desc: "Un agent IA (Claap, Gong, ou custom) ecoute les calls, genere un resume structure et le pousse directement dans la fiche HubSpot. Points cles, objections, next steps. Le commercial n'ecrit plus de compte-rendu. Le CRM a une trace exhaustive de chaque conversation.", savings: "15 min/call", color: "#6D00CC" },
                      { title: "Mise a jour automatique des etapes", desc: "Quand un email est envoye, le deal passe automatiquement a 'Contact etabli'. Quand un meeting est booke, il passe a 'Demo planifiee'. Quand une proposition est envoyee, il passe a 'Proposition envoyee'. Le pipeline se met a jour avec les actions reelles, sans intervention manuelle.", savings: "2 min/deal", color: "#FF7A59" },
                      { title: "Rappels intelligents", desc: "Un workflow qui detecte les deals sans activite depuis 5 jours et envoie un rappel au commercial dans Slack : 'Deal [nom] n'a pas eu d'activite depuis 5 jours. Next step prevu : [action].' Le commercial agit ou met a jour. Pas besoin de chercher dans le CRM.", savings: "5 min/jour", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                          </div>
                          <span className="text-[10px] font-bold text-[#22C55E]">{item.savings} gagnes</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Au total, ces automatisations representent 30 a 45 minutes gagnees par commercial et par jour. Sur une equipe de 10 commerciaux, c&apos;est 25 a 35 heures par semaine. Et surtout, les donnees sont plus completes et plus fiables que quand elles sont saisies manuellement.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="mesurer-adoption" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mesurer l&apos;adoption : les indicateurs qui comptent</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ce qui ne se mesure pas ne s&apos;ameliore pas. L&apos;adoption CRM doit etre mesuree avec des indicateurs precis, visibles par toute l&apos;equipe. Voici les 4 indicateurs que l&apos;on recommande.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { metric: "Taux de connexion quotidien", desc: "Pourcentage de commerciaux qui se connectent a HubSpot chaque jour ouvre. Objectif : > 90%. En dessous de 70%, l'adoption est insuffisante.", target: "> 90%", color: "#FF7A59" },
                      { metric: "Taux de completion des fiches", desc: "Pourcentage des champs obligatoires remplis sur les deals actifs. Ne mesurez que les champs obligatoires (5 a 8 max). Objectif : > 85%.", target: "> 85%", color: "#4B5EFC" },
                      { metric: "Activites logguees par jour", desc: "Nombre moyen d'activites (calls, emails, meetings, notes) logguees par commercial et par jour. Objectif : > 5. Attention : si vous avez automatise le logging, ce chiffre monte naturellement.", target: "> 5/jour", color: "#22C55E" },
                      { metric: "Deals a jour dans le pipeline", desc: "Pourcentage des deals ouverts dont la date de closing et l'etape ont ete mis a jour dans les 7 derniers jours. Objectif : > 80%. Un pipeline avec des deals stagnants est un pipeline mort.", target: "> 80%", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.metric} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.metric}</span>
                          </div>
                          <span className="text-[12px] font-bold" style={{ color: item.color }}>{item.target}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le dashboard d&apos;adoption.</strong> Creez un dashboard visible par toute l&apos;equipe avec ces 4 metriques. Pas pour sanctionner, mais pour rendre le sujet visible. Quand l&apos;adoption est mesuree publiquement, elle augmente naturellement. Le commercial ne veut pas etre celui qui a le score le plus bas.</p>
                    <p><strong className="text-[#111]">Le rituel hebdomadaire.</strong> Pendant le meeting d&apos;equipe du lundi, affichez le dashboard d&apos;adoption pendant 2 minutes. Pas de commentaires longs. Juste les chiffres. Le message est clair sans avoir besoin de le dire.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="quick-wins" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Les quick wins : par ou commencer</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Si vous deviez ne faire que 5 choses cette semaine pour ameliorer l&apos;adoption, ce serait celles-ci. Chacune prend moins de 2 heures a implementer et produit un resultat visible en quelques jours.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { title: "Reduire les champs obligatoires a 7", desc: "Auditez tous les champs obligatoires de vos fiches deal et contact. Gardez-en 7 maximum. Archivez ou rendez optionnels tous les autres. Resultat visible en 24h.", color: "#FF7A59" },
                      { title: "Creer 3 vues personnalisees", desc: "Mes deals a risque (pas d'activite depuis 7j). Mes next steps (taches du jour). Mon pipeline (deals tries par date de closing). Chaque commercial les voit en ouvrant HubSpot.", color: "#4B5EFC" },
                      { title: "Activer le tracking email automatique", desc: "Connectez Gmail/Outlook a HubSpot. Tous les emails sont automatiquement logues. Zero effort pour le commercial. Configuration en 15 minutes.", color: "#22C55E" },
                      { title: "Configurer les rappels Slack", desc: "Un workflow qui envoie un message Slack quand un deal n'a pas eu d'activite depuis 5 jours. Le commercial recoit le rappel la ou il travaille deja.", color: "#6C5CE7" },
                      { title: "Afficher le dashboard d'adoption au weekly", desc: "Creez un rapport simple : taux de completion + activites logguees par commercial. Affichez-le chaque lundi sans commentaire. L'effet est immediat.", color: "#6D00CC" },
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
                    <p className="text-[12px] font-semibold text-white mb-3">Resultats constates chez nos clients</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "30% > 90%", label: "adoption en 4 semaines", color: "#22C55E" },
                        { stat: "+45 min", label: "gagnes par commercial/jour", color: "#4B5EFC" },
                        { stat: "87%", label: "completion des fiches", color: "#FF7A59" },
                        { stat: "< 2 sem", label: "pour les quick wins", color: "#6C5CE7" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on deploie ces quick wins en premiere semaine, avant meme de toucher au pipeline ou au reporting. Parce que sans adoption, rien d&apos;autre ne marche. Le meilleur pipeline du monde est inutile si personne ne le met a jour. Le meilleur dashboard est decoratif si les donnees sont fausses.</p>
                    <p>L&apos;adoption n&apos;est pas un objectif secondaire. C&apos;est le prerequis de tout ce que vous voulez faire avec votre CRM.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Ameliorer l&apos;adoption de votre CRM ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on configure HubSpot pour que vos commerciaux aient envie de l&apos;utiliser. Simplification, automatisation de la saisie, formation par micro-sessions et dashboard d&apos;adoption. Commencez par un appel de 30 minutes.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF7A59] text-white rounded-lg text-[13px] font-medium hover:bg-[#E86A4A] transition-colors">
                  Booster l&apos;adoption CRM
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#FF7A59] transition-colors leading-[1.4]">{a.title}</p>
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
