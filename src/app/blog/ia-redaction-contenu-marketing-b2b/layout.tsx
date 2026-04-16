import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA et redaction de contenu marketing B2B | Ceres",
  description:
    "Le workflow contenu avec l'IA : brief, generation, edition, publication. Articles, LinkedIn, newsletters.",
  keywords: [
    "IA redaction contenu",
    "IA marketing contenu",
    "redaction IA",
    "contenu marketing IA",
    "ChatGPT marketing",
  ],
  openGraph: {
    title: "IA et redaction de contenu marketing B2B | Ceres",
    description:
      "Le workflow contenu avec l'IA : brief, generation, edition, publication. Articles, LinkedIn, newsletters.",
    url: "https://ceres.agency/blog/ia-redaction-contenu-marketing-b2b",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-redaction-contenu-marketing-b2b",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
