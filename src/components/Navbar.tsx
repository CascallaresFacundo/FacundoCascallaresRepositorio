// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', url: '#' },
    { name: 'Sobre mí', url: '#sobre-mi' },
    { name: 'Tecnologías', url: '#tecnologias' },
    { name: 'Proyectos', url: '#proyectos' },
    { name: 'Contacto', url: '#contacto' },
  ];

  // Bloquear el scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/40 border-b border-white/[0.04] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto h-16 px-6 md:px-12 flex items-center justify-between relative z-50">
        
        {/* Identificador / Logo Minimalista */}
        <a href="#" className="text-[11px] font-mono tracking-widest text-white uppercase font-bold">
          F. Cascallares
        </a>

        {/* NAVEGACIÓN DESKTOP (Oculta en mobile con hidden md:flex) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="relative px-4 py-1.5 text-[11px] font-mono tracking-wider text-neutral-400 uppercase rounded-full transition-colors duration-300 hover:text-white group"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-[2px]" />
            </a>
          ))}
        </nav>

        {/* BOTÓN HAMBURGUESA INTERACTIVO (Solo visible en mobile con md:hidden) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-hidden cursor-pointer"
          aria-label="Alternar menú"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[1px] bg-white block origin-center"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[1px] bg-white block origin-center"
          />
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE CON FRAMER MOTION */}
<AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 w-screen h-screen bg-[#050505] z-40 flex flex-col justify-center items-center md:hidden"
          >
            {/* Achicamos el gap general de 6 a 3 para juntar los elementos */}
            <nav className="flex flex-col justify-center items-center gap-3 w-full px-8 select-none">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }} // Animación un toque más rápida
                  key={item.name}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  /* Cambios clave:
                    - text-[11px]: igualamos el tamaño micro del menú desktop
                    - tracking-wider: menos separado que antes para que no ocupe tanto ancho
                    - py-2: achicamos el colchón vertical de cada botón
                  */
                  className="w-full text-center text-[11px] font-mono tracking-wider text-neutral-400 uppercase py-2 transition-colors duration-300 hover:text-white cursor-pointer"
                >
                  // {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};