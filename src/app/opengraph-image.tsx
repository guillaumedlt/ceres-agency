import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ceres - Agence RevOps & IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
        }}
      >
        {/* Logo bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "40px" }}>
          <div style={{ width: "120px", height: "14px", borderRadius: "7px", background: "#FF7A59" }} />
          <div style={{ width: "90px", height: "14px", borderRadius: "7px", background: "#4B5EFC" }} />
          <div style={{ width: "120px", height: "14px", borderRadius: "7px", background: "#22C55E" }} />
        </div>

        <div style={{ fontSize: "64px", fontWeight: "bold", color: "white", marginBottom: "16px" }}>
          Ceres
        </div>
        <div style={{ fontSize: "28px", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
          Agence RevOps & IA pour entreprises B2B
        </div>

        {/* Bottom bar */}
        <div style={{ position: "absolute", bottom: "40px", display: "flex", gap: "24px", color: "rgba(255,255,255,0.3)", fontSize: "16px" }}>
          <span>250+ clients</span>
          <span>9 ans</span>
          <span>ceres.agency</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
