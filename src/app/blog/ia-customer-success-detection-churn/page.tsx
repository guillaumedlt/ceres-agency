"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "L'IA en Customer Success : detecter le churn 45 jours avant qu'il arrive",
  description: "Comment l'IA detecte les signaux faibles de churn 45 jours avant qu'il arrive. Health score IA vs manuel, les 7 signaux surveilles, agent de detection, cas concret SaaS B2B, expansion, KPIs et prerequis data.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-customer-success-detection-churn" },
  articleSection: "RevOps",
  wordCount: 3000,
  inLanguage: "fr",
};

const sections = [
  { id: "churn-trop-tard", title: "Detection trop tardive" },
  { id: "signaux-faibles", title: "7 signaux faibles" },
  { id: "health-score-ia", title: "Health score IA vs manuel" },
  { id: "agent-detection", title: "Agent de detection" },
  { id: "cas-concret", title: "Cas concret SaaS B2B" },
  { id: "expansion", title: "Detection d'expansion" },
  { id: "kpis", title: "KPIs a suivre" },
  { id: "donnees-propres", title: "Prerequis data" },
  { id: "limites", title: "Limites" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Customer Success et RevOps : aligner retention et revenue", slug: "customer-success-revops", category: "RevOps", color: "#22C55E" },
  { title: "Les 5 agents IA qu'on deploie chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA", color: "#6D00CC" },
  { title: "Process, data, IA : dans quel ordre deployer le RevOps", slug: "process-data-ia-ordre-revops", category: "RevOps", color: "#FF7A59" },
];

export default function IACustomerSuccessDetectionChurnPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("churn-trop-tard");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=L%27IA%20en%20Customer%20Success%20%3A%20detecter%20le%20churn%2045%20jours%20avant&url=https://ceres.agency/blog/ia-customer-success-detection-churn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/ia-customer-success-detection-churn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">IA et detection du churn</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">16 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                L&apos;IA en Customer Success : detecter le churn 45 jours avant qu&apos;il arrive
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                La plupart des CSMs detectent le churn quand il est deja trop tard. Le client a pris sa decision, il ne reste plus qu&apos;a negocier la sortie. L&apos;IA change la donne : en croisant les signaux d&apos;usage, de support, d&apos;engagement et de contexte, elle identifie les comptes a risque 45 jours avant le churn. Ce guide couvre les 7 signaux faibles surveilles, le fonctionnement de l&apos;agent de detection, un cas concret sur 200 comptes, et les prerequis pour que ca fonctionne.
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
              {/* Section 1 -- Le churn se detecte trop tard */}
              <section id="churn-trop-tard" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le churn se detecte quand il est trop tard</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La realite du Customer Success aujourd&apos;hui : la majorite des CSMs detectent le risque de churn 10 jours avant l&apos;echeance. Parfois moins. A ce stade, le client a deja un pied dehors. Il a evalue les alternatives, obtenu des devis concurrents, prepare sa migration. La conversation de retention arrive trop tard pour changer quoi que ce soit.</p>
                    <p>Ce retard n&apos;est pas un probleme de competence. Les CSMs sont souvent excellents dans la relation. Le probleme est structurel : un CSM gere 30, 50, parfois 80 comptes. Il ne peut pas surveiller chaque signal sur chaque compte chaque jour. Il se concentre sur les comptes bruyants, ceux qui appellent, qui escaladent, qui se plaignent. Les comptes silencieux, ceux qui se desengagent progressivement sans faire de bruit, passent sous le radar jusqu&apos;au mail de resiliation.</p>
                    <p>Le cout de cette detection tardive est enorme. Quand le churn est detecte a J-10, le taux de save est de 10 a 15%. Le client est deja convaincu de partir. Les arguments de retention sonnent creux parce qu&apos;ils arrivent trop tard. En revanche, quand le risque est detecte a J-45, le taux de save monte a 40 a 60%. Il y a le temps de comprendre le probleme, de proposer une solution, de demontrer la valeur, de reengager le champion interne.</p>
                    <p>La difference entre J-10 et J-45, c&apos;est la difference entre reagir et anticiper. Et cette anticipation, un humain seul ne peut pas la fournir a grande echelle. C&apos;est exactement la ou l&apos;IA entre en jeu : surveiller en continu, croiser les signaux, et alerter le CSM au bon moment avec le bon contexte.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { value: "J-10", label: "detection moyenne du churn par un CSM sans IA", color: "#FF7A59" },
                      { value: "J-45", label: "detection avec un agent IA de surveillance des signaux", color: "#22C55E" },
                      { value: "40-60%", label: "taux de save quand le risque est detecte 45 jours avant", color: "#4B5EFC" },
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

              {/* Section 2 -- Les 7 signaux faibles */}
              <section id="signaux-faibles" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 7 signaux faibles que l&apos;IA surveille</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA ne devine pas le churn. Elle le detecte en surveillant un ensemble de signaux faibles que l&apos;humain ne peut pas suivre simultanement sur des dizaines de comptes. Chaque signal pris isolement peut sembler anodin. C&apos;est leur combinaison et leur evolution dans le temps qui revele le risque reel.</p>
                    <p>Le premier signal est la baisse d&apos;utilisation. Pas une baisse brutale, qui serait visible, mais une baisse progressive. Le client passait 45 minutes par jour sur l&apos;outil, puis 30, puis 20, puis 10. Sur 4 semaines, c&apos;est une tendance claire. L&apos;IA detecte cette degradation bien avant qu&apos;elle ne devienne visible dans un dashboard mensuel.</p>
                    <p>Le deuxieme signal est la hausse des tickets support. Le nombre de tickets augmente, leur severite aussi. Les tickets passent de &ldquo;question d&apos;usage&rdquo; a &ldquo;probleme bloquant&rdquo;. Le client rencontre des frictions repetees et perd patience. L&apos;IA correle le volume, la severite et le temps de resolution pour mesurer la frustration cumulee.</p>
                    <p>Le troisieme signal est l&apos;absence de contact. Le client n&apos;a pas echange avec son CSM depuis 21 jours. Pas de reponse au dernier email. Le QBR prevu a ete reporte deux fois. Le silence est le pire ennemi du CSM, et l&apos;IA le quantifie objectivement.</p>
                    <p>Le quatrieme signal est le depart du champion. Le contact principal, celui qui a porte l&apos;achat de votre solution en interne, quitte l&apos;entreprise ou change de poste. L&apos;IA detecte ce changement via les bounces email, les mises a jour LinkedIn, ou les changements dans l&apos;organigramme client. Sans champion, le renouvellement est en danger.</p>
                    <p>Le cinquieme signal est le renouvellement qui approche sans interaction. Le contrat arrive a echeance dans 60 jours, mais aucun QBR n&apos;est planifie, aucune discussion sur le renouvellement n&apos;a eu lieu. L&apos;absence de preparation est un indicateur fort que le client n&apos;est pas engage dans la relation.</p>
                    <p>Le sixieme signal est la baisse du NPS. Le client a donne un NPS de 9 il y a 6 mois, puis un 7 au dernier sondage, voire un 5. Cette trajectoire descendante est un signal precoce que la perception de valeur se degrade, meme si l&apos;usage semble stable.</p>
                    <p>Le septieme signal est la chute d&apos;engagement email. Le client ouvrait tous les emails, cliquait sur les newsletters produit, participait aux webinaires. Puis plus rien. Le taux d&apos;ouverture tombe a 0%. L&apos;engagement marketing est un proxy fiable de l&apos;interet du client pour votre solution.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      { signal: "Baisse d'utilisation", detail: "Usage quotidien en declin progressif sur 4 semaines consecutives", color: "#22C55E" },
                      { signal: "Hausse des tickets support", detail: "Volume et severite en augmentation, frustration cumulee", color: "#4B5EFC" },
                      { signal: "Absence de contact", detail: "Aucun echange CSM depuis 21+ jours, emails sans reponse", color: "#6C5CE7" },
                      { signal: "Champion qui quitte", detail: "Contact principal change de poste ou quitte l'entreprise", color: "#FF7A59" },
                      { signal: "Renouvellement sans interaction", detail: "Echeance a J-60 sans QBR ni discussion de renouvellement", color: "#6D00CC" },
                      { signal: "NPS en baisse", detail: "Score en trajectoire descendante sur les 2 derniers sondages", color: "#D4A27F" },
                      { signal: "Engagement email en chute", detail: "Taux d'ouverture tombe a 0%, aucun clic newsletter ou webinaire", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.signal} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: item.color }} />
                        <div>
                          <p className="text-[12px] font-semibold text-[#111]">{item.signal}</p>
                          <p className="text-[11px] text-[#999] mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 -- Health score IA vs manuel */}
              <section id="health-score-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le health score IA vs le health score manuel</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La plupart des equipes CS ont un health score. Le probleme, c&apos;est que dans 90% des cas, ce score est maintenu manuellement par le CSM. Il ouvre la fiche client dans le CRM, reflechit 10 secondes, et met &ldquo;vert&rdquo; parce que le client n&apos;a pas appele depuis 2 mois. Pas de plainte = tout va bien. C&apos;est exactement l&apos;inverse de la realite.</p>
                    <p>Le health score manuel souffre de trois biais. Le biais de recence : le CSM se base sur la derniere interaction, pas sur la tendance. Le biais d&apos;optimisme : personne ne veut mettre &ldquo;rouge&rdquo; sur son propre portefeuille, ca implique un probleme qu&apos;il faut gerer. Et le biais de visibilite : les comptes silencieux sont classes &ldquo;vert&rdquo; par defaut, alors que le silence est souvent le signal le plus dangereux.</p>
                    <p>L&apos;IA n&apos;a aucun de ces biais. Elle regarde les donnees brutes. L&apos;utilisation a baisse de 30% sur les 4 dernieres semaines. Le champion a change de poste il y a 15 jours. Le dernier email du CSM est reste sans reponse. Le NPS est passe de 8 a 6. Le health score IA met &ldquo;orange&rdquo;, declenchant une alerte et un playbook de reengagement. Le CSM, lui, aurait laisse &ldquo;vert&rdquo; pendant encore 3 semaines avant de realiser qu&apos;il y avait un probleme.</p>
                    <p>La difference fondamentale entre les deux approches tient en un mot : donnees. Le health score manuel est base sur l&apos;intuition du CSM, informee par des interactions episodiques. Le health score IA est base sur des donnees continues, croisant 7 sources en temps reel. L&apos;intuition du CSM reste precieuse pour la relation, mais elle ne peut pas rivaliser avec un modele qui surveille 50 comptes 24h/24.</p>
                    <p>L&apos;objectif n&apos;est pas de remplacer le jugement du CSM. C&apos;est de lui donner une base factuelle pour prioriser son temps. Au lieu de deviner quels comptes meritent son attention, il recoit chaque matin une liste priorisee avec le contexte et les actions recommandees. Le CSM passe de reactif a proactif.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { type: "Health score manuel", items: ["Base sur la derniere interaction", "Biais d'optimisme du CSM", "Mise a jour episodique", "Comptes silencieux = vert par defaut", "Detection a J-10"], color: "#FF7A59", tag: "Reactif" },
                      { type: "Health score IA", items: ["Base sur 7 sources de donnees continues", "Aucun biais, donnees brutes", "Mise a jour en temps reel", "Silence detecte comme signal de risque", "Detection a J-45"], color: "#22C55E", tag: "Proactif" },
                    ].map((col) => (
                      <div key={col.type} className="p-4 rounded-xl border border-[#F0F0F0] bg-[#FAFAFA]">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[12px] font-semibold text-[#111]">{col.type}</p>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md" style={{ backgroundColor: col.color + "15", color: col.color }}>{col.tag}</span>
                        </div>
                        <div className="space-y-1.5">
                          {col.items.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-[11px] text-[#777]">
                              <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: col.color }} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- Comment l'agent fonctionne -- DARK SECTION */}
              <section id="agent-detection" className="mb-8">
                <div className="rounded-2xl bg-[#111] text-white p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Comment l&apos;agent de detection fonctionne</h2>
                  <div className="space-y-3 text-[13px] text-white/70 leading-[1.75]">
                    <p>L&apos;agent de detection du churn n&apos;est pas une boite noire. C&apos;est un systeme structure qui se connecte a vos outils existants, collecte les donnees, les croise et produit des alertes actionnables. Voici comment il fonctionne, etape par etape.</p>
                    <p>La premiere couche est la collecte. L&apos;agent se connecte au CRM (HubSpot, Salesforce) pour recuperer l&apos;historique des interactions, les proprietes du compte, les dates de renouvellement. Il se connecte a l&apos;outil de ticketing (Zendesk, Intercom, HubSpot Service Hub) pour suivre le volume, la severite et le temps de resolution des tickets. Il se connecte aux donnees d&apos;usage produit (via Segment, Amplitude, ou une API interne) pour mesurer la frequence de connexion, les fonctionnalites utilisees et la profondeur d&apos;usage. Il capte aussi les donnees d&apos;engagement email et les changements organisationnels.</p>
                    <p>La deuxieme couche est l&apos;analyse. L&apos;agent croise les 7 signaux pour chaque compte et calcule un score de risque composite. Ce score n&apos;est pas un simple calcul lineaire : il prend en compte les correlations entre signaux. Une baisse d&apos;usage seule peut etre normale. Une baisse d&apos;usage combinee a un depart de champion et un silence de 3 semaines est un signal fort. L&apos;agent pondere les signaux en fonction de ce qui a historiquement predit le churn dans votre contexte specifique.</p>
                    <p>La troisieme couche est l&apos;alerte. Quand un compte depasse un seuil de risque, l&apos;agent genere une alerte contextuelle. Pas juste &ldquo;compte a risque&rdquo;, mais un brief complet : voici les signaux detectes, voici leur evolution sur les 4 dernieres semaines, voici les actions recommandees. Le CSM recoit cette alerte dans Slack, dans le CRM, ou par email. Il a immediatement le contexte pour agir.</p>
                    <p>La quatrieme couche est l&apos;apprentissage. L&apos;agent mesure les resultats de chaque intervention. Quand un compte alerte en &ldquo;orange&rdquo; est sauve apres intervention du CSM, c&apos;est une validation du modele. Quand un compte &ldquo;vert&rdquo; churne sans alerte, c&apos;est un signal d&apos;amelioration. Le modele s&apos;affine au fil du temps, avec des pondations de plus en plus precises pour votre business specifique.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { step: "1. Collecte", detail: "CRM, ticketing, usage produit, engagement email", color: "#22C55E" },
                      { step: "2. Analyse", detail: "Croisement des 7 signaux, score de risque composite", color: "#4B5EFC" },
                      { step: "3. Alerte", detail: "Brief contextuel + actions recommandees au CSM", color: "#6C5CE7" },
                      { step: "4. Apprentissage", detail: "Feedback loop, calibration continue du modele", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.step} className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[11px] font-semibold text-white mb-1">{item.step}</p>
                        <p className="text-[10px] text-white/50 leading-[1.5]">{item.detail}</p>
                        <div className="w-full h-[2px] rounded-full mt-2" style={{ backgroundColor: item.color, opacity: 0.6 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Cas concret */}
              <section id="cas-concret" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Cas concret : SaaS B2B, 200 comptes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Prenons un cas representatif. Une entreprise SaaS B2B avec 200 comptes actifs, un ARR de 2,4 millions d&apos;euros et une equipe de 4 CSMs. Chaque CSM gere 50 comptes. L&apos;ACV moyen est de 12 000 euros par an. Le churn annuel historique est de 12%, soit environ 24 comptes perdus par an, representant 288 000 euros de revenu perdu.</p>
                    <p>Avant le deploiement de l&apos;agent de detection, les CSMs fonctionnaient en mode reactif. Ils detectaient les risques de churn en moyenne 8 a 12 jours avant l&apos;echeance, generalement quand le client demandait les conditions de resiliation ou ne repondait plus aux emails de renouvellement. Le taux de save etait de 15% : sur 24 comptes a risque, 3 ou 4 etaient sauves chaque annee.</p>
                    <p>L&apos;agent est deploye. Il se connecte a HubSpot (CRM et ticketing), aux donnees d&apos;usage produit via l&apos;API interne, et aux donnees d&apos;engagement email. En 6 semaines de calibration initiale, le modele commence a produire des alertes fiables.</p>
                    <p>Premier trimestre apres deploiement. L&apos;agent detecte 3 comptes a risque que les CSMs n&apos;avaient pas identifies. Le premier : un compte dont l&apos;usage a baisse de 35% sur 5 semaines et dont le champion a change de poste. Le CSM pensait que tout allait bien parce que le client ne s&apos;etait jamais plaint. Le deuxieme : un compte dont le NPS est passe de 9 a 5 et qui n&apos;a pas ouvert un email depuis 6 semaines. Le troisieme : un compte dont les tickets support ont triple en volume et double en severite sur le dernier mois.</p>
                    <p>Les CSMs interviennent sur les 3 comptes. Sur le premier, un call de reengagement avec le nouveau responsable permet de re-demontrer la valeur et de planifier un re-onboarding. Le compte est sauve. Sur le deuxieme, la conversation revele un probleme d&apos;integration non resolu depuis 3 mois qui frustrait l&apos;equipe. Le support le corrige en 48h. Compte sauve. Le troisieme etait trop engage avec un concurrent et churne malgre l&apos;intervention. Resultat : 2 saves sur 3, soit 2 contrats de 22 500 euros en moyenne preserves. 45 000 euros de revenu annuel recurrent preserve sur un seul trimestre.</p>
                    <p>Extrapole sur l&apos;annee, l&apos;agent de detection fait passer le taux de save de 15% a 35%. Le churn annuel passe de 24 comptes a 16 comptes. Le revenu preserve supplementaire est de l&apos;ordre de 96 000 euros par an. Et ca se compose : chaque compte sauve genere du revenu sur toutes les annees suivantes.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E8E8E8]">
                      <span className="text-[12px] font-semibold text-[#111]">Impact -- SaaS B2B, 200 comptes, ARR 2.4M EUR</span>
                    </div>
                    <div className="p-4 space-y-3">
                      {[
                        { ligne: "Detection du risque", avant: "J-10", apres: "J-45", color: "#22C55E" },
                        { ligne: "Taux de save", avant: "15%", apres: "35%", color: "#4B5EFC" },
                        { ligne: "Churn annuel (comptes)", avant: "24", apres: "16", color: "#6C5CE7" },
                        { ligne: "Revenu preserve supplementaire", avant: "-", apres: "+96 000 EUR/an", color: "#FF7A59" },
                      ].map((item) => (
                        <div key={item.ligne} className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                            <p className="text-[11px] font-semibold text-[#111]">{item.ligne}</p>
                          </div>
                          <div className="flex items-center gap-4 text-[11px]">
                            <span className="text-[#999]">{item.avant}</span>
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-[#CCC]"><path d="M4 6H8M8 6L6 4M8 6L6 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span className="font-semibold" style={{ color: item.color }}>{item.apres}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Expansion */}
              <section id="expansion" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;expansion : l&apos;autre face de la detection</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La detection du churn est une face de la medaille. L&apos;autre face, souvent negligee, c&apos;est la detection de l&apos;expansion. Les memes signaux qui alertent sur le risque peuvent aussi alerter sur l&apos;opportunite. Et les memes donnees alimentent les deux modeles.</p>
                    <p>Quand l&apos;usage augmente au lieu de baisser, quand un client approche les limites de son plan, quand un nouveau departement commence a utiliser l&apos;outil, quand le budget du client est en croissance, ce sont des signaux d&apos;upsell. L&apos;agent les detecte avec la meme logique que pour le churn, mais en miroir. Une hausse d&apos;utilisation de 40% sur 4 semaines combinee a un recrutement dans l&apos;equipe cible est un signal fort d&apos;expansion.</p>
                    <p>La detection d&apos;expansion est souvent plus rentable que la detection du churn. Eviter un churn preserve du revenu existant. Detecter une opportunite d&apos;expansion cree du revenu nouveau. Un client qui passe de 10 a 25 licences, ou du plan Pro au plan Enterprise, genere de la croissance organique sans cout d&apos;acquisition. C&apos;est exactement ce que le NRR mesure.</p>
                    <p>L&apos;agent de detection peut ainsi alimenter deux workflows distincts. Le workflow de retention, avec des playbooks de reengagement, de re-onboarding, d&apos;escalade. Et le workflow d&apos;expansion, avec des playbooks d&apos;upsell, de cross-sell et de seat expansion. Le CSM recoit les deux types d&apos;alertes dans le meme outil, avec le meme niveau de contexte et de recommandations.</p>
                    <p>Concretement, sur une base de 200 comptes, l&apos;agent detecte en moyenne 4 a 6 opportunites d&apos;expansion par trimestre que les CSMs n&apos;auraient pas identifiees. Avec un taux de conversion de 40% et un upsell moyen de 5 000 euros, cela represente 8 000 a 12 000 euros de revenu additionnel par trimestre. Pas spectaculaire, mais cumule sur l&apos;annee et compose sur plusieurs annees, l&apos;impact est significatif.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { signal: "Hausse d'usage +40%", action: "Proposition upsell plan superieur", color: "#22C55E" },
                      { signal: "Nouveau departement actif", action: "Discovery cross-sell modules complementaires", color: "#4B5EFC" },
                      { signal: "Budget client en croissance", action: "QBR strategique + proposition seat expansion", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.signal} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.signal}</p>
                        <div className="flex items-start gap-2 mt-2">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1" style={{ backgroundColor: item.color }} />
                          <p className="text-[11px] text-[#777] leading-[1.5]">{item.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- KPIs a suivre */}
              <section id="kpis" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les KPIs a suivre</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Deployer un agent de detection du churn sans mesurer son impact est inutile. Voici les 6 KPIs a suivre pour evaluer la performance du systeme et justifier l&apos;investissement aupres du management.</p>
                    <p>Le Net Revenue Retention (NRR) est le KPI roi. Il mesure la croissance organique de votre base client, expansion incluse. Un NRR superieur a 100% signifie que votre base croit sans new business. L&apos;objectif avec l&apos;agent de detection est d&apos;augmenter le NRR de 5 a 15 points en reduisant le churn et en detectant plus d&apos;opportunites d&apos;expansion.</p>
                    <p>Le Gross Churn Rate mesure le pourcentage de revenu perdu, sans prendre en compte l&apos;expansion. C&apos;est l&apos;indicateur pur de la retention. L&apos;objectif est de le reduire de 20 a 30% apres le deploiement de l&apos;agent. Si votre gross churn etait de 12%, il devrait passer entre 8 et 10% en 12 mois.</p>
                    <p>Le Time to Detect Risk mesure le nombre de jours entre l&apos;apparition du premier signal de risque et l&apos;alerte au CSM. Avant l&apos;agent, ce delai est souvent de 30 a 45 jours (detection manuelle). Apres, il devrait tomber sous les 5 jours. C&apos;est la metrique qui mesure directement la valeur de l&apos;anticipation.</p>
                    <p>Le Save Rate mesure le pourcentage de comptes a risque qui sont sauves apres intervention du CSM. Avant l&apos;agent, il est generalement de 10 a 15% (detection trop tardive). Apres, il devrait monter entre 35 et 50%. C&apos;est la metrique qui mesure l&apos;efficacite combinee de la detection et de l&apos;intervention.</p>
                    <p>Le Revenue Preserved mesure en euros le revenu annuel recurrent qui aurait ete perdu sans l&apos;intervention declenchee par l&apos;agent. C&apos;est le ROI le plus direct et le plus comprehensible par le management : combien d&apos;euros avons-nous sauve grace a la detection precoce.</p>
                    <p>L&apos;Expansion Revenue mesure le revenu additionnel genere grace aux signaux d&apos;expansion detectes par l&apos;agent. C&apos;est le deuxieme pilier du ROI : non seulement on perd moins, mais on gagne plus grace a une meilleure identification des opportunites.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { kpi: "Net Revenue Retention", cible: "> 110%", color: "#22C55E" },
                      { kpi: "Gross Churn Rate", cible: "< 10%", color: "#FF7A59" },
                      { kpi: "Time to Detect Risk", cible: "< 5 jours", color: "#4B5EFC" },
                      { kpi: "Save Rate", cible: "35-50%", color: "#6C5CE7" },
                      { kpi: "Revenue Preserved", cible: "en EUR/an", color: "#6D00CC" },
                      { kpi: "Expansion Revenue", cible: "en EUR/an", color: "#D4A27F" },
                    ].map((item) => (
                      <div key={item.kpi} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] text-center">
                        <p className="text-[11px] font-semibold text-[#111] mb-1">{item.kpi}</p>
                        <p className="text-[16px] font-bold" style={{ color: item.color }}>{item.cible}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- Prerequis data */}
              <section id="donnees-propres" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le prerequis : des donnees propres</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA ne fait pas de miracles. Elle fait des calculs. Et les calculs ne valent que ce que valent les donnees en entree. C&apos;est le point que beaucoup d&apos;entreprises sous-estiment quand elles veulent deployer un agent de detection du churn : sans fondation data solide, le modele produit du bruit, pas du signal.</p>
                    <p>Le premier prerequis est les donnees d&apos;usage fiables. Vous devez pouvoir mesurer, pour chaque compte, la frequence de connexion, le nombre d&apos;utilisateurs actifs, les fonctionnalites utilisees et la profondeur d&apos;usage. Si votre produit n&apos;a pas de tracking d&apos;usage implementee, ou si les donnees sont incompletes, l&apos;agent sera aveugle sur le signal le plus predictif du churn.</p>
                    <p>Le deuxieme prerequis est un CRM a jour. Les fiches entreprises doivent contenir les dates de renouvellement, les contacts principaux, l&apos;historique des interactions. Si vos commerciaux et CSMs ne remplissent pas le CRM, les donnees sont inexploitables. L&apos;agent ne peut pas detecter un depart de champion si le champion n&apos;est meme pas identifie dans le CRM.</p>
                    <p>Le troisieme prerequis est un historique propre. L&apos;agent a besoin de donnees historiques pour calibrer ses seuils. Quand est-ce qu&apos;une baisse d&apos;usage de 20% est normale pour votre contexte (saisonnalite, vacances) et quand est-ce qu&apos;elle est un signal de risque ? Pour le savoir, il faut au moins 6 mois d&apos;historique d&apos;usage et de churn, idealement 12 mois.</p>
                    <p>Si ces prerequis ne sont pas reunis, ne deployer pas un agent de detection. Commencez par la fondation. Implementez le tracking d&apos;usage. Nettoyez votre CRM. Formalisez les processus de mise a jour. C&apos;est la sequence que l&apos;on recommande systematiquement : process d&apos;abord, data ensuite, IA quand les fondations sont solides. L&apos;inverse, deployer l&apos;IA sur des donnees bancales, est le meilleur moyen de perdre du temps et de la credibilite aupres des equipes.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E8E8E8]">
                      <span className="text-[12px] font-semibold text-[#111]">Checklist prerequis data</span>
                    </div>
                    <div className="p-4 space-y-2">
                      {[
                        "Tracking d'usage produit implemente (connexions, features, profondeur)",
                        "CRM a jour : contacts principaux, dates de renouvellement, historique interactions",
                        "Donnees de ticketing accessibles via API (volume, severite, resolution)",
                        "Historique de churn sur 6-12 mois minimum pour calibration",
                        "Donnees d'engagement email trackees (ouvertures, clics, bounces)",
                        "Process de mise a jour CRM formalise et suivi par les equipes",
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

              {/* Section 9 -- Limites */}
              <section id="limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les limites</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;honnetete intellectuelle impose de parler des limites. L&apos;agent de detection du churn n&apos;est pas parfait, et pretendre le contraire serait irresponsable. Voici ce que vous devez savoir avant de deployer.</p>
                    <p>Les faux positifs existent. L&apos;agent peut alerter sur un compte dont l&apos;usage a baisse de 30% alors que l&apos;equipe est simplement en vacances. Ou sur un compte dont le champion a change de poste alors que le nouveau responsable est encore plus enthousiaste que l&apos;ancien. Chaque faux positif coute du temps au CSM et, s&apos;ils sont trop frequents, erode la confiance dans le systeme. Le taux de faux positifs acceptable se situe entre 15 et 25%. Au-dela, les CSMs cessent de prendre les alertes au serieux.</p>
                    <p>La calibration prend du temps. Comptez 2 a 3 mois avant que le modele soit fiable dans votre contexte specifique. Pendant cette periode, les alertes seront moins precises. Les seuils devront etre ajustes, les ponderations modifiees, les specificites de votre business integrees. C&apos;est un investissement en temps qui necessite la patience du management et la cooperation des CSMs pour valider ou invalider les alertes.</p>
                    <p>L&apos;agent ne remplace pas la relation humaine. Il detecte des signaux, il ne gere pas des relations. Le call de reengagement, la conversation difficile sur un probleme non resolu, la negociation d&apos;un renouvellement complexe, tout cela reste le domaine du CSM. L&apos;IA est un radar, pas un pilote. Elle dit au CSM ou regarder, mais c&apos;est le CSM qui agit.</p>
                    <p>Enfin, l&apos;agent ne peut pas compenser un mauvais produit. Si vos clients churnent parce que votre solution ne resout pas leur probleme, aucun agent de detection ne changera la donne. La detection precoce n&apos;a de valeur que si l&apos;equipe a les moyens de resoudre les problemes detectes. Sinon, on detecte plus tot mais on ne sauve pas plus.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { limite: "Faux positifs", detail: "15-25% de taux acceptable. Au-dela, perte de confiance des CSMs dans le systeme", color: "#FF7A59" },
                      { limite: "Calibration 2-3 mois", detail: "Periode d'apprentissage necessaire. Alertes moins precises au debut", color: "#4B5EFC" },
                      { limite: "Relation humaine requise", detail: "L'IA detecte, le CSM agit. Pas de remplacement de la relation client", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.limite} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                          <p className="text-[12px] font-semibold text-[#111]">{item.limite}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 -- Notre approche */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;agent de detection du churn fait partie des 5 agents IA qu&apos;on deploie chez nos clients B2B. Ce n&apos;est pas un outil standalone : il s&apos;integre dans une strategie RevOps complete ou la data, les process et l&apos;IA travaillent ensemble.</p>
                    <p>Notre sequence de deploiement est toujours la meme. On commence par un audit des donnees existantes : CRM, ticketing, usage produit. On identifie les gaps et on les comble. Ensuite, on formalise les processus CS : handoff sales-CS, playbooks de reengagement, workflow de renouvellement. Enfin, on deploie l&apos;agent sur des fondations solides.</p>
                    <p>La phase de calibration dure 2 a 3 mois. Pendant cette periode, on travaille avec les CSMs pour affiner les seuils, valider les alertes et ajuster les ponderations. L&apos;objectif est que les CSMs fassent confiance au systeme, pas qu&apos;ils le subissent. Quand un CSM recoit une alerte et pense immediatement &ldquo;je dois appeler ce client&rdquo;, le modele est calibre.</p>
                    <p>Les resultats arrivent progressivement. Les premieres semaines, l&apos;agent detecte des risques evidents que les CSMs connaissaient deja. C&apos;est normal et rassurant : le modele confirme l&apos;intuition. Puis il commence a detecter des risques que les CSMs n&apos;avaient pas identifies. C&apos;est la que la valeur apparait. Au bout de 6 mois, les equipes ne peuvent plus s&apos;en passer.</p>
                    <p>Si le sujet vous interesse, l&apos;article sur <Link href="/blog/agents-ia-deployes-clients-b2b" className="text-[#22C55E] hover:underline">les 5 agents IA qu&apos;on deploie chez nos clients B2B</Link> detaille chaque agent, y compris celui de detection du churn, avec les cas d&apos;usage concrets et les resultats observes.</p>
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
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Deployer la detection du churn IA ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On vous accompagne : audit data, calibration du modele, deploiement de l&apos;agent de detection et formation des CSMs. Premiers resultats sur la retention en 90 jours.</p>
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
