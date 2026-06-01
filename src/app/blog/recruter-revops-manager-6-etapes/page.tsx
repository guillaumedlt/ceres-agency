"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment recruter un RevOps Manager : guide 6 etapes pour CRO et founders",
  description: "Recruter son premier RevOps Manager en 2026 : fiche de poste, profils a chercher, questions d'entretien, salaire, signaux d'alerte. Guide pratique pour CROs et founders B2B.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/recruter-revops-manager-6-etapes" },
  articleSection: "Recrutement RevOps",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "quand-recruter", title: "Quand recruter (et quand pas)" },
  { id: "etape-1", title: "1. Definir le scope reel" },
  { id: "etape-2", title: "2. Ecrire la fiche de poste" },
  { id: "etape-3", title: "3. Sourcer les bons profils" },
  { id: "etape-4", title: "4. Entretien : les bonnes questions" },
  { id: "etape-5", title: "5. Test technique pragmatique" },
  { id: "etape-6", title: "6. Onboarding 90 jours" },
  { id: "signaux", title: "Signaux d'alerte a eviter" },
];

const relatedArticles = [
  { title: "Sales Ops Manager : fiche metier", slug: "../metier/sales-ops-manager", category: "Fiche metier", color: "#FF7A59" },
  { title: "RevOps Director : fiche metier", slug: "../metier/revops-director", category: "Fiche metier", color: "#4B5EFC" },
  { title: "Externaliser le RevOps", slug: "../externaliser-revops", category: "Service", color: "#6D00CC" },
];

