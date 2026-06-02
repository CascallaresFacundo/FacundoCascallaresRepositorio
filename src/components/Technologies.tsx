// src/components/Technologies.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, type Technology } from '../config/portfolio';

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend & Core' },
  { id: 'database', name: 'Data' },
  { id: 'tools', name: 'Herramientas' },
  { id: 'extras', name: 'Especialidades' }
];

export const Technologies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredTechs = activeTab === 'all' 
    ? portfolioData.technologies 
    : portfolioData.technologies.filter(t => t.category === activeTab);

  return (
    <section id="tecnologias" className="relative py-48 px-6 max-w-7xl mx-auto z-20">
    <div className="mb-20 md:flex md:items-end md:justify-between border-b border-white/[0.03] pb-8">
      <div>
        <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mb-4">// INFRAESTRUCTURA</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
          Stack Técnico <span className="text-neutral-600">& Capacidades</span>
        </h2>
      </div>
      
      {/* Filtros Minimimalistas Premium */}
      <div className="flex flex-wrap gap-1 mt-8 md:mt-0 p-1 bg-white/[0.01] border border-white/5 rounded-lg backdrop-blur-md">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`relative px-4 py-2 text-[11px] font-mono tracking-wider uppercase rounded-md cursor-pointer transition-colors duration-500 ${
              activeTab === cat.id ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {activeTab === cat.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white/[0.03] border border-white/10 rounded-md"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <span className="relative z-10">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>

    {/* Grid Estilo Bento Box */}
    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
      <AnimatePresence mode="popLayout">
        {filteredTechs.map((tech) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            key={tech.name}
            className="group relative p-8 rounded-xl bento-card overflow-hidden backdrop-blur-xs cursor-crosshair"
            style={{
              ['--glow-color' as any]: `${tech.color}15`
            }}
          >
            {/* Ambient Aura Glow sutil bajo el puntero en hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial from-[var(--glow-color)] to-transparent blur-xl -z-10" />
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-md font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </h3>
              <div className="h-1.5 w-1.5 rounded-full transition-transform duration-500 group-hover:scale-150" style={{ backgroundColor: tech.color }} />
            </div>
            <span className="text-[9px] font-mono text-neutral-600 tracking-widest uppercase group-hover:text-neutral-400 transition-colors duration-300">
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </section>
);
};