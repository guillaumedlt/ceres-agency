"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Connecter CRM et ERP : le guide d'integration pour PME B2B",
  description: "Guide complet pour connecter CRM et ERP en PME B2B. Flux de donnees a synchroniser, architectures possibles, outils d'integration (Make, n8n, natif HubSpot), erreurs classiques, cout et timeline.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/connecter-crm-erp-integration" },
  articleSection: "Process & Silos",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-pas-parlent", title: "Pourquoi ils ne se parlent pas" },
  { id: "flux-donnees", title: "Les flux a synchroniser" },
  { id: "architectures", title: "Les architectures possibles" },
  { id: "outils-integration", title: "Les outils d'integration" },
  { id: "pas-synchroniser", title: "Ce qu'il ne faut PAS synchro" },
  { id: "erreurs-classiques", title: "Les erreurs classiques" },
  { id: "cout-timeline", title: "Le cout et la timeline" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "RevOps : connecter facturation, CRM et ERP", slug: "revops-facturation-crm-erp", category: "RevOps", color: "#FF7A59" },
  { title: "Zapier vs Make vs n8n : quel outil d'automatisation pour le RevOps", slug: "zapier-vs-make-vs-n8n-revops", category: "Process & Silos", color: "#6C5CE7" },
  { title: "Integration HubSpot x WhatsApp : guide pas a pas", slug: "integration-hubspot-whatsapp", category: "CRM & HubSpot", color: "#4B5EFC" },
];

