import React from "react";
import Navegation from "@/components/ui/navegation";
import Typewriter from "@/components/animations/typewrite";

const Page = () => {
  return (
    <div className="">
      <Navegation />
      <div className="h-screen mx-4 flex-col md:mx-5 lg:mx-45 md:flex-row">

        <div className="p-4 mt-10 space-y-5 md:w-1/2 lg:space-y-8">

         <h1 className="font-bold font-sans text-3xl md:text-4xl lg:text-5xl">I'm Eduardo Vazquez</h1>
         <Typewriter text="Developer fullstack" className="font-sans font-semibold text-xl md:text-2xl lg:text-4xl"/>
         <h3 className="mt-4 text-left font-stretch-normal text-lg md:text-xl lg:mt-7">Apasionado por el desarrollo de software, con experiencia en proyectos academicos y personales que abarcan frontend, backend 
          y programacion de sistemas</h3>

        </div>
        
        <div className="md:w-1/2 text-black ">
        
        
        </div>

      </div>

    </div>
  );
};

export default Page;
