import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude pour le B2B : IA RevOps, Marketing & Sales | Ceres",
  description:
    "Decouvrez comment Claude et Claude Code transforment vos operations B2B. 50+ cas d'usage concrets en RevOps, marketing, sales, service, developpement et data.",
  keywords: [
    "claude ia business",
    "claude b2b",
    "claude revops",
    "claude marketing",
    "claude sales",
    "anthropic business",
    "ia commerciale",
    "claude hubspot",
    "claude code",
    "claude code business",
    "mcp hubspot",
    "ia revops",
    "claude code logiciel",
    "migration donnees ia",
    "automatisation claude",
  ],
  alternates: {
    canonical: "https://ceres.agency/claude-business",
  },
  openGraph: {
    title: "Claude pour le B2B : IA RevOps, Marketing & Sales | Ceres",
    description:
      "Decouvrez comment Claude et Claude Code transforment vos operations B2B. 50+ cas d'usage concrets en RevOps, marketing, sales et data.",
    url: "https://ceres.agency/claude-business",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
