import type { FieldNote } from "@/types/portfolio";
import { Reveal } from "./Reveal";

interface NotesSectionProps {
  notes: FieldNote[];
  email: string;
}

export function NotesSection({ notes, email }: NotesSectionProps) {
  return (
    <Reveal className="content-wrap section">
      <div className="section-head">
        <span className="eyebrow">09 / Notes</span>
        <div>
          <h2>Things I&apos;m thinking about.</h2>
          <p>
            Small working ideas from the overlap between technology, people, and
            communication.
          </p>
        </div>
      </div>

      <div className="notes">
        {notes.map((note) => (
          <article className="note" key={note.number}>
            <span className="eyebrow">Field note / {note.number}</span>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                note.subject
              )}`}
            >
              {note.actionText}
            </a>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
