import React from 'react';
import { Logo } from '../common/Logo';
import { NavButton } from './NavButton';
import { MobileMenuButton, MobileMenu } from './MobileMenu';

export const Header = ({ name, navItems, isMenuOpen, setIsMenuOpen, scrollToSection }) => (
  <header className="fixed top-5 left-0 right-0 z-40 px-4">
    <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-4 shadow-2xl">
      <div className="flex justify-between items-center">
        <Logo name={name} />
        
        <nav className="hidden md:flex gap-2">
          {navItems.map(item => (
            <NavButton 
              key={item.id}
              icon={item.icon}
              label={item.label}
              onClick={() => scrollToSection(item.id)}
            />
          ))}
        </nav>

        <MobileMenuButton 
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </div>

    {isMenuOpen && (
      <div className="max-w-6xl mx-auto px-4">
        <MobileMenu 
          items={navItems}
          onItemClick={scrollToSection}
        />
      </div>
    )}
  </header>
);