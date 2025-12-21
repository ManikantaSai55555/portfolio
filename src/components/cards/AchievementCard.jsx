import React from 'react';

export const AchievementCard = ({ achievement, index, isVisible }) => {
  const IconComponent = achievement.icon;
  
  return (
    <div 
      data-id={`achievement-${index}`}
      className={`bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 hover:bg-white/30 hover:-translate-y-3 transition-all duration-200 shadow-xl ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-yellow-300">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
          {achievement.title}
        </h3>
      </div>
      <p className="text-white/90 leading-relaxed">{achievement.description}</p>
    </div>
  );
};