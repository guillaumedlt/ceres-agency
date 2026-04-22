import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  description:
    "Mentions legales du site ceres.agency, edite par Ceres Growth Marketing. Informations legales, editeur et hebergeur du site.",
  alternates: {
    canonical: "https://ceres.agency/mentions-legales",
  },
  openGraph: {
    title: "Mentions legales | Ceres",
    description:
      "Mentions legales du site ceres.agency, edite par Ceres Growth Marketing. Informations legales, editeur et hebergeur du site.",
    url: "https://ceres.agency/mentions-legales",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
