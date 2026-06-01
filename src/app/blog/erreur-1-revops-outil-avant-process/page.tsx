"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "L'erreur #1 des founders en RevOps : penser outil avant process",
  description: "L'erreur que font 80% des founders early-stage : acheter HubSpot Enterprise ou Salesforce avant d'avoir un process commercial. Pourquoi c'est un piege et la sequence correcte.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/erreur-1-revops-outil-avant-process" },
  articleSection: "Opinion RevOps", wordCount: 1900, inLanguage: "fr",
};

const sections = [
  { id: "constat", title: "Le constat" },
  { id: "pourquoi-erreur", title: "Pourquoi c'est une erreur" },
  { id: "sequence", title: "La sequence correcte" },
  { id: "cas-concret", title: "Cas concret" },
  { id: "objections", title: "Les objections classiques" },
];

const relatedArticles = [
  { title: "Process Data IA : pourquoi l'ordre compte", slug: "process-data-ia-ordre-revops", category: "Strategie RevOps", color: "#FF7A59" },
  { title: "RevOps pour startups : par ou commencer", slug: "revops-startups-par-ou-commencer", category: "Strategie RevOps", color: "#4B5EFC" },
  { title: "Audit RevOps : checklist complete", slug: "audit-revops-checklist-complete", category: "Methodologie", color: "#6D00CC" },
];

