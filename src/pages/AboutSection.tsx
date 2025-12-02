import React from 'react';
import { Card, SectionTitle } from '../components';
import { skills } from '../data/portfolio';

const SkillBadge: React.FC<{ text: string }> = ({ text }) => (
  <span className="px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-sm font-medium">
    {text}
  </span>
);

export const AboutSection: React.FC = () => {
  const groupedSkills = {
    frontend: skills.filter(s => s.category === 'frontend'),
    backend: skills.filter(s => s.category === 'backend'),
    mobile: skills.filter(s => s.category === 'mobile'),
    tools: skills.filter(s => s.category === 'tools'),
  };

  return (
    <section id="about" className="section-padding bg-dark-bg">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Learn more about my background and expertise"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-2xl font-bold text-dark-text mb-4">Professional Background</h3>
              <p className="text-dark-text-muted leading-relaxed mb-4">
                I'm a full-stack software engineer with 2+ years of experience building scalable applications. 
                My expertise spans across mobile development, modern frontend frameworks, and backend services.
              </p>
              <p className="text-dark-text-muted leading-relaxed">
                I'm passionate about writing clean, maintainable code and delivering exceptional user experiences. 
                When I'm not coding, you can find me contributing to open-source projects or learning new technologies.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-dark-text mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">✓</span>
                  <span className="text-dark-text-muted">Led development of 2+ production applications</span>
                </li>
                {/* <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">✓</span>
                  <span className="text-dark-text-muted">Mentored 10+ junior developers</span>
                </li> */}
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">✓</span>
                  <span className="text-dark-text-muted">Improved application performance by 20%</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-dark-text mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                {groupedSkills.frontend.map(skill => (
                  <SkillBadge key={skill.name} text={skill.name} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-text mb-4">Backend Development</h3>
              <div className="flex flex-wrap gap-3">
                {groupedSkills.backend.map(skill => (
                  <SkillBadge key={skill.name} text={skill.name} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-text mb-4">Mobile Development</h3>
              <div className="flex flex-wrap gap-3">
                {groupedSkills.mobile.map(skill => (
                  <SkillBadge key={skill.name} text={skill.name} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-text mb-4">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {groupedSkills.tools.map(skill => (
                  <SkillBadge key={skill.name} text={skill.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
