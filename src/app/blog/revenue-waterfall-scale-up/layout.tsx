import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le revenue waterfall : modeliser la croissance de votre scale-up | Ceres",
  description:
    "Le revenue waterfall : framework pour modeliser et piloter la croissance ARR d'une scale-up SaaS B2B. Decomposition new / expansion / contraction / churn.",
  keywords: ["revenue waterfall", "modeliser croissance scale up", "arr waterfall", "saas revenue model", "annual planning revops"],
  alternates: { canonical: "https://ceres.agency/blog/revenue-waterfall-scale-up" },
  openGraph: {
    title: "Le revenue waterfall : modeliser la croissance de votre scale-up | Ceres",
    description: "Framework pour modeliser et piloter la croissance ARR. Decomposition new / expansion / contraction / churn.",
    url: "https://ceres.agency/blog/revenue-waterfall-scale-up",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
