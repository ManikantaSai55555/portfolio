import React from 'react';

export const ScrollProgress = ({ progress }) => (
  <div 
    className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 z-50 transition-all duration-100"
    style={{ width: `${progress}%` }}
  />
);