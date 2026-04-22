import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA et Customer Success : detecter le churn a J-45 | Ceres",
  description:
    "Les 7 signaux faibles de churn, le health score IA vs manuel et l'agent de detection en production. Detection de J-10 a J-45 avant le churn.",
  keywords: [
    "detection churn",
    "IA churn",
    "customer success IA",
    "health score IA",
    "prevention churn",
  ],
  openGraph: {
    title: "IA et Customer Success : detecter le churn a J-45 | Ceres",
    description:
      "Les 7 signaux faibles de churn, le health score IA vs manuel et l'agent de detection en production. Detection de J-10 a J-45 avant le churn.",
    url: "https://ceres.agency/blog/ia-customer-success-detection-churn",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-customer-success-detection-churn",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
