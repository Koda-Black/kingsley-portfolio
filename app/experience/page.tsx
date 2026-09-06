import PageFrame from "@/components/PageFrame";

const roles = [
  { period: "2023 — Present", title: "Co-founder & Chief Technology Officer", company: "Fitness Space", copy: "Engineering scalable wellness infrastructure and intelligent, context-aware experiences that preserve accountability as the product grows." },
  { period: "2021 — 2023", title: "Team Lead & Fullstack Developer", company: "Yarna", copy: "Led cross-platform product delivery across fintech and e-commerce, mentoring engineers and strengthening architecture, quality and release velocity." },
  { period: "Ongoing", title: "Independent Product Builder", company: "AI, infrastructure & interfaces", copy: "Taking ideas from the first technical decision to resilient systems, expressive interfaces and production deployment." },
];

export default function ExperiencePage() {
  return <PageFrame eyebrow="03 / Experience" title="Built with teams. Measured by impact." lede="Technical leadership, fullstack execution and product-minded engineering."><div className="timeline inner-timeline">{roles.map((role) => <article key={role.period}><span>{role.period}</span><h3>{role.title}</h3><strong>{role.company}</strong><p>{role.copy}</p></article>)}</div></PageFrame>;
}
