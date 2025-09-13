"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { projects } from "@/constants/projects";

export function Projects() {
  return (
    <main
      id="projects"
      className="flex min-h-dvh w-full flex-col items-center justify-start gap-10 px-5 py-10 text-center"
    >
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        <h3 className="text-5xl font-bold">Projetos principais</h3>
        <p className="max-w-2xl text-gray-600">
          Uma seleção dos meus trabalhos mais recentes
        </p>
      </motion.header>

      <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </main>
  );
}
