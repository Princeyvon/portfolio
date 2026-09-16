import type { StatItem } from "@/types/portfolio";
import { Reveal } from "./Reveal";

interface AboutSectionProps {
  stats: StatItem[];
  interests: string[];
}

export function AboutSection({ stats, interests }: AboutSectionProps) {
  return (
    <Reveal className="content-wrap section" id="about">
      <div className="section-head">
        <span className="eyebrow">02 / Profile</span>
        <div>
          <h2>A hybrid by design.</h2>
          <p>
            Comfortable with a spreadsheet, a camera, a support queue, or a
            room full of people. The common thread is making complex things
            clearer and more useful.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <p>
          I&apos;ve moved between financial analysis, IT support, and community
          mentorship while building a parallel practice in multimedia
          production, publishing, and applied technology.
        </p>
        <p>
          That range is practical. I can troubleshoot equipment, explain it to
          someone using it for the first time, then turn the outcome into a
          story, workshop, or system other people can use.
        </p>
      </div>

      <div className="stat-row">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="interest-strip" aria-label="Personal interests">
        <span className="eyebrow">Outside the brief</span>
        <div className="interest-list">
          {interests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
