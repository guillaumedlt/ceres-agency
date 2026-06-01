"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "RevOps externalise vs internalise : decision CRO en 2026",
  description: "Externaliser ou internaliser son RevOps en 2026 ? Criteres de decision pour CRO et founders, modele hybride recommande, signaux de bascule.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/revops-externalise-vs-internalise-cro" },
  articleSection: "Strategie RevOps", wordCount: 2000, inLanguage: "fr",
};

const sections = [
  { id: "fausse-dichotomie", title: "Fausse dichotomie" },
  { id: "tableau", title: "Tableau comparatif" },
  { id: "quand-externalise", title: "Quand externaliser" },
  { id: "quand-internalise", title: "Quand internaliser" },
  { id: "hybride", title: "Le modele hybride" },
  { id: "signaux", title: "Signaux de bascule" },
];

const compTable = [
  { critere: "Cout mensuel", ext: "4-12 k EUR (1-2 j/sem)", int: "7-15 k EUR + charges (full-time)" },
  { critere: "Vitesse de demarrage", ext: "1-2 semaines", int: "2-6 mois recrutement + onboarding" },
  { critere: "Niveau d'expertise", ext: "Senior dedie + retex 50+ projets", int: "Varie selon recrutement" },
  { critere: "Disponibilite", ext: "Plages dediees", int: "100 % mais focus disperse" },
  { critere: "Sortie / changement", ext: "Preavis 30 j", int: "Recrutement remplacement 3-6 mois" },
  { critere: "Onboarding contexte", ext: "Court mais limite", int: "Long mais profond" },
  { critere: "Connaissance interne", ext: "Indirect", int: "Direct au quotidien" },
  { critere: "Scalabilite", ext: "+/- j/semaine selon besoin", int: "Coute un nouveau headcount" },
];

const relatedArticles = [
  { title: "Externaliser RevOps : notre offre", slug: "../externaliser-revops", category: "Service", color: "#FF7A59" },
  { title: "Comment recruter un RevOps Manager", slug: "recruter-revops-manager-6-etapes", category: "Recrutement", color: "#4B5EFC" },
  { title: "Structurer une equipe RevOps", slug: "structurer-equipe-revops", category: "Strategie RevOps", color: "#6D00CC" },
];

