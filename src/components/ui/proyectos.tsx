"use client"
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { filtros, proyectos } from "@/data/proyectos";
import { FiltroId } from "@/interfaces/proyecto";
import ProyectoCard from "@/components/ui/proyectoCard";

function Proyectos() {
    const [filtroActivo, setFiltroActivo] = useState<FiltroId>("todos");
    const [busqueda, setBusqueda] = useState("");

    // Cantidad de proyectos por filtro
    const conteo = useMemo(() => {
        const c: Partial<Record<FiltroId, number>> = { todos: proyectos.length };
        proyectos.forEach((p) => p.categorias.forEach((cat) => (c[cat] = (c[cat] ?? 0) + 1)));
        return c;
    }, []);

    // Solo se muestran los filtros que tienen proyectos
    const filtrosVisibles = filtros.filter((f) => (conteo[f.id] ?? 0) > 0);

    const proyectosFiltrados = useMemo(() => {
        const q = busqueda.trim().toLowerCase();
        return proyectos
            .filter((p) => filtroActivo === "todos" || p.categorias.includes(filtroActivo))
            .filter(
                (p) =>
                    !q ||
                    p.titulo.toLowerCase().includes(q) ||
                    p.descripcion.toLowerCase().includes(q) ||
                    p.tecnologias.some((t) => t.toLowerCase().includes(q))
            )
            .sort((a, b) => Number(!!b.destacado) - Number(!!a.destacado));
    }, [filtroActivo, busqueda]);

    return (
        <div>
            {/* Encabezado */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-4 mb-10 md:mb-14"
            >
                <h2 className="font-bold font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-[1.1]">
                    <span className="bg-gradient-to-r from-fuchsia-500 to-pink-600 bg-clip-text text-transparent">
                        Proyectos
                    </span>
                </h2>
            </motion.div>

            {/* Controles: filtros + búsqueda */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10"
            >
                <div
                    role="tablist"
                    aria-label="Filtrar proyectos por categoría"
                    className="flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl bg-white dark:bg-[#0B0D12] shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                >
                    {filtrosVisibles.map((filtro) => {
                        const activo = filtroActivo === filtro.id;
                        return (
                            <button
                                key={filtro.id}
                                id={`filtro-${filtro.id}`}
                                role="tab"
                                aria-selected={activo}
                                onClick={() => setFiltroActivo(filtro.id)}
                                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 ${activo
                                    ? "text-white"
                                    : "text-gray-600 dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
                                    }`}
                            >
                                {activo && (
                                    <motion.span
                                        layoutId="filtro-activo"
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-600 shadow-md shadow-fuchsia-500/30"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative">{filtro.label}</span>
                                <span
                                    className={`relative min-w-5 rounded-full px-1.5 text-[11px] leading-5 ${activo
                                        ? "bg-white/25 text-white"
                                        : "bg-black/5 dark:bg-white/10 text-gray-500 dark:text-gray-400"
                                        }`}
                                >
                                    {conteo[filtro.id]}
                                </span>
                            </button>
                        );
                    })}
                </div>

            </motion.div>

            {/* Grid de proyectos */}
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {proyectosFiltrados.map((proyecto, i) => (
                        <motion.div
                            key={proyecto.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.35, delay: i * 0.04 }}
                        >
                            <ProyectoCard proyecto={proyecto} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Estado vacío */}
            <AnimatePresence>
                {proyectosFiltrados.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-4 py-16 text-center"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/15 to-pink-600/15 text-3xl">
                            🔍
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            No se encontraron proyectos con esos criterios.
                        </p>
                        <button
                            id="limpiar-filtros"
                            onClick={() => {
                                setBusqueda("");
                                setFiltroActivo("todos");
                            }}
                            className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
                        >
                            Limpiar filtros
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Proyectos;