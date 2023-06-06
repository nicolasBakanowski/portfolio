'use client'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7x1 px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-50">
        About
      </h3>
      <motion.img
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] "
        src="https://live.staticflickr.com/65535/52938424672_bb2d915944_o_d.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Acerca de mi </h4>
        <p className="text-base">
          he trabajado en diversos proyectos de desarrollo de software, tanto en
          equipos como de forma independiente. He adquirido habilidades técnicas
          en lenguajes de programación, como Python y JavaScript, y estoy
          constantemente aprendiendo y adaptándome a las últimas tecnologías y
          mejores prácticas. tengo experiencia en el desarrollo de aplicaciones
          web, aplicaciones móviles y soluciones de software a medida.
        </p>
      </div>
    </motion.div>
  )
}

export default About
