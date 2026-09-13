import type { EducationItem } from "@/types/portfolio";
import { Reveal } from "./Reveal";

interface EducationSectionProps {
  education: EducationItem;
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Reveal className="content-wrap section" id="education">
      <div className="section-head">
        <span className="eyebrow">06 / Education</span>
        <div>
          <h2>Learning in public.</h2>
          <p>The academic foundation behind the practical work.</p>
        </div>
      </div>

      <div className="role education-row">
        <div className="meta">
          {education.period}
          <br />
          {education.location}
        </div>
        <div>
          <h3>{education.institution}</h3>
          <p>
            {education.degree} · {education.gpa}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
