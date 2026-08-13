import React from 'react';
import { Cpu, Zap, Binary, BrainCircuit, Activity } from 'lucide-react';

export function AlgorithmTicker() {
  const items = [
    { label: "Binary Search", complexity: "O(log n)", icon: Binary, color: "text-cyan-400" },
    { label: "Merge Sort", complexity: "O(n log n)", icon: Zap, color: "text-emerald-400" },
    { label: "Hash Collision Lookup", complexity: "O(1) Avg", icon: Cpu, color: "text-amber-400" },
    { label: "Gradient Descent MSE", complexity: "f(w,b)", icon: BrainCircuit, color: "text-indigo-400" },
    { label: "BFS / DFS Traversal", complexity: "O(V + E)", icon: Activity, color: "text-purple-400" },
  ];

  return (
    <div className="w-full bg-slate-950/80 border-y border-slate-800/80 py-3 overflow-hidden backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8 font-mono text-xs text-slate-400">
          <span className="text-[11px] text-cyan-400 font-semibold uppercase tracking-widest flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            CORE METRICS:
          </span>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 bg-slate-900/60 px-3 py-1 rounded-lg border border-slate-800/80">
                  <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                  <span className="text-slate-300">{item.label}</span>
                  <span className={`font-semibold ${item.color}`}>{item.complexity}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
