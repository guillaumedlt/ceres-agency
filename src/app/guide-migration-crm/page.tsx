"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Guide Migration CRM : changer de CRM sans tout casser",
  description: "50 pages pour reussir votre migration CRM. Comparatif 7 CRM, methodologie pas a pas, checklists, template mapping, cas clients.",
  author: { "@type": "Organization", name: "Ceres" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  numberOfPages: 50,
  inLanguage: "fr",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
};

const chapters = [
  { num: "01", title: "Quand faut-il changer de CRM", desc: "Les signaux d\u2019alerte. Les couts caches d\u2019un CRM inadapte. Comment evaluer objectivement si une migration est necessaire.", pages: "p. 4-8" },
  { num: "02", title: "Comparatif CRM 2026 : HubSpot vs Salesforce vs Attio vs Folk vs Pipedrive vs Odoo vs Notion", desc: "Grille de comparaison sur 12 criteres. Forces, faiblesses, pricing, cas d\u2019usage ideal pour chaque CRM.", pages: "p. 9-15" },
  { num: "03", title: "Comment choisir le bon CRM", desc: "Matrice de decision. Criteres fonctionnels, techniques et budgetaires. Les questions a poser en demo.", pages: "p. 16-19" },
  { num: "04", title: "Preparer sa migration : audit de l\u2019existant", desc: "Cartographier vos objets, champs, pipelines, automations et integrations. Template d\u2019audit inclus.", pages: "p. 20-24" },
  { num: "05", title: "Nettoyage et enrichissement pre-migration", desc: "Dedoublonner, normaliser, supprimer les donnees mortes. Enrichir avant de migrer pour repartir sur une base saine.", pages: "p. 25-28" },
  { num: "06", title: "Mapping des champs et structure", desc: "Comment mapper chaque champ de l\u2019ancien CRM vers le nouveau. Gestion des champs personnalises, des picklists et des associations.", pages: "p. 29-33" },
  { num: "07", title: "Migration technique pas a pas", desc: "Import CSV, API, outils de migration (Trujay, Import2). Migration des contacts, deals, notes, emails, activites. Ordre et methode.", pages: "p. 34-39" },
  { num: "08", title: "Tests, validation et rollback", desc: "Plan de tests. Verification des donnees post-import. Strategie de rollback si quelque chose ne va pas.", pages: "p. 40-43" },
  { num: "09", title: "Formation et adoption", desc: "Plan de formation par profil (sales, managers, ops). Les erreurs qui tuent l\u2019adoption. KPIs de suivi.", pages: "p. 44-47" },
  { num: "10", title: "Les 30 premiers jours post-migration", desc: "Checklist jour par jour. Quick wins pour rassurer les equipes. Ajustements et optimisations a planifier.", pages: "p. 48-50" },
];

const tools = [
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "Attio", domain: "attio.com" },
  { name: "Folk", domain: "folk.app" },
  { name: "Pipedrive", domain: "pipedrive.com" },
  { name: "Odoo", domain: "odoo.com" },
  { name: "Notion", domain: "notion.so" },
];

