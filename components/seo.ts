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
      images: [{ url: "/portfolio-preview.jpg", width: 1440, height: 756, type: "image/jpeg", alt: "Kingsley Onuorah's portfolio homepage with portrait, selected projects and journal" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: "/portfolio-preview.jpg", alt: "Kingsley Onuorah's portfolio homepage with portrait, selected projects and journal" }],
    },
  };
}
