import React, { useState, useEffect } from 'react';
import { Search, Hash, Cpu, FileText, ArrowRight, X } from 'lucide-react';
import { skills, navItems } from '../../data/portfolioData';

export function CommandPalette({ isOpen, onClose, onSelectSkill, onOpenResume }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open trigger handled by parent, but prevent default browser bookmark behavior
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredNav = navItems.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(query.toLowerCase()) ||
    skill.description.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  const handleNavClick = (href, isImplemented) => {
    onClose();
    if (isImplemented) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Palette Modal */}
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl z-10 overflow-hidden backdrop-blur-2xl animate-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-cyan-400 shrink-0 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section name or technology (e.g., 'React', 'About', 'C++')..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
            autoFocus
          />
          <button onClick={onClose} className="text-slate-500 hover:text-slate-300 p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-4 custom-scrollbar">
          {/* Action shortcut */}
          <div
            onClick={() => { onClose(); onOpenResume(); }}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent cursor-pointer transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white group-hover:text-cyan-300">View Full Resume</p>
                <p className="text-xs text-slate-400">Interactive academic & skill profile preview</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Navigation Items */}
          {filteredNav.length > 0 && (
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 mb-1 font-semibold">
                Navigation Sections
              </p>
              <div className="space-y-1">
                {filteredNav.map((item) => (
                  <div
                    key={item.label}
                    onClick={() => handleNavClick(item.href, item.isImplemented)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 cursor-pointer transition-colors text-sm text-slate-300 hover:text-white"
                  >
                    <div className="flex items-center gap-2.5">
                      <Hash className="w-4 h-4 text-slate-500" />
                      <span>{item.label}</span>
                    </div>
                    {!item.isImplemented && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {item.phase}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Skills */}
          {filteredSkills.length > 0 && (
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 mb-1 font-semibold">
                Technologies & Concepts
              </p>
              <div className="space-y-1">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() => { onClose(); onSelectSkill(skill); }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/80 cursor-pointer transition-colors text-sm text-slate-300 hover:text-white"
                  >
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-xs text-slate-500 truncate max-w-[180px]">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
          <span>Navigate with mouse or click</span>
          <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}
