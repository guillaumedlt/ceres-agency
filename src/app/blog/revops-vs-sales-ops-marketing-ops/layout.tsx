import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps vs Sales Ops vs Marketing Ops : quelles differences ?",
  description:
    "Definitions de Sales Ops, Marketing Ops, CS Ops et RevOps. Modeles organisationnels, tableau comparatif sur 12 criteres et signaux pour passer au RevOps unifie.",
  openGraph: {
    title: "RevOps vs Sales Ops vs Marketing Ops : quelles differences ?",
    description:
      "Definitions de Sales Ops, Marketing Ops, CS Ops et RevOps. Modeles organisationnels, tableau comparatif sur 12 criteres et signaux pour passer au RevOps unifie.",
    url: "https://ceres.agency/blog/revops-vs-sales-ops-marketing-ops",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/revops-vs-sales-ops-marketing-ops",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
