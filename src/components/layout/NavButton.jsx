import React from 'react';

export const NavButton = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300 font-medium"
  >
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </button>
);