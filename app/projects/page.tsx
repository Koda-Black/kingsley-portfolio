import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import { projects } from "@/components/content";

export default function ProjectsPage() {
  return (
    <PageFrame eyebrow="02 / Projects" title={`Selected work — ${projects.length}`} lede="Live products and systems I've helped shape, architect and ship.">
      <div className="projects-grid inner-projects-grid">
        {projects.map((project, index) => (
          <article className={`project-card ${project.tone}`} key={project.name}>
            <a href={project.url} target="_blank" rel="noreferrer" className="project-image"><Image src={project.image} alt={`${project.name} landing page`} fill sizes="(max-width: 760px) 100vw, 50vw" /></a>
            <div className="project-copy">
              <span>{String(index + 1).padStart(2, "0")} / {project.eyebrow}</span>
              <h3>{project.name}</h3><p>{project.description}</p>
              <div className="project-footer"><div>{project.stack.map((item) => <em key={item}>{item}</em>)}</div><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight /></a></div>
            </div>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
