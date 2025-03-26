"use client";

import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

const experiences = [
  { title: "Desarrollo Web", description: "Experiencia en Next.js, React y Tailwind CSS.", side: "left" },
  { title: "Desarrollo Móvil", description: "Creación de apps con React Native.", side: "right" },
  { title: "Backend y APIs", description: "Manejo de Node.js, Express y bases de datos SQL y NoSQL.", side: "left" },
  { title: "Animaciones y UI/UX", description: "Uso de Framer Motion para experiencias dinámicas.", side: "right" },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold neon-text-white mb-16">Mi Experiencia</h2>

      {/* Separador */}
      <div className="w-full flex justify-center my-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="w-48 h-1 bg-ciberpink shadow-[0_0_10px_#ff00ff]"
        />
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Línea central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-ciberpink h-full" />

        {/* Roadmap */}
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
                <div className="bg-black/75 border-2 border-ciberpink text-white p-6 rounded-lg shadow-lg max-w-xs">
                  <h3 className="text-xl font-semibold neon-text-white flex items-center gap-2">
                    <FaTools /> {exp.title}
                  </h3>
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                </div>
              </div>
              {/* Conector */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-ciberpink rounded-full border-4 border-black" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
