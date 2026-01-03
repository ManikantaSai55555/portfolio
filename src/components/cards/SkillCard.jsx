import React from 'react';
import { SVGIcon } from '../common/SVGIcon';

export const SkillCard = ({ skill, index, isVisible }) => (
  <div 
    data-id={`skill-${index}`}
  className={`bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center hover:bg-white/30 hover:-translate-y-2 hover:scale-102 shadow-xl transition-all duration-200 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
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