import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { ProjectStatusBadge, ConceptBadge, TechBadge } from './ProjectBadge';
import { ProjectVisual } from './ProjectVisual';

export function FeaturedProjectCard({ project }) {
  return (
    <GlassCard spotlight className="group border-cyan-500/30 bg-slate-900/80 p-6 md:p-8 space-y-6 text-left">
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            FEATURED ENGINEERING CASE STUDY
          </span>
          <span className="text-xs font-mono text-slate-400 uppercase">
            {project.category}
          </span>
        </div>
        <ProjectStatusBadge status={project.status} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-cyan-400 font-mono text-xs sm:text-sm font-medium">
              {project.subtitle}
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.fullDescription || project.shortDescription}
          </p>

          {/* Key Engineering Problem & Solution Snippet */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs text-slate-300 font-sans">
            <div>
              <strong className="text-white font-mono text-[11px] uppercase tracking-wider block text-cyan-400">
                CORE PROBLEM:
              </strong>
              <p className="mt-0.5 leading-relaxed">{project.problem}</p>
            </div>
          </div>

          {/* Technical Concepts Badges */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider">
              TECHNICAL CONCEPTS:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.concepts.map((concept, idx) => (
                <ConceptBadge key={idx}>{concept}</ConceptBadge>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech, idx) => (
              <TechBadge key={idx}>{tech}</TechBadge>
            ))}
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs sm:text-sm font-mono font-semibold hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 transition-all group/btn"
            >
              <span>EXPLORE FULL CASE STUDY & ARCHITECTURE</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-5 w-full">
          <ProjectVisual projectId={project.id} className="h-64 sm:h-72" />
        </div>

      </div>
    </GlassCard>
  );
}
