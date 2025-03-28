"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Definimos la interfaz para los proyectos
interface ProjectItem {
    title: string;
    description: string;
    image: string;
    link: string;
    side: "left" | "right";
}

// Datos de los proyectos
const projects: ProjectItem[] = [
    {
        title: "Project A",
        description: "Descripción corta del proyecto A",
        image: "/projectA.jpg", // Cambia las imágenes a las que tengas
        link: "#",
        side: "left",
    },
    {
        title: "Project B",
        description: "Descripción corta del proyecto B",
        image: "/projectB.jpg", // Cambia las imágenes a las que tengas
        link: "#",
        side: "right",
    },
    {
        title: "Project C",
        description: "Descripción corta del proyecto C",
        image: "/projectC.jpg", // Cambia las imágenes a las que tengas
        link: "#",
        side: "left",
    },
];

const Projects: React.FC = () => {
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
        <section id="projects" className="relative py-20 px-6 flex flex-col items-center text-center">
            {/* Fondo con imagen */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/projectsbg.jpg" // Cambia a la imagen que quieras para el fondo
                    alt="Background Projects"
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
                Mis Proyectos
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

                {/* Roadmap de proyectos */}
                <div className="flex flex-col space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: project.side === "left" ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: index * 0.3 }}
                            className={`relative flex ${project.side === "left" ? "justify-start" : "justify-end"}`}
                        >
                            <div className="w-1/2 flex items-center">
                                {/* Tarjeta de proyecto */}
                                <div className="w-full p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-xl border border-gray-600">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>
                                    <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="text-ciberpink font-semibold mt-4 block hover:underline"
                                    >
                                        Ver más
                                    </a>
                                </div>
                            </div>
                            {/* Conector entre proyectos con resplandor */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-ciberpink rounded-full border-4 border-black shadow-xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
