import React from "react";
import { Card, SectionTitle, Button } from "../components";
import { projects } from "../data/portfolio";

export const ProjectsSection: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-dark-bg">
      <div className="container-custom">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcase of my recent work and accomplishments"
        />

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden">
              {/* Project Image */}
              <div className="w-full h-48 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : null}
              </div>

              <h3 className="text-xl font-bold text-dark-text mb-2">
                {project.title}
              </h3>
              <p className="text-dark-text-muted text-sm mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded border border-accent-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    GitHub
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-dark-text mb-6">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.id} className="flex flex-col">
                  {/* Project Image */}
                  <div className="w-full h-40 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                    <div className="flex items-center justify-center absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20">
                      <span className="text-4xl">💻</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-dark-text mb-2">
                    {project.title}
                  </h4>
                  <p className="text-dark-text-muted text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent-secondary/10 text-accent-secondary rounded border border-accent-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      if (project.githubUrl)
                        window.open(project.githubUrl, "_blank");
                      else if (project.liveUrl)
                        window.open(project.liveUrl, "_blank");
                    }}
                  >
                    View Project
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
