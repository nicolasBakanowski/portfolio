"use client";

import { motion } from "framer-motion";
import ExperienceCard from "../ExperienceCard";
import Image from "next/image";
import { useState, useEffect } from "react";

// Definimos la interfaz para las experiencias
interface ExperienceItem {
  role: string;
  company: string;
  achievements: string[];
  startDate: string;
  endDate: string;
  side: "left" | "right";
}

// Datos de experiencias
const experiences: ExperienceItem[] = [
  {
    role: "Desarrollador Full Stack",
    company: "Toptive",
    achievements: ["Experiencia en Next.js, React y React Native"],
    startDate: "03/2022",
    endDate: "02/2023",
    side: "left",
  },
  {
    role: "Desarrollador Backend",
    company: "Alkemy",
    achievements: ["Creación de APIs con Node.js, MySQL y Express."],
    startDate: "12/2021",
    endDate: "01/2022",
    side: "right",
  },
  {
    role: "Desarrollador Full Stack",
    company: "ItecLabs",
    achievements: ["Manejo de Python, JavaScript, HTML y CSS."],
    startDate: "11/2020",
    endDate: "12/2021",
    side: "left",
  },
];

const Experience: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Detectar el scroll y actualizar el valor de scrollY
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcular la opacidad en función del scroll
  const overlayOpacity = Math.min(scrollY / 500, 1); // Esto hará que se oscurezca más rápido, ajustable

  return (
    <section id="experience" className="relative py-20 px-6 flex flex-col items-center text-center">
      {/* Fondo con imagen */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/experiencebg2.jpg" // Cambia a la imagen que quieras
          alt="Background Experience"
          quality={90}
          className="-z-10 object-cover w-full h-full"
          width={1920}
          height={1080}
        />
      </div>

      {/* Fondo con gradiente y efectos de luz */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a5b74] to-transparent opacity-60 animate-pulse" />

      {/* Superposición con opacidad dinámica */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `linear-gradient(to bottom, rgba(9, 17, 21, 0) 0%, rgba(9, 17, 21, ${overlayOpacity}) 100%)`,
        }}
      />

      {/* Superposición con opacidad */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Título con resplandor */}
      <h2 className="text-4xl md:text-5xl font-bold neon-text-white mb-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-lg">
        Mi Experiencia
      </h2>

      {/* Separador con resplandor */}
      <div className="w-full flex justify-center my-10 relative z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-1 bg-ciberpink shadow-[0_0_10px_#ff00ff] drop-shadow-xl"
        />
      </div>

      <div className="relative w-full max-w-4xl z-10">
        {/* Línea central (Neón ciberpunk animado) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 shadow-[0_0_10px_#ff00ff] bg-ciberpink h-full drop-shadow-lg" />

        {/* Roadmap de experiencias */}
        <div className="flex flex-col space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className={`relative flex ${exp.side === "left" ? "justify-start" : "justify-end"}`}
            >
              <div className="w-1/2 flex items-center">
                {/* Tarjeta de experiencia */}
                <ExperienceCard
                  role={exp.role}
                  company={exp.company}
                  achievements={exp.achievements}
                  startDate={exp.startDate}
                  endDate={exp.endDate}
                />
              </div>
              {/* Conector entre experiencias con resplandor */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-ciberpink rounded-full border-4 border-black shadow-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
