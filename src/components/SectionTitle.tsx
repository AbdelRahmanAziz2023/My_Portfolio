import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-dark-text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
