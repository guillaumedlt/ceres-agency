import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Success Ops : la nouvelle frontiere du RevOps en 2026 | Ceres",
  description:
    "Customer Success Ops emerge comme la 4e sous-fonction RevOps en 2026. Missions, KPIs, stack, recrutement. Pourquoi c'est devenu strategique pour les scale-ups SaaS.",
  keywords: ["customer success ops", "cs ops", "customer success operations", "revops customer success", "nrr operations"],
  alternates: { canonical: "https://ceres.agency/blog/customer-success-ops-nouvelle-frontiere" },
  openGraph: {
    title: "Customer Success Ops : la nouvelle frontiere du RevOps en 2026 | Ceres",
    description: "Customer Success Ops emerge comme la 4e sous-fonction RevOps. Missions, KPIs, stack, recrutement.",
    url: "https://ceres.agency/blog/customer-success-ops-nouvelle-frontiere",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
