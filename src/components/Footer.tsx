export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.03] bg-[#050505] z-20 relative">
      {/* Pasamos a un layout de Grid de 3 columnas en pantallas sm en adelante */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
        
        {/* Columna 1: Espacio vacío a la izquierda */}
        <div className="hidden sm:block" />

        {/* Columna 2: Identidad y Copyright */}
        <div className="text-center space-y-1">
          <p className="text-[15px] font-mono tracking-widest text-neutral-500 uppercase">
            © {currentYear} ALL RIGHTS RESERVED
          </p>
          <p className="text-xs font-sans font-light text-neutral-400">
            Diseñado y desarrollado por <span className="text-white font-normal">Facundo Cascallares</span>
          </p>
        </div>

        {/* Columna 3: Botón de retorno al inicio */}
        <div className="flex justify-center sm:justify-end">
          <a 
            href="#" 
            className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase hover:text-white transition-colors duration-300 border-b border-white/10 pb-0.5 hover:border-white"
          >
            BACK TO TOP ↑
          </a>
        </div>

      </div>
    </footer>
  );
};