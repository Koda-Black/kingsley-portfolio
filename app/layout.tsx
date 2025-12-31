import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kingsley Onuorah | Fullstack Engineer",
  description: "Backend/Fullstack Engineer with 4+ years of experience in Node.js, cloud architecture, and AI/ML integration. Delivering scalable solutions across fintech, wellness, and SaaS domains.",
  keywords: ["Fullstack Engineer", "Backend Developer", "Node.js", "AWS", "Cloud Architecture", "AI/ML"],
  authors: [{ name: "Kingsley Onuorah" }],
  openGraph: {
    title: "Kingsley Onuorah | Fullstack Engineer",
    description: "Backend/Fullstack Engineer with 4+ years of experience in Node.js, cloud architecture, and AI/ML integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
