import React from 'react';
import { Layers, Rocket, ShieldCheck, Trophy, Mail, ArrowRight, Check } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { phase2Roadmap } from '../../data/portfolioData';

export function Phase2PreviewModal({ isOpen, onClose, targetSection = 'Projects' }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${targetSection} — Phase 2 Roadmap`}
      subtitle="Phase 1 Foundation Built • Modular Extension Ahead"
    >
      <div className="space-y-6 text-left font-sans">
        
        {/* Status Callout */}
        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200 flex items-start gap-3">
          <Rocket className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-cyan-300">Phase 1 Foundation Complete</p>
            <p className="text-slate-300 text-xs mt-1 leading-relaxed">
              The core global design system, responsive navigation, hero visualizer, about section, and categorized skill matrix are fully implemented in Phase 1. <strong className="text-white">{targetSection}</strong> is slated for Phase 2 integration.
            </p>
          </div>
        </div>

        {/* Roadmap Items Grid */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Upcoming Phase 2 Modules</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {phase2Roadmap.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-bold text-white">{item.title}</h5>
                  <Badge variant="cyan" size="sm" isMono>{item.badge}</Badge>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Note */}
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>ZERO REDESIGN REQUIRED FOR PHASE 2</span>
          <span className="text-cyan-400">EXTENSIBLE REACT ARCHITECTURE</span>
        </div>

      </div>
    </Modal>
  );
}
