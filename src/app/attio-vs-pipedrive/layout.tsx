import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attio vs Pipedrive : quel CRM choisir en 2026 ? | Ceres",
  description:
    "Comparatif Attio vs Pipedrive : prix, UX, pipeline, IA, integrations, scalabilite. Le verdict honnete pour startups et scale-ups B2B en 2026.",
  keywords: ["attio vs pipedrive", "pipedrive vs attio", "comparatif attio pipedrive", "attio avis 2026"],
  alternates: { canonical: "https://ceres.agency/attio-vs-pipedrive" },
  openGraph: {
    title: "Attio vs Pipedrive : quel CRM choisir en 2026 ? | Ceres",
    description: "Comparatif Attio vs Pipedrive : prix, UX, pipeline, IA, integrations.",
    url: "https://ceres.agency/attio-vs-pipedrive",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
