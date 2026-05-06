import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbound marketing B2B et RevOps : aligner contenu et revenue",
  description:
    "Guide inbound marketing B2B 2026 : les 4 etapes du funnel, attribution, scoring, SLA, content strategy, outils HubSpot et ROI inbound.",
  openGraph: {
    title: "Inbound marketing B2B et RevOps : aligner contenu et revenue",
    description:
      "Guide inbound marketing B2B 2026 : les 4 etapes du funnel, attribution, scoring, SLA, content strategy, outils HubSpot et ROI inbound.",
    url: "https://ceres.agency/blog/inbound-marketing-b2b-revops",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/inbound-marketing-b2b-revops",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
