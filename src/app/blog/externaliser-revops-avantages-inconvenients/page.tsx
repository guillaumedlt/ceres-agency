"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Externaliser ses RevOps : avantages et inconvenients",
  description: "Faut-il internaliser ou externaliser ses RevOps ? Analyse complete des 5 avantages et 3 inconvenients, comparaison interne vs externe vs hybride, criteres de choix du partenaire et modele d'accompagnement adapte a chaque stade de croissance.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/externaliser-revops-avantages-inconvenients" },
  articleSection: "RevOps",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-externaliser", title: "Pourquoi externaliser" },
  { id: "cinq-avantages", title: "Les 5 avantages" },
  { id: "trois-inconvenients", title: "Les 3 inconvenients" },
  { id: "interne-vs-externe", title: "Interne vs externe vs hybride" },
  { id: "quel-stade", title: "A quel stade externaliser" },
  { id: "choisir-partenaire", title: "Choisir son partenaire" },
  { id: "questions-a-poser", title: "Les questions a poser" },
  { id: "notre-modele", title: "Notre modele" },
];

const relatedArticles = [
  { title: "RevOps pour les startups : par ou commencer ?", slug: "revops-startups-par-ou-commencer", category: "RevOps", color: "#6C5CE7" },
  { title: "Structurer son equipe RevOps", slug: "structurer-equipe-revops", category: "RevOps", color: "#6C5CE7" },
  { title: "RevOps Manager : fiche de poste, salaire et competences", slug: "revops-manager-fiche-poste-salaire-competences", category: "RevOps", color: "#6C5CE7" },
];

