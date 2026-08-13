import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from '../projects/ProjectCard';
import { projects } from '../../data/projects';
import { Button } from '../common/Button';

export function HomeFeaturedProjects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="PROJECT SHOWCASE PREVIEW"
            title="Translating core CS theory into working applications."
            highlightWord="working applications"
            subheadline="Explore practical engineering case studies demonstrating algorithms, AI pipelines, and systems design."
          />

          <Link to="/projects" className="shrink-0">
            <Button variant="primary" size="md" rightIcon={ArrowRight}>
              Explore All Projects
            </Button>
          </Link>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/30 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Full Technical Showcase & Case Studies Available</span>
            </h4>
            <p className="text-xs text-slate-400 font-sans">
              View detailed architecture diagrams, algorithms, implementation decisions, and experimental metrics.
            </p>
          </div>
          <Link to="/projects">
            <Button variant="secondary" size="sm" rightIcon={ArrowRight}>
              Browse 5 Projects
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
