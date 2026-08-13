import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Search, FileText, Sparkles, ChevronRight } from 'lucide-react';
import { navItems } from '../../data/portfolioData';
import { Button } from '../common/Button';

export function Navbar({ onOpenCommandPalette, onOpenResume, onOpenPhase2 }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const sections = ['home', 'about', 'skills'];
        const scrollPos = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      } else if (location.pathname.startsWith('/projects')) {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.href === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.href.startsWith('/#')) {
      const sectionId = item.href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Direct page routes (/projects, /certifications, /achievements, /contact)
    navigate(item.href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-slate-950/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              DEV_PORTFOLIO<span className="text-cyan-400">.IO</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">
              CSE • DSA • AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
          {navItems.map((item) => {
            const isProjectsActive = location.pathname.startsWith('/projects') && item.href === '/projects';
            const isHomeActive = location.pathname === '/' && activeSection === 'home' && item.href === '/';
            const isSectionActive = location.pathname === '/' && activeSection === item.href.replace('/#', '');
            const isActive = isProjectsActive || isHomeActive || isSectionActive;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{item.label}</span>
                {!item.isImplemented && (
                  <span className="text-[9px] font-mono px-1.5 py-0.2 bg-slate-800/90 text-slate-400 rounded border border-slate-700/60">
                    {item.phase || 'P3'}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Search trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/30 transition-all focus:outline-none"
            title="Command Palette (Ctrl+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Resume Modal trigger */}
          <Button
            variant="secondary"
            size="sm"
            leftIcon={FileText}
            onClick={onOpenResume}
          >
            Resume
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-cyan-300 border border-slate-800"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl p-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-900 text-sm font-medium text-slate-200 hover:text-white border border-transparent hover:border-slate-800"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  {item.label}
                </span>
                {!item.isImplemented ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    Phase 3
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                )}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <Button
              variant="secondary"
              size="md"
              leftIcon={FileText}
              className="w-full"
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
            >
              View Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
