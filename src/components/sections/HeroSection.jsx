import React from 'react';
import { ArrowRight, FileDown, Search, Sparkles, Terminal, Code2 } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { HeroAlgorithmVisual } from '../visuals/HeroAlgorithmVisual';
import { personalInfo } from '../../data/portfolioData';

export function HeroSection({ onOpenResume, onOpenProjectsPreview, onOpenCommandPalette }) {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow & Status Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{personalInfo.eyebrow}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-300 font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>CSE B.Tech Student @ KL University</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-sans">
              Building <span className="text-gradient-cyan">intelligent systems</span> with algorithms, AI and modern web technologies.
            </h1>

            {/* Supporting Bio Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              {personalInfo.subheadline}
            </p>

            {/* Core Specialties Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <Badge variant="cyan" hasDot isMono>DSA Optimization</Badge>
              <Badge variant="indigo" isMono>Machine Learning</Badge>
              <Badge variant="emerald" isMono>React & Tailwind</Badge>
              <Badge variant="amber" isMono>Systems Programming</Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                rightIcon={ArrowRight}
                onClick={onOpenProjectsPreview}
              >
                Explore My Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                leftIcon={FileDown}
                onClick={onOpenResume}
              >
                Download Resume
              </Button>
            </div>

            {/* Quick Command Palette Tip */}
            <div className="pt-3 flex items-center gap-2 text-xs font-mono text-slate-500">
              <button
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-800"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span>Press <kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-200">Ctrl+K</kbd> for quick menu</span>
              </button>
            </div>

          </div>

          {/* Right Column - Algorithm Node Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroAlgorithmVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
