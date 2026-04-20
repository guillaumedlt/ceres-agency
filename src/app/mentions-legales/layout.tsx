import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  description:
    "Mentions legales du site ceres.agency, edite par Ceres Growth Marketing.",
  alternates: {
    canonical: "https://ceres.agency/mentions-legales",
  },
  openGraph: {
    title: "Mentions legales | Ceres",
    description:
      "Mentions legales du site ceres.agency, edite par Ceres Growth Marketing.",
    url: "https://ceres.agency/mentions-legales",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
