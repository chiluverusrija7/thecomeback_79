import React from 'react';

export function ProjectStatusBadge({ status }) {
  const statusConfigs = {
    Implemented: {
      color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      dot: 'bg-emerald-400'
    },
    Prototype: {
      color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      dot: 'bg-cyan-400'
    },
    Experimental: {
      color: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      dot: 'bg-amber-400'
    }
  };

  const config = statusConfigs[status] || statusConfigs.Prototype;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold border ${config.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      <span>{status}</span>
    </span>
  );
}

export function ConceptBadge({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono text-[11px]">
      {children}
    </span>
  );
}

export function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/80 font-mono text-[11px]">
      {children}
    </span>
  );
}
