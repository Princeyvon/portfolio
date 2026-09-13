import { useEffect, useState } from "react";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AvailabilityBanner } from "@/components/portfolio/AvailabilityBanner";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSnapshotSection } from "@/components/portfolio/ExperienceSnapshotSection";
import { TimelineSection } from "@/components/portfolio/TimelineSection";
import { AIWorkSection } from "@/components/portfolio/AIWorkSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { FooterSection } from "@/components/portfolio/FooterSection";
import { GalleryModal } from "@/components/portfolio/GalleryModal";
import {
  AI_WORKS,
  EDUCATION_DATA,
  EXPERIENCE_SNAPSHOTS,
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  STATS,
  TIMELINE_ROLES,
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

        <AvailabilityBanner note={PERSONAL_INFO.academicNote} />

        {/* Section 02: About / Profile */}
        <AboutSection stats={STATS} />

        {/* Section 03: Experience Snapshot */}
        <ExperienceSnapshotSection snapshots={EXPERIENCE_SNAPSHOTS} />

        {/* Section 7 moved upwards right after experience snapshot */}
        <TimelineSection roles={TIMELINE_ROLES} />

        {/* Section 5 redesigned into Section 4 card layout: Systems & Demos */}
        <AIWorkSection
          aiWorks={AI_WORKS}
          onSelectGallery={(gallery) => setSelectedGallery(gallery)}
          email={PERSONAL_INFO.email}
        />

        {/* Section 8: Toolkit with Lovable AI and Google AI Studio */}
        <SkillsSection categories={SKILL_CATEGORIES} />

        {/* Section 10: Education */}
        <EducationSection education={EDUCATION_DATA} />
      </main>

      {/* Section 11: Contact with interactive Contact Form */}
      <FooterSection
        email={PERSONAL_INFO.email}
        phone={PERSONAL_INFO.phone}
        fullName={`${PERSONAL_INFO.name} ${PERSONAL_INFO.surname}`}
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
