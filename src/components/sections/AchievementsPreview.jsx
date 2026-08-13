import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowRight, Rocket, Terminal, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { achievements } from '../../data/achievements';

export function AchievementsPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="HACKATHONS & MILESTONES"
            title="Competitive engineering, hackathons & academic honors."
            highlightWord="hackathons & academic honors"
            subheadline="Milestones built under time constraints and rigorous peer evaluations."
          />

          <Link to="/achievements" className="shrink-0">
            <Button variant="secondary" size="md" rightIcon={ArrowRight}>
              View Full Timeline
            </Button>
          </Link>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {achievements.map((item) => (
            <GlassCard
              key={item.id}
              spotlight
              className="border-slate-800/80 p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                  <Trophy className="w-4 h-4" />
                  <span>{item.date} • {item.team}</span>
                </div>
                <Badge variant="cyan" size="sm" isMono>{item.category}</Badge>
              </div>

              <h4 className="text-lg font-bold text-white tracking-tight">
                {item.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.shortDescription}
              </p>

              {/* Technologies */}
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {item.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
