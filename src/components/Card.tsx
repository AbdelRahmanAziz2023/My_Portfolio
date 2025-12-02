import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ className = '', children, hover = true }) => {
  return (
    <div
      className={`
        bg-dark-card border border-dark-border rounded-xl p-6
        ${hover ? 'hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/20' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};
