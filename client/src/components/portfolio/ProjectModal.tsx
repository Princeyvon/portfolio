import type { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  email: string;
}

export function ProjectModal({ project, onClose, email }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <div className="dialog-top">
          <span className="eyebrow">Selected work / case note</span>
          <button
            className="close-button"
            type="button"
            aria-label="Close project detail"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <h2 id="project-title">{project.title}</h2>
        <p>{project.body}</p>

        <a
          className="modal-link"
          href={`mailto:${email}?subject=${encodeURIComponent(project.title)}`}
        >
          Ask for the longer version ↗
        </a>
      </section>
    </div>
  );
}