export default function RecruterRevopsManagerArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("quand-recruter");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) {
        const el = els[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "35%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "65%", width: 260, height: 260, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">Recruter un RevOps Manager</span></nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Recrutement RevOps</Badge><span className="text-[11px] text-[#CCC]">12 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">Comment recruter un RevOps Manager : guide 6 etapes</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Le titre VP RevOps a cru de +300% en 18 mois (Pavilion 2026). Tout le monde veut recruter, peu savent comment. Voici la methode qu&apos;on applique aux scale-ups qu&apos;on accompagne.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="quand-recruter" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Quand recruter (et quand surtout pas)</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Recruter un RevOps Manager trop tot, c&apos;est gacher 80k EUR de salaire et frustrer un excellent profil. Trop tard, c&apos;est perdre 12-18 mois de croissance optimisable.</p>
                  <p><strong>Recrute maintenant si :</strong></p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Tu as 15+ commerciaux (Sales + SDR + AE confondus)</li>
                    <li>Tu fais 3M+ ARR avec un cycle de vente predictible</li>
                    <li>Ton VP Sales et ton CMO ne sont plus alignes sur les memes metriques</li>
                    <li>Tu passes plus de 2 jours par mois en reporting manuel pour le board</li>
                    <li>Ton CRM est devenu un mess et personne ne fait l&apos;arbitrage</li>
                  </ul>
                  <p><strong>Attend encore si :</strong></p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Moins de 10 commerciaux : un Sales Ops Junior suffit, ou externalise temporairement</li>
                    <li>Moins de 2M ARR : focus product-market fit, pas RevOps formalise</li>
                    <li>Tu n&apos;as pas de VP Sales / VP Marketing : recrute eux d&apos;abord</li>
                  </ul>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">Alternative quand tu hesites : passe par un RevOps externalise (3-6 mois) pour mettre la stack en place, puis recrute interne quand le travail recurrent depasse 60% du temps.</p></div>
              </div></section>
              <Connector />

              <section id="etape-1" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">01</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Definir le scope reel du poste</h2></div>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Erreur n.1 : la fiche de poste &laquo; RevOps Manager generaliste &raquo;. Ca n&apos;existe pas. Avant de poster, decide quel <em>flavor</em> tu cherches :</p>
                  <div className="space-y-3 mt-4">
                    <div className="rounded-xl border-l-[3px] border-[#FF7A59] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Le profil Sales Ops</p><p className="text-[12px] text-[#777] leading-[1.65]">Pipeline, forecast, quotas, sales enablement, CRM cote sales. Si ton VP Sales est ton principal &laquo; client &raquo; interne, c&apos;est ce profil.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#4B5EFC] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Le profil Marketing Ops</p><p className="text-[12px] text-[#777] leading-[1.65]">MAP, attribution, lead scoring, lifecycle marketing, segmentation. Si ton CMO porte plus de leads, c&apos;est ce profil.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#22C55E] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Le profil RevOps Architect</p><p className="text-[12px] text-[#777] leading-[1.65]">Data layer, integrations, governance, automations cross-equipes. Si ton probleme c&apos;est le bordel de la stack, c&apos;est ce profil.</p></div>
                    <div className="rounded-xl border-l-[3px] border-[#6D00CC] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Le profil RevOps Analyst</p><p className="text-[12px] text-[#777] leading-[1.65]">Dashboards, modeling, predictions, reporting executif. Si ton probleme c&apos;est la visibilite revenue, c&apos;est ce profil.</p></div>
                  </div>
                </div>
              </div></section>
              <Connector />

              <section id="etape-2" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">02</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Ecrire la fiche de poste qui attire</h2></div>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Les fiches de poste RevOps sur LinkedIn se ressemblent toutes : &laquo; pilote du revenue engine, optimise les processus, aligne les equipes &raquo;. Resultat : tu attires que les profils en recherche passive.</p>
                  <p>Pour ressortir, mets 3 elements concrets dans ta fiche :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Le projet phare des 6 premiers mois</strong> : &laquo; Refondre le scoring lead pour passer de 3% a 11% de taux de reponse cold &raquo; vaut 100x mieux que &laquo; ameliorer les processus &raquo;.</li>
                    <li><strong>Le stack technique reel</strong> : HubSpot Enterprise, Clay, Lemlist, BigQuery, Make. Les profils RevOps regardent l&apos;outillage AVANT le salaire.</li>
                    <li><strong>L&apos;equipe et le reporting</strong> : a qui rapporte le poste ? Solo ? Avec un analyst ? Sous le CRO ou directement CEO ?</li>
                  </ul>
                  <p>Le titre du poste compte aussi : &laquo; Senior Sales Ops Manager &raquo; attire moins que &laquo; First RevOps Hire &raquo; pour un mid-senior qui veut construire.</p>
                </div>
              </div></section>
              <Connector />

              <section id="etape-3" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">03</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Sourcer les bons profils</h2></div>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>3 sources qui marchent en 2026 pour les profils RevOps en France :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Communautes RevOps</strong> : Pavilion (US/EU, payant), Modern Sales Pros, RevOps Co-op, Operations Network France. Beaucoup de profils en watchful waiting.</li>
                    <li><strong>LinkedIn Sales Navigator filtrage par titre</strong> : &laquo; Sales Operations &raquo; / &laquo; Revenue Operations &raquo; / &laquo; Sales Ops Manager &raquo; avec 3-5 ans d&apos;experience B2B SaaS. Filtre sur 30-50 km de ta ville.</li>
                    <li><strong>Reseaux internes</strong> : demande a tes commerciaux qui ils ont vu performer chez leurs ex-employeurs (Spendesk, Qonto, Alan, Lemlist, Modjo, etc.). 50% des recrutements RevOps reussis passent par referral.</li>
                  </ul>
                  <p>Eviter : les chasseurs de tete generalistes. Ils ne comprennent pas le poste et te rament des Sales Operations classiques au lieu de profils RevOps.</p>
                </div>
              </div></section>
              <Connector />

              <section id="etape-4" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">04</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Entretien : les bonnes questions a poser</h2></div>
                <p className="text-[13px] text-[#555] leading-[1.75] mb-5">10 questions qui filtrent en moins de 60 min :</p>
                <div className="space-y-2.5">
                  {[
                    "Decris ton dernier projet ou tu as ameliore le forecast accuracy. Resultat chiffre avant/apres ?",
                    "Comment tu setup un lead scoring qui marche ? Decris les 5 premieres regles que tu mets en place.",
                    "Tu arrives chez nous, ton CRM HubSpot a 30% de doublons. Comment tu attaques ce probleme en S1 ?",
                    "Comment tu calcules un pipeline coverage credible ? Quels biais a eviter ?",
                    "Quel(s) outils tu installerais avec un budget de 2000 EUR/mois pour 50 commerciaux ?",
                    "Comment tu fais buy-in d'un VP Sales hostile au changement de process ?",
                    "Dis-moi 3 KPIs RevOps que tu trackes en weekly et pourquoi.",
                    "Tu as 1h avec le CEO pour presenter l'etat du revenue engine. Tu montres quoi ?",
                    "Quelle est ta vision sur MCP, agents IA et leur place en RevOps ?",
                    "Quel a ete ton plus gros echec RevOps ? Qu'as-tu appris ?",
                  ].map((q, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-3">
                      <span className="font-mono text-[11px] text-[#FF7A59] font-bold shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-[12px] text-[#555] leading-[1.55]">{q}</p>
                    </div>
                  ))}
                </div>
              </div></section>
              <Connector />

              <section id="etape-5" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">05</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Test technique pragmatique (90 min max)</h2></div>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Pas de devoir maison de 8h, ca filtre les meilleurs profils qui partent. Mais un test rapide est obligatoire.</p>
                  <p><strong>Format recommande</strong> : 90 min en live avec data dummy. Tu donnes :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Un export CSV de 500 leads (ICP + scoring brut + lifecycle stage)</li>
                    <li>Un export CSV de 200 deals fermes (won/lost) sur 6 mois</li>
                    <li>Une description en 1 page de ton modele commercial</li>
                  </ul>
                  <p>Tu demandes : &laquo; En 90 minutes, identifie les 3 quick wins RevOps que tu deploierais en S1, avec metric d&apos;impact estime. &raquo;</p>
                  <p>Ce que tu evalues : capacite a prioriser (vs vouloir tout faire), pragmatisme du chiffrage, qualite des questions clarification posees au depart.</p>
                </div>
              </div></section>
              <Connector />

              <section id="etape-6" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">06</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Onboarding 90 jours du RevOps Manager</h2></div>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Ne lui demande pas de produire avant J60. Ses 90 premiers jours sont de l&apos;observation et du diagnostic.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>J1-J30 : Listen tour</strong>. 1:1 avec tous les commerciaux, marketers, CS. Audit du CRM. Cartographie de la stack actuelle. Pas de decision majeure.</li>
                    <li><strong>J31-J60 : Diagnostic shareable</strong>. Document 10 pages : etat des lieux, top 5 problemes, recommandations priorisees, score RevOps. Partage avec CEO + leaders.</li>
                    <li><strong>J61-J90 : Premier quick win deploye</strong>. Un seul chantier visible, deploye, mesurable. Pas 5 chantiers parallel. La credibilite se construit la.</li>
                  </ul>
                </div>
              </div></section>
              <Connector />

              <section id="signaux" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">5 signaux d&apos;alerte chez un candidat</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Ne parle qu&apos;en frameworks (MEDDIC, BANT, OKR) sans cas concret</p><p className="text-[12px] text-[#777] leading-[1.65]">Bon RevOps connait les frameworks mais en parle pour decrire des situations precises, pas comme du jargon.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Veut deployer 10 outils en S1</p><p className="text-[12px] text-[#777] leading-[1.65]">Signal de junior. Le bon RevOps veut d&apos;abord auditer et stabiliser avant d&apos;ajouter.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Ne sait pas lire un dashboard sans Tableau / Looker</p><p className="text-[12px] text-[#777] leading-[1.65]">Doit savoir extraire des insights bruts d&apos;un CSV ou d&apos;un export CRM. Si dependant outils, juniors deguise.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Pas curieux sur l&apos;IA / MCP en 2026</p><p className="text-[12px] text-[#777] leading-[1.65]">A retardement. Le RevOps moderne integre l&apos;IA dans sa pratique quotidienne.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Conflit-aversive avec les Sales</p><p className="text-[12px] text-[#777] leading-[1.65]">Le RevOps va devoir challenge les VP Sales sur leurs forecasts. S&apos;il fuit le desaccord, il n&apos;aura aucun impact.</p></div>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pas pret a recruter ? On t&apos;accompagne en interim.</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour discuter du timing de ton recrutement RevOps et des alternatives (externalise, fractional, freelance).</p>
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
