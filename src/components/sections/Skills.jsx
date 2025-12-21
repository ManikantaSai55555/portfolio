import React from 'react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { SkillCard } from '../cards/SkillCard';

export const Skills = ({ skills, visibleElements }) => (
  <section id="skills" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <Card variant="dark">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={visibleElements.has(`skill-${index}`)}
            />
          ))}
        </div>
      </Card>
    </div>
  </section>
);