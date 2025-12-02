import React from 'react';
import { Button } from '../components/Button';
import { about } from '../data/portfolio';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative z-0 min-h-screen flex items-center pt-20 section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5">
              <span className="text-accent-primary text-sm font-medium">👋 Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text block">{about.name}</span>
            </h1>
            
            <p className="text-xl text-dark-text-muted leading-relaxed">
              {about.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8 border-t border-dark-border">
              <div>
                <div className="text-3xl font-bold text-accent-primary">2+</div>
                <div className="text-dark-text-muted">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-primary">5+</div>
                <div className="text-dark-text-muted">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-primary">1+</div>
                <div className="text-dark-text-muted">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="relative z-10 flex items-center justify-center">
            {about.profileImage ? (
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-100 md:h-80 rounded-full overflow-hidden border-2 border-accent-primary shadow-lg mx-auto">
                <img
                  src={about.profileImage}
                  alt={`${about.name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 border-2 border-dark-border flex items-center justify-center mx-auto">
                <div className="text-center">
                    <div className="text-6xl mb-2">💻</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
