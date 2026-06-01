import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTM motion : choisir entre PLG, Sales-led et Hybrid en 2026 | Ceres",
  description:
    "Comment choisir son GTM motion en 2026 : Product-Led Growth, Sales-led ou Hybrid. Criteres de decision, exemples B2B, impact RevOps.",
  keywords: ["gtm motion", "plg vs sales led", "product led growth", "hybrid gtm", "go to market b2b 2026"],
  alternates: { canonical: "https://ceres.agency/blog/gtm-motion-plg-sales-led-hybrid" },
  openGraph: {
    title: "GTM motion : choisir entre PLG, Sales-led et Hybrid en 2026 | Ceres",
    description: "Comment choisir son GTM motion en 2026 : PLG, Sales-led ou Hybrid. Criteres, exemples, impact RevOps.",
    url: "https://ceres.agency/blog/gtm-motion-plg-sales-led-hybrid",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
