import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Technology } from '../config/portfolio';

interface Props {
  technologies: Technology[];
}

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend & Core' },
  { id: 'database', name: 'Data' },
  { id: 'tools', name: 'Herramientas' },
  { id: 'extras', name: 'Especialidades' }
];

// Subcomponente individual para manejar el Tilt 3D y Glare en las tecnologías
const TiltTechCard: React.FC<{ children: React.ReactNode; glowColor: string }> = ({ children, glowColor }) => {
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
    
    const calcRotateX = -(y - yc) / yc * 10;
    const calcRotateY = (x - xc) / xc * 10;

    setRotateX(calcRotateX);
    setRotateY(calcRotateY);
    setGlarePosition({
      x: (x / width) * 100,
      y: (y / height) * 100,
      opacity: 0.15
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
        ['--glow-color' as any]: `${glowColor}15`
      }}
      className="group relative p-8 rounded-2xl bg-neutral-950/40 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 hover:border-purple-500/30 hover:bg-neutral-900/50 hover:shadow-purple-500/5 overflow-hidden will-change-transform h-full flex flex-col justify-between"
    >
      {/* Glare dinámico que sigue al cursor */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 70%)`,
        }}
      />
      {/* Brillo superior y aura de color */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial from-[var(--glow-color)] to-transparent blur-xl -z-10" />

      {children}
    </div>
  );
};

export const Technologies: React.FC<Props> = ({ technologies }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredTechs = activeTab === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === activeTab);

  return (
    <section id="tecnologias" className="relative py-48 px-6 max-w-7xl mx-auto z-20">
      <div className="mb-20 md:flex md:items-end md:justify-between border-b border-white/[0.03] pb-8">
        <div>
          <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-4">// TECNOLOGÍAS</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Stack Técnico
          </h2>
        </div>
        
        {/* Filtros Minimalistas Premium */}
        <div className="flex flex-wrap gap-1 mt-8 md:mt-0 p-1 bg-white/[0.01] border border-white/5 rounded-lg backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-4 py-2 text-[11px] font-mono tracking-wider uppercase rounded-md cursor-pointer transition-colors duration-500 ${
                activeTab === cat.id ? 'text-white' : 'text-neutral-400 hover:text-neutral-300'
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

      {/* Grid con animaciones y Tilt Glass Card integrada */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredTechs.map((tech) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={tech.name}
            >
              <TiltTechCard glowColor={tech.color}>
                <div className="relative z-10 flex justify-between items-center mb-6">
                  <h3 className="text-md font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className="h-1.5 w-1.5 rounded-full transition-transform duration-500 group-hover:scale-150" style={{ backgroundColor: tech.color }} />
                </div>
                <span className="relative z-10 text-[9px] font-mono text-neutral-600 tracking-widest uppercase group-hover:text-neutral-400 transition-colors duration-300">
                  {tech.category}
                </span>
              </TiltTechCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};