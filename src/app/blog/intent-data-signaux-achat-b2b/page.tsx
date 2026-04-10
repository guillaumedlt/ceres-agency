"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Intent data : exploiter les signaux d'achat B2B en 2026",
  description: "Guide complet sur l'intent data B2B : types de donnees, outils (Bombora, 6sense, G2, Koala), integration CRM, scoring, ABM et conformite RGPD. Methode actionnable.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/intent-data-signaux-achat-b2b" },
  articleSection: "RevOps",
  wordCount: 3500,
  inLanguage: "fr",
};

const sections = [
  { id: "definition", title: "Definition intent data" },
  { id: "types", title: "Types de donnees" },
  { id: "sources", title: "Sources de signaux" },
  { id: "outils", title: "Comparatif outils" },
  { id: "crm-integration", title: "Integration CRM" },
  { id: "scoring", title: "Modele de scoring" },
  { id: "outbound", title: "Cas outbound" },
  { id: "abm", title: "Strategie ABM" },
  { id: "rgpd", title: "RGPD et conformite" },
  { id: "roi", title: "Mesurer le ROI" },
  { id: "implementation", title: "Guide implementation" },
];

const relatedArticles = [
  { title: "Lead scoring : guide complet", slug: "lead-scoring-guide-complet", category: "RevOps", color: "#FF7A59" },
  { title: "Account-Based Marketing : le guide", slug: "account-based-marketing-guide", category: "RevOps", color: "#4B5EFC" },
  { title: "Metriques RevOps : indicateurs de performance", slug: "metriques-revops-indicateurs-performance", category: "RevOps", color: "#22C55E" },
];

