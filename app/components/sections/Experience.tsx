"use client";

import { motion } from "framer-motion";
import ExperienceCard from "../ExperienceCard";

const experiences = [
  {
    role: "Desarrollador Full Stack",
    company: "Toptive",
    achievements: ["Experiencia en Next.js, React y React-native "],
    startDate: "03/2022",
    endDate: "02/2023",
    side: "left",
  },
  {
    role: "Desarrollador Backend",
    company: "Alkemy",
    achievements: ["Creación de APIs con Node.js, MySql y Express."],
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

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-6 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold neon-text-white mb-2">Mi Experiencia</h2>

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
                <ExperienceCard
                  role={exp.role}
                  company={exp.company}
                  achievements={exp.achievements}
                  startDate={exp.startDate}
                  endDate={exp.endDate}
                />
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
