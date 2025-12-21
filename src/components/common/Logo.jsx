import React from 'react';

export const Logo = ({ name }) => (
  <div className="text-xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
    {name}
  </div>
);
