import React from 'react';

export const ContactItem = ({ href, icon, label }) => (
  <a 
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="bg-black/40 backdrop-blur-xl border border-white/30 rounded-2xl p-8 text-center hover:bg-black/50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-4 shadow-xl"
  >
    {icon}
    <div className="font-semibold text-white text-lg">{label}</div>
  </a>
);