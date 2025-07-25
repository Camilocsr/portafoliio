import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Logo_universitaria,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  AWS,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "Sobre mí",
    link: null,
  },
  {
    id: "work",
    title: "Proyectos",
    link: null,
  },
  {
    id: "contact",
    title: "Contacto",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Desarrollador Móvil",
    icon: mobile,
  },
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
  {
    title: "Desarrollador de Videojuegos",  // Cambiado de Content Creator a algo más relevante
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: AWS,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    "title": "Desarrollador de Inteligencia Artificial y Automatización.",
    "company_name": "Institución Universitaria de Colombia",
    "icon": Logo_universitaria,
    "iconBg": "#383E56",
    "date": "Marzo 2024 - Noviembre 2024",
    "points": [
      "Desarrollo completo de una plataforma de gestión de IAs con arquitectura cliente-servidor implementando frontend en React.js con interfaces interactivas, backend independiente y base de datos para almacenar interacciones.",
      "Despliegue y mantenimiento de infraestructura en Railway para el frontend y AWS EC2 para el backend, asegurando máximo rendimiento y escalabilidad.",
      "Desarrollo de paneles de control avanzados con dashboard en tiempo real, configuración de modelos, métricas, gestión de usuarios y herramientas de depuración.",
      "Automatización e integración de servicios incluyendo WhatsApp Business API y múltiples modelos de IA (Claude, ChatGPT, Amazon Polly, Assembly AI) con sistema de enrutamiento inteligente.",
      "Implementación de monitoreo y logging automático de todas las interacciones con paneles de visualización de métricas y análisis de rendimiento."
    ]
  },
  {
    "title": "Desarrollador de Videojuegos y Soluciones Interactivas VR",
    "company_name": "Institución Universitaria de Colombia",
    "icon": Logo_universitaria,
    "iconBg": "#383E56",
    "date": "Diciembre 2023 - Marzo 2024",
    "points": [
      "Desarrollo de dos videojuegos educativos en realidad virtual para Meta Quest 2 y 3: un simulador de disección veterinaria y una plataforma de aprendizaje de idiomas con avatar interactivo, utilizando Unity y C#.",
      "Implementación de arquitectura cliente-servidor con WebSockets, backend en .NET, e integración de servicios AWS (EC2, S3, Lambda, Polly) y ChatGPT 3.5.",
      "Desarrollo de sistemas de interacción VR realista incluyendo física para disección virtual con retroalimentación háptica y conversaciones multilingües con síntesis de voz mediante Amazon Polly.",
      "Colaboración con expertos en veterinaria y lingüistas para garantizar precisión educativa, implementando sistemas de seguimiento y evaluación del aprendizaje en entornos VR.",
      "Gestión completa del ciclo de desarrollo, incluyendo optimización específica para Meta Quest, documentación técnica y mantenimiento continuo de ambas plataformas VR."
    ]
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;