export default function ConnecterCrmErpArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-pas-parlent");

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
        <div className="h-full bg-[#6C5CE7] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
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
                        ? "border-[#6C5CE7] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Connecter%20CRM%20et%20ERP%20%3A%20le%20guide%20d%27integration&url=https://ceres.agency/blog/connecter-crm-erp-integration" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/connecter-crm-erp-integration" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Connecter CRM et ERP</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Process &amp; Silos</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Connecter CRM et ERP : le guide d&apos;integration pour PME B2B
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Dans 70% des PME B2B, le CRM et l&apos;ERP ne se parlent pas. Les commerciaux saisissent les donnees deux fois, la facturation est decalee de 48h, et personne n&apos;a une vue unifiee du client. Ce guide couvre les flux a synchroniser, les architectures possibles, les outils, les erreurs classiques et le budget reel. Avec des solutions praticables, pas des projets a 6 mois.
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
              {/* Section 1 */}
              <section id="pourquoi-pas-parlent" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi CRM et ERP ne se parlent pas</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le CRM gere l&apos;avant-vente : prospection, pipeline, negociation, closing. L&apos;ERP gere l&apos;apres-vente : facturation, comptabilite, stocks, production. Entre les deux, un mur. Ce mur n&apos;est pas technique : il est organisationnel.</p>
                    <p>Quatre raisons expliquent pourquoi la plupart des PME fonctionnent avec des silos :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Equipes differentes, outils differents.</strong> Le CRM est choisi par les sales/marketing. L&apos;ERP est choisi par la finance/operations. Les deux equipes ont des priorites differentes, des budgets differents et ne se coordonnent pas sur les outils.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Historique.</strong> L&apos;ERP est souvent en place depuis 5 a 10 ans (Sage, Cegid, SAP). Le CRM est arrive apres (HubSpot, Salesforce). Personne n&apos;a pense a l&apos;integration au moment du choix du CRM parce que &ldquo;ca marchait comme ca&rdquo;.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Complexite percue.</strong> L&apos;integration CRM-ERP est percue comme un projet IT lourd, long et couteux. Les PME n&apos;ont ni le budget ni les ressources internes pour un projet de 6 mois. Donc elles ne font rien.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Donnees incompatibles.</strong> Le CRM et l&apos;ERP n&apos;utilisent pas les memes identifiants, les memes formats, les memes taxonomies. Un &ldquo;client&rdquo; dans le CRM n&apos;est pas structure de la meme maniere qu&apos;un &ldquo;tiers&rdquo; dans l&apos;ERP. La reconciliation semble impossible.</li>
                    </ul>
                    <p>Le cout de ce silo est concret : double saisie (2 a 5 heures par semaine pour l&apos;equipe), erreurs de facturation (3 a 8% des factures ont une erreur quand la saisie est manuelle), delais de facturation (48 a 72h entre le closing et la facture) et absence de vue client unifiee (le commercial ne sait pas si le client a paye, le comptable ne sait pas si un upsell est en cours).</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "70%", label: "Des PME B2B ont des silos CRM/ERP", color: "#EF4444" },
                      { stat: "5h/sem", label: "Perdues en double saisie", color: "#6C5CE7" },
                      { stat: "48-72h", label: "Delai moyen closing > facture", color: "#FF7A59" },
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

              {/* Section 2 */}
              <section id="flux-donnees" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les flux de donnees a synchroniser</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On ne synchronise pas tout entre CRM et ERP. On synchronise les donnees qui ont une valeur operationnelle des deux cotes. Quatre flux couvrent 90% des besoins d&apos;une PME B2B.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        flux: "Contacts / Entreprises",
                        direction: "CRM > ERP",
                        declencheur: "Deal passe en 'Closed Won'",
                        champs: "Nom, adresse, SIREN, email facturation, conditions de paiement, commercial assigne",
                        frequence: "Temps reel (webhook) ou toutes les heures",
                        color: "#6C5CE7",
                      },
                      {
                        flux: "Deals / Commandes",
                        direction: "CRM > ERP",
                        declencheur: "Deal passe en 'Closed Won'",
                        champs: "Montant, produits/lignes, remises, date de debut, duree d'engagement, conditions speciales",
                        frequence: "Temps reel (critique pour la facturation)",
                        color: "#FF7A59",
                      },
                      {
                        flux: "Factures / Paiements",
                        direction: "ERP > CRM",
                        declencheur: "Facture emise ou paiement recu",
                        champs: "Numero de facture, montant, date d'echeance, statut (payee, en retard, impayee)",
                        frequence: "Quotidien ou temps reel",
                        color: "#22C55E",
                      },
                      {
                        flux: "Produits / Catalogue",
                        direction: "ERP > CRM",
                        declencheur: "Modification du catalogue produit",
                        champs: "Reference, nom, prix unitaire, disponibilite, conditions",
                        frequence: "A chaque modification (evenementiel)",
                        color: "#4B5EFC",
                      },
                    ].map((item) => (
                      <div key={item.flux} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.flux}</span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: `${item.color}15`, color: item.color }}>{item.direction}</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2 text-[10px]">
                          <div><strong className="text-[#777]">Declencheur :</strong> <span className="text-[#999]">{item.declencheur}</span></div>
                          <div><strong className="text-[#777]">Frequence :</strong> <span className="text-[#999]">{item.frequence}</span></div>
                        </div>
                        <p className="text-[10px] text-[#999] mt-1"><strong className="text-[#777]">Champs :</strong> {item.champs}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La regle d&apos;or.</strong> Chaque donnee a une source de verite unique. Le CRM est la source de verite pour les contacts et les deals. L&apos;ERP est la source de verite pour les factures et les produits. Quand une donnee est synchronisee, elle est en lecture seule du cote destination. Jamais de double ecriture sur le meme champ.</p>
                    <p><strong className="text-[#111]">L&apos;identifiant commun.</strong> Le nerf de la guerre. Il faut un identifiant unique qui lie un contact dans le CRM a un tiers dans l&apos;ERP. Les options : le SIREN (pour les entreprises francaises), l&apos;email de facturation, ou un ID custom genere a la creation. Le SIREN est le plus fiable car il est unique et stable.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="architectures" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les architectures possibles : natif, iPaaS, custom API</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Trois architectures d&apos;integration existent. Chacune a ses forces et ses contraintes. Le bon choix depend de la complexite de vos flux, de votre budget et de vos ressources techniques.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        archi: "Integration native",
                        desc: "Connecteur pre-construit entre le CRM et l'ERP. Par exemple, HubSpot a des integrations natives avec QuickBooks, Xero, et des connecteurs Marketplace pour Sage, Pennylane. Le setup est rapide (quelques heures), mais la flexibilite est limitee aux champs et aux flux prevus par le connecteur.",
                        pour: "Rapide, pas besoin de competences techniques, maintenance minimale",
                        contre: "Peu flexible, souvent limite aux flux basiques, pas de logique metier custom",
                        ideal: "PME avec des flux simples et un stack CRM/ERP courant (HubSpot + Pennylane, par exemple)",
                        color: "#22C55E",
                      },
                      {
                        archi: "iPaaS (Make, n8n, Zapier)",
                        desc: "Un outil d'integration en mode visuel qui orchestre les flux entre CRM et ERP via leurs APIs respectives. On configure des scenarios : 'quand un deal passe en closed won dans HubSpot, creer un client et une facture dans Pennylane'. Flexibilite elevee, sans code.",
                        pour: "Flexible, pas de code, gestion des erreurs integree, evolutif",
                        contre: "Cout mensuel (10 a 100 EUR/mois), necessite de comprendre les APIs, maintenance des scenarios",
                        ideal: "PME avec des flux personnalises et un budget maitrise. C'est l'approche la plus courante.",
                        color: "#6C5CE7",
                      },
                      {
                        archi: "Custom API (developpement sur mesure)",
                        desc: "Un developpeur cree une integration custom en code qui connecte les APIs du CRM et de l'ERP. Flexibilite totale, performances optimales, mais cout et delai eleves.",
                        pour: "Flexibilite totale, performances, gestion de volumes importants",
                        contre: "Cout eleve (5 000 a 30 000 EUR), delai (2 a 6 mois), maintenance necessaire, dependance au developpeur",
                        ideal: "Entreprises avec des flux complexes, des volumes importants ou des ERP anciens sans API moderne",
                        color: "#4B5EFC",
                      },
                    ].map((item) => (
                      <div key={item.archi} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.archi}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="grid sm:grid-cols-2 gap-2 mb-2">
                          <div className="rounded-lg bg-[#22C55E]/5 p-2">
                            <span className="text-[10px] text-[#22C55E] font-semibold">Pour : </span>
                            <span className="text-[10px] text-[#888]">{item.pour}</span>
                          </div>
                          <div className="rounded-lg bg-[#EF4444]/5 p-2">
                            <span className="text-[10px] text-[#EF4444] font-semibold">Contre : </span>
                            <span className="text-[10px] text-[#888]">{item.contre}</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-[#999]"><strong className="text-[#777]">Ideal pour :</strong> {item.ideal}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Notre recommandation.</strong> Pour 80% des PME B2B, l&apos;approche iPaaS (Make ou n8n) est le bon choix. Elle offre la flexibilite necessaire pour gerer les flux personnalises, sans le cout et le delai d&apos;un developpement custom. Commencez par l&apos;iPaaS et ne passez au custom que si vous atteignez les limites de l&apos;outil (volumes, performances, complexite de la logique metier).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="outils-integration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les outils d&apos;integration : Make, n8n, natif HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Trois outils dominent le marche de l&apos;integration CRM-ERP pour les PME. Voici un comparatif pragmatique base sur notre experience avec des dizaines de projets d&apos;integration.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Comparatif des outils d&apos;integration</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Critere</th>
                            <th className="text-center py-2 px-2 text-[#6D00CC] font-semibold">Make</th>
                            <th className="text-center py-2 px-2 text-[#22C55E] font-semibold">n8n</th>
                            <th className="text-center py-2 pl-2 text-[#FF7A59] font-semibold">HubSpot natif</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { critere: "Prix", make: "10-100 EUR/mois", n8n: "Gratuit (self-hosted) ou 20 EUR/mois", hubspot: "Inclus dans le plan" },
                            { critere: "Facilite", make: "Interface visuelle intuitive", n8n: "Interface visuelle, plus technique", hubspot: "Tres simple, point and click" },
                            { critere: "Flexibilite", make: "Elevee (500+ apps)", n8n: "Tres elevee (code custom possible)", hubspot: "Limitee aux connecteurs dispo" },
                            { critere: "Gestion erreurs", make: "Excellente (retry, fallback)", n8n: "Bonne (retry, webhook erreur)", hubspot: "Basique" },
                            { critere: "ERP supportes", make: "Sage, Pennylane, QuickBooks, custom API", n8n: "Tout ce qui a une API", hubspot: "QuickBooks, Xero, quelques autres" },
                            { critere: "Maintenance", make: "Faible", n8n: "Moyenne (self-hosted) / Faible (cloud)", hubspot: "Tres faible" },
                          ].map((row) => (
                            <tr key={row.critere} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.critere}</td>
                              <td className="py-2.5 px-2 text-center text-[#777]">{row.make}</td>
                              <td className="py-2.5 px-2 text-center text-[#777]">{row.n8n}</td>
                              <td className="py-2.5 pl-2 text-center text-[#777]">{row.hubspot}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Notre choix : Make.</strong> Pour la majorite des PME B2B, Make offre le meilleur equilibre entre flexibilite, facilite et cout. L&apos;interface visuelle permet de creer et de maintenir les scenarios sans developpeur. La gestion des erreurs est native et robuste. Et le cout reste maitrise (10 a 50 EUR/mois pour la plupart des usages).</p>
                    <p><strong className="text-[#111]">Quand choisir n8n.</strong> Si vous avez des competences techniques en interne et que vous voulez heberger la solution chez vous (pour des raisons de securite ou de cout), n8n est une excellente option. La version self-hosted est gratuite et offre une flexibilite totale.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="pas-synchroniser" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les donnees qu&apos;il ne faut PAS synchroniser</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La tentation est de tout synchroniser. C&apos;est une erreur. Plus vous synchronisez de donnees, plus vous augmentez la complexite, les risques d&apos;erreur et les couts de maintenance. La regle est simple : ne synchroniser que ce qui a une valeur operationnelle des deux cotes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        donnee: "Notes et commentaires CRM",
                        raison: "Les notes commerciales sont informelles, non structurees et souvent confidentielles. Elles n'ont aucune valeur dans l'ERP. Les synchroniser pollue la base comptable avec des informations inutiles.",
                        color: "#EF4444",
                      },
                      {
                        donnee: "Historique complet des activites",
                        raison: "Emails, appels, meetings. Ce sont des donnees volumineuses qui alourdissent la synchro sans apporter de valeur cote ERP. Le comptable n'a pas besoin de savoir que le commercial a envoye 15 emails au prospect.",
                        color: "#FF7A59",
                      },
                      {
                        donnee: "Leads et prospects (non clients)",
                        raison: "L'ERP gere les clients, pas les prospects. Synchroniser les prospects pollue la base tiers avec des entites qui ne genereront peut-etre jamais de facture. Ne synchroniser que les contacts/entreprises lies a un deal closed won.",
                        color: "#6C5CE7",
                      },
                      {
                        donnee: "Donnees marketing (scores, campagnes, UTM)",
                        raison: "Les donnees marketing n'ont aucune utilite dans l'ERP. Elles sont specifiques au CRM et au marketing. Les inclure dans la synchro ajoute de la complexite sans valeur.",
                        color: "#4B5EFC",
                      },
                    ].map((item) => (
                      <div key={item.donnee} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.donnee}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.raison}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le principe : moins vous synchronisez, mieux vous synchronisez. Chaque champ synchronise est un champ a maintenir, a mapper, a surveiller. Commencez par le minimum vital (contacts clients, deals closes, factures, produits) et ajoutez des champs uniquement quand un besoin operationnel concret le justifie.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="erreurs-classiques" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs classiques : doublons, conflits et cascades</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les projets d&apos;integration CRM-ERP echouent rarement pour des raisons techniques. Ils echouent a cause de mauvaises decisions de conception. Voici les erreurs les plus frequentes.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Doublons massifs",
                        desc: "Le meme client existe dans les deux systemes avec des noms legerement differents ('Societe Dupont' vs 'DUPONT SAS'). Sans regle de deduplication, la synchro cree un doublon a chaque execution. En quelques semaines, la base tiers de l'ERP est polluee par des centaines de doublons.",
                        color: "#EF4444",
                        fix: "Definir un identifiant de reconciliation unique (SIREN, email de facturation) AVANT de lancer la synchro. Nettoyer les doublons existants dans les deux systemes."
                      },
                      {
                        title: "Conflits de mise a jour",
                        desc: "Le commercial change l'adresse dans le CRM. Le comptable change l'adresse dans l'ERP. La synchro ecrase l'un avec l'autre. Qui a raison ? Sans regle de priorite, c'est le dernier a ecrire qui gagne, et l'autre equipe perd sa modification sans meme le savoir.",
                        color: "#FF7A59",
                        fix: "Chaque champ a une source de verite unique. L'adresse de facturation est geree dans l'ERP (source de verite). L'adresse commerciale est geree dans le CRM. Pas de double ecriture."
                      },
                      {
                        title: "Cascades non maitrisees",
                        desc: "Supprimer un contact dans le CRM declenche une suppression dans l'ERP, qui supprime les factures associees, qui fausse la comptabilite. Les cascades non controlees sont la source des incidents les plus graves.",
                        color: "#6C5CE7",
                        fix: "Ne jamais synchroniser les suppressions automatiquement. Desactiver ou archiver au lieu de supprimer. Les suppressions doivent etre manuelles et validees."
                      },
                      {
                        title: "Pas de gestion des erreurs",
                        desc: "La synchro echoue silencieusement. Un deal closed won n'est jamais cree dans l'ERP. La facture n'est jamais emise. Personne ne s'en rend compte avant que le client appelle pour demander sa facture, 3 semaines plus tard.",
                        color: "#4B5EFC",
                        fix: "Configurer des alertes (Slack, email) pour chaque erreur de synchro. Dashboard de monitoring avec le nombre de synchros reussies/echouees par jour. Verification hebdomadaire."
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#22C55E]/5 p-2">
                          <span className="text-[10px] text-[#22C55E] font-semibold shrink-0 mt-0.5">Solution :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.fix}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La regle : testez sur un petit echantillon avant de lancer la synchro sur toute la base. 10 clients, 10 deals, 10 factures. Verifiez chaque champ, chaque cas limite, chaque scenario d&apos;erreur. Une semaine de tests en evite six mois de nettoyage.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="cout-timeline" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le cout et la timeline realistes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le cout d&apos;une integration CRM-ERP depend de l&apos;approche choisie et de la complexite des flux. Voici des fourchettes realistes basees sur notre experience avec des PME B2B de 10 a 200 personnes.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Budget et timeline par approche</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Approche</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Setup</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Cout mensuel</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Timeline</th>
                            <th className="text-center py-2 pl-2 text-[#999] font-semibold">Maintenance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { approche: "Integration native", setup: "0 - 500 EUR", mensuel: "0 EUR (inclus)", timeline: "1-3 jours", maintenance: "Quasi nulle" },
                            { approche: "iPaaS (Make/n8n)", setup: "1 500 - 5 000 EUR", mensuel: "10 - 100 EUR", timeline: "2-4 semaines", maintenance: "2-4h/mois" },
                            { approche: "Custom API", setup: "5 000 - 30 000 EUR", mensuel: "200 - 500 EUR", timeline: "2-6 mois", maintenance: "1-2 jours/mois" },
                          ].map((row) => (
                            <tr key={row.approche} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.approche}</td>
                              <td className="py-2.5 px-2 text-center">
                                <span className="inline-block px-2 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">{row.setup}</span>
                              </td>
                              <td className="py-2.5 px-2 text-center text-[#777]">{row.mensuel}</td>
                              <td className="py-2.5 px-2 text-center text-[#777]">{row.timeline}</td>
                              <td className="py-2.5 pl-2 text-center text-[#999]">{row.maintenance}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le ROI est rapide.</strong> Si vous economisez 5 heures de double saisie par semaine (cout moyen : 150 EUR/semaine) et que vous reduisez les erreurs de facturation de 5% (cout moyen : 500 EUR/mois en corrections et relances), l&apos;investissement dans une integration iPaaS (2 000 EUR de setup + 30 EUR/mois) est rentabilise en moins de 3 mois.</p>
                    <p><strong className="text-[#111]">Le cout cache : la preparation des donnees.</strong> Le nettoyage prealable des donnees (deduplication, standardisation, mapping des champs) represente souvent 40 a 60% du temps total du projet. Ne l&apos;oubliez pas dans votre timeline. Un nettoyage bacleest la premiere cause d&apos;echec.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, l&apos;integration CRM-ERP fait partie de chaque mission RevOps. Parce qu&apos;un process commercial qui s&apos;arrete au closing est un process incomplet. La boucle va du premier contact a la derniere facture payee.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Audit des flux existants", desc: "On commence par cartographier les flux de donnees actuels entre vos systemes. Qui saisit quoi, ou, quand. On identifie les doublons, les trous et les goulots d'etranglement. En moyenne, on decouvre 3 a 5 flux manuels qui peuvent etre automatises.", color: "#6C5CE7" },
                      { title: "Architecture sur mesure", desc: "On choisit l'architecture adaptee a votre stack et votre budget. Pour 80% de nos clients, c'est Make + HubSpot API. Pour les cas complexes (ERP ancien, volumes importants), on recommande n8n self-hosted ou du custom.", color: "#4B5EFC" },
                      { title: "Deploiement progressif", desc: "On ne synchronise pas tout d'un coup. On commence par le flux le plus critique (souvent deals > factures), on teste, on valide, puis on ajoute les flux suivants. Chaque flux est mis en production uniquement apres une phase de test sur un echantillon.", color: "#22C55E" },
                      { title: "Monitoring et alertes", desc: "Chaque integration est monitoree avec des alertes Slack en cas d'erreur. Un dashboard resume le nombre de synchros reussies/echouees par jour. Le client a une visibilite complete sur l'etat de l'integration.", color: "#FF7A59" },
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

                  <div className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4 mb-6">
                    <p className="text-[12px] font-semibold text-white mb-3">Resultats moyens constates chez nos clients</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "-90%", label: "Double saisie eliminee", color: "#22C55E" },
                        { stat: "< 1h", label: "Delai closing > facture", color: "#6C5CE7" },
                        { stat: "99,5%", label: "Taux de synchro sans erreur", color: "#4B5EFC" },
                        { stat: "3 sem", label: "Deploiement moyen", color: "#FF7A59" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>L&apos;integration CRM-ERP n&apos;est pas un projet IT. C&apos;est un projet RevOps. Il touche les sales, la finance et les operations. Il doit etre pilote par quelqu&apos;un qui comprend les deux mondes. C&apos;est exactement ce qu&apos;on fait : on parle CRM avec les sales et ERP avec la finance, et on construit le pont entre les deux.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Connecter votre CRM et votre ERP ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on integre CRM et ERP en 3 semaines avec Make et HubSpot. Plus de double saisie, des factures en temps reel et une vue client unifiee. Commencez par un appel de 30 minutes pour cartographier vos flux.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6C5CE7] text-white rounded-lg text-[13px] font-medium hover:bg-[#5B4ED6] transition-colors">
                  Integrer CRM et ERP
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#6C5CE7] transition-colors leading-[1.4]">{a.title}</p>
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
