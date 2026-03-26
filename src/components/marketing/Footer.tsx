import Link from "next/link";

const cols = {
  Services: [
    { label: "Audit RevOps", href: "/audit-revops" },
    { label: "RevOps Part-Time", href: "/revops-part-time" },
    { label: "Agence HubSpot", href: "/agence-hubspot" },
    { label: "Agents IA", href: "/agents-ia" },
  ],
  Ressources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/guides" },
    { label: "Glossaire", href: "/glossaire" },
    { label: "Cas clients", href: "/cas-clients" },
    { label: "RevOps, c'est quoi ?", href: "/revops" },
  ],
  Solutions: [
    { label: "Startups", href: "/revops-startup" },
    { label: "PME", href: "/revops-pme" },
    { label: "Scale-ups", href: "/revops-scaleup" },
    { label: "Grands Groupes", href: "/revops-grand-groupe" },
  ],
  Agence: [
    { label: "A propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
    { label: "Mentions legales", href: "/mentions-legales" },
    { label: "Confidentialite", href: "/politique-confidentialite" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#F2F2F2]">
      <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4 md:gap-6 mb-12">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-[18px] font-bold tracking-[-0.03em] text-[#111] mb-4 block">
              ceres
            </Link>
            <p className="text-[13px] text-[#999] leading-relaxed mb-4">Agence RevOps &amp; IA<br />pour equipes B2B.</p>
            <div className="space-y-1.5">
              <p className="text-[11px] text-[#CCC]">Ceres Growth Marketing</p>
              <p className="text-[11px] text-[#CCC]">128 rue La Boetie, 75008 Paris</p>
            </div>
          </div>

          {/* Columns */}
          {Object.entries(cols).map(([t, links]) => (
            <div key={t}>
              <h4 className="text-[12px] font-semibold text-[#111] uppercase tracking-wider mb-3">{t}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[13px] text-[#999] hover:text-[#111] transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partenaires */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-[#F2F2F2]">
          <span className="text-[10px] font-semibold text-[#CCC] uppercase tracking-wider">Partenaires</span>
          <div className="flex items-center gap-1.5">
            <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
            <span className="text-[11px] text-[#999]">HubSpot Partner</span>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="https://www.google.com/s2/favicons?domain=lemlist.com&sz=32" alt="Lemlist" className="w-4 h-4" />
            <span className="text-[11px] text-[#999]">Lemlist Partner</span>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="https://www.google.com/s2/favicons?domain=attio.com&sz=32" alt="Attio" className="w-4 h-4" />
            <span className="text-[11px] text-[#999]">Attio Partner</span>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="https://www.google.com/s2/favicons?domain=clay.com&sz=32" alt="Clay" className="w-4 h-4" />
            <span className="text-[11px] text-[#999]">Clay Partner</span>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="https://www.google.com/s2/favicons?domain=claude.ai&sz=32" alt="Claude" className="w-4 h-4" />
            <span className="text-[11px] text-[#999]">Experts Claude &amp; IA</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#CCC]">&copy; {new Date().getFullYear()} Ceres Growth Marketing. Tous droits reserves.</p>
          <a href="https://www.linkedin.com/company/ceres-revops-ops/" target="_blank" rel="noopener noreferrer" className="text-[#CCC] hover:text-[#111] transition-colors" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
