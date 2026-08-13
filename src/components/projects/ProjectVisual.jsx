import React from 'react';
import { Activity, Binary, BrainCircuit, Cpu, GitBranch, Layers, ShieldAlert, Sparkles, TrendingUp } from 'lucide-react';

export function ProjectVisual({ projectId, className = 'h-48' }) {
  switch (projectId) {
    case 'lifelink-ai':
      return (
        <div className={`relative w-full ${className} rounded-xl bg-slate-950/80 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden group-hover:border-cyan-500/30 transition-colors`}>
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              EMERGENCY_DISPATCH::ABO+
            </span>
            <span className="text-emerald-400">SIGNAL_ACTIVE</span>
          </div>

          <div className="flex items-center justify-around my-auto">
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-center">
              <span className="text-xs font-bold block font-mono">HOSPITAL</span>
              <span className="text-[10px] text-slate-400">Req: O-</span>
            </div>
            <div className="w-16 h-[2px] bg-gradient-to-r from-rose-500 via-cyan-400 to-emerald-400 relative">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center">
              <span className="text-xs font-bold block font-mono">DONOR_MATCH</span>
              <span className="text-[10px] text-slate-400">Dist: 2.4km</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-900">
            <span>URGENCY_PRIORITY: HIGH</span>
            <span>DISPATCH_LATENCY: 1.2s</span>
          </div>
        </div>
      );

    case 'stringxpert':
      return (
        <div className={`relative w-full ${className} rounded-xl bg-slate-950/80 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden group-hover:border-indigo-500/30 transition-colors font-mono`}>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
              <Binary className="w-3.5 h-3.5" />
              LEVENSHTEIN_DP_GRID
            </span>
            <span className="text-slate-500 text-[10px]">O(m×n) MATRIX</span>
          </div>

          {/* Mini 4x4 Grid */}
          <div className="grid grid-cols-4 gap-1.5 my-auto max-w-[220px] mx-auto text-center text-xs">
            <div className="p-1.5 rounded bg-slate-900 text-slate-500 border border-slate-800">0</div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-400 border border-slate-800">1</div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-400 border border-slate-800">2</div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-400 border border-slate-800">3</div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-400 border border-slate-800">1</div>
            <div className="p-1.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold">0</div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-400 border border-slate-800">1</div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-400 border border-slate-800">2</div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-400 border border-slate-800">2</div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-400 border border-slate-800">1</div>
            <div className="p-1.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold">0</div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-400 border border-slate-800">1</div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-900">
            <span>EDIT_COST: 2 OPS</span>
            <span>SIMILARITY: 85.7%</span>
          </div>
        </div>
      );

    case 'chromatic-ai':
      return (
        <div className={`relative w-full ${className} rounded-xl bg-slate-950/80 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden group-hover:border-purple-500/30 transition-colors font-mono`}>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="text-purple-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              CSP_GRAPH_COLORING
            </span>
            <span className="text-cyan-400 text-[10px]">χ(G) = 3</span>
          </div>

          {/* Connected Color Nodes */}
          <div className="relative w-full h-24 my-auto flex items-center justify-around">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 font-bold text-xs shadow-lg shadow-cyan-500/20">
              V1
            </div>
            <div className="w-12 h-[2px] bg-slate-700" />
            <div className="w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center text-purple-300 font-bold text-xs shadow-lg shadow-purple-500/20">
              V2
            </div>
            <div className="w-12 h-[2px] bg-slate-700" />
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 font-bold text-xs shadow-lg shadow-emerald-500/20">
              V3
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-900">
            <span>MRV_HEURISTIC: ACTIVE</span>
            <span>BACKTRACKS: 0</span>
          </div>
        </div>
      );

    case 'shadowexec':
      return (
        <div className={`relative w-full ${className} rounded-xl bg-slate-950/80 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden group-hover:border-amber-500/30 transition-colors font-mono`}>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              PROCESS_SANDBOX::POSIX
            </span>
            <span className="text-emerald-400 text-[10px]">VERDICT: SAFE</span>
          </div>

          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 text-[11px] space-y-1 text-slate-300 my-auto">
            <p><span className="text-slate-500">$</span> fork() child_pid = 4192</p>
            <p><span className="text-slate-500">$</span> setrlimit(RLIMIT_CPU, 2.0s)</p>
            <p><span className="text-slate-500">$</span> alarm(5s) timer active</p>
            <p><span className="text-emerald-400">✔ Child process exited cleanly (code 0)</span></p>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-900">
            <span>MEM_CAP: 64MB</span>
            <span>TIMEOUT: 5000ms</span>
          </div>
        </div>
      );

    case 'student-performance':
      return (
        <div className={`relative w-full ${className} rounded-xl bg-slate-950/80 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden group-hover:border-emerald-500/30 transition-colors font-mono`}>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              OLS_LINEAR_REGRESSION
            </span>
            <span className="text-slate-300 text-[10px]">R² = 0.766</span>
          </div>

          {/* Scatterplot + Trendline Simulation */}
          <div className="relative w-full h-24 my-auto bg-slate-900/60 rounded-lg border border-slate-800 p-2 flex items-center justify-center">
            {/* Trend line */}
            <div className="absolute inset-x-4 top-3 bottom-3 border-b border-l border-slate-700" />
            <div className="absolute left-6 bottom-4 w-40 h-[2px] bg-gradient-to-tr from-emerald-400 to-cyan-400 -rotate-12" />
            {/* Dots */}
            <div className="absolute left-10 bottom-6 w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <div className="absolute left-20 bottom-10 w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <div className="absolute left-28 bottom-12 w-1.5 h-1.5 rounded-full bg-cyan-300" />
            <div className="absolute left-36 bottom-16 w-1.5 h-1.5 rounded-full bg-emerald-300" />
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-900">
            <span>MAE: 1.396</span>
            <span>DATASET: 395 RECS</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`w-full ${className} rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600`}>
          <Cpu className="w-8 h-8" />
        </div>
      );
  }
}
