import type { SkillCategory } from "@/types/portfolio";
import { Reveal } from "./Reveal";

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <Reveal className="content-wrap section" id="skills">
      <div className="section-head">
        <span className="eyebrow">05 / Toolkit</span>
        <div>
          <h2>Tools are a means, not a personality.</h2>
          <p>
            From generative scaffolding with <strong>Lovable AI</strong> and{" "}
            <strong>Google AI Studio</strong> to statistical analysis and design suites, I choose
            the tool that makes systems faster, clearer, and more reliable.
          </p>
        </div>
      </div>

      <div className="skills-grid">
        {categories.map((cat) => (
          <div className="skill" key={cat.title}>
            <h3>{cat.title}</h3>
            <p>{cat.skills}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
