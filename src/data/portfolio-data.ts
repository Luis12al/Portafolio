import type { SkillCategory, Project, Experience, Education, Stat, SocialLink } from '@/types';

export const personalInfo = {
  name: 'Luis Alejandro Toloza Mendoza',
  title: 'Desarrollador Full Stack',
  subtitle: 'Transformando ideas en soluciones digitales escalables',
  email: 'ltzmz1246@gmail.com',
  phone: '+57 322 7705460',
  location: 'Colombia',
  avatar: '/public/Foto_Perfil.png',
  resumeUrl: '/public/Hoja_de_Vida_Luis-Toloza.pdf',
  about: `Soy un desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras. 
  Con experiencia en el desarrollo de aplicaciones web modernas, me especializo en construir 
  productos digitales que combinan un diseño excepcional con un rendimiento óptimo.
  
  Mi enfoque se centra en escribir código limpio, mantenible y escalable, siguiendo las 
  mejores prácticas de la industria. Disfruto trabajando en equipo y aprendiendo continuamente 
  nuevas tecnologías para mantenerme actualizado en este campo en constante evolución.`,
};

export const stats: Stat[] = [
  { value: '3+', label: 'Años aprendiendo', icon: 'Calendar' },
  { value: '6+', label: 'Proyectos realizados', icon: 'Briefcase' },
  { value: '5+', label: 'Tecnologías dominadas', icon: 'Code' },
  { value: '100%', label: 'Compromiso con cada proyecto', icon: 'Heart' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 'intermediate' },
      { name: 'JavaScript (ES6+)', level: 'intermediate' },
      { name: 'HTML5', level: 'intermediate' },
      { name: 'CSS3', level: 'intermediate' },
      { name: 'TypeScript', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'advanced' },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Express', level: 'intermediate' },
      { name: 'PHP (Básico)', level: 'beginner' },
      { name: 'REST API Design', level: 'advanced' },
      { name: 'JWT Auth', level: 'intermediate' },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MySQL', level: 'intermediate' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'Database Modeling', level: 'intermediate' },
    ],
  },
  {
    title: 'Herramientas',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'advanced' },
      { name: 'Role-based Access', level: 'intermediate' },
      { name: 'VS Code', level: 'expert' },
      { name: 'Postman', level: 'intermediate' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sistema de Gestión de Inventarios',
    description: 'Aplicación web completa para la gestión de inventarios con control de stock, reportes y autenticación de usuarios.',
    longDescription: 'Un sistema completo de gestión de inventarios que permite a las empresas controlar su stock en tiempo real. Incluye autenticación con JWT, control de roles y permisos, generación de reportes PDF, y notificaciones de stock bajo.',
    image: '/projects/inventory.jpg',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    demoUrl: 'https://demo-ejemplo.com',
    codeUrl: 'https://github.com/tuusuario/inventory-system',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: '2',
    title: 'API REST de E-commerce',
    description: 'API RESTful completa para plataforma de comercio electrónico con carrito de compras y pagos.',
    longDescription: 'API RESTful diseñada para soportar una plataforma de e-commerce completa. Incluye gestión de productos, carrito de compras, procesamiento de pagos integrado, historial de pedidos y sistema de autenticación seguro.',
    image: '/projects/api.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API'],
    demoUrl: 'https://api-docs-ejemplo.com',
    codeUrl: 'https://github.com/tuusuario/ecommerce-api',
    featured: false,
    category: 'Backend',
  },
  {
    id: '3',
    title: 'Dashboard Administrativo',
    description: 'Panel de administración moderno con visualización de datos, gráficos interactivos y gestión de usuarios.',
    longDescription: 'Dashboard administrativo con interfaz moderna y responsive. Incluye gráficos interactivos con Chart.js, tablas de datos avanzadas, gestión completa de usuarios con roles y permisos, y exportación de reportes.',
    image: '/projects/dashboard.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST API'],
    demoUrl: 'https://dashboard-demo.com',
    codeUrl: 'https://github.com/tuusuario/admin-dashboard',
    featured: true,
    category: 'Frontend',
  },
  {
    id: '4',
    title: 'Portaflio Personal',
    description: 'Blog moderno con sistema de CMS, comentarios y categorización de artículos.',
    longDescription: 'Plataforma de blog completa con panel de administración para gestionar artículos, sistema de comentarios con moderación, categorización de posts, búsqueda avanzada y optimización SEO.',
    image: '/projects/blog.jpg',
    technologies: ['React', 'Node.js', 'MySQL', 'Express', 'SEO'],
    demoUrl: 'https://blog-demo.com',
    codeUrl: 'https://github.com/tuusuario/personal-blog',
    featured: false,
    category: 'Full Stack',
  },
  {
    id: '5',
    title: 'Tabla de registos de usuarios',
    description: 'Aplicación CRUD de gestión de usuarios desarrollada con Angular e integrada con Firebase, con sincronización en tiempo real y arquitectura basada en componentes',
    longDescription: 'Aplicación web desarrollada con Angular, que implementa un sistema de gestión de usuarios con operaciones CRUD (Crear, Leer, Actualizar y Eliminar), integrada en tiempo real con Firebase como base de datos y backend. La aplicación permite administrar registros dinámicamente, con sincronización automática de datos, validaciones en formularios y una interfaz estructurada basada en componentes reutilizables.',
    image: 'public/Tabla_registos_de_usuarios.png',
    technologies: ['Angular', 'JavaScript', 'TypeScript', 'Firebase', 'Cloud Firestore', 'CSS3'],
    demoUrl: 'https://gesti-n-de-usuarios-con-operaciones-crud.onrender.com/',
    codeUrl: 'https://github.com/Luis12al/Gesti-n-de-usuarios-con-operaciones-CRUD.git',
    featured: false,
    category: 'Full Stack',
  },
  {
    id: '6',
    title: 'Login de Usuarios',
    description: 'UI/UX Concept / Frontend Interaction Prototype',
    longDescription: 'Diseño de una interfaz de inicio de sesión moderna e interactiva, enfocada en la experiencia de usuario. La interfaz incorpora un sistema de asistencia guiada que se activa mediante un botón de ayuda y muestra instrucciones paso a paso.',
    image: './public/Login.png',
    technologies: ['JavaScript', 'CSS', 'HTML5', 'TypeScript', 'React + Vite'],
    demoUrl: 'https://desarrollo-techderos-front.onrender.com/',
    codeUrl: 'https://github.com/Luis12al/Desarrollo-techderos-front.git',
    featured: false,
    category: 'Frontend',
  },
];