export default function IntentDataSignauxAchatB2bArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("definition");

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

      {/* Decorative blobs */}
      <div className="hidden lg:block absolute top-[120px] left-[-180px] w-[400px] h-[400px] rounded-full bg-[#FF7A59]/[0.03] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-[600px] right-[-200px] w-[350px] h-[350px] rounded-full bg-[#4B5EFC]/[0.03] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-[1200px] left-[-150px] w-[300px] h-[300px] rounded-full bg-[#22C55E]/[0.03] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-[1800px] right-[-180px] w-[350px] h-[350px] rounded-full bg-[#FF7A59]/[0.03] blur-3xl pointer-events-none" />

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
                  <a href="https://twitter.com/intent/tweet?text=Intent%20data%20signaux%20achat%20B2B&url=https://ceres.agency/blog/intent-data-signaux-achat-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/intent-data-signaux-achat-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Intent data B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">25 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Intent data : exploiter les signaux d&apos;achat B2B
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                L&apos;intent data (donnees d&apos;intention) permet d&apos;identifier les entreprises qui recherchent activement une solution comme la votre, avant meme qu&apos;elles ne vous contactent. En combinant signaux first-party, second-party et third-party, vous pouvez prioriser les bons comptes, declencher des actions outbound au bon moment et alimenter vos campagnes ABM avec une precision inedite. Ce guide couvre la theorie, les outils et la mise en pratique.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>29 mars 2026</span>
              </div>
            </header>

            <article>
              {/* ================================================================ */}
              {/* Section 1 : Definition */}
              {/* ================================================================ */}
              <section id="definition" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">C&apos;est quoi l&apos;intent data (donnees d&apos;intention)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;intent data est l&apos;ensemble des signaux numeriques qui indiquent qu&apos;une entreprise ou un individu est en phase active de recherche ou d&apos;evaluation d&apos;une solution. Ces signaux incluent les recherches web, les visites de pages specifiques, les telechargements de contenus, les consultations d&apos;avis sur G2 ou Capterra, les recrutements sur certains postes, les levees de fonds et les changements organisationnels.</p>
                    <p><strong className="text-[#111]">Pourquoi c&apos;est un game-changer.</strong> En B2B, le cycle d&apos;achat est long (3 a 12 mois en moyenne) et implique plusieurs decideurs. 70% du parcours d&apos;achat se fait avant le premier contact avec un commercial (source : Gartner). L&apos;intent data vous permet de detecter ce parcours invisible et d&apos;intervenir au bon moment, quand le prospect est encore en phase de recherche et ouvert a la decouverte de nouvelles solutions.</p>
                    <p><strong className="text-[#111]">L&apos;analogie.</strong> Imaginez que vous vendez des logiciels CRM. Sans intent data, vous prospectez a l&apos;aveugle parmi des milliers d&apos;entreprises. Avec l&apos;intent data, vous savez que l&apos;entreprise X a visite 15 pages de comparatifs CRM cette semaine, que trois de ses employes ont consulte des avis sur G2 pour HubSpot et Salesforce, et qu&apos;elle a publie une offre d&apos;emploi pour un &ldquo;CRM Manager&rdquo;. Cette entreprise est en phase d&apos;achat active. C&apos;est le moment de la contacter.</p>
                    <p><strong className="text-[#111]">Le marche de l&apos;intent data.</strong> Le marche mondial de l&apos;intent data B2B est estime a 4,5 milliards de dollars en 2026, en croissance de 25% par an (source : MarketsandMarkets). Les entreprises qui utilisent l&apos;intent data voient en moyenne une amelioration de 30 a 50% de leur taux de conversion outbound et une reduction de 20% du cycle de vente.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "70%", label: "du parcours B2B avant le premier contact", color: "#FF7A59" },
                      { stat: "+40%", label: "de conversion avec intent data", color: "#22C55E" },
                      { stat: "4.5 Mds$", label: "marche mondial intent data 2026", color: "#4B5EFC" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[22px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 2 : Types de donnees */}
              {/* ================================================================ */}
              <section id="types" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les trois types d&apos;intent data</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;intent data se divise en trois categories selon la source des signaux. Chaque type a ses forces, ses limites et ses cas d&apos;usage specifiques. Une strategie mature combine les trois.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { type: "First-party intent data", desc: "Les signaux generes sur vos propres canaux : visites de votre site web (pages vues, temps passe, pages de pricing visitees), interactions avec vos emails (ouvertures, clics), soumissions de formulaires, telechargements de contenus, participation a vos webinars. C&apos;est la donnee la plus fiable car vous la collectez directement. Le probleme : elle ne couvre que les entreprises qui vous connaissent deja.", fiabilite: "Tres elevee", couverture: "Limitee", cout: "Gratuit", color: "#22C55E" },
                      { type: "Second-party intent data", desc: "Les signaux collectes par des plateformes partenaires ou des places de marche : avis consultes sur G2, Capterra ou TrustRadius, participation a des events ou webinars tiers, engagement sur des contenus de medias specialises. Ces donnees sont collectees avec le consentement des utilisateurs par les plateformes qui les monetisent.", fiabilite: "Elevee", couverture: "Moyenne", cout: "Moyen", color: "#4B5EFC" },
                      { type: "Third-party intent data", desc: "Les signaux collectes a grande echelle sur le web ouvert par des fournisseurs specialises : requetes de recherche aggregees par sujet, consommation de contenu sur des milliers de sites, tendances de recherche par entreprise. Bombora, 6sense et TechTarget sont les principaux fournisseurs. La couverture est massive mais la precision est plus faible.", fiabilite: "Moyenne", couverture: "Tres large", cout: "Eleve", color: "#FF7A59" },
                    ].map((t) => (
                      <div key={t.type} className="rounded-xl border border-[#F2F2F2] p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 rounded-full" style={{ background: t.color }} />
                          <p className="text-[13px] font-semibold text-[#111]">{t.type}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-3">{t.desc}</p>
                        <div className="flex gap-4 text-[10px]">
                          <span className="text-[#999]">Fiabilite : <strong className="text-[#111]">{t.fiabilite}</strong></span>
                          <span className="text-[#999]">Couverture : <strong className="text-[#111]">{t.couverture}</strong></span>
                          <span className="text-[#999]">Cout : <strong className="text-[#111]">{t.cout}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 3 : Sources de signaux */}
              {/* ================================================================ */}
              <section id="sources" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Sources de signaux d&apos;achat a surveiller</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Au-dela des trois categories classiques, voici les sources de signaux concretes que nous recommandons de monitorer pour une strategie intent data B2B efficace.</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { signal: "Visites de pages pricing / demo", source: "First-party", impact: "Tres fort", desc: "Un visiteur qui consulte votre page tarifs ou demande une demo est en phase de decision. Priorite maximale." },
                      { signal: "Telechargement de comparatifs", source: "First-party", impact: "Fort", desc: "Un prospect qui telecharge un comparatif de solutions est en phase d&apos;evaluation. Contenu de nurturing recommande." },
                      { signal: "Consultation d&apos;avis G2 / Capterra", source: "Second-party", impact: "Tres fort", desc: "Un employe qui consulte les avis de votre categorie sur G2 est en recherche active. Signal d&apos;achat immediat." },
                      { signal: "Publication offre d&apos;emploi cle", source: "Third-party", impact: "Fort", desc: "Un recrutement de &ldquo;CRM Manager&rdquo; ou &ldquo;RevOps&rdquo; signale un investissement imminent dans les outils." },
                      { signal: "Levee de fonds recente", source: "Third-party", impact: "Moyen-fort", desc: "Les entreprises qui levent des fonds investissent dans les outils dans les 3-6 mois suivants." },
                      { signal: "Changement de direction", source: "Third-party", impact: "Moyen", desc: "Un nouveau VP Sales ou CMO reevalue souvent le stack technologique dans ses 90 premiers jours." },
                      { signal: "Recherches thematiques elevees", source: "Third-party", impact: "Moyen", desc: "Bombora detecte un pic de recherche sur des topics specifiques par entreprise." },
                      { signal: "Engagement LinkedIn", source: "Second-party", impact: "Moyen", desc: "Un decideur qui interagit avec du contenu de votre categorie montre un interet thematique." },
                    ].map((s) => (
                      <div key={s.signal} className="rounded-lg border border-[#F2F2F2] p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-semibold text-[#111]">{s.signal}</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${s.impact === "Tres fort" ? "bg-[#FF7A59]/10 text-[#FF7A59]" : s.impact === "Fort" ? "bg-[#4B5EFC]/10 text-[#4B5EFC]" : s.impact === "Moyen-fort" ? "bg-[#F59E0B]/10 text-[#F59E0B]" : "bg-[#999]/10 text-[#999]"}`}>{s.impact}</span>
                        </div>
                        <p className="text-[10px] text-[#999] mb-0.5">{s.source}</p>
                        <p className="text-[10px] text-[#777] leading-[1.5]">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 4 : Comparatif outils */}
              {/* ================================================================ */}
              <section id="outils" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comparatif des outils d&apos;intent data</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Le marche des outils d&apos;intent data est en pleine expansion. Voici les principaux acteurs et leurs specificites.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { nom: "Bombora", domain: "bombora.com", type: "Third-party", desc: "Le leader historique de l&apos;intent data B2B. Bombora collecte des signaux de consommation de contenu aupres de 5 000+ sites B2B partenaires. Son Company Surge Score identifie les entreprises avec un pic de recherche sur des topics specifiques. Integrations natives avec HubSpot, Salesforce, 6sense.", prix: "A partir de 25 000 EUR/an" },
                      { nom: "6sense", domain: "6sense.com", type: "Plateforme ABM + intent", desc: "Plateforme ABM complete qui combine intent data, IA predictive et orchestration de campagnes. 6sense identifie les comptes en phase d&apos;achat, predit le timing optimal de contact et orchestre les actions marketing et sales. Integration profonde avec HubSpot et Salesforce.", prix: "A partir de 50 000 EUR/an" },
                      { nom: "G2 Buyer Intent", domain: "g2.com", type: "Second-party", desc: "G2 est la plus grande plateforme d&apos;avis logiciel B2B. G2 Buyer Intent identifie les entreprises dont les employes consultent votre categorie ou vos concurrents sur G2. Signal tres fort car il indique une recherche active de solution. Integration native avec HubSpot.", prix: "A partir de 15 000 EUR/an" },
                      { nom: "Koala", domain: "getkoala.com", type: "First-party+", desc: "Outil de nouvelle generation qui combine l&apos;identification des visiteurs anonymes de votre site (reverse IP lookup) avec du scoring en temps reel. Koala identifie quelles entreprises visitent votre site, quelles pages elles consultent et alerte vos commerciaux en temps reel via Slack. Plus accessible que Bombora.", prix: "A partir de 500 EUR/mois" },
                      { nom: "Warmly", domain: "warmly.ai", type: "First-party+", desc: "Similaire a Koala, Warmly identifie les visiteurs anonymes de votre site et enrichit les donnees en temps reel. L&apos;outil propose aussi un chatbot intelligent qui s&apos;active quand un visiteur high-intent est detecte. Bonne integration avec HubSpot et les outils de prospection.", prix: "A partir de 700 EUR/mois" },
                      { nom: "Clay", domain: "clay.com", type: "Enrichissement + intent", desc: "Clay n&apos;est pas un outil d&apos;intent data pur mais une plateforme d&apos;enrichissement qui peut combiner des dizaines de sources de donnees (LinkedIn, offres d&apos;emploi, technographies, levees de fonds) pour creer des signaux d&apos;intention sur mesure. Tres flexible mais necessite une configuration technique.", prix: "A partir de 150 EUR/mois" },
                    ].map((outil) => (
                      <div key={outil.nom} className="rounded-xl border border-[#F2F2F2] p-4 flex items-start gap-3">
                        <img src={`https://www.google.com/s2/favicons?domain=${outil.domain}&sz=32`} alt={outil.nom} className="w-5 h-5 mt-0.5" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-[12px] font-semibold text-[#111]">{outil.nom}</p>
                            <span className="text-[9px] px-1.5 py-0.5 rounded font-medium bg-[#FF7A59]/10 text-[#FF7A59]">{outil.type}</span>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.6] mb-1">{outil.desc}</p>
                          <p className="text-[10px] text-[#999]">{outil.prix}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 5 : Integration CRM */}
              {/* ================================================================ */}
              <section id="crm-integration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Integrer l&apos;intent data dans votre CRM</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;intent data n&apos;a de valeur que si elle est actionnee. Et le point d&apos;action, c&apos;est votre CRM. Voici comment integrer les signaux d&apos;intention dans HubSpot (le meme principe s&apos;applique a Salesforce ou Pipedrive).</p>
                    <p><strong className="text-[#111]">Etape 1 : creer les proprietes d&apos;intent.</strong> Ajoutez sur l&apos;objet Company dans HubSpot : Intent Score (nombre, 0 a 100), Intent Topics (texte multiligne, les sujets recherches), Intent Source (enumeration : Bombora, G2, Koala, site web), Intent Last Updated (date), Intent Stage (enumeration : Awareness, Consideration, Decision). Ces proprietes seront alimentees automatiquement par les integrations.</p>
                    <p><strong className="text-[#111]">Etape 2 : configurer les integrations.</strong> Connectez vos sources d&apos;intent data a HubSpot. Bombora et G2 ont des integrations natives sur le marketplace HubSpot. Koala et Warmly se connectent via leur app ou via webhooks. Pour Clay, utilisez les workflows ou Zapier pour pousser les donnees dans HubSpot.</p>
                    <p><strong className="text-[#111]">Etape 3 : creer les workflows de routing.</strong> Quand l&apos;intent score depasse un seuil (par exemple 70/100), declencher automatiquement : assignation a un commercial, creation d&apos;une tache de contact, notification Slack, ajout a une sequence de prospection. Le timing est crucial : un signal d&apos;intent a une duree de vie de 7 a 14 jours. Apres, le prospect a probablement deja avance dans son parcours d&apos;achat.</p>
                    <p><strong className="text-[#111]">Etape 4 : integrer dans les vues commerciales.</strong> Creez une vue custom dans HubSpot qui affiche les comptes par intent score decroissant. Vos commerciaux commencent chaque journee par cette vue : ils savent exactement quels comptes prioriser. C&apos;est la fin du cold calling a l&apos;aveugle. Chaque appel est base sur un signal reel.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 6 : Modele de scoring */}
              {/* ================================================================ */}
              <section id="scoring" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Construire un modele de scoring avec intent data</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scoring intent-based combine le scoring classique (fit / ICP) avec les signaux d&apos;intention pour creer un score composite qui reflète a la fois la qualite du compte et sa propension a acheter maintenant.</p>
                    <p><strong className="text-[#111]">Le framework Fit + Intent.</strong> Nous recommandons un modele a deux axes. L&apos;axe Fit (0-50 points) evalue si le compte correspond a votre ICP : taille d&apos;entreprise, secteur, localisation, technographie. L&apos;axe Intent (0-50 points) evalue si le compte montre des signaux d&apos;achat actifs. Le score total (0-100) determine la priorite.</p>
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      { signal: "Visite page pricing (first-party)", points: "+15", color: "#FF7A59" },
                      { signal: "Consultation categorie sur G2 (second-party)", points: "+12", color: "#FF7A59" },
                      { signal: "Bombora surge score eleve (third-party)", points: "+10", color: "#4B5EFC" },
                      { signal: "Telechargement contenu BOFU (first-party)", points: "+10", color: "#4B5EFC" },
                      { signal: "Offre d&apos;emploi poste cle (third-party)", points: "+8", color: "#22C55E" },
                      { signal: "Levee de fonds recente (third-party)", points: "+7", color: "#22C55E" },
                      { signal: "Visite blog article TOFU (first-party)", points: "+3", color: "#999" },
                      { signal: "Ouverture email marketing (first-party)", points: "+2", color: "#999" },
                    ].map((s) => (
                      <div key={s.signal} className="rounded-lg border border-[#F2F2F2] p-3 flex items-center justify-between">
                        <span className="text-[11px] text-[#555]" dangerouslySetInnerHTML={{ __html: s.signal }} />
                        <span className="text-[12px] font-bold" style={{ color: s.color }}>{s.points}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les quatre quadrants.</strong> Score Fit eleve + Intent eleve = Hot leads (action commerciale immediate). Score Fit eleve + Intent faible = comptes ICP a nurture (marketing automation). Score Fit faible + Intent eleve = comptes a qualifier (verifier le fit avant d&apos;investir du temps). Score Fit faible + Intent faible = comptes a ignorer.</p>
                    <p><strong className="text-[#111]">Decay et fraicheur.</strong> Les signaux d&apos;intent perdent de la valeur avec le temps. Un signal de 7 jours a plus de poids qu&apos;un signal de 30 jours. Configurez un mecanisme de decay dans votre scoring : reduisez de 20% la valeur du signal chaque semaine. Cela garantit que votre pipeline reflète l&apos;etat actuel du marche, pas l&apos;historique.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 7 : Cas outbound */}
              {/* ================================================================ */}
              <section id="outbound" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Intent data pour l&apos;outbound : les use cases</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;intent data transforme l&apos;outbound de la prospection a froid en approche contextuelle a chaud. Voici les use cases les plus efficaces que nous implementons pour nos clients.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { titre: "Sequence declenchee par un signal G2", desc: "Un employe d&apos;un compte ICP consulte votre categorie sur G2. Le signal est pousse dans HubSpot. Un workflow cree automatiquement une tache pour le commercial assigne au territoire. Le commercial envoie une sequence personnalisee qui mentionne le sujet de recherche sans reveler la source du signal. Taux de reponse : 3 a 5x superieur au cold outbound classique." },
                      { titre: "Alerte Slack en temps reel (Koala / Warmly)", desc: "Un visiteur d&apos;un compte cible visite votre page pricing. Koala envoie une alerte Slack avec le nom de l&apos;entreprise, les pages visitees et le temps passe. Le commercial peut reagir dans les minutes qui suivent avec un email contextuel. Le timing est critique : les premiers a repondre ont 10x plus de chances de closer." },
                      { titre: "Campagne ads ciblee par intent", desc: "Vous identifiez via Bombora 200 entreprises avec un surge score eleve sur le topic &ldquo;CRM implementation&rdquo;. Vous creez une audience custom sur LinkedIn Ads avec ces entreprises et lancez une campagne de retargeting avec du contenu MOFU (comparatifs, etudes de cas). Le cout par lead est 50% inferieur a une campagne non ciblee." },
                      { titre: "Reactivation de comptes dormants", desc: "Un compte qui etait en &ldquo;Closed Lost&rdquo; il y a 6 mois montre soudain des signaux d&apos;intent eleves. C&apos;est probablement parce que la solution choisie ne fonctionne pas ou que les besoins ont evolue. Relancez avec un message adapte : &ldquo;On a vu que vos besoins CRM evoluent, on a sorti de nouvelles fonctionnalites depuis notre dernier echange.&rdquo;" },
                    ].map((uc) => (
                      <div key={uc.titre} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#111] mb-1.5">{uc.titre}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{uc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 8 : Strategie ABM */}
              {/* ================================================================ */}
              <section id="abm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Intent data et ABM : la combinaison gagnante</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;ABM sans intent data est incomplet.</strong> L&apos;Account-Based Marketing consiste a concentrer vos efforts marketing et commerciaux sur une liste de comptes cibles. Le probleme classique de l&apos;ABM est le timing : vous savez quels comptes cibler, mais pas quand ils sont prets a acheter. L&apos;intent data resout ce probleme en vous indiquant quels comptes de votre liste ABM sont actuellement en phase d&apos;achat.</p>
                    <p><strong className="text-[#111]">ABM Tier 1 : comptes strategiques.</strong> Pour vos 20-50 comptes les plus strategiques, utilisez l&apos;intent data pour personaliser l&apos;approche au maximum. Quand un compte Tier 1 montre des signaux d&apos;intent, declenchez un play dedie : contenu personnalise (etude de cas du meme secteur), ads ciblees sur les decideurs identifies, approche multithread (contacter plusieurs personnes dans le compte simultanement), event invite personnalisee.</p>
                    <p><strong className="text-[#111]">ABM Tier 2 : comptes importants.</strong> Pour vos 200-500 comptes importants, utilisez l&apos;intent data pour segmenter et prioriser. Les comptes avec intent eleve recoivent un traitement semi-personnalise : sequences email adaptees au topic d&apos;intent, retargeting ads, invitation a des webinars thematiques. Les comptes sans intent recoivent du nurturing standard.</p>
                    <p><strong className="text-[#111]">ABM Tier 3 : comptes programmatiques.</strong> Pour votre univers de plus de 1 000 comptes, l&apos;intent data sert de filtre dynamique. Chaque semaine, les comptes avec un surge score au-dessus du seuil remontent en Tier 2. C&apos;est un systeme auto-optimisant qui concentre les ressources sur les comptes les plus chauds du moment.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 9 : RGPD et conformite */}
              {/* ================================================================ */}
              <section id="rgpd" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">RGPD et conformite : ce qu&apos;il faut savoir</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;intent data B2B est un sujet sensible en Europe.</strong> Le RGPD impose des regles strictes sur la collecte et l&apos;utilisation des donnees personnelles. L&apos;intent data, surtout la third-party, peut poser des questions de conformite qu&apos;il faut anticiper.</p>
                    <p><strong className="text-[#111]">First-party intent data.</strong> Pas de probleme majeur si vous avez un consentement cookie valide. Les donnees collectees sur votre propre site (pages visitees, formulaires soumis) sont legales sous reserve d&apos;une politique de confidentialite transparente et d&apos;un consentement eclaire (bandeau cookie conforme). L&apos;identification des entreprises par reverse IP lookup est generalement consideree comme un interet legitime en B2B, car il s&apos;agit de donnees d&apos;entreprise, pas de donnees personnelles.</p>
                    <p><strong className="text-[#111]">Second-party intent data.</strong> Les plateformes comme G2 collectent les donnees avec le consentement de leurs utilisateurs. Si vous achetez des signaux G2 Buyer Intent, G2 est le responsable du traitement et vous etes le destinataire. Verifiez que le contrat avec G2 inclut les clauses RGPD necessaires (DPA, garanties de consentement).</p>
                    <p><strong className="text-[#111]">Third-party intent data.</strong> C&apos;est le point le plus sensible. Bombora et 6sense collectent des donnees a grande echelle, souvent via des cookies tiers et du tracking cross-site. Avec les evolutions reglementaires (fin des cookies tiers, DMA, e-Privacy), la collecte de third-party intent data devient plus complexe en Europe. Assurez-vous que vos fournisseurs sont conformes RGPD, signez un DPA et documentez votre base legale (interet legitime ou consentement).</p>
                    <p><strong className="text-[#111]">Notre recommandation.</strong> Commencez par le first-party intent data (le plus fiable et le plus conforme), ajoutez le second-party (G2, TrustRadius) qui a un bon equilibre fiabilite-conformite, et n&apos;ajoutez le third-party que si vous avez un DPO ou un conseil juridique qui valide la conformite. Ne prenez pas de risques inutiles avec le RGPD.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 10 : Mesurer le ROI */}
              {/* ================================================================ */}
              <section id="roi" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mesurer le ROI de l&apos;intent data</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;intent data est un investissement significatif (surtout le third-party). Il faut mesurer rigoureusement le ROI pour justifier la depense et optimiser la strategie.</p>
                    <p><strong className="text-[#111]">Les KPIs a suivre.</strong></p>
                  </div>

                  <div className="mt-4 space-y-2">
                    {[
                      { kpi: "Taux de conversion outbound", desc: "Comparez le taux de reponse et de conversion des campagnes basees sur intent vs les campagnes cold. Objectif : amelioration de 2x a 5x.", baseline: "Cold : 1-2%", target: "Intent : 5-10%" },
                      { kpi: "Cycle de vente", desc: "Mesurez la duree du cycle de vente pour les deals origines d&apos;un signal d&apos;intent vs les autres. L&apos;intent data devrait reduire le cycle de 15 a 30%.", baseline: "Standard : 90 jours", target: "Intent : 60-75 jours" },
                      { kpi: "Win rate", desc: "Le taux de closing sur les opportunites issues de signaux d&apos;intent devrait etre superieur. Si ce n&apos;est pas le cas, votre scoring ou votre routage a un probleme.", baseline: "Standard : 20%", target: "Intent : 30-40%" },
                      { kpi: "Pipeline genere", desc: "Le volume de pipeline attribuable aux signaux d&apos;intent. Utilisez l&apos;attribution first-touch ou multi-touch dans HubSpot pour tracer.", baseline: "0 EUR", target: "3-5x le cout de l&apos;outil" },
                      { kpi: "Cout par opportunite", desc: "Comparez le cout par opportunite qualifiee entre les canaux intent-based et les autres canaux outbound.", baseline: "Cold : 500+ EUR", target: "Intent : 150-300 EUR" },
                    ].map((k) => (
                      <div key={k.kpi} className="rounded-lg border border-[#F2F2F2] p-3">
                        <p className="text-[11px] font-semibold text-[#111] mb-0.5">{k.kpi}</p>
                        <p className="text-[10px] text-[#777] leading-[1.5] mb-1.5">{k.desc}</p>
                        <div className="flex gap-3 text-[10px]">
                          <span className="text-[#999]">Baseline : <strong className="text-[#FF7A59]">{k.baseline}</strong></span>
                          <span className="text-[#999]">Cible : <strong className="text-[#22C55E]">{k.target}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 11 : Guide implementation */}
              {/* ================================================================ */}
              <section id="implementation" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Guide d&apos;implementation : par ou commencer</h2>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75] mb-6">
                    <p>L&apos;implementation de l&apos;intent data est un projet progressif. Voici le plan en 4 phases que nous recommandons.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { phase: "Phase 1 (Semaine 1-2)", titre: "First-party intent data", desc: "Deployez Koala ou Warmly pour identifier les visiteurs de votre site. Configurez les alertes Slack pour les visites de pages high-intent (pricing, demo, comparatifs). Creez les proprietes d&apos;intent dans HubSpot. Cout : 500-700 EUR/mois." },
                      { phase: "Phase 2 (Semaine 3-4)", titre: "Scoring et workflows", desc: "Implementez le modele de scoring Fit + Intent dans HubSpot. Creez les workflows de routing automatique. Formez les commerciaux a utiliser la vue par intent score. Mesurez les premiers resultats sur les taux de reponse outbound." },
                      { phase: "Phase 3 (Mois 2-3)", titre: "Second-party intent data", desc: "Ajoutez G2 Buyer Intent si votre categorie est active sur G2. Configurez l&apos;integration avec HubSpot. Ajoutez les signaux G2 dans le modele de scoring. Lancez les premieres sequences outbound basees sur les signaux G2." },
                      { phase: "Phase 4 (Mois 4-6)", titre: "Third-party et ABM", desc: "Si le ROI des phases 1-3 est positif, evaluez Bombora ou 6sense pour le third-party intent data. Integrez dans votre strategie ABM. Deployez les campagnes ads ciblees par intent. Mesurez le ROI global et optimisez." },
                    ].map((p) => (
                      <div key={p.phase} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <p className="text-[10px] text-[#FF7A59] font-semibold mb-1">{p.phase}</p>
                        <p className="text-[12px] font-semibold text-white mb-1.5">{p.titre}</p>
                        <p className="text-[11px] text-[#888] leading-[1.6]">{p.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p>L&apos;intent data est un levier puissant mais ce n&apos;est pas une baguette magique. Les resultats dependent de la qualite de votre ICP, de la reactivite de vos commerciaux et de la pertinence de vos messages. Commencez petit, mesurez, iterez. Les entreprises qui reussissent avec l&apos;intent data sont celles qui l&apos;integrent dans un processus RevOps structure, pas celles qui achetent l&apos;outil le plus cher.</p>
                    <p><strong className="text-white">Budget indicatif par phase.</strong> Phase 1 (first-party) : 500-700 EUR/mois + 2 jours de configuration. Phase 2 (scoring + workflows) : 3-5 jours de consulting. Phase 3 (second-party G2) : 15 000-25 000 EUR/an + 2 jours d&apos;integration. Phase 4 (third-party Bombora/6sense) : 25 000-60 000 EUR/an + 5 jours d&apos;integration. Le ROI attendu est de 3 a 5x le cout total a horizon 6 mois.</p>
                    <p><strong className="text-white">Ce que Ceres propose.</strong> Nous accompagnons les entreprises B2B dans la mise en place de strategies intent data integrees a leur CRM. Notre approche est progressive : on commence toujours par le first-party (rapide, conforme, ROI immediat), puis on ajoute les couches second et third-party selon les resultats mesures. Chaque etape est justifiee par des KPIs concrets, pas par une promesse commerciale.</p>
                    <p><strong className="text-white">Le bon moment pour demarrer.</strong> Si vous faites de l&apos;outbound sans intent data en 2026, vous laissez de l&apos;argent sur la table. Vos concurrents qui utilisent des signaux d&apos;intention arrivent avant vous chez les prospects en phase d&apos;achat. Meme un setup minimal (Koala + HubSpot) suffit pour commencer a capter des signaux actionnables en moins de deux semaines.</p>
                  </div>
                </div>
              </section>
            </article>

            {/* Related articles */}
            <section className="mt-12 mb-8">
              <p className="text-[13px] font-semibold text-[#111] mb-4">Articles similaires</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedArticles.map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors group">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white mb-3" style={{ background: a.color }}>
                      {a.category[0]}
                    </div>
                    <p className="text-[12px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#FF7A59] transition-colors">{a.title}</p>
                    <p className="text-[10px] text-[#999] mt-2">{a.category}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous voulez exploiter l&apos;intent data dans votre CRM ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On vous aide a choisir les bons outils, configurer l&apos;integration CRM et former vos equipes. Premiers signaux actionnables en 2 semaines.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />Reserver un appel
                  </a>
                  <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Tous les articles
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
