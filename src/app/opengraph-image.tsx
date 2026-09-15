import { ImageResponse } from "next/og";

export const alt =
  "Cooked Up! - Find recipes with what's already in your kitchen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colours mirror the light theme in styles/abstracts/_colors.scss.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          backgroundColor: "#f7f5f2",
          color: "#2a2725",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          Cooked Up!
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#92817a",
            maxWidth: 860,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Find recipes with what&apos;s already in your kitchen, then plan your
          week around them.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 26,
            color: "#f56960",
            fontWeight: 600,
          }}
        >
          cookedup.app
        </div>
      </div>
    ),
    size,
  );
}
