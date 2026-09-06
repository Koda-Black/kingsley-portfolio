import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Asterisk } from "lucide-react";
import { navigation } from "./content";

export default function PageFrame({ eyebrow, title, lede, children }: { eyebrow: string; title: string; lede: string; children: React.ReactNode }) {
  return (
    <main className="inner-page">
      <header className="inner-header">
        <Link className="inner-brand" href="/">EKENE<span>.</span></Link>
        <nav>{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
        <a href="mailto:kingsley4onuorah@gmail.com">Let&apos;s talk <ArrowUpRight /></a>
      </header>
      <section className="inner-hero">
        <Link href="/" className="back-link"><ArrowLeft /> Back home</Link>
        <div className="section-kicker"><Asterisk /> {eyebrow}</div>
        <h1>{title}</h1>
        <p>{lede}</p>
      </section>
      <section className="inner-content">{children}</section>
      <footer className="inner-footer">
        <Link className="inner-brand" href="/">EKENE<span>.</span></Link>
        <span>© 2026 Kingsley Onuorah</span>
        <a href="mailto:kingsley4onuorah@gmail.com">kingsley4onuorah@gmail.com</a>
      </footer>
    </main>
  );
}
