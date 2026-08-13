import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { educationData } from '../../data/education';

export function EducationSection() {
  return (
    <section className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="ACADEMIC BACKGROUND"
          title="Formal computer science & engineering foundations."
          highlightWord="formal computer science"
          subheadline="Disciplined education in algorithms, operating systems, database management, and software systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start text-left">
          
          {/* Degree Card */}
          <div className="lg:col-span-5">
            <GlassCard spotlight className="border-slate-800 p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="cyan" size="sm" isMono>{educationData.status}</Badge>
                  <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                    {educationData.degree}
                  </h3>
                </div>
              </div>

              <p className="text-xs font-mono text-cyan-400">{educationData.institution} • {educationData.duration}</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {educationData.description}
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">CORE HIGHLIGHTS:</span>
                {educationData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Coursework Grid */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2 px-1">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>CORE COURSEWORK MODULES</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educationData.coursework.map((course, idx) => (
                <GlassCard key={idx} className="border-slate-800 p-4 space-y-1.5 hover:border-indigo-500/30 transition-colors">
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

      </div>
    </section>
  );
}
