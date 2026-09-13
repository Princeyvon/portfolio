import type { Project } from "@/types/portfolio";
import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

interface WorkSectionProps {
  projects: Record<string, Project>;
  onSelectProject: (project: Project) => void;
}

export function WorkSection({ projects, onSelectProject }: WorkSectionProps) {
  return (
    <Reveal className="content-wrap section" id="work">
      <div className="section-head">
        <span className="eyebrow">04 / Selected work</span>
        <div>
          <h2>Work with a point of view.</h2>
          <p>
            Four directions I keep returning to: making systems friendlier,
            translating information, building community, and giving ideas a
            visual form.
          </p>
        </div>
      </div>

      <div className="work-grid">
        {Object.entries(projects).map(([key, project], index) => (
          <article
            key={key}
            className={`work-card ${index === 0 ? "tall" : ""} project-${index + 1}`}
          >
            <span className="work-number">0{index + 1}</span>
            <div>
              <span className="eyebrow">{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="work-meta">
              <span>{project.organization}</span>
              <ArrowLink onClick={() => onSelectProject(project)}>
                View story
              </ArrowLink>
            </div>
            <span className="work-art" aria-hidden="true" />
          </article>
        ))}
      </div>
    </Reveal>
  );
}
