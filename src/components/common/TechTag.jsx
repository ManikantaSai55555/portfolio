import React from 'react';

export const TechTag = ({ children }) => (
  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm text-white font-medium hover:bg-white/30 transition-colors">
    {children}
  </span>
);