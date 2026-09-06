import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import { createPageMetadata } from "@/components/seo";

export const metadata = createPageMetadata({
  title: "About — Fullstack Engineer & Technology Co-founder",
  description: "Meet Kingsley Onuorah, a fullstack engineer, AI builder and co-founder of AERA and Fitness Space working across scalable software, cloud systems and product development.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageFrame eyebrow="01 / About" title="Behind the build." lede="I design and engineer dependable products where backend depth, product judgment and expressive interfaces meet.">
      <div className="about-page-grid">
        <div className="about-page-image"><Image src="/kingsley-onuorah.png" alt="Kingsley Onuorah" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
        <div className="about-page-copy">
          <h2>I make complex systems feel clear.</h2>
          <p>I&apos;m Kingsley Onuorah, a fullstack engineer and technical leader with 4+ years of experience building production software across AI, health, fintech, agriculture, education and commerce.</p>
          <p>I&apos;m also the co-founder of AERA and Fitness Space, where I help turn ambitious ideas into dependable products, teams and technology that can grow.</p>
          <p>My work spans scalable APIs, cloud infrastructure, AI agents, responsive interfaces and the product decisions that make technology useful to real people.</p>
          <div className="skill-row">{["Node.js", "TypeScript", "Next.js", "PostgreSQL", "MongoDB", "AWS", "AI / ML", "System design"].map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </div>
      <section className="founder-platforms" aria-labelledby="founder-platforms-title">
        <div className="founder-platforms-heading">
          <span>Co-founder / 02 platforms</span>
          <h2 id="founder-platforms-title">Companies I&apos;m building.</h2>
        </div>
        <div className="founder-platform-grid">
          <article className="founder-platform-card aera-platform-card">
            <div className="founder-platform-topline">
              <span>01 / Venture building</span>
              <a href="https://www.aera.llc" target="_blank" rel="noreferrer" aria-label="Visit AERA">
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <h3>AERA</h3>
            <p className="founder-role">Co-founder</p>
            <dl>
              <div>
                <dt>Mission</dt>
                <dd>Discover exceptional African founders and build globally significant technology companies alongside them, from talent to scale.</dd>
              </div>
              <div>
                <dt>Vision</dt>
                <dd>A future where meaningful ideas born in Africa become enduring, globally relevant companies.</dd>
              </div>
            </dl>
          </article>

          <article className="founder-platform-card fitness-platform-card">
            <div className="founder-platform-topline">
              <span>02 / Health technology</span>
              <a href="https://getfitness.space" target="_blank" rel="noreferrer" aria-label="Visit Fitness Space">
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <h3>Fitness Space</h3>
            <p className="founder-role">Co-founder</p>
            <dl>
              <div>
                <dt>Mission</dt>
                <dd>Make sustainable weight loss practical through Bibi, a science-backed AI coach built around each person&apos;s body, food, life and goals.</dd>
              </div>
              <div>
                <dt>Vision</dt>
                <dd>A world where personalized guidance, community and accountability make healthier living accessible every day.</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>
    </PageFrame>
  );
}
