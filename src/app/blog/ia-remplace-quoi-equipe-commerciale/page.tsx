"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "L'IA remplace quoi dans une equipe commerciale ? La reponse honnete",
  description: "Analyse honnete de ce que l'IA remplace, assiste ou ne touchera jamais dans une equipe commerciale B2B. Matrice complete par niveau d'automatisation, avec methode d'audit pour votre propre equipe.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-remplace-quoi-equipe-commerciale" },
  articleSection: "IA & Automatisation",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "question-tout-le-monde", title: "La question universelle" },
  { id: "matrice-remplacable", title: "La matrice" },
  { id: "ia-remplace-100", title: "Remplace a 100%" },
  { id: "ia-fait-partiellement", title: "Fait partiellement" },
  { id: "ia-assiste", title: "Assiste" },
  { id: "ia-ne-remplacera-jamais", title: "Ne remplacera jamais" },
  { id: "vrai-impact", title: "Le vrai impact" },
  { id: "auditer-equipe", title: "Auditer votre equipe" },
];

const relatedArticles = [
  { title: "L'IA dans le processus commercial : ou, quand, comment", slug: "ia-processus-commercial-vente-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Agents IA deployes chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Claude Code pour les equipes non techniques", slug: "claude-code-equipes-non-techniques", category: "IA & Automatisation", color: "#D4A27F" },
];

