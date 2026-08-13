import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 border border-cyan-400/30 focus:ring-cyan-500',
    secondary: 'bg-slate-800/80 text-slate-100 hover:bg-slate-700/80 border border-slate-700/80 backdrop-blur-md focus:ring-slate-500 shadow-sm',
    outline: 'bg-transparent text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 focus:ring-cyan-500',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60 focus:ring-slate-500',
    danger: 'bg-rose-600/90 text-white hover:bg-rose-500 border border-rose-500/30 focus:ring-rose-500 shadow-md shadow-rose-600/20'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5'
  };

  const combinedClass = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  return (
    <button
      type={type}
      className={combinedClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {LeftIcon && <LeftIcon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {RightIcon && <RightIcon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}
