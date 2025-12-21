import React from 'react';
import { SVGIcon } from '../common/SVGIcon';

export const SkillCard = ({ skill, index, isVisible }) => (
  <div 
    data-id={`skill-${index}`}
    className={`bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center hover:bg-white/30 hover:-translate-y-3 hover:scale-105 shadow-xl transition-all duration-200 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ 
      transitionDelay: `${index * 100}ms`
    }}
    onMouseEnter={(e) => {
      // Remove transition delay on hover for immediate response
      e.currentTarget.style.transitionDelay = '0ms';
    }}
    onMouseLeave={(e) => {
      // Restore transition delay for when mouse leaves
      e.currentTarget.style.transitionDelay = `${index * 100}ms`;
    }}
  >
    <div className="text-5xl mb-4 flex justify-center">
      <div className="w-16 h-16 flex items-center justify-center">
        <SVGIcon 
          src={skill.icon} 
          alt={`${skill.name} icon`}
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>
    <div className="font-semibold text-lg text-white">{skill.name}</div>
  </div>
);