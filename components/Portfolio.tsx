"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Asterisk, BriefcaseBusiness, Mail, MapPin, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { articles, navigation, projects } from "./content";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="landing-page">
      <header className="mobile-header">
        <Link className="brand" href="/" aria-label="Home">EKENE<span>.</span></Link>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen ? (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          </nav>
        ) : null}
      </header>

      <aside className="side-rail" aria-label="Primary navigation">
        <Link className="rail-wordmark" href="/">EKENE<span>.</span></Link>
        <nav>{navigation.slice(0, 4).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
        <Link className="rail-mail" href="/contact" aria-label="Contact Kingsley"><Mail size={17} /></Link>
      </aside>

      <section className="hero-shell section-shell">
        <div className="profile-panel card-link animate-in">
          <Link className="fill-link" href="/about" aria-label="Read about Kingsley" />
          <div className="profile-label"><Asterisk size={16} /> About me</div>
          <ArrowUpRight className="card-arrow profile-arrow" />
          <div className="portrait-orbit" aria-hidden="true" />
          <div className="portrait-wrap">
            <Image src="/kingsley-onuorah.png" alt="Kingsley Onuorah" fill priority sizes="(max-width: 760px) 82vw, 360px" className="portrait" />
          </div>
          <div className="intro-copy">
            <span>I&apos;m,</span>
            <strong>Kingsley<br />Onuorah</strong>
            <span className="email-line">kingsley4onuorah@gmail.com</span>
          </div>
          <div className="availability-seal" aria-label="Open to opportunities"><span>OPEN TO WORK · 2026 ·</span><i /></div>
        </div>

        <div className="hero-main">
          <div className="hero-title-row animate-in delay-one">
            <p>Fullstack engineer<br />& AI builder</p>
            <h1>Portfolio<sup>•</sup></h1>
          </div>
          <div className="hero-mosaic animate-in delay-two">
            <Link className="featured-project card-link" href="/projects">
              <Image src={projects[1].image} alt="FarmSat landing page" fill priority sizes="(max-width: 900px) 100vw, 760px" />
              <span>Projects / Featured work <ArrowUpRight /></span>
            </Link>
            <div className="count-stack">
              <Link href="/projects" className="count-card mint-card card-link"><strong>{projects.length}</strong><span>Selected projects</span><ArrowUpRight className="card-arrow" /></Link>
              <Link href="/journal" className="count-card purple-card card-link"><strong>{articles.length}</strong><span>{articles.length === 1 ? "Published article" : "Published articles"}</span><ArrowUpRight className="card-arrow" /></Link>
            </div>
            <Link href="/experience" className="small-card role-card card-link"><BriefcaseBusiness /><span>Experience<br />& expertise</span><ArrowUpRight className="card-arrow" /></Link>
            <Link href="/about" className="small-card identity-card card-link"><Sparkles /><strong>Ideas engineered<br />for real life.</strong><ArrowUpRight className="card-arrow" /></Link>
            <Link href="/contact" className="small-card location-card card-link"><MapPin /><span>Enugu, Nigeria<br />Let&apos;s work together</span><ArrowUpRight className="card-arrow" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
