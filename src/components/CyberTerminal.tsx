'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CyberTerminalProps {
  lines: string[];
  typingSpeed?: number;
  glitchFrequency?: number;
  className?: string;
}

const CyberTerminal: React.FC<CyberTerminalProps> = ({
  lines,
  typingSpeed = 50,
  glitchFrequency = 0.1,
  className = ''
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [glitch, setGlitch] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typeNextChar = () => {
      if (currentLine < lines.length) {
        if (currentChar < lines[currentLine].length) {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            if (!newLines[currentLine]) {
              newLines[currentLine] = '';
            }
            newLines[currentLine] = lines[currentLine].slice(0, currentChar + 1);
            return newLines;
          });
          setCurrentChar(prev => prev + 1);
        } else {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
          if (currentLine === lines.length - 1) {
            setIsTyping(false);
          }
        }
      }
    };

    const interval = setInterval(() => {
      if (isTyping) {
        typeNextChar();
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentLine, currentChar, isTyping, lines, typingSpeed]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < glitchFrequency) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }
    }, 1000);

    return () => clearInterval(glitchInterval);
  }, [glitchFrequency]);

  return (
    <div 
      ref={terminalRef}
      className={`terminal ${glitch ? 'glitch' : ''} ${className}`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        border: '2px solid var(--primary)',
        borderRadius: '8px',
        padding: '1.5rem',
        fontFamily: 'monospace',
        color: '#00ff00',
        textShadow: '0 0 5px rgba(0, 255, 0, 0.5)',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="terminal-content">
        {displayedLines.map((line, index) => (
          <div key={index} className="terminal-line">
            <span className="prompt">$</span> {line}
          </div>
        ))}
        {isTyping && (
          <div className="terminal-line">
            <span className="prompt">$</span> {lines[currentLine]?.slice(0, currentChar)}
            <span className="cursor">_</span>
          </div>
        )}
      </div>
      <div 
        className="terminal-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.05) 50%)',
          backgroundSize: '100% 4px',
          pointerEvents: 'none',
          opacity: 0.5
        }}
      />
    </div>
  );
};

export default CyberTerminal; 