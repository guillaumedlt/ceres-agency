"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "ROI du RevOps : comment le calculer et le defendre au board",
  description: "Framework complet pour calculer et defendre le ROI d'une fonction RevOps devant un board. 4 leviers chiffres, formules, benchmarks 2026.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/roi-revops-calculer-defendre-board" },
  articleSection: "Strategie RevOps", wordCount: 2200, inLanguage: "fr",
};

const sections = [
  { id: "probleme", title: "Le probleme" },
  { id: "4-leviers", title: "Les 4 leviers" },
  { id: "formule", title: "La formule ROI" },
  { id: "exemple", title: "Exemple chiffre" },
  { id: "slide", title: "Le slide pour le board" },
  { id: "pieges", title: "Pieges a eviter" },
];

const relatedArticles = [
  { title: "Framework SCORE de Ceres", slug: "../framework-score-revops", category: "Framework", color: "#FF7A59" },
  { title: "30 metriques RevOps essentielles", slug: "metriques-revops-indicateurs-performance", category: "Strategie RevOps", color: "#4B5EFC" },
  { title: "Audit RevOps : checklist complete", slug: "audit-revops-checklist-complete", category: "Methodologie", color: "#6D00CC" },
];

export default function RoiRevopsArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("probleme");
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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">ROI du RevOps</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Strategie RevOps</Badge><span className="text-[11px] text-[#CCC]">11 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">ROI du RevOps : comment le calculer et le defendre au board</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">La question que tout CRO/VP RevOps recoit au moins une fois par an : <em>&laquo; combien vous rapportez vraiment ? &raquo;</em>. Voici la reponse structuree, chiffrable, defendable en 1 slide.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="probleme" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pourquoi la question est piegeuse</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le ROI du RevOps est <strong>structurellement difficile a calculer</strong> parce que sa contribution est indirecte : il ne genere pas de pipeline (c&apos;est Sales), pas de leads (c&apos;est Marketing), pas de retention directe (c&apos;est CS). Il <em>multiplie</em> l&apos;efficacite de ces fonctions.</p>
                  <p>Resultat : beaucoup de RevOps Manager defendent leur budget avec des metriques de output (NPS interne, nb de dashboards, etc.) qui ne parlent pas au CFO. Et perdent le budget annee apres annee.</p>
                  <p>La methode qui marche : ramener tout a 4 leviers chiffrables qui touchent directement le revenue ou le cost.</p>
                </div>
              </div></section>
              <Connector />

              <section id="4-leviers" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 4 leviers ROI du RevOps</h2>
                <div className="space-y-4">
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">1. Pipeline coverage ameliore</p>
                    <p className="text-[12px] text-[#777] leading-[1.65] mb-2">Plus de pipeline qualifie en sortie de marketing &rarr; plus de deals fermes a win rate constant.</p>
                    <p className="text-[11px] font-mono text-[#999]">Impact = (Pipeline +%) &times; Win rate &times; ACV moyen</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">2. Sales cycle reduction</p>
                    <p className="text-[12px] text-[#777] leading-[1.65] mb-2">Cycle plus court &rarr; plus de cycles dans l&apos;annee &rarr; plus de revenue genere par AE.</p>
                    <p className="text-[11px] font-mono text-[#999]">Impact = ARR par AE &times; (1 / (1 - reduction cycle %))</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">3. NRR / retention</p>
                    <p className="text-[12px] text-[#777] leading-[1.65] mb-2">Detection precoce churn + expansion automatisee &rarr; NRR +5 a +15 pts typiquement.</p>
                    <p className="text-[11px] font-mono text-[#999]">Impact = ARR &times; (NRR nouveau - NRR ancien)%</p>
                  </div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-1">4. Productivite des equipes (cost saving)</p>
                    <p className="text-[12px] text-[#777] leading-[1.65] mb-2">Automation reporting, lead routing, qualification &rarr; temps libere = capacite a generer plus, ou recrutement evite.</p>
                    <p className="text-[11px] font-mono text-[#999]">Impact = heures economisees &times; cout horaire equipe + headcount evite</p>
                  </div>
                </div>
              </div></section>
              <Connector />

              <section id="formule" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">La formule ROI RevOps</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Une fois les 4 leviers chiffres, la formule simple :</p>
                </div>
                <pre className="bg-[#0A0A0A] text-[#E5E7EB] rounded-lg p-4 text-[12px] leading-[1.55] overflow-x-auto mt-4"><code>{`ROI RevOps = (Impact L1 + L2 + L3 + L4) / Cout total RevOps

Ou Cout total = salaires equipe RevOps
              + outils (CRM, BI, automation, IA)
              + agences externes / consultants
              + opportunity cost transitoire`}</code></pre>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mt-4">
                  <p>Benchmark : un ROI RevOps mature affiche un ratio <strong>5 a 12x</strong> sur 12 mois. En-dessous de 3x, soit le scope est mal calibre, soit le RevOps est sous-utilise.</p>
                </div>
              </div></section>
              <Connector />

              <section id="exemple" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Exemple chiffre (scale-up 30M ARR)</h2>
                <p className="text-[13px] text-[#555] leading-[1.75] mb-4">Profil type : SaaS B2B, 50 commerciaux, 30M ARR, NRR 105%, sales cycle 70 jours.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Levier</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Avant</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Apres</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Impact annuel</th></tr></thead>
                    <tbody className="text-[#555]">
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Pipeline coverage</td><td className="p-3 border-b border-[#F2F2F2]">2.5x</td><td className="p-3 border-b border-[#F2F2F2]">3.6x</td><td className="p-3 border-b border-[#F2F2F2]">+ 4.2M ARR</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Sales cycle</td><td className="p-3 border-b border-[#F2F2F2]">70 j</td><td className="p-3 border-b border-[#F2F2F2]">52 j</td><td className="p-3 border-b border-[#F2F2F2]">+ 2.1M ARR</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">NRR</td><td className="p-3 border-b border-[#F2F2F2]">105%</td><td className="p-3 border-b border-[#F2F2F2]">113%</td><td className="p-3 border-b border-[#F2F2F2]">+ 2.4M ARR</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Heures reporting hebdo</td><td className="p-3 border-b border-[#F2F2F2]">12 h</td><td className="p-3 border-b border-[#F2F2F2]">2 h</td><td className="p-3 border-b border-[#F2F2F2]">- 80 k EUR cost</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]"><strong>Total impact</strong></td><td className="p-3 border-b border-[#F2F2F2]" colSpan={2}></td><td className="p-3 border-b border-[#F2F2F2]"><strong>~8.8M EUR/an</strong></td></tr>
                      <tr><td className="p-3 font-medium text-[#111]"><strong>Cout RevOps</strong></td><td className="p-3" colSpan={2}>2 ETP + outils + agence</td><td className="p-3"><strong>~480 k EUR</strong></td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]"><strong className="text-white">ROI = 8.8M / 480k = 18x</strong>. Largement au-dessus du benchmark de 5-12x parce que la base de depart etait peu mature.</p></div>
              </div></section>
              <Connector />

              <section id="slide" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le slide pour le board (1 page)</h2>
                <p className="text-[13px] text-[#555] leading-[1.75] mb-4">Structure recommandee :</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[13px] text-[#555] leading-[1.75]">
                  <li><strong>Titre :</strong> &laquo; RevOps Impact - FY2026 &raquo;</li>
                  <li><strong>1 grand chiffre :</strong> ROI multiplier (ex. 18x)</li>
                  <li><strong>Tableau 4 lignes :</strong> les 4 leviers avec Avant / Apres / Impact EUR</li>
                  <li><strong>1 ligne cout :</strong> total RevOps spend</li>
                  <li><strong>1 paragraphe contexte :</strong> 2 phrases sur le scope (ce qui n&apos;est PAS compte dans le ROI)</li>
                  <li><strong>1 ligne &laquo; what&apos;s next &raquo; :</strong> les 2-3 chantiers de l&apos;annee suivante avec impact attendu</li>
                </ul>
                <p className="text-[13px] text-[#555] leading-[1.75] mt-4">A presenter en 5 min max. Le board ne veut pas comprendre comment c&apos;est calcule, il veut savoir si le budget est justifie.</p>
              </div></section>
              <Connector />

              <section id="pieges" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">5 pieges a eviter dans le calcul</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Double-counter avec Sales/Marketing</p><p className="text-[12px] text-[#777] leading-[1.65]">Si le pipeline ameliore est deja compte dans le revenue Sales/Marketing, ton ROI RevOps fait double emploi. Solution : attribuer un % de l&apos;amelioration au RevOps (ex 30%) et explicitement le mentionner.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Confondre output et outcome</p><p className="text-[12px] text-[#777] leading-[1.65]">&laquo; J&apos;ai cree 12 dashboards &raquo; = output. &laquo; Le forecast accuracy est passe de 35% a 88% &raquo; = outcome. Ne presente que des outcomes au board.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Annualiser un point-in-time</p><p className="text-[12px] text-[#777] leading-[1.65]">Le pipeline coverage est mesure a une date donnee. L&apos;annualiser sans nuance fait sur-estimer. Utilise la moyenne sur 12 mois.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Ignorer la learning curve</p><p className="text-[12px] text-[#777] leading-[1.65]">Les 3 premiers mois d&apos;une initiative RevOps n&apos;ont pas le meme impact que le mois 12. Etale tes gains et explicite-le.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Vendre un ROI &laquo; trop bon &raquo;</p><p className="text-[12px] text-[#777] leading-[1.65]">Au-dela de 20x, le board te demandera pourquoi vous ne mettez pas plus d&apos;argent dedans (et il aura raison). Etre credible vaut mieux qu&apos;etre flatteur.</p></div>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Construire votre business case RevOps ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour chiffrer l&apos;impact RevOps potentiel sur ton contexte specifique.</p>
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
