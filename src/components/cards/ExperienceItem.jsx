import React from 'react';

export const ExperienceItem = ({ experience, index, isVisible }) => (
  <div 
    data-id={`exp-${index}`}
    className={`relative ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
    } transition-all duration-700`}
  >
    <div className="absolute -left-[29px] top-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-white/50 shadow-lg" />
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-1">
        {experience.title}
      </h3>
      <div className="text-white/90 font-semibold mb-2">{experience.company}</div>
      <div className="text-white/70 text-sm mb-3">{experience.date}</div>
      <p className="text-white/90 leading-relaxed">{experience.description}</p>
    </div>
  </div>
);