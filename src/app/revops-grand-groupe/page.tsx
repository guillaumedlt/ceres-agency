"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ---------- data ---------- */

const enjeux = [
  { title: "Multi-instances CRM", desc: "Salesforce dans une BU, Dynamics dans une autre, HubSpot en test quelque part. Aucune vision unifiee.", color: "#FF7A59" },
  { title: "Multi-pays, multi-reglementations", desc: "RGPD en Europe, regles locales ailleurs. Chaque filiale a ses propres contraintes de data residency.", color: "#4B5EFC" },
  { title: "Legacy Dynamics / Salesforce", desc: "Des annees de customisation, des milliers de workflows. La migration semble impossible.", color: "#6D00CC" },
  { title: "Change management a grande echelle", desc: "Former 500+ utilisateurs, gerer les resistances, assurer l&apos;adoption sans bloquer le business.", color: "#22C55E" },
  { title: "Integrations ERP et SI complexes", desc: "SAP, Oracle, systemes internes. Chaque integration est un projet dans le projet.", color: "#6C5CE7" },
  { title: "Compliance et securite", desc: "SSO, permissions granulaires, audit trails, SOC 2. La DSI a des exigences non negociables.", color: "#D4A27F" },
];

const apports = [
  { title: "Migrations complexes", desc: "On migre Dynamics et Salesforce vers HubSpot Enterprise avec zero perte de donnees. Historique, workflows, automatisations : tout est reconstruit.", color: "#FF7A59" },
  { title: "Unification multi-instances", desc: "On consolide 3, 5 ou 10 instances CRM en une architecture HubSpot unifiee avec des vues par BU et par pays.", color: "#4B5EFC" },
  { title: "Architecture Enterprise multi-region", desc: "Business units HubSpot, partitionnement des donnees, permissions par equipe et par geographie. Conforme aux exigences groupe.", color: "#6D00CC" },
  { title: "Integrations sur-mesure", desc: "Connecteurs custom SAP, Oracle, ERP maison. Sync bi-directionnelle, middleware, API privees. On s&apos;adapte a votre SI.", color: "#22C55E" },
];

const approche = [
  { num: "01", title: "Audit approfondi — 4 semaines", desc: "Cartographie complete de vos instances, donnees, workflows et integrations. Identification des risques et des quick wins." },
  { num: "02", title: "POC sur un perimetre cible", desc: "On deploie HubSpot Enterprise sur une BU pilote. Validation de l&apos;architecture, des integrations et de l&apos;adoption avant le rollout." },
  { num: "03", title: "Migration progressive, zero downtime", desc: "Migration par vagues. Double-run systematique. Aucune interruption de service. Chaque lot est valide avant le suivant." },
  { num: "04", title: "Formation par vagues", desc: "Sessions adaptees par role et par BU. Ambassadeurs internes formes. Documentation sur-mesure pour chaque equipe." },
  { num: "05", title: "Support post-migration — 3 mois", desc: "Equipe dediee pour le support, les ajustements et l&apos;optimisation. On ne vous lache pas apres le go-live." },
];

const casClients = [
  {
    name: "TotalEnergies",
    badge: "Migration & Unification",
    color: "#FF7A59",
    context: "Plusieurs instances Dynamics reparties sur differentes BU en Europe. Donnees fragmentees, aucun reporting consolide, adoption heterogene.",
    mission: "Migration complete Dynamics vers HubSpot Enterprise. Unification de 4 instances en une architecture multi-BU. Reconstruction des workflows critiques. Formation de 200+ utilisateurs.",
    results: ["Donnees unifiees en une seule source de verite", "Reporting cross-BU operationnel en 6 semaines", "Adoption a 94% des les 2 premiers mois"],
  },
  {
    name: "Edenred",
    badge: "Connexion HubSpot-Salesforce",
    color: "#4B5EFC",
    context: "Salesforce utilise par les equipes Sales monde, HubSpot deploye par le Marketing Europe. Aucune synchronisation. Les leads se perdent entre les deux systemes.",
    mission: "Connexion bi-directionnelle HubSpot-Salesforce. Mapping des objets custom. Deduplication cross-CRM. Reporting unifie pour les deux equipes.",
    results: ["100% des MQL synchronises en temps reel", "Temps de traitement des leads divise par 3", "Pipeline unifie visible par Sales et Marketing"],
  },
];

const securite = [
  { title: "RGPD & data residency EU", desc: "Donnees hebergees en Union Europeenne. Bases legales documentees. DPO-ready.", color: "#4B5EFC" },
  { title: "SOC 2 Type II", desc: "HubSpot Enterprise est certifie SOC 2. Audit trails complets sur chaque action utilisateur.", color: "#FF7A59" },
  { title: "SSO & authentification", desc: "Integration SAML SSO avec votre identity provider (Azure AD, Okta, OneLogin). MFA obligatoire.", color: "#6D00CC" },
  { title: "Permissions granulaires", desc: "Acces par equipe, par BU, par pays. Chaque utilisateur ne voit que ce qu&apos;il doit voir.", color: "#22C55E" },
];

