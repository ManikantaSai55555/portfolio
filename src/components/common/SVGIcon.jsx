import React from 'react';

export const SVGIcon = ({ src, alt, className = '', style = {} }) => {
  return (
    <img 
      src={src} 
      alt={alt}
      className={`${className}`}
      style={{
        ...style
      }}
    />
  );
};
