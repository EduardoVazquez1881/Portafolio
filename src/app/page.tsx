"use client"
import React from "react";
import Navegation from "@/components/ui/navegation";
import Typewriter from "@/components/animations/typewrite";
import Image from "next/image";
import { motion } from "framer-motion"
import Linkedin from "@/components/icons/linkedin";
import Github from "@/components/icons/github";
import Proyectos from "@/components/ui/proyectos"

const Page = () => {

  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = '/pdf/cv.pdf';
    link.download = 'Eduardo_Vazquez_CV.pdf';
    link.click();
  }

  return (
    <div>
      <Navegation />
      <section className="min-h-screen w-full flex items-start px-4 sm:px-6 md:px-8 lg:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-30 pb-12 md:pb-16">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-12">

          <div className="w-full md:w-1/2 space-y-4 lg:space-y-9 text-left">

            <h1 className="font-bold font-sans max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-[1.1]">
              Hola soy{" "}
              <span className="bg-gradient-to-r from-fuchsia-500 to-pink-600 bg-clip-text text-transparent">
                Eduardo Vazquez
              </span>
            </h1>

            <Typewriter
              text="Developer fullstack"
              className="font-sans font-semibold text-xl md:text-2xl lg:text-4xl text-left"
            />

            <h3 className="max-w-xl font-stretch-normal leading-8 lg:leading-10 lg:mt-8 text-base sm:text-lg lg:text-xl">
              Apasionado por el desarrollo de software, con experiencia en proyectos académicos y personales que abarcan frontend, backend
              y programación de sistemas
            </h3>

            <div className="flex flex-wrap lg:mt-11 items-center justify-start gap-6">
              <motion.button
                onClick={descargarCV}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="py-3 px-6 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Descargar CV
              </motion.button>

              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/eduardo-vazquez-0aaa5b242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-[1.1] transition-all duration-500"
                >
                  <Linkedin className="text-blue-500" size={36} />
                </a>

                <a
                  href="https://github.com/EduardoVazquez1881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-[1.1] transition-all duration-500"
                >
                  <Github className="text-black dark:text-white" size={36} />
                </a>
              </div>
            </div>

          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
            >
              <Image
                className="rounded-full shadow-2xl object-cover lg:mr-15"
                src="/image/image.png"
                alt="Profile image"
                width={400}
                height={400}
              />
            </motion.div>
          </div>

        </div>
      </section>
      <section
        id="proyectos"
        className="min-h-screen w-full scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-8 px-4 sm:px-6 md:px-8 lg:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-20 pb-12 md:pb-16">
        <div className="w-full max-w-7xl mx-auto">
          <Proyectos />
        </div>
      </section>


    </div>
  );
};

export default Page;