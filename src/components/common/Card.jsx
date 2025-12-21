import React from 'react';

export const Card = ({ children, variant = 'glass', className = '' }) => {
  const variants = {
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl',
    dark: 'bg-black/30 backdrop-blur-xl border border-white/20 shadow-2xl'
  };

  return (
    <div className={`rounded-3xl p-8 md:p-12 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};