export default function ErreurRevopsArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("constat");
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
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#EF4444] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#EF4444", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#EF4444] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">Erreur #1 RevOps founders</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Opinion RevOps</Badge><span className="text-[11px] text-[#CCC]">9 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">L&apos;erreur #1 des founders en RevOps : penser outil avant process</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Tous les six mois, on recoit un founder qui veut &laquo; un audit HubSpot pour fixer notre RevOps &raquo;. 80 % du temps, le probleme n&apos;est pas HubSpot. Le probleme est qu&apos;il n&apos;y avait pas de process avant.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="constat" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le constat</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Scenario typique. Founder d&apos;une scale-up Serie A, 3M ARR, 8 commerciaux. Levee fraiche, decide de &laquo; structurer le RevOps &raquo;. Premiere action : achete HubSpot Pro 100 EUR/user/mois, signe avec un integrator a 40k EUR. Six mois plus tard : <strong>l&apos;outil est la, le chaos aussi</strong>.</p>
                  <p>Les symptomes :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Les commerciaux ont chacun leur facon d&apos;utiliser le CRM, parfois 30% des deals manquants car ils preferent Excel</li>
                    <li>Le forecast est toujours au doigt</li>
                    <li>Personne ne sait ce qu&apos;est un MQL vs un SQL chez vous</li>
                    <li>Les workflows tournent dans le vide parce que la donnee CRM est sale</li>
                    <li>40k EUR depenses, ROI = 0</li>
                  </ul>
                  <p>L&apos;erreur fondamentale : avoir cru qu&apos;acheter un CRM equivalait a structurer le RevOps.</p>
                </div>
              </div></section>
              <Connector />

              <section id="pourquoi-erreur" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pourquoi c&apos;est une erreur structurelle</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Un CRM (ou n&apos;importe quel outil RevOps) est un <strong>amplificateur</strong>. Pas un fondateur. Pas un createur d&apos;ordre.</p>
                  <p>Si tu as un process commercial clair :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Stages definis + criteria objective</li>
                    <li>SLA marketing-sales explicite</li>
                    <li>Definition ICP partagee</li>
                    <li>Lead scoring documente</li>
                  </ul>
                  <p>...alors un CRM va <strong>amplifier</strong> ce process et faire des miracles.</p>
                  <p>Si tu n&apos;as pas ce process et que tu achetes le CRM, il va <strong>amplifier le chaos</strong>. Chacun va l&apos;utiliser differemment, les workflows seront brises par la donnee sale, le reporting sera mensonger.</p>
                  <p>La regle simple : <strong>process &times; outil = resultat</strong>. Multiplie zero par n&apos;importe quoi, tu obtiens zero.</p>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">Cette erreur est <em>encouragee</em> par les editeurs CRM et les agences integrators qui ont interet a vendre l&apos;outil. C&apos;est plus rapide a vendre, et le client est content sur le moment. La verite : tu peux faire 80% du job avec un Notion + un Sheet bien structures avant d&apos;avoir besoin d&apos;HubSpot.</p></div>
              </div></section>
              <Connector />

              <section id="sequence" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">La sequence correcte</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Voici l&apos;ordre des operations qu&apos;on applique chez nos clients :</p>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Etape 1 : Definir le process (1-2 semaines)</p><p className="text-[12px] text-[#777] leading-[1.65]">ICP, buyer personas, stages du funnel avec criteria, SLA marketing-sales, definitions MQL/SQL, rituels d&apos;alignement. Documente dans Notion. Ca prend 2 semaines max.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Etape 2 : Faire tourner le process en outil minimal (4-8 semaines)</p><p className="text-[12px] text-[#777] leading-[1.65]">Spreadsheet + Notion. Oui, c&apos;est cradingue. Oui, ca marche. Tu valides que le process fonctionne, tu ajustes en S1-S4, tu stabilises en S5-S8.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Etape 3 : Choisir le CRM adapte au process (1-2 semaines)</p><p className="text-[12px] text-[#777] leading-[1.65]">Maintenant que tu sais ce que tu fais, tu choisis le CRM qui matche. Pas Salesforce parce que &laquo; les VC adorent &raquo;. Le CRM qui colle a ton modele commercial. Attio pour startup, HubSpot pour Hybrid B2B, Salesforce pour enterprise.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Etape 4 : Migration documentee (2-4 semaines)</p><p className="text-[12px] text-[#777] leading-[1.65]">Transfert du Sheet + Notion vers le CRM choisi. Configuration des workflows, scoring, dashboards. C&apos;est la qu&apos;un integrator vaut son cout - mais sur 2-4 semaines pas 6 mois.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Etape 5 : Amplification (6-12 mois)</p><p className="text-[12px] text-[#777] leading-[1.65]">Maintenant que le CRM colle au process qui colle au business, on peut amplifier : automations avancees, IA, MCP, dashboards executifs. ROI explose parce que les fondations tiennent.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="cas-concret" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Cas concret : 2 scale-ups au meme stade</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Deux clients qu&apos;on a accompagnes en parallel, meme taille (3M ARR, 8 commerciaux), demarche opposee :</p>
                  <p><strong>Boite A</strong> : achete HubSpot Pro + integrator a 40k EUR direct. 6 mois plus tard, nous appelle. Audit : process inexistant. On a du tout refaire : process en S1-S4 puis re-configurer HubSpot en S5-S8. Cout total : 40k + 35k = 75k EUR. 8 mois perdus.</p>
                  <p><strong>Boite B</strong> : suit la sequence correcte. Process en 3 semaines, Sheet + Notion 6 semaines, HubSpot Starter (gratuit) en autonomie sur 4 semaines, puis migration HubSpot Pro avec nous en 3 semaines une fois maturite. Cout total : 18k EUR. 4 mois total. Et le process tient sous pression.</p>
                  <p>Resultat operationnel 12 mois plus tard : la Boite B a fait <strong>+45% ARR vs +18%</strong> pour la Boite A. Meme produit, meme marche, meme equipe taille. Difference : la sequence.</p>
                </div>
              </div></section>
              <Connector />

              <section id="objections" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 3 objections classiques</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">&laquo; Un Sheet c&apos;est ringard, on est une boite tech &raquo;</p><p className="text-[12px] text-[#777] leading-[1.65]">L&apos;ego ne fait pas l&apos;ARR. Les meilleures scale-ups que je connais ont demarre sur Sheet + Notion, certaines y sont restees jusqu&apos;a 8-10M ARR. Stripe a tourne longtemps sur des Google Sheets internes.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">&laquo; Mes commerciaux ne vont pas accepter le Sheet &raquo;</p><p className="text-[12px] text-[#777] leading-[1.65]">Tes commerciaux n&apos;acceptent pas le Sheet parce qu&apos;ils n&apos;acceptent pas le process. Le probleme n&apos;est pas l&apos;outil. Force le process, peu importe l&apos;outil, et ceux qui refusent partent.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">&laquo; On va perdre du temps a tout migrer apres &raquo;</p><p className="text-[12px] text-[#777] leading-[1.65]">Migrer 200 contacts et 50 deals d&apos;un Sheet vers HubSpot prend une apres-midi. Migrer un HubSpot mal configure vers un HubSpot bien configure prend 2-3 mois. Tu paies 100x plus cher la mauvaise sequence.</p></div>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Vous pensez investir dans un CRM ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour evaluer si tu es pret pour un CRM, ou si tu dois d&apos;abord poser le process. Honnete, meme si on perd le deal.</p>
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
