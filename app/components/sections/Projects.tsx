"use client";

import ProjectCard from "../ProjectCard";

const projects = [
    {
        title: "Project A",
        description: "Descripción breve del proyecto A",
        image: "/projectA.jpg",
        details: "Detalles más específicos sobre el proyecto A. Tecnologías usadas, características, etc.",
    },
    {
        title: "Project B",
        description: "Descripción breve del proyecto B",
        image: "/projectB.jpg",
        details: "Detalles más específicos sobre el proyecto B. Tecnologías usadas, características, etc.",
    },
    {
        title: "Project C",
        description: "Descripción breve del proyecto C",
        image: "/projectC.jpg",
        details: "Detalles más específicos sobre el proyecto C. Tecnologías usadas, características, etc.",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="relative py-20 px-6 text-center">
            <h2 className="text-4xl  md:text-5xl font-bold neon-text-white bg-clip-text  drop-shadow-lg">
                Mis Proyectos
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
