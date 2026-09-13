import type { ProcessItem } from "@/types/portfolio";
import { Reveal } from "./Reveal";

interface ProcessSectionProps {
  steps: ProcessItem[];
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <Reveal className="content-wrap section">
      <div className="section-head">
        <span className="eyebrow">06 / How I work</span>
        <div>
          <h2>Curious first. Specific always.</h2>
          <p>
            A simple process for moving from a fuzzy need to something people
            can understand, use, and remember.
          </p>
        </div>
      </div>

      <div className="process">
        {steps.map((step) => (
          <div className="process-item" key={step.number}>
            <b>{step.number}</b>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
