"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Customer Success et RevOps : aligner retention et revenue",
  description: "Guide complet pour integrer le Customer Success dans votre strategie RevOps. NRR, GRR, health scoring, churn prevention, expansion revenue, handoff sales-CS, QBR automation et implementation HubSpot.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/customer-success-revops" },
  articleSection: "RevOps",
  wordCount: 3500,
  inLanguage: "fr",
};

const sections = [
  { id: "cs-dans-revops", title: "Pourquoi CS dans le RevOps" },
  { id: "metriques-nrr-grr", title: "NRR et GRR" },
  { id: "health-scoring", title: "Health scoring" },
  { id: "churn-warnings", title: "Signaux de churn" },
  { id: "expansion-playbook", title: "Expansion revenue" },
  { id: "handoff-sales-cs", title: "Handoff sales-CS" },
  { id: "hubspot-cs", title: "HubSpot pour le CS" },
  { id: "qbr-automation", title: "Automatiser les QBRs" },
  { id: "structure-equipe", title: "Structure d&apos;equipe" },
  { id: "roi-cs-revops", title: "ROI de l&apos;alignement" },
];

const relatedArticles = [
  { title: "Onboarding client B2B : reduire le churn des les premiers jours", slug: "onboarding-client-b2b-churn", category: "RevOps", color: "#22C55E" },
  { title: "Gerer son MRR et revenu recurrent dans HubSpot", slug: "gerer-mrr-revenu-recurrent-hubspot", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Metriques RevOps : les indicateurs de performance", slug: "metriques-revops-indicateurs-performance", category: "RevOps", color: "#FF7A59" },
];

export default function CustomerSuccessRevOpsPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("cs-dans-revops");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "22%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "60%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Customer%20Success%20et%20RevOps&url=https://ceres.agency/blog/customer-success-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/customer-success-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Customer Success et RevOps</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">15 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Customer Success et RevOps : aligner retention et revenue
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le Customer Success n&apos;est pas un departement support. C&apos;est un levier de revenu strategique. Ce guide explique comment integrer le CS dans votre framework RevOps : metriques NRR et GRR, health scoring, detection precoce du churn, playbooks d&apos;expansion, handoff structure avec les sales, automatisation des QBRs et implementation concrete dans HubSpot. Parce que la meilleure source de revenu, c&apos;est vos clients actuels.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>22 mars 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 -- Pourquoi CS dans le RevOps */}
              <section id="cs-dans-revops" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi le Customer Success est un pilier du RevOps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le RevOps est souvent presente comme l&apos;alignement entre marketing et sales. C&apos;est une vision incomplete. Le RevOps est l&apos;alignement de toute la chaine de revenu, et cette chaine ne s&apos;arrete pas a la signature du contrat. Elle inclut l&apos;onboarding, l&apos;adoption, le renouvellement, l&apos;expansion et l&apos;advocacy. En d&apos;autres termes, elle inclut le Customer Success.</p>
                    <p>Les chiffres sont sans appel. Selon Bain &amp; Company, augmenter la retention client de 5% augmente les profits de 25% a 95%. Le cout d&apos;acquisition d&apos;un nouveau client est 5 a 7 fois superieur au cout de retention d&apos;un client existant. Et un client existant a une probabilite de 60 a 70% d&apos;acheter a nouveau, contre 5 a 20% pour un prospect. Ignorer le CS dans le RevOps, c&apos;est ignorer la source de revenu la plus rentable.</p>
                    <p>Pourtant, dans la majorite des entreprises B2B, le Customer Success est isole. Il n&apos;a pas acces aux memes donnees que les sales. Il n&apos;est pas inclus dans les forecasts. Ses metriques ne sont pas integrees dans les dashboards RevOps. Le handoff entre sales et CS est informel, voire inexistant. Le resultat : des clients qui churnent parce que personne n&apos;a detecte les signaux d&apos;alerte, des opportunites d&apos;expansion manquees parce que le CS n&apos;est pas outille pour les identifier, et un revenu recurrent qui stagne alors qu&apos;il devrait croitre.</p>
                    <p>Integrer le CS dans le RevOps signifie trois choses concretes. Premierement, partager les donnees : le CS a acces aux donnees de vente (promesses faites, contexte du deal, attentes) et les sales ont acces aux donnees CS (satisfaction, usage, risques). Deuxiemement, aligner les processus : le handoff sales-CS est formalise, les QBRs sont structures, les playbooks d&apos;expansion sont definis. Troisiemement, unifier les metriques : NRR, GRR, expansion rate et churn rate sont suivis dans les memes dashboards que le pipeline et le MRR.</p>
                    <p>Le Customer Success est le troisieme pilier du RevOps. Sans lui, vous optimisez l&apos;acquisition tout en negligeant la retention. C&apos;est comme remplir un seau perce : vous pouvez augmenter le debit, mais tant que vous n&apos;avez pas colmate les fuites, la croissance sera inefficiente.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "5-7x", label: "plus cher d&apos;acquerir un nouveau client que d&apos;en retenir un", color: "#22C55E" },
                      { value: "60-70%", label: "probabilite de vente a un client existant vs 5-20% pour un prospect", color: "#4B5EFC" },
                      { value: "25-95%", label: "d&apos;augmentation des profits avec +5% de retention (Bain)", color: "#FF7A59" },
                      { value: "67%", label: "des equipes CS ne sont pas integrees dans le RevOps (Gainsight)", color: "#6C5CE7" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[22px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 -- NRR et GRR */}
              <section id="metriques-nrr-grr" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">NRR et GRR : les deux metriques fondamentales</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Net Revenue Retention (NRR) et le Gross Revenue Retention (GRR) sont les deux metriques incontournables du Customer Success integre au RevOps. Elles mesurent des realites differentes mais complementaires, et toute equipe CS doit les maitriser et les suivre avec rigueur.</p>
                    <p>Le GRR (Gross Revenue Retention) mesure la capacite a conserver le revenu existant, sans prendre en compte l&apos;expansion. Il se calcule ainsi : (MRR debut de periode - churn - downgrade) / MRR debut de periode. Un GRR de 90% signifie que vous perdez 10% de votre revenu existant chaque annee, avant toute expansion. Le GRR est plafonne a 100% : il ne peut pas depasser ce seuil puisqu&apos;il exclut les upgrades. C&apos;est l&apos;indicateur le plus pur de la sante de votre base client.</p>
                    <p>Le NRR (Net Revenue Retention) inclut l&apos;expansion. Il se calcule ainsi : (MRR debut + expansion - churn - downgrade) / MRR debut. Un NRR de 115% signifie que meme sans acquirir un seul nouveau client, votre revenu croit de 15% par an grace a l&apos;expansion de la base existante. Les meilleures entreprises SaaS B2B atteignent des NRR de 120 a 140%. C&apos;est le chiffre qui fait rever les investisseurs et qui prouve que votre produit cree de la valeur croissante.</p>
                    <p>La relation entre GRR et NRR revele votre strategie. Un GRR faible mais un NRR eleve signifie que vous compensez un churn important par de l&apos;expansion agressive sur les clients restants. C&apos;est un modele fragile : si l&apos;expansion ralentit, le revenu chute. Un GRR eleve et un NRR eleve signifie que vous retenez bien et que vous expandez bien. C&apos;est le profil ideal. Un GRR eleve et un NRR moyen signifie que vous retenez bien mais que vous sous-exploitez le potentiel d&apos;expansion. C&apos;est une opportunite enorme.</p>
                    <p>Dans un framework RevOps, ces metriques sont suivies dans le meme dashboard que le pipeline, le MRR new business et le CAC. Le management voit d&apos;un coup d&apos;oeil la sante complete du revenu : acquisition, retention et expansion. Les decisions budgetaires entre marketing, sales et CS sont prises sur des donnees comparables et alignees.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "90%+", label: "GRR cible pour SaaS B2B (benchmark top quartile)", color: "#22C55E" },
                      { value: "115%+", label: "NRR cible (croissance organique sans new business)", color: "#4B5EFC" },
                      { value: "5-7x", label: "cout d&apos;acquisition vs retention d&apos;un client", color: "#FF7A59" },
                      { value: "25-95%", label: "augmentation des profits avec +5% de retention", color: "#6C5CE7" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[22px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 -- Health scoring */}
              <section id="health-scoring" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Construire un modele de health scoring efficace</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le health score est l&apos;equivalent du lead scoring pour les clients existants. Il agrege plusieurs signaux pour produire un indicateur unique de la sante d&apos;un compte. Un bon health score predit le churn avant qu&apos;il ne se manifeste et identifie les opportunites d&apos;expansion avant qu&apos;un concurrent ne les capte.</p>
                    <p>La premiere categorie de signaux est l&apos;usage produit. La frequence de connexion, le nombre de fonctionnalites utilisees, la profondeur d&apos;utilisation (features avancees vs basiques), le nombre d&apos;utilisateurs actifs par rapport aux licences achetees. Un client qui utilise 20% des fonctionnalites et dont seuls 3 utilisateurs sur 10 se connectent regulierement est un client a risque, meme s&apos;il ne se plaint pas.</p>
                    <p>La deuxieme categorie est l&apos;engagement relationnel. La reactivite aux emails du CSM, la participation aux QBRs, la presence du sponsor executif dans les echanges, la frequence des demandes de support (ni trop ni trop peu), l&apos;engagement dans la communaute ou les events. Un client qui ne repond plus aux emails de son CSM depuis 3 semaines envoie un signal clair.</p>
                    <p>La troisieme categorie est le sentiment. Les scores NPS et CSAT, le ton des echanges avec le support, les mentions sur les reseaux sociaux, les feedbacks informels remontes par le CSM. Ces signaux qualitatifs sont souvent les plus predictifs du churn mais aussi les plus difficiles a quantifier et a integrer dans un score automatique.</p>
                    <p>La quatrieme categorie est le contexte business. Le renouvellement arrive dans moins de 90 jours, le sponsor a change de poste, l&apos;entreprise a annonce une restructuration, un concurrent a ete detecte dans l&apos;environnement du client. Ces signaux externes ne sont pas lies a votre produit mais impactent directement le risque de churn.</p>
                    <p>Le modele de scoring doit etre pondere en fonction de ce qui predit reellement le churn dans votre contexte specifique. Commencez simple avec 4-5 signaux, mesurez la correlation avec le churn reel sur 6 mois, puis affinez les poids. Un modele complexe mais imprecis est moins utile qu&apos;un modele simple mais calibre.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { signal: "Usage produit", poids: "30%", exemples: "DAU/MAU, features utilisees, profondeur d&apos;usage, licences actives vs achetees", color: "#22C55E" },
                      { signal: "Engagement relationnel", poids: "25%", exemples: "Reactivite emails, participation QBR, presence sponsor, demandes proactives", color: "#4B5EFC" },
                      { signal: "Sentiment", poids: "25%", exemples: "NPS, CSAT, ton support tickets, feedback CSM, mentions sociales", color: "#6C5CE7" },
                      { signal: "Contexte business", poids: "20%", exemples: "Proximite renouvellement, changement sponsor, restructuration, detection concurrents", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.signal} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.signal}</p>
                          <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.poids}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.exemples}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- Churn early warnings */}
              <section id="churn-warnings" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les signaux d&apos;alerte precoce du churn</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le churn ne survient jamais du jour au lendemain. Il se prepare pendant des semaines, parfois des mois, a travers une serie de signaux que la plupart des equipes detectent trop tard. L&apos;avantage d&apos;integrer le CS dans le RevOps est de centraliser ces signaux dans un systeme unique qui declenche des alertes automatiques.</p>
                    <p>Le signal le plus fiable est la baisse d&apos;usage. Quand un client qui se connectait quotidiennement passe a une connexion hebdomadaire, puis mensuelle, le churn est quasi certain si rien n&apos;est fait. La difficulte est de distinguer une variation normale (vacances, fin de trimestre) d&apos;une tendance de fond. La regle empirique : une baisse de 30% de l&apos;usage sur 4 semaines consecutives doit declencher une alerte rouge.</p>
                    <p>Le deuxieme signal est le silence. Un client qui arrete de repondre aux emails, qui decline les QBRs, qui ne participe plus aux webinaires est un client en phase de desengagement. Le silence est souvent pire que la plainte : un client qui se plaint est un client qui veut que ca fonctionne. Un client silencieux est un client qui a deja pris sa decision ou qui explore des alternatives.</p>
                    <p>Le troisieme signal est le changement de sponsor. Quand le champion interne qui a porte l&apos;achat de votre solution quitte l&apos;entreprise ou change de poste, le risque de churn augmente drastiquement. Le nouveau responsable n&apos;a aucun attachement emotionnel a votre outil et peut legitimement questionner tous les budgets existants. La detection precoce de ces changements (via LinkedIn, via les bounces email, via le support) est cruciale.</p>
                    <p>Le quatrieme signal est l&apos;augmentation des tickets support critiques. Un client qui escalade regulierement, dont les tickets passent de &ldquo;question&rdquo; a &ldquo;probleme urgent&rdquo;, est un client qui perd patience. Si en plus les delais de resolution s&apos;allongent, le churn devient une question de temps. Le suivi de la severite et du volume des tickets par compte est un indicateur avance essentiel.</p>
                    <p>Cinquiemement, surveillez les signaux commerciaux. Un client qui demande un export complet de ses donnees, qui pose des questions sur les conditions de resiliation, ou dont un commercial concurrent est detecte dans l&apos;organigramme, envoie des signaux tres clairs. Ces informations doivent remonter immediatement au CSM via des alertes automatisees.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "Baisse d&apos;usage de 30% sur 4 semaines : declenchement automatique d&apos;un playbook de reengagement",
                      "Pas de reponse CSM depuis 3 semaines : escalade au manager CS avec appel du sponsor",
                      "Changement de sponsor detecte : playbook de re-onboarding du nouveau decideur sous 48h",
                      "Tickets P1/P2 en hausse de 50% : alerte CSM + revue conjointe avec le support",
                      "Demande d&apos;export de donnees : alerte immediate au VP CS + call de retention sous 24h",
                      "Renouvellement dans 90 jours sans QBR planifiee : blocage workflow + notification manager",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[12px] text-[#555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Expansion playbook */}
              <section id="expansion-playbook" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le playbook d&apos;expansion revenue</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;expansion revenue est la raison pour laquelle les investisseurs s&apos;interessent autant au NRR. Un NRR de 120% signifie que votre base client genere 20% de revenu supplementaire chaque annee sans aucune acquisition. C&apos;est de la croissance pure, avec des marges superieures et un cout quasi nul compare a l&apos;acquisition de nouveaux clients.</p>
                    <p>L&apos;expansion prend trois formes. L&apos;upsell consiste a faire monter le client en gamme : du plan Pro au plan Enterprise, par exemple. Le cross-sell consiste a vendre des modules ou produits complementaires : le client utilise votre CRM et vous lui proposez le module marketing automation. Le seat expansion consiste a augmenter le nombre de licences au sein du meme compte : de 10 a 25 utilisateurs.</p>
                    <p>Le CSM est au coeur de l&apos;expansion, mais il ne doit pas devenir un commercial. Son role est d&apos;identifier les opportunites d&apos;expansion a travers l&apos;usage et les conversations, de qualifier le besoin, et de passer le relais a un Account Manager ou un commercial pour la partie negociation et closing. Cette separation des roles est essentielle pour preserver la relation de confiance entre le CSM et le client.</p>
                    <p>Les signaux d&apos;expansion a detecter sont symetriques aux signaux de churn. Un client dont l&apos;usage approche des limites de son plan est candidat a l&apos;upsell. Un client qui pose des questions sur des fonctionnalites d&apos;un plan superieur manifeste un interet. Un client qui recrute massivement dans une equipe qui utilise votre outil est candidat au seat expansion. Un client qui deploie un processus complementaire a votre solution est candidat au cross-sell.</p>
                    <p>Le timing est crucial. La meilleure fenetre pour une conversation d&apos;expansion est apres un QBR reussi ou la valeur delivree a ete clairement demontree. La pire fenetre est pendant une periode de bugs ou de mecontentement. Le playbook doit definir des triggers clairs, des templates de communication, et un processus de handoff CSM-Account Manager transparent pour le client.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { type: "Upsell", trigger: "Usage a 80% des limites du plan", action: "QBR de valeur + presentation plan superieur", color: "#22C55E" },
                      { type: "Cross-sell", trigger: "Nouveau processus deploye chez le client", action: "Discovery meeting + demo module complementaire", color: "#4B5EFC" },
                      { type: "Seat expansion", trigger: "Recrutement massif dans l&apos;equipe cible", action: "Proposition volume avec incentive temporaire", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.type} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.type}</p>
                        <p className="text-[10px] text-[#999] mb-2">Trigger : {item.trigger}</p>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: item.color }} />
                          <p className="text-[11px] text-[#777] leading-[1.5]">{item.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Handoff sales-CS */}
              <section id="handoff-sales-cs" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Structurer le handoff sales-to-CS</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le handoff entre les sales et le Customer Success est l&apos;un des moments les plus critiques du parcours client, et pourtant l&apos;un des plus negliges. Un handoff mal execute detruit la confiance construite pendant le cycle de vente, force le client a repeter ses besoins, et cree un sentiment de desorganisation qui teinte toute la relation a venir.</p>
                    <p>Le handoff doit commencer avant la signature. Des que le deal passe en phase de negociation avancee, le CSM assigne doit etre identifie et informe. Il lit les notes du CRM, ecoute les enregistrements des appels cles dans Gong, et participe si possible au dernier appel de closing. L&apos;objectif est que le client rencontre son CSM avant de signer, pas apres. Ce geste simple transforme la perception du client : il comprend qu&apos;il ne sera pas &ldquo;abandonne&rdquo; apres l&apos;achat.</p>
                    <p>Le document de handoff doit etre standardise et obligatoire. Il contient les informations essentielles que le CSM doit connaitre : contexte de l&apos;achat, probleme principal a resoudre, promesses faites pendant le cycle de vente, parties prenantes cles et leurs roles, criteres de succes definis par le client, delais attendus, integrations prevues, risques identifies. Le commercial ne peut pas cloturer le deal dans le CRM sans avoir rempli ce document.</p>
                    <p>L&apos;appel de kick-off est le premier touchpoint formel du CS. Il reunit le commercial, le CSM et les parties prenantes cles du client. Le commercial introduit le CSM, recapitule les objectifs, et passe officiellement le relais. Le CSM presente le plan d&apos;onboarding, les etapes cles, les premiers livrables et le calendrier. Le client repart avec une vision claire de ce qui va se passer dans les 30, 60 et 90 prochains jours.</p>
                    <p>Apres le kick-off, le commercial se retire progressivement. Il reste disponible pendant les 2 premieres semaines si le client a des questions, mais le CSM devient le point de contact principal. Le commercial ne disparait pas completement : il revient dans le cadre des QBRs ou des conversations d&apos;expansion. Mais la relation quotidienne est celle du CSM.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E8E8E8]">
                      <span className="text-[12px] font-semibold text-[#111]">Checklist handoff sales-to-CS</span>
                    </div>
                    <div className="p-4 space-y-2">
                      {[
                        "Contexte de l&apos;achat et probleme principal a resoudre",
                        "Promesses faites pendant le cycle de vente (deliverables, timelines, SLAs)",
                        "Parties prenantes cles : sponsor executif, champion, utilisateurs finaux",
                        "Criteres de succes definis par le client avec metriques mesurables",
                        "Integrations prevues et contraintes techniques identifiees",
                        "Risques identifies pendant le cycle de vente et mitigations prevues",
                        "Budget et timeline d&apos;onboarding valides avec le client",
                        "Enregistrements des appels cles a ecouter par le CSM (Gong/HubSpot)",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-[11px] text-[#555]">
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- HubSpot pour CS -- DARK SECTION */}
              <section id="hubspot-cs" className="mb-8">
                <div className="rounded-2xl bg-[#111] text-white p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Implementer le Customer Success dans HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-white/70 leading-[1.75]">
                    <p>HubSpot a considerablement renforce ses capacites CS avec le Service Hub et les nouvelles fonctionnalites de Customer Success Workspace lancees en 2025. Pour les equipes qui utilisent deja HubSpot comme CRM de vente, l&apos;ajout du CS dans le meme outil est un avantage enorme en termes de continuite des donnees et d&apos;alignement.</p>
                    <p>Le Customer Success Workspace est un tableau de bord dedie aux CSMs qui centralise toute l&apos;information necessaire : health score par compte, taches prioritaires, renouvellements a venir, alertes d&apos;usage, historique des interactions. Le CSM voit en un coup d&apos;oeil quels comptes necessitent une attention immediate et quels comptes sont sains.</p>
                    <p>Les custom objects permettent de modeliser les abonnements, les contrats et les renouvellements directement dans HubSpot. Chaque contrat est lie a une entreprise, avec ses dates de debut et fin, son MRR, ses conditions de renouvellement. Les workflows automatisent les rappels de renouvellement : 120 jours avant, 90 jours avant, 60 jours avant, avec des taches assignees au CSM et des emails automatiques au client.</p>
                    <p>Le health score peut etre implemente via des proprietes calculees et des workflows. Les signaux d&apos;usage sont remontes via l&apos;API ou des integrations (Segment, Amplitude, Mixpanel). Les signaux relationnels sont captures nativement (emails, meetings, calls, tickets). Le score agrege est affiche sur la fiche entreprise et declenche des alertes quand il passe sous un seuil critique.</p>
                    <p>Les playbooks CS sont configures pour guider les CSMs dans leurs interactions : playbook de kick-off, playbook de QBR, playbook de reengagement, playbook de renouvellement. Chaque playbook contient les questions a poser, les informations a collecter et les actions a prendre. Les reponses sont enregistrees dans le CRM pour historisation et analyse.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "1 vue", label: "Customer Success Workspace centralisant tous les comptes", color: "#22C55E" },
                      { value: "Auto", label: "Renouvellements trackes et rappels automatises", color: "#4B5EFC" },
                      { value: "Score", label: "Health score calcule et affiche sur chaque fiche", color: "#6C5CE7" },
                      { value: "0 silo", label: "Donnees sales et CS dans le meme CRM", color: "#FF7A59" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- QBR automation */}
              <section id="qbr-automation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Automatiser et structurer les QBRs</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La Quarterly Business Review est le rendez-vous strategique entre votre equipe et le client. C&apos;est le moment ou vous demontrez la valeur delivree, alignez les objectifs pour le trimestre suivant, et identifiez les opportunites d&apos;expansion. Pourtant, dans la majorite des entreprises, les QBRs sont mal preparees, trop longues, centrees sur le produit plutot que sur les resultats, et sans suivi structure.</p>
                    <p>L&apos;automatisation des QBRs commence par la preparation. Un workflow HubSpot declenche 3 semaines avant la date du QBR genere automatiquement un draft de presentation avec les metriques cles du compte : usage, tickets, adoption des nouvelles fonctionnalites, atteinte des objectifs definis au QBR precedent. Le CSM n&apos;a plus qu&apos;a personnaliser et completer au lieu de partir de zero.</p>
                    <p>La structure du QBR doit etre standardisee. Les 10 premieres minutes sont consacrees au bilan : resultats obtenus vs objectifs fixes, metriques d&apos;usage, retour sur les initiatives du trimestre. Les 15 minutes suivantes portent sur les challenges et les opportunites : quels obstacles rencontres, quels nouveaux besoins, quels changements dans l&apos;organisation du client. Les 10 dernieres minutes definissent le plan du prochain trimestre : objectifs, actions, responsables, deadlines.</p>
                    <p>Apres le QBR, un workflow automatise genere le compte-rendu, assigne les actions aux parties prenantes, et planifie les suivis intermediaires. Le CSM recoit un rappel a mi-trimestre pour verifier l&apos;avancement des actions definies. Le client recoit un recapitulatif par email avec les engagements pris de part et d&apos;autre.</p>
                    <p>La frequence des QBRs depend de la taille du compte. Les comptes Enterprise meritent un QBR trimestriel. Les comptes mid-market un QBR semestriel. Les comptes SMB un bilan annuel ou un QBR automatise (report envoye par email avec une option de call si le client le souhaite). Cette segmentation permet de scaler le CS sans multiplier les ressources.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E8E8E8]">
                      <span className="text-[12px] font-semibold text-[#111]">Structure type d&apos;un QBR -- 35 minutes</span>
                    </div>
                    <div className="p-4 space-y-3">
                      {[
                        { phase: "0-10 min", label: "Bilan du trimestre", items: "Resultats vs objectifs, metriques d&apos;usage, adoption fonctionnalites, ROI delivre", color: "#22C55E" },
                        { phase: "10-25 min", label: "Challenges et opportunites", items: "Obstacles rencontres, nouveaux besoins, changements organisation, roadmap produit", color: "#4B5EFC" },
                        { phase: "25-35 min", label: "Plan du prochain trimestre", items: "Objectifs, actions, responsables, deadlines, prochaines etapes expansion", color: "#6C5CE7" },
                      ].map((item) => (
                        <div key={item.phase} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: item.color }} />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">{item.phase} -- {item.label}</p>
                            <p className="text-[10px] text-[#777] mt-0.5">{item.items}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 -- Structure equipe */}
              <section id="structure-equipe" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Structurer l&apos;equipe CS dans le RevOps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La structure d&apos;equipe CS doit s&apos;integrer dans l&apos;organisation RevOps globale. Le premier debat est le rattachement hierarchique. Traditionnellement, le CS rapporte au VP Sales ou au COO. Dans un modele RevOps mature, le CS rapporte au CRO (Chief Revenue Officer) au meme titre que le marketing et les sales. Ce rattachement symbolise l&apos;egalite de traitement entre acquisition et retention dans la strategie de revenu.</p>
                    <p>Le ratio CSM/comptes depend du segment. Pour l&apos;Enterprise (ACV de 100 000 euros et plus), un CSM gere 10 a 20 comptes avec un accompagnement personnalise et proactif. Pour le mid-market (ACV de 10 000 a 100 000 euros), un CSM gere 30 a 50 comptes avec un mix de proactif et de tech-touch. Pour le SMB (ACV inferieur a 10 000 euros), le modele est essentiellement tech-touch avec un CSM qui supervise 200 comptes ou plus via l&apos;automatisation.</p>
                    <p>Les roles cles dans une equipe CS mature sont : le CSM (relation client, adoption, retention), l&apos;Implementation Manager (onboarding technique, deploiement), le Renewal Manager (negociation des renouvellements), et le CS Ops (outils, processus, reporting). Le CS Ops est le pendant du Sales Ops et du Marketing Ops dans le framework RevOps. Il est responsable de la qualite des donnees CS, de l&apos;automatisation des workflows, du health scoring et du reporting.</p>
                    <p>L&apos;Account Manager est un role distinct du CSM dans les equipes matures. Le CSM se concentre sur l&apos;adoption et la satisfaction. L&apos;Account Manager se concentre sur l&apos;expansion et le renouvellement commercial. Cette separation evite le conflit d&apos;interet inherent a un CSM qui doit a la fois etre le &ldquo;trusted advisor&rdquo; du client et lui vendre des modules supplementaires.</p>
                    <p>Enfin, le CS doit avoir une voix dans les rituels RevOps. Le CSM participe aux forecasts pour les renouvellements et l&apos;expansion. Le VP CS participe au comite RevOps mensuel. Les metriques CS sont integrees dans les dashboards partages. Sans cette inclusion, le CS reste un silo, meme s&apos;il rapporte au CRO.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { role: "CSM", focus: "Adoption et retention", ratio: "10-50 comptes selon segment", competences: "Relationnel, produit, analytics, communication executif", color: "#22C55E" },
                      { role: "Implementation Manager", focus: "Onboarding technique", ratio: "5-10 projets simultanes", competences: "Technique, gestion de projet, integration, formation", color: "#4B5EFC" },
                      { role: "Renewal Manager", focus: "Negociation renouvellements", ratio: "50-100 contrats", competences: "Negociation, commercial, analyse de risque, pricing", color: "#6C5CE7" },
                      { role: "CS Ops", focus: "Infrastructure et donnees", ratio: "Support de toute l&apos;equipe", competences: "CRM, data, automatisation, reporting, processus", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.role} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.role}</p>
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.focus}</span>
                        </div>
                        <p className="text-[10px] text-[#999] mb-1">Ratio : {item.ratio}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.competences}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 -- ROI de l'alignement */}
              <section id="roi-cs-revops" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le ROI de l&apos;alignement CS-RevOps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Mesurer le ROI de l&apos;integration CS dans le RevOps necessite de comparer les metriques avant et apres l&apos;alignement. Les entreprises qui ont fait cette transition rapportent des resultats significatifs sur trois axes : retention, expansion et efficience operationnelle.</p>
                    <p>Sur la retention, l&apos;impact est direct. L&apos;implementation d&apos;un health scoring predictif associe a des playbooks automatises reduit le churn de 15 a 25% en moyenne. Sur un ARR de 5 millions d&apos;euros avec un churn annuel de 15%, une reduction de 20% represente 150 000 euros de revenu preserve chaque annee. Et ce revenu est recurrent : il se compose annee apres annee.</p>
                    <p>Sur l&apos;expansion, le NRR augmente de 5 a 15 points en moyenne apres l&apos;integration CS-RevOps. La detection systematique des signaux d&apos;expansion, les playbooks structures et le handoff CSM-Account Manager fluide transforment des opportunites latentes en revenu reel. Sur une base de 5 millions d&apos;euros d&apos;ARR, 10 points de NRR supplementaires representent 500 000 euros de revenu additionnel par an.</p>
                    <p>Sur l&apos;efficience, la centralisation des donnees et l&apos;automatisation des processus reduisent le temps administratif des CSMs de 20 a 30%. Ce temps est reinvesti dans des activites a forte valeur : coaching client, detection d&apos;expansion, QBRs strategiques. L&apos;impact indirect sur la satisfaction client et la retention est considerable.</p>
                    <p>Le cout de la mise en place est relativement modeste : configuration du CRM (health scoring, workflows, dashboards), formation des equipes, definition des processus. Pour une equipe de 5 CSMs, comptez 2 a 3 mois de projet et un investissement de 30 000 a 50 000 euros tout compris. Avec les gains decrits ci-dessus, le breakeven est atteint en moins de 6 mois.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E8E8E8]">
                      <span className="text-[12px] font-semibold text-[#111]">Impact type -- Base ARR 5M EUR</span>
                    </div>
                    <div className="p-4 space-y-3">
                      {[
                        { ligne: "Churn reduit de 20%", calcul: "5M x 15% churn x 20% reduction", valeur: "+150 000 EUR/an", color: "#22C55E" },
                        { ligne: "NRR +10 points", calcul: "5M x 10%", valeur: "+500 000 EUR/an", color: "#4B5EFC" },
                        { ligne: "Efficience CSM +25%", calcul: "5 CSMs x 25% temps recupere", valeur: "1.25 ETP economise", color: "#6C5CE7" },
                      ].map((item) => (
                        <div key={item.ligne} className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                            <div>
                              <p className="text-[11px] font-semibold text-[#111]">{item.ligne}</p>
                              <p className="text-[10px] text-[#999]">{item.calcul}</p>
                            </div>
                          </div>
                          <span className="text-[12px] font-semibold" style={{ color: item.color }}>{item.valeur}</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between p-3 rounded-lg bg-[#111] text-white">
                        <span className="text-[11px] font-semibold">Impact revenu total estime</span>
                        <span className="text-[14px] font-bold text-[#22C55E]">+650 000 EUR/an</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related articles */}
              <section className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[14px] font-semibold text-[#111] mb-4">Articles lies</h2>
                  <div className="space-y-2">
                    {relatedArticles.map((a) => (
                      <Link key={a.slug} href={`/blog/${a.slug}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAFA] transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: a.color }} />
                          <span className="text-[13px] font-medium text-[#111] group-hover:text-[#444] transition-colors">{a.title}</span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-[#DDD] group-hover:text-[#999] group-hover:translate-x-0.5 transition-all"><path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section>
                <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a integrer le CS dans votre strategie RevOps ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On vous accompagne : health scoring, workflows de retention, playbooks d&apos;expansion, QBRs automatisees et dashboards unifies. Premiers resultats sur la retention en 90 jours.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel decouverte
                  </a>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
