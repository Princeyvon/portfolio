import { useEffect, useState } from "react";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSnapshotSection } from "@/components/portfolio/ExperienceSnapshotSection";
import { AIWorkSection } from "@/components/portfolio/AIWorkSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { FooterSection } from "@/components/portfolio/FooterSection";
import { GalleryModal } from "@/components/portfolio/GalleryModal";
import {
  AI_WORKS,
  EXPERIENCE_SNAPSHOTS,
  PERSONAL_INTERESTS,
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  STATS,
} from "@/data/portfolioData";
import type { SelectedGallery } from "@/types/portfolio";

export default function Home() {
  const [selectedGallery, setSelectedGallery] =
    useState<SelectedGallery | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedGallery(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteNav brandText="Prince Yvon" />

      <main id="main-content">
        <HeroSection
          name={PERSONAL_INFO.name}
          surname={PERSONAL_INFO.surname}
          heroBio={PERSONAL_INFO.heroBio}
          heroSideNote={PERSONAL_INFO.heroSideNote}
        />

        {/* Section 02: About / Profile */}
        <AboutSection stats={STATS} interests={PERSONAL_INTERESTS} />

        {/* Section 04: Systems & Demos */}
        <AIWorkSection
          aiWorks={AI_WORKS}
          onSelectGallery={(gallery) => setSelectedGallery(gallery)}
          email={PERSONAL_INFO.email}
        />

        {/* Section 03: Experience Snapshot, placed before the Toolkit */}
        <ExperienceSnapshotSection snapshots={EXPERIENCE_SNAPSHOTS} />

        {/* Section 05: Toolkit with Lovable AI and Google AI Studio */}
        <SkillsSection categories={SKILL_CATEGORIES} />
      </main>

      {/* Section 11: Contact with interactive Contact Form */}
      <FooterSection
        email={PERSONAL_INFO.email}
        phone={PERSONAL_INFO.phone}
        fullName={PERSONAL_INFO.name}
      />

      {/* Demo Walkthrough Modal with Screenshots, Actual Site link, and Institutional Disclaimer */}
      <GalleryModal
        gallery={selectedGallery}
        onClose={() => setSelectedGallery(null)}
        email={PERSONAL_INFO.email}
      />
    </div>
  );
}
