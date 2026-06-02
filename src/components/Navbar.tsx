// src/components/Navbar.tsx
import { motion } from 'framer-motion';

export const Navbar = () => {
  const navItems = [
    { name: 'Inicio', url: '#' },
    { name: 'Manifiesto', url: '#sobre-mi' },
    { name: 'Tecnologías', url: '#tecnologias' },
    { name: 'Proyectos', url: '#proyectos' },
    { name: 'Contacto', url: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/40 border-b border-white/[0.04] backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto h-16 px-6 md:px-12 flex items-center justify-between">

        {/* Links de Navegación del Header */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              className="relative px-4 py-1.5 text-[11px] font-mono tracking-wider text-neutral-400 uppercase rounded-full transition-colors duration-300 hover:text-white group"
            >
              <span className="relative z-10">{item.name}</span>
              {/* Barra de activación inferior sutil en hover */}
              <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-[2px]" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};