'use client';

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'default' | 'outline'
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'default',
  className = '',
  onClick
}) => {
  const baseClasses = 'button px-4 py-2 rounded-md font-medium inline-block text-center'
  const variantClasses = variant === 'outline' ? 'outline' : ''
  
  const buttonContent = (
    <span className="relative z-10">{children}</span>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {buttonContent}
    </button>
  )
}

export default Button 