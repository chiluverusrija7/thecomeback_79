import React from 'react';

export function SectionHeader({
  eyebrow,
  title,
  highlightWord,
  subheadline,
  centered = false,
  className = ''
}) {
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-cyan">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
        {renderTitle()}
      </h2>
      {subheadline && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          {subheadline}
        </p>
      )}
    </div>
  );
}
