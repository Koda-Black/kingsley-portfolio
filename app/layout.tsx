import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.onuorahkingsley.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kingsley Onuorah | Fullstack Engineer, AI Builder & Co-founder",
    template: "%s | Kingsley Onuorah",
  },
  description:
    "Portfolio of Kingsley Onuorah, a fullstack engineer, AI builder and co-founder of AERA, Fitness Space and Ajo Cash building scalable products across health, fintech, agriculture and education.",
  applicationName: "Kingsley Onuorah Portfolio",
  creator: "Kingsley Onuorah",
  publisher: "Kingsley Onuorah",
  category: "Technology",
  authors: [{ name: "Kingsley Onuorah", url: "https://linkedin.com/in/kodablack" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kingsley Onuorah | Fullstack Engineer, AI Builder & Co-founder",
    description: "Explore the products, systems and ideas Kingsley Onuorah engineers for real-world scale.",
    type: "website",
    url: "/",
    siteName: "Kingsley Onuorah Portfolio",
    locale: "en_NG",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kingsley Onuorah portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingsley Onuorah | Fullstack Engineer, AI Builder & Co-founder",
    description: "Explore the products, systems and ideas Kingsley Onuorah engineers for real-world scale.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#817fd5",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kingsley Onuorah Portfolio",
      description: "Selected products, engineering work and writing by Kingsley Onuorah.",
      inLanguage: "en-NG",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Kingsley Onuorah",
      url: siteUrl,
      image: `${siteUrl}/kingsley-onuorah.png`,
      jobTitle: ["Fullstack Engineer", "AI Builder", "Technology Co-founder"],
      description: "Fullstack engineer, AI builder and co-founder of AERA, Fitness Space and Ajo Cash.",
      email: "mailto:kingsley4onuorah@gmail.com",
      sameAs: ["https://github.com/Koda-Black", "https://linkedin.com/in/kodablack"],
      homeLocation: { "@type": "Place", name: "Enugu, Nigeria" },
      knowsAbout: ["Fullstack engineering", "Artificial intelligence", "Backend engineering", "Cloud architecture", "Product development", "System design"],
      worksFor: [
        { "@id": "https://www.aera.llc/#organization" },
        { "@id": "https://getfitness.space/#organization" },
        { "@id": "https://ajo.cash/#organization" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.aera.llc/#organization",
      name: "AERA Technologies Limited",
      url: "https://www.aera.llc",
      founder: { "@id": `${siteUrl}/#person` },
      description: "A venture builder working alongside exceptional African founders to create globally significant technology companies.",
    },
    {
      "@type": "Organization",
      "@id": "https://getfitness.space/#organization",
      name: "Fitness Space",
      url: "https://getfitness.space",
      founder: { "@id": `${siteUrl}/#person` },
      description: "A science-backed wellness platform using personalized AI coaching, community and accountability to support sustainable weight loss.",
    },
    {
      "@type": "Organization",
      "@id": "https://ajo.cash/#organization",
      name: "Ajo Cash",
      url: "https://www.ajo.cash",
      founder: { "@id": `${siteUrl}/#person` },
      description: "Digital trust infrastructure for Nigerian rotating savings groups with automatic contributions, instant payouts and AI-powered trust.",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
