import React from 'react';
import { Mail, Terminal, MapPin, Download, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { siteConfig } from '../data/siteConfig';

export function ContactPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen space-y-12 text-left font-sans">
      
      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="DIRECT CONTACT & PROFILES"
            title="Connect with Srija Ch for technical projects & collaborations."
            highlightWord="projects & collaborations"
            subheadline="Informational contact profiles for direct email communication, code repository inspection, and professional networking."
          />
        </div>
      </section>

      {/* Informational Cards Matrix */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Direct Contact Card */}
          <GlassCard spotlight className="border-slate-800/80 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                  PRIMARY EMAIL CONTACT
                </span>
                <h3 className="text-lg font-bold text-white">Direct Email Dispatch</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Reach out directly for project inquiries, technical discussions, open-source collaborations, or engineering opportunities.
            </p>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm font-bold transition-colors"
              >
                <span>{siteConfig.email}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active Mailto
              </span>
            </div>
          </GlassCard>

          {/* GitHub Code Repository Card */}
          <GlassCard spotlight className="border-slate-800/80 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-wider block">
                  CODE REPOSITORIES
                </span>
                <h3 className="text-lg font-bold text-white">GitHub Profile</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Inspect open-source code repositories, algorithmic implementations, project commits, and system source files.
            </p>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-cyan-300 font-mono text-sm font-bold transition-colors"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-[11px] font-mono text-slate-400">@chiluverusrija7</span>
            </div>
          </GlassCard>

          {/* LinkedIn Network Card */}
          <GlassCard spotlight className="border-slate-800/80 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <svg className="w-6 h-6 fill-current text-cyan-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider block">
                  PROFESSIONAL NETWORK
                </span>
                <h3 className="text-lg font-bold text-white">LinkedIn Profile</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect professionally for academic engineering updates, hackathons, and technical software development.
            </p>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm font-bold transition-colors"
              >
                <span>Chiluveru Srija</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-[11px] font-mono text-slate-400">LinkedIn Profile</span>
            </div>
          </GlassCard>

          {/* Institution & Resume Card */}
          <GlassCard spotlight className="border-slate-800/80 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block">
                  ACADEMIC LOCATION
                </span>
                <h3 className="text-lg font-bold text-white">KL University</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Department of Computer Science & Engineering • Undergraduate B.Tech Student
            </p>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <a
                href="/resume.pdf"
                download="Srija_Ch_Resume.pdf"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-mono text-sm font-bold transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">Verified File</span>
            </div>
          </GlassCard>

        </div>
      </section>

    </div>
  );
}
