import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM et IA : comment l\u2019IA transforme le CRM en 2026",
  description:
    "Comment l\u2019IA transforme le CRM en 2026 : scoring predictif, enrichissement, resume de calls, forecast. Comparatif des solutions.",
  openGraph: {
    title: "CRM et IA : comment l\u2019IA transforme le CRM en 2026",
    description:
      "Comment l\u2019IA transforme le CRM en 2026 : scoring predictif, enrichissement, resume de calls, forecast. Comparatif des solutions.",
    url: "https://ceres.agency/blog/crm-ia-intelligence-artificielle",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/crm-ia-intelligence-artificielle",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
