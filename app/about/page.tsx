import Image from "next/image";
import PageFrame from "@/components/PageFrame";

export default function AboutPage() {
  return (
    <PageFrame eyebrow="01 / About" title="Behind the build." lede="I design and engineer dependable products where backend depth, product judgment and expressive interfaces meet.">
      <div className="about-page-grid">
        <div className="about-page-image"><Image src="/kingsley-onuorah.png" alt="Kingsley Onuorah" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
        <div className="about-page-copy">
          <h2>I make complex systems feel clear.</h2>
          <p>I&apos;m Kingsley Onuorah, a fullstack engineer and technical leader with 4+ years of experience building production software across AI, health, fintech, agriculture, education and commerce.</p>
          <p>My work spans scalable APIs, cloud infrastructure, AI agents, responsive interfaces and the product decisions that make technology useful to real people.</p>
          <div className="skill-row">{["Node.js", "TypeScript", "Next.js", "PostgreSQL", "MongoDB", "AWS", "AI / ML", "System design"].map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </div>
    </PageFrame>
  );
}
