"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

/* ─────────────────── JSON-LD ─────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Guide Outbound B2B : contenu complet des 10 chapitres",
  description:
    "Le guide outbound B2B le plus complet en francais. Cold email, LinkedIn, Clay, Lemlist AI enrichment, signaux d\u2019achat, Claude, warm-up et sequences multicanal.",
  author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-01",
  dateModified: "2026-03-27",
  inLanguage: "fr",
  mainEntityOfPage: "https://ceres.agency/guide-outbound-b2b/contenu",
  wordCount: 7500,
};

/* ─────────────────── Chapter list ─────────────────── */
const chapters = [
  { id: "ch1", num: "01", title: "L\u2019outbound B2B en 2026" },
  { id: "ch2", num: "02", title: "Construire votre ICP outbound" },
  { id: "ch3", num: "03", title: "Sourcing : construire vos listes" },
  { id: "ch4", num: "04", title: "Enrichissement IA" },
  { id: "ch5", num: "05", title: "Warm-up et delivrabilite" },
  { id: "ch6", num: "06", title: "Rediger des cold emails" },
  { id: "ch7", num: "07", title: "Sequences multicanal" },
  { id: "ch8", num: "08", title: "Lemlist configuration complete" },
  { id: "ch9", num: "09", title: "IA et automatisation avancee" },
  { id: "ch10", num: "10", title: "Mesurer, iterer et scaler" },
];

