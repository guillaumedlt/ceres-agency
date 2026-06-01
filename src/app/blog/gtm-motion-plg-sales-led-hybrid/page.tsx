"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "GTM motion : choisir entre PLG, Sales-led et Hybrid en 2026",
  description: "Comment choisir son GTM motion en 2026 : PLG, Sales-led ou Hybrid. Criteres de decision, exemples B2B, impact RevOps.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/gtm-motion-plg-sales-led-hybrid" },
  articleSection: "Strategie RevOps", wordCount: 2100, inLanguage: "fr",
};

const sections = [
  { id: "3-motions", title: "Les 3 motions" },
  { id: "criteres", title: "Criteres de decision" },
  { id: "tableau", title: "Tableau comparatif" },
  { id: "exemples", title: "Exemples B2B 2026" },
  { id: "impact-revops", title: "Impact RevOps de chaque motion" },
  { id: "transition", title: "Transitions entre motions" },
];

const relatedArticles = [
  { title: "Aligner Marketing, Sales et RevOps", slug: "aligner-marketing-sales-revops", category: "Strategie RevOps", color: "#FF7A59" },
  { title: "Structurer une equipe RevOps", slug: "structurer-equipe-revops", category: "Strategie RevOps", color: "#4B5EFC" },
  { title: "30 metriques RevOps essentielles", slug: "metriques-revops-indicateurs-performance", category: "Methodologie", color: "#6D00CC" },
];

