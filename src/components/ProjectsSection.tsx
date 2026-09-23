import React, { useState, useRef } from 'react';

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

// Subcomponente individual para manejar el Tilt 3D y Glare por tarjeta
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = width / 2;
    const yc = height / 2;
    
    const calcRotateX = -(y - yc) / yc * 8;
    const calcRotateY = (x - xc) / xc * 8;

    setRotateX(calcRotateX);
    setRotateY(calcRotateY);
    setGlarePosition({
      x: (x / width) * 100,
      y: (y / height) * 100,
      opacity: 0.12
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: rotateX === 0 && rotateY === 0 ? 'transform 0.5s ease-out' : 'transform 0.05s ease-out',
      }}
      className={`relative rounded-2xl bg-neutral-950/40 p-8 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden will-change-transform flex flex-col justify-between hover:border-purple-500/30 hover:bg-neutral-900/50 hover:shadow-purple-500/5 ${className}`}
    >
      {/* Glare dinámico que sigue al cursor */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

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
          <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-3">// PORTAFOLIO</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Algunos de mis proyectos recientes
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

      {/* Grilla de Proyectos con Tilt 3D */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => {
          const projectTags = project.tags || project.technologies || [];
          const projectGithub = project.github || project.githubUrl;
          const projectLink = project.link || project.liveUrl;

          return (
            <TiltCard key={project.id || project.title}>
              <div className="relative z-10">
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

              <div className="relative z-10">
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
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};