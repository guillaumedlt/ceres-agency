import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO : Generative Engine Optimization, optimiser son site pour les LLMs",
  description:
    "Guide complet du GEO (Generative Engine Optimization) : definition, differences avec le SEO, 10 criteres pour apparaitre dans ChatGPT et Claude, JSON-LD, FAQ schema, E-E-A-T. Methode actionnable.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
