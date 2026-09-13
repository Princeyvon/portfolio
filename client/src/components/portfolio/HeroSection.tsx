import { ArrowLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

interface HeroSectionProps {
  name: string;
  surname: string;
  heroBio: string;
  heroSideNote: string;
}

export function HeroSection({
  name,
  surname,
  heroBio,
  heroSideNote,
}: HeroSectionProps) {
  return (
    <header id="top" className="hero content-wrap">
      <Reveal className="hero-main">
        <span className="eyebrow">Portfolio / 2026</span>
        <h1>
          {name}
          {surname && (
            <>
              <br />
              <em>{surname}</em>
            </>
          )}
        </h1>
        <p className="hero-copy">{heroBio}</p>
      </Reveal>

      <Reveal className="hero-side">
        <span className="hero-index">01</span>
        <p>{heroSideNote}</p>
        <div className="hero-cta-group">
          <ArrowLink href="#work">Explore systems & demos</ArrowLink>
          <ArrowLink href="#contact-form">Request demo access</ArrowLink>
        </div>
      </Reveal>
    </header>
  );
}