export default function GtmMotionArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("3-motions");
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) { const el = els[i]; if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; } }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#4B5EFC] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">GTM motion : PLG vs Sales-led vs Hybrid</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Strategie RevOps</Badge><span className="text-[11px] text-[#CCC]">10 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">GTM motion : choisir entre PLG, Sales-led et Hybrid en 2026</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">C&apos;est la decision strategique #1 pour une scale-up SaaS. Le mauvais choix coute 12-24 mois et 3-10M EUR. Voici la grille de decision claire.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="3-motions" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 3 motions, sans bullshit</h2>
                <div className="space-y-4">
                  <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">PLG (Product-Led Growth)</p>
                    <p className="text-[12px] text-[#777] leading-[1.65] mb-2">Le produit est le moteur d&apos;acquisition et de conversion. Free trial ou freemium, self-service, friction minimale. Sales intervient tard ou pas du tout pour les SMB.</p>
                    <p className="text-[11px] text-[#999] italic">Exemples 2026 : Notion, Linear, Figma, Vercel.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">Sales-led</p>
                    <p className="text-[12px] text-[#777] leading-[1.65] mb-2">Equipe commerciale au centre du processus. Demo, discovery, proposition, negociation. Le produit n&apos;est pas accessible sans contact Sales.</p>
                    <p className="text-[11px] text-[#999] italic">Exemples 2026 : Salesforce Industries, Workday, ServiceNow.</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">Hybrid</p>
                    <p className="text-[12px] text-[#777] leading-[1.65] mb-2">PLG pour le segment SMB / self-serve. Sales-led pour mid-market et enterprise. Le produit attire, le Sales convertit a partir d&apos;un seuil.</p>
                    <p className="text-[11px] text-[#999] italic">Exemples 2026 : HubSpot, Slack, Snowflake, Datadog.</p>
                  </div>
                </div>
              </div></section>
              <Connector />

              <section id="criteres" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">5 criteres de decision</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">1. ACV (Annual Contract Value)</p><p className="text-[12px] text-[#777] leading-[1.65]">&lt; 5k : PLG. 5-50k : Hybrid possible. &gt; 50k : Sales-led. Au-dessous de 5k, les couts de vente devorent la marge.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">2. Time-to-value du produit</p><p className="text-[12px] text-[#777] leading-[1.65]">&lt; 1h : PLG envisageable. 1 jour - 1 semaine : Hybrid. &gt; 2 semaines (compliance, integration) : Sales-led.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">3. Complexite buyer journey</p><p className="text-[12px] text-[#777] leading-[1.65]">1 decideur, decision &lt; 1 semaine : PLG. 3-5 stakeholders, decision &lt; 3 mois : Hybrid. Comite de 5+, decision 6+ mois : Sales-led.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">4. Marche : volume vs valeur</p><p className="text-[12px] text-[#777] leading-[1.65]">Marche large (developers, SMB) : PLG. Marche niche enterprise : Sales-led. Marche mixte : Hybrid.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">5. Maturite du produit</p><p className="text-[12px] text-[#777] leading-[1.65]">PLG demande un produit poli, onboarding self-service, documentation parfaite. Si le produit a besoin d&apos;explications, c&apos;est Sales-led ou Hybrid.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="tableau" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif des 3 motions</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">PLG</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Sales-led</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Hybrid</th></tr></thead>
                    <tbody className="text-[#555]">
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">CAC typique</td><td className="p-3 border-b border-[#F2F2F2]">Faible (100-1k EUR)</td><td className="p-3 border-b border-[#F2F2F2]">Eleve (5-25k EUR)</td><td className="p-3 border-b border-[#F2F2F2]">Variable selon segment</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Sales cycle</td><td className="p-3 border-b border-[#F2F2F2]">Quelques jours</td><td className="p-3 border-b border-[#F2F2F2]">3-12 mois</td><td className="p-3 border-b border-[#F2F2F2]">Mixte</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Equipe Sales (par 10M ARR)</td><td className="p-3 border-b border-[#F2F2F2]">1-2 expansion</td><td className="p-3 border-b border-[#F2F2F2]">15-30 AEs/SDRs</td><td className="p-3 border-b border-[#F2F2F2]">8-15</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Marketing</td><td className="p-3 border-b border-[#F2F2F2]">Self-serve, SEO, communaute</td><td className="p-3 border-b border-[#F2F2F2]">ABM, events, content</td><td className="p-3 border-b border-[#F2F2F2]">Mixte</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">RevOps focus</td><td className="p-3 border-b border-[#F2F2F2]">Product analytics, activation</td><td className="p-3 border-b border-[#F2F2F2]">Pipeline, forecast, AE productivity</td><td className="p-3 border-b border-[#F2F2F2]">Tout</td></tr>
                      <tr><td className="p-3 font-medium text-[#111]">Risque #1</td><td className="p-3">Bas ACV bloque scale</td><td className="p-3">Cout commercial explose</td><td className="p-3">Complexite operationnelle</td></tr>
                    </tbody>
                  </table>
                </div>
              </div></section>
              <Connector />

              <section id="exemples" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">3 exemples francais en 2026</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Lemlist - PLG initial puis Hybrid</p><p className="text-[12px] text-[#777] leading-[1.65]">A demarre PLG (free trial + self-serve), maintenant Hybrid avec equipe Sales pour les comptes 50+ users. Modele typique des outils outbound.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Spendesk - Sales-led pur</p><p className="text-[12px] text-[#777] leading-[1.65]">Cycle de vente impliquant le CFO + DAF, ACV 20-100k. Demo obligatoire, pas de free trial pour les fonctions cles. Sales-led classique.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Notion - PLG dominant</p><p className="text-[12px] text-[#777] leading-[1.65]">Free tier puissant, viralite intra-equipes, conversion self-serve. Sales emerge tard pour Enterprise/compliance. Pure PLG.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="impact-revops" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Impact RevOps de chaque motion</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le choix de motion impacte fondamentalement ce que ton RevOps va construire.</p>
                  <p><strong>PLG :</strong> RevOps focus product analytics (activation, retention, NRR), scoring d&apos;intent base sur l&apos;usage, lifecycle marketing, attribution complexe. La metrique cle : PQL (Product Qualified Lead).</p>
                  <p><strong>Sales-led :</strong> RevOps focus pipeline management, forecast accuracy, AE productivity, sales enablement, attribution multi-touch. La metrique cle : pipeline coverage.</p>
                  <p><strong>Hybrid :</strong> RevOps focus l&apos;orchestration des 2 funnels qui convergent dans le CRM. Plus complexe operationnellement, mais permet d&apos;adresser les 2 marches.</p>
                </div>
              </div></section>
              <Connector />

              <section id="transition" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Transitions de motion : quand et comment</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le plus frequent : <strong>PLG vers Hybrid</strong> entre Serie A et B. Tu commences PLG, tu identifies des comptes premium qui pourraient payer 5-10x plus avec accompagnement Sales. Tu introduits un &laquo; sales-assisted &raquo; au-dessus d&apos;un seuil ACV.</p>
                  <p>Plus rare mais possible : <strong>Sales-led vers Hybrid</strong>. Une boite enterprise lance un produit self-serve pour capter le marche SMB qu&apos;elle ratait. Spendesk a tente cela. Demande une discipline operationnelle forte.</p>
                  <p>A eviter : <strong>switch radical</strong> (PLG to Sales-led ou inverse). Cycle perdu de 12-18 mois en general. Plutot transitionner par segments.</p>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Hesitation sur votre GTM motion ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour clarifier la motion adaptee a votre stade et votre marche.</p>
                <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un creneau</a>
              </div></section>
              <Connector />

              <section><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug.startsWith("..") ? r.slug.replace("../", "/") : `/blog/${r.slug}`} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
