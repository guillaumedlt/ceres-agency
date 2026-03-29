"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "RevOps et facturation : connecter CRM et ERP en 2026",
  description: "Comment connecter votre CRM a votre ERP en 2026 : architectures, workflows devis-commande-facture, obligation facturation electronique, outils Make, n8n, Fivetran.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/revops-facturation-crm-erp" },
  articleSection: "RevOps",
  wordCount: 2800,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-connecter", title: "Pourquoi connecter" },
  { id: "facturation-2026", title: "Facturation electronique 2026" },
  { id: "architectures", title: "Les architectures" },
  { id: "hubspot-erp", title: "HubSpot et votre ERP" },
  { id: "workflow-devis-facture", title: "Devis vers facture" },
  { id: "outils-integration", title: "Outils d\u2019integration" },
  { id: "cas-sage-pennylane", title: "Cas Sage et Pennylane" },
  { id: "erreurs", title: "Erreurs courantes" },
  { id: "cas-concrets", title: "Cas concrets" },
  { id: "approche-ceres", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Facturation electronique et CRM en 2026", slug: "facturation-electronique-crm-2026", category: "RevOps", color: "#FF7A59" },
  { title: "Zapier vs Make vs n8n pour le RevOps", slug: "zapier-vs-make-vs-n8n-revops", category: "Automatisation", color: "#4B5EFC" },
  { title: "Stack technologique RevOps 2026", slug: "stack-technologique-revops-2026", category: "RevOps", color: "#6C5CE7" },
];

export default function RevOpsFacturationCRMERPPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-connecter");

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
                  <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">RevOps et facturation CRM-ERP</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <Badge>Integration</Badge>
                <span className="text-[11px] text-[#CCC]">16 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                RevOps et facturation : connecter CRM et ERP en 2026
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                La deconnexion entre CRM et ERP est l&apos;un des plus gros freins a l&apos;efficacite RevOps. Double saisie, erreurs de facturation, delais de paiement. Ce guide couvre les architectures d&apos;integration, le workflow devis-commande-facture, l&apos;obligation de facturation electronique 2026 et les outils pour connecter HubSpot a votre ERP.
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
              {/* Section 1 — Pourquoi connecter */}
              <section id="pourquoi-connecter" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi CRM et facturation doivent communiquer</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Dans la majorite des PME et ETI francaises, le CRM et l&apos;ERP (ou le logiciel de facturation) sont deux mondes separes. Le commercial cree un devis dans HubSpot, le gagne, puis quelqu&apos;un cote finance re-saisit manuellement les informations dans Sage, Cegid, Pennylane ou QuickBooks pour generer la facture. Cette double saisie est une source d&apos;inefficacite massive.</p>
                    <p><strong className="text-[#111]">Premier probleme : la double saisie.</strong> Chaque information doit etre tapee deux fois. Le nom du client, l&apos;adresse de facturation, les lignes de produit, les montants, les conditions de paiement. C&apos;est du temps perdu : en moyenne 45 minutes par deal selon une etude Celonis 2025. Pour une equipe qui signe 50 deals par mois, c&apos;est 37 heures de saisie manuelle par mois, soit presque un ETP.</p>
                    <p><strong className="text-[#111]">Deuxieme probleme : les erreurs.</strong> La saisie manuelle genere des erreurs. Un montant mal reporte, un taux de TVA incorrect, une adresse de facturation obsolete, un numero de bon de commande oublie. Ces erreurs entrainent des factures rejetees, des relances inutiles et des delais de paiement allonges. Le taux d&apos;erreur moyen sur les factures saisies manuellement est de 3 a 5% (etude AIIM). Sur 500 factures par an, c&apos;est 15 a 25 factures a corriger et renvoyer.</p>
                    <p><strong className="text-[#111]">Troisieme probleme : le manque de visibilite.</strong> Quand CRM et ERP ne communiquent pas, personne n&apos;a une vue complete du cycle de revenus. Le commercial ne sait pas si la facture a ete envoyee. La finance ne sait pas quel deal correspond a quelle facture. Le management ne peut pas reporter le revenu en temps reel. Le RevOps est impossible sans cette visibilite de bout en bout.</p>
                    <p><strong className="text-[#111]">Quatrieme probleme : le DSO (Days Sales Outstanding).</strong> Le delai entre la signature du deal et l&apos;encaissement du paiement est directement impacte par l&apos;efficacite du processus de facturation. Chaque jour perdu en saisie manuelle, en erreur de facturation ou en relance est un jour de tresorerie en moins. Les entreprises avec un processus CRM-ERP integre ont un DSO inferieur de 8 a 12 jours en moyenne.</p>
                  </div>

                  {/* Impact stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "45 min", label: "de saisie manuelle par deal en moyenne", color: "#FF7A59" },
                      { value: "3-5%", label: "taux d\u2019erreur sur les factures manuelles", color: "#4B5EFC" },
                      { value: "-12j", label: "de DSO avec un processus integre", color: "#22C55E" },
                      { value: "1 ETP", label: "economise pour 50 deals/mois", color: "#6C5CE7" },
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

              {/* Section 2 — Facturation electronique 2026 */}
              <section id="facturation-2026" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;obligation de facturation electronique en 2026</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La reforme de la facturation electronique en France impose a toutes les entreprises assujetties a la TVA de recevoir et d&apos;emettre des factures au format electronique structure (Factur-X, UBL ou CII). Le calendrier est progressif : les grandes entreprises et ETI sont concernees depuis le 1er septembre 2026, les PME et micro-entreprises a partir du 1er septembre 2027 pour la reception et du 1er septembre 2028 pour l&apos;emission.</p>
                    <p>Cette obligation change fondamentalement la donne pour l&apos;integration CRM-ERP. Les factures ne peuvent plus etre de simples PDF envoyes par email. Elles doivent etre emises via une Plateforme de Dematerialisation Partenaire (PDP) accreditee ou via le Portail Public de Facturation (PPF). Les donnees de facturation doivent etre structurees : numero de facture, SIREN emetteur et destinataire, lignes de produit avec codes CPV, montants HT et TTC, taux de TVA.</p>
                    <p>Pour les entreprises qui utilisent un CRM comme HubSpot pour gerer les devis et un ERP pour la facturation, la facturation electronique rend l&apos;integration encore plus critique. Les donnees doivent etre exactes, structurees et conformes. La saisie manuelle entre CRM et ERP devient un risque de non-conformite en plus d&apos;etre inefficace.</p>
                    <p>La bonne nouvelle est que les principaux ERP et logiciels de facturation francais (Sage, Cegid, Pennylane, Sellsy, Axonaut) ont integre la facturation electronique dans leurs solutions. L&apos;enjeu n&apos;est plus la conformite de l&apos;outil de facturation, mais la connexion entre le CRM ou le deal est gere et l&apos;ERP ou la facture est emise. C&apos;est exactement le probleme que resout l&apos;integration CRM-ERP.</p>
                  </div>

                  {/* Timeline calendrier */}
                  <div className="mt-6 p-4 rounded-xl bg-[#F7F9FC] border border-[#E0E7EF]">
                    <p className="text-[11px] font-semibold text-[#4B5EFC] uppercase tracking-wider mb-4">Calendrier facturation electronique</p>
                    <div className="space-y-2">
                      {[
                        { date: "1er sept. 2026", obligation: "Grandes entreprises et ETI : emission et reception obligatoires", color: "#FF7A59" },
                        { date: "1er sept. 2027", obligation: "PME et micro-entreprises : reception obligatoire", color: "#4B5EFC" },
                        { date: "1er sept. 2028", obligation: "PME et micro-entreprises : emission obligatoire", color: "#22C55E" },
                      ].map((t) => (
                        <div key={t.date} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#F0F0F0]">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: t.color }} />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">{t.date}</p>
                            <p className="text-[10px] text-[#777] mt-0.5">{t.obligation}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 — Les architectures */}
              <section id="architectures" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Architecture</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Les trois architectures CRM-ERP</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Il existe trois grandes architectures pour connecter CRM et facturation. Le choix depend de la taille de votre entreprise, de la complexite de vos processus et de votre stack technologique existante.</p>
                    <p><strong className="text-white/80">Architecture 1 : CRM + ERP natif.</strong> Certains outils combinent CRM et facturation dans un seul produit. Odoo, Sellsy et Axonaut proposent cette approche all-in-one. L&apos;avantage est l&apos;integration native : pas de connecteur a maintenir, les donnees circulent en temps reel. L&apos;inconvenient est que le CRM ou l&apos;ERP (ou les deux) est souvent moins complet qu&apos;un outil specialise. Si vos besoins CRM sont avances (marketing automation, lead scoring, reporting complexe), un CRM natif d&apos;ERP sera souvent insuffisant.</p>
                    <p><strong className="text-white/80">Architecture 2 : CRM + connecteur iPaaS.</strong> C&apos;est l&apos;architecture la plus courante en 2026. Vous utilisez le meilleur CRM (HubSpot) et le meilleur outil de facturation (Pennylane, Sage, QuickBooks) et vous les connectez via une plateforme d&apos;integration (Make, n8n, Zapier, Fivetran). Le connecteur synchronise les donnees entre les deux outils selon des regles definies. L&apos;avantage est la flexibilite : vous choisissez les meilleurs outils pour chaque fonction. L&apos;inconvenient est la maintenance du connecteur et la gestion des erreurs de synchronisation.</p>
                    <p><strong className="text-white/80">Architecture 3 : CRM + API custom.</strong> Pour les entreprises avec des processus complexes ou des ERP on-premise (Sage 100, SAP, Cegid), l&apos;integration se fait via le developpement d&apos;une API custom. Les donnees sont echangees via des appels API entre le CRM et l&apos;ERP. L&apos;avantage est la personnalisation totale. L&apos;inconvenient est le cout de developpement et de maintenance, et la necessite d&apos;une equipe technique pour gerer l&apos;integration.</p>
                  </div>

                  {/* Architecture comparison */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { arch: "All-in-one", tools: "Odoo, Sellsy, Axonaut", pros: "Zero integration", cons: "Moins specialise", color: "#FF7A59" },
                      { arch: "CRM + iPaaS", tools: "HubSpot + Make + ERP", pros: "Best-of-breed", cons: "Maintenance connecteur", color: "#4B5EFC" },
                      { arch: "CRM + API", tools: "HubSpot + API + SAP/Sage", pros: "Personnalisation totale", cons: "Cout dev + maintenance", color: "#22C55E" },
                    ].map((a) => (
                      <div key={a.arch} className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-[12px] font-semibold mb-2" style={{ color: a.color }}>{a.arch}</p>
                        <p className="text-[10px] text-white/50 mb-2">{a.tools}</p>
                        <div className="space-y-1">
                          <p className="text-[10px] text-[#22C55E]">+ {a.pros}</p>
                          <p className="text-[10px] text-[#FF7A59]">- {a.cons}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 — HubSpot et votre ERP */}
              <section id="hubspot-erp" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Connecter HubSpot a votre ERP</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot est le CRM le plus utilise par les PME et ETI en France. Mais HubSpot n&apos;est pas un outil de facturation. Il gere les devis (quotes), mais pas l&apos;emission de factures conformes, le suivi des paiements ni la comptabilite. Pour la facturation, vous avez besoin d&apos;un ERP ou d&apos;un logiciel de facturation dedie. Voici comment connecter HubSpot aux principaux outils du marche francais.</p>
                    <p><strong className="text-[#111]">HubSpot + Pennylane.</strong> Pennylane est le logiciel de comptabilite et facturation qui monte le plus vite en France. L&apos;integration avec HubSpot se fait via Make ou n8n. Le workflow type : quand un deal passe en &ldquo;Closed Won&rdquo; dans HubSpot, Make cree automatiquement un client et un brouillon de facture dans Pennylane avec les informations du deal (produits, montants, conditions). La finance valide et envoie la facture en un clic.</p>
                    <p><strong className="text-[#111]">HubSpot + Sage.</strong> Sage (Sage 50, Sage 100, Sage X3) est l&apos;ERP historique des PME francaises. L&apos;integration est plus complexe car Sage n&apos;a pas toujours d&apos;API moderne. Pour Sage 50 et 100, l&apos;integration passe souvent par un fichier CSV ou XML intermediaire genere par Make et importe dans Sage. Pour Sage X3, l&apos;API REST permet une integration en temps reel via un connecteur custom ou une plateforme iPaaS.</p>
                    <p><strong className="text-[#111]">HubSpot + Cegid.</strong> Cegid propose une gamme d&apos;ERP pour les PME et ETI (Cegid XRP, Cegid Loop). L&apos;integration avec HubSpot se fait via l&apos;API Cegid et une plateforme d&apos;integration. Les donnees synchronisees sont les clients (creation et mise a jour), les devis/commandes et les factures. La complexite depend de la version de Cegid et des modules actives.</p>
                    <p><strong className="text-[#111]">HubSpot + QuickBooks.</strong> QuickBooks est populaire chez les startups et TPE. L&apos;integration avec HubSpot est native via le marketplace HubSpot (connecteur gratuit). Il synchronise les contacts, les devis et les factures en bidirectionnel. C&apos;est la solution la plus simple a mettre en oeuvre, mais QuickBooks devient limitant au-dela de 2-3 millions d&apos;euros de CA.</p>
                  </div>

                  {/* ERP comparison table */}
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="border-b border-[#E8E8E8]">
                          <th className="text-left py-3 pr-4 text-[#999] font-medium">ERP</th>
                          <th className="text-left py-3 pr-4 text-[#999] font-medium">Integration</th>
                          <th className="text-left py-3 pr-4 text-[#999] font-medium">Complexite</th>
                          <th className="text-left py-3 text-[#999] font-medium">Cible</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#555]">
                        {[
                          ["Pennylane", "Make / n8n", "Moyenne", "Startups, PME modernes"],
                          ["Sage 50/100", "CSV/XML via Make", "Elevee", "PME traditionnelles"],
                          ["Sage X3", "API REST + iPaaS", "Elevee", "ETI"],
                          ["Cegid", "API + iPaaS", "Elevee", "PME/ETI"],
                          ["QuickBooks", "Connecteur natif HubSpot", "Faible", "TPE, startups"],
                        ].map(([erp, integration, complexite, cible], i) => (
                          <tr key={i} className="border-b border-[#F5F5F5]">
                            <td className="py-2.5 pr-4 font-medium text-[#111]">{erp}</td>
                            <td className="py-2.5 pr-4">{integration}</td>
                            <td className="py-2.5 pr-4">
                              <span className={`text-[10px] px-1.5 py-0.5 rounded ${complexite === "Faible" ? "bg-[#22C55E]/10 text-[#22C55E]" : complexite === "Moyenne" ? "bg-[#F59E0B]/10 text-[#F59E0B]" : "bg-[#FF7A59]/10 text-[#FF7A59]"}`}>
                                {complexite}
                              </span>
                            </td>
                            <td className="py-2.5">{cible}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 — Workflow devis-commande-facture */}
              <section id="workflow-devis-facture" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le workflow devis - commande - facture</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le workflow Quote-to-Cash (du devis a l&apos;encaissement) est le processus le plus critique de la chaine de revenus. Il couvre toute la sequence : creation du devis dans le CRM, validation par le client, transformation en commande, emission de la facture dans l&apos;ERP, envoi au client, suivi du paiement et reconciliation comptable. Chaque etape est une opportunite d&apos;automatisation.</p>
                    <p><strong className="text-[#111]">Etape 1 : creation du devis dans HubSpot.</strong> Le commercial cree le devis (quote) dans HubSpot a partir du deal. Il selectionne les produits dans le catalogue, ajuste les quantites et les prix, applique les remises eventuelles et genere le document. HubSpot Quotes permet de creer des devis professionnels avec signature electronique integree.</p>
                    <p><strong className="text-[#111]">Etape 2 : signature du devis.</strong> Le prospect recoit le devis par email et le signe electroniquement. HubSpot detecte la signature et met a jour le deal en &ldquo;Closed Won&rdquo;. C&apos;est le declencheur du processus de facturation.</p>
                    <p><strong className="text-[#111]">Etape 3 : creation de la facture dans l&apos;ERP.</strong> Un workflow Make/n8n detecte le passage en Closed Won et cree automatiquement la facture dans l&apos;ERP. Les donnees transferees sont : le client (creation si nouveau, mise a jour si existant), les lignes de produit (designation, quantite, prix unitaire, TVA), les conditions de paiement (30 jours, 60 jours, comptant), le numero de bon de commande et l&apos;adresse de facturation.</p>
                    <p><strong className="text-[#111]">Etape 4 : emission et envoi.</strong> La finance valide le brouillon de facture dans l&apos;ERP (verification des montants, de la TVA, du numero de PO), puis l&apos;emet. La facture est envoyee au client via la PDP (facturation electronique) ou par email. Le statut de la facture (emise, envoyee, payee) est synchronise en retour dans HubSpot sur le deal.</p>
                    <p><strong className="text-[#111]">Etape 5 : suivi du paiement.</strong> L&apos;ERP suit le paiement (echeance, relance automatique en cas de retard). Quand le paiement est recu, le statut est mis a jour dans l&apos;ERP et synchronise dans HubSpot. Le commercial et le CSM voient que le client a paye, ce qui est essentiel pour le suivi de la relation.</p>
                  </div>

                  {/* Flow mockup */}
                  <div className="mt-6 p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Flux devis vers encaissement</p>
                    <div className="flex flex-col sm:flex-row gap-2 items-stretch">
                      {[
                        { step: "Devis", tool: "HubSpot", color: "#FF7A59" },
                        { step: "Signature", tool: "HubSpot", color: "#FF7A59" },
                        { step: "Facture", tool: "ERP", color: "#4B5EFC" },
                        { step: "Emission", tool: "PDP", color: "#22C55E" },
                        { step: "Paiement", tool: "ERP", color: "#6C5CE7" },
                      ].map((s, i) => (
                        <div key={s.step} className="flex-1 p-3 rounded-xl bg-white border border-[#E8E8E8] text-center relative">
                          <p className="text-[11px] font-semibold text-[#111]">{s.step}</p>
                          <p className="text-[10px] mt-0.5" style={{ color: s.color }}>{s.tool}</p>
                          {i < 4 && <div className="hidden sm:block absolute right-[-8px] top-1/2 -translate-y-1/2 text-[#DDD] text-[14px] z-10">&rarr;</div>}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex justify-center">
                      <p className="text-[10px] text-[#999] bg-[#F5F5F5] px-3 py-1 rounded-full">Connecteur Make / n8n entre chaque etape</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 — Outils d'integration */}
              <section id="outils-integration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les outils d&apos;integration CRM-ERP</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les plateformes d&apos;integration (iPaaS) sont les briques essentielles pour connecter CRM et ERP sans developpement custom. Voici les trois principales et leurs cas d&apos;usage.</p>
                    <p><strong className="text-[#111]">Make (ex-Integromat)</strong> est notre recommandation pour les PME. Interface visuelle, prix accessible, et surtout une gestion avancee des erreurs et des iterations qui est essentielle pour les flux CRM-ERP. Make gere nativement les scenarios complexes : creer un client dans l&apos;ERP s&apos;il n&apos;existe pas, le mettre a jour s&apos;il existe deja, puis creer la facture avec les bonnes lignes de produit. Le plan Team a 16 euros par mois suffit pour la plupart des PME.</p>
                    <p><strong className="text-[#111]">n8n</strong> est l&apos;alternative open source. Il peut etre auto-heberge (gratuit) ou utilise en SaaS. L&apos;avantage est la flexibilite totale : vous pouvez ecrire du code JavaScript dans les nodes pour gerer les transformations de donnees complexes. C&apos;est le choix ideal pour les equipes techniques qui veulent un controle total sur l&apos;integration. L&apos;inconvenient est la courbe d&apos;apprentissage plus raide que Make.</p>
                    <p><strong className="text-[#111]">Fivetran</strong> est une solution ETL (Extract, Transform, Load) specialisee dans la synchronisation de donnees entre systemes. Il est plus adapte aux flux de donnees en volume (synchronisation quotidienne de milliers d&apos;enregistrements) qu&apos;aux workflows event-driven (declencher une action quand un deal est gagne). Il est ideal pour les ETI qui ont besoin de synchroniser des bases de donnees CRM et ERP completes pour le reporting et l&apos;analytics.</p>
                    <p>Le choix entre Make, n8n et Fivetran depend de votre cas d&apos;usage. Pour les workflows transactionnels (deal gagne = creer facture), Make ou n8n sont les plus adaptes. Pour la synchronisation de donnees en volume (reporting, analytics), Fivetran est plus adapte. Dans la pratique, beaucoup d&apos;entreprises utilisent Make pour les workflows temps reel et Fivetran pour la synchronisation de donnees.</p>
                  </div>

                  {/* Tools comparison */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { tool: "Make", type: "iPaaS visuel", best: "Workflows event-driven", price: "A partir de 16 euros/mois", color: "#6C5CE7" },
                      { tool: "n8n", type: "iPaaS open source", best: "Integrations techniques custom", price: "Gratuit (self-hosted) ou SaaS", color: "#FF7A59" },
                      { tool: "Fivetran", type: "ETL/ELT", best: "Synchro volumes + reporting", price: "A partir de 500 euros/mois", color: "#4B5EFC" },
                    ].map((t) => (
                      <div key={t.tool} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <p className="text-[12px] font-semibold mb-1" style={{ color: t.color }}>{t.tool}</p>
                        <p className="text-[10px] text-[#999] mb-2">{t.type}</p>
                        <p className="text-[11px] text-[#555] mb-1">Ideal pour : {t.best}</p>
                        <p className="text-[10px] text-[#BBB]">{t.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 — Cas Sage et Pennylane */}
              <section id="cas-sage-pennylane" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Cas pratiques</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Cas concrets : HubSpot + Sage et HubSpot + Pennylane</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p><strong className="text-white/80">Cas 1 : PME industrielle, HubSpot + Sage 100.</strong> Une PME de 80 personnes dans le secteur industriel utilise HubSpot CRM pour la gestion commerciale et Sage 100 pour la comptabilite et la facturation. Avant l&apos;integration, le processus prenait 3 jours entre la signature et l&apos;emission de la facture. L&apos;assistante commerciale re-saisissait chaque devis dans Sage manuellement. Solution deployee : un scenario Make qui exporte les deals &ldquo;Closed Won&rdquo; de HubSpot en fichier XML, formate selon le schema Sage, et depose le fichier sur un serveur SFTP. Sage importe automatiquement les fichiers toutes les heures. Resultat : le delai est passe de 3 jours a 4 heures, zero erreur de saisie, et l&apos;assistante commerciale a ete redeployee sur des taches a plus forte valeur ajoutee.</p>
                    <p><strong className="text-white/80">Cas 2 : SaaS B2B, HubSpot + Pennylane.</strong> Une startup SaaS de 25 personnes utilise HubSpot pour les ventes et le marketing, et Pennylane pour la comptabilite et la facturation. Le volume est de 30 a 50 deals par mois. Solution deployee : un scenario Make connecte via les APIs HubSpot et Pennylane. Quand un deal passe en Closed Won, Make verifie si le client existe dans Pennylane (recherche par SIREN), le cree si necessaire, puis genere un brouillon de facture avec les lignes de produit du devis HubSpot. La DAF valide le brouillon et emet la facture electronique via Pennylane (PDP integree). Le statut de la facture (emise, payee) est synchronise en retour sur le deal HubSpot. Resultat : le delai est passe de 2 jours a 2 heures, le DSO a baisse de 8 jours.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 — Erreurs courantes */}
              <section id="erreurs" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Erreurs courantes de l&apos;integration CRM-ERP</h2>
                  <div className="mt-2 space-y-3">
                    {[
                      { num: "01", title: "Pas de gestion des erreurs", desc: "Le scenario Make echoue (API indisponible, donnee manquante) et personne ne le sait. La facture n\u2019est jamais creee. Mettez en place des alertes email/Slack sur chaque erreur de scenario." },
                      { num: "02", title: "Pas de reconciliation", desc: "Les donnees divergent entre CRM et ERP au fil du temps (client modifie dans un outil mais pas dans l\u2019autre). Mettez en place une synchronisation bidirectionnelle ou une reconciliation quotidienne." },
                      { num: "03", title: "Ignorer les cas limites", desc: "Le scenario ne gere pas les avoir, les factures partielles, les acomptes, les modifications de devis post-signature. Documentez tous les cas possibles avant de commencer le developpement." },
                      { num: "04", title: "Pas de tests en conditions reelles", desc: "Tester sur 2 deals ne suffit pas. Testez sur 50 deals reels avec toutes les variantes (produits multiples, remises, TVA differentes, clients internationaux) avant la mise en production." },
                      { num: "05", title: "Oublier la conformite facturation electronique", desc: "L\u2019integration doit produire des factures conformes aux exigences legales (Factur-X, PDP). Verifiez que le format de sortie de votre ERP est compatible avant de construire l\u2019integration." },
                    ].map((err) => (
                      <div key={err.num} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <span className="text-[18px] font-bold text-[#E8E8E8] shrink-0">{err.num}</span>
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{err.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{err.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 — Cas concrets */}
              <section id="cas-concrets" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Checklist avant de lancer l&apos;integration</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de commencer le developpement de l&apos;integration CRM-ERP, validez chaque point de cette checklist. L&apos;integration CRM-ERP est un projet technique qui impacte la facturation et donc la tresorerie. Une erreur dans l&apos;integration peut avoir des consequences financieres reelles.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Catalogue produit synchronise entre CRM et ERP",
                      "Correspondance des identifiants clients (SIREN, ID interne)",
                      "Mapping des champs (adresse, conditions paiement, TVA)",
                      "Gestion des cas limites documentee (avoirs, acomptes)",
                      "Alertes email/Slack sur les erreurs de synchronisation",
                      "Reconciliation quotidienne automatisee",
                      "Tests sur 50+ deals reels avant mise en production",
                      "Conformite facturation electronique verifiee",
                      "Documentation du scenario pour la maintenance",
                      "Responsable technique identifie pour le suivi",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[11px] text-[#555]">
                        <div className="w-3.5 h-3.5 rounded border border-[#DDD] bg-white shrink-0 mt-0.5 flex items-center justify-center">
                          <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 — Approche Ceres */}
              <section id="approche-ceres" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Notre methode</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche de l&apos;integration CRM-ERP chez Ceres</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, nous accompagnons les PME et ETI dans l&apos;integration de HubSpot avec leur outil de facturation ou ERP. Notre objectif est d&apos;eliminer la double saisie, de reduire les erreurs et d&apos;accelerer le cycle Quote-to-Cash, tout en garantissant la conformite avec la facturation electronique.</p>
                    <p>Nous commencons par un audit du processus existant : quel est le parcours actuel du devis a la facture ? Combien de temps prend chaque etape ? Quels sont les points de friction ? Nous construisons ensuite le scenario d&apos;integration dans Make ou n8n, le testons sur des donnees reelles, et le deplorons en production avec un suivi continu.</p>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {[
                      "Audit du processus Quote-to-Cash actuel",
                      "Choix de l\u2019architecture d\u2019integration (iPaaS, API, all-in-one)",
                      "Mapping des champs et gestion des cas limites",
                      "Developpement du scenario dans Make ou n8n",
                      "Tests sur 50+ deals reels avant mise en production",
                      "Deploiement avec alertes d\u2019erreur et reconciliation",
                      "Formation de l\u2019equipe et documentation technique",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[12px] text-white/50">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {item}
                      </div>
                    ))}
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
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a connecter votre CRM et votre ERP ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On audite votre processus de facturation, on construit l&apos;integration HubSpot-ERP et on elimine la double saisie. Premiers resultats en 4 semaines.</p>
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
