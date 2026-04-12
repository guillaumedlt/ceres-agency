"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CRM pour startup : lequel choisir en 2026",
  description: "Comparatif complet des CRM pour startup en 2026. HubSpot Free, Pipedrive, Folk, Attio : prix, scalabilite, UX, integrations. Guide pratique pour choisir le bon CRM des le debut sans se tromper.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/crm-startup-quel-choisir" },
  articleSection: "CRM",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "pourquoi-crm-debut", title: "Pourquoi un CRM des le debut" },
  { id: "criteres-choix", title: "Les criteres de choix" },
  { id: "hubspot-free", title: "HubSpot Free" },
  { id: "pipedrive", title: "Pipedrive" },
  { id: "folk", title: "Folk" },
  { id: "attio", title: "Attio" },
  { id: "comparatif-rapide", title: "Comparatif rapide" },
  { id: "notre-recommandation", title: "Notre recommandation" },
];

const relatedArticles = [
  { title: "Quel CRM choisir pour une PME en 2026 ?", slug: "crm-pme-2026", category: "CRM", color: "#4B5EFC" },
  { title: "Meilleur CRM B2B en France : le comparatif complet", slug: "meilleur-crm-b2b-france", category: "CRM", color: "#4B5EFC" },
  { title: "HubSpot vs Folk : le comparatif detaille", slug: "hubspot-vs-folk", category: "CRM", color: "#FF7A59" },
];

export default function CrmStartupQuelChoisirArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi-crm-debut");

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
        <div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#4B5EFC", opacity: 0.06, filter: "blur(70px)" }} />

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
                        ? "border-[#4B5EFC] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=CRM%20pour%20startup%20%3A%20lequel%20choisir%20en%202026&url=https://ceres.agency/blog/crm-startup-quel-choisir" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/crm-startup-quel-choisir" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">CRM pour startup</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                CRM pour startup : lequel choisir en 2026
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Vous lancez votre startup et vous hesitez entre 15 CRM differents. Chacun promet d&apos;etre le meilleur. La verite : la plupart se valent sur les fonctions de base. Ce qui fait la difference, c&apos;est la scalabilite, le prix a 18 mois et l&apos;ecosysteme d&apos;integrations. On a teste HubSpot Free, Pipedrive, Folk et Attio pour vous donner un avis objectif.
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
              <section id="pourquoi-crm-debut" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi un CRM des le debut</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La reponse courte : parce que migrer un CRM plus tard est un enfer. La reponse longue : parce que les habitudes que vos premiers commerciaux prennent dans les 6 premiers mois definissent la qualite de vos donnees pour les 3 prochaines annees.</p>
                    <p>En early stage, la tentation est forte de gerer ses contacts dans un tableur Google Sheets. Ca marche pour 50 contacts. A 200, c&apos;est le chaos. A 500, c&apos;est ingerable. Et quand vous decidez enfin de passer sur un CRM, vous devez nettoyer des mois de donnees sales, de doublons, de notes eparpillees entre Sheets, Notion, Slack et les emails.</p>
                    <p>Un CRM adopte des le premier deal vous donne trois avantages concrets :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Un historique exploitable.</strong> Chaque interaction avec un prospect est tracee. Quand votre 5e commercial arrive, il peut reprendre un deal sans appeler le fondateur pour demander &ldquo;on en etait ou avec ce client ?&rdquo;</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Des metriques des le debut.</strong> Combien de leads entrent chaque semaine ? Quel est votre taux de conversion ? Combien de temps dure votre cycle de vente ? Sans CRM, vous naviguez a l&apos;aveugle. Avec, vous avez des chiffres pour prendre des decisions.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Une scalabilite immediate.</strong> Quand vous passez de 2 a 10 commerciaux, le CRM est deja en place. Pas besoin de tout reconstruire. Les process, les pipelines, les templates sont operationnels.</li>
                    </ul>
                    <p>Le cout d&apos;un CRM en startup est proche de zero (la plupart ont un plan gratuit). Le cout de ne pas en avoir se chiffre en semaines de travail perdues lors de la migration inevitable.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="criteres-choix" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les criteres de choix</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de comparer les outils, il faut definir les criteres qui comptent vraiment pour une startup. Pas les features marketing, pas les demos impressionnantes. Les criteres qui determinent si vous serez encore sur ce CRM dans 2 ans.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Prix a 18 mois",
                        desc: "Le plan gratuit est un piege si le premier plan payant coute 800 EUR/mois. Calculez le cout reel pour votre equipe a 18 mois : combien d'utilisateurs, quelles fonctions payantes vous faudra-t-il ? Un CRM a 0 EUR aujourd'hui qui coute 1 200 EUR/mois dans 18 mois n'est pas gratuit, c'est un cout differe.",
                        color: "#EF4444",
                      },
                      {
                        title: "Scalabilite",
                        desc: "Votre startup va passer de 3 a 15 personnes. Le CRM doit suivre. Ca veut dire : gestion des roles et permissions, workflows automatises, reporting avance. Si le CRM ne gere pas les workflows, vous devrez en changer quand vous aurez 10 commerciaux. Et migrer un CRM avec 2 ans de donnees, c'est 2 a 4 semaines de travail.",
                        color: "#4B5EFC",
                      },
                      {
                        title: "UX et adoption",
                        desc: "Le meilleur CRM du monde ne sert a rien si personne ne l'utilise. En startup, personne n'a le temps de former l'equipe pendant 3 jours. L'outil doit etre intuitif, rapide, avec une courbe d'apprentissage de quelques heures maximum. Testez-le avec un commercial non technique : s'il galere apres 30 minutes, passez au suivant.",
                        color: "#22C55E",
                      },
                      {
                        title: "Integrations",
                        desc: "Un CRM isole est inutile. Il doit se connecter a votre stack : email (Gmail/Outlook), calendrier, outils de prospection (Lemlist, Apollo), enrichissement (Clay), automatisation (Make, Zapier). Verifiez les integrations natives, pas les connecteurs tiers qui cassent tous les 3 mois.",
                        color: "#6C5CE7",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Deux criteres secondaires a garder en tete : la qualite du support (critique quand on demarre) et l&apos;ecosysteme francophone (documentation, communaute, partenaires locaux). Un CRM avec un support uniquement en anglais peut devenir un frein pour une equipe francophone.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="hubspot-free" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">HubSpot Free : le choix par defaut</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot est le CRM le plus utilise par les startups B2B en France. Et pour cause : le plan gratuit est le plus genereux du marche. Pas de limite de contacts, pas de limite d&apos;utilisateurs, et les fonctions de base sont solides.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[9px] font-bold bg-[#FF7A59]">Hs</div>
                      <p className="text-[12px] font-semibold text-[#111]">HubSpot CRM Free</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[
                        { label: "Prix", value: "0 EUR", color: "#22C55E" },
                        { label: "Contacts", value: "Illimites", color: "#4B5EFC" },
                        { label: "Users", value: "Illimites", color: "#6C5CE7" },
                        { label: "Starter", value: "15 EUR/mois", color: "#FF7A59" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-lg border border-[#F2F2F2] bg-white p-3 text-center">
                          <p className="text-[14px] font-bold mb-0.5" style={{ color: s.color }}>{s.value}</p>
                          <p className="text-[10px] text-[#999]">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Ce qui marche bien.</strong> La gestion de contacts est excellente. Le tracking des emails est natif. Le pipeline de deals est visuel et intuitif. L&apos;integration Gmail/Outlook fonctionne parfaitement. Et surtout, l&apos;ecosysteme HubSpot est le plus riche du marche : plus de 1 500 integrations natives.</p>
                    <p><strong className="text-[#111]">Ce qui bloque en gratuit.</strong> Pas de workflows automatises (il faut passer en Starter a 15 EUR/mois/utilisateur). Le reporting est basique, 5 dashboards maximum. Pas de sequences email. Les proprietes custom sont limitees a 10. Le branding HubSpot est present partout (formulaires, emails).</p>
                    <p><strong className="text-[#111]">Pour qui.</strong> Les startups qui veulent un CRM solide sans payer, qui prevoient de scaler leur equipe commerciale et qui veulent un ecosysteme d&apos;integrations maximum. HubSpot est le choix le plus sur : meme si vous changez d&apos;avis, les donnees sont faciles a exporter.</p>
                    <p><strong className="text-[#111]">Le piege.</strong> L&apos;addiction au gratuit. Vous restez sur le plan free trop longtemps, vos process deviennent des bricolages, et quand vous passez enfin en Pro (a 90 EUR/mois/utilisateur), la migration interne est douloureuse. Le bon timing pour upgrader : quand vous avez 5+ commerciaux et que vous avez besoin de workflows.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="pipedrive" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pipedrive : pour les equipes sales-first</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pipedrive a ete construit par des commerciaux, pour des commerciaux. Ca se sent dans chaque ecran. L&apos;interface est centree sur le pipeline, les deals et les activites. Pas de fioritures marketing, pas de module service client. C&apos;est un outil de vente pur.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[9px] font-bold bg-[#22C55E]">Pd</div>
                      <p className="text-[12px] font-semibold text-[#111]">Pipedrive</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[
                        { label: "Essential", value: "14 EUR/mois", color: "#22C55E" },
                        { label: "Advanced", value: "34 EUR/mois", color: "#4B5EFC" },
                        { label: "Professional", value: "49 EUR/mois", color: "#6C5CE7" },
                        { label: "Essai gratuit", value: "14 jours", color: "#FF7A59" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-lg border border-[#F2F2F2] bg-white p-3 text-center">
                          <p className="text-[14px] font-bold mb-0.5" style={{ color: s.color }}>{s.value}</p>
                          <p className="text-[10px] text-[#999]">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Ce qui marche bien.</strong> L&apos;UX du pipeline est la meilleure du marche. Le drag-and-drop est fluide, les vues sont personnalisables, et la courbe d&apos;apprentissage est de 2 heures maximum. Les automations sont disponibles des le plan Advanced (34 EUR/mois). Le tracking email est natif et fiable.</p>
                    <p><strong className="text-[#111]">Ce qui bloque.</strong> Pas de plan gratuit. Le marketing est quasi inexistant : pas d&apos;email marketing, pas de landing pages, pas de formulaires evolues. Si vous voulez aligner sales et marketing dans un seul outil, Pipedrive n&apos;est pas le bon choix. L&apos;ecosysteme d&apos;integrations est correct mais loin derriere HubSpot.</p>
                    <p><strong className="text-[#111]">Pour qui.</strong> Les startups dont le business model repose sur la vente directe, avec une equipe de SDR et d&apos;AE. Si votre go-to-market est outbound et que le marketing est secondaire, Pipedrive est le meilleur rapport qualite/prix du marche.</p>
                    <p><strong className="text-[#111]">Le piege.</strong> Le plan Essential est seduisant a 14 EUR/mois, mais il manque les automations. En pratique, vous passez en Advanced a 34 EUR tres vite. Pour 5 utilisateurs, ca fait 170 EUR/mois. A comparer avec HubSpot Free + Starter a 75 EUR/mois.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="folk" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Folk : pour les petites equipes relationnelles</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Folk est un CRM francais qui a pris le contre-pied des CRM traditionnels. L&apos;interface ressemble a un tableur intelligent, pas a un logiciel enterprise. C&apos;est leger, rapide et agreable a utiliser au quotidien.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[9px] font-bold bg-[#6C5CE7]">Fk</div>
                      <p className="text-[12px] font-semibold text-[#111]">Folk CRM</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[
                        { label: "Free", value: "0 EUR", color: "#22C55E" },
                        { label: "Standard", value: "20 EUR/mois", color: "#4B5EFC" },
                        { label: "Premium", value: "40 EUR/mois", color: "#6C5CE7" },
                        { label: "Contacts free", value: "100", color: "#FF7A59" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-lg border border-[#F2F2F2] bg-white p-3 text-center">
                          <p className="text-[14px] font-bold mb-0.5" style={{ color: s.color }}>{s.value}</p>
                          <p className="text-[10px] text-[#999]">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Ce qui marche bien.</strong> L&apos;UX est la plus agreable du marche. L&apos;import LinkedIn est natif (extension Chrome). La vue pipeline et la vue tableur cohabitent parfaitement. L&apos;enrichissement de contacts est integre. Le produit est tres bien pense pour les fondateurs qui gerent eux-memes leur pipe.</p>
                    <p><strong className="text-[#111]">Ce qui bloque.</strong> Le plan gratuit est limite a 100 contacts, ce qui est insuffisant meme pour une startup en phase de decouverte. Les integrations natives sont peu nombreuses. Pas de workflows avances. Le reporting est basique. Et surtout, Folk n&apos;est pas concu pour des equipes de plus de 5 commerciaux.</p>
                    <p><strong className="text-[#111]">Pour qui.</strong> Les fondateurs et les petites equipes (2-4 personnes) qui font de la vente relationnelle. Si votre prospection passe par LinkedIn et que vous gerez moins de 500 contacts actifs, Folk est excellent. Pour du volume ou des equipes structurees, c&apos;est trop leger.</p>
                    <p><strong className="text-[#111]">Le piege.</strong> Tomber amoureux de l&apos;UX et devoir migrer 12 mois plus tard quand l&apos;equipe grandit. Folk est genial pour les 12 premiers mois. Apres, ca depend de votre trajectoire de croissance. Si vous recrutez 3 commerciaux dans l&apos;annee, prevoyez la migration.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="attio" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Attio : le challenger</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Attio est le CRM qui monte. Lance en 2023, il combine la flexibilite d&apos;un Airtable avec la puissance d&apos;un CRM enterprise. Le produit evolue vite, le design est soigne et l&apos;equipe ecoute ses utilisateurs. C&apos;est le choix des startups tech qui veulent un CRM moderne sans les compromis des outils historiques.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[9px] font-bold bg-[#111]">At</div>
                      <p className="text-[12px] font-semibold text-[#111]">Attio</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[
                        { label: "Free", value: "0 EUR", color: "#22C55E" },
                        { label: "Plus", value: "29 EUR/mois", color: "#4B5EFC" },
                        { label: "Pro", value: "59 EUR/mois", color: "#6C5CE7" },
                        { label: "Users free", value: "3", color: "#FF7A59" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-lg border border-[#F2F2F2] bg-white p-3 text-center">
                          <p className="text-[14px] font-bold mb-0.5" style={{ color: s.color }}>{s.value}</p>
                          <p className="text-[10px] text-[#999]">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Ce qui marche bien.</strong> La flexibilite du modele de donnees est inegalee. Vous pouvez creer n&apos;importe quel objet custom, n&apos;importe quelle relation entre objets, n&apos;importe quelle vue. Le plan gratuit inclut 3 utilisateurs avec des fonctions solides. L&apos;API est excellente. Les automations sont disponibles des le plan Plus.</p>
                    <p><strong className="text-[#111]">Ce qui bloque.</strong> L&apos;ecosysteme d&apos;integrations est encore jeune. Moins de 50 integrations natives contre 1 500 pour HubSpot. L&apos;enrichissement natif est limite. La communaute francophone est quasi inexistante. Et le produit evolue vite, ce qui signifie des changements reguliers dans l&apos;interface et les fonctionnalites.</p>
                    <p><strong className="text-[#111]">Pour qui.</strong> Les startups tech avec un profil ops/produit fort, qui veulent un CRM flexible et qui ont la capacite de configurer elles-memes. Si vous avez un ops dans l&apos;equipe et que vous cherchez un CRM moderne avec un modele de donnees flexible, Attio est le bon choix.</p>
                    <p><strong className="text-[#111]">Le piege.</strong> La flexibilite peut devenir un piege. Sans process clair et sans gouvernance, un CRM trop flexible devient un chaos de vues, d&apos;objets et de champs custom que personne ne comprend. La structure doit etre definie avant la configuration, pas apres.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="comparatif-rapide" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comparatif rapide</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Voici un tableau comparatif synthetique des quatre CRM, note sur 5 criteres cles pour une startup. Les notes sont basees sur notre experience avec ces outils chez nos clients.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Comparatif CRM pour startup -- 2026</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Critere</th>
                            <th className="text-center py-2 px-2 text-[#FF7A59] font-semibold">HubSpot</th>
                            <th className="text-center py-2 px-2 text-[#22C55E] font-semibold">Pipedrive</th>
                            <th className="text-center py-2 px-2 text-[#6C5CE7] font-semibold">Folk</th>
                            <th className="text-center py-2 px-2 text-[#111] font-semibold">Attio</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { critere: "Plan gratuit", hubspot: "Excellent", pipedrive: "Aucun", folk: "Limite", attio: "Bon" },
                            { critere: "Prix a 5 users/18 mois", hubspot: "0-375 EUR/mois", pipedrive: "170 EUR/mois", folk: "100-200 EUR/mois", attio: "0-295 EUR/mois" },
                            { critere: "UX / Adoption", hubspot: "Bon", pipedrive: "Excellent", folk: "Excellent", attio: "Tres bon" },
                            { critere: "Scalabilite", hubspot: "Excellente", pipedrive: "Bonne", folk: "Limitee", attio: "Excellente" },
                            { critere: "Integrations", hubspot: "1 500+", pipedrive: "400+", folk: "50+", attio: "50+" },
                            { critere: "Workflows", hubspot: "Starter+", pipedrive: "Advanced+", folk: "Premium", attio: "Plus+" },
                            { critere: "Reporting", hubspot: "Complet", pipedrive: "Bon", folk: "Basique", attio: "Flexible" },
                            { critere: "Support FR", hubspot: "Oui", pipedrive: "Partiel", folk: "Oui", attio: "Non" },
                          ].map((row) => (
                            <tr key={row.critere} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.critere}</td>
                              <td className="py-2.5 px-2 text-center text-[#666]">{row.hubspot}</td>
                              <td className="py-2.5 px-2 text-center text-[#666]">{row.pipedrive}</td>
                              <td className="py-2.5 px-2 text-center text-[#666]">{row.folk}</td>
                              <td className="py-2.5 px-2 text-center text-[#666]">{row.attio}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Prix indicatifs au 12 avril 2026 -- Tarifs par utilisateur/mois, facturation annuelle</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le tableau montre une tendance claire : HubSpot domine sur la scalabilite et l&apos;ecosysteme, Pipedrive sur l&apos;UX pipeline, Folk sur la simplicite et Attio sur la flexibilite. Le choix depend de votre profil, pas d&apos;un classement universel.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-recommandation" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre recommandation</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Il n&apos;y a pas de meilleur CRM universel. Il y a le bon CRM pour votre situation. Voici notre grille de decision basee sur les profils de startup que l&apos;on accompagne.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Vous levez des fonds et scalez vite", desc: "HubSpot. Le plan gratuit pour demarrer, Starter quand l'equipe grandit, Pro quand vous avez 10+ commerciaux. L'ecosysteme d'integrations et la scalabilite sont inegalees. C'est le choix le plus sur pour une startup en hypercroissance.", color: "#FF7A59" },
                      { title: "Vous etes sales-first, outbound pur", desc: "Pipedrive. L'UX pipeline est la meilleure. L'outil est concu pour des commerciaux qui passent leur journee a closer. Si le marketing n'est pas votre priorite et que vous faites du volume, Pipedrive est le meilleur rapport qualite/prix.", color: "#22C55E" },
                      { title: "Vous etes 2-3, vente relationnelle", desc: "Folk. L'experience utilisateur est superieure pour les petites equipes. L'import LinkedIn est un game changer. Si vous gerez moins de 500 contacts et que la vente passe par le reseau, Folk est ideal. Mais prevoyez la migration si vous grandissez.", color: "#6C5CE7" },
                      { title: "Vous avez un ops et voulez du custom", desc: "Attio. La flexibilite du modele de donnees est unique. Si vous avez quelqu'un dans l'equipe capable de configurer l'outil et que vous voulez un CRM qui s'adapte exactement a vos process, Attio est le bon choix.", color: "#4B5EFC" },
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

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on est partenaires officiels de HubSpot et d&apos;Attio. Mais on recommande aussi Pipedrive et Folk quand c&apos;est le bon choix. Notre objectif n&apos;est pas de vendre une licence, c&apos;est de mettre le bon outil dans les bonnes mains.</p>
                    <p>Le plus important : choisissez vite et commencez. Un CRM imparfait utilise des le premier jour vaut mieux qu&apos;un CRM parfait deploye dans 6 mois.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Besoin d&apos;aide pour choisir votre CRM ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on accompagne les startups dans le choix, la configuration et le deploiement de leur CRM. Un appel de 30 minutes suffit pour identifier le bon outil pour votre situation.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4B5EFC] text-white rounded-lg text-[13px] font-medium hover:bg-[#3D4FE0] transition-colors">
                  Choisir le bon CRM
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#4B5EFC] transition-colors leading-[1.4]">{a.title}</p>
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
