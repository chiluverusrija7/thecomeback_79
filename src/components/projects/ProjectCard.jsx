import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { ProjectStatusBadge, ConceptBadge, TechBadge } from './ProjectBadge';
import { ProjectVisual } from './ProjectVisual';

export function ProjectCard({ project }) {
  return (
    <GlassCard spotlight interactive className="group border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between h-full space-y-5 text-left">
      <div className="space-y-4">
        
        {/* Top Badges Header */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            {project.category}
          </span>
          <ProjectStatusBadge status={project.status} />
        </div>

        {/* Visual Graphic */}
        <ProjectVisual projectId={project.id} className="h-40" />

        {/* Title & Short Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight font-sans">
            {project.title}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Technical Concepts Tags */}
        <div className="space-y-1.5 pt-1">
          <p className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider">
            TECHNICAL CONCEPTS:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.concepts.slice(0, 3).map((concept, idx) => (
              <ConceptBadge key={idx}>{concept}</ConceptBadge>
            ))}
            {project.concepts.length > 3 && (
              <span className="text-[10px] font-mono text-slate-500 self-center">
                +{project.concepts.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <TechBadge key={idx}>{tech}</TechBadge>
          ))}
        </div>

      </div>

      {/* Card Action Link */}
      <div className="pt-4 border-t border-slate-800/80">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 hover:text-white hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-500/40 transition-all group/link"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </GlassCard>
  );
}
