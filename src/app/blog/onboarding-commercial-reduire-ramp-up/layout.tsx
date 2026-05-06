import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding commercial : reduire le ramp-up a 3 semaines",
  description:
    "Les 4 piliers de l'onboarding commercial, le playbook de vente et l'IA comme copilote du nouveau commercial. Reduire le ramp-up a 3 semaines.",
  keywords: [
    "onboarding commercial",
    "ramp-up commercial",
    "formation commercial",
    "onboarding sales",
    "time to first deal",
  ],
  openGraph: {
    title: "Onboarding commercial : reduire le ramp-up a 3 semaines",
    description:
      "Les 4 piliers de l'onboarding commercial, le playbook de vente et l'IA comme copilote du nouveau commercial. Reduire le ramp-up a 3 semaines.",
    url: "https://ceres.agency/blog/onboarding-commercial-reduire-ramp-up",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/onboarding-commercial-reduire-ramp-up",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
