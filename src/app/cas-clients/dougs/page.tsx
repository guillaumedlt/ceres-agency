"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Dougs : migration Salesforce vers HubSpot CRM + Marketing",
  description: "Comment Ceres a accompagne Dougs dans la migration complete de Salesforce et Pardot vers HubSpot : CRM, marketing, 30 000 contacts, zero perte de donnees.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-20",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "pourquoi-quitter", title: "Pourquoi quitter Salesforce" },
  { id: "choix-hubspot", title: "Le choix de HubSpot" },
  { id: "migration-crm", title: "Migration CRM" },
  { id: "migration-marketing", title: "Migration Marketing" },
  { id: "unification", title: "Unification CRM + Marketing" },
  { id: "automatisation", title: "Configuration et automatisation" },
  { id: "dashboards", title: "Dashboards et reporting" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Retour client" },
];

export default function DougsCaseStudy() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("contexte");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#6C5CE7] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#6C5CE7", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "22%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "58%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "90%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.05, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <img src="https://www.google.com/s2/favicons?domain=dougs.fr&sz=32" alt="Dougs" className="w-5 h-5" />
                <span className="text-[12px] font-semibold text-[#111]">Dougs</span>
              </div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#6C5CE7] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/cas-clients" className="hover:text-[#111] transition-colors">Cas clients</Link><span>/</span>
              <span className="text-[#666]">Dougs</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">14 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=dougs.fr&sz=64" alt="Dougs" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Dougs</h1>
                  <p className="text-[12px] text-[#999]">Expert-comptable en ligne | Scale-up French Tech | 300+ personnes</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Migration complete de Salesforce et Pardot vers HubSpot CRM + Marketing Hub. 30 000 contacts migres sans perte de donnees, couts CRM reduits de 45%, adoption multipliee par 1.6 en 16 semaines.
              </p>

              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { value: "-45%", label: "Cout CRM annuel", color: "#22C55E" },
                    { value: "+60%", label: "Adoption equipe", color: "#4B5EFC" },
                    { value: "30K", label: "Contacts migres", color: "#6C5CE7" },
                    { value: "0", label: "Perte de donnees", color: "#FF7A59" },
                    { value: "16 sem.", label: "Time-to-value", color: "#22C55E" },
                  ].map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-[24px] font-bold" style={{ color: r.color }}>{r.value}</div>
                      <div className="text-[10px] text-white/40">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </header>

            <article>
              {/* Contexte */}
              <section id="contexte" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le contexte</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Dougs est l&apos;un des leaders de l&apos;expertise comptable en ligne en France. Fondee a Lyon, la scale-up accompagne des milliers de TPE, freelances et PME dans leur comptabilite, leurs declarations fiscales et leur gestion administrative. Avec plus de 300 collaborateurs et une croissance soutenue, Dougs fait partie des scale-ups les plus prometteuses de la French Tech.</p>
                    <p>Quand Ceres intervient, Dougs utilise Salesforce comme CRM depuis 3 ans. L&apos;equipe commerciale gere ses prospects et clients dans Salesforce, tandis que le marketing opere sur Pardot (Salesforce Marketing Cloud Account Engagement) pour l&apos;email marketing, les landing pages et le lead nurturing.</p>
                    <p>Sur le papier, l&apos;ecosysteme Salesforce couvre tous les besoins. En pratique, la realite est bien differente : une complexite excessive pour les usages reels de Dougs, des couts qui explosent a chaque renouvellement, et une adoption qui s&apos;effrite progressivement cote equipes.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Collaborateurs", value: "300+" },
                      { label: "Annees sur Salesforce", value: "3 ans" },
                      { label: "Contacts dans le CRM", value: "30 000+" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Pourquoi quitter Salesforce */}
              <section id="pourquoi-quitter" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi quitter Salesforce</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La decision de quitter Salesforce n&apos;a pas ete prise a la legere. Mais apres 3 ans d&apos;utilisation, le bilan etait sans appel. Voici ce qu&apos;on a constate lors de l&apos;audit initial.</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-5">
                    <p className="text-[12px] font-semibold text-[#EF4444] mb-4">Les problemes identifies</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { stat: "180K EUR", desc: "Cout annuel Salesforce + Pardot, en hausse de 25% a chaque renouvellement" },
                        { stat: "35%", desc: "Taux d\u2019adoption reel du CRM par les commerciaux (le reste passait par Excel et Slack)" },
                        { stat: "2", desc: "Outils separes pour le marketing (Pardot) et les sales (Salesforce), jamais vraiment connectes" },
                        { stat: "0", desc: "Vue unifiee du parcours client, du premier clic marketing au deal signe" },
                        { stat: "12 sem.", desc: "Pour implementer un nouveau workflow, entre la demande et la mise en prod (dependance admin Salesforce)" },
                        { stat: "70%", desc: "Des fonctionnalites Salesforce payees mais jamais utilisees par l\u2019equipe" },
                      ].map((p) => (
                        <div key={p.desc} className="flex gap-3 items-start">
                          <span className="text-[18px] font-bold text-[#EF4444] shrink-0 w-14 text-right">{p.stat}</span>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le point de rupture : lors du dernier renouvellement, Salesforce a propose une augmentation de 25% du contrat annuel. En parallele, l&apos;equipe marketing se plaignait de Pardot, juge trop complexe pour creer un simple email, et les commerciaux contournaient systematiquement le CRM en notant leurs interactions dans un Google Sheet partage.</p>
                    <p>La direction a alors lance un appel d&apos;offres pour evaluer les alternatives. Trois options ont ete comparees : rester sur Salesforce en optimisant, migrer vers HubSpot, ou migrer vers Pipedrive. Ceres a ete mandate pour accompagner l&apos;evaluation et, le cas echeant, piloter la migration.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Le choix de HubSpot */}
              <section id="choix-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le choix de HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres 3 semaines d&apos;evaluation comparative, HubSpot s&apos;est impose comme le choix le plus pertinent pour Dougs. Voici les criteres qui ont fait la difference.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "CRM + Marketing dans un seul outil", desc: "Fini la separation Salesforce/Pardot. Avec HubSpot, le CRM et le Marketing Hub partagent la meme base de donnees. Un lead genere par le marketing est instantanement visible par les sales, avec tout son historique d\u2019interactions.", color: "#6C5CE7" },
                      { title: "UX pensee pour les utilisateurs, pas les admins", desc: "Les commerciaux de Dougs ne sont pas des power users Salesforce. HubSpot offre une interface intuitive ou chaque action prend 2 clics au lieu de 8. L\u2019equipe marketing peut creer un email ou une landing page sans passer par un developpeur.", color: "#4B5EFC" },
                      { title: "Cout total inferieur de 45%", desc: "En comparant licence par licence, HubSpot CRM Pro + Marketing Pro revenait a 45% de moins que le stack Salesforce + Pardot, meme en incluant le cout de la migration. Le ROI etait positif des la premiere annee.", color: "#22C55E" },
                      { title: "Ecosysteme et integrations natives", desc: "Dougs utilise Slack, Google Workspace, Stripe et Intercom. HubSpot propose des integrations natives pour chacun de ces outils, la ou Salesforce necessitait des connecteurs custom ou des solutions middleware couteuses.", color: "#FF7A59" },
                      { title: "Rapidite d\u2019implementation", desc: "La ou une reconfiguration Salesforce aurait pris 6+ mois, la migration vers HubSpot a ete planifiee sur 16 semaines, formation des equipes incluse. L\u2019equipe pouvait etre autonome bien plus rapidement.", color: "#D4A27F" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 items-start rounded-xl border border-[#F2F2F2] p-4">
                        <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={{ background: item.color }} />
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{item.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 border-b border-[#E8E8E8]">
                      <span className="text-[10px] text-[#999] font-medium">Comparatif cout annuel (licences + maintenance)</span>
                    </div>
                    <div className="bg-white p-4">
                      <div className="space-y-3">
                        {[
                          { label: "Salesforce + Pardot", value: "180K EUR/an", pct: 100, color: "#EF4444" },
                          { label: "HubSpot CRM Pro + Marketing Pro", value: "99K EUR/an", pct: 55, color: "#22C55E" },
                        ].map((row) => (
                          <div key={row.label}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[11px] text-[#555]">{row.label}</span>
                              <span className="text-[11px] font-semibold text-[#111]">{row.value}</span>
                            </div>
                            <div className="h-3 bg-[#F5F5F5] rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: row.color }} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] text-[#999] mt-3">Economie annuelle : 81K EUR, soit -45% sur le cout CRM total</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Migration CRM */}
              <section id="migration-crm" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Migration CRM</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Migration CRM : Salesforce vers HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>La migration CRM est le coeur du projet. 30 000 contacts, des milliers de companies et de deals, 3 ans d&apos;historique d&apos;activites. Chaque donnee devait arriver dans HubSpot sans perte et dans le bon format.</p>
                  </div>

                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Audit Salesforce complet", desc: "Cartographie de l\u2019ensemble des objets, champs, relations, workflows et rapports utilises dans Salesforce. Sur les 420 champs custom existants, seuls 250 etaient reellement utilises. Les 170 restants ont ete documentes et archives.", color: "#6C5CE7" },
                      { num: "2", title: "Mapping des 250+ champs", desc: "Chaque champ Salesforce a ete mappe vers son equivalent HubSpot : proprietes standard quand possible, proprietes custom quand necessaire. Les picklists, les formules et les champs de lookup ont ete traites au cas par cas.", color: "#4B5EFC" },
                      { num: "3", title: "Nettoyage et deduplication", desc: "Avant la migration, on a nettoye les donnees : suppression de 4 200 doublons, correction de 1 800 emails invalides, standardisation des noms de societes. On ne migre pas du dirty data vers un CRM propre.", color: "#22C55E" },
                      { num: "4", title: "Migration Contacts et Companies", desc: "Migration de 30 000 contacts et 8 500 companies avec toutes leurs proprietes, leurs associations et leur historique. Chaque contact a ete rattache a sa company, avec les bons roles et les bonnes permissions.", color: "#FF7A59" },
                      { num: "5", title: "Migration Deals et Pipelines", desc: "Recreation des 3 pipelines Salesforce dans HubSpot avec leurs etapes. Migration de 2 400 deals actifs et 12 000 deals closes avec montants, dates, proprietes custom et associations aux contacts et companies.", color: "#D4A27F" },
                      { num: "6", title: "Migration des activites", desc: "Import de l\u2019historique complet : 85 000 emails logges, 12 000 notes, 6 000 taches, 3 500 meetings. Chaque activite a ete associee au bon contact et au bon deal. Les commerciaux retrouvent tout leur historique dans HubSpot.", color: "#6C5CE7" },
                      { num: "7", title: "Validation et recette", desc: "Tests de reconciliation sur 100% des objets : comptage, sommes, spot-checks sur 500 enregistrements aleatoires. Taux de concordance : 100%. Zero perte de donnees confirmee.", color: "#4B5EFC" },
                    ].map((point, i) => (
                      <div key={point.num}>
                        <div className="flex gap-3 items-start py-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: point.color }}>
                            {point.num}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-white mb-1">{point.title}</p>
                            <p className="text-[12px] text-white/40 leading-[1.65]">{point.desc}</p>
                          </div>
                        </div>
                        {i < 6 && <div className="ml-4 w-px h-4 bg-white/10" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "30 000", label: "Contacts migres", color: "#22C55E" },
                      { value: "8 500", label: "Companies", color: "#4B5EFC" },
                      { value: "14 400", label: "Deals", color: "#6C5CE7" },
                      { value: "106K", label: "Activites", color: "#FF7A59" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/5 p-3 text-center">
                        <div className="text-[18px] font-bold" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-[10px] text-white/30 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Migration Marketing */}
              <section id="migration-marketing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Migration Marketing : Pardot vers HubSpot Marketing Hub</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En parallele de la migration CRM, l&apos;equipe marketing devait quitter Pardot (Salesforce Marketing Cloud Account Engagement) pour HubSpot Marketing Hub. Un chantier tout aussi critique : les campagnes ne pouvaient pas s&apos;arreter pendant la transition.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Templates email", desc: "Recreation de 24 templates email dans HubSpot : newsletters, sequences nurturing, emails transactionnels, notifications internes. Chaque template a ete redesigne pour etre responsive et conforme a la charte Dougs, avec des modules drag-and-drop editables par le marketing sans code.", count: "24 templates" },
                      { title: "Listes et segments", desc: "Migration de 85 listes Pardot vers HubSpot : listes statiques converties, listes dynamiques recreees avec les criteres equivalents en filtres HubSpot. Les listes de suppression et de compliance ont ete traitees en priorite pour respecter le RGPD.", count: "85 listes" },
                      { title: "Workflows marketing", desc: "8 workflows Pardot ont ete recreees dans HubSpot : welcome series, lead nurturing par persona, re-engagement, upsell, onboarding client, NPS post-signup, reactivation dormants et anniversaire client. Chaque workflow a ete teste avec des contacts fictifs avant mise en production.", count: "8 workflows" },
                      { title: "Formulaires", desc: "Migration de 15 formulaires : formulaires de contact, demandes de demo, inscription webinars, telechargement de guides. Chaque formulaire HubSpot a ete configure avec les hidden fields UTM, les notifications et les workflows de suivi.", count: "15 formulaires" },
                      { title: "Landing pages", desc: "Recreation de 12 landing pages dans HubSpot : pages de conversion, pages de telechargement, pages webinar. Les URL ont ete conservees avec des redirections 301 pour preserver le SEO et les campagnes en cours.", count: "12 pages" },
                      { title: "Lead nurturing et sequences", desc: "Les 4 sequences Pardot principales ont ete reconstruites dans HubSpot Sequences : qualification initiale, demo follow-up, proposition commerciale et relance post-devis. Les delais, les conditions de sortie et les actions de fallback ont ete recalibres.", count: "4 sequences" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-[#111]">{item.title}</p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-medium">{item.count}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.65]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8F5E9] bg-[#F1F8E9] p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Zero downtime marketing</p>
                    <p className="text-[11px] text-[#555] leading-[1.65]">La migration marketing a ete executee en mode &ldquo;parallel run&rdquo; : Pardot et HubSpot ont fonctionne en parallele pendant 3 semaines. Les nouvelles campagnes etaient lancees dans HubSpot tandis que les campagnes existantes terminaient leur cycle dans Pardot. Aucune campagne n&apos;a ete interrompue, aucun lead n&apos;a ete perdu pendant la transition.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Unification CRM + Marketing */}
              <section id="unification" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Unification CRM + Marketing : le vrai avantage</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La migration technique etait un prerequis. Le vrai gain, c&apos;est l&apos;unification des equipes marketing et sales dans un seul outil. Ce que Salesforce + Pardot ne permettaient jamais vraiment, HubSpot le rend natif.</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 border-b border-[#E8E8E8]">
                      <span className="text-[10px] text-[#999] font-medium">Avant vs Apres : alignement marketing-sales</span>
                    </div>
                    <div className="bg-white p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-4">
                          <p className="text-[11px] font-semibold text-[#EF4444] mb-3">Avant (Salesforce + Pardot)</p>
                          <div className="space-y-2">
                            {[
                              "Marketing dans Pardot, sales dans Salesforce",
                              "Sync bi-directionnelle instable entre les 2 outils",
                              "Lifecycle stages geres manuellement, souvent faux",
                              "Attribution marketing invisible cote sales",
                              "Handoff MQL vers SQL via email, pas dans le CRM",
                              "Reporting separe, chiffres qui ne matchent pas",
                            ].map((item) => (
                              <p key={item} className="text-[10px] text-[#777] flex items-start gap-2">
                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#EF4444] shrink-0 mt-0.5"><path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-xl border border-[#E8F5E9] bg-[#F1F8E9] p-4">
                          <p className="text-[11px] font-semibold text-[#22C55E] mb-3">Apres (HubSpot unifie)</p>
                          <div className="space-y-2">
                            {[
                              "Marketing et sales dans le meme CRM",
                              "Une seule base de donnees, zero sync a gerer",
                              "Lifecycle stages automatises par workflows",
                              "Le commercial voit tout le parcours marketing",
                              "Handoff automatique avec notification et assignation",
                              "Un seul reporting, une seule verite",
                            ].map((item) => (
                              <p key={item} className="text-[10px] text-[#555] flex items-start gap-2">
                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;unification a permis de mettre en place des lifecycle stages coherents de bout en bout : Subscriber, Lead, MQL, SQL, Opportunity, Customer, Evangelist. Chaque transition est declenchee automatiquement par un workflow base sur des criteres objectifs (score, actions, qualification commerciale). Plus de mise a jour manuelle, plus de desalignement.</p>
                    <p>Le commercial qui prend un appel voit instantanement les pages visitees, les emails ouverts, les contenus telecharges et la source d&apos;acquisition du prospect. L&apos;equipe marketing sait en temps reel combien de MQLs sont devenus SQLs et combien ont signe. L&apos;attribution marketing vers revenue est enfin seamless.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Configuration et automatisation */}
              <section id="automatisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Configuration et automatisation</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une fois les donnees migrees et l&apos;outil unifie, on a configure HubSpot pour coller aux processus de Dougs : pipelines, automatisations, scoring et integrations.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "3 pipelines configures", desc: "Pipeline Acquisition (prospects entrants et outbound), Pipeline Upsell (clients existants) et Pipeline Partenaires (apporteurs d\u2019affaires). Chaque pipeline avec ses etapes, ses proprietes obligatoires par etape et ses regles de validation." },
                      { step: "02", title: "18 workflows automatises", desc: "Lifecycle stage automation (6 workflows), lead assignment et rotation (3 workflows), notifications Slack (4 workflows), data hygiene (3 workflows), task creation (2 workflows). Chaque workflow documente avec son declencheur, ses conditions et ses actions." },
                      { step: "03", title: "Sequences commerciales", desc: "5 sequences de prospection et de suivi creees pour les commerciaux : premier contact, relance post-demo, envoi de proposition, relance post-devis, win-back. Chaque sequence avec 4 a 6 etapes, des delais optimises et des templates personnalisables." },
                      { step: "04", title: "Lead scoring", desc: "Score de qualification base sur 2 dimensions : le fit (taille entreprise, secteur, CA) et l\u2019engagement (pages vues, emails ouverts, formulaires soumis, contenu telecharge). Un MQL est declenche automatiquement a 50 points, un SQL a 80 points." },
                      { step: "05", title: "Notifications Slack", desc: "4 canaux Slack integres : #new-leads (chaque nouveau MQL), #deals-won (chaque deal signe avec montant), #deals-at-risk (deals sans activite depuis 14 jours), #weekly-digest (recapitulatif pipeline chaque lundi matin)." },
                      { step: "06", title: "Integrations", desc: "Connexion native avec Slack, Google Workspace (sync emails + calendrier), Stripe (sync paiements et abonnements), Intercom (sync conversations support) et Calendly (prise de RDV automatique depuis les sequences)." },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[11px] font-bold shrink-0">{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <span className="text-[10px] text-white/50 font-mono">Exemple workflow : Lead Assignment automatique</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[10px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">
{`Declencheur : Lifecycle stage = MQL
  |
  v
Condition : Region du contact
  |-- Ile-de-France     -> Assign a Equipe Paris (round-robin)
  |-- Lyon / Rhone-Alpes -> Assign a Equipe Lyon (round-robin)
  |-- Autres regions     -> Assign a Equipe Remote (round-robin)
  |
  v
Actions automatiques :
  1. Creer tache "Premier contact" (deadline J+1)
  2. Notification Slack #new-leads avec nom + source + score
  3. Email interne au commercial avec fiche contact
  4. Si pas de contact dans 48h -> alerte manager`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Dashboards et reporting */}
              <section id="dashboards" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Dashboards et reporting</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a cree 6 dashboards HubSpot pour remplacer les 14 rapports Salesforce et les 3 Google Sheets qui servaient de reporting. Un seul endroit, une seule verite.</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#F8F8F8] px-4 py-2 flex items-center gap-2 border-b border-[#E8E8E8]">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /><div className="w-2 h-2 rounded-full bg-[#CCC]" /></div>
                      <span className="text-[10px] text-[#999] font-medium">Dashboard : Pipeline Overview</span>
                    </div>
                    <div className="bg-white p-4">
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {[
                          { label: "Deals ouverts", value: "142", change: "+18%", color: "#22C55E" },
                          { label: "Pipeline value", value: "2.4M EUR", change: "+12%", color: "#4B5EFC" },
                          { label: "Win rate", value: "34%", change: "+5pts", color: "#6C5CE7" },
                          { label: "Cycle moyen", value: "28j", change: "-6j", color: "#FF7A59" },
                        ].map((kpi) => (
                          <div key={kpi.label} className="rounded-lg border border-[#F2F2F2] p-2.5 text-center">
                            <p className="text-[14px] font-bold text-[#111]">{kpi.value}</p>
                            <p className="text-[9px] text-[#999]">{kpi.label}</p>
                            <p className="text-[9px] font-medium" style={{ color: kpi.color }}>{kpi.change}</p>
                          </div>
                        ))}
                      </div>

                      <p className="text-[9px] font-semibold text-[#999] uppercase tracking-wider mb-2">Pipeline par etape</p>
                      <div className="space-y-1.5">
                        {[
                          { stage: "Nouveau lead", deals: 45, value: "680K", pct: 32, color: "#6C5CE7" },
                          { stage: "Qualification", deals: 32, value: "520K", pct: 23, color: "#4B5EFC" },
                          { stage: "Demo planifiee", deals: 28, value: "480K", pct: 20, color: "#22C55E" },
                          { stage: "Proposition envoyee", deals: 22, value: "420K", pct: 18, color: "#FF7A59" },
                          { stage: "Negociation", deals: 15, value: "310K", pct: 11, color: "#D4A27F" },
                        ].map((s) => (
                          <div key={s.stage} className="flex items-center gap-2">
                            <span className="text-[10px] text-[#777] w-[130px] shrink-0 truncate">{s.stage}</span>
                            <div className="flex-1 h-4 bg-[#F5F5F5] rounded-full overflow-hidden">
                              <div className="h-full rounded-full flex items-center pl-2" style={{ width: `${Math.max(s.pct, 8)}%`, background: s.color }}>
                                <span className="text-[8px] text-white font-medium">{s.deals}</span>
                              </div>
                            </div>
                            <span className="text-[10px] text-[#999] w-12 text-right">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Pipeline Overview", desc: "Vue en temps reel du pipeline : deals par etape, valeur totale, win rate, cycle de vente, forecast. Filtreable par commercial, par source et par periode.", reports: "8 rapports" },
                      { title: "Marketing Performance", desc: "Leads generes par canal, conversion rate par source, cout par lead, emails envoyes vs ouverts vs cliques. Vue mensuelle et trimestrielle.", reports: "6 rapports" },
                      { title: "Attribution Revenue", desc: "Revenue attribue par canal marketing (first touch et last touch). ROI par campagne. Lien direct entre depenses marketing et deals signes.", reports: "5 rapports" },
                      { title: "Activite Commerciale", desc: "Nombre d\u2019appels, emails, meetings par commercial. Taux de reponse aux leads. Temps moyen de premier contact. Classement equipe.", reports: "7 rapports" },
                      { title: "Revenue et Forecast", desc: "MRR, ARR, expansion revenue, churn. Forecast base sur le pipeline weighted. Comparaison objectifs vs realise par mois et par trimestre.", reports: "6 rapports" },
                      { title: "Data Quality", desc: "Taux de completude des fiches contacts et companies. Contacts sans owner, deals sans next step, companies sans secteur. Alertes automatiques pour les anomalies.", reports: "4 rapports" },
                    ].map((d) => (
                      <div key={d.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-[#111]">{d.title}</p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-medium">{d.reports}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{d.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats apres 16 semaines</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "-45%", label: "Cout CRM annuel (de 180K a 99K EUR)", color: "#22C55E" },
                      { value: "+60%", label: "Adoption CRM par les equipes (de 35% a 95%)", color: "#4B5EFC" },
                      { value: "30 000", label: "Contacts migres sans perte de donnees", color: "#6C5CE7" },
                      { value: "0", label: "Donnees perdues pendant la migration", color: "#FF7A59" },
                      { value: "16 sem.", label: "De l\u2019audit initial a l\u2019equipe autonome sur HubSpot", color: "#22C55E" },
                      { value: "1", label: "Seul outil pour marketing + sales (vs 2 avant)", color: "#D4A27F" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Les commerciaux utilisent reellement le CRM : 95% d\u2019adoption vs 35% sur Salesforce",
                      "L\u2019equipe marketing cree ses propres emails et landing pages sans demander au dev",
                      "Un nouveau workflow est deploye en quelques heures au lieu de 12 semaines",
                      "Le reporting est automatique et fiable, plus de compilation manuelle dans des Sheets",
                      "Le handoff marketing vers sales est automatise et trace de bout en bout",
                      "L\u2019economie de 81K EUR par an est redeployee sur les campagnes marketing",
                    ].map((r) => (
                      <p key={r} className="text-[11px] text-white/50 flex items-start gap-2">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {r}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Temoignage */}
              <section id="temoignage" className="mb-8">
                <div className="rounded-2xl border-2 border-[#6C5CE7]/20 bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(108,92,231,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[14px] font-bold shrink-0">D</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;On repoussait la migration depuis un an parce qu&apos;on avait peur de perdre des donnees et de paralyser les equipes pendant la transition. Ceres a rendu le projet presque indolore. En 16 semaines, on est passe d&apos;un Salesforce sous-utilise et couteux a un HubSpot ou tout le monde travaille vraiment. Les commerciaux ont adopte l&apos;outil en quelques jours, le marketing est autonome sur ses campagnes, et on a retrouve une vue unifiee du parcours client qu&apos;on n&apos;avait jamais eue avec Salesforce + Pardot. Le plus marquant : on a economise 81K euros par an tout en gagnant en fonctionnalites. On aurait du le faire bien plus tot.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Head of Sales &amp; RevOps</p>
                          <p className="text-[11px] text-[#999]">Dougs</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=dougs.fr&sz=32" alt="Dougs" className="w-5 h-5 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous envisagez de quitter Salesforce ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On accompagne la migration Salesforce vers HubSpot de A a Z : audit, mapping, migration, configuration et formation des equipes.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/agence-hubspot" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Nos services HubSpot
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
