import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description:
    "Politique de confidentialite et de protection des donnees personnelles du site ceres.agency. Collecte, utilisation et droits RGPD.",
  alternates: {
    canonical: "https://ceres.agency/politique-confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialite | Ceres",
    description:
      "Politique de confidentialite et de protection des donnees personnelles du site ceres.agency. Collecte, utilisation et droits RGPD.",
    url: "https://ceres.agency/politique-confidentialite",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
