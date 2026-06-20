import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RV Towing Calculator - Tow Safe. Tow Smart.",
    short_name: "RV TowCalc",
    description:
      "The only RV towing calculator that combines real vehicle data with deep safety analysis. SAE J2807 compliant.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9fafb",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
