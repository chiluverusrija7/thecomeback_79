import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare, Terminal, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { siteConfig } from '../data/siteConfig';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      
      // Trigger mailto fallback
      const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen space-y-12 text-left font-sans">
      
      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Let's discuss technical projects, collaborations, or hackathons."
            highlightWord="collaborations, or hackathons"
            subheadline="Direct communication interface for project inquiries, technical feedback, or engineering opportunities."
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <GlassCard spotlight className="border-slate-800/80 p-6 md:p-8 space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <p className="text-xs font-mono text-slate-400">Direct Email Dispatch</p>
                </div>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm space-y-1">
                  <div className="flex items-center gap-2 font-bold font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Mail Client Triggered Successfully</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Your default mail application has been opened with the message parameters. Alternatively, send directly to <strong className="text-white font-mono">{siteConfig.email}</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full bg-slate-900/90 text-slate-100 placeholder-slate-500 text-xs sm:text-sm p-3 rounded-xl border ${
                        errors.name ? 'border-rose-500' : 'border-slate-800'
                      } focus:outline-none focus:border-cyan-500/50`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 font-mono">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold block">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full bg-slate-900/90 text-slate-100 placeholder-slate-500 text-xs sm:text-sm p-3 rounded-xl border ${
                        errors.email ? 'border-rose-500' : 'border-slate-800'
                      } focus:outline-none focus:border-cyan-500/50`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-semibold block">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Collaboration on AI / ML Project"
                    className="w-full bg-slate-900/90 text-slate-100 placeholder-slate-500 text-xs sm:text-sm p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-semibold block">
                    MESSAGE CONTENT *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or project description..."
                    className={`w-full bg-slate-900/90 text-slate-100 placeholder-slate-500 text-xs sm:text-sm p-3 rounded-xl border ${
                      errors.message ? 'border-rose-500' : 'border-slate-800'
                    } focus:outline-none focus:border-cyan-500/50 resize-none`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 font-mono">{errors.message}</p>}
                </div>

                <Button variant="primary" size="lg" rightIcon={Send} type="submit" className="w-full">
                  Send Message via Mail Dispatch
                </Button>
              </form>

            </GlassCard>
          </div>

          {/* Right Column: Direct Info & Social Grid */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="border-slate-800/80 p-6 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Communication</h3>
                  <p className="text-xs font-mono text-slate-400">Response Window: &lt;24h</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">EMAIL ADDRESS:</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-cyan-400 hover:underline font-mono text-sm font-bold block">
                    {siteConfig.email}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">CURRENT STATUS:</span>
                  <p className="text-slate-200 text-xs font-mono">
                    {siteConfig.availabilityStatus}
                  </p>
                </div>
              </div>

              {/* Social Buttons Grid */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">SOCIAL NETWORKS:</span>
                
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-slate-400" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </GlassCard>
          </div>

        </div>
      </section>

    </div>
  );
}
