import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const metiers = [
  {
    slug: "sales-ops-manager",
    title: "Sales Operations Manager",
    desc: "Garant de l'efficacite de l'equipe Sales : pipeline, forecast, CRM, sales enablement, reporting.",
    seniority: "1-8 ans d'experience",
    color: "#FF7A59",
    href: "/metier/sales-ops-manager",
  },
  {
    slug: "crm-manager",
    title: "CRM Manager",
    desc: "Administrateur et architecte de la plateforme CRM. Qualite data, integrations, gouvernance.",
    seniority: "1-8 ans d'experience",
    color: "#4B5EFC",
    href: "/metier/crm-manager",
  },
  {
    slug: "revops-director",
    title: "RevOps Director",
    desc: "Direction strategique de la fonction RevOps. Equipe 5-15 personnes, architecture stack, gouvernance KPIs.",
    seniority: "5+ ans d'experience",
    color: "#6D00CC",
    href: "/metier/revops-director",
  },
  {
    slug: "cro-chief-revenue-officer",
    title: "Chief Revenue Officer (CRO)",
    desc: "Direction strategique de l'ensemble du revenue : Sales + Marketing + CS + RevOps. Membre du comex.",
    seniority: "12+ ans d'experience",
    color: "#22C55E",
    href: "/metier/cro-chief-revenue-officer",
  },
];

const otherMetiers = [
  { title: "RevOps Manager", desc: "Fiche metier complete avec missions et competences.", href: "/blog/revops-manager-fiche-poste-salaire-competences" },
  { title: "Marketing Operations Manager", desc: "Definition et perimetre du metier Marketing Ops.", href: "/blog/marketing-ops-definition" },
  { title: "RevOps vs Sales Ops vs Marketing Ops", desc: "Quelle difference entre ces 3 metiers et comment ils s'articulent.", href: "/blog/revops-vs-sales-ops-marketing-ops" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "CollectionPage", name: "Fiches metier RevOps", description: "Toutes les fiches metier RevOps : Sales Ops, CRM Manager, RevOps Director, CRO. Missions, competences, evolution.", url: "https://ceres.agency/metier", inLanguage: "fr-FR", isPartOf: { "@id": "https://ceres.agency/#website" } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
      { "@type": "ListItem", position: 2, name: "Fiches metier", item: "https://ceres.agency/metier" },
    ] },
    { "@type": "ItemList", itemListElement: metiers.map((m, i) => ({ "@type": "ListItem", position: i + 1, name: m.title, url: `https://ceres.agency${m.href}` })) },
  ],
};

export default function MetierIndexPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "75%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
          <span className="text-[#666]">Fiches metier</span>
        </nav>

        <div className="text-center mb-12">
          <Badge>Fiches metier</Badge>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mt-4 mb-5">
            Les metiers du RevOps en France
          </h1>
          <p className="text-[17px] text-[#666] max-w-[640px] mx-auto leading-[1.7]">
            Missions, competences, evolution de carriere. Le panorama complet des roles Revenue Operations en France en 2026.
          </p>
        </div>

        {/* Main 4 metiers */}
        <section className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {metiers.map((m) => (
              <Link key={m.slug} href={m.href} className="block rounded-2xl border border-[#E8E8E8] bg-white p-6 hover:border-[#DDD] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.10)] transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center text-white font-bold text-[15px]" style={{ background: m.color }}>
                    {m.title.split(" ").map((w) => w[0]).slice(0, 3).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-semibold text-[#111] group-hover:text-[#FF7A59] transition-colors">{m.title}</h3>
                    <p className="text-[11px] text-[#999] mt-0.5">{m.seniority}</p>
                  </div>
                </div>
                <p className="text-[13px] text-[#555] leading-[1.65] mb-3">{m.desc}</p>
                <div className="flex items-center justify-end pt-3 border-t border-[#F2F2F2]">
                  <span className="text-[12px] font-medium text-[#FF7A59] flex items-center gap-1">
                    Lire la fiche
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Other related */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <Badge>Autres ressources</Badge>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Articles lies aux metiers RevOps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherMetiers.map((o) => (
              <Link key={o.href} href={o.href} className="block rounded-xl border border-[#F2F2F2] p-5 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                <h3 className="text-[13px] font-semibold text-[#111] mb-2">{o.title}</h3>
                <p className="text-[12px] text-[#777] leading-[1.6]">{o.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Besoin de structurer votre fonction RevOps ?</h2>
            <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">Recrutement, onboarding, accompagnement RevOps part-time pour les scale-ups B2B. On vous aide a choisir le bon profil et a le faire reussir.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Reserver un echange
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
