import { useState } from "react";
import type { SelectedGallery } from "@/types/portfolio";
import { FullscreenCarousel } from "@/components/portfolio/FullscreenCarousel";
import { Maximize2 } from "lucide-react";

interface GalleryModalProps {
  gallery: SelectedGallery | null;
  onClose: () => void;
  email: string;
}

export function GalleryModal({ gallery, onClose, email }: GalleryModalProps) {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  if (!gallery) return null;

  const handleContactLink = () => {
    onClose();
    // Allow state to clear before scrolling to contact form
    setTimeout(() => {
      const el = document.getElementById("contact-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <div
        className="modal-backdrop"
        role="presentation"
        onMouseDown={(event) => {
          if (event.currentTarget === event.target) onClose();
        }}
      >
        <section
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-title"
        >
          <div className="dialog-top">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="eyebrow">{gallery.type || "Institutional system walkthrough"}</span>
                {gallery.tools && (
                  <span className="modal-tools-badge">{gallery.tools}</span>
                )}
              </div>
              <h2 id="gallery-title">{gallery.title}</h2>
              {gallery.description && (
                <p className="modal-lead-desc">{gallery.description}</p>
              )}
            </div>
            <button
              className="close-button"
              type="button"
              aria-label="Close demo walkthrough"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          {/* Disclaimer Banner per user specification */}
          <div className="modal-disclaimer-banner">
            <div className="disclaimer-icon" aria-hidden="true">ℹ</div>
            <div className="disclaimer-text">
              <strong>Institutional System Notice:</strong> These are institutional sites with internal operations and data workflows, but visitors can request demo access through a{" "}
              <a
                href="#contact-form"
                className="disclaimer-contact-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleContactLink();
                }}
              >
                contact us link
              </a>.
            </div>
          </div>

          {/* Screenshots View */}
          <div className="gallery-section-label flex items-center justify-between">
            <span>Interface Walkthrough ({gallery.screenshots.length} views)</span>
            <span className="text-xs font-mono text-[var(--muted)] opacity-80">
              Click any image to view in fullscreen carousel
            </span>
          </div>

          <div className="gallery-grid">
            {gallery.screenshots.map((src, index) => (
              <div
                className="gallery-card interactive"
                key={src}
                onClick={() => setFullscreenIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFullscreenIndex(index);
                  }
                }}
                aria-label={`Open view ${index + 1} of ${gallery.title} in full screen carousel`}
              >
                <div className="gallery-img-wrap relative group">
                  <img
                    src={src}
                    alt={`${gallery.title} interface view ${index + 1}`}
                    loading="lazy"
                  />
                  <div className="gallery-hover-overlay">
                    <span className="gallery-hover-pill">
                      <Maximize2 size={13} className="inline-block mr-1.5" />
                      Fullscreen View
                    </span>
                  </div>
                </div>
                <div className="gallery-caption flex items-center justify-between">
                  <span>View 0{index + 1} · {gallery.title} interface</span>
                  <span className="text-[10px] text-[var(--accent)] font-semibold">Expand ↗</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action footer with link down to actual site and demo request */}
          <div className="modal-action-bar">
            {gallery.href && (
              <div className="actual-site-block">
                <a
                  className="actual-site-button"
                  href={gallery.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit actual site
                  <span className="arrow" aria-hidden="true">↗</span>
                </a>
                <span className="site-disclaimer-note">
                  Institutional deployment ({new URL(gallery.href).hostname}) · access restricted to authorized personnel
                </span>
              </div>
            )}

            <div className="modal-cta-row">
              <button
                type="button"
                className="modal-request-button"
                onClick={handleContactLink}
              >
                Request demo access via Contact form ↗
              </button>
              <a
                className="modal-email-fallback"
                href={`mailto:${email}?subject=${encodeURIComponent(
                  `Demo access request: ${gallery.title}`
                )}`}
              >
                Email directly ↗
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Fullscreen Infinity Carousel */}
      {fullscreenIndex !== null && (
        <FullscreenCarousel
          isOpen={fullscreenIndex !== null}
          images={gallery.screenshots}
          initialIndex={fullscreenIndex}
          title={gallery.title}
          onClose={() => setFullscreenIndex(null)}
        />
      )}
    </>
  );
}
