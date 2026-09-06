import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kingsley-portfolio-omega.vercel.app"),
  title: "Kingsley Onuorah — Fullstack Engineer & AI Builder",
  description:
    "Selected products, engineering work and writing by Kingsley Onuorah — a fullstack engineer building AI-powered, scalable software.",
  keywords: ["Kingsley Onuorah", "Fullstack Engineer", "Backend Engineer", "AI Engineer", "Node.js", "Cloud Architecture"],
  authors: [{ name: "Kingsley Onuorah", url: "https://linkedin.com/in/kodablack" }],
  openGraph: {
    title: "Kingsley Onuorah — Fullstack Engineer & AI Builder",
    description: "Products, systems and ideas engineered for real-world scale.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kingsley Onuorah portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingsley Onuorah — Fullstack Engineer & AI Builder",
    description: "Products, systems and ideas engineered for real-world scale.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
