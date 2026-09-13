import type { ExperienceSnapshotItem } from "@/types/portfolio";
import { Reveal } from "./Reveal";

interface ExperienceSnapshotSectionProps {
  snapshots: ExperienceSnapshotItem[];
}

export function ExperienceSnapshotSection({
  snapshots,
}: ExperienceSnapshotSectionProps) {
  return (
    <Reveal
      className="content-wrap section quick-experience"
      id="experience-snapshot"
    >
      <div className="section-head">
        <span className="eyebrow">03 / Quick experience</span>
        <div>
          <h2>A short version of the CV.</h2>
          <p>
            Three roles that explain how I learned to work with systems, people,
            and decisions.
          </p>
        </div>
      </div>

      <div className="experience-snapshot-grid">
        {snapshots.map((item) => (
          <article key={item.organization}>
            <span className="snapshot-year">{item.year}</span>
            <h3>{item.role}</h3>
            <p>
              {item.organization} · {item.location}
            </p>
            <span className="snapshot-detail">{item.details}</span>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
