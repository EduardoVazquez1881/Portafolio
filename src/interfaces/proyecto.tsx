/**
 * Categorías disponibles para clasificar un proyecto.
 * Si agregas una nueva, recuerda añadirla también en `filtros` (src/data/proyectos.tsx).
 */
export type CategoriaProyecto =
    | "estatico"
    | "frontend"
    | "fullstack"
    | "backend"
    | "movil"
    | "sistemas";

/** Identificador de un filtro: una categoría o "todos". */
export type FiltroId = CategoriaProyecto | "todos";

export interface FiltroProyecto {
    id: FiltroId;
    label: string;
}

export interface Proyecto {
    /** Identificador único (se usa como key en React). */
    id: string;
    titulo: string;
    descripcion: string;
    /** Un proyecto puede pertenecer a varias categorías. */
    categorias: CategoriaProyecto[];
    tecnologias: string[];
    /**
     * Imágenes del proyecto (rutas dentro de /public).
     * Ej: ["/image/proyectos/nutriai-1.png", "/image/proyectos/nutriai-2.png"]
     * Con una sola imagen se muestra fija; con varias se muestra un carrusel.
     * Si no hay imágenes se genera una portada con degradado.
     */
    imagenes?: string[];
    /** URL del repositorio en GitHub. */
    repositorio?: string;
    /** URL del proyecto desplegado. */
    demo?: string;
    /** Los proyectos destacados aparecen primero y con una insignia. */
    destacado?: boolean;
    anio?: number;
}
