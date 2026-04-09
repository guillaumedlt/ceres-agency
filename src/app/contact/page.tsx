"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacter Ceres",
  description: "Contactez l\u2019equipe Ceres pour discuter de vos enjeux RevOps, CRM ou IA. Reponse sous 24h.",
  url: "https://ceres.agency/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Ceres",
    url: "https://ceres.agency",
    email: "guillaume@ceres.agency",
    telephone: "+33",
    address: { "@type": "PostalAddress", addressCountry: "FR" },
  },
};

const reasons = [
  { title: "Audit RevOps", desc: "Vous voulez un diagnostic de votre CRM et de vos operations commerciales", href: "/audit-revops", color: "#FF7A59" },
  { title: "RevOps Part-Time", desc: "Vous cherchez un consultant RevOps dedie sans recruter", href: "/revops-part-time", color: "#4B5EFC" },
  { title: "Migration CRM", desc: "Vous devez migrer vers HubSpot depuis Salesforce, Dynamics ou Pipedrive", href: "/agence-hubspot", color: "#FF7A59" },
  { title: "Agents IA", desc: "Vous voulez deployer l\u2019IA dans votre processus commercial", href: "/agents-ia", color: "#6D00CC" },
  { title: "Autre sujet", desc: "Partenariat, presse, recrutement ou question generale", href: "#form", color: "#22C55E" },
];

const reassurances = [
  { value: "< 24h", label: "Temps de reponse moyen" },
  { value: "40+", label: "Clients accompagnes" },
  { value: "13", label: "Cas clients documentes" },
  { value: "4.9/5", label: "Satisfaction client" },
];

