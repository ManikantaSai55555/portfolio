import React from 'react';
import { Menu, X } from 'lucide-react';

export const MobileMenuButton = ({ isOpen, onClick }) => (
  <button 
    onClick={onClick}
    className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
  >
    {isOpen ? <X /> : <Menu />}
  </button>
);

export const MobileMenu = ({ items, onItemClick }) => (
  <div className="md:hidden mt-2 bg-black/40 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-2xl">
    {items.map(item => (
      <button
        key={item.id}
        onClick={() => onItemClick(item.id)}
        className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/20 transition-colors font-medium"
      >
        {item.label}
      </button>
    ))}
  </div>
);