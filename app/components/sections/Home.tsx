"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Home = () => {
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
        <section id="home" className="relative flex flex-col justify-center items-center h-screen text-center px-6">
            {/* Imagen de fondo optimizada */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/backgroundHome.jpg"
                    alt="Cyberpunk Background"
                    quality={90}
                    className="-z-10 object-cover w-full h-full"
                    width={1920}
                    height={1080}
                />
            </div>

            {/* Overlay para mejorar contraste con oscurecimiento inicial */}
            <div className="absolute inset-0 bg-black/75" />

            {/* Overlay con gradiente que oscurece más al hacer scroll */}
            <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                    background: `linear-gradient(to bottom, rgba(9, 17, 21, 0) 0%, rgba(9, 17, 21, ${overlayOpacity}) 100%)`,
                }}
            />

            {/* Contenido */}
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Sección de texto a la izquierda */}
                <div className="text-left w-full max-w-2xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibolt font-[Orbitron] neon-text-white"
                    >
                        Desarrollo Web y Móvil a Tu Medida
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="mt-6 neon-text-white font-[Inter] text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Innovación constante para crear experiencias digitales únicas.
                    </motion.p>
                </div>

                {/* Sección de botones a la derecha */}
                <div className="flex flex-col pt-10 md:flex-row space-y-8 md:space-y-0 md:space-x-4">
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 1 }}
                        className="text-lg sm:text-xl md:text-2xl border-ciberpink backdrop-blur font-medium border-2 rounded-md px-3 py-2  transition-all duration-300 hover:bg-ciberpinkdown hover:text-black  hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ciberpink focus:ring-opacity-50"
                    >
                        Contáctame
                    </motion.a>
                    <motion.a
                        href="#projects"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 1 }}
                        className="text-lg sm:text-xl md:text-2xl backdrop-blur border-ciberpink font-medium border-2  rounded-md px-3 py-2  transition-all duration-300 hover:bg-ciberpinkdown hover:text-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ciberpink focus:ring-opacity-100"
                    >
                        Sigue Explorando
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Home;
