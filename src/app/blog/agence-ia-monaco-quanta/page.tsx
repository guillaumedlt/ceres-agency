"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quanta : on ouvre notre agence IA a Monaco",
  description: "Ceres lance Quanta, son agence specialisee en intelligence artificielle a Monaco. Deploiement IA pour les entreprises monegasques et de la Cote d'Azur.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/agence-ia-monaco-quanta" },
  articleSection: "IA & Automatisation",
  wordCount: 1800,
  inLanguage: "fr",
};

const sections = [
  { id: "annonce", title: "L'annonce" },
  { id: "pourquoi-monaco", title: "Pourquoi Monaco" },
  { id: "quanta", title: "Quanta, c'est quoi" },
  { id: "services", title: "Ce qu'on propose" },
  { id: "pour-qui", title: "Pour qui" },
  { id: "demarrer", title: "Comment demarrer" },
];

const relatedArticles = [
  { title: "5 agents IA qu'on deploie chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "IA en B2B : par ou commencer quand on n'a rien fait", slug: "ia-b2b-par-ou-commencer", category: "IA & Automatisation", color: "#D4A27F" },
  { title: "Donnees, process, IA : dans quel ordre faire son RevOps ?", slug: "process-data-ia-ordre-revops", category: "Process & Outils", color: "#FF7A59" },
];

export default function AgenceIaMonacoQuantaArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("annonce");

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
        <div className="h-full bg-[#6D00CC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#D4A27F", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#6D00CC", opacity: 0.06, filter: "blur(70px)" }} />

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
                        ? "border-[#6D00CC] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Quanta%20%3A%20agence%20IA%20a%20Monaco&url=https://ceres.agency/blog/agence-ia-monaco-quanta" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/agence-ia-monaco-quanta" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Quanta : agence IA a Monaco</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">8 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Quanta : on ouvre notre agence IA a Monaco
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Apres 250+ missions en France et a l&apos;international, on lance Quanta : notre agence specialisee en intelligence artificielle, basee a Monaco. Deploiement IA pour les entreprises monegasques et de la Cote d&apos;Azur. Meme equipe, meme methodologie, meme exigence de resultats.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>15 avr 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 : L'annonce */}
              <section id="annonce" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">On ouvre une agence IA a Monaco</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres 250+ missions en France et a l&apos;international, on franchit une nouvelle etape. On lance Quanta, notre agence specialisee en intelligence artificielle, basee a Monaco.</p>
                    <p>Quanta n&apos;est pas un bureau commercial. C&apos;est une entite dediee au deploiement de l&apos;IA pour les entreprises monegasques, de la Cote d&apos;Azur et de la region PACA. Meme equipe, meme methodologie, meme exigence de resultats.</p>
                  </div>

                  {/* Link card to quantamonaco.com */}
                  <a
                    href="https://quantamonaco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-4 rounded-xl border border-[#E8E8E8] p-4 hover:border-[#6D00CC]/30 hover:shadow-[0_4px_12px_-4px_rgba(109,0,204,0.1)] transition-all group"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#6D00CC] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-[#111] group-hover:text-[#6D00CC] transition-colors">quantamonaco.com</p>
                      <p className="text-[11px] text-[#999]">Decouvrir Quanta</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:stroke-[#6D00CC] transition-colors"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>
                </div>
              </section>
              <Connector />

              {/* Section 2 : Pourquoi Monaco */}
              <section id="pourquoi-monaco" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi Monaco</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Monaco est un marche unique. Un ecosysteme dense d&apos;entreprises a fort potentiel, de family offices, de fonds d&apos;investissement, de societes de gestion et d&apos;acteurs du luxe. Des entreprises qui ont les moyens d&apos;investir dans l&apos;IA mais qui manquent souvent de partenaires locaux capables de les accompagner.</p>
                    <p>Le tissu economique monegasque est aussi marque par des enjeux specifiques : reglementation stricte, confidentialite des donnees, exigence de service, clientele internationale. L&apos;IA doit s&apos;adapter a ces contraintes, pas l&apos;inverse.</p>
                    <p>On voit une opportunite claire : apporter notre expertise en deploiement IA (construite sur 250+ missions) a un marche qui en a besoin mais qui est encore sous-equipe.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Quanta, c'est quoi */}
              <section id="quanta" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Quanta : l&apos;IA au service de votre business</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Quanta est l&apos;entite de Ceres dediee a Monaco et la Cote d&apos;Azur. Le nom vient du latin &ldquo;quantum&rdquo;, la plus petite unite de mesure. L&apos;idee : des interventions precises, mesurees, avec un impact maximum.</p>
                    <p>Meme methodologie que Ceres : donnees propres d&apos;abord, IA ensuite, optimisation continue. Meme equipe d&apos;experts. Meme obsession des resultats mesurables.</p>
                    <p>La difference : une presence locale, une connaissance du marche monegasque, et une offre adaptee aux specificites de la principaute.</p>
                  </div>

                  {/* Link card to quantamonaco.com */}
                  <a
                    href="https://quantamonaco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-4 rounded-xl border border-[#E8E8E8] p-4 hover:border-[#6D00CC]/30 hover:shadow-[0_4px_12px_-4px_rgba(109,0,204,0.1)] transition-all group"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#6D00CC] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-[#111] group-hover:text-[#6D00CC] transition-colors">quantamonaco.com</p>
                      <p className="text-[11px] text-[#999]">Decouvrir Quanta</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:stroke-[#6D00CC] transition-colors"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Ce qu'on propose */}
              <section id="services" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les services Quanta</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Six briques de service, deployables individuellement ou en combinaison. Chaque intervention demarre par un diagnostic et se termine par des resultats mesurables.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Fondation Data", desc: "Nettoyage et structuration de vos donnees CRM. Le prerequis a tout deploiement IA.", color: "#22C55E" },
                      { title: "Deploiement d'agents IA", desc: "Agents connectes a votre CRM et vos outils. Enrichissement, scoring, reporting, detection de signaux.", color: "#6D00CC" },
                      { title: "Automatisation des operations", desc: "Workflows intelligents, reporting automatise, gain de temps sur les taches repetitives.", color: "#FF7A59" },
                      { title: "Formation des equipes", desc: "Formations pratiques a l'IA appliquee a votre metier. De 0.5 a 1 jour.", color: "#4B5EFC" },
                      { title: "Conseil strategique IA", desc: "Audit de votre organisation, identification des cas d'usage IA, feuille de route.", color: "#6C5CE7" },
                      { title: "Accompagnement continu", desc: "Un expert IA dedie chaque mois. Iteration, optimisation, nouvelles briques.", color: "#D4A27F" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Pour qui */}
              <section id="pour-qui" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pour qui</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Quanta s&apos;adresse aux entreprises basees a Monaco et sur la Cote d&apos;Azur :</p>
                  </div>

                  <div className="grid gap-3">
                    {[
                      { title: "Societes de gestion et family offices", desc: "Automatiser le reporting, structurer la data client, deployer l'IA sur les operations.", color: "#FF7A59" },
                      { title: "Entreprises B2B monegasques", desc: "CRM, operations commerciales, acquisition. La meme expertise que pour nos clients francais.", color: "#4B5EFC" },
                      { title: "Acteurs du luxe et de l'hospitality", desc: "Personnalisation client, CRM, operations, experience digitale.", color: "#6D00CC" },
                      { title: "Startups et scale-ups PACA", desc: "Structurer les operations des le debut avec l'IA comme levier de croissance.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Comment demarrer */}
              <section id="demarrer" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment demarrer</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un appel de 30 minutes pour comprendre votre situation et identifier les premiers quick wins IA. Gratuit, sans engagement.</p>
                    <p>On peut intervenir a Monaco, Nice, Cannes, et dans toute la region.</p>
                  </div>

                  {/* Link card to quantamonaco.com */}
                  <a
                    href="https://quantamonaco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-4 rounded-xl border border-[#E8E8E8] p-4 hover:border-[#6D00CC]/30 hover:shadow-[0_4px_12px_-4px_rgba(109,0,204,0.1)] transition-all group"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#6D00CC] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-[#111] group-hover:text-[#6D00CC] transition-colors">quantamonaco.com</p>
                      <p className="text-[11px] text-[#999]">Decouvrir Quanta</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:stroke-[#6D00CC] transition-colors"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </a>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl p-6 md:p-8 text-center border border-[#333]" style={{ background: "linear-gradient(135deg, #6D00CC, #4B0E8A)" }}>
                <h3 className="text-[17px] font-semibold text-white mb-3">Decouvrir Quanta a Monaco</h3>
                <p className="text-[13px] text-white/60 leading-[1.7] mb-5 max-w-[500px] mx-auto">Agence IA dediee a Monaco et la Cote d&apos;Azur. Deploiement d&apos;agents IA, automatisation des operations, formation des equipes. Meme expertise que Ceres, presence locale.</p>
                <a
                  href="https://quantamonaco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#6D00CC] rounded-lg text-[13px] font-medium hover:bg-white/90 transition-colors"
                >
                  quantamonaco.com
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </a>
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#6D00CC] transition-colors leading-[1.4]">{a.title}</p>
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
