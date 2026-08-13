import React from 'react';
import { Cpu, Check, Layers, Code, Sparkles } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';

export function SkillDetailModal({ skill, isOpen, onClose }) {
  if (!skill) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={skill.name}
      subtitle={`Category: ${skill.category.toUpperCase()} • Technical Deep Dive`}
    >
      <div className="space-y-6 text-left">
        {/* Header Overview */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-4">
          <div className={`p-3 rounded-xl ${skill.color}`}>
            <Cpu className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white">{skill.name}</span>
              <Badge variant="cyan" size="sm" isMono>{skill.category}</Badge>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {skill.description}
            </p>
          </div>
        </div>

        {/* Core Concepts */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Key Concepts & Capabilities</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {skill.concepts.map((concept, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{concept}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 Integration Note */}
        <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200 space-y-2">
          <div className="flex items-center gap-2 font-mono font-semibold text-indigo-300">
            <Sparkles className="w-4 h-4" />
            <span>PHASE 2 SHOWCASE INTEGRATION</span>
          </div>
          <p className="leading-relaxed">
            In Phase 2, live projects demonstrating <strong className="text-white">{skill.name}</strong> will feature interactive code sandboxes, algorithm benchmark metrics, and repository commits.
          </p>
        </div>
      </div>
    </Modal>
  );
}
