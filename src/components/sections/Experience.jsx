import React from 'react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { ExperienceItem } from '../cards/ExperienceItem';

export const Experience = ({ experiences, visibleElements }) => (
  <section id="experience" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <Card variant="dark">
        <SectionTitle>Professional Experience</SectionTitle>
        <div className="space-y-8 relative pl-8 before:content-[''] before:absolute before:left-6 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-purple-500">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              experience={exp}
              index={index}
              isVisible={visibleElements.has(`exp-${index}`)}
            />
          ))}
        </div>
      </Card>
    </div>
  </section>
);