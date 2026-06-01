import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentForce vs Breeze vs Attio AI : quelle IA CRM choisir en 2026 | Ceres",
  description:
    "Comparatif AgentForce (Salesforce), Breeze (HubSpot) et Attio AI : capacites, prix, MCP, deploiement. Le verdict honnete pour le RevOps en 2026.",
  keywords: ["agentforce vs breeze", "ia crm 2026", "salesforce agentforce", "hubspot breeze", "attio ai comparatif"],
  alternates: { canonical: "https://ceres.agency/blog/agentforce-vs-breeze-vs-attio-ai" },
  openGraph: {
    title: "AgentForce vs Breeze vs Attio AI : quelle IA CRM choisir en 2026 | Ceres",
    description: "Comparatif AgentForce, Breeze et Attio AI : capacites, prix, MCP, deploiement.",
    url: "https://ceres.agency/blog/agentforce-vs-breeze-vs-attio-ai",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
