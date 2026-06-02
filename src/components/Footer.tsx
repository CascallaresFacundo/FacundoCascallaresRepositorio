// src/components/Footer.tsx

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.03] bg-[#050505] z-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Identidad y Copyright */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
            © {currentYear} ALL RIGHTS RESERVED
          </p>
          <p className="text-xs font-sans font-light text-neutral-400">
            Diseñado y desarrollado por <span className="text-white font-normal">Facundo Cascallares</span>
          </p>
        </div>

        {/* Tag Técnico de Arquitectura */}
        <div className="hidden md:block">
          <p className="text-[9px] font-mono tracking-widest text-neutral-600 uppercase">
            PROGRAMADOR FULL STACK
          </p>
        </div>

        {/* Botón sutil de retorno al techo */}
        <a 
          href="#" 
          className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase hover:text-white transition-colors duration-300 border-b border-white/10 pb-0.5 hover:border-white"
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
};