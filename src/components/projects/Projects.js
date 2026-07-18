import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import { projectsData } from "../../data/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Portfolio"
          des="Selected Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects