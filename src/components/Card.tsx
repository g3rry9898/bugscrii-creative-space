'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, variant = 'primary', className = '' }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'border-primary hover:shadow-primary';
      case 'secondary':
        return 'border-secondary hover:shadow-secondary';
      default:
        return 'border-primary hover:shadow-primary';
    }
  };

  return (
    <div className={`comic-panel ${getVariantClasses()} ${className}`}>
      <div className="panel-corner panel-corner-tl"></div>
      <div className="panel-corner panel-corner-tr"></div>
      <div className="panel-corner panel-corner-bl"></div>
      <div className="panel-corner panel-corner-br"></div>
      {children}
    </div>
  );
};

export default Card; 