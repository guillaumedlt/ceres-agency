"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Donnees CRM et RGPD : le guide de conformite pour les equipes B2B",
  description: "Guide complet de conformite RGPD pour les equipes B2B. Bases legales, duree de conservation, droits des personnes, configuration HubSpot, erreurs courantes et checklist conformite.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/donnees-crm-rgpd-conformite" },
  articleSection: "Data & Reporting",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "crm-registre-traitement", title: "Le CRM est un registre" },
  { id: "bases-legales", title: "Les bases legales" },
  { id: "duree-conservation", title: "Duree de conservation" },
  { id: "droits-personnes", title: "Droits des personnes" },
  { id: "configurer-hubspot", title: "Configurer HubSpot" },
  { id: "erreurs-rgpd", title: "Erreurs courantes" },
  { id: "rgpd-ia", title: "RGPD et IA" },
  { id: "checklist-conformite", title: "Checklist conformite" },
];

const relatedArticles = [
  { title: "Data quality CRM : audit et nettoyage", slug: "data-quality-crm-audit-nettoyage", category: "Data & Reporting", color: "#22C55E" },
  { title: "Data cleaning : checklist avant deploiement IA", slug: "data-cleaning-checklist-avant-ia", category: "Data & Reporting", color: "#22C55E" },
  { title: "Donnees, process, IA : dans quel ordre faire son RevOps ?", slug: "process-data-ia-ordre-revops", category: "Process & Outils", color: "#6C5CE7" },
];

export default function DonneesCrmRgpdConformiteArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("crm-registre-traitement");

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
        <div className="h-full bg-[#22C55E] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#22C55E", opacity: 0.06, filter: "blur(70px)" }} />

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
                        ? "border-[#22C55E] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Donnees%20CRM%20et%20RGPD%20%3A%20guide%20de%20conformite%20B2B&url=https://ceres.agency/blog/donnees-crm-rgpd-conformite" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/donnees-crm-rgpd-conformite" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Donnees CRM et RGPD</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Data &amp; Reporting</Badge>
                <span className="text-[11px] text-[#CCC]">13 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Donnees CRM et RGPD : le guide de conformite pour les equipes B2B
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Votre CRM contient des milliers de donnees personnelles. Noms, emails, numeros de telephone, historique d&apos;interactions. Le RGPD s&apos;applique a toutes ces donnees, meme en B2B. Et les sanctions sont reelles : jusqu&apos;a 4% du CA ou 20 millions d&apos;euros. Ce guide vous donne les regles a suivre et les actions concretes pour mettre votre CRM en conformite.
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
              <section id="crm-registre-traitement" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le CRM est un registre de traitement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Premiere chose a comprendre : votre CRM est, au sens du RGPD, un traitement de donnees personnelles. Chaque contact stocke, chaque email tracke, chaque note de call est une donnee personnelle soumise a la reglementation. Et vous etes le responsable de traitement.</p>
                    <p>Ce que ca implique concretement :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Vous devez documenter le traitement.</strong> Finalite (prospection commerciale), categories de donnees (coordonnees, historique), destinataires (equipe commerciale, sous-traitants), duree de conservation. C&apos;est l&apos;article 30 du RGPD : le registre des traitements.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Vous devez avoir une base legale.</strong> Pour chaque traitement, vous devez justifier pourquoi vous avez le droit de stocker et utiliser ces donnees. En B2B, c&apos;est generalement l&apos;interet legitime ou le consentement.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Vous devez respecter les droits des personnes.</strong> Droit d&apos;acces, de rectification, de suppression, de portabilite. Si un prospect vous demande quelles donnees vous avez sur lui, vous devez pouvoir repondre en 30 jours.</li>
                    </ul>
                    <p>La bonne nouvelle : si votre CRM est bien configure, la plupart de ces obligations sont gerees automatiquement. La mauvaise : la plupart des CRM ne sont pas bien configures.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="bases-legales" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les bases legales pour la prospection B2B</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En B2B, deux bases legales sont principalement utilisees pour justifier le traitement des donnees dans un CRM. Le choix depend du contexte et du type de prospection.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#22C55E] mb-3">Interet legitime (Article 6.1.f)</p>
                      <ul className="space-y-2">
                        {[
                          "Base legale la plus courante en B2B",
                          "Applicable quand le prospect a un lien avec votre activite",
                          "Pas besoin de consentement prealable",
                          "Doit etre documente (balance des interets)",
                          "Le prospect doit pouvoir s'opposer facilement",
                          "Valable pour : cold email, prospection LinkedIn, appels",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[11px] text-[#777] leading-[1.5]">
                            <span className="w-1 h-1 rounded-full bg-[#22C55E] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-[#4B5EFC]/20 bg-[#4B5EFC]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#4B5EFC] mb-3">Consentement (Article 6.1.a)</p>
                      <ul className="space-y-2">
                        {[
                          "Necessaire pour le marketing automatise (newsletters)",
                          "Doit etre libre, eclaire, specifique et univoque",
                          "Peut etre retire a tout moment",
                          "Preuve du consentement a conserver",
                          "Double opt-in recommande",
                          "Valable pour : newsletters, nurturing, retargeting",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[11px] text-[#777] leading-[1.5]">
                            <span className="w-1 h-1 rounded-full bg-[#4B5EFC] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La nuance B2B.</strong> En France, la CNIL considere que la prospection B2B par email est possible sans consentement prealable a condition que le message soit en rapport avec la fonction professionnelle du destinataire et qu&apos;un lien de desinscription soit present. C&apos;est l&apos;interet legitime qui s&apos;applique.</p>
                    <p><strong className="text-[#111]">Attention aux newsletters.</strong> Des que vous envoyez du contenu marketing regulier (newsletter, nurturing sequences), le consentement est requis. L&apos;interet legitime ne couvre pas l&apos;envoi repete de contenu marketing a quelqu&apos;un qui n&apos;a pas souscrit explicitement.</p>
                    <p><strong className="text-[#111]">La documentation.</strong> Quelle que soit la base legale choisie, documentez-la. Pour l&apos;interet legitime, redigez une balance des interets (vos interets commerciaux vs les droits du prospect). Pour le consentement, conservez la preuve (date, heure, source, texte du consentement).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="duree-conservation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La duree de conservation des donnees</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le RGPD impose de ne conserver les donnees que pour la duree necessaire a la finalite du traitement. En clair : vous ne pouvez pas garder un contact dans votre CRM indefiniment si vous n&apos;avez plus de raison de le faire.</p>
                    <p>Voici les durees de conservation recommandees par la CNIL pour les donnees commerciales B2B :</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Durees de conservation recommandees</p>
                    <div className="space-y-2">
                      {[
                        { data: "Prospects n'ayant jamais repondu", duration: "3 ans", detail: "A compter du dernier contact (email, appel, LinkedIn)", color: "#EF4444" },
                        { data: "Prospects ayant montre de l'interet", duration: "3 ans", detail: "A compter de la derniere interaction (reponse, clic, meeting)", color: "#FF7A59" },
                        { data: "Clients actifs", duration: "Duree de la relation", detail: "Tant que le contrat est en cours + 3 ans apres la fin", color: "#22C55E" },
                        { data: "Anciens clients", duration: "3 ans", detail: "A compter de la fin de la relation commerciale", color: "#4B5EFC" },
                        { data: "Donnees de facturation", duration: "10 ans", detail: "Obligation legale (Code de commerce)", color: "#6C5CE7" },
                        { data: "Consentements (preuves)", duration: "5 ans", detail: "A compter du retrait du consentement", color: "#22C55E" },
                      ].map((item) => (
                        <div key={item.data} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color }} />
                          <div className="flex-1 min-w-0">
                            <span className="text-[11px] font-medium text-[#111]">{item.data}</span>
                            <p className="text-[10px] text-[#999]">{item.detail}</p>
                          </div>
                          <span className="text-[11px] font-bold shrink-0" style={{ color: item.color }}>{item.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">En pratique.</strong> La plupart des CRM B2B contiennent des contacts qui n&apos;ont pas ete contactes depuis plus de 3 ans. Ces contacts doivent etre supprimes ou anonymises. C&apos;est la partie la plus douloureuse de la mise en conformite car les equipes commerciales detestent supprimer des contacts. Mais c&apos;est la loi.</p>
                    <p><strong className="text-[#111]">L&apos;automatisation de la purge.</strong> Dans HubSpot, vous pouvez creer un workflow qui identifie automatiquement les contacts inactifs depuis plus de 3 ans et les supprime ou les anonymise. C&apos;est la seule facon de maintenir la conformite dans le temps sans intervention manuelle.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="droits-personnes" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les droits des personnes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque personne dont les donnees sont dans votre CRM a des droits garantis par le RGPD. Vous devez etre en mesure de les exercer dans un delai de 30 jours.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { right: "Droit d'acces", desc: "Le prospect peut demander quelles donnees vous detenez sur lui. Vous devez fournir une copie complete de toutes les donnees : coordonnees, historique d'interactions, notes, scores, listes de segmentation. Dans HubSpot, l'export d'un contact genere un fichier complet.", color: "#22C55E" },
                      { right: "Droit de rectification", desc: "Si une donnee est incorrecte, le prospect peut demander sa correction. Email errone, nom mal orthographie, titre de poste obsolete. Le delai est de 30 jours, mais en pratique vous devez le faire immediatement.", color: "#4B5EFC" },
                      { right: "Droit de suppression", desc: "Le prospect peut demander la suppression de toutes ses donnees. C'est le droit le plus redoute par les equipes commerciales. Mais il est non negociable. Dans HubSpot, la suppression RGPD est irréversible et supprime toutes les donnees associees.", color: "#EF4444" },
                      { right: "Droit de portabilite", desc: "Le prospect peut demander ses donnees dans un format exploitable (CSV, JSON) pour les transferer a un autre prestataire. En pratique, c'est rare en B2B, mais vous devez pouvoir le faire.", color: "#6C5CE7" },
                      { right: "Droit d'opposition", desc: "Le prospect peut s'opposer au traitement de ses donnees pour la prospection. C'est le lien de desinscription dans vos emails. Une fois l'opposition exprimee, vous devez cesser tout contact commercial.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.right} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.right}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le process a mettre en place.</strong> Designez une personne responsable des demandes RGPD (souvent l&apos;ops ou le DPO). Creez un email dedie (rgpd@votreentreprise.com). Documentez chaque demande et chaque reponse. Le delai de reponse est de 30 jours maximum, mais visez 48 heures pour les demandes simples.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="configurer-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment configurer HubSpot pour la conformite</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot dispose de fonctionnalites RGPD natives qui couvrent la majorite des obligations. Mais elles ne sont pas activees par defaut. Voici les 6 configurations essentielles.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { step: "01", title: "Activer le mode RGPD", desc: "Dans Settings > Privacy & Consent > GDPR, activez le toggle 'Turn on GDPR functionality'. Ca active les bases legales, le suivi du consentement et les options de suppression RGPD sur chaque contact.", color: "#22C55E" },
                      { step: "02", title: "Configurer les bases legales", desc: "Pour chaque type de communication (marketing, ventes, operations), definissez la base legale par defaut. Pour les contacts importes manuellement : interet legitime. Pour les souscriptions newsletter : consentement.", color: "#4B5EFC" },
                      { step: "03", title: "Double opt-in", desc: "Activez le double opt-in pour les formulaires de souscription. Le prospect recoit un email de confirmation et doit cliquer pour valider. Ca constitue la preuve de consentement la plus solide.", color: "#FF7A59" },
                      { step: "04", title: "Lien de desinscription", desc: "Verifiez que tous vos templates email contiennent un lien de desinscription fonctionnel. HubSpot l'ajoute automatiquement sur les emails marketing, mais verifiez aussi vos sequences de vente.", color: "#6C5CE7" },
                      { step: "05", title: "Workflow de purge", desc: "Creez un workflow qui identifie les contacts sans activite depuis 3 ans (aucune ouverture email, aucune visite site, aucune reponse) et les supprime automatiquement ou les deplace dans une liste de review.", color: "#EF4444" },
                      { step: "06", title: "Banniere cookies", desc: "Configurez la banniere de consentement cookies de HubSpot pour etre conforme. Le tracking ne doit commencer qu'apres le consentement explicite du visiteur. Pas de pre-cochage.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: item.color }}>{item.step}</div>
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="erreurs-rgpd" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs RGPD les plus courantes en B2B</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En 9 ans d&apos;accompagnement CRM, on voit les memes erreurs RGPD se repeter. La plupart sont dues a un manque de formation, pas a une volonte de non-conformite.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Acheter des listes de contacts",
                        desc: "Acheter une base de 10 000 contacts a un fournisseur et les importer dans votre CRM. Si ces contacts n'ont pas consenti a recevoir vos communications, c'est une violation du RGPD. L'interet legitime ne s'applique pas aux bases achetees car il n'y a aucun lien prealable entre vous et ces contacts.",
                        color: "#EF4444",
                      },
                      {
                        title: "Pas de lien de desinscription",
                        desc: "Envoyer des emails de prospection sans lien de desinscription. Meme en B2B, meme en one-to-one, un mecanisme d'opposition doit etre present. Un simple 'Si vous ne souhaitez plus recevoir nos messages, repondez STOP' suffit dans les emails individuels.",
                        color: "#FF7A59",
                      },
                      {
                        title: "Ignorer les demandes de suppression",
                        desc: "Un prospect repond 'supprimez mes donnees' a votre email de prospection. Le SDR ignore le message. C'est une violation caracterisee. Chaque demande de suppression doit etre traitee dans les 30 jours. Formez vos equipes a reconnaitre et escalader ces demandes.",
                        color: "#6C5CE7",
                      },
                      {
                        title: "Pas de registre des traitements",
                        desc: "Le registre des traitements est obligatoire pour toute entreprise de plus de 250 salaries, et pour toute entreprise qui traite des donnees de maniere non occasionnelle (ce qui inclut tout CRM). Sans registre, vous etes en infraction des le premier controle.",
                        color: "#4B5EFC",
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
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="rgpd-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">RGPD et IA : ce qu&apos;il faut savoir</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;utilisation de l&apos;IA dans le CRM ajoute une couche de complexite RGPD. Quand vous envoyez des donnees de contacts a une API IA pour du scoring, de l&apos;enrichissement ou de la personnalisation, vous effectuez un transfert de donnees vers un sous-traitant.</p>
                    <p><strong className="text-[#111]">Le contrat de sous-traitance.</strong> Chaque fournisseur d&apos;IA (Anthropic, OpenAI, etc.) doit etre couvert par un Data Processing Agreement (DPA). Ce document definit les conditions de traitement : finalite, duree, mesures de securite, localisation des donnees. La plupart des fournisseurs majeurs proposent un DPA standard. Verifiez qu&apos;il est signe.</p>
                    <p><strong className="text-[#111]">Le transfert hors UE.</strong> Si votre fournisseur IA traite les donnees aux Etats-Unis, vous devez vous assurer que le transfert est encadre par le Data Privacy Framework (DPF) ou des clauses contractuelles types. Depuis juillet 2023, le DPF encadre les transferts vers les entreprises americaines certifiees.</p>
                    <p><strong className="text-[#111]">Le scoring automatise.</strong> Le RGPD encadre les decisions automatisees (article 22). Si votre lead scoring IA determine automatiquement quels prospects sont contactes et lesquels sont ignores, le prospect a le droit de demander une intervention humaine. En pratique, assurez-vous qu&apos;un humain valide les decisions critiques prises par l&apos;IA.</p>
                    <p><strong className="text-[#111]">La minimisation des donnees.</strong> N&apos;envoyez a l&apos;IA que les donnees strictement necessaires au traitement. Pour personnaliser un email, l&apos;IA n&apos;a pas besoin du numero de telephone ou de l&apos;historique complet des interactions. Filtrez les champs avant l&apos;envoi a l&apos;API.</p>
                    <p><strong className="text-[#111]">L&apos;AI Act europeen.</strong> Le reglement europeen sur l&apos;IA, entre en vigueur progressivement depuis 2025, impose des obligations supplementaires pour les systemes IA a haut risque. Le scoring et la prise de decision automatisee en font partie. Restez informes des evolutions reglementaires.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="checklist-conformite" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Checklist conformite RGPD pour votre CRM</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Voici la checklist que l&apos;on utilise chez Ceres pour auditer la conformite RGPD d&apos;un portail CRM. 15 points a verifier, regroupes en 4 categories.</p>
                  </div>

                  <div className="my-6 space-y-4">
                    {[
                      {
                        category: "Documentation",
                        items: [
                          "Registre des traitements a jour",
                          "Balance des interets documentee (interet legitime)",
                          "Politique de confidentialite publiee sur le site",
                          "DPA signe avec chaque sous-traitant (CRM, IA, enrichissement)",
                        ],
                        color: "#22C55E",
                      },
                      {
                        category: "Configuration CRM",
                        items: [
                          "Mode RGPD active dans HubSpot",
                          "Bases legales definies par type de communication",
                          "Double opt-in active pour les formulaires",
                          "Banniere cookies conforme",
                        ],
                        color: "#4B5EFC",
                      },
                      {
                        category: "Operations",
                        items: [
                          "Lien de desinscription dans tous les emails",
                          "Process de traitement des demandes RGPD documente",
                          "Workflow de purge des contacts inactifs (3 ans)",
                          "Formation equipe sur les obligations RGPD",
                        ],
                        color: "#FF7A59",
                      },
                      {
                        category: "IA & Donnees",
                        items: [
                          "DPA signe avec le fournisseur IA",
                          "Minimisation des donnees envoyees a l'IA",
                          "Intervention humaine sur les decisions automatisees critiques",
                        ],
                        color: "#6D00CC",
                      },
                    ].map((group) => (
                      <div key={group.category} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                          <p className="text-[12px] font-semibold text-white">{group.category}</p>
                        </div>
                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[11px] text-[#777] leading-[1.5]">
                              <div className="w-4 h-4 rounded border border-[#444] shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Si vous cochez les 15 points, votre CRM est en conformite RGPD. Si vous en cochez moins de 10, un audit s&apos;impose. La mise en conformite prend generalement 1 a 2 semaines et evite des sanctions qui peuvent atteindre 4% de votre chiffre d&apos;affaires.</p>
                    <p>Chez Ceres, l&apos;audit RGPD fait partie de chaque projet CRM. On ne deploie pas un portail HubSpot sans verifier la conformite. C&apos;est la base, pas un extra.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Auditer la conformite RGPD de votre CRM ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on audite la conformite RGPD de votre portail CRM et on met en place les configurations, workflows et process necessaires. Un appel de 30 minutes pour evaluer votre situation.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#22C55E] text-white rounded-lg text-[13px] font-medium hover:bg-[#1EAD50] transition-colors">
                  Auditer ma conformite RGPD
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#22C55E] transition-colors leading-[1.4]">{a.title}</p>
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
