import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] text-yellow-50 h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-behavior">
      <Head>
        <title>Nico Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
    </div>
  )
}
