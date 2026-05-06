import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO : optimiser son site pour les LLMs en 2026",
  description:
    "GEO (Generative Engine Optimization) : 10 criteres pour apparaitre dans ChatGPT et Claude. JSON-LD, FAQ schema et E-E-A-T.",
  openGraph: {
    title: "GEO : optimiser son site pour les LLMs en 2026",
    description:
      "GEO (Generative Engine Optimization) : 10 criteres pour apparaitre dans ChatGPT et Claude. JSON-LD, FAQ schema et E-E-A-T.",
    url: "https://ceres.agency/blog/geo-optimiser-site-llm",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/geo-optimiser-site-llm",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
