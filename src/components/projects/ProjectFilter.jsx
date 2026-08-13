import React from 'react';
import { Search, Filter, RotateCcw, Layers } from 'lucide-react';
import { projectCategories } from '../../data/projects';
import { Button } from '../common/Button';

export function ProjectFilter({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  resultCount,
  totalCount,
  onResetFilters
}) {
  return (
    <div className="space-y-6">
      {/* Search Input Bar + Categories Row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title, technology (e.g. 'Linear Regression', 'C'), or concept..."
            className="w-full bg-slate-900/90 text-slate-100 placeholder-slate-500 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>

        {/* Dynamic Counter */}
        <div className="flex items-center justify-between md:justify-end gap-3 px-2 font-mono text-xs text-slate-400 shrink-0">
          <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Showing <strong className="text-cyan-300 font-bold">{resultCount}</strong> of {totalCount} projects</span>
          </span>

          {(activeCategory !== 'all' || searchQuery !== '') && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors bg-slate-900 px-2.5 py-1.5 rounded-xl border border-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-slate-500 font-semibold pr-2">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          <span>CATEGORY:</span>
        </div>
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectEmptyState({ onReset }) {
  return (
    <div className="p-12 rounded-2xl bg-slate-950/60 border border-slate-800 text-center space-y-4 max-w-md mx-auto my-8">
      <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 w-fit mx-auto">
        <Layers className="w-8 h-8 text-cyan-400" />
      </div>
      <div className="space-y-1">
        <h4 className="text-lg font-bold text-white">No projects match your criteria</h4>
        <p className="text-xs text-slate-400">
          Try broadening your search query or switching category filters.
        </p>
      </div>
      <Button
        variant="secondary"
        size="sm"
        leftIcon={RotateCcw}
        onClick={onReset}
      >
        Reset Filters & Search
      </Button>
    </div>
  );
}
