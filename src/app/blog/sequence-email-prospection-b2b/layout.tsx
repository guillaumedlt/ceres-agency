import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sequence email B2B : structurer votre prospection | Ceres",
  description:
    "La structure ideale d'une sequence B2B (3-5 emails), l'icebreaker, les follow-ups et le break-up. 3 templates de sequences pretes a utiliser.",
  keywords: [
    "sequence email B2B",
    "cold email sequence",
    "sequence prospection",
    "email B2B template",
    "sequences HubSpot",
  ],
  openGraph: {
    title: "Sequence email B2B : structurer votre prospection | Ceres",
    description:
      "La structure ideale d'une sequence B2B (3-5 emails), l'icebreaker, les follow-ups et le break-up. 3 templates de sequences pretes a utiliser.",
    url: "https://ceres.agency/blog/sequence-email-prospection-b2b",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/sequence-email-prospection-b2b",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
