import { useState, type FormEvent } from "react";

interface FooterSectionProps {
  email: string;
  phone: string;
  fullName: string;
}

export function FooterSection({ email, phone, fullName }: FooterSectionProps) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [topic, setTopic] = useState("Request Demo Access: Kigali Rentals");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open mailto fallback so the user can easily dispatch from their email client if desired
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      `[Portfolio Demo Request] ${topic} from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\nTopic: ${topic}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <footer id="contact">
      <div className="content-wrap">
        <span className="eyebrow">11 / Contact & Demo Access</span>
        <h2>
          Have a useful
          <br />
          <em>problem?</em>
        </h2>

        {/* Contact Form Section per user request */}
        <div id="contact-form" className="contact-form-card">
          <div className="contact-form-intro">
            <h3>Request Demo Access & Inquiries</h3>
            <p>
              These institutional operating systems are private by default. Fill out the
              form below to request demo access, live walkthrough credentials, or discuss
              collaborative projects.
            </p>
          </div>

          {submitted ? (
            <div className="contact-success-box" role="alert">
              <span className="status-indicator-dot" />
              <div>
                <h4>Thank you, {name}!</h4>
                <p>
                  Your request regarding <strong>{topic}</strong> has been prepared. If your email
                  client didn&apos;t open automatically, you can dispatch directly to{" "}
                  <a href={`mailto:${email}`}>{email}</a>.
                </p>
                <button
                  type="button"
                  className="contact-reset-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                  }}
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="portfolio-contact-form">
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Maya Lin"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. name@organization.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-topic">System of Interest / Purpose</label>
                <select
                  id="contact-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  <option value="Request Demo Access: Kigali Rentals">
                    Request Demo Access: Kigali Rentals (Fleet & Bookings)
                  </option>
                  <option value="Request Demo Access: Ijuru Restaurant Ops">
                    Request Demo Access: Ijuru (Restaurant & POS Ops)
                  </option>
                  <option value="Request Demo Access: Studio Commerce">
                    Request Demo Access: Studio Commerce & Store
                  </option>
                  <option value="Request Demo Access: EV Charging Ops">
                    Request Demo Access: EV Charging Station Ops
                  </option>
                  <option value="Request Demo Access: Rugmosiac">
                    Request Demo Access: Rugmosiac Experiment
                  </option>
                  <option value="General Systems Collaboration">
                    General Systems & Engineering Collaboration
                  </option>
                  <option value="Other Project Inquiry">
                    Other Project Inquiry
                  </option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Message / Details</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Share details about your team, organization, or what you'd like to explore in the demo..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="contact-submit-button">
                  Submit demo request ↗
                </button>
                <span className="form-privacy-note">
                  Direct contact · Responses typically within 24 hours
                </span>
              </div>
            </form>
          )}
        </div>

        <div className="footer-row">
          <div className="footer-links">
            <a href={`mailto:${email}`}>
              {email} ↗
            </a>
            <a href={`tel:${phone.replace(/\s+/g, "")}`}>
              {phone} ↗
            </a>
            <a href="#top">Back to top ↑</a>
          </div>

          <span className="copyright">
            © {new Date().getFullYear()} {fullName}
          </span>
        </div>
      </div>
    </footer>
  );
}
