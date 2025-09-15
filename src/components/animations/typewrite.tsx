"use client" 
// 👆 Indica que este componente se ejecuta en el cliente (Next.js 13+). 
// Necesario para usar hooks como useState y useEffect.

import React, { useState, useEffect } from "react";
// 👆 Importamos React y dos hooks principales:
// useState → para manejar estados internos (texto actual, índice, borrado)
// useEffect → para manejar efectos secundarios (timers para animación)


// 🔹 Definimos la interfaz de las props
interface TypewriterProps {
  text?: string;             // Texto que se va a escribir automáticamente. Opcional si se usan children.
  speed?: number;            // Velocidad de escritura en milisegundos. Opcional, default 150.
  showCursor?: boolean;      // Si se muestra o no el cursor parpadeante.
  className?: string;        // Clases CSS adicionales (Tailwind o personalizadas)
  as?: React.ElementType;    // Permite elegir la etiqueta HTML que renderiza (span, h1, p, etc.)
  children?: React.ReactNode;// Alternativa a text: permite pasar texto o JSX como children
}


// 🔹 Componente Typewriter
const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 150,        // Valor por defecto si no se pasa la prop
  showCursor = true,  // Valor por defecto: cursor visible
  className = "",     // Valor por defecto: sin clases extra
  as: Tag = "span",   // Default tag: <span>. Se puede cambiar con la prop 'as'
  children,
}) => {
  // 👇 Determinamos el contenido que se va a escribir
  // Si existe 'text', lo usamos; si no, usamos 'children' solo si es string
  const content = text ?? (typeof children === "string" ? children : "");

  // 👇 Estados internos del componente
  const [displayedText, setDisplayedText] = useState(""); // Texto mostrado actualmente
  const [currentIndex, setCurrentIndex] = useState(0);    // Índice actual en el texto
  const [isDeleting, setIsDeleting] = useState(false);    // Estado: si estamos borrando

  // 🔹 useEffect principal → controla la animación de escribir y borrar
  useEffect(() => {
    if (!content) return; // Si no hay contenido, no hacemos nada

    // ✅ Caso 1: terminó de escribir → comienza a borrar después de 3s
    if (!isDeleting && currentIndex > content.length) {
      setTimeout(() => setIsDeleting(true), 3000); // espera 3s antes de borrar
      return;
    }

    // ✅ Caso 2: terminó de borrar → reinicia escritura desde el inicio
    if (isDeleting && currentIndex === 0) {
      setIsDeleting(false); // volvemos a modo "escribir"
      return;
    }

    // ✅ Caso 3: sigue escribiendo o borrando
    const timer = setTimeout(() => {
      // Actualiza el texto mostrado
      // Si estamos borrando → index decrementa, si escribiendo → index incrementa
      setDisplayedText(content.slice(0, currentIndex + (isDeleting ? -1 : 1)));
      setCurrentIndex(currentIndex + (isDeleting ? -1 : 1));
    }, isDeleting ? speed / 2 : speed); 
    // 👆 Borrar más rápido que escribir (opcional, estilo typewriter real)

    // Limpiar el timeout anterior si algo cambia
    return () => clearTimeout(timer);

  }, [currentIndex, content, speed, isDeleting]);
  // 👆 Se vuelve a ejecutar cada vez que cambian:
  // currentIndex → para avanzar o retroceder
  // content → si cambia el texto
  // speed → para ajustar velocidad
  // isDeleting → para alternar entre escribir y borrar

  // 🔹 Renderizado del componente
  return (
    <Tag className={`font-mono text-3xl ${className}`}>
      {/* Texto que se va escribiendo */}
      {displayedText}

      {/* Cursor parpadeante */}
      {showCursor && (
        <span
          className={`
            inline-block w-0.5 h-6 bg-white ml-1
            animate-pulse
          `}
        />
      )}
    </Tag>
  );
};

export default Typewriter;
// 🔹 Exportamos el componente para usarlo en otras vistas o páginas
