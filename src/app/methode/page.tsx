"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const sections = [
  { id: "these", title: "La these" },
  { id: "multiplicateur", title: "Le multiplicateur" },
  { id: "etape-1", title: "Etape 1 : Data" },
  { id: "etape-2", title: "Etape 2 : Enrichissement" },
  { id: "etape-3", title: "Etape 3 : Audit par silo" },
  { id: "etape-4", title: "Etape 4 : KPIs" },
  { id: "etape-5", title: "Etape 5 : Iteration" },
  { id: "matrice", title: "La matrice par silo" },
  { id: "delegation", title: "Le modele de delegation" },
  { id: "impact", title: "L'impact reel" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Notre methode : Data, IA et Revenue Operations",
      description: "La methodologie Ceres pour integrer l'IA dans vos operations commerciales. Donnees propres, KPIs alignes, IA qui optimise chaque silo, iteration continue.",
      url: "https://ceres.agency/methode",
      publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      author: { "@type": "Person", name: "Guillaume Delachet" },
      inLanguage: "fr",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
        { "@type": "ListItem", position: 2, name: "Methode", item: "https://ceres.agency/methode" },
      ],
    },
  ],
};

export default function MethodePage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("these");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "3%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "12%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "24%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "36%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "48%", width: 260, height: 260, borderRadius: "50%", background: "#D4A27F", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "60%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "72%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "85%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Data%2C%20IA%20et%20Revenue%20Operations%20%E2%80%93%20La%20m%C3%A9thode%20Ceres&url=https://ceres.agency/methode" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/methode" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-[700px]">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <span className="text-[#666]">Methode</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Notre methode</Badge>
                <span className="text-[11px] text-[#CCC]">20 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Data, IA et Revenue Operations
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                L&apos;IA est un multiplicateur. Pas une solution. Notre methodologie en 5 etapes pour integrer l&apos;intelligence artificielle dans chaque couche de vos operations commerciales. De la donnee brute a l&apos;intelligence operationnelle.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>Avril 2026</span>
              </div>
            </header>

            <article>
              {/* ───── Section 1 : La these ───── */}
              <section id="these" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">L&apos;IA n&apos;a pas de limite cognitive. Un humain, si.</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est la realite qu&apos;il faut regarder en face. Un humain traite un volume limite d&apos;informations par jour. Il fatigue, il a des bons jours et des mauvais jours, il part en vacances, il change d&apos;entreprise. L&apos;ecart de performance entre le meilleur et le moins bon commercial d&apos;une equipe est de 3x a 5x.</p>
                    <p>L&apos;IA ne fatigue pas. Elle ne part pas. Elle traite des milliers de fiches en quelques minutes. Elle applique les memes regles a chaque fois, sans variance.</p>
                    <p>Mais l&apos;IA est une coquille vide. Elle n&apos;a aucune valeur intrinseque. Sa valeur depend entierement de ce qu&apos;on lui donne. Un modele nourri avec des donnees incoherentes produit des resultats incoherents.</p>
                    <p>Ce qui est automatisable aujourd&apos;hui ne l&apos;est pas forcement a 100%. Et ce qui ne l&apos;est pas encore le sera peut-etre demain. Le rythme d&apos;evolution est de 3 a 6 mois. C&apos;est pour ca que la methodologie compte plus que l&apos;outil.</p>
                  </div>
                  {/* Insight box */}
                  <div className="mt-6 rounded-xl bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">L&apos;IA ne remplace pas les equipes. Elle les recentre sur ce qui cree de la valeur. Et ce qui ne cree pas de valeur, elle le fait mieux, plus vite, et sans cout marginal croissant.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 2 : Le multiplicateur ───── */}
              <section id="multiplicateur" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">L&apos;equation qui explique tout</h2>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA est un coefficient multiplicateur. La qualite de vos donnees est le multiplicande. Le resultat depend entierement de la fondation.</p>
                  </div>

                  {/* 3 scenario cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 mb-6">
                    <div className="rounded-xl border border-[#22C55E]/30 bg-[#22C55E]/5 p-4 text-center">
                      <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em] mb-1">9/10 x IA = 90</div>
                      <p className="text-[11px] text-[#22C55E] font-medium mb-2">Fondation solide</p>
                      <p className="text-[11px] text-[#777] leading-[1.5]">ROI majeur, adoption forte, resultats durables</p>
                    </div>
                    <div className="rounded-xl border border-[#F59E0B]/30 bg-[#F59E0B]/5 p-4 text-center">
                      <div className="text-[28px] font-bold text-[#F59E0B] tracking-[-0.02em] mb-1">4/10 x IA = 40</div>
                      <p className="text-[11px] text-[#F59E0B] font-medium mb-2">Fondation partielle</p>
                      <p className="text-[11px] text-[#777] leading-[1.5]">Resultats mitiges, frustrations, ROI partiel</p>
                    </div>
                    <div className="rounded-xl border border-[#EF4444]/30 bg-[#EF4444]/5 p-4 text-center">
                      <div className="text-[28px] font-bold text-[#EF4444] tracking-[-0.02em] mb-1">1/10 x IA = 10</div>
                      <p className="text-[11px] text-[#EF4444] font-medium mb-2">Fondation absente</p>
                      <p className="text-[11px] text-[#777] leading-[1.5]">Budget brule, equipes sceptiques, outil desactive</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le meme outil. Le meme budget. Le meme modele d&apos;IA. Trois resultats radicalement differents. La seule variable : la qualite de la fondation.</p>
                    <p className="font-semibold text-[#111]">Le vrai investissement n&apos;est pas l&apos;outil IA. C&apos;est la donnee.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 3 : Etape 1 - Data ───── */}
              <section id="etape-1" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">01</div>
                    <div>
                      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Structurer et nettoyer la donnee</h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de deployer quoi que ce soit, il faut une fondation propre. Savoir quel outil fait quoi, comment ils communiquent entre eux, et avoir une base de donnees claire, precise et maintenable automatiquement.</p>
                  </div>

                  {/* 4 chantier cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#EF4444]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Deduplication</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Identifier et fusionner les doublons. 15-25% en moyenne dans un CRM B2B.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#F97316]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Standardisation</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Convertir chaque champ en format exploitable. Pays en ISO, telephones en E.164, industries en liste fermee.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#22C55E]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Enrichissement</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Combler les champs vides via l&apos;IA. Un contact sans industrie est exclu de toute segmentation.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#4B5EFC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Gouvernance</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Champs obligatoires, validations en temps reel, audits mensuels automatises. La base reste propre.</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/fondation-data" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#4B5EFC] hover:text-[#3A4DE0] transition-colors">
                      En savoir plus sur la Fondation Data
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 4 : Etape 2 - Enrichissement IA ───── */}
              <section id="etape-2" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">02</div>
                    <div>
                      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">La couche IA sur la donnee</h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une fois que la base est propre, l&apos;IA peut aller plus loin. Parce que le systeme a la bonne donnee, il sait qui est la personne, son metier, son entreprise, il peut enrichir automatiquement.</p>
                  </div>

                  {/* 4 enrichment cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#6D00CC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Scoring intelligent</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">L&apos;IA analyse des dizaines de signaux et produit un score dynamique. Plus precis que des regles manuelles.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#22C55E]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Remplissage de champs</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Les champs manquants sont completes automatiquement. Le commercial ouvre une fiche complete.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#4B5EFC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Segmentation dynamique</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Segmenter par intent, pas juste par secteur. L&apos;IA identifie des micro-segments invisibles manuellement.</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#D4A27F]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Brief contextuel</h3>
                      </div>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Avant chaque call, un brief genere automatiquement. Qui est le prospect, quelles sont ses actualites, quel angle.</p>
                    </div>
                  </div>

                  {/* Result box */}
                  <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[13px] text-[#555] leading-[1.75] text-center">Temps de recherche pre-appel : <strong className="text-[#111]">15 min &rarr; 2 min</strong>. Taux de reponse cold email : <strong className="text-[#111]">3% &rarr; 11%</strong>.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 5 : Etape 3 - Audit par silo ───── */}
              <section id="etape-3" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">03</div>
                    <div>
                      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Auditer chaque silo</h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est la ou ca devient strategique. Silo par silo, tache par tache, on classe chaque activite dans 4 categories :</p>
                  </div>

                  {/* 4 category cards */}
                  <div className="grid grid-cols-1 gap-3 mt-6">
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">Remplacable a 100%</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">L&apos;IA le fait mieux, plus vite, sans variance.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">Partiellement remplacable</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">L&apos;IA fait 80%, l&apos;humain finalise.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#6C5CE7] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">Assistable</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">L&apos;IA prepare le contexte, l&apos;humain execute mieux.</p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">Non remplacable</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">Le jugement humain cree une valeur disproportionnee.</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>A partir de cette map, on repond a la question : ok, cette tache peut etre remplacee. Par quoi ? Un agent autonome ? Un workflow automatise ? Une formation des equipes ? Ou juste un meilleur process ?</p>
                  </div>

                  <div className="mt-4">
                    <Link href="/agents-ia" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#4B5EFC] hover:text-[#3A4DE0] transition-colors">
                      Voir le deploiement IA en detail
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 6 : Etape 4 - KPIs ───── */}
              <section id="etape-4" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">04</div>
                    <div>
                      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Definir ce qu&apos;on mesure</h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>Ce qui ne se mesure pas ne s&apos;ameliore pas. Avant de deployer l&apos;IA, il faut definir les KPIs par silo. C&apos;est du travail de fond, pas du travail d&apos;IA. Mais sans les bons indicateurs, impossible de piloter.</p>
                  </div>

                  {/* 4 silo KPI cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#FF7A59]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Marketing</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {["CAC", "Taux MQL \u2192 SQL", "Attribution", "Pipeline marketing"].map((kpi) => (
                          <li key={kpi} className="flex items-center gap-2 text-[12px] text-[#777]">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#FF7A59]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            {kpi}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#6D00CC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Sales</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {["Conversion par etape", "Cycle de vente", "Win rate", "Forecast accuracy"].map((kpi) => (
                          <li key={kpi} className="flex items-center gap-2 text-[12px] text-[#777]">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#6D00CC]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            {kpi}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#22C55E]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">CS</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {["NRR", "Taux de churn", "Time to value", "Health score"].map((kpi) => (
                          <li key={kpi} className="flex items-center gap-2 text-[12px] text-[#777]">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            {kpi}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#4B5EFC]" />
                        <h3 className="text-[13px] font-semibold text-[#111]">Finance</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {["MRR reconcilie", "CAC payback", "LTV/CAC", "Revenue par employe"].map((kpi) => (
                          <li key={kpi} className="flex items-center gap-2 text-[12px] text-[#777]">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#4B5EFC]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            {kpi}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une fois ces KPIs definis et mesures, chaque silo peut etre pilote intelligemment. L&apos;IA devient l&apos;outil qui surveille, alerte et optimise.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 7 : Etape 5 - Iteration ───── */}
              <section id="etape-5" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-[48px] font-bold text-[#F2F2F2] leading-none select-none">05</div>
                    <div>
                      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Iterer et composer</h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA deployee n&apos;est pas un projet qu&apos;on livre et qu&apos;on oublie. C&apos;est un systeme vivant qui s&apos;ameliore avec le temps. Chaque iteration rend le systeme plus intelligent. L&apos;avantage se compose.</p>
                  </div>

                  {/* 5 iteration items */}
                  <div className="mt-6 space-y-3">
                    {[
                      { title: "Ajustement des modeles", desc: "Les regles de scoring, les seuils de delegation evoluent. Ce qui marchait en janvier ne marche plus en juin.", color: "#6D00CC" },
                      { title: "Nouvelles briques", desc: "Un agent d'enrichissement ouvre la porte a un agent de scoring, puis un agent de reporting. La stack grandit.", color: "#4B5EFC" },
                      { title: "Veille technologique", desc: "Les modeles d'IA evoluent tous les 3 mois. L'outil peut changer, la methodologie reste.", color: "#FF7A59" },
                      { title: "Formation continue", desc: "Les equipes montent en competence. L'objectif : autonomie complete.", color: "#22C55E" },
                      { title: "Mesure et ROI", desc: "Dashboard mensuel avec les KPIs de chaque agent. Pas de vanity metrics. Du mesurable.", color: "#D4A27F" },
                    ].map((item, i) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="shrink-0 mt-1.5 w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                        <div>
                          <h3 className="text-[13px] font-semibold text-[#111] mb-0.5">{i + 1}. {item.title}</h3>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 8 : La matrice par silo ───── */}
              <section id="matrice" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-2">Ce que l&apos;IA peut faire dans chaque silo</h2>
                  <p className="text-[12px] text-white/40 mb-6">Classification par silo et par niveau de delegation.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Marketing */}
                    <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                      <h3 className="text-[14px] font-semibold text-white mb-4">Marketing</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#22C55E]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Remplacable :</span> reporting, attribution, A/B testing</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Partiel :</span> segmentation, nurturing, personnalisation</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#6C5CE7]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Assiste :</span> strategie contenu, positionnement</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#FF7A59]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Protege :</span> branding, vision marque</p>
                        </div>
                      </div>
                    </div>

                    {/* Sales */}
                    <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                      <h3 className="text-[14px] font-semibold text-white mb-4">Sales</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#22C55E]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Remplacable :</span> enrichissement, scheduling, relances, data entry</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Partiel :</span> emails prospection, prep calls, scoring</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#6C5CE7]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Assiste :</span> discovery, negociation, proposition</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#FF7A59]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Protege :</span> relation C-level, closing complexe</p>
                        </div>
                      </div>
                    </div>

                    {/* CS */}
                    <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                      <h3 className="text-[14px] font-semibold text-white mb-4">CS</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#22C55E]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Remplacable :</span> renouvellements simples, reporting, alertes</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Partiel :</span> health scoring, detection churn</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#6C5CE7]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Assiste :</span> plans expansion, comptes strategiques</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#FF7A59]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Protege :</span> gestion de crise, relation long terme</p>
                        </div>
                      </div>
                    </div>

                    {/* Finance */}
                    <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                      <h3 className="text-[14px] font-semibold text-white mb-4">Finance</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#22C55E]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Remplacable :</span> reconciliation, reporting, audits</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Partiel :</span> previsions revenus, analyse pipeline</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#6C5CE7]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Assiste :</span> analyse strategique, budgeting</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="shrink-0 mt-1 w-2 h-2 rounded-sm bg-[#FF7A59]" />
                          <p className="text-[11px] text-white/50 leading-[1.6]"><span className="text-white/70 font-medium">Protege :</span> decisions investissement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 9 : Le modele de delegation ───── */}
              <section id="delegation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Quand l&apos;IA agit seule et quand l&apos;humain decide</h2>

                  <div className="space-y-3">
                    {/* Level 1 - Rouge */}
                    <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#EF4444]/[0.03] p-4">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-[11px] font-bold text-[#EF4444] uppercase tracking-wider">Humain seul</span>
                      </div>
                      <p className="text-[13px] text-[#555] leading-[1.65] mb-1.5">Le cout d&apos;erreur depasse 10x le gain de temps.</p>
                      <p className="text-[12px] text-[#999] leading-[1.5]">Negociation finale, gestion de crise, relation strategique</p>
                    </div>

                    {/* Level 2 - Orange */}
                    <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FF7A59]/[0.03] p-4">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-[11px] font-bold text-[#FF7A59] uppercase tracking-wider">L&apos;IA prepare, l&apos;humain execute</span>
                      </div>
                      <p className="text-[13px] text-[#555] leading-[1.65] mb-1.5">La tache requiert du jugement contextuel.</p>
                      <p className="text-[12px] text-[#999] leading-[1.5]">Discovery call, proposition commerciale, compte a risque</p>
                    </div>

                    {/* Level 3 - Jaune */}
                    <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#F59E0B]/[0.03] p-4">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider">L&apos;IA execute, l&apos;humain valide</span>
                      </div>
                      <p className="text-[13px] text-[#555] leading-[1.65] mb-1.5">Le travail est standardisable.</p>
                      <p className="text-[12px] text-[#999] leading-[1.5]">Emails de prospection, follow-ups, reporting</p>
                    </div>

                    {/* Level 4 - Vert */}
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#22C55E]/[0.03] p-4">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-[11px] font-bold text-[#22C55E] uppercase tracking-wider">L&apos;IA autonome</span>
                      </div>
                      <p className="text-[13px] text-[#555] leading-[1.65] mb-1.5">Cout d&apos;erreur faible et fiabilite prouvee.</p>
                      <p className="text-[12px] text-[#999] leading-[1.5]">Enrichissement, scheduling, scoring, relances</p>
                    </div>
                  </div>

                  {/* Rule box */}
                  <div className="mt-6 rounded-xl border border-dashed border-[#333] bg-[#111] p-5">
                    <p className="text-[13px] text-white/60 leading-[1.75]">Regle : une tache passe au niveau superieur apres 50+ occurrences avec un taux d&apos;erreur acceptable. Concret, mesurable, auditable.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── Section 10 : L'impact reel ───── */}
              <section id="impact" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-6">Ce que ca change concretement</h2>

                  {/* 5 before/after metrics */}
                  <div className="space-y-3 mb-6">
                    {[
                      { label: "Equipe pour 1000 leads/mois", before: "8 personnes", after: "3 personnes" },
                      { label: "Temps de qualification", before: "15 min", after: "2 min par lead" },
                      { label: "Precision forecast", before: "35%", after: "88%" },
                      { label: "Reporting", before: "12h/semaine", after: "30 min" },
                      { label: "Detection churn", before: "J-10", after: "J-45" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4 flex items-center justify-between gap-4">
                        <p className="text-[13px] font-medium text-[#111] flex-1">{item.label}</p>
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="text-right">
                            <div className="text-[14px] font-bold text-[#EF4444]">{item.before}</div>
                            <p className="text-[9px] text-[#999]">Avant</p>
                          </div>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#999]"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <div>
                            <div className="text-[14px] font-bold text-[#22C55E]">{item.after}</div>
                            <p className="text-[9px] text-[#999]">Apres</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                    <p className="font-semibold text-[#111]">Parlons clairement. Le premier levier de l&apos;IA dans une organisation commerciale, c&apos;est la capacite a absorber plus de volume avec la meme equipe. Une equipe de 3 augmentee par l&apos;IA produit ce qu&apos;une equipe de 8 produisait sans. Pas parce que l&apos;IA remplace. Parce qu&apos;elle elimine les taches qui ne requierent pas de jugement humain.</p>
                    <p>Les entreprises qui mettent en place cette methodologie maintenant construisent un avantage compose irreversible.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ───── CTA ───── */}
              <section className="mb-8">
                <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                  <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a structurer vos operations pour l&apos;IA ?</h2>
                  <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 minutes pour comprendre ou vous en etes et par ou commencer.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                    Reserver un appel
                  </Link>
                </div>
              </section>
              <Connector />

              {/* ───── Related links ───── */}
              <section>
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link href="/fondation-data" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-sm bg-[#FF7A59]" />
                      <h3 className="text-[12px] font-semibold text-[#111]">Fondation Data</h3>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">CRM propre, KPIs alignes</p>
                  </Link>
                  <Link href="/agents-ia" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-sm bg-[#6D00CC]" />
                      <h3 className="text-[12px] font-semibold text-[#111]">Deploiement IA</h3>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">Optimiser chaque silo</p>
                  </Link>
                  <Link href="/blog" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                      <h3 className="text-[12px] font-semibold text-[#111]">Blog</h3>
                    </div>
                    <p className="text-[11px] text-[#777] leading-[1.5]">68+ articles RevOps, Data et IA</p>
                  </Link>
                </div>
              </section>

            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
