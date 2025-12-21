import React from 'react';

export const Button = ({ children, variant = 'primary', onClick, href, download, className = '' }) => {
  const baseClasses = "flex items-center gap-2 px-8 py-4 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 shadow-xl";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:from-purple-500 hover:to-pink-500",
    secondary: "bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/30"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        download={download}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};