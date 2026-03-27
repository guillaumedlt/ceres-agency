import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clay : enrichissement B2B et automatisation | Ceres",
  description: "On deploie Clay pour enrichir, qualifier et scorer vos prospects automatiquement. Waterfall enrichment, AI columns, integration CRM. 250+ clients.",
  robots: "noindex",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
