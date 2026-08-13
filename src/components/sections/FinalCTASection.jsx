import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, FileText, Sparkles, Code2 } from 'lucide-react';
import { Button } from '../common/Button';

export function FinalCTASection({ onOpenResume }) {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl space-y-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>LET'S COLLABORATE & SHIP CODE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-sans max-w-3xl mx-auto">
            Let's build something <span className="text-gradient-cyan">worth showing</span>.
          </h2>

          {/* Supporting Copy */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-sans">
            Open for software engineering projects, hackathons, open-source collaborations, and technical opportunities.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/projects">
              <Button variant="primary" size="lg" rightIcon={ArrowRight}>
                View Projects
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="secondary" size="lg" leftIcon={Mail}>
                Contact Me
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              leftIcon={FileText}
              onClick={onOpenResume}
            >
              Download Resume
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
