'use client';

import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = '', 
  glitchInterval = 3000 
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, glitchInterval);
    
    return () => clearInterval(interval);
  }, [glitchInterval]);
  
  return (
    <h1 className={`glitch-text ${isGlitching ? 'glitching' : ''} ${className}`}>
      {text}
    </h1>
  );
};

export default GlitchText; 