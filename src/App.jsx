import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AmbientCursor } from './components/layout/AmbientCursor';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ContactPage } from './pages/ContactPage';
import { CommandPalette } from './components/common/CommandPalette';
import { ResumeModal } from './components/sections/ResumeModal';
import { SkillDetailModal } from './components/sections/SkillDetailModal';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedSkillFromPalette, setSelectedSkillFromPalette] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-[#080C14] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 relative flex flex-col justify-between">
        
        {/* Desktop Ambient Lighting Aura */}
        <AmbientCursor />

        {/* Sticky Blurred Navbar */}
        <Navbar
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onOpenPhase2={() => {}}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenResume={() => setResumeOpen(true)}
                  onOpenCommandPalette={() => setCommandPaletteOpen(true)}
                />
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Command Palette (Ctrl+K) */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          onOpenResume={() => setResumeOpen(true)}
          onSelectSkill={(skill) => setSelectedSkillFromPalette(skill)}
        />

        {/* Candidate Resume Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

        {/* Skill Detail Modal */}
        <SkillDetailModal
          skill={selectedSkillFromPalette}
          isOpen={!!selectedSkillFromPalette}
          onClose={() => setSelectedSkillFromPalette(null)}
        />

      </div>
    </Router>
  );
}
