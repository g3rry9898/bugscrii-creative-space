import React, { useEffect, useRef } from 'react';

interface CyberGridProps {
  className?: string;
  intensity?: number;
  speed?: number;
}

const CyberGrid: React.FC<CyberGridProps> = ({ 
  className = '', 
  intensity = 0.5,
  speed = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Grid properties
    const gridSize = 20;
    const glitchIntensity = intensity;
    const glitchSpeed = speed;
    
    // Animation variables
    let time = 0;
    let glitchOffset = 0;
    let glitchTimer = 0;
    let glitchDuration = 0;
    
    // Animation loop
    const animate = () => {
      time += 0.01 * glitchSpeed;
      glitchTimer += 0.01 * glitchSpeed;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(0, 255, 157, 0.1)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        // Add some glitch effect
        let offset = 0;
        if (glitchTimer > glitchDuration) {
          if (Math.random() < 0.05) {
            glitchOffset = (Math.random() - 0.5) * 10 * glitchIntensity;
            glitchDuration = Math.random() * 0.5 + 0.1;
            glitchTimer = 0;
          }
        }
        
        offset = glitchOffset * Math.sin(time + x * 0.01);
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + offset, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        // Add some glitch effect
        let offset = 0;
        if (glitchTimer > glitchDuration) {
          if (Math.random() < 0.05) {
            glitchOffset = (Math.random() - 0.5) * 10 * glitchIntensity;
            glitchDuration = Math.random() * 0.5 + 0.1;
            glitchTimer = 0;
          }
        }
        
        offset = glitchOffset * Math.sin(time + y * 0.01);
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y + offset);
        ctx.stroke();
      }
      
      // Draw some random glitch blocks
      if (Math.random() < 0.1) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = Math.random() * 50 + 10;
        const height = Math.random() * 50 + 10;
        
        ctx.fillStyle = 'rgba(0, 170, 255, 0.1)';
        ctx.fillRect(x, y, width, height);
        
        // Add some scan lines
        ctx.strokeStyle = 'rgba(255, 0, 255, 0.05)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < height; i += 2) {
          ctx.beginPath();
          ctx.moveTo(x, y + i);
          ctx.lineTo(x + width, y + i);
          ctx.stroke();
        }
      }
      
      // Draw some data streams
      if (Math.random() < 0.05) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const length = Math.random() * 100 + 50;
        
        ctx.fillStyle = 'rgba(0, 255, 157, 0.2)';
        ctx.font = '10px monospace';
        
        for (let i = 0; i < length; i += 10) {
          const char = String.fromCharCode(33 + Math.floor(Math.random() * 94));
          ctx.fillText(char, x, y + i);
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`cyber-grid ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default CyberGrid; 