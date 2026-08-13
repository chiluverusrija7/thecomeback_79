import React, { useState, useMemo } from 'react';
import { ShieldCheck, Search, Filter, RotateCcw, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { GlassCard } from '../components/common/GlassCard';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { certifications, certificationCategories } from '../data/certifications';

export function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = useMemo(() => {
    return certifications.filter(cert => {
      const matchesCategory = activeCategory === 'all' || cert.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.skills.some(skill => skill.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 min-h-screen space-y-12 text-left">
      
      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="CREDENTIALS & VERIFICATION"
            title="Certified foundations in computer science, machine learning & web engineering."
            highlightWord="machine learning & web engineering"
            subheadline="Verified academic and industry coursework validating theoretical mastery and practical toolkit application."
          />
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl">
          
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certification title, issuer, or skill (e.g. 'Scikit-Learn', 'React')..."
              className="w-full bg-slate-900/90 text-slate-100 placeholder-slate-500 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500/50"
            />
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3 px-2 font-mono text-xs text-slate-400 shrink-0">
            <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Showing <strong className="text-cyan-300 font-bold">{filteredCerts.length}</strong> of {certifications.length}</span>
            </span>

            {(activeCategory !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors bg-slate-900 px-2.5 py-1.5 rounded-xl border border-slate-800"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-slate-500 font-semibold pr-2">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>CATEGORY:</span>
          </div>
          {certificationCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => (
            <GlassCard
              key={cert.id}
              spotlight
              className="group border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400">{cert.issuer} • {cert.date}</p>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-sans">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                  <Badge variant="cyan" size="sm" isMono>{cert.category}</Badge>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-1">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>CREDENTIAL ID: {cert.credentialId}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

    </div>
  );
}
