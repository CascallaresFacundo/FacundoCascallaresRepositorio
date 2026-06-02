export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'extras';
  color: string; // Usado para el efecto Glow CSS dinámico
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Web' | 'Mobile' | 'Design';
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  current: boolean;
}

export interface PortfolioData {
  profile: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    subrole: string;
    biography: string;
    avatar: string;
    location: string;
  };
  socials: {
    github: string;
    linkedin: string;
    whatsapp: string;
    email: string;
  };
  technologies: Technology[];
  projects: Project[];
  experience: Experience[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Facundo",
    firstName: "FACUNDO CASCALLARES",
    lastName: "DEVELOPER",
    role: "Programador jr Full-Stack Developer",
    subrole: "Especializado en aplicaciones web y aplicaciones moviles",
    biography: "Programador web enfocado en construir experiencias digitales de alto impacto donde el diseño milimétrico se encuentra con una arquitectura de código limpia, escalable y optimizada para el rendimiento.",
    avatar: "/assets/profile-avatar.webp",
    location: "Mar del Plata, Argentina"
  },
  socials: {
    github: "https://github.com/CascallaresFacundo",
    linkedin: "https://www.linkedin.com/in/facundocascallares/",
    whatsapp: "https://wa.me/5492236035305",
    email: "facundocascallares@hotmail.com"
  },
  technologies: [
    // Frontend
    { name: "TypeScript", category: "frontend", color: "#3178c6" },
    { name: "Astro", category: "frontend", color: "#ff5d01" },
    { name: "Angular", category: "frontend", color: "#dd0031" },
    { name: "Tailwind CSS", category: "frontend", color: "#38bdf8" },
    // Backend & DB
    { name: "Python (Django)", category: "backend", color: "#092e20" },
    { name: ".Net", category: "backend", color: "#339933" },
    { name: "MySQL", category: "database", color: "#4479a1" },
    // Tools & Extras
    { name: "Git / GitHub", category: "tools", color: "#f05032" },
    { name: "SEO Local", category: "extras", color: "#22c55e" },
    { name: "UI/UX Optimization", category: "extras", color: "#a855f7" }
  ],
  projects: [
    {
      id: "lumiere-catalog",
      title: "Lumiere Espejos",
      description: "Catálogo e-commerce de alta gama automatizado mediante la sincronización en tiempo real de Google Sheets como CMS descentralizado.",
      category: "Web",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Astro", "Tailwind CSS", "JavaScript", "Google Sheets API"],
      liveUrl: "#",
      featured: true
    },
        {
      id: "travel-app",
      title: "Travel Dream Web",
      description: "Aplicación web para la gestión y reserva de paquetes turísticos, con pasarela integrada mediante Mercado Pago Checkout Pro.",
      category: "Web",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Java", "Python (Django)", "Retrofit", "Mercado Pago SDK"],
      githubUrl: "#",
      featured: true
    },
    {
      id: "travel-app",
      title: "Travel Dream",
      description: "Aplicación móvil nativa para la gestión y reserva de paquetes turísticos, con pasarela integrada mediante Mercado Pago Checkout Pro.",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Java", "Python (Django)", "Retrofit", "Mercado Pago SDK"],
      githubUrl: "#",
      featured: true
    }
  ],
  experience: [
    {
      company: "Freelance Digital Solutions",
      role: "Programador Web Freelance",
      period: "2023 - Presente",
      description: [
        "Desarrollo e implementación de plataformas web y móviles optimizadas para conversión y SEO Local en la costa atlántica.",
        "Arquitectura de catálogos dinámicos serverless integrando pipelines de automatización con Python y Google Services."
      ],
      current: true
    },
    {
      company: "Sector de Comercio & Distribución",
      role: "Especialista en Ventas B & Operaciones",
      period: "2021 - Presente",
      description: [
        "Gestión comercial y optimización de flujos de atención al cliente.",
        "Sincronización híbrida de habilidades blandas y técnicas para el levantamiento de requerimientos con clientes reales."
      ],
      current: true
    }
  ]
};