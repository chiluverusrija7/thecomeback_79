import React from 'react';
import { GraduationCap, BookOpen, School, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { educationHistory, educationData } from '../../data/education';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  School: School
};

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="ACADEMIC BACKGROUND"
          title="Formal education & computer science foundations."
          highlightWord="education & computer science"
          subheadline="Academic record spanning secondary school excellence, higher secondary mathematics, and computer science engineering."
        />

        {/* 3-Card Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {educationHistory.map((edu) => {
            const IconComponent = iconMap[edu.iconName] || GraduationCap;
            return (
              <GlassCard
                key={edu.id}
                spotlight
                interactive
                className="group border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {edu.percentage ? (
                      <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Score: {edu.percentage}</span>
                      </div>
                    ) : (
                      <Badge variant="cyan" size="sm" isMono>{edu.status}</Badge>
                    )}
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                      {edu.type}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight mt-0.5 group-hover:text-cyan-300 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">{edu.degree}</p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Core CSE Coursework Grid */}
        <div className="pt-6 text-left space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2 px-1">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>CORE COMPUTER SCIENCE & ENGINEERING MODULES (KL UNIVERSITY)</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationData.coursework.map((course, idx) => (
              <GlassCard key={idx} className="border-slate-800/80 p-4 space-y-2 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    {course.code}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-white">{course.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {course.detail}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
