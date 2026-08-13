import React, { useRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function GlassCard({
  children,
  className = '',
  spotlight = true,
  onClick,
  interactive = false,
  ...props
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!spotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const combinedClass = twMerge(
    clsx(
      'spotlight-card relative rounded-2xl p-6 transition-all duration-300',
      interactive && 'cursor-pointer hover:-translate-y-1',
      className
    )
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
