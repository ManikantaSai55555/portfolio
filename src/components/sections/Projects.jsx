import React from 'react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { ProjectCard } from '../cards/ProjectCard';

export const Projects = ({ projects, visibleElements }) => (
  <section id="projects" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <Card>
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              index={index}
              isVisible={visibleElements.has(`project-${index}`)}
            />
          ))}
        </div>
      </Card>
    </div>
  </section>
);