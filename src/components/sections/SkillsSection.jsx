import React, { useState } from 'react';
import {
  FileCode, Coffee, Terminal, FileSpreadsheet, Atom, Code, Layout,
  Palette, Sparkles, Layers, Zap, Boxes, Database, HardDrive, Brain,
  TrendingUp, Cpu, Bot, GitBranch, Globe, Laptop, Server, HelpCircle,
  ChevronRight, Filter
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { SkillDetailModal } from './SkillDetailModal';
import { skills, skillCategories } from '../../data/portfolioData';

const iconMap = {
  FileCode, Coffee, Terminal, FileSpreadsheet, Atom, Code, Layout,
  Palette, Sparkles, Layers, Zap, Boxes, Database, HardDrive, Brain,
  TrendingUp, Cpu, Bot, GitBranch, Github: Globe, Laptop, Server
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="TECHNICAL TOOLKIT"
          title="Categorized competencies across software engineering & AI."
          highlightWord="software engineering & AI"
          subheadline="Structured inventory of programming languages, web stacks, computer science algorithms, machine learning concepts, and developer tools."
        />

        {/* Filter Tab Bar */}
        <div className="flex flex-wrap items-center gap-2 mt-10 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl w-fit">
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-500 font-semibold border-r border-slate-800 pr-3">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>FILTER:</span>
          </div>
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || HelpCircle;
            return (
              <GlassCard
                key={skill.name}
                spotlight
                interactive
                onClick={() => setSelectedSkill(skill)}
                className="group border-slate-800/80 hover:border-cyan-500/40 p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border transition-colors ${skill.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] font-mono text-slate-400 capitalize">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {skill.description}
                </p>

                {/* Concepts Pills */}
                <div className="pt-2 border-t border-slate-800/60 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {skill.concepts.slice(0, 3).map((concept, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800/80 group-hover:border-slate-700"
                    >
                      {concept}
                    </span>
                  ))}
                  {skill.concepts.length > 3 && (
                    <span className="px-1.5 py-0.5 text-slate-500 text-[10px]">
                      +{skill.concepts.length - 3}
                    </span>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Detail Modal */}
        <SkillDetailModal
          skill={selectedSkill}
          isOpen={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />

      </div>
    </section>
  );
}