export default function IARemplaceQuoiEquipeCommercialePage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("question-tout-le-monde");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "18%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "32%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "48%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "64%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "80%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=L%27IA%20remplace%20quoi%20dans%20une%20%C3%A9quipe%20commerciale%20%3F&url=https://ceres.agency/blog/ia-remplace-quoi-equipe-commerciale" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/ia-remplace-quoi-equipe-commerciale" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">IA et equipe commerciale</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">15 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                L&apos;IA remplace quoi dans une equipe commerciale ? La reponse honnete
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Est-ce que l&apos;IA va remplacer votre equipe commerciale ? Non. Mais elle va transformer radicalement ce que chaque personne fait au quotidien. Voici une analyse honnete, tache par tache, de ce que l&apos;IA remplace, assiste ou ne touchera jamais. Avec une methode concrete pour auditer votre propre equipe.
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
              {/* Section 1 -- La question que tout le monde se pose */}
              <section id="question-tout-le-monde" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La question que tout le monde se pose</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On l&apos;entend dans chaque comite de direction, chaque reunion commerciale, chaque conversation LinkedIn. &laquo; Est-ce que l&apos;IA va remplacer mon equipe ? &raquo; La question est legitime. Les outils se multiplient, les demos sont impressionnantes, et les promesses des editeurs fraient l&apos;imagination. Un agent IA qui prospecte. Un autre qui qualifie. Un troisieme qui redige les propositions commerciales. On finit par se demander s&apos;il restera quelqu&apos;un dans l&apos;open space.</p>
                    <p>La reponse honnete : non, l&apos;IA ne va pas remplacer votre equipe commerciale. Mais elle va changer radicalement ce que chaque personne fait au quotidien. Les taches qui occupaient 60% du temps d&apos;un commercial en 2024 vont progressivement disparaitre. Pas les personnes. Les taches. La difference est fondamentale.</p>
                    <p>Le probleme du debat actuel, c&apos;est qu&apos;il est binaire. D&apos;un cote, les evangelistes qui predisent la disparition du metier commercial. De l&apos;autre, les sceptiques qui affirment que rien ne changera. La realite est entre les deux, et elle est beaucoup plus nuancee. Certaines taches seront effectivement automatisees a 100%. D&apos;autres seront assistees. D&apos;autres encore resteront profondement humaines, peut-etre meme plus valorisees qu&apos;avant.</p>
                    <p>Ce que cet article propose, c&apos;est une grille de lecture concrete. Pas de la prospective a 10 ans. Pas des predictions futuristes. Une analyse tache par tache, basee sur ce qu&apos;on observe aujourd&apos;hui chez nos clients B2B, de ce que l&apos;IA remplace, de ce qu&apos;elle assiste, et de ce qu&apos;elle ne touchera pas. Pour que vous puissiez prendre des decisions eclairees sur votre propre equipe.</p>
                  </div>

                  {/* Stat cards */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "62%", label: "du temps commercial passe sur des taches automatisables", color: "#FF7A59" },
                      { value: "x3", label: "de productivite par commercial avec l'IA", color: "#6D00CC" },
                      { value: "0%", label: "de postes supprimes chez nos clients", color: "#22C55E" },
                      { value: "100%", label: "des equipes reconfigurees", color: "#4B5EFC" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] text-center">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 -- La matrice : remplacable, assistable, protege */}
              <section id="matrice-remplacable" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La matrice : remplacable, assistable, protege</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pour sortir du debat sterile &laquo; l&apos;IA remplace tout vs l&apos;IA ne change rien &raquo;, on a construit une matrice a 4 niveaux. Chaque tache d&apos;une equipe commerciale typique peut etre classee dans l&apos;une de ces categories. Le classement n&apos;est pas theorique, il est base sur ce qu&apos;on deploie chez nos clients depuis 18 mois.</p>
                    <p>Le premier niveau, c&apos;est &laquo; 100% remplacable &raquo;. Des taches repetitives, a faible valeur ajoutee, qui ne necessitent aucun jugement humain. L&apos;IA les fait mieux, plus vite, et sans erreur. Le deuxieme niveau, c&apos;est &laquo; partiellement remplacable &raquo;. L&apos;IA fait le gros du travail, mais un humain intervient pour valider, ajuster, personnaliser. Le troisieme niveau, c&apos;est &laquo; assiste par l&apos;IA &raquo;. L&apos;humain reste aux commandes, mais l&apos;IA lui fournit du contexte, des donnees, des suggestions qui le rendent meilleur. Le quatrieme niveau, c&apos;est &laquo; non remplacable &raquo;. Des taches fondamentalement humaines ou l&apos;IA n&apos;a aucune legitimite.</p>
                    <p>L&apos;erreur serait de penser que les niveaux 1 et 2 sont &laquo; bas de gamme &raquo; et les niveaux 3 et 4 sont &laquo; haut de gamme &raquo;. Ce n&apos;est pas une question de prestige, c&apos;est une question de nature. Un enrichissement de fiche CRM n&apos;a pas besoin d&apos;empathie. Une negociation complexe n&apos;a pas besoin de copier-coller. La cle, c&apos;est de mettre la bonne ressource sur la bonne tache.</p>
                  </div>

                  {/* Matrice visuelle */}
                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#111] px-5 py-3">
                      <span className="text-[12px] font-semibold text-white">Matrice d&apos;automatisation -- Equipe commerciale B2B</span>
                    </div>
                    <div className="bg-white p-5">
                      <div className="space-y-3">
                        {[
                          { level: "Niveau 1", label: "100% remplacable", color: "#FF7A59", width: "100%", tasks: "Data entry, enrichissement, scheduling, relances standards, reporting" },
                          { level: "Niveau 2", label: "Partiellement remplacable", color: "#6D00CC", width: "75%", tasks: "Emails prospection, scoring, preparation calls, qualification initiale" },
                          { level: "Niveau 3", label: "Assiste par l'IA", color: "#4B5EFC", width: "45%", tasks: "Discovery, propositions, negociation, analyse de comptes" },
                          { level: "Niveau 4", label: "Non remplacable", color: "#22C55E", width: "0%", tasks: "Confiance, relation, jugement, empathie, lecture politique" },
                        ].map((row) => (
                          <div key={row.level} className="p-4 rounded-lg border border-[#F0F0F0]">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: row.color }} />
                              <span className="text-[11px] font-semibold" style={{ color: row.color }}>{row.level} -- {row.label}</span>
                            </div>
                            <div className="h-2 bg-[#F5F5F5] rounded-full overflow-hidden mb-2">
                              <div className="h-full rounded-full" style={{ width: row.width, backgroundColor: row.color, opacity: 0.6 }} />
                            </div>
                            <p className="text-[10px] text-[#999] leading-[1.5]">{row.tasks}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 -- Ce que l'IA remplace a 100% */}
              <section id="ia-remplace-100" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[12px] font-bold">01</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Ce que l&apos;IA remplace a 100%</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Commencons par ce qui ne devrait plus etre fait par un humain en 2026. Ces taches partagent trois caracteristiques : elles sont repetitives, elles n&apos;exigent aucun jugement, et elles consomment un temps disproportionne par rapport a la valeur qu&apos;elles produisent. Un commercial senior qui passe 45 minutes a enrichir des fiches dans le CRM, c&apos;est un gaspillage de competences. Point.</p>
                    <p>L&apos;enrichissement de fiches contacts et entreprises est le cas d&apos;ecole. Aller chercher le chiffre d&apos;affaires, le nombre d&apos;employes, le secteur, les technologies utilisees, les derniers recrutements, les levees de fonds. Un agent IA connecte a des bases comme Apollo, Clay ou Societeinfo fait ca en quelques secondes, sur des centaines de fiches en parallele, avec un taux de fiabilite superieur a celui d&apos;un humain presse.</p>
                    <p>Le scheduling est un autre exemple flagrant. Coordonner les agendas entre un commercial et un prospect, gerer les reports, envoyer les confirmations et les rappels. C&apos;est du temps mort. Des outils comme Calendly resolvent une partie du probleme, mais un agent IA va plus loin : il gere les contextes complexes, les fuseaux horaires multiples, les preferences implicites.</p>
                    <p>Les relances standards, celles qui suivent un schema previsible (&laquo; Je reviens vers vous suite a notre echange &raquo;, &laquo; Avez-vous eu le temps de consulter notre proposition ? &raquo;), sont entierement automatisables. De meme pour le data entry CRM : logger les appels, mettre a jour les etapes du pipeline, enregistrer les notes de reunion. L&apos;IA ecoute, transcrit, et remplit le CRM automatiquement.</p>
                    <p>Le reporting operationnel entre aussi dans cette categorie. Generer un rapport hebdomadaire sur le pipeline, calculer les taux de conversion par etape, comparer les performances par commercial. Ce sont des calculs, pas des analyses. L&apos;IA les produit en temps reel, sans qu&apos;un humain ait besoin d&apos;ouvrir un tableur.</p>
                  </div>

                  {/* Tasks cards */}
                  <div className="mt-6 space-y-3">
                    {[
                      { task: "Enrichissement de fiches CRM", time: "3-4h/semaine", saving: "100%", desc: "Recherche manuelle de donnees entreprise et contact. Agents IA connectes aux bases de donnees font le travail en secondes.", color: "#FF7A59" },
                      { task: "Scheduling et coordination d'agendas", time: "2-3h/semaine", saving: "100%", desc: "Propositions de creneaux, gestion des reports, confirmations et rappels. Entierement delegable a un agent.", color: "#FF7A59" },
                      { task: "Relances standards et follow-ups", time: "3-5h/semaine", saving: "100%", desc: "Emails de suivi a schema previsible. Sequences automatisees avec personnalisation basique par l'IA.", color: "#FF7A59" },
                      { task: "Data entry et mise a jour CRM", time: "4-6h/semaine", saving: "100%", desc: "Log des appels, mise a jour des etapes, notes de reunion. L'IA transcrit et remplit automatiquement.", color: "#FF7A59" },
                      { task: "Reporting operationnel", time: "2-3h/semaine", saving: "100%", desc: "Pipeline, conversion par etape, performance par commercial. Calculs en temps reel, zero tableur.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.task} className="p-4 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA]">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-[12px] font-semibold text-[#111]">{item.task}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] text-[#BBB]">Avant :</span>
                            <span className="text-[10px] font-medium text-[#999]">{item.time}</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-[#777] leading-[1.6] mb-3">{item.desc}</p>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#E8E8E8]">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-[11px] font-medium" style={{ color: item.color }}>Gain de temps : {item.saving}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="mt-5 p-4 rounded-xl bg-[#FFF7ED] border border-[#FED7AA]">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-[#111]">Total temps recupere par commercial</span>
                      <span className="text-[16px] font-bold text-[#FF7A59]">15-20h/semaine</span>
                    </div>
                    <p className="text-[10px] text-[#999] mt-1">Soit 40 a 50% du temps de travail hebdomadaire reinvesti dans des taches a haute valeur ajoutee.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- Ce que l'IA fait partiellement */}
              <section id="ia-fait-partiellement" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[12px] font-bold">02</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Ce que l&apos;IA fait partiellement</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le deuxieme niveau de la matrice est le plus interessant, et le plus mal compris. Ce sont les taches ou l&apos;IA fait 70 a 80% du travail, mais ou l&apos;humain reste indispensable pour les 20 a 30% restants. Le schema est toujours le meme : l&apos;IA produit, l&apos;humain valide et ajuste. C&apos;est la que la productivite explose vraiment, parce qu&apos;on ne part plus de zero.</p>
                    <p>Les emails de prospection sont l&apos;exemple le plus parlant. Un agent IA connecte a votre CRM et a des donnees d&apos;enrichissement peut rediger un email de prospection personnalise en quelques secondes. Il connait le secteur du prospect, ses enjeux recents, ses technologies, sa taille. Il produit un premier jet qui est meilleur que ce que 80% des SDR ecrivent manuellement. Mais il manque la touche finale : le ton juste par rapport au contexte specifique, la reference a une conversation precedente, l&apos;intuition que tel argument va resonner plus qu&apos;un autre. Le commercial relit, ajuste 2-3 phrases, et envoie. 5 minutes au lieu de 25.</p>
                    <p>Le scoring est un autre cas typique. L&apos;IA analyse des dizaines de signaux, comportementaux et firmographiques, pour attribuer un score a chaque lead. Elle detecte des patterns invisibles a l&apos;oeil humain. Mais le commercial apporte le contexte que l&apos;IA ne possede pas : il sait que tel secteur est en difficulte cette annee, que tel type de decideur n&apos;achete jamais en Q1, que tel signal qui semble positif est en realite un faux ami. L&apos;IA calcule, l&apos;humain priorise.</p>
                    <p>La preparation de calls suit le meme schema. L&apos;IA rassemble en quelques secondes toutes les informations sur le prospect : historique des interactions, donnees financieres, actualites recentes, presence sur les reseaux, technologies utilisees, concurrents directs. Elle genere un brief structure avec les points cles et les angles d&apos;attaque possibles. Le commercial parcourt le brief en 3 minutes, selectionne les angles pertinents pour ce prospect specifique, et entre en call prepare comme s&apos;il avait passe une heure de recherche. Le temps de preparation passe de 30-45 minutes a 5 minutes, sans perte de qualite.</p>
                  </div>

                  {/* Workflow cards */}
                  <div className="mt-6 space-y-4">
                    {[
                      {
                        title: "Emails de prospection",
                        ia: "Redige un email personnalise a partir des donnees prospect",
                        humain: "Valide le ton, ajuste les arguments, ajoute le contexte personnel",
                        ratio: "80% IA / 20% humain",
                        time: "5 min vs 25 min",
                        color: "#6D00CC",
                      },
                      {
                        title: "Scoring et priorisation des leads",
                        ia: "Analyse les signaux, calcule le score, classe les leads",
                        humain: "Ajoute le contexte marche, ajuste les priorites, decide de l'action",
                        ratio: "70% IA / 30% humain",
                        time: "Temps reel vs 2h/semaine",
                        color: "#6D00CC",
                      },
                      {
                        title: "Preparation de calls",
                        ia: "Rassemble les donnees, genere un brief structure, suggere les angles",
                        humain: "Selectionne les angles pertinents, adapte au contexte de la relation",
                        ratio: "75% IA / 25% humain",
                        time: "5 min vs 30-45 min",
                        color: "#6D00CC",
                      },
                    ].map((wf) => (
                      <div key={wf.title} className="p-5 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA]">
                        <h3 className="text-[13px] font-semibold text-[#111] mb-3">{wf.title}</h3>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="p-3 rounded-lg bg-white border border-[#F0F0F0]">
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#6D00CC]" />
                              <span className="text-[9px] font-semibold text-[#6D00CC] uppercase tracking-wider">IA fait</span>
                            </div>
                            <p className="text-[10px] text-[#666] leading-[1.5]">{wf.ia}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white border border-[#F0F0F0]">
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#4B5EFC]" />
                              <span className="text-[9px] font-semibold text-[#4B5EFC] uppercase tracking-wider">Humain fait</span>
                            </div>
                            <p className="text-[10px] text-[#666] leading-[1.5]">{wf.humain}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] text-[#BBB]">Ratio :</span>
                            <span className="text-[10px] font-semibold" style={{ color: wf.color }}>{wf.ratio}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] text-[#BBB]">Temps :</span>
                            <span className="text-[10px] font-semibold text-[#666]">{wf.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Ce que l'IA assiste */}
              <section id="ia-assiste" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#4B5EFC] flex items-center justify-center text-white text-[12px] font-bold">03</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Ce que l&apos;IA assiste</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Au troisieme niveau, le rapport de force s&apos;inverse. L&apos;humain est aux commandes, c&apos;est lui qui conduit. L&apos;IA est le copilote : elle fournit des donnees en temps reel, des suggestions, des alertes. Mais la decision, le timing, le ton, c&apos;est l&apos;humain qui les maitrise. C&apos;est ici que la notion de &laquo; commercial augmente &raquo; prend tout son sens.</p>
                    <p>Les discovery calls sont un excellent exemple. L&apos;IA a prepare un brief complet sur le prospect. Pendant l&apos;appel, elle peut analyser en temps reel les signaux verbaux, suggerer des questions de relance, afficher des donnees pertinentes au bon moment. Mais c&apos;est le commercial qui ecoute vraiment, qui detecte l&apos;hesitation dans la voix, qui sait quand insister et quand reculer. L&apos;IA ameliore la preparation et le debriefing. L&apos;humain maitrise l&apos;interaction.</p>
                    <p>Les propositions commerciales suivent le meme schema. L&apos;IA structure le document, integre les donnees du prospect, genere des benchmarks sectoriels, propose une architecture de pricing basee sur les deals similaires gagnes. Mais la proposition qui gagne, c&apos;est celle qui est personnalisee pour ce prospect specifique, qui anticipe ses objections, qui presente l&apos;offre dans ses termes a lui. Ca, c&apos;est un travail de commercial senior.</p>
                    <p>La negociation est le terrain ou l&apos;IA est la plus utile en coulisse et la moins visible. Elle analyse les patterns : quels arguments fonctionnent sur ce type de profil, a quel moment les deals de cette taille decrochent, quelle marge de negociation est acceptable. Elle fournit au commercial des donnees pour negocier plus intelligemment. Mais la negociation elle-meme, c&apos;est une danse humaine. Le timing d&apos;une concession, la capacite a creer un sentiment d&apos;urgence sans pression, la lecture des signaux non verbaux dans un appel video. Aucune IA ne fait ca.</p>
                  </div>

                  {/* Assist cards */}
                  <div className="mt-6 space-y-3">
                    {[
                      {
                        title: "Discovery calls",
                        icon: "DC",
                        ia_role: "Prepare le contexte complet, analyse les signaux en temps reel, suggere des questions",
                        human_role: "Conduit la conversation, detecte les non-dits, adapte l'approche en direct",
                        color: "#4B5EFC",
                      },
                      {
                        title: "Propositions commerciales",
                        icon: "PC",
                        ia_role: "Structure le document, integre les benchmarks, propose le pricing",
                        human_role: "Personnalise l'argumentaire, anticipe les objections, adapte le storytelling",
                        color: "#4B5EFC",
                      },
                      {
                        title: "Negociation",
                        icon: "NG",
                        ia_role: "Analyse les patterns des deals passes, calcule les marges, identifie les leviers",
                        human_role: "Maitrise le timing, lit les signaux, gere la relation de pouvoir",
                        color: "#4B5EFC",
                      },
                    ].map((item) => (
                      <div key={item.title} className="p-5 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA]">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold" style={{ backgroundColor: item.color }}>{item.icon}</div>
                          <h3 className="text-[13px] font-semibold text-[#111]">{item.title}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-lg bg-white border border-[#F0F0F0]">
                            <p className="text-[9px] font-semibold text-[#6D00CC] uppercase tracking-wider mb-1.5">IA en coulisse</p>
                            <p className="text-[10px] text-[#666] leading-[1.5]">{item.ia_role}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-white border border-[#F0F0F0]">
                            <p className="text-[9px] font-semibold text-[#4B5EFC] uppercase tracking-wider mb-1.5">Humain aux commandes</p>
                            <p className="text-[10px] text-[#666] leading-[1.5]">{item.human_role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Ce que l'IA ne remplacera jamais */}
              <section id="ia-ne-remplacera-jamais" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#222]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#22C55E] flex items-center justify-center text-white text-[12px] font-bold">04</div>
                    <h2 className="text-[17px] font-semibold text-white">Ce que l&apos;IA ne remplacera jamais</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>La confiance. C&apos;est le mot cle. Un client B2B qui signe un contrat a 6 chiffres ne signe pas avec un algorithme. Il signe avec une personne en qui il a confiance. Quelqu&apos;un qui comprend ses enjeux, qui a montre sa fiabilite dans le temps, qui sera la quand ca ne se passera pas comme prevu. Aucune IA au monde ne construit ce type de relation.</p>
                    <p>La lecture politique d&apos;un compte est un autre territoire profondement humain. Comprendre que le directeur commercial est en conflit avec le DAF. Savoir que le projet est soutenu par le CEO mais freine par le DSI. Detecter que le champion interne perd de l&apos;influence. Ces dynamiques ne sont dans aucune base de donnees. Elles se percoivent dans les silences, dans les changements de ton, dans un email CC inattendu. Un commercial senior les decode. Une IA ne les voit meme pas.</p>
                    <p>Le jugement dans une negociation complexe est irreductiblement humain. Quand un prospect demande un geste commercial, faut-il ceder pour securiser le deal ou maintenir sa position pour preserver la valeur percue ? Ca depend du prospect, du contexte, du moment dans le cycle, de la relation construite, de cent parametres subtils qu&apos;aucun modele ne peut integrer. Le commercial qui a 15 ans d&apos;experience &laquo; sent &raquo; la reponse. Ce n&apos;est pas de la magie, c&apos;est de l&apos;expertise incarnee.</p>
                    <p>L&apos;empathie dans une gestion de crise est le dernier bastion. Un client mecontent, un projet en difficulte, une promesse non tenue. La capacite a ecouter, a reconnaitre un probleme sans se justifier, a proposer une solution qui repare la relation autant que le probleme technique. C&apos;est ce qui fait la difference entre un fournisseur et un partenaire. Et c&apos;est 100% humain.</p>
                  </div>

                  {/* Protected skills */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { skill: "Construction de la confiance", desc: "Relations long terme, fiabilite prouvee, presence dans les moments cles", icon: "01" },
                      { skill: "Lecture politique d'un compte", desc: "Dynamiques internes, jeux de pouvoir, signaux faibles interpersonnels", icon: "02" },
                      { skill: "Jugement en negociation complexe", desc: "Timing des concessions, equilibre valeur/relation, intuition situationnelle", icon: "03" },
                      { skill: "Empathie et gestion de crise", desc: "Ecoute active, reconnaissance des erreurs, reparation de la relation", icon: "04" },
                    ].map((s) => (
                      <div key={s.skill} className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-lg bg-[#22C55E] flex items-center justify-center text-white text-[9px] font-bold">{s.icon}</div>
                          <span className="text-[12px] font-semibold text-white">{s.skill}</span>
                        </div>
                        <p className="text-[10px] text-white/40 leading-[1.5]">{s.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] text-white/60 leading-[1.7] italic">&laquo; La vente B2B complexe n&apos;a jamais ete une question de volume d&apos;informations. C&apos;est une question de relation humaine. L&apos;IA nous libere du bruit pour qu&apos;on se concentre sur ce qui compte vraiment : comprendre l&apos;autre. &raquo;</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- Le vrai impact : pas moins de gens, plus de valeur par personne */}
              <section id="vrai-impact" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le vrai impact : pas moins de gens, plus de valeur par personne</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le raccourci que tout le monde fait : &laquo; Si l&apos;IA automatise 50% des taches, on peut virer 50% de l&apos;equipe. &raquo; C&apos;est mathématiquement logique et strategiquement stupide. Ce n&apos;est pas comme ca que les entreprises qui gagnent utilisent l&apos;IA. Elles ne reduisent pas leurs equipes. Elles les reconfigurent.</p>
                    <p>Voici ce qu&apos;on observe concretement chez nos clients. Une equipe de 3 commerciaux augmentee par l&apos;IA produit l&apos;output d&apos;une equipe de 8. Pas parce qu&apos;on a vire 5 personnes. Parce que les 3 font un travail fondamentalement different. Ils passent 80% de leur temps sur des activites a forte valeur ajoutee, celles que l&apos;IA ne peut pas faire, au lieu de 40% avant. Leur pipeline est plus gros, mieux qualifie, et converti plus vite.</p>
                    <p>Le SDR qui passait 6 heures par jour a enrichir des listes et envoyer des sequences en masse devient un &laquo; business developer augmente &raquo;. Il passe son temps a etudier les comptes strategiques, a construire des approches sur-mesure, a avoir des conversations de valeur avec des prospects qualifies. Il traite le meme volume qu&apos;avant, mais avec une qualite d&apos;interaction incomparable. Son taux de reponse passe de 3% a 12%. Son taux de conversion de premier call passe de 20% a 45%.</p>
                    <p>L&apos;account executive qui passait la moitie de son temps sur de l&apos;admin CRM et de la preparation de meetings se concentre desormais sur les 2-3 deals critiques qui font le trimestre. Il a plus de temps pour chaque prospect, il est mieux prepare, il personnalise davantage. Son win rate augmente de 15 a 20 points. Et il gere 40% de pipeline en plus.</p>
                    <p>Le resultat net : pas moins de personnes, mais des personnes qui font un metier plus interessant, plus strategic, et plus performant. C&apos;est le vrai ROI de l&apos;IA commerciale : pas un plan de licenciement, mais un plan de transformation.</p>
                  </div>

                  {/* Before/After comparison */}
                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#111] px-5 py-3">
                      <span className="text-[12px] font-semibold text-white">Avant / apres IA -- Repartition du temps commercial</span>
                    </div>
                    <div className="bg-white p-5">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Avant l&apos;IA</p>
                          <div className="space-y-2">
                            {[
                              { task: "Admin et data entry", pct: "25%", color: "#E0E0E0" },
                              { task: "Recherche et enrichissement", pct: "15%", color: "#E0E0E0" },
                              { task: "Emails et relances", pct: "20%", color: "#E0E0E0" },
                              { task: "Calls et meetings", pct: "25%", color: "#4B5EFC" },
                              { task: "Strategie et relation", pct: "15%", color: "#22C55E" },
                            ].map((item) => (
                              <div key={item.task}>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[10px] text-[#666]">{item.task}</span>
                                  <span className="text-[10px] font-semibold text-[#999]">{item.pct}</span>
                                </div>
                                <div className="h-2 bg-[#F5F5F5] rounded-full overflow-hidden">
                                  <div className="h-full rounded-full" style={{ width: item.pct, backgroundColor: item.color }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-[#22C55E] uppercase tracking-wider mb-3">Apres l&apos;IA</p>
                          <div className="space-y-2">
                            {[
                              { task: "Admin et data entry", pct: "5%", color: "#E0E0E0" },
                              { task: "Recherche et enrichissement", pct: "2%", color: "#E0E0E0" },
                              { task: "Emails et relances", pct: "8%", color: "#E0E0E0" },
                              { task: "Calls et meetings", pct: "40%", color: "#4B5EFC" },
                              { task: "Strategie et relation", pct: "45%", color: "#22C55E" },
                            ].map((item) => (
                              <div key={item.task}>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-[10px] text-[#666]">{item.task}</span>
                                  <span className="text-[10px] font-semibold" style={{ color: item.color === "#E0E0E0" ? "#999" : item.color }}>{item.pct}</span>
                                </div>
                                <div className="h-2 bg-[#F5F5F5] rounded-full overflow-hidden">
                                  <div className="h-full rounded-full" style={{ width: item.pct, backgroundColor: item.color }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key metrics */}
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "x2.7", label: "output par commercial", color: "#FF7A59" },
                      { value: "+85%", label: "temps sur activites strategiques", color: "#22C55E" },
                      { value: "+20pts", label: "win rate moyen", color: "#4B5EFC" },
                      { value: "0", label: "postes supprimes", color: "#6D00CC" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] text-center">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- Comment auditer votre equipe */}
              <section id="auditer-equipe" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment auditer votre equipe</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La matrice ci-dessus est generique. Chaque equipe est differente. Un SDR dans le SaaS et un commercial terrain dans l&apos;industrie ne font pas le meme metier. Pour que cette analyse vous soit utile, il faut l&apos;appliquer a votre contexte specifique. Voici la methode qu&apos;on utilise chez nos clients pour auditer chaque equipe.</p>
                    <p>Etape 1 : le time tracking. Pendant une semaine, chaque membre de l&apos;equipe note toutes ses activites par tranches de 30 minutes. Pas besoin d&apos;un outil sophistique, un simple tableur suffit. L&apos;objectif est d&apos;avoir une photo realiste de comment le temps est reparti. La plupart des managers sont surpris par les resultats. Les commerciaux passent beaucoup plus de temps sur des taches administratives qu&apos;ils ne le pensent.</p>
                    <p>Etape 2 : le classement dans la matrice. Chaque tache identifiee est classee dans l&apos;un des 4 niveaux. Pour chaque tache, posez trois questions. Est-ce que cette tache est purement mecanique, sans jugement ? Niveau 1. Est-ce que l&apos;IA peut faire le gros du travail, avec validation humaine ? Niveau 2. Est-ce que l&apos;humain est aux commandes, mais l&apos;IA peut fournir du contexte ? Niveau 3. Est-ce que cette tache repose fondamentalement sur une competence humaine ? Niveau 4.</p>
                    <p>Etape 3 : la quantification. Pour chaque tache de niveau 1 et 2, calculez le temps total passe par semaine et le cout associe. C&apos;est le &laquo; gisement d&apos;automatisation &raquo;. Pour chaque tache de niveau 3, estimez le gain de temps si l&apos;IA assistait le processus. C&apos;est le &laquo; gisement d&apos;augmentation &raquo;. Les taches de niveau 4 sont votre &laquo; patrimoine humain &raquo;, ce qu&apos;il faut proteger et developper.</p>
                    <p>Etape 4 : la priorisation. Classez les gisements par impact et facilite de mise en oeuvre. Commencez par les taches de niveau 1 les plus chronophages, elles offrent le ROI le plus immediat. Puis attaquez les taches de niveau 2 les plus frequentes. Les taches de niveau 3 viennent en dernier, elles necessitent generalement une integration plus profonde.</p>
                  </div>

                  {/* Audit method steps */}
                  <div className="mt-6 space-y-3">
                    {[
                      { step: "01", title: "Time tracking (1 semaine)", desc: "Chaque commercial note ses activites par tranches de 30 min. Photo realiste de la repartition du temps.", color: "#FF7A59" },
                      { step: "02", title: "Classement dans la matrice", desc: "Chaque tache identifiee est classee en 4 niveaux. 3 questions simples pour determiner le niveau.", color: "#6D00CC" },
                      { step: "03", title: "Quantification des gisements", desc: "Temps et cout par tache. Calcul du gisement d'automatisation (N1-N2) et du gisement d'augmentation (N3).", color: "#4B5EFC" },
                      { step: "04", title: "Priorisation et roadmap", desc: "Classement par impact et facilite. N1 chronophages d'abord, N2 frequents ensuite, N3 en dernier.", color: "#22C55E" },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-4 p-4 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA]">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[12px] font-bold shrink-0" style={{ backgroundColor: s.color }}>{s.step}</div>
                        <div>
                          <h3 className="text-[12px] font-semibold text-[#111] mb-1">{s.title}</h3>
                          <p className="text-[10px] text-[#777] leading-[1.6]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA link to agents-ia */}
                  <div className="mt-5 p-4 rounded-xl bg-[#F5F0FF] border border-[#E8DEFF]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[12px] font-semibold text-[#111] mb-1">Besoin d&apos;aide pour l&apos;audit ?</p>
                        <p className="text-[10px] text-[#666]">On deploie des agents IA sur-mesure pour les equipes commerciales B2B.</p>
                      </div>
                      <Link href="/agents-ia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#6D00CC] text-white text-[11px] font-medium hover:bg-[#5A00AA] transition-colors shrink-0">
                        Decouvrir nos agents IA
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
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
                <div className="rounded-2xl p-6 md:p-10 text-center" style={{ background: "linear-gradient(135deg, #FF7A59 0%, #FF9A7A 100%)" }}>
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-3">Auditer les taches de votre equipe ?</h2>
                  <p className="text-[13px] text-white/80 mb-6 max-w-[420px] mx-auto">On analyse chaque tache de votre equipe commerciale, on identifie les gisements d&apos;automatisation et d&apos;augmentation, et on deploie les agents IA adaptes. Premiers resultats en 2 semaines.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />Demander un audit gratuit
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