export default function GuideMigrationCRMPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({ portalId: "2703445", formId: "461a976f-66db-4946-9e3f-883c83d4a084", region: "na1", target: "#hs-guide-migration-form" });
      return;
    }
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => { if ((window as any).hbspt) (window as any).hbspt.forms.create({ portalId: "2703445", formId: "461a976f-66db-4946-9e3f-883c83d4a084", region: "na1", target: "#hs-guide-migration-form" }); };
    document.head.appendChild(script);
  }, []);

  function scrollToForm() { document.getElementById("telecharger")?.scrollIntoView({ behavior: "smooth" }); }

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        {/* Hero */}
        <section className="text-center mb-16">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
            <Link href="/guides" className="hover:text-[#111] transition-colors">Guides</Link><span>/</span>
            <span className="text-[#666]">Guide Migration CRM</span>
          </nav>
          <div className="mb-4">
            <Badge>Guide gratuit</Badge>
          </div>
          <h1 className="text-[36px] sm:text-[52px] font-semibold text-[#111] leading-[1.08] tracking-[-0.03em] mb-5">
            Guide Migration CRM
          </h1>
          <p className="text-[18px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-6">
            50 pages pour changer de CRM sans tout casser. Comparatif 7 CRM, methodologie pas a pas, checklists et cas clients.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {[
              { value: "50", label: "pages" },
              { value: "10", label: "chapitres" },
              { value: "7", label: "CRM compares" },
              { value: "3", label: "checklists" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[24px] font-bold text-[#111]">{s.value}</div>
                <div className="text-[11px] text-[#999]">{s.label}</div>
              </div>
            ))}
          </div>

          <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4B5EFC] text-white text-[14px] font-medium hover:bg-[#3A4DE0] transition-colors shadow-[0_4px_12px_-4px_rgba(75,94,252,0.4)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 2v8M4 7l4 4 4-4M2 13h12" /></svg>
            Telecharger gratuitement
          </button>
          <p className="text-[11px] text-[#CCC] mt-3">Pas de spam. Juste le guide.</p>
        </section>

        {/* Book mockup + what you'll learn */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-[200px] h-[260px] rounded-xl shadow-[8px_8px_30px_-10px_rgba(0,0,0,0.2)] shrink-0 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #4B5EFC 0%, #3B4BDB 50%, #2A3A9E 100%)" }}>
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div>
                    <div className="w-8 h-0.5 bg-white/40 mb-3" />
                    <p className="text-white/60 text-[9px] font-medium uppercase tracking-wider">Ceres 2026</p>
                  </div>
                  <div>
                    <p className="text-white text-[15px] font-bold leading-[1.2] mb-1">Guide Migration CRM</p>
                    <p className="text-white/60 text-[9px]">50 pages | 10 chapitres</p>
                  </div>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black/10" />
              </div>

              <div className="flex-1">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Ce que vous allez apprendre</p>
                <div className="space-y-2.5">
                  {[
                    "Evaluer objectivement si votre CRM actuel doit etre remplace",
                    "Comparer HubSpot, Salesforce, Attio, Folk, Pipedrive, Odoo et Notion sur 12 criteres",
                    "Auditer votre CRM existant : objets, champs, pipelines, automations",
                    "Nettoyer et enrichir vos donnees avant la migration",
                    "Mapper chaque champ de l\u2019ancien CRM vers le nouveau sans perte",
                    "Migrer contacts, deals, notes et activites pas a pas",
                    "Tester, valider et prevoir un plan de rollback",
                    "Former vos equipes et garantir l\u2019adoption du nouveau CRM",
                  ].map((item) => (
                    <p key={item} className="text-[13px] text-[#555] flex items-start gap-2.5 leading-[1.6]">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#4B5EFC] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools covered */}
        <section className="mb-16">
          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider text-center mb-6">Les CRM compares dans le guide</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {tools.map((t) => (
              <div key={t.name} className="flex items-center gap-2 text-[#999]">
                <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`} alt={t.name} className="w-5 h-5" />
                <span className="text-[13px] font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sommaire */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Badge>Sommaire</Badge>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4 mb-3">10 chapitres pour migrer sereinement</h2>
            <p className="text-[15px] text-[#666] max-w-[480px] mx-auto leading-[1.7]">De l&apos;audit a l&apos;adoption, en passant par le comparatif et la migration technique. La methode qu&apos;on utilise chez Ceres.</p>
          </div>
          <div className="space-y-3">
            {chapters.map((ch) => (
              <div key={ch.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[13px] font-bold shrink-0">{ch.num}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="text-[14px] font-semibold text-[#111]">{ch.title}</h3>
                      <span className="text-[10px] text-[#CCC] shrink-0">{ch.pages}</span>
                    </div>
                    <p className="text-[12px] text-[#777] leading-[1.65]">{ch.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inclus dans le guide */}
        <section className="mb-16">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Inclus dans le guide</span>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-6">Tout ce qui est inclus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "Comparatif 7 CRM sur 12 criteres", desc: "HubSpot, Salesforce, Attio, Folk, Pipedrive, Odoo, Notion. Forces, faiblesses, pricing, cas d\u2019usage.", color: "#4B5EFC" },
                { title: "Template mapping des champs", desc: "Google Sheets pret a l\u2019emploi pour mapper chaque champ de votre ancien CRM vers le nouveau. Copier et adapter.", color: "#22C55E" },
                { title: "Checklist pre-migration", desc: "Tout ce qu\u2019il faut verifier avant de lancer la migration. Donnees, integrations, automations, droits.", color: "#FF7A59" },
                { title: "Checklist post-migration", desc: "Verification des donnees, tests fonctionnels, validation metier. Point par point.", color: "#D4A27F" },
                { title: "Plan de formation", desc: "Programme de formation par profil : sales, managers, ops. Sessions, contenus, exercices pratiques.", color: "#6C5CE7" },
                { title: "Timeline Gantt de migration", desc: "Planning type sur 6-8 semaines. Phases, jalons, responsabilites. Adaptable a votre contexte.", color: "#4B5EFC" },
                { title: "Guide Salesforce vers HubSpot", desc: "Pas a pas specifique pour migrer de Salesforce vers HubSpot. Objets, champs, automations, rapports.", color: "#FF7A59" },
                { title: "Guide Pipedrive vers HubSpot", desc: "Migration Pipedrive vers HubSpot detaillee. Mapping natif, gestion des activites, import des deals.", color: "#22C55E" },
              ].map((t) => (
                <div key={t.title} className="rounded-xl bg-white/5 p-4 flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-sm mt-1.5 shrink-0" style={{ background: t.color }} />
                  <div>
                    <p className="text-[12px] font-semibold text-white mb-0.5">{t.title}</p>
                    <p className="text-[10px] text-white/40 leading-[1.5]">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <Badge>Apercu</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Un extrait du comparatif CRM</h2>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
              <span className="text-[11px] font-semibold text-[#111]">Comparatif CRM 2026</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">Chapitre 2</span>
            </div>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-[11px] border-collapse">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="text-left py-2 pr-3 text-[#999] font-medium">Critere</th>
                    <th className="text-center py-2 px-2 text-[#999] font-medium">HubSpot</th>
                    <th className="text-center py-2 px-2 text-[#999] font-medium">Salesforce</th>
                    <th className="text-center py-2 px-2 text-[#999] font-medium">Pipedrive</th>
                    <th className="text-center py-2 px-2 text-[#999] font-medium">Attio</th>
                  </tr>
                </thead>
                <tbody className="text-[#555]">
                  {[
                    { critere: "Facilite de prise en main", hubspot: "A", salesforce: "C", pipedrive: "A", attio: "A" },
                    { critere: "Personnalisation", hubspot: "B+", salesforce: "A+", pipedrive: "B", attio: "A" },
                    { critere: "Automations natives", hubspot: "A", salesforce: "A", pipedrive: "B", attio: "B+" },
                    { critere: "Reporting", hubspot: "A", salesforce: "A+", pipedrive: "B", attio: "B" },
                    { critere: "Prix (5 users)", hubspot: "$$", salesforce: "$$$", pipedrive: "$", attio: "$" },
                  ].map((row) => (
                    <tr key={row.critere} className="border-b border-[#F5F5F5]">
                      <td className="py-2 pr-3 text-[#111] font-medium">{row.critere}</td>
                      <td className="py-2 px-2 text-center">{row.hubspot}</td>
                      <td className="py-2 px-2 text-center">{row.salesforce}</td>
                      <td className="py-2 px-2 text-center">{row.pipedrive}</td>
                      <td className="py-2 px-2 text-center">{row.attio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-[#999]">
              <span>Comparaison sur <strong className="text-[#111]">12 criteres</strong></span>
              <span><strong className="text-[#111]">7 CRM</strong> evalues</span>
            </div>
            <p className="mt-3 text-[11px] text-[#CCC]">Folk, Odoo et Notion sont aussi evalues dans le guide complet.</p>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <p className="text-[14px] text-[#555] leading-[1.75] mb-4">&ldquo;On a migre 45 000 contacts de Dynamics vers HubSpot en suivant cette methodologie. Zero perte de donnees, adoption a 94% en 3 semaines. Le template de mapping et la checklist nous ont fait gagner un mois de preparation.&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4B5EFC]/10 flex items-center justify-center text-[#4B5EFC] text-[10px] font-bold">L</div>
              <div>
                <p className="text-[12px] font-semibold text-[#111]">Laisa</p>
                <p className="text-[10px] text-[#999]">CRM Manager, TotalEnergies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <Badge>Pour qui</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Ce guide est fait pour vous si</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <p className="text-[12px] font-semibold text-[#22C55E] mb-3">Ideal pour</p>
              {["Vous envisagez de changer de CRM dans les 6 prochains mois", "Vous voulez comparer les CRM du marche objectivement", "Vous avez deja echoue une migration et voulez eviter les memes erreurs", "Vous etes ops, RevOps ou CRM Manager", "Vous gerez des migrations CRM pour vos clients (agence, consulting)", "Vous devez convaincre votre direction de migrer"].map((i) => (
                <p key={i} className="text-[12px] text-[#555] mb-2 flex items-start gap-2"><span className="text-[#22C55E] mt-0.5 shrink-0">+</span>{i}</p>
              ))}
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <p className="text-[12px] font-semibold text-[#999] mb-3">Moins pertinent si</p>
              {["Vous etes satisfait de votre CRM actuel", "Vous n\u2019avez pas encore de CRM (guide first CRM a venir)", "Vous cherchez un guide specifique ERP (Odoo est couvert en tant que CRM uniquement)", "Votre equipe fait moins de 3 personnes (migration souvent inutile)"].map((i) => (
                <p key={i} className="text-[12px] text-[#999] mb-2 flex items-start gap-2"><span className="text-[#CCC] mt-0.5 shrink-0">-</span>{i}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Download form */}
        <section id="telecharger" className="mb-16 scroll-mt-24">
          <div className="rounded-2xl border-2 border-[#4B5EFC]/20 bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(75,94,252,0.15)]">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#4B5EFC]/10 text-[12px] font-medium text-[#4B5EFC] mb-4">Gratuit</span>
                <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Telecharger le Guide Migration CRM</h2>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-5">Remplissez le formulaire pour recevoir le guide complet par email.</p>
                <div className="space-y-2.5 mb-6">
                  {["50 pages de methodologie + cas clients", "Comparatif detaille de 7 CRM sur 12 criteres", "Template mapping des champs pret a l\u2019emploi", "3 checklists : pre-migration, post-migration, adoption", "Timeline Gantt + plan de formation"].map((item) => (
                    <p key={item} className="text-[13px] text-[#555] flex items-center gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#4B5EFC] shrink-0"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </p>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-[11px] text-[#CCC]">
                  <span>Pas de spam</span><span>Desabonnement en 1 clic</span><span>RGPD</span>
                </div>
              </div>
              <div className="lg:w-[380px] shrink-0">
                <div className="rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-5">
                  <p className="text-[12px] font-semibold text-[#111] mb-4">Acceder au guide</p>
                  <div ref={formRef} id="hs-guide-migration-form" className="min-h-[200px]">
                    <div className="flex items-center justify-center h-[200px] text-[#CCC]">
                      <div className="text-center">
                        <svg className="mx-auto mb-2 animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>
                        <p className="text-[11px]">Chargement du formulaire...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <Badge>FAQ</Badge>
          </div>
          <div className="space-y-3">
            {[
              { q: "Le guide est-il vraiment gratuit ?", a: "Oui, 100% gratuit. On vous demande juste votre email professionnel pour vous l\u2019envoyer." },
              { q: "Le guide couvre-t-il ma migration specifique ?", a: "Le guide couvre la methodologie universelle de migration CRM, plus deux guides detailles : Salesforce vers HubSpot et Pipedrive vers HubSpot. Les principes s\u2019appliquent a toute migration." },
              { q: "Combien de temps dure une migration CRM ?", a: "En moyenne 6 a 8 semaines pour une PME (500 a 50 000 contacts). Le guide inclut une timeline Gantt type que vous pouvez adapter a votre contexte." },
              { q: "Faut-il un profil technique pour migrer ?", a: "Non. Le guide est concu pour des profils ops et business. Les etapes techniques (API, import CSV) sont expliquees pas a pas avec des captures d\u2019ecran." },
              { q: "Peut-on etre accompagne par Ceres ?", a: "Oui. Le guide est un excellent point de depart. Si vous voulez aller plus vite, notre offre RevOps Part-Time inclut la migration CRM avec un consultant dedie." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <h3 className="text-[13px] font-semibold text-[#111] mb-2">{faq.q}</h3>
                <p className="text-[12px] text-[#777] leading-[1.65]">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-center">
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a migrer votre CRM ?</h2>
            <p className="text-[14px] text-white/50 mb-6 max-w-[420px] mx-auto leading-[1.7]">Telechargez le guide ou reservez un appel pour un accompagnement sur mesure.</p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4B5EFC] text-white text-[13px] font-medium hover:bg-[#3A4DE0] transition-colors">
                Telecharger le guide
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-[13px] font-medium hover:bg-white/5 transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
