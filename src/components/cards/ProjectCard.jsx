import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { TechTag } from '../common/TechTag';

export const ProjectCard = ({ project, index, isVisible }) => (
  <div 
    data-id={`project-${index}`}
    className={`bg-black/40 backdrop-blur-xl border border-white/30 rounded-2xl p-6 hover:bg-black/50 hover:-translate-y-4 transition-all duration-200 flex flex-col shadow-2xl ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
  >
    <h3 className="text-2xl font-bold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
      {project.title}
    </h3>
    <p className="text-white/90 mb-4 flex-grow leading-relaxed">{project.description}</p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map(tech => (
        <TechTag key={tech}>{tech}</TechTag>
      ))}
    </div>
    
    <div className="flex gap-3">
      {project.liveLink && (
        <a 
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green-600/80 backdrop-blur-sm border border-green-400/50 text-white rounded-full hover:bg-green-500 transition-all font-medium shadow-lg"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      )}
      
      <a 
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600/80 backdrop-blur-sm border border-blue-400/50 text-white rounded-full hover:bg-blue-500 transition-all font-medium shadow-lg"
      >
        <Github className="w-4 h-4" />
        View Code
      </a>
    </div>
  </div>
);