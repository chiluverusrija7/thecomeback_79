import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Cpu, ExternalLink,
  GitBranch, Layers, Rocket, ShieldAlert, Sparkles, Terminal, Activity, BookOpen
} from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectStatusBadge, ConceptBadge, TechBadge } from '../components/projects/ProjectBadge';
import { ProjectVisual } from '../components/projects/ProjectVisual';
import { ArchitectureFlow } from '../components/projects/ArchitectureFlow';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';

export function ProjectDetailsPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex(p => p.id === projectId);
  const project = projects[projectIndex];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="pt-36 pb-24 max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
        <p className="text-slate-400 text-sm">
          The requested project ID "<code className="text-cyan-400 font-mono">{projectId}</code>" does not exist.
        </p>
        <Link to="/projects">
          <Button variant="primary" leftIcon={ArrowLeft}>
            Back to All Projects
          </Button>
        </Link>
      </div>
    );
  }

  // Previous / Next Project calculation
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <article className="pt-28 pb-24 min-h-screen text-left font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>
        </div>

        {/* Case Study Header Card */}
        <GlassCard spotlight className="border-slate-800 bg-slate-900/90 p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 uppercase font-semibold">
                {project.category}
              </span>
              <span>•</span>
              <span>CASE STUDY ID: {project.id}</span>
            </div>
            <ProjectStatusBadge status={project.status} />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              {project.title}
            </h1>
            <p className="text-lg text-cyan-400 font-mono font-medium">
              {project.subtitle}
            </p>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Badges Grid */}
          <div className="space-y-4 pt-2 border-t border-slate-800">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider block">
                TECHNICAL CONCEPTS APPLIED:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.concepts.map((concept, idx) => (
                  <ConceptBadge key={idx}>{concept}</ConceptBadge>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider block">
                TECHNOLOGIES UTILIZED:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <TechBadge key={idx}>{tech}</TechBadge>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm" leftIcon={GitBranch}>
                  View Repository
                </Button>
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-500 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span>Source Repository (Academic/Private)</span>
              </span>
            )}

            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" rightIcon={ExternalLink}>
                  Live Prototype
                </Button>
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-500 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span>Live Deployment (Local/Offline)</span>
              </span>
            )}
          </div>
        </GlassCard>

        {/* Project Visual Overview */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Technical Domain Visual</span>
          </h3>
          <ProjectVisual projectId={project.id} className="h-64 sm:h-72" />
        </section>

        {/* Technical Problem & Objective Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="border-slate-800 p-6 space-y-3">
            <h3 className="text-sm font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              <span>1. Problem Statement</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.problem}
            </p>
          </GlassCard>

          <GlassCard className="border-slate-800 p-6 space-y-3">
            <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              <span>2. Engineering Objective</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.objective}
            </p>
          </GlassCard>
        </section>

        {/* Implemented Solution */}
        <GlassCard className="border-slate-800 p-6 space-y-3">
          <h3 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>3. Implemented Solution</span>
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.solution}
          </p>
        </GlassCard>

        {/* Technical Architecture Diagram */}
        {project.architecture && (
          <section className="space-y-4">
            <ArchitectureFlow nodes={project.architecture.nodes} />
          </section>
        )}

        {/* Algorithms / Key Concepts Breakdown */}
        {project.algorithms && project.algorithms.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>4. Core Algorithms & Theoretical Concepts</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.algorithms.map((algo, idx) => (
                <GlassCard key={idx} className="border-slate-800 p-5 space-y-2">
                  <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {algo.name}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {algo.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </section>
        )}

        {/* Implementation Decisions */}
        {project.implementationDetails && (
          <GlassCard className="border-slate-800 p-6 space-y-4">
            <h3 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>5. Implementation & Architectural Decisions</span>
            </h3>
            <div className="space-y-2 font-sans text-xs sm:text-sm text-slate-300">
              {project.implementationDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                  <p className="leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        )}

        {/* Experimental Results & Metrics */}
        {project.results && project.results.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>6. Empirical Results & Performance Metrics</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <GlassCard key={idx} className="border-slate-800 p-5 space-y-1 text-center">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">
                    {res.metric}
                  </span>
                  <span className="text-2xl font-extrabold text-white font-mono block text-gradient-emerald">
                    {res.value}
                  </span>
                  <span className="text-[11px] text-slate-400 block pt-1">
                    {res.detail}
                  </span>
                </GlassCard>
              ))}
            </div>
          </section>
        )}

        {/* Honest Distinction: Implemented vs. Future Scope */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="border-emerald-500/30 bg-emerald-950/10 p-6 space-y-3">
            <h3 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Implemented Features (Phase 2 MVP)</span>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.implementedFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="border-indigo-500/30 bg-indigo-950/10 p-6 space-y-3">
            <h3 className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Future Scope & Extensions</span>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.futureScope.map((scope, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-400 font-mono">→</span>
                  <span>{scope}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Previous / Next Project Navigation Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all w-full sm:w-auto justify-start"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="text-left">
                <span className="text-[10px] text-slate-500 block">PREVIOUS PROJECT</span>
                <span className="font-bold text-white">{prevProject.title}</span>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all w-full sm:w-auto justify-end text-right"
            >
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block">NEXT PROJECT</span>
                <span className="font-bold text-white">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
            </Link>
          ) : <div />}
        </div>

      </div>
    </article>
  );
}
