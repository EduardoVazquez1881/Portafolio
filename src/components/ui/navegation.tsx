"use client"
import React, { useState } from "react";
import { links } from "@/data/linkNavegation";
import { LinkNavigation } from "@/interfaces/linkNavegation";

export const Navegation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white text-black p-4 shadow-lg rounded-b-2xl">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-6 md:px-10 lg:px-15 py-3">
        <h1 className="text-2xl font-bold hover:scale-101 transition-all duration-500">
          My portafolio
        </h1>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navegación desktop */}
        <nav className="hidden md:flex md:space-x-1 lg:space-x-12 text-sm font-sans">
          {links.map((link: LinkNavigation) => (
            <div className="text-black dark:text-white dark:hover:text-black hover:bg-gray-100 rounded transition-all">
              <a
              key={link.href}
              href={link.href}
              className="flex items-center space-x-2 transition-colors duration-300 p-2"
            >
              <span
                dangerouslySetInnerHTML={{ __html: link.icon }}
              />
              <span>{link.label}</span>
            </a>
            </div>
          ))}
        </nav>
      </div>

      {/* Navegación móvil */}
      <div
        className={`
          md:hidden flex flex-col space-y-4 text-lg font-sans px-6
          transition-all duration-500 ease-in-out
          overflow-hidden
          ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        {links.map((link: LinkNavigation) => (
          <div
            key={link.href}
            className="text-black dark:text-white dark:hover:text-black hover:bg-gray-100 rounded transition-all"
          >
            <a
              href={link.href}
              className="flex items-center space-x-2 transition-colors duration-300 p-2 rounded"
            >
              <span dangerouslySetInnerHTML={{ __html: link.icon }} />
              <span>{link.label}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navegation;