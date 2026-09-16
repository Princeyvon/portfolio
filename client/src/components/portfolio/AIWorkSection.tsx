import type { AIWork, SelectedGallery } from "@/types/portfolio";
import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

interface AIWorkSectionProps {
  aiWorks: AIWork[];
  onSelectGallery: (gallery: SelectedGallery) => void;
  email: string;
}

export function AIWorkSection({
  aiWorks,
  onSelectGallery,
  email,
}: AIWorkSectionProps) {
  return (
    <Reveal className="content-wrap section" id="work">
      <div className="section-head">
        <span className="eyebrow">04 / Systems & AI Work</span>
        <div>
          <h2>Systems built for real operations.</h2>
          <p>
            Operating systems, workflow tools, and interactive platforms built
            leveraging <strong>Lovable AI</strong> and <strong>Google AI Studio</strong> alongside
            custom code. These are systems designed for institutional efficiency,
            daily service rhythm, and clear decisions.
          </p>
        </div>
      </div>

      {/* Institutional banner */}
      <div className="ai-access-note mb-8">
        <span className="status-dot" aria-hidden="true" />
        <p>
          <strong>Institutional notice:</strong> These systems power active
          organizational operations. Click <strong>Open demo</strong> on any
          project to inspect full interface walkthroughs, visit live
          deployments, or request demo access through our contact form.
        </p>
        <ArrowLink href="#contact-form">
          Request demo access
        </ArrowLink>
      </div>

      {/* Redesigned into Section 4's work-grid & work-card architecture */}
      <div className="work-grid" id="ai-work">
        {aiWorks.map((work, index) => (
          <article
            key={work.title}
            className={`work-card ai-system-card ${index === 0 ? "tall" : ""} project-${(index % 4) + 1}`}
          >
            <span className="work-number">0{index + 1}</span>

            <div className="work-card-content">
              <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
                <span className="eyebrow">{work.eyebrow || work.type}</span>
                <span className="card-platform-pill">
                  {work.tools || "Lovable AI · Google AI Studio"}
                </span>
              </div>

              <h3>{work.title}</h3>
              <p>{work.description}</p>
              {work.outcome && <p className="work-outcome">{work.outcome}</p>}

              {/* Interface screenshot preview frame */}
              {work.screenshots.length > 0 && (
                <div
                  className="work-preview-stage"
                  onClick={() =>
                    onSelectGallery({
                      title: work.title,
                      type: work.type,
                      description: work.description,
                      href: work.href,
                      screenshots: work.screenshots,
                      tools: work.tools,
                    })
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      onSelectGallery({
                        title: work.title,
                        type: work.type,
                        description: work.description,
                        href: work.href,
                        screenshots: work.screenshots,
                        tools: work.tools,
                      });
                    }
                  }}
                  aria-label={`Open demo walkthrough for ${work.title}`}
                >
                  <img
                    src={work.screenshots[0]}
                    alt={`${work.title} interface preview`}
                    loading="lazy"
                  />
                  <div className="work-preview-overlay">
                    <span className="preview-badge">
                      +{work.screenshots.length} interface screens
                    </span>
                    <span className="preview-cta">Click to preview demo ↗</span>
                  </div>
                </div>
              )}
            </div>

            {/* Single action button: Open demo */}
            <div className="work-meta">
              <div className="work-status-info">
                <span className="status-indicator-dot" />
                <span>{work.status}</span>
              </div>

              <button
                type="button"
                className="arrow-link font-bold"
                onClick={() =>
                  onSelectGallery({
                    title: work.title,
                    type: work.type,
                    description: work.description,
                    href: work.href,
                    screenshots: work.screenshots,
                    tools: work.tools,
                  })
                }
              >
                Open demo
                <span className="arrow" aria-hidden="true">↗</span>
              </button>
            </div>

            <span className="work-art" aria-hidden="true" />
          </article>
        ))}
      </div>
    </Reveal>
  );
}
