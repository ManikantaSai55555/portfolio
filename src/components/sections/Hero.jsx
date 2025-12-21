import React, { useEffect, useState } from 'react';
import { Rocket, Eye, Download } from 'lucide-react';
import { Button } from '../common/Button';

// ...existing code...
export const Hero = ({ personalInfo, scrollToSection }) => {
  const [typingDone, setTypingDone] = useState(false);
  const title = personalInfo?.title || '';
  const charCount = Math.max(1, title.length);
  const typingMs = Math.max(600, Math.round(charCount * 120)); // ~120ms per char, min 600ms

  useEffect(() => {
    const t = setTimeout(() => setTypingDone(true), typingMs + 80);
    return () => clearTimeout(t);
  }, [typingMs]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="text-center max-w-4xl" data-id="hero">
        <div className="mb-8">
          <img 
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="w-48 h-48 rounded-full mx-auto border-4 border-white/50 shadow-2xl object-cover hover:scale-110 transition-transform duration-300 ring-4 ring-purple-400/30"
          />
        </div>
        
        {/* heading: typed visually, but aria-label preserves full title for assistive tech */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl"
          aria-label={title}
        >
          <span
            className={`typing ${typingDone ? 'finished' : ''}`}
            style={{
              '--typing-ch': `${charCount}ch`,
              '--typing-duration': `${typingMs}ms`,
              '--typing-steps': `${charCount}`,
              background: 'linear-gradient(to right, #ffffff, #67e8f9, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {title}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
          {personalInfo.tagline}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" onClick={() => scrollToSection('projects')}>
            <Rocket className="w-5 h-5" />
            View My Work
          </Button>
          
          <Button variant="secondary" href={personalInfo.resume}>
            <Eye className="w-5 h-5" />
            View Resume
          </Button>
          
          <Button variant="secondary" href={personalInfo.resume} download>
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
// ...existing code...