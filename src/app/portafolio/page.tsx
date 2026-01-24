"use client"
import React from "react";
import Navegation from "@/components/ui/navegation";
import Typewriter from "@/components/animations/typewrite";
import Image from "next/image";
import { motion } from "framer-motion"
import Linkedin from "@/components/icons/linkedin";

const Page = () => {

  const descargarCV = () =>{
  const link = document.createElement('a');
  link.href = '/pdf/cv.pdf';
  link.download = 'Eduardo_Vazquez_CV.pdf';
  link.click();
  }

  return (
    <div className="">
      <Navegation />
      <div className="h-screen mx-4 flex flex-col md:mx-5 lg:mx-45 md:flex-row">

        <div className="p-4 mt-30 lg:ml-50 space-y-5 md:w-1/2 lg:space-y-8">

         <h1 className="font-bold font-sans w-150 text-3xl md:text-4xl lg:text-6xl lg:leading-19">
          Hola soy{" "}
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Eduardo Vazquez
          </span>
         </h1>
         <Typewriter text="Developer fullstack" className="font-sans font-semibold text-xl md:text-2xl lg:text-4xl"/>
         <h3 className="mt-4 text-left font-stretch-normal leading-10 text-lg xl:w-150 md:text-xl lg:mt-7">Apasionado por el desarrollo de software, con experiencia en proyectos academicos y personales que abarcan frontend, backend 
          y programacion de sistemas</h3>

        <div className="flex">
          <motion.button 
            onClick={descargarCV}
            whileHover={{ 
              y: -10, 
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Descargar CV
        </motion.button>

          <a href="https://www.linkedin.com/in/eduardo-vazquez-0aaa5b242/">
            <Linkedin className="text-blue-900" size={40}/>
          </a>
        </div>

        </div>
        
        
        <div className="md:w-1/2 text-black mt-30">
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
          >
            <Image 
              className="rounded-full shadow-2xl"
              src="/image/image.png" 
              alt="Profile image"
              width={400}
              height={400}
            />
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default Page;