export default function RevopsExtVsIntArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("fausse-dichotomie");
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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">RevOps externalise vs internalise</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Strategie RevOps</Badge><span className="text-[11px] text-[#CCC]">10 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">RevOps externalise vs internalise : la decision CRO en 2026</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">La question que tout CRO/founder se pose. Decision honnete par une agence qui fait les deux (et qui te dit quand c&apos;est NOTRE moment de partir).</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="fausse-dichotomie" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">La fausse dichotomie</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>La question telle qu&apos;elle est generalement posee &laquo; externalise ou pas &raquo; est trop binaire. Sur 250+ missions, on voit 4 vrais cas de figure :</p>
                  <ol className="list-decimal pl-5 space-y-1.5">
                    <li><strong>Externalise full</strong> : 1-2 j/sem avec une agence + 0 interne. Pour startups 10-50 personnes.</li>
                    <li><strong>Hybride accompagne</strong> : 1 j/sem agence + 1 RevOps junior interne. Pour scale-ups 50-200 personnes.</li>
                    <li><strong>Internalise avec spike consulting</strong> : 1+ RevOps interne + agence ponctuelle pour chantiers complexes. Pour scale-ups 200-500.</li>
                    <li><strong>Internalise full</strong> : equipe RevOps complete interne. Pour enterprises 500+.</li>
                  </ol>
                  <p>La vraie question : <strong>a quel stade es-tu, et quel pattern correspond ?</strong></p>
                </div>
              </div></section>
              <Connector />

              <section id="tableau" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Tableau comparatif</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Critere</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Externalise</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Internalise</th></tr></thead>
                    <tbody className="text-[#555]">{compTable.map((row) => (<tr key={row.critere}><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">{row.critere}</td><td className="p-3 border-b border-[#F2F2F2]">{row.ext}</td><td className="p-3 border-b border-[#F2F2F2]">{row.int}</td></tr>))}</tbody>
                  </table>
                </div>
              </div></section>
              <Connector />

              <section id="quand-externalise" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Quand externaliser fait sens</h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <li>Tu es scale-up Serie A (3-15M ARR) sans RevOps interne</li>
                  <li>Tu veux avancer vite (semaines pas mois)</li>
                  <li>Tu as un budget contraint - pas le luxe d&apos;un fail recrutement a 90k EUR</li>
                  <li>Tu n&apos;es pas certain d&apos;avoir le volume de travail pour un full-time</li>
                  <li>Tu veux beneficier d&apos;une expertise multi-projets (250+ missions Ceres = patterns vus partout)</li>
                  <li>Tu veux pouvoir scaler up/down selon le besoin saisonnier</li>
                </ul>
              </div></section>
              <Connector />

              <section id="quand-internalise" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Quand internaliser fait sens</h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <li>Tu es scale-up Serie B+ (15M+ ARR) avec equipe ops mature</li>
                  <li>Le travail RevOps depasse clairement 60% d&apos;un ETP a temps plein</li>
                  <li>Tu as une connaissance metier complexe que l&apos;agence ne peut pas absorber</li>
                  <li>Tu veux developper la capacite en interne pour le long terme (3-5 ans)</li>
                  <li>Tu as les fonds pour absorber 6 mois de recrutement + 3 mois d&apos;onboarding</li>
                  <li>Tu as un VP Sales/CRO disponible pour bien le briefer et l&apos;onboarder</li>
                </ul>
              </div></section>
              <Connector />

              <section id="hybride" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le modele hybride qu&apos;on recommande</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Pour 70 % des scale-ups B2B en France, le bon modele est <strong>hybride en 2 phases</strong> :</p>
                  <p><strong>Phase 1 (premiers 6-12 mois)</strong> : RevOps externalise 1-2 j/sem. L&apos;agence pose les fondations (process, CRM, scoring, dashboards, automations). Pendant ce temps, tu recrutes un RevOps Manager junior/confirme (3-5 ans d&apos;exp).</p>
                  <p><strong>Phase 2 (mois 6-24)</strong> : Le RevOps interne onboarde sur ce qui est en place. L&apos;agence passe a 0.5 j/sem en mode &laquo; sounding board &raquo; + chantiers complexes ponctuels. Le RevOps interne devient autonome a 12-18 mois.</p>
                  <p><strong>Phase 3 (24+ mois)</strong> : RevOps interne autonome, agence sur demande pour des sujets specifiques (migration CRM, deploiement IA, refonte). 5-10 jours par an typiquement.</p>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]"><strong className="text-white">La regle d&apos;or :</strong> une agence RevOps doit reduire son investissement avec le temps, pas l&apos;augmenter. Si ton agence essaie de t&apos;enferrer dans une dependance permanente, ce n&apos;est pas la bonne.</p></div>
              </div></section>
              <Connector />

              <section id="signaux" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">5 signaux qu&apos;il est temps de basculer vers l&apos;interne</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">1. Le travail recurrent depasse 60% des j/sem agence</p><p className="text-[12px] text-[#777] leading-[1.65]">Si on passe nos jours en maintenance plus qu&apos;en projet, c&apos;est qu&apos;un interne devrait le faire.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">2. La connaissance interne devient un bottleneck</p><p className="text-[12px] text-[#777] leading-[1.65]">L&apos;agence pose des questions sur le metier, le produit, les clients qu&apos;elle devrait connaitre par coeur. Signe qu&apos;un interne irait plus vite.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">3. Tu as plus de 15M ARR</p><p className="text-[12px] text-[#777] leading-[1.65]">A ce stade, le ROI d&apos;un RevOps interne depasse largement l&apos;agence. Garde l&apos;agence en mode consulting ponctuel.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">4. Tu prepares une fundraise Series B+</p><p className="text-[12px] text-[#777] leading-[1.65]">Les VC valorisent les boites qui ont structure leur RevOps en interne. Argument de cession ou d&apos;evaluation.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">5. L&apos;agence elle-meme te dit qu&apos;il est temps</p><p className="text-[12px] text-[#777] leading-[1.65]">Si elle est honnete (et la notre l&apos;est), elle te le dira. Notre meilleure mission c&apos;est celle ou le client devient autonome.</p></div>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Vous hesitez sur externalise vs internalise ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour evaluer ton stade et te recommander le bon modele - meme si c&apos;est interne et qu&apos;on perd le deal.</p>
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
