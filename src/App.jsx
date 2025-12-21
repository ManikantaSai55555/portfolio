import React, { useState } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Chatbot } from './components/chatbot/Chatbot';
import { ChatbotButton } from './components/chatbot/ChatbotButton';
import { 
  PERSONAL_INFO, 
  NAV_ITEMS, 
  SKILLS, 
  PROJECTS, 
  EXPERIENCES, 
  ACHIEVEMENTS, 
  ABOUT_TEXT 
} from './data/portfolioData';

// Import chatbot styles
import './styles/chatbot.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const visibleElements = useIntersectionObserver();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-x-hidden">
      <ScrollProgress progress={scrollProgress} />
      
      <Header 
        name={PERSONAL_INFO.name}
        navItems={NAV_ITEMS}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      
      <main>
        <Hero 
          personalInfo={PERSONAL_INFO}
          scrollToSection={scrollToSection}
        />
        
        <About content={ABOUT_TEXT} />
        
        <Skills 
          skills={SKILLS}
          visibleElements={visibleElements}
        />
        
        <Projects 
          projects={PROJECTS}
          visibleElements={visibleElements}
        />
        
        <Experience 
          experiences={EXPERIENCES}
          visibleElements={visibleElements}
        />
        
        <Achievements 
          achievements={ACHIEVEMENTS}
          visibleElements={visibleElements}
        />
        
        <Contact 
          email={PERSONAL_INFO.email}
          github={PERSONAL_INFO.github}
          linkedin={PERSONAL_INFO.linkedin}
        />
      </main>
      
      <Footer name={PERSONAL_INFO.name} />
      
      {/* Chatbot Components */}
      <Chatbot 
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        portfolioData={{
          personalInfo: PERSONAL_INFO,
          skills: SKILLS,
          projects: PROJECTS,
          experiences: EXPERIENCES,
          achievements: ACHIEVEMENTS,
          about: ABOUT_TEXT
        }}
      />
      <ChatbotButton 
        isOpen={isChatbotOpen}
        onClick={toggleChatbot}
      />
    </div>
  );
};

export default App;