export default function ExternaliserRevopsArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-externaliser");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Externaliser%20ses%20RevOps%20%3A%20avantages%20et%20inconvenients&url=https://ceres.agency/blog/externaliser-revops-avantages-inconvenients" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/externaliser-revops-avantages-inconvenients" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Externaliser ses RevOps</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">12 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Externaliser ses RevOps : avantages et inconvenients
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Recruter un RevOps Manager a 65-85K EUR, attendre 6 mois qu&apos;il soit operationnel, puis esperer qu&apos;il ne parte pas. Ou externaliser a un partenaire specialise, operationnel en 2 semaines, pour une fraction du cout. Le choix n&apos;est pas aussi simple qu&apos;il y parait. Ce guide pose les avantages, les inconvenients et les criteres de decision objectifs.
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
              {/* Section 1 : Pourquoi externaliser */}
              <section id="pourquoi-externaliser" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi la question se pose maintenant</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le RevOps est devenu un poste critique en B2B. Sans lui, le CRM est mal configure, les donnees sont sales, les workflows n&apos;existent pas, le reporting est manuel et les equipes sales/marketing/CS travaillent en silos. Le probleme : le talent RevOps est rare et cher.</p>
                    <p>En France en 2026, un RevOps Manager senior coute entre 65 000 et 85 000 EUR brut annuel. Le recrutement prend 3 a 6 mois. La montee en competence, encore 3 mois. Soit 6 a 9 mois avant d&apos;etre operationnel. Pour une startup ou une PME en croissance, ce delai est un luxe qu&apos;on ne peut pas se permettre.</p>
                    <p>L&apos;externalisation repond a un besoin concret : avoir une expertise RevOps operationnelle rapidement, sans le risque et le cout d&apos;un recrutement. Mais ce n&apos;est pas la bonne solution pour tout le monde. Voici comment trancher.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "65-85K", label: "salaire annuel RevOps Manager", color: "#EF4444" },
                      { stat: "6-9 mois", label: "delai recrutement + montee en charge", color: "#FF7A59" },
                      { stat: "2 semaines", label: "delai operationnel en externalise", color: "#22C55E" },
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

              {/* Section 2 : Les 5 avantages */}
              <section id="cinq-avantages" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 5 avantages de l&apos;externalisation</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;externalisation n&apos;est pas un aveu de faiblesse. C&apos;est une decision strategique qui presente des avantages mesurables quand elle est bien executee.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Expertise multi-clients",
                        desc: "Un RevOps externalise travaille avec 10 a 20 clients simultanement. Il a vu des dizaines de configurations CRM, resolu des centaines de problemes d'integration, optimise des milliers de workflows. Cette diversite d'experience est impossible a reproduire en interne. Quand un probleme arrive, il l'a deja resolu ailleurs. Le temps de diagnostic est divise par 5.",
                        color: "#22C55E"
                      },
                      {
                        title: "Cout maitrise",
                        desc: "Un accompagnement RevOps externalise coute entre 2 000 et 5 000 EUR par mois. Soit 24 000 a 60 000 EUR par an. Contre 65 000 a 85 000 EUR de salaire brut, plus les charges patronales (environ 45%), plus le management, la formation, les outils. Cout reel d'un RevOps interne : 95 000 a 125 000 EUR par an. L'externalisation coute 2 a 4 fois moins.",
                        color: "#4B5EFC"
                      },
                      {
                        title: "Rapidite d'execution",
                        desc: "Pas de recrutement, pas de preavis, pas de montee en competence sur votre stack. Un partenaire RevOps est operationnel en 1 a 2 semaines. L'audit CRM est fait en semaine 1, les premiers workflows deployes en semaine 2, les dashboards configures en semaine 3. En 30 jours, vous avez l'equivalent de 6 mois de travail interne.",
                        color: "#6C5CE7"
                      },
                      {
                        title: "Flexibilite",
                        desc: "Besoin de 3 jours par semaine pendant le setup, puis 1 jour par semaine en maintenance ? C'est possible. Besoin de renforcer pendant une migration CRM, puis de reduire ? C'est possible. L'externalisation s'adapte a la charge, pas l'inverse. Pas de CDI a gerer, pas de sous-charge a justifier.",
                        color: "#FF7A59"
                      },
                      {
                        title: "Acces a l'IA et aux outils avances",
                        desc: "Un partenaire RevOps specialise a deja developpe des agents IA, des automatisations avancees, des connecteurs sur mesure. Vous beneficiez d'outils qui ont ete testes et affines sur des dizaines de clients. Construire ces memes outils en interne prendrait des mois et couterait 3 a 5 fois plus cher.",
                        color: "#6D00CC"
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
                </div>
              </section>
              <Connector />

              {/* Section 3 : Les 3 inconvenients */}
              <section id="trois-inconvenients" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 3 inconvenients a connaitre</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;externalisation n&apos;est pas parfaite. Voici les trois limites reelles, sans les minimiser.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Dependance au partenaire",
                        desc: "Si tout le savoir RevOps est chez le prestataire, vous etes vulnerable. S'il augmente ses tarifs, si la qualite baisse, si le consultant principal part, vous vous retrouvez sans filet. C'est le risque principal. La parade : exiger une documentation complete de tout ce qui est mis en place, avec des runbooks et des process documentes. L'objectif est que n'importe qui puisse reprendre le travail.",
                        color: "#EF4444",
                        mitigation: "Exiger une documentation exhaustive. Runbooks, schemas d'architecture, acces aux comptes. Tout doit etre transferable."
                      },
                      {
                        title: "Manque de contexte interne",
                        desc: "Un prestataire externe ne connait pas votre culture d'entreprise, vos dynamiques d'equipe, les non-dits. Il ne sait pas que le directeur commercial deteste les dashboards, que l'equipe marketing ne fait pas confiance au scoring, que le CEO veut un rapport le vendredi et pas le lundi. Ce contexte se construit avec le temps, mais les premieres semaines sont moins fluides qu'avec un interne.",
                        color: "#FF7A59",
                        mitigation: "Planifier un onboarding structure du partenaire : 2-3 interviews internes, documentation du contexte, canal Slack dedie pour les questions."
                      },
                      {
                        title: "Disponibilite limitee",
                        desc: "Un RevOps interne est disponible 5 jours sur 5. Un partenaire externalise intervient 1 a 3 jours par semaine. Si vous avez une urgence un mardi et que votre creneaux est le jeudi, vous attendez. Pour les problemes critiques (CRM en panne, integration cassee), cette latence peut couter cher.",
                        color: "#6C5CE7",
                        mitigation: "Negocier un SLA de reactivite pour les urgences (reponse sous 2h, intervention sous 4h). Definir ce qui constitue une urgence vs une demande standard."
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#22C55E]/5 p-2">
                          <span className="text-[10px] text-[#22C55E] font-semibold shrink-0 mt-0.5">Parade :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.mitigation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Interne vs externe vs hybride */}
              <section id="interne-vs-externe" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Interne vs externe vs hybride</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le choix n&apos;est pas binaire. Il existe trois modeles, chacun adapte a un contexte specifique.</p>
                  </div>

                  <div className="my-6 overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="border-b border-[#E8E8E8]">
                          <th className="text-left py-3 pr-3 text-[#999] font-semibold">Critere</th>
                          <th className="text-center py-3 px-2 text-[#4B5EFC] font-semibold">100% interne</th>
                          <th className="text-center py-3 px-2 text-[#6C5CE7] font-semibold">100% externe</th>
                          <th className="text-center py-3 px-2 text-[#22C55E] font-semibold">Hybride</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { critere: "Cout annuel", interne: "95-125K", externe: "24-60K", hybride: "85-110K" },
                          { critere: "Delai operationnel", interne: "6-9 mois", externe: "2 semaines", hybride: "1-2 mois" },
                          { critere: "Expertise technique", interne: "Moyenne", externe: "Elevee", hybride: "Elevee" },
                          { critere: "Contexte business", interne: "Excellent", externe: "Moyen", hybride: "Bon" },
                          { critere: "Disponibilite", interne: "5j/5", externe: "1-3j/sem", hybride: "5j/5" },
                          { critere: "Flexibilite", interne: "Faible", externe: "Elevee", hybride: "Moyenne" },
                          { critere: "Risque turnover", interne: "Eleve", externe: "Faible", hybride: "Moyen" },
                        ].map((row) => (
                          <tr key={row.critere} className="border-b border-[#F2F2F2]">
                            <td className="py-2.5 pr-3 font-medium text-[#111]">{row.critere}</td>
                            <td className="py-2.5 px-2 text-center text-[#666]">{row.interne}</td>
                            <td className="py-2.5 px-2 text-center text-[#666]">{row.externe}</td>
                            <td className="py-2.5 px-2 text-center text-[#666]">{row.hybride}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le modele hybride</strong> est souvent le meilleur compromis pour les entreprises de 30 a 200 personnes. Vous recrutez un RevOps junior ou mid-level en interne (45-55K EUR) pour le contexte business, la proximite equipe et la disponibilite quotidienne. Et vous l&apos;appuyez avec un partenaire externe pour l&apos;expertise technique, les projets complexes (migration, integration IA, setup avance) et le mentorat.</p>
                    <p>Le RevOps interne gere le quotidien. Le partenaire externe gere les projets structurants et forme l&apos;interne. En 12 a 18 mois, le RevOps interne est autonome sur 80% des sujets, et le partenaire n&apos;intervient plus que ponctuellement.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : A quel stade externaliser */}
              <section id="quel-stade" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">A quel stade externaliser</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La reponse depend de votre taille, de votre maturite RevOps et de vos ressources disponibles.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { stage: "Startup (5-20 personnes)", reco: "Externaliser a 100%", desc: "Pas le budget pour un RevOps interne. Pas assez de volume pour justifier un temps plein. L'externalisation a 1-2 jours par semaine couvre tous les besoins : setup CRM, premiers workflows, dashboards de base, integrations essentielles.", color: "#22C55E" },
                      { stage: "PME (20-80 personnes)", reco: "Externe puis hybride", desc: "Commencer par 3-6 mois en full externe pour poser les fondations (CRM, process, data). Puis recruter un RevOps junior et passer en hybride. Le partenaire forme l'interne et gere les projets complexes.", color: "#4B5EFC" },
                      { stage: "Scale-up (80-300 personnes)", reco: "Hybride", desc: "Vous avez besoin d'un RevOps interne a temps plein pour le volume et la complexite. Mais vous avez aussi besoin d'expertise externe pour les chantiers structurants : migration CRM, deploiement IA, refonte process multi-equipes.", color: "#6C5CE7" },
                      { stage: "Grand groupe (300+ personnes)", reco: "Interne + consulting ponctuel", desc: "Equipe RevOps interne de 2-5 personnes. Le partenaire externe intervient sur des missions specifiques : audit, migration, integration avancee, formation IA. Pas d'accompagnement continu.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.stage} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.stage}</span>
                          </div>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded" style={{ background: `${item.color}15`, color: item.color }}>{item.reco}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Choisir son partenaire */}
              <section id="choisir-partenaire" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment choisir son partenaire RevOps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le marche des prestataires RevOps est encore jeune en France. Entre les freelances HubSpot, les agences inbound reconverties et les vrais specialistes RevOps, le niveau varie enormement. Voici les 5 criteres de selection qui comptent vraiment.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { critere: "Experience multi-stack", desc: "Un bon partenaire connait HubSpot, mais aussi Salesforce, Pipedrive, Attio. Il connait Make, n8n, Zapier. Il a travaille avec Clay, Lemlist, Apollo. Si le partenaire ne connait qu'un outil, c'est un integrateur, pas un RevOps.", color: "#4B5EFC" },
                      { critere: "Cas clients documentes", desc: "Demandez des cas clients avec des resultats chiffres. Pas des temoignages vagues, des metriques : +X% de win rate, -Y jours de cycle de vente, Z heures gagnees par semaine. Si le partenaire ne peut pas montrer de resultats, passez.", color: "#22C55E" },
                      { critere: "Approche data-first", desc: "Le RevOps commence par les donnees. Si le partenaire propose de configurer des workflows avant d'auditer la qualite des donnees, c'est un mauvais signe. L'ordre correct : audit data, nettoyage, process, automatisation.", color: "#6C5CE7" },
                      { critere: "Competence IA", desc: "En 2026, un partenaire RevOps sans competence IA est obsolete. L'IA n'est pas un bonus, c'est un composant essentiel du RevOps moderne : scoring predictif, enrichissement automatique, reporting narratif, agents conversationnels.", color: "#6D00CC" },
                      { critere: "Transparence sur les limites", desc: "Un bon partenaire dit non. Si votre CRM a besoin d'un nettoyage de 6 mois avant de deployer des workflows, il vous le dit. Si un projet n'a pas de ROI, il vous le dit. La complaisance est le signe d'un prestataire qui vend du temps, pas de la valeur.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.critere} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.critere}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Les questions a poser */}
              <section id="questions-a-poser" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 8 questions a poser avant de signer</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de choisir un partenaire, posez ces questions. Les reponses vous diront tout sur le niveau de serieux et de maturite du prestataire.</p>
                  </div>

                  <div className="my-6 space-y-2">
                    {[
                      { q: "Quel est votre process d'onboarding client ?", why: "Un partenaire structure a un onboarding documente : interviews, audit, plan d'action a 30-60-90 jours. Si la reponse est vague, le delivery le sera aussi." },
                      { q: "Comment mesurez-vous le ROI de votre intervention ?", why: "Un bon partenaire definit des KPI de succes avant de commencer. Pas apres." },
                      { q: "Qui sera mon interlocuteur principal et quel est son background ?", why: "Vous devez savoir qui fait le travail. Un consultant senior a 9 ans d'experience ou un junior a 1 an." },
                      { q: "Comment gerez-vous le transfert de connaissances ?", why: "Documentation, runbooks, formations. Si tout est dans la tete du consultant, vous etes dependant." },
                      { q: "Quel est votre SLA de reactivite pour les urgences ?", why: "Definir ce qui est une urgence et le temps de reponse garanti. Avant de signer, pas apres la premiere panne." },
                      { q: "Montrez-moi 3 cas clients avec des metriques de resultats.", why: "Les temoignages sont bien. Les chiffres sont mieux. Win rate, cycle, heures gagnees, ROI." },
                      { q: "Que se passe-t-il si on arrete la collaboration ?", why: "La sortie doit etre prevue des le depart. Clause de transfert, documentation, preavis raisonnable." },
                      { q: "Quelle est votre approche sur l'IA et l'automatisation ?", why: "En 2026, un partenaire qui ne parle pas d'IA ne fait pas du RevOps moderne. Il fait du support CRM." },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{i + 1}. {item.q}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Notre modele */}
              <section id="notre-modele" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre modele d&apos;accompagnement</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on propose un modele RevOps part-time adapte a chaque stade de croissance. Pas de contrat annuel rigide. Pas de jours non utilises qui expirent. Un accompagnement flexible qui s&apos;ajuste a vos besoins reels.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Phase 1 : Audit + Setup (M1-M2)", desc: "Audit complet du CRM, des donnees et des process. Nettoyage des donnees. Configuration des workflows essentiels. Mise en place des dashboards. Livrable : plan d'action a 90 jours avec KPI de reference.", color: "#FF7A59" },
                      { title: "Phase 2 : Optimisation (M3-M6)", desc: "Deploiement des automatisations avancees. Integration IA (scoring, enrichissement, reporting). Optimisation continue basee sur les resultats. Formation de l'equipe interne.", color: "#4B5EFC" },
                      { title: "Phase 3 : Autonomie (M6-M12)", desc: "Transfert progressif vers l'equipe interne. Reduction de l'intervention externe. Documentation complete. L'objectif est votre autonomie, pas notre dependance.", color: "#22C55E" },
                      { title: "Phase 4 : Support (M12+)", desc: "Intervention ponctuelle sur les sujets complexes. Veille technologique. Nouveaux projets (migration, nouvelle integration, nouveau canal). 1 a 2 jours par mois suffisent.", color: "#6C5CE7" },
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

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>On a accompagne plus de 250 entreprises B2B avec ce modele. Le taux de renouvellement est de 85%. Pas parce qu&apos;elles sont dependantes, mais parce que le ROI est mesurable et que les projets evoluent. L&apos;entreprise qui nous mandatait pour un setup CRM en M1 nous mandate pour le deploiement IA en M8. Le perimetre change, la valeur reste.</p>
                    <p>L&apos;externalisation n&apos;est pas un substitut a la competence interne. C&apos;est un accelerateur. Le meilleur scenario est celui ou vous n&apos;avez plus besoin de nous au quotidien, mais ou vous savez qu&apos;on est la quand un projet complexe arrive.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Explorer l&apos;externalisation RevOps ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Un appel de 30 minutes pour comprendre votre contexte, evaluer vos besoins RevOps et determiner si l&apos;externalisation est la bonne option pour vous. Sans engagement, avec un avis honnete.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF7A59] text-white rounded-lg text-[13px] font-medium hover:bg-[#E86A4A] transition-colors">
                  Discuter de vos besoins RevOps
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
