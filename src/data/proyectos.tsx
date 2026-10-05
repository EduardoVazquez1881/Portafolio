import { FiltroProyecto, Proyecto } from "@/interfaces/proyecto";

const GITHUB = "https://github.com/EduardoVazquez1881";

/**
 * Filtros que se muestran en la UI (en este orden).
 * Los filtros sin proyectos se ocultan automáticamente.
 */
export const filtros: FiltroProyecto[] = [
    { id: "todos", label: "Todos" },
    { id: "estatico", label: "Estáticos" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Fullstack" },
    { id: "backend", label: "Backend" },
    { id: "movil", label: "Móvil" },
    { id: "sistemas", label: "Sistemas" },
];

/**
 * Lista de proyectos. Para agregar uno nuevo, solo añade un objeto aquí.
 *
 * Imágenes: colócalas en /public/image/proyectos/ y agrégalas así:
 *   imagenes: ["/image/proyectos/nutriai-1.png", "/image/proyectos/nutriai-2.png"],
 */
export const proyectos: Proyecto[] = [
    {
        id: "residencia-tda",
        titulo: "Residencia TDA",
        descripcion:
            "Aplicación web desarrollada como proyecto de residencia profesional, desplegada en Vercel.",
        categorias: ["frontend"],
        tecnologias: ["TypeScript", "React"],
        repositorio: `${GITHUB}/residencia_TDA`,
        demo: "https://residencia-tda.vercel.app",
        imagenes: [
            "/image/proyectos/nutriai-1.png",
        ],
    },
    {
        id: "reposteria-js",
        titulo: "Repostería JS",
        descripcion:
            "Sitio web para una repostería con catálogo de productos y diseño adaptable a cualquier dispositivo.",
        categorias: ["estatico"],
        tecnologias: ["TypeScript", "CSS"],
        repositorio: `${GITHUB}/Reposteriajs`,
        demo: "https://reposteriajs.vercel.app",
    },
    {
        id: "NutriAI",
        titulo: "NutriAI",
        descripcion:
            "Aplicación móvil para el monitoreo y la guía alimenticia apoyada por inteligencia artificial.",
        categorias: ["movil"],
        tecnologias: ["React Native", "TypeScript", "IA", "Expo"],
        repositorio: `${GITHUB}/NutriAI`,
    },
    {
        id: "compilador",
        titulo: "Compilador",
        descripcion:
            "Compilador desarrollado para la materia de Lenguajes y Autómatas 2: análisis léxico, sintáctico y semántico.",
        categorias: ["sistemas"],
        tecnologias: ["C++", "ARM"],
        repositorio: `${GITHUB}/compilador`,
    },
    {
        id: "scraper-job",
        titulo: "Scraper de empleos",
        descripcion:
            "Script de web scraping para recopilar y organizar ofertas de trabajo de forma automática.",
        categorias: ["backend"],
        tecnologias: ["Python"],
        repositorio: `${GITHUB}/scraper_job`,
    },
    {
        id: "bot-twitch",
        titulo: "Bot de Twitch",
        descripcion:
            "Bot para canales de Twitch que responde a comandos e interactúa con el chat en tiempo real.",
        categorias: ["backend"],
        tecnologias: ["JavaScript", "Node.js"],
        repositorio: `${GITHUB}/bot_twitch`,
    },
];