const faqItems = [
  { q: "Quelle est la duree typique d&apos;un projet grand groupe ?", a: "Entre 3 et 9 mois selon le perimetre. Un audit de 4 semaines permet de cadrer precisement le planning. Les projets multi-BU et multi-pays sont en general sur 6 a 9 mois avec un deploiement par vagues." },
  { q: "Quels sont les risques d&apos;une migration CRM a grande echelle ?", a: "Perte de donnees, rupture de service, rejet utilisateurs. On les adresse par le double-run systematique, la migration progressive et le change management structure. Chaque lot est valide avant de passer au suivant." },
  { q: "Peut-on garder Salesforce en partie ?", a: "Oui. Beaucoup de grands groupes conservent Salesforce pour certaines BU et deploient HubSpot pour d&apos;autres. On configure la sync bi-directionnelle pour un reporting unifie." },
  { q: "Quel budget prevoir pour un projet de cette envergure ?", a: "Les projets grands groupes demarrent a partir de 50K euros pour un perimetre cible (1 BU, migration simple) et peuvent atteindre 200K+ pour une transformation multi-BU complete avec integrations ERP. L&apos;audit initial permet de cadrer le budget exact." },
  { q: "Avez-vous des references dans notre secteur ?", a: "Nous avons accompagne TotalEnergies, Edenred et d&apos;autres grands groupes dans l&apos;energie, les services financiers et la tech. Nous partageons des references detaillees lors de l&apos;appel de cadrage." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RevOps pour Grands Groupes",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Migration CRM enterprise, unification multi-instances et RevOps pour grands groupes de 1000+ personnes. Dynamics, Salesforce vers HubSpot Enterprise.",
      serviceType: "Enterprise CRM Migration & RevOps Consulting",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ---------- page ---------- */

export default function RevOpsGrandGroupePage() {
  return (
    <div className="relative pt-[100px] pb-16 overflow-x-hidden">
      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "12%", width: 340, height: 340, borderRadius: "50%", background: "#4B5EFC", opacity: 0.16, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.16, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "40%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "55%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "70%", width: 320, height: 320, borderRadius: "50%", background: "#6C5CE7", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "85%", width: 300, height: 300, borderRadius: "50%", background: "#D4A27F", opacity: 0.14, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/revops" className="hover:text-[#111] transition-colors">RevOps</Link>
          <span>/</span>
          <span className="text-[#666]">Grands Groupes</span>
        </nav>

        {/* ───── Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Enterprise</Badge></div>
          <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            RevOps pour Grands Groupes : unifiez, migrez, transformez
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-8">
            Migrations CRM complexes, unification multi-instances, architecture Enterprise. Pour les organisations de 1 000+ personnes qui ne peuvent pas se permettre l&apos;a-peu-pres.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { value: "TotalEnergies", label: "Migration Dynamics reussie" },
              { value: "Edenred", label: "Connexion HubSpot-Salesforce" },
              { value: "200+", label: "Utilisateurs formes" },
              { value: "0", label: "Downtime lors des migrations" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[22px] font-bold text-[#111] tracking-[-0.02em]">{s.value}</div>
                <p className="text-[11px] text-[#999] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
            Discuter de votre projet
          </Link>
        </section>
        <Connector />

        {/* ───── Enjeux specifiques ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>Les enjeux</Badge></div>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Les defis specifiques des grands groupes</h2>
              <p className="text-[14px] text-[#999] mt-2">A cette echelle, chaque decision CRM a des consequences sur des centaines de personnes et des millions de donnees.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {enjeux.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[13px] font-semibold text-[#111]">{item.title}</h3>
                  </div>
                  <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── Ce que Ceres apporte ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Notre valeur ajoutee</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Ce que Ceres apporte aux grands groupes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {apports.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{item.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── Approche grands comptes ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Notre methode</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Une approche structuree pour les grands comptes</h2>
              <p className="text-[13px] text-white/40">5 etapes. Zero improvisation. Zero downtime.</p>
            </div>
            <div className="space-y-3">
              {approche.map((step) => (
                <div key={step.num} className="rounded-xl bg-white/5 border border-white/10 p-5 flex gap-5">
                  <span className="text-[24px] font-bold text-[#4B5EFC] shrink-0">{step.num}</span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-[12px] text-white/40 leading-[1.6]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── Cas clients grands groupes ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Ils nous ont fait confiance</h2>
          </div>
          <div className="space-y-4">
            {casClients.map((cas) => (
              <div key={cas.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: cas.color }} />
                  <h3 className="text-[18px] font-semibold text-[#111]">{cas.name}</h3>
                  <span className="ml-auto text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#F5F5F5] text-[#777]">{cas.badge}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <span className="text-[11px] font-semibold text-[#BBB] uppercase tracking-wider">Contexte</span>
                    <p className="text-[12px] text-[#777] leading-[1.65] mt-1.5">{cas.context}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#BBB] uppercase tracking-wider">Mission</span>
                    <p className="text-[12px] text-[#777] leading-[1.65] mt-1.5">{cas.mission}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#BBB] uppercase tracking-wider">Resultats</span>
                    <div className="mt-1.5 space-y-1.5">
                      {cas.results.map((r) => (
                        <div key={r} className="flex items-start gap-2">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <span className="text-[12px] text-[#555] leading-[1.5]">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── Securite et conformite ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>Securite</Badge></div>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Securite et conformite enterprise-grade</h2>
              <p className="text-[14px] text-[#999] mt-2">Les exigences de votre DSI et de votre DPO sont nos pre-requis, pas des options.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securite.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[13px] font-semibold text-[#111]">{item.title}</h3>
                  </div>
                  <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes — grands groupes</h2>
            </div>
            <div className="space-y-0">
              {faqItems.map((f, i) => (
                <div key={i} className="border-b border-[#F2F2F2] py-4 last:border-b-0">
                  <h3 className="text-[13px] font-semibold text-[#111] mb-1.5">{f.q}</h3>
                  <p className="text-[12px] text-[#777] leading-[1.6]">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── CTA ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Votre transformation CRM commence ici
            </h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">
              45 minutes pour cartographier vos enjeux, evaluer la faisabilite et definir les premieres etapes. Sans engagement.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Planifier un appel de cadrage
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
