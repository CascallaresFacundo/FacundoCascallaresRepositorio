import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../config/portfolio';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Web', 'Mobile'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="proyectos" className="py-48 px-6 max-w-7xl mx-auto relative z-20">
      
      {/* ENCABEZADO DE LA SECCIÓN */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/[0.03] pb-8">
        <div>
          <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-4">// SELECCIÓN DE TRABAJOS</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Proyectos <span className="text-neutral-600">Backend & Web</span>
          </h2>
        </div>
        
        {/* FILTROS DE CATEGORÍAS */}
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

      {/* GRILLA DE TARJETAS TÉCNICAS (Sin Imágenes) */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={project.id}
              className="group relative flex flex-col justify-between h-full p-6 bg-[#090909] border border-white/[0.04] rounded-xl transition-all duration-300 hover:border-white/[0.12] hover:bg-[#0d0d0d] hover:shadow-[0_0_30px_rgba(255,255,255,0.01)]"
            >
              <div>
                {/* Categoría e Identificador de Proyecto */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                    // {project.category}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-neutral-400 transition-colors duration-500" />
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>

                {/* Descripción Corta */}
                <p className="text-xs text-neutral-400 font-normal leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tecnologías Usadas */}
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-4 border-t border-white/[0.03]">
                  {project.technologies.map(t => (
                    <span key={t} className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors">
                      /{t}
                    </span>
                  ))}
                </div>

                {/* Enlaces y CTAs de código */}
                <div className="flex gap-6 pt-5 mt-1">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] font-mono font-bold tracking-widest text-white flex items-center gap-1 hover:opacity-70 transition-opacity"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 flex items-center gap-1 hover:text-white transition-colors duration-300"
                    >
                      CODE ↗
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