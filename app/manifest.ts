import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kingsley Onuorah Portfolio",
    short_name: "EKENE.",
    description: "Fullstack engineering, AI products and technology ventures by Kingsley Onuorah.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f1ef",
    theme_color: "#817fd5",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
