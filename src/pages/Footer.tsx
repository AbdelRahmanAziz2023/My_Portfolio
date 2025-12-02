import React from 'react';
import { socialLinks, about } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-dark-text mb-2">{about.name}</h3>
            <p className="text-dark-text-muted">{about.title}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-text font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-dark-text-muted hover:text-accent-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-dark-text-muted hover:text-accent-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-dark-text-muted hover:text-accent-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-dark-text-muted hover:text-accent-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-dark-text font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-muted hover:text-accent-primary transition-colors"
                  title={link.platform}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-border pt-8 text-center">
          <p className="text-dark-text-muted text-sm">
            © {currentYear} {about.name}. All rights reserved. | Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
