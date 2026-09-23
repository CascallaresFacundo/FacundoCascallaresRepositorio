import React, { useRef, useState } from 'react';

interface TiltGlassCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

export const TiltGlassCard: React.FC<TiltGlassCardProps> = ({ 
  children, 
  className = '', 
  enableTilt = true 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Posición del mouse relativa a la tarjeta (en porcentaje)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = width / 2;
    const yc = height / 2;
    
    // Calcular ángulos de inclinación (máximo 10 grados)
    const calcRotateX = -(y - yc) / yc * 10;
    const calcRotateY = (x - xc) / xc * 10;

    setRotateX(calcRotateX);
    setRotateY(calcRotateY);
    setGlarePosition({
      x: (x / width) * 100,
      y: (y / height) * 100,
      opacity: 0.15 // Intensidad del brillo
    });
  };

  const handleMouseLeave = () => {
    if (!enableTilt) return;
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
        transform: enableTilt ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : 'none',
        transition: rotateX === 0 && rotateY === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out',
      }}
      className={`relative rounded-2xl bg-neutral-950/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden will-change-transform ${className}`}
    >
      {/* Efecto de Glare / Brillo dinámico que sigue al mouse */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 80%)`,
        }}
      />
      
      {children}
    </div>
  );
};