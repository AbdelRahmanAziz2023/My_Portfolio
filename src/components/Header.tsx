import React, { useState } from 'react';
import { Button } from './Button';
import { about } from '../data/portfolio';

interface HeaderProps {
  name?: string;
}

export const Header: React.FC<HeaderProps> = ({ name }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const displayName = name || about.name || 'Your Name';

  return (
    <header className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur-md border-b border-dark-border z-50">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo / Profile */}
        <div className="flex items-center space-x-3">
          {about.profileImage ? (
            <img
              src='/MyLogo.png'
              alt={displayName}
              className="w-10 h-10 rounded-full object-fit border-2 border-accent-primary"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center">
              <span className="text-dark-bg font-bold text-lg">A</span>
            </div>
          )}
          <span className="font-bold text-xl text-dark-text hidden sm:inline">{displayName}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-dark-text-muted hover:text-accent-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="/assets/Abdelrahman Aziz Mobarak.pdf" download target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">
              Download CV
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark-text-muted hover:text-accent-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-dark-border bg-dark-bg">
          <div className="container-custom py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-dark-text-muted hover:text-accent-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="/assets/cv.pdf" download target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="primary" className="w-full">
                Download CV
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
