import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { AlgorithmTicker } from '../components/visuals/AlgorithmTicker';
import { HomeFeaturedProjects } from '../components/sections/HomeFeaturedProjects';
import { CertificationsPreview } from '../components/sections/CertificationsPreview';
import { AchievementsPreview } from '../components/sections/AchievementsPreview';
import { EducationSection } from '../components/sections/EducationSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export function HomePage({ onOpenResume, onOpenCommandPalette }) {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection
        onOpenResume={onOpenResume}
        onOpenProjectsPreview={() => {
          const el = document.getElementById('featured-projects-preview');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenCommandPalette={onOpenCommandPalette}
      />

      {/* 2. Live Complexity Ticker */}
      <AlgorithmTicker />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Skills Section */}
      <SkillsSection />

      {/* 5. Featured Projects Preview */}
      <div id="featured-projects-preview">
        <HomeFeaturedProjects />
      </div>

      {/* 6. Certifications Preview */}
      <CertificationsPreview />

      {/* 7. Achievements & Hackathons Preview */}
      <AchievementsPreview />

      {/* 8. Education Section */}
      <EducationSection />

      {/* 9. Final CTA Section */}
      <FinalCTASection onOpenResume={onOpenResume} />
    </>
  );
}
