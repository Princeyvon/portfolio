import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface SiteNavProps {
  brandText?: string;
  initials?: string;
  year?: string;
}

export function SiteNav({
  brandText = "Prince Yvon",
  initials,
  year,
}: SiteNavProps) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`site-nav ${menuOpen ? "menu-open" : ""}`}
      aria-label="Main navigation"
    >
      <a className="brand" href="#top" onClick={closeMenu}>
        {brandText}
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span aria-hidden="true">{menuOpen ? "×" : "Menu"}</span>
      </button>

      <div id="nav-links" className="nav-links">
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>
        <a href="#work" onClick={closeMenu}>
          Systems & Demos
        </a>
        <a href="#skills" onClick={closeMenu}>
          Toolkit
        </a>
        <a href="#contact-form" onClick={closeMenu}>
          Contact
        </a>
      </div>

      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
      </button>
    </nav>
  );
}
