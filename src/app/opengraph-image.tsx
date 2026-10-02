import { ImageResponse } from "next/og";

export const alt = "Hamza Tech Store — iPhone, smartphones, tablettes et troc à Cotonou";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 80% 60%, rgba(0,123,255,0.35), transparent 55%), #050B14",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#0C1829",
              border: "2px solid #172640",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            H
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>HAMZA</span>
            <span style={{ fontSize: 16, letterSpacing: 6, color: "#A7B0BE" }}>TECH STORE</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2, display: "flex", flexWrap: "wrap" }}>
            <span>Votre prochain&nbsp;</span>
            <span style={{ color: "#00D9FF" }}>iPhone</span>
            <span>&nbsp;commence ici.</span>
          </div>
          <div style={{ fontSize: 28, color: "#A7B0BE" }}>Smartphones · Tablettes · Accessoires · Véhicules · Troc — Cotonou, Bénin</div>
        </div>
      </div>
    ),
    size,
  );
}
