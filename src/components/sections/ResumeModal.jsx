import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { personalInfo } from '../../data/portfolioData';
import { educationData } from '../../data/education';

export function ResumeModal({ isOpen, onClose }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Srija Ch — Profile Summary"
      subtitle="CSE B.Tech Student @ KL University"
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6 text-left font-sans">
        
        {/* Top Header Card */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">{personalInfo.name}</h3>
            <p className="text-xs font-mono text-cyan-400 mt-0.5">{personalInfo.role} • {personalInfo.institution}</p>
            <p className="text-xs text-slate-400 mt-1">Open for Software Engineering & AI Collaborations</p>
          </div>
          <Button
            variant="primary"
            size="sm"
            leftIcon={Download}
            onClick={handleDownload}
          >
            {downloadSuccess ? 'Downloaded!' : 'Download Resume'}
          </Button>
        </div>

        {downloadSuccess && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Resume download asset ready for Srija Ch profile PDF.</span>
          </div>
        )}

        {/* Education Section */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2 border-b border-slate-800 pb-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Education & Academic Standing</span>
          </h4>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h5 className="text-sm font-bold text-white">{educationData.degree}</h5>
                <p className="text-xs text-slate-400">{educationData.institution}</p>
              </div>
              <Badge variant="cyan" size="sm" isMono>Undergraduate</Badge>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {educationData.description}
            </p>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2 border-b border-slate-800 pb-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Core Computer Science Coursework</span>
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
            {educationData.coursework.map((course, i) => (
              <span key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                {course.title}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Summary */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2 border-b border-slate-800 pb-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Technical Toolkit</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-cyan-300 font-semibold font-mono">Languages:</span>
              <p className="text-slate-300">C, Java, Python, JavaScript (ES6+)</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-emerald-300 font-semibold font-mono">Web & Frameworks:</span>
              <p className="text-slate-300">React, JSX, HTML5, CSS3, Tailwind CSS, Firebase</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-indigo-300 font-semibold font-mono">AI & ML Concepts:</span>
              <p className="text-slate-300">Artificial Intelligence, Linear Regression, Scikit-learn, CSP</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-amber-300 font-semibold font-mono">Tools & Databases:</span>
              <p className="text-slate-300">PostgreSQL, Git, GitHub, VS Code</p>
            </div>
          </div>
        </div>

      </div>
    </Modal>
  );
}
