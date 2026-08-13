import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowRight, Sparkles, CheckCircle2, Rocket, Code2, Terminal } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { achievements } from '../data/achievements';

export function AchievementsPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen space-y-16 text-left">
      
      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="MILESTONES & HACKATHONS"
            title="Competitive achievements, hackathons, and technical milestones."
            highlightWord="hackathons, and technical milestones"
            subheadline="A chronological timeline of hackathon prototypes, algorithmic milestones, and academic recognitions."
          />
        </div>
      </section>

      {/* Interactive Vertical Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {achievements.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:border-emerald-400 group-hover:scale-125 transition-all shadow-md shadow-cyan-500/20" />

              {/* Milestone Card */}
              <GlassCard spotlight className="border-slate-800/80 p-6 md:p-8 space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                    <Trophy className="w-4 h-4 text-cyan-400" />
                    <span>MILESTONE {idx + 1} • {item.date}</span>
                  </div>
                  <Badge variant="cyan" size="sm" isMono>{item.status}</Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">{item.team}</p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.shortDescription}
                </p>

                {/* Problem & Solution Snippet */}
                {item.problemStatement && (
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs text-slate-300">
                    <div>
                      <strong className="text-white font-mono text-[11px] uppercase tracking-wider block text-cyan-400">
                        PROBLEM & CONTEXT:
                      </strong>
                      <p className="mt-0.5 leading-relaxed">{item.problemStatement}</p>
                    </div>
                    <div>
                      <strong className="text-white font-mono text-[11px] uppercase tracking-wider block text-emerald-400">
                        IMPLEMENTED SOLUTION:
                      </strong>
                      <p className="mt-0.5 leading-relaxed">{item.solutionSummary}</p>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.projectRef && (
                    <Link
                      to={`/projects/${item.projectRef}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>VIEW PROJECT CASE STUDY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>

              </GlassCard>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
