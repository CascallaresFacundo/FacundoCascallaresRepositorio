export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'extras';
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Web' | 'Mobile' | 'Design';
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
    role: "Full-Stack Developer",
    subrole: "Desarrollo Web y Apps Móviles",
    biography: "Soy programador web y de aplicaciones móviles. Me enfoco en armar productos digitales completos: desde una interfaz limpia y milimétrica para el usuario, hasta una arquitectura backend sólida, ordenada y preparada para rendir al máximo. Trabajo de manera ágil (con Scrum) porque creo que la clave de un buen desarrollo está en la organización, el cumplimiento de las entregas y la comunicación clara en cada etapa del proyecto.",
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
    { name: "TypeScript", category: "frontend", color: "#3178C6" },
    { name: "Astro", category: "frontend", color: "#FF5D01" },
    { name: "Angular", category: "frontend", color: "#DD0031" },
    { name: "Tailwind CSS", category: "frontend", color: "#38BDF8" },

    // Backend & DB
    { name: "Python", category: "backend", color: "#3776AB" },
    { name: "Django", category: "backend", color: "#092E20" }, 
    { name: "Rest Framework", category: "backend", color: "#A30000" }, 
    { name: ".NET", category: "backend", color: "#512BD4" },

    // Database
    { name: "MySQL", category: "database", color: "#4479A1" }, 

    // Tools & Extras
    { name: "Git / GitHub", category: "tools", color: "#F05032" },
    { name: "SEO Local", category: "extras", color: "#2563EB" },
    { name: "UI/UX Optimization", category: "extras", color: "#EC4899" },
    { name: "Scrum / Agile", category: "tools", color: "#0284C7" },
  ],
projects: [
    {
      id: "lumiere-catalog",
      title: "Lumiere Espejos",
      description: "Catálogo e-commerce de alta gama automatizado mediante la sincronización en tiempo real de Google Sheets como CMS descentralizado.",
      category: "Web",
      technologies: ["Astro", "Tailwind CSS", "JavaScript", "Google Sheets API"],
      liveUrl: "https://www.instagram.com/espejoslumiere/",
      featured: true
    },
    {
      id: "travel-web",
      title: "Travel Dream Web",
      description: "Aplicación web para la gestión y reserva de paquetes turísticos, con pasarela integrada mediante Mercado Pago Checkout Pro.",
      category: "Web",
      technologies: ["Java", "Python (Django)", "Rest Framework", "Mercado Pago SDK"],
      githubUrl: "https://github.com/Travel-Dreams-2025/Traveldreamweb",
      featured: true
    },
    {
      id: "travel-app",
      title: "Travel Dream",
      description: "Aplicación móvil nativa para la gestión y reserva de paquetes turísticos, con pasarela integrada mediante Mercado Pago Checkout Pro.",
      category: "Mobile",
      technologies: ["Java", "Python (Django)","Rest Framework", "Retrofit", "Mercado Pago SDK"],
      githubUrl: "https://github.com/Travel-Dreams-2025/travelDreamsMovil",
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