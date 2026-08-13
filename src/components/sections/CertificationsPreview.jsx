import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { certifications } from '../../data/certifications';

export function CertificationsPreview() {
  const previewCerts = certifications.slice(0, 3);

  return (
    <section className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="VERIFIED CREDENTIALS"
            title="Academic & industry technical certifications."
            highlightWord="certifications"
            subheadline="Specialized coursework in algorithms, machine learning pipelines, React systems, and relational databases."
          />

          <Link to="/certifications" className="shrink-0">
            <Button variant="secondary" size="md" rightIcon={ArrowRight}>
              View All Certifications
            </Button>
          </Link>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {previewCerts.map((cert) => (
            <GlassCard
              key={cert.id}
              spotlight
              interactive
              className="group border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <Badge variant="cyan" size="sm" isMono>{cert.category}</Badge>
                </div>

                <div>
                  <p className="text-[11px] font-mono text-slate-400">{cert.issuer} • {cert.date}</p>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-sans mt-0.5">
                    {cert.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1 font-mono text-[10px]">
                {cert.skills.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
