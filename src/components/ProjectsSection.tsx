import React, { useState } from 'react';

// Tipado extensible para cubrir ambas estructuras
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies?: string[];
  tags?: string[];
  liveUrl?: string;
  link?: string;
  githubUrl?: string;
  github?: string;
  image?: string;
  metrics?: string;
  featured?: boolean;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects = [] }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projectList = projects;

  const categories = ['all', ...Array.from(new Set(projectList.map((p) => p.category)))];

  const filteredProjects = activeFilter === 'all'
    ? projectList
    : projectList.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 border-t border-white/[0.02]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-3">// PORTAFOLIO</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Trabajos seleccionados & arquitecturas.
          </h2>
        </div>

        {/* Filtros de Categoría */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/[0.02] text-neutral-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grilla de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => {
          // Normalización de campos con fallbacks
          const projectTags = project.tags || project.technologies || [];
          const projectGithub = project.github || project.githubUrl;
          const projectLink = project.link || project.liveUrl;

          return (
            <div
              key={project.id || project.title}
              className="group glass-panel p-8 rounded-2xl border border-white/[0.03] hover:border-white/10 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[10px] font-mono text-neutral-500 tracking-wider">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors duration-300 mb-3">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Stack Tecnológico / Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {projectTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-neutral-400 bg-white/[0.02] border border-white/5 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enlaces al Repositorio y Demo */}
                <div className="flex items-center gap-4 text-xs font-mono pt-4 border-t border-white/5">
                  {projectGithub && (
                    <a
                      href={projectGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                      REPOSITORY →
                    </a>
                  )}
                  {projectLink && (
                    <a
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-neutral-300 transition-colors duration-300"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};