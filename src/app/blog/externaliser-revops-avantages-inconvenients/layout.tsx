import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Externaliser ses RevOps : avantages et inconvenients | Ceres",
  description:
    "Interne vs externe vs hybride. Les 5 avantages et les 3 inconvenients de l'externalisation RevOps. A quel stade externaliser et comment choisir.",
  keywords: [
    "externaliser RevOps",
    "RevOps externalise",
    "consultant RevOps",
    "RevOps as a service",
    "externalisation",
  ],
  openGraph: {
    title: "Externaliser ses RevOps : avantages et inconvenients | Ceres",
    description:
      "Interne vs externe vs hybride. Les 5 avantages et les 3 inconvenients de l'externalisation RevOps. A quel stade externaliser et comment choisir.",
    url: "https://ceres.agency/blog/externaliser-revops-avantages-inconvenients",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/externaliser-revops-avantages-inconvenients",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
