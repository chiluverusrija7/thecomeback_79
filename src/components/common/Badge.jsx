import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Badge({
  children,
  variant = 'cyan',
  size = 'md',
  hasDot = false,
  isMono = false,
  className = ''
}) {
  const baseStyles = 'inline-flex items-center rounded-md font-medium border transition-colors';

  const variants = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    rose: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700/60'
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2'
  };

  const dotColors = {
    cyan: 'bg-cyan-400',
    indigo: 'bg-indigo-400',
    emerald: 'bg-emerald-400 animate-pulse',
    amber: 'bg-amber-400',
    rose: 'bg-rose-400',
    purple: 'bg-purple-400',
    slate: 'bg-slate-400'
  };

  const combinedClass = twMerge(
    clsx(
      baseStyles,
      variants[variant],
      sizes[size],
      isMono && 'font-mono tracking-tight',
      className
    )
  );

  return (
    <span className={combinedClass}>
      {hasDot && (
        <span className={clsx('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant] || 'bg-cyan-400')} />
      )}
      {children}
    </span>
  );
}