const team = [
  { name: "Guillaume Delachet", role: "Co-fondateur", initials: "GD" },
  { name: "Simon Toussaint", role: "Co-fondateur", initials: "ST" },
  { name: "Bruno Teixeira", role: "Partner", initials: "BT" },
  { name: "Stephane Morel", role: "COO", initials: "SM" },
];

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        portalId: "2703445",
        formId: "c7a632d2-943b-4245-ac61-9b00953b63e0",
        region: "na1",
        target: "#hs-contact-form",
      });
      return;
    }
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "2703445",
          formId: "c7a632d2-943b-4245-ac61-9b00953b63e0",
          region: "na1",
          target: "#hs-contact-form",
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "75%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        {/* Header */}
        <section className="text-center mb-12">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
            <span className="text-[#666]">Contact</span>
          </nav>
          <div className="mb-4"><Badge>Contact</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Parlons de votre projet
          </h1>
          <p className="text-[17px] text-[#666] max-w-[480px] mx-auto leading-[1.7]">
            Reservez un appel ou ecrivez-nous. On repond sous 24h, toujours.
          </p>
        </section>

        {/* 2 colonnes : RDV + Form */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">

            {/* Gauche : Reserver un appel */}
            <div className="rounded-2xl border-2 border-[#111]/10 bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[12px] font-semibold text-[#111]">Reserver un appel decouverte</span>
              </div>
              <p className="text-[13px] text-[#666] leading-[1.7] mb-5">
                30 minutes pour comprendre votre situation, identifier vos enjeux et voir si on peut vous aider. Sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 mb-5">
                <a
                  href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#111] text-white text-[13px] font-medium text-center hover:bg-[#222] transition-colors"
                >
                  <span className="inline-block w-2 h-2 rounded-sm bg-[#FF7A59] mr-2 align-middle" />
                  France &amp; International
                </a>
                <a
                  href="https://meetings.hubspot.com/simon156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#111] text-white text-[13px] font-medium text-center hover:bg-[#222] transition-colors"
                >
                  <span className="inline-block w-2 h-2 rounded-sm bg-[#4B5EFC] mr-2 align-middle" />
                  Canada
                </a>
              </div>

              <div className="space-y-3">
                {[
                  { icon: "clock", text: "30 minutes, en visio ou telephone" },
                  { icon: "check", text: "On analyse votre situation ensemble" },
                  { icon: "target", text: "Vous repartez avec des recommandations concretes" },
                  { icon: "lock", text: "Sans engagement, 100% gratuit" },
                ].map((item) => (
                  <p key={item.text} className="text-[12px] text-[#777] flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5">
                      {item.icon === "clock" && <><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M8 5v3l2 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>}
                      {item.icon === "check" && <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
                      {item.icon === "target" && <><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" /><circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" /></>}
                      {item.icon === "lock" && <><rect x="4" y="7" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M6 7V5a2 2 0 1 1 4 0v2" stroke="currentColor" strokeWidth="1.5" /></>}
                    </svg>
                    {item.text}
                  </p>
                ))}
              </div>

              {/* Qui vous accueille */}
              <div className="mt-6 pt-5 border-t border-[#F2F2F2]">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Qui vous accueille</p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {team.map((t) => (
                      <div key={t.initials} className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold border-2 border-white">
                        {t.initials}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[11px] text-[#111] font-medium">Guillaume, Simon, Bruno ou Stephane</p>
                    <p className="text-[10px] text-[#999]">Selon votre besoin et votre secteur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Droite : Formulaire */}
            <div id="form" className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <p className="text-[12px] font-semibold text-[#111] mb-1">Nous ecrire</p>
              <p className="text-[11px] text-[#999] mb-5">Reponse sous 24h. On revient toujours.</p>

              <div ref={formRef} id="hs-contact-form" className="min-h-[300px]">
                <div className="flex items-center justify-center h-[300px] text-[#CCC]">
                  <div className="text-center">
                    <svg className="mx-auto mb-2 animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>
                    <p className="text-[11px]">Chargement du formulaire...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reassurance */}
        <section className="mb-16">
          <div className="rounded-2xl bg-[#111] p-5 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {reassurances.map((r) => (
                <div key={r.label} className="text-center">
                  <div className="text-[24px] font-bold text-white">{r.value}</div>
                  <div className="text-[10px] text-white/40">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous contacter */}
        <section className="mb-16">
          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Je vous contacte pour</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map((r) => (
              <Link key={r.title} href={r.href} className="rounded-xl border border-[#F2F2F2] bg-white p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-sm mt-1.5 shrink-0" style={{ background: r.color }} />
                  <div>
                    <p className="text-[13px] font-semibold text-[#111] group-hover:text-[#4B5EFC] transition-colors">{r.title}</p>
                    <p className="text-[11px] text-[#999] leading-[1.5] mt-0.5">{r.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Comment ca se passe */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Badge>Process</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Comment ca se passe</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Appel decouverte", desc: "30 min pour comprendre votre situation, vos outils, vos enjeux et vos objectifs. On vous pose les bonnes questions.", delay: "Sous 48h" },
              { step: "02", title: "Proposition personnalisee", desc: "On vous envoie une proposition claire : perimetre, methodologie, timeline, budget. Pas de devis generique.", delay: "Sous 5 jours" },
              { step: "03", title: "Demarrage", desc: "Kick-off, acces aux outils, premier sprint. Vous voyez des resultats des la premiere semaine.", delay: "Sous 2 semaines" },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center text-white text-[11px] font-bold">{s.step}</div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">{s.delay}</span>
                </div>
                <h3 className="text-[14px] font-semibold text-[#111] mb-2">{s.title}</h3>
                <p className="text-[12px] text-[#777] leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Temoignages rapides */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <Badge>Ce qu&apos;ils disent</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { quote: "L\u2019equipe Ceres est ultra reactive. On a toujours une reponse dans la journee, meme pour les sujets complexes.", author: "Antoine C.", role: "Head of Sales", company: "Iroko" },
              { quote: "Ce qui nous a rassures, c\u2019est qu\u2019ils comprennent les enjeux business, pas juste la technique. On parle revenue, pas seulement CRM.", author: "Ludovic R.", role: "VP Sales", company: "Ringover" },
              { quote: "On a compare avec 3 agences. Ceres etait la seule a proposer un diagnostic avant de vendre. Ca a fait la difference.", author: "Hamza", role: "Head of Sales", company: "Beedeez" },
              { quote: "Projet de migration complexe, zero perte de donnees, dans les delais. C\u2019est rare.", author: "Laisa L.", role: "CRM Manager", company: "TotalEnergies" },
            ].map((t) => (
              <div key={t.author} className="rounded-xl border border-[#F2F2F2] bg-white p-4">
                <p className="text-[12px] text-[#555] leading-[1.7] mb-3">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[8px] font-bold">
                    {t.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#111]">{t.author}</p>
                    <p className="text-[9px] text-[#999]">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Infos pratiques */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:guillaume@ceres.agency" className="text-[14px] font-semibold text-[#111] hover:text-[#4B5EFC] transition-colors">guillaume@ceres.agency</a>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2">Reactivite</p>
                <p className="text-[14px] font-semibold text-[#111]">Reponse sous 24h</p>
                <p className="text-[11px] text-[#999]">Du lundi au vendredi, 9h-19h</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2">Localisation</p>
                <p className="text-[14px] font-semibold text-[#111]">France</p>
                <p className="text-[11px] text-[#999]">100% remote, on travaille avec toute la France et l&apos;Europe</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ rapide */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <Badge>FAQ</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Questions courantes</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Combien coute un accompagnement Ceres ?", a: "Ca depend du perimetre. Un audit demarre a 2 500 EUR, le RevOps Part-Time a partir de 2 000 EUR/mois, une migration CRM entre 5 000 et 25 000 EUR. On vous fait un devis precis apres l\u2019appel decouverte." },
              { q: "Vous travaillez avec des entreprises de quelle taille ?", a: "De 15 a 500+ personnes. Nos clients vont de la startup en Series A au grand groupe comme TotalEnergies. Le point commun : ils veulent structurer leurs operations commerciales." },
              { q: "Est-ce que vous travaillez uniquement avec HubSpot ?", a: "HubSpot est notre CRM de reference, mais on accompagne aussi des migrations depuis Salesforce, Dynamics et Pipedrive. Pour l\u2019IA, on est agnostiques : Claude, ChatGPT, Gemini selon le besoin." },
              { q: "Vous etes bases ou ?", a: "On est full remote, bases en France. On travaille avec des clients dans toute la France et en Europe. Tous nos meetings sont en visio." },
              { q: "Quelle est votre disponibilite ?", a: "On prend entre 2 et 4 nouveaux clients par mois pour garantir la qualite de l\u2019accompagnement. Si on est complets, on vous met en liste d\u2019attente avec une date de demarrage." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl border border-[#F2F2F2] bg-white p-4">
                <h3 className="text-[13px] font-semibold text-[#111] mb-1.5">{faq.q}</h3>
                <p className="text-[12px] text-[#777] leading-[1.65]">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-center">
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a discuter ?</h2>
            <p className="text-[14px] text-white/50 mb-6 max-w-[400px] mx-auto leading-[1.7]">Le plus simple : reservez 30 minutes. On analyse votre situation et on vous dit si on peut vous aider.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />
                France &amp; International
              </a>
              <a href="https://meetings.hubspot.com/simon156" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white text-[13px] font-medium hover:bg-white/20 transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                Canada
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
