import React from 'react';
import { Binary, BrainCircuit, Code2, Cpu, Network, CheckCircle2, Terminal, Sparkles, TrendingUp } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { focusAreas, personalInfo } from '../../data/portfolioData';

const iconMap = {
  Binary: Binary,
  BrainCircuit: BrainCircuit,
  TrendingUp: TrendingUp,
  Code2: Code2,
  Cpu: Cpu
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="ENGINEERING FOUNDATION"
          title="Translating core CS theory into intelligent digital solutions."
          highlightWord="intelligent digital solutions"
          subheadline="A disciplined approach to software engineering rooted in algorithmic rigor, clean code architecture, and modern web frameworks."
        />

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-14 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="border-slate-800/80 p-8 space-y-6 text-left">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Srija Ch</h3>
                  <p className="text-xs font-mono text-cyan-400">CSE B.Tech Student @ KL University</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutText1}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutText2}
              </p>

              {/* Philosophy Tag */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">
                  DEVELOPMENT PHILOSOPHY
                </p>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-sm font-semibold shadow-sm">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>{personalInfo.philosophy}</span>
                </div>
              </div>

              {/* Core Principles */}
              <div className="space-y-2.5 pt-2 font-sans text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Asymptotic Big-O analysis on critical algorithm paths</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Modular component design with strict prop integrity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Relational database normalization & clean schemas</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Focus Areas Cards */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold px-1">
              MY CORE FOCUS & TECHNICAL DOMAINS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area) => {
                const IconComponent = iconMap[area.iconName] || Code2;
                return (
                  <GlassCard
                    key={area.id}
                    spotlight
                    className="group border-slate-800/80 hover:border-cyan-500/40 p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-cyan-400 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <Badge variant="cyan" size="sm" isMono>Focus Area</Badge>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-sans">
                      {area.title}
                    </h4>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {area.description}
                    </p>

                    <div className="pt-2 border-t border-slate-800/60 flex flex-wrap gap-1.5 font-mono text-[11px]">
                      {area.highlights.map((item, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
