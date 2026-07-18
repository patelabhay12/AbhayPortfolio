import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
  const { title, des, src, repoLink, liveLink } = project;
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-col glass-card group">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {repoLink && (
                <a href={repoLink} target="_blank" rel="noreferrer" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300">
                  <BsGithub />
                </a>
              )}
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noreferrer" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300">
                  <FaGlobe />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-gray-300 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard