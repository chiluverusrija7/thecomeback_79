import React from 'react';
import { ArrowDown, ArrowRight, Cpu, Database, HardDrive, Layers, Network, Terminal } from 'lucide-react';

export function ArchitectureFlow({ nodes }) {
  if (!nodes || nodes.length === 0) return null;

  const nodeStyles = {
    input: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    process: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
    algorithm: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    decision: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    output: 'border-purple-500/30 bg-purple-500/10 text-purple-300'
  };

  return (
    <div className="w-full bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-4 font-sans text-left">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold uppercase">
          <Network className="w-4 h-4 text-cyan-400" />
          <span>Technical Architecture & Data Pipeline</span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">[SYSTEM_WORKFLOW]</span>
      </div>

      {/* Nodes Container - Horizontal on desktop, Vertical on mobile */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-2">
        {nodes.map((node, index) => {
          const styleClass = nodeStyles[node.type] || 'border-slate-700 bg-slate-900 text-slate-200';
          const isLast = index === nodes.length - 1;

          return (
            <React.Fragment key={node.id}>
              {/* Node Card */}
              <div className={`flex-1 p-4 rounded-xl border ${styleClass} space-y-1.5 transition-all hover:scale-[1.02] shadow-sm`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                    STEP 0{node.id} • {node.type}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>
                <h5 className="text-sm font-bold text-white tracking-tight">
                  {node.label}
                </h5>
                <p className="text-xs text-slate-300 font-mono leading-tight">
                  {node.detail}
                </p>
              </div>

              {/* Arrow Connector */}
              {!isLast && (
                <div className="flex lg:flex-col items-center justify-center p-1 text-slate-600">
                  <ArrowRight className="w-5 h-5 hidden lg:block text-slate-500" />
                  <ArrowDown className="w-5 h-5 lg:hidden text-slate-500 my-1" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
