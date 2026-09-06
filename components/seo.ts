import type { Metadata } from "next";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: "Kingsley Onuorah Portfolio",
      locale: "en_NG",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kingsley Onuorah portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
