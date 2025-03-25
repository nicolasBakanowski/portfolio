"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
    return (
        <section id="home" className="relative flex flex-col justify-center items-center h-screen text-center px-6">
            {/* Imagen de fondo optimizada */}
            <Image
                src="/backgroundHome.jpg"
                alt="Cyberpunk Background"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="-z-10"
            />

            {/* Overlay para mejorar contraste */}
            <div className="absolute inset-0 bg-black/75" />

            {/* Contenido */}
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Sección de texto a la izquierda */}
                <div className="text-left w-full max-w-2xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold neon-text-white"
                    >
                        Desarrollo Web y Móvil a Tu Medida
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="mt-6 neon-text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
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
