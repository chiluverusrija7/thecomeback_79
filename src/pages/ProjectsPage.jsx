import React, { useState, useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProjectFilter, ProjectEmptyState } from '../components/projects/ProjectFilter';
import { FeaturedProjectCard } from '../components/projects/FeaturedProjectCard';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { Sparkles, Terminal, Code2 } from 'lucide-react';

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamic search and category filtering
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Category check
      const matchesCategory = activeCategory === 'all' ||
        project.category === activeCategory ||
        project.secondaryCategory === activeCategory;

      // Search query check against title, description, technologies, concepts
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        project.concepts.some(concept => concept.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredProjects = useMemo(() => {
    return filteredProjects.filter(p => p.featured);
  }, [filteredProjects]);

  const regularProjects = useMemo(() => {
    return filteredProjects.filter(p => !p.featured);
  }, [filteredProjects]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-28 pb-24 min-h-screen space-y-16">
      
      {/* Projects Hero Section */}
      <section className="relative">
        {/* Glow Spheres */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <SectionHeader
            eyebrow="SELECTED WORK"
            title="Projects that turn algorithms, AI and software engineering into working systems."
            highlightWord="working systems"
            subheadline="A showcase of computational projects demonstrating practical applications of Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Systems Programming, and Full-Stack Engineering."
          />
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultCount={filteredProjects.length}
          totalCount={projects.length}
          onResetFilters={handleResetFilters}
        />

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <ProjectEmptyState onReset={handleResetFilters} />
        )}
      </section>

      {/* Featured Projects Spotlight Section */}
      {featuredProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>FEATURED ENGINEERING CASE STUDIES</span>
          </div>

          <div className="space-y-8">
            {featuredProjects.map(project => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* All / Supporting Projects Grid */}
      {regularProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span>ALL TECHNICAL SHOWCASES ({regularProjects.length})</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
