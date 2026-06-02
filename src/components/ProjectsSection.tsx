// src/components/ProjectsSection.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../config/portfolio';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Web', 'Mobile', 'Fullstack'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="proyectos" className="py-48 px-6 max-w-7xl mx-auto relative z-20">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/[0.03] pb-8">
      <div>
        <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-4">// SELECCIÓN DE TRABAJOS</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
          Proyectos <span className="text-neutral-600">Premium</span>
        </h2>
      </div>
      
      <div className="flex gap-6 mt-8 md:mt-0 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-[11px] font-mono tracking-wider uppercase transition-colors duration-500 cursor-pointer whitespace-nowrap ${
              filter === cat 
                ? 'text-white border-b border-white pb-1' 
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

    {/* Layout Editorial de Proyectos */}
    <motion.div layout className="grid grid-cols-1 gap-24">
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            key={project.id}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Contenedor de Imagen Cinemática */}
            <div className="lg:col-span-7 aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 relative border border-white/[0.03]">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover filter brightness-[0.75] group-hover:scale-102 group-hover:brightness-[0.9] transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Datos Editoriales del Proyecto */}
            <div className="lg:col-span-5 space-y-6 lg:pl-6">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                CASE STUDY // {project.category}
              </span>
              <h3 className="text-3xl font-display font-bold text-white tracking-tight">{project.title}</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-white/5">
                {project.technologies.map(t => (
                  <span key={t} className="text-[11px] font-mono text-neutral-600">/{t}</span>
                ))}
              </div>

              <div className="flex gap-8 pt-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} className="text-[10px] font-mono font-bold tracking-widest text-white flex items-center gap-2 hover:opacity-70 transition-opacity">
                    LIVE DEMO ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 flex items-center gap-2 hover:text-white transition-colors duration-300">
                    REPOSITORY ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </section>
);
};