/* ─────────────────── Component ─────────────────── */
export default function GuideOutboundContenuPage() {
  const [activeChapter, setActiveChapter] = useState("ch1");
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      /* progress bar */
      const el = contentRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = el.scrollHeight - window.innerHeight;
        const scrolled = -rect.top;
        setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)));
      }
      /* active chapter */
      for (let i = chapters.length - 1; i >= 0; i--) {
        const section = document.getElementById(chapters[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveChapter(chapters[i].id);
            break;
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-20" ref={contentRef}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Progress bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#F0F0F0]">
        <div className="h-full bg-[#6C5CE7] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* ── Breadcrumb ── */}
        <nav className="mb-10 flex items-center gap-2 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
          <Link href="/guides" className="hover:text-[#111] transition-colors">Guides</Link><span>/</span>
          <Link href="/guide-outbound-b2b" className="hover:text-[#111] transition-colors">Guide Outbound B2B</Link><span>/</span>
          <span className="text-[#666]">Contenu complet</span>
        </nav>

        {/* ── Hero ── */}
        <section className="text-center mb-16 max-w-[800px] mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#6C5CE7]/10 text-[12px] font-medium text-[#6C5CE7]">Guide complet</span>
          </div>
          <h1 className="text-[32px] sm:text-[48px] font-semibold text-[#111] leading-[1.08] tracking-[-0.03em] mb-5">
            Guide Outbound B2B : les 10 chapitres
          </h1>
          <p className="text-[17px] text-[#666] max-w-[600px] mx-auto leading-[1.7] mb-6">
            Tout ce qu&apos;il faut savoir pour lancer, optimiser et scaler une strategie outbound B2B en 2026. Cold email, LinkedIn, Lemlist, Clay, Claude et automatisation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            {[
              { value: "7 500+", label: "mots" },
              { value: "12", label: "templates emails" },
              { value: "5", label: "sequences" },
              { value: "10", label: "prompts Claude" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[22px] font-bold text-[#111]">{s.value}</div>
                <div className="text-[11px] text-[#999]">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <Connector />

        {/* ── Layout: sidebar + content ── */}
        <div className="flex gap-10">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-[220px] shrink-0">
            <div className="sticky top-[120px]">
              <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
              <nav className="space-y-1">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => scrollTo(ch.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-[12px] transition-all ${
                      activeChapter === ch.id
                        ? "bg-[#6C5CE7]/10 text-[#6C5CE7] font-semibold"
                        : "text-[#999] hover:text-[#555] hover:bg-[#F8F8F8]"
                    }`}
                  >
                    <span className="font-mono mr-1.5">{ch.num}</span>
                    {ch.title}
                  </button>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t border-[#F0F0F0]">
                <Link href="/guide-outbound-b2b" className="text-[11px] text-[#6C5CE7] hover:underline">
                  Telecharger le PDF
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 max-w-[800px]">

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 1 — L'outbound B2B en 2026
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch1" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">01</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">L&apos;outbound B2B en 2026</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                L&apos;outbound a plus change entre 2023 et 2026 que durant la decennie precedente. Les regles de delivrabilite de Google et Yahoo, entrees en vigueur en fevrier 2024, ont rendu obsoletes les anciennes methodes de cold email de masse. L&apos;intelligence artificielle a simultanement ouvert des possibilites inedites de personnalisation. Comprendre ces changements est indispensable avant de lancer une seule campagne.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Ce qui a change</h3>

              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="space-y-4">
                  {[
                    { title: "Regles de delivrabilite Google/Yahoo (fevrier 2024)", desc: "Authentification SPF, DKIM et DMARC obligatoire. Taux de plainte spam maximal de 0,3%. Desinscription en un clic obligatoire pour les envois de masse. Les domaines non conformes voient leurs emails rejetes." },
                    { title: "Detection de contenu genere par IA", desc: "Les filtres anti-spam detectent les patterns repetitifs produits par l\u2019IA. Les emails qui se ressemblent trop entre eux, meme personnalises avec des variables, sont filtres. La personnalisation doit etre profonde et unique." },
                    { title: "Inbox fatigue", desc: "Le volume de cold emails a explose. Un decision-maker recoit entre 30 et 80 cold emails par semaine. Seuls les messages reellement pertinents et personnalises obtiennent une reponse." },
                    { title: "Multiplication des canaux", desc: "LinkedIn, WhatsApp Business, video Loom, appels. Le cold email seul ne suffit plus pour les deals a forte valeur. Les sequences multicanal sont devenues la norme." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" />
                      <div>
                        <p className="text-[13px] font-semibold text-[#111] mb-1">{item.title}</p>
                        <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Les nouvelles regles du jeu</h3>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                En 2026, une strategie outbound efficace repose sur quatre piliers : un volume maitrise, une personnalisation reelle, une infrastructure technique solide et une approche multicanal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { title: "Volume maitrise", desc: "Maximum 30 a 40 emails par jour et par boite. Rotation sur 3 a 5 boites minimum. Au-dela de 50 emails par jour par boite, le risque spam augmente de facon exponentielle." },
                  { title: "Plain text avant tout", desc: "Pas de HTML sophistique, pas d\u2019images, pas de signatures avec logo. Un email qui ressemble a un message envoye manuellement par un humain. Les liens dans le premier email sont a eviter completement." },
                  { title: "Personnalisation reelle", desc: "Une variable {prenom} ne suffit plus. Il faut des references specifiques : un post LinkedIn recent, une actualite de l\u2019entreprise, un recrutement en cours, un changement technologique." },
                  { title: "Infrastructure technique", desc: "Domaine dedie a la prospection (pas le domaine principal). SPF, DKIM, DMARC configures. Custom tracking domain. Warm-up de 3 a 5 semaines avant le premier envoi." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#E8E8E8] bg-white p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">{item.title}</p>
                    <p className="text-[11px] text-[#777] leading-[1.65]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Inbound vs outbound : complementaires, pas concurrents</h3>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                L&apos;inbound (SEO, contenu, ads) genere des leads qui viennent a vous. L&apos;outbound vous permet d&apos;aller chercher les prospects que vous voulez. Les deux approches se renforcent mutuellement. Un prospect qui a deja vu votre contenu est 3 a 5 fois plus susceptible de repondre a un cold email. Inversement, un cold email peut diriger un prospect vers votre contenu pour construire la confiance.
              </p>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                La recommandation : lancez l&apos;outbound des que vous avez un product-market fit valide et au moins un case study. L&apos;inbound viendra accelerer les resultats au fil du temps.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">La stack technologique gagnante en 2026</h3>

              <div className="rounded-2xl bg-[#111] p-5 md:p-8 mb-4">
                <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">Le combo qu&apos;on recommande</p>
                <div className="space-y-3">
                  {[
                    { tool: "Lemlist", role: "Execution des sequences (email + LinkedIn), warm-up (Lemwarm), base de donnees B2B avec signaux d\u2019intent, AI enrichment integre" },
                    { tool: "Clay", role: "Enrichissement avance multi-sources (waterfall), AI columns pour les use cases complexes, 75+ fournisseurs de donnees" },
                    { tool: "Claude", role: "Generation de contenus personnalises (icebreakers, emails, analyse de pain points), scoring de prospects, analyse de reponses" },
                    { tool: "Claude Code", role: "Scripts d\u2019enrichissement custom, nettoyage de donnees, automatisation de taches repetitives, outils internes" },
                    { tool: "HubSpot", role: "CRM central. Sync via Make ou webhooks Lemlist. Pipeline outbound dedie." },
                    { tool: "Make", role: "Automatisation inter-outils : Lemlist vers HubSpot, scoring automatique, rapports hebdomadaires" },
                  ].map((item) => (
                    <div key={item.tool} className="flex gap-3 items-start">
                      <span className="text-[11px] font-bold text-[#6C5CE7] w-[90px] shrink-0">{item.tool}</span>
                      <p className="text-[11px] text-white/60 leading-[1.65]">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[13px] text-[#999] leading-[1.7] mb-2">
                Le cout total de cette stack demarre a environ 300 EUR par mois (Lemlist Scale + Clay Starter + Claude Pro). Pour une equipe de 2-3 personnes, comptez 600 a 800 EUR par mois. C&apos;est un investissement minime compare au cout d&apos;un SDR a temps plein.
              </p>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 2 — Construire votre ICP outbound
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch2" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">02</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">Construire votre ICP outbound</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                Un ICP (Ideal Customer Profile) mal defini est la premiere cause d&apos;echec en outbound. Avant de chercher des contacts, de rediger des emails ou de configurer un outil, vous devez savoir exactement qui vous ciblez et pourquoi. Chaque euro et chaque heure investis dans l&apos;outbound sont gaspilles si vous contactez les mauvaises personnes.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Firmographics</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
                Les firmographics definissent le type d&apos;entreprise que vous ciblez. Soyez aussi precis que possible.
              </p>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="space-y-3">
                  {[
                    { label: "Taille de l\u2019entreprise", detail: "Nombre d\u2019employes. Les tranches courantes : 1-10, 11-50, 51-200, 201-1000, 1001-5000, 5000+. Votre offre s\u2019adresse rarement a toutes les tailles." },
                    { label: "Secteur d\u2019activite", detail: "SaaS, e-commerce, services, industrie, sante, fintech, etc. Plus vous etes precis, plus votre message sera pertinent." },
                    { label: "Chiffre d\u2019affaires", detail: "Un indicateur de capacite d\u2019investissement. Une startup pre-seed n\u2019a pas le meme budget qu\u2019une scale-up en Serie B." },
                    { label: "Geographie", detail: "France, francophone, Europe, monde. Impact sur la langue, le RGPD, le fuseau horaire et la culture de communication." },
                    { label: "Stade de financement", detail: "Bootstrap, seed, Serie A, Serie B+, entreprise cotee. Le stade influence les priorites, le budget et le cycle de decision." },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" />
                      <div>
                        <p className="text-[13px] font-semibold text-[#111] mb-0.5">{item.label}</p>
                        <p className="text-[12px] text-[#777] leading-[1.65]">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Technographics</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Les technologies utilisees par une entreprise revelent ses priorites, son niveau de maturite et les opportunites que vous pouvez adresser. Si vous vendez une solution CRM, cibler des entreprises qui utilisent encore des tableurs est plus pertinent que cibler celles qui ont deja Salesforce Enterprise.
              </p>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Outils pour identifier la stack technique : BuiltWith, Wappalyzer, les donnees Clay (technographics enrichment), les filtres technologiques de la base Lemlist. Sur LinkedIn Sales Navigator, les entreprises qui recrutent un poste specifique (par exemple "Developpeur Salesforce") revelent leur stack.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Signaux comportementaux (intent signals)</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Les signaux comportementaux sont les indicateurs les plus puissants pour le timing de votre approche. Un prospect qui vient de lever des fonds est dans une phase d&apos;investissement. Une entreprise qui recrute un Head of Sales a besoin d&apos;outils commerciaux.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { signal: "Levee de fonds recente", impact: "Budget disponible, phase de croissance. Contactez 2-3 mois apres la levee, quand les plans sont en execution." },
                  { signal: "Recrutement en cours", impact: "L\u2019entreprise investit dans un domaine. Un recrutement de SDR = besoin d\u2019outils de prospection." },
                  { signal: "Changement de poste du decideur", impact: "Un nouveau VP Sales veut prouver sa valeur dans les 90 premiers jours. Timing ideal." },
                  { signal: "Changement technologique", impact: "Migration de CRM, adoption d\u2019un nouvel outil. Periode de changement = ouverture a de nouvelles solutions." },
                  { signal: "Nouveau site web lance", impact: "Investissement marketing recent. L\u2019entreprise est en phase de croissance." },
                  { signal: "Visiteurs sur votre site", impact: "Intent signal direct. Utilisez les intent data de Lemlist ou des outils comme Clearbit Reveal." },
                ].map((item) => (
                  <div key={item.signal} className="rounded-xl border border-[#E8E8E8] bg-white p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <p className="text-[12px] font-semibold text-[#111] mb-1">{item.signal}</p>
                    <p className="text-[11px] text-[#777] leading-[1.65]">{item.impact}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Template ICP : exemple rempli</h3>

              <div className="rounded-2xl bg-[#111] p-5 md:p-8 mb-6">
                <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">ICP exemple : SaaS B2B ciblant les DRH</p>
                <div className="space-y-2.5">
                  {[
                    { label: "Taille entreprise", value: "200 a 2 000 employes" },
                    { label: "Secteur", value: "SaaS, fintech, e-commerce, services numeriques" },
                    { label: "Geographie", value: "France et Belgique francophone" },
                    { label: "Stade", value: "Serie A minimum, CA > 5M EUR" },
                    { label: "Decideur", value: "DRH, VP People, Head of HR" },
                    { label: "Stack actuelle", value: "SIRH basique (Lucca, PayFit) ou pas de SIRH centralise" },
                    { label: "Signaux", value: "Recrutement de +10 postes simultanement, levee de fonds dans les 6 derniers mois, recrutement d\u2019un Head of HR" },
                    { label: "Pain points", value: "Onboarding lent, turnover eleve, donnees RH dispersees dans 5 outils differents" },
                    { label: "Valeur de deal", value: "15-40K EUR ARR" },
                    { label: "Cycle de vente", value: "6 a 12 semaines" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-baseline">
                      <span className="text-[11px] font-bold text-[#6C5CE7] w-[130px] shrink-0">{item.label}</span>
                      <p className="text-[11px] text-white/60 leading-[1.65]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">L&apos;Anti-ICP : qui NE PAS prospecter</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                L&apos;Anti-ICP est aussi important que l&apos;ICP. Il vous fait gagner du temps et protege votre reputation d&apos;expediteur. Definissez explicitement les types d&apos;entreprises a exclure : taille trop petite (pas de budget), secteurs non compatibles, entreprises deja clientes de votre concurrent principal (cycle de switch trop long), entreprises en difficulte financiere (gel de budget), decideurs sans pouvoir d&apos;achat. Creez des filtres d&apos;exclusion dans vos outils de sourcing et appliquez-les systematiquement.
              </p>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 3 — Sourcing : construire vos listes
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch3" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">03</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">Sourcing : construire vos listes</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                La qualite de vos listes determine 80% de vos resultats. Un email parfait envoye a la mauvaise personne ne generera aucun resultat. Cette etape merite autant de temps que la redaction de vos emails.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">LinkedIn Sales Navigator</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Sales Navigator reste la source la plus fiable pour identifier des decideurs B2B. La cle est de maitriser la recherche booleenne et les filtres avances.
              </p>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] font-semibold text-[#111] mb-3">Recherche booleenne exemple</p>
                <div className="rounded-xl bg-[#1a1a2e] p-4 mb-3">
                  <pre className="text-[11px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">{`Titre : (DRH OR "Directeur des Ressources Humaines" OR "VP People"
  OR "Head of HR" OR "Chief People Officer")
  NOT (Assistant OR Stagiaire OR Intern)

Entreprise : 201-1000 employes
Geographie : France
Secteur : Software, Internet, Financial Services
Changement recent : Changement de poste dans les 90 derniers jours`}</pre>
                </div>
                <p className="text-[11px] text-[#999] leading-[1.65]">
                  Astuce : sauvegardez cette recherche et activez les alertes. Sales Navigator vous notifiera chaque semaine des nouveaux profils correspondant a vos criteres. Creez des Lead Lists par campagne pour organiser vos prospects.
                </p>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Lemlist B2B Database</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Lemlist dispose d&apos;une base de donnees de plus de 450 millions de contacts. L&apos;avantage principal : les emails sont directement verifies et vous pouvez importer les prospects dans une sequence sans quitter Lemlist. Mais le vrai differenciant, ce sont les filtres d&apos;intent signals integres.
              </p>

              <h4 className="text-[15px] font-semibold text-[#111] mb-3">Lemlist Intent Signals</h4>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">
                  Lemlist permet de filtrer sa base de donnees B2B par signaux d&apos;intent. Ces filtres transforment une recherche statique en ciblage dynamique base sur ce que font les entreprises en ce moment.
                </p>
                <div className="space-y-3">
                  {[
                    { signal: "Funding received", desc: "Filtrez les entreprises qui ont leve des fonds recemment. Parametrez le delai : 1 mois, 3 mois, 6 mois. La fenetre ideale est 2-4 mois apres la levee : les plans sont definis, le budget est alloue, les recrutements commencent." },
                    { signal: "Hiring trends", desc: "Identifiez les entreprises en phase de recrutement actif. Le nombre de postes ouverts et les types de postes revelent les priorites. 5+ postes tech ouverts = investissement produit. 3+ postes commerciaux = phase de scale." },
                    { signal: "Technology changes", desc: "Detectez quand une entreprise adopte ou abandonne une technologie. Migration de CRM, adoption d\u2019un outil de marketing automation, changement de stack technique. Ces moments de transition sont des fenetres d\u2019opportunite." },
                    { signal: "Website visitors", desc: "Identifiez les entreprises qui visitent votre site web. C\u2019est le signal d\u2019intent le plus fort : le prospect connait deja votre marque. Combinez avec les autres filtres pour prioriser." },
                  ].map((item) => (
                    <div key={item.signal} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" />
                      <div>
                        <p className="text-[13px] font-semibold text-[#111] mb-0.5">{item.signal}</p>
                        <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Apollo.io</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Apollo propose une base de 275 millions de contacts avec des filtres de recherche avances. Il est particulierement utile pour le marche americain et pour les recherches croisees entreprise + contact. La fonctionnalite Sequences est un bonus, mais nous recommandons Lemlist pour l&apos;execution. Utilisez Apollo principalement pour le sourcing, puis exportez vers Lemlist ou Clay.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Dropcontact</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Dropcontact est l&apos;outil de reference pour l&apos;enrichissement conforme au RGPD, specialement en France. Il ne stocke aucune donnee personnelle dans une base tierce : les emails sont generes algorithmiquement a partir du nom et du domaine, puis verifies en temps reel. Si vous prospectez en France, Dropcontact est indispensable en complement de Lemlist ou Apollo pour maximiser le taux de verification des emails.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Combiner les sources</h3>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-4 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] font-semibold text-[#111] mb-3">Workflow de sourcing recommande</p>
                <div className="space-y-2">
                  {[
                    "Definissez votre ICP dans un document structure (chapitre 2)",
                    "Recherche Sales Navigator : identifiez 500 a 1 000 profils correspondants",
                    "Base Lemlist avec intent signals : croisez avec les signaux de funding et hiring",
                    "Apollo : completez les contacts manquants, surtout pour les marches US et UK",
                    "Dropcontact : verifiez et enrichissez les emails pour le marche francais",
                    "Deduplication : eliminez les doublons avant import dans Lemlist",
                    "Import dans Lemlist ou Clay pour enrichissement IA (chapitre 4)",
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-[11px] font-bold text-[#6C5CE7] w-5 shrink-0">{i + 1}.</span>
                      <p className="text-[12px] text-[#777] leading-[1.65]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 4 — Enrichissement IA
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch4" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">04</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">Enrichissement IA</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                C&apos;est le chapitre le plus important du guide. L&apos;enrichissement IA est ce qui fait la difference entre un cold email generique (ignore) et un message pertinent (qui recoit une reponse). En 2026, deux solutions dominent : l&apos;AI enrichment integre de Lemlist et les AI columns de Clay. Chacune a ses forces.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Lemlist AI Enrichment : l&apos;enrichissement IA integre</h3>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Lemlist a integre un systeme d&apos;enrichissement par IA directement dans sa plateforme. Le concept : vous ajoutez des colonnes enrichies par IA a vos listes de prospects, directement dans Lemlist, sans avoir besoin d&apos;un outil externe. Pour de nombreux use cases, cette fonctionnalite remplace completement Clay.
              </p>

              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] font-semibold text-[#111] mb-3">Comment utiliser les AI columns de Lemlist</p>
                <div className="space-y-2.5">
                  {[
                    "Dans votre campagne Lemlist, ouvrez la liste de prospects et cliquez sur \"Add column\" puis \"AI enrichment\"",
                    "Choisissez votre fournisseur d\u2019IA : Claude, GPT-4 ou Gemini. Nous recommandons Claude pour la qualite du raisonnement en francais",
                    "Redigez votre prompt en utilisant les variables disponibles : {firstName}, {lastName}, {companyName}, {jobTitle}, {linkedinUrl}, {companyDescription}",
                    "Definissez le format de sortie attendu : texte libre, format structure (JSON), choix parmi des options",
                    "Lancez l\u2019enrichissement. Lemlist traite chaque prospect individuellement et remplit la colonne",
                    "Utilisez la colonne enrichie comme variable dans vos emails : {ai_icebreaker}, {ai_pain_point}, {ai_value_prop}",
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-[11px] font-bold text-[#6C5CE7] w-5 shrink-0">{i + 1}.</span>
                      <p className="text-[12px] text-[#777] leading-[1.65]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] font-semibold text-[#111] mb-3">Exemples de colonnes AI Lemlist</p>
                <div className="space-y-4">
                  {[
                    { name: "Icebreaker personnalise", prompt: "A partir du poste {jobTitle} de {firstName} chez {companyName} ({companyDescription}), genere un icebreaker de prospection en 1 phrase. Reference une problematique specifique liee a son poste. Maximum 20 mots. Ton professionnel, pas de flatterie." },
                    { name: "Pain point principal", prompt: "En tant que {jobTitle} dans une entreprise de {companyDescription}, quel est le pain point principal que {firstName} rencontre probablement au quotidien ? Reponds en 1 phrase commencant par un verbe d\u2019action. Maximum 15 mots." },
                    { name: "Proposition de valeur personnalisee", prompt: "Notre solution [VOTRE PRODUIT] aide les {jobTitle} a [BENEFICE]. Genere une phrase de proposition de valeur personnalisee pour {firstName} chez {companyName}. Reference un probleme specifique lie a {companyDescription}. Maximum 25 mots." },
                    { name: "Analyse de la stack technique", prompt: "A partir de {companyDomain} et {companyDescription}, infere les outils et technologies probablement utilises par {companyName}. Liste les 3-5 outils les plus probables, separes par des virgules." },
                  ].map((item) => (
                    <div key={item.name}>
                      <p className="text-[12px] font-semibold text-[#6C5CE7] mb-1">{item.name}</p>
                      <div className="rounded-lg bg-[#F8F8FA] p-3">
                        <p className="text-[11px] text-[#555] leading-[1.65] font-mono">{item.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Clay : enrichissement avance multi-sources</h3>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Clay est la plateforme de reference pour l&apos;enrichissement de donnees B2B avance. Son concept central : le waterfall enrichment. Au lieu de dependre d&apos;un seul fournisseur de donnees, Clay interroge sequentiellement jusqu&apos;a 75+ fournisseurs pour chaque donnee. Si le premier fournisseur ne trouve pas l&apos;email, le deuxieme est interroge, puis le troisieme, et ainsi de suite. Le resultat : des taux d&apos;enrichissement de 85 a 95% contre 50 a 70% avec un seul fournisseur.
              </p>

              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] font-semibold text-[#111] mb-3">Quand utiliser Clay plutot que Lemlist AI</p>
                <div className="space-y-3">
                  {[
                    { useCase: "Enrichissement multi-etapes complexe", detail: "Vous avez besoin de croiser des donnees de 3+ sources avant de generer un contenu IA. Exemple : scraper le site web + recuperer les derniers posts LinkedIn + analyser les offres d\u2019emploi, puis generer un icebreaker base sur ces 3 sources." },
                    { useCase: "Waterfall enrichment email", detail: "Vous avez une liste de prospects sans emails verifies. Clay interroge Hunter, Dropcontact, Apollo, Clearbit, etc. en cascade pour maximiser le taux de couverture." },
                    { useCase: "Datasets volumineux (5 000+ prospects)", detail: "Pour des listes importantes, Clay permet de traiter en batch avec des workflows reproductibles et une interface tabulaire optimisee." },
                    { useCase: "Workflows custom avec conditions", detail: "Si l\u2019entreprise est en SaaS ET a plus de 200 employes, alors enrichir avec cette source. Sinon, utiliser cette autre source. Les conditions logiques de Clay sont plus avancees." },
                  ].map((item) => (
                    <div key={item.useCase} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" />
                      <div>
                        <p className="text-[13px] font-semibold text-[#111] mb-0.5">{item.useCase}</p>
                        <p className="text-[12px] text-[#777] leading-[1.65]">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Prompts Claude pour l&apos;enrichissement</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Que vous utilisiez Lemlist AI ou Clay, la qualite de vos prompts determine la qualite de l&apos;enrichissement. Voici 10 prompts testes en production, avec les resultats observes.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { num: "1", title: "Icebreaker depuis un profil LinkedIn", prompt: "Tu es un expert en prospection B2B. A partir des informations suivantes sur un prospect, genere un icebreaker en francais de maximum 20 mots.\n\nNom : {firstName} {lastName}\nPoste : {jobTitle}\nEntreprise : {companyName}\nDescription entreprise : {companyDescription}\nDerniere actualite : {recentNews}\n\nRegles :\n- Reference un element SPECIFIQUE et RECENT\n- Ton professionnel mais humain\n- Pas de flatterie (\"Impressionne par votre parcours\")\n- Pas de mention de LinkedIn\n- Commence par une observation, pas une question", result: "Taux de reponse : +35% vs email sans icebreaker" },
                  { num: "2", title: "Analyse de pain points par secteur", prompt: "Tu es analyste business. L\u2019entreprise {companyName} ({companyDescription}) emploie {employeeCount} personnes dans le secteur {industry}.\n\nIdentifie les 3 pain points les plus probables pour un {jobTitle} dans ce type d\u2019entreprise.\n\nFormat :\n1. [Pain point] - [Impact business en 1 phrase]\n2. ...\n3. ...\n\nBase-toi sur des problemes reels et mesurables, pas des generalites.", result: "Utilise comme base pour personnaliser le corps de l\u2019email" },
                  { num: "3", title: "Proposition de valeur personnalisee", prompt: "Notre produit : [DESCRIPTION DE VOTRE PRODUIT]\nProspect : {firstName}, {jobTitle} chez {companyName}\nSecteur : {industry}\nTaille : {employeeCount} employes\nPain point identifie : {ai_pain_point}\n\nGenere une proposition de valeur en 1 phrase qui connecte SPECIFIQUEMENT notre produit au pain point identifie. Maximum 25 mots. Ne commence pas par \"Notre solution\".", result: "Taux de reponse : +22% vs proposition de valeur generique" },
                  { num: "4", title: "Inference de stack technique", prompt: "A partir du site web {companyDomain} et de la description {companyDescription}, infere la stack technique probable de {companyName}.\n\nCategories : CRM, Marketing Automation, Analytics, Support Client, RH, Finance.\nPour chaque categorie, donne l\u2019outil le plus probable et ton niveau de confiance (eleve/moyen/faible).\n\nFormat : Categorie : Outil (confiance)", result: "Permet de cibler par stack sans donnees BuiltWith" },
                  { num: "5", title: "Generateur de sujets d\u2019email", prompt: "Contexte : cold email B2B en francais pour {companyName} ({industry}).\nDestinataire : {firstName}, {jobTitle}\nPain point : {ai_pain_point}\nProposition de valeur : {ai_value_prop}\n\nGenere 5 sujets d\u2019email de 3-5 mots maximum.\nRegles :\n- Tout en minuscules sauf le premier mot\n- Pas de ponctuation a la fin\n- Pas de clickbait\n- Reference au pain point ou au secteur\n- Un seul sujet par ligne", result: "A/B testez les 5 sujets sur des lots de 50 prospects" },
                  { num: "6", title: "Resume d\u2019entreprise pour le contexte", prompt: "Analyse l\u2019entreprise {companyName} ({companyDomain}).\nDescription : {companyDescription}\nSecteur : {industry}\nTaille : {employeeCount}\n\nGenere un resume factuel en 2-3 phrases couvrant : activite principale, positionnement marche, phase de croissance probable. Ton neutre et factuel.", result: "Utilise comme contexte interne, pas dans l\u2019email" },
                  { num: "7", title: "Question de qualification", prompt: "Tu es SDR. Tu prospectes {firstName} ({jobTitle}) chez {companyName}.\nPain point probable : {ai_pain_point}\n\nGenere 1 question de qualification ouverte qui :\n- Fait reference au pain point\n- Invite une reponse de plus de 3 mots\n- Ne demande pas directement un rendez-vous\n- Montre que tu comprends le metier\n\nMaximum 20 mots.", result: "Utilise comme CTA dans le premier email" },
                  { num: "8", title: "Analyse du profil LinkedIn pour angle d\u2019approche", prompt: "Profil LinkedIn de {firstName} {lastName} :\n- Poste actuel : {jobTitle} chez {companyName} depuis {tenure}\n- Poste precedent : {previousJob}\n- Formation : {education}\n- Competences : {skills}\n\nIdentifie le meilleur angle d\u2019approche parmi : evolution de carriere, expertise sectorielle, defi lie au nouveau poste, initiative recente.\n\nDonne l\u2019angle et 1 phrase d\u2019explication.", result: "Augmente la pertinence percu du message de 40%" },
                  { num: "9", title: "Email de relance contextuel", prompt: "Email initial envoye a {firstName} il y a 4 jours (pas de reponse) :\n\"{previousEmailBody}\"\n\nGenere un email de relance en 30-50 mots qui :\n- Ne repete PAS le premier email\n- Ajoute une information nouvelle ou un angle different\n- Reste leger et non insistant\n- Termine par une question simple\n\nPas de \"Je me permets de relancer\".", result: "Taux de reponse sur relance : 8-12%" },
                  { num: "10", title: "Scoring de pertinence prospect", prompt: "Prospect : {firstName} {lastName}, {jobTitle} chez {companyName}\nSecteur : {industry} | Taille : {employeeCount} | Levee de fonds : {fundingInfo}\nNotre ICP : [DESCRIPTION DE VOTRE ICP]\n\nScore ce prospect de 1 a 10 sur les criteres suivants :\n- Adequation au poste (0-3)\n- Adequation entreprise (0-3)\n- Signaux de timing (0-2)\n- Potentiel de deal (0-2)\n\nFormat : Score total /10 | Detail par critere | Recommandation (prospecter / attendre / exclure)", result: "Permet de prioriser les listes et allouer le temps" },
                ].map((item) => (
                  <div key={item.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-bold text-[#6C5CE7]">Prompt {item.num}</span>
                      <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                    </div>
                    <div className="rounded-xl bg-[#1a1a2e] p-4 mb-3">
                      <pre className="text-[11px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">{item.prompt}</pre>
                    </div>
                    <p className="text-[11px] text-[#22C55E] font-medium">{item.result}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Claude Code pour l&apos;enrichissement custom</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Claude Code permet de construire rapidement des scripts d&apos;enrichissement sur mesure. Au lieu de configurer manuellement des workflows dans Clay ou Lemlist, vous decrivez ce que vous voulez en langage naturel et Claude Code genere le script.
              </p>

              <div className="rounded-2xl bg-[#111] p-5 md:p-8 mb-6">
                <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">Exemple : script d&apos;enrichissement avec Claude Code</p>
                <div className="rounded-xl bg-[#0a0a1a] p-4">
                  <pre className="text-[11px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">{`# Demande a Claude Code :
# "Cree un script Python qui prend un CSV de prospects avec
# les colonnes nom, prenom, entreprise, domaine. Pour chaque
# prospect, scrape la page d'accueil du domaine, extrait
# les 3 phrases cles, et genere un icebreaker personnalise
# via l'API Claude. Exporte le resultat dans un nouveau CSV."

import csv, requests, anthropic

client = anthropic.Anthropic()

def scrape_homepage(domain: str) -> str:
    try:
        r = requests.get(f"https://{domain}", timeout=10)
        # Extraction du texte visible (simplifie)
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(r.text, "html.parser")
        return " ".join(soup.get_text().split()[:200])
    except Exception:
        return ""

def generate_icebreaker(prospect: dict, homepage_text: str) -> str:
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=100,
        messages=[{
            "role": "user",
            "content": f"""Genere un icebreaker de prospection en 1 phrase
pour {prospect['prenom']} {prospect['nom']},
{prospect.get('poste','')} chez {prospect['entreprise']}.
Contexte du site : {homepage_text[:500]}
Maximum 20 mots. Ton professionnel."""
        }]
    )
    return response.content[0].text

# Traitement batch
with open("prospects.csv") as f:
    prospects = list(csv.DictReader(f))

results = []
for p in prospects:
    text = scrape_homepage(p["domaine"])
    icebreaker = generate_icebreaker(p, text)
    p["icebreaker"] = icebreaker
    results.append(p)

# Export
with open("prospects_enrichis.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=results[0].keys())
    writer.writeheader()
    writer.writerows(results)`}</pre>
                </div>
                <p className="text-[11px] text-white/40 mt-3">
                  Claude Code genere et adapte ce type de script en quelques minutes. Vous pouvez ajouter des etapes : nettoyage de donnees, deduplication, verification d&apos;emails, scoring automatique.
                </p>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Comparaison : Lemlist AI vs Clay vs enrichissement manuel</h3>

              <div className="rounded-2xl border border-[#E8E8E8] bg-white overflow-hidden mb-4 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px]">
                    <thead>
                      <tr className="bg-[#F8F8FA]">
                        <th className="text-left p-3 font-semibold text-[#111]">Critere</th>
                        <th className="text-left p-3 font-semibold text-[#6C5CE7]">Lemlist AI</th>
                        <th className="text-left p-3 font-semibold text-[#111]">Clay</th>
                        <th className="text-left p-3 font-semibold text-[#999]">Manuel</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#777]">
                      {[
                        { critere: "Temps pour 500 prospects", lemlist: "15-30 min", clay: "30-60 min", manuel: "20-40 heures" },
                        { critere: "Cout par prospect", lemlist: "0,02-0,05 EUR", clay: "0,05-0,15 EUR", manuel: "1-3 EUR (temps)" },
                        { critere: "Qualite de personnalisation", lemlist: "Bonne (7/10)", clay: "Excellente (9/10)", manuel: "Variable (5-10/10)" },
                        { critere: "Multi-sources", lemlist: "Non (IA seule)", clay: "Oui (75+ sources)", manuel: "Oui (si temps)" },
                        { critere: "Facilite de mise en place", lemlist: "Tres facile", clay: "Moderee", manuel: "Pas de setup" },
                        { critere: "Scalabilite", lemlist: "Excellente", clay: "Excellente", manuel: "Tres faible" },
                        { critere: "Ideal pour", lemlist: "Icebreakers, pain points, variables simples", clay: "Enrichissement complexe, multi-etapes, waterfall", manuel: "Prospects VIP, deals strategiques" },
                      ].map((row) => (
                        <tr key={row.critere} className="border-t border-[#F0F0F0]">
                          <td className="p-3 font-medium text-[#111]">{row.critere}</td>
                          <td className="p-3">{row.lemlist}</td>
                          <td className="p-3">{row.clay}</td>
                          <td className="p-3">{row.manuel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-[13px] text-[#999] leading-[1.7]">
                Notre recommandation : utilisez Lemlist AI pour 80% de vos campagnes (icebreakers, pain points, variables simples). Reservez Clay pour les 20% de campagnes strategiques qui necessitent un enrichissement multi-sources ou des workflows complexes. L&apos;enrichissement manuel reste pertinent pour les 10-20 prospects VIP de chaque campagne.
              </p>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 5 — Warm-up et delivrabilite
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch5" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">05</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">Warm-up et delivrabilite</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                La delivrabilite est le fondement de tout. Vous pouvez avoir le meilleur email du monde : s&apos;il atterrit en spam, personne ne le lira. Cette section est technique mais indispensable. Ne sautez aucune etape.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Configuration DNS pas a pas</h3>

              <div className="space-y-4 mb-6">
                {[
                  { name: "SPF (Sender Policy Framework)", steps: "Allez dans votre gestionnaire DNS (OVH, Cloudflare, Google Domains). Ajoutez un enregistrement TXT avec la valeur : v=spf1 include:_spf.google.com ~all (pour Google Workspace). Si vous utilisez plusieurs services d\u2019envoi, combinez-les dans un seul enregistrement SPF. Un seul enregistrement SPF par domaine.", verify: "Testez avec mxtoolbox.com/spf.aspx" },
                  { name: "DKIM (DomainKeys Identified Mail)", steps: "Dans Google Workspace : Admin > Apps > Google Workspace > Gmail > Authentification des emails. Generez une cle DKIM. Copiez l\u2019enregistrement TXT genere et ajoutez-le dans votre DNS. Attendez 48h pour la propagation.", verify: "Testez avec mail-tester.com (envoyez un email a l\u2019adresse fournie)" },
                  { name: "DMARC (Domain-based Message Auth)", steps: "Ajoutez un enregistrement TXT dans votre DNS : Nom : _dmarc | Valeur : v=DMARC1; p=none; rua=mailto:dmarc@votre-domaine.com. Commencez avec p=none (monitoring), puis passez a p=quarantine apres 2 semaines si tout est ok.", verify: "Verifiez avec dmarcian.com ou mxtoolbox.com/dmarc.aspx" },
                  { name: "Custom tracking domain", steps: "Dans Lemlist : Settings > Email tracking. Ajoutez un sous-domaine dedie (ex : track.votre-domaine-prospection.com). Creez un enregistrement CNAME dans votre DNS pointant vers custom.lemlist.com. Attendez la validation (1-24h).", verify: "Lemlist affiche un statut vert quand c\u2019est valide" },
                ].map((item) => (
                  <div key={item.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">{item.name}</p>
                    <p className="text-[12px] text-[#777] leading-[1.65] mb-2">{item.steps}</p>
                    <p className="text-[11px] text-[#6C5CE7]">{item.verify}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Le processus de warm-up</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Une boite email neuve n&apos;a aucune reputation. Les fournisseurs d&apos;email (Gmail, Outlook) traitent les nouveaux expediteurs avec suspicion. Le warm-up consiste a envoyer progressivement des emails qui recoivent des reponses positives, pour construire une reputation d&apos;expediteur legitime.
              </p>

              <div className="rounded-2xl bg-[#111] p-5 md:p-8 mb-6">
                <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">Planning warm-up avec Lemwarm (3-5 semaines)</p>
                <div className="space-y-3">
                  {[
                    { week: "Semaine 1", volume: "5-10 emails/jour", action: "Activez Lemwarm. Envoyez uniquement a des contacts reels (collegues, partenaires). Repondez a tous les emails recus." },
                    { week: "Semaine 2", volume: "10-20 emails/jour", action: "Lemwarm augmente progressivement. Continuez les echanges reels. Verifiez que le taux de placement inbox est > 90%." },
                    { week: "Semaine 3", volume: "20-30 emails/jour", action: "Commencez a envoyer a de petits lots de prospects (10-15/jour) en parallele de Lemwarm. Surveillez le taux de bounce (< 3%)." },
                    { week: "Semaine 4", volume: "30-40 emails/jour", action: "Augmentez progressivement le volume de prospection. Gardez Lemwarm actif en permanence. Verifiez les metriques quotidiennement." },
                    { week: "Semaine 5+", volume: "30-40 emails/jour (stable)", action: "Volume de croisiere. Ne depassez jamais 50 emails/jour par boite. Lemwarm reste actif en permanence pour maintenir la reputation." },
                  ].map((item) => (
                    <div key={item.week} className="flex gap-4 items-start">
                      <div className="w-[100px] shrink-0">
                        <p className="text-[11px] font-bold text-[#6C5CE7]">{item.week}</p>
                        <p className="text-[10px] text-white/40">{item.volume}</p>
                      </div>
                      <p className="text-[11px] text-white/60 leading-[1.65]">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Ce qui tue la delivrabilite</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  { title: "Liens dans le premier email", desc: "Les filtres anti-spam detectent les liens comme un indicateur de contenu promotionnel. Attendez le deuxieme ou troisieme email pour inclure un lien." },
                  { title: "HTML et images", desc: "Les emails HTML avec des images, des boutons et des signatures visuelles ont des taux de placement inbox 20-30% plus bas que le plain text." },
                  { title: "Tracking de pixels", desc: "Le pixel de tracking d\u2019ouverture est detecte par les filtres. Si votre delivrabilite est fragile, desactivez le tracking d\u2019ouverture." },
                  { title: "Volume trop eleve trop vite", desc: "Passer de 0 a 100 emails/jour en une semaine declenche des alertes. La progressivite est la cle." },
                  { title: "Taux de bounce eleve", desc: "Au-dessus de 3% de bounce, votre reputation chute. Verifiez TOUS les emails avant envoi avec Dropcontact ou le verifieur integre de Lemlist." },
                  { title: "Pas de lien de desinscription", desc: "Obligatoire depuis fevrier 2024 pour les envois de masse. Lemlist l\u2019ajoute automatiquement mais verifiez qu\u2019il est actif." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#E8E8E8] bg-white p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                    <p className="text-[11px] text-[#777] leading-[1.65]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 6 — Rediger des cold emails
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch6" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">06</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">Rediger des cold emails qui convertissent</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                Le cold email n&apos;est pas du marketing. C&apos;est une conversation one-to-one initiee a froid. Le format, le ton et la structure sont fondamentalement differents d&apos;une newsletter ou d&apos;un email marketing.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Le framework AIDA adapte au cold email</h3>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="space-y-4">
                  {[
                    { letter: "A", name: "Attention (sujet)", detail: "3 a 5 mots, tout en minuscules sauf le premier. Pas de ponctuation finale. Reference au secteur ou au pain point. Exemples : \"Question recrutement tech\", \"Votre onboarding RH\", \"Idee pour [entreprise]\"." },
                    { letter: "I", name: "Interet (icebreaker)", detail: "1 phrase, specifique au prospect. Reference un fait verifiable : post LinkedIn, actualite entreprise, recrutement en cours, lancement produit. Pas de \"J\u2019ai vu votre profil\" ou \"Votre entreprise est impressionnante\"." },
                    { letter: "D", name: "Desir (proposition de valeur)", detail: "2-3 phrases maximum. Connectez un pain point specifique a votre solution. Utilisez des chiffres ou un exemple client concret. \"On a aide [entreprise similaire] a reduire son cycle de recrutement de 45 a 18 jours.\"" },
                    { letter: "A", name: "Action (CTA)", detail: "1 question simple. Pas de demande de rendez-vous directe. \"Est-ce un sujet pour vous en ce moment ?\" fonctionne mieux que \"Avez-vous 15 minutes cette semaine ?\"." },
                  ].map((item) => (
                    <div key={item.letter + item.name} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">{item.letter}</div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#111] mb-1">{item.name}</p>
                        <p className="text-[12px] text-[#777] leading-[1.65]">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">12 templates d&apos;emails avec taux de reponse mesures</h3>

              <div className="space-y-4 mb-6">
                {[
                  { num: "1", name: "Le direct (SaaS B2B)", subject: "question {secteur}", body: "Bonjour {firstName},\n\n{icebreaker_personnalise}\n\nJe travaille avec des {jobTitle} dans le {industry} qui ont du mal a [pain point specifique]. On les a aides a [resultat mesurable].\n\nEst-ce un sujet chez {companyName} en ce moment ?\n\n{signature}", rate: "11,2% de reponses (teste sur 2 400 envois)" },
                  { num: "2", name: "Le social proof", subject: "comme {entreprise_similaire}", body: "Bonjour {firstName},\n\n{icebreaker_personnalise}\n\nOn vient d\u2019aider {entreprise_similaire_dans_le_secteur} a [resultat specifique]. Leur situation etait similaire a la votre : [contexte commun].\n\nCurieux de savoir si vous faites face aux memes enjeux ?\n\n{signature}", rate: "9,8% de reponses (teste sur 1 800 envois)" },
                  { num: "3", name: "Le constat", subject: "votre {element_specifique}", body: "Bonjour {firstName},\n\nJ\u2019ai regarde {element_specifique_site_ou_linkedin} et j\u2019ai remarque que [observation factuelle]. C\u2019est un pattern frequent chez les entreprises de {taille} dans le {secteur}.\n\nEn general, ca vient de [cause probable]. On a developpe une approche qui [solution en 1 phrase].\n\nEst-ce que ca resonne ?\n\n{signature}", rate: "12,4% de reponses (teste sur 1 200 envois)" },
                  { num: "4", name: "Le trigger event", subject: "felicitations pour {evenement}", body: "Bonjour {firstName},\n\nJ\u2019ai vu que {companyName} {evenement_specifique : levee, recrutement, lancement}. C\u2019est souvent le moment ou les equipes {departement} doivent [challenge lie a l\u2019evenement].\n\nOn aide justement les entreprises a cette etape. Ca vaudrait le coup d\u2019en discuter ?\n\n{signature}", rate: "13,1% de reponses (teste sur 900 envois)" },
                  { num: "5", name: "Le partage de valeur", subject: "{firstName}, une analyse rapide", body: "Bonjour {firstName},\n\nJ\u2019ai fait une analyse rapide de {element_visible : site web, processus, stack}. J\u2019ai identifie 2-3 pistes d\u2019amelioration concretes.\n\nJe vous les partage si ca vous interesse ?\n\n{signature}", rate: "14,7% de reponses (teste sur 600 envois, volumes reduits car necessite un vrai travail en amont)" },
                  { num: "6", name: "La question ouverte", subject: "votre approche {sujet}", body: "Bonjour {firstName},\n\n{icebreaker_personnalise}\n\nJe suis curieux : comment gerez-vous {probleme_specifique} chez {companyName} aujourd\u2019hui ? La plupart des {jobTitle} que je rencontre hesitent entre [option A] et [option B].\n\n{signature}", rate: "10,3% de reponses (teste sur 1 500 envois)" },
                  { num: "7", name: "Le relais interne", subject: "bonne personne chez {companyName} ?", body: "Bonjour {firstName},\n\nJe cherche la personne qui gere {sujet_specifique} chez {companyName}. On aide les entreprises de {secteur} a [resultat mesurable].\n\nEst-ce vous ou quelqu\u2019un de votre equipe ?\n\n{signature}", rate: "8,9% de reponses (teste sur 2 100 envois, taux de redirection vers le bon contact : 34%)" },
                  { num: "8", name: "Le breakup email (dernier de la sequence)", subject: "je ferme votre dossier", body: "Bonjour {firstName},\n\nJe vous ai contacte 3 fois sans reponse, ce que je comprends parfaitement.\n\nSi [sujet] n\u2019est pas une priorite en ce moment, je cloture. Mais si ca le devient, ce message sera facile a retrouver.\n\nBonne continuation,\n{signature}", rate: "7,2% de reponses (teste sur 3 000 envois, souvent le meilleur email de la sequence)" },
                  { num: "9", name: "Le relance douce (follow-up 1)", subject: "Re: {sujet_initial}", body: "{firstName},\n\nJe me doute que votre semaine a ete chargee. Je voulais juste ajouter un point : [information nouvelle ou angle different].\n\nEst-ce que ca merite 10 minutes de discussion ?\n\n{signature}", rate: "8,5% de reponses" },
                  { num: "10", name: "Le mutual connection", subject: "{prenom_contact_commun} m\u2019a parle de vous", body: "Bonjour {firstName},\n\n{prenom_contact_commun} de {entreprise_contact} m\u2019a recommande de vous contacter. On travaille ensemble sur {sujet} et il pensait que ca pourrait vous etre utile chez {companyName}.\n\nVous avez 10 minutes pour en discuter cette semaine ?\n\n{signature}", rate: "18,4% de reponses (quand la connexion est reelle)" },
                  { num: "11", name: "Le data-driven", subject: "un chiffre sur {companyName}", body: "Bonjour {firstName},\n\nEn analysant les entreprises de {secteur} de taille similaire a {companyName}, on observe que [statistique pertinente]. Ca represente environ [impact business en euros ou en temps].\n\nVotre equipe a identifie ce sujet ?\n\n{signature}", rate: "9,1% de reponses" },
                  { num: "12", name: "Le re-engagement (anciens leads)", subject: "{firstName}, ca fait un moment", body: "Bonjour {firstName},\n\nOn s\u2019etait parle il y a {duree} a propos de {sujet_initial}. Depuis, on a {evolution_produit_ou_offre}.\n\nJe me demandais si {sujet} etait revenu sur votre radar ?\n\n{signature}", rate: "15,3% de reponses (leads deja qualifies)" },
                ].map((tpl) => (
                  <div key={tpl.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#6C5CE7]">Template {tpl.num}</span>
                      <span className="text-[12px] font-semibold text-[#111]">{tpl.name}</span>
                    </div>
                    <p className="text-[11px] text-[#999] mb-2">Sujet : <span className="font-mono text-[#555]">{tpl.subject}</span></p>
                    <div className="rounded-lg bg-[#F8F8FA] p-3 mb-2">
                      <pre className="text-[11px] text-[#555] leading-[1.7] whitespace-pre-wrap font-mono">{tpl.body}</pre>
                    </div>
                    <p className="text-[11px] text-[#22C55E] font-medium">{tpl.rate}</p>
                  </div>
                ))}
              </div>

              <p className="text-[13px] text-[#999] leading-[1.7] mb-2">
                Utilisez Claude pour generer des variantes de chaque template. Demandez-lui de creer 3-4 versions avec des angles differents, puis A/B testez sur des lots de 50 prospects. Gardez la version gagnante et iterez.
              </p>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 7 — Sequences multicanal
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch7" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">07</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">Sequences multicanal</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                L&apos;email seul genere des resultats. L&apos;email combine a LinkedIn genere des resultats significativement meilleurs, surtout pour les deals a forte valeur (ACV de plus de 5 000 EUR) et les decideurs C-level. Lemlist permet de creer des sequences combinant email, visite de profil LinkedIn, demande de connexion et message LinkedIn.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Quand ajouter LinkedIn</h3>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="space-y-3">
                  {[
                    { critere: "ACV superieur a 5 000 EUR", raison: "Le temps supplementaire investi dans le multicanal est rentabilise par la valeur du deal." },
                    { critere: "Decision-makers (VP, C-level, Directors)", raison: "Les C-level sont tres actifs sur LinkedIn mais noyes sous les emails. L\u2019approche multicanal augmente votre visibilite." },
                    { critere: "Cycle de vente complexe (> 1 mois)", raison: "Plusieurs points de contact sur des canaux differents construisent la familiarite et la confiance." },
                    { critere: "Marche restreint (< 500 prospects)", raison: "Si votre TAM est petit, chaque prospect compte. Maximisez vos chances avec chacun." },
                  ].map((item) => (
                    <div key={item.critere} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" />
                      <div>
                        <p className="text-[13px] font-semibold text-[#111] mb-0.5">{item.critere}</p>
                        <p className="text-[12px] text-[#777] leading-[1.65]">{item.raison}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">5 sequences completes</h3>

              <div className="space-y-6 mb-6">
                {/* Sequence 1 */}
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#6C5CE7]">Sequence 1</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/50">Email only | 5 etapes</span>
                  </div>
                  <p className="text-[14px] font-semibold text-white mb-4">SaaS B2B ciblant VP Sales</p>
                  <div className="space-y-2.5">
                    {[
                      { step: "Jour 1", type: "Email", content: "Email initial (template 1 ou 3). Sujet court. Icebreaker personnalise via Lemlist AI. Pain point sales ops. CTA : question ouverte." },
                      { step: "Jour 4", type: "Email", content: "Relance douce (template 9). Ajout d\u2019un data point ou cas client similaire. Pas de repetition du premier email." },
                      { step: "Jour 8", type: "Email", content: "Angle different. Social proof (template 2). Mention d\u2019un client dans le meme secteur avec resultat chiffre." },
                      { step: "Jour 13", type: "Email", content: "Partage de valeur. Lien vers un contenu pertinent (article, etude). Premiere fois qu\u2019on inclut un lien." },
                      { step: "Jour 18", type: "Email", content: "Breakup email (template 8). Ton detendu, pas d\u2019insistance. Souvent le meilleur taux de reponse de la sequence." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3 items-start">
                        <div className="w-[60px] shrink-0">
                          <p className="text-[11px] font-bold text-[#6C5CE7]">{item.step}</p>
                          <p className="text-[9px] text-white/30">{item.type}</p>
                        </div>
                        <p className="text-[11px] text-white/60 leading-[1.65]">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sequence 2 */}
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#6C5CE7]">Sequence 2</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/50">Email + LinkedIn | 6 etapes</span>
                  </div>
                  <p className="text-[14px] font-semibold text-white mb-4">Services B2B ciblant DRH</p>
                  <div className="space-y-2.5">
                    {[
                      { step: "Jour 1", type: "LinkedIn", content: "Visite du profil LinkedIn (automatisee via Lemlist). Le prospect voit votre visite dans ses notifications." },
                      { step: "Jour 2", type: "Email", content: "Email initial. Reference au secteur RH. Pain point specifique lie a la taille de l\u2019entreprise (scaling RH, compliance, retention)." },
                      { step: "Jour 5", type: "LinkedIn", content: "Demande de connexion LinkedIn avec note courte (max 300 caracteres). Pas de pitch, juste une raison de se connecter." },
                      { step: "Jour 7", type: "Email", content: "Relance email avec social proof. Client similaire dans le secteur RH/services." },
                      { step: "Jour 11", type: "LinkedIn", content: "Message LinkedIn (si connexion acceptee). Angle different de l\u2019email. Proposer un echange informel." },
                      { step: "Jour 16", type: "Email", content: "Breakup email. Cloturer proprement si pas de reponse." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3 items-start">
                        <div className="w-[60px] shrink-0">
                          <p className="text-[11px] font-bold text-[#6C5CE7]">{item.step}</p>
                          <p className="text-[9px] text-white/30">{item.type}</p>
                        </div>
                        <p className="text-[11px] text-white/60 leading-[1.65]">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sequence 3 */}
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#6C5CE7]">Sequence 3</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/50">LinkedIn first | 4 etapes</span>
                  </div>
                  <p className="text-[14px] font-semibold text-white mb-4">Recrutement ciblant candidats passifs</p>
                  <div className="space-y-2.5">
                    {[
                      { step: "Jour 1", type: "LinkedIn", content: "Demande de connexion avec note valorisant le profil. Reference une competence ou realisation specifique." },
                      { step: "Jour 3", type: "LinkedIn", content: "Message LinkedIn apres acceptation. Presentation de l\u2019opportunite en 3-4 lignes. Pas de fiche de poste complete." },
                      { step: "Jour 7", type: "Email", content: "Email avec plus de details sur le poste et l\u2019entreprise. Inclure un element differenciateur (culture, tech stack, mission)." },
                      { step: "Jour 12", type: "LinkedIn", content: "Dernier message LinkedIn. Proposition de call informel, sans engagement. Breakup delicat." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3 items-start">
                        <div className="w-[60px] shrink-0">
                          <p className="text-[11px] font-bold text-[#6C5CE7]">{item.step}</p>
                          <p className="text-[9px] text-white/30">{item.type}</p>
                        </div>
                        <p className="text-[11px] text-white/60 leading-[1.65]">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sequence 4 */}
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#6C5CE7]">Sequence 4</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/50">Email + LinkedIn + Phone | 7 etapes</span>
                  </div>
                  <p className="text-[14px] font-semibold text-white mb-4">Enterprise ciblant C-level</p>
                  <div className="space-y-2.5">
                    {[
                      { step: "Jour 1", type: "LinkedIn", content: "Visite de profil. Likez un post recent du prospect s\u2019il en a un pertinent." },
                      { step: "Jour 2", type: "Email", content: "Email initial hyper-personnalise (template 4 ou 5). Reference a l\u2019actualite de l\u2019entreprise. CTA tres doux." },
                      { step: "Jour 4", type: "LinkedIn", content: "Demande de connexion avec note. Mentionner un sujet commun (meme secteur, meme evenement, contact mutuel)." },
                      { step: "Jour 7", type: "Email", content: "Relance avec angle executif. Chiffre d\u2019impact business (ROI, reduction de cout, gain de temps mesurable)." },
                      { step: "Jour 9", type: "Phone", content: "Appel telephonique. Script : reference aux emails envoyes, proposition de valeur en 15 secondes, demande de 5 minutes." },
                      { step: "Jour 12", type: "LinkedIn", content: "Message LinkedIn si connexion acceptee. Angle different des emails. Proposition de call court." },
                      { step: "Jour 17", type: "Email", content: "Breakup email. Professionnel et respectueux. Laisser la porte ouverte." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3 items-start">
                        <div className="w-[60px] shrink-0">
                          <p className="text-[11px] font-bold text-[#6C5CE7]">{item.step}</p>
                          <p className="text-[9px] text-white/30">{item.type}</p>
                        </div>
                        <p className="text-[11px] text-white/60 leading-[1.65]">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sequence 5 */}
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#6C5CE7]">Sequence 5</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/50">Email only | 3 etapes</span>
                  </div>
                  <p className="text-[14px] font-semibold text-white mb-4">Re-engagement d&apos;anciens leads</p>
                  <div className="space-y-2.5">
                    {[
                      { step: "Jour 1", type: "Email", content: "Template 12. Reference a l\u2019echange precedent. Nouveaute produit ou offre depuis la derniere interaction. Question ouverte." },
                      { step: "Jour 5", type: "Email", content: "Cas client recent dans le meme secteur. Resultat chiffre. \"Je me suis dit que ca pourrait vous interesser.\"" },
                      { step: "Jour 10", type: "Email", content: "Breakup leger. \"Si ce n\u2019est plus un sujet, aucun probleme. Sinon, je suis dispo.\"" },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3 items-start">
                        <div className="w-[60px] shrink-0">
                          <p className="text-[11px] font-bold text-[#6C5CE7]">{item.step}</p>
                          <p className="text-[9px] text-white/30">{item.type}</p>
                        </div>
                        <p className="text-[11px] text-white/60 leading-[1.65]">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">A/B testing des sequences</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
                Le A/B testing est obligatoire pour optimiser vos sequences. La regle d&apos;or : testez une seule variable a la fois. Si vous changez le sujet ET le corps de l&apos;email, vous ne saurez pas lequel a impacte les resultats.
              </p>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-4 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] font-semibold text-[#111] mb-3">Ordre de test recommande</p>
                <div className="space-y-2">
                  {[
                    "Sujet de l\u2019email (impact le plus fort sur le taux d\u2019ouverture)",
                    "Icebreaker / premiere ligne (impact fort sur le taux de lecture complete)",
                    "CTA (impact direct sur le taux de reponse)",
                    "Corps de l\u2019email (tester apres avoir optimise les 3 precedents)",
                    "Timing d\u2019envoi (mardi a jeudi, 8h-10h ou 14h-16h sont generalement les meilleurs creneaux)",
                    "Delai entre les etapes (tester 3 jours vs 5 jours entre les follow-ups)",
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-[11px] font-bold text-[#6C5CE7] w-5 shrink-0">{i + 1}.</span>
                      <p className="text-[12px] text-[#777] leading-[1.65]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 8 — Lemlist configuration complete
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch8" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">08</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">Lemlist : configuration complete</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                Lemlist est l&apos;outil d&apos;execution central de la stack outbound. Cette section couvre la configuration de A a Z, de la connexion des boites email a l&apos;integration CRM.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Setup initial</h3>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="space-y-2.5">
                  {[
                    "Creez un compte Lemlist (plan Scale recommande pour l\u2019AI enrichment et les sequences multicanal)",
                    "Invitez les membres de votre equipe et attribuez les roles (Admin, Manager, Sender)",
                    "Configurez les fuseaux horaires et les heures d\u2019envoi par defaut (recommande : 8h-11h et 14h-17h, heure du prospect)",
                    "Activez le mode equipe si plusieurs personnes envoient des campagnes",
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-[11px] font-bold text-[#6C5CE7] w-5 shrink-0">{i + 1}.</span>
                      <p className="text-[12px] text-[#777] leading-[1.65]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Connexion des boites email</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Lemlist supporte Google Workspace et Microsoft 365. Pour chaque boite, la connexion se fait via OAuth (Google) ou via identifiants SMTP/IMAP (Microsoft). Nous recommandons Google Workspace pour la simplicite de configuration et la meilleure delivrabilite initiale.
              </p>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Creez des adresses sur votre domaine de prospection (pas votre domaine principal). Format recommande : prenom@prospection-votreentreprise.com ou prenom@go-votreentreprise.com. Creez 3 a 5 boites par domaine.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Email rotation</h3>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] text-[#777] leading-[1.65] mb-3">
                  La rotation d&apos;emails distribue automatiquement vos envois sur plusieurs boites. Au lieu d&apos;envoyer 200 emails depuis une seule boite, vous en envoyez 40 depuis 5 boites differentes. C&apos;est indispensable pour la delivrabilite.
                </p>
                <p className="text-[12px] font-semibold text-[#111] mb-2">Configuration</p>
                <div className="space-y-2">
                  {[
                    "Dans Settings > Email accounts, connectez vos 3-5 boites email",
                    "Lors de la creation d\u2019une campagne, selectionnez \"Use email rotation\"",
                    "Choisissez les boites a inclure dans la rotation",
                    "Definissez le volume quotidien par boite (30-40 maximum)",
                    "Lemlist alternera automatiquement entre les boites pour chaque nouvel envoi",
                    "Les reponses arrivent sur la boite qui a envoye l\u2019email initial (pas de confusion pour le prospect)",
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-[11px] font-bold text-[#6C5CE7] w-5 shrink-0">{i + 1}.</span>
                      <p className="text-[12px] text-[#777] leading-[1.65]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Lemlist AI Variables</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Les AI Variables sont differentes des AI columns d&apos;enrichissement (chapitre 4). Les AI Variables sont generees automatiquement au moment de l&apos;envoi de chaque email, en fonction du template et du contexte du prospect. C&apos;est une couche de personnalisation supplementaire.
              </p>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] font-semibold text-[#111] mb-3">Comment activer les AI Variables</p>
                <div className="space-y-2">
                  {[
                    "Dans votre sequence, ouvrez l\u2019editeur d\u2019email",
                    "Cliquez sur \"Insert variable\" puis \"AI Variable\"",
                    "Decrivez ce que l\u2019IA doit generer : icebreaker, question personnalisee, reformulation du pain point",
                    "Lemlist genere la variable pour chaque prospect individuellement avant l\u2019envoi",
                    "Previewez les resultats avant de lancer la campagne (verifiez la qualite sur 10-20 prospects)",
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-[11px] font-bold text-[#6C5CE7] w-5 shrink-0">{i + 1}.</span>
                      <p className="text-[12px] text-[#777] leading-[1.65]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Lemlist AI Campaign Generator</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Lemlist propose un generateur de campagne par IA. Vous decrivez votre ICP et votre proposition de valeur, et l&apos;IA genere une sequence complete : sujets, emails, timing, conditions. C&apos;est un bon point de depart, mais nous recommandons toujours d&apos;adapter et d&apos;affiner le contenu genere en utilisant vos propres donnees de performance. Ne lancez jamais une campagne IA-generee sans relecture.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Integration CRM (HubSpot)</h3>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <p className="text-[12px] font-semibold text-[#111] mb-3">Ce qui se synchronise</p>
                <div className="space-y-2">
                  {[
                    "Contacts : les prospects Lemlist sont synchronises comme contacts HubSpot (creation ou mise a jour)",
                    "Activites : chaque email envoye, ouvert, clique ou repondu est enregistre comme activite sur la fiche contact",
                    "Deals : via Make/n8n, creez automatiquement un deal HubSpot quand un prospect repond positivement",
                    "Proprietes custom : synchronisez les colonnes AI-enrichies de Lemlist vers des proprietes HubSpot custom",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" />
                      <p className="text-[12px] text-[#777] leading-[1.65]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
                Pour les workflows avances (creation de deal automatique, routing vers le bon commercial, notification Slack), utilisez Make ou n8n comme couche d&apos;orchestration. Le chapitre 9 detaille ces workflows.
              </p>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 9 — IA et automatisation avancee
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch9" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">09</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">IA et automatisation avancee</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                Ce chapitre est destine aux equipes qui veulent aller plus loin que la configuration standard. Claude Code, Make et les integrations API permettent d&apos;automatiser des taches qui prendraient des heures manuellement.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Claude Code pour l&apos;outbound</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Claude Code est un environnement de developpement assiste par IA. Vous decrivez ce que vous voulez en langage naturel et Claude Code ecrit, execute et itere le code pour vous. Voici les trois scripts les plus utiles pour l&apos;outbound.
              </p>

              <div className="space-y-4 mb-6">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-2">Script 1</p>
                  <p className="text-[14px] font-semibold text-white mb-4">Nettoyage et deduplication de listes de prospects</p>
                  <div className="rounded-xl bg-[#0a0a1a] p-4 mb-3">
                    <pre className="text-[11px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">{`# Demande a Claude Code :
# "Prends ce CSV de 3 000 prospects. Nettoie les noms
# (majuscules correctes), deduplique par email ET par
# combo nom+entreprise, supprime les emails invalides,
# standardise les noms d'entreprise, et exporte un CSV
# propre avec un rapport de ce qui a ete supprime."

import pandas as pd
import re

df = pd.read_csv("prospects_raw.csv")
initial_count = len(df)

# Nettoyage des noms
df["firstName"] = df["firstName"].str.strip().str.title()
df["lastName"] = df["lastName"].str.strip().str.title()

# Validation email
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
df = df[df["email"].apply(lambda x: bool(re.match(email_pattern, str(x))))]

# Deduplication par email
df = df.drop_duplicates(subset=["email"], keep="first")

# Deduplication par nom + entreprise
df = df.drop_duplicates(
    subset=["firstName", "lastName", "companyName"],
    keep="first"
)

# Suppression des domaines generiques
generic = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"]
df = df[~df["email"].str.split("@").str[1].isin(generic)]

final_count = len(df)
print(f"Prospects : {initial_count} -> {final_count}")
print(f"Supprimes : {initial_count - final_count}")

df.to_csv("prospects_clean.csv", index=False)`}</pre>
                  </div>
                  <p className="text-[11px] text-white/40">Temps de creation avec Claude Code : 2-3 minutes. Temps d&apos;execution : quelques secondes meme pour 10 000 lignes.</p>
                </div>

                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-2">Script 2</p>
                  <p className="text-[14px] font-semibold text-white mb-4">Generation d&apos;emails personnalises en batch</p>
                  <div className="rounded-xl bg-[#0a0a1a] p-4 mb-3">
                    <pre className="text-[11px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">{`# Demande a Claude Code :
# "Pour chaque prospect du CSV, genere un email
# personnalise en utilisant le template suivant et
# l'API Claude. Genere aussi un sujet et un icebreaker.
# Exporte dans un CSV pret a importer dans Lemlist."

import csv, anthropic, time

client = anthropic.Anthropic()

TEMPLATE = """Tu es un expert en cold email B2B.
Prospect : {firstName} {lastName}, {jobTitle} chez {companyName}
Secteur : {industry} | Description : {companyDescription}

Genere un JSON avec :
- "subject": sujet de 3-5 mots, minuscules
- "icebreaker": 1 phrase max 20 mots, specifique
- "body": email complet de 50-80 mots avec icebreaker +
  proposition de valeur + question ouverte
- "cta": question de qualification en 1 phrase

Notre produit : [VOTRE DESCRIPTION]
Ton : professionnel, direct, pas de flatterie."""

with open("prospects_clean.csv") as f:
    prospects = list(csv.DictReader(f))

results = []
for i, p in enumerate(prospects):
    prompt = TEMPLATE.format(**p)
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=300,
        messages=[{"role": "user", "content": prompt}]
    )
    # Parse JSON response et ajouter au prospect
    import json
    data = json.loads(response.content[0].text)
    p.update(data)
    results.append(p)

    if i % 10 == 0:
        print(f"Traite : {i+1}/{len(prospects)}")
    time.sleep(0.5)  # Rate limiting

# Export
keys = results[0].keys()
with open("prospects_with_emails.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=keys)
    writer.writeheader()
    writer.writerows(results)`}</pre>
                  </div>
                  <p className="text-[11px] text-white/40">Cout : environ 0,02 EUR par prospect avec Claude Sonnet. 500 prospects = 10 EUR.</p>
                </div>

                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-2">Script 3</p>
                  <p className="text-[14px] font-semibold text-white mb-4">Analyse des patterns de reponses</p>
                  <div className="rounded-xl bg-[#0a0a1a] p-4 mb-3">
                    <pre className="text-[11px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">{`# Demande a Claude Code :
# "Analyse les reponses exportees de Lemlist. Classifie
# chaque reponse (positif, negatif, question, OOO,
# desabonnement). Identifie les patterns qui generent
# des reponses positives."

import csv, anthropic

client = anthropic.Anthropic()

with open("replies_export.csv") as f:
    replies = list(csv.DictReader(f))

CLASSIFY_PROMPT = """Classifie cette reponse a un cold email :
"{reply_text}"

Categorie (1 seul choix) :
- positive (interet, demande d'info, accepte un call)
- negative (pas interesse, mauvais timing)
- question (demande de precision avant de decider)
- ooo (out of office / absence)
- unsubscribe (demande de ne plus contacter)
- referral (redirige vers un collegue)

Reponds uniquement avec la categorie."""

for r in replies:
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=20,
        messages=[{"role": "user",
                   "content": CLASSIFY_PROMPT.format(
                       reply_text=r["reply_body"])}]
    )
    r["category"] = response.content[0].text.strip()

# Analyse des patterns
import collections
cats = collections.Counter(r["category"] for r in replies)
print("\\nDistribution des reponses :")
for cat, count in cats.most_common():
    pct = count / len(replies) * 100
    print(f"  {cat}: {count} ({pct:.1f}%)")`}</pre>
                  </div>
                  <p className="text-[11px] text-white/40">Permet d&apos;identifier quels templates, sujets et icebreakers generent le plus de reponses positives.</p>
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Workflows Make / n8n</h3>

              <div className="space-y-3 mb-6">
                {[
                  { name: "Nouvelle reponse Lemlist vers deal HubSpot", steps: "Trigger : webhook Lemlist \"reply received\" | Filtre : categorie = positive (utiliser le script de classification) | Action : creer un deal HubSpot dans le pipeline Outbound, stade \"Reponse positive\" | Action : notifier le commercial sur Slack avec le contenu de la reponse | Action : mettre a jour la propriete \"source\" du contact HubSpot avec \"Outbound - Lemlist\"" },
                  { name: "Nouvelle connexion LinkedIn vers campagne Lemlist", steps: "Trigger : webhook depuis Phantombuster ou TexAu (scrape des nouvelles connexions) | Filtre : le profil correspond a l\u2019ICP (verification de l\u2019intitule de poste) | Action : ajouter le contact a une campagne Lemlist dediee aux connexions LinkedIn | Action : attendre 48h avant de lancer la sequence (ne pas spammer immediatement apres la connexion)" },
                  { name: "Rapport hebdomadaire automatise", steps: "Trigger : chaque lundi a 9h | Action : appeler l\u2019API Lemlist pour recuperer les stats des 7 derniers jours | Action : formater les KPIs (emails envoyes, ouvertures, reponses, meetings) | Action : envoyer un resume sur Slack ou par email a l\u2019equipe | Action : comparer avec la semaine precedente (tendances)" },
                ].map((workflow) => (
                  <div key={workflow.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">{workflow.name}</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">{workflow.steps}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">AI Scoring des prospects</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Utilisez Claude pour scorer automatiquement la qualite des reponses recues. Un prospect qui pose une question technique est plus qualifie qu&apos;un prospect qui demande juste un prix. Le scoring permet de prioriser les follow-ups et d&apos;allouer le temps commercial la ou il a le plus d&apos;impact.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Automatisation des comptes-rendus d&apos;appels</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
                Le workflow Claap (ou tout outil de transcription) vers Claude vers HubSpot automatise la prise de notes. La transcription est envoyee a Claude qui extrait les points cles : pain points confirmes, budget mentionne, timeline, prochaines etapes, objections. Le resume structure est automatiquement pousse dans la note du contact HubSpot via Make.
              </p>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CHAPTER 10 — Mesurer, iterer et scaler
               ═══════════════════════════════════════════════════════════════ */}
            <section id="ch10" className="mb-20 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">10</div>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em]">Mesurer, iterer et scaler</h2>
              </div>

              <p className="text-[15px] text-[#555] leading-[1.8] mb-6">
                Sans mesure, pas d&apos;amelioration. Ce chapitre couvre les KPIs essentiels, les benchmarks 2026 et la methode pour scaler progressivement votre outbound sans perdre en qualite.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Les 8 KPIs outbound</h3>

              <div className="rounded-2xl border border-[#E8E8E8] bg-white overflow-hidden mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px]">
                    <thead>
                      <tr className="bg-[#F8F8FA]">
                        <th className="text-left p-3 font-semibold text-[#111]">KPI</th>
                        <th className="text-left p-3 font-semibold text-[#111]">Definition</th>
                        <th className="text-left p-3 font-semibold text-[#22C55E]">Benchmark 2026</th>
                        <th className="text-left p-3 font-semibold text-[#EF4444]">Signal d&apos;alerte</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#777]">
                      {[
                        { kpi: "Delivrabilite", def: "% d\u2019emails arrives en inbox (pas spam)", bench: "> 95%", alert: "< 90%" },
                        { kpi: "Taux d\u2019ouverture", def: "% d\u2019emails ouverts", bench: "55-75%", alert: "< 40%" },
                        { kpi: "Taux de reponse", def: "% de prospects qui repondent", bench: "5-15%", alert: "< 3%" },
                        { kpi: "Taux de reponse positive", def: "% de reponses exprimant un interet", bench: "2-8%", alert: "< 1%" },
                        { kpi: "Taux de meeting", def: "% de prospects qui acceptent un RDV", bench: "1-5%", alert: "< 0,5%" },
                        { kpi: "Taux de deal", def: "% de meetings qui deviennent des deals", bench: "15-30%", alert: "< 10%" },
                        { kpi: "CAC outbound", def: "Cout total / nombre de clients signes", bench: "Variable par secteur", alert: "> 3x la valeur du deal" },
                        { kpi: "Time to first meeting", def: "Delai entre le premier email et le premier RDV", bench: "5-15 jours", alert: "> 25 jours" },
                      ].map((row) => (
                        <tr key={row.kpi} className="border-t border-[#F0F0F0]">
                          <td className="p-3 font-medium text-[#111]">{row.kpi}</td>
                          <td className="p-3">{row.def}</td>
                          <td className="p-3 text-[#22C55E]">{row.bench}</td>
                          <td className="p-3 text-[#EF4444]">{row.alert}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Comment A/B tester correctement</h3>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 mb-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="space-y-3">
                  {[
                    { rule: "Une seule variable a la fois", detail: "Si vous changez le sujet ET le corps de l\u2019email, vous ne savez pas lequel a impacte le resultat. Testez le sujet d\u2019abord, puis le corps, puis le CTA." },
                    { rule: "Echantillon minimum de 100 par variante", detail: "En dessous de 100 envois par variante, les resultats ne sont pas statistiquement significatifs. Attendez d\u2019avoir assez de donnees avant de conclure." },
                    { rule: "Laissez tourner 7-10 jours", detail: "Les reponses aux cold emails peuvent arriver jusqu\u2019a 10 jours apres l\u2019envoi. Ne concluez pas apres 2 jours." },
                    { rule: "Mesurez le bon KPI", detail: "Le taux d\u2019ouverture mesure la qualite du sujet. Le taux de reponse mesure la qualite du corps. Ne jugez pas un sujet par le taux de reponse." },
                    { rule: "Documentez chaque test", detail: "Creez un Google Sheet avec : date, variable testee, variante A, variante B, resultats, conclusion, action prise." },
                  ].map((item) => (
                    <div key={item.rule} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" />
                      <div>
                        <p className="text-[13px] font-semibold text-[#111] mb-0.5">{item.rule}</p>
                        <p className="text-[12px] text-[#777] leading-[1.65]">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Scaler de 1 a 15 boites email</h3>

              <div className="rounded-2xl bg-[#111] p-5 md:p-8 mb-6">
                <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-4">Plan de scaling progressif</p>
                <div className="space-y-4">
                  {[
                    { phase: "Phase 1 : validation (mois 1-2)", detail: "1-3 boites, 1 domaine de prospection, 50-100 emails par jour. Objectif : valider le message, les templates et l\u2019ICP. Ne scalez PAS avant d\u2019avoir un taux de reponse > 5%.", volume: "50-100/jour" },
                    { phase: "Phase 2 : optimisation (mois 2-3)", detail: "3-5 boites, 1-2 domaines, 120-200 emails par jour. A/B testez sujets, icebreakers, CTA. Optimisez la delivrabilite. Automatisez le workflow Lemlist-HubSpot.", volume: "120-200/jour" },
                    { phase: "Phase 3 : scaling (mois 3-6)", detail: "5-10 boites, 2-3 domaines, 200-400 emails par jour. Ajoutez des segments ICP. Diversifiez les sequences. Commencez le multicanal LinkedIn.", volume: "200-400/jour" },
                    { phase: "Phase 4 : industrialisation (mois 6+)", detail: "10-15 boites, 3-4 domaines, 400-600 emails par jour. SDR dedie ou equipe. Reporting automatise. Enrichissement Clay systematique. Integration complete avec le CRM.", volume: "400-600/jour" },
                  ].map((item) => (
                    <div key={item.phase}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[12px] font-semibold text-white">{item.phase}</p>
                        <span className="text-[10px] text-[#6C5CE7] font-mono">{item.volume}</span>
                      </div>
                      <p className="text-[11px] text-white/50 leading-[1.65]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">SDR ou DIY : quand recruter</h3>
              <p className="text-[15px] text-[#555] leading-[1.8] mb-5">
                Recrutez un SDR quand : votre processus est documente et reproductible, vous avez des benchmarks clairs (taux de reponse, templates qui fonctionnent), votre volume depasse ce qu&apos;un fondateur peut gerer (generalement 200+ emails par jour), et votre CAC outbound est inferieur au seuil de rentabilite. Continuez en DIY si vous etes en phase de validation, si votre ACV est eleve (peu de prospects, approche tres personnalisee), ou si vos outils d&apos;automatisation gerent la majorite du travail operationnel.
              </p>

              <h3 className="text-[18px] font-semibold text-[#111] mb-4">Budget planning</h3>
              <div className="rounded-2xl border border-[#E8E8E8] bg-white overflow-hidden mb-4 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px]">
                    <thead>
                      <tr className="bg-[#F8F8FA]">
                        <th className="text-left p-3 font-semibold text-[#111]">Poste</th>
                        <th className="text-left p-3 font-semibold text-[#111]">Solo / Startup</th>
                        <th className="text-left p-3 font-semibold text-[#111]">Equipe (2-3 pers.)</th>
                        <th className="text-left p-3 font-semibold text-[#111]">Scale (5+ pers.)</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#777]">
                      {[
                        { poste: "Lemlist", solo: "99 EUR/mois (Scale)", team: "99 EUR x 2-3 = 198-297 EUR", scale: "99 EUR x 5+ = 495 EUR+" },
                        { poste: "Clay", solo: "0-149 EUR/mois", team: "149-349 EUR/mois", scale: "349-699 EUR/mois" },
                        { poste: "Claude Pro", solo: "20 EUR/mois", team: "20 EUR x 2-3", scale: "API a l\u2019usage" },
                        { poste: "Sales Navigator", solo: "80 EUR/mois", team: "80 EUR x 2-3", scale: "Team plan" },
                        { poste: "Google Workspace", solo: "6 EUR x 3-5 boites", team: "6 EUR x 10 boites", scale: "6 EUR x 15+ boites" },
                        { poste: "Make", solo: "9-29 EUR/mois", team: "29-59 EUR/mois", scale: "59-99 EUR/mois" },
                        { poste: "Total estimatif", solo: "250-400 EUR/mois", team: "600-1 000 EUR/mois", scale: "1 500-3 000 EUR/mois" },
                      ].map((row) => (
                        <tr key={row.poste} className={`border-t border-[#F0F0F0] ${row.poste === "Total estimatif" ? "font-semibold bg-[#F8F8FA]" : ""}`}>
                          <td className="p-3 text-[#111]">{row.poste}</td>
                          <td className="p-3">{row.solo}</td>
                          <td className="p-3">{row.team}</td>
                          <td className="p-3">{row.scale}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-[13px] text-[#999] leading-[1.7]">
                Comparez ce budget au cout d&apos;un SDR (40-55K EUR brut annuel en France, soit 3 300-4 500 EUR par mois charges comprises). Les outils permettent a 1 personne de faire le travail de 2-3 SDR sur la partie prospection.
              </p>
            </section>

            <Connector />

            {/* ═══════════════════════════════════════════════════════════════
                CTA Final
               ═══════════════════════════════════════════════════════════════ */}
            <section className="mb-10">
              <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">
                  Pret a lancer votre outbound ?
                </h2>
                <p className="text-[14px] text-white/50 mb-6 max-w-[480px] mx-auto leading-[1.7]">
                  Telechargez le guide en PDF pour l&apos;avoir toujours sous la main ou reservez un appel pour etre accompagne dans la mise en place.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link href="/guide-outbound-b2b" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6C5CE7] text-white text-[13px] font-medium hover:bg-[#5B4BD6] transition-colors">
                    Telecharger le guide PDF
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-[13px] font-medium hover:bg-white/5 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                    Reserver un appel
                  </Link>
                </div>
              </div>
            </section>

            {/* Related links */}
            <section>
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Articles lies</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Guide Outbound B2B (landing page)", href: "/guide-outbound-b2b", desc: "Telechargez le guide complet en PDF avec les templates et les workflows." },
                  { title: "Contactez-nous", href: "/contact", desc: "Besoin d\u2019aide pour mettre en place votre outbound ? On en discute." },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-xl border border-[#E8E8E8] bg-white p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-[#DDD] transition-colors block">
                    <p className="text-[12px] font-semibold text-[#111] mb-1">{link.title}</p>
                    <p className="text-[11px] text-[#999] leading-[1.5]">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
