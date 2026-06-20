import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = "RV Towing Calculator - Tow Safe. Tow Smart.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          <span style={{ fontSize: "20px", fontWeight: 500, opacity: 0.9 }}>
            SAE J2807 Compliant
          </span>
        </div>
        <div style={{ fontSize: "64px", fontWeight: 700, textAlign: "center" }}>
          RV Towing Calculator
        </div>
        <div
          style={{
            fontSize: "32px",
            marginTop: "16px",
            opacity: 0.85,
            textAlign: "center",
          }}
        >
          Six Safety Checks. One Tool. Tow Safe.
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
            fontSize: "20px",
          }}
        >
          <span style={{ background: "rgba(255,255,255,0.15)", padding: "8px 20px", borderRadius: "8px" }}>
            Towing Capacity
          </span>
          <span style={{ background: "rgba(255,255,255,0.15)", padding: "8px 20px", borderRadius: "8px" }}>
            Payload
          </span>
          <span style={{ background: "rgba(255,255,255,0.15)", padding: "8px 20px", borderRadius: "8px" }}>
            GVWR
          </span>
          <span style={{ background: "rgba(255,255,255,0.15)", padding: "8px 20px", borderRadius: "8px" }}>
            GCWR
          </span>
        </div>
        <div style={{ fontSize: "18px", marginTop: "32px", opacity: 0.6 }}>
          rvtowingcalc.com
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
