"use client"
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Github from "@/components/icons/github";
import { CategoriaProyecto, Proyecto } from "@/interfaces/proyecto";
import { filtros } from "@/data/proyectos";

/** Degradados de portada por categoría (misma paleta fucsia / rosa del sitio). */
const portadaPorCategoria: Record<CategoriaProyecto, string> = {
    estatico: "from-fuchsia-500 to-pink-600",
    frontend: "from-pink-500 to-rose-500",
    fullstack: "from-purple-500 to-fuchsia-500",
    backend: "from-violet-600 to-fuchsia-600",
    movil: "from-rose-500 to-fuchsia-500",
    sistemas: "from-indigo-500 to-purple-600",
};

const etiquetaCategoria = (id: CategoriaProyecto) =>
    filtros.find((f) => f.id === id)?.label ?? id;

const iniciales = (titulo: string) =>
    titulo
        .split(/\s+/)
        .slice(0, 2)
        .map((p) => p[0])
        .join("")
        .toUpperCase();

interface ProyectoCardProps {
    proyecto: Proyecto;
}

const ProyectoCard = ({ proyecto }: ProyectoCardProps) => {
    const { titulo, descripcion, categorias, tecnologias, imagenes = [], repositorio, demo, destacado, anio } = proyecto;
    const degradado = portadaPorCategoria[categorias[0]] ?? portadaPorCategoria.estatico;

    const [indice, setIndice] = useState(0);
    const hayVarias = imagenes.length > 1;

    const cambiarImagen = (e: React.MouseEvent, paso: number) => {
        e.preventDefault();
        e.stopPropagation();
        setIndice((i) => (i + paso + imagenes.length) % imagenes.length);
    };

    return (
        <div className="group relative h-full rounded-2xl p-px transition-transform duration-500 hover:-translate-y-2">
            {/* Borde base y borde degradado en hover */}
            <div className="absolute inset-0 rounded-2xl bg-black/5 dark:bg-white/10" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Resplandor */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-fuchsia-500/0 to-pink-600/0 blur-2xl group-hover:from-fuchsia-500/20 group-hover:to-pink-600/20 transition-all duration-500 -z-10" />

            <article className="relative h-full flex flex-col overflow-hidden rounded-[15px] bg-white dark:bg-[#0B0D12] shadow-lg">
                {/* Portada */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                    {imagenes.length > 0 ? (
                        <>
                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={imagenes[indice]}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={imagenes[indice]}
                                        alt={`Captura ${indice + 1} del proyecto ${titulo}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Oscurecido inferior para que se lean los controles */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />

                            {hayVarias && (
                                <>
                                    <button
                                        type="button"
                                        aria-label="Imagen anterior"
                                        onClick={(e) => cambiarImagen(e, -1)}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md ring-1 ring-white/30 opacity-0 group-hover:opacity-100 hover:bg-fuchsia-500 transition-all duration-300"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Imagen siguiente"
                                        onClick={(e) => cambiarImagen(e, 1)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md ring-1 ring-white/30 opacity-0 group-hover:opacity-100 hover:bg-fuchsia-500 transition-all duration-300"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </button>

                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                                        {imagenes.map((src, i) => (
                                            <button
                                                key={src}
                                                type="button"
                                                aria-label={`Ver imagen ${i + 1}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIndice(i);
                                                }}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${i === indice
                                                    ? "w-5 bg-gradient-to-r from-fuchsia-500 to-pink-600"
                                                    : "w-1.5 bg-white/60 hover:bg-white"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${degradado} transition-transform duration-700 group-hover:scale-110`}
                        >
                            <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />
                            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
                            <span className="absolute inset-0 flex items-center justify-center text-6xl font-black tracking-tight text-white/90 drop-shadow-lg select-none">
                                {iniciales(titulo)}
                            </span>
                        </div>
                    )}

                    <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-3">
                        {destacado ? (
                            <span className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/30">
                                ★ Destacado
                            </span>
                        ) : (
                            <span />
                        )}
                        <div className="flex gap-2">
                            {hayVarias && (
                                <span className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-xs font-medium text-white ring-1 ring-white/30">
                                    {indice + 1}/{imagenes.length}
                                </span>
                            )}
                            {anio && (
                                <span className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-xs font-medium text-white ring-1 ring-white/30">
                                    {anio}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                    <div className="flex flex-wrap gap-2">
                        {categorias.map((cat) => (
                            <span
                                key={cat}
                                className="text-[11px] font-semibold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400"
                            >
                                {etiquetaCategoria(cat)}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400">
                        {titulo}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                        {descripcion}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                        {tecnologias.map((tec) => (
                            <li
                                key={tec}
                                className="rounded-lg bg-fuchsia-500/10 px-2.5 py-1 text-xs font-medium text-fuchsia-700 ring-1 ring-fuchsia-500/20 dark:text-fuchsia-300"
                            >
                                {tec}
                            </li>
                        ))}
                    </ul>

                    {(repositorio || demo) && (
                        <div className="mt-auto flex items-center gap-3 pt-2">
                            {repositorio && (
                                <a
                                    href={repositorio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-black/10 dark:ring-white/15 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                                >
                                    <Github size={16} />
                                    Código
                                </a>
                            )}
                            {demo && (
                                <a
                                    href={demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:shadow-fuchsia-500/30 transition-shadow"
                                >
                                    Ver demo
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17 17 7M7 7h10v10" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </article>
        </div>
    );
};

export default ProyectoCard;
