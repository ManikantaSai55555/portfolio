import React from 'react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { AchievementCard } from '../cards/AchievementCard';

export const Achievements = ({ achievements, visibleElements }) => (
  <section id="achievements" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <Card variant="dark">
        <SectionTitle>Achievements</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index}
              achievement={achievement}
              index={index}
              isVisible={visibleElements.has(`achievement-${index}`)}
            />
          ))}
        </div>
      </Card>
    </div>
  </section>
);