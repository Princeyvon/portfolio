import type { RoleTimelineItem } from "@/types/portfolio";
import { Reveal } from "./Reveal";

interface TimelineSectionProps {
  roles: RoleTimelineItem[];
}

export function TimelineSection({ roles }: TimelineSectionProps) {
  return (
    <Reveal className="content-wrap section" id="experience">
      <div className="section-head">
        <span className="eyebrow">07 / Experience detail</span>
        <div>
          <h2>Different rooms, same instinct.</h2>
          <p>
            Roles across technology, community, and finance have made me a calm
            operator in unfamiliar environments.
          </p>
        </div>
      </div>

      <div className="timeline">
        {roles.map((role) => (
          <article className="role" key={`${role.organization}-${role.title}`}>
            <div className="meta">
              <span className="org">{role.organization}</span>
              {role.period}
              <br />
              {role.location}
            </div>
            <div>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              <div className="role-tags">
                {role.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