export const experiences: Experience[] = [

  {
    id: '1',
    title: 'Auxiliar de Facturación',
    company: 'Empresa Comercial',
    location: 'Colombia',
    startDate: '2022-06',
    endDate: '2022-12',
    current: false,
    description: [
      'Gestión de facturación y documentación contable',
      'Manejo de bases de datos de clientes y proveedores',
      'Generación de reportes mensuales',
      'Atención al cliente y resolución de incidencias',
    ],
    technologies: ['Excel', 'Database', 'Reporting'],
  },
];

export const educations: Education[] = [
  {
    id: '1',
    degree: 'Técnologo en Análisis y Desarrollo de Sistemas de Información',
    institution: 'SENA',
    location: 'Colombia',
    startDate: '2022',
    endDate: '2024',
    current: false,
    description: 'Formación técnica en desarrollo de software, bases de datos, análisis de sistemas y metodologías ágiles.',
  },
  {
    id: '2',
    degree: 'Ingeniería Informática',
    institution: 'UNIPAZ',
    location: 'Colombia',
    startDate: '2024',
    current: true,
    description: 'Formación profesional en ingeniería informatica, arquitectura de sistemas y gestión de proyectos tecnológicos.',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Luis12al', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tuusuario', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:ltzmz1246@gmailcom', icon: 'Mail' },
];

export const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Contacto', href: '#contact' },
];
